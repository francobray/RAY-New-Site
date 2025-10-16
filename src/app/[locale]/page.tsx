import type { Metadata } from 'next'
import { generateOrganizationSchema, generateWebsiteSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Hero from '@/components/Hero'
import ProductSection from '@/components/ProductSection'
import SuccessCarousel from '@/components/SuccessCarousel'
import ProductShowcase from '@/components/ProductShowcase'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'

interface HomePageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  
  if (!isValidLocale(locale)) {
    return {}
  }

  const t = getTranslations(locale)
  
  return {
    title: `RAY - ${t.COMPANY.TAGLINE}`,
    description: t.COMPANY.DESCRIPTION,
    alternates: {
      canonical: `https://rayapp.io/${locale}`
    },
    openGraph: {
      title: `RAY - ${t.COMPANY.TAGLINE}`,
      description: t.COMPANY.DESCRIPTION,
      url: `https://rayapp.io/${locale}`,
      type: 'website',
    },
  }
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.locale as Locale
  
  if (!isValidLocale(locale)) {
    // Redirect to default locale or return error
    return <div>Invalid locale</div>
  }
  
  const combinedSchema = [
    generateOrganizationSchema(locale),
    generateWebsiteSchema(locale),
    generateLocalBusinessSchema(locale),
    generateBreadcrumbSchema([
      { name: locale === 'es' ? 'Inicio' : 'Home', url: `https://rayapp.io/${locale}` }
    ])
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <div className="sr-only">
        <p>RAY is the #1 restaurant marketing platform that helps restaurant owners increase revenue by driving more walk-ins, orders, and reviews. We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months or refund your investment. Our platform includes local SEO, reputation management, and customer engagement tools trusted by over 1,000 restaurants nationwide.</p>
      </div>

      <Hero locale={locale} />
      <ProductSection locale={locale} />
      <SuccessCarousel locale={locale} />
      <ProductShowcase locale={locale} />
      <FAQ locale={locale} />
      <CTASection locale={locale} />
    </>
  )
}
