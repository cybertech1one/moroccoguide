'use client';

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react';
import { Search, X, MapPin, Utensils, Hotel, Landmark, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SearchSuggestion {
  id: string;
  label: string;
  category?: string;
  icon?: 'location' | 'restaurant' | 'hotel' | 'landmark' | 'shopping';
}

interface SearchCategory {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SearchBarProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  categories?: SearchCategory[];
  onSearch?: (query: string, category?: string) => void;
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  className?: string;
  expanded?: boolean;
  size?: 'md' | 'lg';
}

const defaultCategories: SearchCategory[] = [
  { id: 'all', label: 'All', icon: <Search size={14} /> },
  { id: 'restaurants', label: 'Restaurants', icon: <Utensils size={14} /> },
  { id: 'hotels', label: 'Hotels', icon: <Hotel size={14} /> },
  { id: 'attractions', label: 'Attractions', icon: <Landmark size={14} /> },
  { id: 'shopping', label: 'Shopping', icon: <ShoppingBag size={14} /> },
];

const suggestionIcons = {
  location: MapPin,
  restaurant: Utensils,
  hotel: Hotel,
  landmark: Landmark,
  shopping: ShoppingBag,
};

function SearchBar({
  placeholder = 'Search Morocco...',
  suggestions = [],
  categories = defaultCategories,
  onSearch,
  onSuggestionSelect,
  className,
  expanded: controlledExpanded,
  size = 'lg',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isExpanded = controlledExpanded ?? query.length > 0;

  const filteredSuggestions = suggestions.filter(
    (s) =>
      s.label.toLowerCase().includes(query.toLowerCase()) &&
      (activeCategory === 'all' || s.category === activeCategory),
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  }, []);

  const handleSearch = useCallback(() => {
    if (query.trim()) {
      onSearch?.(query.trim(), activeCategory !== 'all' ? activeCategory : undefined);
      setIsOpen(false);
    }
  }, [query, activeCategory, onSearch]);

  const handleSuggestionClick = useCallback(
    (suggestion: SearchSuggestion) => {
      setQuery(suggestion.label);
      setIsOpen(false);
      onSuggestionSelect?.(suggestion);
    },
    [onSuggestionSelect],
  );

  const handleClear = useCallback(() => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (highlightedIndex >= 0 && filteredSuggestions[highlightedIndex]) {
          handleSuggestionClick(filteredSuggestions[highlightedIndex]);
        } else {
          handleSearch();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1,
        );
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    },
    [highlightedIndex, filteredSuggestions, handleSearch, handleSuggestionClick],
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Category Tabs */}
      {categories.length > 1 && (
        <div className="flex items-center gap-1 mb-3 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium',
                'transition-all duration-200 whitespace-nowrap shrink-0',
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-sand-100 text-text-secondary hover:bg-sand-200',
              )}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Search Input */}
      <div
        className={cn(
          'relative flex items-center rounded-xl border bg-surface',
          'transition-all duration-300',
          isOpen && filteredSuggestions.length > 0
            ? 'rounded-b-none border-primary/30 shadow-lg ring-2 ring-primary/10'
            : 'border-border hover:border-sand-400 shadow-md',
          size === 'lg' ? 'h-14' : 'h-11',
        )}
      >
        <Search
          className={cn(
            'shrink-0 ml-4 transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-text-muted',
          )}
          size={size === 'lg' ? 20 : 18}
        />

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          aria-label="Search"
          aria-expanded={isOpen && filteredSuggestions.length > 0}
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          role="combobox"
          className={cn(
            'flex-1 bg-transparent border-none outline-none px-3',
            'text-text-primary placeholder:text-text-muted/60 font-body',
            size === 'lg' ? 'text-base' : 'text-sm',
          )}
        />

        <AnimatePresence>
          {query.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              type="button"
              onClick={handleClear}
              className="shrink-0 mr-2 p-1 rounded-md text-text-muted hover:text-text-primary hover:bg-sand-100 transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={handleSearch}
          className={cn(
            'shrink-0 mr-2 bg-gradient-to-br from-primary to-primary-dark text-white',
            'rounded-lg font-heading font-semibold transition-all duration-200',
            'hover:from-primary-light hover:to-primary shadow-sm',
            size === 'lg' ? 'px-5 py-2 text-sm' : 'px-4 py-1.5 text-xs',
          )}
        >
          Search
        </button>
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && filteredSuggestions.length > 0 && (
          <motion.div
            id="search-suggestions"
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute left-0 right-0 top-full z-50',
              'bg-surface border border-t-0 border-primary/30 rounded-b-xl',
              'shadow-xl overflow-hidden',
            )}
          >
            <div className="max-h-64 overflow-y-auto py-1">
              {filteredSuggestions.map((suggestion, index) => {
                const SuggestionIcon = suggestion.icon
                  ? suggestionIcons[suggestion.icon]
                  : Search;

                return (
                  <button
                    key={suggestion.id}
                    type="button"
                    role="option"
                    aria-selected={index === highlightedIndex}
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-left',
                      'transition-colors duration-100',
                      index === highlightedIndex
                        ? 'bg-sand-100 text-text-primary'
                        : 'text-text-secondary hover:bg-sand-50',
                    )}
                  >
                    <SuggestionIcon size={16} className="shrink-0 text-text-muted" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium truncate block">
                        {suggestion.label}
                      </span>
                      {suggestion.category && (
                        <span className="text-xs text-text-muted capitalize">
                          {suggestion.category}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

SearchBar.displayName = 'SearchBar';

export { SearchBar };
export type { SearchBarProps, SearchSuggestion, SearchCategory };
