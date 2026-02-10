export default function Education() {
  const education = [
    {
      number: "Abebe Kolu",
      label: "Elementary School",
      color: "from-amber-500 to-yellow-600"
    },
    {
      number: "Regasa Bulto",
      label: "High School and Preparatory",
      color: "from-yellow-500 to-amber-600"
    },
    {
      number: "Madda Walabu",
      label: "University - 3rd Year, Computer Science",
      color: "from-amber-500 to-yellow-600"
    }
  ]

  return (
    <section id="education" className="py-40 px-4 bg-gradient-to-r from-yellow-50 to-amber-50 mb-40" style={{marginLeft: '100px', marginRight: '100px', marginTop: '10px'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          My background information
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto px-8" style={{marginLeft: '120px', marginRight: '120px'}}>
          {education.map((edu, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${edu.color} p-12 rounded-lg text-white shadow-lg hover:shadow-xl transition transform hover:scale-105 m-4`}>
              <div className="text-4xl font-bold mb-4 text-center">{edu.number}</div>
              <p className="font-semibold text-lg text-center">{edu.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
