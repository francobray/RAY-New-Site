'use client'

import React from 'react'
import { Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './shared/BaseButton'

const customers = [
  {
    id: 'chef-burger',
    name: 'Chef Burger',
    owner: 'Tom Cesario',
    title: 'CEO & Founder & CEO, Chef Burger',
    metric: '+$8,000/m',
    category: 'Online Sales',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    bgColor: 'from-gray-800 to-gray-900'
  },
  {
    id: 'green-eat',
    name: 'Green Eat',
    owner: 'Emilio Di Pasquo',
    title: 'CEO - MKT Director, Green Eat Pro Connection',
    metric: 'x3 visits google',
    category: 'Online Sales',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    bgColor: 'from-orange-600 to-orange-700'
  },
  {
    id: 'temple-craft',
    name: 'Temple Craft Wynwood',
    owner: 'Juan Ignacio Chereminiano',
    title: 'CEO - Temple Craft Wynwood',
    metric: '+$12,000/m',
    category: 'Online Sales',
    image: '/images/Temple_Team.jpeg',
    bgColor: 'from-blue-600 to-blue-700'
  },
  {
    id: 'chimba-miami',
    name: 'Chimba Miami',
    owner: 'Franco Yametti',
    title: 'CEO - Chimba Miami',
    metric: '+$14,000/m',
    category: 'Online Sales',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    bgColor: 'from-red-600 to-red-700'
  },
  {
    id: 'dolcezza',
    name: 'Dolcezza',
    owner: 'Violeta Edelman',
    title: 'Co-Founder and co-CEO - Dolcezza',
    metric: '+$8,000/m',
    category: 'Online Sales',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    bgColor: 'from-gray-700 to-gray-800'
  },
  {
    id: 'juan-valdez',
    name: 'Juan Valdez',
    owner: 'Belen Garcia',
    title: 'CMO - Juan Valdez',
    metric: '+$8,000/m',
    category: 'Online Sales',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    bgColor: 'from-amber-600 to-amber-700'
  }
]

const TestimonialCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-ray-blue/10 rounded-full text-ray-blue text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Customer Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ray-dark-900 mb-4">
              Real Results from Real Restaurants
            </h2>
            <p className="text-xl text-ray-darkGray max-w-3xl mx-auto leading-relaxed">
              See how restaurant owners across the country have transformed 
              their business with RAY's marketing platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {customers.map((customer) => (
              <Link
                key={customer.id}
                href={`/case-studies/${customer.id}`}
                className="group block"
              >
                <div className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  {/* Background Image */}
                  <div className="relative aspect-[4/5] h-80">
                    <Image
                      src={customer.image}
                      alt={`${customer.name} restaurant - RAY customer success story showing ${customer.metric} improvement`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${customer.bgColor} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      {/* Top Section - Owner Info */}
                      <div>
                        <div className="text-sm font-medium opacity-90 mb-1">
                          {customer.owner}
                        </div>
                        <div className="text-xs opacity-75 leading-tight">
                          {customer.title}
                        </div>
                      </div>
                      
                      {/* Bottom Section - Restaurant & Metrics */}
                      <div>
                        <div className="mb-3">
                          <h3 className="text-xl font-bold mb-1">
                            {customer.name}
                          </h3>
                          <div className="text-3xl font-bold text-ray-green mb-1">
                            {customer.metric}
                          </div>
                          <div className="text-sm opacity-90">
                            Revenue Growth
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ray-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="primary"
              size="lg"
              href="/case-studies"
              data-analytics="testimonial_carousel"
              aria-label="View all restaurant success stories and case studies"
            >
              View All Success Stories
            </Button>
          </div>
        </div>
    </section>
  )
}

export default TestimonialCarousel