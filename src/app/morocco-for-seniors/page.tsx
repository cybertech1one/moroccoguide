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
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Phone,
  Stethoscope,
  Footprints,
  Sun,
  Mountain,
  Utensils,
  Map,
  Compass,
  BedDouble,
  Accessibility,
  HeartPulse,
  Umbrella,
  Waves,
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
  title: 'Morocco for Seniors 2026 | Over 50s Travel Guide & Accessibility Tips',
  description:
    'Complete guide to visiting Morocco for senior travelers and over 50s. Accessibility advice, best cities for older visitors, gentle activities, health considerations, recommended accommodations with elevators, travel insurance for over 65s, and medical facilities across Morocco.',
  keywords: [
    'Morocco for seniors',
    'over 50 Morocco travel',
    'senior travel Morocco',
    'Morocco accessibility',
    'older travelers Morocco',
    'Morocco over 60 travel',
    'Morocco over 65 travel',
    'senior friendly Morocco',
    'Morocco travel guide seniors',
    'Morocco health advice seniors',
    'Morocco mobility advice',
    'gentle activities Morocco',
    'best cities seniors Morocco',
    'Morocco travel insurance over 65',
    'Morocco medical facilities',
    'Morocco guided tours seniors',
    'Morocco accommodations elevator',
    'Morocco safe travel older adults',
    'retirement travel Morocco',
    'Morocco slow travel',
  ],
  openGraph: {
    title: 'Morocco for Seniors 2026 | Over 50s Travel Guide & Accessibility Tips',
    description:
      'Everything senior travelers need to know about Morocco. Best cities, gentle activities, health tips, accessible accommodations, and recommended tour operators for over 50s.',
    url: `${BASE_URL}/morocco-for-seniors`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-culture.webp`,
        width: 1200,
        height: 630,
        alt: 'Senior travelers enjoying a peaceful courtyard garden in a traditional Moroccan riad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco for Seniors 2026 | Over 50s Travel Guide',
    description:
      'Complete guide for senior travelers visiting Morocco. Best cities, accessibility tips, health advice, gentle activities, and accommodations with elevators.',
    images: [`${BASE_URL}/images/hero-morocco-culture.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-for-seniors` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-for-seniors`,
  name: 'Morocco for Seniors 2026 | Over 50s Travel Guide & Accessibility Tips',
  description:
    'Complete guide to visiting Morocco for senior travelers and over 50s. Accessibility, health considerations, best cities, gentle activities, accommodations, travel insurance, and medical facilities.',
  url: `${BASE_URL}/morocco-for-seniors`,
  image: `${BASE_URL}/images/hero-morocco-culture.webp`,
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
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco for Seniors', item: `${BASE_URL}/morocco-for-seniors` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for senior travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is generally safe for senior travelers. The country has a strong culture of respecting elders, and locals are typically very helpful. Stick to well-known tourist areas, use registered guides, and take common-sense precautions. Guided tours are recommended for first-time visitors over 65 as they handle all logistics and provide support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I navigate the medinas with limited mobility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medinas present significant challenges for those with limited mobility. Streets are narrow, uneven, and often include steps. Wheelchairs are extremely difficult to use in most medinas. However, you can enjoy the medina edges, hire a local guide who knows accessible routes, or explore the French-built ville nouvelle areas which are flat and paved. Cities like Agadir and Essaouira have more accessible layouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for seniors to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for senior travelers are March-May and October-November. These shoulder seasons offer mild temperatures (18-25 degrees Celsius), fewer crowds, and lower prices. Avoid June-August when temperatures in cities like Marrakech regularly exceed 40 degrees Celsius, which can be dangerous for older adults. Coastal cities like Essaouira and Agadir are comfortable year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need special travel insurance for visiting Morocco over age 65?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, standard travel insurance policies often exclude travelers over 65 or charge higher premiums. Specialist providers like Staysure, AllClear, and Saga offer policies specifically for older travelers. Ensure your policy covers medical evacuation (the nearest major European hospital is in Spain), pre-existing conditions, and repatriation. Budget from 500 MAD to 2,000 MAD for a 2-week trip depending on age and coverage level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there good medical facilities in Morocco for seniors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has good private medical facilities in major cities. Marrakech, Casablanca, Rabat, and Fes all have private hospitals and clinics with English or French-speaking doctors. Pharmacies are widely available and well-stocked. For serious medical emergencies, Casablanca has the best facilities. Always carry a list of your medications (with generic names) and your doctor contact information.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gentle activities are best for older travelers in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers many gentle activities perfect for seniors: garden visits (Jardin Majorelle, Andalusian Gardens), cooking classes, food tours, traditional hammam spa experiences, guided museum visits, leisurely cafe culture, sunset camel rides on the beach, bird watching in Souss-Massa, pottery workshops, and gentle walking tours with frequent rest stops. Most can be arranged at a relaxed pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should seniors do guided or independent travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For first-time senior visitors, guided tours are strongly recommended. They handle all logistics, provide air-conditioned transport, ensure accessible accommodation, and offer knowledgeable guides who can adapt the pace. Independent travel is possible for experienced travelers, especially in modern cities like Casablanca, Agadir, and Rabat. A middle ground is hiring a private driver-guide for custom itineraries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I handle the heat in Morocco as an older traveler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heat management is critical for senior travelers. Visit between March-May or October-November for milder temperatures. Stay hydrated with at least 2-3 liters of water daily. Plan outdoor activities for early morning (before 10am) and late afternoon (after 4pm). Rest during the hottest midday hours. Choose coastal cities like Essaouira or Agadir for naturally cooler temperatures. Always wear a hat and use sunscreen.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR SENIORS
   ═══════════════════════════════════════════════════════════════ */

const bestCities = [
  {
    name: 'Essaouira',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    rating: 'Best Overall for Seniors',
    description:
      'The ideal Moroccan city for older travelers. Essaouira offers a compact, relatively flat medina with a relaxed Atlantic breeze that keeps temperatures comfortable year-round. The pace of life is slow, the locals are welcoming, and the car-free medina streets are peaceful. The seafront promenade is perfect for gentle walks.',
    pros: [
      'Compact, walkable medina',
      'Cooler coastal climate year-round',
      'Relaxed, unhurried atmosphere',
      'Flat seafront promenade',
      'Excellent seafood restaurants',
      'Less aggressive vendors than Marrakech',
    ],
    considerations: [
      'Some medina streets are uneven cobblestone',
      'Wind can be strong, especially in summer',
      'Fewer luxury hotel options than Marrakech',
    ],
    accessibility: 'Good',
  },
  {
    name: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-rooftop.webp',
    rating: 'Best for Culture & Gardens',
    description:
      'Morocco\'s cultural capital offers world-class gardens, museums, and restaurants. While the medina can be overwhelming, the ville nouvelle (Gueliz and Hivernage) is modern and accessible. Stay in a hotel with a pool in Hivernage and take day trips into the medina with a guide. The garden circuit alone justifies a visit.',
    pros: [
      'World-class gardens (Majorelle, Menara, Agdal)',
      'Best selection of luxury hotels with elevators',
      'Excellent restaurants and cooking classes',
      'Private guided tours widely available',
      'Good private medical facilities',
      'Direct international flights from many cities',
    ],
    considerations: [
      'Medina is hectic, noisy, and has uneven surfaces',
      'Extreme heat June-August (40+ degrees Celsius)',
      'Aggressive vendors around Jemaa el-Fna',
      'Traffic can be stressful',
    ],
    accessibility: 'Mixed',
  },
  {
    name: 'Agadir',
    icon: Sun,
    image: '/images/hero-agadir-beach.webp',
    rating: 'Best for Beach & Resort',
    description:
      'Rebuilt after the 1960 earthquake on a modern grid layout, Agadir is Morocco\'s most accessible city. Wide boulevards, a long flat beach promenade, modern hotels with full accessibility features, and a mild year-round climate make it ideal for seniors who want beach relaxation without the chaos of a traditional medina.',
    pros: [
      'Modern city layout with wide, flat streets',
      'Long, flat beach promenade ideal for walking',
      'Year-round mild climate (rarely below 15 or above 30 degrees)',
      'Modern resort hotels with elevators and pools',
      'Less cultural intensity, more relaxing',
      'Good golf courses nearby',
    ],
    considerations: [
      'Less culturally authentic than other cities',
      'Beach can be crowded in summer',
      'Limited historic sights compared to Marrakech or Fes',
    ],
    accessibility: 'Excellent',
  },
  {
    name: 'Rabat',
    icon: Building,
    image: '/images/hero-rabat.webp',
    rating: 'Best for Calm City Culture',
    description:
      'Morocco\'s capital is often overlooked by tourists, which is precisely what makes it ideal for seniors. The Kasbah des Oudaias is compact and charming, the Hassan Tower and Mausoleum are accessible, and the ville nouvelle is spacious and well-maintained. The tram system is modern and easy to use.',
    pros: [
      'Modern tram system for easy transport',
      'Compact, well-maintained tourist sites',
      'Less tourist pressure and hassle',
      'Excellent restaurants in Agdal district',
      'Good private hospitals and pharmacies',
      'Andalusian Gardens are flat and shaded',
    ],
    considerations: [
      'Fewer luxury accommodation options',
      'Less dramatic scenery than Marrakech',
      'Medina still has uneven surfaces',
    ],
    accessibility: 'Very Good',
  },
  {
    name: 'Fes',
    icon: BookOpen,
    image: '/images/hero-fes-medina.webp',
    rating: 'Best for History (With Caveats)',
    description:
      'Fes has the most spectacular medina in Morocco and arguably the world. However, it is also the most challenging for seniors. The medina is a labyrinth of steep, narrow alleys with steps and uneven surfaces. Visit with a guide, wear sturdy shoes, take frequent breaks, and stay in the ville nouvelle or a riad near the medina edge for easier access.',
    pros: [
      'UNESCO World Heritage medina, truly extraordinary',
      'Exceptional traditional crafts and cuisine',
      'Quieter, more authentic than Marrakech',
      'Excellent riad accommodations near medina edges',
      'World-class cooking schools',
      'Less hectic vendor culture',
    ],
    considerations: [
      'Medina has steep hills and many steps',
      'Very challenging for mobility-limited visitors',
      'Summer heat can be intense',
      'Fewer modern hotel options',
    ],
    accessibility: 'Challenging',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH & SAFETY CONSIDERATIONS
   ═══════════════════════════════════════════════════════════════ */

const healthConsiderations = [
  {
    title: 'Heat Management',
    icon: Thermometer,
    severity: 'High Priority',
    description:
      'Morocco can be extremely hot, particularly inland cities like Marrakech and Fes from June to September when temperatures regularly exceed 40 degrees Celsius. Heat stroke and dehydration are real risks for older adults.',
    tips: [
      'Visit during shoulder seasons (March-May, October-November)',
      'Drink at least 2-3 liters of water daily',
      'Stay indoors during midday heat (12pm-4pm)',
      'Choose coastal cities for naturally cooler temperatures',
      'Wear a hat, sunglasses, and high-SPF sunscreen',
      'Carry a small spray bottle for misting',
    ],
  },
  {
    title: 'Altitude Awareness',
    icon: Mountain,
    severity: 'Medium Priority',
    description:
      'If your itinerary includes the Atlas Mountains or any high-altitude excursion, be aware that altitude sickness can affect anyone over 2,500 meters. Symptoms include headache, dizziness, nausea, and shortness of breath, which can be more severe for seniors.',
    tips: [
      'Ascend gradually, no more than 500m per day above 2,500m',
      'Stay well hydrated at altitude',
      'Avoid strenuous activity on arrival at altitude',
      'Consult your doctor before high-altitude trips if you have heart or lung conditions',
      'The Tizi n\'Tichka pass reaches 2,260m, generally safe for most travelers',
      'Consider Ourika Valley (1,000m) as a gentler alternative to Imlil',
    ],
  },
  {
    title: 'Walking Distances & Terrain',
    icon: Footprints,
    severity: 'High Priority',
    description:
      'Exploring Moroccan medinas involves significant walking on uneven cobblestones, steep inclines, and narrow passages. A typical medina visit can involve 3-5 km of walking. The ville nouvelle areas of cities are generally flat and paved.',
    tips: [
      'Wear sturdy, broken-in walking shoes with good grip',
      'Use a walking stick or trekking pole on cobblestones',
      'Plan medina visits for the morning when you have most energy',
      'Hire a guide who understands pace limitations',
      'Schedule rest stops every 30-45 minutes',
      'Use taxis between major sites rather than walking between them',
    ],
  },
  {
    title: 'Medication & Prescriptions',
    icon: Stethoscope,
    severity: 'High Priority',
    description:
      'Bring more than enough medication for your entire trip plus extra in case of delays. Moroccan pharmacies are well-stocked but may use different brand names. Some medications available over-the-counter in Europe or North America require a prescription in Morocco.',
    tips: [
      'Carry medications in original packaging with labels',
      'Bring a letter from your doctor listing all medications with generic names',
      'Pack medications in carry-on luggage, never in checked bags',
      'Bring extra supplies in case of travel delays (at least 5 extra days)',
      'Know the generic names of all your medications',
      'Research availability of your specific medications in Morocco before departure',
    ],
  },
  {
    title: 'Food & Water Safety',
    icon: Utensils,
    severity: 'Medium Priority',
    description:
      'Morocco has excellent cuisine, but senior travelers should take extra care with food and water. Digestive upsets are common for all travelers and can be more serious for older adults, particularly those on certain medications.',
    tips: [
      'Drink only bottled water (Sidi Ali or Sidi Harazem brands)',
      'Avoid raw salads at street stalls',
      'Eat at busy restaurants where food turnover is high',
      'Carry oral rehydration salts (available at pharmacies from 5 MAD)',
      'Introduce street food gradually, not on the first day',
      'Avoid ice in drinks outside hotels and upscale restaurants',
    ],
  },
  {
    title: 'Sun Exposure',
    icon: Sun,
    severity: 'Medium Priority',
    description:
      'Morocco has intense sunshine, particularly from May through September. UV levels are significantly higher than in Northern Europe or the northern United States. Prolonged sun exposure increases risk of heat exhaustion and sunburn, especially for those on photosensitive medications.',
    tips: [
      'Use SPF 50+ sunscreen and reapply every 2 hours',
      'Wear a wide-brimmed hat and UV-protective sunglasses',
      'Check if your medications increase sun sensitivity',
      'Seek shade during peak UV hours (11am-3pm)',
      'Wear lightweight, long-sleeved clothing in light colors',
      'Buy a Moroccan scarf to drape over shoulders for extra protection',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RECOMMENDED ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    type: 'Luxury Hotel',
    icon: Award,
    price: 'From 4,500 MAD per night',
    seniorFeatures: ['Elevator access to all floors', 'Ground floor rooms available', 'On-site medical assistance', 'Wheelchair-accessible spa', 'Large gardens with benches'],
    description:
      'The gold standard for senior-friendly luxury in Morocco. This iconic palace hotel has full elevator access, ground floor suites, a world-class spa with accessibility features, and 8 hectares of gardens with plenty of shaded seating. Staff are trained to assist guests with mobility needs.',
  },
  {
    name: 'Sofitel Marrakech Lounge & Spa',
    city: 'Marrakech',
    type: 'Luxury Hotel',
    icon: Building,
    price: 'From 2,800 MAD per night',
    seniorFeatures: ['Full elevator access', 'Accessible rooms', 'Flat grounds and pathways', 'On-site restaurant and spa', 'Pool with easy entry'],
    description:
      'A modern luxury hotel in Hivernage with excellent accessibility. Located outside the medina, it offers a calm base with flat pathways throughout the property. The pool has gradual entry steps, and the spa is accessible. Short taxi ride to Jemaa el-Fna.',
  },
  {
    name: 'Sofitel Essaouira Mogador',
    city: 'Essaouira',
    type: 'Beach Resort',
    icon: Waves,
    price: 'From 2,200 MAD per night',
    seniorFeatures: ['Full elevator access', 'Beach-level pool', 'Thalassotherapy spa', 'Golf course on-site', 'Shuttle to medina'],
    description:
      'A beachfront resort with full accessibility features. The flat resort layout is easy to navigate, the spa offers therapeutic thalasso treatments beneficial for joint pain, and a regular shuttle takes guests to Essaouira\'s medina. Ground floor rooms overlook the ocean.',
  },
  {
    name: 'Hotel & Ryad Art Place',
    city: 'Marrakech',
    type: 'Boutique Hotel',
    icon: Star,
    price: 'From 1,800 MAD per night',
    seniorFeatures: ['Elevator', 'Rooftop restaurant', 'Central Gueliz location', 'Modern bathrooms with grab bars', 'Flat access throughout'],
    description:
      'A modern boutique hotel in the heart of Gueliz, the new town. Its central location means you are within walking distance of restaurants and shops on flat, paved streets. The hotel has an elevator, modern accessible bathrooms, and a rooftop restaurant so you do not need to go out for dinner.',
  },
  {
    name: 'Tikida Golf Palace',
    city: 'Agadir',
    type: 'Resort Hotel',
    icon: Sun,
    price: 'From 1,500 MAD per night',
    seniorFeatures: ['Full elevator access', 'Ground floor rooms', 'On-site golf course', 'Heated pool', 'Medical clinic nearby'],
    description:
      'An excellent resort choice for seniors who want sun, relaxation, and golf. The modern layout is fully accessible, with flat grounds and elevator access. The heated pool is ideal for gentle exercise, and Agadir\'s modern infrastructure makes independent exploration easy.',
  },
  {
    name: 'Riad Fes - Relais & Chateaux',
    city: 'Fes',
    type: 'Luxury Riad',
    icon: BookOpen,
    price: 'From 3,000 MAD per night',
    seniorFeatures: ['Elevator (rare for a riad)', 'Accessible suites', 'Terrace restaurant', 'Spa with hammam', 'Medina edge location for easier access'],
    description:
      'One of the very few riads in Fes with an elevator, making it uniquely suited for senior travelers who want the riad experience without the stair challenge. Located on the edge of the medina, it is easier to reach by taxi. The terrace restaurant overlooks the entire medina.',
  },
  {
    name: 'Villa Mandarine',
    city: 'Rabat',
    type: 'Boutique Hotel',
    icon: Building,
    price: 'From 1,600 MAD per night',
    seniorFeatures: ['Ground floor rooms available', 'Citrus garden setting', 'Quiet residential neighborhood', 'Pool', 'Easy taxi access to sites'],
    description:
      'A charming villa hotel set in a citrus orchard in a quiet Rabat neighborhood. Ground floor rooms with garden access make it ideal for seniors. The peaceful setting is a world away from medina chaos, and taxis to the main sights are from 30 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GENTLE ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const gentleActivities = [
  {
    name: 'Garden Visits',
    icon: Star,
    intensity: 'Low',
    cities: 'Marrakech, Rabat, Meknes',
    price: 'From 70 MAD entry',
    description:
      'Morocco\'s gardens are world-class and perfect for seniors. The Jardin Majorelle in Marrakech (from 70 MAD) offers shaded paths and benches. The Menara Gardens have flat, olive-tree-lined walks. Rabat\'s Andalusian Gardens are quiet and shaded. All can be enjoyed at your own pace with frequent rest stops.',
    bestFor: 'All mobility levels',
  },
  {
    name: 'Cooking Classes',
    icon: Utensils,
    intensity: 'Low',
    cities: 'Marrakech, Fes, Essaouira',
    price: 'From 400 MAD per person',
    description:
      'Moroccan cooking classes are a wonderful seated activity. Learn to make tagine, couscous, and pastilla while sitting comfortably. Many classes include a market visit (which can be done at a gentle pace or skipped) followed by 2-3 hours of cooking and eating. La Maison Arabe in Marrakech (from 600 MAD) is particularly senior-friendly.',
    bestFor: 'All mobility levels, food lovers',
  },
  {
    name: 'Hammam & Spa',
    icon: Heart,
    intensity: 'Low',
    cities: 'All major cities',
    price: 'From 300 MAD per treatment',
    description:
      'A luxury spa hammam is deeply therapeutic for older bodies. The warm steam soothes joints, the gentle scrubbing improves circulation, and the massage relieves tension. Choose a luxury spa over a public hammam for more comfort and assistance. Heritage Spa in Marrakech (from 400 MAD) has excellent facilities for seniors.',
    bestFor: 'All mobility levels, joint pain sufferers',
  },
  {
    name: 'Food Tours',
    icon: MapPin,
    intensity: 'Low to Medium',
    cities: 'Marrakech, Fes, Casablanca',
    price: 'From 500 MAD per person',
    description:
      'Guided food tours allow you to sample Moroccan cuisine with expert commentary. Good operators walk at a gentle pace with regular stops. Specify any dietary restrictions or pace requirements when booking. Marrakech Food Tours offers a "gentle pace" option (from 600 MAD) specifically designed for older travelers.',
    bestFor: 'Moderate mobility, food enthusiasts',
  },
  {
    name: 'Sunset Camel Rides',
    icon: Sun,
    intensity: 'Low',
    cities: 'Essaouira, Agadir',
    price: 'From 250 MAD per person',
    description:
      'Beach camel rides at sunset are a gentle, memorable experience. The camel\'s rocking motion is soothing rather than jarring on the flat beach sand. Rides typically last 1-2 hours. Handlers assist with mounting and dismounting. Essaouira beach rides (from 250 MAD) are particularly scenic and calm.',
    bestFor: 'Moderate mobility (need to mount/dismount camel)',
  },
  {
    name: 'Museum & Gallery Visits',
    icon: BookOpen,
    intensity: 'Low',
    cities: 'Marrakech, Rabat, Tangier',
    price: 'From 30 MAD entry',
    description:
      'Morocco has excellent museums, many in restored palaces. The MACAAL contemporary art museum in Marrakech (from 40 MAD) is modern and accessible. The Mohammed VI Museum in Rabat (from 30 MAD) has elevator access. The Museum of Moroccan Judaism in Casablanca is small and ground-floor.',
    bestFor: 'All mobility levels',
  },
  {
    name: 'Rooftop Cafe Culture',
    icon: Utensils,
    intensity: 'Very Low',
    cities: 'All cities',
    price: 'From 25 MAD for mint tea',
    description:
      'One of Morocco\'s greatest pleasures requires no walking at all. Settle into a rooftop cafe with a glass of mint tea and watch the world go by. In Marrakech, the cafes around Jemaa el-Fna offer front-row seats to the spectacle below. Many cafes have elevator access or are on ground floors.',
    bestFor: 'All mobility levels',
  },
  {
    name: 'Bird Watching',
    icon: Compass,
    intensity: 'Low',
    cities: 'Souss-Massa, Oualidia, Merja Zerga',
    price: 'From 200 MAD for guided trip',
    description:
      'Morocco is a world-class bird watching destination with over 480 species. Souss-Massa National Park near Agadir is home to the rare Northern Bald Ibis. Oualidia lagoon attracts flamingos and herons. Many hides and viewing points are accessible. Guided trips (from 200 MAD) provide transport and expertise.',
    bestFor: 'All mobility levels, nature lovers',
  },
  {
    name: 'Pottery & Craft Workshops',
    icon: Award,
    intensity: 'Low',
    cities: 'Fes, Safi, Marrakech',
    price: 'From 300 MAD per workshop',
    description:
      'Try your hand at traditional Moroccan crafts in a seated workshop. Pottery classes in Fes and Safi (from 300 MAD) are a 2-3 hour experience where you shape clay on a wheel. Zellige tile workshops in Fes teach the ancient mosaic art. These are indoor, seated activities ideal for seniors.',
    bestFor: 'All mobility levels, creative travelers',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR OPERATORS FOR SENIORS
   ═══════════════════════════════════════════════════════════════ */

const tourOperators = [
  {
    name: 'Saga Holidays',
    specialty: 'Over 50s specialist',
    icon: Users,
    description:
      'The UK\'s leading over-50s travel company offers escorted Morocco tours with a pace specifically designed for older travelers. Groups are small (20-30), transport is air-conditioned, and hotels are selected for accessibility. Their 10-day "Imperial Cities" tour covers Marrakech, Fes, Meknes, and Rabat.',
    price: 'From 15,000 MAD per person (10 days)',
    features: ['Small group sizes', 'Accessible hotels guaranteed', 'On-tour support', 'Includes travel insurance'],
  },
  {
    name: 'Intrepid Travel (Comfort Range)',
    specialty: 'Small group, upgraded comfort',
    icon: Compass,
    description:
      'Intrepid\'s Comfort range offers Morocco tours with better hotels, more inclusions, and a more relaxed pace than their standard trips. Groups are capped at 12 people, and private transport is included. The "Premium Morocco" 12-day tour is their best option for seniors.',
    price: 'From 18,000 MAD per person (12 days)',
    features: ['Max 12 travelers', 'Premium hotels', 'Private transport', 'Flexible pace'],
  },
  {
    name: 'Private Driver-Guide',
    specialty: 'Custom private touring',
    icon: Map,
    description:
      'Hiring a private driver-guide is often the best option for senior travelers. You set the pace, choose the stops, and rest whenever you need to. Drivers speak English or French, know accessible routes, and can adapt on the fly. Book through your hotel or a reputable agency.',
    price: 'From 1,200 MAD per day (car + driver-guide)',
    features: ['Complete flexibility', 'Door-to-door service', 'Custom itinerary', 'Air-conditioned vehicle'],
  },
  {
    name: 'Morocco Private Tours',
    specialty: 'Luxury private itineraries',
    icon: Star,
    description:
      'A Marrakech-based agency specializing in luxury private tours that can be tailored for senior travelers. They pre-screen hotels for accessibility, plan gentle itineraries with built-in rest time, and provide experienced English-speaking guides who understand senior needs.',
    price: 'From 2,500 MAD per day (all-inclusive)',
    features: ['Fully customizable', 'Accessibility vetted', 'Luxury vehicles', 'All-inclusive pricing'],
  },
  {
    name: 'Explore Worldwide (Walking Grade 1-2)',
    specialty: 'Low-intensity small groups',
    icon: Footprints,
    description:
      'Explore rates all trips by walking grade. Their Morocco trips rated Grade 1-2 involve minimal walking (under 2 hours per day on flat terrain) and are suitable for seniors with moderate fitness. The "Highlights of Morocco" 8-day tour is rated Grade 2.',
    price: 'From 12,000 MAD per person (8 days)',
    features: ['Walking grade system', 'Clear fitness requirements', 'Small groups (max 16)', 'Leader support'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDICAL FACILITIES
   ═══════════════════════════════════════════════════════════════ */

const medicalFacilities = [
  {
    city: 'Casablanca',
    hospital: 'Clinique Badr',
    phone: '+212 522 250 250',
    notes: 'Best private hospital in Morocco. English and French-speaking doctors. Full range of specialists. Emergency department 24/7.',
    icon: HeartPulse,
  },
  {
    city: 'Marrakech',
    hospital: 'Clinique Internationale',
    phone: '+212 524 438 282',
    notes: 'Modern private clinic with English-speaking doctors. X-ray, laboratory, and pharmacy on-site. Located in Gueliz, easy taxi access.',
    icon: Stethoscope,
  },
  {
    city: 'Fes',
    hospital: 'Clinique Atlas',
    phone: '+212 535 651 751',
    notes: 'Private clinic in the ville nouvelle. French and some English-speaking staff. General medicine and cardiology specialists.',
    icon: Stethoscope,
  },
  {
    city: 'Rabat',
    hospital: 'Hopital Cheikh Zaid',
    phone: '+212 537 755 555',
    notes: 'Major hospital with international standards. All specialties available. English and French-speaking doctors. 24/7 emergency.',
    icon: HeartPulse,
  },
  {
    city: 'Agadir',
    hospital: 'Clinique Tilila',
    phone: '+212 528 843 643',
    notes: 'Private clinic serving the tourist zone. French and some English-speaking staff. General practitioners and specialists on call.',
    icon: Stethoscope,
  },
  {
    city: 'All Cities',
    hospital: 'Pharmacies',
    phone: 'Look for green cross sign',
    notes: 'Moroccan pharmacies are excellent and widely available. Pharmacists speak French and often English. Many medications available without prescription. Green cross signs indicate 24-hour pharmacies.',
    icon: ShieldCheck,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVEL INSURANCE PROVIDERS
   ═══════════════════════════════════════════════════════════════ */

const insuranceProviders = [
  {
    name: 'Staysure',
    ageLimit: 'No upper age limit',
    icon: Umbrella,
    coverage: 'Medical, cancellation, baggage, repatriation',
    price: 'From 500 MAD (2-week trip, age 65-70)',
    notes: 'Specialist insurer for older travelers. Covers pre-existing conditions with medical screening. Includes medical evacuation to Spain if needed.',
  },
  {
    name: 'AllClear Travel Insurance',
    ageLimit: 'No upper age limit',
    icon: ShieldCheck,
    coverage: 'Medical, cancellation, baggage, repatriation, cruise',
    price: 'From 600 MAD (2-week trip, age 65-70)',
    notes: 'Specializes in covering pre-existing medical conditions. Free medical screening online. Covers over 100 pre-existing conditions including heart conditions and diabetes.',
  },
  {
    name: 'Saga Travel Insurance',
    ageLimit: 'Over 50s only',
    icon: Users,
    coverage: 'Medical, cancellation, baggage, repatriation, legal',
    price: 'From 700 MAD (2-week trip, age 65-70)',
    notes: 'Designed exclusively for over-50s. Higher coverage limits than standard policies. Includes 24-hour medical helpline with multilingual support.',
  },
  {
    name: 'World Nomads (for active seniors)',
    ageLimit: 'Up to age 69',
    icon: Compass,
    coverage: 'Medical, adventure activities, cancellation, baggage',
    price: 'From 400 MAD (2-week trip, age 60-69)',
    notes: 'Best for active seniors planning hiking, camel riding, or other activities. Covers a wide range of adventure sports that other insurers exclude. Note: upper age limit of 69.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED VS INDEPENDENT COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const travelStyleComparison = [
  {
    aspect: 'Logistics',
    guided: 'All transport, hotels, and activities pre-arranged. You just show up. Airport transfers, intercity travel, and daily itineraries handled by the tour operator.',
    independent: 'You arrange everything yourself: flights, hotels, intercity transport, activities. Requires research and advance booking. Apps like Booking.com and ONCF (trains) help significantly.',
  },
  {
    aspect: 'Pace',
    guided: 'Set by the group or the tour leader. Most senior-focused tours build in rest days and gentle mornings. However, you are tied to the group schedule.',
    independent: 'Completely your own pace. Sleep in if you want, skip a site, spend an extra hour at a cafe. Maximum flexibility but requires more decision-making energy.',
  },
  {
    aspect: 'Cost',
    guided: 'Higher upfront cost (from 12,000 MAD for 8 days) but includes most expenses. Fewer surprise costs. Good value when you factor in what is included.',
    independent: 'Lower daily cost (from 800 MAD per day for comfortable travel) but you pay for each element separately. Meals, entry fees, and transport add up. More control over budget.',
  },
  {
    aspect: 'Social',
    guided: 'Built-in social group. Great for solo senior travelers who want company. However, you may not always connect with all group members.',
    independent: 'More solitary, but also more opportunity for genuine local interactions. You meet people on your own terms, which can lead to more authentic connections.',
  },
  {
    aspect: 'Safety & Support',
    guided: 'Tour leader handles any problems. Medical emergencies, lost luggage, and transport issues are managed for you. 24-hour support line available.',
    independent: 'You handle problems yourself. Travel insurance helpline is your backup. Requires more confidence and problem-solving ability. Hotel staff can assist with most issues.',
  },
  {
    aspect: 'Accessibility',
    guided: 'Senior-focused tours pre-screen hotels for accessibility and plan routes with mobility in mind. Vehicles have step assistance. Guides carry first-aid kits.',
    independent: 'You must research and verify accessibility yourself. Hotels may not accurately describe their accessibility features. Medina riads often have stairs with no elevator.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACE RECOMMENDATIONS BY AGE
   ═══════════════════════════════════════════════════════════════ */

const paceRecommendations = [
  {
    group: '50-60 (Active)',
    icon: Footprints,
    dailyWalking: '5-8 km comfortable',
    sightsPerDay: '3-4 major sites',
    restDays: '1 rest day per 4 travel days',
    itineraryStyle: 'Full itinerary with some physical activities',
    notes: 'Most activities accessible. Can handle medina exploration with good shoes. Atlas Mountain day trips fine. Consider a desert overnight rather than multi-day trek.',
  },
  {
    group: '60-70 (Moderate)',
    icon: Clock,
    dailyWalking: '3-5 km comfortable',
    sightsPerDay: '2-3 major sites',
    restDays: '1 rest day per 3 travel days',
    itineraryStyle: 'Morning activities, afternoon rest',
    notes: 'Medina visits best with a guide at a gentle pace. Prioritize gardens, museums, and cooking classes over long walks. Use taxis between sites. Desert trip possible with comfortable camp.',
  },
  {
    group: '70-80 (Gentle)',
    icon: Heart,
    dailyWalking: '1-3 km comfortable',
    sightsPerDay: '1-2 major sites',
    restDays: '1 rest day per 2 travel days',
    itineraryStyle: 'One activity per morning, rest in afternoon',
    notes: 'Focus on Essaouira, Agadir, or Rabat for easier terrain. Guided tours essential. Choose hotels with elevators and ground floor rooms. Avoid Fes medina unless very fit. Cooking classes and garden visits ideal.',
  },
  {
    group: '80+ (Leisurely)',
    icon: BedDouble,
    dailyWalking: 'Under 1 km comfortable',
    sightsPerDay: '1 major site',
    restDays: 'Alternate activity/rest days',
    itineraryStyle: 'Base in one city, gentle excursions',
    notes: 'Base yourself in one comfortable hotel in Agadir or Marrakech (Hivernage). Take short day outings with private driver. Focus on hotel amenities, garden visits, and dining. Private driver-guide essential.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MOBILITY CHALLENGES IN MEDINAS
   ═══════════════════════════════════════════════════════════════ */

const medinaAccessibility = [
  {
    challenge: 'Uneven Cobblestones',
    icon: Footprints,
    severity: 'Common everywhere',
    description: 'Medina streets are paved with irregular cobblestones, polished smooth by centuries of foot traffic. They can be slippery when wet. Walking requires constant attention to where you place your feet.',
    solution: 'Wear shoes with excellent grip and ankle support. A walking stick provides stability. Walk slowly and deliberately. Ask your guide to choose smoother routes.',
  },
  {
    challenge: 'Steep Inclines & Steps',
    icon: Mountain,
    severity: 'Especially Fes and Chefchaouen',
    description: 'Many medinas are built on hillsides. Fes medina has significant elevation changes with frequent staircases. Chefchaouen is almost entirely stairs. Even Marrakech has unexpected steps within the souks.',
    solution: 'In Fes, visit only the lower medina areas near Bab Bou Jeloud. In Marrakech, stick to main thoroughfares which are relatively flat. Skip Chefchaouen if mobility is limited.',
  },
  {
    challenge: 'Narrow Passages',
    icon: AlertTriangle,
    severity: 'Common in all medinas',
    description: 'Some medina alleys are barely 1 meter wide. You must press against the wall to let donkeys, motorbikes, or handcarts pass. There is no space for wheelchairs or wide walkers in most inner medina passages.',
    solution: 'Stay on wider main routes. Your guide should know which streets are broadest. Avoid peak shopping hours (10am-1pm) when passages are most crowded. Early morning visits are best.',
  },
  {
    challenge: 'Lack of Handrails',
    icon: AlertTriangle,
    severity: 'Universal',
    description: 'Steps and inclines in medinas almost never have handrails. Riad staircases are often steep and narrow with no rails. Even restaurant terraces may have steep stairs without adequate support.',
    solution: 'Bring a sturdy walking stick or trekking pole. When booking a riad, specifically ask about stairs and whether ground floor rooms are available. Choose hotels over riads if stairs are a concern.',
  },
  {
    challenge: 'Motor Vehicles & Donkeys',
    icon: AlertTriangle,
    severity: 'Constant in Marrakech and Fes',
    description: 'Despite being pedestrian medinas, motorbikes weave through the crowds at speed, and loaded donkeys take priority on narrow streets. You must be alert and step aside quickly when you hear "balek" (watch out).',
    solution: 'Stay alert and walk near the walls rather than the center of passages. Your guide will watch for approaching vehicles. Visit during quieter early morning hours. Essaouira medina has far less motor vehicle traffic.',
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco-culture.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco for Seniors</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Senior Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco for Seniors:
            <br className="hidden md:block" /> The Over 50s Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything older travelers need to know about visiting Morocco. Accessibility advice,
            health considerations, gentle activities, and the best cities for a comfortable,
            enriching experience.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Perfect for Senior Travelers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most rewarding destinations in the world for travelers over 50.
                The country has a deep, instinctive respect for elders that is woven into its culture.
                In Moroccan society, age brings status and wisdom, and visitors of all ages are treated
                with genuine warmth and hospitality.
              </p>
              <p>
                The country offers an extraordinary range of experiences that do not require extreme
                fitness: world-class gardens, cooking classes, relaxing hammam spas, gentle food tours,
                stunning architecture, and a cafe culture that invites you to slow down and savor every
                moment. Morocco rewards those who take their time.
              </p>
              <p>
                That said, Morocco does present some challenges for older travelers. The famous medinas
                have uneven surfaces and steep alleys. The heat can be intense. And the sensory overload
                of cities like Marrakech can be tiring. This guide covers everything you need to plan
                a comfortable, safe, and deeply enriching trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pace Recommendations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pace Recommendations by Age Group
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to structure your itinerary based on your fitness level and age. These are guidelines,
            not rules. Your personal fitness matters more than your age.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paceRecommendations.map((rec) => {
              const RecIcon = rec.icon;
              return (
                <div key={rec.group} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RecIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {rec.group}
                    </h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Footprints className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--text-muted)]">Daily walking:</span>
                      <span className="font-medium text-[var(--text-primary)]">{rec.dailyWalking}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--text-muted)]">Sites per day:</span>
                      <span className="font-medium text-[var(--text-primary)]">{rec.sightsPerDay}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BedDouble className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--text-muted)]">Rest days:</span>
                      <span className="font-medium text-[var(--text-primary)]">{rec.restDays}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--text-muted)]">Style:</span>
                      <span className="font-medium text-[var(--text-primary)]">{rec.itineraryStyle}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rec.notes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Cities for Seniors ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cities for Senior Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all Moroccan cities are equally accessible. Here are the best options ranked by
            ease of travel for older visitors.
          </p>

          <div className="space-y-8">
            {bestCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.name} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={city.image}
                        alt={`${city.name}, Morocco - a recommended city for senior travelers`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-auto lg:top-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CityIcon className="w-5 h-5 text-white" />
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {city.name}
                          </h3>
                        </div>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-white/20 text-white backdrop-blur-sm">
                          {city.rating}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Accessibility className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-[var(--color-accent)]">
                          Accessibility: {city.accessibility}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                            Advantages
                          </h4>
                          <div className="space-y-1.5">
                            {city.pros.map((pro, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                                <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                                {pro}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                            Considerations
                          </h4>
                          <div className="space-y-1.5">
                            {city.considerations.map((con, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                                <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                                {con}
                              </div>
                            ))}
                          </div>
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

      {/* ── Health & Safety Considerations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HeartPulse className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Safety Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key health factors that senior travelers should consider when planning a trip to Morocco.
            Preparation is the key to a safe and enjoyable visit.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {healthConsiderations.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.severity}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-16">
                    {item.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gentle Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gentle Activities for Senior Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco offers a wealth of experiences that do not require extreme fitness. These activities
            are perfect for older travelers who want enriching experiences at a comfortable pace.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gentleActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <span>Intensity: {activity.intensity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {activity.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{activity.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2">
                    <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                    {activity.cities}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Users className="w-3 h-3 text-[var(--color-gold)]" />
                    {activity.bestFor}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Recommended Accommodations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BedDouble className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Senior-Friendly Accommodations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Hotels and riads selected specifically for their accessibility features, elevator access,
            ground floor options, and suitability for older travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting rates per night and vary by season. Peak season (October-April) rates may be 30-50% higher.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodations.map((hotel) => {
              const HotelIcon = hotel.icon;
              return (
                <div key={hotel.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HotelIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {hotel.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {hotel.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {hotel.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{hotel.description}</p>
                  <div className="space-y-1.5">
                    {hotel.seniorFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <Accessibility className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
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

      {/* ── Guided vs Independent Travel ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided vs. Independent Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the biggest decisions for senior travelers is whether to join a guided tour or
            travel independently. Both approaches have merits depending on your experience and
            comfort level.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {travelStyleComparison.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Guided Tour</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.guided}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Independent Travel</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.independent}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tour Operators for Seniors ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recommended Tour Operators for Seniors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tour operators that specialize in or cater well to senior travelers visiting Morocco.
            All have experience accommodating older adults and can adapt pace and activities.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {tourOperators.map((operator) => {
              const OperatorIcon = operator.icon;
              return (
                <div key={operator.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OperatorIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {operator.name}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">{operator.specialty}</p>
                    </div>
                    <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                      {operator.price}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{operator.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {operator.features.map((feature, i) => (
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

      {/* ── Mobility Challenges in Medinas ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mobility Challenges in Medinas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s historic medinas are beautiful but present real challenges for those with
            limited mobility. Here is what to expect and how to manage each challenge.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {medinaAccessibility.map((item) => {
              const ChallengeIcon = item.icon;
              return (
                <div key={item.challenge} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ChallengeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.challenge}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)]">{item.severity}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                      <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Solution:</span> {item.solution}
                          </p>
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

      {/* ── Travel Insurance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Umbrella className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Travel Insurance for Over 65s
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Travel insurance is essential for senior travelers visiting Morocco. Standard policies
            often exclude or overcharge older travelers. These specialist providers offer fair
            coverage with no upper age limits.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Always declare all pre-existing medical conditions. Undisclosed conditions will void your policy. Prices shown are approximate for a 2-week trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {insuranceProviders.map((provider) => {
              const ProviderIcon = provider.icon;
              return (
                <div key={provider.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ProviderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {provider.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">Age limit: {provider.ageLimit}</p>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {provider.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{provider.notes}</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <ShieldCheck className="w-3 h-3 text-[var(--color-gold)]" />
                    <span>Covers: {provider.coverage}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Medical Facilities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medical Facilities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has good private healthcare in major cities. These are the key medical facilities
            that senior travelers should know about in case of need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {medicalFacilities.map((facility) => {
              const FacilityIcon = facility.icon;
              return (
                <div key={facility.city + facility.hospital} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <FacilityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {facility.city}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{facility.hospital}</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] mb-2">
                    <Phone className="w-3 h-3" />
                    {facility.phone}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{facility.notes}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Emergency Numbers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-[var(--text-secondary)]">
                    <div><span className="font-medium">Police:</span> 19</div>
                    <div><span className="font-medium">Ambulance:</span> 15</div>
                    <div><span className="font-medium">Fire:</span> 15</div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    Save these numbers in your phone before departure. Also save your embassy number
                    and your travel insurance emergency helpline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Packing Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Senior Travelers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Footprints className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Footwear Is Critical
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Bring sturdy, broken-in walking shoes with excellent grip for medina cobblestones.
                Avoid sandals and new shoes. Consider packing a collapsible walking stick for extra
                stability. Slip-on shoes are useful for mosques and riads where you remove shoes frequently.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carry Cash in Small Bills
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Many places in Morocco are cash-only. Carry small denominations (from 10 MAD and 20 MAD notes)
                for taxis, tips, and small purchases. ATMs are widely available in cities. Inform your
                bank before traveling to prevent card blocks.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Phone className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Get a Local SIM Card
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A Moroccan SIM card from Maroc Telecom or Inwi (from 30 MAD with data) gives you
                internet access for maps and translation apps. Ask at the airport or any phone shop.
                Staff will set it up for you. Google Maps and Google Translate are invaluable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Embrace the Moroccan Pace
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco does not rush, and neither should you. Long lunches, afternoon mint tea, and
                evening strolls are part of the culture. Do not try to see everything. Choose a few
                highlights per day and savor them. The best moments often come when you slow down.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Modestly and Comfortably
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Light, loose-fitting clothing that covers shoulders and knees is both culturally respectful
                and practical for the heat. Linen and cotton breathe well. A light scarf is useful
                for sun protection, mosque visits, and chilly evenings.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Learn a Few Arabic Phrases
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A few words of Arabic or French go a long way. &quot;Salaam alaikum&quot; (hello),
                &quot;shukran&quot; (thank you), &quot;la shukran&quot; (no thank you), and
                &quot;bslama&quot; (goodbye) will earn you smiles and respect. Moroccans deeply
                appreciate the effort.
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
                Is Morocco safe for senior travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe for senior travelers. The country has a strong culture of
                respecting elders, and locals are typically very helpful. Stick to well-known tourist areas,
                use registered guides, and take common-sense precautions. Guided tours are recommended for
                first-time visitors over 65 as they handle all logistics and provide on-the-ground support.
                Petty theft (pickpocketing) can occur in crowded areas, so use a money belt.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I navigate the medinas with limited mobility?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Medinas present significant challenges for those with limited mobility. Streets are narrow,
                uneven, and often include steps. Wheelchairs are extremely difficult to use in most medinas.
                However, you can enjoy the medina edges, hire a local guide who knows accessible routes, or
                explore the French-built ville nouvelle areas which are flat and paved. Cities like Agadir
                and Essaouira have more accessible layouts than Fes or Chefchaouen.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for seniors to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The best months for senior travelers are March through May and October through November. These
                shoulder seasons offer mild temperatures (18-25 degrees Celsius), fewer crowds, and lower prices.
                Avoid June through August when temperatures in inland cities like Marrakech regularly exceed
                40 degrees Celsius. Coastal cities like Essaouira and Agadir are comfortable year-round due
                to Atlantic Ocean breezes keeping temperatures moderate.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need special travel insurance for visiting Morocco over age 65?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, standard travel insurance policies often exclude travelers over 65 or charge significantly
                higher premiums. Specialist providers like Staysure, AllClear, and Saga offer policies
                specifically designed for older travelers. Ensure your policy covers medical evacuation (the
                nearest major European hospital is in Spain), pre-existing conditions, and repatriation.
                Budget from 500 MAD to 2,000 MAD for a 2-week trip depending on your age and coverage level.
                Always declare all pre-existing conditions honestly.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there good medical facilities in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco has good private medical facilities in major cities. Marrakech, Casablanca, Rabat,
                and Fes all have private hospitals and clinics with English or French-speaking doctors.
                Pharmacies are widely available and well-stocked (look for the green cross sign). For serious
                medical emergencies, Casablanca has the best facilities. Always carry a list of your
                medications with generic names, your doctor&apos;s contact information, and your insurance
                policy details.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What gentle activities are best for older travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco excels at activities that do not require extreme fitness. Garden visits (Jardin
                Majorelle from 70 MAD, Menara Gardens free), cooking classes (from 400 MAD), traditional
                hammam spa experiences (from 300 MAD), guided museum visits (from 30 MAD), rooftop cafe
                culture (from 25 MAD for mint tea), sunset beach camel rides (from 250 MAD), bird watching
                (from 200 MAD for guided trip), and pottery workshops (from 300 MAD) are all ideal.
                Most can be done entirely at your own pace.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should seniors choose guided or independent travel in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For first-time senior visitors, guided tours are strongly recommended. They handle all
                logistics, provide air-conditioned transport, ensure accessible accommodation, and offer
                knowledgeable guides who can adapt the pace to your needs. Independent travel is viable for
                experienced travelers, especially in modern cities like Casablanca, Agadir, and Rabat.
                A middle ground is hiring a private driver-guide (from 1,200 MAD per day) for custom
                itineraries at your own pace with full flexibility.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I handle the heat in Morocco as an older traveler?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Heat management is critical for senior travelers. Visit during shoulder seasons (March through
                May or October through November) for milder temperatures. Stay hydrated with at least 2-3 liters
                of water daily. Plan outdoor activities for early morning (before 10am) and late afternoon
                (after 4pm). Rest during the hottest midday hours in your air-conditioned hotel. Choose
                coastal cities like Essaouira or Agadir where Atlantic breezes keep temperatures moderate
                even in summer. Always wear a wide-brimmed hat and use SPF 50+ sunscreen.
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
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s best spa experiences and traditional hammams, perfect for relaxation.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the relaxed coastal city that is our top pick for senior travelers visiting Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/wellness" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Wellness Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Therapeutic activities and wellness experiences throughout Morocco for mind and body.
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
