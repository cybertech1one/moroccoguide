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
  Mountain,
  Sun,
  Compass,
  Route,
  Calendar,
  Thermometer,
  Award,
  Droplets,
  Wind,
  Globe,
  Heart,
  BookOpen,
  TrendingUp,
  Gauge,
  Waves,
  Bike,
  Flame,
  Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Adventure Sports 2026 | Surfing, Sandboarding, Paragliding & More',
  description:
    'The ultimate guide to adventure sports in Morocco. Surfing, kitesurfing, sandboarding, quad biking, paragliding, rock climbing, canyoning, mountain biking, zip-lining & camel trekking. Best locations, seasons, safety tips & prices from 200 MAD.',
  keywords: [
    'Morocco adventure sports',
    'adventure activities Morocco',
    'extreme sports Morocco',
    'outdoor activities Morocco',
    'surfing Morocco',
    'kitesurfing Morocco',
    'sandboarding Morocco',
    'quad biking Morocco',
    'paragliding Morocco',
    'rock climbing Morocco',
    'canyoning Morocco',
    'mountain biking Morocco',
    'zip-lining Morocco',
    'camel trekking Morocco',
    'Morocco outdoor sports',
    'Morocco extreme adventures',
    'adventure tours Morocco',
    'Morocco action sports',
    'Morocco adrenaline activities',
    'Morocco adventure guide 2026',
  ],
  openGraph: {
    title: 'Morocco Adventure Sports 2026 | Surfing, Sandboarding, Paragliding & More',
    description:
      'Plan your Morocco adventure sports trip. Top activities from surfing Atlantic waves to sandboarding Sahara dunes. Best locations, safety tips, and prices from 200 MAD.',
    url: `${BASE_URL}/morocco-adventure-sports`,
    images: [
      {
        url: `${BASE_URL}/images/hero-adventure.webp`,
        width: 1200,
        height: 630,
        alt: 'Adventure sports in Morocco featuring surfing, sandboarding, and paragliding across diverse landscapes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Adventure Sports 2026 | Surfing, Sandboarding & More',
    description:
      'Everything you need for adventure sports in Morocco: surfing, kitesurfing, sandboarding, paragliding, rock climbing, canyoning & more. Prices from 200 MAD.',
    images: [`${BASE_URL}/images/hero-adventure.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-adventure-sports` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-adventure-sports`,
  name: 'Morocco Adventure Sports 2026 | Surfing, Sandboarding, Paragliding & More',
  description:
    'The ultimate guide to adventure sports in Morocco. Best activities, locations, safety tips, operators, seasons, and costs.',
  url: `${BASE_URL}/morocco-adventure-sports`,
  image: `${BASE_URL}/images/hero-adventure.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-adventure-sports`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Essaouira' },
    { '@type': 'Place', name: 'Dakhla' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'Place', name: 'Todra Gorge' },
    { '@type': 'Place', name: 'High Atlas Mountains' },
    { '@type': 'Place', name: 'Agadir' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Adventure Sports', item: `${BASE_URL}/morocco-adventure-sports` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best adventure sports in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers world-class surfing in Taghazout and Essaouira, kitesurfing in Dakhla and Essaouira, sandboarding on the Erg Chebbi dunes near Merzouga, paragliding over the Atlas Mountains and Agadir, rock climbing in Todra Gorge with 150+ routes, canyoning in the Ourika Valley and Akchour, mountain biking on Atlas trails, quad biking in the Agafay Desert, zip-lining near Marrakech, and camel trekking across the Sahara.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do adventure sports cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adventure sports in Morocco are very affordable compared to Europe. Surfing lessons cost from 300-500 MAD per session, kitesurfing lessons from 800-1,500 MAD, sandboarding from 200-400 MAD, quad biking from 400-800 MAD per hour, paragliding tandem flights from 800-1,500 MAD, rock climbing guided sessions from 500-1,000 MAD, canyoning from 600-1,200 MAD, and camel trekking from 300-600 MAD per day. Prices vary by season and operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for adventure sports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for adventure sports when you use reputable operators. Always verify that guides are licensed and insured, check equipment condition before use, and ask about safety records. For water sports, ensure operators provide life jackets and have rescue procedures. For climbing and canyoning, use operators with certified guides. Travel insurance covering adventure sports is strongly recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for adventure sports in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best season depends on the activity. Surfing is best from September to April when Atlantic swells peak. Kitesurfing is best from April to October when winds are strong and consistent. Sandboarding and desert activities are best from October to April when temperatures are comfortable. Rock climbing and canyoning are ideal from March to May and September to November. Mountain biking is year-round at lower elevations but best in spring and autumn in the mountains.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need experience for adventure sports in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most adventure sports in Morocco are accessible to complete beginners. Surfing schools offer beginner lessons on gentle beach breaks, tandem paragliding requires zero experience, sandboarding is easy to pick up, quad biking needs no prior experience, and camel trekking is suitable for all ages. For more technical activities like rock climbing multi-pitch routes, kitesurfing, or advanced canyoning, previous experience is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are the best surfing spots in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taghazout near Agadir is Morocco\'s surfing capital, with famous breaks like Anchor Point, Killer Point, and Hash Point. Essaouira offers consistent wind-driven waves and is also Morocco\'s top kitesurfing destination. Sidi Kaouki has uncrowded beaches with good beginner waves. Imsouane has the longest right-hand wave in Africa. Mirleft and Sidi Ifni in the south offer quiet beach breaks away from the crowds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I go sandboarding in the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, sandboarding is one of the most popular adventure activities in the Moroccan Sahara. The best location is Erg Chebbi near Merzouga, where dunes reach up to 150 meters high. Erg Chigaga near M\'Hamid is another excellent option with fewer tourists. Most desert camps and tour operators provide sandboards. No experience is needed, and it can be combined with a camel trek and overnight desert camp.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring for adventure sports in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack sun protection (SPF 50+ sunscreen, hat, sunglasses), a refillable water bottle, quick-dry clothing, sturdy closed-toe shoes for land activities, reef shoes for water sports, and a GoPro or waterproof camera. For surfing, most schools provide wetsuits and boards. For climbing, operators supply all technical gear. Always bring travel insurance documents that specifically cover adventure activities.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ADVENTURE SPORTS
   ═══════════════════════════════════════════════════════════════ */

const adventureSports = [
  {
    name: 'Surfing',
    subtitle: 'World-class Atlantic breaks from Taghazout to Essaouira',
    icon: Waves,
    image: '/images/hero-surfing.webp',
    location: 'Taghazout, Essaouira, Imsouane, Sidi Kaouki',
    duration: '2-3 hour sessions',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'September-April (biggest swells)',
    price: 'From 300 MAD per lesson',
    description:
      'Morocco is one of the top surfing destinations in Africa, with consistent Atlantic swells, warm water, and an incredible variety of breaks. Taghazout is the epicenter, home to legendary spots like Anchor Point and Killer Point that attract surfers from across the globe. Beginners will find gentle beach breaks at Sidi Kaouki and Tamraght, while Imsouane offers the longest right-hand wave on the African continent. The surf culture here is vibrant, with dozens of surf camps, yoga retreats, and beachside cafes serving freshly caught fish.',
    highlights: [
      'Anchor Point: one of the best right-hand point breaks in the world',
      'Year-round surfing with water temperatures from 17-22 degrees Celsius',
      'Surf camps from 500 MAD per night including lessons and accommodation',
      'Imsouane: Africa\'s longest right-hand wave, perfect for longboarding',
      'Essaouira: wind-driven waves ideal for intermediate surfers',
    ],
    safetyTips: [
      'Check tide tables and swell forecasts before entering the water',
      'Beginners should always take lessons with a certified instructor',
      'Wear a wetsuit from November to March when water drops to 17 degrees',
      'Respect local surfers and follow lineup etiquette at crowded breaks',
    ],
  },
  {
    name: 'Kitesurfing',
    subtitle: 'Consistent trade winds make Morocco a global kitesurfing hub',
    icon: Wind,
    image: '/images/hero-essaouira-coast.webp',
    location: 'Dakhla, Essaouira, Moulay Bousselham',
    duration: '3-5 hour sessions',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'April-October (strongest winds)',
    price: 'From 800 MAD per lesson',
    description:
      'Morocco is a world-class kitesurfing destination, blessed with powerful and consistent trade winds that funnel along the Atlantic coast. Dakhla, in the far south, is the jewel of Moroccan kitesurfing: a stunning lagoon with flat water, thermal winds blowing 300+ days per year, and water temperatures that stay warm through winter. Essaouira is the more accessible option, with the "wind city of Africa" living up to its nickname from April to September. Professional schools with IKO-certified instructors operate in both locations.',
    highlights: [
      'Dakhla lagoon: flat water and 300+ wind days per year',
      'Essaouira beach: accessible from Marrakech with daily bus connections',
      'IKO-certified schools with multilingual instructors',
      'Equipment rental from 400 MAD per day for experienced riders',
      'Growing freestyle and wave riding scene at both locations',
    ],
    safetyTips: [
      'Take a certified course before riding independently; kites are powerful',
      'Never kite alone; always have a buddy or ride at supervised spots',
      'Check wind forecasts and respect offshore wind warnings',
      'Wear a helmet and impact vest, especially while learning',
    ],
  },
  {
    name: 'Sandboarding',
    subtitle: 'Ride the towering dunes of the Sahara Desert',
    icon: TrendingUp,
    image: '/images/hero-merzouga.webp',
    location: 'Erg Chebbi (Merzouga), Erg Chigaga (M\'Hamid)',
    duration: '1-3 hours per session',
    difficulty: 'Beginner Friendly',
    bestSeason: 'October-April (cool desert temperatures)',
    price: 'From 200 MAD per session',
    description:
      'Sandboarding down the towering dunes of Morocco\'s Sahara is an exhilarating and unforgettable experience. The Erg Chebbi dunes near Merzouga reach up to 150 meters in height, offering long, thrilling descents over soft golden sand. Unlike snowboarding, sandboarding requires no experience and anyone can enjoy it within minutes. Most desert camps include sandboarding as part of their overnight excursion packages. The climb back up the dune is the real workout, but the views from the summit at sunset make every step worthwhile.',
    highlights: [
      'Erg Chebbi dunes: up to 150 meters high for long thrilling rides',
      'No experience needed: anyone can sandboard within minutes',
      'Often included free with desert camp overnight packages',
      'Combine with sunset camel trek and overnight Sahara camping',
      'Erg Chigaga offers larger dunes with far fewer tourists',
    ],
    safetyTips: [
      'Wear closed shoes and long sleeves to protect from sand burn',
      'Apply sunscreen liberally, even on cloudy desert days',
      'Stay hydrated: carry at least 2 liters of water per person',
      'Avoid sandboarding in midday heat from June to September',
    ],
  },
  {
    name: 'Quad Biking',
    subtitle: 'Tear across desert landscapes and palm-lined valleys',
    icon: Gauge,
    image: '/images/hero-agafay.webp',
    location: 'Agafay Desert, Merzouga, Ouarzazate, Marrakech outskirts',
    duration: '1-4 hours',
    difficulty: 'Beginner to Intermediate',
    bestSeason: 'Year-round (best October-May)',
    price: 'From 400 MAD per hour',
    description:
      'Quad biking is one of the most accessible and thrilling adventure activities in Morocco. The Agafay Desert, just 30 minutes from Marrakech, offers a moon-like landscape of rocky plains and dry riverbeds perfect for quad excursions. Merzouga provides the opportunity to ride alongside the Sahara dunes through hamada (rocky desert) and past oases. No license is needed for guided tours, and operators provide full instruction, helmets, goggles, and protective gear before you hit the trail.',
    highlights: [
      'Agafay Desert: just 30 minutes from Marrakech with Atlas Mountain views',
      'Merzouga: ride alongside the Sahara dunes through rocky desert',
      'No driving license required for guided quad tours',
      'Sunset quad tours are a popular Marrakech excursion from 600 MAD',
      'Combine with a traditional Berber dinner under the stars',
    ],
    safetyTips: [
      'Wear long trousers, closed shoes, and provided safety gear at all times',
      'Follow your guide and stay on designated routes',
      'Maintain safe following distance from other riders',
      'Choose operators with well-maintained, newer quad bikes',
    ],
  },
  {
    name: 'Paragliding',
    subtitle: 'Soar above the Atlas Mountains and Morocco\'s dramatic coastline',
    icon: Compass,
    image: '/images/hero-atlas.webp',
    location: 'Aguergour (Atlas), Agadir, Dades Valley, Ifrane',
    duration: '15-45 minutes per flight',
    difficulty: 'No Experience Required (tandem)',
    bestSeason: 'March-November',
    price: 'From 800 MAD per tandem flight',
    description:
      'Paragliding in Morocco offers some of the most spectacular aerial views in North Africa. The launch site at Aguergour in the High Atlas, roughly 45 minutes south of Marrakech, sends you soaring over Berber villages, terraced hillsides, and the winding river valleys of the Atlas foothills. Agadir offers coastal flights with views over the Atlantic and golden beaches below. Tandem flights require zero experience: you simply run a few steps at launch and enjoy the ride while your certified pilot handles everything.',
    highlights: [
      'Aguergour: soar over Atlas Mountain valleys with panoramic views',
      'Agadir: coastal flights over the Atlantic and golden beaches',
      'Tandem flights require zero experience; pilot handles everything',
      'Flights last 15-45 minutes depending on thermal conditions',
      'GoPro footage and photos included with most operators',
    ],
    safetyTips: [
      'Fly only with certified tandem pilots from reputable operators',
      'Wear sturdy shoes and comfortable clothing; avoid loose scarves',
      'Flights are weather-dependent and may be cancelled for safety',
      'Inform your pilot of any medical conditions before takeoff',
    ],
  },
  {
    name: 'Rock Climbing',
    subtitle: 'World-class crags in Todra Gorge and beyond',
    icon: Mountain,
    image: '/images/hero-atlas-village.webp',
    location: 'Todra Gorge, Taghia Canyon, Anti-Atlas, Chefchaouen',
    duration: 'Half-day to full-day sessions',
    difficulty: 'Beginner to Expert',
    bestSeason: 'March-May, September-November',
    price: 'From 500 MAD per guided session',
    description:
      'Morocco is an emerging rock climbing hotspot with world-class limestone crags that rival anything in southern Europe. Todra Gorge is the crown jewel: 300-meter canyon walls offer over 150 bolted sport routes from 5a to 8b+, with the iconic Pilier du Couchant providing one of the finest multi-pitch climbs in North Africa. Taghia Canyon, accessible only by mule or a long hike, is Morocco\'s biggest wall climbing destination with routes up to 800 meters. The Anti-Atlas near Tafraout offers unique granite bouldering amid painted rocks and almond orchards.',
    highlights: [
      'Todra Gorge: 150+ bolted sport routes from 5a to 8b+ on limestone',
      'Taghia Canyon: remote big-wall climbing with routes up to 800 meters',
      'Anti-Atlas: granite bouldering near Tafraout amid almond orchards',
      'Chefchaouen: newly developed crags with stunning Rif Mountain views',
      'Perfect winter climbing weather when European crags are too cold',
    ],
    safetyTips: [
      'Bring your own gear or rent from climbing shops in Todra Gorge',
      'Hire a local guide for Taghia: access is remote and routes are trad',
      'Check bolt conditions on older routes; some may need replacement',
      'Climb early morning or late afternoon in warmer months to avoid heat',
    ],
  },
  {
    name: 'Canyoning',
    subtitle: 'Rappel waterfalls and swim through hidden gorges',
    icon: Droplets,
    image: '/images/hero-ouzoud.webp',
    location: 'Ourika Valley, Akchour, Paradise Valley, Ouzoud',
    duration: '4-7 hours',
    difficulty: 'Moderate',
    bestSeason: 'April-October (water levels permitting)',
    price: 'From 600 MAD per person',
    description:
      'Canyoning is one of Morocco\'s most underrated adventure sports. The country\'s diverse geology of limestone gorges, basalt canyons, and Atlas Mountain valleys creates perfect conditions for rappelling waterfalls, swimming through pools, jumping from natural platforms, and scrambling through narrow slot canyons. The Ourika Valley near Marrakech offers accessible half-day canyoning trips with waterfalls up to 20 meters high. Paradise Valley near Agadir features emerald pools and smooth rock slides. For the most adventurous, Akchour near Chefchaouen delivers remote canyon descents through pristine wilderness.',
    highlights: [
      'Ourika Valley: half-day trips with waterfall rappelling near Marrakech',
      'Paradise Valley: natural rock slides and emerald swimming pools',
      'Akchour: remote canyon descents through pristine Rif wilderness',
      'Technical equipment provided by all reputable operators',
      'Combine with hiking for a full-day Atlas Mountain adventure',
    ],
    safetyTips: [
      'Never canyon independently; always use certified guides with equipment',
      'Wear provided wetsuits and helmets at all times in the canyon',
      'Check water levels: flash floods are a real danger after rain',
      'Ensure your operator carries a first aid kit and communication device',
    ],
  },
  {
    name: 'Mountain Biking',
    subtitle: 'Singletrack trails from the Atlas to the desert',
    icon: Bike,
    image: '/images/hero-trekking.webp',
    location: 'High Atlas, Ourika Valley, Agafay, Dades Valley, Amizmiz',
    duration: 'Half-day to multi-day',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'March-May, September-November',
    price: 'From 500 MAD per half-day guided',
    description:
      'Morocco\'s diverse terrain makes it a mountain biking paradise. From rocky singletrack descents through the High Atlas to flowing desert trails in the Agafay and smooth gravel paths along the Dades Valley, there is terrain for every skill level. The area around Amizmiz, south of Marrakech, has become a hub for guided mountain biking with networks of Berber village trails and purpose-built singletrack. Multi-day bikepacking routes crossing the Atlas from Marrakech to the desert are growing in popularity, combining technical riding with cultural immersion.',
    highlights: [
      'Amizmiz: growing hub with Berber village trails and guided networks',
      'High Atlas descents: technical singletrack with stunning views',
      'Agafay Desert: flowing trails through moon-like rocky landscapes',
      'Multi-day bikepacking from Marrakech to the Sahara desert',
      'E-bike options available for less experienced riders',
    ],
    safetyTips: [
      'Wear a helmet at all times; carry a basic repair kit and pump',
      'Check brake pads and tire pressure before every ride',
      'Carry at least 2 liters of water on any ride in Morocco',
      'Ride with a guide on unfamiliar trails to avoid getting lost',
    ],
  },
  {
    name: 'Zip-Lining',
    subtitle: 'Fly across Atlas valleys and desert landscapes',
    icon: Zap,
    image: '/images/hero-hiking-atlas.webp',
    location: 'Terres d\'Amanar (Atlas), Agafay, Ourika Valley',
    duration: '1-3 hours',
    difficulty: 'Beginner Friendly',
    bestSeason: 'Year-round',
    price: 'From 300 MAD per person',
    description:
      'Zip-lining in Morocco has grown rapidly, with several well-equipped adventure parks now operating in the Atlas Mountains and beyond. Terres d\'Amanar, about 30 minutes from Marrakech in the Atlas foothills, is the most established, offering multiple zip-lines up to 300 meters long over forested valleys, plus rope courses and climbing walls. The experience is family-friendly and accessible to anyone over the minimum age and weight requirements. Some operators in the Ourika Valley offer zip-lines crossing above river gorges.',
    highlights: [
      'Terres d\'Amanar: multiple zip-lines up to 300 meters over Atlas forests',
      'Family-friendly with no experience required',
      'Combine with rope courses, climbing walls, and Berber lunch',
      'Ourika Valley: zip-line over river gorges with waterfall views',
      'Only 30 minutes from Marrakech for easy half-day excursions',
    ],
    safetyTips: [
      'Verify operator has modern equipment with redundant safety systems',
      'Follow all weight and age restrictions provided by the operator',
      'Wear closed-toe shoes and remove any loose jewelry or accessories',
      'Listen carefully to the safety briefing before your first run',
    ],
  },
  {
    name: 'Camel Trekking',
    subtitle: 'Cross the Sahara dunes on the back of a dromedary',
    icon: Sun,
    image: '/images/hero-camel-sunset.webp',
    location: 'Merzouga, M\'Hamid, Zagora, Agafay Desert',
    duration: '1-3 hours to multi-day',
    difficulty: 'Beginner Friendly',
    bestSeason: 'October-April (cool desert temperatures)',
    price: 'From 300 MAD per sunset trek',
    description:
      'Camel trekking is the quintessential Moroccan adventure experience. Riding a dromedary across the golden dunes of Erg Chebbi at sunset, with the vast Sahara stretching to the horizon, is a moment that stays with you forever. Merzouga is the most popular base, offering everything from 90-minute sunset treks to multi-day expeditions deep into the desert with overnight stays in luxury or traditional Berber camps. M\'Hamid provides access to the remote Erg Chigaga dunes, far from crowds, where the silence of the Sahara is absolute.',
    highlights: [
      'Merzouga: sunset treks to Erg Chebbi dunes with desert camp stays',
      'M\'Hamid: access to remote Erg Chigaga dunes with total desert silence',
      'Overnight camps range from traditional bivouacs to luxury glamping',
      'Sunrise and sunset light turns the dunes orange, gold, and pink',
      'Combine with sandboarding, stargazing, and traditional Berber music',
    ],
    safetyTips: [
      'Wear comfortable trousers; saddle soreness is common for first-timers',
      'Carry sunscreen, a hat, and at least 1.5 liters of water',
      'Follow your guide\'s instructions for mounting and dismounting',
      'Choose operators with well-cared-for camels and responsible practices',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    tempDay: '20-30 C (coast), 15-25 C (mountains)',
    rating: 'Excellent',
    description:
      'The best all-round season for adventure sports in Morocco. Surf swells are still strong, winds are building for kitesurfing, desert temperatures are comfortable for sandboarding and camel trekking, and the mountains are ideal for climbing, canyoning, and mountain biking. Wildflowers add color to the Atlas trails.',
    recommended: 'All activities: surfing, climbing, canyoning, mountain biking, paragliding',
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    tempDay: '30-40 C (coast), 35-45 C (desert)',
    rating: 'Good (water sports)',
    description:
      'Too hot for desert activities but perfect for water sports. Kitesurfing conditions peak with strong trade winds along the coast. Surfing is smaller but still fun at many breaks. Canyoning in mountain valleys offers a refreshing escape from the heat. Avoid quad biking and camel trekking in the desert during midday.',
    recommended: 'Kitesurfing, surfing, canyoning, zip-lining, coastal paragliding',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    tempDay: '22-32 C (coast), 20-30 C (desert)',
    rating: 'Excellent',
    description:
      'Another superb season for adventure sports. Atlantic surf swells return in force, desert temperatures cool to comfortable levels for sandboarding and camel trekking, rock climbing conditions are ideal at Todra Gorge, and mountain biking trails are dry and fast. October is arguably the single best month for adventure activities in Morocco.',
    recommended: 'All activities: surfing, sandboarding, climbing, paragliding, camel trekking',
  },
  {
    season: 'Winter (December-February)',
    icon: Droplets,
    tempDay: '15-20 C (coast), 10-20 C (desert by day)',
    rating: 'Good (surf & desert)',
    description:
      'Winter brings the biggest Atlantic swells, making this prime surfing season in Taghazout and Essaouira. Desert temperatures are pleasant during the day but cold at night. Rock climbing at Todra Gorge is excellent with cool, dry conditions. Kitesurfing slows as winds become inconsistent. Canyoning is limited due to cold water and rain.',
    recommended: 'Surfing, rock climbing, camel trekking, sandboarding, quad biking',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const safetyEssentials = [
  {
    title: 'Choose Reputable Operators',
    icon: ShieldCheck,
    description: 'Look for operators with online reviews, proper insurance, and certified guides. Ask to see certifications before booking. Word of mouth from hotel staff is often reliable.',
  },
  {
    title: 'Get Travel Insurance',
    icon: Award,
    description: 'Ensure your travel insurance specifically covers adventure sports. Standard policies often exclude activities like paragliding, climbing, and kitesurfing. Check your policy wording carefully.',
  },
  {
    title: 'Inspect Equipment',
    icon: CheckCircle,
    description: 'Before any activity, check that helmets, harnesses, ropes, and other equipment are in good condition. Do not hesitate to refuse equipment that looks worn or damaged. Your safety comes first.',
  },
  {
    title: 'Know Your Limits',
    icon: AlertTriangle,
    description: 'Be honest about your fitness and experience level. Morocco offers activities for beginners through experts, but choosing the wrong difficulty can be dangerous. Start easy and work up.',
  },
  {
    title: 'Stay Hydrated',
    icon: Droplets,
    description: 'Morocco\'s heat and dry air can cause dehydration quickly, especially during physical activities. Carry at least 2 liters of water per person and drink before you feel thirsty.',
  },
  {
    title: 'Respect Local Conditions',
    icon: Globe,
    description: 'Weather, tides, wind, and water levels change quickly in Morocco. Always check conditions before heading out and be prepared to cancel if safety dictates. Flexibility saves lives.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COSTS
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Surfing lesson (2 hours)', cost: 'From 300-500 MAD', notes: 'Board and wetsuit included at most schools' },
  { item: 'Kitesurfing lesson (3 hours)', cost: 'From 800-1,500 MAD', notes: 'IKO-certified instruction with all equipment' },
  { item: 'Sandboarding session', cost: 'From 200-400 MAD', notes: 'Often included free with desert camp bookings' },
  { item: 'Quad biking (1-2 hours)', cost: 'From 400-800 MAD', notes: 'Helmet, goggles, and guide included' },
  { item: 'Paragliding tandem flight', cost: 'From 800-1,500 MAD', notes: 'GoPro footage usually included' },
  { item: 'Rock climbing guided session', cost: 'From 500-1,000 MAD', notes: 'Full day with gear rental and local guide' },
  { item: 'Canyoning half-day', cost: 'From 600-1,200 MAD', notes: 'Wetsuit, helmet, harness, and guide included' },
  { item: 'Mountain biking half-day', cost: 'From 500-1,000 MAD', notes: 'Bike rental, helmet, guide, and transport to trails' },
  { item: 'Zip-lining (adventure park)', cost: 'From 300-600 MAD', notes: 'Multiple lines and activities in one ticket' },
  { item: 'Camel trek (sunset, 1.5 hours)', cost: 'From 300-600 MAD', notes: 'Longer multi-day treks from 1,500 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the best adventure sports in Morocco?',
    answer:
      'Morocco offers world-class surfing in Taghazout, kitesurfing in Dakhla and Essaouira, sandboarding on the Erg Chebbi dunes, paragliding over the Atlas Mountains, rock climbing in Todra Gorge with 150+ routes, canyoning in the Ourika Valley, mountain biking on Atlas trails, quad biking in the Agafay Desert, zip-lining near Marrakech, and camel trekking across the Sahara. The diversity of landscapes means there is an adventure sport for every interest and skill level.',
  },
  {
    question: 'How much do adventure sports cost in Morocco?',
    answer:
      'Morocco is very affordable for adventure sports. Surfing lessons cost from 300-500 MAD per session, kitesurfing from 800-1,500 MAD, sandboarding from 200-400 MAD, quad biking from 400-800 MAD per hour, paragliding tandem flights from 800-1,500 MAD, rock climbing from 500-1,000 MAD, canyoning from 600-1,200 MAD, and camel trekking from 300-600 MAD. Prices vary by season, operator, and group size. Seasonal pricing applies.',
  },
  {
    question: 'Is Morocco safe for adventure sports?',
    answer:
      'Morocco is generally safe for adventure sports when you use reputable operators. Always verify certifications, check equipment condition, and read recent reviews. For water sports, ensure life jackets are provided. For climbing and canyoning, use operators with certified guides. Travel insurance covering adventure sports is strongly recommended. The biggest risks are heat-related illness and dehydration, which are easily managed with preparation.',
  },
  {
    question: 'When is the best time for adventure sports in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) are the best all-round seasons. Surfing peaks from September to April. Kitesurfing is best April to October. Desert activities (sandboarding, camel trekking) are ideal from October to April. Rock climbing and canyoning are best in spring and autumn. Mountain biking is year-round at lower elevations. October is the single best month for the widest variety of activities.',
  },
  {
    question: 'Do I need experience for adventure sports in Morocco?',
    answer:
      'Most activities are accessible to complete beginners. Surfing schools cater to first-timers, tandem paragliding requires zero experience, sandboarding is easy to pick up, quad biking needs no prior skill, and camel trekking suits all ages. For more technical activities like lead rock climbing, independent kitesurfing, or advanced canyoning, previous experience is needed. Always be honest about your level when booking.',
  },
  {
    question: 'Where are the best surfing spots in Morocco?',
    answer:
      'Taghazout near Agadir is Morocco\'s surfing capital with Anchor Point, Killer Point, and Hash Point. Essaouira has wind-driven waves for intermediates. Sidi Kaouki offers uncrowded beginner waves. Imsouane has Africa\'s longest right-hand wave. Mirleft and Sidi Ifni in the south have quiet beach breaks. Water temperature ranges from 17 degrees in winter to 22 degrees in summer.',
  },
  {
    question: 'Can I go sandboarding in the Sahara Desert?',
    answer:
      'Yes, sandboarding is hugely popular in the Moroccan Sahara. Erg Chebbi near Merzouga has dunes up to 150 meters high. Erg Chigaga near M\'Hamid offers larger dunes with fewer tourists. Most desert camps provide sandboards at no extra charge. No experience is needed. It combines perfectly with a camel trek and overnight desert camp experience.',
  },
  {
    question: 'What should I bring for adventure sports in Morocco?',
    answer:
      'Essential items include sunscreen SPF 50+, a hat, sunglasses, a refillable water bottle, quick-dry clothing, sturdy closed-toe shoes, reef shoes for water sports, and a waterproof camera or GoPro. Most operators provide activity-specific gear like wetsuits, helmets, and harnesses. Always bring your travel insurance documents and ensure adventure activities are covered.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/adventure',
    icon: Flame,
    title: 'Morocco Adventure Guide',
    description: 'A comprehensive overview of all adventure experiences available across Morocco, from desert to mountains to coast.',
  },
  {
    href: '/trekking',
    icon: Route,
    title: 'Trekking in Morocco',
    description: 'Multi-day trekking routes through the Atlas Mountains, Jebel Saghro, and beyond with trail details and costs.',
  },
  {
    href: '/surfing',
    icon: Waves,
    title: 'Morocco Surfing Guide',
    description: 'In-depth guide to every surf spot in Morocco from Taghazout to Dakhla with swell forecasts and camp reviews.',
  },
  {
    href: '/climbing',
    icon: Mountain,
    title: 'Rock Climbing Morocco',
    description: 'Todra Gorge, Taghia Canyon, and Anti-Atlas bouldering: route guides, grades, and logistical information.',
  },
  {
    href: '/water-sports',
    icon: Waves,
    title: 'Morocco Water Sports',
    description: 'Kitesurfing, kayaking, stand-up paddleboarding, and more: the best water activities along Morocco\'s coast.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAdventureSportsPage() {
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
          style={{ backgroundImage: 'url(/images/hero-adventure.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Adventure Sports</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flame className="w-4 h-4" />
            Adventure Sports &amp; Outdoor Activities
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Adventure Sports:
            <br className="hidden md:block" /> Your 2026 Action Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From surfing Atlantic waves to sandboarding Sahara dunes, paragliding over the Atlas, and climbing
            Todra Gorge. 10 incredible adventure activities with locations, prices from 200 MAD, and expert tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is an Adventure Sports Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco packs an extraordinary diversity of adventure sports into a single country. Within a few
                hours you can move from riding Atlantic swells on a surfboard to sandboarding down 150-meter Sahara
                dunes, from paragliding over snow-capped Atlas peaks to rock climbing 300-meter limestone walls in
                Todra Gorge. Very few countries on earth offer this range of adrenaline-fueled experiences across
                such varied landscapes: coastline, desert, mountains, gorges, and forests.
              </p>
              <p>
                What sets Morocco apart is the combination of world-class conditions and remarkable affordability.
                A surf lesson costs a fraction of what you would pay in Portugal or Australia. A tandem paragliding
                flight over the Atlas is a fraction of the price of one in the Swiss Alps. The infrastructure for
                adventure tourism has grown rapidly, with professional operators, certified guides, and modern
                equipment now available for every activity. Yet Morocco retains its authenticity: you will still
                share the waves with local fishermen, cross paths with Berber shepherds on mountain bike trails,
                and camp in the Sahara far from any other soul.
              </p>
              <p>
                This guide covers the 10 best adventure sports in Morocco, with detailed information on the top
                locations for each activity, the best season to visit, realistic prices, safety tips, and
                recommended operators. Whether you are a first-time thrill-seeker or a seasoned adrenaline
                junkie, Morocco has an adventure waiting for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">10+</div>
              <div className="text-sm text-[var(--text-muted)]">Adventure activities</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">15+ Spots</div>
              <div className="text-sm text-[var(--text-muted)]">World-class locations</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">200 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting price</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Year-round</div>
              <div className="text-sm text-[var(--text-muted)]">Adventure season</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Adventure Sports ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flame className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            10 Best Adventure Sports in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the Atlantic coast to the Sahara Desert and the Atlas Mountains, these are the top adrenaline
            experiences Morocco has to offer.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and costs may vary by operator and group size.
          </p>

          <div className="space-y-12">
            {adventureSports.map((sport) => {
              const SportIcon = sport.icon;
              return (
                <div key={sport.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56 md:h-64">
                    <img
                      src={sport.image}
                      alt={`${sport.name} adventure sport in Morocco - ${sport.location}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <SportIcon className="w-6 h-6" />
                        {sport.name}
                      </h3>
                      <p className="text-sm text-white/80 mt-1">{sport.subtitle}</p>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                      {sport.difficulty}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <MapPin className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Location</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{sport.location.split(',')[0]}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Clock className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Duration</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{sport.duration}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Calendar className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Best Season</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{sport.bestSeason.split('(')[0].trim()}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <DollarSign className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Price</div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">{sport.price}</div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">{sport.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                          Highlights
                        </h4>
                        <div className="space-y-2">
                          {sport.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          <ShieldCheck className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
                          Safety Tips
                        </h4>
                        <div className="space-y-2">
                          {sport.safetyTips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                              {tip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[var(--border-primary)] flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {sport.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {sport.bestSeason}</span>
                      <span className="flex items-center gap-1"><Gauge className="w-3 h-3" /> {sport.difficulty}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Essentials for Adventure Sports
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Adventure sports carry inherent risks. Follow these guidelines to stay safe and get the most out of
            your Morocco adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyEssentials.map((item) => {
              const SafetyIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <SafetyIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Adventure Sports in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers adventure year-round, but the best activity for you depends on when you visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                    <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold ${
                      season.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                      season.rating.includes('Good') ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {season.rating}
                    </span>
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mb-3">
                    <Thermometer className="w-3.5 h-3.5 inline mr-1" />
                    {season.tempDay}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <div className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--color-accent)]">Best activities:</strong> {season.recommended}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Costs Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adventure Sports Costs Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A complete breakdown of what adventure activities cost in Morocco. Prices are starting figures and
            may vary by season, operator, and group size.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="bg-[var(--color-accent)] p-4 text-white">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>Activity</span>
                <span>Cost</span>
                <span>Notes</span>
              </div>
            </div>
            <div className="divide-y divide-[var(--border-primary)]">
              {costBreakdown.map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 p-4 text-sm">
                  <span className="font-medium text-[var(--text-primary)]">{row.item}</span>
                  <span className="text-[var(--color-accent)] font-bold">{row.cost}</span>
                  <span className="text-[var(--text-muted)] text-xs">{row.notes}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="card-moroccan p-5 text-center">
              <Heart className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Budget Adventures</div>
              <div className="text-lg font-bold text-[var(--color-accent)] font-[family-name:var(--font-display)]">From 200-500 MAD</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Sandboarding, camel trek, zip-line</div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Users className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Activities</div>
              <div className="text-lg font-bold text-[var(--color-gold)] font-[family-name:var(--font-display)]">From 500-1,000 MAD</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Surfing, climbing, biking, canyoning</div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Award className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Premium Experiences</div>
              <div className="text-lg font-bold text-[var(--color-gold)] font-[family-name:var(--font-display)]">From 800-1,500 MAD</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Paragliding, kitesurfing lessons</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about adventure sports in Morocco, answered by experienced travelers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] ml-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco adventure with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <GuideIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Flame className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready for Adventure in Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From Atlantic surf breaks to Sahara sand dunes, Morocco&apos;s adventure sports are calling. Start
            planning your adrenaline-fueled trip with our detailed guides, or explore everything else this
            extraordinary country has to offer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/adventure"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Flame className="w-5 h-5" />
              Explore All Adventures
            </Link>
            <Link
              href="/surfing"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Waves className="w-5 h-5" />
              Morocco Surfing Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
