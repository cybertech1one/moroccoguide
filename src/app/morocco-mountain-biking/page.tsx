import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Bike,
  Star,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Thermometer,
  TrendingUp,
  Shield,
  Mountain,
  Route,
  Wrench,
  Info,
  DollarSign,
  Users,
  Compass,
  Wind,
  Sun,
  Gauge,
  Heart,
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
  title: 'Morocco Mountain Biking Guide 2026 | Atlas Trails, Desert Fatbiking & Coastal Routes',
  description:
    'Complete guide to mountain biking in Morocco. 12+ trails across the Atlas Mountains, Dades Valley, Erg Chebbi dunes, and Essaouira coast. Bike rental from 350 MAD/day, guided tours from 1,200 MAD. Difficulty ratings, mechanical support, and seasonal advice.',
  keywords: [
    'Morocco mountain biking',
    'Atlas Mountains MTB trails',
    'mountain biking Morocco guide',
    'Amizmiz mountain biking',
    'Ouirgane MTB trails',
    'Imlil to Toubkal biking',
    'Dades Valley cycling',
    'Erg Chebbi fatbiking',
    'Essaouira coastal biking',
    'Morocco bike rental',
    'Morocco MTB guided tours',
    'Morocco single track trails',
    'desert mountain biking Morocco',
    'Atlas Mountains cycling routes',
    'Morocco adventure cycling 2026',
    'Morocco fatbike desert',
    'Morocco bike tour operators',
    'mountain bike hire Marrakech',
    'Anti-Atlas biking',
    'Jbel Saghro MTB',
  ],
  openGraph: {
    title: 'Morocco Mountain Biking Guide 2026 | Atlas Trails, Desert Fatbiking & Coastal Routes',
    description:
      'Ride world-class mountain bike trails through Morocco. From high Atlas single-track to Sahara fatbiking and Atlantic coastal routes. Bike rental from 350 MAD/day, guided tours from 1,200 MAD.',
    url: `${BASE_URL}/morocco-mountain-biking`,
    images: [
      {
        url: `${BASE_URL}/images/hero-mountain-biking.webp`,
        width: 1200,
        height: 630,
        alt: 'Mountain biker riding a trail through the Atlas Mountains with dramatic Moroccan landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Mountain Biking Guide 2026 | Atlas, Desert & Coast',
    description:
      'Complete mountain biking guide for Morocco. 12+ trails, difficulty ratings, bike rental info, guided tour options, and mechanical support across the Atlas, Sahara, and Atlantic coast.',
    images: [`${BASE_URL}/images/hero-mountain-biking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-mountain-biking` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-mountain-biking`,
  name: 'Morocco Mountain Biking Guide 2026 | Atlas Trails, Desert Fatbiking & Coastal Routes',
  description:
    'Complete guide to mountain biking in Morocco covering Atlas Mountains trails, desert single-track, coastal routes, bike rental, guided tours, difficulty ratings, and mechanical support.',
  url: `${BASE_URL}/morocco-mountain-biking`,
  image: `${BASE_URL}/images/hero-mountain-biking.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-mountain-biking`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Mountain Biking Guide', item: `${BASE_URL}/morocco-mountain-biking` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best season for mountain biking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months are March to May and September to November. Summer (June-August) is too hot for lower elevations but rideable above 2,000m in the High Atlas. Winter riding is possible in the Anti-Atlas and coastal areas, though snow blocks high passes from December to February.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rent a quality mountain bike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Marrakech has several reputable rental shops offering hardtail and full-suspension bikes from 350 MAD/day. For serious multi-day rides, operators provide Trek, Specialized, or Scott bikes. Bringing your own bike is recommended for advanced riders who want their exact setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for mountain biking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For established routes near Marrakech (Amizmiz, Ouirgane), experienced riders can self-navigate with GPS tracks. For remote areas like Jbel Saghro, the Dades Gorge backcountry, or desert riding at Erg Chebbi, a local guide is strongly recommended due to unmarked trails and limited phone signal.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a guided mountain bike tour cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Day trips with a guide, lunch, and transport start from 1,200 MAD per person. Multi-day supported tours (3-7 days) with accommodation, meals, vehicle support, and guide range from 6,500 MAD to 18,000 MAD per person depending on duration and comfort level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What fitness level do I need for mountain biking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers trails for all levels. The Palmeraie loop near Marrakech suits beginners. Intermediate riders can handle Amizmiz and Ouirgane circuits. Advanced riders will find technical challenge on Imlil-to-Toubkal base camp trails and Jbel Saghro single-track. Altitude (1,500-3,200m) adds difficulty regardless of trail grade.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to mountain bike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for mountain biking. The main risks are heat exposure, dehydration, and mechanical breakdowns in remote areas. Carry at least 3 liters of water, a basic repair kit, and a charged phone with offline maps. Traffic on road sections can be aggressive, so stick to trails where possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do fatbiking in the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Erg Chebbi near Merzouga is the main destination for desert fatbiking. Specialized operators provide fat-tire bikes (4-inch+ tires) designed for sand. Rides range from 2-hour sunset sessions (from 450 MAD) to full-day dune-to-oasis expeditions (from 1,400 MAD). Best conditions are October to April.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I bring my own bike or rent in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rental bikes have improved significantly, and shops in Marrakech now stock mid-to-high-end hardtails and some full-suspension models. For trips under a week, renting is practical. For multi-week trips or riders with specific bike fit requirements, bringing your own is worthwhile. Airlines charge from 500-1,500 MAD each way for bike boxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get a bike repaired in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Moroccan town has at least one bike mechanic (veloman), though most specialize in city bikes. For MTB-specific repairs, Marrakech and Ouarzazate have shops familiar with disc brakes, suspension, and tubeless setups. Carry spare tubes, a chain tool, and brake pads for remote rides.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAIL ROUTES
   ═══════════════════════════════════════════════════════════════ */

const trailRoutes = [
  {
    name: 'Amizmiz Loop',
    region: 'Western High Atlas',
    icon: Mountain,
    difficulty: 'Intermediate',
    distance: '35 km',
    elevation: '950m gain',
    duration: '4-5 hours',
    description:
      'The go-to day ride from Marrakech. Starting from the market town of Amizmiz (55 km south of Marrakech), the loop winds through Berber villages, olive groves, and rocky single-track with constant views of the snow-capped High Atlas. The climb out of Amizmiz is steady but not brutal, and the descent through Anougal valley rewards with fast, flowing trails on packed red dirt.',
    highlights: ['Berber village pass-throughs', 'Olive grove single-track', 'Panoramic Atlas views', 'Fast red-dirt descents'],
    bestSeason: 'September to May',
    access: 'Taxi from Marrakech (from 250 MAD one way) or tour operator shuttle',
  },
  {
    name: 'Ouirgane Valley Circuit',
    region: 'High Atlas Foothills',
    icon: Route,
    difficulty: 'Intermediate',
    distance: '28 km',
    elevation: '700m gain',
    duration: '3-4 hours',
    description:
      'A classic half-day ride through the lush Ouirgane Valley, 60 km south of Marrakech on the Tizi n\'Test road. The circuit combines paved road, forest fire tracks, and single-track through oak and juniper forest. The valley sits at 1,000m elevation, making it cooler than Marrakech even in summer. Several guesthouses in Ouirgane offer bike storage and post-ride meals.',
    highlights: ['Forest fire-track riding', 'Oak and juniper woodland', 'Cooler altitude climate', 'Guesthouse lunch stops'],
    bestSeason: 'Year-round (best March-November)',
    access: 'Drive or shared taxi via N8/Tizi n\'Test road',
  },
  {
    name: 'Imlil to Toubkal Base Camp',
    region: 'High Atlas — Toubkal Massif',
    icon: TrendingUp,
    difficulty: 'Advanced',
    distance: '24 km round trip',
    elevation: '1,500m gain',
    duration: '6-8 hours',
    description:
      'A punishing but spectacular out-and-back from Imlil (1,740m) to the Toubkal refuge at Neltner (3,200m). The first section follows mule tracks through walnut terraces above Imlil, then transitions to rocky switchbacks as you gain altitude. Above 2,500m, the trail becomes increasingly technical with loose scree and boulder sections. Most riders push or carry for the final 2 km. The descent is raw and demanding — full suspension and body armor recommended.',
    highlights: ['Highest rideable trail in North Africa', 'Mule-track switchbacks', 'Alpine scree riding', 'Views of Jbel Toubkal (4,167m)'],
    bestSeason: 'June to October (snow-free)',
    access: 'Grand taxi from Marrakech to Imlil (from 200 MAD)',
  },
  {
    name: 'Dades Valley — Gorge to Roses',
    region: 'Central High Atlas',
    icon: Compass,
    difficulty: 'Intermediate to Advanced',
    distance: '55 km one way',
    elevation: '600m net descent',
    duration: '5-7 hours',
    description:
      'A point-to-point ride from the upper Dades Gorge down through the valley to the rose-growing town of El Kelaa M\'Gouna. Starting at the famous hairpin bends of the gorge road (1,700m), you descend through dramatic canyon walls before the valley opens into agricultural terraces. The trail alternates between piste (unpaved road), single-track along irrigation channels, and short paved sections through villages. Best ridden with vehicle support to handle the logistics.',
    highlights: ['Dades Gorge hairpin descent', 'Canyon-wall riding', 'Rose valley in spring bloom', 'Berber village hospitality'],
    bestSeason: 'March to May (rose season), September to November',
    access: 'Vehicle transfer from Ouarzazate or Tinghir',
  },
  {
    name: 'Jbel Saghro Traverse',
    region: 'Anti-Atlas',
    icon: Mountain,
    difficulty: 'Advanced',
    distance: '85 km over 3 days',
    elevation: '3,200m total gain',
    duration: '3-day itinerary',
    description:
      'The Jbel Saghro massif between the High Atlas and the Sahara is one of Morocco\'s premier multi-day MTB destinations. The terrain is volcanic — black basalt towers, red-earth valleys, and hidden oases. The three-day traverse from Nkob to Boumalne Dades crosses the Tizi n\'Tazazert pass (2,283m) and follows ancient nomadic routes. Nights are spent wild camping or in nomad tents. A local guide is essential, as trails are unmarked and water sources scarce.',
    highlights: ['Volcanic basalt landscape', 'Nomadic camp overnight stays', 'Tizi n\'Tazazert pass crossing', 'Zero tourist infrastructure'],
    bestSeason: 'October to April (too hot May-September)',
    access: 'Transfer from Ouarzazate to Nkob starting point',
  },
  {
    name: 'Erg Chebbi Fatbiking',
    region: 'Sahara — Merzouga',
    icon: Sun,
    difficulty: 'Beginner to Intermediate',
    distance: '15-40 km (varies by tour)',
    elevation: 'Minimal (dune undulation)',
    duration: '2-6 hours',
    description:
      'Riding fat-tire bikes across the dunes of Erg Chebbi is a singular experience. Operators in Merzouga provide specialized bikes with 4.8-inch tires at low pressure (5-8 PSI) that float over packed sand. Morning rides follow the hard-packed reg (gravel desert) between dune fields, while sunset sessions tackle the dunes themselves. Full-day rides reach remote Gnawa villages and seasonal lakes (dayet). The physical effort is real — sand riding demands twice the energy of trail riding.',
    highlights: ['Sahara dune riding', 'Sunrise and sunset sessions', 'Gnawa village visits', 'Desert oasis stops'],
    bestSeason: 'October to April (summer heat is extreme)',
    access: 'Operators based in Merzouga and Hassilabied',
  },
  {
    name: 'Essaouira Coastal Trail',
    region: 'Atlantic Coast',
    icon: Wind,
    difficulty: 'Beginner to Intermediate',
    distance: '30 km out and back',
    elevation: '150m gain',
    duration: '2.5-4 hours',
    description:
      'A mellow coastal ride south from Essaouira along the Atlantic shore. The route follows a mix of hard-packed beach, sandy cliff-top tracks, and goat trails through argan groves. The turnaround point at Sidi Kaouki (a surf village) makes a natural lunch stop. Wind is a factor — ride south in the morning (tailwind) and return in the afternoon, or accept that the headwind back will double your effort. Best done at low tide when the beach sections are firm.',
    highlights: ['Atlantic beach riding', 'Argan grove trails', 'Sidi Kaouki surf village', 'Coastal cliff scenery'],
    bestSeason: 'Year-round (less wind September-November)',
    access: 'Start from Essaouira medina or Diabat village',
  },
  {
    name: 'Tizi n\'Test Pass Descent',
    region: 'High Atlas — Western',
    icon: TrendingUp,
    difficulty: 'Advanced',
    distance: '45 km descent',
    elevation: '1,800m net descent',
    duration: '4-5 hours',
    description:
      'One of Morocco\'s great gravity rides. The Tizi n\'Test pass (2,092m) connects Marrakech to the Souss Valley and Taroudant. Starting from the pass summit, the ride descends through hairpins and cliff-edge piste for 45 km to the valley floor. The first 15 km are on deteriorating tarmac with sharp switchbacks. At Tin Mal, you pass the ruined 12th-century Almohad mosque before the route transitions to gravel and single-track through almond orchards. Vehicle support required for the shuttle to the top.',
    highlights: ['2,000m altitude descent', 'Tin Mal mosque ruins', 'Cliff-edge switchbacks', 'Almond orchard trails'],
    bestSeason: 'April to November (pass closed in winter snow)',
    access: 'Vehicle shuttle to Tizi n\'Test summit from Marrakech or Taroudant',
  },
  {
    name: 'Palmeraie Circuit — Marrakech',
    region: 'Marrakech Outskirts',
    icon: Bike,
    difficulty: 'Beginner',
    distance: '18 km',
    elevation: '80m gain',
    duration: '1.5-2.5 hours',
    description:
      'The perfect introduction to off-road riding in Morocco. The Palmeraie (palm grove) north of Marrakech offers flat to gently rolling terrain on sandy tracks between palm trees. Several operators run guided sunrise and sunset rides through the grove, passing Berber farmsteads and irrigation channels. The terrain is non-technical but the sandy surface teaches bike handling skills useful for harder Moroccan trails. Available as a half-day add-on to most Marrakech MTB packages.',
    highlights: ['Flat beginner-friendly terrain', 'Palm grove scenery', 'Sunrise and sunset rides', 'Close to Marrakech hotels'],
    bestSeason: 'Year-round (avoid midday summer heat)',
    access: 'Pickup from Marrakech hotels included with most operators',
  },
  {
    name: 'Anti-Atlas — Tafraoute to Ait Mansour',
    region: 'Anti-Atlas',
    icon: Compass,
    difficulty: 'Intermediate to Advanced',
    distance: '42 km loop',
    elevation: '1,100m gain',
    duration: '5-6 hours',
    description:
      'The granite landscape around Tafraoute in the Anti-Atlas is otherworldly — massive pink and orange boulders, painted rocks (by Belgian artist Jean Verame), and dramatic gorges. The loop from Tafraoute drops into the Ait Mansour gorge via a steep piste descent, follows the palmery along the gorge floor, then climbs back to Tafraoute via the Ameln Valley. The gorge floor section is technical with river crossings (seasonal). Winter and spring are ideal — the almond trees bloom in February.',
    highlights: ['Painted Rocks landmark', 'Ait Mansour gorge descent', 'Almond blossom (February)', 'Pink granite boulder fields'],
    bestSeason: 'November to April (summer too hot)',
    access: 'Drive from Agadir (3 hours) or Tiznit (1.5 hours)',
  },
  {
    name: 'Todra Gorge to Tinghir Loop',
    region: 'Eastern High Atlas',
    icon: Route,
    difficulty: 'Intermediate',
    distance: '32 km',
    elevation: '550m gain',
    duration: '3-5 hours',
    description:
      'Starting from the dramatic 300-meter walls of Todra Gorge, this loop climbs the eastern rim via a piste before traversing high plateau with views across the Tafilalet oasis system. The descent back to Tinghir follows irrigation canal paths (seguias) through date palm groves. The gorge itself is too narrow and trafficked for safe riding, so the route bypasses it via the rim trail. A mechanical breakdown here is manageable — Tinghir has competent bike mechanics.',
    highlights: ['Todra Gorge rim views', 'High plateau traverse', 'Date palm irrigation trails', 'Accessible from Tinghir town'],
    bestSeason: 'October to May',
    access: 'Taxi from Tinghir to gorge mouth (from 50 MAD)',
  },
  {
    name: 'Marrakech to Ouarzazate — Tizi n\'Tichka',
    region: 'High Atlas — Central',
    icon: TrendingUp,
    difficulty: 'Advanced (multi-day)',
    distance: '200 km over 2-3 days',
    elevation: '4,500m total gain',
    duration: '2-3 day itinerary',
    description:
      'The classic trans-Atlas crossing for mountain bikers. Rather than riding the busy N9 highway over Tizi n\'Tichka pass (2,260m), the MTB route uses parallel pistes and mule tracks that run east of the main road. Day one climbs from Marrakech foothills to a guesthouse at Telouet (1,800m) via the old Glaoui road. Day two crosses remote passes to reach Ait Benhaddou. Day three is the descent to Ouarzazate. Vehicle support carries luggage and provides mechanical backup. This is the route that put Morocco on the international MTB touring map.',
    highlights: ['Trans-Atlas crossing', 'Telouet Kasbah overnight', 'Ait Benhaddou UNESCO site', 'Historic Glaoui trade route'],
    bestSeason: 'April to June, September to November',
    access: 'Guided tours depart from Marrakech with vehicle support',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BIKE RENTAL OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const rentalOptions = [
  {
    category: 'Basic Hardtail',
    price: 'From 350 MAD/day',
    specs: 'Aluminum frame, mechanical disc brakes, 100mm fork, 27.5" wheels',
    bestFor: 'Palmeraie, Essaouira coastal, flat-to-moderate terrain',
  },
  {
    category: 'Mid-Range Hardtail',
    price: 'From 550 MAD/day',
    specs: 'Aluminum/carbon frame, hydraulic disc brakes, 120mm air fork, tubeless-ready',
    bestFor: 'Amizmiz, Ouirgane, Todra, day rides with moderate climbing',
  },
  {
    category: 'Full-Suspension Trail',
    price: 'From 850 MAD/day',
    specs: '130-150mm travel, dropper post, hydraulic brakes, tubeless',
    bestFor: 'Imlil-Toubkal, Tizi n\'Test descent, Jbel Saghro, technical terrain',
  },
  {
    category: 'Fat Bike (Desert)',
    price: 'From 450 MAD/session',
    specs: '4.0-4.8" tires, rigid fork, wide rims, low gearing',
    bestFor: 'Erg Chebbi dunes, desert reg, sandy coastal sections',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR OPERATORS
   ═══════════════════════════════════════════════════════════════ */

const tourOperators = [
  {
    name: 'Day Ride with Guide',
    duration: '1 day',
    price: 'From 1,200 MAD/person',
    includes: 'Guide, bike, helmet, lunch, transport from Marrakech',
    routes: 'Amizmiz, Ouirgane, Palmeraie, or Essaouira coast',
  },
  {
    name: 'Weekend Explorer',
    duration: '2 days / 1 night',
    price: 'From 3,500 MAD/person',
    includes: 'Guide, bike, accommodation, meals, vehicle support',
    routes: 'Ouirgane + Amizmiz or Dades Valley',
  },
  {
    name: 'Trans-Atlas Crossing',
    duration: '3-4 days',
    price: 'From 6,500 MAD/person',
    includes: 'Guide, bike, hotels/guesthouses, all meals, luggage transfer',
    routes: 'Marrakech to Ouarzazate via Telouet and Ait Benhaddou',
  },
  {
    name: 'Grand Tour — Atlas & Desert',
    duration: '7 days',
    price: 'From 18,000 MAD/person',
    includes: 'Expert guide, premium bike, all logistics, accommodation, meals',
    routes: 'Marrakech — Atlas — Dades — Todra — Merzouga — Ouarzazate',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL GEAR
   ═══════════════════════════════════════════════════════════════ */

const essentialGear = [
  { item: 'Helmet', note: 'Non-negotiable. Rental shops provide basic helmets; bring your own for a proper fit.', icon: Shield },
  { item: 'Hydration Pack (3L+)', note: 'Water sources are scarce outside villages. Carry minimum 3 liters in summer.', icon: Heart },
  { item: 'Tire Repair Kit', note: 'Spare tube, tire levers, mini pump. Thorns from argan and acacia trees cause frequent punctures.', icon: Wrench },
  { item: 'Chain Tool & Quick Links', note: 'Rocky terrain eats chains. Carry a chain breaker and 2 quick links for your chain type.', icon: Wrench },
  { item: 'Sun Protection', note: 'SPF 50, arm sleeves, and a buff. Atlas UV exposure above 2,000m is intense.', icon: Sun },
  { item: 'Offline GPS/Maps', note: 'Download tracks to a GPS unit or phone app. Cell service disappears outside towns.', icon: Compass },
  { item: 'First Aid Kit', note: 'Antiseptic, bandages, blister treatment, electrolyte sachets. Remote rides mean slow evacuations.', icon: Shield },
  { item: 'Brake Pads (spare set)', note: 'Dusty conditions and long descents chew through pads fast. Carry a spare set.', icon: Gauge },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMountainBikingPage() {
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

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-mountain-biking.webp"
          alt="Mountain biker riding a trail through Morocco's Atlas Mountains with red-earth terrain and dramatic peaks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 drop-shadow-lg">
            Morocco Mountain Biking Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-[family-name:var(--font-heading)]">
            Atlas single-track, Sahara fatbiking, and Atlantic coastal trails — Morocco offers some of the most
            varied mountain biking terrain on the planet.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-base)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Mountain Biking Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <Bike className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Morocco for Mountain Biking
            </h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco has quietly built a reputation as one of the top mountain biking destinations outside Europe
              and North America. The draw is simple: an extraordinary range of terrain packed into a compact
              geography. Within a single week, you can ride high-altitude single-track above 3,000 meters in the
              Atlas Mountains, fat-bike across Saharan dunes at Erg Chebbi, and cruise coastal trails along the
              Atlantic at Essaouira.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              The infrastructure for mountain biking has matured significantly. Marrakech now has professional bike
              shops offering rental fleets of current-model hardtails and full-suspension bikes. Guided tour
              operators run trips ranging from half-day Palmeraie spins to week-long trans-Atlas expeditions with
              vehicle support. And the riding season is long — October through May delivers rideable conditions
              across most of the country, with high-altitude Atlas trails opening from June to October when
              lower elevations become too hot.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              What sets Morocco apart from other African MTB destinations is accessibility. Marrakech is a 3-hour
              flight from most European capitals. The cost of guided tours, accommodation, and food is a fraction of
              comparable experiences in the Alps or North America. And the cultural dimension — riding through
              Berber villages, sharing mint tea with farmers, sleeping in mountain guesthouses — adds a layer that
              pure bike-park destinations cannot match.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="card-moroccan p-4 text-center">
              <Route className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">12+</p>
              <p className="text-xs text-[var(--text-muted)]">Major Trail Routes</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Mountain className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">4,167m</p>
              <p className="text-xs text-[var(--text-muted)]">Highest Peak (Toubkal)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Calendar className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">8+ months</p>
              <p className="text-xs text-[var(--text-muted)]">Rideable Season</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">350 MAD</p>
              <p className="text-xs text-[var(--text-muted)]">Bike Rental/Day (from)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trail Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            12 Best Mountain Biking Routes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From beginner-friendly palm grove loops to multi-day trans-Atlas traverses. Each route includes
            distance, elevation, difficulty, and seasonal access.
          </p>

          <div className="space-y-8">
            {trailRoutes.map((trail, index) => {
              const TrailIcon = trail.icon;
              const difficultyColor =
                trail.difficulty === 'Beginner'
                  ? 'text-green-600 bg-green-50'
                  : trail.difficulty === 'Beginner to Intermediate'
                    ? 'text-green-700 bg-green-50'
                    : trail.difficulty === 'Intermediate'
                      ? 'text-yellow-700 bg-yellow-50'
                      : trail.difficulty === 'Intermediate to Advanced'
                        ? 'text-orange-700 bg-orange-50'
                        : 'text-red-700 bg-red-50';
              return (
                <div key={trail.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--surface-muted)]">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          <TrailIcon className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                          {trail.name}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor}`}>
                          {trail.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-accent)] font-semibold mb-3">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {trail.region}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {trail.description}
                      </p>

                      {/* Trail Stats */}
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Route className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {trail.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {trail.elevation}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {trail.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {trail.bestSeason}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {trail.highlights.map((h) => (
                          <span key={h} className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--surface-muted)] rounded text-xs text-[var(--text-secondary)]">
                            <Star className="w-3 h-3 text-[var(--color-gold)]" />
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Access */}
                      <p className="text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                        <strong>Access:</strong> {trail.access}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Difficulty Rating Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gauge className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Trail Difficulty Ratings Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan trails are not graded with a standardized system. Here is how we classify the routes in this guide.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5 border-l-4 border-green-500">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Beginner
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Flat to gently rolling terrain on wide tracks or packed surfaces. No technical obstacles. Suitable
                for riders with basic fitness and bike-handling skills. Examples: Palmeraie Circuit, gentle Essaouira sections.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-yellow-500">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Intermediate
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Sustained climbs of 500-1,000m. Mix of piste, single-track, and loose surfaces. Some rocky sections
                and route-finding required. Riders should be comfortable on varied terrain and have solid cardio
                fitness. Examples: Amizmiz Loop, Ouirgane Circuit, Todra to Tinghir.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-orange-500">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Intermediate to Advanced
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Long days (5-7 hours saddle time). Technical descents with loose rock, exposure, and steep gradients.
                High-altitude riding above 1,500m. Route-finding skills or a GPS essential. Examples: Dades Valley, Anti-Atlas Tafraoute loop.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-red-500">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Advanced
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Extreme elevation gain (1,500m+), highly technical terrain, remote areas with no bail-out options.
                Riders should have multi-day bikepacking experience and be self-sufficient mechanically. Full-suspension
                bike recommended. Examples: Imlil-Toubkal, Tizi n&apos;Test descent, Jbel Saghro traverse, Trans-Atlas crossing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bike Rental ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wrench className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bike Rental in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Marrakech is the hub for quality mountain bike rental. Prices are per day and typically decrease
            for multi-day bookings. Seasonal pricing can change.
          </p>

          <div className="space-y-4">
            {rentalOptions.map((option) => (
              <div key={option.category} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {option.category}
                  </h3>
                  <span className="text-[var(--color-accent)] font-bold text-sm">{option.price}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  <Wrench className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                  <strong>Specs:</strong> {option.specs}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 inline mr-1 text-green-600" />
                  <strong>Best for:</strong> {option.bestFor}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Rental Tips
            </h3>
            <ul className="text-xs text-[var(--text-secondary)] space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                Test the bike thoroughly before leaving the shop. Check brakes, shifting, tire pressure, and saddle height.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                Ask about the damage policy upfront. Reputable shops offer a fair-wear clause for flats and minor scratches.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                Book at least 48 hours ahead in peak season (October-November, March-April). Stock is limited.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                Bring your own pedals, saddle, and helmet if you have strong preferences. Rental helmets are often basic.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Guided Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided Tour Packages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Professional tour operators handle logistics so you can focus on riding. All prices are per person
            and seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOperators.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {tour.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 mb-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {tour.duration}
                  </span>
                  <span className="text-[var(--color-accent)] font-bold">{tour.price}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-2">
                  <CheckCircle className="w-3 h-3 inline mr-1 text-green-600" />
                  <strong>Includes:</strong> {tour.includes}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  <Route className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                  <strong>Routes:</strong> {tour.routes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essential Gear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Gear Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack these items for any ride beyond the Palmeraie. Remote Moroccan trails demand self-sufficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialGear.map((gear) => {
              const GearIcon = gear.icon;
              return (
                <div key={gear.item} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--surface-muted)] flex items-center justify-center flex-shrink-0">
                      <GearIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {gear.item}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{gear.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Season / When to Ride ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Ride — Seasonal Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s varied geography means there is rideable terrain year-round if you choose the right region.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Spring (March — May) — Prime Season
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The best all-around window. Temperatures in the Atlas foothills sit between 18-28°C. Snow retreats
                from passes above 2,500m by late April. The Dades Valley roses bloom in April-May. Desert rides
                (Merzouga, Jbel Saghro) are still comfortable before summer heat arrives. Book guided tours early —
                this is peak demand.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Summer (June — August) — High Atlas Only
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Lower elevations hit 40°C+ and riding becomes dangerous. But the High Atlas above 2,000m is
                pleasant at 20-30°C with long daylight hours. This is the window for the Imlil-Toubkal route and
                high-altitude traverses. The Essaouira coast stays cool (18-24°C) year-round thanks to Atlantic winds,
                making it a viable summer option.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Autumn (September — November) — Prime Season
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Equal to spring in quality. September is still warm but cooling rapidly. October and November are
                ideal for the full range of Moroccan MTB — Atlas day rides, multi-day tours, desert fatbiking, and
                coastal routes. Wind drops significantly at Essaouira, making coastal rides more pleasant. The
                landscape turns golden-brown after summer, offering dramatic contrast with red earth trails.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Winter (December — February) — South &amp; Coast
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Snow closes the Tizi n&apos;Tichka and Tizi n&apos;Test passes. High Atlas trails above 2,000m are
                inaccessible. But the Anti-Atlas (Tafraoute, Jbel Saghro) and desert regions enjoy mild 15-25°C
                temperatures. Essaouira and the Atlantic coast remain rideable. February brings almond blossom
                season in the Ameln Valley around Tafraoute — one of Morocco&apos;s most photogenic riding backdrops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mechanical Support & Repairs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wrench className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mechanical Support &amp; Repairs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Finding bike repair in Morocco ranges from excellent (Marrakech) to improvisational (rural Atlas villages).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Marrakech — Full Service
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Multiple shops in Gueliz (new town) stock MTB parts including brake pads, chains, cassettes, and
                tubes. Staff understand disc brakes, suspension service, and tubeless setups. Basic repairs from 50 MAD.
                Full suspension service from 500 MAD. The Hivernage and Gueliz districts have the most MTB-aware shops.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ouarzazate — Competent Basics
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A few mechanics on the main avenue can handle tire, tube, chain, and brake cable repairs. Disc
                brake bleeding or suspension work is beyond most local shops. Carry your own spare pads and
                hydraulic fluid if heading to the Dades or Todra region.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Rural Villages — Improvised
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most Atlas villages have a veloman (bike mechanic) who works on commuter bikes. They can fix
                punctures, straighten wheels, and jury-rig broken components. Do not expect MTB-specific parts or
                tools. Carry spares for anything likely to break.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-orange-600" />
                Common Mechanical Issues
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Thorn punctures (acacia and argan spines), worn brake pads (dust and long descents), snapped chains
                (rocky terrain), and bent derailleurs (crash damage). Running tubeless sealant and carrying a spare
                derailleur hanger eliminates most trail-side emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Riding Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Riding Tips for Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-orange-600" />
                Hydration Strategy
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry a minimum of 3 liters of water on any ride beyond city limits. In summer or desert rides,
                increase to 4-5 liters. Village wells and springs are common in the Atlas, but water quality varies.
                Carry purification tablets. Electrolyte sachets are essential — sweat loss at altitude and in dry heat
                depletes salts rapidly.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Interacting with Locals
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Berber villagers are overwhelmingly welcoming to mountain bikers. Slow down through villages, wave,
                and say &quot;salaam&quot;. If offered tea, accept — it is a genuine gesture. Ask before photographing people.
                Children may run alongside your bike; ride carefully. Buying snacks or water from village shops is
                a direct economic contribution.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Navigation
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cell service (Maroc Telecom, Orange, Inwi) is strong in towns and along main roads but drops out
                in remote valleys and passes. Download offline maps (Maps.me, OsmAnd) and GPX tracks before riding.
                A handlebar-mounted GPS unit (Garmin, Wahoo) is the most reliable option. Paper maps are useful as
                a backup for the Jbel Saghro and Anti-Atlas regions.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety on Roads
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan road driving is assertive. Trucks and buses will pass close on narrow mountain roads.
                Wear high-visibility gear on road sections. Avoid riding the N-roads (national highways) — stick
                to R-roads (regional) and pistes where possible. Road sections near Marrakech can have heavy traffic;
                get off the main road quickly via planned exit routes.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Budget Planning
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Self-supported day rides: from 150 MAD (transport + food). Guided day ride: from 1,200 MAD.
                Mid-range bike rental: from 550 MAD/day. Mountain guesthouses: from 300 MAD for half-board.
                Trailside village lunch (tagine + tea): from 60 MAD. Budget for a week of self-supported riding:
                from 5,000 MAD excluding flights.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Bringing Your Own Bike
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most airlines accept bike boxes or bags for a fee (from 500 MAD to 1,500 MAD per flight). Marrakech
                Menara airport has space for reassembly outside the arrivals hall. Bring a torque wrench for
                reassembly. Bike boxes can be stored at hotels or tour operator warehouses during your trip.
                Hardshell cases offer better protection than soft bags for Morocco&apos;s luggage handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-hiking-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Hiking Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trails for every level across the Atlas, from day hikes to multi-day treks through Berber villages.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-adventure-sports" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Adventure Sports in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Rock climbing, canyoning, paragliding, and more adrenaline activities across the country.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-camping-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Camping in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Wild camping spots, established campgrounds, and bivouac tips for the Atlas and Sahara.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/atlas-mountains" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <TrendingUp className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to the High Atlas, Middle Atlas, and Anti-Atlas — towns, passes, and experiences.
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
            Ready to Ride Morocco?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            From beginner palm-grove loops to advanced trans-Atlas crossings, Morocco delivers world-class
            mountain biking at a fraction of European prices. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-adventure-tours"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Browse Adventure Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/budget-travel"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Budget Travel Tips
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
