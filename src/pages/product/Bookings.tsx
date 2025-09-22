import React from 'react'
import { Navigate } from 'react-router-dom'

// Redirect to Walk-Ins product page
const Bookings: React.FC = () => {
  return <Navigate to="/product/walk-ins" replace />
}

export default Bookings