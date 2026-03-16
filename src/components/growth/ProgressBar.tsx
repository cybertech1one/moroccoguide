'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ProgressBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling a bit
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[9999] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-primary-light) 100%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
