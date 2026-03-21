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
  UtensilsCrossed,
  Lamp,
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-nightlife`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Nightlife 2026 | Best Bars, Clubs, Live Music & Rooftop Lounges',
  description:
    'Complete guide to Morocco nightlife: rooftop bars in Marrakech, nightclubs in Casablanca, live Gnawa music in Essaouira, jazz bars in Rabat, beach clubs in Agadir, Jemaa el-Fnaa after dark. Alcohol laws, dress codes, safety tips, and realistic costs in MAD.',
  keywords: [
    'Morocco nightlife',
    'best bars Morocco',
    'Marrakech nightlife',
    'Casablanca nightclubs',
    'Morocco rooftop bars',
    'Marrakech rooftop bars',
    'Tangier nightlife',
    'Agadir nightlife',
    'Essaouira live music',
    'Rabat nightlife',
    'Morocco alcohol laws',
    'Morocco nightlife guide 2026',
    'best clubs Marrakech',
    'Jemaa el-Fnaa at night',
    'Morocco late night dining',
    'Gnawa music Morocco',
    'Morocco dress code nightlife',
    'Morocco nightlife safety',
    'Morocco DJ clubs',
    'Morocco jazz bars',
  ],
  openGraph: {
    title: 'Morocco Nightlife 2026 | Best Bars, Clubs, Live Music & Rooftop Lounges',
    description:
      'The definitive guide to Morocco after dark. Rooftop bars, nightclubs, live Gnawa music, jazz venues, late-night dining, cultural shows, alcohol laws, dress codes, and costs across every major city.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Lantern-lit rooftop bar terrace in Marrakech overlooking the medina at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Nightlife 2026 | Bars, Clubs & Live Music Guide',
    description:
      'Rooftop bars, nightclubs, Gnawa music, late-night dining, and everything you need for going out in Morocco.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is alcohol available in Morocco?',
    a: 'Yes. Morocco is a Muslim-majority country, but alcohol is legal and widely available in licensed bars, hotels, restaurants, nightclubs, and certain supermarkets (Carrefour, Acima, Marjane). Drinking in public spaces or on the street is illegal. International hotels, rooftop bars, and nightclubs serve beer, wine, spirits, and cocktails. Moroccan wine from the Meknes region and beers like Flag Speciale and Casablanca Beer are popular and affordable.',
  },
  {
    q: 'What time do nightclubs close in Morocco?',
    a: 'Most nightclubs stay open until 3:00-4:00 AM on weekends (Thursday, Friday, Saturday). On weekdays, clubs typically close by 2:00 AM. Rooftop bars and cocktail lounges close between midnight and 1:00 AM. During Ramadan, many venues shut entirely or run reduced hours. Peak club hours are 11:00 PM to 2:00 AM; arriving before 11:00 PM means the venue may be nearly empty.',
  },
  {
    q: 'What should I wear to go out in Morocco?',
    a: 'Dress codes vary by venue. Upscale rooftop bars and hotel lounges expect smart casual: collared shirts or blouses, tailored trousers or dresses, closed-toe shoes. Nightclubs in Marrakech and Casablanca enforce stricter codes and will turn away anyone in shorts, flip-flops, or sportswear. Beach clubs in Agadir are relaxed during the day but expect different attire for evening hours. When unsure, dress a level smarter than you think necessary.',
  },
  {
    q: 'Is Morocco nightlife safe for tourists?',
    a: 'Morocco nightlife is generally safe, especially at hotel bars, established nightclubs, and tourist-oriented venues. Standard precautions apply: use official petit taxis or ride-hailing apps (inDrive, Careem), avoid walking alone through unfamiliar areas after midnight, keep valuables minimal and secure, and drink responsibly. Women traveling in groups will find the atmosphere most comfortable at international hotel bars and upscale venues.',
  },
  {
    q: 'How much does a night out cost in Morocco?',
    a: 'Morocco offers good value. A local beer costs from 25-40 MAD at a standard bar and from 50-80 MAD at an upscale venue. Cocktails range from 60-150 MAD. Nightclub cover charges run from 100-300 MAD, often including one drink. A full night out with drinks, club entry, and taxi typically costs from 300-800 MAD per person. VIP table service at premium Marrakech clubs starts from 2,000 MAD. Seasonal pricing can change during peak tourist months.',
  },
  {
    q: 'Does nightlife change during Ramadan?',
    a: 'Yes, significantly. During Ramadan, most bars and nightclubs close entirely or operate with very limited hours. Some international hotel bars stay open for non-Muslim guests but are much quieter. After iftar (the evening meal breaking the fast), cities come alive with a different kind of energy: street food, family gatherings, and festive markets. If nightlife is a priority for your trip, plan around Ramadan. The dates shift each year following the Islamic lunar calendar.',
  },
  {
    q: 'What is the best night of the week to go out in Morocco?',
    a: 'Thursday and Friday nights are the biggest nights out. The Moroccan weekend starts on Friday, so Thursday night functions like a Western Friday night. Saturday is also lively in tourist-heavy cities like Marrakech and Agadir. In Casablanca, Wednesday nights can be surprisingly active. Sunday through Tuesday is quieter, though hotel bars remain open.',
  },
  {
    q: 'Can I experience nightlife in Morocco without drinking alcohol?',
    a: 'Absolutely. Many of Morocco\'s best after-dark experiences are alcohol-free. Jemaa el-Fnaa in Marrakech is one of the world\'s great night spectacles with food stalls, musicians, and storytellers. Cultural shows, rooftop cafes serving mint tea, late-night restaurants, and night markets are all entirely non-alcoholic. Gnawa music performances in Essaouira and jazz evenings in Rabat are about the music, not the drinks. Morocco is one of the few destinations where nightlife and sobriety coexist naturally.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Nightlife Guide 2026',
  description:
    'Complete guide to Morocco nightlife covering rooftop bars, nightclubs, live Gnawa music, jazz bars, late-night dining, cultural shows, alcohol laws, dress codes, safety tips, and costs.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Nightlife', item: PAGE_URL },
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
   DATA: NIGHTLIFE BY CITY
   ================================================================ */

const nightlifeCities = [
  {
    city: 'Marrakech',
    icon: Star,
    vibe: 'Glamorous, International, Rooftop Culture',
    image: '/images/hero-marrakech.webp',
    description:
      'Marrakech is the undisputed nightlife capital of Morocco. The scene revolves around glamorous rooftop bars with Atlas Mountain views, high-energy nightclubs that book international DJs, and intimate cocktail lounges hidden inside restored riads. The city draws a cosmopolitan crowd of tourists, expats, and wealthy Moroccans, creating an atmosphere unlike anywhere else in North Africa. Start the evening on a lantern-lit rooftop above Jemaa el-Fnaa, then move to the Hivernage district where clubs pulse until 4:00 AM.',
    topVenues: [
      'Le Salama Rooftop - iconic medina views, cocktails, weekend DJs',
      'Theatro Marrakech - former theater turned mega-club, world-class DJs',
      'Barometre - craft cocktail bar in Gueliz, creative mixology',
      'Cafe Arabe - rooftop terrace, Moroccan-Italian fusion, excellent wine list',
      'So Lounge (Sofitel) - upscale lounge with live music and premium spirits',
    ],
    peakNights: 'Thursday, Friday, Saturday',
    bestArea: 'Hivernage (clubs), Gueliz (bars), Medina (rooftop bars)',
    priceRange: 'From 50 MAD (beer) to 150 MAD (cocktails)',
  },
  {
    city: 'Casablanca',
    icon: Building,
    vibe: 'Cosmopolitan, Urban, Underground',
    image: '/images/hero-casablanca.webp',
    description:
      'Casablanca has Morocco\'s most diverse bar and club scene, driven by a sophisticated local crowd of young professionals rather than tourists. Sleek hotel rooftop lounges with Atlantic Ocean views sit alongside underground DJ nights and live jazz bars. The Corniche along the coast and the Maarif district downtown are the two main nightlife zones. Casablanca starts later and finishes later than other Moroccan cities. The city\'s wine bars and jazz clubs rival anything you would find in a European capital.',
    topVenues: [
      'Sky 28 (Twin Center) - highest rooftop bar in Morocco, panoramic views',
      'Le Cabestan - oceanfront restaurant and lounge on the Corniche',
      'La Bodega - lively tapas bar with Latin music and sangria',
      'L\'Atelier du Vin - sophisticated wine bar with Moroccan and French selections',
      'Ain Diab beach clubs - cluster of nightclubs along the coast',
    ],
    peakNights: 'Wednesday, Thursday, Friday',
    bestArea: 'Corniche / Ain Diab (beach clubs), Maarif (downtown bars)',
    priceRange: 'From 40 MAD (beer) to 130 MAD (cocktails)',
  },
  {
    city: 'Tangier',
    icon: Globe,
    vibe: 'Bohemian, Literary, Mediterranean Chic',
    image: '/images/hero-tangier.webp',
    description:
      'Tangier has a legendary nightlife heritage. This was the city of Paul Bowles, William Burroughs, and the Beat Generation, where artists drank absinthe in smoky bars overlooking the Strait of Gibraltar. Today, new cocktail bars and rooftop lounges sit alongside historic literary haunts in the old kasbah. The Mediterranean coast provides a stunning backdrop for sunset drinks. The crowd is an intriguing mix of Moroccan creatives, Spanish visitors from across the strait, and international artists drawn by the city\'s bohemian history.',
    topVenues: [
      'El Morocco Club - elegant cocktail bar in a restored medina mansion',
      'Cafe Hafa - legendary cliffside terrace, the Rolling Stones drank tea here',
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
      'Agadir is Morocco\'s beach party capital. Rebuilt after the 1960 earthquake, the city has a modern resort feel with a long Atlantic beach lined with hotels, restaurants, and nightlife venues. Beach clubs play music through the afternoon into sunset, then the action shifts to the clubs in the Secteur Touristique that go until dawn. European charter tourists, young Moroccans from the south, and surfers create a fun, unpretentious crowd. Agadir has Morocco\'s most relaxed and permissive nightlife atmosphere.',
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
      'Essaouira is not about nightclubs. This windswept coastal town is the spiritual home of Gnawa music, a hypnotic fusion of sub-Saharan African rhythms, Berber traditions, and Sufi mysticism. Nightlife centers on live music in intimate venues, rooftop bars above the medina walls, and casual beachfront gatherings. The annual Gnawa World Music Festival (June) transforms the entire town into an open-air concert. Year-round, Gnawa musicians perform in small restaurants and riads. This town attracts musicians, surfers, and travelers who prefer culture and authenticity over bottle service.',
    topVenues: [
      'Taros Cafe - rooftop bar overlooking the port, live music nightly',
      'Gnawa music venues - small medina restaurants with nightly performances',
      'Beach bonfires - informal gatherings with drums and guitars at sunset',
      'Le Patio - courtyard wine bar in a restored riad',
      'Ocean Vagabond - beachfront cafe with sunset cocktails and live music',
    ],
    peakNights: 'Friday, Saturday (June festival is every night)',
    bestArea: 'Medina (rooftop bars), Port area (Taros), Beach (sunset)',
    priceRange: 'From 30 MAD (beer) to 90 MAD (cocktails)',
  },
  {
    city: 'Rabat',
    icon: Award,
    vibe: 'Refined, Jazz-Focused, Cultural Capital',
    image: '/images/hero-rabat.webp',
    description:
      'Rabat, Morocco\'s capital, has a quieter but more refined after-dark scene. The city is known for jazz bars, wine lounges, and cultural events rather than thumping nightclubs. The Agdal and Hassan neighborhoods have upscale cocktail spots frequented by diplomats and government officials. Rabat hosts the Jazzablanca-affiliated jazz nights and the annual Mawazine festival (June), one of the largest music festivals in Africa. The pace is slower than Marrakech or Casablanca, but the quality is high and the crowds are discerning.',
    topVenues: [
      'Le Dhow - floating restaurant and lounge on the Bou Regreg river',
      'Hotel La Tour Hassan bar - elegant hotel lounge, classic cocktails',
      'Amnesia Club - one of Rabat\'s few dedicated nightclubs',
      'Villa Mandarine bar - boutique hotel garden bar with live jazz evenings',
      'Cafe Maure (Kasbah des Oudaias) - sunset tea terrace above the river',
    ],
    peakNights: 'Thursday, Friday',
    bestArea: 'Agdal (lounges), Hassan (hotel bars), Kasbah des Oudaias (sunset)',
    priceRange: 'From 35 MAD (beer) to 110 MAD (cocktails)',
  },
];

/* ================================================================
   DATA: TOP ROOFTOP BARS
   ================================================================ */

const rooftopBars = [
  {
    name: 'Le Salama',
    city: 'Marrakech',
    icon: Star,
    price: 'From 80 MAD per cocktail',
    description:
      'Perched above Jemaa el-Fnaa, Le Salama is the most famous rooftop bar in Morocco. The terrace offers a panoramic view of the square\'s nightly spectacle, the Koutoubia minaret, and the Atlas Mountains. Brass lanterns, low seating, and live DJ sets on weekends. Arrive before sunset to secure the best table.',
  },
  {
    name: 'Sky 28',
    city: 'Casablanca',
    icon: Building,
    price: 'From 100 MAD per cocktail',
    description:
      'On the 28th floor of the Twin Center, Sky 28 is Morocco\'s highest bar. 360-degree views of Casablanca\'s skyline and the Atlantic. Sleek interior, cocktail menu rivaling European capitals. Dress code enforced. Best on clear evenings when city lights stretch to the horizon.',
  },
  {
    name: 'Le Salon Bleu',
    city: 'Tangier',
    icon: Globe,
    price: 'From 60 MAD per cocktail',
    description:
      'Restored kasbah mansion with a rooftop terrace overlooking the Strait of Gibraltar. On clear evenings, Spain is visible across the water. Blue and white tilework, candlelit tables, Moroccan-inspired cocktails with fresh mint and orange blossom.',
  },
  {
    name: 'Cafe Arabe',
    city: 'Marrakech',
    icon: Coffee,
    price: 'From 70 MAD per cocktail',
    description:
      'Multi-level restaurant and bar in the Marrakech medina with a rooftop sweeping to the Koutoubia and Atlas. Excellent Moroccan wine list. More refined and less party-focused than Le Salama, ideal for a sophisticated evening drink and real conversation.',
  },
  {
    name: 'Taros Cafe',
    city: 'Essaouira',
    icon: Music,
    price: 'From 50 MAD per cocktail',
    description:
      'Essaouira\'s most iconic bar above the old port. The rooftop catches Atlantic breezes with sunset views that draw visitors back nightly. Live Gnawa, jazz, and acoustic performances. Bohemian, welcoming, distinctly Essaouiran. Come for sunset, stay for the music.',
  },
  {
    name: 'Le Dhow',
    city: 'Rabat',
    icon: Award,
    price: 'From 70 MAD per cocktail',
    description:
      'Traditional dhow boat converted into a floating bar on the Bou Regreg river between Rabat and Sale. Open deck views of both cities as the sun sets behind the Kasbah des Oudaias. Cocktails, Moroccan wines, and seafood. Completely unique in Morocco.',
  },
];

/* ================================================================
   DATA: JEMAA EL-FNAA AT NIGHT
   ================================================================ */

const jemaaExperiences = [
  {
    title: 'Food Stalls',
    icon: UtensilsCrossed,
    description:
      'After sunset, over 100 food stalls set up in the square. Grilled meats, snail soup, harira, fresh-squeezed orange juice, and Moroccan pastries. A full meal costs from 30-80 MAD. Stall numbers 1, 14, and 31 are long-standing favorites among locals. Look for the stalls with the most Moroccan diners, not the ones with the most aggressive touts.',
  },
  {
    title: 'Musicians & Gnawa Circles',
    icon: Music,
    description:
      'Gnawa musicians form circles in the square and play well into the night. The guembri bass, krakebs castanets, and call-and-response chanting create an atmosphere that has drawn visitors for centuries. Drop from 10-20 MAD into the collection if you stay and listen. Halqa (street performer circles) feature comedians, acrobats, and storytellers performing in Darija.',
  },
  {
    title: 'Henna Artists & Fortune Tellers',
    icon: Sparkles,
    description:
      'Henna artists work the edges of the square offering hand and foot designs. Negotiate the price before sitting down; expect from 50-150 MAD for detailed work. Fortune tellers, herbalists, and tooth-pullers add to the carnival atmosphere that earned the square its UNESCO recognition.',
  },
  {
    title: 'Snake Charmers & Storytellers',
    icon: Globe,
    description:
      'Snake charmers operate in the late afternoon and early evening. Be aware they will place a snake on you for a photo and demand payment. The halaiqis (storytellers) perform in Darija; even without understanding the language, watching the crowd react is part of the experience.',
  },
];

/* ================================================================
   DATA: LATE-NIGHT DINING
   ================================================================ */

const lateNightDining = [
  {
    city: 'Marrakech',
    icon: Star,
    spots: [
      'Jemaa el-Fnaa food stalls - open until midnight, from 30 MAD',
      'Cafe de France - overlooks the square, open late, mint tea and snacks',
      'Comptoir Darna - dinner with live belly dance show, open until 1:00 AM',
      'Al Fassia Aguedal - upscale Moroccan cuisine, last seating 10:30 PM',
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    spots: [
      'Rick\'s Cafe - Bogart-themed restaurant, dinner until 11:00 PM',
      'La Sqala - courtyard dining inside old Portuguese fortress, until 11:00 PM',
      'Corniche seafood restaurants - many open past midnight on weekends',
      'Maarif district sandwich shops and rotisseries - open until 2:00 AM',
    ],
  },
  {
    city: 'Tangier',
    icon: Globe,
    spots: [
      'El Morocco Club - dinner and drinks in a restored palace, until midnight',
      'Populaire Saveur de Poisson - legendary fixed-menu fish restaurant, book ahead',
      'Grand Socco street food vendors - late-night msemmen and harira',
      'Marina Bay restaurants - seafood with port views, open until midnight',
    ],
  },
];

/* ================================================================
   DATA: ALCOHOL & CULTURAL CONSIDERATIONS
   ================================================================ */

const culturalTips = [
  {
    title: 'Alcohol Is Legal but Regulated',
    icon: Wine,
    content:
      'Morocco is a Muslim-majority country where alcohol is legal for non-Muslims and widely available in licensed hotels, bars, restaurants, nightclubs, and select supermarkets (Carrefour, Acima, Marjane). Drinking on the street, in public spaces, or near mosques is illegal and disrespectful. Medina restaurants rarely serve alcohol unless licensed. International hotel bars are always the safest, most comfortable option.',
  },
  {
    title: 'Respect Ramadan',
    icon: Moon,
    content:
      'During Ramadan, most bars and nightclubs close or run severely reduced hours. Some international hotel bars stay open for non-Muslim guests but are much quieter. Drinking or eating openly in public during daylight hours of Ramadan is deeply disrespectful. If you want a lively nightlife scene, plan your trip outside Ramadan. Dates change each year following the Islamic lunar calendar.',
  },
  {
    title: 'Moroccan Wine and Beer',
    icon: Glasses,
    content:
      'Morocco has a growing wine industry, especially in the Meknes and Atlas foothills regions. Labels like Chateau Roslane, Domaine de la Zouina, and Medaillon are excellent. Flag Speciale and Casablanca Beer are the most popular local beers. Try Moroccan rose wine with tagine. A good Moroccan red costs from 150-300 MAD per bottle at a restaurant, significantly less than imported alternatives.',
  },
  {
    title: 'Dress Code Awareness',
    icon: Users,
    content:
      'Dress codes vary widely. Upscale hotel bars and rooftop lounges expect smart casual. Nightclubs in Marrakech and Casablanca enforce strict dress codes and will refuse entry in shorts, sandals, flip-flops, or sportswear. Beach clubs in Agadir are relaxed during the day but expect a change of clothing for the evening. Women will find the atmosphere most comfortable at international hotel bars and established upscale venues.',
  },
  {
    title: 'Safety and Transport at Night',
    icon: ShieldCheck,
    content:
      'Always arrange transport before going out. Use official petit taxis (metered, city-only), your hotel\'s car service, or ride-hailing apps like inDrive or Careem. Avoid unofficial taxis late at night. Keep valuables minimal and secure. Stick to well-known, reputable venues and avoid deserted areas. Women traveling in groups feel safer than solo. Most hotel staff can recommend trusted drivers for late-night returns.',
  },
  {
    title: 'Local Customs and PDA',
    icon: Heart,
    content:
      'Public displays of affection are frowned upon regardless of venue. While rooftop bars and nightclubs are more relaxed, maintain cultural awareness. Overintoxication in public is seen as disrespectful. Tipping bar staff from 10-20 MAD per round is appreciated. Some local bars are predominantly male spaces; international hotel venues are more mixed and comfortable for all travelers.',
  },
];

/* ================================================================
   DATA: NIGHTLIFE COST BREAKDOWN
   ================================================================ */

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

/* ================================================================
   DATA: TIMING YOUR NIGHT
   ================================================================ */

const nightTiming = [
  {
    period: 'Sunset (6:00 - 8:00 PM)',
    icon: Sunset,
    description:
      'Golden hour drinks on a rooftop bar or beach club. Marrakech rooftops, Essaouira\'s Taros Cafe, and Agadir beach bars are at their most magical during this window. Arrive early to claim the best seats; popular terraces fill up 30 minutes before sunset.',
  },
  {
    period: 'Evening (8:00 - 10:30 PM)',
    icon: Coffee,
    description:
      'Dinner and cocktails at restaurant-bars. Many venues offer live music during this window. Moroccan diners eat late, so restaurants buzz at 9:00-10:00 PM. Wine bars and cocktail lounges peak during this period. Cultural shows and belly dance performances start at most venues around 9:00 PM.',
  },
  {
    period: 'Late Night (10:30 PM - 1:00 AM)',
    icon: Moon,
    description:
      'Nightclubs start filling around 11:00 PM. DJ sets kick off at most venues. The transition from bar to club typically happens around midnight. Some clubs waive or reduce cover charges before 11:00 PM. Jemaa el-Fnaa food stalls wind down around midnight.',
  },
  {
    period: 'Peak Hours (1:00 - 4:00 AM)',
    icon: Flame,
    description:
      'The main event. From 1:00 AM, clubs in Marrakech, Casablanca, and Agadir hit full energy. International DJs at venues like Theatro perform their prime sets. Dance floors are packed and the atmosphere is electric. This is when Morocco\'s party scene truly comes alive.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoNightlifePage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-marrakech.webp)' }}
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
            From lantern-lit rooftop bars above ancient medinas to world-class nightclubs
            with international DJs and Gnawa rhythms on Atlantic terraces. The complete guide
            to going out after dark in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco After Dark: What to Expect
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s nightlife defies the expectations most visitors arrive with. This is a
                Muslim-majority country with deep religious traditions, but it is also a place where
                rooftop cocktail bars glow above ancient medinas, world-class DJs play to packed
                nightclubs until 4:00 AM, and Gnawa musicians channel centuries of spiritual tradition
                through hypnotic live performances. The scene is growing more sophisticated every year,
                and genuinely different from anything in Europe or the Americas.
              </p>
              <p>
                Each city offers a different after-dark experience. Marrakech is the glamour capital
                with rooftop bars and mega-clubs. Casablanca has the most cosmopolitan scene with wine
                bars, jazz clubs, and underground DJ nights. Tangier channels bohemian literary heritage
                through atmospheric bars overlooking the Mediterranean. Agadir is beach-party energy.
                Essaouira is the soul of Morocco&apos;s music scene. And Rabat surprises with refined
                jazz bars and wine lounges. This guide covers venues, alcohol laws, dress codes, safety
                tips, late-night dining, Jemaa el-Fnaa after dark, cultural shows, costs, and FAQs.
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
            Every Moroccan city has its own after-dark personality. Here is what to expect in each major destination.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />Venue availability and prices vary by season. Seasonal pricing can change during peak months.
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
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {city.description}
                      </p>
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

      {/* ── Rooftop Bars ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Rooftop Bars in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Lantern-lit terraces above ancient medinas, mountain sunsets, and cocktails crafted
            with local ingredients. The signature Morocco nightlife experience.
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

      {/* ── Jemaa el-Fnaa at Night ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lamp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Jemaa el-Fnaa After Dark
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s most famous night spectacle requires no drinks. The UNESCO-recognized
            square transforms every evening into an open-air carnival of food, music, and performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jemaaExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.title} className="card-moroccan p-5">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <ExpIcon className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              <strong>Timing tip:</strong> Jemaa el-Fnaa peaks between 8:00 and 11:00 PM. Arrive
              before sunset to watch the transformation from daytime market to nighttime spectacle.
              The food stalls wind down around midnight. Pair this with a rooftop bar visit at Le
              Salama or Cafe de France for the overhead view before descending into the square itself.
            </p>
          </div>
        </div>
      </section>

      {/* ── Live Music & Gnawa ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Volume2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Live Music &amp; Cultural Shows
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">One of the most authentic and captivating live music scenes in Africa and the Arab world.</p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Music className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Gnawa Music
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                Gnawa is Morocco&apos;s most distinctive musical tradition. Originating from
                sub-Saharan African spiritual practices blended with Berber and Sufi traditions,
                Gnawa features hypnotic rhythms played on the guembri (a three-stringed bass lute),
                krakebs (iron castanets), and call-and-response chanting that can last for hours.
                The best places to experience live Gnawa are Essaouira (the spiritual home), Marrakech
                (Jemaa el-Fnaa and riad performances), and the annual Gnawa World Music Festival in June.
              </p>
              <div className="flex items-start gap-1.5 p-2 bg-[var(--surface-muted)] rounded-lg text-xs">
                <Award className="w-3 h-3 mt-0.5 text-[var(--color-gold)] shrink-0" />
                <span className="text-[var(--text-secondary)] italic">
                  The Gnawa World Music Festival in Essaouira (June) draws 500,000+ visitors
                  for free outdoor concerts. One of the most extraordinary music events in Africa.
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
                  tradition is best experienced in Fes and Tetouan. Several upscale restaurants in the
                  Fes medina feature live Andalusian ensembles during dinner. The sacred music festival
                  in Fes (June) is a world-renowned celebration of this art form.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Music className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Modern DJ &amp; Electronic Scene
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco has a growing electronic music scene centered in Marrakech and Casablanca.
                  Theatro Marrakech hosts international DJs from Europe and the Middle East. The Oasis
                  Festival near Marrakech has become one of North Africa&apos;s premier electronic music
                  events. Local Moroccan DJs blend traditional rhythms with house, techno, and Afrobeats,
                  creating a sound unique to the region.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Dinner Shows &amp; Cultural Performances
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Several Marrakech restaurants combine dinner with live entertainment. Comptoir Darna
                  features belly dance and live music nightly. Chez Ali offers a large-scale fantasia
                  show with horseback acrobatics, fire dancers, and traditional musicians under a tent
                  complex outside the city (from 400 MAD including dinner). These shows are tourist-oriented
                  but genuinely entertaining. Seasonal pricing can change during peak months.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  Jazz &amp; Contemporary
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Rabat and Casablanca have developing jazz scenes. The Mawazine festival in Rabat (June)
                  brings international headliners and draws millions of attendees, making it one of the
                  largest music festivals on the planet. Throughout the year, hotel bars in both cities
                  host live jazz evenings. Villa Mandarine in Rabat and L&apos;Atelier du Vin in
                  Casablanca are reliable spots for weekend jazz sets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timing Your Night ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Go Out: Timing Your Night
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan nightlife follows its own rhythm. Understanding the timing is key to getting the best experience.
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

      {/* ── Late-Night Dining ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Late-Night Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco eats late. Dinner at 10:00 PM is normal, and finding food after midnight is easier than in most European cities.
          </p>

          <div className="space-y-6">
            {lateNightDining.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    <CityIcon className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                    {city.city}
                  </h3>
                  <div className="space-y-2">
                    {city.spots.map((spot, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {spot}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Alcohol Laws & Cultural Considerations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How Much Does a Night Out Cost?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic prices for drinks, cover charges, and transport across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />Prices in MAD. 1 USD ~ 10 MAD, 1 EUR ~ 11 MAD. Seasonal pricing can change.
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
                taxis (insist the meter runs). Avoid unofficial cars and never accept rides from
                strangers. Late-night fares are higher but should still be metered. Save your
                hotel&apos;s phone number and address in your phone.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Manage Your Cash
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry only the cash you plan to spend. Leave passports, extra cards, and large amounts
                in your hotel safe. Many upscale bars and clubs accept credit cards, but smaller venues
                and taxis are cash-only. ATMs are available in Gueliz (Marrakech), Maarif (Casablanca),
                and the Ville Nouvelle of other cities. Avoid using ATMs in quiet or poorly lit areas
                after dark.
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
                night. Medina streets can be confusing and poorly lit after dark. If separated from your
                group, head to the nearest hotel or well-lit commercial area and call a taxi. International
                hotel bars are safe havens if you feel uncomfortable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Watch Your Drinks
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                As in any nightlife destination, never leave drinks unattended and always watch your
                glass being poured. If you feel unusually ill after a single drink, seek help immediately.
                Established hotel bars and reputable nightclubs are the safest environments. Drink
                responsibly; public intoxication is culturally frowned upon and can attract unwanted
                attention.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Know Key Phone Numbers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Save these before going out: Tourist Police (dial 19), Ambulance (15), and your
                hotel&apos;s front desk number. Morocco&apos;s Tourist Police are trained to assist
                visitors and operate in all major tourist areas. They are generally helpful and many
                speak French and some English. Your hotel concierge is also an excellent resource and
                can intervene on your behalf if needed.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Know the Local Laws
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cannabis (kif) is illegal in Morocco despite its visibility in some areas. Possession
                can result in serious legal consequences. Public drunkenness can lead to police attention.
                Same-sex relationships are criminalized under Moroccan law, and LGBTQ+ travelers should
                exercise discretion in all public settings. The legal drinking age is 18, though many
                premium clubs enforce a minimum of 21 on busy nights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── First Night Out ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect on Your First Night Out
          </h2>
          <div className="prose-moroccan mt-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s nightlife operates on a later schedule than most Western countries.
                Moroccans eat dinner late, often at 9:00 or 10:00 PM, and the bar scene does not
                begin until 10:00-11:00 PM. Nightclubs remain nearly empty until midnight and hit
                peak energy between 1:00 and 3:00 AM. If you arrive at a club at 10:00 PM expecting
                it to be full, you will be the only person on the dance floor. Start at a rooftop
                bar or cocktail lounge before transitioning to clubs later in the night.
              </p>
              <p>
                Expect door policies at popular clubs: bouncers may refuse entry based on dress code
                or capacity. Arriving with a hotel-booked reservation or as part of a mixed group
                makes entry smoother. Cover charges typically include one drink. Smoking is common in
                many bars and some club areas. If you prefer smoke-free, rooftop terraces and hotel
                bars are your best bet. The energy in Moroccan nightlife is genuinely warm. Moroccans
                are naturally hospitable, and you may find yourself invited to join tables or drawn
                into animated conversations. Embrace the spontaneity; it is part of the culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-restaurants" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Restaurants
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best restaurants in every major city, from street food to fine dining.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-riads-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Riads Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Find the perfect riad with rooftop terraces, courtyards, and authentic Moroccan style.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-safety-tips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Safety Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential safety advice for travelers in Morocco, from scams to transport.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Marrakech: medina, souks, riads, restaurants, and day trips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Music className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Experience Morocco After Dark?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From rooftop cocktails above the medina to Gnawa rhythms on the Atlantic coast.
            Start planning your nights out today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morocco-marrakech" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold">
              <Star className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link href="/morocco-restaurants" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold">
              <UtensilsCrossed className="w-4 h-4" />
              Restaurant Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
