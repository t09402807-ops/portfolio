export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Fertilizer Management System",
      description: "A comprehensive system for managing fertilizer inventory, distribution, and tracking with real-time analytics",
      image: "🌾",
      tags: ["React", "Node.js", "MongoDB", "Dashboard"],
      link: "#",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing projects and professional experience",
      image: "💼",
      tags: ["React", "TailwindCSS", "Responsive Design"],
      link: "#",
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Cafeteria Management System",
      description: "Complete cafeteria management solution with menu planning, ordering, and billing features",
      image: "🍽️",
      tags: ["React", "Express", "PostgreSQL"],
      link: "#",
      color: "from-pink-400 to-pink-600"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team coordination features",
      image: "✅",
      tags: ["React", "Firebase", "Real-time"],
      link: "#",
      color: "from-indigo-400 to-indigo-600"
    }
  ]

  return (
    <section id="projects" className="py-40 px-4 bg-gradient-to-r from-amber-50 to-yellow-50" style={{marginLeft: '100px', marginRight: '100px', marginTop: '10px'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto" style={{marginRight: '160px', marginLeft: '160px'}}>
          {projects.map((project) => (
            <div key={project.id} className={`bg-gradient-to-br ${project.color} p-8 rounded-lg text-white shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
              <div className="text-4xl mb-4 text-center">{project.image}</div>
              <h3 className="text-base font-bold mb-2 text-center">{project.title}</h3>
              <p className="text-xs text-white text-center leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3 justify-center">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={`px-2 py-0.5 bg-white bg-opacity-20 text-white text-xs font-semibold rounded`}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} className={`inline-block w-full text-center bg-white bg-opacity-20 text-white px-3 py-1 font-semibold transition transform hover:scale-105 text-xs rounded`}>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
