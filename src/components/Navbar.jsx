import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About'      },
  { to: '/skills',     label: 'Skills'     },
  { to: '/projects',   label: 'Projects'   },
  { to: '/experience', label: 'Experience' },
  { to: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location                = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-lg shadow-purple-100/60' : 'bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 py-3.5 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-purple-700 flex items-center justify-center shadow-md shadow-purple-300/50 overflow-hidden group-hover:shadow-purple-400/60 transition-all">
            <img src="/rp-logo.png" alt="RP Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-purple-800">
            Ratikant<span className="text-purple-400">.</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/resume/Ratikant_Patil_Resume.pdf"
            download
            className="ml-4 px-5 py-2.5 bg-purple-600 text-white rounded-full text-sm font-semibold
                       hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-purple-50"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-purple-700 transition-all duration-200 ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-purple-700 my-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-purple-700 transition-all duration-200 ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`lg:hidden bg-white border-t border-purple-100 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 py-4' : 'max-h-0'}`}>
        <div className="flex flex-col gap-1 px-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-purple-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href="/resume/Ratikant_Patil_Resume.pdf" download className="mt-2 px-4 py-3 bg-purple-600 text-white rounded-xl text-sm font-semibold text-center">
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}
