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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Sun,
  Moon,
  Compass,
  Camera,
  Tent,
  Route,
  Calendar,
  Backpack,
  Heart,
  Sunrise,
  Sparkles,
  Wind,
  Globe,
  Phone,
  Mail,
  BookOpen,
  Eye,
  Footprints,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Camel Trekking 2026 | Sahara Camel Ride Guide, Prices & Tips',
  description:
    'Complete guide to camel trekking in Morocco. Sunset rides, overnight treks & multi-day Sahara expeditions in Merzouga, Zagora & M\'Hamid. Prices from 250 MAD, what to wear, camel welfare, photography tips, packing list & booking advice.',
  keywords: [
    'Morocco camel trek',
    'camel ride Sahara Morocco',
    'desert camel experience',
    'Merzouga camel tour',
    'camel trekking Morocco',
    'Sahara camel ride',
    'Morocco camel ride price',
    'Erg Chebbi camel trek',
    'Zagora camel tour',
    'overnight camel trek Morocco',
    'sunset camel ride Morocco',
    'multi-day camel trek Sahara',
    'camel ride Merzouga',
    'Erg Chigaga camel trek',
    'camel safari Morocco',
    'Morocco dromedary trek',
    'desert camel camping Morocco',
    'best camel trek Morocco',
    'camel ride Morocco 2026',
    'ethical camel tour Morocco',
    'camel trekking tips Morocco',
  ],
  openGraph: {
    title: 'Morocco Camel Trekking 2026 | Sahara Camel Ride Guide, Prices & Tips',
    description:
      'Plan your Sahara camel trek. Compare sunset rides, overnight treks & multi-day expeditions in Merzouga, Zagora & M\'Hamid. Prices from 250 MAD with expert tips.',
    url: `${BASE_URL}/morocco-camel-trekking`,
    images: [
      {
        url: `${BASE_URL}/images/hero-camel-caravan-sahara.webp`,
        width: 1200,
        height: 630,
        alt: 'Camel caravan crossing golden Sahara Desert dunes at sunset in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Camel Trekking 2026 | Sahara Camel Rides & Tours',
    description:
      'Everything you need for a Morocco camel trek: sunset rides, overnight treks, Merzouga vs Zagora, prices from 250 MAD, what to wear, camel welfare & expert tips.',
    images: [`${BASE_URL}/images/hero-camel-caravan-sahara.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-camel-trekking` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-camel-trekking`,
  name: 'Morocco Camel Trekking 2026 | Sahara Camel Ride Guide, Prices & Tips',
  description:
    'The ultimate guide to camel trekking in Morocco. Compare trek types, best locations, prices, what to wear, camel welfare, photography tips, and booking advice for the Sahara.',
  url: `${BASE_URL}/morocco-camel-trekking`,
  image: `${BASE_URL}/images/hero-camel-caravan-sahara.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-camel-trekking`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Sahara Desert' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'Place', name: 'Merzouga' },
    { '@type': 'Place', name: 'Zagora' },
    { '@type': 'Place', name: 'M\'Hamid El Ghizlane' },
    { '@type': 'Place', name: 'Erg Chigaga' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Camel Trekking', item: `${BASE_URL}/morocco-camel-trekking` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a camel trek cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'A sunset camel ride costs from 250 MAD per person. Overnight treks with desert camping start from 800 MAD. Multi-day expeditions cost from 2,000 MAD per person. Prices vary by season, location, group size, and camp quality.' } },
    { '@type': 'Question', name: 'Is camel riding in Morocco ethical?', acceptedAnswer: { '@type': 'Answer', text: 'Reputable operators take camel welfare seriously. Dromedary camels are well-adapted to desert conditions. Ethical operators limit riding time, provide rest and water, maintain proper saddles, and enforce weight limits. Look for positive reviews mentioning animal care.' } },
    { '@type': 'Question', name: 'What should I wear for a camel trek in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Wear long lightweight trousers to prevent chafing. Closed-toe shoes or boots are recommended. Bring a headscarf or cheche for sun and sand protection. Layer clothing for temperature changes between hot days and cold desert nights.' } },
    { '@type': 'Question', name: 'Where is the best place for a camel trek in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Merzouga and Erg Chebbi offer the most popular trekking with 150-meter dunes and excellent infrastructure. M\'Hamid and Erg Chigaga provide a more remote experience. Zagora offers shorter treks ideal for families.' } },
    { '@type': 'Question', name: 'How long is a typical camel ride in the Sahara?', acceptedAnswer: { '@type': 'Answer', text: 'A sunset ride lasts 1 to 1.5 hours. Overnight treks involve a 1 to 2-hour ride each way. Multi-day treks involve 3 to 5 hours of riding per day with rest stops. The pace is roughly 4 to 5 km per hour.' } },
    { '@type': 'Question', name: 'Can beginners do a camel trek in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. No prior experience is needed. Camels are led by experienced handlers. You sit in the saddle and hold the handle. Guides help you mount and dismount safely. Children as young as 5 can ride with supervision.' } },
    { '@type': 'Question', name: 'What is the best time of year for a camel trek in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'October to April offers the best conditions with warm days and cool nights. Avoid June to September when desert temperatures exceed 45 degrees Celsius.' } },
    { '@type': 'Question', name: 'Do I need to tip my camel guide in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Tipping is customary. For a sunset ride, from 50 to 100 MAD per group. For overnight treks, from 100 to 200 MAD per person. For multi-day treks, from 200 to 300 MAD per person per day. Tips go directly to your handler and guide.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TREK TYPES
   ═══════════════════════════════════════════════════════════════ */

const trekTypes = [
  {
    title: 'Sunset Camel Ride',
    subtitle: '1-2 hours through the dunes at golden hour',
    icon: Sunrise,
    bestFor: 'First-timers, families with children, travelers short on time',
    overview:
      'The most popular and accessible camel experience in Morocco. You mount your camel at the dune edge in late afternoon, ride through golden sand as the sun sinks toward the horizon, and watch the dunes transform from gold to orange to deep crimson. Includes a stop at the top of a high dune for panoramic photographs.',
    duration: '1-1.5 hours',
    priceRange: { group: 'From 250 MAD per person (group)', private: 'From 500 MAD per person (private)' },
    highlights: ['Spectacular sunset over the Sahara dunes', 'Perfect introduction to camel riding', 'Great for photography with golden hour light', 'Suitable for all ages including young children'],
    considerations: ['Shorter experience with less desert immersion', 'Popular time slot can feel crowded at peak season', 'No stargazing or sunrise included'],
  },
  {
    title: 'Overnight Camel Trek',
    subtitle: '1 night in a desert camp with camel ride to and from',
    icon: Moon,
    bestFor: 'Most travelers seeking the classic Sahara experience with camp, stargazing, and sunrise',
    overview:
      'The quintessential Morocco camel trek. Ride a camel for 1-2 hours through towering dunes to a desert camp, arriving in time for sunset. After a traditional Berber dinner with music around the campfire, sleep under the stars. Before dawn, climb a dune for the unforgettable Sahara sunrise, then ride back.',
    duration: '18-20 hours (late afternoon to mid-morning)',
    priceRange: { group: 'From 800 MAD per person (group, standard camp)', private: 'From 1,500 MAD per person (private, upgraded camp)' },
    highlights: ['Full desert experience: sunset, stargazing, and sunrise', 'Night in a traditional Berber desert camp', 'Campfire dinner with traditional music', 'Milky Way stargazing with zero light pollution'],
    considerations: ['Basic facilities at standard camps (shared toilets, limited electricity)', 'Desert nights can be very cold (0-8 degrees in winter)', 'Early wake-up for sunrise (around 5:30-6:00 AM)'],
  },
  {
    title: 'Multi-Day Camel Expedition',
    subtitle: '2-4 days of deep Sahara immersion by camelback',
    icon: Route,
    bestFor: 'Adventurers wanting an authentic nomadic experience far from tourist routes',
    overview:
      'The ultimate camel trekking experience. Spend multiple days traveling through the Sahara by camelback, following ancient caravan routes, sleeping in remote bivouac camps or under the open sky, and visiting nomadic Berber families. Each day involves 3-5 hours of riding with rest stops.',
    duration: '2-4 days depending on route',
    priceRange: { group: 'From 2,000 MAD per person (2-day trek)', private: 'From 4,500 MAD per person (3-day private trek)' },
    highlights: ['Authentic nomadic desert experience', 'Multiple nights under the Sahara stars', 'Visit remote nomad families and hidden oases', 'Traditional meals cooked over open fire in the desert'],
    considerations: ['Physically demanding: long hours in the saddle daily', 'Very basic facilities or none at all (wild camping)', 'Requires good fitness and comfort with rough conditions'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const trekLocations = [
  {
    name: 'Merzouga & Erg Chebbi',
    icon: Sun,
    image: '/images/hero-camel-caravan-sahara.webp',
    region: 'Southeastern Morocco',
    duneHeight: 'Up to 150 meters',
    accessFrom: 'Marrakech (560 km) or Fes (480 km)',
    trekOptions: 'Sunset rides, overnight treks, multi-day expeditions',
    bestFor: 'First-time riders, families, photographers',
    description:
      'The most popular camel trekking destination in Morocco. Towering golden dunes of Erg Chebbi create a dramatic landscape. Dozens of operators offer everything from sunset rides to multi-day treks, with camps ranging from basic to ultra-luxury.',
    highlights: ['Tallest dunes in Morocco reaching 150 meters', 'Widest range of trek options and camps', 'Paved road access to Merzouga village', 'Combine with Khamlia village and Gnawa music'],
  },
  {
    name: 'M\'Hamid & Erg Chigaga',
    icon: Wind,
    image: '/images/hero-desert.webp',
    region: 'South-central Morocco, beyond the Draa Valley',
    duneHeight: 'Up to 300 meters',
    accessFrom: 'Marrakech (560 km via Zagora, then 4x4)',
    trekOptions: 'Overnight treks, multi-day expeditions, deep desert circuits',
    bestFor: 'Adventure seekers, couples wanting solitude',
    description:
      'The wilder, more remote alternative to Merzouga. Erg Chigaga stretches over 40 kilometers, reached only by 4x4 across open desert. The camel treks here feel truly exploratory, with far fewer tourists and genuine wilderness.',
    highlights: ['Widest dune field in Morocco covering 40 km', 'Far fewer tourists for a private experience', 'Off-road 4x4 adventure to reach the start', 'Dramatic Draa Valley scenery en route'],
  },
  {
    name: 'Zagora',
    icon: Compass,
    image: '/images/photo-camel-sunset.webp',
    region: 'Draa-Tafilalet region, gateway to the desert',
    duneHeight: 'Low dunes and rocky desert (hamada)',
    accessFrom: 'Marrakech (360 km) or Ouarzazate (170 km)',
    trekOptions: 'Sunset rides, overnight treks, 2-day circuits',
    bestFor: 'Families, budget travelers, first-timers',
    description:
      'Famous for its "Timbuktu: 52 days by camel" sign, Zagora offers a more accessible desert experience. Lower dunes, rocky hamada landscape, and shorter, more affordable treks make it ideal for families.',
    highlights: ['Closest desert to Marrakech (6-7 hours)', 'More affordable treks than Merzouga', 'Beautiful Draa Valley palm groves', 'Iconic "Timbuktu 52 days" sign'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO EXPECT
   ═══════════════════════════════════════════════════════════════ */

const whatToExpect = [
  {
    title: 'Mounting & Dismounting',
    icon: Footprints,
    description: 'The camel kneels for you to mount. Swing your leg over and grip the front handle. When the camel stands, it lurches forward then backward: lean back as it rises on front legs, then forward as it straightens rear legs. Your guide holds the camel steady throughout.',
  },
  {
    title: 'The Riding Experience',
    icon: Route,
    description: 'Camels walk at roughly 4-5 km/h with a distinctive swaying gait. Most people find the rhythm relaxing after 10-15 minutes. Your camel is led by a handler, so you do not steer. Hold the saddle handle loosely. Lean back going downhill, forward going uphill.',
  },
  {
    title: 'Desert Camping',
    icon: Tent,
    description: 'Standard camps have Berber-style tents with mattresses, shared bathrooms, and communal dining. Upgraded camps offer private tents with beds. Luxury camps provide suites with en-suite bathrooms. All serve traditional Berber dinner and breakfast.',
  },
  {
    title: 'Sunset & Sunrise',
    icon: Sunrise,
    description: 'Sunset is typically experienced during the camel ride to camp, with dunes glowing gold to crimson. For sunrise, your host wakes you before dawn to climb a dune and watch the sun illuminate the sand sea. Both are among the most photographed scenes in Morocco.',
  },
  {
    title: 'Stargazing',
    icon: Moon,
    description: 'The Sahara is one of the darkest places on earth. On a clear night, the Milky Way stretches overhead in vivid detail and shooting stars appear every few minutes. New moon nights offer the best stargazing, so check the moon phase before booking.',
  },
  {
    title: 'Photography Opportunities',
    icon: Camera,
    description: 'Camel treks offer extraordinary photographic moments: caravan silhouettes against sunset skies, golden dune ridgelines, star trails over camp, and portraits of Berber guides. Bring a wide-angle lens for landscapes and a fast lens for low-light camp scenes.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO WEAR
   ═══════════════════════════════════════════════════════════════ */

const whatToWear = [
  {
    item: 'Long lightweight trousers',
    icon: CheckCircle,
    reason: 'Essential to prevent thigh and leg chafing from the saddle. Cotton or linen works best. Never wear shorts for a camel ride.',
  },
  {
    item: 'Headscarf or cheche turban',
    icon: CheckCircle,
    reason: 'Protects your head, neck, and face from sun and blowing sand. Available in Merzouga from 30 MAD. Your guide can show you how to tie it.',
  },
  {
    item: 'Closed-toe shoes or boots',
    icon: CheckCircle,
    reason: 'For walking on sand and rocky terrain. Ankle boots provide the best support. Avoid sandals or flip-flops during the ride itself.',
  },
  {
    item: 'Warm fleece or jacket',
    icon: CheckCircle,
    reason: 'Desert nights drop dramatically. Even in spring or autumn, temperatures can fall to 5-10 degrees. In winter, expect near-freezing.',
  },
  {
    item: 'UV-protection sunglasses',
    icon: CheckCircle,
    reason: 'Sand reflects intense sunlight. Quality sunglasses with UV protection prevent eye strain and damage. Bring a strap to keep them secure.',
  },
  {
    item: 'Light breathable layers',
    icon: CheckCircle,
    reason: 'Daytime temperatures range from 22-40 degrees depending on season. Layers let you adjust as temperatures shift rapidly at dusk and dawn.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMEL WELFARE
   ═══════════════════════════════════════════════════════════════ */

const camelWelfare = [
  { title: 'Natural Desert Adaptation', icon: Heart, detail: 'Dromedary camels are superbly adapted to desert life. They go days without water, regulate body temperature, and walk easily on soft sand. Carrying riders is well within their capacity when managed responsibly.' },
  { title: 'Ethical Operator Standards', icon: ShieldCheck, detail: 'Responsible operators limit riding to 1-2 hours maximum, provide rest stops on longer treks, ensure camels have adequate food and water, and maintain properly fitted saddles with padding.' },
  { title: 'Weight Limits & Rest', icon: Users, detail: 'Ethical operators enforce weight limits (typically under 100 kg per rider) and rotate camels to prevent overwork. Camels rest during the hottest part of the day.' },
  { title: 'Signs of a Good Operator', icon: Eye, detail: 'Healthy camels have clear eyes, smooth coats, no visible sores, and walk steadily. Good operators name their camels. Avoid any operator whose camels appear thin or have saddle sores.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Riding Essentials',
    icon: Route,
    items: [
      { item: 'Cheche or headscarf', why: 'Sand and sun protection. Available locally from 30 MAD if you forget' },
      { item: 'Long lightweight trousers', why: 'Prevents saddle chafing. Cotton or linen, not jeans (too stiff)' },
      { item: 'Closed-toe shoes', why: 'For walking on sand and rocky terrain near camp' },
      { item: 'Small daypack', why: 'Carry water, camera, and sunscreen on the ride. Leave main bags in the vehicle' },
      { item: 'Sunscreen SPF 50+', why: 'Desert sun is intense. Reapply every 2 hours even on cloudy days' },
    ],
  },
  {
    category: 'Overnight Essentials',
    icon: Moon,
    items: [
      { item: 'Warm fleece or down jacket', why: 'Desert nights drop to 0-8 degrees in winter, 10-15 in shoulder season' },
      { item: 'Warm socks and sleepwear', why: 'Camps provide blankets but extra layers ensure comfort' },
      { item: 'Headlamp or flashlight', why: 'Budget camps have minimal lighting after dark' },
      { item: 'Portable power bank', why: 'Limited or no electricity at most desert camps' },
      { item: 'Wet wipes and toilet paper', why: 'Basic camp facilities may have limited supplies' },
    ],
  },
  {
    category: 'Photography & Extras',
    icon: Camera,
    items: [
      { item: 'Camera with spare batteries', why: 'Cold pre-dawn temperatures drain batteries rapidly' },
      { item: 'Ziplock bags', why: 'Protect phone, camera lenses, and electronics from pervasive fine sand' },
      { item: 'Water bottle (1L minimum)', why: 'Stay hydrated: aim for 2-3 liters per day in the desert' },
      { item: 'Lip balm with SPF', why: 'Extremely dry air cracks lips within hours without protection' },
      { item: 'Earplugs and eye mask', why: 'Wind noise and early wake-up calls for sunrise can disrupt sleep' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  { title: 'Golden Hour Magic', tip: 'The 30 minutes before sunset and after sunrise produce the best dune photography. Low-angle light creates deep shadows on dune ridges. Position yourself so the caravan is silhouetted against the sky.' },
  { title: 'Protect Your Gear', tip: 'Sand is the enemy of camera equipment. Keep lenses capped when not shooting. Use a UV filter as a sacrificial front element. Store cameras in ziplock bags. Avoid changing lenses in the desert.' },
  { title: 'Camel Caravan Shots', tip: 'Ask your guide to arrange the caravan in a line for the classic silhouette shot. Shoot from a high dune looking down, or from ground level for dramatic angles. Camel shadows on sand make stunning compositions.' },
  { title: 'Night Sky Photography', tip: 'Bring a mini tripod or prop your camera on sand. Use a wide-angle lens at f/2.8 or wider, ISO 3200-6400, and 15-25 second exposures. The best Milky Way shots happen between midnight and 3 AM.' },
  { title: 'Portrait Etiquette', tip: 'Always ask permission before photographing guides or camp staff. Most are happy to pose. A small tip of 20-50 MAD is appreciated. Candid moments around the campfire often produce more powerful portraits.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING ADVICE
   ═══════════════════════════════════════════════════════════════ */

const bookingAdvice = [
  {
    step: 1,
    title: 'Choose Your Trek Type',
    icon: Compass,
    description:
      'Decide between a sunset ride (1-2 hours), overnight trek (with camp), or multi-day expedition. First-timers and families should start with sunset or overnight. Experienced trekkers can tackle multi-day routes.',
  },
  {
    step: 2,
    title: 'Pick Your Location',
    icon: MapPin,
    description:
      'Merzouga/Erg Chebbi is the most popular with the best infrastructure. Zagora is closer to Marrakech and more budget-friendly. M\'Hamid/Erg Chigaga offers the most remote and authentic experience.',
  },
  {
    step: 3,
    title: 'Check the Season',
    icon: Calendar,
    description:
      'October to April is ideal. March-April and October-November offer the best balance of warmth and comfort. Avoid June-September when extreme heat makes riding unpleasant and potentially dangerous.',
  },
  {
    step: 4,
    title: 'Verify the Operator',
    icon: ShieldCheck,
    description:
      'Book with operators who have verifiable reviews on Google, TripAdvisor, or GetYourGuide. Ask about camel welfare practices. Get written confirmation of what is included: meals, camp type, and equipment.',
  },
  {
    step: 5,
    title: 'Book in Advance',
    icon: Globe,
    description:
      'During peak season (October-April), book at least 1-2 weeks ahead. Luxury camp treks can sell out a month in advance. Off-season, you can sometimes book 2-3 days ahead, but advance booking gets better rates.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQs
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a camel trek cost in Morocco?',
    answer:
      'A short sunset camel ride costs from 250 MAD per person. Overnight camel treks with desert camping start from 800 MAD per person for a group tour with a standard camp, or from 1,500 MAD for a private trek with an upgraded camp. Multi-day camel expeditions of 2-3 days cost from 2,000 MAD per person. Prices vary by season, location, group size, and camp quality. Seasonal pricing can change, especially during peak months from October to April.',
  },
  {
    question: 'Is camel riding in Morocco ethical?',
    answer:
      'Reputable operators in Morocco take camel welfare seriously. Dromedary camels are naturally adapted to desert conditions and have been used for Sahara transport for centuries. Ethical operators limit riding sessions to 1-2 hours, provide adequate rest and water, use properly padded saddles, enforce weight limits, and rotate animals to prevent overwork. Check reviews for mentions of animal care and avoid operators whose camels appear thin or have visible sores.',
  },
  {
    question: 'What should I wear for a camel trek?',
    answer:
      'Wear long, lightweight trousers (cotton or linen, not tight jeans) to prevent saddle chafing. Closed-toe shoes or ankle boots provide the best comfort. Bring a headscarf or cheche turban for sun and sand protection. Layer your clothing for the dramatic temperature swings between hot days and cold desert nights. Avoid shorts, skirts, and sandals for the actual ride.',
  },
  {
    question: 'Where is the best place for a camel trek in Morocco?',
    answer:
      'Merzouga and Erg Chebbi offer the most popular camel trekking with towering 150-meter dunes, extensive infrastructure, and options from budget to ultra-luxury. M\'Hamid and Erg Chigaga provide a more remote, authentic experience with 300-meter dunes and far fewer tourists. Zagora offers shorter, more affordable treks ideal for families and first-time visitors. Each location delivers a distinct Sahara experience.',
  },
  {
    question: 'How long is a typical camel ride in the Sahara?',
    answer:
      'A sunset camel ride lasts 1 to 1.5 hours. Overnight treks involve a 1 to 2-hour ride to camp in the evening and a similar ride back after sunrise. Multi-day treks involve 3 to 5 hours of riding per day with rest stops. The pace is slow and rhythmic at roughly 4-5 kilometers per hour. Most people find the rhythm comfortable after 10-15 minutes of adjustment.',
  },
  {
    question: 'Can beginners do a camel trek in Morocco?',
    answer:
      'Absolutely. No prior experience is needed. Camels are led by experienced handlers who control the pace. You sit in the saddle and hold the front handle. Guides help you mount and dismount safely. The trickiest moments are when the camel stands up and sits down, so grip firmly during those transitions. Children as young as 5 can ride with adult supervision. If you have back or mobility issues, most camps offer a 4x4 transfer alternative.',
  },
  {
    question: 'What is the best time of year for a camel trek in Morocco?',
    answer:
      'October to April is the best window. March-April and October-November offer warm days (22-30 degrees Celsius) and cool nights perfect for camping. Winter treks (December-February) are comfortable by day but nights can drop near freezing, so bring extra warm layers. Avoid June to September when desert temperatures regularly exceed 45 degrees Celsius, making extended riding uncomfortable and potentially dangerous.',
  },
  {
    question: 'Do I need to tip my camel guide in Morocco?',
    answer:
      'Tipping is customary and appreciated in Morocco. For a sunset ride, from 50 to 100 MAD per group is typical. For overnight treks, from 100 to 200 MAD per person for the camel handler is standard. For multi-day treks with a full support team, from 200 to 300 MAD per person per day is appropriate. Tips should go directly to your handler and guide rather than to the booking agency.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/sahara',
    icon: Sun,
    title: 'Complete Sahara Guide',
    description: 'Everything about the Moroccan Sahara: geography, culture, Berber traditions, and how to experience this vast desert.',
  },
  {
    href: '/morocco-desert-tour',
    icon: Compass,
    title: 'Morocco Desert Tour Guide',
    description: 'Compare 1-night, 2-night, and 3-night Sahara tours with prices, itineraries, and camp options from budget to luxury.',
  },
  {
    href: '/desert',
    icon: Mountain,
    title: 'Desert Destinations',
    description: 'All of Morocco\'s desert regions explored: from the Sahara dunes to the rocky hamada and dramatic gorges.',
  },
  {
    href: '/desert-adventures',
    icon: Sparkles,
    title: 'Desert Adventures',
    description: 'Beyond the camel trek: quad biking, sandboarding, 4x4 safaris, and adrenaline activities in the Sahara.',
  },
  {
    href: '/camping',
    icon: Tent,
    title: 'Camping in Morocco',
    description: 'From Sahara desert camps to Atlas Mountain bivouacs: your complete guide to camping across Morocco.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCamelTrekkingPage() {
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
            backgroundImage: 'url(/images/hero-camel-caravan-sahara.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Camel Trekking</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Route className="w-4 h-4" />
            Sahara Camel Rides &amp; Desert Treks
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Camel Trekking:
            <br className="hidden md:block" /> The Complete Sahara Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From sunset rides at 250 MAD to multi-day Sahara expeditions. Compare Merzouga, Zagora,
            and M&apos;Hamid, choose your trek type, and plan the camel adventure of a lifetime.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why a Camel Trek in Morocco Is Unforgettable
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A camel trek through the Sahara Desert is one of the most iconic travel experiences
                on earth. The rhythmic swaying of the dromedary, the vast silence broken only by the
                soft crunch of sand underfoot, and the ever-changing play of light across towering
                dunes create a journey that transcends ordinary travel. For centuries, camel caravans
                crossed this very landscape carrying salt, gold, and spices between sub-Saharan
                Africa and the Mediterranean. Today, you can follow in those ancient footsteps and
                experience a way of life that has endured for millennia.
              </p>
              <p>
                Morocco offers the most accessible camel trekking in the Sahara. Whether you want a
                short sunset ride through the golden dunes of Erg Chebbi, an overnight trek to a
                desert camp under a sky full of stars, or a multi-day expedition into the remote
                wilderness of Erg Chigaga, there is a camel experience for every traveler, budget,
                and fitness level.
              </p>
              <p>
                This guide covers every aspect of planning a Morocco camel trek: trek types and
                durations, the three best locations, what to expect in the saddle, what to wear, camel
                welfare and ethics, desert camping, photography tips, a complete packing list, booking
                advice, and answers to the most common questions. Whether your budget starts at 250 MAD
                for a sunset ride or stretches to a multi-day private expedition, the Sahara is waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">250 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting price (sunset ride)</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">1-4 Days</div>
              <div className="text-sm text-[var(--text-muted)]">Trek duration options</div>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">150 m</div>
              <div className="text-sm text-[var(--text-muted)]">Tallest dunes (Erg Chebbi)</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Oct-Apr</div>
              <div className="text-sm text-[var(--text-muted)]">Best months for trekking</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Camel Treks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Camel Treks in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From a quick sunset ride to a multi-day Sahara expedition, choose the camel experience that matches your time, budget, and sense of adventure.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies during peak months (October-April).
          </p>

          <div className="space-y-12">
            {trekTypes.map((trek) => {
              const TrekIcon = trek.icon;
              return (
                <div key={trek.title} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <TrekIcon className="w-6 h-6" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold">{trek.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{trek.subtitle}</p>
                    <p className="text-white/90 mt-1 font-medium">{trek.bestFor}</p>
                  </div>

                  <div className="p-6">
                    <p className="text-[var(--text-secondary)] mb-6">{trek.overview}</p>

                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-6">
                      <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                      <strong>Duration:</strong> {trek.duration}
                    </div>

                    {/* Pricing */}
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      <DollarSign className="w-5 h-5 inline text-[var(--color-accent)] mr-1" />
                      Pricing
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Users className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Group</div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">{trek.priceRange.group}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Sparkles className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Private</div>
                        <div className="text-sm font-bold text-[var(--color-gold)]">{trek.priceRange.private}</div>
                      </div>
                    </div>

                    {/* Highlights & Considerations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Highlights</h4>
                        <div className="space-y-2">
                          {trek.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Things to Consider</h4>
                        <div className="space-y-2">
                          {trek.considerations.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
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

      {/* ── Best Locations for Camel Trekking ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Locations for Camel Trekking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has three outstanding camel trekking destinations. Each offers a distinct landscape, atmosphere, and level of adventure.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trekLocations.map((location) => {
              const LocationIcon = location.icon;
              return (
                <div key={location.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-52">
                    <img
                      src={location.image}
                      alt={`Camel trekking at ${location.name} in the Sahara Desert, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <LocationIcon className="w-5 h-5" />
                        {location.name}
                      </h3>
                      <p className="text-xs text-white/70 mt-1">{location.region}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-[var(--surface-muted)] p-2 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)]">Dune Height</div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{location.duneHeight}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-2 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)]">Best For</div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{location.bestFor}</div>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4">{location.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Route className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Access:</strong> {location.accessFrom}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Compass className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Trek options:</strong> {location.trekOptions}</span>
                      </div>
                    </div>

                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      <CheckCircle className="w-3 h-3 inline text-green-600 mr-1" />
                      Highlights
                    </h4>
                    <div className="space-y-1.5">
                      {location.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recommendation box */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Which Location Should You Choose?
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    For your first camel trek, choose <strong>Merzouga and Erg Chebbi</strong>. The towering dunes
                    are spectacular, the range of operators ensures good value, and the infrastructure means reliable
                    quality. If you want a shorter, more budget-friendly option closer to Marrakech, <strong>Zagora</strong> delivers
                    a wonderful introduction. Save <strong>Erg Chigaga</strong> for when you want a wilder, more remote
                    experience with complete solitude among the dunes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect on a Camel Trek ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect on a Camel Trek
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From mounting your camel for the first time to sleeping under the stars, here is everything you will experience on a Sahara camel trek.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatToExpect.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Wear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear for a Camel Trek
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right clothing makes the difference between comfort and misery on a camel trek. Here is what experienced riders recommend.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatToWear.map((entry) => (
              <div key={entry.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {entry.item}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">{entry.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Camel Welfare & Ethics ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Welfare &amp; Ethical Trekking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Responsible tourism means caring about the animals that make the experience possible. Here is what you should know about camel welfare in Morocco.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {camelWelfare.map((item) => {
              const WelfareIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WelfareIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Trek Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A camel caravan crossing the Sahara dunes is one of the most photographed scenes in the world. Here is how to capture it perfectly.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {photoTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{tip.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Trek Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light and pack smart. Here is everything you need for a comfortable camel trek, whether it is a sunset ride or a multi-day expedition.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packingList.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((entry, i) => (
                      <div key={i} className="border-b border-[var(--border-default)] pb-3 last:border-0 last:pb-0">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-sm font-medium text-[var(--text-primary)]">{entry.item}</span>
                            <p className="text-xs text-[var(--text-muted)] mt-0.5">{entry.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Advice ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Book Your Camel Trek
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these five steps to plan and book the perfect camel trekking experience in Morocco.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {bookingAdvice.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)]" />
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking tips */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Tips for Choosing a Reputable Operator
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Check reviews on Google, TripAdvisor, or GetYourGuide before booking
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Ask specifically about camel welfare practices and weight limits
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Get written confirmation of included meals, camp type, and equipment
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Ask for the specific camp name so you can verify its reviews independently
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Never pay full amount upfront to a street tout: use established agencies
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Confirm cancellation policy: reputable operators offer 48-72 hour free cancellation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Camel Trekking Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-camel-caravan.webp"
                alt="Camel caravan crossing golden sand dunes in the Sahara Desert, Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Camel Caravan in the Dunes</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-camp.webp"
                alt="Traditional Berber desert camp in the Sahara with tents under a starry sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Desert Camp at Night</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-sunrise.webp"
                alt="Sahara Desert sunrise over the sand dunes with warm golden light in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Sunrise</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Desert &amp; Adventure Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/photo-camel-sunset.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for Your Sahara Camel Trek?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The golden dunes of the Sahara are waiting. Whether you choose a sunset ride from 250 MAD
            or a multi-day expedition deep into the desert, the rhythm of the camel and the silence of
            the sand will stay with you forever. Start planning your Morocco camel trek today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-desert-tour"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              View Desert Tour Guide
            </Link>
            <Link
              href="/desert-adventures"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Explore Desert Adventures
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Contact us for custom treks
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              info@citytoursmorocco.com
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
