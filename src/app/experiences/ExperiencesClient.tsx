'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Mountain,
  Filter,
  ArrowRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type ExperienceCategory = 'Adventure' | 'Cultural' | 'Culinary' | 'Wellness' | 'Nature' | 'Arts & Crafts';
type Difficulty = 'Easy' | 'Moderate' | 'Challenging';
type PriceRange = '$' | '$$' | '$$$';

interface Experience {
  id: number;
  name: string;
  slug?: string;
  description: string;
  city: string;
  duration: string;
  priceRange: PriceRange;
  difficulty: Difficulty;
  image: string;
  category: ExperienceCategory;
  rating: number;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const CATEGORIES: ExperienceCategory[] = [
  'Adventure',
  'Cultural',
  'Culinary',
  'Wellness',
  'Nature',
  'Arts & Crafts',
];

const PRICE_RANGES: PriceRange[] = ['$', '$$', '$$$'];

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function getCategoryColor(category: ExperienceCategory): string {
  switch (category) {
    case 'Adventure':
      return 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]';
    case 'Cultural':
      return 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]';
    case 'Culinary':
      return 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]';
    case 'Wellness':
      return 'bg-[var(--color-green)]/10 text-[var(--color-green)]';
    case 'Nature':
      return 'bg-[var(--color-green-light)]/10 text-[var(--color-green-dark)]';
    case 'Arts & Crafts':
      return 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]';
    default:
      return 'bg-[var(--surface-muted)] text-[var(--text-secondary)]';
  }
}

function getDifficultyColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'Easy':
      return 'text-[var(--color-green)]';
    case 'Moderate':
      return 'text-[var(--color-accent-dark)]';
    case 'Challenging':
      return 'text-[var(--color-primary)]';
    default:
      return 'text-[var(--text-secondary)]';
  }
}

/* ═══════════════════════════════════════════════════════════════
   CLIENT COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ExperiencesClient({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');

  const cities = useMemo(
    () => [...new Set(experiences.map((e) => e.city))].sort(),
    [experiences]
  );

  const filtered = useMemo(() => {
    return experiences.filter((e) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !e.name.toLowerCase().includes(q) &&
          !e.description.toLowerCase().includes(q) &&
          !e.city.toLowerCase().includes(q) &&
          !e.category.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedCategory !== 'All' && e.category !== selectedCategory)
        return false;
      if (selectedCity !== 'All' && e.city !== selectedCity) return false;
      if (selectedPrice !== 'All' && e.priceRange !== selectedPrice)
        return false;
      return true;
    });
  }, [experiences, searchQuery, selectedCategory, selectedCity, selectedPrice]);

  return (
    <div>
      {/* ── Filter Bar ── */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors"
              aria-label="Search experiences"
            />
          </div>

          {/* City Filter */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="pl-10 pr-8 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors appearance-none cursor-pointer"
              aria-label="Filter by city"
            >
              <option value="All">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="pl-10 pr-8 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors appearance-none cursor-pointer"
              aria-label="Filter by price range"
            >
              <option value="All">All Prices</option>
              {PRICE_RANGES.map((pr) => (
                <option key={pr} value={pr}>
                  {pr} {pr === '$' ? '(Budget)' : pr === '$$' ? '(Mid-range)' : '(Premium)'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
            }`}
            aria-pressed={selectedCategory === 'All'}
          >
            <Filter className="w-3.5 h-3.5 inline mr-1" />
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-sm text-[var(--text-secondary)] mt-3">
          Showing {filtered.length} of {experiences.length} experiences
        </p>
      </div>

      {/* ── Experience Grid ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4" />
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)] mb-2">
            No experiences found
          </h3>
          <p className="text-[var(--text-secondary)]">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE CARD
   ═══════════════════════════════════════════════════════════════ */

function ExperienceCard({ experience }: { experience: Experience }) {
  const CardWrapper = experience.slug
    ? ({ children }: { children: React.ReactNode }) => (
        <Link href={`/experiences/${experience.slug}`} className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
          {children}
        </Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className="card-moroccan group overflow-hidden flex flex-col">
          {children}
        </div>
      );

  return (
    <CardWrapper>
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={experience.image}
          alt={experience.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(experience.category)}`}
          >
            {experience.category}
          </span>
        </div>
        {/* Rating */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
            <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            {experience.rating}
          </span>
        </div>
        {/* Price */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 text-[var(--text-primary)] text-sm font-bold backdrop-blur-sm">
            {experience.priceRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] leading-snug mb-2">
          {experience.name}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {experience.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-4 mt-auto">
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {experience.city}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {experience.duration}
          </span>
          <span
            className={`inline-flex items-center gap-1 font-medium ${getDifficultyColor(experience.difficulty)}`}
          >
            <Mountain className="w-3 h-3" />
            {experience.difficulty}
          </span>
          {experience.slug && (
            <span className="ml-auto inline-flex items-center gap-1 text-[var(--color-secondary)] font-semibold">
              Read Guide
              <ArrowRight className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
