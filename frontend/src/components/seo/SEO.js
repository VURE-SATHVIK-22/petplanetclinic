import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/siteConfig';
import { generateTitle, generateDescription, generateCanonicalUrl } from '@/utils/seo';

const SEO = ({
  title,
  description,
  keywords,
  image,
  article = false,
  path = '',
  schema,
  noindex = false
}) => {
  const pageTitle = generateTitle(title);
  const pageDescription = generateDescription(description);
  const canonicalUrl = generateCanonicalUrl(path);
  const pageImage = image || `${siteConfig.seo.siteUrl}${siteConfig.seo.image}`;
  const pageKeywords = keywords ? keywords.join(', ') : siteConfig.seo.keywords.join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={siteConfig.seo.author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
