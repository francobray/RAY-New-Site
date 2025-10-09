'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, ArrowRight, CheckCircle, BarChart3, Globe, Smartphone, ChevronDown, ChevronUp, Search, Clock, MessageCircle } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import { type Locale } from '../../../lib/i18n'
import { useTranslations } from '@/hooks/useTranslations'

interface WebsiteBuilderProps {
  locale?: Locale
}

const WebsiteBuilder: React.FC<WebsiteBuilderProps> = ({ locale = 'es' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(locale)

  const features = [
    {
      icon: MessageCircle,
      title: locale === 'es' ? 'Sitios Web que Aparecen en ChatGPT' : 'Websites that appear in ChatGPT',
      description: locale === 'es' ? 'Tu restaurante aparece cuando los clientes buscan recomendaciones en ChatGPT y otros AI' : 'Your restaurant appears when customers search for recommendations in ChatGPT and other AI',
      details: locale === 'es' ? [
        'Optimización para motores de búsqueda de IA',
        'Contenido estructurado para mejores recomendaciones'
      ] : [
        'Optimization for AI search engines',
        'Structured content for better recommendations'
      ]
    },
    {
      icon: Smartphone,
      title: locale === 'es' ? 'Diseño Móvil Primero' : 'Mobile-First Design',
      description: locale === 'es' ? 'Sitios web que se ven perfectos en cualquier dispositivo, especialmente móviles' : 'Websites that look perfect on any device, especially mobile',
      details: locale === 'es' ? [
        'Diseño responsivo para todos los tamaños de pantalla',
        'Experiencia optimizada para pedidos móviles'
      ] : [
        'Responsive design for all screen sizes',
        'Optimized experience for mobile ordering'
      ]
    },
    {
      icon: Globe,
      title: locale === 'es' ? 'Sitios Web Optimizados para SEO' : 'SEO-Optimized Websites',
      description: locale === 'es' ? 'Sitios web diseñados para ser encontrados en Google y convertir visitantes en clientes' : 'Websites designed to be found on Google and convert visitors into customers',
      details: locale === 'es' ? [
        'Optimización automática para búsquedas locales',
        'Páginas que cargan rápido para mejor experiencia'
      ] : [
        'Automatic optimization for local searches',
        'Fast-loading pages for better experience'
      ]
    },
    {
      icon: BarChart3,
      title: locale === 'es' ? 'Análisis y Seguimiento' : 'Analytics & Tracking',
      description: locale === 'es' ? 'Ve exactamente cómo tu sitio web está generando más pedidos y reservas' : 'See exactly how your website is generating more orders and bookings',
      details: locale === 'es' ? [
        'Seguimiento de conversiones en tiempo real',
        'Reportes claros sobre rendimiento del sitio'
      ] : [
        'Real-time conversion tracking',
        'Clear reports on site performance'
      ]
    },
    {
      icon: Search,
      title: locale === 'es' ? 'Integración con Google' : 'Google Integration',
      description: locale === 'es' ? 'Tu sitio web se conecta automáticamente con Google Business Profile' : 'Your website automatically connects with Google Business Profile',
      details: locale === 'es' ? [
        'Sincronización automática de horarios y menús',
        'Mejor posicionamiento en búsquedas locales'
      ] : [
        'Automatic sync of hours and menus',
        'Better positioning in local searches'
      ]
    },
    {
      icon: Clock,
      title: locale === 'es' ? 'Pedidos 24/7' : '24/7 Ordering',
      description: locale === 'es' ? 'Los clientes pueden hacer pedidos y reservas en cualquier momento' : 'Customers can place orders and reservations anytime',
      details: locale === 'es' ? [
        'Sistema de pedidos siempre disponible',
        'Reservas automáticas sin intervención manual'
      ] : [
        'Always-available ordering system',
        'Automatic reservations without manual intervention'
      ]
    }
  ]

  const faqs = [
    {
      question: locale === 'es' ? '¿Qué pasa con mi sitio web actual?' : 'What happens to my current website?',
      answer: locale === 'es' ? 'RAY reemplaza tu sitio web actual. Redirigimos tu dominio a tu nuevo sitio web con RAY, manteniendo toda tu presencia online intacta.' : 'RAY replaces your current website. We redirect your domain to your new website with RAY, keeping all your online presence intact.'
    },
    {
      question: locale === 'es' ? '¿Cuánto tiempo toma tener mi nuevo sitio web?' : 'How long does it take to get my new website?',
      answer: locale === 'es' ? 'La mayoría de sitios web están listos en 3-5 días hábiles. Tendrás un especialista dedicado que te guiará durante todo el proceso.' : 'Most websites are ready in 3-5 business days. You\'ll have a dedicated specialist guiding you through the entire process.'
    },
    {
      question: locale === 'es' ? '¿Puedo personalizar el diseño de mi sitio web?' : 'Can I customize my website design?',
      answer: locale === 'es' ? 'Sí, trabajamos contigo para personalizar colores, fotos, menús y contenido para que refleje perfectamente la marca de tu restaurante.' : 'Yes, we work with you to customize colors, photos, menus, and content so it perfectly reflects your restaurant\'s brand.'
    },
    {
      question: locale === 'es' ? '¿Se integra con mi sistema POS?' : 'Does it integrate with my POS system?',
      answer: locale === 'es' ? 'Sí, nuestro sitio web se integra con los principales sistemas POS para que los pedidos fluyan directamente a tu cocina sin pasos adicionales.' : 'Yes, our website integrates with major POS systems so orders flow directly to your kitchen without extra steps.'
    },
    {
      question: locale === 'es' ? '¿Qué pasa si necesito hacer cambios?' : 'What if I need to make changes?',
      answer: locale === 'es' ? 'Puedes solicitar cambios en cualquier momento. Nuestro equipo se encarga de todas las actualizaciones para que puedas enfocarte en dirigir tu restaurante.' : 'You can request changes anytime. Our team handles all updates so you can focus on running your restaurant.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'RAY Constructor de Sitios Web - Sitios web para restaurantes que convierten visitas en ventas' : 'RAY Website Builder - Restaurant websites that convert visits into sales'}</h1>
        <p>{locale === 'es' ? 'RAY Constructor de Sitios Web crea sitios web optimizados para restaurantes que generan más pedidos, reservas y visitas.' : 'RAY Website Builder creates optimized restaurant websites that generate more orders, bookings, and visits.'}</p>
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
                  {locale === 'es' ? 'Sitios Web Impulsados por IA' : 'AI-Powered Websites'}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {t.WEBSITE_BUILDER_PAGE.HERO.TITLE}{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {t.WEBSITE_BUILDER_PAGE.HERO.TITLE_HIGHLIGHT}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {locale === 'es' ? 'Owner construye tu sitio web para impulsar ventas. Nuestro diseño comprobado genera tráfico de Google, optimiza aplicaciones de delivery y aloja tu competencia.' : 'Owner builds your website to drive sales. Our proven design grows Google traffic, optimizes delivery apps, and hosts your competition.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href="https://grader.rayapp.io/"
                  external={true}
                  data-cta="grader"
                  data-analytics="website_builder_hero"
                  aria-label="Get a free demo"
                >
                  {locale === 'es' ? 'Obtén una demo gratis' : 'Get a free demo'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/pricing?utm_source=website-builder-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-pricing`}
                  data-cta="pricing"
                  data-analytics="website_builder_hero"
                  aria-label="View Pricing"
                >
                  {locale === 'es' ? 'Ver Precios' : 'View Pricing'}
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{locale === 'es' ? 'Listo en días, no meses' : 'Ready in days, not months'}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{locale === 'es' ? 'Optimizado para Google' : 'Google optimized'}</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual - Website Screenshot */}
            <div className="relative">
              <div className="relative max-w-3xl mx-auto">
                {/* Website Screenshot */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={locale === 'en' ? '/images/product-website/Temple-website-US.png' : '/images/product-website/Temple-website.png'}
                    alt={locale === 'es' ? 'Sitio web de restaurante Temple Craft construido con RAY' : 'Temple Craft restaurant website built with RAY'}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">+50%</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Más conversiones web' : 'More web conversions'}</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">Fast</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Carga en 2s' : 'Loads in 2s'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Obtén más ventas desde el sitio web de tu restaurante' : 'Get more sales from your restaurant\'s website'}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {locale === 'es' ? 'Construimos sitios web que Google ama, sitios web optimizados para impulsar el tráfico de Google y conseguir más tráfico.' : 'We build websites that Google loves, AI-optimized websites that boost your SEO and get you more Google traffic.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {locale === 'es' ? 'Construimos sitios web que Google ama' : 'We build websites that Google loves'}
                  </h3>
                  <p className="text-ray-darkGray">
                    {locale === 'es' ? 'Sitios web optimizados por IA que impulsan tu SEO y te consiguen más tráfico de Google.' : 'AI-optimized websites that boost your SEO and get you more Google traffic.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {locale === 'es' ? 'Impulsa las ventas online como las grandes marcas' : 'Drive online sales like the big brands'}
                  </h3>
                  <p className="text-ray-darkGray">
                    {locale === 'es' ? 'Obtén pedidos online directamente en tu sitio web, aumenta el tráfico, haz crecer tus pedidos.' : 'Get online ordering right on your website, drive traffic, grow your orders.'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {locale === 'es' ? 'Tu nuevo sitio web en días, no meses' : 'Your new website in days, not months'}
                  </h3>
                  <p className="text-ray-darkGray">
                    {locale === 'es' ? 'Añade tu marca a nuestro diseño comprobado, luego ve en vivo ASAP.' : 'Add your brand to our proven design, then go live ASAP.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Google Local Pack Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/product-website/google-local-pack.png"
                  alt={locale === 'es' ? 'Resultados de Google Local Pack mostrando restaurantes' : 'Google Local Pack results showing restaurants'}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Booking Section */}
      <section className="py-24 bg-ray-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {locale === 'es' ? 'Reservas directas desde tu sitio web' : 'Direct bookings from your website'}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {locale === 'es' ? 'Permite que tus clientes reserven mesas directamente desde tu sitio web con nuestro sistema integrado de reservas.' : 'Let your customers book tables directly from your website with our integrated reservation system.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-16 items-center">
            {/* Left side - Direct Booking Features */}
            <div className="relative">
              <div className="bg-gradient-to-br from-ray-blue to-ray-green rounded-2xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'es' ? 'Sistema de reservas inteligente' : 'Smart reservation system'}
                  </h3>
                  <p className="text-lg opacity-90">
                    {locale === 'es' ? 'Gestión automática de disponibilidad, confirmaciones instantáneas y recordatorios para reducir no-shows.' : 'Automatic availability management, instant confirmations, and reminders to reduce no-shows.'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Reservas en tiempo real' : 'Real-time reservations'}
                      </span>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Confirmación automática' : 'Automatic confirmation'}
                      </span>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Recordatorios SMS/Email' : 'SMS/Email reminders'}
                      </span>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">
                        {locale === 'es' ? 'Gestión de capacidad' : 'Capacity management'}
                      </span>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Website Booking Interface */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/product-website/Temple-website-bookings.png"
                  alt={locale === 'es' ? 'Interfaz de reservas del sitio web de Temple' : 'Temple website booking interface'}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Un diseño comprobado que genera más tráfico' : 'A proven design that drives more traffic'}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {locale === 'es' ? 'Sitios optimizados por IA impulsan el SEO y el tráfico de Google.' : 'AI-optimized sites boost SEO and Google traffic.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="p-5">
                    <div className="w-10 h-10 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-ray-darkGray mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-1.5">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-xs text-ray-dark-700">
                          <CheckCircle className="w-3 h-3 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Resultados Comprobados para Sitios Web de Restaurantes' : 'Proven Results for Restaurant Websites'}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {locale === 'es' ? 'Ve el impacto medible que nuestros sitios web tienen en el tráfico y las ventas de restaurantes.' : 'See the measurable impact our websites have on restaurant traffic and sales.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-blue mb-2">+35%</div>
              <div className="text-lg font-semibold text-ray-dark-900 mb-2">
                {locale === 'es' ? 'Más Pedidos Online' : 'More Online Orders'}
              </div>
              <p className="text-ray-darkGray">
                {locale === 'es' ? 'Aumento promedio en pedidos directos' : 'Average increase in direct orders'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-green mb-2">2x</div>
              <div className="text-lg font-semibold text-ray-dark-900 mb-2">
                {locale === 'es' ? 'Más Rápido' : 'Faster'}
              </div>
              <p className="text-ray-darkGray">
                {locale === 'es' ? 'Velocidad de carga comparado con sitios promedio' : 'Loading speed vs average sites'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-ray-blue mb-2">+50%</div>
              <div className="text-lg font-semibold text-ray-dark-900 mb-2">
                {locale === 'es' ? 'Más Tráfico de Google' : 'More Google Traffic'}
              </div>
              <p className="text-ray-darkGray">
                {locale === 'es' ? 'Mejora en visibilidad de búsqueda local' : 'Improvement in local search visibility'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-ray-dark-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {locale === 'es' ? 'Mejora el sitio web de tu restaurante con nuestras guías' : 'Improve your restaurant\'s website with our guides'}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {locale === 'es' ? 'Haz crecer tus ventas con nuestra plataforma de pedidos online' : 'Grow your sales with our online ordering platform'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              href={`/${locale}/demo?utm_source=website-builder-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-demo`}
              data-cta="demo"
              data-analytics="website_builder_final"
            >
              {locale === 'es' ? 'Comenzar hoy' : 'Get started today'}
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 bg-white text-ray-dark-900 hover:bg-gray-100"
              href="https://blog.rayapp.io/?utm_source=website-builder-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-blog"
              external={true}
              data-cta="blog"
              data-analytics="website_builder_final"
            >
              {locale === 'es' ? 'Leer el blog' : 'Read the blog'}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-ray-darkGray">
              {locale === 'es' ? 'Todo lo que necesitas saber sobre nuestro constructor de sitios web para restaurantes.' : 'Everything you need to know about our restaurant website builder.'}
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

export default WebsiteBuilder
