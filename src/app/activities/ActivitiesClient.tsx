'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Search,
  Clock,
  Mountain,
  Palette,
  Heart,
  TreePine,
  Utensils,
  ShoppingBag,
  Music,
  Dumbbell,
  CheckCircle2,
  SlidersHorizontal,
  Calendar,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

/* ================================================================
   TYPES
   ================================================================ */

type ActivityType =
  | 'adventure'
  | 'cultural'
  | 'wellness'
  | 'nature'
  | 'cooking'
  | 'shopping'
  | 'nightlife'
  | 'sports';

type Difficulty = 'Easy' | 'Moderate' | 'Challenging';

interface Activity {
  name: string;
  slug: string;
  cityName: string;
  type: ActivityType;
  description: string;
  duration: string;
  priceFromMad: number;
  difficulty: Difficulty;
  image: string;
  rating: number;
  includes: string[];
  bestSeason?: string;
  bestLocations?: string[];
}

/* ================================================================
   CONSTANTS
   ================================================================ */

const typeIcons: Record<ActivityType, React.ReactNode> = {
  adventure: <Mountain className="w-3.5 h-3.5" />,
  cultural: <Palette className="w-3.5 h-3.5" />,
  wellness: <Heart className="w-3.5 h-3.5" />,
  nature: <TreePine className="w-3.5 h-3.5" />,
  cooking: <Utensils className="w-3.5 h-3.5" />,
  shopping: <ShoppingBag className="w-3.5 h-3.5" />,
  nightlife: <Music className="w-3.5 h-3.5" />,
  sports: <Dumbbell className="w-3.5 h-3.5" />,
};

const difficultyColors: Record<Difficulty, string> = {
  Easy: 'bg-[var(--color-green)]/10 text-[var(--color-green)] border-[var(--color-green)]/20',
  Moderate: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20',
  Challenging: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20',
};

const PRICE_RANGES = [
  { id: 'all', label: 'All Prices' },
  { id: 'budget', label: 'Under 400 MAD', max: 400 },
  { id: 'mid', label: '400 - 800 MAD', min: 400, max: 800 },
  { id: 'premium', label: 'Over 800 MAD', min: 800 },
];

const DIFFICULTIES: Difficulty[] = ['Easy', 'Moderate', 'Challenging'];

/* ================================================================
   CLIENT FILTER + GRID COMPONENT
   ================================================================ */

export default function ActivitiesClientSection({
  activities,
  types,
  cities,
}: {
  activities: Activity[];
  types: { id: string; label: string }[];
  cities: string[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !a.name.toLowerCase().includes(q) &&
          !a.cityName.toLowerCase().includes(q) &&
          !a.description.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedType !== 'all' && a.type !== selectedType) return false;
      if (selectedCity !== 'all' && a.cityName !== selectedCity) return false;
      if (selectedDifficulty !== 'all' && a.difficulty !== selectedDifficulty) return false;
      if (selectedPrice !== 'all') {
        const range = PRICE_RANGES.find((r) => r.id === selectedPrice);
        if (range) {
          if (range.min !== undefined && a.priceFromMad < range.min) return false;
          if (range.max !== undefined && a.priceFromMad >= range.max) return false;
        }
      }
      return true;
    });
  }, [activities, searchQuery, selectedType, selectedCity, selectedDifficulty, selectedPrice]);

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
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Search activities"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-text-muted shrink-0" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Filter by type"
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

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            aria-label="Filter by difficulty"
          >
            <option value="all">All Levels</option>
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d}
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
          Showing {filtered.length} of {activities.length} activities
        </p>
      </div>

      {/* Results Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
            No activities found
          </h3>
          <p className="text-text-muted">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
}

/* -- Single Activity Card -- */

function ActivityCard({ activity }: { activity: Activity }) {
  const typeLabel =
    [
      { id: 'adventure', label: 'Adventure' },
      { id: 'cultural', label: 'Cultural' },
      { id: 'wellness', label: 'Wellness' },
      { id: 'nature', label: 'Nature' },
      { id: 'cooking', label: 'Cooking & Food' },
      { id: 'shopping', label: 'Shopping' },
      { id: 'nightlife', label: 'Nightlife' },
      { id: 'sports', label: 'Sports' },
    ].find((t) => t.id === activity.type)?.label ?? activity.type;

  return (
    <Link
      href={`/activities/${activity.slug}`}
      className="card-moroccan group overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Type Badge */}
        <div className="absolute top-3 left-3 tag tag-accent inline-flex items-center gap-1">
          {typeIcons[activity.type]}
          {typeLabel}
        </div>
        {/* Difficulty Chip */}
        <div
          className={`absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${difficultyColors[activity.difficulty]}`}
        >
          {activity.difficulty}
        </div>
        {/* Price Badge */}
        <div className="absolute bottom-3 right-3 price-badge">
          From {formatPrice(activity.priceFromMad)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug mb-2">
          {activity.name}
        </h3>

        {/* City badge */}
        <div className="flex items-center gap-1 text-sm text-text-muted mb-2">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          {activity.cityName}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1 line-clamp-2">
          {activity.description}
        </p>

        {/* Includes Preview */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {activity.includes.slice(0, 3).map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 text-xs text-text-muted bg-sand-100 px-2 py-0.5 rounded-full"
            >
              <CheckCircle2 className="w-3 h-3 text-[var(--color-green)]" />
              {item}
            </span>
          ))}
          {activity.includes.length > 3 && (
            <span className="text-xs text-text-muted px-2 py-0.5">
              +{activity.includes.length - 3} more
            </span>
          )}
        </div>

        {/* Season Badge (if available) */}
        {activity.bestSeason && (
          <div className="flex items-center gap-1.5 mb-3 text-xs text-text-muted">
            <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
            Best: {activity.bestSeason}
          </div>
        )}

        {/* Bottom meta row */}
        <div className="flex items-center justify-between text-sm border-t border-border-light pt-3 mt-auto">
          {/* Rating */}
          <div className="flex items-center gap-1 text-accent">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold">{activity.rating}</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-1 text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            {activity.duration}
          </div>
        </div>
      </div>
    </Link>
  );
}
