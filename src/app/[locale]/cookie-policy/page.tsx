import { Metadata } from 'next'
import { type Locale } from '@/lib/i18n'

interface CookiePageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: CookiePageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Cookie Policy - RAY',
    description: "RAY's Cookie Policy - Learn about how we use cookies and similar technologies on our website.",
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/cookie-policy`,
    },
  }
}

export default function CookiePolicyPage({ params }: CookiePageProps) {
  const { locale } = params
  
  const cookieContent = locale === 'es' ? (
    <div className="prose prose-lg max-w-none">
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Esta Política de Cookies explica cómo RAY utiliza cookies y tecnologías similares cuando visita nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">¿Qué son las Cookies?</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Cómo Utilizamos las Cookies</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Utilizamos cookies para mejorar su experiencia en nuestro sitio web y analizar cómo se utiliza nuestro sitio.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">Contacto</h2>
      <p className="text-ray-darkGray leading-relaxed">
        Si tiene preguntas sobre nuestro uso de cookies, contáctenos en{' '}
        <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">
          support@rayapp.io
        </a>
      </p>
    </div>
  ) : (
    <div className="prose prose-lg max-w-none">
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Last Updated: June 1st, 2025.
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-6">
        This Cookie Policy explains how BotBit, Inc. (through its brand RAY) uses cookies and similar tracking technologies when you visit our website rayapp.io, mobile application, or platform (collectively, the "Service").
      </p>
      
      <p className="text-ray-darkGray leading-relaxed mb-8">
        By continuing to use our Service, you consent to the use of cookies as described in this policy. If you do not accept the use of cookies, please disable them using your browser settings or refrain from using the Service.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">1. What Are Cookies?</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. Cookies help websites remember information about your visit, such as your language preference, login status, or usage patterns.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">2. Types of Cookies We Use</h2>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-6 space-y-2">
        <li><strong>Strictly Necessary Cookies</strong> – Required for core functionality</li>
        <li><strong>Performance & Analytics Cookies</strong> – To improve site experience</li>
        <li><strong>Functional Cookies</strong> – To remember your preferences</li>
        <li><strong>Advertising & Targeting Cookies</strong> – To personalize ads</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">3. Third-Party Cookies</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        We may use tools like Google Analytics or Facebook Pixel to track performance and ads. These services have their own cookie policies.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">4. How to Manage Cookies</h2>
      <p className="text-ray-darkGray leading-relaxed mb-4">
        Use your browser's privacy settings to control cookies:
      </p>
      <ul className="list-disc list-inside text-ray-darkGray leading-relaxed mb-6 space-y-2">
        <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</li>
        <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</li>
        <li><strong>Safari:</strong> Preferences &gt; Privacy</li>
        <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">5. Changes to This Cookie Policy</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        We may update this policy periodically. Continued use of the site implies acceptance of changes.
      </p>
      
      <h2 className="text-2xl font-semibold text-ray-dark-900 mt-8 mb-4">6. Contact Us</h2>
      <p className="text-ray-darkGray leading-relaxed mb-6">
        For questions about this policy, email: <a href="mailto:support@rayapp.io" className="text-ray-blue hover:underline">support@rayapp.io</a>
      </p>
    </div>
  )
  
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-ray-dark-900 mb-8">
            {locale === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
          </h1>
          {cookieContent}
        </div>
      </div>
    </div>
  )
}
