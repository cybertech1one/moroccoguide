'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Star, MapPin, ArrowRight, UtensilsCrossed, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Dish {
  name: string;
  nameAr: string;
  description: string;
  price: string;
  spiceLevel: number;
  image: string;
  tall?: boolean;
}

interface Restaurant {
  name: string;
  city: string;
  cuisineType: string;
  priceRange: string;
  rating: number;
  image: string;
}

const PHOTO_STRIP = [
  { src: '/images/photo-tagine-closeup.webp', alt: 'Moroccan Tagine' },
  { src: '/images/hero-food.webp', alt: 'Couscous Dish' },
  { src: '/images/photo-mint-tea-pouring.webp', alt: 'Mint Tea' },
  { src: '/images/hero-food.webp', alt: 'Pastilla' },
  { src: '/images/hero-spices.webp', alt: 'Spice Market' },
  { src: '/images/hero-food.webp', alt: 'Harira Soup' },
  { src: '/images/photo-moroccan-bread.webp', alt: 'Msemen Bread' },
  { src: '/images/hero-food.webp', alt: 'Moroccan Dining' },
];

const DISHES: Dish[] = [
  {
    name: 'Tagine',
    nameAr: 'طاجين',
    description: 'Iconic slow-cooked stew in a conical clay pot. Lamb, chicken, or vegetable.',
    price: '80-150 MAD',
    spiceLevel: 2,
    image: '/images/photo-tagine-closeup.webp',
    tall: true,
  },
  {
    name: 'Couscous',
    nameAr: 'كسكس',
    description: 'The Friday staple. Hand-rolled semolina with tender meat and seasonal vegetables.',
    price: '70-120 MAD',
    spiceLevel: 1,
    image: '/images/hero-food.webp',
  },
  {
    name: 'Pastilla',
    nameAr: 'بسطيلة',
    description: 'Savory-sweet masterpiece of crispy pastry, pigeon, almonds, and cinnamon.',
    price: '90-160 MAD',
    spiceLevel: 1,
    image: '/images/hero-food.webp',
  },
  {
    name: 'Harira',
    nameAr: 'حريرة',
    description: 'Rich tomato soup with lentils, chickpeas, and lamb. Ramadan tradition.',
    price: '30-50 MAD',
    spiceLevel: 2,
    image: '/images/hero-food.webp',
    tall: true,
  },
  {
    name: 'Msemen',
    nameAr: 'مسمن',
    description: 'Layered flatbread, crispy outside and soft within. Served with honey and butter.',
    price: '10-20 MAD',
    spiceLevel: 0,
    image: '/images/photo-moroccan-bread.webp',
  },
  {
    name: 'Mint Tea',
    nameAr: 'أتاي',
    description: 'The national drink, poured with theatrical flair from a silver teapot.',
    price: '15-30 MAD',
    spiceLevel: 0,
    image: '/images/photo-mint-tea-pouring.webp',
  },
];

const RESTAURANTS: Restaurant[] = [
  {
    name: 'Le Jardin',
    city: 'Marrakech',
    cuisineType: 'Modern Moroccan',
    priceRange: '150-300 MAD',
    rating: 4.6,
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Cafe Clock',
    city: 'Fes',
    cuisineType: 'Fusion Moroccan',
    priceRange: '80-180 MAD',
    rating: 4.5,
    image: '/images/hero-food.webp',
  },
  {
    name: 'Nomad',
    city: 'Marrakech',
    cuisineType: 'Contemporary',
    priceRange: '130-280 MAD',
    rating: 4.7,
    image: '/images/hero-food.webp',
  },
  {
    name: "Rick's Cafe",
    city: 'Casablanca',
    cuisineType: 'Moroccan-French',
    priceRange: '200-400 MAD',
    rating: 4.4,
    image: '/images/hero-food.webp',
  },
  {
    name: 'Taros',
    city: 'Essaouira',
    cuisineType: 'Seafood & Moroccan',
    priceRange: '120-250 MAD',
    rating: 4.5,
    image: '/images/hero-food.webp',
  },
  {
    name: 'Al Fassia',
    city: 'Marrakech',
    cuisineType: 'Traditional Moroccan',
    priceRange: '180-350 MAD',
    rating: 4.8,
    image: '/images/hero-spices.webp',
  },
];

function SpiceLevel({ level, max = 3 }: { level: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" title={`Spice level: ${level}/${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <Flame
          key={i}
          className={cn(
            'h-3.5 w-3.5',
            i < level
              ? 'fill-[var(--color-primary)] text-[var(--color-primary)]'
              : 'text-[var(--color-sand-300)]'
          )}
        />
      ))}
    </div>
  );
}

export default function FoodAndDrink() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0A1520] via-[#0F1F2E] to-[#0A1520] py-20 md:py-28"
      aria-label="Taste Morocco - Food and drink guide"
    >
      {/* Warm overlay pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C49B20' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Section Header */}
      <div className="container-morocco relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            <UtensilsCrossed className="h-3.5 w-3.5" />
            A Culinary Journey
          </span>
          <h2 className="mb-4 mt-4 font-[var(--font-display)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Taste Morocco
          </h2>
          <div className="mx-auto flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
            <span className="text-lg text-[var(--color-accent)]">&#9670;</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Aromatic spices, slow-cooked tagines, and the ritual of mint tea --
            discover the dishes that define this culinary paradise.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling Photo Strip */}
      <div className="relative mb-16 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A1520] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A1520] to-transparent" />
        <div className="flex animate-marquee gap-4">
          {[...PHOTO_STRIP, ...PHOTO_STRIP].map((photo, i) => (
            <div key={i} className="h-48 w-72 shrink-0 overflow-hidden rounded-xl md:h-56 md:w-80">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-morocco relative z-10">
        {/* Featured Dishes - Masonry-like Grid */}
        <div className="mb-16">
          <h3 className="mb-8 text-center font-[var(--font-display)] text-2xl font-bold text-white">
            Iconic Moroccan Dishes
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className={cn(
                  'group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:bg-white/10 hover:-translate-y-1',
                  dish.tall && 'sm:row-span-2'
                )}
              >
                <div className={cn('relative overflow-hidden', dish.tall ? 'aspect-[3/4]' : 'aspect-[16/10]')}>
                  <img
                    src={dish.image}
                    alt={`${dish.name} - Traditional Moroccan dish`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Arabic name at top */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="font-[var(--font-arabic)] text-2xl text-white/40"
                      dir="rtl"
                      lang="ar"
                    >
                      {dish.nameAr}
                    </span>
                  </div>

                  {/* Bottom content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <h4 className="text-xl font-bold text-white">{dish.name}</h4>
                      <span className="text-sm font-medium text-[var(--color-accent)]">{dish.price}</span>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-white/70">
                      {dish.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <SpiceLevel level={dish.spiceLevel} />
                      <span className="text-xs text-white/50">
                        {dish.spiceLevel === 0 ? 'No spice' : dish.spiceLevel === 1 ? 'Mild' : dish.spiceLevel === 2 ? 'Medium' : 'Spicy'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Top Restaurants */}
        <div className="mb-14">
          <h3 className="mb-8 text-center font-[var(--font-display)] text-2xl font-bold text-white">
            Top Restaurants
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESTAURANTS.map((restaurant, i) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/restaurants/${restaurant.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="group flex gap-4 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-white/10"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <h4 className="truncate font-bold text-white transition-colors group-hover:text-[var(--color-accent)]">
                      {restaurant.name}
                    </h4>
                    <div className="mb-1 flex items-center gap-1.5 text-sm text-white/50">
                      <MapPin className="h-3.5 w-3.5" />
                      {restaurant.city}
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-white/90">{restaurant.rating}</span>
                      </div>
                      <span className="text-xs text-white/40">{restaurant.cuisineType}</span>
                    </div>
                    <span className="text-xs font-medium text-[var(--color-green-light)]">
                      {restaurant.priceRange}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/restaurants"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Discover 300+ Restaurants
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/tours?category=food"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-accent)]/60 px-8 py-3.5 font-semibold text-[var(--color-accent)] transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
          >
            <UtensilsCrossed className="h-5 w-5" />
            Book a Food Tour
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* CSS marquee animation injected via style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
