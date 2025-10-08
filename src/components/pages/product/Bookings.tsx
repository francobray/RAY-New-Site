'use client'

import React from 'react'
import { Calendar, Users, BarChart3, Clock, Heart, CheckCircle, ArrowRight, TrendingUp, Star, UserCheck, RotateCcw, Shield } from 'lucide-react'
import Card from '../../Card'
import Button from '../../shared/BaseButton'
import HubSpotUnifiedModal from '../../HubSpotUnifiedModal'
import { useHubSpotModal } from '../../../hooks/useHubSpotModal'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/constants/copy'

interface BookingsProps {
  locale: Locale
}

const Bookings: React.FC<BookingsProps> = ({ locale }) => {
  const t = useTranslations(locale)
  const { openModal, isModalOpen, closeModal, currentConfig } = useHubSpotModal()

  const benefits = [
    {
      icon: Calendar,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[0].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[0].DESCRIPTION,
      details: [
        'Embedded booking widget for your website',
        '24/7 reservation capture',
        'Real-time availability updates',
        'Mobile-optimized booking experience'
      ]
    },
    {
      icon: Users,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[1].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[1].DESCRIPTION,
      details: [
        'Digital waitlist management',
        'SMS notifications for guests',
        'Walk-in queue optimization',
        'Estimated wait time tracking'
      ]
    },
    {
      icon: Heart,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[2].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[2].DESCRIPTION,
      details: [
        'Comprehensive guest profiles',
        'Dining preferences tracking',
        'Visit history and notes',
        'Special occasion reminders'
      ]
    },
    {
      icon: BarChart3,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[3].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[3].DESCRIPTION,
      details: [
        'Booking trend analysis',
        'No-show rate tracking',
        'Peak hour identification',
        'Revenue optimization insights'
      ]
    },
    {
      icon: Clock,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[4].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[4].DESCRIPTION,
      details: [
        'Automated booking confirmations',
        'SMS and email reminders',
        'Customizable message templates',
        'Two-way communication system'
      ]
    },
    {
      icon: Star,
      title: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[5].TITLE,
      description: t.BOOKINGS_PAGE.FEATURES_SECTION.FEATURES[5].DESCRIPTION,
      details: [
        'Points-based loyalty system',
        'Automated reward tracking',
        'Special member pricing',
        'Birthday and anniversary perks'
      ]
    }
  ]

  const metrics = [
    {
      icon: UserCheck,
      value: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[0].TITLE,
      label: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[0].SUBTITLE,
      description: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[0].DESCRIPTION
    },
    {
      icon: RotateCcw,
      value: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[1].TITLE,
      label: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[1].SUBTITLE,
      description: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[1].DESCRIPTION
    },
    {
      icon: Shield,
      value: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[2].TITLE,
      label: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[2].SUBTITLE,
      description: t.BOOKINGS_PAGE.RESULTS_SECTION.STATS[2].DESCRIPTION
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left relative">
              <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {t.BOOKINGS_PAGE.BADGE}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                {t.BOOKINGS_PAGE.HERO_TITLE} {' '}
                <span className="text-ray-blue">
                  {t.BOOKINGS_PAGE.HERO_TITLE_HIGHLIGHT}
                </span>
              </h1>
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
                {t.BOOKINGS_PAGE.HERO_SUBTITLE}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  data-cta="grader"
                  data-analytics="bookings_hero"
                  aria-label="Scan your restaurant"
                >
                  {t.BOOKINGS_PAGE.CTA_PRIMARY}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('demo-expert')}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-cta="demo-expert"
                  data-analytics="bookings_hero"
                  aria-label="Talk to an expert"
                >
                  {t.BOOKINGS_PAGE.CTA_SECONDARY}
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>{t.BOOKINGS_PAGE.STATS.TABLE_UTILIZATION}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>{t.BOOKINGS_PAGE.STATS.NO_SHOWS}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                <Card className="p-6 bg-white shadow-2xl">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-ray-dark-900 mb-2">{t.BOOKINGS_PAGE.BOOKING_WIDGET.RESERVE_TABLE}</h3>
                      <p className="text-sm text-ray-darkGray">{t.BOOKINGS_PAGE.BOOKING_WIDGET.AVAILABLE_TONIGHT}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="p-2 bg-gray-100 rounded-lg text-sm font-medium text-ray-darkGray">6:00 PM</button>
                      <button className="p-2 bg-ray-blue text-white rounded-lg text-sm font-medium">7:30 PM</button>
                      <button className="p-2 bg-gray-100 rounded-lg text-sm font-medium text-ray-darkGray">9:00 PM</button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ray-dark-900 mb-2">{t.BOOKINGS_PAGE.BOOKING_WIDGET.PARTY_SIZE}</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>{t.BOOKINGS_PAGE.BOOKING_WIDGET.PEOPLE_2}</option>
                        <option>{t.BOOKINGS_PAGE.BOOKING_WIDGET.PEOPLE_4}</option>
                        <option>{t.BOOKINGS_PAGE.BOOKING_WIDGET.PEOPLE_6}</option>
                      </select>
                    </div>
                    <button className="w-full bg-ray-green text-white py-3 rounded-lg font-semibold">{t.BOOKINGS_PAGE.BOOKING_WIDGET.BOOK_TABLE}</button>
                  </div>
                </Card>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">{t.BOOKINGS_PAGE.BOOKING_WIDGET.TABLE_UTILIZATION_STAT}</div>
                  <div className="text-xs text-ray-darkGray">{t.BOOKINGS_PAGE.BOOKING_WIDGET.TABLE_UTILIZATION_LABEL}</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">{t.BOOKINGS_PAGE.BOOKING_WIDGET.NO_SHOWS_STAT}</div>
                  <div className="text-xs text-ray-darkGray">{t.BOOKINGS_PAGE.BOOKING_WIDGET.NO_SHOWS_LABEL}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              {t.BOOKINGS_PAGE.FEATURES_SECTION.BADGE}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">{t.BOOKINGS_PAGE.FEATURES_SECTION.TITLE}</h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">{t.BOOKINGS_PAGE.FEATURES_SECTION.SUBTITLE}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-ray-blue rounded-lg mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ray-dark-900 mb-3">{benefit.title}</h3>
                <p className="text-ray-darkGray mb-4 flex-grow">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.03),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">{t.BOOKINGS_PAGE.RESULTS_SECTION.TITLE}</h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">{t.BOOKINGS_PAGE.RESULTS_SECTION.SUBTITLE}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ray-blue to-ray-green rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-ray-dark-900 mb-2 group-hover:text-ray-blue transition-colors duration-300">{metric.value}</div>
                    <div className="text-lg font-semibold text-ray-dark-900 mb-3 leading-tight">{metric.label}</div>
                    <div className="text-sm text-ray-darkGray font-medium">{metric.description}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl text-ray-dark-900 font-medium leading-relaxed mb-8">
              "{t.BOOKINGS_PAGE.TESTIMONIAL.QUOTE}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-ray-dark-900 text-lg">{t.BOOKINGS_PAGE.TESTIMONIAL.AUTHOR}</div>
                <div className="text-ray-darkGray">{t.BOOKINGS_PAGE.TESTIMONIAL.POSITION}</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            {t.BOOKINGS_PAGE.FINAL_CTA.BADGE}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">{t.BOOKINGS_PAGE.FINAL_CTA.TITLE}</h2>
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">{t.BOOKINGS_PAGE.FINAL_CTA.SUBTITLE}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://grader.rayapp.io/', '_blank')}
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
              data-cta="grader"
              data-analytics="bookings_final_cta"
              aria-label="Scan your restaurant"
            >
              {t.BOOKINGS_PAGE.FINAL_CTA.CTA_PRIMARY}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => openModal('demo-free')}
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              data-cta="demo-free"
              data-analytics="bookings_final_cta"
              aria-label="Request free demo"
            >
              {t.BOOKINGS_PAGE.FINAL_CTA.CTA_SECONDARY}
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            {t.BOOKINGS_PAGE.FINAL_CTA.GUARANTEES.map((guarantee, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HubSpotUnifiedModal isOpen={isModalOpen} onClose={closeModal} config={currentConfig} />
    </>
  )
}

export default Bookings