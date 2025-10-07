'use client'

import React from 'react'
import { Calendar, Users, BarChart3, Clock, Heart, CheckCircle, ArrowRight, TrendingUp, Star, UserCheck, RotateCcw, Shield } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/shared/BaseButton'
import HubSpotUnifiedModal from '../../components/HubSpotUnifiedModal'
import { useHubSpotModal } from '../../hooks/useHubSpotModal'

const benefits = [
  {
    icon: Calendar,
    title: 'Online Booking & Increased Visibility',
    description: 'Capture reservations 24/7 with an integrated booking widget that increases your online presence.',
    details: [
      'Embedded booking widget for your website',
      '24/7 reservation capture',
      'Real-time availability updates',
      'Mobile-optimized booking experience'
    ]
  },
  {
    icon: Users,
    title: 'Waitlist & Walk-in Management',
    description: 'Never turn away a guest again. Manage walk-ins and waitlists efficiently during peak hours.',
    details: [
      'Digital waitlist management',
      'SMS notifications for guests',
      'Walk-in queue optimization',
      'Estimated wait time tracking'
    ]
  },
  {
    icon: Heart,
    title: 'Guest CRM & Preferences',
    description: 'Build lasting relationships with detailed guest profiles, preferences, and visit history.',
    details: [
      'Comprehensive guest profiles',
      'Dining preferences tracking',
      'Visit history and notes',
      'Special occasion reminders'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with comprehensive analytics on bookings, no-shows, and guest flow.',
    details: [
      'Booking trend analysis',
      'No-show rate tracking',
      'Peak hour identification',
      'Revenue optimization insights'
    ]
  },
  {
    icon: Clock,
    title: 'Automated Reminders & Confirmations',
    description: 'Reduce no-shows and improve guest experience with automated communication.',
    details: [
      'Automated booking confirmations',
      'SMS and email reminders',
      'Customizable message templates',
      'Two-way communication system'
    ]
  },
  {
    icon: Star,
    title: 'Loyalty & Reward Support',
    description: 'Encourage repeat visits with integrated loyalty programs and reward systems.',
    details: [
      'Points-based loyalty system',
      'Automated reward tracking',
      'Special member pricing',
      'Birthday and anniversary perks'
    ]
  }
]

const metrics = [
  {
    icon: UserCheck,
    value: 'Contact Details',
    label: 'of each of your bookings',
    description: 'Build lasting relationships'
  },
  {
    icon: RotateCcw,
    value: '+28%',
    label: 'Repeat Bookings',
    description: 'Customers coming back'
  },
  {
    icon: Shield,
    value: '-40%',
    label: 'No-Show Rate',
    description: 'Thanks to automated reminders'
  }
]

const Bookings: React.FC = () => {
  const { 
    isModalOpen,
    currentConfig,
    closeModal
  } = useHubSpotModal()

  return (
    <>
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
                <Calendar className="w-4 h-4 mr-2" />
                Smart Reservation Management
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                Get More Direct Bookings. Connect with {' '}
                <span className="text-ray-blue">
                  Every Customer.
                </span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
               Manage reservations, walk-ins, and waitlists seamlessly—while building
               lasting relationships with your guests that drive repeat visits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  href="https://grader.rayapp.io/"
                  external={true}
                  data-cta="grader"
                  data-analytics="bookings_hero"
                  aria-label="Scan your restaurant"
                >
                  Scan your restaurant
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                  href="/demo?utm_source=bookings-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-expert"
                  data-cta="demo-expert"
                  data-analytics="bookings_hero"
                  aria-label="Talk to an expert"
                >
                  Talk to an Expert
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>+35% table utilization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                  <span>40% fewer no-shows</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              {/* Booking Interface Mockup */}
              <div className="relative max-w-md mx-auto">
                <Card className="p-6 bg-white shadow-2xl">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-ray-dark-900 mb-2">Reserve Your Table</h3>
                      <p className="text-sm text-ray-darkGray">Available tonight</p>
                    </div>
                    
                    {/* Time Slots */}
                    <div className="grid grid-cols-3 gap-2">
                      <button className="p-2 bg-gray-100 rounded-lg text-sm font-medium text-ray-darkGray">
                        6:00 PM
                      </button>
                      <button className="p-2 bg-ray-blue text-white rounded-lg text-sm font-medium">
                        7:30 PM
                      </button>
                      <button className="p-2 bg-gray-100 rounded-lg text-sm font-medium text-ray-darkGray">
                        9:00 PM
                      </button>
                    </div>
                    
                    {/* Party Size */}
                    <div>
                      <label className="block text-sm font-medium text-ray-dark-900 mb-2">Party Size</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>2 people</option>
                        <option>4 people</option>
                        <option>6 people</option>
                      </select>
                    </div>
                    
                    {/* Book Button */}
                    <button className="w-full bg-ray-green text-white py-3 rounded-lg font-semibold">
                      Book Table
                    </button>
                  </div>
                </Card>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-green">+35%</div>
                  <div className="text-xs text-ray-darkGray">Table utilization</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                  <div className="text-lg font-bold text-ray-blue">-40%</div>
                  <div className="text-xs text-ray-darkGray">No-shows</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Complete Booking Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Everything You Need to Maximize Every Table
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              From online reservations to walk-in management, our platform handles every aspect 
              of guest booking while building relationships that drive repeat business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ray-blue rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-ray-darkGray mb-4 flex-grow">
                    {benefit.description}
                  </p>
                  
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.03),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Proven Results for Restaurant Operations
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              See the measurable impact our booking platform has on restaurant efficiency and revenue.
            </p>
          </div>
          
          {/* Results Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ray-blue to-ray-green rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-black text-ray-dark-900 mb-2 group-hover:text-ray-blue transition-colors duration-300">
                    {metric.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-lg font-semibold text-ray-dark-900 mb-3 leading-tight">
                    {metric.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-ray-darkGray font-medium">
                    {metric.description}
                  </div>
                </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customer Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-ray-dark-900 font-medium leading-relaxed mb-8">
              "RAY's booking platform transformed how we manage our restaurant. We went from constantly 
              turning people away to maximizing every table. The waitlist feature alone increased our 
              revenue by 35% during peak hours, and our guests love the seamless experience."
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-ray-dark-900 text-lg">
                  Maria Rodriguez
                </div>
                <div className="text-ray-darkGray">
                  Owner, Bella Vista Restaurant
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Start Optimizing Your Reservations Today
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to maximize your table occupancy?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            See how RAY's booking platform can transform your restaurant operations. 
            Request a free demo and discover how to turn every table into revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
              href="https://grader.rayapp.io/"
              external={true}
              data-cta="grader"
              data-analytics="bookings_final_cta"
              aria-label="Scan your restaurant"
            >
              Scan your restaurant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              href="/demo?utm_source=bookings-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=bookings-final-cta"
              data-cta="demo-free"
              data-analytics="bookings_final_cta"
              aria-label="Request free demo"
            >
              Request Free Demo
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
              <span>30%+ Google Maps directions guarantee</span>
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
        onClose={closeModal}
        config={currentConfig}
      />
    </>
  )
}

export default Bookings