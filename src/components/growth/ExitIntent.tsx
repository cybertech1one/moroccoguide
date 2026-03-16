'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, BookOpen, Users, CheckCircle, Sparkles } from 'lucide-react';

export default function ExitIntent() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleExitIntent = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5) {
      const alreadyShown = sessionStorage.getItem('exitIntentShown');
      if (!alreadyShown) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }
  }, []);

  useEffect(() => {
    // Small delay to avoid triggering immediately on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleExitIntent);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [handleExitIntent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, this would submit to an API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
            style={{ background: 'var(--surface)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Moroccan pattern header */}
            <div
              className="relative h-36 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 50%, var(--color-accent-dark) 100%)',
              }}
            >
              {/* Geometric pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Decorative elements */}
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[var(--color-accent)]" />
                <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                  Free Guide
                </span>
              </div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Moroccan arch decoration at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-6"
                style={{
                  background: 'var(--surface)',
                  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                }}
              />
            </div>

            {/* Content */}
            <div className="px-8 pb-8 pt-2 text-center">
              {!isSubmitted ? (
                <>
                  <h2
                    className="mb-2 font-display text-2xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Wait! Get Your Free Morocco Travel Guide
                  </h2>
                  <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    48 pages of insider tips, hidden gems, and detailed itineraries
                    for the perfect Moroccan adventure.
                  </p>

                  {/* Social proof */}
                  <div
                    className="mb-6 flex items-center justify-center gap-6 rounded-xl px-4 py-3"
                    style={{ background: 'var(--surface-muted)' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                      <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                        50,000+
                      </span>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        travelers
                      </span>
                    </div>
                    <div className="h-4 w-px" style={{ background: 'var(--border)' }} />
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-current"
                          style={{ color: 'var(--color-accent)' }}
                        />
                      ))}
                      <span className="ml-1 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                        4.9
                      </span>
                    </div>
                  </div>

                  {/* Email form */}
                  <form onSubmit={handleSubmit} className="mb-5">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="flex-1 rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                        style={{
                          background: 'var(--surface)',
                          borderColor: 'var(--border)',
                          color: 'var(--text-primary)',
                        }}
                      />
                      <button
                        type="submit"
                        className="shrink-0 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                        style={{
                          background:
                            'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                        }}
                      >
                        Get Free Guide
                      </button>
                    </div>
                  </form>

                  {/* Testimonial */}
                  <div
                    className="rounded-xl p-4 text-left"
                    style={{
                      background: 'var(--surface-muted)',
                      borderLeft: '3px solid var(--color-accent)',
                    }}
                  >
                    <p className="mb-2 text-sm italic" style={{ color: 'var(--text-secondary)' }}>
                      &ldquo;This guide saved us hours of research. The restaurant
                      recommendations alone were worth it. Best trip we ever took!&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white"
                        style={{ background: 'var(--color-secondary)' }}
                      >
                        E
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                          Emma & David
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          Visited Morocco, Oct 2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-6"
                >
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: 'var(--color-green)', opacity: 0.1 }}
                  >
                    <CheckCircle className="h-8 w-8" style={{ color: 'var(--color-green)' }} />
                  </div>
                  <h3
                    className="mb-2 font-display text-xl font-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Check Your Inbox!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Your free Morocco travel guide is on its way. Start planning your
                    dream trip today!
                  </p>
                </motion.div>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
