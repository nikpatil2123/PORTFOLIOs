import React, { useState, useEffect } from 'react'

interface TopBarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function TopBar({ activeSection, setActiveSection }: TopBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="bg-[#011627] border-b border-[#1E2D3D] fixed w-full top-0 z-50">
      <div className="flex items-center justify-between h-[60px] px-4 max-w-7xl mx-auto">
        <div className="text-[#4fd1c5] text-lg sm:text-xl">nikhil-patil</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#607B96] hover:text-[#4fd1c5] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className={`md:flex ${
          isMenuOpen 
            ? 'absolute z-100 top-[60px] left-0 right-0 flex flex-col bg-[#011627] border-b border-[#1E2D3D] shadow-lg animate-fadeIn'
            : 'hidden'
        } md:relative md:top-0 md:border-none md:shadow-none md:animate-none`}>
          {["_hello", "_about-me", "_projects", "_contact-me"].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item)
                setIsMenuOpen(false)
              }}
              className={`px-6 py-4 hover:text-[#4fd1c5] border-b-2 transition-colors w-full md:w-auto text-left
                ${activeSection === item ? "text-[#4fd1c5] border-[#4fd1c5]" : "border-transparent text-[#607B96]"}
                hover:bg-[#1E2D3D] md:hover:bg-transparent transition-all duration-200
              `}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}