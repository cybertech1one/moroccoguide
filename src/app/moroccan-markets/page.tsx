import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Store,
  MapPin,
  Coins,
  ShieldCheck,
  Sparkles,
  Package,
  HandCoins,
  Gem,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Eye,
  Layers,
  Award,
  Clock,
  Star,
  Camera,
  Compass,
  ShoppingBag,
  Scale,
  MessageCircle,
  Sun,
  Moon,
  Shield,
  Users,
  Heart,
  BookOpen,
  Scissors,
  Palette,
  Info,
  ThumbsUp,
  Navigation,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/moroccan-markets`;

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Markets & Souks Guide 2025-2026 | Top 10 Souks, Bargaining Tips & Prices | CityGuide',
  description:
    'Complete guide to Morocco\'s best markets and souks. Discover the top 10 souks from Marrakech to Tiznit, learn bargaining strategies, know what to buy with real prices in MAD, avoid scams, and find the best crafts from leather goods to Berber rugs. Practical advice for tourists and residents.',
  keywords: [
    'Morocco markets',
    'Morocco souks guide',
    'Marrakech souk',
    'Fes medina shopping',
    'bargaining Morocco',
    'haggling tips Morocco',
    'what to buy Morocco',
    'Moroccan leather goods',
    'Berber rugs price',
    'Moroccan spices market',
    'argan oil Morocco',
    'Moroccan ceramics',
    'Chefchaouen market',
    'Essaouira souk',
    'Tangier market',
    'souk scams Morocco',
    'Moroccan crafts',
    'Moroccan lanterns price',
    'weekly souks Morocco',
    'rural markets Morocco',
  ],
  openGraph: {
    title: 'Morocco Markets & Souks Guide - CityGuide',
    description:
      'Discover the top 10 souks in Morocco. Bargaining strategies, what to buy with prices, scam avoidance, and expert shopping tips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-souk-lamps.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful brass lanterns hanging in a Moroccan souk passageway',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
};

/* ===================================================================
   JSON-LD
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Morocco Markets & Souks Guide',
  description:
    'Complete guide to Morocco\'s best markets, souks, and shopping. Top 10 souks, bargaining strategies, what to buy, scam avoidance, and prices in MAD.',
  url: PAGE_URL,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Moroccan Markets', item: PAGE_URL },
    ],
  },
};

/* ===================================================================
   DATA: TOP SOUKS
   =================================================================== */

const topSouks = [
  {
    rank: 1,
    name: 'Marrakech Medina Souks',
    city: 'Marrakech',
    image: '/images/hero-souk-lamps.webp',
    description:
      'The most famous souks in the world. A labyrinthine network of covered alleys radiating from Jemaa el-Fnaa square, organized by trade: Souk Semmarine (textiles, clothing), Souk des Teinturiers (dyers), Souk Haddadine (metalwork), Souk Chouari (woodwork), Souk Attarine (spices). Over 3,000 shops in a space that has not changed fundamentally in centuries.',
    whatToBuy: ['Leather goods (bags, belts, babouche slippers)', 'Berber rugs and carpets', 'Brass lanterns and metalwork', 'Spices and ras el hanout', 'Argan oil products'],
    priceRange: 'Budget to high-end. Start haggling at 30-40% of asking price.',
    bestTime: 'Morning (9-11 AM) for fewer crowds. Avoid midday heat.',
    tip: 'The deeper you go into the souk, the better the prices. Tourist-facing stalls near Jemaa el-Fnaa charge 2-3x more.',
  },
  {
    rank: 2,
    name: 'Fes El Bali (Old Medina)',
    city: 'Fes',
    image: '/images/art-fes-souk-painting.webp',
    description:
      'The world\'s largest car-free urban zone and a UNESCO World Heritage Site. Fes el Bali has over 9,000 alleys and is home to the most authentic artisan traditions in Morocco. The tanneries, pottery workshops, and brass workshops here have operated for centuries using the same techniques. Less touristic than Marrakech, with more genuine interactions and better prices.',
    whatToBuy: ['Fes blue ceramics and pottery', 'Leather from the famous tanneries', 'Brass and copper work', 'Embroidered textiles', 'Traditional Fassi sweets'],
    priceRange: 'Generally 20-30% cheaper than Marrakech for similar items.',
    bestTime: 'Morning (9-12). The medina is quieter and artisans are at work.',
    tip: 'Visit the Chouara Tannery from a leather shop rooftop (they will try to sell you leather, but you are not obligated to buy). The blue ceramics from Fes are genuinely world-class.',
  },
  {
    rank: 3,
    name: 'Chefchaouen Medina',
    city: 'Chefchaouen',
    image: '/images/hero-chefchaouen-blue.webp',
    description:
      'The blue-washed medina of Chefchaouen is one of the most photogenic shopping experiences in Morocco. Smaller and easier to navigate than Marrakech or Fes, with a relaxed, bohemian atmosphere. The town is known for woven blankets, goat cheese, and kif-related souvenirs (decorative, since cannabis is technically illegal). Artists and craftspeople give the town a creative energy.',
    whatToBuy: ['Woven blankets and textiles (Rif tradition)', 'Handmade leather goods', 'Local goat cheese (jben)', 'Paintings and photography', 'Handwoven baskets'],
    priceRange: 'Moderate. Less aggressive haggling than Marrakech.',
    bestTime: 'Late afternoon when the blue walls glow in golden light.',
    tip: 'Prices are already fairer here. Haggling is expected but the starting prices are more reasonable than in Marrakech.',
  },
  {
    rank: 4,
    name: 'Essaouira Medina',
    city: 'Essaouira',
    image: '/images/hero-essaouira.webp',
    description:
      'A UNESCO-listed medina with a more laid-back, artistic vibe. Essaouira is known for its thuya wood craftsmanship (a fragrant cedar-like wood unique to the region), art galleries, silver jewelry, and a thriving surfwear scene. The grid-like medina is easy to navigate. Argan oil cooperatives are nearby and offer the best prices for pure argan products.',
    whatToBuy: ['Thuya wood boxes and furniture', 'Silver Berber jewelry', 'Argan oil (food and cosmetic grades)', 'Art and photography', 'Surf gear and beachwear'],
    priceRange: 'Fair. Essaouira merchants are generally less pushy.',
    bestTime: 'Any time. The medina is compact and pleasant year-round.',
    tip: 'Buy argan oil from the women\'s cooperatives outside town for guaranteed quality and fair-trade practices. The Skala de la Ville has the best thuya wood workshops.',
  },
  {
    rank: 5,
    name: 'Tangier Grand Socco & Medina',
    city: 'Tangier',
    image: '/images/hero-tangier-kasbah.webp',
    description:
      'Tangier\'s market scene blends Moroccan, Spanish, and international influences. The Grand Socco (large market square) is the gateway to the medina, while the Petit Socco inside is the heart of the old city. The medina is smaller and easier to navigate. Tangier has been a cosmopolitan trading port for centuries, and its markets reflect that diversity.',
    whatToBuy: ['Moroccan-Spanish leather goods', 'Antiques and vintage items', 'Spices and preserved foods', 'Embroidered kaftans', 'French-Moroccan homeware'],
    priceRange: 'Moderate. Less tourist markup than Marrakech.',
    bestTime: 'Morning for the produce market at Grand Socco.',
    tip: 'The medina has several excellent antique shops. Tangier\'s proximity to Europe means interesting vintage finds from the international zone era.',
  },
  {
    rank: 6,
    name: 'Rabat Medina & Les Oudaias',
    city: 'Rabat',
    image: '/images/hero-festival-morocco.webp',
    description:
      'The capital\'s medina is clean, well-organized, and refreshingly low-pressure. Rue des Consuls is the main shopping street with fixed-price craft shops alongside traditional souks. The carpet cooperative here has government-set prices, making it a stress-free place to buy Moroccan rugs. The Kasbah des Oudaias artisan quarter has upscale boutiques.',
    whatToBuy: ['Carpets and rugs (government-priced cooperative)', 'Embroidered textiles', 'Pottery and ceramics', 'Traditional musical instruments', 'Books and prints'],
    priceRange: 'Fair to fixed. Less haggling needed than other cities.',
    bestTime: 'Any time. The medina is calm and pleasant.',
    tip: 'If carpet shopping intimidates you, start in Rabat. The cooperative has transparent pricing -- you can learn what rugs should cost before visiting Marrakech or Fes.',
  },
  {
    rank: 7,
    name: 'Meknes Medina',
    city: 'Meknes',
    image: '/images/hero-festival-morocco.webp',
    description:
      'Often overlooked by tourists, which makes it one of the best places for authentic, unpressured shopping. The medina has excellent craftsmen, especially in damascene metalwork (gold and silver inlay on steel). Prices are significantly lower than Marrakech and Fes. The food souk near Place el-Hedim is outstanding.',
    whatToBuy: ['Damascene metalwork (unique to Meknes)', 'Embroidered fabrics', 'Olive oil and olives (Meknes region is Morocco\'s olive capital)', 'Traditional clothing', 'Pottery'],
    priceRange: 'Very affordable. Locals shop here, not tourists.',
    bestTime: 'Morning for the best atmosphere.',
    tip: 'Meknes is the most "real" shopping experience in Morocco. Prices are what locals pay. The damascene work makes a unique, lightweight souvenir.',
  },
  {
    rank: 8,
    name: 'Tetouan Medina',
    city: 'Tetouan',
    image: '/images/hero-festival-morocco.webp',
    description:
      'A UNESCO World Heritage medina with distinct Andalusian-Moroccan character. Tetouan was a refuge for Muslims and Jews expelled from Spain in the 15th century, and its architecture and crafts reflect that heritage. The medina is less touristic, with genuine artisan workshops. Excellent for textiles and embroidery.',
    whatToBuy: ['Tetouan embroidery (distinct from other Moroccan styles)', 'Leather goods', 'Ceramics', 'Textiles and fabrics', 'Traditional Andalusian-style items'],
    priceRange: 'Very affordable. Few tourist markups.',
    bestTime: 'Morning hours.',
    tip: 'The Artisan School (Ecole des Arts et Metiers) is open to visitors and sells student-made crafts at excellent prices.',
  },
  {
    rank: 9,
    name: 'Taroudant Souks',
    city: 'Taroudant',
    image: '/images/hero-festival-morocco.webp',
    description:
      'Often called "little Marrakech" but with a fraction of the tourists. Taroudant\'s twin souks -- the Arab Souk and the Berber Souk -- offer excellent leather goods, Berber jewelry, saffron, and argan products at local prices. The town is surrounded by argan forests and is close to the source for many products.',
    whatToBuy: ['Berber silver jewelry', 'Leather sandals and bags', 'Saffron (excellent quality)', 'Argan oil', 'Dried fruits and nuts'],
    priceRange: 'Very affordable. Local market prices.',
    bestTime: 'Thursday (weekly souk day) is the most vibrant.',
    tip: 'Taroudant is where Moroccan traders from Marrakech come to buy stock. That tells you everything about the prices.',
  },
  {
    rank: 10,
    name: 'Tiznit Silver Souk',
    city: 'Tiznit',
    image: '/images/photo-moroccan-jewelry.webp',
    description:
      'Tiznit is the silver capital of Morocco. The town has been the center of Berber silver jewelry making for centuries. The jewelry souk has dozens of silversmiths producing traditional Amazigh designs -- fibulas, bracelets, necklaces, and rings with coral, amber, and enamel. If you want authentic Berber silver jewelry, this is the source.',
    whatToBuy: ['Silver Berber jewelry (the specialty)', 'Coral and amber jewelry', 'Silver teapots and household items', 'Leather goods', 'Honey and local produce'],
    priceRange: 'Excellent value for silver. Direct from makers.',
    bestTime: 'Any day. Thursday weekly souk adds rural vendors.',
    tip: 'Learn to distinguish real silver (stamped with purity marks) from cheaper alloys. The best shops will explain the tradition behind each design.',
  },
];

/* ===================================================================
   DATA: WHAT TO BUY
   =================================================================== */

const whatToBuy = [
  {
    item: 'Berber Rugs & Carpets',
    icon: Layers,
    priceRange: '500-8,000+ MAD',
    description: 'Hand-knotted or hand-woven by Berber women, each rug tells a story through its patterns. Beni Ourain rugs (white with black geometric patterns) are the most sought-after internationally. Azilal and Boujaad rugs feature colorful abstract designs. A genuine hand-made rug takes 2-6 months to produce.',
    buyingTips: 'Ask about the weaving origin (tribe/region). Check the back -- hand-knotted rugs show the pattern on both sides. Price depends on size, knot density, age, and materials. Wool rugs are standard; silk adds cost.',
    bestIn: 'Fes, Marrakech, Rabat (carpet cooperative)',
  },
  {
    item: 'Leather Goods',
    icon: ShoppingBag,
    priceRange: 'from 50 MAD',
    description: 'Morocco is famous for its leather, especially from the ancient tanneries of Fes. Bags, wallets, belts, babouche slippers, and poufs are the most popular items. Moroccan leather is traditionally vegetable-tanned using plant-based dyes, though some modern workshops use chemical processes.',
    buyingTips: 'Smell the leather -- strong chemical smell means chrome-tanned (lower quality). Vegetable-tanned leather has a subtle, pleasant smell. Check stitching quality. Babouche slippers should fit snugly as they stretch.',
    bestIn: 'Fes (tanneries), Marrakech, Taroudant',
  },
  {
    item: 'Ceramics & Pottery',
    icon: Palette,
    priceRange: 'from 30 MAD',
    description: 'Fes is the ceramic capital, famous for its blue-and-white zellige patterns. Safi produces colorful painted ceramics. Each city has its own style and color palette. Handmade ceramics are painted by artisans using traditional geometric and floral patterns.',
    buyingTips: 'Handmade ceramics have slight imperfections -- that is the point. Machine-made items are perfectly uniform. Ask to see the workshop if possible. Fes blue ceramics are the most refined; Safi ceramics are more rustic and colorful.',
    bestIn: 'Fes (blue ceramics), Safi (painted pottery), Marrakech',
  },
  {
    item: 'Spices',
    icon: Sparkles,
    priceRange: 'from 10 MAD per bag',
    description: 'Ras el hanout (the "head of the shop" spice blend), saffron, cumin, paprika, preserved lemons, and harissa. Moroccan saffron from Taliouine is world-class. Each spice merchant blends their own proprietary ras el hanout with 20-35 ingredients.',
    buyingTips: 'Buy from reputable shops with high turnover (fresh stock). Saffron should have deep red threads with no yellow stamens. Cheap saffron is likely safflower (a common substitute). Sealed packages travel better than loose.',
    bestIn: 'Fes (Souk Attarine), Marrakech (Rahba Kedima), Taliouine (saffron)',
  },
  {
    item: 'Argan Oil',
    icon: Heart,
    priceRange: 'from 100 MAD per liter (cosmetic) / from 150 MAD per liter (culinary)',
    description: 'Morocco is the world\'s only source of argan oil, pressed from the nuts of the argan tree found only in the Souss region. Cosmetic-grade argan oil is cold-pressed from raw nuts and is lighter; culinary-grade comes from roasted nuts and has a rich, nutty flavor.',
    buyingTips: 'Buy from women\'s cooperatives for guaranteed authenticity and fair pricing. Real argan oil is not cheap -- suspiciously low prices mean it is cut with other oils. Cosmetic grade should be nearly odorless; culinary grade has a strong nutty aroma.',
    bestIn: 'Essaouira cooperatives, Agadir region, Taroudant',
  },
  {
    item: 'Brass Lanterns & Metalwork',
    icon: Star,
    priceRange: 'from 100 MAD',
    description: 'Intricately pierced brass and copper lanterns that cast mesmerizing shadow patterns. Also available: tea sets, trays, mirrors, and door knockers. The metalwork is done by hand using centuries-old techniques -- hammering, piercing, and engraving.',
    buyingTips: 'Quality varies enormously. Better lanterns have finer, more intricate piercing. Ask if it is brass (heavier, warmer color) or tin-plated steel (lighter, cheaper). Larger lanterns can be shipped by the shop.',
    bestIn: 'Marrakech (Souk Haddadine), Fes',
  },
  {
    item: 'Silver Jewelry',
    icon: Gem,
    priceRange: 'from 50 MAD',
    description: 'Berber silver jewelry carries deep cultural significance. Traditional pieces include fibulas (cloak pins), hand of Fatima pendants, stacking bracelets, and ornate rings. Designs feature geometric Amazigh symbols, coral, amber, and enamel inlay.',
    buyingTips: 'Real silver is stamped with purity marks. Ask the weight -- silver is priced by weight plus craftsmanship. Antique pieces command higher prices but are rarer. Tiznit is the best source for authentic Berber silver.',
    bestIn: 'Tiznit, Essaouira, Taroudant',
  },
];

/* ===================================================================
   DATA: BARGAINING GUIDE
   =================================================================== */

const bargainingSteps = [
  { step: 1, title: 'Browse without buying', detail: 'Walk through the souk first without stopping. Get a feel for prices and what is available. Never show immediate interest in something you want.' },
  { step: 2, title: 'Ask the price casually', detail: 'When you find something interesting, ask "Bshhal?" (How much?). The first price is always the "tourist price" -- typically 2-4x the fair price. Show no reaction.' },
  { step: 3, title: 'Counter at 30-40%', detail: 'Make your first counter-offer at about 30-40% of the asking price. This is not insulting -- it is expected and part of the social ritual. The merchant may act shocked -- this is theater.' },
  { step: 4, title: 'Negotiate gradually', detail: 'Move up in small increments (from 10 MAD at a time). The merchant will come down. Meet somewhere around 50-60% of the original asking price. Both parties should feel satisfied.' },
  { step: 5, title: 'Be ready to walk away', detail: 'The most powerful tool. If you cannot agree on a price, politely thank them and start walking. If the price is fair for them, they will call you back. If not, you were probably close to their real bottom.' },
  { step: 6, title: 'Seal with a smile', detail: 'Once you agree on a price, shake hands and pay without trying to renegotiate. The deal is made. Chat, drink tea together if offered. You have made a connection, not just a purchase.' },
];

/* ===================================================================
   DATA: SCAM AWARENESS
   =================================================================== */

const commonScams = [
  { scam: 'Unsolicited guides', detail: 'Someone offers to "show you the way" through the medina, then demands payment. Politely decline: "La, shukran" (No, thank you). If lost, ask a shopkeeper for directions instead.' },
  { scam: 'Tannery rooftop bait', detail: 'In Fes, someone leads you to a tannery rooftop view, then pressures you into buying leather. The view is worth seeing, but you are under no obligation to buy. State this clearly upfront.' },
  { scam: 'Fake quality claims', detail: 'Items described as "pure silver" may be alloy, "100% argan oil" may be diluted, "antique" rugs may be new with artificial aging. Buy from reputable shops and cooperatives.' },
  { scam: 'The "my shop is closing" trick', detail: 'A merchant claims they are closing and offers a "special" last-minute price. This creates false urgency. The shop will be open tomorrow. Walk away and return if interested.' },
  { scam: 'Bait and switch', detail: 'You agree on a specific item, but a different (inferior) version gets wrapped up. Always watch the item being wrapped and check before paying.' },
  { scam: 'Calculator manipulation', detail: 'When using a calculator to negotiate, some merchants "accidentally" add a zero. Always double-check the numbers yourself. Bring your phone calculator.' },
];

/* ===================================================================
   DATA: MARKET TYPES
   =================================================================== */

const marketTypes = [
  {
    type: 'Daily Souks (Medina Markets)',
    description: 'Permanent covered markets in every medina, organized by trade. These are the classic souks tourists visit. Open every day, usually 9 AM to 7 PM, closed for Friday midday prayer.',
    examples: 'Marrakech medina, Fes el Bali, Tangier medina',
  },
  {
    type: 'Weekly Rural Souks',
    description: 'Once-a-week markets in towns and villages where farmers, herders, and traders gather. Named by the day they operate (Souk el-Arba = Wednesday market, Souk el-Khamis = Thursday market). The most authentic Moroccan market experience -- far from the tourist trail.',
    examples: 'Souk el-Had (Sunday) Agadir, Souk Sebt Oulad Nemma (Saturday)',
  },
  {
    type: 'Spice Markets',
    description: 'Specialized sections within larger souks dedicated to spices, herbs, dried flowers, and traditional remedies. The merchants often double as traditional herbalists offering remedies for everything from headaches to lovesickness.',
    examples: 'Rahba Kedima (Marrakech), Souk Attarine (Fes)',
  },
  {
    type: 'Leather Markets',
    description: 'Areas near or connected to tanneries where finished leather goods are sold. The Chouara Tannery district in Fes is the most famous. Marrakech\'s leather souk near Bab Debbagh is another major center.',
    examples: 'Chouara Tannery area (Fes), Souk des Teinturiers (Marrakech)',
  },
  {
    type: 'Carpet Markets',
    description: 'Dedicated shops and market areas for Moroccan rugs and carpets. Some operate as cooperatives with fixed prices; others require negotiation. Carpet merchants are Morocco\'s most skilled salespeople -- be prepared for mint tea and a long presentation.',
    examples: 'Criee Berbere (Marrakech), Carpet cooperative (Rabat)',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccanMarketsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Moroccan Markets</li>
        </ol>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-souk-lamps.webp"
            alt="Colorful brass lanterns and lamps hanging in a Moroccan souk passageway"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Shopping &amp; Culture
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco&apos;s Best Markets &amp; Souks
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the legendary labyrinth of Marrakech&apos;s medina to the silver workshops of Tiznit, Morocco&apos;s
              souks are where centuries of craft tradition meet the art of negotiation. Your complete guide to
              shopping smart with prices in MAD.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ============================================================
          QUICK STATS
          ============================================================ */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Store, label: 'Souks Ranked', value: '10' },
            { icon: HandCoins, label: 'Fair Price Target', value: '50-60% of ask' },
            { icon: ShoppingBag, label: 'Products Covered', value: '7 Categories' },
            { icon: Shield, label: 'Scams Listed', value: '6 to Avoid' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          TOP 10 SOUKS
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Ranked &amp; Reviewed</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top 10 Souks in Morocco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ranked by quality of crafts, authenticity, value for money, and overall experience.
            Each offers something unique worth the visit.
          </p>
        </div>

        <div className="space-y-8">
          {topSouks.map((souk) => (
            <div
              key={souk.rank}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img
                    src={souk.image}
                    alt={`${souk.name} in ${souk.city}, Morocco`}
                    loading="lazy"
                    className="w-full h-56 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#A0522D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {souk.rank}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {souk.city}
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-3">
                    {souk.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{souk.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">What to buy:</h4>
                    <div className="flex flex-wrap gap-2">
                      {souk.whatToBuy.map((item) => (
                        <span key={item} className="px-2 py-1 bg-[#FAF8F5] rounded-full text-xs text-gray-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Prices</p>
                      <p className="text-xs font-medium text-gray-800">{souk.priceRange}</p>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Best time</p>
                      <p className="text-xs font-medium text-gray-800">{souk.bestTime}</p>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Pro tip</p>
                      <p className="text-xs font-medium text-[#A0522D]">{souk.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          WHAT TO BUY
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Shopping Guide</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Buy in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the products Morocco is genuinely world-class at producing. Real prices in MAD
              and expert buying tips so you get quality and value.
            </p>
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { src: '/images/photo-moroccan-souks.webp', alt: 'Colorful Moroccan souk with textiles and crafts' },
              { src: '/images/photo-spice-souk-display.webp', alt: 'Vibrant spice display at a Moroccan market' },
              { src: '/images/photo-moroccan-leather.webp', alt: 'Moroccan leather goods and babouche slippers' },
              { src: '/images/photo-moroccan-jewelry.webp', alt: 'Traditional Berber silver jewelry from Morocco' },
              { src: '/images/card-souk.webp', alt: 'Busy Moroccan souk marketplace' },
              { src: '/images/card-lanterns.webp', alt: 'Ornate Moroccan brass lanterns' },
              { src: '/images/art-fes-souk-painting.webp', alt: 'Watercolor painting of a Fes souk scene' },
              { src: '/images/photo-ceramics-pottery.webp', alt: 'Hand-painted Moroccan ceramics and pottery' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {whatToBuy.map((product) => (
              <div key={product.item} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{product.item}</h3>
                      <span className="text-sm font-medium text-[#C4960C]">{product.priceRange}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{product.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-[#FAF8F5] rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Buying Tips:</p>
                        <p className="text-xs text-gray-600">{product.buyingTips}</p>
                      </div>
                      <div className="bg-[#FAF8F5] rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Best Places:</p>
                        <p className="text-xs text-gray-600">{product.bestIn}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BARGAINING GUIDE
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">The Art of the Deal</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Bargain in Morocco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bargaining is a social art form in Morocco, not a confrontation. Done right, both you and the merchant
            enjoy the process and walk away satisfied. Here is your step-by-step guide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bargainingSteps.map((step) => (
            <div key={step.step} className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#A0522D] text-white flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#FAF8F5] rounded-2xl p-6">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-4">
            Key Bargaining Phrases in Darija
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { phrase: 'Bshhal?', meaning: 'How much?', use: 'First thing you ask' },
              { phrase: 'Ghali bezaf!', meaning: 'Too expensive!', use: 'Express shock at the price' },
              { phrase: 'Akhir taman?', meaning: 'Last price?', use: 'Ask for the final offer' },
              { phrase: 'La, shukran', meaning: 'No, thank you', use: 'Decline politely' },
              { phrase: 'Momkin nqes shwiya?', meaning: 'Can you reduce a little?', use: 'Request a discount' },
              { phrase: 'Wakha, ana ghadi nakhod', meaning: 'OK, I will take it', use: 'Close the deal' },
            ].map((item) => (
              <div key={item.phrase} className="bg-white rounded-lg p-3">
                <p className="font-bold text-gray-900">{item.phrase}</p>
                <p className="text-sm text-[#A0522D]">{item.meaning}</p>
                <p className="text-xs text-gray-500 mt-1">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SCAM AWARENESS
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Stay Alert</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scams to Avoid
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The vast majority of Moroccan merchants are honest. But tourist areas attract opportunists.
              Awareness is your best defense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {commonScams.map((item) => (
              <div key={item.scam} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900">{item.scam}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MARKET TYPES
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Beyond the Medina</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Moroccan Markets
          </h2>
        </div>

        <div className="space-y-4">
          {marketTypes.map((type) => (
            <div key={type.type} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">{type.type}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">{type.description}</p>
              <p className="text-xs text-[#A0522D]"><span className="font-semibold">Examples:</span> {type.examples}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Shop Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Dive deeper into Moroccan crafts, explore our city guides for local shopping tips,
            or learn about the artisans behind the products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/crafts"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Scissors className="w-4 h-4" /> Moroccan Crafts
            </Link>
            <Link
              href="/souks"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Store className="w-4 h-4" /> Detailed Souks Guide
            </Link>
            <Link
              href="/scams"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Shield className="w-4 h-4" /> Scam Prevention
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EXPLORE MORE
          ============================================================ */}
      <ExploreMore
        currentCategory="culture"
        currentHref="/moroccan-markets"
        title="Continue Exploring Morocco"
      />
    </>
  );
}
