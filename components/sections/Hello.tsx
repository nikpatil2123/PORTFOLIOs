import React, { useState } from 'react';
// import HireMeForm from './Hireme';

export default function Hello() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="p-4 md:p-8 bg-[#011627] min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-gray-400 mb-2">Hi all. I am</div>
        <h1 className="text-3xl md:text-5xl font-mono text-white mb-4">Nikhil Patil</h1>
        <div className="text-[#4fd1c5] text-lg md:text-xl mb-8">{`> Front-end developer`}</div>

        <div className="space-y-4 font-mono text-sm md:text-base">
          <div>
            <div className="text-gray-500">{`// my number`}</div>
            <div className="break-words">
              <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">telephoneNum</span> ={" "}
              <a href="tel:+917096589655" className="text-[#C3E88D] hover:underline">"+91 7096589655"</a>;
            </div>
          </div>

          <div>
            <div className="text-gray-500">{`// my e-mail`}</div>
            <div className="break-words">
              <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">email</span> ={" "}
              <span className="text-[#C3E88D]">
                <a href="mailto:nikpatil2123@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  "nikpatil2123@gmail.com"
                </a>
              </span>;
            </div>
          </div>

          <div>
            <div className="text-gray-500">{`// you can also see it on my Github page`}</div>
            <div className="break-words">
              <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">githubLink</span> ={" "}
              <span className="text-[#C3E88D]">
                <a href="https://github.com/nikpatil2123" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  "https://github.com/nikpatil2123"
                </a>
              </span>;
            </div>
          </div>

          <div>
            <div className="text-gray-500">{`// you can also see it on my Linkedin page`}</div>
            <div className="break-words">
              <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">linkedinLink</span> ={" "}
              <span className="text-[#C3E88D]">
                <a href="https://www.linkedin.com/in/idknik2123/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  "https://www.linkedin.com/in/idknik2123/"
                </a>
              </span>;
            </div>
          </div>
        </div>

        {/* <div className="mt-8">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-3 bg-[#4fd1c5] text-white rounded-lg hover:bg-[#3ab3a8] transition-colors font-mono text-sm md:text-base"
          >
            Hire Me
          </button>
        </div> */}

        {/* <HireMeForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        /> */}
      </div>
    </div>
  );
}