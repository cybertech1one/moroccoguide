import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  ShoppingBag,
  HandCoins,
  MessageCircle,
  Shield,
  Clock,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Tag,
  Store,
  Languages,
  Compass,
  Banknote,
  ThumbsUp,
  ThumbsDown,
  Footprints,
  BookOpen,
  Globe,
  Gem,
  Heart,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'How to Haggle in Morocco 2026 | Souk Bargaining Tips & Fair Prices',
  description:
    'Master the art of haggling in Moroccan souks. Fair price guide for 20+ items, step-by-step bargaining strategy, essential Darija phrases, and scam warnings. Save 40-70% on leather bags, rugs, ceramics, spices, and more.',
  keywords: [
    'haggling morocco',
    'bargaining morocco souks',
    'how to haggle morocco',
    'morocco souk prices',
    'morocco bargaining tips',
    'fair prices morocco souks',
    'moroccan souk shopping guide',
    'haggling tips marrakech',
    'morocco market prices',
    'how to bargain fes souk',
    'morocco shopping tips 2026',
    'darija bargaining phrases',
    'morocco souk scams',
    'marrakech souk prices',
    'fes souk bargaining',
    'leather bags morocco price',
    'moroccan rug prices',
    'argan oil prices morocco',
    'morocco ceramics prices',
    'babouche slippers morocco',
  ],
  openGraph: {
    title: 'How to Haggle in Morocco 2026 | Souk Bargaining Tips & Fair Prices',
    description:
      'Master bargaining in Moroccan souks with our fair price guide for 20+ items, step-by-step strategy, Darija phrases, and scam warnings. Save 40-70% on your purchases.',
    url: `${BASE_URL}/morocco-haggling-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-souks.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan souk stall with handmade goods and a shopkeeper greeting customers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Haggle in Morocco 2026 | Bargaining Tips & Fair Prices',
    description:
      'Fair price guide for 20+ souk items, step-by-step bargaining strategy, essential Darija phrases, and common scam warnings for Morocco.',
    images: [`${BASE_URL}/images/hero-souks.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-haggling-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-haggling-guide`,
  name: 'How to Haggle in Morocco 2026 | Souk Bargaining Tips & Fair Prices',
  description:
    'Complete guide to bargaining in Moroccan souks. Fair price guide for 20+ common items, step-by-step haggling strategy, essential Darija phrases, and scam avoidance tips.',
  url: `${BASE_URL}/morocco-haggling-guide`,
  image: `${BASE_URL}/images/hero-souks.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-haggling-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Haggling Guide', item: `${BASE_URL}/morocco-haggling-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a fair starting counter-offer when haggling in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start your counter-offer at 30-40% of the seller\'s asking price. The final agreed price typically lands between 40-60% of the initial ask. For high-ticket items like rugs, you can start even lower at 20-25%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it rude to haggle in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. Haggling is an expected part of Moroccan souk culture and has been for centuries. Shopkeepers build bargaining margins into their prices. Not haggling actually surprises most sellers. The key is to stay respectful, smile, and treat it as a social exchange.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can I save by haggling in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skilled hagglers save 40-70% off the initial asking price. Tourist-heavy areas like Marrakech\'s Jemaa el-Fnaa have higher markups (sometimes 5-10x), while smaller cities like Meknes or Essaouira have lower initial markups of 2-3x.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I haggle for everything in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Haggling applies to souk goods, taxis (without meters), and private tours. Do not haggle at pharmacies, supermarkets, restaurants, fixed-price shops (look for "prix fixe" signs), or when buying bread and produce from street vendors with displayed prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Darija phrases help with bargaining in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key phrases include "B-shhal?" (How much?), "Ghali bzaf" (Too expensive), "Akhir taman?" (Last price?), and "La shukran" (No thank you). Speaking even basic Darija earns respect and often better prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are fair prices for leather bags in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quality leather handbag in Morocco costs from 200-400 MAD at fair haggled prices. Sellers typically start at 600-1,200 MAD. Larger travel bags cost from 400-800 MAD. Check stitching quality, smell (real leather has a distinct scent), and ask if it is goat, cow, or camel leather.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan souk is best for haggling and fair prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fes el-Bali offers the most authentic haggling with lower tourist markups. Essaouira\'s souk is relaxed and prices are fairer. Marrakech has the biggest selection but the highest markups. Meknes is under-the-radar with local prices. For rugs, the carpet souks of Fes and Marrakech are unmatched.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FAIR PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuideItems = [
  { item: 'Leather Handbag (medium)', askingPrice: '600–1,200 MAD', fairPrice: 'from 200 MAD', category: 'Leather' },
  { item: 'Leather Travel Bag', askingPrice: '1,200–2,500 MAD', fairPrice: 'from 400 MAD', category: 'Leather' },
  { item: 'Leather Belt', askingPrice: '200–400 MAD', fairPrice: 'from 80 MAD', category: 'Leather' },
  { item: 'Babouche Slippers (basic)', askingPrice: '200–350 MAD', fairPrice: 'from 60 MAD', category: 'Leather' },
  { item: 'Babouche Slippers (embroidered)', askingPrice: '350–600 MAD', fairPrice: 'from 120 MAD', category: 'Leather' },
  { item: 'Handwoven Berber Rug (small, 1x1.5m)', askingPrice: '2,000–5,000 MAD', fairPrice: 'from 600 MAD', category: 'Textiles' },
  { item: 'Handwoven Berber Rug (large, 2x3m)', askingPrice: '5,000–15,000 MAD', fairPrice: 'from 2,000 MAD', category: 'Textiles' },
  { item: 'Kilim Flat-weave Rug', askingPrice: '1,500–4,000 MAD', fairPrice: 'from 500 MAD', category: 'Textiles' },
  { item: 'Silk Scarf / Pashmina', askingPrice: '300–600 MAD', fairPrice: 'from 80 MAD', category: 'Textiles' },
  { item: 'Kaftan (ready-made)', askingPrice: '800–2,000 MAD', fairPrice: 'from 300 MAD', category: 'Textiles' },
  { item: 'Ceramic Tagine (decorative)', askingPrice: '200–500 MAD', fairPrice: 'from 80 MAD', category: 'Ceramics' },
  { item: 'Ceramic Plate (painted, large)', askingPrice: '150–400 MAD', fairPrice: 'from 60 MAD', category: 'Ceramics' },
  { item: 'Fes Blue Ceramic Bowl', askingPrice: '100–250 MAD', fairPrice: 'from 40 MAD', category: 'Ceramics' },
  { item: 'Brass Lantern (small)', askingPrice: '300–800 MAD', fairPrice: 'from 120 MAD', category: 'Metalwork' },
  { item: 'Brass Lantern (large, floor)', askingPrice: '1,500–4,000 MAD', fairPrice: 'from 500 MAD', category: 'Metalwork' },
  { item: 'Silver Berber Bracelet', askingPrice: '300–800 MAD', fairPrice: 'from 100 MAD', category: 'Jewelry' },
  { item: 'Silver Berber Necklace', askingPrice: '500–1,500 MAD', fairPrice: 'from 200 MAD', category: 'Jewelry' },
  { item: 'Argan Oil (1 liter, cosmetic)', askingPrice: '400–800 MAD', fairPrice: 'from 200 MAD', category: 'Spices & Oil' },
  { item: 'Argan Oil (1 liter, culinary)', askingPrice: '300–600 MAD', fairPrice: 'from 180 MAD', category: 'Spices & Oil' },
  { item: 'Saffron (10g)', askingPrice: '100–300 MAD', fairPrice: 'from 40 MAD', category: 'Spices & Oil' },
  { item: 'Ras el Hanout (250g)', askingPrice: '80–200 MAD', fairPrice: 'from 30 MAD', category: 'Spices & Oil' },
  { item: 'Moroccan Tea Set (teapot + 6 glasses)', askingPrice: '400–1,000 MAD', fairPrice: 'from 150 MAD', category: 'Metalwork' },
  { item: 'Thuya Wood Box (medium)', askingPrice: '200–500 MAD', fairPrice: 'from 80 MAD', category: 'Woodwork' },
  { item: 'Thuya Wood Chess Set', askingPrice: '500–1,500 MAD', fairPrice: 'from 200 MAD', category: 'Woodwork' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: GOLDEN RULES
   ═══════════════════════════════════════════════════════════════ */

const goldenRules = [
  {
    number: 1,
    title: 'Never Show Desperation',
    icon: Shield,
    text: 'The moment a seller sees you fixated on an item, the price climbs. Browse casually. Pick things up and set them down. Ask about multiple items before zeroing in on the one you actually want.',
  },
  {
    number: 2,
    title: 'Know Before You Go',
    icon: BookOpen,
    text: 'Research approximate fair prices before entering the souk. Use our price guide below. Visit a fixed-price shop first (Ensemble Artisanal in Marrakech or Fes) to calibrate your expectations for quality and cost.',
  },
  {
    number: 3,
    title: 'Start at 30-40% of the Asking Price',
    icon: Tag,
    text: 'The seller expects you to counter low. Start at roughly a third of what they ask. This gives room for both sides to negotiate toward a fair middle ground. For expensive rugs, start at 20-25%.',
  },
  {
    number: 4,
    title: 'Walk Away — The Most Powerful Tool',
    icon: Footprints,
    text: 'If the price stalls above your target, thank the seller and leave. In many cases, they will call you back with a lower offer. If they let you go, the price was already fair or you were too low.',
  },
  {
    number: 5,
    title: 'Bundle for Better Deals',
    icon: ShoppingBag,
    text: 'Buying three items from one seller? Negotiate a package price. Sellers give bigger discounts on bulk purchases because the overall transaction value is higher. Mention you want several things early in the conversation.',
  },
  {
    number: 6,
    title: 'Cash Is King',
    icon: Banknote,
    text: 'Carry small bills and exact change. Showing a fat wallet signals you can pay more. Some sellers add a 5-10% surcharge for card payments. Having the exact amount ready in your pocket speeds up the final handshake.',
  },
  {
    number: 7,
    title: 'Keep It Friendly',
    icon: Heart,
    text: 'Bargaining in Morocco is social, not adversarial. Smile, joke, accept the mint tea. Aggressive tactics backfire. The best deals happen when both buyer and seller enjoy the interaction.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DARIJA PHRASES
   ═══════════════════════════════════════════════════════════════ */

const darijaPhrases = [
  { darija: 'B-shhal?', pronunciation: 'besh-HALL', english: 'How much?' },
  { darija: 'Ghali bzaf', pronunciation: 'GHAH-lee b-ZAFF', english: 'Too expensive' },
  { darija: 'Akhir taman?', pronunciation: 'AH-kheer ta-MAN', english: 'Last/final price?' },
  { darija: 'La shukran', pronunciation: 'la shoo-KRAN', english: 'No, thank you' },
  { darija: 'Naqas shwiya', pronunciation: 'NA-qas SHWEE-ya', english: 'Reduce a little' },
  { darija: 'Makaynsh flous', pronunciation: 'ma-KYNE-sh FLOOS', english: 'I don\'t have money (for that price)' },
  { darija: 'Atini wahd l-prix mezyan', pronunciation: 'ah-TEE-nee wahd el-PREE mez-YAHN', english: 'Give me a good price' },
  { darija: 'Shukran', pronunciation: 'shoo-KRAN', english: 'Thank you' },
  { darija: 'Insha\'Allah', pronunciation: 'in-SHA-al-lah', english: 'God willing (used to soften refusals)' },
  { darija: 'Bezzaf', pronunciation: 'bez-ZAFF', english: 'Too much' },
  { darija: 'Smeh liya', pronunciation: 'SMEH lee-ya', english: 'Excuse me' },
  { darija: 'Wakha', pronunciation: 'WAH-kha', english: 'OK / agreed' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SOUKS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestSouks = [
  {
    city: 'Marrakech',
    souks: [
      { name: 'Souk Semmarine', specialty: 'Textiles, clothing, babouche slippers' },
      { name: 'Souk el-Attarine', specialty: 'Spices, perfumes, herbs' },
      { name: 'Souk Haddadine', specialty: 'Metalwork, lanterns, iron goods' },
      { name: 'Souk des Teinturiers', specialty: 'Dyed fabrics and yarns' },
      { name: 'Rahba Kedima', specialty: 'Natural cosmetics, henna, spices' },
    ],
    tip: 'Avoid the first row of shops around Jemaa el-Fnaa — prices drop 50% once you walk deeper into the souk network. The best leather is found past the Medersa Ben Youssef.',
    markupLevel: 'High (3-10x on tourist items)',
  },
  {
    city: 'Fes',
    souks: [
      { name: 'Fes el-Bali Medina', specialty: 'Leather, ceramics, woodwork — the largest car-free urban area in the world' },
      { name: 'Ain Nokbi Tanneries', specialty: 'Leather goods at source prices' },
      { name: 'Place Seffarine', specialty: 'Copperware and brasswork' },
      { name: 'Souk el-Henna', specialty: 'Ceramics, pottery, tiles' },
    ],
    tip: 'Fes artisans produce goods that Marrakech sellers resell at markup. Buying in Fes means buying closer to the source. The blue ceramics here are the originals — not imports.',
    markupLevel: 'Medium (2-4x)',
  },
  {
    city: 'Essaouira',
    souks: [
      { name: 'Medina Souk', specialty: 'Thuya woodwork, silver jewelry, argan oil' },
      { name: 'Skala de la Ville', specialty: 'Art galleries and painting' },
      { name: 'Fish Market (Port)', specialty: 'Fresh seafood (fixed prices)' },
    ],
    tip: 'Essaouira sellers are more relaxed than Marrakech. Markups are lower and the pressure to buy is minimal. This is the best city for first-time hagglers. Thuya wood is the local specialty — buy it here, not Marrakech.',
    markupLevel: 'Low-Medium (1.5-3x)',
  },
  {
    city: 'Meknes',
    souks: [
      { name: 'Souk Nejjarine', specialty: 'Woodworking, furniture, carved doors' },
      { name: 'Souk Bezzarine', specialty: 'Textiles, household goods' },
      { name: 'Souk Sebbat', specialty: 'Babouche slippers at local prices' },
    ],
    tip: 'Meknes sees far fewer tourists than Marrakech or Fes. Prices start lower, and sellers are less practiced at extracting tourist premiums. Expect markups of only 1.5-2x.',
    markupLevel: 'Low (1.5-2x)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON SCAMS
   ═══════════════════════════════════════════════════════════════ */

const commonScams = [
  {
    scam: 'The "My Uncle\'s Shop" Redirect',
    description: 'A friendly stranger offers to show you "the real souk" or "my uncle\'s shop" away from tourist areas. They earn a commission (10-20%) on anything you buy, which gets added to your price.',
    avoidance: 'Politely decline guides you did not hire. Say "La shukran" and keep walking. If you did not seek them out, they are working for a shop.',
  },
  {
    scam: 'The Carpet Tea Ceremony Trap',
    description: 'A rug seller invites you for tea, unfolds 30 rugs, and creates social pressure to buy after spending an hour of their time. The tea is free — the guilt trip is the sales technique.',
    avoidance: 'Accept tea only if you genuinely want to buy a rug. State your budget immediately: "I have 800 MAD to spend on a small rug." This filters out sellers who only deal in high-end pieces.',
  },
  {
    scam: 'The Fake "Closing Sale"',
    description: '"I am closing my shop forever — everything 50% off today only." This shop has been "closing" for five years. It creates false urgency to stop you from comparing prices.',
    avoidance: 'Ignore urgency tactics. Walk away and compare at three other shops. Genuine closing sales are rare and would not target a single tourist.',
  },
  {
    scam: 'The Bait and Switch',
    description: 'You agree on a price for a quality item. While wrapping it, the seller swaps in a lower-quality piece. Common with leather bags, argan oil, and saffron.',
    avoidance: 'Watch the wrapping process. Mark your item with a small pen dot or take a photo before they wrap it. Open the package before leaving the shop to verify.',
  },
  {
    scam: 'The "Fixed Price" Lie',
    description: 'Seller claims "prix fixe — no bargaining here." In a souk stall, this is almost never true. It is a technique to avoid negotiation and sell at inflated prices.',
    avoidance: 'Test it. Make a counter-offer anyway. If they truly have fixed prices, they will show you a price tag. Only legitimate fixed-price shops (Ensemble Artisanal, cooperatives) post printed tags.',
  },
  {
    scam: 'Fake Saffron and Argan Oil',
    description: 'Cheap safflower dyed red and sold as saffron. Industrial oil with argan scent sold as pure argan oil. Both are widespread in tourist areas.',
    avoidance: 'Buy saffron from reputable spice shops — real saffron has three red threads per strand and releases color slowly in warm water. Buy argan oil from women\'s cooperatives with sealed bottles.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHagglingGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#3D1E0F] via-[#5C2E1A] to-[#1a0f0a]">
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-24 md:py-32">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-xs text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Morocco Haggling Guide</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            How to Haggle in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            Souk bargaining tips, fair prices for 20+ items, essential Darija phrases,
            and the walk-away strategies that actually work
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <Tag className="w-3.5 h-3.5" /> 24 Items Priced
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <Languages className="w-3.5 h-3.5" /> 12 Darija Phrases
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5" /> Updated March 2026
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          THE ART OF HAGGLING — CULTURAL CONTEXT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            The Art of Haggling in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Bargaining is woven into daily Moroccan commerce — and has been for over a thousand years
          </p>

          <div className="prose max-w-none">
            <div className="card-moroccan p-6 md:p-8 mb-8">
              <div className="flex items-start gap-4">
                <HandCoins className="w-10 h-10 text-[var(--color-accent)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    Haggling Is Not Rude — It Is Expected
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    Moroccan souk sellers price their goods with bargaining built in. The initial asking price in most medinas
                    runs 2-5 times higher than what the seller expects to receive. In heavy tourist zones like the streets
                    around Jemaa el-Fnaa, markups can hit 10x on small items like scarves and keychains.
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    Paying the first price a seller quotes does not make you generous — it marks you as someone unfamiliar
                    with local customs. Moroccans themselves haggle for everything from shoes to furniture. The interaction
                    is social: a conversation that involves tea, small talk, and a mutual search for a number both
                    parties accept.
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The ritual follows a predictable pattern. The seller names a high price. You counter low. Both sides
                    move toward the middle. Along the way, you learn about the item, the craftsmanship, and the seller&apos;s
                    family. This exchange is as much about human connection as it is about commerce, and rushing it
                    defeats the purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-moroccan p-5 text-center">
                <ThumbsUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Do This
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Smile, make eye contact, accept tea, counter-offer with respect, compliment the craftsmanship, walk away politely
                </p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <ThumbsDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Avoid This
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Insulting the goods, laughing at prices, getting angry, making offers you would not honor, haggling and then not buying
                </p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Info className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Remember
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Once a price is agreed and you shake on it, the deal is done. Backing out after agreement is considered deeply disrespectful
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7 GOLDEN RULES OF BARGAINING
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            The 7 Golden Rules of Bargaining
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Follow these rules and you will pay fair prices across every souk in Morocco
          </p>

          <div className="space-y-4">
            {goldenRules.map((rule) => (
              <div key={rule.number} className="card-moroccan p-5 md:p-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold text-lg shrink-0">
                  {rule.number}
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                    <rule.icon className="w-4 h-4 text-[var(--color-accent)]" />
                    {rule.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STEP-BY-STEP HAGGLING STRATEGY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Step-by-Step Haggling Strategy
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            A proven sequence that works in every Moroccan souk — from Marrakech to Meknes
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <span className="text-[var(--color-accent)] mr-2">Step 1:</span> Scout First, Buy Later
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Walk the souk once without buying anything. Note which shops carry the item you want
                and roughly where prices start. Visit the Ensemble Artisanal (government fixed-price shop) to
                see baseline quality and pricing. This costs you an hour but saves you hundreds of dirhams.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <span className="text-[var(--color-accent)] mr-2">Step 2:</span> Approach With Casual Interest
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Browse several items in the shop. Ask about things you do not intend to buy. When you pick up
                your target item, ask &quot;B-shhal?&quot; (how much?) as if it is just another question. Let the seller
                give the first number. Never name your price first — you lose the anchor advantage.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <span className="text-[var(--color-accent)] mr-2">Step 3:</span> React and Counter
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                When they name their price, pause. Raise your eyebrows slightly. Say &quot;Ghali bzaf&quot; (too expensive)
                with a friendly tone, not anger. Then counter at 30-40% of their ask. If they said 1,000 MAD,
                you say 300-400 MAD. Expect them to act shocked — this is part of the performance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <span className="text-[var(--color-accent)] mr-2">Step 4:</span> The Back-and-Forth
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Each round, increase your offer in smaller increments. Move from 300 to 350, then 380, then 400.
                The seller drops in larger increments at first (1,000 to 700 to 550). As the gap narrows, both
                sides slow down. This phase takes 5-15 minutes depending on the item value.
              </p>
            </div>

            {/* Step 5 */}
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <span className="text-[var(--color-accent)] mr-2">Step 5:</span> The Walk-Away
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                If the price stalls above your target, say &quot;Shukran, I will think about it&quot; and start walking
                toward the exit. In approximately 7 out of 10 cases, the seller calls you back with a lower
                number. If they let you go, their last price was near their actual cost — come back later
                and accept it, or try the next shop.
              </p>
            </div>

            {/* Step 6 */}
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <span className="text-[var(--color-accent)] mr-2">Step 6:</span> Close the Deal
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Once you reach a price you are happy with, shake hands. Pay in cash with as close to exact
                change as possible. If buying multiple items, negotiate the bundle price before paying for
                anything. Watch the seller wrap your purchase and verify the item matches what you agreed on.
              </p>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-5 bg-amber-50 border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Critical Rule: Never Haggle Unless You Intend to Buy
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Making a counter-offer signals genuine interest. If the seller accepts your price, you are
                  morally obligated to complete the purchase. Haggling for sport and then walking away after
                  agreement wastes the seller&apos;s time and is considered rude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAIR PRICE GUIDE — 24 ITEMS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Fair Price Guide — 24 Common Souk Items
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-4 max-w-2xl mx-auto">
            What sellers ask vs. what you should pay after haggling. Prices reflect 2026 rates and may vary by city, quality, and season.
          </p>
          <p className="text-center text-xs text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
            <Info className="w-3 h-3 inline mr-1" />
            &quot;Fair price&quot; assumes decent quality and a tourist-area souk. Local-area souks and cooperatives may be 20-30% lower.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full card-moroccan overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-accent)] text-white">
                  <th className="text-left p-3 md:p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Item</th>
                  <th className="text-left p-3 md:p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Category</th>
                  <th className="text-left p-3 md:p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Seller&apos;s Ask</th>
                  <th className="text-left p-3 md:p-4 text-sm font-[family-name:var(--font-heading)] font-bold">Fair Haggled Price</th>
                </tr>
              </thead>
              <tbody>
                {priceGuideItems.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-t border-[var(--border-primary)] ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}
                  >
                    <td className="p-3 md:p-4 text-sm text-[var(--text-primary)] font-medium">{row.item}</td>
                    <td className="p-3 md:p-4 text-xs text-[var(--text-secondary)]">{row.category}</td>
                    <td className="p-3 md:p-4 text-sm text-red-600 line-through">{row.askingPrice}</td>
                    <td className="p-3 md:p-4 text-sm text-green-700 font-bold">{row.fairPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[var(--text-secondary)] text-center mt-4">
            Seasonal pricing can change. Prices are higher during peak tourist season (October-April) and around major holidays.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT NOT TO HAGGLE FOR
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            What NOT to Haggle For
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Not everything in Morocco is negotiable. Know the exceptions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Supermarkets &amp; Chain Stores
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Carrefour, Marjane, Acima, and BIM all have fixed prices with barcodes. Attempting to haggle here will get you odd looks.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Restaurants &amp; Cafes
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Menu prices are fixed. You pay what the menu says. Tipping is separate (10-15% is standard for good service).
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Pharmacies &amp; Medicine
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Pharmaceutical prices are government-regulated in Morocco. Every pharmacy charges the same amount for the same medication.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Bread &amp; Basic Staples
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Khobz (Moroccan bread) is sold at regulated prices — typically from 1.50 MAD per round loaf. Vegetable and fruit vendors with displayed prices use fixed rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Fixed-Price Artisan Shops
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Look for &quot;prix fixe&quot; signage. Government-run Ensemble Artisanal shops, women&apos;s cooperatives, and fair-trade shops set non-negotiable prices to ensure artisans earn fairly.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Metered Taxis &amp; Trains
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Petit taxis with running meters and ONCF trains have fixed rates. Grand taxis between cities are negotiable. Always insist petit taxis turn on the meter (&quot;compteur&quot;).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DARIJA PHRASES FOR BARGAINING
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Darija Phrases for Bargaining
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Speaking even a few words of Moroccan Arabic (Darija) earns respect and often earns you lower prices
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {darijaPhrases.map((phrase) => (
              <div key={phrase.darija} className="card-moroccan p-4 flex items-center gap-4">
                <MessageCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                      {phrase.darija}
                    </span>
                    <span className="text-xs text-[var(--color-accent)] italic">
                      ({phrase.pronunciation})
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{phrase.english}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Languages className="w-4 h-4 text-[var(--color-accent)]" />
              Language Tip
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Most souk sellers speak French, and many speak English, Spanish, or Italian. But opening in Darija
              — even just &quot;B-shhal?&quot; — signals that you have spent time in Morocco and are less likely to accept
              inflated tourist prices. French is your backup language. Saying &quot;C&apos;est trop cher&quot; (it&apos;s too
              expensive) works perfectly alongside Darija phrases.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHERE TO HAGGLE — BEST SOUKS BY CITY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Haggle — Best Souks by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Each city has its own haggling culture, markup levels, and specialties
          </p>

          <div className="space-y-6">
            {bestSouks.map((city) => (
              <div key={city.city} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                  <span className="ml-auto text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-medium">
                    Markup: {city.markupLevel}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {city.souks.map((souk) => (
                    <div key={souk.name} className="flex items-start gap-2">
                      <Store className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold text-[var(--text-primary)]">{souk.name}</span>
                        <p className="text-xs text-[var(--text-secondary)]">{souk.specialty}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <Star className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                    <strong>Insider tip:</strong> {city.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMMON SCAMS & HOW TO AVOID THEM
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Common Scams &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Most sellers are honest, but knowing these tactics keeps you from overpaying
          </p>

          <div className="space-y-4">
            {commonScams.map((scam) => (
              <div key={scam.scam} className="card-moroccan p-5 md:p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                  {scam.scam}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  {scam.description}
                </p>
                <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-green-800">
                    <strong>How to avoid:</strong> {scam.avoidance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a fair starting counter-offer when haggling in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Start your counter-offer at 30-40% of the seller&apos;s asking price. The final agreed price
                typically lands between 40-60% of the initial ask. For high-ticket items like rugs, you can
                start even lower at 20-25%. The seller expects low counter-offers — it is part of the game.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it rude to haggle in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not at all. Haggling is an expected part of Moroccan souk culture and has been for centuries.
                Shopkeepers build bargaining margins into their prices. Not haggling actually surprises most
                sellers. The key is to stay respectful, smile, and treat it as a social exchange rather than
                a confrontation.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much can I save by haggling in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Skilled hagglers save 40-70% off the initial asking price. Tourist-heavy areas like
                Marrakech&apos;s Jemaa el-Fnaa have higher markups (sometimes 5-10x), while smaller cities like
                Meknes or Essaouira have lower initial markups of 2-3x. Your savings depend on the item,
                location, time of day, and how many tourists are around.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I haggle for everything in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No. Haggling applies to souk goods, grand taxis (between cities), and private tours. Do
                not haggle at pharmacies, supermarkets, restaurants, fixed-price shops (look for &quot;prix fixe&quot;
                signs), or when buying bread and basic produce from vendors with displayed prices. Petit taxis
                should use meters — insist on &quot;compteur.&quot;
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What Darija phrases help with bargaining in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key phrases include &quot;B-shhal?&quot; (how much?), &quot;Ghali bzaf&quot; (too expensive), &quot;Akhir taman?&quot;
                (last price?), and &quot;La shukran&quot; (no thank you). Speaking even basic Darija earns respect
                from sellers and often leads to better prices. You do not need fluency — four or five phrases
                make a measurable difference.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are fair prices for leather bags in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A quality leather handbag costs from 200-400 MAD at fair haggled prices. Sellers typically
                start at 600-1,200 MAD. Larger travel bags cost from 400-800 MAD. Check stitching quality,
                smell the leather (real leather has a distinct natural scent), and ask whether it is goat, cow,
                or camel leather. Goat leather is the softest; cow leather is the most durable.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Moroccan souk is best for haggling and fair prices?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Fes el-Bali offers the most authentic haggling with lower tourist markups. Essaouira&apos;s souk
                is relaxed and prices are fairer from the start. Marrakech has the biggest selection but the
                highest markups. Meknes is under-the-radar with prices close to local rates. For rugs, the
                carpet souks of Fes and Marrakech remain unmatched for variety and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES + CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Morocco Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Banknote className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco on from 300 MAD per day. Budget accommodations, transport, and food tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-money-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <HandCoins className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Money &amp; Currency Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                ATM locations, exchange rates, tipping customs, and how to handle cash across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-first-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything first-time visitors need to know — visas, safety, cultural norms, and top destinations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#3D1E0F] via-[#5C2E1A] to-[#1a0f0a] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-6">
            Ready to Shop the Souks?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Bookmark this guide on your phone. Pull up the price table before entering any souk.
            Practice &quot;B-shhal?&quot; and &quot;Ghali bzaf&quot; — and enjoy the art of the deal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/marrakech"
              className="bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Explore Marrakech
            </Link>
            <Link
              href="/fes"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" /> Explore Fes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
