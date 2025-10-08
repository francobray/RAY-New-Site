import { Metadata } from 'next'
import About from '@/components/pages/About'

export const metadata: Metadata = {
  title: 'About Us - Restaurant Marketing Experts | RAY',
  description: 'Learn about RAY\'s mission to help restaurants increase revenue through proven marketing strategies. Meet our team of restaurant industry experts.',
  openGraph: {
    title: 'About Us - Restaurant Marketing Experts | RAY',
    description: 'Learn about RAY\'s mission to help restaurants increase revenue through proven marketing strategies. Meet our team of restaurant industry experts.',
    url: 'https://rayapp.io/about',
  },
  twitter: {
    title: 'About Us - Restaurant Marketing Experts | RAY',
    description: 'Learn about RAY\'s mission to help restaurants increase revenue through proven marketing strategies. Meet our team of restaurant industry experts.',
  },
  alternates: {
    canonical: 'https://rayapp.io/about',
  },
}

export default function AboutPage() {
  return <About />
}
