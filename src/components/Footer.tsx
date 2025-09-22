import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-ray-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <img 
                src="/images/logo-rayapp-azulwebp-300x150.webp" 
                alt="RAY - Restaurant Marketing Platform" 
                className="h-8 w-auto mb-4"
                width={120}
                height={40}
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
                <Link to="/product/walk-ins" className="text-ray-gray hover:text-white transition-colors duration-200" aria-label="Learn about RAY's Walk-Ins marketing solution">
                  Walk-Ins
                </Link>
              </li>
              <li>
                <Link to="/product/bookings" className="text-ray-gray hover:text-white transition-colors duration-200" aria-label="Learn about RAY's Bookings platform">
                  Bookings
                </Link>
              </li>
              <li>
                <Link to="/product/online-orders" className="text-ray-gray hover:text-white transition-colors duration-200" aria-label="Learn about RAY's Online Orders platform">
                  Online Orders
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ray-gray hover:text-white transition-colors duration-200">
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
                <Link to="/contact" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:hello@rayapp.io" className="text-ray-gray hover:text-white transition-colors duration-200">
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
                <Link to="/privacy-policy" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
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