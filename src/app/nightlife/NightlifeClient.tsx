'use client';

import { useState, useMemo } from 'react';
import {
  Search,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Shirt,
  Filter,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type VenueType = 'Club' | 'Bar' | 'Lounge' | 'Rooftop' | 'Cafe' | 'Live Music';

interface Venue {
  id: number;
  name: string;
  type: VenueType;
  city: string;
  description: string;
  openingHours: string;
  priceRange: '$' | '$$' | '$$$';
  dressCode: string;
  image: string;
  rating: number;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const VENUE_TYPES: VenueType[] = [
  'Club',
  'Bar',
  'Lounge',
  'Rooftop',
  'Cafe',
  'Live Music',
];

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function getTypeColor(type: VenueType): string {
  switch (type) {
    case 'Club':
      return 'bg-purple-500/15 text-purple-700 dark:text-purple-300';
    case 'Bar':
      return 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]';
    case 'Lounge':
      return 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]';
    case 'Rooftop':
      return 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]';
    case 'Cafe':
      return 'bg-[var(--color-green)]/10 text-[var(--color-green)]';
    case 'Live Music':
      return 'bg-pink-500/15 text-pink-700 dark:text-pink-300';
    default:
      return 'bg-[var(--surface-muted)] text-[var(--text-secondary)]';
  }
}

/* ═══════════════════════════════════════════════════════════════
   CLIENT COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function NightlifeClient({
  venues,
}: {
  venues: Venue[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const cities = useMemo(
    () => [...new Set(venues.map((v) => v.city))].sort(),
    [venues]
  );

  const filtered = useMemo(() => {
    return venues.filter((v) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !v.name.toLowerCase().includes(q) &&
          !v.description.toLowerCase().includes(q) &&
          !v.city.toLowerCase().includes(q) &&
          !v.type.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedType !== 'All' && v.type !== selectedType) return false;
      if (selectedCity !== 'All' && v.city !== selectedCity) return false;
      return true;
    });
  }, [venues, searchQuery, selectedType, selectedCity]);

  return (
    <div>
      {/* ── Filter Bar ── */}
      <div className="card-moroccan p-4 md:p-6 mb-8" style={{ background: 'var(--surface)' }}>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-colors"
              aria-label="Search nightlife venues"
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
        </div>

        {/* Type Pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setSelectedType('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === 'All'
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
            }`}
            aria-pressed={selectedType === 'All'}
          >
            <Filter className="w-3.5 h-3.5 inline mr-1" />
            All
          </button>
          {VENUE_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === type
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
              }`}
              aria-pressed={selectedType === type}
            >
              {type}
            </button>
          ))}
        </div>

        <p className="text-sm text-[var(--text-secondary)] mt-3">
          Showing {filtered.length} of {venues.length} venues
        </p>
      </div>

      {/* ── Venue Grid ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-4" />
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)] mb-2">
            No venues found
          </h3>
          <p className="text-[var(--text-secondary)]">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VENUE CARD — Evening/Night themed (darker cards)
   ═══════════════════════════════════════════════════════════════ */

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="card-moroccan group overflow-hidden flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)]">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay for night vibe */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getTypeColor(venue.type)}`}
          >
            {venue.type}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
            <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            {venue.rating}
          </span>
        </div>

        {/* Venue name overlay at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white drop-shadow-lg leading-snug">
            {venue.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {venue.description}
        </p>

        {/* Meta info */}
        <div className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-4 mt-auto">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {venue.city}
            </span>
            <span className="font-bold text-sm text-[var(--text-primary)]">
              {venue.priceRange}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span>{venue.openingHours}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shirt className="w-3 h-3 flex-shrink-0" />
            <span>{venue.dressCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
