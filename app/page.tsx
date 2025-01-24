"use client"

import { useState } from "react"
import Sidebar from "@/components/SideBar"
import MainContent from "@/components/MainContent"
import TopBar from "@/components/TopBar"

import React from 'react'


export default function Home() {
  const [activeSection, setActiveSection] = useState("_hello")
  const [activeFile, setActiveFile] = useState("bio")
  const [expandedFolders, setExpandedFolders] = useState({
    "personal-info": true,
    projects: true,
    education: true,
  })
  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#011627] text-[#607B96] flex flex-col">
      <TopBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {/* Main content area with responsive layout */}
      <div className="flex flex-col md:flex-row flex-1 mt-[64px]">
        {/* Sidebar with mobile toggle */}
        <div className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'}
          md:block 
          w-full 
          md:w-auto 
          border-b 
          md:border-b-0 
          border-[#1E2D3D]
        `}>
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            expandedFolders={expandedFolders}
            setExpandedFolders={setExpandedFolders}
          />
        </div>
        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <MainContent activeSection={activeSection} activeFile={activeFile} />
        </div>
      </div>
      {/* Responsive footer */}
      <footer className="bg-[#011627] border-t border-[#1E2D3D] p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-sm sm:text-base">Find me in:</span>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/idknik04" 
                className="hover:text-[#4fd1c5] transition-colors duration-200 text-sm sm:text-base"
              >
                Twitter
              </a>
              <a 
                href="https://www.instagram.com/ig___nikkkk/" 
                className="hover:text-[#4fd1c5] transition-colors duration-200 text-sm sm:text-base"
              >
                Instagram
              </a>
            </div>
          </div>
          <a 
            href="https://github.com/nikpatil2123" 
            className="flex items-center hover:text-[#4fd1c5] transition-colors duration-200 text-sm sm:text-base"
          >
            @nikpatil2123
          </a>
        </div>
      </footer>
    </div>
  )
}