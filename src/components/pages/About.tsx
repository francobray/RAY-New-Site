'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from '../../hooks/useTranslations'
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-ray-dark-900 text-center mb-12">
              {t.ABOUT_PAGE.FOUNDERS.TITLE}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Franco Breciano Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-96 max-h-96 bg-gray-100">
                  <Image
                    src="/images/company/Franco.webp"
                    alt="Franco Breciano - Co-Founder & CEO"
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                    {t.ABOUT_PAGE.FOUNDERS.FRANCO.NAME}
                  </h3>
                  <p className="text-ray-blue font-semibold mb-4">
                    {t.ABOUT_PAGE.FOUNDERS.FRANCO.TITLE}
                  </p>
                  <p className="text-ray-dark-700 leading-relaxed">
                    {t.ABOUT_PAGE.FOUNDERS.FRANCO.BIO}
                  </p>
                </div>
              </div>

              {/* Sebastian Cadenas Card */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-96 max-h-96 bg-gray-100">
                  <Image
                    src="/images/company/Sebastian-Cadenas.webp"
                    alt="Sebastian Cadenas - Co-Founder & CTO"
                    fill
                    className="object-cover object-[center_30%]"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                    {t.ABOUT_PAGE.FOUNDERS.SEBASTIAN.NAME}
                  </h3>
                  <p className="text-ray-blue font-semibold mb-4">
                    {t.ABOUT_PAGE.FOUNDERS.SEBASTIAN.TITLE}
                  </p>
                  <p className="text-ray-dark-700 leading-relaxed">
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
              '/images/success-stories/Green-Eat.webp',
              '/images/success-stories/Temple_Team.webp', 
              '/images/success-stories/Havana-1957.webp',
              '/images/success-stories/parolaccia.webp',
              '/images/success-stories/WingsFC.webp'
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Local business owner ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
              '/images/success-stories/Green-Eat.webp',
              '/images/success-stories/patagonia.webp',
              '/images/success-stories/Juan_valdez.webp',
              '/images/success-stories/Temple_Bar.webp'
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Restaurant owner ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-12 min-h-[360px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bookings/fondo-bookings-01.avif"
            alt="Restaurant background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[280px]">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                {t.ABOUT_PAGE.FINAL_CTA.TITLE}
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">
                {t.ABOUT_PAGE.FINAL_CTA.CTA_TITLE}
              </h3>
            </div>
            
            {/* Right Column - Empty space for visual balance */}
            <div></div>
          </div>
          
          {/* Centered CTA Button at bottom */}
          <div className="text-center mt-8">
            <Link href={`/${locale}/demo`} className="bg-ray-blue text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-ray-blue/90 transition-colors duration-200 flex items-center gap-2 mx-auto shadow-lg inline-flex">
              {t.ABOUT_PAGE.FINAL_CTA.CTA_BUTTON}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


    </>
  )
}

export default About