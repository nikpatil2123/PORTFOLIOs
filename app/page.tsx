"use client"

import { useState } from "react"
import { FaChevronDown, FaChevronRight, FaFolder, FaFolderOpen } from "react-icons/fa"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import TopBar from "@/components/TopBar"

export default function Home() {
  const [activeSection, setActiveSection] = useState("_hello")
  const [activeFile, setActiveFile] = useState("bio")
  const [expandedFolders, setExpandedFolders] = useState({
    "personal-info": true,
    projects: true,
    education: true,
  })

  return (
    <div className="min-h-screen bg-[#011627] text-[#607B96] flex flex-col">
      <TopBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex flex-1">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
          expandedFolders={expandedFolders}
          setExpandedFolders={setExpandedFolders}
        />
        <MainContent activeSection={activeSection} activeFile={activeFile} />
      </div>
      <footer className="bg-[#011627] border-t border-[#1E2D3D] p-4">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <div className="flex items-center space-x-4">
            <span>Find me in:</span>
            <a href="https://x.com/idknik04" className="hover:text-[#4fd1c5]">
              Twitter
            </a>
            <a href="https://www.instagram.com/ig___nikkkk/" className="hover:text-[#4fd1c5]">
              Instagram
            </a>
          </div>
          <a href="https://github.com/nikpatil2123" className="flex items-center hover:text-[#4fd1c5]">
            @nikpatil2123
          </a>
        </div>
      </footer>
    </div>
  )
}

