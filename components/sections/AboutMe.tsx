import { FaCheckSquare, FaSquare } from "react-icons/fa";
import React from 'react';

const skills = [
	{ name: "HTML", known: true, category: "frontend" },
	{ name: "CSS", known: true, category: "frontend" },
	{ name: "JavaScript", known: true, category: "frontend" },
	{ name: "React", known: true, category: "frontend" },
	{ name: "SASS", known: false, category: "frontend" },
	{ name: "Vue.js", known: false, category: "frontend" },
	{ name: "Tailwind", known: true, category: "frontend" },
	{ name: "Bootstrap", known: true, category: "frontend" },
	{ name: "Git", known: true, category: "tools" },
	{ name: "Responsive Design", known: true, category: "frontend" },
	{ name: "Mobile-First", known: true, category: "frontend" },
	{ name: "Media Queries", known: true, category: "frontend" },
	{ name: "Flexbox", known: true, category: "frontend" },
	{ name: "Grid", known: true, category: "frontend" },
];

const tools = [
	{ name: "Windows", known: true },
	{ name: "Mac OS", known: true },
	{ name: "Linux", known: true },
	{ name: "Adobe Suite", known: true },
	{ name: "Figma", known: true },
];

export default function AboutMe() {
	return (
		<div className="min-h-screen bg-[#1a1a1a] p-8">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8">

				{/* Code Editor Section */}
				<div className="bg-[#272727] rounded-lg shadow-xl overflow-hidden">
					{/* Editor Header */}
					<div className="bg-[#333333] p-2 flex items-center">
						<div className="flex space-x-2">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<span className="ml-4 text-gray-400 text-sm">AboutMe.tsx</span>
					</div>

					{/* Code Content */}
					<div className="p-6 font-mono text-sm leading-relaxed">
						<div className="grid gap-1">
							{Array.from({ length: 28 }).map((_, i) => (
								<div key={i} className="flex group hover:bg-[#333333] transition-colors duration-150">
									<span className="w-8 text-gray-500 opacity-50">{i + 1}</span>
									{i === 0 && <span className="text-gray-400">/**</span>}
									{i === 1 && <span className="text-gray-400"> * About Nikhil Patil</span>}
									{i === 2 && <span className="text-[#76c7c0]"> * Welcome to my portfolio!</span>}
									{i === 3 && <span className="text-gray-400"> * </span>}
									{i === 4 && <span className="text-[#76c7c0]"> * [Diploma] Computer Science Engineering</span>}
									{i === 5 && <span className="text-[#76c7c0]"> * Currently pursuing B.Tech in Computer Science.</span>}
									{i === 6 && <span className="text-gray-400"> * </span>}
									{i === 7 && (
										<span className="text-[#76c7c0]">
											* I am a passionate frontend developer with an eye for detail and a strong
										</span>
									)}
									{i === 8 && (
										<span className="text-[#76c7c0]">
											* understanding of responsive design, user experience, and modern web technologies.
										</span>
									)}
									{i === 9 && <span className="text-gray-400"> * </span>}
									{i === 10 && (
										<span className="text-[#76c7c0]"> * I am currently learning Full Stack Development to expand my skill set.</span>
									)}
									{i === 11 && (
										<span className="text-[#76c7c0]">
											* Technologies I've learned: HTML, CSS, SCSS, JAVASCRIPT, REACT (JSX and Redux),
										</span>
									)}
									{i === 12 && <span className="text-[#76c7c0]"> * NODE, Tailwind CSS, and Bootstrap.</span>}
									{i === 13 && <span className="text-gray-400"> * </span>}
									{i === 14 && (
										<span className="text-[#76c7c0]">
											* My goal is to contribute to impactful projects, leveraging my skills to
										</span>
									)}
									{i === 15 && (
										<span className="text-[#76c7c0]"> * create intuitive, engaging, and efficient web applications.</span>
									)}
									{i === 16 && <span className="text-gray-400"> * </span>}
									{i === 17 && (
										<span className="text-[#76c7c0]"> * I believe in lifelong learning and continuously strive to improve myself.</span>
									)}
									{i === 18 && <span className="text-gray-400"> * </span>}
									{i === 19 && (
										<span className="text-[#76c7c0]">
											* My current internship as a frontend developer has provided valuable hands-on
										</span>
									)}
									{i === 20 && (
										<span className="text-[#76c7c0]"> * experience in React.js and Tailwind CSS, sharpening my development skills.</span>
									)}
									{i === 26 && <span className="text-gray-400"> */</span>}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Skills Section */}
				<div className="space-y-8">
					{/* Programming Skills */}
					<div className="bg-[#272727] p-6 rounded-lg shadow-xl">
						<div className="text-gray-400 mb-6 text-sm font-mono border-b border-gray-700 pb-2">
							{`// Programming languages & frameworks`}
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{skills.map((skill) => (
								<div
									key={skill.name}
									className="flex items-center p-2 hover:bg-[#333333] rounded transition-colors duration-200"
								>
									{skill.known ? (
										<FaCheckSquare className="text-[#76c7c0] mr-3 transition-transform duration-200 transform group-hover:scale-110" />
									) : (
										<FaSquare className="text-gray-600 mr-3" />
									)}
									<span className="text-gray-200">{skill.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Tools Section */}
					<div className="bg-[#272727] p-6 rounded-lg shadow-xl">
						<div className="text-gray-400 mb-6 text-sm font-mono border-b border-gray-700 pb-2">
							{`// Tools & Operating Systems`}
						</div>
						<div className="grid gap-3">
							{tools.map((tool) => (
								<div
									key={tool.name}
									className="flex items-center p-2 hover:bg-[#333333] rounded transition-colors duration-200"
								>
									{tool.known ? (
										<FaCheckSquare className="text-[#76c7c0] mr-3 transition-transform duration-200 transform group-hover:scale-110" />
									) : (
										<FaSquare className="text-gray-600 mr-3" />
									)}
									<span className="text-gray-200">{tool.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}