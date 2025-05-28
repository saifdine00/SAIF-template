import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar, FiUsers, FiCode, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Employee Portal - Waha Oil Company",
      description: "A comprehensive employee management system with role-based authentication, medical invoice processing, and bilingual support.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "NestJS", "PostgreSQL", "Prisma ORM", "Ory Kratos", "TypeScript"],
      features: [
        "Role-based navigation system",
        "Bilingual support (Arabic/English)",
        "Medical invoice batch processing",
        "Clean Architecture implementation"
      ],
      status: "In Development",
      timeline: "Aug 2024 - Present",
      team: "3 developers",
      category: "Enterprise",
      gradient: "from-blue-500 to-cyan-500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Corporate Website - Waha Oil Company",
      description: "Modern corporate website with dynamic content management, tender system, and comprehensive back office.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "NestJS", "Tailwind CSS", "Jest", "Playwright", "TypeScript"],
      features: [
        "Dynamic content management",
        "Tender management system",
        "Responsive design",
        "Comprehensive testing suite"
      ],
      status: "Completed",
      timeline: "Sep 2024 - Mar 2025",
      team: "2 developers",
      category: "Corporate",
      gradient: "from-green-500 to-emerald-500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Best Deal - Price Comparison Platform",
      description: "Innovative e-commerce price comparison application with web scraping capabilities and intuitive user interface.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Node.js", "MongoDB", "Python", "Docker", "Express.js"],
      features: [
        "Multi-site price extraction",
        "Real-time price comparison",
        "Containerized deployment",
        "RESTful API architecture"
      ],
      status: "Completed",
      timeline: "Jan 2024 - Jun 2024",
      team: "Solo project",
      category: "E-commerce",
      gradient: "from-purple-500 to-pink-500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "BIAL-X ERP Integration",
      description: "Internal web application for optimized management with FitNet ERP integration and PDF processing capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "FitNet APIs"],
      features: [
        "ERP system integration",
        "Quote extraction and formatting",
        "PDF generation with comments",
        "NoSQL database storage"
      ],
      status: "Completed",
      timeline: "Jul 2023 - Sep 2023",
      team: "Solo project",
      category: "Enterprise",
      gradient: "from-orange-500 to-red-500",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Simplified Project Card Component
  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="relative group"
        onHoverStart={() => setHoveredProject(project.id)}
        onHoverEnd={() => setHoveredProject(null)}
      >
        <div className="card overflow-hidden h-full relative">
          {/* Simplified Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
          
          {/* Project Image */}
          <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-6xl font-bold text-white/80"
                animate={hoveredProject === project.id ? {
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 0.4 }}
              >
                {project.id}
              </motion.div>
            </div>
            
            {/* Status Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              project.status === 'Completed' 
                ? 'bg-green-500/80 text-white' 
                : 'bg-blue-500/80 text-white'
            }`}>
              {project.status}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative z-10">
            {/* Category & Timeline */}
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium`}>
                {project.category}
              </span>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <FiCalendar size={12} className="mr-1" />
                {project.timeline.split(' - ')[0]}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {project.features.slice(0, 2).map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
                  >
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs font-medium">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center">
                <FiUsers size={12} className="mr-1" />
                {project.team}
              </div>
              <div className="flex items-center">
                <FiCode size={12} className="mr-1" />
                {project.technologies.length} techs
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.a
                href={project.demoUrl}
                className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View demo of ${project.title}`}
              >
                <FiExternalLink size={14} />
                Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View source code of ${project.title}`}
              >
                <FiGithub size={14} />
                Code
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-gray-50 to-purple-50 dark:from-dark-800 dark:via-dark-900 dark:to-purple-900/20 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Featured <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A showcase of my recent work, featuring full-stack applications built with modern technologies 
              and best practices in software development.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-6"
            >
              Interested in seeing more of my work?
            </motion.p>
            <motion.a
              href="https://github.com/saifeddine-fatnassi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View all projects on GitHub"
            >
              <FiGithub size={20} />
              View All Projects on GitHub
              <FiStar size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 