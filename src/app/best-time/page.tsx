import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sun,
  CloudRain,
  Thermometer,
  Users,
  DollarSign,
  Calendar,
  Mountain,
  Waves,
  Wind,
  Snowflake,
  Music,
  Camera,
  Compass,
  ArrowRight,
  MapPin,
  Backpack,
  CheckCircle,
  Star,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Time to Visit Morocco | Month-by-Month Guide | CityGuide',
  description:
    'Find the best time to visit Morocco with our complete month-by-month guide. Compare weather, crowds, prices, and festivals. Best seasons for trekking, desert tours, surfing, skiing, and beach holidays.',
  keywords: [
    'best time visit Morocco',
    'Morocco weather',
    'Morocco climate',
    'Morocco month by month',
    'Morocco seasons',
    'Morocco trekking season',
    'Morocco desert season',
    'Morocco surfing season',
    'Morocco festivals calendar',
    'Morocco peak season',
    'Morocco shoulder season',
    'Morocco off season',
    'Morocco what to pack',
    'Morocco temperature',
  ],
  openGraph: {
    title: 'Best Time to Visit Morocco - Month-by-Month Guide - CityGuide',
    description:
      'Complete guide to the best time to visit Morocco by month, activity, and region. Weather, festivals, crowd levels, and packing tips.',
    url: 'https://citytoursmorocco.com/best-time',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco at golden hour with Atlas Mountains in the distance',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/best-time' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/best-time',
  name: 'Best Time to Visit Morocco',
  description:
    'Comprehensive month-by-month guide to the best time to visit Morocco, covering weather, festivals, crowd levels, prices, and activity recommendations.',
  url: 'https://citytoursmorocco.com/best-time',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Best Time to Visit', item: 'https://citytoursmorocco.com/best-time' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   CLIMATE ZONES DATA
   ═══════════════════════════════════════════════════════════════ */

const climateZones = [
  {
    name: 'Mediterranean Coast',
    icon: Waves,
    regions: 'Tangier, Tetouan, Al Hoceima, Nador',
    description:
      'Mild, wet winters and warm, dry summers. Sea breezes moderate temperatures year-round. Average highs of 15-18 C in winter and 27-32 C in summer. Most rain falls between November and March.',
    color: 'var(--color-primary)',
  },
  {
    name: 'Atlantic Coast',
    icon: Wind,
    regions: 'Rabat, Casablanca, Essaouira, Agadir',
    description:
      'Moderated by ocean currents, the Atlantic coast is mild throughout the year. Essaouira and the central coast experience persistent winds. Agadir enjoys 300+ days of sunshine. Summers are pleasantly warm without extreme heat.',
    color: 'var(--color-primary-light)',
  },
  {
    name: 'Interior / Continental',
    icon: Sun,
    regions: 'Fes, Meknes, Marrakech, Beni Mellal',
    description:
      'Hot summers and cool winters with significant temperature swings. Marrakech can exceed 45 C in July-August but drops to 5-10 C winter nights. Spring and autumn are the ideal shoulder seasons with perfect 22-28 C days.',
    color: 'var(--color-accent)',
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    regions: 'High Atlas, Middle Atlas, Ifrane, Oukaïmeden',
    description:
      'Alpine conditions at elevation. Snow covers peaks from November to May. Ifrane, at 1,650 m, is Morocco&apos;s coldest town with occasional sub-zero temperatures. Summer trekking season (June-September) brings warm days and cool nights.',
    color: 'var(--color-green)',
  },
  {
    name: 'Saharan / Pre-Saharan',
    icon: Thermometer,
    regions: 'Ouarzazate, Merzouga, Zagora, Errachidia',
    description:
      'Extreme continental desert climate with scorching summers (regularly above 45 C) and surprisingly cold winter nights (near freezing). The best desert season runs October to March, when daytime temperatures are a manageable 20-28 C.',
    color: 'var(--color-secondary)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MONTH-BY-MONTH DATA
   ═══════════════════════════════════════════════════════════════ */

const months = [
  {
    name: 'January',
    tempHigh: '17-18',
    tempLow: '5-8',
    rainfall: 'Moderate',
    crowds: 'Low',
    prices: 'Low',
    highlights: 'Quiet medinas, skiing in Ifrane and Oukaïmeden, mild desert days, Tangier International Film Festival.',
    bestCities: 'Marrakech, Agadir, Ouarzazate, Merzouga',
    description: 'The quietest month in Morocco. Cool but pleasant in the south and on the coast. Ideal for desert trips without the crowds. Snow in the Atlas makes for a unique Moroccan ski experience. Budget travelers will find the best hotel deals of the year.',
  },
  {
    name: 'February',
    tempHigh: '18-20',
    tempLow: '6-9',
    rainfall: 'Moderate',
    crowds: 'Low',
    prices: 'Low',
    highlights: 'Almond blossoms in Tafraoute, still uncrowded, good value, warming trend begins.',
    bestCities: 'Tafraoute, Marrakech, Agadir, Fes',
    description: 'February brings the spectacular almond blossom season to the Anti-Atlas, particularly around Tafraoute. The pink and white blossoms against red rock landscapes are unforgettable. Prices remain low, and you will have major attractions largely to yourself.',
  },
  {
    name: 'March',
    tempHigh: '20-23',
    tempLow: '8-12',
    rainfall: 'Low-Moderate',
    crowds: 'Medium',
    prices: 'Medium',
    highlights: 'Spring blooms across the country, wildflowers in the Atlas, pleasant everywhere, start of trekking season.',
    bestCities: 'Fes, Chefchaouen, Marrakech, High Atlas',
    description: 'Spring arrives across Morocco. Wildflowers carpet the Atlas foothills, temperatures are perfect for sightseeing, and the country feels fresh and green. A superb all-around month that avoids both winter chill and summer heat. Tourist numbers begin rising but remain manageable.',
  },
  {
    name: 'April',
    tempHigh: '22-26',
    tempLow: '10-14',
    rainfall: 'Low',
    crowds: 'Medium-High',
    prices: 'Medium-High',
    highlights: 'Rose harvest in Kelaat M&apos;gouna (Rose Valley), perfect weather, Easter holidays, great for trekking.',
    bestCities: 'Dades Valley, Marrakech, Essaouira, Fes',
    description: 'One of the two best months to visit Morocco overall. The Dades Valley rose harvest fills the air with fragrance, and the Rose Festival in Kelaat M&apos;gouna is a vibrant celebration. Weather is ideal everywhere except the deep desert, which begins warming up.',
  },
  {
    name: 'May',
    tempHigh: '25-30',
    tempLow: '13-17',
    rainfall: 'Low',
    crowds: 'Medium',
    prices: 'Medium',
    highlights: 'Warm but not yet hot, great everywhere, fewer tourists than April, long daylight hours.',
    bestCities: 'Everywhere (ideal month)',
    description: 'May is arguably the single best month to visit Morocco. It is warm enough for beaches, cool enough for medina exploration, and perfect for High Atlas trekking. The desert is still accessible though warming. Tourist density dips between the Easter and summer rushes.',
  },
  {
    name: 'June',
    tempHigh: '28-35',
    tempLow: '16-20',
    rainfall: 'Very Low',
    crowds: 'Medium-High',
    prices: 'Medium-High',
    highlights: 'Festival season begins, Gnaoua World Music Festival (Essaouira), Fes Festival of World Sacred Music, coast is perfect.',
    bestCities: 'Essaouira, Tangier, Agadir, Chefchaouen',
    description: 'The festival season kicks off with two of Morocco&apos;s most famous cultural events. Interior cities like Marrakech and Fes start getting seriously hot, but the Atlantic coast remains perfect. Beach season is in full swing, and the long evenings are magical.',
  },
  {
    name: 'July',
    tempHigh: '32-40',
    tempLow: '18-24',
    rainfall: 'None',
    crowds: 'High',
    prices: 'High',
    highlights: 'Peak beach season, coastal cities at their liveliest, Marrakech Popular Arts Festival, European summer holidays.',
    bestCities: 'Essaouira, Agadir, Tangier, Asilah',
    description: 'Peak heat drives visitors to the coast, where conditions are ideal. Marrakech and Fes can be punishing in the afternoon heat (40 C+), though riads with pools provide refuge. The Sahara is virtually off-limits due to extreme temperatures. Coastal cities buzz with energy.',
  },
  {
    name: 'August',
    tempHigh: '33-42',
    tempLow: '19-25',
    rainfall: 'None',
    crowds: 'Highest',
    prices: 'Highest',
    highlights: 'Peak tourist month, coastal towns packed, Moroccan domestic holidays (many locals vacation), Asilah Arts Festival.',
    bestCities: 'Essaouira, Agadir, Tangier, Ifrane (mountain cool)',
    description: 'The busiest and most expensive month. Moroccan families join international tourists at the coast, and beach towns are at full capacity. Book well in advance. The interior is extremely hot. For a cooler escape, head to the Middle Atlas mountain towns of Ifrane or Azrou.',
  },
  {
    name: 'September',
    tempHigh: '28-35',
    tempLow: '16-21',
    rainfall: 'Very Low',
    crowds: 'Medium',
    prices: 'Medium',
    highlights: 'Heat begins easing, excellent value, shoulder season begins, emptying beaches, Tanjazz festival.',
    bestCities: 'Marrakech, Fes, Essaouira, Ouarzazate',
    description: 'A superb shoulder-season month. The worst heat is breaking, summer crowds have thinned dramatically, and prices drop. The coast is still warm for swimming, and the interior becomes tolerable again. Desert trips resume toward the end of the month. Exceptional value.',
  },
  {
    name: 'October',
    tempHigh: '24-30',
    tempLow: '12-17',
    rainfall: 'Low',
    crowds: 'Medium',
    prices: 'Medium',
    highlights: 'Imilchil Marriage Festival (Berber), date harvest season, perfect trekking weather, desert season resumes fully.',
    bestCities: 'High Atlas (trekking), Merzouga, Zagora, Marrakech',
    description: 'The second-best month alongside May. October brings the famous Imilchil Marriage Festival in the High Atlas, where Berber tribes gather for a traditional betrothal ceremony. The date harvest transforms Saharan oases. Trekking conditions are perfect, and the desert is sublime.',
  },
  {
    name: 'November',
    tempHigh: '20-24',
    tempLow: '9-13',
    rainfall: 'Low-Moderate',
    crowds: 'Low',
    prices: 'Low',
    highlights: 'Date harvest continues, quiet season begins, cooler evenings, olive harvest, Marrakech International Film Festival.',
    bestCities: 'Marrakech, Ouarzazate, Agadir, Fes',
    description: 'A hidden gem month. Tourist numbers drop significantly, autumn light is golden and perfect for photography, and temperatures are comfortable everywhere. The Marrakech International Film Festival brings a touch of glamour. First snows dust the High Atlas peaks.',
  },
  {
    name: 'December',
    tempHigh: '17-20',
    tempLow: '5-9',
    rainfall: 'Moderate',
    crowds: 'Low-Medium',
    prices: 'Low (except holidays)',
    highlights: 'Snow-capped Atlas Mountains, festive atmosphere, winter markets, Christmas and New Year tourism spike, cozy riads.',
    bestCities: 'Marrakech, Fes, Agadir, Merzouga',
    description: 'The Atlas Mountains wear their snow caps, creating a dramatic backdrop for the red walls of Marrakech. Early December is quiet and affordable, though prices spike during Christmas and New Year. The desert is cool and clear. Evenings by a riad fireplace with mint tea are magical.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEST TIME BY ACTIVITY DATA
   ═══════════════════════════════════════════════════════════════ */

const activities = [
  {
    name: 'Trekking & Hiking',
    icon: Mountain,
    bestMonths: 'April-May, September-October',
    description: 'Spring and autumn offer perfect trekking temperatures in the High Atlas (15-25 C at altitude). The Toubkal summit is snow-free from June to October. Summer trekking is possible but hot at lower elevations.',
  },
  {
    name: 'Desert Expeditions',
    icon: Sun,
    bestMonths: 'October-March',
    description: 'The Sahara is best visited when daytime temperatures drop below 30 C. October-November and February-March offer the most pleasant conditions. December-January nights in the desert can be very cold (near freezing) but days are perfect.',
  },
  {
    name: 'Beach Holidays',
    icon: Waves,
    bestMonths: 'June-September',
    description: 'Atlantic water temperatures peak at 20-22 C in August-September. Agadir is warmest year-round. The Mediterranean coast (Al Hoceima, Saïdia) is warmer for swimming than the windier Atlantic. Essaouira is always breezy.',
  },
  {
    name: 'Surfing',
    icon: Wind,
    bestMonths: 'November-March',
    description: 'Winter swells deliver the best waves to Taghazout, Imsouane, and the stretch between Essaouira and Agadir. Water temperatures are 16-18 C (wetsuit recommended). Summer offers smaller waves suitable for beginners.',
  },
  {
    name: 'Skiing',
    icon: Snowflake,
    bestMonths: 'January-March',
    description: 'Oukaïmeden (2,600 m) near Marrakech and Michlifen near Ifrane offer basic but unique skiing in Africa. Snow coverage is unreliable but peaks in January-February. The experience is more about novelty than world-class slopes.',
  },
  {
    name: 'Festivals & Culture',
    icon: Music,
    bestMonths: 'June-July (peak), year-round',
    description: 'The Gnaoua Festival (Essaouira, June), Fes Festival of World Sacred Music (June), and Marrakech Popular Arts Festival (July) are the highlights. The Imilchil Marriage Festival (October) and film festivals (November-January) round out the calendar.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   REGIONAL CLIMATE TABLE DATA
   ═══════════════════════════════════════════════════════════════ */

const regionalClimate = [
  { region: 'Marrakech', winterHigh: '18 C', summerHigh: '38 C', rainyDays: '30/year', sunHours: '8-11 hrs' },
  { region: 'Fes', winterHigh: '16 C', summerHigh: '36 C', rainyDays: '55/year', sunHours: '7-10 hrs' },
  { region: 'Casablanca', winterHigh: '17 C', summerHigh: '27 C', rainyDays: '60/year', sunHours: '7-10 hrs' },
  { region: 'Essaouira', winterHigh: '18 C', summerHigh: '24 C', rainyDays: '25/year', sunHours: '8-10 hrs' },
  { region: 'Agadir', winterHigh: '21 C', summerHigh: '28 C', rainyDays: '20/year', sunHours: '9-11 hrs' },
  { region: 'Tangier', winterHigh: '15 C', summerHigh: '29 C', rainyDays: '75/year', sunHours: '7-10 hrs' },
  { region: 'Ouarzazate', winterHigh: '17 C', summerHigh: '40 C', rainyDays: '20/year', sunHours: '9-12 hrs' },
  { region: 'Merzouga (Desert)', winterHigh: '20 C', summerHigh: '45 C', rainyDays: '10/year', sunHours: '10-12 hrs' },
  { region: 'Ifrane (Mountains)', winterHigh: '9 C', summerHigh: '30 C', rainyDays: '70/year', sunHours: '7-10 hrs' },
  { region: 'Chefchaouen', winterHigh: '13 C', summerHigh: '32 C', rainyDays: '65/year', sunHours: '7-10 hrs' },
];

/* ═══════════════════════════════════════════════════════════════
   PACKING DATA
   ═══════════════════════════════════════════════════════════════ */

const packingGuide = [
  {
    season: 'Spring (March-May)',
    items: [
      'Layers: light jacket for mornings, t-shirts for afternoons',
      'Comfortable walking shoes (cobblestones are everywhere)',
      'Sunscreen and sunhat (UV is strong)',
      'Light scarf for mosque visits and wind protection',
      'Rain jacket (occasional spring showers)',
      'Trekking boots if heading to the Atlas',
    ],
  },
  {
    season: 'Summer (June-August)',
    items: [
      'Lightweight, breathable clothing (linen or cotton)',
      'Wide-brimmed hat and strong sunscreen (SPF 50)',
      'Refillable water bottle (stay hydrated)',
      'Swimwear for coast and hotel pools',
      'Light cardigan for air-conditioned restaurants',
      'Sandals and comfortable walking shoes',
    ],
  },
  {
    season: 'Autumn (September-November)',
    items: [
      'Similar to spring: layers are key',
      'Medium-weight jacket for evening chill',
      'Comfortable shoes for long medina walks',
      'Camera gear (autumn light is outstanding)',
      'Warm layers for desert nights (October onward)',
      'Light rain gear for November',
    ],
  },
  {
    season: 'Winter (December-February)',
    items: [
      'Warm coat and layers (riads can be cool)',
      'Warm hat and gloves for Atlas and desert nights',
      'Waterproof jacket (winter rains in the north)',
      'Warm sleepwear (many riads lack central heating)',
      'Thermal underlayer for desert camping',
      'Sturdy waterproof shoes',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SEASON COMPARISON DATA
   ═══════════════════════════════════════════════════════════════ */

const seasonComparison = [
  {
    season: 'Peak Season',
    period: 'July-August, Christmas/New Year, Easter',
    crowds: 'High to Very High',
    prices: 'Highest (50-100% above average)',
    weather: 'Hot inland, perfect coast (summer); Cool, festive (holidays)',
    pros: 'Liveliest atmosphere, festivals, beach weather, full services',
    cons: 'Highest prices, booked-out riads, crowded medinas, extreme inland heat (summer)',
  },
  {
    season: 'Shoulder Season',
    period: 'March-May, September-November',
    crowds: 'Low to Medium',
    prices: 'Moderate (near average)',
    weather: 'Ideal: 20-28 C, low rain, comfortable everywhere',
    pros: 'Best overall weather, fewer crowds, good prices, all activities possible',
    cons: 'Some festivals only in summer, occasional rain in November/March',
  },
  {
    season: 'Off Season',
    period: 'January-February, June (interior)',
    crowds: 'Lowest',
    prices: 'Lowest (30-50% below average)',
    weather: 'Cool/rainy (winter); Very hot inland (June)',
    pros: 'Best prices, empty attractions, authentic local life, skiing',
    cons: 'Some mountain passes closed, cooler evenings, shorter days (winter)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER - crowd and price level colors
   ═══════════════════════════════════════════════════════════════ */

function crowdColor(level: string): string {
  if (level.includes('Highest') || level.includes('Very High')) return 'var(--color-secondary)';
  if (level.includes('High')) return 'var(--color-accent-dark)';
  if (level.includes('Medium')) return 'var(--color-accent)';
  return 'var(--color-green)';
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function BestTimePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-desert.webp"
            alt="Sunset over Morocco with Atlas Mountains in the background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Time to Visit</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Planning Your Trip
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Time to Visit Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From snow-capped Atlas peaks to sun-scorched Saharan dunes, Morocco&apos;s diverse climate
              means there is always somewhere perfect to visit &mdash; if you know when to go.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Climate Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Thermometer className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Climate Overview
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco spans five distinct climate zones, from Mediterranean shores to Saharan desert.
              Understanding these zones is the key to timing your visit perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {climateZones.map((zone) => (
              <div key={zone.name} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: `${zone.color}15` }}>
                  <zone.icon className="w-6 h-6" style={{ color: zone.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {zone.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">{zone.regions}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {zone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Month-by-Month Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Every month in Morocco has something to offer. Find the perfect time for your travel
              style, budget, and interests.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {months.map((month, index) => (
              <article key={month.name} className="card-moroccan overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Month Header */}
                  <div className="lg:w-56 shrink-0 bg-[var(--color-primary)]/5 p-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <span className="text-4xl font-bold font-[family-name:var(--font-display)] text-[var(--color-primary)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {month.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-[var(--color-secondary)]" />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Temp</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{month.tempHigh} C</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-[var(--color-primary)]" />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Low</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{month.tempLow} C</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CloudRain className="w-4 h-4 text-[var(--color-primary-light)]" />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Rain</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{month.rainfall}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" style={{ color: crowdColor(month.crowds) }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Crowds</span>
                          <span className="text-sm font-semibold" style={{ color: crowdColor(month.crowds) }}>{month.crowds}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" style={{ color: crowdColor(month.prices) }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Prices</span>
                          <span className="text-sm font-semibold" style={{ color: crowdColor(month.prices) }}>{month.prices}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-3">
                      {month.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">Highlights: </span>
                        <span className="text-[var(--text-secondary)]">{month.highlights}</span>
                      </div>
                      <div className="shrink-0">
                        <span className="font-semibold text-[var(--text-primary)]">Best for: </span>
                        <span className="text-[var(--text-secondary)]">{month.bestCities}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time by Activity ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time by Activity
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The ideal time to visit depends on what you want to do. Here is a guide to the best
              seasons for Morocco&apos;s most popular activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.name} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <activity.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {activity.name}
                </h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                  {activity.bestMonths}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Climate Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Regional Climate Comparison
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A quick reference showing how dramatically temperatures and conditions vary
              across Morocco&apos;s major destinations.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Region</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Winter High</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Summer High</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Rainy Days</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Sun Hours/Day</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalClimate.map((row, index) => (
                    <tr
                      key={row.region}
                      className={index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}
                    >
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.region}</td>
                      <td className="p-4 text-center text-[var(--color-primary)]">{row.winterHigh}</td>
                      <td className="p-4 text-center text-[var(--color-secondary)]">{row.summerHigh}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{row.rainyDays}</td>
                      <td className="p-4 text-center text-[var(--color-accent)]">{row.sunHours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Backpack className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Pack by Season
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s climate diversity means packing smart is essential. Here is what to bring
              for each season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {packingGuide.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4">
                  {season.season}
                </h3>
                <ul className="space-y-2.5">
                  {season.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Peak vs Shoulder vs Off-Season ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Peak vs Shoulder vs Off-Season
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Compare Morocco&apos;s three travel seasons to find the right balance of weather, crowds,
              and budget for your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {seasonComparison.map((season) => {
              const isPeak = season.season === 'Peak Season';
              const isShoulder = season.season === 'Shoulder Season';
              return (
                <div
                  key={season.season}
                  className={`card-moroccan p-6 md:p-8 ${isShoulder ? 'border-2 border-[var(--color-primary)] relative' : ''}`}
                >
                  {isShoulder && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold bg-[var(--color-primary)] text-white">
                        <Star className="w-3 h-3" /> Recommended
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {season.season}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-semibold mb-4">
                    {season.period}
                  </p>

                  <div className="space-y-3 text-sm mb-5">
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">Crowds: </span>
                      <span className="text-[var(--text-secondary)]">{season.crowds}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">Prices: </span>
                      <span className="text-[var(--text-secondary)]">{season.prices}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--text-primary)]">Weather: </span>
                      <span className="text-[var(--text-secondary)]">{season.weather}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[var(--border-light)]">
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-green)] uppercase tracking-wide mb-1">Pros</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{season.pros}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wide mb-1">Cons</h4>
                      <p className="text-sm text-[var(--text-secondary)]">{season.cons}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Now that you know the best time to visit, explore our curated itineraries and start
            building your perfect Moroccan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Browse Itineraries
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Festival Calendar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
