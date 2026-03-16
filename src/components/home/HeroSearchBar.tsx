'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, ArrowRight } from 'lucide-react';

const POPULAR_SEARCHES = [
  { label: 'Marrakech', href: '/cities/marrakech' },
  { label: 'Sahara Desert', href: '/desert' },
  { label: 'Chefchaouen', href: '/cities/chefchaouen' },
  { label: 'Fes Medina', href: '/cities/fes' },
  { label: 'Cooking Classes', href: '/cooking-classes' },
];

export default function HeroSearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className="flex items-center rounded-2xl border-2 transition-all duration-300 overflow-hidden"
          style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderColor: isFocused ? '#A0522D' : 'rgba(160,82,45,0.2)',
            boxShadow: isFocused
              ? '0 8px 32px rgba(160,82,45,0.15), 0 0 0 4px rgba(160,82,45,0.08)'
              : '0 4px 24px rgba(26,24,20,0.08)',
          }}
        >
          <Search className="w-5 h-5 ml-5 flex-shrink-0" style={{ color: '#A0522D' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            placeholder="Search destinations, tours, experiences..."
            className="flex-1 px-4 py-4 md:py-5 bg-transparent text-base outline-none placeholder:text-[var(--text-muted)] font-[family-name:var(--font-body)]"
            style={{ color: '#1A1814' }}
            aria-label="Search Morocco destinations and experiences"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 mr-2 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:brightness-110 cursor-pointer flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #A0522D 0%, #7A3E22 100%)',
            }}
          >
            <span className="hidden sm:inline">Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Popular searches pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        <span className="text-xs font-medium" style={{ color: 'rgba(26,24,20,0.5)' }}>
          Popular:
        </span>
        {POPULAR_SEARCHES.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: 'rgba(160,82,45,0.08)',
              color: '#A0522D',
              border: '1px solid rgba(160,82,45,0.12)',
            }}
          >
            <MapPin className="w-3 h-3" />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
