# Quick Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Connect Repository**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

## 🌐 Deploy to Netlify

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub account

2. **Deploy from Git**
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build command: `npm run build`
   - Publish directory: `build`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

## 📱 Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `build` folder** to any static hosting service:
   - GitHub Pages
   - Firebase Hosting
   - AWS S3
   - Any web hosting provider

## 🔧 Environment Variables (Optional)

If you add form handling or analytics, you might need:

```bash
# For Vercel
vercel env add REACT_APP_FORM_ENDPOINT

# For Netlify
# Add in Netlify dashboard under Site settings > Environment variables
```

## 📝 Custom Domain (Optional)

1. **In Vercel/Netlify dashboard**
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Automatically provided by both platforms
   - No additional configuration needed

## ✅ Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify dark mode toggle works
- [ ] Check mobile responsiveness
- [ ] Test contact form (if connected)
- [ ] Verify resume download link
- [ ] Check social media links
- [ ] Test performance with Lighthouse

## 🔍 Troubleshooting

**Build fails?**
- Check Node.js version (14+)
- Clear node_modules and reinstall
- Check for any missing dependencies

**Site not loading?**
- Check build output directory
- Verify routing configuration
- Check browser console for errors

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS
- Verify all imports are correct 