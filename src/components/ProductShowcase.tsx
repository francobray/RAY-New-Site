'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface ProductShowcaseProps {
  locale: Locale
}

interface CarouselTab {
  id: string
  title: {
    es: string
    en: string
  }
  image: {
    es: string
    en: string
  }
  alt: {
    es: string
    en: string
  }
}

const carouselTabs: CarouselTab[] = [
  {
    id: 'google-traffic',
    title: {
      es: 'Más Tráfico de Google',
      en: 'More Google Traffic'
    },
    image: {
      es: '/images/home/es/Carrousel_1.webp',
      en: '/images/home/en/Carrousel_1.webp'
    },
    alt: {
      es: 'Sitio web optimizado para SEO con mejor posicionamiento en Google',
      en: 'SEO optimized website with better Google rankings'
    },
  },
  {
    id: 'online-sales',
    title: {
      es: 'Más Delivery directo',
      en: 'More Online Sales'
    },
    image: {
      es: '/images/home/es/Carrousel_2.webp',
      en: '/images/home/en/Carrousel_2.webp'
    },
    alt: {
      es: 'Sistema de pedidos online para restaurantes',
      en: 'Online ordering system for restaurants'
    },
  },
  {
    id: 'repeat-orders',
    title: {
      es: 'Más Pedidos Repetidos',
      en: 'More Repeat Orders'
    },
    image: {
      es: '/images/home/es/Carrousel_3.webp',
      en: '/images/home/en/Carrousel_3.webp'
    },
    alt: {
      es: 'Sistema de fidelización y seguimiento de clientes',
      en: 'Customer loyalty and follow-up system'
    },
  },
  {
    id: 'more-direct-bookings',
    title: {
      es: 'Más reservas directas',
      en: 'More direct bookings'
    },
    image: {
      es: '/images/home/es/Carrousel_4.webp',
      en: '/images/home/en/Carrousel_4.webp'
    },
    alt: {
      es: 'Consigue más reservas direcetas con nuestro website optimizado y empleado ai',
      en: 'Get more direct bookings with our optimized website and ai employee'
    },
  },
  {
    id: 'app-downloads',
    title: {
      es: 'Tu App mobile',
      en: 'Your mobile App'
    },
    image: {
      es: '/images/home/es/Carrousel_5.webp',
      en: '/images/home/en/Carrousel_5.webp'
    },
    alt: {
      es: 'App móvil personalizada para restaurantes con programa de puntos',
      en: 'Branded mobile app for restaurants with points program'
    },
  }
]

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ locale }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-rotate carousel every 10 seconds with progress tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % carouselTabs.length)
      setProgress(0) // Reset progress when changing tabs
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  // Progress bar animation
  useEffect(() => {
    setProgress(0) // Reset progress when tab changes
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + (100 / (10000 / 50)) // Update every 50ms for smooth animation
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [activeTab])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    setProgress(0) // Reset progress on manual tab change
  }

  const currentTab = carouselTabs[activeTab]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {locale === 'es' 
              ? (
                <>
                  Dale a tu restaurante la misma{' '}
                  <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                    tecnología
                  </span>{' '}
                  que las grandes marcas
                </>
              )
              : (
                <>
                  Give your restaurant the same{' '}
                  <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                    tech
                  </span>{' '}
                  as the big brands
                </>
              )
            }
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex justify-center gap-1 sm:gap-2 max-w-5xl w-full">
            {carouselTabs.map((tab, index) => (
              <div key={tab.id} className="relative flex-1">
                <button
                  onClick={() => handleTabClick(index)}
                  className={`relative w-full px-2 sm:px-4 py-3 sm:py-4 font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap overflow-hidden ${
                    activeTab === index
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="hidden sm:inline">{index + 1}. </span>
                  {tab.title[locale]}
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div 
                      className={`h-full transition-all duration-75 ease-linear ${
                        activeTab === index 
                          ? 'bg-ray-blue' 
                          : 'bg-transparent'
                      }`}
                      style={{
                        width: activeTab === index ? `${progress}%` : '0%'
                      }}
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Content */}
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden transition-all duration-700 max-w-5xl w-full">
            <div className="relative w-full h-[450px] md:h-[520px] bg-gray-50">
              <Image
                src={currentTab.image[locale]}
                alt={currentTab.alt[locale]}
                fill
                className="object-contain transition-all duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1280px"
                priority={activeTab === 0}
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 max-w-5xl mx-auto px-4">
          <button
            onClick={() => handleTabClick(activeTab === 0 ? carouselTabs.length - 1 : activeTab - 1)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">
              {locale === 'es' ? 'Anterior' : 'Previous'}
            </span>
          </button>
          
          <button
            onClick={() => handleTabClick(activeTab === carouselTabs.length - 1 ? 0 : activeTab + 1)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="font-medium">
              {locale === 'es' ? 'Siguiente' : 'Next'}
            </span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
