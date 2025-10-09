'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronUp, Play, Users, Gift, Smartphone, CheckCircle } from 'lucide-react'
import Button from '../../shared/BaseButton'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/constants/copy'
import Image from 'next/image'

interface LoyaltyProps {
  locale: Locale
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
                <span className="text-sm font-medium text-ray-dark-900">{locale === 'es' ? 'Programa de Lealtad' : 'Loyalty Program'}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
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
                  aria-label="Get a free demo"
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
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Restaurant owners discussing loyalty program"
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-purple-600 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-900">See why John and Sam from Metro Pizza got more business from their rewards program</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t.LOYALTY_PAGE.FEATURES.TITLE}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Phone mockup */}
            <div className="relative">
              <div className="bg-black rounded-[2.5rem] p-2 mx-auto w-80">
                <div className="bg-white rounded-[2rem] h-[600px] overflow-hidden">
                  <div className="p-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Tomato Pasta</h3>
                      <p className="text-gray-600">Chicken Parmigiana</p>
                      <p className="text-gray-600">Creamy mushroom sauce and fresh basil</p>
                      <p className="text-gray-600">with a side of garlic bread</p>
                      <div className="text-3xl font-bold text-gray-900 mt-4">$13.00</div>
                      <div className="flex items-center justify-center mt-2">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">400 Points</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Features */}
            <div className="space-y-8">
              {features.map((feature, index) => {
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
              Boost your repeat orders
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Phone mockup with points */}
            <div className="relative">
              <div className="bg-black rounded-[2.5rem] p-2 mx-auto w-80">
                <div className="bg-white rounded-[2rem] h-[600px] overflow-hidden p-6">
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-blue-600 mb-2">400</div>
                    <div className="text-xl font-semibold text-gray-900 mb-2">Points</div>
                    <p className="text-gray-600 text-sm mb-6">You're 100 points away from your next reward!</p>
                    
                    <div className="bg-gray-200 rounded-full h-2 mb-4">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold mb-6">
                      Redeem
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center text-sm text-gray-600">
                      Rewards program
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Encourage casual customers to come back.
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

      {/* Quick Signup Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Dark signup mockup */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Quick rewards signup gets more loyal fans.</h3>
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold">
                  You're now signed up for Ottavio's rewards program!
                </div>
              </div>
            </div>
            
            {/* Right side - Food images with points */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pasta dish"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-32 object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  450
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Pizza slice"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-32 object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  120
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Salad"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-32 object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  100
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dessert"
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-32 object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  80
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Restaurant owner testimonial"
                  width={400}
                  height={300}
                  className="rounded-xl w-full h-64 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-purple-600 ml-1" />
                  </div>
                </button>
              </div>
              
              {/* Right side - Testimonial */}
              <div>
                <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  "The platform has been like a superpower for restaurants that increases sales and drives new customers consistently."
                </blockquote>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl font-bold text-green-600">+$4,500,000</div>
                  <div className="text-3xl font-bold text-purple-600">+4</div>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">in sales</span>
                  <span className="mx-4">•</span>
                  <span className="font-medium">locations</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-semibold text-gray-900">Rahul Bhalla</div>
                    <div className="text-sm text-gray-600">Owner of Satyam Indian Kitchen</div>
                  </div>
                </div>
                
                <button className="mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  See Rahul's story →
                </button>
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
            {faqs.map((faq, index) => (
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
