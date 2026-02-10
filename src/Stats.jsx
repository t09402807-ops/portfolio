export default function Stats() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      color: "from-amber-500 to-yellow-600"
    },
    {
      number: "3+",
      label: "Years Experience",
      color: "from-yellow-500 to-amber-600"
    },
    {
      number: "80%",
      label: "CODING",
      color: "from-amber-500 to-yellow-600"
    },
    {
      number: "2+",
      label: "ETHIOCODERS AND E-SHE",
      color: "from-yellow-500 to-amber-600"
    }
  ]

  return (
    <section id="stats" className="py-40 px-4 bg-gradient-to-r from-amber-50 to-yellow-50" style={{marginLeft: '100px', marginRight: '100px'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          My Successes
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto px-8" style={{marginLeft: '120px', marginRight: '120px'}}>
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${stat.color} p-12 rounded-lg text-white shadow-lg hover:shadow-xl transition transform hover:scale-105 m-4`}>
              <div className="text-5xl font-bold mb-4 text-center">{stat.number}</div>
              <p className="font-semibold text-lg text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
