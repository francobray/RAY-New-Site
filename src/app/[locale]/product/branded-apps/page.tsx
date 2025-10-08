import { Metadata } from 'next'
import MobileApp from '@/components/pages/product/MobileApp'
import { type Locale } from '@/constants/copy'

interface MobileAppPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: 'Mobile App for Restaurants | RAY',
  description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
  openGraph: {
    title: 'Mobile App for Restaurants | RAY',
    description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
    url: 'https://rayapp.io/product/branded-apps',
  },
  twitter: {
    title: 'Mobile App for Restaurants | RAY',
    description: 'Imagine having your own restaurant mobile app. With a mobile app, send customers order directly — instead of going to third parties.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/branded-apps',
  },
}

export default function MobileAppPage({ params }: MobileAppPageProps) {
  return <MobileApp locale={params.locale} />
}
