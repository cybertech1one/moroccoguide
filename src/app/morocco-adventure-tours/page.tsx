import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Mountain,
  Compass,
  Tent,
  Wind,
  Waves,
  Sun,
  Bike,
  Shield,
  Globe,
  Calendar,
  AlertTriangle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Adventure Tours 2026 | Best Adventure Activities, Trekking & Outdoor Holidays',
  description:
    'Complete guide to Morocco adventure tours. Discover trekking Toubkal and M\'Goun, sandboarding in the Sahara, surfing Taghazout, canyoning Todra Gorge, paragliding, quad biking, rock climbing, kitesurfing, mountain biking, and multi-day adventure itineraries with prices.',
  keywords: [
    'morocco adventure tours',
    'adventure travel morocco',
    'morocco adventure holidays',
    'best adventure activities morocco',
    'morocco outdoor adventures',
    'toubkal trekking',
    'sahara sandboarding',
    'morocco surfing taghazout',
    'canyoning todra gorge',
    'paragliding morocco',
    'quad biking morocco',
    'rock climbing morocco',
    'kitesurfing dakhla',
    'mountain biking atlas',
    'morocco multi-day trek',
    'morocco adventure tour operators',
    'morocco camping sahara',
    'zip lining morocco',
    'caving morocco',
    'morocco adventure itinerary',
  ],
  openGraph: {
    title: 'Morocco Adventure Tours 2026 | Best Adventure Activities, Trekking & Outdoor Holidays',
    description:
      'Your ultimate guide to adventure travel in Morocco. From Atlas Mountain trekking and Sahara sandboarding to Atlantic coast surfing and desert quad biking. Prices, operators, and itineraries.',
    url: `${BASE_URL}/morocco-adventure-tours`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Hikers trekking through the Atlas Mountains of Morocco with dramatic mountain scenery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Adventure Tours 2026 | Trekking, Surfing & Outdoor Holidays',
    description:
      'Complete guide to adventure activities in Morocco. Toubkal treks, Sahara expeditions, Atlantic surfing, canyoning, paragliding, and multi-day itineraries with prices.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-adventure-tours` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-adventure-tours`,
  name: 'Morocco Adventure Tours 2026 | Best Adventure Activities, Trekking & Outdoor Holidays',
  description:
    'Complete guide to Morocco adventure tours. Trekking, sandboarding, surfing, canyoning, paragliding, quad biking, rock climbing, kitesurfing, mountain biking, multi-day itineraries, and tour operator reviews with prices.',
  url: `${BASE_URL}/morocco-adventure-tours`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-adventure-tours`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Adventure Tours', item: `${BASE_URL}/morocco-adventure-tours` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best adventure activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers an incredible range of adventure activities including trekking in the Atlas Mountains (Toubkal and M\'Goun), sandboarding and camel trekking in the Sahara Desert, surfing and kitesurfing on the Atlantic coast, canyoning in Todra Gorge, rock climbing, paragliding near Agadir, quad biking in Marrakech Palmeraie, mountain biking, zip-lining in the Atlas, and caving in the Rif Mountains.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fit do I need to be for trekking Jebel Toubkal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toubkal (4,167m) requires moderate to good fitness. The standard two-day ascent involves 6-8 hours of hiking per day over rocky terrain with significant altitude gain. No technical climbing is needed, but you should be comfortable walking uphill for extended periods and be prepared for altitude effects above 3,000m. Prior hiking experience at altitude is recommended. The M\'Goun traverse is more demanding, requiring 5-6 days of trekking.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for adventure activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time depends on the activity. For Atlas Mountain trekking, April to June and September to October offer the best conditions. Surfing peaks from September to April with the biggest swells. Sahara adventures are best from October to April when temperatures are manageable. Kitesurfing in Dakhla and Essaouira is best from April to October when trade winds are strongest. Canyoning and rock climbing are best in spring and autumn.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do adventure tours cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adventure tour prices in Morocco vary widely. A two-day Toubkal trek costs from 1,500 MAD per person including guide and refuge. Sahara camel treks start from 800 MAD for overnight trips. Surfing lessons cost from 350 MAD for a half-day. Quad biking starts from 400 MAD for two hours. Paragliding tandem flights cost from 800 MAD. Multi-day adventure packages combining activities start from 5,000 MAD for three days. Prices vary by season and group size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for adventure activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A licensed guide is legally required for trekking above 2,000m in the Atlas Mountains and strongly recommended for all desert activities. For rock climbing and canyoning, a qualified guide with proper safety equipment is essential. Surfing can be done independently at established beaches, but lessons are recommended for beginners. Quad biking and paragliding are always done with licensed operators. Hiring local guides also supports community economies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for adventure travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for adventure travel. The country has a well-established tourism industry and licensed guides follow safety protocols. Key precautions include: always use licensed operators with proper insurance, carry adequate water and sun protection, respect altitude and weather conditions in the mountains, inform someone of your itinerary for remote treks, and purchase comprehensive travel insurance that covers adventure activities. Morocco\'s mountain rescue service operates in the Atlas Mountains.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for an adventure trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential items include: sturdy hiking boots (broken in), layered clothing for temperature changes, waterproof jacket, sun hat and high-SPF sunscreen, headlamp, reusable water bottle with purification tablets, basic first aid kit with blister supplies, trekking poles for mountain hikes, quick-dry clothing, and a buff or scarf for desert wind protection. For water activities, bring reef-safe sunscreen and a rash guard. Most specialist gear can be rented from operators.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ADVENTURE ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const adventureActivities = [
  {
    name: 'Atlas Mountain Trekking',
    icon: Mountain,
    difficulty: 'Moderate to Challenging',
    season: 'April-June, Sept-Oct',
    description:
      'The High Atlas offers world-class trekking, from the iconic two-day Toubkal ascent (4,167m, North Africa\'s highest peak) to the week-long M\'Goun traverse through remote Berber villages. The Middle Atlas provides gentler cedar forest trails, while the Anti-Atlas delivers dramatic rocky landscapes with fewer crowds.',
    location: 'High Atlas, Middle Atlas, Anti-Atlas',
    price: 'From 1,500 MAD for 2-day Toubkal trek with guide and refuge',
  },
  {
    name: 'Sahara Sandboarding',
    icon: Wind,
    difficulty: 'Easy to Moderate',
    season: 'Oct-April (cooler months)',
    description:
      'Ride the golden dunes of Erg Chebbi near Merzouga or Erg Chigaga near M\'Hamid. Dunes reach heights of 150 meters, providing thrilling descents on specially waxed boards. Most desert camps include sandboarding as part of overnight Sahara experiences. No prior experience needed, though snowboard or skateboard skills help.',
    location: 'Erg Chebbi (Merzouga), Erg Chigaga (M\'Hamid)',
    price: 'From 200 MAD for sandboarding session, from 800 MAD with overnight camp',
  },
  {
    name: 'Surfing & Kitesurfing',
    icon: Waves,
    difficulty: 'Easy (lessons) to Expert',
    season: 'Surfing: Sept-April, Kite: April-Oct',
    description:
      'Morocco\'s 3,500km Atlantic coastline delivers consistent swells year-round. Taghazout near Agadir is the surf capital, with breaks for all levels from gentle Panoramas to the legendary Anchor Point. Essaouira and Dakhla are world-class kitesurfing destinations, with Dakhla\'s lagoon offering flat-water perfection and reliable 20+ knot winds.',
    location: 'Taghazout, Essaouira, Dakhla, Imsouane, Sidi Kaouki',
    price: 'From 350 MAD for half-day surf lesson, from 1,200 MAD for kite course',
  },
  {
    name: 'Quad Biking & Buggy Tours',
    icon: Compass,
    difficulty: 'Easy to Moderate',
    season: 'Year-round (avoid summer midday)',
    description:
      'Explore Marrakech\'s Palmeraie, the Agafay Desert, or the dunes of Merzouga on powerful quad bikes or dune buggies. Routes wind through palm groves, rocky trails, and open desert. The Agafay stone desert, just 45 minutes from Marrakech, offers a dramatic moonscape experience without traveling to the Sahara.',
    location: 'Marrakech Palmeraie, Agafay Desert, Merzouga, Ouarzazate',
    price: 'From 400 MAD for 2-hour quad session',
  },
  {
    name: 'Camel Trekking',
    icon: Sun,
    difficulty: 'Easy',
    season: 'Oct-April (cooler months)',
    description:
      'The quintessential Sahara experience. Ride dromedary camels across golden dunes at sunset, spend the night in a traditional desert camp under a billion stars, and wake to sunrise over the sand sea. Multi-day treks penetrate deeper into the desert, reaching nomad camps and remote oases far from tourist routes.',
    location: 'Merzouga, M\'Hamid, Zagora, Ouarzazate region',
    price: 'From 800 MAD for overnight camel trek with camp',
  },
  {
    name: 'Rock Climbing & Canyoning',
    icon: Mountain,
    difficulty: 'Moderate to Expert',
    season: 'March-May, Sept-Nov',
    description:
      'Todra Gorge is Morocco\'s premier climbing destination, with over 300 bolted routes on limestone walls reaching 300 meters. Routes range from beginner-friendly 5a to extreme 8b+. Canyoning in the Akchour waterfalls (Rif Mountains) and Cascades d\'Ouzoud combines rappelling, swimming, and scrambling through stunning gorges.',
    location: 'Todra Gorge, Taghia Canyon, Akchour, Dades Gorge',
    price: 'From 500 MAD for guided half-day climbing, from 700 MAD for canyoning',
  },
  {
    name: 'Paragliding',
    icon: Wind,
    difficulty: 'Easy (tandem) to Expert',
    season: 'Year-round (best March-Oct)',
    description:
      'Soar above the Atlantic coastline or Atlas Mountain valleys on tandem paragliding flights. Agadir and Imi-n-Tanout near Marrakech are the main launch sites, offering 20-40 minute flights with breathtaking panoramic views. Experienced pilots can find thermals in the Atlas foothills for cross-country flights of several hours.',
    location: 'Agadir, Imi-n-Tanout, Aguergour, Bin El Ouidane',
    price: 'From 800 MAD for tandem flight',
  },
  {
    name: 'Mountain Biking',
    icon: Bike,
    difficulty: 'Moderate to Challenging',
    season: 'March-June, Sept-Nov',
    description:
      'The Atlas Mountains and desert fringes provide exceptional mountain biking terrain. Singletrack trails wind through Berber villages, over mountain passes, and along ancient caravan routes. The Saghro Massif and Dades Valley offer multi-day bike-packing routes with dramatic scenery and minimal traffic. Marrakech day trips explore the Ourika Valley or Agafay Desert.',
    location: 'High Atlas, Jebel Saghro, Dades Valley, Ourika Valley',
    price: 'From 600 MAD for guided day ride with bike rental',
  },
  {
    name: 'Zip-Lining',
    icon: Sparkles,
    difficulty: 'Easy',
    season: 'Year-round',
    description:
      'Terres d\'Amanar near Marrakech offers Morocco\'s most popular zip-line park, with lines stretching across Atlas Mountain valleys at heights of up to 100 meters. The Aventura Sidi Fares near Tangier and Ouzoud area also provide aerial adventure courses combining zip-lines, rope bridges, and via ferrata elements.',
    location: 'Terres d\'Amanar (Marrakech), Ouzoud, Tangier region',
    price: 'From 300 MAD for zip-line course',
  },
  {
    name: 'Caving & Speleology',
    icon: Compass,
    difficulty: 'Moderate to Expert',
    season: 'Year-round',
    description:
      'Morocco\'s karst limestone landscapes conceal vast cave systems. Friouato Cave near Taza is Africa\'s deepest at 271 meters, with guided tours descending 520 steps into chambers filled with stalactites. Hercules Cave near Tangier opens to the Atlantic. Win Timdouine in the High Atlas is Africa\'s longest cave system at over 19 kilometers.',
    location: 'Friouato (Taza), Hercules Cave (Tangier), Win Timdouine (Atlas)',
    price: 'From 100 MAD for guided cave visits, from 500 MAD for speleology',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ADVENTURE REGIONS
   ═══════════════════════════════════════════════════════════════ */

const adventureRegions = [
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas-mountains.webp',
    description:
      'Morocco\'s adventure backbone stretching 2,500km across the country. The High Atlas contains Toubkal (4,167m) and M\'Goun (4,071m), offering world-class trekking, climbing, mountain biking, and ski touring. The Middle Atlas provides cedar-forested trails and lake kayaking. Remote villages serve as base camps for multi-day expeditions.',
    activities: ['Trekking', 'Rock climbing', 'Mountain biking', 'Zip-lining', 'Ski touring', 'Paragliding'],
  },
  {
    name: 'Sahara Desert',
    icon: Sun,
    image: '/images/hero-sahara-desert.webp',
    description:
      'The world\'s largest hot desert reaches into southeastern Morocco with two major sand seas. Erg Chebbi near Merzouga features dunes up to 150m tall, while Erg Chigaga is more remote and vast. Beyond sandboarding and camel trekking, the Sahara offers quad biking, 4x4 rallies, ultra-marathons (Marathon des Sables), and stargazing in some of Earth\'s darkest skies.',
    activities: ['Camel trekking', 'Sandboarding', 'Quad biking', '4x4 expeditions', 'Stargazing', 'Ultra-marathons'],
  },
  {
    name: 'Atlantic Coast',
    icon: Waves,
    image: '/images/hero-essaouira-coast.webp',
    description:
      'Over 3,500km of coastline delivers consistent swells, trade winds, and warm water. Taghazout is the surf capital, Essaouira the windsport hub, and Dakhla the kitesurfing paradise. Between sessions, explore coastal cliffs, sea kayak to hidden beaches, or paddleboard along sheltered bays. The coast also offers deep-sea fishing and whale watching.',
    activities: ['Surfing', 'Kitesurfing', 'Sea kayaking', 'Paddleboarding', 'Deep-sea fishing', 'Coastal hiking'],
  },
  {
    name: 'Rif Mountains',
    icon: Globe,
    image: '/images/hero-chefchaouen.webp',
    description:
      'Northern Morocco\'s rugged Rif range remains off the main tourist trail, offering pristine hiking through cannabis-terraced valleys, Mediterranean forest, and dramatic gorges. The Akchour waterfalls provide canyoning opportunities, while Talassemtane National Park harbors rare Moroccan fir. Chefchaouen serves as the gateway to Rif adventures.',
    activities: ['Hiking', 'Canyoning', 'Caving', 'Trail running', 'Bird watching', 'Wild swimming'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MULTI-DAY ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const multiDayItineraries = [
  {
    name: '3-Day Atlas & Desert Express',
    duration: '3 days',
    difficulty: 'Moderate',
    description:
      'Combine mountain and desert in one action-packed trip. Day 1: Hike in the Ourika Valley with waterfall scrambling. Day 2: Cross the Tizi n\'Tichka pass to Ait Benhaddou, continue to Merzouga. Day 3: Sunrise camel trek, sandboarding on Erg Chebbi dunes, return via Todra Gorge.',
    price: 'From 4,500 MAD per person (group of 4)',
    highlights: ['Ourika Valley hike', 'Ait Benhaddou visit', 'Sahara camel trek', 'Sandboarding', 'Todra Gorge'],
  },
  {
    name: '5-Day Toubkal Circuit Trek',
    duration: '5 days',
    difficulty: 'Challenging',
    description:
      'The ultimate High Atlas trekking experience. Begin in Imlil, traverse the Azzaden Valley through remote Berber villages, cross the Tizi n\'Ouanoums pass (3,664m), summit Toubkal (4,167m), and descend through the Neltner refuge. Stunning views, mountain wildlife, and genuine Berber hospitality throughout.',
    price: 'From 6,000 MAD per person including guide, mules, meals',
    highlights: ['Toubkal summit (4,167m)', 'Azzaden Valley', 'Berber villages', 'Mountain refuges', 'Alpine scenery'],
  },
  {
    name: '7-Day Adventure Grand Tour',
    duration: '7 days',
    difficulty: 'Moderate to Challenging',
    description:
      'Morocco\'s greatest hits for adrenaline seekers. Day 1-2: Surf camp in Taghazout. Day 3: Paragliding over Agadir coast. Day 4: Drive to Sahara via Draa Valley. Day 5: Camel trek and sandboarding at Erg Chebbi. Day 6: Rock climbing at Todra Gorge. Day 7: Mountain biking in the Dades Valley.',
    price: 'From 12,000 MAD per person (all inclusive)',
    highlights: ['Atlantic surfing', 'Paragliding flight', 'Sahara overnight', 'Rock climbing', 'Mountain biking', 'Dades Valley'],
  },
  {
    name: '4-Day M\'Goun Traverse',
    duration: '4 days',
    difficulty: 'Challenging',
    description:
      'Trek across Morocco\'s second-highest peak (4,071m) through the central High Atlas. The route follows the M\'Goun river valley, crosses high passes above 3,500m, and visits communities rarely seen by tourists. Wild camping or village homestays. This is remote, genuine adventure trekking at its finest.',
    price: 'From 5,500 MAD per person including guide, mules, meals',
    highlights: ['M\'Goun summit (4,071m)', 'Remote Berber villages', 'High-altitude passes', 'River valley camping', 'Zero crowds'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR OPERATORS
   ═══════════════════════════════════════════════════════════════ */

const tourOperators = [
  {
    name: 'Toubkal Guide Bureau',
    specialty: 'Atlas Mountain trekking',
    description: 'The official guide bureau in Imlil, providing licensed mountain guides for Toubkal and surrounding treks. All guides are certified and know the terrain intimately. The most reliable option for High Atlas expeditions.',
    priceRange: 'From 500 MAD per day per guide',
    rating: 4.8,
  },
  {
    name: 'Surf Berbere (Taghazout)',
    specialty: 'Surfing & surf camps',
    description: 'Established surf school and camp in Taghazout offering lessons, guiding, board rental, and week-long surf packages. Experienced local instructors, good safety record, and accommodation included in packages.',
    priceRange: 'From 350 MAD for lessons, from 4,000 MAD per week package',
    rating: 4.7,
  },
  {
    name: 'Dakhla Attitude',
    specialty: 'Kitesurfing & water sports',
    description: 'Premier kitesurfing center on Dakhla\'s lagoon with IKO-certified instructors. Equipment rental, courses from beginner to advanced, and all-inclusive kite camp packages. The lagoon\'s flat water and steady wind make it one of the world\'s best learning spots.',
    priceRange: 'From 1,200 MAD for beginner course, from 8,000 MAD per week',
    rating: 4.9,
  },
  {
    name: 'Climbing Morocco (Todra)',
    specialty: 'Rock climbing & canyoning',
    description: 'Specialist climbing operator based in Todra Gorge with qualified guides for all abilities. Over 300 routes available from beginner to expert. Equipment provided. Also runs canyoning trips in surrounding gorges.',
    priceRange: 'From 500 MAD for half-day climbing, from 700 MAD for canyoning',
    rating: 4.6,
  },
  {
    name: 'Wilderness Wheels Morocco',
    specialty: 'Mountain biking & cycling tours',
    description: 'Guided mountain biking expeditions across the Atlas and desert regions. Quality bikes provided, support vehicle on multi-day trips, and routes tailored to fitness levels. Popular day trips from Marrakech and multi-day Saghro traverses.',
    priceRange: 'From 600 MAD for day ride, from 7,000 MAD for 5-day tour',
    rating: 4.5,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL ACTIVITY CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalCalendar = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    activities: 'Trekking, rock climbing, mountain biking, canyoning, paragliding',
    description: 'The best all-round adventure season. Snow melts from Atlas passes, wildflowers bloom, and temperatures are perfect for physical activity. The Sahara is still comfortable before summer heat. Waterfalls at peak flow for canyoning.',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    activities: 'High-altitude trekking, surfing, kitesurfing, caving',
    description: 'Too hot for desert and lowland activities, but ideal for high Atlas trekking above 3,000m. Atlantic coast activities thrive with trade winds for kitesurfing. Caves offer cool refuge. Plan morning activities and avoid midday heat.',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    activities: 'Trekking, surfing, sandboarding, mountain biking, climbing',
    description: 'Another excellent season as temperatures cool. Atlantic swells build for surfers. The desert becomes accessible again. Clear mountain skies and comfortable temperatures make this peak trekking and climbing season.',
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    activities: 'Surfing, sahara camping, ski touring, camel trekking',
    description: 'Atlantic surfing hits its peak with powerful northwest swells. The Sahara is cool and pleasant for extended camping. Oukaimeden ski resort opens for skiing and snowboarding. High passes are snow-covered, limiting mountain trekking routes.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingCategories = [
  {
    category: 'Mountain Trekking',
    icon: Mountain,
    items: [
      'Sturdy hiking boots (broken in)',
      'Layered clothing (temperatures drop drastically at altitude)',
      'Waterproof shell jacket and pants',
      'Trekking poles (essential for steep descents)',
      'Headlamp with spare batteries',
      'Sleeping bag rated to -5C for refuge stays',
      'Blister kit and basic first aid',
      'Water purification tablets',
    ],
  },
  {
    category: 'Desert Adventures',
    icon: Sun,
    items: [
      'Lightweight, loose-fitting long sleeves',
      'Wide-brim hat and high-SPF sunscreen (50+)',
      'Buff or scarf for sand and wind protection',
      'Closed-toe sandals or lightweight boots',
      'Reusable water bottle (min. 2 liters)',
      'Warm layer for cold desert nights',
      'Sand-proof bag for electronics',
      'Headlamp for camp and night walks',
    ],
  },
  {
    category: 'Water Sports',
    icon: Waves,
    items: [
      'Rash guard or wetsuit (water is cool year-round)',
      'Reef-safe sunscreen',
      'Water shoes or surf booties',
      'Dry bag for valuables',
      'Towel (microfiber for travel)',
      'Board shorts or swimwear',
      'Waterproof phone case',
      'Post-surf warm layers for coastal wind',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAdventureToursPage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Adventure Tours</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Adventure Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Adventure Tours:
            <br className="hidden md:block" /> Trekking, Surfing &amp; Outdoor Holidays
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the snow-capped Atlas peaks to golden Sahara dunes and crashing Atlantic surf.
            Your complete guide to adventure travel in Morocco with activities, prices, and itineraries.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a World-Class Adventure Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco packs an extraordinary diversity of landscapes into a country the size of
                California. Within a single day, you can trek through snow-dusted Atlas passes at
                4,000 meters, descend to palm-filled oases, and watch the sun set over Saharan sand
                dunes. Add a 3,500-kilometer Atlantic coastline delivering world-class surf, and you
                have one of the planet&apos;s most versatile adventure playgrounds.
              </p>
              <p>
                What makes Morocco stand apart from other adventure destinations is accessibility.
                Just three hours from Europe, with well-developed tourism infrastructure, experienced
                local guides, and prices that make multi-day expeditions affordable, Morocco delivers
                genuine adventure without requiring an expedition-level budget or months of planning.
                Whether you are a first-time trekker or an experienced climber, a beginner surfer or
                an advanced kitesurfer, Morocco has terrain and conditions to challenge and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Adventure Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Adventure Activities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From high-altitude trekking to desert sandboarding, Morocco offers adrenaline for every level.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and vary by season, group size, and operator. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adventureActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          {activity.difficulty}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {activity.season}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{activity.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{activity.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Adventure Regions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Adventure Regions in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four distinct landscapes, each offering unique outdoor experiences and unforgettable scenery.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {adventureRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={region.image}
                      alt={`Adventure activities in the ${region.name} region of Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <RegionIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {region.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{region.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {region.activities.map((act) => (
                        <span
                          key={act}
                          className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Multi-Day Adventure Itineraries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Multi-Day Adventure Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Curated multi-day routes that combine Morocco&apos;s best adventure experiences into unforgettable trips.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person based on group travel. Solo travelers and peak season may cost more. Seasonal pricing can change.
          </p>

          <div className="space-y-6">
            {multiDayItineraries.map((itinerary) => (
              <div key={itinerary.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {itinerary.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {itinerary.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {itinerary.difficulty}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 ml-4">
                    {itinerary.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{itinerary.description}</p>
                <div className="flex flex-wrap gap-2">
                  {itinerary.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-[var(--surface-muted)] text-[var(--text-muted)]"
                    >
                      <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tour Operators ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recommended Adventure Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Licensed, experienced operators with proven safety records and fair pricing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and may vary by season, group size, and activity duration. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourOperators.map((op) => (
              <div key={op.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {op.specialty}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-gold)]">
                    <Star className="w-3 h-3 fill-current" />
                    {op.rating}
                  </div>
                </div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {op.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{op.description}</p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold">
                  <DollarSign className="w-3 h-3" />
                  {op.priceRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Calendar ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Each Activity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers year-round adventure, but timing your trip to the right season makes all the difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalCalendar.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Best for:</strong> {season.activities}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fitness & Difficulty Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fitness Requirements &amp; Difficulty Levels
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Honest assessments to help you choose the right adventure for your fitness level.
          </p>

          <div className="space-y-4">
            {[
              {
                level: 'Easy -- No Experience Required',
                icon: CheckCircle,
                activities: 'Camel trekking, sandboarding, zip-lining, beginner surf lessons, quad biking, guided cave visits',
                description: 'Suitable for anyone with basic mobility. No prior fitness training needed. Operators provide all instruction and safety equipment. Children welcome on most easy activities.',
              },
              {
                level: 'Moderate -- Basic Fitness Needed',
                icon: Shield,
                activities: 'Day hikes in the Atlas, mountain biking day trips, canyoning, intermediate surfing, tandem paragliding',
                description: 'You should be able to walk 4-6 hours on uneven terrain or sustain moderate physical effort. Some prior experience with the activity helps but is not essential. A few weeks of preparation walking or cycling improves enjoyment.',
              },
              {
                level: 'Challenging -- Good Fitness Required',
                icon: Mountain,
                activities: 'Toubkal ascent, M\'Goun traverse, multi-day treks, advanced rock climbing, endurance mountain biking',
                description: 'Requires 6-8 hours of sustained physical effort per day, often at altitude. Prior trekking or climbing experience strongly recommended. Train with cardio and hill walking for at least 4-6 weeks before the trip. Altitude acclimatization days are built into itineraries.',
              },
              {
                level: 'Expert -- Specialist Skills Required',
                icon: AlertTriangle,
                activities: 'Multi-pitch rock climbing (Taghia), advanced speleology, solo high-altitude trekking, big wave surfing',
                description: 'Requires certified qualifications or extensive experience. These activities carry inherent risks and demand technical knowledge, proper equipment, and physical conditioning. Always engage qualified local guides even if experienced.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.level} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.level}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                      <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span><strong>Activities:</strong> {item.activities}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Adventure Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential safety advice to ensure your Moroccan adventure stays thrilling for the right reasons.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: 'Use Licensed Operators Only',
                text: 'Always verify that your guide or operator holds a valid Moroccan tourism license. For mountain trekking above 2,000m, licensed guides are legally required. Ask to see credentials before departing. Licensed operators carry liability insurance and follow safety protocols.',
              },
              {
                icon: Heart,
                title: 'Get Adventure Travel Insurance',
                text: 'Standard travel insurance rarely covers adventure activities. Purchase a policy that specifically lists your planned activities (trekking above 3,000m, rock climbing, surfing, etc.). Ensure medical evacuation coverage for remote mountain areas. World Nomads and Allianz offer suitable adventure policies.',
              },
              {
                icon: Sun,
                title: 'Respect the Sun and Heat',
                text: 'Morocco\'s UV index is extreme, especially at altitude and in the desert. Apply SPF 50+ sunscreen every two hours, wear a wide-brim hat, and carry at least two liters of water per person. Start desert and lowland activities early morning or late afternoon to avoid peak heat.',
              },
              {
                icon: Mountain,
                title: 'Acclimatize for Altitude',
                text: 'Altitude sickness can affect anyone above 2,500m. On Toubkal treks, spend a night at the Neltner refuge (3,200m) before the summit attempt. Drink plenty of water, avoid alcohol, ascend gradually, and descend immediately if you experience severe headache, nausea, or disorientation.',
              },
              {
                icon: Users,
                title: 'Never Adventure Alone in Remote Areas',
                text: 'Always inform someone of your itinerary when heading into the mountains or desert. Carry a fully charged phone (Maroc Telecom has the best rural coverage). Consider a satellite communicator for remote treks. Travel with companions or hire a local guide.',
              },
              {
                icon: CheckCircle,
                title: 'Check Equipment Before Starting',
                text: 'Inspect all rental equipment before use: harnesses, helmets, bikes, boards, and safety gear. Reputable operators maintain their equipment well, but a quick personal check is always wise. Bring your own helmet for climbing and cycling if possible.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Adventure Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Specialized packing lists for each type of Moroccan adventure. Most equipment can be rented from operators.
          </p>

          <div className="space-y-6">
            {packingCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best adventure activities in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco offers an incredible range of adventure activities including trekking in the Atlas
                Mountains (Toubkal and M&apos;Goun), sandboarding and camel trekking in the Sahara Desert,
                surfing and kitesurfing on the Atlantic coast, canyoning in Todra Gorge, rock climbing,
                paragliding near Agadir, quad biking, mountain biking, zip-lining, and caving in the Rif Mountains.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How fit do I need to be for trekking Jebel Toubkal?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Toubkal (4,167m) requires moderate to good fitness. The standard two-day ascent involves
                6-8 hours of hiking per day over rocky terrain with significant altitude gain. No technical
                climbing is needed, but you should be comfortable walking uphill for extended periods and
                be prepared for altitude effects above 3,000m. Prior hiking experience at altitude is recommended.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time for adventure activities in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The best time depends on the activity. Atlas Mountain trekking is best April to June and
                September to October. Surfing peaks September to April. Sahara adventures are best October
                to April when temperatures are manageable. Kitesurfing is ideal April to October with
                strong trade winds. Spring and autumn are the most versatile seasons for combining activities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do adventure tours cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Prices vary by activity and season. A two-day Toubkal trek costs from 1,500 MAD per person
                including guide and refuge. Sahara camel treks start from 800 MAD overnight. Surfing lessons
                cost from 350 MAD for a half-day. Quad biking starts from 400 MAD. Multi-day packages combining
                activities start from 5,000 MAD for three days. Seasonal pricing can change with demand.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a guide for adventure activities in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A licensed guide is legally required for trekking above 2,000m in the Atlas Mountains and
                strongly recommended for all desert activities. For rock climbing and canyoning, a qualified
                guide with proper safety equipment is essential. Surfing can be done independently at
                established beaches. Quad biking and paragliding always require licensed operators.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for adventure travel?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is generally safe for adventure travel with a well-established tourism industry.
                Key precautions include using licensed operators with insurance, carrying adequate water
                and sun protection, respecting altitude and weather conditions, informing someone of your
                itinerary, and purchasing comprehensive travel insurance that covers adventure activities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I pack for an adventure trip to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Essential items include sturdy hiking boots, layered clothing, waterproof jacket, sun hat
                and high-SPF sunscreen, headlamp, reusable water bottle with purification tablets, first
                aid kit, trekking poles, and quick-dry clothing. For water activities, bring reef-safe
                sunscreen and a rash guard. Most specialist gear can be rented from operators.
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
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to hiking, trekking, and exploring the High, Middle, and Anti-Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-surfing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Surfing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Best surf spots, seasons, camps, and lessons along Morocco&apos;s Atlantic coastline.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-camping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Camping in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Sahara desert camps, mountain bivouacs, and coastal camping spots across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Comprehensive packing guide for every season and activity in Morocco.
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
            Ready for Your Moroccan Adventure?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Atlas summits to Saharan dunes and Atlantic barrels, Morocco&apos;s adventure playground
            awaits. Start planning your outdoor holiday in one of the world&apos;s most diverse destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas Mountains
            </Link>
            <Link
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Plan Your Budget
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
