import { useState, useEffect } from "react"
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

export default function EditorArea({ activeSection, setActiveSection, openTabs, setOpenTabs }) {
  useEffect(() => {
    if (!openTabs.includes(activeSection)) {
      setOpenTabs((prev) => [...prev, activeSection])
    }
  }, [activeSection, openTabs, setOpenTabs])

  const closeTab = (tab) => {
    setOpenTabs((prev) => prev.filter((t) => t !== tab))
    if (activeSection === tab) {
      setActiveSection(openTabs.find((t) => t !== tab) || "home")
    }
  }

  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      <div className="flex bg-vscode-editorGroupHeader overflow-x-auto">
        {openTabs.map((tab) => {
          const tabInfo = tabs.find((t) => t.name === tab)
          return (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`flex items-center px-3 py-2 text-sm ${
                activeSection === tab
                  ? "bg-vscode-tab text-vscode-tabActiveText"
                  : "bg-vscode-editorGroupHeader text-vscode-tabInactiveText"
              }`}
            >
              <tabInfo.icon className="mr-2" size={14} />
              {tabInfo.label}
              <FaTimes
                className="ml-2 opacity-0 hover:opacity-100"
                size={14}
                onClick={(e) => {
                  e.stopPropagation()
                  closeTab(tab)
                }}
              />
            </button>
          )
        })}
      </div>
      <div className="flex-grow overflow-auto bg-vscode-editor p-4">
        {activeSection === "home" && <Home />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
      </div>
    </div>
  )
}

