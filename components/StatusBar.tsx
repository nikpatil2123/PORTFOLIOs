import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function StatusBar() {
  return (
    <div className="bg-vscode-statusBar text-vscode-statusBarText text-xs p-1 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left w-full sm:w-auto">
        <span className="text-sm sm:text-xs">© 2024 Nikhil Patil</span>
        <span className="hidden sm:inline">|</span>
        <span className="text-sm sm:text-xs">Frontend Developer | B.Tech CSE Student</span>
      </div>
      <div className="flex items-center space-x-4 w-full sm:w-auto justify-center sm:justify-end">
        <a
          href="https://github.com/nikpatil2123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-vscode-textLink transition-colors duration-200"
          aria-label="GitHub Profile"
        >
          <FaGithub className="w-5 h-5 sm:w-[20px] sm:h-[20px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/idknik2123/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-vscode-textLink transition-colors duration-200"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="w-5 h-5 sm:w-[20px] sm:h-[20px]" />
        </a>
      </div>
    </div>
  )
}