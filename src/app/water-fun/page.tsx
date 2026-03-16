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
  Navigation,
  Anchor,
  ArrowRight,
  PhoneCall,
  Droplets,
  Fish,
  Sailboat,
  Users,
  Trophy,
  Gauge,
  CircleDollarSign,
  BookOpen,
  Globe,
  Zap,
  CloudSun,
  Mountain,
  Clock,
  Camera,
  Ticket,
  Baby,
  Umbrella,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Water Activities & Water Parks in Morocco | Slides, Surfing, Diving & More',
  description:
    'Complete guide to water fun in Morocco. Water parks like Oasiria Marrakech and Aquapark Agadir, world-class surfing at Taghazout, kitesurfing in Dakhla, jet skiing, kayaking, rafting, diving, fishing, and beach activities. Prices, seasons, safety tips, and family advice.',
  keywords: [
    'Morocco water parks',
    'Oasiria Water Park Marrakech',
    'Aquapark Agadir',
    'Aqua Mirage Club Marrakech',
    'Morocco water activities',
    'surfing Taghazout Morocco',
    'Imsouane longest wave',
    'kitesurfing Dakhla',
    'jet ski Agadir',
    'parasailing Morocco',
    'kayaking Morocco',
    'paddleboarding Essaouira',
    'rafting Ourika Valley',
    'diving Al Hoceima',
    'fishing Tangier Agadir',
    'Morocco beach guide',
    'Morocco water sports families',
    'Sidi Kaouki surf',
    'Bin El Ouidane lake',
    'canyoning Morocco',
  ],
  openGraph: {
    title: 'Water Activities & Water Parks in Morocco - Slides, Surfing, Diving & More',
    description:
      'The ultimate guide to water fun across Morocco. Water parks, surfing, kitesurfing, diving, jet skiing, kayaking, rafting, fishing, and beach activities with prices and seasonal advice.',
    url: 'https://citytoursmorocco.com/water-fun',
    images: [
      {
        url: '/images/hero-water-sports.webp',
        width: 1200,
        height: 630,
        alt: 'Water activities and water parks in Morocco with turquoise waves and sunny skies',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/water-fun' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/water-fun#guide',
      name: 'Water Activities & Water Parks in Morocco',
      description:
        'Comprehensive guide to water parks, surfing, kitesurfing, diving, jet skiing, kayaking, rafting, fishing, and beach activities across Morocco.',
      url: 'https://citytoursmorocco.com/water-fun',
      touristType: ['Water parks', 'Water sports', 'Surfing', 'Kitesurfing', 'Diving', 'Family activities'],
      image: '/images/hero-water-sports.webp',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'MA',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the best water parks in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oasiria Water Park in Marrakech is Morocco\'s largest and most popular, with 10+ slides, a wave pool, and lazy river. Aquapark in Agadir offers seaside fun from May to October. Aqua Mirage Club near Marrakech combines waterpark attractions with resort amenities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the best surfing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Taghazout is Morocco\'s surf capital with world-class breaks like Anchor Point and Killer Point. Imsouane has the longest wave in Morocco (600m+ rides). Sidi Kaouki near Essaouira offers uncrowded beach breaks for intermediates. Surf schools start from 400 MAD per day.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does kitesurfing cost in Dakhla?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dakhla is world-class for kitesurfing with IKO-certified schools offering 3-day beginner courses from 2,000 MAD. Equipment rental runs 500-800 MAD per day. The lagoon has consistent 20-30 knot winds from March to November with flat, shallow water ideal for learning.',
          },
        },
        {
          '@type': 'Question',
          name: 'What water activities are best for families in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Water parks like Oasiria (Marrakech) and Aquapark (Agadir) are perfect for families. Kayaking and paddleboarding on Bin El Ouidane lake or Dakhla lagoon suits all ages. Parasailing in Agadir is accessible for children over 6. Snorkeling at Al Hoceima is gentle enough for kids.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   WATER PARKS DATA
   ═══════════════════════════════════════════════════════════════ */

interface WaterPark {
  name: string;
  location: string;
  address: string;
  adultPrice: string;
  childPrice: string;
  openMonths: string;
  hours: string;
  highlights: string[];
  description: string;
  familyTips: string[];
}

const waterParks: WaterPark[] = [
  {
    name: 'Oasiria Water Park',
    location: 'Marrakech',
    address: 'Route d\'Amizmiz, Km 4, Marrakech',
    adultPrice: '250 MAD',
    childPrice: '180 MAD (3-12 years)',
    openMonths: 'April - October (daily), weekends in March & November',
    hours: '10:00 - 18:00',
    highlights: [
      '10+ water slides including speed slides and tube rides',
      'Large wave pool with timed wave cycles',
      'Lazy river winding through landscaped gardens',
      'Dedicated children\'s splash zone with mini slides',
      'Private cabanas and VIP sun loungers available',
      'On-site restaurants serving Moroccan and international cuisine',
      'Lockers, changing rooms, and showers included',
      'Green parkland with palm trees and picnic areas',
    ],
    description:
      'Morocco\'s largest and most popular water park sits just 4 km from the center of Marrakech on the road to Amizmiz. Oasiria spans over 10 hectares of lush, palm-shaded grounds and offers a full day of aquatic entertainment for all ages. The park features more than 10 water slides ranging from gentle family rides to adrenaline-pumping speed slides that drop riders at steep angles. The wave pool generates powerful swells every 15 minutes, simulating ocean conditions in a controlled environment. The lazy river is one of the longest in North Africa, meandering through tropical gardens and past waterfalls. For young children, a dedicated splash zone with shallow pools and miniature slides keeps little ones entertained safely. Private cabanas can be reserved for families wanting shade and comfort. The park is well-maintained, with lifeguards stationed at every attraction. Food options include a poolside snack bar, a sit-down restaurant serving tagines and grills, and ice cream stands scattered throughout.',
    familyTips: [
      'Arrive at opening (10:00) to secure the best sun loungers and avoid midday queues',
      'Bring reef-safe sunscreen as the Marrakech sun is intense, even in the water',
      'Children under 3 enter free; kids 3-12 pay the reduced rate',
      'The park offers birthday party packages with reserved areas and catering',
      'A taxi from Jemaa el-Fna takes 15 minutes and costs approximately 50-70 MAD',
      'Weekdays are significantly less crowded than weekends and holidays',
    ],
  },
  {
    name: 'Aquapark Agadir',
    location: 'Agadir',
    address: 'Chemin des Dunes, Secteur Touristique, Agadir',
    adultPrice: '200 MAD',
    childPrice: '150 MAD (4-12 years)',
    openMonths: 'May - October',
    hours: '10:00 - 18:00',
    highlights: [
      '8 water slides including a kamikaze free-fall slide',
      'Family raft ride for groups of 4',
      'Heated pool for cooler days in early and late season',
      'Children\'s aqua playground with fountains and tipping buckets',
      'Beachfront location steps from the Agadir promenade',
      'Poolside bar and restaurant with ocean views',
    ],
    description:
      'Sitting right along the Agadir beachfront in the heart of the tourist district, Aquapark Agadir combines waterpark thrills with Atlantic Ocean breezes. The park is more compact than Oasiria but benefits from its seaside location and views over the crescent-shaped bay. Eight slides cater to different thrill levels: the kamikaze slide offers a near-vertical freefall drop, while the family raft ride sends groups of four careening through enclosed tubes. A heated pool extends the season into the cooler shoulder months of May and October. The children\'s aqua playground features interactive water cannons, fountains, and tipping buckets that keep younger visitors entertained for hours. After the park, visitors can walk directly onto Agadir beach for sunset. The location in the tourist zone means hotels, restaurants, and the famous corniche are all within walking distance.',
    familyTips: [
      'Combine a morning at the waterpark with an afternoon on Agadir beach',
      'The heated pool is a bonus on cooler days at the start and end of season',
      'Walking distance from most beachfront hotels in the tourist zone',
      'Less crowded than Oasiria due to the beachside competition for visitors',
      'Children under 4 enter free with a paying adult',
      'Bring water shoes as the concrete areas can get hot underfoot in July and August',
    ],
  },
  {
    name: 'Aqua Mirage Club',
    location: 'Marrakech (Palmeraie)',
    address: 'Route de Fes, Km 5, Palmeraie, Marrakech',
    adultPrice: '300 MAD (day pass)',
    childPrice: '200 MAD (4-12 years)',
    openMonths: 'Year-round (outdoor pools May - October, indoor facilities all year)',
    hours: '09:00 - 18:00 (day pass)',
    highlights: [
      'Resort-style waterpark with multiple themed pools',
      'Tube slides, body slides, and a splash park',
      'Large swimming pool with swim-up bar for adults',
      'All-inclusive day pass includes lunch buffet and drinks',
      'Hammam and spa facilities on-site',
      'Palm-lined gardens with Berber tent lounge areas',
      'Evening entertainment packages available',
    ],
    description:
      'Aqua Mirage Club occupies a sprawling resort property in the Palmeraie district of Marrakech, offering a more upscale waterpark experience. The day pass includes access to all pools, water slides, the splash park, and a generous lunch buffet. The park features several themed pools set among landscaped gardens with mature palm trees, creating a genuine oasis atmosphere. Water slides include enclosed tube rides, open body slides, and a multi-lane racing slide. Adults can enjoy the swim-up pool bar while children play in the dedicated splash zone. The resort also offers hammam treatments and spa services for parents wanting to relax while older children enjoy the slides. Berber-style lounge tents provide shaded relaxation areas. Unlike the pure waterparks, Aqua Mirage feels like a luxury resort day experience with waterpark amenities included.',
    familyTips: [
      'The all-inclusive day pass represents good value as lunch and drinks are included',
      'Book the hammam in advance as slots fill up quickly in high season',
      'The Palmeraie location is 15 minutes from the medina by taxi',
      'Evening packages with dinner and entertainment are available for a supplement',
      'The resort atmosphere makes this the most relaxing waterpark option',
      'Indoor facilities operate year-round, making it a rainy-day backup plan',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SURF SPOTS DATA
   ═══════════════════════════════════════════════════════════════ */

interface SurfSpot {
  name: string;
  location: string;
  level: string;
  description: string;
  highlights: string[];
  schoolPrice: string;
  bestSeason: string;
}

const surfSpots: SurfSpot[] = [
  {
    name: 'Taghazout',
    location: 'Agadir Region',
    level: 'Beginner to Pro',
    schoolPrice: 'From 400 MAD/day',
    bestSeason: 'October - March',
    description:
      'Morocco\'s undisputed surf capital, Taghazout packs more quality breaks per kilometer than almost anywhere on the planet. The village sits on the Atlantic coast 20 km north of Agadir and serves as the base camp for legendary waves including Anchor Point (a 300-meter mechanical right-hand point break), Killer Point (heavy reef barrels), and Panoramas (a beginner-friendly sandy bottom). Dozens of surf camps and schools line the village, offering packages from budget hostels to luxury surf retreats. Board and wetsuit rental is available on every corner. The local surf culture is welcoming, the tagine dinners are legendary, and the rooftop sunsets over the Atlantic are unforgettable.',
    highlights: [
      'Anchor Point: 300m right-hand point break, world-class',
      'Killer Point: heavy barrels for advanced surfers',
      'Panoramas: sandy bottom, ideal for beginners',
      'Dozens of surf schools and camps available',
      'Budget-friendly: board rental from 100 MAD/day',
      'Vibrant surf culture with cafes and yoga studios',
    ],
  },
  {
    name: 'Imsouane',
    location: 'Between Essaouira and Agadir',
    level: 'All Levels',
    schoolPrice: 'From 350 MAD/day',
    bestSeason: 'September - April',
    description:
      'Home to the longest wave in Morocco and one of the longest right-hand point breaks in Africa, Imsouane Bay offers rides of 600 meters or more on a good swell. The wave wraps gently around a sheltered bay, making it a paradise for longboarders and improvers. The small fishing village remains beautifully uncommercialized, with fresh sardines grilled at the port each evening and a handful of guesthouses perched on the cliffs. On the other side of the headland, Cathedral provides a more powerful, hollow right for experienced surfers. The contrast between the two waves makes Imsouane a versatile destination.',
    highlights: [
      '600m+ rides on the longest wave in Morocco',
      'Gentle, forgiving wave perfect for longboarding',
      'Cathedral break for advanced surfers on the other side',
      'Uncommercial fishing village atmosphere',
      'Fresh seafood daily at the port',
      '95 km south of Essaouira via scenic coastal road',
    ],
  },
  {
    name: 'Sidi Kaouki',
    location: '25 km south of Essaouira',
    level: 'Beginner to Intermediate',
    schoolPrice: 'From 350 MAD/day',
    bestSeason: 'September - April',
    description:
      'A windswept, mystical beach village that offers what Taghazout had 15 years ago: consistent waves, a laid-back atmosphere, and far fewer people in the water. The beach break works on most tide states and picks up swell from multiple directions. The vibe is off-grid and spiritual, centered around a whitewashed marabout on the bluff above the beach. Several small surf camps and guesthouses offer excellent value. Wind can be a factor, especially in the afternoons, but mornings are typically glassy and perfect. Camel rides along the beach at sunset have become an iconic Sidi Kaouki experience.',
    highlights: [
      'Consistent beach break with uncrowded waves',
      'Budget-friendly accommodation from 200 MAD/night',
      'Mystical, off-grid atmosphere',
      'Sunset camel rides along the beach',
      'Yoga retreats and wellness camps nearby',
      'Great intermediate progression spot',
    ],
  },
  {
    name: 'Tamraght',
    location: 'Between Taghazout and Agadir',
    level: 'Beginner to Intermediate',
    schoolPrice: 'From 400 MAD/day',
    bestSeason: 'October - March',
    description:
      'The quieter neighbor of Taghazout, Tamraght village sits on the hill above Banana Beach (Banana Point), a reliable right-hand point break that works in smaller swells and is less crowded than the Taghazout breaks. The village has a growing number of surf camps and hostels at lower prices than Taghazout, making it popular with budget travelers and longer-stay surfers. Devil\'s Rock, at the south end of Banana Beach, provides a more challenging wave when the swell picks up. The atmosphere is relaxed and community-oriented, with regular yoga classes and surf socials.',
    highlights: [
      'Banana Point: reliable right-hander, less crowded',
      'Devil\'s Rock for more challenging conditions',
      'More affordable than neighboring Taghazout',
      'Growing community of surf camps and hostels',
      'Relaxed village atmosphere with local markets',
      'Easy access to all Taghazout breaks by car or taxi',
    ],
  },
  {
    name: 'Anchor Point',
    location: 'Taghazout',
    level: 'Advanced',
    schoolPrice: 'N/A (experienced surfers only)',
    bestSeason: 'November - March',
    description:
      'One of Africa\'s most celebrated waves, Anchor Point is a long, fast, mechanical right-hand point break that peels over a boulder-strewn reef for up to 300 meters. It needs a solid northwest swell of 4-10 feet to fire properly, and when it does, the wave produces multiple sections: a steep takeoff, a racing wall, and a reforming inside section. The paddle-out can be challenging on bigger days. This is Morocco\'s marquee wave and draws experienced surfers from around the world during the winter months. Watching from the cliff path above is free and spectacular even for non-surfers.',
    highlights: [
      'Up to 300m rides on clean swells',
      'One of Africa\'s most celebrated waves',
      'Consistent and mechanical when conditions align',
      'Spectacular to watch from the cliff path above',
      'Needs NW swell 4-10 ft to work properly',
      'Peak season January through March',
    ],
  },
  {
    name: 'Killer Point',
    location: 'North of Taghazout',
    level: 'Advanced to Expert',
    schoolPrice: 'N/A (experienced surfers only)',
    bestSeason: 'November - February',
    description:
      'Named, legend says, after orcas once spotted in the area, Killer Point is a heavy, powerful right-hand reef break that needs a solid 6-foot-plus swell to start working. When it does, it produces some of the longest, most powerful barrels in Morocco. The wave breaks over a shallow rock shelf, and access is via a cliff path with a treacherous paddle-out. For experienced surfers comfortable in heavy, consequential conditions, Killer Point delivers genuine world-class barrels. Less crowded than Anchor Point due to the difficulty of access and the power of the wave.',
    highlights: [
      'Heavy barrels over shallow reef',
      'Needs 6ft+ swell to break properly',
      'Less crowded than neighboring Anchor Point',
      'Access via cliff path adds to the adventure',
      'Raw, powerful, consequential wave',
      'For experienced surfers only',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   KITESURFING SPOTS DATA
   ═══════════════════════════════════════════════════════════════ */

interface KiteSpot {
  name: string;
  location: string;
  level: string;
  windSpeed: string;
  bestMonths: string;
  waterCondition: string;
  description: string;
  schools: string[];
  price: string;
}

const kiteSpots: KiteSpot[] = [
  {
    name: 'Dakhla Lagoon',
    location: 'Dakhla, Southern Morocco',
    level: 'All Levels',
    windSpeed: '20-30 knots',
    bestMonths: 'March - November',
    waterCondition: 'Flat water, shallow lagoon',
    price: 'IKO schools from 2,000 MAD / 3 days',
    description:
      'Consistently ranked among the top 3 kitesurfing destinations on the planet, Dakhla\'s 40-kilometer lagoon between the Sahara Desert and the Atlantic Ocean creates a vast, shallow, flat-water paradise. Thermal winds average 20-30 knots from March to November with an astonishing 90%+ wind reliability. The lagoon is often waist-deep, making it extraordinarily safe for beginners, while the consistent strong winds challenge advanced riders pushing freestyle and speed. Dragon Beach, a sand spit shaped like a dragon from above, is the iconic spot. The setting is otherworldly: desert dunes, turquoise water, flamingos, and extraordinary light. Multiple IKO-certified schools offer structured beginner programs starting from 2,000 MAD for a 3-day course.',
    schools: [
      'Dakhla Attitude (IKO certified)',
      'Ocean Vagabond Dakhla',
      'PK25 Kite Camp',
      'Dakhla Spirit',
      'Westpoint Dakhla',
      'Dakhla Club',
    ],
  },
  {
    name: 'Essaouira',
    location: 'Essaouira, Atlantic Coast',
    level: 'Intermediate to Advanced',
    windSpeed: '15-25 knots',
    bestMonths: 'April - September',
    waterCondition: 'Choppy ocean, some flat areas',
    price: 'Lessons from 600 MAD / session',
    description:
      'Known as the "Wind City of Africa," Essaouira has been a wind sports destination since the 1980s. The Alizee trade winds funnel reliably through the bay from April to September, creating consistent afternoon conditions. The main beach offers wave riding in the chop, while the area near Moulay Bouzerktoune 25 km north provides flatter conditions for freestyle. The wind is strong and gusty, making it better suited for intermediate and advanced riders than absolute beginners. The historic UNESCO-listed medina provides a stunning cultural backdrop unmatched by any other kite spot in the world. Multiple schools offer lessons and equipment rental.',
    schools: [
      'ION Club Essaouira',
      'Explora Watersports',
      'Magic Fun Afrika',
      'Ocean Vagabond Essaouira',
      'Kitesurfmaroc',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   JET SKI & PARASAILING DATA
   ═══════════════════════════════════════════════════════════════ */

interface MotorizedSpot {
  name: string;
  location: string;
  activities: string[];
  prices: string[];
  season: string;
  description: string;
}

const motorizedSpots: MotorizedSpot[] = [
  {
    name: 'Agadir Beach',
    location: 'Agadir, Atlantic Coast',
    activities: ['Jet Ski', 'Parasailing', 'Banana Boat', 'Flyboard'],
    prices: [
      'Jet ski: 500 MAD / 30 min',
      'Parasailing: 300 MAD / flight',
      'Banana boat: 150 MAD / person',
      'Flyboard: 800 MAD / 20 min',
    ],
    season: 'May - October',
    description:
      'Agadir\'s 10-kilometer crescent-shaped beach is Morocco\'s primary hub for motorized water activities. Operators line the promenade from the marina to the southern end of the beach, offering jet ski rental, parasailing flights, banana boat rides, and newer attractions like flyboarding. The sheltered bay provides relatively calm conditions compared to the open Atlantic coast, making it suitable for first-timers. All operators are required to carry insurance and provide safety equipment including life jackets. Parasailing flights lift riders to around 100 meters above the bay with panoramic views of the city, the kasbah hill, and the Atlas Mountains on clear days. Jet ski circuits run along the bay under supervision.',
  },
  {
    name: 'Al Hoceima',
    location: 'Mediterranean Coast',
    activities: ['Jet Ski', 'Parasailing', 'Boat Tours'],
    prices: [
      'Jet ski: 400 MAD / 30 min',
      'Parasailing: 250 MAD / flight',
      'Boat tour: 200 MAD / person',
    ],
    season: 'June - September',
    description:
      'The Mediterranean resort town of Al Hoceima offers motorized water activities in significantly calmer waters than the Atlantic coast. Quemado Beach and surrounding coves provide sheltered conditions ideal for jet skiing and parasailing. The Mediterranean setting means warmer water and better visibility, adding to the experience. Boat tours from Al Hoceima access hidden coves, sea caves, and the Al Hoceima National Park coastline, where dolphins are frequently spotted. The town is less commercialized than Agadir, with lower prices and a more local atmosphere.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   KAYAKING & PADDLEBOARDING DATA
   ═══════════════════════════════════════════════════════════════ */

interface PaddleSpot {
  name: string;
  location: string;
  waterType: string;
  level: string;
  price: string;
  description: string;
  highlights: string[];
}

const paddleSpots: PaddleSpot[] = [
  {
    name: 'Bin El Ouidane Lake',
    location: 'Beni Mellal-Khenifra Region, Atlas Mountains',
    waterType: 'Freshwater lake',
    level: 'All Levels',
    price: 'Kayak: 150 MAD/hour, SUP: 200 MAD/hour',
    description:
      'Morocco\'s most scenic lake sits in the foothills of the Atlas Mountains, surrounded by red-earth hills and olive groves. The dam-created reservoir offers calm, flat water ideal for kayaking and stand-up paddleboarding in a dramatic mountain setting. The turquoise color of the water against the arid landscape is striking. Several operators near the dam wall offer kayak and SUP rental. Early mornings provide glass-flat conditions before the wind picks up. The lake is also popular for swimming in summer months when water temperatures reach 24-26 degrees Celsius.',
    highlights: [
      'Stunning turquoise water in an Atlas Mountain setting',
      'Glass-flat conditions in early mornings',
      'Warm water for swimming in summer (24-26 C)',
      'Kayak and SUP rental available at the dam',
      'Birdwatching opportunities along the shoreline',
      'Combine with a visit to Ouzoud Waterfalls (1 hour drive)',
    ],
  },
  {
    name: 'Essaouira Harbor & Coast',
    location: 'Essaouira, Atlantic Coast',
    waterType: 'Ocean (sheltered harbor and open coast)',
    level: 'Beginner (harbor) to Intermediate (coast)',
    price: 'Kayak: 200 MAD/hour, SUP: 250 MAD/hour',
    description:
      'Essaouira offers two distinct paddling experiences. The sheltered harbor area provides calm water for beginners, with views of the historic ramparts, blue fishing boats, and the Iles Purpuraires offshore. Morning sessions before the trade winds pick up (usually around 11:00) offer the best conditions. More experienced paddlers can head along the exposed coast toward Sidi Kaouki, navigating Atlantic swells and wind. SUP yoga classes have become popular on calm mornings. Several operators near the beach offer rental and guided tours.',
    highlights: [
      'Paddle past the historic UNESCO medina walls',
      'Views of Iles Purpuraires (Eleonora\'s falcon nesting site)',
      'Calm mornings before trade winds pick up at 11:00',
      'SUP yoga classes available on flat days',
      'Guided coastal tours for experienced paddlers',
      'Combine with windsurfing or kitesurfing in the afternoon',
    ],
  },
  {
    name: 'Dakhla Lagoon',
    location: 'Dakhla, Southern Morocco',
    waterType: 'Saltwater lagoon',
    level: 'All Levels',
    price: 'Kayak: 150 MAD/hour, SUP: 200 MAD/hour',
    description:
      'The same vast lagoon that makes Dakhla a kitesurfing mecca also provides exceptional kayaking and paddleboarding conditions. The lagoon is shallow (often waist-deep), warm, and sheltered from Atlantic swells, creating flat-water conditions that are ideal for beginners and SUP touring. Paddling across the turquoise lagoon with the Sahara Desert visible on one side and the Atlantic Ocean on the other is a surreal experience. Flamingos, herons, and other wading birds are commonly spotted. Several kite camps also offer kayak and SUP rental to guests and day visitors.',
    highlights: [
      'Flat, warm, shallow lagoon water',
      'Surreal desert-meets-ocean landscape',
      'Flamingo and wading bird spotting',
      'Warm water year-round (18-23 C)',
      'Combine with kitesurfing for a full wind-sport day',
      'Available through most kite camps in the area',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   RAFTING & CANYONING DATA
   ═══════════════════════════════════════════════════════════════ */

interface RaftingSpot {
  name: string;
  location: string;
  rapids: string;
  season: string;
  price: string;
  description: string;
  highlights: string[];
}

const raftingSpots: RaftingSpot[] = [
  {
    name: 'Ourika Valley',
    location: '60 km south of Marrakech, High Atlas',
    rapids: 'Class II-III',
    season: 'February - May (peak flow)',
    price: 'Half-day: 500 MAD, Full-day: 800 MAD',
    description:
      'The most accessible rafting destination from Marrakech, the Ourika River is fed by Atlas Mountain snowmelt and winter rainfall, creating seasonal rapids that flow through a spectacular valley of terraced hillsides and traditional Berber villages. The Class II-III rapids are suitable for beginners with a guide, offering genuine white-water thrills without extreme danger. The season is short and weather-dependent, typically running from February through May when water levels are highest. Several operators in Marrakech offer half-day and full-day excursions that include transport, equipment, guide, and often a traditional Berber lunch in a riverside village.',
    highlights: [
      'Just 1 hour from central Marrakech',
      'Class II-III rapids suitable for beginners',
      'Stunning Berber village scenery',
      'Traditional lunch included in most packages',
      'Season depends on winter rainfall and snowmelt',
      'Combine with Setti Fatma waterfalls visit',
    ],
  },
  {
    name: 'Ahansal River',
    location: 'Central High Atlas Mountains',
    rapids: 'Class III-IV',
    season: 'March - May',
    price: 'Multi-day expedition: 2,500 MAD (2 days)',
    description:
      'For serious white-water enthusiasts, the Ahansal River in the central High Atlas provides Morocco\'s most challenging rafting through a spectacular gorge carved deep into the mountains. Class III-IV rapids require previous rafting experience and a competent guide. The river flows through remote territory accessible only by 4x4, and multi-day expeditions combine rafting with camping under the stars in the gorge. The scenery is extraordinary: towering limestone walls, clear mountain water, and complete wilderness solitude. This is adventure rafting at its most raw and rewarding.',
    highlights: [
      'Morocco\'s most challenging rafting river',
      'Class III-IV rapids through deep gorges',
      'Remote wilderness setting accessible by 4x4 only',
      'Multi-day camping expeditions available',
      'Towering limestone canyon walls',
      'Previous rafting experience recommended',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DIVING & SNORKELING DATA
   ═══════════════════════════════════════════════════════════════ */

interface DiveSpot {
  name: string;
  coast: string;
  location: string;
  visibility: string;
  depth: string;
  season: string;
  price: string;
  description: string;
  marineLife: string[];
}

const diveSpots: DiveSpot[] = [
  {
    name: 'Al Hoceima',
    coast: 'Mediterranean',
    location: 'Northern Morocco',
    visibility: '15-30 meters',
    depth: '5-40 meters',
    season: 'June - October (best visibility)',
    price: 'Discovery dive: 500 MAD, 2-tank dive: 700 MAD',
    description:
      'Al Hoceima on the Mediterranean coast offers Morocco\'s best diving conditions with exceptional water clarity reaching 30 meters on good days. The coastline of Al Hoceima National Park features underwater caves, rocky reefs, seagrass meadows, and dramatic drop-offs. The Mediterranean waters are warmer and calmer than the Atlantic, making diving comfortable from June through October without heavy wetsuits. Several PADI-certified dive centers operate in the town, offering discovery dives for beginners and guided boat dives for certified divers. The marine park status means fish populations are healthy and diverse.',
    marineLife: [
      'Grouper and sea bass',
      'Moray eels in cave systems',
      'Octopus and cuttlefish',
      'Nudibranchs and sea slugs',
      'Occasional dolphins offshore',
      'Mediterranean coral and sponges',
    ],
  },
  {
    name: 'Sidi Ifni',
    coast: 'Atlantic',
    location: 'Southern Atlantic Coast',
    visibility: '5-15 meters',
    depth: '8-25 meters',
    season: 'July - October (calmest conditions)',
    price: 'Discovery dive: 450 MAD, Guided dive: 600 MAD',
    description:
      'The Atlantic coast around Sidi Ifni offers a different diving experience from the Mediterranean. Visibility is lower due to Atlantic upwelling, but the nutrient-rich waters support a different ecosystem. Rocky reefs and small wrecks along the coast harbor Atlantic species not found in the Mediterranean. The art-deco architecture of Sidi Ifni (a former Spanish colonial town) makes an atmospheric base. Diving here is emerging and uncrowded, appealing to divers who enjoy exploring new territory. Conditions are best from July to October when Atlantic swells are smallest and water is warmest.',
    marineLife: [
      'Atlantic wrasse and sea bream',
      'Barracuda schools',
      'Stingrays on sandy bottoms',
      'Lobster in rocky crevices',
      'Seahorses in seagrass beds',
      'Rich invertebrate life on reefs',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   FISHING DATA
   ═══════════════════════════════════════════════════════════════ */

interface FishingSpot {
  name: string;
  type: string;
  location: string;
  price: string;
  season: string;
  targetSpecies: string[];
  description: string;
}

const fishingSpots: FishingSpot[] = [
  {
    name: 'Deep Sea Fishing - Tangier',
    type: 'Deep sea charter',
    location: 'Strait of Gibraltar, Tangier',
    price: 'Half-day from 800 MAD/person, Private charter from 4,000 MAD',
    season: 'Year-round (best May - October)',
    targetSpecies: ['Bluefin tuna', 'Swordfish', 'Atlantic bonito', 'Sea bass', 'Dorado (mahi-mahi)'],
    description:
      'Tangier sits at the convergence of the Atlantic Ocean and the Mediterranean Sea in the Strait of Gibraltar, one of the richest fishing grounds in the world. Deep-sea charters head into the strait targeting bluefin tuna (seasonal, strictly regulated), swordfish, bonito, and dorado. The mixing of Atlantic and Mediterranean currents creates nutrient-rich waters that support extraordinary fish populations. Half-day shared charters depart from Tangier port in the early morning, while private charters can be customized to target specific species. The Strait of Gibraltar is also a major migration route, with seasonal runs of large pelagic fish.',
  },
  {
    name: 'Deep Sea Fishing - Agadir',
    type: 'Deep sea charter',
    location: 'Agadir Marina, Atlantic Coast',
    price: 'Half-day from 800 MAD/person, Private charter from 3,500 MAD',
    season: 'Year-round (best April - November)',
    targetSpecies: ['Yellowfin tuna', 'Barracuda', 'Sea bass', 'Dorado', 'Corvina'],
    description:
      'Agadir\'s modern marina is the departure point for Atlantic deep-sea fishing charters targeting the rich waters off southern Morocco. The Canary Current brings cold, nutrient-rich water up the coast, attracting large pelagic species. Yellowfin tuna are the prize catch, with fish regularly exceeding 20 kg. Barracuda, dorado, and large sea bass round out the possibilities. Several established charter companies operate modern, well-equipped boats from the marina. Half-day trips typically run from early morning to noon, while full-day expeditions head further offshore to deeper water.',
  },
  {
    name: 'Traditional Boat Fishing - Essaouira',
    type: 'Traditional fishing boat',
    location: 'Essaouira Port',
    price: 'From 400 MAD/person (2-3 hours)',
    season: 'Year-round (calmest April - October)',
    targetSpecies: ['Sea bream', 'Sea bass', 'Sardines', 'Mackerel', 'Squid'],
    description:
      'For a more authentic experience, Essaouira\'s traditional blue fishing boats offer short fishing trips from the historic port. Local fishermen take small groups out into the bay using traditional techniques: hand lines, small nets, and local knowledge passed down through generations. The experience is as much cultural as sporting, with the fishermen sharing stories and techniques while the ramparts of the medina recede behind you. Catches are typically smaller species (sea bream, mackerel, sardines, squid), and the fish can often be grilled at one of the port-side restaurants upon return. Negotiate directly with fishermen at the port; no formal booking system exists.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEACH GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

interface BeachActivity {
  beach: string;
  location: string;
  bestFor: string[];
  description: string;
}

const beachGuide: BeachActivity[] = [
  { beach: 'Agadir Beach', location: 'Agadir', bestFor: ['Jet ski', 'Parasailing', 'Swimming', 'SUP'], description: 'Sheltered 10 km crescent bay with calm water and full tourist infrastructure. Morocco\'s safest swimming beach.' },
  { beach: 'Taghazout Beach', location: 'Taghazout', bestFor: ['Surfing', 'Bodyboarding'], description: 'Iconic surf village beach with rocky point breaks north and south. Not for swimming due to currents.' },
  { beach: 'Legzira Beach', location: 'Sidi Ifni', bestFor: ['Swimming', 'Snorkeling', 'Photography'], description: 'Dramatic red stone arches and golden sand. Sheltered swimming in rock pools at low tide.' },
  { beach: 'Oualidia Lagoon', location: 'Oualidia', bestFor: ['Kayaking', 'SUP', 'Swimming', 'Oyster tasting'], description: 'Calm saltwater lagoon with flat water, ideal for families and beginners in any paddle sport.' },
  { beach: 'Dakhla Lagoon', location: 'Dakhla', bestFor: ['Kitesurfing', 'SUP', 'Kayaking'], description: 'Vast flat-water lagoon with consistent wind. World-class for kite sports, excellent for all paddle sports.' },
  { beach: 'Essaouira Beach', location: 'Essaouira', bestFor: ['Kitesurfing', 'Windsurfing', 'Surfing', 'Camel rides'], description: 'Wide, windswept beach backed by the UNESCO medina. Wind sports paradise from April to September.' },
  { beach: 'Saidia Beach', location: 'Saidia', bestFor: ['Swimming', 'Snorkeling', 'Beach sports'], description: 'Mediterranean beach resort with warm, calm water. Morocco\'s "Blue Pearl" with 14 km of sand.' },
  { beach: 'Quemado Beach', location: 'Al Hoceima', bestFor: ['Diving', 'Snorkeling', 'Swimming'], description: 'Sheltered Mediterranean cove with exceptional water clarity and easy access to dive sites.' },
];

/* ═══════════════════════════════════════════════════════════════
   SEASON GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

interface SeasonActivity {
  activity: string;
  janFeb: string;
  marApr: string;
  mayJun: string;
  julAug: string;
  sepOct: string;
  novDec: string;
}

const seasonGuide: SeasonActivity[] = [
  { activity: 'Surfing (Atlantic)', janFeb: 'Peak', marApr: 'Good', mayJun: 'Fair', julAug: 'Small', sepOct: 'Building', novDec: 'Peak' },
  { activity: 'Kitesurfing (Dakhla)', janFeb: 'Light wind', marApr: 'Season starts', mayJun: 'Excellent', julAug: 'Peak wind', sepOct: 'Excellent', novDec: 'Light wind' },
  { activity: 'Kitesurfing (Essaouira)', janFeb: 'Off-season', marApr: 'Season starts', mayJun: 'Good', julAug: 'Peak', sepOct: 'Fading', novDec: 'Off-season' },
  { activity: 'Water Parks', janFeb: 'Closed', marApr: 'Opening', mayJun: 'Open', julAug: 'Peak', sepOct: 'Open', novDec: 'Closed' },
  { activity: 'Diving (Mediterranean)', janFeb: 'Cold', marApr: 'Improving', mayJun: 'Good', julAug: 'Peak', sepOct: 'Good', novDec: 'Cold' },
  { activity: 'Rafting (Atlas)', janFeb: 'Low water', marApr: 'Peak flow', mayJun: 'Fading', julAug: 'Dry', sepOct: 'Dry', novDec: 'Low water' },
  { activity: 'Jet Ski / Parasailing', janFeb: 'Off-season', marApr: 'Limited', mayJun: 'Open', julAug: 'Peak', sepOct: 'Open', novDec: 'Off-season' },
  { activity: 'Kayaking / SUP', janFeb: 'Cool but possible', marApr: 'Good', mayJun: 'Excellent', julAug: 'Excellent', sepOct: 'Excellent', novDec: 'Cool but possible' },
  { activity: 'Fishing (Atlantic)', janFeb: 'Good', marApr: 'Good', mayJun: 'Excellent', julAug: 'Excellent', sepOct: 'Excellent', novDec: 'Good' },
  { activity: 'Swimming (Mediterranean)', janFeb: 'Too cold', marApr: 'Cool', mayJun: 'Warming', julAug: 'Peak', sepOct: 'Warm', novDec: 'Too cold' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function WaterFunPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-water-sports.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/activities" className="hover:text-white transition-colors">
              Activities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Water Activities &amp; Water Parks</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Water Activities &amp; Water Parks
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From thrilling water park slides in Marrakech to world-class surfing on the Atlantic coast, Morocco offers an extraordinary range of water fun for families, adventurers, and everyone in between.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#water-parks" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors">
              <Droplets className="w-4 h-4" />
              Water Parks
            </a>
            <a href="#surfing" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Waves className="w-4 h-4" />
              Surfing
            </a>
            <a href="#kitesurfing" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Wind className="w-4 h-4" />
              Kitesurfing
            </a>
            <a href="#diving" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Anchor className="w-4 h-4" />
              All Activities
            </a>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: A Water Playground Like No Other
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of the Atlantic Ocean and the Mediterranean Sea, with over 3,500 kilometers of coastline delivering an astonishing diversity of water activities. From the family-friendly water parks of Marrakech to the legendary surf breaks of Taghazout, from the world-class kite lagoon at Dakhla to the crystal-clear Mediterranean dive sites of Al Hoceima, the country offers something for every type of water lover.
              </p>
              <p>
                What makes Morocco exceptional is the combination of conditions and value. A day at a water park costs a fraction of European prices. A week-long surf camp with accommodation and meals starts at 3,000 MAD. Kitesurfing lessons in Dakhla, one of the top 3 kite destinations on the planet, cost half of what you would pay in the Caribbean. Add warm North African hospitality, tagine dinners on rooftop terraces, and the cultural richness of medinas and souks, and you have a water sports destination that is genuinely world-class.
              </p>
              <p>
                Whether you are traveling as a family looking for splash-park fun, a surf enthusiast chasing winter swells, a kite addict craving consistent trade winds, or an explorer wanting to kayak through dramatic landscapes, this guide covers every water activity Morocco has to offer with detailed prices, seasons, locations, and practical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Waves, value: '3,500 km', label: 'Total Coastline' },
              { icon: Droplets, value: '3 Parks', label: 'Major Water Parks' },
              { icon: Wind, value: '300+', label: 'Wind Days / Year (Dakhla)' },
              { icon: Thermometer, value: '16-25 C', label: 'Water Temp Range' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: WATER PARKS
          ═══════════════════════════════════════════════════════════ */}
      <section id="water-parks" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Water Parks in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beat the Moroccan heat with thrilling slides, wave pools, and lazy rivers. Morocco&apos;s water parks offer a perfect family day out with all-day entertainment at a fraction of European prices.
            </p>
          </div>

          <div className="space-y-10">
            {waterParks.map((park, index) => (
              <div key={park.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="tag tag-primary mb-2 inline-block">{park.location}</span>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{park.name}</h3>
                      <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {park.address}
                      </p>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{park.description}</p>

                  {/* Price & Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Adult Price', value: park.adultPrice, icon: Ticket },
                      { label: 'Child Price', value: park.childPrice, icon: Baby },
                      { label: 'Open Season', value: park.openMonths, icon: Calendar },
                      { label: 'Hours', value: park.hours, icon: Clock },
                    ].map((item) => (
                      <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <div className="flex items-center gap-1.5 mb-1">
                          <item.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          <span className="text-xs text-[var(--text-muted)]">{item.label}</span>
                        </div>
                        <div className="font-semibold text-sm text-[var(--text-primary)]">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-[var(--color-accent)]" />
                        Features &amp; Highlights
                      </h4>
                      <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                        {park.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-[var(--color-accent)]" />
                        Family Tips
                      </h4>
                      <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                        {park.familyTips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Water Parks Comparison */}
          <div className="card-moroccan p-6 md:p-8 mt-10">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-[var(--color-primary)]" />
              Water Parks at a Glance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left py-3 pr-4 text-[var(--text-primary)] font-semibold">Park</th>
                    <th className="text-left py-3 pr-4 text-[var(--text-primary)] font-semibold">Location</th>
                    <th className="text-left py-3 pr-4 text-[var(--text-primary)] font-semibold">Adult Price</th>
                    <th className="text-left py-3 pr-4 text-[var(--text-primary)] font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  <tr className="border-b border-[var(--border-primary)]/30">
                    <td className="py-3 pr-4 font-medium">Oasiria</td>
                    <td className="py-3 pr-4">Marrakech</td>
                    <td className="py-3 pr-4">250 MAD</td>
                    <td className="py-3 pr-4">Biggest park, most slides, wave pool</td>
                  </tr>
                  <tr className="border-b border-[var(--border-primary)]/30">
                    <td className="py-3 pr-4 font-medium">Aquapark</td>
                    <td className="py-3 pr-4">Agadir</td>
                    <td className="py-3 pr-4">200 MAD</td>
                    <td className="py-3 pr-4">Beachfront, combine with beach day</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Aqua Mirage</td>
                    <td className="py-3 pr-4">Marrakech</td>
                    <td className="py-3 pr-4">300 MAD</td>
                    <td className="py-3 pr-4">Luxury resort experience, all-inclusive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: SURFING
          ═══════════════════════════════════════════════════════════ */}
      <section id="surfing" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Surfing in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the legendary point breaks of Taghazout to the longest wave in Africa at Imsouane, Morocco is one of the world&apos;s great surf destinations with waves for every level and budget.
            </p>
          </div>

          {/* Surf Spots Cards */}
          <div className="space-y-8 mb-10">
            {surfSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                      <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {spot.location}
                      </p>
                    </div>
                    <span className="tag tag-primary text-[10px]">{spot.level}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'Level', value: spot.level },
                      { label: 'Best Season', value: spot.bestSeason },
                      { label: 'Schools', value: spot.schoolPrice },
                    ].map((item) => (
                      <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                        <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                        <div className="font-semibold text-sm text-[var(--text-primary)]">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {spot.highlights.map((h) => (
                      <span key={h} className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                        <CheckCircle className="w-2.5 h-2.5" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Surf Practical Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CircleDollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                Surf School Prices
              </h4>
              <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                {[
                  '2-hour group lesson: 250-400 MAD',
                  'Private lesson: 500-800 MAD',
                  'Week surf camp (all-in): 3,000-6,000 MAD',
                  'Board rental (day): 100-200 MAD',
                  'Wetsuit rental (day): 50-100 MAD',
                  'Longboard rental (day): 150-250 MAD',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-[var(--color-accent)]" />
                What to Bring
              </h4>
              <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                {[
                  'Winter (Oct-Mar): 4/3mm full wetsuit',
                  'Summer (Jun-Sep): 2mm shorty or boardshorts',
                  'Spring/Autumn: 3/2mm full suit',
                  'Reef booties for rocky point breaks',
                  'Zinc sunblock for face (stays on in water)',
                  'Ear plugs for cold-water sessions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                Surf Etiquette
              </h4>
              <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                {[
                  'Person closest to the peak has priority',
                  'Never drop in on someone already riding',
                  'Paddle around the break, not through it',
                  'Respect locals who surf here every day',
                  'Do not paddle out at breaks above your level',
                  'Keep beaches clean: pack out your trash',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: KITESURFING
          ═══════════════════════════════════════════════════════════ */}
      <section id="kitesurfing" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Wind className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Kitesurfing in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s consistent trade winds and diverse conditions make it home to one of the world&apos;s top kite destinations, anchored by the legendary Dakhla lagoon.
            </p>
          </div>

          <div className="space-y-8 mb-10">
            {kiteSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {spot.location}
                        </p>
                      </div>
                      <span className="tag tag-primary text-[10px]">{spot.level}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>
                    <div className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                      <p className="font-semibold text-[var(--text-primary)]">Schools &amp; Camps:</p>
                      <ul className="space-y-1">
                        {spot.schools.map((s) => (
                          <li key={s} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-[var(--color-primary)] shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8 bg-[var(--surface-muted)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Facts</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Wind Speed', value: spot.windSpeed, icon: Wind },
                        { label: 'Best Months', value: spot.bestMonths, icon: Calendar },
                        { label: 'Water Conditions', value: spot.waterCondition, icon: Waves },
                        { label: 'Level', value: spot.level, icon: Gauge },
                        { label: 'Price', value: spot.price, icon: CircleDollarSign },
                      ].map((fact) => (
                        <div key={fact.label} className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
                            <fact.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-xs text-[var(--text-muted)]">{fact.label}</div>
                            <div className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</div>
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: JET SKI & PARASAILING
          ═══════════════════════════════════════════════════════════ */}
      <section id="motorized" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Zap className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Jet Ski &amp; Parasailing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              For adrenaline seekers who prefer motorized thrills, Morocco&apos;s resort beaches offer jet skiing, parasailing, banana boats, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {motorizedSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{spot.name}</h3>
                <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> {spot.location}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Activities Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {spot.activities.map((act) => (
                      <span key={act} className="text-[11px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Prices:</h4>
                  <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                    {spot.prices.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CircleDollarSign className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[var(--surface-muted)] rounded-lg p-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--text-secondary)]"><span className="font-semibold text-[var(--text-primary)]">Season:</span> {spot.season}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: KAYAKING & PADDLEBOARDING
          ═══════════════════════════════════════════════════════════ */}
      <section id="paddle" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Navigation className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Kayaking &amp; Paddleboarding
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore Morocco&apos;s coastline, lagoons, and mountain lakes at your own pace. From the turquoise waters of Bin El Ouidane to the sheltered harbor of Essaouira, paddle sports offer accessible adventure for all ages.
            </p>
          </div>

          <div className="space-y-8">
            {paddleSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {spot.location}
                        </p>
                      </div>
                      <span className="tag tag-primary text-[10px]">{spot.level}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.highlights.map((h) => (
                        <span key={h} className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                          <CheckCircle className="w-2.5 h-2.5" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-[var(--surface-muted)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">Details</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Water Type', value: spot.waterType, icon: Waves },
                        { label: 'Level', value: spot.level, icon: Gauge },
                        { label: 'Price', value: spot.price, icon: CircleDollarSign },
                      ].map((fact) => (
                        <div key={fact.label} className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
                            <fact.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-xs text-[var(--text-muted)]">{fact.label}</div>
                            <div className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</div>
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: RAFTING & CANYONING
          ═══════════════════════════════════════════════════════════ */}
      <section id="rafting" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Rafting &amp; Canyoning
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s seasonal rivers fed by Atlas Mountain snowmelt offer surprisingly good white water rafting, while gorges provide canyoning adventures. The season is short but the thrills are real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {raftingSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {spot.location}
                    </p>
                  </div>
                  <span className="tag tag-accent text-[10px]">{spot.rapids}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Season', value: spot.season },
                    { label: 'Price', value: spot.price },
                  ].map((item) => (
                    <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                      <div className="font-semibold text-sm text-[var(--text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {spot.highlights.map((h) => (
                    <span key={h} className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                      <CheckCircle className="w-2.5 h-2.5" /> {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: DIVING & SNORKELING
          ═══════════════════════════════════════════════════════════ */}
      <section id="diving" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Anchor className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Diving &amp; Snorkeling
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s Mediterranean coast offers exceptional water clarity and marine biodiversity, while the Atlantic coast provides wreck diving and unique Atlantic ecosystems.
            </p>
          </div>

          <div className="space-y-8">
            {diveSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="tag tag-primary mb-2 inline-block">{spot.coast} Coast</span>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {spot.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Marine Life:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {spot.marineLife.map((m) => (
                          <span key={m} className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-[var(--surface-muted)]">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">Dive Info</h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Visibility', value: spot.visibility, icon: Globe },
                        { label: 'Depth Range', value: spot.depth, icon: Anchor },
                        { label: 'Best Season', value: spot.season, icon: Calendar },
                        { label: 'Price', value: spot.price, icon: CircleDollarSign },
                      ].map((fact) => (
                        <div key={fact.label} className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-[var(--color-primary)]/10">
                            <fact.icon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-xs text-[var(--text-muted)]">{fact.label}</div>
                            <div className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</div>
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: FISHING
          ═══════════════════════════════════════════════════════════ */}
      <section id="fishing" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Fish className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fishing in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From deep-sea charters in the Strait of Gibraltar to traditional fishing boats in Essaouira, Morocco&apos;s rich waters offer exceptional fishing experiences at every price point.
            </p>
          </div>

          <div className="space-y-8">
            {fishingSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="tag tag-accent mb-2 inline-block">{spot.type}</span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {spot.location}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <div className="text-xs text-[var(--text-muted)]">Price</div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">{spot.price}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <div className="text-xs text-[var(--text-muted)]">Season</div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">{spot.season}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-3 col-span-2 md:col-span-1">
                    <div className="text-xs text-[var(--text-muted)]">Target Species</div>
                    <div className="font-semibold text-sm text-[var(--text-primary)]">{spot.targetSpecies.slice(0, 3).join(', ')}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {spot.targetSpecies.map((species) => (
                    <span key={species} className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                      <Fish className="w-2.5 h-2.5" /> {species}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: BEACH GUIDE
          ═══════════════════════════════════════════════════════════ */}
      <section id="beach-guide" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beach Guide: Best Beaches by Activity
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Not every beach suits every activity. Here is a quick reference to match Morocco&apos;s best beaches with the water activities they excel at.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beachGuide.map((beach) => (
              <div key={beach.beach} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">{beach.beach}</h4>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {beach.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{beach.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {beach.bestFor.map((activity) => (
                    <span key={activity} className="text-[11px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10: SEASON GUIDE
          ═══════════════════════════════════════════════════════════ */}
      <section id="season-guide" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Season Guide: When to Do What
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s water activities are highly seasonal. Use this guide to plan your trip around the activities you most want to experience.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left py-3 pr-3 text-[var(--text-primary)] font-semibold whitespace-nowrap">Activity</th>
                    <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">Jan-Feb</th>
                    <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">Mar-Apr</th>
                    <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">May-Jun</th>
                    <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">Jul-Aug</th>
                    <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">Sep-Oct</th>
                    <th className="text-center py-3 px-2 text-[var(--text-primary)] font-semibold">Nov-Dec</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {seasonGuide.map((row) => (
                    <tr key={row.activity} className="border-b border-[var(--border-primary)]/30">
                      <td className="py-3 pr-3 font-medium text-[var(--text-primary)] whitespace-nowrap">{row.activity}</td>
                      <td className="py-3 px-2 text-center text-xs">{row.janFeb}</td>
                      <td className="py-3 px-2 text-center text-xs">{row.marApr}</td>
                      <td className="py-3 px-2 text-center text-xs">{row.mayJun}</td>
                      <td className="py-3 px-2 text-center text-xs">{row.julAug}</td>
                      <td className="py-3 px-2 text-center text-xs">{row.sepOct}</td>
                      <td className="py-3 px-2 text-center text-xs">{row.novDec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Seasonal Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { season: 'Winter (Dec-Feb)', icon: Waves, highlights: ['Peak surf season at Taghazout and Imsouane', 'Biggest Atlantic swells of the year', 'Whale watching off the coast', 'Water parks closed'] },
              { season: 'Spring (Mar-May)', icon: Droplets, highlights: ['Rafting season in the Atlas (peak flow)', 'Kitesurfing season starts in Dakhla', 'Water parks begin opening', 'Good all-around water sports weather'] },
              { season: 'Summer (Jun-Aug)', icon: Sun, highlights: ['Water parks at full capacity', 'Peak Mediterranean swimming and diving', 'Jet ski and parasailing season', 'Kitesurfing peak in Essaouira'] },
              { season: 'Autumn (Sep-Nov)', icon: CloudSun, highlights: ['Surf season builds on the Atlantic', 'Warm water for kayaking and SUP', 'Excellent kitesurfing in Dakhla', 'Diving season winding down'] },
            ].map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <s.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h4 className="font-bold text-[var(--text-primary)] mb-3">{s.season}</h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11: SAFETY TIPS
          ═══════════════════════════════════════════════════════════ */}
      <section id="safety" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety Tips for Water Activities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s waters can be exhilarating but also demanding. Follow these safety guidelines to ensure every session ends with a smile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Ocean Safety',
                icon: Waves,
                tips: [
                  'The Atlantic coast has powerful currents and shore break; never underestimate the ocean',
                  'Swim only at lifeguarded beaches (Agadir, Saidia) or sheltered lagoons (Oualidia)',
                  'Rip currents are common; if caught, swim parallel to shore, never against the current',
                  'Check flag warnings at supervised beaches: red means no swimming',
                  'The Mediterranean coast is significantly calmer and safer for recreational swimming',
                  'Tell someone where you are going if heading to remote coastal spots',
                ],
              },
              {
                title: 'Surf Safety',
                icon: Trophy,
                tips: [
                  'Never surf breaks above your skill level, especially reef breaks like Killer Point',
                  'Always surf with others; solo sessions at remote breaks are risky',
                  'Wear reef booties on rocky breaks to protect against sea urchins and sharp rock',
                  'Check swell forecasts before paddling out; conditions can change rapidly',
                  'Carry a basic first aid kit for minor cuts and scrapes from reef contact',
                  'Respect local surfers and the lineup hierarchy at point breaks',
                ],
              },
              {
                title: 'Water Park Safety',
                icon: Droplets,
                tips: [
                  'Supervise children at all times, even in shallow splash zones',
                  'Follow height and age restrictions on all slides',
                  'Apply waterproof SPF 50+ sunscreen and reapply every 2 hours',
                  'Stay hydrated; the combination of sun, water, and activity accelerates dehydration',
                  'Wear water shoes on hot concrete areas during July and August',
                  'Arrive early to avoid the midday heat and longest queues',
                ],
              },
              {
                title: 'Diving Safety',
                icon: Anchor,
                tips: [
                  'Only dive with PADI or SSI certified centers and instructors',
                  'Morocco has limited hyperbaric chamber access; nearest are in Casablanca and Tangier',
                  'Atlantic dive visibility can be poor (under 5m); be prepared for low-visibility navigation',
                  'Check current conditions before diving, especially at exposed Atlantic sites',
                  'Carry a surface marker buoy on all open-water dives',
                  'Allow 24 hours between diving and flying',
                ],
              },
              {
                title: 'Sun and Dehydration',
                icon: Sun,
                tips: [
                  'Morocco has intense UV especially June to September (UV index 9-11)',
                  'Water sports amplify sun exposure through reflection; wear SPF 50+ and reapply',
                  'Use zinc-based sunblock for face; it stays on better than chemical sunscreen in water',
                  'Carry water and hydrate between sessions; wind masks the feeling of dehydration',
                  'Wear a rash guard or long-sleeve lycra for extended water sessions',
                  'Seek shade during the 12:00-15:00 peak UV hours',
                ],
              },
              {
                title: 'Emergency Contacts',
                icon: PhoneCall,
                tips: [
                  'Emergency number: 150 (civil protection / SAMU) or 19 (police)',
                  'Lifeguards are present at major beaches June to September only',
                  'Carry a charged phone in a waterproof pouch during water activities',
                  'Inform someone of your plans when visiting remote spots',
                  'Travel insurance covering water sports and medical evacuation is strongly recommended',
                  'Save your hotel or riad address in your phone for emergency communication',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12: FAQ
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the best water activity for families with young children?',
                a: 'Water parks are the safest and most entertaining option for young children. Oasiria in Marrakech has a dedicated children\'s splash zone with shallow pools and mini slides. For older children (8+), kayaking on the calm Oualidia lagoon or stand-up paddleboarding on Bin El Ouidane lake are excellent choices. Parasailing in Agadir accepts children over 6 accompanied by an adult.',
              },
              {
                q: 'Can I combine surfing and kitesurfing in one trip?',
                a: 'Essaouira is the best base for combining both. Surf when the wind is light (mornings, winter months) and kitesurf when the trade winds blow (afternoons, April-September). Dakhla also works, with surfing on the ocean side and kitesurfing in the lagoon. Both towns have rental equipment for both sports.',
              },
              {
                q: 'Do I need to bring my own equipment?',
                a: 'For surfing, you can easily rent boards and wetsuits everywhere in Morocco. For kitesurfing, serious riders should bring their own kite, bar, and harness, though rental is available in Dakhla and Essaouira. Dive gear is provided by all centers. Kayak and SUP rental is available at all listed locations. Only specialist equipment (e.g., touring SUP boards) might be worth bringing.',
              },
              {
                q: 'Are Morocco\'s water parks worth visiting compared to European parks?',
                a: 'Morocco\'s water parks are smaller than major European parks but offer excellent value. Oasiria is the standout, with 10+ slides, a wave pool, and lazy river for just 250 MAD (about 23 EUR). The warm Moroccan climate means guaranteed sunshine and the parks are less crowded on weekdays. They are an excellent way to break up a cultural trip with family-friendly fun.',
              },
              {
                q: 'What is the best time of year for an all-around water sports trip?',
                a: 'September and October offer the best compromise: the surf season is building with early autumn swells, kitesurfing in Dakhla is still in full swing, water parks are open through October, Mediterranean diving conditions remain good, and the water is still warm enough for comfortable kayaking and SUP. The weather is sunny without the extreme summer heat.',
              },
              {
                q: 'How safe is the Atlantic coast for swimming?',
                a: 'The open Atlantic coast can be dangerous for swimmers due to strong currents, powerful shore break, and rip tides. Swim only at lifeguarded beaches (Agadir is the safest major beach) or sheltered lagoons like Oualidia and Dakhla. The Mediterranean coast around Al Hoceima and Saidia is significantly calmer and safer for recreational swimming from June to September.',
              },
              {
                q: 'Is deep sea fishing in Morocco any good?',
                a: 'Morocco offers excellent fishing thanks to the nutrient-rich Canary Current on the Atlantic side and the biodiversity of the Strait of Gibraltar. Tangier charters target bluefin tuna and swordfish, Agadir offers yellowfin tuna and barracuda, and Essaouira provides authentic traditional fishing boat experiences. Half-day charters start from 800 MAD per person. Dakhla is considered one of the best shore fishing destinations in the world.',
              },
            ].map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 13: RELATED PAGES / CTA
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-8 text-center">
            Continue Exploring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Water Sports Guide', desc: 'Deep dive into surfing spots, kite conditions, dive sites, and coastal adventures with expert-level detail.', href: '/water-sports', icon: Waves },
              { title: 'Beach Guide', desc: 'Explore 20 of Morocco\'s best beaches across the Atlantic and Mediterranean coasts.', href: '/beaches', icon: Sun },
              { title: 'Adventure Activities', desc: 'Trekking, rock climbing, sandboarding, paragliding, and 15 more adventure sports across Morocco.', href: '/adventure', icon: Mountain },
              { title: 'Family Travel Guide', desc: 'Plan the perfect family trip to Morocco with kid-friendly activities, accommodation, and safety tips.', href: '/family', icon: Users },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <page.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">{page.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{page.desc}</p>
                <span className="text-sm font-medium text-[var(--color-primary)] flex items-center gap-1">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
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
            Plan Your Water Adventure in Morocco
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you want to catch your first wave, fly above the bay on a parasail, or spend a family day splashing down water slides, Morocco delivers water fun at every level and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beaches"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Waves className="w-4 h-4" />
              Beach Guide
            </Link>
            <Link
              href="/adventure"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Mountain className="w-4 h-4" />
              Adventure Activities
            </Link>
            <Link
              href="/water-sports"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" />
              Water Sports Deep Dive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
