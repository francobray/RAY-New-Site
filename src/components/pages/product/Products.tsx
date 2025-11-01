'use client'

import React from 'react'
import { ArrowRight, CircleCheck as CheckCircle, Star, TrendingUp, Users, Calendar, MapPin, ShoppingCart, Zap, Shield, Clock } from 'lucide-react'
import Button from '../../shared/BaseButton'
import Card from '../../shared/Card'
import { type Locale } from '@/lib/i18n'

interface ProductsProps {
  locale: Locale
}

const products = [
  {
    id: 'online-orders',
    icon: ShoppingCart,
    name: 'Online Orders',
    tagline: 'Grow revenue from digital channels',
    description: 'Increase direct orders, reduce third-party commissions, and maximize digital revenue with integrated ordering systems and analytics.',
    keyBenefit: '+27% online orders',
    features: [
      'Direct online ordering system',
      'Commission-free ordering platform',
      'Delivery platform optimization',
      'Upselling & loyalty programs',
      'Revenue analytics & insights'
    ],
    href: '/product/online-orders',
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
    isPopular: false
  },
  {
    id: 'bookings',
    icon: Calendar,
    name: 'Bookings',
    tagline: 'Maximize table occupancy with smart reservation management',
    description: 'Handle reservations, walk-ins, and waitlists seamlessly while building lasting relationships with your guests that drive repeat visits.',
    keyBenefit: '+35% table utilization',
    features: [
      'Online booking & 24/7 reservations',
      'Waitlist & walk-in management',
      'Guest CRM & preferences tracking',
      'Automated reminders & confirmations',
      'Analytics & insights dashboard'
    ],
    href: '/product/direct-bookings',
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    isPopular: false
  },
  {
    id: 'walk-ins',
    icon: MapPin,
    name: 'Walk-Ins',
    tagline: 'Turn searches into walk-ins with AI-powered local marketing',
    description: 'Dominate Google Maps and local search to drive more hungry customers to your restaurant door with proven local SEO strategies.',
    keyBenefit: '+47% avg. increase',
    features: [
      'Google Business Profile optimization',
      'Review management & staff leaderboard',
      'Local SEO & visibility optimization',
      'Listings sync across 50+ platforms',
      'Performance analytics & reporting'
    ],
    href: '/product/walk-ins',
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
    isPopular: true
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Average 30%+ increase in Google Business Profile Google Maps directions within 6 months',
    stat: '30%+'
  },
  {
    icon: Users,
    title: 'Trusted by 1,000+',
    description: 'Restaurants nationwide trust RAY to grow their business',
    stat: '1,000+'
  },
  {
    icon: Shield,
    title: 'Money-Back Guarantee',
    description: 'We guarantee results or refund your investment',
    stat: '100%'
  },
  {
    icon: Clock,
    title: 'Fast Implementation',
    description: 'See results in 60-90 days with our proven methodology',
    stat: '60-90'
  }
]

const testimonials = [
  {
    name: 'Juan Ignacio Chereminiano',
    title: 'CEO, Temple Craft Wynwood',
    quote: 'Our Google Maps directions skyrocketed by 259%, and foot traffic increased by 66%. The impact on our business has been remarkable!',
    metric: '+259%',
    metricLabel: 'Google Maps visits',
    image: '/images/success-stories/Temple_Team.jpeg'
  },
  {
    name: 'Franco Yannelli',
    title: 'CMO, Chimba Miami',
    quote: 'Our Google Maps directions increased by 215%, and foot traffic grew by 46%. We\'ve never had so many new customers discovering us.',
    metric: '+215%',
    metricLabel: 'Google Maps visits',
    image: '/images/success-stories/Chimba_Miami_Celebrating.jpeg'
  }
]

const Products: React.FC<ProductsProps> = ({ locale }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,121,229,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(111,191,115,0.08),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <Zap className="w-4 h-4 mr-2 text-ray-blue" />
              <span className="text-sm font-medium text-ray-dark-900">Complete Restaurant Growth Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] mb-8">
              Three Products.{' '}
              <span className="bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue bg-clip-text text-transparent">
                One Powerful Platform.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-ray-dark-700 max-w-4xl mx-auto leading-relaxed mb-12">
              RAY offers three integrated solutions designed to grow restaurant revenue both offline and online. 
              Choose your focus or combine all for maximum impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                variant="primary" 
                size="lg"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
                href="https://grader.rayapp.io/"
                external={true}
                data-cta="grader"
                data-analytics="products_hero"
                aria-label="Scan your restaurant"
              >
                Scan your restaurant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="shadow-xl hover:shadow-2xl transition-all duration-300"
                href={`/${locale}/demo?utm_source=products-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-expert`}
                data-cta="demo-expert"
                data-analytics="products_hero"
                aria-label="Talk to an expert"
              >
                Talk to an Expert
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-ray-dark-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                <span className="font-medium">30%+ Google Maps directions guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                <span className="font-medium">1,000+ restaurants trust RAY</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-ray-green mr-2" />
                <span className="font-medium">Results in 60-90 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Choose Your Growth Strategy
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Each product is designed to solve specific restaurant challenges. 
              Start with one or combine all three for comprehensive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div key={product.id} className={`relative group animate-in fade-in slide-in-from-bottom duration-700 delay-${index * 200}`}>
                  {/* Popular Badge */}
                  {product.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ray-blue to-ray-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className={`relative bg-gradient-to-br ${product.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col ${product.isPopular ? 'mt-4' : ''}`}>
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-8 flex-grow">
                      <h3 className="text-2xl font-bold text-ray-dark-900 mb-3">
                        {product.name}
                      </h3>
                      
                      <p className="text-lg font-medium text-ray-blue mb-4">
                        {product.tagline}
                      </p>
                      
                      <p className="text-ray-darkGray mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Benefit */}
                      <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
                        <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                        <span className="text-sm font-medium text-ray-dark-900">{product.keyBenefit}</span>
                      </div>

                      {/* Features List */}
                      <ul className="text-left space-y-3 mb-8">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-ray-green mr-3 flex-shrink-0 mt-1" />
                            <span className="text-sm text-ray-dark-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button 
                        variant="primary"
                        size="lg"
                        href={product.href}
                        className="w-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                        data-analytics="products_grid"
                        aria-label={`Learn more about ${product.name}`}
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Why Restaurant Owners Choose RAY
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful restaurants that trust RAY to grow their business with proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-ray-blue to-ray-green rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-ray-green mb-2 group-hover:text-ray-blue transition-colors duration-300">
                    {benefit.stat}
                  </div>
                  
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-ray-darkGray leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Real Results from Real Restaurants
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              See how restaurant owners have transformed their business with RAY's platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-ray-dark-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-ray-dark-900">
                      {testimonial.name}
                    </div>
                    <div className="text-ray-darkGray text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-ray-green">
                      {testimonial.metric}
                    </div>
                    <div className="text-sm text-ray-darkGray">
                      {testimonial.metricLabel}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="secondary"
              size="lg"
              href={`/${locale}/case-studies`}
              className="shadow-lg hover:shadow-xl transition-all duration-300 group"
              data-analytics="products_testimonials"
              aria-label="View all success stories"
            >
              View All Success Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Ready to Transform Your Restaurant?
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Start Growing Your Restaurant Revenue Today
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 1,000+ restaurants that trust RAY to drive more walk-ins, bookings, and orders. 
            Get your free restaurant scan and see how we can help you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
              href="https://grader.rayapp.io/"
              external={true}
              data-cta="grader"
              data-analytics="products_final_cta"
              aria-label="Scan your restaurant"
            >
              Scan your restaurant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300"
              href={`/${locale}/demo?utm_source=products-page&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=final-expert`}
              data-cta="demo-expert"
              data-analytics="products_final_cta"
              aria-label="Talk to an expert"
            >
              Talk to an Expert
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-ray-dark-600">
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
    </div>
  )
}

export default Products