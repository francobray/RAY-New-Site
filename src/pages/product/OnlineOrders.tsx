import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, ShoppingBag, BarChart3, TrendingUp, Clock, CreditCard } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import LazyImage from '../../components/LazyImage'

const features = [
  {
    icon: Calendar,
    title: 'Bookings',
    subtitle: 'Seamless Reservation Management',
    description: 'Integrate with popular booking platforms and convert more browsers into diners.',
    details: [
      'OpenTable, Resy, and custom booking integrations',
      'Real-time availability management',
      'Automated confirmation and reminder emails',
      'No-show reduction strategies',
      'VIP customer identification and treatment'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Orders & Delivery',
    subtitle: 'Direct Revenue Growth',
    description: 'Win back margin from delivery platforms and grow direct orders through your own channels.',
    details: [
      'Direct online ordering system setup',
      'Delivery platform optimization',
      'Commission-free ordering solutions',
      'Upselling and cross-selling automation',
      'Loyalty program integration'
    ]
  },
  {
    icon: BarChart3,
    title: 'Data & Insights',
    subtitle: 'Revenue Intelligence',
    description: 'Comprehensive dashboards showing bookings, orders, and revenue lift across all channels.',
    details: [
      'Real-time revenue tracking',
      'Customer lifetime value analysis',
      'Peak time and demand forecasting',
      'Channel performance comparison',
      'ROI measurement and reporting'
    ]
  }
]

const metrics = [
  {
    value: '+27%',
    label: 'Online Orders Growth',
    description: 'Average increase in 90 days'
  },
  {
    value: '+28%',
    label: 'Direct Orders',
    description: 'Reduction in third-party delivery dependence'
  },
  {
    value: '+42%',
    label: 'Booking Conversion',
    description: 'More website visitors become diners'
  },
  {
    value: '15%',
    label: 'Higher Margins',
    description: 'By reducing third-party commissions'
  }
]

const OnlineOrders: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Online Orders - Grow Restaurant Revenue From Digital Channels | RAY</title>
        <meta name="description" content="Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins." />
        <meta property="og:title" content="Online Orders - Grow Restaurant Revenue From Digital Channels | RAY" />
        <meta property="og:description" content="Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins." />
        <meta property="og:url" content="https://rayapp.io/product/online-orders" />
        <meta name="twitter:title" content="Online Orders - Grow Restaurant Revenue From Digital Channels | RAY" />
        <meta name="twitter:description" content="Grow revenue from online orders, reservations, and deliveries with seamless integrations, direct ordering systems, and data-driven insights that increase profit margins." />
        <link rel="canonical" href="https://rayapp.io/product/online-orders" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "RAY Online Orders Platform",
            "description": "Comprehensive platform for restaurants to grow revenue from online orders, reservations, and deliveries with seamless integrations and data-driven insights.",
            "brand": {
              "@type": "Brand",
              "name": "RAY"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                Grow revenue from{' '}
                <span className="text-ray-blue">online orders, reservations, and deliveries</span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 leading-relaxed">
                Transform your digital presence into a revenue-generating machine. Our platform 
                integrates seamlessly with booking systems, optimizes direct ordering, and provides 
                the insights you need to maximize every online customer touchpoint.
              </p>
              
              <div className="flex justify-center lg:justify-start mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://grader.rayapp.io/"
                  external={true}
                  data-cta="grader"
                  data-analytics="online_orders_hero"
                  aria-label="Grade your restaurant"
                >
                  Grade Your Restaurant
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-ray-dark-600">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                  <span>Average +27% online orders</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 text-ray-blue mr-2" />
                  <span>15% higher profit margins</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Restaurant staff managing online orders on tablet"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
              
              {/* Floating metrics */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-green">+27%</div>
                <div className="text-sm text-ray-darkGray">Online orders</div>
                <div className="text-xs text-ray-darkGray">in 90 days</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-bold text-ray-blue">15%</div>
                <div className="text-sm text-ray-darkGray">Higher margins</div>
                <div className="text-xs text-ray-darkGray">vs. 3rd party</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Maximize Every Online Revenue Channel
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              From reservations to delivery orders, our platform optimizes every digital touchpoint 
              to drive more revenue and higher profit margins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                    {feature.title}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-ray-blue mb-4">
                    {feature.subtitle}
                  </h4>
                  
                  <p className="text-ray-darkGray mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="text-left space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-ray-dark-700">
                        <div className="w-2 h-2 bg-ray-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
      
      {/* Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              Proven Results Across All Channels
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              Our clients see measurable improvements in online revenue, direct orders, 
              and profit margins within the first 90 days.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <div className="text-4xl font-bold text-ray-green mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-ray-dark-900 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-ray-darkGray">
                  {metric.description}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview Section */}
      <section className="py-20 bg-ray-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              See Everything in One Dashboard
            </h2>
            <p className="text-xl text-ray-gray max-w-3xl mx-auto">
              Track bookings, orders, revenue, and customer insights all in one place. 
              Make data-driven decisions that grow your business.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <Card className="p-8">
              <LazyImage
                src="/images/RAY_Dashboard.png"
                alt="RAY dashboard showing comprehensive metrics for Almacen de Pizzas including revenue, review scores, Google Business Profile engagement, and multi-location performance analytics"
                width={800}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
              
              {/* Dashboard features overlay */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-ray-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-ray-dark-900 mb-2">Real-Time Tracking</h4>
                  <p className="text-sm text-ray-darkGray">Monitor orders and bookings as they happen</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-ray-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-ray-dark-900 mb-2">Revenue Analytics</h4>
                  <p className="text-sm text-ray-darkGray">Track performance across all channels</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-ray-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-ray-dark-900 mb-2">Growth Insights</h4>
                  <p className="text-sm text-ray-darkGray">Identify opportunities for optimization</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-ray-promise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
            Ready to maximize your online revenue?
          </h2>
          
          <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto">
          Discover how RAY can optimize your bookings, orders, and deliveries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineOrders