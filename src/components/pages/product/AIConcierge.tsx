'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, CircleCheck as CheckCircle, Users, Star, ChevronDown, ChevronUp, Zap, MessageCircle, Instagram, Phone, ChevronLeft, ChevronRight, Mic, Volume2, PhoneOff, Calendar } from 'lucide-react'
import HubSpotUnifiedModal from '../../HubSpotUnifiedModal'
import TryItNowModal from '../../TryItNowModal'
import PhoneCallModal from '../../PhoneCallModal'
import { useHubSpotModal } from '../../../hooks/useHubSpotModal'

// ChatCarousel Component
const ChatCarousel = () => {
  const chatExamples = [
    {
      id: 1,
      platform: 'WhatsApp',
      platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png',
      businessName: 'Mario\'s Pizza',
      status: 'Online',
      headerColor: 'bg-green-600',
      messages: [
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
      badge: 'Order taken automatically at 2am'
    },
    {
      id: 2,
      platform: 'Instagram',
      platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
      businessName: 'Bella Vista',
      status: 'Active now',
      headerColor: 'bg-pink-500',
      messages: [
        {
          type: 'customer',
          text: 'Do you have tables available for tonight? Party of 4',
          time: '6:30 PM'
        },
        {
          type: 'ai',
          text: 'Yes! 🍽️ I have availability for 4 people. What time works best?',
          time: '6:30 PM'
        },
        {
          type: 'customer',
          text: '8:00 PM would be perfect',
          time: '6:31 PM'
        },
        {
          type: 'ai',
          text: 'Booked! ✅ Table for 4 at 8:00 PM tonight. See you then!',
          time: '6:31 PM'
        }
      ],
      badge: 'Table booked instantly'
    },
    {
      id: 3,
      platform: 'Messenger',
      platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png',
      businessName: 'Taco Libre',
      status: 'Usually replies instantly',
      headerColor: 'bg-blue-600',
      messages: [
        {
          type: 'customer',
          text: 'What\'s in your fish tacos?',
          time: '1:45 PM'
        },
        {
          type: 'ai',
          text: 'Our fish tacos have grilled mahi-mahi, cabbage slaw, pico de gallo, and chipotle crema on corn tortillas 🌮',
          time: '1:45 PM'
        },
        {
          type: 'customer',
          text: 'Sounds amazing! I\'ll take 3 fish tacos',
          time: '1:46 PM'
        },
        {
          type: 'ai',
          text: 'Great choice! 3 fish tacos = $18. Pickup or delivery?',
          time: '1:46 PM'
        }
      ],
      badge: 'Menu questions answered instantly'
    },
    {
      id: 4,
      platform: 'Phone',
      platformLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Phone_icon.svg/2048px-Phone_icon.svg.png',
      businessName: 'Sakura Sushi',
      status: 'Connected',
      headerColor: 'bg-gray-900',
      isPhoneCall: true,
      currentMessage: 'Perfect! California roll and miso soup. That\'s $16.50. Ready in 15 minutes!',
      callDuration: '00:45',
      badge: 'Phone order taken after hours'
    }
  ];

  const [currentChat, setCurrentChat] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentChat((prev) => (prev + 1) % chatExamples.length);
    }, 4000);

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
    <div className="relative mx-auto w-80">
      {/* Navigation Arrows */}
      <button
        onClick={prevChat}
        className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextChat}
        className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      {/* Phone Mockup */}
      <div className="bg-black rounded-[2.5rem] p-2">
        <div className={`${currentExample.isPhoneCall ? 'bg-gray-900' : 'bg-white'} rounded-[2rem] h-[600px] overflow-hidden`}>
          
          {currentExample.isPhoneCall ? (
            /* Phone Call Interface */
            <div className="text-white h-full flex flex-col">
              {/* Status bar */}
              <div className="flex justify-between items-center p-4 text-sm">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                </div>
              </div>

              {/* Call info */}
              <div className="text-center mb-8 px-4">
                <h2 className="text-xl font-semibold mb-1">{currentExample.businessName}</h2>
                <p className="text-green-400 text-sm mb-2">{currentExample.status}</p>
                <p className="text-gray-400 text-sm">{currentExample.callDuration}</p>
              </div>

              {/* Avatar with speaking animation */}
              <div className="flex justify-center mb-12">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center scale-110 shadow-lg shadow-blue-500/50">
                  <Phone className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Current message display */}
              <div className="flex-1 flex items-center justify-center px-4 mb-8">
                <div className="bg-gray-800 rounded-2xl p-6 max-w-xs text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-400">🤖 AI Agent</span>
                  </div>
                  <p className="text-sm text-gray-100 leading-relaxed">
                    {currentExample.currentMessage}
                  </p>
                  <div className="flex justify-center space-x-1 mt-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>

              {/* Call controls */}
              <div className="px-8 pb-8">
                <div className="flex justify-center space-x-8">
                  <button className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6" />
                  </button>
                  <button className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
                    <PhoneOff className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Success Badge */}
              <div className="text-center pb-4">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {currentExample.badge}
                </div>
              </div>
            </div>
          ) : (
            /* Chat Interface */
            <>
              {/* Chat Header */}
              <div className={`${currentExample.headerColor} p-4 text-white`}>
                <div className="flex items-center space-x-3">
                  <img 
                    src={currentExample.platformLogo} 
                    alt={currentExample.platform} 
                    className="w-10 h-10 bg-white rounded-full p-1"
                  />
                  <div>
                    <h3 className="font-semibold">{currentExample.businessName}</h3>
                    <p className="text-sm opacity-90">{currentExample.status}</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 h-[480px] overflow-y-auto">
                {currentExample.messages?.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'customer' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`rounded-2xl p-3 max-w-xs ${
                      message.type === 'customer' 
                        ? 'bg-gray-200 rounded-bl-md' 
                        : `${currentExample.platform === 'WhatsApp' ? 'bg-green-500' : 
                             currentExample.platform === 'Messenger' ? 'bg-blue-500' : 
                             'bg-pink-500'} text-white rounded-br-md`
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'customer' ? 'text-gray-500' : 
                        currentExample.platform === 'WhatsApp' ? 'text-green-100' :
                        currentExample.platform === 'Messenger' ? 'text-blue-100' :
                        'text-pink-100'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Success Badge */}
                <div className="text-center pt-4">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-xs font-semibold">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {currentExample.badge}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {chatExamples.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentChat(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentChat ? 'bg-emerald-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: '¿Cuánto tarda en implementarse?',
    answer: 'Opt-in en minutos; ajustes de contenido en 1 hora.'
  },
  {
    question: '¿Responde como "robot"?',
    answer: 'No. Usa tu tono y FAQs; puedes revisar y mejorar respuestas.'
  },
  {
    question: '¿Qué pasa con quejas?',
    answer: 'Las canaliza en privado y notifica a tu equipo.'
  },
  {
    question: '¿Multi-sede?',
    answer: 'Sí, contenido y horarios por local, con métricas por tienda.'
  },
  {
    question: '¿Privacidad y consentimiento?',
    answer: 'Opt-in/opt-out y registro de interacción incluidos.'
  }
]

interface AIConciergeProps {
  // No props needed for the original version
}

const AIConcierge: React.FC<AIConciergeProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isChatModalOpen, setIsChatModalOpen] = useState(false)
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)
  const { 
    isModalOpen,
    currentConfig,
    openModal,
    closeModal
  } = useHubSpotModal()

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>RAY AI Concierge - Turn Restaurant DMs Into Orders.</h1>
        <p>Stop losing hungry customers to slow replies! Our AI takes orders, books tables, and answers menu questions across WhatsApp, Instagram, and Messenger — 24/7, even when your restaurant is closed</p>
        <p>Key features: Instant automated responses, booking and order conversion, reputation protection, multilingual support, brand voice training, and compliance with privacy regulations. Results include 30% more actions from Google and social channels.</p>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Turn Restaurant{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                DMs Into Orders.
                </span>
              </h1>
              
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Stop losing hungry customers to slow replies! Our AI takes orders, books tables, 
              and answers menu questions across WhatsApp, Instagram, and Messenger — 24/7, 
              even when your restaurant is closed. 🚀
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-full">
                <span className="text-emerald-600 font-semibold">✅ Take orders while you sleep</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-600 font-semibold">📅 Auto-book reservations</span>
                        </div>
              <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                <span className="text-purple-600 font-semibold">💬 Answer menu questions</span>
                      </div>
              <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                <span className="text-orange-600 font-semibold">📢 Send smart campaigns</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsChatModalOpen(true)}
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg flex items-center justify-center space-x-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6"
                />
                <span>Try chat</span>
              </button>
              <button 
                onClick={() => setIsPhoneModalOpen(true)}
                className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors font-semibold text-lg flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Try phone call</span>
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
            Too many DMs. Not enough staff. 😤
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-600">Guests message you day and night across all platforms</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-orange-600" />
                          </div>
              <p className="text-gray-600">Your staff can't reply fast enough to everyone</p>
                        </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="w-8 h-8 text-red-600" />
                          </div>
              <p className="text-gray-600">Missed chats = missed orders and frustrated guests</p>
                        </div>
                      </div>
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our AI agent never sleeps. ⚡
            </h3>
            <p className="text-lg text-gray-700">
              It replies in seconds, so you never lose a guest again.
            </p>
                    </div>
                  </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            One Agent. Three Channels. 🚀
          </h2>
          
          {/* Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">Your Guests</h3>
              <p className="text-sm text-gray-600">Message you anywhere</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="flex justify-center space-x-2 mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
                  alt="WhatsApp" 
                  className="w-8 h-8"
                />
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900">AI Agent</h3>
              <p className="text-sm text-gray-600">Responds instantly</p>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">Results</h3>
              <p className="text-sm text-gray-600">Orders, bookings, loyalty</p>
            </div>
                </div>
                
          {/* Four Columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" 
                  alt="WhatsApp" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Where most of your guests already chat. Perfect for orders and quick questions.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Instant order confirmations</li>
                <li>• Menu sharing</li>
                <li>• Delivery updates</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Messenger</h3>
              <p className="text-gray-600 mb-4">Connect with Facebook followers. Great for reservations and events.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Table bookings</li>
                <li>• Event inquiries</li>
                <li>• Special offers</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Instagram className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <p className="text-gray-600 mb-4">Engage with your visual audience. Perfect for showcasing dishes and building community.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Photo-based orders</li>
                <li>• Story interactions</li>
                <li>• Influencer partnerships</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Voice Calls</h3>
              <p className="text-gray-600 mb-4">Never miss a phone order again. Natural voice conversations that feel human.</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 24/7 phone answering</li>
                <li>• Natural voice orders</li>
                <li>• Multilingual support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* POS Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Built to work with your POS. 🔗
            </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            No disruption to your workflow. Our AI syncs with your existing point-of-sale system 
            so orders flow directly into your kitchen without any extra steps.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Menu sync (items, modifiers, prices, taxes)</h3>
                  <p className="text-gray-600 text-sm">Always up-to-date pricing and availability</p>
                </div>
                  </div>
                  
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Order injection to POS (pickup, delivery, dine-in)</h3>
                  <p className="text-gray-600 text-sm">Orders appear directly in your kitchen system</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Stock & 86'd items respected</h3>
                  <p className="text-gray-600 text-sm">Never sell what you don't have</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Order throttling by kitchen load</h3>
                  <p className="text-gray-600 text-sm">Smart pacing to prevent overwhelm</p>
          </div>
        </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Store hours, service types, and fees honored</h3>
                  <p className="text-gray-600 text-sm">Respects your business rules automatically</p>
                </div>
          </div>
          
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Receipts + order IDs that match your POS</h3>
                  <p className="text-gray-600 text-sm">Perfect tracking and reconciliation</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-600">
                  <strong>Don't see yours?</strong> We'll confirm compatibility.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Happy restaurant owner with pastry" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* POS Logos */}
          <div className="mt-16">
            <p className="text-center text-gray-600 mb-8 font-medium">Works with your POS:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center justify-center h-16 w-24">
                <span className="font-bold text-gray-700">Toast</span>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center justify-center h-16 w-24">
                <span className="font-bold text-gray-700">Square</span>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center justify-center h-16 w-24">
                <span className="font-bold text-gray-700">Clover</span>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center justify-center h-16 w-24 relative">
                <span className="font-bold text-gray-700">Lightspeed</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center justify-center h-16 w-24 relative">
                <span className="font-bold text-gray-700">Micros</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center justify-center h-16 w-24 relative">
                <span className="font-bold text-gray-700">Brink</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="bg-emerald-50 border-2 border-dashed border-emerald-300 rounded-lg p-4 flex items-center justify-center h-16 w-32">
                <span className="text-emerald-600 font-medium text-sm">Ask about your POS</span>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-6 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-600">Supported today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">In beta</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why restaurants love it ❤️
            </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">⚡ 24/7 instant replies</h3>
                  <p className="text-gray-600">Never miss a message, even when you're closed or busy</p>
                  </div>
                  </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🍕 More orders automatically</h3>
                  <p className="text-gray-600">Turn every message into a potential sale</p>
          </div>
        </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📅 Automatic bookings</h3>
                  <p className="text-gray-600">Let guests reserve tables without calling</p>
                </div>
          </div>
          
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <Star className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">⭐ Build loyalty rewards</h3>
                  <p className="text-gray-600">Keep customers coming back with points and offers</p>
                      </div>
                    </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🛠️ No extra staff needed</h3>
                  <p className="text-gray-600">Save on labor costs while improving service</p>
                </div>
              </div>
          </div>
          
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                It's like having a full-time host, server, and marketer… inside your inbox. 🎯
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">AI Dashboard</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Messages today</span>
                    <span className="text-sm font-semibold text-gray-900">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Orders taken</span>
                    <span className="text-sm font-semibold text-emerald-600">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tables booked</span>
                    <span className="text-sm font-semibold text-blue-600">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Response time</span>
                    <span className="text-sm font-semibold text-purple-600">1.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AI Concierge.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Be everywhere your guests are — without lifting a finger. 🙌
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of restaurants already using AI to boost their sales. 
            Start your free trial today and see the difference in 24 hours.
          </p>
          <button 
            onClick={() => openModal('demo-free')}
            className="bg-white text-emerald-600 px-12 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl"
          >
            Book a Demo Now
          </button>
          <p className="mt-4 text-sm opacity-75">
            No credit card required • 14-day free trial • Setup in under 5 minutes
          </p>
        </div>
      </section>
      
      {/* HubSpot Modals */}
      <HubSpotUnifiedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        config={currentConfig}
      />
      
      {/* Try It Now Modals */}
      <TryItNowModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />
      
      <PhoneCallModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
      />
    </>
  )
}

export default AIConcierge