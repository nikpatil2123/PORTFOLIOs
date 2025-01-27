import { useEffect } from "react"
import { FaFileAlt, FaTimes } from "react-icons/fa"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

const tabs = [
  { name: "home", label: "home.tsx", icon: FaFileAlt },
  { name: "projects", label: "projects.tsx", icon: FaFileAlt },
  { name: "skills", label: "skills.tsx", icon: FaFileAlt },
  { name: "contact", label: "contact.tsx", icon: FaFileAlt },
]

import React from 'react'

interface EditorAreaProps {
  activeSection: string
  setActiveSection: (section: string) => void
  openTabs: string[]
  setOpenTabs: React.Dispatch<React.SetStateAction<string[]>>
}

export default function EditorArea({ activeSection, setActiveSection, openTabs, setOpenTabs }: EditorAreaProps) {
  useEffect(() => {
    if (!openTabs.includes(activeSection)) {
      setOpenTabs((prev: string[]) => [...prev, activeSection])
    }
  }, [activeSection, openTabs, setOpenTabs])

  const closeTab = (tab: string) => {
    setOpenTabs((prev: string[]) => prev.filter((t: string) => t !== tab))
    if (activeSection === tab) {
      setActiveSection(openTabs.find((t: string) => t !== tab) || "home")
    }
  }

  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      <div className="flex flex-wrap bg-vscode-editorGroupHeader overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {openTabs.map((tab: string) => {
          const tabInfo = tabs.find((t) => t.name === tab)
          if (!tabInfo) return null
          return (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`flex items-center px-2 py-1 text-xs min-w-[100px] max-w-[200px] truncate sm:min-w-[120px] sm:px-3 sm:py-2 sm:text-sm ${
                activeSection === tab
                  ? "bg-vscode-tab text-vscode-tabActiveText"
                  : "bg-vscode-editorGroupHeader text-vscode-tabInactiveText"
              }`}
            >
              <tabInfo.icon className="mr-1 sm:mr-2 flex-shrink-0" size={12} />
              <span className="hidden sm:inline truncate">{tabInfo.label}</span>
              <span className="inline sm:hidden truncate">{tabInfo.label.split('.')[0]}</span>
              <FaTimes
                className="ml-1 sm:ml-2 opacity-50 hover:opacity-100 sm:opacity-0 sm:hover:opacity-100 flex-shrink-0"
                size={12}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation()
                  closeTab(tab)
                }}
              />
            </button>
          )
        })}
      </div>
      <div className="flex-grow overflow-auto bg-vscode-editor p-2 sm:p-4">
        {activeSection === "home" && <Home />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  )
}