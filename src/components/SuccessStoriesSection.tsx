'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface SuccessStoriesSectionProps {
  locale: Locale
}

const successStories = [
  {
    id: 1,
    ownerName: 'Franco Yametti',
    title: 'CEO - Chimba Miami',
    restaurantName: 'Chimba Miami',
    metric: '215%',
    period: 'increase in Google Maps directions',
    description: 'How Chimba Miami increased Google Maps directions by 215% and foot traffic by 46%',
    image: '/images/success-stories/Chimba_Miami_Celebrating.jpeg',
    slug: 'chimba-miami'
  },
  {
    id: 2,
    ownerName: 'Juan Ignacio Chereminiano', 
    title: 'CEO - Temple Craft Wynwood',
    restaurantName: 'Temple Craft Wynwood',
    metric: '259%',
    period: 'increase in local visibility',
    description: 'How Temple Craft Wynwood achieved 259% increase in Google Maps visits and 66% more walk-ins',
    image: '/images/success-stories/Temple_Team.jpeg',
    slug: 'temple-craft-wynwood'
  },
  {
    id: 3,
    ownerName: 'Ivan Castaño',
    title: 'CEO & Founder - Chef Burger', 
    restaurantName: 'Chef Burger',
    metric: '+$8,000',
    period: 'monthly revenue increase',
    description: 'How Chef Burger increased monthly revenue through RAY\'s marketing platform',
    image: '/images/success-stories/Chef_burguer.jpeg',
    slug: null
  },
  {
    id: 4,
    ownerName: 'Violeta Edelman',
    title: 'Co-Founder - Dolcezza',
    restaurantName: 'Dolcezza',
    metric: '+$8,000',
    period: 'monthly growth',
    description: 'How Dolcezza increased monthly revenue through targeted marketing strategies',
    image: '/images/success-stories/Dolcezza.png',
    slug: 'dolcezza'
  },
  {
    id: 5,
    ownerName: 'Belen Garcia',
    title: 'CMO - Juan Valdez',
    restaurantName: 'Juan Valdez',
    metric: '+$8,000',
    period: 'monthly increase',
    description: 'How Juan Valdez Coffee improved customer engagement and sales',
    image: '/images/success-stories/Juan_valdez.jpg',
    slug: null
  },
  {
    id: 6,
    ownerName: 'Restaurant Owner',
    title: 'Local Restaurant Success',
    restaurantName: 'Featured Restaurant',
    metric: '+$10,000',
    period: 'monthly growth',
    description: 'How this restaurant transformed their business with RAY\'s platform',
    image: '/images/success-stories/Restaurant-photo-ray.jpeg',
    slug: null
  },
  {
    id: 7,
    ownerName: 'Maria Rodriguez',
    title: 'Owner of Bella Vista Italian',
    restaurantName: 'Bella Vista Italian',
    metric: '+$25,000',
    period: 'monthly',
    description: 'Increased monthly revenue by $25,000 through RAY\'s automated marketing system',
    image: '/images/success-stories/Temple_Team.jpeg',
    slug: null
  },
  {
    id: 8,
    ownerName: 'David Chen',
    title: 'Co-founder of Golden Dragon',
    restaurantName: 'Golden Dragon',
    metric: '5X increase',
    period: 'in bookings',
    description: 'How Golden Dragon achieved 5X increase in direct bookings using RAY\'s platform',
    image: '/images/success-stories/Temple_Bar.jpg',
    slug: null
  },
  {
    id: 9,
    ownerName: 'Sarah Thompson',
    title: 'Owner of Coastal Seafood',
    restaurantName: 'Coastal Seafood',
    metric: '+$35,000',
    period: 'in 45 days',
    description: 'Drove $35,000 in additional revenue within 45 days of implementing RAY',
    image: '/images/success-stories/Chef_burguer.jpeg',
    slug: null
  },
  {
    id: 10,
    ownerName: 'Michael Johnson',
    title: 'Founder of Urban Grill',
    restaurantName: 'Urban Grill',
    metric: '3X growth',
    period: 'in walk-ins',
    description: 'Achieved 3X growth in walk-in customers through RAY\'s local marketing tools',
    image: '/images/success-stories/Dolcezza.png',
    slug: null
  },
  {
    id: 11,
    ownerName: 'Lisa Park',
    title: 'Co-owner of Sakura Sushi',
    restaurantName: 'Sakura Sushi',
    metric: '+$60,000',
    period: 'annually',
    description: 'Increased annual revenue by $60,000 with RAY\'s comprehensive marketing suite',
    image: '/images/success-stories/Juan_valdez.jpg',
    slug: null
  },
  {
    id: 12,
    ownerName: 'Robert Martinez',
    title: 'Owner of Fiesta Mexicana',
    restaurantName: 'Fiesta Mexicana',
    metric: '4X increase',
    period: 'in online orders',
    description: 'Quadrupled online orders within 60 days using RAY\'s ordering platform',
    image: '/images/success-stories/Chimba_Miami_Celebrating.jpeg',
    slug: null
  },
  {
    id: 13,
    ownerName: 'WingsFC Team',
    title: 'Owners - WingsFC Sports Bar',
    restaurantName: 'WingsFC',
    metric: '+$35,000',
    period: 'monthly revenue increase',
    description: 'How WingsFC maximized game day revenue and created the ultimate sports fan destination',
    image: '/images/success-stories/Chef_burguer.jpeg',
    slug: 'wingsfc'
  },
  {
    id: 14,
    ownerName: 'V&E Hospitality Group',
    title: 'Restaurant Group Management',
    restaurantName: 'V&E Hospitality',
    metric: '+$45,000',
    period: 'monthly revenue increase',
    description: 'How V&E Hospitality unified marketing across multiple restaurant locations',
    image: '/images/success-stories/Restaurant-photo-ray.jpeg',
    slug: 've-hospitality'
  },
  {
    id: 15,
    ownerName: 'Green Eat Team',
    title: 'Sustainable Restaurant Owners',
    restaurantName: 'Green Eat',
    metric: '+$18,000',
    period: 'monthly revenue increase',
    description: 'How Green Eat connected with environmentally conscious customers',
    image: '/images/success-stories/Dolcezza.png',
    slug: 'green-eat'
  },
  {
    id: 16,
    ownerName: 'Havanna',
    title: 'Coffee Chain Leadership',
    restaurantName: 'Havanna',
    metric: '+$32,000',
    period: 'monthly revenue increase',
    description: 'How Havanna modernized their digital presence while maintaining tradition',
    image: '/images/success-stories/Juan_valdez.jpg',
    slug: 'havanna'
  },
  {
    id: 17,
    ownerName: 'CRAFT Brewery Team',
    title: 'Craft Brewery Owners',
    restaurantName: 'CRAFT',
    metric: '+$28,000',
    period: 'monthly revenue increase',
    description: 'How CRAFT built a community around their artisanal beer',
    image: '/images/success-stories/Temple_Bar.jpg',
    slug: 'craft'
  },
  {
    id: 18,
    ownerName: 'La Birra Bar Team',
    title: 'Craft Beer Bar Owners',
    restaurantName: 'La Birra Bar',
    metric: '+$22,000',
    period: 'monthly revenue increase',
    description: 'How La Birra Bar created a community of craft beer lovers',
    image: '/images/success-stories/Temple_Bar.jpg',
    slug: 'la-birra-bar'
  }
]

const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ locale }) => {
  const [currentStory, setCurrentStory] = useState(0)
  const currentData = successStories[currentStory]

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  const linkHref = currentData.slug 
    ? `/${locale}/case-studies/${currentData.slug}`
    : `/${locale}/case-studies`

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left side - Content */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {currentData.ownerName}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {currentData.title}
                    </p>
                  </div>
                  <Link
                    href={linkHref}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    {locale === 'es' ? 'Ver historia completa >' : 'See full story >'}
                  </Link>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-600 mb-8 italic">
                  "{locale === 'es' ? 'RAY es esencial para tener éxito online como restaurante independiente hoy en día.' : 'RAY is a must-have for succeeding online as an independent restaurant today.'}"
                </blockquote>

                {/* Statistics */}
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {currentData.metric}
                    </div>
                    <div className="text-sm text-gray-600">
                      {locale === 'es' ? 'Crecimiento de ventas después de cambiar a RAY' : 'Sales growth after switching to RAY'}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {currentData.period}
                    </div>
                    <div className="text-sm text-gray-600">
                      {locale === 'es' ? 'Mejora en visibilidad local' : 'Improvement in local visibility'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={currentData.image}
                  alt={`${currentData.ownerName} - ${currentData.restaurantName}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                {/* Bottom overlay with story link */}
                <div className="absolute bottom-4 left-4 right-4">
                  <Link
                    href={linkHref}
                    className="block bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-200"
                  >
                    <span className="text-sm font-medium">
                      {locale === 'es' ? 'Ver la historia' : 'See the story'} {currentData.restaurantName}
                    </span>
                  </Link>
                </div>

                {/* Play button (optional - for video stories) */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
                    <ChevronRight className="w-6 h-6 text-gray-900 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 px-8 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={prevStory}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                type="button"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">
                  {locale === 'es' ? 'Anterior' : 'Previous'} {successStories[(currentStory - 1 + successStories.length) % successStories.length].restaurantName}
                </span>
              </button>

              <div className="flex space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer hover:scale-110 ${
                      index === currentStory ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    type="button"
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                type="button"
              >
                <span className="text-sm">
                  {locale === 'es' ? 'Siguiente' : 'Next'} {successStories[(currentStory + 1) % successStories.length].restaurantName}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection
