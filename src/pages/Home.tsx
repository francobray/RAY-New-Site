import React from 'react'
import { Helmet } from 'react-helmet-async'
import loadable from '@loadable/component'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import ProductSection from '../components/ProductSection'
import PromiseBanner from '../components/PromiseBanner'
import CTASection from '../components/CTASection'
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load heavy components
const TestimonialCarousel = loadable(() => import('../components/TestimonialCarousel'), {
  fallback: <LoadingSpinner />
})

// Trust metrics banner component
const TrustMetrics: React.FC = () => (
  <section className="py-12 bg-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
          Why Restaurant Owners Choose RAY
        </h2>
        <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
          The proven platform that delivers results for restaurant owners nationwide
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Highlight 1 - #1 Sales Platform helping restaurant owners and operators */}
        <div className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 h-full flex flex-col justify-center">
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
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-200 h-full flex flex-col justify-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
              30%
            </div>
            <div className="text-xl font-bold text-ray-dark-900 mb-3">
              Growth Guaranteed
            </div>
            <div className="text-ray-darkGray text-base leading-relaxed">
              To your Google profile in 6 months, or your money back
            </div>
          </div>
        </div>
        
        {/* Highlight 3 - 1,000+ Restaurants Trust RAY */}
        <div className="group">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-400 h-full flex flex-col justify-center">
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
  return (
    <>
      <Helmet>
        <title>RAY - Increase Restaurant Revenue | Drive More Walk-ins & Reviews</title>
        <meta name="description" content="Increase revenue by driving more walk-ins, orders, and reviews with RAY's restaurant marketing platform. Local SEO, reputation management, and customer engagement tools." />
        <meta property="og:title" content="RAY - Increase Restaurant Revenue | Drive More Walk-ins & Reviews" />
        <meta property="og:description" content="Increase revenue by driving more walk-ins, orders, and reviews with RAY's restaurant marketing platform. Local SEO, reputation management, and customer engagement tools." />
        <meta property="og:url" content="https://rayrestaurant.com/" />
        <meta name="twitter:title" content="RAY - Increase Restaurant Revenue | Drive More Walk-ins & Reviews" />
        <meta name="twitter:description" content="Increase revenue by driving more walk-ins, orders, and reviews with RAY's restaurant marketing platform. Local SEO, reputation management, and customer engagement tools." />
        <link rel="canonical" href="https://rayrestaurant.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RAY",
            "description": "Restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews",
            "url": "https://rayrestaurant.com",
            "logo": "https://rayrestaurant.com/images/logo-rayapp-azulwebp-300x150.webp",
            "sameAs": [
              "https://twitter.com/rayrestaurant",
              "https://linkedin.com/company/rayrestaurant"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "RAY Restaurant Marketing Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Walk-Ins Marketing Solution",
                    "description": "AI-powered local marketing that turns searches into walk-ins"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Online Orders & Bookings Platform",
                    "description": "Integrated platform for growing online orders, reservations, and deliveries"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <Hero />
      <TrustMetrics />
      <ProductSection />
      <FeatureCards />
      <PromiseBanner />
      <TestimonialCarousel />
      <CTASection />
    </>
  )
}

export default Home