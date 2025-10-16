import { Metadata } from 'next'
import Demo from '@/components/pages/Demo'
import { type Locale } from '@/lib/i18n'

interface DemoPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Free Demo - RAY Restaurant Marketing Platform | RAY',
    description: locale === 'es'
      ? 'Agenda una demo gratuita de la plataforma de marketing de RAY. Aumenta ingresos con SEO local, reseñas y engagement de clientes.'
      : 'Book a free demo of RAY\'s restaurant marketing platform. Increase revenue with local SEO, reviews, and customer engagement.',
    openGraph: {
      title: 'Free Demo - RAY Restaurant Marketing Platform | RAY',
      description: locale === 'es'
        ? 'Agenda una demo gratuita de la plataforma de marketing de RAY. Aumenta ingresos con SEO local, reseñas y engagement de clientes.'
        : 'Book a free demo of RAY\'s restaurant marketing platform. Increase revenue with local SEO, reviews, and customer engagement.',
      url: `https://rayapp.io/${locale}/demo`,
    },
    twitter: {
      title: 'Free Demo - RAY Restaurant Marketing Platform | RAY',
      description: locale === 'es'
        ? 'Agenda una demo gratuita de la plataforma de marketing de RAY. Aumenta ingresos con SEO local, reseñas y engagement de clientes.'
        : 'Book a free demo of RAY\'s restaurant marketing platform. Increase revenue with local SEO, reviews, and customer engagement.',
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/demo`,
    },
  }
}

export default function DemoPage({ params }: DemoPageProps) {
  return <Demo locale={params.locale} />
}
