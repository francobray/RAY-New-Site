'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './shared/BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface SuccessCarouselProps {
  locale: Locale
}

// Only include success stories that have dedicated case study pages (with slugs)
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
    bgGradient: 'from-red-600 to-red-700',
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
    bgGradient: 'from-blue-600 to-blue-700',
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
    bgGradient: 'from-emerald-500 to-teal-700',
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
    bgGradient: 'from-green-500 to-emerald-700',
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
    bgGradient: 'from-amber-500 to-orange-700',
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
    bgGradient: 'from-indigo-500 to-purple-700',
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
    bgGradient: 'from-blue-500 to-red-700',
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
    bgGradient: 'from-purple-500 to-purple-700',
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
    bgGradient: 'from-amber-500 to-orange-700',
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
    bgGradient: 'from-red-500 to-orange-700',
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
    bgGradient: 'from-indigo-500 to-blue-700',
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
    bgGradient: 'from-green-500 to-emerald-700',
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
    bgGradient: 'from-amber-500 to-yellow-700',
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
    bgGradient: 'from-blue-500 to-cyan-700',
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
    bgGradient: 'from-red-500 to-red-700',
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
    bgGradient: 'from-yellow-500 to-orange-700',
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
    bgGradient: 'from-amber-500 to-brown-700',
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
    image: '/images/success-stories/Panera_Rosa.jpeg',
    bgGradient: 'from-pink-500 to-rose-700',
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
    bgGradient: 'from-purple-500 to-indigo-700',
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
    bgGradient: 'from-red-500 to-green-700',
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
    bgGradient: 'from-green-500 to-teal-700',
    slug: 'tea-connection'
  }
].filter(story => story.slug !== null) // Only include stories with dedicated pages

const SuccessCarousel: React.FC<SuccessCarouselProps> = ({ locale }) => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const t = useTranslations(locale)

  // Duplicate stories for seamless loop
  const duplicatedStories = [...successStories, ...successStories]

  useEffect(() => {
    if (!isAutoPlaying) return

    const scrollContainer = document.getElementById('continuous-carousel')
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    const cardWidth = 320 // approximate card width including gap
    const totalWidth = cardWidth * successStories.length

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset position seamlessly when we've scrolled through one complete set
      if (scrollPosition >= totalWidth) {
        scrollPosition = scrollPosition - totalWidth
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      
      if (isAutoPlaying) {
        requestAnimationFrame(animate)
      }
    }

    const animationId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isAutoPlaying])

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.SUCCESS_CAROUSEL.TRUSTED_BY}
          </h2>
        </div>
      </div>

      {/* Continuous Carousel */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden">
          <div 
            id="continuous-carousel"
            className="flex gap-4 px-4"
            style={{ width: `${duplicatedStories.length * 320}px` }}
          >
            {duplicatedStories.map((story, index) => {
              const linkHref = story.slug 
                ? `/${locale}/case-studies/${story.slug}`
                : `/${locale}/case-studies`
              
              return (
                <Link
                  key={`${story.id}-${index}`}
                  href={linkHref}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer block flex-shrink-0 w-80"
                >
                  {/* Background Image */}
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={story.image}
                      alt={`${story.ownerName} - ${story.restaurantName}`}
                      fill
                      sizes="320px"
                      className="object-cover"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                      {/* Top - Restaurant Name */}
                      <div>
                        <h3 className="font-semibold text-sm mb-1 leading-tight">
                          {story.restaurantName}
                        </h3>
                      </div>
                      
                      {/* Bottom - Results */}
                      <div>
                        <div className="mb-2">
                          <div className="text-2xl font-bold mb-1">
                            {story.metric}
                          </div>
                          <div className="text-xs opacity-90">
                            {story.period}
                          </div>
                        </div>
                        <p className="text-xs font-medium leading-tight opacity-95">
                          {story.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href={`/${locale}/case-studies`}
            data-analytics="success_carousel"
            aria-label="View all restaurant success stories and case studies"
          >
            {t.SUCCESS_CAROUSEL.VIEW_ALL_STORIES}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SuccessCarousel