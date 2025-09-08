import React from 'react'
import { useEffect } from 'react'
import LazyImage from './LazyImage'

// Extend Window interface for RAYWidget
declare global {
  interface Window {
    RAYWidget: any
  }
}
const Hero: React.FC = () => {
  useEffect(() => {
    // Initialize RAY Widget when component mounts
    const initWidget = () => {
      if (window.RAYWidget) {
        new window.RAYWidget({
          container: '#ray-widget',
          baseUrl: 'https://grader.rayapp.io'
        });
      } else {
        // If RAYWidget is not loaded yet, try again after a short delay
        setTimeout(initWidget, 100);
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initWidget);
    } else {
      initWidget();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initWidget);
    };
  }, []);

  return (
    <div>
      <section className="relative bg-ray-promise overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-ray-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-ray-green/10 rounded-full animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left relative animate-in fade-in slide-in-from-left duration-1000">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ray-dark-900 leading-tight">
                Boost revenue by driving more{' '}
                <span className="text-ray-blue">walk-ins, orders & bookings</span>
              </h1>
              
              <p className="mt-6 text-xl text-ray-dark-700 max-w-2xl">
                RAY is the #1 sales platform helping restaurant owners and operators attract more walk-ins, boost their online reputation, and increase revenue through online orders and bookings.
              </p>
              
              <div className="mt-8 flex justify-center lg:justify-start animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                <div id="ray-widget" style={{ minHeight: '80px' }}></div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
              {/* Clean Mobile Phone Mockup */}
              <div className="relative max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  {/* Screen - properly contained */}
                  <div className="bg-white rounded-[2rem] overflow-hidden relative h-[600px]">
                    <LazyImage
                      src="/images/Screenshot 2025-08-26 at 15.22.48.jpeg"
                      alt="RAY Score results showing restaurant scan with 56/100 score and $6,250 potential revenue loss"
                      width={400}
                      height={600}
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                  
                  {/* Phone Details - notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full mt-2"></div>
                </div>
                
                {/* Two Symmetric Metric Cards */}
                {/* Top Right Card */}
                <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-110 transition-all duration-300 animate-bounce delay-300">
                  <div className="text-2xl font-bold text-ray-blue">4.8★</div>
                  <div className="text-sm text-ray-darkGray">Average rating</div>
                </div>
                
                {/* Bottom Left Card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hover:scale-110 transition-all duration-300 animate-bounce">
                  <div className="text-2xl font-bold text-ray-green">+47%</div>
                  <div className="text-sm text-ray-darkGray">Walk-ins increase</div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ray-blue/20 to-ray-green/20 rounded-[2.5rem] -z-10 blur-xl scale-110 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero