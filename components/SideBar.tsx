import React from 'react'
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

interface SidebarProps {
	activeSection: string
	setActiveSection: (section: string) => void
	activeFile: string
	setActiveFile: (file: string) => void
	expandedFolders: Record<'personal-info' | 'projects' | 'education', boolean>
	setExpandedFolders: React.Dispatch<React.SetStateAction<Record<'personal-info' | 'projects' | 'education', boolean>>>
	isMobile?: boolean
	isOpen?: boolean
	onClose?: () => void
}

export default function Sidebar({
	activeFile,
	setActiveFile,
	expandedFolders,
	setExpandedFolders,
	isMobile,
	isOpen,
	onClose,
}: SidebarProps) {

	const toggleFolder = (folder: 'personal-info' | 'projects' | 'education') => {
		setExpandedFolders((prev) => ({
			...prev,
			[folder]: !prev[folder],
		}))
	}

	if (isMobile && !isOpen) {
		return null
	}

	const handleFileClick = (file: string) => {
		setActiveFile(file)
		if (isMobile && onClose) {
			onClose()
		}
	}

	const handleProjectClick = (project: string) => {
		setActiveFile(project)
		if (isMobile && onClose) {
			onClose()
		}
	}

	return (
		<div className={`${isMobile ? 'fixed inset-0 z-50' : 'w-64 md:w-72 lg:w-80'} bg-[#011627] border-r border-[#1E2D3D] overflow-y-auto`}>
			{isMobile && (
				<div className="flex justify-end p-4">
					<button onClick={onClose} className="text-white hover:text-[#4fd1c5] p-2">
						✕
					</button>
				</div>
			)}
			<div className="p-4">


				{/* Projects Section */}
				<div>
					<button
						onClick={() => toggleFolder("projects")}
						className="flex items-center w-full text-left hover:text-[#4fd1c5] p-2 rounded transition-colors"
					>
						{expandedFolders["projects"] ? <FaChevronDown className="mr-2" /> : <FaChevronRight className="mr-2" />}
						<span>projects</span>
					</button>

					{expandedFolders["projects"] && (
						<div className="ml-4 mt-2 space-y-2">
							<div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors cursor-pointer" onClick={() => handleProjectClick('product-inventory-management')}>
								<a href='https://github.com/nikpatil2123/product-inventory-api'>
									<span className="mr-2">📁</span>
									<span>Product Inventory Management</span>
								</a>
							</div>
							<div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors cursor-pointer" onClick={() => handleProjectClick('mern-crud-operations')}>
								<a href='https://github.com/nikpatil2123/MERN-CRUD'>
								<span className="mr-2">📁</span>
								<span>MERN CRUD Operations</span>
							</a>
							</div>
							<div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors cursor-pointer" onClick={() => handleProjectClick('gmail-whatsapp-notifier')}>
								<a href='https://github.com/nikpatil2123/gmail-whatsapp-notifier'>
								<span className="mr-2">📁</span>
									<span>Gmail Whatsapp Notifier</span>
								</a>
							</div>
							<div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors cursor-pointer" onClick={() => handleProjectClick('nike-clone')}>
								<a href='https://github.com/nikpatil2123/Nike_CLone'>
								<span className="mr-2">📁</span>
									<span>Nike Clone</span>
								</a>
							</div>
							<div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors cursor-pointer" onClick={() => handleProjectClick('spin-wheel')}>
								<a href='https://github.com/nikpatil2123/Spin-wheel-Game'>
								<span className="mr-2">📁</span>
									<span>Spin Wheel</span>
								</a>
							</div>
							<div className="flex items-center p-2 rounded hover:text-[#4fd1c5] transition-colors cursor-pointer" onClick={() => handleProjectClick('lifeline-connect')}>
								<a href='https://github.com/nikpatil2123/Hackathon'>
								<span className="mr-2">📁</span>
									<span>LifeLine Connect</span>
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
