'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, Award } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface TempleCaseStudyProps {
  locale: Locale
}

const TempleCaseStudy: React.FC<TempleCaseStudyProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  // Content variations based on locale
  const content = locale === 'es' ? {
    backToCase: 'Volver a Casos de Éxito',
    successStory: 'Success Story',
    heroTitle: 'Temple aumenta sus Reservas Directas 365% con RAY',
    kpi1: { emoji: '📈', value: '+365%', label: 'Reservas Directas' },
    kpi2: { emoji: '👥', value: '12.000', label: 'Visitantes al Website' },
    kpi3: { emoji: '💬', value: '228', label: 'Conversaciones del Agente AI' },
    kpi4: { emoji: '📅', value: '39', label: 'Reservas por el Agente AI' },
    kpi5: { emoji: '👨‍👩‍👧‍👦', value: '4.027', label: 'Personas en Reservas Confirmadas' },
    kpi6: { emoji: '🎉', value: '491', label: 'Personas en Eventos XL (25+)' },
    teamCaption: 'Temple team celebrating explosive growth',
    insightTitle: '🎉 Crecimiento del 365% en Reservas Directas',
    beforeRAY: 'Antes de RAY (baseline):',
    afterRAY: 'Después de activar RAY:',
    monroe: 'Monroe',
    barrioChino: 'Barrio Chino',
    totalBefore: 'Total Antes',
    totalAfter: 'Total Después',
    growth: 'Crecimiento',
    reservationsMonth: 'reservas/mes',
    reservations: 'en reservas',
    automationTitle: '⚡ Temple automatizó por completo la atención y la gestión de reservas',
    automationCards: [
      { emoji: '🤖', title: 'Agente del Website', link: '/es/product/ai-agent', desc: 'que responde y reserva 24/7', reservaLink: '/es/product/direct-bookings' },
      { icon: '/images/WhatsApp.svg.avif', title: 'Agentes de WhatsApp', link: '/es/product/ai-concierge', desc: 'que cierran reservas automáticamente' },
      { emoji: '✅', title: 'Cero intervención humana', desc: 'en la mayoría de las reservas' },
      { emoji: '⚡', title: 'Respuestas inmediatas', desc: '→ mejor conversión' },
      { icon: '/images/instagram-icon.svg', title: 'Agente de Instagram', link: '/es/product/ai-concierge', desc: 'responde mensajes y consultas automáticamente' },
      { emoji: '⭐', title: 'Mejor experiencia del cliente', desc: 'servicio 24/7' }
    ],
    moreRevenueLessWork: 'Más ingresos, menos esfuerzo.',
    howWeDidIt: 'Cómo lo Logramos',
    website: {
      title: '1. Un website de alto rendimiento',
      bullets: [
        'Ultra rápido y orientado a conversión',
        'Pensado para turistas',
        'Flujo optimizado de reservas',
        'Claridad y velocidad'
      ],
      cta: 'Visitar sitio web →'
    },
    agent: {
      title: '2. Agente en el Website',
      bullets: [
        'Responde preguntas',
        'Muestra la sucursal cercana',
        'Sugiere horarios',
        'Crea y modifica reservas',
        'Envía recordatorios',
        'Se integra con el CRM'
      ],
      cta: 'Probar el agente →'
    },
    whatsapp: {
      title: '3. Agente de WhatsApp + Instagram',
      intro: 'El canal donde más escribe la gente.',
      bullets: [
        'Responde al instante',
        'Atiende turistas en varios idiomas',
        'Cierra reservas automáticamente',
        'Escala grupos grandes',
        'Agrega todo al CRM'
      ],
      footer: 'Parte del salto del 365% viene de estos canales.',
      cta: 'Pruébalo ahora →'
    },
    googleBusiness: {
      title: '4. Optimización del Perfil de Google Business',
      intro: 'RAY mejoró:',
      items: ['Categorías', 'Keywords', 'Fotos', 'Reseñas', 'Datos estructurados', 'Tracking'],
      result: 'Resultado:',
      resultText: '+259% más direcciones → más visitas → más reservas → más ingresos'
    },
    realImpact: 'Impacto Real',
    impactCards: [
      { emoji: '💰', title: 'Mucho más ingreso directo', value: '+365%', desc: 'de reservas sin comisiones' },
      { emoji: '⏱', title: 'Mucho menos trabajo', value: '24/7', desc: 'atención automatizada para el equipo' },
      { emoji: '🤖', title: 'Atención automatizada', value: '100%', desc: 'de reservas sin intervención humana' },
      { emoji: '📈', title: 'CRM unificado', value: 'Todo', desc: 'los datos en un solo lugar' },
      { emoji: '👨‍👩‍👧‍👦', title: 'Personas servidas', value: '4.027', desc: 'en reservas confirmadas' },
      { emoji: '🎉', title: 'Eventos XL', value: '491', desc: 'personas en grupos de 25+' }
    ],
    completeSystem: '🧩 Un sistema completo:',
    systemFlow: 'Temple ahora opera como una marca del futuro.',
    testimonialQuote: '"RAY nos multiplicó las reservas directas. Pasamos de 30 por mes a 140 solo en dos locales — y el equipo casi no interviene. El agente de IA hace todo, y la experiencia del cliente mejoró muchísimo."',
    testimonialAuthor: 'Juan Ignacio Chereminiano',
    testimonialRole: 'CEO – Temple',
    reserva: 'reserva',
    reservas: 'reservas'
  } : {
    backToCase: 'Back to Case Studies',
    successStory: 'Success Story',
    heroTitle: 'Temple Increases Direct Bookings by 365% with RAY',
    kpi1: { emoji: '📈', value: '+365%', label: 'Direct Bookings' },
    kpi2: { emoji: '👥', value: '12,000', label: 'Website Visitors' },
    kpi3: { emoji: '💬', value: '228', label: 'AI Agent Conversations' },
    kpi4: { emoji: '📅', value: '39', label: 'Bookings by AI Agent' },
    kpi5: { emoji: '👨‍👩‍👧‍👦', value: '4,027', label: 'People in Confirmed Bookings' },
    kpi6: { emoji: '🎉', value: '491', label: 'People in XL Events (25+)' },
    teamCaption: 'Temple team celebrating explosive growth',
    insightTitle: '🎉 365% Growth in Direct Bookings',
    beforeRAY: 'Before RAY (baseline):',
    afterRAY: 'After activating RAY:',
    monroe: 'Monroe',
    barrioChino: 'Barrio Chino',
    totalBefore: 'Total Before',
    totalAfter: 'Total After',
    growth: 'Growth',
    reservationsMonth: 'bookings/month',
    reservations: 'in bookings',
    automationTitle: '⚡ Temple fully automated guest service and booking management',
    automationCards: [
      { emoji: '🤖', title: 'Website AI Agent', link: '/en/product/ai-agent', desc: 'answers questions and books 24/7', reservaLink: '/en/product/direct-bookings' },
      { icon: '/images/WhatsApp.svg.avif', title: 'WhatsApp Agents', link: '/en/product/ai-concierge', desc: 'close bookings automatically' },
      { emoji: '✅', title: 'Zero human intervention', desc: 'for most bookings' },
      { emoji: '⚡', title: 'Instant responses', desc: '→ better conversion' },
      { icon: '/images/instagram-icon.svg', title: 'Instagram Agent', link: '/en/product/ai-concierge', desc: 'responds to messages and inquiries automatically' },
      { emoji: '⭐', title: 'Better guest experience', desc: '24/7 service' }
    ],
    moreRevenueLessWork: 'More revenue, less effort.',
    howWeDidIt: 'How We Did It',
    website: {
      title: '1. A High-Performance Website',
      bullets: [
        'Ultra-fast and conversion-focused',
        'Designed for tourists',
        'Optimized booking flow',
        'Clarity and speed'
      ],
      cta: 'Visit website →'
    },
    agent: {
      title: '2. AI Agent on the Website',
      bullets: [
        'Answers questions',
        'Shows nearest location',
        'Suggests times',
        'Creates and modifies bookings',
        'Sends reminders',
        'Integrates with CRM'
      ],
      cta: 'Try the agent →'
    },
    whatsapp: {
      title: '3. WhatsApp + Instagram Agent',
      intro: 'The channel where guests reach out most.',
      bullets: [
        'Responds instantly',
        'Serves tourists in multiple languages',
        'Closes bookings automatically',
        'Scales large groups',
        'Adds everything to CRM'
      ],
      footer: 'Part of the 365% jump comes from these channels.',
      cta: 'Try it now →'
    },
    googleBusiness: {
      title: '4. Google Business Profile Optimization',
      intro: 'RAY improved:',
      items: ['Categories', 'Keywords', 'Photos', 'Reviews', 'Structured data', 'Tracking'],
      result: 'Result:',
      resultText: '+259% more directions → more visits → more bookings → more revenue'
    },
    realImpact: 'Real Impact',
    impactCards: [
      { emoji: '💰', title: 'Much more direct revenue', value: '+365%', desc: 'bookings without commissions' },
      { emoji: '⏱', title: 'Much less work', value: '24/7', desc: 'automated service for the team' },
      { emoji: '🤖', title: 'Automated service', value: '100%', desc: 'bookings without human intervention' },
      { emoji: '📈', title: 'Unified CRM', value: 'All', desc: 'data in one place' },
      { emoji: '👨‍👩‍👧‍👦', title: 'People served', value: '4,027', desc: 'in confirmed bookings' },
      { emoji: '🎉', title: 'XL Events', value: '491', desc: 'people in groups of 25+' }
    ],
    completeSystem: '🧩 A complete system:',
    systemFlow: 'Temple now operates like a brand of the future.',
    testimonialQuote: '"RAY multiplied our direct bookings. We went from 30 per month to 140 in just two locations — and the team barely intervenes. The AI agent does everything, and the guest experience improved dramatically."',
    testimonialAuthor: 'Juan Ignacio Chereminiano',
    testimonialRole: 'CEO – Temple',
    reserva: 'booking',
    reservas: 'bookings'
  }
  
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>{t.TEMPLE_CASE_STUDY.HERO_TITLE}</h1>
        <p>{t.TEMPLE_CASE_STUDY.HERO_SUBTITLE}</p>
      </div>

      {/* Hero Section - Temple Brand Style */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Elements - Dark, Premium, Energetic */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Temple's dark, premium aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,140,0,0.08),transparent_50%)]"></div>
          
          {/* Subtle texture pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {content.backToCase}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
                  <Award className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">{content.successStory}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? (
                      <>
                        Temple aumenta sus{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
                          Reservas Directas 365%
                        </span>{' '}
                        con RAY
                      </>
                    ) : (
                      <>
                        Temple Increases{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
                          Direct Bookings by 365%
                        </span>{' '}
                        with RAY
                      </>
                    )}
                  </h1>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                    <div className="text-4xl mb-3">{content.kpi1.emoji}</div>
                    <div className="text-3xl font-black text-yellow-400 mb-1">{content.kpi1.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{content.kpi1.label}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="text-4xl mb-3">{content.kpi2.emoji}</div>
                    <div className="text-3xl font-black text-green-400 mb-1">{content.kpi2.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{content.kpi2.label}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <div className="text-4xl mb-3">{content.kpi3.emoji}</div>
                    <div className="text-3xl font-black text-blue-400 mb-1">{content.kpi3.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{content.kpi3.label}</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="text-4xl mb-3">{content.kpi4.emoji}</div>
                    <div className="text-3xl font-black text-purple-400 mb-1">{content.kpi4.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{content.kpi4.label}</div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20">
                    <div className="text-4xl mb-3">{content.kpi5.emoji}</div>
                    <div className="text-3xl font-black text-indigo-400 mb-1">{content.kpi5.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{content.kpi5.label}</div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-rose-500/20">
                    <div className="text-4xl mb-3">{content.kpi6.emoji}</div>
                    <div className="text-3xl font-black text-rose-400 mb-1">{content.kpi6.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{content.kpi6.label}</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Team Image */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Team Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/success-stories/Temple_Team.jpeg"
                      alt={content.teamCaption}
                      width={1200}
                      height={600}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <p className="text-white text-sm md:text-base font-medium">
                        {content.teamCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Insight Principal */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {content.insightTitle}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-xl font-medium text-white">
                      {content.beforeRAY}
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">{content.monroe}: <strong className="text-red-400">18 {content.reservationsMonth}</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">{content.barrioChino}: <strong className="text-red-400">12 {content.reservationsMonth}</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl font-medium text-white">
                      {content.afterRAY}
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">{content.monroe}: <strong className="text-green-400">84 {content.reservationsMonth}</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">{content.barrioChino}: <strong className="text-green-400">56 {content.reservationsMonth}</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Result Visual */}
                <div className="mt-8 p-8 bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-2xl border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-sm text-gray-400 font-medium mb-1">{content.totalBefore}</div>
                      <div className="text-4xl font-black text-white">30</div>
                      <div className="text-sm text-gray-400">{content.reservationsMonth}</div>
                    </div>
                    <div>
                      <div className="text-sm text-green-400 font-medium mb-1">{content.totalAfter}</div>
                      <div className="text-4xl font-black text-green-400">140</div>
                      <div className="text-sm text-gray-400">{content.reservationsMonth}</div>
                    </div>
                    <div>
                      <div className="text-sm text-yellow-400 font-medium mb-1">{content.growth}</div>
                      <div className="text-4xl font-black text-yellow-400">+365%</div>
                      <div className="text-sm text-gray-400">{content.reservations}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultado Secundario: Automatización */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {content.automationTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.automationCards.map((card, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500/10 to-blue-600/10 border-blue-500/20' :
                    index === 1 ? 'from-green-500/10 to-green-600/10 border-green-500/20' :
                    index === 2 ? 'from-emerald-500/10 to-emerald-600/10 border-emerald-500/20' :
                    index === 3 ? 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/20' :
                    index === 4 ? 'from-purple-500/10 to-purple-600/10 border-purple-500/20' :
                    'from-pink-500/10 to-pink-600/10 border-pink-500/20'
                  } rounded-3xl p-6 border`}
                >
                  {card.emoji ? (
                    <div className="text-4xl mb-4">{card.emoji}</div>
                  ) : card.icon ? (
                    <div className="mb-4">
                      <img 
                        src={card.icon}
                        alt={card.title}
                        className="w-10 h-10 object-contain"
                        width={40}
                        height={40}
                      />
                    </div>
                  ) : null}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.link ? (
                      <Link href={card.link} className="hover:text-yellow-400">{card.title}</Link>
                    ) : (
                      card.title
                    )}
                  </h3>
                  <p className="text-gray-300">
                    {card.reservaLink ? (
                      <>
                        {card.desc.split(content.reserva)[0]}
                        <Link href={card.reservaLink} className="text-yellow-400 hover:text-yellow-300 underline">{content.reserva}</Link>
                        {card.desc.split(content.reserva)[1]}
                      </>
                    ) : (
                      card.desc
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-3xl font-bold text-white">{content.moreRevenueLessWork}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo lo Logramos */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {content.howWeDidIt}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1. Website */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  {content.website.title}
                </h3>
                <ul className="space-y-2 text-gray-300 ml-6">
                  {content.website.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        {bullet.includes(content.reservas) ? (
                          <>
                            {bullet.split(content.reservas)[0]}
                            <Link href={`/${locale}/product/direct-bookings`} className="text-yellow-400 hover:text-yellow-300 underline">{content.reservas}</Link>
                            {bullet.split(content.reservas)[1]}
                          </>
                        ) : (
                          bullet
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-4 text-center">
                  <a
                    href="https://temple.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200"
                  >
                    {content.website.cta}
                  </a>
                </div>
              </div>

              {/* 2. Agente en el Website */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  {content.agent.title}
                </h3>
                <ul className="space-y-2 text-gray-300 ml-6">
                  {content.agent.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        {bullet.includes(content.reservas) ? (
                          <>
                            {bullet.split(content.reservas)[0]}
                            <Link href={`/${locale}/product/direct-bookings`} className="text-yellow-400 hover:text-yellow-300 underline">{content.reservas}</Link>
                            {bullet.split(content.reservas)[1]}
                          </>
                        ) : (
                          bullet
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <a
                    href="https://temple.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200"
                  >
                    {content.agent.cta}
                  </a>
                </div>
              </div>

              {/* 3. Agente de WhatsApp + Instagram */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  {content.whatsapp.title}
                </h3>
                <p className="text-lg text-gray-300 mb-4">{content.whatsapp.intro}</p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                  {content.whatsapp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        {bullet.includes(content.reservas) ? (
                          <>
                            {bullet.split(content.reservas)[0]}
                            <Link href={`/${locale}/product/direct-bookings`} className="text-yellow-400 hover:text-yellow-300 underline">{content.reservas}</Link>
                            {bullet.split(content.reservas)[1]}
                          </>
                        ) : (
                          bullet
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-white font-medium mt-4">
                  {content.whatsapp.footer}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491126239333&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-200"
                  >
                    {content.whatsapp.cta}
                  </a>
                </div>
              </div>

              {/* 4. Google Business Profile */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  {content.googleBusiness.title}
                </h3>
                <p className="text-lg text-gray-300 mb-4">{content.googleBusiness.intro}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {content.googleBusiness.items.map((item, idx) => (
                    <div key={idx} className="text-gray-300">• {item}</div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-lg font-medium text-white mb-2">{content.googleBusiness.result}</p>
                  <p className="text-xl text-yellow-400 font-bold">
                    {content.googleBusiness.resultText.includes(content.reservas) ? (
                      <>
                        {content.googleBusiness.resultText.split(content.reservas)[0]}
                        <Link href={`/${locale}/product/direct-bookings`} className="text-yellow-400 hover:text-yellow-300 underline">{content.reservas}</Link>
                        {content.googleBusiness.resultText.split(content.reservas)[1]}
                      </>
                    ) : (
                      content.googleBusiness.resultText
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Real */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              {content.realImpact}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {content.impactCards.map((card, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br backdrop-blur-sm rounded-3xl p-8 border ${
                    index === 0 ? 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20' :
                    index === 1 ? 'from-green-500/10 to-emerald-500/10 border-green-500/20' :
                    index === 2 ? 'from-blue-500/10 to-cyan-500/10 border-blue-500/20' :
                    index === 3 ? 'from-purple-500/10 to-pink-500/10 border-purple-500/20' :
                    index === 4 ? 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20' :
                    'from-rose-500/10 to-orange-500/10 border-rose-500/20'
                  }`}
                >
                  <div className="text-xl font-bold text-white mb-2">{card.emoji} {card.title}</div>
                  <div className={`text-5xl font-black mb-2 ${
                    index === 0 ? 'text-yellow-400' :
                    index === 1 ? 'text-green-400' :
                    index === 2 ? 'text-blue-400' :
                    index === 3 ? 'text-purple-400' :
                    index === 4 ? 'text-indigo-400' :
                    'text-rose-400'
                  }`}>{card.value}</div>
                  <div className="text-gray-300">{card.desc}</div>
                </div>
              ))}
            </div>

            {/* System Flow */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 mb-12">
              <h3 className="text-2xl font-black text-white mb-6 text-center">
                {content.completeSystem}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
                <Link href={`/${locale}/product/walk-ins`} className="text-yellow-400 font-bold hover:text-yellow-300 underline">Maps</Link>
                <span className="text-gray-500">→</span>
                <Link href={`/${locale}/product/restaurant-website-ai`} className="text-green-400 font-bold hover:text-green-300 underline">Website</Link>
                <span className="text-gray-500">→</span>
                <Link href={`/${locale}/product/ai-agent`} className="text-blue-400 font-bold hover:text-blue-300 underline">{locale === 'es' ? 'Agente' : 'Agent'}</Link>
                <span className="text-gray-500">→</span>
                <Link href={`/${locale}/product/direct-bookings`} className="text-purple-400 font-bold hover:text-purple-300 underline">{locale === 'es' ? 'Reserva' : 'Booking'}</Link>
                <span className="text-gray-500">→</span>
                <span className="text-pink-400 font-bold">CRM</span>
                <span className="text-gray-500">→</span>
                <Link href={`/${locale}/product/loyalty`} className="text-orange-400 font-bold hover:text-orange-300 underline">{locale === 'es' ? 'Fidelización' : 'Loyalty'}</Link>
              </div>
              <p className="text-center text-xl text-white font-medium mt-8">
                {content.systemFlow}
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="text-center">
                <Image
                  src="/images/success-stories/Testimonials/Juani-Chereminiano-optimized.jpg"
                  alt={`${content.testimonialAuthor} - Temple`}
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-6"
                  loading="lazy"
                />
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  {content.testimonialQuote}
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {content.testimonialAuthor}
                    </div>
                    <div className="text-gray-400">
                      {content.testimonialRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default TempleCaseStudy