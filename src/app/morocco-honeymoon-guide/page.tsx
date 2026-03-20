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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Honeymoon Guide 2026 | Best Romantic Destinations, Luxury Riads & Couples Activities',
  description:
    'Plan the perfect honeymoon in Morocco. Discover the most romantic destinations from Marrakech to the Sahara, luxury riads like Royal Mansour and La Mamounia, couples activities, a 7-day itinerary, budget breakdown, and insider tips for an unforgettable romantic trip.',
  keywords: [
    'morocco honeymoon',
    'honeymoon in morocco',
    'morocco honeymoon resorts',
    'romantic morocco',
    'best place in morocco for couples',
    'honeymoon morocco',
    'morocco couples trip',
    'romantic riads morocco',
    'morocco honeymoon itinerary',
    'luxury honeymoon morocco',
    'sahara desert honeymoon',
    'marrakech honeymoon',
    'morocco romantic getaway',
    'couples activities morocco',
    'morocco honeymoon budget',
    'best time for morocco honeymoon',
  ],
  openGraph: {
    title: 'Morocco Honeymoon Guide 2026 | Romantic Destinations & Luxury Riads',
    description:
      'Your complete guide to a romantic honeymoon in Morocco. Top destinations, luxury riads, couples activities, 7-day itinerary, and budget planning tips.',
    url: `${BASE_URL}/morocco-honeymoon-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-honeymoon.webp`,
        width: 1200,
        height: 630,
        alt: 'Romantic Moroccan riad courtyard with rose petals, lanterns, and candlelit dinner setting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Honeymoon Guide 2026 | Romantic Destinations & Luxury Riads',
    description:
      'Plan an unforgettable honeymoon in Morocco. Luxury riads, Sahara sunsets, private cooking classes, and more. Complete guide with itinerary and budget.',
    images: [`${BASE_URL}/images/hero-honeymoon.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-honeymoon-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-honeymoon-guide`,
  name: 'Morocco Honeymoon Guide 2026 | Best Romantic Destinations, Luxury Riads & Couples Activities',
  description:
    'Complete guide to planning the perfect honeymoon in Morocco. Romantic destinations, luxury riads, couples activities, 7-day itinerary, and budget breakdown.',
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good honeymoon destination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is an exceptional honeymoon destination offering a unique blend of romance, luxury, culture, and adventure. From candlelit dinners in ancient riads to sunset camel rides across the Sahara, Morocco provides unforgettable experiences at a fraction of the cost of European or Caribbean alternatives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Morocco for a honeymoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for a honeymoon in Morocco are March-May and September-November. Spring offers blooming gardens and mild temperatures (20-25 C), while autumn brings warm days and cool evenings. Avoid July-August when inland temperatures can exceed 40 C.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a honeymoon in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A luxury honeymoon in Morocco typically costs from 25,000-50,000 MAD per person for 7 days, including flights, luxury riad accommodation, private tours, and fine dining. Budget-conscious couples can enjoy a beautiful trip from 12,000-20,000 MAD per person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most romantic places in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most romantic places in Morocco include Marrakech (luxury riads and rooftop dining), the Sahara Desert (private glamping under the stars), Essaouira (coastal charm and sunset walks), Chefchaouen (blue-painted streets), and Fes (ancient medina and palace hotels).',
      },
    },
    {
      '@type': 'Question',
      name: 'What couples activities are available in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular couples activities include private cooking classes, hammam spa experiences for two, sunset camel rides in the Sahara, hot air balloon rides over Marrakech, private rooftop dinners, Atlas Mountain trekking, and shopping together in the vibrant souks.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const romanticDestinations = [
  {
    name: 'Marrakech',
    icon: Crown,
    image: '/images/hero-marrakech-koutoubia.webp',
    tagline: 'The Red City of Romance',
    description:
      'Marrakech is the ultimate honeymoon base. Centuries-old riads with plunge pools, rooftop restaurants overlooking the Atlas Mountains, world-class spas, and the intoxicating energy of Jemaa el-Fnaa square. Every corner is designed for romance.',
    highlights: ['Private riad suites with plunge pools', 'Rooftop dining under the stars', 'World-class hammam experiences', 'Hot air balloon sunrise flights'],
  },
  {
    name: 'Sahara Desert',
    icon: Sparkles,
    image: '/images/art-sahara-golden-hour.webp',
    tagline: 'Starlit Nights in the Dunes',
    description:
      'Nothing compares to spending a night together under a canopy of stars in the Sahara. Private luxury desert camps offer king-size beds in elegant tents, candlelit dinners on the dunes, and sunrise views that will take your breath away.',
    highlights: ['Private luxury desert camps', 'Sunset camel rides for two', 'Stargazing in absolute silence', 'Candlelit dinner on the dunes'],
  },
  {
    name: 'Essaouira',
    icon: Compass,
    image: '/images/hero-essaouira-ramparts.webp',
    tagline: 'Coastal Charm and Ocean Breezes',
    description:
      'This laid-back coastal town offers a completely different pace of romance. Walk hand-in-hand along the ramparts at sunset, enjoy fresh seafood by the harbor, explore the art galleries, and let the Atlantic breeze set the mood for a quieter kind of love.',
    highlights: ['Sunset walks along the ramparts', 'Fresh seafood dining by the port', 'Boutique oceanfront riads', 'Windsurfing and beach horseback riding'],
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    image: '/images/art-chefchaouen-blue.webp',
    tagline: 'The Blue Pearl',
    description:
      'The most photogenic town in Morocco is also one of its most romantic. Wander through blue-painted streets, sip mint tea on a hidden terrace, and hike to the Spanish Mosque for panoramic views at golden hour. Chefchaouen is pure magic for couples.',
    highlights: ['Endlessly photogenic blue streets', 'Quiet mountain atmosphere', 'Hiking trails with panoramic views', 'Artisan workshops and boutique shopping'],
  },
  {
    name: 'Fes',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    tagline: 'Ancient Grandeur and Hidden Palaces',
    description:
      'Fes offers a deeper, more cultural romantic experience. Stay in a restored palace-riad, explore the world\'s oldest university, lose yourselves in the labyrinthine medina, and dine in riads where sultans once entertained. Fes is romance with substance.',
    highlights: ['Restored palace-riad accommodation', 'Private guided medina tours', 'Traditional Fassi cooking classes', 'Rooftop views of the ancient medina'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY RIADS FOR COUPLES
   ═══════════════════════════════════════════════════════════════ */

const luxuryRiads = [
  {
    name: 'Royal Mansour',
    city: 'Marrakech',
    icon: Crown,
    price: 'From 15,000 MAD per night',
    description:
      'The ultimate honeymoon splurge. Each accommodation is a private three-story riad with its own plunge pool, rooftop terrace, and personal butler. The spa is one of the finest in Africa, and the restaurants hold Michelin-level acclaim.',
    highlights: ['Private riad with plunge pool', 'Personal butler service', 'Three on-site restaurants', 'Award-winning 2,500 sqm spa'],
  },
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    icon: Award,
    price: 'From 6,000 MAD per night',
    description:
      'A legendary palace hotel set within eight acres of gardens. Winston Churchill called it "the most lovely spot in the whole world." Suites feature Art Deco elegance, and the gardens are perfect for an evening stroll after dinner.',
    highlights: ['Historic palace hotel since 1923', 'Eight acres of lush gardens', 'Three pools including heated indoor', 'World-renowned spa'],
  },
  {
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    icon: Mountain,
    price: 'From 5,500 MAD per night',
    description:
      'Sir Richard Branson\'s mountain retreat sits at 1,200 meters in the High Atlas. Suites feature hand-carved Berber furniture and private terraces with mountain views. The infinity pool overlooking the valley is one of Morocco\'s most romantic spots.',
    highlights: ['Infinity pool with Atlas views', 'Berber-inspired luxury suites', 'Mountain spa treatments', 'Private terrace dining'],
  },
  {
    name: 'Riad Fes',
    city: 'Fes',
    icon: Gem,
    price: 'From 3,500 MAD per night',
    description:
      'A restored 300-year-old palace in the heart of the Fes medina. The rooftop restaurant serves Fassi cuisine with views across the old city, and the spa uses traditional techniques. An intimate, culturally rich alternative to Marrakech.',
    highlights: ['300-year-old restored palace', 'Rooftop restaurant with medina views', 'Traditional hammam and spa', 'Cooking classes available'],
  },
  {
    name: 'Heure Bleue Palais',
    city: 'Essaouira',
    icon: Star,
    price: 'From 2,800 MAD per night',
    description:
      'A heritage palace hotel near Essaouira\'s ramparts. The rooftop cinema and heated pool offer unique romantic experiences. Rooms blend Art Deco style with Moroccan tradition, and the restaurant specializes in Atlantic seafood.',
    highlights: ['Rooftop cinema and pool', 'Ocean-view suites', 'Heritage palace architecture', 'Seafood restaurant'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COUPLES ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const couplesActivities = [
  {
    name: 'Private Cooking Class',
    icon: Utensils,
    price: 'From 800 MAD per couple',
    duration: '3-4 hours',
    description:
      'Learn to prepare a traditional Moroccan feast together. Visit the souk to select fresh ingredients with your chef, then cook tagine, couscous, and pastilla in a private riad kitchen. End with a candlelit meal of your own creation.',
  },
  {
    name: 'Hammam Spa for Two',
    icon: Sparkles,
    price: 'From 1,200 MAD per couple',
    duration: '2-3 hours',
    description:
      'Experience the ancient hammam ritual together in a private suite. A full treatment includes steam, black soap scrub, ghassoul clay mask, and argan oil massage. Many luxury riads offer in-house couples hammam experiences.',
  },
  {
    name: 'Sunset Camel Ride',
    icon: Sunset,
    price: 'From 600 MAD per couple',
    duration: '1.5-2 hours',
    description:
      'Ride camels across the golden dunes of Erg Chebbi or Erg Chigaga as the sun sets over the Sahara. Many tours include mint tea on the dunes and a stop to watch the stars appear. An iconic Moroccan honeymoon moment.',
  },
  {
    name: 'Hot Air Balloon Over Marrakech',
    icon: Globe,
    price: 'From 2,000 MAD per person',
    duration: '3-4 hours (including transfer)',
    description:
      'Float above the Atlas foothills and Marrakech palm groves at sunrise. The flight lasts about an hour and is followed by a traditional Berber breakfast in the countryside. Book a private basket for true intimacy.',
  },
  {
    name: 'Private Rooftop Dinner',
    icon: Star,
    price: 'From 1,500 MAD per couple',
    duration: '2-3 hours',
    description:
      'Many luxury riads arrange exclusive rooftop dinners for couples. Imagine a table set with lanterns, rose petals, and candles overlooking the medina at night, with a private chef serving a multi-course Moroccan tasting menu.',
  },
  {
    name: 'Atlas Mountains Day Trek',
    icon: Mountain,
    price: 'From 1,000 MAD per couple',
    duration: 'Full day',
    description:
      'Hike through Berber villages and walnut groves in the Ourika or Imlil valleys. A private guide leads you to waterfalls and panoramic viewpoints. Lunch is served in a local family home. Perfect for active couples.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: 7-DAY HONEYMOON ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const honeymoonItinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    icon: Plane,
    description:
      'Arrive at Marrakech Menara Airport and transfer to your luxury riad. Spend the afternoon relaxing by the plunge pool. In the evening, enjoy a private rooftop dinner overlooking the Koutoubia Mosque as the call to prayer echoes across the medina.',
  },
  {
    day: 2,
    title: 'Explore Marrakech',
    icon: Compass,
    description:
      'Morning hot air balloon ride over the palm groves, followed by a Berber breakfast. Afternoon exploring the Bahia Palace, Majorelle Garden, and souks with a private guide. Evening couples hammam at your riad or a luxury spa.',
  },
  {
    day: 3,
    title: 'Atlas Mountains Escape',
    icon: Mountain,
    description:
      'Private transfer to Kasbah Tamadot or a mountain lodge. Hike to waterfalls in the Ourika Valley, then enjoy a late lunch at a riverside restaurant. Afternoon at the infinity pool with Atlas views. Dinner under the stars at the kasbah.',
  },
  {
    day: 4,
    title: 'Journey to the Sahara',
    icon: Sun,
    description:
      'Scenic drive through the Tizi n\'Tichka pass, stopping at Ait Benhaddou. Continue through the Dades Valley with its dramatic rock formations. Arrive at your luxury desert camp by late afternoon. Watch the sunset from the dunes together.',
  },
  {
    day: 5,
    title: 'Sahara Magic',
    icon: Sparkles,
    description:
      'Sunrise over the dunes from your tent. Morning camel ride into the deep desert. Afternoon relaxing at camp with sandboarding or simply being together in the silence. Private candlelit dinner on the dunes followed by stargazing.',
  },
  {
    day: 6,
    title: 'Essaouira Coast',
    icon: Compass,
    description:
      'Fly or drive to Essaouira. Check into your oceanfront riad. Afternoon exploring the ramparts, medina, and art galleries. Watch the sunset from the Skala fortress. Evening seafood feast at a harbor-side restaurant.',
  },
  {
    day: 7,
    title: 'Final Day and Departure',
    icon: Heart,
    description:
      'Morning walk along Essaouira beach. Final shopping for souvenirs in the medina: argan oil, leather goods, and Thuya wood crafts. Leisurely lunch before transfer to Marrakech or Essaouira airport for your departure.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  { category: 'Luxury riad (7 nights)', budget: 'From 3,500 MAD', midRange: 'From 7,000 MAD', luxury: 'From 15,000 MAD', note: 'Per night for a double/suite' },
  { category: 'Meals and dining', budget: 'From 300 MAD/day', midRange: 'From 600 MAD/day', luxury: 'From 1,500 MAD/day', note: 'Per couple, including drinks' },
  { category: 'Activities (total)', budget: 'From 3,000 MAD', midRange: 'From 8,000 MAD', luxury: 'From 20,000 MAD', note: 'For the full trip' },
  { category: 'Desert camp (1-2 nights)', budget: 'From 1,500 MAD', midRange: 'From 4,000 MAD', luxury: 'From 10,000 MAD', note: 'Per night per couple' },
  { category: 'Private transfers', budget: 'From 2,000 MAD', midRange: 'From 5,000 MAD', luxury: 'From 12,000 MAD', note: 'Total for the trip' },
  { category: 'Spa and hammam', budget: 'From 600 MAD', midRange: 'From 2,000 MAD', luxury: 'From 5,000 MAD', note: 'Per couple, 1-2 sessions' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Morocco a good honeymoon destination?',
    answer:
      'Morocco is an exceptional honeymoon destination. It offers a unique blend of romance, luxury, culture, and adventure at a fraction of the cost of European or Caribbean alternatives. From candlelit dinners in ancient riads to sunset camel rides in the Sahara, the country provides once-in-a-lifetime experiences. The combination of exotic culture, world-class accommodation, and incredible food makes it ideal for couples.',
  },
  {
    question: 'What is the best time to visit Morocco for a honeymoon?',
    answer:
      'The best months are March through May and September through November. Spring brings blooming gardens, mild temperatures of 20-25 degrees Celsius, and fewer crowds. Autumn offers warm days, cool evenings, and harvest season in the countryside. Avoid July and August when inland temperatures regularly exceed 40 degrees Celsius, though coastal Essaouira remains pleasant year-round.',
  },
  {
    question: 'How much does a honeymoon in Morocco cost?',
    answer:
      'A luxury 7-day honeymoon typically costs from 25,000-50,000 MAD per person, including return flights, luxury riad accommodation, private tours, fine dining, and activities. Mid-range couples can enjoy a wonderful trip from 15,000-25,000 MAD per person. Budget-savvy honeymooners can manage from 10,000-15,000 MAD per person with boutique riads and shared tours. Seasonal pricing applies, with peak season (October-April) being 20-30% higher.',
  },
  {
    question: 'Is Morocco safe for couples?',
    answer:
      'Morocco is generally very safe for couples. Tourist areas are well-policed, and Moroccans are famously hospitable. Modest dress is appreciated (covering shoulders and knees), and public displays of affection should be kept subtle, as Morocco is a conservative Muslim country. Stick to well-lit areas at night, use registered taxis, and you will have a wonderful time.',
  },
  {
    question: 'What should we pack for a Morocco honeymoon?',
    answer:
      'Pack layers, as temperatures vary significantly between desert, mountains, and coast. Bring modest clothing for medina visits, comfortable walking shoes, a swimsuit for riad pools, a warm layer for desert nights, sunscreen, and a scarf for visiting mosques. For romantic evenings, bring one smart outfit for fine dining at palace restaurants.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHoneymoonGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-honeymoon.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Honeymoon Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Romance &amp; Couples
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Honeymoon Guide:
            <br className="hidden md:block" /> Romantic Destinations &amp; Luxury Riads
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From candlelit riad dinners in Marrakech to starlit nights in the Sahara.
            Your complete guide to planning an unforgettable honeymoon in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Why Morocco for Your Honeymoon ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Choose Morocco for Your Honeymoon?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the world&apos;s most romantic destinations, offering a combination of
                exotic culture, stunning landscapes, world-class luxury, and incredible value that few
                countries can match. For the price of a standard European city break, you can stay in a
                restored palace with a private plunge pool, dine on rooftops under the stars, and ride
                camels across golden dunes at sunset.
              </p>
              <p>
                What makes Morocco special for honeymooners is its diversity. In a single week, you can
                explore the buzzing souks of Marrakech, hike through Berber villages in the Atlas Mountains,
                sleep under the stars in the Sahara Desert, and unwind on the Atlantic coast in Essaouira.
                Each destination has its own romantic character, and the transitions between them are part of
                the adventure.
              </p>
              <p>
                The Moroccan tradition of hospitality, known as <em>terraha</em>, means that wherever you
                go, you will be welcomed warmly. Riad owners go out of their way to arrange special touches
                for honeymooners: rose petals on the bed, private dinners, and personalized itineraries.
                Romance is woven into the fabric of Moroccan culture.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Best Months', value: 'Mar-May, Sep-Nov', icon: Calendar },
              { label: 'Budget (7 days)', value: 'From 12,000 MAD pp', icon: DollarSign },
              { label: 'Top City', value: 'Marrakech', icon: MapPin },
              { label: 'Flight Time', value: '3-4h from Europe', icon: Plane },
            ].map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-4 text-center">
                  <FactIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Romantic Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 5 Romantic Destinations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a different flavor of romance. Here are the five best places in Morocco for couples.
          </p>

          <div className="space-y-8">
            {romanticDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="relative h-64 lg:h-auto lg:col-span-2">
                      <img
                        src={dest.image}
                        alt={`Romantic ${dest.name}, Morocco - perfect honeymoon destination`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 text-white">
                          <DestIcon className="w-5 h-5" />
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">{dest.name}</h3>
                        </div>
                        <p className="text-sm text-white/80 italic">{dest.tagline}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:col-span-3">
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dest.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
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

      {/* ── Luxury Riads for Couples ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Riads &amp; Hotels for Honeymooners
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s finest accommodations for couples, from royal palace hotels to intimate mountain retreats.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting rates. Seasonal pricing applies during peak months (October-April) and holidays, when rates may increase by 30-50%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryRiads.map((riad) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RiadIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {riad.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {riad.city}
                      </span>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {riad.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{riad.description}</p>
                  <div className="space-y-1.5">
                    {riad.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Couples Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Couples Activities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Unforgettable shared experiences that will define your honeymoon memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {couplesActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {activity.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      {activity.price}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7-Day Honeymoon Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            7-Day Morocco Honeymoon Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A carefully designed week that balances adventure, culture, relaxation, and romance across Morocco&apos;s most beautiful destinations.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {honeymoonItinerary.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{day.day}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <DayIcon className="w-4 h-4 text-[var(--color-accent)]" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {day.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{day.description}</p>
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
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Honeymoon Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to spend on a 7-day Morocco honeymoon at different comfort levels.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting estimates per couple. Seasonal pricing applies during peak season (October-April) and may increase costs by 20-30%.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium min-w-[640px]">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Budget</div>
                <div className="p-3 px-4">Mid-Range</div>
                <div className="p-3 px-4">Luxury</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {budgetBreakdown.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-5 gap-0 text-sm min-w-[640px] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.budget}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.midRange}</div>
                  <div className="p-3 px-4 text-[var(--color-gold)] font-semibold">{item.luxury}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco for a Honeymoon
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your trip right can make all the difference for a romantic experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Spring (March - May)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The ideal season for a honeymoon. Temperatures range from 20-28 degrees Celsius. Gardens are in
                full bloom, including the famous rose harvest in the Dades Valley (May). Lower tourist numbers
                mean more intimate experiences at riads and restaurants.
              </p>
              <div className="flex items-center gap-1 text-xs text-[var(--color-gold)] font-semibold">
                <Star className="w-3 h-3" /> Highly Recommended
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Autumn (September - November)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Equally wonderful for honeymooners. The summer heat fades but warm sunshine remains. The
                light is golden, perfect for photography. Date harvest season adds a festive atmosphere in
                southern Morocco. Comfortable for desert excursions.
              </p>
              <div className="flex items-center gap-1 text-xs text-[var(--color-gold)] font-semibold">
                <Star className="w-3 h-3" /> Highly Recommended
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Winter (December - February)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Mild in the cities (15-20 degrees Celsius) but cold in the mountains and desert at night.
                Fewer tourists and lower prices. Marrakech and Fes are pleasant for daytime exploration.
                Snow-capped Atlas Mountains provide a dramatic backdrop. Pack warm layers for evenings.
              </p>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <CheckCircle className="w-3 h-3" /> Good with Preparation
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[var(--text-muted)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Summer (June - August)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Inland temperatures often exceed 40 degrees Celsius, making Marrakech, Fes, and the desert
                uncomfortable. However, Essaouira stays at a pleasant 22-26 degrees Celsius thanks to Atlantic
                breezes. If you visit in summer, base your trip on the coast.
              </p>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <Info className="w-3 h-3" /> Coast Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Honeymoon Packing Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring for a trip that spans medinas, mountains, deserts, and fine dining.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Modest Clothing', icon: Users, tip: 'Cover shoulders and knees in medinas and rural areas. Lightweight linen and cotton are ideal for the Moroccan climate.' },
              { title: 'Comfortable Shoes', icon: Compass, tip: 'Cobblestone medina streets demand sturdy, comfortable walking shoes. Bring sandals for riads and flip-flops for the hammam.' },
              { title: 'Smart Evening Outfit', icon: Gem, tip: 'One elegant outfit each for romantic dinners at palace restaurants. Moroccan evenings can be stylish affairs.' },
              { title: 'Sun Protection', icon: Sun, tip: 'Strong Moroccan sun requires SPF 50+, sunglasses, and a wide-brimmed hat. Essential for desert and mountain excursions.' },
              { title: 'Warm Desert Layer', icon: Thermometer, tip: 'Sahara nights drop to 5-10 degrees Celsius even in spring. Bring a warm jacket or fleece for your desert camp stay.' },
              { title: 'Camera and Charger', icon: Camera, tip: 'Morocco is extraordinarily photogenic. Bring a portable charger for long days of exploring and photographing together.' },
            ].map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Romantic Morocco: A Visual Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-romantic-dinner.webp"
                alt="Romantic candlelit dinner on a Moroccan riad rooftop with lanterns and rose petals"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rooftop Dining in Marrakech</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-sahara-golden-hour.webp"
                alt="Golden hour sunset over the Sahara Desert dunes, ideal for a romantic camel ride"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Desert at Golden Hour</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-riad-courtyard.webp"
                alt="Beautiful Moroccan riad courtyard with fountain, zellige tiles, and lush greenery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Intimate Riad Courtyard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insider Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Honeymooners
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice from experienced travelers to make your Morocco honeymoon seamless.
          </p>

          <div className="space-y-4">
            {[
              {
                tip: 'Tell your riad it is your honeymoon when booking. Most will arrange complimentary upgrades, rose petals, or a special welcome with Moroccan pastries and mint tea.',
              },
              {
                tip: 'Book a private guide for the medinas. Navigating the labyrinthine streets alone can be stressful on your first day. A guide lets you relax and absorb the atmosphere together.',
              },
              {
                tip: 'Carry small change (from 10-20 MAD notes) for tips. Tipping is customary for porters, guides, restaurant staff, and hammam attendants throughout Morocco.',
              },
              {
                tip: 'Pre-arrange airport transfers through your riad. Arriving to a driver holding a sign with your name is far more romantic than negotiating a taxi at midnight.',
              },
              {
                tip: 'Learn a few Arabic phrases. "Shukran" (thank you) and "Labas" (how are you) go a long way. Moroccans deeply appreciate the effort and will respond warmly.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 card-moroccan p-4">
                <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about planning a honeymoon in Morocco.
          </p>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your romantic Morocco trip with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Romantic Getaways',
                href: '/morocco-romantic-getaways',
                description: 'Discover the most romantic experiences Morocco has to offer, from desert glamping to coastal retreats.',
                icon: Heart,
              },
              {
                title: 'Luxury Riads Guide',
                href: '/morocco-luxury-riads',
                description: 'A curated guide to the finest riads and boutique hotels across Morocco for discerning travelers.',
                icon: Crown,
              },
              {
                title: 'Spa & Hammam Guide',
                href: '/morocco-spa-guide',
                description: 'Everything you need to know about traditional hammams and luxury spas, with prices and etiquette tips.',
                icon: Sparkles,
              },
              {
                title: 'Desert Glamping',
                href: '/morocco-desert-glamping',
                description: 'The ultimate guide to luxury desert camps in the Sahara, from Erg Chebbi to Erg Chigaga.',
                icon: Globe,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)]">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <Heart className="w-10 h-10 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your Morocco Honeymoon?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Morocco offers a honeymoon unlike anywhere else: ancient romance, exotic luxury, and adventures
            you will remember for a lifetime. Start exploring our destination guides to build your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Marrakech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sahara-desert-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Discover the Sahara <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
