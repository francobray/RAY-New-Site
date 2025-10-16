'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { getShimmerDataURL } from '@/utils/shimmer'
import { Star } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = useTranslations(locale)

  useEffect(() => {
    // Load the RAY widget script
    const script = document.createElement('script')
    script.src = 'https://grader.rayapp.io/ray-widget.js'
    script.setAttribute('data-cfasync', 'false')
    
    script.onerror = (error) => {
      console.error('Failed to load RAY widget script:', error)
    }
    
    document.head.appendChild(script)

    script.onload = () => {
      // Initialize the widget after the script loads
      if (typeof window !== 'undefined' && (window as any).RAYWidget) {
        // Determine widget texts based on locale
        const isSpanish = locale === 'es'

        // Shared widget configuration
        const widgetConfig: Record<string, any> = {
          container: '#ray-widget',
          baseUrl: 'https://grader.rayapp.io'
        }

        if (isSpanish) {
          // Spanish overrides
          Object.assign(widgetConfig, {
            placeholder: 'Busca tu restaurante',
            buttonText: 'Obtener mi reporte',
            loadingText: 'Analizando tu negocio...',
            animatedTitles: [
              'Escanea tu sitio y descubre qué no funciona',
              'Mira cuántas ventas podrías obtener con keywords',
              'Compárate con tu competencia local'
            ]
          })
        } else {
          // English defaults / overrides (acts as fallback)
          Object.assign(widgetConfig, {
            placeholder: 'Find your restaurant name'
          })
        }

        try {
          new (window as any).RAYWidget(widgetConfig)
        } catch (error) {
          console.error('RAY Widget initialization error:', error)
        }
        
        // Wait a bit for the widget content to load, then style the specific text
        setTimeout(() => {
          const widgetContainer = document.querySelector('#ray-widget')
          if (widgetContainer) {
            // Find elements containing "Compare" text and make them smaller
            const allElements = widgetContainer.querySelectorAll('*')
            allElements.forEach((element: Element) => {
              const textContent = element.textContent
              if (textContent && String(textContent).includes('Compare yourself with your local competition')) {
                const htmlElement = element as HTMLElement
                htmlElement.style.fontSize = '0.7rem'
                htmlElement.style.lineHeight = '1.1'
              }
            })
          }
        }, 1000)
      }
    }

    return () => {
      // Cleanup script on component unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div>
      {/* Centered Hero Layout */}
      <section className="relative bg-ray-promise pt-4 pb-40 sm:pb-4 mt-0 md:pt-0 md:-mt-10 overflow-x-hidden">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-12 items-center w-full">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="hidden sm:inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                <span className="text-sm font-medium text-ray-dark-900">{t.TRUST.TRUSTED_BY}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium sm:font-bold text-ray-dark-900 leading-[0.9] tracking-tight mb-8 sm:mb-6 mt-6 sm:mt-0">
                {t.HOMEPAGE.HERO.TITLE}{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue bg-clip-text text-transparent">
                    {t.HOMEPAGE.HERO.TITLE_HIGHLIGHT}
                  </span>
                  {/* Underline decoration */}
                  <div className="hidden sm:block absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue rounded-full opacity-30"></div>
                </span>
              </h1>
              
              <p className="hidden sm:block text-lg sm:text-xl text-ray-dark-700 leading-relaxed mb-6 sm:mb-8">
                {t.COMPANY.DESCRIPTION}
              </p>
            </div>

            {/* Right Column - Widget and Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Hero Banner Image */}
              <div className="relative w-full max-w-[600px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px]">
                <Image
                  src="/images/home/hero-bannerpng.png"
                  alt="RAY Score Dashboard"
                  width={1120}
                  height={630}
                  className="w-full h-auto rounded-xl scale-[1.90] sm:scale-100"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 560px"
                  placeholder="blur"
                  blurDataURL={getShimmerDataURL(1120, 630)}
                  priority
                  fetchPriority="high"
                />
                
                  {/* RAY Lead-Magnet Widget - Positioned above the image */}
                  <div className="absolute bottom-24 md:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 w-[min(90vw,34rem)] md:w-[34rem] lg:w-[38rem] max-w-xl z-10 flex justify-center">
                    <div id="ray-widget" className="min-h-[165px]"></div>
                  </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -ml-3">
          <div className="w-6 h-10 border-2 border-ray-blue/30 rounded-full flex justify-center overflow-hidden">
            <div className="w-1 h-3 bg-ray-blue rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero