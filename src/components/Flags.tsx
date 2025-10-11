import React from 'react'

interface FlagProps {
  className?: string
}

export const SpainFlag: React.FC<FlagProps> = ({ className = "w-4 h-3" }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="16" fill="#C60B1E"/>
    <rect y="2" width="24" height="12" fill="#FFC400"/>
    <rect y="6" width="24" height="4" fill="#C60B1E"/>
  </svg>
)

export const USFlag: React.FC<FlagProps> = ({ className = "w-4 h-3" }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="16" fill="#B22234"/>
    <rect y="1.23" width="24" height="1.23" fill="white"/>
    <rect y="3.69" width="24" height="1.23" fill="white"/>
    <rect y="6.15" width="24" height="1.23" fill="white"/>
    <rect y="8.62" width="24" height="1.23" fill="white"/>
    <rect y="11.08" width="24" height="1.23" fill="white"/>
    <rect y="13.54" width="24" height="1.23" fill="white"/>
    <rect width="9.6" height="8.62" fill="#3C3B6E"/>
    <g fill="white">
      <circle cx="1.6" cy="1.6" r="0.4"/>
      <circle cx="3.2" cy="1.6" r="0.4"/>
      <circle cx="4.8" cy="1.6" r="0.4"/>
      <circle cx="6.4" cy="1.6" r="0.4"/>
      <circle cx="8" cy="1.6" r="0.4"/>
      <circle cx="2.4" cy="2.77" r="0.4"/>
      <circle cx="4" cy="2.77" r="0.4"/>
      <circle cx="5.6" cy="2.77" r="0.4"/>
      <circle cx="7.2" cy="2.77" r="0.4"/>
      <circle cx="1.6" cy="3.94" r="0.4"/>
      <circle cx="3.2" cy="3.94" r="0.4"/>
      <circle cx="4.8" cy="3.94" r="0.4"/>
      <circle cx="6.4" cy="3.94" r="0.4"/>
      <circle cx="8" cy="3.94" r="0.4"/>
      <circle cx="2.4" cy="5.11" r="0.4"/>
      <circle cx="4" cy="5.11" r="0.4"/>
      <circle cx="5.6" cy="5.11" r="0.4"/>
      <circle cx="7.2" cy="5.11" r="0.4"/>
      <circle cx="1.6" cy="6.28" r="0.4"/>
      <circle cx="3.2" cy="6.28" r="0.4"/>
      <circle cx="4.8" cy="6.28" r="0.4"/>
      <circle cx="6.4" cy="6.28" r="0.4"/>
      <circle cx="8" cy="6.28" r="0.4"/>
    </g>
  </svg>
)
