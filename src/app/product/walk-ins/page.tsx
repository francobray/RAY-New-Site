import { Metadata } from 'next'
import WalkIns from '@/pages/product/WalkIns'

export const metadata: Metadata = {
  title: 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
  description: 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
  openGraph: {
    title: 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
    description: 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
    url: 'https://rayapp.io/product/walk-ins',
  },
  twitter: {
    title: 'Walk-Ins - Turn Searches Into Restaurant Visits | RAY',
    description: 'Turn searches into walk-ins with RAY\'s AI-powered local marketing platform. Dominate Google Maps, build trust through reviews, and drive 47% more foot traffic.',
  },
  alternates: {
    canonical: 'https://rayapp.io/product/walk-ins',
  },
}

export default function WalkInsPage() {
  return <WalkIns />
}