import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Sun,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Flower2,
  Mountain,
  Calendar,
  Cloud,
  Wind,
  Camera,
  Music,
  Backpack,
  Compass,
  Sunrise,
  CloudRain,
  Footprints,
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
  title: 'Morocco in Spring 2026 | Best Destinations, Weather, Festivals & Travel Tips',
  description:
    'Complete guide to visiting Morocco in spring (March, April, May). Ideal weather, wildflower blooms, the Rose Festival, Atlas hiking, Sahara before the heat, and crowd-free coastal cities. Temperatures, packing tips, itineraries, and prices.',
  keywords: [
    'spring in morocco',
    'morocco spring',
    'morocco in march',
    'morocco in april',
    'morocco in may',
    'spring weather morocco',
    'best time to visit morocco spring',
    'morocco rose festival',
    'morocco wildflowers',
    'atlas mountains spring',
    'sahara desert spring',
    'chefchaouen spring',
    'morocco spring itinerary',
    'morocco spring packing list',
    'morocco festivals spring',
    'morocco march weather',
    'morocco april weather',
    'morocco may weather',
    'morocco travel tips spring',
    'morocco spring holidays',
    'morocco spring destinations',
    'morocco hiking spring',
  ],
  openGraph: {
    title: 'Morocco in Spring 2026 | Best Destinations, Weather, Festivals & Travel Tips',
    description:
      'Why spring is the best time to visit Morocco. Wildflower blooms, perfect hiking weather, the Rose Festival, uncrowded medinas, and Sahara adventures before summer heat. Complete guide with weather, prices, and itineraries.',
    url: `${BASE_URL}/morocco-spring-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Wildflowers blooming in the Atlas Mountains of Morocco during spring with snow-capped peaks in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco in Spring 2026 | Weather, Festivals & Best Destinations',
    description:
      'Spring is Morocco at its finest: wildflowers, perfect weather, the Rose Festival, and fewer crowds. Complete guide with temperatures, itineraries, and travel tips.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-spring-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-spring-guide`,
  name: 'Morocco in Spring 2026 | Best Destinations, Weather, Festivals & Travel Tips',
  description:
    'Complete guide to visiting Morocco in spring. Ideal weather, wildflower blooms, festivals, hiking, and uncrowded destinations across March, April, and May.',
  url: `${BASE_URL}/morocco-spring-guide`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-spring-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in Spring Guide', item: `${BASE_URL}/morocco-spring-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is spring the best time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) is widely considered the best time to visit Morocco. Temperatures are warm but not extreme, wildflowers bloom across the countryside, hiking conditions in the Atlas Mountains are ideal, and tourist crowds are smaller than in autumn.' } },
    { '@type': 'Question', name: 'What is the weather like in Morocco in spring?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech averages 20-28 degrees Celsius, coastal cities like Essaouira are 16-22 degrees, and the Atlas Mountains range from 10-20 degrees. Rainfall decreases from March to May. Evenings can be cool, especially in the mountains.' } },
    { '@type': 'Question', name: 'What festivals happen in Morocco during spring?', acceptedAnswer: { '@type': 'Answer', text: 'Key spring festivals include the Rose Festival in Kelaat M\'gouna (May), the Gnawa World Music Festival in Essaouira (late June), and the Fes Festival of World Sacred Music (June). Exact dates vary each year.' } },
    { '@type': 'Question', name: 'Does Ramadan affect spring travel in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'When Ramadan falls during spring, some restaurants close during the day and public life slows. However, tourist areas remain open, and experiencing iftar dinners can be culturally enriching.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in spring?', acceptedAnswer: { '@type': 'Answer', text: 'Pack layers: lightweight clothing for warm days, a warm jacket for cool evenings, comfortable walking shoes, sunscreen, sunglasses, hat, and a light rain jacket for March and April.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SPRING WEATHER BY CITY
   ═══════════════════════════════════════════════════════════════ */

const springWeather = [
  { city: 'Marrakech', icon: Sun, march: { high: '23°C', low: '11°C', rain: '4 days' }, april: { high: '26°C', low: '13°C', rain: '3 days' }, may: { high: '30°C', low: '16°C', rain: '2 days' }, notes: 'Warm and sunny. Perfect for medina exploring and day trips. May gets hot by midday.' },
  { city: 'Fes', icon: Thermometer, march: { high: '19°C', low: '8°C', rain: '6 days' }, april: { high: '22°C', low: '10°C', rain: '5 days' }, may: { high: '27°C', low: '14°C', rain: '3 days' }, notes: 'Milder than Marrakech with more rainfall. Green hills surround the city. April is ideal.' },
  { city: 'Chefchaouen', icon: Cloud, march: { high: '17°C', low: '7°C', rain: '7 days' }, april: { high: '20°C', low: '9°C', rain: '6 days' }, may: { high: '24°C', low: '12°C', rain: '4 days' }, notes: 'Cooler mountain climate. The Rif turns emerald green. Morning mist adds magic to blue streets.' },
  { city: 'Essaouira', icon: Wind, march: { high: '19°C', low: '12°C', rain: '4 days' }, april: { high: '20°C', low: '13°C', rain: '3 days' }, may: { high: '21°C', low: '15°C', rain: '1 day' }, notes: 'Mild and breezy. The Atlantic moderates temperatures. Wind picks up from April.' },
  { city: 'Sahara (Merzouga)', icon: Sunrise, march: { high: '26°C', low: '12°C', rain: '1 day' }, april: { high: '30°C', low: '16°C', rain: '1 day' }, may: { high: '35°C', low: '20°C', rain: '0 days' }, notes: 'March and April are the last comfortable months before summer heat. Visit early.' },
  { city: 'Atlas Mountains', icon: Mountain, march: { high: '14°C', low: '2°C', rain: '6 days' }, april: { high: '18°C', low: '5°C', rain: '5 days' }, may: { high: '22°C', low: '9°C', rain: '3 days' }, notes: 'Snow melts through spring. Wildflowers from April. Ideal trekking from mid-April.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPRING FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const springFestivals = [
  {
    name: 'Rose Festival (Festival des Roses)',
    location: 'Kelaat M\'gouna, Dades Valley',
    timing: 'Mid-May (varies with harvest)',
    icon: Flower2,
    description:
      'The most iconic spring festival in Morocco. The Dades Valley produces thousands of tons of Damask roses each year, and this festival celebrates the harvest with parades, music, dancing, and the crowning of a Rose Queen. Stalls sell rose water, rose oil, rose soap, and rose-infused sweets. The entire valley turns pink.',
    tip: 'Book accommodation in Kelaat M\'gouna or nearby Boumalne Dades at least 2 weeks in advance. The festival draws thousands of visitors.',
  },
  {
    name: 'Gnawa World Music Festival',
    location: 'Essaouira',
    timing: 'Late June (sometimes late May)',
    icon: Music,
    description:
      'A world-renowned music festival celebrating Gnawa spiritual music and its fusion with jazz, blues, and world music. Free open-air concerts take place throughout Essaouira\'s medina and along the beach. International and Moroccan artists perform over four days. The atmosphere is electric.',
    tip: 'Essaouira fills up completely during the festival. Book accommodation 1-2 months ahead. Many riads double their prices during this period.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    location: 'Fes',
    timing: 'Early June',
    icon: Music,
    description:
      'One of the most prestigious music festivals in Africa. Held in stunning venues including the Bab Makina palace grounds, it brings together sacred music traditions from Sufi chanting to gospel to Hindustani classical. A deeply spiritual and culturally enriching experience.',
    tip: 'Ticket prices range from 200 MAD for single concerts to 1,500 MAD for full festival passes. Some outdoor fringe events are free.',
  },
  {
    name: 'Almond Blossom Season',
    location: 'Tafraoute, Anti-Atlas',
    timing: 'Late February to mid-March',
    icon: Flower2,
    description:
      'The Anti-Atlas town of Tafraoute is surrounded by almond groves that burst into pink and white blossoms in late winter and early spring. The Almond Blossom Festival features Amazigh music, traditional foods, and celebrations among the stunning granite landscapes of the Anti-Atlas.',
    tip: 'The exact timing depends on the weather. Check locally before traveling. Tafraoute itself is a charming base for exploring the painted rocks and Ameln Valley.',
  },
  {
    name: 'Moussem of Tan-Tan',
    location: 'Tan-Tan, Southern Morocco',
    timing: 'May or June',
    icon: Users,
    description:
      'A UNESCO-recognized gathering of nomadic peoples from across the Sahara, featuring camel races, traditional music, poetry, and trading. One of the last large-scale nomadic gatherings in North Africa.',
    tip: 'Accommodation in Tan-Tan is basic. Many visitors base themselves in Guelmim (80 km north) and drive in.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SPRING DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const springDestinations = [
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    bestMonths: 'April & May',
    image: '/images/hero-atlas-mountains.webp',
    description:
      'Spring transforms the High Atlas into a trekking paradise. Snow melts on peaks above 3,000m, feeding waterfalls and turning valleys green. Wildflowers carpet alpine meadows from April, and Berber villages come alive. The Toubkal circuit, Mgoun traverse, and Ait Bougmez valley are at their finest.',
    highlights: ['Wildflower meadows', 'Waterfall season', 'Ideal trekking temperatures', 'Snow-capped peak views', 'Green Berber villages'],
  },
  {
    name: 'Chefchaouen & the Rif',
    icon: Camera,
    bestMonths: 'March to May',
    image: '/images/hero-chefchaouen.webp',
    description:
      'The blue city is magical in spring. The Rif Mountains turn vivid green, morning mist drifts through the blue streets, and the air is fresh. Hiking in Talassemtane National Park is at its best, with wildflowers, waterfalls, and the God\'s Bridge natural arch.',
    highlights: ['Misty blue mornings', 'Green Rif Mountains', 'Waterfall hikes', 'Fewer tourists', 'Cool comfortable weather'],
  },
  {
    name: 'Sahara Desert',
    icon: Sunrise,
    bestMonths: 'March & early April',
    image: '/images/hero-sahara-desert.webp',
    description:
      'March and early April offer the last comfortable Sahara window before summer heat. Daytime temperatures are warm (25-30 degrees) but not extreme, and nights are cool for camping under the stars. Erg Chebbi and Erg Chigaga dunes are stunning in spring light.',
    highlights: ['Comfortable camping temperatures', 'Stunning desert light', 'Star-filled nights', 'Last window before summer heat', 'Camel trekking season'],
  },
  {
    name: 'Dades & Todra Valleys',
    icon: Compass,
    bestMonths: 'April & May',
    image: '/images/hero-todra-gorge.webp',
    description:
      'The Dades Valley erupts in pink roses each May, culminating in the Rose Festival. The Todra Gorge is magnificent year-round, but spring brings the best light and comfortable hiking temperatures. The Road of a Thousand Kasbahs is lined with blossoming fruit trees.',
    highlights: ['Rose harvest (May)', 'Todra Gorge hiking', 'Kasbah route blooms', 'Rose Festival', 'Perfect gorge temperatures'],
  },
  {
    name: 'Essaouira & the Coast',
    icon: Wind,
    bestMonths: 'April to June',
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Essaouira\'s spring is mild and breezy, ideal for medina exploration, beach walks, and fresh seafood. Trade winds from April make it a top windsurfing destination. The laid-back atmosphere and Gnawa music scene are a perfect counterpoint to Marrakech.',
    highlights: ['Mild coastal weather', 'Gnawa Festival (June)', 'Windsurfing season', 'Uncrowded medina', 'Fresh seafood season'],
  },
  {
    name: 'Fes',
    icon: Star,
    bestMonths: 'March to May',
    image: '/images/hero-fes-medina.webp',
    description:
      'Spring is ideal for the Fes medina without peak-season crowds or summer heat. The countryside is green, day trips to Volubilis and Meknes are pleasant, and the Sacred Music Festival in June is a fitting climax to a spring visit.',
    highlights: ['Comfortable medina exploration', 'Green countryside', 'Fewer crowds', 'Sacred Music Festival (June)', 'Pleasant day trip weather'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPRING PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingCategories = [
  {
    category: 'Clothing',
    icon: Backpack,
    items: [
      'Lightweight breathable layers (cotton or linen)',
      'Long-sleeve shirts for sun protection and mosques',
      'Light jacket or fleece for cool evenings',
      'Warm layer for Atlas Mountains (even in May)',
      'Comfortable walking shoes for medina cobblestones',
      'Scarf or shawl (sun, cold, and modesty)',
    ],
  },
  {
    category: 'Weather Essentials',
    icon: CloudRain,
    items: [
      'Packable rain jacket (March and April)',
      'Sunscreen SPF 50+ (strong sun even on cloudy days)',
      'Sunglasses with UV protection',
      'Wide-brimmed hat or cap',
      'Lip balm with SPF',
    ],
  },
  {
    category: 'Hiking & Outdoors',
    icon: Footprints,
    items: [
      'Hiking boots with ankle support (Atlas treks)',
      'Daypack for day hikes and medina exploring',
      'Reusable water bottle (stay hydrated)',
      'Quick-dry towel for hammam or beach',
      'Binoculars for birdwatching (spring migration)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPRING ITINERARY SUGGESTIONS
   ═══════════════════════════════════════════════════════════════ */

const springItineraries = [
  {
    title: '7-Day Classic Spring Tour',
    icon: Compass,
    budget: 'From 8,000 MAD per person',
    route: 'Marrakech - Atlas - Dades Valley - Sahara - Fes',
    days: [
      { day: 1, plan: 'Arrive Marrakech. Explore Jemaa el-Fna and the souks in pleasant spring afternoon.' },
      { day: 2, plan: 'Day trip to Ouzoud Waterfalls (full spring flow) or Marrakech gardens in bloom.' },
      { day: 3, plan: 'Drive the High Atlas via Tizi n\'Tichka to Ait Benhaddou. Continue to Dades Valley.' },
      { day: 4, plan: 'Morning Todra Gorge hike. Drive to Merzouga for sunset camel ride into Erg Chebbi.' },
      { day: 5, plan: 'Sahara sunrise. Drive to Fes via Midelt and the cedar forests (spring greenery).' },
      { day: 6, plan: 'Full day in the Fes medina: tanneries, Bou Inania madrasa, Al-Attarine.' },
      { day: 7, plan: 'Jardin Jnan Sbil (spring blooms). Depart or continue to Chefchaouen.' },
    ],
  },
  {
    title: '10-Day Nature & Festivals Route',
    icon: Flower2,
    budget: 'From 12,000 MAD per person',
    route: 'Fes - Chefchaouen - Essaouira - Dades Valley - Marrakech',
    days: [
      { day: 1, plan: 'Arrive Fes. Evening medina walk as spring light fades over rooftops.' },
      { day: 2, plan: 'Day trip to Volubilis (wildflowers among Roman columns) and Meknes.' },
      { day: 3, plan: 'Drive to Chefchaouen. Blue medina and Ras el-Maa waterfall.' },
      { day: 4, plan: 'Hike Spanish Mosque viewpoint and Talassemtane National Park.' },
      { day: 5, plan: 'Travel to Essaouira. Sunset on the ramparts over the Atlantic.' },
      { day: 6, plan: 'Essaouira: medina, port, beach, Gnawa music, argan cooperative.' },
      { day: 7, plan: 'Drive to Dades Valley. Valley of the Roses (May for Rose Festival).' },
      { day: 8, plan: 'Todra Gorge hike. Kasbahs along the Road of a Thousand Kasbahs.' },
      { day: 9, plan: 'Drive to Marrakech via Ait Benhaddou. Evening in Jemaa el-Fna.' },
      { day: 10, plan: 'Jardin Majorelle, Bahia Palace, souks. Farewell rooftop dinner.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CROWD & PRICING COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const monthComparison = [
  { month: 'March', crowds: 'Low to Moderate', pricing: 'Shoulder season rates', icon: CloudRain, highlights: 'Almond blossoms, green landscapes, occasional rain, possible Ramadan overlap', avgRiad: 'From 500 MAD/night' },
  { month: 'April', crowds: 'Moderate', pricing: 'Shoulder to peak rates', icon: Flower2, highlights: 'Wildflower peak, ideal Atlas hiking, Easter crowds, warm and pleasant', avgRiad: 'From 600 MAD/night' },
  { month: 'May', crowds: 'Moderate to High', pricing: 'Approaching peak rates', icon: Sun, highlights: 'Rose Festival, last Sahara month, warm cities, perfect coast weather', avgRiad: 'From 650 MAD/night' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REASONS TO VISIT IN SPRING
   ═══════════════════════════════════════════════════════════════ */

const springReasons = [
  {
    title: 'Perfect Weather Across the Country',
    icon: Thermometer,
    description: 'Warm days (20-28 degrees) without scorching summer heat. Cool evenings for sleeping. Explore medinas, hike mountains, and ride camels in comfort.',
  },
  {
    title: 'Wildflower Blooms & Green Landscapes',
    icon: Flower2,
    description: 'The Atlas is carpeted in wildflowers, the Rif turns emerald green, and the Valley of the Roses turns pink in May. Photographers will be in paradise.',
  },
  {
    title: 'Fewer Crowds Than Autumn',
    icon: Users,
    description: 'Autumn is peak season. Spring offers similar weather with fewer tourists. Explore the Fes medina without crowds and find riad availability easily.',
  },
  {
    title: 'Festival Season Begins',
    icon: Music,
    description: 'The Rose Festival in May, Gnawa Festival and Sacred Music Festival in June. Cultural events and Amazigh celebrations dot the calendar.',
  },
  {
    title: 'Ideal Hiking & Trekking Season',
    icon: Mountain,
    description: 'Snow melts on high passes, trails open up, and conditions are ideal for day hikes to multi-day treks. Toubkal and Mgoun circuits peak from mid-April.',
  },
  {
    title: 'Last Chance for the Sahara',
    icon: Sunrise,
    description: 'March and April are the final comfortable window before summer makes the dunes unbearable. Cool nights and warm days for perfect camping.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSpringGuidePage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco in Spring Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flower2 className="w-4 h-4" />
            Seasonal Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco in Spring:
            <br className="hidden md:block" /> Best Destinations, Weather &amp; Festivals
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Why March, April, and May deliver the perfect Moroccan experience. Wildflower blooms,
            ideal hiking weather, the Rose Festival, and uncrowded medinas await.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Spring Is the Best Time to Visit Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ask any seasoned Morocco traveler when to visit, and the answer is almost always spring. From
                March through May, Morocco transforms into a landscape of extraordinary beauty. The Atlas Mountains
                erupt in wildflowers. The Dades Valley turns pink with millions of Damask roses. The ancient medinas
                of Fes and Marrakech bask in warm sunshine without the oppressive heat of summer.
              </p>
              <p>
                Spring means comfortable days of 20 to 28 degrees, cool nights perfect for sleeping, and landscapes
                that are green and alive. It is the ideal season for hiking the Atlas, exploring the Sahara before
                summer heat, and wandering Chefchaouen&apos;s blue streets draped in morning mist. Compared to autumn
                peak season, spring offers similar weather with fewer crowds and better prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Spring Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            6 Reasons Spring Is Morocco&apos;s Best Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From weather to wildlife, festivals to fewer crowds, here is why experienced travelers choose spring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {springReasons.map((reason) => {
              const ReasonIcon = reason.icon;
              return (
                <div key={reason.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ReasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Spring Weather by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Weather by City &amp; Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s geography creates dramatically different climates. Here is what to expect across the country in March, April, and May.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are averages. Actual conditions vary year to year. Mountain and desert temperatures can shift rapidly.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {springWeather.map((location) => {
              const LocationIcon = location.icon;
              return (
                <div key={location.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LocationIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {location.city}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <div className="text-xs font-semibold text-[var(--color-accent)] mb-1">March</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{location.march.high} / {location.march.low}</div>
                      <div className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-1 mt-1">
                        <CloudRain className="w-3 h-3" /> {location.march.rain}
                      </div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <div className="text-xs font-semibold text-[var(--color-accent)] mb-1">April</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{location.april.high} / {location.april.low}</div>
                      <div className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-1 mt-1">
                        <CloudRain className="w-3 h-3" /> {location.april.rain}
                      </div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <div className="text-xs font-semibold text-[var(--color-accent)] mb-1">May</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{location.may.high} / {location.may.low}</div>
                      <div className="text-xs text-[var(--text-muted)] flex items-center justify-center gap-1 mt-1">
                        <CloudRain className="w-3 h-3" /> {location.may.rain}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{location.notes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Spring Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Destinations for a Spring Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From snow-capped mountains to desert dunes, these destinations shine brightest during spring.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {springDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={dest.image}
                      alt={`${dest.name} in spring, Morocco — wildflowers and green landscapes`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <DestIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {dest.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs">
                      <Calendar className="w-3 h-3" />
                      {dest.bestMonths}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {dest.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
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

      {/* ── Spring Festivals ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Festivals &amp; Cultural Events
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Spring kicks off Morocco&apos;s vibrant festival season. From rose harvest celebrations to world-class music events.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {springFestivals.map((festival) => {
              const FestIcon = festival.icon;
              return (
                <div key={festival.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {festival.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {festival.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {festival.timing}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{festival.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {festival.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Crowd Levels & Pricing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Crowd Levels &amp; Pricing by Month
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How crowds and prices shift across the spring months, so you can choose the best timing for your budget and preferences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Riad prices are averages for mid-range accommodation. Seasonal pricing can change during festivals and holidays.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {monthComparison.map((month) => {
              const MonthIcon = month.icon;
              return (
                <div key={month.month} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-3">
                    <MonthIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {month.month}
                  </h3>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">Crowds:</span>
                      <span className="font-medium text-[var(--text-primary)]">{month.crowds}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">Pricing:</span>
                      <span className="font-medium text-[var(--text-primary)]">{month.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">Avg Riad:</span>
                      <span className="font-medium text-[var(--color-accent)]">{month.avgRiad}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{month.highlights}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ramadan Considerations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramadan &amp; Spring Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan follows the lunar calendar and sometimes falls during spring. Here is what to know if your trip overlaps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What Changes During Ramadan
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Many restaurants close during daylight hours and shops reduce hours. Life slows during the day
                but comes alive after sunset with iftar meals and festive evenings. Tourist restaurants in major
                cities usually remain open.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Why It Can Be a Highlight
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Experiencing iftar is one of Morocco&apos;s most memorable cultural experiences. Streets come
                alive at sunset, families share elaborate meals, and many riads offer special iftar dinners. It
                is a privilege to witness.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Respectful Travel During Ramadan
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avoid eating, drinking, or smoking in public during fasting hours. Dress conservatively. Be
                patient with reduced services. Hotel restaurants remain open for guests.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ramadan Dates
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ramadan shifts roughly 10-11 days earlier each year. Check exact dates before planning. Eid
                al-Fitr (ending Ramadan) is a major holiday when businesses close for 2-3 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spring Itinerary Suggestions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Itinerary Suggestions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two curated routes that make the most of Morocco&apos;s spring season, from classic highlights to nature-focused adventures.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {springItineraries.map((itinerary) => {
              const ItinIcon = itinerary.icon;
              return (
                <div key={itinerary.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItinIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {itinerary.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {itinerary.route}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
                          <DollarSign className="w-3.5 h-3.5" />
                          {itinerary.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {itinerary.days.map((day) => (
                      <div key={day.day} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{day.day}</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] pt-1.5">{day.plan}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-4 italic">
                    <Info className="w-3 h-3 inline mr-1" />
                    Budget is per person based on mid-range accommodation, shared transport, and meals at local restaurants. Seasonal pricing can change during festivals and peak periods.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Spring Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Morocco in Spring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Spring weather varies dramatically across Morocco. Layers are your best friend. Here is what to bring.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {packingCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {cat.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Spring Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Spring Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sun Protection Is Essential
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The spring sun is deceptively strong, especially in the mountains and desert. Wear SPF 50+, reapply
                frequently, and always wear a hat. Sunburn can ruin a trip quickly.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CloudRain className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Expect Some Rain
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                March and April bring spring showers, especially in northern Morocco. These are usually short
                afternoon showers. A packable rain jacket is enough. By May, rain is rare.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Atlas Treks Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Spring is peak trekking season. Guides and mountain refuges book quickly for Toubkal in April and
                May. Book guided treks 2-3 weeks in advance, longer for multi-day routes.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                March Offers Best Value
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                March is shoulder season: lower riad prices (from 400 MAD per night) and fewer crowds. By May,
                prices climb. Easter week sees temporary spikes in popular destinations.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Light for Photography
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Golden hour light is warm and long, green landscapes contrast with terracotta architecture, and
                wildflowers add color everywhere. The Sahara in spring light is particularly photogenic.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Flower2 className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Wildflower Timing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The Anti-Atlas blooms earliest (February-March), the Middle Atlas and Rif peak in April, and the
                High Atlas runs late April through June. The Valley of the Roses peaks in mid-May.
              </p>
            </div>
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
                Is spring the best time to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March to May) is widely considered the best time to visit. Temperatures are warm but not
                extreme, wildflowers bloom everywhere, Atlas hiking conditions are ideal, and crowds are smaller
                than autumn. The only consideration is Ramadan, which may affect dining options.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the weather like in Morocco in spring?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech averages 20-28 degrees, coastal cities like Essaouira are 16-22 degrees, and the Atlas
                Mountains range from 10-20 degrees. Rainfall decreases from March to May. Evenings are cool,
                especially in mountains and desert, so pack layers.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What festivals happen in Morocco during spring?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key festivals include the Rose Festival in Kelaat M&apos;gouna (May), the Gnawa World Music
                Festival in Essaouira (late June), Fes Sacred Music Festival (June), and the Almond Blossom
                Festival in Tafraoute (February-March). Exact dates vary each year.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does Ramadan affect spring travel in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ramadan dates shift yearly. Some restaurants close during the day and public life slows, but
                tourist areas remain open. Experiencing iftar dinners can be culturally enriching. Hotel
                restaurants serve meals throughout the day for guests.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I pack for Morocco in spring?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Pack layers: lightweight clothing for warm days, a warm jacket for evenings and mountains,
                comfortable walking shoes, sunscreen SPF 50+, sunglasses, hat, and a light rain jacket for
                March-April. Modest clothing for mosques and rural areas.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is March or April better for visiting Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both are excellent. March offers lower prices and fewer crowds but more rain. April is drier,
                warmer, with wildflowers in full bloom and ideal hiking. Easter may bring temporary crowds. For
                budget, choose March. For nature and hiking, choose April.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-flowers-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flower2 className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Flowers Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Wildflowers, rose valleys, and botanical gardens across Morocco by season.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking routes, Berber villages, and adventure in the High Atlas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Backpack className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete packing guide for every season and activity in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-weather-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Weather Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Year-round weather, temperatures, and the best time to visit each region.
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
