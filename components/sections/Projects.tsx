import Image from "next/image"
import Mrn from "./MERNCRUD.png"
import gw from "./gwnotifer.png"
import pim from "./PIM.png"
const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    description: "A clone of the Just Eat website built with React and Tailwind CSS.",
    image: pim,
    github: "https://github.com/nikpatil2123/product-inventory-api",
  },
  {
    id: 2,
    title: "MERN CRUD OPERATIONS",
    description: "Perform CRUD operations using MERN stack.",
    image: Mrn,
    github: "https://github.com/nikpatil2123/MERN-CRUD",
  },
  {
    id: 3,
    title: "Gmail Whatsapp Notifier",
    description: "Get your Gmail notifications on Whatsapp.",
    image: gw,
    github: "https://github.com/nikpatil2123/gmail-whatsapp-notifier",
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-[#011627] rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="mb-4">
              <span className="text-[#e99287]">Project {project.id}</span>
              <span className="text-gray-500 ml-2">// {project.title}</span>
            </div>
            <div className="mb-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md"
              />
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a2634] text-[#4fd1c5] px-4 py-2 rounded hover:bg-[#233141] transition-colors"
            >
              view-project-on-github
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

