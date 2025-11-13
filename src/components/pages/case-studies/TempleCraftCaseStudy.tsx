'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})

interface TempleCraftCaseStudyProps {
  locale: Locale
}

const TempleCraftCaseStudy: React.FC<TempleCraftCaseStudyProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>{t.TEMPLE_CASE_STUDY.HERO_TITLE}</h1>
        <p>{t.TEMPLE_CASE_STUDY.HERO_SUBTITLE}</p>
      </div>

      {/* Hero Section - Temple Craft Brand Style */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Elements - Dark, Premium, Energetic */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Temple Craft's dark, premium aesthetic */}
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
                Back to Case Studies
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
                  <Award className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">Success Story</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    Temple Craft Aumenta sus{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
                      Reservas Directas 356%
                    </span>{' '}
                    con la Plataforma Todo-en-Uno de RAY
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed font-light">
                    Temple pasó de recibir ~30 reservas directas por mes en Monroe y Barrio Chino a 137 reservas directas mensuales después de implementar RAY — un crecimiento del 356% en ingresos directos, sin pagar comisiones y con atención 100% automatizada.
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-3xl font-black text-yellow-400 mb-1">+356%</div>
                    <div className="text-gray-300 text-sm font-medium">Reservas Directas</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">137</div>
                    <div className="text-gray-300 text-sm font-medium">Reservas/Mes</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-3xl font-black text-blue-400 mb-1">0%</div>
                    <div className="text-gray-300 text-sm font-medium">Comisiones</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                        356%
                      </div>
                      <div className="text-xl text-gray-300 font-medium">
                        Crecimiento en Reservas
                      </div>
                      <div className="text-sm text-gray-500">
                        De 60 a 137 reservas/mes
                      </div>
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

      {/* Team Image Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/Temple_Team.jpeg"
              alt="Temple Craft team at the Wynwood location celebrating explosive local growth"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                Temple Craft team at the Wynwood location – celebrating explosive local growth
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Insight Principal */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                🎉 Crecimiento del 356% en Reservas Directas
              </h2>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-xl font-medium text-white">
                      Antes de RAY (baseline):
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">Monroe: <strong className="text-red-400">~30 reservas directas/mes</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">Barrio Chino: <strong className="text-red-400">~30 reservas directas/mes</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl font-medium text-white">
                      Después de activar RAY:
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">Monroe: <strong className="text-green-400">88 reservas/mes</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-300">Barrio Chino: <strong className="text-green-400">49 reservas/mes</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Result Visual */}
                <div className="mt-8 p-8 bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-2xl border border-yellow-500/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-sm text-gray-400 font-medium mb-1">Total Antes</div>
                      <div className="text-4xl font-black text-white">60</div>
                      <div className="text-sm text-gray-400">reservas/mes</div>
                    </div>
                    <div>
                      <div className="text-sm text-green-400 font-medium mb-1">Total Después</div>
                      <div className="text-4xl font-black text-green-400">137</div>
                      <div className="text-sm text-gray-400">reservas/mes</div>
                    </div>
                    <div>
                      <div className="text-sm text-yellow-400 font-medium mb-1">Crecimiento</div>
                      <div className="text-4xl font-black text-yellow-400">+356%</div>
                      <div className="text-sm text-gray-400">en reservas</div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <p className="text-2xl font-bold text-white">Todo directo.</p>
                  <p className="text-2xl font-bold text-white">Todo sin comisión.</p>
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
                ⚡ Temple automatizó por completo la atención y la gestión de reservas
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong className="text-white">Agente del Website</strong> que responde y reserva 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong className="text-white">Agentes de WhatsApp e Instagram</strong> que cierran reservas automáticamente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong className="text-white">Cero intervención humana</strong> en la mayoría de las reservas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span><strong className="text-white">Respuestas inmediatas</strong> → mejor conversión</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Menos trabajo manual</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Mejor experiencia del cliente</span>
                  </li>
                </ul>

                <div className="text-center mt-8 pt-6 border-t border-gray-800">
                  <p className="text-2xl font-bold text-white">Más ingresos, menos esfuerzo.</p>
                </div>
              </div>
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
                Cómo lo Logramos
              </h2>
            </div>

            <div className="space-y-8">
              {/* 1. Website */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  1. Un website de alto rendimiento (temple.com.ar)
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ultra rápido, orientado a conversión, pensado para turistas.<br/>
                  Claridad, velocidad y un flujo optimizado de reservas.
                </p>
              </div>

              {/* 2. Agente en el Website */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  2. Agente en el Website (FAQs + Ubicaciones + Reservas)
                </h3>
                <p className="text-lg text-gray-300 mb-4">El agente:</p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Responde preguntas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Muestra la sucursal cercana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sugiere horarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Crea y modifica reservas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Envía recordatorios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Se integra con el CRM</span>
                  </li>
                </ul>
                <p className="text-lg text-white font-medium mt-4">
                  El sitio se convirtió en un empleado 24/7 que vende solo.
                </p>
              </div>

              {/* 3. Agente de WhatsApp + Instagram */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  3. Agente de WhatsApp + Instagram
                </h3>
                <p className="text-lg text-gray-300 mb-4">El canal donde más escribe la gente.</p>
                <p className="text-lg text-gray-300 mb-4">El agente:</p>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Responde al instante</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Atiende turistas en varios idiomas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cierra reservas automáticamente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Escala grupos grandes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Agrega todo al CRM</span>
                  </li>
                </ul>
                <p className="text-lg text-white font-medium mt-4">
                  Parte del salto del 356% viene de estos canales.
                </p>
              </div>

              {/* 4. Google Business Profile */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  4. Optimización del Perfil de Google Business
                </h3>
                <p className="text-lg text-gray-300 mb-4">RAY mejoró:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  <div className="text-gray-300">• Categorías</div>
                  <div className="text-gray-300">• Keywords</div>
                  <div className="text-gray-300">• Fotos</div>
                  <div className="text-gray-300">• Reseñas</div>
                  <div className="text-gray-300">• Datos estructurados</div>
                  <div className="text-gray-300">• Tracking</div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-lg font-medium text-white mb-2">Resultado:</p>
                  <p className="text-xl text-yellow-400 font-bold">
                    +259% más direcciones → más visitas → más reservas → más ingresos
                  </p>
                  <p className="text-lg text-gray-300 mt-3">
                    Maps es hoy el principal canal que alimenta todo el funnel de Temple.
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
              Impacto Real
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20">
                <div className="text-xl font-bold text-white mb-2">💰 Mucho más ingreso directo</div>
                <div className="text-5xl font-black text-yellow-400 mb-2">+356%</div>
                <div className="text-gray-300">de reservas sin comisiones</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
                <div className="text-xl font-bold text-white mb-2">⏱ Mucho menos trabajo</div>
                <div className="text-5xl font-black text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">atención automatizada para el equipo</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
                <div className="text-xl font-bold text-white mb-2">🤖 Atención automatizada</div>
                <div className="text-5xl font-black text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">de reservas sin intervención humana</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                <div className="text-xl font-bold text-white mb-2">📈 CRM unificado</div>
                <div className="text-5xl font-black text-purple-400 mb-2">Todo</div>
                <div className="text-gray-300">los datos en un solo lugar</div>
              </div>
            </div>

            {/* System Flow */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 mb-12">
              <h3 className="text-2xl font-black text-white mb-6 text-center">
                🧩 Un sistema completo:
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
                <span className="text-yellow-400 font-bold">Maps</span>
                <span className="text-gray-500">→</span>
                <span className="text-green-400 font-bold">Website</span>
                <span className="text-gray-500">→</span>
                <span className="text-blue-400 font-bold">Agente</span>
                <span className="text-gray-500">→</span>
                <span className="text-purple-400 font-bold">Reserva</span>
                <span className="text-gray-500">→</span>
                <span className="text-pink-400 font-bold">CRM</span>
                <span className="text-gray-500">→</span>
                <span className="text-orange-400 font-bold">Fidelización</span>
              </div>
              <p className="text-center text-xl text-white font-medium mt-8">
                Temple ahora opera como una marca del futuro.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  "RAY nos multiplicó las reservas directas. Pasamos de 30 por mes a más de 130 solo en dos locales — y el equipo casi no interviene. El agente de IA hace todo, y la experiencia del cliente mejoró muchísimo."
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      Juan Ignacio Chereminiano
                    </div>
                    <div className="text-gray-400">
                      CEO – Temple Craft
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

export default TempleCraftCaseStudy