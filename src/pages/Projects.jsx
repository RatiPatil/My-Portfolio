import { SlideIn } from '../components/PageAnimations'

const projects = [
  {
    emoji: '📱',
    colorClass: 'bg-purple-50',
    borderColor: 'border-purple-200',
    tagClass: 'bg-purple-100 text-purple-700 border-purple-200',
    tags: ['Android', 'Java', 'ML Kit', 'Tesseract OCR'],
    title: 'LinguaBridge — Offline Translator',
    desc: 'An Android application for offline text translation supporting Sinhala and Nepali to English. Built for Sri Lanka and South Asian communities with no internet dependency using on-device ML models.',
    highlights: [
      'Google ML Kit on-device translation',
      'Tesseract OCR for image-to-text',
      'Fully offline — no internet needed',
    ],
  },
  {
    emoji: '🏢',
    colorClass: 'bg-violet-50',
    borderColor: 'border-violet-200',
    tagClass: 'bg-violet-100 text-violet-700 border-violet-200',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    title: 'Employee Management System',
    desc: 'A full-stack CRUD application using Spring Boot MVC architecture for managing employee records with role-based access, dynamic search, and reporting capabilities.',
    highlights: [
      'RESTful API design with Spring',
      'Hibernate ORM integration',
      'Pagination & search filtering',
    ],
  },
  {
    emoji: '📈',
    colorClass: 'bg-fuchsia-50',
    borderColor: 'border-fuchsia-200',
    tagClass: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200',
    tags: ['Python', 'ML', 'MLflow'],
    title: 'Churn Modelling with MLflow',
    desc: 'Leveraged machine learning algorithms to predict customer churn with MLflow experiment tracking, enabling data-driven business decisions.',
    highlights: [
      'Feature engineering pipeline',
      'MLflow experiment tracking',
      'Model comparison & selection',
    ],
  },
  {
    emoji: '💎',
    colorClass: 'bg-pink-50',
    borderColor: 'border-pink-200',
    tagClass: 'bg-pink-100 text-pink-700 border-pink-200',
    tags: ['Python', 'Regression', 'Scikit-Learn'],
    title: 'Diamond Price Prediction',
    desc: 'Built a regression model using Scikit-learn to predict diamond prices based on cut, clarity, carat, and other quality metrics with high accuracy.',
    highlights: [
      'Exploratory data analysis',
      'Multiple regression models tested',
      'Performance benchmarking',
    ],
  },
  {
    emoji: '🐍',
    colorClass: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    tagClass: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    title: 'Personal Finance Tracker',
    desc: 'A Python application to track income and expenses, categorise transactions by type, and visualize monthly spending patterns with charts.',
    highlights: [
      'Date-based aggregation & filtering',
      'Monthly trend charts',
      'CSV import / export',
    ],
  },
  {
    emoji: '🌐',
    colorClass: 'bg-purple-50',
    borderColor: 'border-purple-200',
    tagClass: 'bg-purple-100 text-purple-700 border-purple-200',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    title: 'Portfolio Website',
    desc: 'This portfolio — built in React with Tailwind CSS, featuring a purple/white theme, smooth animations, and fully responsive multi-page routing.',
    highlights: [
      'React Router multi-page SPA',
      'Tailwind CSS styling',
      'Responsive across all devices',
    ],
  },
]

export default function Projects() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 to-white py-16 mb-16">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">What I've Built</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Projects</h1>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            A curated showcase of my work in Android development, Java, Python, Data Science, and Web Development.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ emoji, colorClass, borderColor, tagClass, tags, title, desc, highlights }, i) => (
          <SlideIn key={title} direction="up" delay={i * 100}>
            <div
              className={`bg-white rounded-2xl border ${borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden group`}
            >
              {/* Icon header */}
              <div className={`${colorClass} px-6 py-8 flex items-center justify-center border-b ${borderColor} group-hover:bg-white transition-colors duration-500`}>
                <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">{emoji}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tags.map(t => (
                    <span key={t} className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${tagClass}`}>{t}</span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{desc}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 mt-auto">
                  {highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </div>
  )
}
