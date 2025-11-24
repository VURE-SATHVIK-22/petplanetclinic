import { Users, Award, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/utils/seo';

const About = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
  ]);

  const businessSchema = generateLocalBusinessSchema();

  return (
    <>
      <SEO
        title="About Us - Our Team & Mission"
        description="Meet the experienced veterinary team at Pet Planet Dog Clinic. Over 15 years of compassionate care, state-of-the-art facilities, and dedication to your dog's health."
        keywords={['veterinary team', 'dog clinic staff', 'veterinarian San Francisco', 'pet care professionals']}
        path="/about"
        schema={[breadcrumbSchema, businessSchema]}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg"
            alt="Pet Planet Dog Clinic Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-800/80"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-poppins">
                About Pet Planet
              </h1>
              <p className="text-xl text-sky-200 max-w-2xl">
                Dedicated to providing exceptional veterinary care with compassion and expertise
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6 font-poppins">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "Our mission is simple: to treat every dog as if they were our own, providing the highest standard of veterinary care with compassion, integrity, and excellence."
            </p>
            <p className="text-lg text-gray-600">
              Founded over 15 years ago, Pet Planet Dog Clinic has been serving the San Francisco community with dedication and expertise. Our state-of-the-art facility and experienced team ensure your dog receives the best possible care.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center font-poppins">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                  Compassion
                </h3>
                <p className="text-gray-600">
                  Every pet receives individualized, loving care
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Highest standards of veterinary medicine
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                  Teamwork
                </h3>
                <p className="text-gray-600">
                  Collaborative approach to patient care
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                  Availability
                </h3>
                <p className="text-gray-600">
                  24/7 emergency care when you need us
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center font-poppins">
              Meet Dr. Sarah Martinez
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg"
                  alt="Dr. Sarah Martinez"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 font-poppins">
                  Founder & Lead Veterinarian
                </h3>
                <p className="text-gray-700 mb-4">
                  Dr. Martinez is the founder and lead veterinarian at Pet Planet Dog Clinic. With over 15 years of experience in veterinary medicine and a deep passion for canine health, she established Pet Planet with a mission to provide exceptional, compassionate care to dogs and their families.
                </p>
                <p className="text-gray-700 mb-4">
                  A graduate of Cornell University College of Veterinary Medicine, Dr. Martinez specializes in advanced surgical procedures and preventive care. Her approach combines cutting-edge medical techniques with a gentle, patient-centered philosophy that puts your dog's comfort first.
                </p>
                <div className="bg-sky-50 border-l-4 border-sky-400 p-6 rounded-r-xl">
                  <p className="text-gray-700 italic">
                    "Every dog deserves the best care possible. That's why we invest in the latest technology, continue our education, and treat every patient like family."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-700 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Experience the Pet Planet Difference
            </h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Schedule an appointment and see why families trust us with their beloved pets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg font-bold"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
