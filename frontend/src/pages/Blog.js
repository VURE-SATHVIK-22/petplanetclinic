import SEO from '@/components/seo/SEO';
import { generateBreadcrumbSchema } from '@/utils/seo';

const Blog = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);

  return (
    <>
      <SEO
        title="Blog & Pet Care Articles"
        description="Expert advice on dog health, wellness, and care from Pet Planet Dog Clinic. Read our latest articles on pet nutrition, behavior, preventive care, and more."
        keywords={['dog care tips', 'pet health articles', 'veterinary blog', 'dog wellness advice']}
        path="/blog"
        schema={breadcrumbSchema}
      />

      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-poppins">
              Blog & Articles
            </h1>
            <p className="text-xl text-sky-200 max-w-2xl mx-auto">
              Expert advice and insights on dog health and wellness
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 shadow-md text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 font-poppins">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-600">
                We're preparing valuable content about dog health, nutrition, and care. Check back soon!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
