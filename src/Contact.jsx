import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-40 px-4 bg-gradient-to-r from-amber-50 to-yellow-50" style={{marginLeft: '100px', marginRight: '100px', marginTop: '10px'}}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-16" style={{marginTop: '40px'}}>
          <div className="space-y-8 text-center" style={{marginLeft: '40px'}}>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let's Connect</h3>
            <p className="text-gray-700 text-lg">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            <div className="space-y-8">
              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Email</p>
                  <a href="mailto:danielkabe5250@gmail.com" className="text-purple-600 hover:text-pink-600 transition font-semibold text-lg">
                    danielkabe5250@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Location</p>
                  <p className="text-gray-600 text-lg">Ethiopia, Oromia, Robe</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl">💼</div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Social</p>
                  <div className="flex gap-6 mt-3 justify-center">
                    <div className="text-center">
                      <a href="#" className="text-amber-700 hover:text-amber-900 transition font-semibold text-lg">TikTok</a>
                      <p className="text-gray-600 text-sm">Pappy Fun</p>
                    </div>
                    <div className="text-center">
                      <a href="#" className="text-amber-700 hover:text-amber-900 transition font-semibold text-lg">Facebook</a>
                      <p className="text-gray-600 text-sm">pappy oro</p>
                    </div>
                    <div className="text-center">
                      <a href="#" className="text-amber-700 hover:text-amber-900 transition font-semibold text-lg">Telegram</a>
                      <p className="text-gray-600 text-sm">Dani Lixa Shegar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-white border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 transition text-gray-900 text-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-white border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 transition text-gray-900 text-lg"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-6 py-3 bg-white border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 transition resize-none text-gray-900 text-lg"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
