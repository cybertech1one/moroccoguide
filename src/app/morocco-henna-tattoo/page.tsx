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
  AlertTriangle,
  Users,
  Flower2,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Brush,
  Palette,
  ShoppingBag,
  CircleDot,
  Eye,
  Gift,
  Leaf,
  HelpCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Henna Guide 2026 | Traditional Art, Designs & Where to Get Henna',
  description:
    'Complete guide to henna in Morocco. Learn about Berber and Arabic henna designs, wedding henna ceremonies, where to get henna in Marrakech, safety tips for avoiding black henna, prices from 50 MAD, and hands-on henna workshops.',
  keywords: [
    'morocco henna',
    'henna tattoo morocco',
    'moroccan henna designs',
    'henna marrakech',
    'berber henna patterns',
    'arabic henna designs',
    'moroccan wedding henna',
    'henna ceremony morocco',
    'black henna warning',
    'natural henna morocco',
    'henna art workshop morocco',
    'henna jemaa el-fnaa',
    'moroccan henna traditions',
    'henna prices morocco',
    'henna tattoo marrakech price',
    'buy henna morocco',
    'moroccan bridal henna',
    'henna art north africa',
  ],
  openGraph: {
    title: 'Morocco Henna Guide 2026 | Traditional Art, Designs & Where to Get Henna',
    description:
      'Discover Moroccan henna traditions, from Berber geometric patterns to Arabic floral designs. Find the best places to get henna, attend workshops, and learn about safety and pricing.',
    url: `${BASE_URL}/morocco-henna-tattoo`,
    images: [
      {
        url: `${BASE_URL}/images/hero-henna.webp`,
        width: 1200,
        height: 630,
        alt: 'Intricate Moroccan henna design on hands with traditional geometric and floral patterns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Henna Guide 2026 | Designs, Prices & Safety Tips',
    description:
      'From Berber geometric patterns to Arabic floral designs. Complete guide to getting henna in Morocco — prices, safety warnings, workshops, and the best places in Marrakech.',
    images: [`${BASE_URL}/images/hero-henna.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-henna-tattoo` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-henna-tattoo`,
  name: 'Morocco Henna Guide 2026 | Traditional Art, Designs & Where to Get Henna',
  description:
    'Complete guide to henna in Morocco. Berber and Arabic henna designs, wedding ceremonies, where to get henna done, safety tips, prices, and workshops.',
  url: `${BASE_URL}/morocco-henna-tattoo`,
  image: `${BASE_URL}/images/hero-henna.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-henna-tattoo`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Henna Guide', item: `${BASE_URL}/morocco-henna-tattoo` },
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
        text: 'Street henna in Jemaa el-Fnaa starts from 50 MAD for a small design on one hand. A full hand with detailed work costs from 150 to 300 MAD. Professional artists at riads and spas charge from 300 to 800 MAD for elaborate bridal-style designs. Always agree on the price before the artist starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does henna last in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural henna stains last 1 to 3 weeks depending on skin type, body placement, and aftercare. Hands and feet retain color longest because of thicker skin. The stain starts orange and deepens to a rich brown over 24 to 48 hours. Avoid water for the first 12 hours after application for the darkest results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is black henna safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Black henna contains para-phenylenediamine (PPD), a chemical that can cause severe allergic reactions including blistering, permanent scarring, and chemical burns. Natural henna is always brownish-green in paste form and produces a reddish-brown stain. Never accept henna that promises a black color — it is not real henna.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Berber and Arabic henna designs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Berber (Amazigh) henna uses bold geometric shapes — diamonds, triangles, zigzags, and dots — rooted in ancient North African symbolism. Arabic henna features flowing floral motifs, paisleys, vines, and fine linework. Many Moroccan artists blend both styles into a fusion that is distinctly Moroccan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to get henna in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jemaa el-Fnaa is the most popular spot with dozens of henna artists, but quality varies and aggressive pricing is common. For a better experience, book through your riad or visit a dedicated henna art studio like Henna Art Café. Several luxury spas and hammams also offer professional henna as an add-on treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can men get henna in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While henna is more commonly associated with women in Moroccan culture, men have historically used henna as well — particularly for celebrations, religious holidays, and weddings. Male visitors are welcome to get henna applied at tourist areas, workshops, and studios across Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take a henna workshop in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several studios in Marrakech, Fes, and Essaouira offer henna art workshops where you learn to mix natural henna paste, practice traditional patterns, and apply designs. Workshops run from 200 to 600 MAD for 2 to 3 hours and usually include materials, instruction, and finished designs to take home.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HENNA STYLES
   ═══════════════════════════════════════════════════════════════ */

const hennaStyles = [
  { name: 'Berber (Amazigh) Henna', icon: CircleDot, origin: 'Atlas Mountains & Rural Morocco',
    motifs: 'Diamonds, triangles, zigzags, crosses, dots, and linear patterns',
    meaning: 'Each symbol carries protective meaning. Diamonds represent the eye and ward off the evil eye. Triangles symbolize femininity and fertility. Zigzag lines represent water and life. Cross patterns mark the four cardinal directions.',
    where: 'Most common in the High Atlas, Anti-Atlas, Souss region, and among Amazigh communities across Morocco.' },
  { name: 'Arabic Henna', icon: Flower2, origin: 'Middle East & Urban Morocco',
    motifs: 'Paisleys, flowers, vines, leaves, fine lines, and mesh filling',
    meaning: 'Arabic designs prioritize aesthetic beauty over symbolism. Floral patterns represent joy and new beginnings. Paisley motifs symbolize fertility. The more elaborate the design, the greater the celebration it marks.',
    where: 'Dominant in cities like Casablanca, Rabat, and Tangier. Popular for weddings and formal events nationwide.' },
  { name: 'Moroccan Fusion', icon: Sparkles, origin: 'Contemporary Morocco',
    motifs: 'Blends geometric Berber elements with Arabic floral flowing patterns',
    meaning: 'This modern style merges both traditions into something uniquely Moroccan. Artists combine bold Berber geometry on the palm with flowing Arabic florals on the back of the hand and fingers.',
    where: 'Found across Morocco, especially in tourist areas. The most commonly requested style by international visitors.' },
  { name: 'Sahrawi (Saharan) Henna', icon: Star, origin: 'Southern Morocco & Western Sahara',
    motifs: 'Heavy, dark coverage on hands and feet with bold lines and minimal negative space',
    meaning: 'Sahrawi henna aims for maximum stain depth. Hands and feet are often fully covered with thick paste left on for 8 to 12 hours. The goal is a near-black stain that lasts for weeks. Designs tend toward broad strokes rather than fine detail.',
    where: 'Common among Sahrawi communities in Laayoune, Dakhla, Guelmim, and southern oasis towns.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO GET HENNA
   ═══════════════════════════════════════════════════════════════ */

const hennaLocations = [
  {
    name: 'Jemaa el-Fnaa Henna Artists',
    city: 'Marrakech',
    type: 'Street Artists',
    icon: MapPin,
    price: 'From 50 MAD (small design) to 300 MAD (full hand)',
    description:
      'Dozens of henna artists sit in clusters on the eastern side of the main square. They work fast — a simple design takes 10 to 15 minutes. The quality ranges from basic tourist patterns to genuinely skilled work. The catch: some artists grab your hand and start painting before you agree on a price, then demand 500+ MAD. Choose your artist carefully, agree on the design and price first, and check their portfolio on their phone before committing.',
    tips: ['Agree on price before starting', 'Ask to see previous work photos', 'Avoid artists who grab your hand', 'Best quality in the evening hours'],
  },
  {
    name: 'Henna Art Café',
    city: 'Marrakech',
    type: 'Dedicated Studio',
    icon: Brush,
    price: 'From 200 MAD per design',
    description:
      'A dedicated henna studio in the Marrakech medina that combines a tea room with professional henna application. Artists here trained under master hennayas and use only 100% natural henna paste mixed fresh daily. The atmosphere is relaxed, the pricing is transparent, and the quality is consistently high. They also offer 2-hour workshops where you learn to apply henna yourself.',
    tips: ['Book ahead during peak season', 'Workshops available for groups', 'Fresh natural paste only', 'Air-conditioned space'],
  },
  {
    name: 'Riad-Based Henna Sessions',
    city: 'Marrakech / Fes',
    type: 'Private Experience',
    icon: Building,
    price: 'From 300 MAD per person',
    description:
      'Many riads arrange private henna sessions with professional artists who come to you. This is the most comfortable option — you sit on a terrace or in a courtyard while a skilled hennaya works on your design over mint tea. Riads often partner with specific artists they trust, and the quality tends to be high. Ask your riad reception at least a day in advance.',
    tips: ['Request through your riad', 'Best for private or group sessions', 'Usually includes mint tea', 'Calm and pressure-free setting'],
  },
  {
    name: 'Hammam & Spa Add-On',
    city: 'Nationwide',
    type: 'Spa Service',
    icon: Sparkles,
    price: 'From 250 MAD added to spa packages',
    description:
      'Several luxury hammams and spas across Morocco offer henna application as part of their treatment menus. Heritage Spa in Marrakech, Riad Laaroussa in Fes, and Heure Bleue Palais in Essaouira all include henna options. After a hammam and gommage, your skin is exfoliated and clean — an ideal surface for deep henna staining.',
    tips: ['Book henna with your hammam session', 'Post-exfoliation skin takes stain better', 'Available at most upscale spas', 'Professional quality guaranteed'],
  },
  {
    name: 'Fes Medina Henna Souks',
    city: 'Fes',
    type: 'Artisan Market',
    icon: ShoppingBag,
    price: 'From 80 MAD per design',
    description:
      'Near the henna souk (Souk el-Henna) in the Fes medina, several artists offer traditional Fassi henna designs that differ from Marrakech styles. Fassi henna tends toward more geometric, precise patterns influenced by the city\'s zellige tile traditions. You can also buy raw henna powder, pre-made cones, and henna-related products here.',
    tips: ['Visit the historic Henna Souk', 'Buy supplies to take home', 'Fassi style is more geometric', 'Less tourist pressure than Marrakech'],
  },
  {
    name: 'Essaouira Beach Artists',
    city: 'Essaouira',
    type: 'Beach & Medina',
    icon: Star,
    price: 'From 70 MAD per design',
    description:
      'Henna artists set up along the beach promenade and near Moulay Hassan Square in Essaouira. The pace here is more relaxed than Marrakech, with less aggressive touting. Designs often incorporate nautical motifs — waves, fish, and shells — reflecting the coastal setting. Several shops inside the medina also offer henna alongside other beauty services.',
    tips: ['Relaxed atmosphere', 'Coastal-themed designs available', 'Lower prices than Marrakech', 'Combined with medina shopping'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HENNA CEREMONY TRADITIONS
   ═══════════════════════════════════════════════════════════════ */

const hennaCeremonies = [
  { event: 'Wedding (Laylat al-Henna)', icon: Heart,
    description: 'The night before the wedding is dedicated entirely to henna. Called Laylat al-Henna (the Night of Henna), it is one of the most important pre-wedding rituals in Morocco. A professional hennaya applies elaborate designs to the bride\'s hands and feet in a ceremony that can last 4 to 6 hours. Female relatives and friends gather for music, dancing, and sweets while the bride sits on a decorated throne (amariya). The groom traditionally has a small henna dot placed on his palm as well.',
    significance: 'Henna at weddings symbolizes fertility, protection from the evil eye, and blessings for the marriage. A darker stain is considered a sign of a stronger union.' },
  { event: 'Birth Celebrations', icon: Gift,
    description: 'Seven days after a child is born, families hold a naming ceremony called the Sbou3. During this celebration, the mother and female relatives apply henna to mark the occasion. The newborn may have a small henna dot placed on the sole of the foot for protection. This tradition is strongest in rural and Amazigh communities.',
    significance: 'Henna on the mother represents health and recovery. On the child, it symbolizes divine protection during the vulnerable first weeks of life.' },
  { event: 'Eid & Religious Holidays', icon: Crown,
    description: 'During Eid al-Fitr (end of Ramadan) and Eid al-Adha, women and girls across Morocco apply henna to their hands and feet. In the days leading up to Eid, henna artists set up temporary stations in markets and neighborhoods. Families buy henna paste in bulk for home application. The designs tend to be simpler than wedding henna but still follow regional styles.',
    significance: 'Henna during Eid represents renewal, celebration, and gratitude. It marks the transition from fasting to feasting.' },
  { event: 'Moussems & Festivals', icon: Users,
    description: 'Regional moussems (religious festivals) and cultural gatherings always feature henna. At the Imilchil Marriage Festival in the Atlas Mountains, Amazigh women display elaborate Berber henna on their hands and feet. The Rose Festival in Kelaat M\'Gouna, the Date Festival in Erfoud, and the Gnaoua Festival in Essaouira all have henna artists serving both locals and visitors.',
    significance: 'Henna at festivals connects personal adornment to communal celebration, linking individuals to their cultural heritage.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY GUIDE
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  { title: 'Avoid Black Henna Completely', icon: AlertTriangle, level: 'critical',
    detail: 'Black henna does not exist in nature. Any paste that promises a jet-black stain contains para-phenylenediamine (PPD), an industrial hair dye chemical. PPD can cause severe allergic reactions within 24 to 72 hours: blistering, swelling, chemical burns, and permanent scarring. Some tourists have been hospitalized after black henna applications. If an artist offers black henna, walk away.' },
  { title: 'Check the Paste Color', icon: Eye, level: 'important',
    detail: 'Natural henna paste is dark green to brownish-green. It smells earthy, slightly grassy, with hints of tea tree or eucalyptus if essential oils are added. The fresh stain appears bright orange and darkens to reddish-brown over 24 to 48 hours. If paste looks black, smells chemical, or promises an instant dark stain — it contains additives you do not want on your skin.' },
  { title: 'Ask About Ingredients', icon: Leaf, level: 'important',
    detail: 'Safe, natural henna paste contains just three to four ingredients: henna powder (Lawsonia inermis), lemon juice or water, sugar, and an essential oil (eucalyptus, tea tree, or lavender). Some artists add coffee or tea for a slightly darker tone — that is fine. Anything beyond these basic ingredients should raise concern. A good artist will happily tell you what is in their paste.' },
  { title: 'Do a Patch Test First', icon: ShieldCheck, level: 'recommended',
    detail: 'If you have sensitive skin or a history of allergies, request a small test application on your inner wrist. Wait 30 minutes to check for any redness, itching, or irritation. This is especially important for children. Most professional studios will do a patch test on request without pushback.' },
  { title: 'Know the Aftercare', icon: CheckCircle, level: 'recommended',
    detail: 'After application, leave the paste on for at least 4 to 6 hours (overnight produces the darkest stain). Scrape off dried paste — do not wash it off with water. Avoid water on the design for 12 hours. Apply a thin coat of coconut oil, olive oil, or a lemon-sugar sealant to deepen the stain. Avoid chlorinated pools and saltwater for the first 24 hours.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WORKSHOP EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const hennaWorkshops = [
  { name: 'Henna Art Café Workshop', city: 'Marrakech', duration: '2 hours', price: 'From 350 MAD per person',
    includes: 'Henna paste preparation, pattern practice sheets, guided application on your own hands, mint tea and pastries, take-home henna cone',
    description: 'Learn the fundamentals of Moroccan henna art from a professional hennaya. The workshop covers how to prepare natural henna paste from raw powder, basic geometric and floral patterns, and application techniques. You practice on paper first, then apply designs to your own hands. Group size is capped at 8 for individual attention.' },
  { name: 'Riad Henna Masterclass', city: 'Marrakech', duration: '3 hours', price: 'From 500 MAD per person',
    includes: 'In-depth history lesson, paste mixing, advanced pattern study, practice on both hands, photo session, henna kit to take home',
    description: 'A deeper dive into Moroccan henna traditions held in a private riad setting. This masterclass covers the cultural history of henna across North Africa, the symbolism behind Berber and Arabic motifs, and advanced application techniques. Ideal for artists, designers, or anyone who wants more than a surface-level experience.' },
  { name: 'Fes Medina Henna Experience', city: 'Fes', duration: '2.5 hours', price: 'From 300 MAD per person',
    includes: 'Guided walk through the Henna Souk, henna supplies shopping, paste preparation, pattern application, traditional Fassi tea',
    description: 'This experience starts with a guided walk through the Fes Henna Souk (Souk el-Henna) where you learn about the raw materials — henna leaves, indigo, kohl, and other traditional beauty products. You then move to a nearby riad to mix your own paste and practice Fassi geometric designs under expert guidance.' },
  { name: 'Essaouira Coastal Henna Class', city: 'Essaouira', duration: '2 hours', price: 'From 250 MAD per person',
    includes: 'Paste preparation, pattern practice, guided application, coastal-themed designs, Gnaoua music backdrop',
    description: 'A laid-back henna class in Essaouira that incorporates coastal motifs alongside traditional patterns. Held in a medina studio with ocean breezes and Gnaoua music in the background. Smaller groups (max 6 people) make this feel more like a private lesson than a tourist activity.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUYING HENNA SUPPLIES
   ═══════════════════════════════════════════════════════════════ */

const hennaSupplies = [
  { product: 'Raw Henna Powder (100g)', price: 'From 15 MAD', where: 'Spice souks, herbalists (attarine), Henna Souk in Fes',
    tip: 'Look for bright green powder with a strong grassy smell. Stale henna turns brown and gives weak stains. Buy from shops with high turnover.' },
  { product: 'Pre-Made Henna Cones', price: 'From 10 MAD per cone', where: 'Beauty supply shops, pharmacies, souks',
    tip: 'Check the ingredient list. Safe cones list only henna, lemon, sugar, and essential oil. Avoid any cone that lists PPD, chemical dyes, or does not list ingredients at all.' },
  { product: 'Henna Application Kit', price: 'From 80 MAD', where: 'Tourist shops, henna studios, online via Moroccan craft sites',
    tip: 'Kits typically include 3 to 5 cones, pattern stencils, and aftercare oil. Good quality kits from studios are better than generic souk tourist kits.' },
  { product: 'Essential Oils (Eucalyptus / Tea Tree)', price: 'From 25 MAD per bottle', where: 'Herbalists, apothecaries (attarine), cooperative shops',
    tip: 'A few drops of eucalyptus or tea tree oil in your henna paste deepen the stain and help the paste flow smoothly from the cone. Lavender oil is a gentler alternative for sensitive skin.' },
  { product: 'Lemon-Sugar Sealant', price: 'From 10 MAD (or make your own)', where: 'Henna studios, beauty shops',
    tip: 'Mix equal parts lemon juice and sugar, then dab onto dried henna paste with cotton. This seals the paste, keeps it moist longer, and produces a deeper stain.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHennaGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-br from-[#3D1308] via-[#6B2D1A] to-[#A0522D]">
        <div className="hero-overlay absolute inset-0 opacity-30" />
        <div className="moroccan-pattern absolute inset-0 opacity-10" />
        <div className="relative z-10 container-morocco text-center px-4 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm text-white/90 backdrop-blur-sm mb-6">
            <Brush className="h-4 w-4" />
            <span>Traditional Moroccan Art</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Henna in Morocco
            <span className="block text-[#F5D5A0] mt-2">Traditional Art, Designs & Getting Henna Done</span>
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Henna has been part of Moroccan life for over 5,000 years. From Berber mountain villages to
            Marrakech wedding halls, this ancient plant-based dye marks every major celebration. Here is
            everything you need to know about getting henna done in Morocco — styles, safety, prices, and workshops.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#where-to-get-henna" className="bg-[#C4960C] hover:bg-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Where to Get Henna
            </a>
            <a href="#safety" className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur-sm inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" /> Safety Guide
            </a>
          </div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[#FAF8F5] border-b border-[#A0522D]/10" aria-label="Breadcrumb">
        <div className="container-morocco px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-[#6B4F3A]">
            <li>
              <Link href="/" className="hover:text-[#A0522D] transition-colors inline-flex items-center gap-1">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5 text-[#A0522D]/40" />
            <li className="text-[#A0522D] font-medium">Morocco Henna Guide</li>
          </ol>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          HISTORY & OVERVIEW
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold">
                The History of Henna in Morocco
              </h2>
            </div>
            <div className="zellige-border rounded-xl p-8 bg-white shadow-sm space-y-5 text-[#4A3728] leading-relaxed font-[family-name:var(--font-heading)]">
              <p>
                Henna (Lawsonia inermis) is a small flowering shrub native to North Africa, the Middle East,
                and South Asia. Moroccans call it <strong>&quot;lhenna&quot;</strong>, and its use in the region
                predates written history. Archaeological evidence from ancient Egypt and Libya suggests henna
                body decoration has been practiced in North Africa for at least 5,000 years. The Amazigh (Berber)
                peoples of Morocco adopted henna as both medicine and spiritual protection long before the arrival
                of Islam in the 7th century.
              </p>
              <p>
                In pre-Islamic Morocco, henna served a dual role. Practically, the paste cooled the skin in
                extreme heat — field workers in the Draa Valley and Souss region applied henna to their palms
                and soles during summer months. Spiritually, Amazigh communities believed henna carried
                <strong> baraka</strong> (divine blessing) that protected against jinn (spirits) and the evil eye.
                This belief persists today. Moroccan mothers still apply a small henna dot to a newborn&apos;s
                forehead or foot sole for protection during the first week of life.
              </p>
              <p>
                When Arab culture reached Morocco through trade routes and the Umayyad conquest, it brought new
                henna aesthetics. Arabic floral and vine patterns merged with existing Berber geometric traditions,
                creating the distinctive Moroccan henna vocabulary that artists use today. By the medieval period,
                Moroccan cities like Fes had entire souks dedicated to henna — the <strong>Souk el-Henna</strong> in
                the Fes medina still operates, selling raw henna powder alongside kohl, indigo, and other traditional
                beauty products.
              </p>
              <p>
                The professional hennaya (henna artist) holds a respected position in Moroccan society. Traditionally,
                hennayas apprenticed under a master for years, learning hundreds of patterns and the medicinal
                properties of henna. In many families, the art passes from mother to daughter. While male henna
                artists exist, the profession remains predominantly female. A skilled hennaya working a busy
                wedding season in Marrakech or Casablanca can earn more than many other skilled tradespeople.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HENNA DESIGN STYLES
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-2 text-sm text-[#A0522D] font-medium mb-4">
              <Palette className="h-4 w-4" /> Design Traditions
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
              Moroccan Henna Design Styles
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] max-w-2xl mx-auto">
              Four distinct henna traditions exist across Morocco, each with its own visual language, symbolism, and regional roots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hennaStyles.map((style) => (
              <div key={style.name} className="card-moroccan p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#A0522D]/10 rounded-lg p-3">
                    <style.icon className="h-6 w-6 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2D1810] font-bold">
                      {style.name}
                    </h3>
                    <p className="text-sm text-[#A0522D] font-medium">{style.origin}</p>
                  </div>
                </div>
                <div className="space-y-3 font-[family-name:var(--font-heading)] text-[#4A3728] text-sm">
                  <div>
                    <span className="font-semibold text-[#2D1810]">Key Motifs:</span>{' '}
                    {style.motifs}
                  </div>
                  <div>
                    <span className="font-semibold text-[#2D1810]">Symbolism:</span>{' '}
                    {style.meaning}
                  </div>
                  <div>
                    <span className="font-semibold text-[#2D1810]">Where Found:</span>{' '}
                    {style.where}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HENNA CEREMONIES
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C4960C]/10 px-4 py-2 text-sm text-[#C4960C] font-medium mb-4">
              <Crown className="h-4 w-4" /> Cultural Traditions
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
              Henna Ceremonies & Celebrations
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] max-w-2xl mx-auto">
              Henna marks every major milestone in Moroccan life. These are the key occasions where henna takes center stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hennaCeremonies.map((ceremony) => (
              <div key={ceremony.event} className="card-moroccan p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#C4960C]/10 rounded-lg p-3">
                    <ceremony.icon className="h-6 w-6 text-[#C4960C]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2D1810] font-bold">
                    {ceremony.event}
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-[#4A3728] text-sm leading-relaxed mb-3">
                  {ceremony.description}
                </p>
                <div className="bg-[#C4960C]/5 rounded-lg p-3 border border-[#C4960C]/15">
                  <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                    <strong className="text-[#C4960C]">Cultural Significance:</strong> {ceremony.significance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHERE TO GET HENNA
          ══════════════════════════════════════════════════════════ */}
      <section id="where-to-get-henna" className="bg-white py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-2 text-sm text-[#A0522D] font-medium mb-4">
              <MapPin className="h-4 w-4" /> Best Locations
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
              Where to Get Henna in Morocco
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] max-w-2xl mx-auto">
              From Jemaa el-Fnaa street artists to private riad sessions, here are the best options for getting henna across Morocco.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {hennaLocations.map((location, idx) => (
              <div key={location.name} className="card-moroccan p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#A0522D] text-white rounded-lg h-10 w-10 flex items-center justify-center font-bold text-lg shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2D1810] font-bold">
                        {location.name}
                      </h3>
                      <span className="text-xs bg-[#A0522D]/10 text-[#A0522D] px-2 py-1 rounded-full font-medium">
                        {location.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-sm text-[#6B4F3A]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {location.city}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" /> {location.price}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-[#4A3728] text-sm leading-relaxed mb-4">
                  {location.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {location.tips.map((tip) => (
                    <div key={tip} className="flex items-start gap-2 text-sm text-[#6B4F3A]">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="font-[family-name:var(--font-heading)]">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NATURAL VS CHEMICAL HENNA
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-6 w-6 text-green-700" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold">
                Natural Henna vs. Chemical Henna
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Natural */}
              <div className="bg-white rounded-xl border-2 border-green-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-green-800 font-bold">
                    Natural Henna (Safe)
                  </h3>
                </div>
                <ul className="space-y-3 font-[family-name:var(--font-heading)] text-sm text-[#4A3728]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Paste color:</strong> Dark green to brownish-green</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Smell:</strong> Earthy, grassy, sometimes eucalyptus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Fresh stain:</strong> Bright orange, darkens over 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Final color:</strong> Reddish-brown to dark brown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Duration:</strong> 1 to 3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Ingredients:</strong> Henna powder, lemon juice, sugar, essential oil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>Drying time:</strong> 4-6 hours for best results</span>
                  </li>
                </ul>
              </div>

              {/* Chemical / Black */}
              <div className="bg-white rounded-xl border-2 border-red-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-red-800 font-bold">
                    Chemical / Black Henna (Dangerous)
                  </h3>
                </div>
                <ul className="space-y-3 font-[family-name:var(--font-heading)] text-sm text-[#4A3728]">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Paste color:</strong> Black or very dark brown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Smell:</strong> Chemical, sharp, ammonia-like</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Fresh stain:</strong> Instant dark/black color</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Final color:</strong> Jet black (unnatural for henna)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Risks:</strong> Blistering, chemical burns, scarring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Contains:</strong> PPD (para-phenylenediamine) — industrial dye</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span><strong>Warning:</strong> Reactions may appear 24-72 hours after application</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SAFETY GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section id="safety" className="bg-white py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-700 font-medium mb-4">
              <ShieldCheck className="h-4 w-4" /> Safety First
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
              Henna Safety Guide
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] max-w-2xl mx-auto">
              Most henna in Morocco is natural and safe, but black henna poses real health risks. Follow these guidelines to protect yourself.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {safetyTips.map((tip) => (
              <div
                key={tip.title}
                className={`rounded-xl p-6 border-l-4 shadow-sm ${
                  tip.level === 'critical'
                    ? 'bg-red-50 border-red-500'
                    : tip.level === 'important'
                    ? 'bg-amber-50 border-amber-500'
                    : 'bg-green-50 border-green-500'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <tip.icon
                    className={`h-5 w-5 ${
                      tip.level === 'critical'
                        ? 'text-red-600'
                        : tip.level === 'important'
                        ? 'text-amber-600'
                        : 'text-green-600'
                    }`}
                  />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2D1810]">
                    {tip.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium uppercase ${
                      tip.level === 'critical'
                        ? 'bg-red-100 text-red-700'
                        : tip.level === 'important'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {tip.level}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-[#4A3728] text-sm leading-relaxed">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW LONG DOES HENNA LAST
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold">
                How Long Does Henna Last?
              </h2>
            </div>

            <div className="zellige-border rounded-xl p-8 bg-white shadow-sm font-[family-name:var(--font-heading)] text-[#4A3728]">
              <p className="mb-5 leading-relaxed">
                A natural henna stain lasts <strong>1 to 3 weeks</strong> on average, but several factors affect duration and intensity. Understanding these variables helps you get the longest-lasting, darkest stain possible.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold">Factors That Affect Duration</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Gem className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" />
                      <span><strong>Body placement:</strong> Palms and soles stain darkest and last longest (2-3 weeks). Upper arms and torso fade fastest (5-10 days).</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Gem className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" />
                      <span><strong>Skin type:</strong> Warmer skin tones absorb henna better. Dry skin holds stain longer than oily skin.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Gem className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" />
                      <span><strong>Paste quality:</strong> Freshly mixed paste with high dye-content henna powder produces deeper, longer-lasting stains.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Gem className="h-4 w-4 text-[#A0522D] mt-0.5 shrink-0" />
                      <span><strong>Leave-on time:</strong> 4 hours minimum, 8-12 hours optimal. Brides often sleep with paste on overnight.</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold">Maximize Your Henna Stain</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Leave paste on for 6+ hours (overnight is best)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Scrape off dried paste — do not wash with water</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Apply coconut oil or olive oil after removal</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Avoid water for 12 hours after removing paste</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Stay away from chlorine pools for 24 hours</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Use a lemon-sugar sealant while paste dries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Heat helps — hold hands near a warm surface after application</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#C4960C]/5 rounded-lg p-4 border border-[#C4960C]/15">
                <p className="text-sm">
                  <strong className="text-[#C4960C]">Color timeline:</strong> Fresh stain appears bright orange.
                  Over 24 to 48 hours, it oxidizes to a deep reddish-brown. The final color is darkest on day 2 or 3,
                  then gradually fades as skin cells naturally shed. Exfoliating, swimming, and frequent handwashing
                  accelerate fading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PRICING GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-6 w-6 text-[#C4960C]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold">
                Henna Prices in Morocco (2026)
              </h2>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] mb-8">
              Prices vary by location, design complexity, and whether you visit a street artist, studio, or luxury spa. Seasonal pricing can change during peak tourist months and wedding season. Always agree on the price before the artist begins.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-[family-name:var(--font-heading)] text-sm">
                <thead>
                  <tr className="bg-[#A0522D] text-white">
                    <th className="text-left p-4 rounded-tl-lg">Service Type</th>
                    <th className="text-left p-4">Price Range</th>
                    <th className="text-left p-4 rounded-tr-lg">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#A0522D]/10 bg-[#FAF8F5]">
                    <td className="p-4 font-medium text-[#2D1810]">Street henna — small design</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 50 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Single small motif on one hand. 5-10 minutes.</td>
                  </tr>
                  <tr className="border-b border-[#A0522D]/10">
                    <td className="p-4 font-medium text-[#2D1810]">Street henna — full hand</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 150 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Detailed design covering one full hand. 20-30 minutes.</td>
                  </tr>
                  <tr className="border-b border-[#A0522D]/10 bg-[#FAF8F5]">
                    <td className="p-4 font-medium text-[#2D1810]">Street henna — both hands</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 250 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Both hands with matching designs. 40-60 minutes.</td>
                  </tr>
                  <tr className="border-b border-[#A0522D]/10">
                    <td className="p-4 font-medium text-[#2D1810]">Studio / café — standard</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 200 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Professional artist, natural paste, relaxed setting.</td>
                  </tr>
                  <tr className="border-b border-[#A0522D]/10 bg-[#FAF8F5]">
                    <td className="p-4 font-medium text-[#2D1810]">Riad private session</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 300 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Artist comes to your riad. Includes tea service.</td>
                  </tr>
                  <tr className="border-b border-[#A0522D]/10">
                    <td className="p-4 font-medium text-[#2D1810]">Spa / hammam add-on</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 250 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Added to hammam or spa package. Post-exfoliation application.</td>
                  </tr>
                  <tr className="border-b border-[#A0522D]/10 bg-[#FAF8F5]">
                    <td className="p-4 font-medium text-[#2D1810]">Bridal henna — full ceremony</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 800 MAD</td>
                    <td className="p-4 text-[#6B4F3A]">Both hands and feet, elaborate design. 3-6 hours.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#2D1810] rounded-bl-lg">Workshop (2-3 hours)</td>
                    <td className="p-4 text-[#A0522D] font-semibold">From 250 MAD</td>
                    <td className="p-4 text-[#6B4F3A] rounded-br-lg">Learn to mix and apply henna. Materials included.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#C4960C]/5 rounded-lg p-4 border border-[#C4960C]/15">
              <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                <strong className="text-[#C4960C]">Pricing note:</strong> Street prices are negotiable, especially in
                tourist areas like Jemaa el-Fnaa. Studio and spa prices are usually fixed. During wedding season
                (June-September) and peak tourist months, prices at popular spots may increase by 20-30%. Prices
                listed are starting points — complex designs cost more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WORKSHOPS
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-2 text-sm text-[#A0522D] font-medium mb-4">
              <Brush className="h-4 w-4" /> Hands-On Learning
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
              Henna Art Workshops
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] max-w-2xl mx-auto">
              Skip the spectator role and learn to apply henna yourself. These workshops teach paste preparation, pattern design, and application techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hennaWorkshops.map((workshop) => (
              <div key={workshop.name} className="card-moroccan p-6 rounded-xl">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[#2D1810] font-bold mb-2">
                  {workshop.name}
                </h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-[#6B4F3A] font-[family-name:var(--font-heading)]">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {workshop.city}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {workshop.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#A0522D] font-semibold">
                    <DollarSign className="h-3.5 w-3.5" /> {workshop.price}
                  </span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-[#4A3728] text-sm leading-relaxed mb-3">
                  {workshop.description}
                </p>
                <div className="bg-[#A0522D]/5 rounded-lg p-3 border border-[#A0522D]/15">
                  <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                    <strong className="text-[#A0522D]">Includes:</strong> {workshop.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BUYING HENNA SUPPLIES
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="h-6 w-6 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold">
                Buying Henna Supplies in Morocco
              </h2>
            </div>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] mb-8">
              Take the art home with you. Here is what to buy, where to find it, and what to look for.
            </p>

            <div className="space-y-4">
              {hennaSupplies.map((item) => (
                <div key={item.product} className="card-moroccan p-5 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold">
                        {item.product}
                      </h3>
                      <p className="font-[family-name:var(--font-heading)] text-sm text-[#A0522D] font-semibold mt-1">
                        {item.price}
                      </p>
                    </div>
                    <div className="flex-1 font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                      <p><strong>Where:</strong> {item.where}</p>
                      <p className="mt-1"><strong>Tip:</strong> {item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#A0522D]/10 px-4 py-2 text-sm text-[#A0522D] font-medium mb-4">
                <HelpCircle className="h-4 w-4" /> Common Questions
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="card-moroccan p-6 rounded-xl">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold mb-3 flex items-start gap-3">
                    <span className="bg-[#A0522D] text-white rounded-full h-7 w-7 flex items-center justify-center text-sm shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    {faq.name}
                  </h3>
                  <p className="font-[family-name:var(--font-heading)] text-[#4A3728] text-sm leading-relaxed pl-10">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-morocco px-4">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2D1810] font-bold mb-3">
              Related Guides
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-[#6B4F3A] max-w-2xl mx-auto">
              Continue exploring Moroccan culture and travel planning with these guides.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 rounded-xl group hover:shadow-lg transition-shadow">
              <Sparkles className="h-8 w-8 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold mb-2 group-hover:text-[#A0522D] transition-colors">
                Spa & Hammam Guide
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                Top 20 hammams and spas across Morocco. Combine henna with a traditional hammam experience.
              </p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-semibold mt-3">
                Read Guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/morocco-shopping-guide" className="card-moroccan p-5 rounded-xl group hover:shadow-lg transition-shadow">
              <ShoppingBag className="h-8 w-8 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold mb-2 group-hover:text-[#A0522D] transition-colors">
                Shopping Guide
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                Navigate Moroccan souks like a local. Find henna supplies, artisan crafts, and bargaining tips.
              </p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-semibold mt-3">
                Read Guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/morocco-culture-etiquette" className="card-moroccan p-5 rounded-xl group hover:shadow-lg transition-shadow">
              <Award className="h-8 w-8 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold mb-2 group-hover:text-[#A0522D] transition-colors">
                Culture & Etiquette
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                Understand Moroccan customs, social norms, and respectful behavior for travelers.
              </p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-semibold mt-3">
                Read Guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/marrakech" className="card-moroccan p-5 rounded-xl group hover:shadow-lg transition-shadow">
              <Building className="h-8 w-8 text-[#A0522D] mb-3" />
              <h3 className="font-[family-name:var(--font-display)] text-lg text-[#2D1810] font-bold mb-2 group-hover:text-[#A0522D] transition-colors">
                Marrakech Guide
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-sm text-[#6B4F3A]">
                Complete guide to the Red City — where most visitors get their first henna experience.
              </p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-semibold mt-3">
                Read Guide <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#3D1308] via-[#6B2D1A] to-[#A0522D] py-16 md:py-20">
        <div className="moroccan-pattern absolute inset-0 opacity-10" />
        <div className="container-morocco px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Brush className="h-12 w-12 text-[#F5D5A0] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white font-bold mb-4">
              Ready for Your Moroccan Henna Experience?
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-lg text-white/85 mb-8 leading-relaxed">
              From a quick design at Jemaa el-Fnaa to a full bridal ceremony, henna connects you to a tradition
              that spans millennia. Ask your riad to arrange a private session, book a workshop, or simply walk
              into the medina and let the art find you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/marrakech/things-to-do"
                className="bg-[#C4960C] hover:bg-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
              >
                Explore Marrakech Activities <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/morocco-spa-guide"
                className="bg-white/15 hover:bg-white/25 text-white px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                Hammam & Spa Guide <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
