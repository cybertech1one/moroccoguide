import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Waves,
  Wind,
  Sun,
  Thermometer,
  MapPin,
  Star,
  CheckCircle,
  AlertTriangle,
  Shield,
  Calendar,
  Compass,
  Heart,
  Anchor,
  ArrowRight,
  Droplets,
  Fish,
  Sailboat,
  Users,
  Trophy,
  CircleDollarSign,
  Globe,
  Zap,
  CloudSun,
  Mountain,
  Clock,
  Baby,
  Camera,
  Umbrella,
  LifeBuoy,
  Ticket,
  Sparkles,
  ThumbsUp,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Water Fun in Morocco | Water Parks, Beaches & Aquatic Adventures',
  description:
    'Complete guide to water fun in Morocco: Oasiria Water Park, Aquapark Tamaris, beach activities on Atlantic and Mediterranean coasts, natural swimming at Ouzoud Falls and Paradise Valley, boat trips, scuba diving, and family water adventures with prices and practical tips.',
  keywords: [
    'Morocco water parks', 'Oasiria Water Park Marrakech', 'Aquapark Tamaris Casablanca',
    'Morocco beaches', 'Morocco water fun', 'water slides Morocco', 'Taghazout surfing',
    'Essaouira kitesurfing', 'Ouzoud Falls swimming', 'Paradise Valley Agadir',
    'Morocco boat trips', 'scuba diving Morocco', 'Al Hoceima snorkeling', 'Dakhla lagoon',
    'Morocco family beaches', 'Aqua Mirage Marrakech', 'Amadil Beach Agadir',
    'Aquafortland Meknes', 'Morocco water sports prices', 'Bin el-Ouidane lake',
    'Akchour waterfalls', 'Morocco jellyfish season',
  ],
  openGraph: {
    title: 'Water Fun in Morocco - Parks, Beaches & Aquatic Adventures',
    description: 'From thrilling water parks in Marrakech and Casablanca to natural swimming holes in the Atlas Mountains, discover every way to enjoy the water in Morocco.',
    url: 'https://citytoursmorocco.com/water-fun',
    images: [{ url: '/images/hero-water-park.webp', width: 1200, height: 630, alt: 'Water park slides with blue pools under Moroccan sun' }],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/water-fun' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/water-fun#guide',
      name: 'Water Fun in Morocco',
      description: 'Comprehensive guide to water parks, beach activities, natural swimming, boat trips, diving, and aquatic adventures across Morocco.',
      url: 'https://citytoursmorocco.com/water-fun',
      touristType: ['Water parks', 'Beaches', 'Swimming', 'Water sports', 'Family activities'],
      image: '/images/hero-water-park.webp',
      address: { '@type': 'PostalAddress', addressCountry: 'MA' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best water park in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oasiria Water Park in Marrakech is Morocco's largest and most popular water park. Located on Route d'Amizmiz Km 4, it features a wave pool, lazy river, 8 water slides, a dedicated children's area, and landscaped gardens. Adult admission is 250 MAD and children 200 MAD.",
          },
        },
        {
          '@type': 'Question',
          name: 'Where can you swim in natural pools in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Morocco has stunning natural swimming spots including the plunge pool below Ouzoud Falls, Paradise Valley near Agadir with its turquoise rock pools, Akchour Waterfalls near Chefchaouen, and Cascades de Tizgha in the Middle Atlas.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which Morocco beaches are best for families?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The best family beaches include Agadir's main beach (lifeguards, calm water), Saidia on the Mediterranean (Blue Flag, warm calm water), Mehdia near Rabat (gentle waves), and Oualidia lagoon (sheltered, warm, shallow).",
          },
        },
        {
          '@type': 'Question',
          name: 'When is jellyfish season in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Jellyfish are most common on Morocco's Mediterranean coast from July to September. The Atlantic coast sees fewer jellyfish but occasional blooms occur in August-September near Agadir and Essaouira.",
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   WATER PARKS DATA
   ═══════════════════════════════════════════════════════════════ */

const waterParks = [
  {
    name: 'Oasiria Water Park',
    location: 'Marrakech',
    address: "Route d'Amizmiz Km 4, Marrakech",
    priceAdult: '250 MAD',
    priceChild: '200 MAD (3-12 yrs)',
    hours: '10:00 - 18:00',
    season: 'June - September (daily), May & October (weekends)',
    rating: 5,
    familyRating: 5,
    features: [
      'Wave pool with 1.5m artificial waves',
      'Lazy river (350m loop through gardens)',
      '8 water slides including 3 high-speed slides',
      "Children's splash area with mini slides",
      'Olympic-size swimming pool',
      'Landscaped gardens with palm trees',
      'Moroccan restaurant and poolside snack bars',
      'VIP cabanas with private service (500 MAD)',
      'Free parking for 500+ vehicles',
      'Lockers and changing rooms included',
    ],
    description:
      "Morocco's flagship water park and the largest in North Africa. Spread across 10 hectares on the road to Amizmiz, just 15 minutes south of Marrakech's medina, it combines thrilling water attractions with lush Moroccan garden landscaping. The wave pool generates powerful 1.5-meter waves every 15 minutes. The lazy river meanders 350 meters through planted gardens. Three high-speed body slides reach speeds of 40 km/h. The children's area features shallow depth, mini slides, water cannons, and tipping buckets supervised by trained lifeguards.",
    tips: [
      'Arrive at opening (10:00) for prime sun lounger spots',
      'Tuesday and Thursday are typically less crowded',
      'Bring your own towels to avoid the 30 MAD rental fee',
      'Taxis from Marrakech medina cost 60-80 MAD one way',
    ],
  },
  {
    name: 'Tamaris Aquapark',
    location: 'Casablanca',
    address: 'Tamaris, Route Cotiere, Dar Bouazza, Casablanca',
    priceAdult: '200 MAD',
    priceChild: '150 MAD (4-12 yrs)',
    hours: '10:00 - 18:30',
    season: 'June - September',
    rating: 4,
    familyRating: 4,
    features: [
      '6 water slides of varying intensity',
      'Large main pool with diving area',
      "Children's wading pool with play structures",
      'Wave simulation pool',
      'Picnic areas with shade structures',
      'Snack bar and cafeteria',
      'Changing rooms and showers',
    ],
    description:
      'Located along the coastal road south of Casablanca near Dar Bouazza, Tamaris Aquapark offers a refreshing escape from the city heat. The park sits on a clifftop with glimpses of the Atlantic Ocean. Six slides cater to different thrill levels: two gentle family slides, two medium-speed tube rides, and two steep body slides. The wave pool runs cycles every 20 minutes during peak hours.',
    tips: [
      'Go on weekday mornings to avoid the weekend rush',
      'Coastal breeze can be cool after 16:00',
      'Grand taxi from Ain Diab costs about 30 MAD per person',
      'Combine with a visit to Dar Bouazza beach',
    ],
  },
  {
    name: 'Aqua Mirage Club',
    location: 'Marrakech',
    address: 'Route de Ouarzazate Km 3, Marrakech',
    priceAdult: '300 MAD (day pass)',
    priceChild: '200 MAD (day pass, 4-12 yrs)',
    hours: '09:00 - 18:00',
    season: 'April - October',
    rating: 4,
    familyRating: 4,
    features: [
      'Hotel-integrated water park complex',
      '4 water slides including spiral and speed slides',
      'Large freeform pool with swim-up bar',
      "Separate children's pool with play area",
      'Jacuzzi and relaxation pool for adults',
      'Full-service restaurant and pool bar',
      'Lunch buffet option (+150 MAD)',
    ],
    description:
      'A 4-star resort hotel on the Ouarzazate road that opens its water park to day visitors. The setting is more upscale than standalone water parks, with manicured gardens, a swim-up bar, and attentive service. The day pass with lunch buffet (450 MAD adult / 350 MAD child) is excellent value with Moroccan and international dishes.',
    tips: [
      'Book day passes in advance during peak summer',
      'The lunch buffet add-on is worthwhile',
      'Adults-only jacuzzi area is a highlight for couples',
      'Just 10 minutes from Marrakech center',
    ],
  },
  {
    name: 'Amadil Beach Water Park',
    location: 'Agadir',
    address: 'Boulevard du 20 Aout, Secteur Balneaire, Agadir',
    priceAdult: '180 MAD',
    priceChild: '120 MAD (3-12 yrs)',
    hours: '10:00 - 18:00',
    season: 'June - September',
    rating: 3,
    familyRating: 3,
    features: [
      '4 water slides',
      'Main swimming pool',
      "Children's splash pool",
      'Direct beach access',
      'Poolside restaurant and bar',
    ],
    description:
      "Amadil Beach combines a modest water park with direct access to Agadir's famous beach. Located along the beachfront promenade, the park is smaller than Marrakech counterparts but benefits from Agadir's reliably warm climate. After the water park, walk straight onto the wide sandy beach for more swimming or jet skiing.",
    tips: [
      'Combine with beach time for a full day',
      'Walking distance from most beachfront hotels',
      'Beach has jet ski and banana boat operators outside',
    ],
  },
  {
    name: 'Aquafortland',
    location: 'Meknes',
    address: "Route d'Agouray, Meknes",
    priceAdult: '150 MAD',
    priceChild: '100 MAD (3-12 yrs)',
    hours: '10:00 - 18:00',
    season: 'June - September',
    rating: 3,
    familyRating: 4,
    features: [
      '5 water slides',
      'Wave pool (only one in inland Morocco)',
      "Children's aqua play area",
      'Olympic-size swimming pool',
      'Landscaped picnic areas',
      'Restaurant and snack kiosks',
      'Playground and dry play areas',
    ],
    description:
      "Water park fun for Morocco's interior, serving the Meknes-Fes corridor where summer temperatures regularly exceed 40 degrees Celsius. Five slides range from gentle family rides to a steep speed slide. The wave pool is the only one in inland Morocco. Lower prices reflect the location away from the tourist circuit.",
    tips: [
      'Essential for cooling down in extreme Meknes heat',
      'Weekday visits are significantly quieter',
      'Accessible from both Meknes (15 min) and Fes (1 hour)',
      'Shaded picnic areas are great for packed lunches',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEACH DATA
   ═══════════════════════════════════════════════════════════════ */

const atlanticBeaches = [
  {
    name: 'Taghazout Beach',
    location: '19 km north of Agadir',
    bestFor: ['Surfing', 'Longboarding', 'Surf camps'],
    description: "Morocco's undisputed surf capital. Golden sand crescent backed by a colorful fishing village. Panoramas break at the south end is perfect for beginners, while legendary Anchor Point and Killer Point are a short walk north. Dozens of surf schools, ocean-view cafes, and budget hostels.",
    familyFriendly: false,
    facilities: ['Surf schools', 'Cafes', 'Board rental', 'Hostels'],
    waterTemp: '17-22\u00b0C',
  },
  {
    name: 'Essaouira Beach',
    location: 'Essaouira',
    bestFor: ['Kitesurfing', 'Windsurfing', 'Camel rides', 'Beach walks'],
    description: "Vast windswept beach stretching south from UNESCO-listed medina walls. Alizee trade winds make it Morocco's wind sports capital from April to September. Wide firm sand perfect for walks, beach football, and sunset camel rides.",
    familyFriendly: true,
    facilities: ['Kite schools', 'Camel rides', 'Beach cafes', 'Windsurf rental'],
    waterTemp: '17-21\u00b0C',
  },
  {
    name: 'Legzira Beach',
    location: '10 km north of Sidi Ifni',
    bestFor: ['Photography', 'Beach walks', 'Sunbathing'],
    description: 'Famous for dramatic red sandstone arches carved by Atlantic erosion. The remaining arch is stunning at golden hour when red rock glows against turquoise ocean. Wild and undeveloped with strong currents making swimming inadvisable.',
    familyFriendly: false,
    facilities: ['Basic cafes on cliff', 'Parking'],
    waterTemp: '18-22\u00b0C',
  },
  {
    name: 'Agadir Beach',
    location: 'Agadir city center',
    bestFor: ['Swimming', 'Jet skiing', 'Banana boats', 'Family days'],
    description: "6-km crescent of golden sand, Morocco's most developed beach resort. Sheltered bay creates calmer conditions than most Atlantic beaches. Modern promenade with restaurants, lifeguards in summer, jet ski and banana boat operators.",
    familyFriendly: true,
    facilities: ['Lifeguards', 'Jet ski rental', 'Banana boats', 'Restaurants', 'Parasols', 'Showers'],
    waterTemp: '18-23\u00b0C',
  },
  {
    name: 'Oualidia Lagoon',
    location: 'Between El Jadida and Safi',
    bestFor: ['Families', 'Kayaking', 'SUP', 'Safe swimming'],
    description: "Sheltered lagoon protected from ocean swells by a natural sandbar. Warm, calm, shallow water perfect for young children. Kayaks and SUP boards for rent. Famous for oyster farms and seafood restaurants.",
    familyFriendly: true,
    facilities: ['Kayak rental', 'SUP rental', 'Oyster restaurants', 'Camping'],
    waterTemp: '18-22\u00b0C',
  },
  {
    name: 'Mehdia Beach',
    location: '35 km from Rabat',
    bestFor: ['Families', 'Surfing', 'Picnics'],
    description: 'Popular weekend escape for Rabat and Kenitra residents. Wide sandy beach with gentle waves for beginners and calmer family areas. Mehdia forest behind provides shaded picnic spots.',
    familyFriendly: true,
    facilities: ['Surf schools', 'Beach cafes', 'Forest picnic areas', 'Parking'],
    waterTemp: '17-21\u00b0C',
  },
];

const mediterraneanBeaches = [
  {
    name: 'Saidia Beach',
    location: 'Near Algerian border',
    bestFor: ['Swimming', 'Families', 'Blue Flag quality'],
    description: "The Blue Pearl of Morocco: 14 km of fine golden sand with Blue Flag certification. Warm Mediterranean water reaching 25\u00b0C in summer. No significant waves, ideal for families. Marina Saidia adds upscale restaurants and a yacht harbor.",
    familyFriendly: true,
    facilities: ['Blue Flag certified', 'Marina', 'Restaurants', 'Hotels', 'Lifeguards'],
    waterTemp: '20-25\u00b0C',
  },
  {
    name: 'Al Hoceima Beaches',
    location: 'Rif coast',
    bestFor: ['Snorkeling', 'Swimming', 'Diving', 'Scenic beauty'],
    description: "Rocky coves and sandy beaches within the national park. Quemado Beach is the main town beach. Cala Bonita and Cala Iris offer crystalline water with 30m visibility. Richest marine life in Morocco for shore snorkeling.",
    familyFriendly: true,
    facilities: ['Dive operators', 'Snorkel rental', 'Beach cafes'],
    waterTemp: '18-25\u00b0C',
  },
  {
    name: "M'diq Beach",
    location: 'Near Tetouan',
    bestFor: ['Swimming', 'Jet skiing', 'Family holidays', 'Seafood'],
    description: 'Popular resort town with warm calm Mediterranean water and lively summer atmosphere. Corniche lined with seafood restaurants serving freshly caught grilled fish. Water sports operators offer jet skiing, parasailing, and pedal boats.',
    familyFriendly: true,
    facilities: ['Jet ski rental', 'Parasailing', 'Seafood restaurants', 'Pedal boats'],
    waterTemp: '20-25\u00b0C',
  },
  {
    name: 'Fnideq Beach',
    location: 'Near Ceuta border',
    bestFor: ['Swimming', 'Affordable holidays', 'Local atmosphere'],
    description: 'Long sandy beach with views across the Strait of Gibraltar to Spain. Popular with Moroccan families, genuine local atmosphere without tourist markup. Warm calm water in summer.',
    familyFriendly: true,
    facilities: ['Basic amenities', 'Nearby restaurants', 'Parking'],
    waterTemp: '19-24\u00b0C',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NATURAL SWIMMING SPOTS
   ═══════════════════════════════════════════════════════════════ */

const naturalSwimmingSpots = [
  {
    name: 'Ouzoud Falls',
    region: 'Middle Atlas, near Azilal',
    description: "Morocco's most spectacular waterfall cascades 110 meters over red cliffs into turquoise plunge pools surrounded by olive groves. The pools at the base are swimmable and refreshingly cold. Barbary macaques inhabit surrounding trees. Rainbow mist hangs in the air on sunny days. Boat rides available at the base for 20 MAD.",
    access: 'Drive 150 km NE of Marrakech (2.5 hours). Walk 20 min down steps from parking.',
    entryFee: '20 MAD (parking)',
    bestSeason: 'March - June (highest flow), swimmable year-round',
    highlights: ['110m cascading waterfall', 'Turquoise plunge pools', 'Barbary macaques', 'Rainbow mist', 'Olive oil mills nearby', 'Boat rides (20 MAD)'],
    warnings: ['Slippery rocks near falls', 'Water is cold (15-18\u00b0C)', 'Avoid swimming under main cascade', 'Very crowded on weekends'],
  },
  {
    name: 'Paradise Valley',
    region: 'Near Agadir, Imouzzer Ida Outanane',
    description: 'Stunning series of natural rock pools connected by small waterfalls in a palm-lined gorge 30 km NE of Agadir. Turquoise water framed by smooth boulders and lush vegetation. Local young men cliff-jump from higher rocks. Swim from pool to pool along the gorge.',
    access: 'Drive 30 km NE of Agadir (45 min). Park at trailhead, hike 30 min into valley.',
    entryFee: '20 MAD (parking and access)',
    bestSeason: 'April - October (pools fullest March-June)',
    highlights: ['Turquoise rock pools', 'Natural waterslides', 'Cliff jumping spots', 'Palm-lined gorge', 'Perfect Agadir day trip', 'Local guides (50-100 MAD)'],
    warnings: ['Check depth before cliff jumping', 'Flash floods possible in rain', 'No lifeguards', 'Bring water shoes'],
  },
  {
    name: 'Akchour Waterfalls',
    region: 'Talassemtane National Park, near Chefchaouen',
    description: "Two distinct experiences in the Rif Mountains. The small waterfall is a 45-minute hike through forested gorge with swimmable pools along the way. The large waterfall requires a 3-hour hike but rewards with a 300-meter cascade into a deep emerald pool. God's Bridge natural rock arch spans the canyon midway.",
    access: 'Drive 30 km from Chefchaouen (45 min) to Akchour village.',
    entryFee: '10 MAD (park entrance)',
    bestSeason: 'April - October (trails muddy in winter)',
    highlights: ['Small waterfall: easy 45-min hike', 'Large waterfall: 300m cascade', "God's Bridge rock arch", 'Crystal-clear pools', 'Rif Mountain forest', 'Combine with Chefchaouen visit'],
    warnings: ['Trail to large waterfall is strenuous', 'Wear proper hiking shoes', 'Start early to avoid heat', 'No facilities on trail'],
  },
  {
    name: 'Cascades de Tizgha',
    region: 'Middle Atlas, Khenifra Province',
    description: 'Lesser-known gem with waterfalls flowing through travertine terraces into deep turquoise pools surrounded by cedar and oak forest. Far fewer visitors than Ouzoud or Paradise Valley. Natural rock seats and ledges around pools.',
    access: 'Drive from Khenifra (50 km, 1.5 hours mountain roads). Local guide recommended.',
    entryFee: 'Free',
    bestSeason: 'April - September',
    highlights: ['Travertine terrace pools', 'Remote and uncrowded', 'Cedar forest', 'Barbary macaques', 'Natural rock seating', 'Off-the-beaten-path'],
    warnings: ['Mountain roads need capable vehicle', 'Local guide strongly recommended', 'Very limited facilities', 'Unreliable phone signal'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   WATER SPORTS DATA
   ═══════════════════════════════════════════════════════════════ */

const waterSports = [
  {
    name: 'Surfing',
    icon: 'Waves',
    locations: ['Taghazout', 'Imsouane', 'Essaouira', 'Sidi Kaouki', 'Mehdia'],
    season: 'October - March (best), year-round possible',
    priceRange: '100-200 MAD board rental/day, 250-400 MAD group lesson (2h)',
    description: "Morocco's Atlantic coast receives consistent North Atlantic swells from October through March, producing world-class waves at spots like Anchor Point in Taghazout and the longest wave in Africa at Imsouane Bay. Over 50 surf camps and schools operate between Agadir and Essaouira, with week-long packages starting at 3,000 MAD including accommodation and meals.",
    operators: ['Surf Maroc (Taghazout)', 'Amouage Surf House (Taghazout)', 'Magic Fun Afrika (Essaouira)', 'Surf Paradise Morocco (Imsouane)'],
  },
  {
    name: 'Kitesurfing',
    icon: 'Wind',
    locations: ['Dakhla', 'Essaouira', 'Moulay Bouzerktoune'],
    season: 'March - November (Dakhla), April - September (Essaouira)',
    priceRange: '500-800 MAD equipment rental/day, 500-800 MAD group lesson (3h)',
    description: "Dakhla's 40-km lagoon is a top-3 global kitesurfing destination with 90%+ wind reliability, flat water, and shallow sandy bottom. Essaouira's strong Alizee trade winds attract intermediate and advanced riders. Multiple IKO-certified schools offer beginner through advanced courses.",
    operators: ['Dakhla Attitude (IKO certified)', 'Ocean Vagabond Dakhla', 'PK25 Kite Camp', 'ION Club Essaouira', 'Explora Watersports'],
  },
  {
    name: 'Jet Skiing',
    icon: 'Zap',
    locations: ['Agadir', 'Saidia', "M'diq", 'Tangier'],
    season: 'May - October',
    priceRange: '300-600 MAD per 30 minutes',
    description: "Jet ski rental is available at major resort beaches. Agadir's sheltered bay is the most popular spot, with operators lined up along the main beach. Saidia and M'diq on the Mediterranean also offer rentals with calmer water conditions. No license is required for rental jet skis.",
    operators: ['Agadir Beach Water Sports', 'Saidia Marina Sports', "M'diq Nautical Base"],
  },
  {
    name: 'Stand-Up Paddleboarding',
    icon: 'Anchor',
    locations: ['Oualidia', 'Agadir', 'Dakhla', 'Essaouira'],
    season: 'Year-round (best April - October)',
    priceRange: '100-200 MAD per hour',
    description: "SUP has exploded in popularity across Morocco. Oualidia's flat lagoon is the ideal spot for beginners with zero swell and shallow water. Agadir offers calm bay conditions, while Dakhla's lagoon provides flat water with wind for downwind runs. Essaouira is best for experienced paddlers due to wind and chop.",
    operators: ['Oualidia SUP Club', 'Agadir Outdoor Sports', 'Dakhla Attitude'],
  },
  {
    name: 'Kayaking',
    icon: 'Sailboat',
    locations: ['Oualidia', 'Bin el-Ouidane', 'Essaouira', 'Al Hoceima'],
    season: 'Year-round',
    priceRange: '80-150 MAD per hour, 400-600 MAD guided half-day',
    description: "Sea kayaking and lake kayaking both have strong scenes in Morocco. Oualidia lagoon offers sheltered flat-water paddling past oyster farms. Bin el-Ouidane's mountain lake provides stunning Atlas scenery. Essaouira's coast offers more adventurous sea kayaking with island excursions.",
    operators: ['Oualidia Kayak Tours', 'Bin el-Ouidane Lake Sports', 'Explora Watersports Essaouira'],
  },
  {
    name: 'Banana Boats & Inflatables',
    icon: 'Users',
    locations: ['Agadir', 'Saidia', "M'diq", 'Tangier Bay'],
    season: 'June - September',
    priceRange: '50-100 MAD per person per ride',
    description: 'Inflatable towable rides including banana boats, donuts, and flying fish are staples at Moroccan resort beaches. These are particularly popular with families and groups. Most rides last 10-15 minutes and are pulled by a speedboat along the shore.',
    operators: ['Agadir Beach operators', 'Saidia beach vendors', "M'diq water sports center"],
  },
];

/* ═══════════════════════════════════════════════════════════════
   BOAT TRIPS & RIVER/LAKE ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const boatTrips = [
  {
    name: 'Essaouira Boat Tours',
    location: 'Essaouira Harbor',
    duration: '2-3 hours',
    price: '200-400 MAD per person',
    description: 'Traditional wooden fishing boats depart from Essaouira harbor for coastal tours past the Ile de Mogador (Mogador Island), a protected nature reserve home to Eleonora falcons. Tours include fishing opportunities, views of the medina walls from the sea, and dolphins are frequently spotted between April and October. Some tours include a fresh seafood lunch prepared aboard.',
    highlights: ['Mogador Island views', 'Dolphin spotting', 'Fishing opportunities', 'Medina views from sea', 'Fresh seafood option'],
  },
  {
    name: 'Tangier Bay Cruises',
    location: 'Tangier Marina',
    duration: '1.5-3 hours',
    price: '300-600 MAD per person',
    description: 'Cruise from Tangier Marina along the bay with views of the Kasbah, Cap Spartel lighthouse, and across the Strait of Gibraltar to Spain on clear days. Sunset cruises are particularly popular. Some operators offer the route between the Atlantic and Mediterranean meeting point at Cap Spartel.',
    highlights: ['Strait of Gibraltar views', 'See Spain from Morocco', 'Cap Spartel lighthouse', 'Sunset cruise option', 'Kasbah views from water'],
  },
  {
    name: 'Dakhla Lagoon Tours',
    location: 'Dakhla',
    duration: '3-5 hours',
    price: '400-800 MAD per person',
    description: "Explore Dakhla's extraordinary 40-km lagoon by boat, visiting the white sand peninsula, flamingo colonies, and remote sand islands. The combination of desert, turquoise water, and abundant birdlife is otherworldly. Some tours include stops for swimming, snorkeling, and a seafood barbecue on a sand island.",
    highlights: ['Flamingo colonies', 'Desert-meets-ocean landscape', 'Sand island barbecue', 'Snorkeling stops', 'White sand peninsula'],
  },
];

const riverLakeActivities = [
  {
    name: 'Bin el-Ouidane Lake',
    location: 'Azilal Province, High Atlas',
    activities: ['Kayaking', 'Fishing', 'Swimming', 'Boat tours'],
    price: '100-300 MAD for kayak/boat rental',
    description: "Morocco's largest artificial lake sits in a dramatic High Atlas mountain setting, with deep blue water surrounded by barren red-brown mountains. The lake is stocked with black bass, pike, and carp, making it a popular fishing destination. Kayaking on the calm water with Atlas mountain reflections is magical. Several lakeside auberges offer accommodation and boat rental.",
    bestSeason: 'April - October',
  },
  {
    name: 'Moulay Idriss Zerhoun Dam',
    location: 'Near Meknes',
    activities: ['Fishing', 'Picnicking', 'Bird watching'],
    price: 'Free access',
    description: 'A peaceful reservoir near the holy town of Moulay Idriss offering quiet fishing and picnicking spots. The surrounding hills are green in spring with wildflowers, and the area attracts migratory birds. A low-key alternative to the more touristed sites.',
    bestSeason: 'March - June',
  },
  {
    name: 'Oum er-Rbia River',
    location: 'Source near Khenifra, Middle Atlas',
    activities: ['Swimming', 'Picnicking', 'Photography'],
    price: 'Free access',
    description: "Morocco's longest river (555 km) has its source in the Middle Atlas mountains near Khenifra, where 40 springs emerge from the rock face creating a spectacular series of cascades. The source area has natural pools suitable for swimming, surrounded by cedar forest. The site is a popular weekend destination for Moroccan families.",
    bestSeason: 'April - September',
  },
  {
    name: 'Ahansal River Rafting',
    location: 'Central High Atlas',
    activities: ['White water rafting (Class III-IV)', 'Kayaking'],
    price: '500-900 MAD per person (guided full-day trip)',
    description: 'The Ahansal River cuts through a dramatic gorge in the Central High Atlas, offering some of the best white water rafting in North Africa. Class III-IV rapids are available during the spring melt season (March-May). Several adventure operators in Marrakech organize day trips and multi-day expeditions.',
    bestSeason: 'March - May (spring melt)',
  },
];
