'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search, Mail, Phone } from 'lucide-react'

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 - Page Not Found | RAY</title>
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{
          __html: `
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: Inter, system-ui, -apple-system, sans-serif; 
              line-height: 1.6; 
              color: #1C1C1C;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background: linear-gradient(to bottom right, rgb(249 250 251), rgb(255 255 255), rgb(243 244 246));
              min-height: 100vh;
            }
            .container { max-width: 1120px; margin: 0 auto; padding: 1rem; text-align: center; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
            .content { width: 100%; }
            .hero-404 { font-size: 10rem; font-weight: 900; color: #0D79E5; opacity: 0.2; position: relative; display: inline-block; margin-bottom: 3rem; }
            @media (min-width: 640px) { .hero-404 { font-size: 12rem; } }
            .icon-wrapper { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 6rem; height: 6rem; background: linear-gradient(to bottom right, #0D79E5, rgb(37 99 235)); border-radius: 9999px; display: flex; align-items: center; justify-content: center; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
            .icon { width: 3rem; height: 3rem; color: white; }
            .title { font-size: 2.25rem; font-weight: 700; color: rgb(17 24 39); margin-bottom: 1.5rem; }
            @media (min-width: 640px) { .title { font-size: 3rem; } }
            .description { font-size: 1.25rem; color: rgb(75 85 99); margin: 0 auto 2rem; max-width: 42rem; line-height: 1.75; }
            .grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
            @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1024px) { .grid { grid-template-columns: repeat(4, 1fr); } }
            .card { background: white; border-radius: 1rem; padding: 2rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); border: 1px solid rgb(229 231 235); height: 100%; text-decoration: none; display: block; transition: all 0.3s; }
            .card:hover { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); transform: scale(1.05); }
            .card-icon { width: 4rem; height: 4rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; transition: transform 0.3s; }
            .card:hover .card-icon { transform: scale(1.1); }
            .icon-blue { background: linear-gradient(to bottom right, #0D79E5, rgb(37 99 235)); }
            .icon-green { background: linear-gradient(to bottom right, rgb(34 197 94), rgb(5 150 105)); }
            .icon-purple { background: linear-gradient(to bottom right, rgb(168 85 247), rgb(124 58 237)); }
            .icon-orange { background: linear-gradient(to bottom right, rgb(249 115 22), rgb(220 38 38)); }
            .card-icon svg { width: 2rem; height: 2rem; color: white; }
            .card-title { font-weight: 700; color: rgb(17 24 39); margin-bottom: 0.75rem; font-size: 1.125rem; line-height: 1.4; }
            .card-text { font-size: 0.875rem; color: rgb(75 85 99); line-height: 1.5; }
            .links-card { background: white; border-radius: 1rem; padding: 2rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); border: 1px solid rgb(229 231 235); }
            .links-title { font-size: 1.5rem; font-weight: 700; color: rgb(17 24 39); margin-bottom: 1.5rem; }
            .links-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
            @media (min-width: 640px) { .links-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (min-width: 1024px) { .links-grid { grid-template-columns: repeat(3, 1fr); } }
            .link { color: #0D79E5; font-weight: 500; text-decoration: none; transition: color 0.2s; }
            .link:hover { color: rgb(37 99 235); }
            .back-button { display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; background: rgb(243 244 246); color: rgb(55 65 81); font-weight: 500; border-radius: 0.75rem; border: none; cursor: pointer; margin-top: 2rem; transition: background 0.2s; }
            .back-button:hover { background: rgb(229 231 235); }
            .back-icon { width: 1rem; height: 1rem; margin-right: 0.5rem; }
          `
        }} />
      </head>
      <body>
        <div className="container">
          <div className="content">
            {/* 404 Animation */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h1 className="hero-404">404</h1>
                <div className="icon-wrapper">
                  <Search className="icon" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="title">Oops! Page Not Found</h2>
              <p className="description">
                The page you're looking for seems to have vanished into the digital void. 
                Don't worry, even the best restaurants sometimes change their menu!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid">
              <Link href="/es" className="card">
                <div className="card-icon icon-blue">
                  <Home />
                </div>
                <h3 className="card-title">Go Home</h3>
                <p className="card-text">Return to our homepage</p>
              </Link>

              <Link href="/es/solutions" className="card">
                <div className="card-icon icon-green">
                  <Search />
                </div>
                <h3 className="card-title">Explore Solutions</h3>
                <p className="card-text">Discover our 8 solutions</p>
              </Link>

              <Link href="/es/contact" className="card">
                <div className="card-icon icon-purple">
                  <Mail />
                </div>
                <h3 className="card-title">Contact Us</h3>
                <p className="card-text">Get in touch with our team</p>
              </Link>

              <Link href="/es/demo" className="card">
                <div className="card-icon icon-orange">
                  <Phone />
                </div>
                <h3 className="card-title">Book Demo</h3>
                <p className="card-text">See RAY in action</p>
              </Link>
            </div>

            {/* Popular Links */}
            <div className="links-card">
              <h3 className="links-title">Popular Pages</h3>
              <div className="links-grid">
                <Link href="/es/pricing" className="link">Pricing Plans</Link>
                <Link href="/es/case-studies" className="link">Success Stories</Link>
                <Link href="/es/product/branded-apps" className="link">Branded Apps</Link>
                <Link href="/es/product/online-orders" className="link">Online Orders</Link>
                <Link href="/es/product/loyalty" className="link">Loyalty Program</Link>
                <Link href="/es/about" className="link">About RAY</Link>
              </div>
            </div>

            {/* Back Button */}
            <div>
              <button onClick={() => window.history.back()} className="back-button">
                <ArrowLeft className="back-icon" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
