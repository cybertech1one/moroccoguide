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
  Compass,
  Camera,
  Truck,
  Route,
  Calendar,
  Fuel,
  Wrench,
  Map,
  Shield,
  Backpack,
  Navigation,
  Binoculars,
  Thermometer,
} from 'lucide-react';

/* ================================================================
   CONSTANTS
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco 4x4 & Off-Road Tours Guide 2026 | Desert Expeditions & Mountain Passes',
  description:
    'Complete guide to Morocco 4x4 and off-road tours. Explore Merzouga dunes, Erg Chigaga, Jebel Saghro, Atlas Mountain passes, and Anti-Atlas tracks. Self-drive vs guided tours, vehicle types, pricing from 1,500 MAD/day, multi-day expeditions, and photography tours.',
  keywords: [
    'Morocco 4x4 tours',
    'Morocco off-road tours',
    'desert 4x4 Morocco',
    'Merzouga 4x4 excursion',
    'Erg Chigaga 4x4',
    'Zagora desert tour',
    'Atlas Mountains off-road',
    'Jebel Saghro trek',
    'Draa Valley 4x4',
    'Anti-Atlas off-road',
    'Morocco self-drive 4x4',
    'Morocco guided 4x4 tour',
    'Land Cruiser Morocco',
    'Morocco desert expedition',
    'Morocco overland tour',
    'Morocco photography 4x4 tour',
    'Morocco 4x4 rental',
    'Morocco off-road adventure',
    'Sahara 4x4 tour',
    'Morocco 4x4 prices 2026',
    'Morocco multi-day 4x4',
    'Morocco dune driving',
  ],
  openGraph: {
    title: 'Morocco 4x4 & Off-Road Tours Guide 2026 | Desert Expeditions & Mountain Passes',
    description:
      'Explore Morocco by 4x4: Sahara dunes, Atlas passes, Anti-Atlas tracks, and remote oases. Complete guide with routes, vehicle types, operators, and pricing from 1,500 MAD/day.',
    url: `${BASE_URL}/morocco-4x4-tours`,
    images: [
      {
        url: `${BASE_URL}/images/hero-desert.webp`,
        width: 1200,
        height: 630,
        alt: '4x4 vehicle crossing golden sand dunes in the Moroccan Sahara desert at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 4x4 & Off-Road Tours 2026 | Complete Guide',
    description:
      'Sahara dunes, Atlas passes, and Anti-Atlas tracks by 4x4. Routes, vehicles, pricing, and top operators for your Morocco off-road adventure.',
    images: [`${BASE_URL}/images/hero-desert.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-4x4-tours` },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-4x4-tours`,
  name: 'Morocco 4x4 & Off-Road Tours Guide 2026',
  description:
    'Complete guide to Morocco 4x4 and off-road tours covering Sahara desert expeditions, Atlas Mountain passes, vehicle types, pricing, and top operators.',
  url: `${BASE_URL}/morocco-4x4-tours`,
  image: `${BASE_URL}/images/hero-desert.webp`,
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
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-4x4-tours`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco 4x4 & Off-Road Tours', item: `${BASE_URL}/morocco-4x4-tours` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a 4x4 tour in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Day trips with a driver start from 1,500 MAD per vehicle. Multi-day guided expeditions range from 3,500 MAD to 8,000 MAD per person per day depending on the level of luxury. Self-drive 4x4 rental costs from 800 MAD to 2,500 MAD per day depending on vehicle type.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a 4x4 to visit the Sahara desert in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Merzouga and Erg Chebbi, a standard car can reach the town, but you need a 4x4 for dune excursions. For Erg Chigaga, a 4x4 is mandatory as the last 50km is unpaved desert track. For Zagora, the paved road goes all the way, but desert excursions beyond require 4x4.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I self-drive a 4x4 in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You need a valid international driving permit alongside your home license. Gravel mountain passes and pistes (dirt tracks) are manageable for experienced off-road drivers. Sand dune driving requires advanced skills and should not be attempted without training or a guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best vehicle for off-roading in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Toyota Land Cruiser is the gold standard for Sahara expeditions due to its reliability and parts availability. The Toyota Hilux is popular for lighter trips. Land Rover Defenders are common with tour operators. For self-drive rental, the Dacia Duster 4x4 is a budget-friendly option for gravel roads.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for 4x4 touring in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October to April is ideal. Summer temperatures in the Sahara can exceed 50 degrees Celsius, making desert touring dangerous. Spring (March-April) is excellent for the Atlas Mountains when wildflowers bloom. Autumn (October-November) offers mild desert temperatures and clear skies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a Sahara 4x4 expedition be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minimum of 3 days is recommended for a proper desert experience. The classic Marrakech to Merzouga route takes 3 days one-way. A complete southern loop covering Ait Benhaddou, Todra Gorge, Merzouga, and the Draa Valley takes 5-7 days. Expeditions to Erg Chigaga from Marrakech need at least 4 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is off-roading in Morocco safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With proper preparation, yes. Always carry at least 10 liters of drinking water per person per day, a GPS device, a satellite phone or PLB for remote areas, recovery gear (sand ladders, tow rope), and a first aid kit. Never drive alone in the deep desert. Stick to known routes and inform someone of your itinerary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a 4x4 tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sun protection (hat, sunscreen SPF 50+, sunglasses), layers for cold desert nights, a headlamp, camera with dust protection, sturdy closed-toe shoes, a scarf or buff for sand and dust, and cash in small denominations for remote areas. For self-drive trips, add recovery gear, spare fuel, and a tire repair kit.',
      },
    },
  ],
};

/* ================================================================
   DATA: TOP 4x4 ROUTES
   ================================================================ */

const topRoutes = [
  {
    name: 'Erg Chebbi & Merzouga Circuit',
    region: 'Eastern Sahara',
    duration: '3-5 days from Marrakech',
    difficulty: 'Moderate',
    icon: Sun,
    price: 'From 4,500 MAD per person',
    description:
      'The most popular Sahara 4x4 route in Morocco. Cross the Tizi n\'Tichka pass, stop at Ait Benhaddou, drive through the Dades and Todra Gorges, then reach the towering orange dunes of Erg Chebbi (up to 150m high). The final approach through the hamada (flat desert) to Merzouga is a rite of passage for off-road enthusiasts.',
    highlights: ['150m-high sand dunes', 'Todra Gorge detour', 'Ait Benhaddou kasbah', 'Desert camp under the stars'],
  },
  {
    name: 'Erg Chigaga Expedition',
    region: 'Western Sahara',
    duration: '4-6 days from Marrakech',
    difficulty: 'Challenging',
    icon: Compass,
    price: 'From 6,000 MAD per person',
    description:
      'The wilder, less-visited alternative to Merzouga. Erg Chigaga is Morocco\'s largest dune field, stretching 40km and rising to 300m. The last 50km from M\'hamid is a genuine off-piste expedition across stony desert and dry lake beds. Far fewer tourists and a more raw, authentic Sahara experience.',
    highlights: ['300m dunes, largest in Morocco', 'Remote desert camps', '50km off-piste approach', 'Nomadic Berber encounters'],
  },
  {
    name: 'Jebel Saghro Traverse',
    region: 'Anti-Atlas / Pre-Sahara',
    duration: '3-4 days',
    difficulty: 'Moderate to Challenging',
    icon: Mountain,
    price: 'From 3,500 MAD per person',
    description:
      'A volcanic mountain massif between the High Atlas and the Sahara. Black basalt towers, deep canyons, and lunar landscapes make Jebel Saghro one of Morocco\'s most dramatic off-road destinations. The tracks connecting Boumalne Dades to N\'kob and Agdz cross passes above 2,000m with panoramic views of both the Atlas range and the desert floor.',
    highlights: ['Volcanic basalt formations', 'Nomad camps at altitude', 'Canyon driving', 'Minimal tourist traffic'],
  },
  {
    name: 'Draa Valley & Anti-Atlas Loop',
    region: 'Southern Morocco',
    duration: '5-7 days',
    difficulty: 'Moderate',
    icon: Route,
    price: 'From 5,000 MAD per person',
    description:
      'Follow Morocco\'s longest river through a 200km corridor of palm oases, kasbahs, and fortified villages from Agdz to Zagora and beyond to M\'hamid. Then loop south through the Anti-Atlas via Tata and Akka to discover prehistoric rock carvings, hidden oases, and some of the most isolated tracks in the country.',
    highlights: ['200km palm oasis corridor', 'Prehistoric rock carvings', 'Tata oases circuit', 'Fortified kasbah villages'],
  },
  {
    name: 'High Atlas Mountain Passes',
    region: 'Central Morocco',
    duration: '2-4 days',
    difficulty: 'Moderate',
    icon: Mountain,
    price: 'From 2,500 MAD per person',
    description:
      'The High Atlas has dozens of unpaved passes above 2,500m that connect remote Berber valleys. The Tizi n\'Test and routes around Jebel Toubkal offer dramatic switchbacks, river crossings, and encounters with isolated villages. The landscape shifts from walnut groves and terraced fields to bare rock and snow in winter.',
    highlights: ['Passes above 2,500m', 'River crossings', 'Remote Berber villages', 'Seasonal snow driving'],
  },
  {
    name: 'Atlantic Coast to Desert Crossing',
    region: 'Southwest Morocco',
    duration: '6-8 days',
    difficulty: 'Moderate',
    icon: Navigation,
    price: 'From 5,500 MAD per person',
    description:
      'An epic west-to-east traverse from the Atlantic surf towns of Taghazout or Essaouira, over the Anti-Atlas via the Tizi n\'Test or through Taroudant, across the Draa Valley to Zagora and M\'hamid, finishing with a dune expedition in Erg Chigaga. The full spectrum of Moroccan landscapes in a single trip.',
    highlights: ['Coast to desert in one trip', 'Anti-Atlas crossings', 'Argan forest trails', 'Complete landscape diversity'],
  },
] as const;

/* ================================================================
   DATA: VEHICLE TYPES
   ================================================================ */

const vehicleTypes = [
  {
    name: 'Toyota Land Cruiser (70/200 Series)',
    category: 'Premium Expedition',
    icon: Truck,
    rentalPrice: 'From 2,000 MAD/day',
    guidedPrice: 'Included in premium tours',
    terrain: 'All terrain including deep sand',
    description:
      'The undisputed king of Sahara exploration. Trusted by tour operators, rally teams, and aid organizations across North Africa. The 70 Series is the workhorse; the 200 Series offers luxury comfort. Parts are available in every Moroccan city. If you are doing a serious multi-day desert expedition, this is the vehicle.',
    pros: ['Unmatched reliability', 'Parts everywhere', 'Excellent sand performance', 'High resale value'],
  },
  {
    name: 'Toyota Hilux',
    category: 'Mid-Range Expedition',
    icon: Truck,
    rentalPrice: 'From 1,200 MAD/day',
    guidedPrice: 'Included in most guided tours',
    terrain: 'Gravel, piste, moderate sand',
    description:
      'The most common 4x4 in Morocco. Lighter than the Land Cruiser, it handles pistes (dirt tracks) and gravel roads with ease. The pickup bed is ideal for carrying gear and spare fuel. Not ideal for deep sand dunes without modification, but perfect for Atlas passes and Anti-Atlas tracks.',
    pros: ['Affordable rental', 'Common in Morocco', 'Good for mountain passes', 'Pickup bed for gear'],
  },
  {
    name: 'Land Rover Defender',
    category: 'Classic Expedition',
    icon: Truck,
    rentalPrice: 'From 1,800 MAD/day',
    guidedPrice: 'Used by specialist operators',
    terrain: 'All terrain, strong off-road geometry',
    description:
      'A cult favorite among overland enthusiasts. The classic Defender (pre-2020) has outstanding approach and departure angles and a low-range gearbox built for crawling over rocks. Many Moroccan tour operators run fleets of restored Defenders. The new Defender is increasingly available for rental but at higher rates.',
    pros: ['Iconic overland vehicle', 'Excellent off-road geometry', 'Strong aftermarket support', 'Comfortable for passengers'],
  },
  {
    name: 'Dacia Duster 4x4',
    category: 'Budget Self-Drive',
    icon: Truck,
    rentalPrice: 'From 800 MAD/day',
    guidedPrice: 'N/A (self-drive only)',
    terrain: 'Gravel roads, light pistes',
    description:
      'The budget option for self-drivers who want to explore beyond paved roads. The Duster handles gravel passes and moderate pistes well. It is not a serious off-road vehicle and should not be taken into sand dunes or on challenging rock tracks. Ideal for the Tizi n\'Tichka, Dades Valley, and improved Anti-Atlas roads.',
    pros: ['Most affordable 4x4', 'Widely available for rental', 'Good fuel economy', 'Easy to drive'],
  },
] as const;

/* ================================================================
   DATA: TOUR OPERATORS
   ================================================================ */

const tourOperators = [
  {
    name: 'Wilderness Wheels Morocco',
    specialty: 'Multi-day Sahara expeditions',
    baseCity: 'Marrakech',
    vehicles: 'Land Cruiser 200, Defender',
    priceRange: 'From 6,000 MAD/person/day (all-inclusive)',
    languages: 'English, French, Arabic',
  },
  {
    name: 'Sahara Overland',
    specialty: 'Erg Chigaga deep desert',
    baseCity: 'M\'hamid El Ghizlane',
    vehicles: 'Land Cruiser 70 Series',
    priceRange: 'From 4,500 MAD/person/day',
    languages: 'French, English, Arabic, Spanish',
  },
  {
    name: 'Atlas Off-Road',
    specialty: 'Mountain passes & Jebel Saghro',
    baseCity: 'Ouarzazate',
    vehicles: 'Hilux, Defender',
    priceRange: 'From 3,000 MAD/person/day',
    languages: 'French, English, Arabic',
  },
  {
    name: 'Morocco Photo Expeditions',
    specialty: 'Photography-focused 4x4 tours',
    baseCity: 'Marrakech',
    vehicles: 'Land Cruiser 200',
    priceRange: 'From 8,000 MAD/person/day',
    languages: 'English, French',
  },
  {
    name: 'Nomad Adventure Tours',
    specialty: 'Budget-friendly desert circuits',
    baseCity: 'Errachidia',
    vehicles: 'Hilux, Duster',
    priceRange: 'From 1,500 MAD/vehicle/day',
    languages: 'Arabic, French, English',
  },
  {
    name: 'Dunes & Beyond',
    specialty: 'Luxury camping & 4x4 combos',
    baseCity: 'Merzouga',
    vehicles: 'Land Cruiser, Range Rover',
    priceRange: 'From 7,000 MAD/person/day (luxury camp)',
    languages: 'English, French, Arabic, German',
  },
] as const;

/* DATA: PACKING ESSENTIALS */
const packingEssentials = [
  {
    category: 'Navigation & Safety',
    icon: Navigation,
    items: [
      'GPS device with Morocco off-road maps loaded',
      'Paper maps (Michelin Morocco 742) as backup',
      'Satellite phone or personal locator beacon for remote areas',
      'First aid kit with sunburn and dehydration supplies',
      'Fire extinguisher (required by Moroccan law)',
    ],
  },
  {
    category: 'Vehicle Recovery',
    icon: Wrench,
    items: [
      'Sand ladders (Maxtrax or similar)',
      'Tow rope rated to vehicle weight',
      'Tire deflator and 12V compressor',
      'Spare tire (two for multi-day desert)',
      'Jerry cans for spare fuel (20L minimum)',
    ],
  },
  {
    category: 'Personal Gear',
    icon: Backpack,
    items: [
      'Sun hat and SPF 50+ sunscreen',
      'Dust-proof sunglasses (wrap-around)',
      'Buff or desert scarf (cheche) for sand protection',
      'Warm fleece or down jacket for cold desert nights',
      'Headlamp with spare batteries',
    ],
  },
  {
    category: 'Photography',
    icon: Camera,
    items: [
      'Camera with dust-sealed body if possible',
      'Ziplock bags for lens and gear protection',
      'Lens cleaning kit (blower, brush, cloths)',
      'Extra batteries (cold nights drain batteries fast)',
      'Lightweight tripod for sunrise and starscape shots',
    ],
  },
] as const;

/* DATA: SEASONAL GUIDE */
const seasonalGuide = [
  {
    season: 'Autumn (Oct-Nov)',
    icon: Sun,
    temp: '20-35 C daytime, 10-15 C night',
    rating: 'Excellent',
    description:
      'The prime season for Sahara 4x4 touring. Daytime heat has dropped from summer extremes. Clear skies, golden light, and comfortable camping temperatures. Erg Chebbi and Erg Chigaga at their most photogenic. Book well ahead as this is peak season for desert tours.',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Thermometer,
    temp: '15-25 C daytime, 0-5 C night',
    rating: 'Good (cold nights)',
    description:
      'Desert days are warm and pleasant. Nights can drop near freezing, so proper camping gear is essential. The High Atlas may have snow on passes above 2,500m, adding a dramatic element. Shorter days limit driving hours. Fewer tourists mean better prices and emptier dunes.',
  },
  {
    season: 'Spring (Mar-Apr)',
    icon: Sun,
    temp: '22-32 C daytime, 10-18 C night',
    rating: 'Excellent',
    description:
      'Wildflowers bloom across the Atlas foothills and Anti-Atlas. The Draa Valley palms are vivid green. Temperatures are ideal for both mountain and desert touring. The occasional sandstorm (chergui) can blow in from the Sahara, reducing visibility for a day or two.',
  },
  {
    season: 'Summer (May-Sep)',
    icon: AlertTriangle,
    temp: '40-50 C daytime, 25-35 C night',
    rating: 'Not recommended for desert',
    description:
      'Sahara temperatures regularly exceed 45 degrees and can reach 50. Desert 4x4 touring is dangerous and not recommended. High Atlas passes above 2,000m remain feasible. Mechanical breakdowns in extreme heat can be life-threatening in remote areas. If you must go, travel only in early morning and carry double water supplies.',
  },
] as const;

/* ================================================================
   COMPONENT
   ================================================================ */

export default function Morocco4x4ToursPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco 4x4 &amp; Off-Road Tours</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-desert.webp"
          alt="4x4 vehicle driving through golden sand dunes in Morocco's Sahara desert"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco 4x4 &amp; Off-Road Tours
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-3xl mx-auto">
            From the towering dunes of Erg Chigaga to the high passes of the Atlas Mountains, Morocco is one of the world&apos;s
            great off-road destinations. This guide covers everything you need to plan your 4x4 adventure.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Morocco is an Off-Road Paradise
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
            <p className="text-base leading-relaxed mb-4">
              Morocco sits at the crossroads of the Sahara Desert, the Atlas Mountains, and the Atlantic coast. This
              geographic diversity creates a 4x4 touring landscape that rivals anything in Africa or the Middle East.
              Within a single week, you can cross snow-dusted mountain passes at 2,700m, navigate volcanic canyons in
              Jebel Saghro, drive through 200km of palm oases along the Draa River, and camp in the shadow of 300m-high
              sand dunes at Erg Chigaga.
            </p>
            <p className="text-base leading-relaxed mb-4">
              The country has a long-established overland infrastructure. Thousands of kilometers of pistes (unpaved
              tracks) connect remote villages, former Foreign Legion outposts, and ancient caravan routes. Fuel stations
              appear in surprisingly remote towns. Mechanical workshops staffed by resourceful mechanics can fix almost
              anything. And a network of experienced tour operators runs everything from budget day trips to luxury
              multi-week expeditions.
            </p>
            <p className="text-base leading-relaxed">
              Morocco also benefits from proximity to Europe. You can ship your own vehicle via ferry from Spain in under
              an hour (Tarifa to Tangier), or rent a 4x4 in Marrakech and be on dirt tracks within two hours. No other
              Saharan country offers this combination of accessibility, safety, infrastructure, and raw off-road terrain.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 4x4 Routes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six classic off-road itineraries ranging from weekend mountain crossings to full-week desert expeditions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <RouteIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                          {route.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3 text-[var(--color-accent)]" />
                          {route.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{route.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{route.price}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {route.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0" />
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

      {/* ── Self-Drive vs Guided ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Self-Drive vs Guided Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both approaches have distinct advantages. Your choice depends on experience, budget, and how deep into the desert you want to go.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Compass className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Self-Drive
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Rent a 4x4 in Marrakech, Ouarzazate, or Errachidia and explore at your own pace. Best for experienced
                off-road drivers who want flexibility. You control the schedule, stops, and detours. Requires an
                international driving permit and confidence on unpaved mountain passes.
              </p>
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Advantages</h4>
              <ul className="space-y-2 mb-4">
                {[
                  'Complete freedom of schedule and route',
                  'Lower daily cost (from 800 MAD/day for a Duster)',
                  'Stop anywhere for photography or exploration',
                  'Camp wild in remote locations',
                  'Combine off-road with city sightseeing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Limitations</h4>
              <ul className="space-y-2">
                {[
                  'Sand dune driving requires advanced skills',
                  'Recovery is your responsibility if stuck',
                  'Navigation in unmarked desert can be disorienting',
                  'Rental insurance rarely covers off-road damage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Shield className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Guided Tour
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                A professional driver-guide handles all navigation and driving while you focus on the experience. Essential
                for Erg Chigaga and deep desert routes. Guides know the terrain, speak local Berber dialects, and can
                access places a self-driver would never find.
              </p>
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Advantages</h4>
              <ul className="space-y-2 mb-4">
                {[
                  'Expert navigation through unmarked desert',
                  'Local knowledge of hidden sites and camps',
                  'Vehicle recovery and mechanical support included',
                  'Cultural interpretation and Berber introductions',
                  'All logistics handled (fuel, food, camps)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Limitations</h4>
              <ul className="space-y-2">
                {[
                  'Higher cost (from 3,000 MAD/person/day)',
                  'Fixed itinerary with less spontaneity',
                  'Group tours may not match your pace',
                  'Quality varies between operators',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vehicle Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vehicle Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choosing the right vehicle matters. Here are the four most common 4x4 options for Morocco off-roading.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleTypes.map((vehicle) => {
              const VehicleIcon = vehicle.icon;
              return (
                <div key={vehicle.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <VehicleIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {vehicle.name}
                      </h3>
                      <span className="text-xs text-[var(--color-gold)] font-semibold">{vehicle.category}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="text-[var(--text-muted)] block mb-1">Self-Drive Rental</span>
                      <span className="text-[var(--color-accent)] font-semibold">{vehicle.rentalPrice}</span>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="text-[var(--text-muted)] block mb-1">Terrain Rating</span>
                      <span className="text-[var(--text-primary)] font-semibold">{vehicle.terrain}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.pros.map((pro) => (
                      <span
                        key={pro}
                        className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-800 px-2 py-1 rounded-full"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {pro}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tours by 4x4
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s landscapes are a photographer&apos;s dream. Specialist 4x4 photography tours are designed
            around golden hour timing, dramatic viewpoints, and access to locations impossible to reach by standard vehicle.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Sahara Dune Photography
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                The dunes of Erg Chebbi and Erg Chigaga produce some of the most dramatic light in North Africa.
                Photography-focused tours position you on dune ridges before sunrise, when the low-angle light sculpts
                each ripple into deep shadow and warm highlight. Guides know which dunes face east for morning shots
                and which catch the final golden light at sunset. Multi-day photo tours camp at the base of the dunes
                for pre-dawn access.
              </p>
              <span className="text-sm text-[var(--color-accent)] font-semibold">From 8,000 MAD per person for 3 days</span>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Kasbah &amp; Valley Circuits
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                The thousand kasbahs of the Draa and Dades Valleys are extraordinary subjects. Crumbling rammed-earth
                towers against blue sky, palm oases reflected in irrigation channels, and the interplay of ancient
                architecture with mountain backdrops. 4x4 access allows you to reach abandoned kasbahs that most tourists
                never see. The best light falls on south-facing kasbahs in the late afternoon.
              </p>
              <span className="text-sm text-[var(--color-accent)] font-semibold">From 6,000 MAD per person for 4 days</span>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Night Sky &amp; Astro Photography
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                The Sahara has some of the darkest skies on Earth. Desert camps far from any settlement offer Bortle
                Class 1-2 conditions, where the Milky Way casts visible shadows on the sand. 4x4 photo tours drive to
                locations selected for foreground interest: solitary acacia trees, rock formations, or kasbah ruins
                silhouetted against the galactic core. Guides carry portable power stations for charging camera batteries
                and laptops for on-location editing.
              </p>
              <span className="text-sm text-[var(--color-accent)] font-semibold">From 7,000 MAD per person for 3 nights</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tour Operators ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Recommended Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These operators have established track records, maintained vehicle fleets, and experienced desert guides.
            Seasonal pricing can change; confirm rates before booking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourOperators.map((op) => (
              <div key={op.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {op.name}
                </h3>
                <p className="text-xs text-[var(--color-gold)] font-semibold mb-3">{op.specialty}</p>
                <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                    <span>Based in {op.baseCity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                    <span>{op.vehicles}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                    <span>{op.priceRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-[var(--color-accent)] shrink-0" />
                    <span>{op.languages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for 4x4 Touring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is critical for desert travel. The difference between a memorable trip and a dangerous one can be a single month.
          </p>

          <div className="space-y-6">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {season.season}
                        </h3>
                        <span className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full">
                          {season.temp}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-accent)]">{season.rating}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{season.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for a 4x4 Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Preparation separates a good off-road trip from a miserable one. These are the essentials organized by category.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packingEssentials.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {cat.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
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

      {/* ── Pricing Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pricing Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Costs vary significantly based on vehicle, guide quality, accommodation, and season. Seasonal pricing can change.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Self-Drive 4x4 Rental (Dacia Duster)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Budget option for gravel roads and light pistes</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 800 MAD/day</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Self-Drive 4x4 Rental (Land Cruiser)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Full capability for desert and mountain terrain</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 2,000 MAD/day</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Guided Day Trip (driver + vehicle)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Local excursion from Merzouga or M&apos;hamid</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 1,500 MAD/vehicle</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Multi-Day Guided Tour (standard)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">3-5 day circuit with basic desert camp</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 3,500 MAD/person/day</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Multi-Day Guided Tour (luxury)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Premium vehicle, luxury desert camp, gourmet meals</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 7,000 MAD/person/day</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Photography-Focused 4x4 Tour
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Small group, sunrise/sunset timing, expert photo guide</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 8,000 MAD/person/day</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Fuel Costs (diesel)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">Self-drive budget: 15-25L per 100km on pistes</p>
                </div>
                <span className="text-sm font-semibold text-[var(--color-accent)]">From 12 MAD/liter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is unforgiving. These rules are non-negotiable for anyone heading into remote off-road terrain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Fuel className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Water &amp; Fuel
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry a minimum of 10 liters of drinking water per person per day. In summer, double that. Fill fuel
                tanks at every opportunity. Carry at least one 20L jerry can of spare diesel. The distance between fuel
                stations in the deep south can exceed 200km.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Navigation className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Never Drive Alone
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In the deep desert, always travel in a convoy of at least two vehicles. A single vehicle breakdown
                with no backup in the Sahara can become a survival situation within hours. If self-driving solo, stay
                on main pistes and carry a satellite communication device.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Share Your Itinerary
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Before entering remote areas, tell someone your planned route and expected return date. Register with
                the local gendarmerie (police station) in border towns like M&apos;hamid, Merzouga, or Tata. They maintain
                records and will initiate search procedures if you do not return on schedule.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Binoculars className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Military &amp; Border Zones
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The area south and east of M&apos;hamid towards the Algerian border is militarily sensitive. Do not
                deviate from established routes in this zone. Military checkpoints are common and soldiers will check
                your documents. Carry your passport at all times. Photography of military installations is prohibited.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Heat Management
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In hot months, drive in early morning and late afternoon. Rest in shade during midday hours (12-3 PM).
                Keep vehicle windows cracked to prevent heat buildup. If the vehicle overheats, stop immediately, open
                the hood, and let the engine cool before adding coolant. Carry oral rehydration salts.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wrench className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Vehicle Checks
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Before any off-road trip, check tire condition (including spare), all fluid levels, battery terminals,
                air filter (critical in dusty conditions), and belt tension. Carry basic tools, a tire plug kit, and
                a 12V compressor. Lower tire pressure to 1.2-1.5 bar for sand driving, reinflate for tarmac.
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
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/desert" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s Sahara desert including camel treks, desert camps, and stargazing.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-road-trip" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Route className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Road Trip Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Plan the ultimate Moroccan road trip with routes, distances, driving tips, and road conditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-camping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Camping in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Wild camping spots, established campgrounds, gear advice, and regulations for camping across Morocco.
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
