'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { type Locale } from '@/lib/i18n'
import JobApplicationModal from '@/components/shared/JobApplicationModal'

interface JobDetailProps {
  job: {
    id: string
    title: string
    department: string
    area: string
    location: string
    type: string
    description: string
    whatWeLookFor?: string
    impact?: string
    requirements?: string
    payAndBenefits?: string
  }
  locale: Locale
}

const JobDetail: React.FC<JobDetailProps> = ({ job, locale }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Helper function to detect and linkify URLs in text
  const linkifyText = (text: string) => {
    // Regex to detect URLs (http, https, www)
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi
    const parts = text.split(urlRegex)
    
    return parts.map((part, i) => {
      // Check if this part is a URL
      if (part.match(urlRegex)) {
        // Ensure URL has protocol
        const href = part.startsWith('http') ? part : `https://${part}`
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ray-blue hover:text-blue-700 underline transition-colors duration-200"
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  // Helper function to format multi-line text with URL detection
  const formatText = (text?: string) => {
    if (!text) return null
    return text.split('\n').filter(line => line.trim()).map((line, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {linkifyText(line.trim())}
      </p>
    ))
  }

  const aboutText = locale === 'es' ? {
    aboutTitle: '👋 Acerca de RAY',
    aboutP1: 'RAY es el software de marketing all-in-one sistema con IA para restaurantes',
    aboutP2: 'Nuestra IA mejora continuamente el SEO, marketing y pedidos online para aumentar pedidos directos. A diferencia de otras empresas que obligan a los dueños de pequeños negocios a dominar su software para impulsar ventas, RAY les brinda un sistema probado administrado por expertos.',
    aboutP3: 'RAY es como tener un ejército de ingenieros y marketers de tu lado, igual que las grandes cadenas.',
    visionTitle: '🌎 Nuestra visión',
    visionP1: 'Estamos comenzando ayudando a restaurantes independientes a tener éxito online.',
    visionP2: 'Pero no son solo los restaurantes los que necesitan nuestra ayuda. La mayoría de los negocios locales están luchando con estos mismos problemas. Las grandes corporaciones tecnológicas están tomando sus clientes, drenando sus ganancias y haciendo que sea difícil sobrevivir.',
    visionP3: 'Una vez que perfeccionemos la solución para restaurantes, la escalaremos a todos los demás tipos de negocios locales.',
    visionP4: 'En el futuro que imaginamos, decenas de millones de dueños de negocios locales usarán nuestra tecnología para tener éxito en la era digital.',
    tractionTitle: '🚀 Nuestro progreso',
    tractionP1: 'Desde 2017, hemos generado millones en ingresos. 1 de cada 10 latinoamericanos ha usado un sitio web de RAY.',
    tractionP2: 'Más importante aún, hemos ayudado a más de 1,000 dueños de restaurantes y les hemos ahorrado casi $10 millones en comisiones.',
    teamTitle: '⭐ Nuestro equipo',
    teamP1: 'Nuestro equipo ahora está en las decenas. Tenemos talento de primera de las empresas más exitosas en software para PyMEs, incluyendo: Rappi, MercadoLibre, Globant, PedidosYa y Stripe.',
    teamP2: 'Estaremos escalando aún más rápido en 2025 para mantenernos al ritmo de nuestro crecimiento de clientes.',
    locationTitle: '🌆 Dónde trabajamos',
    locationP1: 'RAY es una empresa remote-first, global con sede en Buenos Aires. Para algunos de nuestros roles priorizamos la colaboración presencial en nuestras oficinas. La mayoría de nuestros compañeros están distribuidos por todo el mundo. Por favor revisa la descripción del rol y discute con tu reclutador para más detalles sobre ubicación.',
  } : {
    aboutTitle: '👋 About RAY',
    aboutP1: 'RAY is the all-in-one marketing software for local restaurants.',
    aboutP2: 'Our AI continuously improves SEO, marketing, and online ordering to grow first-party orders. Unlike other companies that force small business owners to master their software to drive sales, RAY gives them a proven system run by experts.',
    aboutP3: 'RAY is like having an army of engineers and marketers on your side, just like the big chains.',
    visionTitle: '🌎 Our vision',
    visionP1: 'We\'re starting by helping independent restaurants succeed online.',
    visionP2: 'But it\'s not just restaurants that need our help. Most local businesses are struggling with these same problems. Huge technology corporations are taking their customers, bleeding their profits, and making it hard for them to survive.',
    visionP3: 'Once we nail the solution for restaurants – we\'ll scale it into every other local business type.',
    visionP4: 'In the future we envision, tens of millions of local business owners will use our technology to succeed in the digital age.',
    tractionTitle: '🚀 Our traction',
    tractionP1: 'Since 2020, we\'ve generated millions in revenue. 1 in 10 Latin Americans have used a RAY website.',
    tractionP2: 'More importantly, we\'ve helped over 1,000 restaurant owners, and saved them nearly $10 million in fees.',
    teamTitle: '⭐ Our team',
    teamP1: 'Our team is now in the tens. We\'ve got top talent from the most successful companies in SMB software, including: Rappi, MercadoLibre, Globant, PedidosYa and Stripe.',
    teamP2: 'We\'ll be scaling even faster in 2025 to keep pace with our customer growth.',
    locationTitle: '🌆 Where we work',
    locationP1: 'RAY is a remote-first, global company headquartered in Buenos Aires. For a few of our roles we prioritize in-person collaboration at one of our office locations. Most of our teammates are distributed throughout the globe. Please review the role description and discuss with your recruiter for more details on location.',
  }

  return (
    <>
      {/* AI-friendly page summary */}
      <div className="sr-only">
        <h1>{job.title} - RAY Careers</h1>
        <p>{job.description}</p>
      </div>

      {/* Header */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href={`/${locale}/careers`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-ray-blue transition-colors duration-200 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>
              {locale === 'es' ? 'Volver a todos los roles' : 'Back to all roles'}
            </span>
          </Link>

          {/* Job Title and Apply Button */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-gray-600">
                <h2 className="text-xl sm:text-2xl text-gray-500">
                  {job.location}
                </h2>
                <span className="text-gray-400">•</span>
                <span className="text-base">
                  {job.type} / {job.area || job.department}
                </span>
              </div>
            </div>
            
            {/* Apply Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-ray-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap flex-shrink-0 self-start"
            >
              {locale === 'es' ? 'Aplicar a este rol' : 'Apply for this role'}
            </button>
          </div>
        </div>
      </section>

      {/* Job Details - Two Column Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* What We Look For */}
              {job.whatWeLookFor && (
                <div>
                  <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    {locale === 'es' ? 'Lo Que Buscamos' : 'What We Look For'}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    {formatText(job.whatWeLookFor)}
                  </div>
                </div>
              )}

              {/* Impact */}
              {job.impact && (
                <div>
                  <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    {locale === 'es' ? 'Tu Impacto' : 'Your Impact'}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    {formatText(job.impact)}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && (
                <div>
                  <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    {locale === 'es' ? 'Requisitos Mínimos' : 'Minimum Requirements'}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    {formatText(job.requirements)}
                  </div>
                </div>
              )}

              {/* Pay and Benefits */}
              {job.payAndBenefits && (
                <div>
                  <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    {locale === 'es' ? 'Compensación y Beneficios' : 'Pay and Benefits'}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    {formatText(job.payAndBenefits)}
                  </div>
                </div>
              )}

              {/* Description (if no other fields available) */}
              {job.description && !job.whatWeLookFor && !job.impact && !job.requirements && (
                <div>
                  <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                    {locale === 'es' ? 'Descripción del Puesto' : 'Job Description'}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    {formatText(job.description)}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - About RAY */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8 space-y-6">
                {/* About RAY */}
                <div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {aboutText.aboutTitle}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.aboutP1}</p>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.aboutP2}</p>
                  <p className="text-gray-700 text-sm">{aboutText.aboutP3}</p>
                </div>

                {/* Our Vision */}
                <div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {aboutText.visionTitle}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.visionP1}</p>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.visionP2}</p>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.visionP3}</p>
                  <p className="text-gray-700 text-sm">{aboutText.visionP4}</p>
                </div>

                {/* Our Traction */}
                <div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {aboutText.tractionTitle}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.tractionP1}</p>
                  <p className="text-gray-700 text-sm">{aboutText.tractionP2}</p>
                </div>

                {/* Our Team */}
                <div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {aboutText.teamTitle}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">{aboutText.teamP1}</p>
                  <p className="text-gray-700 text-sm">{aboutText.teamP2}</p>
                </div>

                {/* Where We Work */}
                <div>
                  <h3 className="text-lg font-bold text-ray-dark-900 mb-3">
                    {aboutText.locationTitle}
                  </h3>
                  <p className="text-gray-700 text-sm">{aboutText.locationP1}</p>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-ray-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  {locale === 'es' ? 'Aplicar a este rol' : 'Apply for this role'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
        locale={locale}
      />
    </>
  )
}

export default JobDetail

