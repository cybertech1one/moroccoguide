'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Search,
  X,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  Menu,
  MapPin,
  Compass,
  UtensilsCrossed,
  Bed,
  Camera,
  Users,
  Lightbulb,
  Wrench,
  Mountain,
  Building2,
  Waves,
  Star,
  TrendingUp,
  Sunrise,
  Tent,
  Bike,
  Ship,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';

/* ─── Navigation Data ─── */

type NavSubItem = {
  label: string;
  href: string;
  description?: string;
};

type NavColumn = {
  title: string;
  items: NavSubItem[];
};

type NavFeatured = {
  title: string;
  href: string;
  image: string;
  tag?: string;
};

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  columns?: NavColumn[];
  featured?: NavFeatured[];
};

const navigationItems: NavItem[] = [
  {
    label: 'Destinations',
    href: '/cities',
    icon: MapPin,
    columns: [
      {
        title: 'Imperial Cities',
        items: [
          { label: 'Marrakech', href: '/marrakech', description: 'The Red City' },
          { label: 'Fes', href: '/fes-guide', description: 'Spiritual Capital' },
          { label: 'Rabat', href: '/cities/rabat', description: 'The Capital' },
          { label: 'Meknes', href: '/cities/meknes', description: 'Ismaili Capital' },
        ],
      },
      {
        title: 'Coastal',
        items: [
          { label: 'Essaouira', href: '/essaouira', description: 'Wind City' },
          { label: 'Agadir', href: '/agadir', description: 'Beach Resort' },
          { label: 'Tangier', href: '/tangier', description: 'Gateway to Africa' },
          { label: 'Asilah', href: '/cities/asilah', description: 'Art Town' },
        ],
      },
      {
        title: 'Desert & Mountains',
        items: [
          { label: 'Chefchaouen', href: '/chefchaouen', description: 'Blue Pearl' },
          { label: 'Sahara Desert', href: '/sahara', description: 'Dunes & Stars' },
          { label: 'Atlas Mountains', href: '/atlas-mountains', description: 'Trekking & Villages' },
          { label: 'Ouarzazate', href: '/ouarzazate', description: 'Hollywood of Africa' },
        ],
      },
      {
        title: 'Hidden Gems',
        items: [
          { label: 'Paradise Valley', href: '/paradise-valley', description: 'Oasis near Agadir' },
          { label: 'Todra Gorge', href: '/todra-gorge', description: 'Canyon walls' },
          { label: 'Tetouan', href: '/tetouan', description: 'White Dove' },
          { label: 'Draa Valley', href: '/draa-valley', description: 'Palm oasis route' },
        ],
      },
    ],
    featured: [
      {
        title: 'Marrakech: Complete City Guide',
        href: '/marrakech',
        image: '/images/hero-marrakech-koutoubia.webp',
        tag: 'Most Popular',
      },
      {
        title: 'Chefchaouen: The Blue Pearl',
        href: '/chefchaouen',
        image: '/images/hero-chefchaouen-drone.webp',
        tag: 'Trending',
      },
    ],
  },
  {
    label: 'Attractions',
    href: '/attractions',
    icon: Camera,
    columns: [
      {
        title: 'Historic Sites',
        items: [
          { label: 'Medinas & Souks', href: '/medina-guide' },
          { label: 'Palaces & Kasbahs', href: '/attractions/ait-ben-haddou' },
          { label: 'Architecture', href: '/architecture' },
          { label: 'UNESCO Sites', href: '/unesco' },
        ],
      },
      {
        title: 'Natural Wonders',
        items: [
          { label: 'Sahara Desert', href: '/desert' },
          { label: 'Atlas Mountains', href: '/mountains' },
          { label: 'Todra Gorge', href: '/attractions/todra-gorge' },
          { label: 'Ouzoud Falls', href: '/attractions/ouzoud-falls' },
        ],
      },
      {
        title: 'Cultural',
        items: [
          { label: 'Gardens', href: '/gardens' },
          { label: 'Hammams', href: '/hammam' },
          { label: 'Crafts & Artisans', href: '/crafts' },
          { label: 'Jewish Heritage', href: '/jewish-heritage' },
        ],
      },
    ],
    featured: [
      {
        title: 'Top Attractions in Morocco',
        href: '/attractions',
        image: '/images/hero-ait-benhaddou.webp',
        tag: 'Editor\'s Pick',
      },
    ],
  },
  {
    label: 'Tours',
    href: '/tours',
    icon: Compass,
    columns: [
      {
        title: 'Popular Tours',
        items: [
          { label: 'Desert Safari', href: '/tours/desert-safari' },
          { label: 'Imperial Cities Circuit', href: '/tours/imperial-cities' },
          { label: 'Atlas Trekking', href: '/tours/atlas-trekking' },
          { label: 'Coastal Road Trip', href: '/tours/coastal-road-trip' },
        ],
      },
      {
        title: 'Experiences',
        items: [
          { label: 'Cooking Classes', href: '/cooking-classes' },
          { label: 'Photography', href: '/photography' },
          { label: 'Filming Locations', href: '/filming-locations' },
          { label: 'Road Trips', href: '/road-trips' },
        ],
      },
    ],
    featured: [
      {
        title: '3-Day Sahara Desert Safari',
        href: '/tours/desert-safari',
        image: '/images/hero-camel-caravan.webp',
        tag: 'Best Seller',
      },
    ],
  },
  {
    label: 'Where to Stay',
    href: '/accommodations',
    icon: Bed,
    columns: [
      {
        title: 'Accommodation',
        items: [
          { label: 'Riad Guide', href: '/riad-guide' },
          { label: 'Hotels & Resorts', href: '/accommodations' },
          { label: 'Desert Camps', href: '/desert-adventures' },
          { label: 'All Accommodations', href: '/accommodations' },
        ],
      },
      {
        title: 'By City',
        items: [
          { label: 'Marrakech Riads', href: '/marrakech' },
          { label: 'Fes Riads', href: '/fes-guide' },
          { label: 'Essaouira Stays', href: '/essaouira' },
          { label: 'Chefchaouen', href: '/chefchaouen' },
        ],
      },
    ],
    featured: [
      {
        title: 'Best Riads in Morocco',
        href: '/accommodations',
        image: '/images/hero-riad-interior.webp',
        tag: 'Top Rated',
      },
    ],
  },
  {
    label: 'Food & Drink',
    href: '/food',
    icon: UtensilsCrossed,
    columns: [
      {
        title: 'Dining',
        items: [
          { label: 'Restaurants', href: '/restaurants' },
          { label: 'Cuisine Encyclopedia', href: '/cuisine' },
          { label: 'Cooking Classes', href: '/cooking-classes' },
          { label: 'All Food & Drink', href: '/food' },
        ],
      },
      {
        title: 'Discover',
        items: [
          { label: 'Moroccan Food Guide', href: '/moroccan-food-guide' },
          { label: 'Street Food', href: '/street-food' },
          { label: 'Moroccan Markets', href: '/moroccan-markets' },
          { label: 'Souks & Markets', href: '/souks' },
        ],
      },
    ],
    featured: [
      {
        title: 'Complete Guide to Moroccan Food',
        href: '/food',
        image: '/images/photo-tagine-closeup.webp',
        tag: 'Must Try',
      },
    ],
  },
  {
    label: 'Activities',
    href: '/activities',
    icon: Mountain,
    columns: [
      {
        title: 'Adventure',
        items: [
          { label: 'Desert Adventures', href: '/desert-adventures' },
          { label: 'Hot Air Balloon', href: '/hot-air-balloon' },
          { label: 'Paragliding', href: '/paragliding' },
          { label: 'Quad Biking', href: '/quad-biking' },
        ],
      },
      {
        title: 'Water & Outdoor',
        items: [
          { label: 'Surfing Taghazout', href: '/taghazout-surf' },
          { label: 'Kayaking', href: '/kayaking' },
          { label: 'Sandboarding', href: '/sandboarding' },
          { label: 'Trekking & Hiking', href: '/trekking' },
        ],
      },
      {
        title: 'Culture & Leisure',
        items: [
          { label: 'Moroccan Hammam', href: '/moroccan-hammam' },
          { label: 'Photography Guide', href: '/photography-guide' },
          { label: 'Moroccan Festivals', href: '/moroccan-festivals' },
          { label: 'Festivals & Events', href: '/festivals' },
        ],
      },
    ],
    featured: [
      {
        title: 'Sahara Desert: Ultimate Guide',
        href: '/desert',
        image: '/images/hero-sahara-sunrise.webp',
        tag: 'Top Adventure',
      },
    ],
  },
  {
    label: 'Plan',
    href: '/itineraries',
    icon: Users,
    columns: [
      {
        title: 'Itineraries',
        items: [
          { label: '7-Day Morocco', href: '/morocco-itinerary-7-days' },
          { label: '14-Day Morocco', href: '/morocco-itinerary-14-days' },
          { label: '3 Days in Marrakech', href: '/itineraries/3-day-marrakech' },
          { label: '10-Day Grand Tour', href: '/itineraries/10-day-grand-tour' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Public Transport', href: '/public-transport' },
          { label: 'Emergency Contacts', href: '/emergency' },
          { label: 'Learn Darija', href: '/darija' },
          { label: 'World Cup 2030', href: '/worldcup-2030' },
        ],
      },
    ],
  },
  {
    label: 'Travel Tips',
    href: '/tips',
    icon: Lightbulb,
    columns: [
      {
        title: 'Before You Go',
        items: [
          { label: 'First Time Guide', href: '/first-time' },
          { label: 'Visa & Entry', href: '/visa' },
          { label: 'Packing List', href: '/packing' },
          { label: 'Money & Currency', href: '/money' },
        ],
      },
      {
        title: 'On the Ground',
        items: [
          { label: 'Safety & Scams', href: '/scams' },
          { label: 'Culture & Etiquette', href: '/etiquette' },
          { label: 'Trains & Transport', href: '/trains' },
          { label: 'Weather & Climate', href: '/weather' },
        ],
      },
      {
        title: 'Travel Styles',
        items: [
          { label: 'Solo Travel', href: '/solo-travel' },
          { label: 'Women Travelers', href: '/women-travel' },
          { label: 'Family Travel', href: '/family-guide' },
          { label: 'Backpacking', href: '/backpacking' },
        ],
      },
    ],
  },
  {
    label: 'Tools',
    href: '/tools',
    icon: Wrench,
    columns: [
      {
        title: 'Calculators',
        items: [
          { label: 'Budget Calculator', href: '/tools/budget' },
          { label: 'Currency Converter', href: '/tools/currency' },
          { label: 'City Distances', href: '/tools/distances' },
          { label: 'Trip Planner', href: '/tools/planner' },
        ],
      },
      {
        title: 'Checklists & Guides',
        items: [
          { label: 'Packing Checklist', href: '/tools/checklist' },
          { label: 'Darija Phrasebook', href: '/tools/phrases' },
          { label: 'Interactive Map', href: '/tools/map' },
          { label: 'Weather Forecast', href: '/tools/weather' },
        ],
      },
    ],
  },
];

const currencies = [
  { code: 'MAD', symbol: '\u062F.\u0645.' },
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '\u20AC' },
  { code: 'GBP', symbol: '\u00A3' },
];

/* ─── Moroccan Star SVG ─── */

function MoroccanStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0l2.245 8.292L22.18 6.82l-5.472 6.292L22.18 17.18l-7.935-1.472L12 24l-2.245-8.292L1.82 17.18l5.472-6.068L1.82 6.82l7.935 1.472z" />
    </svg>
  );
}

/* ─── Mega Dropdown Component ─── */

function MegaDropdown({
  item,
  isOpen,
  onClose,
  onMouseEnter,
}: {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 4 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 right-0 top-full z-[var(--z-dropdown)]"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onClose}
        >
          {/* Invisible bridge to prevent hover gap */}
          <div className="h-3" />
          <div className="mx-auto max-w-7xl px-4">
            <div
              className="mega-dropdown-glass rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Subtle top accent line */}
              <div
                className="h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))',
                }}
              />
              <div className="p-8">
                <div className="flex gap-10">
                  {/* Columns */}
                  <div className="flex flex-1 gap-10">
                    {item.columns?.map((column) => (
                      <div key={column.title} className="min-w-[190px]">
                        <h3 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)] font-heading">
                          <span
                            className="inline-block h-[3px] w-5 rounded-full"
                            style={{
                              background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                            }}
                          />
                          {column.title}
                        </h3>
                        <ul className="space-y-0.5">
                          {column.items.map((subItem, idx) => (
                            <li key={`${column.title}-${subItem.label}-${idx}`}>
                              <Link
                                href={subItem.href}
                                className="group flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-[var(--color-primary-50)]"
                                onClick={onClose}
                              >
                                <div className="flex-1">
                                  <span className="text-[13px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                                    {subItem.label}
                                  </span>
                                  {subItem.description && (
                                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5 leading-relaxed">
                                      {subItem.description}
                                    </p>
                                  )}
                                </div>
                                <ArrowRight className="h-3.5 w-3.5 mt-0.5 text-[var(--text-muted)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured Cards */}
                  {item.featured && item.featured.length > 0 && (
                    <div className="flex gap-5 border-l border-[var(--border-light)] pl-10">
                      {item.featured.map((feat) => (
                        <Link
                          key={feat.href}
                          href={feat.href}
                          className="group relative w-56 flex-shrink-0 overflow-hidden rounded-xl"
                          onClick={onClose}
                        >
                          <div className="aspect-[16/10] overflow-hidden rounded-xl">
                            <img
                              src={feat.image}
                              alt={feat.title}
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                          {/* Premium gradient overlay */}
                          <div
                            className="absolute inset-0 rounded-xl"
                            style={{
                              background:
                                'linear-gradient(to top, rgba(15,11,7,0.85) 0%, rgba(15,11,7,0.3) 40%, rgba(193,68,14,0.1) 100%)',
                            }}
                          />
                          {feat.tag && (
                            <span
                              className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                              style={{
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                              }}
                            >
                              <Sparkles className="h-2.5 w-2.5" />
                              {feat.tag}
                            </span>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-sm font-bold text-white leading-snug drop-shadow-lg">
                              {feat.title}
                            </p>
                            <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-white/80 group-hover:text-white transition-colors">
                              Explore
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Link */}
                <div className="mt-6 border-t border-[var(--border-light)] pt-5">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                    onClick={onClose}
                  >
                    View all {item.label}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Search Overlay ─── */

function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const popularSearches = [
    'Marrakech riads',
    'Sahara desert tour',
    'Best restaurants Fes',
    'Chefchaouen hotels',
    'Atlas hiking',
    'Surf Essaouira',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[var(--z-modal)] bg-black/60 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-0 right-0 top-0 z-[var(--z-modal)] px-4 pt-4 sm:pt-20"
          >
            <div className="mx-auto max-w-2xl rounded-2xl bg-[var(--surface)] shadow-2xl overflow-hidden border border-[var(--border-light)]">
              {/* Top accent */}
              <div
                className="h-[2px]"
                style={{
                  background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-secondary))',
                }}
              />
              <div className="flex items-center gap-3 border-b border-[var(--border-light)] p-5">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--color-primary-50)]">
                  <Search className="h-5 w-5 text-[var(--color-primary)]" />
                </div>
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Search destinations, tours, restaurants..."
                  className="flex-1 bg-transparent text-lg text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none font-body"
                  aria-label="Search CityGuide"
                />
                <button
                  onClick={onClose}
                  className="rounded-xl p-2 text-[var(--text-muted)] hover:bg-[var(--surface-muted)] transition-colors"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-5">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-muted)] font-heading">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <Link
                      key={term}
                      href={`/search?q=${encodeURIComponent(term)}`}
                      className="tag tag-secondary hover:bg-[var(--color-secondary-100)] transition-all hover:scale-105"
                      onClick={onClose}
                    >
                      {term}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: MapPin, label: 'Destinations', href: '/cities' },
                    { icon: Compass, label: 'Tours', href: '/tours' },
                    { icon: Bed, label: 'Stays', href: '/accommodations' },
                  ].map((quick) => (
                    <Link
                      key={quick.label}
                      href={quick.href}
                      className="group flex items-center gap-2.5 rounded-xl border border-[var(--border-light)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] hover:border-[var(--color-primary-200)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-50)] transition-all"
                      onClick={onClose}
                    >
                      <quick.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      {quick.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Header Component ─── */

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  }, []);

  // Close currency dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setIsCurrencyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Lock body scroll when mobile nav or search is open
  useEffect(() => {
    if (isMobileOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen, isSearchOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed left-0 right-0 top-0 z-[var(--z-sticky)] transition-shadow duration-500',
          isScrolled ? 'shadow-xl' : ''
        )}
        role="banner"
      >
        {/* Top Bar - Premium gradient with contact info */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={false}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3D2B1F 0%, #4A3728 50%, #2E1F15 100%)',
              }}
            >
              <div className="container-morocco flex items-center justify-between py-2 text-xs">
                <div className="hidden items-center gap-5 sm:flex">
                  <a
                    href="tel:+212522000000"
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    aria-label="Call us"
                  >
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Phone className="h-2.5 w-2.5" />
                    </span>
                    <span className="font-medium">+212 522 000 000</span>
                  </a>
                  <span className="h-3 w-px bg-white/20" />
                  <a
                    href="mailto:hello@citytoursmorocco.com"
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    aria-label="Email us"
                  >
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Mail className="h-2.5 w-2.5" />
                    </span>
                    <span className="font-medium">hello@citytoursmorocco.com</span>
                  </a>
                </div>

                {/* Social icons */}
                <div className="hidden md:flex items-center gap-1 mr-4">
                  {['facebook', 'instagram', 'twitter'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com/cityguide`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-6 w-6 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
                      aria-label={social}
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                        {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />}
                        {social === 'twitter' && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />}
                      </svg>
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  {/* Currency Selector */}
                  <div className="relative" ref={currencyRef}>
                    <button
                      onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                      className="flex items-center gap-1.5 rounded-full px-3 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-all text-[11px] font-medium"
                      aria-label="Select currency"
                      aria-expanded={isCurrencyOpen}
                    >
                      <span>{selectedCurrency.symbol}</span>
                      <span>{selectedCurrency.code}</span>
                      <ChevronDown className={cn('h-3 w-3 transition-transform', isCurrencyOpen && 'rotate-180')} />
                    </button>
                    <AnimatePresence>
                      {isCurrencyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 4, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-full mt-2 w-32 rounded-xl bg-[var(--surface)] shadow-xl border border-[var(--border-light)] overflow-hidden z-50"
                        >
                          {currencies.map((c) => (
                            <button
                              key={c.code}
                              onClick={() => {
                                setSelectedCurrency(c);
                                setIsCurrencyOpen(false);
                              }}
                              className={cn(
                                'flex w-full items-center gap-2.5 px-4 py-2.5 text-xs text-[var(--text-primary)] hover:bg-[var(--surface-muted)] transition-colors',
                                c.code === selectedCurrency.code && 'bg-[var(--color-primary-50)] font-bold text-[var(--color-primary)]'
                              )}
                            >
                              <span className="w-5 text-center font-semibold">{c.symbol}</span>
                              <span>{c.code}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <span className="h-3 w-px bg-white/20" />

                  {/* Language */}
                  <button
                    className="flex items-center gap-1.5 rounded-full px-3 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-all text-[11px] font-medium"
                    aria-label="Select language"
                  >
                    <Globe className="h-3 w-3" />
                    <span>EN</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation Bar */}
        <motion.div
          style={{
            backgroundColor: '#FFFFFF',
            backdropFilter: isScrolled ? 'blur(24px) saturate(1.2)' : 'none',
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className={cn(
            'border-b transition-all duration-300',
            isScrolled ? 'border-[var(--border-light)]/50' : 'border-[var(--border-light)]'
          )}
        >
          <div className="container-morocco">
            <div
              className={cn(
                'flex items-center justify-between transition-all duration-400',
                isScrolled ? 'h-16' : 'h-[72px]'
              )}
            >
              {/* Logo - Premium text-based with Moroccan star */}
              <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0" aria-label="CityGuide home">
                <div className="relative">
                  <div className="flex items-center">
                    {/* Icon mark */}
                    <div
                      className="relative h-9 w-9 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, var(--color-accent) 100%)',
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="ml-2.5">
                      <div className="flex items-center">
                        <span
                          className={cn(
                            'font-display font-bold leading-none text-[var(--text-primary)] transition-all duration-300 tracking-tight',
                            isScrolled ? 'text-lg' : 'text-xl'
                          )}
                        >
                          City
                        </span>
                        <span
                          className={cn(
                            'font-display font-bold leading-none transition-all duration-300 tracking-tight',
                            isScrolled ? 'text-lg' : 'text-xl'
                          )}
                          style={{
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          Guide
                        </span>
                        {/* Moroccan star accent */}
                        <MoroccanStar
                          className={cn(
                            'text-[var(--color-accent)] transition-all duration-300 ml-0.5',
                            isScrolled ? 'h-2 w-2' : 'h-2.5 w-2.5'
                          )}
                        />
                      </div>
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] leading-none mt-1">
                        Morocco Travel
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav
                className="hidden xl:flex items-center gap-0.5"
                role="navigation"
                aria-label="Main navigation"
              >
                {navigationItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'nav-link-premium group relative flex items-center gap-1 px-3 py-2 text-[13px] font-semibold transition-colors font-heading',
                        activeDropdown === item.label
                          ? 'text-[var(--color-primary)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      )}
                    >
                      <span className="relative">
                        {item.label}
                        {/* Animated underline - slides from left */}
                        <span
                          className={cn(
                            'absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ease-out',
                            activeDropdown === item.label ? 'w-full' : 'w-0 group-hover:w-full'
                          )}
                          style={{
                            background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                          }}
                        />
                      </span>
                      {item.columns && (
                        <ChevronDown
                          className={cn(
                            'h-3 w-3 transition-transform duration-300',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                {/* Search - with subtle pulse animation */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="group search-btn-premium flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-2 text-sm text-[var(--text-muted)] hover:border-[var(--color-primary-200)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)] transition-all duration-300"
                  aria-label="Open search"
                >
                  <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline text-[13px] font-medium">Search...</span>
                  <kbd className="hidden rounded-md bg-[var(--surface)] px-1.5 py-0.5 text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-light)] sm:inline shadow-sm">
                    /
                  </kbd>
                </button>

                {/* CTA - Plan Trip */}
                <Link
                  href="/tools/planner"
                  className="hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 50%, var(--color-accent) 100%)',
                    backgroundSize: '200% 100%',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundPosition = '100% 0';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundPosition = '0% 0';
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Plan Trip
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileOpen(true)}
                  className="flex xl:hidden items-center justify-center rounded-xl p-2.5 text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-colors"
                  aria-label="Open menu"
                  aria-expanded={isMobileOpen}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Moroccan Geometric Accent Line */}
          <div
            className={cn(
              'transition-all duration-300',
              isScrolled ? 'h-[2px]' : 'h-[3px]'
            )}
            style={{
              background:
                'repeating-linear-gradient(90deg, var(--color-primary) 0px, var(--color-primary) 8px, var(--color-accent) 8px, var(--color-accent) 16px, var(--color-secondary) 16px, var(--color-secondary) 24px, var(--color-green) 24px, var(--color-green) 32px)',
            }}
          />
        </motion.div>

        {/* Mega Dropdowns */}
        {navigationItems.map((item) =>
          item.columns ? (
            <MegaDropdown
              key={item.label}
              item={item}
              isOpen={activeDropdown === item.label}
              onMouseEnter={() => handleDropdownEnter(item.label)}
              onClose={() => setActiveDropdown(null)}
            />
          ) : null
        )}
      </motion.header>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navigationItems={navigationItems}
        currencies={currencies}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
      />

      {/* Keyboard shortcut for search */}
      <KeyboardShortcut
        onSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}

/* ─── Keyboard Shortcut Handler ─── */

function KeyboardShortcut({ onSearch }: { onSearch: () => void }) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        onSearch();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSearch]);

  return null;
}
