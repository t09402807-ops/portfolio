import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full z-50 shadow-lg" style={{marginLeft: '100px', marginRight: '100px'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-amber-700 drop-shadow-lg">
              DANIEL KABE
            </a>
          </div>

          <div className="hidden md:flex space-x-10 justify-center flex-1">
            <a href="#about" className="text-amber-700 hover:text-yellow-700 transition font-medium text-lg">About</a>
            <a href="#education" className="text-amber-700 hover:text-yellow-700 transition font-medium text-lg">My background</a>
            <a href="#projects" className="text-amber-700 hover:text-yellow-700 transition font-medium text-lg">Projects</a>
            <a href="#skills" className="text-amber-700 hover:text-yellow-700 transition font-medium text-lg">Skills</a>
            <a href="#contact" className="text-amber-700 hover:text-yellow-700 transition font-medium text-lg">Contact</a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-amber-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-yellow-50">
            <a href="#about" className="block text-amber-700 hover:text-yellow-700 transition">About</a>
            <a href="#education" className="block text-amber-700 hover:text-yellow-700 transition">My background</a>
            <a href="#projects" className="block text-amber-700 hover:text-yellow-700 transition">Projects</a>
            <a href="#skills" className="block text-amber-700 hover:text-yellow-700 transition">Skills</a>
            <a href="#contact" className="block text-amber-700 hover:text-yellow-700 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
