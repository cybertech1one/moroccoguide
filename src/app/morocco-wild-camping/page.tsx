import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Tent,
  Mountain,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Compass,
  Car,
  Droplets,
  Sun,
  Moon,
  Wind,
  Flame,
  Eye,
  BookOpen,
  Map,
  Leaf,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Wild Camping in Morocco 2026 | Legal, Best Spots, Safety & Overlanding Tips',
  description:
    'Complete guide to wild camping in Morocco. Is it legal? Best free camping spots along the Atlantic coast, Sahara desert, Atlas Mountains, and Anti-Atlas. Overlanding routes, van life tips, essential gear, safety advice, and leave no trace principles.',
  keywords: [
    'wild camping morocco',
    'wild camping in morocco',
    'camping in morocco',
    'morocco wild camping',
    'free camping morocco',
    'overlanding morocco',
    'camping spots morocco',
    'van life morocco',
    'morocco free camping spots',
    'sahara camping morocco',
    'atlas mountains camping',
    'morocco overlanding route',
    'camping morocco legal',
    'bivouac morocco',
    'morocco road trip camping',
    'anti-atlas camping',
    'atlantic coast camping morocco',
    'morocco camping safety',
    'morocco tent camping',
    'wild camping north africa',
  ],
  openGraph: {
    title: 'Wild Camping in Morocco 2026 | Legal, Best Spots, Safety & Overlanding Tips',
    description:
      'Is wild camping legal in Morocco? Discover the best free camping spots, overlanding routes, van life tips, and essential safety advice for camping under the stars in Morocco.',
    url: `${BASE_URL}/morocco-wild-camping`,
    images: [
      {
        url: `${BASE_URL}/images/hero-camping.webp`,
        width: 1200,
        height: 630,
        alt: 'Wild camping setup in the Moroccan landscape with a tent under a starry sky near the Atlas Mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wild Camping in Morocco 2026 | Complete Guide',
    description:
      'Is wild camping legal in Morocco? Best free spots on the Atlantic coast, Sahara, Atlas Mountains. Overlanding routes, van life, gear lists, and safety tips.',
    images: [`${BASE_URL}/images/hero-camping.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wild-camping` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wild-camping`,
  name: 'Wild Camping in Morocco 2026 | Legal, Best Spots, Safety & Overlanding Tips',
  description:
    'Complete guide to wild camping in Morocco. Legal status, best free camping spots, overlanding routes, van life tips, essential gear, safety advice, and leave no trace principles.',
  url: `${BASE_URL}/morocco-wild-camping`,
  image: `${BASE_URL}/images/hero-camping.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-wild-camping`,
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
      { '@type': 'ListItem', position: 2, name: 'Wild Camping in Morocco', item: `${BASE_URL}/morocco-wild-camping` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is wild camping legal in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Wild camping in Morocco occupies a grey area. There is no specific law banning it outside cities and protected areas, and it is generally tolerated in rural and remote locations. However, it is always best to ask local permission, avoid military zones, and camp discreetly.' } },
    { '@type': 'Question', name: 'Where are the best wild camping spots in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The best wild camping spots include the Atlantic coast between Essaouira and Sidi Ifni, the Sahara desert near Merzouga and Zagora, the High Atlas Mountains, the Anti-Atlas region around Tafraoute, and the Todra and Dades gorges.' } },
    { '@type': 'Question', name: 'Do I need a 4x4 for overlanding in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'For basic coastal and main road camping, a standard vehicle or campervan is sufficient. However, for Sahara desert tracks, High Atlas mountain passes, and remote Anti-Atlas trails, a 4x4 with good ground clearance is strongly recommended.' } },
    { '@type': 'Question', name: 'Is it safe to wild camp in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco is generally very safe for wild camping. Moroccans are famously hospitable. The main risks are environmental: flash floods in wadis, extreme heat in summer, cold nights in the mountains, and strong coastal winds. Always tell someone your plans.' } },
    { '@type': 'Question', name: 'How much does wild camping in Morocco cost?', acceptedAnswer: { '@type': 'Answer', text: 'Wild camping itself is free. Budget around 200-400 MAD per day for food, fuel, and water. Established campsites range from 50-150 MAD per night. A full overlanding trip can be done on from 300 MAD per day including all expenses.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST WILD CAMPING REGIONS
   ═══════════════════════════════════════════════════════════════ */

const campingRegions = [
  {
    name: 'Atlantic Coast',
    icon: Wind,
    image: '/images/hero-coastal.webp',
    terrain: 'Sandy beaches, rocky cliffs, coastal plains',
    bestSeason: 'September - May',
    difficulty: 'Easy',
    description:
      'The stretch between Essaouira and Sidi Ifni is a wild camper\'s paradise. Dozens of secluded beaches offer flat ground, ocean views, and spectacular sunsets. Surf towns like Taghazout, Imsouane, and Mirleft have established van life communities with water and supplies nearby.',
    highlights: ['Secluded beach spots', 'Surf community culture', 'Mild year-round temperatures', 'Easy vehicle access'],
  },
  {
    name: 'Sahara Desert',
    icon: Sun,
    image: '/images/hero-sahara-sunrise.webp',
    terrain: 'Sand dunes, rocky hamada, oasis valleys',
    bestSeason: 'October - April',
    difficulty: 'Advanced',
    description:
      'Camping under the stars in the Sahara is a bucket-list experience. The erg regions near Merzouga (Erg Chebbi) and Zagora (Erg Chigaga) offer iconic dune camping. Rocky desert plateaus provide firmer ground for vehicles. Nights are stunningly clear but temperatures drop dramatically. A 4x4 is essential for off-piste exploration.',
    highlights: ['World-class stargazing', 'Iconic sand dune landscapes', 'Berber nomad encounters', 'Complete silence and solitude'],
  },
  {
    name: 'High Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    terrain: 'Mountain valleys, alpine meadows, river gorges',
    bestSeason: 'May - October',
    difficulty: 'Moderate to Advanced',
    description:
      'The High Atlas offers dramatic mountain camping with snow-capped peaks as your backdrop. Camp in valleys near Imlil, along the Tizi n\'Tichka pass, or in the Ourika Valley. Higher elevations are accessible late spring to early autumn. Mountain streams provide fresh water but always filter before drinking.',
    highlights: ['Dramatic mountain scenery', 'Fresh mountain streams', 'Berber village hospitality', 'Cool summer temperatures'],
  },
  {
    name: 'Anti-Atlas',
    icon: Compass,
    image: '/images/art-atlas-mountain-village.webp',
    terrain: 'Granite formations, palm oases, arid valleys',
    bestSeason: 'October - May',
    difficulty: 'Moderate',
    description:
      'The Anti-Atlas around Tafraoute is one of Morocco\'s hidden gems for wild camping. Surreal granite boulder formations, painted rocks, and ancient palm oases create an otherworldly landscape. Fewer tourists than the High Atlas and exceptionally welcoming locals. Roads are paved but quiet.',
    highlights: ['Surreal rock formations', 'Few other tourists', 'Ancient palm oases', 'Painted Rocks of Tafraoute'],
  },
  {
    name: 'Todra & Dades Gorges',
    icon: MapPin,
    image: '/images/hero-dades-valley-road.webp',
    terrain: 'Canyon floors, riverside flats, terraced valleys',
    bestSeason: 'March - November',
    difficulty: 'Moderate',
    description:
      'The dramatic gorges of Todra and Dades offer sheltered camping between towering canyon walls. The Dades Valley road winds through kasbahs and rock formations. Todra Gorge narrows to just 10 meters wide with 300-meter walls. Flat riverbed spots make excellent campsites, but watch for flash flood risk.',
    highlights: ['Towering canyon walls', 'Ancient kasbah ruins', 'Rock climbing opportunities', 'Sheltered from wind'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL GEAR CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const essentialGear = [
  { category: 'Shelter', items: ['3-season tent (freestanding recommended)', 'Groundsheet or footprint', 'Tarp for shade and wind protection', 'Sleeping bag rated to 0°C for mountains'] },
  { category: 'Water & Food', items: ['20L water jerry cans (minimum 2)', 'Water filter or purification tablets', 'Portable gas stove and fuel canisters', 'Cooler box for perishables'] },
  { category: 'Navigation', items: ['Offline GPS maps (Maps.me or OsmAnd)', 'Paper road map as backup', 'Compass', 'Satellite communicator for remote areas'] },
  { category: 'Vehicle', items: ['Full-size spare tire (two for Sahara)', 'Air compressor for tire deflation', 'Tow rope and recovery straps', 'Sand tracks or ladders for soft sand'] },
  { category: 'Safety', items: ['Comprehensive first aid kit', 'Fire extinguisher', 'Headlamp and spare batteries', 'Emergency whistle and mirror'] },
  { category: 'Comfort', items: ['Folding camp chairs and table', 'Solar shower bag (heats in sun)', 'LED lantern for camp lighting', 'Portable toilet for desert camping'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: OVERLANDING ROUTES
   ═══════════════════════════════════════════════════════════════ */

const overlandingRoutes = [
  {
    name: 'Atlantic Coast Run',
    duration: '7-10 days',
    distance: '800 km',
    difficulty: 'Easy',
    vehicle: 'Any vehicle or campervan',
    route: 'Tangier - Asilah - Essaouira - Taghazout - Agadir - Mirleft - Sidi Ifni - Legzira',
    description: 'The classic coastal overlanding route. Paved roads throughout with countless beach pulloffs for overnight stops. Surf towns provide supplies, cafes, and community. Ideal for first-time overlanders.',
  },
  {
    name: 'Sahara Circuit',
    duration: '10-14 days',
    distance: '1,200 km',
    difficulty: 'Advanced',
    vehicle: '4x4 strongly recommended',
    route: 'Marrakech - Ait Benhaddou - Ouarzazate - Todra Gorge - Merzouga - Zagora - Draa Valley - Marrakech',
    description: 'The ultimate Morocco overlanding loop. Crosses the High Atlas via Tizi n\'Tichka, traverses the Sahara edge, and returns through the Draa Valley. Desert tracks require 4x4 capability.',
  },
  {
    name: 'Anti-Atlas Explorer',
    duration: '5-7 days',
    distance: '600 km',
    difficulty: 'Moderate',
    vehicle: '4x4 recommended for side tracks',
    route: 'Agadir - Tiznit - Tafraoute - Igherm - Tata - Foum Zguid - Zagora',
    description: 'Off-the-beaten-path through Morocco\'s most photogenic geological landscapes. Granite boulders, painted rocks, palm oases, and remote Berber villages. Paved main roads with optional off-road detours.',
  },
  {
    name: 'Northern Mountains Loop',
    duration: '5-7 days',
    distance: '500 km',
    difficulty: 'Moderate',
    vehicle: 'Any vehicle (4x4 for mountain tracks)',
    route: 'Fes - Ifrane - Azrou - Midelt - Errachidia - Ziz Gorge - Merzouga',
    description: 'From cedar forests of the Middle Atlas to the Sahara edge. Camp among Barbary macaques in Azrou, beside the Ziz River, and in the dunes of Merzouga. Altitude varies from 500m to 2,000m.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMPSITE VS WILD CAMPING COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const campingComparison = [
  {
    aspect: 'Cost',
    wild: 'Completely free. You only pay for your own supplies, fuel, and food.',
    established: 'From 50 MAD per person per night for basic sites. From 100-200 MAD for sites with hot showers, electricity, and Wi-Fi.',
  },
  {
    aspect: 'Facilities',
    wild: 'No facilities. You need to bring your own water, toilet solution, and waste management. Solar showers or wet wipes for hygiene.',
    established: 'Toilets, showers (sometimes hot), electricity hookups, Wi-Fi at some, communal kitchens, and sometimes a small shop or cafe.',
  },
  {
    aspect: 'Safety',
    wild: 'Generally safe in Morocco, but you are responsible for choosing a secure location. No on-site security or emergency help nearby.',
    established: 'Gated sites with security. Other campers nearby. Staff can help in emergencies. Located near towns with medical facilities.',
  },
  {
    aspect: 'Experience',
    wild: 'Complete freedom and solitude. Wake up to untouched landscapes. True connection with nature. The authentic adventure experience.',
    established: 'Social atmosphere. Meet other travelers. Share tips and stories. More comfortable but less adventurous.',
  },
  {
    aspect: 'Location & Freedom',
    wild: 'You choose your spot. Camp on beaches, in mountains, beside oases, or in the desert. Limited only by access and common sense.',
    established: 'Fixed locations near towns or tourist routes. Convenient but you do not choose your view or neighbors.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LEAVE NO TRACE PRINCIPLES
   ═══════════════════════════════════════════════════════════════ */

const leaveNoTrace = [
  {
    principle: 'Pack Out All Waste',
    icon: Leaf,
    description: 'Carry every piece of trash with you when you leave. This includes food scraps, cigarette butts, and grey water. Morocco\'s wild spaces are pristine because travelers respect them.',
  },
  {
    principle: 'Use Existing Fire Rings',
    icon: Flame,
    description: 'If you make a campfire, use an existing fire ring or a portable fire pit. Never leave a fire unattended. Fully extinguish with water before leaving. In dry seasons, avoid fires entirely.',
  },
  {
    principle: 'Camp on Durable Surfaces',
    icon: Mountain,
    description: 'Pitch your tent on rock, gravel, sand, or dry grass. Avoid delicate vegetation, especially in oases and mountain meadows. Move your vehicle off the road onto established pulloffs.',
  },
  {
    principle: 'Bury Human Waste',
    icon: Compass,
    description: 'Dig a cathole 15-20 cm deep and at least 60 meters from any water source, trail, or campsite. Pack out toilet paper in a sealed bag. Use a portable toilet in the desert where digging is impractical.',
  },
  {
    principle: 'Respect Wildlife',
    icon: Eye,
    description: 'Do not feed animals. Store food securely to avoid attracting wildlife. Watch for scorpions and snakes in desert areas. Keep a safe distance from Barbary macaques in the Middle Atlas.',
  },
  {
    principle: 'Be Considerate of Locals',
    icon: Users,
    description: 'Ask permission before camping near villages or on farmland. Respect local customs and dress modestly. Leave gifts or buy from local shops as a gesture of thanks. Learn a few words of Darija or Tamazight.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    title: 'Flash Floods in Wadis',
    icon: Droplets,
    description: 'Never camp in a dry riverbed (wadi). Flash floods can occur without warning, even if it is sunny where you are. Rain in distant mountains sends walls of water down wadis. Camp on higher ground above the flood line.',
  },
  {
    title: 'Extreme Temperatures',
    icon: Thermometer,
    description: 'Summer Sahara temperatures exceed 45°C during the day. Mountain nights can drop below freezing even in spring. Always carry warm layers and sun protection. Avoid midday desert hiking from June to September.',
  },
  {
    title: 'Wildlife Awareness',
    icon: AlertTriangle,
    description: 'Shake out shoes and check sleeping bags for scorpions in desert areas. North African horned vipers are present but shy. Stray dogs can be territorial. Keep food sealed to avoid attracting wildlife to your camp.',
  },
  {
    title: 'Vehicle Preparation',
    icon: Car,
    description: 'Carry at least two full-size spare tires for Sahara crossings. An air compressor is essential for re-inflating tires after sand driving. Keep fuel above half tank in remote areas. Stations can be 200 km apart in the south.',
  },
  {
    title: 'Communication',
    icon: ShieldCheck,
    description: 'Mobile coverage is surprisingly good along main roads but drops in mountains and deep desert. Carry a satellite communicator for emergencies in truly remote areas. Always tell someone your planned route and expected arrival.',
  },
  {
    title: 'Coastal Winds & Tides',
    icon: Wind,
    description: 'Atlantic coast winds can be fierce, especially around Essaouira and Tarfaya. Secure your tent with heavy-duty stakes or weight it with rocks. Check tide charts before camping on beaches to avoid being caught by rising water.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWildCampingPage() {
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
            backgroundImage: 'url(/images/hero-camping.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Wild Camping in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Tent className="w-4 h-4" />
            Adventure &amp; Outdoors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Wild Camping in Morocco:
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Atlantic coast beaches to Sahara sand dunes and Atlas Mountain valleys.
            Everything you need to know about free camping, overlanding, and van life in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Wild Camper&apos;s Dream
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most accessible and rewarding wild camping destinations in the world.
                With landscapes ranging from Atlantic beaches and cedar forests to volcanic plateaus and
                Saharan sand seas, the country offers an astonishing variety of places to pitch a tent or
                park a van for the night. The climate is mild for much of the year, the people are famously
                hospitable, and the cost of living is low enough to sustain weeks or months on the road.
              </p>
              <p>
                Every year, thousands of overlanders, van lifers, and backpackers descend on Morocco. The surf
                coast between Essaouira and Sidi Ifni hosts a thriving van life community from October to April.
                The Sahara draws desert campers seeking silence and stargazing. The Atlas Mountains offer
                alpine-style camping with Berber village hospitality just a short walk away.
              </p>
              <p>
                This guide covers the legal status of wild camping, the best regions, overlanding routes,
                essential gear, safety considerations, leave no trace principles, and how wild camping compares
                to established campsites. Whether you are planning a weekend bivouac or a month-long overlanding
                expedition, this is your starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Is Wild Camping Legal? ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Is Wild Camping Legal in Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The short answer: it is generally tolerated outside cities, but the full picture is more nuanced.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <CheckCircle className="w-5 h-5 inline mr-2 text-green-600" />
                Where Wild Camping Is Generally Tolerated
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In rural Morocco, wild camping is widely accepted and rarely questioned. Remote beaches, desert
                areas, mountain valleys, and open countryside are all common camping spots. Moroccans have a
                deep tradition of hospitality, and seeing a tent or van parked respectfully on open land is
                not unusual. Locals may approach you out of curiosity or to offer tea and bread, not to ask
                you to move.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                {['Remote beaches and coastal areas', 'Open desert and hamada', 'Mountain valleys and meadows', 'Roadside pulloffs in rural areas'].map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <AlertTriangle className="w-5 h-5 inline mr-2 text-amber-600" />
                Where to Avoid or Ask Permission
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Camping within or near cities and towns is not acceptable. National parks and protected areas
                may have restrictions. Military zones (common near the Algerian border and in Western Sahara)
                are strictly off-limits. Farmland and land near villages should only be used with the owner&apos;s
                permission. When in doubt, ask. A simple &quot;Momkin n-khayym hna?&quot; (Can I camp here?) goes a long way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                {['Cities and urban areas', 'National parks without permits', 'Military and border zones', 'Private farmland (ask first)'].map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                    <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6 bg-blue-50">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-5 h-5 inline mr-2 text-blue-600" />
                Practical Tips for Staying on the Right Side
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Always greet locals and ask if it is okay to camp. Even a simple smile and gesture works.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Arrive late and leave early to minimize your footprint. Set up after sunset and pack up by mid-morning.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Keep your campsite tidy and discreet. A single tent draws less attention than a full campsite setup.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  If police ask you to move, comply politely. They are generally friendly and may suggest a better spot.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Wild Camping Regions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Wild Camping Regions in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five distinct landscapes, each offering a completely different camping experience.
          </p>

          <div className="space-y-8">
            {campingRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.name} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="relative h-64 lg:h-auto lg:col-span-2">
                      <img
                        src={region.image}
                        alt={`Wild camping landscape in the ${region.name} region of Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2">
                          <RegionIcon className="w-5 h-5 text-white" />
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {region.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 lg:col-span-3">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          <Compass className="w-3 h-3" /> {region.difficulty}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          <Clock className="w-3 h-3" /> {region.bestSeason}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-blue-100 text-blue-700">
                          <Mountain className="w-3 h-3" /> {region.terrain}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{region.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {region.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Overlanding Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Overlanding Routes Through Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Four tried-and-tested routes for overlanders, from easy coastal cruises to advanced desert circuits.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Fuel costs approximately 14 MAD per liter. Seasonal pricing and availability may affect fuel prices in remote areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {overlandingRoutes.map((route) => (
              <div key={route.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {route.name}
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Clock className="w-3 h-3" /> {route.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                    <Map className="w-3 h-3" /> {route.distance}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-blue-100 text-blue-700">
                    <Compass className="w-3 h-3" /> {route.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{route.description}</p>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg mb-3">
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Route:</span> {route.route}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <Car className="w-3 h-3 text-[var(--color-accent)]" />
                  <span className="font-medium">{route.vehicle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essential Gear Checklist ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Gear Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring for wild camping in Morocco, organized by category. Do not underestimate the importance of water and navigation gear.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialGear.map((category) => (
              <div key={category.category} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Tent className="w-4 h-4 text-[var(--color-accent)]" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Wild Camping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a safe country, but the outdoors demand respect. Know the risks before you go.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Leave No Trace ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Leave No Trace: Responsible Wild Camping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s wild landscapes are a privilege to camp in. Keep them beautiful for future visitors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaveNoTrace.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.principle} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.principle}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Water & Food Supplies ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water &amp; Food Supplies
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Water is your most critical resource when wild camping. Plan your supply strategy carefully.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Water Sources &amp; Strategy
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Carry a minimum of 5 liters per person per day. In the Sahara, double that. Refill at gas stations,
                village fountains, and municipal taps. Many villages have public water taps (robinet) that are free
                to use. 1.5-liter bottles of mineral water cost from 4 MAD in shops. For long stretches, carry
                20-liter jerry cans and a water filter for natural sources in the mountains.
              </p>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Info className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                  <span className="font-semibold">Pro tip:</span> Mountain streams above 2,000m elevation are generally clean but should still be
                  filtered. Never drink from lowland rivers or wadis without treatment. Boiling or UV purification works alongside filtering.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Food Resupply Points
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Even in remote areas, Morocco has small village shops (hanout) that sell bread, canned goods, eggs,
                vegetables, and cooking gas. Fresh bread is baked daily in most villages from 1.50 MAD per loaf.
                Weekly souks (market days) in towns offer fresh produce, olives, cheese, and dried goods at excellent
                prices. Marjane and Carrefour supermarkets in larger towns are good for bulk stocking.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {[
                  { item: 'Fresh bread (khobz)', price: 'From 1.50 MAD' },
                  { item: 'Eggs (dozen)', price: 'From 15 MAD' },
                  { item: 'Cooking gas canister', price: 'From 15 MAD' },
                  { item: 'Bottled water (1.5L)', price: 'From 4 MAD' },
                ].map((supply, i) => (
                  <div key={i} className="flex items-center justify-between text-xs p-2 bg-[var(--surface-muted)] rounded">
                    <span className="text-[var(--text-secondary)]">{supply.item}</span>
                    <span className="text-[var(--color-accent)] font-semibold">{supply.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campsite vs Wild Camping ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Established Campsites vs. Wild Camping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both have their place. Here is how they compare so you can decide what works best for each leg of your trip.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {campingComparison.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Wild Camping</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.wild}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Tent className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Established Campsite</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.established}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Van Life in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Van Life in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has become one of Europe&apos;s top van life destinations, with a large and growing community of mobile travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Map className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting Your Van to Morocco
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ferries run from Algeciras and Tarifa (Spain) to Tangier Med, taking 1-2 hours. From 700 MAD
                one-way for a van. You can also sail from Sete (France) to Tangier with GNV or from Genoa (Italy).
                Your vehicle registration document, driving license, and green card insurance are required.
                Temporary vehicle import is granted for 6 months.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Monthly Van Life Budget
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A comfortable van life budget in Morocco is from 8,000-12,000 MAD per month (roughly 750-1,100 EUR).
                This covers fuel (from 14 MAD per liter), food from local markets and shops, occasional campsite
                stays, gas refills, and miscellaneous expenses. Wild camping keeps costs low. Eating tagines at
                roadside stops costs from 35-50 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Popular Van Life Hubs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Taghazout (surf and yoga community), Imsouane (laid-back surf village), Mirleft (quiet coastal
                town), Essaouira (wind and culture), and Dakhla (kitesurfing paradise) are the main gathering
                points. Each has its own character and attracts different crowds. Park Ups change from season
                to season as spots become crowded or restricted.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Van Security Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is very safe for van lifers. Park in well-lit areas near other vans when possible. Use
                steering locks and window covers. Avoid leaving valuables visible. In cities, use guarded
                parking lots (gardien) from 20-30 MAD overnight. The biggest risk is petty theft, not violent crime.
                Lock up when away and you will be fine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Wild Camping Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-sunrise.webp"
                alt="Sunrise over the Sahara desert dunes near Merzouga, ideal for wild camping in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Desert Sunrise</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="High Atlas Mountains valley with green terraces perfect for mountain camping"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Valley</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-coastal.webp"
                alt="Moroccan Atlantic coastline with rugged cliffs and sandy beaches for coastal wild camping"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlantic Coast</p>
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
                Is wild camping legal in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Wild camping in Morocco occupies a grey area. There is no specific law banning it outside cities
                and protected areas, and it is generally tolerated in rural and remote locations. However, it is
                always best to ask local permission, avoid military zones, and camp discreetly. In cities and
                towns, camping is not permitted outside designated campsites.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a 4x4 for overlanding in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For basic coastal and main road camping, a standard vehicle or campervan is sufficient. However,
                for Sahara desert tracks, High Atlas mountain passes, and remote Anti-Atlas trails, a 4x4 with
                good ground clearance is strongly recommended. Many overlanders use equipped 4x4s or converted
                vans with off-road capability.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to wild camp in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is generally very safe for wild camping. Moroccans are famously hospitable and it is
                common for locals to check on campers and even invite them for tea. The main risks are
                environmental: flash floods in wadis, extreme heat in summer, cold nights in the mountains,
                and strong coastal winds. Always tell someone your plans and avoid isolated urban areas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does wild camping in Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Wild camping itself is free. Budget around 200-400 MAD per day for food, fuel, and water.
                Established campsites range from 50-150 MAD per night. Fuel costs approximately 14 MAD per liter.
                A full overlanding trip through Morocco can be done on from 300 MAD per day including all expenses.
                Seasonal pricing may affect fuel and campsite costs during peak tourist months.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for wild camping in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                October to April is ideal for the coast and desert. May to October is best for the Atlas
                Mountains when snow melts and passes open. Avoid the Sahara in July and August when temperatures
                exceed 45°C. The Atlantic coast is pleasant year-round but windiest from March to May.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-camping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Camping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Established campsites, glamping options, and campground reviews across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Moon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Desert tours, camel treks, luxury camps, and Sahara survival tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-driving-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Driving Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Road rules, fuel, tolls, mountain passes, and rental car tips for Morocco.
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
                Hiking trails, Berber villages, Toubkal ascent, and mountain adventure planning.
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
