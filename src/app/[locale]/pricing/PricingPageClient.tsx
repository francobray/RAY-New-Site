'use client'

import React, { useState } from 'react'
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Button from '@/components/shared/BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface PricingPageClientProps {
  locale: Locale
}

const PricingPageClient = ({ locale }: PricingPageClientProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(locale)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleCtaClick = (tier: any) => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'pricing',
        event_label: `pricing_${tier.id}`,
        cta_location: 'pricing_page',
        value: 1
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ray-blue to-ray-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t.PRICING_PAGE.HERO.TITLE}{' '}
              <span className="text-white">{t.PRICING_PAGE.HERO.TITLE_HIGHLIGHT}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              {t.PRICING_PAGE.HERO.SUBTITLE}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              {locale === 'es' ? 'Elige el plan perfecto para tu restaurante' : 'Choose the perfect plan for your restaurant'}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {locale === 'es' ? 'Planes flexibles que crecen contigo' : 'Flexible plans that grow with you'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.PRICING_PAGE.TIERS.map((tier: any) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  tier.isPopular ? 'border-ray-blue' : 'border-gray-200'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-ray-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                      {locale === 'es' ? 'Más Popular' : 'Most Popular'}
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-ray-darkGray mb-6">{tier.description}</p>
                  </div>

                  {/* Pricing Table */}
                  <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-ray-dark-900">
                            {locale === 'es' ? 'Detalles' : 'Details'}
                          </th>
                          <th className="px-4 py-3 text-right text-sm font-semibold text-ray-dark-900">
                            {locale === 'es' ? 'Precio' : 'Price'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-ray-dark-700">
                            {locale === 'es' ? 'Precio mensual por ubicación' : 'Monthly price per Location'}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-right text-ray-dark-900">
                            ${tier.price}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-ray-dark-700">
                            {locale === 'es' ? '% sobre pedidos' : '% on top of order'}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-right text-ray-dark-900">
                            {tier.orderPercentage}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-ray-dark-700">
                            {locale === 'es' ? 'Configuración única' : 'One time Setup Fee'}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-right text-ray-dark-900">
                            {tier.setupFee}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Core Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-ray-dark-900 mb-4 uppercase tracking-wider">
                      {locale === 'es' ? 'Características Principales' : 'Core Features'}
                    </h4>
                    <div className="space-y-3">
                      {tier.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-ray-dark-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant={tier.isPopular ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                    href={tier.ctaDestination === 'grader' ? 'https://grader.rayapp.io' : `/${locale}/demo`}
                    onClick={() => handleCtaClick(tier)}
                    data-analytics={`pricing_${tier.id}_cta`}
                  >
                    {tier.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ray-promise relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ray-blue to-ray-green"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {locale === 'es' ? '¿Listo para crecer?' : 'Ready to grow?'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {locale === 'es' ? 'Comienza hoy y ve resultados en 60 días' : 'Start today and see results in 60 days'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              href={`/${locale}/demo`}
              className="bg-white text-ray-blue hover:bg-gray-100"
              data-analytics="pricing_bottom_demo_cta"
            >
              {locale === 'es' ? 'Agendar Demo' : 'Book Demo'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href={`/${locale}/contact`}
              className="border border-white text-white hover:bg-white hover:text-ray-blue"
              data-analytics="pricing_bottom_contact_cta"
            >
              {locale === 'es' ? 'Contactar Ventas' : 'Contact Sales'}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              {t.PRICING_PAGE.FAQ.TITLE}
            </h2>
            <p className="text-xl text-ray-darkGray">
              {t.PRICING_PAGE.FAQ.SUBTITLE}
            </p>
          </div>

          <div className="space-y-6">
            {t.PRICING_PAGE.FAQ.QUESTIONS.map((faq: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-xl font-bold text-ray-dark-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ray-blue flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-200">
                    <p className="text-ray-dark-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPageClient
