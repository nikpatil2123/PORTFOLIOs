import React from 'react'
import Hello from "./sections/Hello"
import AboutMe from "./sections/AboutMe"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

interface MainContentProps {
  activeSection: string
  activeFile: string
}

export default function MainContent({ activeSection, activeFile }: MainContentProps) {
  return (
    <div className="flex-1 overflow-auto w-full h-full md:h-auto px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {activeSection === "_hello" && <Hello />}
        {activeSection === "_about-me" && <AboutMe activeFile={activeFile} />}
        {activeSection === "_projects" && <Projects />}
        {activeSection === "_contact-me" && <Contact />}
      </div>
    </div>
  )
}