interface TopBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function TopBar({ activeSection, setActiveSection }: TopBarProps) {
  return (
    <header className="bg-[#011627] border-b border-[#1E2D3D]">
      <div className="flex items-center justify-between h-[60px] px-4">
        <div className="text-[#4fd1c5]">nikhil-patil</div>
        <nav className="flex">
          {["_hello", "_about-me", "_projects", "_contact-me"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`px-6 py-4 hover:text-[#4fd1c5] border-b-2 transition-colors ${
                activeSection === item ? "text-[#4fd1c5] border-[#4fd1c5]" : "border-transparent text-[#607B96]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

