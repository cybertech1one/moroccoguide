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
  Building,
  Award,
  BookOpen,
  Compass,
  Map,
  Landmark,
  Shield,
  ShoppingBag,
  Eye,
  Footprints,
  Layers,
  Navigation,
  MessageCircle,
  Sun,
  Moon,
  ThumbsUp,
  CircleAlert,
  Smartphone,
  Camera,
  Coffee,
  HandCoins,
  Scale,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'How to Navigate Moroccan Medinas — Complete Survival Guide 2026',
  description:
    'Master Morocco\'s ancient medinas with this complete guide. Navigate Fes el-Bali, Marrakech, Chefchaouen, and more. Haggling tips, fair prices, safety advice, dealing with touts, and why getting lost is the best part.',
  keywords: [
    'moroccan medina guide',
    'navigate medina morocco',
    'medina tips',
    'best medinas morocco',
    'fes medina navigation',
    'marrakech medina guide',
    'morocco souk guide',
    'haggling morocco',
    'medina safety tips',
    'fes el bali guide',
    'chefchaouen medina',
    'essaouira medina',
    'morocco medina architecture',
    'dealing with touts morocco',
    'faux guides morocco',
    'medina shopping tips',
    'UNESCO medina morocco',
    'morocco old city guide',
    'medina navigation app',
    'getting lost medina morocco',
  ],
  openGraph: {
    title: 'How to Navigate Moroccan Medinas — Complete Survival Guide 2026',
    description:
      'Master Morocco\'s ancient medinas. Navigate Fes el-Bali, haggle in Marrakech souks, dodge touts, and discover why getting lost is the best part. Prices, safety tips, and local strategies.',
    url: `${BASE_URL}/morocco-medina-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Narrow alleyway inside a Moroccan medina with sunlight filtering through latticed windows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Navigate Moroccan Medinas — Complete Survival Guide 2026',
    description:
      'Navigate Fes el-Bali, haggle in Marrakech souks, and survive Morocco\'s ancient walled cities. Fair prices, safety tips, and local know-how.',
    images: [`${BASE_URL}/images/hero-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-medina-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-medina-guide`,
  name: 'How to Navigate Moroccan Medinas — Complete Survival Guide 2026',
  description:
    'Complete guide to navigating Morocco\'s historic medinas. Covers Fes el-Bali, Marrakech, Chefchaouen, Essaouira, Meknes, Tetouan, and Tangier. Includes shopping tips, fair prices, safety advice, and dealing with touts.',
  url: `${BASE_URL}/morocco-medina-guide`,
  image: `${BASE_URL}/images/hero-medina.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-medina-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Medina Guide', item: `${BASE_URL}/morocco-medina-guide` },
    ],
  },
};

const faqItems = [
  {
    question: 'Is it safe to walk through a Moroccan medina at night?',
    answer:
      'Main thoroughfares in Marrakech and Fes stay active until 22:00-23:00 and are generally safe. Side alleys empty out after sunset, so stick to lit routes. Chefchaouen and Essaouira feel safe even later because foot traffic remains steady. Avoid poorly lit dead-end derbs after dark anywhere.',
  },
  {
    question: 'Do I need a guide to navigate the Fes medina?',
    answer:
      'Fes el-Bali has over 9,000 alleys, so a licensed guide helps enormously on your first visit. Official guides carry government-issued ID cards and charge from 300 MAD for a half-day tour. After one guided walk, you will recognize enough landmarks to explore sections on your own.',
  },
  {
    question: 'What is the best GPS app for medina navigation?',
    answer:
      'Maps.me works best inside medinas because it uses OpenStreetMap data that includes narrow alleys not shown on Google Maps. Download the offline Morocco map before you arrive. Google Maps works reasonably well in Marrakech and Essaouira but loses accuracy in the deep lanes of Fes.',
  },
  {
    question: 'How much should I pay for a leather bag in the Fes medina?',
    answer:
      'A genuine leather crossbody bag should cost from 150-350 MAD depending on size and quality. The first price quoted will be 2-3 times higher. A large travel bag runs from 400-800 MAD. Always check the smell and feel — real leather smells of tannery, not chemicals. Ask to see unfinished pieces to verify authenticity.',
  },
  {
    question: 'Are Moroccan medinas accessible for wheelchair users?',
    answer:
      'Most medinas are not wheelchair-friendly due to narrow lanes, uneven cobblestones, and frequent steps. Essaouira is the most accessible, with flatter terrain and wider main streets. Marrakech&apos;s Jemaa el-Fnaa square is accessible, but the souk alleys are tight. Riads often have stairs with no lift.',
  },
  {
    question: 'Can I take photos inside the medina?',
    answer:
      'General street photography is fine. Avoid photographing people directly without asking — a nod or gesture goes a long way. Never photograph military or police buildings. Some shopkeepers enjoy posing; others expect a small tip (from 5-10 MAD). The tanneries in Fes charge from 20 MAD for rooftop photography access.',
  },
  {
    question: 'What is the difference between a medina and a souk?',
    answer:
      'A medina is the entire old walled city, including residential neighborhoods, mosques, schools, and markets. A souk is specifically the commercial marketplace within the medina. Souks are organized by trade — you will find a souk for spices, one for leather, one for metalwork, and so on. Every medina contains souks, but the souk is only one part of the medina.',
  },
] as const;

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP MEDINAS RANKED
   ═══════════════════════════════════════════════════════════════ */

const topMedinas = [
  {
    rank: 1,
    name: 'Fes el-Bali',
    city: 'Fes',
    unesco: true,
    unescoYear: 1981,
    icon: Award,
    population: '~156,000 residents',
    size: '280 hectares, 9,400+ alleys',
    difficulty: 'Expert — easiest to get lost',
    description:
      'The largest car-free urban zone on Earth. Founded in the 9th century, Fes el-Bali packs 9,400 lanes, 350 mosques, and the world\'s oldest university (al-Qarawiyyin, est. 859 CE) into 280 hectares. The Chouara tannery, visible from surrounding rooftops, has operated since the 11th century. Mule trains still deliver goods because no vehicle can fit through most passages.',
    mustSee: ['Chouara Tannery', 'Bou Inania Madrasa', 'Al-Qarawiyyin Mosque', 'Nejjarine Fondouk'],
  },
  {
    rank: 2,
    name: 'Marrakech Medina',
    city: 'Marrakech',
    unesco: true,
    unescoYear: 1985,
    icon: Star,
    population: '~600,000 residents',
    size: '600 hectares',
    difficulty: 'Moderate — major routes are clear',
    description:
      'The most visited medina in Morocco. Jemaa el-Fnaa square anchors the entire layout — if you are lost, ask anyone for "la place" and they will point you the right way. The souks radiate north from the square in a roughly grid-like pattern. Better signposted than Fes, with wider main arteries. The dye souk (Souk Sebbaghine) and spice square (Rahba Kedima) are standout sections.',
    mustSee: ['Jemaa el-Fnaa', 'Bahia Palace', 'Koutoubia Mosque', 'Souk Sebbaghine (Dyers\' Souk)'],
  },
  {
    rank: 3,
    name: 'Chefchaouen Medina',
    city: 'Chefchaouen',
    unesco: false,
    unescoYear: 0,
    icon: Eye,
    population: '~42,000 residents',
    size: 'Compact — walkable in 2 hours',
    difficulty: 'Easy — small and well-signed',
    description:
      'The "Blue Pearl" of Morocco. Nearly every wall and staircase is painted in shades of blue, from powder to cobalt. Founded in 1471 as a fortress against Portuguese invaders, the medina sits on a hillside beneath the Rif Mountains. Plaza Uta el-Hammam serves as the central square. The Kasbah museum (from 60 MAD) anchors the layout, and the Ras el-Maa waterfall at the eastern edge is where locals still wash laundry.',
    mustSee: ['Plaza Uta el-Hammam', 'Kasbah Museum', 'Ras el-Maa Waterfall', 'Blue-painted streets'],
  },
  {
    rank: 4,
    name: 'Essaouira Medina',
    city: 'Essaouira',
    unesco: true,
    unescoYear: 2001,
    icon: Compass,
    population: '~77,000 residents',
    size: 'Compact — grid layout',
    difficulty: 'Easy — logical street grid',
    description:
      'The most navigable medina in Morocco. French military architect Théodore Cornut designed it in the 18th century with a rational grid plan — rare for a Moroccan medina. Two main streets (Avenue de l\'Istiqlal and Avenue Mohammed Zerktouni) cross the center. The port, ramparts, and ocean serve as unmissable orientation points. Wind is constant; Essaouira means "little fortress."',
    mustSee: ['Skala de la Ville (ramparts)', 'Port and fish market', 'Mellah (Jewish Quarter)', 'Galerie Damgaard'],
  },
  {
    rank: 5,
    name: 'Meknes Medina',
    city: 'Meknes',
    unesco: true,
    unescoYear: 1996,
    icon: Landmark,
    population: '~550,000 (city)',
    size: 'Large — fewer tourists',
    difficulty: 'Moderate — less signage',
    description:
      'Meknes was Sultan Moulay Ismail\'s imperial capital in the 17th century, and the medina reflects that ambition. Bab Mansour, the grandest gate in Morocco, marks the entrance. The medina is less touristy than Fes or Marrakech, which means lower prices and more genuine interactions. The Heri es-Souani granaries and the underground prison of Christian slaves are unique to Meknes.',
    mustSee: ['Bab Mansour gate', 'Heri es-Souani (Royal Granaries)', 'Mausoleum of Moulay Ismail', 'Place el-Hedim'],
  },
  {
    rank: 6,
    name: 'Tetouan Medina',
    city: 'Tetouan',
    unesco: true,
    unescoYear: 1997,
    icon: Building,
    population: '~380,000 (city)',
    size: 'Medium — Andalusian influences',
    difficulty: 'Moderate — labyrinthine',
    description:
      'A strong Andalusian character sets Tetouan apart. Refugees from Spanish Reconquista Granada rebuilt this medina in the 15th century, and the Spanish-Moorish architecture remains. White-washed walls, wrought-iron balconies, and tiled courtyards feel more Andalusian than North African. The medina has seven historic gates and the Royal Palace sits at its heart.',
    mustSee: ['Bab Okla', 'Royal Palace exterior', 'Ethnographic Museum', 'Artisan school (Dar Sanaa)'],
  },
  {
    rank: 7,
    name: 'Tangier Medina',
    city: 'Tangier',
    unesco: false,
    unescoYear: 0,
    icon: Map,
    population: '~1.1 million (city)',
    size: 'Medium — perched on a hill',
    difficulty: 'Moderate — steep terrain',
    description:
      'Tangier\'s medina perches on a cliff above the Strait of Gibraltar. The Kasbah at the summit offers views across to Spain on clear days. The Petit Socco (Souk Dakhli) was the social hub of the "International Zone" era when writers like Paul Bowles and William Burroughs made Tangier their home. The Grand Socco connects the medina to the Ville Nouvelle.',
    mustSee: ['Kasbah Museum', 'Petit Socco', 'Grand Socco', 'American Legation Museum'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA LAYOUT ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

const medinaElements = [
  {
    name: 'Derb',
    icon: Footprints,
    description: 'A narrow residential lane, often a dead end. Derbs branch off main arteries and lead to clusters of homes. In Fes, some are barely shoulder-width. Locals know every turn in their derb — it functions as a micro-neighborhood.',
  },
  {
    name: 'Fondouk',
    icon: Building,
    description: 'A historic caravanserai — a two-story building with an open courtyard where traders stored goods and animals on the ground floor and slept upstairs. Today many serve as workshops for artisans. The Nejjarine Fondouk in Fes is now a woodworking museum.',
  },
  {
    name: 'Souk',
    icon: ShoppingBag,
    description: 'The commercial marketplace. Souks are organized by trade: spices, leather, textiles, metalwork, carpets, pottery. In Marrakech, each souk section has its own name. Souk Smarine is the main covered artery. Souk el-Attarine sells spices and perfumes.',
  },
  {
    name: 'Jemaa (Mosque)',
    icon: Landmark,
    description: 'Every neighborhood has a mosque, and the main Friday mosque (jemaa) anchors the medina. The minaret is the tallest structure and serves as your best compass. Non-Muslims cannot enter most mosques in Morocco, but the architecture is visible from the street.',
  },
  {
    name: 'Riad',
    icon: Layers,
    description: 'A traditional house built around an interior courtyard with a garden or fountain. The exterior walls are blank — all beauty faces inward. Thousands of riads in Fes and Marrakech have been converted into guesthouses, and sleeping inside the medina is the best way to experience it.',
  },
  {
    name: 'Bab (Gate)',
    icon: Award,
    description: 'The monumental gates in the medina walls. Fes has 14 historic gates. Bab Boujloud (the blue gate) is the most photographed. Gates serve as major orientation landmarks — when giving or receiving directions, gates are the primary reference points.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SOUK PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const soukPrices = [
  { item: 'Leather babouche slippers', fairPrice: 'From 80-150 MAD', startPrice: '300-500 MAD', category: 'Leather' },
  { item: 'Handwoven wool carpet (small)', fairPrice: 'From 500-1,500 MAD', startPrice: '2,000-5,000 MAD', category: 'Textiles' },
  { item: 'Ceramic tagine (decorative)', fairPrice: 'From 60-120 MAD', startPrice: '200-400 MAD', category: 'Pottery' },
  { item: 'Silver Berber ring', fairPrice: 'From 50-200 MAD', startPrice: '200-800 MAD', category: 'Jewelry' },
  { item: 'Argan oil (1 liter, cosmetic)', fairPrice: 'From 200-350 MAD', startPrice: '500-800 MAD', category: 'Beauty' },
  { item: 'Brass lantern (medium)', fairPrice: 'From 150-400 MAD', startPrice: '500-1,200 MAD', category: 'Metalwork' },
  { item: 'Spice mix (100g ras el hanout)', fairPrice: 'From 20-40 MAD', startPrice: '80-150 MAD', category: 'Spices' },
  { item: 'Leather crossbody bag', fairPrice: 'From 150-350 MAD', startPrice: '500-1,000 MAD', category: 'Leather' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoMedinaGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero + Breadcrumbs ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img
            src="/images/hero-medina.webp"
            alt="Sunlit alleyway inside Fes el-Bali medina with carved plaster walls and wooden lattice windows"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-1 text-sm text-white/80 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Moroccan Medina Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 max-w-4xl">
            How to Navigate Moroccan Medinas
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl font-[family-name:var(--font-heading)]">
            A complete survival guide to Morocco&apos;s ancient walled cities — from the 9,400 alleys of Fes el-Bali
            to the blue lanes of Chefchaouen. Practical navigation tips, fair prices, safety strategies, and
            why getting lost is half the point.
          </p>
        </div>
      </section>

      {/* ── What Is a Medina ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Is a Medina?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            The Arabic word &quot;medina&quot; simply means &quot;city.&quot; In Morocco, it refers specifically to the
            historic walled quarter — the original urban core that existed before French colonial-era expansion.
          </p>

          <div className="prose max-w-none">
            <div className="card-moroccan p-6 mb-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Morocco has more UNESCO-listed medinas than any other country. Four of them — Fes (1981),
                Marrakech (1985), Meknes (1996), and Essaouira (2001) — hold individual World Heritage status.
                Tetouan (1997) earned its listing for preserving the strongest Andalusian architectural character
                outside Spain. These designations protect structures dating back to the 9th century.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Medinas are not museums. They are living cities. Hundreds of thousands of people are born, work,
                eat, pray, and die inside these walls. Fes el-Bali alone houses roughly 156,000 residents. The
                density forces a vertical building style — houses stack three or four stories above lanes that
                narrow to less than a meter in places.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The walls served a defensive purpose. Each medina was a fortified city with gates (babs) that
                closed at night. Guard towers punctuated the perimeter. Today the walls remain, but the gates
                stay open around the clock. The walls now serve as the clearest orientation tool you have —
                when in doubt, walk toward the wall, and you will find a gate that connects to the modern city.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="card-moroccan p-5 text-center">
              <Award className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">5</p>
              <p className="text-xs text-[var(--text-secondary)]">UNESCO World Heritage Medinas</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Building className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">9th Century</p>
              <p className="text-xs text-[var(--text-secondary)]">Oldest medina foundations</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Users className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">1M+</p>
              <p className="text-xs text-[var(--text-secondary)]">People living inside medinas today</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ranking the Best Medinas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            The 7 Best Medinas in Morocco, Ranked
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each medina has a distinct character. Fes is labyrinthine and raw. Marrakech is theatrical. Chefchaouen
            is photogenic. Essaouira is breezy and easy to navigate. Here is how they compare.
          </p>

          <div className="space-y-6">
            {topMedinas.map((medina) => {
              const MedinaIcon = medina.icon;
              return (
                <div key={medina.rank} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:min-w-[200px]">
                      <span className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                        #{medina.rank}
                      </span>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {medina.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">{medina.city}</p>
                      </div>
                      <MedinaIcon className="w-6 h-6 text-[var(--color-gold)] ml-auto md:ml-2" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                        {medina.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" /> {medina.population}
                        </span>
                        <span className="flex items-center gap-1">
                          <Map className="w-3 h-3" /> {medina.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <Compass className="w-3 h-3" /> {medina.difficulty}
                        </span>
                        {medina.unesco && (
                          <span className="flex items-center gap-1 text-[var(--color-gold)] font-semibold">
                            <Award className="w-3 h-3" /> UNESCO {medina.unescoYear}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {medina.mustSee.map((sight) => (
                          <span key={sight} className="text-xs px-2 py-1 bg-[var(--surface-muted)] rounded-full text-[var(--text-secondary)]">
                            {sight}
                          </span>
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

      {/* ── How Medinas Are Organized ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Layers className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Medinas Are Organized
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Medinas look chaotic, but they follow a logical structure. Understanding the building blocks
            makes navigation far easier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medinaElements.map((element) => {
              const ElementIcon = element.icon;
              return (
                <div key={element.name} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ElementIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {element.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{element.description}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-8 zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Info className="w-5 h-5 inline text-[var(--color-accent)] mr-1" />
              The Hierarchy of Space
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Every medina follows a concentric hierarchy. The Friday mosque sits at the center. Surrounding it are
              the primary souks selling high-value goods (gold, silk, spices). As you move outward, you hit secondary
              souks (leather, pottery, woodwork). Beyond those lie the residential derbs. The periphery holds
              workshops producing noise, smoke, or smell — tanneries, dye works, and blacksmiths. The city walls
              form the final ring. This layout has not changed in a thousand years.
            </p>
          </div>
        </div>
      </section>

      {/* ── Navigation Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Navigation Tips That Actually Work
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Forget Google Maps in the deep medina. These are the strategies that actually keep you oriented.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Landmark className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                1. Use Minarets as Compass Points
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Minarets are the tallest structures in any medina. In Marrakech, the Koutoubia minaret (77 meters)
                is visible from almost anywhere in the medina. In Fes, the Karaouine minaret helps orient the central
                quarter. Pick the nearest minaret and note which direction it sits relative to your riad. That is
                your anchor point all day.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Smartphone className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                2. Download Maps.me Before You Arrive
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Maps.me uses OpenStreetMap data, which community volunteers have mapped down to individual derbs.
                It works offline. Download the Morocco map on airport Wi-Fi. Google Maps is adequate for Marrakech
                and Essaouira but misses hundreds of alleys in Fes. Pin your riad location on the first day — that
                blue dot will save you repeatedly.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                3. Ask Shopkeepers, Not Passersby
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A person walking through the medina might give you directions to lure you to their shop. A shopkeeper
                sitting at their stall has no reason to mislead you — they are already at work. Ask them. Use the
                name of the nearest major landmark: &quot;Bab Boujloud?&quot; or &quot;Jemaa el-Fnaa?&quot; They will point the way.
                Shopkeepers near your riad will start recognizing you by day two.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                4. Hire a Licensed Guide for Day One
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A half-day guided tour costs from 300 MAD in Fes and from 250 MAD in Marrakech. Official guides
                carry a government-issued laminated ID card with photo and license number. They will show you the
                main arteries, key gates, and your riad&apos;s location relative to major landmarks. After that
                initial orientation, navigating solo becomes dramatically easier. Book through your riad or at the
                official tourism office (ONMT) near the medina entrance.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                5. Photograph Turns, Not Just Sights
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                When you leave your riad, take a photo at every turn for the first three or four intersections.
                Photograph distinctive doorways, painted walls, or shop signs. On the way back, swipe through your
                photos in reverse order. This trick is more reliable than any map in the deep derbs of Fes where
                GPS accuracy drops to 20-50 meters.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Coffee className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                6. Follow the Flow of Traffic
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                In the morning, foot traffic flows inward — toward the souks and mosques. In the evening, it flows
                outward — toward the gates and the modern city. Donkeys and mule carts always travel along main
                arteries, never through residential derbs. If you hear &quot;balak! balak!&quot; (move aside), step
                against the wall and let the animal pass, then follow its route — it is on a main road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dealing with Touts and Faux Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dealing with Touts and Faux Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco passed Law 05-12 in 2014, making unlicensed guiding illegal with fines up to 10,000 MAD.
            Enforcement is improving, but faux guides still operate, especially near Bab Boujloud in Fes and
            Jemaa el-Fnaa in Marrakech.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" />
                Walk with Purpose
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Touts target people who look lost or hesitant. Walk at a steady pace, eyes forward, even if you
                have no idea where you are going. A confident stride is your best deterrent. Stopping to stare at
                a map marks you as a target.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" />
                Say &quot;La, shukran&quot; and Keep Moving
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                &quot;La, shukran&quot; means &quot;No, thank you&quot; in Darija. Say it once, firmly, without
                stopping. Do not engage in conversation — the moment you respond to &quot;Where are you from?&quot;
                the interaction becomes harder to end. Silence works too.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" />
                Never Follow a &quot;Shortcut&quot;
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A common approach: someone tells you the way ahead is closed and offers an alternative route.
                The route always passes through a relative&apos;s shop. The way ahead is almost never actually
                closed. Keep walking. If it genuinely is blocked (construction happens), backtrack to the last
                main artery.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" />
                Agree on a Price Before Accepting Help
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If someone walks you to your riad, they may ask for payment afterward. This is fair — they provided
                a service. But agree on a price first. From 10-20 MAD is reasonable for a short walk. If they refuse
                to name a price upfront, they will likely demand from 100-200 MAD at the end.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CircleAlert className="w-4 h-4 inline mr-1 text-amber-600" />
                Verify Guide Credentials
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Licensed guides carry a laminated card with their photo, name, and license number issued by the
                Ministry of Tourism. Ask to see it. If they cannot produce one, they are not official. Report
                persistent faux guides to the Tourist Police (Brigade Touristique) — there is a station near
                every major medina entrance.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CircleAlert className="w-4 h-4 inline mr-1 text-amber-600" />
                The &quot;Tannery Viewing&quot; Hustle
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In Fes, men near Chouara Tannery will insist on &quot;guiding&quot; you to a rooftop terrace for
                free, then pressure you to buy leather goods at inflated prices. You can access tannery viewpoints
                independently from several leather shops around the perimeter. Tip from 10-20 MAD if you enter a
                shop just for the view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping in the Medina ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping in the Medina: A Haggling Survival Kit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Haggling is expected in every souk. Fixed prices exist only in government-run Ensemble Artisanal
            cooperatives and some modern shops. Everything else is negotiable. Seasonal pricing can change.
          </p>

          {/* Price Guide Table */}
          <div className="card-moroccan overflow-hidden mb-8">
            <div className="p-4 bg-[var(--color-accent)] text-white">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Fair Price Guide — What You Should Actually Pay
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[var(--text-primary)]">Category</th>
                    <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[var(--text-primary)]">Opening Ask</th>
                    <th className="text-left p-3 font-[family-name:var(--font-heading)] text-[var(--color-accent)]">Fair Price</th>
                  </tr>
                </thead>
                <tbody>
                  {soukPrices.map((item) => (
                    <tr key={item.item} className="border-b border-[var(--border-primary)] last:border-0">
                      <td className="p-3 text-[var(--text-secondary)]">{item.item}</td>
                      <td className="p-3 text-[var(--text-muted)] text-xs">{item.category}</td>
                      <td className="p-3 text-[var(--text-muted)] line-through">{item.startPrice}</td>
                      <td className="p-3 text-[var(--color-accent)] font-semibold">{item.fairPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Haggling Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HandCoins className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Step 1: Browse Without Showing Interest
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Walk through the souk section first. Touch items casually. Do not ask prices immediately — this
                signals high interest and raises the starting price. Compare the same item across 3-4 shops before
                you start negotiating.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HandCoins className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Step 2: Counter at 30-40% of the First Price
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The seller&apos;s first price is typically 2-4 times the real value. Start your counter at
                30-40% of their ask. They will act shocked. This is theater. The final price usually lands at
                50-60% of the original quote. If a vendor accepts your first counter immediately, you bid too high.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HandCoins className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Step 3: The Walk-Away Move
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Once you have exchanged two or three counter-offers, politely say &quot;that is my best price&quot;
                and begin to leave. If they call you back, you are close to a fair deal. If they let you go,
                your price was genuinely too low — or you can find the same item cheaper at another stall.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HandCoins className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Step 4: Pay Cash in Small Bills
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always carry small denominations (20 and 50 MAD notes). Pulling out a 200 MAD note to pay for a
                60 MAD item makes the seller less likely to give change easily, and it signals you have more to spend.
                Keep your main cash hidden in a front pocket or money belt; keep negotiation cash in a separate,
                easily accessible pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina Safety: Practical Advice
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan medinas are generally safe. Violent crime against tourists is rare. The real risks are
            petty theft, scams, and the occasional twisted ankle on uneven cobblestones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-amber-600" />
                Pickpocket Prevention
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Pickpockets work crowded areas: Jemaa el-Fnaa at sunset, Bab Boujloud entrance during peak hours,
                and any bus station adjacent to a medina gate. Use a crossbody bag worn in front. Keep your phone
                in a zipped pocket. Leave your passport at the riad — carry a photocopy instead. The most common
                theft method is a quick hand into an open bag or back pocket.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-amber-600" />
                Common Scams to Recognize
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The &quot;free&quot; henna artist who grabs your hand and demands from 200 MAD after. The
                mint-sprig-in-your-pocket trick (a &quot;gift&quot; that requires payment). The &quot;my uncle&apos;s
                shop&quot; detour that adds a commission to your purchase price. Restaurant menus without prices where
                the bill is double what you expect. Always confirm prices before accepting any service.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Moon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Night Navigation
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Main medina arteries stay lit and active until around 22:00-23:00. Side alleys go dark earlier.
                Always carry a phone with a flashlight. In Fes, memorize the route from the nearest main artery
                to your riad during daylight. Marrakech&apos;s medina is safer at night because more restaurants
                and shops stay open late. Chefchaouen and Essaouira both feel safe well into the evening.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tourist Police
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco operates a dedicated Tourist Police (Brigade Touristique) in all major cities. Officers speak
                French and often English. Stations are near main medina entrances — Bab Boujloud in Fes, Place
                Jemaa el-Fnaa in Marrakech. They handle complaints about unlicensed guides, overcharging, and
                harassment. The emergency number is 19 (police) or 190 (from a mobile).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Footprints className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Watch Your Step
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Medina lanes are paved with uneven stones, sometimes slick with water or oil from nearby workshops.
                Open drainage channels run along some alleys. Wear shoes with good grip — sandals and flip-flops
                are a bad idea on steep Tangier or Chefchaouen lanes. Watch for mule droppings, especially
                in the Fes medina where animal transport is still common.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carrying Money Safely
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Split your cash between two locations: a money belt under your clothes for reserves, and a pocket
                with small bills for shopping and tips. ATMs are located outside the medina gates and in the Ville
                Nouvelle. BMCE and Attijariwafa banks accept most international cards. Avoid changing money with
                street changers — the rates are worse than banks, and short-changing is common.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting Lost ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Lost Is Part of the Experience
          </h2>

          <div className="card-moroccan p-6 zellige-border">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Every traveler who has spent a day in Fes el-Bali has been lost at least once. The medina defeats GPS.
              It defeats maps. It defeats your sense of direction. And that is exactly the point.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              The best discoveries in a medina happen off-route. A wrong turn in Fes led me to a 600-year-old
              fondouk where a coppersmith was hammering trays the same way his great-grandfather did. A dead-end
              derb in Marrakech opened onto a tiny square where three old men were playing cards under a fig tree.
              These moments do not appear on any itinerary.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              The medina rewards patience. When you realize you are lost, stop. Buy a glass of mint tea from the
              nearest cafe (from 10 MAD). Sit down. Watch the street for five minutes. The rhythm of the medina will
              reassert itself. A familiar-looking shop sign. The sound of the call to prayer from a minaret you
              recognize. The smell of the tannery drifting from a known direction. Orientation returns.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              If you are genuinely stuck, the failsafe method is simple: walk downhill. Most medinas slope toward
              the main gate and commercial center. In Fes, downhill leads toward Rcif and the Bou Inania area. In
              Tangier, downhill leads toward the port. Gravity is a better guide than any app.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="card-moroccan p-5 text-center">
              <ThumbsUp className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Walk Downhill</p>
              <p className="text-xs text-[var(--text-secondary)]">Gravity leads to main streets and gates</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Coffee className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Stop for Tea</p>
              <p className="text-xs text-[var(--text-secondary)]">Pause, reorient, ask the cafe owner</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Eye className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Follow Sound</p>
              <p className="text-xs text-[var(--text-secondary)]">Crowds, traffic, and call to prayer signal main routes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Times to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Times to Visit a Medina
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The same medina feels like a different place at 7 AM versus 7 PM. Timing shapes your entire experience.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-[var(--color-gold)] mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Early Morning (7:00-9:00)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    The medina at dawn is a different world. Shops are shuttered. Locals sweep their stoops and head to
                    the mosque for Fajr prayer. Light angles through narrow lanes and hits walls that are invisible by
                    midday. Photographers: this is your window. Deliveries arrive by mule and handcart — the logistics
                    of the medina are visible only at this hour.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Mid-Morning (9:00-12:00)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Peak shopping hours. Souks are fully open. Tour groups fill the main arteries. This is the best
                    time for haggling because shopkeepers are fresh and competitive. Spice stalls are at their most
                    aromatic. The main souks in Marrakech get genuinely crowded by 11:00 — arrive before 10:00 for a
                    calmer experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-[var(--text-muted)] mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Early Afternoon (12:00-15:00)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Many shops close for lunch and Dhuhr prayer. Summer temperatures in Marrakech and Fes can hit
                    40-45°C, and the medina becomes a furnace. This is rest time. Eat lunch at a medina restaurant,
                    retreat to your riad, or visit an indoor attraction like a museum or madrasa. The Bou Inania Madrasa
                    in Fes (from 70 MAD) is cool and empty at this hour.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Late Afternoon (15:00-18:00)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    The medina wakes up again. Shops reopen. The light turns golden — the walls of Marrakech glow pink,
                    the blue of Chefchaouen deepens. Shopkeepers are more willing to negotiate toward the end of the
                    day, especially if sales have been slow. This is arguably the single best window to explore.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Moon className="w-6 h-6 text-indigo-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Evening (18:00-22:00)
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Jemaa el-Fnaa in Marrakech transforms after sunset into a massive outdoor food market — rows of
                    stalls selling grilled meats, snail soup, fresh juice, and pastries. A full dinner from a stall
                    costs from 40-80 MAD. In Fes, the evening is quieter; locals gather at cafes near Bab Boujloud.
                    Chefchaouen&apos;s plaza fills with families and cats. Ramadan shifts everything — the medina empties
                    by day and surges after iftar (sunset meal).
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6 bg-amber-50">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-[var(--color-accent)] mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Seasonal Note
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    October through April is the best season for medina exploration. Temperatures are mild (15-25°C).
                    July and August in Fes and Marrakech are brutal — shade is limited, and the stone walls radiate
                    heat. Chefchaouen stays cooler year-round due to its mountain altitude (600m). Essaouira stays
                    breezy with Atlantic winds. During Ramadan (dates shift annually), many restaurants close during
                    daylight hours, but the post-iftar atmosphere is extraordinary. Seasonal pricing can change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-haggling-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Haggling Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Advanced bargaining strategies, price benchmarks for 50+ items, and the psychology behind souk negotiations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Map className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                City-by-city breakdown of the best souks, what to buy in each one, and how to spot genuine craftsmanship.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/safety" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Comprehensive safety tips covering scams, transport, health, solo female travel, and emergency contacts.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Link href="/fes-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Fes — the world&apos;s largest car-free urban zone, tanneries, madrasas, and street food.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Jemaa el-Fnaa, Bahia Palace, the souks, riads, and day trips. Everything for your Marrakech visit.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/chefchaouen" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Eye className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Chefchaouen Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Blue Pearl of Morocco — how to get there, where to stay, photography spots, and hiking routes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Step Inside the Medina?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            The alleys are waiting. Start with the medina that matches your comfort level — Essaouira for easy
            navigation, Marrakech for energy, Fes for the ultimate challenge. Pack light shoes, small bills,
            and your curiosity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fes-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <MapPin className="w-4 h-4" />
              Explore Fes
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Chefchaouen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
