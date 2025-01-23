export default function Contact() {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto bg-[#011627] p-6 rounded-lg font-mono">
        <div className="grid gap-1">
          <div className="text-gray-400">/**</div>
          <div className="text-gray-400">* Contact Information</div>
          <div className="text-[#4fd1c5]">* Let's work together!</div>
          <div className="text-gray-400">*/</div>

          <div className="mt-6">
            <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">contactInfo</span> = {"{"}
          </div>

          <div className="ml-4">
            <span className="text-[#C792EA]">email:</span>{" "}
            <span className="text-[#C3E88D]">"nikhilpatil2123@gmail.com"</span>,
          </div>

          <div className="ml-4">
            <span className="text-[#C792EA]">phone:</span> <span className="text-[#C3E88D]">"+91 7096589655"</span>,
          </div>

          <div className="ml-4">
            <span className="text-[#C792EA]">location:</span>{" "}
            <span className="text-[#C3E88D]">"Vadodara, Gujarat, India"</span>,
          </div>

          <div>{"}"};</div>
        </div>
      </div>
    </div>
  )
}

