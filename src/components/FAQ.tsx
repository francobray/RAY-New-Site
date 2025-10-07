'use client'

import React, { useState } from 'react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What do I need to get started?",
      answer: "We set up most restaurants within a week. You'll have an onboarding specialist to guide you through the process."
    },
    {
      question: "Do you take over my POS?",
      answer: "No, but we can automatically inject orders into many of the major POS systems."
    },
    {
      question: "What happens to my current website?",
      answer: "RAY replaces your current website. We redirect your domain to your new website with RAY."
    },
    {
      question: "Do you do social media marketing?",
      answer: "No. We've found that social media isn't great ROI for most local restaurants. Google search is proven to drive direct sales."
    },
    {
      question: "How do you get customers to order directly from me?",
      answer: "We help you educate your customers and set up reward programs so customers earn points when they order direct."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Answers to common questions about how RAY helps restaurants grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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