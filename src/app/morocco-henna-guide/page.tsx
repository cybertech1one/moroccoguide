import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Banknote,
  CircleAlert,
  Compass,
  Heart,
  ShoppingBag,
  Star,
  Paintbrush,
  Droplets,
  PartyPopper,
  Gem,
  Hand,
  Flower2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Henna Guide 2026 | Traditional Art, Prices, Safety & Where to Get Henna',
  description:
    'Complete guide to henna in Morocco for 2026. Discover Moroccan henna traditions, design styles, where to get henna in Marrakech and Fes, price guide, how to spot safe natural henna vs dangerous black henna, wedding henna ceremonies, and buying henna products.',
  keywords: [
    'henna in Morocco',
    'Moroccan henna guide',
    'getting henna Morocco',
    'henna Marrakech',
    'Morocco henna designs',
    'Moroccan henna art',
    'henna price Morocco',
    'black henna warning',
    'natural henna Morocco',
    'henna wedding Morocco',
    'Jemaa el-Fnaa henna',
    'Morocco henna traditions',
    'henna safety tips',
    'buy henna Morocco',
    'Moroccan henna patterns',
    'henna artists Morocco',
  ],
  openGraph: {
    title: 'Morocco Henna Guide 2026 | Traditional Art, Prices, Safety & Where to Get Henna',
    description:
      'Everything you need to know about henna in Morocco. Traditional designs, where to find artists, prices, safety tips, wedding ceremonies, and buying henna products to take home.',
    url: `${BASE_URL}/morocco-henna-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan henna art featuring intricate geometric patterns applied to hands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Henna Guide 2026 | Designs, Prices & Safety Tips',
    description:
      'Moroccan henna traditions, design styles, where to get henna, price guide, safety warnings about black henna, and how to buy authentic henna products.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-henna-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-henna-guide`,
  name: 'Morocco Henna Guide 2026 | Traditional Art, Prices, Safety & Where to Get Henna',
  description:
    'Complete guide to henna in Morocco for 2026, covering Moroccan henna traditions, design styles, where to get henna applied, price guide for street artists and salons, how to identify safe natural henna, wedding henna ceremonies, and buying henna products.',
  url: `${BASE_URL}/morocco-henna-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-henna-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Henna Guide', item: `${BASE_URL}/morocco-henna-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does henna cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Henna prices in Morocco vary by location and complexity. Street artists at Jemaa el-Fnaa charge from 50-200 MAD for a small to medium design. Medina henna shops charge from 100-400 MAD depending on size and detail. Professional salon henna sessions cost from 300-800 MAD, while private bookings for bridal or event henna start from 1,500 MAD and can exceed 5,000 MAD for full hands and feet. Always agree on the price before the artist begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is henna in Morocco safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural henna (made from the Lawsonia inermis plant) is generally safe and has been used in Morocco for centuries. It produces a reddish-brown to dark brown stain. However, "black henna" containing para-phenylenediamine (PPD) can cause severe allergic reactions, chemical burns, and permanent scarring. Always ask for natural henna, check that the paste is greenish-brown (not black), and do a small patch test if you have sensitive skin.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Moroccan henna last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural Moroccan henna typically lasts from 1-3 weeks, depending on skin type, where the design is placed, and aftercare. Henna on palms and soles (where skin is thicker) tends to last longest and stain darkest. The initial color is bright orange, darkening to a rich brown over 24-48 hours. Frequent hand washing, swimming, and exfoliation will cause the design to fade faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cultural significance of henna in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Henna holds deep cultural and spiritual significance in Morocco. It is believed to bring baraka (blessings), protect against the evil eye, and symbolize joy and good fortune. Henna is central to Moroccan weddings, where the bride undergoes an elaborate henna ceremony (known as the henna party or laylat al-henna) the night before the wedding. It is also applied during religious holidays like Eid, baby naming ceremonies, and other milestone celebrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to get henna in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular spot is Jemaa el-Fnaa square in Marrakech, where dozens of henna artists sit in the open. However, quality and pricing vary greatly, and aggressive selling is common. For a better experience, seek out recommended henna artists in the medina souks of Marrakech or Fes, visit a professional henna salon, or ask your riad for a private henna session. Cities like Meknes, Essaouira, and Chefchaouen also have talented henna artists with less tourist pressure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can men get henna in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, men can get henna in Morocco. While elaborate henna designs are more commonly associated with women, men have used henna for centuries in Moroccan culture. Grooms traditionally have henna applied to their hands during the wedding ceremony. Male tourists are welcome to get henna designs from artists, though simpler geometric patterns are more typical for men. There is no cultural taboo against men wearing henna.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I tip the henna artist in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping henna artists is appreciated but not strictly required if you have already agreed on a fair price. If you are very happy with the design, adding from 20-50 MAD as a tip is a kind gesture. For private henna sessions at riads or for wedding henna, tipping from 50-100 MAD or 10-15% of the total price is customary. Always pay in cash and have small bills ready.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy henna products to take home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is one of the best places in the world to buy authentic henna products. Look for pure henna powder (without additives) in the spice souks, particularly in Marrakech, Fes, and Meknes. Pre-made henna cones are convenient for application at home. You can also find henna oil for hair treatment and henna-based cosmetics. Check that products are sealed and labeled. Henna powder and cones are allowed in checked luggage for most airlines.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HENNA DESIGN STYLES
   ═══════════════════════════════════════════════════════════════ */

const hennaStyles = [
  {
    style: 'Moroccan Geometric',
    description: 'The most traditional Moroccan style features bold geometric patterns, straight lines, diamond shapes, and angular designs inspired by Amazigh (Berber) tribal motifs and Islamic art. Symmetrical and striking, these designs often cover the entire palm and back of the hand with repeating geometric elements.',
    hallmarks: 'Diamond grids, triangular shapes, bold lines, symmetrical patterns',
    icon: Gem,
  },
  {
    style: 'Arabic Flowing',
    description: 'Arabic henna designs are characterized by flowing, free-form floral patterns with large open spaces that let the skin show through. These designs often feature vines, leaves, and abstract flower motifs that cascade elegantly across the hand and up the fingers.',
    hallmarks: 'Flowing vines, open spacing, floral motifs, elegant curves',
    icon: Flower2,
  },
  {
    style: 'Indian Detailed',
    description: 'While not traditionally Moroccan, Indian-style mehndi has become popular among tourists and younger Moroccan artists. These designs feature extremely fine detail, paisley patterns, peacock motifs, and dense coverage that fills every space on the hand and fingers.',
    hallmarks: 'Paisley patterns, fine detail, dense coverage, peacock motifs',
    icon: Sparkles,
  },
  {
    style: 'Modern Fusion',
    description: 'Contemporary Moroccan henna artists increasingly blend styles, combining geometric Moroccan elements with Arabic florals and modern minimalist touches. Fusion designs may incorporate personal symbols, names in Arabic calligraphy, or abstract art-inspired elements.',
    hallmarks: 'Mixed styles, personal symbols, calligraphy, minimalist accents',
    icon: Paintbrush,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO GET HENNA
   ═══════════════════════════════════════════════════════════════ */

const hennaLocations = [
  {
    location: 'Jemaa el-Fnaa, Marrakech',
    description: 'The most famous spot for henna in Morocco. Dozens of women sit with their henna cones in the square, offering designs to passing tourists. The atmosphere is lively but be prepared for assertive selling. Always agree on a price before the artist starts, and be firm about what design you want.',
    priceRange: 'from 50-200 MAD',
    pros: 'Iconic experience, many artists to choose from, instant availability',
    cons: 'Aggressive selling, quality varies, potential for price disputes',
    icon: MapPin,
  },
  {
    location: 'Medina Henna Shops & Souks',
    description: 'Small henna shops and freelance artists throughout the medinas of Marrakech, Fes, Meknes, and other cities offer a calmer experience. These artists often have portfolios of their work and tend to use higher-quality natural henna. Ask your riad host for recommendations.',
    priceRange: 'from 100-400 MAD',
    pros: 'Better quality, calmer environment, can view portfolio',
    cons: 'Harder to find without recommendation, limited availability',
    icon: ShoppingBag,
  },
  {
    location: 'Professional Henna Salons',
    description: 'Dedicated henna and beauty salons in major cities offer the most professional experience. These salons use premium natural henna, provide comfortable seating, and their artists are highly skilled in multiple design styles. Many offer henna combined with hammam or spa packages.',
    priceRange: 'from 300-800 MAD',
    pros: 'Professional quality, comfortable setting, premium henna',
    cons: 'Higher prices, may need appointment in advance',
    icon: Star,
  },
  {
    location: 'Private Riad or Hotel Bookings',
    description: 'Many riads and hotels can arrange for a henna artist to come to your accommodation for a private session. This is the most relaxed and personalized option, ideal for groups, hen parties, or anyone who prefers a quiet setting. The artist will bring all supplies and can customize designs.',
    priceRange: 'from 500-1,500 MAD',
    pros: 'Private, relaxed, highly personalized, great for groups',
    cons: 'Most expensive option, requires advance booking',
    icon: Heart,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Small Design (one finger or wrist)', price: 'from 50-100 MAD', note: 'Common for a quick souvenir design at tourist spots like Jemaa el-Fnaa.' },
  { service: 'Medium Design (one hand, front or back)', price: 'from 100-250 MAD', note: 'The most popular option for tourists. Covers one side of one hand.' },
  { service: 'Full Hand (both sides)', price: 'from 200-500 MAD', note: 'Front and back of one hand with detailed patterns extending to the wrist.' },
  { service: 'Both Hands (full design)', price: 'from 400-800 MAD', note: 'Complete henna design on both hands. Usually done at a salon or private booking.' },
  { service: 'Bridal Henna (hands and feet)', price: 'from 1,500-5,000 MAD', note: 'Elaborate multi-hour session for weddings. Includes both hands and both feet.' },
  { service: 'Group/Party Session (per person)', price: 'from 200-400 MAD', note: 'Discounted per-person rate for groups of 4 or more at a private booking.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HENNA SAFETY
   ═══════════════════════════════════════════════════════════════ */

const safetyChecklist = [
  'Natural henna paste is greenish-brown in color, never jet black',
  'Natural henna smells earthy and herbal, not like chemicals',
  'The resulting stain starts orange and darkens to brown over 24-48 hours',
  'Ask the artist to show you the henna ingredients or packaging',
  'Avoid any henna that promises an instant dark or black stain',
  'If you feel burning, itching, or stinging during application, ask for it to be removed immediately',
  'Do a small patch test on a less visible area first if you have sensitive skin',
  'Black henna containing PPD (para-phenylenediamine) can cause severe blistering and permanent scarring',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HENNA PROCESS STEPS
   ═══════════════════════════════════════════════════════════════ */

const hennaProcess = [
  { step: 1, title: 'Preparation', detail: 'The henna artist mixes fresh henna powder with water, lemon juice, and essential oils (often eucalyptus or tea tree) to create a smooth paste. The paste needs to sit for several hours to release its dye. Good artists prepare their henna the night before for maximum stain intensity.' },
  { step: 2, title: 'Skin Preparation', detail: 'Clean and dry your skin before application. Avoid applying lotions, sunscreen, or oils to the area where henna will be applied, as these create a barrier that weakens the stain. Some artists gently exfoliate the skin first for a better result.' },
  { step: 3, title: 'Design Selection', detail: 'Choose your design from the artist&apos;s portfolio or describe what you want. Moroccan artists can freehand most traditional patterns. Discuss size, style, and placement. This is also when you should agree on the final price.' },
  { step: 4, title: 'Application', detail: 'The artist applies the henna paste using a cone (similar to a piping bag), a syringe, or a small stick. The paste is applied in raised lines on the skin surface. A skilled artist works quickly and precisely. A medium design on one hand takes 15-30 minutes.' },
  { step: 5, title: 'Drying and Setting', detail: 'The henna paste must dry and sit on the skin for at least 2-4 hours for a good stain, ideally 6-8 hours or overnight. Do not touch, smudge, or wash the design while it dries. Some artists apply a lemon-sugar sealant to keep the paste moist and improve color.' },
  { step: 6, title: 'Removal and Aftercare', detail: 'Gently scrape or flake off the dried henna paste; do not wash it off with water. The initial stain will be bright orange, darkening to rich brown within 24-48 hours. Avoid water on the area for at least 12 hours. Apply coconut oil or olive oil to extend the life of the design.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUYING HENNA PRODUCTS
   ═══════════════════════════════════════════════════════════════ */

const hennaProducts = [
  { product: 'Pure Henna Powder', description: 'Fine-ground henna leaf powder for making fresh paste. Look for bright green powder with an earthy smell. Best quality comes from the Meknes and Azemmour regions of Morocco.', where: 'Spice souks, herbal shops (attarine)', price: 'from 20-80 MAD per 100g' },
  { product: 'Pre-Made Henna Cones', description: 'Ready-to-use henna cones filled with prepared paste. Convenient for application at home but check the expiration date and ingredients list for additives.', where: 'Beauty shops, souvenir stores, souks', price: 'from 15-40 MAD per cone' },
  { product: 'Henna Oil (Hair Treatment)', description: 'Henna-infused oil used for strengthening and conditioning hair. A popular traditional Moroccan beauty product that adds reddish tones and shine.', where: 'Herbalists, beauty shops, cooperatives', price: 'from 30-100 MAD per bottle' },
  { product: 'Henna Stencils and Kits', description: 'Adhesive stencils and application kits with cones, oil, and instructions. Ideal for beginners who want to try henna art at home.', where: 'Tourist shops, beauty supply stores', price: 'from 50-150 MAD per kit' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/crafts',
    title: 'Moroccan Crafts Guide',
    description: 'Explore the rich tradition of Moroccan handicrafts, from pottery and zellige tilework to leatherwork and woodcarving.',
    icon: Paintbrush,
  },
  {
    href: '/culture',
    title: 'Moroccan Culture Guide',
    description: 'Deep dive into Moroccan traditions, festivals, arts, music, and the rich cultural heritage of the kingdom.',
    icon: BookOpen,
  },
  {
    href: '/morocco-cultural-etiquette',
    title: 'Morocco Etiquette Guide',
    description: 'Essential customs, dress code, dining rules, mosque etiquette, and Darija phrases for respectful travel.',
    icon: Heart,
  },
  {
    href: '/what-to-buy-morocco',
    title: 'What to Buy in Morocco',
    description: 'Complete shopping guide for Moroccan souks, from spices and argan oil to leather goods and traditional clothing.',
    icon: ShoppingBag,
  },
  {
    href: '/things-to-do-marrakech',
    title: 'Things to Do in Marrakech',
    description: 'Top attractions, experiences, and hidden gems in Morocco\'s most popular city, including Jemaa el-Fnaa.',
    icon: Compass,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHennaGuidePage() {
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
          style={{
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Henna Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Paintbrush className="w-4 h-4" />
            Traditional Henna Art &amp; Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Henna Guide
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            History, design styles, where to get henna, price guide, safety tips,
            wedding traditions, and buying henna products in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Ancient Art of Henna in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Henna is far more than body decoration in Morocco &mdash; it is a living tradition
                woven into the fabric of Moroccan life for over a thousand years. Known as
                &ldquo;henna&rdquo; in Arabic and &ldquo;tazdirt&rdquo; in Amazigh, this natural
                plant-based dye transforms celebrations, marks life&apos;s milestones, and carries
                deep spiritual significance that connects modern Moroccans to their ancestors.
              </p>
              <p>
                From the intricate geometric patterns adorning a bride&apos;s hands on her wedding
                night to the simple henna dots applied to a newborn for protection, henna is
                present at every joyful moment in Moroccan culture. For travelers, getting a
                henna design applied by a skilled Moroccan artist is one of the most memorable
                and personal souvenirs you can take home.
              </p>
              <p>
                The henna plant (Lawsonia inermis) thrives in Morocco&apos;s warm climate,
                particularly in the regions around Meknes, Azemmour, and the Draa Valley.
                Moroccan henna is prized worldwide for its rich color and quality, making
                Morocco one of the leading producers and exporters of henna in the world.
              </p>
              <p>
                This guide covers everything you need to know about henna in Morocco: its
                history and cultural meaning, the different design styles, where to find
                talented artists, how much to pay, critical safety information about avoiding
                dangerous chemical henna, and how to care for your design to make it last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Henna Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Henna at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Quick facts about henna culture and tradition in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Tradition', value: '5,000+ Years', detail: 'Henna has been used in North Africa since ancient times', icon: Clock },
              { label: 'Typical Duration', value: '1-3 Weeks', detail: 'Natural henna stains last depending on skin and care', icon: Droplets },
              { label: 'Cultural Meaning', value: 'Baraka (Blessings)', detail: 'Believed to bring good fortune and ward off evil', icon: Shield },
              { label: 'Tourist Price', value: 'from 50 MAD', detail: 'Simple designs start from 50 MAD at street artists', icon: Banknote },
            ].map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── History & Cultural Significance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            History &amp; Cultural Significance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How henna became an integral part of Moroccan identity, spirituality, and celebration.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {[
                { title: 'Ancient Origins', detail: 'Henna use in North Africa dates back over 5,000 years, with evidence of henna body art in ancient Egyptian, Phoenician, and Carthaginian civilizations. In Morocco, henna traditions blended Amazigh tribal practices with Arab and Islamic customs after the 7th-century arrival of Islam, creating a uniquely Moroccan henna culture.', icon: Clock },
                { title: 'Baraka (Blessings)', detail: 'Moroccans believe henna carries baraka, a concept of divine blessing and spiritual power. Applying henna is thought to bring good fortune, happiness, and positive energy. This is why henna is applied at weddings, births, and religious holidays. The act of receiving henna is itself considered a blessing.', icon: Sparkles },
                { title: 'Protection Against the Evil Eye', detail: 'One of the oldest beliefs surrounding henna in Morocco is its power to ward off the evil eye (al-ayn) and malevolent spirits (jinn). Brides receive elaborate henna to protect them as they enter a new stage of life. Symbols like the Hand of Fatima (khamsa) and the number five are common protective motifs.', icon: Shield },
                { title: 'Celebrations & Milestones', detail: 'Henna marks every significant moment in Moroccan life: weddings (the most elaborate), baby naming ceremonies (aqiqa), circumcisions, Eid celebrations, Mawlid (the Prophet\'s birthday), and even when a family member returns from the Hajj pilgrimage. It transforms ordinary moments into sacred occasions.', icon: PartyPopper },
                { title: 'Feminine Tradition & Community', detail: 'Henna ceremonies in Morocco are deeply feminine gatherings. Women come together to apply henna, share stories, sing traditional songs, and celebrate. The neggafa (henna artist) holds an honored role in Moroccan society. These gatherings strengthen bonds between women across generations.', icon: Users },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Henna Design Styles ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Paintbrush className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Henna Designs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four main design styles you will encounter from henna artists across Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hennaStyles.map((item) => {
              const StyleIcon = item.icon;
              return (
                <div key={item.style} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <StyleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.style}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.description}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Star className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                    <strong>Hallmarks:</strong> {item.hallmarks}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Where to Get Henna ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Get Henna in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From bustling squares to private sessions &mdash; the best places to experience Moroccan henna art.
          </p>

          <div className="space-y-6">
            {hennaLocations.map((item) => {
              const LocIcon = item.icon;
              return (
                <div key={item.location} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LocIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.location}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-accent)]">{item.priceRange}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                      <p className="text-xs font-semibold text-green-700 uppercase mb-1">Pros</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.pros}</p>
                    </div>
                    <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                      <p className="text-xs font-semibold text-amber-700 uppercase mb-1">Cons</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.cons}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Henna Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect to pay for henna in Morocco, from simple tourist designs to bridal work.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {priceGuide.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                  <div className="md:min-w-[260px]">
                    <p className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)]">
                      {item.service}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-accent)]">{item.price}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Pricing Tip
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Always agree on the price and the exact design before the artist begins. Show a
                  photo of what you want if possible. Some street artists at Jemaa el-Fnaa may
                  start applying henna without asking and then demand a high price. Be polite but
                  firm, and do not feel pressured. Seasonal pricing may vary during peak tourist
                  months and major holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Henna Safety ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-red-600 mr-2" />
            Safe Henna vs. Black Henna
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to tell natural, safe henna from dangerous chemical &ldquo;black henna&rdquo; that can cause serious harm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Natural Henna (Safe)
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[var(--text-secondary)]">
                  Made from the crushed leaves of the Lawsonia inermis plant, natural henna has
                  been used safely for thousands of years. The paste is greenish-brown and smells
                  earthy. It stains the skin a reddish-orange color initially, deepening to a warm
                  brown over 24-48 hours. Natural henna is safe for most people, though rare allergic
                  reactions can occur.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <CircleAlert className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Black Henna (Dangerous)
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[var(--text-secondary)]">
                  &ldquo;Black henna&rdquo; is not real henna. It contains para-phenylenediamine
                  (PPD), a chemical dye that produces an instant jet-black stain. PPD can cause
                  severe allergic reactions including blistering, chemical burns, permanent scarring,
                  and sensitization that may prevent you from ever using hair dyes containing PPD
                  again. Never use black henna.
                </p>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <Shield className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Safety Checklist
            </h3>
            <div className="space-y-3">
              {safetyChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Henna Process ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Henna Process: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect from preparation through aftercare when getting henna in Morocco.
          </p>

          <div className="space-y-4">
            {hennaProcess.map((item) => (
              <div key={item.step} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0 font-bold text-lg font-[family-name:var(--font-display)]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Aftercare Tips for Longer-Lasting Henna
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Keep the area warm while the paste is drying &mdash; heat helps the dye bond
                  to skin. After removing the paste, apply coconut oil, olive oil, or shea butter
                  to seal the design. Avoid chlorinated pools and harsh soaps for the first few
                  days. Pat hands dry instead of rubbing. A well-cared-for henna design can last
                  up to three weeks on palms and soles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Henna for Weddings ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <PartyPopper className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Henna for Weddings &amp; Special Occasions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The henna night is one of the most beautiful and sacred traditions in Moroccan weddings.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Heart className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Laylat al-Henna (The Henna Night)
            </h3>
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                The night before (or several days before) a Moroccan wedding, the bride hosts
                &ldquo;laylat al-henna&rdquo; &mdash; the henna night. This is an all-female
                celebration where the bride sits in her finest traditional kaftan while a
                professional henna artist (neggafa) applies elaborate designs to her hands
                and feet. The ceremony can take 4-8 hours for the most intricate work.
              </p>
              <p>
                Female relatives and friends gather around, singing traditional songs,
                playing darbuka drums, eating Moroccan pastries, and sharing in the joy.
                Each woman often receives a small henna design as well, symbolizing their
                shared blessings. The groom also receives henna on his hands, typically
                simpler geometric patterns, applied separately by his male relatives.
              </p>
              <p>
                Bridal henna designs often incorporate hidden initials of the groom&apos;s
                name within the patterns. Tradition holds that the groom must find his
                initials in the bride&apos;s henna before the wedding can proceed &mdash; a
                playful ritual that adds laughter and anticipation to the celebrations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { occasion: 'Eid Celebrations', detail: 'During Eid al-Fitr and Eid al-Adha, women and girls across Morocco apply henna to their hands and feet. Simple, beautiful designs mark the festive holiday spirit and community celebration.', icon: Star },
              { occasion: 'Baby Naming Ceremonies', detail: 'Seven days after birth, at the aqiqa ceremony, henna is applied to the baby\'s hands and feet for protection and blessings. The mother also receives henna as she celebrates her new child.', icon: Heart },
              { occasion: 'Religious Pilgrimages', detail: 'When a family member returns from the Hajj pilgrimage to Mecca, celebrations include henna application for the pilgrim and family members, marking the spiritual significance of the journey.', icon: Sparkles },
              { occasion: 'Coming-of-Age Milestones', detail: 'Circumcision ceremonies for boys, a girl\'s first experience wearing henna, and other milestone events are marked with henna art as a rite of passage in Moroccan culture.', icon: Users },
            ].map((item) => {
              const OccIcon = item.icon;
              return (
                <div key={item.occasion} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OccIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-1">
                      {item.occasion}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tourist Tips for Getting Henna ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Tips for Tourists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to ensure your henna experience in Morocco is enjoyable, safe, and fair.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {[
                { tip: 'Agree on Price First', detail: 'Before any henna touches your skin, confirm the total price and exactly what design you are getting. Show a reference photo if possible. This prevents misunderstandings and inflated prices after the work is done.', icon: Banknote },
                { tip: 'Beware of Uninvited Application', detail: 'At Jemaa el-Fnaa and other tourist spots, some henna artists may grab your hand and begin applying henna without your consent. Politely but firmly pull your hand away if you have not agreed to a session. You are under no obligation to pay for unsolicited henna.', icon: Shield },
                { tip: 'Schedule Henna Early in Your Trip', detail: 'Get your henna done in the first few days of your Morocco visit rather than the last day. This gives the design time to darken to its fullest color (24-48 hours) and allows you to enjoy it throughout your stay and in photographs.', icon: Clock },
                { tip: 'Bring a Reference Photo', detail: 'Save photos of henna designs you like on your phone before your trip. Showing the artist exactly what you want ensures you get the style and level of detail you are expecting. Most artists are happy to replicate or adapt designs from photos.', icon: Star },
                { tip: 'Plan Your Drying Time', detail: 'Remember that henna paste needs to stay on for 2-8 hours to stain properly. Plan your henna session for a time when you can relax afterward, such as before an evening at your riad. Avoid getting henna right before activities that involve water or lots of hand use.', icon: Clock },
                { tip: 'Ask About Ingredients', detail: 'A good henna artist will happily tell you what is in their henna paste. Natural henna contains henna powder, lemon juice, sugar, and essential oils. If the artist is evasive about ingredients or the paste is unusually dark, choose a different artist.', icon: CheckCircle },
              ].map((item) => {
                const TipIcon = item.icon;
                return (
                  <div key={item.tip} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.tip}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Buying Henna Products ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying Henna Products to Take Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where and what to buy for authentic Moroccan henna products as souvenirs or for home use.
          </p>

          <div className="space-y-4">
            {hennaProducts.map((item) => (
              <div key={item.product} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:min-w-[200px]">
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.product}
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-accent)]">{item.price}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{item.where}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Shopping Tip
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The best henna powder comes from the Meknes and Azemmour regions of Morocco.
                  In the souks, ask for &ldquo;henna beldi&rdquo; (traditional/local henna)
                  for the purest product. Avoid products with long chemical ingredient lists.
                  Pure henna powder should contain only one ingredient: Lawsonia inermis leaf
                  powder. Sealed packages travel better and stay fresh longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hand className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about getting henna in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Moroccan culture and traditions with these essential guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-moroccan p-5 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Paintbrush className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience the Art of Moroccan Henna
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Getting henna in Morocco is more than decoration &mdash; it is a connection to centuries
            of tradition, artistry, and spiritual meaning. Choose natural henna, support skilled
            local artists, and carry a piece of Moroccan culture home on your skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/culture"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Moroccan Culture
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/what-to-buy-morocco"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Shopping Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Prices are approximate and may vary by location, artist, and season. Always agree on a price
            before getting henna applied. Information on this page is current as of March 2026.
          </p>
        </div>
      </section>
    </>
  );
}
