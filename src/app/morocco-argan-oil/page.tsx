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
  Package,
  Truck,
  Sparkles,
  Leaf,
  Users,
  Beaker,
  Eye,
  ThermometerSun,
  Utensils,
  Plane,
  HelpCircle,
  Globe,
  Building,
  FlaskConical,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Argan Oil Guide 2026 | Buying Tips, Cooperatives & Prices',
  description:
    'The complete guide to buying authentic argan oil in Morocco. Learn the difference between cosmetic and culinary argan oil, visit women\'s cooperatives, spot fakes, and find fair prices from 80 MAD. Includes top cooperatives, health benefits, and packing tips.',
  keywords: [
    'Morocco argan oil',
    'argan oil buying guide Morocco',
    'argan oil cooperatives Morocco',
    'best argan oil Morocco',
    'cosmetic argan oil Morocco',
    'culinary argan oil Morocco',
    'argan oil prices Morocco',
    'fake argan oil',
    'women cooperatives argan oil',
    'argan oil Essaouira',
    'argan oil Souss',
    'amlou Morocco',
    'prickly pear seed oil Morocco',
    'argan oil health benefits',
    'argan oil production process',
  ],
  alternates: {
    canonical: `${BASE_URL}/morocco-argan-oil`,
  },
  openGraph: {
    title: 'Morocco Argan Oil Guide 2026 | Cooperatives, Prices & Buying Tips',
    description:
      'Everything you need to know about buying authentic argan oil in Morocco. Cosmetic vs culinary, cooperatives to visit, fair prices, and how to spot fakes.',
    url: `${BASE_URL}/morocco-argan-oil`,
    siteName: 'CityGuide Morocco',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/photo-argan-oil-stilllife.webp`,
        width: 1200,
        height: 630,
        alt: 'Bottles of authentic Moroccan argan oil with argan nuts displayed on a wooden surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Argan Oil Guide | Cooperatives, Prices & Tips',
    description:
      'Complete guide to authentic argan oil in Morocco: cosmetic vs culinary, women\'s cooperatives, price guide from 80 MAD, and how to spot fakes.',
    images: [`${BASE_URL}/images/photo-argan-oil-stilllife.webp`],
  },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-argan-oil`,
  name: 'Morocco Argan Oil Guide 2026 | Buying Tips, Cooperatives & Prices',
  description:
    'The complete guide to buying authentic argan oil in Morocco. Cooperatives, prices, cosmetic vs culinary, and how to spot fakes.',
  url: `${BASE_URL}/morocco-argan-oil`,
  image: `${BASE_URL}/images/photo-argan-oil-stilllife.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-argan-oil`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Argan Oil Guide', item: `${BASE_URL}/morocco-argan-oil` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between cosmetic and culinary argan oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cosmetic argan oil is cold-pressed from raw, unroasted argan kernels. It is light golden, nearly odorless, and absorbs quickly into skin and hair. Culinary argan oil is pressed from roasted kernels, giving it a darker amber color and a rich, nutty flavor used in Moroccan cooking. Never use culinary oil on skin or cosmetic oil in food.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does authentic argan oil cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At cooperatives, expect to pay from 80-120 MAD for 100ml of cosmetic argan oil and from 100-150 MAD for 250ml of culinary argan oil. Prickly pear seed oil is more expensive at from 200-350 MAD for 15ml due to the labor-intensive extraction. Souk prices vary widely; cooperative prices are the fairest benchmark.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if argan oil is fake or diluted?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real cosmetic argan oil absorbs into skin within 60 seconds without leaving a greasy residue. It has a very faint nutty scent, not a strong perfume. The color should be light golden, not dark or cloudy. Fake or diluted oil sits on the skin surface, feels greasy, and may have an artificial fragrance. Always buy from cooperatives or reputable pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are the best argan oil cooperatives in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best cooperatives are located between Essaouira and Agadir along the coastal road, and inland near Taroudant. Top cooperatives include Cooperative Marjana near Essaouira, Cooperative Tighanimine near Agadir, Ajddigue Cooperative in Tiznit province, and Cooperative Amal near Taroudant. All offer tours, demonstrations, and direct purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring argan oil on a plane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but bottles over 100ml must go in checked luggage due to liquid restrictions for carry-on bags. Wrap bottles in plastic bags and cushion them in clothing to prevent leaks. Most cooperatives sell travel-sized bottles under 100ml specifically for carry-on. There are no customs restrictions on argan oil in most countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is argan oil only produced in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The argan tree (Argania spinosa) grows almost exclusively in southwestern Morocco, in an area covering roughly 800,000 hectares designated as a UNESCO Biosphere Reserve. Small populations exist in parts of Algeria and Mexico, but over 95% of the world\'s argan oil is produced in Morocco, making it a truly unique Moroccan product.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is amlou and how is it used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amlou is a traditional Berber spread made from roasted almonds, argan oil, and honey. It has a texture similar to peanut butter and a rich, nutty-sweet flavor. Moroccans eat it for breakfast with bread or msemen (Moroccan pancakes). It is sold at cooperatives from 60 MAD per jar and makes an excellent edible souvenir.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does argan oil last and how should I store it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Properly stored cosmetic argan oil lasts 18-24 months. Culinary argan oil lasts 12-18 months after opening. Store both in a cool, dark place away from direct sunlight and heat. Dark glass bottles preserve quality longer than clear or plastic containers. If the oil develops a rancid smell or changes color significantly, it has expired.',
      },
    },
  ],
};

/* ===================================================================
   DATA: ARGAN OIL TYPES
   =================================================================== */

const arganOilTypes = [
  {
    type: 'Cosmetic Argan Oil',
    icon: Sparkles,
    image: '/images/photo-argan-oil-stilllife.webp',
    color: 'Light golden',
    scent: 'Very faint, nearly odorless',
    source: 'Cold-pressed from raw, unroasted kernels',
    uses: 'Skin moisturizer, hair treatment, nail strengthener, anti-aging serum',
    price: 'From 80 MAD per 100ml',
    tip: 'Should absorb into skin within 60 seconds. If it feels greasy after a minute, it is likely diluted with cheaper oils.',
  },
  {
    type: 'Culinary Argan Oil',
    icon: Utensils,
    image: '/images/photo-argan-oil-stilllife.webp',
    color: 'Dark amber to brown',
    scent: 'Rich, nutty, toasted aroma',
    source: 'Pressed from roasted kernels',
    uses: 'Salad dressings, couscous, tagines, amlou spread, bread dipping',
    price: 'From 100 MAD per 250ml',
    tip: 'Never heat culinary argan oil; drizzle it over finished dishes to preserve the delicate nutty flavor and nutritional value.',
  },
  {
    type: 'Prickly Pear Seed Oil',
    icon: Leaf,
    image: '/images/photo-argan-oil-stilllife.webp',
    color: 'Pale green-yellow',
    scent: 'Very light, herbal',
    source: 'Cold-pressed from Barbary fig seeds',
    uses: 'Premium anti-aging serum, dark circle treatment, scar fading',
    price: 'From 200 MAD per 15ml',
    tip: 'It takes roughly 1 ton of prickly pear fruit to produce 1 liter of oil, which explains the high price. Buy only at cooperatives for guaranteed purity.',
  },
] as const;

/* ===================================================================
   DATA: PRODUCTION STEPS
   =================================================================== */

const productionSteps = [
  {
    step: 1,
    title: 'Harvesting the Fruit',
    icon: Leaf,
    text: 'Argan fruit resembles a large olive and ripens between June and September. Traditionally, goats climb argan trees to eat the fruit, and the nuts are collected from their droppings. Modern cooperatives harvest directly from trees for higher hygiene standards.',
  },
  {
    step: 2,
    title: 'Drying and Cracking',
    icon: ThermometerSun,
    text: 'The pulp is removed and the hard-shelled nuts are sun-dried for several weeks. Women then crack the shells by hand using two stones, a skilled task since the argan shell is 16 times harder than a hazelnut. Each kernel is about the size of a sunflower seed.',
  },
  {
    step: 3,
    title: 'Roasting (Culinary Only)',
    icon: Utensils,
    text: 'For culinary oil, the kernels are lightly roasted over low heat to develop the characteristic nutty flavor and dark color. Cosmetic-grade kernels skip this step entirely and are pressed raw to preserve the maximum nutrients and lighter scent.',
  },
  {
    step: 4,
    title: 'Grinding and Pressing',
    icon: FlaskConical,
    text: 'Kernels are ground into a thick paste using a traditional stone mill or modern press. The paste is then kneaded by hand, gradually adding small amounts of water to separate the oil. Mechanical cold-pressing is now common at larger cooperatives for efficiency.',
  },
  {
    step: 5,
    title: 'Filtering and Bottling',
    icon: Droplets,
    text: 'The extracted oil is left to settle, then filtered to remove sediment. It takes roughly 30 kilograms of argan fruit, about 15 hours of hand labor, to produce just 1 liter of oil. This labor intensity is why authentic argan oil commands a premium price.',
  },
] as const;

/* ===================================================================
   DATA: TOP COOPERATIVES
   =================================================================== */

const topCooperatives = [
  {
    name: 'Cooperative Marjana',
    location: 'Essaouira-Agadir road (km 18)',
    region: 'Essaouira',
    icon: Award,
    members: '60+ women',
    founded: '2003',
    highlights: 'Live demonstrations, tasting room, panoramic argan forest views',
    description:
      'One of the most-visited cooperatives, Marjana offers a complete experience with guided tours showing every step of traditional argan oil production. The on-site shop sells cosmetic oil, culinary oil, amlou, and argan-based beauty products at fair cooperative prices.',
  },
  {
    name: 'Cooperative Tighanimine',
    location: 'Near Taghazout, Agadir province',
    region: 'Agadir',
    icon: Star,
    members: '50+ women',
    founded: '2007',
    highlights: 'Fair trade certified, organic certification, educational center',
    description:
      'A fair-trade-certified cooperative known for exceptionally high-quality organic argan oil. Tighanimine has won international awards for quality and sustainability. Their educational center explains the ecological importance of the argan forest and the cooperative model.',
  },
  {
    name: 'Ajddigue Cooperative',
    location: 'Tiznit province',
    region: 'Tiznit',
    icon: Users,
    members: '40+ women',
    founded: '2005',
    highlights: 'Less touristy, authentic experience, excellent prickly pear seed oil',
    description:
      'Further off the beaten path than the Essaouira-Agadir corridor cooperatives, Ajddigue offers a quieter, more intimate experience. They specialize in both argan oil and prickly pear seed oil, with some of the best prices for high-quality products due to lower tourist traffic.',
  },
  {
    name: 'Cooperative Amal',
    location: 'Near Taroudant',
    region: 'Taroudant',
    icon: Heart,
    members: '35+ women',
    founded: '2009',
    highlights: 'Traditional methods only, small-batch production, rural setting',
    description:
      'A smaller cooperative in the fertile Souss Valley near Taroudant. Amal uses exclusively traditional hand-pressing methods, producing small batches of premium oil. The rural setting offers a genuine glimpse into Berber village life and the argan oil tradition.',
  },
  {
    name: 'Cooperative Taitmatine',
    location: 'Between Essaouira and Marrakech',
    region: 'Essaouira',
    icon: Globe,
    members: '70+ women',
    founded: '2001',
    highlights: 'One of the oldest, UNESCO-recognized area, large product range',
    description:
      'Located within the UNESCO-designated Arganeraie Biosphere Reserve, Taitmatine is one of the oldest and largest cooperatives. They offer a wide range of argan products including soaps, shampoos, and cosmetics alongside traditional oils. Group tours are well-organized and informative.',
  },
  {
    name: 'Les Femmes Berberes Cooperative',
    location: 'Imsouane, Atlantic coast',
    region: 'Essaouira',
    icon: Sparkles,
    members: '25+ women',
    founded: '2012',
    highlights: 'Coastal village setting, surf town vibes, small and personal',
    description:
      'A charming small cooperative in the surf village of Imsouane. The intimate setting means you often interact directly with the women producing the oil. Combine a cooperative visit with lunch at the fishing port for a perfect half-day trip from Essaouira or Agadir.',
  },
] as const;

/* ===================================================================
   DATA: FAKE DETECTION TIPS
   =================================================================== */

const fakeDetectionTips = [
  {
    test: 'Absorption Test',
    icon: Droplets,
    real: 'Absorbs into skin within 60 seconds, leaving skin soft and non-greasy',
    fake: 'Sits on skin surface, feels greasy and slick after several minutes',
  },
  {
    test: 'Scent Test',
    icon: Leaf,
    real: 'Very faint, subtle nutty scent for cosmetic oil; rich roasted aroma for culinary',
    fake: 'Strong perfume, chemical smell, or no scent at all',
  },
  {
    test: 'Color Test',
    icon: Eye,
    real: 'Light golden (cosmetic) or dark amber (culinary); clear, not cloudy',
    fake: 'Very pale and watery, or unnaturally dark; may appear cloudy or have sediment',
  },
  {
    test: 'Price Test',
    icon: DollarSign,
    real: 'From 80 MAD per 100ml at cooperatives; lower prices are a warning sign',
    fake: 'Under 40 MAD per 100ml almost certainly indicates dilution or substitution',
  },
  {
    test: 'Packaging Test',
    icon: Package,
    real: 'Dark glass bottle with cooperative label, batch number, and ingredients list',
    fake: 'Clear plastic bottle, no label, no origin information, or generic packaging',
  },
  {
    test: 'Source Test',
    icon: ShieldCheck,
    real: 'Sold at cooperatives, reputable pharmacies, or established shops with documentation',
    fake: 'Street vendors, unmarked stalls, or sellers who refuse to let you test the oil',
  },
] as const;

/* ===================================================================
   DATA: PRICE GUIDE
   =================================================================== */

const priceGuide = [
  { product: 'Cosmetic argan oil (50ml)', cooperative: 'From 50 MAD', souk: 'From 40-100 MAD', pharmacy: 'From 60 MAD' },
  { product: 'Cosmetic argan oil (100ml)', cooperative: 'From 80 MAD', souk: 'From 60-200 MAD', pharmacy: 'From 100 MAD' },
  { product: 'Cosmetic argan oil (250ml)', cooperative: 'From 180 MAD', souk: 'From 120-400 MAD', pharmacy: 'From 220 MAD' },
  { product: 'Culinary argan oil (250ml)', cooperative: 'From 100 MAD', souk: 'From 80-250 MAD', pharmacy: 'From 130 MAD' },
  { product: 'Culinary argan oil (500ml)', cooperative: 'From 180 MAD', souk: 'From 150-450 MAD', pharmacy: 'From 230 MAD' },
  { product: 'Amlou (argan butter, 200g)', cooperative: 'From 60 MAD', souk: 'From 50-150 MAD', pharmacy: 'From 80 MAD' },
  { product: 'Prickly pear seed oil (15ml)', cooperative: 'From 200 MAD', souk: 'From 150-500 MAD', pharmacy: 'From 250 MAD' },
  { product: 'Argan oil soap (bar)', cooperative: 'From 20 MAD', souk: 'From 15-60 MAD', pharmacy: 'From 30 MAD' },
  { product: 'Argan shampoo (250ml)', cooperative: 'From 50 MAD', souk: 'From 40-120 MAD', pharmacy: 'From 70 MAD' },
] as const;

/* ===================================================================
   DATA: CULINARY USES
   =================================================================== */

const culinaryUses = [
  {
    dish: 'Amlou',
    description: 'Traditional Berber spread of roasted almonds, argan oil, and honey. Eaten with bread for breakfast or as a snack. Often called Moroccan peanut butter.',
    icon: Utensils,
  },
  {
    dish: 'Couscous Drizzle',
    description: 'A generous drizzle of culinary argan oil over steaming couscous just before serving adds a distinctive nutty richness. A hallmark of Souss Valley cuisine.',
    icon: Droplets,
  },
  {
    dish: 'Tagine Finishing Oil',
    description: 'Added as a finishing oil over lamb, chicken, or vegetable tagines after cooking. The heat releases the aroma without destroying the delicate flavor compounds.',
    icon: Utensils,
  },
  {
    dish: 'Salad Dressing',
    description: 'Mixed with lemon juice and a pinch of cumin for a uniquely Moroccan vinaigrette. Pairs exceptionally well with roasted beetroot and goat cheese salads.',
    icon: Leaf,
  },
  {
    dish: 'Bread Dipping Oil',
    description: 'Served in small dishes alongside fresh khobz (Moroccan bread) at traditional meals. Often mixed with honey or thyme for added flavor complexity.',
    icon: Heart,
  },
] as const;

/* ===================================================================
   DATA: HEALTH BENEFITS
   =================================================================== */

const healthBenefits = [
  {
    benefit: 'Rich in Vitamin E',
    icon: Heart,
    description: 'Contains nearly three times more vitamin E than olive oil, providing powerful antioxidant protection for skin cells and reducing oxidative stress.',
  },
  {
    benefit: 'Essential Fatty Acids',
    icon: Sparkles,
    description: 'High in oleic acid (omega-9) and linoleic acid (omega-6) which support heart health, reduce inflammation, and maintain the skin moisture barrier.',
  },
  {
    benefit: 'Anti-Aging Properties',
    icon: Clock,
    description: 'The combination of vitamin E, ferulic acid, and polyphenols helps reduce fine lines, improve skin elasticity, and protect against UV-induced skin aging.',
  },
  {
    benefit: 'Hair and Scalp Health',
    icon: Droplets,
    description: 'Penetrates the hair shaft to reduce breakage and frizz, adds shine, and soothes dry or flaky scalp conditions. Used as an overnight treatment or leave-in conditioner.',
  },
  {
    benefit: 'Cardiovascular Support',
    icon: CheckCircle,
    description: 'Studies suggest culinary argan oil may help lower LDL cholesterol and triglycerides while raising HDL cholesterol, supporting overall cardiovascular health.',
  },
  {
    benefit: 'Anti-Inflammatory',
    icon: ShieldCheck,
    description: 'The triterpenoids and polyphenols in argan oil have demonstrated anti-inflammatory effects, beneficial for conditions like eczema, psoriasis, and joint discomfort.',
  },
] as const;

/* ===================================================================
   DATA: PACKING TIPS
   =================================================================== */

const packingTips = [
  {
    tip: 'Carry-on bottles must be under 100ml; larger bottles go in checked luggage only',
    icon: Plane,
  },
  {
    tip: 'Double-bag each bottle in zip-lock plastic bags to prevent leak damage to clothing',
    icon: Package,
  },
  {
    tip: 'Wrap bottles in socks or scarves for cushioning inside your suitcase',
    icon: ShieldCheck,
  },
  {
    tip: 'Ask cooperatives for travel-sized bottles specifically designed for carry-on',
    icon: ShoppingBag,
  },
  {
    tip: 'Secure caps with tape to prevent accidental opening during transit pressure changes',
    icon: CheckCircle,
  },
  {
    tip: 'Most countries have no customs restrictions on argan oil; declare it if unsure',
    icon: Globe,
  },
] as const;

/* ===================================================================
   DATA: FAQ
   =================================================================== */

const faqs = [
  {
    question: 'What is the difference between cosmetic and culinary argan oil?',
    answer:
      'Cosmetic argan oil is cold-pressed from raw, unroasted kernels. It is light golden, nearly odorless, and designed for skin and hair use. Culinary argan oil is pressed from roasted kernels, which gives it a dark amber color and a rich, nutty flavor for cooking. Never use culinary oil on skin (it can clog pores) or cosmetic oil in food (it lacks the roasted flavor).',
  },
  {
    question: 'How much does authentic argan oil cost in Morocco?',
    answer:
      'At cooperatives, expect to pay from 80-120 MAD for 100ml of cosmetic argan oil and from 100-150 MAD for 250ml of culinary oil. Souk prices vary wildly from 60-400 MAD for the same amount. Prickly pear seed oil costs from 200-350 MAD for just 15ml. Cooperative prices are the most reliable benchmark for fair value.',
  },
  {
    question: 'How can I tell if argan oil is fake or diluted?',
    answer:
      'Apply a drop to the back of your hand. Real cosmetic argan oil absorbs within 60 seconds without greasiness. It has a very faint nutty scent, not a strong perfume. The color should be light golden and clear. If it sits greasy on your skin, smells like chemicals or perfume, or is sold in clear plastic bottles without labels, it is likely fake or heavily diluted.',
  },
  {
    question: 'Where are the best argan oil cooperatives to visit?',
    answer:
      'The best cooperatives are along the Essaouira-Agadir road and near Taroudant in the Souss Valley. Top picks include Cooperative Marjana (near Essaouira), Tighanimine (near Agadir, fair-trade certified), Ajddigue (Tiznit, excellent prickly pear oil), and Cooperative Amal (Taroudant, traditional methods). All offer free tours and demonstrations.',
  },
  {
    question: 'Can I bring argan oil on a plane back home?',
    answer:
      'Yes. Bottles under 100ml can go in your carry-on liquid bag. Larger bottles must be packed in checked luggage. Wrap bottles in plastic bags and cushion with clothing. Most countries have no restrictions on importing argan oil. Cooperatives often sell convenient travel-sized bottles specifically for air travel.',
  },
  {
    question: 'Is argan oil only produced in Morocco?',
    answer:
      'The argan tree grows almost exclusively in southwestern Morocco in an area of roughly 800,000 hectares protected as a UNESCO Biosphere Reserve. While small populations exist in parts of Algeria, over 95% of the world\'s argan oil comes from Morocco. This geographic exclusivity is what makes Moroccan argan oil so special and valuable.',
  },
  {
    question: 'What is amlou and where can I buy it?',
    answer:
      'Amlou is a traditional Berber spread made from roasted almonds, culinary argan oil, and honey. It has a rich, nutty-sweet flavor and a texture similar to peanut butter. Moroccans eat it with bread for breakfast. Buy it at any argan cooperative from 60 MAD per jar, or at food souks in Essaouira, Taroudant, and Agadir.',
  },
  {
    question: 'How long does argan oil last and how should I store it?',
    answer:
      'Cosmetic argan oil lasts 18-24 months; culinary oil lasts 12-18 months after opening. Store in a cool, dark place away from sunlight and heat. Dark glass bottles preserve quality best. If the oil develops a rancid smell, changes color significantly, or tastes off, it has expired and should be discarded.',
  },
] as const;

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoArganOilPage() {
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
          style={{ backgroundImage: 'url(/images/photo-argan-oil-stilllife.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Argan Oil Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Argan Oil &amp; Beauty
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Argan Oil:
            <br className="hidden md:block" /> The Complete Buying Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From women&apos;s cooperatives to souk stalls. Everything you need to know about buying
            authentic argan oil in Morocco with real prices, quality tests, and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction: What Is Argan Oil -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is Argan Oil?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Argan oil, often called &quot;liquid gold,&quot; is one of the rarest and most
                valuable plant oils in the world. It is extracted from the kernels of the argan
                tree (<em>Argania spinosa</em>), a species that grows almost exclusively in the
                semi-arid Souss Valley and coastal regions of southwestern Morocco. The argan
                forest covers roughly 800,000 hectares and has been designated a UNESCO Biosphere
                Reserve since 1998, recognizing both its ecological importance and the cultural
                heritage of the Berber communities who have used it for centuries.
              </p>
              <p>
                For generations, Berber women have hand-cracked the rock-hard argan nuts and
                pressed them into oil for cooking, skin care, and traditional medicine. Today,
                argan oil has become a global beauty ingredient, but the best and most authentic
                oil is still found right at its source: the women&apos;s cooperatives of Morocco.
                Buying argan oil at a cooperative means getting guaranteed purity, supporting
                female employment, and paying a fair price without the tourist markup of souk
                stalls and airport shops.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                <Info className="w-4 h-4 inline mr-1" />
                All prices listed are starting prices at cooperatives. Seasonal pricing applies
                during peak tourist months (October-April) when prices at souks and shops may
                run 10-20% higher due to increased demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Cosmetic vs Culinary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Beaker className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cosmetic vs Culinary vs Prickly Pear
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all argan oil is the same. Understanding the three main types ensures you buy
            the right product for your needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {arganOilTypes.map((oil) => {
              const OilIcon = oil.icon;
              return (
                <div key={oil.type} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={oil.image}
                      alt={`${oil.type} - authentic Moroccan argan product`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2">
                        <OilIcon className="w-5 h-5 text-white" />
                        <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-white">
                          {oil.type}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-[var(--text-primary)] w-16 shrink-0">Color:</span>
                        <span className="text-[var(--text-secondary)]">{oil.color}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-[var(--text-primary)] w-16 shrink-0">Scent:</span>
                        <span className="text-[var(--text-secondary)]">{oil.scent}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-[var(--text-primary)] w-16 shrink-0">Uses:</span>
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
            How Argan Oil Is Made
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From tree to bottle, the traditional production process explains why authentic argan
            oil is so labor-intensive and valuable.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {productionSteps.map((step) => {
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

      {/* -- Women's Cooperatives -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Women&apos;s Cooperatives to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Buying directly from cooperatives guarantees authenticity, fair pricing, and directly
            supports the women who produce this remarkable oil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {topCooperatives.map((coop) => {
              const CoopIcon = coop.icon;
              return (
                <div key={coop.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CoopIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {coop.name}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{coop.region}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{coop.description}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                      <span className="text-[var(--text-muted)]">{coop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Users className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" />
                      <span className="text-[var(--text-muted)]">{coop.members}</span>
                    </div>
                  </div>
                  <span className="inline-block text-xs font-semibold text-[var(--color-accent)] px-2 py-0.5 bg-[var(--color-accent)]/10 rounded">
                    Est. {coop.founded}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Why Buy From Cooperatives?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Guaranteed pure, undiluted argan oil with full traceability</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Fair fixed prices without the need for bargaining</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Income goes directly to women workers, supporting education and healthcare</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-xs text-[var(--text-secondary)]">Live demonstrations show the production process from nut to oil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- How to Spot Fake Argan Oil -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Spot Fake Argan Oil
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Unfortunately, diluted and fake argan oil is common in tourist areas. Use these six
            tests to verify authenticity before buying.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {fakeDetectionTips.map((item) => {
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
                        <span className="font-semibold text-green-700">Real:</span> {item.real}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-red-600">Fake:</span> {item.fake}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Argan Oil Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fair prices vary by where you buy. Cooperatives offer the best value and guaranteed quality.
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
                      <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Pharmacy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceGuide.map((row, i) => (
                      <tr key={row.product} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                        <td className="p-4 text-[var(--text-primary)] font-medium">{row.product}</td>
                        <td className="p-4 text-[var(--color-accent)] font-semibold">{row.cooperative}</td>
                        <td className="p-4 text-[var(--text-muted)]">{row.souk}</td>
                        <td className="p-4 text-[var(--text-secondary)]">{row.pharmacy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              Prices are starting prices and may vary seasonally. Souk prices require bargaining;
              cooperative and pharmacy prices are typically fixed.
            </p>
          </div>
        </div>
      </section>

      {/* -- Argan Oil in Moroccan Cuisine -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Argan Oil in Moroccan Cuisine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Culinary argan oil is a cornerstone of Souss Valley cooking. Here are the most popular
            traditional uses you can recreate at home.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Beauty Benefits
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Science-backed reasons why argan oil has earned its &quot;liquid gold&quot; reputation.
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
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.benefit}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Packing and Transport -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing &amp; Taking Argan Oil Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these tips to safely transport your argan oil purchases without spills or
            confiscation at airport security.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packingTips.map((item) => {
                  const TipIcon = item.icon;
                  return (
                    <div key={item.tip} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <TipIcon className="w-4 h-4 text-[var(--color-accent)]" />
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Where to Buy Beyond Cooperatives -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy Authentic Argan Oil
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Women&apos;s Cooperatives
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                The gold standard for authenticity. Cooperatives between Essaouira and Agadir offer
                guided tours, live demonstrations, and direct purchasing at fixed fair prices. No
                bargaining required. Income supports women&apos;s education and healthcare programs.
              </p>
              <span className="inline-block text-xs font-semibold text-green-700 px-2 py-0.5 bg-green-50 rounded">
                Best for: Guaranteed purity and fair prices
              </span>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Pharmacies &amp; Herboristeries
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Moroccan pharmacies (both modern and traditional herboristeries) sell argan oil at
                fixed prices. Quality is generally reliable, especially at established pharmacies in
                cities like Essaouira, Agadir, and Marrakech. Look for bottles with ingredient labels
                and batch numbers.
              </p>
              <span className="inline-block text-xs font-semibold text-blue-700 px-2 py-0.5 bg-blue-50 rounded">
                Best for: Convenience in cities
              </span>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Souks &amp; Markets
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Souks in Essaouira, Marrakech, and Agadir sell argan oil, but quality varies widely.
                Always test the oil on your skin before buying. Prices require bargaining. Be cautious
                of street vendors selling from unmarked plastic bottles. Established spice and beauty
                shops within the medina are more trustworthy than roadside stalls.
              </p>
              <span className="inline-block text-xs font-semibold text-amber-700 px-2 py-0.5 bg-amber-50 rounded">
                Best for: Bargain hunters who know what to look for
              </span>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-red-700 mb-1">Avoid: Airport and Hotel Shops</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Airport duty-free and hotel gift shops charge 3-5 times cooperative prices
                    for the same or lower quality. The &quot;luxury&quot; packaging does not mean
                    better oil. Buy at cooperatives or pharmacies and pack it in your luggage instead.
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
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/what-to-buy-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShoppingBag className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Buy in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The 11 best souvenirs from Morocco with real prices, quality tips, and where to shop by city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Shopping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth shopping guide with price reference tables, customs limits, and bargaining strategies.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/crafts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Crafts
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore centuries of Moroccan artisan tradition from zellige tiles to brass lanterns.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/wellness" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Wellness Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hammams, spas, and traditional beauty treatments across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-souk-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Souk Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate Morocco&apos;s famous markets with confidence. Etiquette, maps, and tips.
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
