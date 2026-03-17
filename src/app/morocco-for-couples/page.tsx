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
  AlertTriangle,
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
  CalendarHeart,
  Globe,
  MessageCircle,
  Bed,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco for Couples 2026 | Romantic Trips, Riads & Experiences',
  description:
    'The ultimate couples\' guide to Morocco. Romantic riads, desert glamping, sunset spots, couple-friendly hammams, proposal ideas, and the best cities for a romantic Moroccan getaway. Prices, tips, and itineraries.',
  keywords: [
    'Morocco for couples',
    'romantic Morocco trip',
    'Morocco honeymoon',
    'romantic riads Morocco',
    'couples desert glamping Morocco',
    'Morocco proposal ideas',
    'romantic restaurants Morocco',
    'Marrakech for couples',
    'Essaouira couples trip',
    'Chefchaouen romantic getaway',
    'Morocco anniversary trip',
    'couple hammam Morocco',
    'Morocco romantic itinerary',
    'PDA rules Morocco',
    'Morocco couple activities',
    'Morocco romantic hotels',
    'best cities couples Morocco',
    'hot air balloon Marrakech couples',
    'Morocco cooking class couples',
    'Morocco sunset spots',
    'romantic Morocco 2026',
  ],
  openGraph: {
    title: 'Morocco for Couples 2026 | Romantic Trips, Riads & Experiences',
    description:
      'Plan the perfect romantic trip to Morocco. Discover romantic riads, desert glamping, sunset spots, couple-friendly hammams, and the best cities for couples.',
    url: `${BASE_URL}/morocco-for-couples`,
    images: [
      {
        url: `${BASE_URL}/images/hero-couples-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Couple enjoying a romantic sunset on a Moroccan riad rooftop terrace with lanterns and rose petals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco for Couples 2026 | Romantic Trips & Experiences',
    description:
      'Romantic riads, desert glamping, sunset spots, and proposal ideas. The ultimate guide to Morocco for couples.',
    images: [`${BASE_URL}/images/hero-couples-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-for-couples` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-for-couples`,
  name: 'Morocco for Couples 2026 | Romantic Trips, Riads & Experiences',
  description:
    'The ultimate couples\' guide to Morocco. Romantic riads, desert glamping, sunset spots, couple-friendly hammams, proposal ideas, and the best cities for a romantic Moroccan getaway.',
  url: `${BASE_URL}/morocco-for-couples`,
  image: `${BASE_URL}/images/hero-couples-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-for-couples`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco for Couples', item: `${BASE_URL}/morocco-for-couples` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good destination for couples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is an excellent destination for couples. The country offers romantic riads with private courtyards, desert glamping under the stars, stunning sunset spots, couple-friendly hammams, and world-class dining. Cities like Marrakech, Essaouira, and Chefchaouen are particularly popular for romantic getaways.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can couples show affection in public in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a conservative Muslim country. Holding hands is generally acceptable for married couples, but kissing and other displays of affection in public are frowned upon and can attract unwanted attention. Unmarried couples should be especially discreet. Within private spaces like riads, hotels, and restaurants, couples can be more relaxed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can unmarried couples share a hotel room in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technically, Moroccan law prohibits unmarried Moroccan couples from sharing a room. However, for foreign tourists, this is rarely enforced. International hotels, riads, and guesthouses routinely accommodate unmarried foreign couples without issue. You will not be asked for a marriage certificate at tourist-oriented accommodations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most romantic city in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is the most popular romantic destination with its luxury riads, rooftop restaurants, and desert excursions. Essaouira offers a more laid-back coastal romance with sunset beach walks. Chefchaouen, the Blue City, is visually stunning and perfect for couples who love photography and quiet mountain charm.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a romantic trip to Morocco cost for a couple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mid-range romantic trip to Morocco for two costs from 8,000-15,000 MAD per week including accommodation in romantic riads (from 1,200 MAD/night), dining, activities, and transport. A luxury experience with 5-star riads, private desert camps, and fine dining can cost from 25,000-50,000 MAD per week for two.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best couple activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top couple activities include private cooking classes (from 400 MAD per couple), hot air balloon rides over Marrakech (from 2,000 MAD per person), couple hammam experiences (from 1,200 MAD for two), sunset camel rides (from 300 MAD per person), horse riding on the beach in Essaouira (from 400 MAD per person), and private desert glamping (from 3,000 MAD per night for two).',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR COUPLES
   ═══════════════════════════════════════════════════════════════ */

const bestCitiesForCouples = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-medina.webp',
    tagline: 'The Classic Romantic Choice',
    description:
      'Marrakech is where most couples begin their Moroccan love story. The city pulses with sensory magic: the scent of orange blossom in hidden riad courtyards, the glow of brass lanterns at rooftop dinners, the call to prayer drifting across the rose-tinted skyline at dusk. From luxury spas to hot air balloon rides at dawn, Marrakech delivers romance on an epic scale.',
    highlights: [
      'World-class riad accommodation',
      'Rooftop dining with Atlas views',
      'Hot air balloon rides at sunrise',
      'Luxury couple hammam experiences',
      'Day trips to Ourika Valley and Ouzoud Falls',
    ],
    bestFor: 'First-time visitors, luxury seekers, foodies, anniversary celebrations',
    budget: 'From 1,500 MAD/night for a romantic riad suite',
  },
  {
    city: 'Essaouira',
    icon: Wind,
    image: '/images/hero-essaouira-ramparts.webp',
    tagline: 'Bohemian Coastal Romance',
    description:
      'Essaouira is Marrakech\'s cooler, calmer counterpart. This whitewashed coastal town wrapped in Atlantic breezes offers a different kind of romance: long walks on windswept beaches, sunset drinks at the ramparts, fresh seafood by the harbor, and a Bohemian art scene. The pace is slower, the crowds thinner, and the vibe more intimate.',
    highlights: [
      'Sunset walks along the beach and ramparts',
      'Horse riding on the beach for two',
      'Fresh seafood at the harbor',
      'Boutique riad stays in the medina',
      'Art galleries and coastal charm',
    ],
    bestFor: 'Laid-back couples, beach lovers, artists, second-visit travelers',
    budget: 'From 800 MAD/night for a charming riad',
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    image: '/images/hero-chefchaouen-blue.webp',
    tagline: 'The Blue City of Dreams',
    description:
      'Chefchaouen is one of the most photogenic places on Earth and an unforgettable backdrop for couples. Every corner of this blue-washed mountain town is a photograph waiting to happen. The Rif Mountain air is cool and fresh, the pace is gentle, and the sunsets over the valley are breathtaking. It is quieter and more reflective than Marrakech, making it ideal for couples who want quality time together.',
    highlights: [
      'Endlessly photogenic blue streets',
      'Mountain hiking trails for two',
      'Quiet rooftop terrace evenings',
      'Ras el-Maa waterfall walks',
      'Authentic mountain village atmosphere',
    ],
    bestFor: 'Photography-loving couples, hikers, those seeking tranquility',
    budget: 'From 500 MAD/night for a traditional guesthouse',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC ACCOMMODATION PICKS
   ═══════════════════════════════════════════════════════════════ */

const romanticAccommodation = [
  {
    rank: 1,
    name: 'Riad Yasmine',
    city: 'Marrakech',
    type: 'Boutique Riad',
    icon: Heart,
    price: 'From 1,800 MAD per night',
    description:
      'Perhaps the most photographed riad in Morocco, and for good reason. The turquoise plunge pool surrounded by lush greenery and zellige tilework is achingly beautiful. Rooms are elegantly decorated with Berber textiles and brass fixtures. The rooftop terrace offers candlelit dinners with Atlas Mountain views. Breakfast is served by the pool.',
    highlights: ['Iconic turquoise plunge pool', 'Rooftop candlelit dinners', 'Atlas Mountain views', 'Zellige-decorated suites'],
  },
  {
    rank: 2,
    name: 'La Sultana Marrakech',
    city: 'Marrakech',
    type: 'Luxury Palace Riad',
    icon: Crown,
    price: 'From 4,500 MAD per night',
    description:
      'Five interconnected riads forming one of the most opulent stays in Morocco. Private plunge pools, a rooftop spa with city views, and suites decorated with museum-quality antiques. The private couple hammam experience here is legendary. Each room tells a different story from Moroccan history.',
    highlights: ['Private plunge pools in suites', 'Rooftop spa for two', 'Museum-quality interiors', 'Private couple hammam'],
  },
  {
    rank: 3,
    name: 'Dar Ahlam',
    city: 'Ouarzazate',
    type: 'Luxury Desert Retreat',
    icon: Sparkles,
    price: 'From 6,000 MAD per night',
    description:
      'The "House of Dreams" lives up to its name. This restored kasbah in the Skoura oasis operates as a maison d\'hotes with just 14 suites, offering a level of personalization that larger hotels cannot match. There are no menus; the chef prepares whatever you desire. Dinner might be served in the rose garden, on the roof, or in the desert under the stars.',
    highlights: ['Utterly personalized service', 'No-menu dining anywhere you choose', 'Restored kasbah architecture', 'Desert excursions for two'],
  },
  {
    rank: 4,
    name: 'Lina Ryad & Spa',
    city: 'Chefchaouen',
    type: 'Boutique Riad',
    icon: Gem,
    price: 'From 1,200 MAD per night',
    description:
      'The finest accommodation in the Blue City. Perched at the edge of the medina with panoramic views of the blue-washed rooftops and the Rif Mountains beyond. The terrace is one of the most romantic spots in all of Morocco at sunset. Rooms blend traditional Chefchaouen blue with modern comforts.',
    highlights: ['Panoramic Rif Mountain views', 'Spectacular sunset terrace', 'In-house spa treatments', 'Blue-themed luxury rooms'],
  },
  {
    rank: 5,
    name: 'Villa des Orangers',
    city: 'Marrakech',
    type: 'Relais & Chateaux',
    icon: Crown,
    price: 'From 3,500 MAD per night',
    description:
      'A Relais and Chateaux property with just 27 rooms built around three courtyards filled with orange trees. The heated pool, the Michelin-recommended restaurant, and the attentive service create an atmosphere of refined romance. The private terrace suites with plunge pools are made for couples.',
    highlights: ['Relais & Chateaux quality', 'Heated pool and spa', 'Private terrace suites', 'Orange tree courtyards'],
  },
  {
    rank: 6,
    name: 'L\'Heure Bleue Palais',
    city: 'Essaouira',
    type: 'Heritage Palace Hotel',
    icon: Building,
    price: 'From 2,200 MAD per night',
    description:
      'Essaouira\'s most elegant address. This heritage palace near the ramparts features an indoor pool, a cinema room, and a rooftop terrace with 360-degree ocean and medina views. The suites are grand without being ostentatious. The evening rooftop aperitif watching the sun set over the Atlantic is unforgettable.',
    highlights: ['Rooftop sunset terrace', 'Indoor heated pool', 'Ocean and medina views', 'Heritage palace atmosphere'],
  },
  {
    rank: 7,
    name: 'Scarabeo Camp',
    city: 'Agafay Desert (near Marrakech)',
    type: 'Desert Glamping',
    icon: Tent,
    price: 'From 3,000 MAD per night',
    description:
      'Luxury desert glamping just 40 minutes from Marrakech. The Agafay stone desert provides a Saharan-like landscape without the long drive to Merzouga. Tented suites have real beds, hot showers, and private terraces. Dinner is served under the stars with live music. The silence at night, broken only by the wind, is profoundly romantic.',
    highlights: ['Luxury tented suites', 'Dinner under the stars', 'Atlas Mountain backdrop', 'Just 40 minutes from Marrakech'],
  },
  {
    rank: 8,
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    type: 'Mountain Luxury Resort',
    icon: Mountain,
    price: 'From 5,000 MAD per night',
    description:
      'Sir Richard Branson\'s mountain retreat in the High Atlas. Perched above a Berber village with sweeping views of the valley and peaks, it combines Moroccan artisanship with Virgin\'s signature style. The infinity pool, the spa with mountain views, and the private terrace suites create one of Morocco\'s most romantic settings.',
    highlights: ['Infinity pool with mountain views', 'Spa with panoramic terrace', 'Private Berber village setting', 'Helicopter arrival option'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SUNSET SPOTS
   ═══════════════════════════════════════════════════════════════ */

const sunsetSpots = [
  {
    name: 'Le Jardin Secret Rooftop',
    city: 'Marrakech',
    description: 'Watch the sun set over the medina rooftops and the Atlas Mountains from this beautifully restored historic garden. The rooftop tower offers one of the best vantage points in the entire city.',
    tip: 'Visit from 5 PM. Entry from 80 MAD per person.',
  },
  {
    name: 'Cafe Clock Rooftop',
    city: 'Fes',
    description: 'Sip a date milkshake or Moroccan mint tea as the sun paints the ancient Fes medina in golden light. The panoramic view of the world\'s largest car-free urban area is mesmerizing at dusk.',
    tip: 'Arrive by 5:30 PM for the best terrace seats.',
  },
  {
    name: 'Essaouira Ramparts (Skala de la Ville)',
    city: 'Essaouira',
    description: 'The Atlantic-facing ramparts of Essaouira offer one of Morocco\'s most dramatic sunset experiences. Watch the sun drop into the ocean while fishing boats return to the harbor. The cannons along the fortress wall add historic drama.',
    tip: 'Free access. Best spot is near the Skala de la Ville at the north end.',
  },
  {
    name: 'Spanish Mosque Viewpoint',
    city: 'Chefchaouen',
    description: 'A short uphill walk from the medina brings you to this abandoned mosque with the best panoramic view of the Blue City. At sunset, the blue buildings glow pink and gold against the green Rif Mountains.',
    tip: 'A 15-minute uphill walk from the medina. Bring a blanket to sit on.',
  },
  {
    name: 'Erg Chebbi Dunes',
    city: 'Merzouga (Sahara)',
    description: 'Nothing compares to watching the sun set over the Sahara. The shifting colors of the Erg Chebbi dunes, from gold to orange to deep purple, create a spectacle that couples never forget. Many desert camps include sunset camel rides.',
    tip: 'Book a desert camp with a sunset camel trek from 300 MAD per person.',
  },
  {
    name: 'Cafe des Epices',
    city: 'Marrakech',
    description: 'A laid-back rooftop cafe overlooking the bustling Rahba Kedima spice square. The view at sunset transforms the ochre medina into a warm golden canvas. Simple drinks, zero pretension, maximum atmosphere.',
    tip: 'Order fresh-squeezed orange juice from 20 MAD. Gets busy after 5 PM.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COUPLE ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const coupleActivities = [
  {
    activity: 'Private Cooking Class',
    icon: Utensils,
    price: 'From 400 MAD per couple',
    duration: '3-4 hours',
    description:
      'Learn to make a traditional Moroccan tagine, couscous, or pastilla together. Many classes start with a guided souk visit to buy ingredients. You cook side by side with a local chef, then enjoy the meal you prepared on a rooftop terrace.',
    bestIn: 'Marrakech, Fes',
    romanticFactor: 'Cooking together in a riad kitchen, then sharing the meal you made',
  },
  {
    activity: 'Hot Air Balloon Ride',
    icon: Compass,
    price: 'From 2,000 MAD per person',
    duration: '3-4 hours (including transfer)',
    description:
      'Float silently over the Marrakech palmeraie and the Atlas foothills at sunrise. The world below is quiet, the air is cool, and the view stretches to the snow-capped High Atlas. Many operators include a Berber breakfast after landing.',
    bestIn: 'Marrakech',
    romanticFactor: 'Sharing a sunrise from a thousand feet above the desert',
  },
  {
    activity: 'Couple Hammam Experience',
    icon: Sparkles,
    price: 'From 1,200 MAD for two',
    duration: '90 minutes to 2 hours',
    description:
      'A private hammam experience for two. You share a steam room, receive side-by-side scrubs and massages, and relax in a private lounge with mint tea and pastries. The best spas use rose petals, argan oil, and orange blossom products.',
    bestIn: 'Marrakech, Fes, Essaouira',
    romanticFactor: 'A deeply relaxing shared experience in a private, intimate setting',
  },
  {
    activity: 'Beach Horse Riding',
    icon: Wind,
    price: 'From 400 MAD per person',
    duration: '1.5-2 hours',
    description:
      'Ride along the Atlantic coast on horseback as the sun sets. Essaouira\'s long, wide beach is perfect for this. The horses are well-trained, and guides accommodate all experience levels. The combination of ocean spray, golden light, and the rhythm of the ride is unforgettable.',
    bestIn: 'Essaouira, Agadir',
    romanticFactor: 'Riding side by side along a sunset beach with the Atlantic waves',
  },
  {
    activity: 'Sahara Desert Glamping',
    icon: Tent,
    price: 'From 3,000 MAD per night for two',
    duration: '2-3 days recommended',
    description:
      'Spend the night in a luxury desert camp at the edge of the Erg Chebbi dunes. Camps range from basic Berber tents to luxury suites with king-size beds, en-suite bathrooms, and private terraces. Dinner by candlelight in the desert, followed by stargazing with zero light pollution.',
    bestIn: 'Merzouga, Zagora, Agafay',
    romanticFactor: 'Sleeping under a canopy of stars in absolute silence, together',
  },
  {
    activity: 'Sunset Camel Trek',
    icon: Sunset,
    price: 'From 300 MAD per person',
    duration: '1-2 hours',
    description:
      'A camel ride into the Sahara dunes at sunset is the quintessential Moroccan romantic experience. The golden dunes, the fading light, and the gentle sway of the camels create a scene from a film. Most treks include mint tea at a viewpoint.',
    bestIn: 'Merzouga, Agafay Desert',
    romanticFactor: 'A cinematic shared adventure as the desert turns gold and crimson',
  },
  {
    activity: 'Private Riad Rooftop Dinner',
    icon: Utensils,
    price: 'From 600 MAD per couple',
    duration: '2-3 hours',
    description:
      'Many riads offer private rooftop dinners for couples. A table set with lanterns, rose petals, and candles. A multi-course Moroccan feast served under the stars. Some include live Gnawa or Andalusian music. This is Morocco at its most romantic.',
    bestIn: 'Marrakech, Fes, Essaouira',
    romanticFactor: 'A private candlelit dinner under the stars on a Moroccan rooftop',
  },
  {
    activity: 'Atlas Mountain Day Trip for Two',
    icon: Mountain,
    price: 'From 800 MAD per couple (private transfer)',
    duration: 'Full day',
    description:
      'Escape the city with a private day trip to the Atlas Mountains. Visit the Ourika Valley with its terraced Berber villages and waterfalls, or drive the dramatic Tizi n\'Test pass. Lunch in a Berber home with valley views. The mountain air and landscapes are a refreshing contrast to the medina.',
    bestIn: 'From Marrakech',
    romanticFactor: 'A private adventure through stunning mountain scenery with just the two of you',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const romanticRestaurants = [
  {
    name: 'Le Jardin',
    city: 'Marrakech',
    cuisine: 'Moroccan-Mediterranean fusion',
    price: 'From 250 MAD per person',
    description: 'Hidden behind an unassuming medina doorway, this lush garden restaurant is a tranquil oasis. Dine under banana trees and bougainvillea with soft lighting. The menu blends Moroccan and Mediterranean flavors.',
  },
  {
    name: 'Nomad',
    city: 'Marrakech',
    cuisine: 'Modern Moroccan',
    price: 'From 200 MAD per person',
    description: 'A multi-level rooftop restaurant with panoramic views of the medina and Koutoubia Mosque. Modern Moroccan cuisine with creative twists on tagine, couscous, and pastilla. The rooftop terrace at sunset is extraordinary.',
  },
  {
    name: 'Restaurant Dar Hatim',
    city: 'Fes',
    cuisine: 'Traditional Fassi',
    price: 'From 300 MAD per person',
    description: 'An intimate dining experience inside a beautifully decorated riad. The Fassi cuisine is prepared by women who have preserved family recipes for generations. The tasting menu is a journey through Fes\'s culinary heritage.',
  },
  {
    name: 'Taros',
    city: 'Essaouira',
    cuisine: 'Seafood & Moroccan',
    price: 'From 180 MAD per person',
    description: 'Perched above Place Moulay Hassan with ocean views from the rooftop terrace. Fresh seafood, Moroccan classics, and cocktails. Live music on some evenings. The sunset view over the port is the main event.',
  },
  {
    name: 'La Table du Riad at Riad 72',
    city: 'Marrakech',
    cuisine: 'Contemporary Moroccan',
    price: 'From 350 MAD per person',
    description: 'An intimate dining experience in one of Marrakech\'s most stylish riads. Just a handful of tables around a candlelit courtyard. The tasting menu changes daily. Reservations are essential and worth every dirham.',
  },
  {
    name: 'Cafe Clock',
    city: 'Fes / Marrakech / Chefchaouen',
    cuisine: 'Moroccan-fusion',
    price: 'From 100 MAD per person',
    description: 'A cultural cafe with locations in three romantic cities. Known for its camel burger, date milkshakes, and rooftop terraces. More casual than the fine-dining options but full of character and local atmosphere.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PDA & CULTURAL GUIDELINES
   ═══════════════════════════════════════════════════════════════ */

const pdaGuidelines = [
  {
    rule: 'Holding Hands',
    icon: Heart,
    status: 'Generally Acceptable',
    statusColor: 'text-green-600',
    description:
      'Married couples holding hands is generally fine in cities and tourist areas. In rural and conservative areas, even this may draw attention. Use your judgment based on the setting.',
  },
  {
    rule: 'Kissing in Public',
    icon: AlertTriangle,
    status: 'Avoid',
    statusColor: 'text-red-600',
    description:
      'Kissing in public, even a peck on the cheek, is frowned upon and can attract unwanted attention or even a reprimand. Save it for private spaces like your riad or hotel room.',
  },
  {
    rule: 'Hugging & Close Contact',
    icon: Users,
    status: 'Be Discreet',
    statusColor: 'text-amber-600',
    description:
      'Brief, friendly hugs are tolerated in tourist areas, but prolonged embraces or sitting very close together in public may draw stares. Be more conservative in the medina and rural areas.',
  },
  {
    rule: 'Unmarried Couples',
    icon: ShieldCheck,
    status: 'Legally Complex',
    statusColor: 'text-amber-600',
    description:
      'Moroccan law technically prohibits sexual relations outside of marriage. For foreign tourists, this is very rarely enforced. Hotels and riads catering to tourists accommodate unmarried couples without issue. You will not be asked for a marriage certificate.',
  },
  {
    rule: 'Same-Sex Couples',
    icon: AlertTriangle,
    status: 'Exercise Caution',
    statusColor: 'text-red-600',
    description:
      'Same-sex relationships are illegal in Morocco. While Morocco is generally welcoming to all tourists, same-sex couples should avoid any public displays of affection. International hotels and riads are professional and discreet. Book a double room as two travelers.',
  },
  {
    rule: 'Dress Code',
    icon: ShieldCheck,
    status: 'Dress Modestly',
    statusColor: 'text-amber-600',
    description:
      'Both partners should dress modestly, especially in the medina, rural areas, and near mosques. Shoulders and knees should be covered. In luxury hotel pools and private accommodations, swimwear is fine. Beach resorts are more relaxed.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PROPOSAL & ANNIVERSARY IDEAS
   ═══════════════════════════════════════════════════════════════ */

const proposalIdeas = [
  {
    idea: 'Private Rooftop Dinner in Marrakech',
    icon: Heart,
    description:
      'Arrange a private rooftop dinner at your riad, decorated with rose petals and candles, with the Atlas Mountains glowing at sunset in the background. Many riads will help coordinate the surprise, including hiding the ring in a dessert or having a musician play.',
    budget: 'From 2,000 MAD for the full setup',
  },
  {
    idea: 'Sunrise Hot Air Balloon Proposal',
    icon: Compass,
    description:
      'Propose at a thousand feet above the Marrakech palmeraie as the sun rises over the Atlas Mountains. Several balloon operators offer private flights for couples and will coordinate the moment. The photos from a balloon proposal are spectacular.',
    budget: 'From 5,000 MAD for a private balloon flight for two',
  },
  {
    idea: 'Sahara Desert Under the Stars',
    icon: Tent,
    description:
      'After a sunset camel ride into the Erg Chebbi dunes, propose at a private dinner table set in the desert with lanterns and candles. The Milky Way stretches above you with zero light pollution. Luxury desert camps will arrange every detail.',
    budget: 'From 4,000 MAD for a private desert dinner setup',
  },
  {
    idea: 'Blue City Terrace in Chefchaouen',
    icon: Camera,
    description:
      'The rooftop terraces of Chefchaouen look out over a sea of blue buildings with the Rif Mountains behind. At sunset, the colors are extraordinary. Arrange a private terrace with mint tea and Moroccan pastries for an intimate, photogenic proposal.',
    budget: 'From 800 MAD for a decorated private terrace',
  },
  {
    idea: 'Anniversary Spa Ritual for Two',
    icon: Sparkles,
    description:
      'Celebrate an anniversary with a private couple\'s hammam and spa ritual at a luxury spa. The best packages include a private hammam, side-by-side massages, rose petal baths, champagne, and a private relaxation lounge. La Mamounia and Royal Mansour offer the finest experiences.',
    budget: 'From 3,000 MAD for a premium couple spa ritual',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC ITINERARY SUGGESTIONS
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    name: 'Classic Romantic Week',
    duration: '7 days',
    icon: Heart,
    route: 'Marrakech (3) - Essaouira (2) - Marrakech (2)',
    description:
      'The most popular couples\' itinerary. Start with the sensory overload of Marrakech, including a riad stay, rooftop dinners, and a couple hammam. Drive to coastal Essaouira for sunset walks and seafood. Return to Marrakech for a hot air balloon ride and final night splurge.',
    highlights: ['Riad stay in Marrakech medina', 'Couple hammam at Heritage Spa', 'Coastal Essaouira escape', 'Sunrise balloon ride'],
    budget: 'From 12,000 MAD per couple (mid-range) / from 30,000 MAD (luxury)',
  },
  {
    name: 'Desert Romance',
    duration: '5 days',
    icon: Tent,
    route: 'Marrakech (1) - Ait Benhaddou (1) - Merzouga Desert (2) - Marrakech (1)',
    description:
      'A road trip through the dramatic landscapes of southern Morocco. Drive through the High Atlas, stop at the UNESCO kasbah of Ait Benhaddou, traverse the Dades and Todra Gorges, and arrive at the Sahara for two nights of desert glamping, camel rides, and stargazing.',
    highlights: ['Ait Benhaddou sunset', 'Dades Gorge scenic drive', 'Luxury desert camp in Merzouga', 'Sunset camel trek'],
    budget: 'From 10,000 MAD per couple (mid-range) / from 25,000 MAD (luxury)',
  },
  {
    name: 'Blue City & Mountains',
    duration: '5 days',
    icon: Mountain,
    route: 'Fes (2) - Chefchaouen (2) - Fes (1)',
    description:
      'Combine the ancient romance of Fes with the visual magic of Chefchaouen. Explore the Fes medina together, dine in a traditional palace, then escape to the Blue City for mountain walks, photography, and quiet terrace evenings. Return to Fes for a final night at a luxury riad.',
    highlights: ['Fes medina exploration', 'Dinner at Dar Hatim', 'Chefchaouen blue streets', 'Spanish Mosque sunset'],
    budget: 'From 8,000 MAD per couple (mid-range) / from 20,000 MAD (luxury)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Morocco a good destination for couples?',
    answer:
      'Morocco is an outstanding destination for couples. The country offers romantic riads with private courtyards and plunge pools, desert glamping under the Milky Way, stunning sunset spots from Marrakech rooftops to Sahara dunes, couple-friendly hammam experiences, and some of the most atmospheric restaurants in North Africa. The combination of exotic culture, beautiful landscapes, excellent food, and warm hospitality makes Morocco one of the world\'s most romantic destinations.',
  },
  {
    question: 'Can unmarried couples share a hotel room in Morocco?',
    answer:
      'Technically, Moroccan law prohibits unmarried Moroccan couples from sharing a room. However, for foreign tourists, this rule is very rarely enforced. International hotels, tourist-oriented riads, and guesthouses routinely accommodate unmarried foreign couples without any issue. You will not be asked for a marriage certificate. Simply book a double room as you would anywhere else in the world.',
  },
  {
    question: 'Is it safe for couples to walk around at night in Morocco?',
    answer:
      'Main tourist areas in Marrakech, Fes, Essaouira, and Chefchaouen are generally safe for couples at night, especially the main squares and well-lit streets. As with any travel destination, avoid poorly lit back alleys late at night. Use a taxi or your riad\'s car service if returning late. The medina lanes can be confusing after dark, so save your phone battery for maps. Overall, Morocco is a safe country for tourists.',
  },
  {
    question: 'What is the best time of year for a romantic trip to Morocco?',
    answer:
      'The best months for a romantic trip are March to May and September to November. The weather is warm but not oppressively hot, the light is golden and perfect for photographs, and the crowds are thinner than in peak summer. For desert trips, October to March is ideal as the Sahara summer heat is brutal. Essaouira is pleasant year-round thanks to the Atlantic breeze. Avoid July and August in Marrakech when temperatures regularly exceed 40 degrees Celsius.',
  },
  {
    question: 'How should couples dress in Morocco?',
    answer:
      'Morocco is a Muslim country and modest dress is appreciated, especially in medinas, rural areas, and near mosques. Both partners should cover shoulders and knees in public. Within your riad, hotel pool, or private accommodation, you can dress as you please. Beach resorts and Essaouira are more relaxed. Avoid very tight or revealing clothing in the medina. The good news: Moroccan fashion is elegant, and you can buy beautiful local clothing in the souks.',
  },
  {
    question: 'What are the best couple activities in Morocco?',
    answer:
      'The most popular couple activities include private cooking classes (from 400 MAD per couple), hot air balloon rides over Marrakech at sunrise (from 2,000 MAD per person), private couple hammam experiences (from 1,200 MAD for two), sunset camel rides in the Sahara (from 300 MAD per person), horse riding on the beach in Essaouira (from 400 MAD per person), private riad rooftop dinners (from 600 MAD per couple), and Atlas Mountain day trips (from 800 MAD per couple). Most activities can be booked through your riad or hotel.',
  },
  {
    question: 'How much should we budget for a romantic week in Morocco?',
    answer:
      'A mid-range romantic week for two costs from 8,000-15,000 MAD including romantic riad accommodation (from 1,200 MAD/night), dining at good restaurants, activities, and internal transport. A luxury experience with 5-star riads, private desert camps, fine dining, and premium activities can cost from 25,000-50,000 MAD per week for two. Budget-conscious couples can enjoy Morocco for from 4,000-6,000 MAD per week by staying in charming but simpler guesthouses and eating at local restaurants.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoForCouplesPage() {
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
            backgroundImage: 'url(/images/hero-couples-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco for Couples</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Romance &amp; Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco for Couples:
            <br className="hidden md:block" /> The Ultimate Romantic Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Romantic riads, desert glamping under the stars, sunset rooftop dinners, and unforgettable
            couple experiences. Everything you need to plan the perfect romantic trip to Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is One of the World&apos;s Most Romantic Destinations
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a place where romance is woven into the fabric of daily life. The scent
                of orange blossom drifts through riad courtyards. Lanterns cast golden light on
                zellige-tiled walls. Rooftop terraces overlook ancient medinas as the sun sets behind
                the Atlas Mountains. The desert sky reveals more stars than you believed existed.
              </p>
              <p>
                For couples, Morocco offers a rare combination: exotic adventure and intimate luxury.
                You can spend the morning lost together in a thousand-year-old medina, the afternoon
                being pampered in a private hammam, and the evening dining on a candlelit rooftop
                with views that stretch to the mountains. The next day, you might be riding camels
                into the Sahara or floating over the desert in a hot air balloon at sunrise.
              </p>
              <p>
                This guide covers everything couples need: the most romantic accommodations, the
                best cities for two, couple-friendly activities from cooking classes to desert glamping,
                sunset spots, restaurant picks, cultural guidelines around PDA, proposal and anniversary
                ideas, and sample itineraries with realistic budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Cities for Couples ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a different flavor of romance. Here is where to go depending on what kind of couple you are.
          </p>

          <div className="space-y-10">
            {bestCitiesForCouples.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={city.image}
                        alt={`Romantic scene in ${city.city}, Morocco for couples`}
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
                        <p className="text-sm text-white/80 italic">{city.tagline}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{city.description}</p>
                      <div className="space-y-2 mb-4">
                        {city.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-default)]">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          <strong>Best for:</strong> {city.bestFor}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {city.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Romantic Accommodation Picks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            8 Most Romantic Stays in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From intimate medina riads to desert glamping and mountain retreats, these are the most romantic places to stay in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season. Peak season (October-April) and holidays may be 30-50% higher. Book well in advance for romantic occasions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {romanticAccommodation.map((stay) => {
              const StayIcon = stay.icon;
              return (
                <div key={stay.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{stay.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {stay.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {stay.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <StayIcon className="w-3.5 h-3.5" />
                          {stay.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {stay.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{stay.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {stay.highlights.map((highlight, i) => (
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

      {/* ── Couple Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Couple Activities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Experiences that bring you closer together. From cooking classes to desert stargazing, these are the activities couples love most in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coupleActivities.map((item) => {
              const ActivityIcon = item.icon;
              return (
                <div key={item.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.activity}
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
                      <Heart className="w-3 h-3 mt-0.5 text-[var(--color-accent)] shrink-0" />
                      <span className="text-[var(--text-secondary)] italic">{item.romanticFactor}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sunset Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunset className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Romantic Sunset Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers some of the world&apos;s most breathtaking sunsets. Here are the best places to watch the day end, together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sunsetSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {spot.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3 h-3" />
                  {spot.city}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{spot.description}</p>
                <div className="flex items-start gap-2 p-2 bg-[var(--surface-muted)] rounded-lg">
                  <Info className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">{spot.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Romantic Restaurants ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Romantic Restaurants
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From hidden garden restaurants to rooftop terraces overlooking the medina. The best places for a romantic dinner in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticRestaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {restaurant.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {restaurant.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3 h-3" />
                    {restaurant.cuisine}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{restaurant.description}</p>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  {restaurant.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PDA & Cultural Guidelines ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            PDA &amp; Cultural Guidelines for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco is a warm and welcoming country, but it is also a conservative Muslim society.
            Understanding these guidelines will help you navigate public spaces comfortably.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These guidelines are based on social norms, not just laws. What is tolerated in a five-star hotel lobby may not be appropriate in a medina alley.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdaGuidelines.map((item) => {
              const GuideIcon = item.icon;
              return (
                <div key={item.rule} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.rule}
                      </h3>
                      <span className={`text-xs font-semibold ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proposal & Anniversary Ideas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Proposal &amp; Anniversary Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco provides some of the most unforgettable settings in the world for a proposal or anniversary celebration. Here are five ideas with logistics and budgets.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {proposalIdeas.map((item, index) => {
                  const IdeaIcon = item.icon;
                  return (
                    <div key={index} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <IdeaIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                          {item.idea}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                        <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {item.budget}
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

      {/* ── Romantic Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Itinerary Suggestions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tried-and-tested itineraries for couples, from a classic romantic week to a desert adventure and a mountain escape.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => {
              const ItineraryIcon = itinerary.icon;
              return (
                <div key={itinerary.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItineraryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {itinerary.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" />
                        {itinerary.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-medium mb-3 p-2 bg-[var(--color-accent)]/5 rounded-lg">
                    <Compass className="w-3 h-3" />
                    {itinerary.route}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{itinerary.description}</p>
                  <div className="space-y-2 mb-4">
                    {itinerary.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-[var(--border-default)]">
                    <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      {itinerary.budget}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips for Couples ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Couples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Riads in Advance
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The most romantic riads have only 5-10 rooms and sell out months ahead for peak
                season (October-April). Book at least 2-3 months in advance, especially for
                Valentine\'s Day, New Year, and Christmas. Ask about special romantic packages
                that include rooftop dinners and spa treatments.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tip from 10-20 MAD for small services (porters, taxi help), from 20-50 MAD for restaurant
                waiters (10% of bill), and from 50-100 MAD per day for guides and drivers. At
                luxury riads, a tip for the staff who prepare your private dinner is appreciated
                (from 50-100 MAD).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dealing with Touts
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In the medinas of Marrakech and Fes, you may encounter people offering directions,
                shops, or restaurant recommendations. A polite but firm &quot;la, shukran&quot; (no, thank you)
                is sufficient. Walking confidently as a couple reduces approaches. Avoid engaging
                if you are not interested.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety at Night
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Main tourist areas are safe at night, but medina alleys can be disorienting
                after dark. Use GPS or ask your riad for directions. Riads can arrange taxis.
                Keep your phone charged for navigation. Avoid carrying large amounts of cash
                or wearing flashy jewelry in the medina.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is incredibly photogenic, but always ask before photographing people.
                Some may ask for a small tip (from 10 MAD). Sunrise and sunset are the best
                times for romantic photos. For professional couple photoshoots, hire a local
                photographer (from 1,500 MAD for a 2-hour session).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Let Your Riad Help
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A good riad is your greatest ally for a romantic trip. Ask them to arrange
                rooftop dinners, spa bookings, desert excursions, restaurant reservations, and
                even proposal setups. Riad staff know the city intimately and can often access
                experiences not available to walk-in tourists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top 20 spa experiences including couple-friendly hammams with prices and booking tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Bed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Where to Stay in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Moroccan accommodation from traditional riads to luxury desert camps.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <CalendarHeart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Time to Visit Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month guide to weather, events, and the ideal time for your romantic trip.
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
