import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Info } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { galleryImages, galleryCategories, getGalleryByCategory } from '@/data/galleryData';
import { generateBreadcrumbSchema, generateImageSchema } from '@/utils/seo';
import { trackGalleryView } from '@/utils/analytics';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const filteredImages = getGalleryByCategory(selectedCategory);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowInfo(false);
    trackGalleryView(image.title);
  };

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' }
  ]);

  return (
    <>
      <SEO
        title="Photo Gallery - Facilities & Equipment"
        description="Explore Pet Planet Dog Clinic's state-of-the-art facilities, advanced diagnostic equipment, and professional veterinary care environment through our interactive photo gallery."
        keywords={['veterinary clinic photos', 'pet hospital facilities', 'veterinary equipment', 'dog clinic gallery']}
        path="/gallery"
        schema={breadcrumbSchema}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins">
              Our Facilities & Equipment
            </h1>
            <p className="text-xl text-sky-200 max-w-3xl mx-auto">
              Take a virtual tour of our modern clinic, advanced equipment, and compassionate care environment
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-teal-700 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid with Parallax Effect */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => handleImageClick(image)}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  style={{
                    transform: `translateY(${scrollY * image.depth * 0.05}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 font-poppins">
                        {image.title}
                      </h3>
                      <p className="text-white text-sm opacity-90 line-clamp-2">
                        {image.caption}
                      </p>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-teal-700" />
                    </div>

                    {/* Hotspot Indicator */}
                    {image.hotspots && image.hotspots.length > 0 && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Interactive
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Info Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInfo(!showInfo);
              }}
              className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Toggle info"
            >
              <Info className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />

              {/* Hotspots */}
              {selectedImage.hotspots && selectedImage.hotspots.map((hotspot, index) => (
                <div
                  key={index}
                  className="absolute group"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform animate-pulse">
                    {index + 1}
                  </div>
                  <div className="absolute left-12 top-0 bg-white rounded-lg shadow-2xl p-4 w-72 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <h4 className="font-bold text-blue-900 mb-2">{hotspot.label}</h4>
                    <p className="text-sm text-gray-600 mb-2">{hotspot.description}</p>
                    {hotspot.link && (
                      <a
                        href={hotspot.link}
                        className="text-teal-700 text-sm font-medium hover:text-teal-800 pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Info Panel */}
              {showInfo && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2 font-poppins">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {selectedImage.caption}
                  </p>
                  {selectedImage.exif && (
                    <div className="text-sm text-gray-400 space-y-1">
                      <p>Location: {selectedImage.exif.location}</p>
                      <p>Date: {selectedImage.exif.date}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-4xl px-4">
              {filteredImages.map((img) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(img);
                  }}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage.id === img.id
                      ? 'border-teal-500 scale-110'
                      : 'border-white/50 hover:border-white'
                  }`}
                >
                  <img
                    src={img.thumbnail}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
