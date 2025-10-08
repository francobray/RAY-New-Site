import { Metadata } from 'next'
import Contact from '@/components/pages/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with RAY Restaurant Marketing | RAY',
  description: 'Ready to increase your restaurant revenue by 30%+? Contact RAY today for a free consultation and see how our marketing platform can help your business grow.',
  openGraph: {
    title: 'Contact Us - Get Started with RAY Restaurant Marketing | RAY',
    description: 'Ready to increase your restaurant revenue by 30%+? Contact RAY today for a free consultation and see how our marketing platform can help your business grow.',
    url: 'https://rayapp.io/contact',
  },
  twitter: {
    title: 'Contact Us - Get Started with RAY Restaurant Marketing | RAY',
    description: 'Ready to increase your restaurant revenue by 30%+? Contact RAY today for a free consultation and see how our marketing platform can help your business grow.',
  },
  alternates: {
    canonical: 'https://rayapp.io/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}
