import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Flower2,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  Mountain,
  Sun,
  Leaf,
  Globe,
  Phone,
  CalendarDays,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Thermal Spas & Wellness Retreats 2026 | Luxury Resorts, Hammams & Yoga',
  description:
    'Discover Morocco\'s top thermal spas, luxury wellness retreats, and thalassotherapy centers. From Atlas Mountain yoga retreats to Marrakech luxury spa resorts, complete guide with prices from 200 MAD, booking tips, and spa etiquette.',
  keywords: [
    'Morocco thermal spas',
    'Morocco wellness retreats',
    'luxury spa Morocco',
    'Morocco yoga retreat',
    'thalassotherapy Morocco',
    'Atlas Mountains wellness',
    'Marrakech luxury spa',
    'Morocco spa resort',
    'hammam luxury Morocco',
    'Morocco hot springs',
    'Moulay Yacoub thermal springs',
    'Morocco spa prices 2026',
    'wellness tourism Morocco',
    'Morocco meditation retreat',
    'argan oil spa treatment',
    'Morocco spa etiquette',
    'Agadir thalassotherapy',
    'Morocco couples spa',
    'holistic retreat Morocco',
    'Morocco detox retreat',
  ],
  openGraph: {
    title: 'Morocco Thermal Spas & Wellness Retreats 2026 | Complete Guide',
    description:
      'Your complete guide to Morocco\'s finest thermal spas, luxury wellness retreats, and thalassotherapy centers. Atlas Mountain yoga, Marrakech luxury spas, and coastal wellness — with prices, tips, and insider knowledge.',
    url: `${BASE_URL}/morocco-thermal-spas`,
    images: [
      {
        url: `${BASE_URL}/images/hero-spa.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxury Moroccan thermal spa with warm pool surrounded by traditional architecture and lush gardens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Thermal Spas & Wellness Retreats 2026',
    description:
      'From Moulay Yacoub thermal springs to Atlas Mountain yoga retreats and Agadir thalassotherapy. Complete guide with prices, booking tips, and spa etiquette.',
    images: [`${BASE_URL}/images/hero-spa.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-thermal-spas` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-thermal-spas`,
  name: 'Morocco Thermal Spas & Wellness Retreats 2026 | Complete Guide',
  description:
    'Complete guide to Morocco\'s thermal spas, luxury wellness retreats, thalassotherapy centers, yoga retreats, and spa etiquette. Prices, destinations, and practical tips.',
  url: `${BASE_URL}/morocco-thermal-spas`,
  image: `${BASE_URL}/images/hero-spa.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-thermal-spas`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Thermal Spas & Wellness Retreats', item: `${BASE_URL}/morocco-thermal-spas` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best thermal spas in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top thermal spas in Morocco include Moulay Yacoub Thermal Springs near Fes (natural hot springs from 200 MAD), La Mamounia Spa in Marrakech (luxury treatments from 1,500 MAD), Royal Mansour Spa (from 2,000 MAD), and the Sofitel Mogador Thalassotherapy center in Essaouira (from 800 MAD).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do spa treatments cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spa prices in Morocco range widely. Natural thermal baths start from 200 MAD. Mid-range spa packages run from 400-800 MAD. Luxury resort spas charge from 1,500 MAD per treatment. Full-day wellness packages at premium resorts cost from 3,000 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there yoga retreats in the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several yoga retreats operate in the Atlas Mountains. Kasbah Tamadot (from 2,500 MAD/night), Atlas Kasbah Ecolodge in Agadir (from 1,200 MAD/night), and various retreat centers in Imlil and Ouirgane offer multi-day yoga and meditation programs with mountain views.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is thalassotherapy and where can I find it in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thalassotherapy uses seawater, seaweed, and marine minerals for therapeutic treatments. Morocco\'s top thalassotherapy centers are in Agadir (Thalasso & Spa Agadir, from 600 MAD) and Essaouira (Sofitel Mogador, from 800 MAD). Both cities benefit from the Atlantic coast\'s mineral-rich waters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I know about spa etiquette in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key etiquette rules: always respect gender separation at traditional hammams, tip therapists from 50-100 MAD at luxury spas, avoid heavy meals 2 hours before treatments, book luxury spas 3-5 days in advance during peak season, and remove jewelry before entering thermal pools.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco for a wellness trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for wellness travel in Morocco are October-November and March-April. Temperatures are comfortable for outdoor yoga, thermal springs are enjoyable without extreme heat, and luxury spas have good availability. Summer (July-August) is peak season at coastal thalassotherapy centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can couples enjoy spa experiences together in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Luxury spas and resort wellness centers offer private couple suites with shared treatments. Prices for couples packages start from 1,500 MAD. Traditional hammams are gender-separated, so couples must visit luxury spas for shared experiences. Popular couple destinations include Royal Mansour, La Mamounia, and Amanjena in Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco\'s thermal springs safe for visitors with health conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most thermal springs are safe for healthy adults. However, visitors with heart conditions, high blood pressure, or who are pregnant should consult a doctor before thermal bathing. Moulay Yacoub springs reach 54 degrees Celsius and are diluted for bathing. Many resorts have medical consultants on staff for guests with health concerns.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP WELLNESS DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const wellnessDestinations = [
  {
    rank: 1,
    name: 'Moulay Yacoub Thermal Springs',
    city: 'Near Fes',
    type: 'Natural Thermal Springs',
    icon: Thermometer,
    price: 'From 200 MAD per session',
    description:
      'Morocco\'s most famous natural hot springs, located 20 km northwest of Fes. The sulfurous waters emerge at 54 degrees Celsius and have been used for therapeutic bathing since Roman times. A modern facility now offers hydrotherapy pools, private thermal suites, and dermatological treatments alongside the traditional public baths.',
    highlights: ['54-degree natural sulfur springs', 'Dermatological therapy center', 'Private thermal suites', 'Public baths from 50 MAD'],
    bestFor: 'Therapeutic bathing and skin conditions',
  },
  {
    rank: 2,
    name: 'Royal Mansour Spa',
    city: 'Marrakech',
    type: 'Ultra-Luxury Resort Spa',
    icon: Crown,
    price: 'From 2,000 MAD per treatment',
    description:
      'A 2,500 sqm sanctuary of white Carrara marble, hand-carved cedarwood, and zellige mosaic. The Royal Mansour spa operates on a philosophy of total privacy, with individual treatment pavilions connected by garden pathways. Their signature Royal Hammam uses bespoke products created exclusively for the property, including a 24-karat gold argan oil blend.',
    highlights: ['2,500 sqm white marble facility', 'Private treatment pavilions', '24-karat gold argan oil', 'Indoor pool and aqua circuit'],
    bestFor: 'Ultra-luxury seekers and honeymooners',
  },
  {
    rank: 3,
    name: 'Kasbah Tamadot Wellness Center',
    city: 'Atlas Mountains (Asni)',
    type: 'Mountain Resort Spa',
    icon: Mountain,
    price: 'From 800 MAD per treatment',
    description:
      'Sir Richard Branson\'s Atlas Mountain retreat sits at 1,200 meters altitude with panoramic views of Jebel Toubkal. The spa uses Berber-inspired treatments with herbs foraged from the surrounding hills: wild thyme, rosemary, and lavender. The heated infinity pool appears to float above the valley floor, and sunrise yoga sessions on the terrace are included for guests.',
    highlights: ['1,200m altitude mountain setting', 'Berber herbal treatments', 'Heated infinity pool', 'Complimentary sunrise yoga'],
    bestFor: 'Mountain lovers and active wellness travelers',
  },
  {
    rank: 4,
    name: 'Sofitel Essaouira Mogador Thalasso',
    city: 'Essaouira',
    type: 'Thalassotherapy Center',
    icon: Waves,
    price: 'From 800 MAD per treatment',
    description:
      'Morocco\'s premier thalassotherapy destination pumps Atlantic seawater directly into its treatment circuit. The 4,000 sqm facility includes a seawater pool, jet massage circuits, marine mud wraps, and algae body treatments. The combination of ocean air, mineral-rich seawater, and coastal light creates an environment that European doctors have prescribed for respiratory and joint conditions.',
    highlights: ['Direct seawater pumping system', 'Marine mud and algae wraps', '4,000 sqm treatment circuit', 'Medical-grade thalasso programs'],
    bestFor: 'Thalassotherapy seekers and respiratory wellness',
  },
  {
    rank: 5,
    name: 'La Mamounia Spa',
    city: 'Marrakech',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 1,500 MAD per treatment',
    description:
      'Inside one of the world\'s most celebrated hotels, the 2,500 sqm spa combines Moroccan heritage with modern sophistication. Three hammam rooms of increasing temperature follow the traditional progression. The signature treatment is the 90-minute Royal Hammam, featuring black soap infused with eucalyptus, followed by a ghassoul mask and argan oil massage.',
    highlights: ['2,500 sqm within iconic hotel', 'Triple-room hammam circuit', 'Royal Hammam signature ritual', 'Private couple treatment suites'],
    bestFor: 'Luxury travelers wanting world-class standards',
  },
  {
    rank: 6,
    name: 'Atlas Kasbah Ecolodge Spa',
    city: 'Agadir (Countryside)',
    type: 'Eco Wellness Retreat',
    icon: Leaf,
    price: 'From 500 MAD per treatment',
    description:
      'Built from local stone and rammed earth 15 km from Agadir, this eco-retreat offers wellness immersed in nature. Treatments use only organic, locally produced ingredients: argan oil pressed on site, herbs from the lodge garden, and mineral-rich clay from nearby Atlas deposits. Yoga classes run twice daily in an open-air pavilion overlooking the argan forest.',
    highlights: ['On-site argan oil production', 'Twice-daily yoga classes', 'Rammed earth eco-architecture', 'Organic garden ingredients'],
    bestFor: 'Eco-conscious travelers and yoga practitioners',
  },
  {
    rank: 7,
    name: 'Thalasso & Spa Agadir',
    city: 'Agadir',
    type: 'Thalassotherapy Center',
    icon: Waves,
    price: 'From 600 MAD per treatment',
    description:
      'Agadir\'s purpose-built thalassotherapy complex sits directly on the beach, drawing heated Atlantic seawater into 20 treatment rooms. Multi-day cure programs of 3, 6, and 12 days follow European thalassotherapy protocols, targeting joint pain, stress reduction, and post-surgical recovery. Single-session visitors can access the aqua circuit with jet pools, counter-current swimming, and marine mist rooms.',
    highlights: ['Beachfront location', 'Multi-day cure programs', 'Aqua jet circuit', 'Post-surgical recovery programs'],
    bestFor: 'Therapeutic thalassotherapy and multi-day wellness cures',
  },
  {
    rank: 8,
    name: 'Amanjena Spa',
    city: 'Marrakech',
    type: 'Ultra-Luxury Spa',
    icon: Gem,
    price: 'From 2,500 MAD per treatment',
    description:
      'The Aman resort\'s spa pavilions are scattered among olive groves and rose gardens on the outskirts of Marrakech. Each treatment room is a standalone building with its own private garden. The menu spans Moroccan hammam, Thai massage, Ayurvedic doshas, and Japanese shiatsu. A heated outdoor pool sits at the center, flanked by colonnades of rose-colored stone.',
    highlights: ['Standalone treatment pavilions', 'Multi-tradition menu', 'Heated garden pool', 'Ultimate seclusion and privacy'],
    bestFor: 'Privacy seekers and multi-cultural wellness explorers',
  },
  {
    rank: 9,
    name: 'Paradis Plage Surf Yoga & Spa',
    city: 'Taghazout (near Agadir)',
    type: 'Beach Wellness Resort',
    icon: Sun,
    price: 'From 400 MAD per treatment',
    description:
      'A surf and wellness resort built from stone and driftwood on a private beach between Agadir and Essaouira. The spa blends surf culture with yoga and traditional Moroccan treatments. Morning surf sessions are followed by afternoon yoga on the cliffside platform. The spa uses seaweed harvested from the beach and argan oil from the hinterland.',
    highlights: ['Private beach setting', 'Surf + yoga + spa combination', 'Cliffside yoga platform', 'Locally harvested seaweed treatments'],
    bestFor: 'Active travelers combining surf, yoga, and spa',
  },
  {
    rank: 10,
    name: 'Mazagan Beach & Golf Resort Spa',
    city: 'El Jadida',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 700 MAD per treatment',
    description:
      'One of Morocco\'s largest resort spas at over 2,000 sqm, the Mazagan spa includes a hydrotherapy circuit with seven stations, four hammam rooms, and a vitality pool. The 3-hour Moroccan Journey package moves through every station: sauna, steam, cold plunge, jet shower, hammam, massage, and facial. The golf course and beach access make this a full resort wellness stay.',
    highlights: ['Seven-station hydrotherapy circuit', '3-hour Moroccan Journey package', 'Four separate hammam rooms', 'Beach and golf resort setting'],
    bestFor: 'Resort-style wellness with sports and beach access',
  },
  {
    rank: 11,
    name: 'Dar Ahlam Thermal Experience',
    city: 'Ouarzazate (Skoura)',
    type: 'Desert Luxury Retreat',
    icon: Star,
    price: 'From 1,800 MAD per treatment',
    description:
      'A former kasbah turned intimate luxury retreat in the palm groves of Skoura, Dar Ahlam offers spa treatments under the open desert sky. The outdoor thermal pool is heated to 38 degrees Celsius and faces the Atlas Mountains. Treatments draw on desert botanicals: prickly pear seed oil, desert rose extract, and date kernel powder. Star-bathing sessions pair spa treatments with guided astronomy.',
    highlights: ['Outdoor heated desert pool', 'Prickly pear and date treatments', 'Star-bathing spa sessions', 'Former kasbah architecture'],
    bestFor: 'Desert luxury seekers and stargazing enthusiasts',
  },
  {
    rank: 12,
    name: 'Lixus Thalasso & Spa',
    city: 'Larache (Atlantic Coast)',
    type: 'Coastal Thalassotherapy',
    icon: Waves,
    price: 'From 500 MAD per treatment',
    description:
      'On Morocco\'s less-visited northern Atlantic coast, this thalassotherapy center draws from the nutrient-rich waters where the Loukkos River meets the ocean. The facility specializes in rheumatology and dermatology programs, combining seawater hydrotherapy with local thermal clay. Day visitors can access the aqua circuit, hammam, and single-session treatments.',
    highlights: ['River-meets-ocean mineral waters', 'Rheumatology specialist programs', 'Northern coast tranquility', 'Thermal clay treatments'],
    bestFor: 'Therapeutic wellness and off-the-beaten-path travelers',
  },
  {
    rank: 13,
    name: 'Riad Laaroussa Spa',
    city: 'Fes',
    type: 'Heritage Riad Spa',
    icon: Sparkles,
    price: 'From 400 MAD per treatment',
    description:
      'A 17th-century palace in the Fes medina with a hammam decorated in original zellige tilework that has survived three centuries. The Fassi treatment protocol uses herbs grown in the riad\'s own courtyard garden: verbena, geranium, and orange blossom. Treatments are unhurried, lasting 90 minutes to 3 hours, and conclude with mint tea on the rooftop terrace overlooking the old city.',
    highlights: ['17th-century zellige hammam', 'Courtyard-grown treatment herbs', 'Rooftop tea ceremony', 'Traditional Fassi techniques'],
    bestFor: 'Heritage lovers and those exploring Fes medina',
  },
  {
    rank: 14,
    name: 'Terre d\'Amanar Retreat',
    city: 'Atlas Mountains (Tahannaout)',
    type: 'Mountain Adventure & Wellness',
    icon: Mountain,
    price: 'From 350 MAD per treatment',
    description:
      'An adventure and eco-retreat 30 minutes from Marrakech in the foothills of the Atlas, Terre d\'Amanar pairs outdoor activities with restorative wellness. After morning hikes, zip-lining, or mountain biking, guests recover with hammam treatments and open-air massages among the olive and almond trees. The treehouse accommodation adds a distinctive element.',
    highlights: ['Adventure + wellness combination', 'Open-air massage among olive trees', 'Treehouse accommodations', '30 minutes from Marrakech'],
    bestFor: 'Active travelers combining adventure with recovery',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WELLNESS CATEGORY GUIDE
   ═══════════════════════════════════════════════════════════════ */

const wellnessCategories = [
  {
    category: 'Thermal Springs',
    icon: Thermometer,
    description:
      'Morocco has natural hot springs heated by geothermal activity in the Rif and Atlas mountain ranges. The most accessible are at Moulay Yacoub near Fes, where sulfur-rich waters emerge at 54 degrees Celsius. Thermal bathing in Morocco dates to the Roman period, and local tradition holds that these waters treat skin conditions, arthritis, and respiratory ailments.',
    priceRange: 'From 50 MAD (public baths) to 800 MAD (private thermal suites)',
    topDestination: 'Moulay Yacoub, near Fes',
  },
  {
    category: 'Luxury Resort Spas',
    icon: Crown,
    description:
      'Marrakech leads Morocco in luxury resort spas, with properties like Royal Mansour, La Mamounia, and Amanjena operating facilities that rival the best in Europe and Asia. These spas combine traditional Moroccan hammam architecture with global wellness techniques. Most offer full-day packages that sequence hammam, massage, facial, and body treatments over 3-5 hours.',
    priceRange: 'From 1,500 MAD to 5,000 MAD per treatment or package',
    topDestination: 'Marrakech (Royal Mansour, La Mamounia)',
  },
  {
    category: 'Thalassotherapy',
    icon: Waves,
    description:
      'Thalassotherapy harnesses the healing properties of seawater, marine algae, and ocean minerals. Morocco\'s Atlantic coastline provides ideal conditions, with facilities in Agadir and Essaouira pumping filtered seawater directly into treatment circuits. Multi-day cure programs follow French thalassotherapy protocols, targeting chronic pain, stress disorders, and post-operative recovery.',
    priceRange: 'From 600 MAD per session, multi-day cures from 4,000 MAD',
    topDestination: 'Agadir and Essaouira',
  },
  {
    category: 'Yoga & Meditation Retreats',
    icon: Heart,
    description:
      'The Atlas Mountains and Atlantic coast have attracted yoga practitioners who run retreats throughout the year. Multi-day programs typically combine morning and evening yoga sessions with hiking, meditation, and spa treatments. Styles range from Vinyasa flow to Kundalini, with some retreats specializing in silent meditation or Ayurvedic-integrated programs.',
    priceRange: 'From 1,200 MAD/night all-inclusive to 5,000 MAD/night luxury',
    topDestination: 'Atlas Mountains (Imlil, Asni) and Taghazout coast',
  },
  {
    category: 'Desert Wellness',
    icon: Sun,
    description:
      'The Saharan edge and southern oases offer a distinct wellness experience. Sand therapy (psammotherapy) uses heated desert sand to treat joint pain. Desert luxury retreats in Ouarzazate, Skoura, and Merzouga pair spa treatments with stargazing, camel treks, and the profound silence of the desert landscape. Night temperatures in the desert drop sharply, making heated outdoor pools a highlight.',
    priceRange: 'From 800 MAD to 3,000 MAD per treatment at luxury desert camps',
    topDestination: 'Skoura (Dar Ahlam) and Merzouga luxury camps',
  },
  {
    category: 'Eco & Holistic Retreats',
    icon: Leaf,
    description:
      'A growing number of eco-lodges blend sustainability with wellness. These properties use solar power, local building materials, organic gardens, and on-site production of argan oil and herbal remedies. Treatments are rooted in local traditions but may incorporate global modalities like reiki, sound healing, or breathwork. Many operate permaculture farms that supply the kitchen and the spa.',
    priceRange: 'From 500 MAD to 2,000 MAD per night all-inclusive',
    topDestination: 'Agadir hinterland and High Atlas foothills',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Public thermal bath entry', price: 'From 50 MAD', note: 'Moulay Yacoub public section' },
  { service: 'Private thermal suite (1 hour)', price: 'From 200 MAD', note: 'Heated private mineral pool' },
  { service: 'Mid-range spa hammam + massage', price: 'From 400 MAD', note: '60-90 minute combined treatment' },
  { service: 'Luxury resort spa treatment', price: 'From 1,500 MAD', note: 'Single treatment, premium products' },
  { service: 'Ultra-luxury spa ritual (2-3 hours)', price: 'From 2,500 MAD', note: 'Multi-step luxury experience' },
  { service: 'Thalassotherapy single session', price: 'From 600 MAD', note: 'Seawater circuit + treatment' },
  { service: 'Thalassotherapy 6-day cure', price: 'From 4,000 MAD', note: 'Full program with daily treatments' },
  { service: 'Yoga retreat per night (mid-range)', price: 'From 1,200 MAD', note: 'All-inclusive: yoga, meals, room' },
  { service: 'Yoga retreat per night (luxury)', price: 'From 3,500 MAD', note: 'Premium lodge with spa access' },
  { service: 'Couples\' spa package', price: 'From 1,500 MAD', note: 'Private room, dual treatments' },
  { service: 'Full-day wellness package', price: 'From 3,000 MAD', note: 'Hammam + massage + facial + lunch' },
  { service: 'Desert sand therapy session', price: 'From 300 MAD', note: 'Psammotherapy, seasonal (June-Sept)' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPA ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Book Ahead for Luxury Spas',
    icon: CalendarDays,
    description:
      'Reserve 3-5 days in advance during peak season (October-April). Weekend slots at top resorts book out quickly. Many spas accept online bookings, but for couple suites and multi-hour rituals, call directly.',
  },
  {
    rule: 'Arrive 30 Minutes Early',
    icon: Clock,
    description:
      'Luxury spas ask guests to arrive 30 minutes before their appointment to change, shower, and use the relaxation lounge. Arriving late may shorten your treatment time without a price reduction.',
  },
  {
    rule: 'Remove All Jewelry',
    icon: ShieldCheck,
    description:
      'Sulfur in thermal waters can tarnish silver and damage gemstones. Leave jewelry in the hotel safe. Spa lockers are secure, but prevention is simpler than repair.',
  },
  {
    rule: 'Respect Gender Separation',
    icon: Users,
    description:
      'Traditional hammams and public thermal baths operate separate hours or areas for men and women. Luxury resort spas offer mixed-gender areas and private couple rooms. Always verify the schedule before arrival.',
  },
  {
    rule: 'Communicate Preferences Clearly',
    icon: Phone,
    description:
      'Tell your therapist about pressure preferences, injuries, allergies, or areas to avoid before the treatment begins. In Moroccan spas, say "bezzaf" (too much) or "shwiya" (gentler) during the session.',
  },
  {
    rule: 'Tip Appropriately',
    icon: DollarSign,
    description:
      'At luxury spas, tipping from 50-100 MAD per therapist is appreciated. At thermal springs, from 20-50 MAD for attendants. Some resort spas add a service charge, so check your bill first.',
  },
  {
    rule: 'Hydrate Before and After',
    icon: Droplets,
    description:
      'Thermal waters, steam rooms, and saunas cause significant fluid loss. Drink at least half a liter of water before and after your session. Most spas provide herbal tea and water in the relaxation lounge.',
  },
  {
    rule: 'Silence Your Phone',
    icon: AlertTriangle,
    description:
      'Phones are prohibited in treatment areas and thermal pools at every reputable facility. Leave your phone in the locker. Photography is not allowed in spa and hammam areas out of respect for other guests.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Flower2,
    description:
      'The ideal season for Atlas Mountain yoga retreats. Wildflowers bloom across the hillsides, temperatures sit between 18-26 degrees, and the light is golden. Thermal springs are comfortable, and resort spas have good availability before summer crowds.',
    recommended: 'Mountain retreats, thermal springs, outdoor yoga',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    description:
      'Coastal thalassotherapy centers peak as visitors escape inland heat. Agadir and Essaouira stay cool thanks to Atlantic breezes. Desert sand therapy (psammotherapy) is only available June-September when sand temperatures reach therapeutic levels. Mountain retreats above 1,000m remain pleasant.',
    recommended: 'Thalassotherapy, coastal spa resorts, sand therapy',
  },
  {
    season: 'Autumn (September-November)',
    icon: Leaf,
    description:
      'The second-best window for all types of wellness travel. Temperatures moderate, resort spas launch new seasonal menus, and yoga retreat operators return after summer breaks. The argan harvest in October means fresh argan oil for spa treatments.',
    recommended: 'All categories, especially luxury resorts and argan treatments',
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    description:
      'Thermal springs are at their most appealing when outdoor temperatures drop. Marrakech luxury spas run winter promotions. Snow-capped Atlas peaks provide a dramatic backdrop for heated pool sessions. Indoor thalassotherapy and hammam visits are excellent rainy-day activities.',
    recommended: 'Thermal springs, indoor hammam, luxury resort spas',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoThermalSpasPage() {
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
            backgroundImage: 'url(/images/hero-spa.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Thermal Spas &amp; Wellness Retreats</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Wellness &amp; Thermal Spas
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Thermal Spas &amp;
            <br className="hidden md:block" /> Wellness Retreats Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From ancient thermal springs at Moulay Yacoub to ultra-luxury resort spas in Marrakech,
            Atlas Mountain yoga retreats, and Atlantic thalassotherapy centers. Your complete guide
            to wellness in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Has Become a Global Wellness Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of Africa, Europe, and the Arab world, and its wellness
                traditions reflect that geography. Natural thermal springs bubble up through the Rif
                Mountains. The Atlantic coast provides mineral-rich seawater for thalassotherapy. The
                Atlas Mountains create ideal conditions for altitude yoga and meditation retreats. And
                a thousand-year hammam culture forms the foundation of it all.
              </p>
              <p>
                In the past decade, Morocco has emerged as a serious competitor to destinations like
                Bali, Thailand, and Turkey in the global wellness tourism market. International hotel
                groups have invested heavily in spa infrastructure, while local entrepreneurs have built
                eco-lodges and yoga retreats that draw visitors who want something beyond a generic
                resort experience.
              </p>
              <p>
                What sets Morocco apart is the range. A single trip can combine a 50 MAD public thermal
                bath, a 2,500 MAD ultra-luxury spa ritual, a dawn yoga session above the clouds in the
                Atlas, and a seawater thalassotherapy cure on the Atlantic coast. No other country in
                this price range offers that breadth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wellness Categories ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Wellness Experiences in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six distinct categories of spa and wellness experience are available across the country.
            Each serves different needs, budgets, and travel styles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {cat.category}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{cat.description}</p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{cat.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{cat.topDestination}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spa &amp; Wellness Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay across different tiers of thermal spa, resort, and wellness retreat
            experiences in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April) and
            holiday periods, when luxury spa prices may increase by 20-30%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 14 Wellness Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 14 Thermal Spas &amp; Wellness Destinations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From natural hot springs to ultra-luxury resort spas and remote mountain retreats, these
            are the finest wellness experiences Morocco has to offer.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season, treatment, and availability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{dest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {dest.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {dest.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <DestIcon className="w-3.5 h-3.5" />
                          {dest.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {dest.price}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] italic">Best for: {dest.bestFor}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {dest.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit by Wellness Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers year-round wellness opportunities, but each season has its strengths.
            Plan your trip around the type of experience you want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalGuide.map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {s.season}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{s.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Recommended:</span> {s.recommended}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Moroccan Spa &amp; Wellness Atmosphere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-hammam-interior.webp"
                alt="Traditional Moroccan hammam interior with vaulted ceilings, warm stone floors, and atmospheric steam"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Hammam Interior</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-wellness-spa.webp"
                alt="Luxury wellness spa in Morocco with modern treatment areas, plunge pools, and garden views"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Resort Spa</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-spa.webp"
                alt="Thermal spa pool with warm mineral waters surrounded by Moroccan architectural elements"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Thermal Pool Setting</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Etiquette Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spa &amp; Wellness Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these guidelines to ensure a respectful and smooth experience at any Moroccan
            spa, thermal bath, or wellness retreat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Wellness Travelers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting to Moulay Yacoub
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s top thermal springs are 20 km from Fes. Grand taxis from Fes run regularly for
                from 30 MAD per person. Private transfers through your hotel cost from 150 MAD each way.
                Allow a full half-day for the thermal experience including travel.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Health Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avoid thermal baths if you have heart conditions, severe hypertension, or open wounds.
                Pregnant visitors should consult a doctor before thermal bathing. Sulfur springs at Moulay
                Yacoub reach 54 degrees and are diluted for safe bathing, but the heat remains intense.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Solo Female Travelers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s luxury spas and yoga retreats are welcoming to solo female travelers. Many
                yoga retreats have predominantly female guests. At traditional thermal baths, women&apos;s
                hours provide a comfortable communal environment. Riad-based spas in Fes and Marrakech
                offer intimate, private settings.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Saving Money on Spa Experiences
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Visit public thermal baths (from 50 MAD) instead of resort spas for the same waters.
                Book riad-based spas in the medina for from 300-500 MAD rather than hotel spas at double
                the price. Multi-day spa packages offer 15-25% savings over individual sessions at most
                resorts.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What to Pack for a Wellness Trip
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bring a swimsuit (required at thermal pools and resort spas), flip-flops for wet areas,
                a light cover-up, and a reusable water bottle. For yoga retreats, pack your own mat if
                you prefer. Most luxury spas and retreats provide robes, slippers, and toiletries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Combining Spa Visits with Sightseeing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Schedule spa treatments for the afternoon, after a morning of medina exploration or
                mountain hiking. In Marrakech, pair a morning at the Jardin Majorelle with an afternoon
                spa session. In Fes, visit the tanneries in the morning and the Riad Laaroussa spa
                after lunch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the best thermal spas in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most acclaimed thermal spa experiences include Moulay Yacoub Thermal Springs near
                Fes (natural sulfur hot springs, from 200 MAD for a private session), La Mamounia Spa in
                Marrakech (from 1,500 MAD), Royal Mansour Spa (from 2,000 MAD), and the Sofitel Mogador
                Thalassotherapy center in Essaouira (from 800 MAD). Each offers a different experience,
                from natural geological springs to architect-designed luxury facilities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do spa treatments cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Prices span a wide range. Natural thermal baths at public facilities start from 50 MAD.
                A private thermal suite costs from 200 MAD. Mid-range spa packages with hammam and massage
                run from 400-800 MAD. Luxury resort treatments cost from 1,500-2,500 MAD. Full-day
                wellness packages at ultra-luxury properties start from 3,000 MAD. Seasonal pricing
                applies, with peak rates during October-April.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there yoga retreats in the Atlas Mountains?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Multiple yoga retreats operate year-round in the Atlas Mountains. Kasbah Tamadot near
                Asni offers complimentary sunrise yoga for guests (rooms from 2,500 MAD/night). Terre
                d&apos;Amanar near Tahannaout combines adventure activities with yoga (from 350 MAD per
                treatment). Independent retreat operators run multi-day programs in Imlil and Ouirgane
                with prices from 1,200 MAD per night all-inclusive.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is thalassotherapy and where can I find it in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Thalassotherapy uses heated seawater, marine algae, mud, and ocean minerals for therapeutic
                treatments. It originated in France and has been adopted by Morocco&apos;s Atlantic coast
                facilities. The top centers are Thalasso &amp; Spa Agadir (from 600 MAD per session, multi-day
                cures available) and Sofitel Mogador in Essaouira (from 800 MAD). Both pump filtered
                Atlantic seawater directly into treatment circuits.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I know about spa etiquette in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key rules: always respect gender separation at traditional hammams and public thermal
                baths. Tip therapists from 50-100 MAD at luxury spas. Avoid heavy meals 2 hours before
                thermal treatments. Book luxury spas 3-5 days in advance during peak season. Remove
                jewelry before entering thermal or sulfur pools. Silence your phone in treatment areas.
                Arrive 30 minutes early at resort spas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to visit Morocco for a wellness trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The best months are March-May and September-November. Temperatures are comfortable for
                outdoor yoga and hiking, thermal springs are enjoyable without extreme ambient heat, and
                luxury spas have good availability outside peak tourist season. Summer (June-August) is
                ideal for coastal thalassotherapy. Winter (December-February) is best for thermal springs
                and indoor hammam experiences.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can couples enjoy spa experiences together in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, at luxury resort spas. Properties like Royal Mansour, La Mamounia, Amanjena, and
                Mazagan all offer private couple suites with dual treatment beds. Couples packages
                start from 1,500 MAD and typically include hammam, massage, and a private relaxation area.
                Traditional hammams and public thermal baths are gender-separated, so couples must book
                luxury properties for shared experiences.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Morocco&apos;s thermal springs safe for visitors with health conditions?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most thermal springs are safe for healthy adults. Visitors with heart conditions,
                uncontrolled high blood pressure, or who are pregnant should consult a doctor before
                thermal bathing. Moulay Yacoub&apos;s springs emerge at 54 degrees Celsius and are diluted
                to safe bathing temperatures in the pools, but the heat remains significant. Many
                resort spas have medical consultants on staff. If you feel dizzy or unwell during a
                thermal bath, exit the water immediately and hydrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into traditional hammam culture, step-by-step guides, and product recommendations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-yoga-retreats" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Yoga Retreats Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to yoga retreats across Morocco, from Atlas Mountain lodges to coastal studios.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest hotels, riads, restaurants, and experiences for luxury travelers in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-wellness-retreats" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wellness Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Holistic wellness retreats, detox programs, and meditation escapes across the country.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-4">
            Plan Your Morocco Wellness Journey
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From ancient thermal springs to world-class luxury spas, Morocco offers wellness
            experiences for every budget and travel style. Start exploring our city guides to
            build your perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-4 h-4" />
              Explore Fes
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Waves className="w-4 h-4" />
              Explore Essaouira
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
