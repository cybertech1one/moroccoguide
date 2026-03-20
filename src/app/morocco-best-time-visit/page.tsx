import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  DollarSign,
  Clock,
  Info,
  CheckCircle,
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Globe,
  Sun,
  Cloud,
  Thermometer,
  Calendar,
  Umbrella,
  Wind,
  Mountain,
  CloudRain,
  Sunrise,
  Luggage,
  TrendingUp,
  TrendingDown,
  Users,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Time to Visit Morocco 2026 | Month-by-Month Weather, Crowds & Prices',
  description:
    'Plan your Morocco trip with real temperature data, crowd levels, and prices for every month. Covers coast, desert, mountains, and imperial cities with festival dates, Ramadan tips, and packing advice.',
  keywords: [
    'best time to visit morocco',
    'when to go to morocco',
    'morocco weather by month',
    'best month to visit morocco',
    'morocco climate guide',
    'morocco seasons',
    'morocco peak season',
    'morocco off season travel',
    'morocco shoulder season',
    'morocco rainy season',
    'morocco desert weather',
    'morocco summer heat',
    'morocco winter travel',
    'morocco spring weather',
    'morocco autumn travel',
    'morocco ramadan travel',
    'morocco festival calendar',
    'morocco packing list',
    'cheap time visit morocco',
    'morocco coast weather',
    'atlas mountains weather',
    'sahara desert temperature',
  ],
  openGraph: {
    title: 'Best Time to Visit Morocco 2026 | Month-by-Month Weather, Crowds & Prices',
    description:
      'Real temperature data, crowd levels, festival dates, and seasonal prices for every month of the year. Plan the perfect Morocco trip by region and budget.',
    url: `${BASE_URL}/morocco-best-time-visit`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-weather.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco landscape showing four seasons across mountains, desert, coast, and medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Visit Morocco 2026 | Weather, Crowds & Prices by Month',
    description:
      'Month-by-month Morocco guide with real temperatures, rainfall data, crowd levels, festival dates, and packing tips for coast, desert, mountains, and cities.',
    images: [`${BASE_URL}/images/hero-morocco-weather.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-best-time-visit` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-best-time-visit`,
  name: 'Best Time to Visit Morocco 2026 | Month-by-Month Weather, Crowds & Prices',
  description:
    'Complete guide to the best time to visit Morocco. Month-by-month weather data, crowd levels, festival dates, prices by season, regional climate zones, and packing advice.',
  url: `${BASE_URL}/morocco-best-time-visit`,
  image: `${BASE_URL}/images/hero-morocco-weather.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-best-time-visit`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Time to Visit Morocco', item: `${BASE_URL}/morocco-best-time-visit` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best month to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'April and October are the best months overall. April brings wildflowers, 20-25°C daytime temperatures in most cities, and manageable crowds. October offers warm weather (22-28°C), harvest festivals, and lower prices than peak season. Both months work well for every region: coast, desert, mountains, and imperial cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco too hot to visit in summer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech and Fes regularly exceed 40°C in July and August, and the Sahara reaches 50°C. Summer travel is uncomfortable in interior cities and the desert. However, the Atlantic coast stays pleasant at 22-27°C thanks to ocean breezes. Essaouira, Agadir, and Tangier are excellent summer destinations. The Atlas Mountains also remain cool at altitude.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the cheapest time to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'November through February (excluding Christmas/New Year weeks) offers the lowest prices. Hotel rates in Marrakech drop 30-50% compared to peak season. Flights from Europe are 20-40% cheaper. January and February are the most affordable months, though temperatures are cooler (8-18°C) and some mountain passes may close due to snow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it rain a lot in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco receives most of its rain between November and March, concentrated in the north and along the coast. Tangier gets about 80mm per month in winter; Marrakech gets 30-40mm. The south and desert are extremely dry year-round, with under 100mm of annual rainfall. Rain rarely lasts more than a day or two, and many days remain sunny even in wet months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Morocco during Ramadan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and it can be a rewarding cultural experience. Tourist restaurants and hotels operate normally. Some local restaurants close during daylight hours, and alcohol availability is reduced. The iftar (sunset meal) atmosphere is special. Expect slightly reduced business hours and a quieter daytime pace. In 2026, Ramadan falls approximately from February 18 to March 19. Exact dates depend on moon sightings.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for a Sahara desert tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October through April is ideal for Sahara trips. Daytime temperatures range from a pleasant 20-30°C, and nights cool to 5-10°C (bring warm layers). Avoid June through August entirely: sand temperatures exceed 70°C and air temperatures reach 45-50°C. March and October are the sweet spots, with warm days and stargazing-friendly clear skies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack layers regardless of season. Morocco has dramatic temperature swings between day and night, especially in the desert and mountains. Spring and autumn: light long-sleeved shirts, a fleece, comfortable walking shoes, and a scarf for mosques. Summer: breathable fabrics, sunhat, and strong sunscreen. Winter: warm jacket, waterproof layer, and closed shoes. Always bring modest clothing that covers shoulders and knees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco crowded during Christmas and New Year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Christmas and New Year (December 20 to January 5) is the second-busiest period after Easter week. Marrakech and Fes see a major surge in European visitors. Hotel prices jump 50-100% above winter baseline rates. Riads in popular medinas sell out weeks in advance. Book accommodation and desert tours at least two months ahead for this period.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MONTH-BY-MONTH BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const monthData = [
  {
    month: 'January',
    icon: Cloud,
    tempRange: '8-18°C (46-64°F)',
    rainfall: '30-40mm',
    crowd: 'Low',
    season: 'off' as const,
    highlights: 'Amazigh New Year (Yennayer, Jan 13). Skiing at Oukaimeden and Ifrane. Whale watching off Agadir. Cheapest hotel rates of the year.',
    summary: 'Cold mornings in Marrakech dip to 6°C, and frost blankets the Atlas above 2,000m. Mid-day sun warms cities to 18°C, making afternoons comfortable for medina exploration. Snow covers Toubkal and the Middle Atlas, drawing skiers to Oukaimeden (from 200 MAD for day passes). Sahara days are pleasant at 20°C, but desert nights plunge to 3-5°C. Pack thermals for camping.',
  },
  {
    month: 'February',
    icon: CloudRain,
    tempRange: '9-19°C (48-66°F)',
    rainfall: '35-45mm',
    crowd: 'Low',
    season: 'off' as const,
    highlights: 'Almond blossom season in Tafraout (mid-Feb). Ramadan begins around Feb 18 in 2026. Low prices continue.',
    summary: 'Almond trees explode in pink and white across the Anti-Atlas, centered on Tafraout. This is one of Morocco\'s most photogenic natural events and draws surprisingly few tourists. Temperatures creep upward, reaching 20°C in Agadir and the south. Rainfall remains moderate, with 3-5 wet days mostly in the north. Ramadan starts around February 18 in 2026, which slows daytime activity but adds cultural depth.',
  },
  {
    month: 'March',
    icon: Wind,
    tempRange: '11-22°C (52-72°F)',
    rainfall: '30-40mm',
    crowd: 'Medium',
    season: 'shoulder' as const,
    highlights: 'End of Ramadan and Eid al-Fitr (around Mar 19-20 in 2026). Spring wildflowers start. Surfing season peaks at Taghazout.',
    summary: 'Spring arrives fast. Daytime temperatures hit 22°C in Marrakech and 24°C in the south. The Eid al-Fitr celebration marks the end of Ramadan with three days of feasting and festivities. Expect closures on Eid itself but a festive atmosphere everywhere. Surf swells remain strong at Taghazout and Imsouane. The High Atlas starts opening as snow melts, though Toubkal remains snow-capped. Shoulder-season prices still apply.',
  },
  {
    month: 'April',
    icon: Sun,
    tempRange: '14-25°C (57-77°F)',
    rainfall: '20-30mm',
    crowd: 'High',
    season: 'peak' as const,
    highlights: 'Rose harvest in Kelaat M\'Gouna (late April). Easter crowds. Perfect desert weather. Wildflowers across the Atlas.',
    summary: 'One of the two best months. Temperatures are ideal everywhere: 25°C in Marrakech, 22°C on the coast, 28°C in the desert during the day. The Dades Valley turns pink during the rose harvest, building toward the Rose Festival in early May. Easter week brings the highest spring crowds and prices. Book riads two months ahead for Easter. Atlas hiking opens fully, with trails through carpets of wildflowers. Rain tapers off to a few light showers.',
  },
  {
    month: 'May',
    icon: Sun,
    tempRange: '17-29°C (63-84°F)',
    rainfall: '10-15mm',
    crowd: 'High',
    season: 'peak' as const,
    highlights: 'Rose Festival in Kelaat M\'Gouna (early May). Gnaoua Festival in Essaouira (late June, but tickets go on sale). Fes Festival of World Sacred Music.',
    summary: 'Warm but not punishing. Marrakech reaches 29°C, comfortable in the shade. The Fes Festival of World Sacred Music (typically late May to early June) fills the city with international performers. Essaouira stays breezy at 22°C. The Sahara heats up past 35°C; desert trips remain possible but less comfortable than March-April. Last reliable month for Atlas wildflowers. Crowds thin slightly after Easter, and prices drop 10-15% from April peaks.',
  },
  {
    month: 'June',
    icon: Thermometer,
    tempRange: '21-33°C (70-91°F)',
    rainfall: '2-5mm',
    crowd: 'Medium',
    season: 'shoulder' as const,
    highlights: 'Gnaoua World Music Festival in Essaouira (late June). Longest daylight hours. Beach season begins.',
    summary: 'Heat builds inland. Marrakech hits 33°C regularly, and Fes pushes to 34°C. The coast remains the smart choice: Essaouira averages 23°C with reliable trade winds, and Agadir sits at 25°C. The Gnaoua Festival (late June) transforms Essaouira into an open-air stage with free concerts across the medina. Desert trips become inadvisable as sand temperatures soar past 60°C. Prices dip 15-20% from spring peaks for inland cities.',
  },
  {
    month: 'July',
    icon: Thermometer,
    tempRange: '24-38°C (75-100°F)',
    rainfall: '0-2mm',
    crowd: 'Medium-High',
    season: 'shoulder' as const,
    highlights: 'Timitar Festival in Agadir. Coastal tourism peaks. Atlas mountain trekking at altitude.',
    summary: 'The heat splits Morocco in two. Interior cities bake: Marrakech averages 38°C, Fes 36°C, and Ouarzazate 40°C. Sightseeing before 10am and after 5pm is the only realistic approach inland. Meanwhile, the Atlantic coast thrives. Essaouira rarely exceeds 25°C. European families flock to Agadir\'s beaches. Chefchaouen at 600m stays bearable at 30°C. High Atlas trekking above 3,000m offers cool relief, with Toubkal summit temperatures around 15°C during the day.',
  },
  {
    month: 'August',
    icon: Thermometer,
    tempRange: '24-38°C (75-100°F)',
    rainfall: '0-3mm',
    crowd: 'Medium-High',
    season: 'shoulder' as const,
    highlights: 'Moussem of Moulay Abdellah near El Jadida. National holiday Aug 20. Moroccan families vacation domestically.',
    summary: 'Similar to July but with added Moroccan domestic tourism. Beach towns fill with local families, creating a festive atmosphere. Agadir, Saaidia, and Al Hoceima reach capacity. Marrakech drops to the lowest international visitor numbers of the year due to heat, which means riad bargains (30-40% off peak rates). The Sahara is completely off-limits for comfort. The Rif Mountains and northern coast offer a cooler alternative at 28-32°C with Mediterranean breezes.',
  },
  {
    month: 'September',
    icon: Sunrise,
    tempRange: '20-33°C (68-91°F)',
    rainfall: '5-15mm',
    crowd: 'Medium',
    season: 'shoulder' as const,
    highlights: 'Date harvest in Zagora and Erfoud. Tanjazz Festival in Tangier. Heat eases in the second half.',
    summary: 'A transitional month. Early September still runs hot inland (33°C in Marrakech), but the second half cools noticeably. By late September, comfortable 27°C afternoons return. The date harvest transforms oases in the Draa and Ziz valleys. Erfoud hosts the Date Festival in October, but the harvest starts here. Beaches empty of summer crowds, offering perfect conditions with warm 23°C water. Sahara trips become possible again from mid-September. A smart time to visit before October crowds arrive.',
  },
  {
    month: 'October',
    icon: Sun,
    tempRange: '16-28°C (61-82°F)',
    rainfall: '20-30mm',
    crowd: 'High',
    season: 'peak' as const,
    highlights: 'Date Festival in Erfoud. Horse Festival (Salon du Cheval) in El Jadida. Perfect Sahara weather returns.',
    summary: 'The other best month alongside April. Temperatures are ideal across every region: 26°C in Marrakech, 24°C on the coast, 30°C in the Sahara by day. The Date Festival in Erfoud draws crowds to the southeast with camel races, Berber music, and date tastings. El Jadida\'s Horse Festival showcases Moroccan equestrian culture with fantasia charges. Desert camping is spectacular, with warm days and clear starlit nights at 12-15°C. Book popular riads and desert camps at least three weeks ahead.',
  },
  {
    month: 'November',
    icon: Cloud,
    tempRange: '12-23°C (54-73°F)',
    rainfall: '35-50mm',
    crowd: 'Low-Medium',
    season: 'shoulder' as const,
    highlights: 'Marrakech International Film Festival (late Nov). Olive harvest. First snow on Atlas peaks. Prices drop.',
    summary: 'Autumn deepens and tourists thin out. Marrakech hovers at 23°C during the day, dropping to 10°C at night. Rain increases, particularly in the north where Tangier and Chefchaouen see 60-80mm, but storms pass quickly and sunshine returns. The olive harvest fills the countryside with activity. First snowfall dusts the High Atlas above 3,000m. The Marrakech International Film Festival brings celebrities and film screenings to Jemaa el-Fnaa. Prices drop 20-30% from October rates.',
  },
  {
    month: 'December',
    icon: Cloud,
    tempRange: '9-19°C (48-66°F)',
    rainfall: '30-45mm',
    crowd: 'Low (High Dec 20-Jan 5)',
    season: 'off' as const,
    highlights: 'Christmas/New Year surge (book early). Ski season opens. Short but sunny days. Lowest prices outside holiday weeks.',
    summary: 'Two Decembers exist. Early December is quiet and affordable, with pleasant 19°C days, empty attractions, and excellent riad deals. Then Christmas week hits, and Marrakech transforms: prices double, restaurants book out, and the medina fills with European holidaymakers. Atlas ski resorts open as snow accumulates. Sahara trips are comfortable during the day (20°C) but bitterly cold at night (2-5°C). New Year celebrations in Marrakech are festive, with rooftop parties across the city.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL CLIMATE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const regionalGuide = [
  {
    region: 'Atlantic Coast',
    icon: Wind,
    cities: 'Essaouira, Agadir, Rabat, Casablanca, El Jadida',
    bestMonths: 'June-September for beach; April-May & October for sightseeing',
    climate: 'Maritime influence keeps temperatures moderate year-round. Summer highs of 25-28°C, winter lows of 10-14°C. Essaouira\'s trade winds (the alizee) make it cool even in August. Fog is common June mornings in Casablanca. Winter brings occasional storms with 2-3 consecutive rainy days.',
    avoid: 'January-February if you want beach weather. November-December for heavy surf (unless surfing).',
  },
  {
    region: 'Imperial Cities',
    icon: MapPin,
    cities: 'Marrakech, Fes, Meknes, Rabat',
    bestMonths: 'March-May and October-November',
    climate: 'Continental extremes. Marrakech swings from 5°C winter mornings to 42°C summer afternoons. Fes is slightly cooler but more humid. Spring and autumn offer the perfect 20-28°C range for walking medinas and exploring riads. Rabat is the mildest imperial city thanks to its coastal position.',
    avoid: 'July-August for Marrakech and Fes (oppressive heat). Late January if cold-sensitive.',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Imlil, Oukaaimeden, Ifrane, Azrou, Ait Bougmez',
    bestMonths: 'April-June and September-October for trekking',
    climate: 'Alpine conditions above 2,000m. Summer days are warm (25-30°C) but nights cool to 8-12°C. Winter brings heavy snow above 2,500m, closing the Tizi n\'Tichka pass occasionally. Ifrane holds Morocco\'s cold record at -23°C. Spring snowmelt feeds rivers and waterfalls through May.',
    avoid: 'December-February for high-altitude trekking (snow and ice). July-August at lower elevations (hot).',
  },
  {
    region: 'Sahara & Southeast',
    icon: Sun,
    cities: 'Merzouga, Zagora, Ouarzazate, Tinghir, Errachidia',
    bestMonths: 'October-April (especially March and October)',
    climate: 'Extreme desert climate. Summer air temperatures reach 45-50°C, and sand can burn at 70°C. Winter brings comfortable 20-25°C days but cold nights (3-8°C). Spring sandstorms (chergui wind) occur in March-April, sometimes reducing visibility. Clear skies 300+ days per year make this prime stargazing territory.',
    avoid: 'June-August entirely. Sandstorm-prone days in late March.',
  },
  {
    region: 'Mediterranean North',
    icon: Globe,
    cities: 'Tangier, Chefchaouen, Tetouan, Al Hoceima, Nador',
    bestMonths: 'May-June and September-October',
    climate: 'Mediterranean with wet winters and dry summers. Chefchaouen receives 600-700mm annual rainfall, mostly November-March. Summer is warm (28-33°C) with low humidity. Spring carpets the Rif in wildflowers. Tangier gets persistent wind year-round, cooling summer days but chilling winter ones.',
    avoid: 'November-February for rainy weather. August for domestic tourist crowds in beach towns.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL PRICE COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const priceComparison = [
  {
    season: 'Peak Season',
    period: 'April, October, Easter week, Christmas/New Year',
    icon: TrendingUp,
    riad: 'From 800-2,000 MAD/night',
    flight: 'From 2,500-4,500 MAD round-trip (Europe)',
    desert: 'From 1,500-3,000 MAD for 2-day tour',
    guide: 'From 500-800 MAD/day',
    note: 'Book 2-3 months ahead for Easter and Christmas. Popular riads sell out fast.',
  },
  {
    season: 'Shoulder Season',
    period: 'March, May-June, September, November',
    icon: TrendingDown,
    riad: 'From 500-1,200 MAD/night',
    flight: 'From 1,800-3,200 MAD round-trip (Europe)',
    desert: 'From 1,000-2,200 MAD for 2-day tour',
    guide: 'From 400-600 MAD/day',
    note: 'Best value overall. Good weather, manageable crowds, and negotiable prices.',
  },
  {
    season: 'Off Season',
    period: 'January-February, July-August, December (except holidays)',
    icon: DollarSign,
    riad: 'From 300-800 MAD/night',
    flight: 'From 1,200-2,400 MAD round-trip (Europe)',
    desert: 'From 800-1,500 MAD for 2-day tour (winter only)',
    guide: 'From 300-500 MAD/day',
    note: 'Winter is cold but affordable. Summer is hot inland but great for the coast. Biggest discounts in January.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING BY SEASON
   ═══════════════════════════════════════════════════════════════ */

const packingGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sparkles,
    essentials: [
      'Light layers: long-sleeved linen or cotton shirts',
      'A warm fleece or light jacket for evenings',
      'Comfortable walking shoes with grip (medina cobblestones)',
      'Sunhat and SPF 50 sunscreen',
      'Light scarf for mosque visits and sun protection',
      'Small daypack for hikes',
    ],
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    essentials: [
      'Breathable, loose-fitting clothes in natural fabrics',
      'Wide-brimmed sun hat and quality sunglasses',
      'High SPF sunscreen and lip balm with SPF',
      'Refillable water bottle (dehydration is a real risk)',
      'Light cardigan for aggressive air conditioning indoors',
      'Sandals for beach, closed shoes for cities',
    ],
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    essentials: [
      'Mix of short and long sleeves',
      'A medium-weight jacket or windbreaker',
      'Waterproof layer for November (compact rain jacket)',
      'Warm socks and closed walking shoes',
      'Scarf that doubles as blanket on desert nights',
      'Layers for desert: hot days, cold nights',
    ],
  },
  {
    season: 'Winter (December-February)',
    icon: Cloud,
    essentials: [
      'Warm insulating jacket (down or fleece-lined)',
      'Thermal base layers for desert camping',
      'Waterproof shoes or boots',
      'Warm hat, gloves, and scarf for mountains and desert nights',
      'Hot water bottle for unheated riads',
      'Umbrella for northern cities',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBestTimeVisitPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li className="flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[var(--text-primary)] font-medium">Best Time to Visit Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 hero-overlay">
        <div className="absolute inset-0 moroccan-pattern opacity-5" />
        <div className="container-morocco relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            2026 Climate &amp; Travel Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Best Time to Visit Morocco
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
            Real temperature data, actual crowd levels, and honest price ranges for every month.
            From Atlantic beaches to Sahara dunes, find the right season for your trip.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-[var(--color-accent)]" /> Month-by-month data</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[var(--color-accent)]" /> 5 climate zones</span>
            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-[var(--color-accent)]" /> Price comparisons</span>
            <span className="flex items-center gap-1.5"><Luggage className="w-4 h-4 text-[var(--color-accent)]" /> Packing advice</span>
          </div>
        </div>
      </section>

      {/* ── Quick Answer Section ── */}
      <section className="py-12 md:py-16 bg-[var(--bg-secondary)]">
        <div className="container-morocco">
          <div className="card-moroccan p-6 md:p-8 zellige-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  Short Answer: April and October Win
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  April and October deliver the best all-around conditions for Morocco. Temperatures sit between 20-28°C across most regions,
                  rainfall is minimal, and every part of the country is accessible. April brings wildflowers and the rose harvest; October
                  offers the date festival and perfect Sahara camping weather. Shoulder months (March, May, November) offer similar conditions
                  at 15-25% lower prices.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)]"><strong>Budget pick:</strong> January-February</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)]"><strong>Beach pick:</strong> June-September</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-[var(--text-secondary)]"><strong>Desert pick:</strong> March &amp; October</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Climate Zones Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Five Climate Zones
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco packs five distinct climates into a country the size of California. The Atlantic coast, imperial
              cities, Atlas Mountains, Sahara Desert, and Mediterranean north each follow different seasonal patterns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalGuide.map((region) => (
              <div key={region.region} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                    <region.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {region.region}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-2">{region.cities}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{region.climate}</p>
                <div className="flex items-center gap-1.5 text-sm mb-1">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]"><strong>Best:</strong> {region.bestMonths}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Info className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]"><strong>Avoid:</strong> {region.avoid}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Month-by-Month Breakdown
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Actual temperatures, rainfall averages, crowd levels, and key events for each month.
              Data based on Marrakech as the baseline, with regional notes in each entry.
            </p>
          </div>
          <div className="space-y-6">
            {monthData.map((m) => (
              <div key={m.month} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex items-center gap-3 md:min-w-[180px]">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      m.season === 'peak' ? 'bg-amber-100 text-amber-700' :
                      m.season === 'shoulder' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      <m.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {m.month}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        m.season === 'peak' ? 'bg-amber-100 text-amber-700' :
                        m.season === 'shoulder' ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {m.season === 'peak' ? 'Peak' : m.season === 'shoulder' ? 'Shoulder' : 'Off-Season'}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                      <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <Thermometer className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                        {m.tempRange}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <Umbrella className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        {m.rainfall}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <Users className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" />
                        Crowds: {m.crowd}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-gold)] flex-shrink-0" />
                        Events
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">{m.summary}</p>
                    <div className="flex items-start gap-1.5 text-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]"><strong>Highlights:</strong> {m.highlights}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Peak vs Shoulder vs Off-Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Peak vs. Shoulder vs. Off-Season
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s tourist seasons don&apos;t align neatly with European ones. Understanding the three tiers
              helps you balance weather, crowds, and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 border-t-4 border-t-amber-500">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Peak Season
              </h3>
              <p className="text-sm font-medium text-amber-700 mb-4">April, October, Easter week, Christmas/New Year</p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Best weather across all regions</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Major festivals and cultural events</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Highest prices (riads from 800 MAD/night)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Most crowded medinas and tourist sites</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Advance booking essential (2-3 months)</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-t-4 border-t-blue-500">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Shoulder Season
              </h3>
              <p className="text-sm font-medium text-blue-700 mb-4">March, May-June, September, November</p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Good weather (some heat in Jun/Sep)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> 15-30% cheaper than peak season</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Fewer crowds at major attractions</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Best overall value for money</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Booking 2-3 weeks ahead usually sufficient</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-t-4 border-t-slate-400">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Off-Season
              </h3>
              <p className="text-sm font-medium text-slate-600 mb-4">January-February, July-August, early December</p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Lowest prices (30-50% below peak)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Authentic local atmosphere, few tourists</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Winter: cool temps, occasional rain</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Summer: extreme heat inland (38-45°C)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" /> Some mountain passes close in winter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Prices ── */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Price Comparison by Season
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              How much you spend depends heavily on when you go. These ranges reflect mid-range options
              in Marrakech and popular destinations. Seasonal pricing can change based on demand.
            </p>
          </div>
          <div className="space-y-6">
            {priceComparison.map((tier) => (
              <div key={tier.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <tier.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tier.season}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{tier.period}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1">Riad / Hotel</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{tier.riad}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1">Flights</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{tier.flight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1">Desert Tour</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{tier.desert}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1">Private Guide</p>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{tier.guide}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  {tier.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ramadan Considerations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Traveling During Ramadan
              </h2>
            </div>
            <div className="card-moroccan p-6 md:p-8 mb-6">
              <p className="text-[var(--text-secondary)] mb-4">
                Ramadan shifts roughly 10-11 days earlier each year. In 2026, it falls approximately from
                <strong> February 18 to March 19</strong> (exact dates depend on moon sightings). In 2027,
                expect early February to mid-March.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                Morocco remains fully functional for tourists during Ramadan. Hotels serve breakfast and lunch
                normally. Tourist restaurants in Marrakech, Fes, and other major cities stay open all day. The real
                change is atmospheric: streets are quieter during the afternoon, then burst to life at sunset
                when families gather for iftar (the breaking of the fast).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" /> Advantages
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li>Unique cultural experience few tourists witness</li>
                    <li>Lower prices and fewer crowds at attractions</li>
                    <li>Spectacular iftar atmosphere in medinas at sunset</li>
                    <li>Special Ramadan pastries and dishes available</li>
                    <li>Genuine hospitality when invited to share iftar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" /> Things to Know
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li>Some local restaurants close until sunset</li>
                    <li>Alcohol availability drops significantly</li>
                    <li>Business hours may shorten (offices close at 3pm)</li>
                    <li>Avoid eating, drinking, or smoking in public during daylight</li>
                    <li>Eid al-Fitr (end of Ramadan) means 3 days of closures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Pack by Season
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s dramatic day-to-night temperature swings catch many travelers off guard.
              A 35°C afternoon in the desert can drop to 5°C by midnight. Layers are non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingGuide.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <season.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {season.season}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {season.essentials.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 card-moroccan p-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--text-secondary)]">
              <strong>Year-round essentials:</strong> Modest clothing covering shoulders and knees (required for mosques
              and respectful in medinas), comfortable broken-in walking shoes, a travel adapter (Morocco uses Types C and E,
              220V), and a money belt or hidden pouch for cash. Pharmacies stock most basics, but bring
              specific medications as brands differ.
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Festival Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              2026 Festival &amp; Event Calendar
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Major festivals can fill hotels for miles around. Plan your trip to coincide with one,
              or avoid them if you prefer quieter travel. Dates for religious holidays are approximate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">January 13</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Yennayer (Amazigh New Year)</h3>
              <p className="text-sm text-[var(--text-secondary)]">National holiday since 2018. Traditional meals, music, and celebrations across the Atlas and Souss regions.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">February 18 - March 19 (approx.)</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Ramadan</h3>
              <p className="text-sm text-[var(--text-secondary)]">Month of fasting from dawn to sunset. Quieter days, festive evenings. Tourist infrastructure operates normally.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">March 19-21 (approx.)</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Eid al-Fitr</h3>
              <p className="text-sm text-[var(--text-secondary)]">End of Ramadan. Three days of family gatherings, feasting, and gift-giving. Some shops and offices close.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">Late April - Early May</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Rose Festival (Kelaat M&apos;Gouna)</h3>
              <p className="text-sm text-[var(--text-secondary)]">The Dades Valley celebrates the rose harvest with parades, music, and the crowning of a Rose Queen.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">May 25-27 (approx.)</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Eid al-Adha</h3>
              <p className="text-sm text-[var(--text-secondary)]">Feast of Sacrifice. Morocco&apos;s most significant religious holiday. Transport is extremely busy. Many businesses close for 3-4 days.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">Late May - Early June</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Fes Festival of World Sacred Music</h3>
              <p className="text-sm text-[var(--text-secondary)]">International artists perform in historic venues across Fes. Tickets from 200 MAD. Book Fes accommodation early.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">Late June</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Gnaoua World Music Festival</h3>
              <p className="text-sm text-[var(--text-secondary)]">Essaouira&apos;s legendary free music festival. Gnaoua, jazz, and world music on stages throughout the medina. Hotels sell out weeks ahead.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">October</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Date Festival (Erfoud)</h3>
              <p className="text-sm text-[var(--text-secondary)]">Three days of date tastings, camel races, Berber music, and fantasia displays in the gateway to the Sahara.</p>
            </div>
            <div className="card-moroccan p-5">
              <p className="text-xs font-medium text-[var(--color-accent)] mb-1">Late November - Early December</p>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Marrakech International Film Festival</h3>
              <p className="text-sm text-[var(--text-secondary)]">Red-carpet screenings at the Palais des Congres. Free outdoor screenings on Jemaa el-Fnaa. Celebrity sightings common.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best month to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                April and October deliver the best conditions overall. April runs 20-25°C in most cities, with wildflowers,
                minimal rain, and the rose harvest in the Dades Valley. October brings 22-28°C temperatures, perfect Sahara
                camping weather, and the Erfoud Date Festival. Both months work for coast, desert, mountains, and cities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco too hot to visit in summer?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Interior cities suffer. Marrakech and Fes regularly exceed 40°C in July-August, and the Sahara
                hits 50°C. The Atlantic coast is a different story: Essaouira averages 23°C, Agadir 27°C, and
                Tangier 28°C. Stick to the coast and the Atlas Mountains at altitude for a comfortable summer visit.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the cheapest time to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                January and February offer the steepest discounts. Hotel rates in Marrakech drop 30-50% below
                peak season. Flights from European hubs fall 20-40% compared to spring and autumn. The trade-off
                is cooler weather (8-18°C) and the possibility of rain, but many days remain sunny and pleasant for
                sightseeing.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does it rain a lot in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Rain concentrates between November and March, mainly in the north. Tangier gets about 80mm monthly
                in winter; Marrakech sees 30-40mm. The south and Sahara are bone-dry year-round, with under 100mm
                annually. Storms rarely last more than a day or two, and sunshine breaks through even during the
                wettest months.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Morocco during Ramadan?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. Tourist restaurants and hotels operate normally. Some local eateries close until sunset,
                and alcohol service is reduced. The iftar atmosphere at sunset is genuinely special. In 2026, Ramadan
                falls approximately from February 18 to March 19. Be respectful: avoid eating, drinking, or smoking
                in public during daylight hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time for a Sahara desert tour?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                October through April. Daytime temperatures range 20-30°C, and nights cool to 5-10°C (bring warm
                layers). March and October are the sweet spots, balancing warmth with clear skies for stargazing.
                Skip June through August entirely: air hits 45-50°C and sand burns at 70°C.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I pack for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Layers, always layers. Day-to-night swings of 15-20°C are standard in the desert and mountains.
                Spring/autumn: light long sleeves, a fleece, walking shoes, sunhat. Summer: breathable fabrics,
                high SPF sunscreen, reusable water bottle. Winter: warm jacket, waterproof layer, thermals for desert
                nights. Year-round: modest clothing (shoulders and knees covered), comfortable shoes for cobblestones.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco crowded during Christmas and New Year?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                December 20 to January 5 is the second-busiest period after Easter week. Marrakech sees a major
                surge in European visitors. Hotel prices jump 50-100% above winter baseline. Popular riads sell out
                weeks in advance. Book accommodation and desert tours at least two months ahead for this period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed costs, money-saving tips, and realistic daily budgets for backpackers and mid-range travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-first-time-visitor" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First-Time Visitor Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know before your first Morocco trip: visas, safety, culture, and logistics.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Luggage className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Season-specific packing lists for Morocco, from Atlas trekking gear to desert camping essentials.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-desert" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to desert tours, camel treks, luxury camps, and stargazing in the Moroccan Sahara.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your Morocco Trip?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Pick your month, pack your layers, and get ready for a country that rewards travelers in every season.
            From spring wildflowers to winter skiing, Morocco delivers year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-budget-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Plan Your Budget
            </Link>
            <Link
              href="/morocco-first-time-visitor"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
