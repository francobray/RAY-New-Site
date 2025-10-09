import React from 'react'
import { TrendingUp } from 'lucide-react'
import Button from './shared/BaseButton'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface CTASectionProps {
  locale: Locale
}

const CTASection: React.FC<CTASectionProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  return (
    <>
      <section className="py-24 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center px-4 py-2 bg-ray-dark-900/10 rounded-full text-ray-dark-900 text-sm font-medium mb-6">
          <TrendingUp className="w-4 h-4 mr-2" />
          {t.CTA_SECTION.BADGE}
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
          {t.CTA_SECTION.TITLE}
        </h2>
        
        <p className="text-xl text-ray-dark-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.CTA_SECTION.SUBTITLE}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300"
            href="https://grader.rayapp.io/?utm_source=cta-section&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=cta-primary"
            external={true}
            data-cta="grader"
            data-analytics="cta_section"
            aria-label="Scan your restaurant"
          >
            {t.CTA_SECTION.SCAN_RESTAURANT}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="shadow-xl hover:shadow-2xl transition-all duration-300"
            href={`/${locale}/demo?utm_source=cta-section&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=cta-secondary`}
            data-cta="demo"
            data-analytics="cta_section"
            aria-label="Get a free demo"
          >
            {t.CTA.GET_FREE_DEMO}
          </Button>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-sm text-ray-dark-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
            <span>{t.CTA_SECTION.GUARANTEE}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
            <span>{t.CTA_SECTION.NO_COMMITMENT}</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-ray-green rounded-full mr-2"></div>
            <span>{t.CTA_SECTION.RESULTS_TIME}</span>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default CTASection