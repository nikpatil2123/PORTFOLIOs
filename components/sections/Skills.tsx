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
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-meta-blue mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-meta-light-blue text-meta-blue px-3 py-1 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

