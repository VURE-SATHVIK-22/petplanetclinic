import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { servicesData, serviceCategories, getFeaturedServices } from '@/data/services';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { trackServiceView } from '@/utils/analytics';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(service => service.category === selectedCategory);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      <SEO
        title="Veterinary Services"
        description="Comprehensive veterinary services for dogs at Pet Planet Dog Clinic: wellness exams, vaccinations, dental care, surgery, diagnostics, and 24/7 emergency care. Book online today."
        keywords={['dog veterinary services', 'pet wellness exams', 'dog vaccinations', 'veterinary surgery', 'dog dental care', 'emergency vet']}
        path="/services"
        schema={[breadcrumbSchema, businessSchema]}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins">
                Comprehensive Veterinary Services
              </h1>
              <p className="text-xl text-sky-200 max-w-3xl mx-auto mb-8">
                Professional care for every stage of your dog's life, from routine wellness to advanced surgical procedures
              </p>
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl text-lg font-bold"
              >
                <Calendar className="w-6 h-6" />
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-teal-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  onClick={() => trackServiceView(service.title)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                    {service.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 font-poppins group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="font-semibold text-teal-700">
                        {service.priceRange}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-teal-700 font-medium group-hover:text-orange-500 transition-colors">
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-700 to-green-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Schedule an Appointment?
            </h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Our experienced veterinary team is here to provide the best care for your dog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl text-lg font-bold"
              >
                Book Online
              </Link>
              <a
                href="tel:5551234567"
                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl text-lg font-bold"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
