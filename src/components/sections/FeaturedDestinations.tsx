'use client';

import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WeatherPill } from '@/components/weather/WeatherWidget';

const DESTINATIONS = [
  {
    name: 'Marrakech',
    slug: 'marrakech',
    region: 'Marrakech-Safi',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=800',
    attractions: 156,
    rating: 4.8,
    tagline: 'The Red City',
    live: true,
  },
  {
    name: 'Fes',
    slug: 'fes',
    region: 'Fes-Meknes',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=800',
    attractions: 124,
    rating: 4.7,
    tagline: 'Spiritual Capital',
    live: false,
  },
  {
    name: 'Chefchaouen',
    slug: 'chefchaouen',
    region: 'Tangier-Tetouan-Al Hoceima',
    image: 'https://images.unsplash.com/photo-1553244006-20e9b0aadec7?q=80&w=800',
    attractions: 48,
    rating: 4.9,
    tagline: 'The Blue Pearl',
    live: true,
  },
  {
    name: 'Essaouira',
    slug: 'essaouira',
    region: 'Marrakech-Safi',
    image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=800',
    attractions: 62,
    rating: 4.7,
    tagline: 'City of Wind',
    live: false,
  },
  {
    name: 'Merzouga',
    slug: 'merzouga',
    region: 'Draa-Tafilalet',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    attractions: 34,
    rating: 4.9,
    tagline: 'Gateway to Sahara',
    live: true,
  },
  {
    name: 'Casablanca',
    slug: 'casablanca',
    region: 'Casablanca-Settat',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800',
    attractions: 98,
    rating: 4.4,
    tagline: 'Economic Heart',
    live: false,
  },
  {
    name: 'Tangier',
    slug: 'tangier',
    region: 'Tangier-Tetouan-Al Hoceima',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    attractions: 72,
    rating: 4.5,
    tagline: 'Door to Africa',
    live: false,
  },
];

interface ParallaxCardProps {
  city: typeof DESTINATIONS[number];
  index: number;
  isInView: boolean;
  className?: string;
  isLarge?: boolean;
}

function DestinationCard({ city, index, isInView, className, isLarge = false }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageTransform, setImageTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setImageTransform({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setImageTransform({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('group', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/cities/${city.slug}`}
        className="gradient-border-animated relative block h-full overflow-hidden rounded-[1.5rem]"
      >
        <div className="card-inner relative h-full overflow-hidden rounded-[1.5rem]">
          {/* Parallax Image */}
          <div className={cn('relative w-full overflow-hidden', isLarge ? 'h-full min-h-[400px]' : 'aspect-[4/5]')}>
            <div
              className="absolute inset-[-20px] transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate(${imageTransform.x}px, ${imageTransform.y}px) scale(1.1)`,
              }}
            >
              <img
                src={city.image}
                alt={`${city.name}, Morocco - ${city.tagline}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Live Badge */}
            {city.live && (
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-xs font-semibold text-white">Live</span>
              </div>
            )}

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              <span className="text-sm font-bold text-white">{city.rating}</span>
            </div>

            {/* Live Weather Pill */}
            <div className="absolute top-4 right-20 hidden md:flex">
              <WeatherPill city={city.slug} />
            </div>

            {/* Info panel */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <div className="mb-1 flex items-center gap-2">
                <span className="rounded-full bg-[var(--color-primary)]/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {city.attractions} places
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                  {city.tagline}
                </span>
              </div>

              <h3 className={cn(
                'font-[var(--font-display)] font-bold text-white mb-1',
                isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
              )}>
                {city.name}
              </h3>

              <div className="flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="h-3.5 w-3.5" />
                {city.region}
              </div>

              {/* Hover CTA */}
              <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-400 group-hover:max-h-20 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25">
                    Explore {city.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32"
      aria-label="Featured destinations"
    >
      <div className="container-morocco">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]"
            >
              <MapPin className="h-3.5 w-3.5" />
              Featured Destinations
            </motion.span>
            <h2 className="mt-4 mb-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-5xl lg:text-6xl">
              Explore Morocco&apos;s{' '}
              <span className="text-gradient-moroccan">Iconic Cities</span>
            </h2>
            <div className="arabesque-divider mx-auto max-w-md">
              <span className="text-lg">&#9670;</span>
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-secondary)]">
              From the bustling souks of Marrakech to the blue-washed streets of
              Chefchaouen, discover the cities that make Morocco unforgettable.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[1fr] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {/* Hero card - spans 2 cols and 2 rows */}
          <DestinationCard
            city={DESTINATIONS[0]}
            index={0}
            isInView={isInView}
            isLarge
            className="md:col-span-2 md:row-span-2"
          />

          {/* Medium cards */}
          <DestinationCard
            city={DESTINATIONS[1]}
            index={1}
            isInView={isInView}
            className="md:col-span-1"
          />
          <DestinationCard
            city={DESTINATIONS[2]}
            index={2}
            isInView={isInView}
            className="md:col-span-1"
          />

          {/* Third row */}
          <DestinationCard
            city={DESTINATIONS[3]}
            index={3}
            isInView={isInView}
            className="md:col-span-1"
          />
          <DestinationCard
            city={DESTINATIONS[4]}
            index={4}
            isInView={isInView}
            className="md:col-span-1"
          />

          {/* Bottom row - 3 cards */}
          <DestinationCard
            city={DESTINATIONS[5]}
            index={5}
            isInView={isInView}
            className="md:col-span-2 lg:col-span-2"
          />
          <DestinationCard
            city={DESTINATIONS[6]}
            index={6}
            isInView={isInView}
            className="md:col-span-1 lg:col-span-2"
          />
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/cities"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[var(--color-primary)]/30 px-8 py-3.5 font-semibold text-[var(--color-primary)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
          >
            Explore All 50+ Cities
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
