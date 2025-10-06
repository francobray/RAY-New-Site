import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://rayapp.io'),
  title: {
    default: 'RAY - Restaurant Marketing Platform | Increase Revenue by 30%+',
    template: '%s | RAY Restaurant Platform'
  },
  description: 'RAY is the #1 restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews. We guarantee a 30%+ increase in Google Business Profile navigations within 6 months or refund your investment.',
  keywords: ['restaurant marketing', 'restaurant management', 'online ordering', 'restaurant bookings', 'walk-in management', 'restaurant SEO', 'Google Business Profile', 'restaurant reviews'],
  authors: [{ name: 'RAY' }],
  creator: 'RAY',
  publisher: 'RAY',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rayapp.io',
    siteName: 'RAY Restaurant Platform',
    title: 'RAY - Restaurant Marketing Platform | Increase Revenue by 30%+',
    description: 'RAY is the #1 restaurant marketing platform that increases revenue by driving more walk-ins, orders, and reviews.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RAY - Restaurant Marketing Platform',
    description: 'Increase revenue by 30%+ with RAY restaurant marketing platform',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="dns-prefetch" href="https://grader.rayapp.io" />
        <link rel="dns-prefetch" href="https://www.rayapp.io" />
        <meta name="theme-color" content="#0D79E5" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
