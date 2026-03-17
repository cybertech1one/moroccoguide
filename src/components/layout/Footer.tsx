'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  ShieldCheck,
  BadgeCheck,
  Award,
  Heart,
  ArrowRight,
  Send,
  Sparkles,
} from 'lucide-react';
import NewsletterForm from './NewsletterForm';

/* ─── Footer Data ─── */

const footerColumns = [
  {
    title: 'Destinations',
    links: [
      { label: 'Marrakech Guide', href: '/marrakech' },
      { label: 'Fes Guide', href: '/fes-guide' },
      { label: 'Chefchaouen Guide', href: '/chefchaouen' },
      { label: 'Essaouira Guide', href: '/essaouira' },
      { label: 'Tangier Guide', href: '/tangier' },
      { label: 'Agadir Guide', href: '/agadir' },
      { label: 'Atlas Mountains', href: '/atlas-mountains' },
      { label: 'Sahara Desert', href: '/sahara' },
      { label: 'All Cities', href: '/cities' },
      { label: 'Berber Culture', href: '/berber-culture' },
      { label: 'Paradise Valley', href: '/paradise-valley' },
      { label: 'Todra Gorge', href: '/todra-gorge' },
      { label: 'Ouarzazate', href: '/ouarzazate' },
      { label: 'Tetouan', href: '/tetouan' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Attractions', href: '/attractions' },
      { label: 'Tours & Excursions', href: '/tours' },
      { label: 'Experiences', href: '/experiences' },
      { label: 'Activities', href: '/activities' },
      { label: 'Events & Festivals', href: '/events' },
      { label: 'Day Trips', href: '/day-trips' },
      { label: 'Itineraries', href: '/itineraries' },
      { label: 'Local Guides', href: '/guides' },
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Travel Blog', href: '/blog' },
      { label: 'Souks & Markets', href: '/souks' },
      { label: 'Riad Guide', href: '/riad-guide' },
      { label: 'Trains & Transport', href: '/trains' },
      { label: 'Cuisine Guide', href: '/cuisine' },
    ],
  },
  {
    title: 'Stay & Eat',
    links: [
      { label: 'Hotels', href: '/accommodations' },
      { label: 'Riads', href: '/riads' },
      { label: 'Restaurants', href: '/restaurants' },
      { label: 'Food & Cuisine', href: '/food' },
      { label: 'Cooking Classes', href: '/cooking-classes' },
      { label: 'Shopping & Souks', href: '/shopping' },
      { label: 'Nightlife', href: '/nightlife' },
      { label: 'Hammam Guide', href: '/hammam' },
      { label: 'Spa & Wellness', href: '/spa' },
      { label: 'Wine & Vineyards', href: '/wine' },
      { label: 'Moroccan Hammam', href: '/moroccan-hammam' },
      { label: 'Moroccan Markets', href: '/moroccan-markets' },
      { label: 'Food Guide', href: '/moroccan-food-guide' },
      { label: 'Street Food', href: '/street-food' },
    ],
  },
  {
    title: 'Activities',
    links: [
      { label: 'Desert Adventures', href: '/desert-adventures' },
      { label: 'Trekking & Hiking', href: '/trekking' },
      { label: 'Surfing & Water Sports', href: '/water-sports' },
      { label: 'Water Parks & Fun', href: '/water-fun' },
      { label: 'Hot Air Balloon', href: '/hot-air-balloon' },
      { label: 'Skiing', href: '/skiing' },
      { label: 'Camping', href: '/camping' },
      { label: 'Stargazing', href: '/stargazing' },
      { label: 'Golf', href: '/golf' },
      { label: 'Photography', href: '/photography' },
      { label: 'Paragliding', href: '/paragliding' },
      { label: 'Quad Biking', href: '/quad-biking' },
      { label: 'Sandboarding', href: '/sandboarding' },
      { label: 'Surfing Taghazout', href: '/taghazout-surf' },
    ],
  },
  {
    title: 'Plan Your Trip',
    links: [
      { label: 'First Time Guide', href: '/first-time' },
      { label: 'Travel Tips', href: '/tips' },
      { label: 'Visa & Entry', href: '/visa' },
      { label: 'Safety Guide', href: '/safety' },
      { label: 'Money & Currency', href: '/money' },
      { label: 'Weather & Climate', href: '/weather' },
      { label: 'Packing List', href: '/packing' },
      { label: 'Transport', href: '/transport' },
      { label: 'Best Time to Visit', href: '/best-time' },
      { label: 'Scams to Avoid', href: '/scams' },
      { label: 'Ramadan Guide', href: '/ramadan' },
      { label: 'World Cup 2030', href: '/worldcup-2030' },
      { label: 'Travel Tools', href: '/tools' },
      { label: 'Budget Calculator', href: '/tools/budget' },
      { label: 'Currency Converter', href: '/tools/currency' },
      { label: 'Learn Darija', href: '/darija' },
      { label: 'Emergency Contacts', href: '/emergency' },
      { label: 'Public Transport', href: '/public-transport' },
    ],
  },
  {
    title: 'Travel Styles',
    links: [
      { label: 'Solo Travel', href: '/solo-travel' },
      { label: 'Women Travel', href: '/women-travel' },
      { label: 'Family Travel', href: '/family-guide' },
      { label: 'Backpacking', href: '/backpacking' },
      { label: 'Luxury Travel', href: '/luxury' },
      { label: 'Honeymoon', href: '/honeymoon' },
      { label: 'Digital Nomads', href: '/digital-nomad' },
      { label: 'Senior Travel', href: '/seniors' },
      { label: 'Accessible Travel', href: '/accessible-travel' },
      { label: 'Expat Guide', href: '/expat-guide' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/cityguide', label: 'Facebook', color: '#1877F2' },
  { icon: Instagram, href: 'https://instagram.com/cityguide', label: 'Instagram', color: '#E4405F' },
  { icon: Twitter, href: 'https://twitter.com/cityguide', label: 'Twitter', color: '#1DA1F2' },
  { icon: Youtube, href: 'https://youtube.com/cityguide', label: 'YouTube', color: '#FF0000' },
];

/* ─── Moroccan Arch Divider SVG ─── */

function MoroccanArchDivider() {
  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        className="w-full h-16 md:h-20"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="arch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="33%" stopColor="var(--color-accent)" />
            <stop offset="66%" stopColor="var(--color-secondary)" />
            <stop offset="100%" stopColor="var(--color-green)" />
          </linearGradient>
        </defs>
        {/* Background fill matching footer */}
        <rect width="1440" height="80" fill="#1A1814" />
        {/* Arch shapes */}
        <path
          d="M0 0 L0 40 Q60 0 120 40 Q180 0 240 40 Q300 0 360 40 Q420 0 480 40 Q540 0 600 40 Q660 0 720 40 Q780 0 840 40 Q900 0 960 40 Q1020 0 1080 40 Q1140 0 1200 40 Q1260 0 1320 40 Q1380 0 1440 40 L1440 0 Z"
          fill="var(--background)"
        />
        {/* Decorative line following the arches */}
        <path
          d="M0 40 Q60 0 120 40 Q180 0 240 40 Q300 0 360 40 Q420 0 480 40 Q540 0 600 40 Q660 0 720 40 Q780 0 840 40 Q900 0 960 40 Q1020 0 1080 40 Q1140 0 1200 40 Q1260 0 1320 40 Q1380 0 1440 40"
          stroke="url(#arch-gradient)"
          strokeWidth="2"
          fill="none"
        />
        {/* Small star decorations at arch peaks */}
        {[60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140, 1260, 1380].map((x) => (
          <circle
            key={x}
            cx={x}
            cy="8"
            r="2"
            fill="var(--color-accent)"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── Arabesque Divider ─── */

function ArabesqueDivider() {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
      <div className="flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]/40" />
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5 text-[var(--color-accent)]/60"
          fill="currentColor"
        >
          <path d="M16 2l2.245 7.5H26l-6 4.5 2.5 7.5-6.5-4.5L9.5 21.5 12 14l-6-4.5h7.5z" />
        </svg>
        <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]/40" />
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
    </div>
  );
}

/* ─── Footer Component ─── */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto" role="contentinfo">
      {/* Moroccan Arch Divider - replaces plain zellige-border */}
      <MoroccanArchDivider />

      {/* Main Footer */}
      <div
        className="relative moroccan-pattern-dark text-white/80"
        style={{
          background: 'linear-gradient(180deg, #1A1814 0%, #2C2A26 30%, #12110E 100%)',
        }}
      >
        {/* Newsletter Section - Premium with decorative frame */}
        <div className="container-morocco pt-14 pb-10">
          <div className="relative">
            {/* Decorative Moroccan arch frame */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2" aria-hidden="true">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                <path
                  d="M0 40 Q30 0 60 0 Q90 0 120 40"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                  fill="none"
                />
                <path
                  d="M10 40 Q35 5 60 5 Q85 5 110 40"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  strokeOpacity="0.15"
                  fill="none"
                />
                <circle cx="60" cy="3" r="3" fill="var(--color-accent)" fillOpacity="0.4" />
              </svg>
            </div>
            <NewsletterForm />
          </div>
        </div>

        <div className="container-morocco pb-10">
          <ArabesqueDivider />
        </div>

        {/* Footer Columns */}
        <div className="container-morocco pb-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white font-heading flex items-center gap-2">
                  {column.title}
                  <span
                    className="flex-1 max-w-[40px] h-[2px] rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, var(--color-accent), transparent)',
                    }}
                  />
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={`${link.href}-${linkIndex}`}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-0 text-[13px] text-white/50 hover:text-[var(--color-accent)] transition-all duration-300"
                      >
                        <ArrowRight className="h-3 w-3 mr-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-1.5 transition-all duration-300" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="container-morocco">
          <ArabesqueDivider />
        </div>

        {/* Social & Trust Badges */}
        <div className="container-morocco py-10">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mr-2 font-heading">
                Follow Us
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center rounded-xl border border-white/15 p-3 text-white/50 transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white hover:shadow-lg"
                  style={{
                    ['--hover-bg' as string]: social.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${social.color}cc, ${social.color})`;
                    (e.currentTarget as HTMLElement).style.borderColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {[
                { icon: ShieldCheck, label: 'Secure & Encrypted' },
                { icon: BadgeCheck, label: 'Verified Listings' },
                { icon: Award, label: 'Tourism Board Partner' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-2.5 text-white/40 hover:text-white/70 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <badge.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8">
          <div className="container-morocco flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            {/* Copyright */}
            <p className="text-xs text-white/35 font-medium">
              &copy; {currentYear} CityGuide. All rights reserved.
            </p>

            {/* Made with Love Badge */}
            <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-5 py-2 backdrop-blur-sm">
              <span className="text-xs text-white/45 font-medium">Made with</span>
              <Heart className="h-3.5 w-3.5 text-[var(--color-primary-light)] animate-pulse" fill="currentColor" />
              <span className="text-xs text-white/45 font-medium">in</span>
              {/* Morocco flag accent colors */}
              <span className="flex items-center gap-0.5">
                <span className="text-xs font-bold text-[#C1272D]">Mo</span>
                <span className="text-xs font-bold text-[#006233]">rocco</span>
              </span>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-5">
              <button
                className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/65 transition-colors font-medium"
                aria-label="Change language"
              >
                <Globe className="h-3 w-3" />
                English
              </button>
              <span className="h-3 w-px bg-white/15" />
              <Link
                href="/privacy"
                className="text-xs text-white/35 hover:text-white/65 transition-colors font-medium"
              >
                Privacy
              </Link>
              <span className="h-3 w-px bg-white/15" />
              <Link
                href="/terms"
                className="text-xs text-white/35 hover:text-white/65 transition-colors font-medium"
              >
                Terms
              </Link>
              <span className="h-3 w-px bg-white/15" />
              <Link
                href="/about"
                className="text-xs text-white/35 hover:text-white/65 transition-colors font-medium"
              >
                About
              </Link>
              <span className="h-3 w-px bg-white/15" />
              <Link
                href="/contact"
                className="text-xs text-white/35 hover:text-white/65 transition-colors font-medium"
              >
                Contact
              </Link>
              <span className="h-3 w-px bg-white/15" />
              <Link
                href="/sitemap.xml"
                className="text-xs text-white/35 hover:text-white/65 transition-colors font-medium"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
