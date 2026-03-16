'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, Tag, BadgeCheck, HandCoins, Star, ShoppingBag } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

export interface ShoppingItem {
  name: string;
  category: 'Textiles' | 'Leather' | 'Ceramics' | 'Spices' | 'Beauty' | 'Jewelry' | 'Decor' | 'Food';
  description: string;
  priceRange: string;
  whereToBuy: string[];
  image: string;
  haggleTip: string;
  authenticity: string;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const CATEGORIES = ['All', 'Textiles', 'Leather', 'Ceramics', 'Spices', 'Beauty', 'Jewelry', 'Decor', 'Food'] as const;

const categoryColorMap: Record<string, string> = {
  Textiles: 'bg-purple-100 text-purple-700',
  Leather: 'bg-amber-100 text-amber-700',
  Ceramics: 'bg-blue-100 text-blue-700',
  Spices: 'bg-orange-100 text-orange-700',
  Beauty: 'bg-pink-100 text-pink-700',
  Jewelry: 'bg-yellow-100 text-yellow-700',
  Decor: 'bg-emerald-100 text-emerald-700',
  Food: 'bg-red-100 text-red-700',
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ShoppingClient({ items }: { items: ShoppingItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (activeCategory !== 'All' && item.category !== activeCategory) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDescription = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesCity = item.whereToBuy.some((city) => city.toLowerCase().includes(query));
        if (!matchesName && !matchesDescription && !matchesCategory && !matchesCity) return false;
      }
      return true;
    });
  }, [items, activeCategory, searchQuery]);

  return (
    <div>
      {/* Filter Controls */}
      <div className="space-y-6 mb-10">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
          <input
            type="text"
            placeholder="Search items, cities, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-light)] bg-white text-[var(--text-primary)] text-sm placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
          />
        </div>

        {/* Category Pills */}
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Category</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] border border-[var(--border-light)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-[var(--text-secondary)] mb-6">
        Showing <span className="font-semibold text-[var(--text-primary)]">{filteredItems.length}</span>{' '}
        {filteredItems.length === 1 ? 'item' : 'items'}
      </p>

      {/* Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isExpanded = expandedItem === item.name;
            return (
              <article key={item.name} className="card-moroccan overflow-hidden group flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        categoryColorMap[item.category] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Header */}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {item.name}
                  </h3>

                  {/* Price Range */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <Tag className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span className="text-sm font-semibold text-[var(--color-primary)]">{item.priceRange}</span>
                  </div>

                  {/* Where to Buy */}
                  <div className="flex items-start gap-1.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0 mt-0.5" />
                    <span className="text-xs text-[var(--text-secondary)]">{item.whereToBuy.join(', ')}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Expandable Tips */}
                  <div className="mt-auto">
                    <button
                      onClick={() => setExpandedItem(isExpanded ? null : item.name)}
                      className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                    >
                      {isExpanded ? 'Hide tips' : 'Haggling & authenticity tips'}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-3 pt-3 border-t border-[var(--border-light)]">
                        {/* Haggle Tip */}
                        <div className="flex items-start gap-2">
                          <HandCoins className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-1">
                              Haggling Tip
                            </p>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                              {item.haggleTip}
                            </p>
                          </div>
                        </div>

                        {/* Authenticity */}
                        <div className="flex items-start gap-2">
                          <BadgeCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wide mb-1">
                              Authenticity Check
                            </p>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                              {item.authenticity}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <ShoppingBag className="w-12 h-12 text-[var(--text-secondary)]/30 mx-auto mb-4" />
          <p className="text-lg font-semibold text-[var(--text-primary)] mb-2">No items found</p>
          <p className="text-[var(--text-secondary)]">
            Try adjusting your filters or search query to discover more Moroccan treasures.
          </p>
        </div>
      )}
    </div>
  );
}
