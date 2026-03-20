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
  Shield,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Sun,
  Compass,
  Calendar,
  Car,
  Navigation,
  Bus,
  Map,
  Camera,
  Waves,
  Thermometer,
  Anchor,
  Building,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Best Day Trips from Tangier 2026 | Top 11 Excursions, Prices & Tips',
  description:
    'Discover the 11 best day trips from Tangier in 2026. Chefchaouen blue city, Asilah, Tetouan, Cap Spartel, Caves of Hercules, Ceuta, Akchour waterfalls, and more. Guided tours from 300 MAD, DIY from 15 MAD.',
  keywords: [
    'day trips from Tangier',
    'Tangier day trips',
    'best day trips from Tangier Morocco',
    'Tangier excursions',
    'Chefchaouen from Tangier',
    'Asilah from Tangier',
    'Tetouan from Tangier',
    'Cap Spartel Tangier',
    'Caves of Hercules Tangier',
    'Ceuta from Tangier',
    'Akchour waterfalls from Tangier',
    'Tangier day tours 2026',
    'things to do near Tangier',
    'Tangier excursion prices',
    'guided tours from Tangier',
    'Gibraltar from Tangier',
    'Moulay Bousselham lagoon',
    'Larache Lixus ruins',
  ],
  openGraph: {
    title: 'Best Day Trips from Tangier 2026 | Top 11 Excursions & Prices',
    description:
      'The 11 best day trips from Tangier with prices, transport options, and insider tips. From Chefchaouen blue city to Cap Spartel lighthouse, Asilah murals to Akchour waterfalls. DIY and guided tours compared.',
    url: `${BASE_URL}/day-trips-from-tangier`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tangier-bay.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Tangier bay with the medina, port, and Strait of Gibraltar in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Trips from Tangier 2026 | Top 11 Excursions',
    description:
      'Chefchaouen, Asilah, Tetouan, Cap Spartel, Akchour & more. Complete guide with prices from 15 MAD.',
    images: [`${BASE_URL}/images/hero-tangier-bay.webp`],
  },
  alternates: { canonical: `${BASE_URL}/day-trips-from-tangier` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/day-trips-from-tangier`,
  name: 'Best Day Trips from Tangier 2026 | Top 11 Excursions, Prices & Tips',
  description:
    'Complete guide to the 11 best day trips from Tangier including Chefchaouen, Asilah, Tetouan, Cap Spartel & Caves of Hercules, Ceuta, Larache & Lixus, Akchour waterfalls, Gibraltar, and more. Prices, transport, DIY vs guided options.',
  url: `${BASE_URL}/day-trips-from-tangier`,
  image: `${BASE_URL}/images/hero-tangier-bay.webp`,
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
  mainEntityOfPage: `${BASE_URL}/day-trips-from-tangier`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Tangier' },
    { '@type': 'City', name: 'Chefchaouen' },
    { '@type': 'City', name: 'Asilah' },
    { '@type': 'City', name: 'Tetouan' },
    { '@type': 'Place', name: 'Cap Spartel' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Day Trips from Tangier', item: `${BASE_URL}/day-trips-from-tangier` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best day trips from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular day trips from Tangier are Chefchaouen (the famous blue city, 2 hours), Asilah (artistic beach town, 45 minutes), Tetouan (UNESCO medina, 1 hour), Cap Spartel and the Caves of Hercules (20 minutes), and Akchour waterfalls in the Rif Mountains (2.5 hours). Other excellent options include Ceuta (Spanish enclave), Larache with Lixus ruins, and the ferry to Gibraltar.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do day trips from Tangier cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY day trips from Tangier can cost as little as from 15 MAD for Cap Spartel by grand taxi. Guided group day tours range from 300 MAD to 800 MAD per person depending on the destination. The most popular guided trip to Chefchaouen is typically from 500 MAD per person with lunch included. Private tours start from 1,200 MAD per vehicle. Prices are seasonal and may change during peak periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Chefchaouen as a day trip from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Chefchaouen is doable as a day trip from Tangier. The drive takes about 2 hours each way via the scenic Rif Mountain road. Most guided tours depart at 8 AM and return by 7 PM, giving you 4-5 hours in the blue city. However, many travelers prefer to stay overnight to enjoy Chefchaouen at sunset and in the quiet morning hours without day-trip crowds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Cap Spartel and the Caves of Hercules from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cap Spartel is only 14 km west of Tangier city center. Grand taxis from Tangier cost from 15 MAD per person one-way or you can negotiate from 100 MAD for a private round trip with waiting time. Many visitors combine Cap Spartel and the Caves of Hercules in a half-day trip. The caves have a small entry fee of from 10 MAD. You can also walk along the beach between the two sites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take a ferry to Gibraltar from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ferries run from Tangier Med port (about 45 km east of Tangier) to Algeciras in Spain, from where you can cross into Gibraltar. The ferry takes 1-2 hours and costs from 300 MAD one-way. FRS also operates a direct Tarifa-Tangier Ville route (35 minutes). A Gibraltar day trip requires a valid passport and possibly a visa depending on your nationality. Allow a full day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season for day trips from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (April-June) and autumn (September-November) are ideal with pleasant temperatures of 20-28C and clear skies. Summer (July-August) is warm but the Atlantic breeze keeps Tangier comfortable; Chefchaouen and mountain destinations are hotter inland. Winter (December-February) is mild at 12-18C but rainy, especially in the Rif Mountains. The Caves of Hercules and Asilah are enjoyable year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Tetouan worth visiting from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Tetouan has a UNESCO World Heritage medina that is one of Morocco\'s most authentic, with strong Andalusian-Spanish influences in its architecture, cuisine, and culture. The journey from Tangier is only 1 hour by grand taxi (from 25 MAD). Tetouan sees far fewer tourists than Tangier or Chefchaouen, offering a more genuine Moroccan experience. The Royal Artisan School and the Archaeological Museum are standout attractions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a guided tour or go independently from Tangier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Asilah, Tetouan, and Cap Spartel, going independently by grand taxi is easy and much cheaper. For Chefchaouen, a guided tour is more practical as the mountain road can be challenging and parking in the medina is limited. For Akchour waterfalls, a guide is recommended as trails are not always well-marked. For Gibraltar or Ceuta, independent travel works well via ferry. Most hotels in Tangier can arrange tours the day before.',
      },
    },
  ],
};

/* ===============================================================
   DATA: DAY TRIPS
   =============================================================== */

const dayTrips = [
  {
    name: 'Chefchaouen (The Blue City)',
    icon: Camera,
    distance: '115 km (2 hours)',
    guidedPrice: 'From 500 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Blue-washed medina streets', 'Plaza Uta el-Hammam', 'Ras el-Maa waterfall', 'Kasbah Museum', 'Rif Mountain panoramas'],
    description:
      'Chefchaouen is Morocco\'s most photogenic town, a dreamy cascade of blue-washed buildings nestled in the Rif Mountains. The medina is a labyrinth of powder-blue alleys, vibrant doorways, and flower-draped staircases that feels like stepping into a painting. Founded in 1471 as a fortress against Portuguese invasions, the town\'s famous blue color is said to have been introduced by Jewish refugees in the 1930s. The central Plaza Uta el-Hammam, the 15th-century kasbah, and the Ras el-Maa waterfall at the edge of town are essential stops.',
    transport: 'CTM buses from Tangier to Chefchaouen from 50 MAD (3-3.5 hours via Tetouan). Grand taxis from 60 MAD per person (2.5 hours). By car, take the N2 through Tetouan, then the scenic mountain road. The drive is winding but stunning.',
    tip: 'Arrive early to photograph the medina before day-trip crowds arrive around 11 AM. The best blue streets are in the old medina around Bab Onsar. Consider an overnight stay to enjoy sunset from the Spanish Mosque viewpoint and the quiet morning hours.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, licensed guide in the medina, free time for photos, and lunch',
  },
  {
    name: 'Asilah (Artistic Beach Town)',
    icon: Waves,
    distance: '46 km (45 minutes)',
    guidedPrice: 'From 300 MAD',
    diyPrice: 'From 20 MAD',
    bestSeason: 'Year-round (June-Aug for festival)',
    highlights: ['Whitewashed medina with murals', 'Atlantic beach promenade', 'Portuguese ramparts', 'Annual Arts Festival (August)', 'Fresh seafood restaurants'],
    description:
      'Asilah is a charming Atlantic coastal town that perfectly blends Portuguese heritage, Moroccan culture, and contemporary art. The medina\'s whitewashed walls serve as an outdoor gallery, covered in colorful murals repainted each year during the Asilah Arts Festival. The 15th-century Portuguese ramparts frame dramatic ocean views, while the town\'s beaches stretch for kilometers to the south. Asilah has a relaxed, bohemian atmosphere that feels worlds apart from the bustle of Tangier, making it one of the easiest and most rewarding half-day trips.',
    transport: 'Trains from Tangier Ville station to Asilah from 20 MAD (45 minutes), running several times daily. Grand taxis from Tangier from 25 MAD per person. By car, take the N1 coastal road south.',
    tip: 'Visit on a Thursday for the weekly souk outside the medina walls. The murals are freshest in September after the August arts festival. Walk the ramparts at sunset for stunning Atlantic views. The seafood restaurants on the harbor serve excellent grilled fish from 60 MAD.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, guided walk of the medina, free time for beach and lunch',
  },
  {
    name: 'Tetouan (The White Dove)',
    icon: Building,
    distance: '60 km (1 hour)',
    guidedPrice: 'From 350 MAD',
    diyPrice: 'From 25 MAD',
    bestSeason: 'Year-round',
    highlights: ['UNESCO World Heritage medina', 'Andalusian architecture', 'Royal Artisan School', 'Archaeological Museum', 'Spanish colonial quarter'],
    description:
      'Known as the White Dove for its dazzling whitewashed medina, Tetouan has one of Morocco\'s most authentic and least-touristed old towns, inscribed as a UNESCO World Heritage Site. The medina shows a strong Andalusian influence from the refugees who settled here after the fall of Granada in 1492, visible in the ornate doorways, tiled fountains, and balconied houses. The Spanish colonial new town (Ensanche) adds another architectural layer with its art deco buildings and wide boulevards. The Royal Artisan School (Dar Sanaa) is one of Morocco\'s finest, where students learn traditional zellige, woodcarving, and leatherwork.',
    transport: 'Grand taxis from Tangier to Tetouan from 25 MAD per person (1 hour). CTM and local buses also serve the route. By car, take the fast A6 motorway. Frequent departures throughout the day.',
    tip: 'Visit the Dar Sanaa (Royal Artisan School) to watch young artisans practice traditional crafts. The mellah (old Jewish quarter) has fascinating architecture. Tetouan is often combined with a stop at Martil beach, only 10 km further east. The medina requires no guide but having one enriches the experience.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, licensed medina guide, Dar Sanaa visit, and lunch',
  },
  {
    name: 'Cap Spartel & Caves of Hercules',
    icon: Compass,
    distance: '14 km (20 minutes)',
    guidedPrice: 'From 300 MAD',
    diyPrice: 'From 15 MAD',
    bestSeason: 'Year-round',
    highlights: ['Lighthouse where Atlantic meets Mediterranean', 'Legendary Caves of Hercules', 'Africa-shaped cave opening', 'Pristine Robinson Beach', 'Dramatic cliff scenery'],
    description:
      'Cap Spartel is the northwestern tip of Africa where the Atlantic Ocean meets the Mediterranean Sea, marked by an iconic 19th-century lighthouse. The panoramic views from the cape are breathtaking, with Spain visible across the Strait of Gibraltar on clear days. Just below, the Caves of Hercules are legendary sea grottoes where, according to Greek mythology, Hercules rested after his eleven labors. The cave\'s ocean-facing opening is naturally shaped like the map of Africa, making it one of Morocco\'s most photographed natural wonders. Between the cape and the caves, Robinson Beach (Plage Robinson) offers pristine, often-deserted sand.',
    transport: 'Grand taxis from Tangier to Cap Spartel from 15 MAD per person or negotiate from 100 MAD for a private round trip with waiting time at both sites. No public bus. By car, drive west on the coastal road past the Rmilat forest. This is an easy half-day trip.',
    tip: 'Combine Cap Spartel and the Caves of Hercules in one half-day trip. Visit in the late afternoon for the best light and dramatic sunset views from the cape. The Caves entry fee is from 10 MAD. Walk along Robinson Beach if time permits. Bring a jacket as the cape can be windy.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, both sites, beach stop, and sometimes a seafood lunch at a clifftop restaurant',
  },
  {
    name: 'Ceuta (Spanish Enclave)',
    icon: Anchor,
    distance: '85 km to border (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 30 MAD',
    bestSeason: 'Year-round',
    highlights: ['Spanish sovereign territory in Africa', 'Duty-free shopping', 'Royal Walls fortress', 'Mediterranean beaches', 'Mix of Spanish and Moroccan culture'],
    description:
      'Ceuta is a fascinating Spanish autonomous city on the northern tip of Morocco, a surreal enclave where Europe meets Africa. Crossing the border at Fnideq/Tarajal takes you from Morocco into Spain without crossing the sea, complete with a currency change from dirhams to euros. The city has impressive fortifications including the Royal Walls (Murallas Reales), a scenic seaside promenade, the Cathedral of Our Lady of the Assumption, and duty-free shopping. It is a unique cultural experience, blending Spanish architecture, tapas bars, and Arabic influences in a compact, walkable city.',
    transport: 'Grand taxis from Tangier to Fnideq (border town) from 30 MAD per person (1.5 hours). From the border, walk across into Ceuta (bring your passport). By car, take the N13 east to the Fnideq/Tarajal border crossing. Allow 30-60 minutes for border formalities.',
    tip: 'Bring your passport as this is an international border crossing. EU, US, and UK citizens do not need a visa for Ceuta. Euros are needed in Ceuta; exchange money in Tangier beforehand or use ATMs in Ceuta. The duty-free shopping is best for electronics and Spanish goods. Avoid the border during Friday afternoons when it is extremely crowded.',
    guidedIncludes: 'Hotel pickup in Tangier, transport to border, assistance with border crossing, guided walk of Ceuta, and return',
  },
  {
    name: 'Larache & Lixus Ruins',
    icon: Camera,
    distance: '87 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 35 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Lixus Roman and Phoenician ruins', 'Charming Atlantic port town', 'Spanish colonial architecture', 'Fresh seafood market', 'Loukkos River estuary'],
    description:
      'Larache is an underrated Atlantic port town with a distinctive Spanish-Moroccan character, sitting at the mouth of the Loukkos River. The town has a beautiful crescent-shaped plaza, a lively fishing port, and a relaxed medina that sees very few tourists. Just 4 km north of Larache, the ancient ruins of Lixus are one of Morocco\'s hidden archaeological treasures, a Phoenician trading post established around 1100 BC that later became a Roman city. The hilltop site offers commanding views over the river estuary and the remains of a Roman amphitheater, baths, temples, and a fish-salting complex.',
    transport: 'Trains from Tangier to Larache from 35 MAD (1.5 hours). Grand taxis also available from 40 MAD per person. The Lixus ruins are a 15-minute taxi ride from Larache center (from 10 MAD). By car, take the N1 south along the coast.',
    tip: 'Visit Lixus in the morning when the hillside catches the best light. Entry to the ruins is free. Combine with lunch at one of Larache\'s excellent fish restaurants on the port. The beach at Larache (Plage Ras R\'mel) is reached by a small boat across the river for from 5 MAD.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, guided tour of Lixus ruins, Larache medina walk, and seafood lunch',
  },
  {
    name: 'Ksar el-Kebir',
    icon: Building,
    distance: '110 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 40 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Battle of the Three Kings site (1578)', 'Authentic market town atmosphere', 'Almohad-era history', 'Traditional Moroccan souks', 'Off-the-beaten-path feel'],
    description:
      'Ksar el-Kebir (the Great Fortress) is a historic inland town best known as the site of the Battle of the Three Kings in 1578, one of the most decisive battles in Moroccan and European history. In this single battle, three kings died: the Moroccan sultan, his rival, and the young Portuguese king Sebastian I, whose death ended Portuguese expansion in Morocco. Today the town is a bustling agricultural center with a large weekly souk, crumbling Almohad walls, and a deeply authentic atmosphere untouched by tourism. It offers a genuine glimpse into everyday Moroccan life.',
    transport: 'Trains from Tangier to Ksar el-Kebir from 30 MAD (1 hour direct). Grand taxis from 40 MAD. Located at a railway junction, the town has frequent connections. By car, take the N1 south then the N4 east.',
    tip: 'Visit on a Sunday for the massive weekly souk which draws farmers and traders from across the region. The town is best appreciated as a cultural immersion rather than for specific monuments. Combine with Larache and Lixus for a full day exploring the Loukkos region.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, historical walking tour, market visit, and lunch',
  },
  {
    name: 'Akchour Waterfalls',
    icon: Mountain,
    distance: '150 km (2.5 hours)',
    guidedPrice: 'From 600 MAD',
    diyPrice: 'From 80 MAD',
    bestSeason: 'Spring (March-June)',
    highlights: ['God\'s Bridge natural rock arch', 'Grand Cascade (300m waterfall)', 'Talassemtane National Park', 'Turquoise natural pools', 'Rif Mountain hiking trails'],
    description:
      'Akchour is the gateway to some of the most spectacular natural scenery in northern Morocco, located within Talassemtane National Park in the heart of the Rif Mountains. Two main trails lead to extraordinary natural wonders: the shorter trail (1.5 hours each way) reaches God\'s Bridge (Pont de Dieu), a massive natural rock arch spanning a gorge with emerald pools below; the longer trail (3 hours each way) reaches the Grand Cascade, a dramatic 300-meter tiered waterfall tumbling down the mountainside. Both trails follow the Oued Farda river through pristine forest.',
    transport: 'No direct public transport from Tangier. Grand taxi to Chefchaouen (from 60 MAD, 2.5 hours), then local taxi to Akchour village (from 20 MAD, 30 minutes). By car, drive to Chefchaouen then follow signs to Akchour. The last 15 km is unpaved but manageable.',
    tip: 'The God\'s Bridge trail is easier and shorter; the Grand Cascade trail is more demanding but rewarding. Wear proper hiking shoes as the trail is rocky and can be slippery. Bring plenty of water and snacks. Start early to complete the longer trail before afternoon heat. Swimming is possible in the natural pools in warmer months.',
    guidedIncludes: 'Hotel pickup in Tangier, 4x4 transport, hiking guide, packed lunch, and swimming stop',
  },
  {
    name: 'Jebha (Fishing Village)',
    icon: Anchor,
    distance: '155 km (3 hours)',
    guidedPrice: 'From 600 MAD',
    diyPrice: 'From 70 MAD',
    bestSeason: 'Summer & early autumn',
    highlights: ['Mediterranean fishing village', 'Dramatic coastal scenery', 'Fresh-from-boat seafood', 'Secluded beaches', 'Scenic Rif coast drive'],
    description:
      'Jebha is a small Mediterranean fishing village perched on a rocky headland along one of Morocco\'s most dramatic coastal roads. The drive from Tangier via Tetouan follows a winding corniche road carved into the Rif Mountains, with vertiginous views over turquoise bays and hidden coves. Jebha itself is a working fishing village where colorful boats bob in a sheltered harbor and the day\'s catch is grilled on the waterfront. The surrounding coastline has pristine, often empty beaches accessible by foot or small boat. This is Morocco at its most raw and undiscovered.',
    transport: 'Grand taxis from Tetouan to Jebha from 50 MAD per person (2 hours). No direct service from Tangier; change in Tetouan. By car, take the scenic coastal road N16 from Tetouan eastward. The road is paved but winding with many hairpin turns.',
    tip: 'This trip is best combined with an overnight or done as a long day trip. The coastal road is one of Morocco\'s most scenic drives but is slow going. Stop at the beaches east of Tetouan along the way. Have lunch at one of the simple seafood restaurants on the harbor where fish is grilled to order.',
    guidedIncludes: 'Hotel pickup in Tangier, transport via coastal road, beach stops, seafood lunch in Jebha, and return',
  },
  {
    name: 'Gibraltar (Ferry Day Trip)',
    icon: Anchor,
    distance: 'Ferry from Tangier (1-2 hours)',
    guidedPrice: 'From 800 MAD',
    diyPrice: 'From 300 MAD',
    bestSeason: 'Year-round (best spring-autumn)',
    highlights: ['Rock of Gibraltar', 'Famous Barbary macaques', 'St Michael\'s Cave', 'Europa Point lighthouse', 'Duty-free British shopping'],
    description:
      'A day trip from Tangier to Gibraltar offers the extraordinary experience of visiting a piece of Britain at the southern tip of Spain, all while gazing back at Morocco across the strait. FRS ferries run from Tangier Ville port to Tarifa (35 minutes), from where a bus or taxi takes you to Gibraltar (1 hour). The iconic Rock of Gibraltar rises 426 meters above sea level and is home to the only wild Barbary macaques in Europe. The Upper Rock Nature Reserve includes St Michael\'s Cave, the Great Siege Tunnels, and the Moorish Castle. This cross-continental day trip requires a passport and possibly visas for both Spain and Gibraltar.',
    transport: 'FRS ferry from Tangier Ville to Tarifa from 300 MAD one-way (35 minutes). From Tarifa, bus to La Linea de la Concepcion (1 hour, from 100 MAD). Walk across the border into Gibraltar. Alternatively, ferry from Tangier Med to Algeciras (1-2 hours, from 250 MAD) and bus to La Linea.',
    tip: 'Book ferry tickets in advance online for the best prices. Bring your passport and check visa requirements for Spain and the UK (Gibraltar). Euros are used in Tarifa; Gibraltar uses pounds but accepts euros. The cable car to the top of the Rock costs about 160 MAD equivalent. Allow a full day from early morning to evening.',
    guidedIncludes: 'Hotel pickup in Tangier, ferry tickets, transport in Spain, Rock of Gibraltar tour, and return ferry',
  },
  {
    name: 'Moulay Bousselham (Bird Lagoon)',
    icon: Sun,
    distance: '140 km (2 hours)',
    guidedPrice: 'From 500 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Winter & spring (bird migration)',
    highlights: ['Merja Zerga lagoon (Ramsar site)', 'Flamingos and migratory birds', 'Traditional fishing village', 'Boat trips on the lagoon', 'Wide Atlantic beach'],
    description:
      'Moulay Bousselham is a tranquil fishing village on the Atlantic coast, famous for the Merja Zerga (Blue Lagoon), one of North Africa\'s most important wetlands for migratory birds. Designated as a Ramsar site and a Biological Reserve, the lagoon hosts over 200 bird species including flamingos, spoonbills, herons, ospreys, and thousands of wintering waders. Local fishermen offer boat tours through the calm lagoon waters, gliding past flocks of birds against a backdrop of dunes and marshland. The village itself has a laid-back charm with a wide sandy beach, a small whitewashed shrine, and excellent seafood.',
    transport: 'Grand taxis from Tangier to Moulay Bousselham from 50 MAD per person (2 hours) via Larache or Souk el Arbaa. No train service. By car, take the N1 south to the Moulay Bousselham turn-off. The road is well-maintained.',
    tip: 'Boat trips on the lagoon cost from 150 MAD per boat (fits 6-8 people) and last about 1.5 hours. The best birdwatching is at dawn from November to March during migration season. Bring binoculars if you have them. Combine with Larache and Lixus for a full-day Atlantic coast itinerary.',
    guidedIncludes: 'Hotel pickup in Tangier, transport, lagoon boat trip, birdwatching guide, and lunch in the village',
  },
] as const;

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { trip: 'Chefchaouen', distance: '115 km', time: '2 hrs', guidedPrice: 'From 500 MAD', diyPrice: 'From 50 MAD', difficulty: 'Full day' },
  { trip: 'Asilah', distance: '46 km', time: '45 min', guidedPrice: 'From 300 MAD', diyPrice: 'From 20 MAD', difficulty: 'Easy' },
  { trip: 'Tetouan', distance: '60 km', time: '1 hr', guidedPrice: 'From 350 MAD', diyPrice: 'From 25 MAD', difficulty: 'Easy' },
  { trip: 'Cap Spartel & Caves', distance: '14 km', time: '20 min', guidedPrice: 'From 300 MAD', diyPrice: 'From 15 MAD', difficulty: 'Easy' },
  { trip: 'Ceuta', distance: '85 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 30 MAD', difficulty: 'Moderate' },
  { trip: 'Larache & Lixus', distance: '87 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 35 MAD', difficulty: 'Easy' },
  { trip: 'Ksar el-Kebir', distance: '110 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 40 MAD', difficulty: 'Easy' },
  { trip: 'Akchour Waterfalls', distance: '150 km', time: '2.5 hrs', guidedPrice: 'From 600 MAD', diyPrice: 'From 80 MAD', difficulty: 'Challenging' },
  { trip: 'Jebha', distance: '155 km', time: '3 hrs', guidedPrice: 'From 600 MAD', diyPrice: 'From 70 MAD', difficulty: 'Long day' },
  { trip: 'Gibraltar', distance: 'Ferry', time: '1-2 hrs', guidedPrice: 'From 800 MAD', diyPrice: 'From 300 MAD', difficulty: 'Full day' },
  { trip: 'Moulay Bousselham', distance: '140 km', time: '2 hrs', guidedPrice: 'From 500 MAD', diyPrice: 'From 50 MAD', difficulty: 'Full day' },
];

/* ===============================================================
   DATA: SEASONAL GUIDE
   =============================================================== */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    temp: '18-26 C',
    description: 'The best season for day trips from Tangier. Wildflowers fill the Rif Mountains, Akchour waterfalls are at peak flow, and temperatures are ideal for exploring medinas and hiking trails.',
    bestTrips: ['Akchour waterfalls (peak water flow)', 'Chefchaouen (wildflowers, mild weather)', 'Lixus ruins (green hillside)', 'Moulay Bousselham (spring migration)'],
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    temp: '25-33 C',
    description: 'Warm but the Atlantic breeze keeps coastal towns pleasant. Asilah hosts its arts festival in August. Inland trips to Chefchaouen and Ksar el-Kebir are hotter. Beach destinations shine in summer.',
    bestTrips: ['Asilah (beach and arts festival)', 'Cap Spartel (cool sea breeze)', 'Jebha (Mediterranean beaches)', 'Gibraltar (best ferry weather)'],
  },
  {
    season: 'Autumn (September-November)',
    icon: Calendar,
    temp: '18-28 C',
    description: 'Excellent conditions with warm days, fewer crowds, and comfortable temperatures for mountain and inland trips. Asilah murals are freshest after the August festival. Bird migration begins at Moulay Bousselham.',
    bestTrips: ['Chefchaouen (fewer crowds, warm)', 'Moulay Bousselham (migration starts)', 'Tetouan (comfortable walking)', 'Akchour (autumn colors in Rif)'],
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    temp: '12-18 C',
    description: 'Mild in Tangier with occasional rain. The Rif Mountains can be cold and wet, making Chefchaouen and Akchour less ideal. Coastal and nearby trips remain enjoyable. Peak birdwatching season at Moulay Bousselham.',
    bestTrips: ['Cap Spartel (dramatic winter seas)', 'Moulay Bousselham (peak birding)', 'Asilah (mild Atlantic coast)', 'Tetouan (rain-sheltered medina)'],
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What are the best day trips from Tangier?',
    answer:
      'The most popular day trips from Tangier are Chefchaouen (the blue city, 2 hours), Asilah (artistic beach town, 45 minutes), Tetouan (UNESCO medina, 1 hour), Cap Spartel and the Caves of Hercules (20 minutes), and Akchour waterfalls (2.5 hours). For a unique cross-border experience, Ceuta (Spanish enclave) and Gibraltar (via ferry) are also excellent options. Closer destinations like Cap Spartel work as half-day trips.',
  },
  {
    question: 'How much do day trips from Tangier cost?',
    answer:
      'DIY day trips can cost as little as from 15 MAD per person for Cap Spartel by grand taxi. Guided group day tours range from 300 MAD to 800 MAD per person depending on the destination and inclusions. The most popular guided trip to Chefchaouen is typically from 500 MAD with lunch included. Private guided tours start from 1,200 MAD per vehicle. Prices are seasonal and may change during peak periods.',
  },
  {
    question: 'Can I visit Chefchaouen as a day trip from Tangier?',
    answer:
      'Yes, Chefchaouen is doable as a day trip from Tangier, though it is a long day. The drive takes about 2 hours each way via the Rif Mountain road. Most guided tours depart at 8 AM and return by 7 PM, giving you 4-5 hours in the blue city. However, many travelers prefer to stay overnight to enjoy Chefchaouen at sunset and in the quiet morning hours. If doing a day trip, go on a weekday to avoid weekend crowds.',
  },
  {
    question: 'How do I get to Cap Spartel and the Caves of Hercules?',
    answer:
      'Cap Spartel is only 14 km from Tangier center. Grand taxis from Tangier cost from 15 MAD per person one-way, or you can negotiate from 100 MAD for a private round trip with waiting time at both Cap Spartel and the Caves. There is no public bus service. By car, drive west through the Rmilat forest area. The Caves of Hercules have a small entry fee of from 10 MAD. This is an easy half-day trip.',
  },
  {
    question: 'Can I take a ferry to Gibraltar from Tangier?',
    answer:
      'Yes, FRS ferries run from Tangier Ville port to Tarifa in Spain (35 minutes, from 300 MAD one-way). From Tarifa, take a bus to La Linea (1 hour), then walk across the border into Gibraltar. You will need a valid passport and possibly visas for Spain and the UK (Gibraltar). Alternatively, ferries from Tangier Med reach Algeciras. Allow a full day and book ferry tickets in advance for the best prices.',
  },
  {
    question: 'What is the best season for day trips from Tangier?',
    answer:
      'Spring (April-June) and autumn (September-November) offer the best weather at 20-28C with clear skies. Summer is warm but the Atlantic breeze keeps Tangier and coastal towns pleasant. Winter is mild at 12-18C but the Rif Mountains can be cold and rainy. For birdwatching at Moulay Bousselham, November to March is peak season. Akchour waterfalls are best in spring when water levels are highest.',
  },
  {
    question: 'Is Tetouan worth visiting from Tangier?',
    answer:
      'Absolutely. Tetouan has a UNESCO World Heritage medina that is one of Morocco\'s most authentic, with strong Andalusian-Spanish influences. The journey is only 1 hour by grand taxi (from 25 MAD) making it one of the easiest day trips from Tangier. Tetouan sees far fewer tourists, offering a genuine experience. The Royal Artisan School (Dar Sanaa), Archaeological Museum, and the old mellah are standout attractions.',
  },
  {
    question: 'Should I book a guided tour or go independently from Tangier?',
    answer:
      'For Asilah, Tetouan, and Cap Spartel, going independently by grand taxi or train is easy and much cheaper. For Chefchaouen, a guided tour is more practical due to the winding mountain road and limited parking. For Akchour, a guide is recommended as trails can be unclear. For Gibraltar or Ceuta, independent travel works well via ferry or grand taxi. Most hotels in Tangier can arrange tours the day before your trip.',
  },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function DayTripsFromTangierPage() {
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
            backgroundImage: 'url(/images/hero-tangier-bay.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Day Trips from Tangier</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Excursions &amp; Day Tours
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Day Trips from Tangier
            <br className="hidden md:block" /> in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            11 incredible day trips from the blue medina of Chefchaouen and artistic Asilah
            to the Caves of Hercules and Rif Mountain waterfalls. Guided tours from 300 MAD, DIY from 15 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Tangier Is a Perfect Base for Day Trips
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tangier sits at the crossroads of Africa and Europe, perched on the northwestern
                tip of Morocco where the Atlantic Ocean meets the Mediterranean Sea. This unique
                position makes it one of the best bases for day trips in the country, with the
                blue city of Chefchaouen, the artistic beach town of Asilah, and the UNESCO-listed
                medina of Tetouan all within easy reach.
              </p>
              <p>
                The diversity of experiences is remarkable. Within a morning&apos;s drive you can
                stand at Africa&apos;s northwestern edge at Cap Spartel, cross into a Spanish enclave
                at Ceuta, explore Phoenician ruins at Lixus, hike to thundering waterfalls in the
                Rif Mountains, or even take a ferry to Gibraltar. Closer to home, the Caves of
                Hercules are just 20 minutes from the city center.
              </p>
              <p>
                This guide covers the 11 best day trips from Tangier with honest advice on transport
                options, costs, what is included on guided tours, the best season for each trip,
                and whether to go DIY or book a tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Stats -- */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">11</div>
              <div className="text-sm text-[var(--text-muted)]">Day trip destinations</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">20 min</div>
              <div className="text-sm text-[var(--text-muted)]">Closest trip</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">15 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Cheapest DIY trip</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">300 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Guided tours from</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day Trip Cards -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            11 Best Day Trips from Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From 20-minute escapes to cross-continental adventures, these are the top excursions from Tangier for every type of traveler.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by season, group size, and provider. Always confirm current rates before booking.
          </p>

          <div className="space-y-8">
            {dayTrips.map((trip, index) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-5 text-white">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <TripIcon className="w-6 h-6" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">{trip.name}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mt-2">
                      <span className="flex items-center gap-1"><Navigation className="w-3.5 h-3.5" /> {trip.distance}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> Guided: {trip.guidedPrice}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {trip.bestSeason}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mb-5">
                      <DollarSign className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        Guided: {trip.guidedPrice} per person | DIY: {trip.diyPrice} per person
                      </p>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-5">{trip.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Highlights</h4>
                        <div className="space-y-2">
                          {trip.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Getting There</h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{trip.transport}</p>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Guided Tour Includes</h4>
                        <p className="text-sm text-[var(--text-secondary)]">{trip.guidedIncludes}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {trip.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Comparison Table -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Comparison Table
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All 11 day trips at a glance with distances, prices, and difficulty levels.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="card-moroccan overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Day Trip</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Distance</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Drive Time</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Guided Price</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">DIY Price</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.trip} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 font-medium text-[var(--text-primary)]">{row.trip}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.distance}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.time}</td>
                      <td className="p-3 text-[var(--color-accent)] font-medium">{row.guidedPrice}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.diyPrice}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)] max-w-lg mx-auto mt-4">
            <Info className="w-3 h-3 inline mr-1" />
            Guided prices are per person for group tours. Private tours are typically 2-3x higher.
            All prices are starting prices and seasonal pricing may apply.
          </p>
        </div>
      </section>

      {/* -- DIY vs Guided -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            DIY vs Guided Tours: Which Should You Choose?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Several day trips from Tangier are easy to do independently by grand taxi or train. Others benefit from organized transport and a knowledgeable guide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Car className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Best for DIY
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Asilah</strong> - Train from 20 MAD, just 45 minutes away</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Tetouan</strong> - Grand taxi from 25 MAD, 1 hour</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Cap Spartel</strong> - Grand taxi from 15 MAD, 20 minutes</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Ceuta</strong> - Grand taxi to border from 30 MAD, walk across</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                  DIY saves 60-80% compared to guided tours. Tangier has excellent grand taxi and train links to nearby towns.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Shield className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Better with a Guide
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Chefchaouen</strong> - Winding mountain road, parking issues</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Akchour</strong> - Remote trails, guide finds best paths</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Gibraltar</strong> - Multi-transport logistics, border crossings</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Jebha</strong> - Remote, winding coastal road, no direct transport</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                  Guided tours include hotel pickup, knowledgeable guides, and often lunch. Book through your hotel or a reputable agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Transport Options -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around: Transport from Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tangier has good transport connections along the coast and to nearby cities. Here are your main options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Car className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Grand Taxis</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Shared taxis (6 passengers) depart from the main gare routiere when full. The cheapest and most common option for nearby destinations. Fares are fixed per route.
              </p>
              <div className="space-y-1 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Cap Spartel: from 15 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Tetouan: from 25 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Asilah: from 25 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Chefchaouen: from 60 MAD</div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Bus className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Trains & Buses</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                ONCF trains serve Asilah (from 20 MAD, 45 min) and Larache (from 35 MAD, 1.5 hrs). CTM buses cover wider routes including Chefchaouen and Tetouan.
              </p>
              <div className="space-y-1 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Train to Asilah: from 20 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Train to Larache: from 35 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> CTM bus to Chefchaouen: from 50 MAD</div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Anchor className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Ferries & Rental Cars</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                FRS and other operators run ferries to Spain from Tangier Ville and Tangier Med. Rental cars from 300 MAD/day are ideal for the Rif Mountains and multi-stop trips.
              </p>
              <div className="space-y-1 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Ferry to Tarifa: from 300 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Best for: Akchour, Jebha</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Best for: Flexible schedules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Seasonal Guide -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Each Day Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tangier enjoys a mild Mediterranean-Atlantic climate, but mountain and inland destinations vary significantly by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Thermometer className="w-3 h-3" />
                        {season.temp}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{season.description}</p>
                  <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Best Trips This Season</h4>
                  <div className="space-y-1.5">
                    {season.bestTrips.map((trip, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {trip}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gallery -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Landscapes Around Tangier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-chefchaouen-blue.webp"
                alt="Blue-washed streets of Chefchaouen medina with flower pots and vibrant doorways in the Rif Mountains"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Chefchaouen Blue Medina</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-asilah-murals.webp"
                alt="Colorful street murals painted on whitewashed walls of Asilah medina on the Atlantic coast"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Asilah Street Murals</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-tetouan.webp"
                alt="Panoramic view of Tetouan white medina with the Rif Mountains rising behind the historic city"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Tetouan, the White Dove</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Day Trips from Tangier
          </h2>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Book tours through your hotel or a reputable agency; avoid touts at the port and medina entrance
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Start early (7-8 AM) for distant trips like Chefchaouen and Akchour to maximize your time
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Bring cash in small denominations for grand taxis, tips, entry fees, and local purchases
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Carry your passport for Ceuta and Gibraltar trips as they involve international border crossings
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Grand taxis leave when full (6 passengers); arrive early at the gare routiere for popular routes
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Confirm tour price includes lunch, transport, and entry fees before booking
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Wear proper hiking shoes for Akchour waterfalls and bring plenty of water and sunscreen
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Bring a jacket for Cap Spartel as the cape can be very windy even on warm days
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/tangier" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Tangier City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about Tangier: the kasbah, medina, beaches, food, and practical travel tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/things-to-do-tangier" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Things to Do in Tangier
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to attractions, activities, and experiences in Tangier and its surroundings.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/chefchaouen" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Chefchaouen Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s blue city: best viewpoints, where to stay, restaurants, and how to get there from Tangier and Fes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                12 best day trips from Marrakech including Ouzoud Falls, Ourika Valley, Essaouira, and Ait Ben Haddou.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-fes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                10 best day trips from Fes: Meknes and Volubilis, Ifrane, cedar forests, Moulay Idriss, and the Middle Atlas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-casablanca" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Casablanca
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Best excursions from Casablanca: Rabat, El Jadida, Azemmour, Mohammedia, and coastal escapes.
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
