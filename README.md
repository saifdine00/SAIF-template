# SAIF-template

# Saif Eddine Fatnassi - Portfolio Website

A modern, responsive developer portfolio built with React and Tailwind CSS, showcasing my skills, experience, and projects as a Full-Stack Developer.

🌐 **Live Demo**: [https://saif-template-00.vercel.app/](https://saif-template-00.vercel.app/)

## ✨ Recent Updates

### 🚀 Latest Enhancements (v2.0)
- **📧 Working Contact Form**: Integrated with Formspree to send emails directly to `saif.fatnassi50@gmail.com`
- **🎨 Improved Spacing**: Reduced excessive spacing between sections for better visual flow
- **🖱️ Cleaner Hero**: Removed distracting mouse scroll animation for a cleaner look
- **📱 Enhanced UX**: Better form validation, success feedback, and error handling

## 🎯 Features

- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌙 Dark/Light Mode**: Toggle between themes with smooth transitions
- **✨ Smooth Animations**: Powered by Framer Motion for engaging interactions
- **📧 Functional Contact Form**: Direct email integration via Formspree
- **🎨 Modern Design**: Clean, professional layout with gradient accents
- **⚡ Fast Performance**: Optimized build with 107.97 kB gzipped bundle
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Icons**: React Icons (Feather Icons, Simple Icons)
- **Form Handling**: Formspree integration
- **Build Tool**: Create React App
- **Deployment**: Vercel/Netlify ready

## 📋 Sections

1. **🏠 Hero Section**: Introduction with social links and CTA buttons
2. **💼 Skills & Technologies**: Categorized technical skills with interactive icons
3. **👨‍💼 Experience**: Professional timeline with work experience and education
4. **🚀 Featured Projects**: Showcase of recent work with detailed descriptions
5. **📞 Contact**: Functional contact form with multiple contact methods

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/saif-portfolio.git
   cd saif-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📧 Contact Form Setup

To receive emails from the contact form:

1. **Set up Formspree** (recommended):
   - Follow the detailed guide in `FORMSPREE_SETUP.md`
   - Create account at [formspree.io](https://formspree.io)
   - Update the endpoint in `src/components/Contact.js`

2. **Alternative**: Use EmailJS or other email services

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

See `deploy.md` for detailed deployment instructions.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with dark mode toggle
│   ├── Hero.js            # Hero section with introduction
│   ├── Skills.js          # Skills and technologies
│   ├── Experience.js      # Work experience and education
│   ├── Projects.js        # Featured projects showcase
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Footer with social links
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your color palette
  }
}
```

### Content
- **Personal Info**: Update in respective components
- **Projects**: Modify the projects array in `Projects.js`
- **Skills**: Update skill categories in `Skills.js`
- **Experience**: Edit timeline data in `Experience.js`

### Styling
- **Global Styles**: `src/index.css`
- **Component Styles**: Tailwind classes in each component
- **Animations**: Framer Motion variants in components

## 📊 Performance

- **Bundle Size**: 107.97 kB (gzipped)
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Saif Eddine Fatnassi**
- 📧 Email: saif.fatnassi50@gmail.com
- 📱 Phone: +216 94 652 265
- 💼 LinkedIn: [fatnassi-saif-eddine](https://www.linkedin.com/in/fatnassi-saif-eddine/)
- 🐙 GitHub: [saifeddine-fatnassi](https://github.com/saifeddine-fatnassi)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and best practices
- **Icons**: Feather Icons and Simple Icons
- **Animations**: Framer Motion library
- **Styling**: Tailwind CSS framework

---

⭐ Star this repository if you found it helpful! # SAIF-template
