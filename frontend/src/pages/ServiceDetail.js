import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Calendar, Clock, DollarSign, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { getServiceBySlug, servicesData } from '@/data/services';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { trackServiceView, trackBookingClick } from '@/utils/analytics';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (service) {
      trackServiceView(service.title);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData.filter(s => 
    service.relatedServices?.includes(s.id) || s.category === service.category
  ).slice(0, 3);

  const serviceSchema = generateServiceSchema(service);
  const faqSchema = service.faqs ? generateFAQSchema(service.faqs) : null;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` }
  ]);

  const schemas = [breadcrumbSchema, serviceSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={[service.title, service.category, 'dog care', 'veterinary service']}
        path={`/services/${service.slug}`}
        image={service.image}
        schema={schemas}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-800/80"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link
                to="/services"
                className="inline-flex items-center text-white hover:text-sky-400 transition-colors mb-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Services
              </Link>
              <span className="inline-block bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {service.category}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-poppins">
                {service.title}
              </h1>
              <p className="text-xl text-sky-200 max-w-3xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-6 justify-between items-center">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-teal-700" />
                  <span className="font-medium">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="w-5 h-5 text-teal-700" />
                  <span className="font-medium">{service.priceRange}</span>
                </div>
              </div>
              <Link
                to="/appointments"
                onClick={() => trackBookingClick(service.title)}
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl font-medium flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6 font-poppins">
                    About This Service
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* What to Expect */}
                {service.whatToExpect && (
                  <div className="bg-white rounded-2xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 font-poppins">
                      What to Expect
                    </h2>
                    <ul className="space-y-3">
                      {service.whatToExpect.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-6 h-6 text-teal-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Before Care */}
                {service.beforeCare && (
                  <div className="bg-sky-50 rounded-2xl p-8 border-l-4 border-sky-400">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 font-poppins">
                      Before Your Appointment
                    </h2>
                    <ul className="space-y-2">
                      {service.beforeCare.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* After Care */}
                {service.afterCare && (
                  <div className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-600">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 font-poppins">
                      After Care Instructions
                    </h2>
                    <ul className="space-y-2">
                      {service.afterCare.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 shadow-md">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6 font-poppins">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {service.faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg font-bold text-blue-900 pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-6 h-6 text-teal-700 flex-shrink-0 transition-transform duration-300 ${
                                openFaq === index ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <div
                            className={`transition-all duration-300 overflow-hidden ${
                              openFaq === index ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            <div className="p-6 pt-0 text-gray-700">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-teal-700 to-green-600 rounded-2xl p-8 text-white shadow-xl sticky top-32">
                  <h3 className="text-2xl font-bold mb-4 font-poppins">
                    Ready to Book?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Schedule your appointment online or call us for immediate assistance.
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/appointments"
                      onClick={() => trackBookingClick(service.title)}
                      className="block w-full bg-white text-teal-700 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-bold text-center"
                    >
                      Book Online
                    </Link>
                    <a
                      href="tel:5551234567"
                      className="block w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-center"
                    >
                      Call (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 font-poppins">
                      Related Services
                    </h3>
                    <div className="space-y-3">
                      {relatedServices.map((related) => (
                        <Link
                          key={related.id}
                          to={`/services/${related.slug}`}
                          className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                        >
                          <h4 className="font-bold text-blue-900 mb-1">
                            {related.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {related.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
