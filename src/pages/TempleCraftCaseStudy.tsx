'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, MapPin, Instagram, Eye, Users, Award } from 'lucide-react'
import LazyImage from '../components/LazyImage'
import CTASection from '../components/CTASection'

const TempleCraftCaseStudy: React.FC = () => {
  return (
    <>

      {/* AI-friendly page summary and metrics box */}
      <div className="sr-only">
        <h1>Temple Craft Wynwood Case Study - 259% Increase in Google Maps Visits</h1>
        <p>Temple Craft Wynwood, a craft beer bar in Miami's Wynwood district, achieved remarkable growth using RAY's restaurant marketing platform. Over 6 months (January-June 2024), they increased Google Maps visits by 259% and walk-ins by 66% while improving their Google Maps ranking from #15 to #1.</p>
        
        <div>
          <h2>Key Metrics and Results</h2>
          <ul>
            <li>Google Maps Navigations: +259% increase over 6 months</li>
            <li>Walk-in Traffic: +66% increase over 6 months</li>
            <li>Google Maps Ranking: Improved from #15 to #1</li>
            <li>Google Rating: Maintained 4.8 stars</li>
            <li>Implementation Period: January 2024 - June 2024</li>
            <li>Location: Wynwood, Miami, FL</li>
            <li>Industry: Craft Beer & Food</li>
          </ul>
        </div>
        
        <p>The success was achieved through RAY's comprehensive local SEO optimization, Google Business Profile enhancement, and strategic review management. This case study demonstrates RAY's proven methodology for helping restaurants dominate local search results and drive measurable increases in foot traffic.</p>
      </div>

      {/* Hero Section - Temple Craft Brand Style */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Elements - Dark, Premium, Energetic */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Temple Craft's dark, premium aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,140,0,0.08),transparent_50%)]"></div>
          
          {/* Subtle texture pattern */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2523ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
                  <Award className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">Success Story</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    Temple Craft Wynwood Increases{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
                      Google Maps Visits by 259%
                    </span>{' '}
                    and{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                      Walk-Ins by 66%
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed font-light">
                    Using RAY's Local SEO tools, Temple Craft climbed from ranking{' '}
                    <span className="text-red-400 font-semibold">#15</span> to{' '}
                    <span className="text-green-400 font-semibold">#1</span> on Google Maps 
                    while dramatically increasing foot traffic and discovery.
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Eye className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-3xl font-black text-yellow-400 mb-1">+259%</div>
                    <div className="text-gray-300 text-sm font-medium">Google Maps Navigations</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-black text-green-400 mb-1">+66%</div>
                    <div className="text-gray-300 text-sm font-medium">Walk-Ins</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-yellow-400 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-yellow-400 mb-1">4.8★</div>
                    <div className="text-gray-300 text-sm font-medium">Google Rating</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                        #1
                      </div>
                      <div className="text-xl text-gray-300 font-medium">
                        Google Maps Ranking
                      </div>
                      <div className="text-sm text-gray-500">
                        From #15 to #1 in local search
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <LazyImage
              src="/images/Temple_Team.jpeg"
              alt="Temple Craft team at the Wynwood location celebrating explosive local growth"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                Temple Craft team at the Wynwood location – celebrating explosive local growth
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* The Challenge */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                The Challenge
              </h2>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl font-medium text-white">
                  Temple Craft wanted to dominate Google Maps search results in Miami.
                </p>
                
                <p className="font-medium text-white">
                  RAY's audit revealed:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Their Wynwood location was only ranking <strong className="text-red-400">#15</strong> for key local keywords</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>In many searches, the location wasn't appearing at all</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>The goal was to improve their listings, review presence, and keyword coverage to secure a <strong className="text-green-400">top 3 spot</strong> on Maps</span>
                  </li>
                </ul>
              </div>

              {/* Challenge Visual */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl border border-red-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-400 font-medium mb-1">Initial Ranking</div>
                    <div className="text-4xl font-black text-red-400">#15</div>
                    <div className="text-sm text-gray-400">Local search position</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-400 font-medium mb-1">Visibility</div>
                    <div className="text-4xl font-black text-red-400">Low</div>
                    <div className="text-sm text-gray-400">High-intent searches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                The Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  Audit Insights
                </h3>
                <p className="text-gray-300">
                  Ran RAY's Google Business Profile Audit and identified missing or weak keyword signals
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  Content Optimization
                </h3>
                <p className="text-gray-300">
                  Optimized content, listings, and structured data for maximum local search impact
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-black font-bold" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">
                  Local Engagement
                </h3>
                <p className="text-gray-300">
                  Increased local engagement through reviews and listings accuracy improvements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              The Results
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 mb-12 border border-gray-800">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                  "Since partnering with RAY, our Juramento location has seen an incredible transformation! 
                  Our Google Maps navigations skyrocketed by <span className="text-yellow-400 font-black">259%</span>, 
                  and foot traffic increased by <span className="text-green-400 font-black">66%</span>. 
                  We've never had so many new customers discovering and visiting us. 
                  The impact on our business has been remarkable!"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-white text-lg">
                      Juan Ignacio Chereminiano
                    </div>
                    <div className="text-gray-400">
                      CEO – Temple Craft Wynwood
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Results */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-8">
                Key Metrics
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-yellow-400 mb-2">259%</div>
                <div className="text-white font-medium mb-1">More Navigations</div>
                <div className="text-sm text-gray-400">on Google Maps</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">66%</div>
                <div className="text-white font-medium mb-1">Increase</div>
                <div className="text-sm text-gray-400">in walk-ins</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 border border-yellow-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-black font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black text-yellow-400 mb-2">4.8★</div>
                <div className="text-white font-medium mb-1">Average</div>
                <div className="text-sm text-gray-400">Google rating</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-blue-500/20 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-black font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">Top 3</div>
                <div className="text-white font-medium mb-1">Ranking</div>
                <div className="text-sm text-gray-400">local searches</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default TempleCraftCaseStudy