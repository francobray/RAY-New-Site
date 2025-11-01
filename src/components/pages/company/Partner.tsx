'use client'

import React, { useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import { useTranslations } from '../../../hooks/useTranslations'
import Button from '../../shared/BaseButton'

interface PartnerProps {
  locale: Locale
}

const Partner: React.FC<PartnerProps> = ({ locale }) => {
  const t = useTranslations(locale)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{t.PARTNER_PAGE.HERO.TITLE}</h1>
        <p>{t.PARTNER_PAGE.HERO.DESCRIPTION}</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
              {t.PARTNER_PAGE.HERO.TITLE}
            </h1>
            <p className="text-xl sm:text-2xl text-ray-dark-700 mb-8 leading-relaxed">
              {t.PARTNER_PAGE.HERO.DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href={`/${locale}/demo?utm_source=partner-page&utm_medium=website&utm_campaign=partner-program&utm_content=hero-cta`}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.PARTNER_PAGE.HERO.CTA}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 mb-6">
              {t.PARTNER_PAGE.CORE_BENEFITS.TITLE}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-ray-blue rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_1.TITLE}
              </h3>
              <p className="text-ray-dark-700 leading-relaxed">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_1.DESCRIPTION}
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-ray-blue rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_2.TITLE}
              </h3>
              <p className="text-ray-dark-700 leading-relaxed">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_2.DESCRIPTION}
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-ray-blue rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_3.TITLE}
              </h3>
              <p className="text-ray-dark-700 leading-relaxed">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_3.DESCRIPTION}
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-ray-blue rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_4.TITLE}
              </h3>
              <p className="text-ray-dark-700 leading-relaxed">
                {t.PARTNER_PAGE.CORE_BENEFITS.BENEFIT_4.DESCRIPTION}
              </p>
            </div>
          </div>

          {/* Proof Point */}
          <div className="bg-gradient-to-r from-ray-blue/10 to-blue-100 rounded-2xl p-8 text-center">
            <p className="text-lg text-ray-dark-900 font-semibold">
              {t.PARTNER_PAGE.CORE_BENEFITS.PROOF_POINT}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.PARTNER_PAGE.FAQ.TITLE}
            </h2>
          </div>

          <div className="space-y-4">
            {t.PARTNER_PAGE.FAQ.QUESTIONS.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openFAQ === index}
                >
                  <span className="font-semibold text-ray-dark-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-ray-blue flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-ray-dark-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.PARTNER_PAGE.FINAL_CTA.TITLE}
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {t.PARTNER_PAGE.FINAL_CTA.DESCRIPTION}
          </p>
          <Button
            variant="primary"
            size="lg"
            href={`/${locale}/demo?utm_source=partner-page&utm_medium=website&utm_campaign=partner-program&utm_content=final-cta`}
          >
            {t.PARTNER_PAGE.FINAL_CTA.CTA}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  )
}

export default Partner

