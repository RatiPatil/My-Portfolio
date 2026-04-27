import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlideIn } from '../components/PageAnimations'

const phrases = [
  'Full Stack Applications',
  'Data-Driven Insights',
  'RESTful APIs with Spring Boot',
  'Dashboards with Power BI',
]

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const [pi, setPi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const phrase = phrases[pi]
    if (!deleting) {
      if (ci <= phrase.length) {
        timeoutRef.current = setTimeout(() => {
          setTypedText(phrase.substring(0, ci))
          setCi(c => c + 1)
        }, 85)
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (ci > 0) {
        timeoutRef.current = setTimeout(() => {
          setTypedText(phrase.substring(0, ci - 1))
          setCi(c => c - 1)
        }, 45)
      } else {
        setDeleting(false)
        setPi(p => (p + 1) % phrases.length)
      }
    }
    return () => clearTimeout(timeoutRef.current)
  }, [ci, deleting, pi])

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-20">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-200 opacity-40 blur-3xl glow-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-300 opacity-30 blur-3xl glow-pulse" style={{ animationDelay: '2.5s' }} />

        <div className="relative max-w-[1440px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <SlideIn direction="left" delay={100}>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                AVAILABLE FOR HIRE
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Digital</span><br /> 
                Experiences<span className="text-purple-600">.</span>
              </h1>
              
              <p className="mt-8 text-lg text-gray-500 font-mono">
                Working on <span className="text-purple-600 font-semibold">{typedText}</span><span className="typed-cursor text-purple-400">|</span>
              </p>

              <p className="mt-4 text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                I'm <span className="font-bold text-gray-900">Ratikant Patil</span>, an MCA student specialized in Java Full Stack Development and Data Analytics. I build professional, high-performance solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link to="/projects" className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold shadow-xl shadow-purple-200 hover:bg-purple-700 hover:shadow-purple-300 transition-all hover:-translate-y-1 text-center">
                  View My Work
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all hover:-translate-y-1 text-center">
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-10 justify-center lg:justify-start">
                <a href="https://www.linkedin.com/in/ratikantpatil/" target="_blank" rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white border border-purple-100 text-purple-600 flex items-center justify-center hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm"
                  aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                </a>
                <a href="mailto:patilratikant8@gmail.com"
                  className="w-12 h-12 rounded-2xl bg-white border border-purple-100 text-purple-600 flex items-center justify-center hover:border-purple-500 hover:bg-purple-50 transition-all shadow-sm"
                  aria-label="Email">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </SlideIn>

          {/* Avatar card */}
          <SlideIn direction="right" delay={200} className="flex justify-center lg:justify-end">
            <div className="relative float-anim">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-purple-200 group">
                <img src="/images/profile_blazer.png" alt="Ratikant Patil" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              </div>
              {/* Badge chips */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-3 shadow-xl border border-purple-100 text-sm font-bold text-purple-700 animate-bounce" style={{ animationDuration: '3s' }}>
                ✨ MCA Pursuing
              </div>
              <div className="absolute top-12 -right-10 bg-white rounded-2xl px-5 py-3 shadow-xl border border-purple-100 text-sm font-bold text-purple-700 flex items-center gap-2">
                💻 Full Stack Dev
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Scroll indicator */}
        <a href="#next" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-purple-400 text-xs gap-1 animate-bounce">
          <span className="font-bold tracking-widest uppercase text-[10px]">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Quick stats */}
      <section id="next" className="bg-white py-20 border-y border-purple-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '6+', l: 'Projects Built', icon: '🚀' },
              { n: '10+', l: 'Tech Skills', icon: '🛠️' },
              { n: '3+', l: 'Certifications', icon: '📜' },
              { n: '2+', l: 'Years Learning', icon: '🎓' },
            ].map(({ n, l, icon }) => (
              <div key={l} className="group p-8 rounded-[2rem] hover:bg-purple-50 transition-all duration-300 border border-transparent hover:border-purple-100">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-4xl font-black text-gray-900 mb-1 group-hover:text-purple-600 transition-colors uppercase">{n}</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="bg-purple-700 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
        
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: '⚡', title: 'Java Full Stack', desc: 'Spring Boot · MVC · REST APIs · Hibernate' },
            { icon: '📊', title: 'Data Analytics',  desc: 'Python · Pandas · SQL · Power BI · Excel'  },
            { icon: '🌐', title: 'Web Development', desc: 'HTML5 · CSS3 · JavaScript · React (Basic)'  },
          ].map(({ icon, title, desc }, i) => (
            <SlideIn key={title} direction="up" delay={i * 100}>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed opacity-80">{desc}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </section>
    </div>
  )
}
