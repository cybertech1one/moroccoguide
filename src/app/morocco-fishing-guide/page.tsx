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
  Navigation,
  Droplets,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Fishing Guide 2026 | Deep Sea, Fly Fishing, Big Game & Best Spots',
  description:
    'Complete guide to fishing in Morocco. Atlantic deep-sea fishing in Dakhla, Essaouira, and Agadir. Mediterranean fishing in Al Hoceima and Nador. Freshwater fly fishing in Ifrane, Bin el Ouidane, and Middle Atlas lakes. Big game tuna, marlin, swordfish. Charter boats, licenses, seasons, catch and release, fish markets, and prices.',
  keywords: [
    'fishing morocco',
    'morocco fishing guide',
    'deep sea fishing morocco',
    'sport fishing morocco',
    'fly fishing morocco',
    'big game fishing morocco',
    'Dakhla fishing charter',
    'Agadir fishing',
    'Essaouira fishing port',
    'Al Hoceima fishing',
    'Nador Mediterranean fishing',
    'Morocco trout fishing',
    'Atlas Mountains fishing',
    'Bin el Ouidane fishing',
    'Ifrane trout streams',
    'Morocco fishing license',
    'Morocco fishing seasons',
    'tuna fishing morocco',
    'marlin fishing morocco',
    'swordfish morocco',
    'Morocco fish markets',
    'catch and release morocco',
    'traditional fishing morocco',
    'Morocco fishing charter prices',
    'freshwater fishing Morocco',
    'Middle Atlas lakes fishing',
  ],
  openGraph: {
    title: 'Morocco Fishing Guide 2026 | Deep Sea, Fly Fishing, Big Game & Best Spots',
    description:
      'Discover Morocco\'s world-class fishing. Atlantic deep-sea charters, Mediterranean coast, Atlas Mountain trout streams, big game species, charter boats, licenses, and the best fishing spots with prices.',
    url: `${BASE_URL}/morocco-fishing-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira-port.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional blue fishing boats in a Moroccan harbor with Atlantic coastline at sunrise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Fishing Guide 2026 | Deep Sea, Fly Fishing & Big Game',
    description:
      'Atlantic deep-sea charters, Mediterranean coast fishing, Atlas Mountain fly fishing. Complete guide to fishing in Morocco with species, seasons, licenses, and prices.',
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
  name: 'Morocco Fishing Guide 2026 | Deep Sea, Fly Fishing, Big Game & Best Spots',
  description:
    'Complete guide to fishing in Morocco. Atlantic deep-sea fishing, Mediterranean coast, freshwater fly fishing in the Atlas Mountains, big game species, charter boats, fishing licenses, seasons, and the best spots with prices.',
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
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
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
    { '@type': 'Question', name: 'Do I need a license to fish in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Freshwater fishing requires a license from the Haut Commissariat aux Eaux et Forets (from 500 MAD for tourists). Sea fishing from shore generally does not require a license. Charter boat fishing is covered by the operator\'s commercial permit.' } },
    { '@type': 'Question', name: 'What is the best time of year for deep sea fishing in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Peak season runs May through October. Bluefin tuna June to September, swordfish July to November, dorado April to October. Dakhla offers year-round fishing.' } },
    { '@type': 'Question', name: 'Where is the best sport fishing in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Dakhla is the sport fishing capital with yellowfin tuna, wahoo, barracuda, and dorado. Agadir is the most accessible deep sea port. Bin el Ouidane offers outstanding freshwater bass fishing.' } },
    { '@type': 'Question', name: 'Can I fly fish for trout in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Middle Atlas rivers around Ifrane and Azrou support brown and rainbow trout. Season runs March to September. Dry flies and nymphs work best in summer.' } },
    { '@type': 'Question', name: 'How much does a deep sea fishing charter cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Coastal half-day trips from 2,000 MAD. Deep sea charters from 3,500 MAD (half day) to 6,000 MAD (full day). Premium big game in Dakhla from 8,000 MAD per day.' } },
    { '@type': 'Question', name: 'Is catch and release practiced in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Growing among sport fishing operators in Dakhla and fly fishing guides in the Atlas. Some rivers have designated catch-and-release sections for trout.' } },
    { '@type': 'Question', name: 'What fish can I catch in Morocco\'s Mediterranean waters?', acceptedAnswer: { '@type': 'Answer', text: 'Bluefin tuna, amberjack, dentex, grouper, sea bream, red mullet, and squid around Al Hoceima and Nador. Mediterranean waters are generally calmer than the Atlantic.' } },
    { '@type': 'Question', name: 'Where can I buy fresh fish in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Every coastal city has a fish market. Top markets: Essaouira port, Agadir Souk el Had, Casablanca Marche Central, Tangier port, Al Hoceima waterfront. Prices from 30 MAD/kg for sardines.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ATLANTIC DEEP-SEA DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const atlanticDestinations = [
  { name: 'Dakhla', region: 'Southern Sahara', type: 'Sport Fishing Capital', icon: Award, price: 'From 8,000 MAD per charter day', description: 'The undisputed sport fishing capital of Morocco and one of Africa\'s premier big game destinations. Dakhla\'s protected bay and open Atlantic host an extraordinary concentration of pelagic species. The warm Canary Current sweeps nutrient-rich upwellings along this coast, sustaining enormous schools year-round. International tournaments draw anglers from across Europe and the Americas.', species: ['Yellowfin Tuna', 'Wahoo', 'Barracuda', 'Dorado (Mahi-Mahi)', 'Corvina', 'Meagre'] },
  { name: 'Agadir', region: 'Souss-Massa', type: 'Deep Sea Fishing Hub', icon: Anchor, price: 'From 3,500 MAD per half-day charter', description: 'Morocco\'s most accessible deep sea fishing port. Agadir\'s modern marina hosts dozens of charter operators running half-day and full-day trips. The continental shelf drops off steeply just 20 km offshore, creating prime conditions for big game species. This is Morocco\'s largest commercial fishing harbor, landing over 300,000 tonnes annually.', species: ['Bluefin Tuna', 'Swordfish', 'Blue Marlin', 'Dorado', 'Amberjack', 'Grouper'] },
  { name: 'Essaouira', region: 'Atlantic Coast', type: 'Heritage Port Fishing', icon: Ship, price: 'From 2,000 MAD per half-day', description: 'Essaouira\'s fishing port is one of the most photographed harbors in Morocco. Blue wooden boats depart at dawn daily, returning by midday with catches that feed the town\'s legendary grillside restaurants. Visitors can join local fishermen on coastal trips or book sport fishing excursions beyond the Mogador archipelago.', species: ['Sea Bass', 'Sea Bream', 'Sardines', 'Mackerel', 'Conger Eel', 'Octopus'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDITERRANEAN DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const mediterraneanDestinations = [
  { name: 'Al Hoceima', region: 'Rif Coast', type: 'Mediterranean Sport Fishing', icon: Navigation, price: 'From 2,500 MAD per half-day', description: 'Set along the dramatic Rif coastline within the Al Hoceima National Park marine reserve. Rocky headlands, deep drop-offs, and underwater canyons create diverse habitats teeming with Mediterranean species. Local fishermen use traditional handline methods passed down through generations, while charter operators target grouper, dentex, and amberjack along the park boundaries.', species: ['Grouper', 'Dentex', 'Amberjack', 'Red Mullet', 'Sea Bream', 'Bluefin Tuna'] },
  { name: 'Nador', region: 'Oriental', type: 'Lagoon & Open Sea', icon: Waves, price: 'From 2,000 MAD per half-day', description: 'Nador sits alongside the Mar Chica lagoon, one of the largest coastal lagoons in North Africa. The lagoon offers sheltered fishing for mullet, sea bass, and gilt-head bream, while the open Mediterranean beyond delivers access to deeper species. The Alboran Sea waters here are among the most biologically diverse in the Western Mediterranean.', species: ['Sea Bass', 'Gilt-head Bream', 'Mullet', 'Squid', 'Bluefish', 'Bonito'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FRESHWATER DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const freshwaterDestinations = [
  { name: 'Bin el Ouidane Reservoir', region: 'Middle Atlas', type: 'Lake Fishing', icon: Mountain, price: 'From 500 MAD per guided day', description: 'Morocco\'s most celebrated freshwater fishing destination. This massive reservoir in the Atlas foothills is stocked with black bass, pike, and carp. Red cliffs rise sharply from turquoise waters. Local guides know the productive coves and can arrange boat rentals for reaching the deeper sections where the largest bass hold.', species: ['Black Bass', 'Northern Pike', 'Common Carp', 'Barbel'] },
  { name: 'Ifrane & Azrou Trout Streams', region: 'Middle Atlas', type: 'Fly Fishing', icon: Droplets, price: 'From 800 MAD per guided day', description: 'The cedar forests around Ifrane and Azrou conceal cold, spring-fed streams holding wild brown trout and stocked rainbow trout. The Tizguite River and tributaries of the Oum er-Rbia offer classic small-stream fly fishing through forested valleys. Water clarity is exceptional in summer. These are the only naturally occurring trout waters in Africa north of the Sahara.', species: ['Brown Trout', 'Rainbow Trout'] },
  { name: 'Middle Atlas Lakes', region: 'Middle Atlas', type: 'Highland Lake Fishing', icon: Globe, price: 'From 400 MAD per guided day', description: 'Natural lakes and reservoirs scattered across the Middle Atlas plateau, including Aguelmame Azigza, Dayet Aoua, and Dayet Ifrah. These highland lakes sit above 1,500 meters and hold pike, carp, roach, and barbel. The surrounding cedar and oak forests make for peaceful fishing in mountain air.', species: ['Northern Pike', 'Common Carp', 'Roach', 'Barbel', 'Tench'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BIG GAME SPECIES
   ═══════════════════════════════════════════════════════════════ */

const bigGameSpecies = [
  { name: 'Bluefin Tuna', weight: 'Up to 300 kg', season: 'June - September', location: 'Agadir, Dakhla, Al Hoceima', description: 'The most prized game fish in Moroccan waters. Atlantic bluefin migrate along the coast in summer, with fish exceeding 200 kg taken regularly off Agadir. Fights can last hours. Trolling with lures and live bait are the primary methods.' },
  { name: 'Blue Marlin', weight: 'Up to 500 kg', season: 'July - October', location: 'Agadir, Dakhla', description: 'The apex predator of Morocco\'s offshore waters. Blue marlin appear when water temperatures peak in late summer. Most are caught trolling with artificial lures at speed. Catch and release is strongly encouraged for this species.' },
  { name: 'Swordfish', weight: 'Up to 200 kg', season: 'July - November', location: 'Agadir, Tan-Tan, Dakhla', description: 'Swordfish patrol deeper waters beyond the continental shelf, targeted at night using deep-drop techniques or by slow-trolling at depth during the day. The meat commands premium prices at Moroccan fish markets.' },
  { name: 'Yellowfin Tuna', weight: 'Up to 80 kg', season: 'Year-round in Dakhla', location: 'Dakhla, Agadir, Tan-Tan', description: 'More abundant than bluefin, yellowfin are the bread-and-butter big game species in southern Moroccan waters. Schools feed aggressively on baitfish near the surface. Popping and jigging techniques are highly effective.' },
  { name: 'Wahoo', weight: 'Up to 40 kg', season: 'April - November', location: 'Dakhla, Tan-Tan', description: 'One of the fastest fish in the ocean at speeds above 95 km/h, caught by high-speed trolling with diving lures. Razor-sharp teeth require wire leaders. The flesh is excellent for grilling.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FISHING SEASONS
   ═══════════════════════════════════════════════════════════════ */

const fishingSeasons = [
  { month: 'Jan', atlantic: 'Shore fishing; rough seas', mediterranean: 'Rock fishing', freshwater: 'Trout closed', highlight: 'Shore corvina' },
  { month: 'Feb', atlantic: 'Pre-season; calm windows', mediterranean: 'Early bream', freshwater: 'Trout closed', highlight: 'Squid in Nador' },
  { month: 'Mar', atlantic: 'Dorado arriving', mediterranean: 'Spring run', freshwater: 'Trout opens', highlight: 'First trout' },
  { month: 'Apr', atlantic: 'Dorado and wahoo', mediterranean: 'All-round', freshwater: 'Spring hatches', highlight: 'Mayfly hatches' },
  { month: 'May', atlantic: 'Peak begins; tuna', mediterranean: 'Bluefin moving', freshwater: 'Peak trout', highlight: 'Big game starts' },
  { month: 'Jun', atlantic: 'Bluefin peak; marlin', mediterranean: 'Amberjack', freshwater: 'Dry fly peak', highlight: 'Bluefin tuna' },
  { month: 'Jul', atlantic: 'Full big game', mediterranean: 'Peak; calm seas', freshwater: 'Evening rises', highlight: 'Swordfish' },
  { month: 'Aug', atlantic: 'All species active', mediterranean: 'Best conditions', freshwater: 'Low water', highlight: 'Dakhla tournaments' },
  { month: 'Sep', atlantic: 'Tuna still running', mediterranean: 'Autumn run', freshwater: 'Last trout month', highlight: 'Wahoo bonanza' },
  { month: 'Oct', atlantic: 'Swordfish strong', mediterranean: 'Grouper peaks', freshwater: 'Trout closes', highlight: 'Bin el Ouidane carp' },
  { month: 'Nov', atlantic: 'Last charters', mediterranean: 'Shore fishing', freshwater: 'Pike opens', highlight: 'Atlas pike' },
  { month: 'Dec', atlantic: 'Off-season', mediterranean: 'Winter rock', freshwater: 'Pike and carp', highlight: 'Shore sea bass' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FISH MARKETS
   ═══════════════════════════════════════════════════════════════ */

const fishMarkets = [
  { name: 'Essaouira Port Market', city: 'Essaouira', specialty: 'Sardines, sea bream, prawns', hours: '6:00 AM - 2:00 PM daily', description: 'The most atmospheric fish market in Morocco. Inside the working port, catches are auctioned each morning. Grill stalls cook your purchase on charcoal for from 20 MAD.' },
  { name: 'Agadir Souk el Had', city: 'Agadir', specialty: 'Tuna, swordfish, shrimp', hours: '6:00 AM - 1:00 PM (Tue-Sun)', description: 'The fish section of Morocco\'s largest covered souk. Atlantic species arrive from the adjacent commercial port. Prices are competitive and bargaining is expected.' },
  { name: 'Casablanca Marche Central', city: 'Casablanca', specialty: 'Sole, turbot, lobster, oysters', hours: '7:00 AM - 2:00 PM (Tue-Sun)', description: 'A colonial-era covered market where the city\'s top restaurants source their fish. Higher prices than coastal towns, but the quality and variety are exceptional.' },
  { name: 'Tangier Port Market', city: 'Tangier', specialty: 'Anchovies, red mullet, sea bass', hours: '6:30 AM - 1:30 PM daily', description: 'Near the old port, serving catches from both the Atlantic and the Strait of Gibraltar. The mix of species makes it one of the most diverse markets in Morocco.' },
  { name: 'Al Hoceima Waterfront Market', city: 'Al Hoceima', specialty: 'Grouper, red snapper, octopus', hours: '7:00 AM - 1:00 PM daily', description: 'A small but excellent Rif coast market. Mediterranean catches come straight off the boats. Prices are among the lowest in Morocco.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFishingGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-essaouira-port.webp"
          alt="Traditional blue fishing boats in a Moroccan harbor at sunrise with the Atlantic stretching to the horizon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Fishing Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            Atlantic deep-sea charters, Mediterranean rock fishing, Atlas Mountain fly fishing for trout, big game marlin and tuna, traditional harbors, and the freshest fish markets in North Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Fish className="w-4 h-4" /> 50+ Species
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Anchor className="w-4 h-4" /> Atlantic &amp; Mediterranean
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Mountain className="w-4 h-4" /> Atlas Freshwater
            </span>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Fishing Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
              Fishing Across Two Coasts and the Atlas Mountains
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Morocco sits at the crossroads of the Atlantic Ocean and the Mediterranean Sea, with 3,500 km of coastline
              and a mountain interior laced with cold, spring-fed rivers. This geographic diversity produces fishing
              opportunities found in few other countries on earth. The Atlantic coast from Tangier to Dakhla delivers
              world-class deep-sea fishing for tuna, marlin, and swordfish. The Mediterranean shore from Nador to Al
              Hoceima offers calmer waters rich in grouper, dentex, and bream. And the Middle Atlas mountains, rising
              above the cedar forests of Ifrane and Azrou, hold wild trout in streams that rival anything in southern Europe.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Morocco&apos;s fishing industry employs over 700,000 people and the country ranks as Africa&apos;s
              largest fish producer. For visiting anglers, the infrastructure ranges from purpose-built sport fishing
              charters in Dakhla to local fishermen who will take you out in a traditional wooden boat for a morning.
              Prices remain a fraction of comparable experiences in Europe or the Caribbean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5 text-center">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Atlantic Coast</h3>
              <p className="text-sm text-[var(--text-secondary)]">2,900 km of coastline. Deep-sea charters, big game fishing, and legendary ports from Tangier south to Dakhla.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Mediterranean</h3>
              <p className="text-sm text-[var(--text-secondary)]">500 km of coastline along the Rif. Calmer waters, rocky shore fishing, and access to the rich Alboran Sea.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Atlas Freshwater</h3>
              <p className="text-sm text-[var(--text-secondary)]">Trout streams, highland lakes, and reservoirs across the Middle and High Atlas ranges above 1,500 meters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atlantic Deep-Sea Fishing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Atlantic Deep-Sea Fishing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s Atlantic coast is one of the most productive fishing grounds in the world, fed by the cold
            Canary Current and rich in pelagic species from April through November.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season, boat size, and operator.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {atlanticDestinations.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
                        <span>{spot.type}</span>
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
                        <Fish className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
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

      {/* ── Mediterranean Fishing ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mediterranean Coast Fishing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Rif coastline along the Mediterranean offers sheltered bays, rocky headlands, and access
            to the biologically rich Alboran Sea, where Atlantic and Mediterranean waters converge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediterraneanDestinations.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
                        <span>{spot.type}</span>
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
                        <Fish className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
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

      {/* ── Freshwater Fishing & Fly Fishing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Freshwater Fishing &amp; Fly Fishing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Middle and High Atlas ranges hold Morocco&apos;s freshwater fishing treasures: wild trout streams,
            highland lakes, and massive reservoirs stocked with bass, pike, and carp.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {freshwaterDestinations.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
                        <span>{spot.type}</span>
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
                        <Fish className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {species}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fly Fishing Details */}
          <div className="mt-12 card-moroccan p-6 max-w-3xl mx-auto zellige-border">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fly Fishing in Morocco: What to Know
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p>
                Fly fishing in Morocco is a niche but growing pursuit. The primary quarry is brown trout in the
                streams around Ifrane, Azrou, and the headwaters of the Oum er-Rbia. The season runs March through
                September, with dry fly fishing at its best from May to July when mayfly and caddis hatches bring
                trout to the surface in the evening hours.
              </p>
              <p>
                A 4-weight or 5-weight rod is ideal. Leaders should be 9 to 12 feet with fine tippets (5X or 6X)
                for the clear water. Effective patterns include Adams, Elk Hair Caddis, and Parachute BWO for dry
                flies, with Pheasant Tail and Hare&apos;s Ear nymphs for subsurface work. In early spring, small
                streamers in olive and brown produce well.
              </p>
              <p>
                Local fly fishing guides can be arranged through hotels in Ifrane or outdoor operators in Azrou.
                Guided days start from 800 MAD including transport to the streams. Bring your own equipment, as
                quality fly tackle is difficult to source locally. Seasonal pricing can change based on demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Big Game Species ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Big Game Species
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Atlantic waters host some of the largest game fish in the eastern Atlantic. These are the
            trophy species that draw international anglers to Moroccan shores.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {bigGameSpecies.map((species) => (
              <div key={species.name} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {species.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{species.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-[var(--color-gold)]" />
                        Max: {species.weight}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[var(--color-accent)]" />
                        {species.season}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                        {species.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traditional Net Fishing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ship className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Fishing in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fishing is woven into the cultural fabric of Morocco. Coastal communities have fished these waters for
            centuries using methods that remain largely unchanged.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Anchor className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Net Fishing (Chalutage)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Traditional seine nets are deployed from wooden boats along the Atlantic coast. Teams of fishermen
                haul the nets by hand on beaches from Larache to Sidi Ifni. In Essaouira, circular cast nets are
                still used in the harbor. Visitors can observe net hauling at dawn on most fishing beaches.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Ship className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Wooden Boat Fleet
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s artisanal fishing fleet numbers over 16,000 traditional wooden boats. Painted in
                brilliant blues, yellows, and greens, these vessels are built by hand in boatyards from Tangier to
                Dakhla. Each boat carries 2-4 fishermen and works within 5 km of shore using lines, traps, and
                small nets. Joining a local boat trip costs from 300 MAD per person.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Handline Fishing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Along the Mediterranean coast, handline fishing from rocks and jetties is a daily practice. Fishermen
                in Al Hoceima and Nador use simple rigs with natural bait (sardines, squid, bread) to catch bream,
                bass, and bluefish. This is the most accessible form of fishing for visitors. No equipment rental is
                needed; a hand reel and hooks cost from 50 MAD at any coastal hardware shop.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fishing Villages to Visit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Imsouane (a tiny Atlantic cove between Agadir and Essaouira), Moulay Bousselham (a lagoon village
                north of Rabat), Sidi Ifni (a former Spanish colonial town), and Tafedna (a remote beach south
                of Essaouira) are among the most authentic fishing villages in Morocco. Each offers a glimpse into
                traditional coastal life far from the tourist circuits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Catch and Release ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Catch and Release in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Conservation-minded fishing is gaining ground in Morocco, particularly for big game and freshwater species.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-4 text-sm text-[var(--text-secondary)]">
              <p>
                Catch and release is not yet a legal requirement in Morocco, but it is increasingly practiced by
                responsible charter operators and fly fishing guides. In Dakhla, several premium sport fishing
                operators have adopted a tag-and-release policy for marlin and large tuna, working with international
                fisheries research programs to track migration patterns.
              </p>
              <p>
                For freshwater trout in the Atlas, catch and release with barbless hooks is encouraged by conservation
                organizations working to protect wild trout populations. Some sections of the Oum er-Rbia headwaters
                have been designated as catch-and-release zones, and local guides increasingly advocate for releasing
                fish, especially breeding adults during spring spawning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span className="text-xs">Use circle hooks to reduce gut-hooking</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span className="text-xs">Minimize time fish spend out of water</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span className="text-xs">Wet hands before handling fish</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span className="text-xs">Revive fish facing into the current before release</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span className="text-xs">Carry long-nose pliers or a dehooking tool</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span className="text-xs">Use barbless hooks for trout and bass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fishing Seasons Calendar ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fishing Seasons Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Month-by-month guide to what is biting and where across Morocco&apos;s three fishing zones.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-accent)]/10">
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Month</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Atlantic</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Mediterranean</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Freshwater</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Highlight</th>
                </tr>
              </thead>
              <tbody>
                {fishingSeasons.map((season, i) => (
                  <tr key={season.month} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                    <td className="p-3 font-medium text-[var(--text-primary)]">{season.month}</td>
                    <td className="p-3 text-[var(--text-secondary)] text-xs">{season.atlantic}</td>
                    <td className="p-3 text-[var(--text-secondary)] text-xs">{season.mediterranean}</td>
                    <td className="p-3 text-[var(--text-secondary)] text-xs">{season.freshwater}</td>
                    <td className="p-3 text-xs">
                      <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium">
                        <Star className="w-3 h-3" />
                        {season.highlight}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Fishing Licenses & Regulations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fishing Licenses &amp; Regulations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding Morocco&apos;s fishing regulations will keep you legal and help protect fish stocks for
            future generations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Freshwater License
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Required for all rivers, streams, lakes, and reservoirs. Issued by the Haut Commissariat aux Eaux
                et Forets (HCEF). Tourist licenses cost from 500 MAD per year. Apply at regional HCEF offices in
                Ifrane, Azrou, Beni Mellal, or Khenifra. Bring your passport and two photos. Processing takes 1-2
                business days. Some fishing guides can arrange licenses in advance.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Waves className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sea Fishing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Shore fishing along the coast does not generally require a license for recreational anglers. Charter
                boats operate under commercial fishing permits that cover passengers. Spearfishing requires a separate
                permit from the local maritime authority (Delegation des Peches Maritimes) at from 300 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Closed Seasons &amp; Limits
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Trout season: March 1 to September 30. Bag limits for trout are typically 6 fish per day. No closed
                season for most sea fish, but there are periodic closures for specific species (notably octopus, which
                has annual closures to allow population recovery). Minimum sizes apply for most commercial species.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Protected Areas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Fishing is restricted or prohibited within national park marine zones, including Al Hoceima National
                Park and the Mogador Islands off Essaouira. Ifrane National Park has specific zones where fishing is
                permitted with a valid license. Check with park authorities for current boundaries and rules before
                wetting a line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Charter Boats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Charter Boats &amp; Pricing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A breakdown of what to expect from Morocco&apos;s charter fishing operators, from budget coastal trips
            to premium big game expeditions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting rates. Seasonal pricing can change significantly during peak months (June-September).
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Coastal Half-Day (4 hours)
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Small boat, 2-4 anglers. Fishing within 10 km of shore. Tackle provided. Essaouira, Agadir, Tangier.
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] whitespace-nowrap">
                  From 2,000 MAD
                </span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Deep Sea Half-Day (5 hours)
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Medium boat with cabin, 4-6 anglers. Trolling and bottom fishing beyond the shelf. Agadir, Dakhla.
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] whitespace-nowrap">
                  From 3,500 MAD
                </span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Full-Day Deep Sea (8-10 hours)
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Large vessel, all equipment, lunch, drinks. Targeting tuna, swordfish, and marlin. Agadir, Dakhla.
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] whitespace-nowrap">
                  From 6,000 MAD
                </span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Premium Big Game (full day)
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Tournament-grade vessel, experienced crew, top tackle. Marlin, giant tuna. Dakhla specialists.
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] whitespace-nowrap">
                  From 8,000 MAD
                </span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Multi-Day Expedition (3-5 days)
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    All-inclusive packages with accommodation, meals, airport transfers, and daily fishing. Dakhla, Agadir.
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] whitespace-nowrap">
                  From 25,000 MAD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fish Markets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Fish Markets in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Even if you never pick up a rod, Morocco&apos;s fish markets are essential experiences. Many have
            on-site grill stalls where your purchase is cooked fresh within minutes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fishMarkets.map((market) => (
              <div key={market.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {market.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {market.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {market.hours}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-3">{market.description}</p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)]">
                  <Fish className="w-3 h-3" />
                  <span className="font-medium">{market.specialty}</span>
                </div>
              </div>
            ))}
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
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Weather &amp; Conditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Atlantic conditions can turn rough without warning, especially November through March. Check marine
                forecasts before booking. Summer water temperatures range from 18-22 degrees Celsius on the Atlantic
                to 24-27 degrees on the Mediterranean. Atlas rivers run coldest in spring from snowmelt and may
                shrink to trickles in late summer.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Charter Operators
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Reserve at least 1-2 weeks ahead during peak season (June through September). Verify the operator
                holds valid commercial fishing and safety licenses. Ask about the boat, the captain&apos;s experience,
                and what tackle is included. Payment is typically 50% deposit with the balance due on departure day.
                Seasonal pricing can change, so confirm rates when you book.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What to Do with Your Catch
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most charter operators will fillet and pack your catch on ice. For the drive home, a cooler bag keeps
                fish fresh for hours. Many hotels and riads will cook your catch at no extra charge or for a small
                fee. Restaurants near fishing ports also offer this service. Exporting fish requires customs paperwork
                and is not practical for tourists.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tipping fishing guides and charter crews is customary. For good service, from 100-200 MAD per person
                is standard. For exceptional experiences or when the crew works especially hard, from 300-500 MAD
                is generous. Tips are given in cash at the end of the trip. Freshwater guides appreciate the same
                range relative to the cost of the outing.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety on the Water
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Confirm your charter provides life jackets for all passengers. Carry a charged phone in a waterproof
                case. For shore fishing on rocky coastlines, wear boots with non-slip soles and stay aware of tidal
                changes. The Atlantic coast produces powerful waves and strong rip currents. Sun protection is critical;
                bring a hat, long sleeves, and reef-safe sunscreen.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What to Bring
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Sea fishing charters generally provide all tackle. For freshwater fishing, bring your own equipment
                as rental options are limited. Polarized sunglasses are essential for sight fishing and reducing
                glare. Pack motion sickness tablets if you are prone to seasickness. A lightweight rain jacket is
                wise even in summer, as Atlantic weather shifts quickly.
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
                For sea fishing from shore, no license is generally required. For freshwater fishing in rivers, lakes,
                and reservoirs, you need a license from the Haut Commissariat aux Eaux et Forets (from 500 MAD for
                tourists). Charter boat fishing is covered by the operator&apos;s commercial permit. Spearfishing
                requires a separate permit from the local maritime authority. Always verify current regulations before
                your trip.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for deep sea fishing in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The peak season runs May through October. Bluefin tuna are most active June to September, swordfish
                July to November, and dorado April to October. Dakhla offers year-round sport fishing thanks to
                its warm southern waters and the Canary Current. Winter months bring rougher Atlantic conditions that
                limit charter boat departures from most ports.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where is the best sport fishing in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Dakhla is Morocco&apos;s sport fishing capital and one of Africa&apos;s premier destinations, with
                yellowfin tuna, wahoo, barracuda, and dorado in abundance. Agadir is the most accessible deep sea
                port with the widest selection of charters. On the Mediterranean, Al Hoceima offers excellent
                grouper and amberjack fishing. For freshwater sport fishing, Bin el Ouidane has outstanding bass.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I fly fish for trout in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. The cold, clear rivers of the Middle Atlas around Ifrane and Azrou hold brown trout and rainbow
                trout. The Tizguite River, tributaries of the Oum er-Rbia, and streams near Azrou are prime fly
                fishing waters. Season runs March to September. Dry flies and nymphs work best from May onward, with
                streamers more effective in early spring. Guided days start from 800 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a deep sea fishing charter cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Coastal half-day trips start from 2,000 MAD for a small boat. Deep sea charters run from 3,500 MAD
                (half day) to from 6,000 MAD (full day). Premium big game charters in Dakhla start from 8,000 MAD
                per day. Multi-day expedition packages with accommodation begin from 25,000 MAD. Peak season
                (June through September) commands the highest rates.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is catch and release practiced in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Catch and release is growing, particularly among sport fishing operators in Dakhla and fly fishing
                guides in the Atlas. Several premium charter operators practice tag-and-release for marlin and large
                tuna. For freshwater trout, catch and release with barbless hooks is encouraged, and some river
                sections have been designated as release-only zones.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What fish can I catch in Morocco&apos;s Mediterranean waters?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s Mediterranean coast around Al Hoceima and Nador yields bluefin tuna, amberjack, dentex,
                grouper, sea bream, red mullet, and squid. The Alboran Sea waters are especially productive where
                Atlantic and Mediterranean currents converge. Shore fishing from rocky headlands produces sea bass,
                bream, and bluefish. Mediterranean waters are generally calmer than the Atlantic, making them ideal
                for anglers who prefer steadier seas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I buy fresh fish in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Every coastal city has a fish market (marche aux poissons). Top markets include Essaouira&apos;s port
                market, Agadir&apos;s Souk el Had fish section, Casablanca&apos;s Marche Central, Tangier&apos;s port
                market, and Al Hoceima&apos;s waterfront stalls. Prices start from 30 MAD per kilogram for sardines
                and from 120 MAD per kilogram for sea bass. Many markets have attached grill stalls that cook your
                purchase on charcoal for from 20 MAD per plate.
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
                Morocco&apos;s sport fishing capital. Desert bay, kitesurfing, Saharan adventures, and world-class angling.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Ship className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Iconic fishing port, blue-and-white medina, Atlantic beaches, and coastal Moroccan culture.
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
                Morocco&apos;s best beaches along the Atlantic and Mediterranean, from surfing spots to hidden coves.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Moroccan cuisine from street food to fine dining, including the freshest seafood along the coast.
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
