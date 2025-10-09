'use client'

import React, { useState } from 'react'
import { Star, TrendingUp, ArrowRight, CheckCircle, BarChart3, Search, Database, Globe, Camera, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '../../../lib/i18n'

interface WalkInsProps {
  locale?: Locale
}

const WalkIns: React.FC<WalkInsProps> = ({ locale = 'es' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(locale)

  const features = [
    {
      icon: Search,
      title: t.WALK_INS_PAGE.FEATURES.GET_FOUND.TITLE,
      description: t.WALK_INS_PAGE.FEATURES.GET_FOUND.DESCRIPTION,
      details: t.WALK_INS_PAGE.FEATURES.GET_FOUND.DETAILS
    },
    {
      icon: Star,
      title: t.WALK_INS_PAGE.FEATURES.REVIEWS.TITLE,
      description: t.WALK_INS_PAGE.FEATURES.REVIEWS.DESCRIPTION,
      details: t.WALK_INS_PAGE.FEATURES.REVIEWS.DETAILS
    },
    {
      icon: Database,
      title: t.WALK_INS_PAGE.FEATURES.LISTINGS.TITLE,
      description: t.WALK_INS_PAGE.FEATURES.LISTINGS.DESCRIPTION,
      details: t.WALK_INS_PAGE.FEATURES.LISTINGS.DETAILS
    },
    {
      icon: Globe,
      title: t.WALK_INS_PAGE.FEATURES.LOCAL_PAGES.TITLE,
      description: t.WALK_INS_PAGE.FEATURES.LOCAL_PAGES.DESCRIPTION,
      details: t.WALK_INS_PAGE.FEATURES.LOCAL_PAGES.DETAILS
    },
    {
      icon: BarChart3,
      title: t.WALK_INS_PAGE.FEATURES.INSIGHTS.TITLE,
      description: t.WALK_INS_PAGE.FEATURES.INSIGHTS.DESCRIPTION,
      details: t.WALK_INS_PAGE.FEATURES.INSIGHTS.DETAILS
    },
    {
      icon: Camera,
      title: t.WALK_INS_PAGE.FEATURES.PHOTOS.TITLE,
      description: t.WALK_INS_PAGE.FEATURES.PHOTOS.DESCRIPTION,
      details: t.WALK_INS_PAGE.FEATURES.PHOTOS.DETAILS
    }
  ]

  const faqs = [
    {
      question: locale === 'es' ? '¿Qué son exactamente las "direcciones de Google Maps"?' : 'What exactly are "Google Maps directions"?',
      answer: locale === 'es' ? 'Las direcciones de Google Maps son solicitudes de direcciones del Perfil de Negocio de Google y toques de navegación - cuando los clientes hacen clic en "Direcciones" para visitar tu restaurante. Esta es la señal más fuerte de intención de visitar.' : 'Google Maps Directions are Google Business Profile direction requests and navigation taps - when customers click "Directions" to visit your restaurant. This is the strongest signal of intent to visit.'
    },
    {
      question: locale === 'es' ? '¿Qué tan rápido veré resultados?' : 'How quickly will I see results?',
      answer: locale === 'es' ? 'La mayoría de restaurantes ven mejoras iniciales dentro de 2-4 semanas, con resultados significativos típicamente visibles dentro de 60-90 días. Nuestra garantía cubre 6 meses para asegurar un crecimiento sustancial.' : 'Most restaurants see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. Our guarantee covers 6 months to ensure substantial growth.'
    },
    {
      question: locale === 'es' ? '¿Qué pasa si no obtengo el aumento garantizado del 30%?' : 'What if I don\'t get the guaranteed 30% increase?',
      answer: locale === 'es' ? 'Garantizamos un aumento del 30%+ en las direcciones del Perfil de Negocio de Google dentro de 6 meses — o reembolsaremos tu inversión. Respaldamos nuestros resultados.' : 'We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months — or we\'ll refund your investment. We stand behind our results.'
    },
    {
      question: locale === 'es' ? '¿Trabajan con múltiples ubicaciones de restaurantes?' : 'Do you work with multiple restaurant locations?',
      answer: locale === 'es' ? 'Sí, nuestra plataforma escala para gestionar múltiples ubicaciones de restaurantes con reportes centralizados y estrategias de optimización específicas por ubicación.' : 'Yes, our platform scales to manage multiple restaurant locations with centralized reporting and location-specific optimization strategies.'
    },
    {
      question: locale === 'es' ? '¿Con qué plataformas se sincronizan?' : 'Which platforms do you sync with?',
      answer: locale === 'es' ? 'Nos sincronizamos con Google, Yelp, Facebook, Apple Maps y más de 50 directorios principales y plataformas de reseñas para asegurar información consistente en todas partes.' : 'We sync with Google, Yelp, Facebook, Apple Maps, and 50+ other major directories and review platforms to ensure consistent information everywhere.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'RAY Más tráfico en sucursales - Convierte búsquedas en visitas de restaurante' : 'RAY Walk-Ins - Turn Searches Into Restaurant Visits'}</h1>
        <p>{locale === 'es' ? 'RAY Más tráfico en sucursales es una plataforma de marketing local impulsada por IA que ayuda a los restaurantes a dominar Google Maps y atraer más tráfico peatonal.' : 'RAY Walk-Ins is an AI-powered local marketing platform that helps restaurants dominate Google Maps and drive more foot traffic.'}</p>
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
                <span className="text-sm font-medium text-ray-dark-900">{t.WALK_INS_PAGE.BADGE}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {t.WALK_INS_PAGE.HERO_TITLE}{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {t.WALK_INS_PAGE.HERO_TITLE_HIGHLIGHT}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {t.WALK_INS_PAGE.HERO_SUBTITLE}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href="https://grader.rayapp.io/"
                  external={true}
                  data-cta="grader"
                  data-analytics="walk_ins_hero"
                  aria-label="Scan your restaurant"
                >
                  {t.WALK_INS_PAGE.SCAN_RESTAURANT}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/demo?utm_source=walk-ins-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-expert`}
                  data-cta="demo-expert"
                  data-analytics="walk_ins_hero"
                  aria-label="Talk to an expert"
                >
                  {t.WALK_INS_PAGE.TALK_TO_EXPERT}
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{t.WALK_INS_PAGE.AVG_INCREASE}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{t.WALK_INS_PAGE.RESULTS_TIME}</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual - Mobile Phone with Google Maps */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                {/* Phone mockup */}
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-white px-6 py-3 flex justify-between items-center text-sm">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Google Maps interface */}
                    <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100">
                      {/* Map background */}
                      <div className="absolute inset-0 bg-gray-200"></div>
                      
                      {/* Restaurant listings */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 shadow-lg">
                        <div className="space-y-3">
                          {/* Your Restaurant - #1 */}
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-2 border-green-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                1
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">{locale === 'es' ? 'Tu Restaurante' : 'Your Restaurant'}</div>
                                <div className="text-sm text-gray-600">⭐ 4.8 • 847 {locale === 'es' ? 'reseñas' : 'reviews'} • 0.2 mi</div>
                                <div className="text-xs text-green-600 font-medium">{locale === 'es' ? 'Abierto ahora' : 'Open now'}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">#1</div>
                            </div>
                          </div>
                          
                          {/* Competitors */}
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
                                2
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-700">{locale === 'es' ? 'Competidor A' : 'Competitor A'}</div>
                                <div className="text-xs text-gray-500">4.2⭐ • 234 {locale === 'es' ? 'reseñas' : 'reviews'} • 0.4 mi</div>
                              </div>
                            </div>
                            <div className="text-gray-400 text-sm">#2</div>
                          </div>
                          
                          <div className="flex items-center justify-between p-2">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
                                3
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-700">{locale === 'es' ? 'Competidor B' : 'Competitor B'}</div>
                                <div className="text-xs text-gray-500">6 {locale === 'es' ? 'reseñas' : 'reviews'} • 0.6 mi</div>
                              </div>
                            </div>
                            <div className="text-gray-400 text-sm">#3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">+47%</div>
                  <div className="text-xs text-ray-darkGray">{t.WALK_INS_PAGE.MORE_VISIBILITY}</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">4.8★</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Calificación promedio' : 'Average rating'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Cómo Dominamos Google Maps Para Ti' : 'How We Dominate Google Maps For You'}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {locale === 'es' ? 'Seis estrategias comprobadas que posicionan tu restaurante por encima de la competencia en búsquedas locales.' : 'Six proven strategies that position your restaurant above the competition in local searches.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-ray-blue to-ray-green rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-ray-darkGray mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail: string, detailIndex: number) => (
                        <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                          <CheckCircle className="w-4 h-4 text-ray-green mr-2 mt-0.5 flex-shrink-0" />
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-ray-darkGray">
              {locale === 'es' ? 'Todo lo que necesitas saber sobre cómo aumentamos el tráfico a tu restaurante.' : 'Everything you need to know about how we increase traffic to your restaurant.'}
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

export default WalkIns