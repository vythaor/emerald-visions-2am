# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email sending functionality on your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_2am_studio`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

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

4. Save the template and note down your **Template ID** (e.g., `template_contact`)

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `user_xxxxxxxxxxxxx`)

## Step 5: Set Environment Variables

Since you're using GitHub for deployment, you'll need to set these as environment variables in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add these repository secrets:

```
VITE_EMAILJS_SERVICE_ID = your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID = your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY = your_actual_public_key
```

**Note:** The `VITE_` prefix is required for Vite to expose these variables to the frontend.

## Step 6: For Local Development

If you want to test locally, create a `.env.local` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

**Important:** Never commit the `.env.local` file to version control.

## Step 7: Test the Form

1. Start your development server
2. Go to the contact page
3. Fill out and submit the form
4. Check your Gmail inbox for the test email

## Troubleshooting

- **Emails not sending**: Check browser console for error messages
- **Template not found**: Verify your template ID is correct
- **Service not found**: Verify your service ID is correct
- **Invalid public key**: Verify your public key is correct

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- EmailJS has rate limits on free accounts (200 emails/month)

## Production Considerations

- Set up proper domain verification in EmailJS
- Consider upgrading to a paid plan for higher limits
- Monitor email delivery rates
- Set up email templates for different types of inquiries

---

**Your Email:** phvythao@gmail.com
**Studio:** 2AM Studio Photography
