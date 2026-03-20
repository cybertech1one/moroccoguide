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
  Flame,
  Music,
  Thermometer,
  UtensilsCrossed,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Sahara Overnight 2026 | Desert Camp Guide, Prices & Tips',
  description:
    'Complete guide to spending a night in the Sahara Desert, Morocco. Compare basic, standard, luxury & glamping camps in Erg Chebbi and Erg Chigaga. Prices from 600 MAD, sunset & sunrise experiences, stargazing, Berber entertainment, packing list & booking tips.',
  keywords: [
    'Sahara desert overnight Morocco',
    'Morocco desert camp',
    'sleeping in Sahara',
    'luxury desert camp Morocco',
    'Erg Chebbi overnight',
    'Erg Chigaga camp',
    'Sahara glamping Morocco',
    'desert night Morocco',
    'Morocco overnight desert tour',
    'Sahara stargazing Morocco',
    'Berber desert camp',
    'Merzouga desert camp',
    'Morocco desert camping',
    'luxury Sahara camp',
    'desert camp Merzouga',
    'Sahara overnight experience',
    'Morocco desert night stay',
    'best desert camp Morocco',
    'Morocco Sahara camp 2026',
    'desert bivouac Morocco',
    'glamping Sahara Morocco',
  ],
  openGraph: {
    title: 'Morocco Sahara Overnight 2026 | Desert Camp Guide, Prices & Tips',
    description:
      'Plan your Sahara overnight stay. Compare basic to luxury desert camps in Erg Chebbi & Erg Chigaga. Prices from 600 MAD with stargazing, Berber music & sunrise tips.',
    url: `${BASE_URL}/morocco-sahara-overnight`,
    images: [
      {
        url: `${BASE_URL}/images/hero-sahara-camp.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxury desert camp with traditional Berber tents under starry Sahara sky in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Sahara Overnight 2026 | Desert Camp Guide & Prices',
    description:
      'Everything you need for a Sahara overnight: camp types from basic to glamping, Erg Chebbi vs Erg Chigaga, prices from 600 MAD, stargazing, Berber music & packing tips.',
    images: [`${BASE_URL}/images/hero-sahara-camp.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-sahara-overnight` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-sahara-overnight`,
  name: 'Morocco Sahara Overnight 2026 | Desert Camp Guide, Prices & Tips',
  description:
    'The ultimate guide to spending a night in the Sahara Desert. Compare camp types, locations, prices, what to expect, what to pack, and how to book your desert overnight in Morocco.',
  url: `${BASE_URL}/morocco-sahara-overnight`,
  image: `${BASE_URL}/images/hero-sahara-camp.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-sahara-overnight`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Sahara Desert' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'Place', name: 'Merzouga' },
    { '@type': 'Place', name: 'Erg Chigaga' },
    { '@type': 'Place', name: 'M\'Hamid El Ghizlane' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Sahara Overnight', item: `${BASE_URL}/morocco-sahara-overnight` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does a Sahara overnight cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Basic desert camps start from 600 MAD per person. Standard camps with private tents cost from 1,200 MAD. Luxury camps with en-suite bathrooms start from 2,500 MAD. Premium glamping experiences can cost from 5,000 MAD per person. Prices vary by season, with peak rates from October to April.' } },
    { '@type': 'Question', name: 'What is included in a desert camp overnight?', acceptedAnswer: { '@type': 'Answer', text: 'Most packages include camel ride to camp, sunset viewing, traditional Berber dinner, overnight accommodation, breakfast, sunrise viewing, and camel ride back. Luxury camps add cocktails, hot showers, private bathrooms, and sometimes sandboarding or 4x4 excursions.' } },
    { '@type': 'Question', name: 'Is it safe to sleep in the Sahara Desert?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, sleeping in the Sahara with an established camp operator is very safe. Camps have experienced Berber staff who know the desert. There are no dangerous predators in the Moroccan Sahara. The main risks are cold temperatures at night and sunburn during the day.' } },
    { '@type': 'Question', name: 'What is the difference between Erg Chebbi and Erg Chigaga?', acceptedAnswer: { '@type': 'Answer', text: 'Erg Chebbi near Merzouga has 150-meter dunes, excellent infrastructure, and dozens of camp options from budget to ultra-luxury. Erg Chigaga near M\'Hamid has 300-meter dunes, far fewer tourists, and a more remote wilderness feel. Erg Chebbi is easier to reach; Erg Chigaga requires a 4x4 transfer.' } },
    { '@type': 'Question', name: 'How cold does it get in the Sahara at night?', acceptedAnswer: { '@type': 'Answer', text: 'Winter nights (December to February) can drop to 0 to 5 degrees Celsius. Spring and autumn nights range from 10 to 18 degrees. Summer nights stay around 25 to 30 degrees but daytime heat exceeds 45 degrees. Camps provide thick blankets, but bring warm layers for cold months.' } },
    { '@type': 'Question', name: 'Can you see the Milky Way from the Sahara?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Sahara offers some of the darkest skies on earth. On clear nights, especially around new moon, the Milky Way is visible in stunning detail. You can see thousands of stars, shooting stars, and even satellites. The best stargazing months are October to April when skies are clearest.' } },
    { '@type': 'Question', name: 'What should I pack for a Sahara overnight?', acceptedAnswer: { '@type': 'Answer', text: 'Essential items include warm layers for cold nights, a headlamp or flashlight, sunscreen, a headscarf for sand protection, comfortable closed-toe shoes, a power bank for charging, wet wipes, and a camera. Camps provide bedding and meals, so you only need personal items.' } },
    { '@type': 'Question', name: 'When is the best time for a Sahara overnight in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'October to April offers the best conditions. March to April and October to November provide warm days and cool nights perfect for camping. Avoid June to September when extreme heat makes the experience uncomfortable. Full moon nights are beautiful but new moon is best for stargazing.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMP TYPES
   ═══════════════════════════════════════════════════════════════ */

const campTypes = [
  {
    title: 'Basic Bivouac Camp',
    subtitle: 'Authentic nomadic-style camping under the stars',
    icon: Tent,
    bestFor: 'Budget travelers, backpackers, and those seeking raw desert authenticity',
    overview:
      'The most stripped-back desert experience. Simple Berber-style tents with foam mattresses on the sand, shared basic toilet facilities, and communal dining under the stars. Many travelers choose to sleep outside on the dunes rather than in the tents. This is the closest you can get to the nomadic lifestyle without actually being a nomad.',
    priceRange: { group: 'From 600 MAD per person (group tour)', private: 'From 1,000 MAD per person (private)' },
    included: ['Camel ride to and from camp', 'Foam mattress and thick blankets', 'Traditional tagine dinner', 'Mint tea and breakfast', 'Shared basic toilet'],
    notIncluded: ['No electricity or charging', 'No hot water or showers', 'No private bathroom', 'No heating in tents'],
  },
  {
    title: 'Standard Desert Camp',
    subtitle: 'Comfortable tents with private space and better facilities',
    icon: Moon,
    bestFor: 'Most travelers wanting comfort without losing the desert atmosphere',
    overview:
      'The most popular option, balancing comfort with an authentic experience. Private tents with real beds, proper mattresses, and pillows. Shared bathroom facilities with flush toilets. A communal area with carpets and cushions for dining and socializing. Some have limited solar-powered lighting and charging stations.',
    priceRange: { group: 'From 1,200 MAD per person (group tour)', private: 'From 2,000 MAD per person (private)' },
    included: ['Private tent with real bed and linens', 'Camel ride both ways', 'Multi-course Berber dinner', 'Breakfast and mint tea', 'Shared flush toilets', 'Limited solar-powered lighting'],
    notIncluded: ['No private bathroom', 'No hot showers (some have cold)', 'Limited or no phone charging', 'No air conditioning or heating'],
  },
  {
    title: 'Luxury Desert Camp',
    subtitle: 'Hotel-quality comfort surrounded by towering dunes',
    icon: Star,
    bestFor: 'Couples, honeymooners, and travelers who want comfort in the wilderness',
    overview:
      'A desert experience that rivals boutique hotels. Spacious private tents with proper beds, quality linens, and Moroccan decor. Private en-suite bathrooms with hot showers and flush toilets. A beautifully decorated dining tent with multi-course meals. Some offer a small pool, cocktail service, and generator-powered electricity throughout.',
    priceRange: { group: 'From 2,500 MAD per person (group)', private: 'From 4,000 MAD per person (private)' },
    included: ['Spacious tent with en-suite bathroom', 'Hot shower and flush toilet', 'Camel ride or 4x4 transfer', 'Gourmet multi-course dinner', 'Breakfast buffet', 'Berber music entertainment', 'Sandboarding equipment'],
    notIncluded: ['Alcoholic drinks (available at extra cost)', 'Spa treatments (some camps offer)', 'Photography sessions (some include)'],
  },
  {
    title: 'Premium Glamping',
    subtitle: 'Ultra-luxury desert suites with five-star amenities',
    icon: Sparkles,
    bestFor: 'Luxury travelers, special occasions, and those who want the finest desert experience',
    overview:
      'The pinnacle of Sahara accommodation. Think designer tents with king-size beds, heated floors, private terraces overlooking the dunes, and bathrooms with full-size bathtubs. Some offer private plunge pools, personal chefs, dedicated guides, and telescope-assisted stargazing sessions. These camps typically host no more than 10 to 15 guests for an exclusive feel.',
    priceRange: { group: 'From 5,000 MAD per person', private: 'From 8,000 MAD per person (exclusive)' },
    included: ['Designer suite with luxury furnishings', 'Private bathroom with bathtub', 'Personal guide and chef', 'Premium multi-course dinner with wine', 'Private sunrise camel ride', 'Telescope stargazing session', 'Spa treatments and wellness area', '4x4 dune excursion'],
    notIncluded: ['International flights', 'Travel insurance', 'Personal shopping'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ERG CHEBBI VS ERG CHIGAGA
   ═══════════════════════════════════════════════════════════════ */

const locationComparison = [
  {
    name: 'Erg Chebbi (Merzouga)',
    icon: Sun,
    image: '/images/hero-camel-caravan-sahara.webp',
    duneHeight: 'Up to 150 meters',
    access: 'Paved road to Merzouga village, then short camel ride',
    campOptions: '50+ camps from basic to ultra-luxury',
    bestFor: 'First-timers, families, photographers, luxury seekers',
    atmosphere: 'Well-established tourism infrastructure with a wide range of options',
    highlights: ['Tallest golden dunes reaching 150 meters', 'Widest range of camp quality and price', 'Easy paved road access from Fes (8 hours) or Marrakech (10 hours)', 'Combine with Khamlia village and Gnawa music'],
    considerations: ['More tourists, especially at popular camps', 'Peak season can feel crowded at sunrise spots', 'Touts can be persistent in Merzouga village'],
  },
  {
    name: 'Erg Chigaga (M\'Hamid)',
    icon: Wind,
    image: '/images/hero-desert.webp',
    duneHeight: 'Up to 300 meters',
    access: '50 km off-road by 4x4 from M\'Hamid (1.5-2 hours)',
    campOptions: '10-15 camps, mostly mid-range to luxury',
    bestFor: 'Adventure seekers, couples wanting solitude, repeat visitors',
    atmosphere: 'Remote wilderness with far fewer tourists and genuine desert silence',
    highlights: ['Widest dune field in Morocco stretching 40 km', 'Far fewer tourists for a private experience', 'Dramatic 4x4 desert crossing to reach camp', 'Larger dunes reaching 300 meters'],
    considerations: ['Requires 4x4 transfer (no camel-only access for most)', 'Fewer camp options and less price competition', 'Longer travel time from major cities'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: OVERNIGHT ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const itinerary = [
  { time: '3:00 - 4:00 PM', title: 'Arrival & Preparation', icon: MapPin, description: 'Arrive at the meeting point in Merzouga or M\'Hamid. Meet your Berber guide, receive your cheche head scarf, and prepare for the camel ride. Store your main luggage in the vehicle.' },
  { time: '4:00 - 5:30 PM', title: 'Camel Ride to Camp', icon: Compass, description: 'Mount your camel and begin the trek through the dunes. The ride takes 1 to 1.5 hours through ever-changing sand formations. Your guide leads the camel caravan along ancient routes toward the camp.' },
  { time: '5:30 - 6:30 PM', title: 'Sunset on the Dunes', icon: Sunrise, description: 'Arrive near camp in time to climb a high dune for sunset. Watch the sand transform from gold to deep orange to crimson as the sun dips below the horizon. One of the most photographed moments in Morocco.' },
  { time: '7:00 - 9:00 PM', title: 'Dinner & Berber Entertainment', icon: Music, description: 'Gather around the communal area for a traditional multi-course Berber dinner: salad, bread, tagine or couscous, fruit, and endless mint tea. After dinner, your hosts play Berber drums and sing traditional songs around the campfire.' },
  { time: '9:00 - 11:00 PM', title: 'Stargazing & Desert Silence', icon: Moon, description: 'Step away from camp for extraordinary stargazing. The Sahara is one of the darkest places on earth. The Milky Way stretches overhead, shooting stars appear every few minutes, and the silence is absolute. Luxury camps may offer telescope sessions.' },
  { time: '5:30 - 6:30 AM', title: 'Sunrise on the Dunes', icon: Sun, description: 'Wake before dawn and climb a high dune to watch the Sahara sunrise. The first light paints the dunes in soft pink and gold. The cool morning air and vast silence make this an almost spiritual moment.' },
  { time: '7:00 - 8:00 AM', title: 'Breakfast & Departure', icon: UtensilsCrossed, description: 'Return to camp for a traditional Berber breakfast: msemen flatbread, amlou dip, jam, butter, eggs, and coffee or tea. Pack up, mount your camel, and ride back to the meeting point by mid-morning.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT FOOD
   ═══════════════════════════════════════════════════════════════ */

const desertFood = [
  { dish: 'Desert Tagine', icon: Flame, description: 'Slow-cooked in a clay pot over open coals, camp tagines feature chicken or lamb with preserved lemons, olives, and fragrant spices. The desert setting makes every bite taste extraordinary.' },
  { dish: 'Sand Bread (Madfouna)', icon: UtensilsCrossed, description: 'Known as Berber pizza, this stuffed bread is baked directly in the hot sand beneath the campfire. Filled with spiced meat, onions, and herbs, it is unique to the desert camps.' },
  { dish: 'Berber Couscous', icon: Heart, description: 'Friday is traditionally couscous day. Hand-rolled semolina steamed with seven vegetables and tender lamb, served family-style from a large communal dish.' },
  { dish: 'Mint Tea Ceremony', icon: Sparkles, description: 'The heart of Moroccan hospitality. Gunpowder green tea brewed with fresh mint and sugar, poured from height to create a frothy top. Expect at least three glasses as the Berber saying goes: the first is gentle as life, the second strong as love, the third bitter as death.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO PACK
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Clothing Essentials',
    icon: Backpack,
    items: [
      { item: 'Warm fleece or down jacket', why: 'Desert nights drop to 0-8 degrees in winter and 10-15 in shoulder season' },
      { item: 'Headscarf or cheche', why: 'Protects from sun and sand. Available locally from 30 MAD if you forget' },
      { item: 'Long lightweight trousers', why: 'For camel riding comfort and sun protection. Cotton or linen works best' },
      { item: 'Warm socks and sleepwear', why: 'Camps provide blankets but extra layers ensure a comfortable sleep' },
      { item: 'Closed-toe shoes', why: 'For walking on sand and rocky terrain. Ankle boots give the best support' },
    ],
  },
  {
    category: 'Overnight Essentials',
    icon: Moon,
    items: [
      { item: 'Headlamp or flashlight', why: 'Basic and standard camps have minimal lighting after dark' },
      { item: 'Portable power bank', why: 'Limited or no electricity at most camps. Charge your phone beforehand' },
      { item: 'Wet wipes and toilet paper', why: 'Basic camp facilities may have limited supplies' },
      { item: 'Earplugs and eye mask', why: 'Wind noise and early wake-up calls for sunrise can disrupt sleep' },
      { item: 'Small toiletry bag', why: 'Toothbrush, face wash, deodorant. Keep it minimal for the overnight' },
    ],
  },
  {
    category: 'Protection & Photography',
    icon: Camera,
    items: [
      { item: 'Sunscreen SPF 50+', why: 'Desert sun is intense. Reapply every 2 hours even on cloudy days' },
      { item: 'Camera with spare batteries', why: 'Cold pre-dawn temperatures drain batteries rapidly' },
      { item: 'Ziplock bags', why: 'Protect phone, camera, and electronics from pervasive fine desert sand' },
      { item: 'Water bottle (1L minimum)', why: 'Stay hydrated. Aim for 2-3 liters per day in the desert' },
      { item: 'Lip balm with SPF', why: 'Extremely dry air cracks lips within hours without protection' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TEMPERATURE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const temperatureGuide = [
  { season: 'Winter (Dec-Feb)', dayTemp: '18-22', nightTemp: '0-5', icon: Thermometer, note: 'Cold nights require heavy layers. Days are pleasant for trekking. Best stargazing with clearest skies.' },
  { season: 'Spring (Mar-May)', dayTemp: '25-35', nightTemp: '10-18', icon: Sun, note: 'Ideal season with warm days and cool nights. April can have occasional sandstorms.' },
  { season: 'Summer (Jun-Aug)', dayTemp: '40-50', nightTemp: '25-30', icon: Flame, note: 'Extreme heat makes overnight stays uncomfortable. Not recommended for most travelers.' },
  { season: 'Autumn (Sep-Nov)', dayTemp: '28-38', nightTemp: '12-20', icon: Wind, note: 'Excellent conditions from October onward. Warm days, cool evenings, minimal wind.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  { step: 1, title: 'Choose Your Camp Level', icon: Tent, description: 'Decide between basic, standard, luxury, or glamping. Your budget and comfort expectations will guide this choice. Basic camps start from 600 MAD; luxury starts from 2,500 MAD per person.' },
  { step: 2, title: 'Pick Your Location', icon: MapPin, description: 'Erg Chebbi for the widest range of options and easy access. Erg Chigaga for remote wilderness and bigger dunes. Most first-timers should choose Erg Chebbi.' },
  { step: 3, title: 'Check the Moon Phase', icon: Moon, description: 'New moon provides the darkest skies for stargazing. Full moon illuminates the dunes beautifully but reduces star visibility. Both are magical but different experiences.' },
  { step: 4, title: 'Verify the Operator', icon: ShieldCheck, description: 'Book with operators who have verifiable reviews on Google, TripAdvisor, or GetYourGuide. Ask for the specific camp name so you can check its reviews independently.' },
  { step: 5, title: 'Book in Advance', icon: Calendar, description: 'Peak season (October to April) requires booking 1-2 weeks ahead. Luxury camps can sell out a month in advance. Off-season, 2-3 days ahead usually works.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQs
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a Sahara overnight cost in Morocco?',
    answer:
      'Basic desert camps start from 600 MAD per person for a group tour. Standard camps with private tents and better facilities cost from 1,200 MAD. Luxury camps with en-suite bathrooms and hot showers start from 2,500 MAD. Premium glamping experiences cost from 5,000 MAD per person. Prices vary significantly by season, with peak rates applying from October to April. Seasonal pricing can change, so confirm rates when booking.',
  },
  {
    question: 'What is included in a desert camp overnight?',
    answer:
      'Most packages include a camel ride to and from camp (1 to 1.5 hours each way), sunset viewing from the dunes, a traditional multi-course Berber dinner, overnight accommodation in a tent, breakfast, sunrise viewing, and mint tea throughout. Luxury camps add cocktails, hot showers, private bathrooms, entertainment, and sometimes sandboarding or 4x4 excursions. Always confirm inclusions before booking.',
  },
  {
    question: 'Is it safe to sleep in the Sahara Desert?',
    answer:
      'Yes, sleeping in the Sahara with an established camp operator is very safe. Camps are staffed by experienced Berber families who have lived in the desert for generations. There are no dangerous predators in the Moroccan Sahara. The main considerations are cold temperatures at night (bring warm layers) and sun exposure during the day (bring sunscreen and a hat). Thousands of tourists enjoy this experience safely every week during peak season.',
  },
  {
    question: 'What is the difference between Erg Chebbi and Erg Chigaga?',
    answer:
      'Erg Chebbi near Merzouga has golden dunes up to 150 meters, over 50 camp options from budget to ultra-luxury, and easy paved-road access. Erg Chigaga near M\'Hamid has wider dunes reaching 300 meters, far fewer tourists, and a genuinely remote wilderness feel. Erg Chebbi suits first-timers and luxury seekers. Erg Chigaga suits adventurers and those wanting solitude. Erg Chigaga requires a 1.5 to 2-hour 4x4 transfer across open desert.',
  },
  {
    question: 'How cold does it get in the Sahara at night?',
    answer:
      'Winter nights from December to February can drop to 0 to 5 degrees Celsius. Spring and autumn nights range from 10 to 18 degrees. Summer nights stay around 25 to 30 degrees but daytime heat exceeds 45 degrees, making camping unpleasant. All camps provide thick blankets and some offer heated tents, but bringing your own warm layers is strongly recommended for cold season visits.',
  },
  {
    question: 'Can you see the Milky Way from the Sahara?',
    answer:
      'Yes, the Sahara offers some of the darkest skies on earth with virtually zero light pollution. On clear nights, especially around new moon, the Milky Way is visible in extraordinary detail. You can see thousands of stars, shooting stars appear every few minutes, and you may even spot satellites crossing the sky. The best stargazing months are October to April when skies are clearest. Luxury camps sometimes offer telescope-assisted sessions.',
  },
  {
    question: 'What should I pack for a Sahara overnight?',
    answer:
      'Essential items include warm layers for cold nights (fleece or down jacket), a headlamp or flashlight, sunscreen SPF 50+, a headscarf for sand protection, comfortable closed-toe shoes, a portable power bank, wet wipes, and a camera with spare batteries. Camps provide bedding, meals, and basic amenities, so you only need personal items. Keep everything in a small daypack you can carry on the camel ride.',
  },
  {
    question: 'When is the best time for a Sahara overnight in Morocco?',
    answer:
      'October to April offers the best conditions overall. March to April and October to November provide warm days (25 to 32 degrees) and cool nights (10 to 18 degrees) that are perfect for camping. Winter visits from December to February have the clearest stargazing skies but require heavy warm layers for near-freezing nights. Avoid June to September when extreme heat makes the overnight experience uncomfortable.',
  },
] as const;

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
    description: 'Compare 1-night, 2-night, and 3-night Sahara tours with prices, itineraries, and camp options.',
  },
  {
    href: '/morocco-camel-trekking',
    icon: Globe,
    title: 'Camel Trekking Guide',
    description: 'Complete guide to camel rides in Morocco: sunset rides, overnight treks, multi-day expeditions, and prices.',
  },
  {
    href: '/camping',
    icon: Tent,
    title: 'Camping in Morocco',
    description: 'From Sahara desert camps to Atlas Mountain bivouacs: your complete guide to camping across Morocco.',
  },
  {
    href: '/stargazing',
    icon: Moon,
    title: 'Stargazing in Morocco',
    description: 'Discover the darkest skies in Morocco for stargazing: Sahara dunes, Atlas peaks, and desert observatories.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSaharaOvernightPage() {
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
            backgroundImage: 'url(/images/hero-sahara-camp.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sahara Overnight</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Tent className="w-4 h-4" />
            Desert Camps &amp; Overnight Stays
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Sahara Overnight:
            <br className="hidden md:block" /> Sleep Under the Stars 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From basic bivouacs at 600 MAD to luxury glamping at 8,000 MAD. Compare Erg Chebbi
            and Erg Chigaga desert camps, plan your overnight itinerary, and experience the magic
            of sleeping in the Sahara.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why a Sahara Overnight Is Unforgettable
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Spending a night in the Sahara Desert is one of the most transformative travel
                experiences on earth. As the sun sets and the last golden light fades from the
                towering dunes, the desert reveals a world few ever witness: a sky so dense with
                stars that the Milky Way casts shadows on the sand, a silence so complete you can
                hear your own heartbeat, and a stillness that strips away the noise of modern life.
              </p>
              <p>
                Morocco offers the most accessible Sahara overnight experiences in North Africa.
                Whether you choose a simple bivouac where you sleep under the open sky, a
                comfortable standard camp with private tents, or an ultra-luxury glamping suite
                with a bathtub overlooking the dunes, the magic of the desert night remains the
                same. The campfire, the Berber songs, the first hint of pink at dawn: these
                moments stay with you long after you leave the sand behind.
              </p>
              <p>
                This guide covers everything for your Sahara overnight: four levels of desert
                camps with pricing, Erg Chebbi versus Erg Chigaga, a detailed itinerary, desert
                food, stargazing, temperatures by season, what to pack, and booking tips.
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
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">600 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting price (basic camp)</div>
            </div>
            <div className="text-center">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">4 Types</div>
              <div className="text-sm text-[var(--text-muted)]">Camp levels available</div>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">300 m</div>
              <div className="text-sm text-[var(--text-muted)]">Tallest dunes (Erg Chigaga)</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Oct-Apr</div>
              <div className="text-sm text-[var(--text-muted)]">Best months for overnight</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Desert Camps ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Desert Camps in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From sleeping under the open sky to luxury suites among the dunes, choose the camp level that matches your budget and comfort expectations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies during peak months (October-April).
          </p>

          <div className="space-y-12">
            {campTypes.map((camp) => {
              const CampIcon = camp.icon;
              return (
                <div key={camp.title} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <CampIcon className="w-6 h-6" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold">{camp.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{camp.subtitle}</p>
                    <p className="text-white/90 mt-1 font-medium">{camp.bestFor}</p>
                  </div>

                  <div className="p-6">
                    <p className="text-[var(--text-secondary)] mb-6">{camp.overview}</p>

                    {/* Pricing */}
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      <DollarSign className="w-5 h-5 inline text-[var(--color-accent)] mr-1" />
                      Pricing
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Users className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Group</div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">{camp.priceRange.group}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Sparkles className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Private</div>
                        <div className="text-sm font-bold text-[var(--color-gold)]">{camp.priceRange.private}</div>
                      </div>
                    </div>

                    {/* Included & Not Included */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">What Is Included</h4>
                        <div className="space-y-2">
                          {camp.included.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Not Included</h4>
                        <div className="space-y-2">
                          {camp.notIncluded.map((item, i) => (
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

      {/* ── Erg Chebbi vs Erg Chigaga ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Erg Chebbi vs Erg Chigaga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has two outstanding locations for a Sahara overnight. Each delivers a distinct landscape, atmosphere, and level of remoteness.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locationComparison.map((location) => {
              const LocationIcon = location.icon;
              return (
                <div key={location.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-52">
                    <img
                      src={location.image}
                      alt={`Desert camp at ${location.name} in the Sahara Desert, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <LocationIcon className="w-5 h-5" />
                        {location.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-[var(--surface-muted)] p-2 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)]">Dune Height</div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{location.duneHeight}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-2 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)]">Camp Options</div>
                        <div className="text-xs font-bold text-[var(--text-primary)]">{location.campOptions}</div>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4">{location.atmosphere}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Compass className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Access:</strong> {location.access}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Users className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Best for:</strong> {location.bestFor}</span>
                      </div>
                    </div>

                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      <CheckCircle className="w-3 h-3 inline text-green-600 mr-1" />
                      Highlights
                    </h4>
                    <div className="space-y-1.5 mb-4">
                      {location.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      <AlertTriangle className="w-3 h-3 inline text-amber-500 mr-1" />
                      Considerations
                    </h4>
                    <div className="space-y-1.5">
                      {location.considerations.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
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
                    For your first Sahara overnight, choose <strong>Erg Chebbi</strong>. The range of camp options
                    is unmatched, access is easy via paved road, and the golden 150-meter dunes are spectacular.
                    If you have been before or want genuine wilderness solitude, <strong>Erg Chigaga</strong> delivers
                    a more remote and wild experience with even larger dunes, but requires a 4x4 transfer and has
                    fewer camp choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Typical Overnight Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Typical Sahara Overnight Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From afternoon arrival to morning departure, here is what a typical overnight in the Sahara looks like hour by hour.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {itinerary.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={index} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <StepIcon className="w-5 h-5 text-white" />
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="text-xs text-[var(--color-accent)] font-bold mb-1">{step.time}</div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sunset & Sunrise Experience ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Sunset &amp; Sunrise Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The two most magical moments of your Sahara overnight: the fading light of dusk and the first glow of dawn over the dunes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Desert Sunset</h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                As the sun descends around 5:30 to 6:30 PM, the dunes transform through gold, amber, orange, and deep crimson. Your guide leads you to a high dune with panoramic views. The silence deepens as temperature drops and shadows stretch across the sand.
              </p>
              <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <Camera className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>Shoot toward the sun for silhouettes, or away from it for warm-lit dune ridges.</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Sunrise className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Desert Sunrise</h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Wake around 5:30 to 6:00 AM and climb a dune in the cool pre-dawn air. Watch as the horizon shifts from deep blue to pale pink to blazing gold. The first rays catch dune crests and send long shadows cascading down the slopes. Many travelers call this the most beautiful moment of their Morocco trip.
              </p>
              <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <Camera className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>Position yourself with dune ridgelines in the foreground for depth and scale.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stargazing ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sahara Stargazing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is one of the darkest places on earth. After the campfire fades, step into a universe you have never seen before.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="relative h-56">
              <img src="/images/hero-sahara-starry-night.webp" alt="Milky Way galaxy stretching across the sky over Sahara Desert camp in Morocco" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Milky Way Over the Sahara</p>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">What You Will See</h3>
                <div className="space-y-2">
                  {['The Milky Way in vivid detail stretching horizon to horizon', 'Shooting stars every few minutes on clear nights', 'Planets, star clusters, and satellites crossing the sky', 'Constellations your guide can identify and explain'].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Stargazing Tips</h3>
                <div className="space-y-2">
                  {['Book around new moon for the darkest skies and best visibility', 'Allow 20 minutes for your eyes to fully adapt to darkness', 'Avoid phone screens which destroy night vision instantly', 'Bring a mini tripod for astrophotography (15-25 second exposures)'].map((tip) => (
                    <div key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Eye className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Berber Music & Entertainment ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Music &amp; Entertainment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            After dinner, the campfire becomes a stage for ancient Berber musical traditions passed down through generations.
          </p>

          <div className="card-moroccan p-6">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              As darkness falls and the campfire crackles, your Berber hosts bring out traditional drums (bendir
              and tam-tam) and begin singing songs that have echoed across the Sahara for centuries. The music
              starts slowly, building in rhythm and intensity. Guests are invited to join in, clapping along and
              learning simple percussion patterns. Standard and luxury camps offer 30 to 60 minutes of live music.
              Some luxury camps feature Gnawa musicians from nearby Khamlia village, whose trance-like rhythms have
              roots in sub-Saharan African traditions. Premium glamping camps may arrange private performances,
              storytelling sessions, or guided meditation under the stars.
            </p>
          </div>
        </div>
      </section>

      {/* ── Desert Food ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Camp Food &amp; Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Meals cooked over campfire coals in the open desert have a flavor that no restaurant can replicate.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {desertFood.map((food) => {
              const FoodIcon = food.icon;
              return (
                <div key={food.dish} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {food.dish}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{food.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Temperature Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sahara Temperatures by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Desert temperatures swing dramatically between day and night. Knowing what to expect helps you pack the right layers.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {temperatureGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <div className="text-xs text-[var(--text-muted)] mb-1">Day</div>
                      <div className="text-lg font-bold text-[var(--color-accent)]">{season.dayTemp}&deg;C</div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <div className="text-xs text-[var(--text-muted)] mb-1">Night</div>
                      <div className="text-lg font-bold text-[var(--color-gold)]">{season.nightTemp}&deg;C</div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{season.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for a Sahara Overnight
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light in a small daypack. Leave your main luggage in the vehicle. Here is everything you need for one night in the desert.
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

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Book Your Sahara Overnight
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these five steps to plan and book the perfect desert overnight experience in Morocco.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {bookingTips.map((step) => {
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

          {/* Booking safety tips */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Tips for Choosing a Reputable Camp
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Check reviews on Google, TripAdvisor, or GetYourGuide before booking',
                  'Ask for the specific camp name so you can verify reviews independently',
                  'Get written confirmation of inclusions: meals, transport, and camp level',
                  'Never pay full amount upfront to a street tout: use established agencies',
                  'Confirm cancellation policy: reputable operators offer 48-72 hour free cancellation',
                  'Ask about group size: smaller groups (under 10) ensure a better experience',
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    {tip}
                  </div>
                ))}
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
            The Sahara Overnight Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-desert-glamping.webp"
                alt="Luxury glamping tent in the Sahara Desert with Moroccan decor and desert views"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Desert Glamping</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-night.webp"
                alt="Campfire under the stars at a traditional Berber desert camp in the Sahara"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Desert Campfire Night</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-desert-stargazing.webp"
                alt="Stargazing over the Sahara Desert with the Milky Way visible in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Stargazing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">Frequently Asked Questions</h2>
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
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">Related Desert &amp; Adventure Guides</h2>
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
            backgroundImage: 'url(/images/hero-sahara-starry-night.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Sleep Under the Sahara Stars?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The silence of the desert, the warmth of the campfire, and a sky so full of stars it
            takes your breath away. Whether you choose a basic bivouac from 600 MAD or a luxury
            glamping suite, the magic of a Sahara night will stay with you forever.
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
              href="/morocco-camel-trekking"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Camel Trekking Guide
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Contact us for custom trips
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
