import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import { generateLocalBusinessSchema } from '@/utils/seo';
import { siteConfig } from '@/config/siteConfig';

// Import the existing home page content from App.js
// This will be the existing single-page app content
// For now, creating a simple home page that links to all sections

const Home = () => {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      <SEO
        title={null}
        description={siteConfig.description}
        keywords={siteConfig.seo.keywords}
        path="/"
        schema={businessSchema}
      />
      
      <div className="pt-20">
        {/* This would contain the existing App.js content */}
        {/* For now, redirecting to show the structure is in place */}
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-teal-800">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-6 font-poppins">
              Pet Planet Dog Clinic
            </h1>
            <p className="text-2xl mb-8 text-sky-200">
              Where Your Dog's Health Comes First
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/services"
                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg font-bold"
              >
                Our Services
              </Link>
              <Link
                to="/diagnostic"
                className="bg-teal-700 text-white px-8 py-4 rounded-full hover:bg-teal-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg font-bold"
              >
                Diagnostic Equipment
              </Link>
              <Link
                to="/gallery"
                className="bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg font-bold"
              >
                Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
