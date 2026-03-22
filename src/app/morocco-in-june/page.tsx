import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  Music,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Sparkles,
  Globe,
  AlertTriangle,
  Mountain,
  Thermometer,
  CloudSun,
  Waves,
  Shirt,
  DollarSign,
  Users,
  Plane,
  Wind,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in June 2026 | Weather, Gnaoua Festival & Travel Guide',
  description:
    'Complete guide to visiting Morocco in June 2026. Gnaoua World Music Festival in Essaouira, Fes Festival of World Sacred Music, coast season, and tips for beating the inland heat. Weather, costs, and insider advice.',
  keywords: [
    'morocco in june',
    'visiting morocco june',
    'morocco june weather',
    'gnaoua festival essaouira',
    'gnaoua festival 2026',
    'fes festival sacred music',
    'morocco june temperatures',
    'morocco early summer',
    'essaouira june',
    'morocco coast june',
    'morocco june itinerary',
    'morocco june what to wear',
    'morocco festivals june',
    'surfing morocco june',
    'morocco summer travel',
  ],
  openGraph: {
    title: 'Visiting Morocco in June 2026 | Weather, Gnaoua Festival & Travel Guide',
    description:
      'Plan your June trip to Morocco. Gnaoua Festival, Fes Sacred Music, Atlantic coast season, and smart strategies for the rising inland heat.',
    url: `${BASE_URL}/morocco-in-june`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Essaouira medina and Atlantic coast in June with clear blue skies and ocean breezes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in June 2026 | Complete Guide',
    description:
      'Gnaoua Festival, Fes Sacred Music, Atlantic coast at its best, and smart heat strategies. Your complete Morocco June guide.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-june` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-june`,
  name: 'Visiting Morocco in June 2026 | Weather, Gnaoua Festival & Travel Guide',
  description:
    'Complete guide to visiting Morocco in June. Gnaoua Festival, Fes Sacred Music, coast season, and strategies for handling the summer heat.',
  url: `${BASE_URL}/morocco-in-june`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/morocco-in-june`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in June', item: `${BASE_URL}/morocco-in-june` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the weather like in Morocco in June?', acceptedAnswer: { '@type': 'Answer', text: 'June marks the beginning of summer in Morocco. Coastal cities remain pleasant at 22-27 degrees Celsius with ocean breezes. Interior cities like Marrakech and Fes heat up significantly to 28-38 degrees. The Sahara becomes very hot at 25-42 degrees. The Atlas Mountains offer a cooler escape at 15-28 degrees. Rain is extremely rare across all regions.' } },
    { '@type': 'Question', name: 'Is June a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'June is good for coastal and mountain destinations but challenging for interior cities and the desert due to rising heat. The Atlantic coast (Essaouira, Agadir, Taghazout) is ideal with warm sunshine and cooling breezes. The Gnaoua Festival makes Essaouira particularly exciting. Fes and Marrakech are manageable with an early-morning and late-evening sightseeing strategy. Avoid the Sahara unless you handle heat very well.' } },
    { '@type': 'Question', name: 'When is the Gnaoua Festival in Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'The Gnaoua World Music Festival in Essaouira typically takes place in late May or June. It is one of Africa\'s premier music festivals, bringing together Gnaoua master musicians with international jazz, blues, and world music artists over 3-4 days. The main stage on Place Moulay Hassan is free. Check the official festival website for exact 2026 dates and lineup. Book Essaouira accommodation months in advance if your dates overlap.' } },
    { '@type': 'Question', name: 'Can I visit Marrakech in June?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but plan strategically. June temperatures in Marrakech reach 32-38 degrees during the day. Explore the medina and souks in the early morning (before 11 AM) and late afternoon (after 5 PM). Use midday for air-conditioned museums, hammam visits, or pool time at your riad. Jemaa el-Fna comes alive in the cooler evening hours. Many riads offer plunge pools — a lifesaver in June. Carry water and wear a hat.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in June?', acceptedAnswer: { '@type': 'Answer', text: 'Pack light, breathable clothing: cotton or linen shirts, loose trousers, a wide-brimmed hat, quality sunscreen (SPF 50+), and comfortable sandals. For coastal areas, bring a light windbreaker as Essaouira gets breezy. For mountains, pack a warm layer for evenings. Modest clothing covering shoulders and knees is recommended for medina visits. Bring a refillable water bottle — staying hydrated is essential in June heat.' } },
    { '@type': 'Question', name: 'Is June peak season in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'June is the beginning of the summer high season, though not as crowded as July-August when European and Moroccan holidaymakers flood the coast. Festival weeks (Gnaoua, Fes Sacred Music) see spikes in specific cities. Coastal accommodations start to fill up. Prices are moderate to high depending on location — the coast is pricier, while interior cities may offer deals as heat deters some visitors.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    cities: 'Essaouira, Agadir, Casablanca, Rabat',
    tempRange: '22-27°C',
    rainfall: 'Almost none',
    icon: Waves,
    description: 'The coast is June\'s star. Ocean breezes keep temperatures comfortable while the rest of Morocco heats up. Essaouira is famously windy (great for kitesurfing, bring a jacket). Agadir is warmer and calmer. Ocean temperature rises to 19-21°C.',
    highlight: 'Best region in June',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes',
    tempRange: '28-38°C',
    rainfall: 'None',
    icon: Thermometer,
    description: 'Summer heat arrives. Marrakech averages 34°C, Fes slightly cooler at 31°C. Mornings and evenings remain pleasant, but midday is hot. Air conditioning becomes important. Sightseeing requires a siesta strategy — explore early and late, rest midday.',
    highlight: 'Hot but manageable with planning',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, M\'Hamid',
    tempRange: '25-42°C',
    rainfall: 'None',
    icon: Sun,
    description: 'The Sahara heats up significantly in June. Daytime temperatures regularly exceed 40°C and sand temperatures can be scorching. Desert camps are uncomfortable. Only recommended for heat-tolerant travelers who can do activities at dawn and dusk.',
    highlight: 'Very hot — consider alternatives',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ouarzazate, Azrou, Ifrane',
    tempRange: '15-28°C',
    rainfall: 'Very rare',
    icon: Mountain,
    description: 'The mountains become a cool escape from lowland heat. Trekking conditions remain excellent with warm days and refreshingly cool nights. Higher altitudes offer relief — Ifrane and Azrou rarely exceed 25°C. Toubkal is snow-free and accessible.',
    highlight: 'Perfect mountain escape',
  },
  {
    region: 'Northern Morocco',
    cities: 'Tangier, Chefchaouen, Tetouan',
    tempRange: '22-30°C',
    rainfall: 'Very low (0-1 days)',
    icon: CloudSun,
    description: 'Northern Morocco enjoys a Mediterranean-influenced climate that stays milder than the interior. Tangier and Chefchaouen are warm but pleasant, especially in the mornings and evenings. Mediterranean beaches near Al Hoceima start their season.',
    highlight: 'Pleasantly warm',
  },
] as const;

/* ===============================================================
   DATA: TOP EXPERIENCES IN JUNE
   =============================================================== */

const topExperiences = [
  {
    name: 'Gnaoua World Music Festival',
    icon: Music,
    category: 'Festival & Music',
    location: 'Essaouira',
    duration: '3-4 days',
    cost: 'Free (outdoor stages) / From 200 MAD (reserved seating)',
    description:
      'One of Africa\'s most celebrated music events, the Gnaoua World Music Festival transforms Essaouira into a pulsing celebration of Gnaoua trance music fused with jazz, blues, rock, and world music. Master musicians (maalems) from across Morocco perform with international guest artists on stages throughout the medina and along the beach. The main concerts at Place Moulay Hassan draw thousands nightly. Gnaoua music, rooted in sub-Saharan African spiritual traditions brought to Morocco by enslaved peoples centuries ago, features hypnotic rhythmic patterns played on the guembri (three-stringed bass lute) accompanied by metal castanets (qraqeb) and call-and-response singing. The festival typically runs over a long weekend and the entire city becomes a celebration.',
    insiderTip:
      'The main stage is free — arrive by 6 PM for a good spot, headliners start around 9-10 PM. The intimate "off" concerts at smaller venues (Dar Souiri, riads, rooftops) are often the festival\'s best-kept secret — check the program for these. Book accommodation 2-3 months in advance as the city sells out. Eat at the port\'s fish stalls for the freshest, cheapest seafood in Morocco (from 40 MAD). Bring earplugs for sleeping — the music goes late.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    icon: Globe,
    category: 'Festival & Spirituality',
    location: 'Fes',
    duration: '8-10 days',
    cost: 'From 150 MAD (individual concerts) / From 1,500 MAD (festival pass)',
    description:
      'One of the world\'s most prestigious cultural festivals, the Fes Festival of World Sacred Music brings together performers from every faith and musical tradition — Sufi qawwali, Gregorian chants, Hindu devotional music, Jewish liturgical songs, Buddhist chanting, and contemporary crossover artists. Founded in 1994, the festival takes place in extraordinary venues including the 14th-century Bab Makina palace courtyard and the serene Jnan Sbil gardens. Beyond the headline concerts, the festival hosts conferences, exhibitions, and free open-air performances (Sufi Nights) in the medina that are magical.',
    insiderTip:
      'The free Sufi Nights concerts in Place Boujloud are not to be missed — they capture the festival\'s spiritual essence with ecstatic Sufi performances under the stars. Book tickets for the Bab Makina concerts early for the best seats. Despite June heat, evening performances at outdoor venues are cooled by the night air. Stay in the medina for the full immersion — walking back to your riad through the ancient streets after a concert is part of the experience.',
  },
  {
    name: 'Essaouira Beach & Surf Season',
    icon: Waves,
    category: 'Beach & Water Sports',
    location: 'Essaouira, Sidi Kaouki, Moulay Bouzerktoun',
    duration: '2-5 days',
    cost: 'From 300 MAD/day (including surf lesson)',
    description:
      'June marks the start of prime season on Morocco\'s most characterful stretch of Atlantic coast. Essaouira\'s wide crescent beach is perfect for walking, kitesurfing, and horseback riding along the sand. The constant Alizee trade winds make it Africa\'s windsurfing and kitesurfing capital. Nearby Sidi Kaouki (25 km south) offers a quieter, more bohemian beach with good surf breaks. Moulay Bouzerktoun to the north hosts international windsurf competitions. The water is cool (19-21°C) but refreshing after the warm air.',
    insiderTip:
      'Essaouira wind intensifies in June — mornings are calmer for surfing, afternoons better for wind sports. Surf lessons at Sidi Kaouki are cheaper than in Essaouira (from 250 MAD for 2 hours). Horseback rides on the beach at sunset are magical (from 200 MAD per hour through Ocean Vagabond). For escaping the wind, eat lunch inside the medina walls. The port fish grills serve the best value seafood in Morocco — pick your fish and they grill it (from 40 MAD).',
  },
  {
    name: 'Northern Morocco Road Trip',
    icon: Compass,
    category: 'Road Trip & Culture',
    location: 'Tangier, Chefchaouen, Tetouan, Al Hoceima',
    duration: '4-7 days',
    cost: 'From 400 MAD/day (car rental + fuel + accommodation)',
    description:
      'While southern Morocco bakes, the north remains pleasantly warm in June. A road trip through northern Morocco takes you from cosmopolitan Tangier with its new marina and medina to the blue-washed mountain town of Chefchaouen nestled in the Rif, the Andalusian-influenced white city of Tetouan, and the Mediterranean beaches around Al Hoceima. This is Spain-adjacent Morocco — the food, architecture, and atmosphere have a distinct Mediterranean influence. The Rif Mountains are green and lush, and the Mediterranean coast begins its beach season.',
    insiderTip:
      'The drive from Chefchaouen to Al Hoceima through the Rif Mountains is one of Morocco\'s most spectacular mountain roads. Chefchaouen is best photographed in the morning light. Tetouan\'s medina (UNESCO-listed) is less touristy than Fes or Marrakech and rewards exploration. The beaches around Al Hoceima — Quemado, Cala Bonita — are stunning and uncrowded in June. Carry cash in rural Rif areas where ATMs are scarce.',
  },
  {
    name: 'Agadir & Souss-Massa Coast',
    icon: Sun,
    category: 'Beach & Relaxation',
    location: 'Agadir, Taghazout, Souss-Massa National Park',
    duration: '3-5 days',
    cost: 'From 350 MAD/day',
    description:
      'Agadir is Morocco\'s sunniest city with over 300 days of sunshine, and June is pure beach season. The wide, golden beach stretches for 10 km along a gently curving bay. Water temperature hits 20-21°C — warm enough for comfortable swimming. North of Agadir, the surf town of Taghazout has evolved into a hip destination with excellent cafes, yoga retreats, and consistent waves. South of Agadir, the Souss-Massa National Park protects wetlands, sand dunes, and the rare Northern Bald Ibis.',
    insiderTip:
      'Taghazout is the clear winner over Agadir for atmosphere — it has the surf culture, the cliff-top cafes, and the sunset views. Stay in Taghazout and visit Agadir for a day. Paradise Valley (inland gorge with natural swimming pools) is a perfect June day trip from either town (from 150 MAD by taxi). For the best surf, dawn patrol catches glassy conditions before the afternoon wind picks up.',
  },
  {
    name: 'Atlas Mountain Retreats',
    icon: Mountain,
    category: 'Nature & Wellness',
    location: 'Imlil, Ouirgane, Ourika Valley, Ifrane',
    duration: '2-4 days',
    cost: 'From 400 MAD/day (guesthouse with meals)',
    description:
      'As lowland temperatures soar, the Atlas Mountains become Morocco\'s natural air conditioning. Mountain villages like Imlil (1,740m), Ouirgane, and the Ourika Valley are 10-15 degrees cooler than Marrakech — a 90-minute drive away. June is ideal for day hikes through walnut groves, swimming in river pools and waterfalls, and staying in mountain lodges with panoramic terrace dining. Further north, the cedar forests around Ifrane and Azrou offer a completely different cool escape, with Barbary macaques in the trees.',
    insiderTip:
      'Kasbah du Toubkal in Imlil is Morocco\'s most spectacular mountain lodge (from 1,500 MAD/night) with Toubkal views. For budget travelers, village guesthouses in Imlil offer rooms with meals from 350 MAD. The Ourika Valley gets crowded on weekends with Marrakech day-trippers — visit midweek. Seven Waterfalls hike in Ourika is a 2-hour moderate walk with swimming pools at each cascade. Bring layers — mountain evenings drop to 12-15°C even in June.',
  },
] as const;

/* ===============================================================
   DATA: WHAT TO DO BY DESTINATION
   =============================================================== */

const destinationGuide = [
  {
    destination: 'Essaouira',
    icon: Wind,
    rating: 'Excellent',
    whyVisit: 'Breezy, sunny, uncrowded before July (22-25°C). Gnaoua Festival potential dates. Wind sports capital.',
    mustDo: 'Gnaoua music, medina ramparts, port fish grills, Sidi Kaouki surf, sunset beach walks',
  },
  {
    destination: 'Agadir & Taghazout',
    icon: Sun,
    rating: 'Excellent',
    whyVisit: 'Morocco\'s beach capital at its finest (24-27°C). Warm ocean, surf culture, Paradise Valley.',
    mustDo: 'Taghazout surf, Paradise Valley swimming, Agadir beach, Souss-Massa birdwatching',
  },
  {
    destination: 'Fes',
    icon: Landmark,
    rating: 'Good (with heat strategy)',
    whyVisit: 'Sacred Music Festival makes June special. Hot (28-35°C) but manageable with planning.',
    mustDo: 'Sacred Music Festival, medina at dawn, tanneries, Bou Inania, Volubilis day trip',
  },
  {
    destination: 'Chefchaouen',
    icon: Camera,
    rating: 'Very Good',
    whyVisit: 'Warm but comfortable in the Rif Mountains (22-30°C). Less crowded than autumn peak.',
    mustDo: 'Blue medina at dawn, Akchour waterfalls, Spanish Mosque sunset, Rif hiking',
  },
  {
    destination: 'Marrakech',
    icon: Thermometer,
    rating: 'Fair (hot)',
    whyVisit: 'Getting hot (30-38°C). Best as 2-day stopover with morning/evening sightseeing and midday pool time.',
    mustDo: 'Souks at 8 AM, museums midday, hammam, Jemaa el-Fna at sunset, rooftop dining',
  },
  {
    destination: 'Sahara Desert',
    icon: AlertTriangle,
    rating: 'Not Recommended',
    whyVisit: 'Extreme heat (35-42°C daytime). Desert camps are uncomfortable. Wait for autumn or spring.',
    mustDo: 'If you must: dawn-only camel trek, air-conditioned desert hotel, stargazing after midnight',
  },
] as const;

/* ===============================================================
   DATA: PRACTICAL TIPS
   =============================================================== */

const practicalTips = [
  {
    icon: Shirt,
    title: 'What to Pack',
    tips: [
      'Light, breathable cotton and linen clothing',
      'Wide-brimmed sun hat and quality sunglasses',
      'SPF 50+ sunscreen — reapply frequently',
      'Light windbreaker for breezy Essaouira evenings',
      'Comfortable sandals and one pair of walking shoes',
      'Refillable water bottle — hydration is critical',
      'Modest clothing for medina and mosque visits',
      'Warm layer for mountain evenings (if trekking)',
    ],
  },
  {
    icon: DollarSign,
    title: 'Budget Expectations',
    tips: [
      'Accommodation: from 200 MAD (hostel) to 2,500+ MAD (luxury riad)',
      'Meals: from 30 MAD (street food) to 400 MAD (fine dining)',
      'Transport: from 30 MAD (bus) to 600 MAD/day (private driver)',
      'Festival tickets: from free (outdoor stages) to 1,500 MAD (passes)',
      'Surf lessons: from 250 MAD per session',
      'Coastal accommodation prices rise in June',
      'Interior city riads may offer heat-season discounts',
      'Seasonal pricing can change — confirm before booking',
    ],
  },
  {
    icon: Plane,
    title: 'Getting Around',
    tips: [
      'Fly into Essaouira (direct from some EU cities) or Agadir for coast focus',
      'ONCF trains connect major cities with air conditioning',
      'CTM and Supratours buses are comfortable for longer routes',
      'Car rental ideal for the northern road trip (from 300 MAD/day)',
      'Domestic flights: Casablanca to most cities (from 500 MAD)',
      'Book Gnaoua Festival period transport well in advance',
      'Grand taxis for intercity travel — confirm price before departure',
      'Al Boraq high-speed train: Tangier to Casablanca in 2 hours',
    ],
  },
  {
    icon: Users,
    title: 'Beating the Heat',
    tips: [
      'Sightsee early morning (8-11 AM) and late afternoon (5-8 PM)',
      'Use midday for museums, hammams, or pool time',
      'Drink at least 2-3 liters of water daily',
      'Eat light — salads, fruit, fresh juices from street vendors',
      'Choose riads with plunge pools for midday refreshment',
      'Carry a small hand fan and a spray bottle',
      'Wear light colors that reflect heat',
      'Focus itinerary on coast and mountains in June',
    ],
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARIES
   =============================================================== */

const sampleItineraries = [
  {
    title: '7-Day Coast & Culture June Itinerary',
    description: 'Festival music, Atlantic coast, and strategic city visits',
    days: [
      { day: 1, location: 'Essaouira', activity: 'Arrive, medina walk, ramparts, port fish dinner' },
      { day: 2, location: 'Essaouira', activity: 'Gnaoua Festival or surf day, beach sunset' },
      { day: 3, location: 'Essaouira', activity: 'Festival day 2 or day trip to Sidi Kaouki' },
      { day: 4, location: 'Marrakech', activity: 'Drive to Marrakech, evening souks, Jemaa el-Fna' },
      { day: 5, location: 'Atlas Mountains', activity: 'Day trip: Ourika Valley waterfalls, mountain lunch' },
      { day: 6, location: 'Marrakech', activity: 'Morning museums, afternoon hammam, rooftop dinner' },
      { day: 7, location: 'Departure', activity: 'Final morning shopping, departure' },
    ],
  },
  {
    title: '5-Day Northern Escape',
    description: 'Cooler north Morocco with mountains, coast, and culture',
    days: [
      { day: 1, location: 'Tangier', activity: 'Arrive, Kasbah medina, Cafe Hafa sunset' },
      { day: 2, location: 'Chefchaouen', activity: 'Drive to Chefchaouen, blue medina, Spanish Mosque sunset' },
      { day: 3, location: 'Chefchaouen', activity: 'Akchour waterfalls hike, afternoon medina wander' },
      { day: 4, location: 'Fes', activity: 'Drive to Fes, evening medina walk, rooftop dinner' },
      { day: 5, location: 'Fes', activity: 'Morning medina tour, tanneries, afternoon departure' },
    ],
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What is the weather like in Morocco in June?',
    answer: 'June brings summer heat to Morocco, but conditions vary dramatically by region. The Atlantic coast (Essaouira, Agadir) remains comfortable at 22-27°C with cooling ocean breezes. Interior cities (Marrakech, Fes) heat up to 28-38°C, requiring a strategic sightseeing schedule. The Sahara becomes very hot at 25-42°C and is not recommended. The Atlas Mountains stay pleasantly cool at 15-28°C. Northern Morocco (Tangier, Chefchaouen) is warm but manageable at 22-30°C. Rain is virtually nonexistent across the country.',
  },
  {
    question: 'Is the Gnaoua Festival worth planning a trip around?',
    answer: 'Absolutely. The Gnaoua World Music Festival is one of Africa\'s premier cultural events and a genuinely transformative experience. The fusion of ancient Gnaoua trance music with international jazz, blues, and world music artists creates something unique. The setting in Essaouira\'s atmospheric medina and beachfront adds to the magic. Main stage concerts are free. The city buzzes with energy for the entire festival period. If your dates allow, it is worth building your Morocco itinerary around this event. Book accommodation 2-3 months in advance.',
  },
  {
    question: 'Can I visit Marrakech in June?',
    answer: 'Yes, but plan for the heat. June daytime temperatures in Marrakech reach 32-38°C. The key is to adopt a local rhythm: explore souks and monuments in the morning (8-11 AM), retreat to your riad pool or an air-conditioned museum during midday (11 AM-5 PM), and return to the streets for Jemaa el-Fna\'s sunset spectacle and evening dining. Many visitors find 2 days sufficient in June. Book a riad with a plunge pool and air conditioning. Drink water constantly.',
  },
  {
    question: 'Should I avoid the Sahara Desert in June?',
    answer: 'Generally yes. June Sahara temperatures regularly exceed 40°C during the day, sand temperatures can burn through shoes, and overnight desert camps are uncomfortably warm. If a desert experience is essential to your trip, consider a luxury air-conditioned desert hotel near Merzouga rather than a camp, and limit outdoor activities to dawn (5-7 AM) and after sunset. For the full desert camp and camel trek experience, visit in March-April or October-November instead.',
  },
  {
    question: 'What is the best beach destination in June?',
    answer: 'Essaouira and Agadir are both excellent but serve different travelers. Essaouira is for culture, atmosphere, wind sports, and the Gnaoua Festival — it is characterful, breezy, and bohemian. Agadir is for pure beach relaxation with a long sandy beach, warmer water, and resort-style amenities. Taghazout (between the two) is ideal for surfers and yoga enthusiasts. For a quieter beach, try Sidi Kaouki south of Essaouira or Mirleft further south. The Mediterranean coast around Al Hoceima also begins its season in June.',
  },
  {
    question: 'How should I dress in Morocco in June?',
    answer: 'Light, breathable fabrics are essential. Cotton and linen in light colors reflect heat best. Loose-fitting clothing is more comfortable than tight items. A wide-brimmed hat and quality sunglasses are non-negotiable. For medina visits, cover shoulders and knees as a sign of respect. Women may want a light scarf for entering mosques or conservative areas. In Essaouira, bring a jacket for the wind. In mountains, pack a warm layer for cool evenings. Comfortable sandals work for most situations but bring walking shoes for medina cobblestones.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-may',
    title: 'Morocco in May',
    description: 'Rose Festival, peak trekking, and Morocco at its finest before summer.',
    icon: Sparkles,
  },
  {
    href: '/morocco-in-july',
    title: 'Morocco in July',
    description: 'Peak summer: coast strategies, mountain escapes, and managing the heat.',
    icon: Sun,
  },
  {
    href: '/essaouira',
    title: 'Essaouira Guide',
    description: 'Complete guide to the windy city — medina, beaches, and Gnaoua culture.',
    icon: Wind,
  },
  {
    href: '/fes',
    title: 'Fes Guide',
    description: 'Navigate the world\'s largest car-free urban area.',
    icon: Landmark,
  },
  {
    href: '/morocco-budget-travel',
    title: 'Budget Travel Tips',
    description: 'How to explore Morocco affordably in summer and beyond.',
    icon: DollarSign,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInJunePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Essaouira coast in June with clear blue skies, ocean waves, and the historic medina walls"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Monthly Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Visiting Morocco in June
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Music festivals, Atlantic coast perfection, and smart strategies for the summer heat.
            June rewards travelers who know where to go.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <Thermometer className="w-4 h-4" /> 22-38°C varies
            </span>
            <span className="flex items-center gap-1">
              <Music className="w-4 h-4" /> Gnaoua Festival
            </span>
            <span className="flex items-center gap-1">
              <Waves className="w-4 h-4" /> Coast season
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="w-4 h-4" /> Mountain escape
            </span>
          </div>
        </div>
      </section>

      {/* -- Breadcrumbs -- */}
      <div className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
        <div className="container-morocco py-3">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--text-primary)] font-medium">Morocco in June</span>
          </nav>
        </div>
      </div>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              June: Where Coast Meets Culture
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              June in Morocco is a tale of two climates. The Atlantic coast enters its golden season with
              perfect beach weather, ocean breezes, and world-class music festivals. Meanwhile, inland
              temperatures climb toward summer peaks, pushing savvy travelers toward the coast and mountains.
              The Gnaoua World Music Festival electrifies Essaouira, the Fes Festival of World Sacred Music
              offers profound cultural experiences, and the Atlas Mountains provide cool refuge from lowland
              heat. June rewards those who plan strategically — focus on the coast, visit inland cities
              early and late in the day, and save the desert for another season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-moroccan p-6 text-center">
              <Music className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Festival Season
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Gnaoua World Music Festival in Essaouira and Fes Festival of World Sacred Music make June culturally rich.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Coast at Its Best
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Atlantic coast is June&apos;s star with warm sunshine, ocean breezes, and uncrowded beaches before July.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mountain Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Atlas Mountains offer cool escape from lowland heat with trekking, waterfalls, and mountain village stays.
              </p>
            </div>
          </div>

          {/* Heat Warning */}
          <div className="card-moroccan p-6 border-l-4 border-amber-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  June Heat Advisory
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Interior cities (Marrakech 34°C+, Fes 31°C+) and the Sahara (40°C+) experience significant
                  heat in June. Plan sightseeing for early morning and late evening. Stay hydrated (2-3 liters
                  daily), wear sun protection, and choose accommodations with air conditioning or pools.
                  The coast and mountains are the smart choices for extended stays in June.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Weather by Region -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            June Weather Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Conditions vary dramatically from the breezy coast to the scorching interior. Choose your region wisely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherByRegion.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{region.cities}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{region.tempRange}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CloudSun className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-xs text-[var(--text-muted)]">{region.rainfall}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{region.description}</p>
                  <div className="flex items-center gap-1">
                    <Info className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-xs font-medium text-[var(--color-accent)]">{region.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Top Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top Experiences in Morocco in June
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Festival music, Atlantic surf, mountain retreats, and northern road trips — June has plenty to offer the strategic traveler.
          </p>
          <div className="space-y-8">
            {topExperiences.map((experience, idx) => {
              const ExpIcon = experience.icon;
              return (
                <div key={experience.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-white">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {experience.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <ExpIcon className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-xs text-[var(--text-muted)]">{experience.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-4 mb-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {experience.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {experience.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ticket className="w-3 h-3" /> {experience.cost}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{experience.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Insider Tip</p>
                            <p className="text-xs text-[var(--text-secondary)]">{experience.insiderTip}</p>
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

      {/* -- Destination Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Go in Morocco in June
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The coast and mountains are June&apos;s clear winners. Interior cities work with planning. Avoid the desert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationGuide.map((dest) => {
              const DestIcon = dest.icon;
              const ratingColor = dest.rating === 'Not Recommended' ? 'bg-red-50 text-red-700' :
                dest.rating.includes('Fair') ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700';
              return (
                <div key={dest.destination} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {dest.destination}
                    </h3>
                  </div>
                  <div className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded mb-3 ${ratingColor}`}>
                    {dest.rating === 'Not Recommended' ? (
                      <AlertTriangle className="w-3 h-3" />
                    ) : (
                      <CheckCircle className="w-3 h-3" />
                    )}
                    {dest.rating}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{dest.whyVisit}</p>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Must-Do:</p>
                    <p className="text-xs text-[var(--text-muted)]">{dest.mustDo}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample Itineraries -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            June Itinerary Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two routes designed to maximize comfort and experiences in June conditions.
          </p>
          <div className="space-y-8">
            {sampleItineraries.map((itinerary) => (
              <div key={itinerary.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {itinerary.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{itinerary.description}</p>
                <div className="space-y-3">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-white">{day.day}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{day.location}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{day.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Practical Tips for June Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential advice for a comfortable and rewarding June trip to Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalTips.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SectionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Morocco Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">{guide.description}</p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Morocco in June?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the hypnotic rhythms of the Gnaoua Festival to the breezy Atlantic coast and cool mountain
            retreats, June offers unforgettable experiences for travelers who plan wisely. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Wind className="w-5 h-5" />
              Essaouira Guide
            </Link>
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
