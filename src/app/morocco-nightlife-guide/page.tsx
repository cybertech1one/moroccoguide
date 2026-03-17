import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Moon,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Music,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  GlassWater,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  Wine,
  Flame,
  Eye,
  Calendar,
  Volume2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs & Live Music by City',
  description:
    'Complete guide to Morocco\'s nightlife scene. From Marrakech rooftop bars (from 80 MAD cocktails) to Casablanca clubs, Tangier jazz bars, and Essaouira gnawa music. Alcohol rules, dress codes, safety tips, and cover charges across 6 cities.',
  keywords: [
    'Morocco nightlife guide',
    'Marrakech nightlife',
    'Casablanca clubs',
    'Tangier bars',
    'Essaouira live music',
    'Agadir nightlife',
    'Fes rooftop bars',
    'Morocco bars and clubs',
    'Jemaa el-Fnaa at night',
    'Rick\'s Cafe Casablanca',
    'gnawa music Morocco',
    'Morocco dress code nightlife',
    'alcohol in Morocco',
    'Morocco club prices',
    'Gueliz bars Marrakech',
    'Corniche clubs Casablanca',
    'Morocco cultural shows',
    'Morocco nightlife safety',
    'Ramadan nightlife Morocco',
    'best bars Morocco 2026',
    'Morocco live music venues',
    'rooftop bars Morocco',
  ],
  openGraph: {
    title: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs & Live Music by City',
    description:
      'Discover Morocco\'s vibrant nightlife scene. From rooftop cocktails at 80 MAD to world-class clubs, live gnawa music, and cultural evenings across 6 cities.',
    url: `${BASE_URL}/morocco-nightlife-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-jemaa-elfnaa-night.webp`,
        width: 1200,
        height: 630,
        alt: 'Jemaa el-Fnaa square in Marrakech illuminated at night with food stalls, crowds, and Koutoubia mosque in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs & Live Music',
    description:
      'From Marrakech rooftop bars to Casablanca clubs and Essaouira gnawa sessions. Complete nightlife guide with prices, dress codes, and safety tips.',
    images: [`${BASE_URL}/images/hero-jemaa-elfnaa-night.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-nightlife-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-nightlife-guide`,
  name: 'Morocco Nightlife Guide 2026 | Best Bars, Clubs & Live Music by City',
  description:
    'Complete guide to Morocco\'s nightlife scene across 6 cities. Bars, clubs, live music, cultural shows, alcohol rules, dress codes, safety tips, and prices.',
  url: `${BASE_URL}/morocco-nightlife-guide`,
  image: `${BASE_URL}/images/hero-jemaa-elfnaa-night.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
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

/* ═══════════════════════════════════════════════════════════════
   DATA: NIGHTLIFE BY CITY
   ═══════════════════════════════════════════════════════════════ */

const nightlifeByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-jemaa-elfnaa-night.webp',
    vibe: 'Electric, diverse, world-famous',
    bestNights: 'Thursday, Friday, Saturday',
    description:
      'Marrakech is Morocco\'s undisputed nightlife capital. The city transforms after dark, from the hypnotic chaos of Jemaa el-Fnaa to the sophisticated rooftop bars of Gueliz and the high-energy clubs of Hivernage. Whether you want cultural performances, craft cocktails, or dancing until dawn, Marrakech delivers on every front.',
    venues: [
      {
        name: 'Jemaa el-Fnaa at Night',
        type: 'Open-Air Spectacle',
        icon: Flame,
        price: 'Free to watch, food stalls from 30 MAD',
        description:
          'The world\'s greatest open-air show. As the sun sets, Jemaa el-Fnaa erupts with hundreds of food stalls, storytellers, musicians, Gnawa performers, snake charmers, and acrobats. The smoke, the drums, the crowds under the lantern light. There is nothing else like it on earth.',
        highlights: ['Food stalls from 30 MAD', 'Gnawa musicians', 'Henna artists', 'Storytellers and acrobats'],
      },
      {
        name: 'Gueliz Bar District',
        type: 'Bar District',
        icon: GlassWater,
        price: 'Cocktails from 80 MAD',
        description:
          'The modern Gueliz neighborhood is Marrakech\'s most concentrated bar district. Along Avenue Mohammed V and the surrounding streets, you will find a mix of rooftop terraces, wine bars, cocktail lounges, and late-night spots. The crowd is a blend of affluent Moroccans, expats, and tourists. Dress smart-casual for most venues.',
        highlights: ['Barometre cocktail bar', 'Le Comptoir Darna', 'Kechmara lounge', 'Smart-casual dress code'],
      },
      {
        name: 'Rooftop Bars',
        type: 'Rooftop Lounges',
        icon: Moon,
        price: 'Cocktails from 80 MAD, wine from 60 MAD',
        description:
          'Marrakech\'s rooftop bar scene is among the best in Africa. With views over the medina rooftops to the Atlas Mountains and the Koutoubia Mosque, these terraces offer an unforgettable backdrop. Many are attached to riads or boutique hotels. The golden hour before sunset is the prime time.',
        highlights: ['Nomad restaurant terrace', 'El Fenn rooftop', 'La Terrasse des Epices', 'Sunset views over medina'],
      },
      {
        name: 'Hivernage Clubs',
        type: 'Nightclubs',
        icon: Music,
        price: 'Entry from 150 MAD, drinks from 100 MAD',
        description:
          'The Hivernage district, near the Royal Theatre, is where Marrakech\'s club scene lives. Theatro, housed in a former theatre, is the city\'s most iconic club with international DJs. Pacha Marrakech brings the Ibiza brand to Morocco. These clubs run from midnight to 4-5 AM and attract a well-dressed crowd.',
        highlights: ['Theatro nightclub', 'Pacha Marrakech', 'International DJs', 'Open midnight to 5 AM'],
      },
      {
        name: 'Live Music Venues',
        type: 'Live Music',
        icon: Volume2,
        price: 'Entry from 50 MAD, some venues free with dinner',
        description:
          'From intimate riad concerts to larger venues, Marrakech has a growing live music scene. Many upscale restaurants feature live Andalusian or Gnawa music during dinner. Le Comptoir Darna combines dinner with belly dancing and live bands. Several riads host private music evenings during peak season.',
        highlights: ['Le Comptoir Darna', 'Riad live music evenings', 'Andalusian orchestras', 'Gnawa fusion bands'],
      },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/photo-casablanca-corniche.webp',
    vibe: 'Cosmopolitan, upscale, after-work culture',
    bestNights: 'Thursday, Friday, Saturday',
    description:
      'As Morocco\'s economic capital and largest city, Casablanca has the most cosmopolitan nightlife in the country. The after-work bar culture is strong, the Corniche beachfront comes alive on weekends, and the city\'s clubs cater to a well-heeled crowd. Casablanca is where Moroccan nightlife feels most international.',
    venues: [
      {
        name: 'Rick\'s Cafe',
        type: 'Iconic Bar-Restaurant',
        icon: Crown,
        price: 'Cocktails from 100 MAD, dinner from 250 MAD',
        description:
          'Inspired by the 1942 film Casablanca, Rick\'s Cafe is a pilgrimage for movie lovers. The restored riad features a courtyard, piano bar, and Art Deco interiors straight from the film. Live jazz piano every evening. The cocktails are good, the atmosphere is magical, and the courtyard is lit with hundreds of candles.',
        highlights: ['Live jazz piano nightly', 'Film-inspired Art Deco interiors', 'Courtyard dining', 'Advance booking essential'],
      },
      {
        name: 'Corniche Clubs',
        type: 'Beachfront Clubs',
        icon: Music,
        price: 'Entry from 200 MAD, drinks from 120 MAD',
        description:
          'The Ain Diab Corniche along the Atlantic coast is Casablanca\'s premier nightlife strip. A string of beach clubs, restaurants, and nightclubs line the waterfront. On summer weekends, the energy rivals anything in the Mediterranean. Sky 28, Maison B, and L\'Arganier are popular choices.',
        highlights: ['Sky 28 rooftop', 'Maison B beach club', 'Summer weekend peak', 'Atlantic Ocean views'],
      },
      {
        name: 'Ain Diab District',
        type: 'Entertainment District',
        icon: Sparkles,
        price: 'Varies by venue',
        description:
          'Beyond the Corniche clubs, the Ain Diab neighborhood has a dense concentration of restaurants, shisha lounges, and late-night cafes. It is where young Casablancais go to see and be seen. The boulevard comes alive around 10 PM and the energy builds through the night. Parking is chaotic, so take a taxi.',
        highlights: ['Shisha lounges', 'Late-night cafes', 'Young local crowd', 'Takes off after 10 PM'],
      },
      {
        name: 'Upscale Lounges',
        type: 'Cocktail Lounges',
        icon: Gem,
        price: 'Cocktails from 100 MAD, champagne from 300 MAD per glass',
        description:
          'Casablanca\'s luxury hotel bars and standalone cocktail lounges serve Morocco\'s most sophisticated drinks. The bar at the Four Seasons, Le Cabestan ocean-view lounge, and the rooftop at the Kenzi Tower are where the business elite and international set mingle. Dress code is strictly enforced.',
        highlights: ['Four Seasons bar', 'Le Cabestan lounge', 'Kenzi Tower rooftop', 'Strict smart dress code'],
      },
      {
        name: 'Rooftop Bars',
        type: 'Rooftop Terraces',
        icon: Moon,
        price: 'Cocktails from 90 MAD, wine from 70 MAD',
        description:
          'Casablanca\'s modern skyline makes for dramatic rooftop drinking. The city has embraced the rooftop trend with several high-rise hotel bars and standalone venues offering panoramic views of the Hassan II Mosque and the Atlantic. Most rooftops are busiest on Thursday and Friday evenings after work.',
        highlights: ['Hassan II Mosque views', 'Atlantic Ocean backdrop', 'After-work Thursday crowd', 'Reservations recommended'],
      },
    ],
  },
  {
    city: 'Tangier',
    icon: Waves,
    image: '/images/hero-tangier-bay.webp',
    vibe: 'Bohemian, literary, artistic',
    bestNights: 'Friday, Saturday',
    description:
      'Tangier\'s nightlife carries echoes of its legendary past. This was the city of Paul Bowles, William S. Burroughs, and the Beat Generation. Today, the bohemian spirit endures in the jazz bars of the medina, the literary cafes of the Petit Socco, and the rooftop terraces overlooking the Strait of Gibraltar. Tangier\'s nightlife is more intimate and cultural than flashy.',
    venues: [
      {
        name: 'Petit Socco Cafes',
        type: 'Historic Cafes',
        icon: BookOpen,
        price: 'Mint tea from 15 MAD, coffee from 20 MAD',
        description:
          'The tiny Petit Socco square in the medina was the literary heart of Tangier in the 1950s and 60s. Cafe Tingis and Gran Cafe Central are where Bowles and Burroughs held court. Today, these cafes still buzz late into the night with conversation, chess players, and the occasional live musician. No alcohol, but the atmosphere is intoxicating.',
        highlights: ['Cafe Tingis', 'Gran Cafe Central', 'Literary history', 'No alcohol but vibrant atmosphere'],
      },
      {
        name: 'Rooftop Terraces',
        type: 'Rooftop Bars',
        icon: Moon,
        price: 'Cocktails from 80 MAD, wine from 60 MAD',
        description:
          'Tangier\'s rooftop terraces offer views that no other Moroccan city can match: the meeting point of the Atlantic and Mediterranean, the lights of Spain across the strait, and the dramatic medina below. El Morocco Club, with its 1930s glamour, is the crown jewel. Dar Nour and Nord-Pinus Tanger also have stunning terraces.',
        highlights: ['El Morocco Club', 'View of Spain across strait', 'Dar Nour terrace', 'Sunset cocktail hour'],
      },
      {
        name: 'Jazz Bars',
        type: 'Live Music',
        icon: Music,
        price: 'Entry free to from 50 MAD, drinks from 70 MAD',
        description:
          'Tangier has Morocco\'s best jazz scene, rooted in the city\'s international heritage. Small venues in the medina and kasbah host live jazz, blues, and fusion acts. The annual Tanjazz Festival (September) brings international performers. Year-round, El Morocco Club and several hotel bars feature live jazz evenings.',
        highlights: ['Tanjazz Festival in September', 'El Morocco Club jazz nights', 'Intimate medina venues', 'International heritage'],
      },
      {
        name: 'Cinema Heritage',
        type: 'Cultural Entertainment',
        icon: Eye,
        price: 'Cinema tickets from 40 MAD',
        description:
          'Tangier has a deep cinema heritage. The restored Cinema Rif on the Grand Socco screens art house and classic films, often with outdoor screenings in summer. Several film-themed bars and cafes have opened in recent years. The Tangier International Film Festival brings added energy each year.',
        highlights: ['Cinema Rif screenings', 'Art house films', 'Summer outdoor screenings', 'Film-themed cafes'],
      },
      {
        name: 'Beach Clubs',
        type: 'Beach Nightlife',
        icon: Waves,
        price: 'Entry from 100 MAD on weekends, drinks from 80 MAD',
        description:
          'The beaches east of the city center, particularly around the new Tangier Bay development, have modern beach clubs that come alive in summer. Pool parties, DJ sets, and sunset sessions run from June through September. The scene is newer and less established than Casablanca\'s Corniche but growing fast.',
        highlights: ['Summer season June-September', 'Pool parties', 'DJ sunset sessions', 'Growing scene'],
      },
    ],
  },
  {
    city: 'Essaouira',
    icon: Music,
    image: '/images/hero-essaouira-ramparts.webp',
    vibe: 'Laid-back, musical, bohemian',
    bestNights: 'Friday, Saturday (year-round), nightly in summer',
    description:
      'Essaouira does not do nightclubs. What it does, better than anywhere else in Morocco, is live music. The spiritual home of Gnawa music, this wind-swept coastal town comes alive with the sound of guembri, krakeb, and call-and-response singing. The nightlife here is organic, spontaneous, and deeply musical.',
    venues: [
      {
        name: 'Live Gnawa Music',
        type: 'Live Music',
        icon: Music,
        price: 'Free street performances, venues from 50 MAD with a drink',
        description:
          'Gnawa music is to Essaouira what jazz is to New Orleans. You will hear it in the streets, in restaurants, and at dedicated music venues. The annual Gnaoua World Music Festival (June) transforms the entire town, but year-round you can find live Gnawa sessions, especially on weekends. The trance-like rhythms are unforgettable.',
        highlights: ['Gnaoua Festival in June', 'Street performances nightly', 'Restaurant live music', 'Guembri and krakeb instruments'],
      },
      {
        name: 'Beach Bonfires',
        type: 'Beach Gatherings',
        icon: Flame,
        price: 'Free (bring your own refreshments)',
        description:
          'On warm evenings, particularly in summer, spontaneous gatherings form on the beach south of the medina. Musicians bring instruments, people bring blankets and refreshments, and bonfires dot the shoreline. These are not organized events but organic Essaouira moments. Ask locals or fellow travelers where things are happening.',
        highlights: ['Spontaneous gatherings', 'Bring your own supplies', 'Summer evenings best', 'South of medina beach'],
      },
      {
        name: 'Taros Cafe',
        type: 'Restaurant Bar',
        icon: GlassWater,
        price: 'Cocktails from 70 MAD, wine from 50 MAD, tapas from 60 MAD',
        description:
          'The most famous bar in Essaouira, occupying a prime spot on Place Moulay Hassan with a rooftop terrace overlooking the port and the Atlantic. Taros hosts live music most evenings in season, serves solid cocktails and Moroccan wine, and has an art gallery downstairs. The rooftop at sunset is essential Essaouira.',
        highlights: ['Rooftop ocean views', 'Live music evenings', 'Art gallery downstairs', 'Place Moulay Hassan location'],
      },
      {
        name: 'Wind-Down Bars',
        type: 'Relaxed Bars',
        icon: Waves,
        price: 'Beer from 35 MAD, wine from 50 MAD, cocktails from 70 MAD',
        description:
          'Essaouira\'s bar scene matches the town\'s pace: relaxed, unpretentious, and friendly. Small bars in the medina and along the ramparts serve Moroccan wines, cold beers, and simple cocktails. The crowd is a mix of surfers, artists, backpackers, and long-term expats. No dress codes, no attitude, just good vibes.',
        highlights: ['No dress codes', 'Medina and rampart locations', 'Surfer and artist crowd', 'Moroccan wine selection'],
      },
    ],
  },
  {
    city: 'Agadir',
    icon: Waves,
    image: '/images/hero-agadir.webp',
    vibe: 'Resort-style, beachfront, tourist-friendly',
    bestNights: 'Thursday through Saturday',
    description:
      'Agadir is Morocco\'s most tourist-oriented resort city, rebuilt after the devastating 1960 earthquake. Its nightlife reflects this: beachfront bars, hotel entertainment, and a handful of clubs along the waterfront. It is also the most relaxed city in Morocco regarding alcohol. The atmosphere is casual and vacation-oriented.',
    venues: [
      {
        name: 'Beachfront Bars',
        type: 'Beach Bars',
        icon: GlassWater,
        price: 'Beer from 30 MAD, cocktails from 70 MAD',
        description:
          'Agadir\'s long beach promenade is lined with bars and restaurants that serve drinks well into the night. The atmosphere is relaxed and family-friendly earlier in the evening, transitioning to a more lively bar scene after 10 PM. Many venues have outdoor terraces with Atlantic views and live music on weekends.',
        highlights: ['Atlantic views', 'Relaxed atmosphere', 'Live music weekends', 'Promenade location'],
      },
      {
        name: 'Souk El Had Night Market',
        type: 'Night Market',
        icon: Flame,
        price: 'Food from 20 MAD, shopping varies',
        description:
          'Morocco\'s largest souk stays active into the evening. While the main market closes around sunset, the surrounding streets come alive with food vendors, juice stalls, and a vibrant street atmosphere. Not nightlife in the traditional sense, but an essential Agadir evening experience.',
        highlights: ['Largest souk in Morocco', 'Evening food vendors', 'Fresh juice stalls from 10 MAD', 'Vibrant street atmosphere'],
      },
      {
        name: 'Resort Nightlife',
        type: 'Hotel Entertainment',
        icon: Crown,
        price: 'Drinks from 60 MAD, entertainment often included for guests',
        description:
          'Agadir\'s large resort hotels offer their own evening entertainment: live music, themed dinner shows, poolside bars, and in-house clubs. The Sofitel, Tikida Beach, and RIU hotels are known for their evening programs. Most are open to non-guests, though some events are exclusive. The resort scene is polished but predictable.',
        highlights: ['Sofitel evening programs', 'Tikida Beach hotel bar', 'Open to non-guests at most', 'Polished resort atmosphere'],
      },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    vibe: 'Cultural, refined, intimate',
    bestNights: 'Thursday, Friday',
    description:
      'Fes is Morocco\'s spiritual and intellectual capital, and its nightlife reflects this character. You will not find thumping nightclubs here. Instead, Fes offers rooftop dinners with medina views, cocktails in restored riads, and cultural evenings with Andalusian music and Sufi performances. The nightlife is quieter but deeply atmospheric.',
    venues: [
      {
        name: 'Rooftop Dinners',
        type: 'Rooftop Dining',
        icon: Moon,
        price: 'Dinner from 200 MAD, drinks from 70 MAD',
        description:
          'The defining Fes evening experience. Dozens of riads and restaurants offer rooftop terraces overlooking the medina. As night falls, the medina glows with thousands of lights, the call to prayer echoes across the city, and the scent of woodsmoke rises. Riad Fes, Palais Faraj, and Dar Roumana are among the finest rooftop dining experiences.',
        highlights: ['Riad Fes rooftop', 'Palais Faraj panoramic views', 'Dar Roumana dining', 'Medina illuminated at night'],
      },
      {
        name: 'Riad Cocktails',
        type: 'Riad Bars',
        icon: GlassWater,
        price: 'Cocktails from 80 MAD, Moroccan wine from 60 MAD',
        description:
          'Several upscale riads in the medina have licensed bars serving cocktails and Moroccan wines to both guests and visitors. The experience of sipping a drink in a candlelit courtyard surrounded by centuries-old architecture is uniquely Fes. Riad Fes, Palais Amani, and Riad Laaroussa all have well-regarded bars.',
        highlights: ['Candlelit courtyard settings', 'Centuries-old architecture', 'Open to non-guests', 'Reservation recommended'],
      },
      {
        name: 'Cultural Evenings',
        type: 'Traditional Music',
        icon: Music,
        price: 'From 150 MAD for dinner with music, dedicated concerts from 100 MAD',
        description:
          'Fes is the heartland of Andalusian classical music, and several venues offer evenings of traditional performance. The Fes Festival of World Sacred Music (June) is world-renowned. Year-round, select riads and cultural centers host Sufi music, malhun poetry recitals, and Andalusian orchestras. These are intimate, moving experiences.',
        highlights: ['Sacred Music Festival in June', 'Andalusian orchestras', 'Sufi music performances', 'Malhun poetry recitals'],
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ALCOHOL RULES & AVAILABILITY
   ═══════════════════════════════════════════════════════════════ */

const alcoholRules = [
  {
    topic: 'Legal Status',
    icon: ShieldCheck,
    description:
      'Alcohol is legal in Morocco and widely available in licensed establishments. Morocco produces its own wines (Meknes and Boulaouane regions are well-regarded), beers (Flag Speciale, Casablanca, Stork), and even spirits. However, as a Muslim-majority country, alcohol is consumed more discreetly than in Europe.',
  },
  {
    topic: 'Where to Buy',
    icon: MapPin,
    description:
      'Alcohol is sold in licensed bars, restaurants, hotels, and off-license shops (identifiable by their plain facades and often no signage). Major supermarkets like Carrefour, Marjane, and Acima have alcohol sections. In tourist areas, availability is easy. In conservative or rural areas, options are limited.',
  },
  {
    topic: 'Ramadan Restrictions',
    icon: Calendar,
    description:
      'During Ramadan, most bars and clubs close or operate with significantly reduced hours. Licensed hotel bars may still serve alcohol to non-Muslim guests. Nightclubs typically close entirely for the month. Restaurants in tourist areas may serve alcohol discreetly. Respect the holy month by not drinking in public.',
  },
  {
    topic: 'Pricing',
    icon: DollarSign,
    description:
      'A local beer (Flag Speciale) costs from 25 MAD in a bar, from 15 MAD in a shop. Imported beer from 40 MAD. Moroccan wine from 50 MAD per glass, from 150 MAD per bottle in restaurants. Cocktails from 70-120 MAD depending on the venue. Spirits from 60 MAD. Prices are higher in tourist areas and luxury venues.',
  },
  {
    topic: 'Public Drinking',
    icon: AlertTriangle,
    description:
      'Drinking alcohol in public spaces (streets, parks, beaches) is illegal and socially unacceptable. Always drink in licensed establishments. Being visibly intoxicated in public can lead to problems with police. Hotel rooms and private spaces are fine. Respect local sensibilities, especially outside tourist areas.',
  },
  {
    topic: 'Moroccan Wines to Try',
    icon: Wine,
    description:
      'Morocco has a surprisingly good wine industry. Try Chateau Roslane (red and rose), Domaine de la Zouina, Volubilia, and Medaillon from the Meknes-Fes region. The Boulaouane Gris rose is a crowd-pleaser. Prices in restaurants start from 150 MAD per bottle for decent quality. Wine shops in Gueliz (Marrakech) have the best selection.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRESS CODES BY VENUE TYPE
   ═══════════════════════════════════════════════════════════════ */

const dressCodes = [
  {
    venue: 'Rooftop Bars',
    code: 'Smart Casual',
    icon: Moon,
    description:
      'Collared shirts or stylish tops, closed-toe shoes preferred, clean jeans or chinos acceptable. No sportswear, flip-flops, or beachwear. Women have more flexibility. Most rooftop bars will turn away guests in shorts and sandals.',
  },
  {
    venue: 'Nightclubs',
    code: 'Smart / Dressy',
    icon: Music,
    description:
      'Clubs in Marrakech and Casablanca enforce strict dress codes. Men: dress shoes, tailored trousers, collared or designer shirt. No trainers, no jeans at premium clubs. Women: cocktail attire. Door staff have final say and some venues are selective about entry.',
  },
  {
    venue: 'Hotel Bars',
    code: 'Smart Casual',
    icon: Crown,
    description:
      'Similar to rooftop bars. Neat, presentable appearance expected. Luxury hotel bars (Four Seasons, La Mamounia, Royal Mansour) lean toward the dressier end. Mid-range hotel bars are more relaxed.',
  },
  {
    venue: 'Beach Clubs',
    code: 'Resort Casual / Dressy After Dark',
    icon: Waves,
    description:
      'Daytime is casual: swimwear, cover-ups, sandals. After sunset, most beach clubs shift to smart casual. Saturday night beach club events in Casablanca and Agadir expect a dressier standard, especially for women.',
  },
  {
    venue: 'Medina Bars & Cafes',
    code: 'Casual',
    icon: GlassWater,
    description:
      'The most relaxed dress codes. Clean, presentable clothing is sufficient. Essaouira and Tangier medina bars are particularly laid-back. Avoid overly revealing clothing out of respect for the neighborhood, as medina bars are often surrounded by residential areas.',
  },
  {
    venue: 'Cultural Evenings & Shows',
    code: 'Smart Casual to Formal',
    icon: BookOpen,
    description:
      'For cultural performances in riads, restaurants, or festival venues, smart casual is the minimum. For formal concerts during festivals like the Fes Sacred Music Festival, business casual or smart attire is appropriate. When in doubt, err on the slightly dressier side.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    tip: 'Plan Your Transport Home',
    icon: ShieldCheck,
    description:
      'Always arrange your return transport before going out. Petit taxis operate late but become scarce after 1 AM. Save your riad or hotel address in your phone in Arabic and French. Ride-hailing apps like inDrive and Careem work in major cities. Agree on the taxi fare before getting in, or insist on the meter.',
  },
  {
    tip: 'Moderate Your Drinking',
    icon: AlertTriangle,
    description:
      'Being visibly intoxicated in public is both illegal and culturally inappropriate in Morocco. Pace yourself. The combination of heat, unfamiliar food, and altitude (in cities like Marrakech at 450m) can intensify the effects of alcohol. Drink water between alcoholic beverages.',
  },
  {
    tip: 'Watch Your Belongings',
    icon: Eye,
    description:
      'Crowded nightlife areas attract pickpockets. Keep your phone, wallet, and passport secure. Use a front pocket or cross-body bag. Leave valuables in your riad or hotel safe. Do not flash expensive jewelry or large amounts of cash. Be especially vigilant in Jemaa el-Fnaa and around club entrances.',
  },
  {
    tip: 'Stay in Groups',
    icon: Users,
    description:
      'Especially in unfamiliar cities and late at night, stay with your group. Solo travelers should stick to well-lit, populated venues and avoid walking through empty medina alleyways alone after midnight. The medinas can be disorienting at night and GPS is unreliable in narrow passages.',
  },
  {
    tip: 'Trust Your Instincts',
    icon: ShieldCheck,
    description:
      'If a venue, street, or situation feels uncomfortable, leave. Decline drinks from strangers. Be cautious of overly friendly strangers near nightlife areas who may be touts or scam artists. Licensed, established venues with reviews are always the safest choice.',
  },
  {
    tip: 'Know Emergency Numbers',
    icon: Info,
    description:
      'Police: 19 (urban), 177 (Gendarmerie outside cities). Fire/Ambulance: 15. Tourist Police are stationed in major tourist areas of Marrakech, Fes, and Tangier. Save your country\'s embassy number. Most hotel and riad staff can help in an emergency.',
  },
  {
    tip: 'Be Aware of Local Laws',
    icon: BookOpen,
    description:
      'Cannabis (kif) is illegal despite its visibility. Possession can result in arrest. Public drunkenness is a legal offense. Photographing police or military installations is prohibited. Morocco\'s legal system differs significantly from Western countries. Respect the law.',
  },
  {
    tip: 'Women\'s Safety',
    icon: Users,
    description:
      'Solo women should exercise extra caution at nightlife venues. Stick to well-known, reputable bars and clubs. Verbal harassment can occur, particularly in and around less regulated venues. Many upscale venues are well-managed and safe. Mixed-gender groups generally encounter fewer issues.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Local beer (Flag Speciale, bar)', price: 'From 25 MAD', note: 'Available at most licensed bars' },
  { item: 'Imported beer (Heineken, bar)', price: 'From 40 MAD', note: 'Widely available in tourist areas' },
  { item: 'Local beer (shop)', price: 'From 15 MAD', note: 'Off-license shops and supermarkets' },
  { item: 'Moroccan wine (glass)', price: 'From 50 MAD', note: 'Higher for imported wines' },
  { item: 'Moroccan wine (bottle, restaurant)', price: 'From 150 MAD', note: 'Decent quality, up to 600+ MAD for premium' },
  { item: 'Standard cocktail', price: 'From 70 MAD', note: 'Medina and mid-range bars' },
  { item: 'Premium cocktail (rooftop/hotel)', price: 'From 100 MAD', note: 'Luxury hotel bars from 120 MAD' },
  { item: 'Nightclub entry (Marrakech)', price: 'From 150 MAD', note: 'Often includes first drink' },
  { item: 'Nightclub entry (Casablanca)', price: 'From 200 MAD', note: 'Premium clubs from 300 MAD' },
  { item: 'Nightclub drinks', price: 'From 100 MAD', note: 'Spirits and cocktails inside clubs' },
  { item: 'Cultural show with dinner', price: 'From 250 MAD', note: 'Includes meal and performance' },
  { item: 'Shisha (hookah)', price: 'From 40 MAD', note: 'Available at many lounges and cafes' },
  { item: 'Fresh juice at night market', price: 'From 10 MAD', note: 'Non-alcoholic, Jemaa el-Fnaa and souks' },
  { item: 'Mint tea (cafe)', price: 'From 15 MAD', note: 'The national drink, available everywhere' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL SHOWS VS CLUBS COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const showsVsClubs = [
  {
    aspect: 'Atmosphere',
    cultural: 'Intimate, refined, often candlelit. Seated at tables or on floor cushions. Quiet conversation between performances. A sense of occasion and heritage.',
    clubs: 'High-energy, loud, dark with dramatic lighting. Standing or dancing. Social interaction through the music. A sense of release and celebration.',
  },
  {
    aspect: 'Typical Cost',
    cultural: 'From 150 MAD for dinner with music. Dedicated concerts from 100 MAD. Festival tickets from 200 MAD for premium events.',
    clubs: 'Entry from 150-300 MAD (often includes one drink). Drinks inside from 100 MAD. Bottle service from 2,000 MAD at premium clubs.',
  },
  {
    aspect: 'Music',
    cultural: 'Andalusian classical, Gnawa, Sufi devotional, malhun poetry, Berber folk, sometimes fusion. Live instruments: oud, guembri, violin, percussion.',
    clubs: 'House, EDM, hip-hop, R&B, Arabic pop, Rai music. International and local DJs. Some clubs feature live acts before the DJ takes over.',
  },
  {
    aspect: 'Timing',
    cultural: 'Typically 8 PM to 11 PM. Dinner performances run earlier. Festival concerts may start at 9 PM and finish by midnight.',
    clubs: 'Doors open at midnight, peak at 1-2 AM, closing 4-5 AM. Arriving before midnight means an empty dance floor.',
  },
  {
    aspect: 'Dress Code',
    cultural: 'Smart casual to formal. Traditional Moroccan attire (djellaba, caftan) is welcomed and respected at cultural events.',
    clubs: 'Strictly smart or dressy. Designer labels noticed and appreciated. Door selection at premium clubs can be stringent.',
  },
  {
    aspect: 'Alcohol',
    cultural: 'Wine and cocktails often available at restaurant performances. Some cultural events are alcohol-free, especially religious and Sufi music.',
    clubs: 'Alcohol is central to the club experience. Full bar service with cocktails, spirits, champagne, and bottle service. Non-drinkers welcome but rare.',
  },
  {
    aspect: 'Best For',
    cultural: 'Culture seekers, music lovers, couples, older travelers, families (some events), those seeking a meaningful and memorable evening.',
    clubs: 'Night owls, party travelers, groups of friends, those seeking high-energy entertainment, people who love dancing.',
  },
  {
    aspect: 'Best Cities',
    cultural: 'Fes (Andalusian music), Essaouira (Gnawa), Marrakech (variety), Tangier (jazz). All cities during festival season.',
    clubs: 'Marrakech (largest scene), Casablanca (most upscale), Agadir (most tourist-friendly). Limited club scene in Fes and Essaouira.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST NIGHTS OF THE WEEK
   ═══════════════════════════════════════════════════════════════ */

const bestNights = [
  {
    day: 'Thursday',
    icon: Calendar,
    description:
      'The biggest night out in Morocco. Thursday marks the start of the weekend (Friday is the Islamic day of rest). After-work crowds fill bars from 7 PM, and clubs peak from 1-3 AM. Casablanca\'s after-work Thursday scene is legendary. Dress your best.',
  },
  {
    day: 'Friday',
    icon: Calendar,
    description:
      'After Friday prayers and the traditional couscous lunch, Moroccans ease into the evening. Bars fill up from 9 PM and clubs from midnight. In tourist cities like Marrakech, Friday is as busy as Thursday. Cultural events and live music are commonly programmed for Friday evenings.',
  },
  {
    day: 'Saturday',
    icon: Calendar,
    description:
      'The second-biggest night, especially for tourists. Clubs and bars are busy, beach clubs in Casablanca and Agadir peak on Saturday nights. The crowd tends to be slightly more tourist-heavy than Thursday. A good night for live music and rooftop bars.',
  },
  {
    day: 'Sunday-Wednesday',
    icon: Calendar,
    description:
      'Much quieter. Many bars and restaurants still operate, but clubs may be closed or nearly empty Sunday through Tuesday. Wednesday sees a slight pickup in some cities. These nights are ideal for quiet rooftop drinks, cultural performances, and avoiding crowds.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoNightlifeGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-jemaa-elfnaa-night.webp)',
          }}
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
            After Dark
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Nightlife Guide:
            <br className="hidden md:block" /> Best Bars, Clubs &amp; Live Music
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the ancient spectacle of Jemaa el-Fnaa to rooftop cocktails, world-class clubs,
            and live Gnawa music on the beach. Your complete guide to Morocco after dark.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco After Dark: More Than You Expect
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco surprises most visitors with the depth and variety of its nightlife. Yes, it is a
                Muslim-majority country. And yes, it has a vibrant, diverse after-dark scene that ranges from
                ancient street spectacles and Sufi trance music to sleek rooftop bars and international
                nightclubs that run until dawn.
              </p>
              <p>
                The nightlife varies dramatically by city. Marrakech is electric and world-famous, drawing
                international DJs and jet-setters. Casablanca is cosmopolitan with a strong after-work bar
                culture. Tangier channels its bohemian literary heritage through jazz bars and artist cafes.
                Essaouira is all about live Gnawa music and beach bonfires. Fes offers refined rooftop
                dinners and cultural evenings. Agadir keeps it casual with beachfront bars.
              </p>
              <p>
                Understanding the nuances of alcohol rules, dress codes, safety, and cultural expectations
                is essential for enjoying Morocco&apos;s nightlife to the fullest. This guide covers everything
                you need to know, city by city, venue by venue, with current prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for drinks, entry, and entertainment across Morocco&apos;s nightlife scene.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and major holidays, when venue prices and cover charges may increase by 20-50%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Nightlife by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has a distinct after-dark personality. Here is your detailed guide to the best venues and experiences in each.
          </p>

          <div className="space-y-16">
            {nightlifeByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} id={city.city.toLowerCase()}>
                  {/* City Header */}
                  <div className="card-moroccan overflow-hidden mb-8">
                    <div className="relative h-64 md:h-80">
                      <img
                        src={city.image}
                        alt={`${city.city} nightlife scene, Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 mb-2">
                          <CityIcon className="w-6 h-6 text-white" />
                          <h3 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
                            {city.city}
                          </h3>
                        </div>
                        <p className="text-white/70 text-sm mb-1">
                          <Sparkles className="w-3.5 h-3.5 inline mr-1" />
                          {city.vibe}
                        </p>
                        <p className="text-white/70 text-sm">
                          <Calendar className="w-3.5 h-3.5 inline mr-1" />
                          Best nights: {city.bestNights}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[var(--text-secondary)] leading-relaxed">{city.description}</p>
                    </div>
                  </div>

                  {/* City Venues */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {city.venues.map((venue) => {
                      const VenueIcon = venue.icon;
                      return (
                        <div key={venue.name} className="card-moroccan p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                              <VenueIcon className="w-5 h-5 text-[var(--color-accent)]" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                                {venue.name}
                              </h4>
                              <span className="text-xs text-[var(--text-muted)]">{venue.type}</span>
                            </div>
                          </div>
                          <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                            {venue.price}
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] mb-4">{venue.description}</p>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cultural Shows vs Clubs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Shows vs. Nightclubs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers two very different nightlife paths. Here is how they compare so you can choose what fits your style.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {showsVsClubs.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Cultural Shows</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.cultural}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Nightclubs</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.clubs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alcohol Rules & Availability ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alcohol Rules &amp; Availability
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding alcohol culture in Morocco is essential for a smooth nightlife experience. Here is everything you need to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alcoholRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.topic} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.topic}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dress Codes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dress Codes by Venue Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to wear where. Getting the dress code right can mean the difference between entry and rejection at Morocco&apos;s more exclusive venues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dressCodes.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.venue} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.venue}
                      </h3>
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {item.code}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Nights of the Week ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Nights of the Week
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s weekend starts on Thursday. Plan your nights out accordingly for the best atmosphere.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

            <div className="space-y-8">
              {bestNights.map((night, idx) => {
                const NightIcon = night.icon;
                return (
                  <div key={night.day} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <NightIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="card-moroccan p-6 flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {night.day}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{night.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is generally safe for nightlife, but common sense and cultural awareness go a long way. Follow these guidelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco After Dark: The Atmosphere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-jemaa-elfnaa-night.webp"
                alt="Jemaa el-Fnaa square in Marrakech illuminated at night with food stalls and crowds"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Jemaa el-Fnaa at Night</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-gnawa-music.webp"
                alt="Gnawa musicians performing traditional music with guembri instrument in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Live Gnawa Music</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="Rooftop terrace at a Moroccan riad with warm lighting and seating at sunset"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rooftop Bar Setting</p>
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is there nightlife during Ramadan in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Nightlife changes significantly during Ramadan. Most bars and all nightclubs close for the month.
                Licensed hotel bars may continue serving alcohol to non-Muslim guests discreetly. The streets come
                alive after iftar (the evening meal breaking the fast) with families, food vendors, and a festive
                atmosphere, but it is not nightlife in the traditional sense. Plan any party-oriented travel outside
                of Ramadan.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I drink alcohol anywhere in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Only in licensed establishments: bars, restaurants with licenses, hotels, and private residences.
                Drinking in public (streets, parks, beaches) is illegal and culturally inappropriate. Off-license
                shops sell alcohol for private consumption. In tourist cities, finding a licensed venue is easy. In
                conservative areas, options are limited. Always be discreet and respectful.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What time do clubs open and close in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Nightclubs in Marrakech and Casablanca typically open at midnight and close between 4 and 5 AM.
                Arriving before midnight means an almost empty venue. The peak hours are 1 AM to 3 AM. Bars and
                rooftop lounges open earlier, typically from 6-7 PM, and close between midnight and 2 AM. Hotel
                bars often stay open latest.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo female travelers at night?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Solo female travelers should exercise caution, particularly late at night. Stick to well-known,
                reputable venues with good reviews. Avoid walking alone through empty medina streets after midnight.
                Upscale hotel bars and established rooftop bars are the safest options. Taking a taxi door-to-door
                is recommended. Many women find that Morocco&apos;s nightlife is enjoyable when sensible precautions are taken.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I budget for a night out in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget varies widely. A cultural evening in the medina with street food and mint tea can cost from
                100 MAD. A night of rooftop cocktails runs from 300-500 MAD per person. A full club night in
                Marrakech or Casablanca (entry, drinks, taxi) starts from 500 MAD and can easily reach 1,000+ MAD.
                Non-alcoholic nights exploring souks and night markets are the most budget-friendly.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the legal drinking age in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The legal drinking age in Morocco is 18. However, enforcement varies. Upscale clubs and hotel bars
                may check ID. Casual bars and shops are less strict. Carry a copy of your passport or a photo ID
                if you appear young. The legal age for entry to nightclubs is typically 21 at premium venues in
                Marrakech and Casablanca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to Morocco&apos;s most popular city: medina, souks, riads, restaurants, and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/food" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the flavors of Morocco: tagines, couscous, street food, fine dining, and food etiquette.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/safety" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential safety information for travelers: scams, health, transport, emergency contacts, and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
