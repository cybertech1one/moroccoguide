import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
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
  Calendar,
  Bed,
  Globe,
  Lightbulb,
  Key,
  ThumbsUp,
  Scale,
  XCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Riad vs Hotel in Morocco 2026 | Which Should You Choose? Complete Comparison',
  description:
    'Should you stay in a riad or hotel in Morocco? Complete side-by-side comparison of riads vs hotels covering atmosphere, price, location, amenities, breakfast, privacy, and who each option suits best. Best riads and hotels by city with prices from 400 MAD.',
  keywords: [
    'riad vs hotel Morocco',
    'should I stay in a riad',
    'Moroccan riad experience',
    'Morocco hotel or riad',
    'riad advantages Morocco',
    'hotel advantages Morocco',
    'best riads Morocco 2026',
    'best hotels Morocco 2026',
    'riad price comparison',
    'Morocco accommodation guide',
    'riad Marrakech vs hotel',
    'riad Fes vs hotel',
    'luxury riad Morocco',
    'budget riad Morocco',
    'Morocco where to stay',
    'riad booking tips',
    'first time Morocco riad',
    'Morocco travel accommodation',
    'riad courtyard Morocco',
    'five star hotel Morocco',
  ],
  openGraph: {
    title: 'Riad vs Hotel in Morocco 2026 | Which Should You Choose?',
    description:
      'The definitive riad vs hotel comparison for Morocco travelers. Atmosphere, price, location, amenities, and honest advice on which suits your travel style. Prices from 400 MAD.',
    url: `${BASE_URL}/morocco-riads-vs-hotels`,
    images: [
      {
        url: `${BASE_URL}/images/art-moroccan-riad-courtyard.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan riad courtyard with zellige tilework and lush greenery compared to a modern hotel lobby',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riad vs Hotel in Morocco 2026 | Complete Comparison Guide',
    description:
      'Should you stay in a riad or hotel? Side-by-side comparison covering price, atmosphere, amenities, and who each suits. From 400 MAD per night.',
    images: [`${BASE_URL}/images/art-moroccan-riad-courtyard.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-riads-vs-hotels` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-riads-vs-hotels`,
  name: 'Riad vs Hotel in Morocco 2026 | Which Should You Choose? Complete Comparison',
  description:
    'Comprehensive comparison of riads versus hotels in Morocco. Covers atmosphere, pricing, location, amenities, breakfast, best options by city, and traveler profiles for each. Prices from 400 MAD per night.',
  url: `${BASE_URL}/morocco-riads-vs-hotels`,
  image: `${BASE_URL}/images/art-moroccan-riad-courtyard.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-riads-vs-hotels`,
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
      { '@type': 'ListItem', position: 2, name: 'Riads vs Hotels', item: `${BASE_URL}/morocco-riads-vs-hotels` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I stay in a riad or hotel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you want an authentic Moroccan experience with courtyard architecture, home-cooked breakfasts, and personal hospitality, choose a riad. If you need elevators, large pools, fitness centers, on-site parking, or standardized Western-style amenities, a hotel is more practical. Many travelers recommend staying in a riad for at least part of your trip, as the experience is uniquely Moroccan and cannot be replicated in a hotel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are riads cheaper than hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally yes. Budget riads start from 400 MAD per night with breakfast included, while comparable hotels start from 600 MAD, often without breakfast. At the mid-range and luxury tiers, riads typically offer better value because breakfast is almost always included, rooms are individually decorated, and the personal service exceeds what hotels provide at the same price point.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a riad suitable for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riads can work for families, but there are considerations. Most riads have steep stairs, no elevators, and open courtyards with water features that require supervision of small children. Noise carries easily in the intimate setting. Hotels with family pools, kids clubs, and ground-floor rooms may be more practical for families with young children. Older children often love the adventure of staying in a riad.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do riads have air conditioning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mid-range and luxury riads almost always have air conditioning. Budget riads may rely on traditional thick-walled construction, ceiling fans, and the naturally cool courtyard design. The traditional architecture is remarkably effective at keeping interiors cool in summer, but if you visit in July or August, confirm air conditioning before booking, especially in Marrakech and Fes where temperatures exceed 40 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I park my rental car at a riad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Riads are located inside medinas where cars cannot enter. You will need to park in a nearby public parking lot (from 30 MAD per night) or arrange parking through your riad, which often has arrangements with nearby garages. Hotels in the ville nouvelle typically offer on-site parking. If you are driving in Morocco, consider staying at a hotel for your first and last nights for easier car access.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best city to stay in a riad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech has the largest selection with over 1,000 riads ranging from budget to palatial luxury. Fes offers the most architecturally significant riads in historic palace buildings at better value than Marrakech. Essaouira provides a relaxed coastal riad experience with ocean breezes. Chefchaouen offers unique blue-washed riads with mountain views. For first-timers, Marrakech or Fes provides the quintessential riad experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to book a riad far in advance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For peak season (December, January, Easter, and major holidays), book 3 to 6 months ahead, especially for popular riads with fewer than 10 rooms. During shoulder season (March to May, September to November), 4 to 8 weeks is usually sufficient. In low season (June to August inland), last-minute bookings are often possible at discounted rates. Hotels generally have more availability year-round due to larger room counts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I split my stay between a riad and a hotel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely, and many experienced Morocco travelers recommend this approach. Start with a riad in the medina for cultural immersion and authentic experiences, then switch to a hotel if you want a pool day, gym access, or a break from medina intensity. This combination gives you the best of both worlds without committing entirely to either style for your whole trip.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD VS HOTEL COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonTable = [
  { feature: 'Location', riad: 'Inside the medina (historic old city)', hotel: 'Ville nouvelle (modern district) or resort areas' },
  { feature: 'Atmosphere', riad: 'Intimate, personal, like visiting a home', hotel: 'Professional, standardized, familiar' },
  { feature: 'Size', riad: '3-15 rooms, you know every guest', hotel: '50-300+ rooms, mostly anonymous' },
  { feature: 'Architecture', riad: 'Courtyard house with zellige, stucco, cedar', hotel: 'Modern international construction' },
  { feature: 'Breakfast', riad: 'Home-cooked Moroccan spread, always included', hotel: 'Buffet style, sometimes extra charge' },
  { feature: 'Staff', riad: 'Owner/family, personal connection', hotel: 'Professional team, shift rotations' },
  { feature: 'Pool', riad: 'Small plunge pool or none', hotel: 'Full-size pool, often heated' },
  { feature: 'Parking', riad: 'No on-site parking, cars cannot enter medina', hotel: 'On-site parking usually available' },
  { feature: 'Elevator', riad: 'No elevator, steep traditional stairs', hotel: 'Elevator standard in 3-star and above' },
  { feature: 'Wi-Fi', riad: 'Available but thick walls weaken signal', hotel: 'Strong, reliable throughout property' },
  { feature: 'Noise', riad: 'Medina sounds, call to prayer, roosters', hotel: 'Soundproofed, quieter rooms' },
  { feature: 'Privacy', riad: 'Shared courtyard, social atmosphere', hotel: 'More private, anonymous experience' },
  { feature: 'Cultural immersion', riad: 'Deep, authentic Moroccan living', hotel: 'Comfortable but could be anywhere' },
  { feature: 'Price (budget)', riad: 'From 400 MAD with breakfast', hotel: 'From 600 MAD, breakfast often extra' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD PROS AND CONS
   ═══════════════════════════════════════════════════════════════ */

const riadPros = [
  'Authentic Moroccan architecture and craftsmanship',
  'Generous home-cooked breakfast always included',
  'Personal attention from staff who know you by name',
  'Located in the heart of the medina, steps from souks and monuments',
  'Rooftop terrace with panoramic city views',
  'Unique, individually decorated rooms',
  'Better value at most price points',
  'Dinner on request, often the best meal of your trip',
] as const;

const riadCons = [
  'No elevator, steep stairs with heavy luggage',
  'No on-site parking, walk from car drop-off point',
  'Thin walls and medina noise (call to prayer at 5 AM)',
  'Small or no swimming pool',
  'No gym or fitness center',
  'Can be difficult to find on first arrival',
  'Limited accessibility for mobility-impaired travelers',
  'Courtyard amplifies sound from other guests',
] as const;

const hotelPros = [
  'Elevator, parking, and full accessibility',
  'Large swimming pool, gym, and spa facilities',
  'Soundproofed rooms for light sleepers',
  'Reliable strong Wi-Fi throughout',
  'Room service and 24-hour reception',
  'Familiar international standards and brands',
  'Better for families with young children',
  'Easy taxi and car access at the door',
] as const;

const hotelCons = [
  'Generic atmosphere, could be anywhere in the world',
  'Usually located outside the medina, away from the action',
  'Breakfast often extra or basic buffet',
  'Impersonal service with staff rotations',
  'Higher prices for comparable quality',
  'No rooftop terrace with medina views',
  'Rooms are standardized, not individually designed',
  'Misses the essential Moroccan cultural experience',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST RIADS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestRiadsByCity = [
  {
    city: 'Marrakech',
    description: 'The riad capital of Morocco with over 1,000 properties. From palatial luxury riads with heated pools to intimate budget gems steps from Jemaa el-Fnaa. Marrakech riads are the most cosmopolitan, often featuring European-Moroccan fusion design.',
    topPicks: ['Riad Kniza (luxury, from 2,800 MAD)', 'Riad Yasmine (mid-range, from 1,200 MAD)', 'Riad Cinnamon (budget, from 450 MAD)'],
    priceRange: 'From 400 MAD to 8,000 MAD per night',
    image: '/images/hero-marrakech.webp',
  },
  {
    city: 'Fes',
    description: 'Home to the most architecturally significant riads in the Arab world. Many occupy centuries-old palaces with extraordinary zellige, carved stucco, and painted cedar. Better value than Marrakech with comparable or superior craftsmanship.',
    topPicks: ['Riad Fes (luxury, from 2,500 MAD)', 'Riad Laaroussa (boutique, from 1,600 MAD)', 'Riad Lune et Soleil (budget, from 400 MAD)'],
    priceRange: 'From 400 MAD to 5,000 MAD per night',
    image: '/images/hero-fes-medina.webp',
  },
  {
    city: 'Essaouira',
    description: 'Coastal riads with a bohemian Atlantic vibe. Whitewashed walls, blue accents, ocean breezes, and rooftop terraces with sea views. The compact medina makes navigation easy and riad living less intense than inland cities.',
    topPicks: ['Riad Chbanate (luxury, from 2,000 MAD)', 'Riad Baladin (mid-range, from 900 MAD)', 'Dar Ness (budget, from 450 MAD)'],
    priceRange: 'From 400 MAD to 3,000 MAD per night',
    image: '/images/hero-essaouira.webp',
  },
  {
    city: 'Chefchaouen',
    description: 'Unique blue-washed riads in the Rif Mountains. Mountain views, cooler temperatures, and an enchanting palette of blue. Fewer properties than Marrakech or Fes, so booking ahead is essential during peak months.',
    topPicks: ['Lina Ryad (luxury, from 1,800 MAD)', 'Casa Hassan (mid-range, from 800 MAD)', 'Dar Echchaouen (budget, from 400 MAD)'],
    priceRange: 'From 400 MAD to 2,500 MAD per night',
    image: '/images/hero-chefchaouen-blue.webp',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST HOTELS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestHotelsByCity = [
  {
    city: 'Marrakech',
    description: 'World-class international hotels in the Hivernage and Palmeraie districts. Five-star resorts with golf courses, multiple pools, and full spa facilities. Many global brands are represented including Four Seasons, Royal Mansour, and Mamounia.',
    topPicks: ['La Mamounia (5-star, from 5,000 MAD)', 'Four Seasons Marrakech (5-star, from 4,500 MAD)', 'Ibis Marrakech (budget, from 600 MAD)'],
    priceRange: 'From 600 MAD to 15,000 MAD per night',
  },
  {
    city: 'Fes',
    description: 'Hotels in the ville nouvelle offer modern comfort with views toward the medina. Fewer international luxury chains than Marrakech, but solid four and five-star options with pools, parking, and conference facilities.',
    topPicks: ['Palais Faraj (5-star, from 3,000 MAD)', 'Hotel Sahrai (5-star, from 2,500 MAD)', 'Hotel Batha (3-star, from 700 MAD)'],
    priceRange: 'From 600 MAD to 6,000 MAD per night',
  },
  {
    city: 'Essaouira',
    description: 'Beachfront hotels and resorts along the Atlantic coast. The Sofitel, Heure Bleue, and beach resort properties offer pool access, spa, and direct beach connection that medina riads cannot provide.',
    topPicks: ['Heure Bleue Palais (5-star, from 2,500 MAD)', 'Sofitel Essaouira (5-star, from 2,800 MAD)', 'Hotel des Iles (3-star, from 700 MAD)'],
    priceRange: 'From 600 MAD to 5,000 MAD per night',
  },
  {
    city: 'Casablanca',
    description: 'Morocco&apos;s business capital offers the widest selection of international chain hotels. Ideal for business travelers, airport layovers, and travelers who prefer Western-style accommodation with full amenities.',
    topPicks: ['Four Seasons Casablanca (5-star, from 4,000 MAD)', 'Hyatt Regency (5-star, from 2,500 MAD)', 'Ibis Casa Voyageurs (budget, from 550 MAD)'],
    priceRange: 'From 550 MAD to 8,000 MAD per night',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE COMPARISON BY TIER
   ═══════════════════════════════════════════════════════════════ */

const priceComparison = [
  {
    tier: 'Budget',
    riadPrice: 'From 400 MAD',
    hotelPrice: 'From 600 MAD',
    riadIncludes: 'Private room, full Moroccan breakfast, courtyard access, rooftop terrace, Wi-Fi, personal host',
    hotelIncludes: 'Private room, basic amenities, Wi-Fi, reception desk, sometimes breakfast extra',
    verdict: 'Riads offer significantly better value with included breakfast and more character',
  },
  {
    tier: 'Mid-Range',
    riadPrice: 'From 800 MAD',
    hotelPrice: 'From 1,200 MAD',
    riadIncludes: 'Decorated room, tadelakt bathroom, plunge pool, full breakfast, dinner on request, AC, tour help',
    hotelIncludes: 'Modern room, pool, restaurant, gym access, buffet breakfast, parking, elevator',
    verdict: 'Best balance point. Riads win on character; hotels win on facilities',
  },
  {
    tier: 'Boutique / 4-Star',
    riadPrice: 'From 1,500 MAD',
    hotelPrice: 'From 2,000 MAD',
    riadIncludes: 'Designer interiors, heated pool, gourmet breakfast, concierge, cooking classes, spa treatments',
    hotelIncludes: 'Full-service hotel, large pool, spa, multiple restaurants, room service, business center',
    verdict: 'Riads deliver a more memorable and intimate experience at a lower price',
  },
  {
    tier: 'Luxury / 5-Star',
    riadPrice: 'From 2,500 MAD',
    hotelPrice: 'From 4,000 MAD',
    riadIncludes: 'Palatial property, private hammam, butler service, gourmet restaurant, airport transfer, exclusive tours',
    hotelIncludes: 'World-class resort, multiple pools, full spa, golf, kids club, fine dining, branded luxury standards',
    verdict: 'Both are excellent. Riads for intimate luxury; hotels for resort-style grandeur',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHO SHOULD CHOOSE WHICH
   ═══════════════════════════════════════════════════════════════ */

const chooseRiad = [
  { profile: 'First-time visitors to Morocco', reason: 'The riad experience is quintessentially Moroccan and cannot be replicated anywhere else. It is the single best way to immerse yourself in the culture.' },
  { profile: 'Couples and honeymooners', reason: 'The romantic atmosphere of a courtyard riad with candlelit dinners, rooftop terraces, and intimate spaces is ideal for couples.' },
  { profile: 'Solo travelers', reason: 'The communal courtyard and rooftop encourage socializing with other guests and staff, reducing the isolation solo travelers sometimes feel in hotels.' },
  { profile: 'Culture and architecture enthusiasts', reason: 'Living inside centuries-old zellige and carved stucco architecture is an experience in itself. Many riads are museums you can sleep in.' },
  { profile: 'Food lovers', reason: 'Riad breakfasts and dinners are often the best meals of your trip, prepared with fresh market ingredients by skilled family cooks.' },
  { profile: 'Budget travelers', reason: 'Riads offer better value at every price point, especially with breakfast always included in the rate.' },
] as const;

const chooseHotel = [
  { profile: 'Families with young children', reason: 'Hotels offer child-friendly pools, ground-floor rooms, elevators, and kids clubs. Riads have steep stairs and open water features requiring constant supervision.' },
  { profile: 'Travelers with mobility needs', reason: 'Hotels have elevators, wide corridors, and accessible rooms. Most riads have steep, narrow stairs and are not wheelchair-friendly.' },
  { profile: 'Light sleepers', reason: 'Soundproofed hotel rooms protect against the 5 AM call to prayer, roosters, and medina noise that is part of riad life.' },
  { profile: 'Business travelers', reason: 'Hotels offer conference rooms, reliable Wi-Fi, room service, and the predictable standards that business travel requires.' },
  { profile: 'Drivers with rental cars', reason: 'Hotels have on-site parking. Riads are in car-free medinas, requiring you to walk from a distant parking area with your luggage.' },
  { profile: 'Resort-style vacationers', reason: 'If you want pool days, all-inclusive options, a gym, and a beach club, a hotel or resort is the right choice.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTipsData = [
  {
    title: 'Book Riads Directly for Better Rates',
    icon: Globe,
    description: 'Most riads offer 10 to 20 percent lower rates through their website or email. Direct bookings unlock perks like room upgrades, free hammam sessions, or airport transfers. Booking platforms charge riads 15-25% commission, so your direct booking saves them money and they pass savings to you.',
  },
  {
    title: 'Compare Hotels on Multiple Platforms',
    icon: Scale,
    description: 'Hotel prices vary significantly across booking sites. Check Booking.com, Hotels.com, the hotel website directly, and Google Hotels. Business hotels often have better rates on their own website, especially with loyalty programs. Always compare at least three sources before booking.',
  },
  {
    title: 'Read Reviews About Noise and Access',
    icon: ShieldCheck,
    description: 'For riads, check reviews about noise levels and the walk from the car drop-off. For hotels, read about pool size, breakfast quality, and whether the location feels safe at night. Recent reviews (within 6 months) are most reliable as management can change.',
  },
  {
    title: 'Travel in Shoulder Season for Best Value',
    icon: Calendar,
    description: 'March to May and September to November offer pleasant weather, lower prices, and better availability at both riads and hotels. Peak periods (Christmas, New Year, Easter) can see prices double. Summer is cheapest inland but extremely hot in Marrakech and Fes.',
  },
  {
    title: 'Consider Splitting Your Stay',
    icon: Bed,
    description: 'Many experienced travelers recommend a split approach: start in a riad for cultural immersion, then move to a hotel for pool access and a change of pace. This combination gives the best of both worlds without compromising on either experience.',
  },
  {
    title: 'Ask About the Walking Distance',
    icon: Key,
    description: 'Before booking a riad, ask how far the walk is from the nearest car or taxi drop-off point. It can range from 2 to 15 minutes through narrow lanes. If you have heavy luggage, ask whether the riad provides a porter. Hotels typically have direct door access.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Should I stay in a riad or hotel in Morocco?',
    answer: 'If you want an authentic Moroccan experience with courtyard architecture, home-cooked breakfasts, and personal hospitality, choose a riad. If you need elevators, large pools, fitness centers, on-site parking, or standardized Western-style amenities, a hotel is more practical. Many travelers recommend staying in a riad for at least part of your trip, as the experience is uniquely Moroccan.',
  },
  {
    question: 'Are riads cheaper than hotels in Morocco?',
    answer: 'Generally yes. Budget riads start from 400 MAD per night with breakfast included, while comparable hotels start from 600 MAD, often without breakfast. At mid-range and luxury tiers, riads typically offer better value because breakfast is always included, rooms are individually decorated, and personal service exceeds what hotels provide at the same price point.',
  },
  {
    question: 'Is a riad suitable for families with children?',
    answer: 'Riads can work for families, but most have steep stairs, no elevators, and open courtyards with water features requiring supervision of small children. Noise carries easily in the intimate setting. Hotels with family pools, kids clubs, and ground-floor rooms may be more practical for young children. Older children often love the adventure of riad life.',
  },
  {
    question: 'Do riads have air conditioning?',
    answer: 'Mid-range and luxury riads almost always have air conditioning. Budget riads may rely on traditional thick-walled construction, ceiling fans, and the naturally cool courtyard design. If visiting in July or August, confirm AC before booking, especially in Marrakech and Fes where temperatures can exceed 40 degrees Celsius.',
  },
  {
    question: 'Can I park my rental car at a riad?',
    answer: 'No. Riads are inside medinas where cars cannot enter. You will park in a nearby public lot (from 30 MAD per night) or use arrangements the riad has with nearby garages. Hotels in the ville nouvelle typically offer on-site parking. Consider a hotel for your first and last nights if you are driving.',
  },
  {
    question: 'What is the best city to stay in a riad?',
    answer: 'Marrakech has the largest selection with over 1,000 riads. Fes offers the most architecturally significant riads at better value. Essaouira provides a relaxed coastal riad experience. Chefchaouen offers unique blue-washed riads with mountain views. For first-timers, Marrakech or Fes provides the quintessential riad experience.',
  },
  {
    question: 'Do I need to book a riad far in advance?',
    answer: 'For peak season (December, January, Easter), book 3 to 6 months ahead, especially for popular riads with fewer than 10 rooms. During shoulder season, 4 to 8 weeks is enough. In low season (June to August inland), last-minute bookings are possible at discounted rates. Hotels have more year-round availability due to larger room counts.',
  },
  {
    question: 'Can I split my stay between a riad and a hotel?',
    answer: 'Absolutely, and many experienced travelers recommend this. Start in a riad for cultural immersion, then switch to a hotel for a pool day, gym access, or a break from medina intensity. This combination gives you the best of both worlds without committing entirely to either style for your whole trip.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRiadsVsHotelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/art-moroccan-riad-courtyard.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Riads vs Hotels</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            Accommodation Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Riad vs Hotel in Morocco
            <br className="hidden md:block" /> Which Should You Choose?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The definitive comparison for every traveler. Atmosphere, price, amenities,
            location, and honest advice on whether a traditional riad or modern hotel
            is right for your Morocco trip. Prices from 400 MAD per night.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Most Important Decision for Your Morocco Trip
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Where you sleep in Morocco shapes your entire experience. A riad places
                you inside centuries-old medina walls, waking to birdsong in a tiled
                courtyard and eating a home-cooked breakfast on a rooftop terrace with
                views over minarets and mountains. A hotel delivers the predictable
                comfort of air-conditioned lobbies, swimming pools, fitness centers, and
                easy parking.
              </p>
              <p>
                Neither is objectively better. The right choice depends entirely on your
                travel style, priorities, and who you are traveling with. A couple seeking
                romance and cultural immersion will thrive in a riad. A family with
                toddlers may find a hotel more practical. A solo traveler may discover that
                a riad&apos;s communal courtyard is the best place to meet fellow adventurers.
              </p>
              <p>
                This guide provides an honest, side-by-side comparison of riads and hotels
                in Morocco. We cover the differences in atmosphere, price, location,
                amenities, and service. We list the best riads and hotels in each major
                city with real price ranges. And we help you decide which option, or which
                combination, will make your Morocco trip unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Is a Riad? ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Is a Riad?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the traditional Moroccan riad is essential before comparing it to a hotel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-courtyard.webp"
                alt="Traditional Moroccan riad courtyard with zellige tilework, central fountain, and lush orange trees"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">A typical riad courtyard</p>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                A riad is a traditional Moroccan house built around an interior courtyard
                garden. The word comes from the Arabic &quot;ryad,&quot; meaning garden. These
                historic homes, found within medina walls, feature inward-facing
                architecture with central courtyards containing fountains, zellige
                tilework, carved stucco, and citrus trees.
              </p>
              <p>
                From the street, a riad looks like a plain wooden door in a blank wall.
                Step through that door and you enter a world of shimmering tilework,
                trickling fountains, and the scent of orange blossom. This dramatic
                contrast between public and private is fundamental to Moroccan culture.
              </p>
              <p>
                Today, hundreds of these historic homes have been converted into
                guesthouses offering 3 to 15 rooms, providing travelers with an
                intimate, personal alternative to conventional hotels. The riad
                experience is uniquely Moroccan and cannot be found anywhere else in
                the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad vs Hotel: Side-by-Side Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest look at how riads and hotels compare across every factor that
            matters to travelers.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Feature</div>
                <div className="p-3 px-4">Riad</div>
                <div className="p-3 px-4">Hotel</div>
              </div>
              {comparisonTable.map((item, i) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.feature}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.riad}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.hotel}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    The Bottom Line
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    If you are visiting Morocco for the first time, stay in a riad for at
                    least two or three nights. The courtyard architecture, home-cooked
                    breakfasts, rooftop terraces, and personal attention from staff create
                    memories that no hotel chain can match. If you also need a pool, gym,
                    or easy parking, consider splitting your stay between a riad and a hotel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros and Cons ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ThumbsUp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pros and Cons of Each
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Riad Pros/Cons */}
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] text-white p-4 text-center">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">Riad</h3>
              </div>
              <div className="p-6">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                  Advantages
                </h4>
                <div className="space-y-2 mb-6">
                  {riadPros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                      {pro}
                    </div>
                  ))}
                </div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                  Disadvantages
                </h4>
                <div className="space-y-2">
                  {riadCons.map((con) => (
                    <div key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                      {con}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotel Pros/Cons */}
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] text-white p-4 text-center">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">Hotel</h3>
              </div>
              <div className="p-6">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                  Advantages
                </h4>
                <div className="space-y-2 mb-6">
                  {hotelPros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                      {pro}
                    </div>
                  ))}
                </div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                  Disadvantages
                </h4>
                <div className="space-y-2">
                  {hotelCons.map((con) => (
                    <div key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <XCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                      {con}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Riads by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct riad character. Here are the top picks at every budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bestRiadsByCity.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`Riad courtyard and traditional architecture in ${city.city}, Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {city.city} Riads
                    </h3>
                    <p className="text-sm text-white/80">{city.priceRange}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {city.description}
                  </p>
                  <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                    Top Picks
                  </h4>
                  <div className="space-y-2">
                    {city.topPicks.map((pick) => (
                      <div key={pick} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <Star className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {pick}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are approximate and vary by season. Seasonal pricing applies during peak periods (Christmas, New Year, Easter), when rates may increase by 30-100%.
          </p>
        </div>
      </section>

      {/* ── Best Hotels by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hotels by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s best hotels offer world-class amenities and international standards for travelers who prefer that style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bestHotelsByCity.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {city.city} Hotels
                  </h3>
                  <div className="inline-block px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {city.priceRange}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {city.description}
                </p>
                <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                  Top Picks
                </h4>
                <div className="space-y-2">
                  {city.topPicks.map((pick) => (
                    <div key={pick} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <Award className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {pick}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Hotel prices vary by season and booking platform. Seasonal pricing applies during peak periods and prices shown are starting rates for the most affordable room type.
          </p>
        </div>
      </section>

      {/* ── Price Comparison by Tier ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Price Comparison by Tier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How riads and hotels compare at every budget level, with what your money gets you.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All riad prices include breakfast. Hotel breakfast is sometimes extra. Seasonal pricing applies during peak travel periods.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {priceComparison.map((tier) => (
              <div key={tier.tier} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-accent)] text-white p-4">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">{tier.tier}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Gem className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          Riad: {tier.riadPrice}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{tier.riadIncludes}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Building className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          Hotel: {tier.hotelPrice}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{tier.hotelIncludes}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Verdict:</span> {tier.verdict}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Should Choose Which ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Who Should Choose a Riad vs a Hotel?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your travel profile determines which option will make your Morocco trip most enjoyable.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
                <Heart className="w-6 h-6 inline-block text-[var(--color-accent)] mr-2" />
                Choose a Riad If You Are...
              </h3>
              <div className="space-y-4">
                {chooseRiad.map((item) => (
                  <div key={item.profile} className="card-moroccan p-5">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {item.profile}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
                <Building className="w-6 h-6 inline-block text-[var(--color-accent)] mr-2" />
                Choose a Hotel If You Are...
              </h3>
              <div className="space-y-4">
                {chooseHotel.map((item) => (
                  <div key={item.profile} className="card-moroccan p-5">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {item.profile}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Smart Booking Tips for Both Riads and Hotels
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for finding, booking, and getting the most value from your Morocco accommodation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTipsData.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions: Riads vs Hotels in Morocco
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Riads Overview
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Browse all riads across Morocco with city-by-city listings.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/riad-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Riad Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to architecture, etiquette, and choosing the right riad.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-riad-experience" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Riad Experience
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                What staying in a riad is really like, from arrival to checkout.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads 2026
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top 20 hand-picked riads across Marrakech, Fes, and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Accommodations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to every type of accommodation in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-hotels" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Hotels
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s finest five-star hotels and luxury resorts.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/photo-riad-rooftop-sunset.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Choose Your Morocco Stay?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Whether you choose a riad with a courtyard fountain and rooftop sunsets
            or a hotel with a pool and room service, Morocco will captivate you. The
            only wrong choice is not going at all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-best-riads"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Crown className="w-5 h-5" />
              Browse the Best Riads
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-5 h-5" />
              Explore All Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
