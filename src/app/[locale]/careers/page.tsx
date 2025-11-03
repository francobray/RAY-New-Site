import { Metadata } from 'next'
import Careers from '@/components/pages/company/Careers'
import { type Locale } from '@/lib/i18n'

interface CareersPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: CareersPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: locale === 'es' 
      ? 'Carreras en RAY - Únete a Nuestro Equipo | RAY'
      : 'Careers at RAY - Join Our Team | RAY',
    description: locale === 'es'
      ? 'Únete al equipo de RAY y ayuda a restaurantes locales a crecer. Ofrecemos trabajo remoto, beneficios competitivos y la oportunidad de generar un impacto real.'
      : 'Join the RAY team and help local restaurants grow. We offer remote work, competitive benefits, and the opportunity to make a real impact.',
    openGraph: {
      title: locale === 'es' 
        ? 'Carreras en RAY - Únete a Nuestro Equipo | RAY'
        : 'Careers at RAY - Join Our Team | RAY',
      description: locale === 'es'
        ? 'Únete al equipo de RAY y ayuda a restaurantes locales a crecer. Ofrecemos trabajo remoto, beneficios competitivos y la oportunidad de generar un impacto real.'
        : 'Join the RAY team and help local restaurants grow. We offer remote work, competitive benefits, and the opportunity to make a real impact.',
      url: `https://www.rayapp.io/${locale}/careers`,
    },
    twitter: {
      title: locale === 'es' 
        ? 'Carreras en RAY - Únete a Nuestro Equipo | RAY'
        : 'Careers at RAY - Join Our Team | RAY',
      description: locale === 'es'
        ? 'Únete al equipo de RAY y ayuda a restaurantes locales a crecer. Ofrecemos trabajo remoto, beneficios competitivos y la oportunidad de generar un impacto real.'
        : 'Join the RAY team and help local restaurants grow. We offer remote work, competitive benefits, and the opportunity to make a real impact.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/careers`,
    },
  }
}

export default function CareersPage({ params }: CareersPageProps) {
  return <Careers locale={params.locale} />
}

