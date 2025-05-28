import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiUsers, FiDatabase, FiShield } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Employee Portal System",
      description: "A comprehensive employee management portal with role-based access control, bilingual support, and medical invoice processing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js 3", "NestJS", "PostgreSQL", "Prisma ORM", "Ory Kratos", "TypeScript", "Vuetify"],
      features: [
        "Role-based navigation system",
        "Bilingual support (Arabic/English)",
        "Medical invoice data integration",
        "Clean Architecture implementation"
      ],
      category: "Full-Stack Web Application",
      status: "In Production",
      github: "#",
      demo: "#",
      icon: FiUsers
    },
    {
      title: "Corporate Website & CMS",
      description: "Modern corporate website with comprehensive back-office content management system for tenders, announcements, and news articles.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "NestJS", "Tailwind CSS", "Jest", "Playwright", "TypeScript"],
      features: [
        "Dynamic content management",
        "Tender workflow automation",
        "Responsive design system",
        "Comprehensive testing suite"
      ],
      category: "CMS & Web Platform",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: FiCode
    },
    {
      title: "Best Deal - Price Comparator",
      description: "Innovative e-commerce price comparison platform that aggregates product data from multiple sources to help users find the best deals.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Python", "Docker"],
      features: [
        "Web scraping automation",
        "Real-time price tracking",
        "Intuitive comparison interface",
        "Containerized deployment"
      ],
      category: "E-commerce Platform",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: FiDatabase
    },
    {
      title: "BIAL-X ERP Integration",
      description: "Internal web application that integrates with FitNet ERP system for optimized quote management and PDF generation.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "FitNet APIs"],
      features: [
        "ERP system integration",
        "PDF generation with comments",
        "Quote management system",
        "NoSQL data storage"
      ],
      category: "Enterprise Integration",
      status: "Completed",
      github: "#",
      demo: "#",
      icon: FiShield
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              system integration, and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={64} className="text-primary-600 dark:text-primary-400 opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-800/90 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'In Production' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 text-sm font-medium"
                    >
                      <FiGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <FiExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/saifeddine-fatnassi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FiGithub size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 