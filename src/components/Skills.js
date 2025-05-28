import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiVuedotjs, SiJavascript, SiTypescript, SiNodedotjs, 
  SiNestjs, SiPython, SiCplusplus, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiLinux, SiAndroidstudio, SiPhp, SiSymfony
} from 'react-icons/si';
import { FaDatabase, FaCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
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
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
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
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all duration-300 group cursor-pointer"
                    >
                      <skill.icon 
                        size={40} 
                        style={{ color: skill.color }}
                        className="mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Additional Expertise
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Clean Architecture", "RESTful APIs", "Microservices", "CI/CD",
                "Agile/Scrum", "Test-Driven Development", "DevOps", "Cloud Computing",
                "Responsive Design", "Performance Optimization", "Security Best Practices"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300 cursor-default"
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