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
  Building,
  Award,
  Crown,
  Globe,
  Landmark,
  Gem,
  Sun,
  Plane,
  Calendar,
  Camera,
  Music,
  Mountain,
  FileText,
  CircleDot,
  Utensils,
  Phone,
  MessageCircleQuestion,
  Tent,
  Bed,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-wedding-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Destination Weddings in Morocco 2026 | Venues, Traditions & Planning Guide',
  description:
    'Plan your destination wedding in Morocco. Top venues (La Mamounia, Royal Mansour, desert camps, kasbahs), Moroccan wedding traditions, henna night, legal requirements for foreigners, cost breakdown from 150,000 MAD, best cities, planners, and guest logistics.',
  keywords: [
    'destination wedding morocco',
    'morocco wedding guide',
    'wedding in marrakech',
    'moroccan wedding traditions',
    'morocco wedding venues',
    'la mamounia wedding',
    'royal mansour wedding',
    'kasbah wedding morocco',
    'desert wedding morocco',
    'morocco wedding planner',
    'moroccan henna ceremony',
    'wedding morocco legal requirements',
    'morocco wedding cost',
    'fes wedding venue',
    'atlas mountains wedding',
    'riad wedding marrakech',
    'morocco wedding budget 2026',
    'amanjena wedding',
    'ouarzazate wedding venue',
    'moroccan takchita wedding dress',
  ],
  openGraph: {
    title: 'Destination Weddings in Morocco 2026 | Venues, Traditions & Planning Guide',
    description:
      'Top venues from palace hotels to Sahara desert camps, Moroccan wedding traditions, legal paperwork for foreigners, budget breakdowns, and expert planner recommendations for your Morocco destination wedding.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-weddings.webp`,
        width: 1200,
        height: 630,
        alt: 'Elegant destination wedding setup in a Moroccan palace courtyard with lanterns and rose petals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destination Weddings in Morocco 2026 | Complete Planning Guide',
    description:
      'Palace courtyards, desert sunsets, Atlas panoramas. Venues, traditions, legal paperwork, costs, and planning tips for your Morocco wedding.',
    images: [`${BASE_URL}/images/hero-weddings.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How much does a destination wedding in Morocco cost?',
    a: 'A Morocco destination wedding ranges from 150,000 MAD (roughly $15,000 USD) for an intimate riad ceremony with 20-30 guests to over 2,000,000 MAD ($200,000+ USD) for a luxury palace wedding with 200+ guests. The average mid-range wedding for 80-100 guests costs between 400,000-700,000 MAD. Seasonal pricing can change, with peak season (April-May, September-October) adding 20-40% to venue costs.',
  },
  {
    q: 'Can foreigners legally get married in Morocco?',
    a: 'Yes. Foreigners can legally marry in Morocco, but the paperwork takes 3-4 months of preparation. You need birth certificates translated into Arabic or French, a Certificate of Celibacy from your home country, passport copies, and medical certificates from a Moroccan doctor. Many international couples handle the legal ceremony at home and hold a symbolic celebration in Morocco instead.',
  },
  {
    q: 'What is the best time of year for a wedding in Morocco?',
    a: 'April-May and September-October are the prime windows. These months offer warm days (22-28 degrees Celsius), minimal rain, and gardens in full bloom. Summer works for coastal venues like Essaouira (22-26 degrees) but Marrakech exceeds 40 degrees in July-August. Winter (November-March) gives the lowest prices but requires indoor backup plans due to occasional rain.',
  },
  {
    q: 'Do I need a local wedding planner for a Morocco wedding?',
    a: 'A local planner is strongly recommended. They negotiate vendor contracts in Arabic and French (often saving 20-30% on quoted prices), manage legal paperwork, coordinate logistics across multiple venues, and handle day-of problems you cannot solve without local connections. Expect to pay from 30,000 MAD for coordination-only to 150,000 MAD for full-service luxury planning.',
  },
  {
    q: 'What are the main Moroccan wedding traditions couples incorporate?',
    a: 'The most popular elements for destination weddings are the henna night (laylat al-henna, held 1-2 days before), the amaria entrance (bride carried on an ornate platform), and the berza (couple seated on a decorated throne for guest blessings). Most international couples blend 2-3 Moroccan elements with a Western-style ceremony rather than a full traditional multi-day celebration.',
  },
  {
    q: 'Can we serve alcohol at a Morocco wedding?',
    a: 'Yes. Licensed hotels, resorts, and many upscale riads serve alcohol legally. La Mamounia, Royal Mansour, Amanjena, and all international 5-star properties have full bar service. Private palais venues can arrange licensed catering with alcohol. Budget from 8,000-25,000 MAD for a bar package depending on guest count. During Ramadan, some venues restrict alcohol policies.',
  },
  {
    q: 'What should wedding guests know before traveling to Morocco?',
    a: 'Key points for guests: Morocco is visa-free for 90 days for most Western passports. Marrakech Menara Airport (RAK) has direct flights from London (3.5 hrs), Paris (3 hrs), and New York (7 hrs seasonal). The currency is the Moroccan Dirham (MAD), roughly 10 MAD to $1 USD. Modest dress is appreciated outside resort properties. Tipping at 10-15% is standard. Most luxury wedding venues serve alcohol.',
  },
  {
    q: 'How far in advance should I book a Morocco wedding venue?',
    a: 'For peak season dates (April-May, September-October) at top venues like La Mamounia or Royal Mansour, book 12-18 months ahead. Mid-range venues and shoulder season dates can sometimes be secured 8-10 months out. Desert camp weddings and Atlas Mountain lodges typically need 6-10 months of lead time. Your planner should be hired before you begin venue shopping.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Destination Weddings in Morocco 2026 | Venues, Traditions & Planning Guide',
  description:
    'Complete guide to destination weddings in Morocco covering venues, traditional ceremonies, legal requirements, budget breakdowns, best cities, and planning timelines.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-weddings.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Wedding Guide', item: PAGE_URL },
    ],
  },
};

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
   DATA: WEDDING VENUES
   ================================================================ */

const weddingVenues = [
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    type: 'Palace Hotel',
    icon: Crown,
    capacity: 'Up to 500 guests',
    price: 'From 800,000 MAD (venue hire + minimum spend)',
    description:
      'Operating since 1929, La Mamounia is Morocco\'s most iconic wedding venue. Its 8-hectare gardens, Art Deco interiors, and Moorish architecture create a setting unmatched anywhere in North Africa. The main garden accommodates up to 500 guests under century-old olive trees with Atlas Mountain views as a backdrop.',
    highlights: ['8-hectare gardens with Atlas views', 'On-site wedding coordination team', 'Michelin-starred catering', '209 rooms for guest accommodation'],
  },
  {
    name: 'Royal Mansour',
    city: 'Marrakech',
    type: 'Luxury Palace',
    icon: Crown,
    capacity: 'Up to 300 guests',
    price: 'From 1,200,000 MAD (venue hire + minimum spend)',
    description:
      'Commissioned by King Mohammed VI and built by 1,500 master artisans. Each of the 53 private riads within the compound has its own plunge pool and rooftop terrace. The Grand Riad courtyard provides a jaw-dropping ceremony space with hand-carved stucco ceilings 12 meters high.',
    highlights: ['53 private riads with plunge pools', 'Grand Riad ceremony space', 'Three Michelin-starred restaurants', 'Royal-level security and privacy'],
  },
  {
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    type: 'Mountain Retreat',
    icon: Mountain,
    capacity: 'Up to 120 guests',
    price: 'From 350,000 MAD',
    description:
      'Sir Richard Branson\'s Atlas Mountain retreat sits at 1,200 meters in the village of Asni, 45 minutes from Marrakech. The panoramic mountain terrace offers ceremony views across the High Atlas peaks. Ideal for intimate weddings of 40-120 guests who want dramatic scenery without the Marrakech heat.',
    highlights: ['1,200m elevation with mountain panoramas', 'Infinity pool terrace ceremonies', '28 rooms and suites', 'Exclusive buyout available'],
  },
  {
    name: 'Amanjena',
    city: 'Marrakech',
    type: 'Luxury Resort',
    icon: Sparkles,
    capacity: 'Up to 200 guests',
    price: 'From 600,000 MAD',
    description:
      'The first Aman resort on the African continent, built around a central bassin (reflecting pool) inspired by the Menara Gardens. Thirty-nine pavilions and six two-story maisons spread across rose gardens and ancient olive groves. The Thai Restaurant courtyard is a popular ceremony location.',
    highlights: ['Central reflecting pool for ceremonies', '39 private pavilions', 'Ancient olive grove setting', 'Aman-level service and exclusivity'],
  },
  {
    name: 'Palais Namaskar',
    city: 'Marrakech',
    type: 'Design Hotel',
    icon: Building,
    capacity: 'Up to 250 guests',
    price: 'From 450,000 MAD',
    description:
      'A contemporary architectural masterpiece on 5 hectares with multiple lakes, gardens, and courtyards. The property blends Moroccan, Balinese, and minimalist design. The lakeside terrace provides a modern ceremony setting that photographs exceptionally well during golden hour.',
    highlights: ['5 hectares of lakes and gardens', 'Contemporary Moroccan design', 'Lakeside ceremony terrace', 'Open-plan reception spaces'],
  },
  {
    name: 'Desert Camp (Merzouga / Zagora)',
    city: 'Sahara Desert',
    type: 'Luxury Desert Camp',
    icon: Tent,
    capacity: 'Up to 80 guests',
    price: 'From 200,000 MAD',
    description:
      'Exchange vows on the Erg Chebbi dunes at sunset, dine under a canopy of stars with zero light pollution, and dance to Gnawa musicians around a bonfire. Luxury camps provide king-size beds, private bathrooms, and gourmet catering deep in the Sahara.',
    highlights: ['Sunset dune ceremony', 'Starlit dinner under Berber tents', 'Camel procession for the couple', 'Gnawa musicians and bonfire'],
  },
  {
    name: 'Palais Faraj',
    city: 'Fes',
    type: 'Palace Hotel',
    icon: Landmark,
    capacity: 'Up to 200 guests',
    price: 'From 300,000 MAD',
    description:
      'Perched on the edge of the Fes medina with sweeping views across the oldest medieval city in the world. Original zellige tilework, carved cedar ceilings, and a rooftop terrace that turns golden at sunset. Fes venues run 20-30% less than comparable properties in Marrakech.',
    highlights: ['Panoramic medina views', 'Original 14th-century zellige', 'Rooftop ceremony terrace', '25 suites for guest stays'],
  },
] as const;

/* ================================================================
   DATA: BEST CITIES FOR WEDDINGS
   ================================================================ */

const weddingCities = [
  {
    city: 'Marrakech',
    icon: Landmark,
    tagline: 'The capital of Moroccan destination weddings',
    description:
      'Marrakech hosts over 70% of Morocco\'s international destination weddings. The city offers hundreds of riads, palatial hotels, and private villas equipped for celebrations from 20 to 500 guests. Menara Airport (RAK) has direct flights from London, Paris, New York (seasonal), Dubai, and 100+ other cities. The widest vendor pool in the country is here.',
    bestFor: 'Large luxury weddings, rooftop ceremonies, garden receptions',
    venues: 'La Mamounia, Royal Mansour, Amanjena, Palais Namaskar, El Fenn, 100+ private riads',
  },
  {
    city: 'Fes',
    icon: Building,
    tagline: 'Medieval grandeur and master craftsmanship',
    description:
      'The oldest imperial city offers a more authentic, less commercialized experience. Riad venues inside the 9th-century medina feature original zellige, carved cedar ceilings, and intimate courtyard settings. Fes runs 20-30% cheaper than Marrakech for comparable venues, with far fewer competing wedding bookings on any given weekend.',
    bestFor: 'Cultural weddings, intimate ceremonies, history-loving couples',
    venues: 'Palais Faraj, Riad Fes, Hotel Sahrai, Palais Amani, Dar Roumana',
  },
  {
    city: 'Ouarzazate & Ait Benhaddou',
    icon: Sun,
    tagline: 'Cinematic desert landscapes',
    description:
      'The gateway to the Sahara and home to Morocco\'s film studios. The UNESCO-listed ksar of Ait Benhaddou has been a filming location for Game of Thrones, Gladiator, and Lawrence of Arabia. Kasbahs and desert lodges handle intimate to mid-size weddings with light that photographers dream about.',
    bestFor: 'Cinematic desert weddings, kasbah ceremonies, adventure couples',
    venues: 'Dar Ahlam, Kasbah Ait Benhaddou venues, Le Temple des Arts, Oscar Hotel',
  },
  {
    city: 'Essaouira',
    icon: Globe,
    tagline: 'Atlantic coast charm with a bohemian edge',
    description:
      'This fortified port city on the Atlantic offers ocean breezes, a laid-back atmosphere, and dramatic rampart views. Beachfront ceremonies on Essaouira\'s wide sandy beach or within the 18th-century Portuguese ramparts create a completely different aesthetic than inland venues.',
    bestFor: 'Beach weddings, relaxed boho-style celebrations, summer weddings (cool sea breeze)',
    venues: 'Heure Bleue Palais, Villa de l\'O, Le Jardin des Douars, Dar L\'Oussia',
  },
  {
    city: 'Atlas Mountains',
    icon: Mountain,
    tagline: 'Alpine drama at Africa\'s rooftop',
    description:
      'Mountain lodges and converted kasbahs in the High Atlas offer cool temperatures even in summer, dramatic scenery, and total privacy. Most Atlas venues sit between 1,000-1,800 meters in the Ourika Valley, Imlil Valley, or along the Tizi n\'Tichka pass. Marrakech is under 90 minutes away.',
    bestFor: 'Mountain-backdrop ceremonies, summer weddings, nature lovers',
    venues: 'Kasbah Tamadot, Kasbah Bab Ourika, Domaine de la Roseraie, Kasbah du Toubkal',
  },
] as const;

/* ================================================================
   DATA: MOROCCAN WEDDING TRADITIONS
   ================================================================ */

const traditions = [
  {
    name: 'The Hammam Day',
    icon: Sparkles,
    description:
      'Before the wedding, the bride visits a hammam (traditional bathhouse) with her closest female relatives and friends. This purification ritual includes a full-body scrub with savon beldi (black soap), a ghassoul clay mask, and a rose water rinse. Modern brides often book a private luxury hammam session and turn it into a bridal shower alternative. Budget from 3,000 MAD for a group booking.',
  },
  {
    name: 'Laylat al-Henna (Henna Night)',
    icon: Heart,
    description:
      'Held 1-3 days before the wedding, the henna night is a women-only celebration where a neqqasha (henna artist) decorates the bride\'s hands and feet with intricate geometric and floral patterns. The darker the henna stains, the stronger the marriage, according to tradition. Guests eat Moroccan pastries, drink mint tea, and celebrate with music. Many destination wedding couples adapt this into a mixed-gender henna party for all guests.',
  },
  {
    name: 'The Takchita & Seven Outfit Changes',
    icon: Gem,
    description:
      'The Moroccan bride traditionally wears the takchita, a two-piece formal gown with a base layer (tahtia) and an ornate overdress (dfina) secured by a jeweled belt (mdamma). Throughout a traditional celebration, the bride changes outfits up to 7 times, each representing a different region or style. Destination wedding brides commonly wear 2-3 takchitas alongside a Western wedding dress. A custom takchita costs from 10,000 MAD.',
  },
  {
    name: 'The Amaria Procession',
    icon: Crown,
    description:
      'The bride makes her grand entrance carried above the crowd on an amaria, an ornate wooden platform draped in silk and gold. Four men (nggafa assistants) carry the platform while guests cheer, musicians play, and the procession moves through the venue. This dramatic entrance remains one of the most photographed moments at Moroccan weddings. Amaria service costs from 5,000 MAD.',
  },
  {
    name: 'The Berza (Throne Ceremony)',
    icon: Star,
    description:
      'The couple sits on an elevated platform called a berza, decorated with flowers, candles, and brocade fabric. Guests approach to offer congratulations and blessings. A negafa (bridal attendant) assists the bride with each outfit change and ensures the ceremony follows tradition. Professional negafas charge from 15,000-80,000 MAD depending on the number of outfit changes and ceremony complexity.',
  },
  {
    name: 'Berber Mountain Traditions',
    icon: Mountain,
    description:
      'In the Atlas Mountains, Amazigh (Berber) wedding customs differ from Arab-Moroccan traditions. Celebrations can last 3 days and include the Ahidous collective dance, communal couscous preparation by village women, and symbolic exchanges of dates, milk, and almonds between families. Some Atlas Mountain venues offer authentic Berber ceremony packages from 25,000 MAD.',
  },
] as const;

/* ================================================================
   DATA: WEDDING PLANNERS
   ================================================================ */

const weddingPlanners = [
  {
    name: 'Boutique Souk Weddings',
    specialty: 'Full-service luxury planning',
    priceRange: 'From 80,000 MAD',
    note: 'Specializes in international destination weddings across Morocco. Fluent in English, French, and Arabic. Strong relationships with every major 5-star venue in Marrakech.',
  },
  {
    name: 'MIDA Events Marrakech',
    specialty: 'Large-scale celebrations & production',
    priceRange: 'From 100,000 MAD',
    note: 'Handles weddings up to 500 guests with full AV production, lighting design, stage building, and international entertainment booking.',
  },
  {
    name: 'Marrakech Wedding Planner (MWP)',
    specialty: 'Mid-range to luxury planning',
    priceRange: 'From 50,000 MAD',
    note: 'Over 200 weddings coordinated since 2014. Known for strong vendor negotiation that typically saves couples 20-30% on quoted prices.',
  },
  {
    name: 'Fes Wedding Co.',
    specialty: 'Fes-based intimate weddings',
    priceRange: 'From 30,000 MAD',
    note: 'Focused exclusively on Fes medina venues. Deep knowledge of local riad owners, artisan vendors, and traditional Fassi ceremony elements.',
  },
] as const;

/* ================================================================
   DATA: BUDGET TIERS
   ================================================================ */

const budgetTiers = [
  {
    tier: 'Intimate Riad Wedding',
    guests: '20-40 guests',
    totalRange: '150,000 - 300,000 MAD',
    icon: Heart,
    breakdown: [
      { item: 'Venue (private riad buyout, 3 nights)', cost: '40,000 - 90,000 MAD' },
      { item: 'Catering & drinks (dinner + cocktail)', cost: '30,000 - 60,000 MAD' },
      { item: 'Wedding planner', cost: '30,000 - 50,000 MAD' },
      { item: 'Photographer & videographer', cost: '15,000 - 35,000 MAD' },
      { item: 'Flowers & decor', cost: '15,000 - 30,000 MAD' },
      { item: 'Music (DJ or small band)', cost: '8,000 - 15,000 MAD' },
      { item: 'Henna artist & negafa', cost: '5,000 - 15,000 MAD' },
      { item: 'Hair & makeup', cost: '5,000 - 10,000 MAD' },
    ],
  },
  {
    tier: 'Mid-Range Celebration',
    guests: '80-120 guests',
    totalRange: '400,000 - 700,000 MAD',
    icon: Star,
    breakdown: [
      { item: 'Venue (boutique hotel or palais)', cost: '100,000 - 200,000 MAD' },
      { item: 'Catering & full bar service', cost: '80,000 - 150,000 MAD' },
      { item: 'Wedding planner (full-service)', cost: '50,000 - 80,000 MAD' },
      { item: 'Photo + video team', cost: '25,000 - 50,000 MAD' },
      { item: 'Flowers, decor & lighting', cost: '40,000 - 80,000 MAD' },
      { item: 'Live band + DJ', cost: '20,000 - 40,000 MAD' },
      { item: 'Negafa, henna, amaria', cost: '15,000 - 40,000 MAD' },
      { item: 'Guest transport & welcome bags', cost: '15,000 - 30,000 MAD' },
      { item: 'Hair, makeup & grooming', cost: '8,000 - 15,000 MAD' },
    ],
  },
  {
    tier: 'Luxury Palace Wedding',
    guests: '150-300+ guests',
    totalRange: '1,200,000 - 2,500,000+ MAD',
    icon: Crown,
    breakdown: [
      { item: 'Venue (5-star palace hotel)', cost: '400,000 - 800,000 MAD' },
      { item: 'Premium catering & premium bar', cost: '200,000 - 500,000 MAD' },
      { item: 'Full-service event production', cost: '100,000 - 200,000 MAD' },
      { item: 'International photo & video crew', cost: '60,000 - 150,000 MAD' },
      { item: 'Floral design & luxury decor', cost: '100,000 - 300,000 MAD' },
      { item: 'Entertainment (band, DJ, dancers, fireworks)', cost: '60,000 - 150,000 MAD' },
      { item: 'Full negafa service & outfit changes', cost: '40,000 - 100,000 MAD' },
      { item: 'Guest experiences (excursions, welcome dinner)', cost: '80,000 - 200,000 MAD' },
      { item: 'Coordination, transport & logistics', cost: '50,000 - 100,000 MAD' },
    ],
  },
] as const;

/* ================================================================
   DATA: PLANNING TIMELINE
   ================================================================ */

const planningTimeline = [
  { phase: '12-18 months before', tasks: 'Hire a local wedding planner. Begin venue tours. Lock in your date and sign the venue contract.' },
  { phase: '10-12 months before', tasks: 'Book photographer, videographer, and caterer. Send save-the-dates. Start legal paperwork if marrying in Morocco.' },
  { phase: '8-10 months before', tasks: 'Book entertainment, florist, and decor team. Finalize guest accommodation blocks at nearby hotels.' },
  { phase: '6 months before', tasks: 'Send invitations. Book henna artist and negafa. Arrange guest transfers. Plan welcome dinner.' },
  { phase: '3-4 months before', tasks: 'Menu tasting. Final decor and lighting decisions. Confirm all vendor contracts.' },
  { phase: '1 month before', tasks: 'Final guest count to venue and caterer. Confirm timeline with planner. Final dress fittings.' },
  { phase: '1 week before', tasks: 'Arrive in Morocco. Venue walkthrough. Rehearsal. Hammam day. Henna night celebration.' },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoWeddingGuidePage() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#2C1810] overflow-hidden">
        <div className="hero-overlay absolute inset-0">
          <img
            src="/images/hero-weddings.webp"
            alt="Moroccan palace courtyard set for a destination wedding with lanterns, flowers, and warm evening light"
            className="w-full h-full object-cover opacity-50"
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Wedding Guide</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
            Destination Weddings in Morocco
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Palace courtyards, Sahara sunsets, Atlas Mountain panoramas — your complete guide to planning a wedding in Morocco for 2026.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated March 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 20 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 5 regions covered</span>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-heading)] text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Morocco has overtaken Tuscany and Bali as one of the world&apos;s fastest-growing destination wedding markets. In 2025, Marrakech alone hosted over 3,000 international weddings — a 40% increase from 2022. The appeal is straightforward: jaw-dropping venues at 30-50% less than comparable European options, direct flights from most major cities, and an aesthetic that photographs like nowhere else on earth.
            </p>
            <p className="font-[family-name:var(--font-heading)] text-base text-[var(--text-secondary)] leading-relaxed">
              This guide covers legal paperwork, budget breakdowns across three tiers, traditional Moroccan ceremony elements, the best venues and cities, top wedding planners, practical guest logistics, and a planning timeline from 18 months out to the big day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Morocco for a Wedding ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Morocco for a Destination Wedding?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four reasons couples are choosing Morocco over traditional European venues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: '30-50% Lower Costs',
                text: 'A luxury 100-guest wedding at a 5-star Marrakech palace runs from 500,000-700,000 MAD ($50,000-$70,000 USD). A comparable celebration at a villa in Tuscany or the South of France starts at $120,000-$180,000 USD. Lower labor costs, competitive vendor pricing, and a favorable exchange rate create the difference.',
              },
              {
                icon: Sun,
                title: '300+ Days of Sunshine',
                text: 'Marrakech averages 320 sunny days per year. April through October offers near-guaranteed clear skies for outdoor ceremonies. Even March and November deliver warm, pleasant weather — far more reliable than the rain roulette of European summer weddings.',
              },
              {
                icon: Camera,
                title: 'Unmatched Visual Drama',
                text: 'Zellige tilework, hand-carved stucco, Moorish arches, lantern-lit courtyards, rose-petal pathways, Atlas Mountain backdrops, Sahara dunes at sunset. Morocco delivers a visual richness that most venues cannot match regardless of budget. Every surface and every angle produces stunning photographs.',
              },
              {
                icon: Plane,
                title: 'Easy International Access',
                text: 'Marrakech Menara Airport (RAK) has direct flights from London (3.5 hrs), Paris (3 hrs), New York (7 hrs seasonal), and Dubai (8 hrs). Budget carriers like Ryanair keep guest flights affordable — London to Marrakech starts at $40 one-way. No visa required for 90+ nationalities.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Wedding Traditions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Wedding Traditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Incorporate authentic ceremonies and customs to give your celebration a distinctly Moroccan character. Most destination wedding planners offer packages blending Western and Moroccan elements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditions.map((tradition) => {
              const Icon = tradition.icon;
              return (
                <div key={tradition.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)]">
                      {tradition.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tradition.description}</p>
                </div>
              );
            })}
          </div>

          {/* Henna Night Image */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-henna-art.webp"
                alt="Intricate henna patterns being applied to a bride's hands during a Moroccan henna night ceremony"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Henna Night Ceremony</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-moroccan-wedding-celebration.webp"
                alt="A Moroccan wedding celebration with traditional music and decorated venue"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Wedding Celebration</p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="zellige-border p-5 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">
                    Blending Traditions
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Most international couples incorporate 2-3 Moroccan elements rather than a full traditional ceremony. A henna night the evening before, an amaria entrance at the reception, and serving Moroccan pastries alongside a Western-style cake are the most popular combinations. Discuss your preferences with your planner early — some elements require specialized vendors booked months in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Wedding Venues ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Wedding Venues in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From palatial hotels to Sahara desert camps, these are the venues international couples book most often. Prices reflect 2026 estimates. Seasonal pricing can change — peak season commands 20-40% premiums.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {weddingVenues.map((venue) => {
              const Icon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {venue.city} &middot; {venue.type}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {venue.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <Users className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-[var(--text-secondary)]">{venue.capacity}</span>
                    <span className="text-gray-300 mx-1">|</span>
                    <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-[var(--text-primary)] font-medium">{venue.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {venue.highlights.map((h) => (
                      <span key={h} className="text-xs bg-[#FAF8F5] text-[var(--color-accent)] px-2.5 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Cities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities &amp; Regions for a Morocco Wedding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region offers a distinct setting and mood. Your choice shapes the entire aesthetic and guest experience.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {weddingCities.map((city) => {
              const Icon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <p className="text-sm text-[var(--color-gold)] italic font-[family-name:var(--font-heading)]">
                        {city.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{city.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]"><strong>Best for:</strong> {city.bestFor}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]"><strong>Top venues:</strong> {city.venues}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Legal Requirements ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Legal Requirements for Foreigners
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting legally married in Morocco is possible but requires advance planning. Many couples handle the legal ceremony at home and hold a symbolic celebration in Morocco.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                Required Documents
              </h3>
              <div className="space-y-3">
                {[
                  { doc: 'Valid passports', detail: 'Copies for both parties, valid for at least 6 months beyond the wedding date.' },
                  { doc: 'Birth certificates', detail: 'Translated into Arabic or French by a certified translator, apostilled.' },
                  { doc: 'Certificate of Celibacy (Certificat de Celibat)', detail: 'Obtained from your home country\'s embassy or consulate in Morocco. Confirms you are legally free to marry.' },
                  { doc: 'Medical certificates', detail: 'Both parties need a medical exam from a Moroccan doctor. Blood tests are required.' },
                  { doc: 'Affidavit of No Impediment', detail: 'A sworn statement that there is no legal reason you cannot marry. Issued by your embassy in Rabat or Casablanca.' },
                  { doc: 'Divorce/Death certificates (if applicable)', detail: 'Previous marriage documents must be translated and apostilled.' },
                ].map((item) => (
                  <div key={item.doc} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.doc}</span>
                      <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                Legal Timeline
              </h3>
              <div className="space-y-3">
                {[
                  { step: '3-4 months before', action: 'Begin gathering and translating documents. Contact your embassy in Morocco.' },
                  { step: '6-8 weeks before', action: 'Submit documents to the Moroccan family court (tribunal de famille) in the city where you will marry.' },
                  { step: '3-4 weeks before', action: 'Court review period. An adoul (notary) will be assigned to your case.' },
                  { step: '1-2 weeks before', action: 'Schedule the civil ceremony with two adouls (Islamic notaries) present.' },
                  { step: 'Wedding day', action: 'Civil ceremony conducted by adouls. The marriage is registered. You receive a Moroccan marriage certificate (acte de mariage).' },
                  { step: 'After the wedding', action: 'Register the certificate with your home country\'s embassy for international recognition.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <CircleDot className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.step}</span>
                      <p className="text-xs text-[var(--text-secondary)]">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="zellige-border p-5 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">
                    Interfaith Marriages
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Moroccan law requires that a non-Muslim man convert to Islam to marry a Muslim woman in Morocco. A non-Muslim woman may marry a Muslim man without converting. For interfaith couples where Moroccan law creates complications, the most common solution is a legal ceremony in the bride or groom&apos;s home country followed by a symbolic celebration in Morocco. Your wedding planner can advise on specifics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wedding Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tiers based on real 2025-2026 pricing from Moroccan wedding planners. All figures in Moroccan Dirham (MAD). Seasonal pricing can change — peak season adds 20-40%.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {budgetTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                        {tier.tier}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {tier.guests} &middot; Total: {tier.totalRange}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 divide-y divide-gray-100">
                    {tier.breakdown.map((line) => (
                      <div key={line.item} className="flex items-center justify-between py-2.5">
                        <span className="text-sm text-[var(--text-secondary)]">{line.item}</span>
                        <span className="text-sm font-medium text-[var(--text-primary)] whitespace-nowrap ml-4">
                          {line.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="zellige-border p-5 bg-[#FAF8F5] rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">
                    Hidden Costs to Budget For
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Plan an additional 10-15% contingency for: tips for venue staff (10-15% is expected in Morocco), last-minute vendor additions, VAT (20% on many services), airport transfers for guests (from 300 MAD per car), and a welcome dinner the night before (standard for destination weddings with traveling guests).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Planning Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning Timeline
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A month-by-month roadmap from initial planning to the wedding week.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {planningTimeline.map((phase, idx) => (
              <div key={phase.phase} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)] mb-1">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{phase.tasks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wedding Planners ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recommended Wedding Planners
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A local wedding planner who speaks Arabic, French, and English is the single most important hire. They negotiate vendor contracts, manage legal paperwork, and handle day-of logistics across language barriers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {weddingPlanners.map((planner) => (
              <div key={planner.name} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[var(--color-gold)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)]">
                    {planner.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">
                  {planner.specialty} &middot; {planner.priceRange}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{planner.note}</p>
              </div>
            ))}
          </div>

          {/* Key Vendors */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4 text-center">
              Other Key Vendors to Book
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card-moroccan p-4">
                <Camera className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">Photography &amp; Video</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  International photographers charge from 25,000-80,000 MAD. Local Moroccan photographers start from 8,000 MAD and know the best light at every venue. Book 10-12 months ahead for peak season dates.
                </p>
              </div>
              <div className="card-moroccan p-4">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">Catering</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Most hotel venues include in-house catering. For private palais or riad weddings, independent caterers charge from 400-1,500 MAD per head. Expect a menu tasting 2-3 months before the event. Seasonal pricing can change.
                </p>
              </div>
              <div className="card-moroccan p-4">
                <Music className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">Music &amp; Entertainment</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  A Gnawa fusion band adds a distinctly Moroccan sound (from 12,000 MAD). Belly dancers, fire performers, and Berber drummers are popular reception additions at from 5,000-15,000 MAD per act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Best Season for a Morocco Wedding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing affects temperature, venue availability, pricing, and which regions work best for outdoor celebrations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                season: 'April & May (Peak)',
                desc: 'The golden window. Marrakech temperatures hover at 24-30 degrees, gardens are in full bloom, and rainfall is minimal. Rose harvest season in the Dades Valley adds a romantic backdrop. Reserve 12-18 months ahead.',
                tags: [{ label: 'Best overall', color: 'bg-green-100 text-green-700' }, { label: 'Peak pricing', color: 'bg-amber-100 text-amber-700' }],
              },
              {
                season: 'September & October (Peak)',
                desc: 'Post-summer heat with temperatures settling at 25-32 degrees. Long golden-hour evenings ideal for outdoor receptions. Slightly lower demand than spring, so some venues offer 10-15% discounts versus April. Watch for Ramadan dates.',
                tags: [{ label: 'Excellent weather', color: 'bg-green-100 text-green-700' }, { label: 'Slightly lower cost', color: 'bg-blue-100 text-blue-700' }],
              },
              {
                season: 'June - August (Summer)',
                desc: 'Marrakech soars past 40 degrees in July-August, making outdoor daytime events uncomfortable. Works well for evening-only celebrations after 7 PM, or for coastal (Essaouira, 22-26 degrees) and mountain (Atlas, 25-30 degrees) venues. Prices drop 20-30%.',
                tags: [{ label: 'Hot in Marrakech', color: 'bg-amber-100 text-amber-700' }, { label: 'Great for coast/mountains', color: 'bg-green-100 text-green-700' }],
              },
              {
                season: 'November - March (Low Season)',
                desc: 'Temperatures drop to 12-20 degrees with occasional rainfall, especially December-February. Indoor ceremonies and covered courtyards are standard. Venue prices hit their lowest — 30-40% below peak. A solid option for budget-conscious couples comfortable with indoor settings.',
                tags: [{ label: 'Lowest prices', color: 'bg-blue-100 text-blue-700' }, { label: 'Rain risk', color: 'bg-amber-100 text-amber-700' }],
              },
            ].map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)] mb-2">
                  {s.season}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{s.desc}</p>
                <div className="flex items-center gap-2 text-xs">
                  {s.tags.map((t) => (
                    <span key={t.label} className={`${t.color} px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guest Experience ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guest Experience: What to Tell Your Guests
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Include these details in your wedding website or information pack. First-time Morocco visitors will have questions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Plane,
                title: 'Flights & Airports',
                text: 'Marrakech Menara (RAK) is the main hub. London: 3.5 hrs from $40 on Ryanair. Paris: 3 hrs from $60. New York: 7 hrs (seasonal Royal Air Maroc). Casablanca (CMN) is the backup hub with more global connections.',
              },
              {
                icon: Globe,
                title: 'Visa & Entry',
                text: 'No visa required for stays up to 90 days for US, UK, EU, Canadian, and Australian passport holders. Passport must be valid 6+ months. Entry typically takes under 15 minutes at immigration.',
              },
              {
                icon: DollarSign,
                title: 'Currency & Payments',
                text: 'Moroccan Dirham (MAD). Approximately 10 MAD = $1 USD. ATMs widely available. Credit cards accepted at hotels and upscale restaurants. Cash needed for medina shopping, taxis, and tips. Tipping: 10-15% is customary.',
              },
              {
                icon: ShieldCheck,
                title: 'Safety & Etiquette',
                text: 'Morocco is generally safe for tourists. Modest dress appreciated outside hotels and resorts (cover shoulders and knees in medinas). Remove shoes before entering homes. Alcohol available at licensed hotels and restaurants.',
              },
              {
                icon: Bed,
                title: 'Guest Accommodation',
                text: 'Book a room block at the wedding venue or nearby hotels 8-10 months ahead. Budget riads start from 300 MAD per night. Mid-range hotels from 600 MAD. Luxury properties from 2,000 MAD. Group rates of 10-20% off are common for 10+ rooms.',
              },
              {
                icon: Phone,
                title: 'Connectivity',
                text: 'Local SIM cards from Maroc Telecom or Orange available at the airport for from 50 MAD with data. All hotels have WiFi. Morocco is GMT+1 year-round with no daylight saving time changes.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <Icon className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
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
            Answers to the most common questions about planning a destination wedding in Morocco.
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
                title: 'Morocco Luxury Travel',
                description: 'Palace hotels, VIP tours, desert glamping, and bespoke itineraries for premium travelers.',
                href: '/morocco-luxury-travel',
                icon: Crown,
              },
              {
                title: 'Morocco Riads Guide',
                description: 'How to choose and book the perfect riad. Architecture, best picks by city, pricing, and etiquette.',
                href: '/morocco-riads-guide',
                icon: Bed,
              },
              {
                title: 'Marrakech Travel Guide',
                description: 'Complete guide to Marrakech: medina, souks, palaces, gardens, food, and nightlife.',
                href: '/morocco-marrakech',
                icon: Landmark,
              },
              {
                title: 'Morocco Photography Guide',
                description: 'Best photo locations, golden-hour timing, drone rules, and tips for capturing Morocco.',
                href: '/morocco-photography',
                icon: Camera,
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-3xl text-center">
          <Heart className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your Morocco Wedding?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start with our city guides to find your ideal region, then reach out to local wedding planners for venue tours and personalized quotes. The best peak-season dates book 12-18 months in advance — the sooner you start, the wider your venue options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg hover:bg-white/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Landmark className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/morocco-luxury-travel"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Crown className="w-4 h-4" />
              Luxury Travel Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
