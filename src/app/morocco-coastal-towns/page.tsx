import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Waves,
  Wind,
  Clock,
  Info,
  ArrowRight,
  Compass,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  Sun,
  Users,
  Anchor,
  Fish,
  Camera,
  CalendarDays,
  Bus,
  Bed,
  Utensils,
  Globe,
  TrendingUp,
  Sailboat,
  Shell,
  Sunrise,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Coastal Towns 2026 | 12 Best Atlantic & Mediterranean Beach Destinations',
  description:
    'Explore Morocco\'s 12 best coastal towns along the Atlantic and Mediterranean. From Essaouira\'s wind-swept beaches to Al Hoceima\'s hidden coves. Surfing, seafood, accommodation, transport, and seasonal tips for every budget.',
  keywords: [
    'morocco coastal towns',
    'morocco seaside destinations',
    'best beach towns morocco',
    'morocco atlantic coast',
    'morocco mediterranean coast',
    'essaouira beach',
    'taghazout surfing',
    'dakhla kitesurfing',
    'asilah morocco',
    'oualidia lagoon',
    'morocco beach holiday',
    'morocco ocean towns',
    'tangier coast',
    'al hoceima beaches',
    'saïdia morocco',
    'mirleft beach',
    'sidi ifni morocco',
    'el jadida beach',
    'moulay bousselham',
    'morocco surf towns',
    'morocco coastal road trip',
    'morocco seafood guide',
  ],
  openGraph: {
    title: 'Morocco Coastal Towns 2026 | 12 Best Atlantic & Mediterranean Beach Destinations',
    description:
      'The complete guide to Morocco\'s Atlantic and Mediterranean coastal towns. 12 destinations with surfing, seafood, accommodation, and transport details for 2026.',
    url: `${BASE_URL}/morocco-coastal-towns`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Essaouira harbour with blue fishing boats and the historic Portuguese ramparts along the Atlantic coast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Coastal Towns 2026 | Best Atlantic & Mediterranean Beaches',
    description:
      'From Essaouira to Dakhla, Tangier to Al Hoceima — 12 of Morocco\'s best coastal towns with surfing, seafood, stays, and seasonal tips.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-coastal-towns` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-coastal-towns`,
  name: 'Morocco Coastal Towns 2026 | 12 Best Atlantic & Mediterranean Beach Destinations',
  description:
    'Complete guide to Morocco\'s best coastal towns along the Atlantic and Mediterranean coasts. Surfing, seafood, accommodation, transport, and seasonal tips.',
  url: `${BASE_URL}/morocco-coastal-towns`,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-coastal-towns`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Coastal Towns', item: `${BASE_URL}/morocco-coastal-towns` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best coastal town in Morocco for surfing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taghazout is Morocco\'s top surf destination with consistent Atlantic swells year-round. Beginners should visit between April and September for smaller waves, while experienced surfers prefer the powerful winter swells from October to March. Dakhla also offers world-class kitesurfing and flat-water lagoon conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan coast is better — Atlantic or Mediterranean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Atlantic coast suits surfers, wind sport enthusiasts, and travelers who prefer cooler water and dramatic coastlines. The Mediterranean coast offers warmer, calmer water for swimming, shorter seasons (June-September), and a more European feel. The Atlantic has more developed tourism infrastructure while the Mediterranean remains less crowded.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco\'s coastal towns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'June through September is peak beach season across both coasts. The Atlantic coast stays comfortable year-round (Essaouira averages 18-22°C even in summer). Mediterranean towns like Saïdia and Al Hoceima are best from June to September when water temperatures reach 24°C. Surfers target October through March for bigger Atlantic swells.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a seafood meal cost in Moroccan coastal towns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A grilled fish plate at a local port-side restaurant costs from 40-80 MAD. A full seafood platter with prawns, calamari, and fish runs from 120-200 MAD. Upscale restaurants charge from 200-500 MAD for multi-course seafood dinners. The freshest and cheapest seafood is found at Essaouira\'s port grills and Oualidia\'s oyster farms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you swim in the Atlantic Ocean in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but conditions vary by location and season. The Atlantic is colder (16-21°C) and has stronger currents than the Mediterranean. Protected beaches at Oualidia lagoon, El Jadida, and some Essaouira beaches are safer for swimming. Always check local conditions and swim at guarded beaches. The Mediterranean coast offers calmer, warmer water for swimming.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get between Morocco\'s coastal towns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CTM and Supratours buses connect major coastal towns. The train reaches Tangier, Rabat, Casablanca, and El Jadida. Grand taxis cover shorter routes between nearby towns. Renting a car gives the most flexibility for a coastal road trip — the N1 highway follows the entire Atlantic coast. Domestic flights connect Tangier, Essaouira, and Dakhla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dakhla worth the long trip from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dakhla sits 1,200 km south of Marrakech (about 14 hours by road or 1.5 hours by flight). For kitesurfers and windsurfers, it is absolutely worth the journey — the lagoon offers some of the world\'s best flat-water conditions with 300+ wind days per year. The remote Saharan coastline, desert camping, and empty beaches appeal to adventurous travelers seeking something off the beaten path.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: 12 COASTAL TOWNS
   ═══════════════════════════════════════════════════════════════ */

const coastalTowns = [
  {
    name: 'Essaouira',
    coast: 'Atlantic',
    icon: Wind,
    tagline: 'The Wind City of Africa',
    bestSeason: 'April – November (year-round appeal)',
    waterTemp: '17–21°C',
    vibe: 'Artistic, laid-back, bohemian',
    description:
      'Essaouira\'s fortified medina faces the Atlantic behind 18th-century Portuguese ramparts. The trade winds that blow almost daily earned it the name "Wind City" and make it a magnet for kitesurfers and windsurfers. The medina — a UNESCO World Heritage Site since 2001 — holds art galleries, woodworking ateliers using local thuya wood, and a Gnaoua music scene that culminates in the annual Gnaoua World Music Festival each June.',
    activities: ['Kitesurfing and windsurfing on Sidi Kaouki beach', 'Fresh grilled sardines at the port fish stalls', 'Thuya wood workshops in the medina', 'Gnaoua music performances and festival in June', 'Camel rides on the wide sandy beach at sunset'],
    accommodation: 'Riads inside the medina start from 300 MAD/night. Beachfront hotels along Avenue Mohammed V from 600 MAD. Surf camps near Sidi Kaouki from 200 MAD including board rental.',
    transport: 'Supratours bus from Marrakech (2.5 hours, from 80 MAD). Direct flights from Casablanca. Grand taxis from Marrakech from 100 MAD/person.',
    seafood: 'The port fish grills serve the freshest catch — sardines, sea bream, prawns — from 30 MAD per plate. Pick your fish at the stalls, pay by weight, and they grill it on the spot with chermoula sauce.',
  },
  {
    name: 'Asilah',
    coast: 'Atlantic',
    icon: Camera,
    tagline: 'Morocco\'s Open-Air Art Gallery',
    bestSeason: 'May – October',
    waterTemp: '18–22°C',
    vibe: 'Artistic, quiet, whitewashed',
    description:
      'Asilah\'s whitewashed medina walls serve as canvases for murals painted during the annual Asilah Arts Festival each August. Portuguese and Spanish colonial architecture lines narrow streets that open onto Atlantic panoramas. The town draws Moroccan families in summer and artists year-round. Outside high season, Asilah returns to a sleepy fishing village pace that rewards slow exploration.',
    activities: ['Walking the mural-covered medina walls', 'Swimming at Paradise Beach (3 km north)', 'Exploring the 15th-century Portuguese ramparts', 'Browsing art galleries along Rue Zellaqa', 'Day trip to the Roman ruins at Lixus (35 km)'],
    accommodation: 'Guesthouses inside the medina from 250 MAD/night. Hotels along the corniche from 400 MAD. Summer prices spike during festival season — book 2 months ahead for August.',
    transport: 'Train from Tangier (45 minutes, from 25 MAD). CTM bus from Casablanca (5.5 hours). Grand taxi from Tangier from 30 MAD/person.',
    seafood: 'The port restaurants serve grilled sole, shrimp tajine, and fried calamari from 50 MAD. Try the sea urchins sold by vendors at the port wall during winter months.',
  },
  {
    name: 'Oualidia',
    coast: 'Atlantic',
    icon: Shell,
    tagline: 'Morocco\'s Oyster Capital',
    bestSeason: 'June – September (oysters year-round)',
    waterTemp: '18–22°C',
    vibe: 'Relaxed, gourmet, family-friendly',
    description:
      'Oualidia sits on a crescent-shaped lagoon protected from the open Atlantic by a natural sandbar. The calm, shallow water makes it Morocco\'s safest swimming beach and a favorite for families with young children. Oyster farms line the lagoon — introduced by the French in the 1950s, they now produce over 200 tonnes annually. The royal family maintains a summer palace here, adding to the town\'s quiet prestige.',
    activities: ['Oyster tasting at Parc No. 7 oyster farm', 'Kayaking and stand-up paddleboarding on the lagoon', 'Swimming in the protected lagoon waters', 'Birdwatching — flamingos, herons, and egrets in winter', 'Surfing at the beach break outside the lagoon'],
    accommodation: 'La Sultana Oualidia (luxury, from 2,500 MAD/night). L\'Hippocampe guesthouse from 500 MAD. Simple hotels in town from 250 MAD.',
    transport: 'Grand taxi from El Jadida (1.5 hours, from 40 MAD/person). CTM bus from Casablanca stops in El Jadida. No direct train — closest station is El Jadida.',
    seafood: 'A dozen fresh oysters cost from 60 MAD at the lagoon-side farms. Oyster Parc No. 7 serves platters with wine from 120 MAD. La Sultana offers a full seafood dinner from 400 MAD with lagoon views.',
  },
  {
    name: 'Taghazout',
    coast: 'Atlantic',
    icon: Waves,
    tagline: 'Morocco\'s Surf Capital',
    bestSeason: 'September – April (surfing), June – August (swimming)',
    waterTemp: '17–21°C',
    vibe: 'Surf culture, backpacker, energetic',
    description:
      'Taghazout transformed from a small fishing village into North Africa\'s premier surf destination over the past two decades. Anchor Point, the right-hand point break at the north end of town, produces rides of 300+ meters on good winter swells. Hash Point, Killers, and Panoramas offer waves for all levels within a 5 km stretch. The village itself runs on surf rhythms — yoga at dawn, surf sessions, tagine dinners, and bonfires at dusk.',
    activities: ['Surfing at Anchor Point, Hash Point, and Panoramas', 'Yoga and surf retreat packages (week-long)', 'Sunset hikes to Tamraght and Banana Point', 'Argan oil cooperative visits in the hills above town', 'Skateboarding at the Taghazout skatepark'],
    accommodation: 'Surf hostels with shared rooms from 100 MAD/night. Surf camp packages (7 nights, lessons, board) from 3,500 MAD. Boutique hotels from 500 MAD. The new Hyatt Taghazout Bay resort from 1,800 MAD.',
    transport: 'Grand taxi from Agadir (20 minutes, from 15 MAD/person). Bus from Agadir centre from 10 MAD. Agadir airport receives international flights. Supratours from Marrakech to Agadir (3.5 hours).',
    seafood: 'Grilled fish at the village restaurants from 40 MAD. The harbour at Taghazout serves fresh catches daily. For upscale dining, the restaurants at Taghazout Bay resort from 200 MAD.',
  },
  {
    name: 'Dakhla',
    coast: 'Atlantic (Saharan)',
    icon: Sailboat,
    tagline: 'The Sahara Meets the Sea',
    bestSeason: 'March – November (wind), Year-round (mild)',
    waterTemp: '18–23°C',
    vibe: 'Remote, adventurous, wind sports paradise',
    description:
      'Dakhla occupies a narrow peninsula jutting 40 km into the Atlantic, creating a massive lagoon with flat water, constant wind, and zero crowds. Over 300 days of usable wind per year make it one of the world\'s top three kitesurfing destinations alongside Tarifa and Cabarete. The town sits in the Saharan south — desert dunes roll down to turquoise water, flamingos stalk the shallows, and the night sky blazes without light pollution.',
    activities: ['Kitesurfing and windsurfing on the lagoon', 'Desert camping on white sand dunes', 'Flamingo spotting in the lagoon shallows', 'Fishing excursions for sea bass and grouper', 'Stargazing in zero light pollution'],
    accommodation: 'Kitesurf camps on the lagoon from 400 MAD/night (full board). Dakhla Attitude eco-lodge from 1,200 MAD. Hotels in Dakhla town from 300 MAD. Desert bivouac camps from 500 MAD.',
    transport: 'Flights from Casablanca (1.5 hours, from 800 MAD one-way). CTM bus from Agadir (18 hours). Driving from Marrakech takes 14+ hours on the N1. Most kite camps arrange airport transfers.',
    seafood: 'Dakhla\'s waters hold white grouper, sea bass, octopus, and lobster. Port restaurants serve grilled fish from 40 MAD. Lobster dinners from 150 MAD — among the cheapest in the world. The oyster farm on the lagoon serves platters from 80 MAD.',
  },
  {
    name: 'Sidi Ifni',
    coast: 'Atlantic',
    icon: Sunrise,
    tagline: 'Art Deco on the Atlantic Edge',
    bestSeason: 'March – November',
    waterTemp: '17–21°C',
    vibe: 'Retro, off-beat, undiscovered',
    description:
      'Spain held Sidi Ifni until 1969, and the Art Deco architecture from that era still defines the town. The old Spanish consulate, the airstrip-turned-plaza, and pastel-colored buildings give Sidi Ifni a time-capsule quality unlike anywhere else in Morocco. The town sits atop cliffs overlooking the Atlantic, and Legzira Beach — 10 km south — features dramatic red stone arches carved by the ocean.',
    activities: ['Exploring Spanish Art Deco architecture in town', 'Legzira Beach and its natural red stone arches', 'Surfing at the beach breaks south of town', 'Sunday souk — one of the region\'s largest', 'Hiking the coastal cliffs to Mirleft (30 km)'],
    accommodation: 'Hotel Bellevue (restored Art Deco, from 300 MAD). Simple guesthouses from 150 MAD. Camping near Legzira Beach from 50 MAD.',
    transport: 'Grand taxi from Tiznit (1 hour, from 25 MAD/person). CTM bus from Agadir (4 hours). No train service. The N1 highway passes through Tiznit.',
    seafood: 'The town market sells fresh fish daily from 20 MAD/kg. Small restaurants near the port serve grilled sardines and calamari from 35 MAD. Try the local sea snail stew — a Sidi Ifni specialty.',
  },
  {
    name: 'Moulay Bousselham',
    coast: 'Atlantic',
    icon: Fish,
    tagline: 'Birdwatching on the Atlantic Lagoon',
    bestSeason: 'November – March (birds), June – September (beach)',
    waterTemp: '17–22°C',
    vibe: 'Rural, authentic, wildlife-focused',
    description:
      'Moulay Bousselham centres on the Merja Zerga lagoon, a RAMSAR-designated wetland that hosts over 100 bird species including flamingos, spoonbills, ospreys, and the rare marbled teal. During winter migration, thousands of birds descend on the lagoon, making it Morocco\'s premier birdwatching site. The town itself remains deeply traditional — a fishing and farming community where tourism infrastructure is basic but the welcome is genuine.',
    activities: ['Boat tours through Merja Zerga lagoon for birdwatching', 'Flamingo and spoonbill sightings (peak: December–February)', 'Swimming at the beach where the lagoon meets the ocean', 'Visiting the shrine of Moulay Bousselham', 'Freshwater fishing in the lagoon channels'],
    accommodation: 'Basic guesthouses from 150 MAD/night. Hotel Le Lagon from 350 MAD with lagoon views. Wild camping on the dunes is tolerated but bring supplies.',
    transport: 'Grand taxi from Souk el Arbaa (30 minutes, from 15 MAD/person). CTM bus from Rabat stops at Souk el Arbaa. No direct train — closest station Kenitra (1.5 hours by taxi).',
    seafood: 'Freshwater and saltwater fish from the lagoon. Small restaurants on the main street serve fried sole and shad from 30 MAD. Shrimp pulled from the lagoon in season from 50 MAD/plate.',
  },
  {
    name: 'El Jadida',
    coast: 'Atlantic',
    icon: Anchor,
    tagline: 'The Portuguese Cistern City',
    bestSeason: 'May – October',
    waterTemp: '18–22°C',
    vibe: 'Historic, family-oriented, accessible',
    description:
      'El Jadida\'s Cité Portugaise — a 16th-century fortified trading post — earned UNESCO World Heritage status in 2004. The underground Portuguese Cistern, with its columns reflected in ankle-deep water, appeared in Orson Welles\' Othello and remains one of Morocco\'s most photographed interiors. Beyond history, El Jadida functions as Casablanca\'s beach escape. The wide sandy beach fills with Moroccan families every summer weekend.',
    activities: ['Exploring the UNESCO Portuguese Cistern', 'Walking the ramparts of the Cité Portugaise', 'Swimming at the town beach and Sidi Bouzid beach', 'Day trip to Azemmour (15 km, riverside medina)', 'Golf at Mazagan Beach Resort (18 holes, Gary Player design)'],
    accommodation: 'Hotels inside the medina from 300 MAD/night. Mazagan Beach Resort (luxury, from 2,000 MAD). Beach hotels along the corniche from 500 MAD.',
    transport: 'Train from Casablanca (1.5 hours, from 45 MAD). CTM bus from Marrakech (4 hours). Grand taxi from Casablanca from 50 MAD/person.',
    seafood: 'The port area serves grilled fish from 40 MAD. Restaurant Le Tit at the port is locally famous for its fish tajine from 60 MAD. The Mazagan resort has upscale seafood dining from 300 MAD.',
  },
  {
    name: 'Tangier',
    coast: 'Atlantic / Mediterranean',
    icon: Globe,
    tagline: 'Where Two Seas Collide',
    bestSeason: 'May – October',
    waterTemp: '18–24°C',
    vibe: 'Cosmopolitan, cultural, energetic',
    description:
      'Tangier sits at the exact point where the Atlantic meets the Mediterranean, with Cap Spartel lighthouse marking the junction. A decades-long renovation turned the city from faded to magnetic — the new TGV high-speed rail link to Casablanca (2 hours 10 minutes), a rebuilt port, and a thriving contemporary art scene in the Kasbah transformed Tangier into Morocco\'s most dynamic city. The medina once hosted Paul Bowles, William Burroughs, and the Rolling Stones. Today it draws a new generation of creatives.',
    activities: ['Cap Spartel — standing where two oceans meet', 'Hercules Cave and its Africa-shaped opening', 'Kasbah Museum of Mediterranean Cultures', 'Swimming at Achakar and municipal beaches', 'Day trip to Chefchaouen (2 hours by road)'],
    accommodation: 'Medina guesthouses from 350 MAD/night. Hotel Continental (historic, from 500 MAD). Grand Hotel Villa de France from 900 MAD. Hilton Tangier from 1,200 MAD.',
    transport: 'TGV Al Boraq from Casablanca (2 hrs 10 min, from 149 MAD). Ferries from Tarifa, Spain (35 min, from 300 MAD). Tangier Ibn Battuta Airport with international flights. CTM buses from all major cities.',
    seafood: 'The fish market near the port has freshly grilled seafood from 40 MAD. Saveur de Poisson in the medina serves a fixed-menu fish feast (from 120 MAD). The marina restaurants offer refined platters from 200 MAD.',
  },
  {
    name: 'Al Hoceima',
    coast: 'Mediterranean',
    icon: Sun,
    tagline: 'The Hidden Rif Riviera',
    bestSeason: 'June – September',
    waterTemp: '20–25°C',
    vibe: 'Secluded, Riffian culture, pristine',
    description:
      'Al Hoceima occupies a crescent bay on the Mediterranean backed by the Rif Mountains. The water here is among the clearest in Morocco — turquoise, warm, and calm enough for snorkelling without a wetsuit in summer. The Al Hoceima National Park, a marine-terrestrial protected area, shelters ospreys, Barbary macaques, and Mediterranean monk seals. Tourism infrastructure remains limited, which keeps the beaches uncrowded and prices low.',
    activities: ['Swimming and snorkelling at Quemado Beach', 'Boat trips to the Peñón de Alhucemas island', 'Al Hoceima National Park hiking and wildlife', 'Bades and Cala Iris fishing villages by road', 'Exploring Riffian Amazigh culture and cuisine'],
    accommodation: 'Hotel Mohammed V (central, from 400 MAD). Guesthouses from 200 MAD. Camping near Cala Iris from 50 MAD. Summer bookings fill fast — reserve by April.',
    transport: 'Flights from Casablanca (1 hour, from 600 MAD one-way). CTM bus from Fes (7 hours). Grand taxi from Nador (2 hours). The mountain roads from Chefchaouen take 5 hours but offer spectacular views.',
    seafood: 'Mediterranean catch — red mullet, sea bream, octopus. Port restaurants serve grilled fish from 35 MAD. Cala Iris village has the freshest and cheapest seafood on the Moroccan Mediterranean — full plates from 30 MAD.',
  },
  {
    name: 'Saïdia',
    coast: 'Mediterranean',
    icon: Star,
    tagline: 'Morocco\'s Blue Pearl Beach Resort',
    bestSeason: 'June – September',
    waterTemp: '21–25°C',
    vibe: 'Resort-style, family-friendly, modern',
    description:
      'Saïdia boasts 14 km of uninterrupted sandy beach along the Mediterranean — the longest in Morocco. The Moroccan government invested heavily in the Saïdia Mediterrania resort complex, adding a marina, golf courses, and international hotel brands. The warm, calm Mediterranean water and shallow entry make it ideal for families. Just 60 km from the Algerian border, Saïdia has a distinct eastern Moroccan character with Algerian culinary influences.',
    activities: ['Swimming along 14 km of sandy Mediterranean beach', 'Marina Saïdia — restaurants, shops, and boat tours', 'Two 18-hole golf courses (designed by Cabell Robinson)', 'Moulouya River estuary birdwatching (RAMSAR site)', 'Water sports — jet ski, parasailing, banana boat'],
    accommodation: 'Iberhostar Saïdia (all-inclusive, from 1,500 MAD/night). Barceló Saïdia from 1,200 MAD. Apartments in the resort complex from 600 MAD. Local guesthouses in old Saïdia from 200 MAD.',
    transport: 'Flights to Oujda airport (60 km, then taxi from 200 MAD). Train to Oujda from Fes or Casablanca. CTM bus from Oujda (1 hour). Grand taxi from Oujda from 30 MAD/person.',
    seafood: 'Marina restaurants serve grilled Mediterranean fish from 70 MAD. The old town has cheaper options — fried fish sandwiches from 15 MAD. Saïdia\'s specialty is charmoula-marinated bream.',
  },
  {
    name: 'Mirleft',
    coast: 'Atlantic',
    icon: Compass,
    tagline: 'Secret Coves Below the Cliffs',
    bestSeason: 'March – November',
    waterTemp: '17–21°C',
    vibe: 'Bohemian, unspoiled, surfer hideaway',
    description:
      'Mirleft sits on cliffs above a coastline carved into arches, coves, and hidden beaches accessible by scrambling down rocky paths. Each beach has its own character — Plage Imin Tourga for swimming, Plage Aftas for surfing, and Marabout Beach with its clifftop saint\'s tomb. The town itself is a one-street affair with a growing number of guesthouses, yoga retreats, and surf lodges run by Moroccan and European expats who came for a week and never left.',
    activities: ['Beach-hopping between five distinct coves', 'Surfing at Plage Aftas and the point breaks south', 'Yoga retreats and wellness weeks', 'Hiking the coastal path to Sidi Ifni (30 km)', 'Paragliding from the clifftops above town'],
    accommodation: 'Surf lodges from 150 MAD/night. Guesthouse Aftas from 250 MAD with ocean views. Hotel Atlas from 300 MAD. Yoga retreat packages from 4,000 MAD/week all-inclusive.',
    transport: 'Grand taxi from Tiznit (40 minutes, from 20 MAD/person). From Agadir, take a taxi to Tiznit then change. No bus service directly — Tiznit is the hub.',
    seafood: 'The few restaurants in town serve grilled catch of the day from 40 MAD. For the best seafood, take a taxi to Sidi Ifni port (30 km) where prices start from 30 MAD. Local women sell sea urchins on the beach in winter.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best coastal town in Morocco for surfing?',
    answer:
      'Taghazout is Morocco\'s top surf destination with consistent Atlantic swells year-round. Beginners should visit between April and September for smaller waves, while experienced surfers prefer the powerful winter swells from October to March. Dakhla also offers world-class kitesurfing and flat-water lagoon conditions.',
  },
  {
    question: 'Which Moroccan coast is better — Atlantic or Mediterranean?',
    answer:
      'The Atlantic coast suits surfers, wind sport enthusiasts, and travelers who prefer cooler water and dramatic coastlines. The Mediterranean coast offers warmer, calmer water for swimming, shorter seasons (June-September), and a more European feel. The Atlantic has more developed tourism infrastructure while the Mediterranean remains less crowded.',
  },
  {
    question: 'When is the best time to visit Morocco\'s coastal towns?',
    answer:
      'June through September is peak beach season across both coasts. The Atlantic coast stays comfortable year-round (Essaouira averages 18-22°C even in summer). Mediterranean towns like Saïdia and Al Hoceima are best from June to September when water temperatures reach 24°C. Surfers target October through March for bigger Atlantic swells.',
  },
  {
    question: 'How much does a seafood meal cost in Moroccan coastal towns?',
    answer:
      'A grilled fish plate at a local port-side restaurant costs from 40-80 MAD. A full seafood platter with prawns, calamari, and fish runs from 120-200 MAD. Upscale restaurants charge from 200-500 MAD for multi-course seafood dinners. The freshest and cheapest seafood is found at Essaouira\'s port grills and Oualidia\'s oyster farms.',
  },
  {
    question: 'Can you swim in the Atlantic Ocean in Morocco?',
    answer:
      'Yes, but conditions vary by location and season. The Atlantic is colder (16-21°C) and has stronger currents than the Mediterranean. Protected beaches at Oualidia lagoon, El Jadida, and some Essaouira beaches are safer for swimming. Always check local conditions and swim at guarded beaches. The Mediterranean coast offers calmer, warmer water for swimming.',
  },
  {
    question: 'How do you get between Morocco\'s coastal towns?',
    answer:
      'CTM and Supratours buses connect major coastal towns. The train reaches Tangier, Rabat, Casablanca, and El Jadida. Grand taxis cover shorter routes between nearby towns. Renting a car gives the most flexibility for a coastal road trip — the N1 highway follows the entire Atlantic coast. Domestic flights connect Tangier, Essaouira, and Dakhla.',
  },
  {
    question: 'Is Dakhla worth the long trip from Marrakech?',
    answer:
      'Dakhla sits 1,200 km south of Marrakech (about 14 hours by road or 1.5 hours by flight). For kitesurfers and windsurfers, it is absolutely worth the journey — the lagoon offers some of the world\'s best flat-water conditions with 300+ wind days per year. The remote Saharan coastline, desert camping, and empty beaches appeal to adventurous travelers seeking something off the beaten path.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   COAST COMPARISON DATA
   ═══════════════════════════════════════════════════════════════ */

const coastComparison = [
  { feature: 'Water Temperature', atlantic: '16–22°C', mediterranean: '18–25°C' },
  { feature: 'Best Swimming Season', atlantic: 'June – September', mediterranean: 'June – September' },
  { feature: 'Wave Conditions', atlantic: 'Strong swells, surfing focus', mediterranean: 'Calm, swimming focus' },
  { feature: 'Wind', atlantic: 'Strong & consistent', mediterranean: 'Light to moderate' },
  { feature: 'Coastline Length', atlantic: '2,945 km', mediterranean: '512 km' },
  { feature: 'Tourism Development', atlantic: 'Well-developed', mediterranean: 'Emerging' },
  { feature: 'Main Water Sports', atlantic: 'Surfing, kitesurfing', mediterranean: 'Swimming, jet ski, diving' },
  { feature: 'Seafood Prices', atlantic: 'From 30 MAD/plate', mediterranean: 'From 35 MAD/plate' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCoastalTownsPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-essaouira.webp"
          alt="Essaouira harbour with blue fishing boats and the Atlantic Ocean beyond the Portuguese ramparts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 drop-shadow-lg">
            Morocco&apos;s Best Coastal Towns
          </h1>
          <p className="text-lg md:text-xl font-[family-name:var(--font-heading)] mb-6 max-w-2xl mx-auto opacity-95">
            Atlantic &amp; Mediterranean — 12 seaside destinations for surfing, seafood, and sand
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Waves className="w-4 h-4" /> 3,457 km of coastline
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 12 towns covered
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Updated March 2026
            </span>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#A0522D]/10">
        <div className="container-morocco py-3 flex items-center gap-2 text-sm text-[#A0522D]/70">
          <Link href="/" className="flex items-center gap-1 hover:text-[#A0522D] transition-colors">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#A0522D] font-medium">Morocco Coastal Towns</span>
        </div>
      </nav>

      {/* ── INTRODUCTION ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="zellige-border p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-6">
              Two Coasts, Twelve Towns, One Extraordinary Shoreline
            </h2>
            <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
              <p>
                Morocco controls 3,457 km of coastline split between two very different bodies of water.
                The Atlantic side — 2,945 km from Tangier down to the Saharan south — delivers powerful
                swells, constant wind, and some of Africa&apos;s best surf breaks. The Mediterranean
                stretch — 512 km from Tangier east to the Algerian border — offers warmer, calmer water,
                hidden coves backed by the Rif Mountains, and a swimming season that peaks from June
                through September.
              </p>
              <p>
                This guide covers 12 coastal towns that represent the full range of Morocco&apos;s seaside
                character. Eight sit on the Atlantic, one straddles both coasts (Tangier), and three line
                the Mediterranean. Each entry includes water sports, seafood recommendations, accommodation
                at multiple price points, transport options, and the best months to visit.
              </p>
              <p>
                Prices listed reflect 2026 rates and may shift during peak summer months (July–August) and
                national holidays. Seasonal pricing can change — always confirm directly with accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COAST COMPARISON TABLE ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-3 text-center">
            Atlantic vs. Mediterranean — At a Glance
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] text-center mb-8 max-w-2xl mx-auto">
            Two coasts, two personalities. This comparison helps you decide which shoreline matches your trip.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#A0522D] text-white">
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-semibold rounded-tl-lg">Feature</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-semibold">
                    <span className="flex items-center gap-2"><Waves className="w-4 h-4" /> Atlantic</span>
                  </th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-semibold rounded-tr-lg">
                    <span className="flex items-center gap-2"><Sun className="w-4 h-4" /> Mediterranean</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {coastComparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                    <td className="p-3 font-[family-name:var(--font-heading)] font-medium text-gray-800">{row.feature}</td>
                    <td className="p-3 font-[family-name:var(--font-heading)] text-gray-600">{row.atlantic}</td>
                    <td className="p-3 font-[family-name:var(--font-heading)] text-gray-600">{row.mediterranean}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── QUICK NAVIGATION ── */}
      <section className="bg-[#FAF8F5] py-10">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-5 text-center">
            Jump to a Town
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {coastalTowns.map((town) => {
              const Icon = town.icon;
              return (
                <a
                  key={town.name}
                  href={`#${town.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="card-moroccan p-3 flex items-center gap-2 hover:bg-[#A0522D]/5 transition-colors group"
                >
                  <Icon className="w-4 h-4 text-[#A0522D] group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-[family-name:var(--font-heading)] font-medium text-gray-800 text-sm">{town.name}</span>
                    <span className="block text-xs text-gray-500">{town.coast}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ATLANTIC COAST HEADER ── */}
      <section className="bg-[#A0522D] py-8">
        <div className="container-morocco text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Waves className="w-6 h-6" />
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]">
              Atlantic Coast Towns
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] opacity-90 max-w-xl mx-auto">
            2,945 km of surf breaks, wind-swept beaches, fishing ports, and dramatic cliffs
          </p>
        </div>
      </section>

      {/* ── ATLANTIC TOWNS ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-5xl space-y-12">
          {coastalTowns
            .filter((t) => t.coast !== 'Mediterranean')
            .map((town, idx) => {
              const Icon = town.icon;
              return (
                <article
                  key={town.name}
                  id={town.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="card-moroccan p-6 md:p-8 scroll-mt-20"
                >
                  {/* Town header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="bg-[#A0522D]/10 p-3 rounded-xl flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#A0522D]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-[#A0522D]">
                          {idx + 1}. {town.name}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full font-[family-name:var(--font-heading)]">
                          {town.coast}
                        </span>
                      </div>
                      <p className="text-[#C4960C] font-[family-name:var(--font-heading)] font-medium italic mt-1">
                        {town.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    <div className="bg-[#FAF8F5] p-3 rounded-lg flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-[#A0522D]" />
                      <div>
                        <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Best Season</span>
                        <p className="text-sm font-medium font-[family-name:var(--font-heading)] text-gray-800">{town.bestSeason}</p>
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-lg flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-[#A0522D]" />
                      <div>
                        <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Water Temp</span>
                        <p className="text-sm font-medium font-[family-name:var(--font-heading)] text-gray-800">{town.waterTemp}</p>
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-lg flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#A0522D]" />
                      <div>
                        <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Vibe</span>
                        <p className="text-sm font-medium font-[family-name:var(--font-heading)] text-gray-800">{town.vibe}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-5">
                    {town.description}
                  </p>

                  {/* Activities */}
                  <div className="mb-5">
                    <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#A0522D]" /> Top Activities
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {town.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                          <ArrowRight className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info grid */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2 text-sm">
                        <Bed className="w-4 h-4 text-[#A0522D]" /> Accommodation
                      </h4>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{town.accommodation}</p>
                    </div>
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2 text-sm">
                        <Bus className="w-4 h-4 text-[#A0522D]" /> Getting There
                      </h4>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{town.transport}</p>
                    </div>
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2 text-sm">
                        <Utensils className="w-4 h-4 text-[#A0522D]" /> Seafood
                      </h4>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{town.seafood}</p>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>

      {/* ── MEDITERRANEAN COAST HEADER ── */}
      <section className="bg-[#1e6091] py-8">
        <div className="container-morocco text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sun className="w-6 h-6" />
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)]">
              Mediterranean Coast Towns
            </h2>
          </div>
          <p className="font-[family-name:var(--font-heading)] opacity-90 max-w-xl mx-auto">
            512 km of warm, calm water, hidden coves, and the Rif Mountain backdrop
          </p>
        </div>
      </section>

      {/* ── MEDITERRANEAN TOWNS ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-5xl space-y-12">
          {coastalTowns
            .filter((t) => t.coast === 'Mediterranean')
            .map((town, idx) => {
              const Icon = town.icon;
              return (
                <article
                  key={town.name}
                  id={town.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="card-moroccan p-6 md:p-8 scroll-mt-20"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="bg-[#1e6091]/10 p-3 rounded-xl flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#1e6091]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)] text-[#1e6091]">
                          {idx + 10}. {town.name}
                        </h3>
                        <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full font-[family-name:var(--font-heading)]">
                          {town.coast}
                        </span>
                      </div>
                      <p className="text-[#C4960C] font-[family-name:var(--font-heading)] font-medium italic mt-1">
                        {town.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    <div className="bg-[#FAF8F5] p-3 rounded-lg flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-[#1e6091]" />
                      <div>
                        <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Best Season</span>
                        <p className="text-sm font-medium font-[family-name:var(--font-heading)] text-gray-800">{town.bestSeason}</p>
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-lg flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-[#1e6091]" />
                      <div>
                        <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Water Temp</span>
                        <p className="text-sm font-medium font-[family-name:var(--font-heading)] text-gray-800">{town.waterTemp}</p>
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] p-3 rounded-lg flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#1e6091]" />
                      <div>
                        <span className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Vibe</span>
                        <p className="text-sm font-medium font-[family-name:var(--font-heading)] text-gray-800">{town.vibe}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-5">
                    {town.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1e6091]" /> Top Activities
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {town.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                          <ArrowRight className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2 text-sm">
                        <Bed className="w-4 h-4 text-[#1e6091]" /> Accommodation
                      </h4>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{town.accommodation}</p>
                    </div>
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2 text-sm">
                        <Bus className="w-4 h-4 text-[#1e6091]" /> Getting There
                      </h4>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{town.transport}</p>
                    </div>
                    <div className="bg-[#FAF8F5] p-4 rounded-lg">
                      <h4 className="font-bold font-[family-name:var(--font-heading)] text-gray-800 mb-2 flex items-center gap-2 text-sm">
                        <Utensils className="w-4 h-4 text-[#1e6091]" /> Seafood
                      </h4>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{town.seafood}</p>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>

      {/* ── COASTAL ROAD TRIP PLANNER ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-3 text-center">
            Coastal Road Trip Routes
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] text-center mb-8 max-w-2xl mx-auto">
            Three itineraries for exploring Morocco&apos;s coastline by car, covering both coasts and the deep south.
          </p>

          <div className="space-y-6">
            {/* Route 1 */}
            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-display)] text-[#A0522D] text-lg mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Northern Loop — 5 Days
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                Tangier &rarr; Asilah (45 min) &rarr; Moulay Bousselham (2.5 hrs) &rarr; El Jadida (3.5 hrs) &rarr; Oualidia (1.5 hrs) &rarr; Essaouira (2.5 hrs)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Art & culture</span>
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Birdwatching</span>
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">UNESCO sites</span>
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Oysters</span>
              </div>
            </div>

            {/* Route 2 */}
            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-display)] text-[#A0522D] text-lg mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Surf Coast — 7 Days
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                Essaouira (2 days) &rarr; Taghazout (2 days) &rarr; Mirleft (1 day) &rarr; Sidi Ifni (1 day) &rarr; Legzira Beach &rarr; Agadir
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Surfing</span>
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Yoga</span>
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Art Deco</span>
                <span className="bg-[#A0522D]/10 text-[#A0522D] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Hidden beaches</span>
              </div>
            </div>

            {/* Route 3 */}
            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-display)] text-[#A0522D] text-lg mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Mediterranean Explorer — 4 Days
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                Tangier &rarr; Chefchaouen (day trip) &rarr; Al Hoceima (5 hrs) &rarr; Nador &rarr; Saïdia (2.5 hrs)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1e6091]/10 text-[#1e6091] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Swimming</span>
                <span className="bg-[#1e6091]/10 text-[#1e6091] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Rif Mountains</span>
                <span className="bg-[#1e6091]/10 text-[#1e6091] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Amazigh culture</span>
                <span className="bg-[#1e6091]/10 text-[#1e6091] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-heading)]">Resort beaches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WATER SPORTS GUIDE ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-3 text-center">
            Water Sports by Discipline
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] text-center mb-8 max-w-2xl mx-auto">
            Where to go for each sport, what to expect, and how much it costs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Waves className="w-5 h-5" /> Surfing
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Best spots:</strong> Taghazout (Anchor Point, Hash Point), Essaouira (Sidi Kaouki), Mirleft (Plage Aftas)
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Peak season:</strong> October – March for experienced surfers; April – September for beginners
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <strong>Cost:</strong> Board rental from 100 MAD/day. Lessons from 300 MAD for 2 hours. Week-long camp from 3,500 MAD.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Wind className="w-5 h-5" /> Kitesurfing &amp; Windsurfing
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Best spots:</strong> Dakhla lagoon, Essaouira, Moulay Bousselham
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Peak season:</strong> March – November (Dakhla has wind year-round)
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <strong>Cost:</strong> Kite rental from 500 MAD/day. Lessons from 1,500 MAD for 3-day course. Dakhla camp packages from 5,000 MAD/week.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Anchor className="w-5 h-5" /> Stand-Up Paddleboarding
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Best spots:</strong> Oualidia lagoon (flat water), Dakhla lagoon, Taghazout bay (calm mornings)
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Peak season:</strong> April – October when conditions are calmest
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <strong>Cost:</strong> SUP rental from 150 MAD/hour. Guided tours from 300 MAD including equipment.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5" /> Snorkelling &amp; Diving
              </h3>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Best spots:</strong> Al Hoceima (Mediterranean clarity), Saïdia, Cap Spartel (Tangier)
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                <strong>Peak season:</strong> June – September when visibility exceeds 15 meters
              </p>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <strong>Cost:</strong> Snorkel gear rental from 50 MAD/day. Guided dive from 500 MAD including equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEAFOOD GUIDE ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-3 text-center">
            Coastal Seafood Guide
          </h2>
          <p className="text-gray-600 font-[family-name:var(--font-heading)] text-center mb-8 max-w-2xl mx-auto">
            What to eat, where to find it, and how much to pay along both coasts.
          </p>

          <div className="zellige-border p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                  <Fish className="w-5 h-5" /> Must-Try Dishes
                </h3>
                <ul className="space-y-2">
                  {[
                    { dish: 'Grilled sardines with chermoula', where: 'Essaouira port', price: 'from 30 MAD' },
                    { dish: 'Oualidia oysters (Parc No. 7)', where: 'Oualidia lagoon', price: 'from 60 MAD/dozen' },
                    { dish: 'Charmoula-marinated sea bream', where: 'Saïdia, El Jadida', price: 'from 50 MAD' },
                    { dish: 'Lobster dinner', where: 'Dakhla port', price: 'from 150 MAD' },
                    { dish: 'Shrimp tajine', where: 'Asilah, Tangier', price: 'from 70 MAD' },
                    { dish: 'Sea urchin (winter only)', where: 'Asilah, Mirleft', price: 'from 20 MAD/plate' },
                  ].map((item) => (
                    <li key={item.dish} className="flex items-start gap-2 text-sm font-[family-name:var(--font-heading)]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-800">{item.dish}</span>
                        <span className="text-gray-500"> — {item.where}, {item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" /> Seafood Tips
                </h3>
                <ul className="space-y-2">
                  {[
                    'Buy fish by weight at port stalls — they grill it on the spot with bread and salad included.',
                    'Peak freshness is morning. Port stalls sell out by early afternoon in small towns.',
                    'Avoid restaurants far from the port — the closer to the boats, the fresher the catch.',
                    'Sardine season peaks June through October. Prices drop and quality rises.',
                    'Tipping from 5-10 MAD is standard at port grill stalls.',
                    'Oualidia oysters are safe year-round — the farm monitors water quality daily.',
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICAL INFO ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-8 text-center">
            Practical Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5" /> Budget Breakdown
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <li><strong>Budget traveler:</strong> from 250 MAD/day (hostel, street food, public transport)</li>
                <li><strong>Mid-range:</strong> from 600 MAD/day (guesthouse, restaurant meals, taxis)</li>
                <li><strong>Luxury:</strong> from 2,000 MAD/day (resort, fine dining, private transfers)</li>
                <li><strong>Surf camp package:</strong> from 500 MAD/day (accommodation, meals, board, lessons)</li>
              </ul>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" /> Safety Notes
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <li>Atlantic currents are strong — swim only at guarded beaches with green/yellow flags.</li>
                <li>Jellyfish appear on Mediterranean beaches in August. Ask locals before swimming.</li>
                <li>Sun protection is critical — UV index reaches 10+ in summer along both coasts.</li>
                <li>Rip currents occur at Essaouira and Taghazout beaches. Learn to spot them before entering.</li>
              </ul>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" /> When to Go (Summary)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <li><strong>Jun–Sep:</strong> Peak beach season, warmest water, most crowded, highest prices.</li>
                <li><strong>Oct–Mar:</strong> Best surf swells, fewer crowds, cooler water, off-season prices.</li>
                <li><strong>Apr–May:</strong> Sweet spot — warm air, moderate water temps, pre-summer prices.</li>
                <li><strong>Year-round:</strong> Essaouira and Dakhla maintain consistent conditions all twelve months.</li>
              </ul>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold font-[family-name:var(--font-heading)] text-[#A0522D] mb-3 flex items-center gap-2">
                <Bus className="w-5 h-5" /> Transport Overview
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <li><strong>Train:</strong> Tangier, Rabat, Casablanca, El Jadida on the ONCF network. TGV to Tangier from 149 MAD.</li>
                <li><strong>Bus:</strong> CTM and Supratours reach all major coastal towns from 40 MAD.</li>
                <li><strong>Grand taxi:</strong> Shared taxis for shorter hops between nearby towns from 15 MAD/person.</li>
                <li><strong>Car rental:</strong> From 250 MAD/day in Agadir or Casablanca. The N1 follows the Atlantic coast.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="card-moroccan p-5 group">
                <summary className="font-bold font-[family-name:var(--font-heading)] text-gray-800 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#A0522D] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <p className="mt-3 text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-[#A0522D] mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Morocco Surfing Guide', href: '/morocco-surfing-guide', icon: Waves },
              { title: 'Morocco Beaches Guide', href: '/morocco-beaches', icon: Sun },
              { title: 'Morocco Budget Travel', href: '/morocco-budget-travel', icon: DollarSign },
              { title: 'Essaouira City Guide', href: '/essaouira', icon: Wind },
              { title: 'Morocco Food Guide', href: '/morocco-food-guide', icon: Utensils },
              { title: 'Morocco Transport Guide', href: '/morocco-transport-guide', icon: Bus },
            ].map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 flex items-center gap-3 hover:bg-[#A0522D]/5 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-[#A0522D] group-hover:scale-110 transition-transform" />
                  <span className="font-[family-name:var(--font-heading)] font-medium text-gray-800 group-hover:text-[#A0522D] transition-colors">
                    {guide.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#A0522D] group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-white mb-4">
            Start Planning Your Coastal Morocco Trip
          </h2>
          <p className="text-white/90 font-[family-name:var(--font-heading)] mb-8 max-w-xl mx-auto">
            From Atlantic surf breaks to Mediterranean swimming coves — Morocco&apos;s 3,457 km of coastline
            holds a beach for every traveler.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/essaouira"
              className="bg-white text-[#A0522D] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              Explore Essaouira <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-surfing-guide"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Surfing Guide <Waves className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
