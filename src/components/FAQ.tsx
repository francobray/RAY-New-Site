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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answers to common questions about how RAY helps restaurants grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* FAQ Accordion */}
          <div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                    onClick={() => toggleFAQ(index)}
                    type="button"
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

          {/* Testimonial Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-xl mb-4 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Tom Cesario, CEO & Founder of Chef Burger"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <blockquote className="text-xl font-medium leading-relaxed mb-6">
                  "RAY helped us increase our revenue by +$8,000/month. The platform is incredible for driving more customers to our restaurant."
                </blockquote>
                <div className="text-sm text-gray-300">
                  <div className="font-medium text-white">Tom Cesario</div>
                  <div>CEO & Founder, Chef Burger</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-2xl font-bold text-green-400">+$8,000/m</div>
                  <div className="text-xs text-gray-400">Revenue Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ