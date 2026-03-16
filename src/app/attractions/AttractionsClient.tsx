'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Shield,
  Star,
  Clock,
  Ticket,
  Search,
  Filter,
  Landmark,
  Building2,
  TreePine,
  ShoppingBag,
  Church,
  Columns3,
  Flower2,
  Waves,
  Castle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type AttractionType =
  | 'monument'
  | 'museum'
  | 'nature'
  | 'market'
  | 'religious'
  | 'ruins'
  | 'garden'
  | 'beach'
  | 'medina'
  | 'palace';

interface Attraction {
  name: string;
  slug: string;
  cityName: string;
  type: AttractionType;
  description: string;
  isUnesco: boolean;
  rating: number;
  entranceFeeMad: number | null;
  image: string;
  durationHours: number;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const ATTRACTION_TYPES: { id: AttractionType; label: string }[] = [
  { id: 'monument', label: 'Monument' },
  { id: 'museum', label: 'Museum' },
  { id: 'nature', label: 'Nature' },
  { id: 'market', label: 'Market' },
  { id: 'religious', label: 'Religious' },
  { id: 'ruins', label: 'Ruins' },
  { id: 'garden', label: 'Garden' },
  { id: 'beach', label: 'Beach' },
  { id: 'medina', label: 'Medina' },
  { id: 'palace', label: 'Palace' },
];

const typeIcons: Record<AttractionType, React.ReactNode> = {
  monument: <Landmark className="w-3.5 h-3.5" />,
  museum: <Building2 className="w-3.5 h-3.5" />,
  nature: <TreePine className="w-3.5 h-3.5" />,
  market: <ShoppingBag className="w-3.5 h-3.5" />,
  religious: <Church className="w-3.5 h-3.5" />,
  ruins: <Columns3 className="w-3.5 h-3.5" />,
  garden: <Flower2 className="w-3.5 h-3.5" />,
  beach: <Waves className="w-3.5 h-3.5" />,
  medina: <Castle className="w-3.5 h-3.5" />,
  palace: <Castle className="w-3.5 h-3.5" />,
};

/* ═══════════════════════════════════════════════════════════════
   CLIENT FILTER + GRID COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AttractionsClientSection({
  attractions,
  types,
  cities,
}: {
  attractions: Attraction[];
  types: { id: string; label: string }[];
  cities: string[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [unescoOnly, setUnescoOnly] = useState(false);

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
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
      if (unescoOnly && !a.isUnesco) return false;
      return true;
    });
  }, [attractions, searchQuery, selectedType, selectedCity, unescoOnly]);

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
              placeholder="Search attractions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              aria-label="Search attractions"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-text-muted shrink-0" />
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

          {/* UNESCO Toggle */}
          <button
            onClick={() => setUnescoOnly(!unescoOnly)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border font-medium text-sm transition-colors ${
              unescoOnly
                ? 'bg-secondary text-white border-secondary'
                : 'bg-background text-text-secondary border-border hover:border-secondary hover:text-secondary'
            }`}
            aria-pressed={unescoOnly}
            aria-label="Toggle UNESCO sites only"
          >
            <Shield className="w-4 h-4" />
            UNESCO Only
          </button>
        </div>

        <p className="text-sm text-text-muted mt-3">
          Showing {filtered.length} of {attractions.length} attractions
        </p>
      </div>

      {/* Results Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
            No attractions found
          </h3>
          <p className="text-text-muted">
            Try adjusting your filters or search terms.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((attraction) => (
            <AttractionCard key={attraction.slug} attraction={attraction} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Single Attraction Card ── */

function AttractionCard({ attraction }: { attraction: Attraction }) {
  const typeLabel =
    ATTRACTION_TYPES.find((t) => t.id === attraction.type)?.label ??
    attraction.type;

  return (
    <Link
      href={`/attractions/${attraction.slug}`}
      className="card-moroccan group overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* UNESCO Badge */}
        {attraction.isUnesco && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-white text-xs font-semibold shadow-lg">
            <Shield className="w-3 h-3" />
            UNESCO
          </div>
        )}
        {/* Type Badge */}
        <div className="absolute top-3 right-3 tag tag-accent inline-flex items-center gap-1">
          {typeIcons[attraction.type]}
          {typeLabel}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug">
            {attraction.name}
          </h3>
        </div>

        {/* City badge */}
        <div className="flex items-center gap-1 text-sm text-text-muted mb-2">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          {attraction.cityName}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-3">
          {attraction.description}
        </p>

        {/* Bottom meta row */}
        <div className="flex items-center justify-between text-sm border-t border-border-light pt-3 mt-auto">
          {/* Rating */}
          <div className="flex items-center gap-1 text-accent">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-semibold">{attraction.rating}</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-1 text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            {attraction.durationHours}h
          </div>

          {/* Entrance fee */}
          <div className="flex items-center gap-1 text-text-muted">
            <Ticket className="w-3.5 h-3.5" />
            {attraction.entranceFeeMad
              ? `${attraction.entranceFeeMad} MAD`
              : 'Free'}
          </div>
        </div>
      </div>
    </Link>
  );
}
