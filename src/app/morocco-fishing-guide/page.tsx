import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Anchor,
  Heart,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Fish,
  Compass,
  Globe,
  Award,
  BookOpen,
  Waves,
  Sun,
  Calendar,
  Mountain,
  Ship,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Fishing Guide 2026 | Deep Sea, Sport Fishing & Best Spots',
  description:
    'Complete guide to fishing in Morocco. Deep sea fishing in Agadir, Dakhla, and Essaouira. Sport fishing charters, Atlas Mountain trout, traditional fishing villages, species to catch, seasons, licensing, and the best fishing spots across Morocco.',
  keywords: [
    'fishing morocco',
    'morocco fishing',
    'deep sea fishing morocco',
    'sport fishing morocco',
    'fishing in morocco',
    'fishing spots morocco',
    'Dakhla fishing',
    'Agadir fishing charter',
    'Essaouira fishing port',
    'Morocco trout fishing',
    'Atlas Mountains fishing',
    'Bin el Ouidane fishing',
    'Morocco fishing license',
    'Morocco fishing seasons',
    'tuna fishing morocco',
    'swordfish morocco',
    'barracuda morocco',
    'dorado fishing morocco',
    'Morocco fishing tours',
    'Morocco fishing charter prices',
    'sport fishing Dakhla',
    'river fishing Morocco',
  ],
  openGraph: {
    title: 'Morocco Fishing Guide 2026 | Deep Sea, Sport Fishing & Best Spots',
    description:
      'Discover Morocco\'s world-class fishing. From deep sea charters off Dakhla and Agadir to Atlas Mountain trout streams. Complete guide with seasons, species, prices, and the best fishing spots.',
    url: `${BASE_URL}/morocco-fishing-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira-port.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional fishing boats in a Moroccan harbor with colorful vessels and Atlantic coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Fishing Guide 2026 | Deep Sea, Sport Fishing & Best Spots',
    description:
      'From deep sea charters off Dakhla to Atlas Mountain trout streams. Complete guide to fishing in Morocco with species, seasons, prices, and the best spots.',
    images: [`${BASE_URL}/images/hero-essaouira-port.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-fishing-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-fishing-guide`,
  name: 'Morocco Fishing Guide 2026 | Deep Sea, Sport Fishing & Best Spots',
  description:
    'Complete guide to fishing in Morocco. Deep sea fishing in Agadir, Dakhla, and Essaouira. Sport fishing charters, Atlas Mountain trout, species to catch, seasons, licensing, and the best fishing spots.',
  url: `${BASE_URL}/morocco-fishing-guide`,
  image: `${BASE_URL}/images/hero-essaouira-port.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-fishing-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Fishing Guide', item: `${BASE_URL}/morocco-fishing-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a license to fish in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Freshwater fishing in Morocco requires a license from the Haut Commissariat aux Eaux et Forets. Licenses cost from 200 MAD per year for residents and from 500 MAD for tourists. Sea fishing from shore generally does not require a license, but fishing from a charter boat is covered by the operator\'s commercial permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for deep sea fishing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The peak season for deep sea fishing in Morocco is May through October. Bluefin tuna run from June to September, swordfish from July to November, and dorado from April to October. Dakhla offers year-round fishing due to its southern location and warm waters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best sport fishing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dakhla is widely considered the sport fishing capital of Morocco and one of the best in Africa. Its waters are rich in yellowfin tuna, wahoo, barracuda, and dorado. Agadir is the most popular deep sea fishing destination on the Atlantic coast, and Essaouira offers excellent coastal fishing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I catch trout in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The rivers and streams of the Middle and High Atlas Mountains are home to brown trout and rainbow trout. The best trout fishing is found around Azrou, Ifrane, and the Oum er-Rbia river system. The season runs from March to September.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a deep sea fishing charter cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deep sea fishing charters in Morocco start from 3,000 MAD for a half-day trip (4 hours) for up to 4 people. Full-day charters run from 5,500 MAD. Premium sport fishing trips in Dakhla targeting big game species start from 8,000 MAD per day. Prices vary by season and operator.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP FISHING DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const topFishingSpots = [
  {
    rank: 1,
    name: 'Dakhla',
    region: 'Southern Morocco',
    type: 'Sport Fishing Capital',
    icon: Award,
    price: 'From 8,000 MAD per charter day',
    description:
      'The undisputed sport fishing capital of Morocco and one of Africa\'s premier destinations. Dakhla\'s bay and open Atlantic waters host an extraordinary abundance of pelagic species. The warm Canary Current brings nutrient-rich waters that sustain massive schools of fish year-round. International fishing tournaments are held here annually.',
    species: ['Yellowfin Tuna', 'Wahoo', 'Barracuda', 'Dorado (Mahi-Mahi)', 'Corvina', 'Meagre'],
  },
  {
    rank: 2,
    name: 'Agadir',
    region: 'Souss-Massa',
    type: 'Deep Sea Fishing Hub',
    icon: Anchor,
    price: 'From 3,500 MAD per half-day charter',
    description:
      'Morocco\'s most accessible deep sea fishing destination. Agadir\'s modern marina hosts dozens of charter operators running half-day and full-day trips. The continental shelf drops off steeply just 20 km offshore, creating ideal conditions for big game species. The fishing port is Morocco\'s largest, landing over 300,000 tonnes of fish annually.',
    species: ['Bluefin Tuna', 'Swordfish', 'Blue Marlin', 'Dorado', 'Amberjack', 'Grouper'],
  },
  {
    rank: 3,
    name: 'Essaouira',
    region: 'Atlantic Coast',
    type: 'Coastal & Port Fishing',
    icon: Ship,
    price: 'From 2,000 MAD per half-day',
    description:
      'Essaouira\'s historic fishing port is one of Morocco\'s most iconic and photogenic harbors. The town\'s entire identity is wrapped in fishing heritage, with blue wooden boats departing at dawn daily. Visitors can join local fishermen for coastal trips or book sport fishing excursions. The sardine catch here feeds much of Morocco.',
    species: ['Sea Bass', 'Sea Bream', 'Sardines', 'Mackerel', 'Conger Eel', 'Octopus'],
  },
  {
    rank: 4,
    name: 'Tan-Tan & Tarfaya',
    region: 'Southern Atlantic Coast',
    type: 'Remote Shore & Boat Fishing',
    icon: Compass,
    price: 'From 3,000 MAD per charter day',
    description:
      'The wild, sparsely populated coastline between Tan-Tan and Tarfaya offers some of Morocco\'s most untouched fishing grounds. Shore fishing here is excellent, with massive corvina and meagre caught from the beaches. The lack of commercial pressure means fish populations remain healthy and sizes are impressive.',
    species: ['Corvina', 'Meagre', 'Ray', 'Shark', 'Sea Bass', 'Grouper'],
  },
  {
    rank: 5,
    name: 'Bin el Ouidane',
    region: 'Middle Atlas',
    type: 'Lake & Freshwater Fishing',
    icon: Mountain,
    price: 'From 500 MAD per guided day',
    description:
      'Morocco\'s most famous freshwater fishing destination. This large reservoir nestled in the Atlas Mountains is stocked with black bass, pike, and carp. The scenery is stunning, with red cliffs rising from turquoise waters. Local guides know the best spots and can arrange boat rentals for reaching the deeper sections.',
    species: ['Black Bass', 'Northern Pike', 'Carp', 'Roach', 'Zander', 'Barbel'],
  },
  {
    rank: 6,
    name: 'Ifrane & Azrou',
    region: 'Middle Atlas',
    type: 'Trout Fly Fishing',
    icon: Fish,
    price: 'From 800 MAD per guided day',
    description:
      'The cedar forests around Ifrane and Azrou hide crystal-clear streams that are home to wild brown trout and stocked rainbow trout. This is Morocco\'s premier fly fishing destination, and the landscape feels more like Switzerland than North Africa. The Oum er-Rbia and its tributaries offer the finest trout fishing in the country.',
    species: ['Brown Trout', 'Rainbow Trout', 'Barbel', 'Chub'],
  },
  {
    rank: 7,
    name: 'Nador & Al Hoceima',
    region: 'Mediterranean Coast',
    type: 'Mediterranean Fishing',
    icon: Waves,
    price: 'From 2,500 MAD per charter day',
    description:
      'Morocco\'s Mediterranean coast offers different species from the Atlantic side. The warm, calm waters around Nador and Al Hoceima are excellent for bottom fishing, jigging, and trolling. The marine reserves near Al Hoceima National Park have helped maintain healthy fish stocks, and the catches here can be exceptional.',
    species: ['Bluefin Tuna', 'Dentex', 'Grouper', 'Red Snapper', 'Amberjack', 'Swordfish'],
  },
  {
    rank: 8,
    name: 'Moulay Bousselham',
    region: 'North Atlantic Coast',
    type: 'Lagoon & Estuary Fishing',
    icon: Waves,
    price: 'From 300 MAD per boat trip',
    description:
      'The Merja Zerga lagoon at Moulay Bousselham is a Ramsar wetland site where the ocean meets a vast coastal lagoon. The mixing of salt and fresh water creates a nursery for dozens of fish species. Fishing from small wooden boats in the lagoon is a peaceful, affordable experience. Also a world-class birdwatching site.',
    species: ['Sea Bass', 'Mullet', 'Sole', 'Eel', 'Shrimp', 'Flounder'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPECIES GUIDE
   ═══════════════════════════════════════════════════════════════ */

const speciesGuide = [
  {
    name: 'Bluefin Tuna', icon: Fish, season: 'June - September',
    locations: 'Agadir, Mediterranean coast', weight: 'From 30 kg to 300+ kg',
    description: 'The king of game fish. Morocco\'s waters host both Atlantic bluefin and yellowfin tuna. The migration passes close to the Moroccan coast from June through September, with the largest specimens caught off Agadir and Nador.',
  },
  {
    name: 'Swordfish', icon: Fish, season: 'July - November',
    locations: 'Agadir, Dakhla, deep Atlantic', weight: 'From 50 kg to 200+ kg',
    description: 'A prized deep-water species beyond the continental shelf. Night fishing with squid bait or live mackerel is the traditional method. The Moroccan swordfish fishery is one of the most productive in the Atlantic.',
  },
  {
    name: 'Dorado (Mahi-Mahi)', icon: Fish, season: 'April - October',
    locations: 'Dakhla, Agadir, southern coast', weight: 'From 5 kg to 25 kg',
    description: 'One of the most exciting fish to catch on light tackle. Dorado are aggressive, acrobatic fighters that leap spectacularly when hooked. Abundant off southern Morocco, especially around Dakhla where they congregate under floating debris.',
  },
  {
    name: 'Barracuda', icon: Fish, season: 'Year-round (peak: May - Oct)',
    locations: 'Dakhla, Essaouira, southern coast', weight: 'From 3 kg to 20 kg',
    description: 'Fast, aggressive predators found along the entire Moroccan coast. Great barracuda reach impressive sizes in warm southern waters. They strike trolled lures and live bait with explosive force from rocky points and jetties.',
  },
  {
    name: 'Brown Trout', icon: Fish, season: 'March - September',
    locations: 'Middle Atlas rivers, Ifrane, Azrou', weight: 'From 0.5 kg to 3 kg',
    description: 'Wild brown trout thrive in cold, clear Atlas streams. Originally introduced during the French Protectorate, they have naturalized in many river systems. Fly fishing with dry flies and nymphs is the preferred method in the cedar forests between Ifrane and Azrou.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FISHING SEASONS TABLE
   ═══════════════════════════════════════════════════════════════ */

const fishingSeasons = [
  { species: 'Bluefin Tuna', jan: false, feb: false, mar: false, apr: false, may: true, jun: true, jul: true, aug: true, sep: true, oct: false, nov: false, dec: false },
  { species: 'Swordfish', jan: false, feb: false, mar: false, apr: false, may: false, jun: false, jul: true, aug: true, sep: true, oct: true, nov: true, dec: false },
  { species: 'Dorado', jan: false, feb: false, mar: false, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: false, dec: false },
  { species: 'Barracuda', jan: false, feb: false, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: false, dec: false },
  { species: 'Sea Bass', jan: true, feb: true, mar: true, apr: true, may: true, jun: false, jul: false, aug: false, sep: true, oct: true, nov: true, dec: true },
  { species: 'Brown Trout', jan: false, feb: false, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: false, nov: false, dec: false },
  { species: 'Corvina', jan: true, feb: true, mar: true, apr: true, may: true, jun: true, jul: true, aug: true, sep: true, oct: true, nov: true, dec: true },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHARTER PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const charterPrices = [
  { service: 'Shore fishing guide (full day)', price: 'From 500 MAD', note: 'Guide, local knowledge, basic equipment' },
  { service: 'Lagoon/estuary boat trip', price: 'From 300 MAD', note: 'Small wooden boat, 3-4 hours' },
  { service: 'Coastal fishing trip (half day)', price: 'From 2,000 MAD', note: '4 hours, up to 4 people, equipment' },
  { service: 'Deep sea charter (half day)', price: 'From 3,500 MAD', note: '4-5 hours, trolling & bottom fishing' },
  { service: 'Deep sea charter (full day)', price: 'From 5,500 MAD', note: '8 hours, lunch, all equipment' },
  { service: 'Sport fishing Dakhla (full day)', price: 'From 8,000 MAD', note: 'Premium boat, big game targeting' },
  { service: 'Fly fishing guide (Atlas rivers)', price: 'From 800 MAD', note: 'Full day, transport, equipment' },
  { service: 'Lake fishing (Bin el Ouidane)', price: 'From 500 MAD', note: 'Full day, boat extra from 200 MAD' },
  { service: 'Multi-day package (Dakhla)', price: 'From 25,000 MAD', note: '3 nights, 2 days fishing, hotel' },
  { service: 'Freshwater license (tourist)', price: 'From 500 MAD', note: 'Annual permit, Eaux et Forets' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL FISHING VILLAGES
   ═══════════════════════════════════════════════════════════════ */

const fishingVillages = [
  {
    name: 'Essaouira Port',
    region: 'Atlantic Coast',
    icon: Ship,
    description: 'Essaouira\'s fishing port is the heart of the town. Each morning, dozens of blue wooden boats return laden with sardines, sea bream, and octopus. The port auction is organized chaos, and the grill restaurants along the harbor serve the freshest fish in Morocco.',
    highlight: 'Visit the port at 6:00 AM to watch the catch come in and the auction begin.',
  },
  {
    name: 'Taghazout',
    region: 'North of Agadir',
    icon: Waves,
    description: 'Known as a surf village, Taghazout remains a working fishing village at its core. Fishermen launch from the beach each morning, pulling boats up the sand by hand. The village fish market sells the daily catch at rock-bottom prices. Grilled sardines cost from 30 MAD.',
    highlight: 'Combine surfing and fishing: join a fisherman at dawn, surf the afternoon breaks.',
  },
  {
    name: 'Imessouane',
    region: 'Between Agadir & Essaouira',
    icon: Anchor,
    description: 'A tiny fishing hamlet on a rocky headland where fishermen have worked the same waters for generations. The sheltered bay harbors a colorful fleet of small boats. Simple restaurants grill whatever was caught that morning. An authentic, untouched glimpse of Moroccan coastal life.',
    highlight: 'One of Morocco\'s best-kept secrets for fresh, cheap seafood straight from boat to grill.',
  },
  {
    name: 'Moulay Bousselham',
    region: 'North Atlantic Coast',
    icon: Waves,
    description: 'A lagoon fishing village where traditional techniques have been passed down for generations. Fishermen navigate the shallow Merja Zerga lagoon in flat-bottomed boats, setting nets for mullet, sole, and eel. A small but lively fish market opens each afternoon.',
    highlight: 'Take a boat trip to see fishing and birdwatching in the Ramsar wetland lagoon.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESPONSIBLE FISHING PRACTICES
   ═══════════════════════════════════════════════════════════════ */

const responsiblePractices = [
  { rule: 'Respect Size Limits', icon: ShieldCheck, description: 'Morocco enforces minimum size limits for most species. Undersized fish must be returned alive. Common limits include 30 cm for sea bass and 70 cm for bluefin tuna.' },
  { rule: 'Practice Catch and Release', icon: Heart, description: 'For sport fishing, consider releasing large breeding fish. Use barbless hooks, handle fish with wet hands to protect their slime coat, and support them in the water until they swim away strongly.' },
  { rule: 'Use Licensed Operators', icon: BookOpen, description: 'Only fish with licensed charter operators holding valid commercial permits. Unlicensed operators may fish in restricted areas or lack safety equipment. Ask to see permits before booking.' },
  { rule: 'Avoid Spawning Seasons', icon: Calendar, description: 'Many species have protected spawning periods when fishing is restricted. Trout season closes October to February. Your guide should be aware of all seasonal closures.' },
  { rule: 'Take Litter with You', icon: Globe, description: 'Remove all fishing line, hooks, bait packaging, and litter from fishing sites. Discarded fishing line is lethal to seabirds and marine mammals. Leave every spot cleaner than you found it.' },
  { rule: 'Respect Marine Reserves', icon: AlertTriangle, description: 'Morocco has several marine protected areas where fishing is restricted, including zones around Al Hoceima National Park and Dakhla Bay. Fishing inside reserves carries heavy fines.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFishingGuidePage() {
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
            backgroundImage: 'url(/images/hero-essaouira-port.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Fishing Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Fish className="w-4 h-4" />
            Fishing &amp; Angling
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Fishing Guide:
            <br className="hidden md:block" /> Deep Sea, Sport &amp; River Fishing
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From world-class sport fishing off Dakhla to fly fishing for trout in Atlas Mountain streams.
            Your complete guide to fishing across 3,500 km of coastline and beyond.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Fishing Destination Like No Other
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of the Atlantic Ocean and the Mediterranean Sea, with over
                3,500 km of coastline that ranks among the most productive fishing waters in the world.
                The cold Canary Current sweeps nutrient-rich water up from the deep Atlantic, fueling one of
                the planet&apos;s great marine ecosystems. This is why Morocco is Africa&apos;s largest fish exporter and
                why its waters attract anglers from across the globe.
              </p>
              <p>
                But Morocco&apos;s fishing story goes far beyond the ocean. Inland, the Atlas Mountains hide
                cold, clear rivers where brown trout rise to dry flies in cedar-forested valleys that feel a
                world away from the desert and souks. Vast reservoirs like Bin el Ouidane offer black bass
                and pike fishing that rivals European destinations at a fraction of the cost.
              </p>
              <p>
                Whether you want to battle a bluefin tuna off Agadir, cast flies for trout in an Atlas
                stream, or join a local fisherman on a wooden boat at dawn in Essaouira, Morocco delivers
                fishing experiences as diverse as the country itself. And the best part: it remains largely
                undiscovered by the international fishing community, meaning less pressure and more fish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Charter Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fishing Charter &amp; Tour Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for fishing experiences across Morocco, from shore guides to premium sport fishing charters.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak fishing months (June-September) when charter rates may increase by 20-40%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Details</div>
              </div>
              {charterPrices.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Fishing Destinations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 8 Fishing Destinations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the sport fishing mecca of Dakhla to the trout streams of the Atlas Mountains, these are Morocco&apos;s finest fishing spots.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and vary by season, operator, and group size.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topFishingSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{spot.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {spot.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <SpotIcon className="w-3.5 h-3.5" />
                          {spot.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {spot.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{spot.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {spot.species.map((species, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {species}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Species Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Species Guide: What You Can Catch
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s waters are home to an extraordinary diversity of game fish. Here are the top species that attract anglers to the Kingdom.
          </p>

          <div className="space-y-6">
            {speciesGuide.map((species) => {
              const SpeciesIcon = species.icon;
              return (
                <div key={species.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpeciesIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {species.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[var(--color-gold)]" />
                          {species.season}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                          {species.locations}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-[var(--color-gold)]" />
                          {species.weight}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{species.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fishing Seasons Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fishing Seasons Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Plan your trip around the best fishing months for your target species. Green indicates peak season for each species.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 px-4 text-left font-medium">Species</th>
                    {months.map((m) => (
                      <th key={m} className="p-2 text-center font-medium text-xs">{m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fishingSeasons.map((row, i) => (
                    <tr key={row.species} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 px-4 font-medium text-[var(--text-primary)] whitespace-nowrap">{row.species}</td>
                      {[row.jan, row.feb, row.mar, row.apr, row.may, row.jun, row.jul, row.aug, row.sep, row.oct, row.nov, row.dec].map((active, j) => (
                        <td key={j} className="p-2 text-center">
                          {active ? (
                            <span className="inline-block w-6 h-6 rounded-full bg-green-500/20 text-green-700 text-xs leading-6">
                              <CheckCircle className="w-3.5 h-3.5 inline" />
                            </span>
                          ) : (
                            <span className="text-[var(--text-muted)] text-xs">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Fishing Villages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Fishing Villages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s fishing villages offer an authentic window into centuries-old maritime traditions. Visit for the culture, stay for the freshest seafood you have ever tasted.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {fishingVillages.map((village) => {
              const VillageIcon = village.icon;
              return (
                <div key={village.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <VillageIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {village.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {village.region}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{village.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {village.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tackle & Equipment ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tackle &amp; Equipment Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring and what you can rent or buy locally. Most charter operators provide all equipment, but here is what to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Ship className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Deep Sea Charters
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                All reputable charter operators provide heavy trolling rods, reels, tackle, and bait.
                Premium charters in Dakhla and Agadir use Penn, Shimano, and Daiwa gear. Ask about
                equipment when booking. Bring your own polarized sunglasses and a hat.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Fish className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fly Fishing (Atlas Rivers)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bring your own fly rod if serious about trout fishing. A 9-foot 5-weight rod covers
                most Atlas situations. Useful flies include Adams, Elk Hair Caddis, and Pheasant Tail
                nymphs in sizes 14-18. Wading boots with felt soles are recommended.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Waves className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Shore Fishing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For beach and rock fishing, a medium-heavy spinning rod of 2.4-3.0 meters with a 4000-5000
                size reel is ideal. Live bait (sardines, shrimp) works best. Tackle shops exist in Agadir,
                Casablanca, and Essaouira. Basic gear starts from 300 MAD for a rod-and-reel combo.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Essential Accessories
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Polarized sunglasses are essential for all fishing in Morocco. Sun protection is critical:
                high-SPF sunscreen, a wide-brimmed hat, and UV-protective long sleeves. For boat trips,
                bring seasickness medication if prone. A cooler bag keeps your catch fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Licensing & Regulations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Licensing &amp; Regulations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Morocco&apos;s fishing regulations ensures a legal and sustainable fishing experience.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Sea Fishing
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Recreational fishing from the shore in Morocco does not generally require a license for personal
                consumption. However, fishing from a boat requires the operator to hold a commercial fishing
                permit. When you book a charter, the operator&apos;s license covers your activity. Spearfishing
                requires a separate permit and is restricted in certain marine areas.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  Charter permits: covered by operator
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[var(--color-accent)]" />
                  Shore fishing: no license needed
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Freshwater Fishing
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                All freshwater fishing in Morocco requires a license issued by the Haut Commissariat aux Eaux et
                Forets (High Commission for Water and Forests). Tourist licenses are available for one year and
                cost from 500 MAD. Apply at regional Eaux et Forets offices in cities near fishing areas, such as
                Ifrane, Beni Mellal, or Azrou. Bring your passport and two photos. Processing takes 1-3 days.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  Tourist license: from 500 MAD/year
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                  Processing: 1-3 business days
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Closed Seasons &amp; Protected Areas
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trout fishing is closed October through February to protect spawning. Bass and pike seasons
                are closed during spring spawning (dates vary by region). Several marine areas have no-fishing
                zones, including parts of Al Hoceima National Park and the Dakhla Bay sanctuary. Heavy fines
                apply for violations, and confiscation of equipment is common.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-[var(--color-accent)]" />
                  Fines: from 5,000 MAD for violations
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                  Trout closed: October - February
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Responsible Fishing ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Responsible Fishing in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Protect Morocco&apos;s incredible marine and freshwater ecosystems so future generations of anglers can enjoy them too.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsiblePractices.map((practice) => {
              const PracticeIcon = practice.icon;
              return (
                <div key={practice.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <PracticeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {practice.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{practice.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Anglers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Visit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The peak fishing season runs from May to October for most sea species. Trout fishing is best
                from March to June when rivers are well-fed from snowmelt. Dakhla offers excellent fishing
                year-round thanks to its southern latitude. Avoid the Atlantic coast in January-February when
                storms can make boat trips difficult.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Weather &amp; Conditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Atlantic conditions can be rough, especially in winter. Check marine forecasts before booking.
                Summer water temperatures range from 18-22 degrees Celsius on the Atlantic to 24-27 degrees on the
                Mediterranean. Atlas rivers run coldest in spring (snowmelt) and may dry up in late summer.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Charter Operators
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book at least 1-2 weeks in advance during peak season (June-September). Verify the operator
                has valid licenses and safety equipment. Ask about the boat, the captain&apos;s experience, and what
                equipment is provided. Payment is typically 50% deposit, balance on the day. Seasonal pricing
                can change, so confirm rates at the time of booking.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting Your Catch Home
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most charter operators will fillet and pack your catch for you. For short trips, a cooler
                bag with ice keeps fish fresh for the drive back. Many hotels and riads will gladly cook your
                catch for you. Exporting fish from Morocco requires customs documentation and is generally not
                practical for tourists.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tipping is customary in Morocco. For fishing guides and charter crews, a tip of from 100-200 MAD
                per person is appreciated for good service. For exceptional experiences or when the crew goes
                above and beyond, from 300-500 MAD is generous. Tips are typically given in cash at the end
                of the trip.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety on the Water
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ensure your charter provides life jackets for all passengers. Check weather forecasts before
                departure. Carry a fully charged phone. For shore fishing on rocky coastlines, wear sturdy
                shoes with grip and be aware of tidal movements. The Atlantic coast has powerful waves and
                strong currents.
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a license to fish in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For sea fishing from shore, no license is generally required. For freshwater fishing, you need
                a license from the Haut Commissariat aux Eaux et Forets (from 500 MAD for tourists). Charter
                operators&apos; commercial permits cover your activity. Always check current regulations.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for deep sea fishing in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The peak season runs May through October. Bluefin tuna are active June to September, swordfish
                July to November, and dorado April to October. Dakhla offers year-round sport fishing due to
                warm southern waters. Winter can bring rough Atlantic conditions limiting boat trips.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where is the best sport fishing in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Dakhla is the sport fishing capital of Morocco and one of Africa&apos;s best destinations, with
                yellowfin tuna, wahoo, barracuda, and dorado. Agadir is the most accessible deep sea port
                with the largest selection of charters. For freshwater, Bin el Ouidane offers outstanding bass.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I catch trout in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. The cold, clear rivers of the Middle and High Atlas support brown trout and rainbow trout.
                The best fishing is around Ifrane and Azrou in the Oum er-Rbia system. Season runs March to
                September. A freshwater license (from 500 MAD) is required, and fly fishing is most effective.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a deep sea fishing charter cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Half-day coastal trips start from 2,000 MAD. Deep sea charters run from 3,500 MAD (half day)
                to from 5,500 MAD (full day). Premium sport fishing in Dakhla starts from 8,000 MAD per day.
                Multi-day packages from 25,000 MAD. Seasonal pricing applies, with June-September highest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/dakhla-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Dakhla Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s sport fishing capital, its desert bay, kitesurfing, and Saharan adventures.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Ship className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Essaouira&apos;s iconic fishing port, medina, beaches, and coastal culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-outdoor-activities" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Outdoor Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, surfing, climbing, and more outdoor adventures across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-beaches-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Beaches Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s best beaches along the Atlantic and Mediterranean coasts.
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
