import React from 'react'

const skills = [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git/GitHub",
  "API Integration",
  "Responsive Design",
  "Cross-Browser Compatibility",
]

export default function Skills() {
  return (
    <div className="prose prose-lg max-w-none px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-meta-blue mb-4 sm:mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-meta-light-blue text-meta-blue px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
