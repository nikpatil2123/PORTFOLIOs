import { FaFile, FaSearch, FaCode, FaEnvelope, FaBars } from "react-icons/fa"

const icons = [
  { name: "explorer", icon: FaFile, label: "Explorer" },
  { name: "search", icon: FaSearch, label: "Search" },
  { name: "projects", icon: FaCode, label: "Projects" },
  { name: "contact", icon: FaEnvelope, label: "Contact" },
]

export default function ActivityBar({ activeSection, setActiveSection, setSidebarOpen }) {
  return (
    <div className="w-12 bg-vscode-activityBar flex flex-col items-center py-2">
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="p-2 mb-4 text-vscode-icon hover:text-vscode-iconHover"
      >
        <FaBars size={24} />
      </button>
      {icons.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setActiveSection(name)}
          className={`p-2 mb-2 relative group ${
            activeSection === name ? "text-vscode-iconActive" : "text-vscode-icon hover:text-vscode-iconHover"
          }`}
          title={label}
        >
          <Icon size={24} />
          <span className="absolute left-full ml-2 px-2 py-1 bg-vscode-tooltip text-vscode-tooltipText text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}

