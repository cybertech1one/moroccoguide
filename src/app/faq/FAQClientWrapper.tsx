'use client';

// =====================================================================
// FAQ Client Wrapper
// Handles search filtering, accordion open/close state, and category
// navigation for the comprehensive Morocco FAQ page.
// =====================================================================

import { useState, useCallback, useMemo } from 'react';
import {
  Plane,
  Train,
  Hotel,
  UtensilsCrossed,
  BookOpen,
  Shield,
  Wallet,
  Smartphone,
  MapPin,
} from 'lucide-react';
import { FAQSearch, FAQCategorySection } from './FAQAccordion';

// ── Types ────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  iconName: string;
  faqs: FAQItem[];
}

// ── Icon mapping ─────────────────────────────────────────────────────

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin size={20} />,
  plane: <Plane size={20} />,
  train: <Train size={20} />,
  hotel: <Hotel size={20} />,
  utensils: <UtensilsCrossed size={20} />,
  'book-open': <BookOpen size={20} />,
  shield: <Shield size={20} />,
  wallet: <Wallet size={20} />,
  smartphone: <Smartphone size={20} />,
};

// ── Main wrapper ─────────────────────────────────────────────────────

interface FAQClientWrapperProps {
  categories: FAQCategory[];
  totalCount: number;
}

export default function FAQClientWrapper({
  categories,
  totalCount,
}: FAQClientWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Toggle a single FAQ item open/closed
  const handleToggle = useCallback((key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }, []);

  // Filter categories and FAQs based on search query
  const { filteredCategories, filteredCount } = useMemo(() => {
    if (!searchQuery.trim()) {
      return { filteredCategories: categories, filteredCount: totalCount };
    }

    const terms = searchQuery
      .toLowerCase()
      .split(/\s+/)
      .filter((t) => t.length > 0);

    let count = 0;
    const filtered = categories
      .map((cat) => {
        const matchingFaqs = cat.faqs.filter((faq) => {
          const text = `${faq.question} ${faq.answer}`.toLowerCase();
          return terms.every((term) => text.includes(term));
        });
        count += matchingFaqs.length;
        return { ...cat, faqs: matchingFaqs };
      })
      .filter((cat) => cat.faqs.length > 0);

    return { filteredCategories: filtered, filteredCount: count };
  }, [categories, searchQuery, totalCount]);

  return (
    <>
      {/* Search */}
      <FAQSearch
        query={searchQuery}
        onChange={setSearchQuery}
        resultCount={filteredCount}
        totalCount={totalCount}
      />

      {/* Quick navigation pills (hidden when searching) */}
      {!searchQuery && (
        <nav
          aria-label="FAQ Categories"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-4 py-2 text-sm font-medium rounded-full border transition-colors hover:border-current"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface)',
              }}
            >
              {cat.title}
            </a>
          ))}
        </nav>
      )}

      {/* Category sections */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => (
          <FAQCategorySection
            key={category.id}
            id={category.id}
            title={category.title}
            icon={iconMap[category.iconName] ?? <MapPin size={20} />}
            faqs={category.faqs}
            openItems={openItems}
            onToggle={handleToggle}
            categoryKey={category.id}
          />
        ))
      ) : (
        <div
          className="text-center py-16 rounded-xl border"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface-muted)',
          }}
        >
          <p
            className="text-lg font-medium mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            No matching questions found
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Try different keywords or{' '}
            <button
              onClick={() => setSearchQuery('')}
              className="underline cursor-pointer"
              style={{ color: 'var(--color-primary)' }}
            >
              clear the search
            </button>
          </p>
        </div>
      )}
    </>
  );
}
