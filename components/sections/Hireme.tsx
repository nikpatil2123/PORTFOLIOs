import React from 'react';
import Modal from 'react-modal';

interface HireMeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HireMeForm({ isOpen, onClose }: HireMeFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectDetails: formData.get('projectDetails'),
      timestamp: new Date().toISOString()
    };

    try {
			const response = await fetch(
				'',
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				}
			);


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      const result = JSON.parse(text);

      if (result.status === 'success') {
        setIsSuccess(true);
        event.currentTarget.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="max-w-lg mx-auto mt-20 p-6 bg-[#011627] rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Thank you for your message!</h2>
          <button
            onClick={() => {
              setIsSuccess(false);
              onClose();
            }}
            className="px-4 py-2 bg-[#4fd1c5] text-white rounded hover:bg-[#3ab3a8] transition-colors"
          >
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="max-w-lg mx-auto mt-20 p-6 bg-[#011627] rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-mono">Hire Me</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 bg-[#1E2D3D] border border-gray-700 rounded text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-[#1E2D3D] border border-gray-700 rounded text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2" htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="w-full px-3 py-2 bg-[#1E2D3D] border border-gray-700 rounded text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2" htmlFor="projectDetails">Project Details</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              required
              rows={4}
              className="w-full px-3 py-2 bg-[#1E2D3D] border border-gray-700 rounded text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-[#4fd1c5] text-white rounded hover:bg-[#3ab3a8] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Modal>
  );
}