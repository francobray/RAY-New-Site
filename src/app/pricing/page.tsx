'use client'

import React from 'react'
import { Check, X, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import Button from '@/components/shared/BaseButton'

interface PricingTier {
  id: string
  name: string
  tagline: string
  price: string
  priceDetail: string
  description: string
  features: string[]
  excludedFeatures?: string[]
  ctaText: string
  ctaDestination: 'grader' | 'demo' | 'contact'
  ctaUrl?: string
  isPopular?: boolean
  badge?: string
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: 'Free',
    priceDetail: 'Try RAY for free',
    description: 'Get a comprehensive scan of your restaurant\'s online presence and see where you stand.',
    features: [
      'Free restaurant scan & grading',
      'Visibility analysis',
      'Reputation report',
      'Competitor benchmarking',
      'Personalized recommendations',
      'Email support'
    ],
    excludedFeatures: [
      'Automated optimizations',
      'Review management',
      'Booking integration',
      'Dedicated account manager',
      '30%+ guarantee'
    ],
    ctaText: 'Start Free Scan',
    ctaDestination: 'grader',
    ctaUrl: 'https://grader.rayapp.io/?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-starter'
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Most popular for growing restaurants',
    price: '$299',
    priceDetail: '/month',
    description: 'Everything you need to increase walk-ins, orders, and bookings with our proven platform.',
    features: [
      'Everything in Starter, plus:',
      'Local SEO optimization',
      'Automated Google Business Profile updates',
      'Review monitoring & response templates',
      'Customer engagement tools',
      'Booking & ordering integrations',
      'Performance dashboard & analytics',
      '30%+ Google Maps directions increase guarantee',
      'Email & chat support'
    ],
    ctaText: 'Get Started',
    ctaDestination: 'demo',
    ctaUrl: '/demo?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-growth',
    isPopular: true,
    badge: 'Most Popular'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For multi-location restaurants',
    price: 'Custom',
    priceDetail: 'Talk to sales',
    description: 'Advanced features, dedicated support, and custom solutions for restaurant groups.',
    features: [
      'Everything in Growth, plus:',
      'Multi-location management',
      'Custom integrations',
      'Advanced analytics & reporting',
      'White-label options',
      'API access',
      'Dedicated account manager',
      'Priority support (phone, email, chat)',
      'Custom SLAs',
      'Training & onboarding'
    ],
    ctaText: 'Contact Sales',
    ctaDestination: 'contact',
    ctaUrl: '/demo?utm_source=pricing&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=pricing-enterprise'
  }
]

const PricingPage = () => {
  const handleCtaClick = (tier: PricingTier) => {
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
    if (tier.ctaUrl) {
      window.open(tier.ctaUrl, '_blank', 'noopener,noreferrer')
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
                Simple, Transparent Pricing
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 mb-6 leading-tight">
                Plans that grow with{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  your restaurant
                </span>
              </h1>

              <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
                Choose the plan that fits your needs. All plans include our proven platform to drive more walk-ins, orders, and bookings.
              </p>
            </div>

            {/* 30% Guarantee Banner */}
            <div className="bg-ray-promise rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 shadow-lg border border-yellow-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-md">
                    <Shield className="w-8 h-8 text-ray-dark-900" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                    30%+ Google Maps Directions Increase Guaranteed
                  </h3>
                  <p className="text-ray-dark-700 leading-relaxed">
                    We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months — or we'll refund your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
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
                        {tier.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-ray-green flex-shrink-0 mt-0.5" />
                            <span className="text-ray-dark-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                        {tier.excludedFeatures?.map((feature, index) => (
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-ray-darkGray">
                Everything you need to know about RAY pricing
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                  What does the 30%+ guarantee cover?
                </h3>
                <p className="text-ray-dark-700 leading-relaxed">
                  We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months. "Google Maps Directions" refers to direction requests and navigation taps on your Google Business Profile. If we don't hit this target, we'll refund your investment.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                  Can I switch plans later?
                </h3>
                <p className="text-ray-dark-700 leading-relaxed">
                  Yes! You can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to new features. Downgrades take effect at the start of your next billing cycle.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                  Is there a contract or commitment?
                </h3>
                <p className="text-ray-dark-700 leading-relaxed">
                  No long-term contracts required. All plans are month-to-month and you can cancel at any time. We recommend staying for at least 3 months to see meaningful results.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-ray-dark-700 leading-relaxed">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover) and ACH bank transfers for Enterprise customers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                  Do you offer discounts for annual billing?
                </h3>
                <p className="text-ray-dark-700 leading-relaxed">
                  Yes! Contact our sales team to learn about annual billing discounts and special offers for multi-location restaurants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ray-promise relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-ray-dark-900 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Ready to Grow Your Restaurant?
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Still have questions?
            </h2>

            <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
              Book a free demo and see how RAY can transform your restaurant's online presence and drive more revenue.
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
                Book a Free Demo
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
                Start Free Scan
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PricingPage
