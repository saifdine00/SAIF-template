# Saif Eddine Fatnassi - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, experience, and projects as a Full-Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form for inquiries
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading and optimized for performance

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Create React App
- **Deployment**: Vercel/Netlify ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.0 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/saifeddine-fatnassi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment.

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with dark mode toggle
│   ├── Hero.js            # Hero section with introduction
│   ├── Skills.js          # Skills and technologies section
│   ├── Experience.js      # Work experience and education timeline
│   ├── Projects.js        # Featured projects showcase
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with social links
├── App.js                 # Main app component
├── index.js              # React entry point
├── index.css             # Global styles and Tailwind imports
└── ...
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark mode color palette
  }
}
```

### Content
Update the following files to customize content:
- `src/components/Hero.js` - Personal information and introduction
- `src/components/Skills.js` - Skills and technologies
- `src/components/Experience.js` - Work experience and education
- `src/components/Projects.js` - Featured projects
- `src/components/Contact.js` - Contact information

### Resume Download
Place your resume PDF in the `public` folder as `resume.pdf` for the download functionality to work.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The portfolio includes a dark mode toggle that:
- Saves user preference in localStorage
- Respects system preference on first visit
- Smooth transitions between themes

## 📧 Contact Form

The contact form is currently set up with a basic JavaScript handler. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Set up a backend** with Node.js/Express and email service
3. **Use serverless functions** with Vercel or Netlify

## 🔍 SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Structured data markup

## 📊 Performance

Optimizations included:
- Code splitting with React.lazy()
- Image optimization
- Minified CSS and JavaScript
- Efficient animations with Framer Motion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Saif Eddine Fatnassi**
- Email: saif.fatnassi50@gmail.com
- LinkedIn: [fatnassi-saif-eddine](https://www.linkedin.com/in/fatnassi-saif-eddine/)
- GitHub: [saifeddine-fatnassi](https://github.com/saifeddine-fatnassi)
- Phone: +216 94 652 265

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [React Icons](https://react-icons.github.io/react-icons/) - For icons
- [Vercel](https://vercel.com/) - For deployment platform

---

⭐ Star this repository if you found it helpful! # SAIF-template
