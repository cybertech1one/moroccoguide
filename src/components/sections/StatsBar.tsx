'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Landmark,
  Hotel,
  UtensilsCrossed,
  Ticket,
  Users,
} from 'lucide-react';

const STATS = [
  { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered', description: 'Across all 12 regions' },
  { icon: Landmark, value: 1000, suffix: '+', label: 'Attractions', description: 'Hand-verified listings' },
  { icon: Hotel, value: 500, suffix: '+', label: 'Hotels & Riads', description: 'From budget to luxury' },
  { icon: UtensilsCrossed, value: 300, suffix: '+', label: 'Restaurants', description: 'Curated by food critics' },
  { icon: Ticket, value: 200, suffix: '+', label: 'Activities', description: 'Unique experiences' },
  { icon: Users, value: 100, suffix: '+', label: 'Local Guides', description: 'Certified & trusted' },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 2200;
    const steps = 70;
    const increment = target / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const formatted =
    count >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count.toString();

  return (
    <span className="stat-number text-3xl md:text-4xl lg:text-5xl">
      {isInView ? formatted : '0'}
      {isInView && suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20"
      aria-label="City Guide statistics"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-secondary-dark)]" />
      <div className="moroccan-pattern absolute inset-0 opacity-[0.07]" />

      {/* Decorative orbs */}
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container-morocco relative z-10">
        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
        >
          Morocco&apos;s most comprehensive travel guide
        </motion.p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {STATS.map(({ icon: Icon, value, suffix, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-6 text-center backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                {/* Icon container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-accent)]/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>

                {/* Animated number */}
                <AnimatedCounter
                  target={value}
                  suffix={suffix}
                  isInView={isInView}
                />

                {/* Label */}
                <div>
                  <p className="text-sm font-semibold text-white">
                    {label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/50">
                    {description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[var(--color-accent)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
