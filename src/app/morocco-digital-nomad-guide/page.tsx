import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Wifi,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Laptop,
  ShieldCheck,
  Globe,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Coffee,
  CreditCard,
  Plane,
  Banknote,
  Signal,
  MessageCircle,
  Stethoscope,
  Utensils,
  Bus,
  Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Digital Nomad Guide 2026 | Remote Work, Coworking & Cost of Living',
  description:
    'Complete guide to living and working remotely in Morocco. Top 5 cities for digital nomads, 8 coworking spaces from 150 MAD/day, cost of living from 8,000 MAD/month, WiFi speeds, visa info, best cafes with WiFi, and nomad communities across Marrakech, Casablanca, Rabat, Essaouira, and Tangier.',
  keywords: [
    'Morocco digital nomad',
    'remote work Morocco',
    'coworking space Morocco',
    'Morocco cost of living',
    'WiFi Morocco',
    'Marrakech digital nomad',
    'Casablanca coworking',
    'Rabat remote work',
    'Essaouira digital nomad',
    'Tangier coworking',
    'Morocco visa digital nomad',
    'Morocco internet speed',
    'work from Morocco',
    'Morocco expat guide',
    'Morocco freelancer',
    'coworking Marrakech',
    'cafe WiFi Morocco',
    'Morocco nomad community',
    'Morocco health insurance',
    'Morocco banking tips',
  ],
  openGraph: {
    title: 'Morocco Digital Nomad Guide 2026 | Remote Work, Coworking & Cost of Living',
    description:
      'Everything you need to work remotely from Morocco. Top cities, coworking spaces from 150 MAD/day, cost of living breakdown, WiFi speeds, visa info, and nomad communities.',
    url: `${BASE_URL}/morocco-digital-nomad-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-digital-nomad.webp`,
        width: 1200,
        height: 630,
        alt: 'Digital nomad working from a rooftop terrace in Morocco with views of the medina and Atlas Mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Digital Nomad Guide 2026 | Remote Work & Coworking',
    description:
      'Top 5 cities for remote work, coworking spaces from 150 MAD/day, cost of living from 8,000 MAD/month, visa info, and the best cafes with WiFi in Morocco.',
    images: [`${BASE_URL}/images/hero-digital-nomad.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-digital-nomad-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-digital-nomad-guide`,
  name: 'Morocco Digital Nomad Guide 2026 | Remote Work, Coworking & Cost of Living',
  description:
    'Complete guide to living and working remotely in Morocco. Top 5 cities, coworking spaces, cost of living, WiFi, visa info, and nomad communities.',
  url: `${BASE_URL}/morocco-digital-nomad-guide`,
  image: `${BASE_URL}/images/hero-digital-nomad.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-digital-nomad-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Digital Nomad Guide', item: `${BASE_URL}/morocco-digital-nomad-guide` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 5 CITIES FOR REMOTE WORK
   ═══════════════════════════════════════════════════════════════ */

const topCities = [
  {
    rank: 1,
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech.webp',
    wifiSpeed: '30-80 Mbps (fiber), 15-30 Mbps (cafe)',
    costOfLiving: 'From 10,000 MAD/month',
    climate: 'Hot summers, mild winters',
    description:
      'The most popular base for digital nomads in Morocco. Marrakech offers a thriving coworking scene, affordable riads to rent, a massive international community, and an energy that keeps you inspired. The medina is chaotic and beautiful, but the Gueliz and Hivernage neighborhoods offer modern apartments with fast fiber internet.',
    pros: ['Largest nomad community', 'Many coworking options', 'Vibrant social scene', 'International food options'],
    cons: ['Tourist prices in medina', 'Hot summers (40C+)', 'Persistent touts in tourist areas'],
  },
  {
    rank: 2,
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    wifiSpeed: '50-100 Mbps (fiber), 20-40 Mbps (cafe)',
    costOfLiving: 'From 12,000 MAD/month',
    climate: 'Mild year-round, Atlantic coast',
    description:
      'Morocco&apos;s economic capital has the fastest internet infrastructure and most professional coworking spaces. Casablanca is not a tourist city, which means real prices, real neighborhoods, and a genuine urban lifestyle. The Maarif, Gauthier, and Anfa districts are the digital nomad hotspots with modern apartments, fast fiber, and walkable amenities.',
    pros: ['Fastest internet in Morocco', 'Professional coworking scene', 'Non-tourist prices', 'Best flight connections'],
    cons: ['Less photogenic than other cities', 'More expensive rent', 'Less "exotic" feel'],
  },
  {
    rank: 3,
    city: 'Rabat',
    icon: ShieldCheck,
    image: '/images/hero-rabat.webp',
    wifiSpeed: '40-80 Mbps (fiber), 15-30 Mbps (cafe)',
    costOfLiving: 'From 9,000 MAD/month',
    climate: 'Mild Atlantic climate year-round',
    description:
      'The capital city is Morocco&apos;s best-kept secret for digital nomads. Rabat is clean, organized, safe, and has excellent infrastructure. The Hassan and Agdal neighborhoods offer affordable modern apartments with fiber internet. The Kasbah des Oudayas and Chellah ruins provide stunning backdrops for your weekends, and the Atlantic beach is minutes from the city center.',
    pros: ['Safest city in Morocco', 'Affordable for a capital', 'Excellent public transport', 'Beach + city lifestyle'],
    cons: ['Smaller nomad community', 'Quieter nightlife', 'Fewer coworking options'],
  },
  {
    rank: 4,
    city: 'Essaouira',
    icon: Globe,
    image: '/images/hero-essaouira.webp',
    wifiSpeed: '20-50 Mbps (fiber), 10-20 Mbps (cafe)',
    costOfLiving: 'From 8,000 MAD/month',
    climate: 'Cool Atlantic breeze, mild year-round',
    description:
      'The laid-back coastal town is a magnet for creative digital nomads, surfers, and artists. Essaouira&apos;s medina is UNESCO-listed and walkable, the Atlantic breeze keeps temperatures comfortable even in summer, and the cost of living is among the lowest in Morocco. WiFi speeds are improving with fiber rollout, but mobile data is a reliable backup.',
    pros: ['Lowest cost of living', 'Relaxed surf-town vibe', 'Cool climate year-round', 'Strong creative community'],
    cons: ['Slower WiFi speeds', 'Wind can be relentless', 'Limited nightlife', 'Fewer modern amenities'],
  },
  {
    rank: 5,
    city: 'Tangier',
    icon: Plane,
    image: '/images/hero-tangier-bay.webp',
    wifiSpeed: '30-70 Mbps (fiber), 15-25 Mbps (cafe)',
    costOfLiving: 'From 9,500 MAD/month',
    climate: 'Mediterranean, mild winters, warm summers',
    description:
      'Tangier sits at the crossroads of Africa and Europe, just 35 minutes by ferry from Spain. This makes it ideal for nomads who need to do visa runs or want easy access to Europe. The city has undergone a massive transformation in recent years with new infrastructure, a high-speed train connection to Casablanca, and a growing creative scene in the kasbah and downtown areas.',
    pros: ['35 min ferry to Spain (visa runs)', 'High-speed train to Casablanca', 'Growing creative scene', 'Mediterranean + Atlantic coast'],
    cons: ['Hilly terrain', 'Developing nomad infrastructure', 'Rainy winters'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COWORKING SPACES
   ═══════════════════════════════════════════════════════════════ */

const coworkingSpaces = [
  {
    name: 'Sun Desk',
    city: 'Taghazout (near Agadir)',
    price: 'From 150 MAD/day',
    monthly: 'From 2,500 MAD/month',
    icon: Laptop,
    amenities: ['High-speed WiFi (50 Mbps)', 'Standing desks', 'Surf breaks included', 'Community events', 'Rooftop terrace'],
    description:
      'A legendary surf-and-work coworking space in Taghazout village. Combines productive work sessions with world-class surfing. The community is tight-knit with weekly dinners, skill-sharing sessions, and surf lessons. Accommodation packages available from 5,000 MAD/month including workspace.',
  },
  {
    name: 'The Spot Cowork',
    city: 'Casablanca',
    price: 'From 200 MAD/day',
    monthly: 'From 3,000 MAD/month',
    icon: Building,
    amenities: ['100 Mbps fiber', 'Meeting rooms', 'Phone booths', 'Printing services', 'Kitchen and lounge'],
    description:
      'Casablanca&apos;s premier professional coworking space in the Maarif district. Attracts a mix of local entrepreneurs and international remote workers. Modern fit-out with Herman Miller chairs, excellent climate control, and a focus on productivity. Regular networking events and startup pitch nights.',
  },
  {
    name: 'Cowork Marrakech',
    city: 'Marrakech',
    price: 'From 180 MAD/day',
    monthly: 'From 2,800 MAD/month',
    icon: Star,
    amenities: ['60 Mbps WiFi', 'Garden workspace', 'Meeting rooms', 'Free tea and coffee', 'Networking events'],
    description:
      'Located in Gueliz, the modern district of Marrakech. A beautiful riad-style building with indoor and outdoor workspaces, including a shaded garden courtyard. The community is heavily international with regular skill-sharing workshops, language exchanges, and social outings to the medina.',
  },
  {
    name: 'Le 18 Coworking',
    city: 'Marrakech',
    price: 'From 200 MAD/day',
    monthly: 'From 3,200 MAD/month',
    icon: Zap,
    amenities: ['80 Mbps fiber', 'Private offices', 'Event space', 'Podcast recording room', 'Rooftop with Atlas views'],
    description:
      'A premium coworking space near Jardin Majorelle. Purpose-built for serious remote workers with soundproofed rooms, excellent AC, and reliable fiber. The rooftop terrace offers stunning Atlas Mountain views. Hosts monthly "Demo Days" for makers and creators to share their projects.',
  },
  {
    name: 'Rabat Cowork Hub',
    city: 'Rabat',
    price: 'From 170 MAD/day',
    monthly: 'From 2,600 MAD/month',
    icon: ShieldCheck,
    amenities: ['70 Mbps fiber', 'Quiet zones', 'Video call rooms', 'Lockers', 'Free parking'],
    description:
      'Located in the Agdal neighborhood, this is Rabat&apos;s top coworking space. Clean, professional, and quiet. Popular with government consultants, NGO workers, and digital nomads who prefer a calm environment. The dedicated video call rooms with soundproofing are a standout feature.',
  },
  {
    name: 'Essaouira Cowork',
    city: 'Essaouira',
    price: 'From 150 MAD/day',
    monthly: 'From 2,200 MAD/month',
    icon: Globe,
    amenities: ['40 Mbps WiFi', 'Ocean-view terrace', 'Creative studio', 'Community kitchen', 'Yoga sessions'],
    description:
      'A creative coworking space inside the medina walls with views of the Atlantic. Attracts writers, designers, and location-independent creatives. The pace is slower here, with mid-afternoon yoga sessions and community dinners on the terrace. Good WiFi backed by mobile data hotspots.',
  },
  {
    name: 'Technopark',
    city: 'Casablanca & Tangier',
    price: 'From 160 MAD/day',
    monthly: 'From 2,500 MAD/month',
    icon: Zap,
    amenities: ['100 Mbps fiber', 'Startup incubator', 'Conference rooms', 'Cafe on-site', 'Government-backed network'],
    description:
      'Morocco&apos;s largest government-backed tech hub with locations in Casablanca, Tangier, and Rabat. Houses over 200 startups and provides coworking spaces for visiting professionals. The infrastructure is excellent with redundant internet connections. Access to the broader Moroccan tech ecosystem and investment community.',
  },
  {
    name: 'Bwork Tangier',
    city: 'Tangier',
    price: 'From 180 MAD/day',
    monthly: 'From 2,800 MAD/month',
    icon: Laptop,
    amenities: ['60 Mbps fiber', 'Sea view spaces', 'Workshop room', 'Printing', 'Daily fresh pastries'],
    description:
      'A stylish coworking space in downtown Tangier with views of the Strait of Gibraltar. The location is ideal: walking distance to the medina, the port (for Spain ferry), and the Corniche. The community mixes European freelancers who ferry over from Spain with local Moroccan startups.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COST OF LIVING BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costOfLiving = [
  { category: 'Studio apartment (city center)', price: 'From 3,000 MAD/month', note: 'Modern with fiber internet. Medina riads from 2,500 MAD.' },
  { category: '1-bedroom apartment (city center)', price: 'From 4,500 MAD/month', note: 'Gueliz Marrakech, Maarif Casablanca, Agdal Rabat.' },
  { category: 'Shared apartment (per room)', price: 'From 2,000 MAD/month', note: 'Popular among nomads. Facebook groups are the best source.' },
  { category: 'Coworking membership', price: 'From 2,200 MAD/month', note: 'Unlimited access. Day passes from 150 MAD.' },
  { category: 'Daily food (eating out)', price: 'From 100 MAD/day', note: 'Street food lunch 25-40 MAD, restaurant dinner 60-100 MAD.' },
  { category: 'Groceries (weekly)', price: 'From 300 MAD/week', note: 'Markets are cheaper than supermarkets. Fresh produce is excellent.' },
  { category: 'Mobile data (monthly)', price: 'From 100 MAD/month', note: '20GB data. 200 MAD for 50GB. Maroc Telecom or Orange.' },
  { category: 'Home fiber internet', price: 'From 200 MAD/month', note: '20 Mbps plan. 100 Mbps from 400 MAD/month.' },
  { category: 'Local transport (tram/bus)', price: 'From 5 MAD/ride', note: 'Tram in Casablanca and Rabat. Petit taxi from 10 MAD.' },
  { category: 'Gym membership', price: 'From 300 MAD/month', note: 'Basic gym. Premium gyms from 500 MAD/month.' },
  { category: 'Coffee (cafe)', price: 'From 12 MAD', note: 'Espresso or nous-nous. Specialty coffee from 25 MAD.' },
  { category: 'Mint tea', price: 'From 10 MAD', note: 'The Moroccan staple. Free refills at some traditional cafes.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INTERNET & CONNECTIVITY
   ═══════════════════════════════════════════════════════════════ */

const internetOptions = [
  {
    type: 'Home Fiber (FTTH)',
    icon: Zap,
    speed: '20-100 Mbps',
    price: 'From 200 MAD/month',
    reliability: 'Excellent',
    description:
      'Fiber-to-the-home is available in most urban areas across Morocco. Maroc Telecom (IAM), Orange, and Inwi all offer fiber plans. The 20 Mbps plan at 200 MAD/month is the entry-level option, but the 100 Mbps plan at 400 MAD/month is worth it for video calls and large file uploads. Installation takes 3-7 days.',
  },
  {
    type: 'Mobile Data (4G/5G)',
    icon: Signal,
    speed: '10-50 Mbps',
    price: 'From 100 MAD/month for 20GB',
    reliability: 'Good in cities, variable rural',
    description:
      'Mobile data is an essential backup. Maroc Telecom has the best coverage nationwide. Orange offers competitive data packages. Buy a prepaid SIM at any telecom shop for 30 MAD and top up with data bundles. 5G is rolling out in Casablanca and Rabat in 2026 with speeds reaching 100+ Mbps in covered areas.',
  },
  {
    type: 'Cafe WiFi',
    icon: Coffee,
    speed: '5-30 Mbps',
    price: 'Free (buy a drink)',
    reliability: 'Variable, often shared',
    description:
      'Most modern cafes in tourist areas offer free WiFi. Quality varies hugely: specialty coffee shops tend to have the best connections (15-30 Mbps), while traditional cafes may only offer 5-10 Mbps shared among many users. Always test the speed before settling in for a work session. Password is usually on the receipt or ask the waiter.',
  },
  {
    type: 'Coworking WiFi',
    icon: Laptop,
    speed: '40-100 Mbps',
    price: 'Included with membership',
    reliability: 'Excellent (dedicated lines)',
    description:
      'Coworking spaces invest in dedicated fiber lines with backup connections. Expect 40-100 Mbps with consistent reliability. Most have Ethernet ports at desks for even faster, more stable connections. This is the most reliable option for video calls, streaming, and any bandwidth-intensive work.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VISA INFORMATION
   ═══════════════════════════════════════════════════════════════ */

const visaInfo = [
  {
    title: '90-Day Tourist Visa',
    icon: Plane,
    description:
      'Most nationalities (including USA, EU, UK, Canada, Australia) get 90 days visa-free on arrival. Your passport must be valid for at least 6 months. No questions asked at immigration, just a stamp. The 90-day clock starts the day you enter Morocco.',
    tips: ['Carry a printout of your accommodation booking', 'Have a return or onward ticket ready (rarely checked)', 'The 90-day limit is strictly enforced'],
  },
  {
    title: 'Visa Renewal (Border Run)',
    icon: Globe,
    description:
      'The most common strategy is a "border run" to Spain. Take the ferry from Tangier to Tarifa (35 minutes) or Algeciras (90 minutes). Spend a few days in Spain, then re-enter Morocco for a fresh 90-day stamp. Many nomads alternate between Morocco and Spain every 3 months. Budget from 500 MAD for a round-trip ferry ticket.',
    tips: ['Book ferry via Direct Ferries or at the port', 'FRS and Inter Shipping are the main operators', 'Go to Tarifa for the shortest crossing'],
  },
  {
    title: 'Visa Extension (At Police Station)',
    icon: ShieldCheck,
    description:
      'It is technically possible to request a visa extension at the local police station (Surete Nationale) before your 90 days expire. Extensions are granted on a case-by-case basis and require documentation including proof of accommodation, financial means, and a valid reason for extending. Success is not guaranteed and the process can take 2-4 weeks.',
    tips: ['Apply 2 weeks before your visa expires', 'Bring bank statements and accommodation proof', 'Extensions are typically for 30 days'],
  },
  {
    title: 'Digital Nomad Visa Prospects',
    icon: Laptop,
    description:
      'As of 2026, Morocco does not have a dedicated digital nomad visa. However, the government has signaled interest in creating one as part of its broader tech economy strategy. The Morocco Digital 2030 plan includes provisions for attracting remote workers. In the meantime, the 90-day tourist visa with border runs remains the standard approach for long-term nomads.',
    tips: ['Follow ANDA (Agence Nationale pour le Developpement du Numerique) for updates', 'Some nomads register as auto-entrepreneurs for a legal work basis', 'Long-term stay without work authorization is a gray area'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CAFES WITH WIFI
   ═══════════════════════════════════════════════════════════════ */

const bestCafes = [
  {
    name: 'Cafe Clock',
    city: 'Marrakech & Fes',
    wifiSpeed: '20-30 Mbps',
    price: 'Coffee from 25 MAD',
    icon: Coffee,
    description:
      'A cultural cafe with locations in both Marrakech and Fes medinas. Known for reliable WiFi, power outlets at every table, and a creative atmosphere. The rooftop terrace in Marrakech is a popular work spot. They host storytelling nights, live music, and language exchanges that make it easy to meet other nomads.',
    features: ['Power outlets at every table', 'Rooftop terrace', 'Cultural events', 'Full food menu'],
  },
  {
    name: 'Barometre Marrakech',
    city: 'Marrakech (Gueliz)',
    wifiSpeed: '25-35 Mbps',
    price: 'Coffee from 20 MAD',
    icon: Coffee,
    description:
      'A modern specialty coffee shop in Gueliz that has become the unofficial HQ for Marrakech digital nomads. Fast WiFi, great coffee, air conditioning, and a laptop-friendly atmosphere. The staff are accustomed to people working for hours. Breakfast and lunch menus are excellent and affordable.',
    features: ['Specialty coffee', 'Air conditioning', 'Laptop-friendly', 'Breakfast and lunch menus'],
  },
  {
    name: 'Loft 26',
    city: 'Casablanca (Maarif)',
    wifiSpeed: '30-40 Mbps',
    price: 'Coffee from 22 MAD',
    icon: Coffee,
    description:
      'A trendy cafe-cowork hybrid in Casablanca&apos;s Maarif neighborhood. Two floors with dedicated quiet zones upstairs and a social ground floor. The WiFi is fast and consistent, and they offer a "work package" that includes unlimited coffee and a reserved desk for 100 MAD/day.',
    features: ['Dedicated quiet zones', 'Work packages available', 'Two floors', 'Strong AC'],
  },
  {
    name: 'Cafe Hafa',
    city: 'Tangier',
    wifiSpeed: '10-15 Mbps',
    price: 'Mint tea from 12 MAD',
    icon: Coffee,
    description:
      'The legendary cliffside cafe overlooking the Strait of Gibraltar where the Rolling Stones and Paul Bowles once sat. The WiFi is basic and the tables are small, but the inspiration factor is off the charts. Best for light work, writing, and brainstorming. Not ideal for video calls. Come for the sunset sessions.',
    features: ['Iconic cliffside location', 'Historic atmosphere', 'Stunning strait views', 'Traditional mint tea'],
  },
  {
    name: 'The Garden Cafe',
    city: 'Rabat (Hassan)',
    wifiSpeed: '20-25 Mbps',
    price: 'Coffee from 18 MAD',
    icon: Coffee,
    description:
      'A peaceful garden cafe near the Chellah ruins in Rabat. The outdoor seating is shaded and comfortable, with decent WiFi and plenty of power outlets. Popular with local university students and the growing Rabat nomad crowd. The avocado toast has become legendary among the expat community.',
    features: ['Garden setting', 'Near Chellah ruins', 'Power outlets', 'Student-friendly prices'],
  },
  {
    name: 'Taros Cafe',
    city: 'Essaouira',
    wifiSpeed: '15-20 Mbps',
    price: 'Coffee from 20 MAD',
    icon: Coffee,
    description:
      'A multi-level cafe and restaurant on Place Moulay Hassan with a rooftop terrace overlooking the port and ramparts. The WiFi is reliable for a medina cafe, and the atmosphere is inspiring. Good for morning work sessions before the wind picks up. The rooftop becomes a social spot in the evening with live music on weekends.',
    features: ['Rooftop terrace', 'Port views', 'Live music weekends', 'Full restaurant menu'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NOMAD COMMUNITIES & MEETUPS
   ═══════════════════════════════════════════════════════════════ */

const nomadCommunities = [
  {
    name: 'Digital Nomads Morocco (Facebook)',
    type: 'Online Community',
    icon: Users,
    members: '15,000+ members',
    description:
      'The largest online community for digital nomads in Morocco. Active daily with questions about visas, apartments, WiFi, coworking, and meetup announcements. The go-to resource for newcomers. Search the group before posting as most common questions have been answered extensively.',
  },
  {
    name: 'Marrakech Expats & Nomads',
    type: 'Meetup Group',
    icon: Users,
    members: '3,000+ members',
    description:
      'Organizes weekly drinks, coworking sessions, and cultural excursions in Marrakech. The Thursday evening meetup at a rotating Gueliz bar is the best way to meet other nomads when you first arrive. Many lasting friendships and collaborations have started at these events.',
  },
  {
    name: 'Casablanca Startup Community',
    type: 'Professional Network',
    icon: Building,
    members: '5,000+ members',
    description:
      'More business-focused than the typical nomad group. Regular pitch nights, hackathons, and professional networking events. If you are a developer, designer, or startup founder, this is your tribe in Casablanca. Events are held at Technopark and various coworking spaces.',
  },
  {
    name: 'Nomad List Morocco Channel',
    type: 'Slack Community',
    icon: MessageCircle,
    members: '2,000+ members',
    description:
      'The Morocco channel on Nomad List&apos;s Slack workspace is active with real-time advice, apartment recommendations, and spontaneous meetup plans. Requires a Nomad List membership. The quality of advice tends to be higher than Facebook groups as members are more experienced.',
  },
  {
    name: 'Morocco Surf & Work Retreats',
    type: 'Organized Retreats',
    icon: Globe,
    members: 'Rolling cohorts',
    description:
      'Several organized retreat programs run year-round in Taghazout, Essaouira, and Imsouane. These combine coworking, accommodation, surf lessons, and community for a fixed monthly fee starting from 8,000 MAD/month. Ideal for first-time nomads who want a built-in social structure.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH & INSURANCE
   ═══════════════════════════════════════════════════════════════ */

const healthInfo = [
  {
    title: 'Travel Health Insurance',
    icon: ShieldCheck,
    description:
      'International travel health insurance is essential. SafetyWing (from 350 MAD/month) is the most popular among nomads: it covers medical emergencies, hospital stays, and even COVID-19. World Nomads offers more comprehensive adventure coverage. Genki is another option popular with European nomads. Always carry your policy number and emergency contact.',
  },
  {
    title: 'Private Clinics',
    icon: Stethoscope,
    description:
      'Morocco has excellent private healthcare in major cities. Clinique Internationale in Marrakech, Clinique du Parc in Casablanca, and Clinique Agdal in Rabat all have English-speaking doctors. A general consultation costs from 200 MAD. Many nomads find the quality of private healthcare surprisingly high, with short wait times and modern equipment.',
  },
  {
    title: 'Pharmacies',
    icon: Heart,
    description:
      'Pharmacies (marked with a green cross) are everywhere and many medications that require a prescription in Western countries are available over the counter in Morocco. Pharmacists are knowledgeable and often speak French and some English. Common medications are very affordable, often from 20 MAD for a course of antibiotics.',
  },
  {
    title: 'Dental Care',
    icon: Award,
    description:
      'Dental tourism is growing in Morocco. A dental cleaning costs from 200 MAD, a filling from 300 MAD, and veneers from 2,000 MAD per tooth. Major cities have modern dental clinics with French-trained dentists. Casablanca and Rabat have the best options. Many nomads get dental work done in Morocco at a fraction of Western prices.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BANKING & MONEY TIPS
   ═══════════════════════════════════════════════════════════════ */

const bankingTips = [
  {
    tip: 'Use Wise (TransferWise) for Transfers',
    icon: CreditCard,
    description:
      'The Moroccan dirham (MAD) is a partially controlled currency and cannot be purchased outside Morocco. Use Wise to transfer money to a Moroccan bank account or to withdraw MAD from ATMs at excellent exchange rates. The Wise debit card works at most Moroccan ATMs (BMCE, Attijariwafa, CIH).',
  },
  {
    tip: 'Carry Cash for Daily Spending',
    icon: Banknote,
    description:
      'Morocco is still largely a cash economy, especially in medinas, souks, local restaurants, and for petit taxis. Always have MAD cash on hand. ATMs are widely available in cities (look for BMCE, Attijariwafa, Banque Populaire). Withdraw larger amounts to minimize per-transaction ATM fees, which are typically 25-35 MAD.',
  },
  {
    tip: 'Open a Moroccan Bank Account',
    icon: Building,
    description:
      'For longer stays, opening a Moroccan bank account is possible but requires patience. CIH Bank is the most foreigner-friendly, requiring only a passport, proof of Moroccan address, and a minimum deposit from 500 MAD. The process takes 1-2 weeks. Having a local account makes paying rent, utilities, and subscriptions much easier.',
  },
  {
    tip: 'Credit Cards Are Limited',
    icon: CreditCard,
    description:
      'Credit and debit cards are accepted at hotels, large restaurants, supermarkets (Marjane, Carrefour), and modern cafes. But most traditional restaurants, souks, taxis, and smaller shops are cash-only. Visa and Mastercard are widely accepted where cards work. American Express is rarely accepted outside luxury hotels.',
  },
  {
    tip: 'Negotiate in Cash',
    icon: DollarSign,
    description:
      'In souks and with landlords, cash gets you better prices. When negotiating rent, offering to pay 3-6 months upfront in cash can get you a significant discount (10-20% off). Always count your change carefully and keep small bills (20 and 50 MAD notes) for daily transactions.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDigitalNomadGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-digital-nomad.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Digital Nomad Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Laptop className="w-4 h-4" />
            Remote Work &amp; Digital Nomads
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Digital Nomad Guide:
            <br className="hidden md:block" /> Work Remotely in the Kingdom
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 150 MAD/day coworking spaces to fiber internet at 100 Mbps. Your complete
            guide to living and working remotely in Morocco&apos;s top 5 nomad cities.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Digital Nomad Hotspot
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has quietly become one of the most compelling destinations for digital nomads
                in the world. The combination of affordable living, improving internet infrastructure,
                a 90-day visa-free entry for most nationalities, and an intoxicating culture that
                blends African, Arab, and Mediterranean influences makes it uniquely attractive.
              </p>
              <p>
                A comfortable nomad lifestyle in Morocco costs from 8,000 MAD/month (approximately
                800 USD). That covers rent, coworking, food, transport, and entertainment. In cities
                like Essaouira, you can live well for even less. Compare that to Lisbon, Bali, or
                Bangkok, and Morocco stands out as genuine value without sacrificing quality of life.
              </p>
              <p>
                The internet situation has transformed in recent years. Major cities now have fiber
                coverage reaching 50-100 Mbps, 4G/5G mobile data is affordable and reliable, and
                coworking spaces with dedicated lines are multiplying. The days of unreliable
                Moroccan WiFi are fading fast, though a mobile data backup is still recommended
                for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost of Living Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost of Living Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay as a digital nomad in Morocco. Prices reflect the main cities.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when accommodation prices may increase by 20-40%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {costOfLiving.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Budget Summary */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-moroccan p-6 text-center">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Budget Nomad
                </h3>
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-2">
                  From 8,000 MAD
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  per month. Shared room, street food, cafe WiFi, basic social life.
                </p>
              </div>
              <div className="card-moroccan p-6 text-center border-2 border-[var(--color-accent)]">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Comfortable Nomad
                </h3>
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-2">
                  From 12,000 MAD
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  per month. Own studio, coworking, mixed dining, active social life.
                </p>
              </div>
              <div className="card-moroccan p-6 text-center">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Premium Nomad
                </h3>
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-2">
                  From 18,000 MAD
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  per month. Nice 1-bed, premium cowork, restaurants, weekend trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 5 Cities for Remote Work ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 5 Cities for Remote Work
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each city has a different character. Choose based on your priorities: internet speed, cost, community, or lifestyle.
          </p>

          <div className="space-y-8">
            {topCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.rank} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="relative h-64 lg:h-auto lg:col-span-2">
                      <img
                        src={city.image}
                        alt={`${city.city}, Morocco - a top digital nomad destination with coworking spaces and cafe culture`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                            <span className="text-white font-bold text-sm">#{city.rank}</span>
                          </div>
                          <CityIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                          {city.city}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 lg:col-span-3">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-2 bg-[var(--surface-muted)] rounded-lg">
                          <Wifi className="w-4 h-4 mx-auto mb-1 text-[var(--color-accent)]" />
                          <p className="text-xs font-medium text-[var(--text-primary)]">WiFi Speed</p>
                          <p className="text-xs text-[var(--text-muted)]">{city.wifiSpeed}</p>
                        </div>
                        <div className="text-center p-2 bg-[var(--surface-muted)] rounded-lg">
                          <DollarSign className="w-4 h-4 mx-auto mb-1 text-[var(--color-accent)]" />
                          <p className="text-xs font-medium text-[var(--text-primary)]">Cost of Living</p>
                          <p className="text-xs text-[var(--text-muted)]">{city.costOfLiving}</p>
                        </div>
                        <div className="text-center p-2 bg-[var(--surface-muted)] rounded-lg">
                          <Globe className="w-4 h-4 mx-auto mb-1 text-[var(--color-accent)]" />
                          <p className="text-xs font-medium text-[var(--text-primary)]">Climate</p>
                          <p className="text-xs text-[var(--text-muted)]">{city.climate}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Pros
                          </h4>
                          <ul className="space-y-1">
                            {city.pros.map((pro, i) => (
                              <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                                <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-amber-700 mb-2 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Cons
                          </h4>
                          <ul className="space-y-1">
                            {city.cons.map((con, i) => (
                              <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                                <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coworking Spaces ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Laptop className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Coworking Spaces in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Eight tried-and-tested coworking spaces across Morocco, from surf-town setups to professional urban hubs.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices. Monthly rates offer significant savings over daily passes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coworkingSpaces.map((space) => {
              const SpaceIcon = space.icon;
              return (
                <div key={space.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpaceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {space.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {space.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {space.price}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {space.monthly}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{space.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {space.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Internet & Connectivity ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Internet &amp; Connectivity Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most important factor for any digital nomad. Here is the full picture of internet in Morocco in 2026.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {internetOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <OptionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {option.type}
                        </h3>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0 ml-4">
                          {option.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-[var(--color-gold)]" />
                          Speed: {option.speed}
                        </span>
                        <span className="flex items-center gap-1">
                          <Signal className="w-3 h-3 text-[var(--color-gold)]" />
                          Reliability: {option.reliability}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{option.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pro Tips Box */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Pro Tips for Reliable Internet
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Always have two internet sources: fiber at home and a mobile data SIM as backup.
                    Outages happen and you do not want to miss a client call.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Test WiFi before committing to an apartment. Ask the landlord what provider and
                    speed they have. Run a Speedtest during your viewing.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    Maroc Telecom has the best nationwide coverage. Orange has the best data deals.
                    Inwi is the cheapest but with less reliable coverage outside cities.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    For important video calls, use a coworking space with a dedicated line and book a
                    private phone booth or meeting room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa Information ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa &amp; Legal Information
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about staying legally in Morocco as a remote worker.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {visaInfo.map((visa, index) => {
                  const VisaIcon = visa.icon;
                  return (
                    <div key={visa.title} className="relative flex gap-6">
                      {/* Step number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <VisaIcon className="w-5 h-5 text-white" />
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          {visa.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{visa.description}</p>
                        <div className="space-y-2">
                          {visa.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-2 p-2 bg-[var(--surface-muted)] rounded-lg">
                              <Info className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                              <p className="text-xs text-[var(--text-muted)]">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Cafes with WiFi ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cafes with WiFi for Working
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six tried-and-tested cafes across Morocco where nomads actually get work done.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestCafes.map((cafe) => {
              const CafeIcon = cafe.icon;
              return (
                <div key={cafe.name} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <CafeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {cafe.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {cafe.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      {cafe.wifiSpeed}
                    </span>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {cafe.price}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">{cafe.description}</p>
                  <div className="space-y-1">
                    {cafe.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nomad Communities & Meetups ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nomad Communities &amp; Meetups
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Building a social network is key to a fulfilling nomad life. Here is where to find your people in Morocco.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {nomadCommunities.map((community) => {
              const CommunityIcon = community.icon;
              return (
                <div key={community.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CommunityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {community.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                            <span>{community.type}</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {community.members}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{community.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Health Insurance & Medical Care ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health Insurance &amp; Medical Care
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Staying healthy while working abroad. Morocco has good healthcare infrastructure at affordable prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {healthInfo.map((item) => {
              const HealthIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <HealthIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Banking & Money Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Banking &amp; Money Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Managing money in Morocco as a foreign remote worker. What works, what does not, and how to save.
          </p>

          <div className="space-y-6">
            {bankingTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.tip}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Digital Nomad Lifestyle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="Riad rooftop terrace at sunset in Morocco, a popular remote work spot for digital nomads"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rooftop Work Sessions</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-mint-tea.webp"
                alt="Traditional Moroccan mint tea served at a cafe, the perfect work companion for digital nomads"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Cafe Culture &amp; Mint Tea</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira-ramparts.webp"
                alt="Essaouira ramparts and Atlantic Ocean, a favorite coastal destination for remote workers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Coastal Nomad Life</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Nomads in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Time Zone Advantage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is on UTC+1 year-round (no daylight saving since 2018). This makes it
                ideal for working with European clients (same timezone as CET in winter, 1 hour
                behind in summer) and manageable for US East Coast clients (5-6 hours ahead).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Utensils className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Food for Fuel
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Eating well in Morocco is easy and cheap. A tagine lunch costs from 35 MAD, a
                sandwich from a snack shop from 15 MAD, and fresh orange juice from 5 MAD. Weekly
                markets have fresh produce at excellent prices. Most neighborhoods have a hanout
                (corner shop) for daily essentials.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Bus className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting Around
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Casablanca and Rabat have modern tram systems from 5 MAD/ride. Petit taxis are
                affordable from 10 MAD for short trips (insist on the meter). The Al Boraq
                high-speed train connects Tangier to Casablanca in 2 hours for from 150 MAD.
                InDrive and Careem are the Uber equivalents.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Learn Basic Darija
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moroccan Arabic (Darija) goes a long way. Learn: &quot;salam&quot; (hello),
                &quot;shukran&quot; (thanks), &quot;bshhal&quot; (how much), &quot;la shukran&quot;
                (no thanks), &quot;mezian&quot; (good). French is widely spoken in business settings.
                English is growing among younger Moroccans, especially in tourist cities.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety for Nomads
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is generally safe for digital nomads. Use common sense: do not flash
                expensive equipment in crowded areas, use a laptop lock in cafes, and keep backups
                of your work. Petty theft exists in tourist areas but violent crime against
                foreigners is rare. Rabat and Essaouira are the safest cities.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                VPN Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                VoIP services like WhatsApp calling and FaceTime are blocked in Morocco on mobile
                networks. Use a VPN (NordVPN, ExpressVPN, or Surfshark all work well) to bypass
                this restriction. WiFi networks typically do not block VoIP, but having a VPN
                installed is recommended regardless for security on public networks.
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
                Is Morocco good for digital nomads in 2026?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco has become one of the top digital nomad destinations in Africa and the MENA region.
                The combination of affordable living (from 8,000 MAD/month), improving internet (fiber up to
                100 Mbps), 90-day visa-free access, rich culture, and a growing community of remote workers
                makes it an excellent choice. The infrastructure continues to improve each year.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I work legally as a digital nomad in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco does not yet have a dedicated digital nomad visa. Most remote workers enter on a 90-day
                tourist visa and work for clients outside Morocco. This is a gray area legally. You are not
                working for a Moroccan employer, but you are technically conducting business activities on a
                tourist visa. The government has not cracked down on this, and a formal digital nomad visa is
                under discussion as part of the Morocco Digital 2030 strategy.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best city in Morocco for digital nomads?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech is the most popular due to its large nomad community, many coworking spaces, and
                vibrant atmosphere. However, Casablanca has the fastest internet, Rabat is the safest and
                most organized, Essaouira is the cheapest and most relaxed, and Tangier offers the easiest
                access to Europe. The best city depends on your priorities and working style.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How reliable is internet in Morocco for video calls?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In 2026, fiber internet in major cities is reliable for video calls with speeds of 40-100 Mbps.
                Cafe WiFi is hit-or-miss for calls. Coworking spaces offer the most reliable connection with
                dedicated lines and backup systems. Always have a mobile data SIM as backup. The situation
                has improved dramatically in recent years.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I find an apartment as a digital nomad in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Facebook groups (search &quot;Marrakech apartments&quot; or &quot;Casablanca rentals&quot;)
                are the most common method. Avito.ma is Morocco&apos;s Craigslist equivalent. For furnished
                short-term rentals, Airbnb works in all major cities. For the best deals, arrive in the city,
                stay in a hostel for a few days, and apartment hunt in person. Locals and other nomads in
                coworking spaces often know of available places.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo digital nomads?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe for solo travelers and digital nomads, including women. Standard
                travel precautions apply: avoid unlit areas at night, keep valuables secure, and be cautious in
                crowded tourist areas. The digital nomad community is welcoming and easy to join through
                coworking spaces and meetup groups. Rabat and Essaouira are particularly safe and calm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/sim-card" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Signal className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco SIM Card Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to buying a SIM card, data plans, and staying connected across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed budget breakdowns for every travel style, from backpacker to luxury in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Where to Stay in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From riads and hostels to long-term apartment rentals. Find the perfect base for your stay.
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
