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
  Tent,
  Mountain,
  Compass,
  Bed,
  Sun,
  Plane,
  Wallet,
  Calendar,
  Map,
  Train,
  Utensils,
  Anchor,
  Camera,
  BookOpen,
  ShoppingBag,
  MessageCircleQuestion,
  Users,
  Briefcase,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-luxury-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Luxury Travel Guide 2026 | Palace Hotels, VIP Tours & Desert Glamping',
  description:
    'The definitive Morocco luxury travel guide. Royal Mansour, La Mamounia, Amanjena, Mandarin Oriental, Four Seasons. Private desert camps, helicopter transfers, fine dining, luxury riads, VIP airport services, royal hammam rituals, and bespoke itineraries with prices in MAD.',
  keywords: [
    'luxury travel morocco',
    'luxury morocco holidays',
    'best luxury hotels morocco',
    'Royal Mansour Marrakech',
    'La Mamounia hotel',
    'Amanjena Marrakech',
    'Mandarin Oriental Marrakech',
    'Four Seasons Morocco',
    'luxury desert camp morocco',
    'private tour morocco',
    'morocco helicopter transfer',
    'luxury riad morocco',
    'fine dining morocco',
    'private hammam morocco',
    'morocco luxury itinerary 2026',
    'VIP airport morocco',
    'luxury shopping morocco',
    'morocco yacht charter',
  ],
  openGraph: {
    title: 'Morocco Luxury Travel Guide 2026 | Palace Hotels, VIP Tours & Desert Glamping',
    description:
      'Royal Mansour, La Mamounia, Amanjena, Mandarin Oriental. Desert glamping, helicopter transfers, yacht charters, and bespoke VIP itineraries. The complete luxury Morocco guide.',
    url: PAGE_URL,
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
    title: 'Morocco Luxury Travel Guide 2026 | Palace Hotels & VIP Experiences',
    description:
      'Palace hotels, private desert glamping, helicopter transfers, yacht charters, and fine dining. The complete guide to luxury travel in Morocco.',
    images: [`${BASE_URL}/images/hero-riad-interior.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'How much does a luxury trip to Morocco cost per person?',
    a: 'A 7-day luxury Morocco trip runs from 40,000 to 80,000 MAD per person. That covers 5-star palace hotels, private transfers, fine dining, and premium experiences like hot air balloons and royal hammam treatments. Ultra-luxury itineraries with helicopter transfers, private desert camps, and a personal concierge can exceed 120,000 MAD per person. Morocco delivers exceptional value: equivalent luxury in France or Italy costs 40-60% more.',
  },
  {
    q: 'What are the best luxury hotels in Morocco?',
    a: 'The top tier includes Royal Mansour Marrakech (from 12,000 MAD/night, private riad suites with butlers), La Mamounia (from 8,000 MAD/night, legendary palace hotel), Amanjena (from 7,500 MAD/night, Aman\'s serene Moorish pavilions), Mandarin Oriental Marrakech (from 6,500 MAD/night, 20 hectares of gardens), and Four Seasons Marrakech (from 5,500 MAD/night, family-friendly palace). Seasonal pricing can change during peak months.',
  },
  {
    q: 'When is the best time for a luxury Morocco holiday?',
    a: 'March to May and September to November are ideal. Spring delivers wildflowers, pleasant warmth between 20-28 degrees Celsius, and the Dades Valley rose harvest. Autumn brings golden light and harvest festivals. Winter (December-February) works well for Marrakech, with mild sunny days and snow-capped Atlas views. Avoid July and August inland, when temperatures climb past 40 degrees Celsius.',
  },
  {
    q: 'What luxury experiences are unique to Morocco?',
    a: 'Private overnight Sahara glamping under the Milky Way, royal hammam rituals with argan oil and Dades Valley rose petals, helicopter transfers over the Atlas Mountains, the Al Boraq high-speed train at 320 km/h, personal shoppers who negotiate the souks on your behalf, private cooking classes with palace chefs, and candlelit multi-course dinners on medina rooftops. No other country combines these specific elements.',
  },
  {
    q: 'Is a private guide necessary for luxury travel in Morocco?',
    a: 'A licensed private guide transforms the experience completely. They unlock doors tourists never see: private artisan workshops, hidden palace gardens, and homes where families invite you for tea. A specialist English-speaking guide costs from 1,500-3,000 MAD per day. For the Fes medina, a guide is practically essential given the complexity of the world\'s largest car-free urban area.',
  },
  {
    q: 'How do I get around Morocco in luxury?',
    a: 'Private drivers with Mercedes S-Class or Range Rover vehicles cost from 2,500 MAD per day. Helicopter transfers between cities start from 25,000 MAD per flight. The Al Boraq high-speed train covers Tangier to Casablanca in 2 hours 10 minutes with first-class cabins from 300 MAD. Domestic flights between Marrakech, Fes, and other cities run from 1,000 MAD. All luxury hotels arrange transfers through their concierge.',
  },
  {
    q: 'What VIP services are available at Moroccan airports?',
    a: 'Both Marrakech Menara and Casablanca Mohammed V airports offer VIP terminal services from 1,500 MAD per person. A personal agent meets you at the aircraft door, escorts you through a private immigration channel, handles luggage, and walks you to your waiting car. The VIP lounge includes refreshments and Wi-Fi. Processing takes under 15 minutes versus the typical 45-60 minutes in the main terminal.',
  },
  {
    q: 'What should I pack for a luxury Morocco trip?',
    a: 'Smart casual clothing that covers shoulders and knees for cultural sites. Linen or cotton in neutral tones for daytime, something more refined for palace restaurant evenings. Comfortable quality walking shoes for cobblestone medinas. Lightweight layers for desert evenings. A swimsuit for riad pools and spas. High-factor sunscreen, quality sunglasses, and a scarf for desert wind. Leave luggage space for purchases: Moroccan leather goods, zellige ceramics, saffron, and argan oil.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Luxury Travel Guide 2026',
  description:
    'The definitive guide to luxury travel in Morocco. Palace hotels, private desert camps, helicopter transfers, yacht charters, private hammams, fine dining, VIP airport services, and bespoke itineraries with realistic prices.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-riad-interior.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Luxury Travel', item: PAGE_URL },
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
   DATA: TOP LUXURY HOTELS
   ================================================================ */

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
      'Commissioned by King Mohammed VI as a private medina within the medina. Each accommodation is a three-story riad with its own plunge pool, rooftop terrace, and dedicated butler. Staff circulate through underground tunnels so guests never witness service in progress. The subterranean spa stretches across 2,500 square meters. La Grande Table Marocaine, led by Yannick Alleno, serves Moroccan cuisine at a level that would earn Michelin stars in Paris.',
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
      'Open since 1929, La Mamounia occupies eight hectares of legendary gardens against the Atlas Mountains. Winston Churchill painted here. The hotel blends art deco grandeur with Moorish geometry in a way no modern architect has managed to replicate. Three restaurants, a 2,500-square-meter spa with a traditional hammam, and a heated outdoor pool ringed by citrus groves. The renovated suites pair original mosaic floors with contemporary furniture.',
    highlights: ['Eight-hectare landmark gardens', 'Art deco meets Moorish architecture', '2,500 sqm spa complex', 'Churchill painted from the balcony'],
  },
  {
    rank: 3,
    name: 'Amanjena',
    city: 'Marrakech',
    type: 'Serene Aman Resort',
    icon: Gem,
    price: 'From 7,500 MAD per night',
    image: '/images/art-moroccan-riad-courtyard.webp',
    description:
      'Aman\'s first African property, designed by Ed Tuttle in a Moorish idiom around a central basin that mirrors the High Atlas peaks. Rose-pink pavilions surround reflecting pools and ancient olive trees. The silence is extraordinary for a property just minutes from the medina. Thirty-nine pavilions and six maisons (two-story houses with private gardens and heated pools) offer a level of minimalist luxury that strips away everything unnecessary.',
    highlights: ['Rose-pink pavilions around reflecting pools', 'Six private maisons with heated pools', 'Aman spa with hammam and cold plunge', 'Ancient olive grove setting'],
  },
  {
    rank: 4,
    name: 'Mandarin Oriental',
    city: 'Marrakech',
    type: 'Contemporary Palace Resort',
    icon: Award,
    price: 'From 6,500 MAD per night',
    image: '/images/hero-marrakech-koutoubia.webp',
    description:
      'Spread across 20 hectares of olive groves south of the medina, the Mandarin Oriental offers freestanding villas with private heated pools, outdoor rain showers, and walled gardens. The spa combines Moroccan traditions with Asian techniques. Ling Ling serves pan-Asian cuisine by the pool, while the Moroccan restaurant delivers tagines and pastilla with precision. The scale is enormous, the service immaculate, the silence almost startling after the medina.',
    highlights: ['20-hectare private estate feel', 'Freestanding villas with heated pools', 'Fusion of Moroccan and Asian spa', 'Ling Ling pan-Asian restaurant'],
  },
  {
    rank: 5,
    name: 'Four Seasons Resort',
    city: 'Marrakech',
    type: '5-Star Family Luxury',
    icon: Star,
    price: 'From 5,500 MAD per night',
    image: '/images/hero-atlas.webp',
    description:
      'Set within 16 hectares with direct Atlas Mountain views, the Four Seasons is the gold standard for families and travelers who want palace luxury without pretension. Two swimming pools, a world-class kids club, tennis courts, and an 800-square-meter spa sit alongside pavilion suites. The Moroccan restaurant Inara draws locals as well as guests. Service is Four Seasons through and through: anticipatory, warm, never stiff.',
    highlights: ['16-hectare garden grounds', 'Best luxury kids club in Morocco', '800 sqm spa sanctuary', 'Inara restaurant for serious Moroccan food'],
  },
  {
    rank: 6,
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    type: 'Mountain Luxury Retreat',
    icon: Mountain,
    price: 'From 5,000 MAD per night',
    image: '/images/hero-dades-valley.webp',
    description:
      'Sir Richard Branson purchased this kasbah above a Berber village in the High Atlas after his mother fell in love with it during a balloon trip. The infinity pool appears to spill over the edge of the mountain. Hand-carved furniture, Berber antiques, and genuinely warm staff create an atmosphere more private home than hotel. Helicopter arrival from Marrakech takes twelve minutes. The Kanoun restaurant serves refined Moroccan dishes with the Atlas peaks in every sightline.',
    highlights: ['Infinity pool over Atlas peaks', 'Helicopter arrival from Marrakech', 'Private terrace suites with plunge pools', 'Branson\'s personal mountain estate'],
  },
] as const;

/* ================================================================
   DATA: PREMIUM EXPERIENCES
   ================================================================ */

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
    experience: 'Helicopter Atlas Mountain Transfer',
    icon: Compass,
    price: 'From 25,000 MAD per flight (up to 5 passengers)',
    duration: '1-3 hours',
    description:
      'Lift from Marrakech over the Ourika Valley, circle the 4,167-meter summit of Mount Toubkal, fly above ancient kasbahs and dramatic gorges, then land at a private mountain lodge for a Berber lunch. Some operators combine this with a Marrakech-to-Sahara transfer, turning logistics into an unforgettable scenic experience that covers in 90 minutes what would take 8 hours by road.',
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
      'A private marble steam room, an expert therapist, black soap scrub with kessa gloves, ghassoul clay body mask, argan oil massage, and a rose water facial. The finest spas use ingredients sourced directly from Moroccan farms: argan from Essaouira, saffron from Taliouine, rose petals from Kelaat M\'Gouna. The Royal Mansour underground spa and La Mamounia\'s royal hammam set the standard.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    experience: 'VIP Airport Fast-Track Service',
    icon: Briefcase,
    price: 'From 1,500 MAD per person',
    duration: '15-20 minutes',
    description:
      'A personal agent meets you at the aircraft door, escorts you through a private immigration channel, handles all luggage, and walks you directly to your waiting vehicle. The VIP lounge at Marrakech Menara and Casablanca Mohammed V offers refreshments and Wi-Fi. The entire process takes 15 minutes versus the typical 45-60 minutes in the main terminal. Available for arrivals and departures.',
    bestIn: 'Marrakech, Casablanca, Tangier',
  },
  {
    experience: 'Personal Souk Shopper & Luxury Shopping',
    icon: ShoppingBag,
    price: 'From 1,500 MAD per half-day session',
    duration: '3-4 hours',
    description:
      'A professional personal shopper who speaks Arabic, French, and English navigates the labyrinth of the Marrakech or Fes souk on your behalf. They know the master artisans, the fair prices, and the workshops that produce genuine handmade goods. Expect to find hand-loomed Berber carpets, zellige ceramics, babouche slippers in custom sizes, and saffron at a third of what you would pay negotiating alone.',
    bestIn: 'Marrakech, Fes',
  },
] as const;

/* ================================================================
   DATA: FINE DINING
   ================================================================ */

const fineDining = [
  {
    name: 'La Grande Table Marocaine',
    location: 'Royal Mansour, Marrakech',
    icon: Crown,
    cuisine: 'Elevated Moroccan',
    price: 'From 1,500 MAD per person',
    description: 'Yannick Alleno applies Michelin-level precision to traditional Moroccan recipes. The dishes look architectural. The flavors are intensely concentrated. The palace setting raises the bar further. Reservations are essential weeks in advance.',
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
    description: 'Young Moroccan chefs reinterpret centuries-old Fassi recipes with modern technique and seasonal ingredients. The restored riad setting is intimate. The tasting menu changes with what the local markets deliver each day.',
  },
  {
    name: 'The Japanese Restaurant',
    location: 'Amanjena, Marrakech',
    icon: Award,
    cuisine: 'Japanese-Moroccan Fusion',
    price: 'From 700 MAD per person',
    description: 'An unexpected pairing that works because both cuisines share a reverence for fresh ingredients, precise technique, and visual beauty. The poolside setting under ancient olive trees adds a dimension no Tokyo restaurant can match.',
  },
] as const;

/* ================================================================
   DATA: LUXURY RIADS
   ================================================================ */

const luxuryRiads = [
  {
    name: 'Riad Goloboy',
    city: 'Marrakech',
    price: 'From 3,500 MAD per night',
    rooms: '5 suites',
    highlight: 'Indigo-blue interiors, rooftop plunge pool, contemporary Moroccan design that has been featured in Architectural Digest.',
  },
  {
    name: 'Riad Farnatchi',
    city: 'Marrakech',
    price: 'From 3,000 MAD per night',
    rooms: '9 suites',
    highlight: 'Five converted riads, underground spa, private cinema room, and a rooftop with Atlas Mountain panoramas.',
  },
  {
    name: 'Riad Fes',
    city: 'Fes',
    price: 'From 2,800 MAD per night',
    rooms: '16 rooms',
    highlight: 'The most palatial riad in Fes. Soaring zouak-painted ceilings, candlelit courtyard pool, and refined Fassi restaurant.',
  },
  {
    name: 'Dar Ahlam',
    city: 'Skoura Oasis',
    price: 'From 8,000 MAD per night',
    rooms: '14 suites',
    highlight: 'A "house of dreams" in a palm oasis. No menus, no set schedule. The staff anticipates every desire. Widely considered Morocco\'s most exclusive property.',
  },
] as const;

/* ================================================================
   DATA: 7-DAY LUXURY ITINERARY
   ================================================================ */

const luxuryItinerary = [
  {
    day: 1,
    title: 'Arrive Marrakech: Palace Welcome',
    icon: Plane,
    location: 'Marrakech',
    description:
      'A VIP airport agent meets you at the aircraft door and fast-tracks immigration in 15 minutes. A private driver waits with a chilled welcome drink in a Mercedes S-Class. Check into your palace hotel. Spend the afternoon exploring the private gardens and plunge pool at your own pace. By evening, your butler arranges a private rooftop dinner: rose petals, brass lanterns, a multi-course Moroccan feast, and the Atlas Mountains glowing pink.',
    highlights: ['VIP airport fast-track', 'Palace hotel check-in with butler', 'Private rooftop welcome dinner'],
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
      'Wake before dawn. A private hot air balloon carries you over the palmeraie as the first light sets the Atlas peaks on fire. After landing, a Berber breakfast spread on carpets in a field: msemen, honey, eggs, fruit, mint tea. Then your driver takes you into the High Atlas to Kasbah Tamadot for lunch on the panoramic terrace. Walk through a Berber village. Return to Marrakech for dinner at Dar Yacout.',
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
      'A private historian leads you through the world\'s largest car-free urban area. The medieval tanneries, the 9th-century Al-Qarawiyyin (the world\'s oldest university), the Bou Inania madrasa, hidden zellige workshops. A personal souk shopper helps you find handmade treasures at fair prices. Your farewell dinner is at Nur, where young chefs turn centuries-old recipes into something entirely new.',
    highlights: ['Private historian guide in ancient medina', 'Tanneries and Al-Qarawiyyin', 'Personal souk shopping experience', 'Farewell dinner at Nur'],
    accommodation: 'Riad Fes (from 2,800 MAD/night)',
  },
] as const;

/* ================================================================
   DATA: BUDGET TIERS
   ================================================================ */

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
      { item: 'Accommodation (6 nights)', cost: 'From 40,000 - 72,000 MAD', detail: 'Royal Mansour suites, Dar Ahlam, Amanjena maisons' },
      { item: 'Helicopter & luxury transport', cost: 'From 15,000 - 30,000 MAD', detail: 'Helicopter transfers, luxury SUV, first-class trains' },
      { item: 'Bespoke dining', cost: 'From 10,000 - 20,000 MAD', detail: 'Private chefs, palace dining, sommelier pairings' },
      { item: 'Exclusive experiences', cost: 'From 10,000 - 20,000 MAD', detail: 'Balloon, helicopter tour, yacht, desert glamping' },
      { item: 'Concierge & gratuities', cost: 'From 5,000 - 10,000 MAD', detail: 'Personal concierge, expert guides, premium tips' },
    ],
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoLuxuryTravelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

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
            Morocco Luxury Travel:<br className="hidden md:block" /> The Complete 5-Star Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Palace hotels with private butlers. Sahara glamping under the Milky Way. Helicopter transfers
            over the Atlas. Fine dining in candlelit palaces. Every premium experience Morocco offers,
            with real prices and day-by-day itineraries.
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
              Churchill, Roosevelt, and every generation of European royalty since 1929. Amanjena
              translates Moorish design into a stillness that makes time feel irrelevant. These are
              not hotels with good service. They are institutions where hospitality is treated as
              an art form handed down across centuries.
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
              This guide covers the top palace hotels and resorts, luxury riads, private desert glamping,
              helicopter transfers, royal hammam rituals, VIP airport services, fine dining, luxury
              shopping, a complete 7-day VIP itinerary with day-by-day plans, realistic budgets in MAD,
              and answers to the questions luxury travelers actually ask. Morocco delivers experiences
              that rival anything in Europe or the Gulf States, at roughly half the price.
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
            Royal Mansour, La Mamounia, Amanjena, Mandarin Oriental, Four Seasons, and Kasbah
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

      {/* ── Luxury Riads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Luxury Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For travelers who prefer intimate, design-forward properties inside the medina
            over large resort hotels. These riads deliver palace-level service with under
            20 rooms each.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {luxuryRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{riad.name}</h3>
                    <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]"><MapPin className="w-3.5 h-3.5" />{riad.city}</span>
                  </div>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">{riad.rooms}</span>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {riad.price}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{riad.highlight}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Seasonal pricing can change. Book luxury riads 3-5 months ahead during peak season. Most offer airport transfers and private hammam services.
          </p>
        </div>
      </section>

      {/* ── Private Luxury Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Private Luxury Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Desert glamping, helicopter transfers, yacht charters, royal hammams, VIP airport
            services, and personal souk shoppers. Experiences that justify the trip on their own.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fine Dining in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s finest restaurants serve centuries-old recipes with modern precision
            in settings that would stop any architect in their tracks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            Prices per person, seasonal variation applies. Reservations essential at all five. Palace hotel guests often receive priority booking.
          </p>
        </div>
      </section>

      {/* ── Luxury Shopping ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Shopping in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From master-crafted Berber carpets to saffron from Taliouine, Morocco produces
            luxury goods that cannot be found anywhere else on Earth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { item: 'Hand-Knotted Berber Carpets', price: 'From 3,000 MAD for a quality small rug', where: 'Marrakech & Fes souks', detail: 'Genuine hand-knotted carpets take 2-6 months to produce. A personal shopper identifies authentic pieces from the dozens of workshops in each city. Large vintage carpets can cost from 15,000-50,000 MAD.' },
              { item: 'Zellige Ceramics & Tilework', price: 'From 200 MAD per decorative tile set', where: 'Fes artisan workshops', detail: 'Fes produces the finest zellige in the world. Commission custom pieces directly from the master craftsmen (maalem) who supply Morocco\'s palaces. Shipping can be arranged.' },
              { item: 'Argan Oil (Cosmetic Grade)', price: 'From 150 MAD per 100ml', where: 'Women\'s cooperatives near Essaouira', detail: 'Buy directly from the source at women\'s cooperatives between Marrakech and Essaouira. Cold-pressed, certified organic cosmetic argan oil. The cooperatives also offer private demonstrations of the traditional extraction process.' },
              { item: 'Saffron from Taliouine', price: 'From 80 MAD per gram', where: 'Taliouine or trusted herbalists', detail: 'Morocco produces some of the finest saffron in the world, rivaling Iranian grades. A single gram contains roughly 450 hand-picked stigmas. Buy from certified sources to avoid adulteration.' },
              { item: 'Custom Leather Goods', price: 'From 500 MAD for handmade bags', where: 'Marrakech & Fes tanneries', detail: 'Morocco\'s leather tradition spans centuries. Commission custom babouche slippers, bags, or jackets from the artisans who supply European fashion houses. Allow 3-7 days for bespoke orders.' },
              { item: 'Haute Couture Caftans', price: 'From 2,000 MAD', where: 'Marrakech boutiques', detail: 'Moroccan caftans designed with premium fabrics, hand-embroidery, and custom tailoring. The Gueliz neighborhood in Marrakech has boutiques that rival anything on the Champs-Elysees.' },
            ].map((shop) => (
              <div key={shop.item} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{shop.item}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[var(--color-gold)] font-medium">{shop.price}</span>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin className="w-3 h-3" />{shop.where}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{shop.detail}</p>
              </div>
            ))}
          </div>
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
                Royal Mansour, La Mamounia, and Amanjena have limited suites that sell out months
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
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
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

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Luxury Morocco in Pictures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-courtyard.webp"
                alt="Luxury riad courtyard in Marrakech with turquoise plunge pool and traditional tilework"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Riad Courtyard</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-desert-glamping.webp"
                alt="Luxury desert camp in Sahara dunes with elegant tent and golden sunset"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Desert Glamping</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/cover-morocco-luxury.webp"
                alt="Panoramic view of luxury Moroccan property with Atlas Mountains in the background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Luxury</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the questions luxury travelers ask most about Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Best Riads in Morocco',
                description: 'Top-rated riads in Marrakech, Fes, Essaouira, and Chefchaouen with prices and booking tips.',
                href: '/morocco-best-riads',
                icon: Bed,
              },
              {
                title: 'Spa & Hammam Guide',
                description: 'Royal hammams, luxury spas, traditional products, and step-by-step ritual for first-timers.',
                href: '/morocco-spa-guide',
                icon: Sparkles,
              },
              {
                title: 'Morocco Food Guide',
                description: 'From street food to palace dining. The complete culinary guide with restaurant picks by city.',
                href: '/morocco-food-guide',
                icon: Utensils,
              },
              {
                title: 'Honeymoon Guide',
                description: 'Romantic itineraries, luxury riads for couples, private experiences, and planning advice.',
                href: '/morocco-honeymoon-guide',
                icon: Heart,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More Luxury Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Luxury &amp; Premium Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-wellness-retreats', title: 'Wellness Retreats', desc: 'Multi-day retreats combining hammam, yoga, meditation, and healthy cuisine in stunning settings.' },
              { href: '/best-time-visit-morocco', title: 'Best Time to Visit', desc: 'Month-by-month breakdown of weather, crowds, and seasonal pricing for planning your trip.' },
              { href: '/morocco-desert-tours', title: 'Desert Tours', desc: 'From budget excursions to ultra-luxury glamping. All Sahara experiences compared.' },
              { href: '/etiquette', title: 'Morocco Etiquette', desc: 'Dress code, tipping customs, greetings, and social norms for respectful travel in Morocco.' },
              { href: '/morocco-budget-travel', title: 'Budget Travel Guide', desc: 'Proof that Morocco rewards every budget. Backpacker tips alongside luxury alternatives.' },
              { href: '/first-time-morocco', title: 'First Time in Morocco', desc: 'Everything first-time visitors need to know. Airports, visas, safety, money, and culture.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Crown className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Luxury Morocco Trip
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Palace suites, private Sahara camps, helicopter transfers, and Michelin-level dining. Morocco
            delivers 5-star experiences that rival anywhere on Earth, at a fraction of the European price.
            The only question is which extraordinary moment you want first.
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
