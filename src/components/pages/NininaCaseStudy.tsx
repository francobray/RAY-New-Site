'use client'

import React from 'react'
import dynamic from 'next/dynamic'
// Dynamically import CTASection to reduce initial bundle size
const CTASection = dynamic(() => import('../CTASection'), {
  ssr: true,
  loading: () => null,
})
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Eye, Users, Award, MapPin } from 'lucide-react'
import Image from 'next/image'
import { type Locale } from '@/lib/i18n'

const NininaCaseStudy: React.FC<{ locale: Locale }> = ({ locale }) => {
  
  return (
    <>
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Caso de Estudio Ninina - 294% de Crecimiento en Pedidos de Almuerzo' : 'Ninina Case Study - 294% Growth in Lunch Orders'}</h1>
        <p>{locale === 'es' ? 'Ve cómo Ninina logró un aumento del 294% en pedidos de almuerzo y 172% de crecimiento en catering corporativo con la plataforma de RAY.' : 'See how Ninina achieved 294% increase in lunch orders and 172% growth in corporate catering with RAY\'s platform.'}</p>
      </div>

      <section className="relative min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(45,212,191,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            <div className="mb-12">
              <Link href={`/${locale}/case-studies`} className="inline-flex items-center text-teal-200 hover:text-white transition-colors duration-300 text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {locale === 'es' ? 'Volver a Casos de Estudio' : 'Back to Case Studies'}
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-teal-500/30">
                  <Award className="w-4 h-4 mr-2 text-teal-400" />
                  <span className="text-teal-400 text-sm font-bold uppercase tracking-wider">{locale === 'es' ? 'Historia de Éxito' : 'Success Story'}</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    {locale === 'es' ? 'Ninina Aumenta' : 'Ninina Increases'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500">
                      {locale === 'es' ? 'Pedidos de Almuerzo en 294%' : 'Lunch Orders by 294%'}
                    </span>{' '}
                    {locale === 'es' ? 'y' : 'and'}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      {locale === 'es' ? 'Catering Corporativo en 172%' : 'Corporate Catering by 172%'}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-teal-100 leading-relaxed font-light">
                    {locale === 'es'
                      ? 'Usando las herramientas de catering corporativo y optimización de delivery de almuerzo de RAY, Ninina se convirtió en la opción preferida para almuerzos de negocios y catering de oficina en su área.'
                      : 'Using RAY\'s corporate catering tools and lunch delivery optimization, Ninina became the go-to choice for business lunches and office catering in their area.'
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/20">
                    <div className="flex items-center justify-center mb-3"><TrendingUp className="w-8 h-8 text-teal-400" /></div>
                    <div className="text-3xl font-black text-teal-400 mb-1">+294%</div>
                    <div className="text-teal-100 text-sm font-medium">{locale === 'es' ? 'Pedidos de Almuerzo' : 'Lunch Orders'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3"><Users className="w-8 h-8 text-green-400" /></div>
                    <div className="text-3xl font-black text-green-400 mb-1">+172%</div>
                    <div className="text-teal-100 text-sm font-medium">{locale === 'es' ? 'Catering Corporativo' : 'Corporate Catering'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/20">
                    <div className="flex items-center justify-center mb-3"><Star className="w-8 h-8 text-teal-400 fill-current" /></div>
                    <div className="text-3xl font-black text-teal-400 mb-1">4.8★</div>
                    <div className="text-teal-100 text-sm font-medium">{locale === 'es' ? 'Calificación Google' : 'Google Rating'}</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-gradient-to-br from-teal-950 to-cyan-900 rounded-3xl p-8 border border-teal-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">294%</div>
                      <div className="text-xl text-teal-100 font-medium">{locale === 'es' ? 'Más Pedidos de Almuerzo' : 'More Lunch Orders'}</div>
                      <div className="text-sm text-teal-300">{locale === 'es' ? 'Favorito para almuerzos corporativos' : 'Corporate lunch favorite'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/success-stories/Ninina.webp" alt="Ninina serving corporate lunch" width={1200} height={600} className="w-full h-[400px] md:h-[500px] object-cover" sizes="(max-width: 768px) 100vw, 1200px" priority quality={85} placeholder="blur" blurDataURL="data:image/webp;base64,UklGRh4AAABXRUJQVlA4IBIAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">{locale === 'es' ? 'Ninina – impulsando jornadas laborales con almuerzos deliciosos' : 'Ninina – fueling workdays with delicious lunches'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{locale === 'es' ? 'El Desafío' : 'The Challenge'}</h2></div>
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl font-medium text-white">{locale === 'es' ? 'Ninina luchaba por aprovechar el lucrativo mercado de almuerzos corporativos.' : 'Ninina struggled to tap into the lucrative corporate lunch market.'}</p>
                <p className="font-medium text-white">{locale === 'es' ? 'La auditoría de RAY reveló:' : 'RAY\'s audit revealed:'}</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div><span>{locale === 'es' ? 'Sin sistema para' : 'No system for'} <strong className="text-red-400">{locale === 'es' ? 'pedidos de catering corporativo' : 'corporate catering orders'}</strong></span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div><span>{locale === 'es' ? 'Poca visibilidad para búsquedas de almuerzos de negocios' : 'Poor visibility for business lunch searches'}</span></li>
                  <li className="flex items-start"><div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div><span>{locale === 'es' ? 'El objetivo era convertirse en la' : 'The goal was to become the'} <strong className="text-green-400">{locale === 'es' ? 'opción número uno para almuerzos de negocios' : 'top choice for business lunches'}</strong></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{locale === 'es' ? 'La Solución' : 'The Solution'}</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8 text-white font-bold" /></div>
                <h3 className="text-xl font-black text-white mb-4">{locale === 'es' ? 'Plataforma Corporativa' : 'Corporate Platform'}</h3>
                <p className="text-gray-300">{locale === 'es' ? 'Sistema dedicado para pedidos masivos de oficina y almuerzos recurrentes' : 'Dedicated system for bulk office orders and recurring lunches'}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><TrendingUp className="w-8 h-8 text-white font-bold" /></div>
                <h3 className="text-xl font-black text-white mb-4">{locale === 'es' ? 'Delivery Rápido' : 'Quick Delivery'}</h3>
                <p className="text-gray-300">{locale === 'es' ? 'Rutas de delivery optimizadas para eficiencia en rush de almuerzo' : 'Optimized delivery routes for lunch rush efficiency'}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><MapPin className="w-8 h-8 text-white font-bold" /></div>
                <h3 className="text-xl font-black text-white mb-4">{locale === 'es' ? 'SEO para Almuerzos de Negocios' : 'Business Lunch SEO'}</h3>
                <p className="text-gray-300">{locale === 'es' ? 'Optimizado para búsquedas de catering corporativo' : 'Optimized for corporate catering searches'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-black text-white mb-6">{locale === 'es' ? 'Los Resultados' : 'The Results'}</h2></div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  {locale === 'es'
                    ? '"¡RAY desbloqueó un flujo de ingresos completamente nuevo para nosotros! Los pedidos de almuerzo aumentaron en '
                    : '"RAY unlocked a whole new revenue stream for us! Lunch orders increased by '
                  }
                  <span className="text-teal-400 font-black">294%</span>, 
                  {locale === 'es'
                    ? ' y el catering corporativo creció en '
                    : ' and corporate catering grew by '
                  }
                  <span className="text-green-400 font-black">172%</span>. 
                  {locale === 'es'
                    ? ' Ahora servimos a más de 15 oficinas diariamente con pedidos de almuerzo recurrentes. ¡Esto ha transformado completamente nuestro negocio!"'
                    : ' We now serve 15+ offices daily with recurring lunch orders. This has completely transformed our business!"'
                  }
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">{locale === 'es' ? 'Equipo de Gestión' : 'Management Team'}</div>
                    <div className="text-gray-400">Ninina</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-teal-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center"><TrendingUp className="w-6 h-6 text-white font-bold" /></div></div>
                <div className="text-4xl font-black text-teal-400 mb-2">294%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Aumento' : 'Increase'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en pedidos de almuerzo' : 'in lunch orders'}</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center"><Users className="w-6 h-6 text-white font-bold" /></div></div>
                <div className="text-4xl font-black text-green-400 mb-2">172%</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Crecimiento' : 'Growth'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'en catering corporativo' : 'in corporate catering'}</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-teal-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center"><Star className="w-6 h-6 text-white font-bold fill-current" /></div></div>
                <div className="text-4xl font-black text-teal-400 mb-2">4.8★</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Promedio' : 'Average'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'calificación Google' : 'Google rating'}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4"><div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center"><Eye className="w-6 h-6 text-white font-bold" /></div></div>
                <div className="text-4xl font-black text-blue-400 mb-2">15+</div>
                <div className="text-white font-medium mb-1">{locale === 'es' ? 'Oficinas' : 'Offices'}</div>
                <div className="text-sm text-gray-400">{locale === 'es' ? 'pedidos recurrentes' : 'recurring orders'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default NininaCaseStudy

