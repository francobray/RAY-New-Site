import React from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Card from './Card'
import LazyImage from './LazyImage'

interface CaseStudyCardProps {
  title: string
  description: string
  image: string
  results: {
    metric: string
    value: string
    improvement: string
  }[]
  location: string
  industry: string
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  image,
  results,
  location,
  industry
}) => {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <LazyImage
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full rounded-lg mb-6"
      />
      
      <div className="flex items-center gap-2 text-sm text-ray-darkGray mb-2">
        <span>{industry}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      
      <h3 className="text-xl font-bold text-ray-dark-900 mb-4">
        {title}
      </h3>
      
      <p className="text-ray-darkGray mb-6">
        {description}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {results.map((result, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-1">
              <TrendingUp className="w-4 h-4 text-ray-green mr-1" />
              <span className="text-lg font-bold text-ray-green">
                {result.value}
              </span>
            </div>
            <div className="text-xs text-ray-darkGray">
              {result.metric}
            </div>
            <div className="text-xs text-ray-dark-700 font-medium">
              {result.improvement}
            </div>
          </div>
        ))}
      </div>
      
      <button className="flex items-center text-ray-blue font-semibold hover:text-blue-600 transition-colors duration-200">
        Read full case study
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </Card>
  )
}

export default CaseStudyCard