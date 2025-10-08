import { Metadata } from 'next'
import Loyalty from '@/components/pages/product/Loyalty'
import { type Locale } from '@/constants/copy'

interface LoyaltyPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: 'Customer Loyalty Program for Restaurants | RAY',
  description: 'Build customer loyalty with a rewards program like the national chains. Keep guests coming back for more with points, rewards, and personalized offers.',
  openGraph: {
    title: 'Customer Loyalty Program for Restaurants | RAY',
    description: 'Build customer loyalty with a rewards program like the national chains. Keep guests coming back for more with points, rewards, and personalized offers.',
    url: 'https://rayapp.io/product/loyalty',
  },
  twitter: {
    title: 'Customer Loyalty Program for Restaurants | RAY',
    description: 'Build customer loyalty with a rewards program like the national chains. Keep guests coming back for more with points, rewards, and personalized offers.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/loyalty',
  },
}

export default function LoyaltyPage({ params }: LoyaltyPageProps) {
  return <Loyalty locale={params.locale} />
}
