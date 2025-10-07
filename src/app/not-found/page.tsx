import { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Page Not Found - RAY',
  description: "The page you're looking for doesn't exist. Return to RAY's homepage to explore our restaurant marketing solutions.",
  robots: 'noindex, nofollow',
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-ray-blue">404</h1>
          <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-ray-darkGray mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button variant="primary" className="w-full">
              Go Back Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="w-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
