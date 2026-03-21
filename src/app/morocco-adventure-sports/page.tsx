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
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-adventure-sports`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Morocco Adventure Sports Guide 2026 | Surfing, Climbing, Paragliding & 8 More Activities',
  description:
    'Plan adventure sports in Morocco for 2026. Surfing in Taghazout and Imsouane, kitesurfing in Dakhla, rock climbing at Todra Gorge, paragliding in Agadir, sandboarding at Erg Chebbi, canyoning at Akchour, white water rafting, horse riding, mountain biking, quad biking, and zip-lining. Locations, seasons, safety tips, and prices from 200 MAD.',
  keywords: [
    'Morocco adventure sports',
    'adventure activities Morocco',
    'surfing Taghazout Morocco',
    'kitesurfing Dakhla Morocco',
    'rock climbing Todra Gorge',
    'paragliding Agadir Morocco',
    'sandboarding Merzouga Erg Chebbi',
    'canyoning Akchour Morocco',
    'white water rafting Morocco',
    'horse riding Morocco',
    'mountain biking Atlas Mountains',
    'quad biking Morocco',
    'zip-lining Morocco',
    'extreme sports Morocco',
    'outdoor activities Morocco 2026',
    'Imsouane surfing',
    'Tafraoute climbing',
    'Ifrane paragliding',
    'Morocco adventure guide 2026',
    'Morocco adrenaline activities',
  ],
  openGraph: {
    title:
      'Morocco Adventure Sports Guide 2026 | Surfing, Climbing, Paragliding & More',
    description:
      'The definitive guide to 11 adventure sports in Morocco. Surfing, kitesurfing, rock climbing, paragliding, sandboarding, canyoning, white water rafting, horse riding, mountain biking, quad biking, and zip-lining with prices from 200 MAD.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-adventure.webp`,
        width: 1200,
        height: 630,
        alt: 'Adventure sports in Morocco showing surfers at Taghazout, climbers at Todra Gorge, and sandboarding at Erg Chebbi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Morocco Adventure Sports Guide 2026 | 11 Activities, Prices & Safety Tips',
    description:
      'Surfing, kitesurfing, climbing, paragliding, sandboarding, canyoning, rafting, horse riding, mountain biking, quad biking, zip-lining. Prices from 200 MAD.',
    images: [`${BASE_URL}/images/hero-adventure.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Adventure Sports Guide 2026',
  description:
    'Comprehensive guide to 11 adventure sports across Morocco, covering surfing, kitesurfing, rock climbing, paragliding, sandboarding, canyoning, white water rafting, horse riding, mountain biking, quad biking, and zip-lining.',
  url: PAGE_URL,
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
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Taghazout' },
    { '@type': 'Place', name: 'Dakhla' },
    { '@type': 'Place', name: 'Todra Gorge' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'Place', name: 'Akchour' },
    { '@type': 'Place', name: 'High Atlas Mountains' },
    { '@type': 'Place', name: 'Agadir' },
    { '@type': 'Place', name: 'Ifrane' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morocco Adventure Sports',
        item: PAGE_URL,
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the top adventure sports in Morocco for 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top adventure sports in Morocco include surfing at Taghazout, Essaouira, and Imsouane; kitesurfing in Dakhla and Essaouira; rock climbing at Todra Gorge and Tafraoute; paragliding over Agadir and Ifrane; sandboarding at Erg Chebbi near Merzouga; canyoning at Akchour near Chefchaouen; white water rafting on the Ourika and Ahansal rivers; horse riding on Atlantic beaches and through the Atlas foothills; mountain biking on Atlas singletrack; quad biking in the Agafay Desert; and zip-lining at Terres d\'Amanar near Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do adventure sports cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adventure sports in Morocco are affordable compared to Europe. Surfing lessons cost from 300-500 MAD per session, kitesurfing lessons from 800-1,500 MAD, sandboarding from 200-400 MAD, quad biking from 400-800 MAD per hour, paragliding tandem flights from 800-1,500 MAD, rock climbing from 500-1,000 MAD per guided session, canyoning from 600-1,200 MAD, white water rafting from 500-900 MAD, horse riding from 350-700 MAD, and zip-lining from 300-600 MAD. Prices vary by season and operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for adventure sports and extreme activities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is safe for adventure sports when you choose reputable operators with certified guides. Verify certifications, check equipment condition, and read recent reviews before booking. For water sports, confirm that life jackets and rescue procedures are in place. For climbing and canyoning, use operators with certified mountain guides. Travel insurance that explicitly covers adventure activities is strongly recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco for adventure sports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best overall periods are spring (March-May) and autumn (September-November). Surfing peaks from September to April when Atlantic swells are strongest. Kitesurfing is best April to October when trade winds blow consistently. Desert activities like sandboarding are ideal October to April. Rock climbing and canyoning are best in spring and autumn. October stands out as the single best month for the widest range of activities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners do adventure sports in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most adventure sports in Morocco welcome beginners. Surf schools at Taghazout and Essaouira teach first-timers on gentle beach breaks. Tandem paragliding requires zero experience. Sandboarding, quad biking, zip-lining, and horse riding are all accessible with no prior skill. Beginner rock climbing routes at Todra Gorge start at French grade 5a. Advanced activities like multi-pitch trad climbing at Taghia or independent kitesurfing do require prior experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best surfing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taghazout near Agadir is Morocco\'s surfing capital, home to Anchor Point and Killer Point. Imsouane has the longest right-hand wave in Africa. Essaouira offers consistent wind-driven surf. Sidi Kaouki is ideal for beginners with uncrowded breaks. The southern coast near Mirleft and Sidi Ifni provides quiet reef breaks away from crowds. Water temperature ranges from 17 to 22 degrees Celsius year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for adventure sports in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack SPF 50+ sunscreen, a wide-brim hat, UV-protective sunglasses, a refillable water bottle, quick-dry clothing, sturdy closed-toe shoes for land activities, reef shoes for water sports, and a GoPro or waterproof camera. Most operators supply activity-specific gear such as wetsuits, helmets, harnesses, and boards. Carry your travel insurance documents and confirm that adventure activities are covered by your policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there white water rafting in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. White water rafting operates on the Ahansal River in the Central High Atlas (Class III-IV rapids) and the Ourika River near Marrakech (Class II-III, seasonal). The Ahansal season runs from March to May when snowmelt raises water levels. Guided trips include all equipment, transport from Marrakech or Beni Mellal, and lunch. Half-day sessions cost from 500-900 MAD per person.',
      },
    },
  ],
};

/* ================================================================
   DATA: ADVENTURE SPORTS
   ================================================================ */

const adventureSports = [
  {
    name: 'Surfing',
    subtitle: 'World-class Atlantic breaks from Taghazout to Imsouane',
    icon: Waves,
    image: '/images/hero-surfing.webp',
    location: 'Taghazout, Essaouira, Imsouane, Sidi Kaouki',
    duration: '2-3 hour sessions',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'September-April (biggest swells)',
    price: 'From 300 MAD per lesson',
    description:
      'Morocco ranks among the finest surfing destinations in Africa. Consistent North Atlantic swells, water temperatures that rarely drop below 17 degrees, and a coastline packed with point breaks, reef breaks, and beach breaks make this country a magnet for wave riders at every level. Taghazout, 20 kilometers north of Agadir, is the epicenter. Anchor Point delivers long, powerful right-handers that draw professionals from around the world; Killer Point produces fast, hollow barrels on bigger swells; and the gentle beach break at Tamraght welcomes first-timers. Farther north, Imsouane shelters the longest right-hand wave on the African continent, a mellow point break that peels for hundreds of meters on a good day. Essaouira offers wind-driven surf paired with kitesurfing and a thriving arts scene, while Sidi Kaouki provides uncrowded peaks for those willing to venture slightly off the beaten path.',
    highlights: [
      'Anchor Point in Taghazout: one of the world\'s top right-hand point breaks',
      'Imsouane: Africa\'s longest right-hand wave, ideal for longboarding',
      'Water temperatures 17-22 degrees Celsius year-round',
      'Surf camps from 500 MAD per night with lessons and accommodation included',
      'Essaouira: wind-driven waves and vibrant surf culture',
    ],
    safetyTips: [
      'Check tide tables and swell forecasts before paddling out',
      'Beginners should always surf with a certified instructor',
      'Wear a 3/2mm wetsuit November through March when water drops to 17 degrees',
      'Respect lineup etiquette and give priority to local surfers at crowded breaks',
    ],
  },
  {
    name: 'Kitesurfing',
    subtitle: 'Consistent trade winds at Dakhla and Essaouira',
    icon: Wind,
    image: '/images/hero-essaouira-coast.webp',
    location: 'Dakhla, Essaouira, Moulay Bousselham',
    duration: '3-5 hour sessions',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'April-October (strongest winds)',
    price: 'From 800 MAD per lesson',
    description:
      'Morocco is a global kitesurfing hub thanks to powerful, consistent trade winds that funnel along its Atlantic coast. Dakhla, in the far south, is the crown jewel: a vast turquoise lagoon with butter-flat water, side-onshore thermals blowing 300+ days per year, and water so warm you can ride in boardshorts well into December. The Dakhla lagoon stretches 40 kilometers, giving riders endless downwind space and multiple kite spots depending on wind direction. Essaouira earns its nickname "Wind City of Africa" from April to September, when Alizee winds reach 25-35 knots daily. The beach break here suits experienced freeriders and wave-kiting enthusiasts. IKO-certified schools operate at both locations with multilingual instructors and modern gear. Equipment rental for experienced riders starts from 400 MAD per day.',
    highlights: [
      'Dakhla lagoon: flat water and 300+ wind days per year',
      'Essaouira: accessible from Marrakech with daily bus service',
      'IKO-certified schools with modern equipment at both locations',
      'Equipment rental from 400 MAD per day for experienced riders',
      'Dakhla hosts international kitesurfing competitions annually',
    ],
    safetyTips: [
      'Complete a certified IKO course before riding independently',
      'Never kite alone; always ride at supervised spots or with a buddy',
      'Wear a helmet and impact vest while learning',
      'Check wind forecasts and respect offshore wind warnings',
    ],
  },
  {
    name: 'Rock Climbing',
    subtitle: 'Limestone walls at Todra Gorge and granite in Tafraoute',
    icon: Mountain,
    image: '/images/hero-atlas-village.webp',
    location: 'Todra Gorge, Tafraoute, Taghia Canyon, Chefchaouen',
    duration: 'Half-day to full-day sessions',
    difficulty: 'Beginner to Expert',
    bestSeason: 'March-May, September-November',
    price: 'From 500 MAD per guided session',
    description:
      'Morocco has emerged as one of North Africa\'s premier climbing destinations. Todra Gorge, carved through the eastern High Atlas, is the flagship venue: 300-meter vertical limestone walls flank a narrow canyon, hosting over 150 bolted sport routes from French grade 5a to 8b+. The classic Pilier du Couchant multi-pitch route climbs the full height of the gorge and ranks among the finest moderate multi-pitch lines in Africa. Tafraoute in the Anti-Atlas provides a completely different experience: pink granite domes and boulders set amid almond orchards and painted rocks, with bouldering problems and short sport routes. For the truly adventurous, Taghia Canyon is Morocco\'s answer to Yosemite: big-wall limestone routes up to 800 meters accessible only by mule or a long approach on foot. Chefchaouen in the Rif Mountains has newly developed crags with short, steep sport routes and views of the blue-washed medina.',
    highlights: [
      'Todra Gorge: 150+ bolted sport routes from 5a to 8b+ on limestone',
      'Tafraoute: granite bouldering amid painted rocks and almond orchards',
      'Taghia Canyon: remote big-wall routes up to 800 meters high',
      'Chefchaouen: new crags with Rif Mountain views',
      'Winter climbing weather rivaling southern Spain at a fraction of the cost',
    ],
    safetyTips: [
      'Bring your own gear or rent from shops in Tinghir near Todra Gorge',
      'Hire a local guide for Taghia: access is remote and most routes are trad',
      'Inspect bolt conditions on older routes, particularly at Todra',
      'Climb early morning or late afternoon in warmer months to avoid heat',
    ],
  },
  {
    name: 'Paragliding',
    subtitle: 'Thermal flights above the Atlas, Agadir coast, and Ifrane forests',
    icon: Compass,
    image: '/images/hero-atlas.webp',
    location: 'Aguergour (Atlas), Agadir, Ifrane, Dades Valley',
    duration: '15-45 minutes per flight',
    difficulty: 'No Experience Required (tandem)',
    bestSeason: 'March-November',
    price: 'From 800 MAD per tandem flight',
    description:
      'Paragliding in Morocco opens up aerial perspectives that no other activity can match. The launch site at Aguergour, roughly 45 minutes south of Marrakech in the High Atlas foothills, sends tandem pilots and passengers soaring over terraced Berber villages, walnut groves, and the winding river valleys below. On strong thermal days, flights can last 30-45 minutes and gain over 1,000 meters of altitude. Agadir offers coastal flights with views down the golden beach and out over the Atlantic horizon. Ifrane, the "Switzerland of Morocco" in the Middle Atlas, provides a forest-and-lake landscape that feels completely different from the rest of the country. Tandem flights require zero experience: you run a few steps at the launch ramp, your certified pilot handles takeoff, steering, and landing, and you enjoy the view.',
    highlights: [
      'Aguergour: soar over Atlas valleys with panoramic mountain views',
      'Agadir: coastal flights over the Atlantic and golden beaches',
      'Ifrane: fly above cedar forests and Middle Atlas lakes',
      'Tandem flights need zero experience; the pilot does everything',
      'GoPro footage and photos included with most operators',
    ],
    safetyTips: [
      'Fly only with certified tandem pilots from insured operators',
      'Wear sturdy shoes and avoid loose clothing or dangling scarves',
      'Flights depend on weather; be prepared for same-day cancellation',
      'Disclose any medical conditions or fear of heights before takeoff',
    ],
  },
  {
    name: 'Sandboarding',
    subtitle: 'Ride the 150-meter dunes of Erg Chebbi at Merzouga',
    icon: TrendingUp,
    image: '/images/hero-merzouga.webp',
    location: 'Erg Chebbi (Merzouga), Erg Chigaga (M\'Hamid)',
    duration: '1-3 hours per session',
    difficulty: 'Beginner Friendly',
    bestSeason: 'October-April (cool desert temperatures)',
    price: 'From 200 MAD per session',
    description:
      'Sandboarding the Erg Chebbi dunes near Merzouga is one of Morocco\'s most photogenic adrenaline rushes. These dunes tower up to 150 meters above the desert floor, their ridgelines curving against a sky that shifts from deep blue at midday to orange and crimson at sunset. You strap a waxed board to your feet at the top, point downhill, and slide. The speed builds quickly on steeper faces, and wipeouts send up dramatic plumes of fine golden sand. The climb back up is a genuine workout but the views from the summit reward every step. Most desert camps at Merzouga include sandboarding in their overnight packages at no extra charge. Erg Chigaga, accessible from M\'Hamid in the Draa Valley, offers larger dunes with far fewer tourists for those who want solitude with their thrills.',
    highlights: [
      'Erg Chebbi: dunes up to 150 meters for long, fast descents',
      'No experience needed; anyone can sandboard within minutes',
      'Often included free with desert camp overnight bookings',
      'Combine with sunset camel trek and Sahara stargazing',
      'Erg Chigaga: remote dunes with fewer tourists',
    ],
    safetyTips: [
      'Wear closed shoes and long sleeves to prevent sand burn',
      'Apply sunscreen generously, including under the chin (sand reflects UV)',
      'Carry at least 2 liters of water per person',
      'Avoid sandboarding in midday heat from June to September',
    ],
  },
  {
    name: 'Quad Biking',
    subtitle: 'Agafay Desert, Merzouga, and palm-grove trails',
    icon: Gauge,
    image: '/images/hero-agafay.webp',
    location: 'Agafay Desert, Merzouga, Ouarzazate, Marrakech outskirts',
    duration: '1-4 hours',
    difficulty: 'Beginner to Intermediate',
    bestSeason: 'Year-round (best October-May)',
    price: 'From 400 MAD per hour',
    description:
      'Quad biking is one of Morocco\'s most accessible adventure activities. The Agafay Desert, a moon-like landscape of rocky plains and dry riverbeds just 30 minutes from Marrakech, is the most popular venue. Morning and sunset sessions let you tear across open terrain with the snow-capped Atlas range as a backdrop. Merzouga offers a different experience: riding alongside the Sahara dunes through hamada (stony desert) and past date-palm oases where you stop for mint tea with local families. No driving license is required for guided tours. Operators provide comprehensive instruction, helmets, goggles, and dust masks before you ride. Sunset sessions followed by a traditional Berber dinner under the stars have become one of Marrakech\'s most popular excursions.',
    highlights: [
      'Agafay Desert: 30 minutes from Marrakech with Atlas Mountain views',
      'Merzouga: ride alongside Sahara dunes through oases',
      'No driving license required for guided tours',
      'Sunset quad tours from 600 MAD including Berber dinner',
      'Palm-grove trails near Marrakech for a gentler ride',
    ],
    safetyTips: [
      'Wear long trousers, closed shoes, and all provided safety gear',
      'Follow your guide and stay on designated routes at all times',
      'Maintain a safe following distance from other riders',
      'Choose operators with well-maintained, newer quad bikes',
    ],
  },
  {
    name: 'Canyoning',
    subtitle: 'Rappel waterfalls and swim through gorges at Akchour',
    icon: Droplets,
    image: '/images/hero-ouzoud.webp',
    location: 'Akchour, Ourika Valley, Paradise Valley, Ouzoud',
    duration: '4-7 hours',
    difficulty: 'Moderate',
    bestSeason: 'April-October (water levels permitting)',
    price: 'From 600 MAD per person',
    description:
      'Morocco\'s limestone gorges, basalt canyons, and Atlas Mountain valleys create conditions that are tailor-made for canyoning. Akchour, near Chefchaouen in the Rif Mountains, is the standout destination: a series of waterfalls and deep pools set in pristine wilderness, where you rappel down rock faces, leap from natural platforms into turquoise pools, and scramble through narrow slot sections. The Ourika Valley, 45 minutes south of Marrakech, offers accessible half-day trips with waterfalls up to 20 meters high. Paradise Valley near Agadir features smooth rock slides and emerald swimming pools in a palm-lined gorge. Operators provide all technical equipment including wetsuits, helmets, harnesses, and ropes. Guided groups are typically limited to 8-10 people for safety.',
    highlights: [
      'Akchour: remote canyon descents through Rif Mountain wilderness',
      'Ourika Valley: half-day waterfall rappelling near Marrakech',
      'Paradise Valley: natural rock slides and emerald pools',
      'All technical equipment provided by operators',
      'Combine with hiking for a full-day Atlas Mountain adventure',
    ],
    safetyTips: [
      'Never canyon without a certified guide and proper equipment',
      'Wear the provided wetsuit and helmet at all times in the canyon',
      'Check water levels before departure; flash floods follow rain',
      'Ensure your operator carries a first aid kit and satellite phone',
    ],
  },
  {
    name: 'Mountain Biking',
    subtitle: 'Singletrack across the High Atlas and down to the desert',
    icon: Bike,
    image: '/images/hero-trekking.webp',
    location: 'High Atlas, Ourika Valley, Agafay, Dades Valley, Amizmiz',
    duration: 'Half-day to multi-day',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'March-May, September-November',
    price: 'From 500 MAD per half-day guided',
    description:
      'The diversity of terrain in Morocco makes it a mountain biking destination with few equals. The High Atlas offers technical singletrack descents through Berber villages and juniper forests, with views that stretch to the Sahara on clear days. Amizmiz, 55 kilometers south of Marrakech, has become a hub for guided riding with networks of village trails and purpose-built singletrack connecting hamlets, irrigation channels, and hilltop granaries. The Agafay Desert delivers flowing trails across rocky moon-like landscapes. The Dades Valley combines gravel roads with singletrack linking oasis villages beneath towering red-rock cliffs. Multi-day bikepacking routes crossing the Atlas from Marrakech to the Sahara have grown rapidly in popularity, blending technical riding with overnight stays in mountain gites and desert camps. E-bike options are now available at most operators for riders who want the views without the full cardiovascular effort.',
    highlights: [
      'Amizmiz: growing hub with village trails and guided networks',
      'High Atlas: technical singletrack with snow-capped mountain views',
      'Dades Valley: gravel and singletrack through red-rock oasis villages',
      'Multi-day bikepacking from Marrakech across the Atlas to the Sahara',
      'E-bike options available at most operators',
    ],
    safetyTips: [
      'Always wear a helmet; carry a basic repair kit and hand pump',
      'Check brake pads and tire pressure before every ride',
      'Carry at least 2 liters of water on any ride in Morocco',
      'Ride with a guide on unfamiliar trails to prevent getting lost',
    ],
  },
  {
    name: 'Zip-Lining',
    subtitle: 'Fly across Atlas valleys and forest canopies',
    icon: Zap,
    image: '/images/hero-hiking-atlas.webp',
    location: 'Terres d\'Amanar (Atlas), Agafay, Ourika Valley',
    duration: '1-3 hours',
    difficulty: 'Beginner Friendly',
    bestSeason: 'Year-round',
    price: 'From 300 MAD per person',
    description:
      'Zip-lining in Morocco has grown steadily, with several well-equipped adventure parks now operating in the Atlas Mountains. Terres d\'Amanar, about 30 minutes from Marrakech in the Atlas foothills, is the most established. It offers multiple zip-lines stretching up to 300 meters over forested valleys, plus aerial rope courses, climbing walls, and archery. The experience is family-friendly and accessible to anyone who meets the minimum age and weight requirements. Some operators in the Ourika Valley have installed zip-lines that cross above river gorges, adding a water element to the thrill. The Agafay Desert has newer installations that combine zip-lining with quad biking and camel rides for a full adventure day.',
    highlights: [
      'Terres d\'Amanar: multiple zip-lines up to 300 meters over Atlas forests',
      'Family-friendly with no prior experience needed',
      'Ourika Valley: zip-line over river gorges and waterfalls',
      'Combine with rope courses, climbing walls, and Berber lunch',
      'Only 30 minutes from Marrakech for easy half-day trips',
    ],
    safetyTips: [
      'Verify the operator uses modern equipment with redundant safety systems',
      'Follow all weight and age restrictions listed by the operator',
      'Wear closed-toe shoes and remove loose jewelry before riding',
      'Listen to the full safety briefing before your first run',
    ],
  },
  {
    name: 'White Water Rafting',
    subtitle: 'Class III-IV rapids on Atlas Mountain rivers',
    icon: Waves,
    image: '/images/hero-ouzoud.webp',
    location: 'Ahansal River, Ourika River, Oum Er-Rbia',
    duration: 'Half-day to full-day',
    difficulty: 'Moderate to Challenging',
    bestSeason: 'March-May (snowmelt season)',
    price: 'From 500 MAD per half-day',
    description:
      'White water rafting in Morocco is a lesser-known activity that rewards those willing to seek it out. The Ahansal River, cutting through the Central High Atlas between Beni Mellal and Azilal, delivers the strongest rapids: Class III-IV sections that surge during spring snowmelt from March to May. The gorge scenery is stunning, with red and ochre cliffs rising above the water and Berber villages perched on terraced hillsides. The Ourika River, closer to Marrakech, offers gentler Class II-III rapids during the wet season, making it a solid choice for beginners and families. Guided trips include all equipment (rafts, paddles, helmets, life vests), safety briefings, and typically lunch at a riverside Berber home. Transport from Marrakech or Beni Mellal is arranged by most operators.',
    highlights: [
      'Ahansal River: Class III-IV rapids through dramatic Atlas gorges',
      'Ourika River: gentler Class II-III rapids accessible from Marrakech',
      'All equipment and safety gear provided by operators',
      'Lunch at a riverside Berber home included with most trips',
      'Spring snowmelt creates reliable water levels March through May',
    ],
    safetyTips: [
      'Wear the provided life vest and helmet at all times on the river',
      'Listen to the guide\'s paddle commands and safety instructions',
      'Water is cold in spring; wetsuits are provided but dress warmly underneath',
      'Confirm that your travel insurance covers white water rafting',
    ],
  },
  {
    name: 'Horse Riding',
    subtitle: 'Beach gallops, Atlas trails, and desert rides',
    icon: Heart,
    image: '/images/hero-beach.webp',
    location: 'Essaouira, Agadir, Ouirgane (Atlas), Merzouga',
    duration: '1 hour to multi-day',
    difficulty: 'Beginner to Advanced',
    bestSeason: 'Year-round (best October-May)',
    price: 'From 350 MAD per hour',
    description:
      'Morocco has a deep equestrian tradition, and horse riding is one of the most rewarding ways to explore the country\'s landscapes. Essaouira offers sunset beach gallops along kilometers of firm, flat sand backed by dunes and argan groves. Ouirgane in the High Atlas is the base for multi-day trail rides through walnut-forested valleys, past Berber villages, and up to mountain passes with panoramic views. Agadir provides beachfront rides along the Souss-Massa coast, where you may spot flamingos and other birdlife in the nearby national park. Near Merzouga, horse rides through the palm groves and along the edges of the Erg Chebbi dunes at sunrise or sunset offer a quieter alternative to camel trekking. Stables use well-trained Barb and Arab-Barb horses accustomed to varied terrain and riders of all levels.',
    highlights: [
      'Essaouira: sunset beach gallops along Atlantic sands',
      'Ouirgane: multi-day Atlas trail rides through Berber villages',
      'Agadir: coastal rides near Souss-Massa National Park',
      'Merzouga: sunrise rides alongside Sahara dunes',
      'Barb and Arab-Barb horses suited to all experience levels',
    ],
    safetyTips: [
      'Wear sturdy boots with a small heel and a riding helmet',
      'Be honest about your riding experience when booking',
      'Apply sunscreen and carry water on longer rides',
      'Choose stables that demonstrate proper horse care and welfare standards',
    ],
  },
] as const;

/* ================================================================
   DATA: SEASONAL GUIDE
   ================================================================ */

const seasonGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    tempDay: '20-30 C (coast), 15-25 C (mountains)',
    rating: 'Excellent',
    description:
      'The finest all-round season. Surf swells remain strong through March and April. Trade winds build for kitesurfing. Desert temperatures are comfortable for sandboarding. Snowmelt feeds Atlas rivers for white water rafting. Rock climbing, canyoning, mountain biking, and horse riding conditions are all at their peak.',
    recommended: 'All activities: surfing, rafting, climbing, canyoning, biking, horse riding',
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    tempDay: '30-40 C (coast), 35-45 C (desert)',
    rating: 'Good (water sports)',
    description:
      'Too hot for desert and mountain activities at midday. Kitesurfing peaks with strong daily trade winds along the coast. Surfing is smaller but fun at many breaks. Canyoning in mountain valleys offers a refreshing escape. Horse riding on the coast is pleasant in the morning and evening. Avoid quad biking and sandboarding in the desert.',
    recommended: 'Kitesurfing, surfing, canyoning, zip-lining, coastal horse riding',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    tempDay: '22-32 C (coast), 20-30 C (desert)',
    rating: 'Excellent',
    description:
      'Another outstanding season for adventure sports. Atlantic surf swells return strongly. Desert temperatures cool for sandboarding and quad biking. Rock climbing at Todra Gorge is ideal. Mountain biking trails are dry and fast. Horse riding conditions are comfortable across all regions. October is the single best month overall.',
    recommended: 'All activities: surfing, sandboarding, climbing, paragliding, horse riding',
  },
  {
    season: 'Winter (December-February)',
    icon: Droplets,
    tempDay: '15-20 C (coast), 10-20 C (desert by day)',
    rating: 'Good (surf & desert)',
    description:
      'Biggest Atlantic swells make this prime surfing season. Desert days are pleasant but nights are cold. Rock climbing at Todra Gorge is excellent with cool, dry weather. Kitesurfing slows with inconsistent wind. Canyoning is limited by cold water. Horse riding on the coast remains comfortable during the day.',
    recommended: 'Surfing, rock climbing, sandboarding, quad biking, horse riding',
  },
];

/* ================================================================
   DATA: SAFETY ESSENTIALS
   ================================================================ */

const safetyEssentials = [
  {
    title: 'Choose Certified Operators',
    icon: ShieldCheck,
    description:
      'Look for operators with verified online reviews, proper liability insurance, and internationally certified guides (IKO for kitesurfing, IFMGA for climbing). Ask to see credentials before booking.',
  },
  {
    title: 'Get Adventure Travel Insurance',
    icon: Award,
    description:
      'Standard travel insurance often excludes adventure activities. Confirm your policy covers each specific sport you plan to do: paragliding, climbing, kitesurfing, and rafting are commonly excluded.',
  },
  {
    title: 'Inspect All Equipment',
    icon: CheckCircle,
    description:
      'Check helmets, harnesses, ropes, and life vests before every activity. Refuse any equipment that looks frayed, cracked, or damaged. Your safety is more important than politeness.',
  },
  {
    title: 'Know Your Limits',
    icon: AlertTriangle,
    description:
      'Morocco offers activities for every skill level, but choosing the wrong difficulty is dangerous. Start easy and work up. Be honest about your fitness and experience when booking.',
  },
  {
    title: 'Stay Hydrated and Sun-Protected',
    icon: Droplets,
    description:
      'Morocco\'s heat and dry air cause dehydration quickly during physical activity. Carry 2+ liters of water per person. Wear SPF 50+ sunscreen and reapply every two hours.',
  },
  {
    title: 'Respect Local Conditions',
    icon: Globe,
    description:
      'Weather, tides, wind, and water levels change quickly. Check conditions before heading out and be prepared to cancel or postpone if safety requires it.',
  },
];

/* ================================================================
   DATA: COSTS
   ================================================================ */

const costBreakdown = [
  { item: 'Surfing lesson (2 hours)', cost: 'From 300-500 MAD', notes: 'Board and wetsuit included' },
  { item: 'Kitesurfing lesson (3 hours)', cost: 'From 800-1,500 MAD', notes: 'IKO-certified with equipment' },
  { item: 'Rock climbing (full day guided)', cost: 'From 500-1,000 MAD', notes: 'Gear rental and guide included' },
  { item: 'Paragliding tandem flight', cost: 'From 800-1,500 MAD', notes: 'GoPro footage usually included' },
  { item: 'Sandboarding session', cost: 'From 200-400 MAD', notes: 'Often free with desert camp' },
  { item: 'Quad biking (1-2 hours)', cost: 'From 400-800 MAD', notes: 'Helmet, goggles, guide included' },
  { item: 'Canyoning half-day', cost: 'From 600-1,200 MAD', notes: 'Wetsuit, helmet, harness, guide' },
  { item: 'Mountain biking half-day', cost: 'From 500-1,000 MAD', notes: 'Bike, helmet, guide, transport' },
  { item: 'Zip-lining (adventure park)', cost: 'From 300-600 MAD', notes: 'Multiple lines and activities' },
  { item: 'White water rafting half-day', cost: 'From 500-900 MAD', notes: 'All gear, transport, lunch' },
  { item: 'Horse riding (1-2 hours)', cost: 'From 350-700 MAD', notes: 'Helmet and horse provided' },
];

/* ================================================================
   DATA: FAQ (displayed in component)
   ================================================================ */

const faqs = [
  {
    question: 'What are the top adventure sports in Morocco for 2026?',
    answer:
      'Morocco offers 11 world-class adventure sports: surfing at Taghazout, Essaouira, and Imsouane; kitesurfing in Dakhla and Essaouira; rock climbing at Todra Gorge and Tafraoute; paragliding over Agadir, the Atlas, and Ifrane; sandboarding at Erg Chebbi; quad biking in the Agafay Desert; canyoning at Akchour; mountain biking on Atlas trails; zip-lining at Terres d\'Amanar; white water rafting on the Ahansal River; and horse riding on Atlantic beaches and Atlas trails.',
  },
  {
    question: 'How much do adventure sports cost in Morocco?',
    answer:
      'Morocco is very affordable for adventure sports. Sandboarding starts from 200 MAD, surfing lessons from 300 MAD, zip-lining from 300 MAD, horse riding from 350 MAD, quad biking from 400 MAD, mountain biking from 500 MAD, rock climbing from 500 MAD, rafting from 500 MAD, canyoning from 600 MAD, kitesurfing from 800 MAD, and paragliding from 800 MAD. Prices vary by season, operator, and group size. Seasonal pricing applies.',
  },
  {
    question: 'Is Morocco safe for extreme sports?',
    answer:
      'Morocco is safe for adventure sports when you use reputable operators with certified guides. Verify credentials (IKO for kitesurfing, certified mountain guides for climbing and canyoning), inspect equipment before use, and read recent reviews. Ensure your travel insurance covers each specific activity. The biggest preventable risks are dehydration and sun exposure, both easily managed with preparation.',
  },
  {
    question: 'When is the best time for adventure sports in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) are the best all-round seasons. Surfing peaks September to April. Kitesurfing is best April to October. Desert activities suit October to April. White water rafting runs March to May during snowmelt. Rock climbing and mountain biking are ideal in spring and autumn. October is the single best month for the widest range of activities.',
  },
  {
    question: 'Can beginners do adventure sports in Morocco?',
    answer:
      'Most activities welcome beginners. Surf schools teach first-timers on gentle beach breaks. Tandem paragliding requires zero experience. Sandboarding, quad biking, zip-lining, and horse riding are accessible with no prior skill. Beginner climbing routes at Todra Gorge start at grade 5a. White water rafting on the Ourika River suits families and newcomers. Only advanced climbing, independent kitesurfing, and Class IV rafting need prior experience.',
  },
  {
    question: 'Where is the best surfing in Morocco?',
    answer:
      'Taghazout near Agadir is Morocco\'s surfing capital with Anchor Point and Killer Point. Imsouane has Africa\'s longest right-hand wave. Essaouira offers wind-driven surf and arts-scene culture. Sidi Kaouki is ideal for beginners with uncrowded breaks. Mirleft and Sidi Ifni offer quiet southern reef breaks. Water temperature ranges from 17 to 22 degrees year-round.',
  },
  {
    question: 'Is there white water rafting in Morocco?',
    answer:
      'Yes. The Ahansal River in the Central High Atlas has Class III-IV rapids during spring snowmelt (March-May). The Ourika River near Marrakech offers gentler Class II-III rapids during the wet season. Guided trips include all equipment, safety briefings, transport, and lunch. Half-day sessions cost from 500-900 MAD per person.',
  },
  {
    question: 'What should I pack for adventure sports in Morocco?',
    answer:
      'Pack SPF 50+ sunscreen, a wide-brim hat, UV sunglasses, a refillable water bottle, quick-dry clothing, sturdy closed-toe shoes, reef shoes for water sports, and a waterproof camera. Most operators provide activity-specific gear like wetsuits, helmets, and harnesses. Carry your travel insurance documents and confirm adventure coverage.',
  },
];

/* ================================================================
   DATA: RELATED GUIDES
   ================================================================ */

const relatedGuides = [
  {
    href: '/morocco-surfing-guide',
    icon: Waves,
    title: 'Morocco Surfing Guide',
    description:
      'In-depth look at every surf spot from Taghazout to Dakhla, with swell forecasts, camp reviews, and gear rental prices.',
  },
  {
    href: '/morocco-rock-climbing',
    icon: Mountain,
    title: 'Rock Climbing Morocco',
    description:
      'Route-by-route coverage of Todra Gorge, Taghia Canyon, and Anti-Atlas bouldering with grades and logistics.',
  },
  {
    href: '/morocco-horse-riding',
    icon: Heart,
    title: 'Horse Riding in Morocco',
    description:
      'Beach gallops in Essaouira, Atlas trail rides, and desert excursions with stable recommendations and prices.',
  },
  {
    href: '/morocco-trekking-guide',
    icon: Route,
    title: 'Trekking in Morocco',
    description:
      'Multi-day trekking routes through the Atlas Mountains, Jebel Saghro, and the Rif with trail details and costs.',
  },
  {
    href: '/morocco-outdoor-activities',
    icon: Compass,
    title: 'Outdoor Activities Morocco',
    description:
      'Complete overview of outdoor experiences from hiking and cycling to kayaking and birdwatching.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

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
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
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
            Morocco Adventure Sports
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            11 adrenaline-fueled activities across coast, desert, and mountains.
            Surfing, kitesurfing, rock climbing, paragliding, sandboarding,
            canyoning, rafting, horse riding, mountain biking, quad biking, and
            zip-lining with prices from 200 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Built for Adventure Sports
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco compresses an extraordinary range of adventure terrain
                into a single country. Within a few hours of driving you can
                transition from riding Atlantic swells at Taghazout to
                sandboarding 150-meter Sahara dunes at Erg Chebbi, from
                paragliding above the snow-capped Atlas to rock climbing
                300-meter limestone walls at Todra Gorge. Coastline, desert,
                mountains, gorges, forests, and rivers: the raw ingredients for
                world-class adventure sport are all here.
              </p>
              <p>
                What makes Morocco stand out from competitors like Portugal or
                Turkey is the combination of excellent conditions and
                affordability. A surf lesson costs a fraction of what you would
                pay in Peniche. A tandem paragliding flight over the Atlas costs
                less than half the price of a comparable flight in the Alps. The
                adventure tourism infrastructure has matured rapidly, with
                certified guides, modern equipment, and professional operators
                now available for every activity covered in this guide. Yet the
                country retains its raw character: you will share the waves with
                local fishermen, cross paths with Berber shepherds on mountain
                bike trails, and raft through gorges where the only other
                presence is birdsong and rushing water.
              </p>
              <p>
                This guide covers 11 adventure sports, each with detailed
                information on the best locations, optimal season, realistic
                costs, safety guidelines, and practical tips. Whether you are a
                first-timer looking for a gentle introduction or an experienced
                athlete chasing serious thrills, Morocco has something for you.
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
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                11
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                Adventure activities
              </div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                20+ Spots
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                World-class locations
              </div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                200 MAD
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                Starting price
              </div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                Year-round
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                Adventure season
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Adventure Sports Grid ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flame className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            11 Best Adventure Sports in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Atlantic surf breaks to Sahara dunes, Atlas gorges to desert
            trails, these are the top adrenaline experiences Morocco offers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies
            and costs vary by operator and group size.
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
                      <p className="text-sm text-white/80 mt-1">
                        {sport.subtitle}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                      {sport.difficulty}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <MapPin className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">
                          Location
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">
                          {sport.location.split(',')[0]}
                        </div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Clock className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">
                          Duration
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">
                          {sport.duration}
                        </div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Calendar className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">
                          Best Season
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">
                          {sport.bestSeason.split('(')[0].trim()}
                        </div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <DollarSign className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">
                          Price
                        </div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">
                          {sport.price}
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">
                      {sport.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                          Highlights
                        </h4>
                        <div className="space-y-2">
                          {sport.highlights.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                            >
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
                            <div
                              key={i}
                              className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                              {tip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[var(--border-primary)] flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {sport.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {sport.bestSeason}
                      </span>
                      <span className="flex items-center gap-1">
                        <Gauge className="w-3 h-3" /> {sport.difficulty}
                      </span>
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
            Adventure sports carry inherent risks. Follow these guidelines to
            stay safe and get the most from your Morocco trip.
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
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
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
            Best Season for Each Adventure Sport
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers adventure year-round, but the ideal activity depends
            on when you visit.
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
                    <span
                      className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold ${
                        season.rating === 'Excellent'
                          ? 'bg-green-100 text-green-700'
                          : season.rating.includes('Good')
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {season.rating}
                    </span>
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mb-3">
                    <Thermometer className="w-3.5 h-3.5 inline mr-1" />
                    {season.tempDay}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {season.description}
                  </p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <div className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--color-accent)]">
                        Best activities:
                      </strong>{' '}
                      {season.recommended}
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
            What adventure activities cost in Morocco. Prices are starting
            figures and may vary by season, operator, and group size.
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
                  <span className="font-medium text-[var(--text-primary)]">
                    {row.item}
                  </span>
                  <span className="text-[var(--color-accent)] font-bold">
                    {row.cost}
                  </span>
                  <span className="text-[var(--text-muted)] text-xs">
                    {row.notes}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="card-moroccan p-5 text-center">
              <Heart className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">
                Budget Adventures
              </div>
              <div className="text-lg font-bold text-[var(--color-accent)] font-[family-name:var(--font-display)]">
                From 200-500 MAD
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                Sandboarding, zip-line, horse riding
              </div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Users className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">
                Mid-Range Activities
              </div>
              <div className="text-lg font-bold text-[var(--color-gold)] font-[family-name:var(--font-display)]">
                From 500-1,000 MAD
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                Surfing, climbing, biking, rafting
              </div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Award className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">
                Premium Experiences
              </div>
              <div className="text-lg font-bold text-[var(--color-gold)] font-[family-name:var(--font-display)]">
                From 800-1,500 MAD
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                Paragliding, kitesurfing, canyoning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about adventure sports in
            Morocco.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] ml-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco adventure with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 group hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <GuideIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {guide.description}
                  </p>
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
            From Atlantic surf breaks to Sahara sand dunes, Atlas gorges to
            mountain trails, Morocco&apos;s adventure sports deliver year-round
            thrills at prices that make other destinations look expensive. Start
            planning your trip today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/morocco-surfing-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Waves className="w-5 h-5" />
              Morocco Surfing Guide
            </Link>
            <Link
              href="/morocco-trekking-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Mountain className="w-5 h-5" />
              Trekking Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
