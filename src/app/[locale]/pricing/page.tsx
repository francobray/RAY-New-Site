'use client'

import React, { useState } from 'react'
import { Check, X, ArrowRight, TrendingUp, Zap, ChevronDown, ChevronUp } from 'lucide-react'
import Button from '@/components/shared/BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/constants/copy'

interface PricingPageProps {
  params: { locale: Locale }
}

const PricingPage = ({ params }: PricingPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(params.locale)

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

    // Handle different CTA destinations
    if (tier.ctaDestination === 'grader') {
      window.open('https://grader.rayapp.io/?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-starter', '_blank', 'noopener,noreferrer')
    } else if (tier.ctaDestination === 'demo') {
      window.location.href = '/demo?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-growth'
    } else if (tier.ctaDestination === 'contact') {
      window.location.href = '/demo?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-enterprise'
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                {t.PRICING_PAGE.HERO.BADGE}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 mb-6 leading-tight">
                {t.PRICING_PAGE.HERO.TITLE}{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  {t.PRICING_PAGE.HERO.TITLE_HIGHLIGHT}
                </span>
              </h1>

              <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
                {t.PRICING_PAGE.HERO.SUBTITLE}
              </p>
            </div>

          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.PRICING_PAGE.TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative group ${
                    tier.isPopular ? 'lg:scale-105 lg:z-10' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.isPopular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-ray-blue to-ray-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                      tier.isPopular
                        ? 'border-ray-blue'
                        : 'border-gray-100 hover:border-gray-200'
                    } flex flex-col`}
                  >
                    {/* Header */}
                    <div className="p-8 pb-6">
                      <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-ray-darkGray text-sm mb-6">
                        {tier.tagline}
                      </p>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-ray-dark-900">
                            {tier.price}
                          </span>
                          <span className="text-ray-darkGray text-lg">
                            {tier.priceDetail}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-ray-dark-700 leading-relaxed mb-8">
                        {tier.description}
                      </p>

                      {/* CTA Button */}
                      <Button
                        variant={tier.isPopular ? 'primary' : 'secondary'}
                        size="lg"
                        fullWidth={true}
                        onClick={() => handleCtaClick(tier)}
                        data-cta={tier.ctaDestination}
                        data-analytics={`pricing_${tier.id}`}
                        aria-label={`${tier.ctaText} for ${tier.name} plan`}
                        className="group/btn mb-8"
                      >
                        {tier.ctaText}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="px-8 pb-8 flex-grow">
                      <div className="space-y-4">
                        {tier.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-ray-green flex-shrink-0 mt-0.5" />
                            <span className="text-ray-dark-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                        {tier.excludedFeatures?.map((feature: string, index: number) => (
                          <div key={`excluded-${index}`} className="flex items-start gap-3 opacity-40">
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              {t.PRICING_PAGE.FAQ.QUESTIONS.map((faq, index) => (
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

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ray-promise relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-ray-dark-900 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {t.PRICING_PAGE.BOTTOM_CTA.BADGE}
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.PRICING_PAGE.BOTTOM_CTA.TITLE}
            </h2>

            <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
              {t.PRICING_PAGE.BOTTOM_CTA.SUBTITLE}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="/demo?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-bottom-primary"
                data-cta="demo-free"
                data-analytics="pricing_bottom_cta"
                className="shadow-xl hover:shadow-2xl transition-all duration-300"
                aria-label="Book a free demo"
              >
                {t.PRICING_PAGE.BOTTOM_CTA.PRIMARY_CTA}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://grader.rayapp.io/?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-bottom"
                external={true}
                data-cta="grader"
                data-analytics="pricing_bottom_cta"
                className="shadow-xl hover:shadow-2xl transition-all duration-300"
                aria-label="Start free restaurant scan"
              >
                {t.PRICING_PAGE.BOTTOM_CTA.SECONDARY_CTA}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PricingPage
