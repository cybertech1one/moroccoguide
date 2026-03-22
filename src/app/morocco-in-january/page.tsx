import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  Mountain,
  Compass,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Sun,
  Heart,
  Wind,
  Sparkles,
  Globe,
  AlertTriangle,
  Thermometer,
  Snowflake,
  CloudSun,
  Wallet,
  Users,
  ThumbsUp,
  ThumbsDown,
  Footprints,
  Umbrella,
  Shirt,
  Luggage,
  CircleDollarSign,
  Music,
  Coffee,
  Waves,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in January 2026 | Weather, Events & Travel Guide',
  description:
    'Complete guide to visiting Morocco in January 2026. Winter weather by region, what to pack, festivals, best destinations, costs, crowd levels, sample itinerary, and pros/cons for January travel.',
  keywords: [
    'morocco in january',
    'visiting morocco january',
    'morocco weather january',
    'morocco january travel guide',
    'morocco winter travel',
    'morocco january temperature',
    'sahara desert january',
    'marrakech january weather',
    'skiing morocco january',
    'oukaimeden skiing',
    'morocco low season',
    'morocco budget travel january',
    'morocco january itinerary',
    'atlas mountains snow',
    'morocco new year',
    'morocco winter holiday',
  ],
  openGraph: {
    title: 'Visiting Morocco in January 2026 | Weather, Events & Travel Guide',
    description:
      'Everything you need to know about visiting Morocco in January. Winter weather across all regions, packing tips, festivals, best destinations, budget advice, and a 7-day sample itinerary.',
    url: `${BASE_URL}/morocco-in-january`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Snow-capped Atlas Mountains rising behind Marrakech in January with clear winter skies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in January 2026 | Complete Travel Guide',
    description:
      'Winter weather by region, skiing in Oukaimeden, Sahara at comfortable temps, budget travel tips, and a 7-day itinerary for January in Morocco.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-january` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-january`,
  name: 'Visiting Morocco in January 2026 | Weather, Events & Travel Guide',
  description:
    'Complete guide to visiting Morocco in January. Weather by region, festivals, best destinations, costs, crowd levels, what to pack, and a 7-day itinerary.',
  url: `${BASE_URL}/morocco-in-january`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/morocco-in-january`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in January', item: `${BASE_URL}/morocco-in-january` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the weather like in Morocco in January?', acceptedAnswer: { '@type': 'Answer', text: 'January weather varies by region. Coastal cities like Essaouira and Agadir see 15-18 degrees Celsius with occasional rain. Interior cities like Marrakech and Fes range from 12-16 degrees. The Sahara Desert has cool nights (5 degrees) and pleasant days (20 degrees). The Atlas Mountains can see snow with temperatures from -5 to 5 degrees.' } },
    { '@type': 'Question', name: 'Is January a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'January is excellent for budget travelers and those who dislike crowds. It is low season, so prices for accommodation and tours drop by 30-50 percent. The Sahara is at comfortable daytime temperatures, cities are uncrowded, and skiing is available in Oukaimeden. The main drawbacks are cooler temperatures and occasional rain in the north.' } },
    { '@type': 'Question', name: 'Can you visit the Sahara Desert in January?', acceptedAnswer: { '@type': 'Answer', text: 'January is one of the best months for the Sahara Desert. Daytime temperatures around 18-22 degrees are comfortable for camel treks and dune exploration. Nights are cold (around 5 degrees), so bring warm layers for desert camps. The clear winter skies offer exceptional stargazing.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in January?', acceptedAnswer: { '@type': 'Answer', text: 'Pack warm layers including a fleece or down jacket, waterproof outer layer, comfortable walking shoes, scarf and hat for cold mornings, and sunglasses. Evenings in riads can be chilly since many lack central heating. Pack thermal base layers for desert nights and mountain excursions.' } },
    { '@type': 'Question', name: 'How much does a trip to Morocco cost in January?', acceptedAnswer: { '@type': 'Answer', text: 'January is low season with significant savings. Budget travelers can spend from 400-600 MAD per day including accommodation, food, and local transport. Mid-range travelers should budget from 800-1500 MAD per day. Riad prices drop 30-50 percent compared to peak season, and tour prices are often negotiable.' } },
    { '@type': 'Question', name: 'Is there skiing in Morocco in January?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Oukaimeden ski resort in the Atlas Mountains, about 80 km from Marrakech, offers skiing from December to March. The resort sits at 2,600 meters with runs reaching 3,200 meters. Lift passes cost from 100 MAD per day and equipment rental from 200 MAD. Conditions vary, so check snow reports before going.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    icon: Waves,
    cities: 'Essaouira, Agadir, El Jadida',
    tempRange: '15-18 C',
    rainfall: 'Moderate (40-60 mm)',
    description: 'The Atlantic coast enjoys the mildest winter temperatures in Morocco. Agadir is particularly pleasant with around 7 hours of sunshine daily. Essaouira is windier and slightly cooler. Sea temperatures hover around 16-17 degrees, too cold for most swimmers but surfers thrive in wetsuits. Occasional rainy days occur, but long stretches of sunshine are common.',
    bestFor: 'Surfing, coastal walks, escaping harsh European winters',
  },
  {
    region: 'Interior Cities',
    icon: Landmark,
    cities: 'Marrakech, Fes, Meknes, Rabat',
    tempRange: '12-16 C',
    rainfall: 'Moderate (30-50 mm)',
    description: 'Marrakech and Fes experience cool, pleasant days with temperatures peaking around 18 degrees in the afternoon. Mornings and evenings are chilly, dipping to 5-8 degrees. Rain is possible but rarely lasts more than a day or two. The medinas are wonderfully uncrowded, and the light has a clear, golden quality that photographers love. Heating in riads varies widely, so ask before booking.',
    bestFor: 'Sightseeing without crowds, photography, cultural immersion',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    cities: 'Merzouga, M\'Hamid, Zagora',
    tempRange: '5-20 C',
    rainfall: 'Minimal (under 5 mm)',
    description: 'The Sahara is arguably at its best in January. Daytime temperatures of 18-22 degrees are ideal for camel treks and dune exploration without the punishing heat of summer. Nights drop sharply to around 5 degrees, so warm layers are essential for desert camps. Skies are reliably clear, and the winter constellations combined with zero light pollution create world-class stargazing conditions.',
    bestFor: 'Camel treks, desert camps, stargazing, photography',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Imlil, Oukaimeden, Ifrane',
    tempRange: '-5 to 5 C',
    rainfall: 'Heavy (snow above 2,000 m)',
    description: 'The High Atlas receives significant snowfall in January, transforming the peaks into a winter wonderland. Oukaimeden ski resort is typically open with skiable snow. Ifrane in the Middle Atlas, known as the Switzerland of Morocco, sees temperatures below freezing. High-altitude trekking is not advisable, but lower valley walks around Imlil remain accessible with proper gear. The snow-capped backdrop visible from Marrakech is stunning.',
    bestFor: 'Skiing, snow photography, cozy mountain lodge stays',
  },
];

/* ===============================================================
   DATA: BEST DESTINATIONS IN JANUARY
   =============================================================== */

const bestDestinations = [
  {
    name: 'Marrakech',
    icon: Star,
    highlight: 'Uncrowded medina, comfortable sightseeing weather',
    description: 'January is one of the best months to experience Marrakech without the overwhelming crowds and heat of peak season. The Jemaa el-Fnaa is still lively, the souks are easier to navigate, and you can linger in the Bahia Palace or Saadian Tombs without jostling for space. Daytime temperatures around 18 degrees are perfect for walking. Riad prices drop significantly, and you can score beautiful riads for from 400-600 MAD per night that would cost double in April.',
    cost: 'Budget from 500-800 MAD/day',
  },
  {
    name: 'Merzouga & Sahara Desert',
    icon: Compass,
    highlight: 'Perfect desert temperatures, exceptional stargazing',
    description: 'The Erg Chebbi dunes near Merzouga are magnificent in January. With daytime highs around 20 degrees, you can comfortably spend hours on camel treks and dune hikes that would be unbearable in summer. Desert camps offer a magical experience under pristine winter skies. The Milky Way is clearly visible, and the silence of the Sahara at night is profound. A 2-day/1-night desert tour from Marrakech costs from 800 MAD per person in January.',
    cost: 'Desert tour from 800 MAD (2 days)',
  },
  {
    name: 'Agadir & Souss Valley',
    icon: CloudSun,
    highlight: 'Morocco warmest winter destination',
    description: 'Agadir is the go-to destination for winter sun in Morocco. With average highs of 20-22 degrees and minimal rain, it attracts European snowbirds throughout January. The 10 km beach is pleasant for walks and the surf breaks are excellent. The nearby Souss Valley offers argan oil cooperatives, the Paradise Valley oasis, and Tiznit for silver jewelry shopping. It is noticeably warmer than Marrakech and far sunnier than the north.',
    cost: 'Budget from 400-700 MAD/day',
  },
  {
    name: 'Fes',
    icon: Landmark,
    highlight: 'Atmospheric medina in winter light, very few tourists',
    description: 'Fes in January is a revelation. The world largest active medina, normally teeming with tour groups, becomes almost exclusively local. You can wander the 9,000 alleys of Fes el-Bali hearing only the sounds of artisans at work and the call to prayer. The tanneries are easier to visit, cooking classes are readily available, and the winter light filtering through medina gaps creates extraordinary photographic conditions. It is chillier than Marrakech, so bring extra layers.',
    cost: 'Budget from 450-750 MAD/day',
  },
  {
    name: 'Oukaimeden (Atlas Mountains)',
    icon: Snowflake,
    highlight: 'Africa highest ski resort',
    description: 'Located just 80 km from Marrakech at 2,600 meters altitude, Oukaimeden offers a surreal skiing experience with views extending to the Sahara on clear days. January usually has the best snow cover, with runs suitable for beginners and intermediates. Lift passes cost from 100 MAD per day, and equipment rental from 200 MAD. The experience of skiing in North Africa, then having tagine for lunch overlooking snow-capped peaks, is uniquely Moroccan.',
    cost: 'Day trip from Marrakech from 500 MAD',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    highlight: 'Dramatic winter Atlantic coast, quieter medina',
    description: 'Essaouira trade winds are fierce in January, but the town has a rugged winter beauty that appeals to those seeking authenticity over sunshine. The fishing port is at its most atmospheric, with trawlers battling the swells and fishermen mending nets on the quayside. The medina is quiet enough to truly get lost in. Fresh seafood is at peak quality, and accommodation prices are at their lowest. Bring a windbreaker and embrace the wild Atlantic energy.',
    cost: 'Budget from 350-600 MAD/day',
  },
];

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const eventsAndFestivals = [
  {
    name: 'New Year Celebrations',
    icon: Sparkles,
    date: 'January 1',
    location: 'Marrakech, Casablanca, Tangier',
    description: 'While Morocco is a Muslim country and New Year is not a traditional holiday, the major tourist cities celebrate with hotel galas, restaurant special menus, and some nightclub events. Marrakech and Casablanca see the biggest celebrations, with luxury hotels hosting gala dinners (from 1,500 MAD per person). The festivities are modest compared to European cities but growing each year. January 1 is a public holiday.',
  },
  {
    name: 'Amazigh (Berber) New Year',
    icon: Calendar,
    date: 'January 13 (Yennayer)',
    location: 'Atlas Mountains, Souss Valley, nationwide',
    description: 'Yennayer marks the Berber New Year and is celebrated across Morocco, particularly in Amazigh communities. Traditional dishes like tagine with seven vegetables and couscous are prepared. In the Atlas villages, communal meals and traditional music mark the occasion. Since 2018, January 13 has been a national holiday in Morocco, reflecting the country growing recognition of its Amazigh heritage. It is a wonderful opportunity to experience authentic Berber culture.',
  },
  {
    name: 'Marrakech International Film Festival',
    icon: Camera,
    date: 'Late November - Early January (varies)',
    location: 'Marrakech',
    description: 'The FIFM occasionally extends into early January depending on the year scheduling. Founded in 2001 and presided over by Prince Moulay Rachid, the festival attracts international stars and showcases Moroccan and African cinema. Even when the festival is not running, Marrakech thriving art scene continues with gallery openings and cultural events throughout January. Check the official dates for the current year.',
  },
  {
    name: 'Skiing Season at Oukaimeden',
    icon: Snowflake,
    date: 'December - March',
    location: 'Oukaimeden, High Atlas',
    description: 'January marks the heart of the ski season at Africa highest ski resort. Oukaimeden sits at 2,600 meters with the highest lift reaching 3,200 meters. The resort has 7 runs, ski rental shops, and a handful of lodges and restaurants. Conditions are unpredictable — some years bring excellent powder, others are thin. Weekdays are virtually empty, while weekends see Marrakech families arriving. It is a unique and affordable skiing experience.',
  },
];

/* ===============================================================
   DATA: WHAT TO PACK
   =============================================================== */

const packingList = [
  { item: 'Warm Layers', icon: Shirt, description: 'Fleece, down jacket, or wool sweater. Mornings and evenings are cold everywhere, and riads often lack central heating. Thermal base layers are essential for desert nights and mountain areas.' },
  { item: 'Waterproof Jacket', icon: Umbrella, description: 'A lightweight rain jacket is essential, especially for northern cities and the coast. Rain is sporadic but can be heavy when it arrives. A packable waterproof that doubles as a windbreaker works best.' },
  { item: 'Comfortable Walking Shoes', icon: Footprints, description: 'Closed-toe shoes with good grip for wet medina cobblestones. Hiking boots if visiting the Atlas Mountains. Sandals are too cold for January, and flip-flops are slippery on wet zellige tiles.' },
  { item: 'Scarf & Hat', icon: Wind, description: 'A warm scarf serves double duty: warmth in the morning and modesty when visiting mosques and conservative areas. A beanie or wool hat for mountain excursions and chilly desert mornings.' },
  { item: 'Sunglasses & Sunscreen', icon: Sun, description: 'Despite winter, Morocco sunshine is strong, especially in the south and desert. UV levels remain moderate to high. Sunscreen of SPF 30+ and quality sunglasses are needed year-round.' },
  { item: 'Power Bank & Adapter', icon: Lightbulb, description: 'Morocco uses Type C and Type E plugs (European standard). Some older riads have limited outlets. A power bank is essential for long desert tours and day trips where charging opportunities are scarce.' },
];

/* ===============================================================
   DATA: COSTS IN JANUARY
   =============================================================== */

const januaryCosts = [
  { category: 'Riad/Hotel (budget)', icon: MapPin, lowSeason: 'From 200-400 MAD/night', highSeason: 'From 500-900 MAD/night', savings: 'Save 40-60%' },
  { category: 'Riad/Hotel (mid-range)', icon: Star, lowSeason: 'From 500-900 MAD/night', highSeason: 'From 1,000-2,000 MAD/night', savings: 'Save 40-55%' },
  { category: 'Food (per day)', icon: UtensilsCrossed, lowSeason: 'From 100-250 MAD', highSeason: 'From 150-300 MAD', savings: 'Save 15-25%' },
  { category: 'Sahara Desert Tour (2 days)', icon: Compass, lowSeason: 'From 800-1,500 MAD', highSeason: 'From 1,200-2,500 MAD', savings: 'Save 30-40%' },
  { category: 'Guided City Tour', icon: Users, lowSeason: 'From 200-400 MAD', highSeason: 'From 350-600 MAD', savings: 'Save 30-40%' },
  { category: 'Domestic Flights', icon: Globe, lowSeason: 'From 300-600 MAD', highSeason: 'From 500-1,200 MAD', savings: 'Save 40-50%' },
];

/* ===============================================================
   DATA: PROS AND CONS
   =============================================================== */

const prosAndCons = {
  pros: [
    { point: 'Lowest prices of the year', description: 'Accommodation, tours, and flights drop 30-50% compared to peak season. Excellent value across all budget levels.' },
    { point: 'Minimal crowds everywhere', description: 'Major attractions like the Fes medina, Marrakech souks, and Sahara camps are blissfully uncrowded.' },
    { point: 'Perfect Sahara temperatures', description: 'Daytime desert temps of 18-22 degrees are ideal for camel treks and exploration without the extreme heat.' },
    { point: 'Skiing in the Atlas Mountains', description: 'Oukaimeden offers affordable skiing with a uniquely Moroccan backdrop — a rare and memorable experience.' },
    { point: 'Exceptional stargazing', description: 'Clear winter skies in the desert and mountains provide world-class astronomical viewing conditions.' },
    { point: 'Authentic cultural immersion', description: 'With fewer tourists, interactions with locals feel more genuine. Berber New Year (January 13) offers unique cultural experiences.' },
  ],
  cons: [
    { point: 'Cold mornings and evenings', description: 'Temperatures drop significantly after sunset. Many riads lack central heating, relying on space heaters and blankets.' },
    { point: 'Occasional rain in the north', description: 'Fes, Chefchaouen, and Tangier can see rainy periods. Some medina streets become slippery when wet.' },
    { point: 'Shorter daylight hours', description: 'Sunset around 5:30-6:00 PM limits late afternoon activities. Plan outdoor sightseeing for midday when it is warmest.' },
    { point: 'Some mountain passes closed', description: 'Heavy snow can close the Tizi n\'Tichka pass and other high Atlas routes temporarily, affecting Sahara access from Marrakech.' },
    { point: 'Swimming not practical', description: 'Sea and pool temperatures are too cold for comfortable swimming. Beach holidays are limited to walks and surfing with wetsuits.' },
    { point: 'Reduced outdoor dining', description: 'Rooftop terraces and outdoor restaurant seating can be chilly. Evening dining is best indoors by a fireplace.' },
  ],
};

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Request a Heated Room', icon: Thermometer, description: 'Not all riads have heating in every room. When booking, specifically ask about heating options. Electric radiators, underfloor heating, or a fireplace can make a huge difference on cold January nights.' },
  { tip: 'Layer, Layer, Layer', icon: Shirt, description: 'The temperature swing between noon sunshine (20 degrees) and evening shade (6 degrees) is dramatic. Dress in removable layers so you can adapt throughout the day.' },
  { tip: 'Book Desert Tours Direct', icon: CircleDollarSign, description: 'In January, you have strong negotiating power. Contact desert camps and tour operators directly rather than through intermediaries. Many will offer significant discounts to fill empty camps.' },
  { tip: 'Check Mountain Pass Conditions', icon: AlertTriangle, description: 'Before planning a Marrakech-to-Sahara drive over the Tizi n\'Tichka pass, check current conditions. Snow closures are possible. The alternative route via Agadir and the N10 avoids the highest passes.' },
  { tip: 'Embrace Hammam Culture', icon: Sparkles, description: 'January is the perfect time to discover traditional hammams. The warmth and steam are a welcome contrast to the cold outside. Local neighborhood hammams cost from 15-20 MAD, tourist hammams from 150-300 MAD.' },
  { tip: 'Yennayer Celebrations', icon: Calendar, description: 'If you are in Morocco on January 13, seek out Amazigh New Year celebrations. Atlas mountain villages have communal feasts, and even in cities, Berber restaurants serve special menus.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is the weather like in Morocco in January?', answer: 'January weather varies significantly by region. The Atlantic coast (Agadir, Essaouira) sees 15-18 degrees with occasional rain. Interior cities (Marrakech, Fes) range from 12-16 degrees with cool mornings. The Sahara has cool nights (5 degrees) and pleasant days (18-22 degrees). The Atlas Mountains see snow above 2,000 meters with temperatures from -5 to 5 degrees.' },
  { question: 'Is January a good time to visit Morocco?', answer: 'January is excellent for budget travelers, desert enthusiasts, and those who prefer uncrowded attractions. Prices drop 30-50% across the board, the Sahara has comfortable daytime temperatures, and skiing is available. Drawbacks include cooler weather, occasional rain in the north, and shorter daylight hours.' },
  { question: 'Can you visit the Sahara Desert in January?', answer: 'January is one of the best months for the Sahara. Daytime temperatures of 18-22 degrees are ideal for camel treks. Nights are cold (around 5 degrees), so pack warm layers for camp. Desert camps provide blankets and sometimes hot water bottles. Clear skies make stargazing exceptional.' },
  { question: 'What should I pack for Morocco in January?', answer: 'Pack warm layers (fleece or down jacket), a waterproof outer layer, comfortable closed-toe walking shoes, scarf and hat, sunglasses, and sunscreen. Thermal base layers are essential for desert nights. Pack a power bank for day trips. Evenings can be cold in riads, so bring cozy sleepwear.' },
  { question: 'How much does a trip to Morocco cost in January?', answer: 'January is the cheapest time to visit. Budget travelers can manage from 400-600 MAD per day. Mid-range travelers should budget from 800-1,500 MAD per day. Riad prices drop 30-50% from peak season. Desert tours, guided experiences, and flights are all significantly cheaper.' },
  { question: 'Is there skiing in Morocco in January?', answer: 'Yes, Oukaimeden in the High Atlas, 80 km from Marrakech, offers skiing from December to March. Lift passes cost from 100 MAD, equipment rental from 200 MAD. The resort has 7 runs from beginner to intermediate. Snow conditions vary year to year, so check reports before visiting.' },
  { question: 'Is it rainy in Morocco in January?', answer: 'Northern and coastal Morocco sees moderate rainfall in January (40-60 mm). Rain tends to come in short bursts rather than prolonged periods. Southern Morocco and the Sahara receive minimal rain. Pack a waterproof jacket and plan indoor alternatives for rainy days.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-in-february', icon: Calendar, title: 'Morocco in February', description: 'Almond blossoms in Tafraout, warming temperatures, and continued low-season savings.' },
  { href: '/best-time-to-visit-morocco', icon: Sun, title: 'Best Time to Visit Morocco', description: 'Month-by-month breakdown of weather, festivals, and crowd levels across the country.' },
  { href: '/morocco-budget-travel', icon: Wallet, title: 'Morocco Budget Travel', description: 'How to explore Morocco on a shoestring with tips for every spending category.' },
  { href: '/sahara-desert-tours', icon: Compass, title: 'Sahara Desert Tours', description: 'Everything you need to know about camel treks, desert camps, and Erg Chebbi dunes.' },
  { href: '/morocco-packing-list', icon: Luggage, title: 'Morocco Packing List', description: 'Season-by-season guide to packing for every region of Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInJanuaryPage() {
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
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco in January</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Snowflake className="w-4 h-4" />
            Monthly Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Visiting Morocco
            <br className="hidden md:block" /> in January
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Low-season magic: uncrowded medinas, comfortable Sahara temperatures, Atlas skiing,
            and the best prices of the year. Your complete January 2026 travel guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Visit Morocco in January?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                January in Morocco is the quiet season, and that is precisely its appeal. While
                summer visitors battle crowds at the Bahia Palace and navigate shoulder-to-shoulder
                through the Fes medina, January travelers have these treasures largely to themselves.
                The New Year crowds dissipate by January 3rd, and for the rest of the month, Morocco
                settles into its winter rhythm: slower, more authentic, and significantly more
                affordable.
              </p>
              <p>
                The weather is cooler than many expect, but far from inhospitable. Marrakech enjoys
                clear, sunny days with temperatures climbing to 18 degrees by midday, while Agadir
                pushes toward 22 degrees. The Sahara Desert is at its most comfortable, with daytime
                temperatures perfect for camel treks and exploration. Only the Atlas Mountains
                present genuine cold, with snow blanketing the peaks and creating Morocco unlikely
                identity as a skiing destination.
              </p>
              <p>
                For budget-conscious travelers, January is unbeatable. Riad prices drop 30-50%
                from peak-season rates, desert tours and guided experiences are heavily discounted,
                and you have genuine negotiating power in the souks with far fewer competing buyers.
                Add in the Amazigh New Year celebrations on January 13th, the surreal experience of
                skiing in North Africa, and some of the clearest stargazing skies on the planet, and
                January reveals itself as one of Morocco most underrated travel months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Weather by Region -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            January Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco spans from Atlantic beaches to Saharan dunes to snow-capped peaks. January weather
            varies dramatically by region, so knowing what to expect is essential for planning.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures shown are typical daily ranges. Conditions can vary year to year.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {weatherByRegion.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {region.region}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {region.tempRange}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {region.cities}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Umbrella className="w-3.5 h-3.5" />
                          {region.rainfall}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {region.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span>{' '}
                      {region.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Destinations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Destinations in January
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            These six destinations offer the most rewarding January experiences, from budget-friendly
            city breaks to desert adventures and African skiing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All costs are indicative starting prices in MAD. Seasonal pricing can change.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {bestDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {dest.cost}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-accent)] font-medium">{dest.highlight}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Events & Festivals -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            January Events &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the Berber New Year to the ski season, January offers cultural experiences that
            most visitors to Morocco never discover.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {eventsAndFestivals.map((event) => {
              const EventIcon = event.icon;
              return (
                <div key={event.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EventIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- What to Pack -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for January
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            January packing is all about layering. You will need warm clothing for mornings and
            evenings, lighter options for sunny afternoons, and rain protection for the north.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packingList.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Costs Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDollarSign className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            January Costs vs. Peak Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            One of the biggest advantages of visiting in January is the dramatic cost savings.
            Here is how prices compare to peak season (March-May and September-November).
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal pricing can change.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {januaryCosts.map((cost) => {
              const CostIcon = cost.icon;
              return (
                <div key={cost.category} className="card-moroccan p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <CostIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {cost.category}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                        <span>January: <span className="text-green-700 font-medium">{cost.lowSeason}</span></span>
                        <span>Peak: <span className="text-[var(--text-secondary)]">{cost.highSeason}</span></span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700">
                      {cost.savings}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Pros and Cons -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pros &amp; Cons of January Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest assessment to help you decide if January is the right month for your Morocco trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-green-700 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" />
                Advantages
              </h3>
              <div className="space-y-3">
                {prosAndCons.pros.map((pro) => (
                  <div key={pro.point} className="card-moroccan p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{pro.point}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{pro.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-red-700 mb-4 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5" />
                Disadvantages
              </h3>
              <div className="space-y-3">
                {prosAndCons.cons.map((con) => (
                  <div key={con.point} className="card-moroccan p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{con.point}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{con.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Sample 7-Day Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 7-Day January Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical week-long plan optimized for January conditions, balancing culture, adventure,
            and relaxation. Estimated total cost from 5,000-8,000 MAD per person.
          </p>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: 'Arrive in Marrakech',
                morning: 'Arrive and check into your riad (from 300 MAD/night in January). Take a slow walk through the Jemaa el-Fnaa, enjoying the uncrowded atmosphere. The winter light on the Koutoubia Mosque minaret is beautiful.',
                afternoon: 'Visit the Bahia Palace (from 70 MAD) and the Saadian Tombs (from 70 MAD) without the usual queues. Explore the mellah (Jewish quarter) and spice souk at a relaxed pace.',
                evening: 'Traditional hammam experience to warm up (from 150 MAD tourist hammam, from 15 MAD local hammam). Dinner at a medina restaurant with fireplace (from 80 MAD).',
              },
              {
                day: 2,
                title: 'Marrakech Deep Dive',
                morning: 'Jardin Majorelle and YSL Museum (from 70 MAD combined). The garden is at its most peaceful in January mornings, with fewer than a quarter of the usual visitors.',
                afternoon: 'Cooking class to learn tagine and Moroccan salads (from 350 MAD). A perfect January activity combining food, culture, and indoor warmth.',
                evening: 'Explore the Jemaa el-Fnaa food stalls (from 30 MAD for a full meal). The evening atmosphere with steam rising from the stalls into the cool January air is magical.',
              },
              {
                day: 3,
                title: 'Day Trip: Oukaimeden or Ourika Valley',
                morning: 'Option A: Drive to Oukaimeden for skiing (from 500 MAD day trip including transport and gear). Option B: Visit the Ourika Valley waterfalls and Berber villages (from 300 MAD guided trip).',
                afternoon: 'Enjoy the snow-capped Atlas scenery. Lunch at a mountain lodge with panoramic views (from 80 MAD). If skiing, the runs are empty on weekdays.',
                evening: 'Return to Marrakech. Rooftop dinner overlooking the medina (from 120 MAD). The snow-dusted Atlas peaks glowing pink at sunset are unforgettable.',
              },
              {
                day: 4,
                title: 'Marrakech to Sahara (Day 1 of Desert Tour)',
                morning: 'Depart early for the Sahara via the Tizi n\'Tichka pass (weather permitting). Cross the High Atlas with stops at Ait Benhaddou kasbah (from 20 MAD entry).',
                afternoon: 'Continue through the Dades Valley and Rose Valley. The winter landscapes are stark and beautiful. Arrive at Merzouga by late afternoon.',
                evening: 'Camel trek into Erg Chebbi dunes as the sun sets (included in most tours). Dinner and overnight in a desert camp under pristine January stars (tour from 800 MAD for 2 days).',
              },
              {
                day: 5,
                title: 'Sahara to Fes (Day 2 of Desert Tour)',
                morning: 'Wake for sunrise over the dunes — January sunrises are spectacular with cool, clear skies. Breakfast in camp, then depart for Fes via Erfoud and Midelt.',
                afternoon: 'Drive through the Middle Atlas cedar forests. Stop at Ifrane, the "Switzerland of Morocco," possibly snow-covered. Arrive in Fes by evening.',
                evening: 'Check into a Fes riad (from 250 MAD/night in January). Quiet dinner in the Fes el-Bali medina (from 60 MAD).',
              },
              {
                day: 6,
                title: 'Fes Medina Exploration',
                morning: 'Explore the world largest active medina with a guide (from 300 MAD half-day). Visit the tanneries, Bou Inania Medersa, and the Nejjarine Museum. January means no tour group congestion.',
                afternoon: 'Al-Attarine Medersa and the old university of Al-Qarawiyyin (exterior). Browse the souks for ceramics, leather, and textiles with genuine negotiating power.',
                evening: 'Traditional dinner with Fassi cuisine at a riad restaurant (from 100 MAD). Fes riad fireplaces are particularly atmospheric on January evenings.',
              },
              {
                day: 7,
                title: 'Fes & Departure',
                morning: 'Visit the Merenid Tombs for panoramic views over Fes. Last souk shopping. Coffee at a medina cafe (from 15 MAD).',
                afternoon: 'Depart from Fes airport or take the train to Casablanca/Marrakech (from 150 MAD). Alternatively, extend to Chefchaouen (3 hours by bus, from 75 MAD).',
                evening: 'If extending: the blue city of Chefchaouen in winter is hauntingly beautiful, with misty mountains and quiet blue alleys.',
              },
            ].map((day) => (
              <div key={day.day} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{day.day}</span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Day {day.day}: {day.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.morning}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.afternoon}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.evening}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Insider Tips for January
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to make your January trip more comfortable, affordable, and memorable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQs -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common questions about visiting Morocco in January, answered with practical detail.
          </p>

          <div className="space-y-4">
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco trip with these complementary guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-3 font-medium">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco in January?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Discover uncrowded medinas, comfortable Sahara adventures, and the best prices of the year.
            Start planning your perfect winter Moroccan getaway today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Browse Itineraries
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
