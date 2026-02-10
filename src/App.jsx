import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Stats from './Stats'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
