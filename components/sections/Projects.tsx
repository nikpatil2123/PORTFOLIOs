import React from "react"
import Image from "next/image"
import Mrn from "./MERNCRUD.png"
import gw from "./gwnotifer.png"
import pim from "./PIM.png"
import nike from "./nike.png"
import spin from "./spin.png"
// import p6 from "./bloodlink.png"
import p6 from "./connect.png"
const projects = [
	{
		id: 1,
		title: "Inventory Management System",
		description: "MERN app for inventory management.",
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
	{
		id: 4,
		title: "Nike CLone",
		description: "Nike website clone with custom design.",
		image: nike,
	},
	{
		id: 5,
		title: "Spin-wheel",
		description: "Interactive spin wheel with custom labels.",
		image: spin,
	},
	{
		id: 6,
		title: "LifeLine Connect",
		description: "Smart platform for seamless blood donation",
		image: p6,
	},
]

export default function Projects() {
	return (
		<div className="container mx-auto px-4 py-8 relative z-[-1.5px] ">
					{/* // <div className="container mx-auto px-4 py-8 relative z-0 "> */}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<div key={project.id} className="bg-[#011627] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
						<div className="p-4 sm:p-6">
							<div className="mb-4 flex items-center">
								<span className="text-[#e99287] text-sm sm:text-base font-semibold">Project {project.id}</span>
								<span className="text-gray-500 ml-2 text-sm sm:text-base">{`// ${project.title}`}</span>
							</div>
							<div className="mb-4 relative aspect-video z-0">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									layout="fill"
									objectFit="cover"
									className="rounded-md"
									priority
								/>
							</div>
							<p className="text-gray-300 mb-6 text-sm sm:text-base min-h-[3rem]">{project.description}</p>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block w-full text-center bg-[#1a2634] text-[#4fd1c5] px-4 py-2 text-sm sm:text-base rounded-md hover:bg-[#233141] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4fd1c5] focus:ring-opacity-50"
							>
								view-project-on-github
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
