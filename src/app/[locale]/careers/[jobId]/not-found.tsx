'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

export default function JobNotFound() {
  const params = useParams()
  const locale = (params?.locale as Locale) || 'en'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-ray-dark-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-ray-dark-900 mb-4">
          {locale === 'es' ? 'Posición no Encontrada' : 'Job Opening Not Found'}
        </h2>
        <p className="text-xl text-ray-dark-700 mb-8">
          {locale === 'es' 
            ? 'La posición que buscas no existe o ha sido removida.'
            : 'The job opening you\'re looking for doesn\'t exist or has been removed.'
          }
        </p>
        <Link
          href={`/${locale}/careers`}
          className="inline-flex items-center gap-2 bg-ray-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          {locale === 'es' ? 'Volver a Todas las Posiciones' : 'Back to All Job Openings'}
        </Link>
      </div>
    </div>
  )
}

