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
  Camera,
  Compass,
  Landmark,
  Sun,
  Calendar,
  Car,
  Footprints,
  Mountain,
  Globe,
  Columns,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Volubilis Guide 2026 | Morocco\'s Roman Ruins & UNESCO World Heritage Site',
  description:
    'Complete guide to Volubilis, Morocco\'s best-preserved Roman ruins and UNESCO World Heritage Site. Explore ancient mosaics, the Triumphal Arch of Caracalla, Basilica, Capitol, and House of Orpheus. How to visit from Meknes and Fes, entrance fees, guided tours, and photography tips.',
  keywords: [
    'volubilis',
    'volubilis morocco',
    'volubilis roman city',
    'roman ruins morocco',
    'volubilis ruins',
    'roman cities in morocco',
    'visit volubilis',
    'volubilis UNESCO',
    'volubilis mosaics',
    'roman mosaics morocco',
    'volubilis entrance fee',
    'day trip volubilis',
    'volubilis from meknes',
    'volubilis from fes',
    'moulay idriss zerhoun',
    'volubilis guided tour',
    'morocco archaeological site',
    'volubilis history',
    'triumphal arch caracalla',
    'house of orpheus volubilis',
    'volubilis photography',
    'best roman ruins africa',
  ],
  openGraph: {
    title: 'Volubilis Guide 2026 | Morocco\'s Roman Ruins & UNESCO World Heritage Site',
    description:
      'Explore Volubilis, the best-preserved Roman ruins in North Africa. Complete visitor guide with history, key monuments, mosaics, entrance fees, and how to get there from Meknes and Fes.',
    url: `${BASE_URL}/volubilis-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-volubilis.webp`,
        width: 1200,
        height: 630,
        alt: 'Ancient Roman ruins of Volubilis in Morocco with the Triumphal Arch of Caracalla against a blue sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volubilis Guide 2026 | Roman Ruins & UNESCO Site in Morocco',
    description:
      'Morocco\'s best-preserved Roman city. Complete guide to Volubilis with history, mosaics, monuments, entrance fees, and day trip planning from Meknes and Fes.',
    images: [`${BASE_URL}/images/hero-volubilis.webp`],
  },
  alternates: { canonical: `${BASE_URL}/volubilis-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/volubilis-guide`,
  name: 'Volubilis Guide 2026 | Morocco\'s Roman Ruins & UNESCO World Heritage Site',
  description:
    'Complete guide to Volubilis, Morocco\'s best-preserved Roman ruins and UNESCO World Heritage Site. Explore ancient mosaics, key monuments, practical visitor information, and day trip planning.',
  url: `${BASE_URL}/volubilis-guide`,
  image: `${BASE_URL}/images/hero-volubilis.webp`,
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
  mainEntityOfPage: `${BASE_URL}/volubilis-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'LandmarksOrHistoricalBuildings',
    name: 'Volubilis',
    description: 'Ancient Roman city in Morocco, UNESCO World Heritage Site since 1997',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Volubilis Guide', item: `${BASE_URL}/volubilis-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to visit Volubilis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The entrance fee to Volubilis is from 70 MAD for adults and from 30 MAD for children. Guided tours cost from 150 MAD for a group tour or from 300 MAD for a private guide. Seasonal pricing may vary.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Volubilis from Meknes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Volubilis is about 30 km north of Meknes. You can take a grand taxi from Meknes to Moulay Idriss Zerhoun (from 15 MAD per seat) and then another short taxi ride to Volubilis. Alternatively, hire a private car or join a guided day trip from Meknes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day to visit Volubilis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early morning (8-10 AM) or late afternoon (4-6 PM) are ideal. The site is exposed with no shade, so midday heat from May to September can be intense. The golden light at sunrise and sunset is perfect for photography.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Volubilis and Moulay Idriss in one day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, combining Volubilis and Moulay Idriss Zerhoun is a classic half-day or full-day trip from Meknes. Most visitors spend 1.5 to 2 hours at Volubilis and 1 to 2 hours in Moulay Idriss, which is just 4 km away.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Volubilis worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Volubilis is the best-preserved Roman archaeological site in North Africa, a UNESCO World Heritage Site, and home to some of the most remarkable Roman mosaics outside of Italy. The setting among olive groves and rolling hills makes it a uniquely atmospheric experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a visit to Volubilis take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan for 1.5 to 2.5 hours to explore the ruins thoroughly. A quick visit can be done in 1 hour, but to appreciate the mosaics, read the information boards, and take photographs, 2 hours is recommended.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY MONUMENTS
   ═══════════════════════════════════════════════════════════════ */

const keyMonuments = [
  {
    name: 'Triumphal Arch of Caracalla',
    icon: Landmark,
    period: 'Built 217 AD',
    description:
      'The iconic entrance arch of Volubilis, erected in honor of Emperor Caracalla and his mother Julia Domna. Originally topped with a bronze chariot, this partially reconstructed arch is the most photographed structure at the site. It marks the beginning of the Decumanus Maximus, the main street of the Roman city.',
    highlight: 'Most iconic structure at Volubilis',
  },
  {
    name: 'The Basilica',
    icon: Columns,
    period: '2nd-3rd century AD',
    description:
      'The largest building in Volubilis, this was the civic center where legal proceedings and public business took place. The impressive row of columns along the nave still stands, giving visitors a powerful sense of the building\'s original grandeur. It measured approximately 42 by 22 meters.',
    highlight: 'Largest building at the site',
  },
  {
    name: 'The Capitol',
    icon: Building,
    period: '2nd century AD',
    description:
      'Adjacent to the Basilica and the Forum, the Capitol was the principal temple dedicated to the Capitoline Triad: Jupiter, Juno, and Minerva. The frontal columns and sacrificial altar steps remain intact, offering a vivid picture of Roman religious practice in North Africa.',
    highlight: 'Main temple of the Roman city',
  },
  {
    name: 'House of Orpheus',
    icon: Star,
    period: '3rd century AD',
    description:
      'One of the largest and most opulent private residences at Volubilis. Named after its stunning floor mosaic depicting Orpheus charming animals with his lyre, this house also contains mosaics of dolphins and a chariot race. The mosaic quality rivals those found in Pompeii.',
    highlight: 'Finest mosaic in situ at Volubilis',
  },
  {
    name: 'House of Venus',
    icon: Award,
    period: '2nd-3rd century AD',
    description:
      'A grand Roman townhouse famous for its exceptionally well-preserved mosaics, including the Diana Bathing mosaic and the Abduction of Hylas. The House of Venus reveals the luxury that wealthy Roman-Berber elites enjoyed in this far-flung provincial city.',
    highlight: 'Multiple outstanding mosaics',
  },
  {
    name: 'The Forum',
    icon: Users,
    period: '2nd century AD',
    description:
      'The public square at the heart of the city where citizens gathered for commerce, politics, and socializing. Surrounded by the Basilica, Capitol, and market stalls, the Forum\'s layout closely mirrors that of forums found across the Roman Empire, from Rome to Leptis Magna.',
    highlight: 'Central public gathering space',
  },
  {
    name: 'Olive Presses',
    icon: Globe,
    period: '2nd-3rd century AD',
    description:
      'Volubilis was a major center of olive oil production, and the remains of over 50 olive presses have been found across the city. These stone-weighted presses demonstrate the economic engine that fueled the city\'s prosperity. Olive oil was Volubilis\'s primary export to Rome.',
    highlight: 'Over 50 presses discovered',
  },
  {
    name: 'Decumanus Maximus',
    icon: Compass,
    period: '2nd century AD',
    description:
      'The main east-west street running from the Triumphal Arch through the heart of the city. Lined with shops, homes, and public buildings, this colonnaded avenue was the backbone of urban life. Walking its length gives the best sense of the city\'s layout and scale.',
    highlight: 'Main street of the ancient city',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const timeline = [
  { era: '3rd Century BC', event: 'Berber settlement established', detail: 'The Mauretanian Berbers founded a settlement on the fertile plains between the Rif and Middle Atlas mountains.' },
  { era: '1st Century BC', event: 'Kingdom of Mauretania', detail: 'Volubilis became an important city in the Kingdom of Mauretania under King Juba II, a Roman client king who married Cleopatra Selene II.' },
  { era: '40 AD', event: 'Roman annexation', detail: 'After the assassination of King Ptolemy, Rome annexed Mauretania. Volubilis became the capital of the Roman province of Mauretania Tingitana.' },
  { era: '2nd-3rd Century AD', event: 'Golden age of Volubilis', detail: 'The city reached its peak with a population of around 20,000. Grand public buildings, luxury homes with mosaics, and olive oil production flourished.' },
  { era: '285 AD', event: 'Roman withdrawal', detail: 'Rome withdrew its administration and legions from Volubilis, but the city was not abandoned. Its Latin-speaking population continued to live there.' },
  { era: '7th-8th Century', event: 'Islamic era begins', detail: 'Arab and Berber populations settled the area. The city became known as Walili. Moulay Idriss I, founder of the first Moroccan dynasty, made nearby Moulay Idriss his capital in 789 AD.' },
  { era: '11th Century', event: 'City abandoned', detail: 'The population gradually moved to nearby Moulay Idriss and Fes. The ruins were further damaged by the 1755 Lisbon earthquake, which was felt across Morocco.' },
  { era: '1915', event: 'Archaeological excavations begin', detail: 'French archaeologists began systematic excavation and restoration work that continues to this day. Major mosaics were uncovered and conserved in situ.' },
  { era: '1997', event: 'UNESCO World Heritage Site', detail: 'Volubilis was inscribed as a UNESCO World Heritage Site for its outstanding universal value as the best-preserved Roman archaeological site in North Africa.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL VISITOR INFO
   ═══════════════════════════════════════════════════════════════ */

const visitorInfo = [
  { label: 'Adult entrance fee', value: 'From 70 MAD', note: 'Seasonal pricing may vary' },
  { label: 'Children entrance fee', value: 'From 30 MAD', note: 'Under 12 years' },
  { label: 'Group guided tour', value: 'From 150 MAD', note: 'Official on-site guides available' },
  { label: 'Private guided tour', value: 'From 300 MAD', note: 'Personalized 1.5-2 hour tour' },
  { label: 'Opening hours (summer)', value: '8:00 AM - 7:00 PM', note: 'April to September' },
  { label: 'Opening hours (winter)', value: '8:00 AM - 5:30 PM', note: 'October to March' },
  { label: 'Grand taxi Meknes to Moulay Idriss', value: 'From 15 MAD/seat', note: 'Then short taxi to site' },
  { label: 'Private car from Meknes', value: 'From 300 MAD round trip', note: 'Including wait time' },
  { label: 'Guided day trip from Fes', value: 'From 500 MAD per person', note: 'Includes transport and guide' },
  { label: 'Day trip from Meknes', value: 'From 350 MAD per person', note: 'Includes Moulay Idriss stop' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  {
    tip: 'Golden Hour Magic',
    icon: Sun,
    description:
      'The best light for photographing Volubilis is during the first and last hours of daylight. The warm golden tones transform the honey-colored stone columns and arches into something truly magical.',
  },
  {
    tip: 'Bring a Wide-Angle Lens',
    icon: Camera,
    description:
      'The vast scale of the site is best captured with a wide-angle lens (16-35mm). Use it for the Basilica columns, the Triumphal Arch, and panoramic views of the ruins against the surrounding landscape.',
  },
  {
    tip: 'Get Down Low for Mosaics',
    icon: Footprints,
    description:
      'The floor mosaics are best photographed from a low angle, slightly off-center. Avoid shooting straight down as it flattens the detail. Early morning light raking across the surface reveals the most texture.',
  },
  {
    tip: 'Use the Arch as a Frame',
    icon: Landmark,
    description:
      'The Triumphal Arch of Caracalla makes an excellent natural frame for photographs. Stand inside the arch and shoot outward along the Decumanus Maximus for a classic compositional shot.',
  },
  {
    tip: 'Include the Landscape',
    icon: Mountain,
    description:
      'Unlike many archaeological sites, Volubilis sits in a stunning natural landscape of olive groves and rolling hills. Include the surrounding countryside in your shots to show the site\'s remarkable setting.',
  },
  {
    tip: 'Avoid Midday Harsh Light',
    icon: AlertTriangle,
    description:
      'Between 11 AM and 3 PM, the overhead sun creates harsh shadows and washed-out colors. If you must shoot at midday, focus on detailed close-ups of carved stone and mosaic patterns rather than wide views.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const gettingThere = [
  {
    from: 'From Meknes',
    icon: Car,
    distance: '30 km (45 minutes)',
    options: [
      'Grand taxi to Moulay Idriss Zerhoun (from 15 MAD/seat), then another short taxi to Volubilis (from 10 MAD)',
      'Private taxi or hired car (from 300 MAD round trip with wait time)',
      'Organized day trip including Moulay Idriss (from 350 MAD per person)',
    ],
  },
  {
    from: 'From Fes',
    icon: Car,
    distance: '65 km (1 hour 15 minutes)',
    options: [
      'Organized day trip (from 500 MAD per person) with guide, the most popular option',
      'Private taxi or hired car (from 600 MAD round trip with wait time)',
      'Grand taxi to Meknes, then connect to Moulay Idriss (budget option, from 50 MAD total)',
    ],
  },
  {
    from: 'From Rabat',
    icon: Car,
    distance: '170 km (2 hours 30 minutes)',
    options: [
      'Train to Meknes (from 95 MAD, 2 hours), then taxi or tour to Volubilis',
      'Private car hire for a full day trip (from 1,200 MAD)',
      'Best combined with an overnight stay in Meknes or Fes',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function VolubilisGuidePage() {
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
            backgroundImage: 'url(/images/hero-volubilis.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Volubilis Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            UNESCO World Heritage Site
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Volubilis: Morocco&apos;s Roman Ruins
            <br className="hidden md:block" /> &amp; UNESCO World Heritage Site
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore the best-preserved Roman archaeological site in North Africa. Ancient mosaics,
            monumental arches, and 2,000 years of history among olive groves and rolling hills.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Volubilis: Where Rome Met the Berber World
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Rising from the fertile plains between the Rif and Middle Atlas mountains, Volubilis
                (known in Arabic as Walili) is Morocco&apos;s most important archaeological site and one
                of the finest Roman ruins anywhere in Africa. This ancient city, which thrived for over
                a thousand years, tells a story that spans Berber kingdoms, Roman imperial ambition, early
                Islamic civilization, and the birth of the Moroccan state itself.
              </p>
              <p>
                Originally founded as a Berber settlement in the 3rd century BC, Volubilis grew into the
                administrative capital of the Roman province of Mauretania Tingitana. At its peak in the
                2nd and 3rd centuries AD, around 20,000 people lived within its walls, producing vast
                quantities of olive oil for export across the Roman Empire. The wealthy citizens adorned
                their homes with exquisite floor mosaics that rank among the best-preserved in the
                ancient world.
              </p>
              <p>
                Inscribed as a UNESCO World Heritage Site in 1997, Volubilis draws visitors who come
                for the remarkably intact mosaics, the towering Triumphal Arch of Caracalla, the grand
                Basilica, and the evocative atmosphere of a Roman city set against a quintessentially
                Moroccan landscape. A visit here is a powerful reminder that Morocco&apos;s history stretches
                far beyond the medieval medinas and souks most travelers know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Reference: Visitor Info ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visitor Information &amp; Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential details for planning your visit to Volubilis. All prices are approximate and seasonal pricing may apply.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[var(--border-primary)]">
                      <th className="px-6 py-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                      <th className="px-6 py-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price / Hours</th>
                      <th className="px-6 py-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-muted)]">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitorInfo.map((item, i) => (
                      <tr key={i} className="border-b border-[var(--border-primary)] last:border-0">
                        <td className="px-6 py-3 text-sm text-[var(--text-primary)]">{item.label}</td>
                        <td className="px-6 py-3 text-sm font-semibold text-[var(--color-accent)]">{item.value}</td>
                        <td className="px-6 py-3 text-xs text-[var(--text-muted)]">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Historical Timeline ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            History of Volubilis
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Berber settlement to Roman capital to UNESCO heritage &mdash; over 2,000 years of history.
          </p>

          <div className="space-y-6">
            {timeline.map((entry, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-[var(--border-primary)] mt-2" />}
                </div>
                <div className="card-moroccan p-5 flex-1 mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-[var(--color-accent)]">{entry.era}</span>
                    <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {entry.event}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{entry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Monuments ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Monuments &amp; Ruins to See
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The essential structures and sites within the ancient city of Volubilis. Allow 1.5 to 2.5 hours to explore them all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyMonuments.map((monument) => {
              const MonumentIcon = monument.icon;
              return (
                <div key={monument.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center flex-shrink-0">
                      <MonumentIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {monument.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-[var(--color-accent)] font-semibold">{monument.period}</span>
                        <span className="text-xs text-[var(--color-gold)] flex items-center gap-1">
                          <Star className="w-3 h-3" /> {monument.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{monument.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Mosaics ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Mosaics of Volubilis
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Among the best-preserved Roman mosaics in all of North Africa, still in their original locations after nearly 2,000 years.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Orpheus Mosaic (House of Orpheus)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The masterpiece of Volubilis. This large floor mosaic depicts the mythical musician Orpheus
                sitting beneath a tree, playing his lyre to charm the animals around him. Lions, elephants,
                horses, and birds surround him in vivid detail. The skill of the tessera work and the use of
                color demonstrate that Volubilis attracted artisans of the highest caliber from across the Roman world.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-gold)]">
                <Star className="w-3.5 h-3.5" />
                <span>Must-see: considered one of the finest Roman mosaics in Africa</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Diana Bathing Mosaic (House of Venus)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Found in the House of Venus, this elegant mosaic shows the goddess Diana (Artemis) being
                surprised while bathing. The scene is surrounded by intricate geometric borders and features
                remarkably delicate facial details. This mosaic is often compared to similar works found in
                Pompeii for its artistic quality.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-gold)]">
                <Star className="w-3.5 h-3.5" />
                <span>Exceptional detail and preservation</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Labours of Hercules Mosaic
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A dramatic mosaic illustrating scenes from the twelve labours of Hercules. Each panel shows
                a different labour, from the Nemean Lion to the Lernaean Hydra. The narrative quality and
                dynamic poses make this one of the most engaging mosaics on the site. Many of these panels
                are now housed in the Rabat Archaeological Museum.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-gold)]">
                <Star className="w-3.5 h-3.5" />
                <span>Some panels in Rabat Archaeological Museum</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Navigium Veneris &amp; Other Mosaics
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Scattered across the residential quarter are numerous other mosaics depicting marine life,
                geometric patterns, mythological scenes, and daily life. The Navigium Veneris (Voyage of
                Venus) shows Venus in a boat, while other floors feature Bacchus, Nereids, dolphins, and
                elaborate interlocking geometric designs. Together, they form one of the most complete
                collections of in-situ Roman mosaics anywhere in the world.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-gold)]">
                <Star className="w-3.5 h-3.5" />
                <span>One of the largest collections of in-situ Roman mosaics worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Get to Volubilis
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Volubilis is most easily reached from Meknes (30 km) or Fes (65 km). There is no public bus service directly to the site.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gettingThere.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.from} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <RouteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.from}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)]">{route.distance}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {route.options.map((option, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Volubilis
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The site is completely open-air with no shade, so timing your visit matters greatly for comfort and photography.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Sun className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Best Seasons
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Spring (March to May) and autumn (September to November) offer the most comfortable temperatures,
                typically between 18 and 28 degrees Celsius. The surrounding landscape is green and wildflowers
                bloom among the ruins in spring, creating a spectacular photographic backdrop.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Summer (June to August) sees temperatures regularly exceeding 38 degrees Celsius on this exposed plain.
                Winter (December to February) is mild but can bring rain. The site remains open year-round.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Best Time of Day
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Arrive early in the morning (8 to 10 AM) to beat the heat and the tour groups, or visit in the
                late afternoon (4 to 6 PM) for golden light and fewer crowds. The site is most crowded between
                10 AM and 2 PM when organized tours from Fes arrive.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                For photographers, the low angle of early morning and late afternoon sun creates dramatic shadows
                across the columns and arches, revealing textures and details that are invisible in the flat midday light.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <ShieldCheck className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                What to Bring
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  Sun hat and sunscreen (essential, no shade on site)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  Comfortable walking shoes (uneven terrain)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  At least 1.5 liters of water per person
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  Camera with wide-angle lens if possible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                  Guidebook or downloaded site map
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <AlertTriangle className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)]" />
                  There is a small cafe near the entrance but no food vendors inside
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)]" />
                  Restrooms are available only at the entrance area
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)]" />
                  The terrain is uneven with loose stones; not wheelchair accessible
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)]" />
                  Storks nest on the ruins from March to July (great photo opportunities)
                </li>
                <li className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)]" />
                  Do not walk on the mosaics; viewing areas are clearly marked
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tips for Volubilis
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Volubilis is one of the most photogenic archaeological sites in North Africa. Here is how to capture it at its best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Moulay Idriss Zerhoun ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moulay Idriss Zerhoun: The Holy Town Nearby
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Just 4 km from Volubilis, this sacred hilltop town is one of Morocco&apos;s most important pilgrimage sites and a perfect companion visit.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moulay Idriss Zerhoun is named after Moulay Idriss I, the great-grandson of the Prophet Muhammad
                who founded Morocco&apos;s first Islamic dynasty (the Idrisids) in 789 AD. He chose this hilltop
                overlooking Volubilis as his capital, and his tomb remains one of the holiest shrines in Morocco.
                Until recently, non-Muslims were not allowed to stay overnight in the town, though this restriction
                has been relaxed.
              </p>
              <p>
                The town cascades down two hills, its whitewashed houses topped with green-tiled roofs. The
                atmosphere is authentically Moroccan with almost no tourist infrastructure, offering a striking
                contrast to the well-worn tourist circuits. The terrace near the Grand Mosque offers panoramic
                views over the surrounding countryside and all the way to the ruins of Volubilis.
              </p>
              <p>
                Most visitors combine Volubilis and Moulay Idriss in a single half-day trip from Meknes. Spend
                1.5 to 2 hours at the ruins, then drive 5 minutes to Moulay Idriss for a walk through the
                medina, a glass of fresh orange juice in the main square, and sweeping views from the terraces.
                It is a glimpse of Morocco away from the tourist crowds.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Compass className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-[var(--text-primary)] font-medium">4 km from Volubilis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-[var(--text-primary)] font-medium">1-2 hours to explore</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-[var(--text-primary)] font-medium">Free entry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Combine with Meknes Day Trip ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Perfect Day Trip: Meknes, Volubilis &amp; Moulay Idriss
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The classic day trip itinerary that combines three outstanding sites into one unforgettable day.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Morning: Explore Meknes (8:00 - 10:30 AM)
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Start at the monumental Bab Mansour gate, visit the Mausoleum of Moulay Ismail, and walk through
                  the granaries and stables of Heri es-Souani. Meknes is one of Morocco&apos;s four imperial cities and
                  deserves at least a morning of exploration.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Late Morning: Drive to Volubilis (10:30 AM - 12:30 PM)
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The 30 km drive takes about 45 minutes through rolling countryside. Spend 1.5 to 2 hours exploring
                  the Roman ruins, mosaics, and monuments. Hire a guide at the entrance for the most informative experience.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Lunch: Moulay Idriss Zerhoun (12:30 - 2:30 PM)
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Drive 5 minutes to Moulay Idriss. Enjoy lunch at a local restaurant with views, explore the medina,
                  visit the panoramic terraces, and soak in the atmosphere of this sacred pilgrimage town. A tajine
                  here costs from 50 MAD.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Afternoon: Return to Meknes or Continue to Fes (2:30 PM onward)
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Return to Meknes for more exploration, or drive directly to Fes (about 1 hour from Moulay Idriss).
                  This itinerary also works in reverse from Fes, though the drive is slightly longer.
                </p>
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to visit Volubilis?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The entrance fee is from 70 MAD for adults and from 30 MAD for children under 12. Official
                guides are available at the entrance for from 150 MAD (group) or from 300 MAD (private tour).
                Seasonal pricing may vary, and it is worth checking current rates before your visit.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get to Volubilis from Meknes?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Volubilis is 30 km north of Meknes (about 45 minutes by road). Take a grand taxi from Meknes
                to Moulay Idriss Zerhoun (from 15 MAD per seat), then a short taxi to the site (from 10 MAD).
                Alternatively, hire a private car (from 300 MAD round trip) or join an organized day trip
                (from 350 MAD per person including guide).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of day to visit Volubilis?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Early morning (8 to 10 AM) or late afternoon (4 to 6 PM) are ideal. The site has no shade
                and midday temperatures from May to September can exceed 38 degrees Celsius. Morning and evening
                light is also far superior for photography, and crowds are thinner outside the 10 AM to 2 PM
                tour group window.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Volubilis and Moulay Idriss in one day?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, this is the classic combination. Moulay Idriss Zerhoun is just 4 km from Volubilis (a
                5-minute drive). Most visitors spend 1.5 to 2 hours at the ruins and 1 to 2 hours in Moulay
                Idriss. The two can easily be combined into a half-day trip from Meknes or a full-day trip
                from Fes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Volubilis worth visiting?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. Volubilis is the best-preserved Roman archaeological site in North Africa and a
                UNESCO World Heritage Site. The mosaics alone are worth the trip, and the setting among olive
                groves and rolling hills is unlike any other Roman ruin site. If you are in Meknes or Fes,
                it is one of the top excursions in all of Morocco.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How long does a visit to Volubilis take?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Plan for 1.5 to 2.5 hours to explore thoroughly. A quick walk-through can be done in about
                an hour, but to appreciate the mosaics, read the information panels, take photographs, and
                soak in the atmosphere, 2 hours is the sweet spot. History enthusiasts and photographers may
                want even longer.
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
            <Link href="/meknes-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Meknes Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s underrated imperial city, the gateway to Volubilis and home to Bab Mansour.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The spiritual and cultural capital of Morocco. Combine a Fes visit with a day trip to Volubilis.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-fes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Volubilis, Chefchaouen, Ifrane, and more. The best excursions from Morocco&apos;s imperial city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From Berber heritage to Islamic art. Understand the rich cultural tapestry of Morocco.
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
