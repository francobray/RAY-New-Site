import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ChimbaCaseStudy from '@/components/pages/ChimbaCaseStudy'
import TempleCraftCaseStudy from '@/components/pages/TempleCraftCaseStudy'
import VEHospitalityCaseStudy from '@/components/pages/VEHospitalityCaseStudy'
import GreenEatCaseStudy from '@/components/pages/GreenEatCaseStudy'
import HavannaCaseStudy from '@/components/pages/HavannaCaseStudy'
import CRAFTCaseStudy from '@/components/pages/CRAFTCaseStudy'
import WingsFCCaseStudy from '@/components/pages/WingsFCCaseStudy'
import DolcezzaCaseStudy from '@/components/pages/DolcezzaCaseStudy'
import LaBirraBarCaseStudy from '@/components/pages/LaBirraBarCaseStudy'
import { type Locale } from '@/lib/i18n'

interface Props {
  params: {
    slug: string
    locale: Locale
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
  },
  've-hospitality': {
    title: 'V&E Hospitality Case Study - Restaurant Group Success with RAY Platform',
    description: 'See how V&E Hospitality Group increased revenue across multiple restaurant locations using RAY\'s comprehensive marketing platform.',
    component: VEHospitalityCaseStudy
  },
  'green-eat': {
    title: 'Green Eat Case Study - Sustainable Restaurant Success with RAY Platform',
    description: 'See how Green Eat increased their eco-friendly restaurant\'s visibility and revenue using RAY\'s sustainable marketing platform.',
    component: GreenEatCaseStudy
  },
  'havanna': {
    title: 'Havanna Case Study - Coffee Chain Success with RAY Platform',
    description: 'See how Havanna increased their coffee chain\'s digital presence and customer engagement using RAY\'s comprehensive marketing platform.',
    component: HavannaCaseStudy
  },
  'craft': {
    title: 'CRAFT Case Study - Craft Brewery Success with RAY Platform',
    description: 'See how CRAFT increased their brewery\'s local presence and taproom visits using RAY\'s comprehensive marketing platform.',
    component: CRAFTCaseStudy
  },
  'wingsfc': {
    title: 'WingsFC Case Study - Sports Bar Success with RAY Platform',
    description: 'See how WingsFC increased their sports bar\'s game day revenue and customer engagement using RAY\'s comprehensive marketing platform.',
    component: WingsFCCaseStudy
  },
  'dolcezza': {
    title: 'Dolcezza Case Study - Artisanal Gelato Success with RAY Platform',
    description: 'See how Dolcezza increased their artisanal gelato business\'s local visibility and customer engagement using RAY\'s comprehensive marketing platform.',
    component: DolcezzaCaseStudy
  },
  'la-birra-bar': {
    title: 'La Birra Bar Case Study - Craft Beer Bar Success with RAY Platform',
    description: 'See how La Birra Bar increased their craft beer bar\'s local visibility and customer engagement using RAY\'s comprehensive marketing platform.',
    component: LaBirraBarCaseStudy
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
    { slug: 'temple-craft-wynwood' },
    { slug: 've-hospitality' },
    { slug: 'green-eat' },
    { slug: 'havanna' },
    { slug: 'craft' },
    { slug: 'wingsfc' },
    { slug: 'dolcezza' },
    { slug: 'la-birra-bar' }
  ]
}

export default function CaseStudyPage({ params }: Props) {
  const { slug, locale } = params
  const caseStudy = caseStudyData[slug as keyof typeof caseStudyData]
  
  if (!caseStudy) {
    notFound()
  }

  const Component = caseStudy.component
  return <Component locale={locale} />
}
