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
  Gem,
  Building,
  Award,
  Crown,
  Globe,
  Landmark,
  Wine,
  Bath,
  Flower2,
  Tent,
  Mountain,
  Compass,
  Bed,
  Coffee,
  Sun,
  Plane,
  Wallet,
  Calendar,
  Map,
  Train,
  Utensils,
  Anchor,
  Scissors,
  Camera,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Luxury Travel Morocco 2026 | 5-Star Hotels, Private Tours & VIP Experiences',
  description:
    'The definitive guide to luxury Morocco. Royal Mansour, La Mamounia, Mandarin Oriental, Four Seasons, Oberoi, Kasbah Tamadot. Private desert camps, helicopter tours, yacht charters, private hammams, and bespoke itineraries with prices in MAD.',
  keywords: [
    'luxury morocco',
    'luxury travel morocco',
    'luxury morocco holidays',
    'best luxury hotels morocco',
    'luxury morocco tour',
    '5 star experience morocco',
    'Royal Mansour Marrakech',
    'La Mamounia hotel',
    'Mandarin Oriental Marrakech',
    'Four Seasons Morocco',
    'Oberoi Marrakech',
    'Kasbah Tamadot',
    'luxury desert camp morocco',
    'private tour morocco',
    'morocco helicopter tour',
    'luxury riad morocco',
    'morocco yacht charter',
    'private hammam morocco',
    'luxury food experience morocco',
    'morocco luxury itinerary 2026',
  ],
  openGraph: {
    title: 'Luxury Travel Morocco 2026 | 5-Star Hotels, Private Tours & VIP Experiences',
    description:
      'Royal Mansour, La Mamounia, Mandarin Oriental, desert glamping, helicopter tours, yacht charters, and bespoke VIP itineraries. The complete luxury Morocco guide.',
    url: `${BASE_URL}/morocco-luxury-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-riad-interior.webp`,
        width: 1200,
        height: 630,
        alt: 'Opulent Moroccan riad courtyard with zellige tilework, brass lanterns, and turquoise plunge pool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Travel Morocco 2026 | 5-Star Hotels & VIP Experiences',
    description:
      'Palace hotels, private desert glamping, helicopter tours, yacht charters, and fine dining. The complete guide to luxury travel in Morocco.',
    images: [`${BASE_URL}/images/hero-riad-interior.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-luxury-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-luxury-travel`,
  name: 'Luxury Travel Morocco 2026 | 5-Star Hotels, Private Tours & VIP Experiences',
  description:
    'The definitive guide to luxury travel in Morocco. Palace hotels, private desert camps, helicopter tours, yacht charters, private hammams, fine dining, and bespoke VIP itineraries with realistic prices.',
  url: `${BASE_URL}/morocco-luxury-travel`,
  image: `${BASE_URL}/images/hero-riad-interior.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-19',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-luxury-travel`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Luxury Travel', item: `${BASE_URL}/morocco-luxury-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a luxury trip to Morocco cost per person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 7-day luxury Morocco trip runs from 40,000 to 80,000 MAD per person. That covers 5-star palace hotels, private transfers, fine dining, and premium experiences like hot air balloons and royal hammam treatments. Ultra-luxury itineraries with helicopter transfers, private desert camps, and a personal concierge can exceed 120,000 MAD per person. Morocco delivers exceptional value: equivalent luxury in France or Italy costs 40-60% more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best luxury hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top tier includes Royal Mansour Marrakech (from 12,000 MAD/night, private riad suites with butlers), La Mamounia (from 8,000 MAD/night, legendary palace hotel), Mandarin Oriental Marrakech (from 6,500 MAD/night, 20 hectares of gardens), Four Seasons Marrakech (from 5,500 MAD/night, family-friendly palace), Oberoi Marrakech (from 7,000 MAD/night, 28 acres with citrus and olive groves), and Kasbah Tamadot in the Atlas Mountains (from 5,000 MAD/night, Richard Branson\'s retreat).',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for a luxury Morocco holiday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March to May and September to November are ideal. Spring delivers wildflowers, pleasant warmth between 20-28 degrees Celsius, and the Dades Valley rose harvest. Autumn brings golden light and harvest festivals. Winter (December-February) works well for Marrakech, with mild sunny days and snow-capped Atlas views. Avoid July and August inland, when temperatures climb past 40 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I charter a yacht along the Moroccan coast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Yacht charters operate from Tangier, Agadir, and the new Tamouda Bay marina near Tetouan. A day charter for a sailing yacht runs from 8,000 MAD. Motor yacht charters with crew and catering start from 15,000 MAD per day. Multi-day cruises along the Mediterranean coast between Tangier and Al Hoceima are spectacular. The season runs April through October.',
      },
    },
    {
      '@type': 'Question',
      name: 'What luxury experiences are unique to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private overnight Sahara glamping under the Milky Way, royal hammam rituals with indigenous argan oil and Dades Valley rose petals, helicopter transfers over the Atlas Mountains, the Al Boraq high-speed train at 320 km/h, personal shoppers who negotiate the souks on your behalf, private cooking classes with palace chefs, and candlelit multi-course dinners on medina rooftops. No other country combines these elements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a private guide necessary for luxury travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A licensed private guide transforms the experience completely. They unlock doors tourists never see: private artisan workshops, hidden palace gardens, and homes where families invite you for tea. A specialist English-speaking guide costs from 1,500-3,000 MAD per day. For the Fes medina, a guide is practically essential given the complexity. Your hotel concierge can arrange vetted guides with expertise in history, architecture, or cuisine.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get around Morocco in luxury?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private drivers with Mercedes S-Class or Range Rover vehicles cost from 2,500 MAD per day. Helicopter transfers between cities start from 25,000 MAD per flight. The Al Boraq high-speed train covers Tangier to Casablanca in 2 hours 10 minutes with first-class cabins from 300 MAD. Domestic flights between Marrakech, Fes, and other cities run from 1,000 MAD. All luxury hotels arrange transfers through their concierge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I budget for tipping at luxury hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At 5-star properties, tip from 50-100 MAD per day for housekeeping, from 100-200 MAD for exceptional concierge service, from 50-100 MAD per meal for restaurant staff, and from 200-500 MAD per day for private guides. For butlers who manage your entire stay, a generous tip at departure is standard and appreciated. Budget roughly 5-10% on top of your overall trip cost for gratuities.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP LUXURY HOTELS
   ═══════════════════════════════════════════════════════════════ */

const luxuryHotels = [
  {
    rank: 1,
    name: 'Royal Mansour',
    city: 'Marrakech',
    type: 'Ultra-Luxury Palace',
    icon: Crown,
    price: 'From 12,000 MAD per night',
    image: '/images/hero-marrakech.webp',
    description:
      'Commissioned by King Mohammed VI as a private medina within the medina. Each accommodation is a three-story riad with its own plunge pool, rooftop terrace, and dedicated butler. Staff circulate through underground tunnels so guests never witness service in progress. The subterranean spa stretches across 2,500 square meters. La Grande Table Marocaine, led by Yannick Alleno, serves Moroccan cuisine at a level that would earn Michelin stars in Paris. Heads of state and A-list celebrities stay here for a reason: nothing else compares.',
    highlights: ['Private three-story riad suites', 'Butler service via underground tunnels', '2,500 sqm subterranean spa', 'La Grande Table Marocaine fine dining'],
  },
  {
    rank: 2,
    name: 'La Mamounia',
    city: 'Marrakech',
    type: 'Legendary Palace Hotel',
    icon: Crown,
    price: 'From 8,000 MAD per night',
    image: '/images/hero-majorelle-garden.webp',
    description:
      'Open since 1929, La Mamounia occupies eight hectares of legendary gardens against the Atlas Mountains. Winston Churchill painted here. The hotel blends art deco grandeur with Moorish geometry in a way that no modern architect has managed to replicate. Three restaurants, a 2,500-square-meter spa with a traditional hammam, and a heated outdoor pool ringed by citrus groves keep guests from ever wanting to leave. The renovated suites pair original mosaic floors with contemporary furniture that somehow feels inevitable rather than forced.',
    highlights: ['Eight-hectare landmark gardens', 'Art deco meets Moorish architecture', '2,500 sqm spa complex', 'Churchill painted from the balcony'],
  },
  {
    rank: 3,
    name: 'Mandarin Oriental',
    city: 'Marrakech',
    type: 'Contemporary Palace Resort',
    icon: Award,
    price: 'From 6,500 MAD per night',
    description:
      'Spread across 20 hectares of olive groves and gardens south of the medina, the Mandarin Oriental represents a different kind of Moroccan luxury: space. Freestanding villas with private heated pools, outdoor rain showers, and walled gardens give each guest a private estate. The spa uses treatments rooted in Moroccan traditions alongside Asian techniques. Ling Ling restaurant serves pan-Asian cuisine by the pool, while the Moroccan restaurant delivers tagines and pastilla with precision. The scale is enormous, the service immaculate, the silence almost startling after the medina.',
    image: '/images/hero-marrakech-koutoubia.webp',
    highlights: ['20-hectare private estate feel', 'Freestanding villas with heated pools', 'Fusion of Moroccan and Asian spa', 'Ling Ling pan-Asian restaurant'],
  },
  {
    rank: 4,
    name: 'Four Seasons Resort',
    city: 'Marrakech',
    type: '5-Star Family Luxury',
    icon: Star,
    price: 'From 5,500 MAD per night',
    description:
      'Set within 16 hectares of gardens with direct Atlas Mountain views, the Four Seasons is the gold standard for families and travelers who want palace luxury without pretension. Two swimming pools, a world-class kids club, tennis courts, and an 800-square-meter spa sit alongside beautifully designed pavilion suites. The Moroccan restaurant Inara draws locals as well as guests, a reliable sign of quality. Service is Four Seasons through and through: anticipatory, warm, never stiff.',
    image: '/images/hero-atlas.webp',
    highlights: ['16-hectare garden grounds', 'Best luxury kids club in Morocco', '800 sqm spa sanctuary', 'Inara restaurant for serious Moroccan food'],
  },
  {
    rank: 5,
    name: 'Oberoi Marrakech',
    city: 'Marrakech',
    type: 'Ultra-Luxury Retreat',
    icon: Gem,
    price: 'From 7,000 MAD per night',
    description:
      'Opened in 2019 across 28 acres of citrus and olive groves, the Oberoi brought Indian luxury service standards to Moroccan hospitality and the combination is formidable. Just 15 villas and 3 tented pavilions ensure a guest-to-staff ratio that borders on absurd. Every villa has a private temperature-controlled pool, a garden, and a dedicated butler. The spa draws from both Ayurvedic and Moroccan traditions. Dinners at the Moroccan restaurant involve a 180-degree view of the Atlas Mountains that no photograph adequately captures.',
    image: '/images/hero-dades-valley.webp',
    highlights: ['Only 18 accommodations total', '28 acres of private grounds', 'Ayurvedic and Moroccan spa fusion', 'Atlas panorama dining terrace'],
  },
  {
    rank: 6,
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    type: 'Mountain Luxury Retreat',
    icon: Mountain,
    price: 'From 5,000 MAD per night',
    description:
      'Sir Richard Branson purchased this kasbah above a Berber village in the High Atlas after his mother fell in love with it during a balloon trip. The infinity pool appears to spill over the edge of the mountain. Hand-carved furniture, Berber antiques, and genuinely warm staff create an atmosphere more private home than hotel. Helicopter arrival from Marrakech takes twelve minutes and deposits you directly at the property. The Kanoun restaurant serves refined Moroccan dishes on a terrace where the Atlas peaks fill every sightline.',
    image: '/images/hero-atlas.webp',
    highlights: ['Infinity pool over Atlas peaks', 'Helicopter arrival from Marrakech', 'Private terrace suites with plunge pools', 'Branson\'s personal mountain estate'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PREMIUM EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const premiumExperiences = [
  {
    experience: 'Private Sahara Desert Glamping',
    icon: Tent,
    price: 'From 5,000 MAD per night for two',
    duration: '2-3 nights',
    description:
      'A lavish tented suite at the edge of the Erg Chebbi dunes with king-size beds, en-suite marble bathrooms, and a private terrace overlooking golden sand that stretches to the horizon. A personal butler serves a candlelit multi-course dinner in the open desert. After the meal, lie on Berber carpets with a telescope pointed at the Milky Way. Zero light pollution. The silence is absolute.',
    bestIn: 'Merzouga, Agafay Desert',
  },
  {
    experience: 'Helicopter Atlas Mountain Tour',
    icon: Compass,
    price: 'From 25,000 MAD per flight (up to 5 passengers)',
    duration: '1-3 hours',
    description:
      'Lift from Marrakech over the Ourika Valley, circle the 4,167-meter summit of Mount Toubkal, fly above ancient kasbahs and dramatic gorges, then land at a private mountain lodge for a Berber lunch. Some operators combine this with a Marrakech-to-Sahara transfer, turning logistics into an unforgettable scenic experience.',
    bestIn: 'Marrakech, Atlas Mountains',
  },
  {
    experience: 'Yacht Charter Along the Coast',
    icon: Anchor,
    price: 'From 8,000 MAD per day (sailing yacht)',
    duration: 'Full day or multi-day',
    description:
      'Morocco\'s Mediterranean coastline between Tangier and Al Hoceima features secluded coves, dramatic cliffs, and clear blue water. Day charters with crew and catering depart from Tangier, Tetouan\'s Tamouda Bay marina, and Agadir. Motor yachts with full service start from 15,000 MAD per day. Multi-day cruises anchor at fishing villages where the catch arrives on your plate within the hour.',
    bestIn: 'Tangier, Tamouda Bay, Agadir',
  },
  {
    experience: 'Private Royal Hammam Ritual',
    icon: Bath,
    price: 'From 2,000 MAD per person',
    duration: '2-3 hours',
    description:
      'A private marble steam room, an expert therapist, black soap scrub with kessa gloves, ghassoul clay body mask, argan oil massage, and a rose water facial. The finest spas use ingredients sourced directly from Moroccan farms: argan from Essaouira, saffron from Taliouine, rose petals from Kelaat M\'Gouna. The Royal Mansour underground spa and La Sultana\'s couple hammam set the standard.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    experience: 'Personal Souk Shopper',
    icon: Scissors,
    price: 'From 1,500 MAD per half-day session',
    duration: '3-4 hours',
    description:
      'A professional personal shopper who speaks Arabic, French, and English navigates the labyrinth of the Marrakech or Fes souk on your behalf. They know the master artisans, the fair prices, and the workshops that produce genuine handmade goods. Expect to find hand-loomed Berber carpets, zellige ceramics, babouche slippers in custom sizes, and saffron at a third of what you would pay negotiating alone.',
    bestIn: 'Marrakech, Fes',
  },
  {
    experience: 'Al Boraq High-Speed Train (First Class)',
    icon: Train,
    price: 'From 300 MAD per person (first class)',
    duration: '2 hours 10 minutes',
    description:
      'Africa\'s only high-speed train connects Tangier to Casablanca at up to 320 km/h, cutting a five-hour journey to just over two. First-class cabins have spacious leather seats, complimentary refreshments, power outlets, and panoramic windows. The route passes through Kenitra and beautiful coastal countryside. It is not merely transport; it is a statement of modern Morocco.',
    bestIn: 'Tangier to Casablanca',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FINE DINING
   ═══════════════════════════════════════════════════════════════ */

const fineDining = [
  {
    name: 'La Grande Table Marocaine',
    location: 'Royal Mansour, Marrakech',
    icon: Crown,
    cuisine: 'Elevated Moroccan',
    price: 'From 1,500 MAD per person',
    description: 'Yannick Alleno applies Michelin-level precision to traditional Moroccan recipes. The dishes look architectural. The flavors are intensely concentrated. The palace setting raises the bar further.',
  },
  {
    name: 'Le Marocain',
    location: 'La Mamounia, Marrakech',
    icon: Star,
    cuisine: 'Classic Palace Moroccan',
    price: 'From 800 MAD per person',
    description: 'Painted cedar ceilings soar above carved plaster walls. The palace cuisine, from b\'stilla to tagine, hits with a precision that casual restaurants never reach. The room alone warrants the reservation.',
  },
  {
    name: 'Dar Yacout',
    location: 'Marrakech Medina',
    icon: Gem,
    cuisine: 'Traditional Moroccan Feast',
    price: 'From 500 MAD per person',
    description: 'Multiple courses arrive in a candlelit salon with zellige walls and brass lanterns. Start with cocktails on the rooftop, watching the Koutoubia minaret glow against a darkening sky. A legendary Marrakech institution.',
  },
  {
    name: 'Nur',
    location: 'Fes Medina',
    icon: Sparkles,
    cuisine: 'Contemporary Moroccan',
    price: 'From 600 MAD per person',
    description: 'Young Moroccan chefs reinterpret centuries-old Fassi recipes with modern technique and seasonal ingredients. The restored riad setting is intimate. The tasting menu changes with what the local markets deliver.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: 7-DAY LUXURY ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const luxuryItinerary = [
  {
    day: 1,
    title: 'Arrive Marrakech: Palace Welcome',
    icon: Plane,
    location: 'Marrakech',
    description:
      'A private driver meets you at Menara Airport with a chilled welcome drink in a luxury SUV. Check into your palace hotel. Spend the afternoon exploring the private gardens and plunge pool at your own pace. By evening, your butler arranges a private rooftop dinner: rose petals, brass lanterns, a multi-course Moroccan feast, and the Atlas Mountains glowing pink as the call to prayer drifts across the medina.',
    highlights: ['Private luxury airport transfer', 'Palace hotel check-in with butler', 'Private rooftop welcome dinner'],
    accommodation: 'Royal Mansour or La Mamounia (from 8,000 MAD/night)',
  },
  {
    day: 2,
    title: 'Marrakech: Private Medina & Royal Hammam',
    icon: Sparkles,
    location: 'Marrakech',
    description:
      'An expert historian leads you through the medina on a private tour. The Bahia Palace, the Saadian Tombs, and artisan workshops where master craftsmen create zellige tilework by hand, all accessed through doors tourists walk past without noticing. After lunch at a palace restaurant, the afternoon belongs to the Royal Mansour underground spa: black soap, ghassoul clay, argan oil massage, and two hours of silence in warm marble rooms.',
    highlights: ['Private historian-led medina tour', 'VIP artisan workshop access', 'Royal hammam spa treatment'],
    accommodation: 'Same palace hotel in Marrakech',
  },
  {
    day: 3,
    title: 'Sunrise Balloon & Atlas Mountains',
    icon: Sun,
    location: 'Marrakech / Atlas Mountains',
    description:
      'Wake before dawn. A private hot air balloon carries you over the palmeraie as the first light sets the Atlas peaks on fire. After landing, a Berber breakfast spread on carpets in a field: msemen, honey, eggs, fruit, mint tea. Then your driver takes you into the High Atlas to Kasbah Tamadot for lunch on the panoramic terrace. Walk through a Berber village. Return to Marrakech for dinner at Dar Yacout, the legendary candlelit palace.',
    highlights: ['Private sunrise hot air balloon', 'Berber countryside breakfast', 'Lunch at Kasbah Tamadot', 'Dinner at Dar Yacout'],
    accommodation: 'Same palace hotel in Marrakech',
  },
  {
    day: 4,
    title: 'Journey South: Kasbahs & Dades Valley',
    icon: Map,
    location: 'Marrakech to Dades Valley',
    description:
      'Depart in a luxury SUV over the Tizi n\'Tichka pass, 2,260 meters of switchbacks and dramatic vistas. Stop at UNESCO-listed Ait Benhaddou for a private guided tour of the ancient fortified village. Continue through the Valley of Roses to the Dades Gorge, where your luxury kasbah hotel perches on the cliff edge. Dinner is served on a private terrace as a thousand stars emerge above the canyon walls.',
    highlights: ['Tizi n\'Tichka mountain pass', 'UNESCO Ait Benhaddou private tour', 'Valley of Roses drive', 'Clifftop kasbah hotel dinner'],
    accommodation: 'Luxury kasbah in Dades (from 3,000 MAD/night)',
  },
  {
    day: 5,
    title: 'Sahara Desert: Glamping Under the Stars',
    icon: Tent,
    location: 'Dades to Merzouga',
    description:
      'Continue east through Todra Gorge to Merzouga. Your private luxury camp sits at the edge of the Erg Chebbi dunes: a lavish tented suite with marble bathroom and private terrace. At sunset, a camel caravan carries you deep into the sand sea. A table, lanterns, and a Berber musician wait on a panoramic dune crest. You eat a multi-course dinner under the Milky Way. This is the single most extraordinary night of any luxury Morocco trip.',
    highlights: ['Todra Gorge drive', 'Private luxury desert camp', 'Sunset camel caravan into the dunes', 'Candlelit dinner under the Milky Way'],
    accommodation: 'Private luxury desert camp (from 5,000 MAD/night)',
  },
  {
    day: 6,
    title: 'Sahara Sunrise & Flight to Fes',
    icon: Compass,
    location: 'Merzouga to Fes',
    description:
      'Climb the highest dune before dawn. Watch the Sahara ignite in gold, amber, and rose. After a slow camp breakfast, transfer to Errachidia airport for a domestic flight to Fes. Check into Riad Fes, the city\'s most palatial riad, with soaring zouak-painted ceilings and a candlelit courtyard pool. Dinner at the riad\'s restaurant, then drinks on the rooftop overlooking the thousand-year-old medina.',
    highlights: ['Sahara sunrise from the dunes', 'Domestic flight to Fes', 'Riad Fes palace check-in', 'Rooftop drinks over the ancient medina'],
    accommodation: 'Riad Fes (from 2,800 MAD/night)',
  },
  {
    day: 7,
    title: 'Fes: Ancient Medina & Farewell Feast',
    icon: BookOpen,
    location: 'Fes',
    description:
      'A private historian leads you through the world\'s largest car-free urban area. The medieval tanneries, the 9th-century Al-Qarawiyyin (the world\'s oldest university), the Bou Inania madrasa, hidden zellige workshops. A private cooking class with a Fassi chef teaches you the secrets of rfissa and pastilla. Your farewell dinner is at Nur, where young chefs turn centuries-old recipes into something entirely new.',
    highlights: ['Private historian guide in ancient medina', 'Tanneries and Al-Qarawiyyin', 'Private cooking class with Fassi chef', 'Farewell dinner at Nur'],
    accommodation: 'Riad Fes (from 2,800 MAD/night)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIERS
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Luxury',
    icon: Crown,
    total: 'From 40,000 - 60,000 MAD per person (7 days)',
    color: 'text-[var(--color-gold)]',
    bg: 'bg-[var(--color-gold)]/10',
    description: '5-star riads, palace hotels, private guides, premium desert camps, fine dining, all private transfers.',
    lines: [
      { item: 'Accommodation (6 nights)', cost: 'From 18,000 - 30,000 MAD', detail: '5-star riads and palace hotels' },
      { item: 'Private transport & flights', cost: 'From 6,000 - 10,000 MAD', detail: 'Private driver, luxury SUV, domestic flights' },
      { item: 'Fine dining (7 days)', cost: 'From 6,000 - 10,000 MAD', detail: 'Palace restaurants, private rooftop dinners' },
      { item: 'Premium experiences', cost: 'From 6,000 - 8,000 MAD', detail: 'Private balloon, royal spa, VIP medina tours' },
      { item: 'Guides & tips', cost: 'From 4,000 - 6,000 MAD', detail: 'Expert historian guides, gratuities' },
    ],
  },
  {
    tier: 'Ultra-Luxury',
    icon: Gem,
    total: 'From 80,000 - 150,000+ MAD per person (7 days)',
    color: 'text-purple-600',
    bg: 'bg-purple-600/10',
    description: 'Palace suites with butlers, helicopter transfers, private desert camps with heated pools, bespoke experiences, Michelin-level dining.',
    lines: [
      { item: 'Accommodation (6 nights)', cost: 'From 40,000 - 72,000 MAD', detail: 'Royal Mansour suites, Dar Ahlam, Oberoi villas' },
      { item: 'Helicopter & luxury transport', cost: 'From 15,000 - 30,000 MAD', detail: 'Helicopter transfers, luxury SUV, first-class trains' },
      { item: 'Bespoke dining', cost: 'From 10,000 - 20,000 MAD', detail: 'Private chefs, palace dining, sommelier pairings' },
      { item: 'Exclusive experiences', cost: 'From 10,000 - 20,000 MAD', detail: 'Balloon, helicopter tour, yacht, desert glamping' },
      { item: 'Concierge & gratuities', cost: 'From 5,000 - 10,000 MAD', detail: 'Personal concierge, expert guides, premium tips' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a luxury trip to Morocco cost per person?',
    answer:
      'A 7-day luxury Morocco trip runs from 40,000 to 80,000 MAD per person, covering 5-star palace hotels, private transfers, fine dining, and premium experiences like hot air balloons and royal hammam treatments. Ultra-luxury itineraries with helicopter transfers, private desert camps with heated pools, and a personal concierge can exceed 120,000 MAD per person. Morocco delivers exceptional value: equivalent luxury in France, Italy, or the Middle East costs 40-60% more.',
  },
  {
    question: 'What are the best luxury hotels in Morocco?',
    answer:
      'The top six: Royal Mansour Marrakech (private riad suites with butlers, from 12,000 MAD/night), La Mamounia (legendary palace in 8-hectare gardens, from 8,000 MAD/night), Mandarin Oriental Marrakech (20-hectare resort with private villas, from 6,500 MAD/night), Oberoi Marrakech (28-acre retreat with just 18 accommodations, from 7,000 MAD/night), Four Seasons Marrakech (16-hectare family palace, from 5,500 MAD/night), and Kasbah Tamadot in the Atlas (Branson\'s mountain retreat, from 5,000 MAD/night).',
  },
  {
    question: 'When is the best time for a luxury Morocco holiday?',
    answer:
      'March to May and September to November. Spring delivers wildflowers in the Atlas, warmth between 20-28 degrees Celsius, and the Dades rose harvest. Autumn offers golden light, comfortable temperatures, and the date harvest in the oases. Winter (December-February) works well for Marrakech with mild sunny days and festive energy. Avoid July-August when inland temperatures exceed 40 degrees.',
  },
  {
    question: 'Can I charter a yacht along the Moroccan coast?',
    answer:
      'Yacht charters operate from Tangier, Agadir, and the Tamouda Bay marina near Tetouan. Day sailing yacht charters start from 8,000 MAD. Motor yachts with full crew and catering begin at 15,000 MAD per day. Multi-day Mediterranean cruises between Tangier and Al Hoceima pass secluded coves and dramatic cliffs. The best season is April through October.',
  },
  {
    question: 'Is a private guide necessary for luxury travel in Morocco?',
    answer:
      'A licensed private guide transforms the trip. They access private artisan workshops, hidden palace gardens, and family homes where guests are received with mint tea. In Fes, a guide can arrange access to normally restricted sections of Al-Qarawiyyin. Specialist English-speaking guides cost from 1,500-3,000 MAD per day. Your hotel concierge can arrange guides with expertise in history, architecture, or cuisine.',
  },
  {
    question: 'What luxury experiences are unique to Morocco?',
    answer:
      'Private overnight Sahara glamping under the Milky Way, royal hammam rituals with indigenous argan oil and rose petals, helicopter transfers over Atlas peaks, the Al Boraq high-speed train at 320 km/h, personal shoppers who navigate the souks for you, private cooking classes with palace chefs, and candlelit rooftop dinners above ancient medinas. No other country on Earth combines this exact set of experiences.',
  },
  {
    question: 'How do I get around Morocco in luxury?',
    answer:
      'Private drivers with Mercedes S-Class or Range Rover vehicles cost from 2,500 MAD per day. Helicopter transfers between cities start from 25,000 MAD per flight. The Al Boraq high-speed train covers Tangier to Casablanca in 2 hours 10 minutes, first class from 300 MAD. Domestic flights connect Marrakech, Fes, Errachidia, and other cities from 1,000 MAD. All luxury hotels manage transfers seamlessly.',
  },
  {
    question: 'What should I pack for a luxury Morocco trip?',
    answer:
      'Smart casual clothing that covers shoulders and knees for cultural sites. Linen or cotton in neutral tones for daytime, something more refined for palace restaurant evenings. Comfortable quality walking shoes for cobblestone medinas. Lightweight layers for desert evenings. A swimsuit for riad pools and spas. High-factor sunscreen, quality sunglasses, and a scarf for desert wind. Leave luggage space for purchases: Moroccan leather, zellige ceramics, saffron, and argan oil.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLuxuryTravelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-riad-interior.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Luxury Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Luxury Travel Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Luxury Travel Morocco:<br className="hidden md:block" /> The 5-Star Experience
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Palace hotels with private butlers. Sahara glamping under the Milky Way. Helicopter tours
            over the Atlas. Yacht charters along the Mediterranean coast. The definitive guide to
            Morocco at its most extraordinary.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco Ranks Among the World&apos;s Great Luxury Destinations
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco has spent a thousand years perfecting palatial architecture, and it shows. The
              Royal Mansour in Marrakech is a private medina built by a king. La Mamounia has hosted
              Churchill, Roosevelt, and every generation of European royalty since 1929. The Oberoi
              sits on 28 acres with just 18 accommodations. These are not hotels with good service.
              They are institutions where hospitality is treated as an art form handed down across
              centuries.
            </p>
            <p>
              The luxury extends far beyond thread count. In the Sahara, private camps place king-size
              beds and marble bathrooms at the edge of an ocean of golden dunes, with nothing between
              you and the Milky Way. In the Atlas Mountains, Kasbah Tamadot hangs above a Berber
              village with an infinity pool that seems to pour into the valley below. Along the
              Mediterranean coast, yacht charters anchor at secluded coves where the day&apos;s catch
              arrives on your plate within the hour.
            </p>
            <p>
              This guide covers the six finest hotels, private desert glamping, helicopter and yacht
              experiences, royal hammam rituals, personal souk shoppers, fine dining, a complete
              7-day VIP itinerary with day-by-day plans, realistic budgets in MAD, and answers
              to the questions luxury travelers actually ask. Morocco delivers experiences that rival
              anything in Europe or the Gulf States, at roughly half the price.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Luxury Hotels ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The 6 Best Luxury Hotels in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Royal Mansour, La Mamounia, Mandarin Oriental, Four Seasons, Oberoi, and Kasbah
            Tamadot. The absolute best places to stay in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Starting rates vary by season. Peak season (October-April) and holidays may add 30-50%. Book 4-6 months ahead for these properties.
          </p>

          <div className="space-y-10">
            {luxuryHotels.map((hotel) => {
              const HotelIcon = hotel.icon;
              return (
                <div key={hotel.rank} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={hotel.image}
                        alt={`${hotel.name} ${hotel.city} - luxury hotel Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <HotelIcon className="w-5 h-5 text-white" />
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">{hotel.name}</h3>
                        </div>
                        <p className="text-sm text-white/80 italic">{hotel.city} &mdash; {hotel.type}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                        {hotel.price}
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{hotel.description}</p>
                      <div className="space-y-2">
                        {hotel.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Private Luxury Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Private Luxury Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Desert glamping, helicopter tours, yacht charters, royal hammams, personal shoppers,
            and Africa&apos;s only high-speed train. Experiences that justify the trip on their own.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumExperiences.map((item) => {
              const ExpIcon = item.icon;
              return (
                <div key={item.experience} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.experience}</h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />{item.price}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{item.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    <strong>Best in:</strong> {item.bestIn}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fine Dining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fine Dining in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s finest restaurants serve centuries-old recipes with modern precision
            in settings that would stop any architect in their tracks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {fineDining.map((r) => {
              const RIcon = r.icon;
              return (
                <div key={r.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <RIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{r.name}</h3>
                      <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]"><MapPin className="w-3.5 h-3.5" />{r.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">{r.cuisine}</span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">{r.price}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{r.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices per person, seasonal variation applies. Reservations essential at all four. Palace hotel guests often receive priority booking.
          </p>
        </div>
      </section>

      {/* ── 7-Day Luxury Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Ultimate 7-Day Luxury Morocco Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech palaces, Atlas Mountains, Sahara desert glamping, and ancient Fes.
            Day by day, with accommodation prices and specific recommendations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Fully customizable. Add Essaouira for coastal luxury, extend the desert stay, or include Chefchaouen. Your hotel concierge can tailor every detail.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-8">
                {luxuryItinerary.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <DayIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">Day {day.day}</span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin className="w-3 h-3" />{day.location}</span>
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">{day.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">{day.description}</p>
                        <div className="space-y-2 mb-4">
                          {day.highlights.map((hl, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />{hl}
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-[var(--border-default)]">
                          <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <Bed className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />{day.accommodation}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Morocco Cost Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic budgets for luxury and ultra-luxury travel. Per person, 7 days.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            1 USD is approximately 10 MAD, 1 EUR approximately 11 MAD, 1 GBP approximately 13 MAD (2026 rates). Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${tier.bg} flex items-center justify-center shrink-0`}>
                      <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tier.tier}</h3>
                      <span className={`text-xs font-semibold ${tier.color}`}>{tier.total}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                  <div className="space-y-3">
                    {tier.lines.map((line, i) => (
                      <div key={i} className="border-b border-[var(--border-default)] pb-2 last:border-b-0">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-xs font-medium text-[var(--text-primary)]">{line.item}</span>
                          <span className={`text-xs font-semibold ${tier.color}`}>{line.cost}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{line.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Luxury Morocco Travel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Palace Hotels 4-6 Months Ahead
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Royal Mansour, La Mamounia, and the Oberoi have limited suites that sell out months
                before peak season (October-April). Mention celebrations when booking. Many properties
                arrange complimentary upgrades and bespoke surprises for anniversaries and honeymoons.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Use Your Hotel Concierge for Everything
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The concierge at a 5-star Moroccan hotel arranges private guides, helicopter transfers,
                desert camp bookings, restaurant reservations, and bespoke experiences unavailable to the
                public. Build a relationship from the first email. The return on that investment is enormous.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Protocol at 5-Star Properties
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tip from 50-100 MAD per day for housekeeping, from 100-200 MAD for concierge service,
                from 50-100 MAD per meal for restaurant staff, and from 200-500 MAD per day for private
                guides. A generous departure tip for your butler is standard and genuinely appreciated.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hire a Professional Photographer
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A professional session costs from 2,000-4,000 MAD for 2-3 hours. The best light hits
                at sunrise and golden hour. Your hotel recommends vetted photographers who know the
                most spectacular angles, hidden rooftops, and locations that never appear on social media.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Flower2 className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Do Not Over-Schedule
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The greatest luxury in Morocco is time. Leave space for a long breakfast on a palace
                terrace, an unplanned afternoon by the riad pool, a slow medina walk with no destination.
                Build at least two completely open half-days into your week. The best moments are unscripted.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Landmark className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Travel Insurance Is Non-Negotiable
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Invest in comprehensive coverage: medical evacuation, trip cancellation, lost luggage, and
                adventure activities like helicopter tours and balloon flights. Morocco has excellent
                private hospitals in Marrakech and Casablanca, but quality insurance protects a significant
                financial investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Luxury Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/morocco-best-riads" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Bed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Best Riads</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Top-rated riads in Marrakech, Fes, Essaouira, and Chefchaouen.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Spa &amp; Hammam Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Royal hammams, luxury spas, and wellness retreats across Morocco.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-honeymoon-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Honeymoon Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Romantic itineraries, luxury riads for couples, and planning tips.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Food Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">From street food to palace dining. The complete Morocco culinary guide.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/best-time-visit-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Best Time to Visit</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Month-by-month breakdown of weather, crowds, and seasonal pricing.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Crown className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Luxury Morocco Trip
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Palace suites, private Sahara camps, helicopter tours, and Michelin-level dining. Morocco
            delivers 5-star experiences that rival anywhere on Earth, at a fraction of the European price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-best-riads"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Building className="w-4 h-4" />
              Explore Best Riads
            </Link>
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Spa &amp; Hammam Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
