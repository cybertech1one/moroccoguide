import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Cloud,
  Sun,
  Thermometer,
  Droplets,
  Wind,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Star,
  Eye,
  Snowflake,
  Umbrella,
  Shirt,
  Mountain,
  Waves,
  Sunrise,
  CloudRain,
  Info,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Weather Month by Month 2026 | Temperature, Rain & Packing Guide',
  description:
    'Month-by-month weather breakdown for every region of Morocco. Temperature charts, rainfall data, what to pack each month, and best activities per season. Plan your perfect Morocco trip.',
  keywords: [
    'Morocco weather monthly',
    'Morocco weather by month',
    'Morocco temperature chart',
    'Morocco rainfall',
    'best time to visit Morocco',
    'Morocco packing guide',
    'Morocco weather January',
    'Morocco weather summer',
    'Morocco weather winter',
    'Marrakech weather monthly',
    'Sahara desert temperature',
    'Morocco seasonal guide',
  ],
  openGraph: {
    title: 'Morocco Weather Month by Month - Complete Seasonal Guide 2026',
    description:
      'Detailed monthly weather data for every Moroccan region. Temperatures, rainfall, what to pack, and the best activities for each month of the year.',
    url: 'https://citytoursmorocco.com/morocco-weather-monthly',
    images: [
      {
        url: '/images/hero-atlas.webp',
        width: 1200,
        height: 630,
        alt: 'Atlas Mountains in Morocco with dramatic cloud formations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Weather Month by Month 2026',
    description:
      'Temperature charts, rainfall data, packing lists, and best activities for every month across all Moroccan regions.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-weather-monthly' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Morocco Weather Month by Month: Complete 2026 Seasonal Guide',
  description:
    'Comprehensive month-by-month weather breakdown for all regions of Morocco including temperature data, rainfall averages, packing advice, and recommended activities.',
  url: 'https://citytoursmorocco.com/morocco-weather-monthly',
  image: '/images/hero-atlas.webp',
  datePublished: '2026-01-10',
  dateModified: '2026-03-17',
  author: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: 'https://citytoursmorocco.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: 'https://citytoursmorocco.com',
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const regions = [
  { name: 'Marrakech & Interior', icon: 'sun' },
  { name: 'Coastal (Essaouira, Agadir)', icon: 'waves' },
  { name: 'Fes & Meknes (North Interior)', icon: 'cloud' },
  { name: 'Sahara (Merzouga, Zagora)', icon: 'thermometer' },
  { name: 'Atlas Mountains', icon: 'mountain' },
  { name: 'Tangier & Rif (North)', icon: 'droplets' },
];

const monthlyData = [
  {
    month: 'January',
    rating: 3,
    overview: 'Cool and wet in the north, mild in the south. The Atlas Mountains receive heavy snowfall, opening ski season at Oukaimeden. Marrakech is pleasant by day but cold at night. The Sahara is comfortable but chilly after sunset. Tourist numbers are at their lowest, meaning excellent prices on riads and tours.',
    regions: [
      { region: 'Marrakech', high: '18C', low: '6C', rain: '30mm', days: 6 },
      { region: 'Essaouira', high: '18C', low: '10C', rain: '40mm', days: 7 },
      { region: 'Fes', high: '15C', low: '4C', rain: '55mm', days: 9 },
      { region: 'Sahara', high: '20C', low: '4C', rain: '5mm', days: 1 },
      { region: 'Atlas (2000m)', high: '8C', low: '-5C', rain: '50mm', days: 8 },
      { region: 'Tangier', high: '16C', low: '8C', rain: '80mm', days: 11 },
    ],
    packing: ['Warm jacket or fleece', 'Rain layer (packable)', 'Layers for temperature swings', 'Warm hat and gloves (Atlas visits)', 'Comfortable walking shoes'],
    activities: ['Skiing at Oukaimeden', 'Marrakech sightseeing without crowds', 'Sahara camping under clear skies', 'Hammam and spa retreats', 'Cooking classes in quiet riads'],
  },
  {
    month: 'February',
    rating: 3,
    overview: 'Similar to January but slightly warmer. Almond blossoms begin in the Ameln Valley near Tafraoute, creating one of Morocco\'s most beautiful seasonal spectacles. Rainfall starts decreasing in the south. The northern cities remain chilly and wet. Still low season with good deals available.',
    regions: [
      { region: 'Marrakech', high: '20C', low: '7C', rain: '25mm', days: 5 },
      { region: 'Essaouira', high: '19C', low: '10C', rain: '30mm', days: 6 },
      { region: 'Fes', high: '16C', low: '5C', rain: '50mm', days: 8 },
      { region: 'Sahara', high: '22C', low: '6C', rain: '3mm', days: 1 },
      { region: 'Atlas (2000m)', high: '10C', low: '-3C', rain: '45mm', days: 7 },
      { region: 'Tangier', high: '17C', low: '9C', rain: '70mm', days: 10 },
    ],
    packing: ['Layered clothing system', 'Light rain jacket', 'Sunglasses (desert trips)', 'Warm sweater for evenings', 'Camera for almond blossoms'],
    activities: ['Almond blossom festival (Tafraoute)', 'Skiing last weeks at Oukaimeden', 'Desert tours with mild temperatures', 'Explore Fes medina without summer heat', 'Surfing at Taghazout (consistent swells)'],
  },
  {
    month: 'March',
    rating: 4,
    overview: 'Spring arrives. Temperatures become very comfortable across the country. Wildflowers blanket the Atlas foothills and the Middle Atlas cedars turn vivid green. This is the start of peak trekking season. The Sahara is warm but not yet punishing. Shoulder season pricing in most accommodations.',
    regions: [
      { region: 'Marrakech', high: '23C', low: '10C', rain: '30mm', days: 5 },
      { region: 'Essaouira', high: '20C', low: '12C', rain: '25mm', days: 4 },
      { region: 'Fes', high: '19C', low: '7C', rain: '45mm', days: 7 },
      { region: 'Sahara', high: '26C', low: '11C', rain: '5mm', days: 1 },
      { region: 'Atlas (2000m)', high: '14C', low: '0C', rain: '40mm', days: 6 },
      { region: 'Tangier', high: '18C', low: '10C', rain: '55mm', days: 8 },
    ],
    packing: ['Light layers for daytime', 'Warm layer for evenings', 'Sun hat and sunscreen', 'Good hiking boots (Atlas)', 'Allergy medication (pollen season)'],
    activities: ['Atlas trekking (wildflower season)', 'City tours in perfect weather', 'Paragliding near Marrakech', 'Golf in mild conditions', 'Rose Valley early blooms'],
  },
  {
    month: 'April',
    rating: 5,
    overview: 'One of the two best months to visit Morocco. Warm and sunny across the country with minimal rain outside the north. The Rose Festival in the Dades Valley typically occurs in late April or early May. Atlas trekking conditions are ideal. Beach towns start warming up. Booking ahead recommended as tourism picks up.',
    regions: [
      { region: 'Marrakech', high: '26C', low: '12C', rain: '20mm', days: 4 },
      { region: 'Essaouira', high: '20C', low: '13C', rain: '15mm', days: 3 },
      { region: 'Fes', high: '22C', low: '10C', rain: '35mm', days: 5 },
      { region: 'Sahara', high: '30C', low: '15C', rain: '3mm', days: 0 },
      { region: 'Atlas (2000m)', high: '18C', low: '4C', rain: '30mm', days: 4 },
      { region: 'Tangier', high: '20C', low: '12C', rain: '40mm', days: 6 },
    ],
    packing: ['Light cotton clothing', 'Sun hat and SPF 50', 'Light scarf for wind/mosques', 'Sandals and walking shoes', 'Swimwear (coastal areas)'],
    activities: ['Rose Festival (Kelaat M\'Gouna)', 'Toubkal summit attempt', 'Desert camping before summer heat', 'Essaouira beach walks', 'Festival season begins'],
  },
  {
    month: 'May',
    rating: 5,
    overview: 'The other best month. Similar to April but warmer. The Sahara starts getting hot but is manageable. Coastal cities are perfect. Interior cities like Marrakech and Fes are warm but not yet stifling. The Gnaoua Festival in Essaouira usually takes place in late May or June. Long daylight hours for sightseeing.',
    regions: [
      { region: 'Marrakech', high: '30C', low: '15C', rain: '10mm', days: 2 },
      { region: 'Essaouira', high: '21C', low: '15C', rain: '5mm', days: 1 },
      { region: 'Fes', high: '26C', low: '13C', rain: '20mm', days: 3 },
      { region: 'Sahara', high: '35C', low: '19C', rain: '2mm', days: 0 },
      { region: 'Atlas (2000m)', high: '22C', low: '8C', rain: '15mm', days: 2 },
      { region: 'Tangier', high: '22C', low: '14C', rain: '25mm', days: 4 },
    ],
    packing: ['Breathable cotton and linen', 'Strong sunscreen SPF 50+', 'Refillable water bottle', 'Light long sleeves for sun protection', 'Hat with brim'],
    activities: ['Gnaoua Festival (Essaouira)', 'Atlas trekking (snow melted from passes)', 'Coastal activities', 'Outdoor dining peak season', 'Photography in golden light'],
  },
  {
    month: 'June',
    rating: 4,
    overview: 'Summer begins. Interior cities like Marrakech hit 35C+ regularly. The Sahara becomes very hot with midday temperatures above 40C. Coastal cities remain comfortable thanks to Atlantic breezes. Essaouira rarely exceeds 25C. This is a good month for coast-focused itineraries. Ramadan may fall in this period (check Islamic calendar).',
    regions: [
      { region: 'Marrakech', high: '34C', low: '18C', rain: '5mm', days: 1 },
      { region: 'Essaouira', high: '23C', low: '16C', rain: '2mm', days: 0 },
      { region: 'Fes', high: '31C', low: '16C', rain: '10mm', days: 1 },
      { region: 'Sahara', high: '40C', low: '23C', rain: '0mm', days: 0 },
      { region: 'Atlas (2000m)', high: '26C', low: '12C', rain: '5mm', days: 1 },
      { region: 'Tangier', high: '25C', low: '17C', rain: '10mm', days: 2 },
    ],
    packing: ['Ultra-light breathable clothing', 'SPF 50+ sunscreen (reapply often)', 'Electrolyte packets', 'Cooling towel for heat', 'Comfortable sandals'],
    activities: ['Beach season at Agadir', 'Essaouira wind sports', 'Early morning Marrakech visits', 'Atlas high passes now accessible', 'Dakhla kitesurfing'],
  },
  {
    month: 'July',
    rating: 3,
    overview: 'Peak summer heat. Marrakech and Fes regularly exceed 38C. The Sahara is brutally hot (45C+) and desert tours are not recommended. Coastal cities are the best bet -- Essaouira, Agadir, and Tangier remain pleasant. This is domestic tourism peak as Moroccans head to beaches. Hotels in coastal areas book up and prices rise.',
    regions: [
      { region: 'Marrakech', high: '38C', low: '22C', rain: '2mm', days: 0 },
      { region: 'Essaouira', high: '24C', low: '17C', rain: '0mm', days: 0 },
      { region: 'Fes', high: '35C', low: '19C', rain: '3mm', days: 0 },
      { region: 'Sahara', high: '45C', low: '27C', rain: '0mm', days: 0 },
      { region: 'Atlas (2000m)', high: '30C', low: '15C', rain: '3mm', days: 0 },
      { region: 'Tangier', high: '28C', low: '19C', rain: '3mm', days: 0 },
    ],
    packing: ['Lightest possible clothing', 'Portable fan or misting spray', 'SPF 50+ (large quantity)', 'Reusable water bottle (hydrate constantly)', 'Light cotton scarf'],
    activities: ['Beach holidays (Agadir, Essaouira, Tangier)', 'Surfing Taghazout', 'Mountain retreats at Ifrane', 'Night markets (cooler evenings)', 'Water parks'],
  },
  {
    month: 'August',
    rating: 2,
    overview: 'The hottest month. Interior travel is uncomfortable for most visitors. The Sahara is off-limits for casual tourists due to extreme heat. However, Moroccan vacation peaks in August and the coast buzzes with domestic tourism. If you visit this month, plan a coastal itinerary or head to the Atlas Mountains above 2,000m where temperatures are manageable.',
    regions: [
      { region: 'Marrakech', high: '39C', low: '22C', rain: '2mm', days: 0 },
      { region: 'Essaouira', high: '24C', low: '18C', rain: '0mm', days: 0 },
      { region: 'Fes', high: '36C', low: '20C', rain: '2mm', days: 0 },
      { region: 'Sahara', high: '46C', low: '28C', rain: '1mm', days: 0 },
      { region: 'Atlas (2000m)', high: '31C', low: '16C', rain: '5mm', days: 1 },
      { region: 'Tangier', high: '29C', low: '20C', rain: '2mm', days: 0 },
    ],
    packing: ['Same as July', 'Electrolyte supplements essential', 'Battery-powered fan', 'Loose-fitting linen clothing', 'After-sun lotion'],
    activities: ['Coastal road trips', 'Chefchaouen (cooler in the Rif)', 'Ifrane mountain escape', 'Night-focused city exploration', 'Early morning hiking'],
  },
  {
    month: 'September',
    rating: 4,
    overview: 'The heat begins to break. Late September is noticeably cooler than August. Marrakech and Fes become comfortable again by the last week. The Sahara starts to become viable for desert tours again. Surf swells return to the Atlantic coast. Shoulder season pricing returns. An excellent month for travel.',
    regions: [
      { region: 'Marrakech', high: '33C', low: '18C', rain: '8mm', days: 1 },
      { region: 'Essaouira', high: '24C', low: '17C', rain: '5mm', days: 1 },
      { region: 'Fes', high: '31C', low: '17C', rain: '15mm', days: 2 },
      { region: 'Sahara', high: '37C', low: '21C', rain: '5mm', days: 1 },
      { region: 'Atlas (2000m)', high: '25C', low: '10C', rain: '15mm', days: 2 },
      { region: 'Tangier', high: '27C', low: '18C', rain: '15mm', days: 2 },
    ],
    packing: ['Light clothing with one warm layer', 'Rain jacket (late month)', 'Sunscreen still essential', 'Comfortable walking shoes', 'Swimwear'],
    activities: ['Desert tours resume (late month)', 'Surfing season begins', 'Trekking in cooler Atlas', 'Film festivals', 'Harvests in agricultural regions'],
  },
  {
    month: 'October',
    rating: 5,
    overview: 'Many experienced Morocco travelers consider October the single best month to visit. Temperatures are perfect across the country -- warm but not hot. The Sahara is comfortable for camping. Rain is minimal outside the north. Atlas trekking is superb. Tourist numbers are moderate. This is the sweet spot.',
    regions: [
      { region: 'Marrakech', high: '27C', low: '14C', rain: '20mm', days: 3 },
      { region: 'Essaouira', high: '23C', low: '16C', rain: '15mm', days: 2 },
      { region: 'Fes', high: '24C', low: '12C', rain: '30mm', days: 4 },
      { region: 'Sahara', high: '30C', low: '15C', rain: '8mm', days: 1 },
      { region: 'Atlas (2000m)', high: '19C', low: '5C', rain: '25mm', days: 3 },
      { region: 'Tangier', high: '23C', low: '15C', rain: '50mm', days: 6 },
    ],
    packing: ['Comfortable layers', 'Light jacket for evenings', 'Good trekking gear (Atlas)', 'Sun protection still needed', 'Desert camping warm layer'],
    activities: ['Sahara desert camping', 'Toubkal summit (ideal conditions)', 'City exploration in comfort', 'Date harvest in Zagora', 'Paragliding season peaks'],
  },
  {
    month: 'November',
    rating: 4,
    overview: 'Autumn deepens. Temperatures cool, especially in the evenings. Rain increases significantly in the north (Tangier, Chefchaouen, Fes). The south remains pleasant and dry. Desert tours are excellent. Marrakech is comfortable. The first snow dusts the High Atlas peaks. Tourist numbers drop, meaning better availability and pricing.',
    regions: [
      { region: 'Marrakech', high: '22C', low: '10C', rain: '30mm', days: 5 },
      { region: 'Essaouira', high: '21C', low: '13C', rain: '35mm', days: 5 },
      { region: 'Fes', high: '18C', low: '8C', rain: '55mm', days: 7 },
      { region: 'Sahara', high: '24C', low: '10C', rain: '5mm', days: 1 },
      { region: 'Atlas (2000m)', high: '13C', low: '1C', rain: '40mm', days: 5 },
      { region: 'Tangier', high: '19C', low: '12C', rain: '80mm', days: 9 },
    ],
    packing: ['Warm jacket (essential evenings)', 'Rain jacket (northern trips)', 'Layers, layers, layers', 'Warm socks and closed shoes', 'Scarf for wind'],
    activities: ['Desert tours (perfect temperatures)', 'Olive harvest experiences', 'Marrakech without crowds', 'Photography (dramatic light)', 'Wine tasting in Meknes region'],
  },
  {
    month: 'December',
    rating: 3,
    overview: 'Winter arrives. Cool to cold across the country, especially at night. Rain is frequent in the north. The Atlas Mountains are snow-covered and skiing opens. The Sahara is comfortable by day but cold at night (down to 2C). Holiday period (Christmas/New Year) brings a surge in tourism and prices spike at popular riads. Book well ahead for the last two weeks.',
    regions: [
      { region: 'Marrakech', high: '18C', low: '6C', rain: '25mm', days: 5 },
      { region: 'Essaouira', high: '19C', low: '10C', rain: '40mm', days: 6 },
      { region: 'Fes', high: '14C', low: '4C', rain: '50mm', days: 8 },
      { region: 'Sahara', high: '19C', low: '3C', rain: '5mm', days: 1 },
      { region: 'Atlas (2000m)', high: '7C', low: '-6C', rain: '50mm', days: 7 },
      { region: 'Tangier', high: '16C', low: '8C', rain: '85mm', days: 11 },
    ],
    packing: ['Warm winter jacket', 'Hat, gloves, scarf', 'Rain gear', 'Warm sleepwear (riads can be cold)', 'Thermal base layer (Atlas/desert nights)'],
    activities: ['Skiing at Oukaimeden', 'New Year in Marrakech', 'Hammam season (warm up!)', 'Holiday shopping in souks', 'Sahara stargazing (cold clear skies)'],
  },
];

const seasonalSummary = [
  {
    season: 'Spring (March - May)',
    verdict: 'Best Overall',
    stars: 5,
    summary: 'The ideal season for most travelers. Comfortable temperatures everywhere, wildflowers in the Atlas, minimal rain in the south, and festivals beginning. April and May are peak perfection.',
  },
  {
    season: 'Summer (June - August)',
    verdict: 'Coast Only',
    stars: 3,
    summary: 'Interior and Sahara are too hot for comfortable tourism. Coastal cities (Essaouira, Agadir, Tangier) remain pleasant. Domestic tourism peaks. Prices rise at beaches, drop inland.',
  },
  {
    season: 'Autumn (September - November)',
    verdict: 'Excellent',
    stars: 5,
    summary: 'Rivals spring as the best season. October is arguably the single best month. Desert tours are perfect, cities are comfortable, and tourist numbers are manageable.',
  },
  {
    season: 'Winter (December - February)',
    verdict: 'Budget Season',
    stars: 3,
    summary: 'Cool and wet in the north, mild in the south. Excellent for budget travelers (except Christmas/NYE). Skiing available. Desert tours are good but cold at night. Fewer crowds.',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoWeatherMonthlyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-atlas.webp"
            alt="Atlas Mountains in Morocco with dramatic cloud formations and varied weather"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/weather" className="hover:text-white transition-colors">Weather</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Monthly Breakdown</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Cloud className="w-4 h-4 text-[var(--color-accent)]" />
              Month-by-Month Data
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Weather Monthly
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Detailed month-by-month weather for every region of Morocco. Temperature highs and lows,
              rainfall averages, what to pack, and the best activities for each month -- so you can
              plan the perfect trip no matter when you travel.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">6</p>
                <p className="text-sm text-white/70">Climate regions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">12</p>
                <p className="text-sm text-white/70">Monthly guides</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">Apr/Oct</p>
                <p className="text-sm text-white/70">Best months</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Seasonal Summary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Seasonal Overview at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco spans from Mediterranean coast to Sahara desert, so weather varies dramatically by region. Here is the quick summary before the detailed monthly data below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seasonalSummary.map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">{s.season}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${s.stars === 5 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                    {s.verdict}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < s.stars ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Month-by-Month Breakdown -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Detailed Data
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Month-by-Month Weather Guide
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Click through each month for regional temperature data, rainfall, packing advice, and recommended activities.
            </p>
          </div>
          <div className="space-y-8">
            {monthlyData.map((m, index) => (
              <div key={m.month} id={m.month.toLowerCase()} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  {/* Month Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                        Month {index + 1}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)] mt-2">
                        {m.month}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < m.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'}`} />
                      ))}
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{m.overview}</p>

                  {/* Temperature Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[var(--border)]">
                          <th className="text-left py-2 pr-4 font-semibold text-[var(--text-primary)]">Region</th>
                          <th className="text-center py-2 px-2 font-semibold text-[var(--text-primary)]">
                            <span className="inline-flex items-center gap-1"><Sun className="w-3 h-3 text-amber-500" /> High</span>
                          </th>
                          <th className="text-center py-2 px-2 font-semibold text-[var(--text-primary)]">
                            <span className="inline-flex items-center gap-1"><Moon className="w-3 h-3 text-blue-400" /> Low</span>
                          </th>
                          <th className="text-center py-2 px-2 font-semibold text-[var(--text-primary)]">
                            <span className="inline-flex items-center gap-1"><Droplets className="w-3 h-3 text-blue-500" /> Rain</span>
                          </th>
                          <th className="text-center py-2 pl-2 font-semibold text-[var(--text-primary)]">
                            <span className="inline-flex items-center gap-1"><CloudRain className="w-3 h-3 text-gray-400" /> Days</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {m.regions.map((r) => (
                          <tr key={r.region} className="border-b border-[var(--border)]/50">
                            <td className="py-2 pr-4 text-[var(--text-primary)] font-medium">{r.region}</td>
                            <td className="py-2 px-2 text-center text-amber-700 font-semibold">{r.high}</td>
                            <td className="py-2 px-2 text-center text-blue-700 font-semibold">{r.low}</td>
                            <td className="py-2 px-2 text-center text-[var(--text-muted)]">{r.rain}</td>
                            <td className="py-2 pl-2 text-center text-[var(--text-muted)]">{r.days}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Packing & Activities */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Shirt className="w-4 h-4 text-[var(--color-secondary)]" /> What to Pack
                      </h4>
                      <div className="space-y-1.5">
                        {m.packing.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                            <p className="text-xs text-[var(--text-secondary)]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[var(--color-secondary)]" /> Best Activities
                      </h4>
                      <div className="space-y-1.5">
                        {m.activities.map((activity) => (
                          <div key={activity} className="flex items-start gap-2">
                            <Star className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                            <p className="text-xs text-[var(--text-secondary)]">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Climate Zones Explained -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            Morocco&apos;s Six Climate Zones
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding why weather varies so dramatically across Morocco. The country spans
            multiple climate zones, from Mediterranean to true Saharan desert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" /> Interior (Marrakech)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Semi-arid continental climate. Hot dry summers (38C+), mild winters (18C days, 6C nights). Large daily temperature swings of 15-20 degrees. Low rainfall concentrated in winter months.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Waves className="w-4 h-4 text-blue-500" /> Atlantic Coast
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Maritime climate moderated by the cold Canary Current. Narrow temperature range year-round (17-25C). Persistent wind, especially at Essaouira. Morning fog common. Rarely very hot or very cold.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Cloud className="w-4 h-4 text-gray-500" /> North Interior (Fes)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Mediterranean-influenced continental. Wetter and cooler than Marrakech. Cold, rainy winters with occasional frost. Hot but less extreme summers. Significant rainfall October through March.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-red-500" /> Sahara Desert
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                True desert climate. Extreme heat in summer (45C+). Very cold winter nights (near freezing). Almost no rainfall. Massive daily temperature swings of 25-30 degrees. Dry heat year-round.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-green-700" /> Atlas Mountains
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Alpine climate above 2,000m. Heavy winter snowfall (November-April). Cool summers with afternoon thunderstorms. Temperature drops roughly 6C per 1,000m of altitude gained.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-600" /> Rif & North Coast
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                True Mediterranean climate. Wettest region of Morocco (800mm+ annual rainfall). Lush green landscapes. Mild, wet winters and warm, dry summers. Chefchaouen gets more rain than London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            Weather Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Layer Everything', detail: 'Temperature swings of 15-20C in a single day are normal in Morocco. A scorching afternoon in Marrakech becomes a chilly evening. Always carry a layer.' },
              { title: 'Sunscreen is Year-Round', detail: 'Even in winter, UV levels in Morocco are high due to the latitude and clear skies. SPF 30+ minimum, SPF 50+ recommended.' },
              { title: 'Wind at the Coast', detail: 'Essaouira and Atlantic towns are windy year-round, especially June-September. Pack a windbreaker even in summer.' },
              { title: 'Desert Nights Are Cold', detail: 'Sahara nights can drop to 5C in spring/autumn and near 0C in winter. Bring thermal layers for any desert camp experience.' },
              { title: 'Ramadan Considerations', detail: 'Ramadan shifts 10-11 days earlier each year. During Ramadan, restaurants may have limited hours. Plan ahead and respect local fasting.' },
              { title: 'Book Ahead for Peak Months', detail: 'April, October, Christmas/NYE, and Easter see the highest demand. Book accommodation 2-3 months ahead for these periods.' },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)]">{tip.title}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Travel Planning Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Best Time to Visit Morocco', href: '/best-time', desc: 'Overview of the best seasons for different types of Morocco trips.' },
              { title: 'Packing Guide', href: '/packing', desc: 'Complete packing list for Morocco covering all seasons and activities.' },
              { title: 'Morocco Weather Overview', href: '/weather', desc: 'General weather patterns and climate overview for trip planning.' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{link.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                  Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
