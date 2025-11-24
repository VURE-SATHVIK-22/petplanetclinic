import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import VetLogo from '@/components/VetLogo';
import { siteConfig } from '@/config/siteConfig';
import { trackPhoneClick } from '@/utils/analytics';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2" aria-label="Pet Planet Home">
            <VetLogo className="w-8 h-8" color="#f97316" />
            <span className="text-2xl font-bold text-blue-900 font-poppins">
              Pet Planet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-teal-700 transition-colors font-medium ${
                  location.pathname === item.path ? 'text-teal-700 font-semibold' : ''
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
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
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
                className={`block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium ${
                  location.pathname === item.path ? 'text-teal-700 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointments"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium block text-center"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
              onClick={trackPhoneClick}
              className="w-full bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Emergency: {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
