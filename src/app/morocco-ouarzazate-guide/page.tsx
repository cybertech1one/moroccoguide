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
  Sun,
  Mountain,
  Camera,
  Building,
  Landmark,
  Car,
  Bus,
  Plane,
  Utensils,
  Bed,
  Calendar,
  Thermometer,
  CheckCircle,
  DollarSign,
  Map,
  Eye,
  Compass,
  Shield,
  BookOpen,
  Users,
  HelpCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Ouarzazate Travel Guide 2026 | Gateway to the Sahara & Hollywood of Morocco',
  description:
    'Complete Ouarzazate travel guide: visit Ait Benhaddou UNESCO site, Atlas Film Studios, Taourirt Kasbah, and Fint Oasis. Practical info on hotels, restaurants, getting there from Marrakech, best time to visit, and day trips to Dades & Todra Gorge.',
  keywords: [
    'ouarzazate morocco',
    'ouarzazate travel guide',
    'ait benhaddou',
    'atlas film studios ouarzazate',
    'ouarzazate things to do',
    'taourirt kasbah',
    'fint oasis ouarzazate',
    'ouarzazate hotels',
    'ouarzazate restaurants',
    'tizi n tichka pass',
    'ouarzazate sahara gateway',
    'hollywood of morocco',
    'dades gorge from ouarzazate',
    'todra gorge from ouarzazate',
    'draa valley day trip',
    'ouarzazate film studios',
    'CLA studios ouarzazate',
    'ouarzazate weather',
    'marrakech to ouarzazate',
    'ouarzazate best time to visit',
  ],
  openGraph: {
    title: 'Ouarzazate Travel Guide 2026 | Gateway to the Sahara & Hollywood of Morocco',
    description:
      'Explore Ouarzazate: Ait Benhaddou UNESCO site, Atlas Film Studios, Taourirt Kasbah, Fint Oasis. Hotels, restaurants, day trips to Dades & Todra Gorge, and how to get there over Tizi n\'Tichka pass.',
    url: `${BASE_URL}/morocco-ouarzazate-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-ouarzazate.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Ouarzazate with kasbahs and the Atlas Mountains in the background under golden light',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ouarzazate Travel Guide 2026 | Sahara Gateway & Film Capital',
    description:
      'Ait Benhaddou, Atlas Film Studios, Taourirt Kasbah, Fint Oasis. Complete guide with hotels, restaurants, transport, and day trips from Ouarzazate.',
    images: [`${BASE_URL}/images/hero-ouarzazate.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-ouarzazate-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-ouarzazate-guide`,
  name: 'Ouarzazate Travel Guide 2026 | Gateway to the Sahara & Hollywood of Morocco',
  description:
    'Complete Ouarzazate travel guide covering Ait Benhaddou, Atlas Film Studios, Taourirt Kasbah, Fint Oasis, hotels, restaurants, transport, and day trips to Dades & Todra Gorge.',
  url: `${BASE_URL}/morocco-ouarzazate-guide`,
  image: `${BASE_URL}/images/hero-ouarzazate.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-ouarzazate-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Ouarzazate',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ouarzazate Travel Guide', item: `${BASE_URL}/morocco-ouarzazate-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get from Marrakech to Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular route is the N9 highway over the Tizi n\'Tichka pass (2,260m). The drive takes 4-4.5 hours by car or 5 hours by CTM/Supratours bus. Shared grands taxis also run the route. Ouarzazate has a small airport (OZZ) with seasonal flights from Casablanca and Paris.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need in Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two full days covers the main sights: Ait Benhaddou, Atlas Film Studios, and Taourirt Kasbah. Three to four days lets you add Fint Oasis, the Draa Valley, or a day trip toward Dades or Todra Gorge. Many travelers use Ouarzazate as an overnight stop on a larger desert circuit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ait Benhaddou worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Ait Benhaddou is a UNESCO World Heritage Site and one of Morocco\'s most photogenic locations. The fortified village (ksar) served as a backdrop for Gladiator, Game of Thrones, and Lawrence of Arabia. Budget at least 2 hours for exploration and photography.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) offer the most comfortable temperatures, with daytime highs around 25-30°C. Summer exceeds 40°C regularly. Winter days are mild (15-20°C) but nights drop below 5°C. Spring also brings almond blossoms to the surrounding valleys.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Atlas Film Studios without a tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Atlas Film Studios (also called Atlas Corporation Studios) is open to independent visitors daily. Entry costs from 50 MAD. You can walk through sets from movies like Gladiator, Kingdom of Heaven, and Cleopatra. A local guide at the gate costs from 100 MAD extra and adds context to the visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ouarzazate safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ouarzazate is one of the safest cities in Morocco for tourists. It has far less hustle than Marrakech or Fes, and locals are accustomed to international visitors because of the film industry. Standard travel precautions apply, but violent crime against tourists is extremely rare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What movies were filmed in Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major productions include Gladiator (2000), Lawrence of Arabia (1962), Game of Thrones (HBO series), The Mummy (1999), Kingdom of Heaven (2005), Babel (2006), Prince of Persia (2010), and Ben-Hur (2016). The city has hosted over 200 international film and TV productions since the 1960s.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ATTRACTIONS
   ═══════════════════════════════════════════════════════════════ */

const topAttractions = [
  {
    name: 'Ait Benhaddou (UNESCO World Heritage Site)',
    icon: Landmark,
    distance: '30 km west of Ouarzazate',
    duration: '2-3 hours',
    price: 'Free entry (guides from 150 MAD)',
    description:
      'This fortified ksar along the former caravan route between the Sahara and Marrakech is Morocco\'s most iconic mud-brick village. Six families still live inside. The granary at the summit offers sweeping views of the Ounila Valley. Cross the shallow river on foot or use the footbridge — locals will offer to carry your shoes for a tip.',
    filmCredits: 'Gladiator, Game of Thrones (Yunkai), Lawrence of Arabia, The Mummy, Kingdom of Heaven',
    tips: 'Arrive before 9 AM or after 4 PM for the best photography light. The kasbah faces east, so morning sun illuminates the facade beautifully.',
  },
  {
    name: 'Atlas Film Studios (Atlas Corporation Studios)',
    icon: Camera,
    distance: '5 km northwest of center',
    duration: '1.5-2 hours',
    price: 'From 50 MAD (guide from 100 MAD)',
    description:
      'The largest film studio in Africa, spanning over 30,000 square meters. Walk through standing sets from Gladiator\'s Roman Senate, the Egyptian temple from The Mummy, and Cleopatra\'s palace. Some sets are actively used for productions. Founded in 1983 by Mohamed Belghmi, the studio has hosted over 200 productions.',
    filmCredits: 'Gladiator, The Mummy, Cleopatra (1999), Asterix & Obelix: Mission Cleopatra',
    tips: 'Photography is allowed everywhere except active production areas. The gift shop sells movie posters and props replicas.',
  },
  {
    name: 'CLA Studios (Cinéma Lieu d\'Art)',
    icon: Camera,
    distance: '7 km northwest of center',
    duration: '1-1.5 hours',
    price: 'From 40 MAD',
    description:
      'The second major studio complex in Ouarzazate, built for Ridley Scott\'s Kingdom of Heaven in 2004. Features a reconstructed medieval Jerusalem and a Tibetan monastery set used for Kundun. Smaller and quieter than Atlas Studios, which makes for a more relaxed visit. Some travelers prefer CLA because it feels less touristy.',
    filmCredits: 'Kingdom of Heaven, Kundun, Ben-Hur (2016), Prison Break (TV series)',
    tips: 'Combine CLA and Atlas Studios in one morning. Both are on the same road northwest of town.',
  },
  {
    name: 'Taourirt Kasbah',
    icon: Building,
    distance: 'City center',
    duration: '1-1.5 hours',
    price: 'From 20 MAD',
    description:
      'A sprawling 19th-century kasbah built by the powerful Glaoui family, who controlled the trade routes from the Sahara. Partially restored by UNESCO, the interior features ornate stucco ceilings, painted cedar wood, and zellige tilework. The rooftop terrace gives a panoramic view of the city and the Atlas Mountains beyond.',
    filmCredits: 'Used as a location for several Moroccan and international productions',
    tips: 'Spend time in the small artisan cooperative next door, where Berber women weave traditional carpets.',
  },
  {
    name: 'Fint Oasis',
    icon: Sun,
    distance: '15 km south of Ouarzazate',
    duration: '2-3 hours',
    price: 'Free (4WD recommended)',
    description:
      'A hidden palm oasis carved into a dramatic red canyon. Far fewer tourists visit Fint compared to the film studios, making it one of Ouarzazate\'s best-kept secrets. Date palms, almond trees, and small farms line the riverbed. The approach road passes through barren desert landscape, making the sudden green all the more striking.',
    filmCredits: 'Parts of The Hills Have Eyes were filmed in the surrounding desert',
    tips: 'Hire a 4WD or take a taxi from Ouarzazate (negotiate from 200 MAD round trip with wait time). The last 3 km of road are unpaved.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Dades Gorge',
    icon: Mountain,
    distance: '110 km east (1.5 hours)',
    description:
      'A spectacular canyon carved by the Dades River through the High Atlas. The famous "Road of a Thousand Kasbahs" leads here from Ouarzazate through Skoura and Kelaat M\'Gouna (the "Valley of Roses"). The gorge narrows to dramatic switchbacks that make for incredible photographs. Overnight stays in cliffside guesthouses are popular.',
    highlight: 'Visit in May during the rose harvest festival in Kelaat M\'Gouna.',
  },
  {
    name: 'Todra Gorge',
    icon: Mountain,
    distance: '160 km east (2 hours)',
    description:
      'Morocco\'s most famous gorge — a 300-meter-deep slot canyon only 10 meters wide at its narrowest point. Rock climbers come from around the world for the limestone walls. A paved road runs through the gorge floor. The town of Tinghir, 15 km before the gorge, has a beautiful palmery and traditional Jewish quarter worth a stop.',
    highlight: 'Early morning light hits the canyon walls perfectly between 8-10 AM.',
  },
  {
    name: 'Draa Valley',
    icon: Compass,
    distance: '90 km south (1.5 hours via N10)',
    description:
      'The longest river valley in Morocco stretches south from Ouarzazate toward Zagora. Date palms, mud-brick ksour, and oasis villages line the road. Agdz and Tamnougalt are key stops along the way. Zagora — the traditional starting point for 52-day camel treks to Timbuktu — sits at the valley\'s southern end.',
    highlight: 'The palmeries between Agdz and Zagora are most photogenic in late afternoon.',
  },
  {
    name: 'Skoura Palmery & Amerhidil Kasbah',
    icon: Building,
    distance: '42 km east (40 minutes)',
    description:
      'One of Morocco\'s largest palm groves, with over 700,000 palms sheltering olive, fig, and almond trees beneath their canopy. The Amerhidil Kasbah — printed on the 50 MAD banknote — sits inside the palmery. Rent a bike in Skoura village and cycle through the palm-lined paths for a perfect half-day excursion.',
    highlight: 'The Amerhidil Kasbah appears on the Moroccan 50 MAD banknote.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO STAY
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    category: 'Luxury',
    icon: Star,
    options: [
      {
        name: 'Le Berbère Palace',
        price: 'From 1,800 MAD/night',
        description: 'The top hotel in Ouarzazate. Five-star resort with a large pool, garden, hammam, and views of the Atlas Mountains. Popular with film crews during productions.',
      },
      {
        name: 'Ksar Ighnda',
        price: 'From 1,500 MAD/night',
        description: 'A kasbah-style boutique hotel outside town with stunning desert views, infinity pool, and traditional architecture. Quieter alternative to the in-town hotels.',
      },
    ],
  },
  {
    category: 'Mid-Range',
    icon: Bed,
    options: [
      {
        name: 'Riad Salam',
        price: 'From 600 MAD/night',
        description: 'Central location with a pool and reliable service. Good base for day trips. Has hosted film crews for decades.',
      },
      {
        name: 'Dar Chamaa',
        price: 'From 450 MAD/night',
        description: 'A riad-style guesthouse with a courtyard garden, home-cooked meals, and helpful owners who arrange desert excursions.',
      },
    ],
  },
  {
    category: 'Budget',
    icon: DollarSign,
    options: [
      {
        name: 'Hotel La Vallée',
        price: 'From 200 MAD/night',
        description: 'Clean, simple rooms with air conditioning. Walking distance to the center and Taourirt Kasbah. No frills but reliable.',
      },
      {
        name: 'Chez Aïcha Guest House',
        price: 'From 150 MAD/night',
        description: 'A family-run guesthouse offering authentic Berber hospitality. Shared terraces and home-cooked tagines at dinner (from 60 MAD).',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const restaurants = [
  {
    name: 'Restaurant Douyria',
    cuisine: 'Traditional Moroccan',
    price: 'Mains from 60 MAD',
    description: 'A garden restaurant inside a renovated riad. The lamb tagine with prunes and almonds stands out. Reservations recommended in high season.',
  },
  {
    name: 'Chez Dimitri',
    cuisine: 'Moroccan-European',
    price: 'Mains from 80 MAD',
    description: 'Operating since 1928, this is the oldest restaurant in Ouarzazate. Walls covered in photos of actors who dined here during film shoots. The pizza and Moroccan mixed grill both deliver.',
  },
  {
    name: 'Accord Majeur',
    cuisine: 'Moroccan-French Fusion',
    price: 'Mains from 90 MAD',
    description: 'Upscale dining by Ouarzazate standards. Creative dishes blending French technique with local ingredients. The terrace has views over the valley.',
  },
  {
    name: 'La Kasbah des Sables',
    cuisine: 'Traditional Moroccan',
    price: 'Mains from 50 MAD',
    description: 'Hearty Berber-style cooking at fair prices. The couscous on Fridays draws locals and travelers alike. Simple setting but generous portions.',
  },
  {
    name: 'Café-Restaurant 3 Thés',
    cuisine: 'Café & Light Meals',
    price: 'From 25 MAD',
    description: 'Good coffee, fresh juices, and pastries. A morning stop before heading out to the film studios. Free Wi-Fi.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  {
    mode: 'By Car (from Marrakech)',
    icon: Car,
    duration: '4-4.5 hours',
    cost: 'Rental from 300 MAD/day + fuel',
    details:
      'Take the N9 south over the Tizi n\'Tichka pass (2,260 m), the highest paved road pass in North Africa. The road is well-maintained but winding, with over 100 hairpin turns. Stop at the top for panoramic views and Berber vendors selling geodes and fossils. In winter (December-February), snow can temporarily close the pass — check conditions before departing.',
  },
  {
    mode: 'By Bus',
    icon: Bus,
    duration: '5 hours from Marrakech',
    cost: 'From 80 MAD (CTM/Supratours)',
    details:
      'CTM and Supratours operate daily services from Marrakech. CTM runs two departures per day (morning and afternoon). Supratours has one morning departure. Book at least a day ahead in peak season. The bus station is centrally located in Ouarzazate.',
  },
  {
    mode: 'By Grand Taxi',
    icon: Car,
    duration: '4 hours from Marrakech',
    cost: 'From 120 MAD per person (shared)',
    details:
      'Shared grands taxis depart from Marrakech when full (6 passengers). Faster than buses but less comfortable. You can also hire a full taxi privately for from 700 MAD. Grands taxis also connect Ouarzazate with Zagora (2 hours) and Tinghir (2.5 hours).',
  },
  {
    mode: 'By Air',
    icon: Plane,
    duration: '1 hour from Casablanca',
    cost: 'From 800 MAD one-way',
    details:
      'Ouarzazate Airport (OZZ) receives seasonal flights from Casablanca (Royal Air Maroc) and occasional charter flights from European cities. The airport sits 2 km north of the city center. Flight frequency varies by season — check schedules in advance. Most travelers prefer the scenic overland route.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const seasons = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    temp: '20-30°C',
    rating: 'Best',
    description: 'The ideal window. Warm days, cool nights, almond blossoms in the valleys, and green landscapes after winter rains. The rose harvest in Kelaat M\'Gouna (May) adds a spectacular day trip option.',
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    temp: '35-45°C',
    rating: 'Hot',
    description: 'Temperatures regularly exceed 40°C. Sightseeing becomes uncomfortable after 11 AM. If you visit in summer, explore early morning and late afternoon. Hotels offer lower rates. The film studios provide some shade.',
  },
  {
    season: 'Autumn (September - November)',
    icon: Sun,
    temp: '22-32°C',
    rating: 'Excellent',
    description: 'Temperatures ease from the summer peak. October is particularly pleasant. The date harvest in the Draa Valley (October) brings local festivals. Fewer tourists than spring.',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    temp: '5-18°C',
    rating: 'Mild days, cold nights',
    description: 'Daytime temperatures are comfortable for exploring. Nights drop below 5°C — pack warm layers. Snow caps the Atlas Mountains (beautiful backdrops for Ait Benhaddou). The Tizi n\'Tichka pass may close briefly during heavy snowfall.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function OuarzazateGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Ouarzazate Travel Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center hero-overlay">
        <div className="absolute inset-0">
          <img
            src="/images/hero-ouarzazate.webp"
            alt="Panoramic view of Ouarzazate with kasbahs set against the Atlas Mountains at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="container-morocco relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>Draa-Tafilalet Region, Morocco</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
              Ouarzazate Travel Guide
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 font-[family-name:var(--font-heading)]">
              Gateway to the Sahara &amp; Hollywood of Morocco
            </p>
            <p className="text-white/80 max-w-xl leading-relaxed">
              A desert city where ancient kasbahs double as film sets, where the Atlas Mountains meet the Sahara,
              and where the road south leads to Africa&apos;s largest sand sea. Ouarzazate sits at the crossroads of
              Morocco&apos;s most dramatic landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
              Why Visit Ouarzazate?
            </h2>
            <div className="prose max-w-none space-y-4 text-[var(--text-secondary)]">
              <p>
                Ouarzazate (pronounced &quot;war-za-zat&quot;) controls the junction where the High Atlas range gives way to
                the pre-Saharan steppe. The Amazigh (Berber) name translates roughly to &quot;without noise&quot; — and the
                city delivers on that promise. Compared to the sensory overload of Marrakech or Fes, Ouarzazate
                moves at a slower pace, with wide boulevards, clear skies averaging 300 days of sunshine per year, and
                air that smells of dust and wild thyme.
              </p>
              <p>
                The city earned its &quot;Hollywood of Morocco&quot; nickname after filmmakers discovered the region in the 1960s.
                David Lean shot Lawrence of Arabia here in 1962. Since then, Ridley Scott, Martin Scorsese, and HBO have
                all used the kasbahs and desert landscapes as backdrops. Two major studios — Atlas Corporation Studios and
                CLA Studios — operate year-round, and standing sets from Gladiator, Game of Thrones, and Kingdom of Heaven
                remain open to visitors.
              </p>
              <p>
                Beyond the film connection, Ouarzazate serves as the staging point for Morocco&apos;s grand southern circuits.
                The Draa Valley stretches south toward Zagora. The &quot;Road of a Thousand Kasbahs&quot; runs east to the
                Dades and Todra Gorges. And the Erg Chebbi dunes at Merzouga lie a day&apos;s drive further east. For
                travelers crossing the Atlas from Marrakech, Ouarzazate is the first taste of desert Morocco.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="card-moroccan p-4 text-center">
                <Sun className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
                <p className="text-sm font-bold text-[var(--text-primary)]">300+ Sunny Days</p>
                <p className="text-xs text-[var(--text-muted)]">Per year</p>
              </div>
              <div className="card-moroccan p-4 text-center">
                <Mountain className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
                <p className="text-sm font-bold text-[var(--text-primary)]">1,160 m</p>
                <p className="text-xs text-[var(--text-muted)]">Elevation</p>
              </div>
              <div className="card-moroccan p-4 text-center">
                <Camera className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
                <p className="text-sm font-bold text-[var(--text-primary)]">200+ Films</p>
                <p className="text-xs text-[var(--text-muted)]">Shot in the region</p>
              </div>
              <div className="card-moroccan p-4 text-center">
                <Users className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
                <p className="text-sm font-bold text-[var(--text-primary)]">~72,000</p>
                <p className="text-xs text-[var(--text-muted)]">Population</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Attractions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 5 Things to Do in Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From a UNESCO World Heritage ksar to Africa&apos;s largest film studio, these are the sights that put Ouarzazate on the map.
          </p>

          <div className="space-y-8">
            {topAttractions.map((attraction, index) => {
              const AttractionIcon = attraction.icon;
              return (
                <div key={index} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttractionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {attraction.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {attraction.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{attraction.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Camera className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-0.5">Film Credits</p>
                        <p className="text-xs text-[var(--text-muted)]">{attraction.filmCredits}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-primary)] mb-0.5">Tip</p>
                        <p className="text-xs text-[var(--text-muted)]">{attraction.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Ouarzazate ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ouarzazate sits at the hub of southern Morocco&apos;s road network. These four day trips cover the
            region&apos;s most spectacular gorges, valleys, and palmeries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dayTrips.map((trip, index) => {
              const TripIcon = trip.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {trip.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {trip.distance}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{trip.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Highlight:</span> {trip.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Most travelers arrive from Marrakech over the Tizi n&apos;Tichka pass — one of Morocco&apos;s most
            scenic drives. Here are all your options.
          </p>
          <p className="text-center text-xs text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are approximate and may vary by season. Always confirm current schedules.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportOptions.map((option, index) => {
              const TransportIcon = option.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TransportIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.mode}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {option.duration}
                        </span>
                        <span className="inline-block px-2 py-0.5 font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {option.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{option.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tizi n'Tichka Feature Box ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-8 zellige-border">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              <Mountain className="w-7 h-7 inline-block text-[var(--color-accent)] mr-2" />
              The Tizi n&apos;Tichka Pass: What to Expect
            </h2>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                The N9 highway between Marrakech and Ouarzazate crosses the High Atlas at the Tizi n&apos;Tichka pass,
                reaching 2,260 meters. Built by the French Foreign Legion in 1936, the road cuts through 100+ hairpin
                turns and covers 200 km. The landscape shifts dramatically — from olive groves and red earth villages
                on the Marrakech side to barren, rocky terrain descending toward the desert.
              </p>
              <p>
                Expect the drive to take 4 to 4.5 hours without stops. Most travelers stop at least twice: once near the
                summit for photographs and to buy geodes from Berber vendors (from 20 MAD — negotiate), and once at
                a roadside café for mint tea and a view. The final descent into Ouarzazate reveals the city spread across
                the plateau with the El Mansour Eddahbi reservoir glinting to the east.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">Road is paved and well-maintained year-round</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">Fuel up in Marrakech — limited stations en route</p>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">Check winter road conditions (Dec-Feb snow)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay in Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ouarzazate has a smaller hotel scene than Marrakech. Accommodation ranges from five-star resorts
            to simple guesthouses. Most options cluster along Avenue Mohammed V or the road toward the film studios.
          </p>
          <p className="text-center text-xs text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting rates and vary by season. Book ahead during spring and autumn.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((cat, index) => {
              const CatIcon = cat.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <CatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {cat.options.map((hotel, i) => (
                      <div key={i}>
                        <h4 className="text-base font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                          {hotel.name}
                        </h4>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-2">
                          {hotel.price}
                        </span>
                        <p className="text-sm text-[var(--text-secondary)]">{hotel.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Restaurants ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Eat in Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The dining scene here is straightforward — tagines, couscous, and grilled meats dominate menus.
            A few spots offer something more creative. Here are the best options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {restaurant.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span>{restaurant.cuisine}</span>
                  <span className="inline-block px-2 py-0.5 font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {restaurant.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ouarzazate has a semi-arid desert climate. The key decision is avoiding the extreme summer heat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((s, index) => {
              const SeasonIcon = s.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {s.season}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Thermometer className="w-3 h-3" />
                          {s.temp}
                        </span>
                        <span className="inline-block px-2 py-0.5 font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {s.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Ouarzazate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Money & ATMs
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Several ATMs line Avenue Mohammed V in the center. Credit cards are accepted at large hotels and
                restaurants, but smaller guesthouses and rural attractions operate cash-only. Withdraw enough
                dirhams before heading to Ait Benhaddou or the gorges.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Shield className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety & Scams
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ouarzazate has minimal hassle compared to Marrakech. The main thing to watch for: self-appointed
                &quot;guides&quot; at Ait Benhaddou who may follow you and demand payment. Politely decline or
                agree on a fixed price upfront (from 150 MAD for an official guide with badge).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sun Protection
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The UV index in Ouarzazate is extreme, especially April through October. Bring SPF 50+, a wide-brimmed
                hat, and sunglasses. Dehydration creeps up fast in the dry climate — carry at least 1.5 liters
                of water when exploring outdoor sites.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Car className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting Around Locally
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The city center is walkable, but you need transport for the film studios (5-7 km out), Ait Benhaddou
                (30 km), and Fint Oasis (15 km). Petits taxis cost from 10 MAD within town. For day trips,
                hire a driver (from 600 MAD/day) or rent a car. Ait Benhaddou has no public transport connection.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Golden hour transforms the kasbahs. The mud-brick walls glow deep amber at sunrise and sunset.
                Ait Benhaddou faces east — morning light is best for the iconic front-facing shot. The Taourirt
                Kasbah photographs well from the south side at sunset. Carry a lens cloth; dust gets everywhere.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Opening Hours
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Atlas Film Studios: daily 8 AM - 6:15 PM (shorter in winter). CLA Studios: daily 8 AM - 5:30 PM.
                Taourirt Kasbah: daily 8:30 AM - 6 PM. Ait Benhaddou: accessible 24/7 (no gates), but the
                community association collects a voluntary donation during daytime hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get from Marrakech to Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most popular route is the N9 highway over the Tizi n&apos;Tichka pass (2,260 m). The drive takes
                4-4.5 hours by car or 5 hours by CTM/Supratours bus (from 80 MAD). Shared grands taxis also run the
                route (from 120 MAD per person). Ouarzazate has a small airport (OZZ) with seasonal flights from
                Casablanca and Paris.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many days do I need in Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Two full days covers the main sights: Ait Benhaddou, Atlas Film Studios, and Taourirt Kasbah. Three
                to four days lets you add Fint Oasis, the Draa Valley, or a day trip toward Dades or Todra Gorge.
                Many travelers use Ouarzazate as an overnight stop on a larger Marrakech-to-Merzouga desert circuit.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Ait Benhaddou worth visiting?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Without question. Ait Benhaddou is a UNESCO World Heritage Site and one of Morocco&apos;s most
                photogenic locations. The fortified ksar served as a backdrop for Gladiator, Game of Thrones (as
                the city of Yunkai), and Lawrence of Arabia. Budget at least 2 hours to explore the village, climb
                to the granary at the top, and take photographs.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March to May) and autumn (September to November) deliver the best conditions. Daytime
                temperatures sit around 25-30°C with cool evenings. Summer regularly exceeds 40°C. Winter days are
                mild (15-20°C), but nights drop below 5°C and the Tizi n&apos;Tichka pass may close during snowfall.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Atlas Film Studios without a tour?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Atlas Film Studios is open daily to independent visitors. Entry costs from 50 MAD. You can
                walk through standing sets from Gladiator, The Mummy, and Cleopatra at your own pace. A local
                guide at the entrance costs from 100 MAD extra and adds useful context about which scenes were
                shot where.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Ouarzazate safe for tourists?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ouarzazate ranks among the safest cities in Morocco for travelers. The film industry has brought
                decades of international visitors, so locals are accustomed to foreigners. There is far less hustle
                than Marrakech or Fes. Standard precautions apply — keep valuables secure and agree on taxi fares
                before departing — but violent crime against tourists is extremely rare.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What movies were filmed in Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The list runs deep: Gladiator (2000), Lawrence of Arabia (1962), Game of Thrones (HBO), The
                Mummy (1999), Kingdom of Heaven (2005), Babel (2006), Prince of Persia (2010), Ben-Hur (2016),
                Kundun (1997), and Asterix &amp; Obelix: Mission Cleopatra (2002). Over 200 international film
                and TV productions have used Ouarzazate and its surrounding landscapes since the 1960s.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/cities/ouarzazate/attractions" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Ouarzazate Attractions
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed listings and visitor info for every attraction in and around Ouarzazate.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/itineraries/5-day-desert" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                5-Day Desert Itinerary
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Marrakech to Merzouga via Ouarzazate, Dades Gorge, and the Erg Chebbi dunes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cities/merzouga/experiences" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Merzouga &amp; Sahara Experiences
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Camel treks, desert camps, and sunrise over the Erg Chebbi dunes — the next stop east.
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
