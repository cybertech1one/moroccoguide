'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Cloud,
  Share2,
  Bookmark,
  BookmarkCheck,
  Copy,
  Facebook,
  Twitter,
  Link as LinkIcon,
  Map,
  Navigation,
  Clock,
  Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import WeatherWidget from '@/components/weather/WeatherWidget';

/* ─── Types ─── */

type TocItem = {
  id: string;
  label: string;
  level: number;
};

type NearbyItem = {
  title: string;
  href: string;
  type: string;
  distance: string;
  rating?: number;
};

type SidebarProps = {
  tableOfContents?: TocItem[];
  nearbySuggestions?: NearbyItem[];
  quickLinks?: { label: string; href: string; icon?: React.ElementType }[];
  cityName?: string;
  /** City slug for live weather widget (e.g. "marrakech") */
  citySlug?: string;
  mapThumbnail?: string;
  mapLink?: string;
  shareUrl?: string;
  shareTitle?: string;
};

/* ─── Sidebar Component ─── */

export default function Sidebar({
  tableOfContents = [],
  nearbySuggestions = [],
  quickLinks = [],
  cityName,
  citySlug,
  mapThumbnail,
  mapLink,
  shareUrl,
  shareTitle = 'Check this out on CityGuide',
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [tocExpanded, setTocExpanded] = useState(true);
  const [nearbyExpanded, setNearbyExpanded] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  // Intersection observer for active section tracking
  useEffect(() => {
    if (tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  const handleCopyLink = async () => {
    const url = shareUrl || window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // Fallback: fail silently
    }
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(shareUrl || window.location.href);
    const title = encodeURIComponent(shareTitle);
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    };
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setIsShareOpen(false);
  };

  const sidebarVariants = {
    expanded: { width: 280, opacity: 1 },
    collapsed: { width: 48, opacity: 1 },
  };

  return (
    <motion.aside
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'sticky top-24 hidden h-[calc(100vh-7rem)] flex-shrink-0 lg:block',
        isCollapsed ? 'overflow-visible' : 'overflow-y-auto overflow-x-hidden'
      )}
      role="complementary"
      aria-label="Page sidebar"
    >
      <div className="relative h-full">
        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm hover:shadow-md text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="h-3.5 w-3.5" />
          ) : (
            <ChevronLeft className="h-3.5 w-3.5" />
          )}
        </button>

        <AnimatePresence mode="wait">
          {!isCollapsed ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-5 pr-2"
            >
              {/* Quick Links */}
              {quickLinks.length > 0 && (
                <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-4">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                    Quick Links
                  </h3>
                  <ul className="space-y-1">
                    {quickLinks.map((link) => {
                      const Icon = link.icon || Navigation;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)] transition-colors"
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-4">
                  <button
                    onClick={() => setTocExpanded(!tocExpanded)}
                    className="flex w-full items-center justify-between"
                    aria-expanded={tocExpanded}
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                      On This Page
                    </h3>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 text-[var(--text-muted)] transition-transform',
                        tocExpanded && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {tocExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <nav className="mt-3" aria-label="Table of contents">
                          <ul className="space-y-0.5 border-l-2 border-[var(--border-light)]">
                            {tableOfContents.map((item) => (
                              <li key={item.id}>
                                <a
                                  href={`#${item.id}`}
                                  className={cn(
                                    'block border-l-2 -ml-[2px] py-1.5 text-sm transition-all',
                                    item.level === 2 ? 'pl-4' : 'pl-7',
                                    activeSection === item.id
                                      ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-medium'
                                      : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:border-[var(--color-sand-400)]'
                                  )}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Live Weather Widget */}
              {citySlug && (
                <WeatherWidget city={citySlug} compact />
              )}

              {/* Map Thumbnail */}
              {mapThumbnail && (
                <Link
                  href={mapLink || '/tools/map'}
                  className="group block overflow-hidden rounded-xl border border-[var(--border-light)]"
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={mapThumbnail}
                      alt={`Map of ${cityName || 'location'}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                      <Map className="h-4 w-4" />
                      <span className="text-sm font-medium">View on Map</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Nearby Suggestions */}
              {nearbySuggestions.length > 0 && (
                <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-4">
                  <button
                    onClick={() => setNearbyExpanded(!nearbyExpanded)}
                    className="flex w-full items-center justify-between"
                    aria-expanded={nearbyExpanded}
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                      Nearby
                    </h3>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 text-[var(--text-muted)] transition-transform',
                        nearbyExpanded && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {nearbyExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-3 space-y-2">
                          {nearbySuggestions.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="group flex items-start gap-3 rounded-lg p-2 hover:bg-[var(--surface-muted)] transition-colors"
                              >
                                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-50)]">
                                  <MapPin className="h-4 w-4 text-[var(--color-primary)]" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                                    {item.title}
                                  </p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-xs text-[var(--text-muted)]">
                                      {item.type}
                                    </span>
                                    <span className="text-[var(--text-muted)]">&middot;</span>
                                    <span className="text-xs text-[var(--text-muted)]">
                                      {item.distance}
                                    </span>
                                    {item.rating && (
                                      <>
                                        <span className="text-[var(--text-muted)]">&middot;</span>
                                        <span className="flex items-center gap-0.5 text-xs text-[var(--color-accent-dark)]">
                                          <Star className="h-3 w-3" fill="currentColor" />
                                          {item.rating}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Share & Save */}
              <div className="rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-4">
                <div className="flex gap-2">
                  {/* Save/Bookmark Button */}
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={cn(
                      'flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-medium transition-all',
                      isSaved
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary-50)] text-[var(--color-primary)]'
                        : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--color-primary-200)] hover:text-[var(--color-primary)]'
                    )}
                    aria-label={isSaved ? 'Remove bookmark' : 'Bookmark this page'}
                    aria-pressed={isSaved}
                  >
                    {isSaved ? (
                      <BookmarkCheck className="h-4 w-4" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>

                  {/* Share Button */}
                  <div className="relative flex-1">
                    <button
                      onClick={() => setIsShareOpen(!isShareOpen)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--color-secondary-200)] hover:text-[var(--color-secondary)] transition-all"
                      aria-label="Share this page"
                      aria-expanded={isShareOpen}
                    >
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>

                    <AnimatePresence>
                      {isShareOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          className="absolute bottom-full left-0 right-0 mb-2 rounded-xl border border-[var(--border-light)] bg-[var(--surface)] p-2 shadow-lg z-10"
                        >
                          <button
                            onClick={() => handleShare('facebook')}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-colors"
                          >
                            <Facebook className="h-4 w-4 text-[#1877F2]" />
                            Facebook
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-colors"
                          >
                            <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                            Twitter
                          </button>
                          <button
                            onClick={handleCopyLink}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] transition-colors"
                          >
                            {copySuccess ? (
                              <>
                                <Copy className="h-4 w-4 text-[var(--success)]" />
                                <span className="text-[var(--success)]">Copied!</span>
                              </>
                            ) : (
                              <>
                                <LinkIcon className="h-4 w-4" />
                                Copy Link
                              </>
                            )}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Collapsed State - Icon Strip */
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-2 pt-12"
            >
              {tableOfContents.length > 0 && (
                <button
                  onClick={() => setIsCollapsed(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Show table of contents"
                  title="Table of Contents"
                >
                  <Clock className="h-4 w-4" />
                </button>
              )}
              {mapThumbnail && (
                <Link
                  href={mapLink || '/tools/map'}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] transition-colors"
                  title="View Map"
                >
                  <Map className="h-4 w-4" />
                </Link>
              )}
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-colors',
                  isSaved
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary-50)]'
                    : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]'
                )}
                aria-label={isSaved ? 'Remove bookmark' : 'Bookmark'}
                title={isSaved ? 'Saved' : 'Save'}
              >
                {isSaved ? (
                  <BookmarkCheck className="h-4 w-4" />
                ) : (
                  <Bookmark className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => {
                  setIsCollapsed(false);
                  setIsShareOpen(true);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Share"
                title="Share"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
