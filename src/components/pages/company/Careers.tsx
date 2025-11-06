'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface CareersProps {
  locale: Locale
}

interface JobPosition {
  id: string
  title: string
  department: string
  area: string
  location: string
  type: string
  description: string
  url?: string
  applyUrl?: string
  postedDate?: string
  whatWeLookFor?: string
  impact?: string
  requirements?: string
  payAndBenefits?: string
}

const Careers: React.FC<CareersProps> = ({ locale }) => {
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch job openings from API
  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Add cache busting to ensure fresh data
        const response = await fetch(`/api/job-openings?t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        })
        
        const data = await response.json()
        
        if (data.error || data.source === 'error') {
          setError(data.message || 'Error loading job openings')
          setJobPositions([])
        } else if (data.jobs && Array.isArray(data.jobs)) {
          // Clean up the job data (remove extra whitespace and newlines)
          const cleanedJobs = data.jobs.map((job: JobPosition) => ({
            ...job,
            location: job.location?.replace(/\n/g, '').trim() || '',
            type: job.type?.replace(/\n/g, '').trim() || '',
            department: job.department?.replace(/\n/g, '').trim() || '',
            area: job.area?.replace(/\n/g, '').trim() || '',
          }))
          setJobPositions(cleanedJobs)
          setError(null)
        } else {
          setJobPositions([])
          setError(null)
        }
      } catch (err) {
        console.error('Error fetching job openings:', err)
        setError('Failed to load job openings. Please try again later.')
        setJobPositions([])
      } finally {
        setLoading(false)
      }
    }

    fetchJobOpenings()
  }, [])

  const values = locale === 'es' ? [
    {
      title: 'Leaders without a title',
      description: 'Actuamos con determinación y lideramos con el ejemplo desde cualquier lugar y acción.'
    },
    {
      title: 'Cantame la posta',
      description: 'Mantenemos relaciones honestas, directas y siempre respetuosas.'
    },
    {
      title: 'We flow like water',
      description: 'Siempre encontramos un lugar para avanzar hacia nuestro norte.'
    },
    {
      title: 'The best idea wins',
      description: 'Colaboramos prácticamente sin barreras jerárquicas.'
    },
    {
      title: 'Cultivamos relaciones positivas',
      description: 'Fomentamos el respeto y las relaciones a largo plazo con actitud positiva.'
    }
  ] : [
    {
      title: 'Leaders without a title',
      description: 'We act with determination and lead by example from any place and action.'
    },
    {
      title: 'Cantame la posta',
      description: 'We maintain honest, direct, and always respectful relationships.'
    },
    {
      title: 'We flow like water',
      description: 'We always find a way to move forward toward our north star.'
    },
    {
      title: 'The best idea wins',
      description: 'We collaborate practically without hierarchical barriers.'
    },
    {
      title: 'Build positive relationships',
      description: 'We foster respect and long-term relationships with a positive attitude.'
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
      <section id="open-positions" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with job count */}
          <div className="flex items-start justify-between mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-ray-dark-900">
              {locale === 'es' ? 'Carreras en RAY' : 'Careers at RAY'}
            </h2>
            {!loading && !error && jobPositions.length > 0 && (
              <span className="text-lg text-ray-dark-600 mt-2">
                {jobPositions.length} {locale === 'es' ? 'posiciones' : 'openings'}
              </span>
            )}
          </div>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-ray-blue" />
              <span className="ml-3 text-ray-dark-700">
                {locale === 'es' ? 'Cargando posiciones abiertas...' : 'Loading job openings...'}
              </span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-1">
                  {locale === 'es' ? 'Error al cargar posiciones' : 'Error loading positions'}
                </h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && jobPositions.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-ray-dark-700 text-lg">
                {locale === 'es' 
                  ? 'No hay posiciones abiertas en este momento. Vuelve a consultar pronto.'
                  : 'No open positions at this time. Please check back soon.'
                }
              </p>
            </div>
          )}

          {!loading && !error && (() => {
            // Group jobs by area
            const jobsByArea = jobPositions.reduce((acc, job) => {
              const area = job.area || (locale === 'es' ? 'Otras' : 'Other')
              if (!acc[area]) {
                acc[area] = []
              }
              acc[area].push(job)
              return acc
            }, {} as Record<string, typeof jobPositions>)

            return (
              <div className="space-y-12">
                {Object.entries(jobsByArea).map(([area, jobs]) => (
                  <div key={area}>
                    {/* Area Header */}
                    <h3 className="text-2xl font-bold text-ray-dark-900 mb-6">
                      {area}
                    </h3>

                    {/* Jobs in this department */}
                    <div className="space-y-3">
                      {jobs.map((job) => (
                        <div 
                          key={job.id}
                          className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-200 border border-gray-100"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-ray-dark-900 mb-2">
                                {job.title}
                              </h4>
                              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                {job.department && (
                                  <span>{job.department}</span>
                                )}
                                {job.location && (
                                  <>
                                    {job.department && <span className="text-gray-300">•</span>}
                                    <span>{job.location}</span>
                                  </>
                                )}
                                {job.type && (
                                  <>
                                    {(job.department || job.location) && <span className="text-gray-300">•</span>}
                                    <span>{job.type}</span>
                                  </>
                                )}
                              </div>
                            </div>
                            <Link
                              href={`/${locale}/careers/${job.id}`}
                              className="inline-flex items-center gap-2 text-ray-blue font-semibold hover:text-blue-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                            >
                              {locale === 'es' ? 'Aplicar Ahora' : 'Apply Now'}
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}

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

