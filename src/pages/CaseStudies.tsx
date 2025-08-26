import React from 'react'
import { Helmet } from 'react-helmet-async'
import CaseStudyCard from '../components/CaseStudyCard'
import CTASection from '../components/CTASection'

const caseStudies = [
  {
    title: 'Dolcezza Gelato',
    description: 'How this artisanal gelato shop increased walk-in traffic by 47% and improved their online reputation across multiple DC locations.',
    image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    location: 'Washington, DC',
    industry: 'Gelato & Desserts',
    results: [
      { metric: 'Walk-ins', value: '+47%', improvement: '3 months' },
      { metric: 'Online Reviews', value: '4.8★', improvement: 'from 4.2★' },
      { metric: 'Revenue', value: '+35%', improvement: 'year over year' }
    ]
  },
  {
    title: 'V&E Hospitality Group',
    description: 'Managing 30+ restaurant locations across Florida and Nevada with unified local marketing strategies and reputation management.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    location: 'Florida & Nevada',
    industry: 'Multi-location Restaurant Group',
    results: [
      { metric: 'Locations', value: '30+', improvement: 'managed' },
      { metric: 'Revenue Growth', value: '+35%', improvement: 'across all locations' },
      { metric: 'Review Score', value: '4.6★', improvement: 'average rating' }
    ]
  }
]

const CaseStudies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - RAY Restaurant Marketing Success Stories</title>
        <meta name="description" content="See how restaurants like Dolcezza Gelato and V&E Hospitality increased revenue with RAY's marketing platform. Real results from real restaurants." />
        <meta property="og:title" content="Case Studies - RAY Restaurant Marketing Success Stories" />
        <meta property="og:description" content="See how restaurants like Dolcezza Gelato and V&E Hospitality increased revenue with RAY's marketing platform. Real results from real restaurants." />
        <meta property="og:url" content="https://rayrestaurant.com/case-studies" />
        <meta name="twitter:title" content="Case Studies - RAY Restaurant Marketing Success Stories" />
        <meta name="twitter:description" content="See how restaurants like Dolcezza Gelato and V&E Hospitality increased revenue with RAY's marketing platform. Real results from real restaurants." />
        <link rel="canonical" href="https://rayrestaurant.com/case-studies" />
      </Helmet>
      
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              See how restaurants across the country have transformed their business 
              with RAY's marketing platform. Real results from real restaurants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
              Ready to be our next success story?
            </h2>
            <p className="text-ray-darkGray mb-8">
              Join hundreds of restaurants that have increased their revenue with RAY.
            </p>
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  )
}

export default CaseStudies