import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-white py-16 mb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">Let's Talk</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Get In Touch</h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Actively seeking roles in Java Full Stack Development &amp; Data Analytics. Let's connect!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Info */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {[
            {
              emoji: '📧',
              title: 'Email',
              content: 'patilratikant8@gmail.com',
              href: 'mailto:patilratikant8@gmail.com',
            },
            {
              emoji: '💼',
              title: 'LinkedIn',
              content: 'linkedin.com/in/ratikantpatil',
              href: 'https://www.linkedin.com/in/ratikantpatil/',
            },
            {
              emoji: '📍',
              title: 'Location',
              content: 'Maharashtra, India 🇮🇳',
              href: null,
            },
            {
              emoji: '💬',
              title: 'Availability',
              content: 'Open to Full-time & Internship Roles',
              href: null,
            },
          ].map(({ emoji, title, content, href }) => (
            <div key={title} className="flex items-start gap-4 bg-purple-50 rounded-2xl p-5 border border-purple-100 hover:border-purple-300 transition-all">
              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl flex-shrink-0">{emoji}</div>
              <div>
                <div className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-0.5">{title}</div>
                {href
                  ? <a href={href} target="_blank" rel="noreferrer" className="text-sm text-gray-700 hover:text-purple-600 transition-colors font-medium">{content}</a>
                  : <span className="text-sm text-gray-700 font-medium">{content}</span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Name *</label>
              <input
                name="name" value={form.name} onChange={handleChange} required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email *</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Subject</label>
            <input
              name="subject" value={form.subject} onChange={handleChange}
              placeholder="What's this about?"
              className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Message *</label>
            <textarea
              name="message" value={form.message} onChange={handleChange} required rows={6}
              placeholder="Tell me about the role or project..."
              className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all ${
              status === 'sent'
                ? 'bg-green-500 cursor-default'
                : status === 'sending'
                ? 'bg-purple-400 cursor-wait'
                : 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5'
            }`}
          >
            {status === 'idle'    && 'Send Message →'}
            {status === 'sending' && 'Sending…'}
            {status === 'sent'    && '✅ Message Sent!'}
          </button>
          
          {status === 'sent' && (
            <div className="p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 text-sm font-medium flex items-center gap-3 animate-fade-in">
              <span className="text-xl">✨</span>
              Thank you! Your message has been sent successfully. I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
