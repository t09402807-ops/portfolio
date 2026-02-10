export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-40 px-4 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col items-center gap-3">
            <div className="text-3xl md:text-4xl">📧</div>
            <a href="mailto:danielkabe5250@gmail.com" className="text-lg md:text-xl font-semibold text-purple-600 hover:text-pink-600 transition">
              danielkabe5250@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-3xl md:text-4xl">📍</div>
            <p className="text-base md:text-lg text-gray-600">Ethiopia, Oromia, Robe</p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-8 md:mt-12">
            <div className="text-3xl md:text-4xl">💼</div>
            <p className="font-semibold text-gray-900 text-base md:text-lg mb-4">Follow Me</p>
            <div className="flex gap-6 md:gap-8 justify-center flex-wrap">
              <a href="#" className="text-amber-700 hover:text-amber-900 transition font-semibold text-base md:text-lg">TikTok</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition font-semibold text-base md:text-lg">Facebook</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition font-semibold text-base md:text-lg">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
