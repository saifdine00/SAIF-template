import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'TeraToSoft | Waha Oil Company',
      location: 'Tunisia',
      period: 'Aug. 2024 – Present',
      description: 'Leading full-stack development initiatives with modern web technologies.',
      highlights: [
        'Implemented role-based navigation and permission system for different user types',
        'Built responsive Vue.js 3 application with Vuetify UI framework and bilingual support (Arabic/English)',
        'Integrated Ory Kratos authentication with role-based authorization (SuperAdmin, Admin, Employee)',
        'Developed RESTful APIs using NestJS with Clean Architecture principles',
        'Implemented batch processing system for medical invoice data integration',
        'Designed PostgreSQL database schema using Prisma ORM'
      ],
      technologies: ['Vue.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Ory Kratos', 'TypeScript']
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'TeraToSoft | Waha Oil Company',
      location: 'Tunisia',
      period: 'Sep 2024 - March 2025',
      description: 'Developed comprehensive website with back office management system.',
      highlights: [
        'Built responsive and modular user interfaces using Vue.js',
        'Designed dynamic and responsive layouts with Tailwind CSS',
        'Integrated UI components for sections like Tender Details, Announcements, Footer, and Social Media Widgets',
        'Developed robust APIs using NestJS for managing tenders and news articles',
        'Implemented Clean Architecture to separate domain, application, and infrastructure layers',
        'Designed use cases for content management, tender workflows, and automation',
        'Wrote comprehensive unit tests with Jest and end-to-end tests using Playwright'
      ],
      technologies: ['Vue.js', 'NestJS', 'Tailwind CSS', 'Jest', 'Playwright', 'TypeScript', 'Prisma ORM']
    },
    {
      type: 'work',
      title: 'Final Year Internship',
      company: 'Medianet - Tunisia',
      location: 'Tunisia',
      period: 'Jan. 2024 – Jun. 2024',
      description: 'Developed innovative price comparison application "Best Deal".',
      highlights: [
        'Extracting price data from various e-commerce sites and storing it in a database',
        'Developing APIs to consume the data and provide price comparison services',
        'Designing an intuitive UI to display items and compare prices',
        'Containerizing the application with Docker and Docker-compose'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Python', 'Docker', 'Postman']
    },
    {
      type: 'work',
      title: 'Summer Internship',
      company: 'BIAL-X - STRASBOURG, FRANCE',
      location: 'Strasbourg, France',
      period: 'Jul. 2023 – Sep. 2023',
      description: 'Development of an Internal Web Application Interacting with FitNet (ERP) APIs for Optimized Management within BIAL-X.',
      highlights: [
        'Extracting existing quotes from FITNET',
        'Formatting them into PDFs with the option to add comments',
        'Storing the new PDF format in a NoSQL database'
      ],
      technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'APIs FITNET', 'HTML', 'CSS', 'Postman']
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Engineering Cycle in Infotronic Systems Engineering',
      company: 'National Engineering School of Carthage',
      location: 'Tunisia',
      period: '2021 - 2024',
      description: 'Specialized in software engineering and information systems.',
      highlights: []
    },
    {
      type: 'education',
      title: 'Preparatory Cycle for Engineering Studies',
      company: 'Faculty of Sciences of Monastir',
      location: 'Tunisia',
      period: '2018 - 2021',
      description: 'Foundation studies in mathematics, physics, and computer science.',
      highlights: []
    }
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    // Sort by start year (descending)
    const yearA = parseInt(a.period.split(' ').pop());
    const yearB = parseInt(b.period.split(' ').pop());
    return yearB - yearA;
  });

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
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and educational background in software engineering and web development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {allItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card p-6"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            item.type === 'work' 
                              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          }`}>
                            {item.type === 'work' ? <FiBriefcase size={20} /> : <FiBook size={20} />}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-medium">
                              {item.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={16} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 