'use client'

import React, { useState } from 'react'
import { Star, ArrowRight, CheckCircle, ChevronDown, ChevronUp, Smartphone, Users, Clock, Zap, Play } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '../../../lib/i18n'

interface MobileAppProps {
  locale?: Locale
}

const MobileApp: React.FC<MobileAppProps> = ({ locale = 'es' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(locale)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const benefits = t.MOBILE_APP_PAGE.BENEFITS.FEATURES
  const faqs = t.MOBILE_APP_PAGE.FAQ.QUESTIONS

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'RAY App Móvil - Tu propia aplicación móvil para restaurante' : 'RAY Mobile App - Your Own Restaurant Mobile App'}</h1>
        <p>{locale === 'es' ? 'RAY Mobile App ayuda a los restaurantes a tener su propia aplicación móvil personalizada para impulsar pedidos directos y eliminar comisiones de terceros.' : 'RAY Mobile App helps restaurants get their own custom mobile app to drive direct orders and eliminate third-party commissions.'}</p>
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
                <Smartphone className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">{t.MOBILE_APP_PAGE.HERO.BADGE}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {t.MOBILE_APP_PAGE.HERO.TITLE}{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {t.MOBILE_APP_PAGE.HERO.TITLE_HIGHLIGHT}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {t.MOBILE_APP_PAGE.HERO.SUBTITLE}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href={`/${locale}/demo?utm_source=branded-apps-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
                  data-cta="demo-free"
                  data-analytics="mobile_app_hero"
                  aria-label="Get a free demo"
                >
                  {t.MOBILE_APP_PAGE.HERO.CTA_DEMO}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/pricing?utm_source=branded-apps-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-pricing`}
                  data-cta="pricing"
                  data-analytics="mobile_app_hero"
                  aria-label="View pricing"
                >
                  {t.MOBILE_APP_PAGE.HERO.CTA_PRICING}
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{t.MOBILE_APP_PAGE.HERO.STAT_1}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{t.MOBILE_APP_PAGE.HERO.STAT_2}</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual - Mobile App Mockup */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                {/* Phone mockup with video */}
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Video placeholder with play button */}
                    <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-gray-900 ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-900">{locale === 'es' ? 'Ve cómo Mr from Phnom Penh Noodle Shack consigue más pedidos repetidos con su app móvil' : 'See how Mr from Phnom Penh Noodle Shack gets more repeat orders with his mobile app'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">+85%</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Más pedidos repetidos' : 'More repeat orders'}</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">5.0★</div>
                  <div className="text-xs text-ray-darkGray">{locale === 'es' ? 'Calificación promedio' : 'Average rating'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.MOBILE_APP_PAGE.BENEFITS.TITLE}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Phone mockup */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] h-[600px] overflow-hidden">
                    {/* App interface mockup */}
                    <div className="relative h-full bg-gradient-to-br from-orange-50 to-yellow-50">
                      {/* Status bar */}
                      <div className="flex justify-between items-center p-4 text-sm">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="px-4">
                        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
                          <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
                          <h3 className="font-bold text-gray-900 mb-1">Pasta Bolognese</h3>
                          <p className="text-sm text-gray-600 mb-2">Classic pasta with meat sauce</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">$16.99</span>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                              {locale === 'es' ? 'Agregar' : 'Add'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const icons = [Zap, Star, Users]
                const IconComponent = icons[index] || Zap
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-ray-blue/10 rounded-full p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-ray-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ray-dark-900 mb-2">{benefit.title}</h3>
                      <p className="text-ray-dark-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {locale === 'es' ? 'Aumenta las ventas con tu propia app móvil' : 'Increase sales with your own mobile app'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - App mockup */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] h-[600px] overflow-hidden">
                    <div className="relative h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                      {/* Header */}
                      <div className="text-center mb-6 pt-8">
                        <h3 className="text-xl font-bold text-gray-900">Manhattan Beach</h3>
                        <p className="text-sm text-gray-600">{locale === 'es' ? 'Abierto hasta las 10:00' : 'Open until 10:00'}</p>
                      </div>
                      
                      {/* Menu items */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Grilled Salmon</h4>
                            <p className="text-xs text-gray-600">$24.99</p>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Caesar Salad</h4>
                            <p className="text-xs text-gray-600">$16.99</p>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Ribeye Steak</h4>
                            <p className="text-xs text-gray-600">$32.99</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <div className="absolute bottom-6 left-4 right-4">
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium">
                          {locale === 'es' ? 'ORDENAR AHORA' : 'ORDER NOW'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Feature callout */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <Clock className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">{t.MOBILE_APP_PAGE.REORDER_SECTION.BADGE}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
                {t.MOBILE_APP_PAGE.REORDER_SECTION.TITLE}
              </h3>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
                {t.MOBILE_APP_PAGE.REORDER_SECTION.SUBTITLE}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Stats */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <Star className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">{t.MOBILE_APP_PAGE.SOCIAL_PROOF.BADGE}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
                {t.MOBILE_APP_PAGE.SOCIAL_PROOF.TITLE}
              </h3>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ray-blue mb-2">5.0</div>
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-ray-darkGray">{t.MOBILE_APP_PAGE.SOCIAL_PROOF.APP_STORE_LABEL}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ray-green mb-2">4.9</div>
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-ray-darkGray">{t.MOBILE_APP_PAGE.SOCIAL_PROOF.GOOGLE_PLAY_LABEL}</p>
                </div>
              </div>
            </div>
            
            {/* Right side - App mockup with reviews */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{t.MOBILE_APP_PAGE.SOCIAL_PROOF.LOYALTY_TITLE}</h4>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {t.MOBILE_APP_PAGE.SOCIAL_PROOF.LOYALTY_STAT}
                </p>
                <p className="text-gray-700 mb-6">
                  {t.MOBILE_APP_PAGE.SOCIAL_PROOF.LOYALTY_DESCRIPTION}
                </p>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-medium text-sm">Sarah M.</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {t.MOBILE_APP_PAGE.SOCIAL_PROOF.TESTIMONIAL}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ray-blue to-ray-green">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.MOBILE_APP_PAGE.FINAL_CTA.TITLE}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.MOBILE_APP_PAGE.FINAL_CTA.SUBTITLE}
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-ray-blue px-12 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl border-2 border-white"
            href={`/${locale}/demo`}
            data-cta="demo-free"
            data-analytics="mobile_app_final_cta"
            aria-label="Get started today"
          >
            {t.MOBILE_APP_PAGE.FINAL_CTA.CTA}
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.MOBILE_APP_PAGE.FAQ.TITLE}
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-ray-dark-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-ray-dark-700 leading-relaxed">{faq.answer}</p>
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

export default MobileApp
