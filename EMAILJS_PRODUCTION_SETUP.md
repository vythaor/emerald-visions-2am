# EmailJS Production Setup Guide

## 🚨 **Current Issue**
Your production environment is missing EmailJS environment variables, causing the error:
```
Error: EmailJS configuration is incomplete. Please check your environment variables.
```

## 🔧 **Quick Fix Options**

### **Option 1: Set Environment Variables (Recommended)**

#### **For Vercel:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   ```
   Name: VITE_EMAILJS_SERVICE_ID
   Value: your_actual_service_id
   
   Name: VITE_EMAILJS_TEMPLATE_ID  
   Value: your_actual_template_id
   
   Name: VITE_EMAILJS_PUBLIC_KEY
   Value: your_actual_public_key
   ```
5. **Redeploy** your site

#### **For Netlify:**
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add the same variables as above
5. **Redeploy** your site

### **Option 2: Hardcode Values (Temporary Fix)**

If you can't set environment variables, update the values in `/src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxxxx', // Replace with your actual service ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxxxx', // Replace with your actual template ID
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_xxxxxxxxxxxxx', // Replace with your actual public key
  // ... rest of config
};
```

## 📋 **Getting Your EmailJS Credentials**

If you don't have your EmailJS credentials yet:

### **1. Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### **2. Create Email Service**
1. In EmailJS dashboard → **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Follow setup instructions
5. **Copy your Service ID** (e.g., `service_abc123`)

### **3. Create Email Template**
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:** New Contact Form Submission - 2AM Studio

**Content:**
```
Hello,

You have received a new contact form submission from your 2AM Studio website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
This message was sent from your 2AM Studio contact form.
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### **4. Get Public Key**
1. Go to **Account** → **General**
2. **Copy your Public Key** (e.g., `user_abcdef123456`)

## 🧪 **Testing**

After setup:
1. Go to your contact page
2. Fill out and submit the form
3. Check your Gmail inbox for the test email
4. Check browser console for any errors

## 🔒 **Security Notes**

- ✅ Environment variables are the **secure way** to handle credentials
- ✅ Hardcoded values work but are **less secure**
- ✅ EmailJS has rate limits: **200 emails/month** on free accounts
- ✅ Never commit real credentials to version control

## 🆘 **Troubleshooting**

### **Still getting errors?**
1. **Check console logs** for specific error messages
2. **Verify credentials** are correct (no typos)
3. **Test locally** with `.env.local` file first
4. **Check EmailJS dashboard** for usage limits

### **Common Issues:**
- **"Service not found"** → Check Service ID
- **"Template not found"** → Check Template ID  
- **"Invalid public key"** → Check Public Key
- **"Rate limit exceeded"** → Upgrade EmailJS plan

## 📞 **Need Help?**

If you're still having issues:
1. Check the browser console for detailed error messages
2. Verify all three credentials are correct
3. Test the EmailJS service directly in their dashboard
4. Contact EmailJS support if needed

---

**Your Email:** phvythao@gmail.com  
**Studio:** 2AM Studio Photography
