import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rayapp.io'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/Favicon/cropped-Favicon_RAY-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/Favicon/cropped-Favicon_RAY-192x192.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: '/Favicon/cropped-Favicon_RAY-180x180.webp', sizes: '180x180', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        url: '/Favicon/cropped-Favicon_RAY-150x150.webp',
        sizes: '150x150',
        type: 'image/webp'
      },
      {
        rel: 'manifest',
        url: '/manifest.json'
      },
    ],
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
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
