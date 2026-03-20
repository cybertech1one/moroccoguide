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
  Crown,
  Grape,
  Globe,
  Mountain,
  Wine,
  Landmark,
  CalendarDays,
  Map,
  Leaf,
  ThumbsUp,
  ShoppingBag,
  HelpCircle,
  Navigation,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Wine Guide 2026 | Vineyards, Wine Regions & Tasting Experiences',
  description:
    'Explore Moroccan wine from Meknes to the Atlas foothills. Top wineries like Chateau Roslane, Domaine de la Zouina & Celliers de Meknes. Grape varieties, wine tours, tasting rooms, prices from 50 MAD, and where to buy wine in Morocco.',
  keywords: [
    'moroccan wine',
    'morocco wine regions',
    'morocco vineyards',
    'wine tasting morocco',
    'meknes wine region',
    'chateau roslane',
    'domaine de la zouina',
    'celliers de meknes',
    'val d argan wine',
    'volubilia wine',
    'moroccan red wine',
    'moroccan rose wine',
    'moroccan grey wine',
    'morocco winery tour',
    'best moroccan wines',
    'morocco wine prices',
    'benslimane wine region',
    'guerrouane appellation',
    'morocco grape varieties',
    'buy wine morocco',
    'wine bars morocco',
    'morocco alcohol guide',
  ],
  openGraph: {
    title: 'Morocco Wine Guide 2026 | Vineyards, Wine Regions & Tasting Experiences',
    description:
      'Discover Moroccan wine — from ancient Roman roots to modern award-winning estates. Top wineries, regions, grape varieties, tasting tours, and prices from 50 MAD.',
    url: `${BASE_URL}/morocco-wine-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan vineyard landscape with rolling green vines and Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wine Guide 2026 | Vineyards, Regions & Tasting',
    description:
      'Explore Moroccan wine from Meknes to the Atlas foothills. Top wineries, grape varieties, wine tours, and where to drink wine across Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wine-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wine-guide`,
  name: 'Morocco Wine Guide 2026 | Vineyards, Wine Regions & Tasting Experiences',
  description:
    'Complete guide to Moroccan wine — history, regions, top wineries, grape varieties, wine tours, tasting rooms, and practical tips for buying and drinking wine in Morocco.',
  url: `${BASE_URL}/morocco-wine-guide`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-wine-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Wine Guide', item: `${BASE_URL}/morocco-wine-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is wine legal in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco is a Muslim-majority country, but wine production and consumption are legal. Licensed restaurants, hotels, bars, and supermarkets sell wine throughout major cities. Non-Muslim tourists can purchase and drink wine freely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best Moroccan wine to try?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with Chateau Roslane Premier Cru, a red blend from the Meknes region that has won international awards. Domaine de la Zouina Volubilia Rouge is another excellent pick. For rosé, try the Domaine de la Zouina Rosé or Val d\'Argan Rosé from Essaouira.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does wine cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan wine starts from 50 MAD per bottle in supermarkets for entry-level labels. Mid-range bottles cost from 80 to 150 MAD. Premium estate wines run from 150 to 400 MAD. In restaurants, expect to pay from 150 to 600 MAD per bottle, with glasses from 40 to 100 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Moroccan wineries and do tastings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several estates welcome visitors — Chateau Roslane, Domaine de la Zouina, and Val d\'Argan all offer tours and tastings. Booking ahead is essential. Most tours cost from 150 to 500 MAD per person and include a guided walk through the vineyards, cellar visit, and a multi-wine tasting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What grape varieties grow in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco grows mostly French grape varieties. For reds: Cabernet Sauvignon, Merlot, Syrah, Grenache, and Carignan. For whites: Chardonnay, Sauvignon Blanc, Muscat, Clairette, and Vermentino. Some estates experiment with indigenous Moroccan varietals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy wine in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Licensed supermarkets like Carrefour, Marjane, and Acima stock Moroccan and imported wines. Dedicated wine shops (cavistes) exist in Casablanca, Marrakech, and Rabat. You can also buy direct from wineries. Wine is not sold during Ramadan in most locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Moroccan grey wine (vin gris)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vin gris is a Moroccan specialty — a very pale rosé made by pressing red grapes with minimal skin contact. The result is a copper-pink wine lighter than rosé. It pairs well with Moroccan tagines, grilled fish, and salads. Boulaouane and Celliers de Meknes produce popular versions.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WINE REGIONS
   ═══════════════════════════════════════════════════════════════ */

const wineRegions = [
  {
    name: 'Meknes / Fes (Saiss Plateau)',
    appellation: 'Guerrouane AOG, Beni M\'Tir AOG, Saiss',
    icon: Landmark,
    altitude: '400–600m',
    climate: 'Continental with hot summers, cold winters',
    soil: 'Limestone and clay over volcanic base',
    grapes: 'Cabernet Sauvignon, Merlot, Syrah, Grenache, Carignan',
    description:
      'The heart of Moroccan winemaking, producing over 60% of all Moroccan wine. The Saiss plateau sits between the Middle Atlas and Rif mountains, creating a continental climate ideal for full-bodied reds. The ancient Roman ruins of Volubilis confirm 2,000 years of viticulture here.',
    topProducers: ['Chateau Roslane', 'Domaine de la Zouina', 'Celliers de Meknes'],
  },
  {
    name: 'Benslimane / Casablanca',
    appellation: 'Zenata, Benslimane',
    icon: Globe,
    altitude: '100–300m',
    climate: 'Atlantic maritime, mild and humid',
    soil: 'Sandy and alluvial',
    grapes: 'Cinsault, Carignan, Grenache, Cabernet Sauvignon',
    description:
      'The coastal strip between Casablanca and Rabat benefits from Atlantic breezes that moderate summer heat. This region produces lighter reds and the famous Moroccan vin gris (grey wine). Boulaouane, one of Morocco\'s best-known wine brands, originates here.',
    topProducers: ['Les Celliers de Meknes (Boulaouane label)', 'S.E.B.'],
  },
  {
    name: 'Rabat / Kenitra (Gharb)',
    appellation: 'Gharb',
    icon: Map,
    altitude: '50–200m',
    climate: 'Atlantic with high rainfall',
    soil: 'Rich alluvial plains',
    grapes: 'Cinsault, Carignan, Grenache',
    description:
      'The Gharb plain receives more rainfall than any other Moroccan wine region. Historically used for bulk wine, several producers now craft quality bottlings. The fertile alluvial soil produces generous yields, keeping entry-level wine prices low.',
    topProducers: ['SODEA estates', 'Small cooperative wineries'],
  },
  {
    name: 'Berkane (Oriental)',
    appellation: 'Berkane AOG, Angad',
    icon: Mountain,
    altitude: '300–500m',
    climate: 'Semi-arid continental, hot summers',
    soil: 'Stony clay-limestone',
    grapes: 'Carignan, Grenache, Mourvèdre, Syrah',
    description:
      'Morocco\'s eastern wine region near the Algerian border produces bold, tannic reds. The hot, dry climate and stony soil stress the vines, concentrating flavors. Berkane wines show ripe dark fruit and spice — think southern Rhône with a North African edge.',
    topProducers: ['Domain de Berkane', 'Thalvin Berkane'],
  },
  {
    name: 'Atlas Foothills (Essaouira / Haouz)',
    appellation: 'Essaouira, Haouz',
    icon: Mountain,
    altitude: '200–500m',
    climate: 'Semi-arid with Atlantic influence near coast',
    soil: 'Schist, limestone, decomposed granite',
    grapes: 'Syrah, Grenache, Mourvèdre, Vermentino',
    description:
      'The newest and most experimental Moroccan wine frontier. Val d\'Argan near Essaouira pioneered winemaking here in the 1990s. The combination of altitude, ocean proximity, and unique soils produces wines with bright acidity and mineral character uncommon in North Africa.',
    topProducers: ['Val d\'Argan', 'Domaine du Val d\'Argan'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP WINERIES
   ═══════════════════════════════════════════════════════════════ */

const topWineries = [
  {
    rank: 1,
    name: 'Chateau Roslane (Thalvin)',
    region: 'Meknes',
    icon: Crown,
    founded: '1956 (estate), modern era from 1990s',
    price: 'From 120 MAD per bottle',
    tours: 'From 250 MAD per person (by appointment)',
    description:
      'Morocco\'s flagship premium estate. Chateau Roslane Premier Cru — a Cabernet Sauvignon-Merlot-Syrah blend aged 12 months in French oak — competes with mid-range Bordeaux at a fraction of the price. The estate sits on 2,000 hectares near the Roman ruins of Volubilis, with 70 hectares under vine.',
    wines: ['Premier Cru Rouge', 'Cuvée Spéciale Blanc', 'Rosé de Roslane', 'Roslane AOG Rouge'],
  },
  {
    rank: 2,
    name: 'Domaine de la Zouina',
    region: 'Meknes',
    icon: Award,
    founded: '1997',
    price: 'From 90 MAD per bottle',
    tours: 'From 200 MAD per person (Wed–Sat, by appointment)',
    description:
      'A Franco-Moroccan joint venture that brought modern viticulture techniques to the Meknes plateau. Their Volubilia label pays homage to the ancient Roman city nearby. The estate grows 12 grape varieties across 80 hectares and operates a full restaurant alongside the tasting room.',
    wines: ['Volubilia Rouge', 'Volubilia Blanc', 'Volubilia Rosé', 'Epicuria Rouge', 'Ait Souala'],
  },
  {
    rank: 3,
    name: 'Les Celliers de Meknes',
    region: 'Meknes',
    icon: Building,
    founded: '1964',
    price: 'From 50 MAD per bottle',
    tours: 'From 150 MAD per person (weekdays by appointment)',
    description:
      'Morocco\'s largest wine producer, responsible for roughly 85% of all Moroccan wine. Their portfolio spans from the ubiquitous Boulaouane vin gris (found in every supermarket) to the premium Chateau Roslane label. The winery complex outside Meknes includes massive cellars, a bottling line, and tasting facilities.',
    wines: ['Boulaouane Vin Gris', 'Médaillon Rouge', 'Beauvallon', 'Amazir', 'Ksar Bahia'],
  },
  {
    rank: 4,
    name: 'Val d\'Argan',
    region: 'Essaouira',
    icon: Leaf,
    founded: '1994',
    price: 'From 100 MAD per bottle',
    tours: 'From 300 MAD per person (Tue–Sat, reservation required)',
    description:
      'Founded by Charles Mélia, a Frenchman from a Languedoc winemaking family who planted vines on barren coastal land 25 km from Essaouira. The gamble paid off — Val d\'Argan wines show Atlantic-influenced freshness unlike anything else in Morocco. The estate also produces argan oil and olive oil.',
    wines: ['Val d\'Argan Rouge', 'Val d\'Argan Rosé', 'Val d\'Argan Blanc', 'Gazelle de Mogador'],
  },
  {
    rank: 5,
    name: 'Volubilia',
    region: 'Meknes',
    icon: Grape,
    founded: '2003',
    price: 'From 80 MAD per bottle',
    tours: 'From 200 MAD per person (by appointment)',
    description:
      'A label under Domaine de la Zouina, Volubilia has become one of Morocco\'s most recognizable quality brands. Their reds blend Syrah with Cabernet Sauvignon, producing approachable wines with dark fruit and soft tannins. Widely available in Moroccan restaurants and export markets.',
    wines: ['Volubilia Rouge Réserve', 'Volubilia Blanc', 'Volubilia Gris', 'Volubilia Rosé'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GRAPE VARIETIES
   ═══════════════════════════════════════════════════════════════ */

const grapeVarieties = {
  red: [
    { name: 'Cabernet Sauvignon', note: 'Morocco\'s premier red grape. Full-bodied, structured, ages well.' },
    { name: 'Merlot', note: 'Softer and rounder than Cabernet. Often blended for balance.' },
    { name: 'Syrah', note: 'Thrives in hot Meknes summers. Produces spicy, dark-fruited wines.' },
    { name: 'Grenache', note: 'Workhorse grape for rosés and lighter reds. Heat-resistant.' },
    { name: 'Carignan', note: 'Old-vine Carignan produces concentrated, rustic reds. Heritage variety.' },
    { name: 'Cinsault', note: 'Used for vin gris and light rosés. Low tannin, high drinkability.' },
  ],
  white: [
    { name: 'Chardonnay', note: 'Grown at altitude for acidity retention. Some oak-aged versions.' },
    { name: 'Sauvignon Blanc', note: 'Crisp and citrusy. Gaining popularity with Moroccan winemakers.' },
    { name: 'Muscat', note: 'Aromatic variety for sweet and dry whites. Ancient in the region.' },
    { name: 'Clairette', note: 'Traditional Mediterranean variety. Blended into white cuvées.' },
    { name: 'Vermentino', note: 'Planted by Val d\'Argan near Essaouira. Bright, mineral whites.' },
  ],
} as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWineGuidePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Moroccan vineyard rows stretching toward the Atlas Mountains at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white px-4 py-20">
          <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Wine Guide</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold mb-4 drop-shadow-lg">
            Moroccan Wine Guide
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-[family-name:var(--font-heading)] drop-shadow">
            Vineyards, Wine Regions &amp; Tasting Experiences Across Morocco
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Morocco: Africa&apos;s Second-Largest Wine Producer
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco produces roughly 35 million bottles of wine per year across 49,000 hectares of vineyards. That puts it second only to South Africa on the African continent. The country holds 14 designated appellations (AOG — Appellation d&apos;Origine Garantie), and its winemaking history stretches back over two millennia to Roman colonists who planted vines around Volubilis near modern-day Meknes.
            </p>
            <p>
              The modern Moroccan wine industry took shape during the French Protectorate (1912–1956), when French settlers planted extensive vineyards across the Meknes plateau, the Gharb plain, and the coastal Benslimane corridor. After independence, the government nationalized most estates through SODEA (Société de Développement Agricole). Quality declined for decades as production focused on bulk wine for export to France and the Soviet Union.
            </p>
            <p>
              The turning point arrived in the 1990s. Morocco opened its wine sector to private investment, and a new generation of Franco-Moroccan estates began planting noble varieties, importing temperature-controlled fermentation tanks, and aging wines in French and American oak. Chateau Roslane, Domaine de la Zouina, and Val d&apos;Argan led this renaissance. Today, Moroccan reds regularly earn medals at the Concours Mondial de Bruxelles and the Decanter World Wine Awards.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <Grape className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xl font-bold text-[var(--text-primary)]">49,000 ha</p>
              <p className="text-xs text-[var(--text-secondary)]">Under vine</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Wine className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xl font-bold text-[var(--text-primary)]">35M</p>
              <p className="text-xs text-[var(--text-secondary)]">Bottles/year</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Map className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xl font-bold text-[var(--text-primary)]">14</p>
              <p className="text-xs text-[var(--text-secondary)]">AOG appellations</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <CalendarDays className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-xl font-bold text-[var(--text-primary)]">2,000+</p>
              <p className="text-xs text-[var(--text-secondary)]">Years of winemaking</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            A Brief History of Moroccan Wine
          </h2>
          <div className="space-y-6">
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[var(--color-accent)]" />
                Antiquity (1st–5th Century AD)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Roman colonists cultivated vineyards around the ancient city of Volubilis (near Meknes). Archaeological excavations uncovered olive and wine presses. Mosaics depicting Bacchus confirm that wine held cultural significance in Roman Mauretania Tingitana.
              </p>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-gold)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--color-gold)]" />
                Islamic Period (7th–19th Century)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                After the Arab conquest, wine production contracted but never disappeared entirely. Grapes continued growing for table fruit and raisins. Jewish and Christian communities maintained small-scale winemaking traditions in cities like Fes and Meknes throughout the medieval period.
              </p>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                French Protectorate (1912–1956)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                French settlers (colons) planted tens of thousands of hectares — primarily Carignan, Cinsault, and Grenache — across the Meknes-Fes corridor and the Gharb plain. By the 1950s, Morocco had over 55,000 hectares under vine and exported massive volumes to France as blending wine to bolster thin Algerian and Midi reds.
              </p>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-gold)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />
                Post-Independence Decline (1956–1990s)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                After independence, the Moroccan government nationalized French vineyards under SODEA. Quantity trumped quality — bulk wine exports to the USSR and Eastern Europe dominated. Vineyards aged without replanting. By the 1980s, many estates produced oxidized, coarse reds sold in unlabeled bottles.
              </p>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--color-accent)]" />
                Modern Renaissance (1990s–Present)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Privatization opened the gates. Celliers de Meknes acquired state vineyards and invested in modern equipment. Domaine de la Zouina and Val d&apos;Argan launched as greenfield projects with French expertise. New plantings of Cabernet Sauvignon, Syrah, and Chardonnay replaced tired Carignan vines. Morocco now wins international medals and exports to over 30 countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wine Regions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Morocco&apos;s Five Wine Regions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the continental Meknes plateau to the Atlantic-cooled slopes near Essaouira, each region stamps its character onto the wine.
          </p>

          <div className="space-y-8">
            {wineRegions.map((region) => {
              const Icon = region.icon;
              return (
                <div key={region.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {region.name}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-semibold mb-3">
                        {region.appellation}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{region.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Altitude:</span>{' '}
                          <span className="text-[var(--text-secondary)]">{region.altitude}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Climate:</span>{' '}
                          <span className="text-[var(--text-secondary)]">{region.climate}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-[var(--text-primary)]">Soil:</span>{' '}
                          <span className="text-[var(--text-secondary)]">{region.soil}</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs">
                        <span className="font-semibold text-[var(--text-primary)]">Key Grapes:</span>{' '}
                        <span className="text-[var(--text-secondary)]">{region.grapes}</span>
                      </div>
                      <div className="mt-2 text-xs">
                        <span className="font-semibold text-[var(--text-primary)]">Top Producers:</span>{' '}
                        <span className="text-[var(--text-secondary)]">{region.topProducers.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Wineries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top 5 Moroccan Wineries to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These estates welcome visitors for tours, tastings, and in some cases full meals paired with their wines. Book ahead — walk-ins are rarely accepted.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topWineries.map((winery) => {
              const Icon = winery.icon;
              return (
                <div key={winery.name} className="card-moroccan p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-sm font-bold">
                      {winery.rank}
                    </span>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {winery.name}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {winery.region}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 flex-1">{winery.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-secondary)]">Founded: {winery.founded}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-secondary)]">{winery.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-secondary)]">Tours: {winery.tours}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Notable Wines:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {winery.wines.map((wine) => (
                        <span
                          key={wine}
                          className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full"
                        >
                          {wine}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Grape Varieties ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Grape Varieties Grown in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Red Grapes */}
            <div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Grape className="w-5 h-5 text-red-700" />
                Red Grapes
              </h3>
              <div className="space-y-3">
                {grapeVarieties.red.map((grape) => (
                  <div key={grape.name} className="card-moroccan p-4">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{grape.name}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{grape.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* White Grapes */}
            <div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Grape className="w-5 h-5 text-amber-600" />
                White Grapes
              </h3>
              <div className="space-y-3">
                {grapeVarieties.white.map((grape) => (
                  <div key={grape.name} className="card-moroccan p-4">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{grape.name}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{grape.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Drink Wine in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Where to Drink Wine in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-[var(--color-accent)]" />
                Hotel Bars &amp; Restaurants
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Nearly every 4- and 5-star hotel in Morocco has a licensed bar and restaurant serving wine. This is the easiest option for travelers. Expect to pay from 60 MAD per glass and from 200 MAD per bottle in hotel restaurants.
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                <strong>Top picks:</strong> La Mamounia (Marrakech), Royal Mansour (Marrakech), Palais Faraj (Fes), Hyatt Regency (Casablanca).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--color-accent)]" />
                Licensed Restaurants
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Many upscale Moroccan restaurants in the Ville Nouvelle (new city) districts hold liquor licenses. Look for the green &quot;Licence IV&quot; sign. In Marrakech, the Gueliz neighborhood has the highest concentration. Glass from 40 MAD; bottle from 150 MAD.
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                <strong>Top picks:</strong> Le Comptoir (Marrakech), Al Fassia (Marrakech), La Sqala (Casablanca), Dar Roumana (Fes).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Wine className="w-5 h-5 text-[var(--color-accent)]" />
                Wine Bars
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Dedicated wine bars are a growing phenomenon in Casablanca and Marrakech. Le Baromètre in Casablanca and Azar in Marrakech offer curated Moroccan wine lists. Expect a more relaxed atmosphere than hotel bars, with knowledgeable staff who can guide you through local labels.
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Glass from 50 MAD; tasting flights from 120 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
                Winery Tasting Rooms
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best way to taste Moroccan wine: at the source. Chateau Roslane, Domaine de la Zouina, and Val d&apos;Argan all have on-site tasting rooms. Some include food pairings — Domaine de la Zouina runs a full restaurant serving lunch paired with their wines.
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Tastings from 150 MAD per person; lunch pairings from 400 MAD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Buying Wine in Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Buying Wine in Morocco
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[var(--color-accent)]" />
                Supermarkets
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Carrefour, Marjane, and Acima supermarkets stock wine in a dedicated (often curtained-off) alcohol section. Selection varies — Marjane stores in Casablanca and Rabat carry the widest range. Prices start from 50 MAD for Boulaouane vin gris and from 80 MAD for mid-range reds. Imported French and Spanish wines from 120 MAD. Note: the alcohol section closes during Ramadan in most stores.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-[var(--color-accent)]" />
                Wine Shops (Cavistes)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Specialized wine shops operate in larger cities. In Casablanca, La Cave des Sommeliers and Nicolas carry premium Moroccan and imported bottles. Marrakech has several cavistes in Gueliz. These shops offer better curation than supermarkets and the staff can recommend specific producers and vintages. Expect prices from 80 MAD to 500+ MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Grape className="w-5 h-5 text-[var(--color-accent)]" />
                Direct from Wineries
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Buying at the cellar door often gets you the best prices on premium labels plus access to limited-release wines not available in stores. Chateau Roslane sells their Premier Cru for around 150 MAD at the estate — the same bottle costs from 250 MAD in restaurants. Bring a cooler bag if buying in summer.
              </p>
            </div>

            <div className="card-moroccan p-6 border-l-4 border-[var(--color-gold)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)]" />
                Ramadan &amp; Alcohol Restrictions
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                During Ramadan (roughly one month per year, shifting dates), many shops and supermarkets close their alcohol sections. Hotels and licensed tourist restaurants usually continue serving wine to non-Muslim guests. If visiting during Ramadan, stock up beforehand or rely on hotel bars. Drinking alcohol in public spaces is illegal year-round — always consume in licensed venues or private accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wine Tours ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Wine Tours &amp; Tasting Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From half-day vineyard visits to multi-day wine routes, Morocco offers several ways to explore its wine country.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                Half-Day Vineyard Visit (4–5 hours)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most popular format. A driver picks you up from Meknes or Fes, takes you to one or two estates (typically Chateau Roslane and Domaine de la Zouina), and returns you by early afternoon. Tours include a vineyard walk, cellar visit, and a guided tasting of 4–6 wines.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  From 500 MAD per person (group) / from 1,200 MAD (private)
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                Full-Day Meknes Wine &amp; History Tour (8–9 hours)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Combines a winery visit with the Roman ruins of Volubilis and the imperial city of Meknes. Start at the ruins (where Roman wine presses are visible), then drive to a nearby estate for tasting and lunch. Afternoon in the Meknes medina, visiting Bab Mansour and the granaries of Moulay Ismail.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  From 800 MAD per person (group) / from 2,000 MAD (private)
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[var(--color-accent)]" />
                Val d&apos;Argan Estate Tour (Essaouira, 3–4 hours)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A unique experience 25 km inland from Essaouira. Charles Mélia or his team guides you through the vineyards, explains the challenges of coastal winemaking, and pours 5–6 wines in the tasting room. The estate also produces argan oil and olive oil — you can taste all three. Seasonal pricing can change; contact the estate directly.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  From 300 MAD per person (reservation required)
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Map className="w-5 h-5 text-[var(--color-accent)]" />
                Multi-Day Moroccan Wine Route (3–5 days)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                For serious wine travelers: start in Casablanca (wine bars and cavistes), drive to Meknes (Roslane + Zouina + Volubilis), continue to Fes for dining, then head to Essaouira for Val d&apos;Argan. Some tour operators combine this with food experiences — cooking classes, market tours, and restaurant pairings.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  From 8,000 MAD per person all-inclusive (seasonal pricing can change)
                </span>
              </div>
            </div>
          </div>

          {/* Tips Box */}
          <div className="card-moroccan p-6 mt-8 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-[var(--color-accent)]" />
              Practical Tips for Wine Tours
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Book at least 3 days in advance. Most estates do not accept walk-ins.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Harvest season (August–October) is the most exciting time to visit, but also the busiest.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Designate a driver or hire a car with driver (from 800 MAD/day). Do not drink and drive.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Bring cash — some smaller estates do not accept credit cards in the tasting room.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Dress comfortably. Vineyard walks cross uneven terrain, especially near Volubilis.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Moroccan Wine Styles ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Moroccan Wine Styles You Should Know
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-red-900/10 flex items-center justify-center mx-auto mb-3">
                <Grape className="w-6 h-6 text-red-800" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Red (Rouge)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s strength. Full-bodied blends of Cabernet Sauvignon, Syrah, and Merlot dominate the premium segment. Expect ripe dark fruit, warm spice, and soft tannins. The best reds come from the Meknes plateau. Serve at 16–18°C with tagine, grilled lamb, or aged cheese.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-pink-200/30 flex items-center justify-center mx-auto mb-3">
                <Grape className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Vin Gris (Grey Wine)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s signature style. Paler than rosé, vin gris is made by pressing red grapes (usually Cinsault or Grenache) with almost no skin contact. Copper-pink with strawberry and melon notes. The Boulaouane vin gris is Morocco&apos;s best-selling wine. Serve chilled at 8–10°C with salads, seafood, or pastilla.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100/30 flex items-center justify-center mx-auto mb-3">
                <Grape className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                White (Blanc)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A small but growing category. Chardonnay and Sauvignon Blanc from Meknes, and Vermentino from Val d&apos;Argan near Essaouira, produce crisp whites with citrus and floral notes. White wines represent less than 15% of Moroccan production but quality has improved dramatically since 2010. Serve cold at 8–10°C with grilled fish and Moroccan salads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                Is wine legal in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco is a Muslim-majority country, but wine production and consumption are legal. Licensed restaurants, hotels, bars, and supermarkets sell wine throughout major cities. Non-Muslim tourists can purchase and drink wine freely. Public intoxication, however, is illegal and heavily frowned upon.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                What is the best Moroccan wine to try?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Start with Chateau Roslane Premier Cru, a red blend from the Meknes region that has won international awards. Domaine de la Zouina Volubilia Rouge is another excellent pick — approachable, fruit-forward, and widely available. For rosé, try the Domaine de la Zouina Rosé or Val d&apos;Argan Rosé from Essaouira. For a genuine Moroccan experience, order a bottle of Boulaouane vin gris — it pairs with everything.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                How much does wine cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan wine starts from 50 MAD per bottle in supermarkets for entry-level labels like Boulaouane. Mid-range bottles from Volubilia or Médaillon cost from 80 to 150 MAD. Premium estate wines (Chateau Roslane Premier Cru, Val d&apos;Argan) run from 150 to 400 MAD. In restaurants, expect to pay from 150 to 600 MAD per bottle. A glass of wine at a licensed restaurant costs from 40 to 100 MAD. Seasonal pricing can change, especially for limited releases.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                Can I visit Moroccan wineries and do tastings?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Several estates welcome visitors — Chateau Roslane, Domaine de la Zouina, and Val d&apos;Argan all offer tours and tastings. Booking ahead is essential; most do not accept walk-ins. Tours cost from 150 to 500 MAD per person and typically include a guided walk through the vineyards, a cellar visit, and a multi-wine tasting. Some estates also offer lunch pairings from 400 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                What grape varieties grow in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco grows mostly French grape varieties introduced during the Protectorate era. For reds: Cabernet Sauvignon, Merlot, Syrah, Grenache, Carignan, and Cinsault. For whites: Chardonnay, Sauvignon Blanc, Muscat, Clairette, and Vermentino. A few estates experiment with indigenous Moroccan varietals, but commercial bottlings remain dominated by international grapes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                Where can I buy wine in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Licensed supermarkets like Carrefour, Marjane, and Acima stock Moroccan and imported wines in a dedicated section. Specialized wine shops (cavistes) in Casablanca, Marrakech, and Rabat carry a wider selection. You can also buy direct from winery tasting rooms. Note: most alcohol sections close during Ramadan. In smaller towns and rural areas, wine may not be available at all.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--color-accent)]" />
                What is Moroccan grey wine (vin gris)?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Vin gris is a Moroccan specialty — a very pale rosé made by pressing red grapes (typically Cinsault or Grenache) with minimal skin contact. The result is a copper-pink wine lighter in color and body than standard rosé. It tastes of strawberry, white peach, and melon. Vin gris pairs well with Moroccan tagines, grilled fish, couscous, and salads. Boulaouane and Celliers de Meknes produce the most popular versions, from 50 MAD per bottle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-food-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tagines, couscous, pastilla, and street food — the complete guide to eating your way through Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/meknes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Meknes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The imperial city at the heart of Morocco&apos;s wine country — Bab Mansour, Moulay Ismail, and Volubilis.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Atlantic port city where Val d&apos;Argan vineyards meet ocean breezes, argan groves, and fresh seafood.
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
