import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function StatusBar() {
  return (
    <div className="bg-vscode-statusBar text-vscode-statusBarText text-xs p-1 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span>© 2024 Nikhil Patil</span>
        <span>Frontend Developer | B.Tech CSE Student</span>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/nikpatil2123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-vscode-textLink"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/idknik2123/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-vscode-textLink"
        >
          <FaLinkedin size={16} />
        </a>
      </div>
    </div>
  )
}

