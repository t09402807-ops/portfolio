import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
