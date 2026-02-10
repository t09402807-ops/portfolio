export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white border-t-4 border-blue-950 py-12 px-4 shadow-lg" style={{marginLeft: '100px', marginRight: '100px'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">
              DANIEL KABE
            </h3>
            <p className="text-blue-100">
              Building beautiful web experiences with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#about" className="hover:text-white transition font-semibold">About</a></li>
              <li><a href="#education" className="hover:text-white transition font-semibold">My background</a></li>
              <li><a href="#projects" className="hover:text-white transition font-semibold">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition font-semibold">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition font-semibold">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
            <div className="flex gap-4">
              <div className="text-center">
                <a href="#" className="text-blue-200 hover:text-white transition font-semibold transform hover:scale-125">TikTok</a>
                <p className="text-blue-100 text-sm">Pappy Fun</p>
              </div>
              <div className="text-center">
                <a href="#" className="text-blue-200 hover:text-white transition font-semibold transform hover:scale-125">Facebook</a>
                <p className="text-blue-100 text-sm">pappy oro</p>
              </div>
              <div className="text-center">
                <a href="#" className="text-blue-200 hover:text-white transition font-semibold transform hover:scale-125">Telegram</a>
                <p className="text-blue-100 text-sm">Dani Lixa Shegar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
          <p className="font-semibold">&copy; {currentYear} DANIEL KABE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
