import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-ray-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white">
              RAY
            </Link>
            <p className="mt-4 text-ray-gray max-w-md">
              Increase revenue by driving more walk-ins, orders, and reviews with our restaurant marketing platform.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/product/walk-ins" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Increase Walk-Ins
                </Link>
              </li>
              <li>
                <Link to="/product/online-orders" className="text-ray-gray hover:text-white transition-colors duration-200">
                  Online Orders & Bookings
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
                <a href="mailto:hello@rayrestaurant.com" className="text-ray-gray hover:text-white transition-colors duration-200">
                  hello@rayrestaurant.com
                </a>
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