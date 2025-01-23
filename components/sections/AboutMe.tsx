import { FaCheckSquare, FaSquare } from "react-icons/fa"

const skills = [
  { name: "HTML", known: true },
  { name: "CSS", known: true },
  { name: "Javascript", known: true },
  { name: "React", known: true },
  { name: "SASS", known: false },
  { name: "Vue.js", known: false },
  { name: "Tailwind", known: true },
  { name: "Bootstrap", known: true },
  { name: "Git", known: true },
]

const tools = [
  { name: "Windows", known: true },
  { name: "Mac OS", known: true },
  { name: "Linux", known: true },
  { name: "Adobe Suite", known: true },
  { name: "Figma", known: true },
]

export default function AboutMe() {
  return (
    <div className="grid grid-cols-[1fr_300px] gap-4 p-4">
      <div className="bg-[#011627] p-4 font-mono">
        <div className="grid gap-1">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="flex">
              <span className="w-8 text-gray-500">{i + 1}</span>
              {i === 0 && <span className="text-gray-400">/**</span>}
    {i === 1 && <span className="text-gray-400"> * About Nikhil Patil</span>}
    {i === 2 && <span className="text-[#4fd1c5]"> * Welcome to my portfolio!</span>}
    {i === 3 && <span className="text-gray-400"> * </span>}
    {i === 4 && <span> * [Diploma] Computer Science Engineering</span>}
    {i === 5 && <span> * Currently pursuing B.Tech in Computer Science.</span>}
    {i === 6 && <span className="text-gray-400"> * </span>}
    {i === 7 && (
      <span>
        * I am a passionate frontend developer with an eye for detail and a strong
      </span>
    )}
    {i === 8 && (
      <span>
        * understanding of responsive design, user experience, and modern web technologies.
      </span>
    )}
    {i === 9 && <span className="text-gray-400"> * </span>}
    {i === 10 && (
      <span> * I am currently learning Full Stack Development to expand my skill set.</span>
    )}
    {i === 11 && (
      <span>
        * Technologies I've learned: HTML, CSS, SCSS, JAVASCRIPT, REACT (JSX and Redux),
      </span>
    )}
    {i === 12 && <span> * NODE, Tailwind CSS, and Bootstrap.</span>}
    {i === 13 && <span className="text-gray-400"> * </span>}
    {i === 14 && (
      <span>
        * My goal is to contribute to impactful projects, leveraging my skills to
      </span>
    )}
    {i === 15 && (
      <span> * create intuitive, engaging, and efficient web applications.</span>
    )}
    {i === 16 && <span className="text-gray-400"> * </span>}
    {i === 17 && (
      <span> * I believe in lifelong learning and continuously strive to improve myself.</span>
    )}
    {i === 18 && <span className="text-gray-400"> * </span>}
    {i === 19 && (
      <span>
        * My current internship as a frontend developer has provided valuable hands-on
      </span>
    )}
    {i === 20 && (
      <span> * experience in React.js and Tailwind CSS, sharpening my development skills.</span>
    )}
    {i === 26 && <span className="text-gray-400"> */</span>}
				  
              {i === 26 && <span className="text-gray-400">*/</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <div className="text-gray-400 mb-4">// Programming languages I have learned or am learning</div>
          <div className="grid gap-2">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center">
                {skill.known ? (
                  <FaCheckSquare className="text-[#4fd1c5] mr-2" />
                ) : (
                  <FaSquare className="text-gray-600 mr-2" />
                )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-gray-400 mb-4">// Operating System and other programs</div>
          <div className="grid gap-2">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center">
                {tool.known ? (
                  <FaCheckSquare className="text-[#4fd1c5] mr-2" />
                ) : (
                  <FaSquare className="text-gray-600 mr-2" />
                )}
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}