'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './shared/BaseButton'
import { type Locale } from '@/lib/i18n'

interface SuccessCarouselProps {
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
    ownerName: 'Ivan Castaño',
    title: 'CEO & Founder - Chef Burger', 
    restaurantName: 'Chef Burger',
    metric: '+$8,000',
    period: 'monthly revenue increase',
    description: 'How Chef Burger increased monthly revenue through RAY\'s marketing platform',
    image: '/images/success-stories/Chef_burguer.jpeg',
    bgGradient: 'from-emerald-500 to-emerald-700',
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
    image: '/images/success-stories/WingsFC.png',
    bgGradient: 'from-blue-500 to-red-700',
    slug: 'wingsfc'
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
    bgGradient: 'from-purple-500 to-purple-700',
    slug: 'dolcezza'
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
    bgGradient: 'from-emerald-500 to-teal-700',
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
    image: '/images/success-stories/Green-Eat.jpg',
    bgGradient: 'from-green-500 to-emerald-700',
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
    image: '/images/success-stories/Havanna.png',
    bgGradient: 'from-amber-500 to-orange-700',
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
    image: '/images/success-stories/CRAFT.webp',
    bgGradient: 'from-indigo-500 to-purple-700',
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
    image: '/images/success-stories/La-Birra-Bar.jpg',
    bgGradient: 'from-amber-500 to-orange-700',
    slug: 'la-birra-bar'
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
    bgGradient: 'from-amber-600 to-amber-700',
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
    bgGradient: 'from-teal-500 to-teal-700',
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
    bgGradient: 'from-indigo-500 to-indigo-700',
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
    bgGradient: 'from-amber-500 to-amber-700',
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
    bgGradient: 'from-cyan-500 to-cyan-700',
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
    bgGradient: 'from-rose-500 to-rose-700',
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
    bgGradient: 'from-violet-500 to-violet-700',
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
    bgGradient: 'from-lime-500 to-lime-700',
    slug: null
  }
]

const SuccessCarousel: React.FC<SuccessCarouselProps> = ({ locale }) => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
            Trusted by thousands of restaurants
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
                      {/* Top - Owner Info */}
                      <div>
                        <h3 className="font-semibold text-sm mb-1 leading-tight">
                          {story.ownerName}
                        </h3>
                        <p className="text-xs opacity-90 leading-tight">
                          {story.title}
                        </p>
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
            View All Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SuccessCarousel