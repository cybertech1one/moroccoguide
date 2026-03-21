import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Anchor,
  Eye,
  Camera,
  Fish,
  Award,
  BookOpen,
  Waves,
  MessageCircleQuestion,
  Sun,
  Calendar,
  Compass,
  Shell,
  Navigation,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-scuba-diving`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Scuba Diving Guide 2026 | Best Dive Sites, PADI Courses & Season Tips',
  description:
    'Complete guide to scuba diving in Morocco. Top dive sites in Al Hoceima, Cabo Negro, Essaouira, Agadir & Dakhla. Mediterranean vs Atlantic diving, water temperatures, visibility, PADI certification courses from 2,500 MAD, snorkeling alternatives, equipment rental, and underwater photography tips.',
  keywords: [
    'Morocco scuba diving',
    'diving Morocco 2026',
    'Al Hoceima diving',
    'Cabo Negro dive sites',
    'Dakhla scuba diving',
    'Agadir diving',
    'Essaouira snorkeling',
    'PADI Morocco',
    'Morocco dive centers',
    'Mediterranean diving Morocco',
    'Atlantic diving Morocco',
    'Morocco marine life',
    'scuba diving prices Morocco',
    'Morocco underwater photography',
    'Morocco dive season',
    'snorkeling Morocco',
    'Morocco coral reefs',
    'diving Ceuta area Morocco',
  ],
  openGraph: {
    title: 'Morocco Scuba Diving Guide 2026 | Best Dive Sites, PADI Courses & Season Tips',
    description:
      'Top dive sites across Morocco from the Mediterranean coast to the Saharan Atlantic. Al Hoceima marine park, Cabo Negro walls, Dakhla lagoon, PADI courses from 2,500 MAD, and season-by-season planning.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-beaches.webp`,
        width: 1200,
        height: 630,
        alt: 'Crystal-clear waters along the Moroccan coast with rocky formations and marine life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Scuba Diving Guide 2026 | Dive Sites, PADI & Season Tips',
    description:
      'Al Hoceima, Cabo Negro, Dakhla and more. Mediterranean vs Atlantic diving, marine life, PADI courses, equipment rental, and underwater photography in Morocco.',
    images: [`${BASE_URL}/images/hero-beaches.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best time of year for scuba diving in Morocco?',
    a: 'The Mediterranean coast (Al Hoceima, Cabo Negro) is best from June through September, when water temperatures reach 22-25 degrees Celsius and visibility exceeds 20 meters. The Atlantic coast near Dakhla is diveable year-round with water temperatures of 18-23 degrees Celsius. Agadir is best from July to October. Seasonal pricing can change during peak summer months.',
  },
  {
    q: 'How much does a PADI Open Water course cost in Morocco?',
    a: 'A PADI Open Water Diver certification typically costs from 2,500 MAD to 4,500 MAD depending on the dive center and location. This includes theory sessions, confined water practice, and four open water dives. Advanced Open Water courses cost from 2,000 MAD to 3,500 MAD. Discover Scuba Diving introductory experiences start from 800 MAD. Seasonal pricing can change.',
  },
  {
    q: 'Is Morocco good for scuba diving compared to the Red Sea?',
    a: 'Morocco offers a different diving experience. The Mediterranean coast around Al Hoceima has protected marine reserves with grouper, barracuda, and octopus on rocky reef systems. The Atlantic coast provides pelagic encounters and unique cold-water marine life. Visibility is generally lower than the Red Sea (10-25 meters vs 30+ meters), but Morocco combines diving with cultural travel in a way Egypt cannot match.',
  },
  {
    q: 'Do I need a diving license to scuba dive in Morocco?',
    a: 'Yes. You need a recognized certification (PADI, SSI, CMAS, or equivalent) to dive independently. If you have no certification, most dive centers offer Discover Scuba Diving (DSD) experiences where an instructor guides you through a shallow dive after a brief pool session. A DSD costs from 800 MAD and requires no prior experience.',
  },
  {
    q: 'What marine life can I see while diving in Morocco?',
    a: 'The Mediterranean side hosts grouper, moray eels, barracuda, octopus, nudibranchs, sea bream, and occasional sunfish (mola mola). The Atlantic coast adds encounters with rays, sea turtles, dolphins, and seasonal whale sharks near Dakhla. Both coasts have dense fields of sea urchins, colorful sponges, and gorgonian fans on rocky walls.',
  },
  {
    q: 'Can I snorkel instead of scuba dive in Morocco?',
    a: 'Yes. Al Hoceima, Cabo Negro, and the coves near Ceuta offer excellent snorkeling with visibility up to 20 meters in summer. Snorkeling gear rental costs from 100 MAD per day. Guided snorkeling boat trips start from 300 MAD. The Mediterranean coast is better for snorkeling than the Atlantic, which tends to have more swell and lower visibility near shore.',
  },
  {
    q: 'Is it safe to dive in Morocco?',
    a: 'Yes, diving in Morocco is safe when you use a reputable, insured dive center with certified instructors. The main risks are strong Atlantic currents on the western coast and cold water temperatures that require proper thermal protection. Always verify your dive center carries valid PADI or SSI certification, has functioning safety equipment, and carries DAN or equivalent insurance coverage.',
  },
  {
    q: 'Where is the nearest hyperbaric chamber in Morocco?',
    a: 'The main hyperbaric chambers are located at military hospitals in Casablanca and Rabat. Al Hoceima has a smaller facility. Dive centers operating in remote areas like Dakhla coordinate emergency evacuations to Casablanca. Always dive within your certification limits, carry DAN insurance, and confirm your dive center has an emergency action plan before you descend.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Scuba Diving Guide 2026',
  description:
    'Complete guide to scuba diving in Morocco covering top dive sites, marine life, PADI certification, water temperatures, visibility, equipment rental, and season planning across the Mediterranean and Atlantic coasts.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-beaches.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Scuba Diving Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: DIVE SITES
   ================================================================ */

const diveSites = [
  {
    name: 'Al Hoceima National Park',
    coast: 'Mediterranean',
    icon: Anchor,
    depth: '5-40 m',
    visibility: '15-30 m',
    temperature: '16-25 °C',
    highlight: 'Protected marine reserve with the densest grouper populations in the western Mediterranean',
    description:
      'Al Hoceima sits inside a national park that extends offshore, creating one of the most biodiverse marine zones in North Africa. Rocky pinnacles drop from 5 meters to beyond 40 meters, covered in gorgonian fans, orange cup corals, and dense colonies of sponges. Large dusky grouper, barracuda schools, and moray eels are resident year-round. The park restricts fishing, which means marine life density here surpasses almost any other spot on the Moroccan coast.',
    bestMonths: 'June - September',
    sites: ['Ile de Terre', 'Cala Bonita Wall', 'Quemado Reef', 'Badis Pinnacles'],
  },
  {
    name: 'Cabo Negro & M\'diq',
    coast: 'Mediterranean',
    icon: Navigation,
    depth: '8-35 m',
    visibility: '10-25 m',
    temperature: '16-24 °C',
    highlight: 'Accessible wall dives with regular octopus, nudibranch, and sea bream sightings',
    description:
      'The stretch between Cabo Negro and M\'diq offers several wall and reef dives reachable by short boat rides from Tetouan or M\'diq marina. Rocky drop-offs host dense octopus populations, colorful nudibranchs, and patrolling schools of sea bream and dentex. The area is less protected than Al Hoceima, but the proximity to Tangier and Tetouan makes it the most accessible Mediterranean diving in Morocco. Several dive centers operate from M\'diq port.',
    bestMonths: 'June - October',
    sites: ['Cabo Negro Point', 'M\'diq Reef', 'Restinga Shoals', 'Marina Wall'],
  },
  {
    name: 'Ceuta Border Area',
    coast: 'Mediterranean / Strait of Gibraltar',
    icon: Compass,
    depth: '10-45 m',
    visibility: '8-20 m',
    temperature: '15-23 °C',
    highlight: 'Strait of Gibraltar currents attract pelagics including tuna, dolphins, and seasonal sunfish',
    description:
      'The waters near the Ceuta border zone sit where the Mediterranean meets the Atlantic through the Strait of Gibraltar. Strong currents funnel nutrients that attract pelagic species rarely seen elsewhere in Morocco: bluefin tuna, common dolphins, sunfish (mola mola), and occasional minke whales. Drift dives along the strait walls are advanced-level due to currents, but the marine life payoff is significant. Dive centers in Fnideq and the Ceuta area serve this zone.',
    bestMonths: 'May - October',
    sites: ['Strait Wall', 'Benzú Reef', 'Punta Almina Drop', 'Isla de Perejil'],
  },
  {
    name: 'Essaouira',
    coast: 'Atlantic',
    icon: Waves,
    depth: '5-20 m',
    visibility: '5-15 m',
    temperature: '16-21 °C',
    highlight: 'Snorkeling-focused with rocky coves, Mogador island bird colonies, and rich intertidal zones',
    description:
      'Essaouira is better known for wind and surf than for diving, but the rocky coastline and Mogador islands offer worthwhile snorkeling and shallow dive experiences. The intertidal rock pools teem with sea urchins, anemones, small octopus, and blennies. Boat trips to the Mogador islands (Iles Purpuraires) combine snorkeling with birdwatching -- Eleonora\'s falcons and osprey nest on the cliffs above. Diving is limited by Atlantic swell and lower visibility, but adventurous divers find interesting macro life on the rock formations.',
    bestMonths: 'July - September',
    sites: ['Mogador Island Coves', 'Borj el Baroud Reef', 'Diabat Rocks', 'Port Breakwater'],
  },
  {
    name: 'Agadir & Taghazout',
    coast: 'Atlantic',
    icon: Sun,
    depth: '8-30 m',
    visibility: '8-20 m',
    temperature: '17-22 °C',
    highlight: 'Warm Atlantic waters with ray encounters, reef fish, and wreck dives',
    description:
      'The Agadir coastline benefits from the Canary Current, which brings relatively warm water and nutrients. Several rocky reef systems between Agadir and Taghazout host stingrays, eagle rays, grouper, and large schools of sardines that attract dolphins. There are a handful of wreck dives -- fishing boats and a cargo vessel -- that have become artificial reefs covered in barnacles and soft corals. Dive centers in Agadir and Taghazout run daily boat trips from June through October.',
    bestMonths: 'June - October',
    sites: ['Taghazout Reef', 'Agadir Wreck', 'Banana Beach Wall', 'Imourane Rocks'],
  },
  {
    name: 'Dakhla',
    coast: 'Atlantic (Saharan)',
    icon: Shell,
    depth: '5-25 m',
    visibility: '10-25 m',
    temperature: '18-23 °C',
    highlight: 'Lagoon diving with sea turtles, rays, and seasonal whale shark sightings',
    description:
      'Dakhla\'s enormous lagoon and outer Atlantic coastline make it Morocco\'s most unexpected dive destination. The lagoon\'s shallow, warm waters host green sea turtles, guitar sharks, eagle rays, and dense schools of mullet. Outside the lagoon, the open Atlantic delivers seasonal whale shark sightings (November to February) and humpback whale migrations. Dakhla is remote -- a 90-minute flight from Casablanca -- but the combination of uncrowded sites, warm water, and megafauna encounters makes it worth the journey.',
    bestMonths: 'Year-round (whale sharks Nov-Feb)',
    sites: ['Dakhla Lagoon', 'Pointe de l\'Or', 'Dragon Island', 'Puerto Rico Bay'],
  },
];

/* ================================================================
   DATA: WATER TEMPERATURES & VISIBILITY BY MONTH
   ================================================================ */

const seasonData = [
  { season: 'Winter (Dec-Feb)', medTemp: '14-16 °C', atlTemp: '16-18 °C', medVis: '10-20 m', atlVis: '8-15 m', notes: 'Off-season for Mediterranean diving. Atlantic coast at Dakhla remains diveable. Whale shark season near Dakhla peaks.' },
  { season: 'Spring (Mar-May)', medTemp: '16-19 °C', atlTemp: '17-19 °C', medVis: '10-20 m', atlVis: '8-15 m', notes: 'Water warming up. Plankton blooms reduce visibility but attract filter feeders. Dive centers reopen in April.' },
  { season: 'Summer (Jun-Aug)', medTemp: '22-25 °C', atlTemp: '19-22 °C', medVis: '20-30 m', atlVis: '10-20 m', notes: 'Peak season. Best visibility, warmest water. All dive centers operating. Book PADI courses in advance.' },
  { season: 'Autumn (Sep-Nov)', medTemp: '20-23 °C', atlTemp: '19-21 °C', medVis: '15-25 m', atlVis: '10-18 m', notes: 'Excellent shoulder season. Fewer crowds, still-warm water. September and October are arguably the best months overall.' },
];

/* ================================================================
   DATA: PADI COURSES & PRICING
   ================================================================ */

const padiCourses = [
  { course: 'Discover Scuba Diving (DSD)', duration: '1 day', dives: '1-2 dives', price: 'From 800 MAD', prereq: 'No experience needed', description: 'Pool briefing followed by a shallow ocean dive to 12 meters. An instructor stays with you throughout.' },
  { course: 'PADI Open Water Diver', duration: '3-4 days', dives: '4 open water dives', price: 'From 2,500 MAD', prereq: 'Minimum age 10, swimming ability', description: 'Full certification allowing you to dive independently to 18 meters worldwide. Theory, pool sessions, and ocean dives.' },
  { course: 'PADI Advanced Open Water', duration: '2-3 days', dives: '5 adventure dives', price: 'From 2,000 MAD', prereq: 'Open Water certification', description: 'Extends your depth limit to 30 meters. Includes deep dive, navigation, and three specialty electives.' },
  { course: 'PADI Rescue Diver', duration: '3-4 days', dives: 'Rescue scenarios', price: 'From 3,000 MAD', prereq: 'Advanced Open Water + EFR', description: 'Stress management, problem-solving, and rescue techniques. A significant step toward professional-level diving.' },
  { course: 'Fun Dives (certified divers)', duration: 'Half day', dives: '2 boat dives', price: 'From 600 MAD', prereq: 'Any certification', description: 'Two guided boat dives at local sites. Equipment rental included at most centers. Seasonal pricing can change.' },
];

/* ================================================================
   DATA: EQUIPMENT RENTAL PRICING
   ================================================================ */

const equipmentPrices = [
  { item: 'Full equipment set (BCD, reg, wetsuit, mask, fins)', price: 'From 350 MAD/day' },
  { item: 'Wetsuit only (3mm or 5mm)', price: 'From 80 MAD/day' },
  { item: 'BCD + Regulator', price: 'From 200 MAD/day' },
  { item: 'Mask, snorkel, fins set', price: 'From 100 MAD/day' },
  { item: 'Dive computer rental', price: 'From 150 MAD/day' },
  { item: 'Underwater camera rental (GoPro)', price: 'From 200 MAD/day' },
  { item: 'Snorkeling gear (mask, snorkel, fins)', price: 'From 100 MAD/day' },
];

/* ================================================================
   DATA: UNDERWATER PHOTOGRAPHY TIPS
   ================================================================ */

const photoTips = [
  { title: 'Bring a Wide-Angle Lens', icon: Camera, text: 'Morocco\'s dive sites feature walls, pinnacles, and large marine life. A wide-angle or fisheye lens captures these scenes far better than a macro setup. Visibility limits make close subjects with wide framing the winning combination.' },
  { title: 'Use Red Filters on the Atlantic', icon: Eye, text: 'Atlantic waters absorb red light quickly. A red filter on your GoPro or housing restores natural color without post-processing. Remove the filter below 5 meters on Mediterranean dives where water is clearer.' },
  { title: 'Shoot Upward for Silhouettes', icon: Sun, text: 'Mediterranean grouper and barracuda silhouetted against the blue surface make striking images. Position yourself below the subject and shoot upward using natural light.' },
  { title: 'Respect Marine Life', icon: Heart, text: 'Do not chase, touch, or harass marine animals for a photograph. Maintain neutral buoyancy to avoid damaging reef structures. The best wildlife shots come from patience, not pursuit.' },
];

/* ================================================================
   DATA: MED vs ATLANTIC COMPARISON
   ================================================================ */

const coastComparison = [
  { feature: 'Water Temperature', med: '14-25 °C (seasonal)', atl: '16-23 °C (more stable)' },
  { feature: 'Visibility', med: '10-30 m (peaks in summer)', atl: '5-25 m (variable)' },
  { feature: 'Current Strength', med: 'Generally mild', atl: 'Moderate to strong' },
  { feature: 'Marine Life Style', med: 'Reef fish, grouper, nudibranch', atl: 'Pelagics, rays, turtles, sharks' },
  { feature: 'Best For', med: 'Wall dives, macro photography', atl: 'Pelagic encounters, adventure diving' },
  { feature: 'Certification Level', med: 'All levels', atl: 'Intermediate to advanced recommended' },
  { feature: 'Season', med: 'June - October', atl: 'Year-round (Dakhla), Jun-Oct elsewhere' },
  { feature: 'Wetsuit Needed', med: '3mm summer, 5mm spring/autumn', atl: '5mm minimum, 7mm winter' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoScubaDivingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-beaches.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Scuba Diving Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Anchor className="w-4 h-4" />
            Scuba Diving &amp; Marine Adventures
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Scuba Diving
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the grouper-rich Mediterranean reefs of Al Hoceima to Dakhla&apos;s
            whale shark waters on the Saharan Atlantic. Dive sites, PADI courses, gear
            rental, and season planning across two coastlines.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Two Coastlines, Two Oceans, One Country
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco sits at the junction of the Mediterranean Sea and the Atlantic Ocean,
              with over 3,500 kilometers of coastline running from the Strait of Gibraltar down
              to the Saharan shores near Mauritania. This geographic position creates diving
              conditions found nowhere else in North Africa: warm Mediterranean reef systems
              in the north, nutrient-rich Atlantic walls in the center, and remote Saharan
              lagoons in the far south where sea turtles and whale sharks congregate.
            </p>
            <p>
              Diving in Morocco remains under the international radar. While neighboring
              Egypt and its Red Sea resorts dominate North African dive tourism, Morocco
              quietly harbors marine reserves that rival anything in the western Mediterranean.
              Al Hoceima National Park protects grouper and barracuda populations that have been
              fished out of most European waters. Dakhla, 1,200 kilometers south of Casablanca,
              offers megafauna encounters that would cost twice as much in the Maldives or Galapagos.
            </p>
            <p>
              Whether you are a certified diver looking for uncrowded sites or a beginner
              considering your first PADI course, Morocco offers a combination of marine
              biodiversity, affordability, and cultural richness that few dive destinations
              can match. Fun dives start from 600 MAD for two boat dives, and a full Open Water
              certification runs from 2,500 MAD -- a fraction of European or Southeast Asian prices.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mediterranean vs Atlantic Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mediterranean vs Atlantic Diving
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two different seas produce two distinct diving experiences. Here is how they compare.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full card-moroccan overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-accent)] text-white">
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] text-sm">Feature</th>
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] text-sm">Mediterranean Coast</th>
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] text-sm">Atlantic Coast</th>
                </tr>
              </thead>
              <tbody>
                {coastComparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                    <td className="p-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{row.feature}</td>
                    <td className="p-4 text-sm text-[var(--text-secondary)]">{row.med}</td>
                    <td className="p-4 text-sm text-[var(--text-secondary)]">{row.atl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Dive Sites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Dive Sites in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six regions across the Mediterranean and Atlantic coasts, each with distinct underwater topography and marine life.
          </p>

          <div className="space-y-8">
            {diveSites.map((site) => {
              const SiteIcon = site.icon;
              return (
                <div key={site.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                        <SiteIcon className="w-7 h-7 text-[var(--color-accent)]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {site.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs font-medium">
                          {site.coast}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-accent)] font-medium mb-3">{site.highlight}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{site.description}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                          <p className="text-xs text-[var(--text-secondary)]">Depth Range</p>
                          <p className="text-sm font-bold text-[var(--text-primary)]">{site.depth}</p>
                        </div>
                        <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                          <p className="text-xs text-[var(--text-secondary)]">Visibility</p>
                          <p className="text-sm font-bold text-[var(--text-primary)]">{site.visibility}</p>
                        </div>
                        <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                          <p className="text-xs text-[var(--text-secondary)]">Water Temp</p>
                          <p className="text-sm font-bold text-[var(--text-primary)]">{site.temperature}</p>
                        </div>
                        <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                          <p className="text-xs text-[var(--text-secondary)]">Best Months</p>
                          <p className="text-sm font-bold text-[var(--text-primary)]">{site.bestMonths}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Named Dive Sites:</p>
                        <div className="flex flex-wrap gap-2">
                          {site.sites.map((s) => (
                            <span key={s} className="px-3 py-1 rounded-full bg-[var(--surface-muted)] text-xs text-[var(--text-secondary)]">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Season Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dive Season by Month
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Water temperature and visibility shift significantly between seasons. Plan your trip around these conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonData.map((s) => (
              <div key={s.season} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                  {s.season}
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Med. Temp</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {s.medTemp}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Atlantic Temp</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      {s.atlTemp}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Med. Visibility</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {s.medVis}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-secondary)]">Atlantic Visibility</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      {s.atlVis}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PADI Courses ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            PADI Certification Courses
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Get certified in Morocco at a fraction of European prices. Most dive centers also accept SSI and CMAS students.
          </p>

          <div className="space-y-4">
            {padiCourses.map((c) => (
              <div key={c.course} className="card-moroccan p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {c.course}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{c.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {c.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Anchor className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {c.dives}
                      </span>
                      <span className="flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {c.prereq}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-[var(--color-accent)]">{c.price}</p>
                    <p className="text-xs text-[var(--text-secondary)]">Seasonal pricing can change</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment Rental ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Equipment Rental Pricing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most dive centers include basic equipment in their dive packages. Standalone rental rates for certified divers bringing partial gear.
          </p>

          <div className="card-moroccan overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-accent)] text-white">
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] text-sm">Equipment</th>
                  <th className="text-right p-4 font-[family-name:var(--font-heading)] text-sm">Daily Rate</th>
                </tr>
              </thead>
              <tbody>
                {equipmentPrices.map((eq, i) => (
                  <tr key={eq.item} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                    <td className="p-4 text-sm text-[var(--text-secondary)]">{eq.item}</td>
                    <td className="p-4 text-sm font-bold text-[var(--text-primary)] text-right">{eq.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-secondary)] text-center mt-4">
            Prices are approximate and can vary by location and season. Dakhla and remote areas may charge more due to logistics. Seasonal pricing can change.
          </p>
        </div>
      </section>

      {/* ── Marine Life ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marine Life of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you can expect to see beneath the surface on both coasts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                Mediterranean Species
              </h3>
              <ul className="space-y-2">
                {[
                  'Dusky grouper (Epinephelus marginatus) -- large resident populations in Al Hoceima',
                  'Mediterranean barracuda -- schools of 20-50 individuals patrolling walls',
                  'Moray eels (both Mediterranean and spotted species) in rocky crevices',
                  'Octopus vulgaris -- extremely common, visible on almost every dive',
                  'Nudibranchs -- over a dozen species across rocky reef habitats',
                  'Sea bream and dentex -- abundant schooling fish on mid-depth reefs',
                  'Gorgonian sea fans -- purple and red colonies on walls below 15 meters',
                  'Sunfish (mola mola) -- seasonal visitors in the Strait of Gibraltar area',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Waves className="w-5 h-5 text-[var(--color-accent)]" />
                Atlantic Species
              </h3>
              <ul className="space-y-2">
                {[
                  'Green sea turtles -- resident in Dakhla lagoon, commonly spotted',
                  'Eagle rays and stingrays -- sandy bottoms near Agadir and Dakhla',
                  'Guitar sharks (Rhinobatos) -- Dakhla lagoon speciality',
                  'Whale sharks -- seasonal (Nov-Feb) off Dakhla, Morocco\'s largest fish',
                  'Dolphins (common and bottlenose) -- frequently seen on boat crossings',
                  'Sardine and mackerel bait balls -- attract pelagic predators near Agadir',
                  'Humpback whales -- migration route passes Dakhla (Feb-Apr), seen from boats',
                  'Large schools of mullet and barracuda in the Dakhla lagoon shallows',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Snorkeling Alternatives ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Snorkeling Alternatives
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not ready to dive? Morocco offers excellent snorkeling on the Mediterranean coast and in the Dakhla lagoon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                spot: 'Al Hoceima Coves',
                description: 'Sheltered coves within the national park offer snorkeling in 2-5 meters of crystal-clear water. Octopus, sea bream, and colorful wrasse are visible from the surface. Boat trips to remote coves start from 300 MAD.',
                vis: 'Up to 25 m',
              },
              {
                spot: 'Cabo Negro & M\'diq',
                description: 'Rocky shoreline with easy entry points for shore-based snorkeling. Sea urchins, starfish, and small reef fish populate the shallows. Rental gear available at beach clubs for from 100 MAD per day.',
                vis: 'Up to 20 m',
              },
              {
                spot: 'Dakhla Lagoon',
                description: 'Warm, shallow, and calm -- the Dakhla lagoon is ideal for snorkeling. Green sea turtles, rays, and schools of fish in waist-to-chest-deep water. Some kite-surf centers offer snorkeling add-ons from 200 MAD.',
                vis: 'Up to 15 m',
              },
            ].map((s) => (
              <div key={s.spot} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {s.spot}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{s.description}</p>
                <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> Visibility: {s.vis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Underwater Photography ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Underwater Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for capturing Morocco&apos;s underwater world on camera.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <TipIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting to Dive Sites ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Morocco&apos;s Dive Regions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Logistics for reaching each dive area from Morocco&apos;s main airports and cities.
          </p>

          <div className="space-y-4">
            {[
              {
                region: 'Al Hoceima',
                access: 'Fly to Al Hoceima Cherif Al Idrissi Airport (AHU) from Casablanca (1h 15min). Alternatively, drive from Tangier (5 hours) or Fes (4.5 hours). Local dive centers arrange boat departures from Al Hoceima port.',
              },
              {
                region: 'Cabo Negro & M\'diq',
                access: 'Fly to Tangier Ibn Battouta Airport (TNG), then drive south 45 minutes to M\'diq. Tetouan is 20 minutes from M\'diq. Dive boats depart from M\'diq marina.',
              },
              {
                region: 'Ceuta Border Area',
                access: 'Access from Fnideq, a 30-minute drive south of Tangier. Some divers base in Tangier or Tetouan. Dive centers in the area provide transport to boat launch points.',
              },
              {
                region: 'Essaouira',
                access: 'Fly to Essaouira Mogador Airport (ESU) from Casablanca (1h) or drive from Marrakech (2.5 hours). Boat trips to dive and snorkel sites depart from the main port.',
              },
              {
                region: 'Agadir & Taghazout',
                access: 'Fly to Agadir Al Massira Airport (AGA) with direct flights from many European cities. Taghazout is 20 minutes north. Dive boats depart from Agadir port and Taghazout beach.',
              },
              {
                region: 'Dakhla',
                access: 'Fly to Dakhla Airport (VIL) from Casablanca (1h 30min). There is no practical overland route for most visitors. Dive and kitesurf operators arrange transfers from the airport to the lagoon camps, typically 30-45 minutes.',
              },
            ].map((item) => (
              <div key={item.region} className="card-moroccan p-5 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{item.region}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.access}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety & Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety &amp; Practical Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you need to know before descending into Moroccan waters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Choose a Certified Center', icon: Award, text: 'Only dive with centers holding valid PADI, SSI, or CMAS affiliation. Ask to see their insurance certificate and check that instructors carry current certifications. Reputable centers display these openly.' },
              { title: 'Get DAN Insurance', icon: ShieldCheck, text: 'Divers Alert Network (DAN) insurance covers hyperbaric treatment and emergency evacuation worldwide. Annual plans cost around 350 MAD and are worth every dirham, especially for diving in remote areas like Dakhla.' },
              { title: 'Watch for Currents', icon: Waves, text: 'Atlantic dive sites can have strong currents, particularly near the Strait of Gibraltar and along exposed headlands. Always carry a surface marker buoy (SMB). Listen to your dive guide\'s briefing about current direction and strength.' },
              { title: 'Respect Depth Limits', icon: AlertTriangle, text: 'Dive within your certification level. Open Water divers should stay above 18 meters. Advanced divers are certified to 30 meters. The nearest hyperbaric chambers are in Casablanca and Rabat -- prevention is better than treatment.' },
              { title: 'Thermal Protection', icon: Thermometer, text: 'Even in summer, Atlantic waters can feel cold at depth. A 5mm wetsuit is the minimum for Atlantic dives year-round. Mediterranean summer dives are comfortable in 3mm, but bring a 5mm for spring and autumn.' },
              { title: 'Hydrate and Rest', icon: Droplets, text: 'Morocco\'s sun and heat can dehydrate you before you even enter the water. Drink at least 2 liters of water on dive days. Avoid alcohol the night before diving. Allow a 24-hour surface interval before flying.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <ItemIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Choosing a Dive Center ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Choose a Dive Center
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has a growing dive industry. Use these criteria to find a reliable operator.
          </p>

          <div className="space-y-4">
            {[
              { check: 'Valid PADI, SSI, or CMAS affiliation displayed publicly', detail: 'Ask for the center\'s store number. You can verify it on the PADI website. Unaffiliated operators may lack proper training standards and insurance coverage.' },
              { check: 'Equipment in good condition and recently serviced', detail: 'Check BCDs for leaks, regulators for free-flow, and wetsuits for tears. Well-maintained gear is the clearest sign of a professional operation. Ask when regulators were last serviced.' },
              { check: 'Small group sizes (maximum 4-6 divers per guide)', detail: 'Large groups underwater reduce safety and enjoyment. The best Moroccan dive centers keep ratios at 4:1 or lower. For beginners, 2:1 is ideal.' },
              { check: 'Clear emergency action plan and oxygen kit on the boat', detail: 'Every dive boat should carry emergency oxygen, a first aid kit, and a communication device. Ask the center about their emergency protocol and nearest hyperbaric chamber location.' },
              { check: 'Online reviews from recent visitors', detail: 'Check Google Maps and TripAdvisor for reviews from the current year. Moroccan dive tourism is growing, and some newer centers are excellent while others may still be developing their operations.' },
            ].map((item) => (
              <div key={item.check} className="card-moroccan p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{item.check}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Coastal Waters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-beaches.webp"
                alt="Rocky Moroccan coastline with crystal-clear turquoise water suitable for diving and snorkeling"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Mediterranean Coastline</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-dakhla.webp"
                alt="Dakhla lagoon with calm turquoise waters along the Saharan Atlantic coast of Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Dakhla Lagoon</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-agadir.webp"
                alt="Agadir Atlantic coastline with waves breaking on rocky shores near dive sites"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Agadir Coast</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about scuba diving in Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Best Beaches in Morocco',
                description: 'Top-rated beaches across the Mediterranean and Atlantic coasts for swimming, surfing, and relaxation.',
                href: '/best-beaches-morocco',
                icon: Waves,
              },
              {
                title: 'Morocco Surfing Guide',
                description: 'Surf spots from Taghazout to Dakhla with wave conditions, board rental, and surf camp recommendations.',
                href: '/surfing',
                icon: Navigation,
              },
              {
                title: 'Dakhla Travel Guide',
                description: 'Complete guide to Morocco\'s Saharan peninsula -- kitesurfing, lagoon sports, desert excursions, and where to stay.',
                href: '/dakhla',
                icon: MapPin,
              },
              {
                title: 'Morocco Adventure Guide',
                description: 'Outdoor activities across Morocco: trekking, climbing, kayaking, sandboarding, and extreme sports.',
                href: '/adventure',
                icon: Compass,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Dive Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From your first breaths underwater to advanced pelagic encounters, Morocco&apos;s
            two coastlines offer diving experiences you will not find anywhere else in North Africa.
            Start planning your underwater adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              Explore Coastal Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              More Adventures
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
