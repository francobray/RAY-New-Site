'use client'

import React, { useState } from 'react'
import { TrendingUp, ArrowRight, CheckCircle, Users, Zap, ChevronDown, ChevronUp, Mail, Target, Bot } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import { type Locale } from '../../../lib/i18n'

interface AutomatedMarketingProps {
  locale?: Locale
}

const AutomatedMarketing: React.FC<AutomatedMarketingProps> = ({ locale = 'es' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const features = [
    {
      icon: Target,
      title: locale === 'es' ? 'Haz crecer tus ventas con campañas comprobadas' : 'Grow your sales with proven campaigns',
      description: locale === 'es' ? 'Ejecuta campañas de marketing automatizadas que hacen crecer pedidos.' : 'Run automated marketing campaigns that grow orders.',
      details: locale === 'es' ? [
        'Campañas probadas que generan resultados',
        'Automatización completa para ahorrar tiempo'
      ] : [
        'Proven campaigns that generate results',
        'Full automation to save time'
      ]
    },
    {
      icon: Users,
      title: locale === 'es' ? 'Haz crecer tu lista de clientes' : 'Grow your customer list',
      description: locale === 'es' ? 'Cada cliente directo genera más datos, dándote más datos para impulsar más ventas.' : 'Every direct order grows your list, giving you more data to drive more sales.',
      details: locale === 'es' ? [
        'Construcción automática de base de datos de clientes',
        'Segmentación inteligente para mejores resultados'
      ] : [
        'Automatic customer database building',
        'Smart segmentation for better results'
      ]
    },
    {
      icon: Bot,
      title: locale === 'es' ? 'Escribe más rápido con IA' : 'Write faster with AI',
      description: locale === 'es' ? 'Simplifica tus campañas de marketing. Usa nuestra IA asistente para escribir correos inteligentes en segundos.' : 'Simplify your marketing campaigns. Use our AI assistant to write smart emails in seconds.',
      details: locale === 'es' ? [
        'Generación de contenido impulsada por IA',
        'Plantillas optimizadas para restaurantes'
      ] : [
        'AI-powered content generation',
        'Templates optimized for restaurants'
      ]
    }
  ]

  const faqs = [
    {
      question: locale === 'es' ? '¿Cuáles son algunos ejemplos de tus campañas comprobadas?' : 'What are some examples of your proven campaigns?',
      answer: locale === 'es' ? 'Nuestras campañas incluyen recordatorios de pedidos, ofertas de lealtad, promociones estacionales, seguimiento post-compra, y campañas de reactivación de clientes inactivos. Todas están optimizadas específicamente para restaurantes y han demostrado aumentar las ventas consistentemente.' : 'Our campaigns include order reminders, loyalty offers, seasonal promotions, post-purchase follow-ups, and inactive customer reactivation campaigns. All are specifically optimized for restaurants and have proven to increase sales consistently.'
    },
    {
      question: locale === 'es' ? '¿Puedo ejecutar mis propias campañas de marketing?' : 'Can I run my own marketing campaigns?',
      answer: locale === 'es' ? 'Absolutamente. Puedes crear campañas personalizadas usando nuestro editor intuitivo y asistente de IA. También proporcionamos plantillas probadas que puedes personalizar según tu marca y necesidades específicas.' : 'Absolutely. You can create custom campaigns using our intuitive editor and AI assistant. We also provide proven templates that you can customize to match your brand and specific needs.'
    },
    {
      question: locale === 'es' ? '¿Debería dejar de usar apps de terceros?' : 'Should I stop using third-party apps?',
      answer: locale === 'es' ? 'No necesariamente. Nuestro marketing automatizado funciona mejor cuando tienes clientes directos, pero puede complementar tus esfuerzos en plataformas de terceros. Te ayudamos a migrar gradualmente más clientes a pedidos directos donde tienes mejor control y márgenes.' : 'Not necessarily. Our automated marketing works best when you have direct customers, but it can complement your third-party platform efforts. We help you gradually migrate more customers to direct orders where you have better control and margins.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'RAY Marketing Automatizado - Marketing que genera dinero, impulsado por datos de clientes' : 'RAY Automated Marketing - Money-making marketing, powered by customer data'}</h1>
        <p>{locale === 'es' ? 'RAY Marketing Automatizado utiliza datos de clientes para crear campañas que generan más ventas automáticamente.' : 'RAY Automated Marketing uses customer data to create campaigns that generate more sales automatically.'}</p>
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
                <TrendingUp className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">
                  {locale === 'es' ? 'Marketing Impulsado por Datos' : 'Data-Powered Marketing'}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {locale === 'es' ? 'Marketing que genera dinero, ' : 'Money-making marketing, '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {locale === 'es' ? 'impulsado por datos de clientes' : 'powered by customer data'}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {locale === 'es' ? 'Convierte cada pedido en datos valiosos. Usa esos datos para ejecutar campañas de marketing automatizadas que hacen crecer tus ventas.' : 'Turn every order into valuable data. Use that data to run automated marketing campaigns that grow your sales.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href={`/${locale}/demo?utm_source=marketing-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
                  data-cta="demo"
                  data-analytics="marketing_hero"
                  aria-label="Get a free demo"
                >
                  {locale === 'es' ? 'Obtén una demo gratis' : 'Get a free demo'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/pricing?utm_source=marketing-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-pricing`}
                  data-cta="pricing"
                  data-analytics="marketing_hero"
                  aria-label="View Pricing"
                >
                  {locale === 'es' ? 'Ver Precios' : 'View Pricing'}
                </Button>
              </div>
            </div>
            
            {/* Hero Visual - Marketing Dashboard */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                {/* Dashboard mockup */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {locale === 'es' ? 'Resumen de Marketing' : 'Marketing Overview'}
                    </h3>
                    <div className="flex space-x-4 mt-2 text-sm text-gray-600">
                      <span>{locale === 'es' ? 'Emails y SMS' : 'Emails and SMS'}</span>
                    </div>
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600">$2,000</div>
                        <div className="text-sm text-blue-700">Revenue</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-green-600">62</div>
                        <div className="text-sm text-green-700">Orders</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600">82%</div>
                        <div className="text-sm text-purple-700">Open Rate</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-orange-600">1,203</div>
                        <div className="text-sm text-orange-700">Subscribers</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-teal-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-teal-600">100%</div>
                        <div className="text-sm text-teal-700">Delivered</div>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-indigo-600">75%</div>
                        <div className="text-sm text-indigo-700">Click Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">+47%</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Más ventas' : 'More sales'}</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">AI</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Automatizado' : 'Automated'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Features */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-ray-darkGray mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                            <CheckCircle className="w-4 h-4 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Right side - Dashboard preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">
                        {locale === 'es' ? 'Campañas Activas' : 'Active Campaigns'}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {locale === 'es' ? '3 ejecutándose' : '3 running'}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-blue-900">
                              {locale === 'es' ? 'Recordatorio de Superbowl' : 'Superbowl Reminder'}
                            </div>
                            <div className="text-sm text-blue-600">
                              {locale === 'es' ? 'Enviado a 1,203 clientes' : 'Sent to 1,203 customers'}
                            </div>
                          </div>
                          <div className="text-blue-600">
                            <Mail className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-green-900">
                              {locale === 'es' ? 'Día del Superbowl' : 'Superbowl Day'}
                            </div>
                            <div className="text-sm text-green-600">
                              {locale === 'es' ? 'Programado para hoy' : 'Scheduled for today'}
                            </div>
                          </div>
                          <div className="text-green-600">
                            <Zap className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-purple-900">
                              {locale === 'es' ? 'Seguimiento del Superbowl' : 'Superbowl Follow Up'}
                            </div>
                            <div className="text-sm text-purple-600">
                              {locale === 'es' ? 'Programado para mañana' : 'Scheduled for tomorrow'}
                            </div>
                          </div>
                          <div className="text-purple-600">
                            <Target className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Automation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Alcanza más clientes con marketing automatizado' : 'Reach more customers with automated marketing'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Email interface */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl max-w-md mx-auto">
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Email header */}
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Mail className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {locale === 'es' ? 'Superbowl' : 'Superbowl'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {locale === 'es' ? 'Borrador' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Email content */}
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="bg-yellow-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-yellow-800">
                          {locale === 'es' ? 'Cada 29 de enero' : 'Every January 29'}
                        </div>
                        <div className="text-xs text-yellow-600 mt-1">
                          {locale === 'es' ? 'Activador automático' : 'Auto trigger'}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-blue-50 rounded p-2">
                          <div className="text-xs font-medium text-blue-800">
                            {locale === 'es' ? 'Recordatorio del Superbowl' : 'Superbowl Reminder'}
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded p-2">
                          <div className="text-xs font-medium text-green-800">
                            {locale === 'es' ? 'Día del Superbowl' : 'Superbowl Day'}
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded p-2">
                          <div className="text-xs font-medium text-purple-800">
                            {locale === 'es' ? 'Seguimiento del Superbowl' : 'Superbowl Follow Up'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Marketing types */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-ray-blue/10 text-ray-blue rounded-full text-sm font-medium mb-4">
                  {locale === 'es' ? 'Marketing comprobado' : 'Proven marketing'}
                </div>
                <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                  {locale === 'es' ? 'Impulsa las ventas con campañas inteligentes y automatizadas.' : 'Boost sales with smart, automated campaigns.'}
                </h3>
              </div>
              
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-ray-green/10 text-ray-green rounded-full text-sm font-medium mb-4">
                  {locale === 'es' ? 'IA marketing' : 'AI marketing'}
                </div>
                <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                  {locale === 'es' ? 'Escribe correos instantáneamente con IA.' : 'Write emails instantly with AI.'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Data visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'es' ? 'Tus pedidos, tus datos.' : 'Your orders, your data.'}
                  </h3>
                  <h4 className="text-xl font-semibold">
                    {locale === 'es' ? 'Haz crecer tu lista, haz crecer tus ventas.' : 'Grow your list, grow your sales.'}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Clientes nuevos esta semana' : 'New customers this week'}
                      </span>
                      <span className="font-bold">+127</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Datos de contacto recopilados' : 'Contact data collected'}
                      </span>
                      <span className="font-bold">1,203</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Campañas activas' : 'Active campaigns'}
                      </span>
                      <span className="font-bold">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - AI Email generation */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  +
                </div>
                <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                  {locale === 'es' ? 'Escribe correos instantáneamente con IA.' : 'Write emails instantly with AI.'}
                </h3>
              </div>
              
              {/* AI Email mockup */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {locale === 'es' ? 'Hacer el Día del Juego Delicioso' : 'Make Game Day Delicious'}
                    </span>
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                  </div>
                  
                  <div className="bg-gray-50 rounded p-3">
                    <p className="text-sm text-gray-700">
                      {locale === 'es' ? 'Hola [Nombre], ¡El Superbowl está aquí! Obtén 20% de descuento en tu pedido favorito usando el código SUPER20. Perfecto para ver el juego con amigos.' : 'Hey [Name], Super Bowl is here! Get 20% off your favorite order using code SUPER20. Perfect for watching the game with friends.'}
                    </p>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {locale === 'es' ? 'Usa IA para escribir correos inteligentes basados en $200 en pedidos' : 'Use AI to write smart emails based on $200 in orders'}
                  </div>
                  
                  <div className="bg-gray-900 text-white text-xs p-2 rounded">
                    30/1/24
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-orange-50 rounded p-2">
                      <div className="text-xs font-medium text-orange-800">
                        {locale === 'es' ? 'Pizza de Queso' : 'Cheese Pizza'}
                      </div>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <div className="text-xs font-medium text-orange-800">
                        {locale === 'es' ? 'Alitas Buffalo' : 'Buffalo Wings'}
                      </div>
                    </div>
                  </div>
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
              {locale === 'es' ? 'Respuestas a preguntas comunes sobre nuestro marketing automatizado.' : 'Answers to common questions about our automated marketing.'}
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
          
          {/* Testimonial Card */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-ray-blue/5 to-ray-green/5">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-ray-blue to-ray-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <blockquote className="text-lg font-medium text-ray-dark-900 mb-2">
                    "{locale === 'es' ? 'Puedo decir con confianza que Owner es la mejor tecnología en nuestro restaurante. Hemos aumentado las ventas directas online en más de $7,000 en los últimos 10 meses en SÓLO.' : 'I can say confidently that Owner is the best technology in our restaurant. We\'ve increased direct online sales by over $7,000 in the past 10 months in SÓLO.'}"
                  </blockquote>
                  <div className="text-sm text-ray-darkGray">
                    <div className="font-medium">James</div>
                    <div>{locale === 'es' ? 'Propietario de SÓLO San Diego' : 'Owner of SÓLO San Diego'}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="w-32 h-32 bg-gradient-to-r from-ray-blue to-ray-green rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-3xl">R</span>
              </div>
              <div className="flex-1">
                <blockquote className="text-xl lg:text-2xl font-medium text-ray-dark-900 mb-4">
                  "{locale === 'es' ? 'La plataforma ha sido como un superpoder para restaurantes que aumenta las ventas e impulsa nuevos clientes consistentemente.' : 'The platform has been like a superpower for restaurants that increases sales and drives new customers consistently.'}"
                </blockquote>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="text-ray-darkGray mb-4 lg:mb-0">
                    <div className="font-semibold text-lg">Rahul Bhalla</div>
                    <div>{locale === 'es' ? 'Propietario de Satyam Indian Kitchen' : 'Owner of Satyam Indian Kitchen'}</div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ray-green">+$4,500,000</div>
                      <div className="text-sm text-ray-darkGray">{locale === 'es' ? 'Ventas online' : 'Online sales'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ray-blue">+4</div>
                      <div className="text-sm text-ray-darkGray">{locale === 'es' ? 'Ubicaciones' : 'Locations'}</div>
                    </div>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      href={`/${locale}/case-studies?utm_source=marketing-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=testimonial`}
                      className="ml-4"
                    >
                      {locale === 'es' ? 'Ver la historia de Rahul' : 'See Rahul\'s story'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Marketing Guides Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Haz crecer tu base de clientes con nuestras guías de marketing' : 'Grow your customer base with our marketing guides'}
            </h2>
            <Button 
              variant="primary"
              href="https://blog.rayapp.io/?utm_source=marketing-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=guides"
              external={true}
            >
              {locale === 'es' ? 'Leer el blog' : 'Read the blog'}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Guide 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      SMART
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-medium">
                      {locale === 'es' ? 'Cómo la IA Transformará Tu Restaurante' : 'How A.I. Will Transform Your Restaurant'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Guide 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-medium">
                      {locale === 'es' ? 'Las 5 Campañas de Email de Marketing Que Todo Restaurante Debe Enviar' : 'The 5 Money-Making Email Campaigns Every Restaurant Must Send'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default AutomatedMarketing
