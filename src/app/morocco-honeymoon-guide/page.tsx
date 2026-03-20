import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Gem,
  Building,
  BookOpen,
  Crown,
  Camera,
  Utensils,
  Mountain,
  Compass,
  Globe,
  Sun,
  Thermometer,
  Plane,
  Calendar,
  Sunset,
  Luggage,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Honeymoon Guide 2026 | Romantic Destinations & Luxury Escapes',
  description:
    'Plan a Morocco honeymoon with this complete guide. Top romantic destinations including Marrakech, the Sahara, and Essaouira. Luxury riads, couples experiences, 7/10/14-day itineraries, and budget breakdowns from mid-range to ultra-luxury.',
  keywords: [
    'morocco honeymoon',
    'romantic morocco trip',
    'honeymoon marrakech',
    'couples travel morocco',
    'honeymoon in morocco',
    'morocco honeymoon resorts',
    'luxury honeymoon morocco',
    'sahara desert honeymoon',
    'morocco romantic getaway',
    'best riads for couples morocco',
    'morocco honeymoon itinerary',
    'la mamounia honeymoon',
    'royal mansour couples',
    'kasbah tamadot honeymoon',
    'morocco honeymoon cost',
    'morocco honeymoon packing list',
    'best time honeymoon morocco',
    'chefchaouen couples trip',
    'essaouira romantic escape',
    'atlas mountains honeymoon',
  ],
  openGraph: {
    title: 'Morocco Honeymoon Guide 2026 | Romantic Destinations & Luxury Escapes',
    description:
      'Complete Morocco honeymoon planning guide. Luxury riads, desert camps, romantic experiences, sample itineraries, and budgets from mid-range to ultra-luxury.',
    url: `${BASE_URL}/morocco-honeymoon-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-honeymoon.webp`,
        width: 1200,
        height: 630,
        alt: 'Romantic rooftop dinner setup at a Marrakech riad with candles, rose petals, and Atlas Mountain views at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Honeymoon Guide 2026 | Romantic Destinations & Luxury Escapes',
    description:
      'Luxury riads, Sahara desert camps, couples hammams, and private riad dinners. Complete honeymoon planning guide with 7/10/14-day itineraries.',
    images: [`${BASE_URL}/images/hero-honeymoon.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-honeymoon-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-honeymoon-guide`,
  name: 'Morocco Honeymoon Guide 2026 | Romantic Destinations & Luxury Escapes',
  description:
    'Complete guide to planning a romantic honeymoon in Morocco. Covers top destinations, luxury accommodations, couples experiences, sample itineraries, and detailed budget breakdowns.',
  url: `${BASE_URL}/morocco-honeymoon-guide`,
  image: `${BASE_URL}/images/hero-honeymoon.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-honeymoon-guide`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Honeymoon Guide', item: `${BASE_URL}/morocco-honeymoon-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a Morocco honeymoon cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'A mid-range Morocco honeymoon runs from 15,000-25,000 MAD per couple for 7 days, including boutique riad stays and guided excursions. Luxury honeymooners should budget from 50,000-120,000 MAD for 10 days at five-star properties like La Mamounia or Royal Mansour, with private experiences and internal flights.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a Morocco honeymoon?',
      acceptedAnswer: { '@type': 'Answer', text: 'March through May and September through November offer the most comfortable weather. Spring brings wildflowers in the Atlas Mountains and pleasant 22-28 C temperatures. Autumn has warm days, cool nights, and fewer crowds than summer. Avoid July-August if you dislike intense heat (40 C+ in Marrakech).' },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for honeymooners?',
      acceptedAnswer: { '@type': 'Answer', text: 'Morocco is one of the safest countries in North Africa for tourists. Petty crime like pickpocketing exists in crowded medinas, but violent crime against tourists is rare. Couples attract less attention from touts than solo travelers. Stick to well-lit areas after dark and use registered guides for desert excursions.' },
    },
    {
      '@type': 'Question',
      name: 'Can couples share a room in Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Married couples face no issues at any hotel or riad. Unmarried couples are officially required to show a marriage certificate at Moroccan hotels, but international tourist hotels and riads rarely enforce this. Book through international platforms, and bring a copy of your marriage certificate if you have one.' },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need for a Morocco honeymoon?',
      acceptedAnswer: { '@type': 'Answer', text: 'Seven days covers the essentials: Marrakech, the Atlas Mountains, and the Sahara or Essaouira. Ten days adds Fes and a second coastal city. Two weeks lets you explore at a relaxed pace, adding Chefchaouen or Ouarzazate without rushing.' },
    },
    {
      '@type': 'Question',
      name: 'What should couples pack for a Morocco honeymoon?',
      acceptedAnswer: { '@type': 'Answer', text: 'Modest but stylish clothing works best. Women should pack scarves for mosque visits and looser-fitting outfits for the medina. Bring layers for cool desert nights (temperatures drop to 5 C in winter) and sturdy sandals for uneven medina streets. Sunscreen SPF 50 and a good camera are essentials.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa for Morocco?',
      acceptedAnswer: { '@type': 'Answer', text: 'Citizens of the US, UK, EU, Canada, Australia, and many other countries get visa-free entry for 90 days. Your passport must be valid for at least six months from your arrival date. Check the Moroccan consulate website for your specific nationality before booking.' },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HONEYMOON DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const honeymoonDestinations = [
  {
    name: 'Marrakech',
    icon: Crown,
    tagline: 'The Red City of Romance',
    description:
      'Private riad courtyards with plunge pools, rooftop dinners above the medina, and some of Africa\'s finest luxury hotels. Marrakech delivers the sensory overload that makes a honeymoon unforgettable: spice-scented souks, golden sunsets over the Koutoubia minaret, and candlelit hammam sessions for two.',
    highlights: ['Rooftop dining with Atlas views', 'Couples hammam at luxury spas', 'Majorelle Garden morning walks', 'Hot air balloon at sunrise'],
    bestFor: 'Luxury & culture',
  },
  {
    name: 'Sahara Desert (Merzouga)',
    icon: Sunset,
    tagline: 'Starlight & Sand Dunes',
    description:
      'A night in a luxury desert camp at Erg Chebbi ranks among the most romantic experiences on Earth. Ride camels into the dunes at sunset, dine under a Saharan sky with zero light pollution, and wake to silence broken only by birdsong. Luxury camps offer private tented suites with en-suite bathrooms and heated plunge pools.',
    highlights: ['Sunset camel trek for two', 'Private luxury tented suite', 'Stargazing with no light pollution', 'Berber music around the fire'],
    bestFor: 'Once-in-a-lifetime romance',
  },
  {
    name: 'Essaouira',
    icon: Compass,
    tagline: 'Atlantic Coast Bohemia',
    description:
      'Wind-swept ramparts, fresh seafood grilled at the port, and a laid-back medina with none of Marrakech\'s intensity. Essaouira is perfect for couples who want long walks on empty beaches, sunset drinks on a riad terrace, and an unhurried pace. The town\'s art galleries and live Gnaoua music add creative energy.',
    highlights: ['Beach walks at Diabat', 'Sunset on the ramparts', 'Fresh oysters at the port', 'Argan oil spa treatments'],
    bestFor: 'Relaxed coastal escape',
  },
  {
    name: 'Fes',
    icon: Building,
    tagline: 'Medieval Grandeur & Intimacy',
    description:
      'The world\'s largest car-free urban area hides some of Morocco\'s most beautiful riads. Fes offers an intimate, intellectual honeymoon: explore the 9th-century University of Al Quaraouiyine, get lost together in 9,000 alleyways, and learn to cook pastilla and couscous in a private cooking class. Riad Fes and Palais Faraj offer five-star seclusion.',
    highlights: ['Private food tour of the medina', 'Couples cooking class', 'Al Quaraouiyine University visit', 'Rooftop views of the tanneries'],
    bestFor: 'Culture & gastronomy',
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    tagline: 'The Blue Pearl',
    description:
      'Every corner of this Rif Mountain town produces a photograph. The blue-washed walls create a dreamlike backdrop for honeymoon photos. Chefchaouen is small enough to explore in two days, with hiking trails in the surrounding Talassemtane National Park and local goat cheese tastings at nearby farms.',
    highlights: ['Blue medina photography', 'Ras El Maa waterfall hike', 'Akchour waterfalls day trip', 'Local goat cheese tasting'],
    bestFor: 'Photography & hiking',
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    tagline: 'Mountain Lodge Romance',
    description:
      'Kasbah Tamadot, Richard Branson\'s Moroccan retreat, sits at 1,800 meters with panoramic views of the High Atlas. The mountains offer cool air, hiking through Berber villages, mule treks to hidden waterfalls, and evenings by the fire. From June to September, the mountains are an escape from the lowland heat.',
    highlights: ['Kasbah Tamadot luxury retreat', 'Guided Berber village trek', 'Imlil Valley exploration', 'Mountain sunrise from the terrace'],
    bestFor: 'Adventure & seclusion',
  },
  {
    name: 'Ouarzazate & Dades Valley',
    icon: Globe,
    tagline: 'Cinematic Desert Landscapes',
    description:
      'The gateway to the Sahara passes through the Valley of a Thousand Kasbahs. Ait Benhaddou\'s UNESCO-listed earthen fortress appears in dozens of films. Stay in a converted kasbah hotel, drive the Dades Gorge switchbacks, and watch the sunset paint the desert pink. The Rose Valley blooms spectacularly each April.',
    highlights: ['Ait Benhaddou at golden hour', 'Dades Gorge road trip', 'Rose Valley in April', 'Kasbah hotel overnight'],
    bestFor: 'Road trip romance',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC HOTELS & RIADS
   ═══════════════════════════════════════════════════════════════ */

const romanticHotels = [
  {
    name: 'La Mamounia',
    location: 'Marrakech',
    icon: Crown,
    priceRange: 'From 8,000 MAD/night',
    description: 'A palace hotel since 1929, surrounded by eight hectares of gardens designed by French landscape architect. The Churchill Suite, the three-Michelin-starred restaurant by Jean-Georges, and the 2,500 sqm spa make this the definitive Marrakech luxury stay.',
    romantic: 'Private garden dining under century-old olive trees, couples spa rituals with gold-infused argan oil.',
  },
  {
    name: 'Royal Mansour',
    location: 'Marrakech',
    icon: Gem,
    priceRange: 'From 12,000 MAD/night',
    description: 'Each accommodation is a private three-story riad with its own plunge pool, rooftop terrace, and dedicated butler. Built by 1,500 artisans over three years. The white marble spa features an indoor pool, snow room, and vitality pool.',
    romantic: 'Total seclusion in your private riad, rooftop breakfast served by your butler at the hour you choose.',
  },
  {
    name: 'Kasbah Tamadot',
    location: 'Atlas Mountains',
    icon: Mountain,
    priceRange: 'From 5,500 MAD/night',
    description: 'Sir Richard Branson\'s Moroccan mountain retreat sits in the foothills of the Atlas at 1,800 meters. 28 rooms and suites decorated with antiques collected from Branson\'s travels. Infinity pool overlooking the valley, Berber tents for outdoor dining, and guided mountain treks.',
    romantic: 'Starlit dinner in a Berber tent, private picnic in the mountains arranged by the concierge.',
  },
  {
    name: 'Riad Fes',
    location: 'Fes',
    icon: Star,
    priceRange: 'From 3,500 MAD/night',
    description: 'A Relais & Chateaux property in the heart of the Fes medina. Restored 17th-century palace with intricate zouak ceilings, a courtyard pool, and a rooftop bar overlooking the old city. The in-house restaurant serves refined Fassi cuisine.',
    romantic: 'Rooftop cocktails at sunset, private Fassi cooking class in the riad kitchen.',
  },
  {
    name: 'La Sultana Essaouira',
    location: 'Essaouira',
    icon: Compass,
    priceRange: 'From 2,800 MAD/night',
    description: 'Built into the historic ramparts with direct ocean views. 28 rooms and suites, each uniquely designed. The spa uses locally sourced argan oil, and the restaurant serves Atlantic seafood caught that morning. The rooftop pool faces the ocean.',
    romantic: 'Sunset from the rampart terrace, private seafood dinner by candlelight on the rooftop.',
  },
  {
    name: 'Desert Luxury Camp (Erg Chebbi)',
    location: 'Merzouga, Sahara',
    icon: Sunset,
    priceRange: 'From 4,000 MAD/night',
    description: 'Top camps like Merzouga Luxury Desert Camp and Erg Chigaga Luxury Camp offer king-size beds, en-suite bathrooms with hot water, and private terraces facing the dunes. Some feature heated plunge pools. Dinner is served communally or privately under the stars.',
    romantic: 'Private dune dinner with Berber musicians, sunrise camel ride to the highest dune.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const romanticExperiences = [
  {
    name: 'Couples Hammam & Spa',
    icon: Sparkles,
    price: 'From 1,200 MAD per couple',
    duration: '90 min - 3 hours',
    description: 'A private hammam session for two at a luxury spa. The ritual starts with black soap and eucalyptus steam, followed by a kessa glove exfoliation, ghassoul clay mask, and a full-body argan oil massage. Heritage Spa and Les Bains de Marrakech both offer excellent couples packages.',
  },
  {
    name: 'Hot Air Balloon at Sunrise',
    icon: Sun,
    price: 'From 2,000 MAD per person',
    duration: '4 hours (including transfer)',
    description: 'Launch from the Palmeraie at dawn and float over the Haouz Plain as the Atlas Mountains glow pink. The flight lasts about 60 minutes, followed by a traditional Berber breakfast on landing. Book through Ciel d\'Afrique or Marrakech By Air for the most reliable operators.',
  },
  {
    name: 'Sunset Camel Trek',
    icon: Sunset,
    price: 'From 800 MAD per couple',
    duration: '2-3 hours',
    description: 'Ride into Erg Chebbi or Erg Chigaga as the desert turns gold and purple. Most treks include mint tea at a Berber camp and the option to spend the night. The silence after sunset is absolute, broken only by wind across the sand.',
  },
  {
    name: 'Private Riad Dinner',
    icon: Utensils,
    price: 'From 1,500 MAD per couple',
    duration: 'Full evening',
    description: 'Many riads arrange private rooftop or courtyard dinners with a personal chef. Expect five courses: briouats, harira, a tagine or tangia, couscous, and a dessert of pastilla with milk or orange blossom crème caramel. Rose petals, candles, and Gnaoua music set the scene.',
  },
  {
    name: 'Cooking Class Together',
    icon: BookOpen,
    price: 'From 500 MAD per person',
    duration: '4-5 hours',
    description: 'Start at the souk selecting ingredients with your chef-guide, then return to a riad kitchen to prepare a full Moroccan meal. You will learn tagine technique, how to roll couscous by hand, and the spice blends that define Moroccan cuisine. La Maison Arabe in Marrakech runs the most established program.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAMPLE ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    duration: '7 Days',
    title: 'Classic Honeymoon',
    icon: Heart,
    days: [
      { day: '1-3', location: 'Marrakech', activities: 'Arrive, check into a luxury riad. Day 2: souks, Bahia Palace, and Jardin Majorelle. Day 3: couples hammam, rooftop dinner.' },
      { day: '4', location: 'Atlas Mountains', activities: 'Private transfer to Kasbah Tamadot or Imlil lodge. Afternoon hike through Berber villages. Evening dinner on the terrace.' },
      { day: '5-6', location: 'Sahara Desert', activities: 'Drive through Ouarzazate and Dades Gorge to Merzouga. Sunset camel trek, luxury camp overnight. Sunrise from the dunes.' },
      { day: '7', location: 'Return to Marrakech', activities: 'Morning flight or scenic drive back. Final shopping in the souks. Farewell dinner at a Michelin-starred restaurant.' },
    ],
  },
  {
    duration: '10 Days',
    title: 'Extended Romance',
    icon: Gem,
    days: [
      { day: '1-3', location: 'Marrakech', activities: 'Luxury riad stay. Souks, palaces, hammam, hot air balloon at sunrise, cooking class, and private rooftop dinner.' },
      { day: '4-5', location: 'Essaouira', activities: 'Transfer to the coast. Beach walks, seafood lunch at the port, sunset on the ramparts, argan oil spa treatment.' },
      { day: '6', location: 'Atlas Mountains', activities: 'Return via Marrakech to the High Atlas. Afternoon hike, mountain lodge overnight.' },
      { day: '7-8', location: 'Sahara Desert', activities: 'Drive to Merzouga via Ait Benhaddou. Luxury desert camp, camel trek, stargazing, private dune dinner.' },
      { day: '9-10', location: 'Fes', activities: 'Internal flight to Fes. Medina exploration, private food tour, Riad Fes overnight. Depart from Fes airport.' },
    ],
  },
  {
    duration: '14 Days',
    title: 'Ultimate Morocco Honeymoon',
    icon: Crown,
    days: [
      { day: '1-3', location: 'Marrakech', activities: 'Full immersion: souks, palaces, hammam, cooking class, hot air balloon, Jardin Majorelle, evening at Djemaa el Fna.' },
      { day: '4-5', location: 'Essaouira', activities: 'Coastal relaxation. Beach, seafood, art galleries, Gnaoua music, argan cooperative visit.' },
      { day: '6-7', location: 'Atlas Mountains', activities: 'Kasbah Tamadot or boutique mountain lodge. Trek to Berber villages, waterfall hike, mountain picnic.' },
      { day: '8-9', location: 'Ouarzazate & Dades', activities: 'Ait Benhaddou, Dades Gorge, Rose Valley. Kasbah hotel stay.' },
      { day: '10-11', location: 'Sahara Desert', activities: 'Two nights at a luxury camp. Extended camel trek, sandboarding, private dinner, sunrise photography.' },
      { day: '12-13', location: 'Fes', activities: 'Medina deep dive, tanneries, pottery workshop, Fassi cuisine, rooftop sunset.' },
      { day: '14', location: 'Chefchaouen', activities: 'Day trip or overnight in the Blue Pearl. Photography walk, local cheese tasting. Depart from Fes.' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIERS
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Mid-Range Romantic',
    icon: Heart,
    perDay: 'From 2,000-3,500 MAD/day per couple',
    total7: 'From 15,000-25,000 MAD (7 days)',
    accommodation: 'Boutique riads with courtyards and pools (from 800-1,500 MAD/night)',
    dining: 'Riad breakfast included, lunch at local restaurants (from 80-150 MAD), dinner at mid-range restaurants (from 200-400 MAD)',
    experiences: 'Shared group tours, public hammam, self-guided medina walks',
    transport: 'Shared transfers, CTM buses between cities',
  },
  {
    tier: 'Luxury',
    icon: Gem,
    perDay: 'From 5,000-10,000 MAD/day per couple',
    total7: 'From 35,000-70,000 MAD (7 days)',
    accommodation: 'Five-star riads and hotels (from 2,500-5,000 MAD/night)',
    dining: 'Hotel restaurants, private riad dinners, wine pairings',
    experiences: 'Private guides, couples hammam, cooking classes, sunset camel trek',
    transport: 'Private driver and air-conditioned 4x4 throughout',
  },
  {
    tier: 'Ultra-Luxury',
    icon: Crown,
    perDay: 'From 12,000-20,000 MAD/day per couple',
    total7: 'From 85,000-140,000 MAD (7 days)',
    accommodation: 'La Mamounia, Royal Mansour, Kasbah Tamadot (from 5,500-15,000 MAD/night)',
    dining: 'Michelin-starred restaurants, private chef experiences, champagne and canapés',
    experiences: 'Hot air balloon, helicopter transfers, private desert camp, bespoke itineraries',
    transport: 'Chauffeur-driven luxury vehicle, internal flights, helicopter options',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const packingTips = [
  { item: 'Lightweight linen layers', icon: Sun, reason: 'Temperatures shift 15-20 C between day and night, especially in the desert and mountains. Linen breathes in heat and layers keep you warm after dark.' },
  { item: 'Modest but elegant outfits', icon: Heart, reason: 'Morocco is conservative. Shoulders and knees covered in the medina. Pack one dressy outfit for fine dining at La Mamounia or Royal Mansour.' },
  { item: 'Sturdy walking sandals', icon: Compass, reason: 'Medina streets are uneven stone and narrow. Avoid heels. Leather sandals or comfortable walking shoes handle both cobblestones and restaurant floors.' },
  { item: 'Scarf or pashmina', icon: ShieldCheck, reason: 'Essential for mosque visits (women). Also protects from sand in the desert, wind in Essaouira, and doubles as a blanket on cool evenings.' },
  { item: 'SPF 50 sunscreen & sunglasses', icon: Thermometer, reason: 'The Moroccan sun is intense year-round, especially in the Sahara. Reapply every two hours during outdoor activities.' },
  { item: 'Camera with low-light capability', icon: Camera, reason: 'Medina interiors, candlelit dinners, and desert starscapes demand good low-light performance. A mirrorless camera or recent smartphone handles this well.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHoneymoonGuide() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-honeymoon.webp"
          alt="Romantic rooftop terrace at a Marrakech riad with candles and rose petals at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-white/80 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Honeymoon Guide</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 leading-tight">
            Morocco Honeymoon Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-6">
            Romantic destinations, luxury riads, desert camps, and detailed itineraries for couples planning an unforgettable trip to Morocco
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 7 Destinations</span>
            <span className="flex items-center gap-1"><Building className="w-4 h-4" /> 6 Luxury Hotels</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 3 Itinerary Options</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Budget Breakdowns</span>
          </div>
        </div>
      </section>

      {/* ── Why Morocco for a Honeymoon ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Morocco for a Honeymoon
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco ranks among the top honeymoon destinations worldwide, and the reasons go far beyond Instagram appeal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Extraordinary Value
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A five-star riad in Marrakech costs a fraction of comparable luxury in Santorini or the Maldives. A candlelit
                five-course dinner for two runs from 800 MAD at many top-tier riads. Your budget stretches two to three times
                further here than in most European honeymoon destinations.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Built-in Romance
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan riads are designed around private courtyards, fountains, and rooftop terraces. Every element — the rose
                petals on the bed, the orange blossom water in the hammam, the candlelit zellige walls — creates intimacy without
                effort. The architecture itself is romantic.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Dramatic Diversity
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In a single trip, you move from medieval medinas to Atlantic beaches, snow-capped mountains to Saharan dunes. Few
                countries pack this range of landscapes into such a compact geography. A 10-day honeymoon here covers terrain
                that would require three separate trips elsewhere.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Privacy & Seclusion
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Riad architecture — inward-facing homes with no windows on the street — guarantees privacy. Even in the busiest
                medina, step through a riad door and you enter a silent courtyard. Luxury desert camps and mountain lodges offer
                total isolation with full-service hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Honeymoon Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Honeymoon Destinations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven destinations, each offering a distinct flavor of romance. Most honeymooners combine two or three.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honeymoonDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                        <DestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dest.name}
                        </h3>
                        <span className="text-xs text-[var(--color-gold)] font-medium">{dest.tagline}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>
                    <div className="space-y-2 mb-4">
                      {dest.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-accent)]">
                      <Star className="w-3.5 h-3.5" />
                      Best for: {dest.bestFor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Romantic Hotels & Riads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Romantic Hotels &amp; Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six properties that consistently earn top marks from honeymooning couples. Prices reflect seasonal variation; book
            direct for honeymoon packages that often include spa credits and private dinners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {romanticHotels.map((hotel) => {
              const HotelIcon = hotel.icon;
              return (
                <div key={hotel.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <HotelIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {hotel.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" /> {hotel.location}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-gold)] font-semibold">
                          <DollarSign className="w-3 h-3" /> {hotel.priceRange}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{hotel.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                          <Heart className="w-3 h-3 inline mr-1" />Romantic highlight:
                        </span>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{hotel.romantic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Romantic Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Experiences for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five experiences that transform a good trip into a great honeymoon. Book in advance during peak season (March-May, September-November).
          </p>

          <div className="space-y-6">
            {romanticExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {exp.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1 text-[var(--color-gold)] font-semibold">
                          <DollarSign className="w-3 h-3" /> {exp.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[var(--color-accent)]" /> {exp.duration}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sample Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Honeymoon Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tested routes from one week to two weeks. All can be customized with a private driver or self-driven rental.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {itineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.duration} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <ItinIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {itin.duration}
                      </h3>
                      <span className="text-xs text-[var(--color-gold)] font-medium">{itin.title}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {itin.days.map((d) => (
                      <div key={d.day} className="border-l-2 border-[var(--color-accent)] pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--color-accent)]">Day {d.day}</span>
                          <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {d.location}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{d.activities}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Budget Planning ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Honeymoon Budget Planning
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All prices are per couple and reflect 2026 rates. Seasonal pricing can change, especially during Christmas/New Year and Easter.
            Book at least three months ahead for luxury properties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tier.tier}
                      </h3>
                      <span className="text-xs text-[var(--color-gold)] font-semibold">{tier.perDay}</span>
                    </div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3 mb-4">
                    <span className="text-sm font-bold text-[var(--color-accent)]">{tier.total7}</span>
                  </div>
                  <div className="space-y-3 text-xs text-[var(--text-secondary)]">
                    <div>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Accommodation:</span>
                      <p className="mt-0.5">{tier.accommodation}</p>
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Dining:</span>
                      <p className="mt-0.5">{tier.dining}</p>
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Experiences:</span>
                      <p className="mt-0.5">{tier.experiences}</p>
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Transport:</span>
                      <p className="mt-0.5">{tier.transport}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time for a Morocco Honeymoon ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for a Morocco Honeymoon
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a year-round destination, but certain months stand out for honeymooners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Spring (March - May) — Peak Season
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The best overall window. Temperatures range from 22-28 C in Marrakech and Fes. The Atlas Mountains burst
                with wildflowers and almond blossoms. The Rose Valley near Ouarzazate blooms in April and hosts an annual
                rose festival. Desert temperatures are comfortable (25-32 C) rather than brutal.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sunset className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Autumn (September - November) — Best Value
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Warm days (24-30 C), cool evenings, and thinner crowds than spring. Hotel rates drop 15-25% compared to
                peak season. October is particularly good: the summer heat breaks, the ocean is still warm for swimming in
                Essaouira, and the date harvest fills the markets with fresh fruit.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Summer (June - August) — Coastal Focus
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Interior cities hit 40 C+ and the Sahara is off-limits for comfort. If you visit in summer, focus on Essaouira
                (22-26 C thanks to Atlantic breezes), the northern coast, or the Atlas Mountains. Luxury hotels in Marrakech drop
                rates significantly, and you can score La Mamounia for 30% less than spring.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                Winter (December - February) — Desert & South
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Perfect for the Sahara (15-22 C days, cold nights) and southern Morocco. Marrakech stays mild (18-22 C days)
                and sunny. The High Atlas gets snow, opening up the possibility of a ski-and-desert honeymoon combo. Christmas
                and New Year bring peak prices at luxury properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Honeymoon Packing Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack smart for Morocco&apos;s mix of medina streets, desert sand, mountain trails, and fine dining.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.item} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0 mt-0.5">
                      <TipIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {tip.item}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.reason}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a Morocco honeymoon cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A mid-range honeymoon runs from 15,000-25,000 MAD per couple for 7 days. This covers boutique riads, guided day trips,
                and restaurant meals. Luxury honeymooners should budget from 50,000-120,000 MAD for 10 days at five-star properties
                with private drivers, couples spa sessions, and desert camp overnights. Flights from Europe start from 2,000 MAD
                round-trip per person on budget carriers.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for a Morocco honeymoon?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                March through May and September through November deliver the best combination of weather, availability, and price.
                Spring averages 22-28 C in the cities and brings wildflowers to the Atlas. Autumn has fewer tourists and hotel
                rates drop 15-25% from peak. Avoid July-August unless you plan to stay on the coast, as Marrakech and Fes
                regularly exceed 40 C.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for honeymooners?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is one of the safest North African countries for tourists. Violent crime against visitors is extremely rare.
                Petty crime (pickpocketing, scams) exists in crowded medinas — keep valuables in your riad safe and use inside
                pockets in the souks. Couples generally attract less attention from touts than solo travelers. Registered guides
                for desert excursions eliminate navigation and safety concerns.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can couples share a room in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Married couples face zero issues at any accommodation. Moroccan law technically requires proof of marriage for
                shared rooms, but international tourist hotels, riads, and guesthouses booked through platforms like Booking.com
                or Airbnb rarely ask. Carry a copy of your marriage certificate as a precaution. In practice, refusal is
                extremely uncommon at tourist-oriented properties.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many days do you need for a Morocco honeymoon?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Seven days covers Marrakech, one excursion (Atlas Mountains or Sahara), and enough downtime to feel relaxed rather
                than rushed. Ten days adds a second city (Fes or Essaouira) and a more comfortable pace. Two weeks opens up the
                full country — Marrakech, Essaouira, Atlas, desert, Fes, and Chefchaouen — with rest days between transfers.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should couples pack for a Morocco honeymoon?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Layers are essential: lightweight linen or cotton for daytime heat, a warm layer for mountain and desert nights
                where temperatures drop to 5-10 C. Women should bring a scarf for mosque visits and conservative settings.
                Pack one dressy outfit for fine dining. Sturdy walking sandals beat heels on medina cobblestones. SPF 50
                sunscreen, a good camera, and a power adapter (Morocco uses Type C and E plugs) round out the list.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Citizens of the US, UK, EU, Canada, Australia, Japan, and many other countries enter visa-free for up to 90 days.
                Your passport must have at least six months validity from the date you arrive. No vaccinations are required for
                entry. Check your specific nationality at the Moroccan Ministry of Foreign Affairs website before booking,
                as visa requirements can change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s best hammams and luxury spas. Prices, etiquette, and the top 20 experiences.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-riads-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top-rated riads across Marrakech, Fes, Essaouira, and beyond. Boutique to ultra-luxury picks.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/luxury" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest hotels, restaurants, and experiences for luxury travelers across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--color-accent)] to-[#7a3a1e]">
        <div className="container-morocco text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Start Planning Your Morocco Honeymoon
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From the medinas of Marrakech to the silence of the Sahara, Morocco delivers romance at every price point.
            Explore our destination guides to build your perfect itinerary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Explore Marrakech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sahara-desert"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/20 transition-colors"
            >
              Sahara Desert Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
