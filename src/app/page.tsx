import type { Metadata } from 'next'
import { Suspense } from 'react'
import { generateOrganizationSchema, generateWebsiteSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/utils/schema'
import { CSS_CLASSES } from '@/constants/ui'
import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'
import ProductSection from '@/components/ProductSection'
import PromiseBanner from '@/components/PromiseBanner'
import CTASection from '@/components/CTASection'
import LoadingSpinner from '@/components/LoadingSpinner'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export const metadata: Metadata = {
  title: 'RAY - Restaurant Marketing Platform | Increase Revenue by 30%+',
  description: 'RAY is the #1 restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews. We guarantee a 30%+ increase in Google Business Profile navigations within 6 months or refund your investment. Trusted by 1,000+ restaurants nationwide.',
  alternates: {
    canonical: 'https://rayapp.io/'
  },
  openGraph: {
    title: 'RAY - Restaurant Marketing Platform | Increase Revenue by 30%+',
    description: 'RAY is the #1 restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews.',
    url: 'https://rayapp.io/',
    type: 'website',
  },
}

const TrustMetrics = () => (
  <section className={`${CSS_CLASSES.SECTION_PADDING} bg-white relative overflow-hidden`}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>

    <div className={CSS_CLASSES.CONTAINER}>
      <div className={`${CSS_CLASSES.TEXT_CENTER} ${CSS_CLASSES.SECTION_MARGIN}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
          Why Restaurant Owners Choose RAY
        </h2>
        <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
          The proven platform that delivers results for restaurant owners nationwide
        </p>
      </div>

      <div className={`${CSS_CLASSES.GRID_3} gap-8 max-w-6xl mx-auto`}>
        <div className="group">
          <div className={`bg-white rounded-2xl shadow-lg ${CSS_CLASSES.HOVER_SHADOW} p-8 ${CSS_CLASSES.TEXT_CENTER} border border-gray-100 hover:-translate-y-2 ${CSS_CLASSES.FADE_IN} h-full ${CSS_CLASSES.FLEX_COL} justify-center`}>
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
              #1
            </div>
            <div className="text-xl font-bold text-ray-dark-900 mb-3">
              Sales Platform
            </div>
            <div className="text-ray-darkGray text-base leading-relaxed">
              Helping restaurant owners and operators
            </div>
          </div>
        </div>

        <div className="group">
          <div className={`bg-white rounded-2xl shadow-lg ${CSS_CLASSES.HOVER_SHADOW} p-8 ${CSS_CLASSES.TEXT_CENTER} border border-gray-100 hover:-translate-y-2 ${CSS_CLASSES.FADE_IN} delay-200 h-full ${CSS_CLASSES.FLEX_COL} justify-center`}>
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
              30%
            </div>
            <div className="text-xl font-bold text-ray-dark-900 mb-3">
              Navigations Guaranteed
            </div>
            <div className="text-ray-darkGray text-base leading-relaxed">
              30%+ increase in Google Business Profile navigations within 6 months — or we'll refund your investment
            </div>
          </div>
        </div>

        <div className="group">
          <div className={`bg-white rounded-2xl shadow-lg ${CSS_CLASSES.HOVER_SHADOW} p-8 ${CSS_CLASSES.TEXT_CENTER} border border-gray-100 hover:-translate-y-2 ${CSS_CLASSES.FADE_IN} delay-400 h-full ${CSS_CLASSES.FLEX_COL} justify-center`}>
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
              1,000+
            </div>
            <div className="text-xl font-bold text-ray-dark-900 mb-3">
              Restaurants Trust RAY
            </div>
            <div className="text-ray-darkGray text-base leading-relaxed">
              Nationwide success stories
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default function HomePage() {
  const combinedSchema = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://rayapp.io/' }
    ])
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <div className="sr-only">
        <h1>RAY Restaurant Marketing Platform</h1>
        <p>RAY is the #1 restaurant marketing platform that helps restaurant owners increase revenue by driving more walk-ins, orders, and reviews. We guarantee a 30%+ increase in Google Business Profile navigations within 6 months or refund your investment. Our platform includes local SEO, reputation management, and customer engagement tools trusted by over 1,000 restaurants nationwide.</p>
      </div>

      <Hero />
      <TrustMetrics />
      <ProductSection />
      <FeatureCards />
      <PromiseBanner />
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialCarousel />
      </Suspense>
      <CTASection />
    </>
  )
}
