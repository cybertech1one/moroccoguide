'use client';

import { useState, useMemo } from 'react';
import {
  Star,
  Filter,
  Waves,
  MapPin,
  X,
  SunMedium,
  CheckCircle,
} from 'lucide-react';
interface Beach {
  name: string;
  city: string;
  type: string[];
  coast: 'Atlantic' | 'Mediterranean';
  region: string;
  description: string;
  image: string;
  bestSeason: string;
  facilities: string[];
  rating: number;
}

const beachTypes = ['All', 'Surf', 'Swimming', 'Secluded', 'Family', 'Water Sports'];
const coasts = ['All', 'Atlantic', 'Mediterranean'];
const regions = [
  'All',
  'Souss-Massa',
  'Marrakech-Safi',
  'Dakhla-Oued Ed-Dahab',
  'Casablanca-Settat',
  'Rabat-Sale-Kenitra',
  'Tanger-Tetouan-Al Hoceima',
  'Oriental',
  'Guelmim-Oued Noun',
];

export default function BeachesClient({ beaches }: { beaches: Beach[] }) {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCoast, setSelectedCoast] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredBeaches = useMemo(() => {
    return beaches.filter((beach) => {
      const matchesType = selectedType === 'All' || beach.type.includes(selectedType);
      const matchesCoast = selectedCoast === 'All' || beach.coast === selectedCoast;
      const matchesRegion = selectedRegion === 'All' || beach.region === selectedRegion;
      return matchesType && matchesCoast && matchesRegion;
    });
  }, [beaches, selectedType, selectedCoast, selectedRegion]);

  const activeFilters = [selectedType, selectedCoast, selectedRegion].filter((f) => f !== 'All').length;

  const clearFilters = () => {
    setSelectedType('All');
    setSelectedCoast('All');
    setSelectedRegion('All');
  };

  return (
    <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
      <div className="container-morocco">
        <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
          Explore 20 Beaches
        </h2>
        <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
          Use the filters to find the perfect beach for your trip. Whether you want world-class surf, family-friendly swimming, or total seclusion.
        </p>

        {/* Filters */}
        <div className="card-moroccan p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="font-semibold text-[var(--text-primary)] text-sm">Filters</span>
            {activeFilters > 0 && (
              <button
                onClick={clearFilters}
                className="ml-auto flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline"
              >
                <X className="w-3 h-3" /> Clear all
              </button>
            )}
          </div>

          <div className="space-y-4">
            {/* Type Filter */}
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                Beach Type
              </label>
              <div className="flex flex-wrap gap-2">
                {beachTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedType === type
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Coast Filter */}
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                Coast
              </label>
              <div className="flex flex-wrap gap-2">
                {coasts.map((coast) => (
                  <button
                    key={coast}
                    onClick={() => setSelectedCoast(coast)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedCoast === coast
                        ? 'bg-[var(--color-secondary)] text-white'
                        : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]'
                    }`}
                  >
                    {coast}
                  </button>
                ))}
              </div>
            </div>

            {/* Region Filter */}
            <div>
              <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2 block">
                Region
              </label>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedRegion === region
                        ? 'bg-[var(--color-accent-dark)] text-white'
                        : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-[var(--text-muted)] mb-6">
          Showing {filteredBeaches.length} of {beaches.length} beaches
        </p>

        {/* Beach Grid */}
        {filteredBeaches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBeaches.map((beach) => (
              <div key={beach.name} className="card-moroccan overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={beach.image}
                    alt={`${beach.name}, ${beach.city} - Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-[var(--text-primary)]">
                    <Star className="w-3.5 h-3.5 inline text-[var(--color-accent)] mr-1" />
                    {beach.rating}
                  </div>
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {beach.type.map((t) => (
                      <span key={t} className="tag tag-primary text-[10px]">{t}</span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`tag ${beach.coast === 'Atlantic' ? 'tag-secondary' : 'tag-accent'}`}>
                      <Waves className="w-3 h-3 inline mr-1" />
                      {beach.coast}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-0.5">{beach.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {beach.city} &middot; {beach.region}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed line-clamp-3">
                    {beach.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-3">
                    <SunMedium className="w-3 h-3" />
                    Best: {beach.bestSeason}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {beach.facilities.slice(0, 4).map((f) => (
                      <span key={f} className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-2.5 h-2.5" /> {f}
                      </span>
                    ))}
                    {beach.facilities.length > 4 && (
                      <span className="text-[10px] text-[var(--text-muted)] px-2 py-0.5">
                        +{beach.facilities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Waves className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">No beaches match your filters</h3>
            <p className="text-[var(--text-secondary)] mb-4">Try adjusting your filters to see more results.</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
