import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Microscope, Activity, Heart, Wind, Smile, Download, ExternalLink, Filter, X } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { diagnosticEquipment, equipmentCategories, getEquipmentByCategory } from '@/data/diagnosticEquipment';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/utils/seo';
import { trackEquipmentView, trackDownload } from '@/utils/analytics';

const iconMap = {
  Camera,
  Microscope,
  Activity,
  Heart,
  Wind,
  Smile
};

const Diagnostic = () => {
  const [activeCategory, setActiveCategory] = useState('imaging');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showHotspots, setShowHotspots] = useState(true);

  const categoryEquipment = getEquipmentByCategory(activeCategory);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Diagnostic Equipment', url: '/diagnostic' }
  ]);

  const businessSchema = generateLocalBusinessSchema();

  const handleEquipmentClick = (equipment) => {
    setSelectedEquipment(equipment);
    setSelectedImage(0);
    trackEquipmentView(equipment.name);
  };

  const handleDownload = (pdfUrl, fileName) => {
    trackDownload(fileName);
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <SEO
        title="Diagnostic Equipment & Technology"
        description="State-of-the-art veterinary diagnostic equipment at Pet Planet Dog Clinic. Digital X-ray, ultrasound, in-house laboratory, anesthesia systems, and advanced monitoring technology."
        keywords={['veterinary diagnostic equipment', 'digital x-ray', 'ultrasound', 'veterinary laboratory', 'anesthesia equipment']}
        path="/diagnostic"
        schema={[breadcrumbSchema, businessSchema]}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins">
                Advanced Diagnostic Equipment
              </h1>
              <p className="text-xl text-sky-200 max-w-3xl mx-auto">
                State-of-the-art technology for accurate diagnoses and effective treatment
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {equipmentCategories.map((category) => {
                const Icon = iconMap[category.icon];
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-teal-700 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Equipment Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryEquipment.map((equipment) => (
                <div
                  key={equipment.id}
                  onClick={() => handleEquipmentClick(equipment)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={equipment.images[0].url}
                      alt={equipment.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        equipment.status === 'In-house'
                          ? 'bg-green-600 text-white'
                          : 'bg-orange-500 text-white'
                      }`}>
                        {equipment.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins group-hover:text-teal-700 transition-colors">
                      {equipment.name}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-3">
                      {equipment.manufacturer} {equipment.model}
                    </p>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {equipment.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        equipment.maintenanceStatus === 'Excellent'
                          ? 'text-green-600'
                          : 'text-orange-600'
                      }`}>
                        {equipment.maintenanceStatus} Condition
                      </span>
                      <span className="text-teal-700 font-medium group-hover:text-orange-500 transition-colors">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Detail Modal */}
        {selectedEquipment && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedEquipment(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-6xl w-full my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 font-poppins">
                    {selectedEquipment.name}
                  </h2>
                  <p className="text-gray-600">
                    {selectedEquipment.manufacturer} {selectedEquipment.model}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEquipment(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <img
                      src={selectedEquipment.images[selectedImage].url}
                      alt={selectedEquipment.images[selectedImage].caption}
                      className="w-full h-96 object-cover"
                    />
                    
                    {/* Hotspots */}
                    {showHotspots && selectedEquipment.images[selectedImage].hotspots && (
                      <>
                        {selectedEquipment.images[selectedImage].hotspots.map((hotspot, index) => (
                          <div
                            key={index}
                            className="absolute group"
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                          >
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-110 transition-transform animate-pulse">
                              {index + 1}
                            </div>
                            <div className="absolute left-10 top-0 bg-white rounded-lg shadow-xl p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              <h4 className="font-bold text-blue-900 mb-1">{hotspot.label}</h4>
                              <p className="text-sm text-gray-600">{hotspot.description}</p>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {selectedEquipment.images[selectedImage].caption}
                  </p>
                  
                  {/* Image Thumbnails */}
                  {selectedEquipment.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedEquipment.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImage === index
                              ? 'border-teal-700'
                              : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {selectedEquipment.images[selectedImage].hotspots && (
                    <button
                      onClick={() => setShowHotspots(!showHotspots)}
                      className="mt-4 text-sm text-teal-700 hover:text-teal-800 font-medium"
                    >
                      {showHotspots ? 'Hide' : 'Show'} Interactive Hotspots
                    </button>
                  )}
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                      Description
                    </h3>
                    <p className="text-gray-700">
                      {selectedEquipment.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                      Purpose
                    </h3>
                    <p className="text-gray-700">
                      {selectedEquipment.purpose}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                      Specifications
                    </h3>
                    <ul className="space-y-2">
                      {selectedEquipment.specifications.map((spec, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-700 mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 font-poppins">
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEquipment.applications.map((app, index) => (
                        <span
                          key={index}
                          className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {selectedEquipment.pdfManual && (
                      <button
                        onClick={() => handleDownload(selectedEquipment.pdfManual, `${selectedEquipment.name}-manual.pdf`)}
                        className="flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-colors font-medium"
                      >
                        <Download className="w-5 h-5" />
                        Download Manual
                      </button>
                    )}
                    {selectedEquipment.relatedServices && selectedEquipment.relatedServices.length > 0 && (
                      <Link
                        to={`/services/${selectedEquipment.relatedServices[0]}`}
                        className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Related Service
                      </Link>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Status:</span>
                        <span className="ml-2 font-medium text-gray-900">
                          {selectedEquipment.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Condition:</span>
                        <span className="ml-2 font-medium text-green-600">
                          {selectedEquipment.maintenanceStatus}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600">Last Maintenance:</span>
                        <span className="ml-2 font-medium text-gray-900">
                          {new Date(selectedEquipment.lastMaintenance).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Diagnostic;
