import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Star, MapPin, Instagram, Eye, Users, Award } from 'lucide-react'
import LazyImage from '../components/LazyImage'
import CTASection from '../components/CTASection'

const ChimbaCaseStudy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Chimba Miami Success Story - 215% Google Maps Growth | RAY Case Study</title>
        <meta name="description" content="See how Chimba Miami increased Google Maps visits by 215% and walk-ins by 46% with RAY's local SEO and reputation management platform." />
        <meta property="og:title" content="Chimba Miami Success Story - 215% Google Maps Growth | RAY Case Study" />
        <meta property="og:description" content="See how Chimba Miami increased Google Maps visits by 215% and walk-ins by 46% with RAY's local SEO and reputation management platform." />
        <meta property="og:url" content="https://rayapp.io/case-studies/chimba-miami" />
        <meta name="twitter:title" content="Chimba Miami Success Story - 215% Google Maps Growth | RAY Case Study" />
        <meta name="twitter:description" content="See how Chimba Miami increased Google Maps visits by 215% and walk-ins by 46% with RAY's local SEO and reputation management platform." />
        <link rel="canonical" href="https://rayapp.io/case-studies/chimba-miami" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": "Chimba Miami Success Story",
            "description": "How Chimba Miami increased Google Maps visits by 215% and walk-ins by 46% with RAY's marketing platform",
            "about": {
              "@type": "Organization",
              "name": "Chimba Miami",
              "location": "Miami, FL"
            },
            "result": [
              {
                "@type": "QuantitativeValue",
                "name": "Google Maps visits increase",
                "value": "215",
                "unitText": "percent"
              },
              {
                "@type": "QuantitativeValue", 
                "name": "Walk-ins increase",
                "value": "46",
                "unitText": "percent"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section - Chimba Brand Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-pink-600 via-red-600 to-purple-700 text-white overflow-hidden">
        {/* Background Elements - Fun, Bold, Energetic */}
        <div className="absolute inset-0">
          {/* Gradient overlays inspired by Chimba's vibrant aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,20,147,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,69,0,0.2),transparent_50%)]"></div>
          
          {/* Fun texture pattern */}
          <div className={`absolute inset-0 opacity-10 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full">
            {/* Breadcrumb */}
            <div className="mb-12">
              <Link 
                to="/case-studies" 
                className="inline-flex items-center text-pink-200 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/30 to-red-500/30 backdrop-blur-sm rounded-full border border-pink-400/40">
                  <Award className="w-4 h-4 mr-2 text-pink-200" />
                  <span className="text-pink-200 text-sm font-bold uppercase tracking-wider">Success Story</span>
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                    Chimba Miami Increases{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
                      Google Maps Visits by 215%
                    </span>
                  </h1>
                  
                  <p className="text-xl text-pink-100 leading-relaxed font-light">
                    With help from RAY's local marketing tools, Chimba climbed from a low search ranking 
                    to top visibility on Google Maps, bringing in more foot traffic and local engagement than ever before.
                  </p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30">
                    <div className="flex items-center justify-center mb-3">
                      <Eye className="w-8 h-8 text-pink-200" />
                    </div>
                    <div className="text-3xl font-black text-white mb-1">+215%</div>
                    <div className="text-pink-200 text-sm font-medium">Google Maps Views</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 text-red-200" />
                    </div>
                    <div className="text-3xl font-black text-white mb-1">+46%</div>
                    <div className="text-red-200 text-sm font-medium">Walk-Ins</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-purple-200 fill-current" />
                    </div>
                    <div className="text-3xl font-black text-white mb-1">4.7★</div>
                    <div className="text-purple-200 text-sm font-medium">Google Rating</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="relative">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-400/30 via-red-400/30 to-purple-400/30 rounded-3xl blur-2xl"></div>
                  
                  {/* Main visual container */}
                  <div className="relative bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/40">
                    <div className="text-center space-y-6">
                      <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                        #1
                      </div>
                      <div className="text-xl text-pink-100 font-medium">
                        Google Maps Ranking
                      </div>
                      <div className="text-sm text-pink-200">
                        From #15 to top visibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <LazyImage
              src="/images/Chimba_Miami.jpeg"
              alt="Chimba Miami team celebrating explosive local growth"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/80 via-red-900/40 to-transparent p-8">
              <p className="text-white text-lg font-medium">
                Chimba Miami team – celebrating explosive local growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-red-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-white mb-6">
                Company Snapshot
              </h2>
              
              <div className="text-lg text-pink-100 leading-relaxed space-y-4">
                <p>
                  Chimba Miami brings a mix of flavor, energy, and culture to the heart of the city. 
                  With a strong brand presence and a unique customer experience, they've quickly become 
                  a local favorite in Miami's vibrant hospitality scene.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center text-pink-100">
                  <Instagram className="w-5 h-5 text-pink-300 mr-3" />
                  <span className="font-medium">@chimbamiami</span>
                </div>
                <div className="flex items-center text-pink-100">
                  <MapPin className="w-5 h-5 text-red-300 mr-3" />
                  <span className="font-medium">Miami, FL</span>
                </div>
                <div className="flex items-center text-pink-100">
                  <Star className="w-5 h-5 text-yellow-300 mr-3 fill-current" />
                  <span className="font-medium">4.7★ Google Rating</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30">
              <h3 className="text-xl font-black text-white mb-6">
                Features Used
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl border border-pink-400/30">
                  <div className="w-3 h-3 bg-pink-300 rounded-full mr-4"></div>
                  <span className="font-medium text-white">Local SEO</span>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-xl border border-red-400/30">
                  <div className="w-3 h-3 bg-red-300 rounded-full mr-4"></div>
                  <span className="font-medium text-white">Listings Management</span>
                </div>
                <div className="flex items-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                  <div className="w-3 h-3 bg-purple-300 rounded-full mr-4"></div>
                  <span className="font-medium text-white">Reviews Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                The Challenge
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl font-medium text-gray-900">
                  Chimba needed to improve visibility on Google Maps, especially for nightlife and dining-related searches.
                </p>
                
                <p className="font-medium text-gray-900">
                  RAY's Google Business Profile Audit revealed:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Their location was only ranking <strong className="text-red-600">#15</strong> for key terms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>In many cases, Chimba wasn't appearing at all in relevant local searches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Listings lacked key SEO optimizations</span>
                  </li>
                </ul>
              </div>

              {/* Challenge Visual */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-600 font-medium mb-1">Initial Ranking</div>
                    <div className="text-4xl font-black text-red-600">#15</div>
                    <div className="text-sm text-gray-600">Local search position</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-600 font-medium mb-1">Visibility</div>
                    <div className="text-4xl font-black text-red-600">Low</div>
                    <div className="text-sm text-gray-600">High-intent searches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-red-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                The Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-6 border border-pink-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-lg font-black text-white mb-4">
                  Audit Insights
                </h3>
                <p className="text-pink-100 text-sm">
                  Ran RAY's Google Business Profile Audit
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-6 border border-red-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-lg font-black text-white mb-4">
                  Keyword Optimization
                </h3>
                <p className="text-red-100 text-sm">
                  Identified missing or weak keyword signals
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-purple-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-lg font-black text-white mb-4">
                  Content Enhancement
                </h3>
                <p className="text-purple-100 text-sm">
                  Optimized content, listings, and structured data
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-6 border border-pink-400/30 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white font-bold" />
                </div>
                <h3 className="text-lg font-black text-white mb-4">
                  Local Engagement
                </h3>
                <p className="text-pink-100 text-sm">
                  Increased local engagement through reviews and listings accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
              The Results
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Testimonial */}
            <div className="bg-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-pink-100">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium leading-relaxed mb-8">
                  "Since partnering with RAY, our Juramento location has seen an incredible transformation! 
                  Our Google Maps navigations skyrocketed by <span className="text-pink-600 font-black">215%</span>, 
                  and foot traffic increased by <span className="text-red-600 font-black">46%</span>. 
                  We've never had so many new customers discovering and visiting us. 
                  The impact on our business has been remarkable!"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-black text-gray-900 text-lg">
                      Franco Yannelli
                    </div>
                    <div className="text-gray-600">
                      CMO – Chimba Miami
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Results */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-8">
                Key Metrics
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-8 text-center text-white shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black mb-2">📍 215%</div>
                <div className="font-medium mb-1">More Views</div>
                <div className="text-sm opacity-90">on Google Maps</div>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-purple-500 rounded-3xl p-8 text-center text-white shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white font-bold" />
                  </div>
                </div>
                <div className="text-4xl font-black mb-2">🚶‍♂️ 46%</div>
                <div className="font-medium mb-1">More Walk-ins</div>
                <div className="text-sm opacity-90">foot traffic increase</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white font-bold fill-current" />
                  </div>
                </div>
                <div className="text-4xl font-black mb-2">⭐ 4.7</div>
                <div className="font-medium mb-1">Average Rating</div>
                <div className="text-sm opacity-90">Google reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default ChimbaCaseStudy