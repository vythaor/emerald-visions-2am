// EmailJS Configuration
// Using direct configuration for reliability
import { ENV_CONFIG } from './env';

export const EMAILJS_CONFIG = {
  // Use environment variables first, then fallback to direct config for non-sensitive data
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || ENV_CONFIG.EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ENV_CONFIG.EMAILJS_TEMPLATE_ID,
  // PUBLIC_KEY must come from environment variables only for security
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

// Debug function to check configuration
export const debugEmailJSConfig = () => {
  console.group('🔍 EmailJS Configuration Debug');
  console.log('Environment Variables:');
  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID || 'NOT SET');
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'NOT SET');
  console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'NOT SET');
  
  console.log('\nFinal Configuration:');
  console.log('SERVICE_ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('TEMPLATE_ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  console.log('PUBLIC_KEY:', EMAILJS_CONFIG.PUBLIC_KEY);
  
  console.log('\nConfiguration Status:');
  console.log('Is Configured:', isEmailJSConfigured());
  
  console.log('\nDetailed Validation:');
  console.log('Service ID valid:', EMAILJS_CONFIG.SERVICE_ID.startsWith('service_'));
  console.log('Template ID valid:', EMAILJS_CONFIG.TEMPLATE_ID.startsWith('template_'));
  console.log('Public Key valid:', EMAILJS_CONFIG.PUBLIC_KEY.length > 10);
  
  console.groupEnd();
  
  return {
    isConfigured: isEmailJSConfigured(),
    serviceId: EMAILJS_CONFIG.SERVICE_ID,
    templateId: EMAILJS_CONFIG.TEMPLATE_ID,
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY
  };
};

// EmailJS initialization
import emailjs from '@emailjs/browser';

export const initializeEmailJS = () => {
  // Debug the configuration
  debugEmailJSConfig();
  
  if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY.length > 10) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialized successfully with key:', EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 10) + '...');
    return true;
  } else {
    console.error('❌ EmailJS PUBLIC_KEY not found or invalid');
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
