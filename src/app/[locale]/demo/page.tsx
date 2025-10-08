import { Metadata } from 'next'
import Demo from '@/components/pages/Demo'
import { type Locale } from '@/constants/copy'

interface DemoPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: 'Free Demo - See RAY Restaurant Marketing Platform in Action | RAY',
  description: 'Book a free demo of RAY\'s restaurant marketing platform. See how we help restaurants increase revenue by 30%+ through local SEO, reviews, and customer engagement.',
  openGraph: {
    title: 'Free Demo - See RAY Restaurant Marketing Platform in Action | RAY',
    description: 'Book a free demo of RAY\'s restaurant marketing platform. See how we help restaurants increase revenue by 30%+ through local SEO, reviews, and customer engagement.',
    url: 'https://rayapp.io/demo',
  },
  twitter: {
    title: 'Free Demo - See RAY Restaurant Marketing Platform in Action | RAY',
    description: 'Book a free demo of RAY\'s restaurant marketing platform. See how we help restaurants increase revenue by 30%+ through local SEO, reviews, and customer engagement.',
  },
  alternates: {
    canonical: 'https://rayapp.io/demo',
  },
}

export default function DemoPage({ params }: DemoPageProps) {
  return <Demo locale={params.locale} />
}
