// EmailJS Debug Utility
// This file helps debug EmailJS configuration issues

import { EMAILJS_CONFIG, isEmailJSConfigured } from '@/config/emailjs';

export const debugEmailJS = () => {
  console.group('🔍 EmailJS Configuration Debug');
  
  // Check environment variables
  console.log('Environment Variables:');
  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID || 'NOT SET');
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'NOT SET');
  console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'NOT SET');
  
  // Check final config
  console.log('\nFinal Configuration:');
  console.log('SERVICE_ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('TEMPLATE_ID:', EMAILJS_CONFIG.TEMPLATE_ID);
  console.log('PUBLIC_KEY:', EMAILJS_CONFIG.PUBLIC_KEY);
  
  // Check if properly configured
  console.log('\nConfiguration Status:');
  console.log('Is Configured:', isEmailJSConfigured());
  
  // Detailed validation
  console.log('\nDetailed Validation:');
  console.log('Service ID valid:', EMAILJS_CONFIG.SERVICE_ID.startsWith('service_'));
  console.log('Template ID valid:', EMAILJS_CONFIG.TEMPLATE_ID.startsWith('template_'));
  console.log('Public Key valid:', EMAILJS_CONFIG.PUBLIC_KEY.startsWith('user_'));
  
  console.groupEnd();
  
  return {
    isConfigured: isEmailJSConfigured(),
    serviceId: EMAILJS_CONFIG.SERVICE_ID,
    templateId: EMAILJS_CONFIG.TEMPLATE_ID,
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY
  };
};

// Call this function in browser console to debug
(window as any).debugEmailJS = debugEmailJS;
