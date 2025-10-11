import { type Locale } from '@/lib/i18n'
import { getTranslations } from '@/hooks/useTranslations'
import { isValidLocale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PartnersPageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: PartnersPageProps) {
  const locale = params.locale
  const t = getTranslations(locale)

  return {
    title: t.PARTNERS_PAGE.META_TITLE,
    description: t.PARTNERS_PAGE.META_DESCRIPTION,
  }
}

export default function PartnersPage({ params }: PartnersPageProps) {
  const locale = params.locale as Locale

  if (!isValidLocale(locale)) {
    notFound()
  }

  const t = getTranslations(locale)

  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-ray-dark-900 mb-4">
          {t.PARTNERS_PAGE.MAIN_TITLE_PART1}{' '}
          <span className="text-ray-blue-600">{t.PARTNERS_PAGE.MAIN_TITLE_PART2}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {t.PARTNERS_PAGE.SUBTITLE}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Affiliate Program Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                {t.PARTNERS_PAGE.AFFILIATE_PROGRAM.TITLE}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.PARTNERS_PAGE.AFFILIATE_PROGRAM.SHORT_DESCRIPTION}
              </p>
              <Link href="#" className="text-ray-blue-600 hover:underline font-medium">
                {t.PARTNERS_PAGE.GET_STARTED} &gt;
              </Link>
            </div>
            <p className="text-gray-700 mt-8 text-left">
              {t.PARTNERS_PAGE.AFFILIATE_PROGRAM.DETAILED_DESCRIPTION_PART1}{' '}
              <span className="font-semibold">RAY</span>{' '}
              {t.PARTNERS_PAGE.AFFILIATE_PROGRAM.DETAILED_DESCRIPTION_PART2}{' '}
              <span className="font-semibold">RAY</span>.{' '}
              <Link href="#" className="text-ray-blue-600 hover:underline">
                {t.PARTNERS_PAGE.CLICK_HERE_TO_GET_STARTED}
              </Link>
            </p>
          </div>

          {/* Referral Partnerships Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ray-dark-900 mb-4">
                {t.PARTNERS_PAGE.REFERRAL_PARTNERSHIPS.TITLE}
              </h2>
              <p className="text-gray-600 mb-6">
                {t.PARTNERS_PAGE.REFERRAL_PARTNERSHIPS.SHORT_DESCRIPTION}
              </p>
              <Link href="#" className="text-ray-blue-600 hover:underline font-medium">
                {t.PARTNERS_PAGE.GET_STARTED} &gt;
              </Link>
            </div>
            <p className="text-gray-700 mt-8 text-left">
              {t.PARTNERS_PAGE.REFERRAL_PARTNERSHIPS.DETAILED_DESCRIPTION_PART1}{' '}
              <span className="font-semibold">RAY</span>{' '}
              {t.PARTNERS_PAGE.REFERRAL_PARTNERSHIPS.DETAILED_DESCRIPTION_PART2}{' '}
              <span className="font-semibold">RAY</span>.{' '}
              <Link href="#" className="text-ray-blue-600 hover:underline">
                {t.PARTNERS_PAGE.CLICK_HERE_TO_GET_STARTED}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
