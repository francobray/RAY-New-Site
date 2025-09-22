import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Shield, Users, TrendingUp, ChevronDown, ChevronUp, MapPin, ShoppingCart, Star, ArrowRight } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import HubSpotUnifiedModal from '../components/HubSpotUnifiedModal'
import { useHubSpotModal } from '../hooks/useHubSpotModal'

const products = [
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
      'Performance analytics and reporting',
      'Bookings integration and management'
    ],
    gradient: 'from-ray-blue to-blue-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    isPopular: true
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
      'Revenue analytics and insights',
      'Bookings integration and management'
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
    question: 'What\'s included in each plan?',
    answer: 'Both plans include comprehensive features for their respective focus areas, plus bookings integration and management capabilities. Walk-Ins focuses on local marketing and Google optimization, while Online Orders focuses on digital revenue channels.'
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

const compareFeatures = [
  {
    category: 'Core Features',
    features: [
      { name: 'Google Business Profile optimization', walkIns: true, onlineOrders: false },
      { name: 'Review management and leaderboard', walkIns: true, onlineOrders: false },
      { name: 'Local SEO optimization', walkIns: true, onlineOrders: false },
      { name: 'Direct online ordering system', walkIns: false, onlineOrders: true },
      { name: 'Delivery platform optimization', walkIns: false, onlineOrders: true },
      { name: 'Commission-free ordering', walkIns: false, onlineOrders: true },
      { name: 'Bookings integration', walkIns: true, onlineOrders: true }
    ]
  },
  {
    category: 'Analytics & Insights',
    features: [
      { name: 'Performance analytics', walkIns: true, onlineOrders: true },
      { name: 'Revenue tracking', walkIns: false, onlineOrders: true },
      { name: 'Customer insights', walkIns: true, onlineOrders: true }
    ]
  },
  {
    category: 'Support & Training',
    features: [
      { name: 'Personal onboarding', walkIns: true, onlineOrders: true },
      { name: 'Staff training', walkIns: true, onlineOrders: true },
      { name: 'Dedicated support', walkIns: true, onlineOrders: true }
    ]
  }
]

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showCompareTable, setShowCompareTable] = useState(false)
  const { 
    isModalOpen,
    currentConfig,
    openModal,
    closeModal
  } = useHubSpotModal()

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleGetStarted = (productId: string) => {
    console.log('pricing_get_started_click', { product: productId })
    console.log('demo_form_open')
    openModal('demo-free')
  }

  return (
    <>
      <Helmet>
        <title>Pricing - Choose Your Restaurant Growth Solution | RAY</title>
        <meta name="description" content="Choose the RAY product that fits your needs. Walk-Ins or Online Orders - both include bookings integration. Transparent pricing with 30% growth guarantee." />
        <meta property="og:title" content="Pricing - Choose Your Restaurant Growth Solution | RAY" />
        <meta property="og:description" content="Choose the RAY product that fits your needs. Walk-Ins or Online Orders - both include bookings integration. Transparent pricing with 30% growth guarantee." />
        <meta property="og:url" content="https://rayapp.io/pricing" />
        <meta name="twitter:title" content="Pricing - Choose Your Restaurant Growth Solution | RAY" />
        <meta name="twitter:description" content="Choose the RAY product that fits your needs. Walk-Ins or Online Orders - both include bookings integration. Transparent pricing with 30% growth guarantee." />
        <link rel="canonical" href="https://rayapp.io/pricing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "RAY Restaurant Marketing Platform",
            "description": "Restaurant marketing platform with Walk-Ins and Online Orders solutions, both including bookings integration",
            "brand": {
              "@type": "Brand",
              "name": "RAY"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Walk-Ins",
                "price": "270",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "description": "AI-powered local marketing with bookings integration included"
              },
              {
                "@type": "Offer", 
                "name": "Online Orders",
                "price": "350",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "description": "Digital revenue growth platform with bookings integration included"
              }
            ]
          })}
        </script>
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
            Two Products.{' '}
            <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
              One Powerful Platform.
            </span>
          </h1>
          
          <p className="text-xl text-ray-dark-700 max-w-4xl mx-auto leading-relaxed mb-4">
            Choose the solution that fits your needs.
          </p>
          
          <p className="text-lg text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
            Each RAY product is designed to solve specific restaurant challenges and includes bookings integration. 
            Purchase individually based on your needs, or combine them for maximum revenue growth.
          </p>
        </div>
      </section>
      
      {/* Individual Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div key={product.id} className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${index * 200}`}>
                  <div className="group relative h-full">
                    {/* Popular badge */}
                    {product.isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-ray-blue to-ray-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    {/* Subtle gradient border effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className={`relative bg-gradient-to-br ${product.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col ${product.isPopular ? 'mt-4' : ''}`}>
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
                      
                      {/* Features */}
                      <div className="mb-8 flex-grow">
                        <h4 className="text-lg font-semibold text-ray-dark-900 mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-ray-green mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-ray-dark-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-auto">
                        <Button 
                          variant="primary"
                          size="lg"
                          className="w-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                          onClick={() => handleGetStarted(product.id)}
                          data-cta="demo-free"
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
      
      {/* Compare Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Compare Plans
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              See what's included in each plan to choose the best fit for your restaurant.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setShowCompareTable(!showCompareTable)}
              className="w-full flex items-center justify-center px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8"
            >
              <span className="text-lg font-semibold text-ray-dark-900 mr-2">
                {showCompareTable ? 'Hide' : 'Show'} Detailed Comparison
              </span>
              {showCompareTable ? (
                <ChevronUp className="w-5 h-5 text-ray-blue" />
              ) : (
                <ChevronDown className="w-5 h-5 text-ray-blue" />
              )}
            </button>
            
            {showCompareTable && (
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-ray-dark-900">Features</th>
                        <th className="text-center py-4 px-6 font-semibold text-ray-dark-900">Walk-Ins</th>
                        <th className="text-center py-4 px-6 font-semibold text-ray-dark-900">Online Orders</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareFeatures.map((category, categoryIndex) => (
                        <React.Fragment key={categoryIndex}>
                          <tr className="bg-gray-50">
                            <td colSpan={3} className="py-3 px-6 font-semibold text-ray-dark-900 text-sm uppercase tracking-wider">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="border-b border-gray-100">
                              <td className="py-3 px-6 text-ray-dark-700">{feature.name}</td>
                              <td className="py-3 px-6 text-center">
                                {feature.walkIns ? (
                                  <Check className="w-5 h-5 text-ray-green mx-auto" />
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="py-3 px-6 text-center">
                                {feature.onlineOrders ? (
                                  <Check className="w-5 h-5 text-ray-green mx-auto" />
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
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
            Choose the product that fits your needs, both include bookings integration for maximum growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                console.log('pricing_get_started_click', { section: 'final_cta' })
                openModal('demo-free')
              }}
              data-cta="demo-free"
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
      <HubSpotUnifiedModal
        isOpen={isModalOpen}
        onClose={() => {
          console.log('demo_form_close')
          closeModal()
        }}
        config={currentConfig}
      />
    </>
  )
}

export default Pricing