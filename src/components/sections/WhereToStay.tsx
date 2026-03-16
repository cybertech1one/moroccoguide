'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Star,
  MapPin,
  Wifi,
  Wind,
  Bath,
  Coffee,
  ArrowRight,
  Building2,
  Tent,
  Castle,
  Wallet,
  Home,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type AccommodationType = 'all' | 'riad' | 'hotel' | 'camp' | 'kasbah' | 'budget';

interface Accommodation {
  name: string;
  slug: string;
  city: string;
  type: AccommodationType;
  typeLabel: string;
  stars: number;
  priceFrom: number;
  rating: number;
  amenities: string[];
  image: string;
}

const TYPE_TABS: { key: AccommodationType; label: string; icon: typeof Home; description: string }[] = [
  { key: 'all', label: 'All Stays', icon: Home, description: 'Browse everything' },
  { key: 'riad', label: 'Riads', icon: Home, description: 'Traditional courtyard homes' },
  { key: 'hotel', label: 'Hotels', icon: Building2, description: 'Boutique & luxury' },
  { key: 'camp', label: 'Desert Camps', icon: Tent, description: 'Under the stars' },
  { key: 'kasbah', label: 'Kasbahs', icon: Castle, description: 'Fortress retreats' },
  { key: 'budget', label: 'Budget', icon: Wallet, description: 'Smart & affordable' },
];

const AMENITY_ICONS: Record<string, typeof Wifi> = {
  WiFi: Wifi,
  'A/C': Wind,
  Pool: Bath,
  Breakfast: Coffee,
};

const ACCOMMODATIONS: Accommodation[] = [
  {
    name: 'La Mamounia',
    slug: 'la-mamounia',
    city: 'Marrakech',
    type: 'hotel',
    typeLabel: 'Palace Hotel',
    stars: 5,
    priceFrom: 5200,
    rating: 4.9,
    amenities: ['WiFi', 'Pool', 'A/C', 'Breakfast'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Riad Fes',
    slug: 'riad-fes',
    city: 'Fes',
    type: 'riad',
    typeLabel: 'Luxury Riad',
    stars: 5,
    priceFrom: 2800,
    rating: 4.8,
    amenities: ['WiFi', 'Pool', 'Breakfast'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Sahara Luxury Desert Camp',
    slug: 'sahara-luxury-camp',
    city: 'Merzouga',
    type: 'camp',
    typeLabel: 'Luxury Camp',
    stars: 4,
    priceFrom: 3500,
    rating: 4.8,
    amenities: ['Breakfast', 'A/C'],
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Kasbah Tamadot',
    slug: 'kasbah-tamadot',
    city: 'Atlas Mountains',
    type: 'kasbah',
    typeLabel: 'Luxury Kasbah',
    stars: 5,
    priceFrom: 6000,
    rating: 4.9,
    amenities: ['WiFi', 'Pool', 'A/C', 'Breakfast'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Heure Bleue Palais',
    slug: 'heure-bleue-palais',
    city: 'Essaouira',
    type: 'hotel',
    typeLabel: 'Boutique Hotel',
    stars: 5,
    priceFrom: 2200,
    rating: 4.7,
    amenities: ['WiFi', 'Pool', 'Breakfast'],
    image: '/images/hero-coastal.webp',
  },
  {
    name: 'Hostel Waka Waka',
    slug: 'hostel-waka-waka',
    city: 'Marrakech',
    type: 'budget',
    typeLabel: 'Hostel',
    stars: 3,
    priceFrom: 120,
    rating: 4.4,
    amenities: ['WiFi', 'Breakfast'],
    image: '/images/hero-marrakech.webp',
  },
];

export default function WhereToStay() {
  const [typeFilter, setTypeFilter] = useState<AccommodationType>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filtered = ACCOMMODATIONS.filter((a) => {
    return typeFilter === 'all' || a.type === typeFilter;
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28"
      aria-label="Where to stay in Morocco"
    >
      <div className="container-morocco">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Where to Stay in Morocco
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            From palatial riads in ancient medinas to luxury desert camps under
            the Saharan stars.
          </p>
        </motion.div>

        {/* Tabbed Interface */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10"
        >
          {/* Desktop tabs */}
          <div className="mx-auto hidden max-w-4xl md:block">
            <div className="flex items-stretch rounded-2xl border border-[var(--border-light)] bg-white p-1.5 shadow-sm">
              {TYPE_TABS.map(({ key, label, icon: Icon, description }) => (
                <button
                  key={key}
                  onClick={() => setTypeFilter(key)}
                  className={cn(
                    'group relative flex flex-1 flex-col items-center gap-1 rounded-xl px-3 py-3 text-center transition-all duration-300',
                    typeFilter === key
                      ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/25'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                  )}
                >
                  <Icon className={cn('h-5 w-5 transition-transform duration-300', typeFilter === key ? 'scale-110' : 'group-hover:scale-110')} />
                  <span className="text-sm font-semibold">{label}</span>
                  <span className={cn('text-[10px] leading-tight', typeFilter === key ? 'text-white/70' : 'text-[var(--text-muted)]')}>
                    {description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile pills */}
          <div className="flex flex-wrap justify-center gap-2 md:hidden">
            {TYPE_TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTypeFilter(key)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all',
                  typeFilter === key
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-white text-[var(--text-secondary)] shadow-sm hover:bg-[var(--color-primary-50)]'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accommodations Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={typeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((acc, i) => (
              <motion.div
                key={acc.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/accommodations/${acc.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-light)] bg-white shadow-sm transition-all duration-500 hover:border-[var(--color-primary-200)] hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Image with glass overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={acc.image}
                      alt={`${acc.name}, ${acc.city}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Type badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-sm backdrop-blur-sm">
                        {acc.typeLabel}
                      </span>
                    </div>

                    {/* Price glass overlay */}
                    <div className="absolute right-3 bottom-3 left-3">
                      <div className="flex items-center justify-between rounded-xl bg-black/30 px-4 py-2.5 backdrop-blur-md">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-white/80" />
                          <span className="text-sm font-medium text-white/90">{acc.city}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-wider text-white/60">From</span>
                          <p className="text-lg font-bold leading-none text-white">
                            {acc.priceFrom.toLocaleString()} <span className="text-xs font-normal text-white/70">MAD</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                        {acc.name}
                      </h3>
                      <span className="shrink-0 rounded-lg bg-[var(--color-accent-50)] px-2 py-0.5 text-sm font-bold text-[var(--color-accent-dark)]">
                        {acc.rating}
                      </span>
                    </div>

                    {/* Star rating */}
                    <div className="mb-4 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={cn(
                            'h-4 w-4',
                            s < acc.stars
                              ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                              : 'fill-[var(--color-sand-200)] text-[var(--color-sand-200)]'
                          )}
                        />
                      ))}
                    </div>

                    {/* Amenity icons */}
                    <div className="mt-auto flex items-center gap-2 border-t border-[var(--border-light)] pt-4">
                      {acc.amenities.map((amenity) => {
                        const IconComp = AMENITY_ICONS[amenity];
                        if (!IconComp) return null;
                        return (
                          <div
                            key={amenity}
                            className="flex items-center gap-1.5 rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                            title={amenity}
                          >
                            <IconComp className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">{amenity}</span>
                          </div>
                        );
                      })}
                      <div className="ml-auto">
                        <span className="group/btn inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] transition-colors">
                          Book Now
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-[var(--text-muted)]"
          >
            No accommodations match your filters. Try adjusting your selection.
          </motion.p>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/accommodations"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[var(--color-secondary)] px-10 py-4 text-lg font-semibold text-[var(--color-secondary)] transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-secondary)]/20 hover:-translate-y-0.5"
          >
            Browse All 500+ Accommodations
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
