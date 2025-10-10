// EmailJS Debug Utility
// This file helps debug EmailJS configuration issues

import { EMAILJS_CONFIG, isEmailJSConfigured } from '@/config/emailjs';

export const debugEmailJS = () => {
  console.log('EmailJS Configuration:', {
    serviceId: EMAILJS_CONFIG.SERVICE_ID,
    templateId: EMAILJS_CONFIG.TEMPLATE_ID,
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY.substring(0, 10) + '...',
    isConfigured: isEmailJSConfigured()
  });
  return {
    isConfigured: isEmailJSConfigured(),
    serviceId: EMAILJS_CONFIG.SERVICE_ID,
    templateId: EMAILJS_CONFIG.TEMPLATE_ID,
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY
  };
};

// Call this function in browser console to debug
(window as any).debugEmailJS = debugEmailJS;
