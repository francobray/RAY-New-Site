import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function JobNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-ray-dark-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-ray-dark-900 mb-4">
          Job Opening Not Found
        </h2>
        <p className="text-xl text-ray-dark-700 mb-8">
          The job opening you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/en/careers"
          className="inline-flex items-center gap-2 bg-ray-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to All Job Openings
        </Link>
      </div>
    </div>
  )
}

