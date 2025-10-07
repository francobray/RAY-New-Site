import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-ray-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link
              href="/"
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
              RAY is the #1 sales platform helping restaurants attract more customers, grow revenue from walk-ins, orders, and bookings, and protect their reputation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/product/walk-ins" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1" 
                  aria-label="Walk-Ins product page"
                >
                  Walk-Ins
                </Link>
              </li>
              <li>
                <Link
                  href="/product/bookings" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1" 
                  aria-label="Bookings product page"
                >
                  Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/product/online-orders" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1" 
                  aria-label="Online Orders product page"
                >
                  Online Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/product/ai-concierge" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1" 
                  aria-label="AI Concierge product page"
                >
                  AI Concierge
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Case Studies page"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Pricing page"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="About page"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/contact" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Contact page"
                >
                  Get in Touch
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
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/privacy-policy" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Privacy Policy page"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Terms of Service page"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy" 
                  className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md px-1 py-1"
                  aria-label="Cookie Policy page"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575577091289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow RAY on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rayapp.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow RAY on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/therayapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow RAY on X (Twitter)"
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
                aria-label="Follow RAY on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCFx-_4rw0lQR107I5e9M1UA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ray-gray hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ray-blue focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow RAY on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ray-dark-700">
          <p className="text-ray-gray text-sm text-center">
            © 2025 RAY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer