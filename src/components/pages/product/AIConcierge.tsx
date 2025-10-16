'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck as CheckCircle, Users, Star, ChevronDown, ChevronUp, Zap, MessageCircle, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import TryItNowModal from '../../TryItNowModal'
import PhoneCallModal from '../../PhoneCallModal'
import RestaurantInfoModal from '../../RestaurantInfoModal'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
import Button from '../../shared/BaseButton'

interface AIConciergeProps {
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

const AIConcierge: React.FC<AIConciergeProps> = ({ locale }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isChatModalOpen, setIsChatModalOpen] = useState(false)
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)
  const [isRestaurantInfoModalOpen, setIsRestaurantInfoModalOpen] = useState(false)
  const [restaurantInfo, setRestaurantInfo] = useState<{
    restaurantName: string
    ownerName: string
    email: string
  } | null>(null)
  
  const t = useTranslations(locale)

// ChatCarousel Component
const ChatCarousel = () => {
  const chatExamples = [
    {
      id: 1,
      platform: 'WhatsApp',
      platformLogo: '/images/WhatsApp.svg.webp',
      businessName: locale === 'es' ? 'Pizza de Mario' : 'Mario\'s Pizza',
      status: locale === 'es' ? 'En línea' : 'Online',
      headerColor: 'bg-green-600',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¡Hola! ¿Puedo pedir 2 pizzas grandes de pepperoni a domicilio?',
          time: '2:15 AM'
        },
        {
          type: 'ai',
          text: '¡Claro que sí! 🍕 2 pizzas grandes de pepperoni en camino. ¿Cuál es tu dirección?',
          time: '2:15 AM'
        },
        {
          type: 'customer',
          text: 'Calle Principal 123. ¿Cuánto tarda la entrega?',
          time: '2:16 AM'
        },
        {
          type: 'ai',
          text: '¡Perfecto! Pedido confirmado ✅ Total: $28.50. Entrega en 25-30 mins. ¡Gracias!',
          time: '2:16 AM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Hi! Can I get 2 large pepperoni pizzas for delivery?',
          time: '2:15 AM'
        },
        {
          type: 'ai',
          text: 'Absolutely! 🍕 2 large pepperonis coming up. What\'s your address for delivery?',
          time: '2:15 AM'
        },
        {
          type: 'customer',
          text: '123 Main St. How long for delivery?',
          time: '2:16 AM'
        },
        {
          type: 'ai',
          text: 'Perfect! Order confirmed ✅ Total: $28.50. Delivery in 25-30 mins. Thanks!',
          time: '2:16 AM'
        }
      ],
      badge: locale === 'es' ? 'Pedido tomado automáticamente a las 2am' : 'Order taken automatically at 2am'
    },
    {
      id: 2,
      platform: 'WhatsApp',
      platformLogo: '/images/WhatsApp.svg.webp',
      businessName: locale === 'es' ? 'Sushi Bar Tokyo' : 'Tokyo Sushi Bar',
      status: locale === 'es' ? 'En línea' : 'Online',
      headerColor: 'bg-green-600',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¿Mesa para 4 esta noche a las 7pm?',
          time: '3:42 PM'
        },
        {
          type: 'ai',
          text: '¡Sí! Tenemos disponibilidad a las 7pm para 4 personas 🍣 ¿Me das tu nombre?',
          time: '3:42 PM'
        },
        {
          type: 'customer',
          text: 'Sarah Chen. ¿Tienen mesas afuera?',
          time: '3:43 PM'
        },
        {
          type: 'ai',
          text: '¡Reservado! Mesa para 4 a nombre de Sarah a las 7pm en el patio. ¡Nos vemos! 🌸',
          time: '3:43 PM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Table for 4 tonight at 7pm?',
          time: '3:42 PM'
        },
        {
          type: 'ai',
          text: 'Yes! We have availability at 7pm for 4 guests 🍣 May I have your name?',
          time: '3:42 PM'
        },
        {
          type: 'customer',
          text: 'Sarah Chen. Any outdoor seating?',
          time: '3:43 PM'
        },
        {
          type: 'ai',
          text: 'Booked! Table for 4 under Sarah at 7pm on our patio. See you soon! 🌸',
          time: '3:43 PM'
        }
      ],
      badge: locale === 'es' ? 'Reservación hecha en segundos' : 'Reservation made in seconds'
    },
    {
      id: 3,
      platform: 'WhatsApp',
      platformLogo: '/images/WhatsApp.svg.webp',
      businessName: locale === 'es' ? 'Café Amanecer' : 'Sunrise Café',
      status: locale === 'es' ? 'En línea' : 'Online',
      headerColor: 'bg-green-600',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¡Buenos días! 2 tostadas de aguacate y 2 lattes por favor',
          time: '8:12 AM'
        },
        {
          type: 'ai',
          text: '¡Buenos días! ☀️ 2 tostadas de aguacate y 2 lattes en camino. ¿Para comer aquí o para llevar?',
          time: '8:12 AM'
        },
        {
          type: 'customer',
          text: 'Para llevar por favor. ¿Cuánto es?',
          time: '8:13 AM'
        },
        {
          type: 'ai',
          text: '¡Perfecto! Total: $22. Listo para recoger en 8 minutos. ¡Gracias! ☕',
          time: '8:13 AM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Good morning! 2 avocado toasts and 2 lattes please',
          time: '8:12 AM'
        },
        {
          type: 'ai',
          text: 'Good morning! ☀️ 2 avocado toasts & 2 lattes coming up. For here or to go?',
          time: '8:12 AM'
        },
        {
          type: 'customer',
          text: 'To go please! How much?',
          time: '8:13 AM'
        },
        {
          type: 'ai',
          text: 'Perfect! Total: $22. Ready for pickup in 8 minutes. Thanks! ☕',
          time: '8:13 AM'
        }
      ],
      badge: locale === 'es' ? 'Pedido confirmado durante la hora pico' : 'Order confirmed during morning rush'
    },
    {
      id: 4,
      platform: 'WhatsApp',
      platformLogo: '/images/WhatsApp.svg.webp',
      businessName: 'La Cocina Mexicana',
      status: locale === 'es' ? 'En línea' : 'Online',
      headerColor: 'bg-green-600',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¿Hacen catering? Necesito comida para 30 personas el próximo viernes',
          time: '11:23 AM'
        },
        {
          type: 'ai',
          text: '¡Sí! 🌮 Nos encantaría atender tu evento. ¿Qué tipo de platillos te interesan?',
          time: '11:23 AM'
        },
        {
          type: 'customer',
          text: '¡Una barra de tacos sería genial!',
          time: '11:25 AM'
        },
        {
          type: 'ai',
          text: '¡Excelente elección! Nuestro gerente de catering te llamará en la próxima hora para los detalles. 🎉',
          time: '11:25 AM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Do you do catering? Need food for 30 people next Friday',
          time: '11:23 AM'
        },
        {
          type: 'ai',
          text: 'Yes! 🌮 We\'d love to cater your event. What type of items are you interested in?',
          time: '11:23 AM'
        },
        {
          type: 'customer',
          text: 'Taco bar would be great!',
          time: '11:25 AM'
        },
        {
          type: 'ai',
          text: 'Excellent choice! I\'ll have our catering manager call you within the hour to finalize details. 🎉',
          time: '11:25 AM'
        }
      ],
      badge: locale === 'es' ? 'Lead de catering capturado al instante' : 'Catering lead captured instantly'
    },
    {
      id: 5,
      platform: 'WhatsApp',
      platformLogo: '/images/WhatsApp.svg.webp',
      businessName: locale === 'es' ? 'Pastelería Dulces Sueños' : 'Sweet Dreams Bakery',
      status: locale === 'es' ? 'En línea' : 'Online',
      headerColor: 'bg-green-600',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¿Pueden hacer un pastel de cumpleaños personalizado para el sábado?',
          time: '4:18 PM'
        },
        {
          type: 'ai',
          text: '¡Por supuesto! 🎂 ¿Qué sabor y para cuántas personas?',
          time: '4:18 PM'
        },
        {
          type: 'customer',
          text: 'Pastel de chocolate para 12. ¿Pueden escribir "Feliz cumple Mike 30"?',
          time: '4:19 PM'
        },
        {
          type: 'ai',
          text: '¡Perfecto! Pastel de chocolate para 12 con mensaje personalizado. $65. ¿Recoges el sábado después de las 2pm? ✨',
          time: '4:19 PM'
        },
        {
          type: 'customer',
          text: '¡Perfecto, sí!',
          time: '4:20 PM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Can you make a custom birthday cake for Saturday?',
          time: '4:18 PM'
        },
        {
          type: 'ai',
          text: 'Absolutely! 🎂 What flavor and how many people?',
          time: '4:18 PM'
        },
        {
          type: 'customer',
          text: 'Chocolate cake for 12. Can you write "Happy 30th Mike"?',
          time: '4:19 PM'
        },
        {
          type: 'ai',
          text: 'Perfect! Chocolate cake for 12 with custom message. $65. Pick up Saturday after 2pm? ✨',
          time: '4:19 PM'
        },
        {
          type: 'customer',
          text: 'Perfect, yes!',
          time: '4:20 PM'
        }
      ],
      badge: locale === 'es' ? 'Pedido personalizado manejado sin esfuerzo' : 'Custom order handled effortlessly'
    }
  ];

  const [currentChat, setCurrentChat] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentChat((prev) => (prev + 1) % chatExamples.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextChat = () => {
    setCurrentChat((prev) => (prev + 1) % chatExamples.length);
    setIsAutoPlaying(false);
  };

  const prevChat = () => {
    setCurrentChat((prev) => (prev - 1 + chatExamples.length) % chatExamples.length);
    setIsAutoPlaying(false);
  };

  const currentExample = chatExamples[currentChat];

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-sm px-8 sm:px-0">
      {/* Navigation Arrows */}
      <button
        onClick={prevChat}
        className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
        aria-label="Previous chat example"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextChat}
        className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all"
        aria-label="Next chat example"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      {/* Phone Mockup */}
      <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2">
        <div className="bg-white rounded-[1.75rem] sm:rounded-[2rem] h-[500px] sm:h-[600px] overflow-hidden">
          {/* WhatsApp Chat Interface */}
          <>
            {/* Chat Header */}
            <div className={`${currentExample.headerColor} p-3 sm:p-4 text-white`}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img 
                  src={currentExample.platformLogo} 
                  alt={currentExample.platform} 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full p-1"
                  width={40}
                  height={40}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base truncate">{currentExample.businessName}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{currentExample.status}</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 h-[400px] sm:h-[480px] overflow-y-auto">
              {currentExample.messages?.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'customer' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`rounded-2xl p-2 sm:p-3 max-w-[75%] sm:max-w-xs ${
                    message.type === 'customer' 
                      ? 'bg-gray-200 rounded-bl-md' 
                      : 'bg-green-500 text-white rounded-br-md'
                  }`}>
                    <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-[10px] sm:text-xs mt-1 ${
                      message.type === 'customer' ? 'text-gray-500' : 'text-green-100'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Success Badge */}
              <div className="text-center pt-3 sm:pt-4">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold">
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
        {chatExamples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentChat(index);
              setIsAutoPlaying(false);
            }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
              index === currentChat ? 'bg-emerald-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to chat example ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{t.AI_CONCIERGE_PAGE.HERO.TITLE} {t.AI_CONCIERGE_PAGE.HERO.TITLE_HIGHLIGHT}</h1>
        <p>{t.AI_CONCIERGE_PAGE.HERO.SUBTITLE}</p>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-[1.71rem] md:text-[2.83rem] font-bold text-gray-900 leading-tight">
              {t.AI_CONCIERGE_PAGE.HERO.TITLE}{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t.AI_CONCIERGE_PAGE.HERO.TITLE_HIGHLIGHT}
                </span>
              </h1>
              
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t.AI_CONCIERGE_PAGE.HERO.SUBTITLE}
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center bg-emerald-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-emerald-600 font-semibold">✅ {t.AI_CONCIERGE_PAGE.HERO.BADGES[0]}</span>
              </div>
              <div className="flex items-center bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-blue-600 font-semibold">📅 {t.AI_CONCIERGE_PAGE.HERO.BADGES[1]}</span>
                            </div>
              <div className="flex items-center bg-purple-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-purple-600 font-semibold">💬 {t.AI_CONCIERGE_PAGE.HERO.BADGES[2]}</span>
                          </div>
              <div className="flex items-center bg-orange-50 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-orange-600 font-semibold">📢 {t.AI_CONCIERGE_PAGE.HERO.BADGES[3]}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsRestaurantInfoModalOpen(true)}
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-emerald-50 transition-all active:scale-95 sm:hover:scale-105 font-semibold text-base sm:text-lg shadow-lg flex items-center justify-center space-x-2"
              >
                <img 
                  src="/images/WhatsApp.svg.webp" 
                  alt="WhatsApp" 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  width={24}
                  height={24}
                />
                  <span>{locale === 'es' ? 'Probar Ahora' : 'Try Now'}</span>
                </button>
                          </div>
                        </div>
                        
          {/* Chat Examples Carousel */}
          <div className="relative">
            <ChatCarousel />
                          </div>
                        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t.AI_CONCIERGE_PAGE.PROBLEM.TITLE}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-600">{t.AI_CONCIERGE_PAGE.PROBLEM.ISSUES[0]}</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-gray-600">{t.AI_CONCIERGE_PAGE.PROBLEM.ISSUES[1]}</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-600">{t.AI_CONCIERGE_PAGE.PROBLEM.ISSUES[2]}</p>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.AI_CONCIERGE_PAGE.PROBLEM.SOLUTION.TITLE}
            </h3>
            <p className="text-lg text-gray-700">
              {t.AI_CONCIERGE_PAGE.PROBLEM.SOLUTION.SUBTITLE}
            </p>
          </div>
                  </div>
      </section>
      {/* POS Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {t.AI_CONCIERGE_PAGE.POS_INTEGRATION.TITLE}
            </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t.AI_CONCIERGE_PAGE.POS_INTEGRATION.SUBTITLE}
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {t.AI_CONCIERGE_PAGE.POS_INTEGRATION.FEATURES.map((feature: Feature, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
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
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Happy restaurant owner with pastry" 
                width={1200}
                height={800}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
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
            {t.AI_CONCIERGE_PAGE.BENEFITS.TITLE}
            </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {t.AI_CONCIERGE_PAGE.BENEFITS.FEATURES.map((feature: Feature, index: number) => {
                const icons = [Zap, MessageCircle, Calendar, Star, Users]
                const IconComponent = icons[index] || Zap
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
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
                {t.AI_CONCIERGE_PAGE.BENEFITS.DASHBOARD_TITLE}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">{t.AI_CONCIERGE_PAGE.BENEFITS.DASHBOARD_HEADER}</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.AI_CONCIERGE_PAGE.BENEFITS.DASHBOARD_LABELS.MESSAGES_TODAY}</span>
                    <span className="text-sm font-semibold text-gray-900">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.AI_CONCIERGE_PAGE.BENEFITS.DASHBOARD_LABELS.ORDERS_TAKEN}</span>
                    <span className="text-sm font-semibold text-emerald-600">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.AI_CONCIERGE_PAGE.BENEFITS.DASHBOARD_LABELS.TABLES_BOOKED}</span>
                    <span className="text-sm font-semibold text-blue-600">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t.AI_CONCIERGE_PAGE.BENEFITS.DASHBOARD_LABELS.RESPONSE_TIME}</span>
                    <span className="text-sm font-semibold text-purple-600">1.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.AI_CONCIERGE_PAGE.FINAL_CTA.TITLE}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.AI_CONCIERGE_PAGE.FINAL_CTA.SUBTITLE}
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-emerald-600 px-12 py-4 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl border-2 border-emerald-600"
            href={`/${locale}/demo`}
            data-cta="demo-free"
            data-analytics="ai_concierge_final_cta"
            aria-label="Book a demo"
          >
            {t.AI_CONCIERGE_PAGE.FINAL_CTA.CTA}
          </Button>
          <p className="mt-4 text-sm opacity-75">
            {t.AI_CONCIERGE_PAGE.FINAL_CTA.DISCLAIMER}
          </p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.AI_CONCIERGE_PAGE.FAQ.TITLE}
            </h2>
            <p className="text-xl text-gray-600">
              {t.AI_CONCIERGE_PAGE.FAQ.SUBTITLE}
            </p>
          </div>
          
          <div className="space-y-4">
            {t.AI_CONCIERGE_PAGE.FAQ.QUESTIONS.map((faq: FAQ, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
      
      {/* Try It Now Modals */}
      <TryItNowModal
        isOpen={isChatModalOpen}
        onClose={() => {
          setIsChatModalOpen(false)
          setRestaurantInfo(null)
        }}
        locale={locale}
        restaurantName={restaurantInfo?.restaurantName}
        ownerName={restaurantInfo?.ownerName}
      />
      
      <PhoneCallModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
        locale={locale}
      />

      <RestaurantInfoModal
        isOpen={isRestaurantInfoModalOpen}
        onClose={() => setIsRestaurantInfoModalOpen(false)}
        onSuccess={(restaurantName, ownerName, email) => {
          setRestaurantInfo({ restaurantName, ownerName, email })
          setIsRestaurantInfoModalOpen(false)
          setIsChatModalOpen(true)
        }}
        locale={locale}
      />
    </>
  )
}

export default AIConcierge