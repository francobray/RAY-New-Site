'use client'

import React, { useState } from 'react'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface FAQProps {
  locale: Locale
}

interface FAQItem {
  question: string
  answer: string
}

const FAQ: React.FC<FAQProps> = ({ locale }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslations(locale)

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.FAQ.TITLE}
          </h2>
          <p className="text-xl text-gray-600">
            {t.FAQ.SUBTITLE}
          </p>
        </div>

        <div className="space-y-4">
          {t.FAQ.QUESTIONS.map((faq: FAQItem, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-600 font-bold flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="pt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ