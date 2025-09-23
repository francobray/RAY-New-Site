import React from 'react'
import { useEffect, useState } from 'react'
import { TrendingUp, Star } from 'lucide-react'
import Button from './shared/BaseButton'
import { COPY } from '../constants/copy'

// Extend Window interface for RAYWidget
declare global {
  interface Window {
    RAYWidget: any
  }
}

const Hero: React.FC = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  useEffect(() => {
    // Add custom CSS to fix widget height issues
    const addCustomStyles = () => {
      const styleId = 'ray-widget-custom-styles';
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          .ray-widget {
            min-height: 120px !important;
          }
          .ray-widget-title {
            min-height: 50px !important;
            display: flex !important;
            align-items: center !important;
            line-height: 1.2 !important;
            white-space: normal !important;
          }
          .ray-widget-header {
            min-height: 60px !important;
          }
          @media (max-width: 600px) {
            .ray-widget {
              min-height: 90px !important;
              align-items: center !important;
              padding: 12px 16px !important;
            }
            .ray-widget-header {
              display: block !important;
              min-height: 40px !important;
            }
            .ray-widget-title {
              font-size: 14px !important;
              line-height: 1.3 !important;
              min-height: 40px !important;
              overflow: hidden !important;
              text-overflow: ellipsis !important;
              display: -webkit-box !important;
              -webkit-line-clamp: 2 !important;
              -webkit-box-orient: vertical !important;
              max-height: 40px !important;
            }
            .ray-widget-title-container {
              min-height: 40px !important;
              align-items: flex-start !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Initialize RAY Widget when component mounts
    const initWidget = () => {
      if (window.RAYWidget) {
        addCustomStyles();
        new window.RAYWidget({
          container: '#ray-widget',
          baseUrl: 'https://grader.rayapp.io',
          width: '100%'
        })
        setWidgetLoaded(true)
      } else {
        setWidgetLoaded(false)
        // If RAYWidget is not loaded yet, try again after a short delay
        setTimeout(initWidget, 100);
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      setWidgetLoaded(false)
      document.addEventListener('DOMContentLoaded', initWidget);
    } else {
      initWidget();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', initWidget);
      setWidgetLoaded(false)
    };
  }, []);

  return (
    <div>
      {/* Centered Hero Layout */}
      <section className="relative min-h-[50vh] bg-ray-promise overflow-hidden pb-12">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh] flex items-center py-6">
          <div className="w-full text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-4">
              <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
              <span className="text-sm font-medium text-ray-dark-900">Trusted by 1,000+ restaurants</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] tracking-tight mb-4">
              Boost revenue by driving more{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue bg-clip-text text-transparent animate-pulse">
                  walk-ins, bookings & orders
                </span>
                {/* Underline decoration */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue rounded-full opacity-30"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-ray-dark-700 leading-relaxed max-w-4xl mx-auto mb-10">
              {COPY.COMPANY.DESCRIPTION}
            </p>

            {/* Widget Container */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div id="ray-widget" style={{ overflow: 'visible' }}></div>
              
              {/* Fallback Button if widget doesn't load */}
              {!widgetLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="primary" 
                    size="lg" 
                    fullWidth={true} 
                    className="max-w-lg mx-auto px-12 py-6 text-xl"
                    href="https://grader.rayapp.io/"
                    external={true}
                    data-cta="grader"
                    data-analytics="hero_fallback"
                    aria-label="Grade your restaurant with RAY's free assessment tool - run a free 60-second audit"
                  >
                    Grade Your Restaurant
                  </Button>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-sm text-ray-dark-600">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-ray-blue to-ray-green rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-ray-green to-yellow-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-ray-blue rounded-full border-2 border-white"></div>
                </div>
                <span className="font-medium">+47% avg. navigations increase</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-ray-green mr-2" />
                <span className="font-medium">30%+ navigations guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator - Removed to reduce spacing */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ray-blue/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ray-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero