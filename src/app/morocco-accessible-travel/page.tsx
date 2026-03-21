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
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  MessageCircleQuestion,
  Globe,
  Car,
  Plane,
  Hotel,
  Compass,
  Eye,
  Ear,
  Phone,
  Stethoscope,
  Navigation,
  Sun,
  HandHeart,
  Accessibility,
  BriefcaseMedical,
  BadgeCheck,
  Map,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-accessible-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Morocco Accessible Travel Guide 2026 | Wheelchair Friendly Hotels, Tours & Transport',
  description:
    'Complete guide to accessible travel in Morocco for wheelchair users and disabled travelers. Honest accessibility ratings by city, wheelchair-friendly hotels from 1,200 MAD, adapted desert tours, accessible attractions like Hassan II Mosque, specialist tour operators, and practical tips for visual, hearing, and mobility impairments.',
  keywords: [
    'Morocco accessible travel',
    'wheelchair accessible Morocco',
    'Morocco disability travel guide',
    'wheelchair friendly hotels Morocco',
    'accessible tours Morocco',
    'Morocco wheelchair tourism',
    'accessible Marrakech',
    'Morocco disabled travelers',
    'adapted desert tour Morocco',
    'Morocco mobility impaired',
    'accessible Morocco attractions',
    'wheelchair Morocco medina',
    'Morocco hearing impaired travel',
    'Morocco visually impaired travel',
    'accessible riads Morocco',
    'Access Morocco tour operator',
    'Morocco medical equipment travel',
  ],
  openGraph: {
    title:
      'Morocco Accessible Travel Guide 2026 | Wheelchair Friendly Hotels, Tours & Transport',
    description:
      'Honest accessibility guide for disabled travelers visiting Morocco. City-by-city wheelchair ratings, accessible hotels, adapted transport, specialist tour operators, attraction access details, and tips for travelers with all types of disabilities.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of a Moroccan city with modern accessible infrastructure and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Morocco Accessible Travel 2026 | Wheelchair Friendly Guide',
    description:
      'Wheelchair accessible hotels, adapted transport, accessible attractions, tour operators, and practical tips for disabled travelers visiting Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is Morocco wheelchair accessible?',
    a: 'Morocco is improving but remains challenging for wheelchair users. Modern cities like Agadir and Rabat have the best infrastructure with ramps, accessible hotels, and smooth sidewalks. Traditional medinas are largely inaccessible due to narrow alleys, steps, and cobblestones. With advance planning and the right tour operator, wheelchair users can have a rewarding trip focusing on accessible areas and attractions.',
  },
  {
    q: 'Which Moroccan city is most accessible for wheelchair users?',
    a: 'Agadir is the most wheelchair-friendly city in Morocco. Rebuilt as a modern city after the 1960 earthquake, it has wide flat streets, an accessible 6-kilometer beach promenade, modern resort hotels with full wheelchair access, and smooth pavements throughout. Rabat is the second best choice thanks to its accessible tram system, wide boulevards, and modern infrastructure.',
  },
  {
    q: 'Can wheelchair users visit Moroccan medinas?',
    a: 'Traditional medinas are extremely difficult for wheelchair users due to narrow alleys, steps, uneven cobblestones, and steep slopes. Essaouira has the most manageable medina with a relatively flat grid layout. In Marrakech, main arteries like Rue Semarine are wider but side alleys are impassable. A local guide who knows accessible routes is essential. Many wheelchair travelers experience medina life from accessible rooftop terraces and cafes instead.',
  },
  {
    q: 'Are there wheelchair-accessible hotels in Morocco?',
    a: 'Yes. International hotel chains like Four Seasons, Sofitel, Fairmont, and Marriott offer fully accessible rooms with roll-in showers, grab bars, wide doorways, and elevator access. Prices start from 1,500 MAD per night. Some luxury riads have ground-floor accessible rooms, but most traditional riads have narrow staircases and are not wheelchair accessible. Always confirm accessibility features directly with the hotel before booking.',
  },
  {
    q: 'What adapted transport options exist in Morocco?',
    a: 'Private drivers with adapted vehicles are the best option, available from specialist tour operators from 1,500 MAD per day. The Rabat and Casablanca tram systems have step-free access at all stops. The Al Boraq high-speed train between Tangier and Casablanca has dedicated wheelchair spaces. Standard taxis and grand taxis are not wheelchair accessible. Royal Air Maroc provides wheelchair assistance on all domestic flights.',
  },
  {
    q: 'Are there tour operators in Morocco specializing in accessible travel?',
    a: 'Yes. Several operators specialize in accessible Morocco tours. Accessible Morocco Tours and Friendly Morocco are locally based operators with adapted vehicles, trained guides, and wheelchair-accessible itineraries. International operators like Wheel the World also offer Morocco packages. Book at least 3 months in advance to ensure adapted vehicle and accommodation availability.',
  },
  {
    q: 'Can I bring my electric wheelchair to Morocco?',
    a: 'Yes. Airlines carry wheelchairs free of charge. Inform your airline about the wheelchair type and battery (lithium or dry cell) at least 48 hours before departure. Bring a universal power adapter as Morocco uses type C and E plugs (220V). Carry spare parts, a toolkit, and know the dimensions of your chair so tour operators can arrange correctly sized vehicles. Charging at hotels is straightforward.',
  },
  {
    q: 'What medical facilities are available for disabled travelers in Morocco?',
    a: 'Private hospitals in Marrakech, Casablanca, Rabat, and Agadir have modern equipment and English-speaking doctors. Clinique Internationale Marrakech, Clinique du Parc Casablanca, and Clinique Agdal Rabat handle wheelchair repairs, prosthetic issues, and disability-related medical needs. Pharmacies are widespread. Bring a full supply of specialized medications as specific brands may not be available. Travel insurance covering disability-related medical needs and equipment damage is essential.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Accessible Travel Guide 2026',
  description:
    'Complete guide to accessible travel in Morocco covering wheelchair-friendly hotels, adapted transport, accessible attractions, specialist tour operators, and practical tips for travelers with disabilities.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-morocco.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Accessible Travel Morocco', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: ACCESSIBILITY SNAPSHOT
   ================================================================ */

const accessSnapshot = [
  {
    label: 'Overall Progress',
    value: 'Improving Steadily',
    detail: 'Morocco adopted disability rights law 10-03 and is modernizing infrastructure in major cities',
    icon: ShieldCheck,
  },
  {
    label: 'Accessible Hotels',
    value: '50+ Properties',
    detail: 'International chains and select adapted riads across Agadir, Marrakech, Rabat, Casablanca',
    icon: Hotel,
  },
  {
    label: 'Airport Assistance',
    value: 'All Major Airports',
    detail: 'Free wheelchair service and priority boarding at Mohammed V, Menara, Fes-Saiss, and more',
    icon: Plane,
  },
  {
    label: 'Specialist Tour Operators',
    value: 'Local and International',
    detail: 'Multiple operators offering adapted vehicles, trained guides, and accessible itineraries',
    icon: Compass,
  },
] as const;

/* ================================================================
   DATA: CITY ACCESSIBILITY RATINGS
   ================================================================ */

const cityRatings = [
  {
    city: 'Agadir',
    stars: 5,
    image: '/images/hero-agadir.webp',
    tagline: 'Best wheelchair accessibility in Morocco',
    description:
      'Rebuilt after the 1960 earthquake, Agadir is a modern resort city with wide flat streets, smooth pavements, and buildings designed with ramps and elevators. The 6-kilometer beachfront promenade is perfectly flat and wheelchair-friendly. All-inclusive resorts offer fully accessible rooms with roll-in showers and pool hoists. The Souss-Massa hospital meets international accessibility standards.',
    highlights: [
      'Flat, wide streets and modern infrastructure throughout',
      'Accessible beachfront promenade stretching 6 kilometers',
      'All-inclusive resorts with full wheelchair access from 1,200 MAD per night',
      'Modern hospital with disability-adapted facilities',
    ],
  },
  {
    city: 'Rabat',
    stars: 4,
    image: '/images/hero-rabat.webp',
    tagline: 'Modern capital with accessible tram system',
    description:
      'Morocco\'s capital has the best public transport for disabled travelers. The tram system has step-free access at all stops with tactile paving and audio announcements. Wide boulevards in the Agdal and Hassan districts are wheelchair-navigable. Hassan Tower and the Mausoleum of Mohammed V sit on flat ground. Modern government buildings and international hotels provide reliable accessibility.',
    highlights: [
      'Tram system with step-free access, tactile paving, and audio announcements',
      'Wide, flat boulevards in Agdal and Hassan districts',
      'Hassan Tower and Mausoleum accessible on level ground',
      'Clinique Agdal with disability experience and modern equipment',
    ],
  },
  {
    city: 'Casablanca',
    stars: 4,
    image: '/images/hero-casablanca.webp',
    tagline: 'Modern infrastructure, accessible tram',
    description:
      'Morocco\'s largest city has good hotel accessibility and a tram system with step-free access. The Corniche waterfront is wheelchair-accessible. Hassan II Mosque has ramp access to the exterior esplanade. The Maarif and Anfa districts have the smoothest sidewalks. Traffic and crowded pavements can be challenging, but adapted taxis and private drivers are readily available.',
    highlights: [
      'Tram system with wheelchair access at all stations',
      'Hassan II Mosque esplanade accessible via ramps',
      'International hotels with full ADA-standard accessible rooms',
      'Private hospitals with disability services and English-speaking staff',
    ],
  },
  {
    city: 'Marrakech',
    stars: 3,
    image: '/images/hero-marrakech.webp',
    tagline: 'Luxury hotels accessible, medina very difficult',
    description:
      'Marrakech presents a mixed picture. The Gueliz new town has modern hotels with excellent wheelchair access. Properties like Four Seasons, Royal Mansour, and La Mamounia have full accessible facilities including pool hoists and adapted rooms. However, the medina is extremely difficult for wheelchair users -- narrow alleys, steps, donkey traffic, and uneven surfaces make independent navigation nearly impossible.',
    highlights: [
      'World-class accessible hotels in Gueliz and Hivernage districts',
      'Four Seasons and Royal Mansour with fully adapted suites',
      'Multiple accessible tour operators based in the city',
      'Gueliz has flat, modern streets suitable for wheelchairs',
    ],
  },
  {
    city: 'Fes',
    stars: 2,
    image: '/images/hero-fes.webp',
    tagline: 'Culturally extraordinary but very challenging',
    description:
      'Fes offers deep cultural immersion but is the most challenging city for wheelchair users. The ancient medina has steep hills, passages as narrow as one meter, constant donkey traffic, and steps at every turn. The Ville Nouvelle is more manageable with wider streets. Luxury hotels outside the medina offer full accessibility. Consider experiencing the medina through rooftop terraces and panoramic viewpoints at Borj Nord instead.',
    highlights: [
      'Ville Nouvelle has wider, flatter streets for wheelchairs',
      'Luxury hotels like Palais Faraj offer accessible rooms with medina views',
      'Borj Nord viewpoint provides panoramic medina views without entering',
      'Accessible restaurants and galleries in the new town',
    ],
  },
] as const;

/* ================================================================
   DATA: ACCESSIBLE ACCOMMODATIONS
   ================================================================ */

const accommodationTypes = [
  {
    type: 'Five-Star International Hotels',
    icon: Hotel,
    price: 'From 1,500 MAD / night',
    bestFor: 'Full wheelchair accessibility, trained staff, medical support',
    description:
      'International chains offer the most dependable accessibility in Morocco. Four Seasons Marrakech, Sofitel Rabat, Fairmont Royal Palm, and Marriott properties provide ADA-standard rooms with roll-in showers, grab bars, lowered fixtures, wide doorways (minimum 82 cm), and visual fire alarms. Staff receive disability awareness training. On-call medical assistance is standard.',
    tips: [
      'Request accessible rooms with roll-in showers when booking -- standard accessible rooms may only have grab bars',
      'Four Seasons Marrakech has the best wheelchair-accessible pool with a hoist',
      'Fairmont Royal Palm provides adapted golf carts for moving across the resort grounds',
      'Ask for room photos showing doorway widths and bathroom layout before confirming',
    ],
  },
  {
    type: 'All-Inclusive Beach Resorts',
    icon: Sun,
    price: 'From 1,200 MAD / night',
    bestFor: 'Minimal logistics, beach wheelchairs, self-contained stays',
    description:
      'All-inclusive resorts in Agadir provide the easiest accessible experience in Morocco. RIU, Iberostar, and Sofitel Agadir offer adapted rooms, pool hoists, accessible restaurants, and beach wheelchairs. All meals and activities are on-site, removing the stress of navigating unfamiliar streets. Some resorts have on-site physiotherapy services.',
    tips: [
      'RIU Tikida Beach in Agadir has excellent wheelchair-accessible beach facilities',
      'Reserve a beach wheelchair in advance -- availability is limited to 2-3 per resort',
      'All-inclusive removes the daily challenge of finding accessible restaurants',
      'Seasonal pricing can change; book shoulder season (April-May or October) for best availability',
    ],
  },
  {
    type: 'Adapted Luxury Riads',
    icon: Heart,
    price: 'From 900 MAD / night',
    bestFor: 'Authentic Moroccan atmosphere with accessibility modifications',
    description:
      'A small number of luxury riads have been adapted with ground-floor accessible rooms, widened doorways, roll-in showers, and courtyard-level dining. These are rare finds that combine genuine Moroccan architecture with wheelchair access. Book well in advance as adapted rooms are extremely limited -- most properties have just one.',
    tips: [
      'Riad Star in Marrakech has a ground-floor wheelchair-accessible room with roll-in shower',
      'Always verify accessibility claims directly with the riad -- "accessible" can mean different things',
      'Most traditional riads have steep staircases and are NOT wheelchair accessible despite marketing',
      'Ask for photos or a video call showing the doorway widths, bathroom, and courtyard access',
    ],
  },
  {
    type: 'Accessible Apartments and Villas',
    icon: Building,
    price: 'From 700 MAD / night',
    bestFor: 'Extended stays, self-catering, privacy and independence',
    description:
      'Rental apartments and villas in modern districts can work well for longer stays. Look for ground-floor units or buildings with elevators in Agadir, Rabat Agdal, or Marrakech Gueliz. Self-catering removes restaurant accessibility concerns entirely. You control your own schedule and space.',
    tips: [
      'Use Booking.com wheelchair-accessible filter for verified listings with measured doorways',
      'Ground-floor apartments in Agadir Founty district are frequently fully accessible',
      'Request a video walkthrough of the property before booking to verify real-world access',
      'Hire a part-time assistant or carer through your tour operator if needed for daily tasks',
    ],
  },
] as const;

/* ================================================================
   DATA: ADAPTED TRANSPORT OPTIONS
   ================================================================ */

const transportOptions = [
  {
    mode: 'Private Adapted Vehicles',
    icon: Car,
    accessLevel: 'Excellent',
    levelColor: 'text-green-700',
    description:
      'The single best transport option for wheelchair users in Morocco. Specialist operators provide Mercedes Sprinters and Ford Transits with wheelchair ramps or lifts, tie-down systems, and experienced drivers. Available for city tours, day trips, and multi-day itineraries across the country.',
    details: [
      'From 1,500 MAD per day including fuel, driver, and vehicle',
      'Book through specialist tour operators at least 2 months ahead',
      'Specify your wheelchair dimensions when booking to ensure the correct vehicle',
      'Drivers double as assistants and know accessible routes in each city',
    ],
  },
  {
    mode: 'Tram Systems (Rabat & Casablanca)',
    icon: Navigation,
    accessLevel: 'Very Good',
    levelColor: 'text-green-700',
    description:
      'Both the Rabat-Sale and Casablanca tram systems are fully accessible with step-free boarding, tactile paving at stops, and audio announcements. Platforms are level with the tram floor. Dedicated wheelchair spaces are inside each carriage.',
    details: [
      'All stops have step-free access and tactile paving',
      'Dedicated wheelchair space inside each tram carriage',
      'Rabat tram connects Hassan Tower, the medina entrance, and Agdal',
      'Tickets from 6 MAD per journey; rechargeable cards available',
    ],
  },
  {
    mode: 'Al Boraq High-Speed Train',
    icon: Navigation,
    accessLevel: 'Good',
    levelColor: 'text-blue-700',
    description:
      'The Al Boraq train between Tangier and Casablanca has dedicated wheelchair spaces, an accessible restroom, and staff assistance for boarding. Modern stations have elevators and ramps. Standard ONCF trains have limited and inconsistent accessibility.',
    details: [
      'Dedicated wheelchair space in each Al Boraq train set',
      'Request boarding assistance 48 hours in advance through the ONCF website',
      'Tangier Ville, Kenitra, and Casa Voyageurs stations have the best access',
      'Standard ONCF trains have narrow corridors -- wheelchair access varies by station',
    ],
  },
  {
    mode: 'Domestic Flights (Royal Air Maroc)',
    icon: Plane,
    accessLevel: 'Good',
    levelColor: 'text-blue-700',
    description:
      'Royal Air Maroc provides full wheelchair assistance at all Moroccan airports. Aisle wheelchairs are available for boarding, and your own wheelchair is carried free in the hold. Airport assistance covers check-in, security, and gate transfer.',
    details: [
      'Request WCHR (ramp), WCHS (steps), or WCHC (cabin seat) codes when booking',
      'Your wheelchair is carried free -- specify manual, electric, or lithium battery type',
      'Arrive 3 hours before departure to allow time for assistance procedures',
      'Marrakech Menara and Casablanca Mohammed V have the best airport accessibility',
    ],
  },
] as const;

/* ================================================================
   DATA: ACCESSIBLE ATTRACTIONS
   ================================================================ */

const accessibleAttractions = [
  {
    name: 'Hassan II Mosque, Casablanca',
    icon: Building,
    access: 'Partially Accessible',
    description:
      'The vast exterior esplanade is accessible via ramps and offers spectacular ocean views. The interior prayer hall is reached via stairs, but staff can assist wheelchair users through a side entrance with ramp access during guided tours. Contact the mosque administration at least 48 hours ahead to arrange access.',
    tip: 'Book a guided tour and inform them about wheelchair needs in advance. The esplanade alone is worth the visit.',
  },
  {
    name: 'Majorelle Garden, Marrakech',
    icon: Compass,
    access: 'Partially Accessible',
    description:
      'The main paths are paved and relatively flat, allowing wheelchair access to most garden areas and the iconic blue villa exterior. The YSL Museum next door is fully wheelchair accessible with an elevator. Some narrow garden paths between plant beds are tight for wider wheelchairs.',
    tip: 'Visit early morning when paths are less crowded. The YSL Museum is the fully accessible highlight.',
  },
  {
    name: 'Agadir Beach and Promenade',
    icon: Sun,
    access: 'Fully Accessible',
    description:
      'The 6-kilometer beachfront promenade is flat, smooth, and perfect for wheelchairs. Some resort sections offer beach wheelchairs for sand access. Accessible cafes, restrooms, and viewpoints line the entire length. The best wheelchair-friendly beach experience in Morocco.',
    tip: 'Request a beach wheelchair from your resort. Best conditions before noon when the wind is lighter.',
  },
  {
    name: 'Hassan Tower and Mausoleum, Rabat',
    icon: Building,
    access: 'Mostly Accessible',
    description:
      'The esplanade around Hassan Tower and the Mausoleum of Mohammed V is on flat ground with smooth stone paving. The mausoleum interior is reached via a gentle ramp. Guards are generally helpful with wheelchair users. One of the most wheelchair-friendly historical sites in Morocco.',
    tip: 'Arrive via the accessible Rabat tram. The entire complex is on level ground with no steps.',
  },
  {
    name: 'Menara Gardens, Marrakech',
    icon: Compass,
    access: 'Mostly Accessible',
    description:
      'Wide, flat pathways surround the central reflecting pool with Atlas Mountain views. The olive groves are on level ground. The pavilion has a few steps but the main garden experience -- the reflecting pool, the open-air setting, the mountain backdrop -- is fully accessible.',
    tip: 'Late afternoon offers the best light on the Atlas Mountains. Spacious and rarely crowded.',
  },
] as const;

/* ================================================================
   DATA: SPECIALIST TOUR OPERATORS
   ================================================================ */

const tourOperators = [
  {
    name: 'Accessible Morocco Tours',
    icon: Map,
    type: 'Local Operator (Marrakech)',
    description:
      'Marrakech-based operator specializing in wheelchair-accessible tours across the country. Offers adapted Mercedes Sprinter vehicles, disability-trained guides, and customized itineraries covering cities, desert camps, and coastal towns. Can arrange accessible accommodations and airport transfers.',
    booking: 'Book at least 3 months ahead for peak season. Specify all mobility needs, wheelchair dimensions, and battery type.',
  },
  {
    name: 'Friendly Morocco',
    icon: HandHeart,
    type: 'Local Operator (Marrakech)',
    description:
      'Focused on inclusive tourism with adapted vehicles featuring ramps, disability-aware local guides, and careful accessible route planning. Offers half-day city tours and multi-day accessible itineraries covering Marrakech, the coast, and adapted desert experiences.',
    booking: 'Half-day accessible city tours from 800 MAD. Full-day excursions from 1,500 MAD. Seasonal pricing can change.',
  },
  {
    name: 'Wheel the World',
    icon: Globe,
    type: 'International Platform',
    description:
      'International platform connecting disabled travelers with pre-vetted accessible experiences worldwide, including Morocco. Each listing has detailed accessibility information, photos of doorways and bathrooms, and real traveler reviews from wheelchair users.',
    booking: 'Check their Morocco listings for pre-verified experiences. Useful for comparing accessible accommodations side by side.',
  },
  {
    name: 'Accessible Travel Solutions',
    icon: Compass,
    type: 'International Operator (UK-based)',
    description:
      'UK-based operator offering fully managed accessible holidays in Morocco. Packages include adapted flights, wheelchair-accessible hotels, adapted ground transport, and experienced tour leaders who handle all logistics. Covers Marrakech, Essaouira, Agadir, and the coast.',
    booking: 'Package holidays from 15,000 MAD per person for 7 days including flights and adapted transfers.',
  },
] as const;

/* ================================================================
   DATA: DISABILITY-SPECIFIC TIPS
   ================================================================ */

const disabilityTips = [
  {
    type: 'Wheelchair and Mobility Impairments',
    icon: Accessibility,
    tips: [
      'Bring essential spare parts for your wheelchair: inner tubes, casters, and a basic toolkit',
      'Electric wheelchair users need a universal charger adapter -- Morocco uses type C and E plugs at 220V',
      'Request a portable ramp from your tour operator for locations with a few steps',
      'Carry a lightweight folding wheelchair as backup if your primary chair is electric',
      'Download Wheelmap or AccessibleGO apps to find user-rated accessible locations',
      'Cobblestones and cracked pavements are the norm outside modern districts -- front caster wheels take a beating',
    ],
  },
  {
    type: 'Visual Impairments',
    icon: Eye,
    tips: [
      'Morocco has very limited tactile paving -- it exists only at tram stations in Rabat and Casablanca',
      'Uneven pavements, open drains, bollards, and parked motorbikes on sidewalks are constant obstacles',
      'A sighted guide or travel companion is strongly recommended for street navigation',
      'Download Be My Eyes app and ensure your phone has robust offline maps with voice navigation',
      'Hotels can arrange a staff member to walk you through the property layout on arrival',
      'Moroccan people are generally very willing to offer physical guidance when asked',
    ],
  },
  {
    type: 'Hearing Impairments',
    icon: Ear,
    tips: [
      'Morocco is generally manageable -- Moroccan communication naturally involves gestures and visual expression',
      'Few tourist sites have induction loops, captioning, or sign language interpretation',
      'Download offline Google Translate with French and Arabic for written communication with locals',
      'Carry a card in Arabic and French explaining your hearing impairment for taxi drivers and shopkeepers',
      'Emergency services (19 police, 15 ambulance) do not have text-based alternatives -- have someone call for you',
      'The visual richness of Morocco -- architecture, markets, landscapes -- is fully experienced without hearing',
    ],
  },
  {
    type: 'Chronic Conditions and Hidden Disabilities',
    icon: Heart,
    tips: [
      'Carry a medical ID bracelet or card in French and Arabic listing conditions, medications, and emergency contacts',
      'Heat is a serious factor from June through September -- plan outdoor activities for early morning or late afternoon',
      'Pharmacies are on every block in Moroccan cities and pharmacists speak French; many speak English',
      'Bring a complete supply of specialized medications -- specific brands may not be available locally',
      'Private clinics in Marrakech, Casablanca, and Rabat have English-speaking doctors and modern equipment',
      'Travel insurance must explicitly cover pre-existing conditions and disability-related medical situations',
    ],
  },
] as const;

/* ================================================================
   DATA: MEDICATION AND EQUIPMENT
   ================================================================ */

const equipmentTips = [
  {
    topic: 'Medications Through Customs',
    icon: BriefcaseMedical,
    description:
      'Carry all medications in original packaging with a doctor\'s letter in French or English listing each medication, its generic name, dosage, and the medical reason. Controlled substances (opioid painkillers, some muscle relaxants) require a copy of your prescription. Moroccan customs rarely cause issues but having documentation prevents delays. Keep medications in your carry-on luggage.',
  },
  {
    topic: 'Wheelchair and Mobility Equipment',
    icon: Accessibility,
    description:
      'Airlines carry wheelchairs and mobility equipment free of charge. Tag your wheelchair with your name and contact details. Remove detachable parts (cushions, joysticks, footrests) and carry them in the cabin. For electric wheelchairs, disconnect the battery and tape the terminals. Bring a lightweight backup fold-up chair if possible, as repairs can take days.',
  },
  {
    topic: 'Travel Insurance',
    icon: ShieldCheck,
    description:
      'Standard travel insurance often excludes pre-existing conditions and disability-related claims. Specialist providers like AllClear and Staysure cover pre-existing conditions including those requiring mobility equipment. Your policy must cover wheelchair damage, loss, replacement costs, medical evacuation, and repatriation with equipment. Read the fine print. Seasonal pricing can change between providers.',
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoAccessibleTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-morocco.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Accessible Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Accessibility className="w-4 h-4" />
            Inclusive Travel Planning
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Accessible Travel
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            An honest, practical guide for travelers with disabilities. City-by-city
            wheelchair ratings, accessible hotels from 700 MAD, adapted transport,
            specialist tour operators, and tips for every type of impairment.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            The Honest Truth About Accessibility in Morocco
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is not an easy country for wheelchair users. That needs to be said clearly before
              anything else. Centuries-old medinas were built for foot traffic and pack animals, not
              wheelchairs. Pavements crack and vanish. Curb cuts are rare. Ramps exist at modern hotels
              but not at most restaurants, shops, or historical sites. The gap between Morocco&apos;s
              accessibility ambitions and its current reality is significant.
            </p>
            <p>
              That said, Morocco is absolutely possible for disabled travelers -- and thousands make
              the trip each year. The country has been investing in accessibility infrastructure since
              passing disability rights law 10-03. Modern cities like Agadir and Rabat have accessible
              tram systems, flat wide streets, and international hotels built to ADA standards. A
              growing number of specialist tour operators run adapted vehicles, plan wheelchair-friendly
              routes, and know exactly which hotel rooms actually deliver on their accessibility promises.
            </p>
            <p>
              This guide gives you the unfiltered picture: what works, what does not, and how to plan
              a trip that plays to Morocco&apos;s strengths while avoiding its genuine barriers. The
              reward for that planning is a country of extraordinary warmth, culture, and beauty that
              few other destinations can match.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accessibility Snapshot ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accessibility at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts for disabled travelers considering Morocco.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessSnapshot.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="card-moroccan p-6 text-center">
                  <Icon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                  <p className="text-sm text-[var(--text-secondary)] mb-1">{item.label}</p>
                  <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── City-by-City Accessibility Ratings ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            City-by-City Accessibility Ratings
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Honest ratings based on wheelchair infrastructure, hotel options, transport, and pavement conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityRatings.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`${city.city} city view showing accessibility infrastructure`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {city.city}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < city.stars ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-white/30'}`}
                        />
                      ))}
                      <span className="text-white/70 text-xs ml-2">{city.tagline}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {city.description}
                  </p>
                  <ul className="space-y-2">
                    {city.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accessible Accommodations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accessible Accommodations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to stay with reliable wheelchair access, from international hotels to adapted riads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationTypes.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-medium">{acc.price}</p>
                      <p className="text-xs text-[var(--text-secondary)]">Best for: {acc.bestFor}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {acc.description}
                  </p>
                  <ul className="space-y-2">
                    {acc.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Adapted Transport ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adapted Transport Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get around Morocco with a wheelchair or mobility equipment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportOptions.map((t) => {
              const TIcon = t.icon;
              return (
                <div key={t.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {t.mode}
                    </h3>
                  </div>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 ${t.levelColor} mb-3`}>
                    {t.accessLevel}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {t.description}
                  </p>
                  <ul className="space-y-2">
                    {t.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-3xl mx-auto card-moroccan p-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              Transport to Avoid
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Standard petit taxis and grand taxis are not wheelchair accessible. CTM and Supratours
              buses do not have wheelchair lifts or ramps. City buses have no accessibility features.
              Horse-drawn carriages (caleches) in Marrakech and Meknes are not suitable for wheelchair
              users. Stick to private adapted vehicles, trams, and the Al Boraq train for reliable access.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accessible Attractions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accessible Attractions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sites that wheelchair users can realistically visit, with honest access levels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibleAttractions.map((att) => {
              const AttIcon = att.icon;
              return (
                <div key={att.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AttIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {att.name}
                    </h3>
                  </div>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${att.access === 'Fully Accessible' ? 'bg-green-50 text-green-700' : att.access === 'Mostly Accessible' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}`}>
                    {att.access}
                  </span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                    {att.description}
                  </p>
                  <p className="text-xs text-[var(--color-accent)] font-medium flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    {att.tip}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Adapted Desert Tours */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
              Adapted Desert Tours
            </h3>
            <div className="card-moroccan p-6">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                A Sahara desert experience is possible for wheelchair users with the right operator.
                Accessible Morocco Tours and Friendly Morocco run adapted desert excursions using
                4x4 vehicles with transfer assistance. They work with desert camps that have
                ground-level tent accommodation with firm sand paths between tents.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  { label: 'Vehicle', detail: 'Adapted 4x4 with transfer assistance from wheelchair to vehicle seat' },
                  { label: 'Accommodation', detail: 'Ground-level luxury tents with firm sand paths and accessible bathroom facilities' },
                  { label: 'Camel Rides', detail: 'Possible with assistance for some mobility levels -- discuss with operator in advance' },
                  { label: 'Cost', detail: 'Adapted 2-day/1-night desert tours from 3,500 MAD per person including transfers and meals' },
                ].map((item) => (
                  <div key={item.label} className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialist Tour Operators ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Specialist Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Operators with adapted vehicles, trained guides, and proven accessible itineraries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOperators.map((op) => {
              const OpIcon = op.icon;
              return (
                <div key={op.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <OpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {op.name}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)]">{op.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {op.description}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] bg-[var(--surface-muted)] rounded-lg p-3 flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    {op.booking}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Navigating the Medina ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Navigating the Medina in a Wheelchair
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            The hardest part of accessible travel in Morocco -- and how to handle it.
          </p>

          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p className="text-base">
              Traditional medinas are the biggest accessibility challenge in Morocco. These medieval
              walled cities were designed for pedestrians and donkeys. Alleys can narrow to under a
              meter. Steps appear without warning. Cobblestones are uneven and sometimes missing.
              Drainage channels cut across pathways. Motorbikes and donkeys share the same narrow
              lanes as pedestrians, and there is nowhere to move aside.
            </p>
            <p className="text-base">
              That does not mean you should skip the medina experience entirely. Here is how
              wheelchair users and mobility-impaired travelers can still engage with medina life:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              {
                title: 'Hire a Local Accessible Guide',
                text: 'A guide who knows the medina can identify the widest routes, avoid steps, and warn about obstacles. Some specialist tour operators have guides specifically trained in wheelchair-accessible medina routes.',
              },
              {
                title: 'Use Rooftop Terraces',
                text: 'Many riads and restaurants have rooftop terraces accessible by elevator or located on the ground level of the Ville Nouvelle. These give panoramic views over the medina rooftops, minarets, and daily life below.',
              },
              {
                title: 'Visit Medina Edges',
                text: 'The main entrances and wider arteries of medinas are more accessible than the deep interior. In Marrakech, Jemaa el-Fnaa square and the first stretch of Rue Semarine are manageable. In Fes, the Bab Boujloud area is relatively flat.',
              },
              {
                title: 'Choose Essaouira',
                text: 'If medina exploration matters to you, Essaouira has the most accessible medina in Morocco. Its Portuguese-influenced grid layout means streets are wider and flatter than in other cities. Not perfect, but the most feasible for wheelchairs.',
              },
              {
                title: 'Accept What You Cannot Access',
                text: 'Some parts of Moroccan medinas are genuinely inaccessible. The tanneries of Fes, the narrow souk alleys of Marrakech, the steep kasbah passages -- these are not accessible and may never be. Focus on what you can reach rather than what you cannot.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Disability-Specific Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips by Disability Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Specific advice for different types of impairments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disabilityTips.map((section) => {
              const SIcon = section.icon;
              return (
                <div key={section.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <SIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.type}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Medication & Equipment ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medication, Equipment &amp; Insurance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical guidance for bringing medical equipment and medication into Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipmentTips.map((item) => {
              const EIcon = item.icon;
              return (
                <div key={item.topic} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <EIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.topic}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Phone className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Emergency Contacts
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Emergency numbers: 19 (police), 15 (ambulance), 150 (fire). Buy a local SIM at the
              airport from 30 MAD for reliable local calls. Save your hotel address in Arabic on your
              phone. Carry a medical card in French and Arabic listing your conditions, medications, and
              emergency contact. Your hotel concierge can call for medical assistance at any hour.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real questions from travelers with disabilities planning a Morocco trip.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'First-Time Visitor Guide',
                description: 'Everything first-timers need to know about visiting Morocco, from visas to cultural norms.',
                href: '/morocco-first-time',
                icon: BookOpen,
              },
              {
                title: 'Transport Guide',
                description: 'Trains, buses, taxis, and rental cars -- how to get around Morocco safely and efficiently.',
                href: '/morocco-transport',
                icon: Car,
              },
              {
                title: 'Health & Safety',
                description: 'Medical facilities, vaccinations, travel insurance, and safety tips for Morocco travelers.',
                href: '/morocco-health-safety',
                icon: ShieldCheck,
              },
              {
                title: 'Luxury Hotels',
                description: 'The finest hotels and resorts in Morocco, many with excellent accessible facilities.',
                href: '/morocco-luxury-hotels',
                icon: Hotel,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent)]/80">
        <div className="container-morocco text-center">
          <Accessibility className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Is Worth the Journey
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            With the right planning, a specialist tour operator, and accessible accommodations,
            disabled travelers can experience the extraordinary culture, food, and warmth that make
            Morocco one of the most captivating destinations on earth. The country is not perfect
            for accessibility -- but it rewards those who make the effort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" /> First-Time Visitor Guide
            </Link>
            <Link
              href="/morocco-transport"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Car className="w-5 h-5" /> Transport Options <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
