'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 500);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[var(--z-above)] flex h-12 w-12 items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
          }}
          aria-label="Back to top"
        >
          {/* Moroccan geometric pattern ring */}
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background:
                'conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-secondary), var(--color-green), var(--color-primary))',
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMaskComposite: 'xor',
            }}
            aria-hidden="true"
          />
          {/* Compass-style arrow */}
          <div className="relative">
            <ArrowUp className="h-5 w-5 text-white" />
          </div>
          {/* Subtle rotating border on hover */}
          <motion.div
            className="absolute inset-[-3px] rounded-full border-2 border-transparent"
            style={{
              borderTopColor: 'var(--color-accent)',
              borderRightColor: 'var(--color-primary)',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
