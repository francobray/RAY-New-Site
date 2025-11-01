'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../../shared/CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Users, Award, MapPin } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

interface LePainQuotidienCaseStudyProps {
  locale: Locale
}

const LePainQuotidienCaseStudy: React.FC<LePainQuotidienCaseStudyProps> = ({ locale }) => {
  
  return (
    <>
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Le Pain Quotidien - 223% de Crecimiento en Reservas Multi-Ubicación' : 'Le Pain Quotidien Case Study - 223% Growth in Multi-Location Bookings'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Le Pain Quotidien logró un aumento del 223% en reservas online y 168% de crecimiento en inscripciones al programa de lealtad con la plataforma de RAY.' : 'See how Le Pain Quotidien achieved 223% increase in online bookings and 168% growth in loyalty program enrollment with RAY\'s platform.'}</p>
      </div>

      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,119,6,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="mb-12">
              <Link 
                href={`/${locale}/case-studies`} 
                className="inline-flex items-center text-amber-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-amber-500/30">
                  <Award className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Éxito Multi-Ubicación' : 'Multi-Location Success'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Le Pain Quotidien Aumenta' : 'Le Pain Quotidien Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                      {locale === 'es' ? 'Reservas en 223%' : 'Bookings by 223%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Inscripciones de Lealtad en 168%' : 'Loyalty Enrollment by 168%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-amber-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando las herramientas de gestión multi-ubicación y lealtad de RAY, Le Pain Quotidien unificó su experiencia de bakery-café en todas las ubicaciones y construyó una próspera comunidad de clientes regulares.'
                      : 'Using RAY\'s multi-location management and loyalty tools, Le Pain Quotidien unified their bakery-café experience across all locations and built a thriving community of regular customers.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="text-3xl font-black text-amber-400 mb-1">+223%</div>
                    <div className="text-amber-100 text-sm font-medium">{locale === 'es' ? 'Reservas Online' : 'Online Bookings'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+168%</div>
                    <div className="text-amber-100 text-sm font-medium">{locale === 'es' ? 'Inscripciones de Lealtad' : 'Loyalty Enrollment'}</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-amber-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-amber-400 mb-1">4.8★</div>
                    <div className="text-amber-100 text-sm font-medium">{locale === 'es' ? 'Calificación Promedio' : 'Average Rating'}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-amber-950 to-orange-900 rounded-3xl p-8 border border-amber-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                        223%
                      </div>
                      <div className="text-xl text-amber-100 font-medium">
                        {locale === 'es' ? 'Más Reservas Online' : 'More Online Bookings'}
                      </div>
                      <div className="text-sm text-amber-300">
                        {locale === 'es' ? 'Unificado en todas las ubicaciones' : 'Unified across all locations'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/success-stories/Lepain.webp"
              alt="Le Pain Quotidien artisanal bakery serving customers"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBIAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                {locale === 'es' ? 'Le Pain Quotidien – construyendo comunidad a través de pan artesanal y hospitalidad' : 'Le Pain Quotidien – building community through artisanal bread and hospitality'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {locale === 'es' ? 'El Desafío' : 'The Challenge'}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl font-medium text-white">
                  {locale === 'es'
                    ? 'Le Pain Quotidien necesitaba unificar la experiencia del cliente y los datos en múltiples ubicaciones de café.'
                    : 'Le Pain Quotidien needed to unify customer experience and data across multiple café locations.'
                  }
                </p>
                
                <p className="font-medium text-white">
                  {locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Cada ubicación operando' : 'Each location operating'} <strong className="text-red-400">{locale === 'es' ? 'independientemente' : 'independently'}</strong> {locale === 'es' ? 'sin datos de clientes compartidos' : 'with no shared customer data'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'Sin programa de lealtad para fomentar visitas repetidas en todas las ubicaciones' : 'No loyalty program to encourage repeat visits across locations'}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{locale === 'es' ? 'El objetivo era crear una' : 'The goal was to create a'} <strong className="text-green-400">{locale === 'es' ? 'experiencia de marca unificada' : 'unified brand experience'}</strong> {locale === 'es' ? 'y comunidad de clientes' : 'and customer community'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                {locale === 'es' ? 'La Solución' : 'The Solution'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Reservas Unificadas' : 'Unified Booking'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Sistema de reservas centralizado en todas las ubicaciones de café' : 'Centralized reservation system across all café locations'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'Lealtad Entre Ubicaciones' : 'Cross-Location Loyalty'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Programa de puntos que funciona en cualquier Le Pain Quotidien' : 'Points program that works at any Le Pain Quotidien'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  {locale === 'es' ? 'SEO Multi-Ubicación' : 'Multi-Location SEO'}
                </h3>
                <p className="text-gray-300">
                  {locale === 'es' ? 'Optimizamos el Perfil de Negocio de Google de cada ubicación' : 'Optimized each location\'s Google Business Profile'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              {locale === 'es' ? 'Los Resultados' : 'The Results'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  {locale === 'es'
                    ? '"¡RAY unificó toda nuestra red de cafés! Las reservas online aumentaron en '
                    : '"RAY unified our entire café network! Online bookings increased by '
                  }
                  <span className="text-amber-400 font-black">223%</span>, 
                  {locale === 'es'
                    ? ' y las inscripciones al programa de lealtad crecieron en '
                    : ' and loyalty program enrollment grew by '
                  }
                  <span className="text-green-400 font-black">168%</span> 
                  {locale === 'es'
                    ? ' en todas las ubicaciones. A nuestros clientes les encanta que pueden ganar y usar recompensas en cualquiera de nuestros cafés. ¡Hemos creado una verdadera comunidad alrededor de nuestra marca!"'
                    : ' across all locations. Our customers love that they can earn and use rewards at any of our cafés. We\'ve created a true community around our brand!"'
                  }
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      {locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}
                    </div>
                    <div className="text-gray-400">
                      Le Pain Quotidien
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-amber-400 mb-2">223%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en reservas online' : 'in online bookings'}</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">168%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en inscripciones de lealtad' : 'in loyalty enrollment'}</div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-black font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-amber-400 mb-2">4.8★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en todas las ubicaciones' : 'across locations'}</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">12</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Ubicaciones' : 'Locations'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'plataforma unificada' : 'unified platform'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default LePainQuotidienCaseStudy

