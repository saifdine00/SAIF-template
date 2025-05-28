import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Reduced spring stiffness for better performance
  const springConfig = { damping: 30, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Throttled mouse move for better performance
  const moveCursor = useCallback((e) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  }, [cursorX, cursorY]);

  useEffect(() => {
    // Throttle mouse movement for performance
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          moveCursor(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Simplified event listeners
    const addCursorListeners = () => {
      // Only target specific interactive elements to reduce overhead
      const buttons = document.querySelectorAll('button[data-cursor], a[data-cursor]');
      
      buttons.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          setCursorVariant('hover');
          setCursorText(el.getAttribute('data-cursor-text') || '');
        }, { passive: true });
        
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorVariant('default');
          setCursorText('');
        }, { passive: true });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Delay listener setup to avoid blocking initial render
    const timeoutId = setTimeout(addCursorListeners, 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [moveCursor]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(147, 51, 234, 0.6)',
    },
  };

  // Hide on mobile devices or small screens
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Simplified main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* Simplified cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-white text-sm font-medium px-3 py-1 bg-black/80 rounded-full backdrop-blur-sm"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, x: 40, y: -10 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor; 