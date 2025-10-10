// EmailJS Debug Utility
// This file helps debug EmailJS configuration issues

import { debugEmailJSConfig } from '@/config/emailjs';

export const debugEmailJS = () => {
  return debugEmailJSConfig();
};

// Call this function in browser console to debug
(window as any).debugEmailJS = debugEmailJS;
