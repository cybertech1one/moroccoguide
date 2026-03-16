'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Search,
  ChevronDown,
  MapPin,
  Map,
  CalendarDays,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

type Currency = {
  code: string;
  symbol: string;
};

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavItem[];
  currencies: Currency[];
  selectedCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { type: 'spring' as const, damping: 30, stiffness: 300 },
  },
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn' as const },
  },
};

export default function MobileNav({
  isOpen,
  onClose,
  navigationItems,
  currencies,
  selectedCurrency,
  onCurrencyChange,
}: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setExpandedItem(null);
      setSearchQuery('');
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

  const toggleExpanded = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[var(--z-overlay)] bg-black/50 backdrop-blur-sm xl:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[var(--z-modal)] w-full max-w-sm bg-[var(--surface)] shadow-2xl xl:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-light)] px-4 py-3">
              <span className="font-display text-lg font-bold text-[var(--text-primary)]">
                Menu
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-[var(--text-muted)] hover:bg-[var(--surface-muted)] transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search */}
            <div className="border-b border-[var(--border-light)] px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl bg-[var(--surface-muted)] px-3 py-2.5">
                <Search className="h-4 w-4 text-[var(--text-muted)]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, tours..."
                  className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none"
                  aria-label="Search"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-b border-[var(--border-light)] px-4 py-3">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: MapPin, label: 'Destinations', href: '/cities' },
                  { icon: Map, label: 'Map', href: '/tools/map' },
                  { icon: CalendarDays, label: 'Planner', href: '/tools/planner' },
                ].map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    onClick={onClose}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-[var(--border-light)] px-2 py-3 text-center hover:border-[var(--color-primary-200)] hover:bg-[var(--color-primary-50)] transition-colors"
                  >
                    <action.icon className="h-5 w-5 text-[var(--color-primary)]" />
                    <span className="text-xs font-medium text-[var(--text-secondary)]">
                      {action.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Accordion */}
            <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
              <ul className="py-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isExpanded = expandedItem === item.label;
                  const hasChildren = item.columns && item.columns.length > 0;

                  return (
                    <li key={item.label}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        {hasChildren ? (
                          <button
                            onClick={() => toggleExpanded(item.label)}
                            className={cn(
                              'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors',
                              isExpanded
                                ? 'bg-[var(--color-primary-50)] text-[var(--color-primary)]'
                                : 'text-[var(--text-primary)] hover:bg-[var(--surface-muted)]'
                            )}
                            aria-expanded={isExpanded}
                          >
                            <Icon className="h-5 w-5 flex-shrink-0" />
                            <span className="flex-1 font-medium text-sm font-heading">
                              {item.label}
                            </span>
                            <ChevronDown
                              className={cn(
                                'h-4 w-4 transition-transform duration-200',
                                isExpanded && 'rotate-180'
                              )}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3 text-[var(--text-primary)] hover:bg-[var(--surface-muted)] transition-colors"
                          >
                            <Icon className="h-5 w-5 flex-shrink-0" />
                            <span className="font-medium text-sm font-heading">
                              {item.label}
                            </span>
                          </Link>
                        )}

                        {/* Accordion Content */}
                        <AnimatePresence>
                          {hasChildren && isExpanded && (
                            <motion.div
                              variants={accordionVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="bg-[var(--surface-muted)] px-4 py-3">
                                {item.columns!.map((column) => (
                                  <div key={column.title} className="mb-3 last:mb-0">
                                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] font-heading">
                                      {column.title}
                                    </p>
                                    <ul className="space-y-0.5">
                                      {column.items.map((subItem) => (
                                        <li key={subItem.href}>
                                          <Link
                                            href={subItem.href}
                                            onClick={onClose}
                                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--color-primary)] transition-colors"
                                          >
                                            <span>{subItem.label}</span>
                                            {subItem.description && (
                                              <span className="text-xs text-[var(--text-muted)]">
                                                - {subItem.description}
                                              </span>
                                            )}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                {/* View All Link */}
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                                >
                                  View all {item.label}
                                  <ChevronDown className="h-3 w-3 -rotate-90" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom Section */}
            <div className="border-t border-[var(--border-light)] px-4 py-4 space-y-4">
              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                {[
                  { icon: Facebook, href: 'https://facebook.com/cityguide', label: 'Facebook' },
                  { icon: Instagram, href: 'https://instagram.com/cityguide', label: 'Instagram' },
                  { icon: Twitter, href: 'https://twitter.com/cityguide', label: 'Twitter' },
                  { icon: Youtube, href: 'https://youtube.com/cityguide', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--color-primary)] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* Language & Currency */}
              <div className="flex items-center justify-center gap-3">
                <button className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:border-[var(--color-primary-200)] transition-colors">
                  <Globe className="h-3.5 w-3.5" />
                  English
                </button>
                <div className="flex rounded-lg border border-[var(--border)] overflow-hidden">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => onCurrencyChange(c)}
                      className={cn(
                        'px-2.5 py-1.5 text-xs font-medium transition-colors',
                        c.code === selectedCurrency.code
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                      )}
                    >
                      {c.code}
                    </button>
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
