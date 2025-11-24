import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@/App.css';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Pages
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Diagnostic from '@/pages/Diagnostic';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Appointments from '@/pages/Appointments';
import NotFound from '@/pages/NotFound';

// Analytics
import { initAnalytics } from '@/utils/analytics';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/diagnostic" element={<Diagnostic />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
