import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Sun,
  Droplets,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Waves,
  MessageCircleQuestion,
  Music,
  Umbrella,
  Wind,
  Calendar,
  Backpack,
  Building,
  CircleDot,
  Moon,
  Utensils,
  Shield,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-summer-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Summer Travel Guide 2026 | Beat the Heat, Beaches & Festivals',
  description:
    'Plan your Morocco summer trip for 2026. Regional weather breakdown, coastal escapes in Essaouira and Agadir, Atlas mountain retreats, Gnaoua and Mawazine festivals, water activities, night markets, AC accommodations with pools, packing tips, hydration advice, and peak-season budget strategies from 300 MAD per night.',
  keywords: [
    'Morocco summer travel',
    'Morocco summer 2026',
    'Morocco summer weather',
    'Morocco beach destinations',
    'Essaouira summer',
    'Agadir summer beach',
    'Morocco summer festivals',
    'Gnaoua festival Essaouira',
    'Morocco heat tips',
    'Atlas Mountains summer',
    'Morocco coastal cities',
    'Morocco summer budget',
    'Morocco water activities',
    'Morocco night markets summer',
    'Morocco summer packing list',
    'Morocco pool hotels',
    'Morocco summer itinerary',
    'beat the heat Morocco',
  ],
  openGraph: {
    title: 'Morocco Summer Travel Guide 2026 | Beat the Heat, Beaches & Festivals',
    description:
      'Everything you need for a Morocco summer trip: regional weather, coastal escapes, mountain retreats, festivals, water sports, night markets, and budget tips for peak season.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-coastal.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan coastal town with whitewashed buildings overlooking the Atlantic Ocean in summer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Summer Travel Guide 2026 | Beaches, Festivals & Heat-Beating Tips',
    description:
      'Regional weather, coastal escapes, Atlas retreats, Gnaoua festival, water sports, night markets, and peak-season budget strategies for Morocco in summer.',
    images: [`${BASE_URL}/images/hero-coastal.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How hot does Morocco get in summer?',
    a: 'Inland cities like Marrakech and Fes regularly hit 40-45 C (104-113 F) in July and August. Coastal cities like Essaouira and Agadir stay between 22-28 C (72-82 F) thanks to Atlantic breezes. The Sahara can exceed 50 C (122 F). Coastal and mountain destinations are the best summer options.',
  },
  {
    q: 'Is summer a good time to visit Morocco?',
    a: 'Summer works well if you choose the right destinations. Coastal cities (Essaouira, Agadir, Asilah, Tangier) and mountain areas (Chefchaouen, Ifrane, Ourika Valley) remain comfortable. Avoid inland cities and the Sahara during midday. Summer also brings major music festivals and fewer crowds at beach towns than European resorts.',
  },
  {
    q: 'What should I pack for Morocco in summer?',
    a: 'Lightweight, breathable cotton or linen clothes that cover shoulders and knees for cultural respect. A wide-brim hat, SPF 50 sunscreen, reusable water bottle, sunglasses, and comfortable walking sandals. Bring a light jacket for air-conditioned spaces and cool coastal evenings. Swimwear for beaches and hotel pools.',
  },
  {
    q: 'Are Morocco summer festivals worth attending?',
    a: 'Absolutely. The Gnaoua World Music Festival in Essaouira (June) draws international artists and is free for outdoor stages. Mawazine in Rabat (June) is one of the largest music festivals in the world by attendance. The Fes Festival of World Sacred Music and the Timitar Festival in Agadir round out a packed summer calendar.',
  },
  {
    q: 'How much does a summer trip to Morocco cost?',
    a: 'Summer is peak season, so prices are 20-40% higher than shoulder season. Budget travelers can manage from 500 MAD per day (hostel, street food, local transport). Mid-range travelers should budget from 1,200 MAD per day (3-star hotel with pool, restaurants, activities). Luxury options start from 3,000 MAD per day. Seasonal pricing can change based on demand.',
  },
  {
    q: 'Is it safe to swim at Moroccan beaches?',
    a: 'Most popular beaches have lifeguards during summer. Atlantic beaches can have strong currents and undertow, so always swim near guarded areas. Agadir, Legzira, and Oualidia lagoon are calmer. Essaouira is windier and better for surfing than swimming. Check local flags: green means safe, red means stay out of the water.',
  },
  {
    q: 'How do I stay hydrated in Moroccan summer heat?',
    a: 'Drink at least 3-4 liters of water per day. Carry a reusable bottle and refill at restaurants. Avoid alcohol during peak heat hours. Eat watermelon, oranges, and cucumber-heavy salads. Moroccan mint tea, despite being hot, helps regulate body temperature. Add oral rehydration salts if you are sweating heavily.',
  },
  {
    q: 'Does Ramadan affect summer travel in Morocco?',
    a: 'In 2026, Ramadan falls approximately in February-March, so it will not overlap with summer. When Ramadan does occur in summer months (as it did in earlier years), restaurants may close during daytime in smaller towns, but tourist areas and hotels continue serving food. Check the Islamic calendar for your specific travel dates.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Summer Travel Guide 2026',
  description:
    'Comprehensive guide to visiting Morocco in summer covering weather by region, coastal escapes, mountain retreats, festivals, water activities, night markets, accommodations with pools, packing tips, and peak-season budget advice.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-coastal.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Summer Travel Guide', item: PAGE_URL },
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
   DATA: SUMMER WEATHER BY REGION
   ================================================================ */

const weatherRegions = [
  {
    region: 'Atlantic Coast',
    icon: Wind,
    cities: 'Essaouira, Agadir, Asilah, El Jadida',
    tempRange: '22-28 C (72-82 F)',
    conditions: 'Ocean breezes keep temperatures moderate. Morning fog common in Essaouira. Afternoons clear and sunny. Humidity stays low. Wind picks up in the afternoon, ideal for kite and windsurfing.',
    verdict: 'Best summer destination. Comfortable all day without AC.',
  },
  {
    region: 'Northern Coast & Rif',
    icon: Mountain,
    cities: 'Tangier, Chefchaouen, Tetouan, Al Hoceima',
    tempRange: '25-33 C (77-91 F)',
    conditions: 'Mediterranean influence moderates temperatures in Tangier and the Rif. Chefchaouen sits at 600m elevation with cooler nights. Al Hoceima offers calm Mediterranean beaches. Evenings are pleasant.',
    verdict: 'Excellent for combining coast and mountain. Chefchaouen is 5-8 degrees cooler than Fes.',
  },
  {
    region: 'Inland Cities',
    icon: Thermometer,
    cities: 'Marrakech, Fes, Meknes, Beni Mellal',
    tempRange: '35-45 C (95-113 F)',
    conditions: 'Intense dry heat from late June through August. Midday is punishing. Mornings before 10am and evenings after 7pm are manageable. Locals retreat indoors during the hottest hours. Air conditioning is a necessity.',
    verdict: 'Doable with planning: sightsee early morning and late evening, rest midday at your pool.',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Ifrane, Ourika Valley, Imlil, Dades Gorge',
    tempRange: '20-30 C (68-86 F)',
    conditions: 'Altitude drops temperatures significantly. Ifrane at 1,650m rarely exceeds 28 C. Ourika Valley and Imlil offer river swimming. Clear skies and low humidity make hiking comfortable. Nights can drop to 12-15 C.',
    verdict: 'Perfect for hiking and nature. The escape locals use when inland cities overheat.',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    cities: 'Merzouga, Zagora, M\'Hamid',
    tempRange: '40-50 C (104-122 F)',
    conditions: 'Extreme heat makes traditional desert tours inadvisable in July-August. Sand surface temperatures can reach 70 C. Even short camel rides become dangerous. Dehydration risk is severe.',
    verdict: 'Avoid in summer. Book desert trips for October through April instead.',
  },
];

/* ================================================================
   DATA: COASTAL ESCAPES
   ================================================================ */

const coastalEscapes = [
  {
    city: 'Essaouira',
    image: '/images/hero-essaouira.webp',
    temp: '20-25 C',
    highlight: 'Wind City of Africa',
    description: 'The best summer base in Morocco. Atlantic trade winds (the alizee) keep Essaouira cool when Marrakech is scorching. The medina is a UNESCO World Heritage site with relaxed streets, art galleries, and fresh seafood grills at the port. Surfers and kiteboarders flock here June through September.',
    activities: ['Windsurfing at Sidi Kaouki', 'Gnaoua festival (June)', 'Fresh grilled sardines at the port', 'Medina gallery walks', 'Sunset along the ramparts'],
    stay: 'From 400 MAD per night for a riad with rooftop terrace',
  },
  {
    city: 'Agadir',
    image: '/images/hero-agadir.webp',
    temp: '23-28 C',
    highlight: 'Morocco\'s Resort Capital',
    description: 'A modern beach city with a 10 km crescent of sand, resort hotels with pools, a long corniche promenade, and the most reliable sunshine in Morocco. Agadir rebuilt after the 1960 earthquake and now caters to sun-and-sea tourism with an international airport and direct European flights.',
    activities: ['Beach lounging on Agadir Bay', 'Paradise Valley day trip', 'Souss-Massa National Park', 'Jet skiing and parasailing', 'Sunset at the Kasbah ruins'],
    stay: 'From 600 MAD per night for a beachfront hotel with pool',
  },
  {
    city: 'Asilah',
    image: '/images/hero-coastal.webp',
    temp: '22-27 C',
    highlight: 'The Painted Town',
    description: 'A whitewashed coastal town 45 minutes south of Tangier. Asilah is known for its annual arts festival (August), mural-covered medina walls, and calm Atlantic beaches. Less crowded than Essaouira and more laid-back than Agadir. A favorite weekend escape for Moroccan families.',
    activities: ['Asilah Arts Festival (August)', 'Paradise Beach', 'Medina mural walks', 'Seafood restaurants on the ramparts', 'Day trip to Larache and Lixus ruins'],
    stay: 'From 350 MAD per night for a guesthouse near the medina',
  },
  {
    city: 'Oualidia',
    image: '/images/card-beach.webp',
    temp: '22-26 C',
    highlight: 'Lagoon Swimming & Oysters',
    description: 'A sheltered Atlantic lagoon between El Jadida and Safi. The calm, shallow waters make Oualidia the safest swimming beach in Morocco and the top choice for families with children. The village is famous for its oyster farms, where you can eat a dozen fresh oysters for from 80 MAD at waterside shacks.',
    activities: ['Lagoon kayaking', 'Oyster farm visits', 'Birdwatching (flamingos)', 'Surfing at nearby Safi', 'Overnight in a cliffside auberge'],
    stay: 'From 500 MAD per night for a lagoon-view room',
  },
];

/* ================================================================
   DATA: SUMMER FESTIVALS
   ================================================================ */

const summerFestivals = [
  {
    name: 'Gnaoua World Music Festival',
    location: 'Essaouira',
    month: 'June',
    icon: Music,
    description: 'Morocco\'s most internationally recognized festival blends traditional Gnaoua trance music with jazz, blues, and world music. Outdoor stages throughout the medina are free. Headliner concerts draw 300,000+ attendees over four days. Book accommodation months in advance.',
    tip: 'Free outdoor stages open at 4pm daily. VIP seated areas require tickets from 500 MAD.',
  },
  {
    name: 'Mawazine Festival',
    location: 'Rabat',
    month: 'June',
    icon: Music,
    description: 'One of the largest music festivals in the world by attendance, regularly exceeding 2.5 million visitors. International headliners span pop, hip-hop, R&B, and Arabic music across multiple stages in the capital. Many stages are free, with ticketed headline acts.',
    tip: 'OLM Souissi stage for international headliners. Nahda stage for Arabic and Moroccan artists.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    location: 'Fes',
    month: 'June',
    icon: Music,
    description: 'A more intimate affair bringing Sufi, gospel, Hindu devotional, and Andalusian classical performances to the courtyards and gardens of Fes. Concerts in the Bab Makina courtyard under the stars are unforgettable. Daytime talks and round-table discussions complement the music program.',
    tip: 'Evening concerts at Bab Makina sell out. Book tickets from 200 MAD as soon as the lineup drops.',
  },
  {
    name: 'Timitar Festival',
    location: 'Agadir',
    month: 'July',
    icon: Music,
    description: 'Celebrates Amazigh (Berber) music alongside international acts. Free open-air concerts along the Agadir beachfront draw massive local crowds. The festival showcases Moroccan musical diversity with chaabi, gnaoua, raï, and contemporary Amazigh fusion.',
    tip: 'Completely free. Arrive early for good spots near the main stage on the corniche.',
  },
  {
    name: 'Asilah Arts Festival',
    location: 'Asilah',
    month: 'August',
    icon: Sparkles,
    description: 'Artists from across Morocco and internationally are invited to paint murals on the medina walls. The festival includes art exhibitions, poetry readings, and panel discussions. The murals remain year-round, turning the old town into an open-air gallery.',
    tip: 'Watch artists paint live in the mornings. Visit workshops and exhibitions in the afternoon.',
  },
];

/* ================================================================
   DATA: WATER ACTIVITIES
   ================================================================ */

const waterActivities = [
  {
    activity: 'Surfing',
    icon: Waves,
    locations: 'Taghazout, Imsouane, Sidi Kaouki, Tamri',
    season: 'Summer swells are smaller and ideal for beginners. Winter brings big waves for experienced surfers.',
    price: 'Lessons from 350 MAD per session. Board rental from 150 MAD per day.',
    description: 'Morocco\'s Atlantic coast has become a world-class surf destination. Summer waves are gentler, making June-August the best time for beginners. Taghazout has the highest concentration of surf camps and instructors.',
  },
  {
    activity: 'Kitesurfing & Windsurfing',
    icon: Wind,
    locations: 'Essaouira, Dakhla, Moulay Bousselham',
    season: 'Summer trade winds (June-September) deliver consistent 15-25 knot conditions daily.',
    price: 'Lessons from 600 MAD for 2 hours. Equipment rental from 400 MAD per day.',
    description: 'Essaouira and Dakhla are world-renowned wind sports destinations. The summer alizee wind blows reliably every afternoon, creating flat-water lagoon conditions in Dakhla and wave-riding opportunities in Essaouira.',
  },
  {
    activity: 'River & Waterfall Swimming',
    icon: Droplets,
    locations: 'Ouzoud Falls, Ourika Valley, Paradise Valley, Akchour',
    season: 'Best June-August when rivers are warm and flow is manageable. Spring runoff can make currents dangerous.',
    price: 'Free access. Guided hikes from 200 MAD.',
    description: 'Natural swimming holes in the Atlas foothills offer the most refreshing escape from summer heat. Ouzoud Falls has pools beneath the cascades. Paradise Valley near Agadir has turquoise rock pools connected by short hikes.',
  },
  {
    activity: 'Jet Skiing & Parasailing',
    icon: Waves,
    locations: 'Agadir, Tangier, Marina Smir, Saidia',
    season: 'All summer. Calmest seas in July-August.',
    price: 'Jet ski rental from 500 MAD per 30 minutes. Parasailing from 400 MAD per ride.',
    description: 'Agadir and the Mediterranean coast offer motorized water sports with professional operators. Marina Smir near Tetouan has a well-equipped water sports center. Saidia on the Algerian border has the longest beach in Morocco.',
  },
];

/* ================================================================
   DATA: NIGHT MARKET GUIDE
   ================================================================ */

const nightMarkets = [
  {
    city: 'Marrakech',
    spot: 'Jemaa el-Fnaa',
    description: 'The most famous night market in North Africa transforms every evening around 6pm. Over 100 food stalls serve grilled meats, snail soup, fresh juices, and Moroccan salads. In summer, the square stays active until after midnight when temperatures finally drop below 30 C.',
    mustTry: 'Lamb tangia, fresh orange juice (from 10 MAD), snail soup (from 5 MAD)',
  },
  {
    city: 'Fes',
    spot: 'Rcif Square & Talaa Kebira',
    description: 'Fes has a more local night food scene. Stalls near Rcif Square sell brochettes, harira, and stuffed msemen. The medina alleys stay cooler than the open squares. Street food in Fes is generally cheaper than Marrakech.',
    mustTry: 'Fassi pastilla, kefta brochettes (from 15 MAD), avocado smoothie (from 12 MAD)',
  },
  {
    city: 'Rabat',
    spot: 'Avenue Mohammed V & Oudaya Kasbah area',
    description: 'Rabat offers a clean, organized street food scene along the main avenue. Locals gather at ice cream stands and fresh juice carts until late. The Oudaya Kasbah area has terrace cafes overlooking the Bou Regreg river with cooling evening breezes.',
    mustTry: 'Maakouda (potato fritters, from 5 MAD), ice cream (from 15 MAD), seafood pastilla',
  },
  {
    city: 'Essaouira',
    spot: 'Port & Place Moulay Hassan',
    description: 'The port fish stalls are the highlight. Choose your fish from the display, negotiate a price, and it is grilled on the spot with cumin, salt, and lemon. Evenings on Place Moulay Hassan feature live Gnaoua musicians and a relaxed, breezy atmosphere.',
    mustTry: 'Grilled sardines (from 30 MAD per plate), seafood mixed grill, chermoula fish',
  },
];

/* ================================================================
   DATA: ACCOMMODATION TIPS
   ================================================================ */

const accommodationTips = [
  {
    type: 'Riads with Plunge Pools',
    icon: Droplets,
    price: 'From 600 MAD per night',
    description: 'Many renovated riads in Marrakech and Fes have courtyard plunge pools. The thick walls and central courtyard design of traditional riads naturally stay 5-10 degrees cooler than outside temperatures. A riad with a pool is the ideal Marrakech summer base.',
    cities: 'Marrakech, Fes, Essaouira',
  },
  {
    type: 'Beach Resort Hotels',
    icon: Sun,
    price: 'From 800 MAD per night',
    description: 'Agadir and Saidia have full-service resort hotels with large pools, beach access, and all-inclusive options. Most have strong AC, multiple restaurants, and kids clubs. Direct beach access saves on daily taxi costs.',
    cities: 'Agadir, Saidia, El Jadida, Tangier',
  },
  {
    type: 'Mountain Guesthouses',
    icon: Mountain,
    price: 'From 300 MAD per night',
    description: 'Simple but comfortable guesthouses in the Atlas foothills offer natural cooling at altitude. No AC needed at 1,000m+ elevation. Many have terraces with valley views, home-cooked meals, and access to hiking trails and river swimming spots.',
    cities: 'Imlil, Ourika Valley, Ifrane, Chefchaouen',
  },
  {
    type: 'Budget Hostels with AC',
    icon: Building,
    price: 'From 150 MAD per night',
    description: 'Modern hostels in major cities now offer AC dorm rooms and rooftop terraces. Verify AC before booking in summer since older hostels may only have fans. Many have communal kitchens where you can prepare cold meals during the hottest hours.',
    cities: 'Marrakech, Fes, Rabat, Casablanca',
  },
];

/* ================================================================
   DATA: PACKING LIST
   ================================================================ */

const packingEssentials = [
  { item: 'Lightweight long-sleeve shirts', why: 'Sun protection while respecting dress codes. Cotton or linen breathes in heat.', icon: ShieldCheck },
  { item: 'Wide-brim sun hat', why: 'Covers face, ears, and neck. Non-negotiable for inland cities and hiking.', icon: Sun },
  { item: 'SPF 50+ sunscreen', why: 'Moroccan sun is intense. Reapply every 2 hours. Harder to find locally and more expensive.', icon: Shield },
  { item: 'Reusable water bottle (1L+)', why: 'Refill at restaurants and hotels. Reduces plastic waste and saves from 10 MAD per bottle.', icon: Droplets },
  { item: 'Comfortable walking sandals', why: 'Leather or sport sandals for medinas and beaches. Break them in before the trip.', icon: CheckCircle },
  { item: 'Swimwear & quick-dry towel', why: 'For beaches, hotel pools, and river swimming in the Atlas. Pack two sets.', icon: Waves },
  { item: 'Light jacket or cardigan', why: 'AC in restaurants and malls can be aggressive. Coastal evenings drop to 18-20 C.', icon: Wind },
  { item: 'Electrolyte sachets', why: 'Oral rehydration salts prevent heat exhaustion. Pharmacies in Morocco sell them from 5 MAD.', icon: Heart },
];

/* ================================================================
   DATA: HEALTH & HYDRATION TIPS
   ================================================================ */

const healthTips = [
  {
    title: 'Drink 3-4 Liters Daily',
    icon: Droplets,
    text: 'Your body loses water fast in Moroccan summer heat. Start every morning with 500ml before leaving your accommodation. Carry water everywhere. By the time you feel thirsty, you are already dehydrated.',
  },
  {
    title: 'Avoid Midday Exposure',
    icon: Sun,
    text: 'Between 12pm and 4pm, temperatures in inland cities peak at 40-45 C. Follow the local pattern: sightsee in the morning, rest at your riad pool after lunch, then head out again in the late afternoon.',
  },
  {
    title: 'Eat Light & Hydrating',
    icon: Utensils,
    text: 'Moroccan summer salads (zaalouk, taktouka, khobz with olive oil) are designed for the heat. Watermelon, melon, and fresh orange juice are everywhere. Heavy tagines are better for cooler evenings.',
  },
  {
    title: 'Recognize Heat Exhaustion',
    icon: AlertTriangle,
    text: 'Symptoms include headache, dizziness, nausea, rapid heartbeat, and excessive sweating that suddenly stops. Move to shade immediately, apply cool water to the neck and wrists, and drink slowly. Seek medical help if symptoms persist for more than 30 minutes.',
  },
  {
    title: 'Protect Your Skin',
    icon: ShieldCheck,
    text: 'Apply SPF 50+ sunscreen 30 minutes before going outside. Wear a hat and sunglasses. Moroccan pharmacies stock good sunscreen brands (Avene, La Roche-Posay) but prices are higher than in Europe. Bring your own.',
  },
  {
    title: 'Mind Food Hygiene in Heat',
    icon: Shield,
    text: 'Summer heat accelerates spoilage. Eat at stalls with high turnover where food is cooked fresh. Avoid pre-cut fruit sitting in the sun. Peel your own fruit. Stick to bottled or filtered water. Street food from busy stalls is generally safe.',
  },
];

/* ================================================================
   DATA: BUDGET TIPS
   ================================================================ */

const budgetTips = [
  {
    tip: 'Book Coastal Accommodation Early',
    detail: 'Essaouira and Agadir fill up by May for the summer months. Booking 2-3 months ahead can save 30-40% compared to last-minute rates. Riads with pools in Marrakech also spike during summer.',
  },
  {
    tip: 'Travel Midweek',
    detail: 'Domestic tourists flood coastal towns on weekends (Thursday evening through Sunday). Midweek rates at beach hotels drop from 800 MAD to from 500 MAD per night.',
  },
  {
    tip: 'Use Night Buses',
    detail: 'CTM and Supratours run overnight AC buses between major cities. A Marrakech-Essaouira ticket costs from 80 MAD. You save a night of accommodation and arrive in the cool morning.',
  },
  {
    tip: 'Eat Where Locals Eat',
    detail: 'Tourist restaurants charge from 120 MAD for a tagine. Local restaurants two streets away serve the same meal for from 40 MAD. Night market food stalls are the best value: full meals from 25 MAD.',
  },
  {
    tip: 'Negotiate Activities in Groups',
    detail: 'Surf lessons, boat trips, and guided hikes are cheaper per person when booked as a group. A private surf lesson costs from 350 MAD but a group class drops to from 200 MAD per person.',
  },
  {
    tip: 'Use Trains Over Taxis',
    detail: 'ONCF trains connect Tangier, Rabat, Casablanca, and Marrakech with AC comfort. A Casablanca-Marrakech second-class ticket costs from 100 MAD versus from 350 MAD for a shared grand taxi.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoSummerTravelPage() {
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
          style={{ backgroundImage: 'url(/images/hero-coastal.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Summer Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sun className="w-4 h-4" />
            Summer Travel Planning
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Summer Travel
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Where to go when the heat hits. Coastal escapes, mountain retreats, music festivals,
            and practical tips for navigating Morocco between June and September.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Summer in Morocco: A Tale of Two Climates
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco in summer splits into two realities. Inland cities like Marrakech and Fes
              become furnaces, with afternoon temperatures regularly exceeding 40 C. The Sahara
              becomes genuinely dangerous. But along the 3,500 km Atlantic and Mediterranean
              coastline, ocean breezes hold temperatures in the low to mid twenties. The Atlas
              Mountains offer another escape, with valleys and villages sitting 10-15 degrees
              cooler than the plains below.
            </p>
            <p>
              Summer is also festival season. The Gnaoua World Music Festival fills Essaouira
              with trance rhythms and international acts. Mawazine in Rabat draws millions.
              Agadir hosts the Timitar Festival celebrating Amazigh culture. Night markets
              come alive after sunset when temperatures finally relent, and the country shifts
              into an after-dark rhythm that suits the season.
            </p>
            <p>
              This guide covers every angle: which regions stay comfortable, how to handle the
              heat in inland cities, the best beaches and water activities, festival schedules,
              accommodation strategies (AC and pools are not optional), and practical tips for
              staying healthy, hydrated, and within budget during peak season.
            </p>
          </div>
        </div>
      </section>

      {/* ── Weather by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Summer Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco spans from Atlantic beaches to Sahara dunes. Summer comfort depends entirely
            on where you go.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {weatherRegions.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <RegionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {region.region}
                        </h3>
                        <span className="text-sm font-semibold text-[var(--color-accent)]">
                          {region.tempRange}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {region.cities}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{region.conditions}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Verdict:</span> {region.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coastal Escapes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Coastal Escapes: Where Morocco Stays Cool
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These Atlantic towns are the destinations Moroccans themselves head to when summer heat
            takes hold inland.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coastalEscapes.map((escape) => (
              <div key={escape.city} className="card-moroccan overflow-hidden">
                <div className="relative h-52">
                  <img
                    src={escape.image}
                    alt={`${escape.city} coastal view in summer with ocean and buildings`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {escape.city}
                    </h3>
                    <p className="text-white/80 text-sm">{escape.highlight} &middot; {escape.temp}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{escape.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                      Top Activities
                    </h4>
                    <ul className="space-y-1">
                      {escape.activities.map((act) => (
                        <li key={act} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs font-semibold text-[var(--color-accent)]">
                    <DollarSign className="w-3 h-3 inline mr-1" />
                    {escape.stay}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mountain Retreats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Atlas Mountain Retreats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When the coast is not enough, head uphill. The Atlas offers natural air conditioning
            and some of Morocco&apos;s best hiking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Ourika Valley',
                elevation: '1,000-1,500m',
                temp: '25-32 C',
                drive: '45 min from Marrakech',
                draw: 'River pools, seven waterfalls hike, Berber villages, saffron gardens. Day-trippable from Marrakech or stay overnight at a mountain guesthouse.',
              },
              {
                name: 'Imlil & Toubkal Region',
                elevation: '1,700-4,167m',
                temp: '18-28 C',
                drive: '90 min from Marrakech',
                draw: 'Gateway to Jebel Toubkal, North Africa\'s highest peak. Summer is the prime trekking season. Walnut and apple orchards line the trails. Guesthouses from 300 MAD include dinner.',
              },
              {
                name: 'Ifrane & Middle Atlas',
                elevation: '1,650m',
                temp: '20-28 C',
                drive: '1 hour from Fes',
                draw: 'Known as "Morocco\'s Switzerland." Cedar forests, Barbary macaques, clean mountain air. Rarely exceeds 28 C in summer. Lake Dayet Aoua for picnics and birdwatching.',
              },
              {
                name: 'Chefchaouen',
                elevation: '600m',
                temp: '25-33 C',
                drive: '4 hours from Fes',
                draw: 'The blue-washed Rif mountain town. Cooler than Fes by 5-8 degrees. Akchour waterfalls and the God\'s Bridge natural arch are within hiking distance. Relaxed pace of life.',
              },
            ].map((spot) => (
              <div key={spot.name} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {spot.name}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <Mountain className="w-3 h-3" /> {spot.elevation}
                  </span>
                  <span className="flex items-center gap-1">
                    <Thermometer className="w-3 h-3" /> {spot.temp}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {spot.drive}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spot.draw}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Summer Festivals ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Summer Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s biggest cultural events happen in summer. Several are free and draw
            hundreds of thousands of attendees.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {summerFestivals.map((fest) => {
              const FestIcon = fest.icon;
              return (
                <div key={fest.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <FestIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {fest.name}
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                          {fest.month} &middot; {fest.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{fest.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {fest.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Water Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Atlantic surf to Atlas river pools, water is the antidote to Moroccan summer heat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {waterActivities.map((activity) => {
              const ActIcon = activity.icon;
              return (
                <div key={activity.activity} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ActIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {activity.activity}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{activity.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">Where:</span>{' '}
                      {activity.locations}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">Season:</span>{' '}
                      {activity.season}
                    </p>
                    <p className="text-[var(--color-accent)] font-semibold">
                      <DollarSign className="w-3 h-3 inline mr-1" />
                      {activity.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Night Markets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Night Markets &amp; After-Dark Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Summer shifts Morocco&apos;s eating schedule later. Dinner at 10pm is normal.
            Night markets peak between 9pm and midnight.
          </p>

          <div className="space-y-6">
            {nightMarkets.map((market) => (
              <div key={market.city} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {market.city}: {market.spot}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{market.description}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--color-accent)]">Must try:</span>{' '}
                  {market.mustTry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodation Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay: AC &amp; Pool Are Not Optional
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your accommodation strategy matters more in summer than any other season. Prioritize
            cooling facilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationTips.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {acc.type}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{acc.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--color-accent)]">{acc.price}</span>
                    <span>
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {acc.cities}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            Seasonal pricing can change. Rates are higher June-August compared to shoulder season.
          </p>
        </div>
      </section>

      {/* ── Beating the Heat in Inland Cities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beating the Heat in Marrakech &amp; Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You can visit inland cities in summer. You just need to change your schedule.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              The Summer Daily Schedule
            </h3>
            <div className="space-y-4">
              {[
                { time: '6:00 - 10:00 AM', activity: 'Prime sightseeing window. Visit souks, palaces, and mosques while temperatures are in the mid-twenties. Markets are quieter with better light for photography.' },
                { time: '10:00 AM - 12:00 PM', activity: 'Visit indoor attractions: museums, madrasas, art galleries. The Bahia Palace and Ben Youssef Madrasa in Marrakech, the Bou Inania in Fes. Thick walls keep interiors cool.' },
                { time: '12:00 - 4:00 PM', activity: 'Retreat to your riad. Swim in the plunge pool, nap in an air-conditioned room, read on the rooftop terrace under shade. This is how locals handle the heat.' },
                { time: '4:00 - 7:00 PM', activity: 'Head out again as shadows lengthen. Explore neighborhoods you missed in the morning. Visit a hammam for a cooling scrub and steam session.' },
                { time: '7:00 PM - midnight', activity: 'Golden hour. Rooftop terraces, night markets, outdoor dining. Temperatures drop into the high twenties. Jemaa el-Fnaa peaks after 9pm. The city comes alive.' },
              ].map((slot) => (
                <div key={slot.time} className="flex gap-4">
                  <div className="w-36 shrink-0">
                    <span className="text-xs font-semibold text-[var(--color-accent)] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {slot.time}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{slot.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Morocco in Summer
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light but smart. Sun protection and hydration gear are non-negotiable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingEssentials.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <ItemIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.why}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Health & Hydration ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Hydration
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Summer heat demands respect. These are not suggestions -- they are necessities.
          </p>

          <div className="space-y-6">
            {healthTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ramadan Awareness ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ramadan &amp; Summer Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ramadan follows the Islamic lunar calendar and shifts earlier by roughly 10 days each
            year.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                In 2026, Ramadan is expected to fall approximately in late February to late March,
                so summer travelers will not encounter it. However, the Islamic calendar shifts
                annually, and in future years Ramadan will again overlap with summer months as it
                did in the 2010s.
              </p>
              <p>
                When Ramadan falls in summer, days are longer and the fast (no food or water from
                sunrise to sunset) becomes more demanding. This affects daily rhythms: many
                restaurants close during the day in smaller towns, shops may shorten hours, and the
                overall pace slows. Hotels and tourist-oriented restaurants in major cities continue
                serving food to non-Muslim guests, though eating openly in public during fasting
                hours is considered disrespectful.
              </p>
              <p>
                The upside of visiting during Ramadan is the iftar experience. Every evening at
                sunset, the fast breaks with dates, harira soup, and communal meals. Some riads
                host iftar dinners for guests. Night markets become livelier than usual, and the
                atmosphere after dark is festive.
              </p>
            </div>
            <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mt-4">
              <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">Planning ahead:</span>{' '}
                Always check the Islamic calendar for your specific travel dates. The exact start of
                Ramadan depends on moon sighting and can shift by a day or two.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Peak-Season Budget Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Summer is peak season in Morocco. Prices rise 20-40% across the board.
            These strategies keep costs manageable.
          </p>

          <div className="space-y-4">
            {budgetTips.map((item, i) => (
              <div key={item.tip} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.tip}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            All prices are approximate. Seasonal pricing can change based on demand and availability.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Summer in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira.webp"
                alt="Essaouira medina and Atlantic coast with whitewashed buildings in summer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Essaouira Coast</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-gnaoua-festival.webp"
                alt="Gnaoua World Music Festival performers in Essaouira with traditional instruments"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Gnaoua Festival</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-surf-taghazout.webp"
                alt="Surfer riding a wave at Taghazout beach with Moroccan coastline in background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Taghazout Surf</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common questions about visiting Morocco in summer.
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
                title: 'Best Beaches in Morocco',
                description: 'Every major beach from Agadir to Saidia, ranked by swimming safety, scenery, and facilities.',
                href: '/best-beaches-morocco',
                icon: Waves,
              },
              {
                title: 'Morocco Weather Guide',
                description: 'Month-by-month climate breakdown for every region to help you pick the right travel window.',
                href: '/weather',
                icon: Sun,
              },
              {
                title: 'Morocco Packing Guide',
                description: 'Season-specific packing lists, dress codes, and gear recommendations for every type of trip.',
                href: '/packing',
                icon: Backpack,
              },
              {
                title: 'Budget Travel Morocco',
                description: 'Day-by-day budget breakdowns, money-saving strategies, and cost comparisons across cities.',
                href: '/budget-travel',
                icon: DollarSign,
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Morocco Summer Trip?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Explore our city guides, book coastal accommodation early, and let Morocco&apos;s
            Atlantic breezes, mountain trails, and festival nights shape your summer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <MapPin className="w-4 h-4" />
              Explore Cities
            </Link>
            <Link
              href="/best-time"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Calendar className="w-4 h-4" />
              Best Time to Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
