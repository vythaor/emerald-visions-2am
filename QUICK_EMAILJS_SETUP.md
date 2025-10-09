# 🚨 URGENT: EmailJS Setup (5 Minutes)

## Current Problem
Your contact form shows: `"EmailJS configuration is incomplete. Please check your environment variables."`

## 🔥 Quick Fix (Choose One)

### Option A: Set Environment Variables (Recommended)
1. **Get your EmailJS credentials** (see steps below)
2. **Add them to your deployment platform:**

#### For Vercel:
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Select your project → Settings → Environment Variables
- Add:
  ```
  VITE_EMAILJS_SERVICE_ID = service_xxxxxxx
  VITE_EMAILJS_TEMPLATE_ID = template_xxxxxxx  
  VITE_EMAILJS_PUBLIC_KEY = user_xxxxxxx
  ```
- Redeploy

#### For Netlify:
- Go to [Netlify Dashboard](https://app.netlify.com)
- Select your site → Site settings → Environment variables
- Add the same variables above
- Redeploy

### Option B: Hardcode Values (Quick Fix)
1. **Get your EmailJS credentials** (see steps below)
2. **Replace in `/src/config/emailjs.ts`:**
   ```typescript
   SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_YOUR_ACTUAL_ID',
   TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_YOUR_ACTUAL_ID',
   PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_YOUR_ACTUAL_KEY',
   ```
3. **Commit and push**

## 📋 Get Your EmailJS Credentials (2 minutes)

### 1. Create Account & Service
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Sign up** (free account)
3. Go to **Email Services** → **Add New Service**
4. Choose **Gmail** → Connect your Gmail
5. **Copy Service ID** (starts with `service_`)

### 2. Create Template
1. Go to **Email Templates** → **Create New Template**
2. **Subject:** `New Contact Form - 2AM Studio`
3. **Content:**
   ```
   New contact form submission:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Service: {{service}}
   
   Message:
   {{message}}
   ```
4. **Copy Template ID** (starts with `template_`)

### 3. Get Public Key
1. Go to **Account** → **General**
2. **Copy Public Key** (starts with `user_`)

## ✅ Test
1. Fill out your contact form
2. Check your email (phvythao@gmail.com)
3. Should work immediately!

## 🆘 Need Help?
- EmailJS free plan: 200 emails/month
- Check browser console for specific errors
- Verify all 3 credentials are correct (no typos)

---
**Your Email:** phvythao@gmail.com
