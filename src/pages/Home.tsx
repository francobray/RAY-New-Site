import React from 'react'
import { Helmet } from 'react-helmet-async'
import loadable from '@loadable/component'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
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
      </Helmet>
      
      <Hero />
      <FeatureCards />
      <TestimonialCarousel />
      <CTASection />
    </>
  )
}

export default Home