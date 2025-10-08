'use client'

import React from 'react'
import { Calendar, ShoppingBag, BarChart3, TrendingUp, CreditCard } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import Image from 'next/image'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/constants/copy'

interface OnlineOrdersProps {
  locale: Locale
}

const OnlineOrders: React.FC<OnlineOrdersProps> = ({ locale }) => {
  const t = useTranslations(locale)

  const features = [
    {
      icon: Calendar,
      title: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[0].TITLE,
      subtitle: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[0].SUBTITLE,
      description: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[0].DESCRIPTION,
      details: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[0].DETAILS
    },
    {
      icon: ShoppingBag,
      title: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[1].TITLE,
      subtitle: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[1].SUBTITLE,
      description: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[1].DESCRIPTION,
      details: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[1].DETAILS
    },
    {
      icon: BarChart3,
      title: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[2].TITLE,
      subtitle: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[2].SUBTITLE,
      description: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[2].DESCRIPTION,
      details: t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.FEATURES[2].DETAILS
    }
  ]

  const stats = t.ONLINE_ORDERS_PAGE.RESULTS_SECTION.STATS

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                {t.ONLINE_ORDERS_PAGE.HERO_TITLE} {' '}
                <span className="text-ray-blue">{t.ONLINE_ORDERS_PAGE.HERO_TITLE_HIGHLIGHT}</span>
              </h1>
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
                {t.ONLINE_ORDERS_PAGE.HERO_SUBTITLE}
              </p>
              <div className="flex justify-center lg:justify-start mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
                  data-cta="grader"
                  data-analytics="online_orders_hero"
                  aria-label="Scan your restaurant"
                >
                  {t.ONLINE_ORDERS_PAGE.CTA_PRIMARY}
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                  <span>{t.ONLINE_ORDERS_PAGE.STATS.ONLINE_ORDERS}</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 text-ray-blue mr-2" />
                  <span>{t.ONLINE_ORDERS_PAGE.STATS.HIGHER_MARGINS}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Restaurant-photo-ray.jpeg"
                alt="Restaurant staff managing online orders efficiently with RAY platform"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-green">{t.ONLINE_ORDERS_PAGE.STATS_WIDGETS.ONLINE_ORDERS_STAT}</div>
                <div className="text-sm text-ray-darkGray">{t.ONLINE_ORDERS_PAGE.STATS_WIDGETS.ONLINE_ORDERS_LABEL}</div>
                <div className="text-xs text-ray-darkGray">{t.ONLINE_ORDERS_PAGE.STATS_WIDGETS.ONLINE_ORDERS_SUBLABEL}</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-blue">{t.ONLINE_ORDERS_PAGE.STATS_WIDGETS.HIGHER_MARGINS_STAT}</div>
                <div className="text-sm text-ray-darkGray">{t.ONLINE_ORDERS_PAGE.STATS_WIDGETS.HIGHER_MARGINS_LABEL}</div>
                <div className="text-xs text-ray-darkGray">{t.ONLINE_ORDERS_PAGE.STATS_WIDGETS.HIGHER_MARGINS_SUBLABEL}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.TITLE}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {t.ONLINE_ORDERS_PAGE.FEATURES_SECTION.SUBTITLE}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">{feature.title}</h3>
                <h4 className="text-lg font-semibold text-ray-blue mb-4">{feature.subtitle}</h4>
                <p className="text-ray-darkGray mb-6">{feature.description}</p>
                <ul className="text-left space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                      <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.ONLINE_ORDERS_PAGE.RESULTS_SECTION.TITLE}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {t.ONLINE_ORDERS_PAGE.RESULTS_SECTION.SUBTITLE}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl font-bold text-ray-green mb-2">{stat.VALUE}</div>
                <div className="text-lg font-semibold text-ray-dark-900 mb-2">{stat.LABEL}</div>
                <div className="text-sm text-ray-darkGray">{stat.DESCRIPTION}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-ray-promise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            {t.ONLINE_ORDERS_PAGE.FINAL_CTA.TITLE}
          </h2>
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto">
            {t.ONLINE_ORDERS_PAGE.FINAL_CTA.SUBTITLE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
            >
              {t.ONLINE_ORDERS_PAGE.FINAL_CTA.CTA_BUTTON}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineOrders