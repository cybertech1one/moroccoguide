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
  Users,
  Building,
  Award,
  BookOpen,
  Sunset,
  Globe,
  MessageCircle,
  Coffee,
  Wine,
  Music,
  Sparkles,
  AlertTriangle,
  Heart,
  Calendar,
  Moon,
  Wallet,
  Volume2,
  Glasses,
  Flame,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Nightlife 2026 | Best Bars, Clubs, Live Music & Party Guide',
  description:
    'Discover Morocco nightlife: rooftop bars in Marrakech, nightclubs in Casablanca, live music in Essaouira, and beach clubs in Agadir. Alcohol laws, dress codes, safety tips, and costs in MAD.',
  keywords: [
    'Morocco nightlife',
    'best bars Morocco',
    'Marrakech nightlife',
    'Morocco party scene',
    'Casablanca nightclubs',
    'Morocco bars and clubs',
    'Marrakech rooftop bars',
    'Tangier nightlife',
    'Agadir nightlife',
    'Essaouira live music',
    'Morocco alcohol laws',
    'Morocco nightlife guide 2026',
    'best clubs Marrakech',
    'Morocco DJ scene',
    'Casablanca bars',
    'Morocco nightlife safety',
    'Marrakech party guide',
    'Morocco going out guide',
    'Morocco drinks prices',
    'where to party Morocco',
  ],
  openGraph: {
    title: 'Morocco Nightlife 2026 | Best Bars, Clubs, Live Music & Party Guide',
    description:
      'The definitive guide to Morocco nightlife. Rooftop bars, nightclubs, live music venues, alcohol laws, dress codes, safety tips, and costs across every major city.',
    url: `${BASE_URL}/morocco-nightlife`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Vibrant rooftop bar scene in Marrakech with lantern-lit terrace overlooking the medina at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Nightlife 2026 | Best Bars, Clubs & Live Music',
    description:
      'Rooftop bars, nightclubs, Gnawa music, beach parties, and everything you need to know about going out in Morocco.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-nightlife` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-nightlife`,
  name: 'Morocco Nightlife 2026 | Best Bars, Clubs, Live Music & Party Guide',
  description:
    'The definitive guide to Morocco nightlife. Rooftop bars in Marrakech, nightclubs in Casablanca, live Gnawa music in Essaouira, beach clubs in Agadir, alcohol laws, dress codes, safety tips, and costs.',
  url: `${BASE_URL}/morocco-nightlife`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-nightlife`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Nightlife', item: `${BASE_URL}/morocco-nightlife` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is alcohol available in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco is a Muslim-majority country, but alcohol is legal and widely available in licensed bars, hotels, restaurants, nightclubs, and supermarkets (Carrefour, Acima). You cannot drink alcohol on the street or in public spaces. Most international hotels, rooftop bars, and nightclubs serve beer, wine, spirits, and cocktails. Moroccan wine and beer (Flag Speciale, Casablanca Beer) are popular and affordable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do nightclubs close in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most nightclubs in Morocco stay open until 3:00-4:00 AM on weekends (Thursday, Friday, Saturday). On weekdays, clubs typically close by 2:00 AM. Rooftop bars and cocktail lounges usually close between midnight and 1:00 AM. During Ramadan, many venues close or operate with reduced hours. Peak hours at clubs are typically 11:00 PM to 2:00 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best night of the week to go out in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thursday and Friday nights are the biggest nights out in Morocco. The Moroccan weekend begins on Friday, so Thursday night is the equivalent of a Western Friday night. Saturday nights are also busy, especially in tourist-heavy cities like Marrakech and Agadir. Wednesday can also be lively in Casablanca. Sunday through Tuesday tends to be quieter at most venues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to go out in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dress codes in Morocco vary by venue. Upscale rooftop bars and hotel lounges expect smart casual: collared shirts or blouses, tailored trousers or dresses, and closed-toe shoes. Nightclubs enforce stricter dress codes, especially in Marrakech and Casablanca, and often refuse entry in shorts, flip-flops, or sportswear. Beach clubs in Agadir are more relaxed. When in doubt, dress slightly smarter than you think necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco nightlife safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco nightlife is generally safe, especially in hotel bars, established nightclubs, and tourist-oriented venues. Use standard precautions: take official taxis (petit taxi) or ride-hailing apps, avoid walking alone through unfamiliar areas late at night, keep valuables secure, and drink responsibly. Women should be aware that some local bars are male-dominated; international hotel bars and upscale venues are more comfortable for mixed groups. Stick to well-known, reputable venues.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a night out cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco nightlife offers good value. A local beer costs from 25-40 MAD at a standard bar and from 50-80 MAD at an upscale venue. Cocktails range from 80-150 MAD at rooftop bars. Nightclub cover charges range from 100-300 MAD, often including a drink. A full night out with drinks and transport typically costs from 300-800 MAD per person. VIP table service at premium clubs starts from 2,000 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does nightlife change during Ramadan in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly. During Ramadan, many bars and nightclubs close entirely or operate with very limited hours. Some international hotel bars remain open for non-Muslim guests but are much quieter. After iftar (the evening meal breaking the fast), cities come alive with a different energy: street food, family gatherings, and festive markets. If nightlife is a priority, avoid visiting during Ramadan. Check the Islamic calendar as dates change each year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the legal drinking age in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The legal drinking age in Morocco is 18. Most upscale bars, nightclubs, and hotel venues check ID, especially for younger-looking guests. Moroccan national ID or a passport is accepted. Note that while the legal age is 18, many premium nightclubs in Marrakech and Casablanca enforce a minimum age of 21 for entry, particularly on busy weekend nights.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: NIGHTLIFE BY CITY
   ═══════════════════════════════════════════════════════════════ */

const nightlifeCities = [
  {
    city: 'Marrakech',
    icon: Star,
    vibe: 'Glamorous, International, Rooftop Culture',
    image: '/images/hero-marrakech.webp',
    description:
      'Marrakech is the undisputed nightlife capital of Morocco. The scene revolves around glamorous rooftop bars with Atlas Mountain views, high-energy nightclubs that attract international DJs, and intimate cocktail lounges hidden inside restored riads. The city draws a cosmopolitan crowd of tourists, expats, and wealthy Moroccans, creating an atmosphere unlike anywhere else in North Africa. Start the evening on a lantern-lit rooftop overlooking Jemaa el-Fnaa, then move to the Hivernage district where the clubs pulse until the early hours.',
    topVenues: [
      'Le Salama Rooftop - iconic medina views, cocktails, and live DJs',
      'Theatro Marrakech - largest nightclub, former theater, world-class DJs',
      'Barometre - stylish cocktail bar in Gueliz, craft cocktails',
      'Cafe Arabe - rooftop terrace, Moroccan-Italian fusion, wine list',
      'So Lounge (Sofitel) - upscale lounge with live music and premium spirits',
    ],
    peakNights: 'Thursday, Friday, Saturday',
    bestArea: 'Hivernage (clubs), Gueliz (bars), Medina (rooftop bars)',
    priceRange: 'From 50 MAD (beer) to 150 MAD (cocktails)',
  },
  {
    city: 'Casablanca',
    icon: Building,
    vibe: 'Cosmopolitan, Business-Class, Underground',
    image: '/images/hero-casablanca.webp',
    description:
      'Casablanca is Morocco\'s most cosmopolitan city and its nightlife reflects a sophisticated, urban energy. The city has the country\'s most diverse bar and club scene, from sleek hotel rooftop lounges with Atlantic Ocean views to underground DJ nights and live jazz bars. Casablanca\'s nightlife is less tourist-focused than Marrakech, attracting a well-dressed local crowd of young professionals. The Corniche along the coast and the Maarif district downtown are the two main nightlife zones. Expect later starts and later finishes than other Moroccan cities.',
    topVenues: [
      'Sky 28 (Twin Center) - highest rooftop bar in Morocco, panoramic city views',
      'Le Cabestan - oceanfront restaurant and lounge on the Corniche',
      'Ain Diab clubs - cluster of beach clubs and nightclubs along the coast',
      'La Bodega - lively tapas bar with Latin music and sangria',
      'L\'Atelier du Vin - sophisticated wine bar with Moroccan and French wines',
    ],
    peakNights: 'Wednesday, Thursday, Friday',
    bestArea: 'Corniche / Ain Diab (beach clubs), Maarif (downtown bars)',
    priceRange: 'From 40 MAD (beer) to 130 MAD (cocktails)',
  },
  {
    city: 'Tangier',
    icon: Globe,
    vibe: 'Bohemian, Cultural, Mediterranean Chic',
    image: '/images/hero-tangier.webp',
    description:
      'Tangier has a legendary nightlife heritage. This was the city of Paul Bowles, William Burroughs, and the Beat Generation, where artists and writers drank absinthe in smoky bars overlooking the Strait of Gibraltar. Today, Tangier\'s nightlife scene is undergoing a renaissance. New cocktail bars and rooftop lounges sit alongside historic literary haunts in the old kasbah. The Mediterranean coast provides a stunning backdrop for sunset drinks. The crowd is an intriguing mix of Moroccan creatives, Spanish visitors crossing the strait, and international artists drawn by the city\'s bohemian energy.',
    topVenues: [
      'El Morocco Club - elegant cocktail bar in a restored medina mansion',
      'Cafe Hafa - legendary cliffside terrace where the Rolling Stones drank mint tea',
      'Le Salon Bleu - atmospheric rooftop bar with kasbah and sea views',
      'La Terrasse des Paresseux - sunset drinks overlooking the port',
      'Numero Uno - modern cocktail lounge in the new city',
    ],
    peakNights: 'Thursday, Friday, Saturday',
    bestArea: 'Kasbah (rooftop bars), Ville Nouvelle (modern bars)',
    priceRange: 'From 35 MAD (beer) to 120 MAD (cocktails)',
  },
  {
    city: 'Agadir',
    icon: Sunset,
    vibe: 'Beachfront, Resort, All-Night Parties',
    image: '/images/hero-agadir.webp',
    description:
      'Agadir is Morocco\'s beach party capital. Rebuilt after the devastating 1960 earthquake, the city has a modern resort feel with a long stretch of Atlantic beach lined with hotels, restaurants, and nightlife venues. The scene is more relaxed and resort-oriented than Marrakech or Casablanca. Beach clubs play music through the afternoon into sunset, then the action moves to the clubs in the Secteur Touristique that pump until dawn. European charter tourists, young Moroccans from the south, and surfers create a fun, unpretentious crowd. Agadir has Morocco\'s most permissive nightlife atmosphere.',
    topVenues: [
      'Papagayo - large nightclub on the beach strip, resident DJs',
      'So Lounge Agadir - upscale beach club to nightclub transition',
      'English Pub - lively expat bar with live sport and pool tables',
      'Jour et Nuit - popular local nightclub with mixed music',
      'Beach clubs along Chemin des Dunes - sunset cocktails on the sand',
    ],
    peakNights: 'Thursday, Friday, Saturday',
    bestArea: 'Secteur Touristique (main strip), Chemin des Dunes (beach clubs)',
    priceRange: 'From 30 MAD (beer) to 100 MAD (cocktails)',
  },
  {
    city: 'Essaouira',
    icon: Music,
    vibe: 'Live Music, Bohemian, Laid-Back',
    image: '/images/hero-essaouira.webp',
    description:
      'Essaouira is not about nightclubs. This windswept coastal town is the spiritual home of Gnawa music, a hypnotic fusion of sub-Saharan African rhythms, Berber traditions, and Sufi mysticism. The nightlife here centers on live music in intimate venues, rooftop bars above the medina walls, and casual beachfront gatherings. The annual Gnawa World Music Festival (June) transforms the entire town into an open-air concert. Year-round, you can find Gnawa musicians performing in small restaurants and riads. Essaouira attracts musicians, surfers, and travelers who prefer culture and authenticity over bottle service.',
    topVenues: [
      'Taros Cafe - rooftop bar overlooking the port, live music nightly',
      'Gnawa music venues - small restaurants in the medina with nightly performances',
      'Beach bonfires - informal gatherings with drums and guitars at sunset',
      'Le Patio - courtyard wine bar in a restored riad',
      'Ocean Vagabond - beachfront cafe and bar, sunset cocktails with live music',
    ],
    peakNights: 'Friday, Saturday (June festival is every night)',
    bestArea: 'Medina (rooftop bars), Port area (Taros), Beach (sunset gatherings)',
    priceRange: 'From 30 MAD (beer) to 90 MAD (cocktails)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ROOFTOP BARS
   ═══════════════════════════════════════════════════════════════ */

const rooftopBars = [
  {
    name: 'Le Salama',
    city: 'Marrakech',
    icon: Star,
    price: 'From 80 MAD per cocktail',
    description: 'Perched above Jemaa el-Fnaa, Le Salama is the most famous rooftop bar in Morocco. The terrace offers a panoramic view of the square\'s nightly spectacle, the Koutoubia minaret, and the Atlas Mountains. Brass lanterns, low seating, and live DJ sets on weekends create an atmosphere of sophisticated Moroccan glamour. Arrive before sunset to secure the best table.',
  },
  {
    name: 'Sky 28',
    city: 'Casablanca',
    icon: Building,
    price: 'From 100 MAD per cocktail',
    description: 'Located on the 28th floor of the Twin Center tower, Sky 28 is the highest bar in Morocco. The 360-degree views of Casablanca\'s skyline and the Atlantic Ocean are unmatched. The interior is sleek and modern, with a cocktail menu that rivals any European capital. A dress code is enforced. Best visited on a clear evening when the city lights stretch to the horizon.',
  },
  {
    name: 'Le Salon Bleu',
    city: 'Tangier',
    icon: Globe,
    price: 'From 60 MAD per cocktail',
    description: 'A beautifully restored mansion in the Tangier kasbah with a rooftop terrace that overlooks the Strait of Gibraltar. On clear evenings, you can see the lights of Spain across the water. The decor is a blend of Moroccan and Andalusian aesthetics, with blue and white tilework and candlelit tables. The cocktail list features Moroccan-inspired mixes with fresh mint, orange blossom, and local spirits.',
  },
  {
    name: 'Cafe Arabe',
    city: 'Marrakech',
    icon: Coffee,
    price: 'From 70 MAD per cocktail',
    description: 'A multi-level restaurant and bar in the heart of the Marrakech medina with a stunning rooftop terrace. The view sweeps across the rooftops to the Koutoubia and the Atlas beyond. The wine list features excellent Moroccan labels, and the cocktails are crafted with care. More refined and less party-focused than Le Salama, this is ideal for a sophisticated evening drink.',
  },
  {
    name: 'Taros Cafe',
    city: 'Essaouira',
    icon: Music,
    price: 'From 50 MAD per cocktail',
    description: 'Essaouira\'s most iconic bar occupies a prime position above the old port. The rooftop terrace catches the Atlantic breeze and offers sunset views that draw visitors back night after night. Live Gnawa music, jazz, and acoustic performances are regular features. The atmosphere is bohemian, welcoming, and distinctly Essaouiran. Come for sunset, stay for the music.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ALCOHOL LAWS & CULTURAL CONSIDERATIONS
   ═══════════════════════════════════════════════════════════════ */

const culturalTips = [
  {
    title: 'Alcohol Is Legal but Regulated',
    icon: Wine,
    content: 'Morocco is a Muslim-majority country where alcohol is legal for non-Muslims and is widely available in licensed hotels, bars, restaurants, nightclubs, and select supermarkets (Carrefour, Acima, Marjane). Drinking in public spaces, on the street, or near mosques is illegal and disrespectful. Alcohol is not served in most medina restaurants unless they hold a license. International hotel bars are always the safest and most comfortable option.',
  },
  {
    title: 'Respect Ramadan',
    icon: Moon,
    content: 'During Ramadan, most bars and nightclubs close or operate with severely reduced hours. Some international hotel bars remain open for non-Muslim guests but expect a much quieter atmosphere. Drinking or eating openly in public during daylight hours of Ramadan is considered deeply disrespectful. If you want a vibrant nightlife scene, plan your trip outside of Ramadan. Dates change each year following the Islamic lunar calendar.',
  },
  {
    title: 'Moroccan Wine and Beer',
    icon: Glasses,
    content: 'Morocco has a growing wine industry, particularly in the Meknes and Atlas foothills regions. Labels like Chateau Roslane, Domaine de la Zouina, and Medaillon are excellent. Flag Speciale and Casablanca Beer are the most popular local beers. Try Moroccan rose wine, which pairs beautifully with tagine. Prices for local wine and beer are significantly cheaper than imported options. A good Moroccan red wine costs from 150-300 MAD per bottle at a restaurant.',
  },
  {
    title: 'Dress Code Awareness',
    icon: Users,
    content: 'Dress codes vary widely. Upscale hotel bars and rooftop lounges expect smart casual attire. Nightclubs in Marrakech and Casablanca enforce strict dress codes and will refuse entry to anyone in shorts, sandals, flip-flops, or sportswear. Beach clubs in Agadir are more relaxed during the day but expect a change of clothing for the evening transition. Women will find the atmosphere most comfortable at international hotel bars and established upscale venues.',
  },
  {
    title: 'Safety and Transport at Night',
    icon: ShieldCheck,
    content: 'Always arrange transport before going out. Use official petit taxis (metered, city-only), your hotel\'s car service, or ride-hailing apps like inDrive or Careem. Avoid unofficial taxis late at night. Keep valuables minimal and secure. Stick to well-known, reputable venues and avoid deserted areas. Women traveling in groups will feel safer than solo. Most hotel staff can recommend trusted drivers for late-night returns.',
  },
  {
    title: 'Interactions and Local Customs',
    icon: Heart,
    content: 'Public displays of affection are frowned upon in Moroccan culture regardless of the venue. While rooftop bars and nightclubs are more relaxed, maintain cultural awareness. Avoid overintoxication in public, which is seen as disrespectful. Tipping bar staff from 10-20 MAD per round is appreciated. Some local bars are predominantly male spaces; international hotel venues are more mixed and comfortable for all travelers.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NIGHTLIFE COSTS
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Local beer (Flag Speciale, 33cl)', budget: 'From 25-40 MAD', upscale: 'From 50-80 MAD' },
  { item: 'Imported beer (Heineken, Corona)', budget: 'From 40-60 MAD', upscale: 'From 70-100 MAD' },
  { item: 'Glass of Moroccan wine', budget: 'From 40-70 MAD', upscale: 'From 80-120 MAD' },
  { item: 'Cocktail', budget: 'From 60-90 MAD', upscale: 'From 100-180 MAD' },
  { item: 'Bottle of spirits (club table)', budget: 'N/A', upscale: 'From 1,500-4,000 MAD' },
  { item: 'Nightclub cover charge', budget: 'From 0-100 MAD', upscale: 'From 100-300 MAD' },
  { item: 'VIP table reservation', budget: 'N/A', upscale: 'From 2,000-5,000 MAD' },
  { item: 'Late-night taxi (city center)', budget: 'From 20-50 MAD', upscale: 'From 50-100 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is alcohol available in Morocco?',
    answer:
      'Yes. Morocco is a Muslim-majority country, but alcohol is legal and widely available in licensed bars, hotels, restaurants, nightclubs, and supermarkets (Carrefour, Acima, Marjane). You cannot drink alcohol on the street or in public spaces. Most international hotels, rooftop bars, and nightclubs serve beer, wine, spirits, and cocktails. Moroccan wine (from the Meknes region) and beer (Flag Speciale, Casablanca Beer) are popular and affordable.',
  },
  {
    question: 'What time do nightclubs close in Morocco?',
    answer:
      'Most nightclubs stay open until 3:00-4:00 AM on weekends (Thursday, Friday, Saturday nights). On weekdays, clubs typically close by 2:00 AM. Rooftop bars and cocktail lounges usually close between midnight and 1:00 AM. During Ramadan, many venues close entirely or operate with significantly reduced hours. Peak hours at clubs are typically 11:00 PM to 2:00 AM; arriving before 11:00 PM means you may find the venue nearly empty.',
  },
  {
    question: 'What is the best night of the week to go out in Morocco?',
    answer:
      'Thursday and Friday nights are the biggest nights out. The Moroccan weekend begins on Friday, so Thursday night is the equivalent of a Western Friday night and is often the busiest. Saturday nights are also lively, especially in tourist-heavy cities like Marrakech and Agadir. In Casablanca, Wednesday nights can also be surprisingly active. Sunday through Tuesday tends to be quieter, though hotel bars remain open.',
  },
  {
    question: 'What should I wear to go out in Morocco?',
    answer:
      'Dress codes vary by venue. Upscale rooftop bars and hotel lounges expect smart casual: collared shirts or blouses, tailored trousers or dresses, and closed-toe shoes. Nightclubs in Marrakech and Casablanca enforce stricter dress codes and will refuse entry to anyone wearing shorts, flip-flops, or sportswear. Beach clubs in Agadir are more relaxed during daytime but expect a wardrobe change for evening. When in doubt, dress a level smarter than you think necessary.',
  },
  {
    question: 'Is Morocco nightlife safe?',
    answer:
      'Morocco nightlife is generally safe, particularly in hotel bars, established nightclubs, and tourist-oriented venues. Use standard precautions: take official petit taxis or ride-hailing apps, avoid walking alone through unfamiliar areas late at night, keep valuables minimal and secure, and drink responsibly. Women traveling in groups will feel most comfortable; international hotel bars and upscale venues offer the most welcoming mixed-gender atmosphere. Avoid unlicensed or unknown establishments.',
  },
  {
    question: 'How much does a night out cost in Morocco?',
    answer:
      'Morocco nightlife offers excellent value compared to Europe. A local beer costs from 25-40 MAD at a standard bar and from 50-80 MAD at an upscale venue. Cocktails range from 60-150 MAD depending on the venue. Nightclub cover charges range from 100-300 MAD, often including one drink. A complete night out with several drinks, club entry, and taxi transport typically costs from 300-800 MAD per person. VIP table service at premium Marrakech clubs starts from 2,000 MAD.',
  },
  {
    question: 'Does nightlife change during Ramadan in Morocco?',
    answer:
      'Yes, dramatically. During Ramadan, most bars and nightclubs close entirely or operate with very limited hours. Some international hotel bars remain open for non-Muslim guests but are much quieter. After iftar (the evening meal breaking the fast), cities come alive with a different energy: street food, family gatherings, and festive markets replace the bar scene. If nightlife is a major part of your travel plans, avoid visiting during Ramadan. Check the Islamic calendar as the dates shift each year.',
  },
  {
    question: 'What is the legal drinking age in Morocco?',
    answer:
      'The legal drinking age in Morocco is 18 years old. Most upscale bars, nightclubs, and hotel venues check ID, especially for younger-looking guests. A valid passport or Moroccan national ID is accepted. Note that while the legal age is 18, many premium nightclubs in Marrakech and Casablanca enforce a higher minimum age of 21 for entry, particularly on busy weekend nights. Always carry a form of photo identification when going out.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST NIGHTS & TIMING
   ═══════════════════════════════════════════════════════════════ */

const nightTiming = [
  {
    period: 'Sunset (6:00 - 8:00 PM)',
    icon: Sunset,
    description: 'Golden hour drinks on a rooftop bar or beach club. This is when Marrakech rooftops, Essaouira\'s Taros Cafe, and Agadir beach bars are at their most magical. Arrive early to secure the best seats.',
  },
  {
    period: 'Evening (8:00 - 10:30 PM)',
    icon: Coffee,
    description: 'Dinner and cocktails at restaurant-bars. Many venues offer live music during this window. Moroccan diners eat late, so restaurants are buzzing at 9:00-10:00 PM. Wine bars and cocktail lounges peak during this period.',
  },
  {
    period: 'Late Night (10:30 PM - 1:00 AM)',
    icon: Moon,
    description: 'Nightclubs start filling up around 11:00 PM. DJ sets begin at most venues. The transition from bar to club typically happens around midnight. Cover charges are often waived or reduced before 11:00 PM at some clubs.',
  },
  {
    period: 'Peak Hours (1:00 - 4:00 AM)',
    icon: Flame,
    description: 'The main event. From 1:00 AM, clubs in Marrakech, Casablanca, and Agadir hit full energy. International DJs at venues like Theatro perform their prime sets. This is when the dance floors are packed and the atmosphere is electric.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoNightlifePage() {
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
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Nightlife</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Music className="w-4 h-4" />
            Nightlife Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Nightlife:
            <br className="hidden md:block" /> Bars, Clubs &amp; Live Music
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From lantern-lit rooftop bars overlooking ancient medinas to world-class nightclubs
            with international DJs. The complete guide to going out in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Understanding Morocco&apos;s Nightlife Scene
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s nightlife defies the expectations many visitors arrive with. While
                this is a Muslim-majority country with deep religious traditions, it is also a
                place where rooftop cocktail bars glow above ancient medinas, where world-class
                DJs play to packed nightclubs until 4:00 AM, and where Gnawa musicians channel
                centuries of spiritual tradition through hypnotic live performances. The nightlife
                scene is vibrant, varied, and growing more sophisticated every year.
              </p>
              <p>
                Each city offers a completely different after-dark experience. Marrakech is the
                glamour capital, where rooftop bars and mega-clubs cater to an international jet
                set. Casablanca has the most cosmopolitan and locally-driven scene, with wine
                bars, jazz clubs, and underground DJ nights. Tangier channels its bohemian literary
                heritage through atmospheric bars overlooking the Mediterranean. Agadir is pure
                beach-party energy. And Essaouira is the soul of Morocco&apos;s music scene, where
                Gnawa rhythms fill the Atlantic-facing terraces nightly.
              </p>
              <p>
                This guide covers everything you need to know: the best bars, clubs, and live
                music venues in every major city, alcohol laws and availability, dress codes,
                safety tips, cultural considerations, the best nights of the week, realistic
                costs, and answers to the most frequently asked questions about Morocco nightlife.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nightlife by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Every Moroccan city has its own after-dark personality. Here is what to expect
            in each major destination.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Venue availability and prices may vary by season. Seasonal pricing can change, especially during peak tourist months and holidays.
          </p>

          <div className="space-y-10">
            {nightlifeCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={city.image}
                        alt={`Nightlife scene in ${city.city}, Morocco - bars, clubs, and entertainment`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <CityIcon className="w-5 h-5 text-white" />
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {city.city}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 italic">{city.vibe}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {city.priceRange}
                        </span>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          Peak: {city.peakNights}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.description}</p>
                      <div className="mb-3">
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">
                          Top Venues
                        </h4>
                        <div className="space-y-2">
                          {city.topVenues.map((venue, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {venue}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                        <strong>Best areas:</strong> {city.bestArea}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Rooftop Bars ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Rooftop Bars in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Rooftop bars are the signature Morocco nightlife experience. Lantern-lit terraces
            above ancient medinas, Atlas Mountain sunsets, and cocktails crafted with local ingredients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooftopBars.map((bar) => {
              const BarIcon = bar.icon;
              return (
                <div key={bar.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BarIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {bar.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {bar.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                    {bar.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{bar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Nights & Timing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Go Out: Timing Your Night
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan nightlife follows its own rhythm. Understanding the timing is key to
            having the best experience.
          </p>

          <div className="space-y-6">
            {nightTiming.map((slot) => {
              const SlotIcon = slot.icon;
              return (
                <div key={slot.period} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <SlotIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {slot.period}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{slot.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Alcohol Laws & Cultural Considerations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alcohol Laws &amp; Cultural Considerations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <TipIcon className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cost Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Much Does a Night Out Cost?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic prices for drinks, cover charges, and transport across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are in Moroccan Dirhams (MAD). 1 USD is approximately 10 MAD, 1 EUR approximately 11 MAD. Seasonal pricing can change.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Standard Bar</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Upscale Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row, i) => (
                    <tr key={i} className="border-t border-[var(--border-default)]">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{row.item}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.budget}</td>
                      <td className="p-4 text-[var(--color-gold)] font-medium">{row.upscale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Music & Gnawa ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Volume2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Live Music &amp; the Gnawa Tradition
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s live music scene is one of the most authentic and captivating in
            all of Africa and the Arab world.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Music className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Gnawa Music
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                Gnawa music is Morocco&apos;s most distinctive and powerful musical tradition. Originating
                from sub-Saharan African spiritual practices blended with Berber and Sufi traditions,
                Gnawa features hypnotic rhythms played on the guembri (a three-stringed bass lute),
                krakebs (iron castanets), and call-and-response chanting that can continue for hours.
                The best places to experience live Gnawa are Essaouira (the spiritual home), Marrakech
                (Jemaa el-Fnaa and riad performances), and the annual Gnawa World Music Festival in June.
              </p>
              <div className="flex items-start gap-1.5 p-2 bg-[var(--surface-muted)] rounded-lg text-xs">
                <Award className="w-3 h-3 mt-0.5 text-[var(--color-gold)] shrink-0" />
                <span className="text-[var(--text-secondary)] italic">
                  The Gnawa World Music Festival in Essaouira (June) is one of the most extraordinary
                  music events in Africa, drawing 500,000+ visitors for free outdoor concerts.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Music className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Andalusian Classical Music
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The elegant counterpart to Gnawa, Andalusian classical music traces its roots to
                  medieval Moorish Spain. Performed with oud, violin, and percussion, this refined
                  tradition is best experienced in Fes and Tetouan. Several upscale restaurants in
                  Fes medina feature live Andalusian ensembles during dinner service. The sacred music
                  festival in Fes (June) is a world-renowned celebration of this art form.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Music className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Modern DJ &amp; Electronic Scene
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco has a growing electronic music scene centered in Marrakech and Casablanca.
                  Venues like Theatro Marrakech host international DJs from Europe and the Middle East.
                  The Oasis Festival (held near Marrakech) has become one of North Africa&apos;s premier
                  electronic music events. Local Moroccan DJs increasingly blend traditional rhythms
                  with house, techno, and Afrobeats, creating a sound unique to the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essential Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Safety Tips for Nights Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Pre-Arrange Your Transport Home
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always arrange your return transport before heading out. Ask your hotel to arrange a
                trusted driver, use ride-hailing apps like inDrive or Careem, or take official petit
                taxis (always insist the meter is running). Avoid unofficial cars and never accept rides
                from strangers. Late-night taxi fares are higher but should still use the meter. Save
                your hotel&apos;s phone number and address in your phone in case of emergencies.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Manage Your Cash Carefully
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry only the cash you plan to spend. Leave passports, extra cards, and large amounts
                of money in your hotel safe. Many upscale bars and clubs accept credit cards, but smaller
                venues and taxis are cash-only. ATMs are widely available in Gueliz (Marrakech), Maarif
                (Casablanca), and the Ville Nouvelle in other cities. Avoid using ATMs in quiet or poorly
                lit areas late at night.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Stay With Your Group
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Going out in a group is always safer, particularly for women travelers. Stick to
                well-established venues and avoid wandering through unfamiliar neighborhoods late at
                night. The medina streets can be confusing and poorly lit after dark. If you get
                separated from your group, head to the nearest hotel or well-lit commercial area and
                call a taxi from there. International hotel bars are safe havens if you feel uncomfortable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Watch Your Drinks
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                As in any nightlife destination worldwide, never leave drinks unattended and always
                watch your glass being poured. If you feel unusually ill after a single drink, seek
                help immediately. Established hotel bars and reputable nightclubs are the safest
                environments. Drink responsibly, as public intoxication is not only culturally
                frowned upon but can attract unwanted attention and leave you vulnerable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Know Key Phone Numbers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Save these in your phone before going out: Tourist Police (dial 19), Ambulance (15),
                and your hotel&apos;s front desk number. Morocco&apos;s Tourist Police are specifically
                trained to assist visitors and operate in all major tourist areas. They are generally
                helpful and many speak French and some English. Your hotel concierge is also an excellent
                resource and can intervene on your behalf if needed.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Know the Local Laws
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cannabis (kif) is illegal in Morocco despite its visibility in some areas. Possession
                can result in serious legal consequences. Public drunkenness can also lead to police
                attention. Same-sex relationships are criminalized under Moroccan law, and LGBTQ+
                travelers should exercise discretion in all public settings. Know and respect local
                laws to ensure a safe and enjoyable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect: Your First Night Out ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect on Your First Night Out
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            First-time visitors to Morocco&apos;s nightlife scene should know what to expect
            so they can relax and enjoy the experience fully.
          </p>

          <div className="prose-moroccan">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s nightlife operates on a later schedule than most Western countries.
                Moroccans eat dinner late, often at 9:00 or 10:00 PM, and the bar scene does not
                truly begin until 10:00-11:00 PM. Nightclubs remain nearly empty until midnight
                and hit peak energy between 1:00 and 3:00 AM. If you arrive at a club at 10:00 PM
                expecting it to be busy, you will be disappointed. Plan accordingly and start your
                evening at a rooftop bar or cocktail lounge before transitioning to clubs later.
              </p>
              <p>
                The atmosphere at upscale venues is generally welcoming and international. Hotel
                bars attract a mix of travelers and well-to-do locals. Nightclubs in Marrakech
                and Casablanca draw a well-dressed crowd that takes appearance seriously.
                Expect door policies at popular clubs: bouncers may refuse entry based on dress
                code or capacity. Arriving with hotel-booked reservations or as part of a mixed
                group generally makes entry smoother. Cover charges typically include one drink.
              </p>
              <p>
                Smoking is common in many Moroccan bars and some nightclub areas. While regulations
                exist, enforcement is inconsistent. If you prefer a smoke-free environment, rooftop
                bars and outdoor terraces are your best option. Most international hotel bars maintain
                non-smoking indoor areas. The energy in Moroccan nightlife is genuinely warm and
                social. Moroccans are naturally hospitable, and you may find yourself invited to join
                tables, offered drinks, or drawn into animated conversations. Enjoy the spontaneity.
              </p>
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
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/nightlife" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Moon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Nightlife Overview
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete overview of nightlife across all Moroccan destinations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-nightlife-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Nightlife Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth tips and recommendations for the best nights out in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/music" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Music className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Music Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Gnawa, Andalusian, Chaabi, and modern Moroccan music traditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/wine" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Wine className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wine Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Moroccan wine regions, vineyards, tastings, and the best local labels.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                5-star hotels, private experiences, and VIP itineraries across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Music className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Experience Morocco After Dark?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From rooftop cocktails above the medina to Gnawa rhythms on the Atlantic coast,
            Morocco&apos;s nightlife scene is as rich and diverse as the country itself. Start
            planning your nights out today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/nightlife"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Moon className="w-4 h-4" />
              Explore Nightlife
            </Link>
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Music className="w-4 h-4" />
              Music Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
