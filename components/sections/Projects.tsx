import React from "react"
import Image from "next/image"
import Mrn from "./MERNCRUD.png"
import gw from "./gwnotifer.png"
import pim from "./PIM.png"

const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    description: "Full-featured product inventory management solution.",
    image: pim,
    github: "https://github.com/nikpatil2123/product-inventory-api",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "MERN CRUD Operations",
    description: "Complete CRUD functionality with MERN stack implementation.",
    image: Mrn,
    github: "https://github.com/nikpatil2123/MERN-CRUD",
    technologies: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    id: 3,
    title: "Gmail WhatsApp Notifier",
    description: "Cross-platform notification integration system.",
    image: gw,
    github: "https://github.com/nikpatil2123/gmail-whatsapp-notifier",
    technologies: ["Node.js", "WhatsApp API", "Gmail API"]
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8 relative z-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                       transform transition duration-300 
                       hover:scale-105 hover:shadow-2xl 
                       border border-gray-700"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <span className="text-blue-300 font-semibold">
                  Project {project.id}
                </span>
                <div className="flex space-x-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-700 text-green-300 
                                 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-blue-200">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 
                           bg-gray-700 text-green-400 
                           rounded-md 
                           hover:bg-gray-600 
                           transition-colors
                           font-medium uppercase tracking-wider"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}