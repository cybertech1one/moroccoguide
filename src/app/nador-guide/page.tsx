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
  Music,
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
  Wind,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Anchor,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
  Shield,
  Ship,
  Fish,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Guide to Nador 2026 | Rif Coast & Marchica Lagoon',
  description:
    'Discover Nador, Morocco: Mediterranean Rif coast city with Marchica lagoon, Charrana Beach, Cap des Trois Fourches, corniche promenade, Melilla day trip, Mount Gurugu, Riffian cuisine, and more. Real prices in MAD.',
  keywords: [
    'nador morocco',
    'nador guide',
    'marchica lagoon',
    'cap trois fourches',
    'nador beach',
    'things to do nador',
    'melilla day trip',
    'mar chica lagoon',
    'nador travel guide',
    'charrana beach nador',
    'mount gurugu',
    'beni ensar port',
    'nador corniche',
    'rif coast morocco',
    'nador attractions',
    'riffian cuisine',
  ],
  openGraph: {
    title: 'Complete Guide to Nador 2026 | Rif Coast & Marchica Lagoon',
    description:
      'Explore Nador: Mediterranean Rif coast city with one of the largest lagoons in the Med, dramatic cape drives, Spanish Melilla day trips, and authentic Riffian culture.',
    url: `${BASE_URL}/nador-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'View of Nador with the Marchica lagoon and Mediterranean Sea along the Rif coast of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Nador 2026 | Mediterranean Rif Coast',
    description:
      'Marchica lagoon, Charrana Beach, Cap des Trois Fourches, Melilla day trip, Mount Gurugu, Riffian cuisine. Complete Nador guide with prices.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/nador-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/nador-guide`,
  name: 'Complete Guide to Nador 2026 | Rif Coast & Marchica Lagoon',
  description:
    'Discover Nador, Morocco: Mediterranean Rif coast city with Marchica lagoon, beaches, Cap des Trois Fourches, Melilla day trip, and Riffian culture.',
  url: `${BASE_URL}/nador-guide`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/nador-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Nador',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Nador Guide', item: `${BASE_URL}/nador-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Nador known for in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Nador is known for the Marchica lagoon (Mar Chica), one of the largest lagoons in the Mediterranean, its position on the Rif coast with access to beautiful beaches, the dramatic Cap des Trois Fourches peninsula, proximity to the Spanish enclave of Melilla for day trips, Mount Gurugu, a vibrant fish market, the corniche promenade, and authentic Riffian Berber culture. The city is a major hub for the Moroccan Rif diaspora in Europe.' } },
    { '@type': 'Question', name: 'Can you visit Melilla from Nador?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Melilla is a Spanish autonomous city bordering Nador, accessible through the Beni Ensar border crossing just 13 km from Nador center. You need a valid passport (and a Schengen visa if required for your nationality). The border crossing can take 30 minutes to 2 hours depending on traffic. Melilla offers Spanish colonial architecture, duty-free shopping, tapas restaurants, and beaches. A grand taxi from Nador to the border costs from 10 MAD.' } },
    { '@type': 'Question', name: 'How do I get to Nador?', acceptedAnswer: { '@type': 'Answer', text: 'Nador has Nador International Airport (NDR) with domestic flights from Casablanca and seasonal flights from European cities. The city is connected by road to Oujda (150 km east), Al Hoceima (160 km west), and Fes (330 km southwest). CTM and Supratours buses serve these routes. There is no railway to Nador, though one is planned. Ferries from Almeria and Motril (Spain) arrive at Beni Ensar port, 13 km from center.' } },
    { '@type': 'Question', name: 'What is the Marchica lagoon?', acceptedAnswer: { '@type': 'Answer', text: 'Marchica (Mar Chica) is one of the largest lagoons in the Mediterranean, stretching approximately 25 km along the coast near Nador. The shallow, calm lagoon is separated from the sea by a narrow sand spit and has been the focus of a major urban development project (Marchica Med) aiming to transform the waterfront with marinas, resorts, golf courses, and eco-tourism facilities. The lagoon supports diverse birdlife and offers calm waters for kayaking and paddleboarding.' } },
    { '@type': 'Question', name: 'How many days do you need in Nador?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal. Day 1: corniche promenade, fish market, Marchica lagoon, and city exploration. Day 2: Cap des Trois Fourches dramatic coastal drive with beach stops at Charrana and isolated coves. Day 3: Melilla day trip for Spanish colonial architecture and duty-free shopping, or Mount Gurugu hike. One day covers the lagoon, corniche, and fish market.' } },
    { '@type': 'Question', name: 'What is the best time to visit Nador?', acceptedAnswer: { '@type': 'Answer', text: 'June to September for beach weather with Mediterranean temperatures of 25-32 degrees and warm sea water. Spring (April-May) and early autumn (October) are ideal for the Cap des Trois Fourches drive and Mount Gurugu hiking with pleasant temperatures. Winter is mild (10-16 degrees) with some rain. July and August are busiest when the Rif diaspora returns from Europe for summer holidays.' } },
  ],
};

/* ===============================================================
   DATA: LAGOON & WATERFRONT
   =============================================================== */

const lagoonWaterfront = [
  {
    name: 'Marchica Lagoon (Mar Chica)',
    icon: Waves,
    category: 'Natural Landmark & Development',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Late afternoon (golden light)',
    description:
      'Marchica, also known as Mar Chica, is one of the largest lagoons in the entire Mediterranean basin, stretching approximately 25 km along the coast with a surface area of over 115 square kilometers. This shallow, tranquil body of water is separated from the open Mediterranean by a narrow sand spit called the Boucana, with a single opening connecting lagoon and sea. The Marchica lagoon has been the centerpiece of one of Morocco most ambitious urban development projects — Marchica Med — which envisions transforming the waterfront into a world-class destination with marinas, hotels, golf courses, and eco-tourism facilities. The lagoon calm waters reflect the surrounding mountains at dawn and dusk, creating mirror-like vistas of extraordinary beauty. Birdlife is abundant, with flamingos, herons, and terns feeding in the shallow waters.',
    insiderTip:
      'The best views of the lagoon are from the elevated roads on its western shore, where you can see the entire expanse stretching to the sand spit and the open Mediterranean beyond. Sunrise and sunset create stunning reflections. The Marchica Med development areas along the northern shore have the most modern infrastructure — waterfront promenades, cafes, and planned marinas. Bring binoculars for birdwatching in the southern shallows.',
  },
  {
    name: 'Nador Corniche Promenade',
    icon: Footprints,
    category: 'Waterfront Walk & Social Life',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Evening (promenade hour)',
    description:
      'The Nador corniche is the social heart of the city — a paved waterfront promenade that stretches along the Mediterranean coast and the edge of the Marchica lagoon. Lined with palm trees, benches, cafes, and restaurants, the corniche comes alive each evening as Nadoris emerge for the traditional paseo — families strolling, friends gathering at cafe terraces, couples watching the sunset over the lagoon, and children playing in the public spaces. The promenade has been significantly upgraded in recent years with improved lighting, landscaping, and pedestrian infrastructure. During summer, especially when the European diaspora returns, the corniche buzzes with energy late into the night.',
    insiderTip:
      'The evening promenade typically begins around 7 PM and peaks at 9-10 PM in summer. Walk the full length for the best people-watching and views. The cafes along the corniche serve excellent fresh juice (from 10 MAD) and coffee. Weekend evenings are liveliest, especially in July-August when Rif diaspora families return from Europe. The section near the municipal market is most animated.',
  },
  {
    name: 'Nador Fish Market (Marche aux Poissons)',
    icon: Fish,
    category: 'Market & Culinary',
    price: 'Free entry / Fish from 30 MAD/kg',
    duration: '45 minutes - 1.5 hours',
    bestTime: 'Early morning (6-9 AM)',
    description:
      'Nador fish market is one of the most authentic and vibrant in northern Morocco. Located near the port area, the market receives the daily catch from Mediterranean fishing boats — sardines, sea bream, sole, octopus, shrimp, swordfish, and seasonal specialties like bluefin tuna. The atmosphere in the early morning is electric: fishermen unloading boats, wholesalers negotiating by the crate, and retail buyers selecting the freshest specimens. Many locals buy their fish here and take it to nearby grill restaurants where the fish is cooked to order for a small fee (from 10-20 MAD). This buy-and-grill tradition is the best way to experience Nador extraordinary seafood freshness.',
    insiderTip:
      'Arrive between 6-8 AM for the best selection and atmosphere. The buy-and-grill system works like this: select your fish at the market (from 30 MAD/kg for sardines to from 120 MAD/kg for premium fish), then walk it to one of the nearby grill restaurants who will cook it with salad and bread (from 10-20 MAD grilling fee). This gets you a restaurant-quality fresh fish meal for a fraction of restaurant prices. Point and negotiate — prices are flexible.',
  },
];

/* ===============================================================
   DATA: BEACHES & COASTAL
   =============================================================== */

const beachesCoastal = [
  {
    name: 'Charrana Beach',
    icon: Waves,
    category: 'Mediterranean Beach',
    price: 'Free (parasol rental from 20 MAD)',
    duration: '3-5 hours',
    bestTime: 'June to September',
    description:
      'Charrana Beach is the most popular public beach near Nador, located on the Mediterranean coast approximately 20 km northwest of the city center, past the Marchica lagoon sand spit. The beach features golden sand, clear Mediterranean waters ideal for swimming, and a relaxed atmosphere that ranges from family-friendly during the day to social and lively in the evenings during summer. The beach stretches for several hundred meters with ample space even during peak season. Basic facilities include seasonal parasol and sunbed rentals, food vendors, and parking areas. The surrounding coastline features rocky sections and smaller hidden coves accessible by foot.',
    insiderTip:
      'Grand taxis from Nador to Charrana cost from 15-20 MAD per person (shared). The beach is busiest in July-August when Moroccan and European-based diaspora families descend. June and September offer warm water with significantly fewer crowds. Bring your own supplies (food, water, towels) as facilities are basic. The small coves on either side of the main beach are worth exploring for more privacy.',
  },
  {
    name: 'Cap des Trois Fourches',
    icon: Mountain,
    category: 'Dramatic Coastal Drive & Cliffs',
    price: 'Free (transport from 300-500 MAD)',
    duration: 'Half to full day',
    bestTime: 'Spring or autumn (clear visibility)',
    description:
      'Cap des Trois Fourches is arguably the most dramatic and least-visited coastal landscape in all of Morocco. This wild peninsula juts 20 km into the Mediterranean Sea north of Nador, ending in a series of three rocky forks (hence the name) that plunge vertically into the deep blue sea. The cape is a geological wonder of volcanic cliffs, sea stacks, natural arches, hidden coves with crystalline water, and a lighthouse perched at the peninsula tip. The road to the cape is an adventure in itself — a winding, partially paved track that climbs and descends through barren, windswept terrain with panoramic views at every turn. Virtually unknown to international tourism, Cap des Trois Fourches offers landscapes more reminiscent of Greece or Corsica than stereotypical Morocco.',
    insiderTip:
      'The road to the cape is rough in sections — a 4x4 is strongly recommended, especially the final 10 km. Hire a local driver who knows the road (from 300-500 MAD for a half-day from Nador). Bring all supplies — there is nothing at the cape. The hidden coves along the way have some of the clearest swimming water in Morocco but require scrambling down cliffs to reach. The cape tip lighthouse viewpoint is breathtaking. Allow at least 4 hours for the return drive with stops.',
  },
  {
    name: 'Ras El Ma Beach',
    icon: Waves,
    category: 'Coastal Beach',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Summer (June-September)',
    description:
      'Ras El Ma is a quieter beach alternative located along the Mediterranean coast, offering a stretch of sand and pebble shoreline with clear waters backed by low cliffs and scrubland. Less developed than Charrana, Ras El Ma attracts local families and those seeking a more peaceful beach experience. The waters are clean and suitable for swimming, with gentle waves typical of the sheltered eastern Mediterranean coast of Morocco. The beach has minimal commercial development — no large hotels or resort facilities — which preserves its natural character. Fishermen still launch small boats from sections of the shore, adding to the authentic Mediterranean fishing village atmosphere.',
    insiderTip:
      'Ras El Ma is ideal for travelers who prefer natural, undeveloped beaches over resort settings. Bring everything you need — shade, food, water, and towels. The best swimming is in the morning before afternoon winds pick up. The fishing boats beached on the shore make for atmospheric photography. A grand taxi from Nador costs from 20-30 MAD per person shared.',
  },
  {
    name: 'Marchica Sand Spit Beaches',
    icon: Sun,
    category: 'Lagoon & Sea Beaches',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Summer',
    description:
      'The narrow sand spit (Boucana) that separates the Marchica lagoon from the open Mediterranean offers a unique beach experience: you can swim in the calm, warm lagoon waters on one side or the open Mediterranean on the other, all within a few steps. The spit stretches for several kilometers and varies in width from a few dozen meters to several hundred. Parts of the sand spit are accessible by road and are being developed as part of the Marchica Med project, while other sections remain wild and secluded. The dual-water setting — placid lagoon versus gentle sea — makes this unlike any other beach in Morocco. The lagoon side is ideal for children and weak swimmers due to its shallow, calm water.',
    insiderTip:
      'The lagoon side is warm and shallow — perfect for families. The sea side has slightly cooler water and gentle waves for more adventurous swimmers. The most accessible sections are along the developed Marchica Med zones. For wilder stretches, you will need a 4x4 or be prepared to walk. Sunset from the sand spit, with the lagoon reflecting sky colors on one side and the open sea on the other, is spectacular.',
  },
];

/* ===============================================================
   DATA: CULTURE & EXCURSIONS
   =============================================================== */

const cultureExcursions = [
  {
    name: 'Melilla Day Trip (Spanish Enclave)',
    icon: Globe,
    category: 'Cross-Border Day Trip',
    price: 'From 10 MAD (taxi to border) / Free entry (passport required)',
    duration: 'Full day',
    bestTime: 'Year-round (avoid holiday rush)',
    description:
      'Melilla is a fascinating Spanish autonomous city on the Moroccan coast, separated from Nador by just 13 km and a border crossing at Beni Ensar. Stepping from Morocco into Melilla is one of the most surreal travel experiences in the Mediterranean — within minutes you transition from Riffian Berber culture to Spanish colonial architecture, tapas bars, and European shopping streets. Melilla modernist architecture is a highlight: the city center contains over 900 Art Nouveau and Art Deco buildings, including works by Enrique Nieto, a disciple of Gaudi. The old fortress (Melilla la Vieja) perches on a rocky peninsula with centuries of fortifications, tunnels, and museums. Duty-free shopping is another major draw, with electronics, alcohol, and designer goods at prices below standard European retail.',
    insiderTip:
      'A grand taxi from Nador to the Beni Ensar border costs from 10 MAD per person (shared). The border crossing can take 30 minutes to 2 hours — mornings are generally faster. Bring your passport (EU/Schengen visa required for some nationalities — check before traveling). Inside Melilla, everything is walkable or accessible by local bus. The modernist architecture is concentrated along Avenida Juan Carlos I. The old fortress is free to explore. Tapas bars in the center offer generous portions (from 3-5 EUR per tapa). Stock up on duty-free goods before returning.',
  },
  {
    name: 'Mount Gurugu',
    icon: Mountain,
    category: 'Hiking & Panoramic Views',
    price: 'Free',
    duration: '3-5 hours (hike)',
    bestTime: 'Spring or autumn',
    description:
      'Mount Gurugu (Jebel Gurugu) rises to approximately 900 meters behind the city of Nador, forming a dramatic green backdrop to the urban landscape and the Marchica lagoon below. The mountain is part of the volcanic Rif chain and is covered in Mediterranean scrubland, pine forests, and pockets of dense vegetation. From the summit and various viewpoints along the hiking trails, you are rewarded with extraordinary panoramic views: the entire Marchica lagoon spread below like a mirror, the city of Nador, the Mediterranean Sea stretching to the horizon, Melilla, and the jagged coastline toward Cap des Trois Fourches. The mountain has trails of varying difficulty, from gentle walks through the lower forests to more challenging routes to the summit.',
    insiderTip:
      'The most accessible trail starts from the southern side and takes 2-3 hours to reach the summit viewpoint. Start early in the morning to avoid heat. Bring plenty of water — there are no facilities on the mountain. The pine forests on the lower slopes offer welcome shade. For the best views, aim for clear mornings when the lagoon creates perfect reflections. A local guide is helpful but not essential if you follow the main trail. A taxi to the trailhead costs from 30-40 MAD.',
  },
  {
    name: 'Riffian Cuisine Experience',
    icon: UtensilsCrossed,
    category: 'Culinary Heritage',
    price: 'From 30 MAD (local restaurants)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Nador is the gateway to Riffian Berber cuisine, a culinary tradition distinct from the more familiar Moroccan cooking of Marrakech or Fes. Riffian food is characterized by its simplicity, freshness, and Mediterranean influence. Key dishes include berkoukes (hand-rolled pasta pellets in a vegetable or meat broth — the Riffian equivalent of couscous), harcha (semolina flatbread), rfissa with lentils and chicken, Mediterranean-fresh grilled fish prepared with minimal seasoning to let the quality shine, and chermoula-marinated seafood. Bread is central to every meal, often baked in communal wood-fired ovens. The cuisine reflects the Rif dual identity — Berber mountain tradition meets Mediterranean coastal bounty.',
    insiderTip:
      'Ask locals for the best berkoukes restaurant — this is the quintessential Riffian dish and varies greatly in quality. The buy-and-grill fish market experience (see fish market entry) is the best seafood meal in Nador. For traditional Riffian home cooking, inquire at your accommodation about family-run restaurants in residential neighborhoods — the best food is rarely on the main streets. Bread from wood-fired ovens (from 2 MAD per loaf) is leagues above commercial bakeries.',
  },
  {
    name: 'Beni Ensar Port & Waterfront',
    icon: Anchor,
    category: 'Port Town & Gateway',
    price: 'Free to explore',
    duration: '1-2 hours',
    bestTime: 'Morning or evening',
    description:
      'Beni Ensar is the port town located 13 km east of Nador, serving as both the ferry terminal for boats from Spain (Almeria and Motril) and the Moroccan side of the border crossing with Melilla. The small town has its own character — a working fishing port, waterfront cafes, and the bustling border zone where Moroccan and Spanish worlds collide. The port promenade offers views across to Melilla fortress and the harbor. During summer, the port sees a massive influx of Moroccans living in Europe returning home for holidays, with ferries disgorging thousands of passengers laden with European goods. The atmosphere during this period — known as Operation Marhaba — is chaotic, emotional, and uniquely Moroccan.',
    insiderTip:
      'Beni Ensar is the departure point for the Melilla border crossing. The border area is extremely busy during Operation Marhaba (June-September) when diaspora Moroccans return for holidays — expect long waits. Outside this period, the border crossing is faster. The waterfront cafes offer views of Melilla across the water. If arriving by ferry from Spain, taxis to Nador center cost from 20-30 MAD. The fishing port in the early morning is atmospheric.',
  },
  {
    name: 'Rif Mountain Excursions',
    icon: Mountain,
    category: 'Mountain & Nature',
    price: 'From 400-700 MAD (taxi day hire)',
    duration: 'Full day',
    bestTime: 'Spring (wildflowers) or autumn',
    description:
      'Nador serves as a base for excursions into the western Rif Mountains, one of Morocco most rugged and least-visited mountain ranges. The Rif rises sharply from the Mediterranean coast, reaching peaks above 2,000 meters, and is characterized by deep gorges, cedar and pine forests, terraced agriculture, and traditional Berber villages clinging to steep hillsides. Day trips from Nador can reach the dramatic landscapes around Driouch, the forests above Selouane, and the foothills where Riffian Berber culture remains deeply traditional. The mountain scenery is spectacular — a world away from the coastal city — with spring wildflowers and autumn colors providing the most dramatic backdrops.',
    insiderTip:
      'Hire a local driver who knows the mountain roads (from 400-700 MAD for a full day). The roads can be narrow and winding — experienced local drivers are essential. Bring warm layers as mountain temperatures are significantly lower than the coast. Pack a picnic from Nador market. The Berber villages are welcoming but conservative — dress modestly and ask before photographing people. Spring (March-May) brings extraordinary wildflower displays.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Free Corniche & Lagoon Views', icon: Footprints, description: 'The corniche promenade, Marchica lagoon viewpoints, and all city beaches are completely free. Nador best experiences — the lagoon at sunset, the evening paseo, the coastal scenery — cost nothing.', savings: 'Free — Nador finest attractions' },
  { tip: 'Fish Market Buy-and-Grill', icon: Fish, description: 'Buy fresh fish at the market (from 30 MAD/kg for sardines) and have it grilled at a nearby restaurant (from 10-20 MAD fee). A full fresh fish meal for from 40-60 MAD vs. restaurant prices of from 100-200 MAD.', savings: 'Save from 60-140 MAD per meal' },
  { tip: 'Shared Grand Taxi to Melilla Border', icon: Globe, description: 'Grand taxi from Nador to Beni Ensar border costs from 10 MAD per person shared. Private transfers charge from 100-150 MAD. Once in Melilla, everything is walkable.', savings: 'Save from 90-140 MAD on transport' },
  { tip: 'Beach Supplies from Nador Market', icon: ShoppingBag, description: 'Buy beach food, water, and snacks at Nador market before heading to the coast. A full day beach picnic from 30-40 MAD vs. beach vendor prices of from 80-120 MAD.', savings: 'Save from 50-80 MAD per beach day' },
  { tip: 'Cap des Trois Fourches Group Trip', icon: Mountain, description: 'The 4x4 taxi to Cap des Trois Fourches costs from 300-500 MAD for the car. Split between 4-6 travelers, that is from 50-125 MAD per person vs. organized tours at from 500+ MAD per person.', savings: 'Save from 375-450 MAD vs. tour' },
  { tip: 'Local Transport Is Cheap', icon: MapPin, description: 'Petit taxis within Nador cost from 5-15 MAD for most trips. Grand taxis to beaches and surrounding areas from 10-30 MAD per person shared. No need for rental cars for city exploration.', savings: 'Save from 200-400 MAD/day vs. car rental' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Diaspora Summer Is Special', icon: Heart, description: 'July-August in Nador has a unique energy when hundreds of thousands of Rif Moroccans living in Europe return for summer holidays. The city transforms — streets bustle late into the night, restaurants are packed, and the atmosphere is celebratory. Prices rise but the cultural experience is unmatched.' },
  { tip: 'Riffian Berber Identity', icon: Globe, description: 'Nador is deeply Riffian Berber. Many locals speak Tarifit (Riffian Berber) as a first language, with Moroccan Arabic and sometimes Spanish, French, or Dutch as second languages. A few Tarifit greetings (azul = hello) are deeply appreciated and open doors.' },
  { tip: 'Melilla Border Timing', icon: Clock, description: 'The Beni Ensar border crossing to Melilla is busiest on weekends, Mondays, and during summer. For the fastest crossing, go early on a weekday morning (8-9 AM). Carry your passport — no alternatives accepted. EU citizens get stamped through quickly; others should check visa requirements.' },
  { tip: 'Cap Trois Fourches Road Condition', icon: AlertTriangle, description: 'The road to Cap des Trois Fourches deteriorates significantly in the last 10 km. After rain, sections can become impassable even for 4x4 vehicles. Check conditions locally before setting out. Never attempt it in a standard car. The scenery is worth the effort.' },
  { tip: 'Marchica Development Is Ongoing', icon: Sparkles, description: 'The Marchica Med development project is transforming the lagoon waterfront over multiple phases. Some areas are complete with modern promenades and facilities; others are active construction zones. Check locally which zones are open and accessible — the situation changes regularly.' },
  { tip: 'Wind Patterns Matter', icon: Wind, description: 'The Mediterranean coast around Nador experiences strong winds, especially the Levante (easterly) and Poniente (westerly). These affect beach conditions, Cap Trois Fourches visits, and even the Melilla border crossing area. Check wind forecasts before planning coastal activities.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Nador known for in Morocco?', answer: 'Nador is known for the Marchica lagoon (Mar Chica) — one of the largest in the Mediterranean — its Rif coast position with Mediterranean beaches, the dramatic Cap des Trois Fourches peninsula, proximity to the Spanish city of Melilla, Mount Gurugu hiking, a vibrant fish market, the corniche promenade, and authentic Riffian Berber culture. It is a major hub for Morocco Rif diaspora community in Europe.' },
  { question: 'Can you visit Melilla from Nador?', answer: 'Yes, Melilla is accessible through the Beni Ensar border crossing, 13 km from Nador center. You need a valid passport (plus Schengen visa if required). Grand taxi to the border costs from 10 MAD shared. The crossing takes 30 minutes to 2 hours depending on traffic. Melilla offers Spanish architecture (900+ Art Nouveau buildings), duty-free shopping, tapas, and the old fortress.' },
  { question: 'How do I get to Nador?', answer: 'Nador International Airport (NDR) has domestic flights from Casablanca and seasonal European connections. By road: Oujda is 150 km east, Al Hoceima 160 km west, Fes 330 km southwest. CTM and Supratours buses serve these routes. Ferries from Almeria and Motril (Spain) arrive at Beni Ensar port, 13 km from center. No railway currently serves Nador.' },
  { question: 'What is the Marchica lagoon?', answer: 'Marchica (Mar Chica) is one of the Mediterranean largest lagoons — approximately 25 km long with over 115 sq km of surface area. The shallow, calm lagoon is separated from the sea by a narrow sand spit. It is the focus of the Marchica Med development project creating marinas, resorts, and eco-tourism. The lagoon supports diverse birdlife including flamingos and herons.' },
  { question: 'How many days do you need in Nador?', answer: 'Two to three days is ideal. Day 1: corniche promenade, fish market, Marchica lagoon exploration. Day 2: Cap des Trois Fourches coastal drive with beach stops. Day 3: Melilla day trip or Mount Gurugu hike. One full day covers the lagoon, corniche, and fish market essentials.' },
  { question: 'What is the best time to visit Nador?', answer: 'June to September for beaches (25-32 degrees, warm sea). April-May and October for Cap Trois Fourches and hiking (pleasant temperatures, fewer crowds). July-August are busiest with the returning European diaspora. Winter is mild (10-16 degrees) with occasional rain. The wind can affect coastal activities year-round.' },
  { question: 'Is Nador worth visiting?', answer: 'Yes, for travelers seeking authentic Mediterranean Morocco beyond the tourist circuit. The Marchica lagoon is a natural wonder, Cap des Trois Fourches has some of the most dramatic coastal scenery in the country, the Melilla day trip is a surreal border-crossing experience, and Riffian culture offers a distinct Berber identity found nowhere else. Nador is raw, real, and rewarding.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/oujda-guide', icon: MapPin, title: 'Oujda Guide', description: 'Eastern Morocco capital with Rai music, medina, Saidia beach, and Algerian border culture.' },
  { href: '/al-hoceima-guide', icon: MapPin, title: 'Al Hoceima Guide', description: 'Rif coast gem with stunning beaches, national park, and authentic Berber culture.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches and hidden coves along the Atlantic and Mediterranean coasts.' },
  { href: '/morocco-budget-guide', icon: Lightbulb, title: 'Morocco Budget Guide', description: 'How to explore Morocco affordably with real prices and money-saving strategies.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, including the Mediterranean coast.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function NadorGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Nador Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Complete Guide
            <br className="hidden md:block" /> to Nador
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Mediterranean lagoon city on Morocco&apos;s Rif coast, with dramatic cape drives,
            Spanish enclave day trips, and authentic Riffian Berber culture far from the tourist trail.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Nador: Morocco&apos;s Mediterranean Lagoon City
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Nador spreads along the western shore of Marchica, one of the largest lagoons in the
                Mediterranean, with the Rif Mountains rising behind and the open sea shimmering beyond
                a narrow sand spit. This is Morocco at its most Mediterranean — a city where fishing
                boats bob in harbors, the evening corniche promenade is a sacred social ritual, and the
                cuisine pivots on whatever the morning catch brought in. Yet Nador is also deeply
                Riffian, anchored in the Berber culture of the Rif Mountains that have shaped the
                region for millennia.
              </p>
              <p>
                The city itself is a working port town without the polished tourist infrastructure of
                Marrakech or Essaouira, and that is precisely its appeal. Nador offers raw, authentic
                experiences: a fish market where you buy the morning catch and have it grilled on the
                spot; a corniche where entire families promenade at sunset; the surreal experience of
                crossing a land border into Melilla, a Spanish city on African soil; and the wild,
                almost otherworldly coastal scenery of Cap des Trois Fourches, where volcanic cliffs
                plunge into crystalline Mediterranean waters.
              </p>
              <p>
                This guide covers everything you need to explore Nador and its extraordinary
                surroundings: the Marchica lagoon, Mediterranean beaches, the dramatic Cap des Trois
                Fourches peninsula, the Melilla day trip experience, Mount Gurugu hiking, Riffian
                cuisine, and practical tips for navigating a city that few international travelers
                have discovered but that rewards adventurous visitors richly.
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
            Top 12 Nador Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From lagoon sunsets to Spanish enclave day trips, these define a visit to the Rif coast.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Marchica Lagoon (Mar Chica)', price: 'Free', time: '2-3 hours', category: 'Natural Wonder' },
              { rank: 2, name: 'Cap des Trois Fourches Drive', price: 'From 300 MAD taxi', time: 'Half-full day', category: 'Coastal Adventure' },
              { rank: 3, name: 'Melilla Day Trip (Spain)', price: 'From 10 MAD taxi', time: 'Full day', category: 'Cross-Border' },
              { rank: 4, name: 'Fish Market Buy-and-Grill', price: 'From 40 MAD total', time: '1-1.5 hours', category: 'Culinary' },
              { rank: 5, name: 'Corniche Promenade', price: 'Free', time: '1-2 hours', category: 'Local Life' },
              { rank: 6, name: 'Charrana Beach', price: 'Free', time: '3-5 hours', category: 'Beach' },
              { rank: 7, name: 'Mount Gurugu Hike', price: 'Free', time: '3-5 hours', category: 'Hiking' },
              { rank: 8, name: 'Riffian Cuisine Tasting', price: 'From 30 MAD', time: '1-2 hours', category: 'Food & Culture' },
              { rank: 9, name: 'Marchica Sand Spit Beaches', price: 'Free', time: '2-4 hours', category: 'Beach' },
              { rank: 10, name: 'Ras El Ma Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
              { rank: 11, name: 'Beni Ensar Port & Waterfront', price: 'Free', time: '1-2 hours', category: 'Port Town' },
              { rank: 12, name: 'Rif Mountain Excursion', price: 'From 400 MAD taxi', time: 'Full day', category: 'Mountains' },
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

      {/* -- Lagoon & Waterfront -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Lagoon &amp; Waterfront
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Marchica lagoon and the corniche promenade are the soul of Nador — where the city
            meets the Mediterranean and daily life unfolds against a stunning natural backdrop.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The lagoon and corniche are free to explore year-round. Best visited at sunset for golden light.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {lagoonWaterfront.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Beaches & Coastal -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beaches &amp; Coastal Attractions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From popular sandy stretches to the wild, volcanic scenery of Cap des Trois Fourches,
            Nador coastline offers dramatic variety within a short drive.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach season runs June to September. Cap des Trois Fourches is accessible year-round (weather permitting).
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {beachesCoastal.map((item) => {
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

      {/* -- Culture & Excursions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Food &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From crossing into a Spanish city on African soil to hiking Rif peaks and savoring
            Riffian berkoukes, Nador surroundings offer experiences found nowhere else.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Day trips require grand taxis or hired drivers. The Melilla crossing requires a valid passport.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureExcursions.map((item) => {
              const CultureIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultureIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Nador
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Nador offers excellent value for money. These strategies help you experience everything without overspending.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Nador
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that transforms a good trip into an unforgettable one on the Rif coast.
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

      {/* -- Sample 3-Day Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 3-Day Nador Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Lagoon, cape, and cross-border adventure — the full Nador experience.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Marchica Lagoon, Fish Market &amp; Corniche
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at the fish market early (6-8 AM) for the day catch. Buy fresh fish (from
                      30 MAD/kg for sardines) and have it grilled at an adjacent restaurant (from 10-20
                      MAD grilling fee) for the freshest breakfast you have ever had. Explore the market
                      atmosphere as fishermen unload boats and negotiate sales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Explore the Marchica lagoon — drive or taxi along the western shore for elevated
                      views of this vast Mediterranean lagoon. Visit the developed Marchica Med sections
                      for the modern promenade and cafes. In summer, swim from the sand spit beaches
                      with lagoon on one side and open sea on the other.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Join the evening corniche promenade — walk the waterfront as the sun sets over the
                      lagoon. Dinner at a local restaurant featuring Riffian berkoukes or fresh grilled
                      fish (from 40-80 MAD). Mint tea at a corniche cafe. Estimated Day 1 cost: from
                      80-200 MAD.
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
                  Day 2: Cap des Trois Fourches &amp; Beaches
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hire a 4x4 taxi for the Cap des Trois Fourches drive (from 300-500 MAD for the
                      car). Depart early and head northwest along the peninsula. Stop at viewpoints as
                      the volcanic cliffs and turquoise Mediterranean waters unfold. Explore hidden coves
                      accessible by scrambling — some have the clearest water in Morocco.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Reach the cape lighthouse for the dramatic tip-of-peninsula views. Picnic lunch
                      (bring supplies from Nador, from 20-30 MAD). Return via Charrana Beach for an
                      afternoon swim (free, parasol from 20 MAD). The clear Mediterranean waters are
                      warmest from July to September (23-26 degrees).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Nador for a seafood dinner at a waterfront restaurant (from 60-100 MAD).
                      Evening corniche walk. Estimated Day 2 cost: from 200-450 MAD (including taxi hire).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 3: Melilla Day Trip or Mount Gurugu
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning (Option A: Melilla)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi to Beni Ensar border (from 10 MAD). Cross into Melilla (bring passport,
                      30 min - 2 hours wait). Explore the old fortress (Melilla la Vieja, free), walk the
                      Art Nouveau streets designed by Enrique Nieto, and browse duty-free shops. Tapas
                      lunch at a Spanish restaurant (from 5-10 EUR per tapa).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning (Option B: Mount Gurugu)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Taxi to the Gurugu trailhead (from 30-40 MAD). Hike through pine forests to the
                      900 m summit (2-3 hours up). Panoramic views of the Marchica lagoon, Nador, Melilla,
                      and the Mediterranean. Pack water and snacks. Return by early afternoon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Nador for a final dinner and corniche walk. Or catch an evening bus
                      to your next destination: Oujda (from 50 MAD, 2.5 hours), Al Hoceima (from 40 MAD,
                      2.5 hours), or Fes (from 120 MAD, 5.5 hours). Estimated Day 3 cost: from 100-300
                      MAD (Melilla) or from 80-200 MAD (Gurugu).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-550 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Fish market meals, shared taxis, free beaches and lagoon, Gurugu hike</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 700-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private taxi to cape, restaurant meals, Melilla day trip, beach activities</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private guide-driver, best restaurants, Melilla shopping, Rif excursion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring the Rif Coast
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
            Ready to Discover Nador?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From one of the Mediterranean largest lagoons to volcanic cape drives and Spanish enclave
            day trips, Nador offers the raw, authentic Morocco that adventurous travelers crave.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/oujda-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Oujda Guide
            </Link>
            <Link
              href="/al-hoceima-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Al Hoceima Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
