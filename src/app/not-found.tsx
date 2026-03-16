import Link from 'next/link';
import {
  Home,
  Search,
  MapPin,
  Compass,
  Utensils,
  Building2,
  Mountain,
  Camera,
  BookOpen,
  Landmark,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   404 Not Found — "Lost in the Medina?"
   Premium Moroccan-themed 404 page with search, quick-links,
   and an illustrated keyhole-arch doorway SVG.
   ═══════════════════════════════════════════════════════════════ */

const popularLinks = [
  { href: '/cities', label: 'Cities', icon: Building2 },
  { href: '/attractions', label: 'Attractions', icon: Landmark },
  { href: '/food', label: 'Food & Dining', icon: Utensils },
  { href: '/tours', label: 'Tours', icon: Compass },
  { href: '/mountains', label: 'Mountains', icon: Mountain },
  { href: '/photography', label: 'Photography', icon: Camera },
  { href: '/itineraries', label: 'Itineraries', icon: BookOpen },
  { href: '/riads', label: 'Riads', icon: Home },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 md:py-24 moroccan-pattern">
      <div className="max-w-3xl mx-auto text-center">
        {/* ── Moroccan Arch Doorway Illustration ── */}
        <div className="mx-auto mb-10 w-52 h-64 relative" aria-hidden="true">
          <svg
            viewBox="0 0 220 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-lg"
          >
            {/* Background glow */}
            <defs>
              <radialGradient id="arch-glow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="door-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary-50)" />
                <stop offset="100%" stopColor="var(--color-sand-200)" />
              </linearGradient>
            </defs>
            <ellipse cx="110" cy="130" rx="100" ry="120" fill="url(#arch-glow)" />

            {/* Outer arch frame */}
            <path
              d="M30 275 V110 A80 80 0 0 1 190 110 V275"
              stroke="var(--color-primary)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Inner arch with fill */}
            <path
              d="M52 275 V120 A58 58 0 0 1 168 120 V275"
              stroke="var(--color-accent)"
              strokeWidth="2"
              fill="url(#door-gradient)"
              strokeLinecap="round"
            />

            {/* Keyhole arch (Moroccan style) at top */}
            <path
              d="M80 275 V150 A30 30 0 0 1 140 150 V275"
              stroke="var(--color-secondary)"
              strokeWidth="1.5"
              fill="var(--color-primary-50)"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Zellige pattern lines inside arch */}
            <line x1="65" y1="145" x2="155" y2="145" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.2" />
            <line x1="58" y1="170" x2="162" y2="170" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.2" />
            <line x1="55" y1="195" x2="165" y2="195" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.2" />
            <line x1="53" y1="220" x2="167" y2="220" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.15" />
            <line x1="52" y1="245" x2="168" y2="245" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.1" />

            {/* Eight-pointed star (khatam) motif at arch peak */}
            <g transform="translate(110, 98)" opacity="0.8">
              <path
                d="M0 -12 L3.5 -3.5 L12 0 L3.5 3.5 L0 12 L-3.5 3.5 L-12 0 L-3.5 -3.5 Z"
                fill="var(--color-accent)"
              />
              <path
                d="M0 -8 L8 0 L0 8 L-8 0 Z"
                fill="none"
                stroke="var(--color-accent-dark)"
                strokeWidth="0.8"
              />
            </g>

            {/* Small diamond motifs along the arch */}
            <rect x="63" y="133" width="4" height="4" rx="0.5" transform="rotate(45, 65, 135)" fill="var(--color-accent)" opacity="0.4" />
            <rect x="151" y="133" width="4" height="4" rx="0.5" transform="rotate(45, 153, 135)" fill="var(--color-accent)" opacity="0.4" />

            {/* Door handle circles */}
            <circle cx="100" cy="215" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <circle cx="120" cy="215" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <circle cx="100" cy="215" r="1.5" fill="var(--color-accent)" />
            <circle cx="120" cy="215" r="1.5" fill="var(--color-accent)" />

            {/* "404" watermark in doorway */}
            <text
              x="110"
              y="188"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="36"
              fontWeight="700"
              fill="var(--color-primary)"
              opacity="0.07"
            >
              404
            </text>

            {/* Decorative base line */}
            <line x1="20" y1="275" x2="200" y2="275" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── 404 Indicator ── */}
        <p className="text-xs font-heading font-semibold tracking-[0.25em] uppercase text-[var(--color-accent)] mb-3">
          Error 404
        </p>

        {/* ── Heading ── */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
          Lost in the Medina?
        </h1>

        {/* ── Description ── */}
        <p className="text-lg text-[var(--text-secondary)] mb-2 max-w-lg mx-auto">
          This page seems to have wandered off into the souks.
        </p>
        <p className="text-sm text-[var(--text-muted)] mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been moved, renamed, or may
          never have existed. Let us help you find your way.
        </p>

        {/* ── Decorative Divider ── */}
        <div className="arabesque-divider mb-8 max-w-xs mx-auto">
          <Compass
            size={16}
            className="text-[var(--color-accent)] shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* ── Search Bar ── */}
        <div className="max-w-md mx-auto mb-10">
          <form action="/search" method="GET" className="relative group">
            <label htmlFor="notfound-search" className="sr-only">
              Search CityGuide
            </label>
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--color-primary)] transition-colors"
              aria-hidden="true"
            />
            <input
              id="notfound-search"
              type="search"
              name="q"
              placeholder="Search destinations, tours, guides..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] font-body text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent shadow-sm hover:shadow-md focus:shadow-md"
            />
          </form>
        </div>

        {/* ── Primary Actions ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[var(--color-primary)] text-white font-heading font-semibold text-sm transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          >
            <Home size={18} aria-hidden="true" />
            Back to Home
          </Link>

          <Link
            href="/cities"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] font-heading font-semibold text-sm transition-all hover:border-[var(--color-primary-200)] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          >
            <MapPin size={18} aria-hidden="true" />
            Explore Cities
          </Link>
        </div>

        {/* ── Quick Links Grid ── */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-heading font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-4">
            Popular Destinations
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {popularLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border-light)] text-[var(--text-secondary)] text-sm font-heading font-medium transition-all hover:border-[var(--color-accent-200)] hover:text-[var(--color-primary)] hover:shadow-sm hover:bg-[var(--color-accent-50)]"
                >
                  <Icon size={15} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
