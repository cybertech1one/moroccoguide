import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Mountain,
  Utensils,
  ShoppingBag,
  Plane,
  Globe,
  Camera,
  Compass,
  Scale,
  CircleDot,
  Landmark,
  Coffee,
  GraduationCap,
  Music,
  Palette,
  Bus,
  Train,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Fes vs Marrakech 2026 | Which Moroccan City Should You Visit?',
  description:
    'Fes vs Marrakech: the ultimate comparison guide. History, medinas, food, riads, shopping, day trips, costs, and which city suits your travel style. Honest head-to-head breakdown with prices in MAD for 2026.',
  keywords: [
    'Fes vs Marrakech',
    'Marrakech or Fes',
    'Fes or Marrakech',
    'should I visit Fes or Marrakech',
    'Fes vs Marrakech comparison',
    'Fes Marrakech which is better',
    'Fes medina vs Marrakech medina',
    'Fes vs Marrakech food',
    'Fes vs Marrakech cost',
    'Fes vs Marrakech riads',
    'Fes vs Marrakech shopping',
    'Marrakech vs Fes 2026',
    'Morocco Fes Marrakech itinerary',
    'Fes vs Marrakech for first time visitor',
    'best city to visit in Morocco',
    'Fes vs Marrakech day trips',
    'Fes or Marrakech for families',
    'Fes vs Marrakech budget',
  ],
  openGraph: {
    title: 'Fes vs Marrakech 2026 | Which Moroccan City Should You Visit?',
    description:
      'Complete head-to-head comparison of Morocco\'s two greatest imperial cities. Medinas, food, riads, shopping, costs, and which suits your travel style.',
    url: `${BASE_URL}/fes-vs-marrakech`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Fes medina with traditional Moroccan architecture and minarets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fes vs Marrakech 2026 | The Great Morocco Debate',
    description:
      'Head-to-head comparison: medinas, food, riads, shopping, day trips, and costs. The honest guide to choosing between Morocco\'s two greatest cities.',
    images: [`${BASE_URL}/images/hero-fes-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/fes-vs-marrakech` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/fes-vs-marrakech`,
  name: 'Fes vs Marrakech 2026 | Which Moroccan City Should You Visit?',
  description:
    'Complete head-to-head comparison of Fes and Marrakech covering history, medinas, food, riads, shopping, day trips, transport, and costs for 2026 travelers.',
  url: `${BASE_URL}/fes-vs-marrakech`,
  image: `${BASE_URL}/images/hero-fes-medina.webp`,
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
  mainEntityOfPage: `${BASE_URL}/fes-vs-marrakech`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Fes', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
    { '@type': 'City', name: 'Marrakech', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Fes vs Marrakech', item: `${BASE_URL}/fes-vs-marrakech` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Should I visit Fes or Marrakech first?', acceptedAnswer: { '@type': 'Answer', text: 'Most travelers start in Marrakech because it has better international flight connections and is an easier introduction to Morocco. Visit Fes second for a deeper, more authentic experience.' } },
    { '@type': 'Question', name: 'Which city has the better medina: Fes or Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Fes el-Bali is the world\'s largest car-free urban area with over 9,000 alleyways (UNESCO since 1981). It feels authentically medieval. Marrakech\'s medina is more accessible with Jemaa el-Fnaa, but Fes wins on scale and authenticity.' } },
    { '@type': 'Question', name: 'Is Fes or Marrakech cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Fes is 15-25% cheaper. Mid-range riads from 400 MAD vs from 600 MAD in Marrakech. Street food from 20 MAD vs from 30 MAD. Fewer tourists keeps prices lower.' } },
    { '@type': 'Question', name: 'Which city has better food?', acceptedAnswer: { '@type': 'Answer', text: 'Fes is Morocco\'s culinary capital with pastilla, refined tagines, and Andalusian traditions. Marrakech has the better street food scene at Jemaa el-Fnaa. Serious foodies should prioritize Fes.' } },
    { '@type': 'Question', name: 'How far is Fes from Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Approximately 530 km. Train: 7 hours via Casablanca (from 200 MAD). Bus: 8-9 hours (from 150 MAD). Flight: 1 hour (from 500 MAD).' } },
    { '@type': 'Question', name: 'Can I visit both in one week?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, though rushed. Spend 3 days in one city, 2 in the other, with one travel day. The overnight train saves accommodation. For a relaxed pace, allow 10-14 days.' } },
    { '@type': 'Question', name: 'Which city is better for shopping?', acceptedAnswer: { '@type': 'Answer', text: 'Fes for leather, ceramics, zellige, brass, and textiles. Marrakech for carpets, argan oil, lanterns, and designer boutiques. Both require haggling.' } },
    { '@type': 'Question', name: 'Is Fes or Marrakech better for families?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech. More open spaces, wider streets for strollers, camel rides, calèche rides, and Majorelle Garden. Fes\'s narrow steep medina is harder with young children.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: AT-A-GLANCE COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonTable = [
  { category: 'Population', fes: '1.2 million', marrakech: '1 million', winner: 'tie', icon: Users },
  { category: 'Medina Size', fes: 'Largest car-free urban area in the world', marrakech: 'Large, centered on Jemaa el-Fnaa', winner: 'fes', icon: MapPin },
  { category: 'UNESCO Status', fes: 'Since 1981 (Fes el-Bali)', marrakech: 'Since 1985 (Medina)', winner: 'tie', icon: Award },
  { category: 'Airport', fes: 'Fes-Saiss (FEZ) - Limited international flights', marrakech: 'Menara (RAK) - Major international hub', winner: 'marrakech', icon: Plane },
  { category: 'Average Temp (Spring)', fes: '14-24 degrees C', marrakech: '16-28 degrees C', winner: 'tie', icon: Thermometer },
  { category: 'Overall Vibe', fes: 'Spiritual, scholarly, authentic', marrakech: 'Vibrant, energetic, cosmopolitan', winner: 'tie', icon: Heart },
  { category: 'Tourist Crowds', fes: 'Moderate, fewer package tourists', marrakech: 'Very busy, mass tourism', winner: 'fes', icon: Users },
  { category: 'Budget-Friendliness', fes: '15-25% cheaper across the board', marrakech: 'Higher prices, tourist premium', winner: 'fes', icon: DollarSign },
  { category: 'Food Reputation', fes: 'Morocco\'s culinary capital', marrakech: 'Best street food scene', winner: 'tie', icon: Utensils },
  { category: 'Nightlife', fes: 'Very limited, conservative', marrakech: 'Rooftop bars, clubs, lounges', winner: 'marrakech', icon: Music },
  { category: 'Artisan Crafts', fes: 'Tanneries, ceramics, brass, textiles', marrakech: 'Carpets, lanterns, argan oil, fashion', winner: 'tie', icon: Palette },
  { category: 'Day Trip Options', fes: 'Meknes, Volubilis, Ifrane, Middle Atlas', marrakech: 'Atlas Mountains, Essaouira, Ouzoud Falls', winner: 'marrakech', icon: Compass },
  { category: 'Riad Quality', fes: 'More affordable, larger courtyards', marrakech: 'More luxurious, designer interiors', winner: 'tie', icon: Building },
  { category: 'Getting Lost Factor', fes: '9,000+ alleyways, GPS fails regularly', marrakech: 'Easier to navigate, wider streets', winner: 'tie', icon: Globe },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  {
    tier: 'Budget',
    icon: Compass,
    fes: {
      daily: 'From 300 MAD',
      accommodation: 'From 100 MAD (guesthouse or hostel)',
      food: 'From 80 MAD (street food, local restaurants)',
      transport: 'From 20 MAD (walking + occasional petit taxi)',
      activities: 'From 100 MAD (medina exploration, free mosques)',
    },
    marrakech: {
      daily: 'From 400 MAD',
      accommodation: 'From 150 MAD (hostel or budget riad)',
      food: 'From 100 MAD (Jemaa el-Fnaa stalls, cafes)',
      transport: 'From 30 MAD (walking + petit taxis)',
      activities: 'From 120 MAD (gardens, palaces, souks)',
    },
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    fes: {
      daily: 'From 700 MAD',
      accommodation: 'From 400 MAD (charming riad)',
      food: 'From 150 MAD (restaurants, cooking class)',
      transport: 'From 50 MAD (taxis, occasional tour)',
      activities: 'From 100 MAD (guided tours, museums)',
    },
    marrakech: {
      daily: 'From 900 MAD',
      accommodation: 'From 600 MAD (boutique riad)',
      food: 'From 150 MAD (restaurants, rooftop dining)',
      transport: 'From 50 MAD (taxis, calèche rides)',
      activities: 'From 100 MAD (palaces, gardens, hammams)',
    },
  },
  {
    tier: 'Luxury',
    icon: Crown,
    fes: {
      daily: 'From 2,500 MAD',
      accommodation: 'From 1,800 MAD (palace riad or 5-star)',
      food: 'From 400 MAD (fine dining, private chef)',
      transport: 'From 100 MAD (private driver)',
      activities: 'From 200 MAD (private guides, artisan workshops)',
    },
    marrakech: {
      daily: 'From 3,500 MAD',
      accommodation: 'From 2,500 MAD (luxury riad or La Mamounia)',
      food: 'From 500 MAD (fine dining, celebrity restaurants)',
      transport: 'From 200 MAD (private driver, transfers)',
      activities: 'From 300 MAD (hot air balloons, private tours)',
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT EACH CITY DOES BETTER
   ═══════════════════════════════════════════════════════════════ */

const fesWins = [
  {
    title: 'Authentic Medina Experience',
    icon: MapPin,
    description:
      'Fes el-Bali is the world\'s largest car-free urban area with over 9,000 alleyways. Genuinely medieval: donkeys carry goods, artisans work as they have for centuries, and GPS fails in the narrow lanes.',
  },
  {
    title: 'Culinary Capital',
    icon: Utensils,
    description:
      'Morocco\'s gastronomic heart. Fes invented pastilla, perfected the tagine, and maintains Andalusian culinary traditions from the 13th century. Cooking classes from 300 MAD.',
  },
  {
    title: 'Intellectual & Spiritual Heritage',
    icon: GraduationCap,
    description:
      'Home to Al-Qarawiyyin, the world\'s oldest university (859 AD). Over 300 mosques, hundreds of fountains, and dozens of historic madrasas make Fes Morocco\'s spiritual center.',
  },
  {
    title: 'Traditional Craftsmanship',
    icon: Palette,
    description:
      'Chouara tanneries operating since the 11th century. Morocco\'s finest ceramics, hand-embroidered textiles, and brass copperwork. Visit artisan workshops to watch centuries-old techniques.',
  },
  {
    title: 'Better Value',
    icon: DollarSign,
    description:
      '15-25% cheaper than Marrakech. Riads from 400 MAD vs from 600 MAD. Restaurant meals from 50 MAD vs from 80 MAD. Fewer tourists means less price inflation.',
  },
  {
    title: 'Fewer Tourist Crowds',
    icon: ShieldCheck,
    description:
      'Marrakech receives 3-4 times more tourists. In Fes you explore without crowds, interactions feel genuine, and touts are less aggressive.',
  },
];

const marrakechWins = [
  {
    title: 'Jemaa el-Fnaa',
    icon: Star,
    description:
      'Nothing else like it in the world. This UNESCO square transforms nightly into a carnival of food stalls, musicians, acrobats, and storytellers. Morocco\'s beating heart for a thousand years.',
  },
  {
    title: 'International Access',
    icon: Plane,
    description:
      'Menara Airport (RAK) receives direct flights from 50+ cities including budget airlines. Fes-Saiss has far fewer connections, making Marrakech the easier starting point.',
  },
  {
    title: 'Day Trip Variety',
    icon: Mountain,
    description:
      'Atlas Mountains in 45 minutes, Essaouira coast in 2.5 hours, Ouzoud Falls in 2 hours, Ouarzazate in 4 hours. More diverse and dramatic options than from Fes. Atlas excursions from 350 MAD.',
  },
  {
    title: 'Nightlife & Entertainment',
    icon: Music,
    description:
      'Morocco\'s best nightlife: rooftop bars with Atlas views, nightclubs, live music, and lounges. Fes is conservative with virtually no nightlife beyond hotel bars.',
  },
  {
    title: 'Luxury Scene',
    icon: Crown,
    description:
      'La Mamounia, Royal Mansour, designer riads, celebrity chef restaurants, and boutique shopping in Gueliz. Marrakech is Morocco\'s glamour capital.',
  },
  {
    title: 'More Accessible for First-Timers',
    icon: Users,
    description:
      'Wider medina streets, more English, better signage, more tourist infrastructure. Marrakech eases you in; Fes throws you in at the deep end.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const fesShoppingItems = [
  { item: 'Leather goods (Chouara tannery)', price: 'From 150 MAD' },
  { item: 'Blue-and-white Fassi ceramics', price: 'From 40 MAD' },
  { item: 'Zellige mosaic tiles', price: 'From 80 MAD' },
  { item: 'Brass and copper lanterns', price: 'From 120 MAD' },
  { item: 'Hand-embroidered textiles', price: 'From 200 MAD' },
  { item: 'Traditional babouche slippers', price: 'From 60 MAD' },
];

const marrakechShoppingItems = [
  { item: 'Berber carpets and kilims', price: 'From 500 MAD' },
  { item: 'Argan oil products', price: 'From 80 MAD' },
  { item: 'Metal and glass lanterns', price: 'From 100 MAD' },
  { item: 'Spice blends and saffron', price: 'From 30 MAD' },
  { item: 'Berber silver jewelry', price: 'From 100 MAD' },
  { item: 'Cactus silk cushions', price: 'From 150 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    from: 'Fes',
    trips: [
      { destination: 'Meknes', time: '1 hr train', cost: 'From 25 MAD', highlights: 'Imperial city, Bab Mansour gate, Heri es-Souani' },
      { destination: 'Volubilis', time: '1.5 hrs car', cost: 'From 70 MAD', highlights: 'Best Roman ruins in Morocco, mosaics, triumphal arch' },
      { destination: 'Ifrane', time: '1 hr car', cost: 'From 200 MAD', highlights: 'Cedar forests, Barbary macaques, "Switzerland of Morocco"' },
      { destination: 'Moulay Idriss', time: '1 hr car', cost: 'From 50 MAD', highlights: 'Holy pilgrimage town, panoramic hillside views' },
    ],
  },
  {
    from: 'Marrakech',
    trips: [
      { destination: 'Atlas Mountains', time: '1.5 hrs car', cost: 'From 350 MAD', highlights: 'Berber villages, Toubkal base, valley hikes, waterfalls' },
      { destination: 'Essaouira', time: '2.5 hrs car', cost: 'From 80 MAD', highlights: 'Coastal fortified town, seafood, Atlantic winds' },
      { destination: 'Ouzoud Falls', time: '2.5 hrs car', cost: 'From 300 MAD', highlights: '110m waterfalls, Barbary macaques, boat rides' },
      { destination: 'Ourika Valley', time: '45 min car', cost: 'From 200 MAD', highlights: 'Atlas foothills, Berber markets, Setti Fatma waterfalls' },
      { destination: 'Ait Benhaddou', time: '3.5 hrs car', cost: 'From 400 MAD', highlights: 'UNESCO kasbah, Game of Thrones filming location' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVELER TYPE RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const travelerTypes = [
  { type: 'First-Timer', recommendation: 'Marrakech', icon: Globe, reason: 'Better flights, easier navigation, more tourist infrastructure. Jemaa el-Fnaa is quintessential Morocco.' },
  { type: 'Foodie', recommendation: 'Fes', icon: Utensils, reason: 'Morocco\'s culinary capital. Pastilla, refined tagines, Andalusian recipes. Cooking classes from 300 MAD.' },
  { type: 'History Lover', recommendation: 'Fes', icon: Landmark, reason: 'World\'s oldest university, medieval medina, 300+ mosques, and unchanged artisan workshops.' },
  { type: 'Budget Traveler', recommendation: 'Fes', icon: DollarSign, reason: '15-25% cheaper. Riads from 400 MAD, full meals from 30 MAD, fewer tourist-inflated prices.' },
  { type: 'Luxury Traveler', recommendation: 'Marrakech', icon: Crown, reason: 'La Mamounia, Royal Mansour, celebrity chefs, designer boutiques, hot air balloons.' },
  { type: 'Families', recommendation: 'Marrakech', icon: Users, reason: 'Wider streets, Majorelle Garden, camel rides, calèche rides, and the Jemaa el-Fnaa spectacle.' },
  { type: 'Photographer', recommendation: 'Fes', icon: Camera, reason: 'Tanneries, carved doorways, light-streaked alleys, blue ceramics, fewer tourists in frame.' },
  { type: 'Shopaholic', recommendation: 'Both', icon: ShoppingBag, reason: 'Fes for leather, ceramics, brass. Marrakech for carpets, argan oil, lanterns, boutiques.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMBINED ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const combinedItinerary = [
  { day: 'Days 1-2', location: 'Arrive Marrakech', icon: Plane, highlights: 'Settle into your riad, explore Jemaa el-Fnaa at night, visit Bahia Palace and Ben Youssef Madrasa, enjoy a rooftop dinner' },
  { day: 'Day 3', location: 'Marrakech Souks & Gardens', icon: ShoppingBag, highlights: 'Morning in the souks, Majorelle Garden afternoon, traditional hammam experience, sunset from a rooftop terrace' },
  { day: 'Day 4', location: 'Atlas Mountains Day Trip', icon: Mountain, highlights: 'Drive to Imlil, hike through Berber villages, lunch with a local family, return to Marrakech by evening' },
  { day: 'Day 5', location: 'Travel to Fes', icon: Train, highlights: 'Morning train via Casablanca (7 hours) or domestic flight (1 hour from 500 MAD). Arrive and settle into your Fes riad' },
  { day: 'Days 6-7', location: 'Fes Medina', icon: MapPin, highlights: 'Guided medina tour, Chouara tanneries, Al-Qarawiyyin area, Bou Inania Madrasa, cooking class, ceramics workshop visit' },
  { day: 'Day 8', location: 'Meknes & Volubilis Day Trip', icon: Landmark, highlights: 'Roman ruins at Volubilis, imperial Meknes, Bab Mansour gate, wine tasting in the Meknes region' },
  { day: 'Day 9', location: 'Departure from Fes', icon: Plane, highlights: 'Final medina morning, pick up last souvenirs from the artisan quarters, fly out from Fes-Saiss airport' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Should I visit Fes or Marrakech first?',
    answer:
      'Most travelers start in Marrakech because it has better international flights and is an easier introduction to Morocco. Wider medina streets, more English spoken, and more tourist infrastructure. Visit Fes second for a deeper, more authentic experience once acclimatized.',
  },
  {
    question: 'Which city has the better medina?',
    answer:
      'Fes el-Bali is the world\'s largest car-free urban area with 9,000+ alleyways (UNESCO since 1981). It feels authentically medieval. Marrakech\'s medina is more accessible with Jemaa el-Fnaa. Fes wins on scale and authenticity; Marrakech on accessibility and atmosphere.',
  },
  {
    question: 'Is Fes or Marrakech cheaper?',
    answer:
      'Fes is 15-25% cheaper. Mid-range riads from 400 MAD vs from 600 MAD in Marrakech. Restaurant meals from 50 MAD vs from 80 MAD. Street food from 20 MAD. Fewer tourists keeps prices lower. Seasonal pricing can change during peak periods.',
  },
  {
    question: 'Which city has better food?',
    answer:
      'Fes is Morocco\'s culinary capital: pastilla, refined tagines, and Andalusian traditions from the 13th century. Marrakech has the better street food scene at Jemaa el-Fnaa and more international restaurants. Serious foodies choose Fes; atmosphere lovers choose Marrakech.',
  },
  {
    question: 'How do I travel between Fes and Marrakech?',
    answer:
      'Train: 7 hours via Casablanca, from 200 MAD. Bus (CTM/Supratours): 8-9 hours, from 150 MAD. Flight: 1 hour, from 500 MAD. The overnight train saves an accommodation night. Book trains at oncf.ma.',
  },
  {
    question: 'Can I visit both in one week?',
    answer:
      'Yes, but it is rushed. Split 3 days in one city, 2 in the other, with one travel day. For a relaxed pace, allow 10-14 days including day trips to Atlas Mountains, Essaouira, Meknes, and Volubilis.',
  },
  {
    question: 'Which is better for shopping?',
    answer:
      'Fes for leather (Chouara tanneries), ceramics, zellige, brass, and textiles from artisan workshops. Marrakech for Berber carpets, argan oil, lanterns, and designer boutiques. Both require haggling.',
  },
  {
    question: 'Which is better for families?',
    answer:
      'Marrakech. More open spaces (Jemaa el-Fnaa, Majorelle Garden), wider streets for strollers, camel rides, calèche rides, and family-friendly restaurants. Fes\'s steep narrow alleys are harder with young children.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function FesVsMarrakechPage() {
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
            backgroundImage: 'url(/images/hero-fes-medina.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Fes vs Marrakech</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            City Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Fes vs Marrakech:
            <br className="hidden md:block" /> The Great Morocco Debate
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Two imperial cities, two UNESCO medinas, two completely different experiences.
            The honest comparison to help you decide which of Morocco&apos;s greatest cities
            deserves your time in 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Two Imperial Cities, One Impossible Choice
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Every Morocco trip faces the same question: Fes or Marrakech? Both have ancient
                medinas, stunning riads, world-class food, and sensory richness that overwhelms in
                the best possible way. But they are fundamentally different cities.
              </p>
              <p>
                Fes is Morocco&apos;s spiritual and intellectual capital: the world&apos;s oldest
                university, a medieval medina, and the finest culinary tradition in North Africa.
                Marrakech is the entertainment capital: Jemaa el-Fnaa, glamorous nightlife, and
                the irresistible mix of tradition with modern luxury. This guide compares them
                across every dimension that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── At-a-Glance Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            At-a-Glance Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How Fes and Marrakech compare across 14 key categories that matter most to travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices in MAD reflect 2026 mid-season rates. Seasonal pricing can change.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Fes</div>
                <div className="p-3 px-4">Marrakech</div>
                <div className="p-3 px-4 text-center">Edge</div>
              </div>
              {comparisonTable.map((row, i) => {
                const RowIcon = row.icon;
                return (
                  <div
                    key={row.category}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <RowIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 hidden md:block" />
                      {row.category}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'fes' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.fes}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'marrakech' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.marrakech}
                    </div>
                    <div className="p-3 px-4 text-center">
                      {row.winner === 'fes' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                          <CheckCircle className="w-3.5 h-3.5" /> Fes
                        </span>
                      )}
                      {row.winner === 'marrakech' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
                          <CircleDot className="w-3.5 h-3.5" /> Marrakech
                        </span>
                      )}
                      {row.winner === 'tie' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)]">
                          <Scale className="w-3.5 h-3.5" /> Tie
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── History & Culture ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            History &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both are imperial cities with deep roots, but the cultural DNA is strikingly different.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Fes: The Spiritual &amp; Intellectual Capital
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Founded in 789 AD, Fes was Morocco&apos;s capital for centuries. Home to Al-Qarawiyyin,
                the world&apos;s oldest continuously operating university (859 AD). Andalusian refugees
                brought refined arts, architecture, and culinary traditions. With 300+ mosques, dozens
                of madrasas, and the largest intact medieval city on Earth, Fes is where Morocco&apos;s
                identity was forged.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Al-Qarawiyyin University (859 AD)', 'Bou Inania Madrasa', 'Andalusian heritage', 'Chouara tanneries', 'Religious scholarship', '300+ mosques'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Marrakech: The Entertainment &amp; Tourism Capital
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Founded in 1070 AD by the Almoravids, Marrakech has always been a city of spectacle.
                The Koutoubia Mosque, Bahia Palace, and Saadian Tombs showcase centuries of ambition.
                Jemaa el-Fnaa is a UNESCO masterpiece of oral tradition transforming nightly into a
                carnival. From the Almoravids to today&apos;s jet set, Marrakech has always attracted
                outsiders, making it Morocco&apos;s most cosmopolitan city.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Jemaa el-Fnaa (UNESCO)', 'Koutoubia Mosque', 'Bahia Palace', 'Saadian Tombs', 'Majorelle Garden', 'French colonial Gueliz'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Medina Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Medina Showdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both have UNESCO-listed medinas, but the experiences could not be more different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Fes el-Bali Medina
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  'World\'s largest car-free urban area with 9,000+ alleyways',
                  'UNESCO since 1981. Genuinely medieval: donkeys carry all goods',
                  'GPS fails regularly. A guide is essential for first visits',
                  '300+ mosques, Chouara tanneries operating since 11th century',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Marrakech Medina
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  'Centered on iconic Jemaa el-Fnaa square (UNESCO)',
                  'Wider arteries, more signage, easier self-guided exploration',
                  'Bahia Palace, Ben Youssef Madrasa, organized trade souks',
                  'Motorbikes add chaos. More tourist infrastructure overall',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CircleDot className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Medina Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Fes wins for sheer scale, authenticity, and the feeling of stepping back in time.
              Marrakech wins for accessibility, atmosphere, and the unbeatable experience of Jemaa
              el-Fnaa. If you want to feel genuinely lost in a medieval labyrinth, choose Fes. If
              you want a more manageable medina with the world&apos;s best open-air entertainment,
              choose Marrakech.
            </p>
          </div>
        </div>
      </section>

      {/* ── Food & Dining ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a food destination, and both cities deliver. But the culinary personalities are distinct.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fassi Cuisine', icon: Award,
                intro: 'Morocco\'s culinary capital. Refined Andalusian flavors. Where haute cuisine was born.',
                dishes: [
                  { dish: 'Pastilla', price: 'From 40 MAD', desc: 'Sweet-savory pigeon pie, invented in Fes' },
                  { dish: 'Fassi Tagine', price: 'From 45 MAD', desc: 'Preserved lemons and olives' },
                  { dish: 'Rfissa', price: 'From 35 MAD', desc: 'Shredded msemen, lentils, chicken' },
                  { dish: 'Harira', price: 'From 8 MAD', desc: 'Tomato-lentil soup' },
                  { dish: 'Cooking Class', price: 'From 300 MAD', desc: 'Learn Fassi recipes hands-on' },
                ],
              },
              {
                title: 'Marrakchi Cuisine', icon: Coffee,
                intro: 'Street food paradise. Jemaa el-Fnaa is the world\'s largest open-air restaurant.',
                dishes: [
                  { dish: 'Tanjia', price: 'From 50 MAD', desc: 'Marrakech\'s signature slow-cooked pot' },
                  { dish: 'Jemaa el-Fnaa Stalls', price: 'From 30 MAD', desc: 'Grilled meats, snails, fresh juice' },
                  { dish: 'Mechoui', price: 'From 80 MAD', desc: 'Slow-roasted lamb, Mechoui Alley' },
                  { dish: 'Orange Juice', price: 'From 5 MAD', desc: 'Fresh-squeezed on the square' },
                  { dish: 'Food Tour', price: 'From 350 MAD', desc: 'Guided culinary medina walk' },
                ],
              },
            ].map((cuisine) => {
              const CuisineIcon = cuisine.icon;
              return (
                <div key={cuisine.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CuisineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{cuisine.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{cuisine.intro}</p>
                  <div className="space-y-2">
                    {cuisine.dishes.map((item) => (
                      <div key={item.dish} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                        <div><span className="text-sm font-medium text-[var(--text-primary)]">{item.dish}</span><p className="text-xs text-[var(--text-muted)]">{item.desc}</p></div>
                        <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Food Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Fes wins for serious foodies who want refined, authentic Moroccan haute cuisine and
              unique dishes not found elsewhere. Marrakech wins for street food atmosphere, variety,
              and the theatrical experience of eating at Jemaa el-Fnaa. Both cities offer excellent
              cooking classes. Seasonal pricing can change restaurant costs during peak periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riads &amp; Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The riad experience is a highlight of both cities. Here is how they compare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                <Building className="w-5 h-5 inline mr-1" /> Riads in Fes
              </h3>
              <div className="space-y-3">
                {[
                  'Larger courtyards, more authentic centuries-old architecture',
                  'Budget from 100 MAD | Mid-range from 400 MAD | Luxury from 1,800 MAD',
                  'Traditional feel: less modern renovation, more genuine character',
                  'Have your riad send a guide to meet you (finding it alone is hard)',
                  'Rooftop terraces with medina and Atlas Mountain views',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                <Building className="w-5 h-5 inline mr-1" /> Riads in Marrakech
              </h3>
              <div className="space-y-3">
                {[
                  'Designer-renovated with contemporary touches and Instagram-ready pools',
                  'Budget from 150 MAD | Mid-range from 600 MAD | Luxury from 2,500 MAD',
                  'Many owned by European expats with modern bathrooms and AC',
                  'Easier to find with better-signed medina entrances',
                  'Rooftop terraces with iconic Koutoubia Mosque views',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CircleDot className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both cities are shopping paradises, but each excels at different crafts and experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'What to Buy in Fes', items: fesShoppingItems, note: 'Visit artisan workshops and watch craftspeople. Prices are lower with fewer tourists.' },
              { title: 'What to Buy in Marrakech', items: marrakechShoppingItems, note: 'More curated boutiques in Gueliz. Better for contemporary design alongside traditional crafts.' },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((product) => (
                    <div key={product.item} className="flex items-center justify-between text-sm">
                      <span className="text-[var(--text-secondary)]">{product.item}</span>
                      <span className="text-[var(--color-accent)] font-semibold shrink-0 ml-2">{product.price}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[var(--text-muted)]"><Sparkles className="w-3 h-3 inline mr-1" />{section.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trip Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both cities serve as excellent bases for exploring beyond. Marrakech has a slight edge in variety.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dayTrips.map((section) => (
              <div key={section.from} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">From {section.from}</h3>
                <div className="space-y-3">
                  {section.trips.map((trip) => (
                    <div key={trip.destination} className="flex items-start justify-between gap-2 text-sm">
                      <div>
                        <span className="font-medium text-[var(--text-primary)]">{trip.destination}</span>
                        <span className="text-xs text-[var(--text-muted)] ml-1">({trip.time})</span>
                        <p className="text-xs text-[var(--text-secondary)]">{trip.highlights}</p>
                      </div>
                      <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0">{trip.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There & Around ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting There &amp; Around
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to reach each city and how to travel between them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Getting to Fes
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2"><Plane className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Airport (FEZ):</strong> Limited international flights (Ryanair, Air Arabia, RAM). Domestic from 400 MAD.</span></div>
                <div className="flex items-start gap-2"><Train className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Train from Casablanca:</strong> 3.5-4 hours, from 120 MAD. From Tangier: 4-5 hours, from 200 MAD.</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Within Fes:</strong> Walk the medina. Petit taxis to Ville Nouvelle from 10 MAD.</span></div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Getting to Marrakech
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2"><Plane className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Airport (RAK):</strong> Major international hub. Direct flights from 50+ cities. Budget airlines available.</span></div>
                <div className="flex items-start gap-2"><Train className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Train from Casablanca:</strong> 3 hours, from 100 MAD. Frequent daily departures.</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Within Marrakech:</strong> Walk the medina. Petit taxis from 10 MAD. Calèche from 80 MAD/hr.</span></div>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Train className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Traveling Between Fes &amp; Marrakech (530 km)
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Train: 7 hours via Casablanca, from 200 MAD. Bus: 8-9 hours direct (CTM/Supratours), from 150 MAD.
              Flight: 1 hour, from 500 MAD. The overnight train saves an accommodation night. Seasonal pricing
              can change flight costs. Book trains at oncf.ma.
            </p>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost Comparison by Travel Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you will actually spend per day in each city. Fes is consistently cheaper.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tier.tier}</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Fes', data: tier.fes, color: 'text-[var(--color-accent)]' },
                      { label: 'Marrakech', data: tier.marrakech, color: 'text-[var(--text-muted)]' },
                    ].map((city) => (
                      <div key={city.label} className="p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-semibold ${city.color}`}>{city.label}</span>
                          <span className="text-base font-bold text-[var(--text-primary)]">{city.data.daily}<span className="text-xs font-normal text-[var(--text-muted)]">/day</span></span>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] space-y-0.5">
                          <p>Stay: {city.data.accommodation} | Food: {city.data.food}</p>
                          <p>Transport: {city.data.transport} | Activities: {city.data.activities}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in MAD. Seasonal pricing can change during peak periods (Easter, Christmas, summer).
          </p>
        </div>
      </section>

      {/* ── Choose Fes If... / Choose Marrakech If... ── */}
      {[
        { title: 'Choose Fes If...', icon: CheckCircle, items: fesWins, bg: '', pattern: '' },
        { title: 'Choose Marrakech If...', icon: CircleDot, items: marrakechWins, bg: 'bg-[var(--surface-muted)]', pattern: 'moroccan-pattern' },
      ].map((section) => {
        const SectionIcon = section.icon;
        return (
          <section key={section.title} className={`py-16 md:py-20 ${section.bg} ${section.pattern}`}>
            <div className="container-morocco">
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
                <SectionIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.title} className="card-moroccan p-5">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                        <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Which to Visit by Traveler Type ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which City by Traveler Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A quick guide based on what matters most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelerTypes.map((tt) => {
              const TypeIcon = tt.icon;
              return (
                <div key={tt.type} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TypeIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{tt.type}</span>
                    <span className={`text-xs font-semibold ml-2 ${tt.recommendation === 'Fes' ? 'text-[var(--color-accent)]' : tt.recommendation === 'Marrakech' ? 'text-[var(--color-gold)]' : 'text-[var(--text-muted)]'}`}>{tt.recommendation}</span>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{tt.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Combined Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Not Both? The 9-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best answer is to visit both. Here is a suggested itinerary combining Marrakech and Fes.
          </p>

          <div className="space-y-4">
            {combinedItinerary.map((stop) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.day} className="card-moroccan p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <StopIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stop.location}</h3>
                      <span className="text-xs text-[var(--text-muted)] shrink-0 ml-2">{stop.day}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{stop.highlights}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Combined Trip Budget
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A 9-day Marrakech and Fes itinerary at mid-range comfort costs approximately from 7,500 MAD
              total including the inter-city train or flight. Budget travelers can do it from 4,000 MAD;
              luxury travelers should expect from 25,000 MAD. Seasonal pricing can change these estimates
              during peak periods. Book accommodation and inter-city transport in advance for best rates.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Verdict ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Final Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our honest assessment after comparing every dimension.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p><strong className="text-[var(--text-primary)]">Fes wins on authenticity, food, and value.</strong> The Morocco before mass tourism: a living medieval city, food refined over centuries, and 15-25% lower prices.</p>
              <p><strong className="text-[var(--text-primary)]">Marrakech wins on accessibility, spectacle, and variety.</strong> The easiest introduction, best nightlife, most dramatic day trips, and the unforgettable Jemaa el-Fnaa.</p>
              <p><strong className="text-[var(--text-primary)]">The best answer?</strong> Visit both. Start in Marrakech for the spectacle, travel to Fes for the depth. Together they tell Morocco&apos;s full story: the city that performs for the world, and the city that keeps its soul to itself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
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
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/marrakech', icon: Star, title: 'Marrakech Complete Guide', desc: 'Everything about the Red City: neighborhoods, sights, riads, and local tips.' },
              { href: '/fes-guide', icon: BookOpen, title: 'Fes Complete Guide', desc: 'Navigate the world\'s oldest medina: tanneries, madrasas, and Fassi cuisine.' },
              { href: '/things-to-do-marrakech', icon: Camera, title: 'Things to Do in Marrakech', desc: 'From Jemaa el-Fnaa to Majorelle Garden: the complete activity guide.' },
              { href: '/things-to-do-fes', icon: Landmark, title: 'Things to Do in Fes', desc: 'Tanneries, madrasas, ceramics workshops, and the best food in Morocco.' },
              { href: '/marrakech-to-fes', icon: Train, title: 'Marrakech to Fes Route', desc: 'Trains, buses, flights, and road trips between Morocco\'s greatest cities.' },
              { href: '/morocco-vs-egypt', icon: Globe, title: 'Morocco vs Egypt', desc: 'Comparing North Africa\'s two greatest destinations head-to-head.' },
            ].map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link key={link.href} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <LinkIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
