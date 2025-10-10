import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { type Locale } from '@/lib/i18n'
import packageJson from '../../package.json'

interface FooterProps {
  locale: Locale
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations(locale)
  return (
    <footer className="bg-ray-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link
              href={`/${locale}`}
              className="flex items-center hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-lg"
              aria-label="RAY homepage"
            >
              <Image
                src="/images/logo-rayapp-azulwebp-300x150.webp"
                alt="RAY - Restaurant Marketing Platform"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-ray-gray max-w-md">
              {t.COMPANY.DESCRIPTION}
            </p>
            
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575577091289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label={locale === 'es' ? 'Seguir a RAY en Facebook' : 'Follow RAY on Facebook'}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rayapp.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label={locale === 'es' ? 'Seguir a RAY en Instagram' : 'Follow RAY on Instagram'}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/therayapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label={locale === 'es' ? 'Seguir a RAY en X (Twitter)' : 'Follow RAY on X (Twitter)'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/rayapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label={locale === 'es' ? 'Seguir a RAY en LinkedIn' : 'Follow RAY on LinkedIn'}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCFx-_4rw0lQR107I5e9M1UA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label={locale === 'es' ? 'Seguir a RAY en YouTube' : 'Follow RAY on YouTube'}
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {locale === 'es' ? 'Productos' : 'Products'}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href={`/${locale}/product/restaurant-website-ai`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página del Constructor de Sitios Web' : 'Website Builder product page'}
                >
                  {locale === 'es' ? 'Constructor de Sitios Web' : 'Website Builder'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/online-orders`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Pedidos Online' : 'Online Orders product page'}
                >
                  {locale === 'es' ? 'Pedidos Online' : 'Online Orders'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/direct-bookings`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Reservas Directas' : 'Direct Bookings product page'}
                >
                  {locale === 'es' ? 'Reservas Directas' : 'Direct Bookings'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/walk-ins`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Walk-Ins' : 'Walk-Ins product page'}
                >
                  {locale === 'es' ? 'Walk-Ins' : 'Walk-Ins'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/whatsapp-delivery`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Delivery por WhatsApp' : 'WhatsApp Delivery product page'}
                >
                  {locale === 'es' ? 'Delivery por WhatsApp' : 'WhatsApp Delivery'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/branded-apps`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de App Móvil' : 'Mobile App product page'}
                >
                  {locale === 'es' ? 'App Móvil' : 'Mobile App'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/loyalty`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Programa de Lealtad' : 'Loyalty Program product page'}
                >
                  {locale === 'es' ? 'Programa de Lealtad' : 'Loyalty Program'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/ai-concierge`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Conserje IA' : 'AI Concierge product page'}
                >
                  {locale === 'es' ? 'Conserje IA' : 'AI Concierge'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/automated-marketing`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Marketing Automatizado' : 'Automated Marketing product page'}
                >
                  {locale === 'es' ? 'Marketing Automatizado' : 'Automated Marketing'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product/zero-commission-delivery`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Delivery Sin Comisión' : 'Zero-Commission Delivery product page'}
                >
                  {locale === 'es' ? 'Delivery Sin Comisión' : 'Zero-Commission Delivery'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {locale === 'es' ? 'Navegación' : 'Navigation'}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href={`/${locale}/case-studies`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Casos de Éxito' : 'Case Studies page'}
                >
                  {locale === 'es' ? 'Casos de Éxito' : 'Case Studies'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/pricing`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Precios' : 'Pricing page'}
                >
                  {locale === 'es' ? 'Precios' : 'Pricing'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Nosotros' : 'About page'}
                >
                  {locale === 'es' ? 'Nosotros' : 'About'}
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.rayapp.io/?utm_source=footer&utm_medium=website&utm_campaign=site-cta-refresh-2025q4&utm_content=nav-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Visit RAY Blog - opens in new tab"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {locale === 'es' ? 'Contacto' : 'Contact'}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de contacto' : 'Contact page'}
                >
                  {locale === 'es' ? 'Ponte en Contacto' : 'Get in Touch'}
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:hello@rayapp.io" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Email hello@rayapp.io"
                >
                  hello@rayapp.io
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {locale === 'es' ? 'Legal' : 'Legal'}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Política de Privacidad' : 'Privacy Policy page'}
                >
                  {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms-of-service`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Términos de Servicio' : 'Terms of Service page'}
                >
                  {locale === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cookie-policy`}
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label={locale === 'es' ? 'Página de Política de Cookies' : 'Cookie Policy page'}
                >
                  {locale === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ray-dark-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-ray-gray text-sm text-center sm:text-left">
              {locale === 'es' ? '© 2025 RAY. Todos los derechos reservados.' : '© 2025 RAY. All rights reserved.'}
            </p>
            <p className="text-ray-dark-600 text-xs mt-2 sm:mt-0 opacity-50">
              v{packageJson.version}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer