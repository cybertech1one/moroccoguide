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
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Award,
  BookOpen,
  Globe,
  Droplets,
  Leaf,
  ShoppingBag,
  Users,
  AlertTriangle,
  Utensils,
  Gift,
  Eye,
  FlaskConical,
  TreeDeciduous,
  MessageCircleQuestion,
  Package,
  HandCoins,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-argan-oil`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Argan Oil Morocco 2026 | Cooperatives, Buying Guide, Prices & How to Spot Fakes',
  description:
    'Complete guide to argan oil in Morocco. Visit women\'s cooperatives near Essaouira and Agadir, learn hand-cracking and cold-pressing production, compare cosmetic vs culinary grades, explore the UNESCO argan biosphere, spot fakes, and buy authentic Moroccan argan oil at fair prices.',
  keywords: [
    'argan oil morocco',
    'where to buy argan oil morocco',
    'argan oil cooperative essaouira',
    'moroccan argan oil',
    'argan oil souss massa',
    'cosmetic argan oil morocco',
    'culinary argan oil morocco',
    'argan oil price morocco 2026',
    'argan oil cooperative visit',
    'argan forest UNESCO biosphere',
    'spot fake argan oil',
    'amlou morocco',
    'argan oil benefits',
    'argan tree morocco',
    'women cooperative morocco',
    'argan oil agadir',
    'argan oil taroudant',
    'best argan oil morocco',
    'argan oil souvenir',
    'argane oil buying guide',
  ],
  openGraph: {
    title: 'Argan Oil Morocco 2026 | Cooperatives, Buying Guide, Prices & How to Spot Fakes',
    description:
      'Visit women\'s cooperatives, compare cosmetic vs culinary grades, explore the UNESCO argan biosphere, spot fakes, and buy authentic Moroccan argan oil at fair cooperative prices.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-argan-oil.webp`,
        width: 1200,
        height: 630,
        alt: 'Women cracking argan nuts by hand at a cooperative in the Souss-Massa region of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Argan Oil Morocco 2026 | Complete Buying Guide & Cooperative Visits',
    description:
      'Hand-cracking, cold-pressing, cooperative visits, cosmetic vs culinary grades, price guide, and how to spot fakes. Everything about argan oil in Morocco.',
    images: [`${BASE_URL}/images/hero-argan-oil.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the difference between cosmetic and culinary argan oil?',
    a: 'Cosmetic argan oil is cold-pressed from raw, unroasted argan kernels. It is pale golden, nearly odorless, and used for skin, hair, and nails. Culinary argan oil is pressed from lightly roasted kernels, giving it a darker amber color and a deep, nutty flavor used for cooking, dipping bread, and drizzling over couscous. Never use culinary oil on skin, and never cook with cosmetic-grade oil.',
  },
  {
    q: 'How much does authentic argan oil cost in Morocco?',
    a: 'At women\'s cooperatives in the Souss-Massa region, pure cosmetic argan oil costs from 300 to 400 MAD per liter. Culinary argan oil costs from 250 to 350 MAD per liter. Small 60ml tourist bottles sell from 80 to 150 MAD at cooperatives. Prices in Marrakech or Fes medina shops are typically 30-50% higher. If argan oil is offered for under 150 MAD per liter, it is almost certainly diluted or fake. Seasonal pricing can shift these numbers.',
  },
  {
    q: 'How can I tell if argan oil is fake or diluted?',
    a: 'Authentic cosmetic argan oil has a light, non-greasy texture that absorbs into skin within 15-30 seconds. Red flags include very low prices (under 150 MAD per liter), a thick or sticky texture, strong chemical smell, cloudy appearance, or oil that sits on the skin without absorbing. Buy from cooperatives or reputable pharmacies and always ask for a skin absorption test before purchasing.',
  },
  {
    q: 'Can I visit argan oil cooperatives without booking a tour?',
    a: 'Yes. Most cooperatives along the Essaouira-Agadir road welcome drop-in visitors with no appointment and no entry fee. Staff explain the full production process and offer free samples. Beware of roadside shops that call themselves cooperatives but are staffed entirely by men. Genuine cooperatives are run by women\'s associations and carry GIE or cooperative certification. Some offer extended workshop experiences from 100 MAD per person.',
  },
  {
    q: 'What is amlou and where can I buy it?',
    a: 'Amlou is a traditional Amazigh spread made by grinding roasted almonds in a stone mortar, then mixing with culinary argan oil and local honey. Often called "Berber Nutella," it is served at breakfast with bread or msemen flatbread. A 250g jar costs from 60 to 100 MAD at cooperatives. Buy it directly from cooperatives for the freshest product made with pure argan oil.',
  },
  {
    q: 'Why is Moroccan argan oil so expensive compared to other oils?',
    a: 'It takes approximately 30 kg of argan fruit, the harvest of six to seven mature trees, to produce a single liter of oil. The hand-cracking of the extremely hard argan nut is the most labor-intensive step, requiring hours of skilled work. Argan trees grow only in a limited 8,000 square kilometer area of southwestern Morocco. The entire process from fruit collection to bottling takes multiple days of manual labor.',
  },
  {
    q: 'Can I bring argan oil home in my luggage?',
    a: 'Yes. Argan oil is legal to export from Morocco for personal use. Place bottles in checked luggage to avoid carry-on liquid restrictions. Wrap glass bottles in clothing or bubble wrap. Most cooperatives sell pre-packaged bottles with secure caps specifically designed for travel. There is no customs limit on personal quantities, but commercial quantities may require documentation.',
  },
  {
    q: 'Is the argan forest really a UNESCO Biosphere Reserve?',
    a: 'Yes. In 1998, UNESCO designated the Arganeraie Biosphere Reserve covering approximately 2.5 million hectares across the Souss-Massa, Essaouira, and Tiznit provinces. The argan tree is endemic to Morocco and is a keystone species preventing desertification. In 2014, the traditional knowledge and practices surrounding argan oil production were also inscribed on UNESCO\'s Intangible Cultural Heritage list.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Argan Oil Morocco 2026 | Cooperatives, Buying Guide, Prices & How to Spot Fakes',
  description:
    'Complete guide to argan oil in Morocco covering production, cooperatives, cosmetic vs culinary grades, UNESCO argan biosphere, buying tips, price guide, and spotting fakes.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-argan-oil.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Argan Oil Morocco', item: PAGE_URL },
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
   DATA: ARGAN OIL GRADES
   ================================================================ */

const arganGrades = [
  {
    grade: 'Cosmetic (Cold-Pressed)',
    icon: Droplets,
    color: 'Pale golden, almost clear',
    scent: 'Faint nutty, nearly odorless',
    source: 'Raw, unroasted argan kernels',
    uses: 'Skin moisturizer, hair serum, nail strengthener, anti-aging treatment, massage oil',
    price: 'From 300 MAD per liter at cooperatives',
    tip: 'Should absorb into skin within 30 seconds without leaving a greasy residue',
  },
  {
    grade: 'Culinary (Roasted)',
    icon: Utensils,
    color: 'Dark amber to brown',
    scent: 'Strong roasted nut aroma',
    source: 'Lightly toasted argan kernels',
    uses: 'Drizzled on couscous, tagines, salads, amlou spread, dipping bread',
    price: 'From 250 MAD per liter at cooperatives',
    tip: 'Never heat culinary argan oil for frying; high temperatures destroy nutrients and flavor. Use as a finishing oil only.',
  },
] as const;

/* ================================================================
   DATA: TOP COOPERATIVES
   ================================================================ */

const cooperatives = [
  {
    name: 'Cooperative Tighanimine',
    location: 'Tidzi, 30 km south of Essaouira on the R301',
    icon: Award,
    founded: '2003',
    members: '~60 women',
    description:
      'One of Morocco\'s most respected argan cooperatives. Tighanimine won the Slow Food Presidium designation for its commitment to traditional hand-pressed methods. The women here crack, roast, and press argan kernels using ancestral techniques while earning fair wages. Visitors watch every step, from nut-cracking on flat stones to hand-grinding on a traditional stone mill (azerg). Their oil is certified organic by Ecocert.',
    products: 'Pure argan oil (cosmetic & culinary), amlou, argan soap, argan-infused creams',
    prices: 'Cosmetic oil from 300 MAD/L, culinary oil from 250 MAD/L, amlou from 70 MAD/jar',
    visitTip: 'No appointment needed. Free demonstrations. Open daily 8:30-17:00.',
  },
  {
    name: 'Cooperative Marjana',
    location: 'Tamanar, between Essaouira and Agadir on the N1',
    icon: Star,
    founded: '2000',
    members: '~100 women',
    description:
      'One of the largest women\'s argan cooperatives in the Souss-Massa region. Based in Tamanar, the heartland of argan country, Marjana processes oil using both traditional hand-pressing and modern mechanical cold-pressing. They supply international beauty brands while maintaining a visitor center with full production demonstrations. Fair-trade certification ensures members receive above-market wages.',
    products: 'Argan oil, prickly pear seed oil, amlou, argan soap, cosmetic gift sets',
    prices: 'Cosmetic oil from 280 MAD/L, prickly pear seed oil from 800 MAD/100ml, gift sets from 200 MAD',
    visitTip: 'Large visitor center with parking. Guided tours in French, English, and Arabic.',
  },
  {
    name: 'Cooperative Amal',
    location: 'Essaouira outskirts, Quartier Industriel',
    icon: Heart,
    founded: '2004',
    members: '~40 women',
    description:
      'A smaller cooperative on the outskirts of Essaouira focused on empowering rural women through argan oil production and literacy programs. Every purchase directly funds education for members\' children. The intimate setting means fewer crowds and more personal interaction with the women who make the oil. Cosmetic argan oil is cold-pressed to order in small batches for maximum freshness.',
    products: 'Argan oil (cosmetic & culinary), argan soap, shampoo, lip balm, amlou',
    prices: 'Cosmetic oil from 320 MAD/L, small 60ml bottles from 100 MAD, soap from 30 MAD',
    visitTip: 'Easy to reach from Essaouira by taxi (from 30 MAD). Call ahead for English-speaking guide.',
  },
  {
    name: 'Cooperative Tamounte',
    location: 'Tiout oasis, 35 km east of Taroudant',
    icon: Leaf,
    founded: '2005',
    members: '~50 women',
    description:
      'Located in the oasis village of Tiout, Tamounte produces argan oil from trees growing alongside date palms and olive groves. The cooperative is part of a community tourism initiative where visitors also explore the Tiout kasbah, palm oasis, and traditional irrigation channels (khettaras). Their culinary argan oil is prized for a deep, complex flavor attributed to the unique terroir of the Souss plain.',
    products: 'Culinary argan oil, cosmetic oil, amlou, almond oil, date-argan confections',
    prices: 'Culinary oil from 250 MAD/L, amlou from 60 MAD/jar, date-argan sweets from 40 MAD',
    visitTip: 'Combine with a visit to Tiout oasis and kasbah. Best reached from Taroudant.',
  },
  {
    name: 'Cooperative Ajddigue',
    location: 'Smimou, 45 km south of Essaouira',
    icon: Sparkles,
    founded: '2002',
    members: '~70 women',
    description:
      'Ajddigue means "flower" in Tashelhit, and this cooperative has become a benchmark for quality argan oil in the Essaouira province. Operating under the UCFA (Union des Cooperatives des Femmes de l\'Arganeraie) umbrella, it groups several cooperatives to achieve economies of scale while maintaining artisanal quality. Their laboratory-tested oil carries both organic and IGP (Indication Geographique Protegee) certifications.',
    products: 'IGP-certified argan oil, organic argan oil, amlou, argan face cream, body oil',
    prices: 'IGP-certified oil from 350 MAD/L, organic cosmetic oil from 320 MAD/L',
    visitTip: 'Part of the UCFA network. Ask about multi-cooperative tours of the surrounding area.',
  },
] as const;

/* ================================================================
   DATA: FAKE ARGAN OIL RED FLAGS
   ================================================================ */

const fakeRedFlags = [
  { flag: 'Price under 150 MAD per liter', detail: 'Pure argan oil cannot be produced below this cost. The labor alone for hand-cracking 30 kg of nuts makes it impossible. Extremely cheap oil is diluted with sunflower or soybean oil.' },
  { flag: 'Thick, sticky texture', detail: 'Real argan oil is lightweight and absorbs into skin in under 30 seconds. If it feels greasy and heavy on the back of your hand, it has been cut with cheaper oils.' },
  { flag: 'Strong chemical or rancid smell', detail: 'Cosmetic argan oil has a faint nutty scent; culinary oil smells like roasted nuts. Any chemical, metallic, or off-putting odor means adulteration or spoilage.' },
  { flag: 'Cloudy or overly dark cosmetic oil', detail: 'Cosmetic-grade argan oil should be pale golden and clear. Dark or murky cosmetic oil is likely made from roasted kernels (which is culinary grade) or blended with inferior oils.' },
  { flag: 'Sold in clear plastic bottles', detail: 'UV light degrades argan oil rapidly. Reputable producers use dark glass bottles or opaque containers. Clear plastic packaging signals a tourist-trap product with a short shelf life.' },
  { flag: '"Cooperative" staffed only by men', detail: 'Genuine women\'s cooperatives have women visibly cracking, grinding, and pressing on-site. Shops staffed entirely by male salesmen calling themselves cooperatives are typically resellers charging inflated prices for questionable quality.' },
] as const;

/* ================================================================
   DATA: WHERE TO BUY
   ================================================================ */

const whereToBuy = [
  {
    location: 'Women\'s Cooperatives (Souss-Massa)',
    icon: Users,
    quality: 'Highest',
    priceRange: 'From 250-400 MAD/L',
    pros: 'Direct from producers, freshest oil, can watch production, fair trade, lowest per-liter prices',
    cons: 'Requires travel to the Essaouira-Agadir corridor; limited packaging options',
  },
  {
    location: 'Essaouira & Agadir Pharmacies',
    icon: ShieldCheck,
    quality: 'High',
    priceRange: 'From 350-500 MAD/L',
    pros: 'Quality-controlled, convenient city locations, certified products, labeled ingredients',
    cons: 'Higher prices than cooperatives; less variety; no production tour',
  },
  {
    location: 'Souk Shops (Marrakech, Fes, Meknes)',
    icon: ShoppingBag,
    quality: 'Variable',
    priceRange: 'From 150-600 MAD/L',
    pros: 'Available in every medina, haggling possible, some reputable sellers with certifications',
    cons: 'High risk of diluted or fake oil; aggressive sales tactics; wide quality range',
  },
  {
    location: 'Airport & Hotel Shops',
    icon: Globe,
    quality: 'Medium-High',
    priceRange: 'From 400-800 MAD/L',
    pros: 'Convenient, pre-packaged for travel, some carry certified organic brands',
    cons: 'Most expensive option; markup of 50-100% over cooperative prices',
  },
] as const;

/* ================================================================
   DATA: ARGAN SOUVENIRS
   ================================================================ */

const arganSouvenirs = [
  { name: 'Pure Cosmetic Argan Oil (60ml)', price: 'From 80 MAD', tip: 'Dark glass bottle, cold-pressed, for skin and hair' },
  { name: 'Culinary Argan Oil (250ml)', price: 'From 80 MAD', tip: 'Roasted, nutty flavor; a gift any cook will appreciate' },
  { name: 'Amlou Spread (250g jar)', price: 'From 60 MAD', tip: 'Almonds, argan oil, honey; the "Berber Nutella"' },
  { name: 'Argan Oil Soap (handmade bar)', price: 'From 25 MAD', tip: 'Natural, moisturizing; often blended with rose or orange blossom' },
  { name: 'Prickly Pear Seed Oil (30ml)', price: 'From 250 MAD', tip: 'More expensive than argan; powerful anti-aging serum' },
  { name: 'Argan Gift Set (oil, soap, cream)', price: 'From 200 MAD', tip: 'Pre-packaged at cooperatives; ready for gifting' },
  { name: 'Argan Lip Balm', price: 'From 30 MAD', tip: 'Lightweight, affordable souvenir; TSA-friendly size' },
  { name: 'Argan Body Butter', price: 'From 80 MAD', tip: 'Blended with shea butter and essential oils at some cooperatives' },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoArganOilPage() {
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
          style={{ backgroundImage: 'url(/images/hero-argan-oil.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Argan Oil Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Shopping &amp; Artisan Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Argan Oil in Morocco:
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From tree to bottle. How argan oil is made, where to buy it at fair prices,
            how to tell real from fake, and why a visit to a women&apos;s cooperative
            belongs on every Morocco itinerary.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Morocco&apos;s Liquid Gold
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Argan oil comes from the kernels of the argan tree (<em>Argania spinosa</em>), a thorny,
              drought-resistant species that grows only in a roughly 8,000 km&sup2; swath of southwestern
              Morocco. The Souss-Massa, Essaouira, and Tiznit provinces form the heart of argan country,
              and in 1998 UNESCO designated the entire region as the Arganeraie Biosphere Reserve to protect
              both the trees and the traditional knowledge of the Amazigh communities who harvest them.
            </p>
            <p>
              For centuries, Amazigh women have extracted oil from argan kernels by hand. The process is
              extraordinarily labor-intensive: it takes approximately 30 kg of argan fruit, the harvest of
              six or seven mature trees, to produce a single liter of oil. This scarcity, combined with the
              tree&apos;s limited growing range, makes argan oil one of the most expensive edible oils in the
              world. A liter of pure, hand-pressed argan oil from a cooperative costs from 250 to 400 MAD
              depending on grade and certification. Seasonal pricing can shift these numbers.
            </p>
            <p>
              Today, argan oil serves two distinct markets. Cosmetic argan oil is cold-pressed from raw
              kernels for skin and hair care. Culinary argan oil is pressed from lightly roasted kernels for
              cooking and flavoring. Both are produced across the Souss region, and both have become iconic
              Moroccan exports and some of the best souvenirs a traveler can bring home.
            </p>
          </div>
        </div>
      </section>

      {/* ── Production Process ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FlaskConical className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Argan Oil Is Made
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From fruit to bottle: the painstaking process behind every drop.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Traditional Hand-Pressing (Ancestral Method)
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  The ancestral method has been practiced by Amazigh women for centuries and remains the
                  process you will see demonstrated at most cooperatives. Ripe argan fruits are collected
                  from the ground between June and September, then sun-dried for several weeks until the
                  fleshy outer pulp hardens and can be peeled away.
                </p>
                <p>
                  The most demanding step follows: cracking the extremely hard argan nut. Women sit in
                  circles, placing each nut on a flat stone and striking it with a second stone. The shell
                  is harder than a hazelnut and requires precise force -- too much pressure shatters the
                  delicate kernel inside. An experienced woman cracks roughly 2-3 kg of nuts per hour.
                </p>
                <p>
                  For culinary oil, the kernels are lightly roasted over a clay fire. For cosmetic oil, they
                  remain raw. The kernels are then ground in a stone rotary mill called an <em>azerg</em>,
                  producing a thick paste. Water is gradually added and the paste is kneaded by hand for 20-40
                  minutes until the oil separates out. The oil is decanted into bottles and the leftover
                  press cake is fed to livestock.
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-2">
                  <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                  <span>Approximately 12-20 hours of labor per liter</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Modern Mechanical Cold-Pressing
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Some larger cooperatives and commercial producers now use mechanical cold-press machines.
                  The process still begins with hand-cracking, because no machine has been developed that
                  can efficiently crack argan nuts without destroying the kernels inside.
                </p>
                <p>
                  After cracking, the kernels are fed into a stainless-steel mechanical press that applies
                  controlled pressure without heat (below 50 degrees Celsius). This method yields about
                  30-50% more oil from the same quantity of kernels compared to hand-pressing, and the
                  resulting oil has a longer shelf life because no water is introduced during extraction.
                </p>
                <p>
                  Purists argue that hand-pressed oil has a subtly superior flavor. Mechanical pressing
                  advocates point to better hygiene, consistency, and nutrient preservation. In practice,
                  blind taste tests show minimal difference. The choice is more about supporting the
                  traditional artisanal method than about final product quality. Both methods produce
                  excellent oil when the raw material is good.
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] pt-2">
                  <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                  <span>Approximately 4-6 hours of labor per liter (nut-cracking remains manual)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cosmetic vs Culinary Grades ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cosmetic vs Culinary Argan Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Two distinct products from the same tree. Knowing the difference is essential before buying.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting cooperative prices. Seasonal pricing and demand may cause variations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {arganGrades.map((grade) => {
              const GradeIcon = grade.icon;
              return (
                <div key={grade.grade} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GradeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {grade.grade}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Color:</strong> {grade.color}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Scent:</strong> {grade.scent}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Source:</strong> {grade.source}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Uses:</strong> {grade.uses}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Price:</strong> {grade.price}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-[var(--surface-muted)] text-xs text-[var(--text-muted)]">
                    <Info className="w-3 h-3 inline mr-1" />
                    {grade.tip}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── UNESCO Argan Biosphere Reserve ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Argan Forest: UNESCO Biosphere Reserve
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the world&apos;s most unique ecosystems, protecting Morocco&apos;s iconic tree.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Arganeraie Biosphere Reserve
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Designated by UNESCO in 1998, the Arganeraie Biosphere Reserve covers approximately
                  2.5 million hectares across the Souss-Massa, Essaouira, and Tiznit provinces. It is home
                  to an estimated 20 million argan trees, some of which are 200-400 years old.
                </p>
                <p>
                  The argan tree is a relic from the Tertiary period (65 million years ago), making it a
                  living fossil. Its deep root system reaches up to 30 meters underground, stabilizing soil
                  and preventing desertification. The canopy provides shade that protects understory crops
                  like barley and wheat. Each tree can live 150-200 years and begins producing fruit after
                  approximately five years of growth.
                </p>
                <p>
                  In 2014, UNESCO added a second layer of recognition by inscribing the traditional
                  knowledge and practices surrounding argan oil on its Intangible Cultural Heritage list.
                  This dual designation protects both the ecological system and the cultural heritage of the
                  Amazigh communities who depend on it.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Goats in Argan Trees: Fact vs Tourist Trap
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  The famous image of goats perched in argan trees is not a myth, but the reality has become
                  complicated. Goats genuinely eat argan fruit and leaves, and in rural areas you can still
                  see them naturally grazing in the lower branches. They spit out or excrete the argan nuts,
                  which some farmers then collect -- though goat-digested kernels are not used for quality oil.
                </p>
                <p>
                  Along the Essaouira-Marrakech road, some herders now place goats in trees specifically for
                  tourist photographs, charging from 10-20 MAD per photo. The goats may be stressed and the
                  practice can damage tree branches. If you want to see this phenomenon authentically, look
                  for goats in trees in rural areas away from the main highway, particularly around Taroudant
                  and Tiznit, where it still happens naturally without any staging.
                </p>
                <p>
                  The argan forest also supports other wildlife: Barbary macaques, jackals, wild boar, and
                  over 100 bird species. The ecosystem is a complete biome, not just a collection of trees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Women's Cooperatives & Fair Trade ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Women&apos;s Cooperatives &amp; Fair Trade
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The cooperative movement has transformed argan oil production from subsistence labor
            into a powerful engine of women&apos;s economic independence.
          </p>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
            <p>
              Before cooperatives formed in the late 1990s, Amazigh women produced argan oil at home and
              sold it to middlemen for a fraction of its market value. The cooperative model changed
              everything. Women now collectively own their production, set their own prices, and sell directly
              to visitors and international buyers. Profits fund literacy programs, healthcare access, and
              school supplies for members&apos; children.
            </p>
            <p>
              There are over 100 women&apos;s argan cooperatives in Morocco today, most concentrated along
              the corridor between Essaouira and Agadir. They range from small village operations with
              10-15 women to larger facilities with 100+ members, visitor centers, and international
              certifications. The best cooperatives hold Ecocert organic certification, IGP (Indication
              Geographique Protegee) designation, or fair-trade labels from organizations like FLO-CERT.
            </p>
            <p>
              A genuine cooperative visit is one of the most meaningful cultural experiences available in
              Morocco. You sit with the women as they work, watch the entire production chain from raw
              nut to finished oil, sample different grades, and buy directly. There is no entry fee and
              no obligation to purchase, though most visitors leave with at least one bottle.
            </p>
          </div>

          <div className="card-moroccan p-6 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <HandCoins className="w-4 h-4 inline mr-2 text-[var(--color-gold)]" />
              How Your Purchase Makes a Difference
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              When you buy a liter of argan oil at a cooperative for from 300 MAD, roughly 60-70% goes
              directly to the women who produced it. Another 15-20% covers raw materials and operating costs.
              The remainder funds community programs. Compare this to souk purchases, where the women who
              cracked the nuts may receive less than 10% of the retail price. The cooperative model is the
              single most impactful way to ensure your money reaches the women who do the work.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Cooperatives to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Argan Oil Cooperatives to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Verified, community-run cooperatives in the argan belt. Real names, real women, real oil.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting cooperative prices for 2026. Seasonal availability and demand may affect pricing.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {cooperatives.map((coop) => {
              const CoopIcon = coop.icon;
              return (
                <div key={coop.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CoopIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {coop.name}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                          <span>Est. {coop.founded}</span>
                          <span>{coop.members}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                        <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                        <span>{coop.location}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{coop.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-2 rounded bg-[var(--surface-muted)]">
                          <strong className="text-[var(--text-primary)]">Products:</strong>
                          <span className="text-[var(--text-muted)] ml-1">{coop.products}</span>
                        </div>
                        <div className="p-2 rounded bg-[var(--surface-muted)]">
                          <strong className="text-[var(--text-primary)]">Prices:</strong>
                          <span className="text-[var(--text-muted)] ml-1">{coop.prices}</span>
                        </div>
                        <div className="p-2 rounded bg-[var(--surface-muted)]">
                          <strong className="text-[var(--text-primary)]">Visit tip:</strong>
                          <span className="text-[var(--text-muted)] ml-1">{coop.visitTip}</span>
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

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Argan Oil in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your buying location determines both price and quality. Cooperatives offer the best value and authenticity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whereToBuy.map((place) => {
              const PlaceIcon = place.icon;
              return (
                <div key={place.location} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PlaceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {place.location}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-semibold text-[var(--color-accent)]">Quality: {place.quality}</span>
                        <span className="text-xs text-[var(--text-muted)]">{place.priceRange}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                      <span>{place.pros}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                      <span>{place.cons}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Spotting Fakes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Spot Fake Argan Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An estimated 50% of argan oil sold in Moroccan tourist areas is diluted or adulterated.
            Knowing these red flags protects your money and your skin.
          </p>

          <div className="space-y-4">
            {fakeRedFlags.map((item) => (
              <div key={item.flag} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.flag}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              The Quick Authenticity Test
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Place a small drop of cosmetic argan oil on the back of your hand. Rub it in gently. Real
              argan oil should absorb fully within 15-30 seconds, leaving skin soft but not greasy. If the
              oil sits on top of the skin, feels sticky, or leaves a visible shiny residue after one minute,
              it is likely diluted with cheaper sunflower or soybean oil. At cooperatives, ask the women to
              demonstrate this test -- they will gladly show you the difference.
            </p>
          </div>
        </div>
      </section>

      {/* ── Beauty Benefits & Cooking Uses ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Uses of Argan Oil: Beauty &amp; Kitchen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Beauty Benefits (Cosmetic Grade)
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Skin:</strong> Rich in vitamin E and fatty acids (oleic and linoleic), argan oil moisturizes without clogging pores. Used daily, it reduces fine lines, evens skin tone, and calms inflammation. Moroccan women apply it pure to face, hands, and nails.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Hair:</strong> A few drops worked into damp hair reduces frizz, adds shine, and repairs split ends. Amazigh women use it as a pre-wash treatment, massaging into the scalp and leaving it for 30 minutes before shampooing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Nails:</strong> Rubbing argan oil into cuticles strengthens brittle nails and softens hangnails. The high tocopherol content promotes healthy nail growth over time.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Stretch marks:</strong> Applied during pregnancy or after weight changes, the oil&apos;s elasticity-boosting properties help reduce the appearance of stretch marks with consistent use.</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Cooking Uses (Culinary Grade)
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Amlou:</strong> The iconic Amazigh spread combining roasted almonds, culinary argan oil, and honey, ground in a stone mortar. Served at breakfast with bread or msemen flatbread. A jar costs from 60 MAD at cooperatives.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Couscous drizzle:</strong> A tablespoon of culinary argan oil drizzled over Friday couscous adds a deep, nutty richness no other oil can match. This is how most Moroccans actually use argan oil day to day.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Salad dressing:</strong> Mixed with lemon juice, salt, and cumin, argan oil creates a traditional Moroccan vinaigrette for tomato-onion salads and grilled pepper dishes.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Tagine finishing:</strong> A drizzle over a finished tagine just before serving adds aroma and depth. Never use argan oil for frying -- heat destroys its nutritional profile and produces bitterness.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Argan Oil Souvenirs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gift className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Argan Oil Souvenirs to Bring Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Argan products make some of the finest souvenirs from Morocco. Here is what to buy and what to pay.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Cooperative prices shown. Medina and airport shops charge significantly more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {arganSouvenirs.map((item) => (
              <div key={item.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.name}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customs & Export Rules ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Taking Argan Oil Home: Customs &amp; Packing Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about getting your argan oil through airport security and customs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Carry-on vs Checked Luggage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Argan oil bottles over 100ml must go in checked luggage due to standard airport liquid
                restrictions. Small 60ml bottles can go in your carry-on liquids bag. Most cooperatives
                sell bottles sized specifically for travel.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Packing Glass Bottles
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Wrap each glass bottle in a plastic bag first (in case of leaks), then cushion with clothing
                or bubble wrap. Place bottles in the center of your suitcase surrounded by soft items.
                Some cooperatives offer padded carry bags for an extra from 20 MAD.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Moroccan Export Rules
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                There is no limit on exporting argan oil for personal use from Morocco. You do not need
                any special documentation for personal quantities. If you plan to resell commercially,
                you will need phytosanitary certificates and export documentation from the cooperative.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Destination Country Customs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The EU, US, UK, Canada, and Australia all allow personal imports of argan oil without
                restrictions. Culinary argan oil is classified as a food product. Declare it on your
                customs form if asked about food items. There are no duty charges on personal quantities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide Summary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Argan Oil Price Guide 2026
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you should expect to pay depending on where you buy. Prices per liter unless noted.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/5">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Product</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cooperative</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">City Pharmacy</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Souk / Medina</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="p-4 font-medium">Cosmetic oil (1L)</td>
                    <td className="p-4">From 300 MAD</td>
                    <td className="p-4">From 400 MAD</td>
                    <td className="p-4">From 200-600 MAD</td>
                  </tr>
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="p-4 font-medium">Culinary oil (1L)</td>
                    <td className="p-4">From 250 MAD</td>
                    <td className="p-4">From 350 MAD</td>
                    <td className="p-4">From 150-500 MAD</td>
                  </tr>
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="p-4 font-medium">Small bottle (60ml)</td>
                    <td className="p-4">From 80 MAD</td>
                    <td className="p-4">From 120 MAD</td>
                    <td className="p-4">From 50-200 MAD</td>
                  </tr>
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="p-4 font-medium">Amlou (250g jar)</td>
                    <td className="p-4">From 60 MAD</td>
                    <td className="p-4">From 80 MAD</td>
                    <td className="p-4">From 40-120 MAD</td>
                  </tr>
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="p-4 font-medium">Argan soap (bar)</td>
                    <td className="p-4">From 25 MAD</td>
                    <td className="p-4">From 40 MAD</td>
                    <td className="p-4">From 15-60 MAD</td>
                  </tr>
                  <tr className="border-t border-[var(--border-default)]">
                    <td className="p-4 font-medium">Prickly pear oil (30ml)</td>
                    <td className="p-4">From 250 MAD</td>
                    <td className="p-4">From 350 MAD</td>
                    <td className="p-4">From 150-500 MAD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[var(--surface-muted)] text-xs text-[var(--text-muted)]">
              <Info className="w-3 h-3 inline mr-1" />
              Souk prices vary wildly by quality. The lowest souk prices almost always indicate diluted or fake product.
              Seasonal pricing and demand shifts can change all prices.
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
            Answers to the most common questions travelers ask about argan oil in Morocco.
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
                title: 'Morocco Olive Oil Guide',
                description: 'The other liquid gold. Olive oil regions, tastings, harvest festivals, and buying tips across Morocco.',
                href: '/morocco-olive-oil',
                icon: Leaf,
              },
              {
                title: 'Morocco Spice Guide',
                description: 'Ras el hanout, saffron, cumin, and more. A complete guide to Moroccan spices and where to buy them.',
                href: '/morocco-spice-guide',
                icon: Sparkles,
              },
              {
                title: 'Morocco Markets & Souks',
                description: 'Navigate the medina markets like a local. Haggling tips, best souks by city, and what to buy.',
                href: '/morocco-markets-souks',
                icon: ShoppingBag,
              },
              {
                title: 'Essaouira City Guide',
                description: 'The coastal gateway to argan country. Medina walks, seafood, beaches, and day trips to cooperatives.',
                href: '/morocco-essaouira',
                icon: MapPin,
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Buy Authentic Argan Oil?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Visit the women&apos;s cooperatives of the Souss-Massa region for the freshest, fairest-priced
            argan oil in Morocco. Support the communities that produce it and bring home something genuinely
            worth carrying across an ocean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Essaouira
            </Link>
            <Link
              href="/morocco-markets-souks"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Markets &amp; Souks Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
