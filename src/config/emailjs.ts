// EmailJS Configuration
// Using direct configuration for reliability
import { ENV_CONFIG } from './env';

export const EMAILJS_CONFIG = {
  // Use environment variables first, then fallback to direct config for non-sensitive data
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || ENV_CONFIG.EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ENV_CONFIG.EMAILJS_TEMPLATE_ID,
  // PUBLIC_KEY with fallback for Lovable deployment
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ENV_CONFIG.EMAILJS_PUBLIC_KEY,
  
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
    return true;
  } else {
    console.error('EmailJS PUBLIC_KEY not found or invalid');
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
