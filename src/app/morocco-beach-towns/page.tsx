import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Users,
  Gem,
  Award,
  BookOpen,
  Crown,
  Waves,
  Sun,
  Wind,
  Leaf,
  Calendar,
  Tag,
  Globe,
  Lightbulb,
  Camera,
  Compass,
  Anchor,
  Umbrella,
  Thermometer,
  CloudSun,
  Navigation,
  Shell,
  Fish,
  Utensils,
  Bed,
  Plane,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Top 10 Morocco Beach Towns 2026 | Best Coastal Towns & Seaside Destinations',
  description:
    'Discover the best Morocco beach towns from Essaouira and Taghazout to Dakhla and Asilah. Complete guide to coastal towns with beaches, accommodation, water sports, dining, and travel tips for your beach holiday in Morocco.',
  keywords: [
    'Morocco beach towns',
    'best coastal towns Morocco',
    'Morocco seaside destinations',
    'beach holiday Morocco',
    'Essaouira beach town',
    'Taghazout surf town',
    'Agadir beach resort',
    'Asilah coastal town',
    'Dakhla Morocco',
    'Oualidia lagoon town',
    'Sidi Ifni beach',
    'Mirleft Morocco',
    'Saïdia beach resort',
    'El Jadida coastal city',
    'Morocco coastal holidays',
    'seaside towns Morocco',
    'Morocco beach vacation 2026',
    'Atlantic coast Morocco towns',
    'Morocco fishing villages',
    'coastal Morocco travel guide',
  ],
  openGraph: {
    title: 'Top 10 Morocco Beach Towns 2026 | Best Coastal Towns & Seaside Destinations',
    description:
      'From the windswept charm of Essaouira to the surf paradise of Taghazout. Explore Morocco\'s finest beach towns with accommodation, dining, water sports, and travel tips.',
    url: `${BASE_URL}/morocco-beach-towns`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Charming Moroccan coastal town with whitewashed buildings overlooking the Atlantic Ocean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Morocco Beach Towns 2026 | Best Coastal Destinations',
    description:
      'Essaouira, Taghazout, Agadir, Asilah, Dakhla, and 5 more incredible beach towns. Your complete guide to coastal Morocco.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-beach-towns` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-beach-towns`,
  name: 'Top 10 Morocco Beach Towns 2026 | Best Coastal Towns & Seaside Destinations',
  description:
    'Comprehensive guide to the best beach towns in Morocco covering Essaouira, Agadir, Taghazout, Asilah, Dakhla, Oualidia, Sidi Ifni, Mirleft, Saïdia, and El Jadida with accommodation, water sports, dining, and seasonal travel advice.',
  url: `${BASE_URL}/morocco-beach-towns`,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-beach-towns`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Beach Towns', item: `${BASE_URL}/morocco-beach-towns` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best beach towns in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best beach towns in Morocco include Essaouira for wind sports and medina culture, Taghazout for world-class surfing, Agadir for resort-style beach holidays, Asilah for art and history, Dakhla for kitesurfing, Oualidia for a calm lagoon, Sidi Ifni for dramatic coastline, Mirleft for secluded coves, Saïdia for Mediterranean warmth, and El Jadida for Portuguese heritage and family beaches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan beach town is best for surfing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taghazout is the undisputed surf capital of Morocco. Located 20 km north of Agadir, it offers world-class breaks including Anchor Point, Panoramas, and Hash Point. Surf camps start from 800 MAD per day with lessons, accommodation, and yoga. The best swells arrive between September and April, though beginners can find rideable waves year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Essaouira good for a beach holiday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira is excellent for a beach holiday that combines coastal activities with cultural richness. The town offers a sweeping Atlantic beach ideal for kitesurfing and windsurfing, a UNESCO-listed medina, vibrant art galleries, and outstanding seafood dining. Water temperatures are cool due to the Canary Current, so a wetsuit is advisable. The best months for swimming are July and August.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the warmest beach town in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saïdia on the Mediterranean coast has the warmest waters in Morocco, reaching 25 degrees Celsius in summer. Agadir also enjoys warm temperatures with over 300 sunny days per year. Dakhla in the south has warm waters year-round due to its Saharan latitude. For Atlantic towns, Agadir and Sidi Ifni offer the mildest winter temperatures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does accommodation cost in Moroccan beach towns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accommodation varies widely. Budget hostels in Taghazout and Mirleft start from 120 MAD per night. Mid-range riads in Essaouira and Asilah range from 400 to 800 MAD per night. Resort hotels in Agadir start from 800 MAD per night. Luxury eco-camps in Dakhla begin at 1,500 MAD per night. Prices are seasonal and can increase 30 to 50 percent during July and August.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit Moroccan beach towns year-round?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco\'s beach towns are accessible year-round. Summer (June to September) is best for swimming and sunbathing. Autumn and winter (October to March) are ideal for surfing with bigger Atlantic swells. Agadir and Dakhla enjoy warm weather even in winter. Spring (April to May) offers pleasant temperatures with fewer crowds. Each season has its own appeal depending on your preferred activities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best beach town for families in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oualidia is the best beach town for families, with its sheltered lagoon providing calm, warm waters safe for children. Agadir is another excellent choice with lifeguards, gentle waves, and full resort infrastructure. Saïdia on the Mediterranean has warm, calm waters and waterpark facilities. El Jadida offers a protected beach near a fascinating Portuguese-era old town.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get to Moroccan beach towns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agadir and Essaouira both have airports with domestic and some international flights. Most beach towns are accessible by CTM or Supratours bus services from major cities. Grand taxis connect smaller towns. Renting a car gives the most flexibility for exploring the coast. Taghazout is a 30-minute drive from Agadir airport. Asilah is easily reached by train from Tangier. Dakhla requires a domestic flight from Casablanca (about 2.5 hours).',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 10 BEACH TOWNS
   ═══════════════════════════════════════════════════════════════ */

const beachTowns = [
  {
    name: 'Essaouira',
    tagline: 'The Windy City of Culture and Coast',
    location: 'Central Atlantic Coast, 175 km west of Marrakech',
    image: '/images/hero-essaouira.webp',
    knownFor: 'UNESCO medina, wind sports, Gnaoua music festival, art galleries, and fresh seafood at the port.',
    bestBeaches: ['Main Beach (Plage d\'Essaouira)', 'Sidi Kaouki (25 km south)', 'Moulay Bouzerktoun (25 km north)'],
    waterSports: 'Kitesurfing, windsurfing, surfing, stand-up paddleboarding',
    accommodation: 'Riads in the medina from 300 MAD per night, beachfront hotels from 700 MAD, surf camps from 600 MAD',
    dining: 'Grilled sardines at the port from 30 MAD, seafood platters from 80 MAD, rooftop restaurants with ocean views',
    bestSeason: 'June to September for beach, April to November for wind sports',
    gettingThere: 'Essaouira Mogador Airport (domestic flights), 2.5 hours by bus from Marrakech via Supratours',
  },
  {
    name: 'Agadir',
    tagline: 'Morocco\'s Premier Beach Resort City',
    location: 'Central Atlantic Coast, 10 km crescent beach',
    image: '/images/hero-essaouira-port.webp',
    knownFor: 'Over 300 sunny days per year, 10 km golden sand beach, modern promenade, marina, and winter sun holidays.',
    bestBeaches: ['Agadir Main Beach', 'Taghazout Beach (20 km north)', 'Aourir Beach (12 km north)'],
    waterSports: 'Jet skiing, parasailing, surfing lessons, stand-up paddleboarding, banana boat rides',
    accommodation: 'All-inclusive resorts from 800 MAD per night, boutique hotels from 500 MAD, apartments from 350 MAD',
    dining: 'Promenade restaurants from 60 MAD, marina fine dining from 200 MAD, Souk El Had for local cuisine from 25 MAD',
    bestSeason: 'Year-round, peak June to September for beach, October to March for day trips to surf spots',
    gettingThere: 'Agadir Al Massira Airport with international flights, 3.5 hours by bus from Marrakech',
  },
  {
    name: 'Taghazout',
    tagline: 'The Surf Capital of Africa',
    location: '20 km north of Agadir, Atlantic Coast',
    image: '/images/hero-essaouira-ramparts.webp',
    knownFor: 'World-class surf breaks including Anchor Point, laid-back village atmosphere, surf camps, yoga retreats, and Paradise Valley.',
    bestBeaches: ['Taghazout Main Beach', 'Anchor Point', 'Panoramas', 'Hash Point', 'Imourane Beach'],
    waterSports: 'Surfing (all levels), bodyboarding, stand-up paddleboarding, kayaking',
    accommodation: 'Surf hostels from 120 MAD per night, surf camps from 800 MAD per day all-inclusive, boutique hotels from 600 MAD',
    dining: 'Beach cafes with tagines from 40 MAD, fresh fish from 50 MAD, smoothie bars from 25 MAD',
    bestSeason: 'September to April for surf swells, June to August for swimming and sunbathing',
    gettingThere: '30 minutes by grand taxi from Agadir, bus from Agadir central station',
  },
  {
    name: 'Asilah',
    tagline: 'Where Art Meets the Atlantic',
    location: 'Northern Atlantic Coast, 45 km south of Tangier',
    image: '/images/hero-essaouira-ramparts.webp',
    knownFor: 'Whitewashed medina with colorful murals, annual arts festival (August), Portuguese ramparts, and a creative, bohemian atmosphere.',
    bestBeaches: ['Asilah Town Beach', 'Paradise Beach (Plage Rmilate, 5 km south)', 'Briech Beach (15 km north)'],
    waterSports: 'Swimming, stand-up paddleboarding, bodyboarding, fishing',
    accommodation: 'Medina guesthouses from 250 MAD per night, seaside hotels from 500 MAD, holiday apartments from 400 MAD',
    dining: 'Harbor-front grilled fish from 40 MAD, medina restaurants from 50 MAD, seafood paella from 80 MAD',
    bestSeason: 'June to September for beach, August for the annual arts festival',
    gettingThere: '45-minute train ride from Tangier, direct CTM buses from Casablanca and Rabat',
  },
  {
    name: 'Dakhla',
    tagline: 'Where the Sahara Meets the Atlantic',
    location: 'Southern Saharan Coast, remote peninsula',
    image: '/images/hero-essaouira-port.webp',
    knownFor: 'World-class kitesurfing lagoon, Sahara-meets-ocean landscape, flamingos, eco-lodges, and remote adventure travel.',
    bestBeaches: ['Dakhla Lagoon (flat water)', 'PK25 Beach', 'White Dune Beach', 'Lassarga Beach'],
    waterSports: 'Kitesurfing, windsurfing, surfing, stand-up paddleboarding, kayaking, fishing',
    accommodation: 'Eco-camps on the lagoon from 1,500 MAD per night, town hotels from 400 MAD, kite camps from 1,200 MAD all-inclusive',
    dining: 'Fresh fish restaurants from 50 MAD, seafood at eco-lodges, lobster dinners from 150 MAD',
    bestSeason: 'March to November for kitesurfing, year-round for mild weather and beach',
    gettingThere: 'Dakhla Airport with domestic flights from Casablanca (2.5 hours), long-distance bus (18+ hours from Agadir)',
  },
  {
    name: 'Oualidia',
    tagline: 'Morocco\'s Hidden Lagoon Paradise',
    location: 'Between El Jadida and Safi, Atlantic Coast',
    image: '/images/hero-essaouira.webp',
    knownFor: 'Sheltered crescent lagoon, famous oyster farms, safe swimming for families, and a royal palace overlooking the water.',
    bestBeaches: ['Oualidia Lagoon Beach', 'Open Ocean Beach (beyond the sandbar)', 'Lalla Fatna Beach (nearby)'],
    waterSports: 'Swimming, kayaking, stand-up paddleboarding, boat tours of the lagoon',
    accommodation: 'Boutique hotels from 500 MAD per night, La Sultana luxury from 2,500 MAD, guesthouses from 300 MAD',
    dining: 'Oyster shacks from 60 MAD per dozen, lagoon-side restaurants from 80 MAD, seafood tagines from 60 MAD',
    bestSeason: 'June to September for swimming, May to October for pleasant weather',
    gettingThere: '3 hours by car from Casablanca, grand taxi from El Jadida or Safi, limited bus service',
  },
  {
    name: 'Sidi Ifni',
    tagline: 'Art Deco Charm on a Dramatic Coast',
    location: 'Southern Atlantic Coast, 160 km south of Agadir',
    image: '/images/hero-essaouira-port.webp',
    knownFor: 'Spanish Art Deco architecture, Legzira Beach with sandstone arches, dramatic cliff scenery, and an authentic off-the-beaten-path atmosphere.',
    bestBeaches: ['Legzira Beach (10 km south)', 'Sidi Ifni Town Beach', 'Plage Blanche (remote, further south)'],
    waterSports: 'Surfing, bodyboarding, fishing, coastal walks',
    accommodation: 'Budget guesthouses from 150 MAD per night, Art Deco hotels from 350 MAD, surf lodges from 250 MAD',
    dining: 'Local fish restaurants from 35 MAD, rooftop cafes with ocean views, Sunday market for local produce',
    bestSeason: 'May to October for beach, year-round for mild temperatures and coastal exploration',
    gettingThere: '2.5 hours by grand taxi from Agadir, CTM bus from Agadir, winding coastal road',
  },
  {
    name: 'Mirleft',
    tagline: 'Secret Coves and Clifftop Views',
    location: 'Between Tiznit and Sidi Ifni, Southern Atlantic',
    image: '/images/hero-essaouira-ramparts.webp',
    knownFor: 'Multiple secluded cove beaches, dramatic volcanic cliffs, a ruined French fort, and a growing community of artists and surfers.',
    bestBeaches: ['Plage Marabout', 'Plage Imin Tourga', 'Plage Aftass', 'Plage Sidi Mohamed Ben Abdellah'],
    waterSports: 'Surfing, bodyboarding, swimming, cliff jumping at select spots',
    accommodation: 'Surf houses from 150 MAD per night, cliffside guesthouses from 300 MAD, boutique hotels from 500 MAD',
    dining: 'Village restaurants with tagines from 35 MAD, beachside fish grills from 40 MAD, rooftop cafes',
    bestSeason: 'May to October for beach and swimming, September to April for surfing',
    gettingThere: '2 hours by grand taxi from Agadir, transit via Tiznit, rental car recommended for beach access',
  },
  {
    name: 'Saïdia',
    tagline: 'The Blue Pearl of the Mediterranean',
    location: 'Eastern Mediterranean Coast, near the Algerian border',
    image: '/images/hero-essaouira.webp',
    knownFor: '14 km of golden sand, warmest waters in Morocco (up to 25 C), purpose-built resort marina, waterparks, and golf courses.',
    bestBeaches: ['Saïdia Main Beach', 'Ras El Ma Beach', 'Cap de l\'Eau (nearby fishing village)'],
    waterSports: 'Swimming, jet skiing, sailing, windsurfing, paddleboarding, parasailing',
    accommodation: 'Resort hotels from 700 MAD per night, vacation apartments from 400 MAD, budget pensions from 200 MAD',
    dining: 'Seafood restaurants from 60 MAD, marina dining from 120 MAD, beachfront cafes, traditional Moroccan cuisine in the old town',
    bestSeason: 'June to September for warm swimming, July and August peak season',
    gettingThere: 'Oujda Airport (60 km) with domestic and international flights, train to Oujda then grand taxi',
  },
  {
    name: 'El Jadida',
    tagline: 'Portuguese Heritage Meets Atlantic Waves',
    location: 'Atlantic Coast, 100 km south of Casablanca',
    image: '/images/hero-essaouira-port.webp',
    knownFor: 'UNESCO-listed Portuguese Cistern, Cité Portugaise fortifications, family-friendly beach, and the annual Moussem horse festival.',
    bestBeaches: ['El Jadida Main Beach', 'Sidi Bouzid Beach (5 km south)', 'Haouzia Beach (further south)'],
    waterSports: 'Swimming, bodyboarding, stand-up paddleboarding, fishing',
    accommodation: 'Hotels from 400 MAD per night, riads in the medina from 350 MAD, beach apartments from 300 MAD',
    dining: 'Portuguese-influenced seafood from 50 MAD, medina restaurants from 40 MAD, beachfront fish grills from 35 MAD',
    bestSeason: 'June to September for beach, October for the Moussem festival',
    gettingThere: '1.5 hours by train or bus from Casablanca, easy day trip or weekend getaway',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Leaf,
    airTemp: '18-26 C',
    waterTemp: '16-19 C',
    description: 'Pleasant temperatures with fewer crowds. Wildflowers line coastal paths and towns are relaxed before summer peaks. A wetsuit is still needed for swimming on the Atlantic coast. Ideal for exploring towns on foot and combining beach trips with cultural visits.',
    bestTowns: 'Essaouira, Asilah, El Jadida, Mirleft',
    rating: 'Good',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    airTemp: '25-35 C',
    waterTemp: '19-25 C',
    description: 'Peak beach season with the warmest water and air temperatures. Mediterranean towns like Saïdia reach their best. Atlantic towns are cooled by trade winds. Moroccan families flock to the coast, creating a lively atmosphere. Book accommodation well in advance for July and August.',
    bestTowns: 'Saïdia, Agadir, Oualidia, Asilah, El Jadida',
    rating: 'Excellent',
  },
  {
    season: 'Autumn (September - November)',
    icon: CloudSun,
    airTemp: '20-28 C',
    waterTemp: '19-22 C',
    description: 'The sweet spot for coastal travel. Water remains warm from summer, crowds thin after September, and the first surf swells arrive. September is arguably the single best month for visiting Moroccan beach towns, with pleasant conditions and lower prices.',
    bestTowns: 'Taghazout, Essaouira, Dakhla, Mirleft, Sidi Ifni',
    rating: 'Excellent',
  },
  {
    season: 'Winter (December - February)',
    icon: Wind,
    airTemp: '14-21 C',
    waterTemp: '15-18 C',
    description: 'Off-season for swimming but prime time for surfing. Taghazout comes alive with international surfers chasing Atlantic swells. Agadir and Dakhla remain warm enough for outdoor life. Southern towns like Sidi Ifni and Mirleft are pleasantly mild. Accommodation prices drop significantly.',
    bestTowns: 'Taghazout, Agadir, Dakhla, Sidi Ifni',
    rating: 'Surf season',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the best beach towns in Morocco?',
    answer: 'The best beach towns in Morocco include Essaouira for wind sports and medina culture, Taghazout for world-class surfing, Agadir for resort-style beach holidays, Asilah for art and history, Dakhla for kitesurfing, Oualidia for a calm lagoon, Sidi Ifni for dramatic coastline, Mirleft for secluded coves, Saïdia for Mediterranean warmth, and El Jadida for Portuguese heritage and family beaches.',
  },
  {
    question: 'Which Moroccan beach town is best for surfing?',
    answer: 'Taghazout is the undisputed surf capital of Morocco. Located 20 km north of Agadir, it offers world-class breaks including Anchor Point, Panoramas, and Hash Point. Surf camps start from 800 MAD per day with lessons, accommodation, and yoga. The best swells arrive between September and April, though beginners can find rideable waves year-round.',
  },
  {
    question: 'Is Essaouira good for a beach holiday?',
    answer: 'Essaouira is excellent for a beach holiday that combines coastal activities with cultural richness. The town offers a sweeping Atlantic beach ideal for kitesurfing and windsurfing, a UNESCO-listed medina, vibrant art galleries, and outstanding seafood dining. Water temperatures are cool due to the Canary Current, so a wetsuit is advisable. The best months for swimming are July and August.',
  },
  {
    question: 'What is the warmest beach town in Morocco?',
    answer: 'Saïdia on the Mediterranean coast has the warmest waters in Morocco, reaching 25 degrees Celsius in summer. Agadir also enjoys warm temperatures with over 300 sunny days per year. Dakhla in the south has warm waters year-round due to its Saharan latitude. For Atlantic towns, Agadir and Sidi Ifni offer the mildest winter temperatures.',
  },
  {
    question: 'How much does accommodation cost in Moroccan beach towns?',
    answer: 'Accommodation varies widely. Budget hostels in Taghazout and Mirleft start from 120 MAD per night. Mid-range riads in Essaouira and Asilah range from 400 to 800 MAD per night. Resort hotels in Agadir start from 800 MAD per night. Luxury eco-camps in Dakhla begin at 1,500 MAD per night. Prices are seasonal and can increase 30 to 50 percent during July and August.',
  },
  {
    question: 'Can you visit Moroccan beach towns year-round?',
    answer: 'Yes, Morocco\'s beach towns are accessible year-round. Summer (June to September) is best for swimming and sunbathing. Autumn and winter (October to March) are ideal for surfing with bigger Atlantic swells. Agadir and Dakhla enjoy warm weather even in winter. Spring (April to May) offers pleasant temperatures with fewer crowds. Each season has its own appeal depending on your preferred activities.',
  },
  {
    question: 'What is the best beach town for families in Morocco?',
    answer: 'Oualidia is the best beach town for families, with its sheltered lagoon providing calm, warm waters safe for children. Agadir is another excellent choice with lifeguards, gentle waves, and full resort infrastructure. Saïdia on the Mediterranean has warm, calm waters and waterpark facilities. El Jadida offers a protected beach near a fascinating Portuguese-era old town.',
  },
  {
    question: 'How do you get to Moroccan beach towns?',
    answer: 'Agadir and Essaouira both have airports with domestic and some international flights. Most beach towns are accessible by CTM or Supratours bus services from major cities. Grand taxis connect smaller towns. Renting a car gives the most flexibility for exploring the coast. Taghazout is a 30-minute drive from Agadir airport. Asilah is easily reached by train from Tangier. Dakhla requires a domestic flight from Casablanca (about 2.5 hours).',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED PAGES
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  {
    href: '/beaches',
    icon: Waves,
    title: 'Morocco Beaches Guide',
    description: 'Complete overview of every beach region in Morocco, from the Mediterranean to the deep south.',
  },
  {
    href: '/best-beaches-morocco',
    icon: Star,
    title: 'Best Beaches in Morocco',
    description: 'Top 15 individual beaches ranked by beauty, water quality, accessibility, and activities.',
  },
  {
    href: '/surfing',
    icon: Anchor,
    title: 'Surfing in Morocco',
    description: 'Detailed surf guide covering breaks, surf camps, equipment rental, and the best swells of the year.',
  },
  {
    href: '/water-sports',
    icon: Navigation,
    title: 'Water Sports Guide',
    description: 'Kitesurfing, windsurfing, diving, and paddleboarding across all Moroccan coastal destinations.',
  },
  {
    href: '/agadir',
    icon: Sun,
    title: 'Agadir City Guide',
    description: 'Morocco\'s premier beach resort city with over 300 days of sunshine and 10 km of golden sand.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBeachTownsPage() {
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
            backgroundImage: 'url(/images/hero-essaouira.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Beach Towns</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Coastal Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top 10 Morocco Beach Towns:
            <br className="hidden md:block" /> Best Coastal Destinations for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Essaouira&apos;s windswept medina to Dakhla&apos;s Saharan lagoons.
            Discover Morocco&apos;s finest seaside towns with beaches, accommodation,
            dining, and water sports for every traveler.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco&apos;s Beach Towns Are Unlike Anywhere Else
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s 3,500 kilometers of coastline are punctuated by beach towns
                that blend ancient medina culture with the raw beauty of the Atlantic and
                Mediterranean. These are not generic resort strips. Each Moroccan coastal
                town has its own distinct personality, shaped by centuries of trade, art,
                and ocean life that make every stop along the coast feel like a different world.
              </p>
              <p>
                In Essaouira, Gnaoua musicians play at sunset on ramparts built by the Portuguese.
                In Taghazout, surfers share waves with local fishermen casting lines from the rocks.
                In Dakhla, the Sahara Desert cascades into turquoise lagoons where flamingos wade.
                In Asilah, whitewashed walls are canvases for international artists who gather
                every summer. This is coastal Morocco: a place where every beach town tells a story.
              </p>
              <p>
                Whether you are seeking world-class surf, a family-friendly lagoon, romantic
                clifftop coves, or a full-service beach resort, Morocco&apos;s coastal towns
                deliver experiences that are rich, affordable, and authentically North African.
                This guide covers the ten best beach towns in Morocco, with everything you need
                to plan your seaside adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Guide: Which Beach Town Is Right for You?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan beach town offers a different vibe and experience. Use this
            quick guide to find your perfect match.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Waves className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  For Surfers
                </h3>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Taghazout</strong> - World-class breaks, vibrant surf culture</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Mirleft</strong> - Uncrowded breaks, affordable village life</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Sidi Ifni</strong> - Powerful swells, dramatic scenery</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  For Families
                </h3>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Oualidia</strong> - Safe lagoon, calm waters, oyster farms</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Agadir</strong> - Lifeguards, resorts, gentle waves</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Sa&iuml;dia</strong> - Warm Mediterranean, waterparks</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  For Culture and Photography
                </h3>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Essaouira</strong> - UNESCO medina, Gnaoua music, art</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Asilah</strong> - Street murals, arts festival, ramparts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>El Jadida</strong> - Portuguese Cistern, historic citadel</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Wind className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  For Adventure and Remote Escapes
                </h3>
              </div>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Dakhla</strong> - Saharan lagoon, kitesurfing, flamingos</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Sidi Ifni</strong> - Legzira arches, remote Art Deco town</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span><strong>Mirleft</strong> - Hidden coves, cliff scrambles, solitude</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 10 Beach Towns ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 10 Beach Towns in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Our definitive guide to Morocco&apos;s finest coastal towns, covering beaches,
            accommodation, dining, water sports, and how to get there.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices listed are approximate starting rates. Seasonal pricing can change, especially during July, August, and holiday periods.
          </p>

          <div className="space-y-12">
            {beachTowns.map((town, index) => (
              <div key={town.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={town.image}
                      alt={`${town.name} beach town on Morocco's coastline, ${town.location}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Gem className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-3">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {town.name}
                      </h3>
                      <p className="text-sm text-[var(--color-gold)] font-semibold mt-0.5">
                        {town.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {town.location}
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      <span className="font-semibold text-[var(--text-primary)]">Known for:</span> {town.knownFor}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                        Best Beaches
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {town.bestBeaches.map((beach, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {beach}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex items-start gap-2">
                        <Waves className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span className="text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Water sports:</span> {town.waterSports}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Bed className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span className="text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Stay:</span> {town.accommodation}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span className="text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Eat:</span> {town.dining}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span className="text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Best season:</span> {town.bestSeason}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Plane className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span className="text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Getting there:</span> {town.gettingThere}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Seasons ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco&apos;s Beach Towns
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each season offers a different coastal experience. Here is what to expect
            throughout the year across Morocco&apos;s beach towns.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            September is the single best month for visiting Moroccan beach towns: warm water, thin crowds, and great surf arriving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <span className="text-xs text-[var(--color-gold)] font-semibold">{season.rating}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-3">
                    <div className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Air:</span> {season.airTemp}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Water:</span> {season.waterTemp}
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                    {season.description}
                  </p>

                  <div className="p-2 bg-[var(--surface-muted)] rounded-lg text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best towns:</span> {season.bestTowns}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting Around the Coast ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around Morocco&apos;s Coast
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical transport tips for hopping between Morocco&apos;s beach towns,
            whether you are driving, busing, or flying.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Plane className="w-4 h-4 text-[var(--color-accent)]" />
                By Air
              </h3>
              <div className="space-y-2">
                {[
                  'Agadir Al Massira Airport: direct international and domestic flights',
                  'Essaouira Mogador Airport: domestic flights from Casablanca',
                  'Dakhla Airport: domestic flights from Casablanca (2.5 hours)',
                  'Oujda Airport: gateway to Saïdia (60 km by taxi)',
                  'Tangier Ibn Battouta Airport: for northern coast towns',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[var(--color-accent)]" />
                By Bus and Taxi
              </h3>
              <div className="space-y-2">
                {[
                  'CTM and Supratours buses connect major coastal cities',
                  'Grand taxis link smaller towns (negotiate price before departure)',
                  'Marrakech to Essaouira: 2.5 hours by Supratours bus',
                  'Tangier to Asilah: 45 minutes by train or grand taxi',
                  'Agadir to Taghazout: 30 minutes by grand taxi (from 15 MAD)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[var(--color-accent)]" />
                By Rental Car
              </h3>
              <div className="space-y-2">
                {[
                  'Best option for coastal road trips and remote towns',
                  'Rental from 250 MAD per day at major airports',
                  'Atlantic coast highway (N1) connects most towns',
                  'Essential for reaching Mirleft, Sidi Ifni, and secluded beaches',
                  'Fuel costs approximately 14 MAD per liter (diesel cheaper)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[var(--color-accent)]" />
                Insider Tips
              </h3>
              <div className="space-y-2">
                {[
                  'Book CTM/Supratours online in advance during summer',
                  'Grand taxi prices are per seat, not per vehicle (6 seats)',
                  'Download offline maps: mobile signal drops on remote coast roads',
                  'Carry cash: smaller towns may lack ATMs',
                  'Road conditions vary: coastal roads south of Tiznit can be rough',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Tips for Morocco Beach Town Visits
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for making the most of your coastal Morocco holiday, from
            safety to cultural etiquette.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shell,
                title: 'Ocean Safety',
                text: 'The Atlantic coast has powerful currents. Swim at supervised beaches with lifeguards (green flag = safe). Mediterranean beaches are calmer and better for inexperienced swimmers. Always ask locals about conditions before entering the water.',
              },
              {
                icon: Sun,
                title: 'Sun Protection',
                text: 'Morocco\'s coastal sun is intense, especially with reflected light off water and sand. Apply SPF 50 every two hours. Bring a wide-brimmed hat and UV sunglasses. Sunburn occurs even on overcast or windy days at beach towns like Essaouira.',
              },
              {
                icon: Heart,
                title: 'Cultural Respect',
                text: 'Standard swimwear is accepted at resort beaches in Agadir and Saïdia. At smaller town beaches, modest swimwear is appreciated. Topless sunbathing is not accepted anywhere. Cover up when walking through town. Respect prayer times and local customs.',
              },
              {
                icon: Crown,
                title: 'Budget Tips',
                text: 'Eat where locals eat for the best prices. Fresh fish at port restaurants costs a fraction of tourist spots. Book accommodation in advance for July and August. Visit in September or October for lower prices with great weather. Negotiate grand taxi fares before departure.',
              },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about visiting Morocco&apos;s coastal towns,
            from budget and seasons to transport and family-friendliness.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed ml-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring Morocco&apos;s coastline with these in-depth guides
            covering beaches, surfing, water sports, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPages.map((page) => {
              const PageIcon = page.icon;
              return (
                <Link key={page.href} href={page.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PageIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {page.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                    {page.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Compass className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Explore Morocco&apos;s Coast?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From the surf breaks of Taghazout to the oyster lagoons of Oualidia,
            Morocco&apos;s beach towns offer some of the most rewarding coastal
            experiences in the world. Start planning your seaside adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <Star className="w-4 h-4" />
              See Best Beaches
            </Link>
            <Link
              href="/surfing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Waves className="w-4 h-4" />
              Surfing Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
