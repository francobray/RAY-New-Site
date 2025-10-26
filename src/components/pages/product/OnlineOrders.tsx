'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, TrendingUp, ArrowRight, CheckCircle, ChevronDown, ChevronUp, CreditCard, Smartphone, Globe, BarChart3 } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import { type Locale } from '../../../lib/i18n'

interface OnlineOrdersProps {
  locale?: Locale
}

const OnlineOrders: React.FC<OnlineOrdersProps> = ({ locale = 'es' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: locale === 'es' ? '¿Cómo puedo hacer que mis clientes ordenen directamente?' : 'How can I get my customers to order directly?',
      answer: locale === 'es' ? 'Ofrecemos múltiples canales para que tus clientes ordenen directamente: tu propio sitio web optimizado para pedidos, una app móvil personalizada, códigos QR para mesas, y integración con redes sociales. Todos estos canales dirigen a los clientes a tu plataforma propia donde obtienes márgenes más altos y datos valiosos de clientes.' : 'We provide multiple channels for your customers to order directly: your own optimized ordering website, a custom mobile app, QR codes for tables, and social media integration. All these channels direct customers to your own platform where you get higher margins and valuable customer data.'
    },
    {
      question: locale === 'es' ? '¿Con qué sistemas POS se integran?' : 'What POS systems do you integrate with?',
      answer: locale === 'es' ? 'Nos integramos con los principales sistemas POS incluyendo Square, Toast, Clover, Resy, OpenTable, y muchos más. Nuestro equipo técnico maneja toda la configuración para que tus pedidos online se sincronicen automáticamente con tu cocina y sistema de gestión existente.' : 'We integrate with major POS systems including Square, Toast, Clover, Resy, OpenTable, and many more. Our technical team handles all the setup so your online orders sync automatically with your kitchen and existing management system.'
    },
    {
      question: locale === 'es' ? 'Ya uso otro sistema de pedidos online, ¿por qué debería cambiarme?' : 'I already use another online ordering system, why should I switch?',
      answer: locale === 'es' ? 'A diferencia de otros sistemas, RAY te da control total sobre tus clientes y datos. Obtienes márgenes más altos (sin comisiones de terceros), marketing automatizado basado en datos de clientes, y una experiencia completamente personalizada. Además, manejamos la migración completa sin interrumpir tu operación.' : 'Unlike other systems, RAY gives you complete control over your customers and data. You get higher margins (no third-party commissions), automated marketing based on customer data, and a fully customized experience. Plus, we handle the complete migration without disrupting your operation.'
    }
  ]

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'RAY Pedidos Online - Impulsa pedidos directos con márgenes más altos' : 'RAY Online Orders - Drive direct orders with higher margins'}</h1>
        <p>{locale === 'es' ? 'Plataforma completa de pedidos online que te ayuda a capturar más pedidos directos y reducir dependencia de apps de terceros.' : 'Complete online ordering platform that helps you capture more direct orders and reduce dependency on third-party apps.'}</p>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <ShoppingBag className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">
                  {locale === 'es' ? 'Pedidos Directos' : 'Direct Orders'}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {locale === 'es' ? 'Impulsa pedidos directos con ' : 'Drive direct orders with '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {locale === 'es' ? 'márgenes más altos' : 'higher margins'}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {locale === 'es' ? 'Reduce dependencia de apps de terceros. Captura más pedidos directos con tu propia plataforma de pedidos online optimizada.' : 'Reduce dependency on third-party apps. Capture more direct orders with your own optimized online ordering platform.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href={`/${locale}/demo?utm_source=online-orders-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
                  data-cta="demo"
                  data-analytics="online_orders_hero"
                  aria-label="Get a free demo"
                >
                  {locale === 'es' ? 'Agenda una Demo' : 'Get a free demo'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
                  data-cta="grader"
                  data-analytics="online_orders_hero"
                  aria-label="Scan your restaurant"
                >
                  {locale === 'es' ? 'Escanea tu restaurante' : 'Scan your restaurant'}
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-ray-dark-600 justify-center lg:justify-start">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                  <span>{locale === 'es' ? '+47% más pedidos online' : '+47% more online orders'}</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 text-ray-blue mr-2" />
                  <span>{locale === 'es' ? 'Márgenes más altos' : 'Higher margins'}</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual - Real Time Tracking */}
            <div className="relative">
              <div className="relative w-full">
                {/* Mobile App Real Time Tracking Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/online-ordering/Temple-ordering-2.png"
                    alt={locale === 'es' ? 'Interfaz de pedidos online de Temple Craft' : 'Temple Craft online ordering interface'}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">0%</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Comisiones' : 'Commission'}</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">100%</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Tus datos' : 'Your data'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/online-ordering/fondo-online-ordering-03.jpg"
            alt="Restaurant online ordering background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">
            {/* Left side - Title and description */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {locale === 'es' ? 'Todo lo que necesitas para pedidos online exitosos' : 'Everything you need for successful online orders'}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {locale === 'es' ? 'Plataforma completa que convierte visitantes en clientes leales con experiencias de pedido optimizadas.' : 'Complete platform that converts visitors into loyal customers with optimized ordering experiences.'}
              </p>
            </div>
            
            {/* Right side - Features in column */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {locale === 'es' ? 'Sitio Web Optimizado' : 'Optimized Website'}
                  </h3>
                  <p className="text-white/90 mb-3 leading-relaxed text-sm">
                    {locale === 'es' ? 'Sitio web de pedidos rápido y móvil-optimizado que convierte visitantes en pedidos.' : 'Fast, mobile-optimized ordering website that converts visitors into orders.'}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Diseño responsive para móvil' : 'Mobile-responsive design'}
                    </li>
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Checkout optimizado' : 'Optimized checkout flow'}
                    </li>
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'SEO y velocidad optimizada' : 'SEO and speed optimized'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {locale === 'es' ? 'App Móvil Personalizada' : 'Custom Mobile App'}
                  </h3>
                  <p className="text-white/90 mb-3 leading-relaxed text-sm">
                    {locale === 'es' ? 'App móvil con tu marca que impulsa pedidos repetidos y lealtad de clientes.' : 'Branded mobile app that drives repeat orders and customer loyalty.'}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Notificaciones push' : 'Push notifications'}
                    </li>
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Programa de lealtad integrado' : 'Built-in loyalty program'}
                    </li>
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Pedidos offline' : 'Offline ordering'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {locale === 'es' ? 'Análisis y Datos' : 'Analytics & Data'}
                  </h3>
                  <p className="text-white/90 mb-3 leading-relaxed text-sm">
                    {locale === 'es' ? 'Insights detallados de clientes y ventas para optimizar tu negocio.' : 'Detailed customer and sales insights to optimize your business.'}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Dashboard en tiempo real' : 'Real-time dashboard'}
                    </li>
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Reportes de ventas' : 'Sales reporting'}
                    </li>
                    <li className="flex items-start text-xs text-white/80">
                      <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                      {locale === 'es' ? 'Análisis de comportamiento' : 'Behavior analytics'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Ordering Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Pedidos online que se sienten como las apps de delivery' : 'Online ordering that feels like the delivery apps'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Mobile App Interface */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs mx-auto">
                <Image 
                  src="/images/branded-apps/Temple-mobile-app-menu.png"
                  alt={locale === 'es' ? 'Interfaz de menú de la app móvil de Temple' : 'Temple mobile app menu interface'}
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Right side - Benefits */}
            <div className="space-y-8">
              {/* Benefit 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {locale === 'es' ? 'Fácil para que tus clientes hagan el cambio' : 'Easy for your guests to make the switch'}
                  </h3>
                  <p className="text-ray-darkGray">
                    {locale === 'es' ? 'Tanto tu sitio web como tu aplicación móvil de pedidos online son fáciles para los clientes, ya que se sienten familiares.' : 'Both your website and mobile online ordering are easy for customers, since they feel familiar.'}
                  </p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {locale === 'es' ? 'Comienza a ser dueño de los datos de tus clientes' : 'Start owning your customer data'}
                  </h3>
                  <p className="text-ray-darkGray">
                    {locale === 'es' ? 'Los pedidos directos significan que obtienes los datos de los clientes, no terceros. Construye más conexiones con tus clientes.' : 'Direct orders mean you get customer data, not third-parties. Build more connections with your guests.'}
                  </p>
                </div>
              </div>
              
              {/* Benefit 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {locale === 'es' ? 'Más barato y mejor para tus clientes' : 'Cheaper and better for your guests'}
                  </h3>
                  <p className="text-ray-darkGray">
                    {locale === 'es' ? 'Ordenar directamente significa que los clientes evitan las tarifas de terceros, por lo que acudirán a ti primero.' : 'Ordering directly means that guests avoid third-party fees, so they\'ll go to you first.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">FAQs</h2>
            <p className="text-xl text-ray-darkGray">
              {locale === 'es' ? 'Respuestas a preguntas comunes sobre pedidos online.' : 'Answers to common questions about online ordering.'}
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-semibold text-ray-dark-900 mb-2">
                      {faq.question}
                    </h3>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-ray-dark-700 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineOrders