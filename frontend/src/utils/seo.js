import { siteConfig } from '@/config/siteConfig';

// Generate page title
export const generateTitle = (pageTitle) => {
  if (!pageTitle) return siteConfig.name;
  return `${pageTitle} | ${siteConfig.name}`;
};

// Generate meta description
export const generateDescription = (description) => {
  return description || siteConfig.description;
};

// Generate canonical URL
export const generateCanonicalUrl = (path) => {
  const baseUrl = siteConfig.seo.siteUrl;
  return `${baseUrl}${path}`;
};

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? generateCanonicalUrl(item.url) : undefined
    }))
  };
};

// Generate LocalBusiness schema
export const generateLocalBusinessSchema = () => {
  const { contact, hours, social } = siteConfig;
  
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.seo.siteUrl,
    "logo": `${siteConfig.seo.siteUrl}/logo.png`,
    "image": `${siteConfig.seo.siteUrl}${siteConfig.seo.image}`,
    "telephone": contact.phone,
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contact.address.street,
      "addressLocality": contact.address.city,
      "addressRegion": contact.address.state,
      "postalCode": contact.address.zip,
      "addressCountry": contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contact.coordinates.lat,
      "longitude": contact.coordinates.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": Object.values(social)
  };
};

// Generate Service schema
export const generateServiceSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "VeterinaryCare",
      "name": siteConfig.name
    },
    "description": service.fullDescription,
    "offers": {
      "@type": "Offer",
      "priceRange": service.priceRange
    },
    "areaServed": {
      "@type": "City",
      "name": siteConfig.contact.address.city
    }
  };
};

// Generate FAQPage schema
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate ImageObject schema
export const generateImageSchema = (image) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": image.url,
    "name": image.title,
    "description": image.alt,
    "caption": image.caption
  };
};

// Generate Article schema for blog posts
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.seo.siteUrl}/logo.png`
      }
    }
  };
};
