'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Star, MapPin, Eye, Users, Award } from 'lucide-react'
import CTASection from '../CTASection'
import { useTranslations } from '../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

const caseStudies = [
  {
    id: 'temple-craft',
    slug: 'temple-craft-wynwood',
    name: 'Temple Craft Wynwood',
    location: 'Wynwood, Miami',
    industry: 'Craft Beer & Nightlife',
    image: '/images/success-stories/Temple_Team.jpeg',
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
      author: 'Juan Ignacio Chereminiano',
      title: 'CEO'
    }
  },
  {
    id: 'chimba-miami',
    slug: 'chimba-miami',
    name: 'Chimba Miami',
    location: 'Miami, FL',
    industry: 'Nightlife & Dining',
    image: '/images/success-stories/Chimba_Miami_Celebrating.jpeg',
    keyMetrics: [
      { label: 'Google Maps Directions', value: '+215%', icon: Eye },
      { label: 'Walk-ins', value: '+46%', icon: Users },
      { label: 'Google Rating', value: '4.7★', icon: Star }
    ],
    headline: 'Explosive Growth in Local Visibility',
    description: 'Chimba climbed from low search ranking to top visibility on Google Maps, bringing in more foot traffic and local engagement.',
    tags: ['Local SEO', 'Listings', 'Reviews'],
    testimonial: {
      text: 'Our Google Maps visits skyrocketed by 215%, and foot traffic increased by 46%.',
      author: 'Franco Yametti',
      title: 'CEO'
    }
  },
  {
    id: 've-hospitality',
    slug: 've-hospitality',
    name: 'V&E Hospitality Group',
    location: 'Multiple Locations',
    industry: 'Restaurant Group',
    image: '/images/success-stories/Restaurant-photo-ray.jpeg',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$45K', icon: TrendingUp },
      { label: 'Bookings Growth', value: '+180%', icon: Users },
      { label: 'Local Visibility', value: '+95%', icon: Eye }
    ],
    headline: 'Unified Marketing Across Multiple Locations',
    description: 'V&E Hospitality Group unified their marketing strategy across multiple restaurant concepts, achieving consistent growth and brand recognition.',
    tags: ['Multi-location', 'Unified Marketing', 'Brand Management'],
    testimonial: {
      text: 'RAY allowed us to unify our marketing and achieve consistent results across all our locations.',
      author: 'V&E Hospitality Group',
      title: 'Restaurant Group'
    }
  },
  {
    id: 'green-eat',
    slug: 'green-eat',
    name: 'Green Eat',
    location: 'Eco-Conscious Market',
    industry: 'Sustainable Restaurant',
    image: '/images/success-stories/Dolcezza.png',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$18K', icon: TrendingUp },
      { label: 'Conscious Customers', value: '+240%', icon: Users },
      { label: 'Green Visibility', value: '+85%', icon: Eye }
    ],
    headline: 'Connecting with Eco-Conscious Customers',
    description: 'Green Eat positioned themselves as the leading sustainable restaurant, connecting with environmentally conscious customers and building a green community.',
    tags: ['Sustainable Marketing', 'Green SEO', 'Community Building'],
    testimonial: {
      text: 'RAY helped us connect with our ideal audience and communicate our sustainable values.',
      author: 'Green Eat Team',
      title: 'Sustainable Restaurant'
    }
  },
  {
    id: 'havanna',
    slug: 'havanna',
    name: 'Havanna',
    location: 'Coffee Market',
    industry: 'Coffee Chain',
    image: '/images/success-stories/Juan_valdez.jpg',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$32K', icon: TrendingUp },
      { label: 'Frequent Customers', value: '+165%', icon: Users },
      { label: 'Digital Visibility', value: '+220%', icon: Eye }
    ],
    headline: 'Modernizing While Preserving Tradition',
    description: 'Havanna modernized their digital presence while maintaining their authentic Argentine coffee tradition, attracting both traditional and new customers.',
    tags: ['Cultural Marketing', 'Digital Transformation', 'Loyalty Programs'],
    testimonial: {
      text: 'RAY allowed us to modernize our digital presence without losing our traditional essence.',
      author: 'Havanna Management',
      title: 'Coffee Chain'
    }
  },
  {
    id: 'craft',
    slug: 'craft',
    name: 'CRAFT',
    location: 'Local Brewery Scene',
    industry: 'Craft Brewery',
    image: '/images/success-stories/Temple_Bar.jpg',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$28K', icon: TrendingUp },
      { label: 'Taproom Visits', value: '+195%', icon: Users },
      { label: 'Local Visibility', value: '+175%', icon: Eye }
    ],
    headline: 'Building Community Around Artisanal Beer',
    description: 'CRAFT positioned themselves as the leading craft brewery by highlighting their artisanal process and building a loyal community of beer enthusiasts.',
    tags: ['Craft Marketing', 'Community Building', 'Event Organization'],
    testimonial: {
      text: 'RAY helped us tell our craft story and build a real community around our brewery.',
      author: 'CRAFT Brewery Team',
      title: 'Craft Brewery'
    }
  },
  {
    id: 'wingsfc',
    slug: 'wingsfc',
    name: 'WingsFC',
    location: 'Sports Bar Market',
    industry: 'Sports Bar',
    image: '/images/success-stories/Chef_burguer.jpeg',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$35K', icon: TrendingUp },
      { label: 'Game Day Growth', value: '+280%', icon: Users },
      { label: 'Average Attendance', value: '+190%', icon: Eye }
    ],
    headline: 'The Ultimate Sports Fan Destination',
    description: 'WingsFC became the number one destination for sports fans by maximizing game day revenue and creating unforgettable sports viewing experiences.',
    tags: ['Game Day Marketing', 'Sports Events', 'Fan Engagement'],
    testimonial: {
      text: 'RAY completely transformed our business. Now we\'re the number one destination for watching sports.',
      author: 'WingsFC Team',
      title: 'Sports Bar'
    }
  },
  {
    id: 'dolcezza',
    slug: 'dolcezza',
    name: 'Dolcezza',
    location: 'Artisanal Market',
    industry: 'Gelato Shop',
    image: '/images/success-stories/Dolcezza.png',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$8K', icon: TrendingUp },
      { label: 'Local Customers', value: '+145%', icon: Users },
      { label: 'Local Visibility', value: '+125%', icon: Eye }
    ],
    headline: 'Artisanal Excellence in Every Scoop',
    description: 'Dolcezza positioned themselves as the premium artisanal gelateria by highlighting their craftsmanship and quality ingredients.',
    tags: ['Artisanal Marketing', 'Premium Experience', 'Quality Focus'],
    testimonial: {
      text: 'RAY helped us communicate the true quality and craftsmanship behind our products.',
      author: 'Violeta Edelman',
      title: 'Co-Founder - Dolcezza'
    }
  },
  {
    id: 'la-birra-bar',
    slug: 'la-birra-bar',
    name: 'La Birra Bar',
    location: 'Craft Beer Scene',
    industry: 'Craft Beer Bar',
    image: '/images/success-stories/Temple_Bar.jpg',
    keyMetrics: [
      { label: 'Monthly Revenue', value: '+$22K', icon: TrendingUp },
      { label: 'Regular Customers', value: '+210%', icon: Users },
      { label: 'Local Visibility', value: '+185%', icon: Eye }
    ],
    headline: 'Craft Beer Community Hub',
    description: 'La Birra Bar became the go-to destination for craft beer lovers by building a community around their unique beer selection and social atmosphere.',
    tags: ['Beer Marketing', 'Community Building', 'Craft Beer Events'],
    testimonial: {
      text: 'RAY helped us create a real community of beer lovers and regular customers.',
      author: 'La Birra Bar Team',
      title: 'Craft Beer Bar'
    }
  }
]


interface CaseStudiesProps {
  locale: Locale
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  return (
    <>
      
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>RAY Restaurant Marketing Success Stories and Case Studies</h1>
        <p>Real case studies from restaurants that increased revenue using RAY's marketing platform. Featured success stories include Temple Craft Wynwood (259% increase in Google Maps visits, 66% increase in walk-ins) and Chimba Miami (215% increase in Google Maps directions, 46% increase in walk-ins). These results demonstrate RAY's proven ability to help restaurants dominate local search and drive more foot traffic through AI-powered local marketing, review management, and Google Business Profile optimization.</p>
        <p>All case studies include verified metrics, implementation timelines, and specific strategies used. Results typically achieved within 60-90 days of implementation.</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
            <Award className="w-4 h-4 text-ray-blue mr-2" />
            <span className="text-sm font-medium text-ray-dark-900">{t.CASE_STUDIES_PAGE.BADGE}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-4">
            {t.CASE_STUDIES_PAGE.HERO_TITLE}{' '}
            <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
              {t.CASE_STUDIES_PAGE.HERO_TITLE_HIGHLIGHT}
            </span>
          </h1>
          
          <p className="text-xl text-ray-darkGray max-w-4xl mx-auto leading-relaxed mb-8">
            {t.CASE_STUDIES_PAGE.HERO_SUBTITLE}
          </p>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/${locale}/case-studies/${study.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Background Image */}
                  <div className="relative h-80">
                    <img
                      src={study.image}
                      alt={`${study.name} restaurant interior`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Uniform Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
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
                      </div>
                      
                      {/* Bottom Section - Restaurant & Metrics */}
                      <div>
                        <div className="mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                            {study.name}
                          </h3>
                          <p className="text-lg font-medium opacity-90 mb-3">
                            {study.headline}
                          </p>
                          <p className="text-sm opacity-80 leading-relaxed">
                            {study.description}
                          </p>
                        </div>
                        
                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {study.keyMetrics.map((metric, metricIndex) => {
                            const IconComponent = metric.icon
                            return (
                              <div key={metricIndex} className="text-center">
                                <div className="flex items-center justify-center mb-1">
                                  <IconComponent className="w-4 h-4 mr-1" />
                                  <span className="text-lg font-bold text-white">
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
                            "{study.testimonial.text.slice(0, 50)}..."
                          </div>
                          <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                            Read Story
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default CaseStudies