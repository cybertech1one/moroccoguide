import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Clock,
  Info,
  ArrowRight,
  Mountain,
  Camera,
  Sun,
  ThermometerSun,
  Car,
  Footprints,
  ShieldCheck,
  AlertTriangle,
  Calendar,
  Compass,
  TreeDeciduous,
  Waves,
  HelpCircle,
  CheckCircle,
  Eye,
  Route,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Waterfalls in Morocco 2026 | Ouzoud, Akchour & Hidden Gems',
  description:
    'Discover Morocco\'s 10 most spectacular waterfalls including Ouzoud Falls (110m), Akchour near Chefchaouen, and secret cascades in the Atlas Mountains. Hiking routes, best seasons, swimming spots, and photography tips.',
  keywords: [
    'morocco waterfalls',
    'ouzoud falls morocco',
    'akchour waterfalls',
    'best waterfalls morocco',
    'cascades ouzoud',
    'chefchaouen waterfalls',
    'morocco waterfall hiking',
    'atlas mountains waterfalls',
    'paradise valley agadir',
    'setti fatma ourika valley',
    'morocco swimming holes',
    'imouzzer waterfalls',
    'morocco nature guide',
    'waterfall photography morocco',
    'morocco outdoor adventure',
    'tanaghmeilt cascades',
    'oum er rbia sources',
    'morocco hiking guide',
    'morocco nature 2026',
    'hidden waterfalls morocco',
  ],
  openGraph: {
    title: 'Best Waterfalls in Morocco 2026 | Ouzoud, Akchour & Hidden Gems',
    description:
      'Morocco\'s 10 most spectacular waterfalls: Ouzoud Falls at 110m, Akchour\'s turquoise pools, and secret Atlas Mountain cascades. Complete guide with hiking routes, best seasons, and swimming spots.',
    url: `${BASE_URL}/morocco-waterfalls-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-waterfalls.webp`,
        width: 1200,
        height: 630,
        alt: 'Ouzoud Falls cascading 110 meters into a misty gorge surrounded by olive groves and red rock cliffs in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Waterfalls in Morocco 2026 | Ouzoud, Akchour & Hidden Gems',
    description:
      'Morocco\'s 10 most spectacular waterfalls: from Ouzoud Falls at 110m to Akchour\'s turquoise pools. Complete hiking and travel guide.',
    images: [`${BASE_URL}/images/hero-waterfalls.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-waterfalls-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-waterfalls-guide`,
  name: 'Best Waterfalls in Morocco 2026 | Ouzoud, Akchour & Hidden Gems',
  description:
    'Complete guide to Morocco\'s 10 most spectacular waterfalls including Ouzoud Falls, Akchour, Paradise Valley, and hidden gems in the Atlas Mountains. Hiking routes, best seasons, swimming spots, and photography tips.',
  url: `${BASE_URL}/morocco-waterfalls-guide`,
  image: `${BASE_URL}/images/hero-waterfalls.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-waterfalls-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Waterfalls in Morocco', item: `${BASE_URL}/morocco-waterfalls-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit waterfalls in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Moroccan waterfalls is late March through June, when snowmelt feeds the rivers and water flow peaks. Autumn (September-November) also works well after seasonal rains. July and August can leave smaller falls dry, though Ouzoud and Akchour maintain year-round flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to swim at Ouzoud Falls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, swimming is safe in the natural pools at the base of Ouzoud Falls. The main pool is calm enough for swimming, though you should avoid getting too close to the falls themselves due to strong currents. Local guides can point out the safest spots. There are no lifeguards on duty.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Akchour waterfalls from Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Akchour is roughly 30 km from Chefchaouen. You can take a grand taxi from Place Mohamed V for about 30-40 MAD per person, or hire a private taxi for around 200-300 MAD round trip. The drive takes approximately 45 minutes on a winding mountain road. Some hotels arrange shuttle services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for Morocco waterfall hikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A guide is not mandatory for well-marked trails like Ouzoud Falls or the short Akchour trail. However, a local guide is strongly recommended for Setti Fatma (the upper falls), Afensou, and any off-trail exploration. Guides typically charge from 200-400 MAD for a half-day trek and know the safest routes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Ouzoud Falls as a day trip from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ouzoud Falls sits about 150 km northeast of Marrakech, roughly a 2.5-3 hour drive. Organized day trips depart daily from Marrakech starting at from 250 MAD per person. You can also hire a private driver for approximately 800-1,200 MAD round trip, which gives you more flexibility with timing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there entrance fees for waterfalls in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most waterfalls in Morocco have no official entrance fee. Ouzoud Falls charges a small parking fee of around 10-20 MAD. At some sites like Setti Fatma and Paradise Valley, locals collect an informal access fee of 10-30 MAD. Tipping your guide separately is expected.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring on a waterfall hike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack sturdy hiking shoes with grip (trails get slippery near water), a swimsuit and quick-dry towel, sunscreen, at least 2 liters of water per person, snacks, a waterproof phone case or dry bag for electronics, and a light rain jacket. Trekking poles help on steep descents at sites like Setti Fatma and Afensou.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 10 WATERFALLS
   ═══════════════════════════════════════════════════════════════ */

const waterfalls = [
  {
    rank: 1,
    name: 'Ouzoud Falls (Cascades d\'Ouzoud)',
    location: 'Middle Atlas, near Azilal',
    height: '110 meters (3 tiers)',
    difficulty: 'Easy',
    swimmable: true,
    bestSeason: 'March — June (peak flow)',
    icon: Droplets,
    price: 'Free (parking from 10 MAD)',
    description:
      'Morocco\'s tallest and most visited waterfall drops 110 meters across three dramatic tiers into a gorge carved from red sandstone. A colony of Barbary macaques lives in the olive groves around the falls, and you can spot them swinging through the trees on the descent trail. Boat rides at the base carry visitors through the mist for from 20 MAD per person. The surrounding cliff faces glow orange at sunset, making late afternoon the best time for photography.',
    highlights: ['Barbary macaque colony', 'Boat rides through the mist', 'Rainbow-filled spray at midday', 'Riverside cafes with tagine'],
  },
  {
    rank: 2,
    name: 'Akchour Waterfalls',
    location: 'Talassemtane National Park, near Chefchaouen',
    height: '20 meters (small) / 100+ meters (grand)',
    difficulty: 'Moderate',
    swimmable: true,
    bestSeason: 'April — November',
    icon: Mountain,
    price: 'Free entry',
    description:
      'Two separate falls reward hikers in this Rif Mountain gorge. The small waterfall sits 45 minutes from the trailhead — a turquoise pool framed by limestone walls and fig trees. The grand waterfall requires a 3-4 hour round trip along a narrow canyon trail with river crossings. The water stays strikingly blue-green due to dissolved limestone, creating some of Morocco\'s best natural swimming pools.',
    highlights: ['Turquoise natural pools', 'God\'s Bridge natural rock arch', 'Close to Chefchaouen', 'River canyon trail'],
  },
  {
    rank: 3,
    name: 'Sources Oum er-Rbia',
    location: 'Middle Atlas, Khenifra Province',
    height: 'Multiple springs and cascades (40+ sources)',
    difficulty: 'Easy',
    swimmable: false,
    bestSeason: 'Year-round (spring is strongest)',
    icon: Waves,
    price: 'Free entry',
    description:
      'More than forty freshwater springs burst simultaneously from the limestone cliffs here, forming the headwaters of Morocco\'s longest river — the Oum er-Rbia (Mother of Spring). The water emerges ice-cold at every point along the cliff face, tumbling down moss-covered rocks into a rushing torrent. Unlike single-drop waterfalls, this site feels like the earth itself is pouring water from every crack. Cedar forests surround the approach trail.',
    highlights: ['40+ simultaneous springs', 'Birth of Morocco\'s longest river', 'Cedar forest setting', 'Cool temperatures year-round'],
  },
  {
    rank: 4,
    name: 'Cascades d\'Imouzzer',
    location: 'Western High Atlas, near Agadir',
    height: '30 meters',
    difficulty: 'Easy to Moderate',
    swimmable: true,
    bestSeason: 'February — May',
    icon: TreeDeciduous,
    price: 'Free entry',
    description:
      'Perched above the Ida Outanane valley about 60 km from Agadir, these falls cascade over a travertine cliff into a green pool surrounded by almond and olive groves. The flow depends entirely on seasonal rainfall — after a wet winter, the cascade runs full and powerful. The nearby village of Imouzzer des Ida Outanane hosts an annual honey festival in May, worth timing your visit around. The drive from Agadir follows winding mountain roads through Berber villages.',
    highlights: ['Travertine formations', 'Almond blossom in spring', 'Annual honey festival (May)', 'Day trip from Agadir'],
  },
  {
    rank: 5,
    name: 'Paradise Valley',
    location: 'Near Agadir (Tamraght/Imouzzer road)',
    height: 'Series of cascades and natural pools',
    difficulty: 'Easy to Moderate',
    swimmable: true,
    bestSeason: 'April — October',
    icon: Sun,
    price: 'From 20 MAD (informal access fee)',
    description:
      'A chain of rock pools and small waterfalls carved into a palm-lined gorge roughly 20 km inland from Agadir. The pools range from shallow wading spots to deep, cliff-jumping pools where locals and travelers leap from heights of 5-10 meters. Oleander bushes, date palms, and argan trees shade the valley floor. The hike from the parking area takes 20-30 minutes and involves some boulder scrambling. Bring water shoes — the rocks are slick.',
    highlights: ['Natural cliff-jumping pools', 'Palm-lined gorge', 'Popular surf-and-swim combo', 'Boulder scrambling route'],
  },
  {
    rank: 6,
    name: 'Cascades de Tizgui',
    location: 'Anti-Atlas, Tata Province',
    height: '40 meters',
    difficulty: 'Moderate',
    swimmable: true,
    bestSeason: 'January — April',
    icon: Compass,
    price: 'Free entry',
    description:
      'One of the Anti-Atlas range\'s few permanent waterfalls, Tizgui drops 40 meters into a deep pool surrounded by red desert rock and scattered palms. The landscape here is starkly different from the green Middle Atlas — arid canyons, layered sedimentary cliffs, and a near-total absence of other tourists. The falls flow strongest after winter rains and can dry to a trickle by July. Reaching Tizgui requires a bumpy 15 km drive on a piste road followed by a 30-minute walk.',
    highlights: ['Desert canyon setting', 'Deep swimming pool', 'Almost no tourist crowds', 'Dramatic red rock cliffs'],
  },
  {
    rank: 7,
    name: 'Setti Fatma (Ourika Valley)',
    location: 'High Atlas, 60 km from Marrakech',
    height: '7 cascades (total drop ~200m)',
    difficulty: 'Moderate to Difficult (upper falls)',
    swimmable: true,
    bestSeason: 'March — June',
    icon: Footprints,
    price: 'Guide fee from 200 MAD recommended',
    description:
      'Seven waterfalls stack above the village of Setti Fatma at the head of the Ourika Valley. The first cascade is a straightforward 30-minute hike from the village center. Each successive fall gets harder to reach — the upper cascades require scrambling over wet boulders, crossing narrow ledges, and using fixed ropes. Most visitors stop at falls two or three. A local guide is essential for anything beyond the second cascade. The valley floods dangerously in late summer storms, so check conditions beforehand.',
    highlights: ['Seven stacked cascades', 'Closest major falls to Marrakech', 'Riverside restaurants below', 'Annual moussem festival (August)'],
  },
  {
    rank: 8,
    name: 'Cascades d\'Afensou',
    location: 'Near Beni Mellal, Middle Atlas foothills',
    height: '50 meters',
    difficulty: 'Moderate',
    swimmable: true,
    bestSeason: 'March — June',
    icon: Droplets,
    price: 'Free entry',
    description:
      'A hidden gem tucked into a narrow gorge above the agricultural plains of Beni Mellal. Afensou drops about 50 meters through a lush corridor of fig trees, wild mint, and ferns. The trail to the base winds along an irrigation channel built centuries ago by local farmers. Rock pools at the base stay cold even in summer. Very few international tourists make the trip here, so you\'ll share the site mostly with local families on weekends.',
    highlights: ['Ancient irrigation channel trail', 'Lush gorge with fig trees', 'Cold rock pools', 'Genuine off-the-beaten-path'],
  },
  {
    rank: 9,
    name: 'Tamga Falls',
    location: 'Near Tamga, Beni Mellal-Khenifra region',
    height: '25 meters',
    difficulty: 'Easy',
    swimmable: true,
    bestSeason: 'March — May',
    icon: TreeDeciduous,
    price: 'Free entry',
    description:
      'A peaceful cascade spilling over moss-covered rocks into a clear pool near the village of Tamga. The setting is quintessential Middle Atlas — walnut trees, terraced orchards, and a mud-brick kasbah nearby. The walk from the road takes about 15 minutes along a flat, well-worn path. Tamga serves as a base for exploring the Ahansal River gorges and the Cathedral Rock climbing area, making the falls an easy addition to any adventure itinerary in this region.',
    highlights: ['Gentle approach walk', 'Moss-covered rock face', 'Nearby kasbah ruins', 'Gateway to Ahansal climbing'],
  },
  {
    rank: 10,
    name: 'Cascades de Tanaghmeilt',
    location: 'Near Azilal, between Ouzoud and Bin el-Ouidane',
    height: '35 meters',
    difficulty: 'Easy to Moderate',
    swimmable: true,
    bestSeason: 'March — June',
    icon: Mountain,
    price: 'Free entry',
    description:
      'Often overlooked by visitors heading straight to Ouzoud, Tanaghmeilt offers a quieter waterfall experience just 20 km away. The falls drop 35 meters through a terraced limestone shelf into a series of connected pools. The olive groves and barley fields along the approach trail paint a picture of traditional Berber agriculture. Combine this with a visit to the nearby Bin el-Ouidane dam and lake for a full day exploring the Azilal province.',
    highlights: ['Terraced limestone pools', 'Quiet alternative to Ouzoud', 'Near Bin el-Ouidane lake', 'Traditional Berber farmland'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March — May)',
    icon: TreeDeciduous,
    rating: 'Best',
    details:
      'Snowmelt from the Atlas Mountains feeds rivers at maximum volume. Wildflowers line the trails, and temperatures sit between 18-28°C at most waterfall elevations. Almond and cherry blossoms appear in March. This is the peak season — expect more visitors at Ouzoud.',
  },
  {
    season: 'Summer (June — August)',
    icon: Sun,
    rating: 'Good (major falls) / Poor (smaller falls)',
    details:
      'Major waterfalls like Ouzoud and Akchour maintain solid flow through summer. Smaller seasonal falls (Imouzzer, Tizgui, Tamga) can dry up completely. Swimming pools warm to pleasant temperatures. Heat at lower elevations can reach 40°C, so start hikes early.',
  },
  {
    season: 'Autumn (September — November)',
    icon: Compass,
    rating: 'Good',
    details:
      'Early autumn rains begin refilling rivers. October and November bring renewed flow to seasonal falls. Crowds thin significantly after September. Temperatures drop to comfortable hiking range (15-25°C). Some trails may be muddy after storms.',
  },
  {
    season: 'Winter (December — February)',
    icon: ThermometerSun,
    rating: 'Variable',
    details:
      'Heavy rains produce dramatic flow at all waterfalls, but mountain trails can become treacherous. Snow closes some High Atlas access roads. Lower-elevation falls (Paradise Valley, Tizgui) remain accessible. Fewer crowds but shorter daylight hours.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  {
    title: 'Use a Slow Shutter Speed',
    icon: Camera,
    tip: 'Set your camera to 0.5-2 seconds exposure for that silky water effect. A small tripod or gorilla pod is essential. Use a polarizing filter to cut glare from wet rocks.',
  },
  {
    title: 'Chase the Golden Hours',
    icon: Sun,
    tip: 'Shoot at sunrise or late afternoon for warm light and long shadows on canyon walls. Midday sun creates harsh highlights on white water but also produces the best rainbows at Ouzoud.',
  },
  {
    title: 'Protect Your Gear',
    icon: ShieldCheck,
    tip: 'Waterfall mist destroys unprotected electronics. Carry a waterproof dry bag and microfiber lens cloths. Wipe your lens between every few shots at Ouzoud — the mist is constant.',
  },
  {
    title: 'Include Scale and People',
    icon: Eye,
    tip: 'Waterfalls look small without a reference point. Position a person at the base or include foreground rocks and branches. At Ouzoud, the boats at the base provide perfect scale.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const transportRoutes = [
  {
    destination: 'Ouzoud Falls',
    from: 'Marrakech',
    distance: '150 km (2.5-3 hours)',
    options: 'Organized day tour from 250 MAD, grand taxi from Azilal (30 MAD), or private driver from 800 MAD round trip',
  },
  {
    destination: 'Akchour Waterfalls',
    from: 'Chefchaouen',
    distance: '30 km (45 minutes)',
    options: 'Grand taxi from 30-40 MAD/person, private taxi from 200 MAD round trip, or hotel shuttle',
  },
  {
    destination: 'Paradise Valley',
    from: 'Agadir/Taghazout',
    distance: '20 km (30 minutes)',
    options: 'Private taxi from 150-200 MAD round trip, or rent a car. No public transport directly to the valley.',
  },
  {
    destination: 'Setti Fatma',
    from: 'Marrakech',
    distance: '60 km (1.5 hours)',
    options: 'Grand taxi from Bab er-Rob for 25 MAD, or shared minibus. Very popular day trip from Marrakech.',
  },
  {
    destination: 'Sources Oum er-Rbia',
    from: 'Khenifra',
    distance: '30 km (40 minutes)',
    options: 'Grand taxi or private car from Khenifra. Best combined with a road trip between Fes and Marrakech.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWaterfallsGuide() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#1a1207]">
        <img
          src="/images/hero-waterfalls.webp"
          alt="Ouzoud Falls cascading 110 meters into a misty gorge surrounded by olive groves in Morocco"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
            Best Waterfalls in Morocco
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-[family-name:var(--font-heading)]">
            Ouzoud, Akchour &amp; Hidden Gems — The Complete 2026 Guide
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From the 110-meter plunge at Ouzoud to the turquoise pools of Akchour and secret cascades deep in the Atlas Mountains — Morocco holds some of North Africa&apos;s most dramatic waterfall scenery.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BREADCRUMBS
          ═══════════════════════════════════════════════════════════ */}
      <nav className="bg-[#FAF8F5] border-b border-[#A0522D]/10" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[#A0522D]/70">
            <li className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[#A0522D] font-medium">Best Waterfalls in Morocco</li>
          </ol>
        </div>
      </nav>

      <main className="bg-[#FAF8F5]">

        {/* ═══════════════════════════════════════════════════════════
            INTRODUCTION
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="w-8 h-8 text-[#A0522D]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                Why Morocco&apos;s Waterfalls Deserve a Spot on Your Itinerary
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Most visitors picture Morocco as desert dunes and sun-baked medinas. But the Atlas Mountains, Rif range, and Anti-Atlas hide a startling amount of water. Snowmelt feeds hundreds of rivers that carve deep gorges and tumble over cliff faces, creating waterfalls that rival anything in southern Europe.
              </p>
              <p>
                Ouzoud Falls — at 110 meters, North Africa&apos;s tallest accessible cascade — draws over 300,000 visitors each year. Yet drive an hour in any direction and you&apos;ll find falls with zero crowds, turquoise pools begging to be swum in, and hiking trails shared only with goatherds and Barbary macaques. This guide covers the ten best, from famous to almost unknown.
              </p>
              <p>
                Every waterfall listed here has been visited on foot. The hiking times, difficulty ratings, and seasonal notes reflect real conditions — not recycled guidebook entries.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            TOP 10 WATERFALLS
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-morocco pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Star className="w-8 h-8 text-[#C4960C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                Top 10 Waterfalls in Morocco
              </h2>
            </div>

            <div className="space-y-8">
              {waterfalls.map((fall) => {
                const IconComponent = fall.icon;
                return (
                  <article key={fall.rank} className="card-moroccan p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#A0522D]/10 rounded-xl flex items-center justify-center">
                        <span className="text-xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                          {fall.rank}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <IconComponent className="w-5 h-5 text-[#C4960C]" />
                          <h3 className="text-xl md:text-2xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                            {fall.name}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[#A0522D]/60" /> {fall.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mountain className="w-4 h-4 text-[#A0522D]/60" /> {fall.height}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{fall.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                        <Footprints className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <span className="text-xs text-gray-500 block">Difficulty</span>
                        <span className="text-sm font-semibold text-[#A0522D]">{fall.difficulty}</span>
                      </div>
                      <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                        <Waves className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <span className="text-xs text-gray-500 block">Swimming</span>
                        <span className="text-sm font-semibold text-[#A0522D]">{fall.swimmable ? 'Yes' : 'No'}</span>
                      </div>
                      <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                        <Calendar className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <span className="text-xs text-gray-500 block">Best Season</span>
                        <span className="text-sm font-semibold text-[#A0522D]">{fall.bestSeason}</span>
                      </div>
                      <div className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                        <Info className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <span className="text-xs text-gray-500 block">Cost</span>
                        <span className="text-sm font-semibold text-[#A0522D]">{fall.price}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {fall.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 bg-[#C4960C]/10 text-[#A0522D] text-xs font-medium px-3 py-1 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SEASONAL GUIDE
            ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Calendar className="w-8 h-8 text-[#C4960C]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                  Best Season to Visit — Month-by-Month
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {seasonalGuide.map((season) => {
                  const SeasonIcon = season.icon;
                  return (
                    <div key={season.season} className="card-moroccan p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <SeasonIcon className="w-6 h-6 text-[#C4960C]" />
                        <h3 className="text-lg font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                          {season.season}
                        </h3>
                      </div>
                      <div className="inline-block bg-[#A0522D]/10 text-[#A0522D] text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {season.rating}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{season.details}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            GETTING THERE
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-morocco py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Car className="w-8 h-8 text-[#C4960C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                Getting There — Transport &amp; Routes
              </h2>
            </div>

            <div className="space-y-4">
              {transportRoutes.map((route) => (
                <div key={route.destination} className="card-moroccan p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex items-center gap-2 md:w-1/4">
                      <Route className="w-5 h-5 text-[#A0522D]" />
                      <h3 className="font-bold text-[#A0522D] font-[family-name:var(--font-heading)]">
                        {route.destination}
                      </h3>
                    </div>
                    <div className="md:w-1/4 text-sm text-gray-600">
                      <span className="font-medium">From {route.from}:</span> {route.distance}
                    </div>
                    <div className="md:w-2/4 text-sm text-gray-700">
                      {route.options}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-moroccan p-6 mt-8 bg-[#A0522D]/5 border-l-4 border-[#A0522D]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                    Road Conditions Warning
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Several waterfalls (Tizgui, Afensou, Tanaghmeilt) sit at the end of unpaved piste roads. A standard rental car can handle most of these in dry conditions, but after rain the tracks become muddy and rutted. For the Anti-Atlas and remote Middle Atlas falls, consider a 4x4 rental (from 450 MAD/day) or hiring a local driver who knows the roads. Always check road conditions locally before heading out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            HIKING DIFFICULTY BREAKDOWN
            ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Footprints className="w-8 h-8 text-[#C4960C]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                  Hiking Difficulty Breakdown
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-moroccan p-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-display)]">Easy</h3>
                  <p className="text-gray-700 text-sm mb-3">Flat or gently graded paths, under 30 minutes walk, suitable for families with children and older travelers.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Ouzoud Falls (main viewpoint)</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Sources Oum er-Rbia</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Tamga Falls</li>
                  </ul>
                </div>

                <div className="card-moroccan p-6">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-display)]">Moderate</h3>
                  <p className="text-gray-700 text-sm mb-3">Uneven terrain, some boulder hopping, river crossings possible. 30 minutes to 2 hours. Reasonable fitness required.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Akchour (small waterfall)</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Paradise Valley</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Cascades d&apos;Imouzzer</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Afensou &amp; Tanaghmeilt</li>
                  </ul>
                </div>

                <div className="card-moroccan p-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Mountain className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-display)]">Difficult</h3>
                  <p className="text-gray-700 text-sm mb-3">Scrambling, fixed ropes, exposed ledges, or 3+ hour round trips. Guide strongly recommended. Not for young children.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Akchour (grand waterfall)</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Setti Fatma (upper cascades)</li>
                    <li className="flex items-center gap-2"><Droplets className="w-3 h-3 text-[#A0522D]" /> Cascades de Tizgui</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SWIMMING SPOTS
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-morocco py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Waves className="w-8 h-8 text-[#C4960C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                Best Swimming Spots
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                Nine of the ten waterfalls on this list have swimmable pools. The water comes from mountain springs and snowmelt, so expect cold temperatures even in summer — typically 12-18°C depending on altitude and time of year. Here are the standout swimming experiences:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h3 className="font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                  Paradise Valley — Best for Cliff Jumping
                </h3>
                <p className="text-sm text-gray-700">
                  Multiple pool depths with natural rock platforms at 3, 5, and 10-meter heights. The deep pools below have been tested for safe jumping by generations of locals. Stick to pools where you see others jumping — some are shallower than they look.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                  Ouzoud Falls — Best for Families
                </h3>
                <p className="text-sm text-gray-700">
                  The main pool at the base has a gently sloping entry point and calm water away from the falls. Riverside cafes keep your belongings safe while you swim. Boats cross the pool regularly, so stay near the edges.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                  Akchour — Most Photogenic
                </h3>
                <p className="text-sm text-gray-700">
                  The turquoise pools at the small waterfall look unreal in photographs. The color comes from dissolved limestone particles refracting light. Water depth varies from ankle-deep to over 3 meters in the main basin.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">
                  Tizgui — Most Secluded
                </h3>
                <p className="text-sm text-gray-700">
                  The deep pool at the base of the 40-meter drop rarely sees other swimmers. The desert canyon setting gives it a wild, adventurous feel. You&apos;ll likely have it to yourself on weekdays outside of Moroccan school holidays.
                </p>
              </div>
            </div>

            <div className="zellige-border p-6 mt-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#A0522D] mb-2 font-[family-name:var(--font-heading)]">Swimming Safety</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>No lifeguards</strong> at any Moroccan waterfall. Swim at your own risk.</li>
                    <li><strong>Check depth before jumping.</strong> Water levels change with seasons and recent rainfall.</li>
                    <li><strong>Wear water shoes.</strong> River rocks are covered in algae and extremely slippery.</li>
                    <li><strong>Flash flood risk</strong> exists at Setti Fatma, Paradise Valley, and other narrow gorge sites during rain events. Leave immediately if you see water rising or hear a rumbling sound upstream.</li>
                    <li><strong>Cold water shock</strong> is real — enter gradually rather than diving in, especially at high-altitude pools.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PHOTOGRAPHY TIPS
            ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Camera className="w-8 h-8 text-[#C4960C]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                  Waterfall Photography Tips
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {photoTips.map((tip) => {
                  const TipIcon = tip.icon;
                  return (
                    <div key={tip.title} className="card-moroccan p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <TipIcon className="w-6 h-6 text-[#C4960C]" />
                        <h3 className="text-lg font-bold text-[#A0522D] font-[family-name:var(--font-heading)]">
                          {tip.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            WHAT TO PACK
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-morocco py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-[#C4960C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                What to Pack for Waterfall Hikes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[#A0522D] mb-4 font-[family-name:var(--font-heading)]">Essentials</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Sturdy hiking shoes with ankle support and grip</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> At least 2 liters of water per person</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Sunscreen (SPF 50+) and hat — exposed trails reflect UV off water</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Snacks and lunch for longer hikes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Cash in small bills (for guides, taxis, cafes — no card readers here)</li>
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[#A0522D] mb-4 font-[family-name:var(--font-heading)]">For Swimming</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Swimsuit worn under clothes (no changing facilities)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Quick-dry towel (microfiber packs small)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Water shoes or sandals with heel straps</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Waterproof phone pouch or dry bag</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Spare dry clothes in a plastic bag</li>
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[#A0522D] mb-4 font-[family-name:var(--font-heading)]">For Photography</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Small tripod or gorilla pod for long exposures</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Circular polarizing filter (cuts glare on wet rocks)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Multiple microfiber cloths for lens mist</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> ND filter for daytime long exposures</li>
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[#A0522D] mb-4 font-[family-name:var(--font-heading)]">Safety Gear</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Trekking poles for steep descents (Setti Fatma, Afensou)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Basic first-aid kit (blisters, scrapes, insect bites)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Light rain jacket (weather changes fast in mountains)</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /> Headlamp if attempting longer hikes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FAQ SECTION
            ═══════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <HelpCircle className="w-8 h-8 text-[#C4960C]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                {jsonLdFaq.mainEntity.map((faq, index) => (
                  <div key={index} className="card-moroccan p-6">
                    <h3 className="text-lg font-bold text-[#A0522D] mb-3 font-[family-name:var(--font-heading)]">
                      {faq.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            RELATED GUIDES
            ═══════════════════════════════════════════════════════════ */}
        <section className="container-morocco py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ArrowRight className="w-8 h-8 text-[#C4960C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">
                Related Guides
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link href="/atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Mountain className="w-6 h-6 text-[#C4960C] mb-3" />
                <h3 className="font-bold text-[#A0522D] group-hover:text-[#C4960C] transition-colors font-[family-name:var(--font-heading)]">
                  Atlas Mountains Guide
                </h3>
                <p className="text-sm text-gray-600 mt-2">Trekking routes, mountain villages, and adventure activities across the High, Middle, and Anti-Atlas ranges.</p>
              </Link>

              <Link href="/chefchaouen" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-[#C4960C] mb-3" />
                <h3 className="font-bold text-[#A0522D] group-hover:text-[#C4960C] transition-colors font-[family-name:var(--font-heading)]">
                  Chefchaouen City Guide
                </h3>
                <p className="text-sm text-gray-600 mt-2">The Blue City and gateway to Akchour — medina walks, restaurants, and the best day trips into the Rif Mountains.</p>
              </Link>

              <Link href="/adventure" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Compass className="w-6 h-6 text-[#C4960C] mb-3" />
                <h3 className="font-bold text-[#A0522D] group-hover:text-[#C4960C] transition-colors font-[family-name:var(--font-heading)]">
                  Adventure Activities
                </h3>
                <p className="text-sm text-gray-600 mt-2">Rock climbing, canyoning, paragliding, and outdoor adventures across Morocco for thrill-seekers.</p>
              </Link>

              <Link href="/best-time-visit-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Clock className="w-6 h-6 text-[#C4960C] mb-3" />
                <h3 className="font-bold text-[#A0522D] group-hover:text-[#C4960C] transition-colors font-[family-name:var(--font-heading)]">
                  Best Time to Visit
                </h3>
                <p className="text-sm text-gray-600 mt-2">Month-by-month climate breakdown, peak vs. shoulder seasons, and regional weather patterns across Morocco.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            CTA SECTION
            ═══════════════════════════════════════════════════════════ */}
        <section className="moroccan-pattern py-16">
          <div className="container-morocco text-center">
            <div className="max-w-3xl mx-auto">
              <Droplets className="w-12 h-12 text-[#C4960C] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#A0522D] mb-4 font-[family-name:var(--font-display)]">
                Ready to Chase Waterfalls in Morocco?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                From the thundering mist of Ouzoud to the turquoise pools of Akchour, Morocco&apos;s waterfalls deliver experiences that no desert or medina can match. Start planning your waterfall road trip today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 bg-[#A0522D] text-white px-8 py-3 rounded-lg hover:bg-[#8B4726] transition-colors font-semibold"
                >
                  Explore All Activities <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/budget-travel"
                  className="inline-flex items-center gap-2 border-2 border-[#A0522D] text-[#A0522D] px-8 py-3 rounded-lg hover:bg-[#A0522D] hover:text-white transition-colors font-semibold"
                >
                  Budget Travel Guide <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
