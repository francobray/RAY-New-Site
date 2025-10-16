import { Metadata } from 'next'
import Demo from '@/components/pages/Demo'
import { type Locale } from '@/lib/i18n'

interface DemoPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Free Demo - See RAY Restaurant Marketing Platform in Action | RAY',
    description: 'Book a free demo of RAY\'s restaurant marketing platform. See how we help restaurants increase revenue by 30%+ through local SEO, reviews, and customer engagement.',
    openGraph: {
      title: 'Free Demo - See RAY Restaurant Marketing Platform in Action | RAY',
      description: 'Book a free demo of RAY\'s restaurant marketing platform. See how we help restaurants increase revenue by 30%+ through local SEO, reviews, and customer engagement.',
      url: `https://www.rayapp.io/${locale}/demo`,
    },
    twitter: {
      title: 'Free Demo - See RAY Restaurant Marketing Platform in Action | RAY',
      description: 'Book a free demo of RAY\'s restaurant marketing platform. See how we help restaurants increase revenue by 30%+ through local SEO, reviews, and customer engagement.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/demo`,
    },
  }
}

export default function DemoPage({ params }: DemoPageProps) {
  return <Demo locale={params.locale} />
}
