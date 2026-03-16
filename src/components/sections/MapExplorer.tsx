'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Map } from 'lucide-react';

// Dynamically import the Leaflet map (no SSR)
const MoroccoMap = dynamic(() => import('./MoroccoMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl bg-[var(--surface-muted)] flex items-center justify-center" style={{ height: '520px' }}>
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm text-[var(--text-muted)]">Loading interactive map...</p>
      </div>
    </div>
  ),
});

export default function MapExplorer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--surface-muted)] py-16 md:py-24"
      aria-label="Explore Morocco on the map"
    >
      <div className="container-morocco">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium mb-4">
            <Map className="w-4 h-4" />
            Interactive Map
          </div>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Explore Morocco on the Map
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Click on any city to discover attractions, tours, restaurants and more.
            Zoom in to explore regions in detail.
          </p>
        </motion.div>

        {/* Real Leaflet Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          <MoroccoMap />

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-white shadow" />
              <span>City</span>
            </div>
            <span className="text-[var(--border)]">|</span>
            <span>Click a pin to see details</span>
            <span className="text-[var(--border)]">|</span>
            <span>Scroll to zoom</span>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/tools/map"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary-dark)]"
            >
              Open Full-Screen Map
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
