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
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Utensils,
  Gem,
  Mountain,
  Sun,
  Calendar,
  Compass,
  Camera,
  Tent,
  Globe,
  Landmark,
  Award,
  BookOpen,
  Crown,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco 7-Day Itinerary 2026 | One Week from Marrakech to Fez via Sahara',
  description:
    'The perfect 7-day Morocco itinerary covering Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, and Fez. Day-by-day plan with budget breakdown, packing tips, transport options, and customizable route variations for one week in Morocco.',
  keywords: [
    '7 days in morocco',
    'morocco 7 day itinerary',
    'one week morocco itinerary',
    'morocco itinerary 7 days',
    'week in morocco',
    'marrakech to fez itinerary',
    'morocco one week trip',
    'morocco 7 day tour',
    'morocco travel itinerary',
    'best morocco itinerary',
    'morocco trip planner',
    'morocco road trip 7 days',
    'sahara desert itinerary morocco',
    'marrakech to sahara to fez',
    'morocco week holiday',
    'morocco travel plan 2026',
  ],
  openGraph: {
    title: 'Morocco 7-Day Itinerary 2026 | One Week from Marrakech to Fez via Sahara',
    description:
      'Complete day-by-day guide for 7 days in Morocco. Marrakech medina, Atlas Mountains, Sahara camel trek, Todra Gorge, and Fez. Budget breakdown, packing tips, and customizable routes included.',
    url: `${BASE_URL}/morocco-7-day-itinerary`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco showing desert dunes, ancient medinas, and Atlas Mountains for a 7-day itinerary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 7-Day Itinerary 2026 | Marrakech to Fez via Sahara',
    description:
      'Day-by-day one-week Morocco itinerary with Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, and Fez. Budget, packing, and route variations included.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-7-day-itinerary` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-7-day-itinerary`,
  name: 'Morocco 7-Day Itinerary 2026 | One Week from Marrakech to Fez via Sahara',
  description:
    'Complete day-by-day guide for spending 7 days in Morocco. Covers Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, and Fez with budget breakdown, packing tips, and customizable route variations.',
  url: `${BASE_URL}/morocco-7-day-itinerary`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-7-day-itinerary`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco 7-Day Itinerary', item: `${BASE_URL}/morocco-7-day-itinerary` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a 7-day trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget 7-day Morocco trip costs from 4,500 to 6,500 MAD (approximately 450 to 650 USD) per person. This includes budget riads, local food, shared transport, and a Sahara desert tour. Mid-range travelers should budget from 8,000 to 14,000 MAD (800 to 1,400 USD) for private transport, nicer riads, and guided tours. Luxury trips can exceed 25,000 MAD per person. Prices vary seasonally and are subject to change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Morocco for 7 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time for a one-week Morocco itinerary is spring (March to May) or autumn (September to November). Temperatures are comfortable for both city sightseeing and desert excursions, typically 20 to 28 degrees Celsius. Summer (June to August) brings extreme heat in the Sahara and Marrakech, exceeding 40 degrees. Winter (December to February) is mild but Atlas Mountain passes may have snow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do Morocco in 7 days without a tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can explore Morocco independently for 7 days. Use CTM or Supratours buses between cities, book riads directly, and hire local guides for the Sahara desert tour (which is the one part most travelers book as a package). Independent travel gives more flexibility and typically costs less, though you will need to arrange your own Sahara logistics since self-driving in the desert is not recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 7 days enough for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seven days is enough for a rewarding Morocco trip covering the classic Marrakech to Fez route via the Sahara Desert. You will see imperial cities, mountains, desert, and gorges. However, you will need to be efficient with your time. If you want to add coastal destinations like Essaouira or Chefchaouen, consider extending to 10 to 14 days for a more relaxed pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I start my 7-day Morocco itinerary in Marrakech or Fez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most travelers start in Marrakech because it has more international flight connections and the route flows naturally east toward the Sahara and then north to Fez. Starting in Fez works equally well if you find cheaper flights there. The Marrakech-to-Fez direction means you end in a calmer city after the adventure of the desert, which many travelers prefer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa for a 7-day trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of the USA, UK, EU, Canada, Australia, and many other countries do not need a visa for stays up to 90 days in Morocco. You only need a valid passport with at least six months validity remaining. Check the Moroccan consulate website for your specific nationality, as visa requirements can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for one week in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack lightweight layers for temperature swings between hot days and cool desert nights. Essentials include comfortable walking shoes, a scarf or shawl for mosque visits, sunscreen, a warm jacket for Sahara nights and Atlas Mountain elevations, and a daypack. Women should bring modest clothing covering shoulders and knees for medina visits. A headlamp is useful for the desert bivouac.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: AT-A-GLANCE OVERVIEW
   ═══════════════════════════════════════════════════════════════ */

const tripOverview = [
  { label: 'Duration', value: '7 days / 6 nights', icon: Calendar },
  { label: 'Route', value: 'Marrakech - Sahara - Fez', icon: Compass },
  { label: 'Budget (mid-range)', value: 'From 8,000 MAD per person', icon: DollarSign },
  { label: 'Best Season', value: 'March-May / Sep-Nov', icon: Sun },
  { label: 'Transport', value: 'Private car, bus, or tour', icon: Globe },
  { label: 'Difficulty', value: 'Easy to moderate', icon: Mountain },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAILY ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const dailyItinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    subtitle: 'Medina, Jemaa el-Fnaa & Riad Check-in',
    icon: Landmark,
    image: '/images/hero-marrakech.webp',
    imageAlt: 'Jemaa el-Fnaa square in Marrakech at sunset with bustling market stalls and street performers',
    description:
      'Arrive at Marrakech Menara Airport and transfer to your riad in the medina. After settling in, begin exploring the UNESCO-listed medina on foot. The narrow, winding alleyways lead to hidden courtyards, artisan workshops, and centuries-old mosques.',
    highlights: [
      'Check into a traditional riad with a courtyard and rooftop terrace',
      'Walk to Jemaa el-Fnaa square for the legendary evening spectacle',
      'Sample street food: snail soup, fresh-squeezed orange juice, grilled meats',
      'Watch snake charmers, musicians, and storytellers as the square comes alive at dusk',
      'Wander the northern souks near the square for a first taste of Moroccan shopping',
    ],
    tips: 'Arrive before 4 PM if possible to enjoy the golden hour on the square. Pre-arrange airport pickup through your riad (from 100 MAD) to avoid taxi hassles.',
    budget: 'Riad from 300 MAD, street food dinner from 50 MAD, airport transfer from 100 MAD',
  },
  {
    day: 2,
    title: 'Full Day in Marrakech',
    subtitle: 'Bahia Palace, Saadian Tombs, Souks & Hammam',
    icon: Crown,
    image: '/images/hero-bahia-palace.webp',
    imageAlt: 'Ornate tilework and carved stucco details inside Bahia Palace in Marrakech',
    description:
      'Dedicate your second day to Marrakech\'s major monuments and the sensory overload of the souks. This city rewards slow exploration, so take your time getting lost in the medina\'s labyrinthine streets.',
    highlights: [
      'Visit Bahia Palace for stunning zellige tilework and painted cedarwood ceilings',
      'Explore the Saadian Tombs, hidden for centuries and rediscovered in 1917',
      'Get lost in the color-coded souks: leather, spices, carpets, metalwork, textiles',
      'Visit Ben Youssef Madrasa, a masterpiece of Moorish architecture',
      'End the day with a traditional hammam experience for total relaxation',
    ],
    tips: 'Visit monuments early morning (opening at 9 AM) to beat the crowds. A local guide costs from 300 MAD for a half-day medina tour and can save hours of getting lost.',
    budget: 'Bahia Palace from 70 MAD, Saadian Tombs from 70 MAD, hammam from 150 MAD, lunch from 60 MAD',
  },
  {
    day: 3,
    title: 'Atlas Mountains & Drive to Sahara',
    subtitle: 'High Atlas Pass, Ait Benhaddou & Ouarzazate',
    icon: Mountain,
    image: '/images/hero-ait-benhaddou-sunset.webp',
    imageAlt: 'UNESCO World Heritage Site Ait Benhaddou kasbah with Atlas Mountains in the background',
    description:
      'Leave Marrakech early and cross the spectacular Tizi n\'Tichka pass at 2,260 meters. The winding road through the High Atlas offers breathtaking panoramas. Stop at the UNESCO-listed Ait Benhaddou kasbah, then continue to the Dades Valley.',
    highlights: [
      'Cross Tizi n\'Tichka, the highest paved pass in North Africa at 2,260m',
      'Stop at Berber villages and roadside stalls selling minerals and fossils',
      'Explore Ait Benhaddou, the film-set kasbah featured in Gladiator and Game of Thrones',
      'Pass through Ouarzazate, the "Gateway to the Sahara"',
      'Drive the stunning Road of a Thousand Kasbahs through the Dades Valley',
    ],
    tips: 'This is a long driving day (roughly 6 to 8 hours depending on stops). If self-driving, leave Marrakech by 7 AM. Most Sahara tours include this route with hotel pickup.',
    budget: 'Ait Benhaddou guide from 100 MAD, lunch en route from 50 MAD, overnight Dades or Tinghir from 250 MAD',
  },
  {
    day: 4,
    title: 'Sahara Desert Experience',
    subtitle: 'Camel Trek, Sunset & Overnight Bivouac at Erg Chebbi',
    icon: Tent,
    image: '/images/hero-camel-caravan-sahara.webp',
    imageAlt: 'Camel caravan crossing golden sand dunes at sunset in the Sahara Desert near Merzouga',
    description:
      'The highlight of any Morocco trip: riding camels into the Sahara Desert. Continue from the Dades or Todra area to Merzouga, where the towering Erg Chebbi dunes reach 150 meters high. In the late afternoon, mount your camel and trek into the sea of golden sand.',
    highlights: [
      'Arrive at Merzouga and meet your desert guides at the edge of Erg Chebbi',
      'Ride camels for 90 minutes into the heart of the dunes at golden hour',
      'Watch one of the most spectacular sunsets of your life from a dune summit',
      'Enjoy a traditional Berber dinner under a blanket of stars in a desert bivouac',
      'Experience absolute silence and a sky filled with thousands of visible stars',
      'Optional: sandboarding on the dunes, or wake for sunrise over the Sahara',
    ],
    tips: 'Luxury desert camps have private tents with real beds and en-suite bathrooms (from 800 MAD per person). Basic bivouacs start from 250 MAD. Bring a warm layer as desert nights drop to near freezing in winter.',
    budget: 'Desert tour with camel trek and bivouac from 350 MAD (basic) to 1,500 MAD (luxury camp)',
  },
  {
    day: 5,
    title: 'Todra Gorge & Drive to Fez',
    subtitle: 'Canyon Hike, Berber Villages & Midelt Stop',
    icon: Compass,
    image: '/images/hero-todra-gorge-canyon.webp',
    imageAlt: 'Towering red canyon walls of Todra Gorge with narrow passage and clear river below',
    description:
      'After a magical Sahara sunrise, ride camels back and begin the journey north toward Fez. Stop at the dramatic Todra Gorge, where 300-meter canyon walls narrow to just 10 meters apart. The drive passes through ever-changing landscapes, from palm oases to cedar forests.',
    highlights: [
      'Catch sunrise over the Sahara dunes before departing Merzouga',
      'Walk through the dramatic narrow passage of Todra Gorge',
      'Pass through the Ziz Valley with its ancient palm groves and red kasbahs',
      'Stop in Midelt, the "apple capital" at the foot of Jebel Ayachi',
      'Cross the Middle Atlas with possible Barbary macaque sightings near Ifrane',
      'Arrive in Fez by evening and check into a medina riad',
    ],
    tips: 'This is another long driving day (approximately 8 to 9 hours). Most organized tours break this journey with generous stops. If driving independently, consider an overnight in Midelt to split the journey.',
    budget: 'Todra Gorge free entry, lunch in Midelt from 40 MAD, Fez riad from 300 MAD',
  },
  {
    day: 6,
    title: 'Full Day in Fez',
    subtitle: 'Fes el-Bali Medina, Tanneries, Bou Inania & Dar Batha',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    imageAlt: 'Labyrinthine alleyways of the Fes el-Bali medina with artisan workshops and colorful goods',
    description:
      'Fez is Morocco\'s spiritual and cultural capital, home to the world\'s oldest university and the largest car-free urban area on Earth. The Fes el-Bali medina is a UNESCO World Heritage Site with over 9,000 alleyways, and getting happily lost is part of the experience.',
    highlights: [
      'Hire a local guide to navigate the labyrinthine Fes el-Bali medina',
      'Visit the Chouara tanneries from a leather shop terrace for the iconic view',
      'Explore Bou Inania Madrasa, a masterpiece of Marinid-era Islamic architecture',
      'Visit Dar Batha Museum for its collection of Fassi ceramics and woodwork',
      'Walk past the Al-Qarawiyyin University, founded in 859 AD',
      'Shop for Fez specialties: blue ceramics, embroidered fabrics, and brass lanterns',
      'Enjoy a traditional Fassi dinner with pastilla and slow-cooked tangia',
    ],
    tips: 'A medina guide is highly recommended in Fez (from 350 MAD for a full day). The medina GPS can be unreliable. Visit the tanneries in the morning when the light is best for photos. Carry a sprig of mint offered by the leather shop to counter the smell.',
    budget: 'Bou Inania from 30 MAD, Dar Batha from 20 MAD, guide from 350 MAD, lunch from 60 MAD',
  },
  {
    day: 7,
    title: 'Departure or Chefchaouen Extension',
    subtitle: 'Last Fez Exploration & Optional Blue City Side Trip',
    icon: Globe,
    image: '/images/hero-fes.webp',
    imageAlt: 'Panoramic view of the Fez medina skyline with minarets and traditional rooftops',
    description:
      'Your final day offers flexibility. If departing from Fez, spend the morning exploring the Ville Nouvelle, Borj Nord viewpoint, or picking up last-minute souvenirs. Alternatively, if your schedule allows, take a day trip or extend your stay to visit Chefchaouen, the famous Blue City.',
    highlights: [
      'Visit the Borj Nord fortress for panoramic views over the entire medina',
      'Browse the Mellah (Jewish quarter) for antique shops and Fez\'s oldest synagogue',
      'Enjoy a leisurely breakfast on a riad rooftop terrace overlooking the medina',
      'Optional: 4-hour drive to Chefchaouen for the iconic blue-washed streets',
      'Transfer to Fez-Saiss Airport or Fez train station for onward travel',
    ],
    tips: 'Flights from Fez connect to major European hubs. The train to Casablanca takes about 4 hours (from 165 MAD). If extending to Chefchaouen, plan at least one overnight to enjoy the town properly.',
    budget: 'Borj Nord from 20 MAD, taxi to airport from 100 MAD, Chefchaouen bus from 75 MAD',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  { category: 'Accommodation (6 nights)', budget: 'From 1,500 MAD', midRange: 'From 3,000 MAD', luxury: 'From 7,000 MAD', icon: Building },
  { category: 'Food & Drinks (7 days)', budget: 'From 700 MAD', midRange: 'From 1,500 MAD', luxury: 'From 3,500 MAD', icon: Utensils },
  { category: 'Transport (all routes)', budget: 'From 800 MAD', midRange: 'From 2,500 MAD', luxury: 'From 5,000 MAD', icon: Compass },
  { category: 'Sahara Desert Tour', budget: 'From 350 MAD', midRange: 'From 800 MAD', luxury: 'From 2,500 MAD', icon: Tent },
  { category: 'Entrance Fees & Guides', budget: 'From 400 MAD', midRange: 'From 800 MAD', luxury: 'From 1,500 MAD', icon: Landmark },
  { category: 'Shopping & Extras', budget: 'From 300 MAD', midRange: 'From 800 MAD', luxury: 'From 2,500 MAD', icon: Gem },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  { item: 'Comfortable walking shoes', reason: 'Medina streets are uneven cobblestones and can be slippery', icon: CheckCircle },
  { item: 'Light layers & warm jacket', reason: 'Desert nights drop to near freezing; Atlas passes are cool even in summer', icon: Sun },
  { item: 'Scarf or shawl', reason: 'Useful for sun protection, mosque visits, and as a sand shield in the desert', icon: ShieldCheck },
  { item: 'Sunscreen & sunglasses', reason: 'Intense Moroccan sun, especially in the desert and mountains', icon: Sun },
  { item: 'Daypack (20-30L)', reason: 'Carry water, camera, and layers during day trips and the camel trek', icon: Compass },
  { item: 'Headlamp or flashlight', reason: 'Essential for the desert bivouac and navigating dark medina alleyways', icon: Star },
  { item: 'Modest clothing', reason: 'Cover shoulders and knees in medinas and religious sites as a sign of respect', icon: Heart },
  { item: 'Reusable water bottle', reason: 'Refill at riads and restaurants to reduce plastic waste', icon: CheckCircle },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROUTE VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const routeVariations = [
  {
    name: 'Beach & Coast Version',
    icon: Sun,
    description: 'Replace Days 3 and 4 with Essaouira (coastal town, 3 hours from Marrakech). Spend two days surfing, exploring the medina, and eating fresh seafood. Then fly from Marrakech to Fez for Days 6 and 7.',
    bestFor: 'Surfers, beach lovers, and those who prefer ocean over desert',
  },
  {
    name: 'Culture & Cities Version',
    icon: Landmark,
    description: 'Skip the Sahara and spend extra days in Marrakech (3 days), Rabat (1 day), Meknes and Volubilis (1 day), then Fez (2 days). This covers three of Morocco\'s four imperial cities plus Roman ruins.',
    bestFor: 'History buffs, museum lovers, and travelers who prefer cities',
  },
  {
    name: 'Adventure & Outdoors Version',
    icon: Mountain,
    description: 'Add a Toubkal Base Camp trek on Day 3, then head to the Sahara for sandboarding and overnight camping. Include rock climbing at Todra Gorge on Day 5. Swap Fez city touring for a mountain bike ride through Ifrane cedar forests.',
    bestFor: 'Active travelers, hikers, and outdoor enthusiasts seeking adrenaline',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const accommodationTips = [
  {
    type: 'Traditional Riads',
    icon: Heart,
    description:
      'Stay in a converted courtyard house in the medina. Riads offer rooftop terraces, traditional Moroccan breakfasts, and an authentic experience. Many are family-run with exceptional hospitality. Book directly for better rates.',
    priceRange: 'From 200 MAD (budget) to 2,000 MAD (luxury) per night',
    bestFor: 'Atmosphere, culture, and central medina location',
  },
  {
    type: 'Desert Bivouac Camps',
    icon: Tent,
    description:
      'Overnight in the Sahara ranges from basic nomad-style tents with shared facilities to luxury glamping with private bathrooms, heated pools, and gourmet dining. Even basic camps provide an unforgettable stargazing experience.',
    priceRange: 'From 250 MAD (basic) to 2,500 MAD (luxury) per person per night',
    bestFor: 'The ultimate desert experience on Day 4',
  },
  {
    type: 'Guesthouses & Kasbahs',
    icon: Building,
    description:
      'Along the southern route, converted kasbahs and small guesthouses offer character-filled stays in the Dades Valley, Todra Gorge, and Ouarzazate. Expect thick earthen walls, terraces with mountain views, and home-cooked Berber meals.',
    priceRange: 'From 150 MAD to 800 MAD per night',
    bestFor: 'Scenic stops between Marrakech and the desert',
  },
  {
    type: 'Hotels & Hostels',
    icon: Users,
    description:
      'Modern hotels are available in the Ville Nouvelle areas of Marrakech and Fez. Hostels with dormitory beds offer the cheapest option. Both lack medina charm but provide reliable Wi-Fi, air conditioning, and familiar amenities.',
    priceRange: 'From 80 MAD (hostel dorm) to 1,500 MAD (4-star hotel) per night',
    bestFor: 'Budget travelers and those who prefer modern comforts',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MUST-TRY FOODS
   ═══════════════════════════════════════════════════════════════ */

const mustTryFoods = [
  {
    name: 'Tagine',
    description: 'Slow-cooked stew in a conical clay pot. Try chicken with preserved lemons and olives in Marrakech, and lamb with prunes in Fez.',
    where: 'Everywhere along the route',
    price: 'From 40 MAD in local spots, from 100 MAD in tourist restaurants',
    icon: Utensils,
  },
  {
    name: 'Pastilla (B\'stilla)',
    description: 'Sweet and savory pie with pigeon or chicken, almonds, cinnamon, and flaky warqa pastry. A Fassi specialty you must try on Day 6 in Fez.',
    where: 'Fez is the birthplace, available across Morocco',
    price: 'From 50 MAD per portion',
    icon: Award,
  },
  {
    name: 'Tanjia',
    description: 'Marrakech\'s answer to slow cooking: spiced meat sealed in an earthenware jug and cooked for hours in the embers of a hammam furnace.',
    where: 'Marrakech only (Day 1-2)',
    price: 'From 80 MAD per person',
    icon: Utensils,
  },
  {
    name: 'Berber Omelette',
    description: 'A hearty breakfast of eggs cooked with tomatoes, peppers, onions, and spices in a tagine dish. The perfect fuel before a long day of exploration.',
    where: 'Riads and cafes throughout the route',
    price: 'From 25 MAD',
    icon: Sun,
  },
  {
    name: 'Mint Tea & Street Snacks',
    description: 'Sweet mint tea is served everywhere. Pair it with msemen (layered flatbread), fresh orange juice (from 5 MAD), and snail soup at Jemaa el-Fnaa.',
    where: 'Every city and roadside stop',
    price: 'Tea from 10 MAD, snacks from 5 MAD',
    icon: Star,
  },
  {
    name: 'Mechoui',
    description: 'Whole lamb slow-roasted in an underground clay oven until the meat falls off the bone. A communal feast best experienced in the Marrakech mechoui alley near Jemaa el-Fnaa.',
    where: 'Marrakech mechoui alley (Day 1-2)',
    price: 'From 60 MAD per portion',
    icon: Crown,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CROSS-LINKS
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Morocco 3-Day Itinerary', href: '/morocco-3-day-itinerary', icon: Calendar, description: 'Short on time? Our 3-day itinerary covers Marrakech highlights.' },
  { title: 'Morocco 10-Day Itinerary', href: '/morocco-itinerary-10-days', icon: Compass, description: 'Extend to 10 days and add Essaouira or Chefchaouen.' },
  { title: 'Morocco Budget Guide', href: '/morocco-budget-guide', icon: DollarSign, description: 'How to travel Morocco on a tight budget with tips and costs.' },
  { title: 'Sahara Desert Guide', href: '/morocco-sahara-guide', icon: Tent, description: 'Everything about Sahara tours, desert camps, and camel treks.' },
  { title: 'Morocco Packing List', href: '/morocco-packing-list', icon: CheckCircle, description: 'Complete packing guide for every season and activity.' },
  { title: 'Things to Do in Marrakech', href: '/things-to-do-marrakech', icon: Star, description: 'Full guide to Marrakech attractions, food, and experiences.' },
  { title: 'Things to Do in Fez', href: '/things-to-do-fes', icon: Building, description: 'Explore the world\'s largest car-free medina and Fassi culture.' },
  { title: 'Morocco Travel Tips', href: '/morocco-travel-tips', icon: Info, description: 'First-timer tips for safety, money, language, and culture.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Morocco7DayItineraryPage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco 7-Day Itinerary</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            7-Day Travel Itinerary
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco 7-Day Itinerary:
            <br className="hidden md:block" /> Marrakech to Fez via Sahara
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8 font-[family-name:var(--font-heading)]">
            The ultimate one-week Morocco route covering ancient medinas, soaring Atlas Mountain passes, golden Sahara dunes, dramatic gorges, and centuries of history. Day-by-day plan with budget, tips, and flexible route options.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated March 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 20 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Marrakech to Fez</span>
          </div>
        </div>
      </section>

      {/* ── Trip At-a-Glance ── */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="container-morocco">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
            Your Week in Morocco at a Glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tripOverview.map((item) => (
              <div key={item.label} className="card-moroccan p-4 text-center">
                <item.icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-accent)]" />
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-[family-name:var(--font-heading)]">{item.label}</p>
                <p className="text-sm font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-gray-900">
                Why This 7-Day Morocco Itinerary Works
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                This classic Marrakech-to-Fez route is the most popular week-long itinerary in Morocco for good reason. It threads together the country&apos;s greatest highlights in a logical geographic arc: start in the vibrant south, cross the dramatic Atlas Mountains, dip into the Sahara Desert for a once-in-a-lifetime night under the stars, wind through jaw-dropping gorges, and finish in the medieval labyrinth of Fez.
              </p>
              <p>
                The route avoids backtracking because you fly into Marrakech and out of Fez (or take a train back), making every travel day double as a sightseeing day. Whether you are a first-time visitor or returning for a deeper dive, this one-week Morocco itinerary balances culture, adventure, and relaxation without feeling rushed.
              </p>
              <p className="text-sm text-gray-500 italic">
                Note: All prices listed are approximate and based on 2026 rates. Seasonal pricing, inflation, and exchange rate fluctuations can affect costs. Always confirm current prices before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Route Map Overview ── */}
      <section className="py-8 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 zellige-border">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              Route Overview
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <span className="font-semibold text-[var(--color-accent)]">Marrakech</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>Tizi n&apos;Tichka Pass</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>Ait Benhaddou</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>Dades Valley</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="font-semibold text-[var(--color-accent)]">Merzouga (Sahara)</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>Todra Gorge</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>Midelt</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>Ifrane</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="font-semibold text-[var(--color-accent)]">Fez</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">Total driving distance: approximately 1,100 km over 7 days</p>
          </div>
        </div>
      </section>

      {/* ── Day-by-Day Itinerary ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-10 text-center">
            Day-by-Day Morocco Itinerary
          </h2>
          <div className="space-y-10">
            {dailyItinerary.map((day) => (
              <article key={day.day} className="card-moroccan overflow-hidden" id={`day-${day.day}`}>
                <div className="relative h-56 md:h-64">
                  <img
                    src={day.image}
                    alt={day.imageAlt}
                    className="w-full h-full object-cover"
                    loading={day.day <= 2 ? 'eager' : 'lazy'}
                    width={800}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold mb-2">
                      <day.icon className="w-4 h-4" />
                      Day {day.day}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-white">
                      {day.title}
                    </h3>
                    <p className="text-white/80 text-sm font-[family-name:var(--font-heading)]">{day.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{day.description}</p>
                  <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-gold)]" />
                    Highlights
                  </h4>
                  <ul className="space-y-2 mb-5">
                    {day.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1 font-[family-name:var(--font-heading)]">
                        <ShieldCheck className="w-3.5 h-3.5 inline mr-1" />Insider Tip
                      </p>
                      <p className="text-sm text-gray-600">{day.tips}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1 font-[family-name:var(--font-heading)]">
                        <DollarSign className="w-3.5 h-3.5 inline mr-1" />Day Budget
                      </p>
                      <p className="text-sm text-gray-600">{day.budget}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            7-Day Morocco Budget Breakdown
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            How much does one week in Morocco cost? Here is a realistic breakdown per person based on 2026 prices. Seasonal pricing can change, so always confirm current rates.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)]">Category</th>
                    <th className="text-center p-4 font-[family-name:var(--font-heading)]">Budget</th>
                    <th className="text-center p-4 font-[family-name:var(--font-heading)]">Mid-Range</th>
                    <th className="text-center p-4 font-[family-name:var(--font-heading)]">Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetBreakdown.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-gray-900 flex items-center gap-2">
                        <row.icon className="w-4 h-4 text-[var(--color-accent)]" />
                        {row.category}
                      </td>
                      <td className="p-4 text-center text-gray-700">{row.budget}</td>
                      <td className="p-4 text-center text-gray-700">{row.midRange}</td>
                      <td className="p-4 text-center text-gray-700">{row.luxury}</td>
                    </tr>
                  ))}
                  <tr className="bg-[var(--color-accent)]/10 font-bold">
                    <td className="p-4 text-gray-900">Total (per person)</td>
                    <td className="p-4 text-center text-gray-900">From 4,050 MAD</td>
                    <td className="p-4 text-center text-gray-900">From 9,400 MAD</td>
                    <td className="p-4 text-center text-gray-900">From 22,000 MAD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4 italic">
            Prices are per person in Moroccan Dirhams (MAD). 1 USD is approximately 10 MAD. International flights not included. Prices reflect 2026 estimates and are subject to seasonal variation.
          </p>
        </div>
      </section>

      {/* ── Packing Tips ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            What to Pack for 7 Days in Morocco
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Morocco&apos;s diverse terrain means you will experience medina heat, mountain cool, and desert extremes all in one week. Pack smart with these essentials.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {packingEssentials.map((item) => (
              <div key={item.item} className="card-moroccan p-5 flex items-start gap-4">
                <item.icon className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-1">{item.item}</h4>
                  <p className="text-sm text-gray-600">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/morocco-packing-list"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
            >
              View our complete Morocco packing list <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Route Variations ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            How to Customize Your Week in Morocco
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            The classic Marrakech-to-Fez route is just one way to spend 7 days in Morocco. Here are three alternative versions depending on your travel style.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {routeVariations.map((variant) => (
              <div key={variant.name} className="card-moroccan p-6">
                <variant.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-gray-900 mb-2">{variant.name}</h3>
                <p className="text-sm text-gray-700 mb-3">{variant.description}</p>
                <p className="text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wide">
                  <Users className="w-3.5 h-3.5 inline mr-1" />
                  {variant.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport Options ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
            Getting Around: Transport Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 text-center">
              <Award className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-gray-900 mb-2">Organized Tour</h3>
              <p className="text-sm text-gray-700 mb-3">
                The easiest option. A driver picks you up from your riad and handles all logistics for the Marrakech-to-Fez route including the Sahara. Typically 3 to 4 days, with free days in each city.
              </p>
              <p className="text-sm font-semibold text-[var(--color-accent)]">From 2,500 MAD per person (shared)</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Compass className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-gray-900 mb-2">Self-Drive Rental</h3>
              <p className="text-sm text-gray-700 mb-3">
                Maximum flexibility. Rent a car in Marrakech and drop off in Fez. Mountain roads are paved but winding. International license required. Do not self-drive in the Sahara sand dunes.
              </p>
              <p className="text-sm font-semibold text-[var(--color-accent)]">From 300 MAD per day plus fuel</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Globe className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-gray-900 mb-2">Buses & Shared Transport</h3>
              <p className="text-sm text-gray-700 mb-3">
                CTM and Supratours buses connect major cities. Combine bus travel for city-to-city legs with a group Sahara tour from Merzouga. The most budget-friendly option.
              </p>
              <p className="text-sm font-semibold text-[var(--color-accent)]">From 80 MAD per bus leg</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essential Tips ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
            Essential Tips for Your 7-Day Morocco Trip
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                Money & Bargaining
              </h4>
              <p className="text-sm text-gray-700">
                Carry cash in Moroccan Dirhams (MAD). ATMs are available in all cities but scarce in the desert and small towns. Bargaining is expected in souks: start at 30 to 40 percent of the asking price and meet in the middle. Fixed-price shops exist in the Ville Nouvelle areas.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                Safety & Scams
              </h4>
              <p className="text-sm text-gray-700">
                Morocco is generally safe for tourists. Common scams include fake guides, henna traps, and overpriced taxis. Use the meter or agree on a price before getting in. Be firm but polite when declining persistent sellers in the medinas.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Camera className="w-5 h-5 text-[var(--color-accent)]" />
                Photography Etiquette
              </h4>
              <p className="text-sm text-gray-700">
                Always ask before photographing locals, especially women and market workers. Some performers at Jemaa el-Fnaa will demand tips if you photograph them. Drones require government permission and are restricted near military areas and royal palaces.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
                Language Basics
              </h4>
              <p className="text-sm text-gray-700">
                Arabic and Tamazight are official languages. French is widely spoken. English is common in tourist areas. Learn a few words: &quot;Salam&quot; (hello), &quot;Shukran&quot; (thank you), &quot;La&quot; (no), &quot;Bslama&quot; (goodbye). Locals appreciate any effort to speak Arabic or Tamazight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            Where to Stay: Accommodation Guide
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Your 7-day Morocco itinerary includes 6 nights across different accommodation types. Here is what to expect at each stage of the journey.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {accommodationTips.map((acc) => (
              <div key={acc.type} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <acc.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900">{acc.type}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">{acc.description}</p>
                <div className="flex flex-col gap-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" /> {acc.priceRange}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> Best for: {acc.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Must-Try Foods ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            Must-Try Foods During Your Week
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Moroccan cuisine is one of the highlights of any trip. Here are the dishes you absolutely cannot miss during your 7 days. Prices may vary by season and location.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mustTryFoods.map((food) => (
              <div key={food.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <food.icon className="w-5 h-5 text-[var(--color-gold)]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900">{food.name}</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2">{food.description}</p>
                <p className="text-xs text-gray-500">
                  <MapPin className="w-3 h-3 inline mr-1" />{food.where}
                </p>
                <p className="text-xs text-[var(--color-accent)] font-semibold mt-1">{food.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Reference Table ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            7-Day Quick Reference
          </h2>
          <p className="text-center text-gray-600 mb-8 font-[family-name:var(--font-heading)]">
            A handy summary of each day at a glance. Save or screenshot this for your trip.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-3 font-[family-name:var(--font-heading)]">Day</th>
                    <th className="text-left p-3 font-[family-name:var(--font-heading)]">Location</th>
                    <th className="text-left p-3 font-[family-name:var(--font-heading)]">Top Highlight</th>
                    <th className="text-left p-3 font-[family-name:var(--font-heading)]">Sleep</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-[var(--color-accent)]">1</td>
                    <td className="p-3 text-gray-900">Marrakech</td>
                    <td className="p-3 text-gray-700">Jemaa el-Fnaa square at sunset</td>
                    <td className="p-3 text-gray-600">Riad in medina</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-bold text-[var(--color-accent)]">2</td>
                    <td className="p-3 text-gray-900">Marrakech</td>
                    <td className="p-3 text-gray-700">Bahia Palace and souks</td>
                    <td className="p-3 text-gray-600">Riad in medina</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-[var(--color-accent)]">3</td>
                    <td className="p-3 text-gray-900">Atlas to Dades</td>
                    <td className="p-3 text-gray-700">Ait Benhaddou kasbah</td>
                    <td className="p-3 text-gray-600">Guesthouse in Dades</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-bold text-[var(--color-accent)]">4</td>
                    <td className="p-3 text-gray-900">Sahara Desert</td>
                    <td className="p-3 text-gray-700">Camel trek and star bivouac</td>
                    <td className="p-3 text-gray-600">Desert camp</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-[var(--color-accent)]">5</td>
                    <td className="p-3 text-gray-900">Todra to Fez</td>
                    <td className="p-3 text-gray-700">Todra Gorge canyon walk</td>
                    <td className="p-3 text-gray-600">Riad in Fez</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-bold text-[var(--color-accent)]">6</td>
                    <td className="p-3 text-gray-900">Fez</td>
                    <td className="p-3 text-gray-700">Medina, tanneries, and Bou Inania</td>
                    <td className="p-3 text-gray-600">Riad in Fez</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-bold text-[var(--color-accent)]">7</td>
                    <td className="p-3 text-gray-900">Fez / Depart</td>
                    <td className="p-3 text-gray-700">Borj Nord viewpoint or Chefchaouen</td>
                    <td className="p-3 text-gray-600">Departure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <details key={i} className="card-moroccan group" open={i === 0}>
                <summary className="p-5 cursor-pointer flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                  <Info className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 flex-1">
                    {faq.name}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 pl-12">
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4 text-center">
            Continue Planning Your Morocco Trip
          </h2>
          <p className="text-center text-gray-600 mb-8 font-[family-name:var(--font-heading)]">
            Explore more guides to make your one-week Morocco itinerary even better.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <guide.icon className="w-6 h-6 text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-1 group-hover:text-[var(--color-accent)] transition-colors text-sm">
                  {guide.title}
                </h3>
                <p className="text-xs text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco text-center max-w-3xl">
          <Sparkles className="w-10 h-10 text-[var(--color-gold)] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-gray-900 mb-4">
            Ready for Your 7 Days in Morocco?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-[family-name:var(--font-heading)]">
            From the bustling souks of Marrakech to the silent vastness of the Sahara and the ancient medina of Fez, your perfect week in Morocco awaits. Start planning today and create memories that last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/things-to-do-marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/morocco-sahara-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              <Tent className="w-5 h-5" />
              Sahara Desert Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
