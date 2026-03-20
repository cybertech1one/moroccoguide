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
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Scissors,
  Hammer,
  Palette,
  Shapes,
  Lamp,
  Globe,
  Package,
  Store,
  CircleDot,
  HandHeart,
  ShoppingBag,
  Layers,
  Eye,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Crafts & Artisans Guide 2026 | Traditional Handicrafts, Workshops & Where to Buy',
  description:
    'Complete guide to Moroccan crafts and artisans. Discover zellige tilework, leather goods, ceramics, metalwork, woodwork, and textiles. Find workshops, cooperatives, and fair-trade buying tips across Fes, Marrakech, Essaouira, and Safi.',
  keywords: [
    'moroccan crafts',
    'morocco artisans',
    'moroccan handicrafts',
    'traditional moroccan crafts',
    'zellige tilework morocco',
    'moroccan leather goods',
    'fes tanneries',
    'moroccan ceramics',
    'safi pottery morocco',
    'tamegroute pottery',
    'moroccan metalwork',
    'moroccan lanterns',
    'thuya wood essaouira',
    'berber textiles',
    'moroccan rugs',
    'moroccan artisan workshops',
    'buy crafts morocco',
    'fair trade morocco',
    'moroccan cooperatives',
    'moroccan souks shopping',
    'maalem master artisan',
    'moroccan handicraft prices 2026',
  ],
  openGraph: {
    title: 'Moroccan Crafts & Artisans Guide 2026 | Traditional Handicrafts, Workshops & Where to Buy',
    description:
      'Explore Morocco\'s living craft traditions. From Fes zellige masters to Essaouira woodworkers, discover workshops, fair-trade cooperatives, and authentic handicrafts with prices and buying tips.',
    url: `${BASE_URL}/morocco-crafts-artisans`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan artisan workshop with traditional zellige tiles, brass lanterns, and handcrafted leather goods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Crafts & Artisans Guide 2026 | Handicrafts & Workshops',
    description:
      'From zellige tilework to Berber textiles — discover Morocco\'s master artisans, their workshops, and how to buy authentic handicrafts at fair prices.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-crafts-artisans` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-crafts-artisans`,
  name: 'Moroccan Crafts & Artisans Guide 2026 | Traditional Handicrafts, Workshops & Where to Buy',
  description:
    'Complete guide to Moroccan crafts and artisans. Discover zellige tilework, leather goods, ceramics, metalwork, woodwork, and textiles. Find workshops, cooperatives, and fair-trade buying tips.',
  url: `${BASE_URL}/morocco-crafts-artisans`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-crafts-artisans`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Crafts & Artisans Guide', item: `${BASE_URL}/morocco-crafts-artisans` },
    ],
  },
};

const faqItems = [
  {
    question: 'What are the most popular Moroccan crafts to buy as souvenirs?',
    answer: 'Leather babouche slippers (from 80 MAD), hand-painted ceramics from Fes or Safi (from 50 MAD), brass lanterns (from 200 MAD), Berber rugs (from 800 MAD for small), and thuya wood boxes from Essaouira (from 100 MAD) rank as the most purchased handicrafts. Zellige tile coasters and small poufs also ship well.',
  },
  {
    question: 'How can I tell if a Moroccan handicraft is authentic or mass-produced?',
    answer: 'Authentic pieces show slight irregularities — no two hand-cut zellige tiles are identical, genuine leather has a distinct smell and patina, and real Berber rugs have minor asymmetries in their patterns. Ask to see the artisan at work, check for cooperative stamps or fair-trade labels, and avoid items with printed (not hand-painted) designs. Machine-made copies often look too perfect and feel lighter.',
  },
  {
    question: 'Is it safe to ship ceramics and fragile crafts home from Morocco?',
    answer: 'Yes. Most established workshops and cooperatives offer international shipping with proper packaging. Expect to pay from 300 MAD for a small parcel to Europe and from 500 MAD to North America. Artisans in Safi and Fes have decades of experience packing ceramics for export. For extra protection, carry fragile items in your luggage wrapped in clothing.',
  },
  {
    question: 'What is a maalem and why does it matter?',
    answer: 'A maalem is a master artisan who has completed years of apprenticeship (typically 8-12 years) under another maalem. This title carries deep respect in Moroccan society. Buying from a maalem or their workshop guarantees traditional techniques and higher quality. The maalem system preserves craft knowledge that stretches back centuries — some zellige families trace their lineage through 15 generations.',
  },
  {
    question: 'How much should I expect to pay for a Moroccan rug?',
    answer: 'Prices vary by size, technique, and origin. Small Boucherouite (recycled textile) rugs start from 500 MAD. Medium Azilal or Beni Ourain rugs (1.5m x 2m) range from 2,000-5,000 MAD. Large, high-knot-count Rabat carpets can reach 15,000 MAD or more. Cooperative prices are fixed and fair. In souks, start your negotiation at 40-50% of the asking price.',
  },
  {
    question: 'Can I visit artisan workshops in Morocco?',
    answer: 'Absolutely. Fes has over 30 open workshops in the medina, especially around Ain Nokbi (leather) and Bab Boujloud (metalwork). Marrakech\'s Ensemble Artisanal and fondouks welcome visitors. Essaouira\'s thuya wood workshops line the port area. Many cooperatives actively encourage visits — the Complexe des Potiers in Safi offers free tours of their kilns. Some workshops charge a small fee (from 20 MAD) that goes toward apprentice training.',
  },
  {
    question: 'What is the best time of year to shop for Moroccan crafts?',
    answer: 'October through April offers the most comfortable shopping conditions in medinas and souks. Ramadan (expected Feb-Mar 2027) affects workshop hours but many artisans still work mornings. Moussem festivals (seasonal regional festivals) showcase specialized crafts — the Moussem of Tan-Tan in June features Saharan crafts not found elsewhere. Avoid August when some family workshops close for holidays and summer heat makes medina browsing exhausting.',
  },
];

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
   DATA: CRAFT CATEGORIES
   ═══════════════════════════════════════════════════════════════ */

const craftCategories = [
  {
    name: 'Zellige Tilework',
    icon: Shapes,
    city: 'Fes',
    priceRange: 'From 150 MAD per sqm (basic) to 3,000 MAD per sqm (museum-grade)',
    unescoStatus: 'UNESCO Intangible Heritage (2019)',
    description:
      'Each zellige tile is hand-chiseled from clay, glazed with mineral pigments, and assembled into geometric mosaics without any pre-drawn pattern. A single fountain panel can require 10,000+ individual pieces. Fes remains the undisputed capital — the Bou Inania madrasa and Al Attarine medersa showcase the craft at its peak.',
  },
  {
    name: 'Leather Craft',
    icon: Scissors,
    city: 'Fes & Marrakech',
    priceRange: 'From 80 MAD (babouches) to 2,500 MAD (large bags)',
    unescoStatus: 'Fes Tanneries — UNESCO World Heritage Site zone',
    description:
      'The Chouara tannery in Fes has operated continuously since the 11th century. Workers dye hides using saffron, poppy, indigo, mint, and cedar — the same natural ingredients used 900 years ago. Finished leather becomes babouche slippers, poufs, bags, belts, and journal covers. Marrakech offers more contemporary leather designs.',
  },
  {
    name: 'Ceramics & Pottery',
    icon: CircleDot,
    city: 'Safi, Fes & Tamegroute',
    priceRange: 'From 30 MAD (small bowl) to 800 MAD (large tagine platter)',
    unescoStatus: 'Safi — UNESCO Creative City of Crafts (2017)',
    description:
      'Three distinct ceramic traditions define Morocco. Safi produces polychrome painted ware and the country\'s most refined porcelain. Fes specializes in cobalt-blue geometric designs on white ground. Tamegroute — a desert village near Zagora — makes distinctive green-glazed pottery using a glaze recipe kept secret for 400 years.',
  },
  {
    name: 'Metalwork',
    icon: Hammer,
    city: 'Marrakech & Fes',
    priceRange: 'From 60 MAD (small tray) to 5,000 MAD (large pierced lantern)',
    unescoStatus: 'Part of medina UNESCO designations',
    description:
      'The rhythmic hammering of dinandiers (metalworkers) echoes through Marrakech\'s Place des Ferblantiers and Fes\'s Seffarine Square — the oldest continuously operating metalworking square in the world. Artisans shape brass, copper, and silver into lanterns, teapots, trays, and door knockers using techniques unchanged since the Marinid dynasty.',
  },
  {
    name: 'Woodwork',
    icon: Layers,
    city: 'Essaouira & Fes',
    priceRange: 'From 100 MAD (small box) to 4,000 MAD (large furniture piece)',
    unescoStatus: 'Essaouira Medina — UNESCO World Heritage Site',
    description:
      'Essaouira holds a near-monopoly on thuya wood (Tetraclinis articulata), a slow-growing conifer found only in the Mogador region. Its burl produces swirling, aromatic grain prized for boxes, chess sets, and decorative objects. In Fes, cedar carvers produce mashrabiya screens and painted furniture using atlas cedar from the Middle Atlas mountains.',
  },
  {
    name: 'Textiles & Weaving',
    icon: Palette,
    city: 'Nationwide',
    priceRange: 'From 200 MAD (small blanket) to 15,000 MAD (fine Rabat carpet)',
    unescoStatus: 'Multiple regional traditions recognized',
    description:
      'Every region of Morocco has a distinct weaving identity. High Atlas Berber women produce Beni Ourain rugs with their signature diamond patterns. The Haouz plain yields flat-weave kilims. Fes artisans create silk brocade (brocart fassi) for wedding caftans. The Rif mountains contribute jebala striped blankets. Each piece encodes the weaver\'s tribal origin and personal story.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WORKSHOP LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const workshopLocations = [
  {
    city: 'Fes',
    icon: Building,
    spots: [
      'Ain Nokbi — leather tanning district with 3 historic tanneries',
      'Seffarine Square — brass and copper workers, Morocco\'s oldest craft square',
      'Bab Boujloud area — zellige workshops and ceramic painters',
      'Foundouk el-Nejjarine — restored caravanserai, now a woodworking museum',
    ],
  },
  {
    city: 'Marrakech',
    icon: Store,
    spots: [
      'Ensemble Artisanal — government-run fixed-price showroom near Koutoubia',
      'Place des Ferblantiers — lantern makers and metalworkers',
      'Fondouk el-Amri — working artisan studios in a restored courtyard',
      'Cooperative Artisanale Femmes de Marrakech — women\'s textile cooperative',
    ],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    spots: [
      'Skala de la Ville — thuya wood workshops along the ramparts',
      'Cooperative Tamounte — women\'s argan oil and craft cooperative',
      'Port area workshops — marquetry and inlay demonstration studios',
      'Galerie Othello — contemporary crafts meet traditional technique',
    ],
  },
  {
    city: 'Safi',
    icon: Gem,
    spots: [
      'Complexe des Potiers (Colline des Potiers) — 30+ workshops on Potters\' Hill',
      'National Ceramics Museum — housed in the Portuguese-era Kechla fortress',
      'Cooperative Safi Pottery — group studio with kiln tours available',
      'Bab Chaâba — street of working ceramic painters',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUYING TIPS
   ═══════════════════════════════════════════════════════════════ */

const buyingTips = [
  {
    title: 'Cooperatives vs. Souks',
    icon: ShieldCheck,
    details:
      'Cooperatives charge fixed prices — typically 10-20% above what a skilled negotiator pays in the souk, but you get guaranteed authenticity and fair artisan wages. Souks reward patience: start at 40-50% of the asking price and work up. Never buy the first item you see.',
  },
  {
    title: 'Fair Trade Certifications',
    icon: HandHeart,
    details:
      'Look for the WFTO (World Fair Trade Organization) mark or the Moroccan "Label Artisanat" stamp. The Anou cooperative (anou.org) connects artisans directly with buyers online. Fair-trade items cost 15-30% more but ensure artisans receive a living wage and apprentices get trained.',
  },
  {
    title: 'Shipping & Customs',
    icon: Package,
    details:
      'Most workshops ship internationally via DHL, FedEx, or La Poste Maroc. Expect from 300 MAD for small parcels to Europe. Declare purchases at customs — Morocco allows duty-free export of personal handicraft purchases. Keep receipts for any item over 2,000 MAD. Rugs over 50 years old need an export permit.',
  },
  {
    title: 'Spotting Fakes',
    icon: Eye,
    details:
      'Machine-made "Moroccan" goods flood the souks, imported from China and India. Red flags: identical patterns on multiple items, plastic-coated surfaces, suspiciously low prices, and sellers who refuse to show their workshop. Real zellige has visible chisel marks on the back. Genuine leather smells like leather, not chemicals.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCraftsArtisansPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ─── HERO SECTION ─── */}
      <section className="hero-overlay relative isolate overflow-hidden bg-[#2a1f14] py-20 sm:py-28 lg:py-36">
        <img
          src="/images/hero-marrakech.webp"
          alt="Traditional Moroccan artisan workshop with handcrafted goods and colorful tilework"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="container-morocco relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1 text-sm text-white/80">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/50" />
            <span className="text-white font-medium">Moroccan Crafts &amp; Artisans Guide</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Moroccan Crafts &amp; Artisans
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A hands-on guide to Morocco&apos;s living craft traditions — from Fes zellige masters chiseling
            10,000-piece mosaics to Essaouira woodworkers carving aromatic thuya burl. Learn what makes
            each craft unique, where to watch artisans at work, and how to buy authentic pieces at fair prices.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Hammer className="h-4 w-4 text-[#C4960C]" /> 6 Major Craft Traditions</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#C4960C]" /> 4 Artisan Cities Mapped</span>
            <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-[#C4960C]" /> Prices Updated Mar 2026</span>
          </div>
        </div>
      </section>

      {/* ─── CRAFT HERITAGE INTRO ─── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
              Morocco&apos;s Craft Heritage
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
            Morocco&apos;s handicraft sector employs over 2 million people — roughly 20% of the working population
            outside agriculture. UNESCO has recognized multiple Moroccan craft traditions as Intangible Cultural
            Heritage, including the knowledge and practices of zellige tilework (2019) and the cultural practices
            of the gnawa (which influence craft aesthetics across the south).
          </p>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
            At the center of this ecosystem stands the <strong>maalem</strong> — the master artisan. A maalem earns
            the title only after 8-12 years of apprenticeship under an existing master, following a tradition
            that predates Morocco&apos;s modern borders. Some craft families trace their lineage through 15 or more
            generations. The maalem doesn&apos;t just make objects — the maalem transmits technical knowledge,
            aesthetic principles, and cultural identity to the next generation of apprentices.
          </p>
          <div className="card-moroccan p-6 bg-white">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#C4960C]" />
              The Apprenticeship System
            </h3>
            <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-4">
              A typical apprenticeship begins at age 12-14. The apprentice (sana&apos;i) starts with basic tasks —
              mixing clay, preparing dyes, cleaning tools — and gradually advances to more skilled work under the
              maalem&apos;s direct supervision. No formal curriculum exists. Knowledge transfers through observation,
              repetition, and correction. After roughly a decade, a skilled apprentice creates a masterwork piece
              judged by a council of established maalemin (plural). Passing earns the title and the right to take
              on apprentices.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F5] rounded-lg p-4 text-center">
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#A0522D]">8-12</p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">Years of training</p>
              </div>
              <div className="bg-[#FAF8F5] rounded-lg p-4 text-center">
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#A0522D]">2M+</p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">Craft workers nationwide</p>
              </div>
              <div className="bg-[#FAF8F5] rounded-lg p-4 text-center">
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#A0522D]">15+</p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">Generations in some families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZELLIGE TILEWORK ─── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Shapes className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
                Zellige Tilework
              </h2>
            </div>
            <div className="zellige-border mb-6" />
            <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
              Zellige (from the Arabic <em>al-zillij</em>, meaning &ldquo;polished stone&rdquo;) reached Morocco
              from Mesopotamia via Al-Andalus in the 10th century. Fes adopted and perfected the art form —
              the city&apos;s Bou Inania madrasa (built 1351-1356) represents the zenith of the tradition with
              patterns containing over 30 distinct geometric shapes interlocked without a single gap.
            </p>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3">
              How Zellige Is Made
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { step: '1. Clay preparation', desc: 'Raw clay from the Fes region is kneaded, shaped into squares, dried for 2 weeks, then glazed with enamel made from sand, potash, and mineral pigments.' },
                { step: '2. First firing', desc: 'Tiles fire at 900°C in a traditional wood-burning kiln for 8-10 hours. The kiln master judges temperature by flame color alone — no thermometers.' },
                { step: '3. Chiseling (tqchir)', desc: 'Each tile is flipped face-down and hand-chiseled into precise geometric shapes using a manqach (sharp hammer). A skilled chiseler cuts 100-150 pieces per day.' },
                { step: '4. Assembly (trkib)', desc: 'Cut pieces are arranged face-down on a flat surface following a pattern held entirely in the maalem\'s memory. Plaster is poured over the back to lock them in place.' },
              ].map((item) => (
                <div key={item.step} className="card-moroccan p-4 bg-[#FAF8F5]">
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] text-sm mb-1">{item.step}</p>
                  <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3">
              Where to See &amp; Buy Zellige
            </h3>
            <ul className="font-[family-name:var(--font-heading)] text-gray-700 space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#A0522D] mt-1 shrink-0" />
                <span><strong>Bou Inania Madrasa, Fes</strong> — finest surviving medieval zellige. Entry from 70 MAD.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#A0522D] mt-1 shrink-0" />
                <span><strong>Art Naji workshop, Fes</strong> — active workshop offering demonstrations. Tiles from 150 MAD per sqm for simple patterns.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#A0522D] mt-1 shrink-0" />
                <span><strong>Dar Batha Museum, Fes</strong> — zellige collection spanning 5 centuries. Entry from 20 MAD.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-[#A0522D] mt-1 shrink-0" />
                <span><strong>Ben Youssef Madrasa, Marrakech</strong> — recently restored, with intricate 16th-century tilework. Entry from 70 MAD.</span>
              </li>
            </ul>
            <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 italic">
              Prices are seasonal and may change. Verify directly with workshops before placing orders.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MOROCCAN LEATHER ─── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Scissors className="h-6 w-6 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
              Moroccan Leather
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
            The term &ldquo;morocco leather&rdquo; entered the English language in the 16th century — a direct
            testament to the global reputation of Moroccan tanning. The Chouara tannery in Fes, operating since
            the 11th century, remains the largest traditional tannery in the world: 300+ stone vats spread
            across a 5,000 sqm complex where workers dye hides using methods essentially unchanged for 900 years.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="card-moroccan p-5 bg-white">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C4960C]" />
                Fes Tanneries
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed mb-3">
                Three historic tanneries operate in the Fes medina: Chouara (largest, most visited), Sidi Moussa,
                and Ain Azliten. Workers soak hides in quicklime, scrape them by hand, then immerse them in
                vats of natural dyes — saffron for yellow, poppy for red, indigo for blue, mint for green,
                and cedar bark for brown.
              </p>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500">
                Viewing terrace access from 20 MAD (often includes a mint sprig for the smell).
              </p>
            </div>
            <div className="card-moroccan p-5 bg-white">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-[#C4960C]" />
                What to Buy
              </h3>
              <ul className="font-[family-name:var(--font-heading)] text-gray-700 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Star className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                  <span><strong>Babouche slippers</strong> — from 80 MAD (plain) to 400 MAD (embroidered)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                  <span><strong>Leather poufs</strong> — from 250 MAD (unstuffed) to 600 MAD (stuffed, embossed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                  <span><strong>Crossbody bags</strong> — from 200 MAD to 1,200 MAD for designer-quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                  <span><strong>Leather journals</strong> — from 60 MAD with hand-tooled covers</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-moroccan p-4 bg-amber-50 border-l-4 border-[#C4960C]">
            <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm flex items-start gap-2">
              <Info className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
              <span>
                <strong>Tip:</strong> Marrakech leather shops in the Mouassine and Mellah quarters
                increasingly offer contemporary designs — structured totes, minimalist wallets, laptop sleeves —
                using the same traditionally tanned leather. Prices run 20-40% higher than Fes for equivalent quality,
                but the designs appeal to modern tastes.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── CERAMICS & POTTERY ─── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <CircleDot className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
                Ceramics &amp; Pottery
              </h2>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
              Morocco produces three completely distinct ceramic traditions, each tied to a specific city and
              climate. The clay composition, glazing chemistry, and firing technique differ so much that an
              expert can identify the origin of a Moroccan pot from across a room.
            </p>

            <div className="grid gap-6 mb-6">
              {/* Safi */}
              <div className="card-moroccan p-5 bg-[#FAF8F5]">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C4960C]" />
                  Safi — Morocco&apos;s Ceramic Capital
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-3">
                  UNESCO designated Safi a Creative City of Crafts and Folk Art in 2017 — the only Moroccan city with
                  this specific designation. The Colline des Potiers (Potters&apos; Hill) hosts over 30 workshops
                  where artisans produce everything from everyday tagine pots to museum-quality painted platters.
                  Safi potters fire at higher temperatures than other Moroccan traditions, producing a harder,
                  more durable product.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                  <strong>Prices:</strong> Small painted bowl from 30 MAD | Large tagine from 150 MAD | Decorative platter from 200 MAD
                </p>
              </div>

              {/* Fes */}
              <div className="card-moroccan p-5 bg-[#FAF8F5]">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Gem className="h-5 w-5 text-[#C4960C]" />
                  Fes — Blue &amp; White Tradition
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-3">
                  Fes blue ceramics use cobalt oxide imported from the Middle Atlas mines to create the
                  signature deep blue geometric patterns on a white tin-glaze ground. The technique arrived
                  with Andalusian refugees in the 13th century and has barely changed since. Each piece is
                  painted freehand — the artisan rotates the plate on a simple turntable while applying
                  intricate patterns from memory.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                  <strong>Prices:</strong> Small plate from 50 MAD | Tea set from 300 MAD | Large serving bowl from 250 MAD
                </p>
              </div>

              {/* Tamegroute */}
              <div className="card-moroccan p-5 bg-[#FAF8F5]">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#C4960C]" />
                  Tamegroute — Desert Green Pottery
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-3">
                  This tiny village 18km south of Zagora produces pottery with a distinctive dark green glaze
                  that no other workshop in Morocco can replicate. The secret lies in the local silica sand mixed
                  with copper and manganese — the exact proportions have passed through a single family for roughly
                  400 years. Each piece shows natural variations in glaze depth and bubble patterns caused by the
                  wood-fired kiln. No two pieces match, which is the entire point.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                  <strong>Prices:</strong> Small cup from 20 MAD | Candleholder from 40 MAD | Large vase from 150 MAD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── METALWORK ─── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Hammer className="h-6 w-6 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
              Metalwork — Brass, Copper &amp; Silver
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
            Seffarine Square in Fes has echoed with the sound of hammer on metal for over 700 years. It holds
            the distinction of being Morocco&apos;s oldest continuously operating craft square. The dinandiers
            (metalworkers) who work here shape flat sheets of brass and copper into functional and decorative
            objects: lanterns, teapots, trays, door knockers, and incense burners.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="card-moroccan p-5 bg-white">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2">
                Pierced Lanterns (Fanous)
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed mb-2">
                Marrakech&apos;s Place des Ferblantiers specializes in pierced-metal lanterns. Artisans punch
                thousands of tiny holes into brass or tin sheets, creating patterns that cast intricate shadow
                displays when lit. A small table lantern takes 2-3 days of work. A large mosque-style lantern
                can take a month.
              </p>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                From 60 MAD (small tin) to 5,000 MAD (large brass, museum-quality)
              </p>
            </div>
            <div className="card-moroccan p-5 bg-white">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2">
                Tea Service Sets
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed mb-2">
                The Moroccan tea tray (siniya) and teapot are functional art. Silver-plated or nickel-silver
                teapots are hammered and engraved with arabesque patterns. A complete set — teapot, tray, and
                6 etched glasses — makes one of the most practical souvenirs. The teapot&apos;s long spout is
                designed for the theatrical high pour that aerates the tea.
              </p>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                From 200 MAD (basic set) to 2,500 MAD (hand-engraved silver-plated)
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { item: 'Brass door knocker (Hand of Fatima)', price: 'From 120 MAD' },
              { item: 'Copper hammam bucket', price: 'From 150 MAD' },
              { item: 'Engraved serving tray (40cm)', price: 'From 180 MAD' },
              { item: 'Tuareg silver jewelry', price: 'From 200 MAD' },
              { item: 'Large brass incense burner', price: 'From 300 MAD' },
              { item: 'Antique-style wall sconce (pair)', price: 'From 500 MAD' },
            ].map((item) => (
              <div key={item.item} className="bg-[#FAF8F5] rounded-lg p-3 text-center">
                <p className="font-[family-name:var(--font-heading)] text-sm font-medium text-gray-800">{item.item}</p>
                <p className="font-[family-name:var(--font-heading)] text-xs text-[#A0522D] mt-1">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 italic mt-4">
            Seasonal pricing applies. Prices may change without notice — confirm directly with artisans.
          </p>
        </div>
      </section>

      {/* ─── WOODWORK ─── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
                Woodwork — Thuya, Cedar &amp; Painted Furniture
              </h2>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
              Two wood species dominate Moroccan craft: thuya (Tetraclinis articulata), native almost exclusively
              to the Essaouira-Mogador coast, and Atlas cedar from the Middle Atlas mountains. Each serves a
              different artistic tradition and produces a completely different aesthetic.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="card-moroccan p-5 bg-[#FAF8F5]">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#C4960C]" />
                  Thuya Wood (Essaouira)
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed mb-3">
                  Thuya burl — the knotted, gnarled growth harvested from the tree&apos;s root system — contains
                  one of the most distinctive grain patterns in the world. When polished, it reveals swirling
                  figures in amber, caramel, and chocolate tones. The wood also emits a warm, cedar-like fragrance
                  that persists for years. Essaouira&apos;s workshops along the ramparts near the Skala de la Ville
                  produce boxes, chess sets, backgammon boards, picture frames, and larger furniture pieces.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                  Small box from 100 MAD | Chess set from 400 MAD | Writing desk from 2,500 MAD
                </p>
              </div>
              <div className="card-moroccan p-5 bg-[#FAF8F5]">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Building className="h-4 w-4 text-[#C4960C]" />
                  Cedar &amp; Painted Furniture (Fes)
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed mb-3">
                  Atlas cedar&apos;s natural insect resistance and rich red-brown color make it ideal for architectural
                  woodwork. Fes carvers produce mashrabiya (lattice screens), carved doors, and ceiling panels.
                  The painted furniture tradition uses soft-wood frames decorated with geometric and floral patterns
                  in bright polychrome — greens, reds, golds, and blues applied over gesso. The Foundouk el-Nejjarine
                  (restored 18th-century caravanserai) now serves as a woodworking museum and active workshop.
                </p>
                <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                  Carved panel from 300 MAD | Painted chest from 1,200 MAD | Mashrabiya screen from 3,000 MAD
                </p>
              </div>
            </div>

            <div className="card-moroccan p-4 bg-amber-50 border-l-4 border-[#C4960C]">
              <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm flex items-start gap-2">
                <Info className="h-4 w-4 text-[#C4960C] mt-0.5 shrink-0" />
                <span>
                  <strong>Conservation note:</strong> Thuya is a slow-growing species under increasing pressure
                  from demand. Responsible workshops now use fallen trees and root burls rather than cutting live
                  trees. Ask about the wood source before purchasing large items. The Moroccan government regulates
                  thuya harvesting through the Eaux et Forets administration.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEXTILES ─── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-6 w-6 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
              Textiles — Weaving, Embroidery &amp; Silk Brocade
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-6">
            Morocco&apos;s textile traditions split along a clear geographic and cultural divide. Urban centers
            (Fes, Rabat, Tetouan) produce refined silk and cotton work for caftans, wedding garments, and
            furnishings. Rural and Amazigh (Berber) communities weave wool rugs, blankets, and flat-weave
            kilims that encode tribal identity through color and pattern.
          </p>

          <div className="grid gap-4 mb-6">
            {[
              {
                name: 'Beni Ourain Rugs',
                origin: 'Middle Atlas',
                desc: 'Thick, undyed cream wool with bold black diamond or zigzag patterns. Originally woven as bedding and insulation for mountain homes. Each rug takes 2-4 weeks on a vertical loom. The diamond motif represents femininity and protection.',
                price: 'From 2,000 MAD (1.5m x 2m)',
              },
              {
                name: 'Boucherouite Rugs',
                origin: 'Central Morocco',
                desc: 'Made from recycled fabric scraps — cotton, wool remnants, synthetic strips — woven into colorful, abstract compositions. Born from necessity (textile scarcity in the 1960s-70s), these rugs have become collectors\' items for their folk-art spontaneity.',
                price: 'From 500 MAD (small)',
              },
              {
                name: 'Fes Silk Brocade (Brocart Fassi)',
                origin: 'Fes',
                desc: 'Gold and silver thread woven into silk to create shimmering fabric for wedding caftans and ceremonial garments. A single wedding caftan requires 8-12 meters of brocade and up to 3 months of embroidery. This tradition depends on a shrinking number of specialized weavers.',
                price: 'From 500 MAD per meter (fabric only)',
              },
              {
                name: 'Berber Blankets (Handira)',
                origin: 'High Atlas',
                desc: 'Wedding blankets woven from wool and decorated with sequins and metallic thread. Traditionally draped over the bride\'s shoulders during the ceremony. The sequins catch firelight to symbolize stars and good fortune. Each clan uses distinct sequin placement patterns.',
                price: 'From 800 MAD',
              },
            ].map((textile) => (
              <div key={textile.name} className="card-moroccan p-5 bg-white flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-1">
                    {textile.name}
                  </h3>
                  <p className="font-[family-name:var(--font-heading)] text-xs text-[#A0522D] font-medium mb-2 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {textile.origin}
                  </p>
                  <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed mb-2">
                    {textile.desc}
                  </p>
                  <p className="font-[family-name:var(--font-heading)] text-sm text-gray-600 font-medium">
                    {textile.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#FAF8F5] rounded-lg p-4">
              <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-[#A0522D]" />
                Embroidery Traditions
              </h4>
              <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed">
                Each Moroccan city has a signature embroidery style. Fes uses cross-stitch in monochrome blue.
                Rabat favors flat satin stitch in polychrome. Meknes combines both with metallic thread.
                Sale specializes in counted-thread work. These regional styles appear on table linens, cushion
                covers, and ceremonial garments.
              </p>
            </div>
            <div className="bg-[#FAF8F5] rounded-lg p-4">
              <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="h-4 w-4 text-[#A0522D]" />
                Carpet Buying Tip
              </h4>
              <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed">
                Flip the rug over. A genuine hand-knotted rug shows the pattern clearly on both sides. Machine-made
                copies have a flat, uniform backing. Count the knots per square inch — higher density means finer
                work and higher value. Ask for a certificate of origin from cooperatives, which also specifies the
                weaver&apos;s name and village.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHERE TO WATCH ARTISANS AT WORK ─── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
                Where to Watch Artisans at Work
              </h2>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-8">
              Morocco&apos;s medinas function as open-air factories. Artisans work in street-level workshops
              (ateliers) and converted caravanserais (fondouks) where visitors can watch, ask questions, and
              often try their hand at a craft. Here are the top locations organized by city.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {workshopLocations.map((loc) => (
                <div key={loc.city} className="card-moroccan p-5 bg-[#FAF8F5]">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <loc.icon className="h-5 w-5 text-[#C4960C]" />
                    {loc.city}
                  </h3>
                  <ul className="font-[family-name:var(--font-heading)] text-gray-700 text-sm space-y-2.5">
                    {loc.spots.map((spot) => (
                      <li key={spot} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                        <span>{spot}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 card-moroccan p-5 bg-[#FAF8F5]">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#A0522D]" />
                Workshop Etiquette
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="font-[family-name:var(--font-heading)] text-gray-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>Ask permission before photographing artisans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>A small purchase or tip (from 10 MAD) is appreciated after demonstrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>Greet with &ldquo;Salaam alaikum&rdquo; — it opens doors</span>
                  </li>
                </ul>
                <ul className="font-[family-name:var(--font-heading)] text-gray-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>Workshops typically open 9 AM - 6 PM, closed Fridays midday</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>Book hands-on workshops in advance during peak season (Oct-Apr)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    <span>Dress modestly — arms and knees covered in traditional neighborhoods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUYING AUTHENTIC CRAFTS ─── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag className="h-6 w-6 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
              Buying Authentic Crafts
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-8">
            The difference between a rewarding craft purchase and a regrettable one comes down to three
            things: knowing where to buy, knowing how to verify authenticity, and knowing what constitutes
            a fair price. Here is a practical framework.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {buyingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 bg-white">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <tip.icon className="h-5 w-5 text-[#C4960C]" />
                  {tip.title}
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed">
                  {tip.details}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 bg-[#FAF8F5]">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[#A0522D]" />
              Negotiation Quick Guide
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-800 mb-2">In the Souk</h4>
                <ul className="font-[family-name:var(--font-heading)] text-gray-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>Start at 40-50% of the first asking price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>Walk away once — if they follow, the real negotiation begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>Bundle purchases for better per-item prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>Morning visits get better prices (first sale is considered lucky)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-800 mb-2">At Cooperatives</h4>
                <ul className="font-[family-name:var(--font-heading)] text-gray-700 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                    <span>Fixed prices — no negotiation needed or expected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                    <span>Prices reflect fair wages for artisans (10-20% above souk)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                    <span>Certificates of authenticity included with most purchases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                    <span>Reliable international shipping available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CRAFT OVERVIEW TABLE ─── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Gem className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
                Craft Quick Reference
              </h2>
            </div>
            <div className="overflow-x-auto">
              <div className="grid gap-4">
                {craftCategories.map((craft) => (
                  <div key={craft.name} className="card-moroccan p-5 bg-[#FAF8F5]">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="flex items-center gap-2 sm:w-48 shrink-0">
                        <craft.icon className="h-5 w-5 text-[#C4960C]" />
                        <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-gray-900">
                          {craft.name}
                        </h3>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-[family-name:var(--font-heading)] text-sm text-gray-700">
                          <span className="font-semibold text-[#A0522D]">City:</span> {craft.city}
                        </p>
                        <p className="font-[family-name:var(--font-heading)] text-sm text-gray-700">
                          <span className="font-semibold text-[#A0522D]">Price range:</span> {craft.priceRange}
                        </p>
                        <p className="font-[family-name:var(--font-heading)] text-sm text-gray-700">
                          <span className="font-semibold text-[#A0522D]">Status:</span> {craft.unescoStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Info className="h-6 w-6 text-[#A0522D]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-5 bg-white">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED GUIDES ─── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Fes Travel Guide',
                  href: '/fes',
                  desc: 'Explore the medina that houses Morocco\'s greatest craft workshops and UNESCO-listed monuments.',
                  icon: Building,
                },
                {
                  title: 'Marrakech Travel Guide',
                  href: '/marrakech',
                  desc: 'Navigate the souks, find the best lantern makers, and discover contemporary craft galleries.',
                  icon: Store,
                },
                {
                  title: 'Essaouira Travel Guide',
                  href: '/essaouira',
                  desc: 'Visit thuya wood workshops, coastal art galleries, and the UNESCO-listed medina.',
                  icon: Globe,
                },
                {
                  title: 'Morocco Shopping Guide',
                  href: '/morocco-shopping-guide',
                  desc: 'Complete souk navigation, bargaining strategies, and what to buy in every Moroccan city.',
                  icon: ShoppingBag,
                },
                {
                  title: 'Morocco Budget Guide',
                  href: '/morocco-budget-travel',
                  desc: 'Stretch your dirhams further with transport, food, and accommodation tips.',
                  icon: DollarSign,
                },
                {
                  title: 'Morocco Culture & Etiquette',
                  href: '/morocco-etiquette-guide',
                  desc: 'Dress codes, greeting customs, and cultural norms to respect when visiting workshops.',
                  icon: Users,
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 bg-[#FAF8F5] hover:shadow-md transition-shadow group"
                >
                  <guide.icon className="h-6 w-6 text-[#C4960C] mb-2" />
                  <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-gray-900 mb-1 group-hover:text-[#A0522D] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                    {guide.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-2 text-sm text-[#A0522D] font-medium">
                    Read guide <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="moroccan-pattern py-16 lg:py-20">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Plan Your Moroccan Craft Journey
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            From the zellige workshops of Fes to the thuya wood studios of Essaouira, Morocco offers
            a craft experience unmatched anywhere in the world. Start planning your route through the
            country&apos;s artisan heartlands.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-medium hover:bg-[#8B4726] transition-colors"
            >
              <Building className="h-4 w-4" />
              Explore Fes
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] border-2 border-[#A0522D] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-medium hover:bg-[#A0522D] hover:text-white transition-colors"
            >
              <Store className="h-4 w-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] border-2 border-[#A0522D] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-medium hover:bg-[#A0522D] hover:text-white transition-colors"
            >
              <Globe className="h-4 w-4" />
              Explore Essaouira
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
