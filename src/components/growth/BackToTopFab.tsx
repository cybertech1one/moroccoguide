'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function BackToTopFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

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
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[var(--z-above)] flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
          }}
          aria-label="Back to top"
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-[-3px] rounded-full"
            style={{
              border: '2px solid transparent',
              borderTopColor: 'var(--color-accent)',
              borderRightColor: 'var(--color-primary-light)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          />

          {/* Pulse glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
            }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(27, 73, 101, 0.4)',
                '0 0 0 12px rgba(27, 73, 101, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            aria-hidden="true"
          />

          {/* Compass icon */}
          <div className="relative">
            <Compass className="h-6 w-6 text-white" />
          </div>

          {/* Inner decorative ring */}
          <div
            className="absolute inset-1 rounded-full opacity-20"
            style={{
              background:
                'conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-secondary), var(--color-green), var(--color-primary))',
              padding: '1px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              WebkitMaskComposite: 'xor',
            }}
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
