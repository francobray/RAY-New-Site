import { Metadata } from 'next'
import Contact from '@/components/pages/Contact'
import { type Locale } from '@/lib/i18n'

interface ContactPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Contact Us - Get Started with RAY Restaurant Marketing | RAY',
    description: 'Ready to increase your restaurant revenue by 30%+? Contact RAY today for a free consultation and see how our marketing platform can help your business grow.',
    openGraph: {
      title: 'Contact Us - Get Started with RAY Restaurant Marketing | RAY',
      description: 'Ready to increase your restaurant revenue by 30%+? Contact RAY today for a free consultation and see how our marketing platform can help your business grow.',
      url: `https://rayapp.io/${locale}/contact`,
    },
    twitter: {
      title: 'Contact Us - Get Started with RAY Restaurant Marketing | RAY',
      description: 'Ready to increase your restaurant revenue by 30%+? Contact RAY today for a free consultation and see how our marketing platform can help your business grow.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/contact`,
    },
  }
}

export default function ContactPage({ params }: ContactPageProps) {
  return <Contact locale={params.locale} />
}
