import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Wifi,
  UtensilsCrossed,
  Droplets,
  Key,
  Calendar,
  Phone,
  Eye,
  Bed,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Luxury Riads in Morocco 2026 | Top Boutique Stays & Exclusive Experiences',
  description:
    'Discover Morocco\'s finest luxury riads — from Royal Mansour and La Mamounia in Marrakech to Riad Fes and Palais Amani. Complete guide to 5-star boutique riads with private hammams, rooftop dining, price ranges from 2,000 MAD, and expert booking tips.',
  keywords: [
    'luxury riads Morocco',
    'best riads Marrakech',
    'boutique riad Morocco',
    'luxury accommodation Morocco',
    '5 star riad',
    'Royal Mansour Marrakech',
    'La Mamounia riad',
    'Riad Fes luxury',
    'Palais Amani Fes',
    'luxury riad Essaouira',
    'Chefchaouen boutique riad',
    'private hammam riad',
    'rooftop dining riad Morocco',
    'Morocco luxury hotel',
    'riad booking tips',
    'best time visit Morocco riad',
    'Morocco boutique accommodation',
    'luxury riad prices Morocco',
    'exclusive riad experiences',
    'traditional Moroccan riad',
  ],
  openGraph: {
    title: 'Best Luxury Riads in Morocco 2026 | Top Boutique Stays & Exclusive Experiences',
    description:
      'Complete guide to Morocco\'s most exclusive luxury riads. From Royal Mansour in Marrakech to hidden gems in Fes and Essaouira. Prices, amenities, private hammams, and booking tips.',
    url: `${BASE_URL}/morocco-luxury-riads`,
    images: [
      {
        url: `${BASE_URL}/images/hero-riad-interior.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxurious Moroccan riad interior with traditional zellige tilework, central courtyard fountain, and lush greenery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Luxury Riads in Morocco 2026 | Boutique Stays Guide',
    description:
      'Morocco\'s finest luxury riads revealed. Royal Mansour, La Mamounia, Riad Fes & more. Private hammams, rooftop dining, prices from 2,000 MAD, and expert booking tips.',
    images: [`${BASE_URL}/images/hero-riad-interior.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-luxury-riads` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-luxury-riads`,
  name: 'Best Luxury Riads in Morocco 2026 | Top Boutique Stays & Exclusive Experiences',
  description:
    'Complete guide to Morocco\'s finest luxury riads. From Royal Mansour and La Mamounia in Marrakech to Riad Fes and Palais Amani. Private hammams, rooftop dining, prices, and booking tips.',
  url: `${BASE_URL}/morocco-luxury-riads`,
  image: `${BASE_URL}/images/hero-riad-interior.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-luxury-riads`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Luxury Riads in Morocco', item: `${BASE_URL}/morocco-luxury-riads` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a riad and how is it different from a hotel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A riad is a traditional Moroccan house built around an interior courtyard or garden. Unlike hotels, riads are intimate properties typically with 4-12 rooms, offering personalized service, home-cooked meals, and an authentic architectural experience. The word "riad" comes from the Arabic for "garden."',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a luxury riad cost per night in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Luxury riads in Morocco range from 2,000 MAD to 15,000+ MAD per night. Mid-luxury riads start from 2,000-4,000 MAD, premium riads run 4,000-8,000 MAD, and ultra-luxury properties like Royal Mansour can exceed 15,000 MAD. Seasonal pricing varies, with peak season (October-April) being most expensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a riad in the medina or outside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A medina riad offers the most authentic experience — you are immersed in the historic quarter with easy access to souks and landmarks on foot. However, medina riads require navigating narrow streets. If you prefer easier car access and quieter surroundings, consider riads in the Palmerie or new city areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do luxury riads have private hammams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many luxury riads feature private hammams or in-house spa facilities. Properties like Royal Mansour, La Mamounia, and Riad Fes all have world-class hammam and spa services. Some riads offer in-room hammam experiences or can arrange private sessions for couples.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to stay in a luxury riad in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit is spring (March-May) and autumn (September-November) when temperatures are pleasant. Peak season is October through April, which means higher prices but cooler, comfortable weather. Summer (June-August) can be extremely hot in Marrakech and Fes, but coastal riads in Essaouira remain pleasant.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY RIADS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const marrakechRiads = [
  {
    name: 'Royal Mansour',
    icon: Crown,
    rating: '5-Star Palace',
    price: 'From 15,000 MAD/night',
    description:
      'The crown jewel of Moroccan hospitality, commissioned by King Mohammed VI himself. Each accommodation is a private three-story riad with its own plunge pool, rooftop terrace, and dedicated butler. The 2,500 sqm spa features a white marble hammam, and the three restaurants include a Michelin-starred dining experience. Every surface showcases the finest Moroccan craftsmanship — zellige, carved plaster, and hand-painted cedarwood.',
    highlights: ['Private three-story riads', 'Personal butler service', 'Michelin-starred dining', 'White marble hammam', 'Underground tunnel network'],
  },
  {
    name: 'La Mamounia',
    icon: Award,
    rating: '5-Star Palace',
    price: 'From 8,000 MAD/night',
    description:
      'A legendary palace hotel set within 17 acres of centennial gardens. Since 1929, La Mamounia has hosted royalty, world leaders, and cultural icons. Winston Churchill called it "the most lovely spot in the whole world." The 2,500 sqm spa, multiple pools, and four restaurants make this an icon of Moroccan luxury. The Art Deco interiors blend seamlessly with traditional Moorish architecture.',
    highlights: ['17 acres of historic gardens', 'World-renowned heritage', 'Four on-site restaurants', '2,500 sqm luxury spa', 'Art Deco meets Moorish design'],
  },
  {
    name: 'Riad Kniza',
    icon: Gem,
    rating: 'Boutique Luxury',
    price: 'From 3,500 MAD/night',
    description:
      'An intimate eleven-room boutique riad that represents the pinnacle of understated Moroccan elegance. Owned by a passionate collector, every room is filled with antiques, museum-quality art, and handcrafted furniture. The in-house restaurant serves some of the finest traditional Moroccan cuisine in the medina, and the small spa uses locally sourced argan oil and saffron in its treatments.',
    highlights: ['Antique-filled interiors', 'Museum-quality art collection', 'Award-winning restaurant', 'Personalized saffron spa treatments', 'Intimate eleven-room property'],
  },
] as const;

const fesRiads = [
  {
    name: 'Riad Fes',
    icon: Crown,
    rating: '5-Star Luxury',
    price: 'From 4,500 MAD/night',
    description:
      'The undisputed queen of Fes luxury accommodation. This meticulously restored 16th-century palace features 21 rooms and suites adorned with original zellige mosaics, carved cedar ceilings, and silk furnishings. The rooftop bar offers panoramic views over the medina, and the spa includes a traditional hammam and an indoor pool. The restaurant specializes in refined Fassi cuisine — a cuisine tradition that rivals Marrakech.',
    highlights: ['16th-century restored palace', 'Original zellige and cedar work', 'Rooftop bar with medina views', 'Indoor pool and hammam spa', 'Refined Fassi fine dining'],
  },
  {
    name: 'Palais Amani',
    icon: Sparkles,
    rating: 'Boutique Luxury',
    price: 'From 3,000 MAD/night',
    description:
      'A beautifully restored 17th-century palace near Bab Guissa, one of the quieter gates of the Fes medina. The standout feature is the Andalusian garden with over 3,000 plants, from which the in-house spa sources organic ingredients for its treatments. Fifteen rooms and suites are individually decorated, and the rooftop terrace restaurant offers sweeping views of the medina skyline.',
    highlights: ['Andalusian garden with 3,000+ plants', 'Organic in-house spa products', 'Rooftop terrace dining', 'Quiet medina neighborhood', 'Cooking classes available'],
  },
] as const;

const essaouiraRiads = [
  {
    name: 'Heure Bleue Palais',
    icon: Award,
    rating: 'Boutique Luxury',
    price: 'From 3,200 MAD/night',
    description:
      'A stately heritage palace steps from the ramparts of Essaouira, blending traditional Moroccan architecture with French colonial elegance. Features a heated indoor pool, cinema room, rooftop terrace with Atlantic views, and a spa with hammam. The restaurant serves fresh Atlantic seafood alongside classic Moroccan dishes. Each of the 33 rooms is individually styled.',
    highlights: ['Heated indoor pool', 'Atlantic rooftop views', 'Cinema room', 'Fresh seafood restaurant', 'Steps from the ramparts'],
  },
  {
    name: 'Villa de l\'O',
    icon: Gem,
    rating: 'Boutique Luxury',
    price: 'From 2,500 MAD/night',
    description:
      'A contemporary boutique riad that balances modern minimalist design with Moroccan warmth. Located within the medina walls, it features clean lines, natural materials, and a stunning courtyard pool. The rooftop offers views over the medina to the ocean. Perfect for design-conscious travelers who want comfort without the ornate excess.',
    highlights: ['Contemporary design aesthetic', 'Courtyard swimming pool', 'Ocean-view rooftop', 'Minimalist luxury', 'Medina location'],
  },
] as const;

const chefchaouenRiads = [
  {
    name: 'Lina Ryad & Spa',
    icon: Sparkles,
    rating: 'Boutique Luxury',
    price: 'From 2,000 MAD/night',
    description:
      'The premier luxury accommodation in Chefchaouen\'s blue medina. This beautifully restored riad features rooms painted in the signature blue hues of the city, a courtyard with fountain, an in-house spa with hammam, and a rooftop terrace with views of the Rif Mountains. The restaurant serves traditional Riffian and Andalusian cuisine sourced from local farms.',
    highlights: ['Signature blue-painted interiors', 'Rif Mountain rooftop views', 'In-house spa and hammam', 'Farm-to-table restaurant', 'Heart of the blue medina'],
  },
  {
    name: 'Casa Hassan',
    icon: Building,
    rating: 'Heritage Boutique',
    price: 'From 1,500 MAD/night',
    description:
      'One of the original heritage guesthouses in Chefchaouen, run by the same family for decades. Casa Hassan offers authentic charm with traditional furnishings, a rooftop terrace overlooking the blue city, and a renowned restaurant that is considered one of the best in town. The hospitality is warm, personal, and deeply rooted in Chefchaouen tradition.',
    highlights: ['Family-run heritage property', 'Renowned on-site restaurant', 'Panoramic rooftop terrace', 'Authentic Chefchaouen character', 'Decades of hospitality experience'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT MAKES A LUXURY RIAD
   ═══════════════════════════════════════════════════════════════ */

const riadFeatures = [
  {
    title: 'Central Courtyard',
    icon: Eye,
    description: 'The heart of every riad: an open-air courtyard with a fountain, citrus trees, or plunge pool. This is where life happens — breakfast, tea, and evening relaxation.',
  },
  {
    title: 'Artisan Craftsmanship',
    icon: Gem,
    description: 'Zellige tilework, carved stucco (gebs), painted cedar ceilings (zouak), and tadelakt walls. Each element is handcrafted by master artisans using centuries-old techniques.',
  },
  {
    title: 'Private Hammam',
    icon: Droplets,
    description: 'Most luxury riads feature an in-house hammam with traditional scrubbing rituals, argan oil treatments, and heated marble rooms for the ultimate relaxation.',
  },
  {
    title: 'Rooftop Terrace',
    icon: Sun,
    description: 'Expansive rooftop terraces with views over the medina, Atlas Mountains, or ocean. Often the setting for sunrise breakfast or sunset cocktails under the stars.',
  },
  {
    title: 'Personalized Service',
    icon: Users,
    description: 'With only 4-12 rooms per property, luxury riads offer a level of personal attention that large hotels cannot match. Many provide dedicated butlers or concierges.',
  },
  {
    title: 'Gourmet Dining',
    icon: UtensilsCrossed,
    description: 'Private chefs prepare traditional Moroccan feasts — slow-cooked tagines, pastilla, couscous — using family recipes and fresh market ingredients bought that morning.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: AMENITIES TO EXPECT
   ═══════════════════════════════════════════════════════════════ */

const luxuryAmenities = [
  { amenity: 'Private hammam & spa', icon: Droplets, detail: 'Traditional hammam rituals with argan oil, ghassoul clay, and rose water treatments' },
  { amenity: 'Rooftop terrace dining', icon: UtensilsCrossed, detail: 'Candlelit dinners under the stars with panoramic medina or mountain views' },
  { amenity: 'Plunge pool or courtyard pool', icon: Sparkles, detail: 'Cool retreat from the medina heat, often surrounded by orange trees and zellige' },
  { amenity: 'Butler or concierge service', icon: Key, detail: 'Personal assistance with restaurant reservations, tours, transport, and special requests' },
  { amenity: 'Airport transfers', icon: Globe, detail: 'Private car transfers from the airport to the medina with luggage assistance' },
  { amenity: 'Cooking classes', icon: BookOpen, detail: 'Learn to prepare tagine, pastilla, and Moroccan salads from the riad\'s private chef' },
  { amenity: 'Curated excursions', icon: MapPin, detail: 'Private guided tours of the medina, souks, tanneries, and surrounding countryside' },
  { amenity: 'High-speed Wi-Fi', icon: Wifi, detail: 'Reliable connectivity throughout the riad for remote workers and travelers alike' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE RANGES
   ═══════════════════════════════════════════════════════════════ */

const priceRanges = [
  {
    tier: 'Mid-Luxury Riads',
    range: 'From 1,500 - 3,000 MAD/night',
    description: 'Beautifully restored riads with traditional architecture, good breakfasts, and helpful staff. May not have private pools or in-house spas, but still an authentic and comfortable experience.',
    examples: 'Casa Hassan (Chefchaouen), Riad 72 (Marrakech)',
    icon: Star,
  },
  {
    tier: 'Premium Luxury Riads',
    range: 'From 3,000 - 6,000 MAD/night',
    description: 'Exceptional properties with top-tier amenities — private hammams, rooftop dining, plunge pools, and personalized concierge service. The sweet spot for most luxury travelers.',
    examples: 'Riad Kniza (Marrakech), Palais Amani (Fes), Heure Bleue Palais (Essaouira)',
    icon: Award,
  },
  {
    tier: 'Ultra-Luxury Palaces',
    range: 'From 6,000 - 15,000+ MAD/night',
    description: 'World-class palace hotels offering the absolute pinnacle of Moroccan hospitality. Private riads within the complex, Michelin-starred dining, and extensive spa facilities.',
    examples: 'Royal Mansour (Marrakech), La Mamounia (Marrakech), Riad Fes',
    icon: Crown,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  { tip: 'Book Direct for Best Rates', icon: Phone, description: 'Many luxury riads offer a 10-15% discount when you book directly through their website rather than through OTAs like Booking.com or Expedia. Email them directly to negotiate.' },
  { tip: 'Visit in Shoulder Season', icon: Calendar, description: 'March-April and October-November offer the best balance of pleasant weather and lower prices. Avoid Christmas and New Year when rates can double at top properties.' },
  { tip: 'Request a Specific Room', icon: Bed, description: 'Each room in a riad is unique. Ask for photos of available rooms and request one facing the courtyard for the most atmospheric experience. Upper floors are quieter.' },
  { tip: 'Ask About Packages', icon: DollarSign, description: 'Many riads offer multi-night packages that bundle accommodation with airport transfers, hammam sessions, cooking classes, and guided tours at a significant discount.' },
  { tip: 'Check Accessibility', icon: Info, description: 'Medina riads are accessed through narrow streets. Ask the riad to arrange a porter or meet you at the nearest car-accessible point. Most luxury riads provide this service free.' },
  { tip: 'Read Recent Reviews', icon: Eye, description: 'Riads can change ownership or management. Always check reviews from the last 6 months on multiple platforms (Google, TripAdvisor, Booking) for the most current picture.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const seasons = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    verdict: 'Excellent',
    description: 'Ideal temperatures in the 20s Celsius, gardens in full bloom, and moderate tourist crowds. The best time for Marrakech and Fes riads. Prices are moderate to high.',
  },
  {
    season: 'Summer (June - August)',
    icon: Sparkles,
    verdict: 'Good for Coast Only',
    description: 'Marrakech and Fes reach 40+C, making inland riads less appealing. Essaouira stays cool with Atlantic breezes, making coastal riads the smart choice. Lowest prices inland.',
  },
  {
    season: 'Autumn (September - November)',
    icon: Moon,
    verdict: 'Excellent',
    description: 'Temperatures drop to comfortable levels after summer. October is the start of peak season with perfect weather. Excellent value in September before the rush.',
  },
  {
    season: 'Winter (December - February)',
    icon: Globe,
    verdict: 'Good',
    description: 'Mild days (15-20C) but cool evenings. Peak holiday season means higher prices around Christmas and New Year. January and February offer good value with fewer crowds.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLuxuryRiadsPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Luxury Riads in Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-riad-interior.webp"
          alt="Luxurious Moroccan riad interior with ornate zellige tilework, a central courtyard fountain surrounded by citrus trees, and traditional carved plaster archways"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-[var(--color-accent)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Luxury Accommodation Guide 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Best Luxury Riads in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            From royal palace hotels to intimate boutique gems hidden in the medina — discover Morocco&apos;s finest
            riads offering private hammams, rooftop dining, and timeless artisan craftsmanship.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Stay in a Luxury Riad?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            A riad is not simply a place to sleep — it is the heart of the Moroccan travel experience. The word
            &quot;riad&quot; comes from the Arabic <em>ryad</em>, meaning &quot;garden,&quot; and these traditional homes are built
            around a central courtyard where fountains trickle, citrus trees bloom, and the outside world
            disappears behind thick medina walls. Luxury riads take this concept to extraordinary heights, with
            master artisans spending months hand-laying zellige mosaics, carving plaster arabesques, and painting
            cedar ceilings using techniques unchanged for centuries.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Unlike large chain hotels, luxury riads typically have just 4 to 20 rooms, ensuring a level of
            intimacy and personalized service that transforms a trip into an unforgettable experience. Private
            chefs, dedicated butlers, rooftop stargazing, and in-house hammam rituals are the norm, not the exception.
          </p>
        </div>
      </section>

      {/* ── What Makes a Luxury Riad ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Defines a Luxury Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six signature elements that elevate a traditional Moroccan riad into a world-class luxury destination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riadFeatures.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.title} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                    <FeatureIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Riads: Marrakech ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Riads in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The red city is home to Morocco&apos;s most celebrated luxury riads, from royal palaces to intimate boutique hideaways.
          </p>

          <div className="space-y-8">
            {marrakechRiads.map((riad, index) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center flex-shrink-0">
                      <RiadIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {index + 1}. {riad.name}
                        </h3>
                        <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-0.5 rounded-full font-semibold">
                          {riad.rating}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{riad.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{riad.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {riad.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Riads: Fes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Riads in Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The spiritual and intellectual capital of Morocco, Fes offers riads steeped in centuries of history, with architecture that rivals anything in Marrakech.
          </p>

          <div className="space-y-8">
            {fesRiads.map((riad, index) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center flex-shrink-0">
                      <RiadIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {index + 1}. {riad.name}
                        </h3>
                        <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-0.5 rounded-full font-semibold">
                          {riad.rating}
                        </span>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{riad.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{riad.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {riad.highlights.map((highlight) => (
                      <span key={highlight} className="text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Riads: Essaouira & Chefchaouen ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Riads in Essaouira &amp; Chefchaouen
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the imperial cities, Morocco&apos;s coastal and mountain towns offer boutique luxury with a distinct character — Atlantic breezes in Essaouira and blue-painted serenity in Chefchaouen.
          </p>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">Essaouira</h3>
          <div className="space-y-6 mb-12">
            {essaouiraRiads.map((riad, index) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <RiadIcon className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {index + 1}. {riad.name}
                        </h4>
                        <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-0.5 rounded-full font-semibold">{riad.rating}</span>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{riad.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{riad.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {riad.highlights.map((h) => (
                      <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" />{h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">Chefchaouen</h3>
          <div className="space-y-6">
            {chefchaouenRiads.map((riad, index) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <RiadIcon className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {index + 1}. {riad.name}
                        </h4>
                        <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-0.5 rounded-full font-semibold">{riad.rating}</span>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{riad.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{riad.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {riad.highlights.map((h) => (
                      <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" />{h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Amenities to Expect ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Amenities to Expect at a Luxury Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond beautiful architecture, top-tier Moroccan riads deliver a comprehensive luxury experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryAmenities.map((item) => {
              const AmenityIcon = item.icon;
              return (
                <div key={item.amenity} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <AmenityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.amenity}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Private Hammam Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Private Hammam Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the greatest privileges of a luxury riad is access to a private hammam — a world away from the communal public bathhouses.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Royal Mansour Hammam Experience
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The white marble hammam at Royal Mansour is one of the most opulent wellness spaces in Africa.
                The signature Royal Hammam ritual lasts 90 minutes and uses bespoke products made exclusively for
                the property, including gold-infused argan oil. Each private riad also has its own individual hammam
                for the ultimate in privacy.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 2,000 MAD per treatment
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                  90-minute signature ritual
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                La Mamounia Spa &amp; Hammam
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The 2,500 sqm spa at La Mamounia is a temple of wellness. The hammam features heated marble
                slabs, eucalyptus-infused steam, and expert therapists who perform the traditional gommage with
                savon beldi. The signature treatment combines the hammam ritual with a full-body argan oil massage
                and a ghassoul clay face mask.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 1,500 MAD per treatment
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                  2,500 sqm spa facility
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Riad Fes Hammam &amp; Spa
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The traditional hammam at Riad Fes draws on centuries of Fassi bathing tradition. Treatments use
                locally sourced ingredients including ghassoul clay from the Atlas Mountains and organic orange
                blossom water from the Fes region. The spa also features an indoor heated pool and
                treatment rooms decorated with original zellige tilework.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 800 MAD per treatment
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                  Indoor pool included
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] text-center mt-6 italic">
            Note: All prices are approximate and seasonal pricing can change. Contact properties directly for current rates.
          </p>
        </div>
      </section>

      {/* ── Rooftop Dining ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rooftop Dining at Luxury Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dining under the stars on a riad rooftop is one of Morocco&apos;s most magical experiences. Here is what to expect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Traditional Moroccan Feasts
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Multi-course dinners featuring harira soup, pastilla, slow-cooked tagine, and seffa with cinnamon.
                Most luxury riads prepare dinner with market-fresh ingredients purchased that morning. Expect to pay
                from 500 MAD per person for a full traditional dinner with wine.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Crown className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Fine Dining Experiences
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Properties like Royal Mansour offer Michelin-starred dining where Moroccan flavors meet contemporary
                technique. La Grande Table at Royal Mansour, helmed by a world-class chef, reinterprets Moroccan
                cuisine. From 1,200 MAD per person for a tasting menu.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Private Romantic Dinners
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Many luxury riads arrange private rooftop dinners for couples — candlelit tables surrounded by rose
                petals with panoramic medina or Atlas Mountain views. A private dinner for two typically starts from
                1,500 MAD including a full Moroccan menu, wine, and setup.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Breakfast on the Terrace
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Riad breakfasts are legendary. Fresh-squeezed orange juice, msemen flatbread, beghrir pancakes,
                amlou (almond-argan-honey spread), local cheeses, pastries, and mint tea. Most luxury riads include
                breakfast in the room rate, served on the rooftop terrace or in the courtyard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Riad Experience in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-courtyard.webp"
                alt="Traditional Moroccan riad courtyard with zellige fountain, orange trees, and carved plaster archways"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Riad Courtyard</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-riad-courtyard.webp"
                alt="Ornate Moroccan riad interior with traditional zellige tilework and warm atmospheric lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Architecture</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="Luxury riad rooftop terrace at sunset with panoramic views over the Moroccan medina"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rooftop at Sunset</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Ranges ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Riad Price Ranges
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understand the pricing tiers so you can find the right level of luxury for your budget. All prices are per night and seasonal pricing can change.
          </p>

          <div className="space-y-6">
            {priceRanges.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TierIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tier.tier}
                    </h3>
                    <span className="text-sm text-[var(--color-accent)] font-semibold ml-auto">{tier.range}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">{tier.description}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <strong>Examples:</strong> {tier.examples}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Stay in a Luxury Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your visit correctly can mean the difference between a pleasant stay and a perfect one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {s.season}
                  </h3>
                  <span className={`text-xs font-semibold mb-2 block ${s.verdict === 'Excellent' ? 'text-green-600' : 'text-[var(--color-gold)]'}`}>
                    {s.verdict}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Expert Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Make the most of your luxury riad stay with these insider tips from seasoned Morocco travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <TipIcon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Look For ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Look for in a Luxury Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all riads marketed as &quot;luxury&quot; deliver equally. Here is what separates the truly exceptional from the merely attractive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Authentic Restoration', text: 'Look for genuine zellige tilework, carved plaster (gebs), and painted cedar ceilings — not modern reproductions. A truly luxury riad invests years in restoration using traditional artisan methods.' },
              { title: 'Staff-to-Guest Ratio', text: 'Top luxury riads maintain at least a 2:1 staff-to-guest ratio, ensuring personalized service from the moment you arrive.' },
              { title: 'Quality of Bedding', text: 'Premium mattresses, Egyptian cotton linens (300+ thread count), and high-quality pillows. Ask about bedding quality before booking.' },
              { title: 'Dining Quality', text: 'The best riads employ full-time chefs who shop at the souk daily and can prepare both traditional Moroccan and international dishes.' },
              { title: 'Noise & Location', text: 'The best luxury riads are on quiet derbs (alleyways) that offer peaceful sleep while remaining walkable to main attractions.' },
              { title: 'Modern Comforts', text: 'Reliable Wi-Fi, air conditioning, quality bathroom fixtures, and international power outlets. Luxury should never mean compromising on convenience.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: 'What is a riad and how is it different from a hotel?', a: 'A riad is a traditional Moroccan house built around an interior courtyard or garden. Unlike hotels, riads are intimate properties typically with 4-12 rooms, offering personalized service, home-cooked meals, and an authentic architectural experience. Luxury riads combine this traditional format with five-star amenities like private hammams, butler service, and gourmet dining.' },
              { q: 'How much does a luxury riad cost per night in Morocco?', a: 'Luxury riads range from 2,000 MAD to 15,000+ MAD per night. Mid-luxury riads start from 2,000-3,000 MAD, premium riads run from 3,000-6,000 MAD, and ultra-luxury properties like Royal Mansour can exceed 15,000 MAD. Seasonal pricing varies, with peak season (October-April) being most expensive.' },
              { q: 'Should I book a riad in the medina or outside?', a: 'A medina riad offers the most authentic experience — immersed in the historic quarter with easy access to souks and landmarks on foot. However, medina riads require navigating narrow streets. If you prefer easier access, consider riads in the Palmerie or Ville Nouvelle areas. Most luxury medina riads arrange porters for luggage.' },
              { q: 'Do luxury riads have private hammams?', a: 'Many luxury riads feature private hammams or in-house spa facilities. Properties like Royal Mansour, La Mamounia, and Riad Fes all have world-class hammam services. Some offer in-room hammam experiences or private couple sessions. Treatments typically start from 800 MAD.' },
              { q: 'What is the best time of year to stay in a luxury riad?', a: 'Spring (March-May) and autumn (September-November) offer the best weather for Marrakech and Fes. Summer can reach 40+C inland, though coastal riads in Essaouira stay pleasant. Winter brings mild days but cool evenings — riads with heated courtyards and fireplaces are ideal.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-riads-vs-hotels" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Riads vs Hotels
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A detailed comparison to help you choose between a traditional riad and a modern hotel in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s best spa experiences and traditional hammams, from public bathhouses to luxury retreats.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-romantic-getaways" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Romantic Getaways
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most romantic destinations, riads, and experiences for couples traveling in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-all-inclusive" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                All-Inclusive Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top all-inclusive resorts and packages in Morocco for a hassle-free luxury vacation experience.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}