import { siteConfig } from '@/config/siteConfig';

// Initialize Google Analytics
export const initAnalytics = () => {
  const { googleAnalyticsId, googleTagManagerId } = siteConfig.analytics;
  
  // Google Analytics 4
  if (googleAnalyticsId && typeof window !== 'undefined') {
    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    document.head.appendChild(script);
    
    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', googleAnalyticsId, {
      page_path: window.location.pathname,
    });
    
    window.gtag = gtag;
  }
  
  // Google Tag Manager
  if (googleTagManagerId && typeof window !== 'undefined') {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',googleTagManagerId);
  }
};

// Track page view
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', siteConfig.analytics.googleAnalyticsId, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track event
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track conversion events
export const trackBookingClick = (service) => {
  trackEvent('booking_click', {
    event_category: 'engagement',
    event_label: service,
    value: 1
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: 'phone_number',
    value: 1
  });
};

export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
    value: 1
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    event_category: 'content',
    event_label: serviceName
  });
};

export const trackEquipmentView = (equipmentName) => {
  trackEvent('equipment_view', {
    event_category: 'content',
    event_label: equipmentName
  });
};

export const trackGalleryView = (imageName) => {
  trackEvent('gallery_view', {
    event_category: 'content',
    event_label: imageName
  });
};

export const trackDownload = (fileName) => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    value: 1
  });
};
