import { Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import { siteConfig } from '@/config/siteConfig';
import { generateBreadcrumbSchema } from '@/utils/seo';

const Appointments = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Appointments', url: '/appointments' }
  ]);

  return (
    <>
      <SEO
        title="Book an Appointment"
        description="Schedule an appointment at Pet Planet Dog Clinic. Online booking available for wellness exams, vaccinations, dental care, and more. Call (555) 123-4567 for immediate assistance."
        keywords={['book veterinary appointment', 'dog clinic appointment', 'schedule vet visit', 'pet appointment online']}
        path="/appointments"
        schema={breadcrumbSchema}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins">
              Book an Appointment
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Schedule your visit online or call us for immediate assistance
            </p>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">
                  Online Booking
                </h3>
                <p className="text-gray-600 mb-4">
                  Schedule at your convenience 24/7
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium">
                  Book Now
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Speak with our team directly
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us your request
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Booking Form Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 font-poppins text-center">
                Online Booking System
              </h2>
              <div className="bg-sky-50 border-2 border-dashed border-sky-300 rounded-xl p-12 text-center">
                <Calendar className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                <p className="text-lg text-gray-700 mb-4">
                  Integrate your preferred booking system here
                </p>
                <p className="text-gray-600">
                  Options: Calendly, Acuity Scheduling, or custom booking system
                </p>
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="mt-12 bg-gradient-to-r from-teal-700 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-poppins text-center">
                Not sure which service you need?
              </h3>
              <p className="text-center mb-6 opacity-90">
                Browse our services to find the right care for your dog
              </p>
              <div className="flex justify-center">
                <Link
                  to="/services"
                  className="bg-white text-teal-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-bold"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Appointments;
