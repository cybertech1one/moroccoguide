'use client';

import { useState, useMemo } from 'react';
import {
  Star,
  MapPin,
  Search,
  Shield,
  Globe,
  Calendar,
  MessageSquare,
  SlidersHorizontal,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type Specialty =
  | 'Medina Tours'
  | 'Desert Expeditions'
  | 'Food Tours'
  | 'Photography'
  | 'History'
  | 'Adventure'
  | 'Cultural'
  | 'Architecture';

interface Guide {
  name: string;
  slug: string;
  cityName: string;
  bio: string;
  languages: string[];
  specialties: Specialty[];
  experienceYears: number;
  rating: number;
  reviewCount: number;
  pricePerDayMad: number;
  image: string;
  isCertified: boolean;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const ALL_LANGUAGES = [
  'English',
  'French',
  'Arabic',
  'Spanish',
  'German',
  'Italian',
  'Tamazight',
  'Portuguese',
  'Japanese',
];

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices' },
  { id: 'budget', label: 'Under 650 MAD/day', max: 650 },
  { id: 'mid', label: '650 - 850 MAD/day', min: 650, max: 850 },
  { id: 'premium', label: 'Over 850 MAD/day', min: 850 },
];

/* ═══════════════════════════════════════════════════════════════
   CLIENT FILTER + GRID COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function GuidesClientSection({
  guides,
  specialties,
  cities,
}: {
  guides: Guide[];
  specialties: Specialty[];
  cities: string[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !g.name.toLowerCase().includes(q) &&
          !g.cityName.toLowerCase().includes(q) &&
          !g.bio.toLowerCase().includes(q) &&
          !g.specialties.some((s) => s.toLowerCase().includes(q))
        )
          return false;
      }
      if (selectedCity !== 'all' && g.cityName !== selectedCity) return false;
      if (selectedSpecialty !== 'all' && !g.specialties.includes(selectedSpecialty as Specialty))
        return false;
      if (selectedLanguage !== 'all' && !g.languages.includes(selectedLanguage)) return false;
      if (selectedPrice !== 'all') {
        const range = PRICE_RANGES.find((r) => r.id === selectedPrice);
        if (range) {
          if (range.min !== undefined && g.pricePerDayMad < range.min) return false;
          if (range.max !== undefined && g.pricePerDayMad >= range.max) return false;
        }
      }
      return true;
    });
  }, [guides, searchQuery, selectedCity, selectedSpecialty, selectedLanguage, selectedPrice]);

  return (
    <div>
      {/* Filter Bar */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search guides by name, city, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Search guides"
            />
          </div>

          {/* City Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Filter by city"
            >
              <option value="all">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Specialty Filter */}
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            aria-label="Filter by specialty"
          >
            <option value="all">All Specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* Language Filter */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            aria-label="Filter by language"
          >
            <option value="all">All Languages</option>
            {ALL_LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>

          {/* Price Filter */}
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            aria-label="Filter by price range"
          >
            {PRICE_RANGES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-text-muted mt-3">
          Showing {filtered.length} of {guides.length} guides
        </p>
      </div>

      {/* Results Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
            No guides found
          </h3>
          <p className="text-text-muted">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Single Guide Card ── */

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="card-moroccan overflow-hidden flex flex-col">
      {/* Header with avatar */}
      <div className="p-5 pb-0">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={guide.image}
              alt={guide.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-border"
            />
            {guide.isCertified && (
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center"
                title="Certified Guide"
              >
                <Shield className="w-3.5 h-3.5" />
              </div>
            )}
          </div>

          {/* Name & city */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-semibold text-lg text-text-primary leading-snug truncate">
                {guide.name}
              </h3>
            </div>
            <div className="flex items-center gap-1 text-sm text-text-muted mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              {guide.cityName}
            </div>
            {/* Rating */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-semibold text-sm">{guide.rating}</span>
              </div>
              <span className="text-xs text-text-muted">
                ({guide.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Bio */}
        <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3">
          {guide.bio}
        </p>

        {/* Languages */}
        <div className="flex items-center gap-1.5 mb-3 flex-wrap">
          <Globe className="w-3.5 h-3.5 text-text-muted shrink-0" />
          {guide.languages.map((lang) => (
            <span
              key={lang}
              className="text-xs bg-sand-100 text-text-secondary px-2 py-0.5 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {guide.specialties.map((spec) => (
            <span key={spec} className="tag tag-secondary text-xs">
              {spec}
            </span>
          ))}
        </div>

        {/* Bottom meta row */}
        <div className="flex items-center justify-between text-sm border-t border-border-light pt-3 mt-auto">
          {/* Experience */}
          <div className="flex items-center gap-1 text-text-muted">
            <Calendar className="w-3.5 h-3.5" />
            {guide.experienceYears} years
          </div>

          {/* Price per day */}
          <div className="font-semibold text-text-primary">
            {formatPrice(guide.pricePerDayMad)}
            <span className="text-xs text-text-muted font-normal"> /day</span>
          </div>
        </div>

        {/* Contact Button */}
        <button
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
          aria-label={`Contact ${guide.name}`}
        >
          <MessageSquare className="w-4 h-4" />
          Contact Guide
        </button>
      </div>
    </div>
  );
}
