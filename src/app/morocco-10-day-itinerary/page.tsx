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
  Sun,
  Moon,
  Mountain,
  Tent,
  Building,
  Bus,
  Utensils,
  Camera,
  Compass,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Calendar,
  Sunrise,
  Sunset,
  Map,
  Navigation,
  Footprints,
  Wallet,
  ShieldCheck,
  MessageCircleQuestion,
  Bed,
  Coffee,
  ShoppingBag,
  Landmark,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-10-day-itinerary`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco 10-Day Itinerary 2026 | Day-by-Day Travel Plan with Budget Breakdown',
  description:
    'Complete 10-day Morocco itinerary covering Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen. Day-by-day plan with morning and afternoon activities, accommodation picks, transport options, and budget/mid-range/luxury cost breakdowns from 6,500 MAD.',
  keywords: [
    'Morocco 10 day itinerary',
    '10 days in Morocco',
    'Morocco travel itinerary',
    'Morocco 10 day trip',
    'Morocco route planner',
    'Marrakech to Fes itinerary',
    'Morocco Sahara desert itinerary',
    'Morocco day by day plan',
    'Morocco travel plan 2026',
    'best Morocco itinerary',
    'Morocco budget itinerary',
    'Morocco luxury itinerary',
    'Chefchaouen itinerary',
    'Atlas Mountains day trip',
    'Todra Gorge Morocco',
    'Morocco 10 day budget breakdown',
    'Morocco transport guide',
    'Morocco accommodation guide',
  ],
  openGraph: {
    title: 'Morocco 10-Day Itinerary 2026 | Day-by-Day Travel Plan with Budget Breakdown',
    description:
      'The definitive 10-day Morocco route: Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen. Includes daily schedules, accommodation recommendations, transport logistics, and three-tier budget breakdowns.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco showing desert dunes, mountain peaks, and ancient medina walls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 10-Day Itinerary 2026 | Complete Day-by-Day Plan',
    description:
      'Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes & Chefchaouen in 10 days. Daily schedules, accommodation, transport, and budget breakdowns from 6,500 MAD.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is 10 days enough for Morocco?',
    a: 'Ten days is the ideal minimum for covering Morocco\'s highlights without rushing. You can comfortably visit Marrakech, the Atlas Mountains, the Sahara Desert, Todra Gorge, Fes, and Chefchaouen. With fewer days, you\'d need to cut at least one major destination. If you have 14 days, you could add Essaouira or Rabat.',
  },
  {
    q: 'How much does a 10-day Morocco trip cost?',
    a: 'A budget 10-day trip costs from 6,500 MAD (roughly 650 USD) per person covering hostels, street food, and shared transport. Mid-range travelers spend from 15,000 MAD (1,500 USD) with riad stays and private tours. Luxury trips run from 35,000 MAD (3,500 USD) and up, including boutique hotels, private guides, and fine dining. Seasonal pricing can change during peak months like December and April.',
  },
  {
    q: 'Should I book a guided tour or travel independently in Morocco?',
    a: 'Both work well. Independent travel gives you flexibility and saves money. The Sahara Desert segment is the one part where most travelers book a tour, since navigating the desert roads and arranging camel treks independently is logistically difficult. For the rest of the route, public transport (CTM buses, trains) connects all major cities efficiently.',
  },
  {
    q: 'What is the best time of year for this 10-day itinerary?',
    a: 'March to May and September to November offer the best combination of comfortable temperatures for all destinations on this route. Summer (June-August) makes the desert unbearable with temperatures above 45C. Winter (December-February) is fine for cities but cold in the Atlas Mountains and desert nights can drop below freezing.',
  },
  {
    q: 'Is the Marrakech to Fes desert route safe?',
    a: 'Yes, the Marrakech-to-Fes route through the desert is well-traveled and safe. The N10 and N13 highways are paved and in good condition. Tour operators run this route daily. Solo female travelers and families complete this itinerary regularly. Standard travel precautions apply: avoid driving at night on rural roads and keep valuables secure in medinas.',
  },
  {
    q: 'Can I do this itinerary in reverse, starting from Fes?',
    a: 'Absolutely. The Fes-to-Marrakech direction works just as well and has one advantage: you end your trip in Marrakech, which has more international flight connections. The desert crossing, Todra Gorge, and Atlas Mountains experiences are identical in either direction.',
  },
  {
    q: 'Do I need a 4x4 for any part of this itinerary?',
    a: 'Not if you use public transport or book tours. All major roads on this route are paved. The only unpaved section is the final stretch into the Erg Chebbi dunes near Merzouga, which tour vehicles handle. If self-driving, a standard rental car works for everything except the last 5 km to the desert camps.',
  },
  {
    q: 'How do I get from Fes to Chefchaouen?',
    a: 'CTM buses run daily from Fes to Chefchaouen, taking about 4 hours and costing from 75 MAD. Grand taxis are faster (3 hours) but less comfortable, from 100 MAD per seat. Private transfers cost from 800 MAD for the car. The road is winding through the Rif Mountains, so sit near the front if you get motion sick.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco 10-Day Itinerary 2026',
  description:
    'Complete 10-day Morocco itinerary with day-by-day travel plan covering Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen with accommodation, transport, and budget breakdown.',
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
      { '@type': 'ListItem', position: 2, name: 'Morocco 10-Day Itinerary', item: PAGE_URL },
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
   DATA: ITINERARY DAYS
   ================================================================ */

const itineraryDays = [
  {
    day: 1,
    title: 'Arrive in Marrakech & Explore the Medina',
    location: 'Marrakech',
    icon: Landmark,
    image: '/images/hero-marrakech.webp',
    imageAlt: 'Marrakech medina with Koutoubia Mosque minaret in the background at golden hour',
    morning: 'Land at Marrakech Menara Airport and transfer to your riad in the medina. Most flights arrive by midday. Check in, rest, and acclimate to the city\'s energy. Walk to the nearest cafe for your first mint tea.',
    afternoon: 'Head to Jemaa el-Fnaa square as it comes alive in the late afternoon. Watch the snake charmers, henna artists, and storytellers. As the sun sets, the food stalls open -- try a bowl of harira soup (from 10 MAD) and a lamb mechoui sandwich (from 30 MAD). Walk through the surrounding souks before they close.',
    accommodation: {
      budget: 'Hostel dorm in the medina, from 80 MAD/night',
      midRange: 'Traditional riad with courtyard, from 400 MAD/night',
      luxury: 'Luxury riad or palace hotel (La Mamounia, Royal Mansour), from 3,500 MAD/night',
    },
    meals: 'Street food dinner at Jemaa el-Fnaa: from 50 MAD for a full meal',
    transport: 'Airport taxi to medina: from 100 MAD (negotiate before entering)',
    tips: 'Arrive with some dirhams exchanged at the airport. ATMs in the medina sometimes run out on weekends.',
  },
  {
    day: 2,
    title: 'Marrakech: Palaces, Gardens & Souks',
    location: 'Marrakech',
    icon: Building,
    image: '/images/hero-marrakech-koutoubia.webp',
    imageAlt: 'Ornate interior courtyard of a Marrakech palace with intricate zellige tilework',
    morning: 'Start early at the Bahia Palace (from 70 MAD entry) before the crowds arrive. Walk to the Saadian Tombs (from 70 MAD) next door. Then head to the Majorelle Garden (from 150 MAD) -- the cobalt-blue villa surrounded by cacti and bougainvillea is worth every dirham.',
    afternoon: 'Spend the afternoon getting lost in the souks. Each alley specializes in a different craft: leather in one section, metalwork in another, spices in a third. Stop at a rooftop cafe overlooking the medina for lunch -- a tagine costs from 60 MAD at a local spot. End with a hammam session to wash off the dust.',
    accommodation: {
      budget: 'Same hostel, from 80 MAD/night',
      midRange: 'Same riad, from 400 MAD/night',
      luxury: 'Same luxury hotel, from 3,500 MAD/night',
    },
    meals: 'Riad breakfast (included with most stays), rooftop cafe tagine lunch: from 60 MAD, dinner: from 80 MAD',
    transport: 'Walking day. Petit taxi if needed: from 15 MAD within medina',
    tips: 'Bargain in souks: start at 40% of the asking price and work up to 60%. Never feel pressured to buy.',
  },
  {
    day: 3,
    title: 'Atlas Mountains Day Trip',
    location: 'Imlil & High Atlas',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    imageAlt: 'Terraced Berber village in the High Atlas Mountains with snow-capped peaks behind',
    morning: 'Depart Marrakech early (7:00 AM) for the Atlas Mountains. The drive to Imlil takes about 90 minutes. Trek through walnut groves and terraced fields to the Berber village of Armed. A local guide leads you through paths with views of North Africa\'s highest peak, Jebel Toubkal (4,167m).',
    afternoon: 'Share a traditional Berber lunch in a family home -- couscous with vegetables and buttermilk. After lunch, explore the village and visit a cooperative where women make argan oil. Return to Marrakech by late afternoon. Tonight, pack for the desert journey starting tomorrow.',
    accommodation: {
      budget: 'Return to Marrakech hostel, from 80 MAD/night',
      midRange: 'Return to Marrakech riad, from 400 MAD/night',
      luxury: 'Kasbah Tamadot or return to Marrakech, from 3,500 MAD/night',
    },
    meals: 'Berber lunch included in most tour packages, dinner in Marrakech: from 80 MAD',
    transport: 'Shared day trip from Marrakech: from 250 MAD. Private tour: from 800 MAD',
    tips: 'Wear sturdy shoes with ankle support. The trails are rocky but manageable for average fitness levels.',
  },
  {
    day: 4,
    title: 'Cross the High Atlas to the Sahara',
    location: 'Tizi n\'Tichka Pass to Ouarzazate to Dades Valley',
    icon: Navigation,
    image: '/images/hero-desert.webp',
    imageAlt: 'Dramatic road winding through the Atlas Mountains with barren red landscape stretching to the horizon',
    morning: 'This is a big driving day. Leave Marrakech at 7:00 AM and cross the Tizi n\'Tichka pass at 2,260m, the highest paved road in North Africa. Stop at Ait Benhaddou, the fortified ksar (village) that has appeared in Gladiator, Game of Thrones, and dozens of other films. Walk through the red-earth alleys and climb to the top for panoramic views (free entry).',
    afternoon: 'Continue through Ouarzazate, known as the "Hollywood of Morocco." If time allows, visit Atlas Studios (from 50 MAD). Drive through the Dades Valley, nicknamed the "Road of a Thousand Kasbahs" for the crumbling fortresses lining the route. Arrive at your accommodation in the Dades or Todra Gorge area by evening.',
    accommodation: {
      budget: 'Guesthouse in Dades Valley, from 150 MAD/night',
      midRange: 'Kasbah hotel in Dades, from 500 MAD/night',
      luxury: 'Boutique kasbah with pool, from 1,500 MAD/night',
    },
    meals: 'Roadside restaurant lunch in Ouarzazate: from 60 MAD, kasbah dinner: from 100 MAD',
    transport: 'Shared desert tour (3-day Marrakech to Fes): from 1,200 MAD. Private: from 4,000 MAD',
    tips: 'Bring a warm layer. Temperatures drop sharply once the sun sets in the mountains and desert fringe.',
  },
  {
    day: 5,
    title: 'Todra Gorge & Drive to Merzouga',
    location: 'Todra Gorge to Merzouga',
    icon: Compass,
    image: '/images/hero-todra-gorge.webp',
    imageAlt: 'Towering canyon walls of Todra Gorge with a narrow river running through the base',
    morning: 'Wake early and drive to Todra Gorge, where 300-meter limestone cliffs narrow to a gap just 10 meters wide. Walk along the river between the canyon walls. Rock climbers scale the vertical faces above -- even if you don\'t climb, watching them is mesmerizing. The morning light hitting the orange rock is the best time for photos.',
    afternoon: 'Continue east toward Merzouga and the Erg Chebbi dunes. The landscape shifts from rocky canyons to flat hammada desert to the first golden sand dunes on the horizon. Arrive at your desert camp base by mid-afternoon. Mount a camel for the 90-minute trek into the dunes to reach your desert camp as the sun sets.',
    accommodation: {
      budget: 'Basic desert camp with shared tent, from 250 MAD/night',
      midRange: 'Comfort desert camp with private tent, from 600 MAD/night',
      luxury: 'Luxury glamping with en-suite bathroom, from 2,500 MAD/night',
    },
    meals: 'Lunch en route: from 60 MAD, dinner at desert camp (included in camp price): traditional Berber tagine under the stars',
    transport: 'Included in desert tour package. Self-drivers: from 400 MAD fuel for the day',
    tips: 'Charge all devices before leaving for the desert. Basic camps have limited or no electricity.',
  },
  {
    day: 6,
    title: 'Sahara Sunrise & Desert to Fes Route',
    location: 'Erg Chebbi to Midelt/Ifrane',
    icon: Sunrise,
    image: '/images/hero-camel-caravan-sahara.webp',
    imageAlt: 'Camel caravan silhouetted against golden Sahara dunes at sunrise',
    morning: 'Wake before dawn and climb the highest dune near camp. Watch the sunrise paint the Sahara in shades of orange, pink, and gold -- this is the single most photographed moment of any Morocco trip. Ride camels back to the base village, shower at the hotel, and begin the long drive north toward Fes.',
    afternoon: 'The drive from Merzouga to Fes takes about 8 hours with stops. Pass through the cedar forests of the Middle Atlas where Barbary macaques swing from the trees near Azrou. Stop in Ifrane, a bizarre Swiss-chalet-style town at 1,665m altitude. Arrive in Fes by evening and check into your riad in the old medina.',
    accommodation: {
      budget: 'Hostel in Fes medina, from 100 MAD/night',
      midRange: 'Riad in Fes medina, from 500 MAD/night',
      luxury: 'Palais Faraj or Riad Fes, from 2,500 MAD/night',
    },
    meals: 'Roadside lunch in Midelt (famous for trout): from 80 MAD, dinner in Fes: from 100 MAD',
    transport: 'Included in desert tour. Grand taxi Merzouga to Fes: from 200 MAD/seat',
    tips: 'If driving yourself, fill the tank in Errachidia. Gas stations are sparse between there and the Middle Atlas.',
  },
  {
    day: 7,
    title: 'Fes: The World\'s Largest Car-Free Urban Area',
    location: 'Fes el-Bali (Old Medina)',
    icon: MapPin,
    image: '/images/hero-fes-medina.webp',
    imageAlt: 'Narrow alleyway in Fes medina with colorful lanterns hanging overhead and donkeys passing through',
    morning: 'Hire a local guide (from 300 MAD for a half day) to navigate the 9,400 alleys of Fes el-Bali, the world\'s largest car-free urban zone. Visit the Al-Qarawiyyin Mosque, founded in 859 AD and recognized as the oldest continuously operating university. Stop at the Bou Inania Medersa (from 30 MAD) to see some of the finest Islamic architecture in Morocco.',
    afternoon: 'Walk to the Chouara Tannery and watch workers dye leather in stone vats using methods unchanged since medieval times. The overlook terraces are free to access through the leather shops above. Continue to the Mellah (Jewish quarter) and the Ibn Danan Synagogue. End the day at a rooftop restaurant overlooking the medina at sunset.',
    accommodation: {
      budget: 'Same Fes hostel, from 100 MAD/night',
      midRange: 'Same Fes riad, from 500 MAD/night',
      luxury: 'Same Fes luxury riad, from 2,500 MAD/night',
    },
    meals: 'Riad breakfast (usually included), medina lunch -- try pastilla (pigeon pie): from 50 MAD, rooftop dinner: from 120 MAD',
    transport: 'Walking only. The medina is car-free. Taxi from new town to medina gate: from 15 MAD',
    tips: 'A guide is strongly recommended for your first day in the Fes medina. Getting lost is guaranteed without one.',
  },
  {
    day: 8,
    title: 'Fes: Pottery, Cuisine & Hidden Gardens',
    location: 'Fes',
    icon: Coffee,
    image: '/images/hero-fes-tanneries.webp',
    imageAlt: 'Artisan hand-painting intricate blue and white patterns on ceramic pottery in Fes',
    morning: 'Visit the Fes pottery quarter outside the medina walls. Watch artisans shape, glaze, and paint ceramics by hand using techniques passed down for generations. You can buy directly from the workshops at prices far below tourist shops. Then head to the Jnan Sbil Gardens, a peaceful escape from the medina\'s intensity.',
    afternoon: 'Take a Moroccan cooking class (from 350 MAD). Learn to make tagine, couscous, and Moroccan salads from scratch in a traditional kitchen. You eat everything you cook for lunch. Spend the rest of the afternoon at your riad or exploring the medina at your own pace. The late afternoon light in the narrow alleys is magical for photography.',
    accommodation: {
      budget: 'Same Fes hostel, from 100 MAD/night',
      midRange: 'Same Fes riad, from 500 MAD/night',
      luxury: 'Same Fes luxury riad, from 2,500 MAD/night',
    },
    meals: 'Cooking class lunch included, light dinner: from 60 MAD',
    transport: 'Taxi to pottery quarter and back: from 40 MAD round trip',
    tips: 'Book the cooking class at least a day ahead. Popular classes fill up, especially in spring and fall.',
  },
  {
    day: 9,
    title: 'Chefchaouen: The Blue City',
    location: 'Chefchaouen',
    icon: Camera,
    image: '/images/hero-chefchaouen-blue.webp',
    imageAlt: 'Blue-washed buildings and stairways of Chefchaouen medina with potted plants lining the walls',
    morning: 'Take the early CTM bus from Fes to Chefchaouen (departs around 8:00 AM, from 75 MAD, 4 hours). The road winds through the Rif Mountains with dramatic valley views. Arrive by noon, check into your accommodation, and grab lunch. The medina is compact and walkable.',
    afternoon: 'Explore the blue-painted medina. Every corner is a photo opportunity: blue stairways, blue doors, blue walls with bright orange and green pots of flowers. Visit the small kasbah and its garden (from 10 MAD). Walk to the Ras el-Maa waterfall on the edge of town where locals wash carpets in the stream. Watch the sunset from the Spanish Mosque on the hill above town -- the panoramic view over the blue city against the green mountains is unforgettable.',
    accommodation: {
      budget: 'Hostel or pension, from 80 MAD/night',
      midRange: 'Boutique guesthouse with terrace, from 400 MAD/night',
      luxury: 'Lina Ryad & Spa or Casa Hassan, from 1,200 MAD/night',
    },
    meals: 'Lunch in the medina: from 50 MAD, dinner at a plaza restaurant: from 80 MAD',
    transport: 'CTM bus Fes to Chefchaouen: from 75 MAD. Grand taxi: from 100 MAD/seat',
    tips: 'Chefchaouen is best photographed in the early morning before tour groups arrive and in the golden hour before sunset.',
  },
  {
    day: 10,
    title: 'Chefchaouen Morning & Departure',
    location: 'Chefchaouen to Tangier/Fes/Casablanca',
    icon: Map,
    image: '/images/hero-chefchaouen-stairs.webp',
    imageAlt: 'Morning light falling on the blue stairs and whitewashed walls of Chefchaouen with a cat resting in a doorway',
    morning: 'Wake early for a final walk through the quiet medina. The soft morning light on the blue walls before 8:00 AM is the best photography you\'ll get all trip. Pick up last-minute souvenirs: Chefchaouen is known for goat cheese, woven blankets, and handmade soaps. Have a slow breakfast on a terrace.',
    afternoon: 'Depart for your exit city. Options: CTM bus to Tangier (from 50 MAD, 3 hours) for ferries to Spain or Tangier Ibn Battouta Airport. Bus to Fes (from 75 MAD, 4 hours) for flights. Bus to Casablanca (from 150 MAD, 6 hours) for the most international connections. Alternatively, arrange a private transfer to Tangier airport (from 800 MAD).',
    accommodation: {
      budget: 'N/A (departure day)',
      midRange: 'N/A (departure day)',
      luxury: 'N/A (departure day)',
    },
    meals: 'Breakfast in Chefchaouen: from 30 MAD, travel snacks: from 20 MAD',
    transport: 'CTM bus to Tangier: from 50 MAD. To Fes: from 75 MAD. Private transfer: from 800 MAD',
    tips: 'If flying out of Casablanca, consider spending a night in Tangier instead and flying from there to save 3 hours of travel.',
  },
] as const;

/* ================================================================
   DATA: BUDGET BREAKDOWN
   ================================================================ */

const budgetBreakdown = [
  {
    category: 'Accommodation (9 nights)',
    budget: 'from 900 MAD',
    midRange: 'from 4,000 MAD',
    luxury: 'from 22,000 MAD',
    icon: Bed,
  },
  {
    category: 'Food & Drinks',
    budget: 'from 1,500 MAD',
    midRange: 'from 3,500 MAD',
    luxury: 'from 8,000 MAD',
    icon: Utensils,
  },
  {
    category: 'Transport & Tours',
    budget: 'from 2,500 MAD',
    midRange: 'from 5,000 MAD',
    luxury: 'from 12,000 MAD',
    icon: Bus,
  },
  {
    category: 'Activities & Entry Fees',
    budget: 'from 600 MAD',
    midRange: 'from 1,500 MAD',
    luxury: 'from 3,500 MAD',
    icon: Camera,
  },
  {
    category: 'Shopping & Souvenirs',
    budget: 'from 500 MAD',
    midRange: 'from 1,500 MAD',
    luxury: 'from 5,000 MAD',
    icon: ShoppingBag,
  },
  {
    category: 'Miscellaneous & Tips',
    budget: 'from 500 MAD',
    midRange: 'from 1,000 MAD',
    luxury: 'from 2,500 MAD',
    icon: Wallet,
  },
] as const;

const routeStops = [
  { name: 'Marrakech', days: 'Days 1-3', type: 'city' as const },
  { name: 'Ait Benhaddou', days: 'Day 4', type: 'landmark' as const },
  { name: 'Todra Gorge', days: 'Day 5', type: 'nature' as const },
  { name: 'Erg Chebbi / Merzouga', days: 'Days 5-6', type: 'desert' as const },
  { name: 'Fes', days: 'Days 6-8', type: 'city' as const },
  { name: 'Chefchaouen', days: 'Days 9-10', type: 'city' as const },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function Morocco10DayItineraryPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img
          src="/images/hero-morocco.webp"
          alt="Sweeping view of Morocco's diverse landscapes from golden Sahara dunes to ancient red-walled medinas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 container-morocco">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white flex items-center gap-1">
                  <Home className="w-3.5 h-3.5" /> Home
                </Link>
              </li>
              <li><ChevronRight className="w-3.5 h-3.5" /></li>
              <li className="text-white font-medium">Morocco 10-Day Itinerary</li>
            </ol>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight">
            Morocco 10-Day Itinerary: The Complete Day-by-Day Travel Plan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes & Chefchaouen with accommodation picks, transport logistics, and budget breakdowns for every travel style.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated March 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 10 days / 9 nights</span>
            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> From 6,500 MAD</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 6 destinations</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          INTRO SECTION
          ============================================================ */}
      <section className="container-morocco py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700 font-[family-name:var(--font-heading)]">
            This 10-day route takes you through Morocco's greatest hits: the buzzing souks of Marrakech, the snow-capped Atlas Mountains, the silence of the Sahara Desert at sunrise, the medieval maze of Fes, and the impossibly blue streets of Chefchaouen. It's the classic Marrakech-to-Chefchaouen loop that hundreds of thousands of travelers complete every year, and for good reason -- it packs Morocco's full range of landscapes, cultures, and flavors into a tight, logical route with minimal backtracking.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 font-[family-name:var(--font-heading)]">
            Below you'll find every detail you need: morning and afternoon schedules, where to sleep at three price points, how to get between cities, what to eat, and exactly how much it all costs. Print it, screenshot it, or bookmark it. This is your day-by-day blueprint.
          </p>
        </div>
      </section>

      {/* ============================================================
          ROUTE OVERVIEW
          ============================================================ */}
      <section className="container-morocco pb-14">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-8">
          Route Overview
        </h2>
        <div className="max-w-4xl mx-auto zellige-border rounded-2xl p-6 md:p-8 bg-white shadow-sm">
          <div className="relative">
            {routeStops.map((stop, index) => (
              <div key={stop.name} className="flex items-start gap-4 mb-0 last:mb-0">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    stop.type === 'city' ? 'bg-[var(--color-accent)] text-white' :
                    stop.type === 'desert' ? 'bg-amber-500 text-white' :
                    stop.type === 'nature' ? 'bg-emerald-600 text-white' :
                    'bg-[var(--color-gold)] text-white'
                  }`}>
                    {stop.type === 'city' && <Building className="w-5 h-5" />}
                    {stop.type === 'desert' && <Sun className="w-5 h-5" />}
                    {stop.type === 'nature' && <Mountain className="w-5 h-5" />}
                    {stop.type === 'landmark' && <Landmark className="w-5 h-5" />}
                  </div>
                  {index < routeStops.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-gold)] my-1" />
                  )}
                </div>
                {/* Stop info */}
                <div className="pt-1.5 pb-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900">{stop.name}</h3>
                  <p className="text-sm text-[var(--color-accent)] font-medium mt-0.5">{stop.days}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5"><Navigation className="w-4 h-4 text-[var(--color-accent)]" /> Total distance: ~1,500 km</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[var(--color-accent)]" /> Total driving: ~22 hours</span>
            <span className="flex items-center gap-1.5"><Compass className="w-4 h-4 text-[var(--color-accent)]" /> Direction: Counter-clockwise loop</span>
          </div>
        </div>
      </section>

      {/* ============================================================
          DAY-BY-DAY ITINERARY
          ============================================================ */}
      <section className="container-morocco pb-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-12">
          Day-by-Day Itinerary
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {itineraryDays.map((day) => {
            const IconComponent = day.icon;
            return (
              <article key={day.day} id={`day-${day.day}`} className="card-moroccan rounded-2xl overflow-hidden shadow-sm">
                {/* Day header image */}
                <div className="relative h-56 md:h-64">
                  <img
                    src={day.image}
                    alt={day.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[var(--color-accent)] text-white text-sm font-bold px-3 py-1 rounded-full">
                        Day {day.day}
                      </span>
                      <span className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {day.location}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-white">
                      {day.title}
                    </h3>
                  </div>
                </div>

                {/* Day content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Morning */}
                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                      <Sunrise className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-1">Morning</h4>
                      <p className="text-gray-700 leading-relaxed">{day.morning}</p>
                    </div>
                  </div>

                  {/* Afternoon */}
                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                      <Sunset className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-1">Afternoon & Evening</h4>
                      <p className="text-gray-700 leading-relaxed">{day.afternoon}</p>
                    </div>
                  </div>

                  {/* Practical details grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      <Utensils className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Meals</span>
                        <p className="text-sm text-gray-700 mt-0.5">{day.meals}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Bus className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Transport</span>
                        <p className="text-sm text-gray-700 mt-0.5">{day.transport}</p>
                      </div>
                    </div>
                  </div>

                  {/* Accommodation tiers */}
                  {day.accommodation.budget !== 'N/A (departure day)' && (
                    <div className="bg-[#FAF8F5] rounded-xl p-4">
                      <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[var(--color-accent)]" /> Where to Stay
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div className="bg-white rounded-lg p-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Budget</span>
                          <p className="text-gray-700 mt-1">{day.accommodation.budget}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Mid-Range</span>
                          <p className="text-gray-700 mt-1">{day.accommodation.midRange}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Luxury</span>
                          <p className="text-gray-700 mt-1">{day.accommodation.luxury}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pro tip */}
                  <div className="flex gap-2 bg-amber-50 rounded-lg p-3 text-sm">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-amber-900"><strong>Tip:</strong> {day.tips}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          BUDGET BREAKDOWN
          ============================================================ */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-4">
            10-Day Budget Breakdown
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-10">
            Per-person costs based on two travelers sharing accommodation. Solo travelers should add 30-50% to accommodation costs. Seasonal pricing can change during peak months.
          </p>

          {/* Budget table */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden zellige-border">
            {/* Header row */}
            <div className="grid grid-cols-4 gap-2 p-4 bg-[var(--color-accent)] text-white text-sm font-semibold">
              <div>Category</div>
              <div className="text-center">Budget</div>
              <div className="text-center">Mid-Range</div>
              <div className="text-center">Luxury</div>
            </div>
            {/* Data rows */}
            {budgetBreakdown.map((row, index) => {
              const RowIcon = row.icon;
              return (
                <div key={row.category} className={`grid grid-cols-4 gap-2 p-4 items-center text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}>
                  <div className="flex items-center gap-2 font-medium text-gray-900">
                    <RowIcon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="hidden sm:inline">{row.category}</span>
                    <span className="sm:hidden">{row.category.split('(')[0].trim()}</span>
                  </div>
                  <div className="text-center text-emerald-700">{row.budget}</div>
                  <div className="text-center text-blue-700">{row.midRange}</div>
                  <div className="text-center text-purple-700">{row.luxury}</div>
                </div>
              );
            })}
            {/* Totals row */}
            <div className="grid grid-cols-4 gap-2 p-4 bg-[var(--color-accent)]/10 font-bold text-sm border-t-2 border-[var(--color-accent)]">
              <div className="flex items-center gap-2 text-gray-900">
                <DollarSign className="w-4 h-4 text-[var(--color-accent)]" /> Total (10 Days)
              </div>
              <div className="text-center text-emerald-700">from 6,500 MAD</div>
              <div className="text-center text-blue-700">from 16,500 MAD</div>
              <div className="text-center text-purple-700">from 53,000 MAD</div>
            </div>
          </div>

          {/* Budget tips */}
          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-moroccan rounded-xl p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-emerald-800 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Budget Tips
              </h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" /> Book the 3-day shared desert tour (best value)</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" /> Eat where locals eat -- follow the crowds</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" /> Use CTM buses and trains over taxis</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" /> Carry snacks for long travel days</li>
              </ul>
            </div>
            <div className="card-moroccan rounded-xl p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-blue-800 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5" /> Best Value Splurges
              </h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" /> Upgrade to a comfort desert camp (worth it)</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" /> One riad night in Fes -- the architecture alone</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" /> Cooking class in Fes (food + education)</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-600" /> Guided Fes medina walk (saves hours)</li>
              </ul>
            </div>
            <div className="card-moroccan rounded-xl p-5">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-amber-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Common Money Traps
              </h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" /> Airport currency exchange (rates are terrible)</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" /> "Fixed price" shops near monuments</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" /> Unsolicited "guides" at medina entrances</li>
                <li className="flex gap-1.5"><ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" /> Dynamic pricing for hotel airport transfers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PACKING ESSENTIALS
          ============================================================ */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-8">
          What to Pack for 10 Days
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-moroccan rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" /> Must-Haves
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Comfortable walking shoes (you will walk 10-15 km daily in medinas)</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Warm layer for Atlas Mountains, desert nights, and air-conditioned buses</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Scarf or shawl for mosque visits and sun protection in the desert</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Power bank -- charging opportunities are limited in the desert</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Sunscreen SPF 50+ and sunglasses for desert and mountain glare</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Motion sickness tablets for winding mountain roads</li>
            </ul>
          </div>
          <div className="card-moroccan rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-4 flex items-center gap-2">
              <Footprints className="w-5 h-5 text-[var(--color-accent)]" /> Clothing Guide
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Loose, breathable layers that cover shoulders and knees</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> One warm jacket or fleece for evenings above 1,000m elevation</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Sandals for riads and desert camps, closed shoes for gorge walks</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Hat with a brim -- essential for desert and mountain days</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Quick-dry fabrics if traveling spring or summer (hand-wash in riads)</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Rain jacket if traveling October through March</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT TO EAT ALONG THE ROUTE
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-4">
            What to Eat at Each Stop
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-10">
            Each city on this route has its own culinary identity. Here are the dishes you should not leave without trying.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="card-moroccan rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">Marrakech</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Tanjia:</strong> Slow-cooked beef in a clay urn, the city's signature dish. From 80 MAD at local restaurants.</li>
                <li><strong>Jemaa el-Fnaa street food:</strong> Snail soup (from 5 MAD), grilled lamb kebabs (from 20 MAD), fresh orange juice (from 5 MAD).</li>
                <li><strong>Pastilla:</strong> Sweet-savory pigeon or chicken pie with almonds and cinnamon dusted in powdered sugar.</li>
              </ul>
            </div>
            <div className="card-moroccan rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">Desert & Mountains</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Berber tagine:</strong> Simple chicken or vegetable tagine cooked over charcoal in mountain villages. From 50 MAD.</li>
                <li><strong>Mechoui:</strong> Whole roasted lamb, common at roadside stops between Ouarzazate and the desert.</li>
                <li><strong>Berber whiskey:</strong> Not alcohol -- this is sweet mint tea, served everywhere and always free as a welcome gesture.</li>
              </ul>
            </div>
            <div className="card-moroccan rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">Fes & Chefchaouen</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Fes pastilla:</strong> The Fes version uses pigeon and is considered the original. From 60 MAD at traditional restaurants.</li>
                <li><strong>Rfissa:</strong> Shredded msemen bread with lentils and chicken in fenugreek broth. A Fes specialty.</li>
                <li><strong>Chefchaouen goat cheese:</strong> Fresh local cheese served with bread and olive oil. From 20 MAD at cafes near Plaza Uta el-Hammam.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRANSPORT BETWEEN DESTINATIONS
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-4">
            Getting Between Destinations
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-10">
            Three ways to connect the dots on this route. Each has trade-offs between cost, comfort, and flexibility.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                <Bus className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-2">Shared Desert Tour</h3>
              <p className="text-sm text-gray-600 mb-3">The most popular option. A 3-day shared tour from Marrakech to Fes (or reverse) covers Days 4-6 of this itinerary including transport, accommodation, meals, and camel trek.</p>
              <p className="text-sm font-semibold text-emerald-700">From 1,200 MAD per person</p>
              <div className="mt-3 flex gap-1 text-xs text-gray-500">
                <span className="bg-emerald-50 px-2 py-0.5 rounded-full">All-inclusive</span>
                <span className="bg-emerald-50 px-2 py-0.5 rounded-full">Social</span>
              </div>
            </div>
            <div className="card-moroccan rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-2">Private Driver</h3>
              <p className="text-sm text-gray-600 mb-3">Hire a private driver for the full route or just the desert segment. You set the pace, choose the stops, and ride in air-conditioned comfort. Drivers double as informal guides.</p>
              <p className="text-sm font-semibold text-blue-700">From 4,000 MAD for 3 days</p>
              <div className="mt-3 flex gap-1 text-xs text-gray-500">
                <span className="bg-blue-50 px-2 py-0.5 rounded-full">Flexible</span>
                <span className="bg-blue-50 px-2 py-0.5 rounded-full">Comfortable</span>
              </div>
            </div>
            <div className="card-moroccan rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-2">Self-Drive Rental</h3>
              <p className="text-sm text-gray-600 mb-3">Rent a car in Marrakech and drop it in Fes or Tangier. Total freedom, but you handle the navigation, parking in medinas (impossible), and fuel. International license required.</p>
              <p className="text-sm font-semibold text-purple-700">From 3,000 MAD for 10 days + fuel</p>
              <div className="mt-3 flex gap-1 text-xs text-gray-500">
                <span className="bg-purple-50 px-2 py-0.5 rounded-full">Freedom</span>
                <span className="bg-purple-50 px-2 py-0.5 rounded-full">Independent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BEST TIME TO GO
          ============================================================ */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-8">
          Best Time for This Itinerary
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-moroccan rounded-xl p-6 border-l-4 border-emerald-500">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-emerald-800 mb-2 flex items-center gap-2">
              <Sun className="w-5 h-5" /> Peak Season: March-May & Sept-Nov
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Daytime highs of 22-28C in cities, comfortable desert temperatures, clear mountain skies. Expect higher prices and more crowds at popular stops. Book accommodation and desert tours at least two weeks ahead.
            </p>
          </div>
          <div className="card-moroccan rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-blue-800 mb-2 flex items-center gap-2">
              <Moon className="w-5 h-5" /> Shoulder: Dec-Feb
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Cooler temperatures make city walking pleasant (15-20C). Desert nights drop near freezing -- bring a serious warm layer. Atlas Mountains may have snow above 2,500m. Fewer tourists, lower prices, and a more authentic atmosphere.
            </p>
          </div>
          <div className="md:col-span-2 card-moroccan rounded-xl p-6 border-l-4 border-red-400">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Avoid: June-August for This Route
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Summer temperatures in Marrakech hit 40C+ and the Sahara reaches 50C. The desert segment of this itinerary becomes dangerous and deeply uncomfortable. If summer is your only option, swap the desert for the Atlantic coast (Essaouira, Agadir) where ocean breezes keep temperatures around 25C.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="card-moroccan rounded-xl p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 flex items-start gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  {item.q}
                </h3>
                <p className="mt-2 text-gray-700 leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ITINERARY MODIFICATIONS
          ============================================================ */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-4">
          Modify This Itinerary to Fit Your Style
        </h2>
        <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-10">
          The 10-day route above is a template. Here are the most common ways travelers adjust it based on interests and pace.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-moroccan rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--color-accent)]" /> Have 7 Days Instead?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Cut Chefchaouen (Day 9-10) and reduce Fes to one day. Your route becomes Marrakech (2 days), Atlas Mountains (1 day), Desert crossing to Fes (3 days), fly out from Fes (1 day). This keeps the desert -- the highlight most travelers refuse to skip.
            </p>
            <p className="text-xs text-gray-500">Saves from 1,500 MAD on budget, from 3,000 MAD mid-range</p>
          </div>
          <div className="card-moroccan rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--color-accent)]" /> Have 14 Days?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Add Essaouira (2 days) before leaving Marrakech for coastal winds and fresh seafood. Add Rabat (1 day) between Fes and Chefchaouen for the capital's quiet beauty. Add an extra Chefchaouen day for the Akchour Waterfalls hike. These additions transform a highlight tour into a deeper exploration.
            </p>
            <p className="text-xs text-gray-500">Adds from 2,000 MAD on budget, from 5,000 MAD mid-range</p>
          </div>
          <div className="card-moroccan rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 mb-2 flex items-center gap-2">
              <Mountain className="w-5 h-5 text-[var(--color-accent)]" /> More Trekking
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Replace the Atlas Mountains day trip with a 2-day Jebel Toubkal summit attempt (4,167m). You sleep in a mountain refuge at 3,200m and summit at sunrise. This requires good fitness and adds one day to the itinerary. Guided treks cost from 1,500 MAD including meals, guide, and refuge.
            </p>
          </div>
          <div className="card-moroccan rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--color-accent)]" /> Traveling with Kids
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Skip the long Day 6 drive from Merzouga to Fes. Instead, spend an extra night in the Dades Valley and break the drive into two shorter days. Kids do well with camel rides and Chefchaouen's colorful streets, but the medinas of Fes can overwhelm young children -- hire a guide to keep the walk focused and short.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          ESSENTIAL BOOKING TIPS
          ============================================================ */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-8">
            Essential Booking Tips
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[var(--color-accent)] text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Book the desert tour first</h3>
                <p className="text-gray-700 text-sm mt-1">This is the lynchpin of the itinerary. Once you lock in your 3-day Marrakech-to-Fes desert tour dates, everything else falls into place around it. Popular operators sell out 2-3 weeks ahead in spring and fall.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[var(--color-accent)] text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Reserve riads at least 10 days ahead</h3>
                <p className="text-gray-700 text-sm mt-1">Good riads in Marrakech and Fes have only 4-8 rooms each. The best ones fill up fast, especially on weekends. Book directly through the riad's website for better rates than booking platforms.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[var(--color-accent)] text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Fly into Marrakech, out of Tangier or Fes</h3>
                <p className="text-gray-700 text-sm mt-1">Open-jaw flights (arriving in one city, departing from another) eliminate backtracking. Marrakech has the most inbound options from Europe. Fes and Tangier have growing international connections. Check Ryanair, Transavia, and Royal Air Maroc.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[var(--color-accent)] text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Get a Moroccan SIM card on arrival</h3>
                <p className="text-gray-700 text-sm mt-1">Maroc Telecom and Inwi sell tourist SIM cards at the airport for from 30 MAD with 5-10 GB of data. Mobile data is essential for maps, translation, and contacting your riads. WiFi in rural areas and desert camps is unreliable at best.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                <span className="text-[var(--color-accent)] text-sm font-bold">5</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Carry cash in small denominations</h3>
                <p className="text-gray-700 text-sm mt-1">Many riads, restaurants, and all souks are cash-only. ATMs dispense 200 MAD notes, but you'll need 20s and 50s for tips, taxis, and street food. Break large notes at supermarkets or gas stations along the route.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED GUIDES
          ============================================================ */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] text-center mb-8">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            {
              href: '/morocco-first-time',
              title: 'First Time in Morocco',
              desc: 'Everything you need to know before your first trip -- culture, safety, money, and etiquette.',
              icon: Users,
            },
            {
              href: '/morocco-budget-calculator',
              title: 'Morocco Budget Calculator',
              desc: 'Interactive tool to estimate your total trip cost based on travel style, duration, and destinations.',
              icon: Wallet,
            },
            {
              href: '/morocco-transport',
              title: 'Morocco Transport Guide',
              desc: 'Trains, buses, grand taxis, and rental cars -- how to get around Morocco efficiently.',
              icon: Bus,
            },
            {
              href: '/morocco-desert-tours',
              title: 'Sahara Desert Tours',
              desc: 'Compare desert tour operators, routes, camp types, and prices for the Merzouga and Zagora circuits.',
              icon: Tent,
            },
          ].map((guide) => {
            const GuideIcon = guide.icon;
            return (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 rounded-xl hover:shadow-md transition-shadow group">
                <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 group-hover:text-[var(--color-accent)] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{guide.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] mt-3 font-medium">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-accent)] mb-4">
              Ready to Book Your 10-Day Morocco Adventure?
            </h2>
            <p className="text-gray-700 text-lg font-[family-name:var(--font-heading)] mb-8">
              From the rooftop terraces of Marrakech to the blue alleys of Chefchaouen, this route shows you the best of Morocco in 10 unforgettable days. Start planning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/morocco-desert-tours"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#8B4526] transition-colors"
              >
                <Compass className="w-5 h-5" /> Explore Desert Tours
              </Link>
              <Link
                href="/morocco-budget-calculator"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-8 py-3.5 rounded-full font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
              >
                <DollarSign className="w-5 h-5" /> Calculate Your Budget
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
