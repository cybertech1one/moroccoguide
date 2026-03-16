'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Search,
  Calendar,
  Music,
  Film,
  Palette,
  Utensils,
  Trophy,
  Church,
  Brush,
  TreePine,
  RefreshCw,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type EventType =
  | 'music'
  | 'film'
  | 'cultural'
  | 'food'
  | 'sports'
  | 'religious'
  | 'arts'
  | 'nature';

type MonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'
  | 'Year-round';

interface MoroccoEvent {
  name: string;
  slug: string;
  cityName: string;
  description: string;
  month: MonthName;
  dates2026: string;
  confirmed2026: boolean;
  type: EventType;
  isAnnual: boolean;
  image: string;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const MONTHS: MonthName[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'Year-round',
];

const MONTH_SHORT: Record<MonthName, string> = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
  'Year-round': 'All Year',
};

const typeIcons: Record<EventType, React.ReactNode> = {
  music: <Music className="w-3.5 h-3.5" />,
  film: <Film className="w-3.5 h-3.5" />,
  cultural: <Palette className="w-3.5 h-3.5" />,
  food: <Utensils className="w-3.5 h-3.5" />,
  sports: <Trophy className="w-3.5 h-3.5" />,
  religious: <Church className="w-3.5 h-3.5" />,
  arts: <Brush className="w-3.5 h-3.5" />,
  nature: <TreePine className="w-3.5 h-3.5" />,
};

const typeLabels: Record<EventType, string> = {
  music: 'Music',
  film: 'Film',
  cultural: 'Cultural',
  food: 'Food & Drink',
  sports: 'Sports',
  religious: 'Religious',
  arts: 'Arts',
  nature: 'Nature',
};

const monthColors: Record<string, string> = {
  January: 'bg-blue-100 text-blue-700',
  February: 'bg-pink-100 text-pink-700',
  March: 'bg-emerald-100 text-emerald-700',
  April: 'bg-rose-100 text-rose-700',
  May: 'bg-violet-100 text-violet-700',
  June: 'bg-amber-100 text-amber-700',
  July: 'bg-red-100 text-red-700',
  August: 'bg-orange-100 text-orange-700',
  September: 'bg-teal-100 text-teal-700',
  October: 'bg-yellow-100 text-yellow-700',
  November: 'bg-indigo-100 text-indigo-700',
  December: 'bg-cyan-100 text-cyan-700',
  'Year-round': 'bg-gray-100 text-gray-700',
};

const typeColors: Record<EventType, string> = {
  music: 'bg-purple-100 text-purple-700',
  film: 'bg-rose-100 text-rose-700',
  cultural: 'bg-amber-100 text-amber-700',
  food: 'bg-orange-100 text-orange-700',
  sports: 'bg-green-100 text-green-700',
  religious: 'bg-indigo-100 text-indigo-700',
  arts: 'bg-pink-100 text-pink-700',
  nature: 'bg-emerald-100 text-emerald-700',
};

/* ═══════════════════════════════════════════════════════════════
   CLIENT FILTER + GRID COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function EventsClientSection({
  events,
  types,
  cities,
}: {
  events: MoroccoEvent[];
  types: { id: string; label: string }[];
  cities: string[];
}) {
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (selectedMonth !== 'all' && e.month !== selectedMonth) return false;
      if (selectedType !== 'all' && e.type !== selectedType) return false;
      if (selectedCity !== 'all' && e.cityName !== selectedCity) return false;
      return true;
    });
  }, [events, selectedMonth, selectedType, selectedCity]);

  /* Group events by month for calendar view */
  const groupedByMonth = useMemo(() => {
    if (selectedMonth !== 'all') return null;
    const groups: Record<string, MoroccoEvent[]> = {};
    for (const month of MONTHS) {
      const monthEvents = filtered.filter((e) => e.month === month);
      if (monthEvents.length > 0) {
        groups[month] = monthEvents;
      }
    }
    return groups;
  }, [filtered, selectedMonth]);

  const hasActiveFilters =
    selectedMonth !== 'all' || selectedType !== 'all' || selectedCity !== 'all';

  const clearFilters = () => {
    setSelectedMonth('all');
    setSelectedType('all');
    setSelectedCity('all');
  };

  return (
    <div>
      {/* ── Month Pills Navigation ── */}
      <div className="mb-6">
        <h2 className="font-heading font-semibold text-lg text-text-primary mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Browse by Month
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedMonth('all')}
            className={cn(
              'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors',
              selectedMonth === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-sand-100 text-text-secondary hover:bg-sand-200'
            )}
            aria-pressed={selectedMonth === 'all'}
          >
            All Months
          </button>
          {MONTHS.map((month) => {
            const count = events.filter((e) => e.month === month).length;
            return (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={cn(
                  'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  selectedMonth === month
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-sand-100 text-text-secondary hover:bg-sand-200'
                )}
                aria-pressed={selectedMonth === month}
              >
                {MONTH_SHORT[month]}
                <span className="ml-1 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Additional Filters ── */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Filter by event type"
            >
              <option value="all">All Types</option>
              {types.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
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

          {/* Clear Filters */}
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
          Showing {filtered.length} of {events.length} events
          {selectedMonth !== 'all' && <span className="font-medium"> in {selectedMonth}</span>}
          {selectedType !== 'all' && (
            <span className="font-medium"> / {typeLabels[selectedType as EventType]}</span>
          )}
          {selectedCity !== 'all' && <span className="font-medium"> / {selectedCity}</span>}
        </p>
      </div>

      {/* ── Results ── */}
      {filtered.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-full bg-sand-100 flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7 text-text-muted" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
            No events found
          </h3>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            There are no events matching your current filters. Try selecting a
            different month, type, or city.
          </p>
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Reset all filters
          </button>
        </div>
      ) : groupedByMonth ? (
        /* Calendar-like month grouping when "All" is selected */
        <div className="space-y-12">
          {Object.entries(groupedByMonth).map(([month, monthEvents]) => (
            <div key={month} id={`month-${month.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold',
                    monthColors[month] || 'bg-gray-100 text-gray-700'
                  )}
                >
                  <Calendar className="w-4 h-4" />
                  {month}
                </div>
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-text-muted shrink-0">
                  {monthEvents.length} event{monthEvents.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthEvents.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Flat grid when a specific month is selected */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SINGLE EVENT CARD
   ═══════════════════════════════════════════════════════════════ */

function EventCard({ event }: { event: MoroccoEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="card-moroccan group overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Month Badge */}
        <div
          className={cn(
            'absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm',
            monthColors[event.month] || 'bg-gray-100 text-gray-700'
          )}
        >
          <Calendar className="w-3 h-3" />
          {event.month}
        </div>

        {/* Type Badge */}
        <div
          className={cn(
            'absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm',
            typeColors[event.type]
          )}
        >
          {typeIcons[event.type]}
          {typeLabels[event.type]}
        </div>

        {/* Annual Indicator */}
        {event.isAnnual && (
          <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-text-secondary text-xs font-medium shadow-sm backdrop-blur-sm">
            <RefreshCw className="w-3 h-3" />
            Annual
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug mb-2">
          {event.name}
        </h3>

        {/* City badge */}
        <div className="flex items-center gap-1.5 text-sm text-text-muted mb-2">
          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>{event.cityName}</span>
        </div>

        {/* 2026 Dates */}
        <div className="flex items-center gap-1.5 text-sm mb-3">
          {event.confirmed2026 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
          ) : (
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          )}
          <span className={event.confirmed2026 ? 'text-green-700 font-medium' : 'text-amber-600'}>
            {event.dates2026}
          </span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
          {event.description}
        </p>

        {/* Confirmation status tag */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <span
            className={cn(
              'inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium',
              event.confirmed2026
                ? 'bg-green-50 text-green-700'
                : 'bg-amber-50 text-amber-700'
            )}
          >
            {event.confirmed2026 ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                Confirmed 2026
              </>
            ) : (
              <>
                <Clock className="w-3 h-3" />
                Dates TBC
              </>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
