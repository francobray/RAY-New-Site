'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck as CheckCircle, Users, Star, ChevronDown, ChevronUp, Zap, Phone, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
import Button from '../../shared/BaseButton'

interface VoiceAgentProps {
  locale: Locale
}

interface Feature {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ locale }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  const t = useTranslations(locale)
  
  // Intercept and suppress Vapi console errors to prevent noise in production
  useEffect(() => {
    const originalError = console.error
    
    // Override console.error to filter out Vapi errors
    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || ''
      
      // Suppress known Vapi errors that are handled gracefully
      if (
        message.includes('Vapi error:') ||
        message.includes('Meeting has ended') ||
        message.includes('daily-call-join-error') ||
        message.includes('start-method-error')
      ) {
        // Silently suppress these errors in production
        // In development, you can uncomment the line below to debug:
        // originalError.call(console, '[Vapi] Suppressed error:', ...args)
        return
      }
      
      // For all other errors, use the original console.error
      originalError.apply(console, args)
    }
    
    return () => {
      // Restore original console methods on cleanup
      console.error = originalError
    }
  }, [])
  
  // Component mounted - inject Vapi widget using official method
  useEffect(() => {
    // Check if widget already exists and is working
    const existingWidget = document.querySelector('vapi-widget')
    if (existingWidget && existingWidget.children.length > 0) {
      return
    }
    
    // Remove any existing but uninitialized widget or script
    const existingScript = document.querySelector('script[src*="vapi-ai"]')
    if (existingWidget) existingWidget.remove()
    if (existingScript) existingScript.remove()
    
    // Clear any stale Vapi data from localStorage to prevent "Meeting has ended" errors
    try {
      const vapiStorageKeys = ['vapi_widget_consent', 'vapi_call_id', 'vapi_session_id']
      vapiStorageKeys.forEach(key => {
        const storedValue = localStorage.getItem(key)
        if (storedValue && key !== 'vapi_widget_consent') {
          // Remove stale session data but keep consent
          localStorage.removeItem(key)
        }
      })
    } catch (e) {
      console.warn('Could not clear Vapi storage:', e)
    }
    
    // REVERSED APPROACH: Add widget element FIRST, then load script
    // This way the MutationObserver in the Vapi script can detect it
    
    const widgetHTML = `<vapi-widget
      public-key="90d98cb0-7906-47c3-a16c-6875ff013730"
      assistant-id="6974c1fa-e3d1-460b-a6da-32c4522a761f"
      mode="voice"
      theme="dark"
      size="full"
      radius="large"
      position="bottom-left"
      base-color="#000000"
      accent-color="#216eab"
      button-base-color="#000000"
      button-accent-color="#ffffff"
      main-label="Probarlo ahora 📞"
      start-button-text="Start"
      end-button-text="End Call"
      empty-chat-message="Hey, How can I help you today?"
      show-transcript="true"
      require-consent="true"
      terms-content="By using this chat widget, you agree to our privacy policy and terms of service. Your conversations may be recorded for quality assurance."
      local-storage-key="vapi_widget_consent"
    ></vapi-widget>`
    
    const container = document.createElement('div')
    container.innerHTML = widgetHTML
    const widget = container.firstElementChild
    
    if (widget) {
      document.body.appendChild(widget)
    }
    
    // Load the script after widget element exists in the DOM
    const script = document.createElement('script')
    // Using version 0.0.15 - known working version (upgrade path unclear for widget embed)
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react@0.0.15/dist/embed/widget.umd.js'
    script.async = true
    script.type = 'text/javascript'
    script.crossOrigin = 'anonymous'
    
    // Add error handling for script loading
    script.onerror = () => {
      console.error('Failed to load Vapi widget script')
      // Remove the widget element if script fails to load
      const failedWidget = document.querySelector('vapi-widget')
      if (failedWidget) failedWidget.remove()
    }
    
    // Add event listener for Vapi errors after script loads
    script.onload = () => {
      // Wait for widget to initialize, then add error handlers
      setTimeout(() => {
        const loadedWidget = document.querySelector('vapi-widget')
        if (loadedWidget) {
          // Listen for Vapi error events
          const handleVapiError = (event: Event) => {
            const customEvent = event as CustomEvent
            console.warn('Vapi error caught:', customEvent.detail)
            
            // Clear stale session data on error
            try {
              localStorage.removeItem('vapi_call_id')
              localStorage.removeItem('vapi_session_id')
            } catch (e) {
              console.warn('Could not clear session storage:', e)
            }
            
            // Optionally reload the widget on critical errors
            const errorDetail = customEvent.detail
            if (errorDetail?.errorMsg?.includes('Meeting has ended') || 
                errorDetail?.type === 'daily-call-join-error' ||
                errorDetail?.type === 'start-method-error') {
              console.log('Resetting Vapi widget due to session error...')
              // Don't auto-reload to avoid loops, just log for debugging
            }
          }
          
          // Add error event listener
          loadedWidget.addEventListener('error', handleVapiError)
          
          // Store cleanup function for the error listener
          ;(loadedWidget as any)._vapiErrorHandler = handleVapiError
        }
      }, 1000)
    }
    
    // Append script to body
    document.body.appendChild(script)
    
    return () => {
      // Cleanup on unmount
      const widget = document.querySelector('vapi-widget')
      const scriptTag = document.querySelector('script[src*="vapi-ai"]')
      
      // Remove error event listener if it exists
      if (widget && (widget as any)._vapiErrorHandler) {
        widget.removeEventListener('error', (widget as any)._vapiErrorHandler)
      }
      
      if (widget) widget.remove()
      if (scriptTag) scriptTag.remove()
    }
  }, [])


  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // PhoneCarousel Component
  const PhoneCarousel = () => {
    const phoneExamples = [
      {
        id: 1,
        businessName: locale === 'es' ? 'Pizza de Mario' : 'Mario\'s Pizza',
      status: locale === 'es' ? 'Llamando...' : 'Calling...',
      conversation: locale === 'es' ? [
        {
          type: 'agent',
          text: 'Hola, hablas con Mario\'s Pizza. ¿En qué puedo ayudarte?',
          time: '14:32'
        },
        {
          type: 'customer',
          text: 'Hola, quisiera hacer un pedido para llevar',
          time: '14:32'
        },
        {
          type: 'agent',
          text: '¡Perfecto! ¿Qué te gustaría ordenar hoy?',
          time: '14:33'
        },
        {
          type: 'customer',
          text: 'Una pizza grande de pepperoni y una Coca-Cola',
          time: '14:33'
        },
        {
          type: 'agent',
          text: 'Excelente. Una pizza grande de pepperoni y una Coca-Cola. El total es $24.50. ¿Cuándo pasas a recogerla?',
          time: '14:34'
        }
      ] : [
        {
          type: 'agent',
          text: 'Hello, you\'ve reached Mario\'s Pizza. How can I help you?',
          time: '2:32 PM'
        },
        {
          type: 'customer',
          text: 'Hi, I\'d like to place a takeout order',
          time: '2:32 PM'
        },
        {
          type: 'agent',
          text: 'Perfect! What would you like to order today?',
          time: '2:33 PM'
        },
        {
          type: 'customer',
          text: 'One large pepperoni pizza and a Coke',
          time: '2:33 PM'
        },
        {
          type: 'agent',
          text: 'Great. One large pepperoni pizza and a Coke. Your total is $24.50. When will you pick it up?',
          time: '2:34 PM'
        }
      ],
      badge: locale === 'es' ? 'Pedido tomado por teléfono automáticamente' : 'Order taken automatically by phone'
    },
    {
      id: 2,
      businessName: locale === 'es' ? 'Sushi Bar Tokyo' : 'Tokyo Sushi Bar',
      status: locale === 'es' ? 'En línea' : 'On the line',
      conversation: locale === 'es' ? [
        {
          type: 'agent',
          text: 'Tokyo Sushi Bar, buenos días. ¿En qué puedo ayudarte?',
          time: '11:15'
        },
        {
          type: 'customer',
          text: '¿Tienen mesa para 4 personas esta noche a las 8?',
          time: '11:15'
        },
        {
          type: 'agent',
          text: 'Déjame revisar... Sí, tenemos disponibilidad a las 8 PM para 4 personas. ¿A qué nombre hago la reserva?',
          time: '11:16'
        },
        {
          type: 'customer',
          text: 'A nombre de García, por favor',
          time: '11:16'
        },
        {
          type: 'agent',
          text: 'Perfecto, Sr. García. Mesa reservada para 4 personas hoy a las 8 PM. ¡Los esperamos!',
          time: '11:17'
        }
      ] : [
        {
          type: 'agent',
          text: 'Tokyo Sushi Bar, good morning. How can I help you?',
          time: '11:15 AM'
        },
        {
          type: 'customer',
          text: 'Do you have a table for 4 tonight at 8?',
          time: '11:15 AM'
        },
        {
          type: 'agent',
          text: 'Let me check... Yes, we have availability at 8 PM for 4 people. What name should I put the reservation under?',
          time: '11:16 AM'
        },
        {
          type: 'customer',
          text: 'Under García, please',
          time: '11:16 AM'
        },
        {
          type: 'agent',
          text: 'Perfect, Mr. García. Table reserved for 4 people tonight at 8 PM. We look forward to seeing you!',
          time: '11:17 AM'
        }
      ],
      badge: locale === 'es' ? 'Reservación confirmada al instante' : 'Reservation confirmed instantly'
    },
    {
      id: 3,
      businessName: locale === 'es' ? 'Café Amanecer' : 'Sunrise Café',
      status: locale === 'es' ? 'Respondiendo' : 'Answering',
      conversation: locale === 'es' ? [
        {
          type: 'customer',
          text: '¿Tienen opciones veganas en el menú?',
          time: '9:42'
        },
        {
          type: 'agent',
          text: '¡Sí! Tenemos varias opciones veganas: tostadas de aguacate, ensalada verde, smoothie bowls y leche vegetal para los cafés.',
          time: '9:42'
        },
        {
          type: 'customer',
          text: 'Genial, ¿qué tipos de leche vegetal tienen?',
          time: '9:43'
        },
        {
          type: 'agent',
          text: 'Tenemos leche de almendras, avena y coco. Todas están incluidas sin costo adicional.',
          time: '9:43'
        }
      ] : [
        {
          type: 'customer',
          text: 'Do you have vegan options on the menu?',
          time: '9:42 AM'
        },
        {
          type: 'agent',
          text: 'Yes! We have several vegan options: avocado toast, green salad, smoothie bowls, and plant milk for coffees.',
          time: '9:42 AM'
        },
        {
          type: 'customer',
          text: 'Great, what types of plant milk do you have?',
          time: '9:43 AM'
        },
        {
          type: 'agent',
          text: 'We have almond, oat, and coconut milk. All are included at no extra charge.',
          time: '9:43 AM'
        }
      ],
      badge: locale === 'es' ? 'Consulta del menú respondida al instante' : 'Menu inquiry answered instantly'
    }
  ];

  const [currentCall, setCurrentCall] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentCall((prev) => (prev + 1) % phoneExamples.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextCall = () => {
    setCurrentCall((prev) => (prev + 1) % phoneExamples.length);
    setIsAutoPlaying(false);
  };

  const prevCall = () => {
    setCurrentCall((prev) => (prev - 1 + phoneExamples.length) % phoneExamples.length);
    setIsAutoPlaying(false);
  };

  const currentExample = phoneExamples[currentCall];

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] px-8 sm:px-0">
      {/* Navigation Arrows */}
      <button
        onClick={prevCall}
        className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
        aria-label="Previous call example"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextCall}
        className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
        aria-label="Next call example"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      {/* Phone Mockup */}
      <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2">
        <div className="bg-white rounded-[1.75rem] sm:rounded-[2rem] h-[500px] sm:h-[600px] overflow-hidden">
          {/* Phone Call Interface */}
          <>
            {/* Call Header */}
            <div className="bg-blue-600 p-4 sm:p-6 text-white text-center">
              <div className="mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full mx-auto flex items-center justify-center mb-3">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{currentExample.businessName}</h3>
                <p className="text-sm sm:text-base opacity-90">{currentExample.status}</p>
              </div>
              
              {/* Call Duration */}
              <div className="text-xs sm:text-sm opacity-75">
                {locale === 'es' ? 'Duración: 02:15' : 'Duration: 02:15'}
              </div>
            </div>

            {/* Conversation Transcript */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 h-[340px] sm:h-[420px] overflow-y-auto bg-gray-50">
              <div className="text-center mb-4">
                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                  {locale === 'es' ? 'Transcripción de la llamada' : 'Call transcript'}
                </span>
              </div>
              
              {currentExample.conversation?.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'agent' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`rounded-2xl p-3 max-w-[85%] ${
                    message.type === 'agent' 
                      ? 'bg-blue-100 text-blue-900 rounded-bl-md' 
                      : 'bg-white border border-gray-200 rounded-br-md'
                  }`}>
                    <div className="flex items-center mb-1">
                      {message.type === 'agent' ? (
                        <Phone className="w-3 h-3 mr-1.5 text-blue-600" />
                      ) : (
                        <Users className="w-3 h-3 mr-1.5 text-gray-600" />
                      )}
                      <span className="text-[10px] sm:text-xs font-medium text-gray-500">
                        {message.type === 'agent' 
                          ? (locale === 'es' ? 'Asistente IA' : 'AI Assistant')
                          : (locale === 'es' ? 'Cliente' : 'Customer')
                        }
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                    <p className="text-[10px] sm:text-xs mt-1 text-gray-500">
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Success Badge */}
              <div className="text-center pt-4">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-semibold">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                  <span className="leading-tight">{currentExample.badge}</span>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-4 sm:mt-6">
        {phoneExamples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentCall(index);
              setIsAutoPlaying(false);
            }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentCall ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to call example ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
  }

  return (
    <>
      {/* Vapi widget script and element are injected via useEffect */}
      
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{t.VOICE_AGENT_PAGE.HERO.TITLE} {t.VOICE_AGENT_PAGE.HERO.TITLE_HIGHLIGHT}</h1>
        <p>{t.VOICE_AGENT_PAGE.HERO.SUBTITLE}</p>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-[1.71rem] md:text-[2.83rem] font-bold text-gray-900 leading-tight">
              {t.VOICE_AGENT_PAGE.HERO.TITLE}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t.VOICE_AGENT_PAGE.HERO.TITLE_HIGHLIGHT}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.VOICE_AGENT_PAGE.HERO.SUBTITLE}
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-blue-600 font-semibold">📞 {t.VOICE_AGENT_PAGE.HERO.BADGES[0]}</span>
              </div>
              <div className="flex items-center bg-indigo-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-indigo-600 font-semibold">📅 {t.VOICE_AGENT_PAGE.HERO.BADGES[1]}</span>
              </div>
              <div className="flex items-center bg-purple-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-purple-600 font-semibold">🍽️ {t.VOICE_AGENT_PAGE.HERO.BADGES[2]}</span>
              </div>
              <div className="flex items-center bg-green-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-green-600 font-semibold">❓ {t.VOICE_AGENT_PAGE.HERO.BADGES[3]}</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a
                href={`/${locale}/demo?utm_source=rayapp&utm_medium=website&utm_campaign=voice-agent&utm_content=hero-cta`}
                className="bg-blue-600 text-white border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-all active:scale-95 sm:hover:scale-105 font-semibold text-base sm:text-lg shadow-lg flex items-center justify-center space-x-2 no-underline"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{locale === 'es' ? 'Agendar Demo' : 'Schedule Demo'}</span>
              </a>
            </div>
            
          </div>
          
          {/* Phone Examples Carousel */}
          <div className="relative">
            <PhoneCarousel />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.VOICE_AGENT_PAGE.PROBLEM.TITLE}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-600">{t.VOICE_AGENT_PAGE.PROBLEM.ISSUES[0]}</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-gray-600">{t.VOICE_AGENT_PAGE.PROBLEM.ISSUES[1]}</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-600">{t.VOICE_AGENT_PAGE.PROBLEM.ISSUES[2]}</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.VOICE_AGENT_PAGE.PROBLEM.SOLUTION.TITLE}
            </h3>
            <p className="text-lg text-gray-700">
              {t.VOICE_AGENT_PAGE.PROBLEM.SOLUTION.SUBTITLE}
            </p>
          </div>
        </div>
      </section>

      {/* POS Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {t.VOICE_AGENT_PAGE.POS_INTEGRATION.TITLE}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t.VOICE_AGENT_PAGE.POS_INTEGRATION.SUBTITLE}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {t.VOICE_AGENT_PAGE.POS_INTEGRATION.FEATURES.map((feature: Feature, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-1 flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Restaurant staff taking phone orders" 
                width={1200}
                height={800}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {t.VOICE_AGENT_PAGE.BENEFITS.TITLE}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {t.VOICE_AGENT_PAGE.BENEFITS.FEATURES.map((feature: Feature, index: number) => {
                const icons = [Zap, Phone, Calendar, Star, Users]
                const IconComponent = icons[index] || Zap
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {t.VOICE_AGENT_PAGE.BENEFITS.DASHBOARD_TITLE}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">{t.VOICE_AGENT_PAGE.BENEFITS.DASHBOARD_HEADER}</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.VOICE_AGENT_PAGE.BENEFITS.DASHBOARD_LABELS.CALLS_TODAY}</span>
                    <span className="text-sm font-semibold text-gray-900">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.VOICE_AGENT_PAGE.BENEFITS.DASHBOARD_LABELS.ORDERS_TAKEN}</span>
                    <span className="text-sm font-semibold text-blue-600">67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.VOICE_AGENT_PAGE.BENEFITS.DASHBOARD_LABELS.RESERVATIONS_BOOKED}</span>
                    <span className="text-sm font-semibold text-purple-600">34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.VOICE_AGENT_PAGE.BENEFITS.DASHBOARD_LABELS.AVG_CALL_TIME}</span>
                    <span className="text-sm font-semibold text-green-600">2.4 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.VOICE_AGENT_PAGE.FINAL_CTA.TITLE}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.VOICE_AGENT_PAGE.FINAL_CTA.SUBTITLE}
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 px-12 py-4 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl border-2 border-blue-600"
            href={`/${locale}/demo`}
            data-cta="demo-free"
            data-analytics="voice_agent_final_cta"
            aria-label="Book a demo"
          >
            {t.VOICE_AGENT_PAGE.FINAL_CTA.CTA}
          </Button>
          <p className="mt-4 text-sm opacity-75">
            {t.VOICE_AGENT_PAGE.FINAL_CTA.DISCLAIMER}
          </p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.VOICE_AGENT_PAGE.FAQ.TITLE}
            </h2>
            <p className="text-xl text-gray-600">
              {t.VOICE_AGENT_PAGE.FAQ.SUBTITLE}
            </p>
          </div>
          
          <div className="space-y-4">
            {t.VOICE_AGENT_PAGE.FAQ.QUESTIONS.map((faq: FAQ, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default VoiceAgent
