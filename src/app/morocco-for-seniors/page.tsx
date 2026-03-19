import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight, Home, Shield, ShieldCheck, CheckCircle, Info, ArrowRight,
  MapPin, Users, Heart, Star, Globe, Sun, Wallet, Navigation, Car,
  BookOpen, Compass, Hotel, Map, Coffee, CalendarDays, Thermometer,
  Accessibility, Stethoscope, BadgeCheck, BriefcaseMedical, Plane,
  HandHeart, GlassWater,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco for Seniors 2026: Complete Travel Guide for Over 60 Travelers',
  description:
    'The ultimate guide to traveling Morocco as a senior in 2026. Accessibility tips, best cities for older travelers, health and medical info, pace-friendly itineraries, comfortable accommodations, guided tours, transport comfort, and travel insurance advice.',
  keywords: [
    'Morocco for seniors', 'Morocco senior travel', 'elderly travel Morocco',
    'over 60 travel Morocco', 'Morocco for older travelers', 'senior friendly Morocco',
    'Morocco accessibility', 'Morocco retirement travel', 'Morocco comfortable travel',
    'Morocco guided tours seniors', 'Morocco health travel tips', 'Morocco slow travel',
    'Morocco luxury senior', 'Morocco travel insurance seniors', 'Morocco senior tour packages',
  ],
  openGraph: {
    title: 'Morocco for Seniors 2026: Complete Travel Guide for Over 60 Travelers',
    description:
      'Everything seniors need to travel Morocco comfortably and safely. Accessibility tips, best cities, health info, pace-friendly itineraries, guided tours, and comfortable accommodations.',
    url: `${BASE_URL}/morocco-for-seniors`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-seniors.webp`,
        width: 1200,
        height: 630,
        alt: 'Senior couple enjoying a peaceful courtyard in a traditional Moroccan riad with mosaic tiles and a fountain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco for Seniors: 2026 Complete Travel Guide for Over 60s',
    description:
      'Accessibility tips, best cities, comfortable accommodations, health advice, guided tours, and pace-friendly itineraries for senior travelers in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco-seniors.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-for-seniors` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-for-seniors`,
  name: 'Morocco for Seniors 2026: Complete Travel Guide for Over 60 Travelers',
  description:
    'Comprehensive guide for senior travelers visiting Morocco. Covers accessibility, best cities, health and medical info, comfortable accommodations, guided tours, transport options, and pace-friendly itineraries.',
  url: `${BASE_URL}/morocco-for-seniors`,
  image: `${BASE_URL}/images/hero-morocco-seniors.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-for-seniors`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  audience: {
    '@type': 'PeopleAudience',
    suggestedMinAge: 60,
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco for Seniors', item: `${BASE_URL}/morocco-for-seniors` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQPage
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good destination for senior travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is an excellent destination for seniors. The culture deeply respects elders, the climate is warm and sunny for most of the year, and there is a wide range of comfortable accommodations including luxury riads and five-star hotels. Guided tours handle all logistics, and the pace can be tailored to your comfort level. Many cities have modern medical facilities, and the cost of living is very affordable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best cities in Morocco for older travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech offers the best tourist infrastructure with luxury accommodations and guided experiences. Rabat is modern, clean, and easy to navigate with a tram system. Essaouira has a flat, walkable medina and a relaxed coastal atmosphere. Agadir is a modern resort city with wide streets and beach accessibility. Fes is culturally rich but the medina has steep hills, so a guide and comfortable shoes are essential.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there accessible accommodations in Morocco for seniors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. International chain hotels like Sofitel, Four Seasons, Fairmont, and Marriott offer elevators, accessible rooms, and medical assistance. Many luxury riads have been renovated with ground-floor rooms and walk-in showers. When booking, specifically request ground-floor rooms and ask about step-free access. Prices for accessible luxury accommodations start from 1,200 MAD per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'What medical facilities are available for tourists in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has private hospitals and clinics in all major cities that meet international standards. Clinique Internationale in Marrakech, Clinique du Parc in Casablanca, and Clinique Agdal in Rabat have English-speaking doctors. Most pharmacies are well-stocked with common medications. Bring a sufficient supply of your prescription medications with a doctor letter, as specific brands may not be available locally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need travel insurance for Morocco as a senior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel insurance is essential for seniors visiting Morocco. Standard policies often have age limits, so use specialist providers like AllClear, Staysure, or World Nomads that cover travelers over 65. Ensure your policy covers pre-existing conditions, medical evacuation, trip cancellation, and repatriation. A comprehensive policy for a two-week trip typically costs between 800 and 2,500 MAD depending on age and coverage level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for seniors to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) are ideal for seniors. Temperatures range from 20 to 28 degrees Celsius, which is comfortable for walking and sightseeing. Avoid June through August when inland cities exceed 40 degrees Celsius, which can be dangerous for older travelers. Winter (December to February) is mild on the coast but cold in the mountains and desert at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accessible are Moroccan medinas for people with mobility issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional medinas can be challenging with narrow streets, uneven cobblestones, steps, and slopes. Marrakech medina has some wider main streets but many narrow alleys. Essaouira has the most accessible medina with a relatively flat grid layout. Using a licensed guide who knows accessible routes is highly recommended. Consider exploring medinas in the morning when they are less crowded and cooler.',
      },
    },
    {
      '@type': 'Question',
      name: 'What transport is most comfortable for senior travelers in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private drivers are the most comfortable option for seniors, typically costing from 1,200 MAD per day. The Al Boraq high-speed train between Tangier and Casablanca is modern and smooth. ONCF first-class train carriages have comfortable assigned seats. For longer distances, domestic flights with Royal Air Maroc connect major cities. Avoid grand taxis, which are cramped shared vehicles with limited legroom.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SENIOR TRAVEL OVERVIEW
   ═══════════════════════════════════════════════════════════════ */

const seniorOverview = [
  {
    label: 'Cultural Respect',
    value: 'Elders Honored',
    detail: 'Moroccan culture deeply respects older people',
    icon: Heart,
  },
  {
    label: 'Climate',
    value: '300+ Sunny Days',
    detail: 'Warm Mediterranean and semi-arid climate year-round',
    icon: Sun,
  },
  {
    label: 'Healthcare',
    value: 'Private Clinics Available',
    detail: 'English-speaking doctors in all major cities',
    icon: Stethoscope,
  },
  {
    label: 'Value for Money',
    value: 'Very Affordable',
    detail: 'Luxury experiences at a fraction of European prices',
    icon: Wallet,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR SENIORS
   ═══════════════════════════════════════════════════════════════ */

const bestCitiesForSeniors = [
  {
    city: 'Marrakech',
    rating: 5,
    image: '/images/hero-marrakech.webp',
    vibe: 'Vibrant with luxury options',
    description:
      'Marrakech is the top choice for senior travelers thanks to its exceptional tourist infrastructure. The city offers world-class luxury riads and hotels, professional guided tours that handle all logistics, and an extraordinary range of cultural experiences. The Gueliz new town area is modern and easy to navigate, and many hotels offer wheelchair access and medical assistance on call.',
    highlights: [
      'Luxury accommodations from 800 MAD per night with elevator access',
      'Majorelle Garden and Bahia Palace are accessible on flat ground',
      'Private cooking classes and hammam experiences available',
      'Modern hospitals and pharmacies within 15 minutes',
    ],
  },
  {
    city: 'Essaouira',
    rating: 5,
    image: '/images/hero-essaouira.webp',
    vibe: 'Relaxed coastal pace',
    description:
      'Essaouira is ideal for seniors who prefer a gentle pace. The medina is one of the most accessible in Morocco with a relatively flat grid layout and manageable size. The Atlantic breeze keeps temperatures comfortable even in summer, and the relaxed atmosphere with excellent seafood makes it perfect for leisurely exploration.',
    highlights: [
      'Flat, grid-layout medina that is easy to navigate on foot',
      'Cool ocean breezes keep temperatures comfortable year-round',
      'Fresh seafood restaurants with terrace seating from 80 MAD',
      'Small enough to explore without exhaustion',
    ],
  },
  {
    city: 'Rabat',
    rating: 5,
    image: '/images/hero-rabat.webp',
    vibe: 'Modern and organized',
    description:
      'Morocco\'s capital is one of the easiest cities for seniors to navigate. Modern infrastructure, a clean tram system, wide boulevards, and well-maintained public spaces make Rabat feel more European than many Moroccan cities. The medina is clean and organized, and cultural sites are spread across manageable distances.',
    highlights: [
      'Modern tram system with step-free access at all stops',
      'Wide, well-maintained boulevards and sidewalks',
      'Hassan Tower and Mausoleum are accessible on flat ground',
      'Major hospitals and international clinics nearby',
    ],
  },
  {
    city: 'Agadir',
    rating: 4,
    image: '/images/hero-agadir.webp',
    vibe: 'Beach resort comfort',
    description:
      'Agadir is the most physically accessible city in Morocco. Rebuilt as a modern resort city after the 1960 earthquake, it has wide streets, modern buildings, and resort-style infrastructure. The long beachfront promenade is flat and perfect for morning walks. It offers maximum comfort for seniors with mobility considerations.',
    highlights: [
      'Modern grid layout with wide, flat streets and sidewalks',
      'Beachfront promenade ideal for gentle walks and wheelchair users',
      'All-inclusive resorts with full accessibility features',
      'Modern Souss-Massa hospital with international standards',
    ],
  },
  {
    city: 'Fes',
    rating: 3,
    image: '/images/hero-fes.webp',
    vibe: 'Culturally rich but challenging',
    description:
      'Fes offers the most authentic cultural experience in Morocco, but seniors should plan carefully. The ancient medina has steep hills, narrow passages, and uneven cobblestones. A licensed guide is essential. Stay in a luxury riad with ground-floor access and take the medina in short morning sessions with rest breaks.',
    highlights: [
      'The world\'s most authentic medieval city experience',
      'Licensed guides who know step-free routes through the medina',
      'Exceptional luxury riads with ground-floor rooms available',
      'Ville Nouvelle area is modern and flat for easy walking',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH AND MEDICAL INFO
   ═══════════════════════════════════════════════════════════════ */

const healthMedicalInfo = [
  {
    topic: 'Prescription Medications',
    icon: BriefcaseMedical,
    description:
      'Bring a full supply of all prescriptions plus an extra week as buffer. Carry in original packaging with a doctor\'s letter. Specific brands may not be available locally, though generics are stocked.',
    tips: [
      'Carry medications in hand luggage, never in checked bags',
      'Bring a doctor\'s letter in English and French listing all medications',
      'Pack an extra week of all prescriptions as a safety buffer',
      'Pharmacies in Morocco are marked with green crosses and are widespread',
    ],
  },
  {
    topic: 'Private Hospitals and Clinics',
    icon: Stethoscope,
    description:
      'Private hospitals in all major cities have English-speaking doctors, modern equipment, and reasonable fees. Standard consultations from 300 MAD. Emergency treatment available 24 hours.',
    tips: [
      'Clinique Internationale Marrakech: English-speaking staff, 24-hour emergency',
      'Clinique du Parc Casablanca: full-service private hospital',
      'Clinique Agdal Rabat: modern facility near the embassy district',
      'Your hotel or riad can arrange a doctor visit to your room if needed',
    ],
  },
  {
    topic: 'Heat and Hydration',
    icon: Thermometer,
    description:
      'Heat is the biggest health risk for seniors. Inland cities exceed 40 degrees Celsius in summer. Plan outdoor activities for early morning or late afternoon, and rest during the hottest hours.',
    tips: [
      'Drink at least 2 to 3 liters of bottled water daily',
      'Avoid outdoor activities between 12:00 and 16:00 in summer months',
      'Wear a wide-brimmed hat, sunglasses, and loose light-colored clothing',
      'Watch for signs of heat exhaustion: dizziness, nausea, rapid heartbeat',
    ],
  },
  {
    topic: 'Food and Water Safety',
    icon: GlassWater,
    description:
      'Drink only bottled water, including for brushing teeth. Choose busy restaurants with high food turnover. Avoid raw salads and unpeeled fruits from street vendors.',
    tips: [
      'Drink only sealed bottled water from reputable brands like Sidi Ali or Ain Saiss',
      'Eat at restaurants with high turnover where food is freshly prepared',
      'Cooked tagines and grilled meats are generally safe choices',
      'Carry anti-diarrhea medication and oral rehydration sachets',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMFORTABLE ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const comfortableAccommodations = [
  {
    type: 'Luxury Riads with Ground-Floor Access',
    icon: Heart,
    priceRange: 'From 800 MAD / night',
    bestFor: 'Cultural atmosphere, personal service',
    description:
      'The most charming option for seniors. Best luxury riads offer ground-floor rooms with walk-in showers. Staff arrange transport, accommodate dietary needs, and the courtyard setting is perfect for relaxing.',
    tips: [
      'Always request a ground-floor room when booking to avoid steep riad staircases',
      'Ask about walk-in showers versus traditional bathtub-only bathrooms',
      'Staff will arrange trusted drivers, guides, and restaurant reservations',
      'Riad La Sultana and Royal Mansour in Marrakech are senior-friendly',
    ],
  },
  {
    type: 'Five-Star International Hotels',
    icon: Hotel,
    priceRange: 'From 1,500 MAD / night',
    bestFor: 'Full accessibility, modern amenities',
    description:
      'International chains like Four Seasons Marrakech, Sofitel Rabat, and Fairmont Royal Palm offer elevators, accessible rooms, 24-hour medical assistance, and staff trained in senior guest needs. The safest choice for travelers with mobility concerns.',
    tips: [
      'Request accessible rooms with grab bars, walk-in showers, and wide doorways',
      'Four Seasons and Fairmont have on-call medical services',
      'Concierge services arrange private tours with accessible vehicles',
      'Many offer airport wheelchair assistance and private transfers',
    ],
  },
  {
    type: 'Boutique Hotels in Ville Nouvelle',
    icon: Star,
    priceRange: 'From 600 MAD / night',
    bestFor: 'Modern comfort, easy neighborhood access',
    description:
      'New town hotels balance Moroccan charm with modern convenience. Wide sidewalks, restaurants, and pharmacies are walking distance. Easier to navigate than medina locations.',
    tips: [
      'Gueliz district in Marrakech has flat streets and modern amenities',
      'Look for hotels with elevators and 24-hour reception',
      'Modern areas have ATMs, pharmacies, and supermarkets within walking distance',
      'Taxis to the medina are inexpensive and take 5 to 10 minutes',
    ],
  },
  {
    type: 'All-Inclusive Beach Resorts',
    icon: Sun,
    priceRange: 'From 1,200 MAD / night',
    bestFor: 'Maximum convenience, relaxation focus',
    description:
      'All-inclusive resorts in Agadir offer the easiest experience for seniors. Meals, activities, and pool access are handled. Many have on-site spas, adapted pools, and medical staff for peace of mind.',
    tips: [
      'RIU and Iberostar in Agadir have excellent accessibility features',
      'All-inclusive packages remove the stress of daily meal planning',
      'Ask about adapted rooms with roll-in showers before booking',
      'Seasonal pricing can change; book shoulder season for best value',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED TOURS FOR SENIORS
   ═══════════════════════════════════════════════════════════════ */

const seniorFriendlyTours = [
  {
    name: 'Private Guided City Tours',
    icon: Map,
    priceRange: 'From 600 MAD / half day',
    description:
      'Private guides tailor pace to your comfort, know accessible medina routes, and handle all vendor interactions. The single best investment for senior travelers in Morocco.',
    bookingTip: 'Request a guide experienced with senior travelers. Your hotel can arrange this. Licensed guides carry official ID cards.',
  },
  {
    name: 'Small Group Cultural Tours',
    icon: Users,
    priceRange: 'From 8,000 MAD / 7 days',
    description:
      'Companies like Saga Holidays and Riviera Travel offer small-group tours for over-50s with comfortable hotels, air-conditioned vehicles, and gentle daily itineraries with built-in rest time.',
    bookingTip: 'Book tours labeled "gentle pace" or "easy walking" for the most comfortable experience.',
  },
  {
    name: 'Cooking Classes and Food Tours',
    icon: Coffee,
    priceRange: 'From 400 MAD / class',
    description:
      'Seated cooking classes teach tagine, couscous, and pastilla from expert Moroccan cooks. A wonderful low-impact cultural activity. Food tours involve gentle walking with frequent stops.',
    bookingTip: 'La Maison Arabe and Amal Center in Marrakech offer seated classes. Ask for a private session.',
  },
  {
    name: 'Private Driver Day Excursions',
    icon: Car,
    priceRange: 'From 1,200 MAD / full day',
    description:
      'A private driver with air-conditioned vehicle is ideal for exploring beyond cities. Visit the Atlas Mountains, Ouzoud Waterfalls, or scenic routes with stops at your leisure.',
    bookingTip: 'Request a Mercedes Vito or Toyota Land Cruiser for best comfort. Your hotel can arrange a trusted driver.',
  },
  {
    name: 'Garden and Palace Visits',
    icon: Compass,
    priceRange: 'From 70 MAD / entrance',
    description:
      'Majorelle Garden has paved paths and seating. Bahia Palace is on one level. Menara Gardens offer flat walks. Among the most accessible cultural attractions in Morocco.',
    bookingTip: 'Visit in the morning when cooler and less crowded. Wheelchair access varies; call ahead.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT COMFORT
   ═══════════════════════════════════════════════════════════════ */

const transportComfort = [
  {
    mode: 'Private Driver',
    icon: Car,
    comfortRating: 'Excellent',
    ratingColor: 'text-green-700',
    description:
      'The best transport option for seniors. Drivers handle navigation and logistics while you relax in air-conditioned comfort. Stop anywhere for photos, rest, or refreshments.',
    tips: [
      'Typical cost from 1,200 MAD per day including fuel and the driver',
      'Request a Mercedes Vito, Toyota Land Cruiser, or similar comfortable vehicle',
      'Your hotel or riad can recommend a trusted driver',
      'Agree on the itinerary, stops, and total price before departure',
    ],
  },
  {
    mode: 'First-Class Trains (ONCF)',
    icon: Navigation,
    comfortRating: 'Very Good',
    ratingColor: 'text-green-700',
    description:
      'ONCF trains connect major cities with comfortable first-class carriages offering assigned seats, air conditioning, and quiet atmosphere. The Al Boraq high-speed train is modern and smooth.',
    tips: [
      'Book first class for assigned seats, more space, and quieter carriages',
      'The Al Boraq high-speed train is the smoothest ride in Morocco',
      'Rabat Agdal station is newer and more accessible than Rabat Ville',
      'Assistance for boarding can be requested at major stations',
    ],
  },
  {
    mode: 'Domestic Flights',
    icon: Plane,
    comfortRating: 'Good',
    ratingColor: 'text-green-700',
    description:
      'Royal Air Maroc connects major cities with short flights. Marrakech to Fes takes one hour versus seven by train. Wheelchair assistance available at all airports.',
    tips: [
      'Marrakech to Fes flights from 400 MAD if booked in advance',
      'Request wheelchair or buggy assistance when booking',
      'Domestic flights eliminate exhausting overland journeys',
      'Casablanca Mohammed V is the main hub for connections',
    ],
  },
  {
    mode: 'Premium Buses (CTM)',
    icon: Car,
    comfortRating: 'Adequate',
    ratingColor: 'text-amber-700',
    description:
      'CTM and Supratours serve routes not covered by trains (Essaouira, Chefchaouen) with assigned seats and air conditioning. Seats may feel cramped on longer journeys. Rest stops every 2-3 hours.',
    tips: [
      'Book seats near the front for less bumpy ride and easier exit',
      'CTM buses have air conditioning and assigned seating',
      'Marrakech to Essaouira takes approximately 3 hours by CTM bus',
      'Consider a private driver for longer routes if budget allows',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACE-FRIENDLY ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const seniorItineraries = [
  {
    title: 'Gentle Introduction to Morocco (7 Days)',
    icon: Heart,
    difficulty: 'Easy',
    budget: 'From 12,000 MAD total (comfortable)',
    highlights: 'Marrakech, Essaouira',
    days: [
      { day: 'Day 1', location: 'Arrive Marrakech', activity: 'Airport transfer to luxury riad. Rest, settle in, and gentle evening walk in Gueliz.' },
      { day: 'Day 2', location: 'Marrakech', activity: 'Private guided tour of Bahia Palace and Majorelle Garden (flat, accessible). Afternoon rest. Optional hammam.' },
      { day: 'Day 3', location: 'Marrakech', activity: 'Gentle medina walk with guide. Afternoon: private cooking class (seated).' },
      { day: 'Day 4', location: 'Essaouira', activity: 'Private driver (2.5 hours) with argan cooperative stop. Seafront hotel. Evening rampart walk.' },
      { day: 'Day 5', location: 'Essaouira', activity: 'Gentle medina exploration, art galleries, seafood lunch at the port from 100 MAD.' },
      { day: 'Day 6', location: 'Return', activity: 'Free morning. Afternoon driver back to Marrakech. Farewell dinner.' },
      { day: 'Day 7', location: 'Departure', activity: 'Relaxed morning. Private transfer to Marrakech airport.' },
    ],
  },
  {
    title: 'Imperial Cities at a Gentle Pace (10 Days)',
    icon: Globe,
    difficulty: 'Moderate',
    budget: 'From 18,000 MAD total (comfortable)',
    highlights: 'Marrakech, Rabat, Fes',
    days: [
      { day: 'Day 1-2', location: 'Marrakech', activity: 'Arrive and rest. Day 2: Bahia Palace, Saadian Tombs, Majorelle Garden with guide. Hammam.' },
      { day: 'Day 3', location: 'Train to Rabat', activity: 'First-class train (4 hours). Hotel in Agdal district. Evening tram ride.' },
      { day: 'Day 4', location: 'Rabat', activity: 'Hassan Tower, Mausoleum (flat). Kasbah des Oudaias. Tea overlooking the river.' },
      { day: 'Day 5', location: 'Train to Fes', activity: 'Train (2.5 hours). Luxury riad ground-floor room. Rest. Evening Ville Nouvelle walk.' },
      { day: 'Day 6', location: 'Fes', activity: 'Private guided medina tour on accessible routes. Bou Inania, tanneries, artisan workshops.' },
      { day: 'Day 7', location: 'Fes', activity: 'Cooking class. Jnan Sbil Garden. Or day trip to Meknes and Volubilis.' },
      { day: 'Day 8', location: 'Train to Marrakech', activity: 'First-class train (7 hours via Casablanca). Rest evening.' },
      { day: 'Day 9', location: 'Marrakech', activity: 'Free day: shopping, spa, or Ourika Valley day trip. Farewell dinner.' },
      { day: 'Day 10', location: 'Departure', activity: 'Private transfer to airport.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVEL INSURANCE
   ═══════════════════════════════════════════════════════════════ */

const travelInsuranceTips = [
  {
    topic: 'Age-Specific Coverage',
    icon: Shield,
    description:
      'Many standard policies have age limits at 65-75. Specialist providers like AllClear, Staysure, and World Nomads offer policies for older travelers with no upper age limit at higher premiums.',
  },
  {
    topic: 'Pre-Existing Conditions',
    icon: Stethoscope,
    description:
      'Declare all conditions honestly; undisclosed conditions void your policy. Senior-focused insurers cover high blood pressure, diabetes, and heart conditions at reasonable premiums.',
  },
  {
    topic: 'Medical Evacuation',
    icon: Plane,
    description:
      'Ensure coverage for medical evacuation and repatriation. This is the most important component. Evacuation from Morocco can cost from 50,000 MAD without insurance.',
  },
  {
    topic: 'Trip Cancellation',
    icon: CalendarDays,
    description:
      'Choose policies covering cancellation for medical reasons, including conditions developing after booking. Some offer "cancel for any reason" at higher premiums.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCESSIBILITY TIPS
   ═══════════════════════════════════════════════════════════════ */

const accessibilityTips = [
  {
    area: 'Medina Navigation',
    tips: [
      'Hire a licensed guide who knows accessible routes with minimal stairs',
      'Visit medinas in the early morning when streets are emptiest and coolest',
      'Wear supportive shoes with good grip for uneven cobblestone surfaces',
      'Plan medina visits in 1 to 2 hour sessions with rest breaks',
    ],
  },
  {
    area: 'Wheelchair and Mobility Aid Access',
    tips: [
      'Traditional medinas are very difficult for wheelchairs due to narrow streets and steps',
      'Modern areas (Gueliz Marrakech, Ville Nouvelle Fes, Agdal Rabat) are more accessible',
      'Five-star hotels have the best wheelchair-accessible facilities',
      'Request wheelchair assistance at airports when booking flights',
    ],
  },
  {
    area: 'Dietary Needs and Allergies',
    tips: [
      'Moroccan cuisine naturally accommodates many dietary needs: gluten-free tagines, vegetable couscous',
      'Inform your riad or hotel of dietary restrictions at check-in',
      'Carry a dietary card in Arabic and French explaining your allergies',
      'Nuts are widely used in Moroccan cooking; alert restaurants if allergic',
    ],
  },
  {
    area: 'Communication and Emergencies',
    tips: [
      'Emergency numbers: 19 (police), 15 (ambulance), 150 (fire)',
      'Buy a local SIM card at the airport from 30 MAD',
      'Download offline Google Maps and save your hotel address in Arabic',
      'Carry a card with your hotel address in Arabic for taxi drivers',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoForSeniorsPage() {
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

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-morocco-seniors.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco for Seniors</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <HandHeart className="w-4 h-4" /> Senior Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco for Seniors<br className="hidden md:block" /> &mdash; Travel Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide for travelers over 60. Accessibility tips, comfortable accommodations,
            health advice, pace-friendly itineraries, and guided tour recommendations.
          </p>
        </div>
      </section>
      <div className="zellige-border" />

      {/* INTRODUCTION */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Perfect for Senior Travelers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most rewarding destinations for travelers over 60. The country offers a
                unique combination of rich culture, warm climate, affordable luxury, and a deep cultural respect
                for elders that you will feel in every interaction. In Moroccan society, older people are honored
                and treated with genuine deference, making senior travelers feel valued and welcome.
              </p>
              <p>
                This guide covers every aspect of visiting Morocco as a senior &mdash; from accessible
                accommodations and navigating ancient medinas safely, to health considerations, pace-friendly
                itineraries, and guided tour recommendations. With modern private hospitals in every major city,
                professional guides, and luxury accommodations at a fraction of European prices, Morocco offers
                comfort and cultural richness in equal measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SENIOR TRAVEL OVERVIEW */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Seniors Love Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Cultural richness, comfort, and affordability that few destinations can match.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seniorOverview.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <StatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{stat.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{stat.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">Cultural advantage:</span> In Morocco,
                age brings respect. Older travelers are treated with more courtesy, patience, and warmth. You will
                be offered seats, given priority, and addressed with respectful language. The Moroccan pace of life
                &mdash; tea ceremonies, unhurried meals, and leisurely strolls &mdash; naturally suits travelers who
                prefer quality over speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST CITIES FOR SENIORS */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities in Morocco for Senior Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Top destinations reviewed from a senior traveler&apos;s perspective.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestCitiesForSeniors.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`${city.city}, Morocco — a popular destination for senior travelers`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white mb-1">
                      {city.city}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < city.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-white/30'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-white/80">{city.vibe}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Senior-Friendly Highlights
                    </h4>
                    <div className="space-y-1.5">
                      {city.highlights.map((h, i) => (
                        <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH AND MEDICAL INFO */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health and Medical Information
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything seniors need to know about medical facilities, medications, and health precautions.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {healthMedicalInfo.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.topic} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.topic}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMFORTABLE ACCOMMODATIONS */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Comfortable Accommodations for Seniors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best accommodation types for senior travelers with accessibility tips and price guidance.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {comfortableAccommodations.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-semibold text-[var(--color-accent)]">{acc.priceRange}</span>
                        <span className="text-xs text-[var(--text-muted)]">Best for: {acc.bestFor}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{acc.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {acc.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GUIDED TOURS FOR SENIORS */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Senior-Friendly Tours and Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From private guided tours to gentle cultural activities, all adapted to your pace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seniorFriendlyTours.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TourIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tour.name}
                      </h3>
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{tour.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{tour.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Booking Tip:</span> {tour.bookingTip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSPORT COMFORT */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Options Ranked by Comfort
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each transport mode rated for comfort, accessibility, and suitability for older travelers.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {transportComfort.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TransportIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {transport.mode}
                      </h3>
                      <span className={`text-sm font-semibold ${transport.ratingColor}`}>
                        Comfort: {transport.comfortRating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{transport.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {transport.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACE-FRIENDLY ITINERARIES */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pace-Friendly Itineraries for Seniors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Curated itineraries with built-in rest time and gentle daily schedules.
          </p>

          <div className="space-y-10 max-w-4xl mx-auto">
            {seniorItineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.title} className="card-moroccan overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-transparent border-b border-[var(--color-accent)]/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <ItinIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {itin.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                            {itin.difficulty}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <Wallet className="w-3 h-3" /> {itin.budget}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {itin.highlights}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {itin.days.map((day) => (
                        <div key={day.day} className="flex items-start gap-4">
                          <div className="min-w-[80px]">
                            <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                              {day.day}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{day.location}</h4>
                            <p className="text-xs text-[var(--text-muted)]">{day.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY TIPS */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Accessibility className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accessibility Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for navigating Morocco with mobility considerations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {accessibilityTips.map((section) => (
              <div key={section.area} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {section.area}
                </h3>
                <div className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL INSURANCE */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Travel Insurance for Senior Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential, not optional. Here is what to look for and which providers specialize in senior travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {travelInsuranceTips.map((item) => {
              const InsIcon = item.icon;
              return (
                <div key={item.topic} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.topic}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <BookOpen className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Estimated Insurance Costs
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              For a 2-week trip: from 800 MAD (age 60-65), from 1,500 MAD (age 66-75), from 2,500 MAD (age 76+).
              Specialist senior providers like AllClear and Staysure are recommended for over-75s.
              Seasonal pricing can change; always compare multiple providers before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { href: '/seniors', icon: Users, title: 'Senior Travel Hub', desc: 'More resources for senior travelers.' },
              { href: '/health', icon: Stethoscope, title: 'Health Guide', desc: 'Health and medical guide for Morocco.' },
              { href: '/morocco-trip-cost', icon: Wallet, title: 'Trip Cost Guide', desc: 'Budget breakdown for Morocco.' },
              { href: '/luxury', icon: Star, title: 'Luxury Morocco', desc: 'Premium experiences and five-star hotels.' },
              { href: '/morocco-best-riads', icon: Hotel, title: 'Best Riads', desc: 'Top-rated riads with accessibility info.' },
            ].map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link key={link.href} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <LinkIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent)]/80">
        <div className="container-morocco text-center">
          <HandHeart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Awaits You
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            With the right preparation and a comfortable pace, you will discover one of the world&apos;s most
            fascinating countries while being treated with the warmth that Moroccan culture reserves for its honored elders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/morocco-trip-cost" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors">
              <Wallet className="w-5 h-5" /> Plan Your Budget
            </Link>
            <Link href="/morocco-travel-tips" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              <BookOpen className="w-5 h-5" /> Morocco Travel Tips <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
