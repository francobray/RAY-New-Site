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
                    Temple aumenta sus{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
                      Reservas Directas 356%
                    </span>{' '}
                    con RAY
                  </h1>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                    <div className="text-4xl mb-3">📈</div>
                    <div className="text-3xl font-black text-yellow-400 mb-1">+356%</div>
                    <div className="text-gray-300 text-sm font-medium">Reservas Directas</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="text-4xl mb-3">👥</div>
                    <div className="text-3xl font-black text-green-400 mb-1">12.000</div>
                    <div className="text-gray-300 text-sm font-medium">Visitantes al Website</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <div className="text-4xl mb-3">💬</div>
                    <div className="text-3xl font-black text-blue-400 mb-1">228</div>
                    <div className="text-gray-300 text-sm font-medium">Conversaciones del Agente AI</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="text-4xl mb-3">📅</div>
                    <div className="text-3xl font-black text-purple-400 mb-1">39</div>
                    <div className="text-gray-300 text-sm font-medium">Reservas por el Agente AI</div>
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
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                      <p className="text-white text-sm md:text-base font-medium">
                        Temple Craft team celebrating explosive growth
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl p-6 border border-blue-500/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="/es/product/ai-agent" className="hover:text-yellow-400">Agente del Website</Link>
                </h3>
                <p className="text-gray-300">que responde y <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reserva</Link> 24/7</p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-3xl p-6 border border-green-500/20">
                <div className="mb-4">
                  <img 
                    src="/images/WhatsApp.svg.avif" 
                    alt="WhatsApp" 
                    className="w-10 h-10 object-contain"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="/es/product/ai-concierge" className="hover:text-yellow-400">Agentes de WhatsApp</Link>
                </h3>
                <p className="text-gray-300">que cierran <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reservas</Link> automáticamente</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-3xl p-6 border border-emerald-500/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-3">Cero intervención humana</h3>
                <p className="text-gray-300">en la mayoría de las <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reservas</Link></p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-3xl p-6 border border-yellow-500/20">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Respuestas inmediatas</h3>
                <p className="text-gray-300">→ mejor conversión</p>
              </div>

              {/* Card 5 */}
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-3xl p-6 border border-purple-500/20">
                <div className="mb-4">
                  <img 
                    src="/images/instagram-icon.svg" 
                    alt="Instagram" 
                    className="w-10 h-10 object-contain"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  <Link href="/es/product/ai-concierge" className="hover:text-yellow-400">Agente de Instagram</Link>
                </h3>
                <p className="text-gray-300">responde mensajes y consultas automáticamente</p>
              </div>

              {/* Card 6 */}
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 rounded-3xl p-6 border border-pink-500/20">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-white mb-3">Mejor experiencia del cliente</h3>
                <p className="text-gray-300">servicio 24/7</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-3xl font-bold text-white">Más ingresos, menos esfuerzo.</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1. Website */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  1. Un website de alto rendimiento
                </h3>
                <ul className="space-y-2 text-gray-300 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ultra rápido y orientado a conversión</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pensado para turistas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Flujo optimizado de <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reservas</Link></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Claridad y velocidad</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-4 text-center">
                  <a
                    href="https://temple.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200"
                  >
                    Visitar sitio web →
                  </a>
                </div>
              </div>

              {/* 2. Agente en el Website */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  2. Agente en el Website
                </h3>
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
                    <span>Crea y modifica <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reservas</Link></span>
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
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <a
                    href="https://temple.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200"
                  >
                    Probar el agente →
                  </a>
                </div>
              </div>

              {/* 3. Agente de WhatsApp + Instagram */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800">
                <h3 className="text-2xl font-black text-white mb-4">
                  3. Agente de WhatsApp + Instagram
                </h3>
                <p className="text-lg text-gray-300 mb-4">El canal donde más escribe la gente.</p>
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
                    <span>Cierra <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reservas</Link> automáticamente</span>
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
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5491126239333&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-200"
                  >
                    Pruébalo ahora →
                  </a>
                </div>
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
                    +259% más direcciones → más visitas → más <Link href="/es/product/direct-bookings" className="text-yellow-400 hover:text-yellow-300 underline">reservas</Link> → más ingresos
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
                <Link href="/es/product/walk-ins" className="text-yellow-400 font-bold hover:text-yellow-300 underline">Maps</Link>
                <span className="text-gray-500">→</span>
                <Link href="/es/product/restaurant-website-ai" className="text-green-400 font-bold hover:text-green-300 underline">Website</Link>
                <span className="text-gray-500">→</span>
                <Link href="/es/product/ai-agent" className="text-blue-400 font-bold hover:text-blue-300 underline">Agente</Link>
                <span className="text-gray-500">→</span>
                <Link href="/es/product/direct-bookings" className="text-purple-400 font-bold hover:text-purple-300 underline">Reserva</Link>
                <span className="text-gray-500">→</span>
                <span className="text-pink-400 font-bold">CRM</span>
                <span className="text-gray-500">→</span>
                <Link href="/es/product/loyalty" className="text-orange-400 font-bold hover:text-orange-300 underline">Fidelización</Link>
              </div>
              <p className="text-center text-xl text-white font-medium mt-8">
                Temple ahora opera como una marca del futuro.
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="text-center">
                <Image
                  src="/images/success-stories/Testimonials/Juani-Chereminiano-optimized.jpg"
                  alt="Juan Ignacio Chereminiano - Temple Craft"
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto mb-6"
                  loading="lazy"
                />
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