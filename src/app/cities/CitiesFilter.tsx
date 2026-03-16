'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, truncate } from '@/lib/utils'
import type { City } from '@/lib/data'
import {
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
  Landmark,
  ChevronDown,
  X,
  ArrowUpDown,
  Eye,
  Crown,
  Waves,
  Mountain,
  SunDim,
  LayoutGrid,
  TrendingUp,
  ArrowRight,
  Gem,
  Users,
} from 'lucide-react'

/* ================================================================
   TYPES
   ================================================================ */

type CategoryTab = 'all' | 'imperial' | 'coastal' | 'mountain' | 'hidden'
type SortOption = 'popular' | 'az' | 'attractions' | 'reviews'

interface CitiesFilterProps {
  cities: City[]
  regions: { id: string; name: string }[]
}

/* ================================================================
   CITY CATEGORY MAPS (slug-based for reliable categorization)
   ================================================================ */

const TRENDING_SLUGS = ['marrakech', 'chefchaouen', 'fes', 'essaouira']

const IMPERIAL_SLUGS = ['marrakech', 'fes', 'rabat', 'meknes']

const COASTAL_SLUGS = [
  'essaouira', 'agadir', 'tangier', 'asilah', 'dakhla',
  'casablanca', 'taghazout', 'el-jadida', 'safi', 'sidi-ifni',
  'oualidia', 'al-hoceima', 'larache', 'kenitra', 'mohammedia',
  'fnideq', 'mdiq',
]

const MOUNTAIN_DESERT_SLUGS = [
  'chefchaouen', 'ouarzazate', 'merzouga', 'ifrane',
  'tinghir', 'imlil', 'azrou', 'midelt', 'zagora',
  'taroudant', 'moulay-idriss',
]

const HIDDEN_GEM_SLUGS = [
  'tetouan', 'el-jadida', 'moulay-idriss', 'sidi-ifni',
  'oualidia', 'tiznit', 'azrou', 'larache', 'taroudant',
  'midelt', 'khouribga', 'settat',
]

/* ================================================================
   VISITOR COUNT MAP (simulated metrics for trending display)
   ================================================================ */

const VISITOR_COUNTS: Record<string, string> = {
  marrakech: '2.4M',
  chefchaouen: '1.1M',
  fes: '980K',
  essaouira: '720K',
}

/* ================================================================
   TAB CONFIGURATION
   ================================================================ */

const categoryTabs: { value: CategoryTab; label: string; icon: React.ReactNode }[] = [
  { value: 'all', label: 'All Cities', icon: <LayoutGrid className="w-4 h-4" /> },
  { value: 'imperial', label: 'Imperial Cities', icon: <Crown className="w-4 h-4" /> },
  { value: 'coastal', label: 'Coastal', icon: <Waves className="w-4 h-4" /> },
  { value: 'mountain', label: 'Mountain & Desert', icon: <Mountain className="w-4 h-4" /> },
  { value: 'hidden', label: 'Hidden Gems', icon: <Gem className="w-4 h-4" /> },
]

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'az', label: 'A - Z' },
  { value: 'attractions', label: 'Most Attractions' },
  { value: 'reviews', label: 'Most Reviewed' },
]

/* ================================================================
   HELPER: get category badge for a city
   ================================================================ */

function getCategoryBadge(city: City): { label: string; icon: React.ReactNode; className: string } | null {
  if (city.isImperialCity) {
    return {
      label: 'Imperial',
      icon: <Crown className="w-3 h-3" />,
      className: 'bg-[var(--color-accent)]/90 text-white',
    }
  }
  if (city.isCoastal) {
    return {
      label: 'Coastal',
      icon: <Waves className="w-3 h-3" />,
      className: 'bg-[var(--color-secondary)]/90 text-white',
    }
  }
  if (city.tags.some((t) => t.includes('desert') || t.includes('sahara'))) {
    return {
      label: 'Desert',
      icon: <SunDim className="w-3 h-3" />,
      className: 'bg-amber-600/90 text-white',
    }
  }
  if (city.tags.some((t) => t.includes('mountain') || t.includes('hiking') || t.includes('trekking')) || city.elevation > 800) {
    return {
      label: 'Mountain',
      icon: <Mountain className="w-3 h-3" />,
      className: 'bg-[var(--color-green)]/90 text-white',
    }
  }
  return null
}

/* ================================================================
   SUB-COMPONENTS
   ================================================================ */

/* ---------- Trending Hero Card (large) ---------- */
function TrendingCardLarge({ city, visitors }: { city: City; visitors: string }) {
  return (
    <Link href={`/cities/${city.slug}`} className="group relative block h-full min-h-[340px] md:min-h-[420px] rounded-2xl overflow-hidden">
      <img
        src={city.heroImage}
        alt={`${city.name}, Morocco`}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Trending Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-900)] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
        <TrendingUp className="w-3.5 h-3.5" />
        Trending
      </div>

      {/* Visitor Count */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-dark text-white text-xs font-medium">
        <Users className="w-3.5 h-3.5" />
        {visitors} visitors/yr
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="tag tag-secondary text-xs backdrop-blur-sm bg-white/15 text-white border-white/20">
            <MapPin className="w-3 h-3 mr-1" />
            {city.region}
          </span>
          {city.isImperialCity && (
            <span className="tag text-xs backdrop-blur-sm bg-[var(--color-accent)]/80 text-white border-none">
              <Crown className="w-3 h-3 mr-1" />
              Imperial
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
          {city.name}
        </h3>

        <div className="flex items-center gap-3 text-white/90 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            <span className="font-semibold">{city.rating.toFixed(1)}</span>
          </div>
          <span className="w-px h-3.5 bg-white/40" />
          <span>{city.reviewCount.toLocaleString()} reviews</span>
          <span className="w-px h-3.5 bg-white/40" />
          <span>{city.attractionCount} attractions</span>
        </div>

        <p className="text-sm text-white/70 line-clamp-2 max-w-lg mb-4 hidden md:block">
          {truncate(city.description, 140)}
        </p>

        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/15 group-hover:bg-white/20 transition-all">
          Explore {city.name}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

/* ---------- Trending Hero Card (small) ---------- */
function TrendingCardSmall({ city, visitors }: { city: City; visitors: string }) {
  return (
    <Link href={`/cities/${city.slug}`} className="group relative block h-full min-h-[200px] rounded-2xl overflow-hidden">
      <img
        src={city.heroImage}
        alt={`${city.name}, Morocco`}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Trending Badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-900)] text-[10px] font-bold uppercase tracking-wider">
        <TrendingUp className="w-3 h-3" />
        Trending
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1">
          {city.name}
        </h3>
        <div className="flex items-center gap-2 text-white/80 text-xs">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            <span className="font-semibold">{city.rating.toFixed(1)}</span>
          </div>
          <span className="w-px h-2.5 bg-white/40" />
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{visitors}/yr</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

/* ---------- Imperial City Card (horizontal premium) ---------- */
function ImperialCityCard({ city, index }: { city: City; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/cities/${city.slug}`}
        className="group flex flex-col sm:flex-row card-premium overflow-hidden h-full"
      >
        {/* Image */}
        <div className="relative w-full sm:w-64 md:w-72 h-52 sm:h-auto shrink-0 overflow-hidden">
          <img
            src={city.heroImage}
            alt={`${city.name}, Morocco`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 sm:bg-gradient-to-l sm:from-transparent sm:to-transparent" />

          {/* Imperial Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/90 text-[var(--color-primary-900)] text-xs font-bold backdrop-blur-sm">
            <Crown className="w-3.5 h-3.5" />
            Imperial City
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag tag-secondary text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              {city.region}
            </span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
            {city.name}
          </h3>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
            {truncate(city.description, 160)}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
              <span className="text-sm font-semibold text-[var(--text-primary)]">{city.rating.toFixed(1)}</span>
              <span className="text-xs text-[var(--text-muted)]">({city.reviewCount.toLocaleString()})</span>
            </div>
            <span className="w-px h-4 bg-[var(--border)]" />
            <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <Landmark className="w-3.5 h-3.5" />
              <span>{city.attractionCount} attractions</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {city.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-0.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] font-medium uppercase tracking-wider"
              >
                {tag.replace(/-/g, ' ')}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] group-hover:gap-3 transition-all">
            Explore {city.name}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

/* ---------- Standard City Card (grid) ---------- */
function CityCard({ city, index }: { city: City; index: number }) {
  const badge = getCategoryBadge(city)
  const fullStars = Math.floor(city.rating)
  const hasHalf = city.rating % 1 >= 0.5

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
      layout
    >
      <Link
        href={`/cities/${city.slug}`}
        className="group block card-moroccan overflow-hidden h-full"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={city.heroImage}
            alt={`${city.name}, Morocco`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Region Badge */}
          <span className="absolute top-3 left-3 tag tag-secondary text-xs backdrop-blur-sm bg-[var(--color-secondary)]/80 text-white border-none">
            <MapPin className="w-3 h-3 mr-1" />
            {city.region}
          </span>

          {/* Category Badge */}
          {badge && (
            <span className={cn('absolute top-3 right-3 tag text-xs backdrop-blur-sm border-none', badge.className)}>
              {badge.icon}
              <span className="ml-1">{badge.label}</span>
            </span>
          )}

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-display font-bold text-white mb-1">{city.name}</h3>
            <div className="flex items-center gap-3 text-white/90 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                <span className="font-semibold">{city.rating.toFixed(1)}</span>
              </div>
              <span className="w-px h-3 bg-white/40" />
              <span>{city.reviewCount.toLocaleString()} reviews</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
            {truncate(city.description, 120)}
          </p>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              <Landmark className="w-3.5 h-3.5" />
              <span>{city.attractionCount} attractions</span>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3 h-3',
                    i < fullStars
                      ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                      : i === fullStars && hasHalf
                        ? 'fill-[var(--color-accent)]/50 text-[var(--color-accent)]'
                        : 'text-[var(--border)]'
                  )}
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-light)]">
            {city.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] font-medium uppercase tracking-wider"
              >
                {tag.replace(/-/g, ' ')}
              </span>
            ))}
            {city.tags.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] font-medium">
                +{city.tags.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="mt-3 pt-3 border-t border-[var(--border-light)]">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-secondary)] group-hover:gap-2.5 transition-all">
              Explore
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ---------- Section Header ---------- */
function SectionHeader({
  title,
  subtitle,
  icon,
  count,
}: {
  title: string
  subtitle?: string
  icon: React.ReactNode
  count?: number
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--surface-muted)] text-[var(--color-secondary)]">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              {title}
            </h2>
            {count !== undefined && (
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                {count} {count === 1 ? 'city' : 'cities'}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-[var(--text-muted)] mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="section-divider-moroccan mt-4" />
    </div>
  )
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function CitiesFilter({ cities, regions }: CitiesFilterProps) {
  const [search, setSearch] = useState('')
  const [regionFilter, setRegionFilter] = useState<string>('all')
  const [activeTab, setActiveTab] = useState<CategoryTab>('all')
  const [sort, setSort] = useState<SortOption>('popular')
  const [showFilters, setShowFilters] = useState(false)

  /* Sticky tab bar */
  const tabBarRef = useRef<HTMLDivElement>(null)
  const [isTabSticky, setIsTabSticky] = useState(false)

  useEffect(() => {
    const el = tabBarRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsTabSticky(!entry.isIntersecting),
      { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* Active tab indicator refs */
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const activeButton = tabRefs.current[activeTab]
    if (activeButton) {
      const parent = activeButton.parentElement
      if (parent) {
        setIndicatorStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth,
        })
      }
    }
  }, [activeTab])

  /* ---- City categorization ---- */
  const trendingCities = useMemo(
    () => TRENDING_SLUGS.map((slug) => cities.find((c) => c.slug === slug)).filter(Boolean) as City[],
    [cities]
  )

  const imperialCities = useMemo(
    () => IMPERIAL_SLUGS.map((slug) => cities.find((c) => c.slug === slug)).filter(Boolean) as City[],
    [cities]
  )

  const coastalCities = useMemo(
    () => cities.filter((c) => COASTAL_SLUGS.includes(c.slug)).sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount),
    [cities]
  )

  const mountainDesertCities = useMemo(
    () => cities.filter((c) => MOUNTAIN_DESERT_SLUGS.includes(c.slug)).sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount),
    [cities]
  )

  const hiddenGemCities = useMemo(
    () => cities.filter((c) => HIDDEN_GEM_SLUGS.includes(c.slug)).sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount),
    [cities]
  )

  /* ---- Search filtering (applies across all views) ---- */
  const searchFilter = useCallback(
    (cityList: City[]) => {
      let result = [...cityList]

      if (search.trim()) {
        const q = search.toLowerCase()
        result = result.filter(
          (c) =>
            c.name.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q) ||
            c.tags.some((t) => t.toLowerCase().includes(q)) ||
            c.region.toLowerCase().includes(q)
        )
      }

      if (regionFilter !== 'all') {
        result = result.filter((c) => c.regionId === regionFilter)
      }

      switch (sort) {
        case 'popular':
          result.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
          break
        case 'az':
          result.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'attractions':
          result.sort((a, b) => b.attractionCount - a.attractionCount)
          break
        case 'reviews':
          result.sort((a, b) => b.reviewCount - a.reviewCount)
          break
      }

      return result
    },
    [search, regionFilter, sort]
  )

  /* ---- Compute filtered lists ---- */
  const filteredImperial = useMemo(() => searchFilter(imperialCities), [searchFilter, imperialCities])
  const filteredCoastal = useMemo(() => searchFilter(coastalCities), [searchFilter, coastalCities])
  const filteredMountainDesert = useMemo(() => searchFilter(mountainDesertCities), [searchFilter, mountainDesertCities])
  const filteredHidden = useMemo(() => searchFilter(hiddenGemCities), [searchFilter, hiddenGemCities])

  const totalVisible = useMemo(() => {
    switch (activeTab) {
      case 'imperial':
        return filteredImperial.length
      case 'coastal':
        return filteredCoastal.length
      case 'mountain':
        return filteredMountainDesert.length
      case 'hidden':
        return filteredHidden.length
      case 'all':
      default: {
        const allSlugs = new Set<string>()
        ;[...filteredImperial, ...filteredCoastal, ...filteredMountainDesert, ...filteredHidden].forEach((c) =>
          allSlugs.add(c.slug)
        )
        // Also include trending if they pass search
        searchFilter(trendingCities).forEach((c) => allSlugs.add(c.slug))
        // For "all" tab, include any city that passes search but isn't in any category
        const searchedAll = searchFilter(cities)
        return searchedAll.length
      }
    }
  }, [activeTab, filteredImperial, filteredCoastal, filteredMountainDesert, filteredHidden, searchFilter, trendingCities, cities])

  const clearFilters = useCallback(() => {
    setSearch('')
    setRegionFilter('all')
    setSort('popular')
  }, [])

  const hasActiveFilters = search || regionFilter !== 'all'

  const isSearchActive = search.trim() !== '' || regionFilter !== 'all'

  /* When user is actively searching, show a flat filtered grid instead of sections */
  const flatSearchResults = useMemo(() => {
    if (!isSearchActive) return []
    return searchFilter(cities)
  }, [isSearchActive, searchFilter, cities])

  return (
    <div>
      {/* ================================================================
          SEARCH + FILTER BAR
          ================================================================ */}
      <div className="glass rounded-xl p-4 md:p-6 mb-8 shadow-lg">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search cities by name, region, or tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm font-medium hover:border-[var(--color-primary)] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            )}
          </button>

          {/* Region Dropdown */}
          <div className={cn('relative', !showFilters && 'hidden md:block')}>
            <div className="relative">
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="appearance-none w-full md:w-56 pl-3 pr-8 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all cursor-pointer"
              >
                <option value="all">All Regions</option>
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className={cn('relative', !showFilters && 'hidden md:block')}>
            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="appearance-none w-full md:w-48 pl-9 pr-8 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Count + Clear */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text-primary)]">{totalVisible}</span>
            {totalVisible === 1 ? ' city' : ' cities'} found
            {hasActiveFilters && (
              <span className="ml-1">
                out of {cities.length} total
              </span>
            )}
          </p>
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <Eye className="w-3.5 h-3.5" />
              <span>
                Sorted by{' '}
                <span className="font-medium text-[var(--text-secondary)]">
                  {sortOptions.find((o) => o.value === sort)?.label}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          CATEGORY TABS (Sticky)
          ================================================================ */}
      <div ref={tabBarRef} className="h-px" />
      <div
        className={cn(
          'sticky top-0 z-[var(--z-sticky)] mb-10 transition-all duration-300',
          isTabSticky && 'py-3'
        )}
      >
        <div
          className={cn(
            'relative rounded-xl transition-all duration-300',
            isTabSticky
              ? 'glass shadow-lg p-2'
              : 'bg-[var(--surface)] border border-[var(--border-light)] p-2'
          )}
        >
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide relative">
            {/* Animated underline indicator */}
            <motion.div
              className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)]"
              layoutId="tab-indicator"
              animate={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />

            {categoryTabs.map((tab) => (
              <button
                key={tab.value}
                ref={(el) => {
                  tabRefs.current[tab.value] = el
                }}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  'relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all',
                  activeTab === tab.value
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-muted)]'
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================
          CONTENT SECTIONS
          ================================================================ */}

      {/* If searching, show flat results */}
      {isSearchActive ? (
        <AnimatePresence mode="popLayout">
          {flatSearchResults.length > 0 ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {flatSearchResults.map((city, index) => (
                <CityCard key={city.id} city={city} index={index} />
              ))}
            </motion.div>
          ) : (
            <EmptyState onReset={clearFilters} />
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* ========================
                TRENDING SECTION
                ======================== */}
            {activeTab === 'all' && (
              <section className="mb-16">
                <SectionHeader
                  title="Trending Destinations"
                  subtitle="Most searched cities this season"
                  icon={<TrendingUp className="w-5 h-5" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Two large cards */}
                  <div className="grid grid-rows-1 gap-4">
                    {trendingCities[0] && (
                      <TrendingCardLarge
                        city={trendingCities[0]}
                        visitors={VISITOR_COUNTS[trendingCities[0].slug] || '500K'}
                      />
                    )}
                  </div>
                  <div className="grid grid-rows-2 gap-4">
                    {/* One medium card */}
                    {trendingCities[1] && (
                      <TrendingCardSmall
                        city={trendingCities[1]}
                        visitors={VISITOR_COUNTS[trendingCities[1].slug] || '500K'}
                      />
                    )}
                    {/* Two small cards side by side */}
                    <div className="grid grid-cols-2 gap-4">
                      {trendingCities[2] && (
                        <TrendingCardSmall
                          city={trendingCities[2]}
                          visitors={VISITOR_COUNTS[trendingCities[2].slug] || '500K'}
                        />
                      )}
                      {trendingCities[3] && (
                        <TrendingCardSmall
                          city={trendingCities[3]}
                          visitors={VISITOR_COUNTS[trendingCities[3].slug] || '500K'}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ========================
                IMPERIAL CITIES SECTION
                ======================== */}
            {(activeTab === 'all' || activeTab === 'imperial') && filteredImperial.length > 0 && (
              <section className="mb-16">
                <SectionHeader
                  title="Imperial Cities"
                  subtitle="The four historic capitals of the Moroccan kingdom"
                  icon={<Crown className="w-5 h-5" />}
                  count={filteredImperial.length}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredImperial.map((city, index) => (
                    <ImperialCityCard key={city.id} city={city} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* ========================
                COASTAL CITIES SECTION
                ======================== */}
            {(activeTab === 'all' || activeTab === 'coastal') && filteredCoastal.length > 0 && (
              <section className="mb-16">
                <SectionHeader
                  title="Coastal Escapes"
                  subtitle="Sun-kissed beaches, Atlantic winds, and Mediterranean charm"
                  icon={<Waves className="w-5 h-5" />}
                  count={filteredCoastal.length}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredCoastal.map((city, index) => (
                    <CityCard key={city.id} city={city} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* ========================
                MOUNTAIN & DESERT SECTION
                ======================== */}
            {(activeTab === 'all' || activeTab === 'mountain') && filteredMountainDesert.length > 0 && (
              <section className="mb-16">
                <SectionHeader
                  title="Mountain & Desert"
                  subtitle="From the snow-capped Atlas to the golden Sahara"
                  icon={<Mountain className="w-5 h-5" />}
                  count={filteredMountainDesert.length}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredMountainDesert.map((city, index) => (
                    <CityCard key={city.id} city={city} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* ========================
                HIDDEN GEMS SECTION
                ======================== */}
            {(activeTab === 'all' || activeTab === 'hidden') && filteredHidden.length > 0 && (
              <section className="mb-16">
                <SectionHeader
                  title="Hidden Gems"
                  subtitle="Off the beaten path -- authentic Morocco awaits"
                  icon={<Gem className="w-5 h-5" />}
                  count={filteredHidden.length}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredHidden.map((city, index) => (
                    <CityCard key={city.id} city={city} index={index} />
                  ))}
                </div>
              </section>
            )}

            {/* ========================
                EMPTY STATE (for filtered tabs)
                ======================== */}
            {activeTab !== 'all' && (
              (() => {
                const current = activeTab === 'imperial' ? filteredImperial
                  : activeTab === 'coastal' ? filteredCoastal
                  : activeTab === 'mountain' ? filteredMountainDesert
                  : filteredHidden
                return current.length === 0 ? <EmptyState onReset={clearFilters} /> : null
              })()
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

/* ================================================================
   EMPTY STATE COMPONENT
   ================================================================ */

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20 text-center"
    >
      <div className="mx-auto w-16 h-16 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
        <Search className="w-6 h-6 text-[var(--text-muted)]" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-[var(--text-primary)] mb-2">
        No cities found
      </h3>
      <p className="text-sm text-[var(--text-muted)] mb-4 max-w-md mx-auto">
        Try adjusting your filters or search terms to discover Moroccan cities.
      </p>
      <button
        onClick={onReset}
        className="px-5 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
      >
        Reset Filters
      </button>
    </motion.div>
  )
}
