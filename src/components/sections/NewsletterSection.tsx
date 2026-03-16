'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowRight, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-24"
      aria-label="Newsletter signup"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-accent-dark)]" />
      <div className="moroccan-pattern-dark absolute inset-0" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />

      <div className="container-morocco relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <Mail className="h-8 w-8 text-white" />
          </div>

          {/* Title */}
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Get Morocco Travel Inspiration
          </h2>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-white/80">
            Join 50,000+ travelers. Weekly tips, hidden gems, and exclusive
            deals delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/20 px-6 py-4 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-green)]">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">
                    Welcome aboard!
                  </p>
                  <p className="text-sm text-white/70">
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    aria-label="Email address for newsletter"
                    className="w-full rounded-xl bg-white/95 px-5 py-3.5 text-base text-[var(--text-primary)] shadow-lg outline-none placeholder:text-[var(--text-muted)] focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={cn(
                    'flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold shadow-lg transition-all',
                    status === 'loading'
                      ? 'cursor-not-allowed bg-[var(--color-accent-dark)] text-white/70'
                      : 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]'
                  )}
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </form>

          {/* Privacy note */}
          <p className="mt-4 text-xs text-white/50">
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>

          {/* Social proof */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <div className="flex -space-x-2">
              {[
                'bg-[var(--color-accent)]',
                'bg-[var(--color-secondary)]',
                'bg-[var(--color-green)]',
                'bg-[var(--color-primary-light)]',
              ].map((bg, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/20 text-xs font-bold text-white',
                    bg
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>Trusted by travelers from 120+ countries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
