// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Using environment variables for security
  // Service ID and Template ID have fallbacks (less sensitive)
  // Public Key must come from environment variables (more sensitive)
  
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lqh5na5',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_5bugwrq', 
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // Email template parameters
  TEMPLATE_PARAMS: {
    to_email: 'phvythao@gmail.com',
    from_name: '',
    from_email: '',
    phone: '',
    service: '',
    message: ''
  }
};

// EmailJS initialization
import emailjs from '@emailjs/browser';

export const initializeEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY.length > 10) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('EmailJS initialized successfully with key:', EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 10) + '...');
    return true;
  } else {
    console.warn('EmailJS PUBLIC_KEY not found or invalid');
    return false;
  }
};

// Check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  return !!(
    EMAILJS_CONFIG.SERVICE_ID && 
    EMAILJS_CONFIG.SERVICE_ID.startsWith('service_') &&
    EMAILJS_CONFIG.TEMPLATE_ID && 
    EMAILJS_CONFIG.TEMPLATE_ID.startsWith('template_') &&
    EMAILJS_CONFIG.PUBLIC_KEY && 
    EMAILJS_CONFIG.PUBLIC_KEY.length > 10 &&
    EMAILJS_CONFIG.PUBLIC_KEY !== '' && // Ensure it's not empty
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Must come from environment variable
  );
};
