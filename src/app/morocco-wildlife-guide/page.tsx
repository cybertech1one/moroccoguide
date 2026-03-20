import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Mountain,
  Bird,
  Eye,
  TreeDeciduous,
  Binoculars,
  Camera,
  Leaf,
  Globe,
  Fish,
  Bug,
  Compass,
  Calendar,
  Award,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Wildlife Guide 2026 | Animals, Birds, National Parks & Nature Reserves',
  description:
    'Complete guide to wildlife in Morocco. Discover Barbary macaques, fennec foxes, striped hyenas, flamingos, and more. Explore national parks like Toubkal, Souss-Massa, and Ifrane. Best birdwatching spots, wildlife tours, and responsible nature tourism.',
  keywords: [
    'wildlife in morocco',
    'animals in morocco',
    'morocco wildlife',
    'morocco national parks',
    'Barbary macaque',
    'morocco birds',
    'are there hyenas in morocco',
    'fennec fox morocco',
    'Barbary leopard',
    'Souss-Massa national park',
    'Toubkal national park',
    'birdwatching morocco',
    'morocco nature reserves',
    'morocco wildlife tours',
    'flamingos morocco',
    'Barbary sheep morocco',
    'Ifrane national park',
    'morocco marine life',
    'morocco conservation',
    'morocco desert animals',
  ],
  openGraph: {
    title: 'Morocco Wildlife Guide 2026 | Animals, Birds, National Parks & Nature Reserves',
    description:
      'Discover Morocco\'s incredible wildlife from Barbary macaques in the Atlas Mountains to flamingos on the coast. Complete guide to national parks, wildlife tours, and nature reserves.',
    url: `${BASE_URL}/morocco-wildlife-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic view of Morocco Atlas Mountains wildlife habitat with cedar forests and mountain peaks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wildlife Guide 2026 | Animals, Birds & National Parks',
    description:
      'From Barbary macaques to Saharan fennec foxes, flamingos to eagles. Complete guide to Morocco\'s wildlife, national parks, and nature tours.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wildlife-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wildlife-guide`,
  name: 'Morocco Wildlife Guide 2026 | Animals, Birds, National Parks & Nature Reserves',
  description:
    'Complete guide to wildlife in Morocco. Discover Barbary macaques, fennec foxes, striped hyenas, flamingos, national parks, birdwatching spots, and responsible nature tourism.',
  url: `${BASE_URL}/morocco-wildlife-guide`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-wildlife-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Wildlife Guide', item: `${BASE_URL}/morocco-wildlife-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there hyenas in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the striped hyena (Hyaena hyaena) is found in Morocco, primarily in the Atlas Mountains, eastern Morocco near the Algerian border, and some semi-arid regions. They are nocturnal and rarely seen by visitors, but camera traps have confirmed ongoing populations in several areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you see Barbary macaques in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Barbary macaque is found in the cedar forests of the Middle Atlas Mountains, particularly around Ifrane National Park and the Azrou Cedar Forest. There are an estimated 5,000-8,000 wild Barbary macaques remaining in Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for birdwatching in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time for birdwatching in Morocco is during the spring migration (March-May) and autumn migration (September-November). Winter months (December-February) are excellent for flamingos and overwintering European species at wetlands like Merja Zerga and Souss-Massa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Barbary leopard still alive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Barbary leopard (also called the North African leopard) is critically endangered. Small populations are believed to survive in remote areas of the Atlas Mountains, but confirmed sightings are extremely rare. Conservation efforts are underway, and occasional camera trap evidence suggests a very small number may persist.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dangerous animals are in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has several venomous snake species including the puff adder, Egyptian cobra, and horned viper. Scorpions (particularly the fat-tailed scorpion) are found in desert and rural areas. However, encounters are rare for tourists, and anti-venom is available at major hospitals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do wildlife tours cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wildlife tour prices vary by type. National park entry fees are from 20 MAD per person. Guided half-day birdwatching tours start from 500 MAD. Multi-day wildlife safaris combining the Atlas Mountains, Sahara, and coast range from 3,000 MAD to 8,000 MAD per person depending on duration and accommodation level.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ICONIC MAMMALS
   ═══════════════════════════════════════════════════════════════ */

const iconicMammals = [
  {
    name: 'Barbary Macaque',
    scientificName: 'Macaca sylvanus',
    icon: Eye,
    status: 'Endangered',
    habitat: 'Cedar forests of the Middle Atlas',
    population: '5,000-8,000 in Morocco',
    description:
      'The only wild primate in Africa north of the Sahara, and the only macaque species outside Asia. These social, intelligent primates live in troops of 10-60 individuals in the cedar and oak forests of the Middle Atlas Mountains. They are most easily seen in the Azrou Cedar Forest near Ifrane, where troops are habituated to human presence.',
    bestSpot: 'Azrou Cedar Forest, near Ifrane',
    tip: 'Do not feed the macaques. Feeding alters their natural behavior and can make them aggressive. Keep a respectful distance and never try to touch them.',
  },
  {
    name: 'Fennec Fox',
    scientificName: 'Vulpes zerda',
    icon: Eye,
    status: 'Least Concern',
    habitat: 'Sahara Desert and semi-arid regions',
    population: 'Stable but elusive',
    description:
      'The smallest fox in the world, famous for its oversized ears which help dissipate heat and locate underground prey. The fennec fox is nocturnal and lives in burrows beneath the Saharan sand dunes. While rarely seen in the wild due to its nocturnal habits, desert camps near Merzouga occasionally report sightings at dusk and dawn.',
    bestSpot: 'Erg Chebbi dunes, Merzouga',
    tip: 'Fennec foxes are strictly nocturnal. Your best chance of spotting one is during a desert camping trip, sitting quietly at dusk with minimal light. Never chase or corner them.',
  },
  {
    name: 'Barbary Sheep (Aoudad)',
    scientificName: 'Ammotragus lervia',
    icon: Mountain,
    status: 'Vulnerable',
    habitat: 'Rocky mountains and desert cliffs',
    population: 'Declining across North Africa',
    description:
      'A stocky, sure-footed wild sheep with a long, flowing mane on the throat and chest. Barbary sheep inhabit the rugged cliffs and rocky gorges of the Atlas Mountains and the anti-Atlas region. They are remarkably agile climbers, navigating near-vertical rock faces with ease. Herds are typically small, with 5-20 individuals.',
    bestSpot: 'Toubkal National Park, High Atlas',
    tip: 'Bring binoculars. Barbary sheep blend perfectly with rocky terrain and are often spotted as silhouettes on ridgelines at dawn or dusk.',
  },
  {
    name: 'Striped Hyena',
    scientificName: 'Hyaena hyaena',
    icon: Eye,
    status: 'Near Threatened',
    habitat: 'Atlas Mountains, semi-arid scrubland',
    population: 'Small, fragmented populations',
    description:
      'Yes, there are hyenas in Morocco. The striped hyena is a solitary, nocturnal scavenger found in the Atlas Mountains and eastern Morocco. Unlike the more famous spotted hyena of sub-Saharan Africa, the striped hyena is shy, reclusive, and rarely encountered. They feed on carrion, fruit, and small animals. Camera trap studies confirm their presence in several mountain and scrubland areas.',
    bestSpot: 'Eastern Morocco, Atlas foothills',
    tip: 'Sighting a striped hyena in the wild is extremely rare. Your best chance is through organized camera trap projects or by speaking with local Berber communities who occasionally encounter them.',
  },
  {
    name: 'Barbary Leopard',
    scientificName: 'Panthera pardus panthera',
    icon: Eye,
    status: 'Critically Endangered',
    habitat: 'Remote Atlas Mountain forests',
    population: 'Possibly fewer than 50 individuals',
    description:
      'The rarest and most elusive large predator in North Africa. The Barbary leopard, also known as the North African leopard, is believed to survive in tiny numbers in the most remote and inaccessible areas of the Atlas Mountains. Confirmed sightings are extraordinarily rare, but occasional camera trap evidence and local reports suggest a small population persists. This is one of the most critically endangered big cats on Earth.',
    bestSpot: 'Remote areas of the High Atlas (not accessible to tourists)',
    tip: 'You are extremely unlikely to see a Barbary leopard. Their inclusion here highlights the importance of conservation. Support organizations working to protect their habitat.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REPTILES & INSECTS
   ═══════════════════════════════════════════════════════════════ */

const reptiles = [
  {
    name: 'Mediterranean Chameleon',
    description: 'Found in coastal scrubland and gardens across Morocco. Can change color for camouflage and temperature regulation. Often spotted in hedges and low trees near Essaouira and Agadir.',
  },
  {
    name: 'Egyptian Cobra',
    description: 'Morocco\'s most famous venomous snake, often seen in snake charmer performances in Jemaa el-Fnaa. In the wild, they inhabit rocky areas and oases. Rarely encountered by tourists outside of controlled settings.',
  },
  {
    name: 'Saharan Horned Viper',
    description: 'A sand-colored viper with distinctive horns above each eye. Found in the Saharan dunes and semi-arid regions of eastern Morocco. Nocturnal and well-camouflaged. Watch your step in desert areas.',
  },
  {
    name: 'Saharan Spiny-tailed Lizard',
    description: 'A large, herbivorous lizard that can reach 40 cm in length. Common in rocky desert areas near Ouarzazate and Merzouga. They bask on rocks in the morning and are easily photographed.',
  },
  {
    name: 'Fat-tailed Scorpion',
    description: 'The most medically significant scorpion in Morocco. Found in desert and rural areas. Always shake out shoes and clothing left on the ground in rural or desert settings. Anti-venom is available at hospitals.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BIRD SPECIES
   ═══════════════════════════════════════════════════════════════ */

const birdSpecies = [
  {
    name: 'Greater Flamingo',
    icon: Bird,
    habitat: 'Coastal wetlands, estuaries',
    season: 'Year-round (peak: winter)',
    description:
      'Large colonies of greater flamingos inhabit the coastal wetlands of Souss-Massa, the lagoon at Khnifiss, and the Moulouya estuary. The flamingos at Souss-Massa are particularly spectacular, with thousands wading in the shallow waters against the backdrop of the Atlantic.',
    bestSpot: 'Souss-Massa National Park, south of Agadir',
  },
  {
    name: 'Bald Ibis (Northern Bald Ibis)',
    icon: Bird,
    habitat: 'Coastal cliffs, semi-arid grassland',
    season: 'Year-round (breeding: Feb-May)',
    description:
      'One of the rarest birds on the planet, with Morocco hosting the last significant wild population. The Souss-Massa region near Agadir is the global stronghold, with around 700 birds. These glossy, dark birds with bare red heads nest on cliff faces and forage in nearby grasslands.',
    bestSpot: 'Souss-Massa National Park (dedicated viewing areas)',
  },
  {
    name: 'Bonelli\'s Eagle',
    icon: Bird,
    habitat: 'Mountain cliffs, gorges',
    season: 'Year-round',
    description:
      'A powerful raptor that hunts rabbits, partridges, and other birds across the Atlas Mountains and gorge systems. Morocco has one of the strongest populations in the Western Palearctic. Often seen soaring above the Todra and Dades gorges.',
    bestSpot: 'Todra Gorge, Dades Valley, Atlas Mountains',
  },
  {
    name: 'White Stork',
    icon: Bird,
    habitat: 'Towns, ruins, agricultural land',
    season: 'Spring and summer',
    description:
      'White storks are an iconic part of the Moroccan landscape. They build enormous nests on minarets, ruins, and electricity pylons across the country. The kasbah ruins of Chellah near Rabat host a famous nesting colony. Storks arrive from Europe in spring and depart in autumn.',
    bestSpot: 'Chellah ruins (Rabat), medina rooftops across Morocco',
  },
  {
    name: 'Eleonora\'s Falcon',
    icon: Bird,
    habitat: 'Coastal cliffs, islands',
    season: 'Summer (breeding: Jul-Oct)',
    description:
      'A spectacular falcon that breeds on rocky islets off Morocco\'s Atlantic coast. Named after a medieval Sardinian princess who passed laws to protect hawks. Eleonora\'s falcons time their breeding to coincide with autumn bird migration, feeding their chicks on migrating passerines.',
    bestSpot: 'Essaouira coast, Mogador Islands',
  },
  {
    name: 'Moussier\'s Redstart',
    icon: Bird,
    habitat: 'Rocky hillsides, scrubland',
    season: 'Year-round',
    description:
      'A beautiful endemic bird found only in Morocco, Algeria, and Tunisia. The male has a striking orange breast and black-and-white head pattern. Common in the Atlas Mountains and rocky areas, often perching prominently on boulders and walls.',
    bestSpot: 'Atlas Mountains, Ourika Valley',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MARINE LIFE
   ═══════════════════════════════════════════════════════════════ */

const marineLife = [
  {
    name: 'Common Dolphins',
    description: 'Pods of common dolphins are frequently spotted off Morocco\'s Atlantic coast, particularly between Agadir and Essaouira. Boat trips from Agadir and Dakhla regularly encounter groups of 20-100 dolphins.',
    season: 'Year-round (best: Apr-Oct)',
  },
  {
    name: 'Fin Whales',
    description: 'The second-largest animal on Earth passes through Moroccan waters during migration. The Strait of Gibraltar is one of the best whale-watching spots in the Mediterranean basin, with fin whales regularly recorded between April and October.',
    season: 'April-October',
  },
  {
    name: 'Orcas',
    description: 'A small population of orcas (killer whales) frequents the Strait of Gibraltar, primarily hunting bluefin tuna. Sightings from Tangier and Tarifa are possible during the tuna migration season.',
    season: 'May-September',
  },
  { name: 'Loggerhead Sea Turtles', description: 'Loggerhead turtles nest on some of Morocco\'s southern Atlantic beaches and are seen in waters from Dakhla to the Mediterranean coast. Conservation projects monitor nesting sites along the southern coast.', season: 'Nesting: June-September' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NATIONAL PARKS & RESERVES
   ═══════════════════════════════════════════════════════════════ */

const nationalParks = [
  {
    name: 'Toubkal National Park',
    icon: Mountain,
    location: 'High Atlas Mountains',
    established: '1942',
    keySpecies: ['Barbary sheep', 'Barbary macaque', 'Golden eagle', 'Bonelli\'s eagle', 'Atlas mountain viper'],
    entry: 'From 20 MAD per person',
    description:
      'Morocco\'s oldest and most famous national park, centered on Jebel Toubkal (4,167m), the highest peak in North Africa. The park spans 380 sq km of rugged mountain terrain with deep valleys, alpine meadows, and Berber villages. Home to Barbary sheep, golden eagles, and diverse mountain flora including endemic species found nowhere else.',
    activities: ['Mountain trekking', 'Birdwatching', 'Barbary sheep spotting', 'Photography'],
  },
  {
    name: 'Souss-Massa National Park',
    icon: Bird,
    location: 'South of Agadir, Atlantic coast',
    established: '1991',
    keySpecies: ['Northern bald ibis', 'Greater flamingo', 'Fennec fox', 'Gazelle', 'Wild boar'],
    entry: 'From 20 MAD per person',
    description:
      'A coastal park spanning 340 sq km along the Atlantic, combining sandy beaches, dunes, cliffs, farmland, and the Souss and Massa river estuaries. This is the single most important site for the critically endangered northern bald ibis, hosting the world\'s largest wild colony. Flamingo flocks of thousands are a winter highlight.',
    activities: ['Birdwatching', 'Bald ibis viewing', 'Coastal hiking', 'Flamingo photography'],
  },
  {
    name: 'Ifrane National Park',
    icon: TreeDeciduous,
    location: 'Middle Atlas Mountains',
    established: '2004',
    keySpecies: ['Barbary macaque', 'Barbary stag', 'Booted eagle', 'Atlas cedar forests', 'Wild boar'],
    entry: 'From 20 MAD per person',
    description:
      'Home to the magnificent Azrou Cedar Forest, one of the last great cedar forests in Africa. This is the premier location for Barbary macaque encounters, with habituated troops easily observed from forest trails. The park also protects the rare Barbary stag (reintroduced from captive populations) and extensive Atlas cedar woodlands at elevations above 1,600m.',
    activities: ['Barbary macaque viewing', 'Cedar forest walks', 'Mountain biking', 'Winter skiing nearby'],
  },
  {
    name: 'Merzouga & Erg Chebbi',
    icon: Compass,
    location: 'Southeastern Sahara edge',
    established: 'Proposed protected area',
    keySpecies: ['Fennec fox', 'Desert hedgehog', 'Saharan spiny-tailed lizard', 'Desert sparrow', 'Horned viper'],
    entry: 'Free (desert access), guided tours from 300 MAD',
    description:
      'The iconic Saharan dunes of Erg Chebbi rise up to 150m and support a specialized desert ecosystem. The surrounding hamada (rocky desert) and oases host unique desert-adapted species. Dayet Srji, a seasonal salt lake at the edge of the dunes, attracts flamingos and other waterbirds when filled by winter rains.',
    activities: ['Desert wildlife spotting', 'Flamingo viewing at Dayet Srji', 'Scorpion and reptile sighting', 'Night sky and desert camps'],
  },
  {
    name: 'Talassemtane National Park',
    icon: TreeDeciduous,
    location: 'Rif Mountains, near Chefchaouen',
    established: '2004',
    keySpecies: ['Barbary macaque', 'Moroccan fir (endemic)', 'Golden eagle', 'Wild boar', 'Genet'],
    entry: 'From 20 MAD per person',
    description:
      'Protecting the ancient forests of the Rif Mountains near Chefchaouen, this park is home to the endemic Moroccan fir (Abies marocana), found only on a few mountaintops. The park offers spectacular gorge scenery, the famous God\'s Bridge natural formation, and pristine mountain forests teeming with birdlife.',
    activities: ['Hiking and trekking', 'Endemic plant spotting', 'Birdwatching', 'God\'s Bridge visit'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BIRDWATCHING SPOTS
   ═══════════════════════════════════════════════════════════════ */

const birdwatchingSpots = [
  { name: 'Merja Zerga (Moulay Bousselham)', region: 'Atlantic Coast', highlights: 'Wintering flamingos, spoonbills, avocets, marsh harriers. Morocco\'s most accessible wetland for birdwatching.', bestSeason: 'November-March' },
  { name: 'Oualidia Lagoon', region: 'Atlantic Coast', highlights: 'Flamingos, terns, waders. A calm lagoon ideal for relaxed birding between Casablanca and Essaouira.', bestSeason: 'Year-round' },
  { name: 'Souss-Massa Estuary', region: 'South of Agadir', highlights: 'Northern bald ibis, flamingos, waders. The world\'s most important bald ibis site.', bestSeason: 'Year-round (breeding Feb-May)' },
  { name: 'Azrou Cedar Forest', region: 'Middle Atlas', highlights: 'Barbary macaques in ancient cedars, plus woodpeckers, nuthatches, and raptors overhead.', bestSeason: 'April-October' },
  { name: 'Todra Gorge', region: 'High Atlas', highlights: 'Bonelli\'s eagle, blue rock thrush, chough, crag martin. Dramatic gorge setting for raptor watching.', bestSeason: 'Year-round' },
  { name: 'Dayet Aoua', region: 'Middle Atlas', highlights: 'A freshwater lake surrounded by cedar forest. Red-crested pochards, coots, and crested grebes.', bestSeason: 'Spring and autumn' },
  { name: 'Strait of Gibraltar (Tangier)', region: 'Northern Morocco', highlights: 'Massive raptor migration with thousands of honey buzzards, black kites, and short-toed eagles crossing daily.', bestSeason: 'September-October' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WILDLIFE TOUR OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const tourOptions = [
  { type: 'National Park Day Visit', price: 'From 20 MAD (entry only)', duration: 'Half or full day', description: 'Self-guided exploration of any national park. Guidebooks and park maps available at entry points.' },
  { type: 'Guided Birdwatching Half-Day', price: 'From 500 MAD per person', duration: '4-5 hours', description: 'Expert-led birding excursion with transport, binoculars, and a knowledgeable local guide. Most popular at Souss-Massa and Merja Zerga.' },
  { type: 'Barbary Macaque Excursion', price: 'From 400 MAD per person', duration: '3-4 hours', description: 'Guided visit to the Azrou Cedar Forest from Fes or Meknes. Includes transport and a naturalist guide.' },
  { type: 'Multi-Day Wildlife Safari', price: 'From 3,000 MAD per person', duration: '3-5 days', description: 'Comprehensive tours combining Atlas Mountains, desert, and coast. Accommodation, meals, and expert guides included.' },
  { type: 'Whale Watching (Gibraltar Strait)', price: 'From 600 MAD per person', duration: '2-3 hours', description: 'Boat trip from Tangier or Tarifa with marine biologist. Fin whales, dolphins, and occasionally orcas.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SEASONS
   ═══════════════════════════════════════════════════════════════ */

const bestSeasons = [
  { season: 'Spring (March-May)', icon: Leaf, highlights: 'Peak bird migration through the Strait of Gibraltar. Wildflowers in the Atlas. Barbary macaque babies. Nesting bald ibis. Warm but not too hot for hiking.', rating: 'Best overall season' },
  { season: 'Summer (June-August)', icon: Globe, highlights: 'Marine life peaks with dolphins and whales in the Strait of Gibraltar. Eleonora\'s falcon breeding season. Desert too hot for most wildlife activity during the day.', rating: 'Best for marine life' },
  { season: 'Autumn (September-November)', icon: Leaf, highlights: 'Spectacular raptor migration over Tangier. Flamingos arriving at wetlands. Pleasant temperatures for Atlas trekking and Barbary sheep spotting.', rating: 'Best for raptor migration' },
  { season: 'Winter (December-February)', icon: Mountain, highlights: 'Peak flamingo season at Souss-Massa and Merja Zerga. Wintering European birds at wetlands. Macaques in snowy cedar forests (stunning photography). Desert at comfortable temperatures.', rating: 'Best for wetland birds' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWildlifeGuidePage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Wildlife Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Binoculars className="w-4 h-4" />
            Nature &amp; Wildlife
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Wildlife Guide:
            <br className="hidden md:block" /> Animals, Birds &amp; National Parks
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Barbary macaques in Atlas cedar forests to flamingos on the Atlantic coast.
            Discover Morocco&apos;s extraordinary wildlife, national parks, and nature reserves.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Biodiversity Crossroads Between Europe, Africa &amp; the Sahara
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at one of the most extraordinary ecological crossroads on Earth. Where
                the Atlas Mountains meet the Sahara Desert, where the Atlantic Ocean meets the
                Mediterranean Sea, and where European and African ecosystems overlap, an astonishing
                diversity of wildlife thrives in habitats ranging from snow-capped peaks to scorching
                sand dunes.
              </p>
              <p>
                The country is home to over 100 mammal species, more than 480 bird species (including
                some of the rarest on the planet), and countless reptiles, insects, and marine creatures.
                Barbary macaques swing through ancient cedar forests. Fennec foxes emerge from Saharan
                burrows at twilight. Thousands of flamingos wade through coastal lagoons. And somewhere
                in the remotest mountain forests, one of the last Barbary leopards may still roam.
              </p>
              <p>
                Whether you are a serious birder, a nature photographer, or simply a traveler who wants
                to experience Morocco beyond the medinas, this guide covers everything you need to know
                about the country&apos;s wildlife, where to find it, and how to do so responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Iconic Mammals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Mammals of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From primates to predators, Morocco&apos;s mammals range from the easily observed to the nearly mythical.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {iconicMammals.map((animal) => (
              <div key={animal.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {animal.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] italic">{animal.scientificName}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    animal.status === 'Critically Endangered' ? 'bg-red-100 text-red-700' :
                    animal.status === 'Endangered' ? 'bg-orange-100 text-orange-700' :
                    animal.status === 'Vulnerable' ? 'bg-yellow-100 text-yellow-700' :
                    animal.status === 'Near Threatened' ? 'bg-amber-100 text-amber-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {animal.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{animal.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span><strong>Habitat:</strong> {animal.habitat}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <Users className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span><strong>Population:</strong> {animal.population}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <Binoculars className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span><strong>Best spot:</strong> {animal.bestSpot}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {animal.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bird Species ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bird className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Notable Bird Species
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            With over 480 recorded species, Morocco is one of the top birdwatching destinations in the Western Palearctic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {birdSpecies.map((bird) => (
              <div key={bird.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Bird className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {bird.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {bird.habitat}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {bird.season}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{bird.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-gold)]">
                  <Star className="w-3 h-3" />
                  <span className="font-medium">Best spot: {bird.bestSpot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reptiles & Desert Creatures ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bug className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Reptiles &amp; Desert Creatures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s deserts and mountains host a fascinating array of cold-blooded residents.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reptiles.map((reptile) => (
              <div key={reptile.name} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {reptile.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{reptile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marine Life ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marine Life Off Morocco&apos;s Coast
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Atlantic and Mediterranean coasts are rich with marine life, from dolphins to whales.
          </p>

          <div className="space-y-6">
            {marineLife.map((species) => (
              <div key={species.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {species.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 shrink-0 ml-4">
                    <Calendar className="w-3 h-3" />
                    {species.season}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{species.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── National Parks ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            National Parks &amp; Nature Reserves
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco has 10 national parks and numerous nature reserves protecting diverse habitats from coast to mountain to desert.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Entry fees shown are starting prices. Seasonal pricing may apply during peak periods, and guided tours cost extra.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nationalParks.map((park) => {
              const ParkIcon = park.icon;
              return (
                <div key={park.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ParkIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {park.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {park.location}
                        </span>
                        <span>Est. {park.established}</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {park.entry}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{park.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1.5">Key Species:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {park.keySpecies.map((species) => (
                        <span key={species} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded">
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {park.activities.map((activity) => (
                      <div key={activity} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Birdwatching Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Binoculars className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Birdwatching Spots in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a world-class birdwatching destination. These are the best locations across the country.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Location</div>
                <div className="p-3 px-4">Region</div>
                <div className="p-3 px-4">Highlights</div>
                <div className="p-3 px-4">Best Season</div>
              </div>
              {birdwatchingSpots.map((spot, i) => (
                <div
                  key={spot.name}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{spot.name}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{spot.region}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)] text-xs">{spot.highlights}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold text-xs">{spot.bestSeason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wildlife Tours & Prices ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wildlife Tours &amp; Pricing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Options range from self-guided national park visits to multi-day wildlife safaris with expert naturalists.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourism months and holiday periods. Group discounts are often available.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOptions.map((tour) => (
              <div key={tour.type} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {tour.type}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-2">
                  <span className="text-[var(--color-accent)] font-semibold">{tour.price}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tour.duration}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tour.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time for Wildlife ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for Wildlife Spotting
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers wildlife experiences year-round, but each season has its specialities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {bestSeasons.map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {s.season}
                  </h3>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-2">
                    {s.rating}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.highlights}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Conservation & Responsible Tourism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Conservation &amp; Responsible Wildlife Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco faces significant conservation challenges. Here is how visitors can help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Never Feed Wild Animals
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Feeding Barbary macaques and other wild animals alters their natural behavior, makes them
                dependent on humans, and can make them aggressive. At the Azrou Cedar Forest, vendors
                sometimes sell nuts to tourists for feeding macaques. Refuse and observe from a respectful distance instead.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ethical Wildlife Photography
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Never use flash photography near nocturnal animals. Keep a respectful distance (at least 5m from
                macaques, more from nesting birds). Do not pursue animals for a better shot. Use a telephoto lens
                instead of approaching. Never disturb nesting sites.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choose Responsible Tour Operators
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Select tour operators who employ local guides, follow national park regulations, and contribute to
                conservation. Avoid operators who guarantee close animal encounters or use bait. Ask about their
                environmental policies before booking.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Leaf className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Reduce Your Impact
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Stay on marked trails in national parks. Pack out all rubbish. Do not collect plants, rocks,
                or animals. Minimize noise in wildlife areas. Support conservation organizations working in Morocco
                such as GREPOM (Moroccan ornithological society) and the Barbary Macaque Conservation project.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Support Local Conservation
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Visit national parks (entry fees fund conservation), buy from local cooperatives near
                protected areas, and consider donating to Moroccan conservation NGOs. Avoid snake charmer shows in
                places like Jemaa el-Fnaa, which involve captured wild cobras and deplete wild populations.
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
                Are there hyenas in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. The striped hyena (<em>Hyaena hyaena</em>) is found in Morocco, primarily in the Atlas
                Mountains, eastern Morocco near the Algerian border, and some semi-arid scrubland regions.
                They are nocturnal, solitary, and extremely shy, making sightings very rare. Camera trap
                studies have confirmed their continued presence in several areas. They are not the same
                species as the spotted hyena commonly associated with East African safaris.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can you see Barbary macaques in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. The Azrou Cedar Forest in Ifrane National Park is the best and most accessible
                location. Troops of 20-60 macaques are regularly seen along the forest roads and trails.
                You can visit independently or on a guided day trip from Fes (about 1.5 hours drive). The
                macaques are habituated to human presence but remain wild animals. Do not attempt to feed
                or touch them.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time for birdwatching in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March-May) is the peak season, with massive bird migration through the Strait of
                Gibraltar and breeding activity across the country. Autumn (September-November) brings a
                second migration wave with spectacular raptor passages over Tangier. Winter (December-February)
                is excellent for wetland birds, flamingos, and overwintering European species at sites like
                Merja Zerga and Souss-Massa.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is the Barbary leopard still alive in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Barbary leopard is critically endangered, and confirmed sightings are extremely rare. Small
                populations are believed to persist in the most remote areas of the Atlas Mountains. Occasional
                camera trap evidence and credible local reports suggest a very small number may survive. The species
                is the subject of ongoing conservation research, but tourists should not expect to encounter one.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What dangerous animals should I be aware of in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco has several venomous snake species including the puff adder, Egyptian cobra, and
                horned viper, plus scorpions (particularly the fat-tailed scorpion) in desert and rural areas.
                However, encounters are rare for tourists who stay on marked trails. Shake out shoes left
                on the ground in desert camps. Anti-venom is available at major hospitals. Large predators
                pose no realistic threat to visitors.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do wildlife tours cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                National park entry fees start from 20 MAD per person. Guided half-day birdwatching tours
                start from 500 MAD. A guided Barbary macaque excursion from Fes costs from 400 MAD. Multi-day
                wildlife safaris combining the Atlas Mountains, Sahara, and coast range from 3,000 MAD to
                8,000 MAD per person depending on duration and accommodation. Seasonal pricing may apply
                during peak tourist months.
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
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking routes, Berber villages, and mountain landscapes in Morocco&apos;s iconic Atlas range.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Desert camps, camel treks, and the magical Erg Chebbi dunes of the Moroccan Sahara.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-photography-locations" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Photography Locations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most photogenic spots in Morocco from medinas to mountains, deserts to coast.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-family-activities" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Family Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Kid-friendly adventures and family-oriented experiences across Morocco.
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
