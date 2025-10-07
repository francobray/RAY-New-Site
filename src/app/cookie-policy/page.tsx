import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - RAY',
  description: "RAY's Cookie Policy - Learn about how we use cookies and similar technologies on our website.",
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://rayapp.io/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-ray-darkGray leading-relaxed mb-6">
              This Cookie Policy explains how RAY uses cookies and similar technologies when you visit our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">What Are Cookies</h2>
            <p className="text-ray-darkGray leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-ray-darkGray leading-relaxed mb-4">
              We use cookies to improve your experience on our website and to analyze how our site is used.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-ray-darkGray leading-relaxed">
              If you have questions about our use of cookies, please contact us at{' '}
              <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">
                support@rayapp.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
