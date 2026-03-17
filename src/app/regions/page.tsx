import type { Metadata } from 'next';
import Link from 'next/link';
import { regions, cities } from '@/lib/data';
import { generateStructuredData } from '@/lib/utils';
import {
  ChevronRight,
  Home,
  MapPin,
  Mountain,
  Star,
  Map,
  ArrowRight,
  Compass,
  Building2,
  Landmark,
  Thermometer,
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  CalendarDays,
  Globe,
  Users,
  TreePine,
  Waves,
  Tent,
} from 'lucide-react';

/* ─── SEO Metadata ─── */

export const metadata: Metadata = {
  title: 'Regions of Morocco | All 12 Regions with Maps, Climate & Attractions | CityGuide',
  description:
    'Explore all 12 regions of Morocco grouped by geography. Interactive map, climate data, best times to visit, key cities, and top attractions for Marrakech-Safi, Fes-Meknes, Draa-Tafilalet, and every region in the kingdom.',
  keywords: [
    'morocco regions',
    'regions of morocco',
    'morocco map',
    'marrakech-safi region',
    'fes-meknes region',
    'draa-tafilalet',
    'tangier-tetouan',
    'souss-massa',
    'morocco climate',
    'morocco geography',
    'morocco travel regions',
    'morocco administrative regions',
    'northern morocco',
    'southern morocco',
    'sahara morocco',
    'atlas mountains region',
  ],
  openGraph: {
    title: 'Regions of Morocco | All 12 Regions with Maps & Climate | CityGuide',
    description:
      'Discover Morocco through its 12 diverse regions. Interactive map, imperial cities, Sahara desert, Atlas mountains, Mediterranean coast, climate guides, and more.',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 2800,
        height: 1600,
        alt: "Morocco's diverse regions and landscapes",
      },
    ],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/regions',
  },
};

/* ─── Structured Data ─── */

const itemListSchema = generateStructuredData('ItemList', {
  name: 'Regions of Morocco',
  description: "Complete directory of Morocco's 12 administrative regions for tourists and travelers.",
  numberOfItems: regions.length,
  itemListElement: regions.map((region, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Place',
      name: region.name,
      url: `https://citytoursmorocco.com/regions/${region.slug}`,
      description: region.description,
    },
  })),
});

const breadcrumbSchema = generateStructuredData('BreadcrumbList', {
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
    { '@type': 'ListItem', position: 2, name: 'Regions', item: 'https://citytoursmorocco.com/regions' },
  ],
});

/* ─── Region Extended Data ─── */

type GeographicZone = 'North' | 'Central' | 'South' | 'Sahara';

interface RegionCardData {
  id: string;
  name: string;
  slug: string;
  description: string;
  capital: string;
  cityCount: number;
  image: string;
  longDescription: string;
  highlights: string[];
  keyCities: string[];
  zone: GeographicZone;
  climate: {
    type: string;
    summerHigh: string;
    winterLow: string;
    rainfall: string;
    icon: 'sun' | 'rain' | 'snow' | 'wind';
  };
  bestTime: string;
  topAttractions: string[];
  area: string;
  population: string;
}

const regionDetails: RegionCardData[] = [
  /* ─── NORTH ─── */
  {
    id: 'r3',
    name: 'Tanger-Tetouan-Al Hoceima',
    slug: 'tanger-tetouan',
    description: 'Where Africa meets Europe at the Strait of Gibraltar',
    capital: 'Tangier',
    cityCount: 5,
    image: '/images/hero-essaouira.webp',
    longDescription:
      'The gateway to Africa where the Mediterranean meets the Atlantic, this region offers a dazzling mix of cosmopolitan port cities, blue-washed mountain villages, and pristine Rif Mountain landscapes. Tangier buzzes with artistic energy, Chefchaouen glows in shades of blue, and Al Hoceima offers unspoiled Mediterranean beaches.',
    highlights: ['Chefchaouen Blue City', 'Tangier Kasbah', 'Rif Mountains', 'Cap Spartel'],
    keyCities: ['Tangier', 'Chefchaouen', 'Tetouan', 'Al Hoceima', 'Larache'],
    zone: 'North',
    climate: {
      type: 'Mediterranean',
      summerHigh: '30C',
      winterLow: '8C',
      rainfall: '700mm/year',
      icon: 'rain',
    },
    bestTime: 'April - June, September - October',
    topAttractions: ['Chefchaouen Medina', 'Cape Spartel & Hercules Cave', 'Tangier Kasbah Museum', 'Tetouan UNESCO Medina', 'Rif Mountain Hiking'],
    area: '17,262 km2',
    population: '3.6 million',
  },
  {
    id: 'r12',
    name: 'Oriental',
    slug: 'oriental',
    description: 'Eastern frontier with Mediterranean charm',
    capital: 'Oujda',
    cityCount: 3,
    image: '/images/hero-morocco.webp',
    longDescription:
      "Morocco's easternmost region blends Mediterranean and Saharan influences in a captivating cultural mosaic. The border city of Oujda pulses with Rai music heritage, while the pristine beaches of Saidia -- Morocco's \"Blue Pearl of the Mediterranean\" -- stretch for 14 kilometers. The Beni Snassen mountains and Zegzel gorges offer rewarding exploration off the beaten path.",
    highlights: ['Saidia Beaches', 'Oujda Medina', 'Beni Snassen Mountains', 'Berkane Citrus Groves'],
    keyCities: ['Oujda', 'Nador', 'Berkane', 'Saidia'],
    zone: 'North',
    climate: {
      type: 'Semi-arid Mediterranean',
      summerHigh: '38C',
      winterLow: '4C',
      rainfall: '350mm/year',
      icon: 'sun',
    },
    bestTime: 'March - June, September - November',
    topAttractions: ['Saidia Beach Resort', 'Oujda Medina & Rai Music', 'Zegzel Gorge', 'Beni Snassen Mountains', 'Marchica Lagoon'],
    area: '82,820 km2',
    population: '2.3 million',
  },

  /* ─── CENTRAL ─── */
  {
    id: 'r2',
    name: 'Fes-Meknes',
    slug: 'fes-meknes',
    description: 'Imperial cities and spiritual heartland',
    capital: 'Fes',
    cityCount: 6,
    image: '/images/art-zellige-pattern.webp',
    longDescription:
      "Home to two of Morocco's four imperial cities, this region is the spiritual and intellectual soul of the kingdom. Fes boasts the world's oldest university and its medieval medina is a UNESCO treasure, while Meknes dazzles with its grand Ismaili architecture. Nearby, the Roman ruins of Volubilis whisper of ancient empires.",
    highlights: ['Fes el-Bali Medina', 'Volubilis Ruins', 'Meknes Royal Stables', 'Ifrane Cedar Forests'],
    keyCities: ['Fes', 'Meknes', 'Ifrane', 'Taza', 'Moulay Idriss Zerhoun'],
    zone: 'Central',
    climate: {
      type: 'Continental Mediterranean',
      summerHigh: '36C',
      winterLow: '4C',
      rainfall: '500mm/year',
      icon: 'sun',
    },
    bestTime: 'March - May, September - November',
    topAttractions: ['Fes el-Bali UNESCO Medina', 'Al-Qarawiyyin University', 'Volubilis Roman Ruins', 'Bab Mansour Gate', 'Ifrane National Park'],
    area: '40,075 km2',
    population: '4.2 million',
  },
  {
    id: 'r4',
    name: 'Rabat-Sale-Kenitra',
    slug: 'rabat-sale-kenitra',
    description: 'The political capital and coastal modernity',
    capital: 'Rabat',
    cityCount: 4,
    image: '/images/hero-morocco.webp',
    longDescription:
      "Morocco's political and administrative capital region combines royal grandeur with contemporary culture. Rabat's UNESCO-listed sites, world-class museums, and oceanfront Kasbah des Oudayas make it one of the most refined cities in North Africa. The twin city of Sale preserves centuries of maritime history, while Kenitra anchors the fertile Gharb plain.",
    highlights: ['Hassan Tower', 'Kasbah des Oudayas', 'Mohammed VI Museum', 'Chellah Necropolis'],
    keyCities: ['Rabat', 'Sale', 'Kenitra', 'Temara'],
    zone: 'Central',
    climate: {
      type: 'Oceanic Mediterranean',
      summerHigh: '28C',
      winterLow: '8C',
      rainfall: '550mm/year',
      icon: 'rain',
    },
    bestTime: 'Year-round (mildest climate in Morocco)',
    topAttractions: ['Hassan Tower & Mausoleum', 'Kasbah des Oudayas', 'Chellah Necropolis', 'Mohammed VI Museum of Modern Art', 'Rabat Medina'],
    area: '18,194 km2',
    population: '4.6 million',
  },
  {
    id: 'r5',
    name: 'Casablanca-Settat',
    slug: 'casablanca-settat',
    description: 'Economic powerhouse and cosmopolitan hub',
    capital: 'Casablanca',
    cityCount: 4,
    image: '/images/hero-ait-benhaddou.webp',
    longDescription:
      "Morocco's economic engine and largest metropolitan area, Casablanca is a city of contrasts where Art Deco boulevards meet ancient medina lanes. The awe-inspiring Hassan II Mosque, one of the largest in the world, rises majestically over the Atlantic. The wider region includes the Portuguese-influenced El Jadida and the oyster lagoons of Oualidia.",
    highlights: ['Hassan II Mosque', 'Art Deco District', 'El Jadida Cistern', 'Oualidia Lagoon'],
    keyCities: ['Casablanca', 'El Jadida', 'Settat', 'Mohammedia'],
    zone: 'Central',
    climate: {
      type: 'Oceanic Mediterranean',
      summerHigh: '27C',
      winterLow: '9C',
      rainfall: '400mm/year',
      icon: 'rain',
    },
    bestTime: 'Year-round (temperate Atlantic coast)',
    topAttractions: ['Hassan II Mosque', 'Art Deco Casablanca Walking Tour', 'El Jadida Portuguese Cistern', 'Oualidia Oyster Lagoon', 'Corniche Ain Diab'],
    area: '20,166 km2',
    population: '7.2 million',
  },
  {
    id: 'r1',
    name: 'Marrakech-Safi',
    slug: 'marrakech-safi',
    description: 'Home to the Red City and Atlantic coast gems',
    capital: 'Marrakech',
    cityCount: 7,
    image: '/images/hero-morocco.webp',
    longDescription:
      'The heart of Morocco, where the legendary Red City of Marrakech enchants millions with its labyrinthine souks, majestic palaces, and the unforgettable Jemaa el-Fnaa square. Beyond the city, the region stretches to the Atlantic coast with the windswept charm of Essaouira and the ceramic traditions of Safi.',
    highlights: ['Jemaa el-Fnaa', 'Majorelle Garden', 'Essaouira Medina', 'Atlas Mountains'],
    keyCities: ['Marrakech', 'Essaouira', 'Safi', 'Ouarzazate', 'El Kelaa des Sraghna'],
    zone: 'Central',
    climate: {
      type: 'Semi-arid continental',
      summerHigh: '40C',
      winterLow: '5C',
      rainfall: '250mm/year',
      icon: 'sun',
    },
    bestTime: 'March - May, October - November',
    topAttractions: ['Jemaa el-Fnaa Square', 'Majorelle Garden & YSL Museum', 'Bahia Palace', 'Essaouira Medina & Ramparts', 'Koutoubia Mosque'],
    area: '39,167 km2',
    population: '4.5 million',
  },
  {
    id: 'r6',
    name: 'Beni Mellal-Khenifra',
    slug: 'beni-mellal-khenifra',
    description: 'Fertile plains and Middle Atlas foothills',
    capital: 'Beni Mellal',
    cityCount: 3,
    image: '/images/hero-morocco.webp',
    longDescription:
      "Tucked between the fertile Tadla Plain and the Middle Atlas Mountains, this region is a paradise for nature lovers. The spectacular Ouzoud Falls cascade 110 meters into a canyon filled with Barbary macaques, while Bin El Ouidane Lake offers peaceful retreats. It is Morocco's agricultural heartland with a rugged mountain soul.",
    highlights: ['Ouzoud Falls', 'Bin El Ouidane Lake', 'Kasbah Tadla', 'Middle Atlas Trails'],
    keyCities: ['Beni Mellal', 'Khenifra', 'Azilal', 'Khouribga'],
    zone: 'Central',
    climate: {
      type: 'Continental with altitude variation',
      summerHigh: '38C',
      winterLow: '2C',
      rainfall: '600mm/year',
      icon: 'snow',
    },
    bestTime: 'March - June (waterfalls at peak flow)',
    topAttractions: ['Ouzoud Waterfalls', 'Bin El Ouidane Dam & Lake', 'Ait Bougmez Valley', 'Middle Atlas Cedar Forests', 'Cathedral Rocks'],
    area: '28,374 km2',
    population: '2.5 million',
  },

  /* ─── SOUTH ─── */
  {
    id: 'r7',
    name: 'Draa-Tafilalet',
    slug: 'draa-tafilalet',
    description: 'Gateway to the Sahara with ancient kasbahs',
    capital: 'Errachidia',
    cityCount: 6,
    image: '/images/hero-coastal.webp',
    longDescription:
      'The largest region in Morocco and the gateway to the Sahara Desert, Draa-Tafilalet is a land of epic landscapes. From the towering dunes of Erg Chebbi at Merzouga to the dramatic Todra and Dades Gorges, from the Hollywood backdrop of Ouarzazate to the lush Draa Valley oases -- this region is pure adventure.',
    highlights: ['Erg Chebbi Dunes', 'Todra Gorge', 'Ait Benhaddou Kasbah', 'Zagora Desert Camps'],
    keyCities: ['Ouarzazate', 'Errachidia', 'Merzouga', 'Tinghir', 'Zagora', 'Rissani'],
    zone: 'South',
    climate: {
      type: 'Saharan desert',
      summerHigh: '45C',
      winterLow: '0C',
      rainfall: '100mm/year',
      icon: 'sun',
    },
    bestTime: 'October - April (avoid extreme summer heat)',
    topAttractions: ['Erg Chebbi Sand Dunes', 'Todra Gorge', 'Ait Benhaddou UNESCO Kasbah', 'Dades Valley Road of 1000 Kasbahs', 'Draa Valley Palm Groves'],
    area: '88,836 km2',
    population: '1.6 million',
  },
  {
    id: 'r8',
    name: 'Souss-Massa',
    slug: 'souss-massa',
    description: 'Sun-soaked beaches and Amazigh heritage',
    capital: 'Agadir',
    cityCount: 4,
    image: '/images/art-moroccan-doorway.webp',
    longDescription:
      "Sun-drenched Souss-Massa is Morocco's premier beach destination, anchored by Agadir's golden sands and surf-friendly Taghazout. The region is the heart of argan country, where ancient Amazigh traditions thrive in the Anti-Atlas foothills. The walled city of Taroudant, often called \"Little Marrakech,\" offers authentic souks without the crowds.",
    highlights: ['Agadir Beach', 'Taghazout Surfing', 'Taroudant Walls', 'Souss-Massa National Park'],
    keyCities: ['Agadir', 'Taroudant', 'Tiznit', 'Taghazout'],
    zone: 'South',
    climate: {
      type: 'Semi-arid oceanic',
      summerHigh: '32C',
      winterLow: '10C',
      rainfall: '250mm/year',
      icon: 'sun',
    },
    bestTime: 'Year-round (300+ days of sunshine)',
    topAttractions: ['Agadir Beach & Marina', 'Taghazout Surf Breaks', 'Paradise Valley', 'Taroudant Medina & Ramparts', 'Souss-Massa National Park'],
    area: '53,789 km2',
    population: '2.7 million',
  },
  {
    id: 'r9',
    name: 'Guelmim-Oued Noun',
    slug: 'guelmim-oued-noun',
    description: 'Desert edge oasis towns and camel markets',
    capital: 'Guelmim',
    cityCount: 2,
    image: '/images/hero-sahara-night.webp',
    longDescription:
      "Known as the \"Gateway to the Sahara,\" Guelmim-Oued Noun marks the transition from settled Morocco to the vast desert south. Guelmim's famous camel market (souk of camels) has drawn traders for centuries. The coastal town of Sidi Ifni, a former Spanish enclave, offers dramatic cliffs and Art Deco architecture perched above the Atlantic.",
    highlights: ['Guelmim Camel Market', 'Sidi Ifni Coast', 'Plage Blanche', 'Amtoudi Granary'],
    keyCities: ['Guelmim', 'Sidi Ifni', 'Tan-Tan'],
    zone: 'South',
    climate: {
      type: 'Pre-Saharan arid',
      summerHigh: '42C',
      winterLow: '6C',
      rainfall: '120mm/year',
      icon: 'sun',
    },
    bestTime: 'October - March',
    topAttractions: ['Guelmim Saturday Camel Souk', 'Sidi Ifni Art Deco Town', 'Plage Blanche (40km beach)', 'Amtoudi Fortified Granary', 'Legzira Beach Arches'],
    area: '46,108 km2',
    population: '430,000',
  },

  /* ─── SAHARA ─── */
  {
    id: 'r10',
    name: 'Laayoune-Sakia El Hamra',
    slug: 'laayoune-sakia',
    description: 'Southern gateway to the Saharan provinces',
    capital: 'Laayoune',
    cityCount: 1,
    image: '/images/hero-desert.webp',
    longDescription:
      "The gateway to Morocco's southern provinces, where the Sahara meets the Atlantic in a landscape of austere beauty. Laayoune, the regional capital, is a modern city with wide boulevards and a growing cultural scene. The Atlantic coastline here is wild and untouched, offering extraordinary birdwatching and some of the best fishing in Africa.",
    highlights: ['Naila Lagoon', 'Atlantic Coast Fishing', 'Laayoune Cathedral', 'Desert Landscapes'],
    keyCities: ['Laayoune', 'Tarfaya', 'Es-Semara'],
    zone: 'Sahara',
    climate: {
      type: 'Hot desert (coastal moderated)',
      summerHigh: '35C',
      winterLow: '12C',
      rainfall: '50mm/year',
      icon: 'wind',
    },
    bestTime: 'November - February',
    topAttractions: ['Naila Lagoon Birdwatching', 'Atlantic Fishing Expeditions', 'Laayoune Grand Mosque', 'Tarfaya Saint-Exupery Museum', 'Desert Camping'],
    area: '139,480 km2',
    population: '370,000',
  },
  {
    id: 'r11',
    name: 'Dakhla-Oued Ed-Dahab',
    slug: 'dakhla-oued-ed-dahab',
    description: 'World-class kitesurfing and desert-meets-ocean',
    capital: 'Dakhla',
    cityCount: 1,
    image: '/images/hero-morocco.webp',
    longDescription:
      "At Morocco's southern tip, where the Sahara Desert plunges into the Atlantic Ocean, Dakhla is an emerging paradise for kitesurfers, windsurfers, and adventure seekers. The peninsula juts into a vast lagoon of turquoise waters perfect for watersports, while the surrounding desert offers unforgettable overnight camping under star-filled skies.",
    highlights: ['Dakhla Lagoon', 'Kitesurfing', 'White Dune', 'Desert-Ocean Camps'],
    keyCities: ['Dakhla', 'Bir Gandouz'],
    zone: 'Sahara',
    climate: {
      type: 'Coastal desert',
      summerHigh: '30C',
      winterLow: '14C',
      rainfall: '30mm/year',
      icon: 'wind',
    },
    bestTime: 'Year-round (best wind: March - September)',
    topAttractions: ['Dakhla Lagoon Kitesurfing', 'White Dune Experience', 'Desert-Ocean Camping', 'Oyster Farming Tours', 'Atlantic Fishing'],
    area: '50,880 km2',
    population: '170,000',
  },
];

/* ─── Zone Configuration ─── */

interface ZoneConfig {
  label: string;
  description: string;
  color: string;
  icon: typeof Mountain;
}

const zoneConfig: Record<GeographicZone, ZoneConfig> = {
  North: {
    label: 'Northern Morocco',
    description: 'Mediterranean coast, Rif Mountains, and the gateway to Europe. Lush landscapes, Spanish-Moorish influences, and vibrant port cities.',
    color: '#2563eb',
    icon: Waves,
  },
  Central: {
    label: 'Central Morocco',
    description: 'Imperial cities, fertile plains, Atlas foothills, and the economic heartland. The cultural core of the kingdom with ancient medinas and modern metropolises.',
    color: '#A0522D',
    icon: Landmark,
  },
  South: {
    label: 'Southern Morocco',
    description: 'Saharan gateway, desert kasbahs, palm oases, and sun-drenched Atlantic beaches. The land of Amazigh heritage and adventure.',
    color: '#C4960C',
    icon: Tent,
  },
  Sahara: {
    label: 'Saharan Provinces',
    description: 'Where the desert meets the Atlantic. Vast open spaces, world-class watersports, frontier towns, and landscapes of raw, austere beauty.',
    color: '#dc6b19',
    icon: Wind,
  },
};

const zoneOrder: GeographicZone[] = ['North', 'Central', 'South', 'Sahara'];

function getClimateIcon(icon: string) {
  switch (icon) {
    case 'sun':
      return Sun;
    case 'rain':
      return CloudRain;
    case 'snow':
      return Snowflake;
    case 'wind':
      return Wind;
    default:
      return Sun;
  }
}

/* ─── SVG Map Component ─── */

function MoroccoRegionMap() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <svg
        viewBox="0 0 600 700"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Map of Morocco showing all 12 administrative regions"
      >
        {/* Background */}
        <rect width="600" height="700" fill="none" />

        {/* Atlantic Ocean label */}
        <text x="40" y="320" fill="#94a3b8" fontSize="11" fontStyle="italic" transform="rotate(-90, 40, 320)">Atlantic Ocean</text>

        {/* Mediterranean label */}
        <text x="280" y="32" fill="#94a3b8" fontSize="11" fontStyle="italic">Mediterranean Sea</text>

        {/* ─── NORTH ─── */}

        {/* Tanger-Tetouan-Al Hoceima */}
        <g className="region-map-path" data-region="tanger-tetouan">
          <path
            d="M180,45 L260,40 L340,50 L370,70 L350,100 L300,115 L240,110 L190,95 L170,70 Z"
            fill="#2563eb"
            fillOpacity="0.15"
            stroke="#2563eb"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="250" cy="70" r="3" fill="#2563eb" />
          <text x="250" y="88" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Tanger-Tetouan</text>
          <text x="250" y="100" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Al Hoceima</text>
        </g>

        {/* Oriental */}
        <g className="region-map-path" data-region="oriental">
          <path
            d="M370,70 L470,55 L530,80 L540,140 L520,200 L480,240 L430,230 L390,190 L360,140 L350,100 Z"
            fill="#2563eb"
            fillOpacity="0.15"
            stroke="#2563eb"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="460" cy="140" r="3" fill="#2563eb" />
          <text x="460" y="158" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Oriental</text>
        </g>

        {/* ─── CENTRAL ─── */}

        {/* Rabat-Sale-Kenitra */}
        <g className="region-map-path" data-region="rabat-sale-kenitra">
          <path
            d="M110,110 L190,95 L240,110 L250,140 L230,170 L170,180 L120,160 L100,130 Z"
            fill="#A0522D"
            fillOpacity="0.15"
            stroke="#A0522D"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="175" cy="138" r="3" fill="#A0522D" />
          <text x="175" y="155" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Rabat-Sale</text>
        </g>

        {/* Fes-Meknes */}
        <g className="region-map-path" data-region="fes-meknes">
          <path
            d="M240,110 L300,115 L350,100 L360,140 L390,190 L370,220 L320,230 L280,210 L250,190 L250,140 Z"
            fill="#A0522D"
            fillOpacity="0.15"
            stroke="#A0522D"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="310" cy="165" r="3" fill="#A0522D" />
          <text x="310" y="182" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Fes-Meknes</text>
        </g>

        {/* Casablanca-Settat */}
        <g className="region-map-path" data-region="casablanca-settat">
          <path
            d="M100,130 L120,160 L170,180 L230,170 L240,200 L220,240 L160,250 L110,230 L80,190 Z"
            fill="#A0522D"
            fillOpacity="0.15"
            stroke="#A0522D"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="160" cy="200" r="3" fill="#A0522D" />
          <text x="160" y="217" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Casablanca</text>
          <text x="160" y="228" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Settat</text>
        </g>

        {/* Beni Mellal-Khenifra */}
        <g className="region-map-path" data-region="beni-mellal-khenifra">
          <path
            d="M230,170 L250,190 L280,210 L320,230 L370,220 L380,260 L340,290 L280,280 L230,260 L220,240 L240,200 Z"
            fill="#A0522D"
            fillOpacity="0.15"
            stroke="#A0522D"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="300" cy="250" r="3" fill="#A0522D" />
          <text x="300" y="267" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Beni Mellal</text>
          <text x="300" y="278" textAnchor="middle" fill="var(--text-muted)" fontSize="7">Khenifra</text>
        </g>

        {/* Marrakech-Safi */}
        <g className="region-map-path" data-region="marrakech-safi">
          <path
            d="M80,190 L110,230 L160,250 L220,240 L230,260 L280,280 L270,320 L220,350 L160,340 L100,310 L70,270 Z"
            fill="#A0522D"
            fillOpacity="0.15"
            stroke="#A0522D"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="175" cy="290" r="3" fill="#A0522D" />
          <text x="175" y="305" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Marrakech-Safi</text>
        </g>

        {/* ─── SOUTH ─── */}

        {/* Draa-Tafilalet */}
        <g className="region-map-path" data-region="draa-tafilalet">
          <path
            d="M370,220 L430,230 L480,240 L520,290 L510,350 L480,400 L420,420 L360,400 L310,360 L270,320 L280,280 L340,290 L380,260 Z"
            fill="#C4960C"
            fillOpacity="0.15"
            stroke="#C4960C"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="410" cy="320" r="3" fill="#C4960C" />
          <text x="410" y="337" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Draa-Tafilalet</text>
        </g>

        {/* Souss-Massa */}
        <g className="region-map-path" data-region="souss-massa">
          <path
            d="M70,270 L100,310 L160,340 L220,350 L270,320 L310,360 L290,400 L240,420 L170,430 L110,410 L70,370 L60,320 Z"
            fill="#C4960C"
            fillOpacity="0.15"
            stroke="#C4960C"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="185" cy="375" r="3" fill="#C4960C" />
          <text x="185" y="390" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Souss-Massa</text>
        </g>

        {/* Guelmim-Oued Noun */}
        <g className="region-map-path" data-region="guelmim-oued-noun">
          <path
            d="M60,320 L70,370 L110,410 L170,430 L240,420 L290,400 L310,360 L360,400 L350,450 L290,480 L200,490 L120,480 L70,450 L50,400 Z"
            fill="#C4960C"
            fillOpacity="0.15"
            stroke="#C4960C"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="200" cy="450" r="3" fill="#C4960C" />
          <text x="200" y="465" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Guelmim-Oued Noun</text>
        </g>

        {/* ─── SAHARA ─── */}

        {/* Laayoune-Sakia El Hamra */}
        <g className="region-map-path" data-region="laayoune-sakia">
          <path
            d="M50,400 L70,450 L120,480 L200,490 L290,480 L350,450 L380,500 L360,550 L280,570 L180,580 L100,560 L50,520 L40,460 Z"
            fill="#dc6b19"
            fillOpacity="0.15"
            stroke="#dc6b19"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="210" cy="530" r="3" fill="#dc6b19" />
          <text x="210" y="545" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Laayoune-Sakia El Hamra</text>
        </g>

        {/* Dakhla-Oued Ed-Dahab */}
        <g className="region-map-path" data-region="dakhla-oued-ed-dahab">
          <path
            d="M40,460 L50,520 L100,560 L180,580 L280,570 L360,550 L380,610 L350,660 L260,680 L160,680 L80,660 L40,620 L30,540 Z"
            fill="#dc6b19"
            fillOpacity="0.15"
            stroke="#dc6b19"
            strokeWidth="1.5"
            className="transition-all duration-300 hover:fill-opacity-30 cursor-pointer"
          />
          <circle cx="200" cy="625" r="3" fill="#dc6b19" />
          <text x="200" y="640" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="600">Dakhla-Oued Ed-Dahab</text>
        </g>

        {/* Legend */}
        <g transform="translate(430, 460)">
          <rect x="0" y="0" width="150" height="130" rx="8" fill="var(--surface-card)" stroke="var(--border-default)" strokeWidth="1" fillOpacity="0.95" />
          <text x="12" y="22" fontSize="10" fontWeight="700" fill="var(--text-primary)">Geographic Zones</text>
          <rect x="12" y="34" width="12" height="12" rx="2" fill="#2563eb" fillOpacity="0.3" stroke="#2563eb" strokeWidth="1" />
          <text x="30" y="44" fontSize="9" fill="var(--text-secondary)">North</text>
          <rect x="12" y="54" width="12" height="12" rx="2" fill="#A0522D" fillOpacity="0.3" stroke="#A0522D" strokeWidth="1" />
          <text x="30" y="64" fontSize="9" fill="var(--text-secondary)">Central</text>
          <rect x="12" y="74" width="12" height="12" rx="2" fill="#C4960C" fillOpacity="0.3" stroke="#C4960C" strokeWidth="1" />
          <text x="30" y="84" fontSize="9" fill="var(--text-secondary)">South</text>
          <rect x="12" y="94" width="12" height="12" rx="2" fill="#dc6b19" fillOpacity="0.3" stroke="#dc6b19" strokeWidth="1" />
          <text x="30" y="104" fontSize="9" fill="var(--text-secondary)">Sahara</text>
        </g>
      </svg>
    </div>
  );
}

/* ─── Page Component ─── */

export default function RegionsPage() {
  // Build a lookup of cities per region
  const citiesByRegion: Record<string, typeof cities> = {};
  for (const city of cities) {
    const existing = citiesByRegion[city.regionId] || [];
    existing.push(city);
    citiesByRegion[city.regionId] = existing;
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-desert.webp',
          }}
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 moroccan-pattern opacity-30" />

        <div className="relative h-full container-morocco flex flex-col justify-end pb-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-white font-medium">Regions</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-5 w-fit">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              12 Regions, 4 Geographic Zones
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Regions of Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            From snow-capped Atlas peaks to golden Sahara dunes, from Mediterranean coves to
            Atlantic surf breaks &mdash; explore Morocco&apos;s 12 unique regions, each with its
            own character, culture, and climate.
          </p>
        </div>
      </section>

      {/* Zellige Border */}
      <div className="zellige-border" />

      {/* Quick Stats */}
      <section className="py-10 md:py-14 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="card-moroccan p-5 md:p-6 text-center">
              <Map className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">12</div>
              <div className="text-sm text-[var(--text-muted)]">Administrative Regions</div>
            </div>
            <div className="card-moroccan p-5 md:p-6 text-center">
              <MapPin className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">50+</div>
              <div className="text-sm text-[var(--text-muted)]">Cities Covered</div>
            </div>
            <div className="card-moroccan p-5 md:p-6 text-center">
              <Mountain className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">4,167m</div>
              <div className="text-sm text-[var(--text-muted)]">Highest Peak (Toubkal)</div>
            </div>
            <div className="card-moroccan p-5 md:p-6 text-center">
              <Compass className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">710,850</div>
              <div className="text-sm text-[var(--text-muted)]">Total Area (km2)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atlas Mountain Village Image ── */}
      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/art-atlas-mountain-village.webp" alt="Traditional Berber village nestled in the Atlas Mountains of Morocco with terraced fields and dramatic mountain backdrop" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Interactive Region Map */}
      <section className="py-12 md:py-16 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco Region Map
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is divided into 12 administrative regions spanning four distinct geographic zones,
              from the Mediterranean north to the Saharan south.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-10">
            <MoroccoRegionMap />
          </div>

          {/* Zone Quick Nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {zoneOrder.map((zone) => {
              const config = zoneConfig[zone];
              const ZoneIcon = config.icon;
              const count = regionDetails.filter((r) => r.zone === zone).length;
              return (
                <a
                  key={zone}
                  href={`#zone-${zone.toLowerCase()}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-light)] bg-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all text-sm font-medium text-[var(--text-secondary)]"
                >
                  <ZoneIcon className="w-4 h-4" />
                  {config.label}
                  <span className="text-xs text-[var(--text-muted)]">({count})</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regions Grouped by Zone */}
      {zoneOrder.map((zone) => {
        const zoneRegions = regionDetails.filter((r) => r.zone === zone);
        const config = zoneConfig[zone];
        const ZoneIcon = config.icon;

        return (
          <section
            key={zone}
            id={`zone-${zone.toLowerCase()}`}
            className="py-12 md:py-16 scroll-mt-24"
            style={{
              borderTop: `3px solid ${config.color}`,
            }}
          >
            <div className="container-morocco">
              {/* Zone Header */}
              <div className="flex items-start gap-4 mb-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: config.color }}
                >
                  <ZoneIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                    {config.label}
                  </h2>
                  <p className="text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
                    {config.description}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mt-2">
                    {zoneRegions.length} region{zoneRegions.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Region Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {zoneRegions.map((region) => {
                  const regionCities = citiesByRegion[region.id] || [];
                  const ClimateIcon = getClimateIcon(region.climate.icon);

                  return (
                    <article key={region.id} className="card-moroccan overflow-hidden group">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={region.image}
                          alt={`${region.name} region, Morocco`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Zone Badge */}
                        <div
                          className="absolute top-3 right-3 text-xs font-semibold text-white px-3 py-1 rounded-full"
                          style={{ backgroundColor: config.color }}
                        >
                          {zone}
                        </div>

                        <div className="absolute bottom-3 left-4 right-4">
                          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                            {region.name}
                          </h3>
                          <p className="text-sm text-white/80 flex items-center gap-1.5 mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            Capital: {region.capital}
                            <span className="mx-1 text-white/40">|</span>
                            <Users className="w-3.5 h-3.5" />
                            {region.population}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-6">
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                          {region.longDescription}
                        </p>

                        {/* Climate & Best Time Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                          {/* Climate Card */}
                          <div className="bg-[var(--surface-muted)] rounded-lg p-3.5 border border-[var(--border-light)]">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                              <ClimateIcon className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                              Climate
                            </h4>
                            <p className="text-sm font-medium text-[var(--text-primary)] mb-1">
                              {region.climate.type}
                            </p>
                            <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-[var(--text-muted)]">
                              <span className="flex items-center gap-1">
                                <Thermometer className="w-3 h-3" />
                                Summer: {region.climate.summerHigh}
                              </span>
                              <span className="flex items-center gap-1">
                                <Snowflake className="w-3 h-3" />
                                Winter: {region.climate.winterLow}
                              </span>
                              <span className="flex items-center gap-1">
                                <CloudRain className="w-3 h-3" />
                                {region.climate.rainfall}
                              </span>
                            </div>
                          </div>

                          {/* Best Time Card */}
                          <div className="bg-[var(--surface-muted)] rounded-lg p-3.5 border border-[var(--border-light)]">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                              <CalendarDays className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                              Best Time to Visit
                            </h4>
                            <p className="text-sm font-medium text-[var(--text-primary)]">
                              {region.bestTime}
                            </p>
                            <p className="text-xs text-[var(--text-muted)] mt-1">
                              Area: {region.area}
                            </p>
                          </div>
                        </div>

                        {/* Top Attractions */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                            Top Attractions
                          </h4>
                          <ul className="space-y-1">
                            {region.topAttractions.map((attraction) => (
                              <li
                                key={attraction}
                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                              >
                                <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[var(--color-primary)] shrink-0" />
                                {attraction}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Highlights */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                            <Landmark className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                            Key Highlights
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {region.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="inline-block text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Cities in Region */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                            Key Cities ({region.keyCities.length})
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {region.keyCities.map((cityName) => {
                              const matchingCity = regionCities.find(
                                (c) => c.name.toLowerCase() === cityName.toLowerCase()
                              );
                              return matchingCity ? (
                                <Link
                                  key={cityName}
                                  href={`/cities/${matchingCity.slug}`}
                                  className="inline-block text-xs px-2.5 py-1 rounded-full border border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                  {cityName}
                                </Link>
                              ) : (
                                <span
                                  key={cityName}
                                  className="inline-block text-xs px-2.5 py-1 rounded-full border border-[var(--border-default)] text-[var(--text-muted)]"
                                >
                                  {cityName}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Footer Stats & Link */}
                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-default)]">
                          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {region.cityCount} cities
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5" />
                              {region.topAttractions.length}+ attractions
                            </span>
                          </div>
                          <Link
                            href={`/cities?region=${region.id}`}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                          >
                            Explore
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Todgha Gorge Image ── */}
      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/hero-todgha.webp" alt="The dramatic Todgha Gorge with towering red rock canyon walls in Morocco's Draa-Tafilalet region" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Climate Comparison Table */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Climate Comparison by Region
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s climate varies dramatically from the mild Mediterranean north to the hot
              Saharan south. Use this guide to plan your visit for ideal weather conditions.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
                    <th className="text-left px-4 py-3 font-semibold text-[var(--text-primary)]">Region</th>
                    <th className="text-left px-4 py-3 font-semibold text-[var(--text-primary)]">Climate Type</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Summer High</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Winter Low</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Rainfall</th>
                    <th className="text-left px-4 py-3 font-semibold text-[var(--text-primary)]">Best Visit</th>
                  </tr>
                </thead>
                <tbody>
                  {regionDetails.map((region, index) => {
                    const ClimateIcon = getClimateIcon(region.climate.icon);
                    return (
                      <tr
                        key={region.id}
                        className={`border-b border-[var(--border-light)] ${
                          index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]/50'
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <ClimateIcon className="w-4 h-4 text-[var(--color-primary)]" />
                            <span className="font-medium text-[var(--text-primary)]">{region.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-[var(--text-secondary)]">{region.climate.type}</td>
                        <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{region.climate.summerHigh}</td>
                        <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{region.climate.winterLow}</td>
                        <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{region.climate.rainfall}</td>
                        <td className="px-4 py-3 text-[var(--text-secondary)] text-xs">{region.bestTime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Your Region Guide */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              How to Choose Your Region
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Not sure where to start? Match your travel interests to the perfect Moroccan region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Landmark,
                title: 'History & Culture',
                text: 'Fes-Meknes for medieval medinas and Roman ruins. Marrakech-Safi for imperial palaces. Rabat-Sale-Kenitra for the capital city and royal heritage.',
                regions: ['Fes-Meknes', 'Marrakech-Safi', 'Rabat-Sale-Kenitra'],
              },
              {
                icon: Waves,
                title: 'Beaches & Surfing',
                text: 'Souss-Massa for year-round sun and world-class surf. Tanger-Tetouan for Mediterranean coves. Dakhla for kitesurfing in desert lagoons.',
                regions: ['Souss-Massa', 'Tanger-Tetouan', 'Dakhla-Oued Ed-Dahab'],
              },
              {
                icon: Mountain,
                title: 'Mountains & Trekking',
                text: 'Marrakech-Safi for High Atlas and Toubkal. Beni Mellal-Khenifra for Middle Atlas waterfalls. Tanger-Tetouan for Rif Mountain villages.',
                regions: ['Marrakech-Safi', 'Beni Mellal-Khenifra', 'Tanger-Tetouan'],
              },
              {
                icon: Tent,
                title: 'Desert & Adventure',
                text: 'Draa-Tafilalet for Sahara dunes and gorges. Guelmim-Oued Noun for the desert edge. Laayoune-Sakia for frontier exploration.',
                regions: ['Draa-Tafilalet', 'Guelmim-Oued Noun', 'Laayoune-Sakia'],
              },
              {
                icon: Building2,
                title: 'Modern Cities',
                text: 'Casablanca-Settat for cosmopolitan energy and Art Deco architecture. Rabat-Sale-Kenitra for museums and contemporary culture.',
                regions: ['Casablanca-Settat', 'Rabat-Sale-Kenitra'],
              },
              {
                icon: TreePine,
                title: 'Nature & Wildlife',
                text: 'Beni Mellal-Khenifra for Ouzoud Falls and cedar forests. Souss-Massa for national parks and birdwatching. Oriental for mountain gorges.',
                regions: ['Beni Mellal-Khenifra', 'Souss-Massa', 'Oriental'],
              },
            ].map((interest) => (
              <div key={interest.title} className="card-moroccan p-6">
                <interest.icon className="w-8 h-8 text-[var(--color-primary)] mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {interest.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {interest.text}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {interest.regions.map((r) => (
                    <span
                      key={r}
                      className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morocco at a Glance */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco at a Glance
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Spanning from the Mediterranean to the Sahara, Morocco&apos;s 12 regions offer an extraordinary
              diversity of landscapes, cultures, and experiences unlike anywhere else on Earth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="card-moroccan p-6 text-center">
              <Globe className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">37M</div>
              <div className="text-sm text-[var(--text-muted)]">Population</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Compass className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">3,500km</div>
              <div className="text-sm text-[var(--text-muted)]">Coastline</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Landmark className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">9</div>
              <div className="text-sm text-[var(--text-muted)]">UNESCO World Heritage Sites</div>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Sun className="w-7 h-7 text-[var(--color-primary)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)]">300+</div>
              <div className="text-sm text-[var(--text-muted)]">Days of Sunshine/Year</div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/tools/map"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Map className="w-4 h-4" />
              View Interactive Map
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Browse our complete directory of 50+ cities across all 12 regions. Find the perfect destination
            for your Moroccan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore All 50+ Cities
            </Link>
            <Link
              href="/day-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-4 h-4" />
              Browse Day Trips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
