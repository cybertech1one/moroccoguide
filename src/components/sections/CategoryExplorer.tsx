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
    { name: 'Jemaa el-Fnaa', city: 'Marrakech', rating: 4.8, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1591383553821-46cfbdbf5d3f?q=80&w=400' },
    { name: 'Hassan II Mosque', city: 'Casablanca', rating: 4.9, priceRange: '130 MAD', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
    { name: 'Majorelle Garden', city: 'Marrakech', rating: 4.7, priceRange: '150 MAD', image: 'https://images.unsplash.com/photo-1590003504444-71404792acd8?q=80&w=400' },
    { name: 'Bab Boujloud', city: 'Fes', rating: 4.6, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'Ait Ben Haddou', city: 'Ouarzazate', rating: 4.8, priceRange: '70 MAD', image: 'https://images.unsplash.com/photo-1548017306-3a97b3b43040?q=80&w=400' },
  ],
  hotels: [
    { name: 'La Mamounia', city: 'Marrakech', rating: 4.9, priceRange: '5,000+ MAD', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400' },
    { name: 'Riad Fes', city: 'Fes', rating: 4.8, priceRange: '2,500 MAD', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=400' },
    { name: 'Kasbah Tamadot', city: 'Atlas Mountains', rating: 4.9, priceRange: '6,000+ MAD', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=400' },
    { name: 'Sahara Luxury Camp', city: 'Merzouga', rating: 4.7, priceRange: '3,500 MAD', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=400' },
    { name: 'Heure Bleue Palais', city: 'Essaouira', rating: 4.6, priceRange: '2,000 MAD', image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=400' },
  ],
  restaurants: [
    { name: 'Le Jardin', city: 'Marrakech', rating: 4.6, priceRange: '150-300 MAD', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400' },
    { name: 'Cafe Clock', city: 'Fes', rating: 4.5, priceRange: '80-180 MAD', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400' },
    { name: 'Rick\'s Cafe', city: 'Casablanca', rating: 4.4, priceRange: '200-400 MAD', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400' },
    { name: 'Taros', city: 'Essaouira', rating: 4.5, priceRange: '120-250 MAD', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=400' },
    { name: 'Nomad', city: 'Marrakech', rating: 4.7, priceRange: '130-280 MAD', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=400' },
  ],
  activities: [
    { name: 'Sahara Camel Trek', city: 'Merzouga', rating: 4.9, priceRange: '600 MAD', image: 'https://images.unsplash.com/photo-1548017306-3a97b3b43040?q=80&w=400' },
    { name: 'Atlas Mountain Hike', city: 'Imlil', rating: 4.8, priceRange: '450 MAD', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400' },
    { name: 'Surf Lessons', city: 'Essaouira', rating: 4.6, priceRange: '350 MAD', image: 'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?q=80&w=400' },
    { name: 'Quad Biking Palmeraie', city: 'Marrakech', rating: 4.5, priceRange: '500 MAD', image: 'https://images.unsplash.com/photo-1596394723269-e1e8c8236c6d?q=80&w=400' },
    { name: 'Cooking Class', city: 'Marrakech', rating: 4.8, priceRange: '400 MAD', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400' },
  ],
  guides: [
    { name: 'Medina Walking Tour', city: 'Fes', rating: 4.9, priceRange: '300 MAD', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'Desert Stars Guide', city: 'Merzouga', rating: 4.8, priceRange: '500 MAD', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=400' },
    { name: 'Artisan Workshop Tour', city: 'Fes', rating: 4.7, priceRange: '250 MAD', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=400' },
    { name: 'Photography Tour', city: 'Chefchaouen', rating: 4.8, priceRange: '400 MAD', image: 'https://images.unsplash.com/photo-1553244006-20e9b0aadec7?q=80&w=400' },
  ],
  markets: [
    { name: 'Souk Semmarine', city: 'Marrakech', rating: 4.7, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1591383553821-46cfbdbf5d3f?q=80&w=400' },
    { name: 'Tanneries Chouara', city: 'Fes', rating: 4.6, priceRange: 'Free entry', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'Spice Market', city: 'Marrakech', rating: 4.5, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1596394723269-e1e8c8236c6d?q=80&w=400' },
    { name: 'Habous Quarter', city: 'Casablanca', rating: 4.4, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
  ],
  hammams: [
    { name: 'Heritage Spa', city: 'Marrakech', rating: 4.8, priceRange: '500 MAD', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400' },
    { name: 'Les Bains de Marrakech', city: 'Marrakech', rating: 4.7, priceRange: '600 MAD', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=400' },
    { name: 'Hammam Mouassine', city: 'Marrakech', rating: 4.5, priceRange: '100 MAD', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=400' },
    { name: 'Royal Mansour Spa', city: 'Marrakech', rating: 4.9, priceRange: '1,500 MAD', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400' },
  ],
  nightlife: [
    { name: 'Comptoir Darna', city: 'Marrakech', rating: 4.5, priceRange: '200+ MAD', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400' },
    { name: 'Sky Bar - Kenzi Tower', city: 'Casablanca', rating: 4.3, priceRange: '150+ MAD', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
    { name: 'Kabana Rooftop', city: 'Marrakech', rating: 4.4, priceRange: '180+ MAD', image: 'https://images.unsplash.com/photo-1591383553821-46cfbdbf5d3f?q=80&w=400' },
    { name: 'Le Dhow', city: 'Rabat', rating: 4.2, priceRange: '130+ MAD', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400' },
  ],
  transport: [
    { name: 'ONCF Train Network', city: 'Nationwide', rating: 4.2, priceRange: '50-300 MAD', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
    { name: 'CTM Bus Service', city: 'Nationwide', rating: 4.0, priceRange: '30-200 MAD', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400' },
    { name: 'Grand Taxi', city: 'All Cities', rating: 3.8, priceRange: '20-100 MAD', image: 'https://images.unsplash.com/photo-1596394723269-e1e8c8236c6d?q=80&w=400' },
    { name: 'Al Boraq High Speed', city: 'Tangier-Casablanca', rating: 4.5, priceRange: '150-350 MAD', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=400' },
  ],
  clinics: [
    { name: 'Clinique du Parc', city: 'Marrakech', rating: 4.3, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400' },
    { name: 'Clinique Achifae', city: 'Casablanca', rating: 4.4, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
    { name: 'Clinique Atlas', city: 'Fes', rating: 4.2, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'CHU Ibn Sina', city: 'Rabat', rating: 4.1, priceRange: 'Public', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400' },
  ],
  festivals: [
    { name: 'Gnaoua World Music', city: 'Essaouira', rating: 4.9, priceRange: 'Free-500 MAD', image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=400' },
    { name: 'Fes Festival of World Sacred Music', city: 'Fes', rating: 4.8, priceRange: '200-800 MAD', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'Marrakech International Film Festival', city: 'Marrakech', rating: 4.7, priceRange: 'Varies', image: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=400' },
    { name: 'Rose Festival', city: 'Kelaat M\'Gouna', rating: 4.6, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1548017306-3a97b3b43040?q=80&w=400' },
  ],
  beaches: [
    { name: 'Legzira Beach', city: 'Sidi Ifni', rating: 4.8, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=400' },
    { name: 'Essaouira Beach', city: 'Essaouira', rating: 4.6, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=400' },
    { name: 'Dakhla Lagoon', city: 'Dakhla', rating: 4.9, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=400' },
    { name: 'Taghazout Beach', city: 'Agadir', rating: 4.7, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1596394723269-e1e8c8236c6d?q=80&w=400' },
  ],
  museums: [
    { name: 'Museum of Moroccan Judaism', city: 'Casablanca', rating: 4.5, priceRange: '30 MAD', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
    { name: 'Dar Si Said Museum', city: 'Marrakech', rating: 4.6, priceRange: '30 MAD', image: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=400' },
    { name: 'Dar Batha Museum', city: 'Fes', rating: 4.5, priceRange: '20 MAD', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'MACMA', city: 'Marrakech', rating: 4.4, priceRange: '50 MAD', image: 'https://images.unsplash.com/photo-1591383553821-46cfbdbf5d3f?q=80&w=400' },
  ],
  mosques: [
    { name: 'Hassan II Mosque', city: 'Casablanca', rating: 4.9, priceRange: '130 MAD', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=400' },
    { name: 'Koutoubia Mosque', city: 'Marrakech', rating: 4.8, priceRange: 'Exterior only', image: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=400' },
    { name: 'Al Quaraouiyine', city: 'Fes', rating: 4.9, priceRange: 'Limited access', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'Hassan Tower', city: 'Rabat', rating: 4.7, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400' },
  ],
  parks: [
    { name: 'Majorelle Garden', city: 'Marrakech', rating: 4.7, priceRange: '150 MAD', image: 'https://images.unsplash.com/photo-1590003504444-71404792acd8?q=80&w=400' },
    { name: 'Toubkal National Park', city: 'Atlas Mountains', rating: 4.8, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=400' },
    { name: 'Talassemtane National Park', city: 'Chefchaouen', rating: 4.6, priceRange: 'Free', image: 'https://images.unsplash.com/photo-1553244006-20e9b0aadec7?q=80&w=400' },
    { name: 'Paradise Valley', city: 'Agadir', rating: 4.7, priceRange: '20 MAD', image: 'https://images.unsplash.com/photo-1596394723269-e1e8c8236c6d?q=80&w=400' },
  ],
  education: [
    { name: 'Al Quaraouiyine University', city: 'Fes', rating: 4.8, priceRange: 'N/A', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=400' },
    { name: 'Arabic Language Center', city: 'Rabat', rating: 4.5, priceRange: '2,000 MAD/week', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400' },
    { name: 'Cooking School La Maison', city: 'Marrakech', rating: 4.7, priceRange: '450 MAD', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400' },
    { name: 'Surf School Taghazout', city: 'Agadir', rating: 4.6, priceRange: '350 MAD', image: 'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?q=80&w=400' },
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
