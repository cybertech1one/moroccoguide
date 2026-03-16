'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Star, MapPin, DollarSign } from 'lucide-react';

/* ─── Types ─── */

type CuisineType = 'moroccan' | 'street_food' | 'seafood' | 'french' | 'mediterranean' | 'international' | 'rooftop' | 'cafe' | 'fusion';

export interface RestaurantItem {
  name: string;
  slug: string;
  cityName: string;
  cuisineType: CuisineType;
  priceRange: 1 | 2 | 3 | 4;
  description: string;
  specialties: string[];
  rating: number;
  image: string;
}

/* ─── Constants ─── */

const CUISINE_TYPES: { id: CuisineType; label: string }[] = [
  { id: 'moroccan', label: 'Moroccan Traditional' },
  { id: 'street_food', label: 'Street Food' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'french', label: 'French' },
  { id: 'mediterranean', label: 'Mediterranean' },
  { id: 'international', label: 'International' },
  { id: 'rooftop', label: 'Rooftop Dining' },
  { id: 'cafe', label: 'Cafe' },
  { id: 'fusion', label: 'Fusion' },
];

function getPriceLevelText(level: number): string {
  return '$'.repeat(level);
}

/* ─── Component ─── */

export default function RestaurantsClientSection({
  restaurants,
  cities,
}: {
  restaurants: RestaurantItem[];
  cities: string[];
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !r.name.toLowerCase().includes(q) &&
          !r.cityName.toLowerCase().includes(q) &&
          !r.description.toLowerCase().includes(q) &&
          !r.specialties.some((s) => s.toLowerCase().includes(q))
        ) return false;
      }
      if (selectedCuisine !== 'all' && r.cuisineType !== selectedCuisine) return false;
      if (selectedCity !== 'all' && r.cityName !== selectedCity) return false;
      if (selectedPrice !== 'all' && r.priceRange !== Number(selectedPrice)) return false;
      return true;
    });
  }, [restaurants, searchQuery, selectedCuisine, selectedCity, selectedPrice]);

  return (
    <div>
      {/* Filters */}
      <div className="card-moroccan p-4 md:p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input type="text" placeholder="Search restaurants or dishes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" aria-label="Search restaurants" />
          </div>
          <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by cuisine">
            <option value="all">All Cuisines</option>
            {CUISINE_TYPES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by city">
            <option value="all">All Cities</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} className="px-3 py-2.5 rounded-lg border border-border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors" aria-label="Filter by price range">
            <option value="all">Any Price</option>
            <option value="1">$ - Budget</option>
            <option value="2">$$ - Moderate</option>
            <option value="3">$$$ - Upscale</option>
            <option value="4">$$$$ - Fine Dining</option>
          </select>
        </div>
        <p className="text-sm text-text-muted mt-3">Showing {filtered.length} of {restaurants.length} restaurants</p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">No restaurants found</h3>
          <p className="text-text-muted">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filtered.map((restaurant) => {
            const cuisineLabel = CUISINE_TYPES.find((c) => c.id === restaurant.cuisineType)?.label ?? restaurant.cuisineType;
            return (
              <Link key={restaurant.slug} href={`/restaurants/${restaurant.slug}`} className="card-moroccan group overflow-hidden flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={restaurant.image} alt={restaurant.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 tag tag-primary inline-flex items-center gap-1">
                    {cuisineLabel}
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-bold backdrop-blur-sm">
                    <DollarSign className="w-3 h-3" />
                    {getPriceLevelText(restaurant.priceRange)}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors leading-snug">{restaurant.name}</h3>
                    <div className="flex items-center gap-1 text-accent shrink-0">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-sm font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-text-muted mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />{restaurant.cityName}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1 line-clamp-2">{restaurant.description}</p>
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 border-t border-border-light pt-3 mt-auto">
                    {restaurant.specialties.slice(0, 3).map((s) => (
                      <span key={s} className="tag tag-accent text-[11px]">{s}</span>
                    ))}
                    {restaurant.specialties.length > 3 && (
                      <span className="tag tag-accent text-[11px]">+{restaurant.specialties.length - 3}</span>
                    )}
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
