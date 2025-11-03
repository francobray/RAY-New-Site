'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface CareersProps {
  locale: Locale
}

interface JobPosition {
  title: string
  department: string
  location: string
  type: string
  description: string
}

const Careers: React.FC<CareersProps> = ({ locale }) => {
  
  // Job positions data
  const jobPositions: JobPosition[] = locale === 'es' ? [
    {
      title: 'Ingeniero de Software Full Stack',
      department: 'Ingeniería',
      location: 'Remoto (América Latina)',
      type: 'Tiempo Completo',
      description: 'Únete a nuestro equipo de ingeniería para construir soluciones innovadoras que ayuden a restaurantes a crecer.'
    },
    {
      title: 'Gerente de Éxito del Cliente',
      department: 'Éxito del Cliente',
      location: 'Miami, FL / Remoto',
      type: 'Tiempo Completo',
      description: 'Ayuda a nuestros clientes a maximizar su éxito con la plataforma RAY y construye relaciones duraderas.'
    },
    {
      title: 'Especialista en Marketing Digital',
      department: 'Marketing',
      location: 'Remoto',
      type: 'Tiempo Completo',
      description: 'Crea y ejecuta estrategias de marketing digital para ayudar a crecer nuestra base de clientes.'
    }
  ] : [
    {
      title: 'Full Stack Software Engineer',
      department: 'Engineering',
      location: 'Remote (Latin America)',
      type: 'Full-Time',
      description: 'Join our engineering team to build innovative solutions that help restaurants grow and thrive.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Miami, FL / Remote',
      type: 'Full-Time',
      description: 'Help our customers maximize their success with the RAY platform and build lasting relationships.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Create and execute digital marketing strategies to help grow our customer base.'
    }
  ]

  const values = locale === 'es' ? [
    {
      title: 'Orientado a Resultados',
      description: 'Nos enfocamos en entregar resultados medibles para nuestros clientes y nuestro equipo.'
    },
    {
      title: 'Innovación',
      description: 'Buscamos constantemente formas nuevas y mejores de resolver problemas.'
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos juntos como un equipo para lograr grandes cosas.'
    },
    {
      title: 'Empatía',
      description: 'Nos ponemos en los zapatos de nuestros clientes y compañeros de equipo.'
    }
  ] : [
    {
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results for our customers and our team.'
    },
    {
      title: 'Innovation',
      description: 'We constantly seek new and better ways to solve problems.'
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team to achieve great things.'
    },
    {
      title: 'Empathy',
      description: 'We put ourselves in the shoes of our customers and teammates.'
    }
  ]
  
  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{locale === 'es' ? 'Carreras en RAY - Únete a Nuestro Equipo' : 'Careers at RAY - Join Our Team'}</h1>
        <p>{locale === 'es' 
          ? 'Únete al equipo de RAY y ayuda a restaurantes locales a crecer y prosperar. Ofrecemos trabajo remoto, beneficios competitivos y la oportunidad de generar un impacto real en pequeños negocios.'
          : 'Join the RAY team and help local restaurants grow and thrive. We offer remote work, competitive benefits, and the opportunity to make a real impact on small businesses.'
        }</p>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ray-blue to-blue-700 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {locale === 'es' ? 'Construye Tu Carrera en RAY' : 'Build Your Career at RAY'}
            </h1>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              {locale === 'es' 
                ? 'Únete a nuestro equipo y ayuda a restaurantes locales a prosperar con tecnología innovadora'
                : 'Join our team and help local restaurants thrive with innovative technology'
              }
            </p>

            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 bg-white text-ray-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {locale === 'es' ? 'Ver Posiciones Abiertas' : 'View Open Positions'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              {locale === 'es' ? 'Nuestros Valores' : 'Our Values'}
            </h2>
            <p className="text-xl text-ray-dark-700 max-w-3xl mx-auto">
              {locale === 'es'
                ? 'Los valores que guían todo lo que hacemos'
                : 'The values that guide everything we do'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-ray-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-ray-dark-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              {locale === 'es' ? 'Posiciones Abiertas' : 'Open Positions'}
            </h2>
            <p className="text-xl text-ray-dark-700 max-w-3xl mx-auto">
              {locale === 'es'
                ? 'Explora las oportunidades actuales para unirte a nuestro equipo'
                : 'Explore current opportunities to join our team'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobPositions.map((job, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-ray-blue"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-ray-dark-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-ray-dark-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 bg-ray-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    {locale === 'es' ? 'Aplicar' : 'Apply'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <p className="text-ray-dark-700">
                  {job.description}
                </p>
              </div>
            ))}
          </div>

          {/* No perfect fit CTA */}
          <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-ray-dark-900 mb-4">
              {locale === 'es' ? '¿No Encuentras Tu Posición Ideal?' : 'Don\'t See a Perfect Fit?'}
            </h3>
            <p className="text-ray-dark-700 mb-6 max-w-2xl mx-auto">
              {locale === 'es'
                ? 'Siempre estamos buscando personas talentosas. Envíanos tu CV y cuéntanos cómo puedes contribuir al equipo de RAY.'
                : 'We\'re always looking for talented people. Send us your resume and tell us how you can contribute to the RAY team.'
              }
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-ray-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              {locale === 'es' ? 'Contáctanos' : 'Contact Us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers

