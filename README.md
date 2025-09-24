# RAY Restaurant Website

A modern, responsive website for RAY - a restaurant marketing platform that helps increase revenue by driving more walk-ins, orders, and reviews.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading with lazy loading and code splitting
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **HubSpot Integration**: Contact forms and lead generation
- **TypeScript**: Type-safe development experience

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: HubSpot Forms API
- **Deployment**: Bolt Hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ray-website.git
cd ray-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔗 Deep-Link Handling & Rewrites

This application implements comprehensive deep-link handling to ensure zero 404s:

### Features
- **SPA Routing**: All routes serve `index.html` with proper client-side routing
- **Legacy Redirects**: Old URLs automatically redirect to new canonical paths
- **URL Normalization**: Consistent trailing slash and case handling
- **Asset Path Resolution**: Absolute asset paths work on all nested routes
- **Canonical Domains**: Automatic redirects to canonical `rayapp.io` domain

### Configuration Files
- `public/_redirects` - Netlify redirect rules
- `netlify.toml` - Build and header configuration
- `tests/deep-links.spec.ts` - Comprehensive deep-link testing

### Testing
```bash
# Run deep-link tests
npm run test:deep-links

# Run all tests with UI
npm run test:ui
```

### CI/CD
GitHub Actions automatically tests all critical paths and assets on every deployment to ensure no 404s occur.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔤 Font Validation

To validate font setup and loading:

```bash
# Validate font files and configuration
npm run validate:fonts

# Run all validations
npm run validate:all
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── index.css           # Global styles and Tailwind imports
├── main.tsx            # Application entry point
└── App.tsx             # Main app component

public/
├── images/             # Static images
├── fonts/              # Custom fonts
└── ...                 # Other static assets
```

## 🎨 Design System

The project uses a custom design system built with Tailwind CSS:

- **Colors**: Custom RAY brand colors (ray-blue, ray-green, ray-dark, etc.)
- **Typography**: Chopin.Trial font family
- **Components**: Reusable button, card, and layout components
- **Animations**: Custom CSS animations for enhanced UX

## 📱 Pages

- **Home**: Main landing page with hero, features, and testimonials
- **Case Studies**: Customer success stories and detailed case studies
- **Features**: Detailed feature explanations
- **Pricing**: Pricing plans and packages
- **About**: Company information and team
- **Contact**: Contact form and information
- **Product Pages**: Walk-Ins and Online Orders specific pages

## 🔧 Configuration

### Environment Variables

The project uses HubSpot for form handling. Make sure to configure:

- HubSpot Portal ID: `39590119`
- HubSpot Region: `na1`
- Form IDs are configured in the respective modal components

### Tailwind Configuration

Custom colors and design tokens are defined in `tailwind.config.js`.

## 🚀 Deployment

The project is configured for deployment on Bolt Hosting. The build artifacts are automatically generated and deployed.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@rayapp.io or visit our [contact page](https://rayapp.io/contact).