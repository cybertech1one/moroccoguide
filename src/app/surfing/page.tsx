import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Waves,
  MapPin,
  Star,
  Wind,
  Sun,
  Calendar,
  DollarSign,
  Hotel,
  Car,
  ChevronRight,
  Info,
  Shield,
  Clock,
  Users,
  Heart,
  Compass,
  Home,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Anchor,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ======================================================================
   SEO METADATA
   ====================================================================== */

export const metadata: Metadata = {
  title:
    'Surfing in Morocco | Complete Guide to Africa\'s Best Surf Destination',
  description:
    'The definitive guide to surfing in Morocco. From Taghazout\'s legendary Anchor Point to the longest wave in Africa at Imsouane, discover 20+ surf spots, surf camps, schools, seasons, equipment rental, kitesurfing in Dakhla and Essaouira, and everything you need to plan the ultimate Moroccan surf trip.',
  keywords: [
    'surfing Morocco',
    'Morocco surf guide',
    'Taghazout surfing',
    'Anchor Point Morocco',
    'Imsouane longest wave Africa',
    'Essaouira kitesurfing',
    'Dakhla kitesurfing',
    'Sidi Kaouki surf',
    'Morocco surf camps',
    'Morocco surf schools',
    'Tamraght surfing',
    'Hash Point Morocco',
    'Killer Point Morocco',
    'Morocco surf season',
    'Morocco surf trip',
    'beginner surfing Morocco',
    'Mirleft surf',
    'Legzira beach',
    'Moulay Bouzerktoune',
    'Mehdia surf',
  ],
  openGraph: {
    title: 'Surfing in Morocco - Complete Surf Guide',
    description:
      'Comprehensive guide to surfing Morocco\'s Atlantic coast. World-class breaks, surf camps, kitesurfing, equipment rental, and travel logistics.',
    url: 'https://citytoursmorocco.com/surfing',
    images: [
      {
        url: '/images/hero-surf-taghazout.webp',
        width: 1200,
        height: 630,
        alt: 'Surfer riding a perfect right-hand wave at Taghazout, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/surfing' },
};

/* ======================================================================
   JSON-LD STRUCTURED DATA
   ====================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://citytoursmorocco.com/surfing#guide',
      name: 'Surfing in Morocco',
      description:
        'Complete guide to surfing in Morocco, one of the world\'s best surf destinations with Taghazout, Imsouane, Essaouira, Dakhla, surf camps, schools, equipment, seasons, and logistics.',
      url: 'https://citytoursmorocco.com/surfing',
      touristType: [
        'Surfing',
        'Kitesurfing',
        'Windsurfing',
        'Water sports',
        'Adventure travel',
      ],
      image: '/images/hero-surf-taghazout.webp',
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
          name: 'What is the best time to surf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The prime surf season runs from October to March when consistent North Atlantic swells deliver powerful waves along the entire coast. January to March sees the biggest swells with wave faces reaching 6-15 feet at advanced spots. Summer (June-September) offers smaller, gentler waves ideal for beginners. Water temperatures range from 16C in winter to 22C in summer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the best place to surf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Taghazout is Morocco\'s undisputed surf capital, with world-class breaks like Anchor Point, Killer Point, and Hash Point within walking distance. Imsouane offers the longest right-hand wave in Africa (600m+ rides). For beginners, Sidi Kaouki and Essaouira provide gentle beach breaks. Advanced surfers should also explore Tamraght and the remote breaks near Mirleft.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a surf camp cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Surf camps in Morocco range from 1,500 MAD (about 150 EUR) per week for basic hostel-style camps to 5,000+ MAD (500 EUR) per week for premium camps with private rooms, daily lessons, meals, yoga, and airport transfers. Most mid-range camps cost 2,500-3,500 MAD per week.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a wetsuit to surf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, a wetsuit is recommended year-round. In winter (October-March), a 4/3mm full suit is standard as water drops to 16-17C. In summer a 3/2mm or shorty wetsuit suffices. Wetsuits can be rented at all surf towns for 50-100 MAD per day.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Morocco good for beginner surfers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is excellent for beginners. Spots like Panoramas in Taghazout, Imsouane Bay, Sidi Kaouki, and Essaouira offer gentle, forgiving waves with sandy bottoms. A 2-hour group lesson costs 250-400 MAD. The warm climate, affordable accommodation, and relaxed culture make it one of the best places to learn to surf.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I go kitesurfing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is a world-class kitesurfing destination. Dakhla is ranked among the top 3 kite spots globally, with a vast shallow lagoon and 90%+ wind reliability from March to November. Essaouira is the windsurfing and kitesurfing capital of Africa with reliable trade winds from April to September.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get to the surf spots from the airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Agadir Al Massira Airport (AGA) is the main gateway, 45 minutes from Taghazout by taxi (250-350 MAD). Marrakech Airport is 3 hours from Taghazout via bus (120-160 MAD). For Essaouira, fly to Essaouira Mogador Airport or bus from Marrakech. Dakhla has its own airport. Many surf camps offer airport transfers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to surf in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Surfing in Morocco is generally safe, but awareness of hazards is important. Reef breaks have sharp rocks and sea urchins. Strong currents exist at many spots during big swells. Always surf with others, check conditions with locals, and wear reef booties at rocky spots.',
          },
        },
      ],
    },
  ],
};

/* ======================================================================
   SURF SPOTS DATA
   ====================================================================== */

interface SurfSpot {
  name: string;
  region: string;
  level: string;
  waveType: string;
  bestSwell: string;
  season: string;
  description: string;
  highlights: string[];
}

const taghazoutBreaks: SurfSpot[] = [
  {
    name: 'Anchor Point',
    region: 'Taghazout',
    level: 'Advanced',
    waveType: 'Right-hand point break',
    bestSwell: 'NW, 4-10 ft',
    season: 'October - March',
    description:
      'One of Africa\'s most celebrated waves. A long, fast, mechanical right-hander that peels over a boulder-strewn reef for up to 300 meters on a solid swell. The wave has multiple sections including a steep takeoff, a racing wall section, and a reforming inside. On big days the paddle-out alone is a serious challenge. This is Morocco\'s marquee wave and draws surfers from across the world during winter.',
    highlights: [
      'Up to 300m rides',
      'Consistent in winter',
      'World-class quality',
      'Photogenic setting',
    ],
  },
  {
    name: 'Hash Point',
    region: 'Taghazout',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand point break',
    bestSwell: 'NW - W, 3-8 ft',
    season: 'October - April',
    description:
      'Located just south of Anchor Point, Hash Point is a more accessible right-hand point break that picks up more swell and works on smaller days. The wave offers long, workable walls ideal for progressing surfers, with multiple sections that allow for maneuvers. It can get crowded as it is one of the more user-friendly quality waves in the area, but the atmosphere is generally friendly.',
    highlights: [
      'More consistent than Anchor',
      'Long workable walls',
      'Good progression wave',
      'Close to village',
    ],
  },
  {
    name: 'Killer Point',
    region: 'Taghazout',
    level: 'Advanced - Expert',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 5-12 ft',
    season: 'November - February',
    description:
      'Named, legend says, after orcas once spotted offshore, Killer Point is a heavy, powerful right that breaks over a shallow rock shelf just north of Anchor Point. It needs a solid 6ft+ swell to start working, but when it does it produces some of the longest, most powerful barrels in Morocco. Access is via a cliff path and the paddle-out can be treacherous. For experienced surfers only.',
    highlights: [
      'Heavy barrels',
      'Big wave potential',
      'Less crowded than Anchor',
      'Raw, powerful wave',
    ],
  },
  {
    name: 'Panoramas',
    region: 'Taghazout',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break / reef',
    bestSwell: 'NW, 3-6 ft',
    season: 'October - March',
    description:
      'A mellow, user-friendly wave just south of Taghazout village. The inside section is sandy and forgiving, perfect for beginners and intermediate surfers building confidence. The outside offers more powerful sections for those looking to progress. This is where most surf schools take their students and where many surfers warm up before heading to the point breaks.',
    highlights: [
      'Beginner-friendly',
      'Sandy bottom inside',
      'Surf school base',
      'Village location',
    ],
  },
];

const otherSurfSpots: SurfSpot[] = [
  {
    name: 'Imsouane Bay',
    region: 'Imsouane',
    level: 'All Levels',
    waveType: 'Right-hand point break',
    bestSwell: 'NW - W, 3-8 ft',
    season: 'September - April',
    description:
      'Home to the longest right-hand wave in Africa, and one of the longest in the world. On a good swell, rides of 600 meters or more are possible as the wave wraps endlessly around the bay. The wave is gentle and forgiving, making it ideal for longboarders and improvers, but its sheer length means even experts will be grinning. The small fishing village remains charming and uncommercialized.',
    highlights: [
      '600m+ rides possible',
      'Longest wave in Africa',
      'Longboarder paradise',
      'Authentic fishing village',
    ],
  },
  {
    name: 'Imsouane Cathedral',
    region: 'Imsouane',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 4-8 ft',
    season: 'October - March',
    description:
      'On the opposite side of the headland from the Bay sits Cathedral, a more powerful, hollow right that breaks over a rocky reef. It packs considerably more punch and rewards good positioning with open-face turns and occasional barrels. The two waves offer a perfect contrast: mellow longboarding in the Bay, punchy shortboarding at Cathedral.',
    highlights: [
      'More powerful than Bay',
      'Hollow sections',
      'Less crowded',
      'Reef break quality',
    ],
  },
  {
    name: 'Essaouira Beach',
    region: 'Essaouira',
    level: 'Beginner',
    waveType: 'Beach break',
    bestSwell: 'W - NW, 2-5 ft',
    season: 'Year-round (best Oct - Apr)',
    description:
      'The wide beach at Essaouira picks up swell from multiple directions and offers gentle, crumbly waves perfect for absolute beginners. Wind can be a factor as Essaouira is called the Wind City of Africa, so mornings tend to be glassier. Multiple surf schools operate from the beach, making it one of the most accessible places to try surfing for the first time.',
    highlights: [
      'Gentle beginner waves',
      'Multiple surf schools',
      'UNESCO medina backdrop',
      'Year-round surfing',
    ],
  },
  {
    name: 'Sidi Kaouki',
    region: 'South of Essaouira',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break',
    bestSwell: 'NW - W, 3-6 ft',
    season: 'September - April',
    description:
      'A wild, windswept beach 25 km south of Essaouira with consistent beach-break waves that work on most tide states. The vibe is mystical and off-grid, centered around a whitewashed marabout on the bluff. Far less crowded than Taghazout, it attracts surfers seeking solitude and a simpler experience. Camel rides along the beach at sunset have become an iconic image.',
    highlights: [
      'Consistent waves',
      'Uncrowded lineups',
      'Mystical atmosphere',
      'Budget-friendly',
    ],
  },
  {
    name: 'Devil\'s Rock',
    region: 'Tamraght',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW - W, 4-8 ft',
    season: 'October - March',
    description:
      'Located in the village of Tamraght, just south of Taghazout, Devil\'s Rock is a punchy right-hand reef break that offers hollow, fast sections over a rocky bottom. The wave is more powerful than nearby beach breaks and less crowded than the famous Taghazout points. The village of Tamraght has a growing surf scene with several camps and a laid-back Berber village atmosphere.',
    highlights: [
      'Hollow fast sections',
      'Less crowded',
      'Berber village vibe',
      'Close to Taghazout',
    ],
  },
  {
    name: 'Dakhla (Atlantic Side)',
    region: 'Dakhla',
    level: 'Intermediate - Advanced',
    waveType: 'Beach break / reef',
    bestSwell: 'NW - W, 3-8 ft',
    season: 'October - April',
    description:
      'While Dakhla is world-famous for kitesurfing, the Atlantic-facing coast outside the lagoon offers excellent surf breaks that see very few surfers. The remote location in the deep south of Morocco means consistent swell with zero crowd pressure. Several reef setups and beach breaks dot the peninsula, offering everything from mellow walls to punchy hollow waves.',
    highlights: [
      'Zero crowds',
      'Consistent swell',
      'Remote adventure',
      'Combine with kitesurfing',
    ],
  },
  {
    name: 'Mehdia Beach',
    region: 'Near Rabat / Kenitra',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break',
    bestSwell: 'NW - W, 3-6 ft',
    season: 'September - May',
    description:
      'One of Morocco\'s most consistent beach breaks, located near the city of Kenitra and an easy day trip from Rabat. Mehdia picks up virtually every swell that hits the Moroccan coast and offers powerful, punchy beach-break peaks. Less touristic than the southern surf spots, this is where Moroccan locals surf. The nearby Mehdia forest and the kasbah add cultural interest.',
    highlights: [
      'Very consistent',
      'Local surf scene',
      'Easy from Rabat',
      'Powerful beach break',
    ],
  },
  {
    name: 'Mirleft',
    region: 'Mirleft / Legzira',
    level: 'Intermediate',
    waveType: 'Beach break / reef',
    bestSwell: 'NW - W, 3-8 ft',
    season: 'October - April',
    description:
      'The stretch of coast between Mirleft and Legzira in the Souss-Massa region offers a series of uncrowded beach breaks and rocky reefs backed by dramatic red cliffs. Legzira is famous for its natural stone arch, one of Morocco\'s most photographed landmarks. The surf here is consistent, the crowds are minimal, and the scenery is breathtaking. Several small guesthouses cater to surfers.',
    highlights: [
      'Dramatic Legzira arch',
      'Uncrowded waves',
      'Red cliff scenery',
      'Off the beaten path',
    ],
  },
  {
    name: 'Moulay Bouzerktoune',
    region: '25 km north of Essaouira',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand point break',
    bestSwell: 'NW - W, 4-8 ft',
    season: 'October - March',
    description:
      'A powerful right-hand point break 25 km north of Essaouira that works best on solid northwest swells. The wave peels along a rocky headland, offering long rides with powerful wall sections. This spot is also famous as a kitesurfing and windsurfing destination due to the strong, consistent trade winds. When the wind drops and a clean swell arrives, the surfing can be world-class.',
    highlights: [
      'Long right-hand point',
      'Powerful wave face',
      'Combined kite and surf',
      'Dramatic headland setting',
    ],
  },
];

/* ======================================================================
   SURF CAMP DATA
   ====================================================================== */

interface SurfCamp {
  tier: string;
  priceRange: string;
  priceEur: string;
  includes: string[];
  examples: string[];
  bestFor: string;
}

const surfCamps: SurfCamp[] = [
  {
    tier: 'Budget',
    priceRange: '1,500 - 2,000 MAD/week',
    priceEur: '150 - 200 EUR',
    includes: [
      'Shared dorm room (4-8 beds)',
      'Self-catering kitchen access',
      'Board storage',
      'Surf spot guidance',
      'Common area with WiFi',
    ],
    examples: [
      'Hashpoint Surf House (Taghazout)',
      'Dynamic Lézard (Tamraght)',
      'Magic Surf Hostel (Taghazout)',
    ],
    bestFor: 'Solo travelers, backpackers, long-stay surfers on a budget',
  },
  {
    tier: 'Mid-Range',
    priceRange: '2,500 - 3,500 MAD/week',
    priceEur: '250 - 350 EUR',
    includes: [
      'Shared or twin room',
      'Daily breakfast included',
      'Daily surf guiding to best spots',
      'Board and wetsuit rental included',
      'WiFi, terrace, communal areas',
      'Surf photography',
    ],
    examples: [
      'Surf Maroc (Taghazout)',
      'Amouage Surf House (Tamraght)',
      'Taghazout Surf Shack',
    ],
    bestFor:
      'Most travelers, couples, small groups wanting a social experience',
  },
  {
    tier: 'Premium',
    priceRange: '3,500 - 5,000 MAD/week',
    priceEur: '350 - 500 EUR',
    includes: [
      'Private or semi-private room',
      'Full board (3 meals daily)',
      'Daily surf lessons or coaching',
      'Equipment included',
      'Yoga sessions',
      'Airport transfer',
      'Surf video analysis',
      'Excursions (souk, hammam)',
    ],
    examples: [
      'Surf Berbere (Taghazout)',
      'Surf Paradise Morocco (Tamraght)',
      'Sol House Taghazout Bay',
    ],
    bestFor:
      'Those wanting an all-inclusive experience, beginners wanting daily instruction',
  },
  {
    tier: 'Luxury',
    priceRange: '5,000+ MAD/week',
    priceEur: '500+ EUR',
    includes: [
      'Boutique riad or villa accommodation',
      'Gourmet meals with local ingredients',
      'Private surf coaching',
      'Premium equipment',
      'Spa and wellness treatments',
      'Concierge service',
      'Photography package',
      'Cultural excursions',
    ],
    examples: [
      'Hyatt Place Taghazout Bay',
      'Munga Guesthouse (Imsouane)',
      'Paradis Plage (Agadir coast)',
    ],
    bestFor: 'Luxury travelers, honeymooners, those combining surf with wellness',
  },
];

/* ======================================================================
   EQUIPMENT RENTAL DATA
   ====================================================================== */

const equipmentRental = [
  {
    item: 'Shortboard rental (per day)',
    price: '100 - 200 MAD',
    priceEur: '10 - 20 EUR',
    notes: 'Available everywhere; quality varies',
  },
  {
    item: 'Longboard / Foamie rental (per day)',
    price: '100 - 200 MAD',
    priceEur: '10 - 20 EUR',
    notes: 'Ideal for beginners; widely available',
  },
  {
    item: 'Wetsuit rental (per day)',
    price: '50 - 100 MAD',
    priceEur: '5 - 10 EUR',
    notes: '4/3mm in winter, 3/2mm in summer',
  },
  {
    item: 'Surfboard + Wetsuit combo (per day)',
    price: '150 - 250 MAD',
    priceEur: '15 - 25 EUR',
    notes: 'Best value; most shops offer combos',
  },
  {
    item: 'Surf lesson (2h group)',
    price: '250 - 400 MAD',
    priceEur: '25 - 40 EUR',
    notes: 'Includes board, wetsuit, and instructor',
  },
  {
    item: 'Surf lesson (2h private)',
    price: '500 - 800 MAD',
    priceEur: '50 - 80 EUR',
    notes: 'One-on-one instruction, faster progression',
  },
  {
    item: 'Kite equipment rental (per day)',
    price: '500 - 800 MAD',
    priceEur: '50 - 80 EUR',
    notes: 'Dakhla and Essaouira; proof of skill required',
  },
  {
    item: 'Kite lesson (3h group)',
    price: '500 - 800 MAD',
    priceEur: '50 - 80 EUR',
    notes: 'IKO certified; multiple sessions recommended',
  },
  {
    item: 'Windsurf equipment rental (per day)',
    price: '400 - 600 MAD',
    priceEur: '40 - 60 EUR',
    notes: 'Essaouira and Dakhla',
  },
  {
    item: 'Reef booties (purchase)',
    price: '150 - 300 MAD',
    priceEur: '15 - 30 EUR',
    notes: 'Essential for rocky spots; buy in Taghazout',
  },
  {
    item: 'Surfboard purchase (used)',
    price: '800 - 2,000 MAD',
    priceEur: '80 - 200 EUR',
    notes: 'Check surf shops and hostel notice boards',
  },
  {
    item: 'Weekly board rental',
    price: '500 - 1,000 MAD',
    priceEur: '50 - 100 EUR',
    notes: 'Significant discount over daily rates',
  },
];

/* ======================================================================
   SURF SEASONS DATA
   ====================================================================== */

interface SeasonInfo {
  period: string;
  label: string;
  swellSize: string;
  waterTemp: string;
  wetsuit: string;
  crowds: string;
  bestFor: string;
  description: string;
}

const surfSeasons: SeasonInfo[] = [
  {
    period: 'October - December',
    label: 'Early Season',
    swellSize: '3-8 ft',
    waterTemp: '19-21C',
    wetsuit: '3/2mm full',
    crowds: 'Moderate',
    bestFor: 'Intermediate surfers',
    description:
      'The first consistent swells of the season arrive from the North Atlantic. Water is still relatively warm from summer. Fewer crowds than peak season but all the quality spots are firing. This is the sweet spot for many experienced surfers: good waves, warm water, and room to move in the lineup.',
  },
  {
    period: 'January - March',
    label: 'Peak Season',
    swellSize: '5-15 ft',
    waterTemp: '16-17C',
    wetsuit: '4/3mm full',
    crowds: 'Busy',
    bestFor: 'Advanced surfers, big wave seekers',
    description:
      'The biggest and most consistent swells of the year. North Atlantic storms send powerful groundswells that light up every break from Mehdia to Dakhla. Anchor Point, Killer Point, and Boilers are at their best. Taghazout is at its most crowded, but the wave quality compensates. Cooler water temperatures require a proper 4/3mm wetsuit.',
  },
  {
    period: 'April - June',
    label: 'Late Season',
    swellSize: '2-5 ft',
    waterTemp: '17-19C',
    wetsuit: '3/2mm full or shorty',
    crowds: 'Low',
    bestFor: 'Beginners and intermediates',
    description:
      'Swell frequency decreases but there are still surfable days, especially in April. Warmer weather arrives, prices drop, and the vibe becomes more relaxed. Beach breaks and more sheltered spots like Imsouane Bay continue to work well. An excellent time for beginners to visit as conditions are more forgiving and instructors have more availability.',
  },
  {
    period: 'July - September',
    label: 'Summer / Off-Season',
    swellSize: '1-3 ft',
    waterTemp: '20-22C',
    wetsuit: 'Shorty or spring suit',
    crowds: 'Very low',
    bestFor: 'Absolute beginners, longboarders',
    description:
      'The quietest period for surf. Small, inconsistent waves make this challenging for shortboarders, but longboarders and beginners can find fun sessions at beach breaks. The warm water and pleasant weather make for enjoyable ocean time even without big waves. Surf camps offer their lowest prices. This is also peak kitesurfing season for Essaouira and Dakhla.',
  },
];

/* ======================================================================
   KITE / WINDSURF DATA
   ====================================================================== */

interface KiteSpot {
  name: string;
  location: string;
  level: string;
  windSpeed: string;
  bestMonths: string;
  waterCondition: string;
  description: string;
  schools: string[];
}

const kiteSpots: KiteSpot[] = [
  {
    name: 'Dakhla Lagoon',
    location: 'Dakhla',
    level: 'All Levels',
    windSpeed: '20-30 knots',
    bestMonths: 'March - November',
    waterCondition: 'Flat water, shallow lagoon',
    description:
      'One of the top 3 kitesurfing destinations on the planet. A 40-km-long lagoon between the Sahara Desert and the Atlantic Ocean creates a vast, shallow, flat-water paradise. Thermal winds average 20-30 knots with an astonishing 90%+ wind reliability. The lagoon is often waist-deep, making it extraordinarily safe for beginners. Dragon Beach, a sand spit shaped like a dragon from above, is the iconic spot.',
    schools: [
      'Dakhla Attitude (IKO certified)',
      'Ocean Vagabond',
      'PK25 Kite Camp',
      'Dakhla Spirit',
      'Westpoint Dakhla',
    ],
  },
  {
    name: 'Essaouira',
    location: 'Essaouira',
    level: 'Intermediate - Advanced',
    windSpeed: '15-25 knots',
    bestMonths: 'April - September',
    waterCondition: 'Choppy ocean, variable',
    description:
      'The Wind City of Africa has been a wind sports mecca since the 1980s. The Alizee trade winds funnel reliably through the bay from April to September. The main beach offers wave riding in the chop, while Moulay Bouzerktoune 25 km north provides flatter conditions for freestyle. The wind is strong and gusty, better suited for intermediate and advanced riders. The historic UNESCO medina provides a stunning backdrop.',
    schools: [
      'ION Club Essaouira',
      'Explora Watersports',
      'Magic Fun Afrika',
      'Ocean Vagabond Essaouira',
    ],
  },
  {
    name: 'Moulay Bouzerktoune',
    location: '25 km north of Essaouira',
    level: 'Intermediate - Advanced',
    windSpeed: '18-28 knots',
    bestMonths: 'April - September',
    waterCondition: 'Powerful shore break, open ocean',
    description:
      'A raw, exposed stretch of coast that catches the full force of the trade winds. Conditions are more powerful and less sheltered than Essaouira, with a strong shore break and big Atlantic swell. Popular with wave kiters looking for aerial sections and powerful turns. Not for beginners, but experienced riders will find some of Morocco\'s most exhilarating kite conditions.',
    schools: ['ION Club (satellite)', 'Independent local instructors'],
  },
  {
    name: 'Dakhla Speed Spot',
    location: 'Dakhla Lagoon (southern end)',
    level: 'Advanced',
    windSpeed: '25-35 knots',
    bestMonths: 'June - September',
    waterCondition: 'Ultra-flat, shallow, speed-optimized',
    description:
      'At the southern end of the Dakhla lagoon lies a stretch of ultra-flat, shallow water that has become a magnet for speed chasers and record attempts. Wind acceleration effects create the strongest sustained winds in the region, combined with mirror-flat water and a sandy bottom. Several speed records have been set or attempted here.',
    schools: ['Dakhla Attitude (speed clinics)', 'PK25 Speed Spot'],
  },
];

/* ======================================================================
   ACCOMMODATION DATA
   ====================================================================== */

interface AccommodationOption {
  type: string;
  priceRange: string;
  locations: string[];
  description: string;
}

const accommodations: AccommodationOption[] = [
  {
    type: 'Surf Hostels',
    priceRange: '80 - 200 MAD/night',
    locations: ['Taghazout', 'Tamraght', 'Imsouane', 'Essaouira', 'Sidi Kaouki'],
    description:
      'Budget-friendly dorms and shared rooms steps from the surf. Most include board storage, communal kitchens, rooftop terraces with ocean views, and a social atmosphere. This is where solo travelers meet surf buddies.',
  },
  {
    type: 'Surf Camps (all-inclusive)',
    priceRange: '200 - 700 MAD/night',
    locations: ['Taghazout', 'Tamraght', 'Imsouane', 'Sidi Kaouki'],
    description:
      'The most popular option for surf travelers. Packages typically include accommodation, meals (at least breakfast), surf guiding to the best spots, and equipment rental. Many also offer yoga, excursions, and airport transfers.',
  },
  {
    type: 'Riads and Guesthouses',
    priceRange: '300 - 800 MAD/night',
    locations: ['Essaouira', 'Taghazout', 'Mirleft'],
    description:
      'Traditional Moroccan accommodation with more charm and privacy. Riads in Essaouira\'s medina combine cultural immersion with easy beach access. Small guesthouses in Mirleft and Taghazout offer personalized hospitality.',
  },
  {
    type: 'Apartments and Villas',
    priceRange: '400 - 2,000 MAD/night',
    locations: ['Taghazout Bay', 'Tamraght', 'Essaouira', 'Dakhla'],
    description:
      'Ideal for groups and families or longer stays. Self-catering apartments along the coast offer independence and value, especially when shared. Many come with ocean views, terraces, and kitchen facilities.',
  },
  {
    type: 'Kite Camps and Eco-Lodges',
    priceRange: '500 - 1,500 MAD/night',
    locations: ['Dakhla', 'Essaouira'],
    description:
      'Specialized wind sports accommodation in Dakhla ranges from tented eco-camps on the lagoon edge to comfortable hotels with pools and restaurants. Most Dakhla kite camps offer all-inclusive packages with equipment and instruction.',
  },
];

/* ======================================================================
   SAFETY DATA
   ====================================================================== */

interface SafetyTip {
  hazard: string;
  details: string;
  prevention: string;
}

const safetyTips: SafetyTip[] = [
  {
    hazard: 'Strong Currents and Rip Tides',
    details:
      'Many Moroccan surf spots have powerful rip currents, especially during large swells. Beach breaks like Mehdia and Sidi Kaouki can develop strong rips that pull swimmers and surfers out to sea.',
    prevention:
      'Always observe the water for 10-15 minutes before entering. Look for channels of darker, calmer water indicating rips. Paddle perpendicular to the current if caught. Surf with others and tell someone where you are going.',
  },
  {
    hazard: 'Rocky Reefs and Sea Urchins',
    details:
      'Point breaks like Anchor Point, Killer Point, and Devil\'s Rock break over sharp, barnacle-covered rocks. Sea urchins are common in the shallows, especially in warmer months.',
    prevention:
      'Wear reef booties at all rocky spots (150-300 MAD from local shops). Learn the entry and exit points from other surfers before paddling out. Avoid walking on exposed reef. Carry tweezers and vinegar for urchin spines.',
  },
  {
    hazard: 'Localism',
    details:
      'Some spots, particularly Anchor Point during peak season, can have a competitive lineup with local surfers who have priority. Dropping in on locals or paddling aggressively for waves can lead to confrontations.',
    prevention:
      'Show respect in the lineup. Wait your turn and do not paddle past locals for waves. A friendly greeting goes a long way. If a spot feels tense, try a less crowded break nearby. Most Moroccan surfers are welcoming to respectful visitors.',
  },
  {
    hazard: 'Jellyfish',
    details:
      'Portuguese man-of-war and other jellyfish occasionally wash in, particularly in spring and early summer. Their stings can be painful and in rare cases cause allergic reactions.',
    prevention:
      'Check for jellyfish on the beach before entering. If stung, rinse with seawater (not fresh water), remove any tentacles with a stick or tweezers, and apply heat. Seek medical attention for severe reactions.',
  },
  {
    hazard: 'Sun Exposure',
    details:
      'The Moroccan sun is intense, especially in the south. Hours spent in the water can lead to severe sunburn, even on overcast days. Reflected UV from the water intensifies exposure.',
    prevention:
      'Apply waterproof SPF 50+ sunscreen before every session, especially on face, ears, and neck. Wear a rash vest or surf top. Reapply after long sessions. A surf hat can help for longboard sessions.',
  },
  {
    hazard: 'Dehydration and Ear Infections',
    details:
      'Surfing in warm climates leads to dehydration that is easy to overlook. Surfer\'s ear (exostosis) and ear infections are common with repeated exposure to cold water and wind.',
    prevention:
      'Drink plenty of water before and after surfing. Use surf ear plugs, especially in winter when the water is coldest. Dry ears thoroughly after each session. Carry swimmer\'s ear drops.',
  },
];

/* ======================================================================
   BEGINNER VS ADVANCED ZONES
   ====================================================================== */

const beginnerZones = [
  {
    spot: 'Panoramas, Taghazout',
    why: 'Sandy bottom, gentle waves, multiple surf schools on-site, close to the village',
  },
  {
    spot: 'Imsouane Bay',
    why: 'Longest wave in Africa, gentle and forgiving, longboard paradise, no sharp reef',
  },
  {
    spot: 'Sidi Kaouki',
    why: 'Consistent beach break, uncrowded, relaxed atmosphere, budget-friendly camps',
  },
  {
    spot: 'Essaouira Beach',
    why: 'Small crumbly waves, multiple schools, UNESCO medina to explore after surfing',
  },
  {
    spot: 'Mehdia Beach',
    why: 'Consistent beach break, local feel, easy access from Rabat, sandy bottom',
  },
];

const intermediateZones = [
  {
    spot: 'Hash Point, Taghazout',
    why: 'Workable right-hand point break, long walls for practicing turns, more forgiving than Anchor',
  },
  {
    spot: 'Imsouane Cathedral',
    why: 'Hollow reef break, step-up from beach breaks, good barrel practice',
  },
  {
    spot: 'Devil\'s Rock, Tamraght',
    why: 'Punchy reef break, fast sections, less intimidating than Killer Point',
  },
  {
    spot: 'Moulay Bouzerktoune',
    why: 'Long right-hand point break, powerful walls, tests positioning skills',
  },
  {
    spot: 'Mirleft',
    why: 'Mix of beach and reef breaks, uncrowded, scenic backdrop, variety of options',
  },
];

const advancedZones = [
  {
    spot: 'Anchor Point, Taghazout',
    why: 'World-class right, mechanical point break, up to 300m rides, competitive lineup',
  },
  {
    spot: 'Killer Point, Taghazout',
    why: 'Heavy, shallow reef break, big swell only, powerful barrels, cliff access',
  },
  {
    spot: 'Boilers, Taghazout',
    why: 'Slab-style barrel, extremely shallow reef, biggest days only, expert-level commitment',
  },
  {
    spot: 'Dakhla Atlantic Reefs',
    why: 'Remote, powerful reef breaks, zero crowds, requires self-sufficiency',
  },
];

/* ======================================================================
   TRANSPORT DATA
   ====================================================================== */

interface TransportOption {
  route: string;
  method: string;
  duration: string;
  cost: string;
  notes: string;
}

const transportOptions: TransportOption[] = [
  {
    route: 'Agadir Airport to Taghazout',
    method: 'Taxi / Transfer',
    duration: '45 minutes',
    cost: '250 - 350 MAD',
    notes:
      'Negotiate price before departure. Many surf camps offer included or discounted transfers. Grand taxis from Agadir city center cost less.',
  },
  {
    route: 'Marrakech Airport to Taghazout',
    method: 'Supratours / CTM Bus',
    duration: '3 - 3.5 hours',
    cost: '120 - 160 MAD',
    notes:
      'Buses run multiple times daily. Arrive at Agadir bus station, then taxi or local bus to Taghazout (30 min, 10-15 MAD).',
  },
  {
    route: 'Marrakech to Essaouira',
    method: 'Supratours Bus',
    duration: '2.5 - 3 hours',
    cost: '90 - 130 MAD',
    notes:
      'Multiple departures daily. Scenic route through argan forests. Alternatively, shared grand taxi (80-100 MAD).',
  },
  {
    route: 'Essaouira to Sidi Kaouki',
    method: 'Local Taxi / Bus',
    duration: '30 minutes',
    cost: '50 - 80 MAD (taxi)',
    notes:
      'Local bus runs several times daily for 10 MAD. Taxis are more convenient with boards.',
  },
  {
    route: 'Taghazout to Imsouane',
    method: 'Grand Taxi / Rental Car',
    duration: '1.5 hours',
    cost: '200 - 300 MAD (taxi)',
    notes:
      'Beautiful coastal drive. Rental car recommended for flexibility (from 250 MAD/day in Agadir). Road is paved but winding.',
  },
  {
    route: 'Casablanca to Dakhla',
    method: 'Flight (Royal Air Maroc)',
    duration: '2 hours',
    cost: '800 - 2,000 MAD',
    notes:
      'Daily flights from Casablanca. Book early for best prices. Also accessible by 18-hour bus from Agadir for the adventurous.',
  },
  {
    route: 'Rabat to Mehdia',
    method: 'Train + Taxi',
    duration: '1 hour total',
    cost: '40 - 80 MAD',
    notes:
      'Train from Rabat to Kenitra (30 min, 25 MAD) then petit taxi to Mehdia beach (15 min, 15-20 MAD).',
  },
  {
    route: 'Agadir to Mirleft / Legzira',
    method: 'Grand Taxi / Bus',
    duration: '2.5 hours',
    cost: '80 - 150 MAD',
    notes:
      'CTM or local buses from Agadir. Rental car is ideal to explore the coast. Tiznit is the nearest major town.',
  },
];

/* ======================================================================
   SURF SCHOOL DATA
   ====================================================================== */

interface SurfSchool {
  name: string;
  location: string;
  speciality: string;
  priceFrom: string;
  highlights: string[];
}

const surfSchools: SurfSchool[] = [
  {
    name: 'Surf Berbere',
    location: 'Taghazout',
    speciality: 'All levels, group and private lessons',
    priceFrom: '300 MAD / 2h group lesson',
    highlights: [
      'ISA-certified instructors',
      'Video analysis included',
      'Multilingual staff (EN, FR, AR, DE)',
      'Combined lesson and camp packages',
    ],
  },
  {
    name: 'Tamraght Surf School',
    location: 'Tamraght',
    speciality: 'Beginners and intermediates',
    priceFrom: '250 MAD / 2h group lesson',
    highlights: [
      'Small group sizes (max 6)',
      'Berber-run, authentic local experience',
      'Theory and ocean safety included',
      'Budget-friendly packages',
    ],
  },
  {
    name: 'Essaouira Surf School',
    location: 'Essaouira',
    speciality: 'Beginners, SUP, and bodyboarding',
    priceFrom: '250 MAD / 2h group lesson',
    highlights: [
      'Beach location in front of medina',
      'Equipment for all ages',
      'Also offers SUP and bodyboarding',
      'Year-round operation',
    ],
  },
  {
    name: 'Imsouane Surf School',
    location: 'Imsouane',
    speciality: 'Longboarding, all levels',
    priceFrom: '250 MAD / 2h group lesson',
    highlights: [
      'Teaches on the longest wave in Africa',
      'Longboard specialist',
      'Small authentic fishing village setting',
      'Patient, experienced instructors',
    ],
  },
  {
    name: 'Sidi Kaouki Surf Station',
    location: 'Sidi Kaouki',
    speciality: 'Beginners, women-only options',
    priceFrom: '250 MAD / 2h group lesson',
    highlights: [
      'Uncrowded beach break teaching environment',
      'Women-only sessions available',
      'Combined surf and yoga retreats',
      'Relaxed, non-competitive atmosphere',
    ],
  },
  {
    name: 'Dakhla Attitude',
    location: 'Dakhla',
    speciality: 'Kitesurfing (IKO certified)',
    priceFrom: '500 MAD / 3h kite lesson',
    highlights: [
      'IKO Level 2+ certified school',
      'Flat-water lagoon teaching area',
      'Newest equipment fleet',
      'Beginner through advanced programs',
    ],
  },
];

/* ======================================================================
   PAGE COMPONENT
   ====================================================================== */

export default function SurfingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          SECTION 1 - HERO + BREADCRUMB
          ============================================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-surf-taghazout.webp)' }}
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
            <Link
              href="/activities"
              className="hover:text-white transition-colors"
            >
              Activities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Surfing</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Surfing in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Taghazout&apos;s legendary right-hand point breaks to the
            longest wave in Africa at Imsouane, Morocco is one of the
            world&apos;s premier surf destinations. Consistent Atlantic swell,
            warm culture, and unbeatable value.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#surf-spots"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#A0522D] font-semibold hover:bg-white/90 transition-colors"
            >
              <Waves className="w-4 h-4" />
              Surf Spots
            </a>
            <a
              href="#kitesurfing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Wind className="w-4 h-4" />
              Kitesurfing
            </a>
            <a
              href="#surf-camps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Hotel className="w-4 h-4" />
              Surf Camps
            </a>
            <a
              href="#seasons"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Best Seasons
            </a>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ============================================================
          SECTION 2 - WHY SURF MOROCCO
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Waves className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Why Surf Morocco?
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Morocco sits at the crossroads of Atlantic power and African warmth,
              creating one of the most complete surf destinations on the planet.
            </p>
          </div>

          <div className="space-y-5 text-lg text-[#1A1814]/80 leading-relaxed mb-12">
            <p>
              Morocco&apos;s position at the northwestern tip of Africa makes it a
              natural magnet for North Atlantic swell. Every winter, powerful
              storm systems spinning across the Atlantic send consistent
              groundswells directly at Morocco&apos;s 2,900-kilometer coastline.
              These swells wrap around headlands and reefs, creating an
              extraordinary variety of waves from gentle beach breaks to
              world-class point breaks that can rival anything in Portugal,
              Indonesia, or California.
            </p>
            <p>
              But waves alone do not make a great surf destination. What sets
              Morocco apart is the complete package: a warm, sunny climate that
              rarely drops below 18C even in winter, a rich culture steeped in
              Berber and Arabic hospitality, some of the best food in Africa
              (tagine, fresh seafood, mint tea), and prices that make even
              budget-conscious surfers feel wealthy. A week-long surf trip to
              Morocco, including flights from Europe, accommodation, meals, and
              board rental, can cost less than a weekend at many European surf
              spots.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Waves,
                title: 'Consistent Atlantic Swell',
                desc: 'October to March delivers reliable 3-15ft swells from North Atlantic storm systems, with 250+ surfable days per year along the coast.',
              },
              {
                icon: Sun,
                title: 'Warm Climate Year-Round',
                desc: 'Air temperatures of 18-30C and 300+ sunshine days per year. Even in winter, post-surf lounging on the terrace is standard.',
              },
              {
                icon: DollarSign,
                title: 'Incredible Value',
                desc: 'Board rental from 100 MAD/day (10 EUR), surf camps from 1,500 MAD/week, tagine dinners for 40-60 MAD. A fraction of European prices.',
              },
              {
                icon: Heart,
                title: 'Rich Culture',
                desc: 'Berber hospitality, UNESCO medinas, hammam rituals, souk shopping, and some of the best food in Africa surround every surf session.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6 text-center">
                <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-3">
                  <item.icon className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 - TOP SURF SPOTS
          ============================================================ */}
      <section id="surf-spots" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <MapPin className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top Surf Spots in Morocco
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              From world-class point breaks to mellow longboard waves, Morocco&apos;s
              coast has a wave for every level.
            </p>
          </div>

          {/* -- Taghazout Feature Card -- */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="relative h-72 md:h-96">
              <img
                src="/images/hero-surf-taghazout.webp"
                alt="Aerial view of Taghazout, Morocco's surf capital with multiple point breaks"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#C4960C] text-white rounded-full mb-2">
                  Morocco&apos;s Surf Capital
                </span>
                <h3 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-2">
                  Taghazout
                </h3>
                <p className="text-white/80 max-w-xl">
                  A former fishing village transformed into a world-class surf
                  hub, with more quality breaks per kilometer than almost
                  anywhere on Earth.
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-4 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#A0522D]" />
                    The Breaks
                  </h4>
                  <div className="space-y-3 text-[#1A1814]/80 leading-relaxed">
                    <p>
                      The 30-kilometer stretch between Taghazout and Tamraght
                      contains a remarkable concentration of world-class waves.
                      Anchor Point, just north of the village, is the headliner:
                      a long, fast, mechanical right-hand point break peeling
                      for up to 300 meters over a boulder reef. It needs a solid
                      northwest swell to fire, and when it does, it draws surfers
                      from around the globe.
                    </p>
                    <p>
                      North of Anchor lies Killer Point, a heavy, powerful right
                      that needs even bigger swell to break. Beyond that,
                      Boilers is Taghazout&apos;s heaviest wave, a dredging slab
                      that only works on the biggest winter swells. For less
                      experienced surfers, Panoramas and Hash Point offer
                      friendlier waves closer to the village.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#A0522D]" />
                    Seasons at Taghazout
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        period: 'Oct - Dec',
                        label: 'Early Season',
                        desc: 'First swells arrive. Water still warm (20C). Fewer crowds. Great for intermediates as swell builds gradually.',
                      },
                      {
                        period: 'Jan - Mar',
                        label: 'Peak Season',
                        desc: 'Biggest, most consistent swells. Cooler water (16-17C). Most crowded. World-class conditions at all breaks.',
                      },
                      {
                        period: 'Apr - Jun',
                        label: 'Late Season',
                        desc: 'Swell decreasing but still surfable. Warmer weather. Great for beginners at mellow spots.',
                      },
                      {
                        period: 'Jul - Sep',
                        label: 'Off-Season',
                        desc: 'Small, inconsistent surf. Good for absolute beginners at beach breaks. Surf camps offer discounts.',
                      },
                    ].map((s) => (
                      <div key={s.period} className="flex gap-3">
                        <div className="w-1 rounded-full bg-[#A0522D] shrink-0" />
                        <div>
                          <div className="font-semibold text-[#1A1814] text-sm">
                            {s.period} &mdash; {s.label}
                          </div>
                          <div className="text-sm text-[#1A1814]/70">
                            {s.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Taghazout individual breaks */}
              <h4 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#C4960C]" />
                Taghazout Surf Breaks
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {taghazoutBreaks.map((spot) => (
                  <div
                    key={spot.name}
                    className="bg-[#EDE8E0] rounded-xl p-5"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-bold text-[#1A1814]">{spot.name}</h5>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#A0522D]/10 text-[#A0522D]">
                        {spot.level}
                      </span>
                    </div>
                    <div className="text-xs text-[#1A1814]/60 mb-2 flex flex-wrap gap-3">
                      <span className="flex items-center gap-1">
                        <Waves className="w-3 h-3" /> {spot.waveType}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {spot.season}
                      </span>
                    </div>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                      {spot.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {spot.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10px] bg-white text-[#A0522D] px-2 py-0.5 rounded-full font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* -- Imsouane Feature Card -- */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <img
                  src="/images/hero-essaouira-fishing.webp"
                  alt="Long wave at Imsouane bay, longest right-hand wave in Africa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 hidden md:block" />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#C4960C]/15 text-[#C4960C] rounded-full mb-3">
                  Longest Wave in Africa
                </span>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-3">
                  Imsouane
                </h3>
                <p className="text-[#1A1814]/80 leading-relaxed mb-4">
                  Tucked into a sheltered bay between Essaouira and Agadir,
                  Imsouane is home to what is considered the longest right-hand
                  wave in Africa. On a good swell, rides of 600 meters or more
                  are possible as the wave wraps endlessly around the bay. The
                  wave is gentle and forgiving, making it a longboarder&apos;s
                  paradise. The tiny fishing village remains beautifully
                  uncommercialized, with fresh sardines grilled at the port each
                  evening.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { label: 'Wave Length', value: '600m+' },
                    { label: 'Best Season', value: 'Sep - Apr' },
                    { label: 'Level', value: 'All levels' },
                    { label: 'Vibe', value: 'Longboard soul' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-[#EDE8E0] rounded-lg p-3 text-center"
                    >
                      <div className="text-xs text-[#1A1814]/60">
                        {item.label}
                      </div>
                      <div className="font-semibold text-[#1A1814]">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#1A1814]/70">
                  <span className="font-semibold text-[#1A1814]">
                    Getting there:
                  </span>{' '}
                  95 km south of Essaouira, 85 km north of Taghazout. A scenic
                  coastal drive through argan forests, with a stop at a
                  women&apos;s argan oil cooperative along the way.
                </p>
              </div>
            </div>
          </div>

          {/* -- Other Surf Spots Grid -- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {otherSurfSpots
              .filter(
                (s) =>
                  s.name !== 'Imsouane Bay' && s.name !== 'Imsouane Cathedral'
              )
              .map((spot) => (
                <div key={spot.name} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg">
                      {spot.name}
                    </h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#A0522D]/10 text-[#A0522D] shrink-0">
                      {spot.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#1A1814]/60 mb-1">
                    <MapPin className="w-3 h-3" />
                    {spot.region}
                  </div>
                  <div className="text-xs text-[#1A1814]/60 mb-3 flex flex-wrap gap-3">
                    <span className="flex items-center gap-1">
                      <Waves className="w-3 h-3" /> {spot.waveType}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {spot.season}
                    </span>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                    {spot.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] bg-[#EDE8E0] text-[#A0522D] px-2 py-0.5 rounded-full font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* -- Legzira / Mirleft Image Feature -- */}
          <div className="card-moroccan overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img
                src="/images/hero-legzira-arch.webp"
                alt="The natural stone arch at Legzira beach near Mirleft, Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white mb-2">
                  Mirleft &amp; Legzira
                </h3>
                <p className="text-white/80 max-w-xl">
                  Dramatic red cliffs, uncrowded reef breaks, and one of
                  Morocco&apos;s most photographed landmarks. The coast between
                  Mirleft and Legzira offers adventure surfing at its finest,
                  far from the crowds of Taghazout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 - SURF SEASONS
          ============================================================ */}
      <section id="seasons" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Calendar className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Surf Seasons in Morocco
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              October to March delivers the big swells, but Morocco offers
              something for surfers of every level year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {surfSeasons.map((season) => (
              <div key={season.period} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#A0522D]/10">
                    <Calendar className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      {season.period}
                    </h3>
                    <span className="text-sm text-[#C4960C] font-semibold">
                      {season.label}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4">
                  {season.description}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="text-xs text-[#1A1814]/50">Swell Size</div>
                    <div className="font-semibold text-[#1A1814]">
                      {season.swellSize}
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="text-xs text-[#1A1814]/50">
                      Water Temperature
                    </div>
                    <div className="font-semibold text-[#1A1814]">
                      {season.waterTemp}
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="text-xs text-[#1A1814]/50">Wetsuit</div>
                    <div className="font-semibold text-[#1A1814]">
                      {season.wetsuit}
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="text-xs text-[#1A1814]/50">Crowds</div>
                    <div className="font-semibold text-[#1A1814]">
                      {season.crowds}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-[#A0522D] font-medium">
                  Best for: {season.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 - SURF CAMPS RANKED
          ============================================================ */}
      <section id="surf-camps" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Hotel className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Surf Camps Ranked by Budget
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              From 1,500 MAD/week backpacker dorms to luxury villa retreats,
              Morocco has a surf camp for every budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {surfCamps.map((camp) => (
              <div key={camp.tier} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl">
                    {camp.tier}
                  </h3>
                  <div className="text-right">
                    <div className="font-bold text-[#A0522D]">
                      {camp.priceRange}
                    </div>
                    <div className="text-xs text-[#1A1814]/50">
                      {camp.priceEur}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/50 mb-2">
                    What&apos;s included
                  </h4>
                  <ul className="space-y-1.5">
                    {camp.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/50 mb-2">
                    Example Camps
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {camp.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-[11px] bg-[#EDE8E0] text-[#1A1814]/70 px-2.5 py-1 rounded-full"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-medium text-[#C4960C] bg-[#C4960C]/10 rounded-lg px-3 py-2">
                  Best for: {camp.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 - SURF SCHOOLS AND LESSONS
          ============================================================ */}
      <section id="surf-schools" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Users className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Surf Schools &amp; Lessons
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Certified instructors, small groups, and warm water make Morocco
              one of the best places in the world to learn to surf.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surfSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                    {school.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#1A1814]/60 mb-1">
                  <MapPin className="w-3 h-3" />
                  {school.location}
                </div>
                <div className="text-xs text-[#A0522D] font-medium mb-3">
                  From {school.priceFrom}
                </div>
                <p className="text-sm text-[#1A1814]/60 mb-3">
                  {school.speciality}
                </p>
                <ul className="space-y-1.5">
                  {school.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-[#1A1814]/70"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 - EQUIPMENT RENTAL COSTS
          ============================================================ */}
      <section id="equipment" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <DollarSign className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Equipment Rental Costs
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Morocco offers some of the most affordable surf equipment rental
              in the world. Prices are as of 2025 and may vary by season.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#A0522D]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Item
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Price (MAD)
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814] hidden md:table-cell">
                      Price (EUR)
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814] hidden lg:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentRental.map((item, i) => (
                    <tr
                      key={item.item}
                      className={
                        i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'
                      }
                    >
                      <td className="p-4 text-[#1A1814] font-medium">
                        {item.item}
                      </td>
                      <td className="p-4 text-[#A0522D] font-semibold">
                        {item.price}
                      </td>
                      <td className="p-4 text-[#1A1814]/60 hidden md:table-cell">
                        {item.priceEur}
                      </td>
                      <td className="p-4 text-[#1A1814]/60 hidden lg:table-cell">
                        {item.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
            <div className="text-sm text-[#1A1814]/70">
              <span className="font-semibold text-[#1A1814]">Pro tip:</span>{' '}
              Negotiate weekly rates for significant discounts (often 30-40%
              off daily prices). If staying more than two weeks, consider
              buying a used board from surf shop notice boards (800-2,000 MAD)
              and selling it when you leave.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8 - BEGINNER VS INTERMEDIATE VS ADVANCED ZONES
          ============================================================ */}
      <section id="skill-levels" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Compass className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Spots by Skill Level
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Choosing the right spot for your level is essential for safety and
              progression. Here is where to go based on your experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Beginner */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-green-100">
                  <Waves className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg">
                    Beginner
                  </h3>
                  <p className="text-xs text-[#1A1814]/50">
                    First time to 6 months experience
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {beginnerZones.map((zone) => (
                  <li
                    key={zone.spot}
                    className="bg-[#FAF8F5] rounded-lg p-3"
                  >
                    <div className="font-semibold text-[#1A1814] text-sm">
                      {zone.spot}
                    </div>
                    <div className="text-xs text-[#1A1814]/60 mt-0.5">
                      {zone.why}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intermediate */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-[#C4960C]/15">
                  <Waves className="w-5 h-5 text-[#C4960C]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg">
                    Intermediate
                  </h3>
                  <p className="text-xs text-[#1A1814]/50">
                    6 months to 2+ years experience
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {intermediateZones.map((zone) => (
                  <li
                    key={zone.spot}
                    className="bg-[#FAF8F5] rounded-lg p-3"
                  >
                    <div className="font-semibold text-[#1A1814] text-sm">
                      {zone.spot}
                    </div>
                    <div className="text-xs text-[#1A1814]/60 mt-0.5">
                      {zone.why}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-red-100">
                  <Waves className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg">
                    Advanced
                  </h3>
                  <p className="text-xs text-[#1A1814]/50">
                    Years of experience, reef-confident
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {advancedZones.map((zone) => (
                  <li
                    key={zone.spot}
                    className="bg-[#FAF8F5] rounded-lg p-3"
                  >
                    <div className="font-semibold text-[#1A1814] text-sm">
                      {zone.spot}
                    </div>
                    <div className="text-xs text-[#1A1814]/60 mt-0.5">
                      {zone.why}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9 - KITESURFING AND WINDSURFING GUIDE
          ============================================================ */}
      <section id="kitesurfing" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Wind className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Kitesurfing &amp; Windsurfing
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Dakhla and Essaouira rank among the world&apos;s best wind sports
              destinations, with consistent thermal winds and stunning settings.
            </p>
          </div>

          <div className="space-y-6">
            {kiteSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Wind className="w-5 h-5 text-[#A0522D]" />
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-xl">
                        {spot.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#A0522D]/10 text-[#A0522D]">
                        {spot.level}
                      </span>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                      {spot.description}
                    </p>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/50 mb-2">
                        Certified Schools
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {spot.schools.map((school) => (
                          <span
                            key={school}
                            className="text-[11px] bg-[#EDE8E0] text-[#1A1814]/70 px-2.5 py-1 rounded-full"
                          >
                            {school}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <div className="text-xs text-[#1A1814]/50">
                        Wind Speed
                      </div>
                      <div className="font-semibold text-[#1A1814]">
                        {spot.windSpeed}
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <div className="text-xs text-[#1A1814]/50">
                        Best Months
                      </div>
                      <div className="font-semibold text-[#1A1814]">
                        {spot.bestMonths}
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <div className="text-xs text-[#1A1814]/50">Water</div>
                      <div className="font-semibold text-[#1A1814]">
                        {spot.waterCondition}
                      </div>
                    </div>
                    <div className="bg-[#FAF8F5] rounded-lg p-3">
                      <div className="text-xs text-[#1A1814]/50">Location</div>
                      <div className="font-semibold text-[#1A1814]">
                        {spot.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10 - SURF CULTURE AND LIFESTYLE
          ============================================================ */}
      <section id="surf-culture" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Heart className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Surf Culture &amp; Lifestyle
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Surfing in Morocco is more than waves. It is a lifestyle shaped by
              Berber hospitality, Atlantic rhythms, and a growing community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-3">
                The Taghazout Scene
              </h3>
              <p className="text-[#1A1814]/70 leading-relaxed">
                Taghazout has evolved from a sleepy fishing village into Morocco&apos;s
                most vibrant surf town. The main street is lined with surf shops,
                juice bars, yoga studios, and cafes serving avocado toast alongside
                traditional msemen pancakes. International surfers mix with local
                Moroccan riders who have grown up on these waves. The communal rooftop
                terraces of the surf hostels are where friendships form over sunset
                mint tea. Despite the growth, the town retains a laid-back charm.
                Fishermen still mend nets on the beach, the call to prayer echoes
                from the mosque, and the pace of life revolves around the tides.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-3">
                A Typical Day
              </h3>
              <div className="space-y-3">
                {[
                  { time: '6:30 AM', activity: 'Dawn patrol at Anchor Point or Hash Point before the wind picks up and the crowds arrive.' },
                  { time: '9:00 AM', activity: 'Breakfast at a local cafe: msemen with honey, eggs, fresh orange juice, and strong Moroccan coffee.' },
                  { time: '10:30 AM', activity: 'Yoga session on the rooftop terrace overlooking the ocean, or a second surf session at a different spot.' },
                  { time: '1:00 PM', activity: 'Tagine lunch at a local restaurant (40-60 MAD) followed by a hammock nap.' },
                  { time: '3:30 PM', activity: 'Afternoon session as the glass-off hour delivers clean waves before sunset.' },
                  { time: '6:00 PM', activity: 'Sunset from the clifftop with mint tea, sharing wave stories with fellow travelers.' },
                  { time: '8:00 PM', activity: 'Communal dinner at the surf camp or a seafood feast at the fishing port.' },
                ].map((item) => (
                  <div key={item.time} className="flex gap-3">
                    <div className="w-1 rounded-full bg-[#C4960C] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#1A1814] text-sm">
                        {item.time}
                      </span>
                      <p className="text-sm text-[#1A1814]/70">
                        {item.activity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-3">
                Moroccan Surf Community
              </h3>
              <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                Morocco&apos;s local surf community has grown enormously over the
                past two decades. Moroccan surfers are increasingly competitive
                on the international stage, and local groms (young surfers) rip
                at spots like Anchor Point and Imsouane. Organizations like the
                Moroccan Surfing Federation host competitions, and several
                programs provide boards and instruction to local kids who might
                not otherwise have access. Supporting these initiatives, either by
                donating old equipment or volunteering, is a meaningful way to give
                back to the community that makes your surf trip possible.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Growing local talent',
                  'Annual competitions',
                  'Community surf programs',
                  'Equipment donation welcomed',
                  'Women surfers emerging',
                  'Berber surf heritage',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-[#A0522D]/10 text-[#A0522D] px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11 - ACCOMMODATION NEAR SURF SPOTS
          ============================================================ */}
      <section id="accommodation" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Hotel className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Where to Stay Near the Waves
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              From barefoot hostels to boutique riads, accommodation options
              along Morocco&apos;s surf coast suit every style and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((acc) => (
              <div key={acc.type} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] text-lg mb-1">
                  {acc.type}
                </h3>
                <div className="text-sm font-semibold text-[#A0522D] mb-3">
                  {acc.priceRange}
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4">
                  {acc.description}
                </p>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1814]/50 mb-2">
                    Available at
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {acc.locations.map((loc) => (
                      <span
                        key={loc}
                        className="text-[11px] bg-[#EDE8E0] text-[#1A1814]/70 px-2.5 py-1 rounded-full"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12 - GETTING TO SURF SPOTS (TRANSPORT)
          ============================================================ */}
      <section id="transport" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Car className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Getting to the Surf Spots
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Transport logistics from airports and cities to Morocco&apos;s
              best surf destinations.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#A0522D]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Route
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Method
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Duration
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      Cost
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814] hidden lg:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transportOptions.map((opt, i) => (
                    <tr
                      key={opt.route}
                      className={
                        i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'
                      }
                    >
                      <td className="p-4 text-[#1A1814] font-medium">
                        {opt.route}
                      </td>
                      <td className="p-4 text-[#1A1814]/70">{opt.method}</td>
                      <td className="p-4 text-[#1A1814]/70">
                        {opt.duration}
                      </td>
                      <td className="p-4 text-[#A0522D] font-semibold">
                        {opt.cost}
                      </td>
                      <td className="p-4 text-[#1A1814]/60 hidden lg:table-cell">
                        {opt.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
              <div className="text-sm text-[#1A1814]/70">
                <span className="font-semibold text-[#1A1814]">
                  Rental cars:
                </span>{' '}
                Renting a car is the most flexible option for exploring multiple
                surf spots. Prices start at 250 MAD/day from agencies in Agadir
                or Marrakech. A compact car is fine for coastal roads. Roof racks
                for boards can sometimes be arranged at surf shops.
              </div>
            </div>
            <div className="card-moroccan p-5 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
              <div className="text-sm text-[#1A1814]/70">
                <span className="font-semibold text-[#1A1814]">
                  Board transport:
                </span>{' '}
                Most buses accept surfboards in the luggage hold for a small
                surcharge (20-50 MAD). Grand taxis can carry boards on the roof
                rack. Airlines flying to Agadir and Essaouira often have
                surfboard baggage policies (check before booking).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13 - SAFETY
          ============================================================ */}
      <section id="safety" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Shield className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Safety in the Water
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Being aware of potential hazards will keep your surf trip safe and
              enjoyable. Morocco is generally safe for surfers, but knowledge of
              local conditions is essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((tip) => (
              <div key={tip.hazard} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                    {tip.hazard}
                  </h3>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                  {tip.details}
                </p>
                <div className="bg-[#FAF8F5] rounded-lg p-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A0522D] mb-1">
                    Prevention
                  </h4>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    {tip.prevention}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4 border-[#A0522D]">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#A0522D]" />
              Emergency Numbers
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-[#1A1814]/50 text-xs">General Emergency</div>
                <div className="font-bold text-[#1A1814]">19 (Police) / 15 (Ambulance)</div>
              </div>
              <div>
                <div className="text-[#1A1814]/50 text-xs">Tourist Police</div>
                <div className="font-bold text-[#1A1814]">+212 524 38 46 01 (Agadir)</div>
              </div>
              <div>
                <div className="text-[#1A1814]/50 text-xs">Fire / Rescue</div>
                <div className="font-bold text-[#1A1814]">15</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 14 - FAQ
          ============================================================ */}
      <section id="faq" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
              <Info className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the best time to surf in Morocco?',
                a: 'The prime surf season runs from October to March when consistent North Atlantic swells deliver powerful waves along the entire coast. January to March sees the biggest swells with wave faces reaching 6-15 feet at spots like Anchor Point and Killer Point. Summer (June-September) offers smaller, gentler waves ideal for beginners at beach breaks. Water temperatures range from 16C in winter to 22C in summer.',
              },
              {
                q: 'Where is the best place to surf in Morocco?',
                a: 'Taghazout is Morocco\'s undisputed surf capital, with world-class breaks like Anchor Point, Hash Point, Killer Point, and Panoramas all within walking distance. For the longest rides, Imsouane Bay offers 600m+ waves. Beginners should head to Sidi Kaouki or Essaouira for gentle beach breaks. For uncrowded adventure surfing, Mirleft and Legzira deliver consistent waves with dramatic scenery.',
              },
              {
                q: 'How much does a surf camp cost in Morocco?',
                a: 'Surf camps range from 1,500 MAD (about 150 EUR) per week for basic hostel-style camps with shared rooms and self-catering, to 5,000+ MAD (500 EUR) per week for premium camps with private rooms, daily lessons, meals, yoga, and airport transfers. The sweet spot for most travelers is 2,500-3,500 MAD per week, which typically includes shared accommodation, breakfast, surf guiding, and equipment.',
              },
              {
                q: 'Do I need a wetsuit to surf in Morocco?',
                a: 'Yes, a wetsuit is recommended year-round. In winter (October-March), a 4/3mm full suit is standard as water temperatures drop to 16-17C along the central coast. In summer (June-September), a 3/2mm or shorty wetsuit suffices, with water at 20-22C. Dakhla in the far south is slightly warmer year-round. Wetsuits can be rented at all surf towns for 50-100 MAD (5-10 EUR) per day.',
              },
              {
                q: 'Is Morocco good for beginner surfers?',
                a: 'Morocco is one of the best places in the world to learn to surf. Spots like Panoramas in Taghazout, Imsouane Bay, Sidi Kaouki, and Essaouira beach offer gentle, forgiving waves with sandy bottoms. Dozens of surf schools operate along the coast with certified instructors, and a 2-hour group lesson costs just 250-400 MAD (25-40 EUR). The warm climate, affordable accommodation, and relaxed Berber culture create an ideal learning environment.',
              },
              {
                q: 'Can I go kitesurfing in Morocco?',
                a: 'Absolutely. Morocco is a world-class kitesurfing destination. Dakhla is ranked among the top 3 kite spots globally, with a vast shallow lagoon, 90%+ wind reliability from March to November, and 20-30 knot thermal winds. Essaouira is the windsurfing and kitesurfing capital of Africa, with reliable trade winds from April to September. Multiple IKO-certified schools at both locations offer beginner to advanced programs.',
              },
              {
                q: 'How do I get to the surf spots from the airport?',
                a: 'Agadir Al Massira Airport (AGA) is the main gateway for Taghazout (45 min by taxi, 250-350 MAD). Marrakech Menara Airport (RAK) connects via Supratours or CTM bus to Agadir (3 hours, 120-160 MAD). For Essaouira, fly to Essaouira Mogador Airport or take a bus from Marrakech (2.5-3 hours). Dakhla has its own airport with daily flights from Casablanca. Many surf camps include airport transfers in their packages.',
              },
              {
                q: 'Is it safe to surf in Morocco?',
                a: 'Surfing in Morocco is generally safe, but awareness of hazards is important. Reef breaks like Anchor Point and Killer Point have sharp rocks and sea urchins, so reef booties are recommended. Strong currents exist at many spots during big swells. Always surf with others, respect the lineup hierarchy, check conditions with locals before paddling out, and wear appropriate protection at rocky spots. The biggest non-ocean risk is sun exposure.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="card-moroccan group"
              >
                <summary className="cursor-pointer p-5 flex items-center justify-between font-[family-name:var(--font-heading)] font-bold text-[#1A1814] hover:text-[#A0522D] transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-[#A0522D] transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-[#1A1814]/70 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 15 - EXPLORE MORE
          ============================================================ */}
      <ExploreMore
        currentCategory="activities"
        currentHref="/surfing"
        title="Continue Exploring Morocco"
      />
    </>
  );
}
