export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "TailwindCSS", "HTML/CSS", "Next.js"],
      color: "from-amber-500 to-yellow-600"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "MongoDB"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      category: "Tools & Others",
      skills: ["Git", "REST APIs"],
      color: "from-amber-500 to-yellow-600"
    }
  ]

  return (
    <section id="skills" className="py-40 px-4 bg-gradient-to-r from-yellow-50 to-amber-50" style={{marginLeft: '100px', marginRight: '100px', marginTop: '10px'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="text-center" style={{marginBottom: '160px', marginTop: '15px', marginLeft: '70px', marginRight: '70px'}}>
          <p className="text-2xl font-bold text-amber-700 mb-8">Currently Learning:</p>
          <p className="text-lg font-semibold text-gray-700">
            I'm always learning and exploring new technologies to stay updated with the latest trends in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1" style={{marginLeft: '160px'}}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-10 rounded-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-amber-700">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-semibold text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
