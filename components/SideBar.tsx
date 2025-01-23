import React from 'react'
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  activeFile: string
  setActiveFile: (file: string) => void
  expandedFolders: Record<'personal-info' | 'projects' | 'education', boolean>
  setExpandedFolders: React.Dispatch<React.SetStateAction<Record<'personal-info' | 'projects' | 'education', boolean>>>
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({
  activeFile,
  setActiveFile,
  expandedFolders,
  setExpandedFolders,
  isMobile,
  isOpen,
  onClose,
}: SidebarProps) {
  const toggleFolder = (folder: 'personal-info' | 'projects' | 'education') => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }))
  }

  if (isMobile && !isOpen) {
    return null
  }

  const handleFileClick = (file: string) => {
    setActiveFile(file)
    if (isMobile && onClose) {
      onClose()
    }
  }

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50' : 'w-64 md:w-72 lg:w-80'} bg-[#011627] border-r border-[#1E2D3D] overflow-y-auto`}>
      {isMobile && (
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-white hover:text-[#4fd1c5] p-2">
            ✕
          </button>
        </div>
      )}
      <div className="p-4">
        {/* Personal Info Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleFolder("personal-info")}
            className="flex items-center w-full text-left hover:text-[#4fd1c5] p-2 rounded transition-colors"
          >
            {expandedFolders["personal-info"] ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronRight className="mr-2" />
            )}
            <span>personal-info</span>
          </button>

          {expandedFolders["personal-info"] && (
            <div className="ml-4 mt-2 space-y-2">
              <div
                className={`flex items-center cursor-pointer p-2 rounded transition-colors ${activeFile === "bio" ? "text-[#4fd1c5]" : "hover:text-[#4fd1c5]"}`}
                onClick={() => handleFileClick("bio")}
              >
                <span className="mr-2">📄</span>
                <span>bio</span>
              </div>
              <div
                className={`flex items-center cursor-pointer p-2 rounded transition-colors ${activeFile === "interests" ? "text-[#4fd1c5]" : "hover:text-[#4fd1c5]"}`}
                onClick={() => handleFileClick("interests")}
              >
                <span className="mr-2">📄</span>
                <span>interests</span>
              </div>
              <div>
                <button
                  onClick={() => toggleFolder("education")}
                  className="flex items-center w-full text-left hover:text-[#4fd1c5] p-2 rounded transition-colors"
                >
                  {expandedFolders["education"] ? (
                    <FaChevronDown className="mr-2" />
                  ) : (
                    <FaChevronRight className="mr-2" />
                  )}
                  <span>education</span>
                </button>

                {expandedFolders["education"] && (
                  <div className="ml-4 mt-2 space-y-2">
                    <div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors">
                      <span className="mr-2">🎓</span>
                      <span>high-school</span>
                    </div>
                    <div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors">
                      <span className="mr-2">🎓</span>
                      <span>university</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div>
          <button
            onClick={() => toggleFolder("projects")}
            className="flex items-center w-full text-left hover:text-[#4fd1c5] p-2 rounded transition-colors"
          >
            {expandedFolders["projects"] ? <FaChevronDown className="mr-2" /> : <FaChevronRight className="mr-2" />}
            <span>projects</span>
          </button>

          {expandedFolders["projects"] && (
            <div className="ml-4 mt-2 space-y-2">
              <div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors">
                <span className="mr-2">📁</span>
                <span>Product Inventory Management</span>
              </div>
              <div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors">
                <span className="mr-2">📁</span>
                <span>MERN CRUD Operations</span>
              </div>
              <div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors">
                <span className="mr-2">📁</span>
                <span>Gmail Whatsapp Notifier</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}