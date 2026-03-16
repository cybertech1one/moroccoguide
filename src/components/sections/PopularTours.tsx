'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Star,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mountain,
  Flame,
  Footprints,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterKey = 'all' | 'desert' | 'cultural' | 'adventure' | 'food' | 'wellness';

interface Tour {
  name: string;
  slug: string;
  duration: string;
  priceFrom: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  difficultyLevel: number; // 1-3
  rating: number;
  reviewCount: number;
  highlights: string[];
  image: string;
  filters: FilterKey[];
}

const FILTER_OPTIONS: { key: FilterKey; label: string; icon: string }[] = [
  { key: 'all', label: 'All Tours', icon: '✦' },
  { key: 'desert', label: 'Desert', icon: '🏜' },
  { key: 'cultural', label: 'Cultural', icon: '🕌' },
  { key: 'adventure', label: 'Adventure', icon: '⛰' },
  { key: 'food', label: 'Food', icon: '🍲' },
  { key: 'wellness', label: 'Wellness', icon: '🧘' },
];

const TOURS: Tour[] = [
  {
    name: 'Sahara Desert 3-Day Experience',
    slug: 'sahara-desert-3-day',
    duration: '3 days',
    priceFrom: 2500,
    difficulty: 'Moderate',
    difficultyLevel: 2,
    rating: 4.9,
    reviewCount: 847,
    highlights: ['Camel Trek', 'Desert Camp', 'Stargazing', 'Erg Chebbi'],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600',
    filters: ['all', 'desert', 'adventure'],
  },
  {
    name: 'Imperial Cities 7-Day Grand Tour',
    slug: 'imperial-cities-7-day',
    duration: '7 days',
    priceFrom: 6800,
    difficulty: 'Easy',
    difficultyLevel: 1,
    rating: 4.8,
    reviewCount: 623,
    highlights: ['Marrakech', 'Fes', 'Meknes', 'Rabat'],
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=600',
    filters: ['all', 'cultural'],
  },
  {
    name: 'Atlas Mountains Trek',
    slug: 'atlas-mountains-trek',
    duration: '4 days',
    priceFrom: 3200,
    difficulty: 'Challenging',
    difficultyLevel: 3,
    rating: 4.8,
    reviewCount: 412,
    highlights: ['Toubkal Peak', 'Berber Villages', 'Mountain Lodges', 'Panoramic Views'],
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=600',
    filters: ['all', 'adventure'],
  },
  {
    name: 'Marrakech Food & Culture Tour',
    slug: 'marrakech-food-tour',
    duration: '1 day',
    priceFrom: 650,
    difficulty: 'Easy',
    difficultyLevel: 1,
    rating: 4.7,
    reviewCount: 1204,
    highlights: ['Street Food', 'Spice Markets', 'Cooking Class', 'Local Cafes'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600',
    filters: ['all', 'food', 'cultural'],
  },
  {
    name: 'Fes Artisan Workshop Experience',
    slug: 'fes-artisan-workshop',
    duration: '1 day',
    priceFrom: 450,
    difficulty: 'Easy',
    difficultyLevel: 1,
    rating: 4.6,
    reviewCount: 389,
    highlights: ['Tanneries', 'Pottery', 'Zellige Tiles', 'Metalwork'],
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=600',
    filters: ['all', 'cultural'],
  },
  {
    name: 'Chefchaouen Blue City Day Trip',
    slug: 'chefchaouen-day-trip',
    duration: '1 day',
    priceFrom: 800,
    difficulty: 'Easy',
    difficultyLevel: 1,
    rating: 4.8,
    reviewCount: 567,
    highlights: ['Blue Streets', 'Ras El Maa', 'Medina Walk', 'Photography'],
    image: 'https://images.unsplash.com/photo-1553244006-20e9b0aadec7?q=80&w=600',
    filters: ['all', 'cultural'],
  },
  {
    name: 'Essaouira Surf & Coastal Escape',
    slug: 'essaouira-surf-explore',
    duration: '2 days',
    priceFrom: 1800,
    difficulty: 'Moderate',
    difficultyLevel: 2,
    rating: 4.7,
    reviewCount: 298,
    highlights: ['Surf Lessons', 'Medina Walks', 'Seafood', 'Ramparts'],
    image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=600',
    filters: ['all', 'adventure', 'wellness'],
  },
  {
    name: 'Grand Morocco 14-Day Discovery',
    slug: 'grand-morocco-14-day',
    duration: '14 days',
    priceFrom: 14500,
    difficulty: 'Moderate',
    difficultyLevel: 2,
    rating: 4.9,
    reviewCount: 186,
    highlights: ['All Imperial Cities', 'Sahara', 'Coast', 'Mountains'],
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=600',
    filters: ['all', 'cultural', 'desert', 'adventure'],
  },
];

function DifficultyDots({ level, max = 3 }: { level: number; max?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'h-1.5 w-4 rounded-full transition-colors',
            i < level
              ? level === 1
                ? 'bg-[var(--color-green)]'
                : level === 2
                ? 'bg-[var(--color-accent)]'
                : 'bg-[var(--color-primary)]'
              : 'bg-[var(--color-sand-200)]'
          )}
        />
      ))}
    </div>
  );
}

function getDifficultyColor(difficulty: Tour['difficulty']) {
  switch (difficulty) {
    case 'Easy':
      return 'text-[var(--color-green)] bg-[var(--color-green)]/10 border-[var(--color-green)]/20';
    case 'Moderate':
      return 'text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20';
    case 'Challenging':
      return 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20';
  }
}

export default function PopularTours() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const filteredTours =
    activeFilter === 'all'
      ? TOURS
      : TOURS.filter((t) => t.filters.includes(activeFilter));

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--surface-muted)] py-20 md:py-28"
      aria-label="Curated tours and experiences"
    >
      {/* Subtle background texture */}
      <div className="moroccan-pattern absolute inset-0 opacity-50" />

      <div className="container-morocco relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-200)] bg-[var(--color-primary-50)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Hand-picked by local experts
          </motion.span>
          <h2 className="mb-4 mt-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Curated Tours &amp; Experiences
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            From one-day food walks to two-week odysseys across the kingdom --
            every tour is designed for unforgettable memories.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {FILTER_OPTIONS.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={cn(
                'relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                activeFilter === key
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25'
                  : 'bg-white text-[var(--text-secondary)] shadow-sm hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)] hover:shadow-md'
              )}
            >
              <span className="mr-1.5">{icon}</span>
              {label}
            </button>
          ))}
        </motion.div>

        {/* Tour Carousel */}
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 -left-5 z-10 hidden -translate-y-1/2 rounded-full border border-[var(--border-light)] bg-white p-3 shadow-xl transition-all hover:bg-[var(--color-primary)] hover:text-white md:block"
            aria-label="Scroll tours left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 rounded-full border border-[var(--border-light)] bg-white p-3 shadow-xl transition-all hover:bg-[var(--color-primary)] hover:text-white md:block"
            aria-label="Scroll tours right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 z-[5] h-full w-12 bg-gradient-to-r from-[var(--surface-muted)] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-[5] h-full w-12 bg-gradient-to-l from-[var(--surface-muted)] to-transparent" />

          <div
            ref={scrollContainerRef}
            className="scrollbar-hide -mx-4 flex gap-5 overflow-x-auto px-8 pb-6 pt-2 snap-x snap-mandatory"
            style={{ scrollPaddingLeft: '2rem' }}
          >
            {filteredTours.map((tour, i) => (
              <motion.div
                key={tour.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="w-[340px] shrink-0 snap-start"
              >
                <Link
                  href={`/tours/${tour.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-light)] bg-white shadow-sm transition-all duration-500 hover:border-[var(--color-primary-200)] hover:shadow-xl hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Duration badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] shadow-sm backdrop-blur-sm">
                      <Clock className="h-3.5 w-3.5 text-[var(--color-secondary)]" />
                      {tour.duration}
                    </div>

                    {/* Price badge */}
                    <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-[var(--color-green)] to-[var(--color-green-light)] px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-[var(--color-green)]/30">
                      From {tour.priceFrom.toLocaleString()} MAD
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        <span className="text-sm font-bold text-white">
                          {tour.rating}
                        </span>
                        <span className="text-xs text-white/70">
                          ({tour.reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-3 text-[17px] font-bold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--color-primary)]">
                      {tour.name}
                    </h3>

                    {/* Difficulty */}
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
                          getDifficultyColor(tour.difficulty)
                        )}
                      >
                        {tour.difficulty === 'Challenging' && <Flame className="h-3 w-3" />}
                        {tour.difficulty === 'Moderate' && <Mountain className="h-3 w-3" />}
                        {tour.difficulty === 'Easy' && <Footprints className="h-3 w-3" />}
                        {tour.difficulty}
                      </span>
                      <DifficultyDots level={tour.difficultyLevel} />
                    </div>

                    {/* Highlight chips */}
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {tour.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-[var(--border-light)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] transition-colors group-hover:border-[var(--color-primary-100)] group-hover:bg-[var(--color-primary-50)] group-hover:text-[var(--color-primary)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/tours"
            className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-secondary)] px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-[var(--color-secondary)]/25 transition-all hover:bg-[var(--color-secondary-dark)] hover:shadow-xl hover:-translate-y-0.5"
          >
            Plan Your Tour
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
