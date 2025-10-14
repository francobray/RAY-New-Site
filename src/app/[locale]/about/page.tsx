import { Metadata } from 'next'
import About from '@/components/pages/About'
import { type Locale } from '@/lib/i18n'

interface AboutPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'About Us - Restaurant Marketing Experts | RAY',
    description: 'Learn about RAY\'s mission to help restaurants increase revenue through proven marketing strategies. Meet our team of restaurant industry experts.',
    openGraph: {
      title: 'About Us - Restaurant Marketing Experts | RAY',
      description: 'Learn about RAY\'s mission to help restaurants increase revenue through proven marketing strategies. Meet our team of restaurant industry experts.',
      url: `https://rayapp.io/${locale}/about`,
    },
    twitter: {
      title: 'About Us - Restaurant Marketing Experts | RAY',
      description: 'Learn about RAY\'s mission to help restaurants increase revenue through proven marketing strategies. Meet our team of restaurant industry experts.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/about`,
    },
  }
}

export default function AboutPage({ params }: AboutPageProps) {
  return <About locale={params.locale} />
}
