'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  CalendarDays,
  DollarSign,
  Compass,
  Tag,
  SlidersHorizontal,
  ArrowRight,
  ArrowUpDown,
  RefreshCw,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type BudgetLevel = 'budget' | 'mid-range' | 'luxury';
type TravelStyle =
  | 'adventure'
  | 'cultural'
  | 'food'
  | 'family'
  | 'photography'
  | 'romance'
  | 'relaxation';

interface Itinerary {
  name: string;
  slug: string;
  durationDays: number;
  description: string;
  cities: string[];
  highlights: string[];
  budgetLevel: BudgetLevel;
  travelStyle: TravelStyle;
  image: string;
}

type SortOption = 'popular' | 'shortest' | 'longest';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const DURATION_RANGES = [
  { id: 'all', label: 'Any Duration' },
  { id: '1-3', label: '1-3 days', min: 1, max: 3 },
  { id: '4-7', label: '4-7 days', min: 4, max: 7 },
  { id: '8-14', label: '8-14 days', min: 8, max: 14 },
  { id: '15+', label: '15+ days', min: 15, max: 999 },
];

const BUDGET_ORDER: BudgetLevel[] = ['budget', 'mid-range', 'luxury'];

const STYLE_OPTIONS: TravelStyle[] = [
  'adventure',
  'cultural',
  'food',
  'family',
  'photography',
  'romance',
  'relaxation',
];

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'popular', label: 'Popular' },
  { id: 'shortest', label: 'Shortest First' },
  { id: 'longest', label: 'Longest First' },
];

const durationColor = (days: number): string => {
  if (days <= 5) return 'bg-[var(--color-green)]/10 text-[var(--color-green)]';
  if (days <= 10) return 'bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)]';
  return 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]';
};

const budgetColors: Record<BudgetLevel, string> = {
  budget: 'bg-[var(--color-green)]/10 text-[var(--color-green)]',
  'mid-range': 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
  luxury: 'bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)]',
};

const budgetIcons: Record<BudgetLevel, string> = {
  budget: '$',
  'mid-range': '$$',
  luxury: '$$$',
};

const styleColors: Record<TravelStyle, string> = {
  adventure: 'bg-orange-100 text-orange-700',
  cultural: 'bg-indigo-100 text-indigo-700',
  food: 'bg-amber-100 text-amber-700',
  family: 'bg-green-100 text-green-700',
  photography: 'bg-purple-100 text-purple-700',
  romance: 'bg-rose-100 text-rose-700',
  relaxation: 'bg-teal-100 text-teal-700',
};

/* ═══════════════════════════════════════════════════════════════
   CLIENT FILTER + GRID COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ItinerariesClientSection({
  itineraries,
  budgetLabels,
  styleLabels,
}: {
  itineraries: Itinerary[];
  budgetLabels: Record<BudgetLevel, string>;
  styleLabels: Record<TravelStyle, string>;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  const filtered = useMemo(() => {
    let result = itineraries.filter((it) => {
      /* Search */
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !it.name.toLowerCase().includes(q) &&
          !it.description.toLowerCase().includes(q) &&
          !it.cities.some((c) => c.toLowerCase().includes(q)) &&
          !it.highlights.some((h) => h.toLowerCase().includes(q))
        )
          return false;
      }
      /* Duration */
      if (selectedDuration !== 'all') {
        const range = DURATION_RANGES.find((r) => r.id === selectedDuration);
        if (range && range.min !== undefined && range.max !== undefined) {
          if (it.durationDays < range.min || it.durationDays > range.max) return false;
        }
      }
      /* Budget */
      if (selectedBudget !== 'all' && it.budgetLevel !== selectedBudget) return false;
      /* Style */
      if (selectedStyle !== 'all' && it.travelStyle !== selectedStyle) return false;
      return true;
    });

    /* Sort */
    if (sortBy === 'shortest') {
      result = [...result].sort((a, b) => a.durationDays - b.durationDays);
    } else if (sortBy === 'longest') {
      result = [...result].sort((a, b) => b.durationDays - a.durationDays);
    }

    return result;
  }, [itineraries, searchQuery, selectedDuration, selectedBudget, selectedStyle, sortBy]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedDuration !== 'all' ||
    selectedBudget !== 'all' ||
    selectedStyle !== 'all';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDuration('all');
    setSelectedBudget('all');
    setSelectedStyle('all');
    setSortBy('popular');
  };

  return (
    <div>
      {/* ── Filter Bar ── */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        {/* Row 1: Search + Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search by name, city, or highlight..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Search itineraries"
            />
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Sort itineraries"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Filter by duration"
            >
              {DURATION_RANGES.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Filter by budget"
            >
              <option value="all">All Budgets</option>
              {BUDGET_ORDER.map((b) => (
                <option key={b} value={b}>
                  {budgetLabels[b]}
                </option>
              ))}
            </select>
          </div>

          {/* Travel Style */}
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Filter by travel style"
            >
              <option value="all">All Styles</option>
              {STYLE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {styleLabels[s]}
                </option>
              ))}
            </select>
          </div>

          {/* Clear */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear filters
            </button>
          )}
        </div>

        <p className="text-sm text-text-muted mt-3">
          Showing {filtered.length} of {itineraries.length} itineraries
          {selectedDuration !== 'all' && (
            <span className="font-medium">
              {' '}
              / {DURATION_RANGES.find((d) => d.id === selectedDuration)?.label}
            </span>
          )}
          {selectedBudget !== 'all' && (
            <span className="font-medium"> / {budgetLabels[selectedBudget as BudgetLevel]}</span>
          )}
          {selectedStyle !== 'all' && (
            <span className="font-medium"> / {styleLabels[selectedStyle as TravelStyle]}</span>
          )}
        </p>
      </div>

      {/* ── Results Grid ── */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7 text-text-muted" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
            No itineraries found
          </h3>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            No routes match your current filters. Try adjusting your search,
            duration, budget, or travel style.
          </p>
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((itinerary) => (
            <ItineraryCard
              key={itinerary.slug}
              itinerary={itinerary}
              budgetLabels={budgetLabels}
              styleLabels={styleLabels}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SINGLE ITINERARY CARD
   ═══════════════════════════════════════════════════════════════ */

function ItineraryCard({
  itinerary,
  budgetLabels,
  styleLabels,
}: {
  itinerary: Itinerary;
  budgetLabels: Record<BudgetLevel, string>;
  styleLabels: Record<TravelStyle, string>;
}) {
  return (
    <article className="card-moroccan group overflow-hidden flex flex-col">
      {/* Large Image */}
      <Link href={`/itineraries/${itinerary.slug}`} className="block relative h-56 overflow-hidden">
        <img
          src={itinerary.image}
          alt={itinerary.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Duration Badge (colored by length) */}
        <div
          className={cn(
            'absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm',
            durationColor(itinerary.durationDays)
          )}
          style={{ backgroundColor: undefined }}
        >
          <CalendarDays className="w-3.5 h-3.5" />
          {itinerary.durationDays} days
        </div>

        {/* Budget Badge */}
        <div
          className={cn(
            'absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm',
            budgetColors[itinerary.budgetLevel]
          )}
        >
          <DollarSign className="w-3 h-3" />
          {budgetLabels[itinerary.budgetLevel]}
        </div>

        {/* Style Badge */}
        <div
          className={cn(
            'absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm',
            styleColors[itinerary.travelStyle]
          )}
        >
          <Compass className="w-3 h-3" />
          {styleLabels[itinerary.travelStyle]}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/itineraries/${itinerary.slug}`}>
          <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug mb-3">
            {itinerary.name}
          </h3>
        </Link>

        {/* Cities as connected route chips */}
        <div className="flex items-center gap-1 flex-wrap mb-3">
          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
          {itinerary.cities.map((city, idx) => (
            <span key={`${city}-${idx}`} className="inline-flex items-center">
              <span className="text-xs font-medium text-text-secondary bg-sand-100 px-2 py-0.5 rounded">
                {city}
              </span>
              {idx < itinerary.cities.length - 1 && (
                <ArrowRight className="w-3 h-3 mx-0.5 text-text-muted/50 shrink-0" />
              )}
            </span>
          ))}
        </div>

        {/* Description (truncated to 2 lines) */}
        <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
          {itinerary.description}
        </p>

        {/* Highlight Tags (max 4) */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {itinerary.highlights.slice(0, 4).map((hl) => (
            <span
              key={hl}
              className="inline-flex items-center gap-1 text-xs text-text-muted bg-sand-50 border border-border-light px-2 py-0.5 rounded"
            >
              <Tag className="w-2.5 h-2.5 shrink-0" />
              {hl}
            </span>
          ))}
          {itinerary.highlights.length > 4 && (
            <span className="text-xs text-text-muted px-1">
              +{itinerary.highlights.length - 4} more
            </span>
          )}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between border-t border-border-light pt-3 mt-auto">
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="w-3.5 h-3.5" />
              {itinerary.durationDays} days
            </span>
            <span className="inline-flex items-center gap-1 font-semibold">
              {budgetIcons[itinerary.budgetLevel]}
            </span>
          </div>
          <Link
            href={`/itineraries/${itinerary.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View Itinerary
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
