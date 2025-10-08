import React from 'react'
import { Star } from 'lucide-react'
import Button from './shared/BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
}

const Hero: React.FC<HeroProps> = ({ locale }) => {
  const t = useTranslations(locale)

  return (
    <div>
      {/* Centered Hero Layout */}
      <section className="relative min-h-[600px] md:min-h-[650px] bg-ray-promise overflow-hidden pb-12">
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(13,121,229,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(111,191,115,0.05),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] md:min-h-[650px] flex items-center py-6">
          <div className="w-full text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-4">
              <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
              <span className="text-sm font-medium text-ray-dark-900">{t.TRUST.TRUSTED_BY}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-[0.9] tracking-tight mb-4">
              {t.HOMEPAGE.HERO.TITLE}{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue bg-clip-text text-transparent">
                  {t.HOMEPAGE.HERO.TITLE_HIGHLIGHT}
                </span>
                {/* Underline decoration */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-ray-blue via-ray-green to-ray-blue rounded-full opacity-30"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-ray-dark-700 leading-relaxed max-w-4xl mx-auto mb-10">
              {t.COMPANY.DESCRIPTION}
            </p>

            

            {/* CTA Button - Prominently displayed */}
            <div className="relative max-w-2xl mx-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg sm:text-xl font-bold shadow-lg"
                href="https://grader.rayapp.io/?utm_source=hero&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=hero-primary"
                external={true}
                data-cta="grader"
                data-analytics="hero_primary"
                aria-label="Scan your restaurant - free 60-second assessment"
              >
                {t.CTA.GRADE_RESTAURANT}
              </Button>
              <p className="text-xs sm:text-sm text-ray-dark-600 mt-1">
                {t.HOMEPAGE.HERO.SUBTITLE}
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 -ml-3">
          <div className="w-6 h-10 border-2 border-ray-blue/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ray-blue rounded-full mt-2"></div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero