import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  ArrowRight,
  Lightbulb,
  GlassWater,
  Thermometer,
  Sun,
  MapPin,
  DollarSign,
  Store,
  Leaf,
  Recycle,
  Heart,
  Shield,
  Clock,
  Utensils,
  Snowflake,
  FlaskConical,
  BadgeCheck,
  CircleAlert,
  Compass,
  Backpack,
  Stethoscope,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Is Tap Water Safe in Morocco? 2026 Drinking Water Guide | CityGuide',
  description:
    'Complete guide to drinking water safety in Morocco. Is tap water safe? Best bottled water brands, purification options, ice safety, desert hydration tips, and sustainable water choices for travelers in 2026.',
  keywords: [
    'is tap water safe in Morocco',
    'drinking water Morocco',
    'Morocco water safety',
    'can you drink tap water in Morocco',
    'bottled water Morocco',
    'Sidi Ali water Morocco',
    'Morocco water purification',
    'ice safe Morocco',
    'brushing teeth Morocco water',
    'Morocco desert hydration',
    'Morocco water brands',
    'Sidi Harazem water',
    'Ain Saiss water',
    'Morocco sustainable water',
    'Morocco restaurant water safety',
    'Morocco travel health water',
    'water safety tips Morocco 2026',
    'filtered water bottle Morocco',
  ],
  openGraph: {
    title: 'Is Tap Water Safe in Morocco? 2026 Drinking Water Guide | CityGuide',
    description:
      'Everything you need to know about drinking water safety in Morocco. Tap water advice, best bottled brands, purification methods, ice safety, desert hydration, and eco-friendly choices.',
    url: `${BASE_URL}/morocco-water-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Crystal clear water being poured into a glass with Moroccan scenery in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Tap Water Safe in Morocco? Complete 2026 Guide',
    description:
      'Tap water safety, best bottled brands, purification options, ice in drinks, desert hydration tips, and sustainable water choices for Morocco travelers.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-water-guide` },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA (TravelGuide + FAQPage)
   =================================================================== */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-water-guide`,
  name: 'Is Tap Water Safe in Morocco? Complete 2026 Drinking Water Guide',
  description:
    'Comprehensive guide to water safety in Morocco covering tap water, bottled water brands, purification options, ice safety, desert hydration, and sustainable water choices for travelers.',
  url: `${BASE_URL}/morocco-water-guide`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-water-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Water Safety Guide', item: `${BASE_URL}/morocco-water-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is tap water safe to drink in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tap water in Morocco is generally not recommended for tourists. While it is chlorinated and treated in major cities like Casablanca and Rabat, the aging pipe infrastructure can introduce contaminants. Many locals drink tap water without issues, but visitors lack the adapted gut flora. Stick to bottled or purified water throughout your trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best bottled water brands in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The three most popular and widely available brands are Sidi Ali (still mineral water, from 5 MAD for 1.5L), Sidi Harazem (naturally sparkling mineral water from the thermal springs near Fes, from 5 MAD), and Ain Saiss (still mineral water, from 5 MAD). All three are safe, affordable, and available everywhere from supermarkets to corner shops.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use tap water to brush my teeth in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While briefly rinsing with tap water during brushing is unlikely to make you sick, cautious travelers use bottled water for brushing teeth, especially during the first few days. This is particularly advisable in smaller towns and rural areas where water treatment may be less consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ice safe in Moroccan restaurants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In upscale restaurants, hotels, and well-established tourist-oriented cafes, ice is typically made from purified water and is safe. At street stalls, small local restaurants, and juice vendors, ice may be made from tap water. When in doubt, order drinks without ice or ask if the ice is made from eau minerale (mineral water).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much water should I drink per day in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In moderate weather, aim for 2-3 liters per day. During summer months (June-September), especially in cities like Marrakech or in the Sahara Desert where temperatures can exceed 45 degrees Celsius, increase to 4-5 liters per day. In the desert, carry a minimum of 3 liters per person for any excursion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are fresh juices safe to drink in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Freshly squeezed orange juice prepared in front of you is generally safe, as no water is added. Be cautious with mixed fruit juices, smoothies, and milkshakes that may be diluted with tap water or use ice made from tap water. At street stalls, ask if they use eau minerale. The iconic orange juice stalls in Jemaa el-Fnaa, Marrakech are considered safe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best water purification option for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A filtered water bottle like the Grayl GeoPress or LifeStraw Go is the most practical option. These remove bacteria, protozoa, and some viruses from tap water in seconds. SteriPen UV purifiers work well too but require clear water. Water purification tablets (chlorine dioxide) are a lightweight backup. A reusable filtered bottle also reduces plastic waste significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan mint tea safe to drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Moroccan mint tea (atay) is one of the safest beverages you can order anywhere in Morocco. The water is boiled thoroughly during preparation, which kills harmful bacteria and parasites. Tea is served everywhere from street stalls to fine restaurants and is perfectly safe to enjoy.',
      },
    },
  ],
};

/* ===================================================================
   DATA: BOTTLED WATER BRANDS
   =================================================================== */

interface WaterBrand {
  name: string;
  type: string;
  source: string;
  price: string;
  notes: string;
  popular: boolean;
}

const waterBrands: WaterBrand[] = [
  {
    name: 'Sidi Ali',
    type: 'Still mineral water',
    source: 'Natural springs in the Middle Atlas Mountains',
    price: 'From 5 MAD (1.5L)',
    notes: 'The most popular and widely available bottled water in Morocco. Found in every shop, restaurant, and vending machine. Light, clean taste with low mineral content. The go-to choice for most travelers and locals alike.',
    popular: true,
  },
  {
    name: 'Sidi Harazem',
    type: 'Natural mineral water (still & sparkling)',
    source: 'Thermal springs near Fes, known since Roman times',
    price: 'From 5 MAD (1.5L)',
    notes: 'Famous for its naturally occurring minerals. The thermal source near Fes has been used for centuries. Slightly higher mineral content than Sidi Ali. The sparkling version (gazeuse) is popular with meals. Considered beneficial for digestion.',
    popular: true,
  },
  {
    name: 'Ain Saiss',
    type: 'Still mineral water',
    source: 'Springs in the Fes-Meknes region',
    price: 'From 5 MAD (1.5L)',
    notes: 'A clean, affordable option widely available across Morocco. Particularly popular in the Fes and Meknes region. Reliable quality and neutral taste. Owned by Danone, meeting international quality standards.',
    popular: true,
  },
  {
    name: 'Oulmes',
    type: 'Naturally sparkling mineral water',
    source: 'Volcanic springs in the town of Oulmes, Middle Atlas',
    price: 'From 8 MAD (1L)',
    notes: 'Morocco\'s premium sparkling water. Naturally carbonated from volcanic springs. Higher price point but distinctively refreshing. Often served at upscale restaurants. The glass bottle version is a dining staple.',
    popular: false,
  },
  {
    name: 'Ciel',
    type: 'Purified water',
    source: 'Purified and bottled by Coca-Cola Morocco',
    price: 'From 4 MAD (1.5L)',
    notes: 'The most affordable option. Purified rather than naturally sourced mineral water. Perfectly safe and widely available. A budget-friendly choice for high-consumption travelers.',
    popular: false,
  },
];

/* ===================================================================
   DATA: PURIFICATION OPTIONS
   =================================================================== */

interface PurificationOption {
  name: string;
  type: string;
  price: string;
  effectiveness: string;
  pros: string[];
  cons: string[];
}

const purificationOptions: PurificationOption[] = [
  {
    name: 'Grayl GeoPress',
    type: 'Filtered water bottle',
    price: 'From 800 MAD (one-time purchase)',
    effectiveness: 'Removes 99.99% of bacteria, protozoa, and viruses',
    pros: [
      'Purifies water in 8 seconds by pressing',
      'Removes viruses, bacteria, protozoa, chemicals, and heavy metals',
      'No batteries or UV light needed',
      'Holds 710ml per press cycle',
      'Replacement filters last 250 liters (from 250 MAD)',
    ],
    cons: [
      'Bulkier than a standard water bottle',
      'Requires hand strength to press',
      'Higher upfront cost',
    ],
  },
  {
    name: 'LifeStraw Go',
    type: 'Filtered water bottle',
    price: 'From 400 MAD',
    effectiveness: 'Removes 99.99% of bacteria and protozoa',
    pros: [
      'Lightweight and easy to use (just drink through the straw)',
      'Filter lasts up to 4,000 liters',
      'Affordable entry point for filtered bottles',
      'BPA-free and durable',
    ],
    cons: [
      'Does not remove viruses (adequate for Morocco\'s municipal tap water)',
      'Slow flow rate compared to Grayl',
      'Straw mechanism can be awkward',
    ],
  },
  {
    name: 'SteriPen UV Purifier',
    type: 'UV light purifier',
    price: 'From 600 MAD',
    effectiveness: 'Destroys 99.9% of bacteria, viruses, and protozoa',
    pros: [
      'Purifies 1 liter in 90 seconds',
      'Compact and lightweight (under 150g)',
      'Effective against viruses',
      'USB rechargeable models available',
    ],
    cons: [
      'Requires batteries or USB charging',
      'Does not work with cloudy or silty water',
      'Does not remove chemicals or heavy metals',
      'Fragile UV bulb can break if dropped',
    ],
  },
  {
    name: 'Chlorine Dioxide Tablets',
    type: 'Chemical purification',
    price: 'From 80 MAD (pack of 30)',
    effectiveness: 'Kills 99.9% of bacteria, viruses, and protozoa',
    pros: [
      'Ultralight and compact (perfect backup option)',
      'Very affordable per liter treated',
      'Works in any water including cloudy water',
      'Long shelf life (5+ years unopened)',
    ],
    cons: [
      'Takes 30 minutes to 4 hours for full effectiveness',
      'Slight chemical taste (less than iodine)',
      'Does not remove sediment or chemicals',
      'Not suitable for people with thyroid conditions',
    ],
  },
];

/* ===================================================================
   DATA: WHERE TO BUY WATER
   =================================================================== */

const whereToBuy = [
  {
    place: 'Supermarkets (Marjane, Carrefour, Acima)',
    icon: Store,
    price: 'From 5 MAD for 1.5L, from 15 MAD for 5L',
    tip: 'Best prices and widest selection. Buy in bulk (5L or 6-pack of 1.5L) for the best value. Available in every major city.',
  },
  {
    place: 'Corner Shops (Hanout)',
    icon: MapPin,
    price: 'From 5-7 MAD for 1.5L',
    tip: 'Found on nearly every street in Morocco. Slightly higher prices than supermarkets but incredibly convenient. Open late into the evening.',
  },
  {
    place: 'Street Vendors & Kiosks',
    icon: DollarSign,
    price: 'From 5-10 MAD for 0.5-1.5L',
    tip: 'Available near tourist sites, bus stations, and markets. Always check the seal is intact before purchasing. Prices may be higher at tourist hotspots.',
  },
  {
    place: 'Restaurants & Cafes',
    icon: Utensils,
    price: 'From 10-25 MAD for 1.5L',
    tip: 'Always request a sealed bottle opened at your table. Upscale restaurants may serve premium brands like Oulmes. Prices are marked up from 2-5x compared to shops.',
  },
  {
    place: 'Hotels & Riads',
    icon: Heart,
    price: 'From 10-30 MAD per bottle',
    tip: 'Many accommodations provide complimentary water in rooms. Ask at check-in. Minibar prices are typically the highest. Some riads offer filtered water refill stations.',
  },
  {
    place: 'Gas Stations',
    icon: MapPin,
    price: 'From 5-8 MAD for 1.5L',
    tip: 'Useful during road trips between cities. Most gas stations (Afriquia, Shell, Total) stock multiple water brands. Cold water available from refrigerators.',
  },
];

/* ===================================================================
   COMPONENT
   =================================================================== */

export default function MoroccoWaterGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Water Safety Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[420px] flex items-center">
        <img
          src="/images/hero-morocco.webp"
          alt="Scenic Moroccan landscape highlighting the importance of staying hydrated while traveling through Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-gold)]" />
              <span className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--color-gold)] uppercase tracking-wider">
                Travel Health &amp; Safety
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
              Is Tap Water Safe in Morocco?
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Everything you need to know about drinking water safety, the best bottled brands, purification
              options, and staying hydrated across Morocco&apos;s diverse climates &mdash; from coastal cities to
              the scorching Sahara Desert.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick Answer Box ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  The Quick Answer
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  <strong className="text-[var(--text-primary)]">Tap water in Morocco is not recommended for tourists.</strong> While
                  it is chlorinated and treated in major cities, the aging pipe infrastructure and different mineral composition can
                  cause stomach upset for visitors who have not built up tolerance. Many Moroccans drink tap water daily without
                  problems, but your digestive system is not adapted to the local water flora.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-[var(--text-secondary)]">Bottled water everywhere</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-[var(--text-secondary)]">Mint tea is always safe</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-[var(--text-secondary)]">Avoid tap water for drinking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tap Water Safety Detail ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <GlassWater className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Tap Water Safety in Morocco
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-[var(--color-accent)]" />
                What the Experts Say
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Morocco&apos;s national water utility (ONEE) treats and chlorinates tap water in major cities to WHO
                standards at the treatment plant. However, the journey from treatment plant to your tap involves
                aging pipes, rooftop storage tanks, and local infrastructure that can introduce bacteria and sediment.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The CDC and most travel health organizations recommend that travelers to Morocco drink only bottled
                or purified water. This is not because the water supply is contaminated at the source, but because
                the distribution system and your unfamiliarity with local water bacteria create risk.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                Variation by Location
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Major cities (Casablanca, Rabat, Marrakech):</strong> Tap water is treated and most locals drink it. Still not recommended for tourists.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Smaller towns and villages:</strong> Water treatment is less consistent. Always use bottled water.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Rural and mountain areas:</strong> Water may come from wells or untreated springs. Use purification methods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Upscale hotels and riads:</strong> Many use their own filtration systems. Ask at reception about their water supply.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottled Water Brands ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Bottled Water Brands
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bottled water is affordable and available everywhere in Morocco. These are the main brands you will encounter.
            Prices may vary by season and location.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterBrands.map((brand) => (
              <div key={brand.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {brand.name}
                  </h3>
                  {brand.popular && (
                    <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--color-accent)] font-semibold mb-1">{brand.type}</p>
                <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {brand.source}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{brand.notes}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]">
                  <DollarSign className="w-3.5 h-3.5" /> {brand.price}
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Seal check tip:</strong> Always verify the cap
                seal cracks when you open a bottle. Some dishonest vendors refill empty bottles with tap water and
                reseal them. If the cap spins freely or the seal is already broken, do not drink it and ask for a
                different bottle. This is rare but worth knowing about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Buy Water ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Water
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Water is one of the easiest things to find in Morocco. Here is where to get it and what to expect for pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whereToBuy.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.place} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.place}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">{item.price}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Water Purification Options ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FlaskConical className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Purification Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            If you want to avoid buying dozens of plastic bottles, these purification tools let you safely drink
            tap water while reducing your environmental footprint.
          </p>

          <div className="space-y-6">
            {purificationOptions.map((option) => (
              <div key={option.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {option.name}
                  </h3>
                  <span className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-full">
                    {option.type}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-semibold mb-1">{option.price}</p>
                <p className="text-xs text-[var(--text-muted)] mb-4 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> {option.effectiveness}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Pros
                    </h4>
                    <ul className="space-y-1.5">
                      {option.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <ArrowRight className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Cons
                    </h4>
                    <ul className="space-y-1.5">
                      {option.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <ArrowRight className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ice Safety ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Snowflake className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Ice in Drinks &mdash; Safe or Not?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Generally Safe
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Upscale restaurants and hotels</strong> use commercial ice made from purified water. These establishments have reputations to protect and invest in proper ice machines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">International chain cafes</strong> (Starbucks, Paul, etc.) use filtered water for ice. Safe to order iced drinks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Well-reviewed tourist restaurants</strong> in the medinas typically use safe ice. Check recent reviews for any red flags.</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Exercise Caution
              </h3>
              <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Street juice stalls</strong> may use ice made from tap water. If you see large blocks being chipped by hand, it is likely tap water ice. Ask before ordering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Small local restaurants</strong> with no visible ice machine may freeze tap water. Order drinks without ice (sans glace) to be safe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">When in doubt,</strong> simply say &quot;sans glace, s&apos;il vous plait&quot; (without ice, please). This is perfectly normal and understood everywhere.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Restaurant Water Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Utensils className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Water Safety at Restaurants
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-6">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Restaurants in Morocco range from Michelin-quality dining to humble street-side stalls. Here is how to
              navigate water and beverage safety at each level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-green-600" />
                  Always Safe
                </h3>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                    <span>Sealed bottled water opened at your table</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                    <span>Moroccan mint tea (boiled water)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                    <span>Coffee (noss noss, espresso, cafe au lait)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                    <span>Sealed soft drinks and canned beverages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                    <span>Freshly squeezed orange juice (no water added)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Ask First
                </h3>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                    <span>Mixed fruit juices and smoothies (may add water)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                    <span>Milkshakes and avocado drinks (panache)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                    <span>Ice in any beverage at small establishments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                    <span>Water served in carafes or pitchers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  Avoid
                </h3>
                <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    <span>Tap water served in a glass (eau du robinet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    <span>Water from decorative medina fountains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    <span>Pre-opened bottles with broken seals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    <span>Raw salads washed with unknown water sources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desert & Summer Hydration ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Sun className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Staying Hydrated in the Desert &amp; Summer Heat
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-6">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco&apos;s climate can be extreme. Marrakech regularly exceeds 45&deg;C in July and August. The Sahara Desert
              is even more punishing, with temperatures that can reach 50&deg;C during the day and drop to near freezing at night.
              Dehydration is a real and serious risk if you do not take precautions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Daily Water Intake Guide
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Spring/Autumn (mild weather):</strong> 2&ndash;3 liters per day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Summer in cities:</strong> 3&ndash;4 liters per day minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Sahara Desert excursions:</strong> 4&ndash;5 liters per day, carry minimum 3L per person</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Atlas Mountain treks:</strong> 3&ndash;4 liters per day (altitude increases fluid loss)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Hydration Tips
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Drink before you feel thirsty &mdash; thirst means you are already dehydrated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Add electrolyte powder or oral rehydration salts to your water (available at any pharmacy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Avoid excessive caffeine and alcohol, which increase dehydration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>Eat water-rich fruits: watermelon, oranges, and melon are abundant in Moroccan markets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-5 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <CircleAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Signs of dehydration to watch for:</strong> dark
                yellow urine, headache, dizziness, dry mouth, fatigue, and rapid heartbeat. If you experience
                confusion, inability to sweat, or very dark urine, seek shade immediately and drink water with
                electrolytes. In severe cases, call SAMU (dial 15) for emergency medical assistance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brushing Teeth ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Stethoscope className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Water for Brushing Teeth
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              This is one of the most common questions travelers ask, and the answer is nuanced. Briefly rinsing your
              mouth with tap water while brushing your teeth is <strong className="text-[var(--text-primary)]">unlikely to cause illness</strong> for
              most people. The amount of water you might accidentally swallow is very small.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              However, if you have a sensitive stomach, are visiting for the first time, or are in a rural area, using
              bottled water for brushing teeth provides extra peace of mind. Many experienced Morocco travelers use tap
              water for brushing after their first few days without issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-green-50">
                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Practical Approach
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Use bottled water for the first 2&ndash;3 days while your body adjusts. After that, most travelers switch
                  to tap water for brushing without problems. Keep a small bottle by the bathroom sink.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-amber-50">
                <h4 className="text-sm font-semibold text-amber-700 mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" /> Extra Caution
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  If you are immunocompromised, traveling with young children, or have a history of traveler&apos;s diarrhea,
                  use bottled water for brushing teeth throughout your entire trip. The small extra cost is worth it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sustainable Water Choices ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-green-600/10">
              <Recycle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Sustainable Water Choices
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-6">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco faces a significant plastic waste challenge, and tourism contributes heavily. A two-week trip
              can easily result in 20&ndash;30 plastic bottles per person. Here is how to reduce your plastic footprint
              while staying safely hydrated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Bring a Filtered Water Bottle</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      A Grayl GeoPress or LifeStraw Go pays for itself within the first week and eliminates the need
                      for single-use plastic. Fill from any tap and drink safely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Buy Large Bottles</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Instead of buying multiple 0.5L bottles, purchase 5L jugs (from 15 MAD at supermarkets) and
                      refill a reusable bottle. This reduces plastic waste by 80% compared to small bottles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Ask About Refill Stations</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Some eco-conscious riads and hotels have installed water filtration systems and offer free refills
                      to guests. Ask at check-in. This trend is growing, especially in Essaouira and Marrakech.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Drink More Tea</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Moroccan mint tea is served in reusable glasses with zero plastic waste. A wonderful way to hydrate and immerse yourself in culture. Offered everywhere for free or from 10 MAD.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Recycle When Possible</h4>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Many supermarkets and hotels have recycling bins. Crush bottles and dispose responsibly. Support eco-conscious accommodations that participate in plastic reduction programs.
                    </p>
                  </div>
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
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {[
              { q: 'Is tap water safe to drink in Morocco?', a: 'Tap water is not recommended for tourists. While chlorinated in major cities, aging pipes can introduce contaminants. Locals drink it fine because their digestive systems are adapted. Stick to bottled or purified water throughout your trip.' },
              { q: 'What are the best bottled water brands in Morocco?', a: 'Sidi Ali (still, from 5 MAD/1.5L), Sidi Harazem (mineral, from 5 MAD/1.5L), and Ain Saiss (still, from 5 MAD/1.5L) are the most popular. For sparkling, Oulmes is premium (from 8 MAD/1L). All are safe and available everywhere.' },
              { q: 'Can I use tap water to brush my teeth?', a: 'Briefly rinsing during brushing is unlikely to cause illness. Cautious travelers use bottled water for the first few days. This is especially advisable in smaller towns and rural areas.' },
              { q: 'Is ice safe in Moroccan restaurants?', a: 'In upscale restaurants and hotels, ice is made from purified water. At street stalls and small restaurants, it may be tap water. Say "sans glace, s\'il vous plait" (without ice) when in doubt.' },
              { q: 'How much water should I drink per day?', a: 'Aim for 2-3 liters in mild weather. In summer or the Sahara (45\u00B0C+), increase to 4-5 liters. Carry minimum 3L per person for desert excursions. Add electrolyte powder if sweating heavily.' },
              { q: 'Are fresh juices safe to drink?', a: 'Freshly squeezed orange juice (no water added) is safe. Be cautious with blended drinks and smoothies that may use tap water or tap-water ice. Ask if they use eau minerale before ordering.' },
              { q: 'What is the best purification option?', a: 'A filtered bottle like Grayl GeoPress (from 800 MAD) or LifeStraw Go (from 400 MAD) is most practical. They remove bacteria and protozoa instantly. Also reduces plastic waste dramatically.' },
              { q: 'Is Moroccan mint tea safe?', a: 'Yes, completely. The water is boiled thoroughly during preparation, killing bacteria and parasites. Tea is safe everywhere from street stalls to fine dining. It is also central to Moroccan hospitality.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Morocco Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/health" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Stethoscope className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Health &amp; Medical Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Vaccinations, pharmacies, hospitals, emergency numbers, and medical advice for Morocco.
              </p>
              <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <Link href="/morocco-safety-tips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Shield className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Safety Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Stay safe in Morocco with tips on scams, solo travel, neighborhoods, and emergency contacts.
              </p>
              <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <Link href="/morocco-travel-tips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Travel Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Essential tips for navigating Morocco like a pro, from transportation to cultural etiquette.
              </p>
              <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Info className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Your complete first-timer guide covering what to expect, where to go, and how to prepare.
              </p>
              <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
            <Link href="/packing" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Backpack className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Packing Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                What to pack for Morocco including clothing, toiletries, electronics, and seasonal essentials.
              </p>
              <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Morocco Trip with Confidence
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Now that you know how to stay safely hydrated, explore our comprehensive guides covering
            everything from health and safety to the best destinations across Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/health"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Stethoscope className="w-5 h-5" />
              Full Health Guide
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-[family-name:var(--font-heading)] font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              First Time in Morocco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
