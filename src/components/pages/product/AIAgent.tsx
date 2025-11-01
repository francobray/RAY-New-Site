'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, CircleCheck as CheckCircle, Users, Star, ChevronDown, ChevronUp, Zap, MessageCircle, ChevronLeft, ChevronRight, Calendar, BarChart } from 'lucide-react'
import TryItNowModal from '../../shared/TryItNowModal'
import PhoneCallModal from '../../shared/PhoneCallModal'
import RestaurantInfoModal from '../../shared/RestaurantInfoModal'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
import Button from '../../shared/BaseButton'

interface AIAgentProps {
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

const AIAgent: React.FC<AIAgentProps> = ({ locale }) => {
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
      platform: 'Instagram',
      platformLogo: '/images/instagram-icon.svg',
      businessName: locale === 'es' ? 'Burger House' : 'Burger House',
      status: locale === 'es' ? 'Activo ahora' : 'Active now',
      headerColor: 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¡Hola! ¿Tienen hamburguesas veganas?',
          time: '1:45 PM'
        },
        {
          type: 'ai',
          text: '¡Sí! 🍔 Tenemos 3 opciones veganas deliciosas: Impossible Burger, Portobello Burger y Falafel Burger. ¿Te gustaría ver fotos?',
          time: '1:45 PM'
        },
        {
          type: 'customer',
          text: 'Sí por favor! ¿Cuánto cuesta la Impossible Burger?',
          time: '1:46 PM'
        },
        {
          type: 'ai',
          text: '$14.99 con papas fritas incluidas 🍟 ¿Te gustaría ordenar para delivery o pickup?',
          time: '1:46 PM'
        },
        {
          type: 'customer',
          text: 'Delivery por favor!',
          time: '1:47 PM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Hi! Do you have vegan burgers?',
          time: '1:45 PM'
        },
        {
          type: 'ai',
          text: 'Yes! 🍔 We have 3 delicious vegan options: Impossible Burger, Portobello Burger, and Falafel Burger. Would you like to see photos?',
          time: '1:45 PM'
        },
        {
          type: 'customer',
          text: 'Yes please! How much is the Impossible Burger?',
          time: '1:46 PM'
        },
        {
          type: 'ai',
          text: '$14.99 with fries included 🍟 Would you like delivery or pickup?',
          time: '1:46 PM'
        },
        {
          type: 'customer',
          text: 'Delivery please!',
          time: '1:47 PM'
        }
      ],
      badge: locale === 'es' ? 'Convertido de Instagram DM a pedido' : 'Converted from Instagram DM to order'
    },
    {
      id: 3,
      platform: 'Messenger',
      platformLogo: '/images/messenger-icon.svg',
      businessName: locale === 'es' ? 'Restaurante La Terraza' : 'La Terraza Restaurant',
      status: locale === 'es' ? 'Responde al instante' : 'Replies instantly',
      headerColor: 'bg-blue-600',
      messages: locale === 'es' ? [
        {
          type: 'customer',
          text: '¿Tienen espacio para una fiesta de cumpleaños de 20 personas el próximo sábado?',
          time: '10:30 AM'
        },
        {
          type: 'ai',
          text: '¡Perfecto para un cumpleaños! 🎉 Sí, tenemos disponibilidad. ¿Qué hora preferirías: almuerzo o cena?',
          time: '10:30 AM'
        },
        {
          type: 'customer',
          text: 'Cena, alrededor de las 8pm. ¿Tienen menú especial para grupos?',
          time: '10:32 AM'
        },
        {
          type: 'ai',
          text: '¡Sí! Tenemos menú de grupo desde $35 por persona. Incluye entrada, plato principal y postre. Te envío los detalles completos por email. ¿Cuál es tu email?',
          time: '10:32 AM'
        }
      ] : [
        {
          type: 'customer',
          text: 'Do you have space for a birthday party of 20 people next Saturday?',
          time: '10:30 AM'
        },
        {
          type: 'ai',
          text: 'Perfect for a birthday! 🎉 Yes, we have availability. What time would you prefer: lunch or dinner?',
          time: '10:30 AM'
        },
        {
          type: 'customer',
          text: 'Dinner, around 8pm. Do you have a special group menu?',
          time: '10:32 AM'
        },
        {
          type: 'ai',
          text: 'Yes! We have group menus starting at $35 per person. Includes appetizer, main course & dessert. I\'ll send you full details via email. What\'s your email?',
          time: '10:32 AM'
        }
      ],
      badge: locale === 'es' ? 'Evento privado coordinado vía Messenger' : 'Private event coordinated via Messenger'
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
    <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[310px] px-8 sm:px-0">
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
              {currentExample.messages?.map((message, index) => {
                const getAIBubbleColor = () => {
                  if (currentExample.platform === 'Instagram') return 'bg-gradient-to-tr from-purple-500 to-pink-500 text-white';
                  if (currentExample.platform === 'Messenger') return 'bg-blue-600 text-white';
                  if (currentExample.platform === 'Web Widget') return 'bg-ray-blue text-white';
                  return 'bg-green-500 text-white';
                };
                
                const getTimeColor = () => {
                  if (message.type === 'customer') return 'text-gray-500';
                  if (currentExample.platform === 'Instagram') return 'text-purple-100';
                  if (currentExample.platform === 'Messenger') return 'text-blue-100';
                  if (currentExample.platform === 'Web Widget') return 'text-blue-100';
                  return 'text-green-100';
                };
                
                return (
                  <div key={index} className={`flex ${message.type === 'customer' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`rounded-2xl p-2 sm:p-3 max-w-[75%] sm:max-w-xs ${
                      message.type === 'customer' 
                        ? 'bg-gray-200 rounded-bl-md' 
                        : `${getAIBubbleColor()} rounded-br-md`
                    }`}>
                      <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-[10px] sm:text-xs mt-1 ${getTimeColor()}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                );
              })}
              
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
            
            {/* Platform Icons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <img 
                src="/images/WhatsApp.svg.webp" 
                alt="WhatsApp" 
                className="w-8 h-8 sm:w-10 sm:h-10"
                width={40}
                height={40}
              />
              <img 
                src="/images/instagram-icon.svg" 
                alt="Instagram" 
                className="w-8 h-8 sm:w-10 sm:h-10"
                width={40}
                height={40}
              />
              <img 
                src="/images/messenger-icon.svg" 
                alt="Messenger" 
                className="w-8 h-8 sm:w-10 sm:h-10"
                width={40}
                height={40}
              />
            </div>
            
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
                src="/images/agents/POS.avif" 
                alt="POS System Integration" 
                width={1200}
                height={800}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/online-ordering/fondo-online-ordering-03.jpg"
            alt="Restaurant background"
            fill
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            {t.AI_CONCIERGE_PAGE.BENEFITS.TITLE}
          </h2>
          
          <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
              <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-3xl p-10 md:p-12 lg:p-14 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
                  {t.AI_CONCIERGE_PAGE.BENEFITS.FEATURES.map((feature: Feature, index: number) => {
                    const icons = [Zap, MessageCircle, Calendar, Star, Users, BarChart]
                    const IconComponent = icons[index] || Zap
                    
                    return (
                      <div key={index} className="flex items-start space-x-5">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                          <p className="text-white/90 text-lg leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
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

export default AIAgent