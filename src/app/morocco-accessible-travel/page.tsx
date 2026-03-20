import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight, Home, Shield, ShieldCheck, CheckCircle, Info, ArrowRight,
  MapPin, Users, Heart, Star, Globe, Sun, Wallet, Navigation, Car,
  BookOpen, Compass, Hotel, Map, Coffee, CalendarDays, Thermometer,
  Accessibility, Stethoscope, BadgeCheck, BriefcaseMedical, Plane,
  HandHeart, GlassWater, Building, Phone, AlertTriangle, Eye, Ear,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Accessible Travel 2026: Wheelchair Friendly Guide for Disabled Travelers',
  description:
    'Complete guide to accessible travel in Morocco 2026. Wheelchair accessible hotels, adapted transport, accessible attractions, medina challenges, tour operators for disabled travelers, airport assistance, and medical facilities.',
  keywords: [
    'Morocco wheelchair accessible', 'accessible travel Morocco', 'Morocco disability travel',
    'wheelchair friendly Morocco', 'Morocco accessible hotels', 'Morocco disabled travelers',
    'Morocco wheelchair tourism', 'accessible Morocco tours', 'Morocco mobility impaired travel',
    'Morocco accessible attractions', 'wheelchair Morocco medina', 'Morocco accessible transport',
    'Morocco hearing impaired travel', 'Morocco visually impaired travel', 'Morocco accessible riads',
  ],
  openGraph: {
    title: 'Morocco Accessible Travel 2026: Wheelchair Friendly Guide for Disabled Travelers',
    description:
      'Everything disabled travelers need to visit Morocco. Wheelchair accessible hotels, adapted transport, accessible attractions, tour operators, airport assistance, and practical tips for all disabilities.',
    url: `${BASE_URL}/morocco-accessible-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-accessible.webp`,
        width: 1200,
        height: 630,
        alt: 'Wheelchair accessible ramp leading to a traditional Moroccan riad courtyard with mosaic tiles and a fountain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Accessible Travel 2026: Complete Wheelchair Friendly Guide',
    description:
      'Wheelchair accessible hotels, adapted transport, accessible attractions, tour operators, and practical tips for disabled travelers visiting Morocco.',
    images: [`${BASE_URL}/images/hero-morocco-accessible.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-accessible-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-accessible-travel`,
  name: 'Morocco Accessible Travel 2026: Wheelchair Friendly Guide for Disabled Travelers',
  description:
    'Comprehensive guide for disabled travelers visiting Morocco. Covers wheelchair accessible hotels, adapted transport, accessible attractions, tour operators specializing in accessible travel, airport assistance, and medical facilities.',
  url: `${BASE_URL}/morocco-accessible-travel`,
  image: `${BASE_URL}/images/hero-morocco-accessible.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-accessible-travel`,
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
    audienceType: 'Travelers with disabilities',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Accessible Travel Morocco', item: `${BASE_URL}/morocco-accessible-travel` },
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
      name: 'Is Morocco wheelchair accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is improving its accessibility but remains challenging for wheelchair users. Modern cities like Agadir and Rabat have the best infrastructure with ramps, accessible hotels, and smooth sidewalks. Traditional medinas are largely inaccessible due to narrow alleys, steps, and cobblestones. Five-star hotels and international chains offer fully accessible rooms. With advance planning and the right tour operator, wheelchair users can have a rewarding trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan city is most accessible for wheelchair users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agadir is the most wheelchair-friendly city in Morocco. Rebuilt as a modern city after the 1960 earthquake, it has wide flat streets, accessible beach promenade, modern resort hotels with full wheelchair access, and smooth pavements. Rabat is the second best choice thanks to its accessible tram system, wide boulevards, and modern infrastructure in the Agdal and Hassan districts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can wheelchair users visit Moroccan medinas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional medinas are extremely difficult for wheelchair users due to narrow alleys, steps, uneven cobblestones, and steep slopes. Essaouira has the most accessible medina with a relatively flat grid layout and some wider streets. In Marrakech, the main arteries like Rue Semarine are wider but side alleys are impassable. A local guide who knows accessible routes is essential. Consider viewing medina life from accessible cafes and rooftop terraces as an alternative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there accessible hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. International hotel chains like Four Seasons, Sofitel, Fairmont, Marriott, and Iberostar offer fully accessible rooms with roll-in showers, grab bars, wide doorways, and elevator access. Prices start from 1,500 MAD per night. Some luxury riads have been adapted with ground-floor accessible rooms, but most traditional riads have narrow staircases and are not wheelchair accessible. Always confirm accessibility features directly with the hotel before booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is airport assistance available for disabled travelers in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All major Moroccan airports including Mohammed V Casablanca, Marrakech Menara, Fes-Saiss, and Agadir Al Massira provide wheelchair assistance, electric buggies, and priority boarding. Request assistance through your airline at least 48 hours before departure. The service is free. Most airports have accessible restrooms and some have accessible prayer rooms. Marrakech Menara and Casablanca Mohammed V have the best accessibility infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What adapted transport options exist in Morocco for disabled travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private drivers with adapted vehicles are the best option, available from specialist tour operators from 1,500 MAD per day. The Rabat and Casablanca tram systems have step-free access at all stops. ONCF trains offer wheelchair spaces in some carriages, and staff can assist with boarding. The Al Boraq high-speed train has dedicated wheelchair spaces. Standard taxis and grand taxis are not wheelchair accessible. Royal Air Maroc provides wheelchair assistance on all flights.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there tour operators in Morocco specializing in accessible travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several operators specialize in accessible Morocco tours. Access Morocco Travel, Accessible Morocco Tours, and Friendly Morocco are locally based operators with adapted vehicles, trained guides, and wheelchair-accessible itineraries. International operators like Accessible Travel Solutions and Wheel the World also offer Morocco packages. Book at least 3 months in advance to ensure adapted vehicles and accessible accommodation availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should visually or hearing impaired travelers know about Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For visually impaired travelers, Morocco has limited tactile paving and audio signals. Uneven pavements and unexpected obstacles are common. A sighted guide or companion is strongly recommended. For hearing impaired travelers, Morocco is generally manageable as much communication is visual and gestural. Few tourist sites have audio loops or sign language interpretation. Download offline translation apps with French and Arabic. Medical facilities in major cities have some experience with hearing and vision impairments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What medical facilities are available for disabled travelers in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private hospitals in Marrakech, Casablanca, Rabat, and Agadir have modern equipment and English-speaking doctors. Clinique Internationale Marrakech, Clinique du Parc Casablanca, and Clinique Agdal Rabat can handle wheelchair repairs, prosthetic issues, and disability-related medical needs. Pharmacies are widespread and well-stocked. Bring a full supply of specialized medications as specific brands may not be available. Travel insurance covering disability-related medical needs and equipment damage is essential.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCESSIBILITY OVERVIEW
   ═══════════════════════════════════════════════════════════════ */

const accessibilityOverview = [
  {
    label: 'Accessibility Progress',
    value: 'Improving Steadily',
    detail: 'Morocco adopted disability rights law 10-03 and is modernizing infrastructure',
    icon: ShieldCheck,
  },
  {
    label: 'Accessible Hotels',
    value: '50+ Properties',
    detail: 'International chains and adapted riads across major cities',
    icon: Hotel,
  },
  {
    label: 'Airport Assistance',
    value: 'All Major Airports',
    detail: 'Free wheelchair service and priority boarding at all airports',
    icon: Plane,
  },
  {
    label: 'Specialist Tours',
    value: 'Multiple Operators',
    detail: 'Local and international operators offering adapted itineraries',
    icon: Compass,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CITY ACCESSIBILITY RATINGS
   ═══════════════════════════════════════════════════════════════ */

const cityAccessibility = [
  {
    city: 'Agadir',
    rating: 5,
    image: '/images/hero-agadir.webp',
    vibe: 'Best wheelchair accessibility',
    description:
      'Agadir is the most accessible city in Morocco. Rebuilt as a modern resort city after the 1960 earthquake, it features wide flat streets, smooth pavements, accessible beach promenade, and modern buildings designed with ramps and elevators. All-inclusive resorts offer full wheelchair-accessible rooms with roll-in showers, pool hoists, and adapted facilities. The Souss-Massa hospital meets international accessibility standards.',
    highlights: [
      'Flat, wide streets and modern infrastructure throughout the city',
      'Accessible beachfront promenade stretching over 6 kilometers',
      'All-inclusive resorts with full wheelchair-accessible rooms from 1,200 MAD',
      'Modern Souss-Massa hospital with disability-adapted facilities',
    ],
  },
  {
    city: 'Rabat',
    rating: 4,
    image: '/images/hero-rabat.webp',
    vibe: 'Modern with accessible tram',
    description:
      'Morocco\'s capital has the best public transport accessibility. The tram system has step-free access at all stops with tactile paving and audio announcements. Wide boulevards in Agdal and Hassan districts are wheelchair-navigable. The modern Ville Nouvelle has smooth sidewalks and accessible government buildings. Hassan Tower and the Mausoleum of Mohammed V are on flat ground.',
    highlights: [
      'Tram system with step-free access, tactile paving, and audio announcements',
      'Wide, flat boulevards in Agdal and Hassan districts',
      'Hassan Tower and Mausoleum accessible on flat ground',
      'Modern Clinique Agdal with disability experience and equipment',
    ],
  },
  {
    city: 'Casablanca',
    rating: 4,
    image: '/images/hero-casablanca.webp',
    vibe: 'Modern infrastructure, busy streets',
    description:
      'Casablanca is Morocco\'s most modern city with good hotel accessibility and a tram system with step-free access. The Corniche waterfront is wheelchair-accessible. Hassan II Mosque has ramp access to the exterior esplanade. The Maarif and Anfa districts have smooth sidewalks. Traffic and crowded pavements can be challenging, but adapted taxis and private drivers are available.',
    highlights: [
      'Tram system with wheelchair access at all stations',
      'Hassan II Mosque esplanade accessible via ramps',
      'International hotels with full ADA-standard rooms available',
      'Clinique du Parc and private hospitals with disability services',
    ],
  },
  {
    city: 'Marrakech',
    rating: 3,
    image: '/images/hero-marrakech.webp',
    vibe: 'Luxury hotels accessible, medina difficult',
    description:
      'Marrakech is the most visited city but presents a mixed picture for accessibility. The Gueliz new town has modern hotels with excellent wheelchair access. Five-star properties like Four Seasons, Royal Mansour, and La Mamounia have full accessible facilities. However, the medina is very difficult for wheelchair users with narrow alleys, steps, and uneven surfaces. Majorelle Garden and Bahia Palace have limited accessibility.',
    highlights: [
      'World-class accessible hotels in Gueliz and Hivernage districts',
      'Four Seasons and Royal Mansour with fully adapted rooms',
      'Private accessible tour operators based in the city',
      'Gueliz has flat, modern streets suitable for wheelchairs',
    ],
  },
  {
    city: 'Fes',
    rating: 2,
    image: '/images/hero-fes.webp',
    vibe: 'Culturally rich but very challenging',
    description:
      'Fes offers extraordinary cultural depth but is the most challenging city for wheelchair users. The ancient medina has steep hills, narrow passages as narrow as one meter, heavy donkey traffic, and constant steps. The Ville Nouvelle is more manageable with wider streets. Luxury hotels outside the medina offer full accessibility. Consider experiencing the medina through rooftop terraces and panoramic viewpoints instead.',
    highlights: [
      'Ville Nouvelle area has wider, flatter streets for wheelchairs',
      'Luxury hotels like Palais Faraj offer accessible rooms with medina views',
      'Borj Nord viewpoint offers panoramic medina views without entering',
      'Accessible art galleries and restaurants in the new town area',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCESSIBLE ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const accessibleAccommodations = [
  {
    type: 'Five-Star International Hotels',
    icon: Hotel,
    priceRange: 'From 1,500 MAD / night',
    bestFor: 'Full wheelchair accessibility, medical support',
    description:
      'International chains offer the most reliable accessibility in Morocco. Four Seasons Marrakech, Sofitel Rabat, Fairmont Royal Palm, and Marriott properties have ADA-standard rooms with roll-in showers, grab bars, lowered fixtures, wide doorways, and visual fire alarms. Staff are trained in disability awareness. On-call medical assistance is available.',
    tips: [
      'Request accessible rooms with roll-in showers and grab bars when booking',
      'Four Seasons Marrakech has the best wheelchair-accessible pool facilities',
      'Fairmont Royal Palm offers adapted golf carts for on-site mobility',
      'Confirm room dimensions and bathroom layout by requesting photos before booking',
    ],
  },
  {
    type: 'All-Inclusive Accessible Resorts',
    icon: Sun,
    priceRange: 'From 1,200 MAD / night',
    bestFor: 'Beach access, minimal logistics',
    description:
      'All-inclusive resorts in Agadir provide the easiest accessible experience. RIU, Iberostar, and Sofitel Agadir offer adapted rooms, pool hoists, accessible restaurants, and beach wheelchairs. All meals and activities are on-site, removing the stress of navigating unfamiliar streets. Some resorts have on-site physiotherapy.',
    tips: [
      'RIU Tikida Beach in Agadir has excellent wheelchair-accessible beach facilities',
      'Request a beach wheelchair in advance as availability is limited',
      'All-inclusive removes the challenge of finding accessible restaurants',
      'Seasonal pricing can change; book shoulder season for best value and availability',
    ],
  },
  {
    type: 'Adapted Luxury Riads',
    icon: Heart,
    priceRange: 'From 900 MAD / night',
    bestFor: 'Cultural atmosphere with accessibility',
    description:
      'A small number of luxury riads have been adapted with ground-floor accessible rooms, widened doorways, roll-in showers, and courtyard-level dining. These are rare finds that combine authentic Moroccan charm with wheelchair access. Book well in advance as adapted rooms are limited.',
    tips: [
      'Riad Star in Marrakech has a ground-floor wheelchair-accessible room',
      'Always verify accessibility claims directly with the riad before booking',
      'Most traditional riads have steep staircases and are NOT wheelchair accessible',
      'Ask for photos of doorways, bathroom, and courtyard access before committing',
    ],
  },
  {
    type: 'Accessible Apartments and Villas',
    icon: Building,
    priceRange: 'From 700 MAD / night',
    bestFor: 'Privacy, self-catering, extended stays',
    description:
      'Rental apartments and villas in modern districts can offer good accessibility for extended stays. Look for ground-floor units or buildings with elevators in Agadir, Rabat Agdal, or Marrakech Gueliz. Self-catering removes restaurant accessibility concerns, and you control your schedule entirely.',
    tips: [
      'Search Booking.com using the wheelchair-accessible filter for verified listings',
      'Ground-floor apartments in Agadir Founty district are often fully accessible',
      'Request video walkthrough of the property before booking to verify access',
      'Hire a part-time assistant or carer through your tour operator if needed',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ADAPTED TRANSPORT
   ═══════════════════════════════════════════════════════════════ */

const adaptedTransport = [
  {
    mode: 'Private Adapted Vehicles',
    icon: Car,
    accessRating: 'Excellent',
    ratingColor: 'text-green-700',
    description:
      'The single best transport option for wheelchair users. Specialist operators provide vehicles with wheelchair ramps or lifts, tie-down systems, and experienced drivers. Available for city tours, day trips, and multi-day itineraries across Morocco.',
    tips: [
      'Typical cost from 1,500 MAD per day including fuel and driver',
      'Book through specialist accessible tour operators at least 2 months ahead',
      'Mercedes Sprinter and Ford Transit adapted vehicles are most common',
      'Specify your wheelchair dimensions when booking to ensure correct vehicle',
    ],
  },
  {
    mode: 'Tram Systems (Rabat and Casablanca)',
    icon: Navigation,
    accessRating: 'Very Good',
    ratingColor: 'text-green-700',
    description:
      'Both the Rabat-Sale and Casablanca tram systems are fully accessible with step-free boarding, tactile paving at stops, and audio announcements. The platforms are level with the tram floor. Wheelchair spaces are available inside each tram.',
    tips: [
      'All tram stops have step-free access and tactile paving',
      'Dedicated wheelchair spaces inside each tram carriage',
      'Rabat tram connects major tourist areas including Hassan Tower and the medina entrance',
      'Tickets from 6 MAD per journey; rechargeable cards available',
    ],
  },
  {
    mode: 'Al Boraq High-Speed Train',
    icon: Navigation,
    accessRating: 'Good',
    ratingColor: 'text-green-700',
    description:
      'The Al Boraq high-speed train between Tangier and Casablanca has dedicated wheelchair spaces, accessible restrooms, and staff assistance for boarding. The modern stations have elevators and ramps. Standard ONCF trains have limited accessibility.',
    tips: [
      'Dedicated wheelchair space in each Al Boraq train set',
      'Request assistance 48 hours in advance through ONCF website',
      'Tangier Ville, Kenitra, and Casa Voyageurs stations have best accessibility',
      'Standard ONCF trains have narrow corridors; wheelchair access varies by station',
    ],
  },
  {
    mode: 'Domestic Flights',
    icon: Plane,
    accessRating: 'Good',
    ratingColor: 'text-green-700',
    description:
      'Royal Air Maroc provides full wheelchair assistance at all Moroccan airports. Aisle wheelchairs are available for boarding, and your own wheelchair is carried free in the hold. Airport assistance includes check-in, security, and gate transfer.',
    tips: [
      'Request WCHR (ramp), WCHS (steps), or WCHC (cabin seat) assistance when booking',
      'Own wheelchair carried free; specify if manual, electric, or has lithium battery',
      'Arrive 3 hours before departure to allow time for assistance procedures',
      'Marrakech Menara and Casablanca Mohammed V have the best accessibility infrastructure',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCESSIBLE ATTRACTIONS
   ═══════════════════════════════════════════════════════════════ */

const accessibleAttractions = [
  {
    name: 'Majorelle Garden, Marrakech',
    icon: Compass,
    accessLevel: 'Partially Accessible',
    description:
      'The main paths are paved and relatively flat, allowing wheelchair access to most garden areas and the iconic blue villa exterior. The YSL Museum next door is fully wheelchair accessible with elevator. Some narrow garden paths are difficult for wide wheelchairs.',
    tip: 'Enter early morning when paths are less crowded. The YSL Museum is fully accessible.',
  },
  {
    name: 'Hassan II Mosque, Casablanca',
    icon: Building,
    accessLevel: 'Partially Accessible',
    description:
      'The vast exterior esplanade is accessible via ramps and offers spectacular ocean views. The interior prayer hall is reached via stairs, but staff can assist wheelchair users through a side entrance with ramp access on guided tours. Contact the mosque in advance.',
    tip: 'Book a guided tour and inform the mosque about wheelchair needs 48 hours ahead.',
  },
  {
    name: 'Agadir Beach and Promenade',
    icon: Sun,
    accessLevel: 'Fully Accessible',
    description:
      'The 6-kilometer beachfront promenade is flat, smooth, and perfect for wheelchairs. Some resort sections offer beach wheelchairs for sand access. The promenade has accessible cafes, restrooms, and viewpoints along its length.',
    tip: 'Ask your resort for a beach wheelchair. Best conditions in the morning before wind picks up.',
  },
  {
    name: 'Menara Gardens, Marrakech',
    icon: Compass,
    accessLevel: 'Mostly Accessible',
    description:
      'The gardens have flat, wide pathways around the central reflecting pool with Atlas Mountain views. The olive groves are on level ground. The pavilion has a few steps but the main garden experience is fully accessible by wheelchair.',
    tip: 'Visit in late afternoon for the best light on the Atlas Mountains. Flat and spacious.',
  },
  {
    name: 'Hassan Tower and Mausoleum, Rabat',
    icon: Building,
    accessLevel: 'Mostly Accessible',
    description:
      'The esplanade around Hassan Tower and the Mausoleum of Mohammed V is on flat ground with smooth stone paving. The mausoleum interior is reached via a gentle ramp. One of the most wheelchair-friendly historical sites in Morocco.',
    tip: 'Arrive via the accessible Rabat tram. The entire complex is on level ground.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPECIALIST TOUR OPERATORS
   ═══════════════════════════════════════════════════════════════ */

const accessibleTourOperators = [
  {
    name: 'Accessible Morocco Tours',
    icon: Map,
    type: 'Local Operator',
    description:
      'Marrakech-based operator specializing in wheelchair-accessible tours across Morocco. Offers adapted Mercedes Sprinter vehicles, trained guides, and customized itineraries. Can arrange accessible accommodations, airport transfers, and city tours.',
    bookingTip: 'Book at least 3 months ahead for peak season. Specify all mobility needs when enquiring.',
  },
  {
    name: 'Friendly Morocco',
    icon: HandHeart,
    type: 'Local Operator',
    description:
      'Based in Marrakech with a focus on inclusive tourism. Provides adapted vehicles with ramps, disability-aware guides, and accessible route planning. Offers half-day city tours from 800 MAD and multi-day accessible itineraries across Morocco.',
    bookingTip: 'Half-day accessible city tours from 800 MAD. Full-day excursions from 1,500 MAD.',
  },
  {
    name: 'Wheel the World',
    icon: Globe,
    type: 'International Operator',
    description:
      'International platform connecting disabled travelers with accessible experiences worldwide, including Morocco. Offers pre-vetted accessible accommodations and activities with detailed accessibility information and photos for each listing.',
    bookingTip: 'Check their Morocco listings for pre-verified accessible experiences with detailed access info.',
  },
  {
    name: 'Accessible Travel Solutions',
    icon: Compass,
    type: 'International Operator',
    description:
      'UK-based operator offering fully managed accessible Morocco holidays. Packages include adapted flights, wheelchair-accessible hotels, adapted ground transport, and experienced tour leaders. Covers Marrakech, Essaouira, and the coast.',
    bookingTip: 'Package holidays from 15,000 MAD per person for 7 days including flights and adapted transfers.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPS BY DISABILITY TYPE
   ═══════════════════════════════════════════════════════════════ */

const disabilitySpecificTips = [
  {
    type: 'Wheelchair and Mobility Impairments',
    icon: Accessibility,
    tips: [
      'Bring essential spare parts for your wheelchair: tubes, casters, and a basic toolkit',
      'Electric wheelchair users should bring a universal charger adapter (Morocco uses type C and E plugs)',
      'Request a portable ramp from your tour operator for locations with steps',
      'Carry a lightweight folding wheelchair as backup if your primary chair is electric',
      'Download AccessibleGO or Wheelmap apps to find accessible locations',
    ],
  },
  {
    type: 'Visual Impairments',
    icon: Eye,
    tips: [
      'Morocco has very limited tactile paving outside tram stations in Rabat and Casablanca',
      'Uneven pavements, open drains, and unexpected obstacles are common in all cities',
      'A sighted guide or companion is strongly recommended for navigating streets',
      'Download Be My Eyes app and ensure your phone has robust offline maps with voice navigation',
      'Hotels can arrange a staff member to guide you through the property on arrival',
    ],
  },
  {
    type: 'Hearing Impairments',
    icon: Ear,
    tips: [
      'Morocco is generally manageable as Moroccan communication style involves gestures and visual cues',
      'Few tourist sites have audio loops, captioning, or sign language interpretation',
      'Download offline Google Translate with French and Arabic for written communication',
      'Carry a card in Arabic and French explaining your hearing impairment for taxi drivers',
      'Emergency services do not have text-based alternatives; have a hearing companion call if needed',
    ],
  },
  {
    type: 'Chronic Conditions and Hidden Disabilities',
    icon: Heart,
    tips: [
      'Carry a medical ID bracelet or card in French and Arabic listing your conditions',
      'Bring a full supply of all medications plus a two-week buffer in original packaging',
      'Research private hospitals and pharmacies near your accommodation before arrival',
      'Heat exacerbates many chronic conditions; plan morning activities and afternoon rest',
      'Travel insurance covering pre-existing conditions is essential; use specialist providers',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA ACCESSIBILITY CHALLENGES
   ═══════════════════════════════════════════════════════════════ */

const medinaAccessibility = [
  {
    challenge: 'Narrow Alleys',
    description: 'Many medina passages are under 1.5 meters wide, making wheelchair access impossible. Main arteries are wider (2-3 meters) but still crowded with pedestrians and handcarts.',
  },
  {
    challenge: 'Uneven Surfaces',
    description: 'Cobblestones, irregular paving, exposed drainage channels, and random steps without warning create constant obstacles for wheelchairs, walkers, and visually impaired travelers.',
  },
  {
    challenge: 'Steep Slopes',
    description: 'Fes and Tangier medinas are built on hillsides with significant slopes. Even Marrakech has gentle inclines. These slopes combined with uneven surfaces are very challenging.',
  },
  {
    challenge: 'No Curb Cuts or Ramps',
    description: 'Medinas were built centuries before accessibility standards. There are essentially no curb cuts, ramps, or handrails. Doorways and thresholds often have raised steps.',
  },
  {
    challenge: 'Animal Traffic',
    description: 'Donkeys, mules, and handcarts share the narrow passages with pedestrians. Animals are unpredictable and can block wheelchair passage or create hazards for all travelers.',
  },
  {
    challenge: 'Best Alternative Approaches',
    description: 'Experience medina atmosphere from accessible rooftop terraces and cafes overlooking the streets. Hire a guide who knows the widest, flattest routes. Visit early morning when streets are emptiest.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAccessibleTravelPage() {
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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-morocco-accessible.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Accessible Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Accessibility className="w-4 h-4" /> Accessible Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Accessible Travel<br className="hidden md:block" /> &mdash; Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything wheelchair users and disabled travelers need to explore Morocco. Accessible hotels,
            adapted transport, city-by-city accessibility ratings, and specialist tour operators.
          </p>
        </div>
      </section>
      <div className="zellige-border" />

      {/* INTRODUCTION */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Accessible Travel in Morocco: Honest Overview
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a destination of extraordinary beauty and cultural richness, and with the right
                preparation, travelers with disabilities can have a deeply rewarding experience. However, honesty
                is essential: Morocco is not yet a fully accessible destination. Traditional medinas, much of the
                public transport, and many budget accommodations present significant barriers for wheelchair
                users and travelers with mobility impairments.
              </p>
              <p>
                The good news is that Morocco is improving rapidly. Modern cities like Agadir and Rabat have
                good infrastructure, five-star hotels meet international accessibility standards, specialist tour
                operators provide adapted vehicles and trained guides, and airports offer full wheelchair
                assistance. This guide helps you plan realistically so you can focus on the many accessible
                experiences Morocco offers rather than encountering unexpected barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY OVERVIEW */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Accessibility at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about accessible travel infrastructure across Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityOverview.map((stat) => {
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
                <span className="font-semibold text-[var(--text-primary)]">Important context:</span> Morocco&apos;s
                Law 10-03 on accessibility for persons with disabilities was enacted to improve public infrastructure.
                Progress is visible in new construction, airports, tram systems, and international hotels. However,
                enforcement is inconsistent and traditional areas remain largely unchanged. Always verify specific
                accessibility features directly with hotels, attractions, and transport providers before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITY ACCESSIBILITY RATINGS */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            City-by-City Accessibility Ratings
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Honest accessibility ratings for Morocco&apos;s most visited cities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cityAccessibility.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`${city.city}, Morocco — accessibility overview for wheelchair users and disabled travelers`}
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
                      Accessibility Highlights
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

      {/* MEDINA ACCESSIBILITY CHALLENGES */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina Accessibility: Honest Assessment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Traditional medinas are Morocco&apos;s greatest cultural treasure but present significant accessibility barriers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {medinaAccessibility.map((item) => (
              <div key={item.challenge} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {item.challenge}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-6">
            <div className="flex items-start gap-3">
              <BadgeCheck className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">Best accessible medina:</span> Essaouira
                has the most wheelchair-navigable medina in Morocco. Its grid layout, wider main streets, and
                relatively flat terrain make it possible to experience parts of the medina by wheelchair. A guide
                who knows the accessible routes is still essential, but Essaouira offers the closest thing to an
                accessible medina experience in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE ACCOMMODATIONS */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wheelchair Accessible Accommodations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Accommodation types with genuine wheelchair accessibility and practical booking advice.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {accessibleAccommodations.map((acc) => {
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

      {/* ADAPTED TRANSPORT */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adapted Transport Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options rated by wheelchair accessibility and disability-friendliness.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {adaptedTransport.map((transport) => {
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
                        Accessibility: {transport.accessRating}
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

      {/* ACCESSIBLE ATTRACTIONS */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accessible Attractions in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Cultural sites and attractions with genuine accessibility for wheelchair users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {accessibleAttractions.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AttrIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {attraction.name}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--color-gold)]">{attraction.accessLevel}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{attraction.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIST TOUR OPERATORS */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accessible Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Specialist operators with adapted vehicles, trained guides, and accessible itineraries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {accessibleTourOperators.map((op) => {
              const OpIcon = op.icon;
              return (
                <div key={op.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <OpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {op.name}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--color-accent)]">{op.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{op.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Booking Tip:</span> {op.bookingTip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIPS BY DISABILITY TYPE */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips by Disability Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Specific practical advice tailored to different disabilities and conditions.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {disabilitySpecificTips.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <SectionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {section.type}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {section.tips.map((tip, i) => (
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

      {/* MEDICAL FACILITIES */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medical Facilities and Equipment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hospitals, pharmacies, and equipment services for disabled travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                topic: 'Private Hospitals',
                icon: BriefcaseMedical,
                description:
                  'Clinique Internationale Marrakech, Clinique du Parc Casablanca, and Clinique Agdal Rabat have English-speaking doctors, modern equipment, and experience with disability-related medical needs. Standard consultations from 300 MAD. Emergency treatment available 24 hours.',
              },
              {
                topic: 'Wheelchair and Equipment Repairs',
                icon: Accessibility,
                description:
                  'Wheelchair repair services are limited in Morocco. Bring a basic repair kit with spare inner tubes, casters, and allen keys. In Marrakech and Casablanca, medical equipment shops can handle basic repairs. Your tour operator can help locate specialist services.',
              },
              {
                topic: 'Pharmacies and Medications',
                icon: Shield,
                description:
                  'Pharmacies marked with green crosses are widespread and well-stocked. Bring a full supply of specialized medications in original packaging with a doctor letter in French. Generic medications available but specific brands may differ. Pharmacies open late in all cities.',
              },
              {
                topic: 'Travel Insurance',
                icon: ShieldCheck,
                description:
                  'Travel insurance covering disability-related medical needs, wheelchair damage or loss, and medical evacuation is essential. Specialist providers like AllClear and Staysure cover pre-existing conditions. Ensure your policy covers mobility equipment replacement and repair costs.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.topic} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
              <Phone className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Emergency Contacts
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Emergency numbers: 19 (police), 15 (ambulance), 150 (fire). Buy a local SIM at the airport from 30 MAD.
              Save your hotel address in Arabic on your phone. Carry a medical card in French and Arabic listing your
              conditions, medications, and emergency contact. Your hotel can call for medical assistance at any hour.
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
              { href: '/accessible-travel', icon: Accessibility, title: 'Accessible Travel Hub', desc: 'More resources for accessible travel.' },
              { href: '/morocco-for-seniors', icon: Users, title: 'Senior Travel Guide', desc: 'Guide for travelers over 60.' },
              { href: '/transport', icon: Car, title: 'Transport Guide', desc: 'Getting around Morocco safely.' },
              { href: '/accommodations', icon: Hotel, title: 'Accommodations', desc: 'Hotels, riads, and where to stay.' },
              { href: '/morocco-travel-tips', icon: BookOpen, title: 'Travel Tips', desc: 'Essential tips for visiting Morocco.' },
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
          <Accessibility className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Is Worth the Journey
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            With the right planning, specialist tour operators, and accessible accommodations, disabled travelers
            can experience the extraordinary culture, cuisine, and warmth that make Morocco one of the world&apos;s
            most captivating destinations.
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
