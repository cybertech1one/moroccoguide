import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  Music,
  Wine,
  AlertTriangle,
  Trophy,
  Info,
  Moon,
} from 'lucide-react';
import NightlifeClient from './NightlifeClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Nightlife & Entertainment | Clubs, Bars, Lounges & Live Music',
  description:
    'Discover the best nightlife in Morocco. From legendary Marrakech clubs like Pacha and Theatro to rooftop lounges in Casablanca, live music in Essaouira, jazz in Rabat, and sunset cafes in Tangier.',
  keywords: [
    'Morocco nightlife',
    'Marrakech clubs',
    'Casablanca bars',
    'Morocco live music',
    'Marrakech rooftop bars',
    'Tangier nightlife',
    'Essaouira bars',
    'Morocco entertainment',
    'Pacha Marrakech',
    'Rick\'s Cafe Casablanca',
    'Agadir nightlife',
    'Rabat bars',
    'Fes nightlife',
    'Morocco clubbing',
  ],
  openGraph: {
    title: 'Morocco Nightlife & Entertainment - CityGuide',
    description:
      'Explore 30+ of the best nightlife venues across Morocco. Clubs, bars, lounges, rooftop terraces, live music venues, and legendary cafes in 7 cities.',
    url: 'https://citytoursmorocco.com/nightlife',
    images: [
      {
        url: '/images/hero-jemaa-elfna-night.webp',
        width: 1200,
        height: 630,
        alt: 'Marrakech nightlife scene with atmospheric lighting',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/nightlife' },
};

/* ═══════════════════════════════════════════════════════════════
   NIGHTLIFE DATA
   ═══════════════════════════════════════════════════════════════ */

export type VenueType = 'Club' | 'Bar' | 'Lounge' | 'Rooftop' | 'Cafe' | 'Live Music';

export interface Venue {
  id: number;
  name: string;
  type: VenueType;
  city: string;
  description: string;
  openingHours: string;
  priceRange: '$' | '$$' | '$$$';
  dressCode: string;
  image: string;
  rating: number;
}

const venues: Venue[] = [
  /* ── MARRAKECH ── */
  {
    id: 1,
    name: 'Pacha Marrakech',
    type: 'Club',
    city: 'Marrakech',
    description:
      'The Marrakech outpost of the legendary Ibiza brand. A massive open-air complex with pool parties, international DJs, and a Moroccan-inspired design that blends traditional zellige with cutting-edge sound and light systems.',
    openingHours: '11 PM - 5 AM, Thu-Sat',
    priceRange: '$$$',
    dressCode: 'Smart casual to dressy',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Le Comptoir Darna',
    type: 'Lounge',
    city: 'Marrakech',
    description:
      'A glamorous restaurant-lounge where belly dancers perform between courses of refined Moroccan-French cuisine. The atmosphere heats up after 10 PM with DJs and dancing. A Marrakech institution since 1998.',
    openingHours: '7 PM - 2 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart elegant',
    image: '/images/hero-marrakech.webp',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Theatro Marrakech',
    type: 'Club',
    city: 'Marrakech',
    description:
      'Housed in a former theater at the Es Saadi Palace, this opulent nightclub features dramatic decor with red velvet, gold accents, and a state-of-the-art Funktion-One sound system. International and local DJs spin house, R&B, and Moroccan fusion.',
    openingHours: '11:30 PM - 5 AM, Wed-Sat',
    priceRange: '$$$',
    dressCode: 'Dressy / no sneakers',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.4,
  },
  {
    id: 4,
    name: 'SO Lounge',
    type: 'Lounge',
    city: 'Marrakech',
    description:
      'The ultra-chic lounge at Sofitel Marrakech. Sleek modern design, craft cocktails, and a sophisticated crowd. Live DJ sets on weekends with a mix of deep house and chill beats beside the illuminated pool.',
    openingHours: '6 PM - 1 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Cafe Arabe Rooftop',
    type: 'Rooftop',
    city: 'Marrakech',
    description:
      'A stunning rooftop terrace in the heart of the medina with panoramic views of the Koutoubia Mosque and Atlas Mountains. Italian-Moroccan cuisine, creative cocktails, and a magical atmosphere as the sun sets over the Red City.',
    openingHours: '10 AM - 11 PM, daily',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Jad Mahal',
    type: 'Lounge',
    city: 'Marrakech',
    description:
      'An extravagant palace-turned-nightclub with Bollywood-meets-Morocco decor. Dinner is served in lavishly decorated rooms before the space transforms into a dance floor with live bands and DJs.',
    openingHours: '8 PM - 3 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart elegant',
    image: '/images/hero-marrakech.webp',
    rating: 4.3,
  },
  {
    id: 7,
    name: 'Le 68 Bar a Vin',
    type: 'Bar',
    city: 'Marrakech',
    description:
      'A sophisticated wine bar in the Gueliz neighborhood offering an impressive selection of Moroccan wines alongside French and international labels. Intimate atmosphere, knowledgeable staff, and gourmet tapas.',
    openingHours: '5 PM - 12 AM, Tue-Sun',
    priceRange: '$$',
    dressCode: 'Smart casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.6,
  },
  {
    id: 8,
    name: 'Le Foundouk',
    type: 'Lounge',
    city: 'Marrakech',
    description:
      'A beautifully restored fondouk (caravanserai) with a dramatic interior courtyard. Upscale Moroccan-Mediterranean cuisine downstairs, cocktail bar and lounge upstairs. The candlelit atmosphere is pure magic.',
    openingHours: '7 PM - 12 AM, Tue-Sun',
    priceRange: '$$$',
    dressCode: 'Smart elegant',
    image: '/images/hero-marrakech.webp',
    rating: 4.7,
  },
  {
    id: 9,
    name: 'Kechmara',
    type: 'Bar',
    city: 'Marrakech',
    description:
      'The coolest cafe-bar in Gueliz, frequented by Marrakech\'s creative class. Street art on the walls, vinyl DJs on weekends, craft cocktails, and a rooftop terrace. The vibe is Berlin-meets-Marrakech.',
    openingHours: '8 AM - 12 AM, daily',
    priceRange: '$$',
    dressCode: 'Casual / creative',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.5,
  },
  {
    id: 10,
    name: 'Bazaar Cafe',
    type: 'Cafe',
    city: 'Marrakech',
    description:
      'A hidden gem in the medina combining a cafe, art gallery, and cultural space. Regular live music evenings featuring Gnaoua, jazz, and fusion acts. The intimate courtyard setting feels like discovering a secret garden.',
    openingHours: '10 AM - 10 PM, daily',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.4,
  },
  {
    id: 11,
    name: 'Le Tanjia',
    type: 'Live Music',
    city: 'Marrakech',
    description:
      'Named after the iconic Marrakech slow-cooked dish, this restaurant transforms into a live music venue after dinner. Chaabi, Gnaoua, and Andalusian musicians perform in a beautiful riad setting with fountain courtyard.',
    openingHours: '7 PM - 1 AM, daily',
    priceRange: '$$',
    dressCode: 'Smart casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.5,
  },
  {
    id: 12,
    name: 'Dar Cherifa',
    type: 'Cafe',
    city: 'Marrakech',
    description:
      'One of the oldest riads in the medina, dating to the 16th century. Now a literary cafe and cultural salon hosting poetry readings, book launches, and acoustic performances amid stunning original architecture.',
    openingHours: '10 AM - 9 PM, daily',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.7,
  },
  {
    id: 13,
    name: 'Riad Yima Cafe',
    type: 'Cafe',
    city: 'Marrakech',
    description:
      'The whimsical creation of artist Hassan Hajjaj, this pop-art riad cafe is a photographer\'s dream. Colorful interiors made from recycled materials, Moroccan tea and pastries, and a rooftop draped in vibrant fabrics.',
    openingHours: '10 AM - 7 PM, Mon-Sat',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.6,
  },
  {
    id: 14,
    name: '555 Famous Club',
    type: 'Club',
    city: 'Marrakech',
    description:
      'One of the original Marrakech nightclubs, located on Avenue Mohammed V. Multiple dance floors playing Arabic pop, hip-hop, and electronic music. Popular with both locals and visitors, it has a more relaxed door policy than the luxury venues.',
    openingHours: '11 PM - 5 AM, Thu-Sun',
    priceRange: '$$',
    dressCode: 'Smart casual',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.1,
  },

  /* ── CASABLANCA ── */
  {
    id: 15,
    name: 'Sky Bar Casablanca',
    type: 'Rooftop',
    city: 'Casablanca',
    description:
      'Perched atop one of Casablanca\'s tallest buildings, Sky Bar offers 360-degree views of the city and the Atlantic Ocean. Premium cocktails, sushi bar, and a chic after-work crowd that transforms into a party scene after midnight.',
    openingHours: '5 PM - 2 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart casual',
    image: '/images/hero-morocco.webp',
    rating: 4.5,
  },
  {
    id: 16,
    name: "Rick's Cafe",
    type: 'Live Music',
    city: 'Casablanca',
    description:
      'Inspired by the film Casablanca, this atmospheric venue recreates the glamour of 1940s Morocco. Live jazz and piano performances nightly, classic cocktails, and an Art Deco interior that transports you to another era.',
    openingHours: '6 PM - 1 AM, daily',
    priceRange: '$$',
    dressCode: 'Smart casual',
    image: '/images/hero-morocco.webp',
    rating: 4.7,
  },
  {
    id: 17,
    name: 'La Bodega Casablanca',
    type: 'Bar',
    city: 'Casablanca',
    description:
      'A lively Spanish-themed tapas bar in the Ain Diab district. Sangria flows freely, flamenco guitar fills the air, and the mixed crowd of locals and expats creates one of the most fun atmospheres in the city.',
    openingHours: '6 PM - 2 AM, daily',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-morocco.webp',
    rating: 4.4,
  },
  {
    id: 18,
    name: 'Le Petit Rocher',
    type: 'Bar',
    city: 'Casablanca',
    description:
      'A beloved Casablanca institution on the Corniche, this bar-restaurant sits right on the rocks above the Atlantic. Fresh seafood, cold Casablanca beer, and ocean spray on warm evenings. The sunset views are spectacular.',
    openingHours: '12 PM - 1 AM, daily',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-morocco.webp',
    rating: 4.3,
  },
  {
    id: 19,
    name: 'Iris Rooftop',
    type: 'Rooftop',
    city: 'Casablanca',
    description:
      'A stylish rooftop venue in the Gauthier district offering panoramic city views, creative cocktails, and a regularly rotating roster of resident DJs. The after-work aperitivo scene on Thursdays is a Casa institution.',
    openingHours: '6 PM - 2 AM, Wed-Sun',
    priceRange: '$$$',
    dressCode: 'Smart casual',
    image: '/images/hero-morocco.webp',
    rating: 4.5,
  },
  {
    id: 20,
    name: 'Le Cabestan',
    type: 'Lounge',
    city: 'Casablanca',
    description:
      'An iconic oceanfront restaurant-lounge perched on the rocks of the Corniche with floor-to-ceiling windows framing the Atlantic. French-Moroccan cuisine, an extensive wine list, and a sophisticated atmosphere make this a Casa classic.',
    openingHours: '12 PM - 1 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart elegant',
    image: '/images/hero-morocco.webp',
    rating: 4.6,
  },

  /* ── TANGIER ── */
  {
    id: 21,
    name: 'Cafe Hafa',
    type: 'Cafe',
    city: 'Tangier',
    description:
      'Clinging to the clifftop with terraced seating overlooking the Strait of Gibraltar, this legendary cafe has hosted the Rolling Stones, Paul Bowles, and William Burroughs. Mint tea, shisha, and the most dramatic sunset in Morocco.',
    openingHours: '9 AM - 10 PM, daily',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-chefchaouen.webp',
    rating: 4.8,
  },
  {
    id: 22,
    name: 'El Morocco Club',
    type: 'Lounge',
    city: 'Tangier',
    description:
      'A stylish speakeasy-style bar in the heart of the Tangier medina. Vintage Moroccan decor, expertly crafted cocktails with local ingredients, and an intimate atmosphere that attracts a creative, international crowd.',
    openingHours: '7 PM - 1 AM, Tue-Sun',
    priceRange: '$$',
    dressCode: 'Smart casual',
    image: '/images/hero-chefchaouen.webp',
    rating: 4.6,
  },
  {
    id: 23,
    name: 'Le Salon Bleu',
    type: 'Rooftop',
    city: 'Tangier',
    description:
      'A rooftop terrace in the kasbah offering arguably the best view in Tangier: the entire bay, the medina rooftops, and on clear days, the coast of Spain. Moroccan tea, light bites, and an atmosphere of timeless elegance.',
    openingHours: '10 AM - 10 PM, daily',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-chefchaouen.webp',
    rating: 4.7,
  },
  {
    id: 24,
    name: 'Tanja Flandria',
    type: 'Bar',
    city: 'Tangier',
    description:
      'A vibrant bar and cultural venue in the Ville Nouvelle hosting live music, DJ nights, and art exhibitions. The eclectic crowd of Tangier artists, writers, and musicians continues the city\'s legendary bohemian tradition.',
    openingHours: '8 PM - 2 AM, Wed-Sun',
    priceRange: '$$',
    dressCode: 'Casual / creative',
    image: '/images/hero-chefchaouen.webp',
    rating: 4.4,
  },

  /* ── ESSAOUIRA ── */
  {
    id: 25,
    name: 'Mama Afrika',
    type: 'Live Music',
    city: 'Essaouira',
    description:
      'The beating heart of Essaouira\'s music scene. Live Gnaoua, reggae, and world music performances every night in a colorful, bohemian space decorated with African art. The energy is infectious and the dancing spontaneous.',
    openingHours: '8 PM - 2 AM, daily',
    priceRange: '$',
    dressCode: 'Casual / bohemian',
    image: '/images/hero-essaouira.webp',
    rating: 4.5,
  },
  {
    id: 26,
    name: 'Taros Cafe',
    type: 'Rooftop',
    city: 'Essaouira',
    description:
      'A multi-level cafe-bar-gallery on Place Moulay Hassan with a rooftop terrace offering panoramic views of the port and medina. Live music on weekends, art exhibitions, and the perfect spot for sundowners.',
    openingHours: '10 AM - 11 PM, daily',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-essaouira.webp',
    rating: 4.6,
  },
  {
    id: 27,
    name: 'Mogador Lounge',
    type: 'Bar',
    city: 'Essaouira',
    description:
      'A relaxed beach bar near the port where Gnaoua musicians often gather for impromptu jam sessions. Cold local beer, grilled sardines, and the sound of the Atlantic crashing on the ramparts create an unforgettable evening.',
    openingHours: '5 PM - 12 AM, daily',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-essaouira.webp',
    rating: 4.3,
  },

  /* ── AGADIR ── */
  {
    id: 28,
    name: 'Papagayo Agadir',
    type: 'Club',
    city: 'Agadir',
    description:
      'Agadir\'s premier nightclub on the beachfront strip. International DJs, themed nights, and a massive dance floor attract a young, energetic crowd. The summer pool parties are the hottest ticket on the Atlantic coast.',
    openingHours: '11 PM - 5 AM, Thu-Sun',
    priceRange: '$$$',
    dressCode: 'Smart casual to dressy',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.2,
  },
  {
    id: 29,
    name: 'So Lounge Agadir',
    type: 'Lounge',
    city: 'Agadir',
    description:
      'Part of the Sofitel brand, this beachfront lounge offers sunset cocktails, deep house music, and a stylish crowd. The terrace overlooks the promenade and the bay, making it the ideal start to an Agadir night out.',
    openingHours: '6 PM - 2 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.4,
  },
  {
    id: 30,
    name: 'English Pub Agadir',
    type: 'Bar',
    city: 'Agadir',
    description:
      'A laid-back, expat-friendly pub on the main tourist strip serving cold beers, pub grub, and showing live sports. Not glamorous, but consistently fun with karaoke nights, quiz nights, and a friendly crowd.',
    openingHours: '4 PM - 2 AM, daily',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.0,
  },

  /* ── RABAT ── */
  {
    id: 31,
    name: 'Le Dhow',
    type: 'Lounge',
    city: 'Rabat',
    description:
      'A restaurant-bar built on a converted wooden dhow boat moored on the Bou Regreg river between Rabat and Sale. Mediterranean cuisine, cocktails, and live jazz on weekends with views of the Kasbah des Oudaias lit up at night.',
    openingHours: '7 PM - 1 AM, Tue-Sun',
    priceRange: '$$$',
    dressCode: 'Smart casual',
    image: '/images/hero-morocco.webp',
    rating: 4.5,
  },
  {
    id: 32,
    name: 'Cafe Les Oudaias',
    type: 'Cafe',
    city: 'Rabat',
    description:
      'Located within the Andalusian gardens of the Kasbah des Oudaias, this peaceful cafe serves mint tea and fresh orange juice in a setting of jasmine, bougainvillea, and ancient walls. The most beautiful cafe terrace in Rabat.',
    openingHours: '9 AM - 9 PM, daily',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-morocco.webp',
    rating: 4.6,
  },
  {
    id: 33,
    name: 'Amnesia Rabat',
    type: 'Club',
    city: 'Rabat',
    description:
      'Rabat\'s answer to the Marrakech super-clubs. A modern venue with a quality sound system, rotating international DJs, and a mixed crowd of students, diplomats, and young professionals. Less pretentious than its Marrakech counterparts.',
    openingHours: '11 PM - 4 AM, Thu-Sat',
    priceRange: '$$',
    dressCode: 'Smart casual',
    image: '/images/hero-jemaa-elfna-night.webp',
    rating: 4.1,
  },
  {
    id: 34,
    name: 'Villa Mandarine Bar',
    type: 'Bar',
    city: 'Rabat',
    description:
      'The garden bar at the boutique Villa Mandarine hotel, set among citrus groves. An oasis of calm where diplomats and Rabat\'s cultural elite sip Moroccan wines and craft cocktails. The orange blossom cocktail is legendary.',
    openingHours: '6 PM - 12 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart elegant',
    image: '/images/hero-marrakech.webp',
    rating: 4.6,
  },

  /* ── FES ── */
  {
    id: 35,
    name: 'Rooftop Bar Hotel Sahrai',
    type: 'Rooftop',
    city: 'Fes',
    description:
      'The only design hotel in Fes, perched on a hill above the medina, with a rooftop bar offering the most spectacular view of the ancient city. Craft cocktails, Mediterranean tapas, and a sophisticated ambiance that feels worlds apart from the bustling souks below.',
    openingHours: '5 PM - 12 AM, daily',
    priceRange: '$$$',
    dressCode: 'Smart casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.7,
  },
  {
    id: 36,
    name: 'The Ruined Garden',
    type: 'Cafe',
    city: 'Fes',
    description:
      'A charming restaurant-cafe built in the ruins of a riad in the heart of Fes el-Bali. The crumbling walls are covered in flowering vines, creating a romantic, secret-garden atmosphere. Moroccan-British cuisine, local wines, and occasional acoustic music.',
    openingHours: '10 AM - 10 PM, Wed-Mon',
    priceRange: '$$',
    dressCode: 'Casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.6,
  },
  {
    id: 37,
    name: 'Cafe Clock Fes',
    type: 'Live Music',
    city: 'Fes',
    description:
      'A beloved cultural cafe in the medina hosting live Gnaoua music sessions, Hikayat (Moroccan storytelling) nights, and cooking workshops. The rooftop terrace has views of the minarets, and the famous camel burger is not to be missed.',
    openingHours: '9 AM - 10 PM, daily',
    priceRange: '$',
    dressCode: 'Casual',
    image: '/images/hero-marrakech.webp',
    rating: 4.5,
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEST NIGHTLIFE CITIES DATA
   ═══════════════════════════════════════════════════════════════ */

const bestNightlifeCities = [
  {
    rank: 1,
    city: 'Marrakech',
    tagline: 'The Undisputed Capital of Moroccan Nightlife',
    description:
      'Marrakech is where Morocco truly comes alive after dark. The city offers everything from world-class super-clubs like Pacha and Theatro to intimate riad lounges, medina rooftop bars with Koutoubia views, and bohemian live music cafes. The scene peaks from October to May when the weather is ideal and international visitors flood in.',
    bestFor: 'Super-clubs, luxury lounges, rooftop bars, live music',
    peakNights: 'Thursday, Friday, Saturday',
  },
  {
    rank: 2,
    city: 'Casablanca',
    tagline: 'Morocco\'s Business Capital with Cosmopolitan Flair',
    description:
      'Casablanca has the most diverse nightlife scene in Morocco, driven by a large local population of young professionals. The Corniche beachfront and Ain Diab district are packed with bars and restaurants, while the Gauthier neighborhood offers trendy rooftop venues. Rick\'s Cafe brings old Hollywood glamour to life nightly.',
    bestFor: 'After-work bars, oceanfront dining, jazz clubs, rooftop lounges',
    peakNights: 'Wednesday, Thursday, Friday',
  },
  {
    rank: 3,
    city: 'Tangier',
    tagline: 'The Bohemian Spirit of the Strait',
    description:
      'Tangier\'s nightlife has a different energy: more cultural, more bohemian, more literary. This is a city where Paul Bowles, Jack Kerouac, and the Rolling Stones came to find inspiration. Today, Tangier\'s bars and cafes still attract artists and musicians, with a scene that favors conversation and creativity over bottle service.',
    bestFor: 'Sunset cafes, speakeasy bars, cultural venues, artistic crowd',
    peakNights: 'Friday, Saturday',
  },
  {
    rank: 4,
    city: 'Agadir',
    tagline: 'Beach Party Capital of Morocco',
    description:
      'Agadir is Morocco\'s resort city, and its nightlife reflects a more relaxed, holiday vibe. The beachfront strip is lined with bars, clubs, and restaurants catering to European sun-seekers. In summer, Agadir comes alive with beach parties and open-air events that go until dawn.',
    bestFor: 'Beach bars, resort clubs, casual nightlife, live sports',
    peakNights: 'Thursday, Friday, Saturday',
  },
  {
    rank: 5,
    city: 'Essaouira',
    tagline: 'Live Music and Atlantic Sunsets',
    description:
      'Essaouira is not about clubs and cocktails; it is about music. The spiritual home of Gnaoua music, this windswept Atlantic town has a live music scene that punches far above its weight. During the annual Gnaoua World Music Festival (June), the entire city becomes one massive concert venue.',
    bestFor: 'Live Gnaoua music, bohemian bars, rooftop sundowners',
    peakNights: 'Friday, Saturday (nightly during Gnaoua Festival)',
  },
  {
    rank: 6,
    city: 'Rabat',
    tagline: 'The Refined Capital After Dark',
    description:
      'Rabat\'s nightlife is more understated than Marrakech or Casablanca, but the capital offers a sophisticated scene with less tourist inflation. The Bou Regreg waterfront, the Agdal neighborhood, and the Hassan district are home to elegant bars and restaurants frequented by diplomats and professionals.',
    bestFor: 'Elegant bars, waterfront dining, jazz, wine bars',
    peakNights: 'Thursday, Friday',
  },
  {
    rank: 7,
    city: 'Fes',
    tagline: 'Cultural Evenings in the Ancient Medina',
    description:
      'Fes is not a party city, but it offers something more meaningful: cultural evenings of live music, storytelling, and rooftop dinners overlooking the world\'s largest medieval medina. The scene is intimate and centered around riad dining, cultural cafes, and the spectacular Hotel Sahrai rooftop.',
    bestFor: 'Cultural evenings, medina rooftops, live traditional music',
    peakNights: 'Friday, Saturday',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NIGHTLIFE TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const nightlifeTips = [
  {
    title: 'Dress Codes Matter',
    description:
      'Moroccan nightclubs and upscale lounges enforce dress codes strictly. Men should avoid shorts, flip-flops, and athletic wear. Smart casual means collared shirts and closed-toe shoes. For high-end venues like Theatro or Pacha, dress to impress. Women have more flexibility, but the general rule is elegant and put-together.',
  },
  {
    title: 'Morocco Runs Late',
    description:
      'Nightlife in Morocco starts much later than in Europe or North America. Dinner is typically 9-10 PM, bars fill up around 11 PM, and nightclubs do not get going until midnight or later. Arriving at a club before 12:30 AM means you will have the dance floor to yourself.',
  },
  {
    title: 'Ramadan Changes Everything',
    description:
      'During the holy month of Ramadan (dates shift annually based on the lunar calendar), most bars and nightclubs close entirely or operate very discreetly. Some hotel bars in tourist areas remain open for non-Muslim guests, but the overall nightlife scene shuts down. Restaurants reopen after sunset for iftar (the breaking of the fast), and the streets come alive with a different kind of energy. Plan accordingly and respect local observance.',
  },
  {
    title: 'Alcohol Availability',
    description:
      'Alcohol is legal in Morocco for non-Muslims and is served in licensed bars, hotels, restaurants, and clubs. You can also buy alcohol in supermarkets (Carrefour, Marjane, Acima) and dedicated liquor stores (caves a vin). However, Morocco is a Muslim-majority country, so drinking in public spaces, especially near mosques, is disrespectful and can result in fines.',
  },
  {
    title: 'Getting Home Safely',
    description:
      'Taxis are the standard way to get home after a night out. In Marrakech and Casablanca, use ride-hailing apps like inDrive or Careem for fixed prices and safety. Petit taxis (small, colored city taxis) are metered but may try to negotiate a flat rate late at night. Always agree on a price before getting in, or insist on the meter. Many upscale venues can call a trusted taxi for you.',
  },
  {
    title: 'Typical Drink Prices',
    description:
      'A local beer (Flag Speciale or Casablanca) costs 25-50 MAD in a bar, 60-100 MAD in a nightclub. A cocktail ranges from 80-150 MAD depending on the venue. A bottle of Moroccan wine (Medaillon, Guerrouane, or Beauvallon) costs 120-250 MAD. Water and soft drinks are 20-40 MAD. Budget approximately 300-500 MAD per person for a moderate night out, or 800-1,500 MAD for a premium club experience.',
  },
  {
    title: 'Cover Charges and Reservations',
    description:
      'Most nightclubs charge a cover fee of 100-300 MAD, often including one drink. VIP table reservations with bottle service start at 2,000-5,000 MAD and guarantee entry. On busy weekends, popular clubs fill up quickly, so arrive by midnight or book a table in advance. Hotel concierges can often arrange guest-list entry to top venues.',
  },
  {
    title: 'Local Moroccan Wines to Try',
    description:
      'Morocco has a growing wine industry with several excellent producers. Ask for Chateau Roslane (the country\'s best red), Domaine de la Zouina (organic wines from Meknes), Volubilia (approachable everyday wines), or S de Siroua (a bold Syrah). Moroccan roses are particularly good in summer. A glass of local wine in a bar costs 40-80 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Morocco Nightlife & Entertainment',
    description:
      'A curated directory of the best nightlife venues across Morocco including clubs, bars, lounges, rooftop terraces, live music venues, and cafes.',
    url: 'https://citytoursmorocco.com/nightlife',
    numberOfItems: venues.length,
    itemListElement: venues.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'BarOrPub',
        name: v.name,
        description: v.description,
        url: `https://citytoursmorocco.com/nightlife#${v.name.toLowerCase().replace(/\s+/g, '-')}`,
        image: v.image,
        address: {
          '@type': 'PostalAddress',
          addressLocality: v.city,
          addressCountry: 'MA',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: v.rating,
          bestRating: 5,
        },
        openingHours: v.openingHours,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function NightlifePage() {
  return (
    <>
      <JsonLd />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-jemaa-elfna-night.webp"
            alt="Atmospheric evening scene in Marrakech with warm lighting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Nightlife</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              After Dark
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nightlife &amp; Entertainment
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From legendary Marrakech nightclubs and rooftop cocktail lounges to
              live Gnaoua music in Essaouira, jazz on the Casablanca waterfront, and
              sunset cafes perched above the Strait of Gibraltar, discover where
              Morocco comes alive after dark.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  {venues.length}
                </p>
                <p className="text-sm text-white/70">Venues</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  6
                </p>
                <p className="text-sm text-white/70">Types</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  7
                </p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco&apos;s nightlife is a fascinating blend of tradition and modernity that
              reflects the country&apos;s dual identity as an Islamic nation with a cosmopolitan,
              Mediterranean soul. While Morocco is more conservative than European destinations,
              its major cities have developed vibrant after-dark scenes that rival anything in
              the region &mdash; from mega-clubs hosting international DJs to centuries-old cafes
              where Gnaoua musicians perform hypnotic trance rituals.
            </p>
            <p>
              The key to enjoying Moroccan nightlife is understanding its rhythm. Evenings start
              late, with dinner rarely before 9 PM and clubs not reaching full energy until well
              after midnight. The scene varies dramatically by city: Marrakech is glamorous and
              international, Casablanca is cosmopolitan and locally driven, Tangier is bohemian
              and artistic, Essaouira is all about live music, and even the ancient medina of Fes
              offers magical rooftop evenings above the medieval skyline.
            </p>
          </div>
        </div>
      </section>

      {/* ── Venue Directory (Client Component) ── */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-10">
          <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
            <Wine className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Venue Directory
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Browse our curated selection of {venues.length} venues across 7 Moroccan cities.
            Filter by type, city, or search for a specific spot.
          </p>
        </div>
        <NightlifeClient venues={venues} />
      </section>

      {/* ── Best Nightlife Cities Ranking ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Trophy className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Nightlife Cities in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our ranked guide to the best cities for going out in Morocco, from
              world-class clubbing to bohemian live music scenes.
            </p>
          </div>

          <div className="space-y-6">
            {bestNightlifeCities.map((city) => (
              <div
                key={city.city}
                className="card-moroccan overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Rank Badge */}
                  <div className="flex items-center justify-center md:w-24 py-4 md:py-0 bg-[var(--color-primary)]/5 md:bg-[var(--color-primary)]/10">
                    <span className="text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)]">
                      #{city.rank}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                      <span className="text-sm text-[var(--color-accent)] font-medium italic">
                        {city.tagline}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {city.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="text-[var(--text-secondary)]">
                          <span className="font-semibold text-[var(--text-primary)]">Best for:</span>{' '}
                          {city.bestFor}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Moon className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="text-[var(--text-secondary)]">
                          <span className="font-semibold text-[var(--text-primary)]">Peak nights:</span>{' '}
                          {city.peakNights}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nightlife Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Info className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Nightlife Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know before going out in Morocco &mdash; from
              dress codes and drink prices to Ramadan considerations and getting home
              safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nightlifeTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* Ramadan Warning Box */}
          <div className="mt-8 card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  Important: Ramadan &amp; Religious Observances
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                  During Ramadan, the nightlife scene changes dramatically. Most nightclubs and
                  bars close for the entire month. Some hotel bars continue to serve alcohol
                  discreetly to non-Muslim guests, but the overall atmosphere shifts significantly.
                  The dates of Ramadan change each year (moving approximately 11 days earlier each
                  year in the Gregorian calendar). If nightlife is a priority for your trip, check
                  the Ramadan dates before booking. That said, Ramadan nights have their own magic:
                  after iftar (sunset meal), streets and cafes come alive with families, street food,
                  and a festive, communal energy that is beautiful to experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Morocco After Dark?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our city guides for detailed neighborhood recommendations,
            or browse activities for curated nightlife experiences and food tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Music className="w-4 h-4" /> Nightlife Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
