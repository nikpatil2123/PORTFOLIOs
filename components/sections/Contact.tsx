import React from 'react';

export default function Contact() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-[#011627] p-4 sm:p-6 rounded-lg font-mono text-sm sm:text-base">
        <div className="grid gap-1">
          <div className="text-gray-400">/**</div>
          <div className="text-gray-400">* Contact Information</div>
          <div className="text-[#4fd1c5]">* Let's work together!</div>
          <div className="text-gray-400">*/</div>

          <div className="mt-4 sm:mt-6">
            <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">contactInfo</span> = {"{"}
          </div>

          <div className="ml-2 sm:ml-4">
            <span className="text-[#C792EA]">email:</span>{" "}
            <span className="text-[#C3E88D] break-all">"nikhilpatil2123@gmail.com"</span>,
          </div>

          <div className="ml-2 sm:ml-4">
            <span className="text-[#C792EA]">phone:</span> <span className="text-[#C3E88D]">"+91 7096589655"</span>,
          </div>

          <div className="ml-2 sm:ml-4">
            <span className="text-[#C792EA]">location:</span>{" "}
            <span className="text-[#C3E88D]">"Vadodara, Gujarat, India"</span>,
          </div>

          <div>{"}"};</div>
        </div>
      </div>
    </div>
  )
}