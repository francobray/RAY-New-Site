import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Shield, Users, TrendingUp, ChevronDown, ChevronUp, MapPin, Calendar, ShoppingCart, Star, ArrowRight } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import HubSpotTalkToExpertModal from '../components/HubSpotTalkToExpertModal'
import HubSpotBookDemoModal from '../components/HubSpotBookDemoModal'
import { useHubSpotModal } from '../hooks/useHubSpotModal'

const products = [
  {
    id: 'bookings',
    icon: Calendar,
    name: 'Bookings',
    description: 'Maximize table occupancy with smart reservation management, waitlists, and guest relationship tools.',
    keyBenefit: 'Increase table utilization by 35%',
    price: '$100',
    setupFee: '$500',
    features: [
      'Reservation management system',
      'Integrated booking system',
      'Automated confirmation and reminders',
      'No-show reduction strategies',
      'Customer data and analytics'
    ],
    gradient: 'from-ray-green to-green-600',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    id: 'walk-ins',
    icon: MapPin,
    name: 'Walk-Ins',
    description: 'Turn searches into walk-ins with AI-powered local marketing that dominates Google Maps and builds trust through reviews.',
    keyBenefit: 'Average 47% increase in foot traffic',
    price: '$270',
    setupFee: '$1,000',
    features: [
      'Google Business Profile optimization',
      'Review management and staff leaderboard',
      'AI-powered sentiment analysis',
      'Local SEO and visibility optimization',
      'Performance analytics and reporting'
    ],
    gradient: 'from-ray-blue to-blue-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'online-orders',
    icon: ShoppingCart,
    name: 'Online Orders',
    description: 'Grow revenue from digital channels with integrated ordering systems and comprehensive analytics.',
    keyBenefit: '27% growth in online orders',
    price: '$350',
    setupFee: '$750',
    transactionFee: '+ 3% per order',
    features: [
      'Direct online ordering system',
      'Commission-free ordering platform',
      'Delivery platform optimization',
      'Upselling and loyalty programs',
      'Revenue analytics and insights'
    ],
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-pink-50'
  }
]

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
    question: 'Can I purchase just one product?',
    answer: 'Yes! Each product can be purchased individually based on your restaurant\'s specific needs. You can always add more products later.'
  },
  {
    question: 'What\'s included in the All-in-One Platform?',
    answer: 'The bundle includes all three products (Bookings, Walk-Ins, and Online Orders) with integrated analytics, unified reporting, and priority support.'
  },
  {
    question: 'How does billing work?',
    answer: 'All products are billed monthly with no long-term contracts. Setup fees are one-time charges. The Online Orders product includes a 3% transaction fee on processed orders.'
  },
  {
    question: 'What\'s included in onboarding?',
    answer: 'Every product includes personal onboarding with a dedicated specialist, complete setup of all features, staff training, and 30 days of hands-on support.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most restaurants see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. We guarantee 30% more Google Maps visits within 6 months.'
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

  const handleGetStarted = (productId: string) => {
    console.log('pricing_get_started_click', { product: productId })
    console.log('demo_form_open')
    openBookDemoModal()
  }

  const handleGetBundle = () => {
    console.log('pricing_bundle_click')
    console.log('demo_form_open')
    openBookDemoModal()
  }

  return (
    <>
      <Helmet>
        <title>Pricing - Choose Your Restaurant Growth Solution | RAY</title>
        <meta name="description" content="Choose the RAY product that fits your needs. Bookings, Walk-Ins, Online Orders, or get the complete platform. Transparent pricing with 30% growth guarantee." />
        <meta property="og:title" content="Pricing - Choose Your Restaurant Growth Solution | RAY" />
        <meta property="og:description" content="Choose the RAY product that fits your needs. Bookings, Walk-Ins, Online Orders, or get the complete platform. Transparent pricing with 30% growth guarantee." />
        <meta property="og:url" content="https://rayrestaurant.com/pricing" />
        <meta name="twitter:title" content="Pricing - Choose Your Restaurant Growth Solution | RAY" />
        <meta name="twitter:description" content="Choose the RAY product that fits your needs. Bookings, Walk-Ins, Online Orders, or get the complete platform. Transparent pricing with 30% growth guarantee." />
        <link rel="canonical" href="https://rayrestaurant.com/pricing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,121,229,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven Revenue Growth Platform
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-ray-dark-900 mb-6 leading-tight">
            Three Products.{' '}
            <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
              One Powerful Platform.
            </span>
          </h1>
          
          <p className="text-xl text-ray-dark-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Choose one, or unlock the full platform.
          </p>
          
          <p className="text-lg text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
            Each RAY product is designed to solve specific restaurant challenges. 
            Purchase individually based on your needs, or combine them for maximum revenue growth.
          </p>
        </div>
      </section>
      
      {/* Individual Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div key={product.id} className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${index * 200}`}>
                  <div className="group relative h-full">
                    {/* Subtle gradient border effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`relative bg-gradient-to-br ${product.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col`}>
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-ray-dark-900 mb-3">
                          {product.name}
                        </h3>
                        
                        <p className="text-ray-darkGray mb-4 leading-relaxed">
                          {product.description}
                        </p>
                        
                        {/* Key Benefit */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                          <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                          <span className="text-sm font-medium text-ray-dark-900">{product.keyBenefit}</span>
                        </div>
                        
                        {/* Pricing */}
                        <div className="mb-6">
                          <div className="text-4xl font-bold text-ray-dark-900 mb-2">
                            {product.price}
                            <span className="text-lg font-normal text-ray-darkGray">/month</span>
                          </div>
                          <div className="text-sm text-ray-darkGray">
                            {product.setupFee} setup fee
                            {product.transactionFee && (
                              <div className="mt-1">{product.transactionFee}</div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-auto">
                        <Button 
                          variant="primary"
                          size="lg"
                          className="w-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                          onClick={() => handleGetStarted(product.id)}
                        >
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* All-in-One Platform Bundle */}
      <section className="py-20 bg-gradient-to-br from-ray-blue/5 via-white to-ray-green/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Bundle Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-ray-blue/10 to-ray-green/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 fill-current text-yellow-500" />
                Most Popular Choice
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
                All-in-One Platform
              </h2>
              <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
                Get all three products working together for maximum revenue growth and operational efficiency.
              </p>
            </div>
            
            {/* Bundle Card */}
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue rounded-3xl opacity-20"></div>
              
              <Card className="relative p-8 md:p-12 bg-white shadow-2xl border-0 overflow-hidden">
                {/* Popular badge */}
                <div className="absolute top-0 right-8 bg-gradient-to-r from-ray-blue to-ray-green text-white px-6 py-2 rounded-b-xl text-sm font-bold shadow-lg">
                  BEST VALUE
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Bundle info */}
                  <div>
                    <div className="mb-8">
                      <div className="text-5xl font-bold text-ray-dark-900 mb-2">
                        $650
                        <span className="text-xl font-normal text-ray-darkGray">/month</span>
                      </div>
                      <div className="text-lg text-ray-darkGray mb-2">
                        $1,500 setup fee
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-ray-green/10 rounded-full">
                        <span className="text-sm text-ray-green font-bold">Save $70/month vs. individual products</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-ray-green to-green-600 rounded-lg flex items-center justify-center mr-3">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-ray-dark-900">Bookings Platform</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-ray-blue to-blue-600 rounded-lg flex items-center justify-center mr-3">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-ray-dark-900">Walk-Ins Platform</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <ShoppingCart className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-ray-dark-900">Online Orders Platform</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full bg-gradient-to-r from-ray-blue to-ray-green hover:from-blue-600 hover:to-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      onClick={handleGetBundle}
                    >
                      Get the Full Platform
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  {/* Right side - Bundle benefits */}
                  <div>
                    <h4 className="text-xl font-bold text-ray-dark-900 mb-6">
                      Bundle Benefits
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-ray-dark-700">Unified dashboard and reporting across all products</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-ray-dark-700">Cross-platform customer insights and analytics</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-ray-dark-700">Priority support and dedicated onboarding</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-ray-dark-700">Advanced automation and AI features</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-ray-dark-700">Integrated customer journey optimization</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-ray-dark-700 font-medium">Save $840/year vs. individual products</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guarantees & Inclusions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Every product includes comprehensive support and guarantees to ensure your success.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ray-darkGray">
              Everything you need to know about our products and pricing.
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
      
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to grow your restaurant revenue?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose the product that fits your needs, or get the complete platform for maximum growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                console.log('pricing_get_started_click', { section: 'final_cta' })
                openBookDemoModal()
              }}
            >
              Get Started Today
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>30% growth guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>Results in 60-90 days</span>
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