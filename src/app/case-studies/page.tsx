import { Metadata } from 'next'
import CaseStudies from '@/pages/CaseStudies'

export const metadata: Metadata = {
  title: 'Case Studies - Restaurant Marketing Success Stories | RAY',
  description: 'Discover how restaurants increased revenue by 30%+ with RAY\'s marketing platform. Read real success stories and results from our restaurant partners.',
  openGraph: {
    title: 'Case Studies - Restaurant Marketing Success Stories | RAY',
    description: 'Discover how restaurants increased revenue by 30%+ with RAY\'s marketing platform. Read real success stories and results from our restaurant partners.',
    url: 'https://rayapp.io/case-studies',
  },
  twitter: {
    title: 'Case Studies - Restaurant Marketing Success Stories | RAY',
    description: 'Discover how restaurants increased revenue by 30%+ with RAY\'s marketing platform. Read real success stories and results from our restaurant partners.',
  },
  alternates: {
    canonical: 'https://rayapp.io/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
