import React, { useState } from 'react'
import { Star, TrendingUp, ArrowRight, CheckCircle, MapPin, BarChart3, Search, Database, Globe, Camera, ChevronDown, ChevronUp, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'
import { generatePageMeta } from '../../utils/seo'
import { generateProductSchema } from '../../utils/schema'
import { COPY } from '../../constants/copy'
import Card from '../../components/Card'
import Button from '../../components/shared/BaseButton'
import HubSpotUnifiedModal from '../../components/HubSpotUnifiedModal'
import { useHubSpotModal } from '../../hooks/useHubSpotModal'

const features = [
  {
    icon: Search,
    title: 'Get Found First',
    description: 'Rank #1 on Google Maps when hungry customers search nearby',
    details: [
      'Dominate "restaurants near me" searches',
      'Appear in AI recommendations and voice searches'
    ]
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    description: 'Build trust with automated review collection and response support',
    details: [
      'Staff leaderboard motivates review collection',
      'Professional response templates and guidance'
    ]
  },
  {
    icon: Database,
    title: 'Listings & Data Sync',
    description: 'Keep hours, menus, and info accurate across all platforms automatically',
    details: [
      'Sync to Google, Yelp, Facebook, Apple Maps + 50 more',
      'One update pushes everywhere instantly'
    ]
  },
  {
    icon: Globe,
    title: 'Local Pages & Schema',
    description: 'Location pages optimized for search engines and customers',
    details: [
      'SEO-optimized pages for each location',
      'Structured data helps search engines understand your business'
    ]
  },
  {
    icon: BarChart3,
    title: 'Insights & Reporting',
    description: 'Track navigations, calls, and ROI with clear dashboards',
    details: [
      'Monitor Google Business Profile direction requests',
      'See which efforts drive the most foot traffic'
    ]
  },
  {
    icon: Camera,
    title: 'Photos & Q&A Management',
    description: 'Keep your online presence fresh and appealing',
    details: [
      'Photo optimization and management guidance',
      'Q&A monitoring and response recommendations'
    ]
  }
]

const howItWorks = [
  {
    step: '1',
    title: 'Audit & Setup',
    description: 'We analyze your current visibility and optimize your Google Business Profile for maximum impact'
  },
  {
    step: '2',
    title: 'Optimize & Sync',
    description: 'Your listings get updated across all major platforms with accurate, search-optimized information'
  },
  {
    step: '3',
    title: 'Track & Improve',
    description: 'Monitor your increased navigations and continue optimizing based on real performance data'
  }
]

const faqs = [
  {
    question: 'What exactly are "navigations"?',
    answer: 'Navigations are Google Business Profile direction requests and navigation taps - when customers click "Directions" to visit your restaurant. This is the strongest signal of intent to visit.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most restaurants see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days. Our guarantee covers 6 months to ensure substantial growth.'
  },
  {
    question: 'What if I don\'t get the guaranteed 30% increase?',
    answer: 'We guarantee a 30%+ increase in Google Business Profile navigations within 6 months — or we\'ll refund your investment. We stand behind our results.'
  },
  {
    question: 'Do you work with multiple restaurant locations?',
    answer: 'Yes, our platform scales to manage multiple restaurant locations with centralized reporting and location-specific optimization strategies.'
  },
  {
    question: 'Which platforms do you sync with?',
    answer: 'We sync with Google, Yelp, Facebook, Apple Maps, and 50+ other major directories and review platforms to ensure consistent information everywhere.'
  }
]

const customerStories = [
  {
    id: 'temple-craft-wynwood',
    name: 'Temple Craft Wynwood',
    owner: 'Juan Ignacio Chereminiano',
    title: 'CEO',
    metric: '+259%',
    description: 'Google Maps navigations',
    image: '/images/Temple_Team.jpeg',
    quote: 'Our Google Maps navigations skyrocketed by 259%, and foot traffic increased by 66%.',
    bgColor: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'chimba-miami',
    name: 'Chimba Miami',
    owner: 'Franco Yannelli',
    title: 'CMO',
    metric: '+215%',
    description: 'Google Maps navigations',
    image: '/images/Chimba_Miami.jpeg',
    quote: 'Our Google Maps navigations skyrocketed by 215%, and foot traffic increased by 46%.',
    bgColor: 'from-pink-600 to-red-600'
  }
]

const WalkIns: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { 
    isModalOpen,
    currentConfig,
    openModal,
    closeModal
  } = useHubSpotModal()

  const pageMeta = generatePageMeta({
    title: 'Walk-Ins - Turn Searches Into Restaurant Visits',
    description: 'Turn searches into walk-ins with AI-powered local marketing. Dominate Google Maps, build trust through reviews, and engage customers with personalized campaigns that drive foot traffic.',
    path: '/product/walk-ins'
  })

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const productSchema = generateProductSchema({
    name: COPY.PRODUCTS.WALK_INS.NAME,
    description: COPY.PRODUCTS.WALK_INS.DESCRIPTION,
    url: `${pageMeta.canonical}`
  })

  return (
    <>
      <SEOHead
        {...pageMeta}
        schema={productSchema}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                <TrendingUp className="w-4 h-4 mr-2 text-ray-blue" />
                <span className="text-sm font-medium text-ray-dark-900">AI-Powered Local Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-6">
                Turn Searches Into{' '}
                <span className="bg-gradient-to-r from-ray-blue to-ray-green bg-clip-text text-transparent">
                  Walk-Ins
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed max-w-xl">
                Dominate Google Maps and local search to drive more hungry customers to your restaurant door.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href="https://grader.rayapp.io/"
                  external={true}
                  data-cta="grader"
                  data-analytics="walk_ins_hero"
                  aria-label="Grade your restaurant"
                >
                  Grade Your Restaurant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => openModal('demo-expert')}
                  data-cta="demo-expert"
                  data-analytics="walk_ins_hero"
                  aria-label="Talk to an expert"
                >
                  Talk to an Expert
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">47% avg. increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span className="font-medium">Results in 60-90 days</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual - Mobile Phone with Google Maps */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="p-4 space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-gray-900">Google Maps</div>
                        <div className="w-4 h-4 bg-ray-blue rounded-full"></div>
                      </div>
                      
                      {/* Search Results */}
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 mb-2">Restaurants near you</div>
                        
                        {/* #1 Result - Your Restaurant */}
                        <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">Your Restaurant</div>
                              <div className="text-xs text-gray-600 flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                4.8 • 847 reviews • 0.2 mi
                              </div>
                              <div className="text-xs text-green-600 font-medium mt-1">Open now</div>
                            </div>
                            <div className="text-green-600 font-bold text-lg">#1</div>
                          </div>
                        </div>
                        
                        {/* Competitors */}
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-700 text-sm">Competitor A</div>
                              <div className="text-xs text-gray-500">4.2★ • 234 reviews • 0.4 mi</div>
                            </div>
                            <div className="text-gray-500 text-sm">#2</div>
                          </div>
                        </div>
                        
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-700 text-sm">Competitor B</div>
                              <div className="text-xs text-gray-500">4.0★ • 156 reviews • 0.6 mi</div>
                            </div>
                            <div className="text-gray-500 text-sm">#3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Details */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full mt-2"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">+47%</div>
                  <div className="text-xs text-ray-darkGray">More visibility</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">4.8★</div>
                  <div className="text-xs text-ray-darkGray">Average rating</div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-[2.5rem] -z-10 blur-xl scale-110"></div>
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
              <MapPin className="w-4 h-4 mr-2" />
              Complete Local Marketing Platform
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Everything You Need to Get Found First
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform handles every aspect of local marketing to drive more walk-ins to your restaurant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-ray-blue rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-ray-darkGray mb-4 flex-grow leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                        <div className="w-1.5 h-1.5 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Get started in three simple steps and see results within 60-90 days.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-ray-blue to-ray-green opacity-30 transform translate-x-4"></div>
                )}
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ray-blue to-ray-green rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-ray-darkGray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onClick={() => openModal('demo-expert')}
              data-cta="demo-expert"
              data-analytics="walk_ins_how_it_works"
              aria-label="Talk to an expert"
            >
              Talk to an Expert
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-green/10 rounded-full text-ray-green text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Proven Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Real Results from Real Restaurants
            </h2>
            <div className="bg-gradient-to-r from-ray-promise rounded-2xl p-8 max-w-4xl mx-auto mb-12">
              <p className="text-xl text-ray-dark-900 font-semibold leading-relaxed">
                We guarantee a 30%+ increase in Google Business Profile navigations within 6 months — or we'll refund your investment.
              </p>
              <p className="text-sm text-ray-darkGray mt-2">
                ('Navigations' refers to Google Business Profile direction requests/navigation taps.)
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {customerStories.map((customer) => (
              <Link
                key={customer.id}
                to={`/case-studies/${customer.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {/* Background Image */}
                  <div className="relative h-80">
                    <img
                      src={customer.image}
                      alt={`${customer.name} team celebrating success`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${customer.bgColor} opacity-80`}></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      {/* Top Section - Owner Info */}
                      <div>
                        <div className="text-sm font-medium opacity-90 mb-1">
                          {customer.owner}
                        </div>
                        <div className="text-xs opacity-75 leading-tight">
                          {customer.title}
                        </div>
                      </div>
                      
                      {/* Bottom Section - Restaurant & Metrics */}
                      <div>
                        <div className="mb-4">
                          <h3 className="text-xl font-bold mb-2">
                            {customer.name}
                          </h3>
                          <div className="text-3xl font-bold text-yellow-300 mb-1">
                            {customer.metric}
                          </div>
                          <div className="text-sm opacity-90">
                            {customer.description}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm opacity-90">
                            "{customer.quote.slice(0, 50)}..."
                          </div>
                          <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                            Read Story
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-ray-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 group"
            >
              View All Success Stories
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Lead Capture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Column */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
                Ready to dominate local search?
              </h2>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
                Get your free restaurant scan and discover exactly how RAY can drive more 
                customers to your door. See your opportunities in just 60 seconds.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3" />
                  <span className="text-ray-dark-700">Free 60-second restaurant audit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3" />
                  <span className="text-ray-dark-700">Personalized improvement recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3" />
                  <span className="text-ray-dark-700">See your local search ranking opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-ray-green mr-3" />
                  <span className="text-ray-dark-700">30%+ navigations guarantee</span>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                  Get Your Free Restaurant Scan
                </h3>
                <p className="text-ray-darkGray">
                  Discover your local search opportunities in 60 seconds
                </p>
              </div>
              
              <Button 
                variant="primary" 
                size="lg"
                className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 group mb-4"
                href="https://grader.rayapp.io/"
                external={true}
                data-cta="grader"
                data-analytics="walk_ins_lead_capture"
                aria-label="Grade your restaurant"
              >
                Grade Your Restaurant Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="text-center">
                <button
                  onClick={() => openModal('demo-expert')}
                  className="text-ray-blue hover:text-blue-600 font-medium transition-colors duration-200"
                  data-cta="demo-expert"
                  data-analytics="walk_ins_lead_capture"
                >
                  Or talk to an expert instead
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                    <span>No commitment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
                    <span>Results in 60-90 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ray-darkGray">
              Everything you need to know about driving more walk-ins with RAY.
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
      
      {/* HubSpot Modals */}
      <HubSpotUnifiedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        config={currentConfig}
      />
    </>
  )
}

export default WalkIns