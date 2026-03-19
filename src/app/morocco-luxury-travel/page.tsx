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
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Sunset,
  Camera,
  Utensils,
  Tent,
  Mountain,
  Wind,
  Compass,
  Globe,
  MessageCircle,
  Bed,
  Coffee,
  Sun,
  Plane,
  Wallet,
  Calendar,
  Map,
  Wine,
  Train,
  Binoculars,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Luxury Travel Morocco 2026 | 5-Star Hotels, Private Experiences & VIP Itinerary',
  description:
    'Plan the ultimate luxury Morocco trip. 5-star palace hotels, private desert experiences, helicopter tours, fine dining, luxury spas, and a complete VIP itinerary. Prices in MAD.',
  keywords: [
    'luxury travel Morocco',
    'Morocco luxury hotels',
    'luxury Morocco trip',
    '5 star Morocco experience',
    'Morocco luxury travel guide',
    'luxury riads Morocco',
    'Morocco VIP experience',
    'private desert Morocco',
    'Morocco helicopter tour',
    'luxury train Morocco',
    'Morocco fine dining',
    'Morocco luxury spa',
    'Morocco palace hotel',
    'Royal Mansour Marrakech',
    'luxury itinerary Morocco',
    'Morocco luxury honeymoon',
    'Morocco private guide',
    'best luxury hotels Morocco',
    'Morocco premium travel 2026',
    'ultra luxury Morocco vacation',
  ],
  openGraph: {
    title: 'Luxury Travel Morocco 2026 | 5-Star Hotels, Private Experiences & VIP Itinerary',
    description:
      'The definitive guide to luxury travel in Morocco. Palace hotels, private desert camps, helicopter tours, fine dining, and a bespoke VIP itinerary with prices.',
    url: `${BASE_URL}/morocco-luxury-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-riad-interior.webp`,
        width: 1200,
        height: 630,
        alt: 'Opulent Moroccan riad interior with zellige tilework, brass lanterns, and a turquoise plunge pool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Travel Morocco 2026 | 5-Star Hotels & VIP Experiences',
    description:
      'Palace hotels, private desert glamping, helicopter tours, and fine dining. The complete guide to luxury travel in Morocco.',
    images: [`${BASE_URL}/images/hero-riad-interior.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-luxury-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-luxury-travel`,
  name: 'Luxury Travel Morocco 2026 | 5-Star Hotels, Private Experiences & VIP Itinerary',
  description:
    'The ultimate luxury travel guide to Morocco. 5-star palace hotels, private Sahara desert camps, helicopter tours, fine dining, luxury spas, Al Boraq train, and a complete VIP itinerary with prices.',
  url: `${BASE_URL}/morocco-luxury-travel`,
  image: `${BASE_URL}/images/hero-riad-interior.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-luxury-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Luxury Travel Morocco', item: `${BASE_URL}/morocco-luxury-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a luxury trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A luxury Morocco trip for 7 days costs from 40,000-80,000 MAD per person, including 5-star palace hotels, private transfers, fine dining, and premium experiences. Ultra-luxury itineraries with helicopter transfers, private desert camps, and bespoke experiences can exceed 120,000 MAD per person for a week. Morocco offers exceptional value compared to equivalent luxury in Europe or the Middle East.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best luxury hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top luxury hotels include Royal Mansour Marrakech (private riad suites with butlers), La Mamounia Marrakech (legendary palace hotel), Riad Fes (palatial riad in the ancient medina), Dar Ahlam in the Skoura oasis (bespoke no-menu dining), and Kasbah Tamadot in the Atlas Mountains (Richard Branson\'s retreat). Each offers a distinct luxury experience from palace grandeur to intimate boutique opulence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco a good destination for luxury travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is one of the world\'s finest luxury travel destinations. It combines palatial architecture, world-class spas, Michelin-level dining, extraordinary desert glamping, and deeply personalized service at a fraction of European luxury prices. The cultural richness, from ancient medinas to Sahara stargazing, adds a dimension of experience that pure resort destinations cannot match.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for luxury travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for luxury travel are March to May and September to November. Spring brings wildflowers and pleasant warmth (20-28 degrees Celsius), while autumn offers golden light and comfortable temperatures ideal for outdoor dining and desert excursions. Winter (December-February) is excellent for Marrakech with mild sunny days. Avoid July-August when inland temperatures exceed 40 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire a private guide for luxury travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, private guides are essential for luxury Morocco travel. A licensed English-speaking private guide costs from 1,500-3,000 MAD per day depending on expertise and city. The best guides offer deep cultural knowledge, exclusive access to artisan workshops and private homes, restaurant recommendations, and seamless logistics. Many luxury riads and concierge services can arrange vetted private guides.',
      },
    },
    {
      '@type': 'Question',
      name: 'What luxury experiences are unique to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers luxury experiences unavailable elsewhere: private overnight Sahara desert glamping under the Milky Way, traditional hammam spa rituals with argan oil and rose petals, rooftop dining in ancient medinas, private cooking classes with palace chefs, helicopter transfers over the Atlas Mountains, sunrise hot air balloon rides over Marrakech, and the Al Boraq high-speed train connecting Tangier to Casablanca.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get around Morocco in luxury?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Luxury transport options include private drivers with Mercedes or Range Rover vehicles (from 2,500 MAD per day), helicopter transfers between cities (from 25,000 MAD per flight), the Al Boraq high-speed train for the Tangier-Casablanca route, and domestic flights between Marrakech, Fes, and other cities. Most luxury riads and hotels arrange all transfers seamlessly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a luxury Morocco trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack elegant but modest clothing for medina exploration and fine dining. Bring smart casual outfits (shoulders and knees covered for cultural sites), comfortable designer walking shoes for cobblestone medinas, lightweight layers for desert evenings, a swimsuit for riad pools and spas, sunscreen, and a quality scarf for desert excursions. Leave room for artisan purchases: Moroccan leather, ceramics, and argan oil make excellent luxury souvenirs.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP LUXURY HOTELS & RIADS
   ═══════════════════════════════════════════════════════════════ */

const luxuryHotels = [
  {
    rank: 1,
    name: 'Royal Mansour',
    city: 'Marrakech',
    type: 'Ultra-Luxury Palace Hotel',
    icon: Crown,
    price: 'From 12,000 MAD per night',
    image: '/images/hero-marrakech.webp',
    description:
      'Built by King Mohammed VI, the Royal Mansour is a private medina within the medina. Each accommodation is a three-story riad with its own plunge pool, rooftop terrace, and dedicated butler. Staff move through underground tunnels so guests never see service in progress. The underground spa is one of the finest in Africa. La Grande Table Marocaine offers Michelin-star-level Moroccan cuisine, while the garden restaurant serves under centuries-old olive trees. This is where heads of state and global celebrities stay when they visit Morocco.',
    highlights: ['Private three-story riad suites', 'Personal butler via underground tunnels', 'World-class underground spa', 'La Grande Table Marocaine fine dining'],
  },
  {
    rank: 2,
    name: 'La Mamounia',
    city: 'Marrakech',
    type: 'Legendary Palace Hotel',
    icon: Crown,
    price: 'From 8,000 MAD per night',
    image: '/images/hero-majorelle-garden.webp',
    description:
      'La Mamounia has been the jewel of Moroccan hospitality since 1929. Winston Churchill called it "the most lovely spot in the world." Set within eight hectares of legendary gardens with the Atlas Mountains as a backdrop, the hotel combines art deco grandeur with Moorish architecture. Three restaurants, a 2,500-square-meter spa, and an iconic heated outdoor pool surrounded by citrus groves make this the ultimate Marrakech palace experience.',
    highlights: ['Eight hectares of legendary gardens', 'Art deco meets Moorish grandeur', '2,500 sqm luxury spa', 'Churchill\'s favorite hotel'],
  },
  {
    rank: 3,
    name: 'Dar Ahlam',
    city: 'Ouarzazate / Skoura Oasis',
    type: 'Bespoke Desert Retreat',
    icon: Sparkles,
    price: 'From 6,000 MAD per night',
    image: '/images/hero-dades-valley.webp',
    description:
      'The "House of Dreams" is one of the most extraordinary luxury stays on Earth. This restored kasbah in the Skoura palm oasis has just 14 suites, offering a level of personalization impossible at larger hotels. There are no menus: the chef prepares whatever your heart desires. Dinner might be served in the rose garden, on the rooftop, in the palm grove, or in the desert under the stars. Every day is designed as a unique surprise. Dar Ahlam is not a hotel; it is a private dream brought to life.',
    highlights: ['No-menu bespoke dining', 'Surprise dinner locations nightly', 'Restored kasbah architecture', 'Only 14 suites for ultimate privacy'],
  },
  {
    rank: 4,
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    type: 'Mountain Luxury Resort',
    icon: Mountain,
    price: 'From 5,000 MAD per night',
    image: '/images/hero-atlas.webp',
    description:
      'Sir Richard Branson\'s mountain retreat in the High Atlas is perched above a traditional Berber village with sweeping views of snow-capped peaks. The resort combines Moroccan artisanship with world-class luxury: hand-carved furniture, Berber antiques, and contemporary comfort in every suite. The infinity pool with mountain panorama, the spa with open-air treatment rooms, and the private terrace suites with plunge pools create one of Morocco\'s most spectacular settings. Helicopter arrival is available directly from Marrakech.',
    highlights: ['Infinity pool with Atlas panorama', 'Helicopter arrival option', 'Private terrace suites with pools', 'Branson\'s personal mountain retreat'],
  },
  {
    rank: 5,
    name: 'Riad Fes',
    city: 'Fes',
    type: 'Palatial Riad & Spa',
    icon: Gem,
    price: 'From 2,800 MAD per night',
    image: '/images/hero-fes.webp',
    description:
      'The finest riad in Fes and a palatial luxury retreat in the heart of the ancient medina. Soaring zouak-painted ceilings rise above courtyards with candlelit pools and zellige-tiled fountains. The restaurant serves refined Fassi cuisine that rivals the best in the country. Suites are decorated with museum-quality antiques, hand-embroidered textiles, and carved cedar. The rooftop bar overlooking the thousand-year-old medina is one of the most atmospheric drinking spots in all of Morocco.',
    highlights: ['Zouak-painted palatial ceilings', 'Candlelit pool courtyard', 'Medina-view rooftop bar', 'Award-winning Fassi cuisine'],
  },
  {
    rank: 6,
    name: 'La Sultana Marrakech',
    city: 'Marrakech',
    type: 'Luxury Palace Riad',
    icon: Crown,
    price: 'From 4,500 MAD per night',
    image: '/images/hero-marrakech-koutoubia.webp',
    description:
      'Five interconnected riads forming one of the most opulent stays in Morocco. Each of the 28 suites is uniquely decorated with museum-quality antiques, hand-carved woodwork, and priceless textiles. The private couple hammam experience is legendary among visitors. The rooftop pool overlooks the Saadian Tombs, and the restaurant serves a modern take on traditional Moroccan palace cuisine. The spa offers treatments using pure argan oil, rose water, and saffron sourced from Moroccan farms.',
    highlights: ['Five interconnected palatial riads', 'Private couple hammam ritual', 'Rooftop pool over Saadian Tombs', '28 uniquely decorated suites'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRIVATE LUXURY EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const luxuryExperiences = [
  {
    experience: 'Private Sahara Desert Glamping',
    icon: Tent,
    price: 'From 5,000 MAD per night for two',
    duration: '2-3 nights recommended',
    description:
      'The ultimate Sahara experience: a private luxury camp at the edge of the Erg Chebbi dunes with king-size beds in lavish tents, en-suite marble bathrooms, and private terraces overlooking an ocean of golden sand. A personal butler serves candlelit multi-course dinners in the desert. After dinner, lie on Berber carpets and stargaze through a telescope with zero light pollution. The silence, the stars, and the scale of the dunes create an experience that money cannot buy anywhere else on Earth.',
    bestIn: 'Merzouga, Agafay Desert',
    vipTip: 'Request a private dune with no other camps in sight. The premium camps offer heated pools in the desert.',
  },
  {
    experience: 'Helicopter Tour Over the Atlas Mountains',
    icon: Compass,
    price: 'From 25,000 MAD per flight (up to 5 passengers)',
    duration: '1-3 hours',
    description:
      'See Morocco from a perspective reserved for kings and eagles. Helicopter tours lift you over the snow-capped High Atlas peaks, across dramatic gorges, above the ancient kasbahs of the south, and into landscapes so vast they steal your breath. Fly from Marrakech over the Ourika Valley, circle the 4,167-meter summit of Mount Toubkal, and land at a private mountain lodge for a Berber lunch before returning. Some operators offer Marrakech-to-desert transfers, combining transport with an unforgettable scenic flight.',
    bestIn: 'Marrakech, Atlas Mountains',
    vipTip: 'Book a Marrakech to Sahara transfer flight for the most dramatic single journey in Morocco.',
  },
  {
    experience: 'Sunrise Hot Air Balloon with Private Breakfast',
    icon: Sun,
    price: 'From 5,000 MAD for a private balloon (two guests)',
    duration: '3-4 hours including transfer',
    description:
      'Float silently over the Marrakech palmeraie as the first light paints the Atlas Mountains in shades of pink and gold. A private balloon means no other guests, just you and your companion suspended above the awakening landscape. After landing in the countryside, a full Berber breakfast is laid out on carpets in a field: fresh msemen flatbreads, honey, olives, eggs, fruit, and mint tea. The entire experience, from pre-dawn pickup to return, is orchestrated with seamless luxury.',
    bestIn: 'Marrakech',
    vipTip: 'Ask the pilot to hover over Jemaa el-Fnaa square at dawn for a truly unique photograph.',
  },
  {
    experience: 'Private Chef Dinner on a Palace Rooftop',
    icon: Utensils,
    price: 'From 2,500 MAD per couple',
    duration: '3-4 hours',
    description:
      'A private chef prepares a bespoke multi-course Moroccan feast exclusively for you on a palace rooftop. The table is set with brass lanterns, rose petals, and flickering candles with the medina skyline and Atlas Mountains as your backdrop. Courses might include saffron-infused seafood pastilla, slow-cooked lamb tagine with figs and almonds, and orange blossom milk pastry with pistachio. A sommelier pairs Moroccan wines or traditional drinks with each course. Live Gnawa or Andalusian music can be arranged.',
    bestIn: 'Marrakech, Fes',
    vipTip: 'Arrange a sommelier-led Moroccan wine pairing featuring the best of the Meknes and Atlas vineyards.',
  },
  {
    experience: 'Al Boraq High-Speed Train (First Class)',
    icon: Train,
    price: 'From 300 MAD per person (first class)',
    duration: '2 hours 10 minutes',
    description:
      'Africa\'s first high-speed train connects Tangier to Casablanca at speeds up to 320 km/h, cutting a journey that once took five hours to just over two. First-class cabins offer spacious leather seats, complimentary refreshments, power outlets, and panoramic windows. The route passes through beautiful countryside and the ancient city of Kenitra. The Al Boraq is not just transport; it is a statement of modern Morocco and a genuinely enjoyable luxury travel experience.',
    bestIn: 'Tangier to Casablanca route',
    vipTip: 'Sit on the left side for the best views of the coast as you depart Tangier.',
  },
  {
    experience: 'Royal Hammam & Spa Experience',
    icon: Sparkles,
    price: 'From 2,000 MAD per person',
    duration: '2-3 hours',
    description:
      'A royal hammam goes far beyond the standard spa visit. In a private marble steam room, an expert therapist performs a traditional black soap scrub with kessa gloves, followed by a ghassoul clay body mask, an argan oil massage, and a rose water facial. The finest spas use locally harvested argan oil, saffron from Taliouine, and rose petals from the Dades Valley. You emerge feeling reborn. The top hotel spas, like Royal Mansour\'s underground sanctuary or La Mamounia\'s 2,500-square-meter complex, elevate hammam to an art form.',
    bestIn: 'Marrakech, Fes, Essaouira',
    vipTip: 'Book the Royal Mansour underground spa for the most extraordinary hammam in Africa.',
  },
  {
    experience: 'Private Guided Medina Tour with VIP Access',
    icon: Map,
    price: 'From 2,000 MAD per group (up to 4 guests)',
    duration: '4-6 hours',
    description:
      'A private licensed guide transforms a medina visit from chaotic to captivating. They unlock doors that tourists never see: private artisan workshops where master craftsmen create zellige tilework by hand, hidden palace gardens, rooftop viewpoints known only to locals, and the homes of traditional families who invite you for mint tea. In Fes, a VIP guide can arrange access to normally closed sections of the Al-Qarawiyyin, the world\'s oldest university. In Marrakech, private evening tours of illuminated palaces offer a completely different perspective.',
    bestIn: 'Fes, Marrakech',
    vipTip: 'In Fes, request access to a private zellige workshop where masters demonstrate techniques unchanged for 800 years.',
  },
  {
    experience: 'Luxury Sahara Camel Caravan & Sunset Dinner',
    icon: Sunset,
    price: 'From 3,500 MAD per couple',
    duration: 'Half day',
    description:
      'A private camel caravan carries you deep into the golden Erg Chebbi dunes as the sun descends and the sky ignites with color. Your personal guide leads you to a panoramic dune crest where a Berber carpet, lanterns, and a table are laid out for a multi-course dinner in the sand. The desert stretches infinitely around you. After dinner, as the Milky Way appears in a sky of impossible clarity, a Berber musician plays traditional songs around a campfire. This is Morocco at its most timeless and magical.',
    bestIn: 'Merzouga',
    vipTip: 'Time your visit for a new moon for the most spectacular Sahara stargazing.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY FINE DINING
   ═══════════════════════════════════════════════════════════════ */

const fineDining = [
  {
    name: 'La Grande Table Marocaine',
    location: 'Royal Mansour, Marrakech',
    icon: Crown,
    cuisine: 'Elevated Moroccan',
    price: 'From 1,500 MAD per person',
    description: 'Chef Yannick Alleno brings Michelin-level precision to traditional Moroccan recipes. Dishes are architectural, flavors are intensely pure, and the palace setting is breathtaking. This is the finest Moroccan restaurant in the country.',
  },
  {
    name: 'Le Marocain',
    location: 'La Mamounia, Marrakech',
    icon: Star,
    cuisine: 'Classic Moroccan Palace',
    price: 'From 800 MAD per person',
    description: 'Dine in a room of staggering Moorish beauty with painted cedar ceilings and carved plaster walls. The traditional palace cuisine, from b\'stilla to tagine, is prepared with rare precision. The ambiance alone is worth the visit.',
  },
  {
    name: 'Dar Yacout',
    location: 'Marrakech Medina',
    icon: Gem,
    cuisine: 'Traditional Moroccan Feast',
    price: 'From 500 MAD per person',
    description: 'A legendary dining palace in the heart of the medina. Multiple courses arrive in a candlelit salon with zellige walls and brass lanterns. The rooftop aperitif with views over the Koutoubia minaret is iconic.',
  },
  {
    name: 'Nur',
    location: 'Fes Medina',
    icon: Sparkles,
    cuisine: 'Contemporary Moroccan',
    price: 'From 600 MAD per person',
    description: 'A beautifully restored riad offering creative takes on Fassi cuisine. Young Moroccan chefs reinterpret centuries-old recipes with modern technique, seasonal ingredients, and stunning presentation. The courtyard setting is intimate and refined.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: 7-DAY LUXURY ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const luxuryItinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech: Palace Welcome',
    icon: Plane,
    location: 'Marrakech',
    description:
      'Your private driver meets you at Marrakech Menara Airport with a chilled welcome drink in a luxury SUV. Check into your palace hotel or riad suite. Spend the afternoon exploring the private gardens, plunge pool, and rooftop terrace. In the evening, your butler arranges a private rooftop dinner with rose petals, brass lanterns, and a multi-course Moroccan feast prepared by the palace chef. The Atlas Mountains glow pink in the fading light as the muezzin\'s call drifts across the medina.',
    highlights: ['Private luxury airport transfer', 'Palace hotel check-in with butler', 'Explore the gardens and pool', 'Private rooftop welcome dinner'],
    accommodation: 'Royal Mansour or La Mamounia (from 8,000 MAD/night)',
  },
  {
    day: 2,
    title: 'Marrakech: Private Medina & Royal Hammam',
    icon: Sparkles,
    location: 'Marrakech',
    description:
      'Begin with a private guided medina tour led by an expert historian. Visit the Bahia Palace, the hidden Saadian Tombs, and artisan workshops where master craftsmen create zellige tilework by hand. Your guide unlocks doors tourists never see. After lunch at a palace restaurant, retreat to the Royal Mansour underground spa or La Mamounia\'s 2,500-square-meter sanctuary for a royal hammam experience with black soap, ghassoul clay, and pure argan oil massage. End the day with cocktails on the rooftop as the sun sets.',
    highlights: ['Private historian-led medina tour', 'VIP access to artisan workshops', 'Royal hammam and spa treatment', 'Rooftop sunset cocktails'],
    accommodation: 'Same palace hotel in Marrakech',
  },
  {
    day: 3,
    title: 'Sunrise Balloon & Atlas Mountain Escape',
    icon: Sun,
    location: 'Marrakech / Atlas Mountains',
    description:
      'Wake before dawn for a private hot air balloon ride over the palmeraie. Float silently above the landscape as the Atlas Mountains glow gold in the first light. After a Berber breakfast in the countryside, your private driver takes you into the High Atlas to Kasbah Tamadot for a luxury mountain lunch on the panoramic terrace. Walk through a traditional Berber village, take in the mountain air, then return to Marrakech for an evening at Dar Yacout, the legendary candlelit dining palace.',
    highlights: ['Private sunrise hot air balloon', 'Berber countryside breakfast', 'Lunch at Kasbah Tamadot', 'Evening at Dar Yacout palace'],
    accommodation: 'Same palace hotel in Marrakech',
  },
  {
    day: 4,
    title: 'Journey South: Kasbahs & Dades Valley',
    icon: Map,
    location: 'Marrakech to Dades Valley',
    description:
      'Depart in a luxury SUV with your private driver-guide over the dramatic Tizi n\'Tichka pass. Stop at the UNESCO kasbah of Ait Benhaddou for a private guided tour of this ancient fortified village. Continue through the Valley of Roses to the spectacular Dades Gorge, where your luxury kasbah hotel perches on the cliff edge with vertigo-inducing valley views. Dinner is served on a private terrace as a thousand stars emerge above the gorge.',
    highlights: ['Luxury SUV with private driver-guide', 'UNESCO Ait Benhaddou private tour', 'Valley of Roses drive', 'Clifftop kasbah hotel dinner'],
    accommodation: 'Luxury kasbah hotel in Dades (from 3,000 MAD/night)',
  },
  {
    day: 5,
    title: 'Sahara Desert: Private Glamping Under the Stars',
    icon: Tent,
    location: 'Dades Valley to Merzouga',
    description:
      'Continue east through the towering Todra Gorge to Merzouga, gateway to the Erg Chebbi dunes. Your private luxury camp awaits at the edge of the sand sea: a lavish tented suite with king-size bed, marble bathroom, and private terrace. At sunset, a private camel caravan carries you deep into the dunes where a table, lanterns, and a Berber musician await on a panoramic dune crest for a multi-course dinner under the Milky Way. This is the single most extraordinary night of any luxury Morocco trip.',
    highlights: ['Todra Gorge passage', 'Private luxury desert camp', 'Sunset camel caravan', 'Candlelit dinner under the Milky Way'],
    accommodation: 'Private luxury desert camp (from 5,000 MAD/night)',
  },
  {
    day: 6,
    title: 'Sahara Sunrise & Fly to Fes',
    icon: Compass,
    location: 'Merzouga to Fes',
    description:
      'Rise before dawn to climb the highest dune and watch the sunrise paint the Sahara in gold, amber, and rose. After a leisurely camp breakfast, transfer to Errachidia airport for a short domestic flight to Fes. Check into Riad Fes, the city\'s most palatial riad, with soaring zouak ceilings and a candlelit courtyard pool. In the evening, enjoy a refined Fassi dinner at the riad\'s award-winning restaurant, followed by drinks on the rooftop bar overlooking the ancient medina.',
    highlights: ['Sahara sunrise from the dunes', 'Domestic flight to Fes', 'Check into Riad Fes palace', 'Rooftop dinner over the medina'],
    accommodation: 'Riad Fes (from 2,800 MAD/night)',
  },
  {
    day: 7,
    title: 'Fes: Ancient Medina & Farewell Feast',
    icon: BookOpen,
    location: 'Fes',
    description:
      'A private historian guide leads you through the world\'s largest car-free urban area. Visit the medieval tanneries, the 9th-century Al-Qarawiyyin (the world\'s oldest university), the Bou Inania madrasa, and hidden zellige workshops. A private cooking class with a Fassi chef teaches you the secrets of rfissa and pastilla in a palace kitchen. In the evening, a farewell dinner at Nur, the city\'s finest contemporary restaurant, celebrates the end of an extraordinary journey through luxury Morocco.',
    highlights: ['Private historian guide in ancient medina', 'Tanneries and Al-Qarawiyyin access', 'Private cooking class with palace chef', 'Farewell dinner at Nur restaurant'],
    accommodation: 'Riad Fes (from 2,800 MAD/night)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Luxury',
    icon: Crown,
    totalBudget: 'From 40,000 - 60,000 MAD per person (7 days)',
    color: 'text-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]/10',
    description: 'Five-star riads and palace hotels, private guides, premium desert camps, fine dining, and all private transfers. An exceptional week of Moroccan luxury.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 18,000 - 30,000 MAD', detail: '5-star riads and palace hotels, from 3,000-5,000 MAD/night' },
      { item: 'Private transport & flights', cost: 'From 6,000 - 10,000 MAD', detail: 'Private driver, luxury SUV, domestic flights' },
      { item: 'Fine dining (7 days)', cost: 'From 6,000 - 10,000 MAD', detail: 'Palace restaurants, private rooftop dinners' },
      { item: 'Premium experiences', cost: 'From 6,000 - 8,000 MAD', detail: 'Private balloon, royal spa, VIP medina tours' },
      { item: 'Private guides & tips', cost: 'From 4,000 - 6,000 MAD', detail: 'Expert historian guides, gratuities' },
    ],
  },
  {
    tier: 'Ultra-Luxury',
    icon: Gem,
    totalBudget: 'From 80,000 - 150,000+ MAD per person (7 days)',
    color: 'text-purple-600',
    bgColor: 'bg-purple-600/10',
    description: 'Palace suites with butlers, helicopter transfers, private desert camps with heated pools, bespoke experiences, Michelin-level dining, and every detail orchestrated to perfection.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 40,000 - 72,000 MAD', detail: 'Royal Mansour suites, Dar Ahlam, from 6,000-12,000 MAD/night' },
      { item: 'Helicopter & luxury transport', cost: 'From 15,000 - 30,000 MAD', detail: 'Helicopter transfers, luxury SUV, first-class trains' },
      { item: 'Bespoke dining', cost: 'From 10,000 - 20,000 MAD', detail: 'Private chefs, palace dining, sommelier pairings' },
      { item: 'Exclusive experiences', cost: 'From 10,000 - 20,000 MAD', detail: 'Private balloon, helicopter Atlas tour, desert glamping' },
      { item: 'Concierge, guides & gratuities', cost: 'From 5,000 - 10,000 MAD', detail: 'Personal concierge, expert guides, premium gratuities' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a luxury trip to Morocco cost?',
    answer:
      'A luxury Morocco trip for 7 days costs from 40,000-80,000 MAD per person, including 5-star palace hotels, private transfers, fine dining, and premium experiences like hot air balloons and royal hammam treatments. Ultra-luxury itineraries with helicopter transfers, private desert camps with heated pools, and bespoke experiences designed by a personal concierge can exceed 120,000 MAD per person for a week. Despite these prices, Morocco offers exceptional luxury value compared to equivalent experiences in France, Italy, or the Middle East.',
  },
  {
    question: 'What are the best luxury hotels in Morocco?',
    answer:
      'The top luxury hotels include Royal Mansour Marrakech (private riad suites with personal butlers, from 12,000 MAD/night), La Mamounia Marrakech (legendary palace in 8-hectare gardens, from 8,000 MAD/night), Dar Ahlam in the Skoura oasis (bespoke no-menu dining, from 6,000 MAD/night), Kasbah Tamadot in the Atlas Mountains (Richard Branson\'s retreat, from 5,000 MAD/night), and Riad Fes (palatial riad with zouak ceilings, from 2,800 MAD/night). Each offers a completely distinct luxury experience.',
  },
  {
    question: 'Is Morocco a good destination for luxury travel?',
    answer:
      'Morocco is one of the world\'s finest luxury travel destinations. It combines palatial architecture dating back centuries, world-class spas using indigenous ingredients like argan oil and rose water, Michelin-level dining in settings of extraordinary beauty, private Sahara desert glamping under the clearest skies on Earth, and deeply personalized service rooted in Moroccan hospitality traditions. The cultural richness, from ancient medinas to Atlas Mountain villages, adds a dimension of experience that pure resort destinations simply cannot replicate. Prices for equivalent luxury are 30-50% lower than Europe.',
  },
  {
    question: 'What is the best time of year for luxury travel in Morocco?',
    answer:
      'The best months for luxury travel are March to May and September to November. Spring brings wildflowers in the Atlas, pleasant warmth (20-28 degrees Celsius), and the famous rose harvest in the Dades Valley. Autumn offers golden light, comfortable temperatures, and the date harvest in palm oases. Winter (December-February) is excellent for Marrakech with mild sunny days, festive celebrations, and snow-capped Atlas backdrops. Avoid July-August when inland temperatures exceed 40 degrees Celsius, though Essaouira on the coast remains pleasant year-round.',
  },
  {
    question: 'Can I hire a private guide for luxury travel in Morocco?',
    answer:
      'Private guides are essential for luxury Morocco travel and can be arranged through your hotel concierge or a specialist tour operator. A licensed English-speaking private guide costs from 1,500-3,000 MAD per day depending on expertise and city. The best guides are historians, architects, or cultural specialists who offer deep knowledge, exclusive access to artisan workshops, private homes, and normally closed historical sites. For Fes, a private guide is virtually essential given the complexity of the medina. For the Sahara, experienced desert guides ensure safety and access to the most spectacular locations.',
  },
  {
    question: 'What luxury experiences are unique to Morocco?',
    answer:
      'Morocco offers luxury experiences unavailable elsewhere in the world: private overnight Sahara desert glamping in lavish tented suites under the Milky Way, traditional royal hammam rituals with indigenous argan oil and Dades Valley rose petals, candlelit rooftop dining above ancient medinas, private cooking classes with palace chefs, helicopter transfers over the dramatic Atlas Mountains, sunrise hot air balloon flights over Marrakech, artisan workshops where master craftsmen demonstrate 800-year-old zellige techniques, and Africa\'s first high-speed train, the Al Boraq.',
  },
  {
    question: 'How do I get around Morocco in luxury?',
    answer:
      'Luxury transport options include private drivers with Mercedes S-Class or Range Rover vehicles (from 2,500 MAD per day including fuel and driver), helicopter transfers between cities (from 25,000 MAD per flight), the Al Boraq high-speed train for the Tangier to Casablanca route (from 300 MAD first class), and domestic flights between Marrakech, Fes, Errachidia, and other cities (from 1,000 MAD per person). Most luxury hotels and riads arrange all transfers seamlessly through their concierge. For the desert, 4x4 luxury SUVs are the standard.',
  },
  {
    question: 'What should I pack for a luxury Morocco trip?',
    answer:
      'Pack elegant but modest clothing for medina exploration and fine dining: smart casual outfits that cover shoulders and knees for cultural sites, linen or cotton in neutral tones for daytime, and something more refined for palace restaurant evenings. Bring comfortable designer walking shoes for cobblestone medinas, lightweight layers for cool desert evenings, a quality swimsuit for riad pools and palace spas, high-factor sunscreen, designer sunglasses, and a quality scarf or pashmina for desert wind. Leave room in your luggage for luxury artisan purchases: handmade Moroccan leather, zellige ceramics, saffron from Taliouine, and pure argan oil.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLuxuryTravelPage() {
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
            backgroundImage: 'url(/images/hero-riad-interior.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Luxury Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Luxury Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Luxury Travel Morocco:
            <br className="hidden md:block" /> The 5-Star Experience
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Palace hotels with private butlers, Sahara glamping under the Milky Way, helicopter tours
            over the Atlas, and Michelin-level dining in ancient medinas. The definitive guide to
            luxury travel in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a World-Class Luxury Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has earned its place among the world&apos;s most compelling luxury destinations,
                and for reasons that go far beyond thread count and butler service. This is a country
                where palatial architecture has been perfected over a thousand years, where the art of
                hospitality is woven into the cultural DNA, and where landscapes of staggering beauty
                shift from snow-capped mountains to golden desert in a single day. For the discerning
                traveler, Morocco offers something that few luxury destinations can match: authentic
                cultural depth combined with world-class comfort.
              </p>
              <p>
                The luxury hotel scene in Morocco rivals anything in Europe or the Middle East. Palace
                hotels like the Royal Mansour and La Mamounia offer suites with private plunge pools,
                personal butlers, and dining rooms that would not look out of place in a Renaissance
                painting. In the Sahara, private luxury camps place king-size beds and marble bathrooms
                at the edge of an ocean of golden dunes, with nothing between you and the Milky Way.
                In the Atlas Mountains, retreats like Kasbah Tamadot offer infinity pools suspended
                above ancient Berber villages with panoramic views of 4,000-meter peaks.
              </p>
              <p>
                This guide covers everything you need to plan the ultimate luxury Morocco trip: the
                finest hotels and riads, private desert experiences, helicopter tours, fine dining,
                luxury spas and hammams, VIP experiences, a complete 7-day luxury itinerary with
                day-by-day plans, realistic budgets, and answers to the most common questions.
                Whether you are celebrating a milestone, planning a once-in-a-lifetime journey, or
                simply seeking the finest that travel has to offer, Morocco delivers magnificently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Luxury Hotels & Riads ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Luxury Hotels &amp; Riads in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From royal palaces to intimate desert retreats, these are the finest places to stay
            in Morocco for discerning travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season. Peak season (October-April) and holidays may be 30-50% higher. Book well in advance for luxury travel.
          </p>

          <div className="space-y-10">
            {luxuryHotels.map((hotel) => {
              const HotelIcon = hotel.icon;
              return (
                <div key={hotel.rank} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={hotel.image}
                        alt={`${hotel.name} in ${hotel.city}, one of Morocco's finest luxury hotels`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <HotelIcon className="w-5 h-5 text-white" />
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {hotel.name}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 italic">{hotel.city} &mdash; {hotel.type}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                        {hotel.price}
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{hotel.description}</p>
                      <div className="space-y-2">
                        {hotel.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Private Luxury Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Private Luxury Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bespoke experiences that elevate a Morocco trip from memorable to extraordinary. Each can
            be arranged through your hotel concierge or a specialist luxury tour operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryExperiences.map((item) => {
              const ExpIcon = item.icon;
              return (
                <div key={item.experience} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.experience}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <strong>Best in:</strong> {item.bestIn}
                    </div>
                    <div className="flex items-start gap-1.5 p-2 bg-[var(--surface-muted)] rounded-lg">
                      <Crown className="w-3 h-3 mt-0.5 text-[var(--color-gold)] shrink-0" />
                      <span className="text-[var(--text-secondary)] italic">{item.vipTip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fine Dining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wine className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fine Dining in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s finest restaurants combine centuries-old culinary traditions with modern
            technique in settings of extraordinary beauty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {fineDining.map((restaurant) => {
              const RestIcon = restaurant.icon;
              return (
                <div key={restaurant.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <RestIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {restaurant.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {restaurant.cuisine}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {restaurant.price}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{restaurant.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person and may vary by season. Reservations are essential at all fine dining venues. Many palace hotels arrange priority bookings for their guests.
          </p>
        </div>
      </section>

      {/* ── 7-Day Luxury Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Ultimate 7-Day Luxury Morocco Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A day-by-day plan combining palace luxury in Marrakech, private Sahara glamping, and
            ancient Fes. This is the definitive luxury Morocco route.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            This itinerary can be customized. Add Essaouira for coastal luxury, extend the desert, or include Chefchaouen. Your hotel concierge or luxury tour operator can tailor every detail.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {luxuryItinerary.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <DayIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                            Day {day.day}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {day.location}
                          </span>
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          {day.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">{day.description}</p>
                        <div className="space-y-2 mb-4">
                          {day.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-[var(--border-default)]">
                          <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <Bed className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {day.accommodation}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Morocco Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic budgets for luxury and ultra-luxury Morocco travel. All prices are per person
            for 7 days.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are in Moroccan Dirhams (MAD). 1 USD is approximately 10 MAD, 1 EUR approximately 11 MAD, 1 GBP approximately 13 MAD (as of 2026). Seasonal pricing may vary.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${tier.bgColor} flex items-center justify-center shrink-0`}>
                      <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tier.tier}
                      </h3>
                      <span className={`text-xs font-semibold ${tier.color}`}>{tier.totalBudget}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                  <div className="space-y-3">
                    {tier.breakdown.map((line, i) => (
                      <div key={i} className="border-b border-[var(--border-default)] pb-2 last:border-b-0">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-xs font-medium text-[var(--text-primary)]">{line.item}</span>
                          <span className={`text-xs font-semibold ${tier.color}`}>{line.cost}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{line.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Luxury Travel Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Luxury Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Palace Hotels 4-6 Months Ahead
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s finest palace hotels and boutique riads have limited suites and sell out
                months in advance, especially during peak season (October-April). For the Royal Mansour
                or Dar Ahlam, book at least 6 months ahead. Mention special occasions; many properties
                offer complimentary upgrades and bespoke arrangements for celebrations.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Use Your Hotel Concierge for Everything
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The concierge at a 5-star Moroccan hotel is your greatest luxury asset. They arrange
                private guides, helicopter transfers, desert camp bookings, restaurant reservations,
                VIP access, and bespoke experiences not available to the general public. Build a
                relationship with your concierge from the first email; it pays dividends throughout your trip.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping at Luxury Properties
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                At luxury hotels and riads, tip from 50-100 MAD per day for housekeeping, from 100-200 MAD
                for exceptional concierge service, from 50-100 MAD per meal for restaurant staff, and
                from 200-500 MAD per day for private guides. For butlers and personal staff who go above
                and beyond, a generous tip at the end of your stay is warmly appreciated and customary.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hire a Professional Photographer
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is one of the most photogenic countries on Earth, and a professional photographer
                can capture your luxury experience beautifully. Expect from 2,000-4,000 MAD for a 2-3 hour
                session. The best light is at sunrise and the golden hour before sunset. Your hotel can
                recommend vetted local photographers who know the most spectacular angles and hidden locations.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Travel Insurance Is Non-Negotiable
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For luxury travel, invest in comprehensive travel insurance that covers medical evacuation,
                trip cancellation, lost designer luggage, and adventure activities like helicopter tours
                and hot air balloon flights. Morocco has excellent private hospitals in major cities,
                but high-quality insurance provides essential peace of mind for a significant investment.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Coffee className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Embrace the Pace of Moroccan Luxury
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The greatest luxury in Morocco is time. Do not over-schedule your days. Leave space for
                a long breakfast on a palace terrace, a spontaneous afternoon by the riad pool, a slow
                walk through a medina without a destination. The most memorable moments in luxury travel
                are often unplanned. Build at least two completely open half-days into your itinerary.
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
            Related Luxury Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/luxury" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete overview of luxury experiences, destinations, and planning tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Bed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top-rated riads in Marrakech, Fes, Essaouira, and Chefchaouen.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Royal hammams, luxury spa experiences, and wellness retreats across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-honeymoon-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Honeymoon Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Romantic itineraries, luxury riads for couples, and honeymoon planning.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-hotels" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Hotels
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest palace hotels and luxury accommodation across Morocco.
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
          <Crown className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Experience Luxury Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From palace suites to private Sahara camps, Morocco offers luxury travel experiences that
            rival anywhere on Earth at exceptional value. Begin planning your 5-star journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-luxury-hotels"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Building className="w-4 h-4" />
              Explore Luxury Hotels
            </Link>
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Spa &amp; Hammam Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
