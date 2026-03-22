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
  Globe,
  AlertTriangle,
  Thermometer,
  CloudSun,
  Flower2,
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
  title: 'Visiting Morocco in February 2026 | Almond Blossoms, Weather & Guide',
  description:
    'Complete guide to visiting Morocco in February 2026. Almond blossom season in Tafraout, winter weather by region, what to pack, festivals, best destinations, costs, and sample itinerary.',
  keywords: [
    'morocco in february',
    'visiting morocco february',
    'almond blossom morocco',
    'morocco february weather',
    'tafraout almond blossom',
    'almond blossom festival morocco',
    'morocco winter travel february',
    'morocco february temperature',
    'sahara desert february',
    'marrakech february weather',
    'morocco low season february',
    'morocco budget travel february',
    'morocco february itinerary',
    'anti atlas february',
    'morocco spring preview',
    'morocco february guide',
  ],
  openGraph: {
    title: 'Visiting Morocco in February 2026 | Almond Blossoms, Weather & Guide',
    description:
      'Experience Morocco famous almond blossom season in Tafraout, comfortable Sahara temperatures, and late-winter savings. Complete February travel guide with weather, packing tips, and itinerary.',
    url: `${BASE_URL}/morocco-in-february`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Almond trees in bloom in the Anti-Atlas mountains near Tafraout Morocco in February',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in February 2026 | Almond Blossom Season',
    description:
      'Almond blossoms in Tafraout, Sahara at ideal temps, low-season prices, and cultural festivals. Complete February Morocco travel guide.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-february` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-february`,
  name: 'Visiting Morocco in February 2026 | Almond Blossoms, Weather & Travel Guide',
  description:
    'Complete guide to visiting Morocco in February. Almond blossom season, weather by region, festivals, best destinations, costs, and a 7-day itinerary.',
  url: `${BASE_URL}/morocco-in-february`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-february`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in February', item: `${BASE_URL}/morocco-in-february` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the weather like in Morocco in February?', acceptedAnswer: { '@type': 'Answer', text: 'February sees gradually warming temperatures. Coastal areas reach 16-19 degrees Celsius, interior cities like Marrakech and Fes range from 13-18 degrees, the Sahara sees 8-22 degrees with comfortable days and cool nights, and the Atlas Mountains remain cold at -3 to 8 degrees with snow at higher elevations.' } },
    { '@type': 'Question', name: 'When is the almond blossom season in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Almond blossoms typically peak in mid to late February in the Anti-Atlas region around Tafraout. The Almond Blossom Festival in Tafraout usually takes place in late February or early March. The exact timing varies by year depending on temperatures, but mid-February through early March is the best window.' } },
    { '@type': 'Question', name: 'Is February a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'February is an excellent time to visit. It offers the unique almond blossom spectacle in the Anti-Atlas, continued low-season pricing (20-40% savings), comfortable Sahara temperatures, and the beginning of warmer weather. The only drawbacks are occasional rain in the north and cooler mornings.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in February?', acceptedAnswer: { '@type': 'Answer', text: 'Pack layers including a medium-weight jacket, waterproof layer, comfortable walking shoes, sunglasses, and sunscreen. February is warmer than January but mornings and evenings remain cool. Bring a scarf for wind and a hat for sunny afternoons. Lighter layers than deep winter but still not summer clothing.' } },
    { '@type': 'Question', name: 'How much does it cost to visit Morocco in February?', acceptedAnswer: { '@type': 'Answer', text: 'February remains low season with good savings. Budget travelers can spend from 400-650 MAD per day. Mid-range travelers should budget from 800-1,500 MAD per day. Riad prices are 20-40% cheaper than peak season. Prices begin rising slightly toward the end of February as spring approaches.' } },
    { '@type': 'Question', name: 'Can you do the Sahara Desert in February?', acceptedAnswer: { '@type': 'Answer', text: 'February is excellent for the Sahara. Daytime temperatures of 18-22 degrees are comfortable for camel treks. Nights are warmer than January (around 8 degrees) but still require warm layers in desert camps. Clear skies continue to offer outstanding stargazing.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    icon: Waves,
    cities: 'Essaouira, Agadir, El Jadida, Rabat',
    tempRange: '16-19 C',
    rainfall: 'Moderate (35-55 mm)',
    description: 'The Atlantic coast warms up noticeably in February, with Agadir regularly reaching 21-22 degrees on sunny afternoons. Essaouira remains windswept but increasingly pleasant, with longer sunny spells between breezy days. Rabat and Casablanca see occasional rain but more frequent sunshine than January. Surfers continue to find excellent Atlantic swells, and the coastal light takes on a luminous quality that photographers treasure. Sea temperature hovers around 17 degrees.',
    bestFor: 'Surfing, coastal walks, warmer beach days in Agadir',
  },
  {
    region: 'Interior Cities',
    icon: Landmark,
    cities: 'Marrakech, Fes, Meknes',
    tempRange: '13-18 C',
    rainfall: 'Moderate (25-45 mm)',
    description: 'Marrakech and Fes are noticeably warmer than January, with afternoon temperatures reaching 20 degrees on sunny days. Mornings remain cool (8-10 degrees) but the chill lifts by mid-morning. Rain is less frequent than in January, and the gardens of Marrakech begin showing early spring color. The medinas remain wonderfully uncrowded until late February when the first spring visitors begin arriving. Meknes and Volubilis are particularly rewarding with mild weather and empty ruins.',
    bestFor: 'Comfortable sightseeing, photography, early spring gardens',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    cities: 'Merzouga, M\'Hamid, Zagora',
    tempRange: '8-22 C',
    rainfall: 'Minimal (under 5 mm)',
    description: 'February in the Sahara brings slightly warmer conditions than January, with daytime temperatures reaching a comfortable 22 degrees and nights hovering around 8 degrees rather than the near-freezing January lows. Camel treks and desert exploration are a pleasure during the day. Desert camps are more comfortable as temperatures remain moderate through the evening. The clear, dry skies persist, offering spectacular stargazing, and the low winter sun creates dramatic dune shadows ideal for photography.',
    bestFor: 'Desert camping, camel treks, photography, stargazing',
  },
  {
    region: 'Anti-Atlas & Tafraout',
    icon: Flower2,
    cities: 'Tafraout, Tafraoute, Tiznit, Ameln Valley',
    tempRange: '10-20 C',
    rainfall: 'Low (10-20 mm)',
    description: 'February is the star month for the Anti-Atlas region. The almond trees burst into bloom across the Ameln Valley and surrounding hillsides, transforming the red granite landscape into a sea of white and pink blossoms. Daytime temperatures of 18-20 degrees are perfect for hiking among the almond groves and exploring the painted rocks of Jean Verame. The Almond Blossom Festival in Tafraout draws visitors from across Morocco and provides a festive, authentic atmosphere.',
    bestFor: 'Almond blossoms, hiking, Anti-Atlas exploration, festivals',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Imlil, Oukaimeden, Ifrane',
    tempRange: '-3 to 8 C',
    rainfall: 'Heavy (snow above 2,000 m)',
    description: 'The Atlas Mountains remain firmly in winter mode in February, with snow cover at higher elevations and cold conditions throughout. Oukaimeden ski resort continues to operate with variable snow conditions. Lower valleys around Imlil are accessible and pleasantly cool for day hikes, though the summit of Toubkal is not advisable without full winter mountaineering equipment. Ifrane in the Middle Atlas sees freezing temperatures and sometimes heavy snow.',
    bestFor: 'Skiing, lower valley hikes, cozy mountain lodges',
  },
];

/* ===============================================================
   DATA: BEST DESTINATIONS IN FEBRUARY
   =============================================================== */

const bestDestinations = [
  {
    name: 'Tafraout & Ameln Valley',
    icon: Flower2,
    highlight: 'Almond blossom season — Morocco most beautiful February spectacle',
    description: 'February is the month to visit Tafraout. Nestled in the Anti-Atlas mountains amid bizarre red granite formations, this quiet Berber town explodes into life when the almond trees bloom. The Ameln Valley becomes a canvas of white and pink blossoms set against rust-red rock, with snow-capped peaks visible in the distance. The annual Almond Blossom Festival (late February) brings traditional music, Berber dances, and communal celebrations. Beyond the blossoms, explore the painted rocks of Jean Verame and the ancient agadir granaries scattered across the hillsides.',
    cost: 'Budget from 300-500 MAD/day',
  },
  {
    name: 'Marrakech',
    icon: Star,
    highlight: 'Late winter deals with noticeably warmer days',
    description: 'February in Marrakech strikes a sweet spot: the deep winter chill of January lifts while peak-season crowds have not yet arrived. Afternoon temperatures regularly reach 20 degrees, making outdoor sightseeing comfortable in just a light jacket. The Jardin Majorelle shows early spring blooms, the Jemaa el-Fnaa food stalls operate without the summer heat, and riad prices remain 20-40% below peak rates. It is the last month to enjoy the city at its most authentic and affordable before spring brings the crowds.',
    cost: 'Budget from 500-850 MAD/day',
  },
  {
    name: 'Merzouga & Sahara Desert',
    icon: Compass,
    highlight: 'Warmer desert nights than January, still ideal daytime temps',
    description: 'The Sahara in February offers perhaps the most balanced desert experience of the year. Daytime temperatures of 20-22 degrees are perfect for exploration, while nights around 8 degrees are cold but less biting than January. Desert camps operate with fewer guests, meaning more personal attention and often spontaneous upgrades. The Erg Chebbi dunes glow golden in the low winter sun, and sandstorms are rare at this time of year. A 2-day desert tour from Marrakech costs from 800-1,200 MAD per person.',
    cost: 'Desert tour from 800 MAD (2 days)',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    highlight: 'Dramatic Atlantic coast, warming days, uncrowded medina',
    description: 'February marks the beginning of Essaouira transition from wild winter to gentle spring. The trade winds still blow but with less ferocity than January, and sunny days become more frequent. The fortified medina is at its most characterful, with local artisans working peacefully in their studios and the fishing port bustling with morning catches. Fresh seafood is exceptional and incredibly affordable. The town ramparts at sunset, with the Atlantic crashing below and seagulls wheeling overhead, is one of Morocco most atmospheric experiences.',
    cost: 'Budget from 350-600 MAD/day',
  },
  {
    name: 'Fes',
    icon: Landmark,
    highlight: 'Mild weather, empty medina, peak artisan season',
    description: 'February in Fes is a privilege reserved for savvy travelers. The world largest car-free urban area, home to 9,000 alleys and centuries of craft tradition, operates at its most authentic. The tanneries are easier to visit, the cooperative workshops welcome visitors warmly, and the chance of having a historic medersa entirely to yourself is real. Cooking classes, ceramic workshops, and guided walking tours are readily available with flexible scheduling. Temperatures are mild enough for all-day exploration.',
    cost: 'Budget from 400-700 MAD/day',
  },
  {
    name: 'Agadir & Souss Valley',
    icon: CloudSun,
    highlight: 'Warmest spot in Morocco, beach weather begins',
    description: 'Agadir continues its reign as Morocco winter sun capital in February. With average highs of 22 degrees and up to 8 hours of daily sunshine, it is the closest thing to summer weather Morocco offers in February. The long beach is pleasant for sunbathing on calm days, and the surf remains excellent. Day trips to Paradise Valley, Tiznit, and the Souss Massa National Park are ideal in these mild conditions. The influx of European winter sun seekers creates a relaxed, international atmosphere.',
    cost: 'Budget from 450-750 MAD/day',
  },
];

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const eventsAndFestivals = [
  {
    name: 'Almond Blossom Festival (Tafraout)',
    icon: Flower2,
    date: 'Late February (varies)',
    location: 'Tafraout, Anti-Atlas',
    description: 'The highlight of Morocco February calendar. The Almond Blossom Festival celebrates the annual blooming of millions of almond trees in the Ameln Valley. Traditional Ahwach dances, Berber music, local produce markets, and communal feasts mark the multi-day event. The exact dates vary each year depending on when the blossoms peak, but late February to early March is typical. The festival is authentic and local, drawing far more Moroccans than foreign tourists, making it a wonderful cultural immersion.',
  },
  {
    name: 'Marathon des Sables Preparation',
    icon: Footprints,
    date: 'February (training camps)',
    location: 'Ouarzazate, Sahara region',
    description: 'The legendary Marathon des Sables, a multi-stage ultramarathon through the Sahara Desert, takes place in April, but February sees training camps and preparation runs in the Ouarzazate and Zagora regions. While the race itself is by invitation and entry fee, the training camps attract international runners and create a unique atmosphere in the desert towns. Even non-runners can witness the preparation and draw inspiration from the participants.',
  },
  {
    name: 'Skiing Season Continues',
    icon: Mountain,
    date: 'December - March',
    location: 'Oukaimeden, High Atlas',
    description: 'The ski season at Oukaimeden continues through February, often with the most consistent snow cover of the season. Late February can bring fresh powder to the High Atlas, refreshing the slopes. Lift passes remain affordable at from 100 MAD per day, and the experience of skiing with views extending to the Sahara remains uniquely Moroccan. Weekday visits virtually guarantee empty slopes.',
  },
  {
    name: 'Carnival of Asilah',
    icon: Music,
    date: 'February (varies)',
    location: 'Asilah',
    description: 'The coastal town of Asilah occasionally hosts a winter carnival in February, featuring local music, art exhibitions in the medina, and cultural performances along the Portuguese ramparts. While smaller than the famous summer arts festival, the winter edition offers an intimate glimpse into local creativity. Asilah painted medina murals provide a stunning backdrop, and the town relaxed atmosphere in February is a welcome contrast to the busier months.',
  },
];

/* ===============================================================
   DATA: WHAT TO PACK
   =============================================================== */

const packingList = [
  { item: 'Medium-Weight Layers', icon: Shirt, description: 'A lighter jacket or fleece than January, but still warm enough for cool mornings and evenings. A packable down vest is versatile for the temperature swings between sunny midday (20 degrees) and chilly evenings (10 degrees).' },
  { item: 'Light Rain Protection', icon: Umbrella, description: 'A compact waterproof jacket or packable rain shell. February rain is less frequent than January but still possible, especially in the north. A small travel umbrella is useful for cities.' },
  { item: 'Comfortable Walking Shoes', icon: Footprints, description: 'Closed-toe shoes with good traction for medina exploration. If planning to hike the Anti-Atlas for almond blossoms, trail shoes or light hiking boots are recommended. Sandals may work for sunny Agadir afternoons.' },
  { item: 'Sun Protection', icon: Sun, description: 'Sunscreen (SPF 30+), sunglasses, and a sun hat for the south and desert. The February sun in Agadir and the Sahara is strong, and UV reflection off light-colored surfaces can be intense. Apply sunscreen even on overcast days.' },
  { item: 'Camera with Wide Lens', icon: Camera, description: 'February is one of Morocco most photogenic months. Almond blossoms, snow-capped Atlas peaks, golden Sahara dunes, and clear skies create exceptional photographic conditions. A wide-angle lens captures the sweeping Anti-Atlas blossom landscapes.' },
  { item: 'Scarf & Light Hat', icon: Wind, description: 'A versatile scarf doubles as wind protection in Essaouira, warmth in the mountains, and modesty cover for mosque visits. A light beanie for early mornings; a sun hat for afternoon exploration.' },
];

/* ===============================================================
   DATA: COSTS IN FEBRUARY
   =============================================================== */

const februaryCosts = [
  { category: 'Riad/Hotel (budget)', icon: MapPin, lowSeason: 'From 250-450 MAD/night', highSeason: 'From 500-900 MAD/night', savings: 'Save 30-50%' },
  { category: 'Riad/Hotel (mid-range)', icon: Star, lowSeason: 'From 550-1,000 MAD/night', highSeason: 'From 1,000-2,000 MAD/night', savings: 'Save 35-50%' },
  { category: 'Food (per day)', icon: UtensilsCrossed, lowSeason: 'From 100-250 MAD', highSeason: 'From 150-300 MAD', savings: 'Save 15-20%' },
  { category: 'Sahara Desert Tour (2 days)', icon: Compass, lowSeason: 'From 800-1,400 MAD', highSeason: 'From 1,200-2,500 MAD', savings: 'Save 30-40%' },
  { category: 'Guided City Tour', icon: Users, lowSeason: 'From 200-400 MAD', highSeason: 'From 350-600 MAD', savings: 'Save 30-35%' },
  { category: 'Domestic Flights', icon: Globe, lowSeason: 'From 350-700 MAD', highSeason: 'From 500-1,200 MAD', savings: 'Save 30-45%' },
];

/* ===============================================================
   DATA: PROS AND CONS
   =============================================================== */

const prosAndCons = {
  pros: [
    { point: 'Almond blossom spectacle', description: 'The Anti-Atlas almond blossoms are a once-a-year natural wonder, transforming the landscape into a pink-and-white paradise.' },
    { point: 'Still low-season prices', description: 'February prices remain 20-40% below peak season, with excellent value on accommodation, tours, and domestic flights.' },
    { point: 'Warming temperatures', description: 'Noticeably warmer than January, with comfortable sightseeing conditions in most regions. Sunny afternoons reach 20 degrees in Marrakech.' },
    { point: 'Ideal Sahara conditions', description: 'Desert temperatures are balanced between comfortable days (22 degrees) and manageable nights (8 degrees). Sand storms are rare.' },
    { point: 'Uncrowded attractions', description: 'Major sites remain pleasantly empty until late February when spring visitors begin arriving. Queue-free museum visits are the norm.' },
    { point: 'Cultural authenticity', description: 'The Almond Blossom Festival and local events offer genuine cultural experiences without the commercialization of peak-season festivals.' },
  ],
  cons: [
    { point: 'Almond blossom timing unpredictable', description: 'The exact bloom dates vary by year depending on winter temperatures. Arriving too early or too late means missing the peak. Check local reports before planning.' },
    { point: 'Cool mornings persist', description: 'Despite warmer afternoons, mornings (7-10 degrees) and evenings still require warm layers. Riads with inadequate heating remain a concern.' },
    { point: 'Northern rain possible', description: 'Fes, Tangier, and Chefchaouen can experience rainy periods in February. Pack waterproof layers and have indoor backup plans.' },
    { point: 'Mountain passes still risky', description: 'Snow can still close the Tizi n\'Tichka pass and other High Atlas routes. Always check conditions before mountain driving.' },
    { point: 'Swimming still limited', description: 'Sea temperatures of 17 degrees are too cold for comfortable swimming outside Agadir, which is the only realistic option for beach bathing.' },
    { point: 'Short daylight hours', description: 'While longer than January, sunset around 6:00-6:20 PM still limits late afternoon activities. Plan accordingly.' },
  ],
};

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Time Your Tafraout Visit', icon: Flower2, description: 'The almond blossoms typically peak in the third and fourth weeks of February. Follow Moroccan travel social media accounts for real-time bloom reports. Arriving a few days early is better than late, as the blossoms can fall quickly after peak.' },
  { tip: 'Book Tafraout Early', icon: AlertTriangle, description: 'During the Almond Blossom Festival, Tafraout limited accommodation fills up quickly. Book at least 2-3 weeks in advance. Alternatively, base yourself in Tiznit (90 minutes away) and day-trip to Tafraout.' },
  { tip: 'Combine South & Desert', icon: Compass, description: 'February is ideal for a south Morocco loop: Marrakech to Ouarzazate to Merzouga to Tafraout to Agadir. This captures desert, mountains, almond blossoms, and coast in one continuous journey.' },
  { tip: 'Last Chance for Low Prices', icon: CircleDollarSign, description: 'February is the last full month of low-season pricing before the spring shoulder season begins in March. Take advantage by booking tours and accommodations now for the best negotiated rates.' },
  { tip: 'Valentine in Morocco', icon: Heart, description: 'Some luxury riads and restaurants in Marrakech offer Valentine Day specials (February 14). While not a traditional Moroccan holiday, the tourism industry embraces it with romantic dinners, spa packages, and special experiences from 500 MAD per couple.' },
  { tip: 'Marathon Training Routes', icon: Footprints, description: 'If you are a runner, February training runs in the Ouarzazate area offer a taste of the Marathon des Sables terrain. The flat desert plains and kasbah-dotted valleys make for extraordinary running landscapes.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is the weather like in Morocco in February?', answer: 'February brings gradually warming temperatures across Morocco. The Atlantic coast reaches 16-19 degrees, interior cities like Marrakech see 13-18 degrees with warm afternoons, the Sahara offers comfortable 8-22 degree days, and the Anti-Atlas around Tafraout enjoys mild 10-20 degree weather perfect for almond blossom viewing. The Atlas Mountains remain cold with snow above 2,000 meters.' },
  { question: 'When is the almond blossom season in Morocco?', answer: 'Almond blossoms typically peak in mid to late February in the Anti-Atlas around Tafraout. The Ameln Valley is the most famous viewing area. The Almond Blossom Festival takes place in late February or early March, with exact dates varying annually. The blooming period lasts 2-3 weeks, so the window is relatively forgiving if you plan for the second half of February.' },
  { question: 'Is February a good time to visit Morocco?', answer: 'February is excellent for several reasons: the almond blossom season is unique to this month, prices remain 20-40% below peak, the Sahara has ideal temperatures, and the weather is warming up across the country. It is the best balance between winter savings and increasingly pleasant conditions. Late February marks the transition to spring.' },
  { question: 'What should I pack for Morocco in February?', answer: 'Pack medium-weight layers, a light waterproof jacket, comfortable walking shoes (hiking shoes for Anti-Atlas exploration), sunglasses, sunscreen, and a scarf for wind and modesty. February is warmer than January but still requires layers for cool mornings and evenings. Bring a camera for almond blossom photography.' },
  { question: 'How much does it cost to visit Morocco in February?', answer: 'February is still low season with notable savings. Budget travelers spend from 400-650 MAD per day, mid-range from 800-1,500 MAD. Accommodation is 20-40% cheaper than spring peak. The exception is Tafraout during the Almond Blossom Festival, where prices rise temporarily and availability tightens.' },
  { question: 'Can you swim in Morocco in February?', answer: 'Swimming is limited in February. Agadir offers the warmest conditions with air temperatures around 22 degrees, but sea temperature remains at about 17 degrees. Indoor hotel pools are a more comfortable option. Surfing with a wetsuit is excellent along the Atlantic coast. True beach season begins in May-June.' },
  { question: 'Is it rainy in February in Morocco?', answer: 'February rainfall is moderate in the north (35-55 mm on the coast, 25-45 mm inland) and minimal in the south and desert (under 10 mm). Rain typically comes in short bursts rather than prolonged periods. Southern Morocco, including Tafraout, Agadir, and the Sahara, is much drier and sunnier.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-in-january', icon: Calendar, title: 'Morocco in January', description: 'Deep winter in Morocco: skiing, Sahara at ideal temps, and the lowest prices of the year.' },
  { href: '/morocco-in-march', icon: Calendar, title: 'Morocco in March', description: 'Early spring wildflowers, warming weather, and the transition to shoulder season.' },
  { href: '/best-time-to-visit-morocco', icon: Sun, title: 'Best Time to Visit Morocco', description: 'Month-by-month breakdown of weather, festivals, and crowd levels across the country.' },
  { href: '/morocco-budget-travel', icon: Wallet, title: 'Morocco Budget Travel', description: 'How to explore Morocco on a shoestring with tips for every spending category.' },
  { href: '/sahara-desert-tours', icon: Compass, title: 'Sahara Desert Tours', description: 'Everything you need to know about camel treks, desert camps, and Erg Chebbi dunes.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInFebruaryPage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco in February</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flower2 className="w-4 h-4" />
            Monthly Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Visiting Morocco
            <br className="hidden md:block" /> in February
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Almond blossoms in the Anti-Atlas, comfortable Sahara temperatures, and the last month
            of low-season prices. Your complete February 2026 travel guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Visit Morocco in February?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                February in Morocco is a month of transformation. The deep winter chill begins to
                lift, the days grow noticeably longer, and in the Anti-Atlas mountains around
                Tafraout, one of North Africa most spectacular natural events unfolds: millions of
                almond trees burst into simultaneous bloom, draping the red granite valleys in
                cascades of white and pink blossoms. It is a sight that draws photographers,
                nature lovers, and cultural enthusiasts from around the world.
              </p>
              <p>
                Beyond the almond blossoms, February offers the compelling combination of winter
                savings and improving weather. Marrakech afternoons regularly reach 20 degrees,
                the Sahara Desert is at ideal exploration temperatures, and the major medinas
                remain blissfully uncrowded. Accommodation prices stay 20-40% below peak-season
                rates, and tour operators are still willing to negotiate. It is the last full
                month of true low season before March and spring bring the first wave of visitors.
              </p>
              <p>
                For travelers who want to experience Morocco at its most authentic, February
                delivers. The Almond Blossom Festival in Tafraout offers genuine Berber cultural
                immersion, the souks operate for locals rather than tourists, and the pace of
                life reflects the country true rhythm. Add in the warmth of Agadir beaches, the
                solitude of the Sahara, and the medieval splendor of Fes without the crowds, and
                February emerges as one of the smartest months to visit this extraordinary country.
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
            February Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            February marks the transition from winter to early spring. Conditions improve across most
            regions, with the south warming significantly while the mountains remain cold.
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
            Best Destinations in February
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the almond groves of the Anti-Atlas to the golden dunes of the Sahara, these
            destinations offer the most rewarding February experiences.
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
            February Events &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Almond Blossom Festival headlines February, but the month also brings unique sporting
            and cultural events worth planning around.
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
            What to Pack for February
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            February packing bridges winter and spring. You need warm layers for cool mornings,
            lighter options for sunny afternoons, and a camera for the almond blossoms.
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
            February Costs vs. Peak Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            February remains solidly in low season for pricing, with savings of 20-40% across
            most categories. Prices begin rising slightly toward month end.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal pricing can change.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {februaryCosts.map((cost) => {
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
                        <span>February: <span className="text-green-700 font-medium">{cost.lowSeason}</span></span>
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
            Pros &amp; Cons of February Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest assessment to help you decide if February is the right month for your Morocco trip.
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
            Sample 7-Day February Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A week-long route capturing almond blossoms, Sahara adventure, and imperial city culture.
            Estimated total cost from 5,500-9,000 MAD per person.
          </p>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: 'Arrive in Marrakech',
                morning: 'Arrive and check into your riad (from 350 MAD/night). Stroll through the Jemaa el-Fnaa, soaking in the atmosphere without the heat and crowds of peak season.',
                afternoon: 'Visit the Bahia Palace (from 70 MAD) and the Saadian Tombs (from 70 MAD). The February afternoon sun lights up the intricate zellige tilework beautifully. Browse the nearby spice souk.',
                evening: 'Traditional hammam to warm up after a day of exploration (from 150 MAD tourist hammam). Dinner at a rooftop restaurant overlooking the medina (from 100 MAD).',
              },
              {
                day: 2,
                title: 'Marrakech to Sahara (Desert Tour Day 1)',
                morning: 'Depart early over the Tizi n\'Tichka pass (check conditions). Stop at Ait Benhaddou kasbah (from 20 MAD), the UNESCO site used in countless films.',
                afternoon: 'Continue through the Dades Valley to Merzouga. The February landscape is stark and dramatic. Arrive by late afternoon for your camel trek into Erg Chebbi dunes.',
                evening: 'Sunset from the dune summit, dinner in the desert camp, and stargazing under pristine February skies. Desert camp overnight (2-day tour from 800 MAD per person).',
              },
              {
                day: 3,
                title: 'Sahara to Ouarzazate (Desert Tour Day 2)',
                morning: 'Sunrise over Erg Chebbi — the February dawn light on the dunes is spectacular. Breakfast in camp, then begin the return journey through the Draa Valley.',
                afternoon: 'Explore the Todra Gorge with its towering canyon walls. Continue to Ouarzazate, the "Hollywood of Africa." Check into accommodation (from 250 MAD/night).',
                evening: 'Visit the Taourirt Kasbah at golden hour. Dinner in Ouarzazate (from 60 MAD). Rest before the Anti-Atlas journey tomorrow.',
              },
              {
                day: 4,
                title: 'Ouarzazate to Tafraout (Almond Blossoms)',
                morning: 'Drive south through the Anti-Atlas toward Tafraout (approximately 5 hours). The road passes through dramatic mountain scenery with increasing signs of almond blossoms.',
                afternoon: 'Arrive in Tafraout and check in (from 200 MAD/night, book early during blossom season). First walk through the Ameln Valley to see the almond trees in bloom against the red granite.',
                evening: 'If the Almond Blossom Festival is running, attend evening celebrations with Berber music and communal dining. Otherwise, dinner at a local restaurant (from 50 MAD).',
              },
              {
                day: 5,
                title: 'Tafraout & Ameln Valley',
                morning: 'Full morning exploring the almond blossom groves in the Ameln Valley. Visit the painted rocks of Jean Verame, massive boulders painted in vivid blue and red. Hike between Berber villages.',
                afternoon: 'Visit the ancient agadir (fortified granary) above one of the valley villages. Photography walk through the blossoming orchards in the golden afternoon light.',
                evening: 'Sunset from the Napoleon Hat rock formation above Tafraout. Traditional Berber dinner with local specialties (from 60 MAD).',
              },
              {
                day: 6,
                title: 'Tafraout to Essaouira via Agadir',
                morning: 'Drive to Agadir (3 hours) via Tiznit, stopping for silver jewelry shopping in the Tiznit medina. Arrive in Agadir for a beachside lunch (from 70 MAD).',
                afternoon: 'Continue to Essaouira (3 hours from Agadir). Arrive and check into a medina riad (from 250 MAD/night). Walk the ramparts as the sun begins to set.',
                evening: 'Fresh seafood dinner at the port grills (from 50 MAD for a generous plate). Wander the atmospheric medina in the evening.',
              },
              {
                day: 7,
                title: 'Essaouira & Departure',
                morning: 'Explore Essaouira medina, the port, and the Skala ramparts. Shop for thuya wood crafts and argan oil. Coffee overlooking the Atlantic (from 15 MAD).',
                afternoon: 'Transfer back to Marrakech (2.5 hours by bus from 80 MAD or private transfer from 600 MAD). Alternatively, depart from Essaouira Mogador airport if flying out.',
                evening: 'If back in Marrakech: farewell dinner in the medina (from 100 MAD). Final souk shopping for almond-based products and Berber crafts.',
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
            Insider Tips for February
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to maximize your February experience, from timing the almond blossoms
            to securing the best deals.
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
            Common questions about visiting Morocco in February, answered with practical detail.
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
            Ready to Experience February in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Witness the almond blossoms, explore the Sahara, and enjoy Morocco at its most authentic
            and affordable. Start planning your February adventure today.
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
