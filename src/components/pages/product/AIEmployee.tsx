'use client'

import React, { useState } from 'react'
import { MessageSquare, Calendar, ShoppingBag, Users, ArrowRight, CheckCircle, Smartphone, Globe, MessageCircle, Facebook, HelpCircle } from 'lucide-react'
import Button from '../../shared/BaseButton'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface AIEmployeeProps {
  locale: Locale
}

const AIEmployee: React.FC<AIEmployeeProps> = ({ locale }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(locale)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const platforms = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      description: locale === 'es' 
        ? 'Atención 24/7 por WhatsApp con respuestas instantáneas'
        : '24/7 WhatsApp support with instant responses',
      color: 'text-green-600'
    },
    {
      name: 'Instagram',
      icon: MessageCircle,
      description: locale === 'es'
        ? 'Responde mensajes directos y comentarios automáticamente'
        : 'Automatically respond to DMs and comments',
      color: 'text-pink-600'
    },
    {
      name: 'Website',
      icon: Globe,
      description: locale === 'es'
        ? 'Widget conversacional integrado en tu sitio web'
        : 'Conversational widget integrated on your website',
      color: 'text-blue-600'
    },
    {
      name: 'Facebook Messenger',
      icon: Facebook,
      description: locale === 'es'
        ? 'Atención automatizada en Messenger sin límites'
        : 'Automated support on Messenger with no limits',
      color: 'text-blue-700'
    }
  ]

  const features = t.AI_EMPLOYEE_PAGE?.FEATURES?.LIST || []

  const faqs = t.AI_EMPLOYEE_PAGE?.FAQ?.QUESTIONS || []

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Empleado AI - Asistente conversacional para restaurantes' : 'AI Employee - Conversational assistant for restaurants'}</h1>
        <p>{locale === 'es' ? 'Agente de IA que responde preguntas, toma reservas, procesa pedidos e inscribe a programas de lealtad en WhatsApp, Instagram, Website y Facebook Messenger.' : 'AI agent that answers questions, takes bookings, processes orders and signs up customers to loyalty programs on WhatsApp, Instagram, Website and Facebook Messenger.'}</p>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-ray-dark-900">
                  {locale === 'es' ? 'Empleado AI' : 'AI Employee'}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {t.AI_EMPLOYEE_PAGE?.HERO?.TITLE || (locale === 'es' ? 'Tu empleado digital ' : 'Your digital employee ')}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  {t.AI_EMPLOYEE_PAGE?.HERO?.TITLE_HIGHLIGHT || (locale === 'es' ? 'que nunca duerme' : 'that never sleeps')}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {t.AI_EMPLOYEE_PAGE?.HERO?.SUBTITLE || (locale === 'es' 
                  ? 'Agente de IA que atiende a tus clientes 24/7 en WhatsApp, Instagram, tu sitio web y Facebook Messenger. Responde preguntas sobre tu menú, toma reservas, procesa pedidos y gestiona inscripciones a tu programa de lealtad. Todo integrado con tu POS.'
                  : 'AI agent that serves your customers 24/7 on WhatsApp, Instagram, your website and Facebook Messenger. Answers menu questions, takes bookings, processes orders and manages loyalty program signups. All integrated with your POS.')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href={`/${locale}/demo?utm_source=ai-employee-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
                  data-cta="demo-free"
                  data-analytics="ai_employee_hero"
                  aria-label="Get a demo"
                >
                  {t.AI_EMPLOYEE_PAGE?.HERO?.CTA_DEMO || (locale === 'es' ? 'Agenda una Demo' : 'Get a demo')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/pricing?utm_source=ai-employee-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-pricing`}
                  data-cta="pricing"
                  data-analytics="ai_employee_hero"
                  aria-label="View pricing"
                >
                  {t.AI_EMPLOYEE_PAGE?.HERO?.CTA_PRICING || (locale === 'es' ? 'Ver Precios' : 'View Pricing')}
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{locale === 'es' ? 'Respuesta instantánea' : 'Instant response'}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{locale === 'es' ? 'Multi-plataforma' : 'Multi-platform'}</span>
                </div>
              </div>
            </div>
            
            {/* Right side - WhatsApp Chat Interface */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
                {/* WhatsApp Header */}
                <div className="bg-green-600 p-4 text-white flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{locale === 'es' ? 'Restaurante La Piazza' : 'La Piazza Restaurant'}</h3>
                    <p className="text-xs text-green-100">{locale === 'es' ? 'En línea' : 'Online'}</p>
                  </div>
                  <img 
                    src="/images/WhatsApp.svg.webp" 
                    alt="WhatsApp" 
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
                
                {/* Chat Messages */}
                <div className="bg-[#e5ddd5] p-4 space-y-3 min-h-[400px]">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        {locale === 'es' ? '¿Tienen mesas disponibles para esta noche a las 8?' : 'Do you have tables available tonight at 8?'}
                      </p>
                      <span className="text-xs text-gray-600 float-right mt-1">7:45 PM</span>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        {locale === 'es' ? '¡Sí! Tenemos disponibilidad a las 8pm. ¿Para cuántas personas?' : 'Yes! We have availability at 8pm. For how many people?'}
                      </p>
                      <span className="text-xs text-gray-600 float-right mt-1">7:45 PM</span>
                    </div>
                  </div>
                  
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        {locale === 'es' ? 'Para 4 personas' : 'For 4 people'}
                      </p>
                      <span className="text-xs text-gray-600 float-right mt-1">7:46 PM</span>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        {locale === 'es' ? '¡Perfecto! Mesa para 4 a las 8pm. ¿Me das tu nombre por favor?' : 'Perfect! Table for 4 at 8pm. May I have your name please?'}
                      </p>
                      <span className="text-xs text-gray-600 float-right mt-1">7:46 PM</span>
                    </div>
                  </div>
                  
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        {locale === 'es' ? 'María García' : 'Maria Garcia'}
                      </p>
                      <span className="text-xs text-gray-600 float-right mt-1">7:47 PM</span>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">
                        {locale === 'es' ? '✅ ¡Listo! Reserva confirmada para María García, 4 personas, hoy a las 8pm. Te esperamos! 🍕' : '✅ Done! Reservation confirmed for Maria Garcia, 4 people, tonight at 8pm. See you soon! 🍕'}
                      </p>
                      <span className="text-xs text-gray-600 float-right mt-1">7:47 PM</span>
                    </div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-xs font-medium whitespace-nowrap">
                  {locale === 'es' ? '🤖 Reserva tomada en 2 minutos' : '🤖 Booking made in 2 minutes'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Problem */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'es' ? 'El problema que enfrentas todos los días' : 'The problem you face every day'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>{locale === 'es' ? 'Llamadas perdidas cuando el restaurante está ocupado o cerrado' : 'Missed calls when the restaurant is busy or closed'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>{locale === 'es' ? 'Mensajes sin responder en WhatsApp e Instagram' : 'Unanswered messages on WhatsApp and Instagram'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>{locale === 'es' ? 'Clientes frustrados por falta de respuesta rápida' : 'Frustrated customers due to slow responses'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>{locale === 'es' ? 'Tu equipo sobrecargado con preguntas repetitivas' : 'Your team overloaded with repetitive questions'}</span>
                </li>
              </ul>
            </div>
            {/* Solution */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'es' ? 'La solución: Tu empleado AI' : 'The solution: Your AI Employee'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Responde a todos los clientes 24/7, incluso cuando estás cerrado' : 'Responds to all customers 24/7, even when you\'re closed'}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Toma reservas y pedidos directamente desde cualquier plataforma' : 'Takes bookings and orders directly from any platform'}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Libera a tu equipo para enfocarse en la experiencia del cliente en persona' : 'Frees your team to focus on in-person customer experience'}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Integrado con tu POS para sincronización automática' : 'Integrated with your POS for automatic synchronization'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Atiende a tus clientes donde ya están' : 'Serve your customers where they already are'}
            </h2>
            <p className="text-xl text-ray-dark-700 max-w-3xl mx-auto">
              {locale === 'es'
                ? 'Tu agente de IA trabaja en todas las plataformas que tus clientes usan para contactarte. Sin necesidad de cambiar tus procesos actuales.'
                : 'Your AI agent works on all the platforms your customers use to reach you. No need to change your current processes.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className={`w-16 h-16 ${platform.color.replace('text-', 'bg-')} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${platform.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-ray-dark-700 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* POS Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Integrado con los sistemas POS más populares' : 'Integrated with popular restaurant POS systems'}
            </h2>
            <p className="text-xl text-ray-dark-700 max-w-3xl mx-auto">
              {locale === 'es'
                ? 'Nuestro agente de IA se conecta directamente con tu sistema POS para sincronizar menús, verificar disponibilidad y enviar pedidos automáticamente a tu cocina.'
                : 'Our AI agent connects directly with your POS system to sync menus, verify availability and automatically send orders to your kitchen.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {locale === 'es' ? 'Sincronización automática de menús' : 'Automatic menu synchronization'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === 'es'
                      ? 'El agente siempre tiene tu menú actualizado directamente desde tu POS. Cuando agregues o modifiques productos, el agente lo sabe al instante.'
                      : 'The agent always has your current menu directly from your POS. When you add or modify products, the agent knows instantly.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {locale === 'es' ? 'Verificación de disponibilidad en tiempo real' : 'Real-time availability verification'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === 'es'
                      ? 'Antes de tomar un pedido, el agente verifica qué productos están disponibles en tu POS, evitando promesas de productos agotados.'
                      : 'Before taking an order, the agent verifies which products are available in your POS, avoiding promises of out-of-stock items.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {locale === 'es' ? 'Pedidos enviados directamente a tu cocina' : 'Orders sent directly to your kitchen'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === 'es'
                      ? 'Los pedidos tomados por el agente se envían automáticamente a tu POS y aparecen en tu sistema de cocina sin pasos adicionales.'
                      : 'Orders taken by the agent are automatically sent to your POS and appear in your kitchen system without extra steps.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {locale === 'es' ? 'Sincronización de reservas' : 'Booking synchronization'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === 'es'
                      ? 'Las reservas tomadas por el agente se sincronizan con tu sistema de reservas integrado al POS, manteniendo todo organizado en un solo lugar.'
                      : 'Bookings taken by the agent sync with your POS-integrated booking system, keeping everything organized in one place.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - POS Systems Logos */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {locale === 'es' ? 'Compatible con los principales sistemas POS' : 'Compatible with major POS systems'}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Toast', logo: '🍞' },
                  { name: 'Square', logo: '⬜' },
                  { name: 'Clover', logo: '☘️' },
                  { name: 'Resy', logo: '📅' },
                  { name: 'OpenTable', logo: '📋' },
                  { name: 'UberEats', logo: '🍔' },
                  { name: 'DoorDash', logo: '🚗' },
                  { name: 'Grubhub', logo: '🥡' }
                ].map((pos, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="text-3xl mb-2">{pos.logo}</div>
                    <span className="text-sm font-medium text-gray-700">{pos.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-600 mt-6">
                {locale === 'es' 
                  ? 'Y muchos más... Nos integramos con más de 50 sistemas POS populares.'
                  : 'And many more... We integrate with 50+ popular POS systems.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
                {t.AI_EMPLOYEE_PAGE?.FEATURES?.TITLE || (locale === 'es' ? 'Características principales' : 'Key features')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Visual */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-gray-400" />
                </div>
              </div>
              
              {/* Right side - Features */}
              <div className="space-y-8">
                {features.map((feature: any, index: number) => {
                  const icons = [MessageSquare, Calendar, ShoppingBag, Users, HelpCircle]
                  const IconComponent = icons[index % icons.length]
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title || feature.TITLE}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description || feature.DESCRIPTION}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.AI_EMPLOYEE_PAGE?.FAQ?.TITLE || (locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions')}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-ray-dark-900 pr-8">
                    {faq.question || faq.QUESTION}
                  </span>
                  <svg
                    className={`w-5 h-5 text-ray-blue flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-ray-dark-700 leading-relaxed">
                      {faq.answer || faq.ANSWER}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {locale === 'es' ? '¿Listo para tener un empleado que nunca duerme?' : 'Ready to have an employee that never sleeps?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {locale === 'es'
              ? 'Agenda una demo y descubre cómo nuestro agente de IA puede liberar a tu equipo para enfocarse en lo que más importa: brindar una experiencia excepcional a tus clientes.'
              : 'Schedule a demo and discover how our AI agent can free your team to focus on what matters most: delivering an exceptional experience to your customers.'}
          </p>
          <Button
            variant="secondary"
            size="lg"
            href={`/${locale}/demo?utm_source=ai-employee-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-cta`}
          >
            {locale === 'es' ? 'Agenda una Demo' : 'Get a demo'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

export default AIEmployee

