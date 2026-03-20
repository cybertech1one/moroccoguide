import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Compass,
  ShieldCheck,
  Thermometer,
  CheckCircle,
  Users,
  Waves,
  Building,
  Award,
  BookOpen,
  Crown,
  Landmark,
  Sun,
  Tent,
  Globe,
  Map,
  Navigation,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Regions Guide 2026 | All 12 Regions, Geography, Destinations & Travel Planning',
  description:
    'Complete guide to all 12 regions of Morocco. Explore Tanger-Tetouan-Al Hoceima, Marrakech-Safi, Draa-Tafilalet, Souss-Massa and more. Geography, key cities, highlights, best destinations, and travel planning tips for every Moroccan region.',
  keywords: [
    'morocco regions',
    'regions of morocco',
    'moroccan regions',
    'regions morocco',
    'morocco geography',
    'morocco map regions',
    'morocco administrative regions',
    'morocco travel regions',
    'morocco destinations by region',
    'tanger tetouan al hoceima',
    'marrakech safi region',
    'draa tafilalet region',
    'souss massa region',
    'fes meknes region',
    'casablanca settat region',
    'rabat sale kenitra region',
    'morocco travel planning',
    'morocco geography guide',
    'morocco landscape zones',
    'best regions to visit morocco',
  ],
  openGraph: {
    title: 'Morocco Regions Guide 2026 | All 12 Regions, Geography & Destinations',
    description:
      'Explore all 12 administrative regions of Morocco. From the Rif Mountains of the north to the Saharan south, discover key cities, landscapes, highlights, and the best destinations for every type of traveler.',
    url: `${BASE_URL}/morocco-regions-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-landscape.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco showing diverse landscapes from mountains to desert to coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Regions Guide 2026 | All 12 Regions & Destinations',
    description:
      'Complete guide to all 12 regions of Morocco. Geography, key cities, highlights, and travel planning for every Moroccan region from coast to desert.',
    images: [`${BASE_URL}/images/hero-morocco-landscape.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-regions-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-regions-guide`,
  name: 'Morocco Regions Guide 2026 | All 12 Regions, Geography, Destinations & Travel Planning',
  description:
    'Complete guide to all 12 administrative regions of Morocco. Geography, key cities, highlights, landscapes, and travel planning tips for every region.',
  url: `${BASE_URL}/morocco-regions-guide`,
  image: `${BASE_URL}/images/hero-morocco-landscape.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-regions-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Regions Guide', item: `${BASE_URL}/morocco-regions-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many regions does Morocco have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has 12 administrative regions established in the 2015 regionalization reform. These regions replaced the previous 16-region system and each has its own elected council and development authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best region to visit in Morocco for first-time travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech-Safi is the most popular region for first-time visitors, offering the iconic Marrakech medina, Atlas Mountain access, and the coastal town of Essaouira. Fes-Meknes is ideal for history lovers, while Souss-Massa suits beach-focused travelers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan region has the best beaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Souss-Massa (Agadir, Taghazout), Tanger-Tetouan-Al Hoceima (Mediterranean beaches), and Marrakech-Safi (Essaouira) all offer excellent beach experiences. The southern regions of Guelmim-Oued Noun and Dakhla-Oued Ed-Dahab have untouched, windswept beaches popular with surfers and kitesurfers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which region of Morocco has the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Draa-Tafilalet is the main gateway to the Sahara Desert, home to the famous Erg Chebbi dunes near Merzouga and Erg Chigaga near M\'hamid. The southern regions of Guelmim-Oued Noun, Laayoune-Sakia El Hamra, and Dakhla-Oued Ed-Dahab also have vast desert landscapes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do you need to explore Morocco by region?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minimum of 10-14 days allows you to cover 3-4 regions comfortably. Two weeks lets you combine Marrakech-Safi, Draa-Tafilalet (desert), and Fes-Meknes (imperial cities). Three weeks or more allows you to add the coast and northern regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the largest region in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laayoune-Sakia El Hamra is the largest region by area, covering over 140,000 square kilometers of mostly Saharan territory in southern Morocco. Draa-Tafilalet is the largest in the non-southern regions at approximately 88,000 square kilometers.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ALL 12 REGIONS
   ═══════════════════════════════════════════════════════════════ */

const moroccoRegions = [
  {
    name: 'Tanger-Tetouan-Al Hoceima',
    capital: 'Tangier',
    icon: Navigation,
    zone: 'Northern Coast & Rif Mountains',
    keyCities: ['Tangier', 'Tetouan', 'Chefchaouen', 'Al Hoceima', 'Larache', 'Asilah'],
    landscape: 'Mediterranean and Atlantic coastlines, Rif Mountains, lush valleys, pine forests',
    highlights: [
      'Chefchaouen blue medina',
      'Tangier literary heritage',
      'Mediterranean beaches of Al Hoceima',
      'Tetouan UNESCO medina',
      'Cap Spartel and Caves of Hercules',
      'Asilah arts town',
    ],
    bestFor: 'Culture seekers, photographers, beach lovers, Spanish-influenced architecture fans',
    description:
      'The gateway between Europe and Africa. This northern region spans two coastlines and the dramatic Rif Mountains. Tangier is a cosmopolitan port city with a storied past, Chefchaouen is the famous blue-washed mountain town, and Al Hoceima offers some of Morocco\'s finest Mediterranean beaches. The region has a distinctly Andalusian influence in its food, architecture, and music.',
  },
  {
    name: 'Oriental',
    capital: 'Oujda',
    icon: Sun,
    zone: 'Eastern Morocco & Algerian Border',
    keyCities: ['Oujda', 'Nador', 'Berkane', 'Saidia', 'Figuig', 'Jerada'],
    landscape: 'Steppe plains, Mediterranean coast, oasis towns, volcanic highlands',
    highlights: [
      'Saidia resort beaches (14 km of sand)',
      'Figuig oasis town',
      'Marchica lagoon near Nador',
      'Beni-Snassen Mountains',
      'Ras El Ma spring',
      'Oujda medina and Lalla Aicha park',
    ],
    bestFor: 'Off-the-beaten-path travelers, oasis explorers, beach resort seekers, birdwatchers',
    description:
      'Morocco\'s least-visited major region, the Oriental offers authentic experiences free from tourist crowds. Oujda is a vibrant border city with Algerian-influenced cuisine, Saidia boasts one of Morocco\'s longest sandy beaches, and Figuig is a remote oasis town near the Algerian border. The region is rich in Raï music culture and has a unique culinary identity blending Moroccan and Algerian flavors.',
  },
  {
    name: 'Fes-Meknes',
    capital: 'Fes',
    icon: Landmark,
    zone: 'Interior Highlands & Middle Atlas',
    keyCities: ['Fes', 'Meknes', 'Ifrane', 'Volubilis', 'Sefrou', 'Moulay Idriss Zerhoun'],
    landscape: 'Fertile plains, Middle Atlas cedar forests, volcanic plateaus, river valleys',
    highlights: [
      'Fes el-Bali (world\'s largest car-free medina)',
      'Volubilis Roman ruins',
      'Meknes imperial city',
      'Ifrane alpine town',
      'Middle Atlas cedar forests',
      'Moulay Idriss Zerhoun pilgrimage town',
    ],
    bestFor: 'History buffs, architecture lovers, food travelers, spiritual seekers',
    description:
      'The intellectual and spiritual heartland of Morocco. Fes el-Bali is the world\'s largest car-free urban zone and home to the oldest university in continuous operation (Al Quaraouiyine, founded 859 AD). Meknes is an underrated imperial city with grand monuments. Beyond the cities, the Middle Atlas offers cedar forests, Barbary macaque monkeys, and the alpine town of Ifrane, often called the Switzerland of Morocco.',
  },
  {
    name: 'Rabat-Sale-Kenitra',
    capital: 'Rabat',
    icon: Crown,
    zone: 'Atlantic Coast & Capital Region',
    keyCities: ['Rabat', 'Sale', 'Kenitra', 'Temara', 'Skhirat', 'Mehdia'],
    landscape: 'Atlantic coast, cork oak forests, fertile Gharb plain, river estuaries',
    highlights: [
      'Rabat UNESCO medina and Kasbah of the Udayas',
      'Hassan Tower and Mohammed V Mausoleum',
      'Chellah necropolis',
      'Sale medina and ceramics',
      'Mehdia beach and Sidi Boughaba lake',
      'Rabat contemporary art scene',
    ],
    bestFor: 'Culture travelers, those wanting a calmer urban experience, museum lovers, surfers',
    description:
      'Home to Morocco\'s political capital and a UNESCO World Heritage site since 2012. Rabat is often overlooked by tourists rushing between Marrakech and Fes, but it offers a more relaxed, less touristy urban experience. The Kasbah of the Udayas is a photogenic fortress overlooking the Atlantic, the Mohammed V Mausoleum is architecturally stunning, and the city has Morocco\'s best contemporary art museum (MMVI). Neighboring Sale has traditional crafts and a more local atmosphere.',
  },
  {
    name: 'Beni Mellal-Khenifra',
    capital: 'Beni Mellal',
    icon: Mountain,
    zone: 'Central Atlas & Tadla Plain',
    keyCities: ['Beni Mellal', 'Khenifra', 'Azilal', 'Kasba Tadla', 'Khouribga'],
    landscape: 'High Atlas foothills, Tadla agricultural plain, waterfalls, Bin El Ouidane lake',
    highlights: [
      'Ouzoud Waterfalls (110 meters)',
      'Bin El Ouidane lake and dam',
      'Ait Bouguemez (Happy Valley)',
      'Cathedral Rock of Beni Mellal',
      'Ain Asserdoun springs',
      'Middle Atlas Berber villages',
    ],
    bestFor: 'Nature lovers, hikers, off-the-beaten-path travelers, outdoor adventure seekers',
    description:
      'The adventure capital of the Moroccan heartland. This region is dominated by the Atlas Mountains and offers some of the most spectacular natural scenery in the country. The Ouzoud Waterfalls are the most visited natural attraction in Morocco, Bin El Ouidane is a stunning turquoise lake perfect for kayaking, and Ait Bouguemez (the Happy Valley) offers trekking among traditional Berber villages with the towering M\'goun massif as a backdrop.',
  },
  {
    name: 'Casablanca-Settat',
    capital: 'Casablanca',
    icon: Building,
    zone: 'Atlantic Economic Hub',
    keyCities: ['Casablanca', 'Settat', 'Mohammedia', 'El Jadida', 'Benslimane'],
    landscape: 'Atlantic coast, Chaouia agricultural plain, urban sprawl',
    highlights: [
      'Hassan II Mosque (tallest minaret in the world)',
      'Casablanca Art Deco architecture',
      'Morocco Mall and Anfa Place',
      'El Jadida Portuguese city (UNESCO)',
      'Ain Diab corniche and beaches',
      'Mohammedia coastal promenade',
    ],
    bestFor: 'Architecture fans, business travelers, urban explorers, Art Deco enthusiasts',
    description:
      'Morocco\'s economic powerhouse and largest city. Casablanca is not a traditional tourist city, but it has Africa\'s most impressive modern mosque (Hassan II, built over the Atlantic), a fascinating Art Deco heritage quarter, and a cosmopolitan dining scene. El Jadida, south of Casablanca, has a UNESCO-listed Portuguese fortified city with a hauntingly beautiful underground cistern. The region is the gateway for most international flights arriving in Morocco.',
  },
  {
    name: 'Marrakech-Safi',
    capital: 'Marrakech',
    icon: Star,
    zone: 'Central Morocco & High Atlas Gateway',
    keyCities: ['Marrakech', 'Essaouira', 'Safi', 'Ouarzazate (nearby)', 'Imlil', 'Ourika Valley'],
    landscape: 'High Atlas Mountains, Haouz plain, Atlantic coast at Essaouira, arid foothills',
    highlights: [
      'Marrakech medina, souks, and Jemaa el-Fna',
      'Essaouira coastal medina and windsurfing',
      'High Atlas trekking from Imlil',
      'Ourika Valley day trips',
      'Majorelle Garden and YSL Museum',
      'Safi pottery tradition',
    ],
    bestFor: 'First-time visitors, foodies, shoppers, trekkers, honeymooners, luxury travelers',
    description:
      'The most visited region in Morocco and the starting point for most itineraries. Marrakech is the country\'s tourism capital with its iconic Jemaa el-Fna square, labyrinthine souks, and world-class riads and restaurants. Essaouira offers a breezy coastal counterpoint, and the High Atlas Mountains are accessible for day trips or multi-day treks. This region has the widest range of accommodation, from budget hostels to ultra-luxury palaces.',
  },
  {
    name: 'Draa-Tafilalet',
    capital: 'Errachidia',
    icon: Tent,
    zone: 'Sahara Gateway & Oasis Valleys',
    keyCities: ['Errachidia', 'Ouarzazate', 'Merzouga', 'Zagora', 'Tinghir', 'Rissani'],
    landscape: 'Sahara Desert (Erg Chebbi, Erg Chigaga), Draa Valley oases, Todra Gorge, kasbahs',
    highlights: [
      'Erg Chebbi dunes at Merzouga',
      'Todra and Dades Gorges',
      'Ait Benhaddou kasbah (UNESCO)',
      'Draa Valley palm oases',
      'Ouarzazate film studios',
      'Rissani and the Tafilalet oasis',
    ],
    bestFor: 'Desert adventurers, photographers, movie fans, kasbah explorers, stargazers',
    description:
      'The land of kasbahs, oases, and the Sahara. This is Morocco\'s largest non-southern region and arguably its most dramatic. The Erg Chebbi dunes near Merzouga rise to 150 meters and offer the quintessential Sahara camel trek and desert camp experience. Todra Gorge has 300-meter canyon walls, Ait Benhaddou is a UNESCO kasbah used in dozens of Hollywood films, and the Draa Valley is the longest palm oasis in Morocco. Ouarzazate is the gateway city.',
  },
  {
    name: 'Souss-Massa',
    capital: 'Agadir',
    icon: Waves,
    zone: 'Southern Atlantic Coast & Anti-Atlas',
    keyCities: ['Agadir', 'Tiznit', 'Taroudant', 'Taghazout', 'Tafraout', 'Inezgane'],
    landscape: 'Atlantic coast beaches, Souss plain, Anti-Atlas Mountains, argan forests',
    highlights: [
      'Agadir beach resort strip',
      'Taghazout surfing village',
      'Taroudant mini-Marrakech walls',
      'Tafraout painted rocks and almond blossoms',
      'Souss-Massa National Park (bald ibis)',
      'Argan oil cooperatives',
    ],
    bestFor: 'Beach lovers, surfers, budget sun seekers, argan oil enthusiasts, Anti-Atlas trekkers',
    description:
      'Morocco\'s beach holiday hub. Agadir is a modern resort city rebuilt after the 1960 earthquake, with a long sandy beach and over 300 days of sunshine per year. Taghazout, just north, has become one of Africa\'s top surf destinations. Inland, Taroudant is a walled Berber city often called mini-Marrakech, and Tafraout in the Anti-Atlas is famous for its pink granite landscape and almond blossom festival. The region is also the heartland of argan oil production.',
  },
  {
    name: 'Guelmim-Oued Noun',
    capital: 'Guelmim',
    icon: Compass,
    zone: 'Pre-Saharan South & Atlantic Frontier',
    keyCities: ['Guelmim', 'Tan-Tan', 'Sidi Ifni', 'Assa'],
    landscape: 'Pre-Saharan steppe, rugged Atlantic coast, hamada (stone desert), oases',
    highlights: [
      'Sidi Ifni Art Deco and beaches',
      'Legzira natural stone arches',
      'Guelmim camel market (Saturday)',
      'Plage Blanche (40 km white sand)',
      'Tan-Tan Moussem festival',
      'Gateway to the deep south',
    ],
    bestFor: 'Adventurous off-grid travelers, surfers, camel market visitors, remote beach seekers',
    description:
      'The transition zone between tourist Morocco and the deep Saharan south. Guelmim was historically known as the Gateway to the Sahara and still hosts a traditional camel market on Saturdays. Sidi Ifni is a former Spanish enclave with Art Deco architecture and laid-back surf beaches. Legzira is famous for its dramatic natural stone arches over the beach. Plage Blanche is a 40-kilometer stretch of pristine white sand accessible only by 4x4.',
  },
  {
    name: 'Laayoune-Sakia El Hamra',
    capital: 'Laayoune',
    icon: Globe,
    zone: 'Western Sahara North',
    keyCities: ['Laayoune', 'Tarfaya', 'Boujdour', 'Es-Semara'],
    landscape: 'Flat Saharan desert, Atlantic coast, hamada plains, seasonal wadis',
    highlights: [
      'Laayoune city and new development',
      'Tarfaya kite surfing and Saint-Exupery museum',
      'Atlantic fishing villages',
      'Naila lagoon birdwatching',
      'Saharan landscapes and solitude',
      'Es-Semara historic frontier town',
    ],
    bestFor: 'Extreme off-the-beaten-path travelers, kite surfers, birdwatchers, Saharan explorers',
    description:
      'A vast, sparsely populated Saharan region that few tourists visit. Laayoune is a modern administrative city with wide boulevards and new infrastructure. Tarfaya is known for its connection to Antoine de Saint-Exupery (author of The Little Prince), who was stationed here as an airmail pilot. The Atlantic coast has world-class wind conditions for kite surfing. The region is Morocco\'s largest by area and offers true Saharan solitude.',
  },
  {
    name: 'Dakhla-Oued Ed-Dahab',
    capital: 'Dakhla',
    icon: Waves,
    zone: 'Western Sahara South & Atlantic Peninsula',
    keyCities: ['Dakhla', 'Bir Gandouz'],
    landscape: 'Saharan desert meeting Atlantic Ocean, lagoon peninsula, sand dunes, flat desert',
    highlights: [
      'Dakhla lagoon (world-class kite surfing)',
      'White Dune (Dune Blanche)',
      'Oyster farms in the lagoon',
      'Desert-meets-ocean landscapes',
      'Flamingo and migratory bird colonies',
      'Gateway to Mauritania',
    ],
    bestFor: 'Kite surfers, windsurfers, extreme adventurers, wildlife enthusiasts, oyster lovers',
    description:
      'Morocco\'s southernmost and most remote region, and increasingly one of its most exciting. Dakhla sits on a 40-kilometer peninsula jutting into the Atlantic, creating a vast lagoon with perfect flat-water conditions that has made it a world-class kite surfing destination. The lagoon also produces excellent oysters, an unexpected luxury in the Sahara. The White Dune (Dune Blanche) is where Saharan sand meets the Atlantic Ocean in a surreal landscape.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GEOGRAPHIC ZONES
   ═══════════════════════════════════════════════════════════════ */

const geographicZones = [
  {
    zone: 'Atlantic Coast',
    icon: Waves,
    regions: ['Tanger-Tetouan-Al Hoceima', 'Rabat-Sale-Kenitra', 'Casablanca-Settat', 'Marrakech-Safi', 'Souss-Massa', 'Guelmim-Oued Noun', 'Laayoune-Sakia El Hamra', 'Dakhla-Oued Ed-Dahab'],
    description: 'Over 2,800 km of Atlantic coastline stretching from Tangier to Dakhla, offering everything from city beaches to surf breaks to remote white sand.',
  },
  {
    zone: 'Mountains',
    icon: Mountain,
    regions: ['Marrakech-Safi (High Atlas)', 'Beni Mellal-Khenifra (High & Middle Atlas)', 'Fes-Meknes (Middle Atlas)', 'Tanger-Tetouan-Al Hoceima (Rif)', 'Souss-Massa (Anti-Atlas)', 'Draa-Tafilalet (High Atlas south)'],
    description: 'Four mountain ranges define Morocco: the High Atlas (4,167 m), Middle Atlas, Anti-Atlas, and Rif. Together they create dramatic scenery and diverse microclimates.',
  },
  {
    zone: 'Desert & Sahara',
    icon: Sun,
    regions: ['Draa-Tafilalet', 'Guelmim-Oued Noun', 'Laayoune-Sakia El Hamra', 'Dakhla-Oued Ed-Dahab', 'Oriental (eastern steppe)'],
    description: 'From the towering Erg Chebbi dunes to the flat hamada stone desert of the south, Morocco\'s Saharan and pre-Saharan landscapes cover over half the country\'s total area.',
  },
  {
    zone: 'Fertile Plains & Interior',
    icon: Landmark,
    regions: ['Fes-Meknes (Saiss plain)', 'Rabat-Sale-Kenitra (Gharb plain)', 'Casablanca-Settat (Chaouia plain)', 'Beni Mellal-Khenifra (Tadla plain)'],
    description: 'Morocco\'s agricultural heartland. These fertile plains produce cereals, citrus, olives, and vegetables, and are home to the country\'s largest urban centers and imperial cities.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONS BY INTEREST
   ═══════════════════════════════════════════════════════════════ */

const regionsByInterest = [
  {
    interest: 'Best Beaches',
    icon: Waves,
    top: [
      { region: 'Souss-Massa', spot: 'Agadir, Taghazout, Imesouane' },
      { region: 'Tanger-Tetouan-Al Hoceima', spot: 'Al Hoceima, Asilah, Mediterranean coves' },
      { region: 'Marrakech-Safi', spot: 'Essaouira, Sidi Kaouki' },
      { region: 'Dakhla-Oued Ed-Dahab', spot: 'Dakhla lagoon, Dune Blanche' },
    ],
  },
  {
    interest: 'History & Architecture',
    icon: Landmark,
    top: [
      { region: 'Fes-Meknes', spot: 'Fes medina, Volubilis, Meknes' },
      { region: 'Marrakech-Safi', spot: 'Marrakech medina, Ait Benhaddou (nearby)' },
      { region: 'Rabat-Sale-Kenitra', spot: 'Rabat Kasbah, Hassan Tower, Chellah' },
      { region: 'Casablanca-Settat', spot: 'Hassan II Mosque, Art Deco quarter, El Jadida' },
    ],
  },
  {
    interest: 'Adventure & Outdoors',
    icon: Mountain,
    top: [
      { region: 'Beni Mellal-Khenifra', spot: 'Ouzoud Falls, M\'goun trekking, Bin El Ouidane' },
      { region: 'Draa-Tafilalet', spot: 'Sahara desert, Todra Gorge, Dades Valley' },
      { region: 'Marrakech-Safi', spot: 'Toubkal trek, Ourika Valley, High Atlas' },
      { region: 'Souss-Massa', spot: 'Anti-Atlas trekking, Taghazout surf' },
    ],
  },
  {
    interest: 'Food & Cuisine',
    icon: Award,
    top: [
      { region: 'Fes-Meknes', spot: 'Morocco\'s culinary capital, pastilla, rfissa' },
      { region: 'Marrakech-Safi', spot: 'Tanjia, street food scene, cooking classes' },
      { region: 'Souss-Massa', spot: 'Argan oil, fresh seafood, Berber cuisine' },
      { region: 'Tanger-Tetouan-Al Hoceima', spot: 'Andalusian cuisine, Mediterranean seafood' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVEL PLANNING TIPS
   ═══════════════════════════════════════════════════════════════ */

const travelTips = [
  {
    title: 'Best Time by Region',
    icon: Thermometer,
    tip: 'The coast (Souss-Massa, Casablanca-Settat) is pleasant year-round. The desert (Draa-Tafilalet) is best October to April, as summer exceeds 45 degrees Celsius. The mountains (Beni Mellal-Khenifra, High Atlas) are best for trekking April to June and September to November. The north (Tanger-Tetouan) has mild winters but rainy seasons from November to March.',
  },
  {
    title: 'Getting Between Regions',
    icon: Navigation,
    tip: 'Morocco\'s train network (ONCF) connects the Atlantic corridor from Tangier to Marrakech via Rabat and Casablanca. For other regions, CTM and Supratours buses are reliable. Renting a car is ideal for Draa-Tafilalet, Beni Mellal-Khenifra, and the south. Domestic flights connect Casablanca to Laayoune, Dakhla, and Oujda.',
  },
  {
    title: 'How Many Regions to Visit',
    icon: Map,
    tip: 'In one week, focus on 1-2 regions (e.g., Marrakech-Safi and Draa-Tafilalet). In two weeks, you can comfortably cover 3-4 regions. Three weeks allows a comprehensive north-to-south journey covering 5-6 regions. Trying to see all 12 in a single trip is not recommended.',
  },
  {
    title: 'Budget Considerations',
    icon: ShieldCheck,
    tip: 'The most affordable regions for travelers are Fes-Meknes, Oriental, and Beni Mellal-Khenifra. Marrakech-Safi and Dakhla-Oued Ed-Dahab tend to be the most expensive. Budget from 400 MAD per day in affordable regions and from 800 MAD per day in tourist hotspots. Seasonal pricing applies across all regions during peak months (October-April).',
  },
  {
    title: 'Safety Across Regions',
    icon: ShieldCheck,
    tip: 'Morocco is generally very safe for travelers across all 12 regions. The most-visited regions (Marrakech-Safi, Fes-Meknes, Souss-Massa) have well-established tourism infrastructure. Remote southern regions require advance planning for fuel, water, and accommodation. Always carry cash in rural areas as ATMs can be scarce.',
  },
  {
    title: 'Language by Region',
    icon: BookOpen,
    tip: 'Darija (Moroccan Arabic) is spoken everywhere. Tamazight (Berber) is predominant in mountain and southern regions (Souss-Massa, Beni Mellal-Khenifra, Draa-Tafilalet). French is widely spoken in urban areas. Spanish is common in the north (Tanger-Tetouan-Al Hoceima, Oriental). English is growing in tourist regions.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRegionsGuidePage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco-landscape.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Regions Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Map className="w-4 h-4" />
            Geography &amp; Destinations
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Regions Guide:
            <br className="hidden md:block" /> All 12 Regions Explored
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the Mediterranean shores of the north to the Saharan dunes of the south.
            Discover every region, its key cities, landscapes, and what makes it worth visiting.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Understanding Morocco&apos;s 12 Regions
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco reorganized its administrative divisions in 2015, creating 12 regions from the
                previous 16. Each region has its own elected council and distinct identity shaped by
                geography, history, and culture. From the lush Rif Mountains to the vast Sahara, from
                ancient imperial cities to modern beach resorts, Morocco&apos;s regions offer an extraordinary
                diversity of experiences within a single country.
              </p>
              <p>
                Understanding these regions is the key to planning a rewarding trip. Each has its own
                character, climate, cuisine, and attractions. A visitor who stays only in Marrakech sees
                one Morocco. One who ventures into the desert of Draa-Tafilalet, the mountains of Beni
                Mellal-Khenifra, and the coastline of Souss-Massa sees a completely different country in
                each region.
              </p>
              <p>
                This guide covers all 12 regions with their capitals, key cities, geographic
                character, top attractions, and recommendations for which type of traveler each region
                suits best. Use it to build an itinerary that matches your interests and available time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Geographic Zones Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Geographic Zones
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco spans four distinct geographic zones, each with unique landscapes, climates, and travel experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {geographicZones.map((zone) => {
              const ZoneIcon = zone.icon;
              return (
                <div key={zone.zone} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ZoneIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {zone.zone}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{zone.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {zone.regions.map((region) => (
                      <span key={region} className="px-2 py-1 text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] rounded-full">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── All 12 Regions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            All 12 Regions of Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A detailed look at each administrative region, from north to south, with key cities, landscapes, highlights, and traveler recommendations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Regions are listed from north to south. Click into individual city guides for more detailed information.
          </p>
          <div className="space-y-8">
            {moroccoRegions.map((region, index) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {region.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Crown className="w-3.5 h-3.5" />
                          Capital: {region.capital}
                        </span>
                        <span className="flex items-center gap-1">
                          <RegionIcon className="w-3.5 h-3.5" />
                          {region.zone}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{region.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Building className="w-4 h-4 text-[var(--color-accent)]" />
                        Key Cities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {region.keyCities.map((city) => (
                          <span key={city} className="px-2 py-1 text-xs bg-white text-[var(--text-primary)] rounded-full font-medium">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[var(--color-accent)]" />
                        Landscape
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{region.landscape}</p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-[var(--color-gold)]" />
                      Highlights
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {region.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/10">
                    <Users className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {region.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regions by Interest ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Region by Interest?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not sure which regions to prioritize? Choose based on what excites you most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionsByInterest.map((item) => {
              const InterestIcon = item.icon;
              return (
                <div key={item.interest} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <InterestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.interest}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {item.top.map((pick, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[var(--color-gold)]">{i + 1}</span>
                        </div>
                        <div>
                          <span className="font-medium text-[var(--text-primary)]">{pick.region}</span>
                          <p className="text-xs text-[var(--text-muted)]">{pick.spot}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Travel Planning Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Region-by-Region Travel Planning
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical tips for navigating Morocco&apos;s regions, from timing and transport to budgets and safety.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sample Itineraries by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Multi-Region Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Combine regions for a well-rounded Morocco experience. Here are three proven itineraries based on available time.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">7d</span>
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    One Week: Imperial Cities &amp; Desert
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">2 regions: Marrakech-Safi + Draa-Tafilalet</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Start in Marrakech (2 days), drive through the High Atlas via Tizi n&apos;Tichka pass to Ait Benhaddou and Ouarzazate (1 day), continue through the Dades and Todra Gorges (1 day), reach Merzouga for a desert camp in Erg Chebbi (1 day), return to Marrakech via a different route (2 days).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">14d</span>
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Two Weeks: Grand Tour
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">4 regions: Marrakech-Safi + Draa-Tafilalet + Fes-Meknes + Rabat-Sale-Kenitra</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Marrakech (2 days), Essaouira day trip (1 day), High Atlas to desert (3 days including Erg Chebbi), north to Fes via Midelt (1 day), Fes medina (2 days), Meknes and Volubilis day trip (1 day), Rabat (1-2 days), train back to Marrakech or Casablanca for departure (1 day).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">21d</span>
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Three Weeks: North to South Explorer
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">6 regions: Tanger-Tetouan + Fes-Meknes + Beni Mellal-Khenifra + Marrakech-Safi + Draa-Tafilalet + Souss-Massa</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Fly into Tangier (2 days), Chefchaouen (2 days), Fes (3 days with Meknes/Volubilis), Beni Mellal and Ouzoud Falls (1 day), Marrakech (2 days), High Atlas and desert circuit to Merzouga (3 days), return via Ouarzazate (1 day), south to Taroudant and Taghazout (2 days), Agadir (1 day), fly out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Reference Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Reference: All 12 Regions at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A summary table to help you quickly compare regions and plan your route.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium min-w-[600px]">
                <div className="p-3 px-4">Region</div>
                <div className="p-3 px-4">Capital</div>
                <div className="p-3 px-4">Zone</div>
                <div className="p-3 px-4">Best For</div>
              </div>
              {moroccoRegions.map((region, i) => (
                <div
                  key={region.name}
                  className={`grid grid-cols-4 gap-0 text-sm min-w-[600px] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{region.name}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{region.capital}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{region.zone}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)] text-xs">{region.bestFor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many regions does Morocco have?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco has 12 administrative regions established in the 2015 regionalization reform. These regions
                replaced the previous 16-region system and each has its own elected council and development authority.
                The regions range from the densely populated Casablanca-Settat (over 7 million people) to the sparsely
                inhabited Dakhla-Oued Ed-Dahab (fewer than 200,000 people).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best region to visit in Morocco for first-time travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech-Safi is the most popular region for first-time visitors, offering the iconic Marrakech medina,
                Atlas Mountain access, and the coastal town of Essaouira all within easy reach. Fes-Meknes is ideal for
                history lovers, while Souss-Massa suits beach-focused travelers who want reliable sunshine and a more
                relaxed pace.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Moroccan region has the best beaches?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Souss-Massa (Agadir, Taghazout, Imesouane) and Tanger-Tetouan-Al Hoceima (Al Hoceima, Asilah,
                Mediterranean coves) offer the most accessible beach experiences. For surf culture, Souss-Massa is
                unbeatable. For remote, pristine shores, the southern regions of Guelmim-Oued Noun (Legzira, Plage
                Blanche) and Dakhla-Oued Ed-Dahab offer untouched beaches that few tourists ever reach.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which region of Morocco has the Sahara Desert?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Draa-Tafilalet is the main gateway to the Sahara Desert, home to the famous Erg Chebbi dunes near
                Merzouga (rising to 150 meters) and Erg Chigaga near M&apos;hamid (even more remote). The southern regions
                of Guelmim-Oued Noun, Laayoune-Sakia El Hamra, and Dakhla-Oued Ed-Dahab also have vast Saharan
                landscapes, though with flat hamada desert rather than towering sand dunes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How long do you need to explore Morocco by region?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A minimum of 10-14 days allows you to cover 3-4 regions comfortably. Two weeks lets you combine
                Marrakech-Safi, Draa-Tafilalet (desert), and Fes-Meknes (imperial cities). Three weeks or more allows
                you to add the coast and northern regions. Budget at least 2-3 days per region to avoid rushing, and
                account for travel days between distant regions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the largest region in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Laayoune-Sakia El Hamra is the largest region by area, covering over 140,000 square kilometers of mostly
                Saharan territory in southern Morocco. Draa-Tafilalet is the largest in the non-southern regions at
                approximately 88,000 square kilometers. The smallest region by area is Casablanca-Settat, but it has
                the highest population density with over 7 million inhabitants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, Berber villages, and the highest peaks in North Africa across the High, Middle, and Anti-Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Camel treks, desert camps, Erg Chebbi dunes, and everything you need to know about Morocco&apos;s Sahara experience.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-beaches-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Beaches Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s best beaches from the Mediterranean north to the Atlantic south, with surf spots and hidden coves.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Moroccan traditions, customs, festivals, and cultural experiences to deepen your understanding of the country.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco&apos;s Diverse Regions?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the blue streets of Chefchaouen to the golden dunes of Merzouga, every region has
            a story to tell. Start planning your Moroccan adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              View Itineraries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Browse Destinations
              <MapPin className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
