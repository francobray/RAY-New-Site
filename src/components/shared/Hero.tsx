'use client'

import React, { useEffect } from 'react'
import { Star } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { useABTest } from '@/hooks/useABTest'
import { type Locale } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  // A/B Test: Hero H1 (separado por idioma)
  const flagKey = locale === 'es' ? 'hero-h1-test-es-v2' : 'hero-h1-test-en-v2'
  const { variant: heroVariant, payload, isLoading: isTestLoading, trackConversion } = useABTest(flagKey, 'option_a')
  
  // Log para debugging en producción
  useEffect(() => {
    console.log('🏠 Hero component:', {
      locale,
      flagKey,
      heroVariant,
      payload,
      isTestLoading,
      timestamp: new Date().toISOString()
    })
  }, [locale, flagKey, heroVariant, payload, isTestLoading])
  
  // Define las variantes del Hero H1 por idioma (fallback si no hay payload)
  const heroVariants = {
    es: {
      option_a: {
        title: 'Compite con las grandes marcas — y gana como ellas.',
        subtext: 'RAY le da a tu restaurante las mismas herramientas que usan las grandes cadenas: sitio web, reservas directas, pedidos online, fidelización y marketing con IA — todo conectado a tu POS.'
      },
      option_b: {
        title: 'Haz que tu restaurante recupere a sus clientes y aumente sus ganancias.',
        subtext: 'La plataforma todo-en-uno para restaurantes: conecta tu POS y consigue reservas directas, pedidos online y fidelización sin comisiones.'
      },
      option_c: {
        title: 'Recupera tus clientes — y tus márgenes.',
        subtext: 'Deja de perder ganancias con las apps de delivery. RAY te ayuda a recuperar la relación con tus clientes y automatizar reservas y pedidos directos desde tu web, WhatsApp y programa de fidelización.'
      }
    },
    en: {
      option_a: {
        title: 'Compete with the big brands — and win like one.',
        subtext: 'RAY gives restaurants the same tools as global chains — website, direct bookings, online ordering, loyalty, and AI marketing — all connected to your POS.'
      },
      option_b: {
        title: 'Help your restaurant own its guests and grow its profits.',
        subtext: 'The all-in-one marketing platform for restaurants — connect your POS to get direct bookings, online orders, and loyalty with zero commissions.'
      },
      option_c: {
        title: 'Take back your customers — and your margins.',
        subtext: 'Stop losing profits to delivery apps. RAY helps restaurants own their guest relationships and automate direct bookings and orders from their website, WhatsApp, and loyalty program.'
      }
    }
  }
  
  // Obtener el texto del hero: primero intentar desde payload de PostHog, luego fallback a hardcoded
  const heroText = payload && typeof payload === 'object' && !Array.isArray(payload)
    ? {
        title: payload.title || heroVariants[locale].option_a.title,
        subtext: payload.subtext || heroVariants[locale].option_a.subtext
      }
    : (heroVariants[locale][heroVariant as keyof typeof heroVariants['es']] || heroVariants[locale].option_a)
  
  // Log the final text being used
  useEffect(() => {
    if (!isTestLoading) {
      console.log('📝 Hero final text:', {
        usingPayload: !!(payload && typeof payload === 'object'),
        heroText,
        payload
      })
    }
  }, [heroText, payload, isTestLoading])

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
          
          // Track widget interaction as conversion for A/B test
          setTimeout(() => {
            const widgetInput = document.querySelector('#ray-widget input')
            const widgetButton = document.querySelector('#ray-widget button')
            
            if (widgetInput) {
              widgetInput.addEventListener('focus', () => {
                trackConversion('hero_widget_focus', { 
                  interaction_type: 'input_focus' 
                })
              })
            }
            
            if (widgetButton) {
              widgetButton.addEventListener('click', () => {
                trackConversion('hero_widget_search', { 
                  interaction_type: 'search_click' 
                })
              })
            }
          }, 500)
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

  // Track scroll events for A/B test success metric
  useEffect(() => {
    let hasTrackedScroll = false
    
    const trackScrollEvent = () => {
      if (hasTrackedScroll) return
      
      // Track when user scrolls past 25% of viewport height
      const scrollThreshold = window.innerHeight * 0.25
      
      if (window.scrollY > scrollThreshold) {
        hasTrackedScroll = true
        
        // Send locale-specific scroll event to PostHog
        const eventName = locale === 'es' ? 'home_page_scroll_es' : 'home_page_scroll_en'
        
        trackConversion(eventName, {
          scroll_depth: Math.round(window.scrollY),
          viewport_height: window.innerHeight,
          threshold_passed: scrollThreshold,
          locale,
          ab_test_variant: heroVariant
        })
        
        console.log('📊 Scroll event tracked:', {
          eventName,
          locale,
          scrollY: window.scrollY,
          threshold: scrollThreshold
        })
      }
    }
    
    window.addEventListener('scroll', trackScrollEvent, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', trackScrollEvent)
    }
  }, [locale, heroVariant, trackConversion])

  // Mobile sticky widget behavior
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-container') as HTMLElement
      const widgetContainer = document.querySelector('#widget-container') as HTMLElement
      
      // Only apply on mobile devices
      if (!heroSection || !widgetContainer || window.innerWidth > 640) return
      
      const heroRect = heroSection.getBoundingClientRect()
      const heroBottom = heroRect.bottom
      const viewportHeight = window.innerHeight
      
      // Calculate exact transition point with fine-tuning for perfect alignment
      // Fixed position: viewport height - 1rem (bottom)
      // Absolute position: hero bottom - 4rem  
      // Fine-tune: add small offset to eliminate micro-jump
      const threshold = viewportHeight + (3 * 16) + 8 // 3rem + 8px fine-tuning
      
      if (heroBottom <= threshold) {
        // Transition point reached - widget positions now match perfectly
        widgetContainer.classList.add('widget-absolute-hero')
      } else {
        // Widget stays fixed at bottom of viewport
        widgetContainer.classList.remove('widget-absolute-hero')
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    
    // Initial check
    setTimeout(handleScroll, 100) // Small delay to ensure elements are rendered
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div>
      {/* Centered Hero Layout */}
      <section className="hero-container relative bg-ray-promise pt-4 pb-40 sm:pb-4 mt-0 md:pt-0 md:-mt-10 overflow-x-hidden">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-2 sm:gap-6 lg:gap-12 items-center w-full">
            
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="hidden sm:inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                <span className="text-sm font-medium text-ray-dark-900">{t.TRUST.TRUSTED_BY}</span>
              </div>

              {/* Main Headline - A/B Test Enabled */}
              {isTestLoading ? (
                // Skeleton loader mientras carga el test
                <div className="animate-pulse mb-8 sm:mb-6 mt-6 sm:mt-0">
                  <div className="h-12 sm:h-10 lg:h-12 xl:h-14 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-12 sm:h-10 lg:h-12 xl:h-14 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-5/6 mt-2"></div>
                </div>
              ) : (
                <>
                  <h1 className="text-[44px] sm:text-[32px] lg:text-[44px] xl:text-[56px] font-bold text-ray-dark-900 leading-[1.1] tracking-tight mb-6 sm:mb-6 mt-6 sm:mt-0">
                    {heroText.title}
                  </h1>
                  
                  <p className="hidden sm:block text-lg sm:text-xl text-ray-dark-700 leading-relaxed mb-6 sm:mb-8">
                    {heroText.subtext}
                  </p>
                </>
              )}
            </div>

            {/* Right Column - Widget and Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Hero Banner Image */}
              <div className="relative w-full max-w-[1140px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[560px]">
                <picture>
                  {/* AVIF sources - best compression */}
                  <source
                    type="image/avif"
                    srcSet="/images/home/hero-banner-560w.avif 560w, /images/home/hero-banner-640w.avif 640w, /images/home/hero-banner-768w.avif 768w"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 640px, (max-width: 1024px) 50vw, 560px"
                  />
                  {/* WebP fallback - good compression */}
                  <source
                    type="image/webp"
                    srcSet="/images/home/hero-banner-560w.webp 560w, /images/home/hero-banner-640w.webp 640w, /images/home/hero-banner-768w.webp 768w"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 640px, (max-width: 1024px) 50vw, 560px"
                  />
                  {/* PNG fallback for legacy browsers */}
                  <img
                    src="/images/home/hero-banner-640w.webp"
                    alt="RAY Score Dashboard"
                    className="w-full h-auto rounded-xl"
                    width="640"
                    height="866"
                    fetchPriority="high"
                    loading="eager"
                  />
                </picture>
                
                  {/* RAY Lead-Magnet Widget - Positioned above the image */}
                  <div id="widget-container" className="absolute bottom-24 md:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 w-[min(96vw,40rem)] md:w-[34rem] md:max-w-xl lg:w-[38rem] lg:max-w-xl z-10 flex justify-center">
                    <div id="ray-widget" className="min-h-[165px] h-[165px]" style={{ containIntrinsicSize: '165px' }} suppressHydrationWarning></div>
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