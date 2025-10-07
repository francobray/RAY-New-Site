import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from './shared/BaseButton'

const PromiseBanner: React.FC = () => {

  return (
    <>
      <section className="py-16 bg-ray-promise relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-tight mb-4">
                Do you want to be the favorite local spot?
              </h2>
              <p className="text-xl text-ray-dark-700 leading-relaxed max-w-2xl">
                We guarantee a 30%+ increase in Google Business Profile Google Maps directions within 6 months — or we'll refund your investment. <span className="text-sm text-ray-darkGray">('Google Maps Directions' refers to Google Business Profile direction requests/navigation taps.)</span>
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button
                variant="primary"
                size="lg"
                href="/demo?utm_source=promise-banner&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=promise-cta"
                data-cta="demo-free"
                data-analytics="promise_banner"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transition-colors duration-200 group"
                aria-label="Book a free demo"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PromiseBanner