'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search, Mail, Phone } from 'lucide-react'

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-12">
          <div className="relative inline-block">
            <h1 className="text-9xl sm:text-[12rem] font-black text-ray-blue opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-ray-blue to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best restaurants sometimes change their menu!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/es" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-ray-blue to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Go Home</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Return to our homepage</p>
            </div>
          </Link>

          <Link href="/es/solutions" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Explore Solutions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Discover our 8 solutions</p>
            </div>
          </Link>

          <Link href="/es/contact" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Contact Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Get in touch with our team</p>
            </div>
          </Link>

          <Link href="/es/demo" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Book Demo</h3>
              <p className="text-sm text-gray-600 leading-relaxed">See RAY in action</p>
            </div>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/es/pricing" className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              Pricing Plans
            </Link>
            <Link href="/es/case-studies" className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              Success Stories
            </Link>
            <Link href="/es/product/branded-apps" className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              Branded Apps
            </Link>
            <Link href="/es/product/online-orders" className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              Online Orders
            </Link>
            <Link href="/es/product/loyalty" className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              Loyalty Program
            </Link>
            <Link href="/es/about" className="text-ray-blue hover:text-blue-600 font-medium transition-colors">
              About RAY
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
