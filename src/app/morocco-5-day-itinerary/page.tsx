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
  Sun,
  Moon,
  Mountain,
  Compass,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Camera,
  Utensils,
  Bus,
  BedDouble,
  Luggage,
  CalendarDays,
  Sunrise,
  Sunset,
  MessageCircleQuestion,
  Banknote,
  ShieldCheck,
  Footprints,
  Map,
  Thermometer,
  CloudSun,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-5-day-itinerary`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco 5-Day Itinerary 2026 | Marrakech, Sahara Desert & Dades Gorge Route',
  description:
    'Day-by-day Morocco 5-day itinerary covering Marrakech (2 days), Ait Benhaddou & Ouarzazate, Sahara Desert camel trek in Merzouga, and return via Dades Gorge. Morning, afternoon & evening plans with restaurant picks, transport, accommodation, and daily costs from 3,200 MAD.',
  keywords: [
    'Morocco 5 day itinerary',
    '5 days in Morocco',
    'Morocco itinerary 5 days',
    'Marrakech to Sahara 5 days',
    'Morocco short trip itinerary',
    'Morocco desert itinerary 5 days',
    'Morocco travel itinerary 2026',
    'Marrakech Sahara desert route',
    'Ait Benhaddou Ouarzazate day trip',
    'Merzouga camel trek itinerary',
    'Dades Gorge road trip',
    'Morocco 5 day trip cost',
    'best Morocco itinerary 5 days',
    'Morocco road trip 5 days',
    'short Morocco trip plan',
    'Morocco budget itinerary 5 days',
    'Morocco luxury itinerary 5 days',
  ],
  openGraph: {
    title: 'Morocco 5-Day Itinerary 2026 | Marrakech, Sahara Desert & Dades Gorge Route',
    description:
      'Complete day-by-day 5-day Morocco itinerary: Marrakech medina, Ait Benhaddou kasbah, Ouarzazate, Sahara Desert overnight camp in Merzouga, and return via Dades Gorge. Budget, mid-range & luxury breakdowns.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech medina with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 5-Day Itinerary 2026 | Marrakech, Sahara & Dades Gorge',
    description:
      'Day-by-day 5-day Morocco route: Marrakech, Ait Benhaddou, Sahara Desert camel trek, and Dades Gorge. Three budget tiers with costs from 3,200 MAD.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is 5 days enough to see Morocco?',
    a: 'Five days is enough for the classic Marrakech-to-Sahara loop. You get two full days in Marrakech, one day crossing the Atlas Mountains to Ait Benhaddou and Ouarzazate, one night in the Sahara Desert at Merzouga, and a scenic return through Dades Gorge. You will miss Fes and the northern coast, but the route covers the most-requested highlights. If you want to add Fes or Chefchaouen, plan 7 to 10 days instead.',
  },
  {
    q: 'How much does a 5-day Morocco trip cost?',
    a: 'A budget 5-day trip costs from 3,200 MAD per person (roughly 320 USD) covering hostels, street food, and shared transport. Mid-range travelers spend from 8,500 MAD per person with riad stays, private transport, and restaurant meals. Luxury trips run from 18,000 MAD per person with boutique kasbahs, private guides, and desert glamping. Seasonal pricing can change during peak months.',
  },
  {
    q: 'What is the best time of year for a 5-day Morocco trip?',
    a: 'March to May and September to November offer the best conditions for this route. Daytime temperatures are comfortable in Marrakech and the desert is not oppressively hot. Summer (June to August) pushes desert temperatures above 45 degrees Celsius, making camel treks miserable. Winter (December to February) is pleasant in the cities but cold in the desert at night, sometimes dropping below 5 degrees.',
  },
  {
    q: 'Should I book a tour or travel independently for 5 days in Morocco?',
    a: 'A hybrid approach works best. Explore Marrakech independently on Days 1 and 2, then book a 3-day private or group desert tour for the Ait Benhaddou, Sahara, and Dades Gorge segment (Days 3 to 5). Public transport between these desert stops is infrequent and unreliable. A 3-day shared group desert tour from Marrakech costs from 1,200 MAD per person; a private driver costs from 3,500 MAD for the vehicle.',
  },
  {
    q: 'Can I do this 5-day itinerary as a loop back to Marrakech?',
    a: 'Yes. This itinerary is designed as a loop. You start and end in Marrakech, which means you only need one flight booking. Day 5 returns through Dades Gorge and over the Tizi n Tichka pass back to Marrakech, arriving by evening. Some travelers extend the final night and fly out the following morning if they want a more relaxed last day.',
  },
  {
    q: 'What should I pack for the 5-day Marrakech-Sahara route?',
    a: 'Pack layers: the temperature swings from 35 degrees in Marrakech to near freezing in the desert at night. Bring sturdy walking shoes for medina cobblestones, sandals for the desert camp, a warm fleece or jacket for desert evenings, a scarf for sun and wind protection, sunscreen with SPF 50, a headlamp for the camp, and a small daypack. Leave your large suitcase at your Marrakech riad and carry only a light bag for the 3-day desert segment.',
  },
  {
    q: 'Is the Marrakech to Sahara drive tiring?',
    a: 'The longest drive day is Day 3 from Ouarzazate to Merzouga (roughly 6 hours with stops). The roads are paved and well-maintained, but they wind through mountain passes. If you get motion sickness, take medication before departure and sit in the front seat. Drivers make regular stops at scenic viewpoints, roadside cafes, and gorge overlooks, so the driving never feels like a continuous slog.',
  },
  {
    q: 'Do I need a visa for Morocco for a 5-day trip?',
    a: 'Citizens of the US, UK, EU, Canada, Australia, and many other countries enter Morocco visa-free for up to 90 days. Your passport must be valid for at least six months beyond your arrival date. Check the Moroccan consulate website for the current list of visa-exempt nationalities before booking your flights.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco 5-Day Itinerary 2026 — Marrakech, Sahara Desert & Dades Gorge',
  description:
    'Complete day-by-day 5-day Morocco itinerary covering Marrakech, Atlas Mountains, Ait Benhaddou, Ouarzazate, Sahara Desert camel trek, and return via Dades Gorge with budget, mid-range, and luxury options.',
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
      { '@type': 'ListItem', position: 2, name: '5-Day Morocco Itinerary', item: PAGE_URL },
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
   DATA: DAILY ITINERARY
   ================================================================ */

const itineraryDays = [
  {
    day: '1',
    title: 'Arrive in Marrakech & Explore the Medina',
    location: 'Marrakech',
    icon: MapPin,
    image: '/images/hero-jemaa-elfnaa-night.webp',
    imageAlt: 'Jemaa el-Fnaa square in Marrakech at night with food stalls and crowds',
    morning: {
      title: 'Arrival & Check-In',
      description:
        'Fly into Marrakech Menara Airport (RAK). Most European flights arrive by late morning. A petit taxi from the airport to the medina costs from 70 MAD — agree on the price before climbing in, or use the fixed-rate airport shuttle for 30 MAD. Check into your riad near Riad Zitoun or Derb Dabachi, both central neighborhoods that keep you within ten minutes of every major sight. Accept the welcome mint tea, climb to the rooftop terrace, and orient yourself by spotting the Koutoubia minaret to the west.',
    },
    afternoon: {
      title: 'Jemaa el-Fnaa & the Northern Souks',
      description:
        'Walk to Jemaa el-Fnaa by 4 PM when the square shifts from daytime calm to an open-air spectacle of snake charmers, henna artists, and juice vendors (fresh orange juice from 5 MAD per glass). Before the dinner crowds arrive, head north into the souk labyrinth: the Souk Sebbaghine (dyers souk) is a riot of hung yarn in every color, Rahba Kedima sells spices and apothecary goods, and the narrow alleys near Souk Semmarine are packed with leather bags, ceramics, and brass lanterns. Haggling is expected — open at 40 percent of the asking price and settle somewhere in between.',
    },
    evening: {
      title: 'Dinner at Jemaa el-Fnaa or a Rooftop Restaurant',
      description:
        'Return to the square for dinner. The numbered food stalls (stall 14 and stall 1 are consistent crowd favorites) serve grilled meats, harira soup, and msemen flatbreads for from 40 MAD per person. For a calmer meal, walk to Nomad on Derb Aajane (mains from 90 MAD) for modern Moroccan plates with a rooftop terrace above the spice square. Wind down with a stroll through the lit-up medina — the alleyways take on a different character after dark.',
    },
    meals: 'Street food dinner at Jemaa el-Fnaa from 40 MAD. Rooftop restaurants from 120 MAD.',
    budgetStay: 'Hostel dorm in the medina from 80 MAD per night (Hostel Kif Kif, Rodamon Riad)',
    midStay: 'Traditional riad from 400 MAD per night (Riad Dar Zaman, Riad BE Marrakech)',
    luxuryStay: 'Boutique riad from 1,500 MAD per night (La Mamounia, Royal Mansour)',
    dayCost: { budget: 'from 350 MAD', mid: 'from 900 MAD', luxury: 'from 3,500 MAD' },
  },
  {
    day: '2',
    title: 'Marrakech Deep Dive — Palaces, Gardens & Hammam',
    location: 'Marrakech',
    icon: Building,
    image: '/images/hero-bahia-palace.webp',
    imageAlt: 'Ornate courtyard of Bahia Palace in Marrakech with zellige tilework and carved plaster',
    morning: {
      title: 'Bahia Palace & Saadian Tombs',
      description:
        'Arrive at Bahia Palace by 9 AM when it opens (entry from 70 MAD). The 19th-century palace sprawls through painted cedarwood rooms, zellige-tiled courtyards, and a lush garden. Allow 60 to 90 minutes. Walk 10 minutes south to the Saadian Tombs (entry from 70 MAD), sealed for centuries until 1917 and now open to reveal Italian Carrara marble mausoleums and intricate muqarnas ceilings. The morning light filtering through the tombs is worth the early start. If you have time, cross into the Mellah (historic Jewish quarter) and peek into the Lazama Synagogue.',
    },
    afternoon: {
      title: 'Jardin Majorelle & YSL Museum',
      description:
        'Take a petit taxi (from 20 MAD) to Jardin Majorelle in the Gueliz neighborhood (entry from 70 MAD). The cobalt-blue villa, built by French painter Jacques Majorelle and later owned by Yves Saint Laurent, sits among towering bamboo, bougainvillea, and over 300 cactus species. The adjacent Yves Saint Laurent Museum (from 100 MAD) is worth a visit for its rotating haute couture displays and the building itself, clad in terracotta brickwork. Grab lunch nearby at Grand Cafe de la Poste (mains from 110 MAD), a colonial-era brasserie with a shaded courtyard.',
    },
    evening: {
      title: 'Hammam Session & Farewell Dinner',
      description:
        'Return to the medina for a late-afternoon hammam. A public neighborhood hammam costs from 50 MAD for entry plus from 50 MAD for a gommage (scrub). If you want something more polished, book Heritage Spa or Les Bains de Marrakech (from 500 MAD for a full ritual including savon noir, ghassoul clay, and argan oil massage). The deep exfoliation will prepare your skin for the dry desert days ahead. For dinner, try Le Jardin (mains from 100 MAD) in a hidden courtyard off Souk Sidi Abdelaziz, or Dar Zellij (set menu from 350 MAD) for a multi-course Moroccan feast with live gnawa music.',
    },
    meals: 'Breakfast at riad (included). Lunch at Grand Cafe de la Poste from 110 MAD. Dinner at Le Jardin from 100 MAD or Dar Zellij set menu from 350 MAD.',
    budgetStay: 'Same hostel as Day 1',
    midStay: 'Same riad as Day 1',
    luxuryStay: 'Same luxury riad as Day 1',
    dayCost: { budget: 'from 400 MAD', mid: 'from 1,100 MAD', luxury: 'from 4,000 MAD' },
  },
  {
    day: '3',
    title: 'Atlas Mountains, Ait Benhaddou & Ouarzazate',
    location: 'High Atlas / Ouarzazate',
    icon: Mountain,
    image: '/images/hero-ait-benhaddou.webp',
    imageAlt: 'UNESCO-listed Ait Benhaddou kasbah with mudbrick towers against a blue sky',
    morning: {
      title: 'Cross the Tizi n\'Tichka Pass',
      description:
        'Leave Marrakech by 7:30 AM. Your driver (or tour bus) climbs the N9 highway over Tizi n\'Tichka pass at 2,260 meters, the highest paved road in North Africa. The three-and-a-half-hour drive winds through Berber villages clinging to hillsides, argan tree forests in the foothills, and increasingly dramatic red-rock gorges as you climb. Your driver will stop at a panoramic overlook near the summit where the air is thin and the views stretch for dozens of kilometers. On the descent toward Ouarzazate, the landscape flips from green valleys to arid, rust-colored terrain. Shared group tours cost from 350 MAD per person; private drivers from 1,200 MAD for the vehicle.',
    },
    afternoon: {
      title: 'Ait Benhaddou Kasbah',
      description:
        'Arrive at Ait Benhaddou, the UNESCO-listed fortified ksar that served as a film set for Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the shallow Ounila River on foot (or use the footbridge during high water) and climb through tiered mudbrick houses to the granary at the summit. The 360-degree view of the palm-lined valley and surrounding desert plateau is the single best panorama on this entire route. Entry is free. A local guide (from 100 MAD) explains the Berber architecture, points out the houses that appeared on screen, and shares stories about the families who still live inside the walls.',
    },
    evening: {
      title: 'Ouarzazate or Continue to Dades Valley',
      description:
        'Depending on your route, spend the night in Ouarzazate or push an hour further to the Dades Valley. In Ouarzazate, stroll past the Atlas Film Studios — the largest in Africa — and the Kasbah Taourirt (entry from 20 MAD) before sunset. Dinner at your guesthouse or kasbah hotel is typically a set Berber meal: harira soup, lamb or vegetable tagine, fresh bread, and seasonal fruit for from 100 MAD. The quiet of the desert town after dark is a sharp contrast to the medina chaos you left this morning.',
    },
    meals: 'Breakfast at riad (included). Lunch near Tichka pass from 60 MAD (roadside tagine). Dinner at guesthouse from 100 MAD.',
    budgetStay: 'Guesthouse near Ait Benhaddou from 150 MAD per night (Dar Ait Ben Haddou)',
    midStay: 'Kasbah hotel from 500 MAD per night (Kasbah Ellouze, Dar Daif)',
    luxuryStay: 'Boutique kasbah from 1,800 MAD per night (Ksar Ighnda, Le Berbere Palace)',
    dayCost: { budget: 'from 550 MAD', mid: 'from 1,400 MAD', luxury: 'from 4,500 MAD' },
  },
  {
    day: '4',
    title: 'Sahara Desert — Dunes, Camels & Starlit Camp',
    location: 'Merzouga / Erg Chebbi',
    icon: Sun,
    image: '/images/hero-merzouga.webp',
    imageAlt: 'Golden sand dunes of Erg Chebbi near Merzouga with a camel caravan silhouette at sunset',
    morning: {
      title: 'Drive East Through Todra Gorge',
      description:
        'Depart by 7 AM for the longest driving day on the route. The road east from Ouarzazate passes through the Dades Valley and reaches Tinghir after roughly 3 hours. Stop at Todra Gorge, where 300-meter limestone walls close to just 10 meters apart with a river running through the gap. A 30-minute walk into the gorge is enough to absorb the scale. Local cafes at the entrance serve mint tea and omelettes from 25 MAD. Continue through Tinghir, past the flat hammada (rocky desert), until the first golden dunes of Erg Chebbi rise on the horizon near Merzouga. Total driving time with stops is roughly 6 hours.',
    },
    afternoon: {
      title: 'Camel Trek Into Erg Chebbi',
      description:
        'Arrive in Merzouga by early afternoon. Rest at a hotel on the dune edge and drink plenty of water before the trek. Around 4 PM, mount your camel for the 60-to-90-minute ride into the dunes. Erg Chebbi dunes reach up to 150 meters — the tallest in Morocco. Your camel handler leads a single-file caravan along the ridgeline as the sand shifts from pale gold to deep amber in the lowering light. At camp, climb a high dune to watch the sunset. The silence at the top, broken only by wind, is the defining memory of this trip.',
    },
    evening: {
      title: 'Overnight Desert Camp',
      description:
        'Dinner at camp is a communal affair: tagine or couscous cooked over fire, fresh bread, and seasonal fruit. After the meal, your Berber hosts bring out drums and lead music around the fire. The Sahara night sky, free from any light pollution, reveals thousands of stars and a visible Milky Way — even basic phone cameras capture it. Sleep in your tent with the flap open to hear the silence of the dunes. Temperatures drop sharply after midnight, so extra blankets are provided at all camp levels.',
    },
    meals: 'Lunch en route from 60 MAD. Dinner at desert camp (included with camp booking).',
    budgetStay: 'Shared desert camp from 250 MAD per person (basic tents, shared facilities)',
    midStay: 'Private tent at mid-range camp from 600 MAD per person (en-suite bathroom, hot shower)',
    luxuryStay: 'Luxury desert camp from 2,500 MAD per person (heated tent, private terrace, four-course dinner)',
    dayCost: { budget: 'from 600 MAD', mid: 'from 1,500 MAD', luxury: 'from 5,000 MAD' },
  },
  {
    day: '5',
    title: 'Sahara Sunrise & Return via Dades Gorge to Marrakech',
    location: 'Merzouga to Marrakech',
    icon: Sunrise,
    image: '/images/hero-dades-gorge.webp',
    imageAlt: 'Dramatic switchback road winding through Dades Gorge with red canyon walls',
    morning: {
      title: 'Desert Sunrise & Departure',
      description:
        'Wake before dawn — your camp host knocks on tents around 5:30 AM. Climb the nearest high dune and watch the sunrise paint the sand in pinks, corals, and golds. This is the most-photographed moment of the entire route and well worth the lost sleep. After breakfast at camp (flatbread, jam, coffee, and eggs), ride the camels back to Merzouga. Shower and change at a hotel near the dunes, then begin the long drive west toward Marrakech. Alternatively, some travelers opt for a sandboarding session or ATV ride across the dunes before departure (from 200 MAD).',
    },
    afternoon: {
      title: 'Dades Gorge & the Road of a Thousand Kasbahs',
      description:
        'The return route passes through the Dades Valley, sometimes called the Road of a Thousand Kasbahs for the crumbling fortified villages that line the riverbanks. Stop at Dades Gorge for the famous switchback road — a series of hairpin turns carved into sheer red canyon walls. The viewpoint above the switchbacks is a brief scramble from the road and delivers one of the most dramatic landscapes in southern Morocco. Lunch at a roadside restaurant in the gorge costs from 60 MAD for tagine, salad, and bread. The drive continues west through Ouarzazate and over the Tizi n\'Tichka pass back to Marrakech.',
    },
    evening: {
      title: 'Arrive in Marrakech',
      description:
        'Arrive back in Marrakech by 8 to 9 PM depending on stops and traffic. If your flight departs the following morning, check into a riad near the airport or in the Gueliz district. For a final Marrakech meal, head to Cafe des Epices (mains from 80 MAD) in the spice market square or to Pepe Nero (mains from 140 MAD) for Moroccan-Italian fusion in a candlelit riad courtyard. If your flight is late on Day 5, head directly to the airport — Menara is only 15 minutes from the medina by taxi (from 70 MAD).',
    },
    meals: 'Breakfast at desert camp (included). Lunch at Dades Gorge from 60 MAD. Dinner in Marrakech from 80 MAD.',
    budgetStay: 'Hostel near Marrakech airport from 80 MAD per night',
    midStay: 'Riad in Gueliz or medina from 400 MAD per night',
    luxuryStay: 'Boutique riad from 1,500 MAD per night (La Mamounia, Royal Mansour)',
    dayCost: { budget: 'from 500 MAD', mid: 'from 1,200 MAD', luxury: 'from 4,000 MAD' },
  },
];

/* ================================================================
   DATA: BUDGET SUMMARY
   ================================================================ */

const budgetSummary = [
  {
    tier: 'Budget',
    total: 'from 3,200 MAD',
    usd: 'roughly 320 USD',
    details: 'Hostels, street food, shared group desert tour, public transport in cities',
    icon: Banknote,
  },
  {
    tier: 'Mid-Range',
    total: 'from 8,500 MAD',
    usd: 'roughly 850 USD',
    details: 'Traditional riads, restaurant meals, private desert camp with en-suite, shared transport for desert segment',
    icon: Star,
  },
  {
    tier: 'Luxury',
    total: 'from 18,000 MAD',
    usd: 'roughly 1,800 USD',
    details: 'Boutique kasbahs, private driver throughout, luxury desert glamping, fine dining, private guided tours',
    icon: Building,
  },
];

/* ================================================================
   DATA: PACKING LIST
   ================================================================ */

const packingEssentials = [
  { item: 'Layered clothing', note: 'Temperature swings from 35C in Marrakech to near freezing in the desert at night' },
  { item: 'Sturdy walking shoes', note: 'Medina cobblestones are uneven and slippery when wet' },
  { item: 'Sandals or flip-flops', note: 'For desert camp, hammam, and riad courtyards' },
  { item: 'Warm fleece or jacket', note: 'Desert nights and the Tizi n\'Tichka pass are cold year-round' },
  { item: 'Scarf or shawl', note: 'Sun protection, wind shield in the desert, and shoulder cover at religious sites' },
  { item: 'Sunscreen SPF 50+', note: 'UV is intense at altitude and on reflective sand' },
  { item: 'Headlamp or torch', note: 'Desert camps and dimly lit medina alleys after dark' },
  { item: 'Small daypack', note: 'For daily excursions — leave your main luggage at the Marrakech riad during the desert days' },
  { item: 'Reusable water bottle', note: 'Refill at hotels and reduce plastic waste' },
  { item: 'Motion sickness pills', note: 'Mountain passes with tight switchbacks can affect sensitive stomachs' },
];

/* ================================================================
   DATA: ALTERNATIVE ROUTES
   ================================================================ */

const alternativeRoutes = [
  {
    title: 'Add Essaouira Instead of Day 2 Palaces',
    description:
      'If you have already visited Marrakech, swap Day 2 for a day trip to Essaouira (2.5 hours by bus, from 80 MAD each way). Walk the ramparts, eat grilled sardines at the port (from 40 MAD), and explore the whitewashed medina. Return to Marrakech by evening to start the desert segment on Day 3 as planned.',
  },
  {
    title: 'End in Fes Instead of Looping Back',
    description:
      'Instead of returning to Marrakech on Day 5, continue from Merzouga northeast to Fes (7 to 8 hours). This one-way route means you skip Dades Gorge on the return but gain a night in Fes. Book a one-way car rental or arrange a drop-off with your desert tour provider. You will need separate flights into Marrakech and out of Fes.',
  },
  {
    title: 'Extend to 6 Days With a Dades Valley Overnight',
    description:
      'If your schedule allows an extra day, split the return into two stages. Spend Night 5 in the Dades Valley or Todra Gorge area, exploring the canyon at leisure, and drive back to Marrakech on Day 6. This removes the long final drive and gives you time for a hike in Todra Gorge or a visit to the Skoura palm oasis.',
  },
  {
    title: 'Luxury Helicopter Transfer',
    description:
      'High-budget travelers can charter a helicopter from Marrakech to Ouarzazate (from 15,000 MAD per flight, up to 5 passengers), cutting the Atlas crossing from 3.5 hours to 45 minutes. This frees up half a day for a longer visit to Ait Benhaddou or a private lunch at a kasbah.',
  },
];

/* ================================================================
   DATA: TRANSPORT BETWEEN CITIES
   ================================================================ */

const transportInfo = [
  {
    segment: 'Marrakech Airport to Medina',
    options: 'Petit taxi from 70 MAD, airport shuttle from 30 MAD, private transfer from 150 MAD',
    duration: '20 to 30 minutes',
  },
  {
    segment: 'Marrakech to Ait Benhaddou (via Tizi n\'Tichka)',
    options: 'Private driver from 1,200 MAD, shared group tour from 350 MAD per person, CTM bus to Ouarzazate from 90 MAD',
    duration: '3.5 to 4 hours',
  },
  {
    segment: 'Ait Benhaddou / Ouarzazate to Merzouga',
    options: 'Private driver from 1,500 MAD, shared tour (included in 3-day desert package), no direct public bus',
    duration: '6 to 7 hours with stops',
  },
  {
    segment: 'Merzouga to Marrakech (via Dades Gorge)',
    options: 'Private driver from 2,000 MAD, shared return tour from 500 MAD per person, no direct public bus',
    duration: '9 to 10 hours with stops',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function Morocco5DayItinerary() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-marrakech.webp"
          alt="Panoramic view of Marrakech medina rooftops with the Atlas Mountains on the horizon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 container-morocco">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">5-Day Morocco Itinerary</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-3xl leading-tight">
            Morocco 5-Day Itinerary 2026
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white/90 mt-4 max-w-2xl">
            Marrakech, Ait Benhaddou, Sahara Desert &amp; Dades Gorge — a complete loop with daily plans, costs, and accommodation picks
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="container-morocco py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-6" style={{ color: '#A0522D' }}>
            Why 5 Days Works for Morocco
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-4">
            Five days is the sweet spot for travelers who want to experience Morocco beyond Marrakech without the cost and scheduling pressure of a full week. This itinerary covers the country&apos;s headline sights — the Marrakech medina, the Atlas Mountains, the UNESCO kasbah at Ait Benhaddou, a night under the Sahara stars — and brings you back to your starting point through the dramatic Dades Gorge, one of the most scenic drives in North Africa.
          </p>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed mb-4">
            The route is designed as a loop. You fly into and out of Marrakech, which keeps airfare simple and avoids the one-way car rental premium. Days 1 and 2 are self-guided in Marrakech. Days 3 through 5 follow the well-traveled Marrakech-Sahara circuit, best done with a private driver or organized tour since public transport in southern Morocco is limited.
          </p>
          <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed">
            Below is a detailed morning-to-evening plan for each day, along with restaurant recommendations, accommodation suggestions at three price tiers, transport options between cities, a packing list, and alternative routes for travelers who want to customize.
          </p>
        </div>
      </section>

      {/* ── Route Overview Map ── */}
      <section className="container-morocco pb-12">
        <div className="max-w-4xl mx-auto card-moroccan p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#A0522D' }}>
            <Map className="w-7 h-7" style={{ color: '#C4960C' }} />
            Route Overview
          </h2>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {[
              { day: '1-2', place: 'Marrakech', detail: 'Medina, palaces, gardens, hammam' },
              { day: '3', place: 'Ait Benhaddou', detail: 'Atlas crossing, UNESCO kasbah' },
              { day: '3', place: 'Ouarzazate', detail: 'Film studios, overnight stop' },
              { day: '4', place: 'Merzouga', detail: 'Todra Gorge, Sahara camp' },
              { day: '5', place: 'Dades Gorge', detail: 'Switchback road, return drive' },
            ].map((stop, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2"
                  style={{ backgroundColor: '#A0522D' }}
                >
                  D{stop.day}
                </div>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">{stop.place}</p>
                <p className="font-[family-name:var(--font-heading)] text-gray-500 text-sm mt-1">{stop.detail}</p>
                {idx < 4 && (
                  <ArrowRight className="w-5 h-5 mt-2 hidden md:block" style={{ color: '#C4960C' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day-by-Day Itinerary ── */}
      <section className="container-morocco pb-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#A0522D' }}>
          Day-by-Day Itinerary
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {itineraryDays.map((day) => {
            const IconComponent = day.icon;
            return (
              <article key={day.day} className="card-moroccan overflow-hidden">
                {/* Day image */}
                <div className="relative h-56 md:h-72">
                  <img
                    src={day.image}
                    alt={day.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <IconComponent className="w-4 h-4" />
                      <span>{day.location}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-white font-bold">
                      Day {day.day}: {day.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* Morning */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sunrise className="w-5 h-5" style={{ color: '#C4960C' }} />
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 text-lg">
                        Morning: {day.morning.title}
                      </h4>
                    </div>
                    <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed">
                      {day.morning.description}
                    </p>
                  </div>

                  {/* Afternoon */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sun className="w-5 h-5" style={{ color: '#C4960C' }} />
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 text-lg">
                        Afternoon: {day.afternoon.title}
                      </h4>
                    </div>
                    <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed">
                      {day.afternoon.description}
                    </p>
                  </div>

                  {/* Evening */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Moon className="w-5 h-5" style={{ color: '#C4960C' }} />
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 text-lg">
                        Evening: {day.evening.title}
                      </h4>
                    </div>
                    <p className="font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed">
                      {day.evening.description}
                    </p>
                  </div>

                  {/* Meals */}
                  <div className="zellige-border p-4 rounded-lg" style={{ backgroundColor: '#FAF8F5' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Utensils className="w-4 h-4" style={{ color: '#A0522D' }} />
                      <span className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Meals</span>
                    </div>
                    <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">{day.meals}</p>
                  </div>

                  {/* Accommodation tiers */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Banknote className="w-4 h-4 text-green-600" />
                        <span className="font-[family-name:var(--font-heading)] font-semibold text-sm text-gray-900">Budget</span>
                      </div>
                      <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">{day.budgetStay}</p>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4" style={{ color: '#C4960C' }} />
                        <span className="font-[family-name:var(--font-heading)] font-semibold text-sm text-gray-900">Mid-Range</span>
                      </div>
                      <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">{day.midStay}</p>
                    </div>
                    <div className="p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4" style={{ color: '#A0522D' }} />
                        <span className="font-[family-name:var(--font-heading)] font-semibold text-sm text-gray-900">Luxury</span>
                      </div>
                      <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">{day.luxuryStay}</p>
                    </div>
                  </div>

                  {/* Daily cost summary */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                        Budget: <strong>{day.dayCost.budget}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" style={{ color: '#C4960C' }} />
                      <span className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                        Mid-Range: <strong>{day.dayCost.mid}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" style={{ color: '#A0522D' }} />
                      <span className="font-[family-name:var(--font-heading)] text-sm text-gray-600">
                        Luxury: <strong>{day.dayCost.luxury}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Total Budget Summary ── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
            5-Day Trip Cost Summary
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {budgetSummary.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6 text-center">
                  <TierIcon className="w-8 h-8 mx-auto mb-3" style={{ color: '#C4960C' }} />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-1">{tier.tier}</h3>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-1" style={{ color: '#A0522D' }}>
                    {tier.total}
                  </p>
                  <p className="font-[family-name:var(--font-heading)] text-gray-500 text-sm mb-3">({tier.usd})</p>
                  <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">{tier.details}</p>
                </div>
              );
            })}
          </div>
          <p className="font-[family-name:var(--font-heading)] text-center text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
            Costs are per person and exclude international flights. Seasonal pricing can change during peak months (Easter, Christmas, New Year). Prices listed are 2026 estimates.
          </p>
        </div>
      </section>

      {/* ── Transport Between Cities ── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
          <Bus className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
          Transport Between Cities
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {transportInfo.map((t, idx) => (
            <div key={idx} className="card-moroccan p-5 grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 text-sm">{t.segment}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5" style={{ color: '#C4960C' }} />
                  <span className="font-[family-name:var(--font-heading)] text-gray-500 text-xs font-semibold uppercase">Duration</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm">{t.duration}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <DollarSign className="w-3.5 h-3.5" style={{ color: '#C4960C' }} />
                  <span className="font-[family-name:var(--font-heading)] text-gray-500 text-xs font-semibold uppercase">Options</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm">{t.options}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="container-morocco pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
            <Luggage className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
            What to Pack
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {packingEssentials.map((p, idx) => (
              <div key={idx} className="card-moroccan p-4 flex gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#A0522D' }} />
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 text-sm">{p.item}</p>
                  <p className="font-[family-name:var(--font-heading)] text-gray-500 text-sm mt-0.5">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg border-l-4 flex gap-3" style={{ borderColor: '#C4960C', backgroundColor: '#FFFBEB' }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C4960C' }} />
            <p className="font-[family-name:var(--font-heading)] text-gray-700 text-sm">
              <strong>Pro tip:</strong> Leave your main suitcase at your Marrakech riad during the 3-day desert segment. Most riads store luggage for free. Carry only a small backpack with essentials for Days 3 through 5 — you will thank yourself when loading and unloading the vehicle at every stop.
            </p>
          </div>
        </div>
      </section>

      {/* ── Best Time to Go ── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
              <CalendarDays className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
              Best Time for This Route
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-moroccan p-5 text-center">
                <CloudSun className="w-8 h-8 mx-auto mb-3" style={{ color: '#A0522D' }} />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">Peak Season</h3>
                <p className="font-[family-name:var(--font-heading)] font-semibold mb-2" style={{ color: '#C4960C' }}>March to May</p>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">
                  Warm days in Marrakech (22 to 28C), comfortable desert temperatures, wildflowers in the Atlas valleys. This is the most popular window. Book accommodation and desert camps at least two weeks ahead.
                </p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Sunset className="w-8 h-8 mx-auto mb-3" style={{ color: '#A0522D' }} />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">Shoulder Season</h3>
                <p className="font-[family-name:var(--font-heading)] font-semibold mb-2" style={{ color: '#C4960C' }}>Sept to Nov</p>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">
                  Heat fades by late September. October is arguably the single best month for this route: clear skies, moderate temperatures across all stops, thinner crowds, and lower riad prices compared to spring.
                </p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Thermometer className="w-8 h-8 mx-auto mb-3" style={{ color: '#A0522D' }} />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2">Off-Season</h3>
                <p className="font-[family-name:var(--font-heading)] font-semibold mb-2" style={{ color: '#C4960C' }}>June to Aug / Dec to Feb</p>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm">
                  Summer means extreme desert heat (45C+). Winter brings cold desert nights (below 5C) and possible snow on the Tizi n&apos;Tichka pass. Both periods offer the lowest prices and fewest tourists if you can handle the extremes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternative Routes ── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
          <Compass className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
          Alternative Routes &amp; Modifications
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {alternativeRoutes.map((route, idx) => (
            <div key={idx} className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: '#C4960C' }} />
                {route.title}
              </h3>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">{route.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
              <ShieldCheck className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
              Practical Tips for 5 Days in Morocco
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cash & ATMs',
                  icon: Banknote,
                  text: 'Withdraw MAD from ATMs in Marrakech before heading south. ATMs exist in Ouarzazate but are scarce between Tinghir and Merzouga. Desert camps and roadside restaurants are cash-only. Carry at least 2,000 MAD in cash for the 3-day desert segment.',
                },
                {
                  title: 'SIM Card & Connectivity',
                  icon: Info,
                  text: 'Buy a Maroc Telecom or Inwi SIM at the airport (from 30 MAD with 5GB data). Coverage is reliable in cities and along main highways. Expect no signal in the deep Sahara dunes and patchy reception in Todra and Dades gorges.',
                },
                {
                  title: 'Tipping Customs',
                  icon: Users,
                  text: 'Tip your desert driver from 100 MAD per day, camel handlers from 30 MAD, and restaurant staff 10 to 15 percent of the bill. In cafes, leave the small coins from your change. Hammam attendants expect from 20 MAD.',
                },
                {
                  title: 'Health & Water',
                  icon: ShieldCheck,
                  text: 'Drink bottled water only. A 1.5-liter bottle costs from 5 MAD at shops. Stay hydrated in the desert — aim for 3 liters per day. Pack basic medications (paracetamol, anti-diarrheal, antihistamine). The nearest hospitals are in Marrakech, Ouarzazate, and Errachidia.',
                },
                {
                  title: 'Photography Etiquette',
                  icon: Camera,
                  text: 'Ask before photographing locals, especially in rural Berber villages and at the tanneries. Some may ask for a small tip (from 10 MAD). Photographing military installations and police is prohibited. Drone regulations require government permission.',
                },
                {
                  title: 'Bargaining in the Souks',
                  icon: Footprints,
                  text: 'Haggling is a social ritual, not a confrontation. Start at 30 to 40 percent of the asking price and work upward. Walk away if the seller will not budge — they often call you back. Fixed-price shops (marked "prix fixe") exist in Gueliz and some cooperatives along the desert route.',
                },
              ].map((tip, idx) => {
                const TipIcon = tip.icon;
                return (
                  <div key={idx} className="card-moroccan p-5">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <TipIcon className="w-5 h-5 flex-shrink-0" style={{ color: '#C4960C' }} />
                      {tip.title}
                    </h3>
                    <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">{tip.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Day-by-Day Quick Reference ── */}
      <section className="container-morocco pb-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
            <CalendarDays className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
            Daily Highlights at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2" style={{ borderColor: '#A0522D' }}>
                  <th className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-bold text-gray-900">Day</th>
                  <th className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-bold text-gray-900">Location</th>
                  <th className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-bold text-gray-900">Top Sight</th>
                  <th className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-bold text-gray-900">Drive Time</th>
                  <th className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-bold text-gray-900">Budget Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: '1', loc: 'Marrakech', sight: 'Jemaa el-Fnaa & northern souks', drive: 'Airport transfer only', cost: 'from 350 MAD' },
                  { day: '2', loc: 'Marrakech', sight: 'Bahia Palace, Majorelle, hammam', drive: 'Taxis within city', cost: 'from 400 MAD' },
                  { day: '3', loc: 'High Atlas / Ouarzazate', sight: 'Tizi n\'Tichka & Ait Benhaddou', drive: '3.5 to 4 hours', cost: 'from 550 MAD' },
                  { day: '4', loc: 'Merzouga / Erg Chebbi', sight: 'Todra Gorge & Sahara camp', drive: '6 to 7 hours', cost: 'from 600 MAD' },
                  { day: '5', loc: 'Dades Gorge to Marrakech', sight: 'Dades switchbacks & gorge', drive: '9 to 10 hours', cost: 'from 500 MAD' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white/60 transition-colors">
                    <td className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-semibold" style={{ color: '#A0522D' }}>Day {row.day}</td>
                    <td className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm text-gray-700">{row.loc}</td>
                    <td className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm text-gray-700">{row.sight}</td>
                    <td className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm text-gray-600">{row.drive}</td>
                    <td className="font-[family-name:var(--font-heading)] py-3 px-4 text-sm font-semibold text-gray-900">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Booking & Reservation Tips ── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
              <Info className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
              Booking &amp; Reservation Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <BedDouble className="w-5 h-5" style={{ color: '#C4960C' }} />
                  Accommodation
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                  Book your Marrakech riad at least two weeks ahead during March to May and September to November. Desert camps fill up fast on weekends and Moroccan holidays — book one month ahead for a luxury camp. Ask your Marrakech riad to hold luggage for free during the desert days. Many riads also arrange airport transfers and desert tour bookings at competitive rates.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Bus className="w-5 h-5" style={{ color: '#C4960C' }} />
                  Desert Tour Booking
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                  The 3-day desert segment (Days 3 to 5) is easiest to book as a package through your riad, a reputable Marrakech agency, or an online platform. Shared group tours (from 1,200 MAD per person) depart daily from Marrakech. Private tours (from 3,500 MAD for the vehicle) let you set the pace and stop wherever you like. Always confirm what is included: accommodation, meals, camel trek, and return to Marrakech.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Utensils className="w-5 h-5" style={{ color: '#C4960C' }} />
                  Restaurant Reservations
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                  Popular Marrakech restaurants like Nomad, Le Jardin, and Dar Zellij fill up by 8 PM during high season. Book same-day by phone or ask your riad to reserve. Street food stalls and roadside restaurants along the desert route need no reservation. Guesthouse dinners on the desert route are usually ordered in advance so the cook can prepare — confirm with your host by early afternoon.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Map className="w-5 h-5" style={{ color: '#C4960C' }} />
                  Travel Insurance
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-600 text-sm leading-relaxed">
                  Purchase travel insurance that covers medical evacuation before departure. The desert route takes you several hours from the nearest major hospital. Ensure your policy covers adventure activities if you plan to sandboard, quad bike, or ride camels. Keep a digital copy of your policy on your phone and a paper copy in your daypack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
          <MessageCircleQuestion className="w-8 h-8 inline-block mr-3" style={{ color: '#C4960C' }} />
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((faq, idx) => (
            <details key={idx} className="card-moroccan p-5 group">
              <summary className="font-[family-name:var(--font-heading)] font-bold text-gray-900 cursor-pointer list-none flex items-start gap-3">
                <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 transition-transform group-open:rotate-90" style={{ color: '#A0522D' }} />
                {faq.q}
              </summary>
              <p className="font-[family-name:var(--font-heading)] text-gray-600 mt-3 ml-8 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#A0522D' }}>
            Related Morocco Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { href: '/morocco-3-day-itinerary', title: '3-Day Morocco Itinerary', desc: 'Short trip focused on Marrakech with a desert day trip option' },
              { href: '/morocco-7-day-itinerary', title: '7-Day Morocco Itinerary', desc: 'Extended route adding Fes medina and the Middle Atlas' },
              { href: '/morocco-10-day-itinerary', title: '10-Day Morocco Itinerary', desc: 'Full circuit with coastal Essaouira and Chefchaouen' },
              { href: '/budget-travel', title: 'Morocco Budget Travel Guide', desc: 'How to travel Morocco on less than 400 MAD per day' },
              { href: '/morocco-desert-tour', title: 'Sahara Desert Tour Guide', desc: 'Everything about Erg Chebbi camel treks, camps, and costs' },
              { href: '/best-time-visit-morocco', title: 'Best Time to Visit Morocco', desc: 'Month-by-month weather, festivals, and crowd levels' },
              { href: '/marrakech', title: 'Marrakech City Guide', desc: 'Complete guide to the medina, souks, palaces, and riads' },
              { href: '/packing', title: 'Morocco Packing List', desc: 'Season-specific packing advice for every region' },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-moroccan p-5 hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 group-hover:text-[#A0522D] transition-colors mb-1 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: '#C4960C' }} />
                  {guide.title}
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-gray-500 text-sm">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-morocco py-16">
        <div className="max-w-3xl mx-auto text-center card-moroccan p-8 md:p-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#A0522D' }}>
            Ready to Book Your 5-Day Morocco Trip?
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-gray-600 mb-8 max-w-xl mx-auto">
            Browse our curated city guides, compare desert tour options, and plan your Marrakech-to-Sahara route with detailed maps, accommodation reviews, and local tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold font-[family-name:var(--font-heading)] transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#A0522D' }}
            >
              <Map className="w-5 h-5" />
              Browse All Itineraries
            </Link>
            <Link
              href="/morocco-desert-tour"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold font-[family-name:var(--font-heading)] border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: '#A0522D', color: '#A0522D' }}
            >
              <Compass className="w-5 h-5" />
              Desert Tour Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
