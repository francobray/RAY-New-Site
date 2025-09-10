import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
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

const CaseStudyDetail = loadable(() => import('./pages/CaseStudyDetail'), {
  fallback: <LoadingSpinner />
})

const Features = loadable(() => import('./pages/Features'), {
  fallback: <LoadingSpinner />
})

const WalkIns = loadable(() => import('./pages/product/WalkIns'), {
  fallback: <LoadingSpinner />
})

const OnlineOrders = loadable(() => import('./pages/product/OnlineOrders'), {
  fallback: <LoadingSpinner />
})

const Bookings = loadable(() => import('./pages/product/Bookings'), {
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

const PrivacyPolicy = loadable(() => import('./pages/PrivacyPolicy'), {
  fallback: <LoadingSpinner />
})

const TermsOfService = loadable(() => import('./pages/TermsOfService'), {
  fallback: <LoadingSpinner />
})

const CookiePolicy = loadable(() => import('./pages/CookiePolicy'), {
  fallback: <LoadingSpinner />
})

const TempleCraftCaseStudy = loadable(() => import('./pages/TempleCraftCaseStudy'), {
  fallback: <LoadingSpinner />
})

const ChimbaCaseStudy = loadable(() => import('./pages/ChimbaCaseStudy'), {
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
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/features" element={<Features />} />
            <Route path="/product" element={<Navigate to="/" replace />} />
            <Route path="/products" element={<Navigate to="/" replace />} />
            <Route path="/product/walk-ins" element={<WalkIns />} />
            <Route path="/product/online-orders" element={<OnlineOrders />} />
            <Route path="/product/bookings" element={<Bookings />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/case-studies/temple-craft-wynwood" element={<TempleCraftCaseStudy />} />
            <Route path="/case-studies/chimba-miami" element={<ChimbaCaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App