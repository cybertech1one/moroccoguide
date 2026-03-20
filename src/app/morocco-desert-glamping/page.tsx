import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Sun,
  Moon,
  Compass,
  Camera,
  Tent,
  Calendar,
  Backpack,
  Heart,
  Sunrise,
  Sparkles,
  Wind,
  Globe,
  BookOpen,
  Eye,
  Flame,
  Music,
  Thermometer,
  UtensilsCrossed,
  Leaf,
  Droplets,
  Car,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Morocco Desert Glamping 2026 | Luxury Sahara Camp Guide & Prices',
  description:
    'Complete guide to desert glamping in Morocco. Compare luxury Sahara camps at Erg Chebbi, Erg Chigaga, Zagora & Agafay Desert. Prices from 1,500 MAD, stargazing, camel rides, gourmet dining & sustainable desert tourism tips.',
  keywords: [
    'Morocco desert glamping',
    'luxury desert camp Morocco',
    'Sahara glamping experience',
    'glamping Morocco Sahara',
    'luxury Sahara tent Morocco',
    'Erg Chebbi glamping',
    'Erg Chigaga luxury camp',
    'Agafay desert glamping',
    'Zagora desert camp',
    'Morocco luxury camping',
    'Sahara luxury tent',
    'desert glamping Merzouga',
    'glamping under the stars Morocco',
    'Morocco desert luxury stay',
    'best glamping Morocco 2026',
    'desert camp with pool Morocco',
    'Berber luxury camp Sahara',
    'Morocco glamping prices',
    'sustainable desert tourism Morocco',
    'Sahara overnight luxury',
  ],
  openGraph: {
    title: 'Morocco Desert Glamping 2026 | Luxury Sahara Camp Guide & Prices',
    description:
      'Plan your luxury desert glamping in Morocco. Compare camps at Erg Chebbi, Erg Chigaga, Zagora & Agafay. Prices from 1,500 MAD with stargazing, gourmet dining & camel rides.',
    url: `${BASE_URL}/morocco-desert-glamping`,
    images: [
      {
        url: `${BASE_URL}/images/hero-desert-glamping.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxury glamping tent with elegant furnishings in the Moroccan Sahara Desert at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Desert Glamping 2026 | Luxury Sahara Camp Guide',
    description:
      'Luxury desert glamping in Morocco: compare camp tiers from 1,500 MAD, top locations at Erg Chebbi, Agafay & Erg Chigaga, stargazing, camel rides & sustainability tips.',
    images: [`${BASE_URL}/images/hero-desert-glamping.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-desert-glamping` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-desert-glamping`,
  name: 'Morocco Desert Glamping 2026 | Luxury Sahara Camp Guide & Prices',
  description:
    'The ultimate guide to luxury desert glamping in Morocco. Compare camp tiers, locations, prices, activities, best seasons, and sustainability practices for an unforgettable Sahara experience.',
  url: `${BASE_URL}/morocco-desert-glamping`,
  image: `${BASE_URL}/images/hero-desert-glamping.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-desert-glamping`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Sahara Desert' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'Place', name: 'Merzouga' },
    { '@type': 'Place', name: 'Erg Chigaga' },
    { '@type': 'Place', name: 'Agafay Desert' },
    { '@type': 'Place', name: 'Zagora' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Desert Glamping', item: `${BASE_URL}/morocco-desert-glamping` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does desert glamping cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Standard glamping starts from 1,500 MAD per person per night. Luxury camps with en-suite bathrooms and hot showers cost from 2,500 MAD. Ultra-luxury experiences with private plunge pools and personal chefs start from 5,000 MAD. Agafay desert glamping near Marrakech starts from 2,000 MAD. Prices vary by season, with peak rates from October to April.' } },
    { '@type': 'Question', name: 'What is the difference between glamping and regular desert camping in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Glamping (glamorous camping) offers hotel-quality amenities in a desert setting. Unlike basic camps with shared facilities and foam mattresses, glamping provides private tents with real beds, en-suite bathrooms, hot showers, gourmet dining, and often extras like pools, spas, and cocktail service. The desert experience remains the same but the comfort level is dramatically higher.' } },
    { '@type': 'Question', name: 'Where are the best glamping locations in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The four top locations are: Erg Chebbi near Merzouga for the widest range of luxury camps and iconic golden dunes; Erg Chigaga near M\'Hamid for remote wilderness with massive 300-meter dunes; Zagora and Draa Valley for a blend of oasis scenery and desert; and Agafay Desert just 40 minutes from Marrakech for a convenient luxury desert experience without the long drive to the Sahara.' } },
    { '@type': 'Question', name: 'Is Agafay Desert glamping worth it compared to the Sahara?', acceptedAnswer: { '@type': 'Answer', text: 'Agafay is a rocky desert 40 minutes from Marrakech. It offers stunning luxury camps with Atlas Mountain views, pools, and excellent dining. However, it has no sand dunes. If you want the classic Sahara dune experience, choose Erg Chebbi or Erg Chigaga. If you are short on time or want a convenient luxury desert escape from Marrakech, Agafay is excellent.' } },
    { '@type': 'Question', name: 'What activities are included with desert glamping in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Most glamping packages include camel rides at sunset, sandboarding on dunes, stargazing sessions, traditional Berber music around a campfire, gourmet multi-course dinners, and sunrise viewing. Ultra-luxury camps add spa treatments, private 4x4 excursions, telescope-assisted astronomy, yoga sessions, and personal photography sessions.' } },
    { '@type': 'Question', name: 'When is the best time for desert glamping in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'October to April is the best season. March to April and October to November offer warm days (25-32 degrees) and cool, comfortable nights (10-18 degrees). December to February has the clearest skies for stargazing but cold nights near freezing. Avoid June to September when daytime temperatures exceed 45 degrees Celsius in the Sahara.' } },
    { '@type': 'Question', name: 'How do I get to desert glamping camps from Marrakech or Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Agafay Desert is only 40 minutes from Marrakech by car. For Erg Chebbi (Merzouga), drive 10 hours from Marrakech or 8 hours from Fes, or fly to Errachidia and drive 2 hours. For Erg Chigaga, drive to M\'Hamid (8 hours from Marrakech) then take a 1.5-hour 4x4 transfer. Most luxury camps arrange private transfers from major cities.' } },
    { '@type': 'Question', name: 'Are Morocco desert glamping camps eco-friendly?', acceptedAnswer: { '@type': 'Answer', text: 'Many luxury camps now prioritize sustainability. Best practices include solar power for electricity and hot water, composting toilets or bio-treatment waste systems, locally sourced organic food, water recycling, employing local Berber communities, and minimizing plastic waste. Look for camps that mention specific sustainability certifications or practices when booking.' } },
  ],
};

/* ===============================================================
   DATA: GLAMPING LOCATIONS
   =============================================================== */

const glampingLocations = [
  {
    name: 'Erg Chebbi (Merzouga)',
    icon: Sun,
    image: '/images/hero-camel-caravan-sahara.webp',
    landscape: 'Towering golden sand dunes up to 150 meters',
    distance: '10 hours from Marrakech, 8 hours from Fes',
    campCount: '15+ luxury and glamping camps',
    priceFrom: 'From 2,500 MAD per person',
    highlights: ['Most iconic dune landscape in Morocco', 'Widest selection of luxury camps', 'Combine with Khamlia village and Gnawa music', 'Easy paved road access to Merzouga'],
    bestFor: 'First-time visitors, photographers, honeymooners, and luxury seekers',
  },
  {
    name: 'Erg Chigaga (M\'Hamid)',
    icon: Wind,
    image: '/images/hero-desert.webp',
    landscape: 'Vast dune field stretching 40 km with dunes up to 300 meters',
    distance: '8 hours from Marrakech, then 1.5-hour 4x4 transfer',
    campCount: '5-8 luxury camps',
    priceFrom: 'From 3,000 MAD per person',
    highlights: ['Largest dunes in Morocco at 300 meters', 'Complete wilderness isolation', 'Dramatic 4x4 crossing through open desert', 'Virtually no other tourists in sight'],
    bestFor: 'Adventure seekers, couples wanting total solitude, repeat visitors to Morocco',
  },
  {
    name: 'Zagora & Draa Valley',
    icon: Compass,
    image: '/images/hero-sahara-sunrise.webp',
    landscape: 'Palm-lined oasis and rolling desert hills with scattered dunes',
    distance: '6 hours from Marrakech',
    campCount: '5-10 glamping options',
    priceFrom: 'From 1,500 MAD per person',
    highlights: ['Beautiful Draa Valley palm groves en route', 'Gateway to the famous "52 Days to Timbuktu" sign', 'Less crowded alternative to Merzouga', 'Mix of oasis and desert scenery'],
    bestFor: 'Travelers wanting a shorter drive with a blend of oasis and desert',
  },
  {
    name: 'Agafay Desert (near Marrakech)',
    icon: Mountain,
    image: '/images/hero-camping.webp',
    landscape: 'Rocky lunar desert with Atlas Mountain panoramas',
    distance: '40 minutes from Marrakech',
    campCount: '10+ luxury glamping camps',
    priceFrom: 'From 2,000 MAD per person',
    highlights: ['Just 40 minutes from Marrakech', 'Stunning Atlas Mountain backdrop', 'Many camps have swimming pools', 'Easy to combine with city sightseeing'],
    bestFor: 'Short stays, Marrakech-based travelers, those who want luxury without the long drive',
  },
] as const;

/* ===============================================================
   DATA: CAMP TIERS
   =============================================================== */

const campTiers = [
  {
    tier: 'Basic Bivouac',
    icon: Tent,
    tagline: 'Authentic nomadic simplicity',
    price: 'From 600 MAD per person',
    description: 'Simple Berber-style tents with foam mattresses on the sand. Shared basic toilet facilities and communal dining. Many travelers sleep outside directly under the stars. The rawest way to experience the desert without any luxury frills.',
    amenities: ['Foam mattress and blankets', 'Shared basic toilet', 'Traditional tagine dinner', 'Mint tea and simple breakfast', 'Camel ride to camp'],
    missing: ['No electricity or charging', 'No hot water or showers', 'No private bathroom', 'No heating'],
  },
  {
    tier: 'Standard Camp',
    icon: Moon,
    tagline: 'Comfortable desert experience',
    price: 'From 1,200 MAD per person',
    description: 'Private tents with real beds, proper mattresses, and pillows. Shared bathroom facilities with flush toilets. Communal dining area with carpets and cushions. Some camps offer limited solar-powered lighting and charging stations.',
    amenities: ['Private tent with real bed', 'Shared flush toilets', 'Multi-course dinner', 'Breakfast and mint tea', 'Camel ride both ways', 'Solar-powered lighting'],
    missing: ['No private bathroom', 'No hot showers', 'Limited phone charging', 'No air conditioning'],
  },
  {
    tier: 'Luxury Glamping',
    icon: Star,
    tagline: 'Hotel-quality comfort in the wilderness',
    price: 'From 2,500 MAD per person',
    description: 'Spacious private tents with quality beds, Moroccan decor, and en-suite bathrooms with hot showers and flush toilets. Beautifully decorated dining tent with multi-course gourmet meals. Generator-powered electricity and often a small pool or lounge area.',
    amenities: ['Spacious tent with en-suite bathroom', 'Hot shower and flush toilet', 'Gourmet multi-course dinner', 'Cocktail service and bar', 'Sandboarding equipment', 'Berber music entertainment', '4x4 or camel transfer'],
    missing: ['Alcohol may cost extra', 'Spa treatments at extra cost', 'No air conditioning in most'],
  },
  {
    tier: 'Ultra-Luxury Glamping',
    icon: Sparkles,
    tagline: 'Five-star desert suites',
    price: 'From 5,000 MAD per person',
    description: 'Designer tents with king-size beds, heated floors, private terraces overlooking dunes, and full-size bathtubs. Private plunge pools, personal chefs, dedicated guides, and telescope-assisted stargazing. No more than 10-15 guests for total exclusivity.',
    amenities: ['Designer suite with luxury furnishings', 'Private bathroom with bathtub', 'Personal chef and guide', 'Premium dinner with wine pairing', 'Private sunrise camel ride', 'Telescope stargazing session', 'Spa and wellness treatments', '4x4 dune excursion'],
    missing: ['International flights not included', 'Travel insurance not included'],
  },
] as const;

/* ===============================================================
   DATA: INCLUDED ACTIVITIES
   =============================================================== */

const glampingActivities = [
  { name: 'Sunset Camel Ride', icon: Sunrise, description: 'Ride through golden dunes as the sun paints the sand in warm hues. Caravans of 2-10 camels follow ancient Berber routes to camp, lasting 45 minutes to 1.5 hours depending on the camp location.' },
  { name: 'Sandboarding', icon: Mountain, description: 'Surf down towering dunes on wooden or waxed boards. No experience needed. Most camps provide equipment and guides point you to the best slopes. Works best on larger dunes at Erg Chebbi and Erg Chigaga.' },
  { name: 'Stargazing Sessions', icon: Moon, description: 'The Sahara offers some of the darkest skies on earth. On clear nights around new moon, the Milky Way is visible in breathtaking detail. Luxury camps often provide telescopes with guided constellation tours.' },
  { name: 'Berber Music & Drumming', icon: Music, description: 'After dinner, Berber hosts play traditional drums and sing songs around the campfire. Guests are invited to join in. This communal experience under the stars is one of the most memorable moments of any desert stay.' },
  { name: 'Gourmet Desert Dining', icon: UtensilsCrossed, description: 'Luxury camps serve multi-course meals featuring slow-cooked tagines, madfouna (sand bread), couscous, fresh salads, and traditional desserts. Top camps offer wine pairings, private dining setups, and candlelit dune-top dinners.' },
  { name: 'Sunrise Viewing', icon: Sun, description: 'Wake before dawn and climb a high dune to watch the Sahara come alive. The first light paints the sand in soft pink and gold. The cool morning air and vast silence make this an almost spiritual experience.' },
] as const;

/* ===============================================================
   DATA: BEST TIME TO GO
   =============================================================== */

const seasonGuide = [
  { season: 'Peak Season (Oct-Nov)', dayTemp: '28-34', nightTemp: '12-20', icon: Sun, rating: 5, verdict: 'Ideal', note: 'Warm days, cool comfortable nights. The sweet spot for glamping with clear skies and pleasant temperatures for both outdoor activities and sleeping.' },
  { season: 'Winter (Dec-Feb)', dayTemp: '18-24', nightTemp: '0-8', icon: Thermometer, rating: 4, verdict: 'Great for stargazing', note: 'The clearest skies of the year for stargazing. Days are pleasant but nights require heavy warm layers. Luxury camps with heated tents are worth the premium.' },
  { season: 'Spring (Mar-Apr)', dayTemp: '25-35', nightTemp: '10-18', icon: Sunrise, rating: 5, verdict: 'Ideal', note: 'Another perfect window with warm days and comfortable nights. April can have occasional sandstorms. Wildflowers may bloom in the Draa Valley.' },
  { season: 'Late Spring (May)', dayTemp: '32-40', nightTemp: '18-24', icon: Flame, rating: 3, verdict: 'Getting hot', note: 'Still possible but afternoon heat becomes intense. Mornings and evenings remain pleasant. Fewer tourists mean better prices and availability.' },
  { season: 'Summer (Jun-Sep)', dayTemp: '40-50+', nightTemp: '25-32', icon: AlertTriangle, rating: 1, verdict: 'Not recommended', note: 'Extreme heat makes the Sahara uncomfortable and potentially dangerous. Even luxury camps cannot fully escape 45-degree-plus daytime temperatures. Agafay near Marrakech is more bearable.' },
] as const;

/* ===============================================================
   DATA: HOW TO GET THERE
   =============================================================== */

const transportRoutes = [
  { from: 'Marrakech to Agafay', icon: Car, duration: '40 minutes', distance: '40 km', method: 'Private transfer or taxi', note: 'Most Agafay camps arrange pickup from your Marrakech hotel. Some offer helicopter transfers for an ultra-luxury arrival.' },
  { from: 'Marrakech to Merzouga (Erg Chebbi)', icon: Compass, duration: '9-10 hours', distance: '560 km', method: 'Private driver, shared tour, or rental car', note: 'The classic route crosses the High Atlas at Tizi n\'Tichka pass and follows the Road of a Thousand Kasbahs. Break the drive with an overnight in Ouarzazate or Dades Gorge.' },
  { from: 'Fes to Merzouga (Erg Chebbi)', icon: Compass, duration: '7-8 hours', distance: '480 km', method: 'Private driver, shared tour, or rental car', note: 'Scenic route through the Middle Atlas cedar forests and Ziz Valley. Pass through Ifrane, Midelt, and the dramatic Ziz Gorge before reaching Merzouga.' },
  { from: 'Marrakech to M\'Hamid (Erg Chigaga)', icon: Compass, duration: '8 hours + 1.5-hour 4x4', distance: '600 km + 50 km off-road', method: 'Private driver then 4x4 transfer', note: 'Drive to M\'Hamid via Ouarzazate and Zagora, then transfer by 4x4 across open desert to reach Erg Chigaga camps. Some camps arrange the entire journey.' },
  { from: 'Fly to Errachidia', icon: Globe, duration: '1-hour flight + 2-hour drive', distance: '130 km Errachidia to Merzouga', method: 'Domestic flight then transfer', note: 'RAM flies Casablanca to Errachidia. From Errachidia airport, arrange a private transfer to Merzouga. The fastest option if you want to skip the long drive.' },
] as const;

/* ===============================================================
   DATA: PACKING LIST
   =============================================================== */

const packingEssentials = [
  {
    category: 'Clothing & Layers',
    icon: Backpack,
    items: [
      { item: 'Warm fleece or down jacket', why: 'Desert nights drop to 0-8 degrees in winter. Even luxury tents can feel cold before heating kicks in.' },
      { item: 'Light long-sleeve layers', why: 'Sun protection during the day. Cotton or linen breathes well in dry heat.' },
      { item: 'Headscarf or cheche', why: 'Essential for sand and sun protection. Available locally from 30 MAD if you forget.' },
      { item: 'Comfortable closed-toe shoes', why: 'For dune walking and rocky terrain. Sand gets into open shoes immediately.' },
    ],
  },
  {
    category: 'Tech & Essentials',
    icon: Camera,
    items: [
      { item: 'Portable power bank', why: 'Even luxury camps may have limited charging points. Keep your phone and camera topped up.' },
      { item: 'Camera with spare batteries', why: 'Cold pre-dawn temperatures drain batteries fast. Bring at least one spare for sunrise shots.' },
      { item: 'Ziplock bags for electronics', why: 'Fine desert sand penetrates everything. Protect your phone, camera, and lenses.' },
      { item: 'Headlamp or small flashlight', why: 'Useful for pre-dawn sunrise climbs and nighttime stargazing walks away from camp.' },
    ],
  },
  {
    category: 'Health & Comfort',
    icon: Heart,
    items: [
      { item: 'Sunscreen SPF 50+', why: 'Desert sun is intense even in winter. Reapply every 2 hours, especially on camels.' },
      { item: 'Lip balm with SPF', why: 'Extremely dry air cracks lips within hours. Bring a quality balm with sun protection.' },
      { item: 'Water bottle (1-2 liters)', why: 'Stay hydrated. Aim for 2-3 liters per day. Camps provide water but carry your own too.' },
      { item: 'Personal medications', why: 'The nearest pharmacy may be hours away. Bring everything you might need, including anti-diarrhea medication.' },
    ],
  },
] as const;

/* ===============================================================
   DATA: SUSTAINABILITY
   =============================================================== */

const sustainabilityPractices = [
  { practice: 'Solar Power', icon: Sun, description: 'Leading glamping camps use solar panels for electricity and water heating, reducing reliance on diesel generators in the fragile desert ecosystem.' },
  { practice: 'Water Conservation', icon: Droplets, description: 'Responsible camps use water recycling systems, low-flow fixtures, and greywater treatment. Some collect condensation and use traditional Berber water management techniques.' },
  { practice: 'Local Employment', icon: Users, description: 'The best camps employ local Berber families as guides, cooks, and staff. Revenue stays in desert communities that have called the Sahara home for centuries.' },
  { practice: 'Waste Management', icon: Leaf, description: 'Eco-conscious camps pack out all waste, compost organic matter, eliminate single-use plastics, and use biodegradable products. Look for camps that mention their waste policies.' },
  { practice: 'Cultural Preservation', icon: BookOpen, description: 'Quality camps support Berber cultural heritage through music performances, storytelling, traditional cooking demonstrations, and funding local schools and clinics.' },
  { practice: 'Desert Conservation', icon: ShieldCheck, description: 'Responsible operators follow established tracks to prevent dune erosion, limit group sizes, and educate guests about the desert ecosystem and its fragile balance.' },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'How much does desert glamping cost in Morocco?',
    answer:
      'Standard glamping starts from 1,500 MAD per person per night and includes private tents, meals, and activities. Luxury camps with en-suite bathrooms and hot showers cost from 2,500 MAD. Ultra-luxury experiences with private plunge pools and personal chefs start from 5,000 MAD. Agafay desert glamping near Marrakech starts from 2,000 MAD. Seasonal pricing can change, so confirm rates when booking.',
  },
  {
    question: 'What is the difference between glamping and regular desert camping?',
    answer:
      'Glamping (glamorous camping) provides hotel-quality amenities in a desert setting. Unlike basic camps with shared facilities and foam mattresses, glamping offers private tents with real beds, en-suite bathrooms, hot showers, gourmet dining, and often extras like pools, spas, and cocktail bars. The desert magic of stargazing, sunsets, and silence remains identical, but your comfort level is dramatically higher.',
  },
  {
    question: 'Where are the best glamping locations in Morocco?',
    answer:
      'Four standout locations: Erg Chebbi near Merzouga for iconic golden dunes and the widest camp selection. Erg Chigaga near M\'Hamid for remote wilderness with massive 300-meter dunes. Zagora and the Draa Valley for a blend of oasis and desert scenery with a shorter drive. Agafay Desert just 40 minutes from Marrakech for convenient luxury without the long journey to the Sahara.',
  },
  {
    question: 'Is Agafay Desert glamping worth it compared to the Sahara?',
    answer:
      'Agafay is a rocky desert 40 minutes from Marrakech with stunning Atlas Mountain views, excellent luxury camps, swimming pools, and fine dining. However, it has no sand dunes. If you want the classic Sahara experience with towering golden dunes, choose Erg Chebbi or Erg Chigaga. If time is limited or you want a convenient luxury desert escape from Marrakech, Agafay is an excellent choice.',
  },
  {
    question: 'What activities are included with desert glamping?',
    answer:
      'Most glamping packages include sunset camel rides, sandboarding, stargazing sessions, traditional Berber music around a campfire, gourmet multi-course dinners, and sunrise viewing. Ultra-luxury camps add spa treatments, private 4x4 excursions, telescope-guided astronomy, yoga sessions, and personal photography services. Always confirm inclusions before booking.',
  },
  {
    question: 'When is the best time for desert glamping in Morocco?',
    answer:
      'October to April is the best season. March to April and October to November offer warm days (25-34 degrees) and cool, comfortable nights (10-20 degrees) perfect for glamping. December to February has the clearest skies for stargazing but cold nights near freezing. Avoid June to September when Sahara daytime temperatures exceed 45 degrees Celsius.',
  },
  {
    question: 'How do I get to desert glamping camps from Marrakech?',
    answer:
      'Agafay Desert is just 40 minutes from Marrakech by car. For Erg Chebbi near Merzouga, drive 9-10 hours or fly to Errachidia and drive 2 hours. For Erg Chigaga, drive 8 hours to M\'Hamid then take a 1.5-hour 4x4 transfer. Most luxury camps arrange private transfers from major cities, and some offer helicopter arrivals for the ultimate experience.',
  },
  {
    question: 'Are Morocco desert glamping camps eco-friendly?',
    answer:
      'Many luxury camps now prioritize sustainability with solar power, water recycling, composting, local Berber employment, and plastic-free policies. Look for camps that mention specific sustainability practices. Supporting eco-conscious camps helps preserve the fragile desert ecosystem while benefiting local communities who have lived in harmony with the Sahara for generations.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-sahara-overnight',
    icon: Tent,
    title: 'Sahara Overnight Guide',
    description: 'Complete guide to spending a night in the Sahara: camp types, prices from 600 MAD, itineraries, and stargazing tips.',
  },
  {
    href: '/morocco-desert-tour',
    icon: Compass,
    title: 'Morocco Desert Tour Guide',
    description: 'Compare 1-night, 2-night, and 3-night Sahara tours with prices, routes, and camp options.',
  },
  {
    href: '/desert',
    icon: Sun,
    title: 'Desert Experiences',
    description: 'All of Morocco\'s desert adventures: camel rides, 4x4 tours, sandboarding, and overnight camps.',
  },
  {
    href: '/morocco-camping-guide',
    icon: Mountain,
    title: 'Morocco Camping Guide',
    description: 'From Sahara desert camps to Atlas Mountain bivouacs: your complete guide to camping across Morocco.',
  },
  {
    href: '/stargazing',
    icon: Moon,
    title: 'Stargazing in Morocco',
    description: 'Discover the darkest skies in Morocco: Sahara dunes, Atlas peaks, and remote desert observatories.',
  },
  {
    href: '/sahara',
    icon: Globe,
    title: 'Complete Sahara Guide',
    description: 'Everything about the Moroccan Sahara: geography, Berber culture, travel logistics, and must-see locations.',
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoDesertGlampingPage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-desert-glamping.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Desert Glamping</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Luxury Desert Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Desert Glamping:
            <br className="hidden md:block" /> Luxury Under the Stars 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From elegant Berber-style tents at 1,500 MAD to ultra-luxury desert suites at 8,000 MAD.
            Compare glamping camps at Erg Chebbi, Erg Chigaga, Zagora, and Agafay with stargazing,
            gourmet dining, and camel rides included.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is Desert Glamping in Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Desert glamping combines the raw magic of the Sahara with the comforts of a luxury
                hotel. Imagine falling asleep in a beautifully decorated tent with a king-size bed,
                en-suite bathroom, and hot shower, then stepping outside to find yourself surrounded
                by towering golden dunes under a sky dense with stars. This is glamping in Morocco:
                glamorous camping that lets you experience the desert without sacrificing comfort.
              </p>
              <p>
                Morocco pioneered luxury desert camping in North Africa, and today the country offers
                some of the most spectacular glamping experiences on the continent. From permanent
                camps with swimming pools and spa facilities near Merzouga to intimate seasonal
                bivouacs deep in the Erg Chigaga wilderness, there is a glamping experience for every
                taste and budget. The Berber hosts who run these camps bring generations of desert
                knowledge, ensuring an authentic cultural experience alongside the luxury.
              </p>
              <p>
                Whether you choose the iconic golden dunes of Erg Chebbi, the remote wilderness of
                Erg Chigaga, the oasis landscapes near Zagora, or the convenient Agafay Desert just
                40 minutes from Marrakech, this guide covers every detail you need to plan your
                perfect desert glamping adventure.
              </p>
            </div>
          </div>

          {/* Permanent vs Seasonal */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-1.5">
                  Permanent Camps
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Built as year-round structures with solid foundations, permanent luxury camps operate
                throughout the season (October to May) and offer the highest amenities: swimming pools,
                restaurant tents, hot tubs, and generator-powered electricity. These are concentrated
                around Erg Chebbi and Agafay where infrastructure access is easiest.
              </p>
              <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <Info className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>Permanent camps typically accommodate 20-40 guests and should be booked 2-4 weeks ahead during peak season.</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Wind className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-1.5">
                  Seasonal & Mobile Camps
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Set up for the October-to-April season and dismantled during summer, seasonal camps are
                common in Erg Chigaga and remote areas. They offer a more intimate experience with
                fewer guests (often just 6-12), providing genuine wilderness solitude. Amenities are
                slightly more limited but still include private tents, hot showers, and quality dining.
              </p>
              <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <Info className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>Seasonal camps leave minimal environmental footprint and often relocate slightly each year to prevent desert erosion.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Stats -- */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">1,500 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting price (glamping)</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">4 Locations</div>
              <div className="text-sm text-[var(--text-muted)]">Top glamping destinations</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">4 Tiers</div>
              <div className="text-sm text-[var(--text-muted)]">Basic to ultra-luxury</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Oct-Apr</div>
              <div className="text-sm text-[var(--text-muted)]">Best months for glamping</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Glamping Locations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Desert Glamping Locations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four distinct desert landscapes, each offering a unique glamping atmosphere from towering Sahara dunes to the rocky Agafay near Marrakech.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {glampingLocations.map((location) => {
              const LocationIcon = location.icon;
              return (
                <div key={location.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-52">
                    <img
                      src={location.image}
                      alt={`Desert glamping at ${location.name}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <LocationIcon className="w-5 h-5" />
                        {location.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {location.priceFrom}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-[var(--surface-muted)] p-2 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)]">Landscape</div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{location.landscape}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-2 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)]">Camps Available</div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{location.campCount}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)] mb-4">
                      <Car className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span><strong>Distance:</strong> {location.distance}</span>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)] mb-4">
                      <Users className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span><strong>Best for:</strong> {location.bestFor}</span>
                    </div>

                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      <CheckCircle className="w-3 h-3 inline text-green-600 mr-1" />
                      Highlights
                    </h4>
                    <div className="space-y-1.5">
                      {location.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Camp Tiers -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Desert Camps: Basic to Ultra-Luxury
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Choose the camp tier that matches your budget and comfort level. All tiers deliver the same magical desert setting.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies during peak months (October-April).
          </p>

          <div className="space-y-10">
            {campTiers.map((camp) => {
              const CampIcon = camp.icon;
              return (
                <div key={camp.tier} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <CampIcon className="w-6 h-6" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold">{camp.tier}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{camp.tagline}</p>
                    <p className="text-white font-bold mt-2">
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      {camp.price}
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="text-[var(--text-secondary)] mb-6">{camp.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">What Is Included</h4>
                        <div className="space-y-2">
                          {camp.amenities.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Not Included</h4>
                        <div className="space-y-2">
                          {camp.missing.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Included Activities -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Is Included in Desert Glamping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the luxury tent, glamping packages include unforgettable desert experiences from camel rides to stargazing under the clearest skies on earth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glampingActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{activity.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Time to Go -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for Desert Glamping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            October to April is glamping season. Here is how each period compares for temperature, comfort, and sky clarity.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {seasonGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3 md:w-56 shrink-0">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      <div>
                        <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{season.season}</h3>
                        <span className={`text-xs font-bold ${season.rating >= 4 ? 'text-green-600' : season.rating >= 3 ? 'text-amber-600' : 'text-red-600'}`}>
                          {season.verdict}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4 md:w-40 shrink-0">
                      <div className="text-xs">
                        <div className="text-[var(--text-muted)]">Day</div>
                        <div className="font-bold text-[var(--text-primary)]">{season.dayTemp} C</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-[var(--text-muted)]">Night</div>
                        <div className="font-bold text-[var(--text-primary)]">{season.nightTemp} C</div>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] flex-1">{season.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- How to Get There -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Get to Desert Glamping Camps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options from Morocco&apos;s major cities to each glamping destination, with travel times and practical tips.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-6">
                {transportRoutes.map((route, index) => {
                  const RouteIcon = route.icon;
                  return (
                    <div key={index} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <RouteIcon className="w-5 h-5 text-white" />
                      </div>

                      <div className="card-moroccan p-5 flex-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          {route.from}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-2">
                          <span><Clock className="w-3 h-3 inline mr-1" />{route.duration}</span>
                          <span><MapPin className="w-3 h-3 inline mr-1" />{route.distance}</span>
                          <span><Car className="w-3 h-3 inline mr-1" />{route.method}</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{route.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Glamping vs Hotel tip -- */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl">
          <div className="card-moroccan p-6">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Glamping vs Staying in a Merzouga Hotel
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  Merzouga has comfortable hotels and riads right at the edge of the dunes. Staying in a
                  hotel means air conditioning, reliable Wi-Fi, and a full restaurant. But you miss the
                  magic: sleeping surrounded by dunes, waking up for sunrise without a car ride, and
                  the total silence of a desert night. Even one glamping night is worth adding to a
                  hotel-based stay.
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Our recommendation:</strong> spend one night glamping in the dunes and one
                  night at a hotel in Merzouga for the best of both worlds. Most luxury camps can
                  arrange this combination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- What to Pack -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Desert Glamping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Even luxury camps are in the desert. These essentials ensure you are comfortable, protected, and ready to capture every moment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packingEssentials.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CategoryIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-start gap-2 text-sm text-[var(--text-primary)] font-medium">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          {item.item}
                        </div>
                        <p className="text-xs text-[var(--text-muted)] ml-6 mt-0.5">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sustainability -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sustainable Desert Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is a fragile ecosystem. Choosing responsible glamping camps helps preserve the desert for future generations while supporting local Berber communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sustainabilityPractices.map((practice) => {
              const PracticeIcon = practice.icon;
              return (
                <div key={practice.practice} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <PracticeIcon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-2">
                      {practice.practice}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{practice.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    How to Choose a Responsible Camp
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Ask about solar power usage, waste management, water sourcing, and local employment
                    practices before booking. The best camps are transparent about their environmental
                    impact and actively invest in their surrounding Berber communities. Avoid camps that
                    leave visible waste, use excessive generators, or employ only non-local staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything travelers ask about desert glamping in Morocco, answered with practical detail.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Eye className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Desert Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Morocco&apos;s desert experiences with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
                        {guide.title}
                        <ArrowRight className="w-4 h-4 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Desert Glamping?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the golden dunes of Erg Chebbi to the intimate luxury of Agafay, Morocco offers
            some of the world&apos;s finest desert glamping. Start planning your starlit desert
            adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-desert-tour"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Explore Desert Tours
            </Link>
            <Link
              href="/morocco-sahara-overnight"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
            >
              <Tent className="w-5 h-5" />
              Sahara Overnight Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
