import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load all pages for optimal code splitting
const Home = lazy(() => import('./pages/Home'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'))
const Features = lazy(() => import('./pages/Features'))
const WalkIns = lazy(() => import('./pages/product/WalkIns'))
const OnlineOrders = lazy(() => import('./pages/product/OnlineOrders'))
const Bookings = lazy(() => import('./pages/product/Bookings'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const TempleCraftCaseStudy = lazy(() => import('./pages/TempleCraftCaseStudy'))
const ChimbaCaseStudy = lazy(() => import('./pages/ChimbaCaseStudy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App