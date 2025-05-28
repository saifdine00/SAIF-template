import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiVuedotjs, SiJavascript, SiTypescript, SiNodedotjs, 
  SiNestjs, SiPython, SiCplusplus, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiLinux, SiAndroidstudio, SiPhp, SiSymfony
} from 'react-icons/si';
import { FaDatabase, FaCode } from 'react-icons/fa';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ]
    },
    {
      title: "Backend Development",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: FaCode, color: "#007396" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Symfony", icon: SiSymfony, color: "#000000" },
      ]
    },
    {
      title: "Database & Tools",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "NoSQL", icon: FaDatabase, color: "#FF6B6B" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
        { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="skills" className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"
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

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Skills & <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent">Technologies</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="card p-8 h-full relative overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  {/* Simplified gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center relative z-10"
                    whileHover={{ scale: 1.02 }}
                  >
                    {category.title}
                  </motion.h3>
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-dark-600/80 transition-all duration-300 group cursor-pointer border border-gray-200/50 dark:border-gray-600/50 hover:border-primary-300 dark:hover:border-primary-600 relative z-20"
                      >
                        <motion.div
                          animate={hoveredSkill === skill.name ? {
                            rotate: [0, -5, 5, 0],
                            scale: [1, 1.1, 1]
                          } : {}}
                          transition={{ duration: 0.4 }}
                        >
                          <skill.icon 
                            size={36} 
                            style={{ color: skill.color }}
                            className="mb-2 group-hover:drop-shadow-lg transition-all duration-300"
                          />
                        </motion.div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Additional <span className="text-gradient">Expertise</span>
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Clean Architecture", "RESTful APIs", "Microservices", "CI/CD",
                "Agile/Scrum", "Test-Driven Development", "DevOps", "Cloud Computing",
                "Responsive Design", "Performance Optimization", "Security Best Practices"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-300 cursor-default border border-primary-200 dark:border-primary-800 shadow-lg hover:shadow-xl relative z-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 