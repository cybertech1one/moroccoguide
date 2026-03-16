'use client';

import { useState, useMemo, useEffect, useCallback, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Search as SearchIcon,
  MapPin,
  Star,
  Landmark,
  Utensils,
  Hotel,
  Compass,
  TrendingUp,
  ChevronRight,
  Home,
  X,
  Clock,
  Grid3X3,
  List,
  SlidersHorizontal,
  BookOpen,
  Sparkles,
  ArrowUpDown,
  ChevronDown,
  Trash2,
  Camera,
  Globe,
  Layers,
} from 'lucide-react';
import {
  searchItems,
  getSuggestions,
  getDidYouMean,
  getRecentSearches,
  addRecentSearch,
  clearRecentSearches,
  POPULAR_SEARCHES,
  ALL_REGIONS,
} from '@/lib/search-index';
import type { SearchResult } from '@/lib/search-index';

/* ================================================================
   TYPE CONFIG
   ================================================================ */

const TYPE_TABS = [
  { id: 'all', label: 'All', icon: Globe },
  { id: 'city', label: 'Cities', icon: MapPin },
  { id: 'attraction', label: 'Attractions', icon: Landmark },
  { id: 'tour', label: 'Tours', icon: Compass },
  { id: 'restaurant', label: 'Food', icon: Utensils },
  { id: 'hotel', label: 'Hotels', icon: Hotel },
  { id: 'guide', label: 'Guides', icon: BookOpen },
  { id: 'experience', label: 'Experiences', icon: Sparkles },
  { id: 'page', label: 'Pages', icon: Camera },
] as const;

const typeConfig: Record<string, { label: string; colorClass: string; icon: typeof MapPin }> = {
  city: { label: 'City', colorClass: 'tag-primary', icon: MapPin },
  attraction: { label: 'Attraction', colorClass: 'tag-secondary', icon: Landmark },
  tour: { label: 'Tour', colorClass: 'tag-accent', icon: Compass },
  restaurant: { label: 'Restaurant', colorClass: 'tag-primary', icon: Utensils },
  hotel: { label: 'Hotel', colorClass: 'tag-secondary', icon: Hotel },
  guide: { label: 'Guide', colorClass: 'tag-accent', icon: BookOpen },
  experience: { label: 'Experience', colorClass: 'tag-primary', icon: Sparkles },
  page: { label: 'Page', colorClass: 'tag-secondary', icon: Camera },
};

/* Category grouping order for "grouped" view */
const CATEGORY_ORDER: Array<{ type: string; label: string; icon: typeof MapPin }> = [
  { type: 'city', label: 'Cities', icon: MapPin },
  { type: 'attraction', label: 'Attractions', icon: Landmark },
  { type: 'tour', label: 'Tours', icon: Compass },
  { type: 'restaurant', label: 'Restaurants', icon: Utensils },
  { type: 'hotel', label: 'Accommodations', icon: Hotel },
  { type: 'guide', label: 'Guides', icon: BookOpen },
  { type: 'experience', label: 'Experiences', icon: Sparkles },
  { type: 'page', label: 'Pages', icon: Camera },
];

/* ================================================================
   HIGHLIGHT MATCHING TEXT
   ================================================================ */

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const terms = query.trim().split(/\s+/).filter(Boolean);
  const regex = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        const isMatch = terms.some(t => part.toLowerCase() === t.toLowerCase());
        return isMatch ? (
          <mark key={i} className="bg-[var(--color-accent)]/20 text-[var(--color-accent-dark)] rounded px-0.5 font-semibold">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

/* ================================================================
   LOADING SKELETON
   ================================================================ */

function ResultSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card-moroccan p-4 animate-pulse">
          <div className="flex gap-4">
            <div className="w-24 h-20 rounded-lg bg-[var(--color-border)]" />
            <div className="flex-1 space-y-2">
              <div className="h-5 w-2/3 rounded bg-[var(--color-border)]" />
              <div className="h-4 w-1/3 rounded bg-[var(--color-border)]" />
              <div className="h-4 w-full rounded bg-[var(--color-border)]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================
   STAR RATING DISPLAY
   ================================================================ */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
      <span className="text-sm font-semibold text-[var(--color-text-primary)]">{rating.toFixed(1)}</span>
    </div>
  );
}

/* ================================================================
   RESULT CARD (Grid View)
   ================================================================ */

function ResultCardGrid({ result, query }: { result: SearchResult; query: string }) {
  const config = typeConfig[result.type] || typeConfig.page;
  const Icon = config.icon;
  return (
    <Link
      href={result.url}
      className="card-moroccan group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
    >
      {result.image && (
        <div className="relative h-40 w-full overflow-hidden bg-[var(--color-surface-alt)]">
          <img
            src={result.image}
            alt={result.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className={`absolute top-3 left-3 tag ${config.colorClass} text-[10px] flex items-center gap-1`}>
            <Icon className="w-3 h-3" />
            {config.label}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
          <HighlightedText text={result.title} query={query} />
        </h3>
        {result.city && (
          <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] mt-1">
            <MapPin className="w-3 h-3" />
            <HighlightedText text={result.city} query={query} />
          </div>
        )}
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 line-clamp-2 flex-1">
          <HighlightedText text={result.description} query={query} />
        </p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-border)]">
          {result.rating ? <StarRating rating={result.rating} /> : <span />}
          <ChevronRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
        </div>
      </div>
    </Link>
  );
}

/* ================================================================
   RESULT CARD (List View)
   ================================================================ */

function ResultCardList({ result, query }: { result: SearchResult; query: string }) {
  const config = typeConfig[result.type] || typeConfig.page;
  const Icon = config.icon;
  return (
    <Link
      href={result.url}
      className="card-moroccan p-4 flex items-start gap-4 group transition-all hover:shadow-md"
    >
      {result.image && (
        <div className="w-24 h-20 shrink-0 overflow-hidden rounded-lg bg-[var(--color-surface-alt)]">
          <img
            src={result.image}
            alt={result.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-heading font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors truncate">
            <HighlightedText text={result.title} query={query} />
          </h3>
          <span className={`tag ${config.colorClass} text-[10px] shrink-0 flex items-center gap-1`}>
            <Icon className="w-3 h-3" />
            {config.label}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-1">
          {result.city && (
            <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
              <MapPin className="w-3 h-3" />
              <HighlightedText text={result.city} query={query} />
            </div>
          )}
          {result.rating && <StarRating rating={result.rating} />}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
          <HighlightedText text={result.description} query={query} />
        </p>
      </div>
      <ChevronRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors shrink-0 mt-1" />
    </Link>
  );
}

/* ================================================================
   GROUPED RESULTS SECTION
   ================================================================ */

function GroupedResults({ results, query }: { results: SearchResult[]; query: string }) {
  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const result of results) {
      if (!groups[result.type]) groups[result.type] = [];
      groups[result.type].push(result);
    }
    return groups;
  }, [results]);

  return (
    <div className="space-y-10">
      {CATEGORY_ORDER.map(({ type, label, icon: CategoryIcon }) => {
        const items = grouped[type];
        if (!items || items.length === 0) return null;
        return (
          <section key={type}>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[var(--color-border)]">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-primary)]/10">
                <CategoryIcon className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
              <h2 className="font-heading text-lg font-semibold text-[var(--color-text-primary)]">
                {label}
              </h2>
              <span className="text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-surface-alt)] px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {items.slice(0, 6).map(result => (
                <ResultCardGrid key={result.id} result={result} query={query} />
              ))}
            </div>
            {items.length > 6 && (
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                + {items.length - 6} more result{items.length - 6 !== 1 ? 's' : ''} in this category. Use the tab filter above to see all.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}

/* ================================================================
   SEARCH CONTENT (Main Client Component)
   ================================================================ */

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL state
  const initialQuery = searchParams.get('q') || '';
  const initialType = searchParams.get('type') || 'all';
  const initialSort = (searchParams.get('sort') || 'relevance') as 'relevance' | 'rating' | 'az';

  // Component state
  const [query, setQuery] = useState(initialQuery);
  const [activeType, setActiveType] = useState(initialType);
  const [sortBy, setSortBy] = useState<'relevance' | 'rating' | 'az'>(initialSort);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'grouped'>('grid');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [regionFilter, setRegionFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Load recent searches on mount
  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, []);

  // Sync URL params
  useEffect(() => {
    const q = searchParams.get('q');
    const t = searchParams.get('type');
    const s = searchParams.get('sort');
    if (q !== null) setQuery(q);
    if (t !== null) setActiveType(t);
    if (s !== null) setSortBy(s as 'relevance' | 'rating' | 'az');
  }, [searchParams]);

  // Update URL when state changes
  const updateURL = useCallback((newQuery: string, newType: string, newSort: string) => {
    const params = new URLSearchParams();
    if (newQuery) params.set('q', newQuery);
    if (newType && newType !== 'all') params.set('type', newType);
    if (newSort && newSort !== 'relevance') params.set('sort', newSort);
    const paramString = params.toString();
    router.replace(`/search${paramString ? `?${paramString}` : ''}`, { scroll: false });
  }, [router]);

  // Search results with debounce
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    setIsLoading(true);
    debounceTimer.current = setTimeout(() => {
      setDebouncedQuery(query);
      setIsLoading(false);
    }, 200);
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [query]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchItems(debouncedQuery, {
      type: activeType !== 'all' ? activeType : undefined,
      sort: sortBy,
      region: regionFilter || undefined,
      limit: 80,
    });
  }, [debouncedQuery, activeType, sortBy, regionFilter]);

  const suggestions = useMemo(() => {
    if (!query.trim() || query.trim().length < 2) return [];
    return getSuggestions(query);
  }, [query]);

  const didYouMean = useMemo(() => {
    if (!debouncedQuery.trim() || results.length > 3) return null;
    return getDidYouMean(debouncedQuery);
  }, [debouncedQuery, results.length]);

  // Count results by type for tab badges
  const allResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return searchItems(debouncedQuery, { limit: 200 });
  }, [debouncedQuery]);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allResults.length };
    for (const r of allResults) {
      counts[r.type] = (counts[r.type] || 0) + 1;
    }
    return counts;
  }, [allResults]);

  // Event handlers
  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery);
    updateURL(newQuery, activeType, sortBy);
  }, [activeType, sortBy, updateURL]);

  const handleSubmit = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) return;
    addRecentSearch(searchQuery);
    setRecentSearches(getRecentSearches());
    setShowSuggestions(false);
    updateURL(searchQuery, activeType, sortBy);
  }, [activeType, sortBy, updateURL]);

  const handleTypeChange = useCallback((type: string) => {
    setActiveType(type);
    // When switching to "all" tab, default to grouped view for better overview
    if (type === 'all' && viewMode !== 'grouped') {
      // keep current view
    }
    updateURL(query, type, sortBy);
  }, [query, sortBy, updateURL, viewMode]);

  const handleSortChange = useCallback((sort: 'relevance' | 'rating' | 'az') => {
    setSortBy(sort);
    setShowSortDropdown(false);
    updateURL(query, activeType, sort);
  }, [query, activeType, updateURL]);

  const handleClearRecent = useCallback(() => {
    clearRecentSearches();
    setRecentSearches([]);
  }, []);

  // Keyboard navigation for suggestions
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === 'Enter') {
        handleSubmit(query);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestion(prev => Math.min(prev + 1, suggestions.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestion(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestion >= 0 && selectedSuggestion < suggestions.length) {
          const selected = suggestions[selectedSuggestion];
          setQuery(selected);
          handleSubmit(selected);
        } else {
          handleSubmit(query);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedSuggestion(-1);
        break;
    }
  }, [showSuggestions, suggestions, selectedSuggestion, query, handleSubmit]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setShowSortDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hasQuery = debouncedQuery.trim().length > 0;
  const sortLabels: Record<string, string> = { relevance: 'Relevance', rating: 'Rating', az: 'A-Z' };

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-[var(--color-text-primary)] font-medium">Search</li>
        </ol>
      </nav>

      <div className="container-morocco py-8 md:py-12">
        {/* Hero Search Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] text-center mb-3">
            Search Morocco Guide
          </h1>
          <p className="text-center text-[var(--color-text-muted)] mb-8 max-w-lg mx-auto">
            Explore cities, attractions, tours, restaurants, and travel guides across Morocco
          </p>
          <div className="relative">
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] z-10" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                handleSearch(e.target.value);
                setShowSuggestions(true);
                setSelectedSuggestion(-1);
              }}
              onFocus={() => setShowSuggestions(true)}
              onKeyDown={handleKeyDown}
              placeholder="Search cities, attractions, tours, restaurants..."
              className="w-full pl-14 pr-14 py-5 text-lg rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all shadow-lg"
              aria-label="Search Morocco Guide"
              autoComplete="off"
              autoFocus
              role="combobox"
              aria-expanded={showSuggestions && suggestions.length > 0}
              aria-haspopup="listbox"
            />
            {query && (
              <button
                onClick={() => {
                  handleSearch('');
                  inputRef.current?.focus();
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Suggestions Dropdown */}
            {showSuggestions && (query.trim().length >= 2 && suggestions.length > 0) && (
              <div
                ref={suggestionsRef}
                className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] shadow-xl z-50 overflow-hidden"
                role="listbox"
              >
                {suggestions.map((suggestion, i) => {
                  const matchingResult = allResults.find(r => r.title === suggestion);
                  const url = matchingResult?.url || `/search?q=${encodeURIComponent(suggestion)}`;
                  const resultType = matchingResult?.type;
                  const config = resultType ? typeConfig[resultType] : null;
                  const SugIcon = config?.icon || SearchIcon;

                  return (
                    <Link
                      key={suggestion}
                      href={url}
                      onClick={() => {
                        addRecentSearch(suggestion);
                        setShowSuggestions(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        i === selectedSuggestion
                          ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                          : 'text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/5'
                      }`}
                      role="option"
                      aria-selected={i === selectedSuggestion}
                    >
                      <SugIcon className="w-4 h-4 shrink-0 text-[var(--color-text-muted)]" />
                      <span className="flex-1 truncate">
                        <HighlightedText text={suggestion} query={query} />
                      </span>
                      {config && (
                        <span className={`tag ${config.colorClass} text-[9px]`}>{config.label}</span>
                      )}
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                    </Link>
                  );
                })}
                <div className="border-t border-[var(--color-border)] px-4 py-2">
                  <button
                    onClick={() => {
                      handleSubmit(query);
                    }}
                    className="w-full text-left text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors flex items-center gap-2"
                  >
                    <SearchIcon className="w-3.5 h-3.5" />
                    Search for &ldquo;{query}&rdquo;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        {hasQuery && (
          <div className="mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 min-w-max pb-2">
              {TYPE_TABS.map(({ id, label, icon: TabIcon }) => {
                const count = typeCounts[id] || 0;
                const isActive = activeType === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleTypeChange(id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    {label}
                    {hasQuery && count > 0 && (
                      <span className={`text-[10px] rounded-full px-1.5 py-0.5 font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[var(--color-border)] text-[var(--color-text-muted)]'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Results */}
          <div className="flex-1 min-w-0">
            {/* Controls Row */}
            {hasQuery && results.length > 0 && (
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <p className="text-sm text-[var(--color-text-muted)]">
                  Found <span className="font-semibold text-[var(--color-text-primary)]">{results.length}</span> result{results.length !== 1 ? 's' : ''} for &ldquo;{debouncedQuery}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  {/* Region Filter */}
                  <select
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                    className="text-xs px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
                    aria-label="Filter by region"
                  >
                    <option value="">All Regions</option>
                    {ALL_REGIONS.map(r => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>

                  {/* Sort Dropdown */}
                  <div className="relative" ref={sortRef}>
                    <button
                      onClick={() => setShowSortDropdown(!showSortDropdown)}
                      className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/30 transition-colors"
                      aria-label="Sort results"
                    >
                      <ArrowUpDown className="w-3.5 h-3.5" />
                      {sortLabels[sortBy]}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {showSortDropdown && (
                      <div className="absolute right-0 top-full mt-1 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] shadow-lg z-30 min-w-[140px]">
                        {(['relevance', 'rating', 'az'] as const).map(option => (
                          <button
                            key={option}
                            onClick={() => handleSortChange(option)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              sortBy === option
                                ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium'
                                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/5'
                            }`}
                          >
                            {sortLabels[option]}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* View Toggle */}
                  <div className="flex items-center rounded-lg border border-[var(--color-border)] overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                      }`}
                      aria-label="Grid view"
                      title="Grid view"
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-colors ${
                        viewMode === 'list'
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                      }`}
                      aria-label="List view"
                      title="List view"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('grouped')}
                      className={`p-2 transition-colors ${
                        viewMode === 'grouped'
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                      }`}
                      aria-label="Grouped by category"
                      title="Grouped by category"
                    >
                      <Layers className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Did You Mean */}
            {didYouMean && hasQuery && (
              <div className="mb-6 px-4 py-3 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Did you mean{' '}
                  <button
                    onClick={() => handleSearch(didYouMean)}
                    className="font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    {didYouMean}
                  </button>
                  ?
                </p>
              </div>
            )}

            {/* Loading State */}
            {isLoading && hasQuery && <ResultSkeleton />}

            {/* Empty State - No Query */}
            {!hasQuery && !isLoading && (
              <div className="text-center py-16">
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 flex items-center justify-center">
                    <SearchIcon className="w-12 h-12 text-[var(--color-primary)]/30" />
                  </div>
                  <div
                    className="absolute top-0 right-2 w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center"
                    style={{ animation: 'float 3s ease-in-out infinite' }}
                  >
                    <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                  </div>
                  <div
                    className="absolute bottom-2 left-0 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center"
                    style={{ animation: 'float 4s ease-in-out 1s infinite' }}
                  >
                    <MapPin className="w-2.5 h-2.5 text-[var(--color-primary)]" />
                  </div>
                </div>
                <h2 className="font-heading text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                  Start your Morocco search
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
                  Search across cities, attractions, tours, restaurants, hotels, and travel guides to find exactly what you need for your Moroccan adventure.
                </p>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="max-w-lg mx-auto mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
                        <Clock className="w-4 h-4" />
                        Recent Searches
                      </div>
                      <button
                        onClick={handleClearRecent}
                        className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        Clear
                      </button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {recentSearches.map(s => (
                        <button
                          key={s}
                          onClick={() => handleSearch(s)}
                          className="flex items-center gap-1.5 tag tag-secondary hover:bg-[var(--color-secondary)]/20 transition-colors cursor-pointer text-sm"
                        >
                          <Clock className="w-3 h-3" />
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div className="max-w-lg mx-auto">
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3 flex items-center justify-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {POPULAR_SEARCHES.map(s => (
                      <button
                        key={s}
                        onClick={() => handleSearch(s)}
                        className="tag tag-primary hover:bg-[var(--color-primary)]/20 transition-colors cursor-pointer text-sm"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Browse Categories */}
                <div className="max-w-2xl mx-auto mt-12">
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-4">
                    Or browse by category
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: 'Cities', href: '/cities', icon: MapPin, desc: '30+ cities' },
                      { label: 'Attractions', href: '/attractions', icon: Landmark, desc: '20+ sites' },
                      { label: 'Tours', href: '/tours', icon: Compass, desc: '15+ tours' },
                      { label: 'Hotels', href: '/accommodations', icon: Hotel, desc: '20+ stays' },
                    ].map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="card-moroccan p-4 text-center group hover:shadow-md transition-all hover:-translate-y-0.5"
                      >
                        <div className="mx-auto w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-2 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                          <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                        </div>
                        <span className="block text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                          {item.label}
                        </span>
                        <span className="text-xs text-[var(--color-text-muted)]">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* No Results State */}
            {hasQuery && !isLoading && results.length === 0 && (
              <div className="text-center py-16">
                <div className="relative mx-auto w-28 h-28 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-border)] to-[var(--color-surface-alt)]" />
                  <div className="absolute inset-4 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
                    <SearchIcon className="w-10 h-10 text-[var(--color-text-muted)]/40" />
                  </div>
                </div>
                <h2 className="font-heading text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                  No results for &ldquo;{debouncedQuery}&rdquo;
                </h2>
                <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-6">
                  We could not find anything matching your search. Try different keywords, check your spelling, or browse our popular suggestions.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {POPULAR_SEARCHES.map(s => (
                      <button
                        key={s}
                        onClick={() => handleSearch(s)}
                        className="tag tag-secondary hover:bg-[var(--color-secondary)]/20 transition-colors cursor-pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[var(--color-border)] max-w-md mx-auto">
                    <p className="text-xs text-[var(--color-text-muted)] mb-3">Search suggestions:</p>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 text-left max-w-xs mx-auto">
                      <li className="flex items-start gap-2">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                        Try broader terms like &ldquo;desert&rdquo; or &ldquo;food&rdquo;
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                        Use synonyms: &ldquo;riad&rdquo; for guesthouses, &ldquo;souk&rdquo; for markets
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                        Check for typos in city or place names
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Results: Grid, List, or Grouped */}
            {hasQuery && !isLoading && results.length > 0 && (
              viewMode === 'grouped' ? (
                <GroupedResults results={results} query={debouncedQuery} />
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 stagger-children">
                  {results.map(result => (
                    <ResultCardGrid key={result.id} result={result} query={debouncedQuery} />
                  ))}
                </div>
              ) : (
                <div className="space-y-3 stagger-children">
                  {results.map(result => (
                    <ResultCardList key={result.id} result={result} query={debouncedQuery} />
                  ))}
                </div>
              )
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* Popular Searches */}
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-[var(--color-primary)]" />
                <h3 className="font-heading font-semibold text-[var(--color-text-primary)]">Popular Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map(s => (
                  <button
                    key={s}
                    onClick={() => handleSearch(s)}
                    className="tag tag-secondary hover:bg-[var(--color-secondary)]/20 transition-colors cursor-pointer text-xs"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="font-heading font-semibold text-[var(--color-text-primary)]">Recent</h3>
                  </div>
                  <button
                    onClick={handleClearRecent}
                    className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-1">
                  {recentSearches.slice(0, 5).map(s => (
                    <button
                      key={s}
                      onClick={() => handleSearch(s)}
                      className="w-full flex items-center gap-2 p-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors text-left"
                    >
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{s}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Browse by Category */}
            <div className="card-moroccan p-5">
              <h3 className="font-heading font-semibold text-[var(--color-text-primary)] mb-4">Browse by Category</h3>
              <nav className="space-y-1">
                {[
                  { label: 'Cities', href: '/cities', icon: MapPin },
                  { label: 'Attractions', href: '/attractions', icon: Landmark },
                  { label: 'Tours', href: '/tours', icon: Compass },
                  { label: 'Restaurants', href: '/restaurants', icon: Utensils },
                  { label: 'Hotels', href: '/accommodations', icon: Hotel },
                  { label: 'Guides', href: '/guides', icon: BookOpen },
                  { label: 'Experiences', href: '/experiences', icon: Sparkles },
                ].map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-auto" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Search Tips */}
            <div className="card-moroccan p-5 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5">
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal className="w-4 h-4 text-[var(--color-primary)]" />
                <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-sm">Search Tips</h3>
              </div>
              <ul className="space-y-2 text-xs text-[var(--color-text-muted)]">
                <li className="flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                  Try synonyms like &ldquo;riad&rdquo; for hotels or &ldquo;souk&rdquo; for markets
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                  Use category tabs to filter results by type
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                  Try &ldquo;cooking class&rdquo;, &ldquo;surf&rdquo;, or &ldquo;desert camp&rdquo;
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                  Use the grouped view to see results organized by category
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5" />
                  Use arrow keys to navigate suggestions
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

/* ================================================================
   PAGE COMPONENT (with Suspense boundary)
   ================================================================ */

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container-morocco py-20">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="h-10 w-48 mx-auto mb-6 rounded-lg bg-[var(--color-border)] animate-pulse" />
            <div className="h-14 w-full rounded-xl bg-[var(--color-border)] animate-pulse" />
          </div>
          <ResultSkeleton count={6} />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
