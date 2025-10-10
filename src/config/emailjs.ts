// EmailJS Configuration
// This will be populated by fetching from backend API
export let EMAILJS_CONFIG = {
  SERVICE_ID: 'service_lqh5na5',
  TEMPLATE_ID: 'template_5bugwrq', 
  PUBLIC_KEY: '', // Will be fetched from backend
  
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

// Fetch EmailJS configuration from backend
export const fetchEmailJSConfig = async () => {
  try {
    const backendUrl = import.meta.env.VITE_IMAGE_SERVER_BASE || 
      (import.meta.env.PROD 
        ? 'https://emerald-visions-backend.vercel.app'
        : 'http://localhost:3001'
      );
    
    const response = await fetch(`${backendUrl}/emailjs-config`);
    if (response.ok) {
      const config = await response.json();
      EMAILJS_CONFIG.PUBLIC_KEY = config.publicKey;
      console.log('EmailJS config fetched from backend');
      return true;
    }
  } catch (error) {
    console.warn('Failed to fetch EmailJS config from backend:', error);
  }
  return false;
};

// EmailJS initialization
import emailjs from '@emailjs/browser';

export const initializeEmailJS = async () => {
  // Try to fetch config from backend first
  await fetchEmailJSConfig();
  
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
    EMAILJS_CONFIG.PUBLIC_KEY !== '' // Ensure it's not empty
  );
};
