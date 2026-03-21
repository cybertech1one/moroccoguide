import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Waves,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Award,
  BookOpen,
  Eye,
  Compass,
  Anchor,
  Fish,
  Calendar,
  Heart,
  Globe,
  Navigation,
  Droplets,
  Sun,
  Wind,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Diving & Snorkeling Guide 2026 | Best Dive Sites, PADI Centers & Marine Life',
  description:
    'Complete guide to scuba diving and snorkeling in Morocco. Explore Al Hoceima marine park, Cap Spartel, Essaouira, and Dakhla dive sites. PADI centers, wreck dives, reef diving, marine life, dive seasons, water temperatures, and safety tips.',
  keywords: [
    'Morocco diving guide',
    'scuba diving Morocco',
    'snorkeling Morocco',
    'Al Hoceima diving',
    'Cap Spartel dive sites',
    'Dakhla diving',
    'Morocco PADI centers',
    'Mediterranean diving Morocco',
    'Atlantic diving Morocco',
    'Morocco marine life',
    'wreck diving Morocco',
    'Morocco dive seasons',
    'Morocco underwater',
    'reef diving Morocco',
    'Essaouira snorkeling',
    'Morocco sea turtles',
    'Morocco dolphins diving',
    'best dive sites Morocco',
    'Morocco dive prices 2026',
    'Morocco water sports',
    'Morocco dive certification',
    'Morocco coral reefs',
  ],
  openGraph: {
    title: 'Morocco Diving & Snorkeling Guide 2026 | Best Dive Sites, PADI Centers & Marine Life',
    description:
      'Discover Morocco\'s underwater world. From Al Hoceima\'s Mediterranean marine park to Dakhla\'s Atlantic kelp forests. Complete guide with dive sites, PADI centers, marine life, and prices.',
    url: `${BASE_URL}/morocco-diving-snorkeling`,
    images: [
      {
        url: `${BASE_URL}/images/hero-diving.webp`,
        width: 1200,
        height: 630,
        alt: 'Scuba diver exploring a colorful underwater reef off the Moroccan coast with sunlight filtering through blue water',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Diving & Snorkeling Guide 2026 | Best Dive Sites & Marine Life',
    description:
      'From Mediterranean marine parks to Atlantic wreck dives. Complete guide to Morocco\'s best diving and snorkeling with PADI centers, prices, and seasonal tips.',
    images: [`${BASE_URL}/images/hero-diving.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-diving-snorkeling` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-diving-snorkeling`,
  name: 'Morocco Diving & Snorkeling Guide 2026 | Best Dive Sites, PADI Centers & Marine Life',
  description:
    'Complete guide to scuba diving and snorkeling in Morocco. Explore Al Hoceima marine park, Cap Spartel, Essaouira, and Dakhla. PADI centers, wreck dives, marine life, dive seasons, and safety.',
  url: `${BASE_URL}/morocco-diving-snorkeling`,
  image: `${BASE_URL}/images/hero-diving.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-diving-snorkeling`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Diving & Snorkeling Guide', item: `${BASE_URL}/morocco-diving-snorkeling` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time of year to dive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Mediterranean coast (Al Hoceima, Cap Spartel) is best from June to October when water temperatures reach 20-24°C and visibility peaks at 15-25 meters. The Atlantic coast around Dakhla offers year-round diving with consistent conditions, while Essaouira and Agadir are best from July to September.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a diving certification to dive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for scuba diving you need at least a PADI Open Water or equivalent certification. Many PADI centers in Morocco offer courses from beginner Discover Scuba Diving experiences (no certification needed) up to Divemaster level. Snorkeling requires no certification.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does scuba diving cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single guided dive with full equipment rental costs from 500 MAD. PADI Open Water certification courses start from 3,500 MAD. Discover Scuba Diving experiences cost from 600 MAD. Snorkeling gear rental starts from 100 MAD per day. Seasonal pricing may apply during peak summer months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What marine life can I see while diving in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco\'s waters host diverse marine life including bottlenose dolphins, loggerhead and leatherback sea turtles, common octopus, barracuda, moray eels, grouper, and various ray species. The Al Hoceima marine park has Posidonia seagrass meadows, while Dakhla features Atlantic kelp forests and occasional whale sightings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to dive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, diving in Morocco is safe when done through reputable PADI or SSI-certified dive centers. The main considerations are Atlantic currents (which can be strong), water temperature (a wetsuit is essential year-round), and limited decompression chamber access outside Casablanca and Tangier. Always dive within your certification limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best snorkeling in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best snorkeling spots are around Al Hoceima (Cala Iris, Badis beach) on the Mediterranean coast, where clear waters and rocky coves provide excellent visibility. Cap Spartel near Tangier and the rocky coastline near Sidi Ifni on the Atlantic also offer good snorkeling when conditions are calm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there wreck dives in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Strait of Gibraltar area has several wreck sites from centuries of maritime traffic. Notable wrecks include cargo vessels near Cap Spartel and historical wrecks around Mehdia. Most wreck dives require Advanced Open Water certification due to depths of 25-40 meters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I go diving in Morocco during winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but conditions vary by coast. The Atlantic around Dakhla offers year-round diving with water temperatures of 17-21°C. The Mediterranean coast is too cold and rough for comfortable diving from November to April. Winter diving on the Atlantic requires a 5-7mm wetsuit and is best suited to experienced divers.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP DIVE SITES
   ═══════════════════════════════════════════════════════════════ */

const topDiveSites = [
  {
    rank: 1,
    name: 'Al Hoceima National Park',
    region: 'Mediterranean Coast',
    coast: 'Mediterranean',
    icon: Award,
    depth: '5-30m',
    level: 'All Levels',
    description:
      'Morocco\'s premier marine destination. This national park protects 19,000 hectares of Mediterranean coastline with Posidonia seagrass meadows, rocky reefs, and volcanic formations. The underwater landscape features caves, swim-throughs, and walls teeming with grouper, barracuda, and octopus.',
    highlights: ['Posidonia seagrass meadows', 'Volcanic rock formations', 'Dolphin encounters', 'Crystal-clear visibility up to 25m'],
    marineLife: ['Grouper', 'Barracuda', 'Octopus', 'Moray eels', 'Dolphins'],
  },
  {
    rank: 2,
    name: 'Cap Spartel',
    region: 'Tangier Region',
    coast: 'Atlantic/Mediterranean',
    icon: Compass,
    depth: '10-35m',
    level: 'Intermediate to Advanced',
    description:
      'Where the Atlantic meets the Mediterranean. This dramatic headland offers unique diving at the confluence of two bodies of water. Strong currents bring nutrient-rich waters that attract large pelagic species. The Caves of Hercules nearby provide sheltered dive options with rocky seabed carpeted in sponges and anemones.',
    highlights: ['Two-ocean confluence', 'Strong current drift dives', 'Caves of Hercules area', 'Large pelagic species'],
    marineLife: ['Tuna', 'Amberjack', 'Stingrays', 'Sea bream', 'Nudibranchs'],
  },
  {
    rank: 3,
    name: 'Dakhla Peninsula',
    region: 'Southern Atlantic',
    coast: 'Atlantic',
    icon: Globe,
    depth: '8-25m',
    level: 'Intermediate',
    description:
      'A remote diving frontier on Morocco\'s deep south Atlantic coast. The Dakhla lagoon and surrounding waters offer Atlantic kelp forests, sandy plateaus, and rocky outcrops. The nutrient-rich Canary Current draws large marine life, and the relative isolation means underwater ecosystems are largely undisturbed. Seasonal whale migrations pass through December to March.',
    highlights: ['Atlantic kelp forests', 'Seasonal whale watching', 'Pristine undisturbed reefs', 'Year-round diving'],
    marineLife: ['Sea turtles', 'Rays', 'Dolphins', 'Seasonal whales', 'Lobster'],
  },
  {
    rank: 4,
    name: 'Cala Iris',
    region: 'Al Hoceima Province',
    coast: 'Mediterranean',
    icon: Star,
    depth: '5-20m',
    level: 'Beginner to Intermediate',
    description:
      'A sheltered cove with some of the clearest water in Morocco. The rocky coastline creates a series of small bays ideal for both snorkeling and shallow diving. The seabed is a mosaic of sand, rock, and seagrass supporting a rich ecosystem.',
    highlights: ['Crystal-clear sheltered coves', 'Excellent snorkeling', 'Shallow reef diving', 'Historical islet nearby'],
    marineLife: ['Wrasse', 'Sea bream', 'Starfish', 'Seahorses', 'Cuttlefish'],
  },
  {
    rank: 5,
    name: 'Essaouira Coast',
    region: 'Central Atlantic',
    coast: 'Atlantic',
    icon: Wind,
    depth: '6-18m',
    level: 'Intermediate',
    description:
      'Better known for wind sports, Essaouira also offers rewarding dives for those willing to brave the Atlantic swell. The rocky coastline south of the city features kelp-draped boulders, sandy channels, and an abundance of Atlantic species. The Iles Purpuraires (Purple Islands) offshore are a protected bird sanctuary with productive surrounding waters.',
    highlights: ['Iles Purpuraires marine area', 'Kelp forest diving', 'Rich Atlantic biodiversity', 'Combine with windsurfing'],
    marineLife: ['Octopus', 'Conger eels', 'Sea urchins', 'Lobster', 'Mackerel'],
  },
  {
    rank: 6,
    name: 'Mehdia & Kenitra Coast',
    region: 'Rabat-Sale Region',
    coast: 'Atlantic',
    icon: Anchor,
    depth: '12-40m',
    level: 'Advanced',
    description:
      'The waters off Mehdia hide several historical shipwrecks from the 19th and 20th centuries. The sandy seabed occasionally gives way to rocky reefs colonized by soft corals. Visibility can be variable due to Atlantic currents and river discharge, but on clear days the wreck dives reward experienced divers with fascinating structures covered in marine growth.',
    highlights: ['Historical wreck dives', 'Soft coral formations', 'Advanced dive challenges', 'Close to Rabat'],
    marineLife: ['Conger eels', 'Scorpionfish', 'Crab species', 'John Dory', 'Bass'],
  },
  {
    rank: 7,
    name: 'Sidi Ifni',
    region: 'Souss-Massa',
    coast: 'Atlantic',
    icon: Sun,
    depth: '5-22m',
    level: 'Beginner to Intermediate',
    description:
      'This former Spanish enclave has a rugged coastline with tide pools, rocky platforms, and underwater caves. Snorkeling in the sheltered tide pools reveals anemones, crabs, and small fish. Deeper dives along the rocky walls bring encounters with larger Atlantic species.',
    highlights: ['Tide pool snorkeling', 'Underwater caves', 'Art Deco coastal town', 'Uncrowded dive sites'],
    marineLife: ['Anemones', 'Nudibranchs', 'Moray eels', 'Parrotfish', 'Sea cucumbers'],
  },
  {
    rank: 8,
    name: 'Strait of Gibraltar',
    region: 'Tangier-Tetouan',
    coast: 'Mediterranean/Atlantic',
    icon: Navigation,
    depth: '15-45m',
    level: 'Advanced',
    description:
      'One of the world\'s busiest shipping lanes is also one of its most exciting dive regions. Strong currents create nutrient upwellings that attract massive schools of fish. This is technical diving territory with deep walls, powerful currents, and limited visibility windows.',
    highlights: ['World-class drift diving', 'Massive fish schools', 'Deep wall dives', 'Pelagic encounters'],
    marineLife: ['Bluefin tuna', 'Swordfish', 'Dolphins', 'Sunfish', 'Sharks (seasonal)'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PADI CENTERS
   ═══════════════════════════════════════════════════════════════ */

const padiCenters = [
  {
    name: 'Club de Plongee Al Hoceima',
    city: 'Al Hoceima',
    speciality: 'Mediterranean reef diving, national park excursions',
    courses: 'OW, AOW, Rescue, Discover Scuba',
    languages: 'French, Arabic, Spanish, English',
    price: 'From 500 MAD per dive',
  },
  {
    name: 'Tangier Dive Center',
    city: 'Tangier',
    speciality: 'Cap Spartel dives, Strait of Gibraltar drift dives',
    courses: 'OW, AOW, Deep Diver, Drift Diver',
    languages: 'French, English, Arabic, Spanish',
    price: 'From 550 MAD per dive',
  },
  {
    name: 'Dakhla Diving',
    city: 'Dakhla',
    speciality: 'Atlantic exploration, lagoon diving, whale watching combos',
    courses: 'OW, AOW, Discover Scuba, Nitrox',
    languages: 'French, English, Arabic',
    price: 'From 600 MAD per dive',
  },
  {
    name: 'Subaqua Essaouira',
    city: 'Essaouira',
    speciality: 'Atlantic coastal dives, kelp forest exploration',
    courses: 'OW, AOW, Discover Scuba',
    languages: 'French, English, Arabic',
    price: 'From 500 MAD per dive',
  },
  {
    name: 'Casablanca Dive Club',
    city: 'Casablanca',
    speciality: 'Shore dives, equipment training, pool sessions',
    courses: 'OW, AOW, Rescue, Divemaster',
    languages: 'French, Arabic, English',
    price: 'From 450 MAD per dive',
  },
  {
    name: 'Agadir Plongee',
    city: 'Agadir',
    speciality: 'Reef dives, night diving, underwater photography',
    courses: 'OW, AOW, Night Diver, UW Photography',
    languages: 'French, English, German, Arabic',
    price: 'From 500 MAD per dive',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DIVE SEASONS
   ═══════════════════════════════════════════════════════════════ */

const diveSeasons = [
  {
    season: 'Spring (March-May)',
    icon: Droplets,
    mediterranean: { temp: '15-18°C', visibility: '10-15m', conditions: 'Improving conditions, plankton blooms bring marine life' },
    atlantic: { temp: '16-19°C', visibility: '8-12m', conditions: 'Swell decreasing, good for advanced divers' },
    best: 'Late May for both coasts as waters warm and visibility improves.',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    mediterranean: { temp: '20-24°C', visibility: '15-25m', conditions: 'Peak season. Warm, calm, crystal-clear water' },
    atlantic: { temp: '18-22°C', visibility: '10-18m', conditions: 'Best Atlantic conditions, reduced swell' },
    best: 'July-August for Mediterranean. The best time for beginners on both coasts.',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    mediterranean: { temp: '19-22°C', visibility: '12-20m', conditions: 'Still excellent, fewer crowds, warm water lingers' },
    atlantic: { temp: '19-21°C', visibility: '10-15m', conditions: 'Good conditions early autumn, swell returns late November' },
    best: 'September-October. Warm water, fewer tourists, and autumn fish migrations.',
  },
  {
    season: 'Winter (December-February)',
    icon: Thermometer,
    mediterranean: { temp: '14-16°C', visibility: '8-12m', conditions: 'Cold, rough. Most centers closed or limited operations' },
    atlantic: { temp: '16-18°C', visibility: '5-10m', conditions: 'Big Atlantic swell. Dakhla remains diveable year-round' },
    best: 'Dakhla only for committed divers. Whale migration season (Dec-Mar) is a bonus.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MARINE LIFE
   ═══════════════════════════════════════════════════════════════ */

const marineLife = [
  {
    species: 'Bottlenose Dolphins',
    icon: Heart,
    where: 'Al Hoceima, Strait of Gibraltar, Dakhla',
    when: 'Year-round, more active spring-summer',
    description: 'Pods of 10-30 dolphins regularly encountered on boat trips to dive sites. They often approach boats and divers. Al Hoceima\'s national park waters are a known habitat, and the Strait of Gibraltar sees large pods feeding on migrating fish.',
  },
  {
    species: 'Loggerhead Sea Turtles',
    icon: Globe,
    where: 'Dakhla, Al Hoceima, southern Atlantic',
    when: 'Spring-autumn, nesting June-August',
    description: 'Morocco\'s Atlantic coast is on the migration route of loggerhead turtles. Dakhla\'s waters provide important foraging habitat. Encounters are not guaranteed but are increasingly common as conservation efforts take effect. Leatherback turtles also pass through offshore waters.',
  },
  {
    species: 'Common Octopus',
    icon: Eye,
    where: 'All coasts, especially Essaouira and Agadir',
    when: 'Year-round',
    description: 'Morocco is one of the world\'s largest octopus exporters, and the waters are rich with these intelligent cephalopods. Divers frequently spot them camouflaged among rocks. The Atlantic coast is particularly productive, and octopus behavior (color changes, den building) is fascinating to observe up close.',
  },
  {
    species: 'Mediterranean Barracuda',
    icon: Fish,
    where: 'Al Hoceima, Cap Spartel, Mediterranean coast',
    when: 'Summer months (June-September)',
    description: 'Schools of barracuda patrol the Mediterranean reefs, especially around rocky pinnacles and walls. They are curious and often approach divers. Individual fish can reach over a meter in length. They are most active during morning dives when they hunt in coordinated groups.',
  },
  {
    species: 'Stingrays & Eagle Rays',
    icon: Compass,
    where: 'Cap Spartel, Dakhla, Agadir',
    when: 'Spring-autumn',
    description: 'Common stingrays rest on sandy bottoms between reef structures, and eagle rays cruise in open water. The sandy channels around Dakhla are prime habitat. All rays should be observed from a respectful distance.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Discover Scuba Diving (no cert)', price: 'From 600 MAD', note: 'Pool session + 1 open water dive' },
  { service: 'Single guided dive (with gear)', price: 'From 500 MAD', note: 'Certified divers, full equipment' },
  { service: 'Two-dive package', price: 'From 900 MAD', note: 'Morning double dive, same day' },
  { service: 'PADI Open Water course', price: 'From 3,500 MAD', note: '3-4 days, includes materials' },
  { service: 'PADI Advanced Open Water', price: 'From 3,000 MAD', note: '2 days, 5 adventure dives' },
  { service: 'Snorkeling gear rental (full day)', price: 'From 100 MAD', note: 'Mask, snorkel, fins' },
  { service: 'Guided snorkeling trip', price: 'From 300 MAD', note: 'Boat trip, 2-3 hours, guide included' },
  { service: 'Wetsuit rental (per day)', price: 'From 80 MAD', note: '3mm or 5mm depending on season' },
  { service: 'Night dive (certified)', price: 'From 700 MAD', note: 'Includes torch, guide, gear' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    title: 'Choose Certified Centers',
    icon: ShieldCheck,
    description: 'Only dive with PADI, SSI, or CMAS-affiliated centers. Ask to see current certification and insurance documents. Avoid freelance operators offering cheap dives without proper credentials.',
  },
  {
    title: 'Check Equipment Condition',
    icon: CheckCircle,
    description: 'Inspect rental equipment before each dive. Check regulator function, BCD inflation, tank pressure, and wetsuit condition. Quality varies between centers, so do not assume everything is in order.',
  },
  {
    title: 'Respect Current Conditions',
    icon: Waves,
    description: 'Atlantic currents can be powerful and unpredictable. Always listen to local dive guides about current conditions. If a dive is cancelled due to conditions, do not pressure the center to proceed.',
  },
  {
    title: 'Know Decompression Facilities',
    icon: AlertTriangle,
    description: 'The nearest recompression chambers are in Casablanca (military hospital) and Tangier. Remote locations like Dakhla have limited emergency medical facilities. Carry DAN insurance and dive conservatively.',
  },
  {
    title: 'Water Temperature Awareness',
    icon: Thermometer,
    description: 'Morocco\'s waters are cooler than many expect. Even in summer, a 5mm wetsuit is recommended for Atlantic dives. Hypothermia risk increases on multi-dive days. Bring a hood and gloves for winter dives.',
  },
  {
    title: 'Sun and Surface Safety',
    icon: Sun,
    description: 'The Moroccan sun is intense, especially in the south. Apply reef-safe sunscreen before surface intervals. Stay hydrated between dives. Boats may lack shade, so bring a hat and UV-protective clothing.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SNORKELING SPOTS
   ═══════════════════════════════════════════════════════════════ */

const snorkelingSpots = [
  {
    name: 'Cala Iris, Al Hoceima',
    difficulty: 'Easy',
    marineLife: 'Wrasse, sea bream, starfish, octopus',
    description: 'Sheltered Mediterranean cove with crystal-clear water. Rocky formations create natural pools perfect for snorkeling. Visibility often exceeds 15 meters in summer.',
  },
  {
    name: 'Badis Beach, Al Hoceima',
    difficulty: 'Easy',
    marineLife: 'Seahorses, cuttlefish, damselfish, sea urchins',
    description: 'A remote beach accessible by boat or a challenging coastal path. The rocky seabed is rich with life, and the Spanish islet of Penon de Velez offshore adds intrigue.',
  },
  {
    name: 'Cap Spartel Tide Pools',
    difficulty: 'Easy to Moderate',
    marineLife: 'Anemones, crabs, blennies, small grouper',
    description: 'The tide pools at the meeting point of two oceans host a surprising variety of life. Best at low tide when the pools are calm. Bring water shoes for the rocky terrain.',
  },
  {
    name: 'Sidi Ifni Rocky Coast',
    difficulty: 'Moderate',
    marineLife: 'Nudibranchs, moray eels, sea cucumbers, urchins',
    description: 'Rugged Atlantic coastline with natural channels and gullies. Snorkeling is best on calm days. The coast south of town has the most interesting formations and the clearest water.',
  },
  {
    name: 'Dakhla Lagoon Shallows',
    difficulty: 'Easy',
    marineLife: 'Rays, flatfish, juvenile sea turtles, crabs',
    description: 'The calm, shallow lagoon waters offer gentle snorkeling over sandy bottoms where rays rest and juvenile turtles feed on seagrass. Warm and protected from the Atlantic swell.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDivingSnorkelingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Diving &amp; Snorkeling Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-diving.webp"
          alt="Scuba diver exploring a colorful underwater reef along the Moroccan coastline with clear blue water"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Atlantic &amp; Mediterranean Underwater Adventures
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Diving &amp; Snorkeling<br />Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From the Mediterranean marine parks of Al Hoceima to Dakhla&apos;s Atlantic kelp forests.
            Explore Morocco&apos;s two coastlines, PADI centers, marine life, and the best dive sites.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/80">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"><MapPin className="w-3.5 h-3.5" /> 8 Dive Regions</span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"><Fish className="w-3.5 h-3.5" /> 50+ Marine Species</span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"><Award className="w-3.5 h-3.5" /> PADI Centers</span>
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco sits at the crossroads of the Atlantic Ocean and the Mediterranean Sea, giving it
              over 3,500 kilometers of coastline and two radically different underwater worlds. The
              Mediterranean north offers warm, clear water, seagrass meadows, and volcanic reef
              formations. The Atlantic west and south bring cold-water kelp forests, strong currents,
              nutrient-rich upwellings, and encounters with larger pelagic species.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Diving in Morocco remains under the international radar. There are no overrun reefs or
              boat-jammed sites here. What you get is authentic exploration: uncrowded dive sites,
              marine parks where nature dominates, wreck dives along centuries-old shipping lanes, and a
              growing network of PADI-certified dive centers. This guide covers everything you need: the
              best sites on both coasts, marine life, seasonal conditions, certification options,
              pricing, and safety essentials.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Dive Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 8 Dive Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Mediterranean marine parks to Atlantic wreck sites, these are Morocco&apos;s most rewarding
            underwater destinations ranked by overall experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topDiveSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{site.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {site.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {site.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <SiteIcon className="w-3.5 h-3.5" />
                          {site.coast}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      Depth: {site.depth}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {site.level}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{site.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {site.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border-primary)] pt-3">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Fish className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                      <span className="font-semibold">Marine life:</span> {site.marineLife.join(', ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dive Seasons ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dive Seasons &amp; Water Conditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s two coastlines have different seasonal patterns. Here is what to expect throughout the year.
            <span className="block text-sm text-[var(--text-muted)] mt-2"><Info className="w-3.5 h-3.5 inline mr-1" />Water temperatures and visibility are approximate averages.</span>
          </p>
          <div className="space-y-8 max-w-5xl mx-auto">
            {diveSeasons.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Waves className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-[var(--color-accent)]">Mediterranean Coast</span>
                      </div>
                      <div className="space-y-1 text-xs text-[var(--text-secondary)]">
                        <p><Thermometer className="w-3 h-3 inline mr-1" />Water: {season.mediterranean.temp}</p>
                        <p><Eye className="w-3 h-3 inline mr-1" />Visibility: {season.mediterranean.visibility}</p>
                        <p className="text-[var(--text-muted)]">{season.mediterranean.conditions}</p>
                      </div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-[var(--color-gold)]" />
                        <span className="text-sm font-semibold text-[var(--color-gold)]">Atlantic Coast</span>
                      </div>
                      <div className="space-y-1 text-xs text-[var(--text-secondary)]">
                        <p><Thermometer className="w-3 h-3 inline mr-1" />Water: {season.atlantic.temp}</p>
                        <p><Eye className="w-3 h-3 inline mr-1" />Visibility: {season.atlantic.visibility}</p>
                        <p className="text-[var(--text-muted)]">{season.atlantic.conditions}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best bet:</span> {season.best}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Marine Life ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marine Life You Will Encounter
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s position between the Atlantic and Mediterranean supports a rich diversity of
            marine species. Here are the highlights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marineLife.map((animal) => {
              const AnimalIcon = animal.icon;
              return (
                <div key={animal.species} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AnimalIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {animal.species}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{animal.description}</p>
                  <div className="space-y-1 text-xs text-[var(--text-muted)]">
                    <p>
                      <MapPin className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                      <span className="font-semibold">Where:</span> {animal.where}
                    </p>
                    <p>
                      <Calendar className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                      <span className="font-semibold">When:</span> {animal.when}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Snorkeling Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Snorkeling Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            No certification needed. These spots offer excellent underwater viewing from the surface
            with just a mask, snorkel, and fins.
          </p>

          <div className="space-y-6">
            {snorkelingSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {spot.name}
                  </h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                    spot.difficulty === 'Easy'
                      ? 'bg-green-100 text-green-700'
                      : spot.difficulty === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                  }`}>
                    {spot.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{spot.description}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <Fish className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                  <span className="font-semibold">Look for:</span> {spot.marineLife}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PADI Centers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            PADI &amp; Dive Centers in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco has a growing network of certified dive centers. Here are established operations with
            good safety records and English-speaking staff.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices. Seasonal pricing applies during peak summer months (June-August) when dive prices may increase by 10-20%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {padiCenters.map((center) => (
              <div key={center.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[var(--color-gold)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {center.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {center.city}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{center.speciality}</p>
                <div className="space-y-2 text-xs text-[var(--text-muted)]">
                  <p>
                    <BookOpen className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    <span className="font-semibold">Courses:</span> {center.courses}
                  </p>
                  <p>
                    <Users className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    <span className="font-semibold">Languages:</span> {center.languages}
                  </p>
                  <p>
                    <DollarSign className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    <span className="font-semibold">{center.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Diving &amp; Snorkeling Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for diving and snorkeling activities across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak summer months (June-August). Remote locations like Dakhla may charge more due to logistics.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Details</div>
              </div>
              {priceGuide.map((item, i) => (
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

      {/* ── Safety Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety &amp; Diving Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is not the Red Sea or the Maldives. Conditions here demand respect, preparation, and
            the right equipment. Follow these guidelines for a safe experience.
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

      {/* ── What to Bring ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Bring for Diving in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CheckCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Essential Documents
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                PADI certification card (or equivalent), dive logbook, dive insurance proof (DAN or equivalent),
                passport copy, and any medical clearance forms if you have pre-existing conditions. Keep digital
                copies on your phone as backup.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Personal Wetsuit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Rental wetsuits vary in quality. If you dive regularly, bring your own 5mm wetsuit (3mm for summer
                Mediterranean only). A hood and gloves are essential for Atlantic winter dives. Booties that fit
                your own fins ensure comfort on rocky entries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Eye className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Underwater Camera
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A GoPro or similar action camera is ideal for Morocco&apos;s dive conditions. Wide-angle shots work
                best for reef scenes and marine life. Bring a red filter for Atlantic dives where green tones
                dominate. Spare batteries are a must since cold water drains them faster.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Surface Essentials
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Reef-safe sunscreen (non-nano zinc oxide), wide-brim hat, UV-protective rashguard for surface
                intervals, reusable water bottle, seasickness medication if prone to motion sickness on boats,
                and a dry bag for electronics on boat trips.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Navigation className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dive Computer &amp; First Aid
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bring your own dive computer if you have one &mdash; rentals are not always available at smaller
                centers. Pack a small first aid kit with vinegar (jellyfish stings), antiseptic for coral scrapes,
                ear drops, and motion sickness tablets. Set conservative computer settings given limited
                decompression chamber access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mediterranean vs Atlantic ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mediterranean vs. Atlantic: Which Coast to Dive?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each coast delivers a fundamentally different diving experience. Your choice depends on your
            experience level, timing, and what you want to see.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6 zellige-border">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Mediterranean Coast
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Warmer water (up to 24°C in summer) with better visibility (15-25m)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Calmer conditions, ideal for beginners and snorkelers</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Posidonia seagrass meadows and volcanic rock formations</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Al Hoceima National Park — Morocco&apos;s premier marine protected area</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Season: June to October only</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--color-accent)]/5 rounded-lg text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Beginners, snorkelers,
                underwater photography, warm-water comfort, marine park exploration.
              </div>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[var(--color-gold)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-gold)]">
                  Atlantic Coast
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Cooler, nutrient-rich water attracts larger species and more biomass</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Kelp forests, wreck dives, and strong current drift diving</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Sea turtles, dolphins, rays, and seasonal whale migrations</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Dakhla offers year-round diving with frontier exploration feel</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p>Season: year-round (Dakhla), July-September (central Atlantic)</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--color-gold)]/5 rounded-lg text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Experienced divers, big
                animal encounters, wreck diving, adventure seekers, winter diving (Dakhla).
              </div>
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-surfing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Surfing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ride Morocco&apos;s Atlantic waves from Taghazout to Essaouira.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-beaches-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Beaches Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Best beaches across the Atlantic and Mediterranean coasts.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/water-sports" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Water Sports in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Kitesurfing, jet skiing, kayaking, and all water activities.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/dakhla-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Dakhla Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s southern Atlantic gem: lagoon, desert, and adventure.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Dive Into Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            From Al Hoceima&apos;s crystal-clear Mediterranean coves to Dakhla&apos;s frontier Atlantic waters,
            there is a dive experience here for every level. Start planning your underwater Moroccan adventure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morocco-surfing-guide" className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold">
              <Waves className="w-4 h-4" /> Explore Surfing
            </Link>
            <Link href="/water-sports" className="inline-flex items-center gap-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-[family-name:var(--font-heading)] font-semibold">
              <Droplets className="w-4 h-4" /> All Water Sports
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
