'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronUp, Users, Gift, Smartphone, CheckCircle } from 'lucide-react'
import Button from '../../shared/BaseButton'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
import Image from 'next/image'

interface LoyaltyProps {
  locale: Locale
}

interface Feature {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

const Loyalty: React.FC<LoyaltyProps> = ({ locale }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = useTranslations(locale)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const features = t.LOYALTY_PAGE.FEATURES.LIST

  const faqs = t.LOYALTY_PAGE.FAQ.QUESTIONS

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>Restaurant Loyalty Program - Customer Rewards System | RAY</h1>
        <p>Build customer loyalty with a rewards program like the national chains. Offer points, rewards, and personalized offers to keep guests coming back for more. Easy setup, no-brainer signup, and easy tracking for customers.</p>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,69,193,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <Gift className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-medium text-ray-dark-900">{locale === 'es' ? 'Programa de Loyalty' : 'Loyalty Program'}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                {t.LOYALTY_PAGE.HERO.TITLE}{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {t.LOYALTY_PAGE.HERO.TITLE_HIGHLIGHT}
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                {t.LOYALTY_PAGE.HERO.SUBTITLE}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href={`/${locale}/demo?utm_source=loyalty-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-demo`}
                  data-cta="demo-free"
                  data-analytics="loyalty_hero"
                  aria-label="Get a demo"
                >
                  {t.LOYALTY_PAGE.HERO.CTA_DEMO}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href={`/${locale}/pricing?utm_source=loyalty-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-pricing`}
                  data-cta="pricing"
                  data-analytics="loyalty_hero"
                  aria-label="View pricing"
                >
                  {t.LOYALTY_PAGE.HERO.CTA_PRICING}
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{locale === 'es' ? 'Aumento promedio del 30%' : 'Average 30% increase'}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">{locale === 'es' ? 'Resultados en 60 días' : 'Results in 60 days'}</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Video/Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <Image
                  src="/images/loyalty/Loyalty-3.png?v=1"
                  alt="Restaurant owners discussing loyalty program"
                  width={960}
                  height={540}
                  className="rounded-xl w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t.LOYALTY_PAGE.FEATURES.TITLE}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Visual */}
            <div className="relative">
              <Image
                src="/images/loyalty/Loyalty-6.png"
                alt="Loyalty program preview"
                width={600}
                height={450}
                className="rounded-2xl w-3/4 h-auto mx-auto"
                sizes="(max-width: 1024px) 75vw, 420px"
              />
            </div>
            
            {/* Right side - Features */}
            <div className="space-y-8">
              {features.map((feature: Feature, index: number) => {
                const icons = [Users, Smartphone, Gift]
                const IconComponent = icons[index] || Users
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Boost Repeat Orders Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t.LOYALTY_PAGE.BOOST_ORDERS.TITLE}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Visual */}
            <div className="relative">
              <Image
                src="/images/loyalty/Loyalty-5.png"
                alt="Loyalty points preview"
                width={600}
                height={1100}
                className="rounded-2xl w-3/4 h-auto mx-auto"
                sizes="(max-width: 1024px) 75vw, 420px"
              />
            </div>
            
            {/* Right side - Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.LOYALTY_PAGE.BOOST_ORDERS.SUBTITLE}
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Simple setup. Easy for customers to earn. Easy to track.</h4>
                  <p className="text-gray-600 text-sm">Set up your rewards program in minutes and let customers start earning points immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.LOYALTY_PAGE.FINAL_CTA.TITLE}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.LOYALTY_PAGE.FINAL_CTA.SUBTITLE}
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-purple-600 px-12 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl border-2 border-white"
            href={`/${locale}/demo`}
            data-cta="demo-free"
            data-analytics="loyalty_final_cta"
            aria-label="Get started today"
          >
            {t.LOYALTY_PAGE.FINAL_CTA.CTA}
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq: FAQ, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Loyalty
