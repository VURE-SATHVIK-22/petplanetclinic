import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import VetLogo from '@/components/VetLogo';
import { siteConfig } from '@/config/siteConfig';
import { trackPhoneClick } from '@/utils/analytics';

const Footer = () => {
  const { contact, hours, social } = siteConfig;

  return (
    <footer className="bg-blue-900 text-white py-12" role="contentinfo">
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
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/diagnostic" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Diagnostic
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/services/wellness-exams" className="hover:text-sky-400 transition-colors">
                  Wellness Exams
                </Link>
              </li>
              <li>
                <Link to="/services/vaccinations" className="hover:text-sky-400 transition-colors">
                  Vaccinations
                </Link>
              </li>
              <li>
                <Link to="/services/surgical-services" className="hover:text-sky-400 transition-colors">
                  Surgery
                </Link>
              </li>
              <li>
                <Link to="/services/dental-cleaning" className="hover:text-sky-400 transition-colors">
                  Dental Care
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-care" className="hover:text-sky-400 transition-colors">
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link to="/services/diagnostic-imaging" className="hover:text-sky-400 transition-colors">
                  Diagnostics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <address className="not-italic">
                  {contact.address.street}<br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </address>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                  onClick={trackPhoneClick}
                  className="hover:text-sky-400 transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-sky-400 transition-colors"
                >
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
              <Link to="/privacy" className="hover:text-sky-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-sky-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-sky-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
