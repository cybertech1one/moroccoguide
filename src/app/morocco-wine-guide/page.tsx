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
  MessageCircleQuestion,
  Utensils,
  Music,
  Navigation,
  Glasses,
  Sun,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-wine-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Wine Guide 2026 | Vineyards, Wine Regions & Tasting Tours',
  description:
    'Complete guide to Moroccan wine. Explore 5 wine regions from Meknes to the Atlas foothills, visit top wineries like Chateau Roslane and Domaine de la Zouina, learn about vin gris, discover wine bars in Casablanca and Marrakech, food pairings, alcohol laws, and prices from 50 MAD.',
  keywords: [
    'moroccan wine',
    'morocco wine regions',
    'morocco vineyards',
    'wine tasting morocco',
    'meknes wine region',
    'chateau roslane',
    'domaine de la zouina',
    'celliers de meknes',
    'volubilia wine morocco',
    'thalvin morocco',
    'moroccan red wine',
    'moroccan rose wine',
    'moroccan vin gris',
    'morocco winery tour',
    'best moroccan wines',
    'morocco alcohol laws',
    'wine bars marrakech',
    'wine bars casablanca',
    'moroccan wine grapes',
    'syrah morocco',
    'cinsault morocco',
    'wine food pairing morocco',
    'buying wine morocco',
    'morocco wine guide 2026',
    'guerrouane wine region',
    'berkane wine region',
  ],
  openGraph: {
    title: 'Morocco Wine Guide 2026 | Vineyards, Wine Regions & Tasting Tours',
    description:
      'From Roman-era roots to modern award-winning estates. Explore Moroccan wine regions, top wineries, grape varieties, wine bars, food pairings, and practical tips for buying and drinking wine in Morocco.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-wine.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan vineyard landscape near Meknes with rows of grapevines and Atlas Mountain foothills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wine Guide 2026 | Vineyards, Regions & Tasting Tours',
    description:
      'Moroccan wine from Meknes to the Atlas foothills. Top wineries, grape varieties, wine bars, alcohol laws, and prices from 50 MAD.',
    images: [`${BASE_URL}/images/hero-wine.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'Is wine legal in Morocco?',
    a: 'Yes. Morocco is a Muslim-majority country, but wine production and consumption are fully legal. Licensed restaurants, hotels, bars, and supermarkets sell wine throughout major cities. Non-Muslim tourists can purchase and drink wine freely. Public intoxication, however, is illegal and socially unacceptable.',
  },
  {
    q: 'What is the best Moroccan wine to try first?',
    a: 'Start with Chateau Roslane Premier Cru, an award-winning red blend from the Meknes region. Domaine de la Zouina Volubilia Rouge is another excellent pick — approachable, fruit-forward, and widely available. For rosé, try Val d\'Argan Rosé from Essaouira. For a genuine Moroccan experience, order Boulaouane vin gris, the country\'s most popular wine.',
  },
  {
    q: 'How much does wine cost in Morocco?',
    a: 'Moroccan wine starts from 50 MAD per bottle in supermarkets for entry-level labels like Boulaouane. Mid-range bottles from Volubilia or Médaillon cost from 80 to 150 MAD. Premium estate wines (Chateau Roslane Premier Cru, Val d\'Argan) run from 150 to 400 MAD. In restaurants, expect from 150 to 600 MAD per bottle. A glass of wine at a licensed restaurant costs from 40 to 100 MAD. Seasonal pricing can change for limited releases.',
  },
  {
    q: 'Can I visit Moroccan wineries for tastings?',
    a: 'Several estates welcome visitors. Chateau Roslane, Domaine de la Zouina, and Val d\'Argan all offer tours and tastings. Booking ahead is essential because most do not accept walk-ins. Tours cost from 150 to 500 MAD per person and include a vineyard walk, cellar visit, and multi-wine tasting. Some estates also offer lunch pairings from 400 MAD.',
  },
  {
    q: 'Where can I buy wine in Morocco?',
    a: 'Licensed supermarkets like Carrefour, Marjane, and Acima stock Moroccan and imported wines in a dedicated (often curtained-off) section. Specialized wine shops called cavistes in Casablanca, Marrakech, and Rabat carry a wider selection. You can also buy direct from winery tasting rooms. Note: most alcohol sections close during Ramadan. In smaller towns, wine may not be available at all.',
  },
  {
    q: 'What is Moroccan vin gris (grey wine)?',
    a: 'Vin gris is a Moroccan specialty — a very pale rosé made by pressing red grapes (typically Cinsault or Grenache) with minimal skin contact. The result is a copper-pink wine lighter than standard rosé, with strawberry, white peach, and melon notes. Boulaouane produces the most popular version, starting from 50 MAD per bottle. It pairs well with tagines, grilled fish, and salads.',
  },
  {
    q: 'Can I drink wine during Ramadan in Morocco?',
    a: 'During Ramadan, many shops and supermarkets close their alcohol sections. Hotels and licensed tourist-oriented restaurants usually continue serving wine to non-Muslim guests. If visiting during Ramadan, stock up before the holy month begins or rely on hotel bars and international restaurants. Drinking in public spaces is illegal year-round.',
  },
  {
    q: 'What grape varieties grow in Morocco?',
    a: 'Morocco grows mostly French grape varieties introduced during the Protectorate era. For reds: Cabernet Sauvignon, Merlot, Syrah, Grenache, Carignan, and Cinsault. For whites: Chardonnay, Sauvignon Blanc, Muscat, Clairette, and Vermentino. A few estates experiment with indigenous Moroccan varietals, but commercial bottlings remain dominated by international grapes.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Wine Guide 2026 — Vineyards, Wine Regions & Tasting Tours',
  description:
    'Complete guide to Moroccan wine covering 5 wine regions, top wineries, grape varieties, wine bars, food pairings, alcohol laws, and practical tips for travelers.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-wine.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Wine Guide', item: PAGE_URL },
    ],
  },
};

/* ================================================================
   JSON-LD: FAQPage
   ================================================================ */

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
   DATA: WINE REGIONS
   ================================================================ */

const wineRegions = [
  {
    name: 'Meknes / Guerrouane',
    icon: Crown,
    elevation: '500-700m',
    climate: 'Continental with hot dry summers and cold winters',
    soil: 'Limestone and clay over calcareous bedrock',
    grapes: 'Cabernet Sauvignon, Merlot, Syrah, Cinsault, Grenache',
    description:
      'The heartland of Moroccan winemaking. The Saiss Plain around Meknes and the Guerrouane AOG (Appellation d\'Origine Garantie) produce roughly 60% of Morocco\'s wine. High-altitude vineyards benefit from cool nights that preserve acidity in the grapes. Chateau Roslane and Domaine de la Zouina are both located here.',
    production: '~60% of national output',
  },
  {
    name: 'Berkane / Oriental',
    icon: Sun,
    elevation: '200-400m',
    climate: 'Mediterranean with Saharan influence',
    soil: 'Sandy-clay with good drainage',
    grapes: 'Cinsault, Carignan, Grenache, Muscat',
    description:
      'The eastern region near the Algerian border has a long viticultural history. Hot summers produce concentrated, high-alcohol reds and robust rosés. Berkane also grows excellent table grapes and Muscat for dessert wines. Les Celliers de Meknes sources considerable fruit from this area.',
    production: '~15% of national output',
  },
  {
    name: 'Gharb / Northern Plains',
    icon: Leaf,
    elevation: '50-200m',
    climate: 'Oceanic influence, mild and humid',
    soil: 'Alluvial plains, rich and fertile',
    grapes: 'Cinsault, Carignan, Grenache',
    description:
      'The flat, fertile Gharb plain between Rabat and Kenitra produces bulk wine grapes for everyday table wine. High yields and moderate quality characterize this region. Most production feeds the mass-market Boulaouane and Sidi Brahim labels rather than premium bottlings.',
    production: '~12% of national output',
  },
  {
    name: 'Zenata / Casablanca Hinterland',
    icon: Building,
    elevation: '100-300m',
    climate: 'Atlantic maritime, foggy mornings',
    soil: 'Chalky clay with limestone',
    grapes: 'Cabernet Sauvignon, Merlot, Cinsault',
    description:
      'The area around Zenata and Benslimane, east of Casablanca, benefits from Atlantic fog and moisture. Thalvin operates major vinification facilities here. The maritime climate produces softer, more elegant reds than the continental Meknes region.',
    production: '~8% of national output',
  },
  {
    name: 'Beni M\'tir / Atlas Foothills',
    icon: Mountain,
    elevation: '700-1,000m',
    climate: 'Cool continental, significant diurnal temperature swing',
    soil: 'Volcanic and schist',
    grapes: 'Syrah, Cabernet Sauvignon, Tempranillo',
    description:
      'The highest-altitude vineyards in Morocco sit in the Middle Atlas foothills south of Fes. Cool nights and well-drained volcanic soils produce structured reds with firm tannins and good aging potential. This small region is attracting renewed investment from producers seeking premium terroir.',
    production: '~5% of national output',
  },
];

/* ================================================================
   DATA: TOP WINERIES
   ================================================================ */

const topWineries = [
  {
    name: 'Chateau Roslane (Les Celliers de Meknes)',
    region: 'Meknes',
    icon: Award,
    founded: '1999 (estate); Celliers de Meknes since 1964',
    flagship: 'Chateau Roslane Premier Cru (red blend)',
    tours: 'From 200 MAD with tasting; lunch pairing from 500 MAD',
    description:
      'Morocco\'s most celebrated winery. The Premier Cru — a blend of Cabernet Sauvignon, Merlot, and Syrah — has collected medals at Decanter, Brussels, and Mundus Vini. The modern estate sits on 2,000 hectares near the Roman ruins of Volubilis. Tours include vineyard walks, barrel cellar visits, and a five-wine tasting on a terrace overlooking the vines.',
    booking: 'Book at least 3 days ahead via their website or by phone.',
  },
  {
    name: 'Domaine de la Zouina',
    region: 'Meknes',
    icon: Grape,
    founded: '2001',
    flagship: 'Volubilia Rouge, Volubilia Rosé, Epicuria',
    tours: 'From 150 MAD for a guided tasting; full visit with lunch from 450 MAD',
    description:
      'A French-Moroccan joint venture producing some of Morocco\'s most approachable wines. The 700-hectare estate near El Hajeb grows Syrah, Cabernet, Grenache, and Chardonnay at 600m elevation. Their Volubilia label is the entry point, while Epicuria targets the premium market. The on-site restaurant pairs wines with Moroccan-Mediterranean fusion dishes.',
    booking: 'Reservations required. Email or book through the website.',
  },
  {
    name: 'Thalvin / Domaine de la Ferme Rouge',
    region: 'Zenata / Benslimane',
    icon: Star,
    founded: '1923 (Thalvin); Ferme Rouge launched 2010',
    flagship: 'Terre Rouge, La Ferme Rouge Syrah, Ait Souala',
    tours: 'From 200 MAD by appointment only',
    description:
      'One of Morocco\'s oldest producers. Thalvin operates one of the largest vinification plants in the country and distributes brands including Beauvallon and Ksar. Their premium project, Domaine de la Ferme Rouge, near Benslimane, produces single-varietal Syrah and blends that rival anything from Meknes. Limited-production wines sell out quickly.',
    booking: 'Contact via Thalvin\'s Casablanca office. Very limited visitor availability.',
  },
  {
    name: 'Val d\'Argan',
    region: 'Essaouira',
    icon: Globe,
    founded: '1994',
    flagship: 'Val d\'Argan Rouge, Rosé, Le Comptoir du Vin',
    tours: 'From 200 MAD with vineyard walk and tasting; lunch from 400 MAD',
    description:
      'Morocco\'s only Atlantic coastal winery. French winemaker Charles Melia planted vines 30 km from Essaouira, where argan trees and Atlantic breezes create a unique terroir. The wines — particularly the rosé — carry saline minerality and fresh acidity that pair beautifully with the local seafood. The estate has an excellent on-site restaurant.',
    booking: 'Book through their website. Closed Sundays.',
  },
  {
    name: 'Volubilia (Diana Holding)',
    region: 'Meknes',
    icon: Landmark,
    founded: '2003',
    flagship: 'Volubilia Prestige, Ait Souala, CB Signature',
    tours: 'From 180 MAD; limited availability',
    description:
      'Named after the nearby Roman city of Volubilis, this estate focuses on modern winemaking techniques with temperature-controlled stainless steel fermentation and French oak aging. Their Prestige range blends Cabernet Sauvignon with Syrah for a rich, structured red. Production is smaller than the big Meknes houses, so bottles are harder to find outside Morocco.',
    booking: 'Call ahead. Tours arranged for small groups only.',
  },
];

/* ================================================================
   DATA: GRAPE VARIETIES
   ================================================================ */

const grapeVarieties = [
  {
    name: 'Syrah',
    type: 'Red',
    color: 'text-red-700',
    bg: 'bg-red-100/30',
    description:
      'Morocco\'s star red grape. Thrives in the heat of the Meknes plateau and produces dark, peppery wines with blackberry and violet notes. Used as a single varietal and as the backbone of top blends like Chateau Roslane Premier Cru.',
  },
  {
    name: 'Cabernet Sauvignon',
    type: 'Red',
    color: 'text-red-800',
    bg: 'bg-red-100/30',
    description:
      'Widely planted across Meknes and Zenata. Moroccan Cabernets tend to be ripe and full-bodied with cassis, cedar, and warm spice. Often blended with Merlot and Syrah. Tannins soften quickly in the hot climate, making young wines more approachable than their European counterparts.',
  },
  {
    name: 'Cinsault',
    type: 'Red / Rosé / Vin Gris',
    color: 'text-pink-600',
    bg: 'bg-pink-100/30',
    description:
      'The traditional workhorse grape of Moroccan viticulture. Drought-resistant and prolific, Cinsault is the primary grape for vin gris — Morocco\'s signature copper-pink wine. Also used in bulk rosés and as a blending partner in everyday reds. Light-bodied with strawberry and melon flavors.',
  },
  {
    name: 'Grenache',
    type: 'Red / Rosé',
    color: 'text-rose-600',
    bg: 'bg-rose-100/30',
    description:
      'Brought to Morocco from southern France and Spain. Grenache loves heat and poor soils, making it well suited to the Berkane and Meknes regions. Produces generous, fruity reds with raspberry and dried herb character. Frequently blended with Syrah and Carignan.',
  },
  {
    name: 'Chardonnay',
    type: 'White',
    color: 'text-amber-600',
    bg: 'bg-amber-100/30',
    description:
      'The leading white grape in Morocco, planted mostly around Meknes. Moroccan Chardonnays are typically unoaked or lightly oaked, citrus-driven, and meant to be drunk young. Domaine de la Zouina produces one of the more complex examples with partial barrel fermentation.',
  },
  {
    name: 'Vermentino',
    type: 'White',
    color: 'text-amber-500',
    bg: 'bg-amber-100/30',
    description:
      'A Mediterranean grape that Val d\'Argan has pioneered near Essaouira. The Atlantic influence gives the wine crisp acidity, citrus peel, and a saline finish. Still rare in Morocco but gaining attention as white wine demand grows among younger urban consumers.',
  },
];

/* ================================================================
   DATA: WINE BARS & VENUES
   ================================================================ */

const wineBars = [
  {
    city: 'Casablanca',
    venues: [
      { name: 'Le Petit Rocher', desc: 'Seafront wine bar with an extensive Moroccan wine list. Glass from 50 MAD.' },
      { name: 'La Sqala', desc: 'Atmospheric restaurant inside an 18th-century bastion. Good Moroccan wine selection.' },
      { name: 'Sky 28 (Hotel Kenzi Tower)', desc: 'Rooftop bar with panoramic views and premium Moroccan wines by the glass.' },
    ],
  },
  {
    city: 'Marrakech',
    venues: [
      { name: 'Barometre', desc: 'Popular wine bar in Gueliz with a strong Moroccan and French list. Glass from 60 MAD.' },
      { name: 'Le Comptoir Darna', desc: 'Dinner and live entertainment with a curated selection of Moroccan labels.' },
      { name: 'Grand Cafe de la Poste', desc: 'Colonial-era brasserie serving wine in a relaxed garden terrace setting.' },
    ],
  },
  {
    city: 'Rabat',
    venues: [
      { name: 'Le Dhow', desc: 'A converted wooden boat on the Bou Regreg river serving Moroccan wines. Glass from 50 MAD.' },
      { name: 'Dar Zaki', desc: 'Upscale restaurant with a strong Meknes-focused wine list.' },
    ],
  },
  {
    city: 'Essaouira',
    venues: [
      { name: 'Le Comptoir du Vin (Val d\'Argan)', desc: 'The winery\'s own wine bar in the medina. Tasting flights from 100 MAD.' },
      { name: 'Taros', desc: 'Rooftop terrace overlooking the port. Serves Val d\'Argan and other Moroccan wines.' },
    ],
  },
];

/* ================================================================
   DATA: FOOD PAIRINGS
   ================================================================ */

const foodPairings = [
  {
    wine: 'Vin Gris (Boulaouane, Celliers de Meknes)',
    dishes: 'Grilled sardines, Moroccan salads, pastilla au poulet, couscous with seven vegetables, light tagines',
    temperature: '8-10 C',
    icon: Utensils,
  },
  {
    wine: 'Rosé (Val d\'Argan, Zouina)',
    dishes: 'Seafood bastilla, grilled prawns, zaalouk, briouats, harira soup, chicken tagine with olives',
    temperature: '10-12 C',
    icon: Utensils,
  },
  {
    wine: 'Full-Bodied Red (Chateau Roslane, Epicuria)',
    dishes: 'Lamb tagine with prunes, tangia, mechoui, grilled merguez, aged goat cheese, trid',
    temperature: '16-18 C',
    icon: Utensils,
  },
  {
    wine: 'Medium Red (Volubilia Rouge, Terre Rouge)',
    dishes: 'Chicken tagine with preserved lemons, kefta tagine, Moroccan beef brochettes, rfissa',
    temperature: '14-16 C',
    icon: Utensils,
  },
  {
    wine: 'White (Zouina Chardonnay, Val d\'Argan Blanc)',
    dishes: 'Grilled fish, oysters from Dakhla, shrimp tagine, fresh goat cheese, fruit-based desserts',
    temperature: '8-10 C',
    icon: Utensils,
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoWineGuidePage() {
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

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-wine.webp"
          alt="Moroccan vineyard landscape near Meknes with rows of grapevines stretching toward the Atlas foothills"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Wine Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Wine Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-heading)]">
            Five wine regions, world-class estates, and centuries of winemaking tradition. Everything you need to explore Moroccan wine — from vineyard visits and cellar tastings to finding the right bottle for your tagine.
          </p>
        </div>
      </section>

      {/* ── Wine History ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Brief History of Moroccan Wine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            From Roman amphoras to French colonial estates to a modern renaissance.
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-[var(--text-secondary)]">
            <p>
              Winemaking in Morocco predates Islam by over a thousand years. The Romans planted vineyards around the city of Volubilis — their westernmost outpost — in the 2nd century AD. Archaeological finds at the site include grape presses and amphorae fragments, confirming that the Meknes-Fes corridor has been wine country for nearly two millennia.
            </p>
            <p>
              After the Arab conquests, viticulture continued on a reduced scale. Grapes were grown for table fruit and raisins, but winemaking persisted in pockets, particularly among Jewish and Christian communities. The tradition never fully disappeared.
            </p>
            <p>
              The French Protectorate (1912-1956) transformed Moroccan wine into an industry. French settlers planted Cinsault, Carignan, and Grenache across the Meknes plateau, the Gharb plain, and the Berkane region near Algeria. By 1956, Morocco had over 55,000 hectares under vine — more than many European countries. Most of this production was bulk wine shipped to France for blending.
            </p>
            <p>
              Independence brought upheaval. The Moroccan government nationalized many estates, and vineyard acreage dropped by more than half. Quality suffered for decades. The turnaround began in the late 1990s when private investors — both Moroccan and foreign — started planting premium grape varieties, importing modern equipment, and hiring trained enologists. Estates like Chateau Roslane, Domaine de la Zouina, and Val d&apos;Argan now produce wines that win medals at international competitions.
            </p>
            <p>
              Today Morocco has roughly 30,000 hectares of vineyards and produces around 35 million bottles annually. The country holds two AOG designations (Guerrouane and Berkane), modeled on the French appellation system. While most Moroccan wine is consumed domestically, exports to Europe are growing, and several labels are available in specialty wine shops from London to New York.
            </p>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Wine Regions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Five Wine Regions of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s winemaking geography spans from Atlantic coastal vineyards to high-altitude Atlas foothill estates.
          </p>

          <div className="space-y-8">
            {wineRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.name}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-medium">{region.production}</p>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{region.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">Elevation:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{region.elevation}</span>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">Climate:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{region.climate}</span>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">Key Grapes:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{region.grapes}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Wineries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Wineries to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s best estates welcome visitors for tours, tastings, and vineyard lunches. Advance booking is required at all of them.
          </p>

          <div className="space-y-8">
            {topWineries.map((winery) => {
              const WineryIcon = winery.icon;
              return (
                <div key={winery.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <WineryIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {winery.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        <span className="text-sm text-[var(--color-accent)]">{winery.region}</span>
                        <span className="text-sm text-[var(--text-secondary)]">| Founded {winery.founded}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{winery.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">Flagship:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{winery.flagship}</span>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">Tours:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{winery.tours}</span>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">Booking:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{winery.booking}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Grape Varieties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Grape className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Grape Varieties of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            French grapes dominate, but the North African terroir gives them a distinct character — riper fruit, softer tannins, and warm spice notes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grapeVarieties.map((grape) => (
              <div key={grape.name} className="card-moroccan p-6">
                <div className={`w-12 h-12 rounded-full ${grape.bg} flex items-center justify-center mb-4`}>
                  <Grape className={`w-6 h-6 ${grape.color}`} />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {grape.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-medium mb-3">{grape.type}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{grape.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wine Styles ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Glasses className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Wine Styles
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four distinct styles make up the Moroccan wine landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-red-800 inline-block" />
                Red (Rouge)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s strength. Full-bodied blends of Cabernet Sauvignon, Syrah, and Merlot dominate the premium segment. Expect ripe dark fruit, warm spice, and soft tannins. The best reds come from the Meknes plateau where altitude keeps nights cool. Serve at 16-18 C with tagine, grilled lamb, or aged cheese.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-pink-400 inline-block" />
                Vin Gris (Grey Wine)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s signature style. Paler than rosé, vin gris is made by pressing red grapes (usually Cinsault or Grenache) with almost no skin contact. The result is copper-pink with strawberry and melon notes. Boulaouane vin gris is Morocco&apos;s best-selling wine. Serve chilled at 8-10 C with salads, seafood, or pastilla.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-rose-400 inline-block" />
                Rosé
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Deeper in color and flavor than vin gris. Moroccan rosés — often from Grenache and Syrah — show red berry fruit, a dry finish, and enough body to stand up to spiced dishes. Val d&apos;Argan and Domaine de la Zouina produce the standout bottlings. Serve at 10-12 C with chicken tagine, grilled vegetables, or briouats.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-300 inline-block" />
                White (Blanc)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A small but growing category representing less than 15% of production. Chardonnay and Sauvignon Blanc from Meknes, and Vermentino from Val d&apos;Argan near Essaouira, produce crisp whites with citrus and floral notes. Quality has improved dramatically since 2010. Serve cold at 8-10 C with grilled fish and Moroccan salads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Pairings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pairing Wine with Moroccan Food
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan cuisine — with its balance of sweet, savory, and spice — pairs remarkably well with local wines. The key is matching weight and intensity.
          </p>

          <div className="space-y-4">
            {foodPairings.map((pairing) => (
              <div key={pairing.wine} className="card-moroccan p-5 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                      {pairing.wine}
                    </h3>
                    <p className="text-xs text-[var(--color-accent)] mt-1">Serve at {pairing.temperature}</p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-sm text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Pair with:</span> {pairing.dishes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-8 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Pairing Tip</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Moroccan dishes with dried fruit (tagine with prunes, pastilla) work best with medium-bodied reds that have some residual sweetness perception. Heavily spiced dishes (ras el hanout, harissa) can overwhelm delicate whites — reach for a vin gris or rosé instead. When in doubt, Boulaouane vin gris pairs with nearly everything on a Moroccan table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wine Bars by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wine Bars &amp; Venues by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to drink Moroccan wine in the country&apos;s major cities. All venues are licensed and serve alcohol legally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wineBars.map((cityData) => (
              <div key={cityData.city} className="card-moroccan p-6">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  {cityData.city}
                </h3>
                <div className="space-y-3">
                  {cityData.venues.map((venue) => (
                    <div key={venue.name} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <p className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm">
                        {venue.name}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{venue.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying Wine in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Wine in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical guide to finding, purchasing, and taking home Moroccan wine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-[var(--color-accent)]" />
                Supermarkets
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Carrefour, Marjane, and Acima supermarkets stock wine in a dedicated (often curtained-off) alcohol section. Selection varies by location — Marjane stores in Casablanca and Rabat carry the widest range. Prices start from 50 MAD for Boulaouane vin gris and from 80 MAD for mid-range reds. Imported French and Spanish wines from 120 MAD. The alcohol section typically closes during Ramadan.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--color-accent)]" />
                Specialist Wine Shops (Cavistes)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Casablanca, Marrakech, and Rabat each have a handful of dedicated wine merchants. These cavistes stock the full range of premium Moroccan labels alongside imported bottles. Staff can recommend wines and help assemble mixed cases. Expect to pay from 80 to 400 MAD for Moroccan bottles and from 150 MAD for imports. Some offer delivery within the city.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Grape className="w-5 h-5 text-[var(--color-accent)]" />
                Winery Tasting Rooms
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Buying direct from the winery is the best way to access limited-production wines and older vintages. Chateau Roslane, Domaine de la Zouina, and Val d&apos;Argan all sell bottles from their tasting rooms, often at cellar-door prices slightly below retail. Ask about mixed cases and shipping if you want to take bottles home.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
                Taking Wine Home
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco allows export of wine in personal luggage. Check your airline&apos;s liquid rules for checked baggage — most allow wine if properly wrapped. Duty-free shops at Casablanca and Marrakech airports stock a limited selection. Be aware of your home country&apos;s import limits: the EU allows 4 liters of still wine, the US allows 1 liter duty-free, and the UK allows &pound;390 worth of goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alcohol Laws & Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alcohol Laws &amp; Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has a nuanced relationship with alcohol. These rules will keep you informed and respectful.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">Wine is legal</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco produces, sells, and exports wine legally. It is one of the few Muslim-majority countries with an active domestic wine industry. Tourists can buy and drink wine without restriction at licensed venues.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">No public drinking</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Consuming alcohol in public spaces — streets, parks, beaches — is illegal. Drink only in licensed restaurants, bars, hotels, or private residences. Public intoxication can result in fines or detention.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-3">
              <CalendarDays className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">Ramadan restrictions</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  During Ramadan, many shops and supermarkets close their alcohol sections. Hotels and licensed tourist restaurants usually continue serving wine to non-Muslim guests. If visiting during Ramadan, stock up beforehand or rely on hotel bars. Drinking alcohol in public is especially disrespectful during this period.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-3">
              <Users className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">Social sensitivity</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Many Moroccans abstain from alcohol for religious reasons. Do not offer wine to Muslim hosts or assume it is welcome. In rural areas and conservative towns, alcohol may not be available or visible. In cosmopolitan cities like Casablanca, Marrakech, and Rabat, wine culture is more open — many Moroccans do drink socially.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">Tipping at wine venues</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  At restaurants, tip 10-15% on the total bill including wine. At winery tasting rooms, tipping is appreciated but not expected — from 20 to 50 MAD for your guide is a kind gesture. Wine bars follow standard restaurant tipping customs.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-5 flex items-start gap-3">
              <Clock className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-1">Driving laws</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco&apos;s blood alcohol limit for drivers is 0.02% — effectively zero tolerance. Police set up checkpoints, especially on highways near wine regions and outside cities at night. If you plan to visit wineries and taste, hire a driver or arrange transport through your hotel. From 500 MAD for a half-day driver in the Meknes area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wine Tour Planning ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning a Wine Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical logistics for visiting Morocco&apos;s wine country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Best Time to Visit</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                September through November is harvest season — the most exciting time to visit wineries. Spring (March-May) offers mild weather and green vineyards. Summer is hot in the Meknes region (35-40 C) but tastings rooms are air-conditioned. Avoid Ramadan if wine is a priority, as some venues reduce service.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Getting to Wine Country</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Meknes wine region is 2.5 hours from Rabat and 3 hours from Casablanca by car. Trains run to Meknes from both cities (from 90 MAD). From Meknes, hire a driver (from 500 MAD half-day) to reach the estates, which are scattered across the countryside with limited public transport. Val d&apos;Argan is 30 minutes from Essaouira by taxi (from 150 MAD).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Sample Itinerary: Meknes Wine Day</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morning: drive to Chateau Roslane for a vineyard tour and tasting (from 200 MAD). Midday: lunch at Domaine de la Zouina&apos;s restaurant with wine pairing (from 450 MAD). Afternoon: visit the Roman ruins of Volubilis (from 70 MAD entry), just 30 minutes from the vineyards. Evening: return to Meknes medina for dinner. Total budget from 1,200 MAD including driver.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Organized Wine Tours</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Several tour operators offer guided wine experiences from Marrakech, Fes, and Casablanca. Full-day wine tours including transport, two winery visits, tastings, and lunch start from 1,500 MAD per person. Multi-day wine and culture itineraries combining Meknes, Fes, Volubilis, and the Middle Atlas start from 4,000 MAD. Seasonal pricing can change during peak travel months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wine Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            What to expect to pay across different venues. Seasonal pricing can change, especially for limited releases and during peak tourist season.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-4 text-[var(--text-secondary)]">Entry-level bottle (supermarket)</td><td className="p-4 text-[var(--text-primary)] font-medium">From 50 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Mid-range bottle (Volubilia, Médaillon)</td><td className="p-4 text-[var(--text-primary)] font-medium">From 80 to 150 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Premium estate bottle</td><td className="p-4 text-[var(--text-primary)] font-medium">From 150 to 400 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Glass of wine at a restaurant</td><td className="p-4 text-[var(--text-primary)] font-medium">From 40 to 100 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Bottle at a restaurant</td><td className="p-4 text-[var(--text-primary)] font-medium">From 150 to 600 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Winery tasting (per person)</td><td className="p-4 text-[var(--text-primary)] font-medium">From 150 to 500 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Winery lunch pairing</td><td className="p-4 text-[var(--text-primary)] font-medium">From 400 to 800 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Full-day wine tour (with transport)</td><td className="p-4 text-[var(--text-primary)] font-medium">From 1,500 MAD</td></tr>
                  <tr><td className="p-4 text-[var(--text-secondary)]">Imported French/Spanish bottle</td><td className="p-4 text-[var(--text-primary)] font-medium">From 120 MAD</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions travelers ask about wine in Morocco.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Nightlife Guide',
                description: 'Bars, clubs, rooftop lounges, and live music venues across Casablanca, Marrakech, and Rabat.',
                href: '/morocco-nightlife',
                icon: Music,
              },
              {
                title: 'Morocco Restaurants Guide',
                description: 'The best restaurants in Morocco — from riad dining to street food stalls to fine dining.',
                href: '/morocco-restaurants',
                icon: Utensils,
              },
              {
                title: 'Moroccan Food Guide',
                description: 'Tagines, couscous, pastilla, street food, and 50+ must-try dishes across the country.',
                href: '/morocco-food-guide',
                icon: BookOpen,
              },
              {
                title: 'Meknes City Guide',
                description: 'The imperial city at the heart of Morocco\'s wine country — Bab Mansour, Moulay Ismail, and Volubilis.',
                href: '/morocco-meknes',
                icon: Landmark,
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
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            Ready to Explore Moroccan Wine Country?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            From the Meknes plateau to the Atlantic coast, Morocco&apos;s wine regions are waiting. Plan your vineyard visits, book your tastings, and discover a winemaking tradition that stretches back to the Romans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-meknes"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] px-8 py-3.5 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Explore Meknes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-3.5 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Moroccan Food Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
