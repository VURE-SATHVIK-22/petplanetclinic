# Pet Planet Dog Clinic - Implementation Guide

## 🎯 Project Status

### ✅ Completed
1. **Project Structure & Configuration**
   - Branch: `feature/3d-gallery-diagnostic-services`
   - Dependencies installed (Three.js, React Router, React Helmet)
   - Site configuration with exact color palette
   - Data models for services, equipment, and gallery

2. **Data & Content**
   - 6 fully detailed services with SEO metadata
   - 10 diagnostic equipment items with specifications
   - 12 gallery images with hotspots and metadata
   - Complete site configuration

3. **Utilities & SEO**
   - SEO utility functions
   - Analytics tracking setup
   - Schema.org generators
   - Meta tag management

### 🚧 In Progress / To Complete

## 📋 Implementation Steps

### Step 1: Update Main App File
Replace `frontend/src/App.js` with `frontend/src/App.new.js` after creating all required pages.

### Step 2: Create Layout Components

#### Header Component (`frontend/src/components/layout/Header.js`)
```javascript
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import VetLogo from '@/components/VetLogo';
import { siteConfig } from '@/config/siteConfig';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <VetLogo className="w-8 h-8" color="#f97316" />
            <span className="text-2xl font-bold text-blue-900 font-poppins">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-teal-700 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-teal-700' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/appointments"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl font-medium"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointments"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium block text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
```

#### Footer Component (`frontend/src/components/layout/Footer.js`)
```javascript
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import VetLogo from '@/components/VetLogo';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  const { contact, hours, social } = siteConfig;

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <VetLogo className="w-6 h-6" color="#f97316" />
              <span className="text-xl font-bold font-poppins">{siteConfig.name}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/diagnostic" className="text-gray-300 hover:text-sky-400 transition-colors">Diagnostic</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-sky-400 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-sky-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Wellness Exams</li>
              <li>Vaccinations</li>
              <li>Surgery</li>
              <li>Dental Care</li>
              <li>Emergency Care</li>
              <li>Diagnostics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  {contact.address.street}<br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-sky-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-sky-400 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{hours.weekday}</p>
                  <p>{hours.saturday}</p>
                  <p>{hours.sunday}</p>
                  <p className="text-orange-400 font-medium mt-1">{hours.emergency}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-sky-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### Step 3: Create Page Components

Create these files in `frontend/src/pages/`:

1. **Home.js** - Use existing App.js content, wrap with SEO component
2. **Services.js** - List all services with categories
3. **ServiceDetail.js** - Individual service pages with full details
4. **Diagnostic.js** - Tabbed equipment catalog
5. **Gallery.js** - 3D photo gallery
6. **About.js** - Team and clinic information
7. **Contact.js** - Contact form and map
8. **Blog.js** - Blog listing
9. **BlogPost.js** - Individual blog posts
10. **Appointments.js** - Booking interface
11. **NotFound.js** - 404 page

### Step 4: Generate Sitemap and Robots.txt

Create `frontend/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://petplanetclinic.com/</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://petplanetclinic.com/services</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://petplanetclinic.com/diagnostic</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://petplanetclinic.com/gallery</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://petplanetclinic.com/about</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://petplanetclinic.com/contact</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://petplanetclinic.com/appointments</loc>
    <lastmod>2024-11-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add individual service pages -->
  <!-- Add blog posts -->
</urlset>
```

### Step 5: Performance Optimization

1. **Image Optimization**
   - Use WebP format with fallbacks
   - Implement lazy loading
   - Add responsive srcset

2. **Code Splitting**
   - Use React.lazy() for route-based splitting
   - Implement Suspense boundaries

3. **Critical CSS**
   - Inline critical CSS in index.html
   - Defer non-critical styles

### Step 6: Testing Checklist

- [ ] All routes working
- [ ] SEO meta tags on all pages
- [ ] Schema.org markup validated
- [ ] Mobile responsive
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Form validation
- [ ] Analytics tracking
- [ ] Performance (Lighthouse > 80)
- [ ] Cross-browser testing

### Step 7: Deployment

1. Update `siteConfig.js` with production URLs
2. Add Google Analytics ID
3. Build production: `npm run build`
4. Deploy to Vercel/Netlify
5. Configure custom domain
6. Submit sitemap to Google Search Console

## 📚 Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Three.js Documentation](https://threejs.org/docs/)
- [Schema.org Veterinarian](https://schema.org/VeterinaryCare)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)

## 🎨 Design System

All components should use:
- Colors from `siteConfig.colors`
- Fonts: Poppins (headings), Open Sans (body)
- Spacing: Tailwind's default scale
- Shadows: Tailwind's shadow utilities
- Animations: Fade-in on scroll (existing)

## 📞 Support

For questions or issues, refer to the PROJECT_IMPLEMENTATION_PLAN.md for detailed specifications.
