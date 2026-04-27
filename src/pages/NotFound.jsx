import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-purple-600">404</h1>
        <div className="bg-purple-600 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          Oops! You've drifted into space.
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
