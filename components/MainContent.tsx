import Hello from "./sections/Hello"
import AboutMe from "./sections/AboutMe"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

export default function MainContent({ activeSection, activeFile }) {
  return (
    <div className="flex-1 overflow-auto">
      {activeSection === "_hello" && <Hello />}
      {activeSection === "_about-me" && <AboutMe activeFile={activeFile} />}
      {activeSection === "_projects" && <Projects />}
      {activeSection === "_contact-me" && <Contact />}
    </div>
  )
}

