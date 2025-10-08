import type { Metadata } from 'next'
import { generateOrganizationSchema, generateWebsiteSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { CSS_CLASSES } from '@/constants/ui'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import Hero from '@/components/Hero'
import ProductSection from '@/components/ProductSection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
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

const TrustMetrics = ({ locale }: { locale: Locale }) => {
  const t = getTranslations(locale)
  
  return (
    <section className={`${CSS_CLASSES.SECTION_PADDING} bg-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>

      <div className={CSS_CLASSES.CONTAINER}>
        <div className={`${CSS_CLASSES.TEXT_CENTER} ${CSS_CLASSES.SECTION_MARGIN}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
            {t.HOMEPAGE.TRUST_METRICS.TITLE}
          </h2>
          <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
            {t.HOMEPAGE.TRUST_METRICS.SUBTITLE}
          </p>
        </div>

        <div className={`${CSS_CLASSES.GRID_3} gap-8 max-w-6xl mx-auto`}>
          <div className="group">
            <div className={`bg-white rounded-2xl shadow-lg ${CSS_CLASSES.HOVER_SHADOW} p-8 ${CSS_CLASSES.TEXT_CENTER} border border-gray-100 h-full ${CSS_CLASSES.FLEX_COL} justify-center`}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4">
                #1
              </div>
              <div className="text-xl font-bold text-ray-dark-900 mb-3">
                {t.HOMEPAGE.TRUST_METRICS.SALES_PLATFORM}
              </div>
              <div className="text-ray-darkGray text-base leading-relaxed">
                {t.HOMEPAGE.TRUST_METRICS.SALES_PLATFORM_DESC}
              </div>
            </div>
          </div>

          <div className="group">
            <div className={`bg-white rounded-2xl shadow-lg ${CSS_CLASSES.HOVER_SHADOW} p-8 ${CSS_CLASSES.TEXT_CENTER} border border-gray-100 h-full ${CSS_CLASSES.FLEX_COL} justify-center`}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4">
                1,000+
              </div>
              <div className="text-xl font-bold text-ray-dark-900 mb-3">
                {t.HOMEPAGE.TRUST_METRICS.RESTAURANTS_TRUST}
              </div>
              <div className="text-ray-darkGray text-base leading-relaxed">
                {t.HOMEPAGE.TRUST_METRICS.SUCCESS_STORIES}
              </div>
            </div>
          </div>

          <div className="group">
            <div className={`bg-white rounded-2xl shadow-lg ${CSS_CLASSES.HOVER_SHADOW} p-8 ${CSS_CLASSES.TEXT_CENTER} border border-gray-100 h-full ${CSS_CLASSES.FLEX_COL} justify-center`}>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4">
                1,000+
              </div>
              <div className="text-xl font-bold text-ray-dark-900 mb-3">
                {t.HOMEPAGE.TRUST_METRICS.RESTAURANTS_TRUST}
              </div>
              <div className="text-ray-darkGray text-base leading-relaxed">
                {t.HOMEPAGE.TRUST_METRICS.SUCCESS_STORIES}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage({ params }: HomePageProps) {
  const locale = params.locale as Locale
  const combinedSchema = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
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
      <TrustMetrics locale={locale} />
      <ProductSection locale={locale} />
      <TestimonialCarousel locale={locale} />
      <FAQ locale={locale} />
      <CTASection locale={locale} />
    </>
  )
}
