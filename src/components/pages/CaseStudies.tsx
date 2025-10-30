'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Star, MapPin, Eye, Users, Award } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useTranslations } from '../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})

// Function to get localized case studies data
const getCaseStudiesData = (locale: Locale, t: any) => [
  {
    id: 'temple-craft',
    slug: 'temple-craft-wynwood',
    name: 'Temple Craft Wynwood',
    location: t.CASE_STUDIES_DATA.LOCATIONS.WYNWOOD_MIAMI,
    industry: t.CASE_STUDIES_DATA.INDUSTRIES.CRAFT_BEER_NIGHTLIFE,
    image: '/images/success-stories/Temple_Team.jpeg',
    keyMetrics: [
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.GOOGLE_MAPS_VIEWS, value: '+259%', icon: Eye },
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.WALK_INS, value: '+66%', icon: Users },
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.GOOGLE_RATING, value: '4.8★', icon: Star }
    ],
    headline: t.CASE_STUDIES_DATA.HEADLINES.TEMPLE_CRAFT,
    description: locale === 'es' ? 'Temple Craft escaló del puesto #15 al #1 en Google Maps mientras aumentaba dramáticamente el tráfico peatonal y la visibilidad.' : 'Temple Craft climbed from ranking #15 to #1 on Google Maps while dramatically increasing foot traffic and discovery.',
    tags: locale === 'es' ? ['SEO Local', 'Listados', 'Reseñas'] : ['Local SEO', 'Listings', 'Reviews'],
    testimonial: {
      text: locale === 'es' ? 'Nuestras visitas en Google Maps se dispararon 259%, y el tráfico peatonal aumentó 66%.' : 'Our Google Maps visits skyrocketed by 259%, and foot traffic increased by 66%.',
      author: 'Juan Ignacio Chereminiano',
      title: 'CEO'
    }
  },
  {
    id: 'chimba-miami',
    slug: 'chimba-miami',
    name: 'Chimba Miami',
    location: t.CASE_STUDIES_DATA.LOCATIONS.MIAMI_FL,
    industry: t.CASE_STUDIES_DATA.INDUSTRIES.NIGHTLIFE_DINING,
    image: '/images/success-stories/Chimba_Miami_Celebrating.jpeg',
    keyMetrics: [
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.GOOGLE_MAPS_DIRECTIONS, value: '+215%', icon: Eye },
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.WALK_INS, value: '+46%', icon: Users },
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.GOOGLE_RATING, value: '4.7★', icon: Star }
    ],
    headline: t.CASE_STUDIES_DATA.HEADLINES.CHIMBA_MIAMI,
    description: locale === 'es' ? 'Chimba escaló de un ranking bajo a máxima visibilidad en Google Maps, atrayendo más tráfico peatonal y engagement local.' : 'Chimba climbed from low search ranking to top visibility on Google Maps, bringing in more foot traffic and local engagement.',
    tags: locale === 'es' ? ['SEO Local', 'Listados', 'Reseñas'] : ['Local SEO', 'Listings', 'Reviews'],
    testimonial: {
      text: locale === 'es' ? 'Nuestras visitas en Google Maps se dispararon 215%, y el tráfico peatonal aumentó 46%.' : 'Our Google Maps visits skyrocketed by 215%, and foot traffic increased by 46%.',
      author: 'Franco Yametti',
      title: 'CEO'
    }
  },
  {
    id: 've-hospitality',
    slug: 've-hospitality',
    name: 'V&E Hospitality Group',
    location: t.CASE_STUDIES_DATA.LOCATIONS.MULTIPLE_LOCATIONS,
    industry: t.CASE_STUDIES_DATA.INDUSTRIES.RESTAURANT_GROUP,
    image: '/images/success-stories/Restaurant-photo-ray.jpeg',
    keyMetrics: [
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.MONTHLY_REVENUE, value: '+$45K', icon: TrendingUp },
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.BOOKINGS_GROWTH, value: '+180%', icon: Users },
      { label: t.CASE_STUDIES_DATA.METRIC_LABELS.LOCAL_VISIBILITY, value: '+95%', icon: Eye }
    ],
    headline: t.CASE_STUDIES_DATA.HEADLINES.VE_HOSPITALITY,
    description: locale === 'es' ? 'V&E Hospitality Group unificó su estrategia de marketing a través de múltiples conceptos de restaurantes, logrando crecimiento consistente y reconocimiento de marca.' : 'V&E Hospitality Group unified their marketing strategy across multiple restaurant concepts, achieving consistent growth and brand recognition.',
    tags: locale === 'es' ? ['Multi-ubicación', 'Marketing Unificado', 'Gestión de Marca'] : ['Multi-location', 'Unified Marketing', 'Brand Management'],
    testimonial: {
      text: locale === 'es' ? 'RAY nos permitió unificar nuestro marketing y lograr resultados consistentes en todas nuestras ubicaciones.' : 'RAY allowed us to unify our marketing and achieve consistent results across all our locations.',
      author: 'V&E Hospitality Group',
      title: locale === 'es' ? 'Grupo Restaurantero' : 'Restaurant Group'
    }
  },
  {
    id: 'green-eat',
    slug: 'green-eat',
    name: 'Green Eat',
    location: 'Eco-Conscious Market',
    industry: 'Sustainable Restaurant',
    image: '/images/success-stories/Green-Eat.jpg',
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
    image: '/images/success-stories/Havanna.png',
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
      author: 'Havanna',
      title: 'Coffee Chain'
    }
  },
  {
    id: 'craft',
    slug: 'craft',
    name: 'CRAFT',
    location: 'Local Brewery Scene',
    industry: 'Craft Brewery',
    image: '/images/success-stories/CRAFT.webp',
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
    image: '/images/success-stories/WingsFC.png',
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
    image: '/images/success-stories/La-Birra-Bar.jpg',
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
  },
  {
    id: 'almacen-de-pizzas',
    slug: 'almacen-de-pizzas',
    name: 'Almacen de Pizzas',
    location: 'Pizza Market',
    industry: 'Pizzeria',
    image: '/images/success-stories/Almacen-de-pizzas.webp',
    keyMetrics: [
      { label: 'Delivery Orders', value: '+247%', icon: TrendingUp },
      { label: 'Online Visibility', value: '+89%', icon: Eye },
      { label: 'Google Rating', value: '4.9★', icon: Star }
    ],
    headline: 'Zero-Commission Delivery Success',
    description: 'Almacen de Pizzas transformed their delivery business by cutting third-party commissions and building a thriving direct ordering channel.',
    tags: ['Zero Commission', 'Delivery Optimization', 'Direct Orders'],
    testimonial: {
      text: 'Direct delivery orders increased by 247%, and we\'re saving over $8,000 monthly on commissions.',
      author: 'Management Team',
      title: 'Almacen de Pizzas'
    }
  },
  {
    id: 'isla-bar',
    slug: 'isla-bar',
    name: 'Isla Bar',
    location: 'Multiple Locations',
    industry: 'Restaurant Group',
    image: '/images/success-stories/Isla-Bar.webp',
    keyMetrics: [
      { label: 'Online Bookings', value: '+312%', icon: Users },
      { label: 'Walk-ins', value: '+156%', icon: TrendingUp },
      { label: 'Average Rating', value: '4.8★', icon: Star }
    ],
    headline: 'Multi-Location Booking Excellence',
    description: 'Isla Bar unified their restaurant empire with centralized booking management across 8 locations.',
    tags: ['Multi-Location', 'Unified Booking', 'Restaurant Group'],
    testimonial: {
      text: 'Online bookings increased by 312% across all locations. Having everything unified has been a game-changer.',
      author: 'Management Team',
      title: 'Isla Bar'
    }
  },
  {
    id: 'la-parolaccia',
    slug: 'la-parolaccia',
    name: 'La Parolaccia',
    location: 'Italian Cuisine Market',
    industry: 'Italian Restaurant',
    image: '/images/success-stories/parolaccia.webp',
    keyMetrics: [
      { label: 'Google Maps Visibility', value: '+198%', icon: Eye },
      { label: 'Reservations', value: '+127%', icon: Users },
      { label: 'Google Rating', value: '4.7★', icon: Star }
    ],
    headline: 'Dominating Italian Cuisine Searches',
    description: 'La Parolaccia became the neighborhood\'s favorite Italian restaurant by dominating local search results.',
    tags: ['Local SEO', 'Italian Cuisine', 'Reservations'],
    testimonial: {
      text: 'Google Maps visibility increased by 198%, and reservations grew by 127%. We\'re fully booked most nights!',
      author: 'Restaurant Management',
      title: 'La Parolaccia'
    }
  },
  {
    id: 'libertino-cafe',
    slug: 'libertino-cafe',
    name: 'Libertino Cafe',
    location: 'Coffee Market',
    industry: 'Cafe',
    image: '/images/success-stories/Libertino_Cafe.webp',
    keyMetrics: [
      { label: 'Morning Traffic', value: '+276%', icon: Users },
      { label: 'Loyalty Members', value: '+145%', icon: TrendingUp },
      { label: 'Google Rating', value: '4.9★', icon: Star }
    ],
    headline: 'Morning Coffee Destination',
    description: 'Libertino Cafe became the neighborhood\'s favorite morning spot with smart loyalty programs and mobile ordering.',
    tags: ['Coffee Shop', 'Loyalty Program', 'Mobile Ordering'],
    testimonial: {
      text: 'Morning traffic increased by 276%, and we now have over 1,200 loyalty members.',
      author: 'Management Team',
      title: 'Libertino Cafe'
    }
  },
  {
    id: 'cerveza-patagonia',
    slug: 'cerveza-patagonia',
    name: 'Cerveza Patagonia',
    location: 'Craft Beer Scene',
    industry: 'Craft Brewery',
    image: '/images/success-stories/patagonia.webp',
    keyMetrics: [
      { label: 'Event Bookings', value: '+334%', icon: Users },
      { label: 'Taproom Visits', value: '+218%', icon: TrendingUp },
      { label: 'Google Rating', value: '4.8★', icon: Star }
    ],
    headline: 'Premier Craft Beer Event Venue',
    description: 'Cerveza Patagonia transformed their taproom into the premier event destination for craft beer celebrations.',
    tags: ['Event Management', 'Craft Beer', 'Venue Booking'],
    testimonial: {
      text: 'Event bookings skyrocketed by 334%, and we now host 10-12 events monthly.',
      author: 'Management Team',
      title: 'Cerveza Patagonia'
    }
  },
  {
    id: 'karne-garibaldi',
    slug: 'karne-garibaldi',
    name: 'Karne Garibaldi',
    location: 'Fast Service Market',
    industry: 'Fast Service Restaurant',
    image: '/images/success-stories/Karne-Garibaldi.webp',
    keyMetrics: [
      { label: 'Table Turnover', value: '+289%', icon: TrendingUp },
      { label: 'Reservations', value: '+195%', icon: Users },
      { label: 'Google Rating', value: '4.7★', icon: Star }
    ],
    headline: 'Fast Service Optimization',
    description: 'Karne Garibaldi optimized their legendary fast-service model with smart waitlist and reservation management.',
    tags: ['Fast Service', 'Waitlist Management', 'Table Optimization'],
    testimonial: {
      text: 'Table turnover increased by 289%. The digital waitlist eliminated walkouts completely!',
      author: 'Management Team',
      title: 'Karne Garibaldi'
    }
  },
  {
    id: 'la-guitarrita',
    slug: 'la-guitarrita',
    name: 'La Guitarrita',
    location: 'Mexican Cuisine Market',
    industry: 'Mexican Restaurant',
    image: '/images/success-stories/la-guitarrita.webp',
    keyMetrics: [
      { label: 'Delivery Orders', value: '+267%', icon: TrendingUp },
      { label: 'Catering Bookings', value: '+178%', icon: Users },
      { label: 'Google Rating', value: '4.8★', icon: Star }
    ],
    headline: 'Mexican Delivery & Catering Leader',
    description: 'La Guitarrita expanded their reach with WhatsApp ordering and built a thriving catering business.',
    tags: ['WhatsApp Orders', 'Catering', 'Delivery Optimization'],
    testimonial: {
      text: 'Direct delivery orders increased by 267%, and catering bookings grew by 178%.',
      author: 'Management Team',
      title: 'La Guitarrita'
    }
  },
  {
    id: 'le-pain-quotidien',
    slug: 'le-pain-quotidien',
    name: 'Le Pain Quotidien',
    location: 'Multiple Locations',
    industry: 'Bakery-Cafe Chain',
    image: '/images/success-stories/Lepain.webp',
    keyMetrics: [
      { label: 'Online Bookings', value: '+223%', icon: Users },
      { label: 'Loyalty Enrollment', value: '+168%', icon: TrendingUp },
      { label: 'Average Rating', value: '4.8★', icon: Star }
    ],
    headline: 'Unified Bakery-Cafe Experience',
    description: 'Le Pain Quotidien unified their cafe network with cross-location loyalty and centralized booking.',
    tags: ['Multi-Location', 'Loyalty Program', 'Unified Experience'],
    testimonial: {
      text: 'Online bookings increased by 223% across all locations. We\'ve created a true community around our brand!',
      author: 'Management Team',
      title: 'Le Pain Quotidien'
    }
  },
  {
    id: 'la-panera-rosa',
    slug: 'la-panera-rosa',
    name: 'La Panera Rosa',
    location: 'Bakery Market',
    industry: 'Bakery',
    image: '/images/success-stories/Panera_Rosa.jpeg',
    keyMetrics: [
      { label: 'Breakfast Orders', value: '+256%', icon: TrendingUp },
      { label: 'App Usage', value: '+189%', icon: Users },
      { label: 'App Rating', value: '4.9★', icon: Star }
    ],
    headline: 'Morning Bakery Digital Leader',
    description: 'La Panera Rosa built a thriving morning business with branded mobile app and order-ahead functionality.',
    tags: ['Mobile App', 'Breakfast Orders', 'Digital First'],
    testimonial: {
      text: 'Breakfast orders increased by 256%, and app usage grew by 189%. We\'ve become their daily morning ritual!',
      author: 'Management Team',
      title: 'La Panera Rosa'
    }
  },
  {
    id: 'ninina',
    slug: 'ninina',
    name: 'Ninina',
    location: 'Business Lunch Market',
    industry: 'Corporate Catering',
    image: '/images/success-stories/Ninina.webp',
    keyMetrics: [
      { label: 'Lunch Orders', value: '+294%', icon: TrendingUp },
      { label: 'Corporate Catering', value: '+172%', icon: Users },
      { label: 'Google Rating', value: '4.8★', icon: Star }
    ],
    headline: 'Corporate Lunch Champion',
    description: 'Ninina tapped into the lucrative corporate lunch market with dedicated catering tools and bulk ordering.',
    tags: ['Corporate Catering', 'Lunch Delivery', 'Business Orders'],
    testimonial: {
      text: 'Lunch orders increased by 294%. We now serve 15+ offices daily with recurring lunch orders.',
      author: 'Management Team',
      title: 'Ninina'
    }
  },
  {
    id: 'pasta-rossa',
    slug: 'pasta-rossa',
    name: 'Pasta Rossa',
    location: 'Italian Dining Market',
    industry: 'Italian Restaurant',
    image: '/images/success-stories/Pasta-Rossa.webp',
    keyMetrics: [
      { label: 'Reservations', value: '+278%', icon: Users },
      { label: 'Online Visibility', value: '+193%', icon: Eye },
      { label: 'Google Rating', value: '4.9★', icon: Star }
    ],
    headline: 'Premier Italian Dining Destination',
    description: 'Pasta Rossa filled their tables consistently with smart reservation management and Italian cuisine SEO.',
    tags: ['Reservations', 'Italian Cuisine', 'Table Optimization'],
    testimonial: {
      text: 'Reservations increased by 278%, and we\'re now fully booked most nights.',
      author: 'Management Team',
      title: 'Pasta Rossa'
    }
  },
  {
    id: 'rapanui',
    slug: 'rapanui',
    name: 'Rapanui',
    location: 'Ice Cream Market',
    industry: 'Sustainable Ice Cream',
    image: '/images/success-stories/rapanui.jpg',
    keyMetrics: [
      { label: 'Online Orders', value: '+305%', icon: TrendingUp },
      { label: 'App Downloads', value: '+245%', icon: Users },
      { label: 'App Rating', value: '4.9★', icon: Star }
    ],
    headline: 'Digital Ecosystem for Sustainable Brand',
    description: 'Rapanui built a thriving digital ecosystem with branded app and omnichannel ordering for their eco-conscious ice cream.',
    tags: ['Branded App', 'Sustainable', 'Digital Ecosystem'],
    testimonial: {
      text: 'Online orders increased by 305%, and our app has been downloaded over 12,000 times.',
      author: 'Management Team',
      title: 'Rapanui'
    }
  },
  {
    id: 'tea-connection',
    slug: 'tea-connection',
    name: 'Tea Connection',
    location: 'Tea House Market',
    industry: 'Tea House',
    image: '/images/success-stories/tea-connection.webp',
    keyMetrics: [
      { label: 'Afternoon Tea Bookings', value: '+234%', icon: Users },
      { label: 'Retail Sales', value: '+187%', icon: TrendingUp },
      { label: 'Google Rating', value: '4.9★', icon: Star }
    ],
    headline: 'Afternoon Tea Experience Destination',
    description: 'Tea Connection monetized their premium afternoon tea experience and built thriving retail tea sales online.',
    tags: ['Experience Booking', 'E-Commerce', 'Tea House'],
    testimonial: {
      text: 'Afternoon tea bookings increased by 234%, and retail tea sales grew by 187% through online orders.',
      author: 'Management Team',
      title: 'Tea Connection'
    }
  },
  {
    id: 'tostado',
    slug: 'tostado',
    name: 'Tostado',
    location: 'Breakfast Market',
    industry: 'Breakfast Restaurant',
    image: '/images/success-stories/Tostado-Cafe.webp',
    keyMetrics: [
      { label: 'Breakfast Delivery', value: '+318%', icon: TrendingUp },
      { label: 'Mobile Orders', value: '+226%', icon: Users },
      { label: 'Google Rating', value: '4.8★', icon: Star }
    ],
    headline: 'Breakfast Delivery Champion',
    description: 'Tostado became the go-to breakfast delivery choice with WhatsApp ordering and subscription breakfast plans.',
    tags: ['Breakfast Delivery', 'Mobile Orders', 'Subscriptions'],
    testimonial: {
      text: 'Breakfast orders increased by 318%. Our subscription breakfast program has over 500 daily customers.',
      author: 'Management Team',
      title: 'Tostado'
    }
  },
  {
    id: 'ypf-full',
    slug: 'ypf-full',
    name: 'YPF Full',
    location: 'Multiple Locations',
    industry: 'Convenience Store Chain',
    image: '/images/success-stories/Ypf-Full.webp',
    keyMetrics: [
      { label: 'Quick Service Orders', value: '+342%', icon: TrendingUp },
      { label: 'Mobile Pre-Orders', value: '+287%', icon: Users },
      { label: 'Average Rating', value: '4.7★', icon: Star }
    ],
    headline: 'Digital Convenience Store Network',
    description: 'YPF Full digitized their 50+ location convenience store chain with unified mobile pre-ordering.',
    tags: ['Multi-Location', 'Pre-Order', 'Quick Service'],
    testimonial: {
      text: 'Quick service orders increased by 342% across all 50+ locations. Customers love ordering ahead and skipping lines.',
      author: 'Management Team',
      title: 'YPF Full'
    }
  }
] // End of getCaseStudiesData function


interface CaseStudiesProps {
  locale: Locale
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ locale }) => {
  const t = useTranslations(locale)
  const caseStudies = getCaseStudiesData(locale, t)
  
  return (
    <>
      
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Historias de Éxito y Casos de Estudio de Marketing para Restaurantes RAY' : 'RAY Restaurant Marketing Success Stories and Case Studies'}</h1>
        <p>{locale === 'es' ? 'Casos de estudio reales de restaurantes que aumentaron sus ingresos usando la plataforma de marketing de RAY. Las historias de éxito destacadas incluyen Temple Craft Wynwood (259% de aumento en visitas de Google Maps, 66% de aumento en walk-ins) y Chimba Miami (215% de aumento en direcciones de Google Maps, 46% de aumento en walk-ins). Estos resultados demuestran la capacidad comprobada de RAY para ayudar a restaurantes a dominar la búsqueda local y aumentar el tráfico peatonal a través de marketing local potenciado por IA, gestión de reseñas y optimización del perfil de Google Business.' : 'Real case studies from restaurants that increased revenue using RAY\'s marketing platform. Featured success stories include Temple Craft Wynwood (259% increase in Google Maps visits, 66% increase in walk-ins) and Chimba Miami (215% increase in Google Maps directions, 46% increase in walk-ins). These results demonstrate RAY\'s proven ability to help restaurants dominate local search and drive more foot traffic through AI-powered local marketing, review management, and Google Business Profile optimization.'}</p>
        <p>{locale === 'es' ? 'Todos los casos de estudio incluyen métricas verificadas, cronogramas de implementación y estrategias específicas utilizadas. Resultados típicamente logrados dentro de 60-90 días de implementación.' : 'All case studies include verified metrics, implementation timelines, and specific strategies used. Results typically achieved within 60-90 days of implementation.'}</p>
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
                      width={400}
                      height={320}
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
                            {t.CASE_STUDIES_PAGE.READ_STORY}
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