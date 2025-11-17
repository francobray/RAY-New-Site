'use client'

import React from 'react'
import Image from 'next/image'
import CTASection from '../../shared/CTASection'
import { useTranslations } from '../../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface AboutProps {
  locale: Locale
}


const About: React.FC<AboutProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>About RAY - Helping Local Business Owners Survive & Thrive</h1>
        <p>RAY helps local business owners, especially restaurants, survive and thrive in an increasingly competitive market dominated by large corporations. Founded by Franco Breciano and Sebastian Cadenas after helping save Franco's mother's business, RAY provides technology solutions that help independent restaurants grow profitably without relying on predatory third-party platforms.</p>
        <p>Our mission is to support local business owners who are the heart of our economy, creating jobs and pursuing their dreams despite facing extinction from big chains and tech corporations. Meet our founders Franco Breciano (CEO) and Sebastian Cadenas (CTO) who lead RAY's vision of empowering independent restaurants.</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
              {t.ABOUT_PAGE.HERO.TITLE}{' '}
              <span className="text-ray-blue">{t.ABOUT_PAGE.HERO.TITLE_HIGHLIGHT}</span>
            </h1>
            
            <p className="text-xl text-ray-dark-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.ABOUT_PAGE.HERO.SUBTITLE}
            </p>
          </div>
          
          {/* Founders Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-ray-dark-900 text-center mb-12">
              {t.ABOUT_PAGE.FOUNDERS.TITLE}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Franco Breciano Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/images/company/Franco.webp"
                    alt="Franco Breciano - Co-Founder & CEO"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {t.ABOUT_PAGE.FOUNDERS.FRANCO.NAME}
                  </h3>
                  <p className="text-sm text-ray-blue font-semibold mb-4">
                    {t.ABOUT_PAGE.FOUNDERS.FRANCO.TITLE}
                  </p>
                  {Array.isArray(t.ABOUT_PAGE.FOUNDERS.FRANCO.BIO) ? (
                    t.ABOUT_PAGE.FOUNDERS.FRANCO.BIO.map((paragraph: string, index: number) => (
                      <p key={index} className={`text-sm text-ray-dark-700 leading-relaxed ${index > 0 ? 'mt-4' : ''}`}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-ray-dark-700 leading-relaxed">
                      {t.ABOUT_PAGE.FOUNDERS.FRANCO.BIO}
                    </p>
                  )}
                </div>
              </div>

              {/* Sebastian Cadenas Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/images/company/Sebastian-Cadenas.webp"
                    alt="Sebastian Cadenas - Co-Founder & CTO"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-ray-dark-900 mb-2">
                    {t.ABOUT_PAGE.FOUNDERS.SEBASTIAN.NAME}
                  </h3>
                  <p className="text-sm text-ray-blue font-semibold mb-4">
                    {t.ABOUT_PAGE.FOUNDERS.SEBASTIAN.TITLE}
                  </p>
                  <p className="text-sm text-ray-dark-700 leading-relaxed">
                    {t.ABOUT_PAGE.FOUNDERS.SEBASTIAN.BIO}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Heroes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-8">
              {t.ABOUT_PAGE.LOCAL_HEROES.TITLE}
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {t.ABOUT_PAGE.LOCAL_HEROES.PARAGRAPHS.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-ray-dark-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Photo Gallery of Local Business Owners */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              '/images/success-stories/Temple_Team.webp', 
              '/images/success-stories/Havana-1957.webp',
              '/images/success-stories/parolaccia.webp',
              '/images/success-stories/Chimba_Miami_Celebrating.webp',
              '/images/success-stories/Dolcezza.webp'
            ].map((image, index) => (
              <div key={index} className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Local business owner ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Revolution Section */}
      <section className="py-20 bg-ray-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              {t.ABOUT_PAGE.TECH_REVOLUTION.TITLE}
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {t.ABOUT_PAGE.TECH_REVOLUTION.PARAGRAPHS.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Additional photo gallery for this section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto opacity-80">
            {[
              '/images/success-stories/Dolcezza.webp',
              '/images/success-stories/patagonia.webp',
              '/images/success-stories/Juan_valdez.webp',
              '/images/success-stories/Temple_Bar.webp',
              '/images/success-stories/Cortadito.png'
            ].map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" style={{ minHeight: '200px' }}>
                <Image
                  src={image}
                  alt={`Restaurant owner ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
    </>
  )
}

export default About