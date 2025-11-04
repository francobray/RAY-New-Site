'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface SuccessCarouselProps {
  locale: Locale
}

interface SuccessStory {
  id: number
  ownerName: string
  restaurantName: string
  metric: string
  image: string
  bgGradient: string
  slug: string
}

// Translations for success stories
const getSuccessStoryTranslations = (locale: Locale): Record<string, { period: string; description: string }> => ({
  'chimba-miami': {
    period: locale === 'es' ? 'aumento en direcciones de Google Maps' : 'increase in Google Maps directions',
    description: locale === 'es' 
      ? 'Cómo Chimba Miami aumentó las direcciones de Google Maps en 215% y el tráfico peatonal en 46%'
      : 'How Chimba Miami increased Google Maps directions by 215% and foot traffic by 46%'
  },
  'temple-craft-wynwood': {
    period: locale === 'es' ? 'aumento en visibilidad local' : 'increase in local visibility',
    description: locale === 'es'
      ? 'Cómo Temple Craft Wynwood logró un aumento del 259% en visitas de Google Maps y 66% más de walk-ins'
      : 'How Temple Craft Wynwood achieved 259% increase in Google Maps visits and 66% more walk-ins'
  },
  'havana-1957': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Havana 1957 elevó su auténtica experiencia gastronómica cubana con marketing digital'
      : 'How Havana 1957 elevated their authentic Cuban dining experience with digital marketing'
  },
  'oh-mexico': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Oh! Mexico se destacó por su auténtica cocina mexicana en un mercado competitivo'
      : 'How Oh! Mexico stood out for authentic Mexican cuisine in a competitive market'
  },
  'mercato-della-pescheria': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Mercato Della Pescheria se convirtió en el destino premium de mariscos italianos'
      : 'How Mercato Della Pescheria became the premium Italian seafood destination'
  },
  'barsecco': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Barsecco se convirtió en el destino premium para cócteles artesanales italianos'
      : 'How Barsecco became the premier destination for Italian artisanal cocktails'
  },
  'salty-flame': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Salty Flame se convirtió en el destino de referencia para cocina a la parrilla moderna'
      : 'How Salty Flame became the go-to destination for modern grilled cuisine'
  },
  'paperfish': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Paperfish se convirtió en la referencia para gastronomía de mariscos sostenibles'
      : 'How Paperfish became the reference for sustainable seafood dining'
  },
  'marabu': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Marabu se convirtió en el destino premium para cocina fusión caribeña'
      : 'How Marabu became the premium destination for Caribbean fusion cuisine'
  },
  'cortadito-cafe': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Cortadito Cafe se convirtió en el destino de referencia para café cubano auténtico'
      : 'How Cortadito Cafe became the reference destination for authentic Cuban coffee'
  },
  'havanna': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo Havanna modernizó su presencia digital manteniendo la tradición'
      : 'How Havanna modernized their digital presence while maintaining tradition'
  },
  'craft': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo CRAFT construyó una comunidad alrededor de su cerveza artesanal'
      : 'How CRAFT built a community around their artisanal beer'
  },
  'wingsfc': {
    period: locale === 'es' ? 'aumento de ingresos mensuales' : 'monthly revenue increase',
    description: locale === 'es'
      ? 'Cómo WingsFC maximizó los ingresos en días de partido y creó el destino definitivo para fanáticos'
      : 'How WingsFC maximized game day revenue and created the ultimate sports fan destination'
  },
  'dolcezza': {
    period: locale === 'es' ? 'crecimiento mensual' : 'monthly growth',
    description: locale === 'es'
      ? 'Cómo Dolcezza aumentó los ingresos mensuales a través de estrategias de marketing dirigidas'
      : 'How Dolcezza increased monthly revenue through targeted marketing strategies'
  },
  'almacen-de-pizzas': {
    period: locale === 'es' ? 'aumento de pedidos de delivery' : 'delivery orders increase',
    description: locale === 'es'
      ? 'Cómo Almacen de Pizzas transformó su negocio de delivery reduciendo comisiones de terceros'
      : 'How Almacen de Pizzas transformed their delivery business cutting third-party commissions'
  },
  'isla-bar': {
    period: locale === 'es' ? 'aumento de reservas online' : 'online bookings increase',
    description: locale === 'es'
      ? 'Cómo Isla Bar unificó su imperio de restaurantes con gestión centralizada de reservas'
      : 'How Isla Bar unified their restaurant empire with centralized booking management'
  },
  'la-parolaccia': {
    period: locale === 'es' ? 'aumento de visibilidad en Google Maps' : 'Google Maps visibility increase',
    description: locale === 'es'
      ? 'Cómo La Parolaccia se convirtió en el restaurante italiano favorito del barrio'
      : 'How La Parolaccia became the neighborhood\'s favorite Italian restaurant'
  },
  'libertino-cafe': {
    period: locale === 'es' ? 'aumento de tráfico matutino' : 'morning traffic increase',
    description: locale === 'es'
      ? 'Cómo Libertino Cafe se convirtió en el lugar favorito del barrio por las mañanas'
      : 'How Libertino Cafe became the neighborhood\'s favorite morning spot'
  },
  'cerveza-patagonia': {
    period: locale === 'es' ? 'aumento de reservas para eventos' : 'event bookings increase',
    description: locale === 'es'
      ? 'Cómo Cerveza Patagonia transformó su sala de degustación en el destino premium para eventos'
      : 'How Cerveza Patagonia transformed their taproom into the premier event destination'
  },
  'karne-garibaldi': {
    period: locale === 'es' ? 'aumento de rotación de mesas' : 'table turnover increase',
    description: locale === 'es'
      ? 'Cómo Karne Garibaldi optimizó su legendario modelo de servicio rápido'
      : 'How Karne Garibaldi optimized their legendary fast-service model'
  },
  'la-guitarrita': {
    period: locale === 'es' ? 'aumento de pedidos de delivery' : 'delivery orders increase',
    description: locale === 'es'
      ? 'Cómo La Guitarrita expandió su alcance con pedidos por WhatsApp y catering'
      : 'How La Guitarrita expanded their reach with WhatsApp ordering and catering'
  },
  'le-pain-quotidien': {
    period: locale === 'es' ? 'aumento de reservas online' : 'online bookings increase',
    description: locale === 'es'
      ? 'Cómo Le Pain Quotidien unificó su red de cafés con lealtad multi-local'
      : 'How Le Pain Quotidien unified their cafe network with cross-location loyalty'
  },
  'la-panera-rosa': {
    period: locale === 'es' ? 'aumento de pedidos de desayuno' : 'breakfast orders increase',
    description: locale === 'es'
      ? 'Cómo La Panera Rosa construyó un próspero negocio matutino con app móvil de marca'
      : 'How La Panera Rosa built a thriving morning business with branded mobile app'
  },
  'ninina': {
    period: locale === 'es' ? 'aumento de pedidos de almuerzo' : 'lunch orders increase',
    description: locale === 'es'
      ? 'Cómo Ninina aprovechó el lucrativo mercado de almuerzos corporativos'
      : 'How Ninina tapped into the lucrative corporate lunch market'
  },
  'pasta-rossa': {
    period: locale === 'es' ? 'aumento de reservas' : 'reservation increase',
    description: locale === 'es'
      ? 'Cómo Pasta Rossa se convirtió en el destino de referencia para pasta italiana'
      : 'How Pasta Rossa became the go-to Italian pasta destination'
  },
})

// Base success stories data
const getSuccessStories = (): SuccessStory[] => [
  {
    id: 1,
    ownerName: 'Franco Yametti',
    restaurantName: 'Chimba Miami',
    metric: '215%',
    image: '/images/success-stories/Chimba_Miami_Celebrating.jpeg',
    bgGradient: 'from-red-600 to-red-700',
    slug: 'chimba-miami'
  },
  {
    id: 2,
    ownerName: 'Juan Ignacio Chereminiano', 
    restaurantName: 'Temple Craft Wynwood',
    metric: '259%',
    image: '/images/success-stories/Temple_Team.jpeg',
    bgGradient: 'from-blue-600 to-blue-700',
    slug: 'temple-craft-wynwood'
  },
  {
    id: 3,
    ownerName: 'Havana 1957',
    restaurantName: 'Havana 1957',
    metric: '+$58,000',
    image: '/images/success-stories/Havana-1957.jpg',
    bgGradient: 'from-red-500 to-orange-700',
    slug: 'havana-1957'
  },
  {
    id: 4,
    ownerName: 'Oh! Mexico',
    restaurantName: 'Oh! Mexico',
    metric: '+$42,000',
    image: '/images/success-stories/oh!mexico.webp',
    bgGradient: 'from-green-500 to-emerald-700',
    slug: 'oh-mexico'
  },
  {
    id: 5,
    ownerName: 'Mercato Della Pescheria',
    restaurantName: 'Mercato Della Pescheria',
    metric: '+$65,000',
    image: '/images/success-stories/mercato.jpg',
    bgGradient: 'from-blue-600 to-cyan-700',
    slug: 'mercato-della-pescheria'
  },
  {
    id: 6,
    ownerName: 'Barsecco',
    restaurantName: 'Barsecco',
    metric: '+$52,000',
    image: '/images/success-stories/barsecco.jpg',
    bgGradient: 'from-purple-600 to-pink-700',
    slug: 'barsecco'
  },
  {
    id: 7,
    ownerName: 'Salty Flame',
    restaurantName: 'Salty Flame',
    metric: '+$78,000',
    image: '/images/success-stories/salty-flame.jpeg',
    bgGradient: 'from-orange-600 to-red-700',
    slug: 'salty-flame'
  },
  {
    id: 8,
    ownerName: 'Paperfish',
    restaurantName: 'Paperfish',
    metric: '+$92,000',
    image: '/images/success-stories/Paperfish.jpeg',
    bgGradient: 'from-cyan-600 to-blue-700',
    slug: 'paperfish'
  },
  {
    id: 9,
    ownerName: 'Marabu',
    restaurantName: 'Marabu',
    metric: '+$68,000',
    image: '/images/success-stories/Marabu.jpg',
    bgGradient: 'from-emerald-600 to-teal-700',
    slug: 'marabu'
  },
  {
    id: 10,
    ownerName: 'Cortadito Cafe',
    restaurantName: 'Cortadito Cafe',
    metric: '+$82,000',
    image: '/images/success-stories/Cortadito.png',
    bgGradient: 'from-amber-600 to-orange-600',
    slug: 'cortadito-cafe'
  },
  {
    id: 11,
    ownerName: 'Havanna',
    restaurantName: 'Havanna',
    metric: '+$32,000',
    image: '/images/success-stories/Havanna.png',
    bgGradient: 'from-amber-500 to-orange-700',
    slug: 'havanna'
  },
  {
    id: 12,
    ownerName: 'CRAFT Brewery Team',
    restaurantName: 'CRAFT',
    metric: '+$28,000',
    image: '/images/success-stories/CRAFT.webp',
    bgGradient: 'from-indigo-500 to-purple-700',
    slug: 'craft'
  },
  {
    id: 13,
    ownerName: 'WingsFC Team',
    restaurantName: 'WingsFC',
    metric: '+$35,000',
    image: '/images/success-stories/WingsFC.png',
    bgGradient: 'from-blue-500 to-red-700',
    slug: 'wingsfc'
  },
  {
    id: 14,
    ownerName: 'Violeta Edelman',
    restaurantName: 'Dolcezza',
    metric: '+$8,000',
    image: '/images/success-stories/Dolcezza.png',
    bgGradient: 'from-purple-500 to-purple-700',
    slug: 'dolcezza'
  },
  {
    id: 15,
    ownerName: 'Management Team',
    restaurantName: 'Almacen de Pizzas',
    metric: '247%',
    image: '/images/success-stories/Almacen-de-pizzas.webp',
    bgGradient: 'from-red-500 to-orange-700',
    slug: 'almacen-de-pizzas'
  },
  {
    id: 16,
    ownerName: 'Management Team',
    restaurantName: 'Isla Bar',
    metric: '312%',
    image: '/images/success-stories/Isla-Bar.webp',
    bgGradient: 'from-indigo-500 to-blue-700',
    slug: 'isla-bar'
  },
  {
    id: 17,
    ownerName: 'Restaurant Management',
    restaurantName: 'La Parolaccia',
    metric: '198%',
    image: '/images/success-stories/parolaccia.webp',
    bgGradient: 'from-green-500 to-emerald-700',
    slug: 'la-parolaccia'
  },
  {
    id: 18,
    ownerName: 'Management Team',
    restaurantName: 'Libertino Cafe',
    metric: '276%',
    image: '/images/success-stories/Libertino_Cafe.webp',
    bgGradient: 'from-amber-500 to-yellow-700',
    slug: 'libertino-cafe'
  },
  {
    id: 19,
    ownerName: 'Management Team',
    restaurantName: 'Cerveza Patagonia',
    metric: '334%',
    image: '/images/success-stories/patagonia.webp',
    bgGradient: 'from-blue-500 to-cyan-700',
    slug: 'cerveza-patagonia'
  },
  {
    id: 20,
    ownerName: 'Management Team',
    restaurantName: 'Karne Garibaldi',
    metric: '289%',
    image: '/images/success-stories/Karne-Garibaldi.webp',
    bgGradient: 'from-red-500 to-red-700',
    slug: 'karne-garibaldi'
  },
  {
    id: 21,
    ownerName: 'Management Team',
    restaurantName: 'La Guitarrita',
    metric: '267%',
    image: '/images/success-stories/la-guitarrita.webp',
    bgGradient: 'from-yellow-500 to-orange-700',
    slug: 'la-guitarrita'
  },
  {
    id: 22,
    ownerName: 'Management Team',
    restaurantName: 'Le Pain Quotidien',
    metric: '223%',
    image: '/images/success-stories/Lepain.webp',
    bgGradient: 'from-amber-500 to-brown-700',
    slug: 'le-pain-quotidien'
  },
  {
    id: 23,
    ownerName: 'Management Team',
    restaurantName: 'La Panera Rosa',
    metric: '256%',
    image: '/images/success-stories/Panera_Rosa.jpeg',
    bgGradient: 'from-pink-500 to-rose-700',
    slug: 'la-panera-rosa'
  },
  {
    id: 24,
    ownerName: 'Management Team',
    restaurantName: 'Ninina',
    metric: '294%',
    image: '/images/success-stories/Ninina.webp',
    bgGradient: 'from-purple-500 to-indigo-700',
    slug: 'ninina'
  },
  {
    id: 25,
    ownerName: 'Management Team',
    restaurantName: 'Pasta Rossa',
    metric: '185%',
    image: '/images/success-stories/Pasta-Rossa.webp',
    bgGradient: 'from-red-500 to-green-700',
    slug: 'pasta-rossa'
  },
]

const SuccessCarousel: React.FC<SuccessCarouselProps> = ({ locale }) => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const t = useTranslations(locale)
  const translations = getSuccessStoryTranslations(locale)
  const successStories = getSuccessStories()

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
  }, [isAutoPlaying, successStories.length])

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
        className="relative w-full pb-8"
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
              const linkHref = `/${locale}/case-studies/${story.slug}`
              const storyTranslation = translations[story.slug] || { period: '', description: '' }
              
              return (
                <Link
                  key={`${story.id}-${index}`}
                  href={linkHref}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer block flex-shrink-0 w-80"
                >
                  {/* Background Image */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={story.image}
                      alt={`${story.ownerName} - ${story.restaurantName}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
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
                            {storyTranslation.period}
                          </div>
                        </div>
                        <p className="text-xs font-medium leading-tight opacity-95">
                          {storyTranslation.description}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40">
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
