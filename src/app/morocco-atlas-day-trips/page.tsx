import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Clock,
  Info,
  ArrowRight,
  Sun,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Footprints,
  Compass,
  Camera,
  Backpack,
  CalendarDays,
  CircleDot,
  Route,
  Snowflake,
  TreeDeciduous,
  MessageCircleQuestion,
  TrendingUp,
  Binoculars,
  Droplets,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-atlas-day-trips`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Atlas Mountains Day Trips from Marrakech 2026 | Imlil, Ourika Valley & Toubkal',
  description:
    'Complete guide to Atlas Mountains day trips from Marrakech. Imlil valley walks, Ourika waterfalls, Oukaimeden skiing, Toubkal base camp treks, Berber village visits, mule rides, and Asni market. Travel times, costs from 200 MAD, difficulty levels, and what to pack.',
  keywords: [
    'Atlas Mountains day trip Marrakech',
    'Imlil day trip',
    'Ourika Valley excursion',
    'Oukaimeden day trip',
    'Toubkal base camp trek',
    'Berber village visit Morocco',
    'Atlas Mountains waterfalls',
    'Marrakech mountain day trips',
    'Asni market Morocco',
    'Atlas Mountains hiking guide',
    'mule trek Atlas Mountains',
    'Setti Fatma waterfalls',
    'Atlas Mountains cost 2026',
    'guided Atlas Mountains tour',
    'Marrakech to Imlil transport',
    'Atlas day trip packing list',
    'Ourika Valley waterfalls hike',
    'Morocco trekking guide',
  ],
  openGraph: {
    title: 'Atlas Mountains Day Trips from Marrakech 2026 | Imlil, Ourika Valley & Toubkal',
    description:
      'Plan your perfect Atlas Mountains day trip from Marrakech. Detailed itineraries for Imlil, Ourika Valley, Oukaimeden, Toubkal base camp, and Berber villages with travel times, costs from 200 MAD, difficulty ratings, and packing advice.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the High Atlas Mountains with terraced Berber villages and walnut groves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Mountains Day Trips from Marrakech 2026 | Complete Guide',
    description:
      'Imlil, Ourika Valley, Oukaimeden, Toubkal base camp, and Berber village day trips from Marrakech. Costs, difficulty, transport, and what to pack.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How far are the Atlas Mountains from Marrakech?',
    a: 'The nearest foothills start about 30 km south of Marrakech. Imlil is 64 km (roughly 90 minutes by car). Ourika Valley is 35 km (about 45 minutes). Oukaimeden ski station is 75 km (around 2 hours). The road from Marrakech climbs from 450 m elevation to over 1,500 m within the first hour.',
  },
  {
    q: 'Can I do an Atlas Mountains day trip without a guide?',
    a: 'Yes, independent trips are possible for Ourika Valley and Oukaimeden since the roads are paved and straightforward. For Imlil valley walks and anything involving off-trail trekking, hiring a local guide is strongly recommended. Licensed mountain guides charge from 400 MAD per day and know the terrain, weather patterns, and Berber communities personally.',
  },
  {
    q: 'What is the best time of year for Atlas Mountains day trips?',
    a: 'Spring (March to May) and autumn (September to November) offer the best conditions: mild temperatures, clear skies, and green landscapes. Summer (June to August) is hot at lower elevations but pleasant above 2,000 m. Winter (December to February) brings snow above 2,500 m, making Oukaimeden a ski destination but closing some high passes.',
  },
  {
    q: 'How much does a guided Atlas Mountains day trip cost?',
    a: 'Budget group tours start from 200 MAD per person and typically cover Ourika Valley with lunch. Private driver and guide packages for Imlil range from 800 MAD to 1,500 MAD for 2-4 people. A Toubkal base camp guided trek costs from 1,200 MAD per person including lunch, guide, and mule. Seasonal pricing can change during peak months.',
  },
  {
    q: 'Do I need special equipment for Atlas Mountains day trips?',
    a: 'For valley walks and village visits, sturdy walking shoes, sunscreen, a hat, and layers are enough. For Toubkal base camp or longer hikes, bring proper hiking boots with ankle support, a daypack, at least 2 liters of water, snacks, and a rain jacket. Trekking poles help on steep descents. You do not need technical climbing gear for any standard day trip.',
  },
  {
    q: 'Is the Ourika Valley waterfall hike difficult?',
    a: 'The first waterfall at Setti Fatma is a moderate 30-minute scramble over rocks with some steep sections. A local guide is essential here because the path is unmarked and slippery when wet. The higher waterfalls (there are seven total) get progressively harder and require more scrambling. The first two waterfalls are manageable for most reasonably fit adults.',
  },
  {
    q: 'Can children do Atlas Mountains day trips?',
    a: 'Ourika Valley and Imlil village are suitable for families with children aged 6 and up. The valley floor walks are gentle, and mule rides are available for tired legs. The Setti Fatma waterfall scramble is not recommended for children under 10. Oukaimeden in winter is great for kids who want to try sledging or beginner skiing.',
  },
  {
    q: 'What should I eat during an Atlas Mountains day trip?',
    a: 'Berber tagine is the standard mountain lunch, typically chicken or lamb with vegetables slow-cooked over charcoal. Expect to pay from 60 MAD at a basic roadside restaurant and from 120 MAD at a riverside terrace in Ourika or Imlil. Mint tea is served everywhere. Bring your own snacks and water for hikes since there are no shops on the trails.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Atlas Mountains Day Trips from Marrakech 2026',
  description:
    'Complete guide to Atlas Mountains day trips from Marrakech covering Imlil, Ourika Valley, Oukaimeden, Toubkal base camp, Berber villages, waterfalls, transport, costs, and packing advice.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Atlas Mountains Day Trips', item: PAGE_URL },
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
   DATA: DAY TRIP ITINERARIES
   ================================================================ */

const dayTrips = [
  {
    id: 'imlil-valley',
    title: 'Imlil Valley & Armed Village Walk',
    icon: Mountain,
    distance: '64 km from Marrakech',
    travelTime: '90 minutes each way',
    difficulty: 'Easy to Moderate',
    bestSeason: 'Year-round (snow possible Dec-Feb)',
    costGuided: 'From 800 MAD (private, 2-4 people)',
    costIndependent: 'From 200 MAD (grand taxi + lunch)',
    elevation: '1,740 m (Imlil) to 2,100 m (Armed)',
    highlights: [
      'Walk through walnut and cherry orchards to the village of Armed',
      'Visit a traditional Berber house and share mint tea with the family',
      'See Toubkal peak (4,167 m) dominating the skyline on clear days',
      'Cross an irrigation channel system unchanged for centuries',
      'Buy handmade Berber crafts directly from village women',
    ],
    description:
      'Imlil is the most popular Atlas day trip for good reason. This compact valley sits at the foot of Jebel Toubkal, North Africa\'s highest peak, and the walk from Imlil to Armed village takes about 90 minutes on a well-worn dirt path. The route passes through terraced fields, walnut groves, and across a river on a simple footbridge. Armed is a stone-and-mud village where families have lived for generations, and several homes welcome visitors for tea and a look at traditional Berber architecture. The round trip back to Imlil takes 3-4 hours at a comfortable pace with stops.',
    gettingThere:
      'Grand taxis leave from Bab er-Rob or Bab Ghmat in Marrakech for from 25 MAD per person (shared) or from 250 MAD for the whole taxi. The road is paved all the way to Imlil. Alternatively, book a private driver through your accommodation.',
    whatToBring: ['Walking shoes with grip', 'Sun hat and sunscreen', '1.5 L water minimum', 'Cash in small bills for tea and tips', 'Light layers (10-15 degrees cooler than Marrakech)'],
    guidedVsIndependent:
      'The Imlil-Armed walk is straightforward enough to do independently. A local guide adds cultural depth, handles navigation to less-visited hamlets, and facilitates home visits. Licensed guides are available at the Imlil taxi stand from 400 MAD per day.',
  },
  {
    id: 'ourika-valley',
    title: 'Ourika Valley & Setti Fatma Waterfalls',
    icon: Droplets,
    distance: '35 km from Marrakech',
    travelTime: '45-60 minutes each way',
    difficulty: 'Easy (valley) / Moderate (waterfalls)',
    bestSeason: 'March to November',
    costGuided: 'From 600 MAD (private, 2-4 people)',
    costIndependent: 'From 150 MAD (bus + lunch)',
    elevation: '1,000 m (valley floor) to 1,500 m (upper falls)',
    highlights: [
      'Hike to the first two of seven waterfalls at Setti Fatma',
      'Eat tagine at a riverside restaurant with your feet in the stream',
      'Browse the Monday Berber market at Tnine Ourika',
      'Visit an argan oil cooperative run by local women',
      'Cross the river on stepping stones used by villagers daily',
    ],
    description:
      'Ourika Valley is the closest and most accessible Atlas escape from Marrakech. The road follows the Ourika River through a corridor of green fields, Berber villages, and roadside fruit stalls. The valley ends at Setti Fatma, where a chain of seven waterfalls drops through a narrow gorge. Most visitors hike to the first waterfall (30 minutes, moderate scramble) and the second (another 20 minutes, steeper). The riverside restaurants at the base serve excellent tagines while you dry off from the spray. On Mondays, the Berber souk at Tnine Ourika is worth a stop for pottery, spices, and livestock trading.',
    gettingThere:
      'Public buses (line 33) leave from Bab er-Rob for from 15 MAD. Grand taxis are from 20 MAD shared. The road is fully paved. During heavy rain (especially November and March), check conditions since flash flooding occasionally closes the final stretch.',
    whatToBring: ['Water shoes or sandals with grip for river crossings', 'Swimsuit if you want to wade in pools below the falls', 'Waterproof phone pouch', '2 L water', 'Cash for guide tips and restaurant lunch'],
    guidedVsIndependent:
      'The valley drive is easy independently. At Setti Fatma, hiring a local waterfall guide is practically mandatory since the path is unmarked and locals know which rocks are stable. Waterfall guides charge from 100 MAD per person.',
  },
  {
    id: 'oukaimeden',
    title: 'Oukaimeden: Ski Station & Rock Carvings',
    icon: Snowflake,
    distance: '75 km from Marrakech',
    travelTime: '2 hours each way',
    difficulty: 'Easy (village & carvings) / Moderate (skiing)',
    bestSeason: 'December to March (ski) / June to September (hiking)',
    costGuided: 'From 900 MAD (private, 2-4 people)',
    costIndependent: 'From 300 MAD (taxi + ski pass + rental)',
    elevation: '2,600 m (village) to 3,258 m (summit)',
    highlights: [
      'Ski or snowboard at Africa\'s highest ski resort in winter',
      'See Bronze Age rock carvings (3,000+ years old) scattered around the plateau',
      'Hike to the summit of Jebel Oukaimeden for panoramic Atlas views',
      'Experience a Berber mountain community living above 2,500 m',
      'Watch paragliders launch from the ridgeline in summer',
    ],
    description:
      'Oukaimeden sits on a high plateau at 2,600 m and operates as Morocco\'s main ski station from December through March. The snow is not guaranteed every year, but when it falls, the runs are surprisingly decent for a North African resort. Outside of ski season, Oukaimeden transforms into a hiking destination with summer wildflowers and cool temperatures. The real hidden treasure here is a collection of Bronze Age rock engravings scattered across the plateau, depicting weapons, animals, and sun symbols. A local guide can show you dozens of carvings that most visitors walk right past.',
    gettingThere:
      'No regular public transport. Grand taxi from Marrakech costs from 400 MAD for the whole car. The road is paved but steep with switchbacks. In winter, chains may be required on the final 10 km. Private excursions are the most practical option.',
    whatToBring: ['Winter: warm jacket, gloves, snow boots', 'Summer: hiking boots, sunscreen, hat, windbreaker', 'Binoculars for rock carving details', '2 L water', 'Snacks (limited food options at the station)'],
    guidedVsIndependent:
      'A guide is valuable for finding rock carvings (from 200 MAD). Skiing is self-directed with rental equipment available at the base (from 200 MAD for skis, boots, and poles). Lift passes cost from 150 MAD per day. Seasonal pricing can change.',
  },
  {
    id: 'toubkal-basecamp',
    title: 'Toubkal Base Camp (Refuge) Trek',
    icon: TrendingUp,
    distance: '64 km to Imlil + 10 km trek',
    travelTime: '90 min drive + 4-5 hours hiking (round trip)',
    difficulty: 'Challenging',
    bestSeason: 'April to June, September to October',
    costGuided: 'From 1,200 MAD per person (guide + mule + lunch)',
    costIndependent: 'From 400 MAD (transport + refuge fee)',
    elevation: '1,740 m (Imlil) to 3,207 m (Refuge du Toubkal)',
    highlights: [
      'Trek to the base camp of North Africa\'s highest mountain',
      'Gain 1,467 m of elevation through dramatic high-mountain scenery',
      'Cross the Mizane Valley past seasonal waterfalls and scree slopes',
      'Eat lunch at the Toubkal Refuge with views of the summit pyramid',
      'See mountain wildlife including Barbary ground squirrels and lammergeier vultures',
    ],
    description:
      'This is the most demanding Atlas day trip but also the most rewarding. From Imlil, the trail climbs steadily through the Mizane Valley, passing the shrine of Sidi Chamharouch (a major pilgrimage site for Moroccans) before reaching the Toubkal Refuge at 3,207 m. The ascent takes 3-4 hours and the descent 2-3 hours. You do not summit Toubkal on a day trip; that requires an overnight at the refuge. But reaching the base camp is an achievement in itself, with views of the summit pyramid, surrounding 4,000 m peaks, and the valley floor far below. Fitness matters here. The altitude gain is significant and you will feel it above 2,800 m.',
    gettingThere:
      'Same as Imlil (grand taxi or private driver). The trek starts from the Imlil village center. Register your trek at the Bureau des Guides in Imlil.',
    whatToBring: ['Hiking boots with solid ankle support', 'Trekking poles (available for rent in Imlil from 50 MAD)', '3 L water minimum', 'High-energy snacks (nuts, dates, chocolate)', 'Rain jacket and warm fleece (summit refuge is cold even in summer)', 'Headlamp as backup'],
    guidedVsIndependent:
      'A licensed mountain guide is strongly recommended and technically required for treks above the Sidi Chamharouch shrine. Guides manage pace, monitor for altitude sickness, and arrange mule support for your pack. Book at the Bureau des Guides in Imlil or through your Marrakech accommodation.',
  },
  {
    id: 'asni-market',
    title: 'Asni Saturday Market & Moulay Brahim Gorge',
    icon: CalendarDays,
    distance: '47 km from Marrakech',
    travelTime: '60 minutes each way',
    difficulty: 'Easy',
    bestSeason: 'Year-round (Saturdays only for market)',
    costGuided: 'From 500 MAD (private, 2-4 people)',
    costIndependent: 'From 100 MAD (grand taxi + market spending)',
    elevation: '1,150 m (Asni)',
    highlights: [
      'Shop the weekly Berber market where mountain villagers trade livestock, produce, and tools',
      'Walk through the dramatic Moulay Brahim gorge carved by the river',
      'Visit the shrine of Moulay Brahim, a local saint popular with pilgrims',
      'Buy fresh walnuts, almonds, and mountain honey directly from farmers',
      'See traditional blacksmiths forging tools in open-air workshops',
    ],
    description:
      'Asni is a small town on the main road from Marrakech to Imlil, and every Saturday it hosts one of the most authentic Berber markets in the Atlas foothills. This is not a tourist souk but a working market where mountain families come down to buy and sell livestock (sheep, goats, donkeys), seasonal produce, spices, household goods, and second-hand clothing. The energy is raw and real. Combine it with a detour to the Moulay Brahim gorge, a narrow canyon with a river running through it and a hillside shrine visible from the road. The whole trip takes half a day and is ideal for travelers who want cultural immersion without strenuous hiking.',
    gettingThere:
      'Grand taxis from Bab er-Rob for from 15 MAD shared. The road is the main N8 highway, fully paved and fast. Asni is also the turnoff point for Imlil, so you can combine both in one day.',
    whatToBring: ['Comfortable walking shoes', 'Cash in small denominations (5, 10, 20 MAD notes)', 'Camera', 'Reusable bags for market purchases', 'Hat and sunscreen'],
    guidedVsIndependent:
      'This is the easiest Atlas trip to do independently. No guide needed. A Marrakech-based driver can combine Asni market with Imlil for a full-day circuit.',
  },
  {
    id: 'azzaden-valley',
    title: 'Azzaden Valley & Tizi Oussem Village',
    icon: Route,
    distance: '75 km from Marrakech',
    travelTime: '2 hours by car + 2.5 hours hiking',
    difficulty: 'Moderate',
    bestSeason: 'March to November',
    costGuided: 'From 900 MAD (private, 2-4 people with guide)',
    costIndependent: 'From 350 MAD (transport + guide)',
    elevation: '1,740 m (Imlil) to 1,850 m (Tizi Oussem) via 2,200 m pass',
    highlights: [
      'Cross the Tizi Mzik pass (2,200 m) with views over both Imlil and Azzaden valleys',
      'Descend into the rarely visited Azzaden Valley, far quieter than Imlil',
      'Eat lunch in Tizi Oussem, a remote village with gite accommodation',
      'Walk through juniper forests and past small waterfalls fed by snowmelt',
      'Experience a side of the Atlas that most day-trippers never see',
    ],
    description:
      'For travelers who want to go beyond the well-trodden Imlil circuit, the Azzaden Valley offers a more remote and less commercial Atlas experience. The route starts from Imlil, climbs over the Tizi Mzik pass at 2,200 m, and descends into the parallel Azzaden Valley to the village of Tizi Oussem. The pass crossing takes about 2 hours up and 1 hour down. The landscape shifts from terraced orchards to open grassland to juniper woodland. Tizi Oussem has a handful of gites (mountain lodges) that serve traditional Berber lunches. The return to Imlil can follow the same path or loop via a lower trail through the valley floor. Total walking time is 5-6 hours, making this a full-day commitment.',
    gettingThere:
      'Drive to Imlil (same as Imlil trip). The trek begins from the village. You need to arrange a return pickup from Imlil since the loop brings you back to the same starting point.',
    whatToBring: ['Proper hiking boots', 'Trekking poles for the pass descent', '2.5 L water', 'Packed lunch or snacks for the pass crossing', 'Warm layer for the pass (windy even in summer)', 'Camera for the panoramic views from Tizi Mzik'],
    guidedVsIndependent:
      'A guide is essential for this route. The trail over Tizi Mzik is not signed and splits multiple times. Licensed guides from Imlil know every fork. Expect to pay from 500 MAD for a guide for this trek.',
  },
  {
    id: 'agafay-atlas-foothills',
    title: 'Agafay Desert & Atlas Foothills Combo',
    icon: Sun,
    distance: '40 km from Marrakech',
    travelTime: '45 minutes each way',
    difficulty: 'Easy',
    bestSeason: 'Year-round',
    costGuided: 'From 700 MAD (private, 2-4 people)',
    costIndependent: 'From 250 MAD (taxi + camel ride)',
    elevation: '500-700 m',
    highlights: [
      'Ride a camel or quad bike across the lunar-like Agafay rocky desert',
      'See the Atlas mountain wall rising dramatically from the plains',
      'Visit a Berber family in the foothills for tea and bread baked in an earth oven',
      'Photograph the contrast between barren desert and snow-capped peaks',
      'Combine with a sunset dinner at a luxury desert camp',
    ],
    description:
      'Agafay is not a true sand desert but a rocky, barren plateau that stretches between Marrakech and the Atlas foothills. The landscape is striking: flat, grey-white earth with almost no vegetation, framed by the wall of the High Atlas on the southern horizon. Several luxury camps have set up here offering camel rides, quad biking, and meals in Bedouin-style tents. The area works well as a half-day trip or combined with a drive into the lower Atlas villages. It is the least physically demanding option on this list and suits travelers who want Atlas views without any hiking.',
    gettingThere:
      'Taxi or private driver from Marrakech. The road is paved for the first 30 km, then unpaved tracks to reach the camps and viewpoints. Most camps arrange their own transfers.',
    whatToBring: ['Sunglasses and sunscreen', 'Light scarf for wind and dust', 'Camera', 'Comfortable shoes (closed-toe for quad bikes)', 'Cash for tips and extras'],
    guidedVsIndependent:
      'The luxury camps handle everything if you book through them. Independent visits to the Agafay plateau are possible but less interesting without organized activities. Most travelers book a package.',
  },
];

/* ================================================================
   DATA: PACKING ESSENTIALS
   ================================================================ */

const packingList = [
  { item: 'Hiking boots or sturdy walking shoes', category: 'Footwear', note: 'Ankle support matters on rocky terrain' },
  { item: 'Sunscreen SPF 50+', category: 'Protection', note: 'UV is intense at altitude, reapply every 2 hours' },
  { item: 'Wide-brim hat or cap', category: 'Protection', note: 'Essential even on cloudy days' },
  { item: 'Layered clothing', category: 'Clothing', note: '10-15 degrees cooler than Marrakech, windy at passes' },
  { item: 'Rain jacket or windbreaker', category: 'Clothing', note: 'Mountain weather shifts fast, especially spring and autumn' },
  { item: 'Water (2-3 liters minimum)', category: 'Hydration', note: 'No shops on trails, tap water not safe to drink' },
  { item: 'Snacks and energy food', category: 'Nutrition', note: 'Dates, nuts, and chocolate are ideal trail fuel' },
  { item: 'Cash in small bills', category: 'Money', note: 'No ATMs in mountain villages, small notes for tips and tea' },
  { item: 'Basic first aid kit', category: 'Safety', note: 'Plasters, antiseptic, painkillers, anti-diarrheal' },
  { item: 'Trekking poles', category: 'Equipment', note: 'Reduce knee strain on descents, rentable in Imlil from 50 MAD' },
];

/* ================================================================
   DATA: TRANSPORT OPTIONS
   ================================================================ */

const transportOptions = [
  {
    method: 'Grand Taxi (Shared)',
    icon: Users,
    price: 'From 15-25 MAD per person',
    details: 'Leave from Bab er-Rob or Bab Ghmat. You wait until the taxi fills (6 passengers). Destinations include Asni, Ourika, and Imlil. Cheap but no schedule.',
  },
  {
    method: 'Grand Taxi (Private)',
    icon: Route,
    price: 'From 250-500 MAD whole car',
    details: 'Same grand taxis but you buy all 6 seats. Negotiate the price before departure. Faster since you leave immediately. Ask the driver to wait or arrange a pickup time.',
  },
  {
    method: 'Private Driver / Tour',
    icon: ShieldCheck,
    price: 'From 600-1,500 MAD per day',
    details: 'Book through your riad, hotel, or a Marrakech agency. Air-conditioned vehicle, set itinerary, driver waits at each stop. Most comfortable and flexible option.',
  },
  {
    method: 'Public Bus',
    icon: Clock,
    price: 'From 10-20 MAD',
    details: 'Bus 33 runs from Bab er-Rob to Ourika Valley. Slow but extremely cheap. No direct bus to Imlil or Oukaimeden. Buses are crowded on weekends and market days.',
  },
  {
    method: 'Rental Car',
    icon: Compass,
    price: 'From 300 MAD per day',
    details: 'Roads to Imlil and Ourika are paved and well-maintained. Parking in Imlil costs from 20 MAD. Mountain roads have tight switchbacks. Not recommended if you are uncomfortable with aggressive local driving habits.',
  },
];

/* ================================================================
   DATA: SEASONAL GUIDE
   ================================================================ */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: TreeDeciduous,
    conditions: 'Wildflowers blanket the valleys, snowmelt feeds the waterfalls, temperatures 15-22 degrees at mid-elevation. Some snow remains on passes above 3,000 m.',
    bestFor: 'Waterfall hikes, valley walks, photography, wildflower season',
    avoid: 'March can bring unpredictable rain; check road conditions for Ourika Valley',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    conditions: 'Hot below 1,500 m (30-35 degrees), pleasant above 2,000 m (18-25 degrees). Clear skies almost every day. Rivers low but flowing. Long daylight hours.',
    bestFor: 'High-altitude treks to Toubkal base camp, Oukaimeden hikes, Azzaden Valley',
    avoid: 'Start early (before 8 AM) to avoid midday heat on lower trails',
  },
  {
    season: 'Autumn (September-November)',
    icon: TreeDeciduous,
    conditions: 'Dry, stable weather. Walnut harvest turns Imlil valley golden in October. Temperatures 12-20 degrees at mid-elevation. Excellent visibility for mountain views.',
    bestFor: 'Imlil and Armed walks, Toubkal base camp, photography, walnut season',
    avoid: 'Late November brings first cold snaps and occasional early snow',
  },
  {
    season: 'Winter (December-February)',
    icon: Snowflake,
    conditions: 'Snow above 2,500 m. Oukaimeden operates as a ski station. Valley floors remain accessible but cold (5-10 degrees). Short days. Mountain passes may close.',
    bestFor: 'Skiing at Oukaimeden, low-elevation valley walks, Asni market',
    avoid: 'Toubkal base camp and high passes are only for experienced winter trekkers with proper gear',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoAtlasDayTripsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      {/* ── JSON-LD ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end">
        <img
          src="/images/hero-atlas-mountains.webp"
          alt="High Atlas Mountains panorama with terraced Berber villages and walnut groves below snow-capped peaks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 pb-10 text-white">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-white/80 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Atlas Mountains Day Trips</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Atlas Mountains Day Trips from Marrakech
          </h1>
          <p className="font-[family-name:var(--font-heading)] mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
            Escape the medina heat in under an hour. Berber villages, mountain waterfalls, mule treks, and Africa&apos;s highest ski resort &mdash; all reachable from Marrakech and back in a single day.
          </p>
        </div>
      </section>

      {/* ── Intro Section ───────────────────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-6">
            Why the Atlas Mountains Make the Perfect Day Trip
          </h2>
          <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)] text-[17px] leading-relaxed">
            <p>
              The High Atlas rises abruptly from the Haouz Plain south of Marrakech, climbing from 450 m to over 4,000 m in a distance shorter than most morning commutes. This wall of rock, snow, and green valleys is the reason Marrakech exists &mdash; the city was founded as a trading post at the foot of the only practical pass through the mountains.
            </p>
            <p>
              For travelers, the proximity means you can eat breakfast in a Marrakech riad, spend the day hiking to a waterfall or sharing tea in a Berber home at 2,000 m, and be back for dinner. No overnight bag needed, no long bus rides, no complex logistics. A grand taxi and a pair of walking shoes are enough for most of these trips.
            </p>
            <p>
              This guide covers seven specific day trip options, from the easiest (Agafay foothills, no hiking required) to the most demanding (Toubkal base camp at 3,207 m). Each includes exact distances, travel times, costs, difficulty ratings, and honest advice on whether you need a guide or can go independently.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick Overview Grid ─────────────────────────────────── */}
      <section className="container-morocco pb-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
          At a Glance: 7 Atlas Day Trips Compared
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-[family-name:var(--font-heading)]">
            <thead>
              <tr className="border-b-2 border-[#A0522D]/30">
                <th className="py-3 px-4 text-[#A0522D] font-semibold">Trip</th>
                <th className="py-3 px-4 text-[#A0522D] font-semibold">Travel Time</th>
                <th className="py-3 px-4 text-[#A0522D] font-semibold">Difficulty</th>
                <th className="py-3 px-4 text-[#A0522D] font-semibold">Cost (Independent)</th>
              </tr>
            </thead>
            <tbody>
              {dayTrips.map((trip) => (
                <tr key={trip.id} className="border-b border-gray-200 hover:bg-[#A0522D]/5 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-900">
                    <a href={`#${trip.id}`} className="text-[#A0522D] hover:underline flex items-center gap-2">
                      <trip.icon className="w-4 h-4 flex-shrink-0" />
                      {trip.title.split(':')[0].split('&')[0].trim()}
                    </a>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{trip.travelTime}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded text-sm font-medium ${
                      trip.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      trip.difficulty === 'Challenging' ? 'bg-red-100 text-red-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {trip.difficulty}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{trip.costIndependent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Day Trip Detailed Cards ─────────────────────────────── */}
      <section className="container-morocco pb-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-10 text-center">
          Detailed Day Trip Itineraries
        </h2>
        <div className="space-y-12">
          {dayTrips.map((trip, idx) => (
            <article
              key={trip.id}
              id={trip.id}
              className="card-moroccan p-0 overflow-hidden scroll-mt-24"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#A0522D] to-[#8B4513] p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <trip.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white/70 font-[family-name:var(--font-heading)] text-sm">Trip {idx + 1} of {dayTrips.length}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold">
                  {trip.title}
                </h3>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#FAF8F5] border-b border-gray-200">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Distance</p>
                    <p className="text-sm font-medium text-gray-900 font-[family-name:var(--font-heading)]">{trip.distance}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Travel Time</p>
                    <p className="text-sm font-medium text-gray-900 font-[family-name:var(--font-heading)]">{trip.travelTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Elevation</p>
                    <p className="text-sm font-medium text-gray-900 font-[family-name:var(--font-heading)]">{trip.elevation}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">Guided Price</p>
                    <p className="text-sm font-medium text-gray-900 font-[family-name:var(--font-heading)]">{trip.costGuided}</p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#C4960C]" />
                    Overview
                  </h4>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">{trip.description}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#C4960C]" />
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {trip.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 font-[family-name:var(--font-heading)]">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Getting There */}
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#C4960C]" />
                    Getting There
                  </h4>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">{trip.gettingThere}</p>
                </div>

                {/* What to Bring */}
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Backpack className="w-4 h-4 text-[#C4960C]" />
                    What to Bring
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.whatToBring.map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 bg-[#A0522D]/10 text-[#A0522D] px-3 py-1.5 rounded-full text-sm font-[family-name:var(--font-heading)]">
                        <CircleDot className="w-3 h-3" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guided vs Independent */}
                <div className="bg-[#C4960C]/10 border border-[#C4960C]/20 rounded-lg p-4">
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#C4960C]" />
                    Guided vs. Independent
                  </h4>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">{trip.guidedVsIndependent}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Transport from Marrakech ────────────────────────────── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
            Getting to the Atlas Mountains from Marrakech
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportOptions.map((t) => (
              <div key={t.method} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#A0522D]/10 flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900">{t.method}</h3>
                </div>
                <p className="text-[#C4960C] font-semibold font-[family-name:var(--font-heading)] mb-2">{t.price}</p>
                <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">{t.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ──────────────────────────────────────── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
          When to Go: Seasonal Conditions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {seasonalGuide.map((s) => (
            <div key={s.season} className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#C4960C]/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[#C4960C]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{s.season}</h3>
              </div>
              <p className="text-gray-700 font-[family-name:var(--font-heading)] text-sm leading-relaxed mb-3">{s.conditions}</p>
              <div className="space-y-2">
                <p className="text-sm font-[family-name:var(--font-heading)]">
                  <span className="text-green-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Best for:
                  </span>
                  <span className="text-gray-600 ml-5 block">{s.bestFor}</span>
                </p>
                <p className="text-sm font-[family-name:var(--font-heading)]">
                  <span className="text-amber-700 font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Watch out:
                  </span>
                  <span className="text-gray-600 ml-5 block">{s.avoid}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packing Checklist ───────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#A0522D]/5 to-transparent py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
            Essential Packing Checklist
          </h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
            {packingList.map((p) => (
              <div key={p.item} className="card-moroccan p-4 flex items-start gap-3">
                <Backpack className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-medium text-gray-900 text-sm">{p.item}</p>
                  <p className="font-[family-name:var(--font-heading)] text-gray-500 text-xs mt-0.5">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ──────────────────────────────────────── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
          Practical Tips for Atlas Day Trips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="card-moroccan p-5">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-[#C4960C]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Money & Tipping</h3>
            </div>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Bring cash. No mountain village has an ATM or card reader. Tip guides from 50-100 MAD per person for a day trip. Waterfall guides at Setti Fatma expect from 50 MAD. Tea offered in a Berber home is free, but leaving from 20 MAD is appreciated.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-5 h-5 text-[#C4960C]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Photography Etiquette</h3>
            </div>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Ask before photographing Berber villagers, especially women. Most people are friendly about it, but consent matters. Landscape photography is unrestricted. Early morning light (before 9 AM) produces the best mountain shots with warm tones and defined shadows.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#C4960C]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Safety & Altitude</h3>
            </div>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Altitude sickness is unlikely below 3,000 m but possible on the Toubkal base camp trek (3,207 m). Symptoms include headache, nausea, and fatigue. Descend immediately if symptoms worsen. Stay hydrated, eat regularly, and do not rush the ascent. Phone signal is patchy above 2,000 m.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <div className="flex items-center gap-2 mb-3">
              <Footprints className="w-5 h-5 text-[#C4960C]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Footwear Matters</h3>
            </div>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Sandals are fine for Agafay and the Asni market, but every other trip on this list demands closed-toe shoes with grip. For Toubkal base camp and Azzaden Valley, proper hiking boots with ankle support are not optional. The trails are rocky, uneven, and occasionally muddy.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <div className="flex items-center gap-2 mb-3">
              <Thermometer className="w-5 h-5 text-[#C4960C]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Temperature Gap</h3>
            </div>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Marrakech can be 35 degrees while Imlil is 20 degrees and the Toubkal Refuge is 8 degrees. The temperature drops roughly 6.5 degrees per 1,000 m of elevation gained. Layering is the only sensible strategy. A light fleece or warm jacket should be in your daypack even in summer.
            </p>
          </div>
          <div className="card-moroccan p-5">
            <div className="flex items-center gap-2 mb-3">
              <Binoculars className="w-5 h-5 text-[#C4960C]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Respecting Local Life</h3>
            </div>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
              Berber villages are not theme parks. People live and work here year-round. Stay on established paths, do not enter homes uninvited, and dress modestly (shoulders and knees covered). If invited for tea, accept graciously. Learning a few Amazigh words like &quot;azul&quot; (hello) goes a long way.
            </p>
          </div>
        </div>
      </section>

      {/* ── Choosing the Right Trip ────────────────────────────── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-6 text-center">
          How to Choose the Right Atlas Day Trip
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 font-[family-name:var(--font-heading)] text-[17px] leading-relaxed mb-10">
          <p>
            With seven options, picking the right trip depends on three factors: your fitness level, your interests, and how much time you want to spend in a vehicle.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="card-moroccan p-5 zellige-border">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#A0522D]" />
              For Families & Casual Travelers
            </h3>
            <ul className="space-y-2 text-gray-600 font-[family-name:var(--font-heading)] text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Ourika Valley</strong> &mdash; shortest drive, riverside lunch, optional easy waterfall walk</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Agafay &amp; Atlas Foothills</strong> &mdash; no hiking needed, camel rides, great for young children</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Asni Saturday Market</strong> &mdash; flat walking, cultural immersion, half-day trip</span>
              </li>
            </ul>
          </div>
          <div className="card-moroccan p-5 zellige-border">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#A0522D]" />
              For Hikers & Adventure Seekers
            </h3>
            <ul className="space-y-2 text-gray-600 font-[family-name:var(--font-heading)] text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Toubkal Base Camp</strong> &mdash; the most challenging and rewarding day trek in Morocco</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Azzaden Valley</strong> &mdash; remote, quiet, proper mountain pass crossing at 2,200 m</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Imlil to Armed</strong> &mdash; solid mid-level hike with cultural stops and Toubkal views</span>
              </li>
            </ul>
          </div>
          <div className="card-moroccan p-5 zellige-border">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#A0522D]" />
              For Photographers
            </h3>
            <ul className="space-y-2 text-gray-600 font-[family-name:var(--font-heading)] text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Imlil Valley</strong> &mdash; terraced fields, walnut groves, Toubkal backdrop, Berber architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Azzaden Valley</strong> &mdash; panoramic views from Tizi Mzik pass, dramatic lighting shifts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Agafay Desert</strong> &mdash; barren plains against snow-capped peaks, incredible at golden hour</span>
              </li>
            </ul>
          </div>
          <div className="card-moroccan p-5 zellige-border">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Snowflake className="w-5 h-5 text-[#A0522D]" />
              For Winter Visitors
            </h3>
            <ul className="space-y-2 text-gray-600 font-[family-name:var(--font-heading)] text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Oukaimeden</strong> &mdash; skiing and snowboarding at Africa&apos;s highest resort</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Asni Market</strong> &mdash; accessible year-round, lower elevation stays above freezing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Ourika Valley</strong> &mdash; valley floor remains reachable, waterfalls at full flow after rain</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Sample Combo Itineraries ────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#A0522D]/5 to-transparent py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
            Suggested Day Trip Combos
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] mb-8 max-w-2xl mx-auto">
            Some trips pair well together for travelers staying multiple days in Marrakech. Here are three proven combinations.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Day 1 + Day 2</h3>
              </div>
              <p className="text-[#A0522D] font-semibold font-[family-name:var(--font-heading)] text-sm mb-2">Ourika Valley + Imlil Valley</p>
              <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                Start with the easier Ourika Valley trip to acclimatize. The next day, tackle the Imlil-Armed walk with more confidence on mountain terrain. Different valleys, different villages, and complementary experiences.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Saturday Special</h3>
              </div>
              <p className="text-[#A0522D] font-semibold font-[family-name:var(--font-heading)] text-sm mb-2">Asni Market + Imlil (same day)</p>
              <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                Hit the Asni market early (opens around 7 AM), then continue on the same road to Imlil. Walk to Armed village in the afternoon. A private driver makes this seamless for from 800 MAD total.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900">Contrast Day</h3>
              </div>
              <p className="text-[#A0522D] font-semibold font-[family-name:var(--font-heading)] text-sm mb-2">Agafay Desert (morning) + Ourika Valley (afternoon)</p>
              <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">
                Camel ride across the barren Agafay plateau in the morning, then drive 40 minutes to the green Ourika Valley for a riverside tagine lunch. The landscape contrast is dramatic and makes for outstanding photographs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ─────────────────────────────────────────── */}
      <section className="moroccan-pattern py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {faqItems.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ──────────────────────────────────────── */}
      <section className="container-morocco py-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#A0522D] mb-8 text-center">
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:border-[#A0522D]/40 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Mountain className="w-5 h-5 text-[#A0522D]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors">Atlas Mountains Guide</h3>
            </div>
            <p className="text-gray-500 font-[family-name:var(--font-heading)] text-sm">Complete overview of the High Atlas, Middle Atlas, and Anti-Atlas ranges.</p>
            <span className="text-[#A0522D] text-sm font-semibold mt-3 flex items-center gap-1 font-[family-name:var(--font-heading)]">
              Read guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link href="/morocco-day-hiking" className="card-moroccan p-5 group hover:border-[#A0522D]/40 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Footprints className="w-5 h-5 text-[#A0522D]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors">Day Hiking Guide</h3>
            </div>
            <p className="text-gray-500 font-[family-name:var(--font-heading)] text-sm">Top day hikes across Morocco with trail details, maps, and difficulty ratings.</p>
            <span className="text-[#A0522D] text-sm font-semibold mt-3 flex items-center gap-1 font-[family-name:var(--font-heading)]">
              Read guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link href="/morocco-waterfall-hikes" className="card-moroccan p-5 group hover:border-[#A0522D]/40 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-5 h-5 text-[#A0522D]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors">Waterfall Hikes</h3>
            </div>
            <p className="text-gray-500 font-[family-name:var(--font-heading)] text-sm">Setti Fatma, Ouzoud, Akchour, and more of Morocco&apos;s best waterfall trails.</p>
            <span className="text-[#A0522D] text-sm font-semibold mt-3 flex items-center gap-1 font-[family-name:var(--font-heading)]">
              Read guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link href="/marrakech" className="card-moroccan p-5 group hover:border-[#A0522D]/40 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-[#A0522D]" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors">Marrakech Guide</h3>
            </div>
            <p className="text-gray-500 font-[family-name:var(--font-heading)] text-sm">Everything about Marrakech: medina, riads, souks, food, and day trip planning.</p>
            <span className="text-[#A0522D] text-sm font-semibold mt-3 flex items-center gap-1 font-[family-name:var(--font-heading)]">
              Read guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#A0522D] to-[#8B4513] py-16">
        <div className="container-morocco text-center text-white">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore the Atlas Mountains?
          </h2>
          <p className="font-[family-name:var(--font-heading)] text-lg text-white/90 max-w-2xl mx-auto mb-8">
            From a gentle valley stroll to a challenging mountain ascent, the Atlas delivers a day you will remember long after the sunburn fades. Pick your trip, lace up your boots, and head south.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#A0522D] px-8 py-3.5 rounded-lg font-semibold font-[family-name:var(--font-heading)] hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Full Atlas Mountains Guide
            </Link>
            <Link
              href="/day-trips-from-marrakech"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold font-[family-name:var(--font-heading)] hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              All Marrakech Day Trips
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
