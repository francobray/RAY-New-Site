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
import AlmacenDePizzasCaseStudy from '@/components/pages/AlmacenDePizzasCaseStudy'
import IslaBarCaseStudy from '@/components/pages/IslaBarCaseStudy'
import LaParolacciaCaseStudy from '@/components/pages/LaParolacciaCaseStudy'
import LibertinoCafeCaseStudy from '@/components/pages/LibertinoCafeCaseStudy'
import CervezaPatagoniaCaseStudy from '@/components/pages/CervezaPatagoniaCaseStudy'
import KarneGaribaldiCaseStudy from '@/components/pages/KarneGaribaldiCaseStudy'
import LaGuitarritaCaseStudy from '@/components/pages/LaGuitarritaCaseStudy'
import LePainQuotidienCaseStudy from '@/components/pages/LePainQuotidienCaseStudy'
import LaPaneraRosaCaseStudy from '@/components/pages/LaPaneraRosaCaseStudy'
import NininaCaseStudy from '@/components/pages/NininaCaseStudy'
import PastaRossaCaseStudy from '@/components/pages/PastaRossaCaseStudy'
import RapanuiCaseStudy from '@/components/pages/RapanuiCaseStudy'
import TeaConnectionCaseStudy from '@/components/pages/TeaConnectionCaseStudy'
import TostadoCaseStudy from '@/components/pages/TostadoCaseStudy'
import YPFFullCaseStudy from '@/components/pages/YPFFullCaseStudy'
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
    title: 'Chimba Miami - 215% Increase in Directions | RAY',
    description: 'See how Chimba Miami increased Google Maps directions by 215% and foot traffic by 46% using RAY\'s restaurant marketing platform. Real results from Miami\'s top nightlife destination.',
    component: ChimbaCaseStudy
  },
  'temple-craft-wynwood': {
    title: 'Temple Craft Wynwood - 259% Growth in Visibility | RAY',
    description: 'Discover how Temple Craft Wynwood achieved 259% increase in Google Maps visits and 66% more walk-ins with RAY\'s local marketing strategies. Craft beer success story.',
    component: TempleCraftCaseStudy
  },
  've-hospitality': {
    title: 'V&E Hospitality - Restaurant Group Success | RAY',
    description: 'See how V&E Hospitality Group increased revenue across multiple restaurant locations using RAY\'s comprehensive marketing platform.',
    component: VEHospitalityCaseStudy
  },
  'green-eat': {
    title: 'Green Eat - Sustainable Restaurant Success | RAY',
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
    title: 'La Birra Bar - Craft Beer Bar Success | RAY',
    description: 'See how La Birra Bar increased their craft beer bar\'s local visibility and customer engagement using RAY\'s comprehensive marketing platform.',
    component: LaBirraBarCaseStudy
  },
  'almacen-de-pizzas': {
    title: 'Almacen de Pizzas - 247% Growth in Delivery | RAY',
    description: 'See how Almacen de Pizzas achieved 247% increase in delivery orders and cut third-party commissions using RAY\'s zero-commission platform.',
    component: AlmacenDePizzasCaseStudy
  },
  'isla-bar': {
    title: 'Isla Bar - 312% Growth in Bookings | RAY',
    description: 'Discover how Isla Bar achieved 312% increase in online bookings across 8 locations with RAY\'s unified platform.',
    component: IslaBarCaseStudy
  },
  'la-parolaccia': {
    title: 'La Parolaccia - 198% Growth in Visibility | RAY',
    description: 'See how La Parolaccia achieved 198% increase in Google Maps visibility and became the top Italian restaurant locally.',
    component: LaParolacciaCaseStudy
  },
  'libertino-cafe': {
    title: 'Libertino Cafe Case Study - 276% Growth in Morning Traffic | RAY',
    description: 'Learn how Libertino Cafe achieved 276% increase in morning traffic with loyalty programs and mobile ordering.',
    component: LibertinoCafeCaseStudy
  },
  'cerveza-patagonia': {
    title: 'Cerveza Patagonia - 334% Growth in Events | RAY',
    description: 'See how Cerveza Patagonia achieved 334% increase in event bookings and became the premier craft beer venue.',
    component: CervezaPatagoniaCaseStudy
  },
  'karne-garibaldi': {
    title: 'Karne Garibaldi Case Study - 289% Growth in Table Turnover | RAY',
    description: 'Discover how Karne Garibaldi achieved 289% increase in table turnover with smart waitlist management.',
    component: KarneGaribaldiCaseStudy
  },
  'la-guitarrita': {
    title: 'La Guitarrita Case Study - 267% Growth in Delivery Orders | RAY',
    description: 'See how La Guitarrita achieved 267% increase in delivery orders with WhatsApp ordering and catering.',
    component: LaGuitarritaCaseStudy
  },
  'le-pain-quotidien': {
    title: 'Le Pain Quotidien - 223% Growth in Bookings | RAY',
    description: 'Learn how Le Pain Quotidien achieved 223% increase in bookings with unified multi-location platform.',
    component: LePainQuotidienCaseStudy
  },
  'la-panera-rosa': {
    title: 'La Panera Rosa - 256% Growth in Breakfast | RAY',
    description: 'See how La Panera Rosa achieved 256% increase in breakfast orders with branded mobile app.',
    component: LaPaneraRosaCaseStudy
  },
  'ninina': {
    title: 'Ninina Case Study - 294% Growth in Lunch Orders | RAY',
    description: 'Discover how Ninina achieved 294% increase in lunch orders with corporate catering platform.',
    component: NininaCaseStudy
  },
  'pasta-rossa': {
    title: 'Pasta Rossa Case Study - 278% Growth in Reservations | RAY',
    description: 'See how Pasta Rossa achieved 278% increase in reservations and filled tables consistently.',
    component: PastaRossaCaseStudy
  },
  'rapanui': {
    title: 'Rapanui Case Study - 305% Growth in Online Orders | RAY',
    description: 'Learn how Rapanui achieved 305% increase in online orders with branded app and digital ecosystem.',
    component: RapanuiCaseStudy
  },
  'tea-connection': {
    title: 'Tea Connection - 234% Growth in Tea Bookings | RAY',
    description: 'See how Tea Connection achieved 234% increase in afternoon tea bookings with experience platform.',
    component: TeaConnectionCaseStudy
  },
  'tostado': {
    title: 'Tostado Case Study - 318% Growth in Breakfast Delivery | RAY',
    description: 'Discover how Tostado achieved 318% increase in breakfast delivery with subscription plans.',
    component: TostadoCaseStudy
  },
  'ypf-full': {
    title: 'YPF Full Case Study - 342% Growth in Quick Service Orders | RAY',
    description: 'See how YPF Full achieved 342% increase in quick service orders across 50+ locations.',
    component: YPFFullCaseStudy
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = params
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
      url: `https://rayapp.io/${locale}/case-studies/${slug}`,
    },
    twitter: {
      title: caseStudy.title,
      description: caseStudy.description,
    },
    alternates: {
      canonical: `https://rayapp.io/${locale}/case-studies/${slug}`,
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
    { slug: 'la-birra-bar' },
    { slug: 'almacen-de-pizzas' },
    { slug: 'efes-mg-group' },
    { slug: 'la-parolaccia' },
    { slug: 'libertino-cafe' },
    { slug: 'cerveza-patagonia' },
    { slug: 'karne-garibaldi' },
    { slug: 'la-guitarrita' },
    { slug: 'le-pain-quotidien' },
    { slug: 'la-panera-rosa' },
    { slug: 'ninina' },
    { slug: 'pasta-rossa' },
    { slug: 'rapanui' },
    { slug: 'tea-connection' },
    { slug: 'tostado' },
    { slug: 'ypf-full' }
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
