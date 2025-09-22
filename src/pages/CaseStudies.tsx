import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Star, MapPin, Eye, Users, Award, Filter } from 'lucide-react'
import CTASection from '../components/CTASection'

const caseStudies = [
  {
    id: 'temple-craft',
    slug: 'temple-craft-wynwood',
    name: 'Temple Craft Wynwood',
    location: 'Wynwood, Miami',
    industry: 'Craft Beer & Nightlife',
    image: '/images/Temple_Team.jpeg',
    brandColors: {
      primary: 'from-yellow-500 to-orange-500',
      secondary: 'from-gray-800 to-gray-900',
      accent: 'yellow-400'
    },
    keyMetrics: [
      { label: 'Google Maps Views', value: '+259%', icon: Eye },
      { label: 'Walk-ins', value: '+66%', icon: Users },
      { label: 'Google Rating', value: '4.8★', icon: Star }
    ],
    headline: 'From #15 to #1 on Google Maps',
    description: 'Temple Craft climbed from ranking #15 to #1 on Google Maps while dramatically increasing foot traffic and discovery.',
    tags: ['Local SEO', 'Listings', 'Reviews'],
    testimonial: {
      text: 'Our Google Maps visits skyrocketed by 259%, and foot traffic increased by 66%.',
      author: 'Juani Chereminiano',
      title: 'CEO'
    }
  },
  {
    id: 'chimba-miami',
    slug: 'chimba-miami',
    name: 'Chimba Miami',
    location: 'Miami, FL',
    industry: 'Nightlife & Dining',
    image: '/images/Chimba_Miami.jpeg',
    brandColors: {
      primary: 'from-pink-500 to-red-500',
      secondary: 'from-red-500 to-purple-500',
      accent: 'pink-400'
    },
    keyMetrics: [
      { label: 'Google Maps Views', value: '+215%', icon: Eye },
      { label: 'Walk-ins', value: '+46%', icon: Users },
      { label: 'Google Rating', value: '4.7★', icon: Star }
    ],
    headline: 'Explosive Growth in Local Visibility',
    description: 'Chimba climbed from low search ranking to top visibility on Google Maps, bringing in more foot traffic and local engagement.',
    tags: ['Local SEO', 'Listings', 'Reviews'],
    testimonial: {
      text: 'Our Google Maps visits skyrocketed by 215%, and foot traffic increased by 46%.',
      author: 'Franco Yannelli',
      title: 'CMO'
    }
  }
]

const allTags = Array.from(new Set(caseStudies.flatMap(study => study.tags)))

const CaseStudies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Success Stories - Restaurant Marketing Case Studies | RAY</title>
        <meta name="description" content="See how restaurants like Temple Craft and Chimba Miami increased walk-ins and Google Maps visibility with RAY's marketing platform. Real results from real restaurants." />
        <meta property="og:title" content="Success Stories - Restaurant Marketing Case Studies | RAY" />
        <meta property="og:description" content="See how restaurants like Temple Craft and Chimba Miami increased walk-ins and Google Maps visibility with RAY's marketing platform. Real results from real restaurants." />
        <meta property="og:url" content="https://rayapp.io/case-studies" />
        <meta name="twitter:title" content="Success Stories - Restaurant Marketing Case Studies | RAY" />
        <meta name="twitter:description" content="See how restaurants like Temple Craft and Chimba Miami increased walk-ins and Google Maps visibility with RAY's marketing platform. Real results from real restaurants." />
        <link rel="canonical" href="https://rayapp.io/case-studies" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "RAY Restaurant Marketing Success Stories",
            "description": "Case studies showing how restaurants increased revenue with RAY's marketing platform",
            "url": "https://rayapp.io/case-studies",
            "mainEntity": caseStudies.map(study => ({
              "@type": "CaseStudy",
              "name": `${study.name} Success Story`,
              "description": study.description,
              "url": `https://rayapp.io/case-studies/${study.slug}`
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
            <Award className="w-4 h-4 text-ray-blue mr-2" />
            <span className="text-sm font-medium text-ray-dark-900">Proven Success Stories</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
              Real Restaurants
            </span>
          </h1>
          
          <p className="text-xl text-ray-darkGray max-w-4xl mx-auto leading-relaxed mb-12">
            Discover how restaurants have achieved remarkable growth with RAY's platform.
          </p>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-ray-darkGray mr-3" />
              <span className="text-ray-dark-900 font-medium">Filter by solution:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-ray-blue text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
                All Stories
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-gray-100 text-ray-darkGray rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.slug}`}
                className="group block"
              >
                <div className={`relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 animate-in fade-in slide-in-from-bottom duration-700 delay-${index * 200}`}>
                  {/* Background Image */}
                  <div className="relative h-80 lg:h-96">
                    <img
                      src={study.image}
                      alt={`${study.name} restaurant interior`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Brand-aligned Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.brandColors.secondary} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                      {/* Top Section - Location & Industry */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                            <MapPin className="w-3 h-3 mr-1" />
                            {study.location}
                          </div>
                          <div className="text-sm opacity-90">
                            {study.industry}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {study.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom Section - Restaurant & Metrics */}
                      <div>
                        <div className="mb-6">
                          <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                            {study.name}
                          </h3>
                          <p className="text-lg font-medium opacity-90 mb-4">
                            {study.headline}
                          </p>
                          <p className="text-sm opacity-80 leading-relaxed">
                            {study.description}
                          </p>
                        </div>
                        
                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {study.keyMetrics.map((metric, metricIndex) => {
                            const IconComponent = metric.icon
                            return (
                              <div key={metricIndex} className="text-center">
                                <div className="flex items-center justify-center mb-1">
                                  <IconComponent className="w-4 h-4 mr-1" />
                                  <span className={`text-lg font-bold text-${study.brandColors.accent}`}>
                                    {metric.value}
                                  </span>
                                </div>
                                <div className="text-xs opacity-80">
                                  {metric.label}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <div className="text-sm opacity-90">
                            "{study.testimonial.text.slice(0, 60)}..."
                          </div>
                          <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                            Read Story
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${study.brandColors.primary} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Coming Soon Card */}
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-dashed border-gray-300 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                More Success Stories Coming Soon
              </h3>
              <p className="text-ray-darkGray max-w-2xl mx-auto leading-relaxed">
                We're working with hundreds of restaurants to document their growth stories. 
                Check back soon for more inspiring case studies and proven results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  )
}

export default CaseStudies