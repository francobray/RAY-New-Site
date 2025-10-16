import { Metadata } from 'next'
import { type Locale } from '@/lib/i18n'

interface TermsPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Terms of Service - RAY',
    description: "RAY's Terms of Service - Learn about the terms and conditions for using our restaurant marketing platform.",
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/terms-of-service`,
    },
  }
}

export default function TermsOfServicePage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
            Terms and Conditions of Use of the RAY Platform
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-ray-darkGray leading-relaxed mb-6">
              These Terms of Service govern your use of the RAY restaurant marketing platform. 
              By using our services, you agree to be bound by these terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-ray-darkGray leading-relaxed mb-4">
              By accessing and using RAY's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Use of Services</h2>
            <p className="text-ray-darkGray leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
            </p>
            
            <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-ray-darkGray leading-relaxed">
              For questions about these Terms of Service, contact us at{' '}
              <a href="mailto:legal@rayapp.io" className="text-ray-blue hover:underline">
                legal@rayapp.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
