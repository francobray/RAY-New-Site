import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Shield, Users, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import HubSpotTalkToExpertModal from '../components/HubSpotTalkToExpertModal'
import HubSpotBookDemoModal from '../components/HubSpotBookDemoModal'
import { useHubSpotModal } from '../hooks/useHubSpotModal'

const guarantees = [
  {
    icon: TrendingUp,
    title: 'Revenue Growth Guarantee',
    description: 'We guarantee an increase of 30% or more in Google Maps profile visits in 6 months, or we\'ll return your investment.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal onboarding, training, and ongoing support to ensure your success with the platform.'
  },
  {
    icon: Shield,
    title: 'No Long-Term Contracts',
    description: 'Month-to-month billing with no setup fees. Cancel anytime with 30 days notice.'
  }
]

const faqs = [
  {
    question: 'How does billing work?',
    answer: 'All plans are billed monthly with no setup fees or long-term contracts. The Online Orders and Bundle plans include a 2.5% transaction fee on orders processed through our platform.'
  },
  {
    question: 'What\'s included in onboarding?',
    answer: 'Every plan includes personal onboarding with a dedicated specialist, complete setup of all features, staff training, and 30 days of hands-on support to ensure success.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most restaurants see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. We guarantee 30% more Google Maps visits within 6 months.'
  },
  {
    question: 'What integrations do you support?',
    answer: 'We integrate with all major platforms including OpenTable, Resy, Toast, Square, DoorDash, Uber Eats, and many more. Our team handles all technical setup.'
  },
  {
    question: 'Do you work with restaurant chains?',
    answer: 'Absolutely. We work with single locations and multi-location restaurant groups. Enterprise pricing is available for 10+ locations.'
  }
]

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { 
    isTalkToExpertModalOpen,
    closeTalkToExpertModal,
    isBookDemoModalOpen,
    openBookDemoModal,
    closeBookDemoModal
  } = useHubSpotModal()

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleGetStarted = (planId: string) => {
    // Analytics event
    console.log('pricing_get_started_click', { plan: planId })
    console.log('demo_form_open')
    openBookDemoModal()
  }

  return (
    <>
      <Helmet>
        <title>Pricing - Simple & Transparent Restaurant Marketing Plans | RAY</title>
        <meta name="description" content="Simple, transparent pricing for restaurant marketing. Choose from Walk-Ins, Online Orders, or Bundle plans. 30% growth guarantee with no long-term contracts." />
        <meta property="og:title" content="Pricing - Simple & Transparent Restaurant Marketing Plans | RAY" />
        <meta property="og:description" content="Simple, transparent pricing for restaurant marketing. Choose from Walk-Ins, Online Orders, or Bundle plans. 30% growth guarantee with no long-term contracts." />
        <meta property="og:url" content="https://rayrestaurant.com/pricing" />
        <meta name="twitter:title" content="Pricing - Simple & Transparent Restaurant Marketing Plans | RAY" />
        <meta name="twitter:description" content="Simple, transparent pricing for restaurant marketing. Choose from Walk-Ins, Online Orders, or Bundle plans. 30% growth guarantee with no long-term contracts." />
        <link rel="canonical" href="https://rayrestaurant.com/pricing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
            Simple & Transparent Pricing
          </h1>
          <p className="text-xl text-ray-dark-700 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that fits your restaurant — no hidden fees, just growth.
          </p>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Plan 1 - WalkIns */}
            <div className="relative animate-in fade-in slide-in-from-bottom duration-700">
              <Card className="text-center hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="pt-8 pb-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-ray-dark-900 mb-6">
                      WalkIns
                    </h3>
                    
                    <div className="mb-2">
                      <div className="text-4xl font-bold text-ray-dark-900">
                        $270 / mo
                      </div>
                      <div className="text-lg text-ray-dark-900 mt-1">
                        per location
                      </div>
                    </div>
                    
                    <div className="text-ray-darkGray text-sm mb-4">
                      $1,000 one-time setup
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="text-left space-y-3 mb-8 flex-grow">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">GBP audit and optimization</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Review management / leaderboard</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Sentiment analysis</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Weekly & monthly reporting</span>
                    </div>
                  </div>
                  
                  {/* Note */}
                  <div className="text-xs text-ray-darkGray mb-6 px-2">
                    Volume discounts for 10+ locations; annual contracts with discount.
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleGetStarted('walkins')}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Plan 2 - Ordering Starter (Most Popular) */}
            <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-ray-blue text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
              
              <Card className="text-center hover:shadow-2xl transition-all duration-300 h-full flex flex-col ring-2 ring-ray-blue/20 bg-gradient-to-br from-white to-blue-50/30">
                <div className="pt-8 pb-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-ray-dark-900 mb-6">
                      Ordering Starter
                    </h3>
                    
                    <div className="mb-2">
                      <div className="text-4xl font-bold text-ray-dark-900">
                        $99 / mo
                      </div>
                      <div className="text-lg text-ray-dark-900 mt-1">
                        per location + 5% per order
                      </div>
                    </div>
                    
                    <div className="text-ray-darkGray text-sm mb-4">
                      $500 one-time setup
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="text-left space-y-3 mb-8 flex-grow">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Online website (your domain) optimized to grow traffic</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Online ordering optimized to grow sales</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Customer details (first-party data capture)</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Concierge to manage your reservations</span>
                    </div>
                  </div>
                  
                  {/* Note */}
                  <div className="text-xs text-ray-darkGray mb-6 px-2">
                    Volume discounts for 10+ locations; annual contracts with discount.
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleGetStarted('ordering-starter')}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Plan 3 - Ordering Premium */}
            <div className="relative animate-in fade-in slide-in-from-bottom duration-700 delay-400">
              <Card className="text-center hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="pt-8 pb-8 flex flex-col h-full">
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-ray-dark-900 mb-6">
                      Ordering Premium
                    </h3>
                    
                    <div className="mb-2">
                      <div className="text-4xl font-bold text-ray-dark-900">
                        $350 / mo
                      </div>
                      <div className="text-lg text-ray-dark-900 mt-1">
                        per location + 3% per order
                      </div>
                    </div>
                    
                    <div className="text-ray-darkGray text-sm mb-4">
                      $750 one-time setup
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="text-left space-y-3 mb-8 flex-grow">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Everything in Ordering Starter, plus:</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Custom pages</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Loyalty management</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Gift cards</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-ray-dark-700">Mobile app</span>
                    </div>
                  </div>
                  
                  {/* Note */}
                  <div className="text-xs text-ray-darkGray mb-6 px-2">
                    Volume discounts for 10+ locations; annual contracts with discount.
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => handleGetStarted('ordering-premium')}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Guarantees & Inclusions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Every plan includes comprehensive support and guarantees to ensure your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue/10 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-ray-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                    {guarantee.title}
                  </h3>
                  <p className="text-ray-dark-700 leading-relaxed">
                    {guarantee.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ray-darkGray">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-lg"
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-lg font-semibold text-ray-dark-900 pr-4">
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
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA Band */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Content - Left */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
                Ready to boost your restaurant's revenue and stand out online?
              </h2>
              
              <p className="text-xl text-ray-darkGray mb-8 leading-relaxed">
                Join hundreds of restaurant owners who have transformed their business with RAY's powerful platform.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    console.log('pricing_get_started_click', { section: 'final_cta' })
                    console.log('demo_form_open')
                    openBookDemoModal()
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
            
            {/* Hero Image - Right */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Bustling restaurant interior with customers dining at every table in a lively atmosphere"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Success Metrics */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-ray-green">+47%</div>
                <div className="text-sm text-ray-darkGray">Walk-ins</div>
                <div className="text-xs text-ray-darkGray">average increase</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-ray-blue">4.8★</div>
                <div className="text-sm text-ray-darkGray">Rating</div>
                <div className="text-xs text-ray-darkGray">improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HubSpot Modals */}
      <HubSpotTalkToExpertModal
        isOpen={isTalkToExpertModalOpen}
        onClose={closeTalkToExpertModal}
      />
      <HubSpotBookDemoModal
        isOpen={isBookDemoModalOpen}
        onClose={() => {
          console.log('demo_form_close')
          closeBookDemoModal()
        }}
      />
    </>
  )
}

export default Pricing