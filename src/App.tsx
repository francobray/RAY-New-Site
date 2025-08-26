import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for code splitting
const Home = loadable(() => import('./pages/Home'), {
  fallback: <LoadingSpinner />
})

const CaseStudies = loadable(() => import('./pages/CaseStudies'), {
  fallback: <LoadingSpinner />
})

const Features = loadable(() => import('./pages/Features'), {
  fallback: <LoadingSpinner />
})

const Pricing = loadable(() => import('./pages/Pricing'), {
  fallback: <LoadingSpinner />
})

const About = loadable(() => import('./pages/About'), {
  fallback: <LoadingSpinner />
})

const Contact = loadable(() => import('./pages/Contact'), {
  fallback: <LoadingSpinner />
})

const NotFound = loadable(() => import('./pages/NotFound'), {
  fallback: <LoadingSpinner />
})

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App