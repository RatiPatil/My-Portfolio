import { Link } from 'react-router-dom'

const navLinks = [
  ['/', 'Home'],
  ['/about', 'About Me'],
  ['/skills', 'Skills'],
  ['/projects', 'Projects'],
  ['/experience', 'Experience'],
  ['/contact', 'Contact'],
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-950 to-purple-900 text-white">
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-800">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-950/60">
                <img src="/rp-logo.png" alt="RP Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Ratikant<span className="text-purple-300">.</span>
              </span>
            </Link>
            <p className="text-purple-300 text-sm leading-relaxed mb-5 max-w-xs">
              MCA student with expertise in Java Full Stack Development and Data Analytics.
              Building impactful software solutions and data-driven applications.
            </p>
            {/* Social row */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ratikantpatil/"
                target="_blank" rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-purple-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
              </a>
              <a
                href="mailto:patilratikant8@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-purple-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ratikantpatil_18/"
                target="_blank" rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-purple-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-purple-200 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-purple-200">
                <span className="mt-0.5">📧</span>
                <a href="mailto:patilratikant8@gmail.com" className="hover:text-white transition-colors break-all">
                  patilratikant8@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-purple-200">
                <span className="mt-0.5">💼</span>
                <a href="https://www.linkedin.com/in/ratikantpatil/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/ratikantpatil
                </a>
              </li>
              <li className="flex items-start gap-2 text-purple-200">
                <span className="mt-0.5">📍</span>
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2 text-purple-200">
                <span className="mt-0.5">🎓</span>
                <span>MCA — Pursuing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-purple-500">
            © {new Date().getFullYear()} Ratikant Patil. All rights reserved.
          </p>
          <p className="text-xs text-purple-500">
            Java Full Stack Developer &amp; Data Analyst · Maharashtra, India
          </p>
        </div>

      </div>
    </footer>
  )
}
