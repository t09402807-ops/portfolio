export default function About() {
  return (
    <section id="about" className="py-40 px-4 bg-gradient-to-r from-yellow-50 to-amber-50" style={{marginLeft: '100px', marginRight: '100px', marginTop: '10px'}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto" style={{marginLeft: '120px', marginRight: '120px'}}>
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Times New Roman, Times, serif', textAlign: 'justify'}}>
              As an AI Developer, I specialize in building intelligent systems and machine learning solutions that solve real-world problems. I work with cutting-edge AI technologies and frameworks to create innovative applications that leverage artificial intelligence and data science.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Times New Roman, Times, serif', textAlign: 'justify'}}>
              My expertise as a Web Developer encompasses full-stack development with modern technologies like React, Node.js, and cloud platforms. I create responsive, scalable web applications that deliver exceptional user experiences and meet complex business requirements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Times New Roman, Times, serif', textAlign: 'justify'}}>
              As a Mobile Application Developer, I build cross-platform mobile solutions using React Native and native technologies. I focus on creating intuitive, high-performance mobile apps that engage users and provide seamless functionality across iOS and Android platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
