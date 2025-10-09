'use client'

import React from 'react'
import { Users, MessageSquare, Heart, Waves, Lightbulb } from 'lucide-react'
import Card from '../Card'
import Image from 'next/image'
import { useTranslations } from '../../hooks/useTranslations'
import { type Locale } from '@/lib/i18n'

interface AboutProps {
  locale: Locale
}

interface IndustryStat {
  number: string
  label: string
  description: string
}

interface Value {
  title: string
  description: string
}

const About: React.FC<AboutProps> = ({ locale }) => {
  const t = useTranslations(locale)
  
  const valueIcons = [Users, MessageSquare, Heart, Waves, Lightbulb]

  return (
    <>
      
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>About RAY - Restaurant Marketing Platform</h1>
        <p>RAY is a restaurant marketing platform founded to help restaurant owners increase revenue through proven local marketing strategies. The restaurant industry employs over 15 million people across 1 million+ locations in the U.S., making it the second-largest private sector employer. RAY's mission is to empower restaurant owners with tools and strategies that guarantee a 30%+ increase in Google Business Profile Google Maps directions.</p>
        <p>Our core values include leadership without titles, transparent communication, positive relationship building, adaptability, and merit-based decision making. Founded by Franco (CEO & Co-Founder), RAY serves restaurants nationwide with local SEO, reputation management, and customer engagement solutions.</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-ray-promise relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(13,121,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,191,115,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ray-dark-900 leading-tight mb-6">
                {t.ABOUT_PAGE.HERO.TITLE}{' '}
                <span className="text-ray-blue">{t.ABOUT_PAGE.HERO.TITLE_HIGHLIGHT}</span>
              </h1>
              
              <p className="text-xl text-ray-dark-700 mb-8 max-w-2xl leading-relaxed">
                {t.ABOUT_PAGE.HERO.SUBTITLE}
              </p>
            </div>
            
            {/* Right side - Industry Stats */}
            <div className="grid grid-cols-1 gap-6">
              {t.ABOUT_PAGE.INDUSTRY_STATS.map((stat: IndustryStat, index: number) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-ray-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-ray-dark-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-ray-darkGray">
                    {stat.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-6">
              {t.ABOUT_PAGE.VALUES.TITLE}
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto">
              {t.ABOUT_PAGE.VALUES.SUBTITLE}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.ABOUT_PAGE.VALUES.LIST.map((value: Value, index: number) => {
              const IconComponent = valueIcons[index]
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ray-blue rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-ray-darkGray leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Letter from the CEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Franco's Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <Image
                  src="/images/Franco.jpg"
                  alt="Franco, CEO & Co-Founder of RAY"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-sm font-semibold text-ray-dark-900">{t.ABOUT_PAGE.CEO_LETTER.SIGNATURE}</div>
                  <div className="text-xs text-ray-darkGray">{t.ABOUT_PAGE.CEO_LETTER.POSITION}</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Letter Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-8">
                {t.ABOUT_PAGE.CEO_LETTER.TITLE}
              </h2>
              
              <div className="prose prose-lg text-ray-dark-700 leading-relaxed space-y-6">
                <p>
                  {t.ABOUT_PAGE.CEO_LETTER.GREETING}
                </p>
                
                {t.ABOUT_PAGE.CEO_LETTER.PARAGRAPHS.map((paragraph: string, index: number) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
                
                <div className="pt-6">
                  <div className="text-xl font-semibold text-ray-dark-900">{t.ABOUT_PAGE.CEO_LETTER.SIGNATURE}</div>
                  <div className="text-ray-darkGray">{t.ABOUT_PAGE.CEO_LETTER.POSITION}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About