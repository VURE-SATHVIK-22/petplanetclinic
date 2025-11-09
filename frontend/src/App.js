import { useState, useEffect, useRef } from 'react';
import '@/App.css';
import { 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUp, 
  Star,
  Shield,
  Users,
  Building2,
  Calendar,
  Activity,
  Microscope,
  UtensilsCrossed,
  Hotel,
  ChevronLeft,
  ChevronRight,
  Send,
  MessageCircle
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    service: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successCounters, setSuccessCounters] = useState({
    dogsTeated: 0,
    successRate: 0,
    emergencyCases: 0,
    yearsExperience: 0
  });
  const [countersAnimated, setCountersAnimated] = useState(false);
  
  const heroRef = useRef(null);
  const successRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9\s\-\(\)\+]{10,}$/.test(phone);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const errors = { ...formErrors };
    if (name === 'email' && value && !validateEmail(value)) {
      errors.email = 'Invalid email address';
    } else if (name === 'email') {
      delete errors.email;
    }
    
    if (name === 'phone' && value && !validatePhone(value)) {
      errors.phone = 'Invalid phone number';
    } else if (name === 'phone') {
      delete errors.phone;
    }
    
    if (name === 'name' && value.length > 0 && value.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (name === 'name') {
      delete errors.name;
    }
    
    setFormErrors(errors);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!formData.name || formData.name.length < 2) {
      errors.name = 'Name is required';
    }
    if (!formData.email || !validateEmail(formData.email)) {
      errors.email = 'Valid email is required';
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
      errors.phone = 'Valid phone is required';
    }
    if (!formData.dogName) {
      errors.dogName = 'Dog\'s name is required';
    }
    if (!formData.service) {
      errors.service = 'Please select a service';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        dogName: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    {
      icon: <Stethoscope className="w-12 h-12 text-teal-700" />,
      name: 'Wellness Exams',
      description: 'Comprehensive preventive care to keep your dog healthy and happy throughout every life stage.'
    },
    {
      icon: <Syringe className="w-12 h-12 text-teal-700" />,
      name: 'Vaccinations',
      description: 'Complete immunization services to protect your pet from preventable diseases and illnesses.'
    },
    {
      icon: <Activity className="w-12 h-12 text-teal-700" />,
      name: 'Surgical Services',
      description: 'Advanced surgical procedures including spay/neuter and orthopedic surgeries with modern techniques.'
    },
    {
      icon: <Heart className="w-12 h-12 text-teal-700" />,
      name: 'Dental Care',
      description: 'Professional dental cleaning and oral health services to prevent tooth decay and gum disease.'
    },
    {
      icon: <Scissors className="w-12 h-12 text-teal-700" />,
      name: 'Grooming',
      description: 'Professional grooming services to keep your dog looking and feeling their absolute best.'
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-700" />,
      name: 'Emergency Care',
      description: '24/7 emergency veterinary services available for urgent situations and critical care needs.'
    },
    {
      icon: <Hotel className="w-12 h-12 text-teal-700" />,
      name: 'Boarding',
      description: 'Safe and comfortable boarding facilities with personalized care while you\'re away from home.'
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12 text-teal-700" />,
      name: 'Nutrition',
      description: 'Expert nutritional counseling to ensure optimal health through proper diet and feeding plans.'
    },
    {
      icon: <Microscope className="w-12 h-12 text-teal-700" />,
      name: 'Diagnostics',
      description: 'State-of-the-art diagnostic services including X-ray, ultrasound, and laboratory testing.'
    }
  ];

  const testimonials = [
    {
      quote: 'Dr. Martinez and her team saved our Golden Retriever Max when he had a serious emergency. The care and compassion they showed was incredible. We trust them completely with our beloved pet.',
      author: 'Sarah Johnson',
      dog: 'Max, Golden Retriever',
      rating: 5
    },
    {
      quote: 'The dental cleaning service was outstanding! Bella\'s teeth look amazing and the staff was so gentle with her. The facility is spotless and modern. Highly recommend Pet Planet!',
      author: 'Michael Chen',
      dog: 'Bella, Labrador',
      rating: 5
    },
    {
      quote: 'We\'ve been bringing our German Shepherd here for 3 years. The preventive care program keeps Rocky healthy and the boarding service is wonderful. This clinic truly cares about dogs.',
      author: 'Emily Rodriguez',
      dog: 'Rocky, German Shepherd',
      rating: 5
    },
    {
      quote: 'Professional, caring, and knowledgeable staff. They explained everything clearly and made sure Luna was comfortable during her surgery. Recovery was smooth thanks to their excellent post-op care.',
      author: 'David Thompson',
      dog: 'Luna, Beagle',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What are your operating hours?',
      answer: 'We are open Monday through Friday from 8:00 AM to 7:00 PM, Saturdays from 9:00 AM to 5:00 PM, and Sundays from 10:00 AM to 4:00 PM. Our 24/7 emergency services are always available for urgent situations.'
    },
    {
      question: 'Do you handle emergencies?',
      answer: 'Yes! We provide 24/7 emergency veterinary care. If your dog needs immediate attention, call us right away at (555) 123-4567. Our emergency team is always ready to help.'
    },
    {
      question: 'What should I bring to the first appointment?',
      answer: 'Please bring any previous medical records, current medications, vaccination history, and a list of questions you may have. Also bring your dog\'s favorite treats and a leash or carrier.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for major procedures and treatments. We accept all major credit cards, pet insurance, and work with CareCredit for healthcare financing.'
    },
    {
      question: 'Are you accepting new patients?',
      answer: 'Absolutely! We welcome new patients and would love to meet you and your dog. Call us or book online to schedule your first appointment. New patient exams include a comprehensive health assessment.'
    },
    {
      question: 'What vaccinations does my dog need?',
      answer: 'Core vaccinations include Rabies, Distemper, Parvovirus, and Adenovirus. Additional vaccines like Bordetella, Lyme, and Influenza may be recommended based on your dog\'s lifestyle and risk factors.'
    },
    {
      question: 'How often should my dog visit the vet?',
      answer: 'Healthy adult dogs should have annual wellness exams. Puppies need more frequent visits (every 3-4 weeks until 16 weeks), while senior dogs benefit from bi-annual checkups to catch age-related issues early.'
    },
    {
      question: 'Do you offer grooming services?',
      answer: 'Yes! Our professional grooming services include bathing, haircuts, nail trimming, ear cleaning, and teeth brushing. We use gentle, pet-safe products and can accommodate dogs of all sizes and breeds.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95'
        }`}
        data-testid="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2" data-testid="clinic-logo">
              <Heart className="w-8 h-8 text-orange-500 fill-orange-500" />
              <span className="text-2xl font-bold text-blue-900 font-poppins">Pet Planet</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                data-testid="nav-testimonials"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl font-medium"
                data-testid="book-appointment-btn"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium"
                data-testid="mobile-nav-testimonials"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-teal-700 py-2 font-medium"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium"
                data-testid="mobile-book-appointment-btn"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1651212508936-dfb6f6ea3d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGdvbGRlbiUyMHJldHJpZXZlcnxlbnwwfHx8fDE3NjI3MTE4MjV8MA&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
          <div className="lg:w-2/3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins" data-testid="hero-title">
              Pet Planet Dog Clinic
            </h1>
            <p className="text-xl sm:text-2xl text-sky-400 mb-8 font-medium" data-testid="hero-subtitle">
              Where Your Dog's Health Comes First
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl text-lg font-medium"
                data-testid="hero-book-btn"
              >
                Book Appointment
              </button>
              <a
                href="tel:5551234567"
                className="bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl text-lg font-medium flex items-center justify-center gap-2"
                data-testid="hero-emergency-btn"
              >
                <Phone className="w-5 h-5" />
                Emergency: Call Now
              </a>
            </div>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white">
              <div className="flex items-center gap-2" data-testid="trust-badge-licensed">
                <Shield className="w-5 h-5 text-sky-400" />
                <span className="text-sm">Licensed Vets</span>
              </div>
              <div className="flex items-center gap-2" data-testid="trust-badge-emergency">
                <Clock className="w-5 h-5 text-sky-400" />
                <span className="text-sm">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2" data-testid="trust-badge-experience">
                <Star className="w-5 h-5 text-sky-400" />
                <span className="text-sm">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 font-poppins" data-testid="services-title">
              Comprehensive Care for Your Best Friend
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional veterinary services designed to keep your dog healthy, happy, and thriving at every stage of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="scroll-animate bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                data-testid={`service-card-${index}`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins" data-testid={`service-name-${index}`}>
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-teal-700 font-medium hover:text-orange-500 transition-colors flex items-center gap-1"
                  data-testid={`service-learn-more-${index}`}
                >
                  Learn More
                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 font-poppins" data-testid="why-choose-title">
              Why Choose Pet Planet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, compassion, and state-of-the-art facilities to provide the best care for your furry family members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center scroll-animate" data-testid="feature-veterinarians">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">Experienced Veterinarians</h3>
              <p className="text-gray-600">Board-certified vets with decades of combined experience</p>
            </div>

            <div className="text-center scroll-animate" data-testid="feature-facility">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">Modern Facility</h3>
              <p className="text-gray-600">State-of-the-art equipment and comfortable environment</p>
            </div>

            <div className="text-center scroll-animate" data-testid="feature-care">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">Compassionate Care</h3>
              <p className="text-gray-600">Treating every dog with love and individual attention</p>
            </div>

            <div className="text-center scroll-animate" data-testid="feature-availability">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins">24/7 Availability</h3>
              <p className="text-gray-600">Emergency care available whenever you need us</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-700 to-green-600 rounded-3xl p-12 text-center text-white scroll-animate" data-testid="stats-banner">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-testid="stat-treated">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Dogs Treated Monthly</div>
              </div>
              <div data-testid="stat-success">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Success Rate</div>
              </div>
              <div data-testid="stat-years">
                <div className="text-5xl font-bold mb-2">15</div>
                <div className="text-lg opacity-90">Years Serving</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <img
                src="https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg"
                alt="Dr. Martinez with patient"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                data-testid="about-image"
              />
            </div>
            <div className="scroll-animate">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 font-poppins" data-testid="about-title">
                Meet Dr. Sarah Martinez
              </h2>
              <p className="text-lg text-gray-600 mb-6" data-testid="about-bio">
                Dr. Martinez is the founder and lead veterinarian at Pet Planet Dog Clinic. With over 15 years of experience in veterinary medicine and a deep passion for canine health, she established Pet Planet with a mission to provide exceptional, compassionate care to dogs and their families.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A graduate of Cornell University College of Veterinary Medicine, Dr. Martinez specializes in advanced surgical procedures and preventive care. Her approach combines cutting-edge medical techniques with a gentle, patient-centered philosophy that puts your dog's comfort first.
              </p>
              <div className="bg-sky-400 bg-opacity-10 border-l-4 border-sky-400 p-6 mb-8 rounded-r-xl">
                <p className="text-gray-700 italic" data-testid="mission-statement">
                  "Our mission is simple: to treat every dog as if they were our own, providing the highest standard of veterinary care with compassion, integrity, and excellence."
                </p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl font-medium"
                data-testid="meet-team-btn"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-700 to-green-600" data-testid="testimonials-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-poppins" data-testid="testimonials-title">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-white opacity-90">
              Hear from our happy clients and their beloved companions
            </p>
          </div>

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl" data-testid="testimonial-carousel">
            <div className="mb-6">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange-500 fill-orange-500" data-testid={`testimonial-star-${i}`} />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic text-center" data-testid="testimonial-quote">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="text-center">
                <p className="font-bold text-blue-900 text-lg" data-testid="testimonial-author">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-gray-600" data-testid="testimonial-dog">
                  {testimonials[activeTestimonial].dog}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="bg-teal-700 text-white p-2 rounded-full hover:bg-teal-800 transition-colors"
                data-testid="testimonial-prev-btn"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? 'bg-teal-700 w-8' : 'bg-gray-300'
                    }`}
                    data-testid={`testimonial-dot-${index}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="bg-teal-700 text-white p-2 rounded-full hover:bg-teal-800 transition-colors"
                data-testid="testimonial-next-btn"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-orange-600" data-testid="emergency-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="animate-pulse">
                <Phone className="w-12 h-12 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white text-2xl sm:text-3xl font-bold" data-testid="emergency-title">
                  24/7 Emergency Services Available
                </p>
                <a
                  href="tel:5551234567"
                  className="text-white text-xl hover:underline"
                  data-testid="emergency-phone"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-orange-500 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
              data-testid="emergency-learn-more-btn"
            >
              Learn More About Emergency Care
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 font-poppins" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and care
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden scroll-animate"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => setAccordionOpen(accordionOpen === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="text-lg font-bold text-blue-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-teal-700 flex-shrink-0 transition-transform duration-300 ${
                      accordionOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    accordionOpen === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 font-poppins" data-testid="contact-title">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Schedule an appointment or reach out with any questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-animate">
              <form onSubmit={handleFormSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-700`}
                    data-testid="contact-name-input"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1" data-testid="contact-name-error">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-700`}
                    data-testid="contact-email-input"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1" data-testid="contact-email-error">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-700`}
                    data-testid="contact-phone-input"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1" data-testid="contact-phone-error">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="dogName" className="block text-sm font-medium text-gray-700 mb-2">
                    Dog's Name *
                  </label>
                  <input
                    type="text"
                    id="dogName"
                    name="dogName"
                    value={formData.dogName}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.dogName ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-700`}
                    data-testid="contact-dog-name-input"
                  />
                  {formErrors.dogName && (
                    <p className="text-red-500 text-sm mt-1" data-testid="contact-dog-name-error">{formErrors.dogName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.service ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-teal-700`}
                    data-testid="contact-service-select"
                  >
                    <option value="">Select a service</option>
                    <option value="wellness">Wellness Exam</option>
                    <option value="vaccinations">Vaccinations</option>
                    <option value="surgery">Surgery</option>
                    <option value="dental">Dental Care</option>
                    <option value="grooming">Grooming</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="boarding">Boarding</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="diagnostics">Diagnostics</option>
                  </select>
                  {formErrors.service && (
                    <p className="text-red-500 text-sm mt-1" data-testid="contact-service-error">{formErrors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    data-testid="contact-message-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl font-medium flex items-center justify-center gap-2"
                  data-testid="contact-submit-btn"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {formSubmitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-fade-in" data-testid="contact-success-message">
                    Thank you! We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8 scroll-animate">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 font-poppins" data-testid="contact-info-title">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <MapPin className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">123 Veterinary Lane<br />San Francisco, CA 94102</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-phone-info">
                    <Phone className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:5551234567" className="text-gray-600 hover:text-teal-700">(555) 123-4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-email-info">
                    <Mail className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@petplanetclinic.com" className="text-gray-600 hover:text-teal-700">info@petplanetclinic.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-hours">
                    <Clock className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <div className="text-gray-600">
                        <p>Mon-Fri: 8:00 AM - 7:00 PM</p>
                        <p>Sat: 9:00 AM - 5:00 PM</p>
                        <p>Sun: 10:00 AM - 4:00 PM</p>
                        <p className="text-orange-500 font-medium mt-1">24/7 Emergency Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg" data-testid="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086376524954!2d-122.41941548468208!3d37.78825797975771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sUnion%20Square%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635958800000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Pet Planet Dog Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div data-testid="footer-about">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-orange-500 fill-orange-500" />
                <span className="text-xl font-bold font-poppins">Pet Planet</span>
              </div>
              <p className="text-gray-300 text-sm">
                Professional veterinary care for dogs with compassion, expertise, and state-of-the-art facilities.
              </p>
            </div>

            {/* Quick Links */}
            <div data-testid="footer-links">
              <h3 className="font-bold text-lg mb-4 font-poppins">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-sky-400 transition-colors" data-testid="footer-link-home">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-sky-400 transition-colors" data-testid="footer-link-services">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-sky-400 transition-colors" data-testid="footer-link-about">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-sky-400 transition-colors" data-testid="footer-link-contact">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div data-testid="footer-services">
              <h3 className="font-bold text-lg mb-4 font-poppins">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Wellness Exams</li>
                <li>Vaccinations</li>
                <li>Surgery</li>
                <li>Dental Care</li>
                <li>Emergency Care</li>
              </ul>
            </div>

            {/* Contact */}
            <div data-testid="footer-contact">
              <h3 className="font-bold text-lg mb-4 font-poppins">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>123 Veterinary Lane</li>
                <li>San Francisco, CA 94102</li>
                <li>
                  <a href="tel:5551234567" className="hover:text-sky-400 transition-colors">(555) 123-4567</a>
                </li>
                <li>
                  <a href="mailto:info@petplanetclinic.com" className="hover:text-sky-400 transition-colors">info@petplanetclinic.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-300" data-testid="footer-copyright">
                © 2025 Pet Planet Dog Clinic. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <button className="text-gray-300 hover:text-sky-400 transition-colors" data-testid="footer-privacy">
                  Privacy Policy
                </button>
                <button className="text-gray-300 hover:text-sky-400 transition-colors" data-testid="footer-terms">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
        data-testid="whatsapp-float-btn"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-700 text-white p-4 rounded-full shadow-2xl hover:bg-teal-800 transition-all duration-300 transform hover:scale-110 z-50"
          data-testid="back-to-top-btn"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
