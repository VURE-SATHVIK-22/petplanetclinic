// Site Configuration - Single Source of Truth for UI/UX
export const siteConfig = {
  // Brand Identity
  name: "Pet Planet Dog Clinic",
  tagline: "Where Your Dog's Health Comes First",
  description: "Professional veterinary care for dogs with compassion, expertise, and state-of-the-art facilities. 24/7 emergency services available.",
  
  // Contact Information (NAP)
  contact: {
    phone: "(555) 123-4567",
    email: "info@petplanetclinic.com",
    address: {
      street: "123 Veterinary Lane",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "USA"
    },
    coordinates: {
      lat: 37.78825797975771,
      lng: -122.41941548468208
    }
  },
  
  // Business Hours
  hours: {
    weekday: "Mon-Fri: 8:00 AM - 7:00 PM",
    saturday: "Sat: 9:00 AM - 5:00 PM",
    sunday: "Sun: 10:00 AM - 4:00 PM",
    emergency: "24/7 Emergency Available"
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/petplanetclinic",
    instagram: "https://instagram.com/petplanetclinic",
    twitter: "https://twitter.com/petplanetclinic",
    youtube: "https://youtube.com/@petplanetclinic"
  },
  
  // Modern Color Palette - Premium Healthcare Brand
  colors: {
    primary: "#2C7BE5",      // Primary Blue
    secondary: "#00BFA6",    // Teal Accent
    accent: "#FF8A00",       // CTA Orange
    navy: "#0F1B33",         // Deep Navy
    background: "#F7F9FC",   // Soft White
    text: "#0F1B33",         // Deep Navy (text)
    textLight: "#9BA6B2",    // Neutral Gray
    white: "#FFFFFF",
    glass: "rgba(255, 255, 255, 0.1)",
    glassDark: "rgba(15, 27, 51, 0.8)"
  },
  
  // Typography
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  
  // SEO
  seo: {
    keywords: [
      "dog clinic near me",
      "veterinary clinic San Francisco",
      "dog vaccination",
      "dog dental cleaning",
      "veterinary diagnostics",
      "pet emergency care",
      "dog surgery",
      "pet wellness exams"
    ],
    author: "Pet Planet Dog Clinic",
    siteUrl: "https://petplanetclinic.com",
    image: "/og-image.jpg"
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Replace with actual GA4 ID
    googleTagManagerId: "GTM-XXXXXXX"  // Replace with actual GTM ID
  }
};
