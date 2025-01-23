import { FaChevronDown, FaChevronRight, FaFolder, FaFolderOpen } from "react-icons/fa"

export default function Sidebar({
  activeSection,
  setActiveSection,
  activeFile,
  setActiveFile,
  expandedFolders,
  setExpandedFolders,
}) {
  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }))
  }

  return (
    <div className="w-64 bg-[#011627] border-r border-[#1E2D3D] overflow-y-auto">
      <div className="p-4">
        {/* Personal Info Section */}
        <div className="mb-4">
          <button
            onClick={() => toggleFolder("personal-info")}
            className="flex items-center w-full text-left hover:text-[#4fd1c5]"
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
                className={`flex items-center cursor-pointer ${activeFile === "bio" ? "text-[#4fd1c5]" : ""}`}
                onClick={() => setActiveFile("bio")}
              >
                <span className="mr-2">📄</span>
                <span>bio</span>
              </div>
              <div
                className={`flex items-center cursor-pointer ${activeFile === "interests" ? "text-[#4fd1c5]" : ""}`}
                onClick={() => setActiveFile("interests")}
              >
                <span className="mr-2">📄</span>
                <span>interests</span>
              </div>
              <div>
                <button
                  onClick={() => toggleFolder("education")}
                  className="flex items-center w-full text-left hover:text-[#4fd1c5]"
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
                    <div className="flex items-center">
                      <span className="mr-2">🎓</span>
                      <span>high-school</span>
                    </div>
                    <div className="flex items-center">
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
            className="flex items-center w-full text-left hover:text-[#4fd1c5]"
          >
            {expandedFolders["projects"] ? <FaChevronDown className="mr-2" /> : <FaChevronRight className="mr-2" />}
            <span>projects</span>
          </button>

          {expandedFolders["projects"] && (
            <div className="ml-4 mt-2 space-y-2">
              <div className="flex items-center">
                <span className="mr-2">📁</span>
                <span>Product Inventory Management</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📁</span>
                <span>MERN CRUD Operations</span>
              </div>
              <div className="flex items-center">
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

