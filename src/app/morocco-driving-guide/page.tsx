import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Car,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Fuel,
  Navigation,
  Mountain,
  Gauge,
  FileText,
  Phone,
  Signpost,
  Route,
  CircleDot,
  Eye,
  Lightbulb,
  BookOpen,
  Train,
  Bus,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Driving in Morocco 2026 | Road Rules, Tips, Routes & Road Trip Planning',
  description:
    'Complete guide to driving in Morocco. Road rules, speed limits, toll roads, best road trip routes, mountain passes, fuel stations, police checkpoints, insurance, IDP requirements, and GPS navigation tips for a safe Morocco road trip.',
  keywords: [
    'driving in morocco',
    'morocco road trip',
    'morocco driving tips',
    'roads in morocco',
    'self-drive morocco',
    'morocco driving rules',
    'roadtrip morocco',
    'morocco toll roads',
    'tizi n tichka drive',
    'morocco speed limits',
    'morocco international driving permit',
    'morocco autoroute',
    'morocco mountain passes',
    'morocco car rental driving',
    'morocco road conditions',
    'morocco fuel stations',
    'morocco police checkpoints',
    'morocco road trip routes',
    'marrakech to sahara drive',
    'atlantic coast road trip morocco',
  ],
  openGraph: {
    title: 'Driving in Morocco 2026 | Road Rules, Tips, Routes & Road Trip Planning',
    description:
      'Everything you need to know about driving in Morocco. Road rules, best routes, toll roads, mountain passes, and essential tips for a safe and unforgettable road trip.',
    url: `${BASE_URL}/morocco-driving-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-road.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic mountain road winding through the Atlas Mountains in Morocco with dramatic landscape views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Driving in Morocco 2026 | Road Rules, Tips & Routes',
    description:
      'Complete guide to driving in Morocco. Road rules, best road trip routes, toll roads, mountain passes, and tips for a safe self-drive adventure.',
    images: [`${BASE_URL}/images/hero-morocco-road.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-driving-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-driving-guide`,
  name: 'Driving in Morocco 2026 | Road Rules, Tips, Routes & Road Trip Planning',
  description:
    'Complete guide to driving in Morocco. Road rules, speed limits, toll roads, best road trip routes, mountain passes, fuel stations, police checkpoints, and insurance tips.',
  url: `${BASE_URL}/morocco-driving-guide`,
  image: `${BASE_URL}/images/hero-morocco-road.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-driving-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Driving in Morocco Guide', item: `${BASE_URL}/morocco-driving-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an international driving permit to drive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, an International Driving Permit (IDP) is strongly recommended and often required alongside your home country license. You must carry both documents at all times. Obtain an IDP in your home country before travelling. It is valid for one year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which side of the road do you drive on in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco drives on the right-hand side of the road, the same as continental Europe and the United States. If you are from a left-driving country like the UK, Australia, or Japan, allow extra time to adjust, especially at roundabouts and intersections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the roads in Morocco safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has a well-maintained motorway network and decent national roads. However, secondary rural roads can be narrow and poorly maintained. Mountain passes require careful driving. Avoid driving at night outside cities due to unlit roads, pedestrians, and animals on the road.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do toll roads cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toll costs vary by distance. The Casablanca to Marrakech motorway costs from 80 MAD, Casablanca to Tangier from 150 MAD, and Casablanca to Fes from 120 MAD. Toll booths accept cash in MAD and some accept credit cards. A Jawaz electronic tag speeds up toll payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the speed limit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speed limits in Morocco are 120 km/h on motorways (autoroutes), 100 km/h on national roads outside towns, 60 km/h on regional roads, and 40-60 km/h in urban areas. Speed cameras and police radar checks are frequent. Fines start from 300 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to drive from Marrakech to the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive from Marrakech to Merzouga (Erg Chebbi dunes) is approximately 560 km and takes 8-9 hours via the N10 through Ouarzazate and the Dades Valley. Most travelers split this into two days, stopping overnight in the Dades or Todra Gorge area.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: DRIVING RULES
   ═══════════════════════════════════════════════════════════════ */

const drivingRules = [
  {
    rule: 'Drive on the Right',
    icon: Car,
    description:
      'Morocco drives on the right-hand side of the road, overtaking on the left. At roundabouts, traffic flows counterclockwise. Vehicles already on the roundabout have priority.',
  },
  {
    rule: 'Speed Limits',
    icon: Gauge,
    description:
      'Motorways: 120 km/h. National roads: 100 km/h. Regional roads: 60 km/h. Urban areas: 40-60 km/h. Speed cameras and police radar are everywhere. Fines start from 300 MAD and are payable on the spot.',
  },
  {
    rule: 'Seatbelts Mandatory',
    icon: ShieldCheck,
    description:
      'Seatbelts are compulsory for all occupants, front and rear. Children under 10 must ride in the back seat. Fines for non-compliance start from 300 MAD. Many rental cars have seatbelt warning alarms.',
  },
  {
    rule: 'International Driving Permit',
    icon: FileText,
    description:
      'An IDP is strongly recommended and often required by rental companies and police. Carry it alongside your original license at all times. Obtain it in your home country before travelling. Valid for 1 year.',
  },
  {
    rule: 'Zero Tolerance on Alcohol',
    icon: AlertTriangle,
    description:
      'Morocco has a strict zero-tolerance policy for drink driving. The legal blood alcohol limit is 0.02%, effectively zero. Penalties include heavy fines, license confiscation, and imprisonment.',
  },
  {
    rule: 'Mobile Phones Prohibited',
    icon: Phone,
    description:
      'Using a handheld mobile phone while driving is illegal. Use a hands-free kit or a dashboard phone mount for GPS navigation. Fines start from 300 MAD.',
  },
  {
    rule: 'Headlights Required',
    icon: Eye,
    description:
      'Dipped headlights are required after sunset and before sunrise. In rural areas and mountain passes, use headlights during fog and rain. Flash your headlights to warn oncoming traffic of hazards.',
  },
  {
    rule: 'Priority to the Right',
    icon: Signpost,
    description:
      'At unmarked intersections, traffic from the right has priority (priorite a droite). This rule catches many foreign drivers off guard. When in doubt, yield to vehicles approaching from your right.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROAD TYPES
   ═══════════════════════════════════════════════════════════════ */

const roadTypes = [
  {
    type: 'Autoroutes (Motorways)',
    code: 'A-roads (e.g., A1, A2, A3, A7)',
    icon: Route,
    condition: 'Excellent',
    description:
      'Morocco has over 1,800 km of modern toll motorways connecting major cities. Dual carriageway, well-maintained, with rest stops every 50-80 km. Speed limit 120 km/h. Casablanca, Rabat, Tangier, Fes, Marrakech, Agadir, and Oujda are all connected by autoroute.',
    tip: 'Get a Jawaz electronic toll tag at any service station for faster toll passage. It saves time and avoids cash queues.',
  },
  {
    type: 'Routes Nationales (National Roads)',
    code: 'N-roads (e.g., N8, N9, N10, N13)',
    icon: Signpost,
    condition: 'Good to Variable',
    description:
      'The backbone of Morocco\'s road network. Single carriageway connecting cities and towns. Generally well-paved but vary in quality. Some stretches are excellent; others have potholes and narrow sections. Speed limit 100 km/h outside towns.',
    tip: 'The N10 from Ouarzazate to Errachidia and the N13 to Merzouga are scenic but demanding. Allow extra driving time.',
  },
  {
    type: 'Routes Regionales (Regional Roads)',
    code: 'R-roads (e.g., R203, R307)',
    icon: Mountain,
    condition: 'Variable to Poor',
    description:
      'Smaller roads connecting towns and villages. Paved but often narrow, winding, and lacking shoulders. Mountain sections can be challenging with tight hairpin turns and steep gradients. Speed limit 60 km/h.',
    tip: 'These roads often deliver the most spectacular scenery. Drive slowly, use your horn on blind corners, and enjoy the views.',
  },
  {
    type: 'Pistes (Dirt/Gravel Tracks)',
    code: 'Unmarked or P-roads',
    icon: CircleDot,
    condition: 'Poor to Impassable',
    description:
      'Unpaved tracks leading to remote villages, kasbahs, and desert areas. Some are graded gravel; others are rocky trails requiring 4WD and high clearance. Can become impassable after rain. GPS is essential.',
    tip: 'Never attempt a piste alone without telling someone your route and expected arrival time. Carry extra water and fuel.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOLL ROAD COSTS
   ═══════════════════════════════════════════════════════════════ */

const tollCosts = [
  { route: 'Casablanca to Marrakech', distance: '240 km', time: '2h 30min', toll: 'From 80 MAD' },
  { route: 'Casablanca to Rabat', distance: '90 km', time: '1h', toll: 'From 30 MAD' },
  { route: 'Casablanca to Tangier', distance: '340 km', time: '3h 30min', toll: 'From 150 MAD' },
  { route: 'Casablanca to Fes', distance: '295 km', time: '3h', toll: 'From 120 MAD' },
  { route: 'Rabat to Fes', distance: '205 km', time: '2h 15min', toll: 'From 90 MAD' },
  { route: 'Marrakech to Agadir', distance: '260 km', time: '2h 45min', toll: 'From 90 MAD' },
  { route: 'Tangier to Tetouan', distance: '70 km', time: '50min', toll: 'From 20 MAD' },
  { route: 'Rabat to Tangier', distance: '250 km', time: '2h 30min', toll: 'From 120 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST ROAD TRIP ROUTES
   ═══════════════════════════════════════════════════════════════ */

const roadTripRoutes = [
  {
    name: 'Marrakech to Sahara Desert',
    icon: Star,
    distance: '560 km (one way)',
    duration: '2-3 days recommended',
    highlights: ['Tizi n\'Tichka Pass (2,260m)', 'Ait Benhaddou Kasbah', 'Ouarzazate film studios', 'Dades Gorge', 'Todra Gorge', 'Erg Chebbi sand dunes'],
    description:
      'Morocco\'s most iconic road trip. Cross the High Atlas via the Tizi n\'Tichka Pass, explore Ait Benhaddou, drive through the Valley of Roses and the dramatic Dades and Todra gorges, and end at the towering sand dunes of Merzouga. Split over 2-3 days for the best experience.',
    roadCondition: 'N9 to Ouarzazate is well-paved but winding. N10 east is good but monotonous. Final stretch to Merzouga is paved.',
  },
  {
    name: 'Atlantic Coast Road Trip',
    icon: Route,
    distance: '900 km (Tangier to Agadir)',
    duration: '5-7 days recommended',
    highlights: ['Tangier medina', 'Asilah art town', 'Rabat capital city', 'Casablanca Hassan II Mosque', 'El Jadida Portuguese cistern', 'Essaouira wind city', 'Agadir beach resort'],
    description:
      'Morocco\'s entire Atlantic coastline in one epic road trip. Start in cosmopolitan Tangier and wind south through historic port cities, surf towns, and beach resorts. The coast road offers a completely different Morocco from the interior, with seafood, ocean breezes, and laid-back vibes.',
    roadCondition: 'Mostly motorway (A1/A2/A3) with excellent conditions. Coastal sections are well-paved national roads.',
  },
  {
    name: 'Tizi n\'Tichka Pass',
    icon: Mountain,
    distance: '200 km (Marrakech to Ouarzazate)',
    duration: '4-5 hours',
    highlights: ['2,260m summit', 'Hairpin turns', 'Atlas panoramas', 'Berber villages', 'Argan tree forests', 'Ait Benhaddou detour'],
    description:
      'The highest major mountain pass in North Africa. The N9 climbs from Marrakech through argan forests, Berber villages, and increasingly dramatic Atlas scenery to the 2,260m summit before descending to the desert-side city of Ouarzazate. A thrilling drive with unforgettable views.',
    roadCondition: 'Well-paved but narrow in sections with tight hairpin bends. Frequent trucks and buses on this route. Snow possible November-March.',
  },
  {
    name: 'Tizi n\'Test Pass',
    icon: Mountain,
    distance: '220 km (Marrakech to Taroudant)',
    duration: '5-6 hours',
    highlights: ['2,092m summit', 'Tin Mal Mosque', 'Remote Berber villages', 'Souss Valley views', 'Less traffic than Tichka', 'Dramatic cliff roads'],
    description:
      'The wilder, less-traveled alternative to Tizi n\'Tichka. This pass takes you through the western High Atlas on a narrower, more challenging road. The reward is dramatic cliff-edge driving, near-zero tourist traffic, the historic Tin Mal Mosque, and descent into the beautiful Souss Valley.',
    roadCondition: 'Narrower than Tichka with fewer guardrails. Some sections are single-lane. Not recommended for nervous drivers or large vehicles.',
  },
  {
    name: 'Fes to Chefchaouen',
    icon: MapPin,
    distance: '210 km',
    duration: '3-4 hours',
    highlights: ['Rif Mountains', 'Blue Pearl city', 'Cedar forests', 'Mountain villages', 'Scenic valleys', 'Photography paradise'],
    description:
      'A scenic drive through the Rif Mountains to Morocco\'s famous blue city. The road climbs through cedar forests and mountain villages with panoramic views at every turn. Chefchaouen is worth at least two nights to explore the blue-washed medina and surrounding hiking trails.',
    roadCondition: 'The road is paved but winding through the mountains. Allow extra time and drive carefully. Road surface is generally good.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL DRIVING TIPS
   ═══════════════════════════════════════════════════════════════ */

const essentialTips = [
  {
    title: 'Police Checkpoints',
    icon: ShieldCheck,
    description:
      'Police checkpoints (barrages) are common throughout Morocco, especially near cities and along major routes. Slow down, turn off music, roll down your window, and have your passport, driving license, IDP, and rental agreement ready. Officers are usually friendly and may just wave you through. Always be polite and cooperative.',
  },
  {
    title: 'Fuel Stations',
    icon: Fuel,
    description:
      'Fuel stations are plentiful in cities and along motorways. On rural and desert roads, stations can be 100-200 km apart. Always fill up before heading into the Atlas Mountains or toward the desert. Diesel (gasoil) costs from 12 MAD/liter and petrol (essence) from 14 MAD/liter. Most stations accept cash only; some on motorways accept cards.',
  },
  {
    title: 'GPS & Navigation',
    icon: Navigation,
    description:
      'Download offline maps before your trip. Google Maps works well in Morocco but requires mobile data for live traffic. Maps.me and Waze are popular alternatives. In cities and medinas, GPS can be unreliable due to narrow streets. For desert pistes, a dedicated GPS with off-road maps is recommended.',
  },
  {
    title: 'Night Driving',
    icon: Eye,
    description:
      'Avoid driving outside cities after dark. Rural roads are poorly lit, and you will encounter unlit vehicles, donkey carts, pedestrians in dark clothing, and livestock on the road. Mountain passes are particularly dangerous at night. If you must drive at night, use high beams on empty stretches and reduce speed significantly.',
  },
  {
    title: 'Parking in Cities',
    icon: Car,
    description:
      'Most Moroccan cities have informal parking attendants (gardiens) who watch your car for a small fee: from 5-10 MAD for a short stop, from 20 MAD overnight. Always pay them. Marked parking zones in larger cities cost from 2-5 MAD per hour. Never park in front of a mosque, on a sidewalk, or in a no-parking zone.',
  },
  {
    title: 'Insurance & Breakdown',
    icon: FileText,
    description:
      'Ensure your rental car includes comprehensive insurance with zero or low excess. Carry the rental company\'s emergency number at all times. Morocco has roadside assistance services: call 177 for highway assistance. In remote areas, local mechanics (mecaniciens) can often fix common problems at very reasonable prices.',
  },
  {
    title: 'Road Conditions After Rain',
    icon: AlertTriangle,
    description:
      'Flash floods can affect southern Morocco and mountain areas, especially September-November. Dry riverbeds (oueds) can fill rapidly. Never cross a flooded road or oued. Wait for the water to recede. Check weather forecasts before driving mountain passes or desert routes.',
  },
  {
    title: 'Animals on the Road',
    icon: Lightbulb,
    description:
      'Expect donkeys, sheep, goats, cattle, and camels on and beside the road, especially in rural areas. They are unpredictable and can step into your path without warning. Slow down when you see animals near the road and give them a wide berth. Honking gently can help alert them.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDrivingGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco-road.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Driving in Morocco Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Road Trip &amp; Driving
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Driving in Morocco:
            <br className="hidden md:block" /> Road Rules, Tips &amp; Routes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know for a safe and unforgettable Morocco road trip. From motorway
            tolls and mountain passes to desert tracks and police checkpoints.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Drive in Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A road trip through Morocco is one of the most rewarding driving experiences in the world.
                Within a single day, you can drive from the Atlantic coast through fertile plains, over
                snow-capped mountain passes, and into the fringes of the Sahara Desert. The landscapes
                are staggeringly diverse, and many of the best places in Morocco are only accessible by car.
              </p>
              <p>
                Morocco has invested heavily in its road infrastructure over the past two decades. The motorway
                network is modern and well-maintained, connecting all major cities with dual carriageways. National
                roads are generally good, though they vary in quality. Mountain passes are paved but demand
                concentration. And beyond the tarmac, a network of desert pistes leads to remote kasbahs,
                oases, and landscapes that feel like another planet.
              </p>
              <p>
                Driving in Morocco is not without its challenges. Traffic in cities can be chaotic, rural roads
                can be narrow and shared with livestock, and mountain passes require confident driving. But with
                preparation and the right knowledge, a self-drive road trip is the best way to experience
                Morocco on your own terms, at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Driving Rules &amp; Regulations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Know the rules before you get behind the wheel. Morocco enforces traffic laws strictly, and fines are payable on the spot.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drivingRules.map((item) => {
              const RuleIcon = item.icon;
              return (
                <div key={item.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Road Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Roads in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s road network ranges from modern motorways to remote desert tracks. Knowing what to expect on each type is essential for planning your route.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {roadTypes.map((road) => {
              const RoadIcon = road.icon;
              return (
                <div key={road.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RoadIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {road.type}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span>{road.code}</span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-3.5 h-3.5" />
                          Condition: {road.condition}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{road.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {road.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Toll Roads ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Toll Roads &amp; Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s autoroute (motorway) network is toll-based. Here are the approximate costs for common routes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices for standard passenger vehicles. Seasonal pricing and vehicle class may affect costs. Tolls are payable in MAD cash or by Jawaz electronic tag.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Route</div>
                <div className="p-3 px-4">Distance</div>
                <div className="p-3 px-4">Drive Time</div>
                <div className="p-3 px-4">Toll</div>
              </div>
              {tollCosts.map((item, i) => (
                <div
                  key={item.route}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.route}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.distance}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.time}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.toll}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Road Trip Routes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Road Trip Routes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From epic desert crossings to coastal cruises and mountain pass adventures. These are the routes that make Morocco a world-class road trip destination.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {roadTripRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RouteIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {route.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {route.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{route.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                    {route.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Gauge className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Road Condition:</span> {route.roadCondition}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Essential Driving Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Driving Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice from experienced Morocco road-trippers to help you drive safely and confidently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {essentialTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Road Trip Checklist ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Road Trip Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Before setting off on your Morocco road trip, make sure you have everything covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Documents &amp; Essentials
              </h3>
              <div className="space-y-3">
                {[
                  'Valid passport (6+ months validity)',
                  'International Driving Permit (IDP)',
                  'Home country driving license',
                  'Car rental agreement and insurance papers',
                  'Credit card matching the rental booking',
                  'Travel insurance with driving coverage',
                  'Printed hotel reservations (for checkpoints)',
                  'Emergency contacts list',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                In-Car Supplies
              </h3>
              <div className="space-y-3">
                {[
                  'Offline maps downloaded (Google Maps / Maps.me)',
                  'Phone car mount for GPS navigation',
                  'Car charger / USB cable for phone',
                  'Sunglasses (intense Moroccan sun)',
                  'Water bottles (minimum 3 liters)',
                  'Snacks for long stretches between towns',
                  'Cash in small MAD denominations (tolls, parking, fuel)',
                  'Reflective vest and warning triangle (required by law)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving in Moroccan Cities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Driving in Moroccan Cities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            City driving in Morocco is its own discipline. Here is what to expect in each major city.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Traffic in Marrakech is intense, especially around the medina and Jemaa el-Fnaa. Motorcycles and
                scooters weave aggressively between cars. The city has a ring road (rocade) that avoids the center.
                Park outside the medina and walk in. The Gueliz (new town) area is easier to navigate with wider
                boulevards. Expect traffic jams during rush hours (8-9am and 5-7pm).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Casablanca
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s largest city has the most congested traffic. The tram system has improved flow on some
                corridors but rush-hour gridlock is common. The corniche coastal road and the autoroute ring road
                are good for getting around. Parking in the city center is tight. Use underground car parks near
                the Hassan II Mosque and the Habous quarter. Driving in Casablanca requires patience and assertiveness.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Fes has one of the world&apos;s largest car-free urban zones in its medina. Do not attempt to drive into the
                medina. Park at one of the gated car parks near the medina gates (Bab Bou Jeloud, Bab Rcif, or Place
                R&apos;cif). The ville nouvelle (new town) is manageable with modern streets and roundabouts. The road to
                the Merenid tombs viewpoint is narrow but driveable.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tangier
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Tangier has seen massive infrastructure investment. The city has good ring roads and the port area is
                well-signposted. The old medina area is not driveable. The road from Tangier to Cap Spartel and the
                Hercules Caves is a pleasant coastal drive. Watch for fast traffic on the boulevard Mohammed VI
                along the waterfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rental Car & Insurance Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rental Car &amp; Insurance Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key things to know about renting and insuring a car for your Morocco road trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Car className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choosing Your Vehicle
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For motorway-only trips, a compact car is fine. For mountain passes and desert routes, choose
                a larger vehicle with good ground clearance. For pistes and off-road tracks, a 4WD is essential.
                Diesel vehicles are more economical for long distances. Rental prices start from 250 MAD per
                day for a basic compact and from 600 MAD per day for a 4WD SUV. Seasonal pricing applies.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Insurance Coverage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always take the Collision Damage Waiver (CDW) and Theft Protection. Reduce the excess to zero
                if possible; road damage from potholes is common. Check if your credit card offers rental car
                insurance. Third-party liability is mandatory and included in all rentals. Personal accident
                insurance is optional but recommended for mountain and desert driving.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Common Rental Pitfalls
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Photograph the car thoroughly before departure and note all existing damage on the contract. Check
                tyre condition, spare tyre, and jack. Ensure the fuel policy is clear (full-to-full is standard).
                Avoid returning the car late as most agencies charge a full extra day. Always clarify if the
                rental includes unlimited kilometers.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Phone className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Breakdown &amp; Emergency
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Save the rental company&apos;s 24-hour emergency number in your phone. Morocco&apos;s highway assistance
                number is 177. For police, call 19 in cities or 177 on highways. In rural areas, local mechanics
                can often fix common problems quickly and affordably. Carry a basic first aid kit, torch, and
                high-visibility vest at all times.
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need an international driving permit to drive in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, an International Driving Permit (IDP) is strongly recommended and often required alongside
                your home country license. You must carry both documents at all times. Obtain an IDP in your home
                country before travelling. It is valid for one year and costs from 150 MAD equivalent depending
                on your country.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which side of the road do you drive on in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco drives on the right-hand side of the road, the same as continental Europe and the United States.
                If you are from a left-driving country like the UK, Australia, or Japan, allow extra time to adjust,
                especially at roundabouts and intersections. Consider renting an automatic rather than manual transmission.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are the roads in Morocco safe for tourists?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s motorway network is modern and safe. National roads are generally well-paved but can be
                narrow with unpredictable local drivers. Mountain passes require confident driving and good brakes.
                Avoid driving at night outside cities due to unlit roads, pedestrians, and animals. With normal
                precautions, driving in Morocco is safe and enjoyable.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do toll roads cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Toll costs vary by distance. Casablanca to Marrakech costs from 80 MAD, Casablanca to Tangier from
                150 MAD, and Casablanca to Fes from 120 MAD. Toll booths accept cash in MAD and some accept credit
                cards. Consider getting a Jawaz electronic tag for faster passage. Seasonal pricing may apply during
                peak periods.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the speed limit in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Speed limits are 120 km/h on motorways, 100 km/h on national roads outside towns, 60 km/h on
                regional roads, and 40-60 km/h in urban areas. Speed cameras and police radar checks are frequent
                throughout the country. Fines start from 300 MAD and are payable on the spot. Always carry cash
                for potential fines.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How long does it take to drive from Marrakech to the Sahara Desert?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The drive from Marrakech to Merzouga (Erg Chebbi dunes) is approximately 560 km and takes 8-9 hours
                of driving via the N10 through Ouarzazate and the Dades Valley. Most travelers split this into two
                days, stopping overnight in the Dades Gorge or Todra Gorge area. This is highly recommended as the
                scenery is spectacular and deserves stops along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Transport &amp; Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-car-rental" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Car Rental Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to rent a car in Morocco: best agencies, prices, insurance, and tips to avoid common scams.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-train-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Train className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Train Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco by rail: ONCF routes, schedules, ticket prices, Al Boraq high-speed train, and tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-bus-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Bus Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                CTM, Supratours, and local buses: routes, prices, comfort levels, and booking tips across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-safety-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stay safe in Morocco: scam awareness, emergency numbers, health precautions, and safety tips by region.
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
