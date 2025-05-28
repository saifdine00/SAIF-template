import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reduced particles for better performance
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const magneticVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-purple-900/20 pt-20"
      aria-label="Hero section - Introduction"
    >
      {/* Optimized Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary-400/20 dark:bg-primary-400/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simplified Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span 
              className="inline-block px-6 py-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium shadow-lg border border-primary-200 dark:border-primary-800"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
              role="text"
              aria-label="Greeting"
            >
              👋 Hello, I'm
            </motion.span>
          </motion.div>

          {/* Name with simplified gradient animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <motion.span 
              className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent"
            >
              Saif Eddine
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Fatnassi
            </motion.span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate software engineer with expertise in modern web technologies. 
            I build scalable applications using React, Vue.js, Node.js, and NestJS, 
            with a focus on clean architecture and exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            role="group"
            aria-label="Call to action buttons"
          >
            <motion.button
              variants={magneticVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2 relative overflow-hidden group"
              data-cursor="hover"
              data-cursor-text="Let's Talk!"
              aria-label="Get in touch - Navigate to contact section"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiMail size={20} aria-hidden="true" />
                Get In Touch
              </span>
            </motion.button>
            
            <motion.a
              variants={magneticVariants}
              whileHover="hover"
              whileTap="tap"
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center justify-center gap-2 relative overflow-hidden group"
              data-cursor="hover"
              data-cursor-text="Download CV"
              aria-label="Download Saif Eddine Fatnassi's resume PDF"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiDownload size={20} aria-hidden="true" />
                Download Resume
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.nav
            variants={itemVariants}
            className="flex justify-center space-x-6"
            role="navigation"
            aria-label="Social media links"
          >
            {[
              { icon: FiMail, href: "mailto:saif.fatnassi50@gmail.com", color: "hover:text-red-500", label: "Send email" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/fatnassi-saif-eddine/", color: "hover:text-blue-500", label: "LinkedIn profile" },
              { icon: FiGithub, href: "https://github.com/saifeddine-fatnassi", color: "hover:text-gray-800 dark:hover:text-white", label: "GitHub profile" },
              { icon: FiPhone, href: "tel:+21694652265", color: "hover:text-green-500", label: "Call phone number" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`p-4 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} border border-gray-200 dark:border-gray-700`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label={social.label}
              >
                <social.icon size={24} aria-hidden="true" />
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 