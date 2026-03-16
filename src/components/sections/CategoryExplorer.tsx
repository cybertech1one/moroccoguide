'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Landmark,
  Building,
  UtensilsCrossed,
  Activity,
  Users,
  ShoppingBag,
  Heart,
  Moon,
  Car,
  Cross,
  Calendar,
  Waves,
  BookOpen,
  Star,
  TreePine,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type CategoryKey =
  | 'attractions'
  | 'hotels'
  | 'restaurants'
  | 'activities'
  | 'guides'
  | 'markets'
  | 'hammams'
  | 'nightlife'
  | 'transport'
  | 'clinics'
  | 'festivals'
  | 'beaches'
  | 'museums'
  | 'mosques'
  | 'parks'
  | 'education';

interface CategoryItem {
  name: string;
  city: string;
  rating: number;
  priceRange: string;
  image: string;
}

const CATEGORIES: {
  key: CategoryKey;
  label: string;
  icon: typeof Landmark;
}[] = [
  { key: 'attractions', label: 'Attractions & Monuments', icon: Landmark },
  { key: 'hotels', label: 'Hotels & Riads', icon: Building },
  { key: 'restaurants', label: 'Restaurants & Cafes', icon: UtensilsCrossed },
  { key: 'activities', label: 'Activities & Adventures', icon: Activity },
  { key: 'guides', label: 'Local Guides', icon: Users },
  { key: 'markets', label: 'Markets & Shopping', icon: ShoppingBag },
  { key: 'hammams', label: 'Hammams & Wellness', icon: Heart },
  { key: 'nightlife', label: 'Nightlife', icon: Moon },
  { key: 'transport', label: 'Transport', icon: Car },
  { key: 'clinics', label: 'Clinics & Health', icon: Cross },
  { key: 'festivals', label: 'Festivals & Events', icon: Calendar },
  { key: 'beaches', label: 'Beaches', icon: Waves },
  { key: 'museums', label: 'Museums', icon: BookOpen },
  { key: 'mosques', label: 'Mosques & Religious', icon: Star },
  { key: 'parks', label: 'Parks & Nature', icon: TreePine },
  { key: 'education', label: 'Education', icon: GraduationCap },
];

const CATEGORY_ITEMS: Record<CategoryKey, CategoryItem[]> = {
  attractions: [
    { name: 'Jemaa el-Fnaa', city: 'Marrakech', rating: 4.8, priceRange: 'Free', image: '/images/hero-marrakech.webp' },
    { name: 'Hassan II Mosque', city: 'Casablanca', rating: 4.9, priceRange: '130 MAD', image: '/images/hero-hassan-mosque.webp' },
    { name: 'Majorelle Garden', city: 'Marrakech', rating: 4.7, priceRange: '150 MAD', image: '/images/hero-majorelle-garden.webp' },
    { name: 'Bab Boujloud', city: 'Fes', rating: 4.6, priceRange: 'Free', image: '/images/hero-fes-tanneries.webp' },
    { name: 'Ait Ben Haddou', city: 'Ouarzazate', rating: 4.8, priceRange: '70 MAD', image: '/images/hero-ait-benhaddou.webp' },
  ],
  hotels: [
    { name: 'La Mamounia', city: 'Marrakech', rating: 4.9, priceRange: '5,000+ MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Riad Fes', city: 'Fes', rating: 4.8, priceRange: '2,500 MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Kasbah Tamadot', city: 'Atlas Mountains', rating: 4.9, priceRange: '6,000+ MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Sahara Luxury Camp', city: 'Merzouga', rating: 4.7, priceRange: '3,500 MAD', image: '/images/hero-desert.webp' },
    { name: 'Heure Bleue Palais', city: 'Essaouira', rating: 4.6, priceRange: '2,000 MAD', image: '/images/hero-coastal.webp' },
  ],
  restaurants: [
    { name: 'Le Jardin', city: 'Marrakech', rating: 4.6, priceRange: '150-300 MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Cafe Clock', city: 'Fes', rating: 4.5, priceRange: '80-180 MAD', image: '/images/hero-food.webp' },
    { name: 'Rick\'s Cafe', city: 'Casablanca', rating: 4.4, priceRange: '200-400 MAD', image: '/images/hero-food.webp' },
    { name: 'Taros', city: 'Essaouira', rating: 4.5, priceRange: '120-250 MAD', image: '/images/hero-food.webp' },
    { name: 'Nomad', city: 'Marrakech', rating: 4.7, priceRange: '130-280 MAD', image: '/images/hero-food.webp' },
  ],
  activities: [
    { name: 'Sahara Camel Trek', city: 'Merzouga', rating: 4.9, priceRange: '600 MAD', image: '/images/hero-ait-benhaddou.webp' },
    { name: 'Atlas Mountain Hike', city: 'Imlil', rating: 4.8, priceRange: '450 MAD', image: '/images/hero-atlas.webp' },
    { name: 'Surf Lessons', city: 'Essaouira', rating: 4.6, priceRange: '350 MAD', image: '/images/hero-surfing.webp' },
    { name: 'Quad Biking Palmeraie', city: 'Marrakech', rating: 4.5, priceRange: '500 MAD', image: '/images/hero-marrakech.webp' },
    { name: 'Cooking Class', city: 'Marrakech', rating: 4.8, priceRange: '400 MAD', image: '/images/hero-spices.webp' },
  ],
  guides: [
    { name: 'Medina Walking Tour', city: 'Fes', rating: 4.9, priceRange: '300 MAD', image: '/images/hero-fes-tanneries.webp' },
    { name: 'Desert Stars Guide', city: 'Merzouga', rating: 4.8, priceRange: '500 MAD', image: '/images/hero-desert.webp' },
    { name: 'Artisan Workshop Tour', city: 'Fes', rating: 4.7, priceRange: '250 MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Photography Tour', city: 'Chefchaouen', rating: 4.8, priceRange: '400 MAD', image: '/images/hero-chefchaouen-drone.webp' },
  ],
  markets: [
    { name: 'Souk Semmarine', city: 'Marrakech', rating: 4.7, priceRange: 'Varies', image: '/images/hero-marrakech.webp' },
    { name: 'Tanneries Chouara', city: 'Fes', rating: 4.6, priceRange: 'Free entry', image: '/images/hero-fes-tanneries.webp' },
    { name: 'Spice Market', city: 'Marrakech', rating: 4.5, priceRange: 'Varies', image: '/images/hero-marrakech.webp' },
    { name: 'Habous Quarter', city: 'Casablanca', rating: 4.4, priceRange: 'Varies', image: '/images/hero-hassan-mosque.webp' },
  ],
  hammams: [
    { name: 'Heritage Spa', city: 'Marrakech', rating: 4.8, priceRange: '500 MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Les Bains de Marrakech', city: 'Marrakech', rating: 4.7, priceRange: '600 MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Hammam Mouassine', city: 'Marrakech', rating: 4.5, priceRange: '100 MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Royal Mansour Spa', city: 'Marrakech', rating: 4.9, priceRange: '1,500 MAD', image: '/images/hero-riad-interior.webp' },
  ],
  nightlife: [
    { name: 'Comptoir Darna', city: 'Marrakech', rating: 4.5, priceRange: '200+ MAD', image: '/images/hero-riad-interior.webp' },
    { name: 'Sky Bar - Kenzi Tower', city: 'Casablanca', rating: 4.3, priceRange: '150+ MAD', image: '/images/hero-hassan-mosque.webp' },
    { name: 'Kabana Rooftop', city: 'Marrakech', rating: 4.4, priceRange: '180+ MAD', image: '/images/hero-marrakech.webp' },
    { name: 'Le Dhow', city: 'Rabat', rating: 4.2, priceRange: '130+ MAD', image: '/images/hero-coastal.webp' },
  ],
  transport: [
    { name: 'ONCF Train Network', city: 'Nationwide', rating: 4.2, priceRange: '50-300 MAD', image: '/images/hero-hassan-mosque.webp' },
    { name: 'CTM Bus Service', city: 'Nationwide', rating: 4.0, priceRange: '30-200 MAD', image: '/images/hero-coastal.webp' },
    { name: 'Grand Taxi', city: 'All Cities', rating: 3.8, priceRange: '20-100 MAD', image: '/images/hero-marrakech.webp' },
    { name: 'Al Boraq High Speed', city: 'Tangier-Casablanca', rating: 4.5, priceRange: '150-350 MAD', image: '/images/hero-souk-lamps.webp' },
  ],
  clinics: [
    { name: 'Clinique du Parc', city: 'Marrakech', rating: 4.3, priceRange: 'Varies', image: '/images/hero-riad-interior.webp' },
    { name: 'Clinique Achifae', city: 'Casablanca', rating: 4.4, priceRange: 'Varies', image: '/images/hero-hassan-mosque.webp' },
    { name: 'Clinique Atlas', city: 'Fes', rating: 4.2, priceRange: 'Varies', image: '/images/hero-fes-tanneries.webp' },
    { name: 'CHU Ibn Sina', city: 'Rabat', rating: 4.1, priceRange: 'Public', image: '/images/hero-coastal.webp' },
  ],
  festivals: [
    { name: 'Gnaoua World Music', city: 'Essaouira', rating: 4.9, priceRange: 'Free-500 MAD', image: '/images/hero-coastal.webp' },
    { name: 'Fes Festival of World Sacred Music', city: 'Fes', rating: 4.8, priceRange: '200-800 MAD', image: '/images/hero-fes-tanneries.webp' },
    { name: 'Marrakech International Film Festival', city: 'Marrakech', rating: 4.7, priceRange: 'Varies', image: '/images/hero-marrakech.webp' },
    { name: 'Rose Festival', city: 'Kelaat M\'Gouna', rating: 4.6, priceRange: 'Free', image: '/images/hero-ait-benhaddou.webp' },
  ],
  beaches: [
    { name: 'Legzira Beach', city: 'Sidi Ifni', rating: 4.8, priceRange: 'Free', image: '/images/photo-fantasia-tbourida.webp' },
    { name: 'Essaouira Beach', city: 'Essaouira', rating: 4.6, priceRange: 'Free', image: '/images/hero-coastal.webp' },
    { name: 'Dakhla Lagoon', city: 'Dakhla', rating: 4.9, priceRange: 'Free', image: '/images/photo-fantasia-tbourida.webp' },
    { name: 'Taghazout Beach', city: 'Agadir', rating: 4.7, priceRange: 'Free', image: '/images/hero-marrakech.webp' },
  ],
  museums: [
    { name: 'Museum of Moroccan Judaism', city: 'Casablanca', rating: 4.5, priceRange: '30 MAD', image: '/images/hero-hassan-mosque.webp' },
    { name: 'Dar Si Said Museum', city: 'Marrakech', rating: 4.6, priceRange: '30 MAD', image: '/images/hero-marrakech.webp' },
    { name: 'Dar Batha Museum', city: 'Fes', rating: 4.5, priceRange: '20 MAD', image: '/images/hero-fes-tanneries.webp' },
    { name: 'MACMA', city: 'Marrakech', rating: 4.4, priceRange: '50 MAD', image: '/images/hero-marrakech.webp' },
  ],
  mosques: [
    { name: 'Hassan II Mosque', city: 'Casablanca', rating: 4.9, priceRange: '130 MAD', image: '/images/hero-hassan-mosque.webp' },
    { name: 'Koutoubia Mosque', city: 'Marrakech', rating: 4.8, priceRange: 'Exterior only', image: '/images/hero-marrakech.webp' },
    { name: 'Al Quaraouiyine', city: 'Fes', rating: 4.9, priceRange: 'Limited access', image: '/images/hero-fes-tanneries.webp' },
    { name: 'Hassan Tower', city: 'Rabat', rating: 4.7, priceRange: 'Free', image: '/images/hero-coastal.webp' },
  ],
  parks: [
    { name: 'Majorelle Garden', city: 'Marrakech', rating: 4.7, priceRange: '150 MAD', image: '/images/hero-majorelle-garden.webp' },
    { name: 'Toubkal National Park', city: 'Atlas Mountains', rating: 4.8, priceRange: 'Free', image: '/images/hero-atlas.webp' },
    { name: 'Talassemtane National Park', city: 'Chefchaouen', rating: 4.6, priceRange: 'Free', image: '/images/hero-chefchaouen-drone.webp' },
    { name: 'Paradise Valley', city: 'Agadir', rating: 4.7, priceRange: '20 MAD', image: '/images/hero-marrakech.webp' },
  ],
  education: [
    { name: 'Al Quaraouiyine University', city: 'Fes', rating: 4.8, priceRange: 'N/A', image: '/images/hero-fes-tanneries.webp' },
    { name: 'Arabic Language Center', city: 'Rabat', rating: 4.5, priceRange: '2,000 MAD/week', image: '/images/hero-coastal.webp' },
    { name: 'Cooking School La Maison', city: 'Marrakech', rating: 4.7, priceRange: '450 MAD', image: '/images/hero-spices.webp' },
    { name: 'Surf School Taghazout', city: 'Agadir', rating: 4.6, priceRange: '350 MAD', image: '/images/hero-surfing.webp' },
  ],
};

export default function CategoryExplorer() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('attractions');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = CATEGORY_ITEMS[activeCategory];

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--surface-muted)] py-16 md:py-24"
      aria-label="Explore by category"
    >
      <div className="container-morocco">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 font-[var(--font-display)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Everything You Need in Morocco
          </h2>
          <div className="arabesque-divider mx-auto max-w-md">
            <span className="text-lg">&#9670;</span>
          </div>
        </motion.div>

        {/* Scrollable Category Bar */}
        <div className="relative mb-10">
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-2 overflow-x-auto pb-3"
            role="tablist"
            aria-label="Category filters"
          >
            {CATEGORIES.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeCategory === key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  'flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all',
                  activeCategory === key
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)]'
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[var(--surface-muted)]" />
        </div>

        {/* Category Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            role="tabpanel"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={`/search?q=${encodeURIComponent(item.name)}`}
                className="group flex gap-4 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <h3 className="truncate text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{item.city}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      <span className="text-xs font-medium">{item.rating}</span>
                    </div>
                    <span className="text-xs text-[var(--text-muted)]">
                      {item.priceRange}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <Link
            href={`/${activeCategory}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            View all {CATEGORIES.find((c) => c.key === activeCategory)?.label}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
