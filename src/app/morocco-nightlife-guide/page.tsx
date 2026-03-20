import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Music,
  Wine,
  Moon,
  Utensils,
  Building,
  Landmark,
  Globe,
  Eye,
  Phone,
  CreditCard,
  Compass,
  Sun,
  CloudMoon,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs, Rooftop Lounges & Night Markets',
  description:
    'Complete guide to Morocco nightlife. Marrakech clubs like Theatro and Pacha, Casablanca rooftop bars, Tangier jazz lounges, night markets at Jemaa el-Fnaa. Alcohol laws, prices from 40 MAD, safety tips, and dress codes across every major city.',
  keywords: [
    'morocco nightlife',
    'marrakech nightlife',
    'morocco bars clubs',
    'best nightlife morocco',
    'casablanca nightlife',
    'tangier nightlife',
    'marrakech clubs',
    'rooftop bars morocco',
    'jemaa el fnaa night',
    'morocco alcohol laws',
    'morocco night markets',
    'pacha marrakech',
    'theatro marrakech',
    'ricks cafe casablanca',
    'morocco drinking age',
    'morocco bar prices',
    'agadir nightlife',
    'essaouira bars',
    'fes nightlife',
    'morocco party scene',
  ],
  openGraph: {
    title: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs, Rooftop Lounges & Night Markets',
    description:
      'From rooftop cocktails in Marrakech to night markets in Fes. Complete guide to Morocco after dark with real prices, venue names, and safety advice.',
    url: `${BASE_URL}/morocco-nightlife-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Marrakech nightlife scene with illuminated Jemaa el-Fnaa square, food stalls, and crowds at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Nightlife Guide 2026 | Bars, Clubs & Night Markets',
    description:
      'Marrakech clubs, Casablanca rooftop bars, Tangier jazz lounges, and Jemaa el-Fnaa after dark. Real prices, alcohol laws, and safety tips.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-nightlife-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-nightlife-guide`,
  name: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs, Rooftop Lounges & Night Markets',
  description:
    'Complete guide to Morocco nightlife covering Marrakech, Casablanca, Tangier, Fes, Essaouira, and Agadir. Alcohol laws, prices, safety tips, and the best venues after dark.',
  url: `${BASE_URL}/morocco-nightlife-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-nightlife-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Nightlife Guide', item: `${BASE_URL}/morocco-nightlife-guide` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is alcohol legal in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco is a Muslim-majority country, but alcohol is legal for non-Muslims and is widely available in licensed bars, hotels, restaurants, and supermarkets like Carrefour and Acima. The legal drinking age is 18. Drinking in public spaces is illegal and strictly enforced.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do clubs close in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Marrakech clubs stay open until 4:00 AM on weekends and 3:00 AM on weeknights. Rooftop bars and hotel lounges typically close between midnight and 1:00 AM. Jemaa el-Fnaa food stalls wind down around midnight, though some juice stands stay open later.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a night out cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A beer at a local bar costs from 30 MAD. Cocktails at upscale rooftop bars run from 80 to 150 MAD. Club entry ranges from 100 to 300 MAD and usually includes one drink. A full night out including dinner, drinks, and a club can cost from 500 to 1,500 MAD per person depending on the venue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco nightlife safe for women?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hotel bars, upscale rooftop lounges, and well-known clubs in Marrakech, Casablanca, and Tangier are generally safe for women. Stick to licensed establishments, travel in groups, and use ride-hailing apps like inDrive or Careem rather than hailing taxis late at night. Avoid unlicensed bars in quiet areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to nightclubs in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upscale clubs like Theatro and Pacha in Marrakech enforce a smart-casual dress code. Men should wear closed-toe shoes, long trousers, and a collared shirt. Women can wear dresses, heels, and evening wear. Flip-flops, shorts, and sportswear will get you turned away at the door.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy alcohol in Moroccan supermarkets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Major chains like Carrefour, Acima, and Marjane have alcohol sections, usually in a separate room with its own entrance. Wine starts from 40 MAD per bottle, and local beer (Casablanca, Flag Speciale) costs from 12 MAD per can. Alcohol sections close during Ramadan and some religious holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there night markets in Morocco besides Jemaa el-Fnaa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jemaa el-Fnaa in Marrakech is the most famous, but several other cities have active night food scenes. Casablanca has street food along La Corniche. Tangier has the Petit Socco area. Fes has Rcif Square. Meknes has Place el-Hedim. Essaouira has the port area with grilled fish stalls that stay open past 10:00 PM.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MARRAKECH VENUES
   ═══════════════════════════════════════════════════════════════ */

const marrakechVenues = [
  {
    name: 'Theatro Marrakech',
    type: 'Nightclub',
    icon: Music,
    location: 'Es Saadi Gardens & Resort, Avenue el Qadissia',
    hours: '11:30 PM - 4:00 AM',
    price: 'Entry from 200 MAD (includes one drink)',
    description:
      'The biggest club in North Africa. A converted theater with a retractable roof, LED walls that run floor to ceiling, and a capacity of over 1,000. International DJs spin house, techno, and R&B on Friday and Saturday nights. The door policy is strict: collared shirts for men, no sneakers.',
    highlights: ['Retractable roof', 'International DJ roster', 'VIP bottle service from 3,000 MAD', 'LED production'],
  },
  {
    name: 'Pacha Marrakech',
    type: 'Nightclub',
    icon: Music,
    location: 'Zone Hoteliare de l\'Agdal, Avenue Mohammed VI',
    hours: '11:00 PM - 4:00 AM (Thu-Sat)',
    price: 'Entry from 150 MAD',
    description:
      'Part of the global Pacha franchise. The Marrakech outpost features a main room, outdoor terrace with a pool, and a Moroccan-themed VIP section. Thursday is ladies\' night with free entry for women. Saturday brings the biggest crowds and often features guest DJs from Ibiza.',
    highlights: ['Pool terrace', 'Ladies\' night Thursday', 'Global DJ bookings', 'Moroccan VIP lounge'],
  },
  {
    name: 'Comptoir Darna',
    type: 'Restaurant & Lounge',
    icon: Utensils,
    location: 'Avenue Echouhada, Hivernage',
    hours: '7:30 PM - 1:00 AM',
    price: 'Cocktails from 90 MAD, dinner from 250 MAD',
    description:
      'Half restaurant, half cabaret. Dinner starts at 8:00 PM with Moroccan-French fusion cuisine, then at 10:00 PM belly dancers take the stage. By 11:00 PM the tables are pushed back and the dance floor opens. The atmosphere turns electric without ever crossing into full nightclub territory.',
    highlights: ['Live belly dance shows', 'Moroccan-French fusion menu', 'Central Hivernage location', 'No cover charge'],
  },
  {
    name: 'Barometre Marrakech',
    type: 'Rooftop Bar',
    icon: Moon,
    location: 'Rue Moulay Ali, Gueliz',
    hours: '6:00 PM - 1:00 AM',
    price: 'Cocktails from 80 MAD, beer from 40 MAD',
    description:
      'A low-key rooftop bar in Gueliz popular with Marrakech\'s young professional crowd. The terrace overlooks Avenue Mohammed V, and the cocktail list leans toward gin-based drinks with local herbs. No dress code, no pretension, just good drinks at reasonable prices.',
    highlights: ['Relaxed dress code', 'Affordable cocktails', 'Local crowd', 'Rooftop terrace views'],
  },
  {
    name: 'Le Salama Rooftop',
    type: 'Rooftop Restaurant & Bar',
    icon: Star,
    location: '40 Rue des Banques, Medina (near Jemaa el-Fnaa)',
    hours: '12:00 PM - midnight',
    price: 'Cocktails from 100 MAD, hookah from 120 MAD',
    description:
      'Three floors of dining that climb toward one of the best rooftop views in the medina. The top terrace looks directly over Jemaa el-Fnaa. Sip a Moroccan sunset cocktail (orange blossom, vodka, fresh orange juice) while watching the square transform from market to open-air theater below.',
    highlights: ['Direct Jemaa el-Fnaa views', 'Hookah lounge', 'Sunset cocktails', 'Three-floor venue'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CASABLANCA VENUES
   ═══════════════════════════════════════════════════════════════ */

const casablancaVenues = [
  {
    name: 'Sky 28',
    type: 'Rooftop Bar',
    icon: Building,
    location: 'Kenzi Tower Hotel, 28th Floor, Twin Center',
    hours: '6:00 PM - 1:00 AM',
    price: 'Cocktails from 120 MAD',
    description:
      'Casablanca\'s highest bar sits on the 28th floor of the Kenzi Tower, one of the Twin Center skyscrapers. The panoramic views span from the Hassan II Mosque to the Atlantic. The cocktail menu changes seasonally, and the Friday after-work crowd makes it the city\'s most social rooftop.',
    highlights: ['28th-floor panoramic views', 'Hassan II Mosque vista', 'Seasonal cocktails', 'Friday after-work scene'],
  },
  {
    name: 'Rick\'s Cafe',
    type: 'Restaurant & Piano Bar',
    icon: Music,
    location: '248 Boulevard Sour Jdid, Ancienne Medina',
    hours: '12:00 PM - 1:00 AM',
    price: 'Cocktails from 100 MAD, dinner from 200 MAD',
    description:
      'Built by an American expat in 2004 to replicate the bar from the 1942 film Casablanca. The interior is a faithful reproduction with a piano, arched doorways, and ceiling fans. A pianist plays nightly. The food is solid Moroccan-international, but people come for the atmosphere and the chance to say "of all the gin joints."',
    highlights: ['Film-inspired interior', 'Nightly live piano', 'Courtyard dining', 'Iconic photo opportunity'],
  },
  {
    name: 'La Bodega',
    type: 'Tapas Bar & Live Music',
    icon: Music,
    location: '129 Rue Allal Ben Abdellah',
    hours: '7:00 PM - 2:00 AM',
    price: 'Tapas from 50 MAD, sangria from 80 MAD',
    description:
      'A Spanish-themed tapas bar that packs out every weekend with live flamenco and Latin music. The sangria pitchers are generous, the tapas are authentic, and the crowd is a mix of Moroccan professionals and European expats. The dance floor opens up after 11:00 PM.',
    highlights: ['Live flamenco music', 'Spanish tapas menu', 'Sangria pitchers', 'Weekend dancing'],
  },
  {
    name: 'Le Cabestan',
    type: 'Seaside Restaurant & Bar',
    icon: Compass,
    location: 'La Corniche, 90 Boulevard de la Corniche',
    hours: '12:00 PM - midnight',
    price: 'Cocktails from 110 MAD, seafood mains from 180 MAD',
    description:
      'Perched on the rocks at the end of La Corniche with waves crashing below. The Atlantic stretches to the horizon from every table. The kitchen focuses on fresh seafood, and the bar mixes strong classics. Sunset here ranks among the best drinks-with-a-view experiences in all of Morocco.',
    highlights: ['Oceanfront cliff setting', 'Fresh seafood kitchen', 'Sunset views', 'Upscale crowd'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TANGIER VENUES
   ═══════════════════════════════════════════════════════════════ */

const tangierVenues = [
  {
    name: 'Cafe Hafa',
    type: 'Legendary Cafe',
    icon: Landmark,
    location: 'Avenue Hafa, Marshan District',
    hours: '8:00 AM - 10:00 PM',
    price: 'Mint tea from 15 MAD',
    description:
      'Open since 1921 and unchanged since. Terraced down a cliff overlooking the Strait of Gibraltar, Cafe Hafa has hosted Paul Bowles, the Rolling Stones, and William Burroughs. No alcohol served, just mint tea and the best view in North Africa. Go at sunset when Spain appears across the water, just 14 kilometers away.',
    highlights: ['Open since 1921', 'Strait of Gibraltar views', 'Literary history', 'Terraced cliff seating'],
  },
  {
    name: 'El Morocco Club',
    type: 'Cocktail Bar & Restaurant',
    icon: Wine,
    location: 'Rue el Mourabitine, Kasbah',
    hours: '7:00 PM - 1:00 AM',
    price: 'Cocktails from 90 MAD, dinner from 200 MAD',
    description:
      'Set inside a restored kasbah house with hand-carved stucco ceilings and original tilework. The bartender makes a signature cocktail with fig liqueur, bourbon, and orange blossom water. The rooftop terrace has a direct view of the port and the old medina. This is Tangier at its most stylish.',
    highlights: ['Restored kasbah setting', 'Signature fig cocktail', 'Port and medina views', 'Art exhibitions'],
  },
  {
    name: 'Le Nabab',
    type: 'Bar & Lounge',
    icon: Moon,
    location: 'Hotel El Minzah, 85 Rue de la Liberte',
    hours: '5:00 PM - midnight',
    price: 'Beer from 45 MAD, cocktails from 80 MAD',
    description:
      'The bar inside Hotel El Minzah, Tangier\'s grandest colonial-era hotel. Dark wood, leather chairs, and a long mahogany bar give it the feel of a 1940s gentleman\'s club. The bartenders pour generous measures. It draws an older, well-dressed crowd, and conversation is the main entertainment.',
    highlights: ['Colonial-era atmosphere', 'Hotel El Minzah setting', 'Generous pours', 'Sophisticated crowd'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ALCOHOL PRICES
   ═══════════════════════════════════════════════════════════════ */

const alcoholPrices = [
  { item: 'Local beer (Casablanca, Flag Speciale) - bar', price: 'From 30 MAD', icon: Wine },
  { item: 'Local beer - supermarket', price: 'From 12 MAD per can', icon: DollarSign },
  { item: 'Imported beer (Heineken, Stella) - bar', price: 'From 50 MAD', icon: Wine },
  { item: 'Moroccan wine (Medaillon, Boulaouane) - bar glass', price: 'From 50 MAD', icon: Wine },
  { item: 'Moroccan wine - supermarket bottle', price: 'From 40 MAD', icon: DollarSign },
  { item: 'Premium wine (Chateau Roslane, Volubilia) - bottle', price: 'From 150 MAD', icon: Star },
  { item: 'Cocktail at a rooftop bar', price: 'From 80 MAD', icon: Moon },
  { item: 'Cocktail at a luxury hotel bar', price: 'From 120 MAD', icon: Building },
  { item: 'Spirits (vodka, gin, whisky) - single measure', price: 'From 60 MAD', icon: Wine },
  { item: 'Nightclub entry (includes one drink)', price: 'From 100 MAD', icon: Music },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    title: 'Stick to Licensed Venues',
    icon: ShieldCheck,
    description:
      'Licensed bars and clubs in hotel districts (Hivernage in Marrakech, Maarif in Casablanca) are regulated and secure. Avoid unlicensed basement bars in residential neighborhoods, especially those without visible signage.',
  },
  {
    title: 'Use Ride-Hailing Apps',
    icon: Phone,
    description:
      'Use inDrive, Careem, or Roby rather than hailing taxis late at night. Meter fraud and overcharging spike after midnight. Set the destination in the app before getting in.',
  },
  {
    title: 'Watch Your Drinks',
    icon: Eye,
    description:
      'Keep your drink in sight at all times, just as you would anywhere in the world. Accept drinks only from bartenders. This applies to men and women equally.',
  },
  {
    title: 'Carry Cash and a Card',
    icon: CreditCard,
    description:
      'Many bars accept cards, but smaller venues, taxis, and late-night food stalls are cash-only. ATMs (GABs) are plentiful in Gueliz, Maarif, and other modern districts. Withdraw before heading out.',
  },
  {
    title: 'Travel in Groups',
    icon: Users,
    description:
      'Solo travelers should join a group for club visits. Hostels like Equity Point (Marrakech) and Hostel Waka Waka (Marrakech) organize bar crawls. Casablanca and Tangier have expat meetup groups.',
  },
  {
    title: 'Know the Law',
    icon: AlertTriangle,
    description:
      'Public intoxication is illegal and can result in a fine or overnight detention. Do not drink in public spaces, parks, or on the street. Keep your drinking to licensed venues. During Ramadan, be extra discreet.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: NIGHT MARKETS
   ═══════════════════════════════════════════════════════════════ */

const nightMarkets = [
  {
    name: 'Jemaa el-Fnaa',
    city: 'Marrakech',
    hours: 'Sunset to midnight',
    description:
      'Over 100 food stalls set up every evening, turning the UNESCO-listed square into the largest open-air restaurant in Africa. Stall 32 and Stall 14 are local favorites for lamb brochettes (from 20 MAD). Snail soup stalls cluster on the east side (from 5 MAD a bowl). Freshly squeezed orange juice stands line the perimeter (from 4 MAD). Musicians, storytellers, and henna artists fill the gaps.',
  },
  {
    name: 'La Corniche Street Food',
    city: 'Casablanca',
    hours: '8:00 PM - 2:00 AM on weekends',
    description:
      'The beachfront promenade comes alive after dark with grilled fish vendors, shawarma stands, and crepe carts. Locals park along the boulevard and eat from their cars. Grilled sardines cost from 15 MAD for a plate. The atmosphere is casual, social, and very Casablancan.',
  },
  {
    name: 'Place el-Hedim',
    city: 'Meknes',
    hours: '7:00 PM - 11:00 PM',
    description:
      'The less-crowded cousin of Jemaa el-Fnaa. Food stalls set up in the square each evening with harira soup (from 5 MAD), msemen flatbreads (from 3 MAD), and merguez sandwiches (from 15 MAD). The adjacent Bab Mansour gate is beautifully lit at night.',
  },
  {
    name: 'Rcif Square',
    city: 'Fes',
    hours: '7:00 PM - 11:00 PM',
    description:
      'The commercial heart of the Fes medina stays busy after dark. Street food vendors sell bocadillos (Moroccan baguette sandwiches, from 15 MAD), fried fish (from 20 MAD), and chebakia pastries. The narrow alleys leading from Rcif are atmospheric and well-lit.',
  },
  {
    name: 'Port Fish Grills',
    city: 'Essaouira',
    hours: '6:00 PM - 10:00 PM',
    description:
      'The row of fish grill stalls near the port entrance serves the freshest seafood in Morocco. Pick your fish, prawns, calamari, or lobster from the ice displays and they grill it to order. A mixed seafood plate costs from 60 MAD. Eat on communal benches with Atlantic views.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/morocco-food-guide',
    icon: Utensils,
    title: 'Morocco Food Guide',
    description: 'The definitive guide to Moroccan cuisine, from street food to fine dining across every city.',
  },
  {
    href: '/safety',
    icon: ShieldCheck,
    title: 'Morocco Safety Guide',
    description: 'Stay safe in Morocco with practical advice on scams, transport, solo travel, and emergency contacts.',
  },
  {
    href: '/morocco-budget-travel',
    icon: DollarSign,
    title: 'Budget Travel Morocco',
    description: 'How to experience Morocco on a budget, including accommodation, food, and transport costs.',
  },
  {
    href: '/marrakech',
    icon: MapPin,
    title: 'Marrakech City Guide',
    description: 'Everything you need to know about Marrakech, from the medina to Gueliz and beyond.',
  },
  {
    href: '/casablanca',
    icon: Building,
    title: 'Casablanca City Guide',
    description: 'Morocco\'s largest city, from the Hassan II Mosque to the Art Deco downtown and La Corniche.',
  },
  {
    href: '/tangier',
    icon: Globe,
    title: 'Tangier City Guide',
    description: 'Where Africa meets Europe. Tangier\'s medina, kasbah, beaches, and cultural revival.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoNightlifeGuide() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-marrakech.webp"
          alt="Jemaa el-Fnaa square in Marrakech at night, illuminated food stalls and crowds under a dark sky"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 container-morocco">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-sm text-white/80">
              <li>
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="w-3.5 h-3.5" />
                  Home
                </Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <li className="text-white font-medium">Morocco Nightlife Guide</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white max-w-4xl leading-tight">
            Morocco Nightlife Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl font-[family-name:var(--font-heading)]">
            Bars, clubs, rooftop lounges, and night markets across Marrakech, Casablanca, Tangier, Fes, and the coast
          </p>
        </div>
      </section>

      {/* ── Introduction: Morocco's Night Scene ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco After Dark
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Nightlife in a Muslim-majority country operates differently than in Europe or the Americas, but it does exist, and in some cities it thrives.
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="card-moroccan p-6 mb-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Morocco sits at a crossroads. Islam shapes daily life, yet French colonial influence left behind a wine industry, bar culture, and a tolerance for nightlife that few other North African countries share. Alcohol is legal, licensed venues operate openly, and cities like Marrakech and Casablanca have genuine club scenes that run until 4:00 AM.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                The reality is two Moroccos at night. One is the ancient night market, the food stalls of Jemaa el-Fnaa, the rooftop riad dinner with mint tea and Gnawa music. The other is bottle service at Theatro, craft cocktails 28 floors above Casablanca, and DJ sets that run until dawn. Both are authentic. Both are worth experiencing.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A few ground rules before heading out. Public intoxication is a criminal offense. Drinking in the street, on beaches, or in parks is illegal and enforced. Keep your drinking to licensed venues. During Ramadan, many bars and clubs close entirely or operate behind closed doors with reduced hours. Moroccan ID holders may face more scrutiny entering bars than foreign tourists; some venues card at the door.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card-moroccan p-4 text-center">
                <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Peak Hours</p>
                <p className="text-xs text-[var(--text-secondary)]">Bars: 8 PM - 1 AM. Clubs: 11:30 PM - 4 AM. Night markets: sunset to midnight.</p>
              </div>
              <div className="card-moroccan p-4 text-center">
                <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Budget Range</p>
                <p className="text-xs text-[var(--text-secondary)]">Beer from 30 MAD. Cocktails from 80 MAD. Club entry from 100 MAD with one drink.</p>
              </div>
              <div className="card-moroccan p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Legal Age</p>
                <p className="text-xs text-[var(--text-secondary)]">18 years old. Carry your passport or a copy. Public intoxication is a criminal offense.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marrakech Nightlife ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s undisputed nightlife capital. From the medieval spectacle of Jemaa el-Fnaa to megaclubs with international DJs.
          </p>

          <div className="card-moroccan p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Star className="w-5 h-5 inline text-[var(--color-gold)] mr-1" />
              Jemaa el-Fnaa After Dark
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              The square transforms at sunset. By 6:30 PM, over 100 food stalls assemble in rows, each numbered and marked with hand-painted signs. Smoke rises from charcoal grills. Hawkers grab your arm and recite menus. It is chaos, and it is magnificent.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Between the food stalls: Gnawa musicians in tasseled caps play metal castanets (krakeb) and three-stringed bass guembris. Halaqa circles form around storytellers performing in Darija. Henna artists paint intricate designs for from 50 MAD. The energy peaks between 8:00 PM and 10:00 PM, then gradually fades by midnight. No alcohol, no cover charge, no reservation needed. Just show up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {marrakechVenues.map((venue) => {
              const VenueIcon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <VenueIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{venue.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {venue.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {venue.hours}
                    </span>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {venue.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{venue.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {venue.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Casablanca Nightlife ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Casablanca Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s economic capital has the country&apos;s most diverse bar scene, from Art Deco hotel lounges to La Corniche beach clubs.
          </p>

          <div className="card-moroccan p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              Casablanca feels more like a European city at night than anywhere else in Morocco. The Maarif district is packed with wine bars and gastropubs. La Corniche stretches along the Atlantic with rooftop clubs and seaside restaurants. The Gauthier neighborhood has quiet cocktail bars favored by the city&apos;s business crowd.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Friday nights are the peak. The after-work crowd fills rooftop bars by 7:00 PM, then migrates to restaurants by 9:00 PM and clubs by midnight. Saturday is club night. Sunday is dead. The city runs on a work-hard, play-hard rhythm that Marrakech, with its tourist-driven schedule, simply does not match.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {casablancaVenues.map((venue) => {
              const VenueIcon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <VenueIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{venue.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {venue.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {venue.hours}
                    </span>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {venue.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{venue.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {venue.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tangier Nightlife ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tangier Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A literary, artistic nightlife. Tangier&apos;s after-dark scene favors cocktail bars in restored kasbah houses over megaclubs.
          </p>

          <div className="card-moroccan p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              Tangier was the original bohemian city of Morocco. In the 1950s and 60s, its International Zone status attracted writers, artists, and spies. That legacy shapes the nightlife today: intimate bars in restored houses, hotel lounges with piano music, and rooftop terraces overlooking the Strait of Gibraltar.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              The new Tangier City Center mall has brought mainstream bars and restaurants to the ville nouvelle, but the real charm remains in the medina and kasbah. Petit Socco, the tiny square at the heart of the old city, buzzes with cafe life until late. The surrounding streets hide a handful of discreet bars that locals know by word of mouth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tangierVenues.map((venue) => {
              const VenueIcon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <VenueIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{venue.type}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {venue.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {venue.hours}
                    </span>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {venue.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{venue.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {venue.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Essaouira & Agadir ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essaouira &amp; Agadir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Coastal nightlife runs on surf culture, sunset sessions, and fresh seafood. Quieter than the big cities, but with its own character.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Compass className="w-5 h-5 inline text-[var(--color-accent)] mr-1" />
                Essaouira
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Essaouira shuts down early by Moroccan standards. Most restaurants close by 10:30 PM, and the medina gets quiet by 11:00 PM. The exceptions: Taros Cafe on Place Moulay Hassan has a rooftop terrace with wine, beer, and live Gnawa music on weekends (cocktails from 70 MAD). The beach bars south of the medina attract the surf crowd for sunset drinks.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                During the Gnaoua World Music Festival (June), the city transforms completely. Stages set up on the beach and in the medina. Performances run past midnight. Temporary bars open. The population triples. Book accommodation months in advance.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Taros Cafe: rooftop live music, cocktails from 70 MAD
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Ocean Vagabond: beach bar, sunset sessions, surf crowd
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Port fish grills: open until 10:00 PM, from 60 MAD
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Sun className="w-5 h-5 inline text-[var(--color-accent)] mr-1" />
                Agadir
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Agadir has the most openly European nightlife in Morocco. Rebuilt entirely after the 1960 earthquake, it has no ancient medina and few cultural pretensions. The beach strip along Boulevard du 20 Aout is lined with bars, clubs, and restaurants that cater heavily to package tourists from France and Germany.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                So Lounge at the Sofitel is the upscale option (cocktails from 100 MAD). Papagayo and Zanzi Bar on the marina draw younger crowds. For something more local, head to the Talborjt neighborhood where Moroccan-run bars serve beer from 25 MAD with football on TV. Agadir is also the base for Taghazout, the surf village 19 km north, where beachfront cafes serve sunset drinks.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  So Lounge (Sofitel): upscale cocktails from 100 MAD
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Marina bars: Papagayo, Zanzi Bar, younger crowd
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Taghazout surf village: beachfront sunset drinks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fes After Dark
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Fes is Morocco&apos;s most conservative major city. The nightlife here is quiet, cultural, and centered around rooftop dining and riad evenings.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Do not come to Fes expecting clubs. The medina largely shuts down after 9:00 PM, and the ville nouvelle has only a handful of hotel bars. What Fes offers instead is Morocco&apos;s most atmospheric evening dining. Rooftop terraces at riads like Riad Fes, Palais Faraj, and Dar Roumana serve multi-course Fassi dinners with views over the illuminated medina while the call to prayer echoes from dozens of minarets simultaneously.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Several riads arrange traditional music evenings with Andalusi orchestras or Gnawa musicians. Palais Faraj has a bar with panoramic terrace views and serves wine and beer (glasses from 60 MAD). Hotel Sahrai in the hills above the medina has a rooftop pool bar with the best sunset views in Fes (cocktails from 90 MAD).
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              For street life after dark, head to Rcif Square and Bab Boujloud. Food vendors, juice stalls, and informal cafes stay open until 11:00 PM. The blue-tiled Bab Boujloud gate is dramatically lit at night and worth seeing after dinner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-moroccan p-4">
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Rooftop Dining
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Riad Fes, Palais Faraj, Dar Roumana. Multi-course Fassi dinners from 350 MAD. Reserve 24 hours ahead.
              </p>
            </div>
            <div className="card-moroccan p-4">
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Hotel Bars
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Hotel Sahrai pool bar, Palais Faraj terrace bar. Wine from 60 MAD, cocktails from 90 MAD. Open to non-guests.
              </p>
            </div>
            <div className="card-moroccan p-4">
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Cultural Evenings
              </h4>
              <p className="text-xs text-[var(--text-secondary)]">
                Andalusi music at Dar Adiyel. Gnawa nights at various riads. Fes Festival of World Sacred Music in June.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Night Markets & Street Food After Dark ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Night Markets &amp; Street Food After Dark
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s original nightlife. No cover charge, no dress code, no reservations. Just some of the best street food on the planet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nightMarkets.map((market) => (
              <div key={market.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {market.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3 h-3" />
                    {market.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {market.hours}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alcohol Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alcohol in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            What is available, where to buy it, how much it costs, and the laws you need to know.
          </p>

          <div className="card-moroccan p-6 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              The Legal Framework
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              Alcohol is legal in Morocco for non-Muslims. The legal drinking age is 18. Licensed bars, restaurants, hotels, and clubs can serve alcohol. Major supermarkets sell beer, wine, and spirits in designated sections (often a separate room with its own entrance). Public consumption is illegal: no drinking in streets, parks, beaches, or cars.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
              Morocco produces its own wine (the Meknes region) and beer (Societe des Brasseries du Maroc, founded 1919). Local brands include Casablanca Beer, Flag Speciale, and Stork. Moroccan wines like Chateau Roslane, Volubilia, and Medaillon are decent and affordable. Imported spirits are available but heavily taxed, making a bottle of Johnnie Walker Black Label cost from 500 MAD in a shop.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              During Ramadan, most bars and clubs close or restrict service. Some hotel bars continue serving alcohol to non-Muslim foreign guests, but call ahead to confirm. Supermarket alcohol sections close for the month. Seasonal pricing may vary.
            </p>
          </div>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-center mb-6">
            Price Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alcoholPrices.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ItemIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[var(--text-primary)] font-medium">{item.item}</p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-accent)] whitespace-nowrap">{item.price}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-[var(--text-muted)] text-center mt-4">
            Prices are approximate and may vary by venue, city, and season. Hotel bars and luxury venues charge a premium.
          </p>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is generally safe at night in tourist areas, but common sense and local awareness go a long way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-8 max-w-4xl mx-auto border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Drugs Are Strictly Illegal
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Despite Morocco being a major cannabis (kif) producer, possession and use are illegal and carry prison sentences. Police sometimes target tourists near clubs. If someone offers you drugs outside a venue, decline and walk away. Undercover officers operate around popular nightlife areas in Marrakech, Tangier, and Chefchaouen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {jsonLdFaq.mainEntity.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
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
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
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
            Plan Your Morocco Night Out
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            From sunset rooftop cocktails to midnight street food runs, Morocco offers a night scene unlike anywhere else. Explore our city guides for detailed venue maps and local recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/casablanca"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
            >
              <Building className="w-4 h-4" />
              Explore Casablanca
            </Link>
            <Link
              href="/tangier"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
              Explore Tangier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
