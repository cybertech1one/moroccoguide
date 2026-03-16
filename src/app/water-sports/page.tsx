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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Water Sports in Morocco | Surfing, Kitesurfing, Diving & More',
  description:
    'Complete guide to water sports along Morocco\'s 3,500 km coastline. From world-class surfing at Taghazout and Imsouane to kitesurfing in Dakhla, diving the Mediterranean, SUP, jet skiing, sea kayaking, and white water rafting. Seasons, equipment rental, safety tips, and beginner-to-advanced spot guides.',
  keywords: [
    'Morocco water sports',
    'surfing Morocco',
    'Taghazout surf',
    'Imsouane surfing',
    'Sidi Kaouki surf',
    'Anchor Point Morocco',
    'kitesurfing Dakhla',
    'kitesurfing Morocco',
    'Essaouira windsurfing',
    'diving Morocco',
    'snorkeling Al Hoceima',
    'SUP Morocco',
    'jet skiing Morocco',
    'sea kayaking Morocco',
    'white water rafting Morocco',
    'Morocco sailing',
    'Morocco fishing charters',
    'Morocco coast activities',
    'water temperature Morocco',
  ],
  openGraph: {
    title: 'Water Sports in Morocco - Surfing, Kitesurfing, Diving & More',
    description:
      'The definitive guide to water sports across Morocco\'s Atlantic and Mediterranean coasts. Surf breaks, kite lagoons, dive sites, and coastal adventures.',
    url: 'https://cityguide.ma/water-sports',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1502680390548-bdbac40cee81?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Surfer riding a wave on the Moroccan Atlantic coast',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/water-sports' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristAttraction',
      '@id': 'https://cityguide.ma/water-sports#guide',
      name: 'Water Sports in Morocco',
      description:
        'Complete guide to water sports along Morocco\'s 3,500 km coastline, including surfing, kitesurfing, diving, snorkeling, SUP, kayaking, sailing, and white water rafting.',
      url: 'https://cityguide.ma/water-sports',
      touristType: ['Water sports', 'Surfing', 'Kitesurfing', 'Diving', 'Adventure sports'],
      image: 'https://images.unsplash.com/photo-1502680390548-bdbac40cee81?w=1200',
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
          name: 'What are the best water sports destinations in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Taghazout is Morocco\'s surf capital with world-class breaks like Anchor Point. Dakhla is a top-3 global kitesurfing destination with a flat-water lagoon. Essaouira is the windsurfing capital with reliable trade winds. Al Hoceima on the Mediterranean coast offers the best diving and snorkeling.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is the best time for surfing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The prime surf season runs from October to March when consistent North Atlantic swells deliver powerful waves. January to March sees the biggest swells. Summer (June-September) offers smaller waves suitable for beginners. Water temperatures range from 16C in winter to 22C in summer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Dakhla good for beginner kitesurfers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dakhla is excellent for beginners. The lagoon is shallow (often waist-deep), with flat water and consistent thermal winds of 20-30 knots from March to November. Multiple IKO-certified schools offer beginner courses. The flat water and sandy bottom make it one of the safest places to learn globally.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you go scuba diving in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Morocco has growing dive scenes on both coasts. The Mediterranean coast around Al Hoceima offers the best visibility (15-30m) with underwater caves, grouper, moray eels, and occasional dolphins. The Atlantic coast around Agadir and Essaouira has wrecks and reef diving. Several PADI-certified dive centers operate year-round.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   SURF SPOTS DATA
   ═══════════════════════════════════════════════════════════════ */

interface SurfSpot {
  name: string;
  location: string;
  level: string;
  waveType: string;
  bestSwell: string;
  season: string;
  description: string;
  highlights: string[];
}

const surfSpots: SurfSpot[] = [
  {
    name: 'Anchor Point',
    location: 'Taghazout',
    level: 'Advanced',
    waveType: 'Right-hand point break',
    bestSwell: 'NW, 4-10 ft',
    season: 'October - March',
    description:
      'One of Africa\'s most celebrated waves. A long, fast, mechanical right-hander that peels over a boulder-strewn reef for up to 300 meters on a solid swell. The wave has multiple sections: a steep takeoff, a racing wall section, and a reforming inside. On big days, the paddle-out alone is a challenge. This is Morocco\'s marquee wave and draws surfers from across the world during the winter season.',
    highlights: ['Up to 300m rides', 'Consistent in winter', 'World-class quality', 'Photogenic setting'],
  },
  {
    name: 'Killer Point',
    location: 'Taghazout',
    level: 'Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 5-12 ft',
    season: 'November - February',
    description:
      'Named (legend says) after the orcas once spotted here, Killer Point is a heavy, powerful right that breaks over a shallow rock shelf just north of Anchor Point. It needs a solid 6ft+ swell to start working, but when it does, it produces some of the longest, most powerful barrels in Morocco. Access is via a cliff path and the paddle-out can be treacherous. For experienced surfers only.',
    highlights: ['Heavy barrels', 'Big wave potential', 'Less crowded than Anchor', 'Raw, powerful wave'],
  },
  {
    name: 'Boilers',
    location: 'Taghazout',
    level: 'Expert',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 6-15 ft',
    season: 'December - February',
    description:
      'Named after the boiler wreckage visible at low tide, this is Taghazout\'s heaviest wave. A thick, dredging right that breaks over an extremely shallow reef, producing short but intense barrel rides. Only works on the biggest swells and should only be attempted by experienced surfers comfortable in heavy, shallow conditions. The reward is some of the thickest pits in North Africa.',
    highlights: ['Heavy slab-style barrel', 'Big swell only', 'Expert required', 'Iconic Morocco wave'],
  },
  {
    name: 'Panoramas',
    location: 'Taghazout',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break / reef',
    bestSwell: 'NW, 3-6 ft',
    season: 'October - March',
    description:
      'A mellow, user-friendly wave just south of Taghazout village. The inside section is sandy and forgiving, perfect for beginners and intermediate surfers building confidence. The outside offers more powerful sections for those looking to progress. This is where most surf schools take their students and where many surfers warm up before heading to the point breaks.',
    highlights: ['Beginner-friendly', 'Sandy bottom', 'Surf schools', 'Warm-up spot'],
  },
  {
    name: 'Imsouane Bay',
    location: 'Imsouane',
    level: 'All Levels',
    waveType: 'Right-hand point break',
    bestSwell: 'NW - W, 3-8 ft',
    season: 'September - April',
    description:
      'Home to what is considered the longest right-hand wave in Africa, and one of the longest in the world. On a good swell, rides of 600 meters or more are possible as the wave wraps endlessly around the bay. The wave is gentle and forgiving, making it ideal for longboarders and improvers, but its sheer length means even experts will be grinning. The small fishing village is charming and uncommercialized.',
    highlights: ['600m+ rides possible', 'Longest wave in Africa', 'Longboarder paradise', 'Uncommercial village'],
  },
  {
    name: 'Imsouane Cathedral',
    location: 'Imsouane',
    level: 'Intermediate - Advanced',
    waveType: 'Right-hand reef break',
    bestSwell: 'NW, 4-8 ft',
    season: 'October - March',
    description:
      'On the opposite side of the Imsouane headland from the Bay sits Cathedral, a more powerful, hollow right that breaks over a rocky reef. It packs considerably more punch than the Bay and rewards good positioning with open-face turns and occasional barrels. The two waves offer a perfect contrast: mellow longboarding in the Bay, punchy shortboarding at Cathedral.',
    highlights: ['More powerful than Bay', 'Hollow sections', 'Less crowded', 'Reef break quality'],
  },
  {
    name: 'Sidi Kaouki',
    location: 'South of Essaouira',
    level: 'Beginner - Intermediate',
    waveType: 'Beach break',
    bestSwell: 'NW - W, 3-6 ft',
    season: 'September - April',
    description:
      'A wild, windswept beach 25 km south of Essaouira with consistent beach-break waves that work on most tide states. The vibe here is mystical and off-grid, centered around a whitewashed marabout on the bluff. Far less crowded than Taghazout, Sidi Kaouki attracts surfers seeking solitude and a simpler experience. Camel rides along the beach at sunset have become an iconic image.',
    highlights: ['Consistent waves', 'Uncrowded', 'Mystical atmosphere', 'Budget-friendly'],
  },
  {
    name: 'Essaouira Beach Break',
    location: 'Essaouira',
    level: 'Beginner',
    waveType: 'Beach break',
    bestSwell: 'W - NW, 2-5 ft',
    season: 'Year-round (best Oct - Apr)',
    description:
      'The wide beach at Essaouira picks up swell from multiple directions and offers gentle, crumbly waves perfect for absolute beginners. The wind can be a factor here (Essaouira is called the "Wind City of Africa"), so mornings tend to be glassier. Multiple surf schools operate from the beach, making this one of the most accessible places to try surfing for the first time.',
    highlights: ['Gentle beginner waves', 'Multiple surf schools', 'UNESCO medina backdrop', 'Year-round access'],
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
      'One of the top 3 kitesurfing destinations on the planet. A 40-km-long lagoon between the Sahara Desert and the Atlantic Ocean creates a vast, shallow, flat-water paradise. Thermal winds average 20-30 knots from March to November with an astonishing 90%+ wind reliability. The lagoon is often waist-deep, making it extraordinarily safe for beginners while the consistent strong winds challenge advanced riders. Dragon Beach, a sand spit shaped like a dragon from above, is the iconic spot. The setting is otherworldly: desert dunes, turquoise water, flamingos, and extraordinary light.',
    schools: ['Dakhla Attitude (IKO certified)', 'Ocean Vagabond', 'PK25 Kite Camp', 'Dakhla Spirit', 'Westpoint Dakhla', 'Dakhla Club'],
  },
  {
    name: 'Essaouira',
    location: 'Essaouira',
    level: 'Intermediate - Advanced',
    windSpeed: '15-25 knots',
    bestMonths: 'April - September',
    waterCondition: 'Choppy ocean, some flat areas',
    description:
      'The "Wind City of Africa" has been a wind sports mecca since the 1980s. The Alizee trade winds funnel reliably through the bay from April to September, creating consistent afternoon conditions. The main beach offers wave riding in the chop, while the area near Moulay Bouzerktoune (25 km north) provides flatter conditions for freestyle. The wind here is strong and gusty, making it better suited for intermediate and advanced riders. The historic medina provides a stunning backdrop unmatched by any other kite spot in the world.',
    schools: ['ION Club Essaouira', 'Explora Watersports', 'Magic Fun Afrika', 'Ocean Vagabond Essaouira', 'Kitesurfmaroc'],
  },
  {
    name: 'Moulay Bouzerktoune',
    location: '25 km north of Essaouira',
    level: 'Intermediate - Advanced',
    windSpeed: '18-28 knots',
    bestMonths: 'April - September',
    waterCondition: 'Powerful shore break, open ocean',
    description:
      'A raw, exposed stretch of coast north of Essaouira that catches the full force of the trade winds. The conditions here are more powerful and less sheltered than Essaouira, with a strong shore break and big Atlantic swell. Popular with wave kiters looking for aerial sections and powerful turns. Not for beginners, but experienced riders will find some of Morocco\'s most exhilarating kite conditions.',
    schools: ['ION Club (satellite)', 'Independent local instructors'],
  },
  {
    name: 'Dakhla - Speed Spot',
    location: 'Dakhla Lagoon (southern end)',
    level: 'Advanced',
    windSpeed: '25-35 knots',
    bestMonths: 'June - September',
    waterCondition: 'Ultra-flat, shallow, speed-optimized',
    description:
      'At the southern end of the Dakhla lagoon lies a stretch of ultra-flat, shallow water that has become a magnet for speed chasers and record attempts. Wind acceleration effects create some of the strongest sustained winds in the region, combined with mirror-flat water and a sandy bottom. Several speed records have been set or attempted here. The conditions are too intense for beginners but represent paradise for advanced riders seeking pure speed.',
    schools: ['Dakhla Attitude (speed clinics)', 'PK25 Speed Spot'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DIVE SITES DATA
   ═══════════════════════════════════════════════════════════════ */

interface DiveSite {
  name: string;
  coast: 'Mediterranean' | 'Atlantic';
  location: string;
  depth: string;
  visibility: string;
  level: string;
  description: string;
  marineLife: string[];
}

const diveSites: DiveSite[] = [
  {
    name: 'Al Hoceima National Park',
    coast: 'Mediterranean',
    location: 'Al Hoceima',
    depth: '5-30m',
    visibility: '15-30m',
    level: 'All Levels',
    description:
      'The crown jewel of Moroccan diving. The national park protects a stretch of Mediterranean coastline with dramatic underwater cliffs, sea caves, and Posidonia seagrass meadows. The marine biodiversity here is among the richest in the western Mediterranean, with large grouper, octopus, moray eels, nudibranch, and occasionally dolphins and loggerhead turtles. Several accessible caves create atmospheric swimthroughs for experienced divers.',
    marineLife: ['Grouper', 'Moray eels', 'Octopus', 'Dolphins', 'Loggerhead turtles', 'Nudibranch', 'Barracuda'],
  },
  {
    name: 'Cala Iris',
    coast: 'Mediterranean',
    location: 'Near Al Hoceima',
    depth: '8-25m',
    visibility: '15-25m',
    level: 'Intermediate',
    description:
      'A remote fishing village accessible by boat from Al Hoceima, Cala Iris sits in a protected bay with some of the clearest water in Morocco. The dive sites here feature dramatic underwater rock formations, swim-through tunnels, and walls covered in colorful sponges and anemones. The isolation means marine life is abundant and unafraid of divers.',
    marineLife: ['Sponges', 'Anemones', 'Damselfish', 'Wrasse', 'Scorpionfish', 'Sea stars'],
  },
  {
    name: 'Badis Island',
    coast: 'Mediterranean',
    location: 'Near Al Hoceima',
    depth: '10-35m',
    visibility: '20-30m',
    level: 'Advanced',
    description:
      'A small rocky island off the Rif coast with a ruined Spanish fortress on top and spectacular diving below. The underwater terrain features sheer walls dropping to 35 meters, overhangs, and a large cave system. Currents bring nutrients that attract large pelagic fish. On a clear day, the visibility can exceed 30 meters, revealing a stunning underwater landscape.',
    marineLife: ['Large grouper', 'Amberjack', 'Eagle rays', 'Barracuda', 'Lobster', 'Sea fans'],
  },
  {
    name: 'Agadir Wrecks',
    coast: 'Atlantic',
    location: 'Agadir',
    depth: '15-28m',
    visibility: '8-15m',
    level: 'Intermediate',
    description:
      'Several shipwrecks lie off the coast of Agadir, creating artificial reefs that attract a surprising diversity of Atlantic marine life. The most popular wreck sits at 22 meters and is home to large schools of fish, octopus, and the occasional visiting ray. Atlantic visibility is generally lower than the Mediterranean, but the wrecks compensate with their eerie atmosphere and concentrated marine life.',
    marineLife: ['Atlantic fish schools', 'Octopus', 'Rays', 'Conger eels', 'Nudibranchs', 'Crabs'],
  },
  {
    name: 'Essaouira Offshore Reefs',
    coast: 'Atlantic',
    location: 'Essaouira',
    depth: '10-22m',
    visibility: '6-12m',
    level: 'Intermediate',
    description:
      'The rocky reefs offshore from Essaouira support a rich Atlantic ecosystem. Diving here is more about the atmosphere than crystal-clear visibility: kelp forests sway in the current, curious octopus emerge from crevices, and the ever-present Atlantic swell gives the dives a dynamic, alive feeling. The Iles Purpuraires (Purple Islands) off Essaouira are a protected bird sanctuary with interesting diving around their rocky shores.',
    marineLife: ['Kelp forests', 'Octopus', 'Sea urchins', 'Bream', 'Wrasse', 'Seahorses'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   OTHER WATER SPORTS DATA
   ═══════════════════════════════════════════════════════════════ */

interface WaterActivity {
  name: string;
  icon: typeof Waves;
  bestLocations: string[];
  season: string;
  priceRange: string;
  level: string;
  description: string;
}

const otherWaterSports: WaterActivity[] = [
  {
    name: 'Stand-Up Paddleboarding (SUP)',
    icon: Compass,
    bestLocations: ['Oualidia Lagoon', 'Dakhla Lagoon', 'Essaouira (calm mornings)', 'Agadir', 'Saidia'],
    season: 'Year-round (best Apr - Oct)',
    priceRange: '150-300 MAD/hour',
    level: 'Beginner-friendly',
    description:
      'SUP has exploded in popularity along Morocco\'s coast. The calm lagoons of Oualidia and Dakhla are perfect for beginners, offering flat water and stunning scenery. In Essaouira, early morning sessions before the wind picks up provide a magical experience gliding past the medina walls. Agadir\'s sheltered bay is another excellent option. Many surf schools now also offer SUP lessons and rental.',
  },
  {
    name: 'Jet Skiing & Parasailing',
    icon: Zap,
    bestLocations: ['Agadir', 'Saidia', 'M\'diq', 'Dakhla'],
    season: 'May - October',
    priceRange: '300-600 MAD / 30 min (jet ski), 200-400 MAD (parasailing)',
    level: 'No experience needed',
    description:
      'For adrenaline seekers who prefer motorized thrills, jet ski operators can be found at most resort beaches. Agadir has the most established operations, with rental by the half-hour along the promenade. Parasailing is available at Agadir, Saidia, and M\'diq during summer months, offering spectacular aerial views of the coastline. Always check that operators carry insurance and safety equipment.',
  },
  {
    name: 'White Water Rafting',
    icon: Waves,
    bestLocations: ['Ourika Valley', 'Ahansal River', 'Oum Er-Rbia River'],
    season: 'March - May (peak flow)',
    priceRange: '400-800 MAD / half-day',
    level: 'Beginner to Intermediate',
    description:
      'Morocco\'s seasonal rivers fed by Atlas Mountain snowmelt offer surprisingly good white water rafting, particularly in spring. The Ourika Valley, just 60 km from Marrakech, offers accessible Class II-III rapids surrounded by Berber villages and terraced hillsides. For more serious white water, the Ahansal River in the central High Atlas provides Class III-IV rapids through a spectacular gorge. The season is short (March to May), dependent on winter rainfall and snowmelt.',
  },
  {
    name: 'Sea Kayaking',
    icon: Navigation,
    bestLocations: ['Essaouira coast', 'Al Hoceima', 'Oualidia Lagoon', 'Dakhla Lagoon', 'Cabo Negro'],
    season: 'Year-round (best Apr - Oct)',
    priceRange: '200-500 MAD / half-day',
    level: 'Beginner-friendly (lagoons), Intermediate (ocean)',
    description:
      'Sea kayaking is one of the most rewarding ways to explore Morocco\'s coastline. In the calm lagoons of Oualidia and Dakhla, beginners can paddle among flamingos and explore mangrove-like channels. Along the Mediterranean coast at Al Hoceima, kayaking accesses hidden caves and secluded coves unreachable by land. The Atlantic coast near Essaouira offers more challenging open-water paddling with views of the Iles Purpuraires.',
  },
  {
    name: 'Sailing & Boat Tours',
    icon: Sailboat,
    bestLocations: ['Agadir Marina', 'Essaouira Port', 'Dakhla', 'Saidia Marina', 'Tangier'],
    season: 'Year-round',
    priceRange: '500-2,000 MAD / half-day',
    level: 'No experience needed (tours)',
    description:
      'Morocco\'s marinas and ports offer a variety of sailing experiences. In Agadir, catamaran sunset cruises along the coast are popular, while Essaouira\'s traditional blue fishing boats offer authentic excursions to the Iles Purpuraires (where Eleonora\'s falcons nest). Dakhla has grown as a sailing destination, with the lagoon offering sheltered sailing and the open Atlantic for more adventurous passages. For experienced sailors, yacht charters are available from Tangier and Agadir.',
  },
  {
    name: 'Fishing Charters',
    icon: Fish,
    bestLocations: ['Dakhla', 'Agadir', 'Essaouira', 'Tangier', 'Al Hoceima'],
    season: 'Year-round (species dependent)',
    priceRange: '1,000-4,000 MAD / full day',
    level: 'All levels',
    description:
      'Morocco\'s waters are rich fishing grounds where the Atlantic meets warm African currents. Dakhla is the undisputed fishing capital, with some of the world\'s best shore fishing and deep-sea charters targeting huge meagre, corvina, and yellowfin tuna. Agadir and Essaouira offer sportfishing for barracuda, sea bass, and dorado. From Tangier, boats head into the Strait of Gibraltar where Atlantic and Mediterranean species converge. Local fishermen in small ports everywhere will often take you out for a negotiated price.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WATER TEMPERATURE DATA
   ═══════════════════════════════════════════════════════════════ */

interface TempData {
  region: string;
  jan: string;
  apr: string;
  jul: string;
  oct: string;
  wetsuitWinter: string;
  wetsuitSummer: string;
}

const waterTemps: TempData[] = [
  {
    region: 'Northern Atlantic (Tangier - Rabat)',
    jan: '15-16',
    apr: '16-18',
    jul: '20-22',
    oct: '20-21',
    wetsuitWinter: '4/3mm full',
    wetsuitSummer: 'Shorty or boardshorts',
  },
  {
    region: 'Central Atlantic (Casablanca - Essaouira)',
    jan: '16-17',
    apr: '17-18',
    jul: '20-21',
    oct: '20-21',
    wetsuitWinter: '4/3mm full',
    wetsuitSummer: '3/2mm or shorty',
  },
  {
    region: 'Southern Atlantic (Agadir - Taghazout)',
    jan: '16-17',
    apr: '17-18',
    jul: '21-22',
    oct: '21-22',
    wetsuitWinter: '3/2mm full',
    wetsuitSummer: 'Shorty or boardshorts',
  },
  {
    region: 'Deep South (Dakhla)',
    jan: '18-19',
    apr: '18-19',
    jul: '21-23',
    oct: '22-23',
    wetsuitWinter: '3/2mm',
    wetsuitSummer: 'Shorty or boardshorts',
  },
  {
    region: 'Mediterranean (Tangier - Saidia)',
    jan: '14-16',
    apr: '16-18',
    jul: '22-25',
    oct: '20-22',
    wetsuitWinter: '4/3mm full',
    wetsuitSummer: 'None needed',
  },
];

/* ═══════════════════════════════════════════════════════════════
   EQUIPMENT RENTAL DATA
   ═══════════════════════════════════════════════════════════════ */

const equipmentRental = [
  { item: 'Surfboard rental (day)', price: '100-200 MAD', where: 'Taghazout, Essaouira, Imsouane' },
  { item: 'Longboard rental (day)', price: '150-250 MAD', where: 'Taghazout, Imsouane, Sidi Kaouki' },
  { item: 'Wetsuit rental (day)', price: '50-100 MAD', where: 'All surf towns' },
  { item: 'Kite equipment (day)', price: '500-800 MAD', where: 'Dakhla, Essaouira' },
  { item: 'Windsurf equipment (day)', price: '400-600 MAD', where: 'Essaouira, Dakhla' },
  { item: 'SUP board rental (hour)', price: '100-200 MAD', where: 'Agadir, Oualidia, Dakhla' },
  { item: 'Kayak rental (hour)', price: '80-150 MAD', where: 'Oualidia, Essaouira, Al Hoceima' },
  { item: 'Snorkel gear (day)', price: '50-100 MAD', where: 'Al Hoceima, Saidia, Agadir' },
  { item: 'Dive equipment (full set, day)', price: '300-500 MAD', where: 'Al Hoceima, Agadir' },
  { item: 'Jet ski rental (30 min)', price: '300-600 MAD', where: 'Agadir, Saidia, M\'diq' },
  { item: 'Surf lesson (2h group)', price: '250-400 MAD', where: 'All surf towns' },
  { item: 'Kite lesson (3h group)', price: '500-800 MAD', where: 'Dakhla, Essaouira' },
];

/* ═══════════════════════════════════════════════════════════════
   BEGINNER VS ADVANCED SPOTS
   ═══════════════════════════════════════════════════════════════ */

const beginnerSpots = [
  { spot: 'Panoramas, Taghazout', sport: 'Surfing', why: 'Sandy bottom, gentle waves, surf schools on-site' },
  { spot: 'Imsouane Bay', sport: 'Surfing', why: 'Longest wave in Africa, gentle and forgiving, longboard paradise' },
  { spot: 'Sidi Kaouki', sport: 'Surfing', why: 'Consistent beach break, uncrowded, relaxed atmosphere' },
  { spot: 'Essaouira beach', sport: 'Surfing', why: 'Small, crumbly waves, multiple schools, sheltered in light wind' },
  { spot: 'Dakhla Lagoon', sport: 'Kitesurfing', why: 'Flat water, shallow, consistent wind, top schools' },
  { spot: 'Oualidia Lagoon', sport: 'SUP / Kayak', why: 'Dead-flat lagoon water, sheltered, no currents' },
  { spot: 'Agadir beach', sport: 'SUP / Jet ski', why: 'Sheltered bay, calm waters, rental operators on beach' },
  { spot: 'Saidia', sport: 'Snorkeling', why: 'Calm Mediterranean waters, warm in summer, clear visibility' },
];

const advancedSpots = [
  { spot: 'Anchor Point', sport: 'Surfing', why: 'World-class point break, powerful, long rides, competitive lineup' },
  { spot: 'Killer Point', sport: 'Surfing', why: 'Heavy, shallow reef break, big swell only, expert paddle-out' },
  { spot: 'Boilers', sport: 'Surfing', why: 'Slab-style barrel, extremely shallow, big-wave experience needed' },
  { spot: 'Moulay Bouzerktoune', sport: 'Kitesurfing', why: 'Exposed, powerful shore break, strong gusty winds' },
  { spot: 'Dakhla Speed Spot', sport: 'Kitesurfing', why: 'Ultra-strong winds, speed record attempts, open lagoon' },
  { spot: 'Badis Island', sport: 'Diving', why: 'Deep walls, currents, cave systems, remote location' },
  { spot: 'Ahansal River', sport: 'Rafting', why: 'Class III-IV rapids, remote gorge, spring-only flow' },
  { spot: 'Atlantic open coast', sport: 'Sea kayaking', why: 'Strong currents, swell exposure, demanding conditions' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function WaterSportsPage() {
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
            backgroundImage:
              'url(https://images.unsplash.com/photo-1502680390548-bdbac40cee81?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Water Sports</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Water Sports in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            3,500 kilometers of Atlantic and Mediterranean coastline delivering world-class surfing, kitesurfing, diving, and ocean adventures from the Strait of Gibraltar to the Saharan shores of Dakhla.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#surfing" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors">
              <Waves className="w-4 h-4" />
              Surfing Guide
            </a>
            <a href="#kitesurfing" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Wind className="w-4 h-4" />
              Kitesurfing
            </a>
            <a href="#diving" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
              <Droplets className="w-4 h-4" />
              Diving
            </a>
            <a href="#more-sports" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
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
              A Coastline Built for Adventure
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s position at the northwestern corner of Africa, where the Atlantic Ocean meets the Mediterranean Sea, creates one of the most diverse water sports playgrounds on Earth. The Atlantic coast, stretching over 2,900 km from Tangier to the southern border, delivers consistent swells generated by North Atlantic storm systems, powerful trade winds, and a coastline varied enough to shelter everything from gentle longboard waves to thundering reef breaks.
              </p>
              <p>
                The Mediterranean coast, running 500 km from the Strait of Gibraltar to the Algerian border, offers a completely different character: calmer, warmer water with exceptional clarity, making it Morocco&apos;s premier destination for diving, snorkeling, and summer swimming. Between these two coasts, Morocco caters to every water sport imaginable, from the world-class kite lagoon at Dakhla to the seasonal white water of Atlas Mountain rivers.
              </p>
              <p>
                What makes Morocco exceptional is not just the conditions but the value. A surf trip here costs a fraction of what you would pay in Hawaii, Australia, or even Portugal. Board rental runs 100-200 MAD (10-20 EUR) per day, a week-long surf camp with accommodation and meals starts at 3,000 MAD (300 EUR), and even high-end kite resorts in Dakhla are half the price of equivalents in Mauritius or the Caribbean. Add warm North African hospitality, tagine dinners, and mint tea on the terrace, and you have the complete package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coastline Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Waves, value: '3,500 km', label: 'Total Coastline' },
              { icon: Wind, value: '300+', label: 'Wind Days / Year (Dakhla)' },
              { icon: Compass, value: '2 Coasts', label: 'Atlantic & Mediterranean' },
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

      {/* ── Surfing Deep Guide ── */}
      <section id="surfing" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Surfing in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the legendary point breaks of Taghazout to the longest wave in Africa at Imsouane, Morocco is one of the world&apos;s great surf destinations.
            </p>
          </div>

          {/* Taghazout Deep Dive */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="relative h-72 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1455729552457-5c322b47ff7e?q=80&w=1200"
                alt="Surfer riding a wave at Taghazout, Morocco's surf capital"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="tag tag-primary mb-2 inline-block">Morocco&apos;s Surf Capital</span>
                <h3 className="text-3xl font-bold text-white mb-2">Taghazout</h3>
                <p className="text-white/80 max-w-xl">
                  A former fishing village transformed into a world-class surf hub, with more quality breaks per kilometer than almost anywhere on Earth.
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                    The Breaks
                  </h4>
                  <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
                    <p>
                      The 30-kilometer stretch between Taghazout and Tamraght contains a remarkable concentration of world-class waves. Anchor Point, just north of the village, is the headliner: a long, fast, mechanical right-hand point break that peels for up to 300 meters over a boulder reef. It needs a solid northwest swell to fire, and when it does, it draws surfers from around the globe.
                    </p>
                    <p>
                      North of Anchor Point lies Killer Point, a heavy, powerful right that needs even bigger swell to break. Beyond that, Boilers is Taghazout&apos;s heaviest wave, a dredging slab that only works on the biggest winter swells. For less experienced surfers, Panoramas and Hash Point offer friendlier waves closer to the village.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                    Seasons & Conditions
                  </h4>
                  <div className="space-y-4">
                    {[
                      { period: 'Oct - Dec', label: 'Early Season', desc: 'First swells arrive. Water still warm (20C). Fewer crowds. Great for intermediate surfers as swell builds gradually.' },
                      { period: 'Jan - Mar', label: 'Peak Season', desc: 'Biggest, most consistent swells. Cooler water (16-17C). Most crowded. World-class conditions at all breaks.' },
                      { period: 'Apr - Jun', label: 'Late Season', desc: 'Swell decreasing but still surfable. Warmer weather and water. Great for beginners at mellow spots.' },
                      { period: 'Jul - Sep', label: 'Off-Season', desc: 'Small, inconsistent surf. Good for absolute beginners at beach breaks. Surf camps offer discounts.' },
                    ].map((s) => (
                      <div key={s.period} className="flex gap-3">
                        <div className="w-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                        <div>
                          <div className="font-semibold text-[var(--text-primary)] text-sm">{s.period} &mdash; {s.label}</div>
                          <div className="text-sm text-[var(--text-secondary)]">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imsouane Feature */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=800"
                  alt="Long wave at Imsouane bay, longest right-hand wave in Africa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 hidden md:block" />
              </div>
              <div className="p-6 md:p-8">
                <span className="tag tag-accent mb-3 inline-block">Longest Wave in Africa</span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Imsouane</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Tucked into a sheltered bay between Essaouira and Agadir, Imsouane is home to what is considered the longest right-hand wave in Africa. On a good swell, rides of 600 meters or more are possible as the wave wraps endlessly around the bay. The wave is gentle and forgiving, making it a longboarder&apos;s paradise. The tiny fishing village remains beautifully uncommercialized, with fresh sardines grilled at the port each evening.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { label: 'Wave Length', value: '600m+' },
                    { label: 'Best Season', value: 'Sep - Apr' },
                    { label: 'Level', value: 'All levels' },
                    { label: 'Vibe', value: 'Longboard soul' },
                  ].map((item) => (
                    <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                      <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                      <div className="font-semibold text-[var(--text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Getting there:</span>{' '}
                  95 km south of Essaouira, 85 km north of Taghazout. A scenic coastal drive through argan forests, with a stop at a women&apos;s argan oil cooperative along the way.
                </p>
              </div>
            </div>
          </div>

          {/* Sidi Kaouki Feature */}
          <div className="card-moroccan p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <span className="tag tag-secondary mb-3 inline-block">The Uncrowded Alternative</span>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Sidi Kaouki</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Twenty-five kilometers south of Essaouira, Sidi Kaouki offers what Taghazout had 15 years ago: consistent waves, a laid-back village atmosphere, and far fewer people in the water. The beach break here works on most tide states and picks up swell from multiple directions. The vibe is mystical and off-grid, centered around a whitewashed marabout (saint&apos;s tomb) on the bluff. Several small surf camps and guesthouses offer great value accommodation, and camel rides along the beach at sunset have become an iconic experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Consistent beach break', 'Uncrowded waves', 'Budget-friendly', 'Camel sunset rides', 'Yoga retreats', 'Off-grid atmosphere'].map((tag) => (
                    <span key={tag} className="text-[11px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Wave Type', value: 'Beach break' },
                  { label: 'Best Swell', value: 'NW - W, 3-6 ft' },
                  { label: 'Season', value: 'Sep - Apr' },
                  { label: 'Level', value: 'Beginner - Intermediate' },
                  { label: 'Accommodation', value: 'From 200 MAD/night' },
                ].map((item) => (
                  <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-3">
                    <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Surf Spots Grid */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            All Surf Breaks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {surfSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">{spot.name}</h4>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {spot.location}
                    </p>
                  </div>
                  <span className="tag tag-primary text-[10px]">{spot.level}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{spot.description}</p>
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Wave</div>
                    <div className="font-semibold text-[var(--text-primary)]">{spot.waveType.split(' ')[0]}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Swell</div>
                    <div className="font-semibold text-[var(--text-primary)]">{spot.bestSwell.split(',')[0]}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Season</div>
                    <div className="font-semibold text-[var(--text-primary)]">{spot.season.split('(')[0].trim()}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {spot.highlights.map((h) => (
                    <span key={h} className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-2.5 h-2.5" /> {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Surf Schools & Practical Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-[var(--color-accent)]" />
                Surf Schools
              </h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Morocco has hundreds of surf schools, especially in the Taghazout area and Essaouira. Expect to pay:</p>
                <ul className="space-y-1.5">
                  {[
                    '2-hour group lesson: 250-400 MAD',
                    'Private lesson: 500-800 MAD',
                    'Week surf camp (all-in): 3,000-6,000 MAD',
                    'Board rental (day): 100-200 MAD',
                    'Wetsuit rental (day): 50-100 MAD',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-[var(--color-accent)]" />
                What to Bring
              </h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Morocco&apos;s water temperature ranges from 16C in winter to 22C in summer. Pack accordingly:</p>
                <ul className="space-y-1.5">
                  {[
                    'Winter (Oct-Mar): 4/3mm full wetsuit',
                    'Summer (Jun-Sep): 2mm shorty or boardshorts',
                    'Spring/Autumn: 3/2mm full suit',
                    'Reef booties for rocky breaks',
                    'Sun protection (zinc, rash guard)',
                    'Ear plugs for cold-water sessions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                Surf Etiquette
              </h4>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Respect in the water ensures everyone has a good session:</p>
                <ul className="space-y-1.5">
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
        </div>
      </section>

      {/* ── Kitesurfing ── */}
      <section id="kitesurfing" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <Wind className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Kitesurfing &amp; Windsurfing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s consistent trade winds and diverse conditions make it one of the world&apos;s top destinations for kite and wind sports, anchored by the legendary Dakhla lagoon.
            </p>
          </div>

          {/* Kite Spots */}
          <div className="space-y-8 mb-10">
            {kiteSpots.map((spot, index) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className={`grid md:grid-cols-5 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{spot.name}</h3>
                        <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
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

          {/* Wind Conditions Guide */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-[var(--color-primary)]" />
              Wind Conditions by Season
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">Dakhla</h4>
                <div className="space-y-3">
                  {[
                    { months: 'Mar - May', wind: '18-25 knots', reliability: '80%', notes: 'Season building. Warmer air, pleasant conditions. Good for beginners starting out.' },
                    { months: 'Jun - Aug', wind: '22-30 knots', reliability: '95%', notes: 'Peak wind season. Strongest, most consistent. Speed spot fires. Can be too strong for beginners.' },
                    { months: 'Sep - Nov', wind: '18-25 knots', reliability: '75%', notes: 'Season winding down. Still very reliable. Warmer water. Excellent overall conditions.' },
                    { months: 'Dec - Feb', wind: '10-18 knots', reliability: '40%', notes: 'Off-season. Lighter winds, some good days. Fewer crowds, lower prices.' },
                  ].map((s) => (
                    <div key={s.months} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm text-[var(--text-primary)]">{s.months}</span>
                        <span className="text-xs text-[var(--color-primary)] font-medium">{s.reliability} reliability</span>
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">Wind: {s.wind}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{s.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">Essaouira</h4>
                <div className="space-y-3">
                  {[
                    { months: 'Apr - May', wind: '15-22 knots', reliability: '70%', notes: 'Trade winds starting. Afternoon thermal effect. Good for intermediate riders building confidence.' },
                    { months: 'Jun - Aug', wind: '18-28 knots', reliability: '90%', notes: 'Peak season. Strong, gusty Alizee winds. Can be powerful and challenging. Best for experienced riders.' },
                    { months: 'Sep - Oct', wind: '14-20 knots', reliability: '60%', notes: 'Winds easing. Warmer water. More pleasant all-round conditions. Good for all levels.' },
                    { months: 'Nov - Mar', wind: '8-15 knots', reliability: '30%', notes: 'Off-season. Occasional windy days, but unreliable. Best for surfing instead.' },
                  ].map((s) => (
                    <div key={s.months} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm text-[var(--text-primary)]">{s.months}</span>
                        <span className="text-xs text-[var(--color-primary)] font-medium">{s.reliability} reliability</span>
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">Wind: {s.wind}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{s.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kite Pricing */}
          <div className="card-moroccan p-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" />
              Kitesurfing &amp; Windsurfing Costs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { item: 'Group kite lesson (3h)', price: '500-800 MAD' },
                { item: 'Private kite lesson (2h)', price: '800-1,200 MAD' },
                { item: 'Full kite course (9-12h)', price: '3,500-5,000 MAD' },
                { item: 'Equipment rental (day)', price: '500-800 MAD' },
                { item: 'Windsurf lesson (2h)', price: '400-600 MAD' },
                { item: 'Windsurf rental (day)', price: '400-600 MAD' },
                { item: 'Week kite package (all-in)', price: '8,000-15,000 MAD' },
                { item: 'Storage per day', price: '50-100 MAD' },
              ].map((p) => (
                <div key={p.item} className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <div className="text-xs text-[var(--text-muted)] mb-1">{p.item}</div>
                  <div className="font-bold text-[var(--color-primary)]">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Diving & Snorkeling ── */}
      <section id="diving" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-accent-dark)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Diving &amp; Snorkeling
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s underwater world is an emerging frontier. The Mediterranean coast offers the best visibility and marine biodiversity, while the Atlantic provides atmospheric wreck and reef diving.
            </p>
          </div>

          {/* Dive Sites */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {diveSites.map((site) => (
              <div key={site.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{site.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {site.location}
                    </p>
                  </div>
                  <span className={`tag text-[10px] ${site.coast === 'Mediterranean' ? 'tag-primary' : 'tag-secondary'}`}>
                    {site.coast}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{site.description}</p>
                <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Depth</div>
                    <div className="font-semibold text-[var(--text-primary)]">{site.depth}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Visibility</div>
                    <div className="font-semibold text-[var(--text-primary)]">{site.visibility}</div>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2 text-center">
                    <div className="text-[var(--text-muted)] mb-0.5">Level</div>
                    <div className="font-semibold text-[var(--text-primary)]">{site.level.split(' ')[0]}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {site.marineLife.map((species) => (
                    <span key={species} className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full">
                      {species}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PADI Centers & Dive Practicalities */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-primary)]" />
                PADI Dive Centers
              </h3>
              <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                <p>Morocco has a growing number of PADI and SSI certified dive centers, concentrated in Al Hoceima and Agadir.</p>
                <div className="space-y-3">
                  {[
                    { center: 'Club de Plongee Al Hoceima', location: 'Al Hoceima', specialty: 'Mediterranean reef & cave diving' },
                    { center: 'Aqua Diving Morocco', location: 'Agadir', specialty: 'Atlantic wreck & reef diving' },
                    { center: 'Essaouira Diving', location: 'Essaouira', specialty: 'Atlantic reef & island diving' },
                    { center: 'Saidia Dive Center', location: 'Saidia', specialty: 'Mediterranean recreational diving' },
                  ].map((c) => (
                    <div key={c.center} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="font-semibold text-[var(--text-primary)]">{c.center}</div>
                      <div className="text-xs text-[var(--text-muted)]">{c.location} &mdash; {c.specialty}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                Diving Costs
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>Diving in Morocco is affordable compared to most global destinations:</p>
                <ul className="space-y-2">
                  {[
                    { item: 'Discovery dive (first time)', price: '400-600 MAD' },
                    { item: 'Single fun dive (certified)', price: '300-500 MAD' },
                    { item: 'PADI Open Water course', price: '3,000-4,500 MAD' },
                    { item: 'PADI Advanced Open Water', price: '2,500-3,500 MAD' },
                    { item: '10-dive package', price: '2,500-4,000 MAD' },
                    { item: 'Equipment rental (full set)', price: '200-350 MAD/dive' },
                    { item: 'Snorkel gear rental (day)', price: '50-100 MAD' },
                  ].map((p) => (
                    <li key={p.item} className="flex justify-between items-center">
                      <span>{p.item}</span>
                      <span className="font-semibold text-[var(--color-primary)] ml-2">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Water Sports ── */}
      <section id="more-sports" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Anchor className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              More Water Activities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond surfing, kitesurfing, and diving, Morocco&apos;s coast and rivers offer a full spectrum of water-based adventures for every taste and ability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherWaterSports.map((sport) => (
              <div key={sport.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                    <sport.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{sport.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-[10px] bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-0.5 rounded-full font-medium">{sport.level}</span>
                      <span className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full">{sport.season}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{sport.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {sport.bestLocations.map((loc) => (
                    <span key={loc} className="text-[10px] bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" /> {loc}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-semibold text-[var(--color-primary)]">
                  {sport.priceRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment Rental Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-accent-dark)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Equipment Rental Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has well-developed rental infrastructure in all major water sports hubs. Here is what to expect for pricing and availability.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Equipment</th>
                    <th className="px-4 py-3 text-left font-semibold">Price Range</th>
                    <th className="px-4 py-3 text-left font-semibold">Best Locations</th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentRental.map((item, i) => (
                    <tr key={item.item} className={i % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}>
                      <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{item.item}</td>
                      <td className="px-4 py-3 text-[var(--color-primary)] font-semibold">{item.price}</td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">{item.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-moroccan p-6 mt-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
              Rental Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              <ul className="space-y-2">
                {[
                  'Inspect equipment before renting, especially wetsuits (check for tears) and boards (check for dings and soft spots)',
                  'Negotiate for multi-day or weekly rates, which are significantly cheaper than daily rental',
                  'Bring your own wetsuit if you are particular about fit and hygiene; boards are fine to rent',
                  'Leave a deposit (passport copy or cash) and get a receipt in return',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  'For kitesurfing, only rent from certified centers that check your skill level and provide safety briefings',
                  'Surf schools usually include board and wetsuit rental in their lesson price',
                  'In remote areas like Dakhla, book equipment in advance during peak season (June-August)',
                  'Most equipment can also be bought second-hand in Taghazout and Essaouira from departing travelers',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-3 h-3 text-[var(--color-primary)] mt-1 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Water Temperature by Season ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Thermometer className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Water Temperature by Season &amp; Coast
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s water temperatures vary significantly between the cooler Atlantic (influenced by the Canary Current) and the warmer Mediterranean. Knowing what to expect helps you pack the right wetsuit.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Region</th>
                    <th className="px-4 py-3 text-center font-semibold">Jan (C)</th>
                    <th className="px-4 py-3 text-center font-semibold">Apr (C)</th>
                    <th className="px-4 py-3 text-center font-semibold">Jul (C)</th>
                    <th className="px-4 py-3 text-center font-semibold">Oct (C)</th>
                    <th className="px-4 py-3 text-left font-semibold">Winter Wetsuit</th>
                    <th className="px-4 py-3 text-left font-semibold">Summer Wetsuit</th>
                  </tr>
                </thead>
                <tbody>
                  {waterTemps.map((t, i) => (
                    <tr key={t.region} className={i % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}>
                      <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{t.region}</td>
                      <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{t.jan}</td>
                      <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{t.apr}</td>
                      <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{t.jul}</td>
                      <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{t.oct}</td>
                      <td className="px-4 py-3 text-[var(--color-primary)] font-medium">{t.wetsuitWinter}</td>
                      <td className="px-4 py-3 text-[var(--color-primary)] font-medium">{t.wetsuitSummer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-[var(--color-primary)]" />
              Key Temperature Notes
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              <div className="space-y-2">
                <p><span className="font-semibold text-[var(--text-primary)]">Canary Current Effect:</span> The cold Canary Current flows south along Morocco&apos;s Atlantic coast, keeping water temperatures 3-5C cooler than equivalent latitudes on the Mediterranean. This is why Agadir at 30N is cooler than Saidia at 35N.</p>
                <p><span className="font-semibold text-[var(--text-primary)]">Upwelling Zones:</span> Cold water upwelling near Essaouira and the central coast can cause sudden temperature drops of 2-3C, especially in spring. This same upwelling brings nutrient-rich water that supports abundant marine life.</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold text-[var(--text-primary)]">Dakhla Exception:</span> Despite being on the Atlantic, Dakhla&apos;s lagoon is noticeably warmer than open ocean temperatures due to the shallow, sun-warmed water. Lagoon temperatures can reach 23-25C in summer, 3-4C warmer than the open Atlantic nearby.</p>
                <p><span className="font-semibold text-[var(--text-primary)]">Mediterranean Peak:</span> The Mediterranean coast reaches its warmest in August-September (24-25C in Al Hoceima). Swimming without a wetsuit is comfortable from June to October. The Mediterranean cools rapidly in November.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beginner vs Advanced ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Spots: Beginners vs Advanced
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has world-class conditions for every level. Choosing the right spot for your ability makes all the difference between an incredible experience and a frustrating (or dangerous) one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Beginner */}
            <div className="card-moroccan overflow-hidden">
              <div className="bg-green-700 px-6 py-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Best for Beginners
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {beginnerSpots.map((s) => (
                    <div key={s.spot} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-sm text-[var(--text-primary)]">{s.spot}</div>
                        <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{s.sport}</span>
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] mt-1">{s.why}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Advanced */}
            <div className="card-moroccan overflow-hidden">
              <div className="bg-red-700 px-6 py-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Best for Advanced
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {advancedSpots.map((s) => (
                    <div key={s.spot} className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-sm text-[var(--text-primary)]">{s.spot}</div>
                        <span className="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full">{s.sport}</span>
                      </div>
                      <div className="text-xs text-[var(--text-secondary)] mt-1">{s.why}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety & Currents ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-red-500/10 mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety &amp; Currents Awareness
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s Atlantic coast in particular demands respect. Understanding local conditions is essential for a safe water sports experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Rip Currents',
                icon: Waves,
                tips: [
                  'Atlantic beaches often have powerful rip currents that can pull even strong swimmers out to sea',
                  'If caught in a rip, swim parallel to the shore, never against the current',
                  'Look for channels of darker, calmer water between breaking waves as these indicate rips',
                  'Rip currents are strongest at low tide and during large swells',
                  'Mediterranean beaches are generally much calmer and safer',
                ],
              },
              {
                title: 'Reef & Rock Hazards',
                icon: AlertTriangle,
                tips: [
                  'Many surf breaks are over sharp volcanic or limestone reef with shallow sections',
                  'Wear reef booties at rocky breaks like Anchor Point and Boilers',
                  'Know the reef layout before surfing an unfamiliar break, and ask locals about hazards',
                  'Sea urchins are common on Mediterranean rocks; water shoes are recommended',
                  'Falling on reef can cause deep cuts that need immediate cleaning to prevent infection',
                ],
              },
              {
                title: 'Wind Safety for Kiters',
                icon: Wind,
                tips: [
                  'Always check wind forecasts and kite within your ability level',
                  'In Essaouira, gusty onshore winds can overpower beginners quickly',
                  'Never kite in offshore wind conditions on the Atlantic (risk of being blown out to sea)',
                  'Always use a safety leash and know your quick-release systems',
                  'Kite with others present, never alone in remote areas',
                ],
              },
              {
                title: 'Dive Safety',
                icon: Droplets,
                tips: [
                  'Only dive with PADI/SSI certified operators who maintain equipment properly',
                  'Morocco has limited hyperbaric chamber access; nearest are in Casablanca and Tangier',
                  'Atlantic dive visibility can be poor (under 5m); be prepared for low-visibility navigation',
                  'Check current conditions before diving, especially around Badis Island and exposed Atlantic sites',
                  'Carry a surface marker buoy on all open-water dives',
                ],
              },
              {
                title: 'Sun & Dehydration',
                icon: Sun,
                tips: [
                  'Morocco has intense UV, especially June-September (UV index 9-11)',
                  'Water sports amplify sun exposure through reflection; wear SPF 50+ and reapply frequently',
                  'Use zinc-based sunblock for face, as it stays on in the water better than chemical screens',
                  'Carry water on the beach and hydrate between sessions; wind masks the feeling of dehydration',
                  'Wear a rash guard or long-sleeve lycra for extended water sessions',
                ],
              },
              {
                title: 'Emergency Contacts',
                icon: PhoneCall,
                tips: [
                  'Emergency number: 150 (civil protection / SAMU) or 19 (police)',
                  'Lifeguards are present at major beaches June-September only',
                  'Carry a charged phone in a waterproof pouch when doing any water activity',
                  'Inform someone of your plans when visiting remote spots',
                  'Travel insurance covering water sports and medical evacuation is strongly recommended',
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

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quick Reference
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Best water sport for complete beginners?',
                a: 'Stand-up paddleboarding (SUP) on the flat lagoons of Oualidia or Dakhla is the easiest entry point. For surfing, Imsouane Bay offers the gentlest, longest wave in Africa, perfect for first-timers. For kitesurfing, Dakhla\'s shallow lagoon with certified schools is the safest place to learn.',
              },
              {
                q: 'Can I combine surfing and kitesurfing in one trip?',
                a: 'Essaouira is the best base for both: surfing when the wind is light (mornings, winter months) and kitesurfing or windsurfing when the trade winds blow (afternoons, April-September). Dakhla also works, with surfing on the ocean side and kitesurfing in the lagoon.',
              },
              {
                q: 'Is Morocco good for diving?',
                a: 'Morocco\'s diving scene is emerging. The Mediterranean coast around Al Hoceima offers the best conditions: clear water (15-30m visibility), underwater caves, and rich marine life. Atlantic diving around Agadir has interesting wrecks but lower visibility. It\'s not on par with the Red Sea, but it\'s affordable, uncrowded, and improving.',
              },
              {
                q: 'Do I need to bring my own equipment?',
                a: 'For surfing, you can easily rent boards and wetsuits everywhere. For kitesurfing, serious riders should bring their own kite, bar, and harness, though rental is available in Dakhla and Essaouira. Dive gear is provided by all centers. For specialized water sports (SUP touring, sea kayaking), bringing your own may be necessary outside main towns.',
              },
              {
                q: 'What is the best time of year for water sports in Morocco?',
                a: 'It depends on the sport. Surfing: October-March for the best waves. Kitesurfing: March-November at Dakhla, April-September at Essaouira. Diving: June-September for best Mediterranean visibility. SUP/Kayaking: April-October for calm, warm conditions. White water rafting: March-May only.',
              },
              {
                q: 'How safe is the Atlantic coast for swimming?',
                a: 'The open Atlantic coast can be dangerous for swimmers due to strong currents and powerful shore break. Swim at lifeguarded beaches (Agadir, Saidia) or sheltered lagoons (Oualidia, Dakhla). The Mediterranean coast is significantly calmer and safer for recreational swimming from June to September.',
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Water Sports Adventure
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Combine wave-riding with city exploration, desert excursions, and mountain adventures. Morocco&apos;s compact geography makes it easy to surf in the morning and explore a medina by afternoon.
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
              href="/climbing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" />
              Rock Climbing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
