import React from 'react'
import { Star, TrendingUp, ArrowRight, CheckCircle, MapPin, Users, BarChart3, Search, MessageSquare, Database, Globe, Camera, ChevronDown, ChevronUp } from 'lucide-react'
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
    description: 'Rank #1 on Google Maps and local searches',
    details: [
      'Google My Business optimization',
      'Local keyword targeting and ranking'
    ]
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    description: 'Build trust with automated review management',
    details: [
      'Review collection and response automation',
      'Staff leaderboard and response support'
    ]
  },
  {
    icon: Database,
    title: 'Listings & Data Sync',
    description: 'Keep information accurate across all platforms',
    details: [
      'Hours, menus, and attributes synchronized',
      'Major platform coverage and updates'
    ]
  },
  {
    icon: BarChart3,
    title: 'Insights & Reporting',
    description: 'Track navigations, calls, and ROI clearly',
    details: [
      'Google Business Profile navigation tracking',
      'Direction requests and performance metrics'
    ]
  },
  {
    icon: Globe,
    title: 'Local Pages & Schema',
    description: 'Location pages with proper structured data',
    details: [
      'SEO-optimized location pages',
      'Structured data for better search visibility'
    ]
  },
  {
    icon: Camera,
    title: 'Photo & Q&A Management',
    description: 'Keep profiles accurate and appealing',
    details: [
      'Photo optimization and management',
      'Q&A monitoring and response guidance'
    ]
  }
]

const howItWorks = [
  {
    step: '1',
    title: 'Audit & Setup',
    description: 'We analyze your current visibility and optimize your Google Business Profile'
  },
  {
    step: '2',
    title: 'Optimize & Sync',
    description: 'Your listings get updated across all major platforms with accurate information'
  },
  {
    step: '3',
    title: 'Track & Improve',
    description: 'Monitor your increased navigations and continue optimizing for better results'
  }
]

const faqs = [
  {
    question: 'What exactly does "navigations" mean?',
    answer: 'Navigations refer to Google Business Profile direction requests and navigation taps - when customers click "Directions" to visit your restaurant.'
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most restaurants see initial improvements within 2-4 weeks, with significant results typically visible within 60-90 days.'
  },
  {
    question: 'What if I don\'t get the guaranteed 30% increase?',
    answer: 'We guarantee a 30%+ increase in Google Business Profile navigations within 6 months — or we\'ll refund your investment.'
  },
  {
    question: 'Do you work with multiple locations?',
    answer: 'Yes, our platform scales to manage multiple restaurant locations with centralized reporting and location-specific optimization.'
  },
  {
    question: 'What platforms do you sync with?',
    answer: 'We sync with Google, Yelp, Facebook, Apple Maps, and 50+ other major directories and review platforms.'
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left relative">
              <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                AI-Powered Local Marketing
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                Turn Searches Into{' '}
                <span className="text-ray-blue">
                  Walk-Ins
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
                Dominate Google Maps and local search to drive more foot traffic to your restaurant.
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
                  <span>47% avg. increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>Results in 60-90 days</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              {/* Mobile Phone Mockup with Real-Time Navigation */}
              <div className="relative max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    <div className="p-3 space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-bold text-gray-900">Google Maps</div>
                        <div className="w-4 h-4 bg-ray-blue rounded-full"></div>
                      </div>
                      
                      {/* Active Navigation View */}
                      <div className="bg-blue-50 rounded-lg p-2 mb-2 border border-blue-200">
                        <div className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-ray-blue rounded-full mr-2 animate-pulse"></div>
                          <div className="text-xs text-blue-700 font-medium">Walking to destination</div>
                        </div>
                        <div className="font-semibold text-gray-900 text-xs">Your Restaurant</div>
                        <div className="text-xs text-gray-600">2 min walk • 0.1 miles</div>
                        
                        {/* Route Progress */}
                        <div className="flex items-center mt-1">
                          <div className="w-1.5 h-1.5 bg-ray-blue rounded-full"></div>
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-ray-blue to-ray-green mx-1"></div>
                          <div className="w-2 h-2 bg-ray-green rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Nearby Restaurants */}
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500 mb-1">Nearby restaurants</div>
                        <div className="p-2 bg-green-50 rounded-lg border-l-2 border-green-500">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900 text-xs">Your Restaurant</div>
                              <div className="text-xs text-gray-600">4.8★ • 847 reviews</div>
                            </div>
                            <div className="text-green-600 font-bold text-xs">#1</div>
                          </div>
                        </div>
                        
                        <div className="p-1.5 bg-gray-100 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-700 text-xs">Competitor A</div>
                              <div className="text-xs text-gray-500">4.2★ • 234 reviews</div>
                            </div>
                            <div className="text-gray-500 text-xs">#2</div>
                          </div>
                        </div>
                        
                        <div className="p-1.5 bg-gray-100 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-700 text-xs">Competitor B</div>
                              <div className="text-xs text-gray-500">4.0★ • 156 reviews</div>
                            </div>
                            <div className="text-gray-500 text-xs">#3</div>
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
                  <div className="text-lg font-bold text-ray-green">+34%</div>
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
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ray-blue rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-ray-darkGray mb-4 flex-grow">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-full text-white text-2xl font-bold mb-6">
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
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Real Results from Real Restaurants
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              We guarantee a 30%+ increase in Google Business Profile navigations within 6 months — or we'll refund your investment.
            </p>
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
                      alt={customer.name}
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
                        <div className="mb-3">
                          <h3 className="text-xl font-bold mb-1">
                            {customer.name}
                          </h3>
                          <div className="text-2xl font-bold text-ray-green">
                            {customer.metric}
                          </div>
                          <div className="text-sm opacity-90">
                            {customer.description}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
      
      {/* Final CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ready to Get Found First?
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to increase your walk-in traffic?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get your free restaurant scan and discover exactly how RAY can drive more 
            customers to your door. See your opportunities in just 60 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
              href="https://grader.rayapp.io/"
              external={true}
              data-cta="grader"
              data-analytics="walk_ins_final_cta"
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
              data-analytics="walk_ins_final_cta"
              aria-label="Talk to an expert"
            >
              Talk to an Expert
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>30%+ navigations guarantee</span>
            </div>
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