import React from 'react'
import { lazy, Suspense } from 'react'
import SEOHead from '../components/SEOHead'
import { generatePageMeta } from '../utils/seo'
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/schema'
import { CSS_CLASSES } from '../constants/ui'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import ProductSection from '../components/ProductSection'
import PromiseBanner from '../components/PromiseBanner'
import CTASection from '../components/CTASection'
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load heavy components with React.lazy
const TestimonialCarousel = lazy(() => import('../components/TestimonialCarousel'))

// Trust metrics banner component
const TrustMetrics: React.FC = () => (
  <section className={`${CSS_CLASSES.SECTION_PADDING} bg-white relative overflow-hidden`}>
    {/* Background decoration */}
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
        {/* Highlight 1 - #1 Sales Platform helping restaurant owners and operators */}
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
        
        {/* Highlight 2 - 30% Growth guaranteed */}
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
        
        {/* Highlight 3 - 1,000+ Restaurants Trust RAY */}
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

const Home: React.FC = () => {
  const pageMeta = generatePageMeta({
    title: 'Increase Restaurant Revenue | Drive More Walk-ins & Reviews',
    description: 'Increase revenue by driving more walk-ins, orders, and reviews with RAY\'s restaurant marketing platform. Local SEO, reputation management, and customer engagement tools.',
    path: '/'
  })

  const combinedSchema = [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ]

  return (
    <>
      <SEOHead
        {...pageMeta}
        schema={combinedSchema}
      />
      
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

export default Home