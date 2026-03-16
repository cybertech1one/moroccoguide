import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Compass,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  Sun,
  Camera,
  Footprints,
  ArrowRight,
  Lightbulb,
  Eye,
  Anchor,
  Wind,
  UtensilsCrossed,
  Waves,
  Bed,
  Plane,
  Map,
  Calendar,
  CloudSun,
  Bird,
  Tent,
  Car,
  Thermometer,
  Mountain,
  CircleDollarSign,
  HelpCircle,
  Globe,
  Sunset,
  Navigation,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Dakhla City Guide | Kitesurfing Paradise & Saharan Lagoon | Morocco Travel Guide',
  description:
    'Discover Dakhla, Morocco\'s southern jewel and world-class kitesurfing paradise. Explore the 40km Atlantic lagoon, White Dune, oyster farms, flamingo colonies, desert excursions, and pristine beaches on this remote Saharan peninsula. Complete guide with kite schools, restaurants, eco-camps, and travel tips.',
  keywords: [
    'Dakhla Morocco',
    'Dakhla kitesurfing',
    'Dakhla lagoon',
    'Dakhla kitesurf',
    'Morocco kitesurfing',
    'Dakhla Attitude',
    'Dakhla White Dune',
    'La Dune Blanche Dakhla',
    'Dakhla windsurfing',
    'Dakhla oyster farms',
    'Dakhla eco tourism',
    'Dakhla flamingos',
    'Dakhla desert',
    'Ocean Vagabond Dakhla',
    'Dakhla flights',
    'Dakhla travel guide',
    'Dakhla accommodation',
    'Dakhla seafood',
    'Dakhla PK25',
    'southern Morocco travel',
  ],
  openGraph: {
    title: 'Dakhla City Guide - Morocco\'s Kitesurfing Paradise',
    description:
      'Your complete guide to Dakhla, Morocco\'s remote Saharan peninsula with a world-class kitesurfing lagoon, pristine desert landscapes, flamingo colonies, and the freshest seafood in the country.',
    url: 'https://citytoursmorocco.com/dakhla',
    images: [
      {
        url: '/images/hero-legzira.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Dakhla lagoon with turquoise waters meeting golden Saharan sand dunes',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/dakhla' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  '@id': 'https://citytoursmorocco.com/dakhla',
  name: 'Dakhla',
  description:
    'Dakhla is Morocco\'s remote southern jewel, a kitesurfing paradise perched on a narrow peninsula jutting into the Atlantic Ocean. With a 40km flat-water lagoon, year-round trade winds, pristine desert landscapes, and emerging eco-tourism, Dakhla is one of the last great undiscovered destinations on Earth.',
  url: 'https://citytoursmorocco.com/dakhla',
  touristType: ['Adventure tourism', 'Kitesurfing', 'Eco-tourism', 'Desert tourism', 'Water sports'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.6848,
    longitude: -15.957,
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Cities', item: 'https://citytoursmorocco.com/cities' },
      { '@type': 'ListItem', position: 3, name: 'Dakhla', item: 'https://citytoursmorocco.com/dakhla' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   KITESURFING SPOTS DATA
   ═══════════════════════════════════════════════════════════════ */

const kitesurfSpots = [
  {
    name: 'Dakhla Lagoon (Main Spot)',
    conditions: 'Flat water, waist-deep, constant side-shore wind',
    level: 'All levels (perfect for beginners)',
    description:
      'The main Dakhla lagoon is one of the most extraordinary kitesurfing spots on the planet. Stretching over 40 kilometers between the peninsula and the mainland, this vast body of water offers something almost unheard of in the kitesurfing world: enormous expanses of flat, shallow water with a consistent, clean side-shore trade wind blowing 15-25 knots for approximately 300 days per year. The shallow sections, some barely knee-deep for hundreds of meters, make it the safest place in the world to learn kitesurfing &mdash; if you drop your kite, you simply stand up and relaunch. For advanced riders, the deeper sections of the lagoon provide silky-smooth flat water for freestyle and foiling, while the lagoon mouth where it meets the Atlantic offers small, clean swells for wave riding.',
    windDirection: 'North / North-Northeast (side-shore to the lagoon)',
    bestMonths: 'March through November (strongest April-September)',
  },
  {
    name: 'Speed Spot (PK25 Area)',
    conditions: 'Ultra-flat water, shallow, nuclear wind',
    level: 'Intermediate to Advanced',
    description:
      'Located approximately 25 kilometers south of Dakhla city (hence the name PK25, for "Point Kilom&egrave;trique 25"), this section of the lagoon is where the trade wind funnels between the peninsula and the mainland, creating a venturi effect that amplifies wind speeds by 5-10 knots compared to the main lagoon. The water here is pancake-flat and often only shin-deep, creating ideal conditions for speed runs, freestyle tricks, and kite foiling. This spot has hosted multiple speed kitesurfing world record attempts, and on a strong wind day, the sight of dozens of kiters blasting across the mirror-flat water at 40+ knots is genuinely thrilling. Most of the major kite camps are clustered around PK25, making it the epicenter of Dakhla&apos;s kitesurfing scene.',
    windDirection: 'North-Northeast (amplified by venturi effect)',
    bestMonths: 'April through October (peak wind season)',
  },
  {
    name: 'White Dune Spot',
    conditions: 'Small waves, cross-shore wind, scenic',
    level: 'Intermediate to Advanced',
    description:
      'Near the iconic White Dune (La Dune Blanche), this spot offers a completely different kitesurfing experience. Here, the lagoon meets small ocean swells filtering through the lagoon entrance, creating gentle, rolling waves perfect for wave-riding with a kite. The scenery is extraordinary &mdash; you ride against a backdrop of brilliant white sand dunes rising from turquoise water, with flamingos feeding in the shallows nearby. The wind here tends to be cross-shore, requiring good upwind skills. This is not a beginner spot, but for intermediate and advanced riders, it offers one of the most visually stunning kite sessions imaginable.',
    windDirection: 'Cross-shore (requires upwind ability)',
    bestMonths: 'March through November',
  },
  {
    name: 'Ocean Spots (Atlantic Side)',
    conditions: 'Open ocean swells, strong wind, waves 1-3 meters',
    level: 'Advanced only',
    description:
      'The Atlantic-facing side of the Dakhla peninsula offers powerful wave kitesurfing for experienced riders. Several breaks along the coast produce clean, consistent swells in the 1-3 meter range, with the trade wind blowing side-offshore on the western shore. These spots are uncrowded &mdash; often you will have an entire beach break to yourself &mdash; and the combination of warm water, consistent swell, and strong wind makes Dakhla one of the best wave-kiting destinations in the world. Access to ocean spots typically requires a 4x4 vehicle, and most kite camps organize guided excursions to the best breaks depending on conditions.',
    windDirection: 'Side-offshore on the Atlantic coast',
    bestMonths: 'October through April (best swell season)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   KITE SCHOOLS DATA
   ═══════════════════════════════════════════════════════════════ */

const kiteSchools = [
  {
    name: 'Ocean Vagabond Dakhla',
    style: 'Premium camp with international instructors',
    price: '500-800 MAD per lesson (group), 1,200-1,500 MAD (private)',
    description:
      'One of the most established and respected kite operations in Dakhla, Ocean Vagabond runs a beautifully designed beachfront camp at PK25 with a restaurant, bar, equipment rental, and multilingual IKO-certified instructors. Their teaching methodology is excellent, using radio helmets so instructors can coach you in real-time from the beach while you ride. They also offer SUP, surf trips, and desert excursions. The on-site restaurant is one of the best places to eat on the lagoon, with fresh seafood and Moroccan-European fusion cuisine.',
    equipment: 'Duotone and North kites, latest models. Full rental fleet available.',
    languages: 'English, French, Spanish, Arabic',
  },
  {
    name: 'Dakhla Attitude',
    style: 'All-inclusive kite resort',
    price: '600-800 MAD per lesson (group), 1,400 MAD (private)',
    description:
      'Dakhla Attitude is the flagship kite resort of the region and arguably the most complete kitesurfing facility in Africa. Located directly on the lagoon at PK25, it offers an all-inclusive experience: accommodation in stylish bungalows, a large restaurant, yoga studio, spa, and a professional kite center with IKO-certified instructors. The shallow lagoon directly in front of the camp is ideal for beginners, while a short boat ride takes advanced riders to deeper flat-water areas. Dakhla Attitude also organizes cultural excursions, fishing trips, and desert tours, making it perfect for mixed groups where not everyone kites.',
    equipment: 'Core and Duotone kites, large rental fleet. Board storage available.',
    languages: 'French, English, Spanish, German, Arabic',
  },
  {
    name: 'Dakhla Club',
    style: 'Boutique kite camp with personal coaching',
    price: '500-700 MAD per lesson (group), 1,200 MAD (private)',
    description:
      'A smaller, more intimate kite camp that emphasizes personal coaching and a relaxed atmosphere. Dakhla Club limits the number of students per instructor to ensure quality progression. The camp has a loyal following of returning kiters who appreciate the family-like vibe and the experienced coaching staff. Located on a quieter stretch of the lagoon, it offers more space on the water than the busier PK25 cluster. The on-site restaurant serves excellent Moroccan home cooking, and the accommodations, while simpler than Dakhla Attitude, are comfortable and right on the water.',
    equipment: 'Naish and Cabrinha kites. Good rental selection.',
    languages: 'French, English, Arabic',
  },
  {
    name: 'KiteBo Dakhla',
    style: 'Budget-friendly with strong community vibe',
    price: '500-600 MAD per lesson (group), 1,000 MAD (private)',
    description:
      'KiteBo is the go-to choice for budget-conscious kiters and younger travelers who want quality instruction without the premium price tag. The camp has a fantastic social atmosphere, with communal dinners, bonfires on the beach, and a genuine sense of kitesurfing community. Instruction is IKO-certified and the teaching flat-water area is superb. They also offer package deals combining accommodation, lessons, and meals that represent exceptional value. The camp frequently attracts a fun international crowd of backpackers, digital nomads, and kite-obsessed travelers.',
    equipment: 'Ozone and Cabrinha kites. Rental available.',
    languages: 'French, English, Spanish',
  },
];

/* ═══════════════════════════════════════════════════════════════
   OTHER WATER SPORTS DATA
   ═══════════════════════════════════════════════════════════════ */

const otherWaterSports = [
  {
    name: 'Windsurfing',
    description:
      'The same conditions that make Dakhla a kitesurfing paradise also make it one of the finest windsurfing destinations in the world. The consistent trade wind, flat lagoon water, and warm temperatures create textbook windsurfing conditions from March through November. Several camps offer windsurf equipment rental and instruction, though the sport has been somewhat overshadowed by kitesurfing in recent years. The PK25 area is the prime windsurfing zone, with the speed spot offering ideal conditions for slalom sailing and speed attempts. Experienced windsurfers will find Dakhla comparable to destinations like Fuerteventura or Tarifa, but with far fewer people on the water.',
    bestFor: 'Slalom, speed sailing, freestyle, learning',
    availability: 'Equipment rental at major camps: 400-600 MAD/day',
  },
  {
    name: 'Stand-Up Paddleboarding (SUP)',
    description:
      'The calm, shallow lagoon provides dreamy conditions for SUP. On low-wind mornings or during the occasional calm spell, the lagoon becomes a vast, glass-flat mirror reflecting the Saharan sky &mdash; paddling across it at sunrise is one of the most meditative experiences in Morocco. Several camps offer SUP boards for guest use, and guided SUP tours explore the quieter reaches of the lagoon where you might encounter flamingos, herons, and even dolphins. SUP yoga sessions have become increasingly popular at the larger resorts, taking advantage of the flat water and extraordinary natural setting.',
    bestFor: 'Sunrise sessions, wildlife spotting, yoga, calm-day activity',
    availability: 'Included at most camps or 200-300 MAD/day rental',
  },
  {
    name: 'Surfing',
    description:
      'The Atlantic side of the Dakhla peninsula receives consistent swell from the North Atlantic, producing quality waves that are virtually uncrowded. Several point breaks and beach breaks along the coast offer waves ranging from mellow longboard-friendly rollers to punchy, hollow barrels. The best surfing is typically from October through April when the North Atlantic swell machine is firing. Most kite camps can arrange surf excursions with 4x4 transport to the best breaks. The water temperature remains comfortable year-round (18-22 degrees Celsius), and the isolation of the breaks means you may surf perfect waves with nobody else in the lineup &mdash; a rarity in the modern surfing world.',
    bestFor: 'Uncrowded waves, point breaks, surf excursions',
    availability: 'Surf trips organized by camps: 400-600 MAD per excursion',
  },
  {
    name: 'Sea Kayaking',
    description:
      'Kayaking the Dakhla lagoon offers a slow-paced, intimate way to explore the vast waterway and its wildlife. Guided kayak tours typically head to the quieter southern reaches of the lagoon, where flamingo colonies wade in the shallows, ospreys hunt from above, and the silence of the Sahara envelops you. The calm, shallow water makes kayaking accessible to all fitness levels, and the experience of gliding through turquoise water with golden dunes on one side and the peninsula on the other is profoundly beautiful. Some tours combine kayaking with a visit to the oyster farms, where you can taste freshly shucked oysters directly from the growing beds.',
    bestFor: 'Wildlife viewing, oyster farm visits, calm exploration',
    availability: 'Guided tours: 300-500 MAD per person (2-3 hours)',
  },
  {
    name: 'Fishing',
    description:
      'The waters around Dakhla are among the richest fishing grounds in the Atlantic Ocean. The cold Canary Current upwelling brings nutrients that support an extraordinary biomass of fish, making this region one of the most productive fisheries on Earth. Sport fishing excursions target species including sea bass, meagre (corbina), dentex, grouper, amberjack, and even bluefin tuna on offshore trips. Shore fishing from the peninsula is also productive, with local fishermen happy to share techniques and spots. The Dakhla fish market is one of the most spectacular in Morocco, with catches that would cost a fortune in European markets sold for remarkably little.',
    bestFor: 'Sport fishing, shore fishing, deep-sea excursions',
    availability: 'Fishing trips: 600-1,500 MAD per person depending on boat type',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WILDLIFE & NATURE DATA
   ═══════════════════════════════════════════════════════════════ */

const wildlifeHighlights = [
  {
    name: 'Greater Flamingos',
    description:
      'The Dakhla lagoon is one of the most important wintering sites for greater flamingos on the Atlantic coast of Africa. Colonies of hundreds, sometimes thousands, of these elegant pink birds feed in the shallow reaches of the lagoon, creating a surreal visual contrast against the turquoise water and golden desert backdrop. The flamingos are present year-round, with peak numbers during the winter months (November through March) when European and North African populations migrate south. The best viewing points are in the southern lagoon, accessible by kayak, SUP, or boat tour. Witnessing a flamingo flock take flight from the lagoon at sunset, turning the sky pink against the Saharan horizon, is one of Dakhla&apos;s most unforgettable natural spectacles.',
    bestViewing: 'Southern lagoon, November through March (present year-round)',
  },
  {
    name: 'Dolphins',
    description:
      'Atlantic bottlenose dolphins and common dolphins are regular visitors to the waters around Dakhla, sometimes entering the lagoon itself to hunt fish. Sightings are not guaranteed but are frequent enough that many kitesurf camps offer dolphin-watching boat trips. The most common encounters occur near the lagoon mouth where it meets the open Atlantic, where dolphins hunt in the nutrient-rich currents. Seeing dolphins leap and play in the turquoise water with the Saharan landscape as a backdrop is a quintessentially Dakhla experience &mdash; the improbable meeting of desert and ocean wildlife.',
    bestViewing: 'Lagoon mouth area, year-round (more frequent in spring and autumn)',
  },
  {
    name: 'Mediterranean Monk Seals',
    description:
      'One of the rarest marine mammals on Earth, the Mediterranean monk seal maintains a small but critical population along the Atlantic coast near Dakhla. Estimated at fewer than 800 individuals worldwide, the monk seal colony in the Cap Blanc / Ras Nouadhibou area (straddling the Morocco-Mauritania border) is the largest remaining breeding colony of this critically endangered species. Sightings near Dakhla itself are uncommon but do occur, particularly along the remote southern coastline. The presence of monk seals in these waters underscores the ecological importance of the Dakhla region and the need for continued conservation efforts.',
    bestViewing: 'Remote southern coast (rare sightings; dedicated wildlife tours available)',
  },
  {
    name: 'Migratory Birds',
    description:
      'Dakhla sits on the East Atlantic Flyway, one of the world&apos;s great bird migration routes connecting European breeding grounds with African wintering sites. The lagoon and surrounding wetlands serve as a critical stopover and wintering habitat for dozens of migratory species, including ospreys, spoonbills, Caspian terns, grey herons, Audouin&apos;s gulls, dunlins, sanderlings, and various species of plovers and sandpipers. For birdwatchers, Dakhla offers the rare opportunity to observe large concentrations of migratory waders in a stunning, undeveloped natural setting. The lagoon has been recognized as an Important Bird Area (IBA) by BirdLife International.',
    bestViewing: 'Entire lagoon, peak migration: October-November and March-April',
  },
  {
    name: 'Desert Wildlife',
    description:
      'The Saharan hinterland around Dakhla harbors a surprising diversity of desert-adapted wildlife. Dorcas gazelles, the smallest and most desert-adapted of the North African gazelles, can sometimes be spotted on desert excursions. Desert foxes (fennecs), golden jackals, and various species of desert rodents are present though mainly nocturnal. Reptile diversity is high, with species including the desert monitor lizard, various skinks, and the impressive spiny-tailed lizard (dabb lizard). The night sky above the desert, free from light pollution, reveals one of the most spectacular starscapes visible anywhere on Earth, with the Milky Way arching clear and bright overhead.',
    bestViewing: 'Desert excursions (dawn and dusk best for mammals), night for stargazing',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHERE TO EAT DATA
   ═══════════════════════════════════════════════════════════════ */

const restaurants = [
  {
    name: 'Dakhla Oyster Farms',
    type: 'Oyster farm tasting',
    priceRange: '30-80 MAD for a dozen oysters',
    description:
      'One of Morocco&apos;s best-kept culinary secrets, the Dakhla lagoon is home to several oyster farms that produce exceptionally high-quality Pacific oysters. The cold, nutrient-rich waters of the lagoon (fed by Atlantic upwelling from the Canary Current) create ideal growing conditions, producing oysters with a clean, briny, subtly sweet flavor that rivals the finest French and Irish producers. Several farms offer tastings directly on the water &mdash; you sit at simple tables set in the shallow lagoon, feet in the warm water, while freshly shucked oysters are served with lemon. A dozen oysters typically costs just 30-80 MAD, a fraction of what the same quality would cost in Europe. The best-known farms include Nausicaa and Oyster Farm Dakhla, both accessible by boat or 4x4.',
    mustTry: 'Freshly shucked oysters eaten with your feet in the lagoon water',
  },
  {
    name: 'Camp Restaurants (PK25)',
    type: 'Beachfront dining',
    priceRange: '60-150 MAD per main course',
    description:
      'The kitesurfing camps along the PK25 stretch of the lagoon each operate their own restaurant, and the quality is remarkably high given the remote location. Ocean Vagabond&apos;s restaurant is particularly noted for its Moroccan-European fusion seafood dishes and its sunset terrace overlooking the lagoon. Dakhla Attitude offers a generous buffet-style restaurant with Moroccan and international options. These camp restaurants have become social hubs for the entire Dakhla kite community, and many non-guests drive out from the city specifically to eat at them. Fresh fish of the day, seafood tagine, and grilled lobster are typical highlights.',
    mustTry: 'Grilled fresh catch of the day at Ocean Vagabond, seafood tagine at Dakhla Attitude',
  },
  {
    name: 'Villa Dakhla',
    type: 'Upscale restaurant',
    priceRange: '80-200 MAD per main course',
    description:
      'The most refined dining experience in Dakhla city itself, Villa Dakhla serves Moroccan and Mediterranean cuisine in an elegantly decorated setting. The menu emphasizes the extraordinary local seafood &mdash; Dakhla lobster, grilled sea bass, octopus salad, and oyster dishes &mdash; alongside Moroccan classics like lamb tagine and pastilla. The restaurant is popular with visiting Moroccan families and international travelers staying in the city, and reservations are recommended on weekends. It is one of the few places in Dakhla where you can have a properly elevated dining experience with attentive service and thoughtful presentation.',
    mustTry: 'Dakhla lobster, octopus salad, seafood pastilla',
  },
  {
    name: 'Local Fish Restaurants (Dakhla City)',
    type: 'Casual local dining',
    priceRange: '30-80 MAD per main course',
    description:
      'Dakhla city has numerous small, local fish restaurants where the seafood is extraordinarily fresh and shockingly cheap. These simple establishments, clustered around the fish market and the main commercial streets, typically display the day&apos;s catch on ice at the entrance &mdash; you choose your fish, specify how you want it cooked (grilled, fried, or tagine), and it arrives minutes later with bread, salad, and harissa. A plate of grilled sea bass or a generous portion of fried calamari with all the trimmings rarely exceeds 50-60 MAD. This is arguably the cheapest place in Morocco to eat high-quality seafood, and the casual, convivial atmosphere of the local restaurants is part of the Dakhla experience.',
    mustTry: 'Grilled whole fish with harissa, fried calamari, fish tagine',
  },
  {
    name: 'Cafe de la Corniche',
    type: 'Cafe and light meals',
    priceRange: '20-60 MAD',
    description:
      'A popular waterfront cafe in Dakhla city overlooking the Atlantic, Cafe de la Corniche is where locals and visitors gather for morning coffee, fresh orange juice, msemen (Moroccan flatbread), and light lunches. The terrace offers panoramic views of the ocean and the peninsula, and the relaxed, unhurried atmosphere captures the essence of Dakhla&apos;s laid-back lifestyle. This is the ideal spot for breakfast before heading to the lagoon, or for a late-afternoon mint tea watching the fishing boats return to port.',
    mustTry: 'Fresh orange juice, msemen with honey, mint tea at sunset',
  },
  {
    name: 'Nomad Camp Dining',
    type: 'Desert dining experience',
    priceRange: '100-200 MAD per person (included in excursion)',
    description:
      'Several desert excursion operators include meals at traditional Sahrawi nomad camps as part of their tours. These meals are cooked over open fires in the desert and typically feature mechoui (slow-roasted lamb), camel tagine, fresh bread baked in sand, Sahrawi tea (heavily sweetened green tea with mint), and seasonal desert dates. Eating under the stars in the Sahara, surrounded by nothing but sand, sky, and silence, is a profoundly atmospheric dining experience. The food is simple but deeply satisfying, and the Sahrawi hospitality is genuine and warm.',
    mustTry: 'Mechoui lamb, sand-baked bread, Sahrawi tea ceremony',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHERE TO STAY DATA
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    category: 'Premium Kite Resorts',
    options: [
      {
        name: 'Dakhla Attitude',
        area: 'PK25, Lagoon',
        price: 'From 1,200 MAD/night (all-inclusive packages available)',
        description:
          'The flagship kite resort of Dakhla and arguably the finest kitesurfing accommodation in Africa. Stylish bungalows directly on the lagoon, professional kite center, restaurant, yoga studio, spa, and a warm, community-focused atmosphere. All-inclusive kite packages combine accommodation, meals, lessons, and equipment for excellent value. The location on the lagoon is perfection &mdash; you wake up, walk ten meters, and you are on the water.',
      },
      {
        name: 'PK25 by Dakhla Attitude',
        area: 'PK25, Lagoon',
        price: 'From 900 MAD/night',
        description:
          'The sister property to Dakhla Attitude, PK25 offers a slightly more casual, surf-camp vibe with comfortable rooms, a lively beachfront bar and restaurant, and direct lagoon access. It appeals to a younger, more social crowd and often has music events and communal activities. The kite center is shared with Dakhla Attitude, maintaining the same high standard of instruction.',
      },
    ],
  },
  {
    category: 'Eco Camps & Kite Camps',
    options: [
      {
        name: 'Ocean Vagabond Dakhla',
        area: 'PK25, Lagoon',
        price: 'From 700 MAD/night (camp packages from 500 MAD)',
        description:
          'A beautifully designed camp combining eco-conscious architecture with comfort. Accommodation ranges from private rooms to shared tent-style lodgings. The on-site restaurant is one of the best on the lagoon, and the overall vibe is relaxed, international, and kite-obsessed. Excellent for solo travelers who want a social atmosphere.',
      },
      {
        name: 'Dakhla Club',
        area: 'Southern Lagoon',
        price: 'From 500 MAD/night',
        description:
          'An intimate, family-run camp on a quieter stretch of the lagoon, offering personalized service and a peaceful alternative to the busier PK25 cluster. Rooms are simple but comfortable, the food is excellent home-cooked Moroccan cuisine, and the kite instruction focuses on quality over quantity with small group sizes.',
      },
      {
        name: 'KiteBo Dakhla',
        area: 'PK25, Lagoon',
        price: 'From 350 MAD/night (dorm from 150 MAD)',
        description:
          'The best budget option on the lagoon, KiteBo offers dorm beds and private rooms in a social, backpacker-friendly setting. Communal dinners, beach bonfires, and a young international crowd create a festival-like atmosphere. The kite instruction is IKO-certified and represents excellent value, and all-inclusive packages are available at very competitive rates.',
      },
    ],
  },
  {
    category: 'City Hotels',
    options: [
      {
        name: 'Hotel Sahara Regency',
        area: 'Dakhla City Center',
        price: 'From 600 MAD/night',
        description:
          'The most upscale hotel in Dakhla city, offering modern rooms with ocean views, a swimming pool, restaurant, and conference facilities. It serves as the main accommodation for business travelers and tourists who prefer a city base over a lagoon camp. The location is convenient for exploring Dakhla&apos;s markets, restaurants, and waterfront.',
      },
      {
        name: 'Hotel Calipau Sahara',
        area: 'Dakhla City',
        price: 'From 400 MAD/night',
        description:
          'A reliable mid-range hotel in the city center with clean, comfortable rooms, a restaurant, and helpful staff who can arrange lagoon transfers and desert excursions. It offers good value for travelers who want city convenience and flexibility to visit the lagoon camps during the day.',
      },
    ],
  },
  {
    category: 'Budget',
    options: [
      {
        name: 'Guesthouses & Apartments',
        area: 'Dakhla City',
        price: 'From 150-300 MAD/night',
        description:
          'Dakhla city has a growing selection of budget guesthouses and rental apartments. Standards vary, but clean, basic rooms are available from 150 MAD per night. Several guesthouses on the main avenue offer decent rooms with shared facilities. For longer stays, furnished apartment rentals represent excellent value and are popular with digital nomads and long-term kite visitors.',
      },
      {
        name: 'Camping & Bivouac',
        area: 'Various (lagoon and desert)',
        price: 'From 50-100 MAD/night',
        description:
          'For the most adventurous travelers, camping on the lagoon shore or in the desert is possible and increasingly popular. Some kite camps offer basic campsite space for those with their own tents. Desert bivouac experiences, sleeping under the stars in the Sahara near Dakhla, can be arranged through local tour operators. Wild camping on the peninsula is generally tolerated, though organized campgrounds offer security and basic facilities.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   GETTING THERE DATA
   ═══════════════════════════════════════════════════════════════ */

const gettingThere = [
  {
    mode: 'Domestic Flights',
    icon: Plane,
    routes: [
      {
        name: 'Casablanca (CMN) to Dakhla (VIL)',
        duration: '2 hours 30 minutes',
        frequency: 'Daily flights (Royal Air Maroc)',
        notes: 'The most practical way to reach Dakhla. Royal Air Maroc operates daily flights from Casablanca Mohammed V Airport. Book 2-4 weeks in advance for the best prices (typically 1,500-3,000 MAD round trip). The Dakhla airport is small but modern, located just 5 km from the city center.',
      },
      {
        name: 'Other Domestic Connections',
        duration: 'Varies',
        frequency: 'Several weekly',
        notes: 'Seasonal or less frequent flights connect Dakhla with Agadir, Laayoune, and occasionally Marrakech. Check Royal Air Maroc and Air Arabia Maroc schedules. Routes and frequencies change seasonally, with more options during the kite season (March-November).',
      },
    ],
    tips: 'Flying is strongly recommended over driving for most travelers. Book Royal Air Maroc flights early, as Dakhla routes fill quickly during kite season. Some all-inclusive kite packages include flights. Airport transfers to PK25 camps cost 200-400 MAD by taxi.',
  },
  {
    mode: 'Driving',
    icon: Car,
    routes: [
      {
        name: 'From Marrakech',
        duration: '16-18 hours (approximately 1,500 km)',
        frequency: 'N1 highway via Agadir, Tiznit, Tan-Tan, Laayoune',
        notes: 'A true road-trip adventure through Morocco&apos;s deep south. The road is paved and in decent condition but extremely long and monotonous through vast stretches of Saharan desert. Recommended as a 2-day drive with an overnight stop in Laayoune. Fuel stations are available but spaced far apart &mdash; never let your tank drop below half.',
      },
      {
        name: 'From Agadir',
        duration: '12-14 hours (approximately 1,100 km)',
        frequency: 'N1 highway south',
        notes: 'A shorter variant of the Marrakech route, skipping the Atlas crossing. The road south of Tan-Tan enters true Saharan landscape &mdash; flat, arid, and mesmerizing in its emptiness. Military checkpoints are routine; have your passport and vehicle documents ready.',
      },
    ],
    tips: 'The drive to Dakhla is an adventure in itself, crossing the Sahara from the fertile north to the deep south. A 4x4 is not required (the road is paved) but offers more flexibility for exploring off-road once in Dakhla. Carry extra water, food, and a charged phone. The journey is best broken into 2 days. Most kite camps can arrange shuttle transfers from the city to PK25.',
  },
  {
    mode: 'Bus',
    icon: Navigation,
    routes: [
      {
        name: 'CTM / Supratours from Major Cities',
        duration: '20-28 hours from Marrakech or Casablanca',
        frequency: 'Daily departures',
        notes: 'CTM and Supratours operate long-distance buses to Dakhla from Marrakech, Casablanca, Agadir, and other cities. The journey is very long but the buses are reasonably comfortable with air conditioning and reclining seats. Departures typically leave in the evening for overnight travel. This is the most budget-friendly option.',
      },
    ],
    tips: 'Only recommended for budget travelers or those who enjoy extreme long-distance bus journeys. The 20+ hour ride is an endurance test but costs only 300-500 MAD from Marrakech. Bring snacks, water, entertainment, and a travel pillow. The bus station in Dakhla is centrally located.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DESERT EXCURSIONS DATA
   ═══════════════════════════════════════════════════════════════ */

const desertExcursions = [
  {
    name: 'White Dune (La Dune Blanche)',
    duration: 'Half day (3-4 hours)',
    price: '300-500 MAD per person',
    description:
      'The iconic White Dune is Dakhla&apos;s most photographed landmark and an essential excursion. A brilliant white sand dune rises dramatically from the edge of the lagoon, creating a stunning natural amphitheater of white sand meeting turquoise water. The trip typically involves a 4x4 drive along the lagoon shore, a swim in the warm, sheltered waters at the base of the dune, and a picnic lunch of fresh seafood, bread, and salads. Climbing to the top of the dune rewards you with a panoramic view of the entire lagoon, the peninsula, and the Saharan interior. The contrast of pure white sand, turquoise water, and deep blue sky is extraordinary and uniquely Dakhla.',
    highlights: ['Swim in the lagoon at the dune base', 'Panoramic views from the summit', 'Picnic lunch with fresh seafood', 'Exceptional photography opportunities'],
  },
  {
    name: 'Saharan Desert Overnight',
    duration: 'Overnight (1-2 days)',
    price: '800-1,500 MAD per person',
    description:
      'A journey into the Saharan interior east of Dakhla reveals a landscape of stark, ethereal beauty. The white desert around Dakhla is visually distinct from the golden sand dunes of the Erg Chebbi (near Merzouga) &mdash; here, the terrain is a mix of flat, bleached-white sand plains, rocky hamada, and occasional sculptural rock formations. Overnight excursions include travel by 4x4 to a nomad camp or desert bivouac, a traditional Sahrawi meal cooked over fire, tea ceremonies, and a night sleeping under the clearest, most star-filled sky you will ever witness. The Sahara around Dakhla has virtually zero light pollution, making it one of the premier stargazing locations in the world.',
    highlights: ['Traditional Sahrawi nomad camp experience', 'Mechoui lamb cooked over open fire', 'World-class stargazing with zero light pollution', 'Tea ceremonies with local nomads'],
  },
  {
    name: 'Imlili Desert Oasis',
    duration: 'Full day (6-8 hours)',
    price: '500-800 MAD per person',
    description:
      'One of the most surreal excursions from Dakhla, the Imlili oasis is a collection of small, brilliant turquoise pools set in the middle of the flat Saharan desert, about 100 km southeast of the city. Fed by underground aquifers, these natural pools appear like mirages in the vast emptiness. The water is warm, slightly saline, and swimmable, and the pools are home to small populations of desert fish that have been isolated for millennia. The journey to Imlili crosses spectacular desert terrain and often includes encounters with nomadic herders. This excursion requires a full day and a capable 4x4 vehicle, but the otherworldly beauty of swimming in a desert oasis makes it unforgettable.',
    highlights: ['Surreal turquoise pools in the desert', 'Swimming in ancient oasis waters', 'Desert fish isolated for millennia', 'Spectacular 4x4 journey through the Sahara'],
  },
  {
    name: 'Dragon Island (Ile du Dragon)',
    duration: 'Half day (3-5 hours)',
    price: '400-600 MAD per person',
    description:
      'A small, uninhabited island in the Dakhla lagoon, Dragon Island (named for its shape when seen from above) is accessible by boat or kayak and serves as a nesting site for terns, gulls, and other seabirds. Excursions to the island typically combine bird watching with snorkeling in the crystal-clear lagoon waters, a beach picnic, and often a stop at the oyster farms on the way back. During nesting season (spring), the island is alive with thousands of seabirds, creating a spectacle of sound and movement. The boat ride across the lagoon is itself a highlight, offering views of flamingos, the White Dune in the distance, and the vast empty beauty of the Saharan coastline.',
    highlights: ['Seabird nesting colonies', 'Snorkeling in crystal-clear lagoon water', 'Oyster farm tasting en route', 'Boat ride across the lagoon with flamingo sightings'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SEASONS DATA
   ═══════════════════════════════════════════════════════════════ */

const seasons = [
  {
    season: 'Spring (March-May)',
    temp: '18-26 C',
    wind: '15-25 knots (very consistent)',
    verdict: 'Best for kiting',
    description:
      'Spring is the start of Dakhla&apos;s prime kite season. The trade winds build in strength from March onward, delivering consistent 15-25 knot days with remarkable reliability. Air and water temperatures are comfortable (20-24 degrees Celsius water temperature), and the camps are buzzing with the first influx of international kiters. March can have occasional lighter wind days, but by April the trades are fully established. This is an excellent time to visit: consistent wind, comfortable temperatures, and the camps are lively but not yet at peak-season capacity.',
    conditions: 'Consistent trade winds building through the season. Dry and sunny. Warm but not hot.',
  },
  {
    season: 'Summer (June-September)',
    temp: '22-32 C',
    wind: '18-30 knots (strongest and most consistent)',
    verdict: 'Peak wind season',
    description:
      'Summer is when Dakhla&apos;s trade winds reach their maximum strength and consistency. June through September delivers the most reliable wind on the planet for kitesurfing &mdash; days without wind are extremely rare, and afternoon thermals regularly boost the trades to 25-30 knots. This is peak season at the kite camps, with full occupancy and a vibrant international atmosphere. Temperatures can be hot in the city (30+ degrees Celsius) but the constant wind and coastal location keep the lagoon area comfortable. Water temperature reaches a pleasant 22-24 degrees Celsius. Book accommodation well in advance for July and August.',
    conditions: 'Nuclear trade winds. Hot but wind-cooled on the lagoon. Peak camp occupancy. Dry.',
  },
  {
    season: 'Autumn (October-November)',
    temp: '20-28 C',
    wind: '12-22 knots (gradually decreasing)',
    verdict: 'Excellent (wind + waves)',
    description:
      'Autumn is a superb shoulder season. The trade winds remain solid through October, gradually tapering in November, while the North Atlantic swell season begins in earnest, bringing quality waves to the ocean side of the peninsula. This combination of wind and swell makes autumn the ideal time for kiters who want both flat-water and wave sessions. Temperatures are very pleasant, the camps are busy but not overcrowded, and prices begin to soften from the summer peak. October is arguably the most versatile month in Dakhla &mdash; you can kite the lagoon in the morning and surf Atlantic waves in the afternoon.',
    conditions: 'Good wind with building Atlantic swell. Warm and pleasant. Camp season winding down.',
  },
  {
    season: 'Winter (December-February)',
    temp: '15-22 C',
    wind: '8-18 knots (inconsistent)',
    verdict: 'Off-season (still warm)',
    description:
      'Winter is Dakhla&apos;s off-season for kitesurfing, with lighter and less consistent winds. However, Dakhla in winter is far warmer than Europe (15-22 degrees Celsius), the Atlantic swell is at its strongest for surfing, and the destination takes on a quiet, contemplative character that many visitors prefer. Some kite camps close or operate on reduced capacity, but others remain open year-round. This is the best season for wildlife viewing (peak flamingo numbers), fishing, desert excursions, and simply escaping the European winter. Wind days do still occur, particularly in February as the trade wind season begins to rebuild.',
    conditions: 'Lighter winds, best Atlantic surf swell, peak wildlife season, warm compared to Europe.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Dakhla safe to visit?',
    answer:
      'Yes, Dakhla is very safe. It is a peaceful, welcoming city with a low crime rate. The Sahrawi population is renowned for its hospitality, and visitors consistently report feeling safe and welcome. The area has a visible military and police presence (as part of Morocco&apos;s southern provinces), which contributes to a secure environment. Standard travel precautions apply &mdash; secure valuables, be aware of your surroundings &mdash; but Dakhla is one of the safest destinations in Morocco.',
  },
  {
    question: 'Do I need to be an experienced kitesurfer to visit Dakhla?',
    answer:
      'Absolutely not. Dakhla is one of the best places in the world to learn kitesurfing. The shallow, flat-water lagoon, consistent wind, and professional IKO-certified schools make it ideal for complete beginners. Many visitors arrive with zero kite experience and leave as confident independent riders after a week of lessons. The shallow water (often waist-deep or less) means that if anything goes wrong, you simply stand up &mdash; this removes the fear factor that makes learning in deep water or waves so challenging.',
  },
  {
    question: 'When is the best time to visit Dakhla?',
    answer:
      'For kitesurfing, April through October offers the most consistent wind, with June through September being the absolute peak. For a general visit combining activities, pleasant temperatures, and moderate crowds, April-May and October are ideal. For wildlife watching and surfing, the winter months (November-February) are excellent despite lighter winds. Dakhla is a year-round destination with comfortable temperatures even in winter.',
  },
  {
    question: 'How long should I stay in Dakhla?',
    answer:
      'A minimum of 5-7 days is recommended to fully appreciate Dakhla, especially if kitesurfing. This allows time for lessons (typically 3-5 days for beginners to reach independence), a desert excursion, a visit to the White Dune, and an oyster farm tasting. Many kiters stay 2-4 weeks, and a growing community of digital nomads spends entire seasons in Dakhla. If you are not kitesurfing, 3-4 days is sufficient to experience the lagoon, desert, wildlife, and food.',
  },
  {
    question: 'Is there good internet in Dakhla?',
    answer:
      'Internet connectivity has improved significantly. Dakhla city has decent 4G coverage from Maroc Telecom, Orange, and Inwi. Most hotels and kite camps offer WiFi, though speeds at the lagoon camps can be slower than in the city. For digital nomads, the city offers several cafes with reliable WiFi. A local SIM card with a data plan (available at the airport or in the city for 50-100 MAD) is recommended for backup connectivity.',
  },
  {
    question: 'What currency is used and are there ATMs?',
    answer:
      'The Moroccan Dirham (MAD) is the local currency. ATMs are available in Dakhla city center (Attijariwafa Bank, BMCE, Banque Populaire). Credit cards are accepted at the larger kite camps and upscale hotels, but most local restaurants, shops, and services are cash-only. Bring sufficient cash or withdraw in the city before heading to the lagoon camps. Euros are sometimes accepted informally but at unfavorable rates.',
  },
  {
    question: 'Can I visit Dakhla if I do not kitesurf?',
    answer:
      'Absolutely. While kitesurfing is Dakhla&apos;s primary draw, the destination offers plenty for non-kiters: desert excursions, wildlife watching (flamingos, dolphins), the White Dune, oyster farm visits, surfing, fishing, kayaking, SUP, photography, stargazing, and simply relaxing in a stunningly beautiful, remote environment. Many visitors come specifically for the desert landscapes, the seafood, and the off-the-beaten-path atmosphere. Dakhla is also increasingly popular with yoga practitioners, writers, and anyone seeking solitude in a spectacular natural setting.',
  },
  {
    question: 'What should I pack for Dakhla?',
    answer:
      'Essentials include: strong sunscreen (the Saharan sun is intense), a windproof layer (the trade wind can feel chilly after a day on the water), sunglasses with a strap, a hat or cap, light clothing for the heat, a warm layer for desert nights (temperatures drop significantly after sunset), reef shoes or sandals for the lagoon, and a good camera. If kitesurfing, most camps provide equipment, but bringing your own harness ensures a perfect fit. Sand gets into everything, so protect electronics with sealed bags.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RELATED PAGES DATA
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  { title: 'Water Sports in Morocco', href: '/water-sports', description: 'Surfing, diving, and watersport adventures' },
  { title: 'Essaouira Guide', href: '/essaouira', description: 'Morocco\'s Atlantic wind city' },
  { title: 'Sahara Desert Guide', href: '/sahara', description: 'Explore Morocco\'s great desert' },
  { title: 'Morocco Beaches', href: '/beaches', description: 'Complete beach guide' },
  { title: 'Eco-Tourism Morocco', href: '/eco-tourism', description: 'Sustainable travel in Morocco' },
  { title: 'Wildlife Morocco', href: '/wildlife', description: 'Birds, marine life, and nature' },
  { title: 'Morocco Cities', href: '/cities', description: 'Explore all Moroccan cities' },
  { title: 'Morocco Itineraries', href: '/itineraries', description: 'Plan your perfect trip' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function DakhlaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-legzira.webp"
            alt="Panoramic view of the Dakhla lagoon with turquoise waters meeting golden Saharan sand dunes under an endless blue sky"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Dakhla</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Morocco&apos;s Southern Jewel
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dakhla: Morocco&apos;s Kitesurfing Paradise
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A remote peninsula where the Sahara meets the Atlantic, sheltering a 40-kilometer
              turquoise lagoon with the most consistent wind on Earth &mdash; Dakhla is the
              destination the world is just beginning to discover.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Overview / Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where the Sahara Meets the Atlantic
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              At the edge of the known world, a slender finger of land reaches into the
              ocean, creating one of the most extraordinary natural landscapes on Earth.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Dakhla is unlike anywhere else in Morocco, or anywhere else at all. Located
              roughly 1,500 kilometers south of Marrakech, deep in Morocco&apos;s Saharan
              provinces, the city sits on a narrow peninsula that extends nearly 40 kilometers
              into the Atlantic Ocean, creating an enormous natural lagoon of shallow, turquoise
              water sheltered from the open ocean swells. The peninsula is so narrow in places
              that you can see the Atlantic on one side and the lagoon on the other, with nothing
              but sand, wind, and sky in every direction.
            </p>
            <p>
              For centuries, Dakhla (known during the Spanish colonial period as Villa Cisneros)
              was a remote outpost at the edge of the Western Sahara, known only to fishermen,
              military personnel, and the Sahrawi nomads who have inhabited this harsh, beautiful
              landscape for millennia. The town served as a Spanish colonial settlement from 1884
              until 1975, when the territory was incorporated into Morocco. That remoteness kept
              Dakhla hidden from the world &mdash; but it also preserved something remarkable: a
              pristine, undeveloped natural environment of staggering beauty with conditions for
              wind sports that are, quite literally, among the best on the planet.
            </p>
            <p>
              The discovery of Dakhla by the international kitesurfing community in the early
              2000s changed everything. Word spread through the global kite grapevine about a
              lagoon with flat water, waist-deep shallows extending for kilometers, and a trade
              wind that blows with almost mechanical consistency from March through November.
              Within a decade, Dakhla transformed from an unknown desert outpost into one of the
              world&apos;s premier kitesurfing destinations, attracting thousands of riders each year
              from Europe, the Americas, and beyond.
            </p>
            <p>
              But Dakhla is far more than a kite spot. It is an emerging eco-tourism destination
              of real significance: a place where flamingo colonies wade in the lagoon shallows,
              dolphins patrol the waters, critically endangered monk seals inhabit the coast, and
              the night sky reveals the Milky Way with crystalline clarity. The local Sahrawi
              culture &mdash; with its traditions of desert hospitality, tea ceremonies, and camel
              herding &mdash; adds a rich human dimension to the natural landscape. And the
              seafood, drawn from some of the richest fishing waters in the Atlantic, is
              extraordinary in both quality and value, with fresh oysters from the lagoon farms
              available for prices that would be unthinkable in Europe.
            </p>
            <p>
              With a population of approximately 110,000 and growing investment in infrastructure,
              Dakhla is poised on the threshold of broader tourism discovery. Daily flights from
              Casablanca have made it accessible, and new eco-lodges and kite camps open each
              year. Yet for now, Dakhla retains the raw, frontier quality that first attracted
              adventurers: the sense that you have reached the edge of the map, where the desert
              dissolves into the ocean and the rest of the world feels impossibly far away. This
              guide is your comprehensive companion to one of Morocco&apos;s last great secrets.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { label: 'Population', value: '~110,000', icon: Users },
              { label: 'Wind Days/Year', value: '~300 days', icon: Wind },
              { label: 'Lagoon Length', value: '40 km', icon: Waves },
              { label: 'Flight from Casa', value: '2.5 hours', icon: Plane },
            ].map((fact) => (
              <div key={fact.label} className="card-moroccan p-4 text-center">
                <fact.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                <p className="text-xs text-[var(--text-secondary)]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kitesurfing ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Wind className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              World-Class Kitesurfing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              With approximately 300 wind days per year, a vast flat-water lagoon, and
              consistent trade winds, Dakhla is widely regarded as one of the top three
              kitesurfing destinations on Earth.
            </p>
          </div>

          <div className="space-y-8">
            {kitesurfSpots.map((spot, index) => (
              <article
                key={spot.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="p-6 md:p-8 flex flex-col justify-center w-full">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                      {spot.level}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {spot.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {spot.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--border-light)] grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-start gap-2">
                      <Wind className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-[var(--text-primary)]">Conditions</p>
                        <p className="text-xs text-[var(--text-secondary)]">{spot.conditions}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Compass className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-[var(--text-primary)]">Wind Direction</p>
                        <p className="text-xs text-[var(--text-secondary)]">{spot.windDirection}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-[var(--text-primary)]">Best Months</p>
                        <p className="text-xs text-[var(--text-secondary)]">{spot.bestMonths}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kite Schools ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Kitesurfing Schools &amp; Camps
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dakhla&apos;s kite schools are IKO-certified with multilingual instructors.
              Group lessons typically cost 500-800 MAD, with private sessions from 1,000-1,500 MAD.
            </p>
          </div>

          <div className="space-y-6">
            {kiteSchools.map((school) => (
              <article key={school.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 md:w-56">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {school.name}
                    </h3>
                    <p className="text-sm text-[var(--color-primary)] font-semibold mt-1">{school.style}</p>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{school.price}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      {school.description}
                    </p>
                    <div className="pt-4 border-t border-[var(--border-light)] grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <p className="text-xs text-[var(--text-secondary)]">
                          <span className="font-bold text-[var(--text-primary)]">Equipment:</span> {school.equipment}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <p className="text-xs text-[var(--text-secondary)]">
                          <span className="font-bold text-[var(--text-primary)]">Languages:</span> {school.languages}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Water Sports ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beyond Kitesurfing: Water Sports
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The lagoon and Atlantic coast offer a full spectrum of water activities,
              from meditative SUP sessions to deep-sea fishing in some of the richest
              waters in the Atlantic.
            </p>
          </div>

          <div className="space-y-6">
            {otherWaterSports.map((sport) => (
              <article key={sport.name} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {sport.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {sport.description}
                </p>
                <div className="pt-4 border-t border-[var(--border-light)] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-bold text-[var(--text-primary)]">Best for:</span> {sport.bestFor}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-bold text-[var(--text-primary)]">Availability:</span> {sport.availability}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dakhla Lagoon ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Anchor className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Dakhla Lagoon
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              One of the largest and most pristine lagoons on the Atlantic coast of Africa,
              the Dakhla lagoon is the natural wonder that defines the entire destination.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Dakhla lagoon is a geological marvel. Formed by the narrow peninsula that
              extends approximately 40 kilometers into the Atlantic, the lagoon is a vast,
              sheltered body of water that averages 10-12 kilometers in width and reaches depths
              of only 2-5 meters across most of its extent. The shallow depth, combined with the
              white sand bottom and intense Saharan sunlight, gives the water an extraordinary
              turquoise color that shifts through shades of aquamarine, jade, and sapphire
              depending on the depth, the time of day, and the position of the sun.
            </p>
            <p>
              The lagoon&apos;s ecology is remarkably rich. The cold, nutrient-laden waters of the
              Canary Current upwelling system feed into the lagoon, supporting dense beds of
              seagrass that serve as nursery habitat for fish, crustaceans, and cephalopods. These
              in turn attract large populations of wading birds, including the famous flamingo
              colonies. The oyster farms established in the lagoon have thrived precisely because
              of this nutrient richness, producing bivalves of exceptional quality. Dolphins are
              regular visitors to the lagoon mouth, and on calm days, you can sometimes see
              them hunting fish in the shallower sections.
            </p>
            <p>
              For visitors, the lagoon offers a spectrum of experiences: kitesurfing and
              windsurfing on the flat, consistent water; kayaking and SUP through the quieter
              reaches where flamingos wade; boat trips to the oyster farms and Dragon Island;
              swimming at the White Dune; and simply sitting on the shore at sunset, watching the
              sky turn from gold to pink to violet over the vast, glassy water. The lagoon is
              Dakhla&apos;s heart, its defining feature, and the reason that this remote peninsula is
              becoming one of the most talked-about destinations in the adventure travel world.
            </p>
          </div>

          {/* Lagoon Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { label: 'Length', value: '~40 km', icon: Map },
              { label: 'Avg Depth', value: '2-5 meters', icon: Waves },
              { label: 'Water Temp', value: '18-24 C', icon: Thermometer },
              { label: 'Key Wildlife', value: 'Flamingos, Dolphins', icon: Bird },
            ].map((fact) => (
              <div key={fact.label} className="card-moroccan p-4 text-center">
                <fact.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                <p className="text-xs text-[var(--text-secondary)]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wildlife & Nature ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bird className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Wildlife &amp; Nature
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              At the intersection of the Sahara Desert, the Atlantic Ocean, and a major bird
              migration flyway, Dakhla harbors an extraordinary diversity of wildlife in a
              landscape of stark, elemental beauty.
            </p>
          </div>

          <div className="space-y-6">
            {wildlifeHighlights.map((wildlife) => (
              <article key={wildlife.name} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {wildlife.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {wildlife.description}
                </p>
                <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Eye className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    <span className="font-bold">Best viewing:</span> {wildlife.bestViewing}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── White Dune (La Dune Blanche) ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The White Dune (La Dune Blanche)
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dakhla&apos;s most iconic landmark &mdash; a brilliant white sand dune rising
              from the turquoise lagoon &mdash; is one of the most photographed natural
              wonders in Morocco.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The White Dune, known locally as La Dune Blanche, is Dakhla&apos;s signature
              natural landmark and arguably the single most beautiful spot in the entire region.
              Located on the mainland side of the lagoon, accessible by 4x4 or boat, this
              dramatic formation of pure white sand rises from the water&apos;s edge like a bleached
              mountain, creating a scene of almost unreal beauty where brilliant white sand
              meets shallow turquoise water under a deep Saharan sky.
            </p>
            <p>
              The dune is not large by Saharan standards &mdash; perhaps 20-30 meters high at its
              peak &mdash; but its visual impact is extraordinary because of the color contrast.
              The sand here is notably whiter than the surrounding desert, bleached by millennia
              of wind and sun, and when it meets the clear lagoon water at its base, the result
              is a palette of whites, turquoises, and blues that photographers find irresistible.
              Walking along the water&apos;s edge, where the warm, knee-deep lagoon laps against the
              dune&apos;s soft slope, is one of those rare travel experiences that feels genuinely
              otherworldly.
            </p>
            <p>
              Most visitors reach the White Dune as part of an organized half-day excursion
              (typically 300-500 MAD per person). The standard itinerary includes a 4x4 drive
              along the lagoon shore, a swim and wade in the warm shallows at the dune&apos;s base,
              a climb to the summit for panoramic views of the lagoon and desert, and a picnic
              lunch of fresh grilled fish, salads, and bread. Some operators offer sunset
              excursions, when the fading light turns the white sand gold and pink. Whether you
              visit at midday under blazing sun or in the gentle light of late afternoon, the
              White Dune is the image of Dakhla you will carry home.
            </p>
          </div>

          {/* White Dune Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              {
                title: 'Getting There',
                icon: Car,
                text: 'Accessible by 4x4 excursion (30-45 minute drive from PK25) or by boat from the lagoon. Most kite camps organize daily excursions.',
              },
              {
                title: 'What to Bring',
                icon: Sun,
                text: 'Strong sunscreen, sunglasses, water, a camera, and swimwear. The white sand reflects intense UV. Reef shoes helpful for the lagoon bottom.',
              },
              {
                title: 'Best Time to Visit',
                icon: Sunset,
                text: 'Early morning or late afternoon for the best photography light. Sunset excursions are particularly spectacular when available.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] font-[family-name:var(--font-heading)] mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Eat ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Eat in Dakhla
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dakhla offers the freshest, cheapest seafood in Morocco &mdash; from lagoon
              oysters eaten with your feet in the water to grilled fish at 30-50 MAD a plate
              in the local restaurants.
            </p>
          </div>

          <div className="space-y-6">
            {restaurants.map((restaurant) => (
              <article key={restaurant.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                    {restaurant.type}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-secondary)]">{restaurant.priceRange}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {restaurant.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {restaurant.description}
                </p>
                <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    <span className="font-bold">Must try:</span> {restaurant.mustTry}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay in Dakhla
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From all-inclusive kite resorts on the lagoon to budget camps and city hotels,
              Dakhla has accommodation for every style. Most kitesurfers stay at the PK25
              lagoon camps for direct water access.
            </p>
          </div>

          <div className="space-y-8">
            {accommodations.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.options.map((option) => (
                    <article key={option.name} className="card-moroccan p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                          {option.name}
                        </h4>
                        <span className="text-xs font-semibold text-[var(--color-primary)]">{option.area}</span>
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{option.price}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {option.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting to Dakhla
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dakhla is remote by design. Daily flights from Casablanca (2.5 hours) are
              the most practical option. Overland journeys of 1,500+ km are for the
              adventurous.
            </p>
          </div>

          <div className="space-y-8">
            {gettingThere.map((transport) => (
              <article key={transport.mode} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <transport.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {transport.mode}
                  </h3>
                </div>

                <div className="space-y-4 mb-4">
                  {transport.routes.map((route) => (
                    <div key={route.name} className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">{route.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {route.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {route.frequency}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{route.notes}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{transport.tips}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Desert Excursions ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Tent className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Desert Excursions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond the lagoon, Dakhla&apos;s Saharan hinterland offers otherworldly
              landscapes, nomad culture, hidden oases, and some of the most spectacular
              stargazing on the planet.
            </p>
          </div>

          <div className="space-y-8">
            {desertExcursions.map((excursion, index) => (
              <article
                key={excursion.name}
                className={`card-moroccan p-6 md:p-8 flex flex-col md:flex-row gap-6 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="shrink-0 md:w-56">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {excursion.name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">{excursion.duration}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{excursion.price}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {excursion.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[var(--color-primary)]" />
                      Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {excursion.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CloudSun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit Dakhla
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dakhla&apos;s Saharan-Atlantic climate delivers year-round warmth and sunshine.
              The kite season runs March through November, but the destination has appeal
              in every month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((season) => (
              <article key={season.season} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {season.season}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[var(--text-secondary)]">{season.temp}</span>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      season.verdict === 'Best for kiting' ? 'bg-green-100 text-green-700' :
                      season.verdict === 'Peak wind season' ? 'bg-emerald-100 text-emerald-700' :
                      season.verdict === 'Excellent (wind + waves)' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {season.verdict}
                    </span>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                  {season.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)] space-y-2">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Wind:</span> {season.wind}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Conditions:</span> {season.conditions}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Info & FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips for Visiting Dakhla
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential advice for navigating Morocco&apos;s remote southern paradise,
              from sun protection to cultural etiquette.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Sun Protection',
                icon: Sun,
                text: 'The Saharan sun in Dakhla is intense year-round, and the reflection off the water and white sand amplifies UV exposure significantly. High-SPF sunscreen (50+), a hat, UV-blocking sunglasses, and a rash guard or long-sleeved sun shirt are essential. Reapply sunscreen frequently, especially after water activities. Heatstroke is a real risk during midday in summer; stay hydrated and seek shade during the hottest hours (12-3pm).',
              },
              {
                title: 'Wind Preparation',
                icon: Wind,
                text: 'The trade wind that makes Dakhla a kite paradise also means sand gets into everything. Protect cameras and electronics with sealed bags or cases. Windproof layers are essential &mdash; the wind can feel chilly even when air temperatures are warm, especially when wet after a water session. Secure loose items at the camps, and be prepared for sand in your hair, clothes, and accommodation. It is part of the Dakhla experience.',
              },
              {
                title: 'Sahrawi Culture & Etiquette',
                icon: Users,
                text: 'The Sahrawi people of Dakhla are known for their warmth and hospitality. The traditional tea ceremony (three rounds of increasingly sweet tea) is a central social ritual &mdash; accepting an invitation to tea is a sign of respect. Dress modestly in the city center and market areas. Friday is the holy day, with many businesses closed for midday prayers. Learning a few words of Hassaniya Arabic (the local dialect) will be deeply appreciated.',
              },
              {
                title: 'Health & Medical',
                icon: Shield,
                text: 'Dakhla has a regional hospital and several clinics, but medical facilities are basic compared to Casablanca or Marrakech. Comprehensive travel insurance with medical evacuation coverage is strongly recommended. Bring any prescription medications you need, as pharmacy selection is limited. The most common health issues for visitors are sunburn, dehydration, and minor cuts from shells or rocks in the lagoon. Tap water is safe in most hotels but bottled water is recommended.',
              },
              {
                title: 'Photography',
                icon: Camera,
                text: 'Dakhla is a photographer&apos;s dream, but the conditions are challenging: intense light, wind-blown sand, and salt spray all threaten equipment. Bring a weatherproof camera bag, lens cleaning supplies, and silica gel packets to absorb moisture. The best light for photography is early morning and late afternoon when the Saharan sun creates golden tones across the lagoon. Drone use may require permits; check current regulations. Always ask permission before photographing local people.',
              },
              {
                title: 'Getting Around Locally',
                icon: Footprints,
                text: 'Dakhla city is small and walkable. Petits taxis (blue) cost 5-15 MAD for trips within the city. The journey from the city to the PK25 lagoon camps is about 25 km and costs 150-250 MAD by taxi. Most kite camps offer airport transfer services. A rental car (from 300-500 MAD/day) provides maximum flexibility and is recommended if you want to explore independently. 4x4 vehicles are necessary for desert excursions and reaching some beaches.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-6 flex gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything else you need to know before visiting Morocco&apos;s remote
              southern paradise.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more of Morocco with our comprehensive travel guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:border-[var(--color-primary)]/30 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
                  Read guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Dakhla?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you come for the world-class kitesurfing, the pristine desert landscapes,
            the oyster farms on the lagoon, or simply to reach the edge of the map, Dakhla will
            reward you with an experience unlike anything else in Morocco. The wind is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/water-sports"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Wind className="w-4 h-4" /> Explore Water Sports
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Plan Your Morocco Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
