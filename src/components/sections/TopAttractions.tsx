'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Star, MapPin, ArrowRight, Award, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Attraction {
  name: string;
  city: string;
  type: string;
  rating: number;
  snippet: string;
  image: string;
  unesco?: boolean;
}

const FEATURED_ATTRACTION: Attraction & { fullDescription: string } = {
  name: 'Jemaa el-Fnaa',
  city: 'Marrakech',
  type: 'Square & Market',
  rating: 4.8,
  snippet:
    'The heartbeat of Marrakech -- a UNESCO-recognized masterpiece of intangible cultural heritage. By day, it is a sprawling open-air market of orange juice vendors, snake charmers, and henna artists. By night, it transforms into the largest open-air restaurant in the world.',
  fullDescription:
    'Jemaa el-Fnaa is the cultural epicenter of Morocco and a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity. This vast, irregular square at the entrance to the Marrakech medina has been the city\'s main gathering place since its founding in 1070 AD. During the day, it fills with storytellers, acrobats, musicians, herbalists, and snake charmers. As the sun sets, dozens of food stalls spring up, and the entire square becomes a mesmerizing spectacle of smoke, music, and conversation. It is one of the most vibrant public spaces on Earth.',
  image: '/images/hero-marrakech.webp',
  unesco: true,
};

const ATTRACTIONS: Attraction[] = [
  {
    name: 'Hassan II Mosque',
    city: 'Casablanca',
    type: 'Mosque',
    rating: 4.9,
    snippet:
      'The largest mosque in Africa with the tallest minaret in the world at 210m. Built partially over the Atlantic Ocean.',
    image: '/images/hero-hassan-mosque.webp',
    unesco: false,
  },
  {
    name: 'Majorelle Garden',
    city: 'Marrakech',
    type: 'Garden & Museum',
    rating: 4.7,
    snippet:
      'A two-and-a-half-acre botanical garden designed by French painter Jacques Majorelle in 1923, later restored by Yves Saint Laurent.',
    image: '/images/hero-majorelle-garden.webp',
  },
  {
    name: 'Fes Medina',
    city: 'Fes',
    type: 'Historic District',
    rating: 4.8,
    snippet:
      'The world\'s largest car-free urban area and home to Al Quaraouiyine, the oldest continuously operating university (founded 859 AD).',
    image: '/images/hero-fes-tanneries.webp',
    unesco: true,
  },
  {
    name: 'Ait Ben Haddou',
    city: 'Ouarzazate',
    type: 'Fortified Village',
    rating: 4.8,
    snippet:
      'A stunning ksar along the former caravan route between the Sahara and Marrakech. Featured in Game of Thrones and Gladiator.',
    image: '/images/hero-ait-benhaddou.webp',
    unesco: true,
  },
  {
    name: 'Chefchaouen Blue Medina',
    city: 'Chefchaouen',
    type: 'Historic Town',
    rating: 4.9,
    snippet:
      'The famous blue-washed mountain town of northern Morocco. Every alley and stairway is painted in shades of blue.',
    image: '/images/hero-chefchaouen-drone.webp',
  },
  {
    name: 'Erg Chebbi Dunes',
    city: 'Merzouga',
    type: 'Natural Wonder',
    rating: 4.9,
    snippet:
      'Towering sand dunes reaching 150 meters high at the edge of the Sahara. The ultimate desert experience with camel treks and stargazing.',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Volubilis Roman Ruins',
    city: 'Meknes',
    type: 'Archaeological Site',
    rating: 4.6,
    snippet:
      'The best-preserved Roman ruins in North Africa, dating to the 3rd century BC. Remarkable mosaics and triumphal arch.',
    image: '/images/hero-marrakech.webp',
    unesco: true,
  },
  {
    name: 'Todra Gorge',
    city: 'Tinghir',
    type: 'Natural Wonder',
    rating: 4.7,
    snippet:
      'A spectacular canyon with 300m-high vertical walls narrowing to a passage just 10 meters wide. A rock climbing paradise.',
    image: '/images/hero-ait-benhaddou.webp',
  },
  {
    name: 'Essaouira Ramparts',
    city: 'Essaouira',
    type: 'Fortification',
    rating: 4.6,
    snippet:
      'The 18th-century Portuguese-built fortifications overlooking the Atlantic. Walk the sea-battered ramparts for sweeping ocean views.',
    image: '/images/hero-coastal.webp',
    unesco: true,
  },
];

export default function TopAttractions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
      aria-label="Top attractions in Morocco"
    >
      <div className="container-morocco">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Morocco&apos;s Top Attractions
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            From ancient medinas to Saharan dunes, these are the destinations that define Morocco.
          </p>
        </motion.div>

        {/* Featured Attraction (#1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/attractions/jemaa-el-fnaa"
            className="group relative block overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[21/9] overflow-hidden md:aspect-[3/1]">
              <img
                src={FEATURED_ATTRACTION.image}
                alt={`${FEATURED_ATTRACTION.name}, ${FEATURED_ATTRACTION.city} - Morocco's top attraction`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-center p-6 md:p-12">
              <div className="max-w-xl">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="tag tag-accent flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    #1 Attraction
                  </span>
                  {FEATURED_ATTRACTION.unesco && (
                    <span className="tag flex items-center gap-1 border-[var(--color-secondary-200)] bg-[var(--color-secondary-50)] text-[var(--color-secondary)]">
                      <Shield className="h-3 w-3" />
                      UNESCO Heritage
                    </span>
                  )}
                  <span className="tag bg-white/20 text-white">
                    {FEATURED_ATTRACTION.type}
                  </span>
                </div>
                <h3 className="mb-2 font-[var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                  {FEATURED_ATTRACTION.name}
                </h3>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
                    <span className="text-sm text-white/90">
                      {FEATURED_ATTRACTION.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-sm font-semibold text-white">
                      {FEATURED_ATTRACTION.rating}
                    </span>
                  </div>
                </div>
                <p className="mb-4 hidden text-sm leading-relaxed text-white/80 md:line-clamp-3 md:block">
                  {FEATURED_ATTRACTION.fullDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition-colors group-hover:text-white">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Attraction Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ATTRACTIONS.map((attraction, i) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
            >
              <Link
                href={`/attractions/${attraction.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="card-moroccan group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={`${attraction.name}, ${attraction.city}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="tag bg-black/50 text-white backdrop-blur-sm">
                      {attraction.type}
                    </span>
                    {attraction.unesco && (
                      <span className="tag flex items-center gap-1 bg-[var(--color-secondary)]/80 text-white backdrop-blur-sm">
                        <Shield className="h-3 w-3" />
                        UNESCO
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-1 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {attraction.name}
                  </h3>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {attraction.city}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      <span className="text-sm font-medium">
                        {attraction.rating}
                      </span>
                    </div>
                  </div>
                  <p className="line-clamp-2 text-sm text-[var(--text-secondary)]">
                    {attraction.snippet}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            See All 500+ Attractions
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
