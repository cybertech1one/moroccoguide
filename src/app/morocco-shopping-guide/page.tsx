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
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Globe,
  Landmark,
  ShoppingBag,
  Package,
  Tag,
  Gift,
  Crown,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Shopping in Morocco 2026 | Best Souvenirs, Souks, Haggling Tips & Price Guide',
  description:
    'Complete guide to shopping in Morocco. Discover the best souvenirs to buy, top souks in Marrakech, Fez, and Essaouira, haggling tips, price guide in MAD, authentic Moroccan crafts, cooperatives, and how to ship purchases home.',
  keywords: [
    'shopping in morocco',
    'morocco souvenirs',
    'what to buy in morocco',
    'best souvenirs from morocco',
    'moroccan crafts',
    'morocco souk shopping',
    'marrakech souk guide',
    'fez medina shopping',
    'morocco haggling tips',
    'moroccan leather goods',
    'argan oil morocco',
    'moroccan ceramics',
    'moroccan rugs buying guide',
    'moroccan lanterns',
    'babouche slippers morocco',
    'moroccan silver jewelry',
    'morocco price guide',
    'moroccan cooperatives',
    'morocco shipping customs',
    'best markets morocco',
  ],
  openGraph: {
    title: 'Shopping in Morocco 2026 | Best Souvenirs, Souks, Haggling Tips & Price Guide',
    description:
      'Your complete guide to shopping in Morocco. Top 10 souvenirs, best souks by city, haggling strategies, price guide, cooperatives, and shipping tips.',
    url: `${BASE_URL}/morocco-shopping-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-souk-lamps.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful handcrafted Moroccan lanterns hanging in a traditional souk in Marrakech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopping in Morocco 2026 | Souvenirs, Souks & Haggling Guide',
    description:
      'Complete guide to shopping in Morocco. Best souvenirs, top souks, haggling tips, price guide, and how to find authentic Moroccan crafts.',
    images: [`${BASE_URL}/images/hero-souk-lamps.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-shopping-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-shopping-guide`,
  name: 'Shopping in Morocco 2026 | Best Souvenirs, Souks, Haggling Tips & Price Guide',
  description:
    'Complete guide to shopping in Morocco. Discover the best souvenirs, top souks, haggling tips, price guide, authentic crafts, cooperatives, and shipping advice.',
  url: `${BASE_URL}/morocco-shopping-guide`,
  image: `${BASE_URL}/images/hero-souk-lamps.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-shopping-guide`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Shopping Guide', item: `${BASE_URL}/morocco-shopping-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best souvenirs to buy in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular and authentic Moroccan souvenirs include leather goods from Fez, argan oil products, spice blends like Ras el Hanout, hand-painted ceramics from Fez and Safi, Berber rugs and carpets, brass and copper lanterns, babouche leather slippers, traditional Moroccan tea sets, zellige mosaic tiles, and Amazigh silver jewelry from Tiznit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I haggle in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Moroccan souks, vendors typically start at two to four times the price they expect to receive. A good target is 40-60% of the initial asking price. Start by offering about one-third and negotiate from there. Fixed-price shops and cooperatives do not require haggling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan souk is best for shopping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech has the largest and most famous souks with the widest variety. Fez offers the most authentic artisan workshops for leather, ceramics, and metalwork. Essaouira is best for thuya woodwork and relaxed shopping. Meknes offers genuine crafts at lower prices due to fewer tourists.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I ship purchases home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many shops offer international shipping via DHL, FedEx, or La Poste Maroc. Expect to pay from 200 MAD for small parcels and from 800 MAD for larger shipments. Delivery takes one to three weeks for express and four to eight weeks for surface mail.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I spot fake or low-quality goods in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For leather, check for a genuine smell and supple texture. For argan oil, authentic oil has a nutty scent and golden color. For carpets, check the back for hand-knotted construction. For ceramics, hand-painted pieces have minor brush-stroke variations. Buy from cooperatives when possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best times to shop in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early morning (9-11 AM) is ideal for fewer crowds. The first sale of the day is considered lucky, so vendors may offer better prices. Late afternoon (4-6 PM) is also good. Souks are typically closed on Fridays until after midday prayers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to pay customs duty on Moroccan souvenirs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most countries allow a duty-free personal allowance. In the EU, the limit is typically 430 EUR for air travelers. In the US, the duty-free exemption is $800 per person. Keep all receipts as proof of purchase. Genuine antiques over 100 years old require an export permit.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 10 SOUVENIRS
   ═══════════════════════════════════════════════════════════════ */

const topSouvenirs = [
  {
    name: 'Leather Goods',
    icon: ShoppingBag,
    image: '/images/photo-moroccan-leather.webp',
    description:
      'Morocco is world-renowned for its leather, particularly from the ancient tanneries of Fez. Bags, belts, wallets, journal covers, and poufs are crafted from goat, sheep, and camel leather, tanned using centuries-old methods with natural dyes from pomegranate, saffron, and mint. The Chouara Tannery in Fez, dating to the 11th century, remains the most famous leather-working site in North Africa.',
    where: 'Fez tanneries, Marrakech souks, Essaouira',
    priceRange: 'From 80 MAD for wallets, from 200 MAD for bags, from 400 MAD for poufs',
    tip: 'Look for deep, even color and supple texture of vegetable-tanned leather.',
  },
  {
    name: 'Argan Oil',
    icon: Sparkles,
    image: '/images/photo-argan-oil-stilllife.webp',
    description:
      "Produced exclusively in southwestern Morocco from argan tree nuts, this liquid gold comes in two forms: culinary (roasted, nutty flavor) and cosmetic (cold-pressed, for skin and hair). Women's cooperatives around Essaouira and the Souss Valley produce the highest quality. UNESCO recognized the argan forest as a Biosphere Reserve.",
    where: 'Essaouira cooperatives, Souss Valley, Agadir region',
    priceRange: 'From 100 MAD for 100ml cosmetic, from 80 MAD for 250ml culinary',
    tip: 'Authentic argan oil has a nutty aroma; avoid clear, odorless bottles in tourist shops.',
  },
  {
    name: 'Spices & Ras el Hanout',
    icon: Star,
    image: '/images/photo-moroccan-spices.webp',
    description:
      "Morocco's spice markets are a sensory explosion. Ras el Hanout (\"head of the shop\") is the signature blend with up to 30 spices including cardamom, cinnamon, turmeric, ginger, and rose petals. Each merchant has a secret family recipe. Saffron from Taliouine, cumin, paprika, and dried herbs are also popular.",
    where: 'Every medina, especially Marrakech Rahba Kedima, Fez spice souk',
    priceRange: 'From 20 MAD for spice packets, from 30 MAD for Ras el Hanout, from 15 MAD/gram saffron',
    tip: 'Buy whole spices for longer freshness. Real saffron is deep red with a bitter-honey aroma.',
  },
  {
    name: 'Hand-Painted Ceramics',
    icon: Gem,
    image: '/images/photo-ceramics-pottery.webp',
    description:
      'Fez is the capital of Moroccan ceramics, producing iconic blue-and-white pottery since the 10th century. Safi specializes in polychrome glazed pieces. Each piece is hand-thrown, hand-painted with geometric and floral motifs, and fired in traditional wood-burning kilns. Tagine pots, bowls, tiles, and plates make stunning souvenirs.',
    where: 'Fez (blue-and-white), Safi (colorful), Tamegroute (green glaze)',
    priceRange: 'From 30 MAD for small bowls, from 100 MAD for plates, from 200 MAD for tagines',
    tip: 'Hand-painted pieces have slight brush-stroke variations; machine-printed ones are uniform.',
  },
  {
    name: 'Berber Rugs & Carpets',
    icon: Award,
    image: '/images/art-moroccan-carpet.webp',
    description:
      "Moroccan rugs are among the world's most collectible textiles. Beni Ourain carpets feature minimalist black-on-cream geometric patterns. Azilal and Boujaad rugs burst with color. Kilims (flat-weave) are lighter and easier to transport. Each region has patterns encoding tribal identity and family stories.",
    where: 'Tazenakht, Marrakech, Ouarzazate, Chefchaouen, Azrou cooperatives',
    priceRange: 'From 500 MAD for small kilims, from 2,000 MAD for medium, from 5,000 MAD for large Beni Ourain',
    tip: 'Check the back for hand-knotted construction. Genuine pieces have slight irregularities.',
  },
  {
    name: 'Brass & Copper Lanterns',
    icon: Crown,
    image: '/images/art-moroccan-lanterns.webp',
    description:
      "Moroccan lanterns (fanous) cast mesmerizing geometric shadow patterns when lit. Artisans hand-punch intricate star and arabesque designs into brass, copper, or iron sheets. From small table lanterns to grand ceiling fixtures. Marrakech's metalwork souks offer the widest selection.",
    where: 'Marrakech Place des Ferblantiers, Fez metalwork souk',
    priceRange: 'From 80 MAD for tea-light lanterns, from 300 MAD for medium, from 1,500 MAD for large fixtures',
    tip: 'Ask sellers to light the lantern so you can see the shadow pattern before purchasing.',
  },
  {
    name: 'Babouche Leather Slippers',
    icon: Tag,
    image: '/images/card-leather.webp',
    description:
      "Pointed-toe leather slippers are quintessential Moroccan footwear. Simple monochrome babouches are everyday wear, while embroidered or sequined versions are for celebrations. Men's are typically plain; women's feature colorful embroidery and beading. The best ones are hand-stitched with no visible glue.",
    where: 'Every souk, best quality in Fez and Marrakech',
    priceRange: 'From 50 MAD for simple, from 150 MAD for embroidered, from 300 MAD for premium',
    tip: 'Good babouches soften and mold to your feet within a day. Avoid stiff, glue-heavy pairs.',
  },
  {
    name: 'Moroccan Tea Sets',
    icon: Heart,
    image: '/images/art-fes-souk-painting.webp',
    description:
      "The Moroccan tea ceremony is central to social life. Traditional silver-plated sets include an ornate teapot (berrad), small colored glasses with gold or silver trim, and a decorative tray (siniya). The teapot's long curved spout is designed for pouring from a height to create froth.",
    where: 'Marrakech, Fez, Meknes metalwork souks',
    priceRange: 'From 100 MAD for basic, from 300 MAD for silver-plated, from 1,000 MAD for antique',
    tip: 'Test the lid fit and pour mechanism. Quality teapots have hinged lids and smooth pouring.',
  },
  {
    name: 'Zellige Mosaic Tiles',
    icon: Landmark,
    image: '/images/hero-ceramics.webp',
    description:
      'Zellige is hand-cut geometric mosaic tilework adorning mosques, palaces, and riads. Each tiny piece is individually chiseled from glazed terracotta and assembled into intricate patterns. Small panels, coasters, or individual decorated tiles make beautiful wall art. Fez remains the center of zellige craftsmanship.',
    where: 'Fez workshops, Meknes, Marrakech',
    priceRange: 'From 20 MAD per tile, from 200 MAD for small panels, from 500 MAD/sqm for custom',
    tip: 'Small framed panels are the most practical souvenir for travelers.',
  },
  {
    name: 'Amazigh Silver Jewelry',
    icon: Gem,
    image: '/images/photo-moroccan-jewelry.webp',
    description:
      'Berber silver jewelry carries deep cultural significance. Fibulas (tizerzai) are ornamental brooches for fastening garments. The "Southern Cross" pendant is an iconic Tuareg design. Hand of Fatima (khamsa) pendants ward off the evil eye. Tiznit is the traditional capital of Amazigh silverwork.',
    where: 'Tiznit (silver capital), Essaouira, Marrakech, Rissani',
    priceRange: 'From 50 MAD for rings, from 200 MAD for pendants, from 500 MAD for elaborate fibulas',
    tip: 'Genuine silver is heavier with a cooler touch than aluminum imitations.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SOUKS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestSouks = [
  {
    city: 'Marrakech',
    image: '/images/poster-marrakech-souk.webp',
    description:
      "The largest souk complex in Morocco, radiating from Jemaa el-Fnaa into a labyrinth of covered alleyways. Souk Semmarine for textiles, Souk Haddadine for metalwork, Souk Chouari for woodwork, and Place des Ferblantiers for lanterns. Over 3,000 stalls make this Africa's largest traditional market.",
    bestFor: 'Lanterns, leather goods, textiles, spices, carpets',
    haggling: 'Expect to pay 40-50% of asking price. Vendors are experienced with tourists.',
    tip: 'Start early (9 AM) for fewer crowds. Deeper in the souk means better prices.',
  },
  {
    city: 'Fez',
    image: '/images/photo-moroccan-souks.webp',
    description:
      "Fez el-Bali is a UNESCO World Heritage Site and the world's largest car-free urban area. Less tourist-oriented than Marrakech, with genuine artisan workshops. The Chouara tannery produces the finest leather. Ain Nokbi is the ceramics quarter. Metalwork and weaving quarters maintain centuries-old guild traditions.",
    bestFor: 'Ceramics, leather, zellige tiles, brasswork, traditional clothing',
    haggling: 'Slightly less aggressive than Marrakech. Aim for 50-60% of asking price.',
    tip: 'Hire a licensed guide for your first visit. The medina has 9,400 alleyways.',
  },
  {
    city: 'Essaouira',
    image: '/images/card-souk.webp',
    description:
      'A relaxed coastal town with a compact, navigable medina. Famous for thuya woodwork (boxes, chess sets, furniture), argan oil cooperatives, and a growing arts scene. The laid-back atmosphere means less aggressive haggling. The Skala de la Ville ramparts area has galleries and craft shops.',
    bestFor: 'Thuya wood, argan oil, art, silver jewelry, relaxed shopping',
    haggling: 'More relaxed than Marrakech or Fez. Prices are generally fairer from the start.',
    tip: 'Visit thuya woodworking cooperatives near the port to see artisans at work.',
  },
  {
    city: 'Meknes',
    image: '/images/photo-spice-souk-display.webp',
    description:
      'Often overlooked by tourists, Meknes offers authentic shopping at significantly lower prices. The medina around Place el-Hedim has excellent crafts without tourist markup. The Berdaine souk is one of the best food markets in Morocco, with olive oil, preserved lemons, and spices at local prices.',
    bestFor: 'Metalwork, embroidery, food products, olives, local crafts at low prices',
    haggling: 'Less inflation in starting prices. Fair deals at 60-70% of asking price.',
    tip: 'Best place for food products: olive oil and preserved goods at a fraction of Marrakech prices.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HAGGLING PHRASES
   ═══════════════════════════════════════════════════════════════ */

const hagglingPhrases = [
  { darija: 'Bshhal?', english: 'How much?', note: 'The essential opening question' },
  { darija: 'Ghali bezaf!', english: 'Too expensive!', note: 'Express surprise at the initial price' },
  { darija: 'Nqess shwiya', english: 'Reduce a little', note: 'Ask for a lower price politely' },
  { darija: 'Akher taman?', english: 'Last price?', note: 'Signal you are serious about buying' },
  { darija: 'La shukran', english: 'No thank you', note: 'Decline politely and walk away if needed' },
  { darija: 'Wakha', english: 'Okay / agreed', note: 'Seal the deal when you reach a fair price' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Leather bag (medium)', localPrice: 'From 200 MAD', touristPrice: 'From 500 MAD', fairPrice: 'From 250-350 MAD' },
  { item: 'Argan oil (100ml cosmetic)', localPrice: 'From 80 MAD', touristPrice: 'From 200 MAD', fairPrice: 'From 100-130 MAD' },
  { item: 'Ras el Hanout (100g)', localPrice: 'From 15 MAD', touristPrice: 'From 50 MAD', fairPrice: 'From 20-30 MAD' },
  { item: 'Ceramic serving plate', localPrice: 'From 60 MAD', touristPrice: 'From 200 MAD', fairPrice: 'From 80-120 MAD' },
  { item: 'Small Berber rug', localPrice: 'From 400 MAD', touristPrice: 'From 1,500 MAD', fairPrice: 'From 500-800 MAD' },
  { item: 'Brass lantern (medium)', localPrice: 'From 200 MAD', touristPrice: 'From 600 MAD', fairPrice: 'From 250-400 MAD' },
  { item: 'Babouche slippers', localPrice: 'From 40 MAD', touristPrice: 'From 150 MAD', fairPrice: 'From 50-80 MAD' },
  { item: 'Silver pendant', localPrice: 'From 100 MAD', touristPrice: 'From 350 MAD', fairPrice: 'From 150-250 MAD' },
  { item: 'Tea set (teapot + 6 glasses)', localPrice: 'From 80 MAD', touristPrice: 'From 300 MAD', fairPrice: 'From 120-200 MAD' },
  { item: 'Thuya wood box', localPrice: 'From 50 MAD', touristPrice: 'From 200 MAD', fairPrice: 'From 80-120 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COOPERATIVES
   ═══════════════════════════════════════════════════════════════ */

const cooperatives = [
  {
    name: "Argan Oil Women's Cooperatives",
    location: 'Essaouira, Agadir, Taroudant region',
    icon: Users,
    description:
      "Over 100 women's cooperatives produce argan oil across southwestern Morocco, providing fair wages, education, and healthcare for rural women. You can watch the labor-intensive cracking and cold-pressing process. Cooperative prices are fair and fixed.",
    products: 'Argan oil (cosmetic and culinary), amlou spread, argan soap',
  },
  {
    name: 'Carpet Weaving Cooperatives',
    location: 'Tazenakht, Ait Bougmez, Chefchaouen',
    icon: Award,
    description:
      "Women's weaving cooperatives in the Atlas Mountains produce carpets using techniques passed down for generations. Each cooperative sells directly, cutting out middlemen. Meet the artisans and learn about the symbolic meaning of patterns.",
    products: 'Beni Ourain rugs, Azilal carpets, kilims, handbags',
  },
  {
    name: 'Pottery & Ceramics Workshops',
    location: 'Fez, Safi, Tamegroute',
    icon: Gem,
    description:
      "Community workshops allow visitors to see the process from clay to finished product. The potters' cooperative in Fez near Ain Nokbi is particularly noteworthy. Fair trade pricing means pieces cost less than medina shops while artisans earn more.",
    products: 'Tagines, bowls, plates, decorative tiles, vases',
  },
  {
    name: 'Thuya Woodworking Cooperatives',
    location: 'Essaouira',
    icon: Gift,
    description:
      "Essaouira's thuya wood artisans have organized into cooperatives near the port. Thuya (citrus wood) has a distinctive burl grain and sweet cedar scent. Artisans demonstrate marquetry inlay with lemon wood and ebony.",
    products: 'Boxes, chess sets, picture frames, furniture, sculptures',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MODERN SHOPPING
   ═══════════════════════════════════════════════════════════════ */

const modernShopping = [
  {
    name: 'Morocco Mall (Casablanca)',
    type: 'Shopping Mall',
    description: "Africa's second-largest shopping mall with over 600 stores, international brands, a massive aquarium, and an IMAX cinema. Fixed prices and modern amenities.",
    products: 'International brands, Moroccan designer fashion, food court',
  },
  {
    name: 'Menara Mall (Marrakech)',
    type: 'Shopping Mall',
    description: "Marrakech's premier modern shopping center near the train station. Air-conditioned retail with a mix of Moroccan and international brands.",
    products: 'Fashion, electronics, Moroccan cosmetics, restaurants',
  },
  {
    name: '33 Rue Majorelle (Marrakech)',
    type: 'Concept Store',
    description: 'A curated design boutique near Jardin Majorelle showcasing contemporary Moroccan design. Beautiful ceramics, textiles, fashion, and home decor at fixed prices.',
    products: 'Contemporary Moroccan design, home decor, fashion',
  },
  {
    name: 'Ensemble Artisanal (Multiple Cities)',
    type: 'Government Craft Center',
    description: 'Government-run fixed-price artisan centers in Marrakech, Fez, Rabat, and other cities. Useful price benchmarks before entering the souks. Quality is guaranteed.',
    products: 'All traditional crafts at fixed prices',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoShoppingGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-souk-lamps.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Shopping Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ShoppingBag className="w-4 h-4" />
            Shopping &amp; Souvenirs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Shopping in Morocco:
            <br className="hidden md:block" /> Souvenirs, Souks &amp; Haggling Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From labyrinthine souks overflowing with handcrafted treasures to women&apos;s cooperatives
            preserving ancient traditions. Everything you need to know about what to buy, where to find it,
            and how to get the best price.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Art of Shopping in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Shopping in Morocco is not merely a transaction -- it is a cultural experience woven into the
                fabric of daily life. The souks (traditional markets) have operated for centuries as the commercial
                and social heart of every Moroccan city. Narrow alleyways open into dazzling displays of handcrafted
                goods: pyramids of saffron-gold spices, towers of copper lanterns casting geometric shadows, rainbows
                of leather babouche slippers, and intricate ceramics painted with motifs unchanged since the medieval era.
              </p>
              <p>
                Morocco&apos;s craft traditions are among the oldest and most sophisticated in the world. UNESCO has
                recognized several Moroccan artisanal practices as Intangible Cultural Heritage, and the country&apos;s
                medinas serve as living workshops where skills pass from master to apprentice across generations.
                Whether you seek a small spice packet or a hand-knotted Beni Ourain rug, understanding the culture of
                Moroccan commerce will enhance your experience and help you bring home meaningful, authentic souvenirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 10 Souvenirs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gift className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 10 Souvenirs to Buy in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The most authentic and memorable items to bring home, from ancient artisan workshops to women&apos;s cooperatives.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by location, quality, and season.
          </p>

          <div className="space-y-8">
            {topSouvenirs.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                      <img
                        src={item.image}
                        alt={`${item.name} - popular Moroccan souvenir for sale in a traditional souk`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                          <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="flex items-start gap-2 text-[var(--text-muted)]">
                          <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          <span>{item.where}</span>
                        </div>
                        <div className="flex items-start gap-2 text-[var(--text-muted)]">
                          <DollarSign className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          <span>{item.priceRange}</span>
                        </div>
                        <div className="flex items-start gap-2 text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <span>{item.tip}</span>
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

      {/* ── Best Souks by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Souks by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct shopping personality. Choose based on what you want and the experience you seek.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestSouks.map((souk) => (
              <div key={souk.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={souk.image}
                    alt={`Traditional souk market in ${souk.city}, Morocco with artisan goods on display`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {souk.city}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{souk.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-[var(--text-muted)]">
                      <Star className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Best for:</strong> {souk.bestFor}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[var(--text-muted)]">
                      <Tag className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      <span><strong>Haggling:</strong> {souk.haggling}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span><strong>Tip:</strong> {souk.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Haggling Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Art of Haggling in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Haggling is a cultural tradition, not a confrontation. Done right, it is an enjoyable exchange where both sides leave satisfied.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: ShieldCheck, title: 'Start at One-Third', text: 'Begin by offering roughly one-third of the asking price. This gives both parties room to negotiate. Never insult the vendor with an absurdly low amount.' },
              { icon: Clock, title: 'Take Your Time', text: 'Moroccan haggling is leisurely. Accept tea if offered, chat about the craft, and show genuine interest. Rushing signals desperation.' },
              { icon: ShoppingBag, title: 'Walk Away if Needed', text: 'Walking away is the most powerful tool. If the vendor calls you back, you are close to the real price. If not, your offer was too low.' },
              { icon: Heart, title: 'Stay Friendly', text: 'Haggling should be fun. Smile, joke, and keep the tone light. A friendly buyer often gets a better price than an aggressive one.' },
              { icon: DollarSign, title: 'Know Fair Prices', text: 'Visit the Ensemble Artisanal (government fixed-price shop) first to learn baseline prices before entering the souks.' },
              { icon: Info, title: 'When NOT to Haggle', text: 'Fixed-price shops, cooperatives, supermarkets, restaurants, and pharmacies have set prices. Haggling here is inappropriate.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Useful Darija Phrases for Haggling
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {hagglingPhrases.map((phrase) => (
                <div key={phrase.darija} className="flex items-start gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <div className="text-sm font-bold text-[var(--color-accent)] shrink-0 w-28">{phrase.darija}</div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{phrase.english}</p>
                    <p className="text-xs text-[var(--text-muted)]">{phrase.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Shopping Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for common items. Use these as benchmarks during haggling.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in Moroccan Dirham (MAD). Seasonal pricing and quality variations may apply.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Local Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Tourist Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">Fair Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceGuide.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 text-[var(--text-primary)] font-medium">{row.item}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.localPrice}</td>
                      <td className="p-4 text-[var(--text-muted)]">{row.touristPrice}</td>
                      <td className="p-4 text-[var(--color-accent)] font-semibold">{row.fairPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Authentic vs Tourist Traps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Authentic Goods vs. Tourist Traps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn how to spot genuine Moroccan craftsmanship and avoid mass-produced imitations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Signs of Authenticity
              </h3>
              <div className="space-y-3">
                {[
                  'Slight irregularities in hand-painted patterns',
                  'Natural materials with genuine textures and scents',
                  'Artisan can demonstrate the craft process',
                  'Cooperative or workshop with visible production',
                  'Heavier weight in genuine metal and leather goods',
                  'Unique variations between pieces in the same style',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-red-700 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Red Flags to Watch For
              </h3>
              <div className="space-y-3">
                {[
                  'Perfectly uniform patterns (machine production)',
                  'Suspiciously low prices for handmade items',
                  'Vendor refuses to let you examine the item closely',
                  'Hidden Made in China labels on Moroccan goods',
                  'Guides insisting on specific shops (commission)',
                  'Argan oil that is clear, odorless, or in plastic bottles',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <Info className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cooperatives ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cooperative &amp; Fair Trade Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Support local communities and ensure your purchases benefit artisans directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cooperatives.map((coop) => {
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
                      <p className="text-xs text-[var(--text-muted)]">{coop.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{coop.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-semibold">
                    <Package className="w-3 h-3" />
                    <span>{coop.products}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modern Shopping ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Modern Shopping: Malls, Boutiques &amp; Concept Stores
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the souks, Morocco offers contemporary shopping with fixed prices and modern amenities.
          </p>

          <div className="space-y-6">
            {modernShopping.map((shop) => (
              <div key={shop.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {shop.name}
                  </h3>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0 ml-4">
                    {shop.type}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{shop.description}</p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <ShoppingBag className="w-3 h-3 text-[var(--color-accent)]" />
                  <span>{shop.products}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shipping & Customs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shipping Purchases &amp; Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get your treasures home safely, from packing tips to customs regulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Shipping Options
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>La Poste Maroc:</strong> Surface mail from 150 MAD for small parcels. Delivery in 4-8 weeks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>DHL / FedEx:</strong> Express from 400 MAD. Delivery in 3-7 days. Best for valuables.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Shop Shipping:</strong> Many carpet shops offer door-to-door shipping from 800 MAD.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Carry-On:</strong> Small items and spices in checked luggage. Wrap ceramics carefully.</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Customs &amp; Duty Tips
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><strong>Keep receipts:</strong> Save all purchase receipts for customs declarations at home.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><strong>Duty-free limits:</strong> EU allows 430 EUR; US allows $800 per person duty-free.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><strong>Restricted items:</strong> Genuine antiques (100+ years) require an export permit.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span><strong>Food products:</strong> Sealed spices and argan oil pass most customs smoothly.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Shopping Scenes Across Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/art-moroccan-market-spices.webp', alt: 'Colorful piles of spices and herbs displayed at a traditional Moroccan market stall', label: 'Spice Market' },
              { src: '/images/art-moroccan-lanterns.webp', alt: 'Handcrafted brass and copper Moroccan lanterns hanging in a souk', label: 'Lantern Artisans' },
              { src: '/images/photo-argan-cooperative.webp', alt: 'Women working at an argan oil cooperative in southwestern Morocco', label: 'Argan Cooperative' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
                What are the best souvenirs to buy in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most popular souvenirs include leather goods from Fez, argan oil, spice blends like Ras el Hanout,
                hand-painted ceramics, Berber rugs, brass lanterns, babouche slippers, traditional tea sets, zellige tiles,
                and Amazigh silver jewelry. Buy from cooperatives and artisan workshops for the best quality.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I haggle in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Vendors typically start at two to four times the expected price. Aim for 40-60% of the asking price.
                Start at one-third and negotiate upward. Fixed-price shops and cooperatives do not require haggling.
                Walking away is your strongest negotiating tool.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Moroccan souk is best for shopping?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech has the largest souks with the widest variety. Fez offers the most authentic workshops for
                leather, ceramics, and metalwork. Essaouira is best for thuya woodwork and relaxed shopping. Meknes
                offers genuine crafts at lower prices due to fewer tourists.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I ship purchases home from Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, many shops offer international shipping via DHL, FedEx, or La Poste Maroc. Express takes 3-7 days
                from 400 MAD; surface mail takes 4-8 weeks from 150 MAD. For rugs and large items, shops arrange
                container shipping from 800 MAD. Always get receipts and tracking numbers.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I spot fake or low-quality goods?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For leather, check for genuine smell and supple texture. Authentic argan oil has a nutty scent and
                golden color. Hand-knotted carpets show slight irregularities on the back. Hand-painted ceramics have
                minor brush-stroke variations. Buy from cooperatives and ask artisans to demonstrate their work.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best times to shop in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Early morning (9-11 AM) is ideal for fewer crowds and better prices, as vendors consider the first
                sale (&quot;ftour&quot;) lucky. Late afternoon (4-6 PM) is also good. Souks close on Fridays until
                after midday prayers, and some workshops close on Sundays.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to pay customs duty on Moroccan souvenirs?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most countries allow duty-free personal allowances. The EU limit is typically 430 EUR for air travelers;
                the US exemption is $800 per person. Keep all receipts. Genuine antiques may require export permits.
                Check your home country&apos;s customs regulations before large purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Amazigh heritage, traditional crafts, mountain villages, and cultural experiences.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-carpet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Carpet Buying Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about buying authentic Moroccan rugs, from Beni Ourain to Azilal styles.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Save money across Morocco with tips on accommodation, food, transport, and shopping.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Culture &amp; Etiquette
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Moroccan customs, social norms, and etiquette to enrich your travel experience.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco&apos;s Souks?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the vibrant medinas of Marrakech and Fez to quiet coastal workshops in Essaouira,
            Morocco&apos;s shopping culture is a treasure hunt where every purchase tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/fez"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Landmark className="w-5 h-5" />
              Discover Fez
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
