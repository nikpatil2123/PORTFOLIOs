import React from 'react'
import { FaFile, FaSearch, FaCode, FaEnvelope, FaBars } from "react-icons/fa"

interface ActivityBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  setSidebarOpen: (value: React.SetStateAction<boolean>) => void
}

const icons = [
  { name: "explorer", icon: FaFile, label: "Explorer" },
  { name: "search", icon: FaSearch, label: "Search" },
  { name: "projects", icon: FaCode, label: "Projects" },
  { name: "contact", icon: FaEnvelope, label: "Contact" },
]

export default function ActivityBar({ activeSection, setActiveSection, setSidebarOpen }: ActivityBarProps) {
  return (
    <div className="w-10 sm:w-12 md:w-14 lg:w-16 bg-vscode-activityBar flex flex-col items-center py-1 sm:py-2">
      <button
        onClick={() => setSidebarOpen((prev: boolean) => !prev)}
        className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 mb-2 sm:mb-4 text-vscode-icon hover:text-vscode-iconHover transition-colors duration-200"
        aria-label="Toggle Sidebar"
      >
        <FaBars className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>
      {icons.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setActiveSection(name)}
          className={`p-1.5 sm:p-2 md:p-2.5 lg:p-3 mb-1.5 sm:mb-2 relative group ${
            activeSection === name ? "text-vscode-iconActive" : "text-vscode-icon hover:text-vscode-iconHover"
          } transition-colors duration-200`}
          title={label}
          aria-label={label}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-vscode-tooltip text-vscode-tooltipText text-[10px] sm:text-xs md:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 hidden sm:block">
            {label}
          </span>
        </button>
      ))}
    </div>
  )