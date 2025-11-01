import { Metadata } from 'next'
import Partner from '@/components/pages/company/Partner'
import { type Locale } from '@/lib/i18n'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { getTranslations } from '@/hooks/useTranslations'

interface PartnerPageProps {
  params: { locale: Locale }
}

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const { locale } = params
  
  return {
    title: 'Partner with RAY - Grow Your Clients. Grow Your Business. | RAY',
    description: 'Join our partner program to provide innovative restaurant marketing solutions while earning recurring revenue. Complement your value, earn monthly revenue, and become a RAY partner.',
    openGraph: {
      title: 'Partner with RAY - Grow Your Clients. Grow Your Business. | RAY',
      description: 'Join our partner program to provide innovative restaurant marketing solutions while earning recurring revenue.',
      url: `https://www.rayapp.io/${locale}/partner`,
    },
    twitter: {
      title: 'Partner with RAY - Grow Your Clients. Grow Your Business. | RAY',
      description: 'Join our partner program to provide innovative restaurant marketing solutions while earning recurring revenue.',
    },
    alternates: {
      canonical: `https://www.rayapp.io/${locale}/partner`,
    },
  }
}

export default function PartnerPage({ params }: PartnerPageProps) {
  const locale = params.locale as Locale
  const t = getTranslations(locale)
  
  // FAQ schema - using the same FAQs from the component
  const faqSchema = generateFAQSchema(
    t.PARTNER_PAGE.FAQ.QUESTIONS, 
    `https://www.rayapp.io/${locale}/partner`, 
    locale
  )

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://www.rayapp.io/${locale}` },
    { name: locale === 'es' ? 'Compañía' : 'Company', url: `https://www.rayapp.io/${locale}/about` },
    { name: locale === 'es' ? 'Asóciate con RAY' : 'Partner with RAY', url: `https://www.rayapp.io/${locale}/partner` }
  ])

  const combinedSchema = [faqSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <Partner locale={locale} />
    </>
  )
}

