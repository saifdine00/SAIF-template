# Formspree Setup Guide

## Setting up Contact Form Email Delivery

To receive emails from your portfolio contact form, you need to set up Formspree:

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account using your email: `saif.fatnassi50@gmail.com`
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Enter form name: "Portfolio Contact Form"
3. Set the email to receive submissions: `saif.fatnassi50@gmail.com`
4. Copy the form endpoint (it will look like: `https://formspree.io/f/YOUR_FORM_ID`)

### Step 3: Update Your Code
1. Open `src/components/Contact.js`
2. Find line 25 with the fetch URL
3. Replace `https://formspree.io/f/xpwzgkqr` with your actual endpoint

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### Step 4: Test the Form
1. Deploy your updated portfolio
2. Fill out the contact form on your website
3. Check your email for the submission

### Features Included:
- ✅ Email notifications to your inbox
- ✅ Form validation
- ✅ Success/error feedback
- ✅ Spam protection
- ✅ Mobile responsive
- ✅ Dark mode support

### Free Plan Limits:
- 50 submissions per month
- Basic spam filtering
- Email notifications

### Pro Plan Benefits (if needed):
- 1000+ submissions per month
- Advanced spam filtering
- File uploads
- Custom redirects
- Webhooks

## Alternative: EmailJS Setup

If you prefer EmailJS instead of Formspree:

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Create account and set up email service
3. Replace the Formspree code with EmailJS implementation

## Troubleshooting

**Form not working?**
- Check browser console for errors
- Verify Formspree endpoint is correct
- Ensure your domain is added to Formspree settings

**Not receiving emails?**
- Check spam folder
- Verify email address in Formspree dashboard
- Test with a different email address

**Need help?**
Contact Formspree support or check their documentation at [https://help.formspree.io](https://help.formspree.io) 