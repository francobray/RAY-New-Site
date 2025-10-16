import { Metadata } from 'next'
import { type Locale } from '@/lib/i18n'

interface PrivacyPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Privacy Policy - RAY',
    description: "RAY's Privacy Policy - Learn how we collect, use, and protect your personal information.",
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/privacy-policy`,
    },
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
            RAY Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-ray-darkGray leading-relaxed mb-6">
              At RAY, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our restaurant marketing platform.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-ray-darkGray leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-ray-darkGray leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-ray-darkGray leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@rayapp.io" className="text-ray-blue hover:underline">
                privacy@rayapp.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
