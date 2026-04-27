import { Link } from 'react-router-dom'
import { SlideIn } from '../components/PageAnimations'

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <SlideIn direction="up">
        <div className="max-w-[1440px] mx-auto px-6 py-12 text-center border-b border-purple-50">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">Get To Know Me</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">About Me</h1>
        </div>
      </SlideIn>

      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        {/* Image column */}
        <SlideIn direction="left" className="lg:col-span-2">
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-72 sm:w-80">
              <div className="rounded-[3rem] overflow-hidden border-8 border-purple-100 shadow-2xl shadow-purple-50 group">
                <img src="/images/profile_blazer.png" alt="Ratikant Patil" className="w-full h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white rounded-2xl px-5 py-2.5 text-sm font-bold shadow-xl border-2 border-white">
                🎓 MCA Student
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-center px-6 py-3 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm">
                <div className="text-2xl font-black text-purple-700">6+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Projects</div>
              </div>
              <div className="text-center px-6 py-3 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm">
                <div className="text-2xl font-black text-purple-700">MCA</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Pursuing</div>
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Text column */}
        <SlideIn direction="right" className="lg:col-span-3">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-gray-900 leading-tight">
                A Passionate <span className="text-purple-600">Developer</span> &amp; <span className="text-purple-600">Analyst</span>.
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                I am currently pursuing my Master of Computer Applications (MCA) at <strong>SVERI's College of Engineering, Pandharpur</strong>. My journey is defined by a curiosity to solve problems using technology and data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in building robust backend systems with <strong>Java and Spring Boot</strong>, while also diving deep into data using <strong>Python and Power BI</strong> to extract actionable insights.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Java & Spring Boot', 'Python', 'SQL & MySQL', 'Power BI', 'React', 'MVC Architecture'].map(t => (
                <div key={t} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 group hover:bg-purple-50 hover:border-purple-200 transition-all">
                  <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-bold text-gray-700">{t}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/resume/Ratikant_Patil_Resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-200 transition-all hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download My Resume
              </a>
            </div>
          </div>
        </SlideIn>
      </div>

      {/* Quick Info Grid */}
      <div className="max-w-[1440px] mx-auto px-6 py-20 border-t border-purple-50">
        <h2 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest">Core Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🎓', label: 'Education', value: 'Master of Computer Applications' },
            { icon: '📍', label: 'Location', value: 'Maharashtra, India' },
            { icon: '💼', label: 'Goal', value: 'Full Stack / Data Analyst' },
            { icon: '📧', label: 'Email', value: 'patilratikant8@gmail.com' },
          ].map(({ icon, label, value }, i) => (
            <SlideIn key={label} direction="up" delay={i * 100}>
              <div className="bg-white rounded-[2rem] p-8 border border-purple-50 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all text-center h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">{icon}</div>
                <div className="text-[10px] font-black text-purple-500 uppercase tracking-[0.2em] mb-2">{label}</div>
                <div className="text-sm text-gray-900 font-bold leading-tight">{value}</div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </div>
  )
}
