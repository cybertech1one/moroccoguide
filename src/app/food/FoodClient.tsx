'use client';

import { useState, useMemo } from 'react';
import { Flame, Leaf, Star } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

export interface Dish {
  name: string;
  arabicName: string;
  description: string;
  image: string;
  category: 'Main Course' | 'Street Food' | 'Dessert' | 'Drink' | 'Side';
  region: string;
  spiceLevel: 'Mild' | 'Medium' | 'Spicy';
  vegetarian: boolean;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const CATEGORIES = ['All', 'Main Course', 'Street Food', 'Dessert', 'Drink', 'Side'] as const;
const SPICE_LEVELS = ['All', 'Mild', 'Medium', 'Spicy'] as const;

const spiceColorMap: Record<string, string> = {
  Mild: 'bg-green-500',
  Medium: 'bg-yellow-500',
  Spicy: 'bg-red-500',
};

const spiceTextMap: Record<string, string> = {
  Mild: 'text-green-700',
  Medium: 'text-yellow-700',
  Spicy: 'text-red-700',
};

const categoryColorMap: Record<string, string> = {
  'Main Course': 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
  'Street Food': 'bg-orange-100 text-orange-700',
  Dessert: 'bg-pink-100 text-pink-700',
  Drink: 'bg-cyan-100 text-cyan-700',
  Side: 'bg-emerald-100 text-emerald-700',
};

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function FoodClient({ dishes }: { dishes: Dish[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSpice, setActiveSpice] = useState<string>('All');
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      if (activeCategory !== 'All' && dish.category !== activeCategory) return false;
      if (activeSpice !== 'All' && dish.spiceLevel !== activeSpice) return false;
      if (vegetarianOnly && !dish.vegetarian) return false;
      return true;
    });
  }, [dishes, activeCategory, activeSpice, vegetarianOnly]);

  return (
    <div>
      {/* Filter Controls */}
      <div className="space-y-6 mb-10">
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
                    : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Spice Level & Vegetarian Row */}
        <div className="flex flex-wrap items-end gap-6">
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Spice Level</p>
            <div className="flex flex-wrap gap-2">
              {SPICE_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveSpice(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5 ${
                    activeSpice === level
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
                  }`}
                >
                  {level !== 'All' && <Flame className="w-3.5 h-3.5" />}
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Vegetarian Toggle */}
          <button
            onClick={() => setVegetarianOnly(!vegetarianOnly)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1.5 ${
              vegetarianOnly
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-[var(--surface-muted)] text-[var(--text-secondary)] hover:bg-green-50 hover:text-green-700'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            Vegetarian Only
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-[var(--text-secondary)] mb-6">
        Showing <span className="font-semibold text-[var(--text-primary)]">{filteredDishes.length}</span>{' '}
        {filteredDishes.length === 1 ? 'dish' : 'dishes'}
      </p>

      {/* Dish Grid */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <article key={dish.name} className="card-moroccan overflow-hidden group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category Tag */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColorMap[dish.category] || 'bg-gray-100 text-gray-700'}`}>
                    {dish.category}
                  </span>
                </div>
                {/* Vegetarian Badge */}
                {dish.vegetarian && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      <Leaf className="w-3 h-3" />
                      Vegetarian
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium">{dish.arabicName}</p>
                  </div>
                </div>

                {/* Region & Spice */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-[var(--text-secondary)]">{dish.region}</span>
                  <span className="text-[var(--text-secondary)]">&middot;</span>
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <span className={`w-2 h-2 rounded-full ${spiceColorMap[dish.spiceLevel]}`} />
                    <span className={`font-medium ${spiceTextMap[dish.spiceLevel]}`}>{dish.spiceLevel}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Star className="w-12 h-12 text-[var(--text-secondary)]/30 mx-auto mb-4" />
          <p className="text-lg font-semibold text-[var(--text-primary)] mb-2">No dishes found</p>
          <p className="text-[var(--text-secondary)]">
            Try adjusting your filters to discover more Moroccan dishes.
          </p>
        </div>
      )}
    </div>
  );
}
