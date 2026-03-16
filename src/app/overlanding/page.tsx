import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Truck,
  MapPin,
  Clock,
  Fuel,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mountain,
  Compass,
  Route,
  Sun,
  Navigation,
  CircleDollarSign,
  Thermometer,
  Snowflake,
  Leaf,
  Tent,
  Wrench,
  Globe,
  Star,
  Map,
  Users,
  Info,
  Calendar,
  Anchor,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '4x4 Overlanding & Vanlife in Morocco | Complete Guide 2025',
  description:
    'The ultimate guide to overlanding, 4x4 adventures, and vanlife in Morocco. Overland routes, wild camping spots, equipped campsites, vehicle rental, fuel, border crossings, GPS waypoints, and budget tips for Europe\'s favorite off-road destination.',
  keywords: [
    'morocco overlanding',
    'morocco 4x4',
    'morocco vanlife',
    'morocco camper van',
    'overlanding morocco routes',
    'wild camping morocco',
    'morocco off road',
    'morocco desert driving',
    'morocco campsites',
    'morocco 4x4 rental',
    'morocco overland guide',
    'atlas mountains 4x4',
    'sahara overland',
    'morocco border crossing',
    'tizi n tichka 4x4',
    'anti atlas overlanding',
    'morocco gps waypoints',
    'morocco vehicle insurance',
  ],
  openGraph: {
    title: '4x4 Overlanding & Vanlife in Morocco | Complete Guide',
    description:
      'Everything you need for overlanding Morocco: 5 epic routes, 30+ campsites, vehicle rental, wild camping rules, fuel guide, GPS waypoints, and budget breakdown.',
    url: 'https://citytoursmorocco.com/overlanding',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: '4x4 vehicle driving through the Moroccan desert with sand dunes in the background',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/overlanding' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: '4x4 Overlanding & Vanlife in Morocco',
  description:
    'Complete guide to overlanding, 4x4 adventures, and vanlife in Morocco including routes, campsites, vehicle rental, and practical advice.',
  url: 'https://citytoursmorocco.com/overlanding',
  location: { '@type': 'Country', name: 'Morocco' },
};

/* ===================================================================
   WHY MOROCCO FOR OVERLANDING
   =================================================================== */

const whyOverland = [
  {
    icon: Globe,
    title: 'Just 14 km from Europe',
    description:
      'Morocco is the closest African country to Europe. A 35-minute ferry from Tarifa or a 2-hour crossing from Algeciras puts you on the African continent with your own vehicle. No flights, no shipping containers, just drive on and drive off.',
  },
  {
    icon: Mountain,
    title: 'Astonishing Terrain Diversity',
    description:
      'From Atlantic surf beaches and cedar forests to 4,000m mountain passes, lunar rock plateaus, palm-filled oases, and towering Saharan dunes. No other country this close to Europe offers such radical landscape changes within a single day of driving.',
  },
  {
    icon: Tent,
    title: 'Wild Camping Friendly',
    description:
      'Morocco is one of the most wild camping-friendly countries in the world. Outside of cities and military zones, free camping is widely tolerated. Overlanders park on beaches, in oases, beside rivers, and at the foot of sand dunes with rarely any issues.',
  },
  {
    icon: CircleDollarSign,
    title: 'Incredibly Affordable',
    description:
      'Fuel costs roughly 50% less than Western Europe. Street food meals cost 15-30 MAD ($1.50-3), a campsite pitch is 50-80 MAD/night ($5-8), and even luxury glamping in the Sahara is a fraction of European prices. A couple can overland Morocco for $30-50/day.',
  },
  {
    icon: Users,
    title: 'Welcoming Local Culture',
    description:
      'Moroccans are famously hospitable. Expect to be invited for tea, given directions with a smile, and helped when stuck in sand. The overlanding community is massive and well-established, with local mechanics who understand foreign vehicles.',
  },
  {
    icon: Sun,
    title: 'Year-Round Sunshine',
    description:
      'While Northern Europe shivers through winter, southern Morocco basks in 20-25 degrees. Thousands of European overlanders and vanlifers migrate south each October to spend the winter season camping along the Atlantic coast or in the desert.',
  },
];

/* ===================================================================
   OVERLAND ROUTES
   =================================================================== */

const overlandRoutes = [
  {
    id: 'atlantic-coast',
    name: 'The Atlantic Coast Route',
    subtitle: 'Tangier to Agadir via the Ocean Road',
    duration: '7-14 days',
    distance: '1,200 km',
    difficulty: 'Easy',
    difficultyColor: '#2d8a4e',
    terrain: 'Paved roads, coastal tracks, beach access',
    bestSeason: 'October - April',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    description:
      'The most popular overlanding route in Morocco follows the Atlantic coastline from Tangier south to Agadir and beyond. This is the classic winter-sun route for European vanlifers escaping the cold. Mostly paved with easy beach detours, it suits all vehicle types including standard camper vans. The coast offers endless wild camping on beaches, world-class surfing, fresh seafood markets, and the gorgeous fortress towns of El Jadida, Essaouira, and Sidi Ifni.',
    highlights: [
      'Asilah street art medina',
      'Rabat capital and Kasbah des Oudaias',
      'Oualidia oyster lagoon',
      'Essaouira wind city',
      'Taghazout surf village',
      'Imsouane longest wave in Africa',
      'Mirleft and Legzira beach arches',
      'Sidi Ifni colonial architecture',
    ],
    keyWaypoints: [
      { name: 'Tangier Med Port', coords: '35.8906, -5.5068', note: 'Ferry arrival point' },
      { name: 'Moulay Bousselham', coords: '34.8778, -6.2911', note: 'Lagoon wild camp' },
      { name: 'Oualidia Beach', coords: '32.7340, -9.0409', note: 'Oysters & calm lagoon' },
      { name: 'Sidi Kaouki', coords: '31.3570, -9.7911', note: 'Surf beach campsite' },
      { name: 'Taghazout', coords: '30.5444, -9.7084', note: 'Surf capital' },
      { name: 'Legzira Beach', coords: '29.5652, -10.0768', note: 'Iconic stone arches' },
    ],
  },
  {
    id: 'atlas-passes',
    name: 'Atlas Mountain Passes',
    subtitle: 'Tizi n\'Tichka, Tizi n\'Test & Beyond',
    duration: '5-10 days',
    distance: '600-900 km',
    difficulty: 'Moderate to Challenging',
    difficultyColor: '#C4960C',
    terrain: 'Mountain passes, gravel tracks, some pistes',
    bestSeason: 'April - June, September - November',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    description:
      'Cross the backbone of Morocco via its legendary mountain passes. The Tizi n\'Tichka (2,260m) on the N9 is fully paved but spectacular, connecting Marrakech to the Saharan side. The Tizi n\'Test (2,092m) on the R203 is narrower, wilder, and far less trafficked, a genuine mountain adventure. For experienced overlanders, the dirt pistes through the High Atlas between Demnate and Imilchil offer some of the most remote and stunning driving in North Africa.',
    highlights: [
      'Tizi n\'Tichka summit (2,260m)',
      'Tizi n\'Test pass (2,092m)',
      'Ait Benhaddou UNESCO kasbah',
      'Tin Mal mosque (12th century)',
      'Toubkal National Park',
      'Cathedral rocks of Taghia',
      'Imilchil plateau & lakes',
      'Cascades d\'Ouzoud waterfalls',
    ],
    keyWaypoints: [
      { name: 'Tizi n\'Tichka Summit', coords: '31.2924, -7.3831', note: '2,260m paved pass' },
      { name: 'Tizi n\'Test Summit', coords: '30.8667, -8.3750', note: '2,092m narrow pass' },
      { name: 'Ait Benhaddou', coords: '31.0472, -7.1322', note: 'UNESCO kasbah' },
      { name: 'Imilchil', coords: '32.1522, -5.6261', note: 'Remote plateau camp' },
      { name: 'Lac Tislit', coords: '32.1774, -5.6208', note: 'High altitude lake' },
      { name: 'Cascades d\'Ouzoud', coords: '32.0153, -6.7172', note: 'Morocco\'s tallest falls' },
    ],
  },
  {
    id: 'desert-circuit',
    name: 'The Desert Circuit',
    subtitle: 'Ouarzazate to Merzouga to Zagora',
    duration: '7-14 days',
    distance: '800-1,200 km',
    difficulty: 'Moderate to Challenging',
    difficultyColor: '#C4960C',
    terrain: 'Paved, gravel pistes, soft sand sections',
    bestSeason: 'October - April (avoid summer heat)',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e66aca2?q=80&w=800',
    description:
      'The crown jewel of Moroccan overlanding. This circuit takes you through the full spectrum of desert landscapes: the dramatic Dades and Todra gorges, the vast hamada (stone desert) plateaus, the towering Erg Chebbi dunes at Merzouga, and the endless Draa Valley palm groves leading to M\'hamid and the edge of the true Sahara. 4x4 recommended for the desert pistes between Merzouga and Zagora, though the main roads are paved.',
    highlights: [
      'Dades Gorge and serpentine road',
      'Todra Gorge 300m limestone walls',
      'Erg Chebbi dunes (150m high)',
      'Khamlia Gnaoua music village',
      'N\'kob kasbah village (45 kasbahs)',
      'Draa Valley palm oasis',
      'Erg Chigaga wild dunes',
      'M\'hamid gateway to Sahara',
    ],
    keyWaypoints: [
      { name: 'Ouarzazate', coords: '30.9189, -6.8936', note: 'Circuit start point' },
      { name: 'Boumalne Dades', coords: '31.3707, -5.9944', note: 'Gorge entrance' },
      { name: 'Todra Gorge', coords: '31.5892, -5.5969', note: 'Iconic canyon camp' },
      { name: 'Merzouga', coords: '31.0801, -4.0131', note: 'Erg Chebbi dunes' },
      { name: 'Zagora', coords: '30.3281, -5.8381', note: 'Draa Valley hub' },
      { name: 'M\'hamid', coords: '29.8252, -5.7222', note: 'End of the road, Sahara' },
    ],
  },
  {
    id: 'anti-atlas',
    name: 'The Anti-Atlas Loop',
    subtitle: 'Tafraoute, Tata & Foum Zguid',
    duration: '5-10 days',
    distance: '700-1,000 km',
    difficulty: 'Challenging',
    difficultyColor: '#dc3545',
    terrain: 'Remote pistes, rocky tracks, some sand',
    bestSeason: 'November - March',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800',
    description:
      'The Anti-Atlas is Morocco\'s most underrated overlanding region. South of the High Atlas, this ancient granite landscape offers surreal rock formations, painted villages, prehistoric rock carvings, vast empty valleys, and some of the most spectacular free camping in the country. The loop through Tafraoute (with its famous painted rocks), Tata (date palm oasis), and Foum Zguid (gateway to Lac Iriqui) rewards those who seek emptiness and geological drama. 4x4 essential for many sections.',
    highlights: [
      'Tafraoute granite valley',
      'Jean Verame painted rocks',
      'Ameln Valley almond blossoms',
      'Ait Mansour gorge',
      'Tata palm oasis',
      'Akka prehistoric rock carvings',
      'Foum Zguid & Lac Iriqui',
      'Jebel Bani mountain ridge',
    ],
    keyWaypoints: [
      { name: 'Tafraoute', coords: '29.7214, -8.9753', note: 'Granite valley base' },
      { name: 'Painted Rocks', coords: '29.6781, -9.0208', note: 'Jean Verame art' },
      { name: 'Ait Mansour Gorge', coords: '29.6111, -9.1667', note: 'Palm-filled canyon' },
      { name: 'Tata', coords: '29.7453, -7.9722', note: 'Desert oasis town' },
      { name: 'Foum Zguid', coords: '30.0833, -6.8833', note: 'Lac Iriqui access' },
      { name: 'Igherm', coords: '30.0636, -8.4281', note: 'Mountain village stop' },
    ],
  },
  {
    id: 'northern-circuit',
    name: 'The Northern Circuit',
    subtitle: 'Tangier, Chefchaouen, Fes & Meknes',
    duration: '5-10 days',
    distance: '600-800 km',
    difficulty: 'Easy to Moderate',
    difficultyColor: '#2d8a4e',
    terrain: 'Paved roads, mountain roads, some forest tracks',
    bestSeason: 'March - June, September - November',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
    description:
      'The green, mountainous north of Morocco is a world apart from the desert south. This circuit connects the Mediterranean port of Tangier, the legendary blue-washed medina of Chefchaouen, the ancient imperial cities of Fes and Meknes, and the cedar forests of the Middle Atlas with their Barbary macaques. The Rif mountains offer beautiful forest camping, and the well-paved roads suit all vehicle types. Combine this with the coast or desert route for the ultimate grand tour.',
    highlights: [
      'Tangier Kasbah and Cafe Hafa',
      'Chefchaouen blue medina',
      'Akchour waterfalls',
      'Fes medina (world\'s largest)',
      'Meknes imperial granaries',
      'Volubilis Roman ruins',
      'Ifrane cedar forests',
      'Azrou Barbary macaques',
    ],
    keyWaypoints: [
      { name: 'Tangier', coords: '35.7595, -5.8340', note: 'Ferry arrival point' },
      { name: 'Chefchaouen', coords: '35.1714, -5.2636', note: 'Blue city, mountain camp' },
      { name: 'Fes', coords: '34.0331, -5.0003', note: 'Imperial city' },
      { name: 'Volubilis', coords: '34.0730, -5.5544', note: 'Roman ruins' },
      { name: 'Meknes', coords: '33.8935, -5.5473', note: 'Imperial city' },
      { name: 'Azrou', coords: '33.4408, -5.2214', note: 'Cedar forest & monkeys' },
    ],
  },
];

/* ===================================================================
   VEHICLE REQUIREMENTS
   =================================================================== */

const vehicleTypes = [
  {
    type: 'Camper Van / Motorhome',
    suitability: 'Coast & main roads',
    pros: 'Self-contained living, comfortable, kitchenette, easy to drive',
    cons: 'Cannot handle rough pistes, limited to paved and good gravel roads, challenging in narrow medina streets',
    bestFor: 'Atlantic coast route, northern circuit, families wanting comfort',
  },
  {
    type: '4x4 with Rooftop Tent',
    suitability: 'All routes including desert',
    pros: 'Go anywhere capability, quick setup camp, good ground clearance, handles sand and rocks',
    cons: 'Less living space than a van, exposed to elements, packing requires discipline',
    bestFor: 'Desert circuit, Anti-Atlas, mountain passes, serious overlanding',
  },
  {
    type: 'Pickup Truck with Camper',
    suitability: 'Most routes',
    pros: 'Good clearance, solid payload, real bed and kitchen, removable camper cell',
    cons: 'Top-heavy on mountain passes, expensive to rent, harder to find in Morocco',
    bestFor: 'Extended overlanding trips, couples wanting comfort with capability',
  },
  {
    type: 'Standard SUV + Tent',
    suitability: 'Most paved routes, some pistes',
    pros: 'Cheap to rent, fuel efficient, easy to park, flexible with accommodation',
    cons: 'Ground clearance limits, no self-contained camping, need separate tent and cooking gear',
    bestFor: 'Budget overlanders, mixed hotel and camping trips, short desert excursions',
  },
];

/* ===================================================================
   RENTAL COMPANIES
   =================================================================== */

const rentalCompanies = [
  { name: 'Indie Campers Morocco', type: 'Camper Van', location: 'Marrakech, Casablanca', price: 'From 600 MAD/day', note: 'Large European fleet, well-maintained Fiat Ducato and VW-based vans. Online booking, one-way rentals available. Good customer support in English and French.' },
  { name: 'Roadsurfer Morocco', type: 'Camper Van', location: 'Marrakech', price: 'From 700 MAD/day', note: 'Premium camper vans with full kitchen and bathroom. German quality standards, comprehensive insurance included. Popular with European winter-sun travelers.' },
  { name: 'Moroccan Vans', type: 'Camper Van', location: 'Marrakech, Agadir', price: 'From 450 MAD/day', note: 'Local company with converted Renault Masters and Mercedes Sprinters. Good value, local knowledge, flexible pickup and dropoff locations throughout Morocco.' },
  { name: 'Sahara 4x4 Rental', type: '4x4', location: 'Ouarzazate, Marrakech', price: 'From 800 MAD/day', note: 'Specializes in Toyota Land Cruisers and Hilux pickups. Desert-proven vehicles with sand plates, compressor, and recovery gear. Guides available.' },
  { name: 'Morocco Off-Road', type: '4x4 + Rooftop Tent', location: 'Marrakech', price: 'From 1,200 MAD/day', note: 'Complete overlanding packages with rooftop tent, fridge, cooking gear, and GPS pre-loaded with off-road tracks. Land Rover Defenders and Toyota Land Cruisers.' },
  { name: 'Europcar Morocco', type: 'SUV / 4x4', location: 'All major cities & airports', price: 'From 500 MAD/day', note: 'International brand with wide SUV selection. Dacia Duster is the popular budget 4x4 choice. Airport pickup, good roadside assistance network.' },
  { name: 'Hertz Morocco', type: 'SUV / 4x4', location: 'All major cities & airports', price: 'From 550 MAD/day', note: 'Reliable international brand. RAV4 and Tucson available for light overlanding. Good insurance options but read the off-road exclusion clauses carefully.' },
  { name: 'Avis Morocco', type: 'SUV / 4x4', location: 'All major cities & airports', price: 'From 500 MAD/day', note: 'Wide selection of SUVs. Some offices carry Mitsubishi Pajeros suitable for desert pistes. One-way rentals between major cities available.' },
  { name: 'Medlock 4x4', type: '4x4 + Equipment', location: 'Marrakech', price: 'From 1,000 MAD/day', note: 'Land Rover Defender specialists. Fully expedition-equipped vehicles with long-range fuel tanks, recovery equipment, rooftop tents, and satellite phones.' },
  { name: 'Caravane du Sud', type: '4x4', location: 'Ouarzazate, Zagora', price: 'From 700 MAD/day', note: 'Local operator with deep desert knowledge. Toyota Land Cruisers with experienced driver-guides available. Perfect for Sahara expeditions from the south side.' },
  { name: 'VanBreak Morocco', type: 'Camper Van', location: 'Casablanca', price: 'From 500 MAD/day', note: 'Budget-friendly converted vans. Fiat Ducato and Citroen Jumper bases. Basic but functional for coast-hugging vanlifers. Free airport transfer.' },
  { name: 'Wildcamper Morocco', type: 'Camper Van + 4x4 Van', location: 'Agadir, Marrakech', price: 'From 650 MAD/day', note: 'Unique 4x4 camper vans on Iveco Daily 4x4 base. Go off-road with full camper facilities. Small fleet so book well in advance, especially October-March.' },
  { name: 'Desert Majesty Tours', type: '4x4 + Guide', location: 'Errachidia, Merzouga', price: 'From 900 MAD/day', note: 'Self-drive 4x4 rentals or guided desert expeditions. Excellent for first-timers nervous about desert driving. Vehicles come with sat phone and sand ladders.' },
  { name: 'Sixt Morocco', type: 'SUV', location: 'Major airports', price: 'From 450 MAD/day', note: 'Good range of Dacia Dusters and Hyundai Tucsons. Budget-friendly for paved road overlanding. Be aware that off-road driving may void insurance coverage.' },
  { name: 'Yescapa Morocco', type: 'Camper Van (P2P)', location: 'Various', price: 'From 400 MAD/day', note: 'Peer-to-peer camper van rental platform. Rent directly from owners. Wide variety of vehicles from basic vans to luxury motorhomes. Insurance included in platform fee.' },
  { name: 'Afric Cars', type: '4x4', location: 'Marrakech, Ouarzazate', price: 'From 750 MAD/day', note: 'Local 4x4 specialist. Nissan Patrol and Toyota Land Cruiser fleet. Optional driver-guide and desert camping equipment packages. Flexible on pickup/dropoff.' },
];

/* ===================================================================
   WILD CAMPING SPOTS
   =================================================================== */

const wildCampingRules = [
  'Wild camping (bivouac) is generally tolerated throughout Morocco outside of cities, military zones, and clearly signed private or protected areas.',
  'Always ask permission if you see a nearby house, farm, or shepherd. A polite "Salaam, mumkin n-biatu hna?" (Can we camp here?) goes a long way.',
  'Leave no trace. Pack out ALL trash. Burning waste is not acceptable. Moroccan rural communities notice and remember.',
  'Avoid camping near military installations, police checkpoints, royal palaces, or border zones. These are strictly off-limits.',
  'Beach camping is popular and generally fine along the Atlantic coast, though some popular beaches (like Legzira) have been restricted seasonally.',
  'In national parks (Toubkal, Talassemtane, Souss-Massa), camping is technically regulated. In practice, discreet camping is rarely challenged.',
  'Desert camping is universally accepted. The Sahara fringe areas are some of the most spectacular free camping in the world.',
  'In the Rif mountains, be aware that some areas are cannabis cultivation zones. Avoid camping in isolated spots in this region.',
  'Use existing fire rings where available. In dry season (June-September), avoid campfires entirely due to wildfire risk.',
  'Park discreetly, arrive late, leave early. This "stealth" approach keeps wild camping viable for everyone.',
];

const bestWildCampSpots = [
  { name: 'Sidi Kaouki Beach', region: 'Atlantic Coast', coords: '31.3570, -9.7911', description: 'Surf beach south of Essaouira. Park on the beach edge or on cliffs above. Sunsets over the Atlantic. Wind can be fierce.' },
  { name: 'Legzira Beach', region: 'Atlantic Coast', coords: '29.5652, -10.0768', description: 'Famous red stone arches. Wild camp on the plateau above the beach. Stunning cliffs and empty coastline stretching for miles.' },
  { name: 'Taghazout Cliffs', region: 'Atlantic Coast', coords: '30.5444, -9.7084', description: 'Several pulloffs on the cliffs north of Taghazout village with ocean panoramas. Popular overlander spot with multiple vans in winter.' },
  { name: 'Todra Gorge Entrance', region: 'Desert Circuit', coords: '31.5892, -5.5969', description: 'Park at the wide area before the gorge narrows. River sounds, 300m limestone walls on both sides. Cold at night in winter.' },
  { name: 'Erg Chebbi Edge', region: 'Desert Circuit', coords: '31.0801, -4.0131', description: 'Park at the foot of the Erg Chebbi dunes. Watch sunset paint the sand gold and red. Absolute silence under billion-star skies.' },
  { name: 'Lac Iriqui', region: 'Anti-Atlas', coords: '29.9500, -6.5833', description: 'Dry lake bed south of Foum Zguid. Utterly flat, utterly empty, utterly spectacular. Milky Way photography paradise.' },
  { name: 'Ait Mansour Gorge', region: 'Anti-Atlas', coords: '29.6111, -9.1667', description: 'Palm-filled canyon near Tafraoute. Camp among the palms with pink granite walls rising above. Peaceful and sheltered from wind.' },
  { name: 'Azrou Cedar Forest', region: 'Middle Atlas', coords: '33.4408, -5.2214', description: 'Camp among the ancient cedars in the Middle Atlas. Visit the Barbary macaques in the morning. Cool mountain air even in summer.' },
];

/* ===================================================================
   EQUIPPED CAMPSITES
   =================================================================== */

const equippedCampsites = [
  { name: 'Camping Amazigh', location: 'Taghazout', price: '60-80 MAD', facilities: 'Hot showers, electricity, WiFi, restaurant, surf equipment rental', coords: '30.5444, -9.7084', rating: 'Excellent' },
  { name: 'Camping Sidi Kaouki', location: 'Sidi Kaouki', price: '50-70 MAD', facilities: 'Showers, electricity, beachfront, small shop', coords: '31.3570, -9.7911', rating: 'Good' },
  { name: 'Camping Le Calme', location: 'Essaouira', price: '70-90 MAD', facilities: 'Hot showers, electricity, laundry, restaurant, shaded pitches', coords: '31.5085, -9.7595', rating: 'Very Good' },
  { name: 'Camping Aain Nakhla', location: 'Ouarzazate', price: '50-70 MAD', facilities: 'Swimming pool, showers, electricity, restaurant, garden', coords: '30.9189, -6.8936', rating: 'Excellent' },
  { name: 'Camping Zebra', location: 'Merzouga', price: '60-80 MAD', facilities: 'Desert edge, hot showers, Berber tent lounge, camel rides arranged', coords: '31.0801, -4.0131', rating: 'Very Good' },
  { name: 'Camping Auberge Chez Ali', location: 'Zagora', price: '40-60 MAD', facilities: 'Pool, showers, shaded palms, Berber music evenings', coords: '30.3281, -5.8381', rating: 'Good' },
  { name: 'Camping Tizi Mzik', location: 'Imlil (Atlas)', price: '40-60 MAD', facilities: 'Mountain views, basic showers, trekking base, mule hire', coords: '31.1357, -7.9192', rating: 'Good' },
  { name: 'Camping Jurassique', location: 'Azilal', price: '50-70 MAD', facilities: 'Dinosaur footprints nearby, hot showers, restaurant, hiking trails', coords: '31.9615, -6.5693', rating: 'Good' },
  { name: 'Camping Atlantica Parc', location: 'Mohammedia', price: '80-100 MAD', facilities: 'Full hookups, pool, playground, grocery store, laundry', coords: '33.6886, -7.3867', rating: 'Excellent' },
  { name: 'Camping International', location: 'Chefchaouen', price: '60-80 MAD', facilities: 'Mountain views, hot showers, restaurant, short walk to medina', coords: '35.1714, -5.2636', rating: 'Very Good' },
  { name: 'Camping Amridil', location: 'Skoura', price: '50-60 MAD', facilities: 'Palm grove setting, pool, showers, kasbah views, silence', coords: '31.0603, -6.5617', rating: 'Very Good' },
  { name: 'Camping Taouz', location: 'Taouz (near Merzouga)', price: '40-50 MAD', facilities: 'Desert edge, basic showers, fire pit, fossil hunting area', coords: '31.0694, -3.9764', rating: 'Basic' },
  { name: 'Camping Ouirgane', location: 'Ouirgane (Atlas)', price: '60-80 MAD', facilities: 'Mountain riverside, showers, restaurant, horseback riding', coords: '31.1497, -8.0889', rating: 'Good' },
  { name: 'Camping Le Relais de Marrakech', location: 'Marrakech', price: '80-100 MAD', facilities: 'Pool, full hookups, security, walking distance to medina', coords: '31.6295, -7.9811', rating: 'Very Good' },
  { name: 'Camping Asilah', location: 'Asilah', price: '60-70 MAD', facilities: 'Beachfront, showers, restaurant, walk to medina, shaded', coords: '35.4653, -6.0349', rating: 'Good' },
  { name: 'Camping Plage Blanche', location: 'Guelmim', price: '40-50 MAD', facilities: 'Remote beach access, basic showers, tranquility, fishing', coords: '29.2431, -10.2322', rating: 'Basic' },
  { name: 'Camping Tifoultoute', location: 'Ouarzazate', price: '50-70 MAD', facilities: 'Kasbah views, pool, showers, electricity, BBQ area', coords: '30.9372, -6.9478', rating: 'Good' },
  { name: 'Camping Agdz', location: 'Agdz (Draa Valley)', price: '40-60 MAD', facilities: 'Palm grove, basic showers, peaceful, Draa Valley access', coords: '30.6981, -6.4497', rating: 'Good' },
  { name: 'Camping Oasis Palm', location: 'Figuig', price: '40-50 MAD', facilities: 'Remote oasis, basic facilities, ancient ksar nearby', coords: '32.1147, -1.2297', rating: 'Basic' },
  { name: 'Camping Moulay Bousselham', location: 'Moulay Bousselham', price: '50-60 MAD', facilities: 'Lagoon views, showers, birdwatching base, fishing boats', coords: '34.8778, -6.2911', rating: 'Good' },
  { name: 'Camping Tiznit', location: 'Tiznit', price: '50-60 MAD', facilities: 'Walled town access, showers, electricity, silver souk nearby', coords: '29.6975, -9.8000', rating: 'Good' },
  { name: 'Camping Atlas Valley', location: 'Demnate', price: '50-60 MAD', facilities: 'Imi n\'Ifri bridge nearby, showers, mountain views, olive groves', coords: '31.7342, -7.0042', rating: 'Good' },
  { name: 'Camping L\'Oasis Sacrée', location: 'N\'kob', price: '40-60 MAD', facilities: 'Desert oasis, showers, 45 kasbahs village, star gazing', coords: '30.8667, -5.8667', rating: 'Good' },
  { name: 'Camping Tata Palm', location: 'Tata', price: '40-50 MAD', facilities: 'Palm oasis, basic showers, cool shade, prehistoric carvings nearby', coords: '29.7453, -7.9722', rating: 'Basic' },
  { name: 'Camping Ocean Blue', location: 'Mirleft', price: '60-70 MAD', facilities: 'Cliff-top ocean views, showers, restaurant, surf access', coords: '29.5817, -10.0375', rating: 'Good' },
  { name: 'Camping Bin el Ouidane', location: 'Bin el Ouidane', price: '50-70 MAD', facilities: 'Lake views, showers, kayak rental, mountain air', coords: '32.1106, -6.4633', rating: 'Good' },
  { name: 'Camping Dades', location: 'Boumalne Dades', price: '50-60 MAD', facilities: 'Gorge entrance, showers, restaurant, guided canyon walks', coords: '31.3707, -5.9944', rating: 'Good' },
  { name: 'Camping Ifrane', location: 'Ifrane', price: '60-80 MAD', facilities: 'Cedar forest, hot showers, electricity, clean mountain air', coords: '33.5228, -5.1108', rating: 'Very Good' },
  { name: 'Camping Sidi Ifni', location: 'Sidi Ifni', price: '50-60 MAD', facilities: 'Ocean views, showers, colonial town access, fishing port', coords: '29.3797, -10.1731', rating: 'Good' },
  { name: 'Camping El Mansour', location: 'Alnif', price: '40-50 MAD', facilities: 'Remote desert, basic showers, fossil quarries, true silence', coords: '31.1133, -5.1711', rating: 'Basic' },
  { name: 'Camping Cascades', location: 'Ouzoud', price: '50-70 MAD', facilities: 'Waterfall access, showers, restaurant, monkey spotting, swimming', coords: '32.0153, -6.7172', rating: 'Good' },
];

/* ===================================================================
   FUEL GUIDE
   =================================================================== */

const fuelInfo = [
  { title: 'Diesel (Gasoil)', price: '10-12 MAD/liter', note: 'Most overlanders use diesel. Available everywhere including small towns. Quality is consistent from all major brands (Afriquia, Shell, Total, ZIZ).' },
  { title: 'Petrol (Essence)', price: '13-15 MAD/liter', note: 'Available at all stations but some remote desert stations may only carry diesel. If running a petrol vehicle, fill up more frequently.' },
  { title: 'LPG (GPL)', price: '4-5 MAD/liter', note: 'Available at many stations, especially in cities and on major routes. European LPG adapters work at most stations. Ask "GPL?" at the pump.' },
  { title: 'Station Availability', price: 'Variable', note: 'Major roads have stations every 30-50 km. In desert and Anti-Atlas areas, gaps of 100-200 km are common. Never pass a station with less than half a tank in remote areas.' },
];

/* ===================================================================
   ROAD CONDITIONS
   =================================================================== */

const roadConditions = [
  { type: 'Autoroutes (Motorways)', description: 'Morocco has an excellent motorway network connecting major cities. Toll-based, well-maintained, and fast. Speed limit 120 km/h. Tolls cost roughly 50-100 MAD for long stretches.', rating: 'Excellent', ratingColor: '#2d8a4e' },
  { type: 'Routes Nationales (N-roads)', description: 'Main two-lane highways connecting cities and regions. Generally well-paved but narrow in places. Watch for slow trucks, donkey carts, and pedestrians. Speed limit 100 km/h.', rating: 'Good', ratingColor: '#2d8a4e' },
  { type: 'Routes Régionales (R-roads)', description: 'Secondary roads through rural areas. Quality varies from good tarmac to badly potholed. Mountain passes like Tizi n\'Test are narrow R-roads. Speed limit 60-80 km/h.', rating: 'Variable', ratingColor: '#C4960C' },
  { type: 'Pistes (Dirt Tracks)', description: 'Unpaved tracks ranging from graded gravel to rocky boulder fields to soft sand. Found throughout the desert, Anti-Atlas, and remote mountain areas. 4x4 essential for most pistes. No speed limit but rarely above 30 km/h.', rating: 'Challenging', ratingColor: '#dc3545' },
];

/* ===================================================================
   BORDER CROSSINGS
   =================================================================== */

const borderCrossings = [
  {
    name: 'Tangier Med Ferry Port',
    from: 'Spain (Algeciras, Tarifa, Barcelona)',
    description: 'The main entry point for overlanders. Modern port with efficient customs. Multiple daily crossings from Algeciras (2 hours, from 150 EUR with vehicle) and Tarifa (1 hour, from 80 EUR). Book in advance during summer. Vehicle import paperwork (Temporary Importation form) is processed at the port.',
    tips: [
      'Book FRS, Balearia, or Trasmediterranea ferries online for better rates',
      'Arrive 2 hours before departure for vehicle check-in',
      'Have vehicle registration, insurance green card, and passports ready',
      'Moroccan customs will issue a temporary vehicle import permit (free)',
      'Your vehicle must leave Morocco before your visa expires (90 days)',
    ],
  },
  {
    name: 'Nador / Melilla Border',
    from: 'Spain (Melilla enclave)',
    description: 'Alternative entry via the Spanish enclave of Melilla on the Mediterranean coast. Ferry from Malaga or Almeria to Melilla, then drive across the border. Can be extremely congested, especially during summer and Moroccan holidays. Allow several hours for the crossing.',
    tips: [
      'Ferries from Malaga take 6-8 hours and are less frequent',
      'The Melilla-Morocco border can have multi-hour waits',
      'Avoid during Eid holidays and August when queues stretch for kilometers',
      'Fuel up in Melilla (EU prices, duty-free) before crossing',
    ],
  },
  {
    name: 'Ceuta Border (Fnideq)',
    from: 'Spain (Ceuta enclave)',
    description: 'Similar to Melilla, entering via the Spanish enclave of Ceuta on the Strait of Gibraltar. Ferry from Algeciras to Ceuta (1 hour), then cross into Morocco at Fnideq. Historically very congested. The new border crossing opened in 2023 is faster.',
    tips: [
      'The new Tarajal II border crossing is significantly faster than the old one',
      'Still avoid peak summer and holiday periods',
      'Good option if heading to the Rif mountains or Chefchaouen',
    ],
  },
  {
    name: 'Algeria Border',
    from: 'Algeria',
    description: 'The Morocco-Algeria land border has been CLOSED since 1994 and remains closed. There is no legal way to cross between Morocco and Algeria by land. Do not plan any route that requires crossing this border. The political situation shows no signs of changing.',
    tips: [
      'BORDER IS CLOSED - No exceptions for any nationality',
      'Do not approach the border zone',
      'If heading to Tunisia or further east, you must return to Europe and fly or ferry',
      'The Mauritania border at Guerguerat is the only southern exit from Morocco',
    ],
  },
  {
    name: 'Mauritania Border (Guerguerat)',
    from: 'Morocco to Mauritania',
    description: 'The southern exit from Morocco through Western Sahara to Mauritania. Overlanders heading deeper into Africa use this crossing. The road through Western Sahara is excellent (1,600 km of new highway). The border crossing at Guerguerat has improved significantly but still requires patience and paperwork.',
    tips: [
      'Carry multiple copies of all documents',
      'Get Mauritanian visa in advance (available online for some nationalities)',
      'The no-man\'s-land between borders is a few kilometers of rough track',
      'Stock up on fuel and water in Dakhla before the border',
      'Currency exchange available at the border (poor rates)',
    ],
  },
];

/* ===================================================================
   ESSENTIAL EQUIPMENT
   =================================================================== */

const essentialEquipment = [
  { category: 'Recovery & Safety', items: ['Sand ladders / traction boards', 'Tow rope rated for vehicle weight', 'Hi-lift jack or exhaust jack', 'Shovel (long-handled)', 'Tire deflator and portable air compressor', 'Jump start cables or portable jump pack', 'First aid kit with desert additions (electrolytes, sunburn gel)', 'Fire extinguisher'] },
  { category: 'Tools & Spares', items: ['Full tool kit with metric spanners', 'Spare tire (two for remote desert)', 'Tire plug kit and patches', 'Spare fan belt and fuses', 'Engine oil and coolant (2L each)', 'Duct tape and zip ties (universal fixers)', 'WD-40 or similar penetrating spray', 'Spare fuel filter'] },
  { category: 'Navigation & Communication', items: ['GPS device with Morocco off-road maps', 'Paper map as backup (Michelin 742)', 'Smartphone with offline maps (Maps.me, OsmAnd)', 'Satellite communicator (Garmin inReach recommended)', 'Power bank (20,000+ mAh)', 'Solar panel for charging (optional but useful)', '12V to USB/AC inverter', 'Local Moroccan SIM card (Maroc Telecom best coverage)'] },
  { category: 'Camping & Living', items: ['Rooftop tent or ground tent', 'Sleeping bags rated to 0 degrees (desert nights are cold)', 'Camping stove with gas canisters', 'Water containers (minimum 20L capacity)', 'Water purification tablets or filter', 'Portable fridge or cool box', 'Headlamp and lantern', 'Folding table and chairs'] },
];

/* ===================================================================
   NAVIGATION APPS & GPS
   =================================================================== */

const navigationApps = [
  { name: 'Maps.me', type: 'Offline Maps', description: 'Free offline maps with excellent Morocco coverage including trails, campsites, and points of interest. Download the Morocco map before departure. Works without data.' },
  { name: 'OsmAnd', type: 'Offline Maps + Navigation', description: 'Open-source offline maps with turn-by-turn navigation. Better for overlanding than Google Maps as it shows tracks and pistes. Supports GPX track import.' },
  { name: 'Gaia GPS', type: 'Topographic Maps', description: 'Premium topographic maps ideal for off-road navigation. Satellite overlay helps identify tracks in featureless terrain. Download Morocco topo maps for offline use.' },
  { name: 'iOverlander', type: 'Community POI Database', description: 'Essential app for overlanders. Community-sourced database of campsites, water points, fuel stations, mechanics, border crossings, and more. Updated constantly by travelers.' },
  { name: 'Park4Night', type: 'Camping Spots', description: 'European-focused but excellent Morocco coverage. Find wild camping spots, aires, and campsites with reviews, photos, and GPS coordinates from other vanlifers.' },
  { name: 'Garmin Tracks', type: 'GPS Device Maps', description: 'If using a Garmin GPS device, download the OSM-based Morocco map. Pre-load GPX tracks for desert routes where phone GPS may be unreliable.' },
  { name: 'Google Maps', type: 'Online Maps', description: 'Good for city navigation and main roads. Offline download available but misses many pistes and tracks. Use in combination with specialist apps, not as your only navigation.' },
  { name: 'Wikiloc', type: 'Track Database', description: 'Huge database of user-uploaded GPS tracks for Morocco including 4x4 routes, hiking trails, and cycling paths. Download GPX files and import into your navigation app.' },
];

/* ===================================================================
   MAINTENANCE & REPAIR
   =================================================================== */

const maintenanceShops = [
  { city: 'Marrakech', name: 'Garage Atlas 4x4', specialty: 'Land Rover and Toyota specialist. Full workshop, parts stock, English spoken.' },
  { city: 'Ouarzazate', name: 'Mécanique Saharienne', specialty: 'Desert vehicle preparation and repair. Sand damage repair, suspension work, AC service.' },
  { city: 'Agadir', name: 'Auto Service Souss', specialty: 'General mechanics, tire service, camper van repairs. Good for European vehicles.' },
  { city: 'Fes', name: 'Garage Fes Médina', specialty: 'General repair for all makes. Welding, electrical work, tire service. Affordable rates.' },
  { city: 'Errachidia', name: 'Pneus du Désert', specialty: 'Tire specialist. Essential stop before desert driving. Stock of 4x4 tires, repair service.' },
  { city: 'Tan-Tan', name: 'Garage Sahara', specialty: 'Last reliable mechanic before the Western Sahara highway. Basic repairs, tire service, fuel jerrycan filling.' },
  { city: 'Dakhla', name: 'Mécanique du Sud', specialty: 'Repairs before the Mauritania border crossing. Toyota and Nissan parts. Water tank repairs.' },
  { city: 'Tiznit', name: 'Garage Anti-Atlas', specialty: 'Suspension and shock absorber specialist. Good before Anti-Atlas loop.' },
];

/* ===================================================================
   INSURANCE
   =================================================================== */

const insuranceInfo = [
  { title: 'Green Card Extension', description: 'Many European insurance policies extend coverage to Morocco via the green card system. Check with your insurer BEFORE departure. The green card must specifically list "MA" (Morocco). If Morocco is crossed out, you need border insurance.' },
  { title: 'Border Insurance', description: 'If your green card does not cover Morocco, you must purchase Moroccan motor insurance at the port of entry (Tangier Med, Nador, etc.). Costs approximately 500-800 MAD for 30 days. Available from insurance kiosks at the border.' },
  { title: 'Rental Vehicle Insurance', description: 'Rental companies include basic third-party insurance. CDW (Collision Damage Waiver) is strongly recommended but note that many policies EXCLUDE off-road driving. Read the fine print. Some credit cards provide supplemental coverage.' },
  { title: 'Travel Insurance', description: 'Standard travel insurance is essential. Ensure it covers: vehicle recovery, medical evacuation from remote areas, repatriation, and personal liability. World Nomads and SafetyWing both cover Morocco including adventure activities.' },
  { title: 'Vehicle Recovery Insurance', description: 'Consider specialist overlanding breakdown cover such as ADAC (Germany), AA (UK), or a Morocco-specific provider. Regular European breakdown cover typically does not extend south of Tangier.' },
];

/* ===================================================================
   BUDGET BREAKDOWN
   =================================================================== */

const budgetBreakdown = [
  { category: 'Fuel', budget: '80-150 MAD/day', backpacker: '80 MAD', midRange: '120 MAD', luxury: '150 MAD', note: 'Based on 150-250 km/day driving. Diesel vehicle. Desert driving increases consumption 30-50%.' },
  { category: 'Camping', budget: '0-100 MAD/day', backpacker: '0 MAD (wild)', midRange: '60 MAD', luxury: '100 MAD', note: 'Wild camping is free. Equipped campsites 50-100 MAD per pitch. Glamping from 500 MAD.' },
  { category: 'Food', budget: '50-200 MAD/day', backpacker: '50 MAD', midRange: '120 MAD', luxury: '200 MAD', note: 'Self-cooking from markets is cheapest. Street food 15-30 MAD/meal. Restaurants 60-150 MAD/meal.' },
  { category: 'Ferry (return)', budget: '150-400 EUR total', backpacker: '150 EUR', midRange: '250 EUR', luxury: '400 EUR', note: 'Round trip with vehicle. Book in advance for best rates. Prices vary by season and vehicle size.' },
  { category: 'Vehicle Rental', budget: '400-1,200 MAD/day', backpacker: '400 MAD', midRange: '700 MAD', luxury: '1,200 MAD', note: 'If renting. Many overlanders bring their own vehicle from Europe, reducing this to zero.' },
  { category: 'Activities', budget: '0-200 MAD/day', backpacker: '0 MAD', midRange: '100 MAD', luxury: '200 MAD', note: 'Many activities are free (hiking, beaches, exploring). Desert excursions, guides, and hammams extra.' },
  { category: 'SIM & WiFi', budget: '10-20 MAD/day', backpacker: '10 MAD', midRange: '15 MAD', luxury: '20 MAD', note: 'Maroc Telecom SIM with 20GB data costs about 100 MAD/month. Excellent 4G coverage in most areas.' },
];

/* ===================================================================
   COMMUNITY RESOURCES
   =================================================================== */

const communityResources = [
  { name: 'iOverlander Community', type: 'App & Forum', description: 'The overlanding community database. Submit and read reviews of campsites, water points, mechanics, and border crossings. Essential companion for any Morocco overland trip.' },
  { name: 'Morocco Overland (Chris Scott)', type: 'Guidebook', description: 'The bible of Moroccan overlanding. Detailed route descriptions, GPS waypoints, piste ratings, and practical advice. Updated regularly. Available in print and digital.' },
  { name: 'Expedition Portal', type: 'Forum', description: 'Huge English-language overlanding forum with extensive Morocco trip reports, vehicle build threads, and route advice from experienced overlanders.' },
  { name: 'Facebook: Morocco Overlanding', type: 'Social Group', description: 'Active community of 50,000+ members sharing real-time route conditions, camping spots, border wait times, and vehicle issues. Ask questions and get fast responses.' },
  { name: 'Facebook: Vanlife Morocco', type: 'Social Group', description: 'Focused on the vanlife community in Morocco. Wild camping spots, van-friendly mechanics, meetup events, and seasonal route advice.' },
  { name: 'Pistefrance.com', type: 'Website (French)', description: 'French-language database of GPS tracks and piste conditions throughout Morocco. Detailed track ratings, difficulty assessments, and downloadable GPX files.' },
  { name: 'Komoot', type: 'Route Planning', description: 'Excellent for planning specific routes with elevation profiles, surface types, and difficulty ratings. Active community of Morocco adventurers sharing routes.' },
  { name: 'Reddit r/overlanding', type: 'Forum', description: 'Active subreddit with frequent Morocco trip reports and advice threads. Good for vehicle-specific questions and gear recommendations.' },
];

/* ===================================================================
   SEASONAL PLANNING
   =================================================================== */

const seasonalPlanning = [
  {
    season: 'Autumn (October - November)',
    icon: Leaf,
    rating: 'Excellent',
    ratingColor: '#2d8a4e',
    routes: 'All routes are open. Desert is cooling down to comfortable temperatures. Coast still warm for swimming. Mountain passes are clear.',
    conditions: 'Daytime 20-30 degrees in the south, 15-25 in the north. Occasional rain starts in the north. Perfect overlap season where everything is accessible. Early October can still be hot in the desert.',
    tip: 'October is when the European overlander migration begins. Campsites on the coast start filling with vans from France, Germany, Spain, and the UK. Book popular spots or arrive early.',
  },
  {
    season: 'Winter (December - February)',
    icon: Snowflake,
    rating: 'Good (South) / Variable (North)',
    ratingColor: '#C4960C',
    routes: 'Southern desert and coast are ideal. High Atlas passes may have snow closures. Rif mountains can be wet and cold. Anti-Atlas is perfect.',
    conditions: 'South: sunny, 15-25 degrees daytime, 5-10 at night. Desert nights can drop near freezing. North: 10-18 degrees with rain. Atlas: snow above 2,000m. Atlas passes may close temporarily.',
    tip: 'Peak season for vanlifers on the southern coast. Agadir to Sidi Ifni stretch is packed with European campers. The desert around Merzouga and Zagora is quiet and beautiful. Carry warm sleeping gear.',
  },
  {
    season: 'Spring (March - May)',
    icon: Sun,
    rating: 'Excellent',
    ratingColor: '#2d8a4e',
    routes: 'All routes are open. Wildflowers bloom across the Atlas. Almond blossoms in the Anti-Atlas (February-March). Desert still comfortable. Coast warming up.',
    conditions: 'Perfect temperatures everywhere: 20-28 degrees. Green landscapes from winter rains. Mountain passes clear of snow. Desert not yet unbearable. Light winds on coast.',
    tip: 'The absolute best season for overlanding Morocco. Everything is accessible, temperatures are perfect, and the landscape is at its greenest. Easter period is busy. Booked-up campsites.',
  },
  {
    season: 'Summer (June - September)',
    icon: Thermometer,
    rating: 'Challenging (Inland) / Good (Coast)',
    ratingColor: '#dc3545',
    routes: 'Coast is pleasant with Atlantic breezes. Inland desert is brutally hot (45+ degrees). Atlas passes are clear but hot at lower elevations. Anti-Atlas is dangerously hot.',
    conditions: 'Desert: 40-50 degrees, dangerous heat. Coast: 22-28 degrees with reliable wind. Mountains: 25-35 degrees at altitude. Flash floods possible in late summer.',
    tip: 'Only recommended for the Atlantic coast in summer. The desert is genuinely dangerous in July-August with temperatures exceeding 50 degrees. Most European overlanders head home by May and return in October.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function OverlandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-overlanding.webp"
          alt="4x4 vehicle driving through the Moroccan Sahara desert"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1814]/70 via-[#1A1814]/50 to-[#1A1814]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#C4960C]">Overlanding</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            4x4, Overlanding &amp; Vanlife
            <span className="block text-[#C4960C]">in Morocco</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Europe&apos;s favorite overlanding destination. From Atlantic beaches to Saharan dunes,
            Atlas mountain passes to hidden oases, Morocco offers the ultimate off-road adventure
            just a short ferry ride from Spain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Route className="w-4 h-4 text-[#C4960C]" /> 5 Epic Routes
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Tent className="w-4 h-4 text-[#C4960C]" /> 30+ Campsites
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Truck className="w-4 h-4 text-[#C4960C]" /> 16 Rental Companies
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
              <Navigation className="w-4 h-4 text-[#C4960C]" /> GPS Waypoints
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY MOROCCO FOR OVERLANDING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Why Morocco is Europe&apos;s Favorite Overlanding Destination
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every winter, thousands of overlanders and vanlifers cross the Strait of Gibraltar
            to explore Africa&apos;s most accessible adventure playground.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOverland.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          OVERLAND ROUTES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            5 Epic Overland Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From gentle coastal cruises to challenging desert pistes, these routes cover
            every terrain Morocco has to offer.
          </p>

          <div className="space-y-16">
            {overlandRoutes.map((route, index) => (
              <div key={route.id} id={route.id} className="scroll-mt-24">
                <div className="card-moroccan overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[320px]">
                      <img
                        src={route.image}
                        alt={`${route.name} overlanding route in Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          <Clock className="w-3.5 h-3.5" /> {route.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          <Route className="w-3.5 h-3.5" /> {route.distance}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span
                          className="px-3 py-1 rounded-full text-white text-xs font-bold"
                          style={{ backgroundColor: route.difficultyColor }}
                        >
                          {route.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="lg:w-3/5 p-6 lg:p-8">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {route.name}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-primary)] mb-4">{route.subtitle}</p>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{route.description}</p>

                      {/* Highlights */}
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {route.highlights.map((h) => (
                          <span key={h} className="tag tag-primary">
                            <MapPin className="w-3 h-3 mr-1" />
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Route Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Compass className="w-3 h-3" /> Terrain
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{route.terrain}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                          <h5 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> Best Season
                          </h5>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{route.bestSeason}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GPS Waypoints */}
                  <div className="border-t border-[var(--border-light)] p-6 lg:p-8">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                      <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
                      Key GPS Waypoints
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {route.keyWaypoints.map((wp) => (
                        <div key={wp.name} className="p-3 rounded-lg bg-[var(--surface-muted)] flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">{wp.name}</p>
                            <p className="text-xs text-[var(--text-muted)] font-mono">{wp.coords}</p>
                            <p className="text-xs text-[var(--text-secondary)] mt-0.5">{wp.note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          VEHICLE REQUIREMENTS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Vehicle Requirements &amp; Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right vehicle depends entirely on your route. Coast-huggers can use any van.
            Desert adventurers need serious capability.
          </p>
          <div className="space-y-4">
            {vehicleTypes.map((v) => (
              <div key={v.type} className="card-moroccan p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-shrink-0 lg:w-48">
                    <h3 className="font-bold text-[var(--text-primary)] text-lg">{v.type}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--color-primary)] font-medium mt-1">
                      <Compass className="w-3 h-3" /> {v.suitability}
                    </span>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-600" /> Pros
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.pros}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-600" /> Cons
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.cons}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Star className="w-3 h-3 text-[var(--color-primary)]" /> Best For
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RENTAL COMPANIES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Camper Van &amp; 4x4 Rental Companies
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            16 vetted rental companies offering everything from budget campervans to fully
            expedition-equipped Land Cruisers.
          </p>
          <div className="space-y-3">
            {rentalCompanies.map((c) => (
              <div key={c.name} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-2 h-auto rounded-full bg-[var(--color-primary)]" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{c.name}</h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">{c.type}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium">{c.price}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {c.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WILD CAMPING
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Wild Camping Rules &amp; Best Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a wild camping paradise, but respect the land and the people to keep
            it that way for future travelers.
          </p>

          {/* Rules */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--color-primary)]" /> Wild Camping Guidelines
            </h3>
            <div className="space-y-3">
              {wildCampingRules.map((rule, index) => (
                <div key={index} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary)]/10 shrink-0">
                    <span className="text-xs font-bold text-[var(--color-primary)]">{index + 1}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Spots */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Tent className="w-5 h-5 text-[var(--color-primary)]" /> Best Wild Camping Spots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestWildCampSpots.map((spot) => (
                <div key={spot.name} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-0.5">{spot.name}</h4>
                      <p className="text-xs text-[var(--color-primary)] font-medium mb-1">{spot.region}</p>
                      <p className="text-xs text-[var(--text-muted)] font-mono mb-2">{spot.coords}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spot.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          EQUIPPED CAMPSITES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-6xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Equipped Campsites Directory
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            {equippedCampsites.length} vetted campsites across Morocco with facilities, prices, and coordinates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equippedCampsites.map((site) => (
              <div key={site.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{site.name}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: site.rating === 'Excellent' ? '#2d8a4e20' : site.rating === 'Very Good' ? '#C4960C20' : site.rating === 'Good' ? '#6b728020' : '#dc354520',
                      color: site.rating === 'Excellent' ? '#2d8a4e' : site.rating === 'Very Good' ? '#C4960C' : site.rating === 'Good' ? '#6b7280' : '#dc3545',
                    }}
                  >
                    {site.rating}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" /> {site.location}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-mono mb-2">{site.coords}</p>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{site.price} /night</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{site.facilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FUEL GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Fuel Availability &amp; Costs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fuelInfo.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 mb-3">
                  <Fuel className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                <p className="text-lg font-semibold text-[var(--color-primary)] mb-2">{item.price}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ROAD CONDITIONS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Road Conditions &amp; Off-Road Tracks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s road network ranges from world-class motorways to barely visible desert tracks.
          </p>
          <div className="space-y-4">
            {roadConditions.map((road) => (
              <div key={road.type} className="card-moroccan p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Route className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-[var(--text-primary)]">{road.type}</h3>
                    <span
                      className="px-2 py-0.5 rounded-full text-white text-xs font-bold"
                      style={{ backgroundColor: road.ratingColor }}
                    >
                      {road.rating}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{road.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BORDER CROSSINGS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Border Crossings
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get your vehicle into (and out of) Morocco. Ferry routes, border procedures,
            and critical warnings.
          </p>
          <div className="space-y-6">
            {borderCrossings.map((border) => (
              <div key={border.name} className="card-moroccan overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--color-primary)]/10">
                      {border.name.includes('Algeria') ? (
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      ) : (
                        <Anchor className="w-5 h-5 text-[var(--color-primary)]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)] text-lg">{border.name}</h3>
                      <p className="text-sm text-[var(--color-primary)] font-medium">{border.from}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{border.description}</p>
                  <div className="space-y-2">
                    {border.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ESSENTIAL EQUIPMENT
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Equipment &amp; Tools
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to pack for a safe and comfortable overlanding trip. The desert does not forgive
            lack of preparation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essentialEquipment.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] text-lg mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[var(--color-primary)]" />
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          NAVIGATION APPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            GPS Waypoints &amp; Navigation Apps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Reliable navigation is critical in Morocco, especially off-road where phone signal
            disappears and tracks are unmarked.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {navigationApps.map((app) => (
              <div key={app.name} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--color-primary)]/10">
                  <Map className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{app.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium">{app.type}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MAINTENANCE & REPAIR
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Maintenance &amp; Repair Shops
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan mechanics are resourceful and affordable. These workshops are trusted
            by overlanders for quality repairs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {maintenanceShops.map((shop) => (
              <div key={shop.name} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--color-accent)]/10">
                  <Wrench className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">{shop.name}</h3>
                  <p className="text-xs text-[var(--color-primary)] font-medium mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {shop.city}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{shop.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          INSURANCE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Insurance for Foreign Vehicles
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting your insurance right before crossing to Morocco is essential.
            Driving without valid coverage is illegal and risky.
          </p>
          <div className="space-y-4">
            {insuranceInfo.map((ins) => (
              <div key={ins.title} className="card-moroccan p-6 flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--color-primary)]/10">
                  <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{ins.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ins.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BUDGET BREAKDOWN
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What overlanding Morocco actually costs, from shoestring wild camping to comfortable
            equipped campsite touring.
          </p>

          {/* Budget Table */}
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/10">
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Category</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Budget</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Mid-Range</th>
                    <th className="text-center p-4 font-bold text-[var(--text-primary)]">Comfort</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)] hidden lg:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetBreakdown.map((item, index) => (
                    <tr key={item.category} className={index % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{item.category}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{item.backpacker}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{item.midRange}</td>
                      <td className="p-4 text-center text-[var(--text-secondary)]">{item.luxury}</td>
                      <td className="p-4 text-[var(--text-muted)] text-xs hidden lg:table-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-[var(--border-light)] bg-[var(--color-primary)]/5">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Daily totals (per couple, own vehicle):</strong>{' '}
                Budget: ~300 MAD ($30) | Mid-Range: ~600 MAD ($60) | Comfort: ~1,000 MAD ($100).
                Add vehicle rental costs if not bringing your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMUNITY RESOURCES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Community Resources &amp; Forums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Connect with the overlanding community for real-time route updates, vehicle advice,
            and travel tips from people who have done it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityResources.map((resource) => (
              <div key={resource.name} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--color-primary)]/10">
                  <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{resource.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium">{resource.type}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SEASONAL ROUTE PLANNING
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Seasonal Route Planning
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When you go determines where you should go. Each season opens and closes different routes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalPlanning.map((s) => (
              <div key={s.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <s.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">{s.season}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: s.ratingColor }}
                    >
                      {s.rating}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1">Recommended Routes</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.routes}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1">Conditions</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.conditions}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2">
                      <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      {s.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Truck className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for Your Morocco Overlanding Adventure?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Start planning your route, pack your recovery gear, and point your
            wheels south across the Strait of Gibraltar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Route className="w-4 h-4" /> Road Trip Routes
            </Link>
            <Link
              href="/desert"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" /> Desert Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
