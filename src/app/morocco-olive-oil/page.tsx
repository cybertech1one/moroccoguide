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
        url: `${BASE_URL}/images/photo-morocco-olive-oil.webp`,
        width: 1200,
        height: 630,
        alt: 'Bottles of Moroccan extra virgin olive oil with fresh olives on a rustic wooden table',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Olive Oil Guide | Regions, Varieties & Prices',
    description:
      'Complete guide to Moroccan olive oil: growing regions, Picholine Marocaine varieties, traditional stone mills, fair prices from 40 MAD, and tasting experiences.',
    images: [`${BASE_URL}/images/photo-morocco-olive-oil.webp`],
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
  image: `${BASE_URL}/images/photo-morocco-olive-oil.webp`,
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
    {
      '@type': 'Question',
      name: 'What makes Moroccan olive oil different from other Mediterranean oils?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan olive oil is predominantly made from the Picholine Marocaine variety, which produces a distinctively robust, peppery oil with high polyphenol content. The arid Moroccan climate concentrates flavors and antioxidants. Many producers still use traditional stone mills, which yield a uniquely textured oil. Morocco is the 6th largest olive oil producer globally.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does olive oil cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bulk olive oil at local markets starts from 40 MAD per liter. Bottled extra virgin olive oil at cooperatives costs from 80-150 MAD per liter. Premium cold-pressed oils from boutique producers range from 150-300 MAD per liter. Supermarket olive oil starts from 50 MAD per liter. Prices vary seasonally based on harvest quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best olive oil region in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Meknes-Fes region produces roughly 30% of Morocco\'s olive oil and is widely considered the premium region. The area around Meknes, particularly the Volubilis plain, has ideal soil and climate conditions. Marrakech-Safi is the second largest producing region, while Beni Mellal-Khenifra and the Oriental region are also significant producers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit olive farms and oil mills in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many olive farms and cooperatives welcome visitors, especially during harvest season (October to January). The Meknes and Marrakech regions offer organized tasting tours. Cooperatives like those in the Zerhoun hills near Meknes provide guided tours showing traditional stone pressing and modern cold-press extraction, often with tastings included.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between traditional and modern Moroccan olive oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Moroccan olive oil is produced using stone mills (maasra) where olives are crushed with granite millstones and pressed with woven mats. The resulting oil has a strong, sometimes smoky flavor. Modern cold-press production uses stainless steel machinery, yielding cleaner, fruitier oil with lower acidity and longer shelf life. Both methods produce excellent oil.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if Moroccan olive oil is high quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'High-quality Moroccan olive oil should have a green-gold color, a fresh fruity or grassy aroma, and a peppery finish that catches the back of the throat. Acidity should be below 0.8% for extra virgin grade. Avoid oil that smells musty, tastes flat, or has a greasy mouthfeel. Look for cold-pressed labels, harvest dates, and cooperative or farm origin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring Moroccan olive oil home on a plane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bottles over 100ml must go in checked luggage due to carry-on liquid restrictions. Wrap bottles in plastic bags and cushion with clothing. Glass bottles should be individually wrapped to prevent breakage. Most countries allow olive oil imports for personal use without duty. Some cooperatives sell flight-friendly packaging.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the olive harvest season in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Moroccan olive harvest runs from late October through January, with peak activity in November and December. This is the best time to visit olive farms and mills, as you can watch the entire process from picking to pressing. Fresh-pressed oil (huile nouvelle) is available at markets and cooperatives during and just after harvest season.',
      },
    },
  ],
};

/* ===================================================================
   DATA: OLIVE GROWING REGIONS
   =================================================================== */

const oliveRegions = [
  {
    region: 'Meknes-Fes',
    icon: Award,
    share: '~30% of national production',
    terrain: 'Fertile plains, Saiss plateau, volcanic soil near Volubilis',
    varieties: 'Picholine Marocaine, Menara',
    description:
      'The heartland of Moroccan olive oil. The Meknes region benefits from rich alluvial soil, moderate rainfall, and a long tradition of olive cultivation dating back to Roman times. The ruins of Volubilis sit surrounded by ancient olive groves. Oil from this region is characteristically fruity with medium peppery notes.',
    highlight: 'Premium region, best for farm visits',
  },
  {
    region: 'Marrakech-Safi',
    icon: Star,
    share: '~25% of national production',
    terrain: 'Haouz plain, Atlas foothills, semi-arid climate',
    varieties: 'Picholine Marocaine, Haouzia',
    description:
      'The olive groves of the Haouz plain stretch from Marrakech toward the Atlas Mountains. The Haouzia variety was developed here specifically for the dry climate. The Marrakech olive oil cooperative network is well-organized for visitors, and many luxury riads incorporate olive grove visits into their guest experiences.',
    highlight: 'Most accessible for tourists',
  },
  {
    region: 'Beni Mellal-Khenifra',
    icon: Mountain,
    share: '~20% of national production',
    terrain: 'Middle Atlas foothills, irrigated valleys, limestone soil',
    varieties: 'Picholine Marocaine',
    description:
      'The fertile valleys between the Middle Atlas and the Tadla plain produce substantial quantities of olive oil. The higher altitude and cooler nights create olives with slightly higher polyphenol content and a more robust flavor profile. Many family-run farms here still use traditional stone mills passed down through generations.',
    highlight: 'Off-the-beaten-path, traditional methods',
  },
  {
    region: 'Oriental (Oujda-Berkane)',
    icon: Globe,
    share: '~15% of national production',
    terrain: 'Triffa plain, Mediterranean-influenced climate, clay soils',
    varieties: 'Picholine Marocaine, Dahbia',
    description:
      'The easternmost olive region benefits from Mediterranean climatic influence. The Triffa plain near Berkane has seen significant investment in modern olive production. Oil from this region tends to be milder and butterier than the peppery Meknes oils, making it ideal for dressings and light cooking.',
    highlight: 'Mild flavor, modern production',
  },
] as const;

/* ===================================================================
   DATA: OLIVE OIL TYPES
   =================================================================== */

const oliveOilTypes = [
  {
    type: 'Extra Virgin Olive Oil',
    icon: Award,
    acidity: 'Below 0.8%',
    flavor: 'Fruity, peppery, complex with a slight bitterness',
    production: 'First cold pressing, no chemical treatment',
    uses: 'Salad dressings, bread dipping, finishing tagines, drizzling over hummus',
    price: 'From 100 MAD per liter',
    tip: 'Look for harvest date on the label. Best consumed within 18 months of pressing. Store in a dark, cool place away from heat.',
  },
  {
    type: 'Virgin Olive Oil',
    icon: Leaf,
    acidity: 'Below 2.0%',
    flavor: 'Milder fruitiness, less peppery, smoother finish',
    production: 'First pressing, slightly higher processing temperature allowed',
    uses: 'Everyday cooking, sauteing vegetables, marinades, baking',
    price: 'From 60 MAD per liter',
    tip: 'Excellent value for daily cooking. Still retains antioxidants and polyphenols, just fewer than extra virgin. Morocco produces excellent virgin-grade oil.',
  },
  {
    type: 'Traditional Stone-Mill Oil',
    icon: FlaskConical,
    acidity: 'Varies, typically 1.0-3.0%',
    flavor: 'Intense, sometimes smoky, very robust and earthy',
    production: 'Crushed with granite stones in a maasra, pressed with woven mats',
    uses: 'Traditional Moroccan cooking, bread dipping, cultural experience',
    price: 'From 40 MAD per liter (bulk)',
    tip: 'This is the oil most Moroccans use daily. Higher acidity but packed with character. Buy from local markets for the most authentic experience.',
  },
  {
    type: 'Flavored and Infused Oils',
    icon: Sparkles,
    acidity: 'Varies by base oil',
    flavor: 'Depends on infusion: lemon, herbs, chili, garlic common',
    production: 'Extra virgin base infused with herbs, spices, or citrus',
    uses: 'Gift items, gourmet cooking, salad finishing, specialty drizzling',
    price: 'From 120 MAD per 250ml bottle',
    tip: 'Available at boutique cooperatives and specialty shops. Make excellent souvenirs. Ensure the base oil is extra virgin for the best quality infusions.',
  },
] as const;

/* ===================================================================
   DATA: PRODUCTION METHODS
   =================================================================== */

const productionMethods = [
  {
    step: 1,
    title: 'Harvesting the Olives',
    icon: TreeDeciduous,
    text: 'Morocco\'s olive harvest runs from late October through January. Olives are hand-picked or knocked from trees with long poles onto nets spread below. Timing matters: early-harvest green olives yield more peppery, polyphenol-rich oil, while ripe black olives produce milder, butterier oil with higher yields.',
  },
  {
    step: 2,
    title: 'Washing and Sorting',
    icon: Droplets,
    text: 'Freshly harvested olives are cleaned to remove leaves, twigs, and debris. At modern facilities, mechanical sorters separate olives by size and ripeness. Traditional producers hand-sort at home. Olives should be pressed within 24-48 hours of picking to prevent fermentation and high acidity.',
  },
  {
    step: 3,
    title: 'Crushing and Malaxation',
    icon: FlaskConical,
    text: 'Traditional maasra mills use massive granite stones rotated by a donkey or motor to crush olives into a paste. Modern facilities use stainless steel hammer mills. The paste is then slowly kneaded (malaxation) for 20-40 minutes to allow oil droplets to merge, making separation easier.',
  },
  {
    step: 4,
    title: 'Pressing or Centrifuging',
    icon: ThermometerSun,
    text: 'In traditional mills, olive paste is spread on woven esparto grass mats stacked on a hydraulic press. Modern cold-press facilities use a two-phase or three-phase centrifuge to separate oil from water and solids. Cold pressing means the temperature never exceeds 27 degrees Celsius, preserving flavor and nutrients.',
  },
  {
    step: 5,
    title: 'Settling and Filtering',
    icon: Eye,
    text: 'Fresh-pressed oil is left to settle in stainless steel or clay vessels. Sediment sinks to the bottom over several weeks. Some producers filter for clarity and longer shelf life; others sell unfiltered oil (prized by connoisseurs for its intense flavor). One hundred kilograms of olives yields roughly 15-20 liters of oil.',
  },
] as const;

/* ===================================================================
   DATA: WHERE TO BUY
   =================================================================== */

const whereToBuy = [
  {
    place: 'Olive Oil Cooperatives',
    icon: Users,
    description:
      'Morocco has hundreds of olive oil cooperatives, particularly around Meknes, Marrakech, and Beni Mellal. Cooperatives offer fixed fair prices, guaranteed origin, and many welcome visitors for tours and tastings. The cooperative model has been heavily supported by Morocco\'s Plan Maroc Vert agricultural program.',
    bestFor: 'Best quality guarantee and fair prices',
    color: 'green',
  },
  {
    place: 'Local Souks and Weekly Markets',
    icon: ShoppingBag,
    description:
      'Every Moroccan town has a weekly souk where farmers sell bulk olive oil from large plastic or metal containers. Prices are lowest here but quality varies. Ask to taste before buying. The best souk oil comes from small family farms selling their own production. Bring your own container or buy the plastic jugs available.',
    bestFor: 'Lowest prices, authentic local experience',
    color: 'amber',
  },
  {
    place: 'Olive Farms and Estates',
    icon: TreeDeciduous,
    description:
      'A growing number of Moroccan olive estates offer direct sales alongside farm tours. Estates around Meknes (near Volubilis), in the Ourika Valley near Marrakech, and in the Rif Mountains produce premium bottled oils. Some luxury estates offer full tasting experiences with food pairings.',
    bestFor: 'Premium oils and tasting experiences',
    color: 'blue',
  },
  {
    place: 'Supermarkets and Grocery Stores',
    icon: Building,
    description:
      'Major Moroccan supermarkets like Marjane, Carrefour, and Acima stock both national brands and regional olive oils. Prices are fixed and labeled, making comparison easy. Look for brands like Oued Souss, Aicha, Lesieur Cristal, and Les Domaines Zniber for consistent quality at mid-range prices.',
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
  { product: 'Estate/boutique EVOO (500ml)', cooperative: 'From 120 MAD', souk: 'Rare', supermarket: 'From 150 MAD' },
  { product: 'Flavored olive oil (250ml)', cooperative: 'From 60 MAD', souk: 'From 50-120 MAD', supermarket: 'From 70 MAD' },
  { product: 'Table olives, mixed (1kg)', cooperative: 'From 30 MAD', souk: 'From 20-50 MAD', supermarket: 'From 35 MAD' },
  { product: 'Olive oil soap (bar)', cooperative: 'From 15 MAD', souk: 'From 10-40 MAD', supermarket: 'From 20 MAD' },
] as const;

/* ===================================================================
   DATA: QUALITY IDENTIFICATION
   =================================================================== */

const qualityTests = [
  {
    test: 'Color Test',
    icon: Eye,
    good: 'Green-gold to golden yellow, clear and bright. Deeper green indicates earlier harvest and higher polyphenols',
    poor: 'Very pale and watery, brownish, or cloudy with visible sediment (unless sold as unfiltered)',
  },
  {
    test: 'Aroma Test',
    icon: Leaf,
    good: 'Fresh, fruity, grassy, or herbaceous notes. May have hints of almond, tomato, or artichoke',
    poor: 'Musty, rancid, vinegary, or completely odorless. Strong chemical smell indicates adulteration',
  },
  {
    test: 'Taste Test',
    icon: Utensils,
    good: 'Fruity first impression, slight bitterness in the middle, peppery kick at the back of the throat',
    poor: 'Flat, greasy, waxy mouthfeel. No peppery finish. Tastes like nothing or like canola oil',
  },
  {
    test: 'Acidity Check',
    icon: FlaskConical,
    good: 'Below 0.8% for extra virgin, below 2% for virgin. Labeled clearly on quality bottles',
    poor: 'No acidity information, or acidity above 3.3% which indicates lampante (non-edible) grade',
  },
  {
    test: 'Label and Origin',
    icon: ShieldCheck,
    good: 'Harvest date, region of origin, cooperative or farm name, cold-pressed indication, acidity level',
    poor: 'No label, no date, vague origin like just "Morocco," plastic unlabeled containers at tourist stalls',
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
  {
    dish: 'Tagine Finishing Oil',
    description: 'A generous drizzle of extra virgin olive oil over a finished lamb, chicken, or vegetable tagine adds richness and a peppery depth. Added after cooking to preserve the delicate flavors and nutritional compounds.',
    icon: Utensils,
  },
  {
    dish: 'Bread Dipping (Khobz)',
    description: 'Moroccans dip fresh khobz (round flatbread) into a small dish of olive oil mixed with cumin and salt. This simple combination is served at nearly every traditional meal and is the purest way to taste quality oil.',
    icon: Heart,
  },
  {
    dish: 'Moroccan Salads',
    description: 'The base dressing for Morocco\'s famous cooked salads: zaalouk (eggplant), taktouka (peppers and tomatoes), and fresh tomato-onion salad. Olive oil is both the cooking medium and the finishing drizzle.',
    icon: Leaf,
  },
  {
    dish: 'Chermoula Marinade',
    description: 'The essential marinade for Moroccan grilled fish combines olive oil with fresh coriander, parsley, garlic, cumin, paprika, and preserved lemon. The oil carries and melds the spice flavors into the protein.',
    icon: Sparkles,
  },
  {
    dish: 'Couscous Enrichment',
    description: 'Olive oil is worked into steamed couscous grains between steaming cycles, keeping them fluffy and separate. A final drizzle before serving adds sheen and flavor to this staple Moroccan dish.',
    icon: Droplets,
  },
] as const;

/* ===================================================================
   DATA: TASTING EXPERIENCES
   =================================================================== */

const tastingExperiences = [
  {
    name: 'Volubilis Olive Oil Trail',
    location: 'Near Meknes',
    icon: Award,
    duration: 'Half day (3-4 hours)',
    description:
      'Combine a visit to the Roman ruins of Volubilis with olive farm tours in the surrounding groves. Several farms on the Zerhoun hillside offer guided tastings of their estate oils, often paired with local bread, olives, and mint tea. The landscape itself is spectacular.',
  },
  {
    name: 'Ourika Valley Farm Visits',
    location: 'Near Marrakech (30 min)',
    icon: Mountain,
    duration: 'Half day (2-3 hours)',
    description:
      'The Ourika Valley southeast of Marrakech has several organic olive estates that welcome visitors. Tours typically include walking through the groves, seeing the pressing facilities, and a guided tasting of three to five oils with seasonal Moroccan dishes.',
  },
  {
    name: 'Meknes Cooperative Circuit',
    location: 'Meknes region',
    icon: Users,
    duration: 'Full day',
    description:
      'A day-long circuit visiting two to three olive cooperatives in the Meknes-Fes region. See both traditional stone-mill and modern cold-press production. Cooperatives explain their process, let you taste different grades, and sell direct at fair fixed prices. Best during harvest season.',
  },
  {
    name: 'Atlas Mountain Olive Groves',
    location: 'High Atlas foothills',
    icon: TreeDeciduous,
    duration: 'Full day',
    description:
      'Combine a day hike in the Atlas foothills with visits to mountain olive farms. These higher-altitude groves produce intensely flavored oils due to cooler nights and slower ripening. Many farms are family-run and offer intimate, unhurried experiences far from tourist crowds.',
  },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'What makes Moroccan olive oil different from other Mediterranean oils?',
    answer:
      'Moroccan olive oil is predominantly made from the Picholine Marocaine variety, producing a distinctively robust, peppery oil with high polyphenol content. The arid climate concentrates flavors and antioxidants. Many producers still use traditional stone mills (maasra), yielding a uniquely textured oil. Morocco is the 6th largest olive oil producer globally with over 1 million hectares of olive groves.',
  },
  {
    question: 'How much does olive oil cost in Morocco?',
    answer:
      'Bulk traditional olive oil at local markets starts from 40 MAD per liter. Bottled extra virgin olive oil at cooperatives costs from 80-150 MAD per liter. Premium cold-pressed oils from boutique estates range from 150-300 MAD per liter. Supermarket olive oil starts from 50 MAD per liter. Prices vary seasonally based on harvest quality and rainfall.',
  },
  {
    question: 'Where is the best olive oil region in Morocco?',
    answer:
      'The Meknes-Fes region produces roughly 30% of Morocco\'s olive oil and is widely considered the premium region. The area around Meknes, particularly near the Volubilis ruins, has ideal volcanic soil and climate. Marrakech-Safi is the second-largest producing area, followed by Beni Mellal-Khenifra and the Oriental region near Oujda.',
  },
  {
    question: 'Can I visit olive farms and oil mills in Morocco?',
    answer:
      'Yes, many olive farms and cooperatives welcome visitors, especially during harvest season from October through January. The Meknes and Marrakech regions offer organized tasting tours. Cooperatives provide guided tours showing traditional stone pressing and modern cold-press extraction, often with tastings included at no extra charge.',
  },
  {
    question: 'What is the difference between traditional and modern Moroccan olive oil?',
    answer:
      'Traditional oil is produced in stone mills (maasra) where olives are crushed with granite millstones and pressed with woven mats. The resulting oil has an intense, sometimes smoky flavor with higher acidity. Modern cold-press production uses stainless steel machinery at controlled temperatures below 27 degrees Celsius, yielding cleaner, fruitier oil with lower acidity and longer shelf life.',
  },
  {
    question: 'How can I tell if Moroccan olive oil is high quality?',
    answer:
      'High-quality oil has a green-gold color, fresh fruity or grassy aroma, and a peppery finish at the back of the throat. Acidity should be below 0.8% for extra virgin grade. Avoid oil that smells musty, tastes flat, or has a greasy mouthfeel. Look for cold-pressed labels, harvest dates, and cooperative or farm origin on the packaging.',
  },
  {
    question: 'Can I bring Moroccan olive oil home on a plane?',
    answer:
      'Yes. Bottles over 100ml must go in checked luggage due to carry-on liquid restrictions. Wrap glass bottles individually in plastic bags and cushion with clothing. Most countries allow olive oil imports for personal use without duty up to reasonable quantities. Some cooperatives and shops offer flight-friendly packaging for travelers.',
  },
  {
    question: 'When is the olive harvest season in Morocco?',
    answer:
      'The Moroccan olive harvest runs from late October through January, with peak activity in November and December. This is the best time to visit olive farms and mills, as you can watch the entire process from picking to pressing. Fresh-pressed oil (huile nouvelle) is available at markets and cooperatives during and just after the harvest.',
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
          style={{ backgroundImage: 'url(/images/photo-morocco-olive-oil.webp)' }}
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
            From ancient groves near Volubilis to modern cooperatives. Everything you need to know
            about Morocco&apos;s liquid gold: regions, varieties, production, prices, and where to buy the best.
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
                in the north to the Anti-Atlas in the south. The olive tree has been cultivated in
                Morocco for over 2,500 years, and olive oil remains a cornerstone of Moroccan cuisine,
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

      {/* -- Olive Growing Regions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Moroccan Olive Oil
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
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OilIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {oil.type}
                    </h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-20 shrink-0">Acidity:</span>
                      <span className="text-[var(--text-secondary)]">{oil.acidity}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-20 shrink-0">Flavor:</span>
                      <span className="text-[var(--text-secondary)]">{oil.flavor}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-[var(--text-primary)] w-20 shrink-0">Uses:</span>
                      <span className="text-[var(--text-secondary)]">{oil.uses}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[var(--surface-muted)] rounded-lg mb-4">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{oil.price}</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {oil.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Production Process -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Identify Quality Olive Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these six tests to evaluate olive oil quality before buying. Reputable sellers
            always allow tasting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualityTests.map((item) => {
              const TestIcon = item.icon;
              return (
                <div key={item.test} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.test}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Olive Oil Tastings and Farm Visits -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                    <span className="text-[var(--text-muted)]">{exp.duration}</span>
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
      <section className="py-16 md:py-20">
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

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
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
            <Link href="/recipes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Recipes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Cook authentic Moroccan dishes at home with step-by-step recipes and ingredient guides.
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
