import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ChimbaCaseStudy from '@/pages/ChimbaCaseStudy'
import TempleCraftCaseStudy from '@/pages/TempleCraftCaseStudy'

interface Props {
  params: {
    slug: string
  }
}

// Case study data for metadata
const caseStudyData = {
  'chimba-miami': {
    title: 'Chimba Miami Case Study - 215% Increase in Google Maps Directions | RAY',
    description: 'See how Chimba Miami increased Google Maps directions by 215% and foot traffic by 46% using RAY\'s restaurant marketing platform. Real results from Miami\'s top nightlife destination.',
    component: ChimbaCaseStudy
  },
  'temple-craft-wynwood': {
    title: 'Temple Craft Wynwood Case Study - 259% Growth in Local Visibility | RAY',
    description: 'Discover how Temple Craft Wynwood achieved 259% increase in Google Maps visits and 66% more walk-ins with RAY\'s local marketing strategies. Craft beer success story.',
    component: TempleCraftCaseStudy
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const caseStudy = caseStudyData[slug as keyof typeof caseStudyData]
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | RAY',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      url: `https://rayapp.io/case-studies/${slug}`,
    },
    twitter: {
      title: caseStudy.title,
      description: caseStudy.description,
    },
    alternates: {
      canonical: `https://rayapp.io/case-studies/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'chimba-miami' },
    { slug: 'temple-craft-wynwood' }
  ]
}

export default function CaseStudyPage({ params }: Props) {
  const { slug } = params
  const caseStudy = caseStudyData[slug as keyof typeof caseStudyData]
  
  if (!caseStudy) {
    notFound()
  }

  const Component = caseStudy.component
  return <Component />
}
