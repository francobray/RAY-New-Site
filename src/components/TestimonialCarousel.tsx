import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    restaurant: 'Dolcezza Gelato',
    location: 'Washington, DC',
    rating: 5,
    text: 'RAY helped us increase our walk-in traffic by 47% in just 3 months. Our online reviews improved dramatically, and we\'re seeing more customers than ever before.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'James Chen',
    restaurant: 'V&E Hospitality Group',
    location: 'Florida & Nevada',
    rating: 5,
    text: 'Managing 30+ locations was a nightmare until we found RAY. Their platform streamlined our local marketing across all our restaurants and boosted our overall revenue by 35%.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Sarah Thompson',
    restaurant: 'The Local Bistro',
    location: 'Austin, TX',
    rating: 5,
    text: 'The customer engagement tools are incredible. Our email campaigns now have a 40% open rate, and our loyalty program has increased repeat visits by 60%.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
]

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-ray-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What restaurant owners are saying
          </h2>
          <p className="text-xl text-ray-gray max-w-3xl mx-auto">
            Join hundreds of successful restaurants that have transformed 
            their business with RAY's marketing platform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg text-ray-dark-700 mb-6">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-ray-dark-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-ray-darkGray text-sm">
                  {testimonials[currentIndex].restaurant} • {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-ray-dark-900" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-ray-dark-900" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-ray-gray'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel