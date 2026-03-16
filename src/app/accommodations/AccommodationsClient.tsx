'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Search,
  Wifi,
  Waves,
  Utensils,
  Dumbbell,
  SprayCan,
  TreePine,
  Coffee,
  Eye,
  Bath,
  Hotel,
  Building2,
  Castle,
  Warehouse,
  Tent,
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

/* ─── Types ─── */

type AccommodationType = 'hotel' | 'riad' | 'hostel' | 'resort' | 'kasbah' | 'desert_camp' | 'guesthouse';

export interface AccommodationItem {
  name: string;
  slug: string;
  cityName: string;
  type: AccommodationType;
  starRating: number;
  description: string;
  priceFromMad: number;
  amenities: string[];
  image: string;
  rating: number;
}

/* ─── Constants ─── */

const ACCOMMODATION_TYPES: { id: AccommodationType; label: string }[] = [
  { id: 'hotel', label: 'Hotel' },
  { id: 'riad', label: 'Riad' },
  { id: 'hostel', label: 'Hostel' },
  { id: 'resort', label: 'Resort' },
  { id: 'kasbah', label: 'Kasbah' },
  { id: 'desert_camp', label: 'Desert Camp' },
  { id: 'guesthouse', label: 'Guesthouse' },
];

const typeIcons: Record<AccommodationType, React.ReactNode> = {
  hotel: <Hotel className="w-3.5 h-3.5" />,
  riad: <Building2 className="w-3.5 h-3.5" />,
  hostel: <Warehouse className="w-3.5 h-3.5" />,
  resort: <Waves className="w-3.5 h-3.5" />,
  kasbah: <Castle className="w-3.5 h-3.5" />,
  desert_camp: <Tent className="w-3.5 h-3.5" />,
  guesthouse: <Coffee className="w-3.5 h-3.5" />,
};

const amenityIcons: Record<string, React.ReactNode> = {
  Pool: <Waves className="w-3.5 h-3.5" />,
  WiFi: <Wifi className="w-3.5 h-3.5" />,
  Restaurant: <Utensils className="w-3.5 h-3.5" />,
  Spa: <SprayCan className="w-3.5 h-3.5" />,
  Fitness: <Dumbbell className="w-3.5 h-3.5" />,
  Garden: <TreePine className="w-3.5 h-3.5" />,
  Hammam: <Bath className="w-3.5 h-3.5" />,
  Rooftop: <Eye className="w-3.5 h-3.5" />,
  Bar: <Coffee className="w-3.5 h-3.5" />,
};

/* ─── Component ─── */

export default function AccommodationsClientSection({
  accommodations,
  cities,
}: {
  accommodations: AccommodationItem[];
  cities: string[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedStars, setSelectedStars] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filtered = useMemo(() => {
    return accommodations.filter((a) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !a.name.toLowerCase().includes(q) &&
          !a.cityName.toLowerCase().includes(q) &&
          !a.description.toLowerCase().includes(q)
        ) return false;
      }
      if (selectedType !== 'all' && a.type !== selectedType) return false;
      if (selectedCity !== 'all' && a.cityName !== selectedCity) return false;
      if (selectedStars !== 'all' && a.starRating !== Number(selectedStars)) return false;
      if (priceRange !== 'all') {
        if (priceRange === 'budget' && a.priceFromMad > 500) return false;
        if (priceRange === 'mid' && (a.priceFromMad < 500 || a.priceFromMad > 2000)) return false;
        if (priceRange === 'upscale' && (a.priceFromMad < 2000 || a.priceFromMad > 5000)) return false;
        if (priceRange === 'luxury' && a.priceFromMad < 5000) return false;
      }
      return true;
    });
  }, [accommodations, searchQuery, selectedType, selectedCity, selectedStars, priceRange]);

  return (
    <div>
      {/* Filters */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input type="text" placeholder="Search accommodations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" aria-label="Search accommodations" />
          </div>
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by type">
            <option value="all">All Types</option>
            {ACCOMMODATION_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by city">
            <option value="all">All Cities</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={selectedStars} onChange={(e) => setSelectedStars(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by star rating">
            <option value="all">All Stars</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
          </select>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by price">
            <option value="all">Any Price</option>
            <option value="budget">Under 500 MAD</option>
            <option value="mid">500 - 2,000 MAD</option>
            <option value="upscale">2,000 - 5,000 MAD</option>
            <option value="luxury">5,000+ MAD</option>
          </select>
        </div>
        <p className="text-sm text-text-muted mt-3">Showing {filtered.length} of {accommodations.length} properties</p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">No accommodations found</h3>
          <p className="text-text-muted">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((acc) => {
            const typeLabel = ACCOMMODATION_TYPES.find((t) => t.id === acc.type)?.label ?? acc.type;
            return (
              <Link key={acc.slug} href={`/accommodations/${acc.slug}`} className="card-moroccan group overflow-hidden flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={acc.image} alt={acc.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 price-badge">From {formatPrice(acc.priceFromMad)}</div>
                  <div className="absolute top-3 right-3 tag tag-accent inline-flex items-center gap-1">
                    {typeIcons[acc.type]}
                    {typeLabel}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug">{acc.name}</h3>
                    <div className="flex items-center gap-1 text-accent shrink-0">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-sm font-semibold">{acc.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex items-center gap-1 text-sm text-text-muted">
                      <MapPin className="w-3.5 h-3.5 text-primary" />{acc.cityName}
                    </span>
                    <span className="flex items-center gap-0.5 text-accent">
                      {Array.from({ length: acc.starRating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1 line-clamp-2">{acc.description}</p>
                  <div className="flex flex-wrap gap-2 border-t border-border-light pt-3 mt-auto">
                    {acc.amenities.slice(0, 5).map((amenity) => (
                      <span key={amenity} className="inline-flex items-center gap-1 text-xs text-text-muted" title={amenity}>
                        {amenityIcons[amenity] || <Star className="w-3 h-3" />}
                        <span className="hidden sm:inline">{amenity}</span>
                      </span>
                    ))}
                    {acc.amenities.length > 5 && <span className="text-xs text-text-muted">+{acc.amenities.length - 5}</span>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
