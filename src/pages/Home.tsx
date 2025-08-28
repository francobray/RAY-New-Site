import React from 'react'
import { Helmet } from 'react-helmet-async'
import loadable from '@loadable/component'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import ProductSection from '../components/ProductSection'
import CTASection from '../components/CTASection'
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy load heavy components
const TestimonialCarousel = loadable(() => import('../components/TestimonialCarousel'), {
  fallback: <LoadingSpinner />
})

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
            "logo": "https://rayrestaurant.com/logo.png",
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
      <FeatureCards />
      <ProductSection />
      <TestimonialCarousel />
      <CTASection />
    </>
  )
}

export default Home