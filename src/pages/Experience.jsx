import { useEffect, useRef } from 'react'
import { SlideIn } from '../components/PageAnimations'

/* ─── Data ─────────────────────────────────────────────── */
const timeline = [
  {
    period: '2023 – Present',
    badge: 'Education',
    badgeColor: 'bg-purple-100 text-purple-700',
    dotColor: 'bg-purple-600',
    accentLine: 'border-purple-400',
    icon: '🎓',
    title: 'Master of Computer Applications (MCA)',
    org: 'SVERI\'s College of Engineering, Pandharpur (Autonomous)',
    university: 'Affiliated to Solapur University',
    desc: 'Pursuing MCA with a strong focus on Java Full Stack Development, Data Science, and enterprise application design. Actively engaged in real-world projects and technical research to sharpen software engineering skills.',
    tags: ['Java', 'Spring Boot', 'Data Science', 'Full Stack'],
  },
  {
    period: '2023',
    badge: 'Internship',
    badgeColor: 'bg-violet-100 text-violet-700',
    dotColor: 'bg-violet-500',
    accentLine: 'border-violet-400',
    icon: '💼',
    title: 'Data Analytics Virtual Internship',
    org: 'Accenture (Forage Virtual Job Simulation)',
    university: '',
    desc: "Completed Accenture's Data Analytics and Visualization job simulation — performed real-world EDA, data cleaning, feature analysis, and created professional stakeholder presentations and dashboards from large datasets.",
    tags: ['Python', 'Data Analytics', 'Power BI', 'Tableau'],
  },
  {
    period: '2020 – 2023',
    badge: 'Education',
    badgeColor: 'bg-fuchsia-100 text-fuchsia-700',
    dotColor: 'bg-fuchsia-500',
    accentLine: 'border-fuchsia-400',
    icon: '🎓',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Solapur University',
    university: 'Solapur, Maharashtra',
    desc: 'Built a strong foundation in computer science, C, C++, RDBMS, and introductory web development. Graduated with distinction with a keen interest in software development.',
    tags: ['C / C++', 'MySQL', 'HTML/CSS', 'OOP'],
  },
]

const certs = [
  { emoji: '📜', title: 'British Airways Data Science', sub: 'Data Science Job Simulation · Forage', color: 'bg-blue-50 border-blue-200' },
  { emoji: '📊', title: 'PwC Power BI Certification', sub: 'Power BI Job Simulation · Forage', color: 'bg-orange-50 border-orange-200' },
  { emoji: '🏢', title: 'Accenture Data Analytics', sub: 'Data Analytics & Visualization · Forage', color: 'bg-purple-50 border-purple-200' },
  { emoji: '📈', title: 'Tata Data Visualisation', sub: 'Empowering Business · Forage', color: 'bg-teal-50 border-teal-200' },
]

const certImages = [
  { src: '/images/Data Science-1.png', alt: 'British Airways Data Science Certificate' },
  { src: '/images/PowerBI Certificate-1.png', alt: 'PwC Power BI Certificate' },
  { src: '/images/certificate-accenture.png', alt: 'Accenture Certificate' },
  { src: '/images/Certificate-1.png', alt: 'Tata Certificate' },
]



export default function Experience() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">

      {/* ── Hero Header ── */}
      <div className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-violet-600 py-20 mb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-32 h-32 rounded-full border-2 border-white" />
          <div className="absolute bottom-4 right-12 w-20 h-20 rounded-full border-2 border-white" />
          <div className="absolute top-1/2 right-1/4 w-14 h-14 rounded-full border border-white" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          <SlideIn direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 border border-white/30">
              My Journey
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Education &amp; Experience
            </h1>
            <p className="text-purple-100 text-lg max-w-xl mx-auto">
              A story of continuous learning, building real solutions, and growing as a developer.
            </p>
          </SlideIn>
        </div>
      </div>

      {/* ── Curved divider ── */}
      <div className="bg-purple-600 h-12">
        <svg className="w-full" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0H1440V0C1440 0 1080 48 720 48C360 48 0 0 0 0Z" fill="white" />
        </svg>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 mb-20">
        <SlideIn direction="up">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">
            <span className="inline-block border-b-4 border-purple-400 pb-1">Career Timeline</span>
          </h2>
        </SlideIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-violet-300 to-fuchsia-300 rounded-full" />

          <div className="flex flex-col gap-10">
            {timeline.map(({ period, badge, badgeColor, dotColor, accentLine, icon, title, org, university, desc, tags }, i) => (
              <SlideIn key={title} direction="left" delay={i * 150}>
                <div className="relative flex gap-5 sm:gap-8">
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`mt-5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${dotColor} flex items-center justify-center text-white text-lg sm:text-xl shadow-lg z-10`}>
                      {icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-white rounded-2xl border-2 ${accentLine} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                    {/* Card header strip */}
                    <div className={`px-5 sm:px-6 py-3 flex flex-wrap items-center gap-3 bg-gradient-to-r from-purple-50 to-white border-b border-purple-100`}>
                      <span className="text-xs font-mono text-gray-400 font-medium">{period}</span>
                      <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${badgeColor}`}>{badge}</span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug">{title}</h3>
                      <p className="text-sm text-purple-700 font-semibold mb-0.5">🏛️ {org}</p>
                      {university && <p className="text-xs text-gray-400 mb-3 italic">{university}</p>}
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {tags.map(t => (
                          <span key={t} className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-semibold">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── Certifications header ── */}
      <div className="bg-gradient-to-r from-purple-50 to-violet-50 py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <SlideIn direction="up">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
              Certifications &amp; Achievements
            </h2>
            <p className="text-center text-gray-500 text-sm mb-10">Industry-recognized credentials from top organizations via Forage</p>
          </SlideIn>

          {/* Cert cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {certs.map(({ emoji, title, sub, color }, i) => (
              <SlideIn key={title} direction="up" delay={i * 80}>
                <div className={`${color} rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 p-5 text-center h-full`}>
                  <div className="text-4xl mb-3">{emoji}</div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 leading-snug">{title}</h4>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              </SlideIn>
            ))}
          </div>

          {/* Certificate images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certImages.map(({ src, alt }, i) => (
              <SlideIn key={src} direction="up" delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-36 sm:h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={e => { e.target.parentElement.parentElement.style.display = 'none' }}
                    />
                  </div>
                  <div className="bg-white px-3 py-2 border-t border-purple-50">
                    <p className="text-xs text-gray-500 font-medium leading-tight truncate">{alt}</p>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <SlideIn direction="up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-14 text-center">
          <div className="bg-purple-700 rounded-3xl px-8 py-10 text-white shadow-2xl shadow-purple-200">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-2xl font-extrabold mb-3">Ready to Contribute</h3>
            <p className="text-purple-200 text-sm max-w-md mx-auto mb-6">
              I'm actively looking for opportunities in Java Full Stack Development or Data Analytics.
              Let's build something great together!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-50 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Let's Connect →
            </a>
          </div>
        </div>
      </SlideIn>
    </div>
  )
}
