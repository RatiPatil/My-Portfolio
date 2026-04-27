import { useEffect, useRef } from 'react'

const categories = [
  {
    icon: '☕',
    title: 'Java Full Stack',
    color: 'purple',
    skills: [
      { name: 'Java & OOP',       pct: 90 },
      { name: 'Spring Boot',      pct: 75 },
      { name: 'Hibernate / JPA',  pct: 70 },
      { name: 'REST APIs',        pct: 80 },
    ],
  },
  {
    icon: '🌐',
    title: 'Frontend',
    color: 'violet',
    skills: [
      { name: 'HTML5 & CSS3',      pct: 90 },
      { name: 'JavaScript (ES6+)', pct: 78 },
      { name: 'React (Basic)',     pct: 55 },
      { name: 'Bootstrap',        pct: 85 },
    ],
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    color: 'fuchsia',
    skills: [
      { name: 'Python & Pandas',       pct: 85 },
      { name: 'SQL & MySQL',           pct: 80 },
      { name: 'Power BI',              pct: 75 },
      { name: 'Excel & Visualization', pct: 82 },
    ],
  },
]

const tools = [
  'Git & GitHub', 'MySQL', 'NumPy', 'Maven',
  'Linux CLI', 'MVC Pattern', 'Agile / SDLC', 'C++',
]

function SkillBar({ name, pct }) {
  const barRef = useRef(null)

  useEffect(() => {
    if (!barRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        barRef.current.style.width = `${pct}%`
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(barRef.current.parentElement)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-purple-600 font-semibold">{pct}%</span>
      </div>
      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
        <div
          ref={barRef}
          style={{ width: '0%', transition: 'width 1.3s cubic-bezier(.4,0,.2,1)' }}
          className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-white py-16 mb-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">What I Know</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Technical Skills</h1>
        </div>
      </div>

      {/* Skill categories */}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {categories.map(({ icon, title, skills }) => (
          <div key={title} className="bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">{icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <div className="flex flex-col gap-4">
              {skills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="bg-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-6">Additional Tools &amp; Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(t => (
              <span key={t} className="px-4 py-2 bg-white/15 backdrop-blur border border-white/25 rounded-full text-sm font-medium hover:bg-white/25 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
