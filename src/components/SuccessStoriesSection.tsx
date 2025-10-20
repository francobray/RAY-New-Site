'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface SuccessStoriesSectionProps {
  locale: Locale
}

// Only include success stories that have dedicated case study pages
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
    id: 4,
    ownerName: 'Green Eat Team',
    title: 'Sustainable Restaurant Owners',
    restaurantName: 'Green Eat',
    metric: '+$18,000',
    period: 'monthly revenue increase',
    description: 'How Green Eat connected with environmentally conscious customers',
    image: '/images/success-stories/Green-Eat.jpg',
    slug: 'green-eat'
  },
  {
    id: 5,
    ownerName: 'Havanna',
    title: 'Coffee Chain Leadership',
    restaurantName: 'Havanna',
    metric: '+$32,000',
    period: 'monthly revenue increase',
    description: 'How Havanna modernized their digital presence while maintaining tradition',
    image: '/images/success-stories/Havanna.png',
    slug: 'havanna'
  },
  {
    id: 6,
    ownerName: 'CRAFT Brewery Team',
    title: 'Craft Brewery Owners',
    restaurantName: 'CRAFT',
    metric: '+$28,000',
    period: 'monthly revenue increase',
    description: 'How CRAFT built a community around their artisanal beer',
    image: '/images/success-stories/CRAFT.webp',
    slug: 'craft'
  },
  {
    id: 7,
    ownerName: 'WingsFC Team',
    title: 'Owners - WingsFC Sports Bar',
    restaurantName: 'WingsFC',
    metric: '+$35,000',
    period: 'monthly revenue increase',
    description: 'How WingsFC maximized game day revenue and created the ultimate sports fan destination',
    image: '/images/success-stories/WingsFC.png',
    slug: 'wingsfc'
  },
  {
    id: 8,
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
    id: 9,
    ownerName: 'La Birra Bar Team',
    title: 'Craft Beer Bar Owners',
    restaurantName: 'La Birra Bar',
    metric: '+$22,000',
    period: 'monthly revenue increase',
    description: 'How La Birra Bar created a community of craft beer lovers',
    image: '/images/success-stories/La-Birra-Bar.jpg',
    slug: 'la-birra-bar'
  },
  {
    id: 10,
    ownerName: 'Management Team',
    title: 'Almacen de Pizzas',
    restaurantName: 'Almacen de Pizzas',
    metric: '247%',
    period: 'delivery orders increase',
    description: 'How Almacen de Pizzas transformed their delivery business cutting third-party commissions',
    image: '/images/success-stories/Almacen-de-pizzas.webp',
    slug: 'almacen-de-pizzas'
  },
  {
    id: 11,
    ownerName: 'Management Team',
    title: 'Efes MG Group',
    restaurantName: 'Efes MG Group',
    metric: '312%',
    period: 'online bookings increase',
    description: 'How Efes MG Group unified their restaurant empire with centralized booking management',
    image: '/images/success-stories/Restaurant-photo-ray.jpeg',
    slug: 'efes-mg-group'
  },
  {
    id: 12,
    ownerName: 'Restaurant Management',
    title: 'La Parolaccia',
    restaurantName: 'La Parolaccia',
    metric: '198%',
    period: 'Google Maps visibility increase',
    description: 'How La Parolaccia became the neighborhood\'s favorite Italian restaurant',
    image: '/images/success-stories/parolaccia.webp',
    slug: 'la-parolaccia'
  },
  {
    id: 13,
    ownerName: 'Management Team',
    title: 'Libertino Cafe',
    restaurantName: 'Libertino Cafe',
    metric: '276%',
    period: 'morning traffic increase',
    description: 'How Libertino Cafe became the neighborhood\'s favorite morning spot',
    image: '/images/success-stories/Juan_valdez.jpg',
    slug: 'libertino-cafe'
  },
  {
    id: 14,
    ownerName: 'Management Team',
    title: 'Cerveza Patagonia',
    restaurantName: 'Cerveza Patagonia',
    metric: '334%',
    period: 'event bookings increase',
    description: 'How Cerveza Patagonia transformed their taproom into the premier event destination',
    image: '/images/success-stories/patagonia.webp',
    slug: 'cerveza-patagonia'
  },
  {
    id: 15,
    ownerName: 'Management Team',
    title: 'Karne Garibaldi',
    restaurantName: 'Karne Garibaldi',
    metric: '289%',
    period: 'table turnover increase',
    description: 'How Karne Garibaldi optimized their legendary fast-service model',
    image: '/images/success-stories/Chef_burguer.jpeg',
    slug: 'karne-garibaldi'
  },
  {
    id: 16,
    ownerName: 'Management Team',
    title: 'La Guitarrita',
    restaurantName: 'La Guitarrita',
    metric: '267%',
    period: 'delivery orders increase',
    description: 'How La Guitarrita expanded their reach with WhatsApp ordering and catering',
    image: '/images/success-stories/la-guitarrita.webp',
    slug: 'la-guitarrita'
  },
  {
    id: 17,
    ownerName: 'Management Team',
    title: 'Le Pain Quotidien',
    restaurantName: 'Le Pain Quotidien',
    metric: '223%',
    period: 'online bookings increase',
    description: 'How Le Pain Quotidien unified their cafe network with cross-location loyalty',
    image: '/images/success-stories/Dolcezza.png',
    slug: 'le-pain-quotidien'
  },
  {
    id: 18,
    ownerName: 'Management Team',
    title: 'La Panera Rosa',
    restaurantName: 'La Panera Rosa',
    metric: '256%',
    period: 'breakfast orders increase',
    description: 'How La Panera Rosa built a thriving morning business with branded mobile app',
    image: '/images/success-stories/Dolcezza.png',
    slug: 'la-panera-rosa'
  },
  {
    id: 19,
    ownerName: 'Management Team',
    title: 'Ninina',
    restaurantName: 'Ninina',
    metric: '294%',
    period: 'lunch orders increase',
    description: 'How Ninina tapped into the lucrative corporate lunch market',
    image: '/images/success-stories/Dolcezza.png',
    slug: 'ninina'
  },
  {
    id: 20,
    ownerName: 'Management Team',
    title: 'Pasta Rossa',
    restaurantName: 'Pasta Rossa',
    metric: '185%',
    period: 'reservation increase',
    description: 'How Pasta Rossa became the go-to Italian pasta destination',
    image: '/images/success-stories/Chef_burguer.jpeg',
    slug: 'pasta-rossa'
  },
  {
    id: 21,
    ownerName: 'Management Team',
    title: 'Tea Connection',
    restaurantName: 'Tea Connection',
    metric: '167%',
    period: 'afternoon traffic increase',
    description: 'How Tea Connection became the premier destination for tea and wellness',
    image: '/images/success-stories/tea-connection.jpg',
    slug: 'tea-connection'
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
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-sm text-ray-blue font-semibold mb-2 uppercase tracking-wider">
                  {locale === 'es' ? 'Historia de Éxito' : 'Success Story'}
                </div>
                <h2 className="text-3xl font-bold text-ray-dark-900 mb-4">
                  {currentData.restaurantName}
                </h2>
                <p className="text-ray-darkGray text-lg leading-relaxed mb-6">
                  {currentData.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-ray-blue mb-2">
                    {currentData.metric}
                  </div>
                  <div className="text-ray-darkGray font-medium">
                    {currentData.period}
                  </div>
                </div>
              </div>

              {/* Owner info */}
              <div className="mb-6">
                <div className="font-semibold text-ray-dark-900">
                  {currentData.ownerName}
                </div>
                <div className="text-ray-darkGray text-sm">
                  {currentData.title}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button
                    onClick={prevStory}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Previous story"
                  >
                    <ArrowLeft className="w-5 h-5 text-ray-dark-900" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Next story"
                  >
                    <ArrowRight className="w-5 h-5 text-ray-dark-900" />
                  </button>
                </div>

                <Link
                  href={linkHref}
                  className="inline-flex items-center px-6 py-3 bg-ray-blue text-white font-semibold rounded-lg hover:bg-ray-blue/90 transition-colors duration-200"
                >
                  {locale === 'es' ? 'Ver Historia Completa' : 'View Full Story'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <Link href={linkHref}>
                  <Image
                    src={currentData.image}
                    alt={`${currentData.restaurantName} success story`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="px-8 pb-8">
            <div className="flex space-x-2 justify-center">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentStory ? 'bg-ray-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection