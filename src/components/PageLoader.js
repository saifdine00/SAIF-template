import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prevProgress + Math.random() * 25 + 10; // Faster progress
      });
    }, 80); // Faster interval

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-purple-900/20"
      >
        {/* Simplified Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 text-center">
          {/* Logo/Initial */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <motion.span
                className="text-2xl font-bold text-white"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                SF
              </motion.span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 bg-clip-text text-transparent">
              Saif Eddine Fatnassi
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          >
            Full-Stack Developer
          </motion.p>

          {/* Progress Bar */}
          <div className="w-56 mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Loading Portfolio</span>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Simplified Loading Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary-600 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader; 