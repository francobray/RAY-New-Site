import React from 'react'
import { Helmet } from 'react-helmet-async'

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - RAY</title>
        <meta name="description" content="RAY's Cookie Policy - Learn about how we use cookies and similar technologies on our website." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://rayapp.io/cookie-policy" />
      </Helmet>
      
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-ray-dark-700">
              <p className="text-ray-darkGray mb-6">
                <strong>Last Updated: June 1st, 2025</strong>
              </p>
              
              <p className="mb-6 leading-relaxed">
                This Cookie Policy explains how BotBit, Inc. (through its brand RAY) uses cookies and similar tracking technologies when you visit our website rayapp.io, mobile application, or platform (collectively, the "Service").
              </p>
              
              <p className="mb-8 leading-relaxed">
                By continuing to use our Service, you consent to the use of cookies as described in this policy. If you do not accept the use of cookies, please disable them using your browser settings or refrain from using the Service.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                1. What Are Cookies?
              </h2>
              <p className="mb-6 leading-relaxed">
                Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. Cookies help websites remember information about your visit, such as your language preference, login status, or usage patterns.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Strictly Necessary Cookies</strong> – Required for core functionality</li>
                <li><strong>Performance & Analytics Cookies</strong> – To improve site experience</li>
                <li><strong>Functional Cookies</strong> – To remember your preferences</li>
                <li><strong>Advertising & Targeting Cookies</strong> – To personalize ads</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                3. Third-Party Cookies
              </h2>
              <p className="mb-6 leading-relaxed">
                We may use tools like Google Analytics or Facebook Pixel to track performance and ads. These services have their own cookie policies.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                4. How to Manage Cookies
              </h2>
              <p className="mb-4 leading-relaxed">
                Use your browser's privacy settings to control cookies:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
                <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                5. Changes to This Cookie Policy
              </h2>
              <p className="mb-6 leading-relaxed">
                We may update this policy periodically. Continued use of the site implies acceptance of changes.
              </p>
              
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4 mt-8">
                6. Contact Us
              </h2>
              <p className="leading-relaxed">
                For questions about this policy, email:{' '}
                <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">
                  support@rayapp.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookiePolicy