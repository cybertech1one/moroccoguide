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
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  Crown,
  Calendar,
  Camera,
  FileText,
  Sun,
  Mountain,
  Landmark,
  Music,
  Gem,
  Globe,
  Phone,
  CircleDot,
  Shield,
  Utensils,
  Plane,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

/* ── CONSTANTS ── */
const BASE_URL = 'https://citytoursmorocco.com';

/* ── SEO METADATA ── */
export const metadata: Metadata = {
  title: 'Destination Weddings in Morocco 2026 | Complete Planning Guide',
  description:
    'Plan your dream destination wedding in Morocco. Top venues like La Mamounia and Royal Mansour, Moroccan wedding traditions, legal requirements for foreigners, budget breakdowns from 150,000 MAD to 2,000,000+ MAD, and the best cities for your celebration.',
  keywords: [
    'morocco wedding',
    'destination wedding morocco',
    'marrakech wedding venue',
    'moroccan wedding traditions',
    'wedding in marrakech',
    'morocco wedding planner',
    'moroccan wedding cost',
    'la mamounia wedding',
    'royal mansour wedding',
    'kasbah tamadot wedding',
    'desert wedding morocco',
    'fes wedding venue',
    'essaouira wedding',
    'moroccan henna ceremony',
    'wedding morocco legal requirements',
    'atlas mountains wedding',
    'luxury wedding morocco',
    'morocco wedding photographer',
    'moroccan wedding food',
    'riad wedding marrakech',
    'morocco wedding budget 2026',
    'amanjena wedding',
  ],
  openGraph: {
    title: 'Destination Weddings in Morocco 2026 | Complete Planning Guide',
    description:
      'Plan your dream wedding in Morocco. Venues from palatial riads to Sahara desert camps, Moroccan traditions, legal paperwork, budget breakdowns, and expert planner recommendations.',
    url: `${BASE_URL}/morocco-wedding-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Elegant wedding setup in a Moroccan palace courtyard with lanterns, rose petals, and zellige tilework',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destination Weddings in Morocco 2026 | Complete Planning Guide',
    description:
      'Top venues, Moroccan traditions, legal requirements, budget breakdowns, and planner recommendations for your Morocco destination wedding.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wedding-guide` },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wedding-guide`,
  name: 'Destination Weddings in Morocco 2026 | Complete Planning Guide',
  description:
    'Plan your dream destination wedding in Morocco. Top venues, Moroccan wedding traditions, legal requirements for foreigners, budget breakdowns, and the best cities for your celebration.',
  url: `${BASE_URL}/morocco-wedding-guide`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-wedding-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Destination Weddings in Morocco', item: `${BASE_URL}/morocco-wedding-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a destination wedding in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Morocco destination wedding ranges from 150,000 MAD (approx. $15,000 USD) for an intimate riad ceremony with 30 guests to over 2,000,000 MAD ($200,000+ USD) for a luxury palace wedding with 200+ guests. The average mid-range wedding for 80-100 guests costs between 400,000-700,000 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foreigners legally marry in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Foreigners can legally marry in Morocco. You will need to provide birth certificates (translated into Arabic or French), a Certificate of Celibacy from your home country, passport copies, and medical certificates. The process takes 3-4 weeks for paperwork approval. Many couples opt for a legal ceremony at home and a symbolic celebration in Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a wedding in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for a Morocco wedding are April-May and September-October. These shoulder seasons offer warm days (22-28°C), minimal rain, and lower venue costs compared to peak season. Summer (June-August) works well for coastal and mountain venues but Marrakech temperatures often exceed 40°C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a wedding planner for a Morocco wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A local wedding planner is strongly recommended. They handle vendor negotiations (often saving 20-30% on quoted prices), navigate language barriers, manage legal paperwork, and coordinate logistics across multiple venues. Expect to pay from 30,000-150,000 MAD depending on the scope of services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key Moroccan wedding traditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Moroccan weddings include the Hammam Day (bridal purification), the Henna Night (laylat al-henna) where the bride\'s hands and feet are decorated with intricate henna patterns, the Berza (bridal throne presentation), wearing the Takchita (formal Moroccan wedding dress changed up to 7 times), and the Amaria procession where the bride is carried on a platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should wedding guests know about traveling to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guests should know: Morocco is visa-free for 90 days for most Western passports. Marrakech Menara Airport (RAK) is the main hub. The currency is the Moroccan Dirham (MAD). Modest dress is appreciated outside the resort. Tipping (10-15%) is customary. Most luxury venues serve alcohol. International flights average $400-800 USD round trip from Europe and $800-1,400 from North America.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we have alcohol at our Morocco wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Licensed hotels, resorts, and many upscale riads serve alcohol. La Mamounia, Royal Mansour, Amanjena, and most 5-star properties have full bar service. Some private palais venues can arrange licensed catering with alcohol. Budget from 8,000-25,000 MAD for a bar package depending on guest count and drink selection. Note that during Ramadan, alcohol policies at some venues may be restricted.',
      },
    },
  ],
};

/* ── DATA: WEDDING VENUES ── */
const weddingVenues = [
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    type: 'Palace Hotel',
    icon: Crown,
    capacity: 'Up to 500 guests',
    price: 'From 800,000 MAD (venue hire + min. spend)',
    description:
      'The grande dame of Marrakech hotels, operating since 1929. Its 8-hectare gardens, Art Deco interiors, and Moorish architecture make it Morocco\'s most iconic wedding venue. The main garden hosts up to 500 guests under century-old olive trees, with Atlas Mountain views as a backdrop.',
    highlights: ['8-hectare gardens with Atlas views', 'On-site wedding coordination team', 'Michelin-starred catering', '209 rooms for guest accommodation'],
  },
  {
    name: 'Royal Mansour',
    city: 'Marrakech',
    type: 'Luxury Palace',
    icon: Crown,
    capacity: 'Up to 300 guests',
    price: 'From 1,200,000 MAD (venue hire + min. spend)',
    description:
      'Commissioned by King Mohammed VI and designed by 1,500 master artisans. Each of the 53 private riads within the compound has its own plunge pool and rooftop terrace. The Grand Riad courtyard provides a jaw-dropping ceremony space with hand-carved stucco ceilings 12 meters high.',
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
      'Sir Richard Branson\'s Atlas Mountain retreat, perched at 1,200 meters above sea level in the village of Asni, 45 minutes from Marrakech. The panoramic mountain terrace offers ceremony views across the High Atlas. Ideal for intimate weddings of 40-120 guests who want dramatic scenery without the Marrakech heat.',
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
      'The first Aman resort on the African continent, built around a central bassin (reflecting pool) inspired by the Menara Gardens. Thirty-nine pavilions and six two-story maisons are spread across rose gardens and ancient olive groves on the road to Ouarzazate. The Thai Restaurant courtyard is a popular ceremony location.',
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
      'A contemporary architectural masterpiece set on 5 hectares with multiple lakes, gardens, and courtyards. The property blends Moroccan, Balinese, and minimalist design. The lakeside terrace provides a modern ceremony setting that photographs exceptionally well at sunset.',
    highlights: ['5 hectares of lakes and gardens', 'Contemporary Moroccan design', 'Lakeside ceremony terrace', 'Open-plan reception spaces'],
  },
  {
    name: 'Desert Camp (Merzouga / Zagora)',
    city: 'Sahara Desert',
    type: 'Luxury Desert Camp',
    icon: Sun,
    capacity: 'Up to 80 guests',
    price: 'From 200,000 MAD',
    description:
      'For couples who want something truly unforgettable: exchange vows on the Erg Chebbi dunes at sunset, dine under a canopy of stars with zero light pollution, and dance to Gnawa musicians around a bonfire. Luxury camps provide king-size beds, private bathrooms, and gourmet catering in the middle of the Sahara.',
    highlights: ['Sunset dune ceremony', 'Starlit dinner under Berber tents', 'Camel procession for the couple', 'Gnawa musicians and bonfire'],
  },
] as const;

/* ── DATA: WEDDING CITIES ── */
const weddingCities = [
  {
    city: 'Marrakech',
    icon: Landmark,
    tagline: 'The undisputed capital of Moroccan destination weddings',
    description:
      'Marrakech hosts over 70% of Morocco\'s international destination weddings. The city offers hundreds of riads, palatial hotels, and private villas equipped for celebrations from 20 to 500 guests. Menara Airport (RAK) has direct flights from London, Paris, New York (seasonal), Dubai, and 100+ other cities.',
    bestFor: 'Large luxury weddings, rooftop ceremonies, garden receptions',
    venues: 'La Mamounia, Royal Mansour, Amanjena, El Fenn, Dar Ahlam, 100+ private riads',
  },
  {
    city: 'Fes',
    icon: Building,
    tagline: 'Medieval grandeur and artisan craftsmanship',
    description:
      'The oldest imperial city offers a more authentic and less commercialized wedding experience. Riad venues inside the 9th-century medina feature original zellige tilework, carved cedar ceilings, and intimate courtyard settings. Fes is 20-30% less expensive than Marrakech for comparable venues.',
    bestFor: 'Cultural weddings, intimate ceremonies, history-loving couples',
    venues: 'Palais Faraj, Riad Fes, Hotel Sahrai, Palais Amani, Dar Roumana',
  },
  {
    city: 'Essaouira',
    icon: Globe,
    tagline: 'Atlantic coast charm with a bohemian edge',
    description:
      'This fortified port city on the Atlantic coast offers ocean breezes, a laid-back atmosphere, and dramatic rampart views. Beachfront ceremonies on Essaouira\'s wide sandy beach or within the 18th-century Portuguese ramparts give a completely different aesthetic than Marrakech.',
    bestFor: 'Beach weddings, relaxed boho-style celebrations, wind-sport enthusiasts',
    venues: 'Heure Bleue Palais, Villa de l\'O, Le Jardin des Douars, Dar L\'Oussia',
  },
  {
    city: 'Ouarzazate & Ait Benhaddou',
    icon: Sun,
    tagline: 'Hollywood\'s Morocco — cinematic desert landscapes',
    description:
      'The gateway to the Sahara and home to Morocco\'s film studios. The UNESCO-listed ksar of Ait Benhaddou (filming location for Game of Thrones, Gladiator, and Lawrence of Arabia) provides an unmatched cinematic backdrop. Kasbahs and desert lodges in the Draa Valley handle intimate to mid-size weddings.',
    bestFor: 'Cinematic desert weddings, kasbah ceremonies, adventure couples',
    venues: 'Dar Ahlam, Kasbah Ait Benhaddou venues, Le Temple des Arts, Oscar Hotel',
  },
  {
    city: 'Atlas Mountains',
    icon: Mountain,
    tagline: 'Alpine drama at Africa\'s rooftop',
    description:
      'Mountain lodges and converted kasbahs in the High Atlas offer cool temperatures (even in summer), dramatic scenery, and total privacy. Most Atlas venues sit between 1,000-1,800 meters elevation in the Ourika Valley, Imlil Valley, or along the Tizi n\'Tichka pass. Day trips to Marrakech take under 90 minutes.',
    bestFor: 'Mountain-backdrop ceremonies, summer weddings, nature lovers',
    venues: 'Kasbah Tamadot, Kasbah Bab Ourika, Domaine de la Roseraie, Kasbah du Toubkal',
  },
] as const;

/* ── DATA: MOROCCAN WEDDING TRADITIONS ── */
const traditions = [
  {
    name: 'The Hammam Day',
    icon: Sparkles,
    description:
      'Before the wedding, the bride visits a hammam (traditional bathhouse) with her closest female relatives and friends. This ritual purification includes a full-body scrub with savon beldi (black soap), a ghassoul clay mask, and a rose water rinse. Many modern brides book a private hammam session at a luxury spa, turning it into a bridal shower alternative.',
  },
  {
    name: 'Laylat al-Henna (Henna Night)',
    icon: Heart,
    description:
      'Held 1-3 days before the wedding, the henna night is a women-only celebration where a neqqasha (henna artist) decorates the bride\'s hands and feet with intricate geometric and floral patterns. The darker the henna stains, the stronger the marriage — or so tradition holds. Guests eat Moroccan pastries, drink mint tea, and celebrate with music and dancing. Many destination wedding couples incorporate a modified henna party for all guests.',
  },
  {
    name: 'The Takchita & Seven Outfit Changes',
    icon: Gem,
    description:
      'Moroccan brides traditionally wear the takchita — a two-piece formal gown with a base layer (tahtia) and an ornate overdress (dfina) secured by a jeweled belt (mdamma). Throughout a traditional Moroccan wedding, the bride changes outfits up to 7 times, each representing a different region or style. Destination wedding brides often wear 2-3 takchitas alongside a Western wedding dress.',
  },
  {
    name: 'The Amaria Procession',
    icon: Crown,
    description:
      'The bride makes her grand entrance carried above the crowd on an amaria — an ornate wooden platform draped in silk and gold. Four men carry the platform while guests cheer, musicians play, and the procession moves through the venue. This dramatic entrance remains one of the most photographed moments at Moroccan weddings.',
  },
  {
    name: 'The Berza (Throne Ceremony)',
    icon: Star,
    description:
      'The couple sits on an elevated platform called a berza or negafa throne, decorated with flowers, candles, and brocade fabric. Guests approach the couple to offer congratulations and blessings. A negafa (bridal attendant) assists the bride with each outfit change and ensures the ceremony follows tradition. Professional negafas charge from 15,000-80,000 MAD.',
  },
  {
    name: 'Berber Mountain Ceremonies',
    icon: Mountain,
    description:
      'In the Atlas Mountains, Amazigh (Berber) wedding traditions differ from Arab-Moroccan customs. Celebrations can last 3 days and include the Ahidous collective dance, communal couscous preparation by the village women, and symbolic exchanges of dates, milk, and almonds between families. Some Atlas Mountain venues offer authentic Berber ceremony packages.',
  },
] as const;

/* ── DATA: WEDDING PLANNERS & VENDORS ── */
const weddingPlanners = [
  {
    name: 'Boutique Souk Weddings',
    specialty: 'Full-service luxury planning',
    priceRange: 'From 80,000 MAD',
    note: 'Specializes in international destination weddings across Morocco. Fluent English, French, Arabic.',
  },
  {
    name: 'MIDA Events Marrakech',
    specialty: 'Large-scale celebrations & production',
    priceRange: 'From 100,000 MAD',
    note: 'Handles weddings up to 500 guests with full AV production, lighting design, and entertainment booking.',
  },
  {
    name: 'Marrakech Wedding Planner (MWP)',
    specialty: 'Mid-range to luxury planning',
    priceRange: 'From 50,000 MAD',
    note: 'Over 200 weddings coordinated since 2014. Strong vendor relationships across Marrakech and the Atlas.',
  },
  {
    name: 'Fes Wedding Co.',
    specialty: 'Fes-based intimate weddings',
    priceRange: 'From 30,000 MAD',
    note: 'Focused exclusively on Fes medina venues. Expert knowledge of local riad owners and artisan vendors.',
  },
] as const;

/* ── DATA: BUDGET BREAKDOWN ── */
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
      { item: 'Full negafa service & multiple outfit changes', cost: '40,000 - 100,000 MAD' },
      { item: 'Guest experiences (excursions, welcome dinner)', cost: '80,000 - 200,000 MAD' },
      { item: 'Coordination, transport & logistics', cost: '50,000 - 100,000 MAD' },
    ],
  },
] as const;

/* ── DATA: RELATED GUIDES ── */
const relatedGuides = [
  { title: 'Morocco Spa & Hammam Guide', href: '/morocco-spa-guide', icon: Sparkles },
  { title: 'Best Time to Visit Morocco', href: '/best-time-visit-morocco', icon: Calendar },
  { title: 'Marrakech Travel Guide', href: '/marrakech', icon: MapPin },
  { title: 'Morocco Food & Cuisine Guide', href: '/cuisine', icon: Utensils },
  { title: 'Budget Travel Morocco', href: '/budget-travel', icon: DollarSign },
  { title: 'Fes Travel Guide', href: '/fes', icon: Building },
  { title: 'Atlas Mountains Guide', href: '/atlas-mountains', icon: Mountain },
  { title: 'Morocco Safety Tips', href: '/safety', icon: Shield },
] as const;

/* ── PAGE COMPONENT ── */
export default function MoroccoWeddingGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#2C1810] overflow-hidden">
        <div className="hero-overlay absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Moroccan palace courtyard set for a wedding celebration with lanterns, flowers, and warm evening light"
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
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 18 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 5 cities covered</span>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-[family-name:var(--font-heading)] text-lg text-gray-700 leading-relaxed mb-4">
              Morocco has surged past Tuscany and Bali as one of the world&apos;s fastest-growing destination wedding markets. In 2025, Marrakech alone hosted over 3,000 international weddings — a 40% increase from 2022. The reasons are straightforward: jaw-dropping venues at 30-50% less than comparable European options, direct flights from most major cities, and an aesthetic that photographs like nowhere else on earth.
            </p>
            <p className="font-[family-name:var(--font-heading)] text-base text-gray-600 leading-relaxed">
              This guide covers everything from legal paperwork to budget breakdowns, traditional Moroccan ceremony elements, the best venues in each city, and practical advice for your guests. Written from on-the-ground experience across dozens of Morocco weddings.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY MOROCCO ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Why Morocco for a Destination Wedding?
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Four compelling reasons couples are choosing Morocco over traditional European destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810]">
                  30-50% Lower Costs
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                A luxury 100-guest wedding at a 5-star Marrakech palace runs from 500,000-700,000 MAD ($50,000-$70,000 USD). A comparable celebration at a villa in Tuscany or the South of France starts at $120,000-$180,000 USD. The cost difference stems from lower labor costs, competitive vendor pricing, and a favorable exchange rate.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                  <Sun className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810]">
                  300+ Days of Sunshine
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                Marrakech averages 320 sunny days per year. April through October offers near-guaranteed clear skies for outdoor ceremonies. Even the shoulder months of March and November deliver warm, pleasant weather — unlike the rain roulette of European summer weddings.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810]">
                  Unmatched Visual Drama
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                Zellige tilework, hand-carved stucco, Moorish arches, lantern-lit courtyards, rose-petal pathways, Atlas Mountain backdrops, Sahara dunes at sunset. Morocco delivers a visual richness that most venues can&apos;t match regardless of budget. Every surface, every angle, every light condition produces stunning photographs.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810]">
                  Easy Access from Everywhere
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                Marrakech Menara Airport (RAK) receives direct flights from London (3.5 hrs), Paris (3 hrs), New York (7 hrs), Dubai (8 hrs), and 100+ other cities. Budget carriers like Ryanair and EasyJet keep guest flights affordable — London to Marrakech starts at $40 one-way. No visa required for 90+ nationalities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOROCCAN WEDDING TRADITIONS ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Moroccan Wedding Traditions
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Incorporate these authentic ceremonies and customs to give your celebration a distinctly Moroccan character. Most destination wedding planners offer packages that blend Western and Moroccan elements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {traditions.map((tradition) => {
              const Icon = tradition.icon;
              return (
                <div key={tradition.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#C4960C]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C4960C]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810]">
                      {tradition.name}
                    </h3>
                  </div>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                    {tradition.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="zellige-border p-5 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">
                    Blending Traditions
                  </h4>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                    Most international couples incorporate 2-3 Moroccan elements rather than a full traditional ceremony. A henna night the evening before the wedding, an amaria entrance at the reception, and serving Moroccan pastries alongside a Western-style cake are the most popular combinations. Discuss your preferences with your planner early — some elements require specialized vendors booked months in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST WEDDING VENUES ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Best Wedding Venues in Morocco
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              From palatial hotels to Sahara desert camps, these are the venues that international couples book most often. Prices reflect 2026 estimates and vary by season; peak season (April-May, September-October) commands 20-40% premiums.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {weddingVenues.map((venue) => {
              const Icon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#A0522D]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810]">
                          {venue.name}
                        </h3>
                        <p className="font-[family-name:var(--font-heading)] text-xs text-gray-500">
                          {venue.city} &middot; {venue.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed mb-3">
                    {venue.description}
                  </p>
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <Users className="w-4 h-4 text-[#C4960C]" />
                    <span className="font-[family-name:var(--font-heading)] text-gray-700">{venue.capacity}</span>
                    <span className="text-gray-300 mx-1">|</span>
                    <DollarSign className="w-4 h-4 text-[#C4960C]" />
                    <span className="font-[family-name:var(--font-heading)] text-gray-700 font-medium">{venue.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {venue.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="font-[family-name:var(--font-heading)] text-xs bg-[#FAF8F5] text-[#A0522D] px-2.5 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CITIES FOR WEDDINGS ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Best Cities for a Morocco Wedding
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Each region offers a distinct setting and mood. Your choice of city shapes the entire aesthetic and guest experience.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {weddingCities.map((city) => {
              const Icon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#2C1810]">
                        {city.city}
                      </h3>
                      <p className="font-[family-name:var(--font-heading)] text-sm text-[#C4960C] italic">
                        {city.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed mb-3">
                    {city.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-heading)] text-gray-700">
                        <strong>Best for:</strong> {city.bestFor}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-heading)] text-gray-700">
                        <strong>Top venues:</strong> {city.venues}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WEDDING PLANNERS & VENDORS ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Wedding Planners & Key Vendors
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              A local wedding planner who speaks Arabic, French, and English is the single most important hire for a Morocco destination wedding. They negotiate vendor contracts (often saving 20-30% on quoted prices), manage legal paperwork, and handle day-of logistics across language barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {weddingPlanners.map((planner) => (
              <div key={planner.name} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#C4960C]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#C4960C]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810]">
                    {planner.name}
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-gray-500 text-xs mb-1">
                  {planner.specialty} &middot; {planner.priceRange}
                </p>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                  {planner.note}
                </p>
              </div>
            ))}
          </div>

          {/* Other key vendors */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#2C1810] mb-4 text-center">
              Other Key Vendors to Book
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card-moroccan p-4">
                <Camera className="w-5 h-5 text-[#A0522D] mb-2" />
                <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Photography & Video</h4>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                  International photographers charge from 25,000-80,000 MAD. Local Moroccan photographers start from 8,000 MAD and know the best light at every venue. Book 10-12 months ahead for peak season dates.
                </p>
              </div>
              <div className="card-moroccan p-4">
                <Utensils className="w-5 h-5 text-[#A0522D] mb-2" />
                <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Catering</h4>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                  Most hotel venues include in-house catering. For private palais or riad weddings, independent caterers charge from 400-1,500 MAD per head. Expect a menu tasting 2-3 months before the event.
                </p>
              </div>
              <div className="card-moroccan p-4">
                <Music className="w-5 h-5 text-[#A0522D] mb-2" />
                <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Music & Entertainment</h4>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                  A Gnawa fusion band adds a distinctly Moroccan sound (from 12,000 MAD). International DJs can be flown in. Belly dancers, fire performers, and Berber drummers are popular reception additions at from 5,000-15,000 MAD per act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL REQUIREMENTS ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Legal Requirements for Foreigners
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Getting legally married in Morocco is possible but requires advance planning. Many couples handle the legal ceremony at home and hold a symbolic (but no less meaningful) celebration in Morocco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan p-6 mb-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#A0522D]" />
                Required Documents
              </h3>
              <div className="space-y-3">
                {[
                  { doc: 'Valid passports', detail: 'Copies for both parties, valid for at least 6 months beyond the wedding date' },
                  { doc: 'Birth certificates', detail: 'Translated into Arabic or French by a certified translator, apostilled' },
                  { doc: 'Certificate of Celibacy (Certificat de Célibat)', detail: 'Obtained from your home country\'s embassy or consulate in Morocco. Confirms you are legally free to marry.' },
                  { doc: 'Medical certificates', detail: 'Both parties need a medical exam from a Moroccan doctor. Blood tests are required.' },
                  { doc: 'Affidavit of No Impediment', detail: 'A sworn statement that there is no legal reason you cannot marry. Issued by your embassy in Rabat or Casablanca.' },
                  { doc: 'Divorce/Death certificates (if applicable)', detail: 'Previous marriage documents must be translated and apostilled.' },
                ].map((item) => (
                  <div key={item.doc} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-[family-name:var(--font-heading)] text-sm font-medium text-[#2C1810]">{item.doc}</span>
                      <p className="font-[family-name:var(--font-heading)] text-xs text-gray-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6 mb-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#2C1810] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#A0522D]" />
                Timeline & Process
              </h3>
              <div className="space-y-3">
                {[
                  { step: '3-4 months before', action: 'Begin gathering and translating documents. Contact your embassy in Morocco.' },
                  { step: '6-8 weeks before', action: 'Submit documents to the Moroccan family court (tribunal de famille) in the city where you\'ll marry.' },
                  { step: '3-4 weeks before', action: 'Court review period. An adoul (notary) will be assigned to your case.' },
                  { step: '1-2 weeks before', action: 'Schedule your civil ceremony with two adouls (Islamic notaries) present.' },
                  { step: 'Wedding day', action: 'Civil ceremony conducted by adouls. The marriage is registered with the court. You receive a Moroccan marriage certificate (acte de mariage).' },
                  { step: 'After the wedding', action: 'Register your Moroccan marriage certificate with your home country\'s embassy for international recognition.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <CircleDot className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-[family-name:var(--font-heading)] text-sm font-medium text-[#2C1810]">{item.step}</span>
                      <p className="font-[family-name:var(--font-heading)] text-xs text-gray-500">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="zellige-border p-5 bg-white rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">
                    Interfaith Marriages
                  </h4>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                    Moroccan law requires that a non-Muslim man convert to Islam to marry a Muslim woman in Morocco. A non-Muslim woman may marry a Muslim man without converting. For interfaith couples where Moroccan law creates complications, the most common solution is a legal ceremony in the bride or groom&apos;s home country followed by a symbolic celebration in Morocco. Your wedding planner can advise on the specifics for your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUDGET BREAKDOWN ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Wedding Budget Breakdown
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Three budget tiers based on real 2025-2026 pricing from Moroccan wedding planners. All figures in Moroccan Dirham (MAD). Seasonal pricing can change — peak season (April-May, Sep-Oct) adds 20-40%.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {budgetTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 bg-[#A0522D]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#2C1810]">
                        {tier.tier}
                      </h3>
                      <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500">
                        {tier.guests} &middot; Total: {tier.totalRange}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 divide-y divide-gray-100">
                    {tier.breakdown.map((line) => (
                      <div key={line.item} className="flex items-center justify-between py-2.5">
                        <span className="font-[family-name:var(--font-heading)] text-sm text-gray-700">{line.item}</span>
                        <span className="font-[family-name:var(--font-heading)] text-sm font-medium text-[#2C1810] whitespace-nowrap ml-4">
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
                <DollarSign className="w-5 h-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">
                    Hidden Costs to Budget For
                  </h4>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                    Plan an additional 10-15% contingency for: tips for venue staff (expected at 10-15% in Morocco), last-minute vendor additions, VAT (20% on many services), airport transfers for guests (from 300 MAD per car), and a welcome dinner the night before the wedding (common for destination weddings with traveling guests).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST SEASON ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Best Season for a Morocco Wedding
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Timing affects everything: temperature, venue availability, pricing, and which regions work best for outdoor celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810]">
                  April & May (Peak)
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed mb-2">
                The golden window. Marrakech temperatures hover at 24-30°C, gardens are in full bloom, and rainfall is minimal. Rose harvest season in the Dades Valley adds a romantic backdrop. Downside: highest venue prices and booking competition. Reserve 12-18 months ahead.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Best overall</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Peak pricing</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810]">
                  September & October (Peak)
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed mb-2">
                Post-summer heat with temperatures settling at 25-32°C. Long golden-hour evenings ideal for outdoor receptions. The date harvest adds a festive atmosphere. Slightly lower demand than spring, so some venues offer 10-15% discounts compared to April. Watch for Ramadan dates — the holy month shifts the wedding calendar.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Excellent weather</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Slightly lower cost</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810]">
                  June - August (Summer)
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed mb-2">
                Marrakech soars past 40°C in July-August, making outdoor daytime events uncomfortable. But it works well for evening-only celebrations that start after 7 PM, or for coastal (Essaouira, 22-26°C) and mountain (Atlas, 25-30°C) venues. Venue prices drop 20-30% from peak rates. Desert weddings are not recommended.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Hot in Marrakech</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Great for coast/mountains</span>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810]">
                  November - March (Low Season)
                </h3>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed mb-2">
                Temperatures drop to 12-20°C with occasional rainfall, especially December-February. Indoor venue ceremonies and covered courtyard receptions are the norm. Venue prices hit their lowest — 30-40% below peak. The trade-off: shorter daylight hours and the need for a solid rain backup plan. A great option for budget-conscious couples who don&apos;t mind indoor settings.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Lowest prices</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)]">Rain risk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUEST EXPERIENCE ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Guest Experience: What to Tell Your Guests
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Include these details in your wedding website or information pack. First-time Morocco visitors will have questions — answering them upfront reduces stress for everyone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="card-moroccan p-5">
              <Plane className="w-5 h-5 text-[#A0522D] mb-2" />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Flights & Airports</h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                Marrakech Menara (RAK) is the main hub. London: 3.5 hrs from $40 on Ryanair. Paris: 3 hrs from $60. New York: 7 hrs (seasonal Royal Air Maroc). Casablanca (CMN) is the backup hub with more connections.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Globe className="w-5 h-5 text-[#A0522D] mb-2" />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Visa & Entry</h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                No visa required for stays up to 90 days for US, UK, EU, Canadian, and Australian passport holders. Passport must be valid 6+ months beyond travel dates. Entry is straightforward — typically under 15 minutes at immigration.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <DollarSign className="w-5 h-5 text-[#A0522D] mb-2" />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Currency & Payments</h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                Moroccan Dirham (MAD). Approximately 10 MAD = $1 USD. ATMs are widely available. Credit cards accepted at hotels and upscale restaurants. Cash needed for medina shopping, taxis, and tips. Tipping: 10-15% is customary.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Shield className="w-5 h-5 text-[#A0522D] mb-2" />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Safety & Etiquette</h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                Morocco is generally safe for tourists. Modest dress appreciated outside hotels/resorts (cover shoulders and knees in medinas and mosques). Remove shoes before entering homes. Alcohol is available at licensed hotels and restaurants but not publicly consumed.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Phone className="w-5 h-5 text-[#A0522D] mb-2" />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Connectivity</h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                Local SIM cards from Maroc Telecom or Orange available at the airport for from 50 MAD with data. All hotels and most restaurants have WiFi. Morocco is GMT+1 year-round (no daylight saving time changes).
              </p>
            </div>
            <div className="card-moroccan p-5">
              <MapPin className="w-5 h-5 text-[#A0522D] mb-2" />
              <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">Getting Around</h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-xs leading-relaxed">
                Airport transfers: arrange through your venue or planner (from 200 MAD per car). Petit taxis within cities: from 20-50 MAD. Uber is not available — use InDrive or hotel-arranged cars. Guests staying at the wedding venue rarely need transport.
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="zellige-border p-5 bg-[#FAF8F5] rounded-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] mb-1">
                    Extend the Trip
                  </h4>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                    Encourage guests to turn the wedding into a holiday. Suggest a post-wedding excursion: a 2-day Sahara desert trip from Marrakech, a day trip to Essaouira&apos;s coast, or a cooking class in the medina. Group bookings for 10+ guests often get 15-20% discounts on tours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Answers to the most common questions about planning a destination wedding in Morocco.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {(jsonLdFaq.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map((faq) => (
              <div key={faq.name} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[#2C1810] mb-2">
                      {faq.name}
                    </h3>
                    <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[#2C1810] font-bold mb-3">
              Related Morocco Guides
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-gray-600 max-w-2xl mx-auto">
              Explore more guides to help you and your guests plan the perfect Morocco experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-[#A0522D]/10 rounded-lg flex items-center justify-center group-hover:bg-[#A0522D]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[#2C1810] group-hover:text-[#A0522D] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-[#A0522D] text-xs font-[family-name:var(--font-heading)]">
                    Read guide <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white font-bold mb-4">
            Ready to Plan Your Morocco Wedding?
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Start with our city guides to find your ideal region, then contact local wedding planners for venue tours and quotes. The best dates book 12-18 months in advance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/90 transition-colors"
            >
              Explore Marrakech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/10 transition-colors"
            >
              Best Time to Visit <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
