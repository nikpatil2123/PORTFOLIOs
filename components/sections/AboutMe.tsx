import { FaCheckSquare, FaSquare } from "react-icons/fa";
import React from 'react';

const skills = [
	{ name: "HTML", known: true, category: "frontend" },
	{ name: "CSS", known: true, category: "frontend" },
	{ name: "JavaScript", known: true, category: "frontend" },
	{ name: "React", known: true, category: "frontend" },
	{ name: "SASS", known: false, category: "frontend" },
	{ name: "Vue.js", known: false, category: "frontend" },
	{ name: "Tailwind", known: true, category: "frontend" },
	{ name: "Bootstrap", known: true, category: "frontend" },
	{ name: "Git", known: true, category: "tools" },
	{ name: "Responsive Design", known: true, category: "frontend" },
	{ name: "Mobile-First", known: true, category: "frontend" },
	{ name: "Media Queries", known: true, category: "frontend" },
	{ name: "Flexbox", known: true, category: "frontend" },
	{ name: "Grid", known: true, category: "frontend" },
];

const tools = [
	{ name: "Windows", known: true },
	{ name: "Mac OS", known: true },
	{ name: "Linux", known: true },
	{ name: "Adobe Suite", known: true },
	{ name: "Figma", known: true },
];

const aboutContent = [
  { type: 'comment', content: '/**' },
  { type: 'heading', content: 'About Nikhil Patil' },
  { type: 'info', content: 'Welcome to my portfolio!' },
  { type: 'space', content: ' ' },
  { type: 'info', content: '[Diploma] Computer Science Engineering' },
  { type: 'info', content: 'Currently pursuing B.Tech in Computer Science Engineering', highlight: 'B.Tech in Computer Science Engineering' },
  // ...add other content lines following the same pattern
  { type: 'comment', content: '*/' }
];

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] p-3 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-3 sm:gap-8">
        
        {/* Code Editor Section */}
        <div className="bg-[#272727] rounded-lg shadow-xl overflow-hidden">
          {/* Editor Header */}
          <div className="bg-[#333333] p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm">AboutMe.tsx</span>
          </div>

          {/* Code Content */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
            <div className="grid gap-1 w-full">
              {aboutContent.map((line, i) => (
                <div key={i} className="flex group hover:bg-[#333333] transition-colors duration-150">
                  <span className="flex-shrink-0 w-8 text-gray-500 opacity-50">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    {line.type === 'comment' && (
                      <span className="text-gray-400">{line.content}</span>
                    )}
                    {line.type === 'heading' && (
                      <div className="flex items-baseline">
                        <span className="text-[#76c7c0]">* </span>
                        <span className="scroll-m-20 text-xl sm:text-3xl font-semibold tracking-tight">
                          {line.content}
                        </span>
                      </div>
                    )}
                    {line.type === 'info' && (
                      <span className="text-[#76c7c0] break-words whitespace-pre-wrap">
                        * {line.highlight ? (
                          <>
                            {line.content.split(line.highlight).map((part, index, array) => (
                              <React.Fragment key={index}>
                                {part}
                                {index < array.length - 1 && (
                                  <span className="text-[#A9D6E5] font-bold">{line.highlight}</span>
                                )}
                              </React.Fragment>
                            ))}
                          </>
                        ) : line.content}
                      </span>
                    )}
                    {line.type === 'space' && (
                      <span className="text-gray-400">*{line.content}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-3 sm:space-y-8">
          {/* Programming Skills */}
          <div className="bg-[#272727] p-3 sm:p-6 rounded-lg shadow-xl">
            <div className="text-gray-400 mb-3 sm:mb-6 text-xs sm:text-sm font-mono border-b border-gray-700 pb-2">
              {`// Programming languages & frameworks`}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-1.5 sm:p-2 hover:bg-[#333333] rounded transition-colors duration-200"
                >
                  {skill.known ? (
                    <FaCheckSquare className="text-[#76c7c0] min-w-[16px] sm:min-w-[20px] mr-2" />
                  ) : (
                    <FaSquare className="text-gray-600 min-w-[16px] sm:min-w-[20px] mr-2" />
                  )}
                  <span className="text-gray-200 text-xs sm:text-sm break-words">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="bg-[#272727] p-3 sm:p-6 rounded-lg shadow-xl">
            <div className="text-gray-400 mb-3 sm:mb-6 text-xs sm:text-sm font-mono border-b border-gray-700 pb-2">
              {`// Tools & Operating Systems`}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center p-1.5 sm:p-2 hover:bg-[#333333] rounded transition-colors duration-200"
                >
                  {tool.known ? (
                    <FaCheckSquare className="text-[#76c7c0] min-w-[16px] sm:min-w-[20px] mr-2" />
                  ) : (
                    <FaSquare className="text-gray-600 min-w-[16px] sm:min-w-[20px] mr-2" />
                  )}
                  <span className="text-gray-200 text-xs sm:text-sm break-words">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}