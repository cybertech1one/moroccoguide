import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
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
  Waves,
  MessageCircleQuestion,
  HandCoins,
  Mountain,
  Globe,
  Compass,
  Sun,
  CalendarDays,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-spa-wellness`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Spa & Wellness Guide 2026 | Luxury Spas, Hammams & Retreats',
  description:
    'Complete guide to Morocco spa and wellness experiences. Royal Mansour, La Mamounia, Mandarin Oriental spas, traditional hammam vs modern spa, argan oil treatments, thalassotherapy in Essaouira and Agadir, yoga retreats in the Atlas Mountains, meditation retreats, couples packages, and pricing from 50 MAD.',
  keywords: [
    'Morocco spa guide 2026',
    'luxury spa Marrakech',
    'Royal Mansour spa',
    'La Mamounia spa',
    'Mandarin Oriental Marrakech spa',
    'traditional hammam Morocco',
    'hammam vs modern spa',
    'argan oil treatment Morocco',
    'thalassotherapy Essaouira',
    'thalassotherapy Agadir',
    'yoga retreat Atlas Mountains',
    'wellness resort Morocco',
    'meditation retreat Morocco',
    'couples spa Morocco',
    'spa etiquette Morocco',
    'Morocco wellness tourism',
    'beauty treatments Morocco',
    'spa prices Morocco 2026',
  ],
  openGraph: {
    title: 'Morocco Spa & Wellness Guide 2026 | Luxury Spas, Hammams & Retreats',
    description:
      'Royal Mansour, La Mamounia, and Mandarin Oriental spas. Traditional hammam rituals, argan oil treatments, thalassotherapy, yoga retreats, couples packages, and pricing across every tier.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-wellness-spa.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxurious Moroccan spa interior with zellige tilework, marble fountain, and warm ambient lighting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Spa & Wellness Guide 2026 | Luxury Spas, Hammams & Retreats',
    description:
      'Complete guide to Morocco spa culture: luxury spas, hammam rituals, argan oil treatments, thalassotherapy, yoga retreats, and pricing from 50 MAD to 5,000 MAD.',
    images: [`${BASE_URL}/images/hero-wellness-spa.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the difference between a traditional hammam and a modern spa in Morocco?',
    a: 'A traditional hammam is a communal steam bathhouse focused on scrubbing with black soap and a kessa mitt, costing from 50 MAD. A modern spa offers private treatment rooms, international techniques like Swedish massage or hot stone therapy, and premium product lines, starting from 500 MAD. Luxury spas like Royal Mansour and La Mamounia combine both approaches in multi-hour rituals.',
  },
  {
    q: 'How much do luxury spa treatments cost in Morocco?',
    a: 'Public hammams cost from 50 MAD. Mid-range riad spas charge from 300 MAD for a hammam and massage package. Luxury hotel spas like La Mamounia start from 1,200 MAD for signature treatments. Royal Mansour hammam rituals begin from 1,500 MAD. Full-day resort spa packages range from 2,500 to 5,000 MAD. Seasonal pricing can change during peak months.',
  },
  {
    q: 'What are argan oil spa treatments and why are they unique to Morocco?',
    a: 'Argan oil comes from trees that grow only in southwestern Morocco. Rich in vitamin E and essential fatty acids, it is used in massages, hair treatments, and facial care. An argan oil full-body massage costs from 300 MAD at mid-range spas. Luxury properties blend argan oil with rose water or saffron for bespoke formulations unavailable anywhere else in the world.',
  },
  {
    q: 'Where can I find thalassotherapy treatments in Morocco?',
    a: 'Thalassotherapy centers are concentrated along the Atlantic coast. Essaouira has the Sofitel Thalassa Mogador with heated seawater pools and marine treatments. Agadir offers several thalasso resorts along its beachfront. Casablanca and El Jadida also have facilities. Sessions start from 600 MAD. Multi-day thalasso packages cost from 4,000 MAD.',
  },
  {
    q: 'Are there yoga retreats in Morocco?',
    a: 'Yes. The Atlas Mountains around Ouirgane and Imlil host retreats combining yoga with mountain hiking and hammam sessions. The Essaouira coast offers surf-and-yoga programs. Marrakech has studio-based retreats in luxury riads. Programs run three to seven days, starting from 3,500 MAD for a three-day retreat including accommodation, meals, and daily sessions.',
  },
  {
    q: 'Can couples visit a hammam together in Morocco?',
    a: 'Traditional public hammams are strictly gender-separated. Couples who want to share the experience must book a private hammam suite at a luxury spa or riad. Royal Mansour, La Mamounia, and Mandarin Oriental all offer private couples hammam experiences. Couples packages start from 1,500 MAD and typically include hammam, scrub, massage, and tea service.',
  },
  {
    q: 'What is proper spa etiquette in Morocco?',
    a: 'In public hammams, women wear underwear and men wear swim shorts. Full nudity is not customary. Tip the tayeba (scrubber) from 20 to 50 MAD. At luxury spas, arrive 15 minutes early, speak softly in relaxation areas, and tip 10-15% of the treatment cost. Avoid eating a heavy meal within two hours of treatment. Hydrate well before and after steam sessions.',
  },
  {
    q: 'When is the best time for a spa holiday in Morocco?',
    a: 'October through April offers cooler weather that makes hot hammam sessions especially satisfying. Spring (March-May) combines pleasant temperatures with wildflower season in the Atlas Mountains. Summer is ideal for thalassotherapy and coastal retreats. Ramadan may affect some spa schedules at smaller properties but luxury hotel spas operate normally year-round.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Spa & Wellness Guide 2026',
  description:
    'Complete guide to spa and wellness in Morocco covering luxury spas, traditional hammams, argan oil treatments, thalassotherapy, yoga retreats, meditation, beauty treatments, and pricing.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-wellness-spa.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Spa & Wellness Guide', item: PAGE_URL },
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
   DATA: LUXURY SPAS
   ================================================================ */

const luxurySpas = [
  {
    name: 'Royal Mansour Spa',
    city: 'Marrakech',
    icon: Crown,
    image: '/images/hero-marrakech.webp',
    sqm: '2,500 sqm',
    description:
      'Conceived under the direction of King Mohammed VI, the Royal Mansour spa occupies a serene white pavilion of carved stucco and zellige mosaics. The three-room hammam journey moves through progressively warmer chambers before a thorough gommage with house-blended savon beldi. Private treatment suites open onto a courtyard with a domed indoor pool. Ancestral Moroccan beauty recipes form the treatment menu, using rose water from the Dades Valley and argan oil from Essaouira cooperatives.',
    highlights: ['Three-room hammam circuit', 'Domed indoor pool', 'Ancestral beauty recipes', 'Private treatment suites'],
    price: 'From 1,500 MAD for hammam rituals',
  },
  {
    name: 'La Mamounia Spa',
    city: 'Marrakech',
    icon: Crown,
    image: '/images/art-moroccan-garden.webp',
    sqm: '2,500 sqm',
    description:
      'La Mamounia has hosted dignitaries and travelers since 1923, and its spa matches the hotel\'s legendary standard. White Carrara marble lines the hammam chambers. Signature treatments draw on ingredients sourced region by region: argan oil from the Souss, saffron from Taliouine, rose from Kelaat M\'Gouna. The outdoor pool garden, framed by hundred-year-old olive trees and Atlas Mountain views, extends the sense of restoration beyond the treatment room.',
    highlights: ['Carrara marble hammam', 'Region-sourced ingredients', 'Atlas Mountain pool garden', 'Since 1923 heritage'],
    price: 'From 1,200 MAD for signature treatments',
  },
  {
    name: 'Mandarin Oriental Spa',
    city: 'Marrakech',
    icon: Award,
    image: '/images/art-moroccan-riad-courtyard.webp',
    sqm: '1,800 sqm',
    description:
      'Set within 20 hectares of olive groves south of the medina, the Mandarin Oriental spa blends Asian wellness philosophy with Moroccan healing tradition. Nine treatment rooms surround a vitality pool. The signature "Moroccan Journey" is a three-hour ritual combining hammam, ghassoul clay wrap, and argan oil massage. A traditional hammam with heated marble benches sits alongside a modern fitness center and an outdoor relaxation garden with reflecting pools.',
    highlights: ['20-hectare olive grove setting', 'Nine treatment rooms', 'Three-hour Moroccan Journey', 'East-meets-Morocco philosophy'],
    price: 'From 1,800 MAD for the Moroccan Journey',
  },
  {
    name: 'Kasbah Tamadot Spa',
    city: 'Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    sqm: '800 sqm',
    description:
      'Sir Richard Branson\'s mountain retreat perches at 1,300 meters in the High Atlas above the village of Asni. The intimate spa includes a traditional hammam, heated infinity pool with panoramic mountain views, and treatment rooms that open onto terraces overlooking terraced Berber farmland. Therapists use locally sourced ingredients, and the clean mountain air itself becomes part of the healing. An ideal escape from the heat and bustle of Marrakech, just 45 minutes away.',
    highlights: ['1,300m altitude', 'Infinity pool with Atlas views', 'Berber village setting', 'Locally sourced ingredients'],
    price: 'From 900 MAD for individual treatments',
  },
];

/* ================================================================
   DATA: HAMMAM VS MODERN SPA COMPARISON
   ================================================================ */

const hammamVsSpa = [
  { feature: 'Core Ritual', hammam: 'Steam, savon beldi, kessa scrub, ghassoul clay, rinse', modern: 'Consultation, treatment (massage, facial, body wrap), relaxation' },
  { feature: 'Setting', hammam: 'Communal tiled rooms with domed ceilings, buckets of water', modern: 'Private rooms, ambient music, controlled temperature and lighting' },
  { feature: 'Products', hammam: 'Natural: black soap, ghassoul clay, argan oil, rose water', modern: 'Brand product lines plus natural Moroccan ingredients' },
  { feature: 'Duration', hammam: '60-90 minutes for the full circuit', modern: '60 minutes per treatment, full-day packages available' },
  { feature: 'Price Range', hammam: 'From 50 MAD (public) to 800 MAD (luxury hammam)', modern: 'From 300 MAD (riad spa) to 3,000 MAD (resort signature)' },
  { feature: 'Privacy', hammam: 'Gender-separated communal or private suite bookings', modern: 'Fully private treatment rooms, couples suites available' },
  { feature: 'Best For', hammam: 'Cultural immersion, deep exfoliation, social experience', modern: 'Relaxation, targeted therapeutic work, pampered indulgence' },
];

/* ================================================================
   DATA: ARGAN OIL TREATMENTS
   ================================================================ */

const arganTreatments = [
  {
    name: 'Full-Body Argan Oil Massage',
    icon: Sparkles,
    duration: '60-90 min',
    description:
      'Pure cosmetic-grade argan oil, warmed to body temperature, is worked into the skin using long flowing strokes. The oil absorbs quickly, delivering vitamin E and essential fatty acids deep into the dermis. Skin remains luminous and hydrated for days afterward. Many spas blend argan with a few drops of orange blossom or neroli essential oil.',
    price: 'From 300 MAD at mid-range spas',
  },
  {
    name: 'Argan & Rose Gold Facial',
    icon: Flower2,
    duration: '45-60 min',
    description:
      'A facial combining argan oil with Damascena rose extract and 24-karat gold leaf, offered at select luxury properties. Cleansing, gentle exfoliation, an argan-rose serum, and a gold-leaf mask leave the complexion radiant. The treatment draws on the Moroccan tradition of using natural oils as the primary skincare step.',
    price: 'From 500 MAD at luxury hotel spas',
  },
  {
    name: 'Argan Oil Hair Ritual',
    icon: Gem,
    duration: '30-45 min',
    description:
      'Warm argan oil is massaged into the scalp and drawn through the hair from root to tip, then wrapped in a heated towel to allow deep penetration. After rinsing, hair is noticeably softer, shinier, and easier to manage. Moroccan women have used argan oil as a hair treatment for generations.',
    price: 'From 200 MAD at most spas',
  },
];

/* ================================================================
   DATA: THALASSOTHERAPY
   ================================================================ */

const thalassoSpots = [
  {
    location: 'Essaouira',
    icon: Waves,
    property: 'Sofitel Thalassa Mogador',
    description:
      'The Sofitel Thalassa Mogador is Morocco\'s premier thalassotherapy destination. Built directly on the Atlantic coast, the center pumps fresh seawater into heated pools, jet baths, and treatment rooms. Programs target everything from stress relief to post-surgical rehabilitation. The combination of Essaouira\'s bracing ocean air and mineral-rich Atlantic water creates conditions that European thalasso centers struggle to match.',
    treatments: ['Heated seawater pool circuits', 'Algae body wraps', 'Marine mud therapy', 'Hydro-jet massage', 'Aqua-fitness sessions'],
    price: 'From 600 MAD per session; multi-day packages from 4,000 MAD',
  },
  {
    location: 'Agadir',
    icon: Sun,
    property: 'Atlantic Palace & Beach Resorts',
    description:
      'Agadir\'s long sandy beachfront hosts several thalassotherapy resorts that operate year-round thanks to the city\'s 340 days of sunshine. Treatments pair seawater therapy with the warmth of the southern Moroccan climate. Agadir resorts tend to offer more affordable thalasso packages than Essaouira, and the adjacent Souss-Massa region provides fresh argan oil for complementary treatments.',
    treatments: ['Seawater hydrotherapy pools', 'Salt scrub exfoliation', 'Seaweed wraps', 'Underwater jet massage', 'Vitamin sea-air walks'],
    price: 'From 500 MAD per session; weekly packages from 3,500 MAD',
  },
];

/* ================================================================
   DATA: YOGA & MEDITATION RETREATS
   ================================================================ */

const retreats = [
  {
    name: 'Atlas Mountain Yoga Retreats',
    icon: Mountain,
    location: 'Ouirgane, Imlil, Ourika Valley',
    description:
      'Mountain kasbahs and eco-lodges at altitudes between 900 and 1,500 meters host three-to-seven-day retreats combining morning and evening yoga with guided Atlas hikes, hammam sessions, and farm-to-table Moroccan cuisine. The silence of the valleys and the panoramic views from open-air yoga platforms create conditions difficult to replicate in a studio setting.',
    duration: '3-7 days',
    price: 'From 3,500 MAD for a 3-day retreat',
    includes: 'Accommodation, meals, daily yoga, one hammam, guided hike',
  },
  {
    name: 'Essaouira Surf & Yoga',
    icon: Waves,
    location: 'Essaouira, Sidi Kaouki',
    description:
      'The Atlantic coast town of Essaouira and the surf village of Sidi Kaouki attract travelers who want to combine morning yoga with afternoon surf sessions. Retreats typically include beachfront yoga at sunrise, surf instruction with certified coaches, and evening meditation. The town\'s bohemian energy and fresh seafood dining round out the experience.',
    duration: '5-7 days',
    price: 'From 4,500 MAD for a 5-day retreat',
    includes: 'Accommodation, meals, daily yoga, surf lessons, board rental',
  },
  {
    name: 'Meditation & Silence Retreats',
    icon: Heart,
    location: 'High Atlas, Sahara Desert camps',
    description:
      'For travelers seeking deep inner quiet, select properties in the High Atlas and luxury desert camps in the Sahara offer guided meditation, breathwork, and digital detox programs. The absolute silence of the desert at night or the stillness of a mountain valley at dawn creates a powerful container for contemplative practice. Programs typically limit group size to ten participants.',
    duration: '4-7 days',
    price: 'From 4,500 MAD for a 4-day retreat',
    includes: 'Accommodation, meals, guided meditation, breathwork, journal',
  },
  {
    name: 'Wellness Resort Programs',
    icon: Sparkles,
    location: 'Marrakech, Agadir, Atlas foothills',
    description:
      'Full-service wellness resorts offer structured multi-day programs combining daily spa treatments, fitness classes, nutrition consultations, and cultural excursions. Properties like Amanjena near Marrakech and select Atlas kasbahs run week-long reset programs that include hammam, yoga, hiking, cooking classes, and personalized wellness assessments.',
    duration: '5-14 days',
    price: 'From 8,000 MAD for a 5-day program',
    includes: 'All treatments, meals, fitness, excursions, wellness consultation',
  },
];

/* ================================================================
   DATA: BEAUTY TREATMENTS
   ================================================================ */

const beautyTreatments = [
  { name: 'Saffron & Honey Body Wrap', price: 'From 450 MAD', duration: '75 min', description: 'Taliouine saffron blended with wildflower honey is applied after the gommage, wrapped, and left for 20 minutes. Anti-inflammatory saffron and humectant honey leave skin glowing for days.' },
  { name: 'Rose Petal Ritual', price: 'From 400 MAD', duration: '90 min', description: 'Damask roses from the Dades Valley provide rose water toner, rose oil massage, and rose petals floating in the rinse water. Available seasonally and year-round at select properties.' },
  { name: 'Ghassoul Clay Body Mask', price: 'From 200 MAD', duration: '45 min', description: 'Atlas Mountain clay mixed with rose water is applied head to toe after steaming. Rich in silica and magnesium, it draws impurities while conditioning skin and hair.' },
  { name: 'Henna Art & Hair Treatment', price: 'From 150 MAD', duration: '60 min', description: 'Natural henna paste conditions hair and creates decorative body art. Moroccan henna artists apply intricate designs on hands and feet, a tradition that doubles as a beauty treatment.' },
  { name: 'Kohl & Natural Makeup Session', price: 'From 100 MAD', duration: '30 min', description: 'Traditional Moroccan kohl eyeliner and natural makeup using mineral-based pigments. Cosmetic herbalists in the medina offer personalized consultations alongside the application.' },
];

/* ================================================================
   DATA: SPA ETIQUETTE
   ================================================================ */

const etiquetteRules = [
  { rule: 'Dress Modestly in Public Hammams', icon: ShieldCheck, text: 'Women wear underwear, men wear swim shorts. Full nudity is not customary. Luxury spas provide disposable underwear and robes.' },
  { rule: 'Tip the Tayeba', icon: HandCoins, text: 'The hammam scrubber earns most of their income from tips. From 20-50 MAD is standard at public hammams. At luxury spas, 10-15% of the treatment cost is appropriate.' },
  { rule: 'Arrive Hydrated', icon: Droplets, text: 'Drink at least 500 ml of water before entering. The steam causes heavy sweating. Avoid alcohol and heavy meals within two hours of treatment.' },
  { rule: 'Communicate Comfort Level', icon: Users, text: 'Say "shwiya" (gently) or "bezzaf" (enough) to adjust scrubbing pressure. At luxury spas, therapists check your comfort level throughout. Never endure pain in silence.' },
  { rule: 'Respect Gender Separation', icon: Building, text: 'Public hammams are strictly divided by gender. Some have separate wings; others alternate hours. Always verify the schedule before arriving.' },
  { rule: 'Leave Electronics Behind', icon: AlertTriangle, text: 'Phones and cameras are not appropriate in hammams or treatment areas. Leave valuables in your accommodation or in a provided locker.' },
];

/* ================================================================
   DATA: PRICING BY TIER
   ================================================================ */

const priceTiers = [
  { tier: 'Public Hammam', entry: 'From 50 MAD', scrub: 'From 50 MAD', massage: 'Not typically included', total: 'From 100 MAD', setting: 'Communal tiled rooms, bring your own supplies' },
  { tier: 'Riad Spa', entry: 'Included', scrub: 'Included', massage: 'From 200 MAD (30 min)', total: 'From 300 MAD', setting: 'Private room in a restored riad, products provided' },
  { tier: 'Boutique Day Spa', entry: 'Included', scrub: 'Included', massage: 'From 300 MAD (60 min)', total: 'From 500 MAD', setting: 'Designer interiors, music, premium natural products' },
  { tier: 'Luxury Hotel Spa', entry: 'Included', scrub: 'Included', massage: 'From 500 MAD (60 min)', total: 'From 1,200 MAD', setting: 'Marble, pools, saunas, jacuzzis, tea service' },
  { tier: 'Ultra-Luxury Resort', entry: 'Included', scrub: 'Included', massage: 'From 800 MAD (90 min)', total: 'From 2,500 MAD', setting: 'Multi-hour ritual, bespoke products, private suites' },
];

/* ================================================================
   DATA: COUPLES PACKAGES
   ================================================================ */

const couplesPackages = [
  { name: 'Private Couples Hammam', where: 'La Mamounia, Royal Mansour, luxury riads', price: 'From 1,500 MAD per couple', description: 'A dedicated hammam suite where both partners experience the scrub ritual simultaneously with two attendants, followed by a side-by-side massage in a candlelit room with rose petals and mint tea.' },
  { name: 'Honeymoon Spa Retreat', where: 'Amanjena, La Sultana, Selman Marrakech', price: 'From 8,000 MAD for 3 nights', description: 'Multi-day packages with daily spa treatments, private dining, and romantic excursions. All-inclusive programs with champagne amenities and customizable treatment menus.' },
  { name: 'Desert Spa Under the Stars', where: 'Merzouga, Erg Chebbi luxury camps', price: 'From 3,000 MAD per couple per night', description: 'Open-air massage under the Saharan sky, sand scrub exfoliation, and sunrise yoga on the dunes. The silence and starlight create an atmosphere no indoor spa can replicate.' },
];

/* ================================================================
   DATA: BOOKING TIPS
   ================================================================ */

const bookingTips = [
  { title: 'Book Luxury Spas 1-2 Weeks Ahead', icon: CalendarDays, text: 'Royal Mansour and La Mamounia often fill their treatment slots weeks in advance, especially October through April. Request specific therapists by name if you have a recommendation.' },
  { title: 'Ask About Midweek Discounts', icon: DollarSign, text: 'Many luxury hotel spas offer 15-25% discounts on Tuesday through Thursday bookings. Day passes including pool access and one treatment are common promotional offers.' },
  { title: 'Confirm Seasonal Pricing', icon: Info, text: 'Peak season (October-April) rates at resort spas can be 20-30% higher than summer. Always confirm the current rate when booking. Prices listed in this guide are starting prices and seasonal pricing can change.' },
  { title: 'Non-Guest Access', icon: Building, text: 'Most five-star hotel spas welcome non-guests for treatments. Some offer day passes including pool and fitness center access. Call the spa directly rather than the hotel reception for availability.' },
  { title: 'Public Hammam Research', icon: Compass, text: 'Ask your riad host to recommend a neighborhood hammam and confirm the gender schedule. Some have fixed hours; others alternate days. Your host can also arrange for a local woman to accompany first-time female visitors.' },
  { title: 'Group & Retreat Bookings', icon: Users, text: 'Yoga and meditation retreats often offer early-bird pricing 60-90 days before the start date. Groups of four or more can negotiate custom rates at most wellness properties.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoSpaWellnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-wellness-spa.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Spa &amp; Wellness Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Spa &amp; Wellness
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Spa &amp; Wellness
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From ancient hammam rituals and argan oil treatments to world-class resort spas, Atlas
            Mountain yoga retreats, and Atlantic thalassotherapy. Everything you need to plan
            a wellness journey in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco for Spa &amp; Wellness
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco has practiced the art of bodily renewal for over a thousand years. The hammam, a
              steam bathhouse found in every neighborhood from Tangier to Tiznit, is the cornerstone of
              a wellness tradition built on natural ingredients the country produces in abundance:
              argan oil from the Souss, ghassoul clay from the Atlas, rose water from the Dades Valley,
              and saffron from Taliouine.
            </p>
            <p>
              In the past two decades, international hotel brands have layered contemporary luxury onto
              this ancient foundation. Marrakech now hosts three of the most celebrated hotel spas on
              the African continent -- Royal Mansour, La Mamounia, and Mandarin Oriental -- each
              running multi-hour rituals that draw on centuries of local knowledge. Along the Atlantic
              coast, thalassotherapy centers in Essaouira and Agadir harness seawater and marine
              minerals. In the High Atlas, mountain kasbahs offer yoga retreats where the only sounds
              are birdsong and running water.
            </p>
            <p>
              What makes Morocco distinctive is range. A neighborhood hammam costs from 50 MAD and
              delivers a scrub that rivals any spa treatment on Earth. A full day at Royal Mansour
              costs upward of 5,000 MAD and involves marble, gold leaf, and ingredients you cannot
              find outside this country. Both experiences are authentic, and both leave your skin
              transformed. This guide covers every tier.
            </p>
          </div>
        </div>
      </section>

      {/* ── Luxury Spas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Spas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s four most celebrated spa properties, each offering a different approach
            to world-class wellness.
          </p>

          <div className="space-y-10">
            {luxurySpas.map((spa) => {
              const SpaIcon = spa.icon;
              return (
                <div key={spa.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56">
                    <img
                      src={spa.image}
                      alt={`${spa.name} in ${spa.city}, Morocco -- luxury spa setting`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <SpaIcon className="w-5 h-5 text-white" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                        {spa.name}
                      </h3>
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs">
                      {spa.city}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{spa.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {spa.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--color-accent)] font-semibold">{spa.price}</span>
                      <span className="text-[var(--text-muted)]">{spa.sqm} wellness area</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Traditional Hammam vs Modern Spa ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Hammam vs. Modern Spa
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two distinct approaches to wellness exist side by side in Morocco. Understanding the
            difference helps you choose the right experience.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Feature</div>
                <div className="p-3 px-4">Traditional Hammam</div>
                <div className="p-3 px-4">Modern Spa</div>
              </div>
              {hammamVsSpa.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.feature}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{row.hammam}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{row.modern}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Argan Oil Treatments ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Argan Oil Treatments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is the only country on Earth where argan trees grow naturally. Spas here use
            the freshest, purest cosmetic-grade oil available anywhere.
          </p>

          <div className="space-y-6">
            {arganTreatments.map((t) => {
              const TIcon = t.icon;
              return (
                <div key={t.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {t.name}
                        </h3>
                        <span className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                          <Clock className="w-3 h-3" />
                          {t.duration}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{t.description}</p>
                      <p className="text-xs text-[var(--color-accent)] font-semibold">{t.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Thalassotherapy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Thalassotherapy: Seawater Healing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s 3,500-kilometer coastline supports dedicated thalassotherapy centers
            that use heated Atlantic seawater, seaweed, and marine minerals.
          </p>

          <div className="space-y-8">
            {thalassoSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.location} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <SpotIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.location}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{spot.property}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{spot.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {spot.treatments.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-xs text-[var(--text-muted)]">
                        <Droplets className="w-3 h-3 text-[var(--color-accent)]" />
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--color-accent)] font-semibold">{spot.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Yoga & Meditation Retreats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Yoga, Meditation &amp; Wellness Retreats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Multi-day programs that combine movement, mindfulness, hammam sessions, and Moroccan
            cuisine in extraordinary settings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {retreats.map((r) => {
              const RIcon = r.icon;
              return (
                <div key={r.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <RIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {r.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-3">
                    <MapPin className="w-3 h-3" />
                    {r.location}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{r.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-muted)]">{r.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                      <span className="text-[var(--text-muted)]">{r.includes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-accent)] font-semibold">{r.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Beauty Treatments ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flower2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Beauty Treatments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Specialty treatments built around Morocco&apos;s most prized natural ingredients,
            from saffron and rose petals to ghassoul clay and henna.
          </p>

          <div className="space-y-4">
            {beautyTreatments.map((bt) => (
              <div key={bt.name} className="card-moroccan p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {bt.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs shrink-0">
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      <Clock className="w-3 h-3" />
                      {bt.duration}
                    </span>
                    <span className="text-[var(--color-accent)] font-semibold">{bt.price}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{bt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spa Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spa &amp; Hammam Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect these conventions and you will be welcomed warmly at any Moroccan spa or hammam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etiquetteRules.map((item) => {
              const EIcon = item.icon;
              return (
                <div key={item.rule} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <EIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {item.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing by Tier ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pricing by Tier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            What to expect at each level, from a 50 MAD neighborhood hammam to a 5,000 MAD resort day.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirhams. Seasonal pricing can change during
            peak months (October-April).
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 px-4 text-left font-medium">Tier</th>
                    <th className="p-3 px-4 text-left font-medium">Entry</th>
                    <th className="p-3 px-4 text-left font-medium">Scrub</th>
                    <th className="p-3 px-4 text-left font-medium">Massage</th>
                    <th className="p-3 px-4 text-left font-medium">Total Package</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTiers.map((row, i) => (
                    <tr key={row.tier} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.tier}</td>
                      <td className="p-3 px-4 text-[var(--text-secondary)]">{row.entry}</td>
                      <td className="p-3 px-4 text-[var(--text-secondary)]">{row.scrub}</td>
                      <td className="p-3 px-4 text-[var(--text-secondary)]">{row.massage}</td>
                      <td className="p-3 px-4 text-[var(--color-accent)] font-semibold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Couples Spa Packages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Couples &amp; Honeymoon Spa Packages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Private hammam suites, candlelit massages, and multi-day honeymoon retreats designed
            for shared wellness experiences.
          </p>

          <div className="space-y-6">
            {couplesPackages.map((pkg) => (
              <div key={pkg.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{pkg.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    {pkg.where}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                    <span className="text-[var(--color-accent)] font-semibold">{pkg.price}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for securing the best spa and wellness experiences in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Wellness Landscape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-hammam-ritual.webp"
                alt="Traditional Moroccan hammam ritual with steam, zellige tiles, and warm lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Hammam Ritual</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-yoga.webp"
                alt="Yoga session at a retreat in the Atlas Mountains of Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Yoga Retreat</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira.webp"
                alt="Atlantic coast of Essaouira, Morocco, home to thalassotherapy centers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Essaouira Thalassotherapy Coast</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about spa and wellness travel in Morocco.
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
                title: 'Traditional Hammam Guide',
                description: 'Step-by-step hammam ritual, what to bring, public vs private hammams, and city-by-city recommendations.',
                href: '/morocco-spa-guide',
                icon: Droplets,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress code, tipping customs, greetings, and social norms for respectful travel across Morocco.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
              {
                title: 'Luxury Morocco Travel',
                description: 'The finest hotels, riads, restaurants, and premium experiences for luxury travelers.',
                href: '/luxury',
                icon: Crown,
              },
              {
                title: 'Best Beaches Morocco',
                description: 'Atlantic and Mediterranean beaches, surf spots, and coastal towns for combining beach and wellness.',
                href: '/best-beaches-morocco',
                icon: Globe,
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
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your Morocco Wellness Journey?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Whether you want a 50 MAD neighborhood hammam scrub or a week-long retreat at Royal
            Mansour, Morocco offers wellness experiences at every level. Start exploring our
            destination guides to build your itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Droplets className="w-5 h-5" />
              Hammam Guide
            </Link>
            <Link
              href="/luxury"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Star className="w-5 h-5" />
              Luxury Morocco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
