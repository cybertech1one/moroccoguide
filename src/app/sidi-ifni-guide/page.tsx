import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Mountain,
  Coffee,
  Building2,
  Fish,
  Brush,
  Users,
  Wind,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Sidi Ifni Guide 2026 | Former Spanish Enclave & Legzira Beach',
  description:
    'Complete guide to Sidi Ifni, Morocco — the former Spanish enclave on the Atlantic coast. Art deco architecture, Legzira Beach stone arches, surfing, Sunday souk, seafood, street art, and Spanish-Moroccan fusion culture. Prices in MAD.',
  keywords: [
    'sidi ifni morocco',
    'legzira beach',
    'sidi ifni guide',
    'sidi ifni surfing',
    'sidi ifni things to do',
    'spanish morocco',
    'sidi ifni art deco',
    'sidi ifni beach',
    'sidi ifni travel guide',
    'legzira stone arches',
    'sidi ifni sunday market',
    'sidi ifni architecture',
    'sidi ifni seafood',
    'sidi ifni street art',
    'sidi ifni fishing port',
    'former spanish colonies morocco',
    'sidi ifni camel rides',
    'sidi ifni spain',
    'atlantic coast morocco',
    'sidi ifni 2026',
  ],
  openGraph: {
    title: 'Sidi Ifni Guide 2026 | Former Spanish Enclave & Legzira Beach',
    description:
      'Discover Sidi Ifni, Morocco former Spanish enclave. Art deco architecture, Legzira Beach stone arches, surfing, Sunday souk, seafood, and Spanish-Moroccan fusion culture. Complete guide with prices.',
    url: `${BASE_URL}/sidi-ifni-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-sidi-ifni.webp`,
        width: 1200,
        height: 630,
        alt: 'Art deco buildings and Atlantic coastline of Sidi Ifni, the former Spanish enclave in southern Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidi Ifni Guide 2026 | Spanish-Moroccan Coastal Gem',
    description:
      'Art deco architecture, Legzira Beach arches, surfing, Sunday souk, seafood, and street art. Complete Sidi Ifni guide with real prices.',
    images: [`${BASE_URL}/images/hero-sidi-ifni.webp`],
  },
  alternates: { canonical: `${BASE_URL}/sidi-ifni-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/sidi-ifni-guide`,
  name: 'Sidi Ifni Guide 2026 | Former Spanish Enclave & Legzira Beach',
  description:
    'Complete guide to Sidi Ifni, Morocco — the former Spanish enclave on the Atlantic coast. Art deco architecture, Legzira Beach, surfing, seafood, and Spanish-Moroccan fusion culture.',
  url: `${BASE_URL}/sidi-ifni-guide`,
  image: `${BASE_URL}/images/hero-sidi-ifni.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/sidi-ifni-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Sidi Ifni',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Sidi Ifni Guide', item: `${BASE_URL}/sidi-ifni-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why was Sidi Ifni part of Spain?', acceptedAnswer: { '@type': 'Answer', text: 'Spain controlled Sidi Ifni from 1934 to 1969 as part of its colonial territories in Morocco. The enclave was established under the 1860 Treaty of Wad-Ras. Spain built substantial infrastructure including administrative buildings, a church, an airstrip, courts, and residential quarters in art deco and rationalist architectural styles. Morocco recaptured the territory peacefully in 1969 through the Ifni War settlement. The Spanish architectural legacy remains remarkably intact.' } },
    { '@type': 'Question', name: 'How do I get to Sidi Ifni?', acceptedAnswer: { '@type': 'Answer', text: 'Sidi Ifni is 160 km south of Agadir (about 2.5 hours by car) and 65 km south of Tiznit (about 1 hour). Regular buses connect from Agadir via Tiznit (from 60 MAD). Grand taxis run from Tiznit (from 30 MAD shared). The coastal road from Tiznit is scenic. The nearest airport is Agadir Al-Massira. A rental car offers the most flexibility for exploring the coast.' } },
    { '@type': 'Question', name: 'Is Legzira Beach worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Legzira Beach, 10 km south of Sidi Ifni, is one of Morocco most dramatic beaches. The remaining natural stone arch (one collapsed in 2016) rises spectacularly from the sand, carved by centuries of Atlantic erosion. The beach is best at low tide when you can walk under and around the arches. Sunset here, with the arch silhouetted against the sky, is extraordinary. The beach is quieter than most Moroccan beaches and has a wild, untamed beauty.' } },
    { '@type': 'Question', name: 'How many days should I spend in Sidi Ifni?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is ideal. Day 1: explore the art deco architecture, former Spanish buildings, fishing port, town beach, and seafood dinner. Day 2: visit Legzira Beach (half day), Sunday souk (if timing aligns), and explore the street art. If you are a surfer, add extra days for the consistent Atlantic swells.' } },
    { '@type': 'Question', name: 'Can you surf in Sidi Ifni?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Sidi Ifni and the surrounding coast offer excellent surfing. The town beach has consistent waves suitable for intermediate surfers. Legzira Beach and other spots north and south along the coast have more powerful breaks. The best season is October to April when Atlantic swells are largest. Water temperatures range from 17-21 degrees — a wetsuit is essential. Board rental from 100 MAD per day.' } },
    { '@type': 'Question', name: 'Is Sidi Ifni safe?', acceptedAnswer: { '@type': 'Answer', text: 'Sidi Ifni is a very safe, relaxed town. Crime is low and locals are welcoming. The town is small enough to walk everywhere. Standard precautions apply as anywhere in Morocco. The beach can have strong currents and waves — swim with caution. The town has a laid-back atmosphere that many travelers find refreshing after busier Moroccan cities.' } },
    { '@type': 'Question', name: 'What is the best time to visit Sidi Ifni?', acceptedAnswer: { '@type': 'Answer', text: 'Year-round, thanks to the mild Atlantic climate. Summer (June-September) has the warmest weather (22-28 degrees) and calmest seas. Winter (October-March) brings bigger surf and occasional rain but temperatures remain mild (15-22 degrees). Spring and autumn are ideal with warm days and fewer visitors. Fog (locally called "taro") can roll in during summer mornings but usually clears by midday.' } },
  ],
};

/* ===============================================================
   DATA: SPANISH COLONIAL ARCHITECTURE
   =============================================================== */

const architectureAttractions = [
  {
    name: 'Former Spanish Consulate',
    icon: Building2,
    category: 'Colonial Architecture',
    price: 'Free (exterior)',
    duration: '15-20 minutes',
    bestTime: 'Morning',
    description:
      'The former Spanish consulate building is the architectural centerpiece of Sidi Ifni and perhaps the finest example of art deco design in southern Morocco. Built in the 1930s during the height of Spanish colonial ambition, the building features sweeping curved balconies, porthole windows, geometric ornamentation, and a streamlined facade that would not look out of place in Miami Beach or Havana. The building sits prominently on the main plaza overlooking the ocean, its faded grandeur evoking the colonial era when Sidi Ifni was a self-contained Spanish enclave on the African coast.',
    insiderTip:
      'The building is not open to visitors but the exterior is the star attraction. The best photographs are from the plaza in front, where the full facade and its art deco details are visible. Morning light is best. The adjacent buildings in the plaza also feature Spanish colonial design elements worth examining.',
  },
  {
    name: 'Spanish Church (Iglesia)',
    icon: Landmark,
    category: 'Historic Building',
    price: 'Free (exterior)',
    duration: '10-15 minutes',
    bestTime: 'Any time',
    description:
      'The former Spanish Catholic church is one of the most poignant buildings in Sidi Ifni. Built to serve the colonial community, it now stands deconsecrated — a physical reminder of the departed colonial power. The simple but elegant structure features a bell tower, arched windows, and whitewashed walls in the Spanish mission style. Inside, the space has been repurposed over the years. The church sits near the main plaza, surrounded by other Spanish-era buildings, creating a concentrated zone of colonial architecture unique in Morocco.',
    insiderTip:
      'The church, consulate, and courts form a triangle of Spanish colonial architecture that you can explore in 30 minutes. Each building tells part of the story of Sidi Ifni colonial past. Local residents are generally happy to share memories and stories about the Spanish period if you engage respectfully.',
  },
  {
    name: 'Former Royal Courts (Tribunal)',
    icon: Landmark,
    category: 'Colonial Architecture',
    price: 'Free (exterior)',
    duration: '10-15 minutes',
    bestTime: 'Morning',
    description:
      'The former Spanish royal courts building showcases the rationalist architectural style that characterized institutional buildings in Spanish colonial Africa. Clean lines, symmetrical facades, and functional elegance define this structure, which once administered Spanish justice in the tiny enclave. Like many colonial buildings in Sidi Ifni, it has been adapted for Moroccan administrative use but retains its original architectural character. The contrast between the Spanish institutional architecture and the surrounding Moroccan urban fabric is fascinating.',
    insiderTip:
      'Architecture enthusiasts should walk the entire central district to appreciate the full scope of Spanish-era building. Beyond the main trio of consulate, church, and courts, smaller residential buildings, the former cinema, and commercial structures reveal how completely Spain built this enclave as a miniature version of a Spanish provincial town.',
  },
  {
    name: 'Former Spanish Airstrip',
    icon: Compass,
    category: 'Historic Site',
    price: 'Free',
    duration: '15-20 minutes',
    bestTime: 'Any time',
    description:
      'The abandoned Spanish airstrip on the plateau above town is a haunting relic of the colonial period. Built to connect the isolated enclave to mainland Spain and Spanish Sahara, the airstrip once handled small military and civilian aircraft. Today the cracked runway stretches across the barren clifftop, reclaimed by weeds and used occasionally by locals for football games or grazing livestock. The views from here over the town and the Atlantic coastline are spectacular, and the sense of abandonment is evocative.',
    insiderTip:
      'The airstrip is a short walk uphill from the town center. The views alone justify the walk. Combine with a clifftop walk along the coast. The contrast between the decaying aviation infrastructure and the wild Atlantic below captures the essence of Sidi Ifni — a place where colonial ambition met the enduring power of nature.',
  },
];

/* ===============================================================
   DATA: BEACHES & SURF
   =============================================================== */

const beachAttractions = [
  {
    name: 'Legzira Beach',
    icon: Waves,
    category: 'Natural Wonder',
    price: 'Free / Taxi from 20 MAD',
    duration: '2-4 hours',
    bestTime: 'Low tide / Sunset',
    description:
      'Legzira Beach is one of Morocco most photographed natural wonders. Located 10 km south of Sidi Ifni, this dramatic beach is famous for its towering natural stone arches carved by millennia of Atlantic erosion from the red sandstone cliffs. One arch collapsed in September 2016, but the remaining arch remains breathtaking — a massive natural bridge of layered red and ochre rock rising from the golden sand. At low tide, you can walk beneath and around the arch, marveling at the scale and the patterns carved by wind and waves. The beach itself stretches for kilometers, backed by striated cliffs that glow red and gold at sunset.',
    insiderTip:
      'Check tide times before visiting — low tide is essential to access the arches and walk the full beach. Sunset at Legzira is extraordinary as the arch silhouettes against the sky and the cliffs turn deep red. A grand taxi from Sidi Ifni costs from 20 MAD shared. There are simple cafes at the top of the cliff access path. Wear sturdy shoes for the descent.',
  },
  {
    name: 'Sidi Ifni Town Beach',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free',
    duration: '1-3 hours',
    bestTime: 'Morning or afternoon',
    description:
      'The town beach stretches below the clifftop town center, accessed by a winding road or stairs down the cliff face. The sandy crescent is popular with local families, especially in summer. The Atlantic waters are bracing but refreshing, with consistent waves that attract surfers. The beach offers views up to the town perched on the cliffs above — the art deco buildings visible against the sky. A restored promenade connects the beach to the fishing port, perfect for an evening stroll.',
    insiderTip:
      'The beach is best for swimming from June to September when the sea is calmest and warmest (around 20-22 degrees). Watch for currents — swim near other people. The promenade from the beach to the port is a beautiful sunset walk. Beach vendors sell seasonal fruit and snacks. Bring your own towel and sun protection.',
  },
  {
    name: 'Surfing in Sidi Ifni',
    icon: Wind,
    category: 'Water Sports',
    price: 'Board rental from 100 MAD/day',
    duration: '2-4 hours',
    bestTime: 'October-April (biggest swells)',
    description:
      'Sidi Ifni is an emerging surf destination on Morocco Atlantic coast. The town beach and surrounding coastline receive consistent swells year-round, with the biggest waves arriving between October and April. The town beach offers beach breaks suitable for intermediate surfers, while point breaks north and south of town challenge advanced riders. Compared to the surf capitals of Taghazout and Essaouira, Sidi Ifni offers uncrowded lineups and a more authentic experience. Several local operators rent boards and offer lessons.',
    insiderTip:
      'A 3/2mm wetsuit is essential — water temperatures range from 17-21 degrees year-round. Ask locally about current conditions and the best breaks for your level. The point break south of town near Legzira works on north swells. Board and wetsuit rental is available from guesthouses and local surf operators (from 100-150 MAD per day). The surf scene here is low-key and welcoming.',
  },
  {
    name: 'Camel Rides on the Beach',
    icon: Compass,
    category: 'Unique Experience',
    price: 'From 100 MAD per ride',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon',
    description:
      'Camel rides along Sidi Ifni town beach and the coast offer a quintessentially Moroccan experience against the dramatic Atlantic backdrop. Local handlers lead dromedaries along the sand at low tide, with the cliffs and town skyline providing a photogenic backdrop. The rides are suitable for all ages and no experience is needed. The late afternoon light, with the sun lowering toward the ocean, creates the most atmospheric setting.',
    insiderTip:
      'Negotiate the price before mounting — from 100 MAD for a 30-minute walk along the beach is fair. Longer rides toward the rocks to the south cost from 150-200 MAD. The handlers expect a small tip (from 20 MAD) for photographs. The experience is best at low tide when the beach is widest.',
  },
];

/* ===============================================================
   DATA: CULTURE & LOCAL LIFE
   =============================================================== */

const cultureAttractions = [
  {
    name: 'Fishing Port',
    icon: Fish,
    category: 'Local Life',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Early morning (6-8 AM)',
    description:
      'The small fishing port is the economic heart of Sidi Ifni. Each morning, colorful wooden boats return with the night catch — sardines, octopus, sea bream, sole, and occasionally swordfish. Watching the fishermen haul their catches ashore, sort the fish into crates, and negotiate with buyers at the informal quayside auction is a vivid slice of Atlantic Morocco daily life. The port also features the remains of a Spanish-era cable car system that once transported goods from ships to the clifftop — the rusting pylons are visible along the cliff face.',
    insiderTip:
      'Arrive before 7 AM for the busiest action when the boats come in. The old Spanish cable car pylons along the cliff are worth photographing — they are a haunting reminder of the colonial infrastructure. Buy fresh fish directly from the port (from 30 MAD per kg for sardines) and have it grilled at a nearby restaurant for a small fee (from 15 MAD).',
  },
  {
    name: 'Sunday Souk',
    icon: ShoppingBag,
    category: 'Weekly Market',
    price: 'Free entry',
    duration: '1-2 hours',
    bestTime: 'Sunday morning (8-12 PM)',
    description:
      'The Sunday souk transforms Sidi Ifni into a buzzing marketplace. Traders from surrounding villages, the Anti-Atlas mountains, and the coastal towns converge to sell produce, livestock, clothing, household goods, spices, and handicrafts. The market is overwhelmingly local — this is the real commercial pulse of the region, not a tourist spectacle. Mountains of seasonal vegetables, fragrant spice mounds, bolts of fabric, and the sounds of bargaining fill the air. The market area sprawls across the outskirts of town.',
    insiderTip:
      'The Sunday souk is the best day to visit Sidi Ifni. Arrive by 9 AM for the best experience. Look for local argan oil (from 80 MAD per liter), amlou (almond-argan spread, from 40 MAD), and seasonal produce at genuine local prices. The livestock section is fascinating. Very few tourists attend, so expect minimal English but maximum authenticity.',
  },
  {
    name: 'Street Art & Abandoned Buildings',
    icon: Brush,
    category: 'Urban Art',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Any time',
    description:
      'Sidi Ifni has developed an unexpected street art scene in recent years. Artists — both local and international — have used the blank canvases of abandoned Spanish colonial buildings and bare walls as their galleries. Colorful murals depicting ocean life, Amazigh culture, Spanish-Moroccan fusion imagery, and abstract designs appear throughout the town. The combination of art deco architecture, peeling colonial facades, and vibrant street art creates a visual landscape unlike anywhere else in Morocco. Entire abandoned buildings have been transformed into immersive art installations.',
    insiderTip:
      'The best murals are concentrated in the streets around the main plaza and along the road down to the port. New pieces appear regularly. The abandoned Spanish-era buildings are photogenic but exercise caution when exploring — some structures are unstable. The contrast between the crumbling colonial architecture and the vivid new art makes for compelling photography.',
  },
  {
    name: 'Seafood Restaurants',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 50 MAD per meal',
    duration: '1-1.5 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Sidi Ifni seafood is among the freshest and most affordable in Morocco. The town small restaurants serve fish caught that morning — grilled sardines, fried calamari, octopus tagine, charcoal-grilled sea bream, and mixed seafood platters. The Spanish influence shows in the preparation: fish is often simply grilled with olive oil, lemon, and herbs rather than heavily spiced. Paella and Spanish-style seafood dishes occasionally appear on menus, reflecting the town hybrid culinary heritage. Eating overlooking the Atlantic as the sun sets is a highlight of any Sidi Ifni visit.',
    insiderTip:
      'The restaurants near the port serve the freshest fish at the best prices. A full grilled fish plate with salad and bread costs from 50-80 MAD. Ask what was caught that day and choose accordingly. The mixed seafood platter (from 80-120 MAD) is usually the best value. Some restaurants will grill fish you buy directly from the port for a small fee (from 15-20 MAD).',
  },
];

/* ===============================================================
   DATA: MORE EXPERIENCES
   =============================================================== */

const additionalExperiences = [
  {
    name: 'Spanish-Moroccan Heritage Walk',
    icon: Footprints,
    category: 'Walking Tour',
    price: 'Free (self-guided) / From 150 MAD (guided)',
    duration: '1.5-2 hours',
    bestTime: 'Morning',
    description:
      'A walking tour through Sidi Ifni reveals the unique layering of Spanish colonial and Moroccan cultures. Start at the main plaza with the consulate, church, and courts. Walk through the former Spanish residential quarter with its balconied houses and iron railings. Pass the old cinema, the former school, and the market building. Descend to the port to see the cable car ruins. The walk illustrates how completely Spain built this enclave — and how organically Morocco has absorbed and transformed it since 1969.',
    insiderTip:
      'A self-guided walk takes about 1.5 hours. For deeper context, arrange a local guide through your accommodation (from 150 MAD). The most atmospheric time is early morning when the streets are quiet and the light is soft. Pick up a simple map at any guesthouse. The town is compact and easy to navigate on foot.',
  },
  {
    name: 'Clifftop Coastal Walk',
    icon: Eye,
    category: 'Nature & Views',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon / Sunset',
    description:
      'The cliffs above Sidi Ifni offer spectacular walking along the coast in both directions. Heading south toward Legzira, the clifftop path passes through sparse scrubland with dramatic views down to the pounding Atlantic below. Heading north, the path leads past the old airstrip and along eroded red cliffs to isolated coves. The sunsets from the clifftops are extraordinary — the entire Atlantic horizon turning gold and red as the sun drops into the ocean.',
    insiderTip:
      'The southern clifftop path toward Legzira is the most dramatic but also the most exposed — bring water and sun protection. Stay well back from cliff edges, which can be unstable. The northern path past the airstrip is easier and more sheltered. Sunset from the cliffs above the port is the best free show in Sidi Ifni.',
  },
  {
    name: 'Day Trip to Mirleft',
    icon: Compass,
    category: 'Coastal Excursion',
    price: 'Grand taxi from 15 MAD',
    duration: 'Half day',
    bestTime: 'Any day',
    description:
      'The small coastal town of Mirleft, 30 km north of Sidi Ifni, has become a magnet for surfers, artists, and travelers seeking Atlantic Morocco at its most authentic. Perched above dramatic cliffs, Mirleft offers several beautiful beaches (Plage Imin Tourga, Plage Marabout, Plage Sauvage), a tiny center with cafes and guesthouses, and some of the best surfing on the southern coast. The French colonial watchtower on the hill above town provides panoramic views.',
    insiderTip:
      'Grand taxis from Sidi Ifni to Mirleft cost from 15 MAD shared. The beaches are reached by steep paths — wear sturdy shoes. Plage Marabout, with its rock formations and calm waters, is the most sheltered for swimming. Surf conditions are best October to April. Several cafes serve excellent fresh fish (from 50 MAD). Consider staying overnight — Mirleft deserves more than a few hours.',
  },
  {
    name: 'Sunset at Place Hassan II',
    icon: Sun,
    category: 'Town Square',
    price: 'Free (coffee from 10 MAD)',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon / Sunset',
    description:
      'The main town square, Place Hassan II (formerly the Spanish plaza), is the social center of Sidi Ifni. Surrounded by the art deco consulate building, cafes, and shops, the square comes alive in the late afternoon as residents emerge for the evening promenade. Cafe terraces fill with tea drinkers and coffee sippers watching the world go by. The square is perched on the cliff edge, offering views over the ocean that turn golden at sunset. This is where Sidi Ifni Spanish and Moroccan identities meet most visibly.',
    insiderTip:
      'Grab a table at one of the cafes facing the ocean for the best sunset position (coffee from 10 MAD, mint tea from 10 MAD). The square is the best place to people-watch and feel the town relaxed rhythm. On warm evenings, families stroll, children play, and the atmosphere is quintessentially Moroccan small-town social life.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Seafood Straight from the Port', icon: Fish, description: 'Buy fresh fish at the port (sardines from 30 MAD/kg, sea bream from 60 MAD/kg) and have it grilled at a nearby restaurant for from 15-20 MAD. A feast for under 50 MAD.', savings: 'Save from 30-70 MAD vs. restaurant' },
  { tip: 'Walk Everywhere', icon: Footprints, description: 'Sidi Ifni is tiny — everything in town is within 15 minutes on foot. The port, beach, main square, and all colonial buildings require no transport. Save taxi fares for Legzira.', savings: 'Free — save from 50-100 MAD/day' },
  { tip: 'Shared Taxi to Legzira', icon: MapPin, description: 'A shared grand taxi to Legzira Beach costs from 20 MAD per person. Hiring a private taxi costs from 100-150 MAD return. Wait for the taxi to fill at the stand.', savings: 'Save from 60-110 MAD vs. private' },
  { tip: 'Sunday Souk for Supplies', icon: ShoppingBag, description: 'Stock up at the Sunday souk for incredibly cheap produce, bread, nuts, and snacks. A week worth of fruit and snacks for from 30-50 MAD. Argan oil from 80 MAD/liter (vs. from 200 MAD in tourist cities).', savings: 'Save from 50-150 MAD on supplies' },
  { tip: 'Free Architecture Tour', icon: Building2, description: 'All the Spanish colonial architecture — consulate, church, courts, airstrip, residential quarters — is free to view externally. The street art is free. Sidi Ifni best attractions cost nothing.', savings: 'Free — save from 100-200 MAD vs. tours' },
  { tip: 'Budget Accommodation', icon: Heart, description: 'Sidi Ifni has excellent budget guesthouses and hostels from 100-200 MAD per night — a fraction of Marrakech or Essaouira prices. Many include breakfast. Ask for ocean-view rooms.', savings: 'Save from 200-500 MAD/night vs. tourist cities' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Taro Fog Warning', icon: AlertTriangle, description: 'Summer mornings often bring "taro" — thick sea fog that blankets the town. It usually clears by midday. Plan outdoor activities for afternoons during summer. The fog creates moody, atmospheric photographs of the colonial buildings.' },
  { tip: 'Tide Times for Legzira', icon: Waves, description: 'Check tide times before visiting Legzira Beach. Low tide is essential to walk the full beach and access the stone arches. At high tide, the beach is inaccessible in parts. Tide apps or your accommodation can provide times.' },
  { tip: 'Spanish Language Bonus', icon: Globe, description: 'Older residents of Sidi Ifni often speak Spanish — a legacy of the colonial period. If you speak Spanish, you will find it opens doors. French is also widely understood. Tashelhit (Berber) is the local indigenous language.' },
  { tip: 'Best Photography Moments', icon: Camera, description: 'Top shots: the consulate facade in morning light, Legzira arch at sunset, the fishing port at dawn, street art murals, the cable car ruins against the cliffs, and the clifftop town seen from the beach below.' },
  { tip: 'Combine with Tiznit', icon: MapPin, description: 'Sidi Ifni pairs perfectly with Tiznit (65 km north, 1 hour). Do silver shopping in Tiznit and beach/architecture in Sidi Ifni. A rental car makes the southern coast circuit easy: Agadir, Tiznit, Sidi Ifni, Mirleft.' },
  { tip: 'Respect Abandoned Buildings', icon: CheckCircle, description: 'The abandoned Spanish buildings are fascinating but many are structurally unsound. Do not enter buildings with visible damage. View and photograph from outside. Some ruins are on private property — always check before exploring.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Why was Sidi Ifni part of Spain?', answer: 'Spain controlled Sidi Ifni from 1934 to 1969 under the 1860 Treaty of Wad-Ras. Spain built substantial infrastructure in art deco and rationalist styles. Morocco regained the territory in 1969. The Spanish architectural legacy remains remarkably intact and is the town primary visual character.' },
  { question: 'How do I get to Sidi Ifni?', answer: 'Sidi Ifni is 160 km south of Agadir (2.5 hours) and 65 km south of Tiznit (1 hour). Regular buses run from Agadir via Tiznit (from 60 MAD). Grand taxis from Tiznit cost from 30 MAD shared. The nearest airport is Agadir Al-Massira. A rental car offers the most flexibility.' },
  { question: 'Is Legzira Beach worth visiting?', answer: 'Absolutely. The remaining natural stone arch is one of Morocco most dramatic natural formations. Visit at low tide for full access. Sunset is extraordinary. The beach is 10 km south, reachable by grand taxi (from 20 MAD). Allow 2-3 hours minimum.' },
  { question: 'How many days should I spend in Sidi Ifni?', answer: 'One to two days covers the essentials. Day 1: architecture walk, fishing port, town beach, seafood dinner. Day 2: Legzira Beach, Sunday souk (if timing aligns), street art exploration. Surfers and those seeking relaxation can easily spend 3-5 days.' },
  { question: 'Can you surf in Sidi Ifni?', answer: 'Yes, consistent Atlantic swells provide good surfing year-round, with the best waves October to April. The town beach suits intermediate surfers. Point breaks nearby challenge advanced riders. Board rental from 100 MAD per day. A wetsuit is essential (water 17-21 degrees).' },
  { question: 'Is Sidi Ifni safe?', answer: 'Very safe and relaxed. Crime is low and locals are welcoming. The town is compact and walkable. Standard beach safety applies — watch for currents and waves. The abandoned buildings should be viewed externally only due to structural concerns.' },
  { question: 'What is the best time to visit Sidi Ifni?', answer: 'Year-round. Summer offers warmest weather but morning fog ("taro") is common. Winter has bigger surf. Spring and autumn are ideal with warm days and fewer visitors. Sunday is the best day for the weekly souk.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/tiznit-guide', icon: Sparkles, title: 'Tiznit Guide', description: 'Silver jewelry capital just 1 hour north of Sidi Ifni.' },
  { href: '/agadir', icon: MapPin, title: 'Agadir City Guide', description: 'Beach resort gateway, 2.5 hours north on the Atlantic coast.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'From Legzira dramatic arches to Atlantic surf and hidden coves.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Southern coast circuits and Anti-Atlas mountain drives.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Seafood, tagines, and the flavors of Atlantic Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function SidiIfniGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-sidi-ifni.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sidi Ifni Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Building2 className="w-4 h-4" />
            Former Spanish Enclave
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Sidi Ifni Guide
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Art deco architecture, dramatic stone arches, and Atlantic surf.
            Discover Morocco most atmospheric former Spanish enclave on the southern coast.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Sidi Ifni: Where Spain Met the Atlantic
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Perched on Atlantic cliffs 160 kilometers south of Agadir, Sidi Ifni is a town that
                exists between worlds. From 1934 to 1969 it was a Spanish enclave — a tiny piece of
                Europe transplanted onto the African coast, complete with art deco government buildings,
                a Catholic church, an airstrip, and a cable car connecting the clifftop to the port
                below. When Morocco reclaimed the territory in 1969, Spain left behind an architectural
                time capsule that remains hauntingly intact today.
              </p>
              <p>
                But Sidi Ifni is far more than colonial architecture. Ten kilometers south, the natural
                stone arches of Legzira Beach rank among Morocco most spectacular natural formations.
                The town beach draws surfers to its consistent Atlantic swells. The Sunday souk buzzes
                with traders from the Anti-Atlas hinterland. And the seafood — pulled from the Atlantic
                that morning, grilled over charcoal, and served overlooking the ocean — is among the
                freshest and most affordable in the country.
              </p>
              <p>
                This guide covers everything worth seeing and doing in Sidi Ifni, from Spanish colonial
                architecture walks to Legzira Beach, surfing, and seafood. Each listing includes real
                2026 prices in MAD and practical tips from travelers who know this unique corner of
                Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 12 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 12 Things to Do in Sidi Ifni
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From art deco architecture to dramatic stone arches and fresh Atlantic seafood.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Legzira Beach & Stone Arches', price: 'Free / Taxi from 20 MAD', time: '2-4 hours', category: 'Natural Wonder' },
              { rank: 2, name: 'Spanish Colonial Architecture Walk', price: 'Free', time: '1.5-2 hours', category: 'Heritage' },
              { rank: 3, name: 'Fishing Port at Dawn', price: 'Free', time: '30 min - 1 hour', category: 'Local Life' },
              { rank: 4, name: 'Surfing the Atlantic', price: 'From 100 MAD/day', time: '2-4 hours', category: 'Water Sports' },
              { rank: 5, name: 'Seafood by the Ocean', price: 'From 50 MAD', time: '1-1.5 hours', category: 'Culinary' },
              { rank: 6, name: 'Sunday Souk', price: 'Free', time: '1-2 hours', category: 'Market' },
              { rank: 7, name: 'Street Art & Murals', price: 'Free', time: '1-2 hours', category: 'Urban Art' },
              { rank: 8, name: 'Camel Rides on the Beach', price: 'From 100 MAD', time: '30 min - 1 hour', category: 'Experience' },
              { rank: 9, name: 'Former Spanish Airstrip', price: 'Free', time: '15-20 min', category: 'Historic Site' },
              { rank: 10, name: 'Clifftop Coastal Walk', price: 'Free', time: '1-2 hours', category: 'Nature' },
              { rank: 11, name: 'Day Trip to Mirleft', price: 'From 15 MAD taxi', time: 'Half day', category: 'Day Trip' },
              { rank: 12, name: 'Sunset at Place Hassan II', price: 'Free / Coffee from 10 MAD', time: '30 min - 1 hour', category: 'Views' },
            ].map((item) => (
              <div key={item.rank} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-[var(--color-accent)]">{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Ticket className="w-3 h-3" />
                      {item.price}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Spanish Colonial Architecture -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spanish Colonial Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Sidi Ifni preserves one of the most complete collections of Spanish colonial architecture
            in Africa — art deco, rationalist, and mission styles frozen in time since 1969.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All colonial buildings are viewable externally. Most are not open to the public as interior spaces.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {architectureAttractions.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {attraction.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {attraction.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {attraction.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {attraction.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Beaches & Surf -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beaches &amp; Surf
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Wild Atlantic beaches, dramatic stone arches, and uncrowded surf breaks along one of
            Morocco most spectacular and least-developed coastlines.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Atlantic currents can be strong. Always check conditions before swimming or surfing.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {beachAttractions.map((item) => {
              const BeachIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Culture & Local Life -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Food &amp; Local Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From dawn fish auctions and Sunday souk bustle to street art galleries
            and some of the freshest seafood in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Sunday is the best day to visit for the weekly market. The fishing port is most active before 7 AM.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureAttractions.map((item) => {
              const CulIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CulIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- More Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            More Experiences &amp; Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Walking tours, clifftop trails, coastal excursions, and the best sunset spot in town.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Sidi Ifni is compact enough to explore entirely on foot. Day trips require a grand taxi or rental car.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {additionalExperiences.map((item) => {
              const ExpIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Sidi Ifni
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sidi Ifni is already one of Morocco most affordable destinations. These tips make it even cheaper.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Sidi Ifni
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to help you navigate this unique town and make the most of your Atlantic coast adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
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

      {/* -- Sample 2-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Sidi Ifni Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan covering the essential experiences. Best if Day 2 falls on a Sunday for the souk.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Architecture, Port &amp; Seafood
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Early visit to the fishing port to watch the boats come in (before 7 AM). Walk the
                      Spanish colonial architecture circuit: consulate, church, courts, and residential
                      quarter (free). Photograph the cable car ruins along the cliff. Coffee at Place
                      Hassan II (from 10 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a port-side restaurant — grilled fish plate (from 50 MAD). Explore the
                      street art and murals in the town center. Walk up to the former Spanish airstrip
                      for panoramic views. Head to the town beach for a swim or surf (board rental
                      from 100 MAD if needed).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset from the cliffs above the port or Place Hassan II cafe terrace. Fresh
                      seafood dinner — mixed platter with salad (from 80 MAD). Evening stroll along
                      the promenade. Estimated Day 1 cost: from 200-400 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Legzira Beach &amp; Sunday Souk
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      If Sunday: explore the Sunday souk (8 AM - noon). Stock up on produce, argan oil
                      (from 80 MAD/liter), and local snacks. If not Sunday: take a grand taxi to Legzira
                      Beach early (from 20 MAD) and explore the stone arches at low tide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Legzira Beach — walk beneath the stone arch, explore the caves, and relax on the
                      sand. Simple lunch at the cliff-top cafes (from 40 MAD). Alternatively, take a
                      half-day trip to Mirleft (grand taxi from 15 MAD) for more beaches and surf.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Sidi Ifni for sunset at Legzira (if not already there) or the clifftop.
                      Final seafood dinner in town (from 60 MAD). Camel ride on the beach if time allows
                      (from 100 MAD). Estimated Day 2 cost: from 200-450 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Port fish, free walks, shared taxis, public beach</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-1,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Restaurant meals, Legzira trip, camel ride, surfing</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Rental car, Mirleft day trip, guided tours, fine dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring the Southern Coast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Sidi Ifni?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From art deco facades and dramatic stone arches to dawn fish auctions and Atlantic surf,
            Sidi Ifni offers an experience unlike anywhere else in Morocco. Start planning your
            journey to the southern coast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tiznit-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Tiznit Silver Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
            <Link
              href="/morocco-road-trip-routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Road Trip Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
