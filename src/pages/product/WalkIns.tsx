import React from 'react'
import { Star, TrendingUp, Eye, Shield, ArrowRight, CheckCircle, MapPin, Users, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'
import { generatePageMeta } from '../../utils/seo'
import { generateProductSchema } from '../../utils/schema'
import { COPY } from '../../constants/copy'
import Card from '../../components/Card'
import Button from '../../components/shared/BaseButton'
import HubSpotUnifiedModal from '../../components/HubSpotUnifiedModal'
import { useHubSpotModal } from '../../hooks/useHubSpotModal'

const benefits = [
  {
    icon: MapPin,
    title: 'Dominate Local Search',
    description: 'Rank #1 when customers search "restaurants near me"'
  },
  {
    icon: Star,
    title: 'Build Trust Fast',
    description: 'AI manages reviews and builds 4.8+ star ratings'
  },
  {
    icon: Users,
    title: 'More Walk-Ins',
    description: 'Turn online searches into foot traffic daily'
  },
  {
    icon: BarChart3,
    title: 'Track Performance',
    description: 'See exactly how many customers RAY brings you'
  }
]

const customerStories = [
  {
    id: 'chef-burger',
    name: 'Chef Burger',
    owner: 'Tom Cesario',
    title: 'CEO & Founder',
    metric: '+$8,000/m',
    description: 'Monthly revenue increase',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    quote: 'RAY transformed our business completely. We went from struggling to get customers through the door to having consistent lines.',
    bgColor: 'from-blue-600 to-blue-700'
  },
  {
    id: 'dolcezza',
    name: 'Dolcezza',
    owner: 'Violeta Edelman',
    title: 'Co-Founder & CEO',
    metric: '+47%',
    description: 'Walk-ins increase',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    quote: 'RAY helped us scale our marketing efforts across all our DC locations with incredible results.',
    bgColor: 'from-green-600 to-green-700'
  },
  {
    id: 'temple-craft',
    name: 'Temple Craft Wynwood',
    owner: 'Juan Ignacio Chereminiano',
    title: 'CEO',
    metric: '+$12,000/m',
    description: 'Monthly revenue increase',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    quote: 'RAY understood our unique position in Wynwood and helped us build a marketing strategy that resonates.',
    bgColor: 'from-purple-600 to-purple-700'
  }
]

const WalkIns: React.FC = () => {
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
              
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
                When customers search for "restaurants near me," make sure they find you first. 
                Our AI-driven platform optimizes your local presence, builds trust through reviews, 
                and engages customers with personalized campaigns that drive foot traffic.
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
                  aria-label="Open restaurant grading form to get your free restaurant scan"
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
                  aria-label="Open form to schedule a consultation with our restaurant marketing experts"
                >
                  Talk to an Expert
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>30%+ navigations guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>4.8★ rating improvement</span>
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
      
      {/* Benefits & Lead Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Column - Left */}
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Proven Results
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
                  How RAY Drives More Walk-Ins
                </h2>
                <p className="text-xl text-ray-darkGray leading-relaxed">
                  Our AI-powered platform ensures customers find you, trust you, and choose you over the competition.
                </p>
              </div>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-ray-blue/10 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-5 h-5 text-ray-blue" />
                        </div>
                        <h3 className="text-lg font-semibold text-ray-dark-900">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-ray-darkGray leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Lead Form Column - Right */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    Get Your Free Restaurant Scan
                  </h3>
                  <p className="text-ray-darkGray">
                    See exactly how RAY can increase your walk-ins in just 60 seconds.
                  </p>
                </div>
                
                {/* Lead Form */}
                <form className="space-y-6">
                  <div>
                    <label htmlFor="restaurant-name" className="block text-sm font-medium text-ray-dark-900 mb-2">
                      Restaurant Name *
                    </label>
                    <input
                      type="text"
                      id="restaurant-name"
                      name="restaurant-name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200"
                      placeholder="Your Restaurant Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="owner-name" className="block text-sm font-medium text-ray-dark-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="owner-name"
                      name="owner-name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ray-dark-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200"
                      placeholder="john@restaurant.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ray-dark-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-ray-dark-900 placeholder-ray-darkGray focus:outline-none focus:ring-2 focus:ring-ray-blue focus:border-transparent transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-ray-blue hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    Get My Free Scan
                  </button>
                  
                  <div className="text-center">
                    <p className="text-xs text-ray-darkGray">
                      No commitment required. Results in 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Customer Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              Trusted by restaurants nationwide
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              See how restaurant owners across the country have transformed 
              their walk-in traffic with RAY's marketing platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
          
          <div className="text-center mt-12">
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
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ready to Grow Your Restaurant?
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to increase your walk-in traffic?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get your free restaurant scan and discover exactly how RAY can drive more 
            customers to your door. See your opportunities in just 24 hours.
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
              aria-label="Grade your restaurant - run a free 60-second audit to see growth opportunities"
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
              aria-label="Talk to an expert about growing your restaurant's walk-in traffic"
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