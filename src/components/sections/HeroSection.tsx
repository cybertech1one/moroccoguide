'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import {
  Search,
  ChevronDown,
  MapPin,
  Compass,
  UtensilsCrossed,
  Sun,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getSuggestions } from '@/lib/search-index';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ARABIC_WORDS = ['مرحبا', 'المغرب', 'سوق', 'رياض', 'صحراء'];

const EXPLORE_PILLS = [
  { label: 'Cities', icon: MapPin, href: '/cities' },
  { label: 'Tours', icon: Compass, href: '/tours' },
  { label: 'Food', icon: UtensilsCrossed, href: '/food' },
  { label: 'Desert', icon: Sun, href: '/desert' },
  { label: 'Culture', icon: Palette, href: '/culture' },
];

const STATS = [
  { value: 15, suffix: '+', label: 'Cities' },
  { value: 200, suffix: '+', label: 'Attractions' },
  { value: 50, suffix: '+', label: 'Tours' },
  { value: 4.9, suffix: '', label: 'Rating' },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                   */
/* ------------------------------------------------------------------ */

function AnimatedStat({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();
    const isDecimal = value % 1 !== 0;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplayed(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
      <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {displayed}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/50">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HeroSection                                                        */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const router = useRouter();

  /* Search state */
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Parallax */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 250]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  /* Stats counter in-view */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Live suggestions */
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      return;
    }
    const results = getSuggestions(trimmed);
    setSuggestions(results.slice(0, 5));
    setActiveIndex(-1);
  }, [query]);

  /* Close dropdown on outside click */
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  /* Search handlers */
  const submitSearch = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    setShowDropdown(false);
  }, [query, router]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showDropdown || suggestions.length === 0) {
        if (e.key === 'Enter') submitSearch();
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (activeIndex >= 0) {
            const selected = suggestions[activeIndex];
            setQuery(selected);
            router.push(`/search?q=${encodeURIComponent(selected)}`);
            setShowDropdown(false);
          } else {
            submitSearch();
          }
          break;
        case 'Escape':
          setShowDropdown(false);
          setActiveIndex(-1);
          break;
      }
    },
    [showDropdown, suggestions, activeIndex, submitSearch, router]
  );

  return (
    <section
      ref={heroRef}
      className="relative flex h-[calc(100vh-var(--header-height,80px))] min-h-[600px] flex-col overflow-hidden"
      aria-label="Hero - Discover Morocco"
    >
      {/* ── Background Image with Parallax ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/images/hero-morocco.png"
          alt="Sweeping view of Morocco at golden hour"
          className="h-[120%] w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* ── Premium Dark Gradient Overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(26,24,20,0.35) 0%,
            rgba(26,24,20,0.15) 30%,
            rgba(26,24,20,0.40) 60%,
            rgba(26,24,20,0.88) 100%
          )`,
        }}
      />

      {/* ── Decorative Arabic Calligraphy ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-end overflow-hidden pr-[5%]"
        aria-hidden="true"
      >
        <span
          className="arabic-float font-[family-name:var(--font-arabic)] text-[12rem] leading-none text-white/[0.04] sm:text-[16rem] lg:text-[22rem]"
          dir="rtl"
          lang="ar"
        >
          {ARABIC_WORDS[0]}
        </span>
      </div>
      <div
        className="pointer-events-none absolute bottom-24 left-[3%] z-[2] overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="arabic-float-reverse font-[family-name:var(--font-arabic)] text-[6rem] leading-none text-white/[0.03] sm:text-[8rem]"
          dir="rtl"
          lang="ar"
        >
          {ARABIC_WORDS[3]}
        </span>
      </div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-[5] flex flex-1 flex-col items-center justify-center px-5 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]"
          >
            The Kingdom of Light
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Discover{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-amber-300 bg-clip-text text-transparent">
                Morocco
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-[var(--color-accent)]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.4, duration: 0.9, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl font-heading text-base leading-relaxed text-white/60 sm:text-lg"
          >
            From the rose-lit riads of Marrakech to starlit nights over Saharan
            dunes, 50,000+ travelers have trusted us to craft their perfect
            Moroccan story. Yours is waiting.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            variants={fadeUp}
            ref={searchRef}
            className="relative mx-auto mt-10 w-full max-w-xl"
          >
            <div className="flex items-center rounded-full border border-white/15 bg-white/[0.07] shadow-2xl backdrop-blur-xl transition-colors focus-within:border-white/30 focus-within:bg-white/[0.10]">
              <Search className="ml-5 h-5 w-5 shrink-0 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onKeyDown={handleKeyDown}
                placeholder="Search destinations, tours, experiences..."
                aria-label="Search Morocco"
                aria-expanded={showDropdown && suggestions.length > 0}
                aria-haspopup="listbox"
                autoComplete="off"
                role="combobox"
                className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/35 sm:text-base"
              />
              <button
                onClick={submitSearch}
                className="mr-1.5 flex h-9 items-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-[var(--text-primary,#1A1814)] transition-transform hover:scale-[1.04] active:scale-[0.97]"
                aria-label="Search"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <ul
                role="listbox"
                className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#1A1814]/95 shadow-2xl backdrop-blur-2xl"
              >
                {suggestions.map((item, i) => (
                  <li
                    key={item}
                    role="option"
                    aria-selected={i === activeIndex}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 px-5 py-3 text-sm transition-colors',
                      i === activeIndex
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                    )}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => {
                      setQuery(item);
                      router.push(`/search?q=${encodeURIComponent(item)}`);
                      setShowDropdown(false);
                    }}
                  >
                    <Search className="h-3.5 w-3.5 shrink-0 text-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Quick Explore Pills */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {EXPLORE_PILLS.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 sm:bottom-24"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>

      {/* ── Stats Bar ── */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] bg-[#1A1814]/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-4xl items-center justify-center divide-x divide-white/[0.08] py-4 sm:py-5">
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              inView={statsInView}
            />
          ))}
        </div>
      </div>

      {/* ── CSS for Arabic calligraphy float ── */}
      <style jsx>{`
        @keyframes arabicFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-12px) translateX(6px);
          }
          50% {
            transform: translateY(-6px) translateX(-4px);
          }
          75% {
            transform: translateY(-16px) translateX(3px);
          }
        }
        @keyframes arabicFloatReverse {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(8px) translateX(-5px);
          }
          50% {
            transform: translateY(4px) translateX(6px);
          }
          75% {
            transform: translateY(10px) translateX(-3px);
          }
        }
        .arabic-float {
          animation: arabicFloat 14s ease-in-out infinite;
        }
        .arabic-float-reverse {
          animation: arabicFloatReverse 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
