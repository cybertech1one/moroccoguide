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
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  Crown,
  Waves,
  Mountain,
  UtensilsCrossed,
  Calendar,
  Gem,
  Shield,
  Wine,
  Sun,
  Globe,
  Phone,
  Bed,
  MessageCircleQuestion,
  BookOpen,
  Flower2,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-luxury-hotels`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Best Luxury Hotels in Morocco 2026 | 5-Star Palaces, Resorts & Desert Retreats',
  description:
    'Guide to the 15 best luxury hotels in Morocco — Royal Mansour, La Mamounia, Amanjena, Four Seasons Marrakech, Kasbah Tamadot, and more. Room rates from 2,500 MAD, seasonal pricing, spa packages, fine dining, and booking strategies for 2026.',
  keywords: [
    'luxury hotels morocco',
    'best 5 star hotels morocco',
    'morocco palace hotels',
    'luxury resorts marrakech',
    'Royal Mansour Marrakech',
    'La Mamounia hotel',
    'Amanjena Marrakech',
    'Mandarin Oriental Marrakech',
    'Four Seasons Marrakech',
    'Kasbah Tamadot Morocco',
    'luxury riads Morocco',
    'morocco 5 star resorts',
    'best hotels Fes Morocco',
    'luxury desert hotel Morocco',
    'Dar Ahlam Morocco',
    'morocco honeymoon hotels',
    'luxury golf resort Morocco',
    'Morocco palace stay',
    'boutique luxury Morocco',
    'morocco hotel prices 2026',
  ],
  openGraph: {
    title: 'Best Luxury Hotels in Morocco 2026 | 5-Star Palaces & Resorts',
    description:
      'The definitive guide to Morocco\'s finest hotels. 15 hand-picked properties from Marrakech palaces to desert retreats, with real prices and booking tips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-luxury-hotels.webp`,
        width: 1200,
        height: 630,
        alt: 'Grand courtyard of a luxury Moroccan palace hotel with a central fountain, zellige tilework, and lush gardens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Luxury Hotels in Morocco 2026 | 5-Star Palaces & Resorts',
    description:
      'From Royal Mansour\'s private riads to Sahara desert retreats. 15 top luxury hotels across Morocco with rates, seasonal pricing, and insider booking tips.',
    images: [`${BASE_URL}/images/hero-luxury-hotels.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the most expensive hotel in Morocco?',
    a: 'Royal Mansour Marrakech holds the title, with its three-bedroom Grand Riad suites priced above 100,000 MAD per night. Each riad is a standalone three-story house with a private plunge pool, rooftop terrace, and dedicated butler. La Mamounia\'s Churchill Suite and Amanjena\'s Maison also rank among the most expensive accommodations in North Africa.',
  },
  {
    q: 'When is the cheapest time to book luxury hotels in Morocco?',
    a: 'July and August offer the lowest rates at most luxury properties (30-50% below peak), because daytime temperatures in Marrakech regularly exceed 40 degrees Celsius. Ramadan periods also see reduced rates. The exception: coastal hotels in Essaouira and Tamouda Bay charge peak rates during summer since Europeans flock to the coast to escape inland heat.',
  },
  {
    q: 'Do luxury hotels in Morocco serve alcohol?',
    a: 'Yes. All international 5-star hotels and most upscale Moroccan-owned properties hold liquor licenses. Expect full bars, wine lists featuring Moroccan labels from the Meknes region, and craft cocktail programs. Minibar selections typically include local beer (Casablanca, Flag Speciale) and imported spirits. Some boutique riads in the medina may not serve alcohol — confirm before booking if this matters to you.',
  },
  {
    q: 'Is Morocco safe for luxury travelers?',
    a: 'Morocco ranks among the safest destinations in Africa for tourists. Luxury hotels provide airport transfers, private guides, and 24-hour security. The Tourist Police (Brigade Touristique) patrol major cities. Credit card fraud is rare at reputable hotels. The biggest practical concern is aggressive touts in medina areas, which hotel concierges help you navigate.',
  },
  {
    q: 'Should I stay in a luxury riad or a 5-star resort hotel?',
    a: 'Riads deliver intimate, culturally immersive stays — think 6-12 rooms, central courtyards, and home-cooked meals. Resort hotels offer pools, spas, golf courses, kids\' clubs, and international dining. For a first visit, split your stay: two nights in a luxury riad inside the medina, then move to a resort property for the remaining nights.',
  },
  {
    q: 'How far in advance should I book luxury hotels in Morocco?',
    a: 'For peak season (October-November, March-April) and the December holidays, book 4-6 months ahead. Royal Mansour and La Mamounia frequently sell out 3+ months in advance for these windows. For summer stays, 4-6 weeks is sufficient. Some properties like Dar Ahlam only have 14 suites, so availability is always tight regardless of season.',
  },
  {
    q: 'Do Morocco luxury hotels include breakfast?',
    a: 'Most 5-star properties include breakfast in the room rate — typically a lavish buffet with Moroccan pastries (msemen, baghrir), fresh-squeezed orange juice, argan oil with honey, and international options. Some boutique properties offer a la carte breakfast menus. Always confirm inclusions when comparing rates, as breakfast at these hotels can cost from 400 to 800 MAD per person if purchased separately.',
  },
  {
    q: 'What is the best luxury hotel in Morocco for a honeymoon?',
    a: 'Royal Mansour and Amanjena top the honeymoon list. Royal Mansour offers private three-story riads where couples see no other guests, with rose petal turndowns and rooftop dinners. Amanjena creates a sense of remoteness just 15 minutes from the medina, with desert-pink pavilions and private garden courtyards. Dar Ahlam in Skoura is another strong pick — only 14 suites, and the chef prepares surprise meals in a different location each evening.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Best Luxury Hotels in Morocco 2026 | 5-Star Palaces, Resorts & Desert Retreats',
  description:
    'Comprehensive guide to 15 of Morocco\'s best luxury hotels — palace properties, international 5-star resorts, and boutique desert retreats across Marrakech, Fes, Rabat, Tangier, and the Sahara.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-luxury-hotels.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Luxury Hotels in Morocco', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: TOP 15 LUXURY HOTELS
   ================================================================ */

const TOP_HOTELS = [
  { name: 'Royal Mansour', city: 'Marrakech', type: 'Palace', stars: 5, from: 12000, highlight: 'King Mohammed VI\'s showcase property. Each unit is a private three-story riad with its own plunge pool and rooftop terrace. Staff-to-room ratio of 26:1 — the highest of any hotel in Africa. The underground tunnel network lets butlers deliver meals without being seen.', dining: 'La Grande Table Marocaine (Yannick All\u00e9no), La Grande Table Fran\u00e7aise, Le Jardin', spa: '2,500 sqm spa with hammam, vitality pool, and beauty salon. Signature treatment uses argan oil, saffron, and rose water — from 1,500 MAD.' },
  { name: 'La Mamounia', city: 'Marrakech', type: 'Palace', stars: 5, from: 5500, highlight: 'Opened in 1923, restored by Jacques Garcia for 1.4 billion MAD. Eight hectares of gardens where Winston Churchill painted. Art Deco bones meet Moorish geometry. The Churchill Suite is among the most sought-after hotel rooms in Africa.', dining: 'Le Marocain (classic tagines, pastilla), L\'Italien (wood-fired), Le Pavillon de la Piscine', spa: 'Full hammam circuit, indoor pool, and beauty treatments using the hotel\'s own cosmetic line — from 900 MAD.' },
  { name: 'Amanjena', city: 'Marrakech', type: 'Resort', stars: 5, from: 8500, highlight: 'Aman Resorts\' first African property. Rose-pink pavilions circle a central basin (bassin) inspired by the 12th-century Menara reflecting pool. Designed by the late Kerry Hill. Each pavilion includes an outdoor fireplace and private garden. Just 32 units total.', dining: 'The Thai Restaurant, The Nama (farm-to-table, organic garden on-site)', spa: 'Six treatment rooms, hammam, cold plunge pool, yoga pavilion. Aman skincare product line — from 1,200 MAD.' },
  { name: 'Mandarin Oriental', city: 'Marrakech', type: 'Resort', stars: 5, from: 6000, highlight: '54 private villas each with a heated pool, spread across 20 hectares of olive groves on the Route de la Palmeraie. Designed by Pascal Desprez. The sense of space here is unmatched — some villas sit 100 meters from their nearest neighbor.', dining: 'Ling Ling (Hakkasan Group, Pan-Asian), Mes\'lalla (Moroccan), Pool Garden', spa: '1,800 sqm spa with nine treatment suites, vitality pool, and a hammam using black soap and rhassoul clay — from 1,000 MAD.' },
  { name: 'Four Seasons Resort', city: 'Marrakech', type: 'Resort', stars: 5, from: 5000, highlight: 'The best family-friendly luxury property in Morocco. Three swimming pools, a year-round kids\' club, and direct sightlines to the Koutoubia Mosque minaret from the garden suites. The 16-hectare grounds include Andalusian and Moorish garden zones.', dining: 'BLEU (Mediterranean), Solano (Italian poolside), Inara (Moroccan lounge)', spa: 'Full-service spa and fitness center. Hammam rituals, couples treatment rooms, outdoor relaxation garden — from 800 MAD.' },
  { name: 'Palais Namaskar', city: 'Marrakech', type: 'Palace', stars: 5, from: 7000, highlight: 'Designed by Imaad Rahmouni. Water palaces literally float above reflecting pools. Lake-view villas overlook a backdrop of Atlas Mountain peaks. The architecture channels a fantasy of water, stone, and light that feels more cinematic than real.', dining: 'Le Namaskar (French-Moroccan fusion), pool bar, private dining on request', spa: 'Signature treatments in overwater pavilions. Traditional hammam plus Asian-influenced body rituals — from 1,100 MAD.' },
  { name: 'Kasbah Tamadot', city: 'Atlas Mountains', type: 'Boutique', stars: 5, from: 4500, highlight: 'Richard Branson\'s Virgin Limited Edition property, perched at 1,200 meters altitude in the village of Asni. 28 rooms furnished with antiques Branson collected personally. Infinity pool with panoramic Atlas views. Mule treks to Berber villages depart from the front gate.', dining: 'Kanoun (Moroccan), Asounfou (international), Atlas-view terrace breakfast', spa: 'Indoor heated pool, hammam, and six treatment rooms using local botanicals — from 700 MAD.' },
  { name: 'La Sultana Marrakech', city: 'Marrakech', type: 'Boutique', stars: 5, from: 4500, highlight: 'Five connected riads form this 28-room property, steps from the Saadian Tombs. Each room has a distinct theme — no two look alike. The rooftop pool and terrace offer a 360-degree panorama of the medina rooftops with the Atlas range behind.', dining: 'La Table de La Sultana (Moroccan-Mediterranean), rooftop bar', spa: 'Underground hammam and spa carved into the original riad foundations. Argan oil and orange blossom treatments — from 600 MAD.' },
  { name: 'Sofitel Marrakech Lounge & Spa', city: 'Marrakech', type: 'Hotel', stars: 5, from: 3500, highlight: 'Contemporary French-Moroccan design along Avenue du President Kennedy. The So Spa covers 2,000 sqm with a traditional hammam, fitness center, and beauty studio. A solid entry point into Marrakech luxury at a more accessible price tier.', dining: 'Le Jardin du Lotus, So Lounge, Le Marocain (traditional cuisine)', spa: 'So Spa — one of the largest hotel spas in Marrakech. Full hammam, sauna, jacuzzi, and 12 treatment cabins — from 600 MAD.' },
  { name: 'Fairmont Royal Palm', city: 'Marrakech', type: 'Resort', stars: 5, from: 4800, highlight: '18-hole golf course designed by Cabell Robinson plus a 3,500 sqm spa and private pool villas. The resort stretches across a vast estate south of Marrakech, with horse riding, tennis, and a kids\' club that rivals Four Seasons.', dining: 'Le Caravane (Moroccan), Sabra (Mediterranean grill), Al Ain poolside', spa: 'Sprawling 3,500 sqm spa complex with hammam, cryotherapy, and hydrotherapy circuits — from 800 MAD.' },
  { name: 'Banyan Tree Tamouda Bay', city: 'Tamouda Bay', type: 'Resort', stars: 5, from: 5500, highlight: '92 pool villas on the Mediterranean coast between Tangier and Tetouan. Each villa has an infinity-edge private pool. The setting is distinctly different from Marrakech — sea breezes, maritime light, and a North African Riviera atmosphere.', dining: 'Saffron (Thai), Tamouda Bay Beach Club, in-villa barbecue', spa: 'Banyan Tree Spa — Asian-inspired treatments, outdoor couple\'s pavilion, and Turkish hammam — from 900 MAD.' },
  { name: 'Ritz-Carlton Rabat, Dar Es Salam', city: 'Rabat', type: 'Hotel', stars: 5, from: 4000, highlight: 'Set within the 440-hectare Royal Dar Es Salam golf complex. Morocco\'s only Ritz-Carlton, with 120 rooms, a 1,500 sqm spa, and proximity to the Kasbah of the Udayas and Hassan Tower. The property bridges diplomatic Rabat with resort-style leisure.', dining: 'Dar Tajine (Moroccan), The Mediterranean Grill, Club Lounge', spa: 'Full Ritz-Carlton Spa with hammam, indoor pool, and a menu blending Moroccan and European techniques — from 800 MAD.' },
  { name: 'Mazagan Beach & Golf Resort', city: 'El Jadida', type: 'Resort', stars: 5, from: 3000, highlight: '500-room Atlantic beachfront mega-resort with a casino, Gary Player golf course, and the largest spa in Morocco at 5,000 sqm. Equestrian center, surf school, and indoor waterpark make this the leading family resort on the Atlantic coast.', dining: 'L\'Orient (Moroccan), Sel de Mer (seafood), Morjana (Asian), casino restaurants', spa: 'Largest in Morocco — 5,000 sqm with 26 treatment rooms, hammam, indoor pool, sauna, and ice fountain — from 500 MAD.' },
  { name: 'Dar Ahlam', city: 'Skoura (Desert)', type: 'Boutique', stars: 5, from: 9000, highlight: 'All-inclusive kasbah with only 14 suites. No menus, no set dining times, no restaurant. The chef prepares surprise meals in a different location each night — a palm grove, a rooftop, a hidden garden. Rates include all food, drinks, and curated excursions into the Draa Valley.', dining: 'No restaurant — all meals are private, location-based surprises by the resident chef', spa: 'Intimate hammam and treatment rooms within the kasbah walls. Desert-botanical treatments using local dates, rose, and argan — from 800 MAD (included in stay).' },
  { name: 'Palais Faraj Suites & Spa', city: 'Fes', type: 'Boutique', stars: 5, from: 3500, highlight: 'Perched above the Fes medina with sweeping views across the UNESCO-listed old city. 25 suites decorated in traditional Fassi style — carved stucco, hand-painted cedar ceilings, and zellige floors. The rooftop terrace at sunset is one of the most photographed hotel views in Morocco.', dining: 'L\'Ambre (Moroccan haute cuisine), Le Patio (light Mediterranean), rooftop bar', spa: 'Traditional hammam with ghassoul clay and orange blossom water treatments. Heated indoor pool — from 500 MAD.' },
] as const;

const PRICE_COMPARISON = [
  { hotel: 'Mazagan Beach & Golf', low: 3000, peak: 5500, suite: 12000 },
  { hotel: 'Sofitel Marrakech', low: 3500, peak: 6000, suite: 9000 },
  { hotel: 'Palais Faraj (Fes)', low: 3500, peak: 5500, suite: 8000 },
  { hotel: 'Ritz-Carlton Rabat', low: 4000, peak: 7000, suite: 14000 },
  { hotel: 'Kasbah Tamadot', low: 4500, peak: 7500, suite: 15000 },
  { hotel: 'La Sultana Marrakech', low: 4500, peak: 7000, suite: 12000 },
  { hotel: 'Fairmont Royal Palm', low: 4800, peak: 8000, suite: 18000 },
  { hotel: 'Four Seasons Marrakech', low: 5000, peak: 9000, suite: 20000 },
  { hotel: 'La Mamounia', low: 5500, peak: 11000, suite: 35000 },
  { hotel: 'Banyan Tree Tamouda Bay', low: 5500, peak: 9000, suite: 16000 },
  { hotel: 'Mandarin Oriental', low: 6000, peak: 10000, suite: 25000 },
  { hotel: 'Palais Namaskar', low: 7000, peak: 12000, suite: 30000 },
  { hotel: 'Amanjena', low: 8500, peak: 14000, suite: 35000 },
  { hotel: 'Dar Ahlam (all-incl.)', low: 9000, peak: 14000, suite: 22000 },
  { hotel: 'Royal Mansour', low: 12000, peak: 22000, suite: 100000 },
] as const;

const CITY_SECTIONS = [
  {
    city: 'Marrakech',
    icon: Crown,
    count: '9+',
    desc: 'The undisputed capital of Moroccan luxury hospitality. Marrakech holds more palace-classified hotels than any other city in Africa. The Palmeraie district and Hivernage quarter concentrate the major international brands, while the medina harbors converted riad gems like La Sultana.',
    hotels: ['Royal Mansour', 'La Mamounia', 'Amanjena', 'Mandarin Oriental', 'Four Seasons', 'Palais Namaskar', 'Sofitel', 'Fairmont Royal Palm', 'La Sultana'],
  },
  {
    city: 'Fes',
    icon: Building,
    count: '3-4',
    desc: 'Fes prioritizes intimate boutique luxury over mega-resorts. The standout properties — Palais Faraj, Riad Fes, and Hotel Sahrai — convert historic buildings into refined retreats overlooking the UNESCO-listed medina. Room counts stay small (under 25 rooms), and the focus leans toward gastronomy and cultural immersion.',
    hotels: ['Palais Faraj Suites & Spa', 'Riad Fes', 'Hotel Sahrai'],
  },
  {
    city: 'Rabat',
    icon: Globe,
    count: '2-3',
    desc: 'Morocco\'s capital city gained its first true international luxury player when the Ritz-Carlton opened within the Royal Dar Es Salam golf complex. Sofitel Rabat Jardin des Roses provides a second option along Boulevard de la Tour Hassan. The luxury market here remains undersaturated compared to Marrakech.',
    hotels: ['Ritz-Carlton Dar Es Salam', 'Sofitel Rabat Jardin des Roses'],
  },
  {
    city: 'Tangier & Tamouda Bay',
    icon: Waves,
    count: '3-4',
    desc: 'The northern Mediterranean coast has emerged as Morocco\'s luxury beachfront corridor. Banyan Tree Tamouda Bay anchors the zone with 92 pool villas. In Tangier proper, the restored El Minzah Hotel and the Fairmont Tazi Palace serve travelers exploring the city\'s literary and artistic heritage.',
    hotels: ['Banyan Tree Tamouda Bay', 'Fairmont Tazi Palace Tangier', 'El Minzah Hotel'],
  },
  {
    city: 'Essaouira & Atlantic Coast',
    icon: Sun,
    count: '3-4',
    desc: 'Essaouira\'s laid-back Atlantic energy attracts a different kind of luxury traveler — one drawn to wind, art, and seafood rather than gilded lobbies. Heure Bleue Palais leads inside the medina walls. Mazagan Beach & Golf Resort dominates the Atlantic coast near El Jadida with 500 rooms and the country\'s largest spa.',
    hotels: ['Heure Bleue Palais', 'Mazagan Beach & Golf', 'Le Jardin des Douars'],
  },
  {
    city: 'Desert & Atlas Mountains',
    icon: Mountain,
    count: '3-4',
    desc: 'Dar Ahlam in Skoura and Kasbah Tamadot in Asni represent the pinnacle of experiential luxury — properties where the landscape itself becomes the main feature. Desert camps like Scarabeo Camp and select Merzouga properties offer elevated glamping with full butler service under Saharan skies.',
    hotels: ['Dar Ahlam', 'Kasbah Tamadot', 'Scarabeo Camp', 'Desert Luxury Camp Merzouga'],
  },
] as const;

const LUXURY_EXPERIENCES = [
  { icon: UtensilsCrossed, title: 'Private Dining', desc: 'Rooftop dinners under lantern light, Berber feasts in mountain villages, and chef\'s table tastings paired with Moroccan wines from the Meknes AOG region. Expect from 1,500 MAD per couple for a private multi-course experience.' },
  { icon: Waves, title: 'Hammam & Spa Rituals', desc: 'Multi-hour signature rituals combining black soap scrubs, ghassoul clay wraps, and argan oil massage. Top spas: So Spa (Sofitel), Royal Mansour Spa, and Amanjena Spa. Budget from 800 MAD for a full ritual at a 5-star property.' },
  { icon: Globe, title: 'Championship Golf', desc: 'Fairmont Royal Palm\'s Cabell Robinson course, Mazagan\'s Gary Player layout, and Royal Dar Es Salam (host of the Hassan II Trophy since 1971). Green fees from 800 MAD; hotel guests often receive preferential tee times.' },
  { icon: Mountain, title: 'Atlas Mountain Excursions', desc: 'Helicopter transfers to Kasbah Tamadot, guided treks to Toubkal base camp, and mule-supported picnic lunches at 2,500m altitude. Arranged by hotel adventure desks — from 2,000 MAD per person.' },
  { icon: Wine, title: 'Wine & Cocktail Programs', desc: 'La Mamounia\'s Le Bar and Royal Mansour\'s Le Bar each stock 300+ labels. Palais Namaskar runs mixology masterclasses using local ingredients: saffron, orange blossom, and dried figs. Cocktails from 150 MAD.' },
  { icon: Flower2, title: 'Cultural Immersion', desc: 'Private guided tours of the Fes tanneries, zellige tile workshops, Berber cooking classes, and calligraphy sessions. Luxury hotels employ dedicated cultural concierges who customize half-day and full-day itineraries.' },
] as const;

const RELATED_GUIDES = [
  { href: '/morocco-luxury-travel', label: 'Morocco Luxury Travel Guide' },
  { href: '/morocco-riads-guide', label: 'Morocco Riads Guide' },
  { href: '/morocco-spa-guide', label: 'Morocco Spa & Hammam Guide' },
  { href: '/morocco-honeymoon', label: 'Morocco Honeymoon Guide' },
  { href: '/morocco-food-guide', label: 'Morocco Food & Cuisine Guide' },
  { href: '/best-time-visit-morocco', label: 'Best Time to Visit Morocco' },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoLuxuryHotelsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="min-h-screen bg-[#FAF8F5]">

        {/* -- HERO ----------------------------------------- */}
        <section className="relative hero-overlay bg-gradient-to-br from-[#2C1810] via-[#4A2C1A] to-[#1a0f0a] py-20 md:py-28">
          <div className="container-morocco relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
                <li className="flex items-center gap-1">
                  <Home className="h-3.5 w-3.5" />
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="text-white font-medium">Luxury Hotels</span>
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C4960C]/20 border border-[#C4960C]/40 rounded-full text-[#C4960C] text-sm font-medium mb-5">
                <Crown className="h-4 w-4" />
                Definitive Guide — Updated March 2026
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5">
                Best Luxury Hotels in Morocco
              </h1>
              <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white/85 leading-relaxed mb-8">
                15 hand-picked 5-star palaces, international resorts, and boutique retreats across
                Marrakech, Fes, Rabat, the Atlas Mountains, and the Sahara Desert. Real rates,
                seasonal pricing breakdowns, and insider booking strategies.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-white/90 text-sm">
                  <Building className="h-4 w-4 text-[#C4960C]" /> 15 Properties Reviewed
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-white/90 text-sm">
                  <MapPin className="h-4 w-4 text-[#C4960C]" /> 6 Regions Covered
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-white/90 text-sm">
                  <DollarSign className="h-4 w-4 text-[#C4960C]" /> From 3,000 MAD/night
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* -- INTRO ---------------------------------------- */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                  <Award className="h-5 w-5 text-[#A0522D]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Morocco&apos;s Luxury Hotel Landscape
                </h2>
              </div>

              <div className="space-y-5 text-[#5D4E42] leading-relaxed font-[family-name:var(--font-heading)]">
                <p>
                  Morocco attracts over 14 million visitors annually, and the luxury segment has grown
                  at 12% per year since 2019. The country now holds three Cond&eacute; Nast Traveler Gold List
                  properties, four entries on Travel + Leisure&apos;s World&apos;s Best Hotels, and two Forbes
                  Five-Star-rated resorts — the only ones in North Africa.
                </p>
                <p>
                  What sets Moroccan luxury apart from Dubai or the Maldives is architecture. The kingdom
                  enforces design guidelines that require luxury builds to use local materials —
                  tadelakt plaster, zellige mosaic tile, carved cedarwood, and wrought iron (fer forg&eacute;).
                  International brands like Aman, Four Seasons, and Mandarin Oriental hire Moroccan artisan
                  cooperatives (maalems) to execute traditional craftsmanship at a scale rarely seen
                  elsewhere.
                </p>
                <p>
                  Royal patronage amplifies the standard. King Mohammed VI personally commissioned
                  Royal Mansour Marrakech, staffing it with 1,400 employees for just 53 riads. That
                  staff-to-room ratio of 26:1 eclipses any comparable property worldwide. The king
                  also backed the &ldquo;Vision 2030&rdquo; tourism plan, which earmarks 80 billion MAD for
                  hospitality infrastructure — including new luxury zones at Tamouda Bay, Mogador
                  (Essaouira), and Lixus (near Larache).
                </p>
                <p>
                  Price positioning gives Morocco an edge. A top-tier suite at Royal Mansour — arguably
                  the most lavish hotel in Africa — runs roughly 40% less than comparable rooms at the
                  Burj Al Arab or Aman Tokyo. The dirham&apos;s relative weakness against the euro and dollar
                  amplifies value for international visitors, allowing Moroccan properties to maintain
                  exceptional staff-to-guest ratios without the astronomical nightly rates found in
                  the Gulf or Southeast Asia.
                </p>
                <p>
                  Geographic diversity means luxury travelers can combine vastly different landscapes
                  in a single trip. Start with a palace hotel in Marrakech, transfer by helicopter to a
                  mountain kasbah in the Atlas, then drive south to a desert camp under Saharan stars —
                  all within a 3-4 hour radius. No other luxury destination in Africa or the Middle East
                  matches this variety of terrain and experience within such a compact footprint.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {[
                  { num: '53', label: '5-Star Hotels', icon: Star },
                  { num: '6', label: 'Palace-Class Hotels', icon: Crown },
                  { num: '26:1', label: 'Top Staff Ratio', icon: Users },
                  { num: '80B MAD', label: 'Vision 2030 Budget', icon: Building },
                ].map((stat) => (
                  <div key={stat.label} className="card-moroccan p-5 text-center">
                    <stat.icon className="h-6 w-6 text-[#C4960C] mx-auto mb-2" />
                    <p className="font-[family-name:var(--font-display)] text-2xl text-[#2C1810]">{stat.num}</p>
                    <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- TOP 15 LUXURY HOTELS ------------------------- */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C4960C]/10 rounded-full text-[#C4960C] text-sm font-medium mb-4">
                <Gem className="h-4 w-4" /> Curated Selection
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] mb-4">
                Top 15 Luxury Hotels in Morocco
              </h2>
              <p className="text-[#5D4E42] font-[family-name:var(--font-heading)]">
                Each property was selected based on international ratings, guest reviews,
                architectural significance, and service consistency across multiple seasons.
              </p>
            </div>

            <div className="space-y-6">
              {TOP_HOTELS.map((hotel, idx) => (
                <div key={hotel.name} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#C4960C]/10 text-[#C4960C] font-bold text-sm">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2C1810]">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-[#5D4E42]">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-[#A0522D]" /> {hotel.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <Building className="h-3.5 w-3.5 text-[#A0522D]" /> {hotel.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="flex items-center gap-0.5 text-sm text-[#C4960C]">
                      {Array.from({ length: hotel.stars }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#C4960C]" />
                      ))}
                    </span>
                  </div>

                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed mb-4">
                    {hotel.highlight}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#A0522D] uppercase tracking-wide mb-1 flex items-center gap-1">
                        <UtensilsCrossed className="h-3 w-3" /> Dining
                      </p>
                      <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                        {hotel.dining}
                      </p>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#A0522D] uppercase tracking-wide mb-1 flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Spa
                      </p>
                      <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                        {hotel.spa}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E8E0D8] flex items-center justify-between">
                    <span className="text-[#A0522D] font-semibold font-[family-name:var(--font-heading)]">
                      from {hotel.from.toLocaleString()} MAD
                    </span>
                    <span className="text-xs text-[#5D4E42]/70">per night — seasonal pricing can change</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-[#FFF8E7] border border-[#C4960C]/20 rounded-xl flex gap-3">
              <Info className="h-5 w-5 text-[#C4960C] shrink-0 mt-0.5" />
              <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                <strong>Price note:</strong> All rates shown are starting prices for standard rooms in
                low season (July-August). Peak season (October-April) rates typically run 40-80% higher.
                Seasonal pricing can change — always verify directly with the hotel or your booking platform.
              </p>
            </div>
          </div>
        </section>

        {/* -- BY CITY/REGION ------------------------------- */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#A0522D]/10 rounded-full text-[#A0522D] text-sm font-medium mb-4">
                <MapPin className="h-4 w-4" /> By Region
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] mb-4">
                Luxury Hotels by City & Region
              </h2>
              <p className="text-[#5D4E42] font-[family-name:var(--font-heading)]">
                Morocco&apos;s luxury properties cluster in six distinct zones, each with a
                different character, climate, and guest profile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CITY_SECTIONS.map((section) => (
                <div key={section.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                      <section.icon className="h-5 w-5 text-[#A0522D]" />
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2C1810]">
                        {section.city}
                      </h3>
                      <span className="text-sm text-[#C4960C] font-medium">{section.count} luxury properties</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed mb-4">
                    {section.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {section.hotels.map((h) => (
                      <span key={h} className="text-xs bg-[#FAF8F5] border border-[#E8E0D8] px-2.5 py-1 rounded-lg text-[#5D4E42]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- PRICE COMPARISON TABLE ----------------------- */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C4960C]/10">
                  <DollarSign className="h-5 w-5 text-[#C4960C]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Price Comparison Table
                </h2>
              </div>
              <p className="text-[#5D4E42] font-[family-name:var(--font-heading)] mb-8">
                Nightly rates in MAD (Moroccan Dirhams). Approximate conversions: 10 MAD = ~1 USD / ~0.92 EUR.
                Seasonal pricing can change — verify with the property before booking.
              </p>

              <div className="overflow-x-auto zellige-border rounded-xl">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#2C1810] text-white">
                      <th className="px-5 py-4 font-[family-name:var(--font-heading)] font-semibold text-sm">Hotel</th>
                      <th className="px-5 py-4 font-[family-name:var(--font-heading)] font-semibold text-sm text-center">Low Season</th>
                      <th className="px-5 py-4 font-[family-name:var(--font-heading)] font-semibold text-sm text-center">Peak Season</th>
                      <th className="px-5 py-4 font-[family-name:var(--font-heading)] font-semibold text-sm text-center">Top Suite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_COMPARISON.map((row, idx) => (
                      <tr key={row.hotel} className={idx % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                        <td className="px-5 py-3.5 font-[family-name:var(--font-heading)] text-sm text-[#2C1810] font-medium">
                          {row.hotel}
                        </td>
                        <td className="px-5 py-3.5 text-sm text-[#5D4E42] text-center font-[family-name:var(--font-heading)]">
                          from {row.low.toLocaleString()} MAD
                        </td>
                        <td className="px-5 py-3.5 text-sm text-[#A0522D] text-center font-medium font-[family-name:var(--font-heading)]">
                          from {row.peak.toLocaleString()} MAD
                        </td>
                        <td className="px-5 py-3.5 text-sm text-[#C4960C] text-center font-semibold font-[family-name:var(--font-heading)]">
                          from {row.suite.toLocaleString()} MAD
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* -- WHEN TO BOOK --------------------------------- */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                  <Calendar className="h-5 w-5 text-[#A0522D]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  When to Book — Seasonal Pricing
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="h-5 w-5 text-[#C4960C]" />
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810]">Peak Season (October - April)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0 mt-0.5" /> Highest rates — plan for 40-80% above published minimums</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0 mt-0.5" /> December 20 - January 5 commands absolute peak pricing</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0 mt-0.5" /> Book 4-6 months ahead for Royal Mansour, La Mamounia</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0 mt-0.5" /> Best weather: daytime highs of 20-26 degrees C in Marrakech</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#A0522D] shrink-0 mt-0.5" /> March-April is shoulder — slightly lower rates, wildflower season</li>
                  </ul>
                </div>

                <div className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-[#C4960C]" />
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810]">Off-Peak (May - September)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Rates drop 30-50% at inland properties</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> July-August: Marrakech hits 40+ degrees daily — pool time dominates</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Coastal hotels (Essaouira, Tamouda Bay) charge peak summer rates</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Ramadan: some restaurants and bars keep limited hours</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Ideal for spa-focused stays — fewer crowds, easier spa bookings</li>
                  </ul>
                </div>
              </div>

              <div className="card-moroccan p-6 bg-gradient-to-r from-[#2C1810] to-[#4A2C1A] text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg">Booking Strategy</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm font-[family-name:var(--font-heading)]">
                  <div>
                    <p className="text-[#C4960C] font-semibold mb-1">Direct Booking</p>
                    <p className="text-white/80">Most palace hotels offer a best-rate guarantee plus perks (room upgrade, late checkout, spa credit) when you book through their website.</p>
                  </div>
                  <div>
                    <p className="text-[#C4960C] font-semibold mb-1">Travel Advisor</p>
                    <p className="text-white/80">Virtuoso- and Signature-affiliated agents unlock complimentary breakfast, upgrades, and resort credits at Four Seasons, Aman, and Mandarin Oriental.</p>
                  </div>
                  <div>
                    <p className="text-[#C4960C] font-semibold mb-1">Credit Card Programs</p>
                    <p className="text-white/80">Amex Fine Hotels + Resorts covers La Mamounia and Four Seasons Marrakech. Benefits: noon check-in, 4 PM checkout, and a property-specific amenity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- LUXURY EXPERIENCES --------------------------- */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#C4960C]/10 rounded-full text-[#C4960C] text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" /> Beyond the Room
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] mb-4">
                Signature Luxury Experiences
              </h2>
              <p className="text-[#5D4E42] font-[family-name:var(--font-heading)]">
                Morocco&apos;s top hotels compete on experiences as much as rooms. These six categories
                represent the activities that drive repeat bookings and five-star reviews.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LUXURY_EXPERIENCES.map((exp) => (
                <div key={exp.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C4960C]/10">
                      <exp.icon className="h-5 w-5 text-[#C4960C]" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810]">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- ARCHITECTURE & DESIGN ------------------------ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                  <Building className="h-5 w-5 text-[#A0522D]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Architecture & Design Philosophy
                </h2>
              </div>

              <div className="space-y-5 text-[#5D4E42] leading-relaxed font-[family-name:var(--font-heading)] mb-10">
                <p>
                  Moroccan luxury hotels stand apart from global peers through a building philosophy
                  that fuses centuries-old craft traditions with contemporary comfort. The government&apos;s
                  architectural code requires new luxury builds to incorporate at least three traditional
                  Moroccan construction techniques. This produces hotels that feel rooted in place rather
                  than transplanted from a global template.
                </p>
                <p>
                  Four core materials define the aesthetic. <strong>Tadelakt</strong> — a polished lime
                  plaster originally used in hammams — covers bathroom walls and sometimes entire facades,
                  creating a waterproof surface with a warm, marble-like sheen. <strong>Zellige</strong>
                  tilework, hand-cut into geometric patterns by artisans in Fes, appears in fountains,
                  pool surrounds, and feature walls. <strong>Carved cedarwood</strong> from the Middle
                  Atlas forms doors, ceilings, and window screens (moucharabiehs). <strong>Wrought
                  iron</strong> (fer forg&eacute;) shapes balustrades, lanterns, and courtyard furniture.
                </p>
                <p>
                  Royal Mansour employed 1,500 artisans over three years to hand-craft its 53 riads.
                  Each riad features unique zellige patterns — no two are identical. La Mamounia&apos;s
                  restoration (completed in 2009 by Jacques Garcia) blended Art Deco elements from the
                  original 1923 structure with Moorish geometries, costing an estimated 1.4 billion MAD.
                  Amanjena drew from Saadian dynasty architecture, modeling its central basin on the
                  12th-century Menara reflecting pool.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="card-moroccan p-5 text-center">
                  <Gem className="h-6 w-6 text-[#C4960C] mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-2">Tadelakt & Zellige</h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    Hand-polished lime plaster and hand-cut mosaic tile — techniques unchanged since the
                    Marinid dynasty (13th-15th century). Each zellige tile is individually chipped to shape
                    with a hammer, then assembled into mathematical star patterns.
                  </p>
                </div>
                <div className="card-moroccan p-5 text-center">
                  <Crown className="h-6 w-6 text-[#C4960C] mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-2">Royal Patronage</h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    The Moroccan monarchy has directly financed or championed several landmark properties.
                    Royal Mansour remains the king&apos;s personal project. La Mamounia was originally a
                    wedding gift from Sultan Mohammed ben Abdallah to his son in the 18th century.
                  </p>
                </div>
                <div className="card-moroccan p-5 text-center">
                  <Globe className="h-6 w-6 text-[#C4960C] mx-auto mb-3" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-2">International Architects</h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    Top firms collaborate with local maalems: Kerry Hill (Amanjena), Pascal Desprez
                    (Mandarin Oriental), Imaad Rahmouni (Palais Namaskar). The result blends global
                    luxury standards with irreplaceable Moroccan craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- DINING AT LUXURY HOTELS ---------------------- */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C4960C]/10">
                  <UtensilsCrossed className="h-5 w-5 text-[#C4960C]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Dining at Morocco&apos;s Top Hotels
                </h2>
              </div>

              <p className="text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed mb-8">
                Morocco&apos;s palace hotels house some of the country&apos;s most ambitious restaurants.
                Several have attracted internationally recognized chefs and earned placement on
                regional best-of lists. Fine dining here ranges from refined Moroccan tasting menus
                to French haute cuisine and Pan-Asian fusion.
              </p>

              <div className="space-y-4">
                {[
                  {
                    restaurant: 'La Grande Table Marocaine',
                    hotel: 'Royal Mansour',
                    chef: 'Yannick All\u00e9no (3 Michelin stars at Pavillon Ledoyen, Paris)',
                    desc: 'A seven-course Moroccan tasting menu reinterpreted through French technique. The dining room features a 6-meter carved cedarwood ceiling and hand-painted zellige columns. Expect from 1,800 MAD per person without wine.',
                  },
                  {
                    restaurant: 'Le Marocain & L\'Italien',
                    hotel: 'La Mamounia',
                    chef: 'Jean-Georges Vongerichten (oversaw menu redesign)',
                    desc: 'Two signature restaurants anchor La Mamounia\'s dining program. Le Marocain serves classic pastilla, slow-cooked tagines, and mechoui lamb under hand-painted Moorish arches. L\'Italien focuses on wood-fired Italian cooking with Moroccan olive oils. Main courses from 350 MAD.',
                  },
                  {
                    restaurant: 'Ling Ling',
                    hotel: 'Mandarin Oriental',
                    chef: 'Hakkasan Group collaboration',
                    desc: 'Pan-Asian cuisine in a sultry poolside setting. Cantonese dim sum, Japanese robata grill, and cocktails built around Moroccan botanicals. The weekend brunch (from 950 MAD) draws Marrakech\'s international residents and visiting hotel guests.',
                  },
                  {
                    restaurant: 'The Nama',
                    hotel: 'Amanjena',
                    chef: 'Rotating Aman guest chef series',
                    desc: 'Aman\'s signature farm-to-table approach uses produce from the resort\'s own organic garden and eggs from its on-site chicken coop. Outdoor dining beside the rose garden offers Atlas Mountain views at sunset. Tasting menu from 1,200 MAD.',
                  },
                ].map((r) => (
                  <div key={r.restaurant} className="card-moroccan p-5 flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-1">{r.restaurant}</h3>
                      <p className="text-sm text-[#C4960C] font-medium font-[family-name:var(--font-heading)]">{r.hotel}</p>
                      <p className="text-xs text-[#5D4E42]/70 font-[family-name:var(--font-heading)] mt-1">{r.chef}</p>
                    </div>
                    <p className="md:w-2/3 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- HONEYMOON & SPECIAL OCCASIONS ---------------- */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C4960C]/10">
                  <Heart className="h-5 w-5 text-[#C4960C]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Honeymoon & Special Occasions
                </h2>
              </div>

              <p className="text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed mb-8">
                Morocco ranks among the top five honeymoon destinations for European couples, and
                its luxury hotels have invested heavily in romance packages. Several properties
                maintain dedicated wedding and events teams that coordinate everything from
                traditional Moroccan ceremonies to contemporary celebrations.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#C4960C]" /> Honeymoon Packages
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Royal Mansour: private riad with rose petal turndown, couples hammam, and rooftop dinner — from 28,000 MAD/night</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Amanjena: three-night honeymoon package with hot air balloon ride over the Palmeraie and a desert picnic</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Four Seasons: complimentary upgrade (subject to availability), champagne on arrival, and late checkout</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Dar Ahlam: the entire 14-suite kasbah can be booked exclusively for intimate celebrations</li>
                  </ul>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#C4960C]" /> Milestone Celebrations
                  </h3>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> La Mamounia hosts destination weddings for up to 300 guests in its garden pavilion, with full event planning from 500,000 MAD</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Fairmont Royal Palm stages corporate retreats and anniversary parties on its polo grounds</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Mandarin Oriental arranges milestone birthday dinners in a private olive grove setting with Berber musicians</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Kasbah Tamadot offers buyout packages for the entire property (28 rooms) during off-peak months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- PRACTICAL TIPS ------------------------------- */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                  <Info className="h-5 w-5 text-[#A0522D]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Practical Tips for Luxury Travelers
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#A0522D]" /> Airport Transfers
                  </h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed">
                    Every 5-star hotel arranges private airport transfers — typically a Mercedes V-Class
                    or similar. Expect from 500 MAD for the 15-minute Marrakech Menara run and from 1,500 MAD
                    for Casablanca Mohammed V Airport (2.5 hours). Some properties like Royal Mansour and
                    Amanjena operate their own vehicle fleet with uniformed chauffeurs. Request the transfer
                    at least 48 hours before arrival.
                  </p>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-center gap-2">
                    <Bed className="h-4 w-4 text-[#A0522D]" /> Room Categories
                  </h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed">
                    Moroccan luxury hotels use distinct terminology. A &ldquo;pavilion&rdquo; at Amanjena is a
                    standalone building with an outdoor fireplace and private garden. A &ldquo;riad&rdquo; at
                    Royal Mansour is a three-story private house. A &ldquo;water palace&rdquo; at Palais Namaskar
                    floats above a reflecting pool. Standard &ldquo;superior rooms&rdquo; at palace hotels still
                    average 45-60 sqm — larger than suites at most 4-star properties elsewhere.
                  </p>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-[#A0522D]" /> Tipping Etiquette
                  </h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed">
                    Tipping is expected and appreciated. Budget 20-50 MAD per interaction for porters and
                    housekeeping. For a private guide arranged through the hotel, 200-500 MAD per day is standard.
                    Restaurant tips of 10-15% apply on top of any service charge. Some luxury properties
                    add a 10% service charge to the bill — check before doubling up.
                  </p>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#A0522D]" /> Dress Code
                  </h3>
                  <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed">
                    Most Moroccan luxury hotels maintain a smart-casual standard. La Mamounia&apos;s
                    L&apos;Italien and Le Marocain restaurants require collared shirts for men at dinner.
                    Royal Mansour&apos;s La Grande Table Marocaine requests &ldquo;elegant attire.&rdquo; Pool areas
                    are relaxed. Outside the hotel, modest clothing (covering shoulders and knees) shows
                    respect, especially near mosques and in medina neighborhoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- QUICK REFERENCE ------------------------------ */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C4960C]/10">
                  <Star className="h-5 w-5 text-[#C4960C]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Quick Reference — Best Hotels By Category
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3">Best for Couples</h3>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Royal Mansour — private three-story riads, total seclusion</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Dar Ahlam — only 14 suites, surprise dinner locations each night</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> La Sultana — rooftop pool overlooking the medina, intimate scale</li>
                  </ul>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3">Best for Families</h3>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Four Seasons Marrakech — dedicated kids club, three pools, family suites</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Mazagan Beach & Golf — waterpark, equestrian center, 500 rooms</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Fairmont Royal Palm — pool villas, pony rides, family-sized suites</li>
                  </ul>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3">Best for Golf</h3>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Fairmont Royal Palm — on-site 18-hole Cabell Robinson course</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Ritz-Carlton Rabat — within the Royal Dar Es Salam golf complex</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Mazagan Beach — Gary Player-designed championship layout</li>
                  </ul>
                </div>

                <div className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3">Best for Beach</h3>
                  <ul className="space-y-2 text-sm text-[#5D4E42] font-[family-name:var(--font-heading)]">
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Banyan Tree Tamouda Bay — 92 pool villas on the Mediterranean</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Mazagan Beach — direct Atlantic beachfront at El Jadida</li>
                    <li className="flex items-start gap-2"><Star className="h-4 w-4 text-[#C4960C] shrink-0 mt-0.5" /> Heure Bleue Palais — Essaouira medina, 10-minute walk to the beach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- FAQ ------------------------------------------ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#A0522D]/10 rounded-full text-[#A0522D] text-sm font-medium mb-4">
                  <MessageCircleQuestion className="h-4 w-4" /> Common Questions
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq, idx) => (
                  <div key={idx} className="card-moroccan p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2C1810] mb-3 flex items-start gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#C4960C]/10 text-[#C4960C] font-bold text-sm shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      {faq.q}
                    </h3>
                    <p className="text-sm text-[#5D4E42] font-[family-name:var(--font-heading)] leading-relaxed pl-10">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- RELATED GUIDES ------------------------------- */}
        <section className="py-16 md:py-20">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#A0522D]/10">
                  <BookOpen className="h-5 w-5 text-[#A0522D]" />
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810]">
                  Related Guides
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {RELATED_GUIDES.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="card-moroccan p-5 group hover:border-[#A0522D]/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-heading)] text-[#2C1810] font-medium text-sm group-hover:text-[#A0522D] transition-colors">
                        {guide.label}
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#A0522D] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- CTA ------------------------------------------ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#2C1810] via-[#4A2C1A] to-[#1a0f0a]">
          <div className="container-morocco">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-10 w-10 text-[#C4960C] mx-auto mb-5" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-5">
                Plan Your Luxury Morocco Stay
              </h2>
              <p className="text-white/80 font-[family-name:var(--font-heading)] text-lg leading-relaxed mb-8">
                From palace hotels in Marrakech&apos;s Palmeraie to remote desert kasbahs under the
                Milky Way — Morocco delivers world-class luxury at prices that undercut comparable
                properties in Europe and the Middle East by 30-50%. Start with our city guides
                to build your itinerary.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/marrakech"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4960C] text-white rounded-xl font-[family-name:var(--font-heading)] font-medium hover:bg-[#B38A0B] transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Explore Marrakech
                </Link>
                <Link
                  href="/fes"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white border border-white/20 rounded-xl font-[family-name:var(--font-heading)] font-medium hover:bg-white/20 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Explore Fes
                </Link>
                <Link
                  href="/best-time-visit-morocco"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur text-white border border-white/20 rounded-xl font-[family-name:var(--font-heading)] font-medium hover:bg-white/20 transition-colors"
                >
                  <Calendar className="h-4 w-4" /> Best Time to Visit
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
