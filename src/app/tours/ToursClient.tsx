'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Mountain,
  Search,
  Gauge,
  CalendarDays,
  Users,
  Camera,
  Utensils,
  Heart,
  Tent,
  Palette,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type TourCategory =
  | 'Desert'
  | 'Cultural'
  | 'Adventure'
  | 'Food'
  | 'Wellness'
  | 'Photography'
  | 'Family';

type Difficulty = 'Easy' | 'Moderate' | 'Challenging';

interface Tour {
  name: string;
  slug: string;
  cityName: string;
  description: string;
  durationDays: number;
  priceFromMad: number;
  difficulty: Difficulty;
  category: TourCategory;
  highlights: string[];
  rating: number;
  image: string;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const CATEGORIES: TourCategory[] = [
  'Desert',
  'Cultural',
  'Adventure',
  'Food',
  'Wellness',
  'Photography',
  'Family',
];

const categoryIcons: Record<TourCategory, React.ReactNode> = {
  Desert: <Tent className="w-4 h-4" />,
  Cultural: <Palette className="w-4 h-4" />,
  Adventure: <Mountain className="w-4 h-4" />,
  Food: <Utensils className="w-4 h-4" />,
  Wellness: <Heart className="w-4 h-4" />,
  Photography: <Camera className="w-4 h-4" />,
  Family: <Users className="w-4 h-4" />,
};

const difficultyColors: Record<Difficulty, string> = {
  Easy: 'bg-green/10 text-green border-green/20',
  Moderate: 'bg-accent/10 text-accent-dark border-accent/20',
  Challenging: 'bg-primary/10 text-primary border-primary/20',
};

/* ═══════════════════════════════════════════════════════════════
   CLIENT SECTION
   ═══════════════════════════════════════════════════════════════ */

export default function ToursClientSection({ tours }: { tours: Tour[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [durationRange, setDurationRange] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !t.name.toLowerCase().includes(q) &&
          !t.cityName.toLowerCase().includes(q) &&
          !t.description.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedCategory !== 'all' && t.category !== selectedCategory) return false;
      if (selectedDifficulty !== 'all' && t.difficulty !== selectedDifficulty) return false;
      if (durationRange !== 'all') {
        if (durationRange === '1' && t.durationDays !== 1) return false;
        if (durationRange === '2-3' && (t.durationDays < 2 || t.durationDays > 3)) return false;
        if (durationRange === '4-7' && (t.durationDays < 4 || t.durationDays > 7)) return false;
        if (durationRange === '8+' && t.durationDays < 8) return false;
      }
      if (priceRange !== 'all') {
        if (priceRange === 'budget' && t.priceFromMad > 1000) return false;
        if (priceRange === 'mid' && (t.priceFromMad < 1000 || t.priceFromMad > 5000)) return false;
        if (priceRange === 'premium' && t.priceFromMad < 5000) return false;
      }
      return true;
    });
  }, [tours, searchQuery, selectedCategory, selectedDifficulty, durationRange, priceRange]);

  return (
    <div>
      {/* Filters */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Search tours"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
            aria-label="Filter by difficulty"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Challenging">Challenging</option>
          </select>
          <select
            value={durationRange}
            onChange={(e) => setDurationRange(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
            aria-label="Filter by duration"
          >
            <option value="all">Any Duration</option>
            <option value="1">Day Trip</option>
            <option value="2-3">2-3 Days</option>
            <option value="4-7">4-7 Days</option>
            <option value="8+">8+ Days</option>
          </select>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
            aria-label="Filter by price"
          >
            <option value="all">Any Price</option>
            <option value="budget">Under 1,000 MAD</option>
            <option value="mid">1,000 - 5,000 MAD</option>
            <option value="premium">5,000+ MAD</option>
          </select>
        </div>
        <p className="text-sm text-text-muted mt-3">
          Showing {filtered.length} of {tours.length} tours
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">No tours found</h3>
          <p className="text-text-muted">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link href={`/tours/${tour.slug}`} className="card-moroccan group overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Duration badge */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
          <CalendarDays className="w-3 h-3" />
          {tour.durationDays === 1 ? 'Day Trip' : `${tour.durationDays} Days`}
        </div>
        {/* Category badge */}
        <div className="absolute top-3 right-3 tag tag-accent inline-flex items-center gap-1">
          {categoryIcons[tour.category]}
          {tour.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug mb-2">
          {tour.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-text-muted mb-2">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          {tour.cityName}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1 line-clamp-2">
          {tour.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tour.highlights.slice(0, 3).map((h) => (
            <span key={h} className="tag tag-secondary text-[11px]">{h}</span>
          ))}
          {tour.highlights.length > 3 && (
            <span className="tag tag-secondary text-[11px]">+{tour.highlights.length - 3}</span>
          )}
        </div>

        {/* Bottom meta */}
        <div className="flex items-center justify-between text-sm border-t border-border-light pt-3 mt-auto">
          {/* Difficulty */}
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[tour.difficulty]}`}>
            <Gauge className="w-3 h-3" />
            {tour.difficulty}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1 text-accent">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold">{tour.rating}</span>
          </div>

          {/* Price */}
          <span className="font-heading font-bold text-green">
            {formatPrice(tour.priceFromMad)}
          </span>
        </div>
      </div>
    </Link>
  );
}
