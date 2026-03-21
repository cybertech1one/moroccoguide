import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Music,
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
  Wine,
  Moon,
  GlassWater,
  Shirt,
  Calendar,
  MessageCircleQuestion,
  Globe,
  Heart,
  Volume2,
  Mic2,
  Landmark,
  Utensils,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-nightlife-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Nightlife Guide 2026 | Clubs, Bars, Live Music & Cultural Evenings',
  description:
    'Complete guide to Morocco nightlife in 2026. Marrakech rooftop bars and clubs, Casablanca lounges, Tangier jazz bars, Essaouira Gnawa music, Agadir beach bars, dress codes, alcohol laws, cover charges, safety tips, and best nights to go out.',
  keywords: [
    'Morocco nightlife guide',
    'Marrakech nightlife',
    'Marrakech clubs',
    'Marrakech rooftop bars',
    'Casablanca nightlife',
    'Casablanca clubs',
    'Tangier nightlife',
    'Tangier bars',
    'Essaouira live music',
    'Agadir beach bars',
    'Jemaa el-Fnaa at night',
    'Morocco bars and clubs',
    'Morocco alcohol rules',
    'Morocco dress code nightlife',
    'Morocco nightlife safety',
    'Gnawa music Morocco',
    'Morocco live music venues',
    'Morocco nightlife prices 2026',
  ],
  openGraph: {
    title: 'Morocco Nightlife Guide 2026 | Clubs, Bars, Live Music & Cultural Evenings',
    description:
      'Where to go after dark in Morocco. City-by-city guide to clubs, rooftop bars, live music venues, cultural evenings, dress codes, alcohol availability, cover charges, and safety tips for a memorable night out.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-jemaa-elfnaa-night.webp`,
        width: 1200,
        height: 630,
        alt: 'Jemaa el-Fnaa square in Marrakech illuminated at night with food stalls and crowds',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Nightlife Guide 2026 | Clubs, Bars & Live Music',
    description:
      'City-by-city guide to Morocco nightlife: Marrakech clubs, Casablanca lounges, Tangier jazz, Essaouira Gnawa, Agadir beach bars, dress codes, alcohol laws, and safety tips.',
    images: [`${BASE_URL}/images/hero-jemaa-elfnaa-night.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Can you drink alcohol in Morocco?',
    a: 'Yes. Morocco is a Muslim-majority country but alcohol is legal and widely available in licensed hotels, restaurants, bars, clubs, and supermarkets (Carrefour, Acima, some Marjane locations). You cannot drink alcohol on the street, in public parks, or near mosques. During Ramadan, some bars and clubs close or restrict service, but international hotels continue serving alcohol to guests.',
  },
  {
    q: 'What is the legal drinking age in Morocco?',
    a: 'The legal drinking age is 18. Bars and clubs rarely check ID for adults who clearly appear over 18, but high-end venues and hotel bars may ask. Carry your passport or a copy of it.',
  },
  {
    q: 'What should I wear to a nightclub in Marrakech?',
    a: 'Smart casual is the minimum at upscale clubs and rooftop bars. Men should wear collared shirts or fitted T-shirts with clean trousers or dark jeans and closed shoes. Avoid shorts, sandals, and sportswear. Women have more flexibility but most dress elegantly. Some venues enforce a strict dress code and will turn away guests in athletic wear or flip-flops.',
  },
  {
    q: 'Is Marrakech nightlife safe for solo female travelers?',
    a: 'Yes, with standard precautions. Stick to well-known venues, arrange return transport before going out (hotel taxi or a ride app), and avoid walking alone in poorly lit medina alleys after midnight. Hotel rooftop bars and established clubs in Gueliz and Hivernage are the safest options. Many solo female travelers report positive experiences at venues like Le Comptoir Darna and Sky Bar.',
  },
  {
    q: 'How much does a night out cost in Morocco?',
    a: 'Budgets vary widely. A beer at a bar costs from 30-60 MAD. Cocktails run from 80-150 MAD at upscale venues. Club cover charges range from 100-300 MAD, sometimes including a drink. Dinner at a restaurant with live music costs from 200-500 MAD per person. A full evening at a high-end club with drinks can reach from 500-1,500 MAD per person. Seasonal pricing can change during holidays and peak tourist periods.',
  },
  {
    q: 'What time do clubs and bars close in Morocco?',
    a: 'Most bars close between midnight and 2 AM. Nightclubs stay open until 3-4 AM on weekends and sometimes later during holiday periods. Hotel bars may serve until the last guest leaves. Rooftop bars typically close around midnight or 1 AM. During Ramadan, hours shift significantly and some venues close entirely for the month.',
  },
  {
    q: 'Are there any areas to avoid at night in Morocco?',
    a: 'Avoid dimly lit medina alleyways after midnight, deserted industrial zones, and unlicensed bars in backstreets. Stick to well-lit areas with other people around. In Marrakech, the Gueliz and Hivernage districts are the safest for nightlife. In Casablanca, the Corniche and Maarif neighborhoods are well-patrolled. Use a taxi or ride app rather than walking long distances after dark.',
  },
  {
    q: 'What is the best night of the week to go out in Morocco?',
    a: 'Thursday and Friday nights are the busiest and most energetic. Wednesday is solid at popular venues without the weekend crowds. Saturday can be quieter than Friday at some clubs. During summer, every night from Wednesday through Saturday is lively in tourist cities. International DJ events and themed parties are most common on Friday and Saturday nights.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Nightlife Guide 2026',
  description:
    'Complete guide to Morocco nightlife covering clubs, rooftop bars, live music venues, cultural evenings, dress codes, alcohol availability, cover charges, and safety tips across Marrakech, Casablanca, Tangier, Essaouira, and Agadir.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-jemaa-elfnaa-night.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Nightlife Guide', item: PAGE_URL },
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
   DATA: CITY NIGHTLIFE GUIDES
   ================================================================ */

const cityNightlife = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-jemaa-elfnaa-night.webp',
    imageAlt: 'Jemaa el-Fnaa square in Marrakech lit up at night with food stalls and performers',
    intro: 'Morocco\'s undisputed nightlife capital. From rooftop cocktails above the medina to underground clubs in the Hivernage district, Marrakech caters to every taste. Jemaa el-Fnaa itself transforms into a nightly spectacle of storytellers, musicians, and food vendors that rivals any club experience.',
    venues: [
      { name: 'Le Comptoir Darna', type: 'Restaurant & Bar', area: 'Hivernage', price: 'From 150 MAD cocktails', note: 'Belly dancing performances from 9:30 PM, Moroccan-French cuisine, consistently ranked among the city\'s top nights out' },
      { name: 'Theatro Marrakech', type: 'Nightclub', area: 'Es Saadi Gardens', price: 'From 200 MAD cover', note: 'Former theater converted into a multilevel club, international DJs on weekends, open Thursday-Saturday' },
      { name: 'Sky Bar (Renaissance Hotel)', type: 'Rooftop Bar', area: 'Hivernage', price: 'From 100 MAD cocktails', note: 'Panoramic views of the Atlas Mountains and Koutoubia Mosque, sunset sessions from 6 PM' },
      { name: 'Barometre', type: 'Cocktail Bar', area: 'Gueliz', price: 'From 80 MAD cocktails', note: 'Intimate craft cocktail bar with Moroccan-inspired mixology, strong local following' },
      { name: 'Jemaa el-Fnaa After Dark', type: 'Open-Air Cultural', area: 'Medina', price: 'Free to wander', note: 'Halqa (street performers), Gnawa musicians, henna artists, food stalls selling grilled meats, snail soup, and fresh orange juice from 4 MAD' },
      { name: 'L\'Envers', type: 'Bar & Terrace', area: 'Gueliz', price: 'From 70 MAD drinks', note: 'Art deco building, exposed brick interior, popular with expats and young Moroccans, live DJ sets on weekends' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    imageAlt: 'Casablanca city skyline at dusk with modern buildings and the Corniche coastline',
    intro: 'Morocco\'s commercial capital has the most cosmopolitan nightlife scene. The Corniche beachfront and Maarif district concentrate most venues. Casablanca clubs attract international DJs and stay open later than anywhere else in the country. The city\'s business crowd means weekday nights can be surprisingly lively.',
    venues: [
      { name: 'Rick\'s Cafe', type: 'Piano Bar & Restaurant', area: 'Old Medina', price: 'From 120 MAD cocktails', note: 'Inspired by the 1942 film, live jazz piano, Art Deco interiors, reservations required for dinner' },
      { name: 'Le Cabestan', type: 'Lounge & Restaurant', area: 'Corniche', price: 'From 130 MAD cocktails', note: 'Ocean-facing terrace with Atlantic waves crashing below, French-Moroccan menu, dress code enforced' },
      { name: 'Sky 28', type: 'Rooftop Lounge', area: 'Twin Center', price: 'From 100 MAD cocktails', note: '28th-floor panoramic views over the entire city, attracts Casablanca\'s business elite, strict smart-casual dress code' },
      { name: 'Maison B', type: 'Nightclub & Lounge', area: 'Maarif', price: 'From 150 MAD cover', note: 'House and electronic music, resident DJs, open Wednesday-Saturday, one of the most popular clubs in the city' },
      { name: 'La Bodega', type: 'Tapas Bar', area: 'Quartier Racine', price: 'From 60 MAD drinks', note: 'Spanish-inspired tapas and sangria, live music on Thursdays, relaxed atmosphere for an early evening' },
    ],
  },
  {
    city: 'Tangier',
    icon: Globe,
    image: '/images/hero-tangier-bay.webp',
    imageAlt: 'Tangier bay panorama with the medina and port visible at golden hour',
    intro: 'Tangier\'s nightlife carries the weight of its literary past. The city that hosted William Burroughs, Paul Bowles, and the Rolling Stones still attracts creative types. The scene is more intimate than Marrakech, centered around jazz bars, rooftop terraces overlooking the Strait of Gibraltar, and late-night cafes in the Kasbah.',
    venues: [
      { name: 'El Morocco Club', type: 'Cocktail Bar & Restaurant', area: 'Kasbah', price: 'From 90 MAD cocktails', note: 'Restored 1930s mansion, vintage decor, live jazz on weekends, terrace with Strait views' },
      { name: 'Le Salon Bleu', type: 'Rooftop Cafe & Bar', area: 'Kasbah', price: 'From 50 MAD drinks', note: 'Blue-washed terrace overlooking the port and sea, popular for sunset drinks and light bites' },
      { name: 'Cafe Hafa', type: 'Cliffside Cafe', area: 'Marshan', price: 'From 15 MAD mint tea', note: 'Where the Stones and Bowles drank tea on terraced cliffs above the sea, no alcohol but open until late' },
      { name: 'La Tangerina', type: 'Riad Rooftop Bar', area: 'Kasbah', price: 'From 80 MAD cocktails', note: 'Boutique riad with a public rooftop bar, intimate setting, 360-degree views, craft cocktails' },
      { name: 'Number One', type: 'Nightclub', area: 'City Center', price: 'From 100 MAD cover', note: 'Long-running Tangier club, mixed crowd of locals and visitors, busiest on Friday nights' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Music,
    image: '/images/hero-essaouira.webp',
    imageAlt: 'Essaouira medina and harbor with blue fishing boats and whitewashed buildings',
    intro: 'Essaouira\'s nightlife is defined by live music rather than clubs. This is the spiritual home of Gnawa music, and you can hear it performed authentically in small venues and open squares throughout the medina. The Gnaoua World Music Festival (June) draws tens of thousands. Outside the festival, the pace is mellow -- think acoustic sets, rooftop wine, and conversations stretching past midnight.',
    venues: [
      { name: 'Taros Cafe', type: 'Rooftop Bar & Live Music', area: 'Place Moulay Hassan', price: 'From 50 MAD drinks', note: 'The social hub of Essaouira nightlife, live Gnawa and jazz most evenings, rooftop views over the square and ocean' },
      { name: 'Gnawa Street Performances', type: 'Open-Air Music', area: 'Medina', price: 'Free (tip the musicians)', note: 'Spontaneous Gnawa groups play in Place Moulay Hassan and near Bab Sbaa most evenings after 8 PM' },
      { name: 'Le Patio', type: 'Wine Bar & Restaurant', area: 'Medina', price: 'From 60 MAD wine', note: 'Moroccan wines by the glass, courtyard setting, French-Moroccan tapas, relaxed and welcoming' },
      { name: 'Beach Bonfires & Drum Circles', type: 'Informal', area: 'Beach', price: 'Free', note: 'During summer and the Gnaoua Festival, informal drum circles and bonfires gather on the beach south of the medina' },
    ],
  },
  {
    city: 'Agadir',
    icon: GlassWater,
    image: '/images/hero-agadir.webp',
    imageAlt: 'Agadir beach promenade with palm trees and the Atlantic coast stretching into the distance',
    intro: 'Agadir is Morocco\'s most relaxed nightlife destination. Rebuilt after the 1960 earthquake as a modern resort city, it has a beach-bar culture unlike anywhere else in the country. The Corniche promenade and the marina area concentrate most of the action. The crowd is a mix of Moroccan vacationers, European package tourists, and surfers passing through.',
    venues: [
      { name: 'So Lounge (Sofitel)', type: 'Beach Club & Lounge', area: 'Baie des Palmiers', price: 'From 120 MAD cocktails', note: 'Pool parties, sunset sessions, international DJs on weekends, the most upscale option in Agadir' },
      { name: 'Papagayo', type: 'Nightclub', area: 'Secteur Touristique', price: 'From 100 MAD cover', note: 'The biggest club in Agadir, multiple dance floors, open until 4 AM on weekends' },
      { name: 'Jour et Nuit', type: 'Bar & Club', area: 'Corniche', price: 'From 60 MAD drinks', note: 'Casual bar that transitions to a dance floor after midnight, popular with a younger crowd' },
      { name: 'English Pub', type: 'Pub', area: 'Secteur Touristique', price: 'From 35 MAD beer', note: 'Low-key spot for watching football matches, pool tables, affordable drinks, expat favorite' },
    ],
  },
];

/* ================================================================
   DATA: DRESS CODE GUIDE
   ================================================================ */

const dressCodeRules = [
  { venue: 'High-End Clubs (Theatro, Maison B)', men: 'Collared shirt or blazer, tailored trousers, dress shoes', women: 'Cocktail dress, heels, or smart separates', rejected: 'Shorts, sandals, sportswear, ripped jeans' },
  { venue: 'Rooftop Bars & Hotel Lounges', men: 'Smart casual: clean shirt, dark jeans, loafers', women: 'Dress, jumpsuit, or elevated casual', rejected: 'Flip-flops, tank tops, beachwear' },
  { venue: 'Casual Bars & Pubs', men: 'Jeans, T-shirt, sneakers accepted', women: 'Casual but covered shoulders in some areas', rejected: 'Very few restrictions, but overly revealing outfits draw unwanted attention' },
  { venue: 'Agadir Beach Bars', men: 'Shorts and polo accepted during the day, smarter at night', women: 'Sundress or resort casual', rejected: 'Swimwear alone (cover up when ordering at the bar)' },
  { venue: 'Cultural Venues (Jemaa el-Fnaa, Gnawa Shows)', men: 'Comfortable clothing, modest and practical', women: 'Shoulders and knees covered is respectful', rejected: 'No specific dress code, but modesty is appreciated in the medina' },
];

/* ================================================================
   DATA: ALCOHOL AVAILABILITY
   ================================================================ */

const alcoholInfo = [
  { category: 'Licensed Hotels & Restaurants', icon: Building, availability: 'Widely available', details: 'International and Moroccan beers (Casablanca, Flag Speciale, Stork), Moroccan wines (Guerrouane, Medaillon, Volubilia), and full spirit menus. Most 4-star and 5-star hotels serve alcohol.' },
  { category: 'Nightclubs', icon: Music, availability: 'Full bar service', details: 'All licensed clubs serve a complete range. Expect to pay from 50 MAD for beer, from 100 MAD for cocktails, from 80 MAD for wine. Bottle service available at upscale clubs from 1,500 MAD.' },
  { category: 'Supermarkets', icon: Utensils, availability: 'Select locations', details: 'Carrefour, Acima, and some Marjane stores sell beer, wine, and spirits. Alcohol sections are often in a separate room with a separate checkout. Not available in all branches.' },
  { category: 'Medina & Traditional Areas', icon: Landmark, availability: 'Very limited', details: 'Most medina restaurants do not serve alcohol. Some upscale riads and restaurants within the medina hold licenses. Ask before ordering. Street-side cafes serve mint tea, coffee, and juice only.' },
  { category: 'During Ramadan', icon: Moon, availability: 'Restricted', details: 'Many bars and clubs close for the month. International hotels continue serving alcohol discreetly to non-Muslim guests, usually in indoor areas only. Supermarkets stop selling alcohol. Nightlife resumes after Eid al-Fitr.' },
];

/* ================================================================
   DATA: SAFETY TIPS
   ================================================================ */

const safetyTips = [
  { title: 'Arrange Transport in Advance', icon: ShieldCheck, text: 'Book a return taxi through your hotel or save a reliable taxi driver\'s number. Ride apps like inDrive and Careem work in major cities. Agree on the fare before getting in a non-metered taxi. From 30-80 MAD covers most in-city rides at night.' },
  { title: 'Watch Your Drinks', icon: AlertTriangle, text: 'Standard precaution worldwide: keep your drink in sight. Accept drinks only from bartenders. Avoid accepting open drinks from strangers. This applies equally in Morocco, Europe, or anywhere.' },
  { title: 'Carry Cash and a Copy of Your ID', icon: DollarSign, text: 'Many venues are cash-only, especially outside Marrakech and Casablanca. Carry a photocopy of your passport rather than the original. Keep a separate stash of from 200 MAD for a taxi home.' },
  { title: 'Stay in Well-Lit, Populated Areas', icon: Star, text: 'When walking between venues, stick to main streets. The Gueliz district (Marrakech), Corniche (Casablanca), and Kasbah area (Tangier) are well-lit and patrolled at night. Avoid shortcuts through medina alleys after midnight.' },
  { title: 'Know the Alcohol Laws', icon: Info, text: 'Drinking in public (streets, parks, beaches) is illegal and can result in fines or a night in custody. Consume alcohol only in licensed venues. Driving under the influence is treated severely with immediate license confiscation.' },
  { title: 'Travel in Groups When Possible', icon: Users, text: 'Solo nightlife is possible but groups offer safety in numbers. If traveling solo, inform your hotel where you are going and your expected return time. Many hostels and riads organize group nights out.' },
];

/* ================================================================
   DATA: BEST NIGHTS & SEASONAL CALENDAR
   ================================================================ */

const bestNights = [
  { night: 'Wednesday', vibe: 'Warm-up night', details: 'Popular venues start filling up. Good for a relaxed evening without the weekend crush. Ladies\' nights with discounted drinks at some venues.' },
  { night: 'Thursday', vibe: 'Peak local night', details: 'The biggest night for Moroccans. Clubs and bars reach full capacity. Live music and special performances are scheduled. Arrive before 11 PM to avoid long queues.' },
  { night: 'Friday', vibe: 'Tourist & local mix', details: 'International crowd peaks. Themed parties and guest DJs are common. Some venues have higher cover charges. Pre-booking tables is recommended at top venues.' },
  { night: 'Saturday', vibe: 'Strong but variable', details: 'Can be slightly quieter than Friday at some clubs. Rooftop bars and lounges remain packed. Good night for live music and cultural performances.' },
  { night: 'Sunday-Tuesday', vibe: 'Quiet', details: 'Most clubs are closed. Hotel bars and some restaurants with live music remain open. A good time for a low-key rooftop drink or a Jemaa el-Fnaa evening walk.' },
];

/* ================================================================
   DATA: PRICE GUIDE
   ================================================================ */

const priceGuide = [
  { item: 'Local beer (Casablanca, Flag)', price: 'From 30 MAD', where: 'Bars & pubs' },
  { item: 'Imported beer', price: 'From 50 MAD', where: 'Hotels & clubs' },
  { item: 'Glass of Moroccan wine', price: 'From 50 MAD', where: 'Restaurants & wine bars' },
  { item: 'Cocktail (standard)', price: 'From 80 MAD', where: 'Mid-range bars' },
  { item: 'Cocktail (premium/rooftop)', price: 'From 120 MAD', where: 'Rooftop bars & lounges' },
  { item: 'Bottle service (spirits)', price: 'From 1,500 MAD', where: 'Nightclubs' },
  { item: 'Club cover charge', price: 'From 100 MAD', where: 'Often includes 1 drink' },
  { item: 'Dinner with live entertainment', price: 'From 300 MAD per person', where: 'Le Comptoir Darna, Rick\'s Cafe' },
  { item: 'Shisha / hookah', price: 'From 60 MAD', where: 'Lounges & rooftop bars' },
  { item: 'Mint tea at Jemaa el-Fnaa', price: 'From 10 MAD', where: 'Terrace cafes' },
];

/* ================================================================
   DATA: CULTURAL CONSIDERATIONS
   ================================================================ */

const culturalConsiderations = [
  { title: 'Respect Ramadan', icon: Moon, text: 'During the holy month, nightlife changes significantly. Many bars and clubs close. Do not drink, eat, or smoke in public during daylight fasting hours. Evenings after iftar (the breaking of the fast) can be festive, with families filling the streets, but alcohol is off the table at most venues.' },
  { title: 'Public Displays of Affection', icon: Heart, text: 'Morocco is conservative about physical affection in public. Holding hands is generally fine, but kissing and more in public spaces -- including outside clubs -- attracts negative attention and can lead to confrontations. Keep intimacy for private spaces.' },
  { title: 'Photography Etiquette', icon: Info, text: 'Do not photograph people at bars or clubs without asking. Many Moroccans prefer not to be photographed in alcohol-serving venues. Performers at Jemaa el-Fnaa expect a small tip (from 10-20 MAD) if you take their photo.' },
  { title: 'Noise & Neighbors', icon: Volume2, text: 'If staying in a traditional riad in the medina, be mindful of noise when returning late. Medina walls are thin and residents wake early for the dawn call to prayer. Remove shoes, speak softly, and close doors gently.' },
  { title: 'Gender Dynamics', icon: Users, text: 'Some traditional bars cater primarily to men and may feel unwelcoming to women. These are not tourist-facing venues. Women travelers will feel most comfortable at hotel bars, established restaurants, upscale clubs, and venues in the Gueliz, Hivernage, and Corniche areas.' },
  { title: 'Tipping at Nightlife Venues', icon: DollarSign, text: 'Tip bartenders from 10-20 MAD per round. Tip live musicians from 20-50 MAD if you enjoy the performance. For table service at clubs, from 50-100 MAD for the waiter is standard. Doormen who arrange your taxi deserve from 10-20 MAD.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoNightlifeGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-jemaa-elfnaa-night.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Nightlife Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Moon className="w-4 h-4" />
            Nightlife &amp; Entertainment
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Nightlife Guide
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Marrakech rooftop bars overlooking the Koutoubia to Casablanca
            clubs open until dawn -- your city-by-city guide to after-dark Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            After Dark in a Country That Defies Expectations
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is a Muslim-majority country where alcohol flows in licensed venues, where
              world-class DJs spin in converted palaces, and where the most memorable night out
              might involve zero alcohol and a crowd of 10,000 people gathered around storytellers
              in a medieval square. The nightlife here does not fit a single template, and that is
              precisely what makes it worth exploring.
            </p>
            <p>
              Marrakech dominates the conversation, but each Moroccan city has its own rhythm after
              sunset. Casablanca stays up the latest and dresses the sharpest. Tangier carries the
              romantic weight of its Beat Generation past and rewards those who seek out small jazz
              bars in the Kasbah. Essaouira replaces bass drops with Gnawa trance rhythms played on
              iron castanets. Agadir offers the closest thing Morocco has to a Mediterranean beach-bar
              scene.
            </p>
            <p>
              This guide covers where to go, what to wear, how much to spend, and what cultural
              lines to respect. Whether you want a champagne-fueled club night or a mint tea on a
              moonlit terrace listening to a master Gnawa musician, Morocco delivers.
            </p>
          </div>
        </div>
      </section>

      {/* ── City-by-City Nightlife ── */}
      {cityNightlife.map((city) => {
        const CityIcon = city.icon;
        return (
          <section
            key={city.city}
            className={`py-16 md:py-20 ${city.city === 'Casablanca' || city.city === 'Essaouira' ? 'bg-[var(--surface-muted)]' : ''}`}
          >
            <div className="container-morocco">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CityIcon className="w-7 h-7 text-[var(--color-accent)]" />
                    <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {city.city} Nightlife
                    </h2>
                  </div>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    {city.intro}
                  </p>
                </div>
                <div className="relative h-64 lg:h-72 rounded-xl overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                    {city.city}, Morocco
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {city.venues.map((venue) => (
                  <div key={venue.name} className="card-moroccan p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-base">
                        {venue.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[#A0522D]/10 text-[#A0522D] font-medium">
                        <Mic2 className="w-3 h-3" />
                        {venue.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[#C4960C]/10 text-[#C4960C] font-medium">
                        <MapPin className="w-3 h-3" />
                        {venue.area}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                      {venue.note}
                    </p>
                    <p className="text-xs font-medium text-[var(--color-accent)]">
                      <DollarSign className="w-3 h-3 inline-block mr-1" />
                      {venue.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Dress Code Guide ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dress Code Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to wear depends entirely on where you are going. Here is the breakdown by venue type.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#A0522D]/20">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Venue Type</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Men</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Women</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Will Get You Turned Away</th>
                </tr>
              </thead>
              <tbody>
                {dressCodeRules.map((row) => (
                  <tr key={row.venue} className="border-b border-[var(--border-light)]">
                    <td className="py-3 px-4 font-medium text-[var(--text-primary)]">{row.venue}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.men}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.women}</td>
                    <td className="py-3 px-4 text-red-700/80 text-xs">{row.rejected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Alcohol Availability ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alcohol Availability in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco produces its own beer, wine, and spirits. Availability depends on venue type and timing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alcoholInfo.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ItemIcon className="w-6 h-6 text-[var(--color-accent)] shrink-0" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.category}
                    </h3>
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded bg-[#C4960C]/10 text-[#C4960C] text-xs font-medium mb-3">
                    {item.availability}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Typical prices across Moroccan nightlife venues. Seasonal pricing can change during peak periods and holidays.
          </p>

          <div className="card-moroccan overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#A0522D]/5 border-b border-[var(--border-light)]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where</th>
                </tr>
              </thead>
              <tbody>
                {priceGuide.map((row) => (
                  <tr key={row.item} className="border-b border-[var(--border-light)] last:border-b-0">
                    <td className="py-3 px-4 text-[var(--text-primary)] font-medium">{row.item}</td>
                    <td className="py-3 px-4 text-[var(--color-accent)] font-medium">{row.price}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Best Nights to Go Out ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Nights to Go Out
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing matters. Here is what to expect on each night of the week.
          </p>

          <div className="space-y-4">
            {bestNights.map((item) => (
              <div key={item.night} className="card-moroccan p-5 flex flex-col sm:flex-row gap-4">
                <div className="sm:w-36 shrink-0">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">
                    {item.night}
                  </h3>
                  <span className="text-xs text-[var(--color-accent)] font-medium">{item.vibe}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cultural Considerations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is tolerant of nightlife but conservative by Western standards. These guidelines help you enjoy the scene while showing respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalConsiderations.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife Safety Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is generally safe for nightlife, but standard precautions apply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <TipIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Live Music & Gnawa ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                Live Music &amp; Gnawa Traditions
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Morocco&apos;s live music scene is anchored by Gnawa, a spiritual musical tradition
                  rooted in sub-Saharan African heritage that UNESCO recognized as Intangible Cultural
                  Heritage in 2019. Gnawa performances feature the guembri (a three-stringed bass lute),
                  iron castanets (qraqeb), and hypnotic call-and-response chanting that can last for hours.
                </p>
                <p>
                  Essaouira is the heartland, but you can hear Gnawa music in Marrakech&apos;s Jemaa el-Fnaa,
                  at cultural festivals across the country, and in dedicated music venues. The annual
                  Gnaoua World Music Festival in Essaouira (typically June) is the premier event, drawing
                  international artists who collaborate with Gnawa masters for fusion performances.
                </p>
                <p>
                  Beyond Gnawa, Morocco has a growing contemporary music scene. Jazz is popular in Tangier
                  and Casablanca. Chaabi (popular folk music) fills wedding venues. Rai drifts over from
                  eastern Morocco and Algeria. And an emerging electronic and hip-hop scene is gaining
                  ground in Casablanca and Rabat.
                </p>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-xl overflow-hidden">
              <img
                src="/images/art-gnawa-music.webp"
                alt="Gnawa musicians performing with traditional guembri and qraqeb instruments in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Gnawa Musicians, Morocco
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { venue: 'Taros Cafe, Essaouira', genre: 'Gnawa & Jazz', nights: 'Most evenings', note: 'Rooftop with ocean views, the anchor of Essaouira nightlife' },
              { venue: 'Rick\'s Cafe, Casablanca', genre: 'Jazz Piano', nights: 'Nightly', note: 'Live pianist in a film-inspired Art Deco setting' },
              { venue: 'El Morocco Club, Tangier', genre: 'Jazz & World', nights: 'Weekends', note: 'Intimate Kasbah venue, guest musicians from around the Mediterranean' },
              { venue: 'Le Comptoir Darna, Marrakech', genre: 'Belly Dance & Moroccan', nights: 'Nightly from 9:30 PM', note: 'Dinner show format with traditional and fusion performances' },
            ].map((item) => (
              <div key={item.venue} className="card-moroccan p-4">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">
                  {item.venue}
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#A0522D]/10 text-[#A0522D] font-medium">{item.genre}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#C4960C]/10 text-[#C4960C] font-medium">{item.nights}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opening Hours Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Opening Hours &amp; Timing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco runs on a late schedule. Dinner starts at 8-9 PM, and nightlife does not peak until midnight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: 'Rooftop Bars & Hotel Lounges', hours: '6 PM - midnight / 1 AM', note: 'Best for sunset through early evening. Some hotel bars stay open for guests until the last order.' },
              { type: 'Restaurants with Entertainment', hours: '7:30 PM - midnight', note: 'Live music or performances typically start at 9-10 PM. Reservations recommended for weekends.' },
              { type: 'Casual Bars & Pubs', hours: '5 PM - midnight / 2 AM', note: 'Vary by city. Casablanca bars stay open latest. Agadir beach bars wind down earlier on weeknights.' },
              { type: 'Nightclubs', hours: '11 PM - 3 / 4 AM', note: 'Doors open at 11 PM but the floor fills after midnight. Weekends (Thu-Sat) are the only nights most clubs operate.' },
              { type: 'Jemaa el-Fnaa (Marrakech)', hours: 'Sunset - 1 AM', note: 'Food stalls set up around 5 PM. Performers, musicians, and storytellers peak between 8-11 PM.' },
              { type: 'Gnawa / Live Music Venues', hours: '8 PM - midnight', note: 'Sets typically start at 9 PM. Festival performances can run later. Informal street performances are unpredictable.' },
            ].map((item) => (
              <div key={item.type} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-1">
                  {item.type}
                </h3>
                <p className="text-sm font-medium text-[var(--color-accent)] mb-2">
                  <Clock className="w-3.5 h-3.5 inline-block mr-1" />
                  {item.hours}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jemaa el-Fnaa After Dark ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Jemaa el-Fnaa After Dark: Morocco&apos;s Greatest Free Show
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              No guide to Moroccan nightlife is complete without Jemaa el-Fnaa, Marrakech&apos;s vast
              central square that transforms nightly into one of the world&apos;s most extraordinary
              open-air spectacles. UNESCO declared it a Masterpiece of the Oral and Intangible
              Heritage of Humanity, and spending an evening here confirms why.
            </p>
            <p>
              As the sun drops behind the Koutoubia minaret, the square fills with over 100 food
              stalls serving grilled lamb, merguez sausages, spiced snail soup, sheep head, harira,
              and fresh-squeezed orange juice from 4 MAD. Around the edges, circles (halqas) form
              where storytellers, acrobats, snake charmers, henna artists, and Gnawa musicians perform
              for tips. The noise, the smoke, the competing calls of food vendors -- it is chaotic,
              thrilling, and entirely free to experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { title: 'Food Stalls', icon: Utensils, text: 'Over 100 stalls. Point and sit. A full meal costs from 30-60 MAD. Stall 1, 14, and 31 are perennial favorites among locals.' },
              { title: 'Street Performers', icon: Star, text: 'Halqa circles with acrobats, storytellers (in Arabic/Darija), musicians, and comedians. Tip from 10-20 MAD if you stop to watch.' },
              { title: 'Terrace Cafes', icon: GlassWater, text: 'Cafe de France and Cafe Glacier offer elevated views over the square. Mint tea from 20 MAD. No alcohol. Best seats fill by 7 PM.' },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <ItemIcon className="w-6 h-6 text-[var(--color-accent)] mb-2" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Moroccan Drinks to Try ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Drinks Worth Trying
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco produces its own beer, wine, and spirits alongside the world-famous mint tea.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Casablanca Beer',
                type: 'Lager',
                price: 'From 25 MAD (shop) / from 40 MAD (bar)',
                description: 'Morocco\'s most popular beer. A clean, easy-drinking lager brewed since 1919. You will find it everywhere alcohol is served. The bottle with the city skyline silhouette is iconic.',
              },
              {
                name: 'Flag Speciale',
                type: 'Lager',
                price: 'From 20 MAD (shop) / from 35 MAD (bar)',
                description: 'Slightly lighter than Casablanca, Flag Speciale is the other national beer. Common in bars and available in most supermarkets. Best ice-cold on a hot evening.',
              },
              {
                name: 'Guerrouane Rouge',
                type: 'Red Wine',
                price: 'From 60 MAD (bottle)',
                description: 'A full-bodied red from the Meknes region, Morocco\'s wine heartland. Pairs well with tagine and grilled meats. The quality of Moroccan wine has improved significantly in recent years.',
              },
              {
                name: 'Medaillon Rose',
                type: 'Rose Wine',
                price: 'From 50 MAD (bottle)',
                description: 'Light, fruity, and perfect for warm evenings on a rooftop terrace. Moroccan rose wines are underrated and offer genuine value compared to imported alternatives.',
              },
              {
                name: 'Mahia',
                type: 'Fig Spirit',
                price: 'From 80 MAD (bottle)',
                description: 'A traditional Moroccan spirit distilled from figs or dates, historically produced by the country\'s Jewish community. Anise-flavored and strong. Not widely available but worth seeking out.',
              },
              {
                name: 'Mint Tea (Atay)',
                type: 'Non-Alcoholic',
                price: 'From 10 MAD',
                description: 'The national drink. Gunpowder green tea steeped with fresh spearmint and generous sugar, poured from height to create a frothy top. Available everywhere, at all hours, and central to every social interaction.',
              },
            ].map((drink) => (
              <div key={drink.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {drink.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#A0522D]/10 text-[#A0522D] font-medium">
                    {drink.type}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{drink.description}</p>
                <p className="text-xs font-medium text-[var(--color-accent)]">
                  <DollarSign className="w-3 h-3 inline-block mr-1" />
                  {drink.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Nightlife Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Nightlife Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s nightlife intensity shifts with the seasons, festivals, and religious calendar.
          </p>

          <div className="space-y-4">
            {[
              {
                season: 'Peak Season (Oct - Apr)',
                icon: Star,
                text: 'Tourist numbers are highest. Marrakech and Casablanca clubs run at full capacity on weekends. International DJs headline at Theatro and Maison B. Rooftop bars are pleasant in the cooler evenings. New Year\'s Eve is the biggest party night of the year across all major cities.',
              },
              {
                season: 'Summer (Jun - Aug)',
                icon: Sparkles,
                text: 'Agadir and Essaouira peak as beach nightlife destinations. Marrakech empties somewhat as temperatures exceed 40 degrees, but the clubs remain open. The Gnaoua World Music Festival in Essaouira (June) is a highlight. Beach clubs and outdoor venues dominate.',
              },
              {
                season: 'Ramadan (dates shift yearly)',
                icon: Moon,
                text: 'The quietest period for nightlife. Most bars and clubs close. Hotel bars serve discreetly. After iftar each evening, streets fill with families and the energy is festive but alcohol-free. The nights of Laylat al-Qadr (near the end of Ramadan) are especially lively with religious observance.',
              },
              {
                season: 'Shoulder Season (May, Sep)',
                icon: CheckCircle,
                text: 'Often the best time for nightlife. Tourist crowds are manageable, prices are lower, and the weather is comfortable for rooftop bars and outdoor venues. You can get into popular venues without reservations. Locals are out in force.',
              },
            ].map((item) => {
              const SeasonIcon = item.icon;
              return (
                <div key={item.season} className="card-moroccan p-5 flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-56 shrink-0 flex items-start gap-2">
                    <SeasonIcon className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                      {item.season}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
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
            Morocco After Dark
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-jemaa-elfnaa-night.webp"
                alt="Jemaa el-Fnaa square bustling with food stalls and crowds under the night sky in Marrakech"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Jemaa el-Fnaa at Night</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-ricks-cafe-casablanca.webp"
                alt="Interior of Rick's Cafe in Casablanca with Art Deco decor and atmospheric lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rick&apos;s Cafe, Casablanca</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-gnawa-music.webp"
                alt="Gnawa musicians performing traditional music with guembri and qraqeb in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Gnawa Live Performance</p>
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
            Answers to the most common questions about nightlife in Morocco.
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
                title: 'Morocco Food Guide',
                description: 'Street food, restaurant etiquette, regional specialties, and the best dishes to try after a night out.',
                href: '/food',
                icon: Utensils,
              },
              {
                title: 'Morocco Safety Guide',
                description: 'Comprehensive safety advice covering scams, transport, health, and emergency contacts for travelers.',
                href: '/safety',
                icon: ShieldCheck,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress codes, tipping customs, greetings, and social norms for respectful travel in Morocco.',
                href: '/etiquette',
                icon: CheckCircle,
              },
              {
                title: 'Marrakech City Guide',
                description: 'Complete guide to Marrakech including riads, souks, day trips, and the best neighborhoods to stay in.',
                href: '/marrakech',
                icon: Star,
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

      {/* ── More Nightlife & Entertainment Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Nightlife &amp; Entertainment Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/casablanca', title: 'Casablanca City Guide', desc: 'The full guide to Morocco\'s largest city including the Corniche, Hassan II Mosque, and Art Deco neighborhoods.' },
              { href: '/tangier', title: 'Tangier City Guide', desc: 'Explore Tangier\'s Kasbah, literary heritage, Cap Spartel, and the vibrant medina scene.' },
              { href: '/essaouira', title: 'Essaouira City Guide', desc: 'Wind, waves, and Gnawa music. The complete guide to Morocco\'s laid-back Atlantic port city.' },
              { href: '/agadir', title: 'Agadir City Guide', desc: 'Beach resorts, surfing, Souss-Massa National Park, and the rebuilt modern city on Morocco\'s southern coast.' },
              { href: '/morocco-cuisine-guide', title: 'Moroccan Cuisine Guide', desc: 'Tagine, couscous, pastilla, street food, and the flavors that fuel late-night cravings.' },
              { href: '/budget-travel', title: 'Morocco on a Budget', desc: 'How to experience Morocco without overspending, including affordable nightlife and free cultural events.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
