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
  AlertTriangle,
  Droplets,
  Award,
  BookOpen,
  ShoppingBag,
  Sparkles,
  Leaf,
  Users,
  Eye,
  ThermometerSun,
  Utensils,
  Globe,
  Building,
  FlaskConical,
  Mountain,
  TreeDeciduous,
  Truck,
  Activity,
  Sprout,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Olive Oil Guide 2026 | Regions, Varieties & Where to Buy',
  description:
    'Complete guide to Moroccan olive oil: explore the Meknes-Fes, Marrakech-Safi, and Beni Mellal olive regions, learn about Picholine Marocaine varieties, visit traditional stone mills, find fair prices from 40 MAD per liter, and discover tasting experiences across Morocco.',
  keywords: [
    'Moroccan olive oil',
    'Morocco olive oil guide',
    'buy olive oil Morocco',
    'Picholine Marocaine olive oil',
    'Meknes olive oil',
    'Morocco olive oil regions',
    'Moroccan olive oil tasting',
    'olive oil cooperatives Morocco',
    'extra virgin olive oil Morocco',
    'cold pressed olive oil Morocco',
    'olive oil price Morocco',
    'Morocco olive farms',
    'traditional olive oil Morocco',
    'stone mill olive oil Morocco',
    'cooking with Moroccan olive oil',
    'Haouzia olive variety Morocco',
    'Menara olive variety',
    'olive harvest Morocco season',
    'Morocco olive groves tour',
    'olive oil health benefits Morocco',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-olive-oil`,
  },
  openGraph: {
    title: 'Moroccan Olive Oil Guide 2026 | Regions, Varieties & Buying Tips',
    description:
      'Everything you need to know about Moroccan olive oil. Regions, varieties, traditional production, fair prices, and where to buy the best quality across Morocco.',
    url: `${BASE_URL}/morocco-olive-oil`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/hero-food.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan olive oil with fresh olives and traditional Moroccan bread on a rustic table',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Olive Oil Guide | Regions, Varieties & Prices',
    description:
      'Complete guide to Moroccan olive oil: growing regions, Picholine Marocaine varieties, traditional stone mills, fair prices from 40 MAD, and tasting experiences.',
    images: [`${BASE_URL}/images/hero-food.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-olive-oil`,
  name: 'Moroccan Olive Oil Guide 2026 | Regions, Varieties & Where to Buy',
  description:
    'Complete guide to Moroccan olive oil covering growing regions, olive varieties, traditional and modern production methods, pricing, and where to buy.',
  url: `${BASE_URL}/morocco-olive-oil`,
  image: `${BASE_URL}/images/hero-food.webp`,
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
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-olive-oil`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Olive Oil Guide', item: `${BASE_URL}/morocco-olive-oil` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What makes Moroccan olive oil different from other Mediterranean oils?', acceptedAnswer: { '@type': 'Answer', text: 'Moroccan olive oil is predominantly made from Picholine Marocaine, producing a robust, peppery oil with high polyphenol content. The arid climate concentrates flavors. Many producers use traditional stone mills. Morocco is the 6th largest olive oil producer globally.' } },
    { '@type': 'Question', name: 'How much does olive oil cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Bulk oil starts from 40 MAD per liter at markets. Extra virgin at cooperatives costs from 80-150 MAD per liter. Premium cold-pressed oils range from 150-300 MAD per liter. Prices vary seasonally.' } },
    { '@type': 'Question', name: 'Where is the best olive oil region in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Meknes-Fes produces roughly 30% of national output and is the premium region. Marrakech-Safi is second, followed by Beni Mellal-Khenifra and the Oriental region.' } },
    { '@type': 'Question', name: 'Can I visit olive farms and oil mills in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, many farms and cooperatives welcome visitors, especially during harvest season (October to January). The Meknes and Marrakech regions offer organized tasting tours with guided tours of pressing facilities.' } },
    { '@type': 'Question', name: 'What is the difference between traditional and modern Moroccan olive oil?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional oil uses stone mills (maasra) with granite millstones and woven mats, producing intense smoky oil. Modern cold-press uses stainless steel machinery below 27C, yielding cleaner fruitier oil with lower acidity.' } },
    { '@type': 'Question', name: 'How can I tell if Moroccan olive oil is high quality?', acceptedAnswer: { '@type': 'Answer', text: 'Quality oil has green-gold color, fresh fruity aroma, and peppery finish. Acidity below 0.8% for extra virgin. Look for cold-pressed labels, harvest dates, and cooperative origin.' } },
    { '@type': 'Question', name: 'Can I bring Moroccan olive oil home on a plane?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bottles over 100ml must go in checked luggage. Wrap in plastic bags and cushion with clothing. Most countries allow personal-use imports without duty.' } },
    { '@type': 'Question', name: 'When is the olive harvest season in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Late October through January, peaking in November-December. Best time to visit farms and mills. Fresh-pressed oil (huile nouvelle) available at markets during and after harvest.' } },
  ],
};

/* ===================================================================
   DATA: OLIVE VARIETIES
   =================================================================== */

const oliveVarieties = [
  {
    name: 'Picholine Marocaine',
    icon: Award,
    share: '96% of Moroccan olive orchards',
    oilYield: '18-22% oil content',
    flavor: 'Robust, peppery, fruity with pleasant bitterness and high polyphenol levels',
    description:
      'The dominant Moroccan cultivar, used for both oil extraction and table olives. Remarkably drought-resistant and adapted to semi-arid conditions. The oil is rich in oleic acid and polyphenols, giving it a long shelf life and potent flavor. Some trees near Volubilis are estimated at over 500 years old.',
  },
  {
    name: 'Haouzia',
    icon: Sprout,
    share: 'Expanding in Marrakech-Safi region',
    oilYield: '20-25% oil content',
    flavor: 'Milder, buttery, with subtle almond notes and gentle peppery finish',
    description:
      'Developed by Moroccan agricultural research specifically for the Haouz plain around Marrakech. Produces larger fruit with higher oil content than Picholine Marocaine. The smoother oil is popular for export markets and central to the Plan Maroc Vert expansion.',
  },
  {
    name: 'Menara',
    icon: Leaf,
    share: 'Grown primarily in Meknes-Fes corridor',
    oilYield: '16-20% oil content',
    flavor: 'Delicate, herbaceous, grassy notes with light fruity character',
    description:
      'Named after the Menara gardens of Marrakech, producing a refined, light oil prized for elegance. Smaller olives that ripen earlier, suitable for early-harvest oils with maximum polyphenol content. Performs best in irrigated valleys of the Meknes-Fes region.',
  },
  {
    name: 'Dahbia',
    icon: Star,
    share: 'Concentrated in the Oriental region near Oujda',
    oilYield: '19-23% oil content',
    flavor: 'Mild, sweet, buttery with almost no bitterness and a soft finish',
    description:
      'A Mediterranean-influenced variety thriving in the Triffa plain near Berkane. Produces a gentle oil ideal for salad dressings and light dishes. The mildness contrasts with the assertive Picholine Marocaine, making it a favorite for those who prefer subtle oils.',
  },
] as const;

/* ===================================================================
   DATA: OLIVE GROWING REGIONS
   =================================================================== */

const oliveRegions = [
  { region: 'Meknes-Fes', icon: Award, share: '~30% of national production', terrain: 'Fertile plains, Saiss plateau, volcanic soil near Volubilis', varieties: 'Picholine Marocaine, Menara',
    description: 'The heartland of Moroccan olive oil with rich alluvial soil and cultivation dating back to Roman times. The Volubilis ruins sit surrounded by ancient groves. Oil is characteristically fruity with medium peppery notes.', highlight: 'Premium region, best for farm visits' },
  { region: 'Marrakech-Safi', icon: Star, share: '~25% of national production', terrain: 'Haouz plain, Atlas foothills, semi-arid climate', varieties: 'Picholine Marocaine, Haouzia',
    description: 'Olive groves stretch from Marrakech toward the Atlas Mountains. The Haouzia variety was developed here for the dry climate. The cooperative network is well-organized for visitors and many riads offer grove visits.', highlight: 'Most accessible for tourists' },
  { region: 'Beni Mellal-Khenifra', icon: Mountain, share: '~20% of national production', terrain: 'Middle Atlas foothills, irrigated valleys, limestone soil', varieties: 'Picholine Marocaine',
    description: 'Fertile valleys between the Middle Atlas and Tadla plain. Higher altitude and cooler nights create olives with higher polyphenol content and robust flavor. Many family farms still use traditional stone mills.', highlight: 'Off-the-beaten-path, traditional methods' },
  { region: 'Oriental (Oujda-Berkane)', icon: Globe, share: '~15% of national production', terrain: 'Triffa plain, Mediterranean-influenced climate, clay soils', varieties: 'Picholine Marocaine, Dahbia',
    description: 'The easternmost region with Mediterranean climate influence. Significant investment in modern production. Oil is milder and butterier than the peppery Meknes oils, ideal for dressings and light cooking.', highlight: 'Mild flavor, modern production' },
] as const;

/* ===================================================================
   DATA: OLIVE OIL TYPES & GRADES
   =================================================================== */

const oliveOilTypes = [
  {
    type: 'Extra Virgin Olive Oil',
    icon: Award,
    acidity: 'Below 0.8%',
    flavor: 'Fruity, peppery, complex with a slight bitterness',
    uses: 'Salad dressings, bread dipping, finishing tagines',
    price: 'From 100 MAD per liter',
  },
  {
    type: 'Virgin Olive Oil',
    icon: Leaf,
    acidity: 'Below 2.0%',
    flavor: 'Milder fruitiness, less peppery, smoother finish',
    uses: 'Everyday cooking, sauteing, marinades, baking',
    price: 'From 60 MAD per liter',
  },
  {
    type: 'Traditional Stone-Mill Oil',
    icon: FlaskConical,
    acidity: 'Typically 1.0-3.0%',
    flavor: 'Intense, sometimes smoky, very robust and earthy',
    uses: 'Traditional Moroccan cooking, bread dipping',
    price: 'From 40 MAD per liter (bulk)',
  },
  {
    type: 'Flavored and Infused Oils',
    icon: Sparkles,
    acidity: 'Varies by base oil',
    flavor: 'Lemon, herbs, chili, or garlic infusions',
    uses: 'Gift items, gourmet cooking, salad finishing',
    price: 'From 120 MAD per 250ml bottle',
  },
] as const;

/* ===================================================================
   DATA: PRODUCTION METHODS
   =================================================================== */

const productionMethods = [
  { step: 1, title: 'Harvesting (Oct-Jan)', icon: TreeDeciduous, text: 'Olives are hand-picked or knocked from trees onto nets below. Early-harvest green olives yield peppery, polyphenol-rich oil; ripe black olives produce milder, butterier oil with higher yields.' },
  { step: 2, title: 'Washing and Sorting', icon: Droplets, text: 'Olives are cleaned of leaves and debris. Modern facilities use mechanical sorters by size and ripeness. Olives must be pressed within 24-48 hours to prevent fermentation.' },
  { step: 3, title: 'Crushing and Malaxation', icon: FlaskConical, text: 'Traditional maasra mills use granite stones to crush olives into paste. Modern mills use stainless steel hammers. The paste is kneaded for 20-40 minutes to merge oil droplets.' },
  { step: 4, title: 'Pressing or Centrifuging', icon: ThermometerSun, text: 'Traditional mills press paste through woven esparto mats on hydraulic presses. Modern facilities use centrifuges. Cold pressing keeps temperature below 27C, preserving flavor and nutrients.' },
  { step: 5, title: 'Settling and Filtering', icon: Eye, text: 'Fresh oil settles in steel or clay vessels over weeks. Some producers filter for shelf life; others sell unfiltered oil prized for intense flavor. 100kg of olives yields roughly 15-20 liters of oil.' },
] as const;

/* ===================================================================
   DATA: WHERE TO BUY
   =================================================================== */

const whereToBuy = [
  {
    place: 'Olive Oil Cooperatives',
    icon: Users,
    description:
      'Hundreds of cooperatives across Meknes, Marrakech, and Beni Mellal offer fixed fair prices, guaranteed origin, and visitor tours. Supported by the Plan Maroc Vert agricultural program.',
    bestFor: 'Best quality guarantee and fair prices',
    color: 'green',
  },
  {
    place: 'Local Souks and Weekly Markets',
    icon: ShoppingBag,
    description:
      'Weekly souks sell bulk olive oil from large containers at the lowest prices. Quality varies, so always taste before buying. The best souk oil comes from small family farms. Bring your own container.',
    bestFor: 'Lowest prices, authentic local experience',
    color: 'amber',
  },
  {
    place: 'Olive Farms and Estates',
    icon: TreeDeciduous,
    description:
      'Estates around Meknes (near Volubilis), the Ourika Valley, and the Rif Mountains produce premium bottled oils with direct sales. Some offer full tasting experiences with food pairings.',
    bestFor: 'Premium oils and tasting experiences',
    color: 'blue',
  },
  {
    place: 'Supermarkets and Grocery Stores',
    icon: Building,
    description:
      'Marjane, Carrefour, and Acima stock national brands and regional oils at fixed, labeled prices. Look for Oued Souss, Aicha, Lesieur Cristal, and Les Domaines Zniber for consistent quality.',
    bestFor: 'Convenience and price transparency',
    color: 'purple',
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const priceGuide = [
  { product: 'Bulk olive oil (traditional, 1L)', cooperative: 'From 40 MAD', souk: 'From 30-60 MAD', supermarket: 'From 50 MAD' },
  { product: 'Virgin olive oil (bottled, 1L)', cooperative: 'From 60 MAD', souk: 'From 50-100 MAD', supermarket: 'From 65 MAD' },
  { product: 'Extra virgin olive oil (1L)', cooperative: 'From 100 MAD', souk: 'From 80-200 MAD', supermarket: 'From 90 MAD' },
  { product: 'Premium cold-pressed EVOO (500ml)', cooperative: 'From 80 MAD', souk: 'From 70-180 MAD', supermarket: 'From 85 MAD' },
  { product: 'Flavored olive oil (250ml)', cooperative: 'From 60 MAD', souk: 'From 50-120 MAD', supermarket: 'From 70 MAD' },
  { product: 'Table olives, mixed (1kg)', cooperative: 'From 30 MAD', souk: 'From 20-50 MAD', supermarket: 'From 35 MAD' },
] as const;

/* ===================================================================
   DATA: QUALITY IDENTIFICATION
   =================================================================== */

const qualityTests = [
  {
    test: 'Color & Aroma',
    icon: Eye,
    good: 'Green-gold to golden yellow, clear and bright. Fresh, fruity, grassy aroma with hints of almond or artichoke',
    poor: 'Pale and watery, brownish, or musty. Rancid, vinegary, or odorless indicates old or adulterated oil',
  },
  {
    test: 'Taste & Texture',
    icon: Utensils,
    good: 'Fruity first impression, slight bitterness, peppery kick at the back of the throat. Clean finish',
    poor: 'Flat, greasy, waxy mouthfeel. No peppery finish. Tastes like nothing or like canola oil',
  },
  {
    test: 'Acidity & Labels',
    icon: ShieldCheck,
    good: 'Below 0.8% for extra virgin, below 2% for virgin. Harvest date, region, cooperative name on label',
    poor: 'No acidity info, acidity above 3.3%, no label, no date, vague origin or unlabeled tourist-stall containers',
  },
  {
    test: 'Price Indicator',
    icon: DollarSign,
    good: 'Extra virgin from 80 MAD per liter or above at cooperatives indicates fair pricing for quality oil',
    poor: 'Extra virgin at under 40 MAD per liter is almost certainly not genuine extra virgin grade',
  },
] as const;

/* ===================================================================
   DATA: CULINARY USES
   =================================================================== */

const culinaryUses = [
  { dish: 'Tagine Finishing Oil', description: 'A drizzle of extra virgin olive oil over finished tagines adds richness and peppery depth. Added after cooking to preserve flavor and nutrients.', icon: Utensils },
  { dish: 'Bread Dipping (Khobz)', description: 'Fresh khobz dipped into olive oil with cumin and salt. Served at nearly every meal and the purest way to taste quality oil.', icon: Heart },
  { dish: 'Moroccan Salads', description: 'The base for zaalouk (eggplant), taktouka (peppers and tomatoes), and fresh salads. Olive oil is both cooking medium and finishing drizzle.', icon: Leaf },
  { dish: 'Chermoula Marinade', description: 'Essential marinade for grilled fish: olive oil with coriander, parsley, garlic, cumin, paprika, and preserved lemon.', icon: Sparkles },
  { dish: 'Couscous Enrichment', description: 'Olive oil worked into couscous between steaming cycles keeps grains fluffy. A final drizzle adds sheen and flavor.', icon: Droplets },
] as const;

/* ===================================================================
   DATA: TASTING EXPERIENCES
   =================================================================== */

const tastingExperiences = [
  { name: 'Volubilis Olive Oil Trail', location: 'Near Meknes', icon: Award, duration: 'Half day (3-4 hours)', price: 'From 300 MAD per person',
    description: 'Visit the Roman ruins of Volubilis then tour olive farms in the Zerhoun hillside groves. Guided tastings with local bread, olives, and mint tea.' },
  { name: 'Ourika Valley Farm Visits', location: 'Near Marrakech (30 min)', icon: Mountain, duration: 'Half day (2-3 hours)', price: 'From 250 MAD per person',
    description: 'Organic olive estates welcome visitors for grove walks, pressing facility tours, and guided tastings of three to five oils with Moroccan dishes.' },
  { name: 'Meknes Cooperative Circuit', location: 'Meknes region', icon: Users, duration: 'Full day', price: 'From 500 MAD per person',
    description: 'Visit two to three cooperatives in one day. See stone-mill and cold-press production, taste different grades, and buy direct. Best during harvest (Nov-Jan).' },
  { name: 'Atlas Mountain Olive Groves', location: 'High Atlas foothills', icon: TreeDeciduous, duration: 'Full day', price: 'From 400 MAD per person',
    description: 'Combine Atlas hiking with mountain olive farm visits. Higher-altitude groves produce intensely flavored oils. Intimate, family-run experiences.' },
] as const;

/* ===================================================================
   DATA: HEALTH BENEFITS
   =================================================================== */

const healthBenefits = [
  { benefit: 'Heart Health', icon: Heart, detail: 'Rich in oleic acid, which reduces LDL cholesterol and cardiovascular disease risk. Regular extra virgin olive oil consumption is linked to healthier blood pressure.' },
  { benefit: 'Antioxidant Power', icon: ShieldCheck, detail: 'Picholine Marocaine oil has exceptionally high polyphenols due to Morocco\'s arid climate. Polyphenols combat oxidative stress and inflammation throughout the body.' },
  { benefit: 'Anti-Inflammatory', icon: Activity, detail: 'Oleocanthal in quality olive oil has anti-inflammatory effects comparable to ibuprofen. The peppery throat sensation is oleocanthal activating the same receptors.' },
  { benefit: 'Digestive Health', icon: Leaf, detail: 'Traditional Moroccan medicine uses olive oil for digestion. Research confirms it stimulates bile production, aids nutrient absorption, and supports gut health.' },
  { benefit: 'Skin and Hair', icon: Sparkles, detail: 'Used topically for moisturizing and conditioning. Vitamin E and squalene in cold-pressed oil makes it an effective natural emollient.' },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'What makes Moroccan olive oil different from other Mediterranean oils?',
    answer:
      'Moroccan olive oil is predominantly made from Picholine Marocaine, producing a robust, peppery oil with high polyphenol content. The arid climate concentrates flavors. Many producers still use traditional stone mills (maasra). Morocco ranks 6th globally with over 1 million hectares of olive groves.',
  },
  {
    question: 'How much does olive oil cost in Morocco?',
    answer:
      'Bulk oil at local markets starts from 40 MAD per liter. Extra virgin at cooperatives costs from 80-150 MAD per liter. Premium cold-pressed oils range from 150-300 MAD per liter. Supermarket oil starts from 50 MAD. Prices vary seasonally based on harvest quality.',
  },
  {
    question: 'Where is the best olive oil region in Morocco?',
    answer:
      'The Meknes-Fes region produces roughly 30% of national output and is the premium region, especially around the Volubilis ruins. Marrakech-Safi is second-largest, followed by Beni Mellal-Khenifra and the Oriental region near Oujda.',
  },
  {
    question: 'Can I visit olive farms and oil mills in Morocco?',
    answer:
      'Yes, many farms and cooperatives welcome visitors, especially during harvest season (October through January). The Meknes and Marrakech regions offer organized tasting tours with guided tours of traditional and modern pressing, often with tastings at no extra charge.',
  },
  {
    question: 'What is the difference between traditional and modern Moroccan olive oil?',
    answer:
      'Traditional oil is made in stone mills (maasra) with granite millstones and woven mats, producing intense, smoky oil with higher acidity. Modern cold-press uses stainless steel below 27 degrees Celsius, yielding cleaner, fruitier oil with lower acidity and longer shelf life.',
  },
  {
    question: 'How can I tell if Moroccan olive oil is high quality?',
    answer:
      'Quality oil has a green-gold color, fresh fruity aroma, and a peppery finish. Acidity should be below 0.8% for extra virgin. Avoid musty-smelling, flat-tasting, or greasy oil. Check for cold-pressed labels, harvest dates, and cooperative origin on the packaging.',
  },
  {
    question: 'Can I bring Moroccan olive oil home on a plane?',
    answer:
      'Yes. Bottles over 100ml must go in checked luggage. Wrap glass bottles in plastic bags and cushion with clothing. Most countries allow personal-use olive oil imports without duty. Some cooperatives offer flight-friendly packaging.',
  },
  {
    question: 'When is the olive harvest season in Morocco?',
    answer:
      'The harvest runs from late October through January, peaking in November and December. This is the best time to visit farms and mills to watch pressing in action. Fresh-pressed oil (huile nouvelle) is available at markets during and just after the harvest.',
  },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoOliveOilPage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-food.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Moroccan Olive Oil Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Leaf className="w-4 h-4" />
            Food &amp; Culinary Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Olive Oil:
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From ancient groves near Volubilis to modern cooperatives. Regions, varieties,
            production methods, prices from 40 MAD per liter, and where to buy Morocco&apos;s liquid gold.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Olive Oil Heritage
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is the 6th largest olive oil producer in the world and the 2nd largest in
                Africa, with over 1 million hectares of olive groves spanning from the Rif Mountains
                in the north to the Anti-Atlas in the south. The olive tree has been cultivated here
                for over 2,500 years, and olive oil remains a cornerstone of Moroccan cuisine,
                culture, and daily life. The average Moroccan consumes roughly 4 liters of olive oil
                per year, making it the primary cooking fat in traditional households.
              </p>
              <p>
                Under the Plan Maroc Vert (Green Morocco Plan), the country has invested heavily in
                modernizing olive production while preserving traditional methods. Today, Morocco
                produces approximately 200,000 tonnes of olive oil annually from roughly 100 million
                olive trees. The dominant variety is the Picholine Marocaine, a robust cultivar that
                thrives in Morocco&apos;s semi-arid climate and produces oil with a distinctive peppery
                character, high polyphenol content, and excellent shelf stability.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices and reflect typical cooperative and market rates.
                Seasonal pricing applies: harvest season (October-January) brings the freshest oil at
                the best prices, while late-season prices may run 10-20% higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Olive Varieties -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Olive Varieties
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four principal cultivars define Moroccan olive oil production, each adapted to
            specific regions and producing oils with distinct flavor profiles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {oliveVarieties.map((variety) => {
              const VarietyIcon = variety.icon;
              return (
                <div key={variety.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <VarietyIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {variety.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{variety.share}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{variety.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs">
                      <Droplets className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]"><strong>Oil Yield:</strong> {variety.oilYield}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <Star className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]"><strong>Flavor:</strong> {variety.flavor}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Olive Growing Regions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Olive Growing Regions of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four major regions produce the bulk of Morocco&apos;s olive oil, each with distinct
            terroir, climate, and flavor profiles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {oliveRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{region.share}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{region.description}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-2 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]"><strong>Terrain:</strong> {region.terrain}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <Leaf className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)]"><strong>Varieties:</strong> {region.varieties}</span>
                    </div>
                  </div>
                  <span className="inline-block text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                    {region.highlight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Types of Moroccan Olive Oil -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Olive Oil Quality Grades
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From premium extra virgin to rustic stone-mill oil, understanding the grades helps you
            choose the right oil for your needs and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {oliveOilTypes.map((oil) => {
              const OilIcon = oil.icon;
              return (
                <div key={oil.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <OilIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {oil.type}
                    </h3>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <p className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Acidity:</strong> {oil.acidity}</p>
                    <p className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Flavor:</strong> {oil.flavor}</p>
                    <p className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Uses:</strong> {oil.uses}</p>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{oil.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Production Process -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FlaskConical className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional vs Modern Production
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From ancient stone mills to modern cold-press facilities, see how Moroccan olive oil
            is made from harvest to bottle.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {productionMethods.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Where to Buy -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Moroccan Olive Oil
          </h2>

          <div className="space-y-6">
            {whereToBuy.map((place) => {
              const PlaceIcon = place.icon;
              const colorMap: Record<string, { tag: string; bg: string }> = {
                green: { tag: 'text-green-700', bg: 'bg-green-50' },
                amber: { tag: 'text-amber-700', bg: 'bg-amber-50' },
                blue: { tag: 'text-blue-700', bg: 'bg-blue-50' },
                purple: { tag: 'text-purple-700', bg: 'bg-purple-50' },
              };
              const colors = colorMap[place.color] || colorMap.green;
              return (
                <div key={place.place} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PlaceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {place.place}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {place.description}
                  </p>
                  <span className={`inline-block text-xs font-semibold ${colors.tag} px-2 py-0.5 ${colors.bg} rounded`}>
                    {place.bestFor}
                  </span>
                </div>
              );
            })}

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-red-700 mb-1">Caution: Tourist-Area Sellers</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Be cautious of unlabeled olive oil sold near major tourist sites. Some vendors mix
                    olive oil with cheaper seed oils. Always taste before buying bulk oil. Genuine sellers
                    welcome tasting; those who refuse are often selling adulterated products. Airport
                    shops charge 2-4 times market prices for mediocre quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Olive Oil Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Prices vary by grade, source, and season. Cooperatives offer the best balance of quality and value.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--color-accent)]/10">
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Product</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cooperative</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Souk Range</th>
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Supermarket</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceGuide.map((row, i) => (
                      <tr key={row.product} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="p-4 text-[var(--text-primary)] font-medium">{row.product}</td>
                        <td className="p-4 text-[var(--color-accent)] font-semibold">{row.cooperative}</td>
                        <td className="p-4 text-[var(--text-muted)]">{row.souk}</td>
                        <td className="p-4 text-[var(--text-secondary)]">{row.supermarket}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              Prices are starting prices and may vary seasonally. Souk prices require bargaining;
              cooperative and supermarket prices are typically fixed. Harvest season (Oct-Jan) offers the best value.
            </p>
          </div>
        </div>
      </section>

      {/* -- How to Identify Quality -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Identify Quality Olive Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these six tests to evaluate olive oil quality before buying. Reputable sellers
            always allow tasting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {qualityTests.map((item) => {
              const TestIcon = item.icon;
              return (
                <div key={item.test} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.test}
                    </h3>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg mb-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-green-700">Good:</span> {item.good}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-red-600">Poor:</span> {item.poor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Olive Oil Tastings and Farm Visits -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Olive Oil Tastings &amp; Farm Visits
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Experience Moroccan olive oil from grove to glass. These tasting experiences combine
            education, scenery, and direct purchasing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tastingExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {exp.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{exp.description}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
                      <DollarSign className="w-3.5 h-3.5" />
                      {exp.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Visit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Harvest season (Oct-Jan) for watching pressing in action and tasting fresh oil</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Spring (Mar-May) for beautiful grove scenery with olive trees in bloom</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Meknes International Olive Festival (usually January) for tastings and competitions</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Year-round at cooperatives, which maintain stock and offer tours outside harvest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Cooking with Moroccan Olive Oil -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cooking with Moroccan Olive Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Olive oil is the backbone of Moroccan cuisine. Here are the essential ways it is used
            in traditional and modern Moroccan cooking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {culinaryUses.map((use) => {
              const UseIcon = use.icon;
              return (
                <div key={use.dish} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <UseIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {use.dish}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{use.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Health Benefits -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Activity className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health Benefits of Moroccan Olive Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan olive oil, particularly cold-pressed Picholine Marocaine, offers documented
            health benefits backed by Mediterranean diet research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {healthBenefits.map((item) => {
              const BenefitIcon = item.icon;
              return (
                <div key={item.benefit} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BenefitIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.benefit}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Buying and Exporting -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Truck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Taking Olive Oil Home: Export &amp; Travel Tips
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Flying with Olive Oil
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Bottles over 100ml must go in checked luggage. Wrap glass bottles individually
                    in plastic bags and cushion with clothing or bubble wrap.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Metal tins (common at cooperatives) are safer for luggage transport than glass. Ask
                    specifically for tin packaging when buying for travel.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Most countries allow olive oil imports for personal use without duty. The EU, US,
                    UK, and Canada all permit reasonable quantities in checked bags.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Shipping Olive Oil Internationally
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Some cooperatives and boutique producers offer international shipping. Expect from
                    200-400 MAD for shipping to Europe and from 400-800 MAD for North America.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Morocco Post (Poste Maroc) offers international parcel service, but private couriers
                    like DHL and FedEx are more reliable for fragile goods. Always insure the shipment.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Check your destination country&apos;s food import regulations before shipping.
                    Australia and New Zealand have strict biosecurity rules that may require
                    specific labeling or documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/morocco-argan-oil" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Argan Oil Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to buying authentic argan oil: cooperatives, prices from 80 MAD, and how to spot fakes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the essential dishes, street food, and dining customs of Moroccan cuisine.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spice-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spice Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the spice souks with confidence. Ras el hanout, saffron, cumin, and more with prices.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best souvenirs from Morocco with real prices, quality tips, and where to shop by city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cuisine" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the rich culinary traditions of Morocco from tagines to pastilla to mint tea.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/meknes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Meknes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Heart of Morocco&apos;s olive country with the imperial city, Volubilis ruins, and farm visits.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-meknes-gate.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Taste Morocco&apos;s Liquid Gold
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient olive groves of Volubilis to the cooperative presses of the Haouz plain,
            Moroccan olive oil tells a story of terroir, tradition, and craftsmanship spanning millennia.
            Visit during harvest season and taste fresh-pressed oil straight from the mill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cuisine"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Utensils className="w-5 h-5" />
              Explore Moroccan Cuisine
            </Link>
            <Link
              href="/meknes"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Visit Meknes &amp; Volubilis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
